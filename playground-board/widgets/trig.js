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
    if (lo('t') < 5 || hi('t') > 85) throw new Error('t: an angle from 5 to 85 degrees.');
    if (lo('h') <= 0 || hi('h') > 20) throw new Error('h: more than 0, up to 20.');
    s.u = s.units ? String(s.units).trim() : '';
    s.rows = (s.show ? String(s.show).split(',').map(function (x) { return x.trim().toLowerCase(); }) : ['sin', 'cos', 'tan']).filter(function (x) { return ['sin', 'cos', 'tan'].indexOf(x) >= 0; });
    if (!s.rows.length && !/^none$/i.test(String(s.show || '').trim())) throw new Error('show: use sin, cos and/or tan, or none.');
    s.sw = /^(on|yes|true)$/i.test(String(s.switch || '').trim());
  }

  function calc() {
    var t = vars.t, h = vars.h, w = vars.w ? 1 : 0, rad = t * Math.PI / 180;
    var base = { o: h * Math.sin(rad), a: h * Math.cos(rad) };   // for the angle t at the left corner
    var T = w ? 90 - t : t, o = w ? base.a : base.o, a = w ? base.o : base.a;
    return { T: T, h: h, o: o, a: a, w: w, base: base, s: o / h, c: a / h, n: o / a };
  }

  function build() {
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
    NAMES.forEach(function (n) {
      var sl = spec.sl[n]; if (!sl) return;
      var row = document.createElement('div'); row.className = 'srow';
      var lab = document.createElement('label'); lab.className = 'vname'; lab.textContent = n; lab.htmlFor = 'sl-' + n;
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', n === 't' ? 'Make the angle smaller' : 'Make the triangle smaller');
      var r = document.createElement('input'); r.type = 'range'; r.id = 'sl-' + n; r.min = sl.min; r.max = sl.max; r.step = sl.step; r.value = vars[n];
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', n === 't' ? 'Make the angle bigger' : 'Make the triangle bigger');
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
    var line = {
      sin: 'sin ' + f(k.T) + '° = opposite ÷ hypotenuse = ' + f(k.o) + ' ÷ ' + f(k.h) + ' = ' + B.fmt(r3(k.s)),
      cos: 'cos ' + f(k.T) + '° = adjacent ÷ hypotenuse = ' + f(k.a) + ' ÷ ' + f(k.h) + ' = ' + B.fmt(r3(k.c)),
      tan: 'tan ' + f(k.T) + '° = opposite ÷ adjacent = ' + f(k.o) + ' ÷ ' + f(k.a) + ' = ' + B.fmt(r3(k.n)),
    };
    spec.rows.forEach(function (name) { ui.rows[name].textContent = line[name]; });
    ui.work.textContent = 'Marked angle ' + f(k.T) + '°: opposite ' + f(k.o) + ', adjacent ' + f(k.a) + ', hypotenuse ' + f(k.h) + (spec.u ? ' ' + spec.u : '');
    ui.note.textContent = spec.rows.length ? 'Change the size and the ratios stay put. Change the angle and they move.' : 'The sloping side is the hypotenuse. The other two are named from the marked angle.';
    B.say(ui.work.textContent + ". " + spec.rows.map(function (n) { return line[n]; }).join('. '));
    B.save({ vars: vars });
    B.post({ scope: { vars: { t: r2(k.T), h: r2(k.h), o: r2(k.o), a: r2(k.a), s: r3(k.s), c: r3(k.c), n: r3(k.n), w: k.w }, points: {} } }, ui.work.textContent);
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
