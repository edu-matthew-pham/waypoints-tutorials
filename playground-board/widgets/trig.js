// Trigonometry: a right-angled triangle with one marked angle. The three sides are named from that angle
// (opposite, adjacent, hypotenuse) and the three ratios are worked out live. Change the size (h) and the ratios do not
// move: similar triangles. Change the angle (t) and they do.
//   widget: trig
//   slider t: 10, 80, 35, 5   the marked angle, in degrees (or fixed "t: 35")
//   slider h: 2, 10, 5, 1     the hypotenuse length (or fixed "h: 5")
//   units: cm
//   show: sin, cos, tan       which ratio rows to show (default all three; "none" hides them)
//   switch: on                a button "Look from the other angle" (opposite and adjacent swap)
// state: { scope: { vars: { t (marked angle), h (hypotenuse), o (opposite), a (adjacent), s (sin), c (cos),
//   n (tan), w (1 when viewed from the other angle) } } }  Ratios to 3 decimal places, sides to 2.
// Checks: "t = 35 and h = 10", "t = 45", "w = 1", "h = 5".
//
// Two more views (Year 10), same sliders t and h, drawn differently. The default view is the triangle above.
//   view: elevation   a high point and a low point joined by a line of sight. h = the height (up to 200), t = the angle
//                     (5 to 85) that the line of sight makes with the horizontal. The angle of depression at the top and
//                     the angle of elevation at the bottom are drawn together, equal. The distance is h ÷ tan t.
//                     look: down | up   who is looking (the eye sits at the top, or at the bottom); units: m
//                     show: sin, cos, tan  works as in the triangle view (default: tan; opposite = height, adjacent = distance)
//   view: bearing     a north line, a distance h (up to 5000) at a bearing t (0 to 360, clockwise from north), with its
//                     north and east parts. show: north, east  adds a line for each part (default: none).
// view: elevation state: scope vars t (angle), h (height), d (distance along the ground), l (line of sight), o, a, s, c,
//   n (as in the triangle view: o = height, a = d), w = 0.   Checks: "t = 8 and h = 6".
// view: bearing state: scope vars t (bearing), h (distance), n (north part, negative = south), e (east part, negative =
//   west).   Checks: "t = 40 and h = 600", "t = 225".
(function (B) {
  'use strict';
  var spec = null, vars = {}, ui = {};
  var NAMES = ['t', 'h'];
  var r2 = function (v) { return Math.round(v * 100) / 100; };
  var r3 = function (v) { return Math.round(v * 1000) / 1000; };
  function nums(t, where) { return String(t).split(',').map(function (x) { var v = Number(x.trim()); if (!isFinite(v)) throw new Error(where + ': "' + x.trim() + '" is not a number.'); return v; }); }
  function parse(s) {
    s.sl = {}; s.fixed = {};
    s.items.forEach(function (it) {
      if (it.kind !== 'slider') return;
      if (NAMES.indexOf(it.name) < 0) throw new Error('Line ' + it.line + ': the trig board has sliders t (the angle) and h (the hypotenuse) only.');
      var v = nums(it.value, 'slider ' + it.name);
      if (v.length < 3 || !(v[0] < v[1]) || v[2] < v[0] || v[2] > v[1]) throw new Error('slider ' + it.name + ': needs min, max, start with min < max and start between them.');
      s.sl[it.name] = { min: v[0], max: v[1], start: v[2], step: v[3] || 1 };
    });
    NAMES.forEach(function (n) { if (s[n] !== undefined) { if (s.sl[n]) throw new Error(n + ': a slider or a value, not both.'); s.fixed[n] = nums(s[n], n)[0]; } });
    NAMES.forEach(function (n) { if (!s.sl[n] && s.fixed[n] === undefined) throw new Error(n + ': needs a slider or a value.'); });
    var hi = function (n) { return s.sl[n] ? s.sl[n].max : s.fixed[n]; }, lo = function (n) { return s.sl[n] ? s.sl[n].min : s.fixed[n]; };
    s.view = String(s.view || 'triangle').trim().toLowerCase();
    if (['triangle', 'elevation', 'bearing'].indexOf(s.view) < 0) throw new Error('view: triangle, elevation or bearing.');
    var tlo = s.view === 'bearing' ? 0 : 5, thi = s.view === 'bearing' ? 360 : 85, hlim = s.view === 'bearing' ? 5000 : s.view === 'elevation' ? 200 : 20;
    if (lo('t') < tlo || hi('t') > thi) throw new Error('t: ' + (s.view === 'bearing' ? 'a bearing from 0 to 360 degrees.' : 'an angle from 5 to 85 degrees.'));
    if (lo('h') <= 0 || hi('h') > hlim) throw new Error('h: more than 0, up to ' + hlim + '.');
    s.look = /^up$/i.test(String(s.look || '').trim()) ? 'up' : 'down';
    s.u = s.units ? String(s.units).trim() : '';
    var okRows = s.view === 'bearing' ? ['north', 'east'] : ['sin', 'cos', 'tan'], dflt = s.view === 'bearing' ? [] : s.view === 'elevation' ? ['tan'] : ['sin', 'cos', 'tan'];
    s.rows = (s.show ? String(s.show).split(',').map(function (x) { return x.trim().toLowerCase(); }) : dflt).filter(function (x) { return okRows.indexOf(x) >= 0; });
    if (!s.rows.length && s.show && !/^none$/i.test(String(s.show).trim())) throw new Error('show: use ' + okRows.join(' and/or ') + ', or none.');
    if (!s.rows.length && !s.show && s.view === 'triangle') throw new Error('show: use sin, cos and/or tan, or none.');
    s.sw = s.view === 'triangle' && /^(on|yes|true)$/i.test(String(s.switch || '').trim());
  }

  function calc() {
    var t = vars.t, h = vars.h, w = vars.w ? 1 : 0, rad = t * Math.PI / 180;
    if (spec.view === 'elevation') {   // h is the height; the triangle's angle is at the bottom (equal to the angle of depression at the top)
      var dd = h / Math.tan(rad), ll = h / Math.sin(rad);
      return { T: t, ht: h, h: ll, o: h, a: dd, w: 0, base: { o: h, a: dd }, s: Math.sin(rad), c: Math.cos(rad), n: Math.tan(rad) };
    }
    if (spec.view === 'bearing') return { T: t, h: h, w: 0, N: h * Math.cos(rad), E: h * Math.sin(rad) };
    var base = { o: h * Math.sin(rad), a: h * Math.cos(rad) };   // for the angle t at the left corner
    var T = w ? 90 - t : t, o = w ? base.a : base.o, a = w ? base.o : base.a;
    return { T: T, h: h, o: o, a: a, w: w, base: base, s: o / h, c: a / h, n: o / a };
  }

  var z2 = function (v) { return Math.round(v * 100) / 100 + 0; };   // no negative zero
  var bearingText = function (v) { var q = String(Math.round(v)); while (q.length < 3) q = '0' + q; return q; };
  function lab(board, fx, x, y, str, col, ax, ay, size) { return board.create('text', [x, y, str], Object.assign({ anchorX: ax, anchorY: ay, cssClass: 'tside', highlightCssClass: 'tside', strokeColor: col, fontSize: size || 15 }, fx)); }

  // view: elevation. The tower is on the left (height h), the target on the ground at distance h ÷ tan t.
  function buildElev() {
    var ink = B.css('--ink') || '#1d2430', blue = B.css('--left') || '#2f6fb3', orange = B.css('--accent') || '#c2570a', purple = B.css('--right') || '#8a4fb8', muted = B.css('--muted') || '#5d6675';
    var k = calc(), d = k.a, ht = k.o, span = Math.max(d, ht), u = spec.u ? ' ' + spec.u : '', down = spec.look !== 'up';
    var board = B.jsx({ boundingbox: [-0.24 * span, ht + 0.2 * span, d + 0.16 * span, -0.14 * span], keepAspectRatio: true });
    var fx = { fixed: true, highlight: false };
    var H = [0, ht], S = [d, 0], F = [0, 0], rad = vars.t * Math.PI / 180;
    board.create('segment', [[-0.1 * span, 0], [d + 0.1 * span, 0]], Object.assign({ strokeColor: ink, strokeWidth: 2 }, fx));
    board.create('segment', [H, [d + 0.08 * span, ht]], Object.assign({ strokeColor: muted, strokeWidth: 1.5, dash: 2 }, fx));
    board.create('segment', [F, H], Object.assign({ strokeColor: blue, strokeWidth: 5 }, fx));
    board.create('segment', [F, S], Object.assign({ strokeColor: purple, strokeWidth: 5, dash: 0 }, fx));
    board.create('segment', [H, S], Object.assign({ strokeColor: orange, strokeWidth: 3 }, fx));
    var z = 0.05 * span;
    board.create('polygon', [[0, 0], [z, 0], [z, z], [0, z]], Object.assign({ fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 1.5, highlight: false }, vertices: { visible: false } }, fx));
    // the two equal angles: depression at the top (below the horizontal), elevation at the bottom (above the ground)
    var ra = Math.min(0.3 * d, 0.45 * ht + 0.1 * span);
    board.create('arc', [H, [ra * Math.cos(rad), ht - ra * Math.sin(rad)], [ra, ht]], Object.assign({ strokeColor: ink, strokeWidth: down ? 3 : 1.5 }, fx));
    board.create('arc', [S, [d - ra * Math.cos(rad), ra * Math.sin(rad)], [d - ra, 0]], Object.assign({ strokeColor: ink, strokeWidth: down ? 1.5 : 3 }, fx));
    lab(board, fx, ra + 0.03 * span, ht + 0.02 * span, B.fmt(r2(vars.t)) + '° depression', ink, 'left', 'bottom', down ? 15 : 13);
    lab(board, fx, d - ra - 0.03 * span, -0.02 * span, B.fmt(r2(vars.t)) + '° elevation', ink, 'right', 'top', down ? 13 : 15);
    // the eye, and the thing looked at
    var eye = down ? H : S, tgt = down ? S : H;
    board.create('point', eye, { name: '', size: 6, fillColor: ink, strokeColor: ink, fixed: true, highlight: false, showInfobox: false });
    board.create('point', tgt, { name: '', size: 6, fillColor: '#fff', strokeColor: ink, strokeWidth: 2, fixed: true, highlight: false, showInfobox: false });
    lab(board, fx, eye[0] + (down ? -0.02 : 0.02) * span, eye[1] + 0.03 * span, 'eye', ink, down ? 'right' : 'left', 'bottom', 14);
    lab(board, fx, tgt[0] + (down ? 0.02 : -0.02) * span, tgt[1] + 0.03 * span, 'target', ink, down ? 'left' : 'right', 'bottom', 14);
    lab(board, fx, -0.03 * span, ht / 2, 'height ' + B.fmt(r2(ht)) + u, blue, 'right', 'middle');
    lab(board, fx, d / 2, -0.07 * span, 'distance ' + B.fmt(r2(d)) + u, purple, 'middle', 'top');
    var nx = ht / k.h, ny = d / k.h;   // a step away from the line of sight, up and to the right
    lab(board, fx, d / 2 + 0.05 * span * nx, ht / 2 + 0.05 * span * ny, 'line of sight ' + B.fmt(r2(k.h)) + u, orange, 'left', 'bottom');
    board.update();
  }

  // view: bearing. The start is at the middle; north is up; the bearing is turned clockwise from north.
  function buildBear() {
    var ink = B.css('--ink') || '#1d2430', blue = B.css('--left') || '#2f6fb3', orange = B.css('--accent') || '#c2570a', purple = B.css('--right') || '#8a4fb8', muted = B.css('--muted') || '#5d6675';
    var k = calc(), R = k.h, N = k.N, E = k.E, u = spec.u ? ' ' + spec.u : '', rad = vars.t * Math.PI / 180;
    var board = B.jsx({ boundingbox: [-1.45 * R, 1.4 * R, 1.45 * R, -1.4 * R], keepAspectRatio: true });
    var fx = { fixed: true, highlight: false }, P = [E, N], A = [0, N], big = Math.abs(N) > 1e-9 * R, wide = Math.abs(E) > 1e-9 * R;
    board.create('circle', [[0, 0], R], Object.assign({ strokeColor: muted, strokeWidth: 1, dash: 2, fillColor: 'none' }, fx));
    board.create('segment', [[-1.15 * R, 0], [1.15 * R, 0]], Object.assign({ strokeColor: muted, strokeWidth: 1 }, fx));
    board.create('segment', [[0, -1.15 * R], [0, 1.15 * R]], Object.assign({ strokeColor: ink, strokeWidth: 2, dash: 2 }, fx));
    [['N', 0, 1.27], ['E', 1.27, 0], ['S', 0, -1.27], ['W', -1.27, 0]].forEach(function (c) { lab(board, fx, c[1] * R, c[2] * R, c[0], c[0] === 'N' ? ink : muted, 'middle', 'middle', c[0] === 'N' ? 18 : 15); });
    if (big) board.create('segment', [[0, 0], A], Object.assign({ strokeColor: blue, strokeWidth: 4 }, fx));
    if (wide) board.create('segment', [A, P], Object.assign({ strokeColor: purple, strokeWidth: 4 }, fx));
    board.create('segment', [[0, 0], P], Object.assign({ strokeColor: orange, strokeWidth: 3 }, fx));
    if (big && wide) {
      var zz = 0.06 * R, sx = E > 0 ? 1 : -1, sy = N > 0 ? -1 : 1;
      board.create('polygon', [A, [sx * zz, N], [sx * zz, N + sy * zz], [0, N + sy * zz]], Object.assign({ fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 1.5, highlight: false }, vertices: { visible: false } }, fx));
    }
    var t = vars.t % 360;
    if (t !== 0) {
      var ra = 0.3 * R, mid = (t / 2) * Math.PI / 180;
      board.create('arc', [[0, 0], [ra * Math.sin(rad), ra * Math.cos(rad)], [0, ra]], Object.assign({ strokeColor: ink, strokeWidth: 2.5 }, fx));
      lab(board, fx, 0.46 * R * Math.sin(mid), 0.46 * R * Math.cos(mid), bearingText(vars.t) + '°', ink, 'middle', 'middle', 15);
    }
    board.create('point', [0, 0], { name: '', size: 6, fillColor: ink, strokeColor: ink, fixed: true, highlight: false, showInfobox: false });
    board.create('point', P, { name: '', size: 6, fillColor: '#fff', strokeColor: ink, strokeWidth: 2, fixed: true, highlight: false, showInfobox: false });
    if (big) lab(board, fx, -0.03 * R, N / 2, (N >= 0 ? 'north ' : 'south ') + B.fmt(r2(Math.abs(N))) + u, blue, 'right', 'middle');
    if (wide) lab(board, fx, E / 2, N + (N >= 0 ? 0.04 : -0.07) * R, (E >= 0 ? 'east ' : 'west ') + B.fmt(r2(Math.abs(E))) + u, purple, 'middle', N >= 0 ? 'bottom' : 'top');
    lab(board, fx, E / 2 + 0.04 * R * (E >= 0 ? 1 : -1), N / 2 - 0.04 * R * (N >= 0 ? 1 : -1), B.fmt(r2(R)) + u, orange, E >= 0 ? 'left' : 'right', N >= 0 ? 'top' : 'bottom');
    board.update();
  }

  function build() {
    if (spec.view === 'elevation') return buildElev();
    if (spec.view === 'bearing') return buildBear();
    var ink = B.css('--ink') || '#1d2430', blue = B.css('--left') || '#2f6fb3', orange = B.css('--accent') || '#c2570a', purple = B.css('--right') || '#8a4fb8';
    var k = calc(), hmax = spec.sl.h ? spec.sl.h.max : spec.fixed.h, rad = vars.t * Math.PI / 180;
    var W = hmax * Math.cos(rad), H = hmax * Math.sin(rad);
    var board = B.jsx({ boundingbox: [-1, H + 1.2, W + 1.4, -1.2], keepAspectRatio: true });
    var fx = { fixed: true, highlight: false };
    var O = [0, 0], P = [k.base.a, 0], Q = [k.base.a, k.base.o];
    board.create('polygon', [O, P, Q], Object.assign({ fillColor: ink, fillOpacity: 0.07, borders: { strokeColor: ink, strokeWidth: 3, highlight: false }, vertices: { visible: false } }, fx));
    var z = Math.min(0.5, k.base.a / 4, k.base.o / 4 || 0.5);
    board.create('polygon', [[P[0], 0], [P[0] - z, 0], [P[0] - z, z], [P[0], z]], Object.assign({ fillOpacity: 0, borders: { strokeColor: ink, strokeWidth: 1.5, highlight: false }, vertices: { visible: false } }, fx));
    // the marked angle: at the left corner, or at the top when viewed from the other angle
    var V = k.w ? Q : O, ang1, ang2, ra = Math.min(1.1, 0.35 * Math.min(k.h, 4));
    var dir = function (A, Bp) { var dx = Bp[0] - A[0], dy = Bp[1] - A[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
    var toA = k.w ? dir(Q, O) : dir(O, P), toB = k.w ? dir(Q, P) : dir(O, Q);
    ang1 = [V[0] + ra * toA[0], V[1] + ra * toA[1]]; ang2 = [V[0] + ra * toB[0], V[1] + ra * toB[1]];
    board.create('arc', [V, ang1, ang2], Object.assign({ strokeColor: ink, strokeWidth: 2 }, fx));
    var bis = [toA[0] + toB[0], toA[1] + toB[1]], bl = Math.hypot(bis[0], bis[1]);
    board.create('text', [V[0] + 1.6 * ra * bis[0] / bl, V[1] + 1.6 * ra * bis[1] / bl, B.fmt(r2(k.T)) + '°'], Object.assign({ anchorX: 'middle', anchorY: 'middle', cssClass: 'tside', highlightCssClass: 'tside', strokeColor: ink, fontSize: 14 }, fx));
    var u = spec.u ? ' ' + spec.u : '';
    var lab = function (x, y, s, col, ax, ay) { return board.create('text', [x, y, s], Object.assign({ anchorX: ax, anchorY: ay, cssClass: 'tside', highlightCssClass: 'tside', strokeColor: col, fontSize: 15 }, fx)); };
    // base side (bottom), upright side (right), hypotenuse; named from the marked angle
    var nameBottom = k.w ? 'opposite' : 'adjacent', nameRight = k.w ? 'adjacent' : 'opposite';
    var colBottom = k.w ? blue : purple, colRight = k.w ? purple : blue;
    lab(P[0] / 2, -0.15, nameBottom + ' ' + B.fmt(r2(k.base.a)) + u, colBottom, 'middle', 'top');
    lab(P[0] + 0.2, Q[1] / 2, nameRight + ' ' + B.fmt(r2(k.base.o)) + u, colRight, 'left', 'middle');
    lab(P[0] / 2 - 0.2 * k.base.o / k.h, Q[1] / 2 + 0.2 * k.base.a / k.h, 'hypotenuse ' + B.fmt(r2(k.h)) + u, orange, 'right', 'bottom');
    board.update();
  }

  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = { outs: [], rows: {} };
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.note = document.createElement('p'); ui.note.className = 'tcount'; ui.note.setAttribute('aria-live', 'polite'); panel.appendChild(ui.note);
    var label = { t: 'the angle', h: 'the size (hypotenuse)' };
    var what = function (n) { var v = spec.view; return n === 't' ? (v === 'bearing' ? 'the bearing' : 'the angle') : (v === 'elevation' ? 'the height' : v === 'bearing' ? 'the distance' : 'the triangle'); };
    NAMES.forEach(function (n) {
      var sl = spec.sl[n]; if (!sl) return;
      var row = document.createElement('div'); row.className = 'srow';
      var lab = document.createElement('label'); lab.className = 'vname'; lab.textContent = n; lab.htmlFor = 'sl-' + n;
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', 'Make ' + what(n) + ' smaller');
      var r = document.createElement('input'); r.type = 'range'; r.id = 'sl-' + n; r.min = sl.min; r.max = sl.max; r.step = sl.step; r.value = vars[n];
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', 'Make ' + what(n) + ' bigger');
      var out = document.createElement('output'); out.htmlFor = r.id;
      var set = function (v) { v = Math.max(sl.min, Math.min(sl.max, r2(sl.min + Math.round((v - sl.min) / sl.step) * sl.step))); vars[n] = v; r.value = v; B.moved = true; build(); report(); };
      r.addEventListener('input', function () { set(Number(r.value)); });
      minus.addEventListener('click', function () { set(vars[n] - sl.step); });
      plus.addEventListener('click', function () { set(vars[n] + sl.step); });
      row.append(lab, minus, r, plus, out); panel.appendChild(row); void label; ui.outs.push({ n: n, out: out });
    });
    spec.rows.forEach(function (name) {
      var p = document.createElement('p'); p.className = 'rulework'; p.id = 'ratio-' + name; panel.appendChild(p); ui.rows[name] = p;
    });
    var bar = document.createElement('div'); bar.className = 'gbar';
    if (spec.sw) {
      var sw = document.createElement('button'); sw.type = 'button'; sw.textContent = 'Look from the other angle';
      sw.addEventListener('click', function () { vars.w = vars.w ? 0 : 1; B.moved = true; build(); report(); });
      bar.appendChild(sw);
    }
    if (Object.keys(spec.sl).length || spec.sw) {
      var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
      bar.appendChild(again); panel.appendChild(bar);
    }
  }

  function report() {
    var k = calc(), f = function (v) { return B.fmt(r2(v)); };
    ui.outs.forEach(function (x) { x.out.textContent = x.n + ' = ' + B.fmt(vars[x.n]) + (x.n === 't' ? '°' : ''); });
    if (spec.view === 'bearing') return reportBearing(k);
    var line = {
      sin: 'sin ' + f(k.T) + '° = opposite ÷ hypotenuse = ' + f(k.o) + ' ÷ ' + f(k.h) + ' = ' + B.fmt(r3(k.s)),
      cos: 'cos ' + f(k.T) + '° = adjacent ÷ hypotenuse = ' + f(k.a) + ' ÷ ' + f(k.h) + ' = ' + B.fmt(r3(k.c)),
      tan: 'tan ' + f(k.T) + '° = opposite ÷ adjacent = ' + f(k.o) + ' ÷ ' + f(k.a) + ' = ' + B.fmt(r3(k.n)),
    };
    spec.rows.forEach(function (name) { ui.rows[name].textContent = line[name]; });
    ui.work.textContent = 'Marked angle ' + f(k.T) + '°: opposite ' + f(k.o) + ', adjacent ' + f(k.a) + ', hypotenuse ' + f(k.h) + (spec.u ? ' ' + spec.u : '');
    if (spec.view === 'elevation') ui.work.textContent = 'Angle ' + f(k.T) + '°: height ' + f(k.o) + ', distance ' + f(k.a) + ', line of sight ' + f(k.h) + (spec.u ? ' ' + spec.u : '');
    ui.note.textContent = spec.view === 'elevation' ? 'The angle of depression from the top and the angle of elevation from the bottom are the same size.' : spec.rows.length ? 'Change the size and the ratios stay put. Change the angle and they move.' : 'The sloping side is the hypotenuse. The other two are named from the marked angle.';
    B.say(ui.work.textContent + ". " + spec.rows.map(function (n) { return line[n]; }).join('. '));
    B.save({ vars: vars });
    var sv = { t: r2(k.T), h: spec.view === 'elevation' ? r2(k.ht) : r2(k.h), o: r2(k.o), a: r2(k.a), s: r3(k.s), c: r3(k.c), n: r3(k.n), w: k.w };
    if (spec.view === 'elevation') { sv.d = r2(k.a); sv.l = r2(k.h); }
    B.post({ scope: { vars: sv, points: {} } }, ui.work.textContent);
  }

  function reportBearing(k) {
    var f = function (v) { return B.fmt(z2(v)); }, u = spec.u ? ' ' + spec.u : '', b = bearingText(vars.t);
    var np = z2(k.N), ep = z2(k.E);
    var line = {
      north: 'north part = distance × cos(bearing) = ' + f(vars.h) + ' × cos ' + f(vars.t) + '° = ' + f(np) + u + (np < 0 ? ' (negative: that is south)' : ''),
      east: 'east part = distance × sin(bearing) = ' + f(vars.h) + ' × sin ' + f(vars.t) + '° = ' + f(ep) + u + (ep < 0 ? ' (negative: that is west)' : ''),
    };
    spec.rows.forEach(function (name) { ui.rows[name].textContent = line[name]; });
    ui.work.textContent = 'Bearing ' + b + '°, ' + f(vars.h) + u + ' away: ' + f(Math.abs(np)) + u + (np < 0 ? ' south' : ' north') + ' and ' + f(Math.abs(ep)) + u + (ep < 0 ? ' west' : ' east');
    ui.note.textContent = 'A bearing is measured clockwise from north, in three figures.';
    B.say(ui.work.textContent + '. ' + spec.rows.map(function (n) { return line[n]; }).join('. '));
    B.save({ vars: vars });
    B.post({ scope: { vars: { t: z2(vars.t), h: z2(vars.h), n: np, e: ep }, points: {} } }, ui.work.textContent);
  }

  B.widget('trig', {
    sections: ['board', 'gpanel'],
    label: function () { return 'A right-angled triangle with the sides named from one angle'; },
    parse: parse,
    resize: function () { if (spec) build(); },
    redraw: function () { if (spec) build(); },
    start: function (fresh) {
      spec = B.spec;
      var sv = fresh ? null : B.saved();
      vars = {}; NAMES.forEach(function (n) { vars[n] = spec.sl[n] ? (sv && sv.vars && sv.vars[n] !== undefined ? sv.vars[n] : spec.sl[n].start) : spec.fixed[n]; });
      vars.w = sv && sv.vars && sv.vars.w ? 1 : 0;
      paintPanel(); build(); report();
    },
  });
})(WPB);
