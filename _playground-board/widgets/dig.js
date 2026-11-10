// A made-up archaeological dig seen from the side: layers listed top first, each with its finds (History, How we know,
// AC9HH7K08 n1). Buttons only, no dragging; every layer and find is named in words, never by colour alone.
//   widget: dig
//   mode: order | pit | date | build
//   site: A made-up dig            heading shown on the board
//   layer C: new floor, cooking pots   one line per layer, TOP FIRST; the name, then its finds
//   layer B: charcoal, burnt roof wood
//   layer A: earlier floor, pottery
//   dig: on                        layers start covered; "Dig down one layer" uncovers the top one, then the next
//   pit: C-A, coin                 a pit cut from the top of C down into A, with a find in its fill
//   find: B, coin, 220 BCE         date mode: a find with a year, in layer B
// Modes:
//   order  number the layers from the one that formed first. Values n_dug, n_set, n_wrong, in_order (1 when every
//          layer is numbered, oldest at the bottom).
//   pit    click a find and say whether it is older, about the same age, or younger than the layer around it.
//          Values n_found (1 when the find in the pit is marked younger), n_stray (other finds marked older or younger),
//          n_judged.
//   date   for each layer: "That year or later" or "Can't tell from the coin". The find's layer and every layer above
//          it formed that year or later; layers below cannot be dated by it (a coin can be old when it is dropped).
//          Values n_right, n_wrong.
//   build  for Explain clips: "Lay down the next layer" adds layers from the bottom up, then "Dig the pit" cuts the
//          pit (when there is one). Values n_laid, pit_dug.
(function (B) {
  'use strict';
  var spec, st, ui = {};
  var FILL = ['#d9c39a', '#a8917a', '#c8a77e', '#bfae8f', '#d2b48c', '#9e8c76'];   // earth tones, top to bottom
  var CSS = '.wpt-dgwrap{display:flex;flex-direction:column;gap:8px;padding:10px}.wpt-dghead{margin:0;font-weight:600}' +
    '.wpt-dgnote{margin:0;font-size:13px;color:var(--muted)}.wpt-dgsurf{font-size:12px;color:var(--muted);margin:0 0 -4px}' +
    '.wpt-dgstack{border:2px solid var(--line);border-radius:6px;overflow:hidden}' +
    '.wpt-dgrow{display:grid;grid-template-columns:minmax(0,1fr) var(--pw,0px);min-height:64px}' +
    '.wpt-dglay{padding:8px 10px;color:#202422;display:flex;flex-direction:column;gap:6px;border-top:1px solid rgba(0,0,0,.18)}' +
    '.wpt-dgrow:first-child .wpt-dglay,.wpt-dgrow:first-child .wpt-dgpit{border-top:0}' +
    '.wpt-dgname{font-weight:700;font-size:14px}.wpt-dgfinds{display:flex;flex-wrap:wrap;gap:6px}' +
    '.wpt-dgfind{font:inherit;font-size:13px;padding:3px 8px;border-radius:12px;border:1px solid rgba(0,0,0,.35);background:rgba(255,255,255,.75);color:#202422}' +
    'button.wpt-dgfind{cursor:pointer}button.wpt-dgfind.wpt-dgsel{outline:3px solid #202422;outline-offset:1px}' +
    '.wpt-dgcov{background:repeating-linear-gradient(45deg,#7d6b58,#7d6b58 6px,#6f5e4c 6px,#6f5e4c 12px);color:#fff;justify-content:center}' +
    '.wpt-dgpit{border-top:1px solid rgba(0,0,0,.18);border-left:2px dashed #202422;border-right:2px dashed #202422;' +
    'background:repeating-linear-gradient(-45deg,#e9e0cf,#e9e0cf 5px,#d8ccb5 5px,#d8ccb5 10px);color:#202422;padding:6px 4px;font-size:12px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px}' +
    '.wpt-dgpit.wpt-dgpitbot{border-bottom:2px dashed #202422}.wpt-dgnopit{border-top:1px solid rgba(0,0,0,.18)}' +
    '.wpt-dgctl{display:flex;flex-wrap:wrap;gap:6px;align-items:center}.wpt-dgctl span{font-size:13px}' +
    '.wpt-dgctl button,.wpt-dgdig button{font:inherit;font-size:13px;font-weight:600;padding:5px 10px;border-radius:8px;border:1px solid rgba(0,0,0,.35);background:#fff;color:#202422;cursor:pointer}' +
    '.wpt-dgctl button[aria-pressed=true]{background:#202422;color:#fff}' +
    '.wpt-dgdig{display:flex;flex-wrap:wrap;gap:8px}.wpt-dgdig button{flex:1 1 180px;padding:8px 10px;border-color:var(--line);background:var(--card);color:var(--ink)}' +
    '.wpt-dgdig button:disabled{opacity:.45;cursor:default}' +
    '.wpt-dgwrap button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}';
  var ORD = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
  var JUDGE = [['older', 'Older than the layer around it'], ['same', 'About the same age'], ['younger', 'Younger than the layer around it']];
  var DATE = [['later', 'That year or later'], ['cant', 'Can\'t tell from the coin']];

  function style() { if (document.getElementById('dgcss')) return; var s = document.createElement('style'); s.id = 'dgcss'; s.textContent = CSS; document.head.appendChild(s); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(text, cls, fn, key) { var b = el('button', cls, text); b.type = 'button'; b.setAttribute('data-k', key || text); b.addEventListener('click', fn); return b; }
  function list(v) { return String(v || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean); }

  function parse(s) {
    s.mode = String(s.mode || 'order').trim().toLowerCase();
    if (['order', 'pit', 'date', 'build'].indexOf(s.mode) < 0) throw new Error('mode: order, pit, date or build.');
    s.layers = s.items.filter(function (it) { return it.kind === 'layer'; }).map(function (it) {
      if (!it.name) throw new Error('Line ' + it.line + ': name the layer, as in "layer C: charcoal, burnt wood".');
      var f = list(it.value); if (!f.length) throw new Error('Line ' + it.line + ': give the layer at least one find or a description.');
      return { id: it.name, what: f };
    });
    if (s.layers.length < 2 || s.layers.length > 6) throw new Error('2 to 6 "layer" lines, top first.');
    var ids = s.layers.map(function (l) { return l.id.toLowerCase(); });
    var at = function (id, key) { var i = ids.indexOf(String(id).trim().toLowerCase()); if (i < 0) throw new Error(key + ': no layer called "' + id + '".'); return i; };
    s.site = String(s.site || 'A made-up dig').trim();
    s.dig0 = /^on$/i.test(String(s.dig || 'off').trim());
    s.pitAt = null;
    if (s.pit) {
      var m = /^\s*([A-Za-z]\w*)\s*-\s*([A-Za-z]\w*)\s*,\s*(.+?)\s*$/.exec(s.pit);
      if (!m) throw new Error('pit: the top layer, a dash, the bottom layer, then the find in it, as in "C-A, coin".');
      var top = at(m[1], 'pit'), bot = at(m[2], 'pit');
      if (top !== 0) throw new Error('pit: a pit is dug from the surface, so it starts at the top layer (' + s.layers[0].id + ').');
      if (bot <= top) throw new Error('pit: the bottom layer must be below the top one.');
      s.pitAt = { bot: bot, find: m[3] };
    }
    if (s.mode === 'pit' && !s.pitAt) throw new Error('pit mode needs a "pit:" line.');
    s.dated = null;
    if (s.find) {
      var f2 = list(s.find); if (f2.length !== 3) throw new Error('find: the layer, what it is, and its year, as in "B, coin, 220 BCE".');
      s.dated = { at: at(f2[0], 'find'), what: f2[1], year: f2[2] };
    }
    if (s.mode === 'date' && !s.dated) throw new Error('date mode needs a "find:" line.');
  }

  function fresh() { return { dug: spec.dig0 ? 0 : spec.layers.length, laid: 0, pitDug: false, num: {}, judge: {}, date: {}, sel: null }; }
  function nL() { return spec.layers.length; }
  function shown(i) { return spec.mode === 'build' ? i >= nL() - st.laid : i < st.dug; }
  function hasPit() { return !!spec.pitAt && (spec.mode !== 'build' || st.pitDug); }

  function values() {
    var v = { n_dug: st.dug }, n = nL();
    if (spec.mode === 'order') {
      var set = 0, wrong = 0, seen = {};
      spec.layers.forEach(function (l, i) {
        var k = st.num[l.id]; if (!k) return; set++; seen[k] = (seen[k] || 0) + 1;
        if (k !== n - i) wrong++;   // the bottom layer formed first
      });
      v.n_set = set; v.n_wrong = wrong; v.in_order = st.dug === n && set === n && wrong === 0 ? 1 : 0;
    } else if (spec.mode === 'pit') {
      var stray = 0, judged = 0;
      Object.keys(st.judge).forEach(function (k) { judged++; if (k !== 'pit' && st.judge[k] !== 'same') stray++; });
      v.n_found = st.judge.pit === 'younger' ? 1 : 0; v.n_stray = stray; v.n_judged = judged;
    } else if (spec.mode === 'date') {
      var right = 0, bad = 0;
      spec.layers.forEach(function (l, i) {
        var c = st.date[l.id]; if (!c) return;
        if (c === (i <= spec.dated.at ? 'later' : 'cant')) right++; else bad++;
      });
      v.n_right = right; v.n_wrong = bad;
    } else { v.n_laid = st.laid; v.pit_dug = st.pitDug ? 1 : 0; }
    return v;
  }
  function summary(v) {
    var n = nL();
    if (spec.mode === 'build') return st.laid < n ? (st.laid ? st.laid + ' of ' + n + ' layers laid down. Each new layer goes on top.' : 'Nothing laid down yet.') : st.pitDug ? 'A pit has been dug down through the layers. The ' + spec.pitAt.find + ' in it is younger than the layers it cuts.' : 'All ' + n + ' layers laid down. The bottom one formed first.';
    if (st.dug < n) return 'Dug ' + st.dug + ' of ' + n + ' layers.';
    if (spec.mode === 'order') return v.n_set < n ? 'Numbered ' + v.n_set + ' of ' + n + ' layers.' : 'All ' + n + ' layers numbered.';
    if (spec.mode === 'pit') return v.n_judged ? 'You have judged ' + v.n_judged + (v.n_judged === 1 ? ' find.' : ' finds.') : 'Click a find to judge its age.';
    var c = Object.keys(st.date).length; return c < n ? 'Chosen for ' + c + ' of ' + n + ' layers.' : 'Chosen for all ' + n + ' layers.';
  }
  function change() { B.moved = true; draw(); report(); }

  function rowFor(l, i, pitW) {
    var row = el('div', 'wpt-dgrow'); row.style.setProperty('--pw', pitW);
    var lay = el('div', 'wpt-dglay'); row.appendChild(lay);
    var pitCell = null;
    if (pitW !== '0px') {
      var inPit = hasPit() && i <= spec.pitAt.bot && shown(i);
      pitCell = el('div', inPit ? 'wpt-dgpit' + (i === spec.pitAt.bot ? ' wpt-dgpitbot' : '') : 'wpt-dgnopit');
      if (!inPit) pitCell.style.background = shown(i) ? FILL[i % FILL.length] : '';
      row.appendChild(pitCell);
    }
    if (!shown(i)) {
      lay.className += ' wpt-dgcov'; lay.textContent = spec.mode === 'build' ? 'Not laid down yet' : 'Not dug yet';
      if (pitCell) pitCell.className = 'wpt-dglay wpt-dgcov';
      return row;
    }
    lay.style.background = FILL[i % FILL.length];
    lay.appendChild(el('span', 'wpt-dgname', 'Layer ' + l.id));
    var finds = el('div', 'wpt-dgfinds');
    l.what.forEach(function (w, k) {
      var key = l.id + ':' + k;
      if (spec.mode === 'pit') {
        var b = btn(w, 'wpt-dgfind' + (st.sel === key ? ' wpt-dgsel' : ''), function () { st.sel = st.sel === key ? null : key; draw(); }, 'f' + key);
        b.setAttribute('aria-label', w + ', in layer ' + l.id + (st.judge[key] ? ', marked ' + label(st.judge[key]) : '') + '. Press to judge its age.');
        finds.appendChild(b);
      } else finds.appendChild(el('span', 'wpt-dgfind', w));
    });
    if (spec.dated && spec.dated.at === i) finds.appendChild(el('span', 'wpt-dgfind', spec.dated.what + ' made in ' + spec.dated.year));
    lay.appendChild(finds);
    if (pitCell && hasPit() && i === 0) pitCell.appendChild(el('span', '', 'Pit'));
    if (pitCell && hasPit() && i === spec.pitAt.bot) {
      if (spec.mode === 'pit') {
        var pb = btn(spec.pitAt.find, 'wpt-dgfind' + (st.sel === 'pit' ? ' wpt-dgsel' : ''), function () { st.sel = st.sel === 'pit' ? null : 'pit'; draw(); }, 'fpit');
        pb.setAttribute('aria-label', spec.pitAt.find + ', in the pit' + (st.judge.pit ? ', marked ' + label(st.judge.pit) : '') + '. Press to judge its age.');
        pitCell.appendChild(pb);
      } else pitCell.appendChild(el('span', 'wpt-dgfind', spec.pitAt.find));
    }
    // controls for this layer
    if (spec.mode === 'order' && st.dug === nL()) {
      var c = el('div', 'wpt-dgctl'); c.appendChild(el('span', '', 'Formed:'));
      var k2 = st.num[l.id];
      var ob = btn(k2 ? ORD[k2 - 1] : 'not set', '', function () { var x = (st.num[l.id] || 0) + 1; if (x > nL()) delete st.num[l.id]; else st.num[l.id] = x; change(); }, 'o' + l.id);
      ob.setAttribute('aria-label', 'Layer ' + l.id + ' formed: ' + (k2 ? ORD[k2 - 1] : 'not set') + '. Press to change.');
      c.appendChild(ob); lay.appendChild(c);
    }
    if (spec.mode === 'date') {
      var d = el('div', 'wpt-dgctl');
      DATE.forEach(function (o) {
        var db = btn(o[1], '', function () { if (st.date[l.id] === o[0]) delete st.date[l.id]; else st.date[l.id] = o[0]; change(); }, 'd' + l.id + o[0]);
        db.setAttribute('aria-pressed', st.date[l.id] === o[0] ? 'true' : 'false'); db.setAttribute('aria-label', 'Layer ' + l.id + ': ' + o[1]);
        d.appendChild(db);
      });
      lay.appendChild(d);
    }
    if (spec.mode === 'pit') {
      var sel = st.sel && (st.sel === 'pit' ? (i === spec.pitAt.bot) : st.sel.split(':')[0] === l.id);
      if (sel) {
        var j = el('div', 'wpt-dgctl'); j.appendChild(el('span', '', (st.sel === 'pit' ? spec.pitAt.find : l.what[Number(st.sel.split(':')[1])]) + ':'));
        JUDGE.forEach(function (o) {
          var jb = btn(o[1], '', function () { var key = st.sel; if (st.judge[key] === o[0]) delete st.judge[key]; else st.judge[key] = o[0]; change(); }, 'j' + o[0]);
          jb.setAttribute('aria-pressed', st.judge[st.sel] === o[0] ? 'true' : 'false');
          j.appendChild(jb);
        });
        lay.appendChild(j);
      }
    }
    return row;
  }
  function label(k) { var o = JUDGE.filter(function (x) { return x[0] === k; })[0]; return o ? o[1].toLowerCase() : k; }

  function draw() {
    var host = B.el('board'), ae = document.activeElement, fk = ae && host.contains(ae) ? ae.getAttribute('data-k') : null;
    host.replaceChildren(); host.style.overflowY = 'auto';
    var w = el('div', 'wpt-dgwrap');
    w.appendChild(el('p', 'wpt-dghead', spec.site));
    if (spec.note) w.appendChild(el('p', 'wpt-dgnote', spec.note));
    w.appendChild(el('p', 'wpt-dgsurf', 'Surface ↓ deeper'));
    var stack = el('div', 'wpt-dgstack'); stack.setAttribute('role', 'group'); stack.setAttribute('aria-label', 'The layers, top first');
    var pitW = spec.pitAt ? '84px' : '0px';
    spec.layers.forEach(function (l, i) { stack.appendChild(rowFor(l, i, pitW)); });
    w.appendChild(stack);
    var dig = el('div', 'wpt-dgdig');
    if (spec.mode === 'build') {
      var lb = btn('Lay down the next layer', '', function () { if (st.laid < nL()) { st.laid++; change(); } }); lb.disabled = st.laid >= nL(); dig.appendChild(lb);
      if (spec.pitAt) { var pb = btn('Dig the pit', '', function () { if (st.laid === nL() && !st.pitDug) { st.pitDug = true; change(); } }); pb.disabled = st.laid < nL() || st.pitDug; dig.appendChild(pb); }
    } else if (spec.dig0) {
      var db = btn('Dig down one layer', '', function () { if (st.dug < nL()) { st.dug++; change(); } }); db.disabled = st.dug >= nL(); dig.appendChild(db);
    }
    if (dig.children.length) w.appendChild(dig);
    host.appendChild(w);
    if (fk) { var back = host.querySelector('[data-k="' + fk.replace(/"/g, '') + '"]'); if (back) back.focus(); }
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = el('p', 'rulework'); ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    var bar = el('div', 'gbar bbar'); var again = el('button', 'quiet', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function report() {
    var v = values(), text = summary(v);
    ui.work.textContent = text; B.say(text);
    B.save({ st: { dug: st.dug, laid: st.laid, pitDug: st.pitDug, num: st.num, judge: st.judge, date: st.date } });
    B.post({ scope: { vars: v, points: {} } }, text);
  }
  B.widget('dig', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'A dig seen from the side: ' + (s.site || 'a made-up dig'); },
    parse: parse,
    redraw: function () { if (spec) draw(); },
    resize: function () {},
    start: function (isFresh) {
      spec = B.spec; style(); st = fresh();
      var sv = isFresh ? null : B.saved();
      if (sv && sv.st) ['dug', 'laid', 'pitDug', 'num', 'judge', 'date'].forEach(function (k) { if (sv.st[k] !== undefined) st[k] = sv.st[k]; });
      paintPanel(); draw(); report();
    },
  });
})(WPB);
