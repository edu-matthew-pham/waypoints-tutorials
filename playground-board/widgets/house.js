// A made-up, smaller House of Representatives (Civics, representative and responsible government): which side has
// the support of more than half the members, and so can form government. Side seats are fixed; each crossbench
// member is a button that cycles Undecided -> Backs Side A -> Backs Side B.
//   widget: house
//   seats: 15            members in the House (odd or even, 3 to 25)
//   side A: 7            members on Side A
//   side B: 6            members on Side B (the rest are the crossbench)
//   backs A: 1           crossbench members backing Side A at the start (optional, default 0)
//   backs B: 0           crossbench members backing Side B at the start (optional, default 0)
// Values for checks (single letters): a and b (members backing each side, its own seats included), u (undecided
//   crossbench), n (seats), m (the majority: more than half), g (0 no side has a majority, 1 Side A, 2 Side B).
//   Checks: "a = 8", "b >= 8", "a < 8".
// Neutral on purpose: two made-up sides named by letter, colours not tied to any real party, no real seat numbers.
// The model leaves out the Speaker and the Senate (teacher notes say so).
(function (B) {
  'use strict';
  var spec, cross = [], ui = {};
  var CSS = '.wpt-hswrap{display:flex;flex-direction:column;gap:10px;padding:10px}.wpt-hshead{margin:0;font-weight:600}' +
    '.wpt-hsgrp{display:flex;flex-direction:column;gap:4px}.wpt-hsgrp h3{margin:0;font-size:14px;font-weight:600}' +
    '.wpt-hsrow{display:flex;flex-wrap:wrap;gap:6px}' +
    '.wpt-hsseat{font:inherit;font-size:13px;line-height:1.15;min-width:44px;min-height:44px;padding:4px 6px;border-radius:10px;border:2px solid var(--line);background:var(--card);color:var(--ink);display:inline-flex;flex-direction:column;align-items:center;justify-content:center}' +
    '.wpt-hsseat small{font-size:10px;color:var(--muted)}' +
    '.wpt-hsa{border-color:#6d4bb3;background:rgba(109,75,179,.14)}.wpt-hsb{border-color:#8b5a2b;background:rgba(139,90,43,.14);border-style:dashed}' +
    'button.wpt-hsseat{cursor:pointer;min-width:84px}button.wpt-hsseat.wpt-hsu{border-style:dotted}' +
    'button.wpt-hsseat:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.wpt-hsres{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;align-items:center}' +
    '.wpt-hsbar{position:relative;height:16px;border-radius:8px;background:var(--line);overflow:visible}.wpt-hsbar i{display:block;height:100%;border-radius:8px}' +
    '.wpt-hsbar.wpt-hsfa i{background:#6d4bb3}.wpt-hsbar.wpt-hsfb i{background:#8b5a2b}' +
    '.wpt-hsbar b{position:absolute;top:-4px;bottom:-4px;width:0;border-left:2px dashed var(--ink)}' +
    '.wpt-hsnote{margin:0;font-size:13px;color:var(--muted)}';
  var STATES = ['Undecided', 'Backs Side A', 'Backs Side B'];
  function style() { if (document.getElementById('hscss')) return; var s = document.createElement('style'); s.id = 'hscss'; s.textContent = CSS; document.head.appendChild(s); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function whole(v, key, lo, hi, def) {
    var x = v === undefined ? def : Number(v);
    if (!Number.isInteger(x) || x < lo || x > hi) throw new Error(key + ': a whole number from ' + lo + ' to ' + hi + '.');
    return x;
  }
  // "side A: 7" and "backs A: 1" are named lines, kept in spec.items (core.js parseSpec).
  function named(s, kind, name) {
    var v; (s.items || []).forEach(function (it) { if (it.kind === kind && it.name && it.name.toUpperCase() === name) v = it.value; });
    return v;
  }
  function parse(s) {
    s.n = whole(s.seats, 'seats', 3, 25, 15);
    s.A = whole(named(s, 'side', 'A'), 'side A', 0, s.n, Math.floor(s.n / 2));
    s.Bn = whole(named(s, 'side', 'B'), 'side B', 0, s.n - s.A, Math.floor((s.n - s.A) / 2));
    s.c = s.n - s.A - s.Bn;
    s.ka = whole(named(s, 'backs', 'A'), 'backs A', 0, s.c, 0);
    s.kb = whole(named(s, 'backs', 'B'), 'backs B', 0, s.c - s.ka, 0);
    s.m = Math.floor(s.n / 2) + 1;
  }
  function fresh() { var a = []; for (var i = 0; i < spec.c; i++) a.push(i < spec.ka ? 1 : i < spec.ka + spec.kb ? 2 : 0); return a; }
  function count() {
    var ka = 0, kb = 0, u = 0;
    cross.forEach(function (x) { if (x === 1) ka++; else if (x === 2) kb++; else u++; });
    var a = spec.A + ka, b = spec.Bn + kb;
    return { a: a, b: b, u: u, ka: ka, kb: kb, g: a >= spec.m ? 1 : b >= spec.m ? 2 : 0 };
  }
  function seat(cls, label, small) {
    var s = el('span', 'wpt-hsseat ' + cls); s.appendChild(document.createTextNode(label));
    if (small) s.appendChild(el('small', '', small)); return s;
  }
  function group(title, kids) {
    var g = el('div', 'wpt-hsgrp'); g.appendChild(el('h3', '', title));
    var r = el('div', 'wpt-hsrow'); r.setAttribute('role', 'group'); r.setAttribute('aria-label', title);
    kids.forEach(function (k) { r.appendChild(k); }); g.appendChild(r); return g;
  }
  function draw() {
    var host = B.el('board'); host.replaceChildren(); host.style.overflowY = 'auto';
    var w = el('div', 'wpt-hswrap'), k = count(), i, kids;
    w.appendChild(el('p', 'wpt-hshead', 'A made-up House with ' + spec.n + ' members. More than half is ' + spec.m + '.'));
    kids = []; for (i = 0; i < spec.A; i++) kids.push(seat('wpt-hsa', 'A'));
    w.appendChild(group('Side A (' + spec.A + ')', kids));
    kids = []; for (i = 0; i < spec.Bn; i++) kids.push(seat('wpt-hsb', 'B'));
    w.appendChild(group('Side B (' + spec.Bn + ')', kids));
    if (spec.c) {
      kids = cross.map(function (x, j) {
        var b = el('button', 'wpt-hsseat ' + (x === 1 ? 'wpt-hsa' : x === 2 ? 'wpt-hsb' : 'wpt-hsu')); b.type = 'button';
        b.appendChild(document.createTextNode(x === 1 ? 'A' : x === 2 ? 'B' : '?'));
        b.appendChild(el('small', '', STATES[x]));
        b.setAttribute('aria-label', 'Crossbench member ' + (j + 1) + ': ' + STATES[x].toLowerCase() + '. Press to change.');
        b.addEventListener('click', function () { cross[j] = (cross[j] + 1) % 3; B.moved = true; draw(); report(); });
        return b;
      });
      w.appendChild(group('Crossbench, in neither side (' + spec.c + ')', kids));
      w.appendChild(el('p', 'wpt-hsnote', 'Press a crossbench member to change who they back. Backing a side is not joining it.'));
    }
    var res = el('div', 'wpt-hsres');
    [['Side A', k.a, 'wpt-hsfa'], ['Side B', k.b, 'wpt-hsfb']].forEach(function (r) {
      res.appendChild(el('span', '', r[0] + ': ' + r[1] + ' of ' + spec.n));
      var bar = el('div', 'wpt-hsbar ' + r[2]); var fill = el('i'); fill.style.width = (100 * r[1] / spec.n) + '%'; bar.appendChild(fill);
      var line = el('b'); line.style.left = (100 * spec.m / spec.n) + '%'; bar.appendChild(line);
      bar.setAttribute('aria-hidden', 'true'); res.appendChild(bar);
    });
    w.appendChild(res);
    host.appendChild(w);
  }
  function verdict(k) {
    if (k.g === 1) return 'Side A has the support of ' + k.a + ' of ' + spec.n + ': a majority. Side A can form government.';
    if (k.g === 2) return 'Side B has the support of ' + k.b + ' of ' + spec.n + ': a majority. Side B can form government.';
    return 'No side has the support of ' + spec.m + ' members yet, so no side has a majority.';
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = el('p', 'rulework'); ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    var bar = el('div', 'gbar bbar'); var again = el('button', 'quiet', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function report() {
    var k = count(), text = 'Side A ' + k.a + ', Side B ' + k.b + (k.u ? ', undecided ' + k.u : '') + '. ' + verdict(k);
    ui.work.textContent = text; B.say(verdict(k));
    B.save({ cross: cross });
    B.post({ scope: { vars: { a: k.a, b: k.b, u: k.u, n: spec.n, m: spec.m, g: k.g }, points: {} } }, text);
  }
  B.widget('house', {
    sections: ['board', 'gpanel'],
    label: function () { return 'A made-up House: who has a majority?'; },
    parse: parse,
    redraw: function () { if (spec) draw(); },
    resize: function () {},
    start: function (isFresh) {
      spec = B.spec; style();
      var sv = isFresh ? null : B.saved();
      cross = sv && Array.isArray(sv.cross) && sv.cross.length === spec.c && sv.cross.every(function (x) { return x === 0 || x === 1 || x === 2; }) ? sv.cross.slice() : fresh();
      paintPanel(); draw(); report();
    },
  });
})(WPB);
