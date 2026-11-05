// A made-up video feed for AI in your life. NOT a real app or a real recommender: a small, inspectable model
// that ranks eight made-up posts by a weighted sum of signals, so students can "be the algorithm".
//   widget: feed
//   mode: rank | design
// mode: rank    Eight posts for a made-up student, Sam. Sliders (0 to 3) set how much each signal counts: watch time,
//               likes, shares and comments, from people Sam follows, matches what Sam says he wants. The feed re-sorts
//               live. Two buttons load the app's goal (keep Sam watching) and Sam's own goal.
//   Values: t (the top post's number, 1 to 8), d (posts Sam asked for less of in the top 3), f (posts from people
//           Sam follows in the top 3), w (watch-time weight), s (wants weight), p (1 when the app's goal preset is set)
// mode: design  Switch app features on and off and see how long a made-up session lasts (a made-up model, labelled as
//               such). Sam planned 15 minutes.
//   Values: m (session minutes), k (keep-you features on), h (helping features on), u (1 when the session is within
//           Sam's plan)
(function (B) {
  'use strict';
  var spec, st, ui = {};
  var POSTS = [
    { t: 'Jo (a friend) shares her netball win', watch: 1, likes: 2, shares: 1, follow: 3, want: 2 },
    { t: 'Two celebrities argue online', watch: 3, likes: 1, shares: 3, follow: 0, want: 0, less: 1 },
    { t: 'How to draw a cat in five steps', watch: 2, likes: 2, shares: 1, follow: 0, want: 3 },
    { t: '10 pranks that went wrong', watch: 3, likes: 2, shares: 3, follow: 0, want: 1 },
    { t: 'The class group: holiday dates', watch: 0, likes: 0, shares: 0, follow: 3, want: 2 },
    { t: 'A puppy meets a cat', watch: 2, likes: 3, shares: 2, follow: 0, want: 1 },
    { t: 'Gamers yell about a game update', watch: 3, likes: 1, shares: 3, follow: 1, want: 0, less: 1 },
    { t: 'Why is the sky blue?', watch: 1, likes: 1, shares: 0, follow: 0, want: 3 },
  ];
  var SIG = [
    { k: 'watch', n: 'Watch time', d: 'how long people watch it' },
    { k: 'likes', n: 'Likes', d: 'how many people like it' },
    { k: 'shares', n: 'Shares and comments', d: 'how much people share and argue about it' },
    { k: 'follow', n: 'From people Sam follows', d: 'friends and groups Sam chose' },
    { k: 'want', n: 'What Sam says he wants', d: 'topics Sam asked for' },
  ];
  var APP = { watch: 3, likes: 1, shares: 3, follow: 0, want: 0 };
  var SAM = { watch: 0, likes: 1, shares: 0, follow: 2, want: 3 };
  var FEAT = [
    { k: 'autoplay', n: 'Autoplay: the next video starts by itself', add: 8, keep: 1 },
    { k: 'scroll', n: 'Infinite scroll: the feed never ends', add: 12, keep: 1 },
    { k: 'streak', n: 'Streaks: come back every day or lose your streak', add: 5, keep: 1 },
    { k: 'notify', n: 'Notifications: "Jo just posted!"', add: 6, keep: 1 },
    { k: 'done', n: '"You\'re all caught up" when you\'ve seen your friends\' posts', add: -8, keep: 0 },
    { k: 'remind', n: 'A reminder when you reach your time limit', add: -6, keep: 0 },
  ];
  var CSS = '.fdwrap{display:flex;flex-direction:column;gap:10px;padding:10px}.fdintro{margin:0;color:var(--muted)}' +
    '.fdgrid{display:grid;grid-template-columns:minmax(220px,1fr) minmax(240px,1.3fr);gap:12px}@media(max-width:620px){.fdgrid{grid-template-columns:1fr}}' +
    '.fdbox{border:2px solid var(--line);border-radius:10px;padding:8px 10px;background:var(--card)}.fdbox h3{margin:0 0 6px;font-size:16px}' +
    '.fdrow{display:flex;flex-direction:column;gap:2px;margin:6px 0}.fdrow label{font-weight:600}.fdrow small{color:var(--muted)}.fdrow input{accent-color:var(--accent)}' +
    '.fdpost{display:flex;gap:8px;align-items:center;padding:6px 8px;border:1px solid var(--line);border-radius:8px;margin:4px 0}' +
    '.fdpost b{min-width:1.6em;text-align:right}.fdpost.less{border-color:#b42318}.fdpost.fol{border-color:var(--ok)}.fdtag{font-size:12px;color:var(--muted);margin-left:auto;white-space:nowrap}' +
    '.fdbar{display:flex;flex-wrap:wrap;gap:8px}.fdbar button,.fdfeat button{font:inherit;padding:6px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
    '.fdbar button:focus-visible,.fdfeat button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.fdfeat{display:flex;justify-content:space-between;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--line)}.fdfeat button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}' +
    '.fdmeter{height:18px;border-radius:9px;background:var(--line);overflow:hidden;position:relative}.fdmeter i{display:block;height:100%;background:var(--accent)}.fdmeter s{position:absolute;top:-3px;bottom:-3px;width:3px;background:var(--ok)}' +
    '.fdbig{font-size:22px;font-weight:700;margin:4px 0}.fdnote{font-size:13px;color:var(--muted);margin:4px 0 0}';
  function style() { if (document.getElementById('fdcss')) return; var s = document.createElement('style'); s.id = 'fdcss'; s.textContent = CSS; document.head.appendChild(s); }
  function h(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(text, fn, aria) { var b = h('button', '', text); b.type = 'button'; if (aria) b.setAttribute('aria-label', aria); b.addEventListener('click', function () { fn(); B.moved = true; draw(); report(); }); return b; }

  function ranked() {
    return POSTS.map(function (p, i) {
      var score = 0; SIG.forEach(function (s) { score += st.w[s.k] * p[s.k]; });
      return { i: i, p: p, score: score };
    }).sort(function (a, b) { return b.score - a.score || a.i - b.i; });
  }
  function same(a, b) { return SIG.every(function (s) { return a[s.k] === b[s.k]; }); }
  function drawRank(wrap) {
    wrap.appendChild(h('p', 'fdintro', 'A made-up app ranks posts for Sam, a made-up Year 7 student. You are the algorithm: choose how much each signal counts, and watch the feed change. Sam told the app he wants drawing and science, and to see his friends. He asked to see less of online arguments.'));
    var grid = h('div', 'fdgrid');
    var left = h('div', 'fdbox'); left.appendChild(h('h3', '', 'How much does each signal count?'));
    SIG.forEach(function (s) {
      var row = h('div', 'fdrow'); var id = 'fd-' + s.k;
      var lab = h('label', '', s.n + ': ' + st.w[s.k]); lab.htmlFor = id; row.appendChild(lab);
      var r = h('input'); r.type = 'range'; r.min = 0; r.max = 3; r.step = 1; r.value = st.w[s.k]; r.id = id; r.setAttribute('aria-label', s.n);
      r.addEventListener('input', function () { st.w[s.k] = Number(r.value); B.moved = true; draw(); report(); });
      row.appendChild(r); row.appendChild(h('small', '', s.d)); left.appendChild(row);
    });
    var bar = h('div', 'fdbar');
    bar.appendChild(btn('The app\'s goal: keep Sam watching', function () { st.w = Object.assign({}, APP); }));
    bar.appendChild(btn('Sam\'s goal', function () { st.w = Object.assign({}, SAM); }));
    left.appendChild(bar); grid.appendChild(left);
    var right = h('div', 'fdbox'); right.appendChild(h('h3', '', 'Sam\'s feed, top to bottom'));
    var list = ranked();
    list.forEach(function (r, n) {
      var c = h('div', 'fdpost' + (r.p.less ? ' less' : r.p.follow >= 3 ? ' fol' : ''));
      c.appendChild(h('b', '', (n + 1) + '.')); c.appendChild(h('span', '', r.p.t));
      c.appendChild(h('span', 'fdtag', r.p.less ? 'Sam asked for less' : r.p.follow >= 3 ? 'Sam follows' : ''));
      right.appendChild(c);
    });
    right.appendChild(h('p', 'fdnote', 'Each post\'s score = each signal\'s number (0 to 3) × how much that signal counts, added up. Real apps use thousands of signals, learned from what millions of people do.'));
    grid.appendChild(right); wrap.appendChild(grid);
    var top3 = list.slice(0, 3);
    var d = top3.filter(function (r) { return r.p.less; }).length, f = top3.filter(function (r) { return r.p.follow >= 3; }).length;
    ui.text = 'Top post: ' + list[0].p.t + '. ' + (d ? d + ' post' + (d > 1 ? 's' : '') + ' Sam asked for less of in the top 3.' : 'No posts Sam asked for less of in the top 3.');
    return { t: list[0].i + 1, d: d, f: f, w: st.w.watch, s: st.w.want, p: same(st.w, APP) ? 1 : 0 };
  }

  function drawDesign(wrap) {
    wrap.appendChild(h('p', 'fdintro', 'Sam plans to spend 15 minutes on the app after school. Switch the app\'s features on and off. The minutes come from a made-up model, to show the idea, not from real measurements.'));
    var grid = h('div', 'fdgrid');
    var left = h('div', 'fdbox'); left.appendChild(h('h3', '', 'Features'));
    FEAT.forEach(function (f) {
      var row = h('div', 'fdfeat'); row.appendChild(h('span', '', f.n));
      var b = btn(st.on[f.k] ? 'On' : 'Off', function () { st.on[f.k] = !st.on[f.k]; }, f.n);
      b.setAttribute('aria-pressed', String(!!st.on[f.k])); row.appendChild(b); left.appendChild(row);
    });
    grid.appendChild(left);
    var m = 10; FEAT.forEach(function (f) { if (st.on[f.k]) m += f.add; }); m = Math.max(5, m);
    var right = h('div', 'fdbox'); right.appendChild(h('h3', '', 'One after-school session'));
    right.appendChild(h('p', 'fdbig', m + ' minutes'));
    var meter = h('div', 'fdmeter'); var bar = h('i'); bar.style.width = Math.min(100, m / 50 * 100) + '%'; meter.appendChild(bar);
    var plan = h('s'); plan.style.left = (15 / 50 * 100) + '%'; meter.appendChild(plan); right.appendChild(meter);
    right.appendChild(h('p', 'fdnote', 'Green line: Sam\'s plan, 15 minutes.'));
    right.appendChild(h('p', '', m <= 15 ? 'Within Sam\'s plan.' : (m - 15) + ' minutes more than Sam planned.'));
    grid.appendChild(right); wrap.appendChild(grid);
    var k = FEAT.filter(function (f) { return f.keep && st.on[f.k]; }).length, hlp = FEAT.filter(function (f) { return !f.keep && st.on[f.k]; }).length;
    ui.text = 'Session: ' + m + ' minutes (Sam planned 15).';
    return { m: m, k: k, h: hlp, u: m <= 15 ? 1 : 0 };
  }

  function draw() {
    var host = B.el('board'); host.replaceChildren();
    var wrap = h('div', 'fdwrap');
    ui.vars = spec.m === 'design' ? drawDesign(wrap) : drawRank(wrap);
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
  function blank() {
    return { w: { watch: 1, likes: 1, shares: 1, follow: 1, want: 1 }, on: { autoplay: true, scroll: true, streak: true, notify: true, done: false, remind: false } };
  }
  B.widget('feed', {
    sections: ['board', 'gpanel'],
    label: function () { return 'A made-up video feed'; },
    parse: function (s) { s.m = String(s.mode || 'rank').toLowerCase(); if (['rank', 'design'].indexOf(s.m) < 0) throw new Error('mode: rank or design.'); },
    redraw: function () { if (spec) { draw(); report(); } },
    start: function (fresh) {
      spec = B.spec; style();
      var sv = fresh ? null : B.saved();
      st = sv && sv.st ? Object.assign(blank(), sv.st) : blank();
      paintPanel(); draw(); report();
    },
  });
})(WPB);
