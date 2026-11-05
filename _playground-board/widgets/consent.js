// The Coding Club app's new AI helper (made up, as in Cyber safety and privacy): where a chat goes, and its consent
// screen. NOT a real company's screen: modelled on common patterns (a big Agree button, a small "Manage choices"
// link, training switched on by default).
//   widget: consent
//   mode: trace | screen
// mode: trace   Follow one question Ava types to Club Helper, stage by stage, with Ava's settings beside it.
//   Values: s (stages opened, 0 to 5), t (1 when "use my chats to improve the AI" is on), k (1 when chat history is
//           kept), r (1 when the reviewers stage has been opened)
// mode: screen  The consent screen. Read it, mark the line that matters most, open Manage choices, set the switches,
//               then continue.
//   Values: g (1 when the training line is marked), o (1 when Manage choices has been opened), t (1 when training is
//           on), c (1 when Ava has continued), q (1 when she pressed Agree without opening anything)
(function (B) {
  'use strict';
  var spec, st, ui = {};
  var STAGES = [
    { n: '1. Ava types', d: 'Ava types: "Can you help me plan the club\'s robot competition?" She adds her full name and her school so the plan looks right.' },
    { n: '2. Sent', d: 'The question travels to the company\'s computers (with HTTPS, so others on the network can\'t read it on the way).' },
    { n: '3. Stored', d: 'The company keeps the chat. With chat history on, it is kept until Ava deletes it. With it off, it is deleted after 30 days.' },
    { n: '4. Reviewed', d: 'A small number of chats may be read by people at the company to check the AI is working safely.' },
    { n: '5. Training', d: 'If "Use my chats to improve the AI" is on, the chat may become an example the next version of the AI learns from. Once learned from, it can\'t easily be taken back out.' },
  ];
  var LINES = [
    { k: 'intro', t: 'Welcome to Club Helper, your AI assistant for club projects!' },
    { k: 'store', t: 'We store your chats so you can come back to them.' },
    { k: 'train', t: 'By selecting Agree, you allow us to use your chats to train and improve our AI models.' },
    { k: 'review', t: 'Some chats may be reviewed by our team for safety.' },
    { k: 'change', t: 'You can change your choices at any time in Settings.' },
  ];
  var CSS = '.cswrap{display:flex;flex-direction:column;gap:10px;padding:10px}.csintro{margin:0;color:var(--muted)}' +
    '.csgrid{display:grid;grid-template-columns:minmax(220px,1.4fr) minmax(200px,1fr);gap:12px}@media(max-width:620px){.csgrid{grid-template-columns:1fr}}' +
    '.csbox{border:2px solid var(--line);border-radius:10px;padding:8px 10px;background:var(--card)}.csbox h3{margin:0 0 6px;font-size:16px}' +
    '.csstage{display:block;width:100%;text-align:left;font:inherit;padding:6px 8px;margin:4px 0;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
    '.csstage[aria-expanded=true]{border-color:var(--accent)}.csstage p{margin:4px 0 0;font-weight:400}.csstage b{font-weight:600}' +
    '.cssw{display:flex;justify-content:space-between;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--line)}' +
    '.cssw button,.csbtns button{font:inherit;padding:6px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
    '.cssw button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}' +
    '.csstage:focus-visible,.cssw button:focus-visible,.csbtns button:focus-visible,.csline:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.csphone{max-width:360px;margin:0 auto;border:2px solid var(--line);border-radius:18px;padding:14px;background:var(--card)}' +
    '.csphone h3{margin:0 0 8px}.csline{display:block;width:100%;text-align:left;font:inherit;font-size:13px;color:var(--muted);background:none;border:1px dashed transparent;border-radius:6px;padding:3px 4px;cursor:pointer}' +
    '.csline[aria-pressed=true]{border-color:var(--accent);color:var(--ink);background:rgba(194,87,10,.08)}' +
    '.csbtns{display:flex;flex-direction:column;gap:6px;margin-top:10px}.csbtns .agree{background:var(--accent);color:#fff;border-color:var(--accent);font-weight:700;padding:10px}' +
    '.csbtns .small{border:none;background:none;color:var(--muted);text-decoration:underline;font-size:13px;padding:2px}.csdone{font-weight:600}.csnote{font-size:13px;color:var(--muted);margin:6px 0 0}';
  function style() { if (document.getElementById('cscss')) return; var s = document.createElement('style'); s.id = 'cscss'; s.textContent = CSS; document.head.appendChild(s); }
  function h(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function act(fn) { return function () { fn(); B.moved = true; draw(); report(); }; }
  function sw(label, on, fn) {
    var row = h('div', 'cssw'); row.appendChild(h('span', '', label));
    var b = h('button', '', on ? 'On' : 'Off'); b.type = 'button'; b.setAttribute('aria-pressed', String(on)); b.setAttribute('aria-label', label);
    b.addEventListener('click', act(fn)); row.appendChild(b); return row;
  }
  function settings(box) {
    box.appendChild(sw('Use my chats to improve the AI', st.train, function () { st.train = !st.train; }));
    box.appendChild(sw('Keep my chat history', st.hist, function () { st.hist = !st.hist; }));
  }

  function drawTrace(wrap) {
    wrap.appendChild(h('p', 'csintro', 'The Coding Club app has a new AI helper, Club Helper (made up). Follow one of Ava\'s questions from her screen to the company. Open each stage.'));
    var grid = h('div', 'csgrid');
    var left = h('div', 'csbox'); left.appendChild(h('h3', '', 'Where Ava\'s question goes'));
    STAGES.forEach(function (s, i) {
      var b = h('button', 'csstage'); b.type = 'button'; b.setAttribute('aria-expanded', String(!!st.open[i]));
      b.appendChild(h('b', '', s.n));
      if (st.open[i]) {
        var extra = '';
        if (i === 2) extra = st.hist ? ' Ava\'s history is on: kept until she deletes it.' : ' Ava\'s history is off: deleted after 30 days.';
        if (i === 4) extra = st.train ? ' Ava\'s setting is on: this chat may be learned from.' : ' Ava\'s setting is off: this chat won\'t be used for training.';
        b.appendChild(h('p', '', s.d + extra));
      }
      b.addEventListener('click', act(function () { st.open[i] = !st.open[i]; st.seen[i] = 1; }));
      left.appendChild(b);
    });
    grid.appendChild(left);
    var right = h('div', 'csbox'); right.appendChild(h('h3', '', 'Ava\'s settings (as they came)'));
    settings(right);
    right.appendChild(h('p', 'csnote', 'Both switches started on. Most people never open this page.'));
    grid.appendChild(right); wrap.appendChild(grid);
    var s = Object.keys(st.seen).length;
    ui.text = s + ' of 5 stages opened. Training: ' + (st.train ? 'on' : 'off') + '. History: ' + (st.hist ? 'kept' : 'deleted after 30 days') + '.';
    return { s: s, t: st.train ? 1 : 0, k: st.hist ? 1 : 0, r: st.seen[3] ? 1 : 0 };
  }

  function drawScreen(wrap) {
    wrap.appendChild(h('p', 'csintro', 'Club Helper\'s welcome screen (made up, but built like many real ones). Click the line that matters most for what happens to Ava\'s chats. Then decide what to do.'));
    var phone = h('div', 'csphone');
    if (st.done) {
      phone.appendChild(h('h3', '', 'Club Helper'));
      phone.appendChild(h('p', 'csdone', st.quick ? 'Ava pressed Agree straight away. Her chats may now be used to train the AI.' : 'Ava continued with training ' + (st.train ? 'on' : 'off') + ' and history ' + (st.hist ? 'on' : 'off') + '.'));
      var again = h('div', 'csbtns'); var back = h('button', '', 'Back to the screen'); back.type = 'button';
      back.addEventListener('click', act(function () { st.done = 0; })); again.appendChild(back); phone.appendChild(again);
    } else if (st.manage) {
      phone.appendChild(h('h3', '', 'Manage choices'));
      settings(phone);
      var bs = h('div', 'csbtns'); var save = h('button', 'agree', 'Save and continue'); save.type = 'button';
      save.addEventListener('click', act(function () { st.done = 1; st.manage = 0; })); bs.appendChild(save); phone.appendChild(bs);
    } else {
      phone.appendChild(h('h3', '', 'Before you start'));
      LINES.forEach(function (l) {
        var b = h('button', 'csline', l.t); b.type = 'button'; b.setAttribute('aria-pressed', String(st.mark === l.k));
        b.addEventListener('click', act(function () { st.mark = l.k; })); phone.appendChild(b);
      });
      var btns = h('div', 'csbtns');
      var agree = h('button', 'agree', 'Agree and continue'); agree.type = 'button';
      agree.addEventListener('click', act(function () { if (!st.opened) st.quick = 1; st.train = true; st.done = 1; }));
      var more = h('button', 'small', 'Manage choices'); more.type = 'button';
      more.addEventListener('click', act(function () { st.manage = 1; st.opened = 1; }));
      btns.appendChild(agree); btns.appendChild(more); phone.appendChild(btns);
    }
    wrap.appendChild(phone);
    ui.text = (st.mark === 'train' ? 'You marked the training line. ' : st.mark ? 'You marked a line. ' : '') + (st.done ? 'Ava continued with training ' + (st.train ? 'on.' : 'off.') : 'Ava hasn\'t continued yet.');
    return { g: st.mark === 'train' ? 1 : 0, o: st.opened ? 1 : 0, t: st.train ? 1 : 0, c: st.done ? 1 : 0, q: st.quick ? 1 : 0 };
  }

  function draw() {
    var host = B.el('board'); host.replaceChildren();
    var wrap = h('div', 'cswrap');
    ui.vars = spec.m === 'screen' ? drawScreen(wrap) : drawTrace(wrap);
    host.appendChild(wrap);
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = h('p', 'rulework'); ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    var bar = h('div', 'gbar bbar'); var again = h('button', 'quiet', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function report() {
    ui.work.textContent = ui.text; B.say(ui.text);
    B.save({ st: st });
    B.post({ scope: { vars: ui.vars, points: {} } }, ui.text);
  }
  function blank() { return { open: {}, seen: {}, train: true, hist: true, mark: '', manage: 0, opened: 0, done: 0, quick: 0 }; }
  B.widget('consent', {
    sections: ['board', 'gpanel'],
    label: function () { return 'Club Helper: where your chat goes'; },
    parse: function (s) { s.m = String(s.mode || 'trace').toLowerCase(); if (['trace', 'screen'].indexOf(s.m) < 0) throw new Error('mode: trace or screen.'); },
    redraw: function () { if (spec) { draw(); report(); } },
    start: function (fresh) {
      spec = B.spec; style();
      var sv = fresh ? null : B.saved();
      st = sv && sv.st ? Object.assign(blank(), sv.st) : blank();
      paintPanel(); draw(); report();
    },
  });
})(WPB);
