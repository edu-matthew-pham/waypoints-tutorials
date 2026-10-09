// Maths board: an embeddable page for maths lessons. Like the turtle playground, it takes its starting setup
// from ?code= (a lesson's code region) and reports to the lesson page with postMessage, so checks can tick.
//
// Setup format: one "key: value" per line.
//   widget: balance         a balance scale (JSXGraph)
//     left: 2x + 3, right: 11   each side an expression in one variable
//     mode: try               (default) change x with a slider and watch the scale
//     mode: solve             do the same to both sides until x is alone; the scale stays level throughout
//     min, max, start, step   the slider's whole-number range (try mode)
//   widget: machine         a function machine: x goes through operations to an output
//     ops: × 2, + 3           in order; + − × ÷ (or * /) and a whole number
//     output: 11
//   var: x                  (default x)
//
// Message to the lesson page after every change:
//   { wp: 'run', id, kind: 'maths', status: 'done', moved, output, state }
//   state (balance, try):   { x, left, right, balanced }
//   state (balance, solve): { solved, steps, x }
//   state (machine):        { solved, steps, x }
// `moved` is false until the student does something, so a check never ticks on the starting position.
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  var ID = q.get('id') || 'free';
  var KEY = 'wp-maths:' + ID;
  var board = null, spec = null, x = 0, theta = 0, target = 0, moved = false, raf = 0;
  var eq = null, hist = [];          // solve mode: current equation as bags and blocks, and the steps so far
  var mach = null;                   // machine: { ops, done, values }
  var el = function (id) { return document.getElementById(id); };
  var css = function (name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); };
  var fmt = function (n) { return Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : String(+n.toFixed(2)); };
  var SYM = { '+': '+', '-': '−', '*': '×', '/': '÷' };

  function parseSpec(text) {
    var s = { widget: 'balance', mode: 'try', var: 'x', min: 0, max: 10, start: 0, step: 1 };
    String(text || '').split('\n').forEach(function (line) {
      var m = /^\s*([a-z]+)\s*:\s*(.*?)\s*$/i.exec(line);
      if (m && m[2] !== '') s[m[1]] = m[2];
    });
    ['min', 'max', 'start', 'step'].forEach(function (k) { s[k] = Number(s[k]); });
    if (s.widget === 'balance' && (!s.left || !s.right)) throw new Error('The board needs left: and right: expressions.');
    if (s.widget === 'machine' && (!s.ops || s.output === undefined)) throw new Error('The machine needs ops: and output:.');
    if (['balance', 'machine'].indexOf(s.widget) < 0) throw new Error('Unknown widget "' + s.widget + '".');
    return s;
  }

  function post(state, output) {
    if (parent !== window) parent.postMessage({ wp: 'run', id: ID, kind: 'maths', status: 'done', moved: moved, code: '', output: output, state: state }, location.origin);
  }
  function save(extra) { try { localStorage.setItem(KEY, JSON.stringify(Object.assign({ setup: spec.raw }, extra))); } catch (e) { /* private mode */ } }
  function saved() { try { var s = JSON.parse(localStorage.getItem(KEY)); return s && s.setup === spec.raw ? s : null; } catch (e) { return null; } }
  function say(text, ok) { var st = el('status'); st.className = ok ? 'ok' : ''; st.textContent = text; }

  // ---------- balance ----------
  function value(expr, at) { var v = {}; v[spec.var] = at === undefined ? x : at; return WPM.evaluate(expr, v); }
  // 2x + 3 with x = 4  ->  2(4) + 3
  function substituted(expr, at) {
    var v = spec.var, re1 = new RegExp('(\\d|\\))\\s*' + v, 'g'), re2 = new RegExp(v, 'g');
    return expr.replace(re1, '$1(' + at + ')').replace(re2, String(at));
  }
  // ax + b with whole-number a and b (so it can be drawn as bags and blocks), else null
  function linear(expr) {
    try {
      var f = function (t) { return value(expr, t); };
      var b = f(0), a = f(1) - b;
      if (Math.abs(f(2) - (2 * a + b)) > 1e-9) return null;
      if (a < 0 || b < 0 || a % 1 || b % 1 || a > 8 || b > 40) return null;
      return { a: a, b: b };
    } catch (e) { return null; }
  }
  // bags and blocks -> "2x + 3", "x", "11", "0"
  function side(a, b) {
    var v = spec.var, t = a ? (a === 1 ? v : a + v) : '';
    return t && b ? t + ' + ' + b : t || String(b);
  }
  function eqText() { return side(eq.a1, eq.b1) + ' = ' + side(eq.a2, eq.b2); }
  function exprs() { return eq ? [side(eq.a1, eq.b1), side(eq.a2, eq.b2)] : [spec.left, spec.right]; }

  // The scale needs a 24 x 16 unit area (centred on y = 2.5). Units are square, so a narrow or short board gets
  // extra room in the other direction instead of cutting the pans off.
  function fitBox() {
    var w = el('board').clientWidth || 600, h = el('board').clientHeight || 400;
    var unit = Math.min(w / 24, h / 16), xr = w / unit, yr = h / unit;
    return [-xr / 2, 2.5 + yr / 2, xr / 2, 2.5 - yr / 2];
  }
  function build() {
    if (board) JXG.JSXGraph.freeBoard(board);
    board = JXG.JSXGraph.initBoard('board', {
      boundingbox: fitBox(), keepAspectRatio: false, axis: false, grid: false,
      showNavigation: false, showCopyright: false, pan: { enabled: false }, zoom: { enabled: false, wheel: false }, registerEvents: true,
    });
    var ink = css('--ink') || '#1d2430', muted = css('--muted') || '#5d6675';
    var fixed = { fixed: true, highlight: false };
    var P = [0, 6], HALF = 8, DROP = 3, sides = exprs();
    var end = function (s) { return [P[0] + s * HALF * Math.cos(theta), P[1] + s * HALF * Math.sin(theta)]; };
    var pan = function (s) { var e = end(s); return [e[0], e[1] - DROP]; };
    board.create('polygon', [[-3, -3.6], [3, -3.6], [0.6, -2.9], [-0.6, -2.9]], Object.assign({ fillColor: muted, fillOpacity: 0.35, borders: { strokeColor: muted }, vertices: { visible: false } }, fixed));
    board.create('segment', [[0, -2.9], P], Object.assign({ strokeColor: muted, strokeWidth: 6 }, fixed));
    // Beam: green when balanced (always, in solve mode: doing the same to both sides keeps it level)
    var beamColour = function () { return balanced() ? (css('--ok') || '#1a7f37') : ink; };
    var pt = function (f) { return board.create('point', [function () { return f()[0]; }, function () { return f()[1]; }], { visible: false, withLabel: false, fixed: true }); };
    var Lend = pt(function () { return end(-1); }), Rend = pt(function () { return end(1); });
    board.create('segment', [Lend, Rend], Object.assign({ strokeColor: beamColour, strokeWidth: 7 }, fixed));
    board.create('point', P, { name: '', size: 5, fillColor: ink, strokeColor: ink, fixed: true, highlight: false });
    [-1, 1].forEach(function (s) {
      var colour = s < 0 ? (css('--left') || '#2f6fb3') : (css('--right') || '#8a4fb8');
      var expr = s < 0 ? sides[0] : sides[1];
      var c = function () { return pan(s); };
      var a = pt(function () { return [c()[0] - 2.8, c()[1]]; }), b = pt(function () { return [c()[0] + 2.8, c()[1]]; });
      var top = s < 0 ? Lend : Rend;
      board.create('segment', [top, a], Object.assign({ strokeColor: muted, strokeWidth: 1.5 }, fixed));
      board.create('segment', [top, b], Object.assign({ strokeColor: muted, strokeWidth: 1.5 }, fixed));
      board.create('segment', [a, b], Object.assign({ strokeColor: ink, strokeWidth: 5 }, fixed));
      // What is on the pan: bags of x, then single blocks, stacked from the pan up
      var lin = linear(expr), items = [], y = 0.1;
      if (lin) {
        for (var i = 0; i < lin.a; i++) items.push({ w: 1.1, h: 1.4, dx: -2.5 + (i % 4) * 1.3 + 0.55, row: Math.floor(i / 4), bag: true });
        var bagH = Math.ceil(lin.a / 4) * 1.55;
        for (var j = 0; j < lin.b; j++) items.push({ w: 0.5, h: 0.5, dx: -2.5 + (j % 9) * 0.6 + 0.25, row: Math.floor(j / 9), bag: false, base: bagH });
      }
      items.forEach(function (it) {
        var oy = it.bag ? it.row * 1.55 : (it.base || 0) + it.row * 0.6;
        var corner = function (ox, oy2) { return pt(function () { var p = c(); return [p[0] + it.dx + ox, p[1] + y + oy + oy2]; }); };
        var hw = it.w / 2;
        board.create('polygon', [corner(-hw, 0), corner(hw, 0), corner(hw, it.h), corner(-hw, it.h)], Object.assign({
          fillColor: colour, fillOpacity: it.bag ? 0.9 : 0.75, borders: { strokeColor: colour, strokeWidth: 1 }, vertices: { visible: false },
        }, fixed));
        if (it.bag) board.create('text', [function () { return c()[0] + it.dx; }, function () { return c()[1] + y + oy + it.h / 2; }, spec.var], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tile', highlightCssClass: 'tile', strokeColor: '#fff', highlightStrokeColor: '#fff', fixed: true });
      });
      // Under the pan: the expression, and (try mode only: in solve mode it would give the answer away) its value
      board.create('text', [function () { return c()[0]; }, function () { return c()[1] - 0.9; }, expr], { anchorX: 'middle', cssClass: 'eqlabel', highlightCssClass: 'eqlabel', strokeColor: ink, highlightStrokeColor: ink, fixed: true });
      if (spec.mode !== 'solve') board.create('text', [function () { return c()[0]; }, function () { return c()[1] - 2.1; }, function () {
        var v = value(expr), sub = substituted(expr, x);
        return sub.replace(/\s/g, '') === fmt(v) ? '= ' + fmt(v) : '= ' + sub + ' = ' + fmt(v);
      }], { anchorX: 'middle', cssClass: 'eqvalue', highlightCssClass: 'eqvalue', strokeColor: muted, highlightStrokeColor: muted, fixed: true });
    });
  }
  function balanced() { return spec.mode === 'solve' || Math.abs(value(spec.left) - value(spec.right)) < 1e-9; }
  function tiltFor() { if (spec.mode === 'solve') return 0; var d = value(spec.left) - value(spec.right); return -Math.max(-0.3, Math.min(0.3, d * 0.03)); }
  function animate() {
    cancelAnimationFrame(raf);
    (function step() {
      theta += (target - theta) * 0.18;
      if (Math.abs(target - theta) < 0.002) theta = target;
      board.update();
      if (theta !== target) raf = requestAnimationFrame(step);
    })();
  }

  // Try mode
  function reportTry() {
    var L = value(spec.left), R = value(spec.right), ok = balanced();
    say(ok ? 'Balanced: when ' + spec.var + ' = ' + fmt(x) + ', both sides are ' + fmt(L) + '.'
      : (L > R ? 'The left side is heavier: ' + fmt(L) + ' is more than ' + fmt(R) + '.' : 'The right side is heavier: ' + fmt(R) + ' is more than ' + fmt(L) + '.'), ok);
    el('xshow').textContent = spec.var + ' = ' + fmt(x);
    save({ x: x });
    post({ x: x, left: L, right: R, balanced: ok }, spec.var + ' = ' + fmt(x) + ': left ' + fmt(L) + ', right ' + fmt(R) + (ok ? ', balanced' : ''));
  }
  function setX(v, byStudent) {
    x = Math.max(spec.min, Math.min(spec.max, v));
    el('xval').value = x;
    if (byStudent) moved = true;
    target = tiltFor();
    animate();
    reportTry();
  }

  // Solve mode: the same action on both sides, recorded as algebra
  function solvedX() {
    if (eq.a1 === 1 && eq.b1 === 0 && eq.a2 === 0) return eq.b2;
    if (eq.a2 === 1 && eq.b2 === 0 && eq.a1 === 0) return eq.b1;
    return null;
  }
  function paintSolve() {
    var ol = el('history'); ol.replaceChildren();
    hist.forEach(function (h) {
      var li = document.createElement('li'); li.appendChild(document.createTextNode(h.eq));
      if (h.why) { var s = document.createElement('span'); s.textContent = h.why; li.appendChild(s); }
      ol.appendChild(li);
    });
    ol.scrollTop = ol.scrollHeight;
    var v = solvedX(), ok = v !== null;
    if (ok) {
      var chk = function (expr) { var sub = substituted(expr, v), val = fmt(value(expr, v)); return sub.replace(/\s/g, '') === val ? val : sub + ' = ' + val; };
      say(spec.var + ' = ' + fmt(v) + '. Check it in the first equation: left side ' + chk(spec.left) + ', right side ' + chk(spec.right) + '. They match ✓', true);
    } else say(hist.length > 1 ? 'Still balanced. What can you take away, or share, next?' : 'Do the same to both sides until ' + spec.var + ' is on its own.');
    save({ eq: eq, hist: hist });
    post({ solved: ok, steps: hist.length - 1, x: ok ? v : null }, ok ? spec.var + ' = ' + fmt(v) + ' in ' + (hist.length - 1) + ' steps' : eqText());
  }
  function act(kind, n) {
    if (!(n >= 1) || n % 1) return say('Choose a whole number of 1 or more.');
    if (solvedX() !== null) return say(spec.var + ' is already on its own. Press Start again to try another way.');
    var e = Object.assign({}, eq), why;
    if (kind === 'b' || kind === 'a') {
      var k = kind === 'b' ? 'b' : 'a';
      if (e[k + '1'] < n) return say('The left side only has ' + e[k + '1'] + ' ' + (kind === 'b' ? 'blocks' : 'bags') + '. Take away the same amount from both sides.');
      if (e[k + '2'] < n) return say('The right side only has ' + e[k + '2'] + ' ' + (kind === 'b' ? 'blocks' : 'bags') + '. Take away the same amount from both sides.');
      e[k + '1'] -= n; e[k + '2'] -= n;
      why = 'took ' + (kind === 'b' ? n : (n === 1 ? spec.var : n + spec.var)) + ' from both sides';
    } else {
      if (n < 2) return say('Share into 2 or more groups.');
      var bad = ['a1', 'b1', 'a2', 'b2'].filter(function (k2) { return e[k2] % n; });
      if (bad.length) return say('Not everything shares equally into ' + n + ' groups: ' + side(e.a1, e.b1) + ' and ' + side(e.a2, e.b2) + ' must both split evenly.');
      ['a1', 'b1', 'a2', 'b2'].forEach(function (k2) { e[k2] /= n; });
      why = 'shared both sides into ' + n + ' groups (÷ ' + n + ')';
    }
    if (e.a1 + e.b1 === 0 || e.a2 + e.b2 === 0) return say('That would leave one side empty. Try a different step.');
    eq = e; moved = true;
    hist.push({ eq: eqText(), why: why });
    build(); board.update();
    paintSolve();
  }
  function startSolve(fresh) {
    var L = linear(spec.left), R = linear(spec.right);
    if (!L || !R) throw new Error('solve mode needs whole-number bags and blocks on both sides (such as 2x + 3).');
    var s = fresh ? null : saved();
    eq = s && s.eq ? s.eq : { a1: L.a, b1: L.b, a2: R.a, b2: R.b };
    hist = s && s.hist ? s.hist : [{ eq: side(L.a, L.b) + ' = ' + side(R.a, R.b), why: 'start' }];
    var v = (function () { for (var t = -100; t <= 1000; t++) if (Math.abs(value(spec.left, t) - value(spec.right, t)) < 1e-9) return t; return 0; })();
    x = v; theta = target = 0;
    build(); board.update();
    paintSolve();
  }

  // ---------- function machine ----------
  function parseOps(text) {
    return String(text).split(',').map(function (t) {
      var m = /^\s*([+\-−*×x/÷])\s*(\d+)\s*$/.exec(t);
      if (!m) throw new Error('Each op needs a sign and a whole number, such as "× 2" or "+ 3" (got "' + t.trim() + '").');
      var o = { '−': '-', '×': '*', 'x': '*', '÷': '/' }[m[1]] || m[1];
      return { op: o, n: Number(m[2]) };
    });
  }
  var INV = { '+': '-', '-': '+', '*': '/', '/': '*' };
  var apply = function (v, o, n) { return o === '+' ? v + n : o === '-' ? v - n : o === '*' ? v * n : v / n; };
  function paintMachine() {
    var row = el('mrow'); row.replaceChildren();
    var box = function (text, cls) { var d = document.createElement('div'); d.className = 'mbox ' + (cls || ''); d.textContent = text; return d; };
    var k = mach.ops.length - mach.done;   // the first op not yet undone, counting from the left
    row.appendChild(box(mach.done === mach.ops.length ? spec.var + ' = ' + fmt(mach.values[0]) : spec.var, mach.done === mach.ops.length ? 'in found' : 'in'));
    mach.ops.forEach(function (o, i) {
      var d = document.createElement('div'); d.className = 'mop' + (i >= k ? ' done' : '');
      var t = document.createElement('span'); t.textContent = SYM[o.op] + ' ' + o.n;
      var arr = document.createElement('i'); arr.textContent = '→';
      var back = document.createElement('span'); back.className = 'back'; back.textContent = i >= k ? '← ' + SYM[INV[o.op]] + ' ' + o.n : '';
      d.append(t, arr, back); row.appendChild(d);
      if (i < mach.ops.length - 1) row.appendChild(box(i + 1 >= k ? fmt(mach.values[i + 1]) : '?', i + 1 >= k ? 'found' : 'unknown'));
    });
    row.appendChild(box(fmt(Number(spec.output)), 'out'));
    var ol = el('mhistory'); ol.replaceChildren();
    mach.steps.forEach(function (s) { var li = document.createElement('li'); li.textContent = s; ol.appendChild(li); });
    var ok = mach.done === mach.ops.length;
    if (ok) {
      var v = mach.values[0], chain = [], cur = v;
      mach.ops.forEach(function (o) { var nx = apply(cur, o.op, o.n); chain.push(fmt(cur) + ' ' + SYM[o.op] + ' ' + o.n + ' = ' + fmt(nx)); cur = nx; });
      say(spec.var + ' = ' + fmt(v) + '. Check forwards: ' + chain.join(', ') + ' ✓', true);
    } else say(mach.done ? 'Good. What did the machine do before that?' : 'Start from the output, ' + spec.output + '. Undo the last thing the machine did.');
    save({ done: mach.done, values: mach.values, steps: mach.steps });
    post({ solved: ok, steps: mach.steps.length, x: ok ? mach.values[0] : null }, ok ? spec.var + ' = ' + fmt(mach.values[0]) : mach.steps.join('; '));
  }
  function undo(o, n) {
    if (!(n >= 1) || n % 1) return say('Choose a whole number of 1 or more.');
    if (mach.done === mach.ops.length) return say('All the steps are undone. Press Start again to do it again.');
    var last = mach.ops[mach.ops.length - 1 - mach.done];
    if (INV[last.op] !== o || last.n !== n) {
      moved = true;
      return say(o === last.op && n === last.n ? 'That does the same thing again. To undo it, do the opposite.' : 'That does not undo the last step. Look at the last arrow you have not undone.');
    }
    var i = mach.ops.length - 1 - mach.done, from = mach.values[i + 1], to = apply(from, o, n);
    mach.values[i] = to; mach.done++; moved = true;
    mach.steps.push(fmt(from) + ' ' + SYM[o] + ' ' + n + ' = ' + fmt(to));
    paintMachine();
  }
  function startMachine(fresh) {
    var ops = parseOps(spec.ops), out = Number(spec.output), s = fresh ? null : saved();
    var values = new Array(ops.length + 1); values[ops.length] = out;
    mach = { ops: ops, done: s ? s.done : 0, values: s ? s.values : values, steps: s ? s.steps : [] };
    paintMachine();
  }

  // ---------- setup ----------
  function load(text) {
    try {
      spec = parseSpec(text);
      spec.raw = String(text || '');
      if (spec.widget === 'balance') { WPM.parse(spec.left); WPM.parse(spec.right); }
    } catch (e) { el('error').hidden = false; el('error').textContent = 'This board cannot start: ' + e.message; return; }
    el('error').hidden = true;
    moved = false; eq = null; mach = null;
    var isBal = spec.widget === 'balance', solve = isBal && spec.mode === 'solve';
    el('board').hidden = !isBal; el('controls').hidden = !isBal || solve; el('ops').hidden = !solve; el('machine').hidden = isBal;
    el('board').setAttribute('aria-label', isBal ? 'A balance scale' : '');
    try {
      if (solve) return startSolve(false);
      if (!isBal) return startMachine(false);
    } catch (e) { el('error').hidden = false; el('error').textContent = 'This board cannot start: ' + e.message; return; }
    var r = el('xval');
    r.min = spec.min; r.max = spec.max; r.step = spec.step;
    el('xlabel').textContent = spec.var;
    el('minus').setAttribute('aria-label', 'Make ' + spec.var + ' one less');
    el('plus').setAttribute('aria-label', 'Make ' + spec.var + ' one more');
    var s = saved();
    x = s && s.x !== undefined ? s.x : spec.start;
    theta = target = tiltFor();
    build();
    setX(x, false);
  }

  el('xval').addEventListener('input', function (e) { setX(Number(e.target.value), true); });
  el('minus').addEventListener('click', function () { setX(x - spec.step, true); });
  el('plus').addEventListener('click', function () { setX(x + spec.step, true); });
  el('take').addEventListener('click', function () { act(el('takeWhat').value, Number(el('takeN').value)); });
  el('split').addEventListener('click', function () { act('split', Number(el('splitN').value)); });
  el('restart').addEventListener('click', function () { moved = true; startSolve(true); });
  el('undo').addEventListener('click', function () { undo(el('undoOp').value, Number(el('undoN').value)); });
  el('mrestart').addEventListener('click', function () { moved = true; startMachine(true); });
  // The lesson page sends a new setup when a task's start is loaded; Esc leaves full screen, as in the other playgrounds.
  window.addEventListener('message', function (e) { var m = e.data; if (e.origin === location.origin && m && m.wp === 'set-code') load(m.code); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && parent !== window) parent.postMessage({ wp: 'esc' }, location.origin); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (board && spec.widget === 'balance') { build(); board.update(); } });
  window.addEventListener('resize', function () { if (board && spec.widget === 'balance') { board.resizeContainer(el('board').clientWidth, el('board').clientHeight); board.setBoundingBox(fitBox(), false); } });

  load(q.get('code'));
})();
