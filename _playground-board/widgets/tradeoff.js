// One scarce resource split between two uses: a made-up oven's hours baking pies or muffins (Economics, opportunity
// cost). The total is fixed, so moving an hour to one use takes it from the other: the board shows what each choice
// makes and, since the start, what it gained and gave up.
//   widget: tradeoff
//   resource: oven hours        what is scarce (shown in the heading)
//   total: 6                    how many there are (whole number, 1 to 12)
//   first: pies, 10             name, how many one unit makes
//   second: muffins, 20
//   start: 3                    units on the first use at the start (default half, rounded down)
//   compare: on | off           the "since the start" line (default on; off for a predict-first use)
// Values for checks (single letters): h (units on the first use), a and b (how many of each are made),
//   u and v (change in a and in b since the start).  Checks: "h = 4", "a = 40 and b = 40", "v < 0".
// A straight-line model on purpose: every unit makes the same amount. No graph yet (Years 9–10 could add one).
(function (B) {
  'use strict';
  var spec, h = 0, ui = {};
  var CSS = '.wpt-towrap{display:flex;flex-direction:column;gap:10px;padding:10px}.wpt-tohead{margin:0;font-weight:600}' +
    '.wpt-torow{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:6px}@media(max-width:420px){.wpt-torow{grid-template-columns:repeat(var(--h),minmax(0,1fr))}}' +
    '.wpt-toblk{font:inherit;font-size:13px;line-height:1.2;padding:8px 2px;border-radius:8px;border:2px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer;min-height:56px}' +
    '.wpt-toblk .wpt-ton{display:block;font-size:11px;color:var(--muted)}.wpt-toblk.wpt-toa{border-color:var(--left);background:rgba(47,111,179,.12)}.wpt-toblk.wpt-tob{border-color:var(--accent);background:rgba(194,87,10,.12)}' +
    '.wpt-tomove{display:flex;flex-wrap:wrap;gap:8px}.wpt-tomove button{flex:1 1 160px;font:inherit;font-weight:600;padding:8px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
    '.wpt-tomove button:disabled{opacity:.45;cursor:default}' +
    '.wpt-toblk:focus-visible,.wpt-tomove button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.wpt-tores{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;align-items:center}.wpt-tores b{font-size:17px}' +
    '.wpt-tobar{height:14px;border-radius:7px;background:var(--line);overflow:hidden}.wpt-tobar i{display:block;height:100%}.wpt-tobar.wpt-toa i{background:var(--left)}.wpt-tobar.wpt-tob i{background:var(--accent)}' +
    '.wpt-tocmp{margin:0;font-weight:600;color:var(--accent)}';
  function style() { if (document.getElementById('tocss')) return; var s = document.createElement('style'); s.id = 'tocss'; s.textContent = CSS; document.head.appendChild(s); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function use(v, key) {
    var m = /^\s*([^,]+?)\s*,\s*(\d+(?:\.\d+)?)\s*$/.exec(String(v || ''));
    if (!m || !(Number(m[2]) > 0)) throw new Error(key + ': a name and how many one unit makes, such as "pies, 10".');
    return { name: m[1], rate: Number(m[2]) };
  }
  function parse(s) {
    s.tot = Number(s.total === undefined ? 6 : s.total);
    if (!Number.isInteger(s.tot) || s.tot < 1 || s.tot > 12) throw new Error('total: a whole number from 1 to 12.');
    s.A = use(s.first, 'first'); s.B = use(s.second, 'second');
    s.h0 = s.start === undefined ? Math.floor(s.tot / 2) : Number(s.start);
    if (!Number.isInteger(s.h0) || s.h0 < 0 || s.h0 > s.tot) throw new Error('start: a whole number from 0 to ' + s.tot + '.');
    s.res = String(s.resource || 'hours').trim();
    s.cmp = !/^off$/i.test(String(s.compare || 'on').trim());
  }
  var cap = function (t) { return t.charAt(0).toUpperCase() + t.slice(1); };
  var r2 = function (x) { return Math.round(x * 100) / 100; };
  function made(hh) { return { a: r2(hh * spec.A.rate), b: r2((spec.tot - hh) * spec.B.rate) }; }
  var an = function (t) { return (/^[aeiou]/i.test(t) ? 'an ' : 'a ') + t; };
  function change(n, name) { return n > 0 ? B.fmt(n) + ' more ' + name : B.fmt(-n) + ' fewer ' + name; }

  function set(hh) { hh = Math.max(0, Math.min(spec.tot, hh)); if (hh === h) return; h = hh; B.moved = true; draw(); report(); }
  function draw() {
    var host = B.el('board'); host.replaceChildren(); host.style.overflowY = 'auto';
    var w = el('div', 'wpt-towrap'), m = made(h), A = spec.A, Bq = spec.B, one = spec.res.replace(/s$/, '');
    w.appendChild(el('p', 'wpt-tohead', spec.tot + ' ' + spec.res + '. Each one makes ' + B.fmt(A.rate) + ' ' + A.name + ' or ' + B.fmt(Bq.rate) + ' ' + Bq.name + '.'));
    var row = el('div', 'wpt-torow'); row.style.setProperty('--n', spec.tot); row.style.setProperty('--h', Math.ceil(spec.tot / 2));
    row.setAttribute('role', 'group'); row.setAttribute('aria-label', 'The ' + spec.res);
    for (var i = 0; i < spec.tot; i++) {
      var isA = i < h, b = el('button', 'wpt-toblk ' + (isA ? 'wpt-toa' : 'wpt-tob')); b.type = 'button';
      b.appendChild(el('span', 'wpt-ton', cap(one) + ' ' + (i + 1)));
      b.appendChild(document.createTextNode(cap(isA ? A.name : Bq.name)));
      b.setAttribute('aria-label', cap(one) + ' ' + (i + 1) + ': ' + (isA ? A.name : Bq.name) + '. Press to make ' + (isA ? Bq.name : A.name) + ' instead.');
      b.addEventListener('click', (function (wasA) { return function () { set(h + (wasA ? -1 : 1)); }; })(isA));
      row.appendChild(b);
    }
    w.appendChild(row);
    var mv = el('div', 'wpt-tomove');
    var toA = el('button', '', 'Move ' + an(one) + ' to ' + A.name); toA.type = 'button'; toA.disabled = h >= spec.tot;
    var toB = el('button', '', 'Move ' + an(one) + ' to ' + Bq.name); toB.type = 'button'; toB.disabled = h <= 0;
    toA.addEventListener('click', function () { set(h + 1); }); toB.addEventListener('click', function () { set(h - 1); });
    mv.append(toA, toB); w.appendChild(mv);
    var res = el('div', 'wpt-tores');
    [[A, m.a, h, 'wpt-toa'], [Bq, m.b, spec.tot - h, 'wpt-tob']].forEach(function (r) {
      res.appendChild(el('span', '', cap(r[0].name) + ': ')).appendChild(el('b', '', B.fmt(r[1])));
      var bar = el('div', 'wpt-tobar ' + r[3]); var fill = el('i'); fill.style.width = (100 * r[2] / spec.tot) + '%'; bar.appendChild(fill);
      bar.setAttribute('aria-hidden', 'true'); res.appendChild(bar);
    });
    w.appendChild(res);
    host.appendChild(w);
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = el('p', 'rulework'); ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    var bar = el('div', 'gbar bbar'); var again = el('button', 'quiet', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function report() {
    var m = made(h), m0 = made(spec.h0), u = m.a - m0.a, v = m.b - m0.b;
    var now = B.fmt(m.a) + ' ' + spec.A.name + ' and ' + B.fmt(m.b) + ' ' + spec.B.name + '.';
    var text = spec.cmp ? (u === 0 ? 'Same as the start: ' + now : 'Since the start: ' + change(u, spec.A.name) + ', ' + change(v, spec.B.name) + '.') : now;
    ui.work.textContent = text; B.say(spec.cmp && u !== 0 ? now + ' ' + text : now);
    B.save({ h: h });
    B.post({ scope: { vars: { h: h, a: m.a, b: m.b, u: u, v: v }, points: {} } }, now + (spec.cmp ? ' ' + text : ''));
  }
  B.widget('tradeoff', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'One resource, two uses: ' + (s.res || 'hours'); },
    parse: parse,
    redraw: function () { if (spec) draw(); },
    resize: function () {},
    start: function (fresh) {
      spec = B.spec; style();
      var sv = fresh ? null : B.saved();
      h = sv && Number.isInteger(sv.h) && sv.h >= 0 && sv.h <= spec.tot ? sv.h : spec.h0;
      paintPanel(); draw(); report();
    },
  });
})(WPB);
