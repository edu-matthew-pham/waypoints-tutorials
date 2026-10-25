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

  // ---------- copying, sorting, filtering and charts (pure; tools/check-sheet.mjs tests them) ----------
  // Move a formula's relative references, as copy and paste does: dc columns and dr rows. A $ in front of a column
  // letter or a row number keeps it fixed. A reference pushed off the sheet becomes A0, which shows #REF!.
  function shiftFormula(raw, dc, dr) {
    if (typeof raw !== 'string' || raw.charAt(0) !== '=') return raw;
    return raw.split(/("[^"]*")/).map(function (part, i) {
      if (i % 2) return part;
      return part.replace(/(^|[^A-Za-z0-9_.$])(\$?)([A-Za-z])(\$?)(\d+)(?![A-Za-z0-9_(])/g, function (m, pre, ac, col, ar, row) {
        var c = col.toUpperCase().charCodeAt(0) - 65, r = Number(row);
        if (!ac) c += dc;
        if (!ar) r += dr;
        if (c < 0 || c > 25 || r < 1) return pre + 'A0';
        return pre + ac + String.fromCharCode(65 + c) + ar + r;
      });
    }).join('');
  }
  B.sheetShift = shiftFormula;

  /** Sort the data rows of a table (everything below its first row) by the shown results in one column. Whole rows move,
   *  empty cells go last, and a formula that uses its own row follows it. table: { c1, r1, c2, r2 }; col: a column index. */
  function sortTable(raws, dims, table, col, desc) {
    var vals = calc(raws, dims), rows = [], out = {};
    for (var r = table.r1 + 1; r <= table.r2; r++) rows.push(r);
    var order = rows.map(function (r, i) { var x = vals[colName(col) + r]; return { r: r, i: i, k: x && !x.err ? x.v : null }; });
    order.sort(function (a, b) {
      var ea = a.k === null, eb = b.k === null;
      if (ea && eb) return a.i - b.i;
      if (ea) return 1;
      if (eb) return -1;
      var c = compare(a.k, b.k);
      if (desc) c = -c;
      return c || a.i - b.i;
    });
    Object.keys(raws).forEach(function (k) {
      var m = /^([A-Z])(\d+)$/.exec(k);
      if (!m) { out[k] = raws[k]; return; }
      var c = m[1].charCodeAt(0) - 65, r = Number(m[2]);
      if (!(r > table.r1 && r <= table.r2 && c >= table.c1 && c <= table.c2)) out[k] = raws[k];
    });
    rows.forEach(function (dest, i) {
      var src = order[i].r;
      for (var c = table.c1; c <= table.c2; c++) {
        var raw = raws[colName(c) + src];
        if (raw !== undefined) out[colName(c) + dest] = shiftFormula(raw, 0, dest - src);
      }
    });
    return out;
  }
  B.sheetSort = sortTable;

  /** Are the shown results in one column of a table in order (ties and empty cells allowed)? { up, down } */
  function columnOrder(vals, table, col) {
    var seq = [];
    for (var r = table.r1 + 1; r <= table.r2; r++) { var x = vals[colName(col) + r]; if (x && !x.err && x.v !== null) seq.push(x.v); }
    var up = true, down = true;
    for (var i = 1; i < seq.length; i++) { var c = compare(seq[i - 1], seq[i]); if (c > 0) up = false; if (c < 0) down = false; }
    return { up: up, down: down };
  }

  /** Does a value pass a filter { op: is | not | more | less, val }? Empty cells pass only "is not". */
  function passes(v, f) {
    var raw = String(f.val === undefined ? '' : f.val).replace(/^\s+|\s+$/g, '');
    var w = NUM.test(raw) ? Number(raw) : raw;
    if (v === null) return f.op === 'not';
    if (f.op === 'is') return typeof v === typeof w && compare(v, w) === 0;
    if (f.op === 'not') return !(typeof v === typeof w && compare(v, w) === 0);
    if (typeof v !== 'number' || typeof w !== 'number') return false;
    return f.op === 'more' ? v > w : v < w;
  }

  function rangeKeys(s) {
    var m = /^\s*([A-La-l])(\d{1,2})(?:\s*:\s*([A-La-l])(\d{1,2}))?\s*$/.exec(String(s || ''));
    if (!m) return null;
    var c1 = m[1].toUpperCase().charCodeAt(0) - 65, r1 = Number(m[2]), c2 = m[3] ? m[3].toUpperCase().charCodeAt(0) - 65 : c1, r2 = m[4] ? Number(m[4]) : r1;
    if (r1 < 1 || r2 < 1 || r1 > MAXR || r2 > MAXR) return null;
    var out = [];
    for (var r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) for (var c = Math.min(c1, c2); c <= Math.max(c1, c2); c++) out.push(colName(c) + r);
    return out;
  }

  /** What a chart draws, from the sheet's results. ch: { type: bar | line | scatter | pie, labels, values } (range text).
   *  Returns { ok, msg, labels, xs, ys, n, sum }. */
  function chartData(vals, ch) {
    var bad = function (msg) { return { ok: false, msg: msg, labels: [], xs: [], ys: [], n: 0, sum: 0 }; };
    if (!ch.type) return bad('Choose a chart type.');
    if (!String(ch.values || '').trim()) return bad('Type the cells that hold the numbers to plot (for example B2:B6).');
    var vk = rangeKeys(ch.values);
    if (!vk) return bad('The values need to be cells such as B2:B6.');
    var ys = [];
    for (var i = 0; i < vk.length; i++) {
      var x = vals[vk[i]];
      if (!x || x.err || typeof x.v !== 'number') return bad(vk[i] + ' is not a number, so it cannot be plotted.');
      ys.push(x.v);
    }
    var lk = String(ch.labels || '').trim() ? rangeKeys(ch.labels) : null;
    if (String(ch.labels || '').trim() && !lk) return bad('The labels need to be cells such as A2:A6.');
    if (lk && lk.length !== vk.length) return bad('There are ' + lk.length + ' labels but ' + vk.length + ' values. They need to match.');
    var labels = [], xs = [];
    for (i = 0; i < vk.length; i++) {
      var lv = lk ? vals[lk[i]] : null, shown = lv && !lv.err && lv.v !== null ? lv.v : (lk ? '' : i + 1);
      if (ch.type === 'scatter') {
        if (!lk) return bad('A scatter chart needs the numbers for the x axis in the labels box.');
        if (typeof shown !== 'number') return bad(lk[i] + ' is not a number, so it cannot go on the x axis.');
        xs.push(shown);
      }
      labels.push(typeof shown === 'number' ? String(Math.round(shown * 1e4) / 1e4) : String(shown));
    }
    if (ch.type === 'pie') {
      if (ys.some(function (y) { return y < 0; })) return bad('A pie chart cannot show a negative amount.');
      if (!ys.some(function (y) { return y > 0; })) return bad('A pie chart needs some amounts above zero.');
    }
    return { ok: true, msg: '', labels: labels, xs: xs, ys: ys, n: ys.length, sum: ys.reduce(function (s, y) { return s + y; }, 0) };
  }
  B.sheetChart = chartData;
  B.sheetOrder = columnOrder;
  B.sheetPasses = passes;

  // A tidy scale for an axis: steps of 1, 2 or 5 times a power of ten.
  function niceScale(lo, hi) {
    if (hi === lo) { hi = lo + 1; }
    var raw = (hi - lo) / 5, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
    var step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
    var a = Math.floor(lo / step + 1e-9) * step, b = Math.ceil(hi / step - 1e-9) * step, ticks = [];
    for (var t = a; t <= b + step / 2; t += step) ticks.push(Math.round(t * 1e9) / 1e9);
    return { lo: a, hi: b, ticks: ticks };
  }

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
    s.sheet = { cells: {}, names: {}, edit: null, tools: {}, table: null, chart: { type: '', labels: '', values: '', title: '', xl: '', yl: '' } };
    var maxC = 1, maxR = 1;
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'chart') {
        var CK = { type: 'type', labels: 'labels', values: 'values', title: 'title', xlabel: 'xl', ylabel: 'yl' };
        if (!CK[it.name]) throw new Error(where + ': "chart ' + it.name + '" is not type, labels, values, title, xlabel or ylabel.');
        if (it.name === 'type' && !/^(bar|line|scatter|pie)$/.test(it.value)) throw new Error(where + ': chart type is bar, line, scatter or pie.');
        s.sheet.chart[CK[it.name]] = String(it.value);
        return;
      }
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
    String(s.tools || '').split(/[\s,]+/).filter(Boolean).forEach(function (t) {
      if (!/^(sort|filter|fill|chart)$/.test(t)) throw new Error('tools: "' + t + '" is not sort, filter, fill or chart.');
      s.sheet.tools[t] = true;
    });
    if (s.table !== undefined) {
      var te = String(s.table).split(':');
      if (te.length !== 2) throw new Error('table: a range such as A1:D8 (the header row first).');
      var ta = refOf(te[0], 'table'), tb = refOf(te[1], 'table');
      s.sheet.table = { c1: Math.min(ta.c, tb.c), r1: Math.min(ta.r, tb.r), c2: Math.max(ta.c, tb.c), r2: Math.max(ta.r, tb.r) };
      if (s.sheet.table.r2 < s.sheet.table.r1 + 1) throw new Error('table: needs a header row and at least one row of data.');
      maxC = Math.max(maxC, s.sheet.table.c2 + 1); maxR = Math.max(maxR, s.sheet.table.r2);
    }
    if ((s.sheet.tools.sort || s.sheet.tools.filter || s.sheet.tools.fill) && !s.sheet.table) throw new Error('tools: sort, filter and fill need a table: line (such as "table: A1:D8").');
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
  var keyOf = function (c, r) { return colName(c) + r; };
  var cellPos = function (k) { return { c: k.charCodeAt(0) - 65, r: Number(k.slice(1)) }; };

  // What the widget remembers beyond the cells: a copied cell, a filter, a chart.
  var clip = null, filt = null, chart = null, hidden = {};

  function shownIn(k) {
    var r = vals[k];
    if (showF && String(rawOf(k)).charAt(0) === '=') return rawOf(k);
    if (!r) return '';
    return r.err ? r.err : show(r.v);
  }

  function inTable(k) {
    var t = spec.sheet.table; if (!t) return false;
    var p = cellPos(k);
    return p.c >= t.c1 && p.c <= t.c2 && p.r >= t.r1 && p.r <= t.r2;
  }

  // Which data rows a filter hides.
  function applyFilter() {
    hidden = {};
    var t = spec.sheet.table;
    if (!t || !filt) return;
    for (var r = t.r1 + 1; r <= t.r2; r++) {
      var x = vals[keyOf(filt.col, r)], v = x && !x.err ? x.v : null;
      if (!passes(v, filt)) hidden[r] = true;
    }
  }

  function paint() {
    applyFilter();
    Object.keys(ui.inputs).forEach(function (k) {
      var inp = ui.inputs[k], r = vals[k];
      if (document.activeElement !== inp) inp.value = shownIn(k);
      var td = inp.parentNode;
      td.classList.toggle('sh-err', !!(r && r.err));
      td.classList.toggle('sh-num', !!(r && typeof r.v === 'number' && !r.err));
      td.classList.toggle('sh-fx', String(rawOf(k)).charAt(0) === '=');
      td.classList.toggle('sh-copied', !!(clip && clip.k === k));
    });
    Object.keys(ui.rows).forEach(function (r) { ui.rows[r].classList.toggle('sh-hide', !!hidden[r]); });
    barShow();
    ui.toggle.textContent = showF ? 'Show results' : 'Show formulas';
    ui.toggle.setAttribute('aria-pressed', showF ? 'true' : 'false');
    if (ui.paste) ui.paste.disabled = !clip;
    if (ui.showAll) ui.showAll.disabled = !filt;
    if (ui.filterNote) {
      var t = spec.sheet.table, shown = 0, all = t ? t.r2 - t.r1 : 0;
      for (var r = (t ? t.r1 + 1 : 1); t && r <= t.r2; r++) if (!hidden[r]) shown++;
      ui.filterNote.textContent = filt ? 'Showing ' + shown + ' of ' + all + ' rows' : '';
    }
    paintChart();
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
    var vars = {}, formulas = 0, errors = 0, cellsOut = {}, t = spec.sheet.table;
    for (var r = 1; r <= dims.r; r++) for (var c = 0; c < dims.c; c++) {
      var k = colName(c) + r, v = vals[k], isF = String(rawOf(k)).charAt(0) === '=';
      if (isF) formulas++;
      if (v && v.err) errors++;
      vars['f_' + k] = isF ? 1 : 0;
      if (v && !v.err && typeof v.v === 'number') vars['c_' + k] = Math.round(v.v * 1e9) / 1e9;
      if (raws[k] !== undefined) cellsOut[k] = raws[k];
    }
    vars.n_formulas = formulas; vars.n_errors = errors;
    if (t) {
      var shown = 0;
      for (r = t.r1 + 1; r <= t.r2; r++) if (!hidden[r]) shown++;
      vars.n_shown = shown; vars.filter_on = filt ? 1 : 0; vars.filter_col = filt ? filt.col : -1;
      for (c = t.c1; c <= t.c2; c++) { var o = columnOrder(vals, t, c); vars['up_' + colName(c)] = o.up ? 1 : 0; vars['down_' + colName(c)] = o.down ? 1 : 0; }
    }
    if (spec.sheet.tools.chart) {
      var d = chartData(vals, chart), ty = d.ok ? chart.type : '';
      vars.ch_bar = ty === 'bar' ? 1 : 0; vars.ch_line = ty === 'line' ? 1 : 0; vars.ch_scatter = ty === 'scatter' ? 1 : 0; vars.ch_pie = ty === 'pie' ? 1 : 0;
      vars.ch_n = d.ok ? d.n : 0; vars.ch_sum = d.ok ? Math.round(d.sum * 1e9) / 1e9 : 0;
      vars.ch_title = chart.title.trim() ? 1 : 0; vars.ch_xlab = chart.xl.trim() ? 1 : 0; vars.ch_ylab = chart.yl.trim() ? 1 : 0;
    }
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
    var edits = {}, save = {};
    Object.keys(raws).concat(Object.keys(spec.sheet.cells)).forEach(function (k) { if (editable(k) && rawOf(k) !== (spec.sheet.cells[k] === undefined ? '' : spec.sheet.cells[k])) edits[k] = rawOf(k); });
    save.edits = edits;
    // Sorting moves locked cells too, so a table that can be sorted is saved whole.
    if (spec.sheet.tools.sort) { var t = spec.sheet.table, tb = {}; for (var r = t.r1; r <= t.r2; r++) for (var c = t.c1; c <= t.c2; c++) if (raws[keyOf(c, r)] !== undefined) tb[keyOf(c, r)] = raws[keyOf(c, r)]; save.table = tb; }
    if (filt) save.filter = filt;
    if (spec.sheet.tools.chart) save.chart = chart;
    B.save(save);
    B.post(s.state, s.output);
  }

  function commit(k, textIn) {
    var t = String(textIn).replace(/^\s+|\s+$/g, '');
    if (t === rawOf(k)) return;
    if (t === '') delete raws[k]; else raws[k] = t;
    B.moved = true;
    recalc(); paint(); report();
  }
  function changed() { B.moved = true; recalc(); paint(); report(); }

  // Copy and paste: a formula's relative references move with it.
  function copyCell() {
    clip = { k: sel, raw: rawOf(sel) };
    paint();
    B.say('Copied ' + sel + '. Click where it should go and choose Paste.', false);
  }
  function pasteCell() {
    if (!clip) return;
    if (!editable(sel)) { B.say(sel + ' is locked, so nothing can be pasted there.', false); return; }
    var from = cellPos(clip.k), to = cellPos(sel);
    var raw = shiftFormula(clip.raw, to.c - from.c, to.r - from.r);
    if (raw === '') delete raws[sel]; else raws[sel] = raw;
    changed();
  }
  // Fill down: the selected cell is copied into the cells below it, to the end of the table.
  function fillDown() {
    var t = spec.sheet.table, from = cellPos(sel);
    if (!inTable(sel) || from.r >= t.r2) { B.say('Select a cell in the table that has cells below it, then choose Fill down.', false); return; }
    var raw = rawOf(sel);
    for (var r = from.r + 1; r <= t.r2; r++) {
      var k = keyOf(from.c, r);
      if (!editable(k)) continue;
      var next = shiftFormula(raw, 0, r - from.r);
      if (next === '') delete raws[k]; else raws[k] = next;
    }
    changed();
  }

  function sortNow() {
    var t = spec.sheet.table, col = Number(ui.sortCol.value), desc = ui.sortDir.value === 'desc';
    raws = sortTable(raws, dims, t, col, desc);
    changed();
    B.say('Sorted by column ' + colName(col) + (desc ? ', high to low.' : ', low to high.'), false);
  }
  function filterNow() {
    var val = ui.filtVal.value.replace(/^\s+|\s+$/g, '');
    if (val === '') { B.say('Type the value to look for, such as 20 or Mammal.', false); return; }
    filt = { col: Number(ui.filtCol.value), op: ui.filtOp.value, val: val };
    B.moved = true; recalc(); paint(); report();
  }
  function showAllRows() { filt = null; B.moved = true; recalc(); paint(); report(); }

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
    // Move to another cell, skipping rows a filter hides; at the edge of the sheet there is nowhere to go, so the typed
    // value is simply kept.
    var go = function (c2, r2) {
      var step = r2 >= r ? 1 : -1;
      while (c2 === c && hidden[r2] && r2 >= 1 && r2 <= dims.r) r2 += step;
      if (c2 < 0 || c2 >= dims.c || r2 < 1 || r2 > dims.r) { if (ed) { commit(k, inp.value); inp.select(); } return; }
      focusCell(c2, r2);
    };
    inp.addEventListener('keydown', function (e) {
      var whole = inp.readOnly || (inp.selectionStart === 0 && inp.selectionEnd === inp.value.length);
      var atStart = inp.readOnly || (inp.selectionStart === 0 && inp.selectionEnd === 0) || whole;
      var atEnd = inp.readOnly || (inp.selectionStart === inp.value.length && inp.selectionEnd === inp.value.length) || whole;
      var mod = e.ctrlKey || e.metaKey;
      if (mod && (e.key === 'c' || e.key === 'C') && whole) { e.preventDefault(); copyCell(); }
      else if (mod && (e.key === 'v' || e.key === 'V') && clip && (whole || inp.value === '')) { e.preventDefault(); pasteCell(); }
      else if (e.key === 'Enter') { e.preventDefault(); go(c, r + 1); }
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

  // ---------- the chart ----------
  var PIE = ['#4c78a8', '#f58518', '#54a24b', '#e45756', '#b279a2', '#9d755d', '#72b7b2', '#eeca3b'];
  function svg(tag, attrs, text) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attrs || {}).forEach(function (a) { e.setAttribute(a, attrs[a]); });
    if (text !== undefined) e.textContent = text;
    return e;
  }
  var cut = function (s, n) { s = String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
  var TYPE_NAME = { bar: 'Column chart', line: 'Line chart', scatter: 'Scatter chart', pie: 'Pie chart' };

  function paintChart() {
    if (!ui.chartBox) return;
    var d = chartData(vals, chart), box = ui.chartBox;
    box.replaceChildren();
    ui.chartMsg.textContent = d.ok ? '' : d.msg;
    ui.chartTitle.textContent = chart.title.trim();
    ui.chartTitle.hidden = !chart.title.trim();
    ui.axisRow.hidden = chart.type === 'pie';
    if (!d.ok) return;
    var W = 400, H = 250, L = 52, R = 14, T = 12, Bm = 56, pw = W - L - R, ph = H - T - Bm;
    var s = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'sh-ch-svg', role: 'img' });
    var desc = TYPE_NAME[chart.type] + (chart.title.trim() ? ' called ' + chart.title.trim() : '') + ', ' + d.n + ' values: ' + d.labels.map(function (l, i) { return l + ' ' + show(d.ys[i]); }).join(', ') + '.';
    s.setAttribute('aria-label', desc);
    if (chart.type === 'pie') {
      var total = d.sum, cx = 110, cy = 125, rad = 90, a0 = -Math.PI / 2;
      d.ys.forEach(function (y, i) {
        if (y <= 0) return;
        var a1 = a0 + (y / total) * 2 * Math.PI, large = a1 - a0 > Math.PI ? 1 : 0;
        if (y === total) s.appendChild(svg('circle', { cx: cx, cy: cy, r: rad, fill: PIE[i % PIE.length], stroke: 'var(--card)', 'stroke-width': 2 }));
        else s.appendChild(svg('path', { d: 'M' + cx + ',' + cy + ' L' + (cx + rad * Math.cos(a0)) + ',' + (cy + rad * Math.sin(a0)) + ' A' + rad + ',' + rad + ' 0 ' + large + ' 1 ' + (cx + rad * Math.cos(a1)) + ',' + (cy + rad * Math.sin(a1)) + ' Z', fill: PIE[i % PIE.length], stroke: 'var(--card)', 'stroke-width': 2 }));
        a0 = a1;
      });
      d.ys.forEach(function (y, i) {
        var yy = 24 + i * 22; if (yy > H - 8) return;
        s.appendChild(svg('rect', { x: 230, y: yy - 10, width: 12, height: 12, fill: PIE[i % PIE.length] }));
        s.appendChild(svg('text', { x: 248, y: yy, class: 'sh-ch-t' }, cut(d.labels[i], 14) + ' ' + Math.round(y / total * 100) + '%'));
      });
      box.appendChild(s);
      return;
    }
    var xs = d.xs;
    var ymin = Math.min.apply(null, d.ys), ymax = Math.max.apply(null, d.ys);
    var ys = chart.type === 'scatter' ? niceScale(ymin, ymax) : niceScale(Math.min(0, ymin), Math.max(0, ymax));
    var py = function (v) { return T + ph - (v - ys.lo) / (ys.hi - ys.lo) * ph; };
    ys.ticks.forEach(function (t) {
      s.appendChild(svg('line', { x1: L, x2: L + pw, y1: py(t), y2: py(t), class: 'sh-ch-grid' }));
      s.appendChild(svg('text', { x: L - 6, y: py(t) + 4, class: 'sh-ch-t sh-ch-r' }, String(t)));
    });
    s.appendChild(svg('line', { x1: L, x2: L, y1: T, y2: T + ph, class: 'sh-ch-axis' }));
    var base = py(Math.max(ys.lo, Math.min(0, ys.hi)));
    s.appendChild(svg('line', { x1: L, x2: L + pw, y1: chart.type === 'bar' ? base : T + ph, y2: chart.type === 'bar' ? base : T + ph, class: 'sh-ch-axis' }));
    if (chart.type === 'scatter') {
      var xsc = niceScale(Math.min.apply(null, xs), Math.max.apply(null, xs));
      var px = function (v) { return L + (v - xsc.lo) / (xsc.hi - xsc.lo) * pw; };
      xsc.ticks.forEach(function (t) { s.appendChild(svg('text', { x: px(t), y: T + ph + 16, class: 'sh-ch-t sh-ch-m' }, String(t))); });
      xs.forEach(function (x, i) { s.appendChild(svg('circle', { cx: px(x), cy: py(d.ys[i]), r: 4, class: 'sh-ch-dot' })); });
    } else {
      var slot = pw / d.n;
      d.labels.forEach(function (lab, i) {
        var cxp = L + slot * (i + 0.5);
        s.appendChild(svg('text', { x: cxp, y: T + ph + 16, class: 'sh-ch-t sh-ch-m' }, cut(lab, d.n > 8 ? 4 : d.n > 5 ? 6 : 9)));
        if (chart.type === 'bar') {
          var y0 = py(0), y1 = py(d.ys[i]);
          s.appendChild(svg('rect', { x: cxp - slot * 0.35, width: slot * 0.7, y: Math.min(y0, y1), height: Math.max(1, Math.abs(y1 - y0)), class: 'sh-ch-bar' }));
        }
      });
      if (chart.type === 'line') {
        s.appendChild(svg('polyline', { points: d.ys.map(function (v, i) { return (L + slot * (i + 0.5)) + ',' + py(v); }).join(' '), class: 'sh-ch-line' }));
        d.ys.forEach(function (v, i) { s.appendChild(svg('circle', { cx: L + slot * (i + 0.5), cy: py(v), r: 3.5, class: 'sh-ch-dot' })); });
      }
    }
    if (chart.xl.trim()) s.appendChild(svg('text', { x: L + pw / 2, y: H - 8, class: 'sh-ch-t sh-ch-m sh-ch-ax' }, cut(chart.xl.trim(), 40)));
    if (chart.yl.trim()) s.appendChild(svg('text', { x: 0, y: 0, transform: 'translate(12,' + (T + ph / 2) + ') rotate(-90)', class: 'sh-ch-t sh-ch-m sh-ch-ax' }, cut(chart.yl.trim(), 30)));
    box.appendChild(s);
  }

  function field(label, input) {
    var l = document.createElement('label'); l.className = 'sh-field';
    var sp = document.createElement('span'); sp.textContent = label;
    l.append(sp, input);
    return l;
  }
  function select2(opts, value) {
    var s = document.createElement('select');
    opts.forEach(function (o) { var op = document.createElement('option'); op.value = o[0]; op.textContent = o[1]; s.appendChild(op); });
    if (value !== undefined) s.value = value;
    return s;
  }
  function button(label, fn) {
    var b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.addEventListener('click', fn);
    return b;
  }
  function textInput(label, value, onInput, w) {
    var i = document.createElement('input'); i.type = 'text'; i.autocomplete = 'off'; i.spellcheck = false; i.value = value; i.className = 'sh-in';
    if (w) i.size = w;
    i.addEventListener('input', function () { onInput(i.value); });
    return field(label, i);
  }

  function buildTools(panel) {
    var tools = spec.sheet.tools, t = spec.sheet.table;
    var head = function (c) { var x = vals[keyOf(c, t.r1)]; return colName(c) + (x && !x.err && x.v !== null ? ' – ' + cut(show(x.v), 12) : ''); };
    var colOpts = [];
    if (t) for (var c = t.c1; c <= t.c2; c++) colOpts.push([String(c), head(c)]);
    if (tools.fill || tools.sort || tools.filter) {
      var row = document.createElement('div'); row.className = 'sh-tools';
      if (tools.fill) { ui.copy = button('Copy', copyCell); ui.paste = button('Paste', pasteCell); ui.paste.disabled = true; ui.fill = button('Fill down', fillDown); row.append(ui.copy, ui.paste, ui.fill); }
      panel.appendChild(row);
      if (tools.sort) {
        var r2 = document.createElement('div'); r2.className = 'sh-tools'; r2.setAttribute('role', 'group'); r2.setAttribute('aria-label', 'Sort');
        ui.sortCol = select2(colOpts, colOpts[0][0]); ui.sortDir = select2([['asc', 'Low to high (A to Z)'], ['desc', 'High to low (Z to A)']], 'asc');
        r2.append(field('Sort by', ui.sortCol), field('Order', ui.sortDir), button('Sort', sortNow));
        panel.appendChild(r2);
      }
      if (tools.filter) {
        var r3 = document.createElement('div'); r3.className = 'sh-tools'; r3.setAttribute('role', 'group'); r3.setAttribute('aria-label', 'Filter');
        ui.filtCol = select2(colOpts, colOpts[0][0]);
        ui.filtOp = select2([['is', 'is'], ['not', 'is not'], ['more', 'is more than'], ['less', 'is less than']], 'is');
        ui.filtVal = document.createElement('input'); ui.filtVal.type = 'text'; ui.filtVal.className = 'sh-in'; ui.filtVal.size = 8; ui.filtVal.autocomplete = 'off';
        ui.filtVal.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); filterNow(); } });
        ui.showAll = button('Show all', showAllRows); ui.showAll.disabled = true;
        ui.filterNote = document.createElement('span'); ui.filterNote.className = 'sh-note'; ui.filterNote.setAttribute('aria-live', 'polite');
        r3.append(field('Show rows where', ui.filtCol), field('', ui.filtOp), field('', ui.filtVal), button('Filter', filterNow), ui.showAll, ui.filterNote);
        panel.appendChild(r3);
      }
    }
    if (tools.chart) {
      var box = document.createElement('div'); box.className = 'sh-chart';
      var hd = document.createElement('div'); hd.className = 'sh-tools'; hd.setAttribute('role', 'group'); hd.setAttribute('aria-label', 'Chart');
      var type = select2([['', 'Choose…'], ['bar', 'Column'], ['line', 'Line'], ['scatter', 'Scatter'], ['pie', 'Pie']], chart.type);
      type.addEventListener('change', function () { chart.type = type.value; changed(); });
      var up = function (key) { return function (v) { chart[key] = v; changed(); }; };
      hd.append(field('Chart type', type), textInput('Labels', chart.labels, up('labels'), 7), textInput('Values', chart.values, up('values'), 7));
      ui.axisRow = document.createElement('div'); ui.axisRow.className = 'sh-tools';
      ui.axisRow.append(textInput('Horizontal axis title', chart.xl, up('xl'), 14), textInput('Vertical axis title', chart.yl, up('yl'), 14));
      var tr = document.createElement('div'); tr.className = 'sh-tools'; tr.append(textInput('Chart title', chart.title, up('title'), 26));
      ui.chartMsg = document.createElement('p'); ui.chartMsg.className = 'sh-note'; ui.chartMsg.setAttribute('aria-live', 'polite');
      ui.chartTitle = document.createElement('div'); ui.chartTitle.className = 'sh-ch-title';
      ui.chartBox = document.createElement('div'); ui.chartBox.className = 'sh-ch-box';
      box.append(hd, tr, ui.axisRow, ui.chartMsg, ui.chartTitle, ui.chartBox);
      panel.appendChild(box);
    }
  }

  B.widget('sheet', {
    sections: ['gpanel'],
    label: function () { return 'A spreadsheet'; },
    parse: parse,
    start: function (fresh) {
      spec = B.spec; dims = spec.sheet.dims; showF = spec.sheet.showF;
      raws = {}; clip = null; filt = null; hidden = {};
      chart = JSON.parse(JSON.stringify(spec.sheet.chart));
      Object.keys(spec.sheet.cells).forEach(function (k) { if (spec.sheet.cells[k] !== '') raws[k] = spec.sheet.cells[k]; });
      var sv = fresh ? null : B.saved();
      if (sv && sv.edits) Object.keys(sv.edits).forEach(function (k) {
        if (!/^[A-L]\d{1,2}$/.test(k) || !editable(k)) return;
        if (sv.edits[k] === '') delete raws[k]; else raws[k] = String(sv.edits[k]);
      });
      if (sv && sv.table && spec.sheet.tools.sort) {
        var t = spec.sheet.table;
        for (var rr = t.r1; rr <= t.r2; rr++) for (var cc = t.c1; cc <= t.c2; cc++) delete raws[keyOf(cc, rr)];
        Object.keys(sv.table).forEach(function (k) { if (/^[A-L]\d{1,2}$/.test(k) && inTable(k)) raws[k] = String(sv.table[k]); });
      }
      if (sv && sv.filter && spec.sheet.tools.filter && typeof sv.filter.col === 'number' && /^(is|not|more|less)$/.test(sv.filter.op)) filt = { col: sv.filter.col, op: sv.filter.op, val: String(sv.filter.val) };
      if (sv && sv.chart && spec.sheet.tools.chart) ['type', 'labels', 'values', 'title', 'xl', 'yl'].forEach(function (f) { if (typeof sv.chart[f] === 'string') chart[f] = sv.chart[f]; });
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = { inputs: {}, rows: {} };
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
        ui.rows[r] = tr;
      }
      wrap.appendChild(table); panel.appendChild(wrap);
      recalc();
      buildTools(panel);
      var row = document.createElement('div'); row.className = 'gbar sh-buttons';
      ui.toggle = document.createElement('button'); ui.toggle.type = 'button';
      ui.toggle.addEventListener('click', function () { showF = !showF; paint(); });
      var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
      row.append(ui.toggle, again); panel.appendChild(row);
      sel = 'A1';
      select('A1'); paint();
      report();
    },
  });
})(WPB);
