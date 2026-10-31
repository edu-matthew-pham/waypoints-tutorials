// Tiles: expanding a bracket as an area of algebra tiles. k(ax + b) is k rows, each row a x-tiles and b unit tiles, so
// the rectangle holds k·a x-tiles and k·b ones. Negative tiles are red with a minus sign; a negative k flips every
// tile. Extra terms (p x + q) sit to the right, so "expand, then collect" shows both steps.
//   widget: tiles
//   slider k: -4, 5, 2       the number outside the bracket (or fixed: "k: 3")
//   slider a: -3, 4, 1       the number of x in the bracket (or fixed: "a: 2")
//   slider b: -6, 6, 3       the number in the bracket (or fixed: "b: 4")
//   slider p: -3, 3, 0       optional: extra x-tiles after the bracket (or fixed: "p: -1")
//   slider q: -6, 6, 0       optional: extra ones after the bracket
//   result: off              hide the expanded expression (students work it out); the tiles still show
// Factorising (the same tiles backwards): give the tiles and let students choose the rows.
//   slider s: 1, 12, 6       x-tiles in all (or fixed: "s: 6")
//   slider t: 1, 12, 9       ones in all (or fixed: "t: 9")
//   slider k: 1, 9, 1        rows: the tiles are shared into k equal rows when k divides both, giving k(ax + b)
//   values: k, s, t, f (1 when k rows work), h (1 when k is the highest common factor: fully factorised)
// Two brackets (mode: binomial, Year 9): (x + p)(x + q) as a rectangle x + p wide and x + q tall: one x² tile, p and q
// x-tiles, and p·q ones (negative tiles red). With target, students set p and q to factorise x² + Bx + C.
//   mode: binomial
//   slider p: -6, 8, 2       the number in the first bracket (or fixed "p: 2")
//   slider q: -6, 8, 3       the number in the second bracket
//   target: 5, 6             optional: the expression to factorise, x² + 5x + 6 (B, C); value r is 1 when it matches
//   result: off              hide the expanded expression
//   values (binomial): p, q, m (x-tiles in all: p + q), c (ones: p·q), r (1 when it matches the target), B, C
// Coefficients (mode: binomial, Year 10): (ax + p)(bx + q) is a rectangle ax + p wide and bx + q tall: a·b x² tiles,
// b·p + a·q x-tiles in all and p·q ones. a and b are whole numbers from 1 to 4 and default to 1, so the boards above
// are unchanged.
//   slider a: 1, 3, 2        the number of x in the first bracket (or fixed "a: 2"; default 1)
//   slider b: 1, 3, 1        the number of x in the second bracket (or fixed "b: 3"; default 1)
//   target: 6, 7, 2          three numbers: the expression to factorise, 6x² + 7x + 2 (A, B, C); value r is 1 when
//                            a·b, the x-tiles and the ones all match. Two numbers (B, C) mean x² + Bx + C, as before.
//   values (coefficients): a, b, n (x² tiles: a·b), A (the target's x² number), plus p, q, m, c, r, B, C as above
// Completing the square (mode: square, Year 10): x² + bx + c with b = 2h. The x² tile sits top left, h x-tiles go down
// its right side and h across its bottom, and the corner they leave is an h by h square of ones. That makes the big
// square (x + h)², so x² + bx + c = (x + h)² + k, where k is the ones you have (c) minus the h² the corner needs.
// Leftover ones (k > 0) sit to the right; if the ones run short (k < 0) the missing ones are red, "take away".
//   mode: square
//   slider h: -5, 6, 3       half the number of x: b = 2h (whole numbers from -6 to 6; or fixed "h: 3"); negative h
//                            gives negative (red) x-tiles, and the corner is still positive (two negatives)
//   slider c: -12, 30, 5     the ones you start with (-12 to 30; or fixed "c: 5")
//   corner: off              leave the corner empty and hide the leftover (students say how many ones it needs)
//   result: off              hide the written form (x + h)² + k
//   values (square): h, b (2h), c, s (h²: ones the corner needs), k (c − h²), u and v (the turning point of
//   y = x² + bx + c is (u, v) = (−h, k))
// state: { scope: { vars: { k, a, b, p, q, m (x-tiles in all: k·a + p), c (ones in all: k·b + q) } } }
// Checks: "k = 3 and a = 1 and b = 2", "m = 6 and c = 12 and k > 1".
(function (B) {
  'use strict';
  var spec = null, vars = {}, ui = {};
  var NAMES = ['k', 'a', 'b', 'p', 'q'], FNAMES = ['k', 's', 't'], XLEN = 3.3, GAP = 1.4;
  var gcd = function (x, y) { return y ? gcd(y, x % y) : Math.abs(x); };
  var names = function () { return spec && spec.square ? ['h', 'c'] : spec && spec.binomial ? ['a', 'b', 'p', 'q'] : spec && spec.factor ? FNAMES : NAMES; };
  var show = function (n) { return B.fmt(n).replace(/^-/, '−'); };

  function num(t, where) { var v = Number(String(t).trim()); if (!isFinite(v) || v !== Math.round(v)) throw new Error(where + ': "' + String(t).trim() + '" is not a whole number.'); return v; }
  function parse(s) {
    s.sl = {}; s.fixed = {};
    s.square = /^square$/i.test(s.mode || '');
    if (s.square) return parseSquare(s);
    s.binomial = /^binomial$/i.test(s.mode || '');
    if (s.binomial) return parseBinomial(s);
    s.factor = s.s !== undefined || s.items.some(function (it) { return it.kind === 'slider' && it.name === 's'; });
    var NAMES = s.factor ? FNAMES : ['k', 'a', 'b', 'p', 'q'];
    s.items.forEach(function (it) {
      if (it.kind !== 'slider') return;
      var where = 'Line ' + it.line + ' (slider ' + (it.name || '') + ')';
      if (NAMES.indexOf(it.name) < 0) throw new Error(where + (s.factor ? ': factorising uses sliders k, s and t only.' : ': the tiles board has sliders k, a, b, p and q only.'));
      var v = it.value.split(',').map(function (t) { return num(t, where); });
      if (v.length < 3 || !(v[0] < v[1]) || v[2] < v[0] || v[2] > v[1]) throw new Error(where + ': needs min, max, start with min < max and start between them.');
      s.sl[it.name] = { name: it.name, min: v[0], max: v[1], start: v[2] };
    });
    NAMES.forEach(function (n) {
      if (s[n] !== undefined) { if (s.sl[n]) throw new Error(n + ': give it a slider or a fixed value, not both.'); s.fixed[n] = num(s[n], n); }
      else if (!s.sl[n]) { if (n === 'p' || n === 'q') s.fixed[n] = 0; else throw new Error(n + ': needs a slider ("slider ' + n + ': 1, 9, 2") or a value ("' + n + ': 3").'); }
    });
    if (s.factor && ((s.sl.k && s.sl.k.min < 1) || (!s.sl.k && s.fixed.k < 1))) throw new Error('k: rows start at 1 when factorising.');
    s.showResult = !/^off$/i.test(s.result || '');
  }

  // "2x + 4", "x − 3", "−x", "4"
  function poly(x, c) {
    var parts = [];
    if (x) parts.push((x === 1 ? '' : x === -1 ? '−' : show(x)) + 'x');
    if (c || !parts.length) parts.push(parts.length ? (c < 0 ? '− ' + show(-c) : '+ ' + show(c)) : show(c));
    return parts.join(' ').replace(/^\+ /, '');
  }
  function bracket() { var k = vars.k, inside = poly(vars.a, vars.b); return (k === 1 ? '' : k === -1 ? '−' : show(k)) + '(' + inside + ')'; }
  function extra() { var p = vars.p, q = vars.q; if (!p && !q) return ''; var t = poly(p, q); return t.charAt(0) === '−' ? ' ' + t.replace(/^−/, '− ') : ' + ' + t; }

  // Factorising: k rows work when k divides both totals; then each row is a x-tiles and b ones.
  function derive() {
    if (!spec.factor || spec.binomial) return;
    var k = vars.k, ok = k > 0 && vars.s % k === 0 && vars.t % k === 0;
    vars.f = ok ? 1 : 0; vars.a = ok ? vars.s / k : vars.s; vars.b = ok ? vars.t / k : vars.t; vars.p = 0; vars.q = 0;
    vars.h = ok && gcd(vars.a, vars.b) === 1 ? 1 : 0;
  }
  function build() {
    if (spec.square) return buildSquare();
    if (spec.binomial) return buildBinomial();
    derive();
    if (spec.factor && !vars.f) return buildHeap();
    var ink = B.css('--ink') || '#1d2430', muted = B.css('--muted') || '#5d6675', pos1 = B.css('--left') || '#2f6fb3', pos2 = B.css('--accent') || '#c2570a', neg = '#c0392b';
    // fit what is shown now (with a minimum size), so the tiles stay big enough to read
    var extraW = (vars.p || vars.q) ? GAP + Math.abs(vars.p) * XLEN + Math.abs(vars.q) : 0;
    var W = Math.max(Math.abs(vars.a) * XLEN + Math.abs(vars.b) + extraW, 9), H = Math.max(Math.abs(vars.k), 3);
    var board = B.jsx({ boundingbox: [-1.6, H + 1.6, W + 0.6, -0.4], keepAspectRatio: true });
    var k = vars.k, a = vars.a, b = vars.b, rows = Math.abs(k), sk = k < 0 ? -1 : 1;
    var tile = function (x, y, w, sign, lab, colour) {
      var c = sign < 0 ? neg : colour;
      board.create('polygon', [[x, y], [x + w, y], [x + w, y + 1], [x, y + 1]], { fillColor: c, fillOpacity: sign < 0 ? 0.35 : 0.3, borders: { strokeColor: c, strokeWidth: 1.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
      board.create('text', [x + w / 2, y + 0.5, (sign < 0 ? '−' : '') + lab], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tlab', highlightCssClass: 'tlab', fontSize: 16, fixed: true, highlight: false });
    };
    var top = H - 1;
    for (var r = 0; r < rows; r++) {
      var y = top - r, x = 0;
      for (var i = 0; i < Math.abs(a); i++) { tile(x, y, XLEN, sk * (a < 0 ? -1 : 1), 'x', pos1); x += XLEN; }
      for (var j = 0; j < Math.abs(b); j++) { tile(x, y, 1, sk * (b < 0 ? -1 : 1), '1', pos2); x += 1; }
    }
    var bw = Math.abs(a) * XLEN + Math.abs(b);
    if (rows && bw) {
      // the rectangle: k down the side, the bracket along the top
      board.create('polygon', [[0, top + 1 - rows], [bw, top + 1 - rows], [bw, top + 1], [0, top + 1]], { fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 2.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
      board.create('text', [-0.6, top + 1 - rows / 2, show(k)], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 18, fixed: true, highlight: false });
      if (a) board.create('text', [Math.abs(a) * XLEN / 2, top + 1.55, (a === 1 ? '' : a === -1 ? '−' : show(a)) + 'x'], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 18, fixed: true, highlight: false });
      if (b) board.create('text', [Math.abs(a) * XLEN + Math.abs(b) / 2, top + 1.55, (b < 0 ? '− ' + show(-b) : (a ? '+ ' : '') + show(b))], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 18, fixed: true, highlight: false });
    }
    // extra terms, to the right
    if (vars.p || vars.q) {
      var x0 = Math.abs(vars.a) * XLEN + Math.abs(vars.b) + GAP, xx = x0;
      for (var u = 0; u < Math.abs(vars.p); u++) { tile(xx, top, XLEN, vars.p < 0 ? -1 : 1, 'x', pos1); xx += XLEN; }
      for (var v = 0; v < Math.abs(vars.q); v++) { tile(xx, top, 1, vars.q < 0 ? -1 : 1, '1', pos2); xx += 1; }
      // no sign between: each tile carries its own sign
    }
    board.update();
  }

  // Tiles that do not share into k equal rows: all in one heap, with the remainder shown.
  function buildHeap() {
    var ink = B.css('--ink') || '#1d2430', pos1 = B.css('--left') || '#2f6fb3', pos2 = B.css('--accent') || '#c2570a';
    var W = Math.max(Math.min(vars.s, 4) * XLEN + Math.min(vars.t, 6), 9), H = 3;
    var board = B.jsx({ boundingbox: [-1.6, H + 1.6, W + 0.6, -0.4], keepAspectRatio: true });
    var tile = function (x, y, w, lab, c) {
      board.create('polygon', [[x, y], [x + w, y], [x + w, y + 0.9], [x, y + 0.9]], { fillColor: c, fillOpacity: 0.3, borders: { strokeColor: c, strokeWidth: 1.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
      board.create('text', [x + w / 2, y + 0.45, lab], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tlab', highlightCssClass: 'tlab', fontSize: 16, fixed: true, highlight: false });
    };
    var x = 0, y = H - 1;
    for (var i = 0; i < vars.s; i++) { if (x + XLEN > W) { x = 0; y -= 1; } tile(x, y, XLEN, 'x', pos1); x += XLEN; }
    for (var j = 0; j < vars.t; j++) { if (x + 1 > W) { x = 0; y -= 1; } tile(x, y, 1, '1', pos2); x += 1; }
    board.create('text', [W / 2, H + 0.9, 'These do not share into ' + vars.k + ' equal rows'], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 16, strokeColor: ink, fixed: true, highlight: false });
    board.update();
  }
  function parseBinomial(s) {
    s.items.forEach(function (it) {
      if (it.kind !== 'slider') return;
      var where = 'Line ' + it.line + ' (slider ' + (it.name || '') + ')';
      if (['a', 'b', 'p', 'q'].indexOf(it.name) < 0) throw new Error(where + ': two brackets use sliders a, b, p and q only.');
      var v = it.value.split(',').map(function (t) { return num(t, where); });
      if (v.length < 3 || !(v[0] < v[1]) || v[2] < v[0] || v[2] > v[1]) throw new Error(where + ': needs min, max, start with min < max and start between them.');
      if ((it.name === 'a' || it.name === 'b') ? (v[0] < 1 || v[1] > 4) : (v[0] < -9 || v[1] > 9)) throw new Error(where + (it.name === 'a' || it.name === 'b' ? ': keep a and b between 1 and 4.' : ': keep p and q between −9 and 9.'));
      s.sl[it.name] = { name: it.name, min: v[0], max: v[1], start: v[2] };
    });
    ['a', 'b', 'p', 'q'].forEach(function (n) {
      if (s[n] !== undefined) { if (s.sl[n]) throw new Error(n + ': give it a slider or a fixed value, not both.'); s.fixed[n] = num(s[n], n); if ((n === 'a' || n === 'b') && (s.fixed[n] < 1 || s.fixed[n] > 4)) throw new Error(n + ': keep a and b between 1 and 4.'); }
      else if (!s.sl[n]) { if (n === 'a' || n === 'b') s.fixed[n] = 1; else throw new Error(n + ': needs a slider ("slider ' + n + ': -6, 8, 2") or a value ("' + n + ': 2").'); }
    });
    if (s.target !== undefined) { var t = String(s.target).split(',').map(function (x) { return num(x, 'target'); }); if (t.length !== 2 && t.length !== 3) throw new Error('target: two whole numbers, B and C, for x² + Bx + C, or three, A, B and C, for Ax² + Bx + C.'); s.tgt = t.length === 2 ? [1, t[0], t[1]] : t; }
    s.showResult = !/^off$/i.test(s.result || '');
  }
  // "x + 3", "x − 2", "x"
  function br(n, a) { var x = a === undefined || a === 1 ? 'x' : a + 'x'; return n ? x + ' ' + (n < 0 ? '− ' + show(-n) : '+ ' + show(n)) : x; }
  function quad(B, C, A) { var t = (A === undefined || A === 1) ? 'x²' : show(A) + 'x²'; if (B) t += ' ' + (B < 0 ? '− ' : '+ ') + (Math.abs(B) === 1 ? '' : show(Math.abs(B))) + 'x'; if (C) t += ' ' + (C < 0 ? '− ' : '+ ') + show(Math.abs(C)); return t; }
  function term(n, x) { return (n < 0 ? '− ' : '+ ') + (x && Math.abs(n) === 1 ? '' : show(Math.abs(n))) + (x ? 'x' : ''); }
  function buildBinomial() {
    var ink = B.css('--ink') || '#1d2430', sq = B.css('--right') || '#8a4fb8', pos1 = B.css('--left') || '#2f6fb3', pos2 = B.css('--accent') || '#c2570a', neg = '#c0392b';
    var p = vars.p, q = vars.q, ap = Math.abs(p), aq = Math.abs(q), X = XLEN, na = vars.a, nb = vars.b;
    var W = Math.max(na * X + ap, 6), H = Math.max(nb * X + aq, 5);
    var board = B.jsx({ boundingbox: [-1.8, H + 1.4, W + 0.8, -0.6], keepAspectRatio: true });
    var top = H; // y of the rectangle's top edge
    var tile = function (x, y, w, h, sign, lab, colour) {
      var c = sign < 0 ? neg : colour;
      board.create('polygon', [[x, y - h], [x + w, y - h], [x + w, y], [x, y]], { fillColor: c, fillOpacity: sign < 0 ? 0.35 : 0.3, borders: { strokeColor: c, strokeWidth: 1.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
      board.create('text', [x + w / 2, y - h / 2, (sign < 0 ? '−' : '') + lab], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tlab', highlightCssClass: 'tlab', fontSize: lab === 'x²' ? 20 : 15, fixed: true, highlight: false });
    };
    var sp = p < 0 ? -1 : 1, sq2 = q < 0 ? -1 : 1;
    for (var ix = 0; ix < na; ix++) for (var iy = 0; iy < nb; iy++) tile(ix * X, top - iy * X, X, X, 1, 'x²', sq);
    for (var i = 0; i < ap; i++) for (var ry = 0; ry < nb; ry++) tile(na * X + i, top - ry * X, 1, X, sp, 'x', pos1);
    for (var j = 0; j < aq; j++) for (var cx = 0; cx < na; cx++) tile(cx * X, top - nb * X - j, X, 1, sq2, 'x', pos1);
    for (var u = 0; u < ap; u++) for (var v = 0; v < aq; v++) tile(na * X + u, top - nb * X - v, 1, 1, sp * sq2, '1', pos2);
    var lab = function (x, y, t) { board.create('text', [x, y, t], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 18, strokeColor: ink, fixed: true, highlight: false }); };
    board.create('polygon', [[0, top - nb * X - aq], [na * X + ap, top - nb * X - aq], [na * X + ap, top], [0, top]], { fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 2.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
    lab(na * X / 2, top + 0.6, na === 1 ? 'x' : na + 'x'); if (ap) lab(na * X + ap / 2, top + 0.6, p < 0 ? '− ' + ap : '+ ' + ap);
    lab(-0.8, top - nb * X / 2, nb === 1 ? 'x' : nb + 'x'); if (aq) lab(-0.8, top - nb * X - aq / 2, q < 0 ? '− ' + aq : '+ ' + aq);
    board.update();
  }
  function reportBinomial() {
    var a = vars.a, b = vars.b, p = vars.p, q = vars.q, n = a * b, xp = b * p, xq = a * q, m = xp + xq, c = p * q, co = n !== 1;
    ui.sliders.forEach(function (s) { s.out.textContent = s.n + ' = ' + show(vars[s.n]); });
    var lhs = '(' + br(p, a) + ')(' + br(q, b) + ')';
    var four = (co ? n + 'x²' : 'x²') + ' ' + (xp ? term(xp, true) + ' ' : '') + (xq ? term(xq, true) + ' ' : '') + (c ? term(c, false) : '');
    var text = lhs + (spec.showResult ? ' = ' + four.trim() + (xp && xq ? ' = ' + quad(m, c, n) : '') : '');
    var T = spec.tgt, r = T ? (n === T[0] && m === T[1] && c === T[2] ? 1 : 0) : 0;
    ui.work.textContent = text;
    if (T) ui.count.textContent = 'Target: ' + quad(T[1], T[2], T[0]) + '. ' + (r ? 'These brackets make it.' : 'These make ' + quad(m, c, n) + (n !== T[0] ? ': the x² tiles need to be ' + T[0] + ' (a × b).' : c !== T[2] ? ': the ones need to multiply to ' + show(T[2]) + '.' : ': the x-tiles need to add to ' + show(T[1]) + '.'));
    else if (co) ui.count.textContent = spec.showResult ? show(n) + ' x² tile' + (n === 1 ? '' : 's') + ', ' + Math.abs(m) + ' x-tile' + (Math.abs(m) === 1 ? '' : 's') + ' in all (' + show(xp) + ' + ' + show(xq) + ') and ' + Math.abs(c) + (c < 0 ? ' negative' : '') + ' one' + (Math.abs(c) === 1 ? '' : 's') + ' (' + show(p) + ' × ' + show(q) + ').' : 'The x² tiles, the x-tiles and the ones.';
    else ui.count.textContent = spec.showResult ? 'One x², ' + Math.abs(m) + ' x-tile' + (Math.abs(m) === 1 ? '' : 's') + ' in all (' + show(p) + ' + ' + show(q) + ') and ' + Math.abs(c) + (c < 0 ? ' negative' : '') + ' one' + (Math.abs(c) === 1 ? '' : 's') + ' (' + show(p) + ' × ' + show(q) + ').' : 'One x², the x-tiles and the ones.';
    B.say('');
    B.save({ vars: vars });
    B.post({ scope: { vars: { a: a, b: b, n: n, p: p, q: q, m: m, c: c, r: r, A: T ? T[0] : 0, B: T ? T[1] : 0, C: T ? T[2] : 0 }, points: {} } }, text);
  }
  // Completing the square: sliders h and c only.
  function parseSquare(s) {
    var rng = { h: [-6, 6], c: [-12, 30] };
    s.items.forEach(function (it) {
      if (it.kind !== 'slider') return;
      var where = 'Line ' + it.line + ' (slider ' + (it.name || '') + ')';
      if (!rng[it.name]) throw new Error(where + ': completing the square uses sliders h and c only.');
      var v = it.value.split(',').map(function (t) { return num(t, where); });
      if (v.length < 3 || !(v[0] < v[1]) || v[2] < v[0] || v[2] > v[1]) throw new Error(where + ': needs min, max, start with min < max and start between them.');
      if (v[0] < rng[it.name][0] || v[1] > rng[it.name][1]) throw new Error(where + ': keep ' + it.name + ' between ' + rng[it.name][0] + ' and ' + rng[it.name][1] + '.');
      s.sl[it.name] = { name: it.name, min: v[0], max: v[1], start: v[2] };
    });
    ['h', 'c'].forEach(function (n) {
      if (s[n] !== undefined) {
        if (s.sl[n]) throw new Error(n + ': give it a slider or a fixed value, not both.');
        s.fixed[n] = num(s[n], n);
        if (s.fixed[n] < rng[n][0] || s.fixed[n] > rng[n][1]) throw new Error(n + ': keep it between ' + rng[n][0] + ' and ' + rng[n][1] + '.');
      } else if (!s.sl[n]) throw new Error(n + ': needs a slider ("slider ' + n + ': ' + (n === 'h' ? '-5, 6, 3' : '-12, 30, 5') + '") or a value ("' + n + ': 3").');
    });
    s.cornerOn = !/^off$/i.test(s.corner || '');
    s.showResult = !/^off$/i.test(s.result || '');
  }
  function buildSquare() {
    var ink = B.css('--ink') || '#1d2430', sq = B.css('--right') || '#8a4fb8', pos1 = B.css('--left') || '#2f6fb3', pos2 = B.css('--accent') || '#c2570a', neg = '#c0392b';
    var h = vars.h, ah = Math.abs(h), sh = h < 0 ? -1 : 1, k = vars.c - h * h, ak = Math.abs(k), X = XLEN, S = X + ah;
    var showFix = spec.cornerOn && k !== 0, cols = Math.max(1, Math.min(ak, 6));
    var W = Math.max(S + (showFix ? 1.2 + cols : 0), 8), top = S;
    var board = B.jsx({ boundingbox: [-1.8, top + 1.6, W + 0.8, -0.8], keepAspectRatio: true });
    var tile = function (x, y, w, hh, sign, lab, colour) {
      var c = sign < 0 ? neg : colour;
      board.create('polygon', [[x, y - hh], [x + w, y - hh], [x + w, y], [x, y]], { fillColor: c, fillOpacity: sign < 0 ? 0.35 : 0.3, borders: { strokeColor: c, strokeWidth: 1.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
      board.create('text', [x + w / 2, y - hh / 2, (sign < 0 ? '−' : '') + lab], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tlab', highlightCssClass: 'tlab', fontSize: lab === 'x²' ? 20 : 15, fixed: true, highlight: false });
    };
    var lab = function (x, y, t) { board.create('text', [x, y, t], { anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', fontSize: 18, strokeColor: ink, fixed: true, highlight: false }); };
    tile(0, top, X, X, 1, 'x²', sq);
    for (var i = 0; i < ah; i++) tile(X + i, top, 1, X, sh, 'x', pos1);
    for (var j = 0; j < ah; j++) tile(0, top - X - j, X, 1, sh, 'x', pos1);
    for (var u = 0; u < ah; u++) for (var v = 0; v < ah; v++) {
      if (spec.cornerOn) tile(X + u, top - X - v, 1, 1, 1, '1', pos2);
      else board.create('polygon', [[X + u, top - X - v - 1], [X + u + 1, top - X - v - 1], [X + u + 1, top - X - v], [X + u, top - X - v]], { fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 1, dash: 2, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
    }
    board.create('polygon', [[0, 0], [S, 0], [S, top], [0, top]], { fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 2.5, highlight: false }, vertices: { visible: false }, fixed: true, highlight: false });
    lab(X / 2, top + 0.6, 'x'); if (ah) lab(X + ah / 2, top + 0.6, h < 0 ? '− ' + ah : '+ ' + ah);
    lab(-0.8, top - X / 2, 'x'); if (ah) lab(-0.8, top - X - ah / 2, h < 0 ? '− ' + ah : '+ ' + ah);
    if (showFix) {
      var x0 = S + 1.2;
      for (var n = 0; n < ak; n++) tile(x0 + (n % 6), top - Math.floor(n / 6), 1, 1, k < 0 ? -1 : 1, '1', pos2);
      lab(x0 + (cols - 1) / 2 + 0.5, top + 0.6, k > 0 ? show(k) + ' left over' : 'take away ' + ak);
    }
    board.update();
  }
  function reportSquare() {
    var h = vars.h, c = vars.c, b = 2 * h, s = h * h, k = c - s, ab = Math.abs(b);
    ui.sliders.forEach(function (sl) { sl.out.textContent = sl.n + ' = ' + show(vars[sl.n]); });
    var whole = quad(b, c);
    var sqr = h ? '(x ' + (h < 0 ? '− ' + show(-h) : '+ ' + show(h)) + ')²' : 'x²';
    var text = whole + (spec.showResult && spec.cornerOn ? ' = ' + sqr + (k ? ' ' + (k < 0 ? '− ' + show(-k) : '+ ' + show(k)) : '') : '');
    ui.work.textContent = text;
    var xs = ab ? ab + ' ' + (b < 0 ? 'negative ' : '') + 'x-tile' + (ab === 1 ? '' : 's') + ' (' + Math.abs(h) + ' down each side)' : 'no x-tiles';
    var base = 'One x², ' + xs + ' and ' + (c < 0 ? Math.abs(c) + ' negative' : c) + ' one' + (Math.abs(c) === 1 ? '' : 's') + '.';
    if (!spec.cornerOn) ui.count.textContent = base + ' How many ones would fill the corner?';
    else if (!spec.showResult) ui.count.textContent = base;
    else ui.count.textContent = base + ' The corner needs ' + s + ' one' + (s === 1 ? '' : 's') + (k === 0 ? ', exactly the ones you have.' : k > 0 ? '; you have ' + show(c) + ', so ' + k + ' ' + (k === 1 ? 'is' : 'are') + ' left over.' : '; you have ' + show(c) + ', so it is ' + (-k) + ' short: take ' + (-k) + ' away.');
    B.say('');
    B.save({ vars: vars });
    B.post({ scope: { vars: { h: h, b: b, c: c, s: s, k: k, u: -h, v: k }, points: {} } }, text);
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = { sliders: [] };
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'tsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.count = document.createElement('p'); ui.count.className = 'tcount'; ui.count.setAttribute('aria-live', 'polite'); panel.appendChild(ui.count);
    names().forEach(function (n) {
      var sl = spec.sl[n]; if (!sl) return;
      var row = document.createElement('div'); row.className = 'srow';
      var lab = document.createElement('label'); lab.className = 'vname'; lab.textContent = n; lab.htmlFor = 'sl-' + n;
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', 'Make ' + n + ' smaller');
      var r = document.createElement('input'); r.type = 'range'; r.id = 'sl-' + n; r.min = sl.min; r.max = sl.max; r.step = 1; r.value = vars[n];
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', 'Make ' + n + ' bigger');
      var out = document.createElement('output'); out.htmlFor = r.id;
      var set = function (v) { v = Math.max(sl.min, Math.min(sl.max, Math.round(v))); vars[n] = v; r.value = v; B.moved = true; build(); report(); };
      r.addEventListener('input', function () { set(Number(r.value)); });
      minus.addEventListener('click', function () { set(vars[n] - 1); });
      plus.addEventListener('click', function () { set(vars[n] + 1); });
      row.append(lab, minus, r, plus, out); panel.appendChild(row);
      ui.sliders.push({ n: n, out: out });
    });
    var bar = document.createElement('div'); bar.className = 'gbar';
    var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }

  function report() {
    if (spec.square) return reportSquare();
    if (spec.binomial) return reportBinomial();
    derive();
    if (spec.factor) return reportFactor();
    var m = vars.k * vars.a + vars.p, c = vars.k * vars.b + vars.q, kx = vars.k * vars.a, kc = vars.k * vars.b;
    ui.sliders.forEach(function (s) { s.out.textContent = s.n + ' = ' + show(vars[s.n]); });
    var lhs = bracket() + extra();
    var expanded = poly(kx, kc) + extra();
    var text = lhs + (spec.showResult ? ' = ' + expanded + ((vars.p || vars.q) ? ' = ' + poly(m, c) : '') : '');
    ui.work.textContent = text;
    var n = function (v, w) { return Math.abs(v) + ' ' + (v < 0 ? 'negative ' : '') + w + (Math.abs(v) === 1 ? '' : 's'); };
    ui.count.textContent = spec.showResult ? Math.abs(vars.k) + (Math.abs(vars.k) === 1 ? ' row' : ' rows') + ' of (' + poly(vars.a, vars.b) + '): ' + n(kx, 'x-tile') + ' and ' + n(kc, 'one') + '.' : Math.abs(vars.k) + (Math.abs(vars.k) === 1 ? ' row' : ' rows') + ' of (' + poly(vars.a, vars.b) + ').';
    var scope = { k: vars.k, a: vars.a, b: vars.b, p: vars.p, q: vars.q, m: m, c: c };
    B.say('');
    B.save({ vars: vars });
    B.post({ scope: { vars: scope, points: {} } }, text);
  }

  function reportFactor() {
    ui.sliders.forEach(function (sl) { sl.out.textContent = sl.n + ' = ' + show(vars[sl.n]); });
    var whole = poly(vars.s, vars.t), text;
    if (!vars.f) text = whole + ': ' + vars.k + ' rows do not work';
    else text = whole + ' = ' + (vars.k === 1 ? '1' : show(vars.k)) + '(' + poly(vars.a, vars.b) + ')';
    ui.work.textContent = text;
    var hcf = gcd(vars.s, vars.t);
    ui.count.textContent = !vars.f ? vars.k + ' does not go into both ' + vars.s + ' and ' + vars.t + '.' : vars.h ? (vars.k === 1 ? 'Each row is the whole expression: nothing to take out.' : 'Fully factorised: ' + vars.k + ' is the biggest number of rows that works.') : vars.k + ' rows work, but the rows could still be shared further.';
    B.say('');
    B.save({ vars: vars });
    B.post({ scope: { vars: { k: vars.k, s: vars.s, t: vars.t, f: vars.f, h: vars.h, g: hcf }, points: {} } }, text);
  }

  B.widget('tiles', {
    sections: ['board', 'gpanel'],
    label: function () { return 'Algebra tiles: a bracket expanded as rows of tiles'; },
    parse: parse,
    start: function (fresh) {
      spec = B.spec;
      var sv = fresh ? null : B.saved();
      vars = {};
      names().forEach(function (n) { vars[n] = spec.sl[n] ? (sv && sv.vars && sv.vars[n] !== undefined ? sv.vars[n] : spec.sl[n].start) : spec.fixed[n]; });
      paintPanel();
      build();
      report();
    },
    redraw: function () { build(); },
    resize: function () { build(); },
  });
})(WPB);
