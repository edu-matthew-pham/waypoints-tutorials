// Science board: an embeddable page for science lessons. Like the maths board, it takes its setup from ?code=
// (a lesson's region, one "key: value" per line) and reports to the lesson page with postMessage, so checks can tick.
//
//   widget: zoom        samples: ice, water, steam     look at each sample through a particle "zoom lens"
//   widget: identify    need: 6                        name the state of random samples
//   widget: build                                      choose spacing and motion to build each state
//   widget: syringe                                    push a plunger on a solid, liquid and gas; count particles in a window
//   widget: diffusion                                  two colours mix in a gas and in a liquid, timed
//   widget: jar                                        remove the jar from a solid, liquid and gas
//   widget: heat                                       water from -20 °C to 120 °C
//   widget: dissolve                                   add salt to water
//   widget: bench                                      separate water, salt, sand and iron with four tools
//   widget: filter / evaporate / distil / chroma       the separation techniques, one at a time
//   widget: box         preset: mystery                a particle model to look at (no task)
//   widget: windows     set: floatsink | six | ice | abc    static particle diagrams of equal volumes
//   widget: quiz        need: 6, options: Label=value; ..., item: text | value | why (repeat item:)
//
// Message to the lesson page after every change: { wp: 'run', id, kind: 'science', status: 'done', moved, output, state: { done } }.
// `moved` stays false until the student does something; `done` is true once the widget's task is finished.
(function () {
  'use strict';
  var S = window.SCI, T = S.T;
  var q = new URLSearchParams(location.search);
  var ID = q.get('id') || 'free';
  var moved = false, done = false;
  var el = function (id) { return document.getElementById(id); };

  function post(output) { if (parent !== window) parent.postMessage({ wp: 'run', id: ID, kind: 'science', status: 'done', moved: moved, code: '', output: output || '', state: { done: done } }, location.origin); }
  function touch(output) { moved = true; post(output); }
  function finish(output) { moved = true; done = true; post(output); }
  function say(text, ok) { var s = el('status'); s.className = ok ? 'ok' : ''; s.textContent = text; }

  // ---------- small UI helpers ----------
  function area(id) { var a = el(id); a.hidden = false; return a; }
  function button(where, label, on, cls) { var b = document.createElement('button'); b.type = 'button'; b.textContent = label; if (cls) b.className = cls; b.addEventListener('click', on); area(where).appendChild(b); return b; }
  // A group of buttons, one pressed at a time. items: [[value, label]].
  function group(where, items, cur, on) {
    var bs = items.map(function (it) {
      return button(where, it[1], function () { set(it[0]); on(it[0]); });
    });
    function set(v) { bs.forEach(function (b, i) { b.setAttribute('aria-pressed', String(items[i][0] === v)); }); }
    if (cur !== null) set(cur);
    return { set: set, buttons: bs };
  }
  function slider(where, label, min, max, step, val, on, show) {
    var l = document.createElement('label'), span = document.createElement('span'), r = document.createElement('input'), o = document.createElement('output');
    span.textContent = label; r.type = 'range'; r.min = min; r.max = max; r.step = step; r.value = val;
    o.textContent = show ? show(val) : val;
    r.addEventListener('input', function () { var v = Number(r.value); o.textContent = show ? show(v) : v; on(v); });
    l.append(span, r, o); area(where).appendChild(l);
    return r;
  }
  function table(head, rows) { area('extra').innerHTML = '<table><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td' + (i ? ' data-c="' + i + '"' : '') + '>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>'; }

  // ---------- samples (zoom, identify) ----------
  var B = { x0: 0, x1: 22, y0: 0, y1: 12 };
  var SAMPLES = {
    ice: ['Ice', 'Ice: particles close together in a fixed pattern, vibrating in place.', function (b) { b.mode = 'solid'; b.amp = 0.22; return b.lattice(11, 6, 'p1'); }],
    water: ['Liquid water', 'Liquid water: particles close together, no pattern, sliding past each other.', function (b) { b.mode = 'liquid'; b.jit = 0.45; b.g = 0.03; return b.scatter(56, 'p1', { x0: 0, x1: 22, y0: 0, y1: 9 }); }],
    steam: ['Steam', 'Steam: particles far apart, moving fast in every direction.', function (b) { b.mode = 'gas'; b.speed = 0.32; return b.scatter(12, 'p1'); }],
    distilled: ['Distilled water', 'One kind of particle: water.', function (b) { b.mode = 'liquid'; b.jit = 0.4; b.g = 0.03; return b.scatter(48, 'p1', { x0: 0, x1: 22, y0: 0, y1: 8 }); }],
    salt: ['Salt water', 'Two kinds: water particles, and smaller salt particles spread evenly between them.', function (b) { b.mode = 'liquid'; b.jit = 0.4; b.g = 0.03; return b.scatter(38, 'p1', { x0: 0, x1: 22, y0: 0, y1: 8 }).concat(b.scatter(10, 'p2', { x0: 0, x1: 22, y0: 0, y1: 7 }).map(function (p) { p.rr = 0.42; return p; })); }],
    sand: ['Sandy water', 'Two kinds: water particles, and big sand grains sitting in clumps at the bottom.', function (b) {
      b.mode = 'liquid'; b.jit = 0.4; b.g = 0.03;
      var sand = [[3, 0.95], [4.9, 0.95], [3.95, 2.6], [15.5, 0.95], [17.4, 0.95]].map(function (s) { return { x: s[0], y: s[1], sx: s[0], sy: s[1], vx: 0, vy: 0, c: 'p4', rr: 0.95, lock: true }; });
      return sand.concat(b.scatter(36, 'p1', { x0: 0, x1: 22, y0: 0, y1: 8 })); }],
    air: ['Air', 'Mostly two kinds: nitrogen (about 4 in 5) and oxygen (about 1 in 5).', function (b) { b.mode = 'gas'; b.speed = 0.3; return b.scatter(11, 'p1').concat(b.scatter(3, 'p2')); }],
    copper: ['Copper wire', 'One kind of particle: copper, in a fixed pattern.', function (b) { b.mode = 'solid'; b.amp = 0.18; return b.lattice(11, 6, 'p3'); }],
  };
  function fill(pb, key) { var b = pb.box; b.g = 0; b.r = 0.6; var ps = SAMPLES[key][2](b); b.ps = ps; if (b.mode === 'liquid') b.relax(70); pb.dr.rebuild(); pb.dr.paint(); }

  var W = {};
  W.zoom = function (spec) {
    var keys = String(spec.samples || 'ice, water, steam').split(',').map(function (s) { return s.trim(); }).filter(function (k) { return SAMPLES[k]; });
    var seen = {}, pb = S.particleBoard(B, 0.6);
    var g = group('top', keys.map(function (k) { return [k, SAMPLES[k][0]]; }), keys[0], show);
    function show(k) {
      fill(pb, k); seen[k] = true;
      var left = keys.filter(function (x) { return !seen[x]; });
      say(SAMPLES[k][1] + (left.length ? '' : ' You have looked at all of them.'), !left.length);
      if (!left.length && !done) finish('Looked at all the samples.'); else if (moved) post('Looking at ' + SAMPLES[k][0] + '.');
    }
    fill(pb, keys[0]); seen[keys[0]] = true; say(SAMPLES[keys[0]][1]);
    g.buttons.forEach(function (b) { b.addEventListener('click', function () { moved = true; }); });
  };

  W.identify = function (spec) {
    var need = Number(spec.need) || 6, count = 0, cur = null, pb = S.particleBoard(B, 0.75);
    var streak = document.createElement('span'); streak.className = 'streak'; streak.setAttribute('aria-label', 'Correct answers');
    streak.innerHTML = new Array(need + 1).join('<span></span>');
    var CLUE = { solid: 'Close together, in a fixed pattern, vibrating in place: a solid.', liquid: 'Close together, no pattern, sliding past each other and settling at the bottom: a liquid.', gas: 'Far apart and moving fast in every direction: a gas.' };
    var answers = [['solid', 'Solid'], ['liquid', 'Liquid'], ['gas', 'Gas']].map(function (a) { return button('controls', a[1], function () { pick(a[0]); }); });
    area('controls').appendChild(streak);
    function next() {
      var st = ['solid', 'liquid', 'gas'], s; do { s = st[Math.floor(Math.random() * 3)]; } while (s === cur && Math.random() < 0.6);
      cur = s; var c = ['p1', 'p2', 'p3'][Math.floor(Math.random() * 3)], b = pb.box, r = 0.6 + Math.random() * 0.35; b.g = 0; b.r = r;
      if (s === 'solid') { b.mode = 'solid'; b.amp = 0.2; var cols = 4 + Math.floor(Math.random() * 4), rows = 3 + Math.floor(Math.random() * 2), sp = 2 * r + 0.15; b.ps = b.lattice(cols, rows, c, { s: sp, x0: 11 - (cols - 1) * sp / 2, y0: r + 0.1 }); }
      else if (s === 'liquid') { b.mode = 'liquid'; b.jit = 0.45; b.g = 0.03; b.ps = b.scatter(20 + Math.floor(Math.random() * 16), c, { x0: 0, x1: 22, y0: 0, y1: 7 }); b.relax(60); }
      else { b.mode = 'gas'; b.speed = 0.3; b.ps = b.scatter(7 + Math.floor(Math.random() * 6), c); }
      pb.dr.rebuild(); pb.dr.paint();
      answers.forEach(function (x) { x.disabled = false; });
      if (count < need) say('Solid, liquid or gas?');
    }
    function pick(a) {
      if (count >= need) return;
      answers.forEach(function (x) { x.disabled = true; });
      if (a === cur) { count++; streak.children[count - 1].classList.add('on'); say('Correct. ' + CLUE[cur], true); }
      else say('Not this time. ' + CLUE[cur]);
      if (count >= need) { say(need + ' correct. ' + CLUE[cur], true); finish(need + ' correct.'); return; }
      touch(count + ' correct so far.');
      setTimeout(next, 1600);
    }
    next();
  };

  W.build = function () {
    var space = 'close', move = 'vibrate', built = {}, pb = S.particleBoard(B, 0.75);
    var MSG = { 'close-vibrate': ['solid', 'That is a solid: close together, vibrating in place.'], 'close-slide': ['liquid', 'That is a liquid: close together, sliding past each other.'],
      'far-fast': ['gas', 'That is a gas: far apart, moving fast.'],
      'close-fast': [null, 'Particles this close can\'t move fast in every direction. They would keep crashing into each other. Spread them out.'],
      'far-vibrate': [null, 'Particles far apart don\'t stay fixed in place. With nothing holding them, they move fast: that would be a gas.'],
      'far-slide': [null, 'Particles far apart aren\'t in contact, so they can\'t slide past each other. Particles this spread out move fast: a gas.'] };
    group('top', [['close', 'Close together'], ['far', 'Far apart']], space, function (v) { space = v; render(true); });
    group('controls', [['vibrate', 'Vibrate in place'], ['slide', 'Slide past each other'], ['fast', 'Move fast everywhere']], move, function (v) { move = v; render(true); });
    function render(byStudent) {
      var b = pb.box; b.g = 0;
      if (move === 'vibrate') { b.mode = 'solid'; b.amp = 0.2; b.ps = space === 'close' ? b.lattice(11, 6, 'p2') : b.lattice(4, 3, 'p2'); }
      else if (move === 'slide') { b.mode = 'liquid'; b.jit = space === 'close' ? 0.45 : 0.3; if (space === 'close') { b.g = 0.03; b.ps = b.scatter(48, 'p2', { x0: 0, x1: 22, y0: 0, y1: 8 }); b.relax(60); } else b.ps = b.scatter(12, 'p2'); }
      else if (space === 'close') { b.mode = 'liquid'; b.jit = 1.6; b.ps = b.scatter(56, 'p2'); b.relax(30); }
      else { b.mode = 'gas'; b.speed = 0.32; b.ps = b.scatter(12, 'p2'); }
      pb.dr.rebuild(); pb.dr.paint();
      var m = MSG[space + '-' + move]; if (byStudent && m[0]) built[m[0]] = true;
      var got = ['solid', 'liquid', 'gas'].filter(function (k) { return built[k]; });
      area('extra').textContent = 'Built so far: ' + (got.length ? got.join(', ') : 'none') + '.';
      say(m[1], !!m[0]);
      if (!byStudent) return;
      if (got.length === 3 && !done) finish('Built a solid, a liquid and a gas.'); else touch('Built: ' + got.join(', '));
    }
    render(false);
  };

  W.syringe = function () {
    var W0 = 20, H = 12, WIN = { x0: 7, x1: 13, y0: 3, y1: 9 }, MINW = { solid: 19.9, liquid: 18.5, gas: 3 }, NAME = { solid: 'wax', liquid: 'water', gas: 'air' };
    var state = 'liquid', target = W0, avg = 0, frame = 0, pushed = {}, counts = {};
    var pb = S.particleBoard({ x0: 0, x1: W0, y0: 0, y1: H }, 0.9, { noFrame: true, pad: 1.5, top: 0.8, bottom: 0.6 }), box = pb.box, bd = pb.board;
    S.curve([23, -0.15, -0.15, 23], [-0.15, -0.15, H + 0.15, H + 0.15], { w: 3 });
    S.curve([-0.15, -1, -1, -0.15], [H / 2 - 0.8, H / 2 - 0.8, H / 2 + 0.8, H / 2 + 0.8], { w: 3 });
    var P = function (fx, fy) { return bd.create('point', [fx, fy], { visible: false }); };
    var plunger = bd.create('segment', [P(function () { return box.b.x1 + 0.25; }, -0.1), P(function () { return box.b.x1 + 0.25; }, H + 0.1)], { strokeWidth: 7, highlight: false, fixed: true });
    var rod = bd.create('segment', [P(function () { return box.b.x1 + 0.25; }, H / 2), P(function () { return box.b.x1 + 3.5; }, H / 2)], { strokeWidth: 5, highlight: false, fixed: true });
    var win = bd.create('polygon', [[WIN.x0, WIN.y0], [WIN.x1, WIN.y0], [WIN.x1, WIN.y1], [WIN.x0, WIN.y1]], { fillOpacity: 0, vertices: { visible: false }, borders: { dash: 2, strokeWidth: 1.5, highlight: false }, highlight: false, fixed: true });
    var wt = S.text(WIN.x0, WIN.y1 + 0.9, function () { return 'Window: ' + Math.round(avg) + ' particles'; }, { anchorX: 'left', size: 12 });
    S.onPaint(function () { plunger.setAttribute({ strokeColor: T.ink }); rod.setAttribute({ strokeColor: T.ink }); win.borders.forEach(function (b) { b.setAttribute({ strokeColor: T.muted }); }); });
    S.loop(function () { frame++; var c = box.ps.filter(function (p) { return p.x > WIN.x0 && p.x < WIN.x1 && p.y > WIN.y0 && p.y < WIN.y1; }).length; avg = frame < 5 ? c : avg * 0.95 + c * 0.05; });
    var g = group('top', [['solid', 'Wax'], ['liquid', 'Water'], ['gas', 'Air']], state, function (v) { moved = true; setState(v); });
    var push = slider('controls', 'Push the plunger', 0, 100, 1, 0, function (v) { moved = true; target = W0 - v * 0.17; readout(); }, function (v) { return Math.round(v) + '%'; });
    var rec = button('controls', 'Record window count', function () { counts[state] = Math.round(avg); moved = true; readout(); check(); });
    function rows() { table(['Substance', 'Particles in the window', 'Pushed fully?'], ['solid', 'liquid', 'gas'].map(function (k) { return [NAME[k][0].toUpperCase() + NAME[k].slice(1), counts[k] === undefined ? '–' : counts[k], pushed[k] ? pushed[k] : '–']; })); }
    function setState(s) {
      state = s; box.mode = s; box.b.x1 = W0; target = W0; push.value = 0; push.nextSibling.textContent = '0%'; avg = 0; frame = 0;
      if (s === 'solid') box.ps = box.lattice(9, 5, 'p1');
      else if (s === 'liquid') { box.jit = 0.5; box.ps = box.scatter(48, 'p1'); box.relax(80); }
      else { box.speed = 0.3; box.ps = box.scatter(8, 'p1'); }
      pb.dr.rebuild(); pb.dr.paint(); readout(); g.set(s);
    }
    function readout() {
      var p = Number(push.value), blocked = target < MINW[state] - 0.05;
      box.b.x1 = Math.max(target, MINW[state]);
      var pct = Math.round(box.b.x1 / W0 * 100);
      win.setAttribute({ visible: p === 0 }); wt.setAttribute({ visible: p === 0 }); rec.disabled = p !== 0;
      say(p === 0 ? 'Plunger out. Count the particles in the window, or push the plunger. Space inside: 100%.'
        : blocked ? 'The plunger won\'t go any further. The ' + NAME[state] + ' particles have no space left to move into. Space inside: ' + pct + '%.'
        : state === 'gas' ? 'The air squashes. Its particles are moving closer together. Space inside: ' + pct + '%.' : 'Pushing… Space inside: ' + pct + '%.');
      if (p >= 95 && !pushed[state]) { pushed[state] = 'yes, ' + pct + '% space left'; check(); }
      rows();
    }
    function check() {
      var all = ['solid', 'liquid', 'gas'];
      var pAll = all.every(function (k) { return pushed[k]; }), cAll = all.every(function (k) { return counts[k] !== undefined; });
      var out = 'Plunger: ' + all.map(function (k) { return NAME[k] + ' ' + (pushed[k] ? pushed[k].replace('yes, ', '') : 'not tried'); }).join('; ') + '. Window counts: ' + all.map(function (k) { return NAME[k] + ' ' + (counts[k] === undefined ? '?' : counts[k]); }).join(', ') + '.';
      if (pAll && cAll && !done) finish(out); else post(out);
    }
    setState('liquid');
  };

  W.diffusion = function () {
    var Wd = 22, Hd = 12, state = 'gas', running = false, t0 = 0, mixed = 0, times = {};
    var pb = S.particleBoard({ x0: 0, x1: Wd, y0: 0, y1: Hd }, 0.8, { top: 0.8 }), box = pb.box, bd = pb.board;
    var barrier = bd.create('segment', [[Wd / 2, -0.1], [Wd / 2, Hd + 0.1]], { strokeWidth: 4, highlight: false, fixed: true });
    S.onPaint(function () { barrier.setAttribute({ strokeColor: T.ink }); });
    S.text(0, Hd + 1, function () { return 'Mixed: ' + Math.round(mixed) + '%'; }, { anchorX: 'left' });
    var g = group('top', [['gas', 'Gas'], ['liquid', 'Liquid']], state, function (v) { reset(v); });
    var go = button('top', 'Lift the barrier', function () {
      if (running) return; running = true; moved = true; box.wall = null; barrier.setAttribute({ visible: false }); t0 = performance.now(); go.disabled = true; say('Mixing…');
    }, 'go');
    function rows() { table(['Substance', 'Time to mostly mix'], [['Gas', times.gas ? times.gas.toFixed(1) + ' s' : '–'], ['Liquid', times.liquid ? times.liquid.toFixed(1) + ' s' : '–']]); }
    function reset(s) {
      state = s; running = false; mixed = 0; box.mode = s; box.wall = Wd / 2; barrier.setAttribute({ visible: true }); go.disabled = false;
      var n = s === 'gas' ? 12 : 30; if (s === 'gas') box.speed = 0.35; else box.jit = 0.55;
      box.ps = box.scatter(n, 'p2', { x0: 0, x1: Wd / 2, y0: 0, y1: Hd }).map(function (p) { p.side = 'L'; return p; }).concat(box.scatter(n, 'p1', { x0: Wd / 2, x1: Wd, y0: 0, y1: Hd }).map(function (p) { p.side = 'R'; return p; }));
      if (s === 'liquid') box.relax(60);
      pb.dr.rebuild(); pb.dr.paint(); g.set(s); say('Lift the barrier to start.'); rows();
    }
    S.loop(function () {
      var reds = box.ps.filter(function (p) { return p.c === 'p2'; }), right = reds.filter(function (p) { return p.x > Wd / 2; }).length;
      mixed = mixed * 0.9 + Math.min(100, right / (reds.length * 0.5) * 100) * 0.1;
      if (running && mixed >= 80 && !times[state]) {
        times[state] = (performance.now() - t0) / 1000; rows();
        say('Mostly mixed in ' + times[state].toFixed(1) + ' s. ' + (times.gas && times.liquid ? '' : 'Now try the other state.'), !!(times.gas && times.liquid));
        var out = 'Gas mixed in ' + (times.gas ? times.gas.toFixed(1) + ' s' : '?') + '; liquid in ' + (times.liquid ? times.liquid.toFixed(1) + ' s' : '?') + '.';
        if (times.gas && times.liquid && !done) finish(out); else post(out);
      }
    });
    reset('gas');
  };

  W.box = function (spec) {
    var pb = S.particleBoard({ x0: 0, x1: 20, y0: 0, y1: 10 }, 0.8, { dash: 2, frameMuted: true }), b = pb.box;
    b.mode = 'liquid'; b.jit = Number(spec.jit) || 0.12; b.ps = b.scatter(Number(spec.n) || 44, spec.colour || 'p3'); b.relax(80); pb.dr.rebuild(); pb.dr.paint();
    say(spec.caption || '');
  };

  // Static diagrams: windows of equal volume, side by side.
  var SETS = {
    floatsink: function () {
      S.newBoard([0, 9.4, 24, -1.4]);
      var rnd = S.seeded(7), water = S.spread(rnd, 8, 1.8, 1.8, 4.4, 4.4, 1.3);
      var iron = []; for (var i = 0; i < 4; i++) for (var j = 0; j < 3; j++) iron.push([17.9 + i * 1.4, 1.9 + j * 1.9]);
      S.windows([{ x: 1, y: 1, w: 6, h: 6, label: 'Water', note: '8 particles', c: 'p1', r: 0.55, pts: water },
        { x: 9, y: 1, w: 6, h: 6, label: 'Foam', note: '3 particles', c: 'p4', r: 0.55, pts: [[10.4, 2.2], [13.3, 3.6], [11.4, 5.6]] },
        { x: 17, y: 1, w: 6, h: 6, label: 'Iron', note: '12 heavier particles', c: 'p3', r: 0.62, pts: iron }]);
    },
    six: function () {
      S.newBoard([0, 18, 24, 0]);
      var names = [['Water', 'liquid'], ['Air', 'gas'], ['Iron', 'solid'], ['Cooking oil', 'liquid'], ['Carbon dioxide', 'gas'], ['Aluminium', 'solid']];
      S.windows(names.map(function (n, k) {
        var x = 1 + (k % 3) * 8, y = k < 3 ? 10 : 1.6, pts = [];
        if (n[1] === 'solid') { for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) pts.push([x + 0.75 + i * 1.5, y + 0.75 + j * 1.5]); }
        else if (n[1] === 'liquid') pts = S.spread(S.seeded(11 + k * 7), 11, x + 0.7, y + 0.7, 4.6, 4.6, 1.35);
        else pts = [[x + 1.4, y + 4.2], [x + 4.4, y + 1.6]];
        return { x: x, y: y, w: 6, h: 6, label: n[0], c: 'p1', r: 0.58, pts: pts };
      }));
    },
    ice: function () {
      S.newBoard([0, 10, 24, -1.2]);
      var ice = []; for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; ice.push([5 + 2.5 * Math.cos(a), 4 + 2.5 * Math.sin(a)]); }
      ice.push([1.9, 0.9], [8.1, 0.9], [5, 7.3]);
      var water = []; for (var i = 0; i < 4; i++) for (var j = 0; j < 3; j++) water.push([14.9 + i * 1.9 + (j % 2) * 0.5, 1.2 + j * 2.6 + (i % 2) * 0.25]);
      S.windows([{ x: 1, y: 0, w: 8, h: 8, label: 'Ice', note: '', c: 'p1', r: 0.55, pts: ice }, { x: 14, y: 0, w: 8, h: 8, label: 'Liquid water', c: 'p1', r: 0.55, pts: water }]);
    },
    abc: function () {
      S.newBoard([0, 9.4, 24, -0.6]);
      var A = [[2.3, 1.2, 'p4', 0.62], [3.6, 1.2, 'p4', 0.62], [2.95, 2.4, 'p4', 0.62]].concat(S.spread(S.seeded(3), 13, 1.6, 0.6, 5.8, 5.8, 1.15, [[2.3, 1.2], [3.6, 1.2], [2.95, 2.4]]).map(function (p) { return [p[0], p[1], 'p1', 0.42]; }));
      var Bp = S.spread(S.seeded(5), 15, 9.6, 0.6, 5.8, 5.8, 1.15).map(function (p) { return [p[0], p[1], 'p1', 0.42]; });
      var cs = S.spread(S.seeded(9), 5, 17.6, 0.6, 5.8, 5.8, 1.2), Cp = cs.map(function (p) { return [p[0], p[1], 'p2', 0.3]; }).concat(S.spread(S.seeded(13), 12, 17.6, 0.6, 5.8, 5.8, 1.15, cs).map(function (p) { return [p[0], p[1], 'p1', 0.42]; }));
      S.windows([{ x: 1, y: 0, w: 7, h: 7, label: 'A', c: 'p1', r: 0.42, pts: A }, { x: 9, y: 0, w: 7, h: 7, label: 'B', c: 'p1', r: 0.42, pts: Bp }, { x: 17, y: 0, w: 7, h: 7, label: 'C', c: 'p1', r: 0.42, pts: Cp }]);
    },
  };
  W.windows = function (spec) { (SETS[spec.set] || SETS.floatsink)(); say(spec.caption || ''); };

  W.jar = function () {
    var ROOM = { x0: 0, x1: 22, y0: 0, y1: 12 }, JAR = { x0: 8, x1: 14, y0: 0, y1: 7 }, state = 'gas', open = false, released = {};
    var pb = S.particleBoard(ROOM, 0.6, { frameMuted: true, dash: 2 }), box = pb.box;
    var jw = S.curve([JAR.x0, JAR.x0, JAR.x1, JAR.x1, JAR.x0], [JAR.y1, JAR.y0, JAR.y0, JAR.y1, JAR.y1], { w: 3 });
    var AFTER = { solid: 'The solid keeps its shape. Its particles stay in their fixed positions.', liquid: 'The liquid flows and spreads across the floor. Its particles slide past each other but stay close.',
      gas: 'The gas spreads through the whole box, up, down and sideways. Its particles move fast in every direction.' };
    var g = group('top', [['solid', 'Solid'], ['liquid', 'Liquid'], ['gas', 'Gas']], state, function (v) { fillJar(v); });
    var rel = button('top', 'Remove the jar', function () {
      if (open) return; open = true; moved = true; box.b = Object.assign({}, ROOM); jw.setAttribute({ visible: false }); rel.disabled = true; released[state] = true;
      say(AFTER[state], true);
      var got = ['solid', 'liquid', 'gas'].filter(function (k) { return released[k]; });
      if (got.length === 3 && !done) finish('Solid: keeps its shape. Liquid: spreads across the floor. Gas: fills the whole box.'); else touch(AFTER[state]);
    }, 'go');
    function fillJar(s) {
      state = s; open = false; box.b = Object.assign({}, JAR); box.g = 0; jw.setAttribute({ visible: true }); rel.disabled = false;
      if (s === 'solid') { box.mode = 'solid'; box.amp = 0.18; box.ps = box.lattice(4, 4, 'p1', { s: 1.3, x0: JAR.x0 + 1.05, y0: 0.7 }); }
      else if (s === 'liquid') { box.mode = 'liquid'; box.jit = 0.4; box.g = 0.03; box.ps = box.scatter(20, 'p1', { x0: JAR.x0, x1: JAR.x1, y0: 0, y1: 5 }); box.relax(60); }
      else { box.mode = 'gas'; box.speed = 0.25; box.ps = box.scatter(14, 'p1'); }
      pb.dr.rebuild(); pb.dr.paint(); g.set(s); say('The ' + s + ' is in the jar. The box around it is empty: no air.');
    }
    fillJar('gas');
  };

  W.heat = function () {
    var pb = S.particleBoard({ x0: 0, x1: 22, y0: 0, y1: 12 }, 0.7), box = pb.box, phase = null, visited = {};
    function setT(t, byStudent) {
      var ph = t < 0 ? 'solid' : t < 100 ? 'liquid' : 'gas';
      if (ph !== phase) {
        phase = ph; box.g = 0;
        if (ph === 'solid') { box.mode = 'solid'; box.ps = box.lattice(8, 4, 'p1', { s: 1.5, x0: 5.75, y0: 0.8 }); }
        else if (ph === 'liquid') { box.mode = 'liquid'; box.g = 0.03; box.ps = box.scatter(32, 'p1', { x0: 0, x1: 22, y0: 0, y1: 4 }); box.relax(60); }
        else { box.mode = 'gas'; box.ps = box.scatter(32, 'p1'); }
        pb.dr.rebuild(); pb.dr.paint();
      }
      if (ph === 'solid') { box.amp = 0.08 + (t + 20) / 20 * 0.3; say('Ice. Particles vibrate in fixed positions, more strongly as it warms.'); }
      else if (ph === 'liquid') { box.jit = 0.2 + t / 100 * 0.6; say('Liquid water. Particles slide past each other, faster as it warms.'); }
      else { box.setSpeed(0.25 + (t - 100) / 20 * 0.2); say('Steam. Particles have enough energy to escape each other and move far apart.'); }
      if (!byStudent) return;
      visited[ph] = true;
      if (visited.solid && visited.liquid && visited.gas && !done) finish('Heated water from ice to steam.'); else touch('Water at ' + t + ' °C.');
    }
    slider('controls', 'Temperature', -20, 120, 1, -20, function (v) { setT(v, true); }, function (v) { return (v < 0 ? '−' + (-v) : v) + ' °C'; });
    visited.solid = true; setT(-20, false);
  };

  W.dissolve = function () {
    var pb = S.particleBoard(B, 0.6), box = pb.box; box.mode = 'liquid'; box.jit = 0.4; box.g = 0.03;
    var water = box.scatter(44, 'p1', { x0: 0, x1: 22, y0: 0, y1: 8 });
    function set(n, byStudent) {
      box.ps = water.concat(Array.from({ length: n }, function () { return { x: Math.random() * 22, y: 11, vx: 0, vy: 0, c: 'p2', rr: 0.42 }; }));
      box.relax(20); pb.dr.rebuild(); pb.dr.paint();
      say(n === 0 ? 'Pure water: one kind of particle.' : n + ' salt particles. They spread out between the water particles. The solution is still clear and the same all through.', n > 0);
      if (byStudent) { if (n > 0 && !done) finish('Salt dissolved: its particles spread evenly between the water particles.'); else touch(); }
    }
    slider('controls', 'Salt added', 0, 16, 1, 0, function (v) { set(v, true); });
    set(0, false);
  };

  W.bench = function () {
    var NAME = { water: 'water', salt: 'salt', sand: 'sand', iron: 'iron' }, beaker, bins;
    var pb = S.particleBoard(B, 0.6);
    function addBin(label, items) { var b = bins.filter(function (x) { return x.label === label; })[0]; if (b) items.forEach(function (i) { b.items[i] = 1; }); else { var o = {}; items.forEach(function (i) { o[i] = 1; }); bins.push({ label: label, items: o }); } }
    function keys(o) { return Object.keys(o); }
    function paint() {
      var box = pb.box; box.g = 0.03; box.mode = 'liquid'; box.jit = 0.4; var ps = [];
      if (beaker.sand) [[3, 0.95], [4.9, 0.95], [6.8, 0.95], [3.95, 2.6]].forEach(function (s) { ps.push({ x: s[0], y: s[1], sx: s[0], sy: s[1], vx: 0, vy: 0, c: 'p4', rr: 0.95, lock: true }); });
      if (beaker.iron) [[13, 0.55], [14.1, 0.55], [15.2, 0.55], [16.3, 0.55], [13.55, 1.5], [14.65, 1.5]].forEach(function (s) { ps.push({ x: s[0], y: s[1], sx: s[0], sy: s[1], vx: 0, vy: 0, c: 'p3', rr: 0.5, lock: true }); });
      if (beaker.water) { ps = ps.concat(box.scatter(34, 'p1', { x0: 0, x1: 22, y0: 3, y1: 8 })); if (beaker.salt) ps = ps.concat(box.scatter(9, 'p2', { x0: 0, x1: 22, y0: 3, y1: 7 }).map(function (p) { p.rr = 0.42; return p; })); }
      else if (beaker.salt) for (var i = 0; i < 9; i++) { var x = 9 + (i % 5) * 0.86, y = 0.45 + Math.floor(i / 5) * 0.86; ps.push({ x: x, y: y, sx: x, sy: y, vx: 0, vy: 0, c: 'p2', rr: 0.42, lock: true }); }
      box.ps = ps; box.relax(50); pb.dr.rebuild(); pb.dr.paint();
      area('extra').innerHTML = '<div class="bins"><div class="bin"><b>Beaker</b>' + (keys(beaker).length ? keys(beaker).map(function (k) { return NAME[k]; }).join(', ') : 'empty') + '</div>' +
        bins.map(function (b) { return '<div class="bin' + (keys(b.items).length === 1 ? ' one' : '') + '"><b>' + b.label + '</b>' + keys(b.items).map(function (k) { return NAME[k]; }).join(', ') + '</div>'; }).join('') + '</div>';
    }
    function reset() { beaker = { water: 1, salt: 1, sand: 1, iron: 1 }; bins = []; paint(); say('Blue: water. Orange: dissolved salt. Grey: sand. Dark: iron filings. Pick a tool.'); }
    var TOOLS = [['magnet', 'Magnet'], ['sieve', 'Kitchen sieve'], ['filter', 'Filter paper'], ['evap', 'Evaporate']];
    TOOLS.forEach(function (t) { button('controls', t[1], function () { use(t[0]); }); });
    button('controls', 'Start again', function () { moved = true; reset(); });
    function use(t) {
      var msg = '', got;
      if (t === 'magnet') {
        got = !!beaker.iron; delete beaker.iron; bins.forEach(function (x) { if (x.items.iron) { delete x.items.iron; got = true; } }); bins = bins.filter(function (x) { return keys(x.items).length; });
        msg = got ? (addBin('On the magnet', ['iron']), 'The iron filings jump to the magnet. Iron is magnetic; nothing else here is.') : 'Nothing is attracted. There is no iron left to pull out.';
      } else if (t === 'sieve') msg = 'Everything pours straight through. Sand grains and iron filings are smaller than a kitchen sieve\'s holes, and dissolved salt is far smaller again.';
      else if (t === 'filter') {
        var solids = ['sand', 'iron'].filter(function (k) { return beaker[k]; });
        if (!beaker.water) msg = 'There is no liquid to pour through the filter.';
        else if (!solids.length) msg = 'Everything passes through. Dissolved salt particles are small enough to get through the holes.';
        else { solids.forEach(function (k) { delete beaker[k]; }); addBin('In the filter paper', solids);
          msg = solids.length > 1 ? 'The sand and the iron are both caught in the filter paper, together: both are too big for the holes. Can another tool split them?' : 'The sand stays in the filter paper. The water and dissolved salt pass through.'; }
      } else if (t === 'evap') {
        if (!beaker.water) msg = 'There is no water left to evaporate.';
        else { delete beaker.water; var left = keys(beaker); beaker = {}; if (left.length) addBin('Left after evaporating', left);
          msg = 'The water boils away. ' + (left.length ? 'Left behind: ' + left.map(function (k) { return NAME[k]; }).join(', ') + '.' + (left.length > 1 ? ' Those are still mixed.' : '') : 'Nothing is left behind.'); }
      }
      paint();
      var solo = ['iron', 'sand', 'salt'].every(function (k) { return bins.some(function (b) { return keys(b.items).length === 1 && b.items[k]; }); });
      say(solo ? 'Done: iron, sand and salt are each on their own.' : msg, solo);
      if (solo && !done) finish('Separated: iron with the magnet, sand with the filter paper, salt by evaporating the water.'); else touch(msg);
    }
    reset();
  };

  W.filter = function () {
    var PAPER = 6, pb = S.particleBoard(B, 0.55, { frameMuted: true }), box = pb.box, bd = pb.board, poured = false;
    var paper = bd.create('segment', [[0, PAPER], [22, PAPER]], { dash: 2, strokeWidth: 2.5, highlight: false, fixed: true });
    S.onPaint(function () { paper.setAttribute({ strokeColor: T.muted }); });
    box.mode = 'liquid'; box.jit = 0.35; box.g = 0;
    box.ps = [].concat(
      box.scatter(5, 'p4', { x0: 2, x1: 20, y0: 9, y1: 12 }).map(function (p) { p.rr = 0.95; p.floor = PAPER; return p; }),
      box.scatter(28, 'p1', { x0: 0, x1: 22, y0: PAPER + 0.4, y1: 12 }).map(function (p) { p.floor = PAPER; return p; }),
      box.scatter(7, 'p2', { x0: 0, x1: 22, y0: PAPER + 0.4, y1: 12 }).map(function (p) { p.rr = 0.4; p.floor = PAPER; return p; }));
    box.relax(40); pb.dr.rebuild(); pb.dr.paint();
    say('The dashed line is the filter paper. Its holes are smaller than a sand grain. Blue: water. Orange: dissolved salt. Grey: sand.');
    var go = button('controls', 'Pour through the filter paper', function () {
      if (poured) return; poured = true; moved = true; go.disabled = true; box.g = 0.03;
      box.ps.forEach(function (p) { if (p.c !== 'p4') p.floor = 0; });
      say('Water and dissolved salt pass through the paper…');
      setTimeout(function () { say('The sand stays on the paper: that is the residue. The water and salt below are the filtrate.', true); finish('Sand stayed in the paper (residue). Water and dissolved salt passed through (filtrate).'); }, 1800);
    }, 'go');
  };

  W.evaporate = function () {
    var pb = S.particleBoard(B, 0.55, { frameMuted: true }), box = pb.box, heating = false, fc = 0;
    box.mode = 'liquid'; box.jit = 0.35; box.g = 0.03;
    box.ps = box.scatter(28, 'p1', { x0: 0, x1: 22, y0: 0, y1: 5 }).concat(box.scatter(7, 'p2', { x0: 0, x1: 22, y0: 0, y1: 4 }).map(function (p) { p.rr = 0.4; return p; }));
    box.relax(50); pb.dr.rebuild(); pb.dr.paint();
    say('The filtrate in a dish: water (blue) with dissolved salt (orange).');
    var go = button('controls', 'Heat the dish', function () { if (heating || done) return; heating = true; moved = true; go.disabled = true; box.jit = 0.7; }, 'go');
    S.loop(function () {
      if (!heating || ++fc % 9) return;
      var waters = box.ps.filter(function (p) { return p.c === 'p1'; });
      if (waters.length) { box.ps.splice(box.ps.indexOf(waters[Math.floor(Math.random() * waters.length)]), 1); pb.dr.rebuild(); pb.dr.paint(); say('Water particles escape as a gas. ' + (waters.length - 1) + ' left.'); return; }
      heating = false; var i = 0;
      box.ps.forEach(function (p) { p.sx = 9 + (i % 4) * 0.82; p.sy = 0.42 + Math.floor(i / 4) * 0.82; p.lock = true; i++; });
      box.amp = 0.06; pb.dr.rebuild(); pb.dr.paint();
      say('All the water has gone. The salt particles are left behind and pack together into crystals.', true);
      finish('The water evaporated; the salt was left behind as crystals.');
    });
  };

  W.distil = function () {
    var L = { x0: 1, x1: 9, y0: 0, y1: 7 }, R = { x0: 15, x1: 23, y0: 0, y1: 7 }, PATH = [[5, 7.3], [5, 10.5], [19, 10.5], [19, 7.3]];
    var pb = S.particleBoard({ x0: 0, x1: 24, y0: 0, y1: 12 }, 0.5, { noFrame: true, pad: 1, bottom: 1.6 }), box = pb.box, bd = pb.board, heating = false, fc = 0;
    box.mode = 'liquid'; box.jit = 0.35; box.g = 0.03; box.amp = 0.12;
    S.curve([L.x0 - 0.1, L.x0 - 0.1, L.x1 + 0.1, L.x1 + 0.1], [L.y1 + 0.2, -0.1, -0.1, L.y1 + 0.2]);
    S.curve([R.x0 - 0.1, R.x0 - 0.1, R.x1 + 0.1, R.x1 + 0.1], [R.y1 + 0.2, -0.1, -0.1, R.y1 + 0.2]);
    S.curve(PATH.map(function (p) { return p[0]; }), PATH.map(function (p) { return p[1]; }), { w: 9, c: 'muted', op: 0.35 });
    var jacket = bd.create('polygon', [[8, 9.6], [16, 9.6], [16, 11.4], [8, 11.4]], { fillOpacity: 0.15, vertices: { visible: false }, borders: { dash: 2, strokeWidth: 1.5, highlight: false }, highlight: false, fixed: true });
    S.onPaint(function () { jacket.setAttribute({ fillColor: T.p1 }); jacket.borders.forEach(function (x) { x.setAttribute({ strokeColor: T.p1 }); }); });
    S.text(12, 12.2, 'Cold water jacket (condenser)', { size: 12 }); S.text(5, -1, 'Heat', { size: 12 }); S.text(19, -1, 'Collecting flask', { size: 12 });
    box.ps = box.scatter(26, 'p1', { x0: L.x0, x1: L.x1, y0: 0, y1: 5 }).map(function (p) { p.reg = L; return p; })
      .concat(box.scatter(7, 'p2', { x0: L.x0, x1: L.x1, y0: 0, y1: 4 }).map(function (p) { p.reg = L; p.rr = 0.38; return p; }));
    box.relax(60); pb.dr.rebuild(); pb.dr.paint();
    say('Seawater: water (blue) with dissolved salt (orange).');
    function along(t) { for (var i = 0; i < PATH.length - 1; i++) { var a = PATH[i], b = PATH[i + 1], d = Math.hypot(b[0] - a[0], b[1] - a[1]); if (t <= d) return [a[0] + (b[0] - a[0]) * t / d, a[1] + (b[1] - a[1]) * t / d]; t -= d; } return null; }
    var go = button('controls', 'Heat the seawater', function () { if (heating || done) return; heating = true; moved = true; go.disabled = true; }, 'go');
    S.loop(function () {
      box.ps.forEach(function (p) { if (p.vap !== undefined) { p.vap += 0.22; var pos = along(p.vap); if (pos) { p.sx = pos[0]; p.sy = pos[1]; } else { delete p.vap; p.lock = false; p.reg = R; p.x = 19; p.y = 6.5; p.vx = 0; p.vy = 0; } } });
      if (!heating || ++fc % 14) return;
      var left = box.ps.filter(function (p) { return p.c === 'p1' && p.reg === L && p.vap === undefined && !p.lock; });
      if (left.length) {
        var p = left[Math.floor(Math.random() * left.length)]; p.vap = 0; p.lock = true; p.sx = p.x; p.sy = p.y; p.reg = null;
        say('Water particles boil off, travel through the cold tube, condense and drip into the collecting flask. Collected: ' + box.ps.filter(function (x) { return x.reg === R; }).length + ' water, 0 salt.');
        return;
      }
      if (box.ps.some(function (x) { return x.vap !== undefined; })) return;
      heating = false; var i = 0;
      box.ps.filter(function (x) { return x.c === 'p2'; }).forEach(function (x) { x.sx = 3 + (i % 5) * 0.8; x.sy = 0.4 + Math.floor(i / 5) * 0.8; x.lock = true; i++; });
      say('Done. The collecting flask holds only water particles: fresh water. The salt is left behind as crystals.', true);
      finish('The collecting flask holds fresh water only; the salt stayed behind.');
    });
  };

  W.chroma = function () {
    var BASE = 2, TOP = 12.5, front = BASE, running = false;
    var bd = S.newBoard([0, 14, 24, -1.2]);
    var LANES = [{ x: 5, name: 'Note', dyes: [['p1', 0.8], ['p5', 0.25]] }, { x: 12, name: 'Pen A', dyes: [['p1', 0.8], ['p2', 0.5], ['p5', 0.25]] }, { x: 19, name: 'Pen B', dyes: [['p1', 0.8], ['p5', 0.25]] }];
    var paper = bd.create('polygon', [[2, 0], [22, 0], [22, 13.5], [2, 13.5]], { fillOpacity: 1, vertices: { visible: false }, borders: { strokeWidth: 1.5, highlight: false }, highlight: false, fixed: true });
    var pts = [[2, 0], [22, 0], [22, 0], [2, 0]].map(function (c, i) { return bd.create('point', [c[0], i < 2 ? 0 : function () { return front; }], { visible: false }); });
    var wet = bd.create('polygon', pts, { fillOpacity: 0.18, vertices: { visible: false }, borders: { visible: false }, highlight: false, fixed: true });
    var line = bd.create('segment', [[2, BASE], [22, BASE]], { dash: 2, strokeWidth: 1.5, highlight: false, fixed: true });
    var spots = [];
    LANES.forEach(function (l) {
      l.dyes.forEach(function (d) { spots.push({ c: d[0], pt: bd.create('point', [l.x, function () { return BASE + d[1] * (front - BASE); }], { name: '', withLabel: false, fixed: true, highlight: false, showInfobox: false, face: 'o', strokeWidth: 0, fillOpacity: 0.9 }) }); });
      S.text(l.x, -0.6, l.name, { c: 'ink', size: 13, bold: true });
    });
    S.onPaint(function () {
      paper.setAttribute({ fillColor: T.card }); paper.borders.forEach(function (x) { x.setAttribute({ strokeColor: T.muted }); }); wet.setAttribute({ fillColor: T.p1 }); line.setAttribute({ strokeColor: T.muted });
      spots.forEach(function (s) { s.pt.setAttribute({ fillColor: T[s.c], strokeColor: T[s.c], size: 0.55 * bd.unitX }); });
    });
    say('Ink spots from a note and two black pens sit on a pencil line.');
    var go = button('controls', 'Dip the paper in water', function () { if (running || done) return; running = true; moved = true; go.disabled = true; say('Water soaks up the paper, carrying the dyes with it…'); }, 'go');
    S.loop(function () {
      if (!running) return; front = Math.min(TOP, front + 0.03); bd.update();
      if (front >= TOP) { running = false; say('The black ink has split into coloured dyes. Each dye was carried a different distance.', true); finish('Each black ink split into coloured dyes. The note\'s dyes match Pen B; Pen A has an extra red dye.'); }
    });
  };

  W.quiz = function (spec) {
    el('board').hidden = true;
    var need = Number(spec.need) || 6, count = 0, opts = String(spec.options || '').split(';').map(function (o) { var i = o.lastIndexOf('='); return [o.slice(i + 1).trim(), o.slice(0, i).trim()]; }).filter(function (o) { return o[0] && o[1]; });
    var items = (spec._all.item || []).map(function (l) { var p = l.split('|').map(function (x) { return x.trim(); }); return { q: p[0], a: p[1], why: p[2] || '' }; });
    if (!items.length || opts.length < 2) throw new Error('quiz needs options: Label=value; Label=value and at least one item: text | value | why');
    var qp = document.createElement('p'); qp.className = 'quizq'; area('top').appendChild(qp);
    var bs = opts.map(function (o) { return button('controls', o[1], function () { pick(o[0]); }); });
    var streak = document.createElement('span'); streak.className = 'streak'; streak.innerHTML = new Array(need + 1).join('<span></span>'); area('controls').appendChild(streak);
    var pool = [], cur = null;
    function next() { if (!pool.length) pool = items.slice().sort(function () { return Math.random() - 0.5; }); cur = pool.pop(); qp.textContent = cur.q; bs.forEach(function (b) { b.disabled = false; }); if (count < need) say('Choose an answer.'); }
    function pick(a) {
      if (count >= need) return; bs.forEach(function (b) { b.disabled = true; });
      if (a === cur.a) { count++; streak.children[count - 1].classList.add('on'); say('Correct. ' + cur.why, true); } else say('Not this time. ' + cur.why);
      if (count >= need) { say(need + ' correct. ' + cur.why, true); finish(need + ' correct.'); return; }
      touch(count + ' correct so far.'); setTimeout(next, 1800);
    }
    next();
  };

  // ---------- setup ----------
  function parseSpec(text) {
    var s = { _all: {} };
    String(text || '').split('\n').forEach(function (line) {
      var m = /^\s*([a-z]+)\s*:\s*(.*?)\s*$/i.exec(line);
      if (!m || m[2] === '') return;
      s[m[1]] = m[2]; (s._all[m[1]] = s._all[m[1]] || []).push(m[2]);
    });
    if (!W[s.widget]) throw new Error('Unknown widget "' + s.widget + '".');
    return s;
  }
  function load(text) {
    ['top', 'controls', 'extra'].forEach(function (id) { el(id).replaceChildren(); el(id).hidden = true; });
    el('board').hidden = false; el('error').hidden = true; say('');
    moved = false; done = false;
    try { var spec = parseSpec(text); W[spec.widget](spec); }
    catch (e) { el('error').hidden = false; el('error').textContent = 'This board cannot start: ' + e.message; }
  }
  window.addEventListener('message', function (e) { var m = e.data; if (e.origin === location.origin && m && m.wp === 'set-code') load(m.code); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && parent !== window) parent.postMessage({ wp: 'esc' }, location.origin); });
  load(q.get('code'));
})();
