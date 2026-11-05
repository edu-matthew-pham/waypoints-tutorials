// Events: the sample space of one or two chance events, as a list, a grid or a tree. Students click outcomes to make an
// event A, see P(A) as a fraction, show its complement (not A), and run trials to compare relative frequency with P(A).
//   widget: events
//   first: dice              the first event: dice (or "dice 4", 4 to 12 faces), coin, or a list of equally likely
//                            outcomes such as "red, blue, green" (repeat a name for two of the same: "red, red, blue")
//   second: coin             an optional second event, done after the first (makes a grid or a tree)
//   names: Dice, Coin        what to call the two events (default from the kinds)
//   show: sum                two dice: label each cell with the sum (default: the pair, such as "3, 4")
//   view: grid | tree | both a two-event space as a grid (default) or a tree; both adds a button to switch
//   event: s = 7             outcomes chosen at the start (a rule over a, b and s, the sum; and, or, not, =, <, >, <=, >=, % for remainders;
//                            outcome names are words, such as "a = H and b > 4")
//   target: s >= 10          value r is 1 when the chosen outcomes are exactly this rule's outcomes
//   choose: off              students cannot change the chosen outcomes (default on; in a grid, a row or column label
//                            chooses or clears that whole row or column)
//   complement: on           a "Show not A" button: shades every other outcome and writes P(not A) (shown: starts shown)
//   trials: on               Run 1, 10, 100, 1000: relative frequency of A against P(A), and a table of how often each
//                            label came up (sums, for two dice with show: sum)
//   replace: off             a draw with nothing put back: the second list must equal the first, and the second pick
//                            cannot be the first (no diagonal in the grid, fewer branches in the tree)
//   weights: 18, 2; 49, 931  unequal chances for a two-event space: whole-number counts (people out of a total), one row per
//                            first outcome and one column per second outcome, rows split by ";". Chances are count ÷ total (a
//                            zero count drops that outcome). The tree shows each branch's chance (a second-stage branch is its
//                            count ÷ its row's total, so conditional), outcomes show their counts, P(A) adds the chosen counts,
//                            and trials pick outcomes in proportion to the counts. Default off (all outcomes equally likely).
//   seed: 4                  fixed randomness for pictures and clips
// state: { scope: { vars: { n (outcomes in A; with weights, the chosen counts added), m (all outcomes; with weights, the total), p (P(A), 3 places), q (outcomes in not A), k (1 while not
//   A is shown), r (1 when A matches target), u (trials), c (times A happened), f (relative frequency), e (|f − p|) } } }
// Checks: "n = 6 and m = 36", "r = 1", "k = 1", "u >= 100 and e < 0.05".
(function (B) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var spec = null, sel = {}, notA = false, view = 'grid', ui = {}, rnd = Math.random, tri = { u: 0, per: {}, last: -1 };
  var r3 = function (v) { return Math.round(v * 1000) / 1000; };
  function gcd(x, y) { return y ? gcd(y, x % y) : x; }
  function frac(a, b) { if (!b) return '0'; var g = gcd(a, b); return a === 0 ? '0' : b / g === 1 ? String(a / g) : (a / g) + '/' + (b / g); }
  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }

  function stage(text, where) {
    var t = String(text).trim(), m;
    if ((m = /^dice(?:\s+(\d+))?$/i.exec(t))) {
      var n = m[1] ? Number(m[1]) : 6;
      if (!(n >= 4 && n <= 12)) throw new Error(where + ': a dice has 4 to 12 faces.');
      var o = []; for (var i = 1; i <= n; i++) o.push(i);
      return { kind: 'dice', name: 'Dice', out: o };
    }
    if (/^coin$/i.test(t)) return { kind: 'coin', name: 'Coin', out: ['H', 'T'] };
    var list = t.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    if (list.length < 2) throw new Error(where + ': dice, coin, or at least two outcomes separated by commas.');
    return { kind: 'list', name: where === 'first' ? 'First' : 'Second', out: list.map(function (x) { return /^-?\d+(\.\d+)?$/.test(x) ? Number(x) : x; }) };
  }
  function compile(rule, where) {
    var words = { and: '&&', or: '||', not: '!' }, out = '';
    var re = /\s*(<=|>=|!=|=|<|>|\(|\)|[A-Za-z][A-Za-z0-9]*|\d+(?:\.\d+)?|[+\-*\/%])/g, m, pos = 0, src = String(rule).trim();
    while (pos < src.length) {
      re.lastIndex = pos; m = re.exec(src);
      if (!m || m.index !== pos) break;
      var tk = m[1]; pos = re.lastIndex;
      if (words[tk.toLowerCase()]) out += ' ' + words[tk.toLowerCase()] + ' ';
      else if (tk === '=') out += '===';
      else if (tk === '!=') out += '!==';
      else if (tk === 'a' || tk === 'b' || tk === 's') out += 'v.' + tk;
      else if (/^[A-Za-z]/.test(tk)) out += JSON.stringify(tk);
      else out += tk;
    }
    if (pos < src.length) throw new Error(where + ': cannot read "' + src.slice(pos).trim() + '". Use a, b, s, numbers, outcome names, and, or, not, =, <, >, % (remainder).');
    try { return new Function('v', 'return !!(' + out + ');'); } catch (e) { throw new Error(where + ': "' + rule + '" is not a rule the board can read.'); }
  }
  function parse(s) {
    if (!s.first) throw new Error('first: dice, coin, or a list of outcomes.');
    s.A = stage(s.first, 'first');
    s.Bs = s.second ? stage(s.second, 'second') : null;
    if (s.A.kind === 'list') s.A.name = 'First'; if (s.Bs && s.Bs.kind === 'list') s.Bs.name = 'Second';
    if (s.Bs && s.Bs.kind === s.A.kind && s.A.kind !== 'list') { s.A.name = 'First ' + s.A.name.toLowerCase(); s.Bs.name = 'Second ' + s.Bs.name.toLowerCase(); }
    if (s.names) { var nm = String(s.names).split(',').map(function (x) { return x.trim(); }); if (nm[0]) s.A.name = nm[0]; if (s.Bs && nm[1]) s.Bs.name = nm[1]; }
    s.sum = /^sum$/i.test(s.show || '');
    if (s.sum && !(s.A.kind === 'dice' && s.Bs && s.Bs.kind === 'dice')) throw new Error('show: sum needs two dice.');
    var v = String(s.view || 'grid').trim().toLowerCase();
    if (['grid', 'tree', 'both'].indexOf(v) < 0) throw new Error('view: grid, tree or both.');
    s.view0 = v === 'tree' ? 'tree' : 'grid'; s.both = v === 'both';
    s.norep = /^off$/i.test(s.replace || '');
    if (s.norep && (!s.Bs || String(s.first).trim() !== String(s.second).trim())) throw new Error('replace: off needs a second event with the same list as the first (a draw with nothing put back).');
    // the outcomes: cells of the grid (row = first, column = second), or the list for one event
    s.cells = [];
    s.A.out.forEach(function (a, i) {
      if (!s.Bs) s.cells.push({ i: i, j: 0, a: a, b: null });
      else s.Bs.out.forEach(function (b, j) { if (!(s.norep && i === j)) s.cells.push({ i: i, j: j, a: a, b: b }); });
    });
    s.wt = false; s.D = 0;
    if (s.weights !== undefined) {
      if (!s.Bs) throw new Error('weights: needs a second event.');
      if (s.norep) throw new Error('weights: cannot be used with replace: off.');
      var rows = String(s.weights).split(';').map(function (r) { return r.split(',').map(function (x) { return Number(x.trim()); }); });
      if (rows.length !== s.A.out.length || rows.some(function (r) { return r.length !== s.Bs.out.length || r.some(function (v) { return !(v >= 0) || Math.round(v) !== v; }); }))
        throw new Error('weights: ' + s.A.out.length + ' rows (one per first outcome, split by ";") of ' + s.Bs.out.length + ' whole numbers (one per second outcome), such as "18, 2; 49, 931".');
      s.wt = true; s.rows = rows;
      s.cells = s.cells.filter(function (c) { c.w = rows[c.i][c.j]; return c.w > 0; });
      s.D = s.cells.reduce(function (t, c) { return t + c.w; }, 0);
      if (!s.D) throw new Error('weights: at least one count must be more than 0.');
    }
    if ((s.view0 === 'tree' || s.both) && (!s.Bs || s.cells.length > 16)) throw new Error('view: tree is for two events with at most 16 outcomes.');
    s.cells.forEach(function (c) {
      c.s = typeof c.a === 'number' && typeof c.b === 'number' ? c.a + c.b : null;
      c.label = s.sum ? String(c.s) : c.b === null ? String(c.a) : c.a + ', ' + c.b;
      c.say = c.b === null ? String(c.a) : c.a + ' and ' + c.b + (s.sum ? ', sum ' + c.s : '');
    });
    s.ev = s.event !== undefined ? compile(s.event, 'event') : null;
    s.tg = s.target !== undefined ? compile(s.target, 'target') : null;
    s.choose = !/^off$/i.test(s.choose || '');
    s.comp = /^(on|shown)$/i.test(s.complement || ''); s.compShown = /^shown$/i.test(s.complement || '');
    s.trials = /^on$/i.test(s.trials || '');
    s.seedv = s.seed !== undefined ? Number(s.seed) : null;
  }
  function inA(c) { return !!sel[c.i + ',' + c.j]; }
  function wOf(c) { return spec.wt ? c.w : 1; }
  function total() { return spec.wt ? spec.D : spec.cells.length; }
  function count() { return spec.cells.filter(inA).reduce(function (t, c) { return t + wOf(c); }, 0); }

  function add(parent, tag, at, text) { var e = document.createElementNS(NS, tag); Object.keys(at).forEach(function (k) { e.setAttribute(k, at[k]); }); if (text !== undefined) e.textContent = text; parent.appendChild(e); return e; }
  function cellBox(svg, c, x, y, w, h, colA, colN, ink, font) {
    var on = inA(c), txt = spec.wt ? (view === 'tree' ? c.label + ': ' + c.w : String(c.w)) : c.label, g = add(svg, 'g', { role: spec.choose ? 'button' : 'img', 'aria-label': c.say + (spec.wt ? ', ' + c.w + ' of ' + spec.D : '') + (on ? ', in A' : ''), class: 'evcell' });
    if (spec.choose) { g.setAttribute('tabindex', '0'); g.setAttribute('aria-pressed', String(on)); }
    add(g, 'rect', { x: x, y: y, width: w, height: h, rx: 6, fill: on ? colA : notA ? colN : (B.css('--card') || '#fff'), 'fill-opacity': on || notA ? 0.85 : 1, stroke: on ? colA : ink, 'stroke-width': on ? 3 : 1.2 });
    add(g, 'text', { x: x + w / 2, y: y + h / 2 + 1, 'text-anchor': 'middle', 'dominant-baseline': 'middle', 'font-size': Math.min(20, h * 0.42, w * (txt.length > 4 ? 0.2 : 0.34), spec.wt ? w / (txt.length * 0.6) : 99), 'font-weight': 700, 'font-family': font, fill: on || notA ? '#fff' : ink }, txt);
    if (spec.choose) {
      var flip = function () { var k = c.i + ',' + c.j; if (sel[k]) delete sel[k]; else sel[k] = 1; B.moved = true; report(); };
      g.addEventListener('click', flip);
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
      g.style.cursor = 'pointer';
    }
  }
  function draw() {
    var el = B.el('board'); el.replaceChildren(); el.style.position = 'relative';
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%'); svg.setAttribute('role', 'group');
    svg.style.position = 'absolute'; svg.style.left = '0'; svg.style.top = '0';
    var ink = B.css('--ink') || '#1d2430', muted = B.css('--muted') || '#5d6675', colA = B.css('--left') || '#2f6fb3', colN = B.css('--accent') || '#c2570a', font = 'system-ui, sans-serif';
    var W, H;
    if (!spec.Bs) {   // one event: a row of outcomes
      var n = spec.cells.length, cw = Math.min(80, 760 / n), ch = 64;
      W = n * (cw + 8) + 40; H = 150;
      add(svg, 'text', { x: 20, y: 40, 'font-size': 18, 'font-weight': 700, 'font-family': font, fill: muted }, spec.A.name + ': ' + n + ' equally likely outcomes');
      spec.cells.forEach(function (c, k) { cellBox(svg, c, 20 + k * (cw + 8), 70, cw, ch, colA, colN, ink, font); });
    } else if (view === 'grid') {
      var R = spec.A.out.length, C = spec.Bs.out.length, cs = Math.min(64, 420 / Math.max(R, C)), lx = 110, ty = 70;
      W = lx + C * (cs + 6) + 30; H = ty + R * (cs + 6) + 30;
      add(svg, 'text', { x: lx + C * (cs + 6) / 2, y: 22, 'text-anchor': 'middle', 'font-size': 18, 'font-weight': 700, 'font-family': font, fill: muted }, spec.Bs.name);
      var my = ty + R * (cs + 6) / 2;
      add(svg, 'text', { x: 34, y: my, 'text-anchor': 'middle', 'font-size': 18, 'font-weight': 700, 'font-family': font, fill: muted, transform: 'rotate(-90 34 ' + my + ')' }, spec.A.name);
      // a row or column label chooses (or clears) the whole row or column
      var line = function (x, y, anc, text, cells, what) {
        var g = add(svg, 'g', { class: 'evcell' }), tx = add(g, 'text', { x: x, y: y, 'text-anchor': anc, 'font-size': 18, 'font-weight': 700, 'font-family': font, fill: ink, 'text-decoration': spec.choose ? 'underline' : 'none' }, text);
        void tx;
        if (!spec.choose) return;
        g.setAttribute('role', 'button'); g.setAttribute('tabindex', '0'); g.setAttribute('aria-label', 'Choose all with ' + what); g.style.cursor = 'pointer';
        var go = function () { var all = cells.every(inA); cells.forEach(function (c) { var k = c.i + ',' + c.j; if (all) delete sel[k]; else sel[k] = 1; }); B.moved = true; report(); };
        g.addEventListener('click', go); g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
      };
      spec.Bs.out.forEach(function (b, j) { line(lx + j * (cs + 6) + cs / 2, ty - 14, 'middle', String(b), spec.cells.filter(function (c) { return c.j === j; }), spec.Bs.name.toLowerCase() + ' ' + b); });
      spec.A.out.forEach(function (a, i) { line(lx - 14, ty + i * (cs + 6) + cs / 2 + 6, 'end', String(a), spec.cells.filter(function (c) { return c.i === i; }), spec.A.name.toLowerCase() + ' ' + a); });
      spec.cells.forEach(function (c) { cellBox(svg, c, lx + c.j * (cs + 6), ty + c.i * (cs + 6), cs, cs, colA, colN, ink, font); });
    } else {   // tree: first event's branches, then the second's, outcomes at the leaves
      var L = spec.cells.length, lh = Math.min(46, 560 / L), x0 = 30, x1 = spec.wt ? 250 : 210, x2 = spec.wt ? 470 : 400, lw = spec.wt ? 190 : 130;
      var bx = spec.wt ? x2 + 60 : x2;   // weighted trees keep room for the second outcome's name before the box
      W = bx + lw + 30; H = L * lh + 60;
      add(svg, 'text', { x: (x0 + x1) / 2, y: 22, 'text-anchor': 'middle', 'font-size': 16, 'font-weight': 700, 'font-family': font, fill: muted }, spec.A.name);
      add(svg, 'text', { x: (x1 + x2) / 2 + 20, y: 22, 'text-anchor': 'middle', 'font-size': 16, 'font-weight': 700, 'font-family': font, fill: muted }, spec.Bs.name);
      var root = 40 + L * lh / 2, pos = 0;
      add(svg, 'circle', { cx: x0, cy: root, r: 6, fill: ink });
      spec.A.out.forEach(function (a, i) {
        var mine = spec.cells.filter(function (c) { return c.i === i; }), C2 = mine.length, my = 40 + (pos + C2 / 2) * lh, base = pos; pos += C2;
        if (!C2) return;
        var rowT = mine.reduce(function (t, c) { return t + wOf(c); }, 0), halo = { 'font-size': 14, 'font-weight': 700, 'font-family': font, fill: muted, stroke: B.css('--card') || '#fff', 'stroke-width': 4, 'paint-order': 'stroke', 'text-anchor': 'middle' };
        add(svg, 'line', { x1: x0, y1: root, x2: x1, y2: my, stroke: ink, 'stroke-width': 2 });
        if (spec.wt) add(svg, 'text', Object.assign({ x: (x0 + x1) / 2 - 10, y: (root + my) / 2 - 6 }, halo), frac(rowT, spec.D));
        add(svg, 'text', { x: x1 + 8, y: my + 6, 'font-size': 18, 'font-weight': 700, 'font-family': font, fill: ink, stroke: B.css('--card') || '#fff', 'stroke-width': 4, 'paint-order': 'stroke' }, String(a));
        mine.forEach(function (c, j) {
          var b = c.b, ly = 40 + (base + j + 0.5) * lh;
          add(svg, 'line', { x1: x1 + 30, y1: my, x2: x2 - 34, y2: ly, stroke: ink, 'stroke-width': 1.5 });
          if (spec.wt) add(svg, 'text', Object.assign({ x: (x1 + 30 + x2 - 34) / 2, y: (my + ly) / 2 - 4 }, halo), frac(c.w, rowT));
          add(svg, 'text', { x: x2 - 28, y: ly + 6, 'font-size': 16, 'font-weight': 700, 'font-family': font, fill: ink }, String(b));
        });
      });
      spec.cells.forEach(function (c, k) { cellBox(svg, c, bx, 40 + k * lh + 3, lw, lh - 6, colA, colN, ink, font); });
    }
    if (count() || notA) {   // a key for the colours
      var ky = H + 6, kx = 20;
      add(svg, 'rect', { x: kx, y: ky, width: 22, height: 22, rx: 4, fill: colA, 'fill-opacity': 0.85 });
      add(svg, 'text', { x: kx + 30, y: ky + 17, 'font-size': 17, 'font-weight': 700, 'font-family': font, fill: ink }, 'A');
      if (notA) { add(svg, 'rect', { x: kx + 70, y: ky, width: 22, height: 22, rx: 4, fill: colN, 'fill-opacity': 0.85 }); add(svg, 'text', { x: kx + 100, y: ky + 17, 'font-size': 17, 'font-weight': 700, 'font-family': font, fill: ink }, 'not A'); }
      H += 40;
    }
    svg.setAttribute('viewBox', '0 0 ' + Math.round(W) + ' ' + Math.round(H));
    svg.setAttribute('aria-label', spec.wt ? 'The sample space: ' + spec.cells.length + ' outcomes out of ' + spec.D + ' people, ' + count() + ' chosen for event A.' : 'The sample space: ' + spec.cells.length + ' equally likely outcomes, ' + count() + ' chosen for event A.');
    el.appendChild(svg);
  }
  function once() {
    var k = Math.floor(rnd() * spec.cells.length);
    if (spec.wt) { var r = rnd() * spec.D, acc = 0; for (k = 0; k < spec.cells.length - 1; k++) { acc += spec.cells[k].w; if (r < acc) break; } }
    tri.u++; tri.per[k] = (tri.per[k] || 0) + 1; tri.last = k;
  }
  function run(n) { for (var i = 0; i < n && tri.u < 20000; i++) once(); B.moved = true; report(); }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = {};
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.note = document.createElement('p'); ui.note.className = 'tcount'; ui.note.id = 'gnote'; ui.note.setAttribute('aria-live', 'polite'); panel.appendChild(ui.note);
    var bar = document.createElement('div'); bar.className = 'gbar';
    var btn = function (text, fn, label) { var b = document.createElement('button'); b.type = 'button'; b.textContent = text; if (label) b.setAttribute('aria-label', label); b.addEventListener('click', fn); bar.appendChild(b); return b; };
    if (spec.choose) { btn('Choose none', function () { sel = {}; B.moved = true; report(); }); }
    if (spec.comp) { ui.compBtn = btn('Show not A', function () { notA = !notA; B.moved = true; report(); }); }
    if (spec.both) { ui.viewBtn = btn(view === 'grid' ? 'Show as a tree' : 'Show as a grid', function () { view = view === 'grid' ? 'tree' : 'grid'; B.moved = true; ui.viewBtn.textContent = view === 'grid' ? 'Show as a tree' : 'Show as a grid'; report(); }); }
    btn('Start again', B.restart);
    panel.appendChild(bar);
    if (spec.trials) {
      var rb = document.createElement('div'); rb.className = 'gbar nlops crun';
      [1, 10, 100, 1000].forEach(function (n) { var b = document.createElement('button'); b.type = 'button'; b.textContent = 'Run ' + n; b.addEventListener('click', function () { run(n); }); rb.appendChild(b); });
      panel.appendChild(rb);
      ui.trial = document.createElement('p'); ui.trial.className = 'tcount'; ui.trial.id = 'gtrial'; ui.trial.setAttribute('aria-live', 'polite'); panel.appendChild(ui.trial);
      ui.table = document.createElement('table'); ui.table.className = 'ctally'; panel.appendChild(ui.table);
    }
  }
  function report() {
    draw();
    if (ui.compBtn) { ui.compBtn.textContent = notA ? 'Hide not A' : 'Show not A'; ui.compBtn.setAttribute('aria-pressed', String(notA)); }
    var n = count(), m = total(), p = n / m, q = m - n, hits = 0, tally = {};
    spec.cells.forEach(function (c, k) { var ct = tri.per[k] || 0; if (inA(c)) hits += ct; tally[c.label] = (tally[c.label] || 0) + ct; });   // A can change after trials: count again
    var match = spec.tg ? spec.cells.every(function (c) { return inA(c) === spec.tg(c); }) : false;
    ui.work.textContent = n === 0 ? (spec.wt ? 'Click outcomes to choose event A. Out of ' + m + ', each outcome has its own count.' : 'Click outcomes to choose event A. ' + m + ' outcomes, all equally likely.') : 'P(A) = ' + n + '/' + m + (frac(n, m) !== n + '/' + m ? ' = ' + frac(n, m) : '') + ' ≈ ' + B.fmt(r3(p));
    var note = notA ? 'Not A: the other ' + q + ' outcomes. P(not A) = ' + q + '/' + m + ' = 1 − P(A). Together A and not A cover every outcome once, so P(A) + P(not A) = 1.' : n ? n + ' of the ' + m + (spec.wt ? '' : ' outcomes') + ' are in A.' : '';
    ui.note.textContent = note;
    var vars = { n: n, m: m, p: r3(p), q: q, k: notA ? 1 : 0, r: match ? 1 : 0, u: tri.u, c: hits, f: tri.u ? r3(hits / tri.u) : 0, e: tri.u ? r3(Math.abs(hits / tri.u - p)) : 1 };
    if (spec.trials) {
      ui.trial.textContent = tri.u === 0 ? 'No trials yet: press Run.' : 'Trial ' + tri.u + ': ' + spec.cells[tri.last].say + '. A happened ' + hits + ' times out of ' + tri.u + ': relative frequency ' + B.fmt(vars.f) + ' (P(A) ≈ ' + B.fmt(r3(p)) + ').';
      var labels = []; spec.cells.forEach(function (c) { if (labels.indexOf(c.label) < 0) labels.push(c.label); });
      if (spec.sum) labels.sort(function (x, y) { return Number(x) - Number(y); });
      var head = spec.sum ? 'Sum' : 'Outcome', rows = '<tr><th>' + head + '</th><th>Count</th><th>Relative frequency</th><th>Probability</th></tr>';
      labels.forEach(function (lb) { var ways = spec.cells.filter(function (c) { return c.label === lb; }).reduce(function (t, c) { return t + wOf(c); }, 0), ct = tally[lb] || 0; rows += '<tr><td>' + lb + '</td><td>' + ct + '</td><td>' + (tri.u ? B.fmt(r3(ct / tri.u)) : '–') + '</td><td>' + frac(ways, m) + '</td></tr>'; });
      ui.table.innerHTML = rows;
    }
    var text = ui.work.textContent + (note ? ' ' + note : '') + (spec.trials && tri.u ? ' ' + ui.trial.textContent : '');
    B.say(text);
    B.save({ sel: sel, notA: notA, view: view, tri: tri });
    B.post({ scope: { vars: vars, points: {} } }, text);
  }
  B.widget('events', {
    sections: ['board', 'gpanel'],
    label: function (s) { return s.second ? 'All the outcomes of two events' : 'All the outcomes of an event'; },
    parse: parse,
    redraw: function () { if (spec) report(); },
    resize: function () { if (spec) report(); },
    start: function (fresh) {
      spec = B.spec; rnd = spec.seedv !== null ? mulberry(spec.seedv) : Math.random;
      var sv = fresh ? null : B.saved();
      sel = {}; notA = false; view = spec.view0; tri = { u: 0, per: {}, last: -1 };
      if (sv && sv.sel) { sel = sv.sel; notA = !!sv.notA; view = sv.view || view; if (sv.tri && sv.tri.per) tri = sv.tri; }
      else { if (spec.ev) spec.cells.forEach(function (c) { if (spec.ev(c)) sel[c.i + ',' + c.j] = 1; }); notA = spec.compShown; }
      if (!spec.comp) notA = false;
      paintPanel(); report();
    },
  });
})(WPB);
