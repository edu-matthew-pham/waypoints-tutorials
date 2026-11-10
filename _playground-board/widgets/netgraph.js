// Netgraph: a network of junctions (nodes) joined by streets (edges), and a route students drive along it. Click a
// junction to start, then click the next junction (or the street itself) to drive down a street; a street already driven
// turns colour and can't be used again. The board shows every junction's degree (how many streets meet there), how many
// streets are used, how many junctions have an odd degree, and whether the network is connected, and says when a route
// has used every street exactly once (and whether it ended where it started). Use it for "can I drive every street once?".
//   widget: netgraph
//   node A: 1, 4             a junction: its name (a letter or short word) and where it sits (x right, y up, any scale;
//                            the board fits the whole network on screen). At least 2 junctions.
//   edge: A, B               a street joining two junctions (also "edge: A-B"); one line each
//   edges: A-B, B-C, C-A     the same, many streets at once, each written A-B and separated by commas
//   words: junction, street  what to call a node and an edge in the readouts (default junction, street; add s for plurals)
//   start: A                 the route must start here (it is placed there at the start); default: students choose
//   path: A, B, C            a route already driven when the board opens (for pictures); it must follow open streets
//   closed: A-B, C-D         streets closed at the start (drawn dashed; not counted)
//   change: on               students can close and open streets: buttons "Drive a route" and "Close a street"
//   show: degrees, used, odd, connected, mark
//                            what to show (default: degrees, used, odd, connected). degrees = the number on each junction;
//                            used = streets driven out of all open streets; odd = how many junctions have an odd degree;
//                            connected = yes or no; mark = ring the odd junctions on the picture (off by default)
// state: { scope: { vars: { e (streets driven), n (open streets in all), o (junctions with an odd degree),
//   c (1 when every junction can be reached from every other), d (1 when the route has driven every open street once),
//   t (1 when it also ends where it started), x (closed streets), k (junctions in all) } } }
// Checks: "d = 1", "d = 1 and t = 0", "t = 1", "o = 2 and c = 1", "x = 1 and d = 1", "e >= 3".
(function (B) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var W = 560, H = 330;
  var spec = null, path = [], closed = {}, mode = 'drive', ui = {}, focusNode = null, lastMsg = '';

  function add(parent, tag, at, text) {
    var e = document.createElementNS(NS, tag);
    Object.keys(at).forEach(function (k) { e.setAttribute(k, at[k]); });
    if (text !== undefined) e.textContent = text;
    parent.appendChild(e); return e;
  }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }
  function ekey(a, b) { return a < b ? a + '-' + b : b + '-' + a; }
  function listOf(v) { return String(v).split(',').map(function (x) { return x.trim(); }).filter(Boolean); }

  function parse(s) {
    var names = [], pos = [], idx = {};
    s.items.forEach(function (it) {
      if (it.kind !== 'node') return;
      if (!it.name) throw new Error('Line ' + it.line + ': a junction needs a name, such as "node A: 1, 4".');
      if (idx[it.name] !== undefined) throw new Error('Line ' + it.line + ': junction ' + it.name + ' is listed twice.');
      var xy = listOf(it.value).map(Number);
      if (xy.length !== 2 || xy.some(function (v) { return !isFinite(v); })) throw new Error('Line ' + it.line + ': write the place of ' + it.name + ' as "x, y", such as "node A: 1, 4".');
      idx[it.name] = names.length; names.push(it.name); pos.push(xy);
    });
    if (names.length < 2) throw new Error('A network needs at least two junctions ("node A: 0, 0").');
    var E = [], seen = {};
    var addEdge = function (text, line) {
      var p = String(text).split(/\s*[-,]\s*/).map(function (x) { return x.trim(); }).filter(Boolean);
      if (p.length !== 2) throw new Error('Line ' + line + ': write a street as "A, B" or "A-B" (got "' + text + '").');
      p.forEach(function (n) { if (idx[n] === undefined) throw new Error('Line ' + line + ': there is no junction ' + n + '.'); });
      var a = idx[p[0]], b = idx[p[1]];
      if (a === b) throw new Error('Line ' + line + ': a street needs two different junctions.');
      var k = ekey(a, b);
      if (seen[k] !== undefined) throw new Error('Line ' + line + ': the street ' + p[0] + '-' + p[1] + ' is listed twice.');
      seen[k] = E.length; E.push({ a: a, b: b, k: k });
    };
    s.items.forEach(function (it) {
      if (it.kind === 'edge') addEdge(it.value, it.line);
      else if (it.kind === 'edges') it.value.split(',').forEach(function (part) { addEdge(part, it.line); });
    });
    if (!E.length) throw new Error('A network needs at least one street ("edge: A, B").');
    s.names = names; s.pos = pos; s.idx = idx; s.E = E; s.at = seen;
    var w = listOf(s.words || 'junction, street');
    if (w.length !== 2) throw new Error('words: two words, such as "junction, street".');
    s.w = w;
    s.start = null;
    var st = (s.items.filter(function (it) { return it.kind === 'start'; }).pop() || {}).value;
    if (st !== undefined && st !== '') { if (idx[st.trim()] === undefined) throw new Error('start: there is no junction ' + st + '.'); s.start = idx[st.trim()]; }
    var sh = listOf(s.show || 'degrees, used, odd, connected').map(function (x) { return x.toLowerCase(); });
    sh.forEach(function (x) { if (['degrees', 'used', 'odd', 'connected', 'mark'].indexOf(x) < 0) throw new Error('show: degrees, used, odd, connected or mark (got "' + x + '").'); });
    s.show = {}; sh.forEach(function (x) { s.show[x] = true; });
    s.change = /^on$/i.test(s.change || '');
    s.closed0 = {};
    if (s.closed) s.closed.split(',').forEach(function (part) {
      var p = part.split('-').map(function (x) { return x.trim(); });
      if (p.length !== 2 || idx[p[0]] === undefined || idx[p[1]] === undefined || seen[ekey(idx[p[0]], idx[p[1]])] === undefined) throw new Error('closed: "' + part.trim() + '" is not a street of this network.');
      s.closed0[seen[ekey(idx[p[0]], idx[p[1]])]] = true;
    });
    s.path0 = [];
    if (s.path) {
      s.path0 = listOf(s.path).map(function (n) { if (idx[n] === undefined) throw new Error('path: there is no junction ' + n + '.'); return idx[n]; });
      var used = {};
      for (var i = 1; i < s.path0.length; i++) {
        var e = seen[ekey(s.path0[i - 1], s.path0[i])];
        if (e === undefined) throw new Error('path: there is no street from ' + names[s.path0[i - 1]] + ' to ' + names[s.path0[i]] + '.');
        if (s.closed0[e]) throw new Error('path: the street ' + names[s.path0[i - 1]] + '-' + names[s.path0[i]] + ' is closed.');
        if (used[e]) throw new Error('path: the street ' + names[s.path0[i - 1]] + '-' + names[s.path0[i]] + ' is used twice.');
        used[e] = true;
      }
      if (s.start !== null && s.path0.length && s.path0[0] !== s.start) throw new Error('path: it must start at ' + names[s.start] + '.');
    }
  }

  // ---- the numbers -------------------------------------------------------------------------------------------------
  function derive() {
    var n = spec.names.length, deg = [], i;
    for (i = 0; i < n; i++) deg.push(0);
    var open = 0, shut = 0;
    spec.E.forEach(function (e, k) { if (closed[k]) { shut++; return; } open++; deg[e.a]++; deg[e.b]++; });
    var odd = deg.filter(function (d) { return d % 2 === 1; }).length;
    // connected: every junction reachable from the first along open streets
    var seen = [0], mark = {}; mark[0] = true;
    while (seen.length) {
      var u = seen.pop();
      spec.E.forEach(function (e, k) {
        if (closed[k]) return;
        var v = e.a === u ? e.b : e.b === u ? e.a : -1;
        if (v >= 0 && !mark[v]) { mark[v] = true; seen.push(v); }
      });
    }
    var conn = Object.keys(mark).length === n;
    var usedK = {};
    for (i = 1; i < path.length; i++) usedK[spec.at[ekey(path[i - 1], path[i])]] = i;   // street -> step number
    var driven = Math.max(0, path.length - 1);
    var done = open > 0 && driven === open;
    var circuit = done && path[0] === path[path.length - 1];
    return { deg: deg, open: open, shut: shut, odd: odd, conn: conn, used: usedK, driven: driven, done: done, circuit: circuit };
  }

  // ---- moves -------------------------------------------------------------------------------------------------------
  function freshPath() { return spec.start !== null ? [spec.start] : []; }
  function say(text) { lastMsg = text; }
  function nodeName(j) { return spec.names[j]; }
  function driveTo(j) {
    var d = derive();
    B.moved = true;
    if (!path.length) { path = [j]; say(''); return report(); }
    var cur = path[path.length - 1];
    if (j === cur) { say('You are at ' + nodeName(j) + ' already. Pick the next ' + spec.w[0] + '.'); return report(true); }
    var k = spec.at[ekey(cur, j)];
    if (k === undefined) say('There is no ' + spec.w[1] + ' from ' + nodeName(cur) + ' to ' + nodeName(j) + '.');
    else if (closed[k]) say('The ' + spec.w[1] + ' ' + nodeName(cur) + '-' + nodeName(j) + ' is closed.');
    else if (d.used[k]) say('You have already driven ' + nodeName(cur) + '-' + nodeName(j) + '. Each ' + spec.w[1] + ' can be used once.');
    else { path.push(j); say(''); }
    report();
  }
  function clickStreet(k) {
    var e = spec.E[k];
    if (mode === 'close') {
      B.moved = true; if (closed[k]) delete closed[k]; else closed[k] = true;
      path = freshPath(); say('The route was cleared because the ' + spec.w[1] + 's changed.'); return report();
    }
    if (!path.length) { say('Click a ' + spec.w[0] + ' to start your route first.'); return report(true); }
    var cur = path[path.length - 1];
    if (e.a !== cur && e.b !== cur) { say('That ' + spec.w[1] + ' does not leave ' + nodeName(cur) + '.'); return report(true); }
    driveTo(e.a === cur ? e.b : e.a);
  }
  function clickNode(j) { if (mode === 'close') { say('Click a ' + spec.w[1] + ' to close or open it.'); return report(true); } driveTo(j); }
  function undo() {
    var floor = spec.start !== null ? 1 : 0;
    if (path.length > floor) { path.pop(); B.moved = true; say(''); }
    report();
  }
  function clear() { path = freshPath(); B.moved = true; say(''); report(); }

  // ---- drawing -----------------------------------------------------------------------------------------------------
  function layout() {
    var xs = spec.pos.map(function (p) { return p[0]; }), ys = spec.pos.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs), y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
    var m = 44, sx = (W - 2 * m) / ((x1 - x0) || 1), sy = (H - 2 * m) / ((y1 - y0) || 1), sc = Math.min(sx, sy, 110);
    var ox = (W - (x1 - x0) * sc) / 2, oy = (H - (y1 - y0) * sc) / 2;
    return spec.pos.map(function (p) { return [ox + (p[0] - x0) * sc, H - (oy + (p[1] - y0) * sc)]; });
  }
  function describe(d) {
    var parts = spec.names.map(function (nm, j) { return nm + ' has ' + plural(d.deg[j], 'street'); });
    return 'A network of ' + plural(spec.names.length, spec.w[0]) + ' and ' + plural(spec.E.length, spec.w[1]) + (d.shut ? ' (' + d.shut + ' closed)' : '') + '. ' + parts.join('; ') + '.' + (path.length ? ' Route so far: ' + path.map(nodeName).join(', ') + '.' : '');
  }
  function draw(d) {
    var el = B.el('board'), prev = document.activeElement && document.activeElement.getAttribute ? document.activeElement.getAttribute('data-ng') : null;
    el.replaceChildren();
    var ink = B.css('--ink') || '#1d2430', muted = B.css('--muted') || '#5d6675', line = B.css('--line') || '#e4e1da', card = B.css('--card') || '#fff',
      accent = B.css('--accent') || '#c2570a', left = B.css('--left') || '#2f6fb3', font = 'system-ui, sans-serif';
    var P = layout();
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.setAttribute('class', 'ngsvg'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', describe(d));
    var cur = path.length ? path[path.length - 1] : -1;
    // streets first, so the junctions sit on top
    spec.E.forEach(function (e, k) {
      var a = P[e.a], b = P[e.b], shut = !!closed[k], step = d.used[k];
      var g = add(svg, 'g', { class: 'ngedge' });
      add(g, 'line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: shut ? muted : step ? accent : muted, 'stroke-width': step ? 7 : 5, 'stroke-linecap': 'round', 'stroke-dasharray': shut ? '3 9' : 'none', opacity: shut ? 0.4 : step ? 1 : 0.55 });
      var hit = add(g, 'line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: 'transparent', 'stroke-width': 22, 'stroke-linecap': 'round' });
      hit.style.cursor = 'pointer'; hit.addEventListener('click', function () { clickStreet(k); });
      if (step) {
        var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
        add(g, 'circle', { cx: mx, cy: my, r: 11, fill: card, stroke: accent, 'stroke-width': 2 });
        add(g, 'text', { x: mx, y: my + 5, 'text-anchor': 'middle', 'font-size': 14, 'font-weight': 700, 'font-family': font, fill: ink }, String(step));
      }
    });
    spec.names.forEach(function (nm, j) {
      var p = P[j], isCur = j === cur, odd = d.deg[j] % 2 === 1;
      var g = add(svg, 'g', { class: 'ngnode', tabindex: 0, role: 'button', 'data-ng': String(j), 'aria-label': spec.w[0] + ' ' + nm + ', ' + plural(d.deg[j], 'street') + (isCur ? ', you are here' : '') });
      g.style.cursor = 'pointer';
      if (spec.show.mark && odd) add(g, 'circle', { cx: p[0], cy: p[1], r: 29, fill: 'none', stroke: left, 'stroke-width': 3, 'stroke-dasharray': '5 4' });
      if (isCur) add(g, 'circle', { cx: p[0], cy: p[1], r: 26, fill: 'none', stroke: accent, 'stroke-width': 4 });
      add(g, 'circle', { cx: p[0], cy: p[1], r: 19, fill: isCur ? accent : card, stroke: ink, 'stroke-width': 2.5 });
      add(g, 'text', { x: p[0], y: p[1] + 6, 'text-anchor': 'middle', 'font-size': nm.length > 2 ? 12 : 17, 'font-weight': 700, 'font-family': font, fill: isCur ? card : ink }, nm);
      if (spec.show.degrees) {
        add(g, 'circle', { cx: p[0] + 20, cy: p[1] - 20, r: 10, fill: ink });
        add(g, 'text', { x: p[0] + 20, y: p[1] - 15.5, 'text-anchor': 'middle', 'font-size': 13, 'font-weight': 700, 'font-family': font, fill: card }, String(d.deg[j]));
      }
      if (spec.start !== null && j === spec.start) add(g, 'text', { x: p[0], y: p[1] + 38, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 700, 'font-family': font, fill: muted }, 'start');
      g.addEventListener('click', function () { focusNode = j; clickNode(j); });
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focusNode = j; clickNode(j); } });
    });
    el.appendChild(svg);
    if (prev !== null) { var back = svg.querySelector('[data-ng="' + prev + '"]'); if (back) back.focus(); }
  }

  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = {};
    var inject = document.getElementById('ngstyle');
    if (!inject) {
      inject = document.createElement('style'); inject.id = 'ngstyle';
      inject.textContent = '.ngsvg{width:100%;height:100%;display:block}.ngrow{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:6px 0 0}' +
        '.ngrow button{font:600 13px/1 system-ui,sans-serif;padding:7px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
        '.ngrow button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:transparent}' +
        '.ngrow button:focus-visible,.ngnode:focus-visible{outline:3px solid var(--accent);outline-offset:2px}';
      document.head.appendChild(inject);
    }
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); ui.work.style.fontSize = '15px'; panel.appendChild(ui.work);
    var btn = function (row, label, fn, aria) { var b = document.createElement('button'); b.type = 'button'; b.textContent = label; if (aria) b.setAttribute('aria-label', aria); b.addEventListener('click', fn); row.appendChild(b); return b; };
    if (spec.change) {
      var mrow = document.createElement('div'); mrow.className = 'ngrow'; mrow.setAttribute('role', 'group'); mrow.setAttribute('aria-label', 'What a click does');
      ui.mDrive = btn(mrow, 'Drive a route', function () { mode = 'drive'; say(''); report(); });
      ui.mClose = btn(mrow, 'Close a ' + spec.w[1], function () { mode = 'close'; say(''); report(); });
      panel.appendChild(mrow);
    }
    ui.moves = document.createElement('div'); ui.moves.className = 'ngrow'; ui.moves.setAttribute('role', 'group'); ui.moves.setAttribute('aria-label', 'Move row: pick a ' + spec.w[0]);
    panel.appendChild(ui.moves);
    ui.streets = document.createElement('div'); ui.streets.className = 'ngrow'; ui.streets.setAttribute('role', 'group'); ui.streets.setAttribute('aria-label', 'Close or open a ' + spec.w[1]);
    panel.appendChild(ui.streets);
    var row = document.createElement('div'); row.className = 'ngrow';
    btn(row, 'Undo a step', undo); btn(row, 'Clear route', clear); btn(row, 'Start again', B.restart);
    panel.appendChild(row);
  }
  function paintButtons(d) {
    var cur = path.length ? path[path.length - 1] : -1;
    var ae = document.activeElement, keep = null;   // keep keyboard focus on the same button after the rows are rebuilt
    if (ae && ae.parentNode === ui.moves) keep = ['m', Array.prototype.indexOf.call(ui.moves.children, ae)];
    else if (ae && ae.parentNode === ui.streets) keep = ['s', Array.prototype.indexOf.call(ui.streets.children, ae)];
    var close = mode === 'close';
    ui.moves.hidden = close; ui.streets.hidden = !close;
    ui.moves.replaceChildren();
    spec.names.forEach(function (nm, j) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = nm;
      b.setAttribute('aria-label', (cur < 0 ? 'Start at ' : 'Drive to ') + nm);
      b.addEventListener('click', function () { driveTo(j); });
      ui.moves.appendChild(b);
    });
    ui.streets.replaceChildren();
    spec.E.forEach(function (e, k) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = nodeName(e.a) + '-' + nodeName(e.b);
      b.setAttribute('aria-pressed', String(!!closed[k])); b.setAttribute('aria-label', (closed[k] ? 'Open ' : 'Close ') + spec.w[1] + ' ' + nodeName(e.a) + ' to ' + nodeName(e.b));
      b.addEventListener('click', function () { clickStreet(k); });
      ui.streets.appendChild(b);
    });
    if (keep) { var rowEl = keep[0] === 'm' ? ui.moves : ui.streets; if (!rowEl.hidden && rowEl.children[keep[1]]) rowEl.children[keep[1]].focus(); }
    if (ui.mDrive) { ui.mDrive.setAttribute('aria-pressed', String(!close)); ui.mClose.setAttribute('aria-pressed', String(close)); }
  }

  function report(keep) {
    var d = derive(), cur = path.length ? path[path.length - 1] : -1;
    draw(d); paintButtons(d);
    var bits = [];
    if (spec.show.used) bits.push('Used ' + d.driven + ' of ' + plural(d.open, spec.w[1]));
    if (spec.show.odd) bits.push('Odd ' + spec.w[0] + 's: ' + d.odd);
    if (spec.show.connected) bits.push('Connected: ' + (d.conn ? 'yes' : 'no'));
    ui.work.textContent = bits.join('  ·  ');
    var msg = lastMsg;
    if (!msg) {
      if (mode === 'close') msg = 'Click a ' + spec.w[1] + ' to close it, or click a closed one to open it again.';
      else if (!path.length) msg = 'Click a ' + spec.w[0] + ' to start your route.';
      else if (d.done) msg = d.circuit ? 'Every ' + spec.w[1] + ' once, and you are back where you started.' : 'Every ' + spec.w[1] + ' once, ending at ' + nodeName(cur) + ', not where you started.';
      else {
        var stuck = !spec.E.some(function (e, k) { return !closed[k] && !d.used[k] && (e.a === cur || e.b === cur); });
        msg = stuck ? 'Stuck at ' + nodeName(cur) + ': no unused ' + spec.w[1] + ' leaves it. Undo a step, or clear the route.' : 'You are at ' + nodeName(cur) + '. Pick the next ' + spec.w[0] + '.';
      }
    }
    lastMsg = '';
    var vars = { e: d.driven, n: d.open, o: d.odd, c: d.conn ? 1 : 0, d: d.done ? 1 : 0, t: d.circuit ? 1 : 0, x: d.shut, k: spec.names.length };
    B.say(msg, d.done);
    B.save({ path: path.slice(), closed: Object.keys(closed).map(Number), mode: mode });
    B.post({ scope: { vars: vars, points: {} } }, ui.work.textContent + ' ' + msg);
  }

  B.widget('netgraph', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'A network of ' + s.names.length + ' ' + s.w[0] + 's and ' + s.E.length + ' ' + s.w[1] + 's'; },
    parse: parse,
    redraw: function () { if (spec) report(true); },
    resize: function () { if (spec) report(true); },
    start: function (fresh) {
      spec = B.spec; var sv = fresh ? null : B.saved();
      closed = {}; mode = 'drive'; lastMsg = '';
      if (sv && sv.path) {
        path = sv.path.slice(); (sv.closed || []).forEach(function (k) { closed[k] = true; }); mode = spec.change && sv.mode === 'close' ? 'close' : 'drive';
      } else {
        Object.keys(spec.closed0).forEach(function (k) { closed[k] = true; });
        path = spec.path0.length ? spec.path0.slice() : freshPath();
      }
      paintPanel(); report();
    },
  });
})(WPB);
