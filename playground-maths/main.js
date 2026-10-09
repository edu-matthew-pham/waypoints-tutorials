// Maths board: an embeddable JSXGraph page for maths lessons. Like the turtle playground, it takes its starting
// setup from ?code= (a lesson's code region) and reports to the lesson page with postMessage, so checks can tick.
//
// Setup format: one "key: value" per line.
//   widget: balance        (the only widget so far)
//   left: 2x + 3           an expression in one variable
//   right: 11
//   var: x                 (default x)
//   min: 0, max: 10, start: 1, step: 1
//
// Message to the lesson page after every change:
//   { wp: 'run', id, kind: 'maths', status: 'done', moved, output, state: { x, left, right, balanced } }
// `moved` is false until the student changes something, so a check never ticks on the starting position.
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  var ID = q.get('id') || 'free';
  var KEY = 'wp-maths:' + ID;
  var board = null, spec = null, x = 0, theta = 0, target = 0, moved = false, raf = 0;
  var el = function (id) { return document.getElementById(id); };
  var css = function (name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); };

  function parseSpec(text) {
    var s = { widget: 'balance', var: 'x', min: 0, max: 10, start: 0, step: 1 };
    String(text || '').split('\n').forEach(function (line) {
      var m = /^\s*([a-z]+)\s*:\s*(.*?)\s*$/i.exec(line);
      if (m && m[2] !== '') s[m[1]] = m[2];
    });
    ['min', 'max', 'start', 'step'].forEach(function (k) { s[k] = Number(s[k]); });
    if (!s.left || !s.right) throw new Error('The board needs left: and right: expressions.');
    return s;
  }
  function value(expr) { var v = {}; v[spec.var] = x; return WPM.evaluate(expr, v); }
  // 2x + 3 with x = 4  ->  2(4) + 3
  function substituted(expr) {
    var v = spec.var, re1 = new RegExp('(\\d|\\))\\s*' + v, 'g'), re2 = new RegExp(v, 'g');
    return expr.replace(re1, '$1(' + x + ')').replace(re2, String(x));
  }
  function fmt(n) { return Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : String(+n.toFixed(2)); }
  // ax + b with whole-number a and b (so it can be drawn as bags and blocks), else null
  function linear(expr) {
    try {
      var f = function (t) { var v = {}; v[spec.var] = t; return WPM.evaluate(expr, v); };
      var b = f(0), a = f(1) - b;
      if (Math.abs(f(2) - (2 * a + b)) > 1e-9) return null;
      if (a < 0 || b < 0 || a % 1 || b % 1 || a > 8 || b > 40) return null;
      return { a: a, b: b };
    } catch (e) { return null; }
  }

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
    var ink = css('--ink') || '#1d2430', muted = css('--muted') || '#5d6675', line = css('--line') || '#e4e1da';
    var fixed = { fixed: true, highlight: false };
    var P = [0, 6], HALF = 8, DROP = 3;
    var end = function (side) { return [P[0] + side * HALF * Math.cos(theta), P[1] + side * HALF * Math.sin(theta)]; };
    var pan = function (side) { var e = end(side); return [e[0], e[1] - DROP]; };
    // Stand and pivot
    board.create('polygon', [[-3, -3.6], [3, -3.6], [0.6, -2.9], [-0.6, -2.9]], Object.assign({ fillColor: muted, fillOpacity: 0.35, borders: { strokeColor: muted } , vertices: { visible: false } }, fixed));
    board.create('segment', [[0, -2.9], P], Object.assign({ strokeColor: muted, strokeWidth: 6 }, fixed));
    // Beam (green when balanced) and the two pans on strings
    var beamColour = function () { return balanced() ? (css('--ok') || '#1a7f37') : ink; };
    var pt = function (f) { return board.create('point', [function () { return f()[0]; }, function () { return f()[1]; }], { visible: false, withLabel: false, fixed: true }); };
    var Lend = pt(function () { return end(-1); }), Rend = pt(function () { return end(1); });
    board.create('segment', [Lend, Rend], Object.assign({ strokeColor: beamColour, strokeWidth: 7 }, fixed));
    board.create('point', P, { name: '', size: 5, fillColor: ink, strokeColor: ink, fixed: true, highlight: false });
    [-1, 1].forEach(function (side) {
      var colour = side < 0 ? (css('--left') || '#2f6fb3') : (css('--right') || '#8a4fb8');
      var expr = side < 0 ? spec.left : spec.right;
      var c = function () { return pan(side); };
      var a = pt(function () { return [c()[0] - 2.8, c()[1]]; }), b = pt(function () { return [c()[0] + 2.8, c()[1]]; });
      var top = side < 0 ? Lend : Rend;
      board.create('segment', [top, a], Object.assign({ strokeColor: muted, strokeWidth: 1.5 }, fixed));
      board.create('segment', [top, b], Object.assign({ strokeColor: muted, strokeWidth: 1.5 }, fixed));
      board.create('segment', [a, b], Object.assign({ strokeColor: ink, strokeWidth: 5 }, fixed));
      // What is on the pan: bags of x, then single blocks, stacked from the pan up
      var lin = linear(expr), items = [], y = 0.1;
      if (lin) {
        for (var i = 0; i < lin.a; i++) items.push({ w: 1.1, h: 1.4, dx: -2.5 + (i % 4) * 1.3 + 0.55, row: Math.floor(i / 4), bag: true });
        var bagRows = Math.ceil(lin.a / 4), bagH = bagRows * 1.55;
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
      // Under the pan: the expression and its value for this x
      board.create('text', [function () { return c()[0]; }, function () { return c()[1] - 0.9; }, expr], { anchorX: 'middle', cssClass: 'eqlabel', highlightCssClass: 'eqlabel', strokeColor: ink, highlightStrokeColor: ink, fixed: true });
      board.create('text', [function () { return c()[0]; }, function () { return c()[1] - 2.1; }, function () {
        var v = value(expr), s = substituted(expr);
        return s.replace(/\s/g, '') === fmt(v) ? '= ' + fmt(v) : '= ' + s + ' = ' + fmt(v);
      }], { anchorX: 'middle', cssClass: 'eqvalue', highlightCssClass: 'eqvalue', strokeColor: muted, highlightStrokeColor: muted, fixed: true });
    });
  }

  function balanced() { return Math.abs(value(spec.left) - value(spec.right)) < 1e-9; }
  function tiltFor() { var d = value(spec.left) - value(spec.right); return -Math.max(-0.3, Math.min(0.3, d * 0.03)); }
  function animate() {
    cancelAnimationFrame(raf);
    (function step() {
      theta += (target - theta) * 0.18;
      if (Math.abs(target - theta) < 0.002) theta = target;
      board.update();
      if (theta !== target) raf = requestAnimationFrame(step);
    })();
  }

  function report(quiet) {
    var L = value(spec.left), R = value(spec.right), ok = balanced();
    var st = el('status');
    st.className = ok ? 'ok' : '';
    st.textContent = ok ? 'Balanced: when ' + spec.var + ' = ' + fmt(x) + ', both sides are ' + fmt(L) + '.'
      : (L > R ? 'The left side is heavier: ' + fmt(L) + ' is more than ' + fmt(R) + '.' : 'The right side is heavier: ' + fmt(R) + ' is more than ' + fmt(L) + '.');
    el('xshow').textContent = spec.var + ' = ' + fmt(x);
    try { localStorage.setItem(KEY, JSON.stringify({ setup: spec.raw, x: x })); } catch (e) { /* private mode */ }
    if (parent !== window) parent.postMessage({
      wp: 'run', id: ID, kind: 'maths', status: 'done', quiet: !!quiet, moved: moved, code: '',
      output: spec.var + ' = ' + fmt(x) + ': left ' + fmt(L) + ', right ' + fmt(R) + (ok ? ', balanced' : ''),
      state: { x: x, left: L, right: R, balanced: ok },
    }, location.origin);
  }

  function setX(v, byStudent) {
    x = Math.max(spec.min, Math.min(spec.max, v));
    el('xval').value = x;
    if (byStudent) moved = true;
    target = tiltFor();
    animate();
    report(!byStudent);
  }

  function load(text) {
    try {
      spec = parseSpec(text);
      spec.raw = String(text || '');
      WPM.parse(spec.left); WPM.parse(spec.right);
    } catch (e) { el('error').hidden = false; el('error').textContent = 'This board cannot start: ' + e.message; return; }
    el('error').hidden = true;
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY)); } catch (e) { saved = null; }
    var r = el('xval');
    r.min = spec.min; r.max = spec.max; r.step = spec.step;
    el('xlabel').textContent = spec.var;
    el('minus').setAttribute('aria-label', 'Make ' + spec.var + ' one less');
    el('plus').setAttribute('aria-label', 'Make ' + spec.var + ' one more');
    x = saved && saved.setup === spec.raw ? saved.x : spec.start;
    moved = false;
    theta = target = tiltFor();
    build();
    setX(x, false);
  }

  el('xval').addEventListener('input', function (e) { setX(Number(e.target.value), true); });
  el('minus').addEventListener('click', function () { setX(x - spec.step, true); });
  el('plus').addEventListener('click', function () { setX(x + spec.step, true); });
  // The lesson page sends a new setup when a task's start is loaded; Esc leaves full screen, as in the other playgrounds.
  window.addEventListener('message', function (e) { var m = e.data; if (e.origin === location.origin && m && m.wp === 'set-code') load(m.code); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && parent !== window) parent.postMessage({ wp: 'esc' }, location.origin); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { build(); board.update(); });
  window.addEventListener('resize', function () { if (board) { board.resizeContainer(el('board').clientWidth, el('board').clientHeight); board.setBoundingBox(fitBox(), false); } });

  load(q.get('code'));
})();
