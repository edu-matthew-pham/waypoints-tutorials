// Sheet: a small spreadsheet for the core ideas that every spreadsheet app shares: cells, references, formulas that
// keep up when a cell changes, and the functions SUM, AVERAGE, MIN, MAX, COUNT, COUNTIF, IF, ROUND and ABS.
//   widget: sheet
//   cell A1: Day                  a cell's contents: text, a number, or a formula starting with = (columns A to L, rows 1 to 30)
//   cell D2: =B2*C2               formulas use + - * / ^ & (join text) and the comparisons = <> < > <= >=, and ranges (B2:B5)
//   edit: B2:B5, D2               the cells students may change (cells, ranges or whole sets separated by commas);
//                                 default all; "none" makes the sheet read-only (to look at and trace)
//   cols: 5, rows: 8              the size (default: just big enough for the cells and edit ranges)
//   name total_cost: D6           a named result for checks (needs an underscore; the cell must hold a number)
//   formulas: on                  start with formulas showing instead of their results (a button toggles it)
// Students click a cell and type; Enter or a click elsewhere finishes and recalculates; the arrow keys move; the
// bar above the sheet shows the selected cell's name and its contents. Errors say what went wrong in plain words.
// state: { scope: { vars: { c_B3 (the number in each cell that has one), f_B3 (1 if the cell holds a formula, else 0),
//   n_formulas (how many formula cells), n_errors (how many cells show an error), and each `name` }, points: {} },
//   cells: { A1: "…" } (what every cell holds) }
// Checks: "total_cost = 36", "f_D2 = 1", "f_D2 = 1 and c_D2 = 12", "n_errors = 0", "n_formulas >= 3".
(function (B) {
  'use strict';
  var MAXC = 12, MAXR = 30;
  var MESSAGES = {
    '#DIV/0!': 'A formula divides by zero (or by an empty cell).',
    '#NAME?': 'A word in a formula is not recognised. Check the spelling of the function or cell name.',
    '#REF!': 'A formula refers to a cell that is not on this sheet.',
    '#VALUE!': 'A formula tried to do sums with text.',
    '#CIRC!': 'A formula refers to itself, directly or through other cells.',
    '#ERROR!': 'A formula is not written correctly. Check the brackets and commas.',
  };

  function colName(i) { return String.fromCharCode(65 + i); }
  function SErr(code) { var e = new Error(code); e.code = code; return e; }

  // ---------- formulas ----------
  function tokenize(src) {
    var toks = [], s = String(src), i = 0, m;
    while (i < s.length) {
      var rest = s.slice(i);
      if ((m = /^\s+/.exec(rest))) { i += m[0].length; continue; }
      if ((m = /^(\d+(?:\.\d*)?|\.\d+)(%?)/.exec(rest))) { toks.push({ t: 'num', v: Number(m[1]) / (m[2] ? 100 : 1) }); i += m[0].length; continue; }
      if ((m = /^"([^"]*)"/.exec(rest))) { toks.push({ t: 'str', v: m[1] }); i += m[0].length; continue; }
      if ((m = /^(TRUE|FALSE)\b(?!\()/i.exec(rest))) { toks.push({ t: 'bool', v: /^t/i.test(m[1]) }); i += m[0].length; continue; }
      if ((m = /^([A-Za-z][A-Za-z0-9.]*)\s*(?=\()/.exec(rest))) { toks.push({ t: 'fn', v: m[1].toUpperCase() }); i += m[0].length; continue; }
      if ((m = /^\$?([A-Za-z])\$?(\d+)(?::\$?([A-Za-z])\$?(\d+))?(?![A-Za-z0-9_])/.exec(rest))) {
        var c1 = m[1].toUpperCase().charCodeAt(0) - 65, r1 = Number(m[2]);
        if (m[3]) toks.push({ t: 'range', c1: c1, r1: r1, c2: m[3].toUpperCase().charCodeAt(0) - 65, r2: Number(m[4]) });
        else toks.push({ t: 'ref', c: c1, r: r1 });
        i += m[0].length; continue;
      }
      if ((m = /^(<>|<=|>=|[-+*\/^&=<>(),])/.exec(rest))) { toks.push({ t: 'op', v: m[1] }); i += m[0].length; continue; }
      if (/^[A-Za-z_]/.test(rest)) throw SErr('#NAME?');
      throw SErr('#ERROR!');
    }
    return toks;
  }

  function parseFormula(src) {
    var toks = tokenize(src), p = 0;
    var isOp = function (v) { var t = toks[p]; return t && t.t === 'op' && t.v === v; };
    var need = function (v) { if (!isOp(v)) throw SErr('#ERROR!'); p++; };
    function cmp() {
      var l = cat();
      while (toks[p] && toks[p].t === 'op' && /^(=|<>|<=|>=|<|>)$/.test(toks[p].v)) { var op = toks[p++].v; l = { n: 'bin', op: op, l: l, r: cat() }; }
      return l;
    }
    function cat() { var l = add(); while (isOp('&')) { p++; l = { n: 'bin', op: '&', l: l, r: add() }; } return l; }
    function add() { var l = mul(); while (isOp('+') || isOp('-')) { var op = toks[p++].v; l = { n: 'bin', op: op, l: l, r: mul() }; } return l; }
    function mul() { var l = pow(); while (isOp('*') || isOp('/')) { var op = toks[p++].v; l = { n: 'bin', op: op, l: l, r: pow() }; } return l; }
    function pow() { var l = un(); while (isOp('^')) { p++; l = { n: 'bin', op: '^', l: l, r: un() }; } return l; }
    function un() { if (isOp('-')) { p++; return { n: 'neg', e: un() }; } if (isOp('+')) { p++; return un(); } return prim(); }
    function prim() {
      var t = toks[p++];
      if (!t) throw SErr('#ERROR!');
      if (t.t === 'num' || t.t === 'str' || t.t === 'bool') return { n: 'lit', v: t.v };
      if (t.t === 'ref') return { n: 'ref', c: t.c, r: t.r };
      if (t.t === 'range') return { n: 'range', c1: t.c1, r1: t.r1, c2: t.c2, r2: t.r2 };
      if (t.t === 'fn') {
        need('(');
        var args = [];
        if (!isOp(')')) { args.push(cmp()); while (isOp(',')) { p++; args.push(cmp()); } }
        need(')');
        return { n: 'fn', name: t.v, args: args };
      }
      if (t.t === 'op' && t.v === '(') { var e = cmp(); need(')'); return e; }
      throw SErr('#ERROR!');
    }
    var tree = cmp();
    if (p < toks.length) throw SErr('#ERROR!');
    return tree;
  }

  var NUM = /^\s*-?(\d+(\.\d*)?|\.\d+)\s*$/;
  function num(v) {
    if (v === null || v === undefined) return 0;
    if (typeof v === 'number') return v;
    if (typeof v === 'boolean') return v ? 1 : 0;
    if (NUM.test(v)) return Number(v);
    throw SErr('#VALUE!');
  }
  function text(v) { return v === null || v === undefined ? '' : typeof v === 'boolean' ? (v ? 'TRUE' : 'FALSE') : typeof v === 'number' ? String(Math.round(v * 1e10) / 1e10) : String(v); }
  function compare(a, b) {
    if (a === null) a = typeof b === 'string' ? '' : 0;
    if (b === null) b = typeof a === 'string' ? '' : 0;
    var ta = typeof a, tb = typeof b;
    if (ta === 'boolean') { a = a ? 1 : 0; ta = 'number'; }
    if (tb === 'boolean') { b = b ? 1 : 0; tb = 'number'; }
    if (ta === 'number' && tb === 'number') return a < b ? -1 : a > b ? 1 : 0;
    if (ta !== tb) return ta === 'number' ? -1 : 1;
    a = a.toLowerCase(); b = b.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function truth(v) { if (typeof v === 'boolean') return v; if (v === null) return false; if (typeof v === 'number') return v !== 0; throw SErr('#VALUE!'); }

  // The sheet's own working: cells are evaluated on demand, once each; a cell that needs itself is #CIRC!.
  function makeCtx(raws, dims) {
    var cache = {}, stack = {}, trees = {};
    function cellValue(raw) {
      if (raw === undefined || raw === '') return null;
      if (NUM.test(raw)) return Number(raw);
      return raw;
    }
    function get(c, r) {
      if (c < 0 || c >= dims.c || r < 1 || r > dims.r) throw SErr('#REF!');
      var k = colName(c) + r;
      if (cache[k]) { if (cache[k].err) throw SErr(cache[k].err); return cache[k].v; }
      if (stack[k]) throw SErr('#CIRC!');
      stack[k] = true;
      try {
        var raw = raws[k], v;
        if (typeof raw === 'string' && raw.charAt(0) === '=') {
          if (!trees[k]) trees[k] = parseFormula(raw.slice(1));
          v = ev(trees[k]);
        } else v = cellValue(raw);
        cache[k] = { v: v };
        return v;
      } catch (e) {
        if (!e.code) throw e;
        cache[k] = { err: e.code };
        throw e;
      } finally { delete stack[k]; }
    }
    function cells(n) {
      var out = [], c1 = Math.min(n.c1, n.c2), c2 = Math.max(n.c1, n.c2), r1 = Math.min(n.r1, n.r2), r2 = Math.max(n.r1, n.r2);
      for (var r = r1; r <= r2; r++) for (var c = c1; c <= c2; c++) out.push(get(c, r));
      return out;
    }
    // The numbers in a function's arguments: ranges count only their numbers; a single value must be a number.
    function numbers(args) {
      var out = [];
      args.forEach(function (a) {
        if (a.n === 'range') cells(a).forEach(function (v) { if (typeof v === 'number') out.push(v); });
        else { var v = ev(a); if (v !== null) out.push(num(v)); }
      });
      return out;
    }
    function matches(v, crit) {
      var m = /^(<>|<=|>=|<|>|=)?(.*)$/.exec(typeof crit === 'string' ? crit : String(crit));
      var op = m[1] || '=', want = m[2];
      var w = NUM.test(want) ? Number(want) : want;
      if (typeof crit === 'number') { op = '='; w = crit; }
      if (v === null) return op === '=' && w === '';
      var c = compare(v, w);
      return op === '=' ? c === 0 : op === '<>' ? c !== 0 : op === '<' ? c < 0 : op === '>' ? c > 0 : op === '<=' ? c <= 0 : c >= 0;
    }
    var FN = {
      SUM: function (a) { return numbers(a).reduce(function (s, x) { return s + x; }, 0); },
      AVERAGE: function (a) { var n = numbers(a); if (!n.length) throw SErr('#DIV/0!'); return n.reduce(function (s, x) { return s + x; }, 0) / n.length; },
      MIN: function (a) { var n = numbers(a); return n.length ? Math.min.apply(null, n) : 0; },
      MAX: function (a) { var n = numbers(a); return n.length ? Math.max.apply(null, n) : 0; },
      COUNT: function (a) { return numbers(a).length; },
      ROUND: function (a) { if (a.length < 1 || a.length > 2) throw SErr('#ERROR!'); var d = a.length === 2 ? num(ev(a[1])) : 0, f = Math.pow(10, d), x = num(ev(a[0])); return Math.round(x * f + (x < 0 ? -1e-9 : 1e-9)) / f; },
      ABS: function (a) { if (a.length !== 1) throw SErr('#ERROR!'); return Math.abs(num(ev(a[0]))); },
      IF: function (a) { if (a.length < 2 || a.length > 3) throw SErr('#ERROR!'); return truth(ev(a[0])) ? ev(a[1]) : (a.length === 3 ? ev(a[2]) : false); },
      COUNTIF: function (a) {
        if (a.length !== 2 || a[0].n !== 'range') throw SErr('#ERROR!');
        var crit = ev(a[1]), n = 0;
        cells(a[0]).forEach(function (v) { if (matches(v, crit)) n++; });
        return n;
      },
    };
    function ev(n) {
      if (n.n === 'lit') return n.v;
      if (n.n === 'ref') return get(n.c, n.r);
      if (n.n === 'range') throw SErr('#VALUE!');
      if (n.n === 'neg') return -num(ev(n.e));
      if (n.n === 'fn') { if (!FN[n.name]) throw SErr('#NAME?'); return FN[n.name](n.args); }
      var a = ev(n.l), b = ev(n.r), op = n.op;
      if (op === '&') return text(a) + text(b);
      if (op === '=' || op === '<>' || op === '<' || op === '>' || op === '<=' || op === '>=') {
        var c = compare(a, b);
        return op === '=' ? c === 0 : op === '<>' ? c !== 0 : op === '<' ? c < 0 : op === '>' ? c > 0 : op === '<=' ? c <= 0 : c >= 0;
      }
      var x = num(a), y = num(b);
      if (op === '+') return x + y;
      if (op === '-') return x - y;
      if (op === '*') return x * y;
      if (op === '/') { if (y === 0) throw SErr('#DIV/0!'); return x / y; }
      var r = Math.pow(x, y);
      if (!isFinite(r)) throw SErr('#VALUE!');
      return r;
    }
    return { get: get };
  }

  /** Work out every cell of a sheet. raws: { A1: "text" | "12" | "=B1*2" }; dims: { c: columns, r: rows }. Returns { A1: { v } or { err } }. */
  function calc(raws, dims) {
    var ctx = makeCtx(raws, dims), out = {};
    for (var r = 1; r <= dims.r; r++) for (var c = 0; c < dims.c; c++) {
      var k = colName(c) + r;
      try { out[k] = { v: ctx.get(c, r) }; } catch (e) { if (!e.code) throw e; out[k] = { err: e.code }; }
    }
    return out;
  }
  B.sheetCalc = calc;   // for tools/check-sheet.mjs

  // ---------- the widget ----------
  var spec = null, ui = {}, raws = {}, vals = {}, sel = 'A1', showF = false, dims = { c: 1, r: 1 };
  var show = function (v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'number') return String(Math.round(v * 1e4) / 1e4);
    if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
    return String(v);
  };
  function refOf(s, where) {
    var m = /^\s*([A-La-l])(\d{1,2})\s*$/.exec(s);
    if (!m || Number(m[2]) < 1 || Number(m[2]) > MAXR) throw new Error(where + ': "' + s.trim() + '" is not a cell (columns A to L, rows 1 to ' + MAXR + ', such as B2).');
    return { c: m[1].toUpperCase().charCodeAt(0) - 65, r: Number(m[2]) };
  }
  function expand(list, where) {
    var out = [];
    list.split(',').forEach(function (part) {
      part = part.trim(); if (!part) return;
      var ends = part.split(':');
      if (ends.length > 2) throw new Error(where + ': "' + part + '" is not a cell or a range (such as B2 or B2:B5).');
      var a = refOf(ends[0], where), b = ends.length === 2 ? refOf(ends[1], where) : a;
      for (var r = Math.min(a.r, b.r); r <= Math.max(a.r, b.r); r++) for (var c = Math.min(a.c, b.c); c <= Math.max(a.c, b.c); c++) out.push({ c: c, r: r, k: colName(c) + r });
    });
    return out;
  }

  function parse(s) {
    s.sheet = { cells: {}, names: {}, edit: null };
    var maxC = 1, maxR = 1;
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'cell') {
        var ref = refOf(it.name || '', where + ' (cell)');
        var k = colName(ref.c) + ref.r;
        s.sheet.cells[k] = it.value;
        maxC = Math.max(maxC, ref.c + 1); maxR = Math.max(maxR, ref.r);
      } else if (it.kind === 'name') {
        if (!/^[A-Za-z][A-Za-z0-9]*_\w+$/.test(it.name || '')) throw new Error(where + ': a name needs an underscore so a check can read it (total_cost, not total).');
        var tgt = refOf(it.value, where + ' (name ' + it.name + ')');
        s.sheet.names[it.name] = colName(tgt.c) + tgt.r;
        maxC = Math.max(maxC, tgt.c + 1); maxR = Math.max(maxR, tgt.r);
      }
    });
    if (s.edit !== undefined && !/^(all|none)$/i.test(s.edit)) {
      var set = {};
      expand(s.edit, 'edit').forEach(function (x) { set[x.k] = true; maxC = Math.max(maxC, x.c + 1); maxR = Math.max(maxR, x.r); });
      s.sheet.edit = set;
    } else if (/^none$/i.test(s.edit || '')) s.sheet.edit = {};
    var cols = s.cols !== undefined ? Number(s.cols) : 0, rows = s.rows !== undefined ? Number(s.rows) : 0;
    if (s.cols !== undefined && !(cols >= 1 && cols <= MAXC)) throw new Error('cols: a number from 1 to ' + MAXC + '.');
    if (s.rows !== undefined && !(rows >= 1 && rows <= MAXR)) throw new Error('rows: a number from 1 to ' + MAXR + '.');
    s.sheet.dims = { c: Math.max(cols, maxC, 2), r: Math.max(rows, maxR, 2) };
    if (s.sheet.dims.c > MAXC || s.sheet.dims.r > MAXR) throw new Error('The sheet is too big (up to ' + MAXC + ' columns and ' + MAXR + ' rows).');
    if (!Object.keys(s.sheet.cells).length) throw new Error('A sheet needs some cells (such as "cell A1: Day").');
    s.sheet.showF = /^on$/i.test(s.formulas || '');
    // A named result must sit in a cell that holds something.
    Object.keys(s.sheet.names).forEach(function (n) {
      var k = s.sheet.names[n];
      if (s.sheet.cells[k] === undefined && !(s.sheet.edit === null || s.sheet.edit[k])) throw new Error('name ' + n + ': cell ' + k + ' is empty and students cannot fill it.');
    });
  }

  var editable = function (k) { return spec.sheet.edit === null || !!spec.sheet.edit[k]; };
  var rawOf = function (k) { return raws[k] === undefined ? '' : raws[k]; };

  function shownIn(k) {
    var r = vals[k];
    if (showF && String(rawOf(k)).charAt(0) === '=') return rawOf(k);
    if (!r) return '';
    return r.err ? r.err : show(r.v);
  }

  function paint() {
    Object.keys(ui.inputs).forEach(function (k) {
      var inp = ui.inputs[k], r = vals[k];
      if (document.activeElement !== inp) inp.value = shownIn(k);
      var td = inp.parentNode;
      td.classList.toggle('sh-err', !!(r && r.err));
      td.classList.toggle('sh-num', !!(r && typeof r.v === 'number' && !r.err));
      td.classList.toggle('sh-fx', String(rawOf(k)).charAt(0) === '=');
    });
    barShow();
    ui.toggle.textContent = showF ? 'Show results' : 'Show formulas';
    ui.toggle.setAttribute('aria-pressed', showF ? 'true' : 'false');
  }
  function barShow() {
    ui.name.textContent = sel;
    ui.fx.textContent = rawOf(sel);
    ui.fx.classList.toggle('sh-empty', rawOf(sel) === '');
    var r = vals[sel];
    var msg = r && r.err ? sel + ': ' + (MESSAGES[r.err] || r.err) : '';
    if (!msg) { var bad = Object.keys(vals).filter(function (k) { return vals[k].err; })[0]; if (bad) msg = bad + ' shows ' + vals[bad].err + '. ' + (MESSAGES[vals[bad].err] || ''); }
    B.say(msg, false);
  }

  function snapshot() {
    var vars = {}, formulas = 0, errors = 0, cellsOut = {};
    for (var r = 1; r <= dims.r; r++) for (var c = 0; c < dims.c; c++) {
      var k = colName(c) + r, v = vals[k], isF = String(rawOf(k)).charAt(0) === '=';
      if (isF) formulas++;
      if (v && v.err) errors++;
      vars['f_' + k] = isF ? 1 : 0;
      if (v && !v.err && typeof v.v === 'number') vars['c_' + k] = Math.round(v.v * 1e9) / 1e9;
      if (raws[k] !== undefined) cellsOut[k] = raws[k];
    }
    vars.n_formulas = formulas; vars.n_errors = errors;
    var out = [];
    Object.keys(spec.sheet.names).forEach(function (n) {
      var v = vals[spec.sheet.names[n]];
      if (v && !v.err && typeof v.v === 'number') { vars[n] = Math.round(v.v * 1e9) / 1e9; out.push(n + ' = ' + show(v.v)); }
    });
    return { state: { scope: { vars: vars, points: {} }, cells: cellsOut }, output: out.length ? out.join('; ') : formulas + ' formulas, ' + errors + ' errors' };
  }

  function recalc() { vals = calc(raws, dims); }
  function report() {
    var s = snapshot();
    var edits = {};
    Object.keys(raws).concat(Object.keys(spec.sheet.cells)).forEach(function (k) { if (editable(k) && rawOf(k) !== (spec.sheet.cells[k] === undefined ? '' : spec.sheet.cells[k])) edits[k] = rawOf(k); });
    B.save({ edits: edits });
    B.post(s.state, s.output);
  }

  function commit(k, textIn) {
    var t = String(textIn).replace(/^\s+|\s+$/g, '');
    if (t === rawOf(k)) return;
    if (t === '') delete raws[k]; else raws[k] = t;
    B.moved = true;
    recalc(); paint(); report();
  }

  function focusCell(c, r) {
    c = Math.max(0, Math.min(dims.c - 1, c)); r = Math.max(1, Math.min(dims.r, r));
    var inp = ui.inputs[colName(c) + r];
    if (inp) inp.focus();
  }
  function select(k) {
    sel = k;
    Object.keys(ui.inputs).forEach(function (x) { ui.inputs[x].tabIndex = x === k ? 0 : -1; ui.inputs[x].parentNode.classList.toggle('sh-sel', x === k); });
    barShow();
  }

  function buildCell(k, c, r) {
    var td = document.createElement('td'); td.setAttribute('role', 'gridcell');
    var inp = document.createElement('input'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.autocapitalize = 'off';
    inp.setAttribute('aria-label', k); inp.tabIndex = -1;
    var ed = editable(k);
    if (!ed) { inp.readOnly = true; td.classList.add('sh-lock'); inp.setAttribute('aria-readonly', 'true'); }
    else if (spec.sheet.edit !== null) td.classList.add('sh-edit');
    // Focusing a cell selects its contents, so typing replaces them. The mouse-up that ends the click would put the
    // caret back, so the first one after focusing is swallowed.
    var fresh = false;
    inp.addEventListener('focus', function () {
      select(k);
      if (ed) { inp.value = rawOf(k); inp.select(); fresh = true; setTimeout(function () { fresh = false; }, 400); }
      else inp.value = shownIn(k);
    });
    inp.addEventListener('mouseup', function (e) { if (fresh) { e.preventDefault(); fresh = false; } });
    inp.addEventListener('blur', function () {
      if (ed) commit(k, inp.value);
      inp.value = shownIn(k);
    });
    // Move to another cell; at the edge of the sheet there is nowhere to go, so the typed value is simply kept.
    var go = function (c2, r2) {
      if (c2 < 0 || c2 >= dims.c || r2 < 1 || r2 > dims.r) { if (ed) { commit(k, inp.value); inp.select(); } return; }
      focusCell(c2, r2);
    };
    inp.addEventListener('keydown', function (e) {
      var atStart = inp.readOnly || (inp.selectionStart === 0 && inp.selectionEnd === 0) || (inp.selectionStart === 0 && inp.selectionEnd === inp.value.length);
      var atEnd = inp.readOnly || (inp.selectionStart === inp.value.length && inp.selectionEnd === inp.value.length) || (inp.selectionStart === 0 && inp.selectionEnd === inp.value.length);
      if (e.key === 'Enter') { e.preventDefault(); go(c, r + 1); }
      else if (e.key === 'Escape') { e.preventDefault(); inp.value = rawOf(k); inp.select(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); go(c, r + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); go(c, r - 1); }
      else if (e.key === 'ArrowLeft' && atStart) { e.preventDefault(); go(c - 1, r); }
      else if (e.key === 'ArrowRight' && atEnd) { e.preventDefault(); go(c + 1, r); }
      else if (e.key === 'Tab' && !e.shiftKey && (c < dims.c - 1 || r < dims.r)) { e.preventDefault(); if (c < dims.c - 1) go(c + 1, r); else go(0, r + 1); }
      else if (e.key === 'Tab' && e.shiftKey && (c > 0 || r > 1)) { e.preventDefault(); if (c > 0) go(c - 1, r); else go(dims.c - 1, r - 1); }
    });
    ui.inputs[k] = inp;
    td.appendChild(inp);
    return td;
  }

  B.widget('sheet', {
    sections: ['gpanel'],
    label: function () { return 'A spreadsheet'; },
    parse: parse,
    start: function (fresh) {
      spec = B.spec; dims = spec.sheet.dims; showF = spec.sheet.showF;
      raws = {};
      Object.keys(spec.sheet.cells).forEach(function (k) { if (spec.sheet.cells[k] !== '') raws[k] = spec.sheet.cells[k]; });
      var sv = fresh ? null : B.saved();
      if (sv && sv.edits) Object.keys(sv.edits).forEach(function (k) {
        if (!/^[A-L]\d{1,2}$/.test(k) || !editable(k)) return;
        if (sv.edits[k] === '') delete raws[k]; else raws[k] = String(sv.edits[k]);
      });
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = { inputs: {} };
      var bar = document.createElement('div'); bar.className = 'sh-bar';
      ui.name = document.createElement('span'); ui.name.className = 'sh-name';
      var fxl = document.createElement('span'); fxl.className = 'sh-fxl'; fxl.textContent = 'fx'; fxl.setAttribute('aria-hidden', 'true');
      ui.fx = document.createElement('span'); ui.fx.className = 'sh-fxv';
      bar.append(ui.name, fxl, ui.fx); panel.appendChild(bar);
      var wrap = document.createElement('div'); wrap.className = 'sh-wrap';
      var table = document.createElement('table'); table.className = 'sh'; table.setAttribute('role', 'grid'); table.setAttribute('aria-label', 'Spreadsheet');
      var head = document.createElement('tr'); head.setAttribute('role', 'row');
      var corner = document.createElement('th'); corner.className = 'sh-corner'; corner.setAttribute('aria-hidden', 'true'); head.appendChild(corner);
      for (var c = 0; c < dims.c; c++) { var th = document.createElement('th'); th.scope = 'col'; th.textContent = colName(c); th.setAttribute('role', 'columnheader'); head.appendChild(th); }
      table.appendChild(head);
      for (var r = 1; r <= dims.r; r++) {
        var tr = document.createElement('tr'); tr.setAttribute('role', 'row');
        var rh = document.createElement('th'); rh.scope = 'row'; rh.textContent = r; rh.setAttribute('role', 'rowheader'); tr.appendChild(rh);
        for (c = 0; c < dims.c; c++) tr.appendChild(buildCell(colName(c) + r, c, r));
        table.appendChild(tr);
      }
      wrap.appendChild(table); panel.appendChild(wrap);
      var row = document.createElement('div'); row.className = 'gbar sh-buttons';
      ui.toggle = document.createElement('button'); ui.toggle.type = 'button';
      ui.toggle.addEventListener('click', function () { showF = !showF; paint(); });
      var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
      row.append(ui.toggle, again); panel.appendChild(row);
      sel = 'A1';
      recalc(); select('A1'); paint();
      report();
    },
  });
})(WPB);
