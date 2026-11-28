// App screen (24 Nov 2026, Construct apps): a working mock of a small Construct app beside its event sheet. The app is ours
// (plain buttons, boxes and text), not a copy of Construct's editor. When an event runs, its row lights up on the sheet, so
// students see which event did what. Expressions are coloured as Construct's expression box colours them: text in quotes
// dark red, & blue, names navy. Used for "try the finished app" steps and the course's explain clips.
//   widget: appscreen
//   app: tracker | chores | water | journal | creatures
//   sheet: on            show the event sheet beside the app (default on; off shows the app alone)
//   settext: off         tracker: the Save event has no Set text, so the total changes but the screen does not
//   flat: on             chores: two separate On clicked events (they undo each other) instead of a sub-event and Else
//   cap: wrong | right | off   water: the stop-at-the-goal check (wrong: Add 1 left on the parent event)
//   goal: 8              water: the goal
//   jobs: Make my bed, Feed the cat, Homework     chores: the jobs
//   values: Kindness, Courage, Curiosity, Teamwork  journal: the four values
// state: { scope: { vars: tracker m (Minutes), k (Save clicks); chores d (Done), t (box clicks); water g (Glasses),
//   o (1 once Glasses has passed the goal); journal n (entries), s (screen 1 to 3); creatures c (creature clicked, 1 to 3, 0 none) } }
// Checks: "m >= 30", "d = 3", "g = 8", "n >= 2", "c = 2".
(function (B) {
  'use strict';
  var spec = null, st = {}, ui = {};
  var on = function (v, d) { return v === undefined ? d : /^on$/i.test(v); };
  var list = function (v, d) { return v ? String(v).split(',').map(function (x) { return x.trim(); }).filter(Boolean) : d; };
  var CREATURES = [
    { name: 'Emberfox', colour: '#e2733a', power: 70, speed: 85, defence: 35, ability: 'Spark dash' },
    { name: 'Tidecrab', colour: '#3a8fc2', power: 55, speed: 30, defence: 90, ability: 'Shell spin' },
    { name: 'Mossbear', colour: '#5a9a4a', power: 90, speed: 40, defence: 70, ability: 'Root grip' },
  ];

  var CSS = '.asw{display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;padding:12px;}' +
    '.asapp{flex:0 0 300px;max-width:100%;border:2px solid var(--line);border-radius:16px;background:var(--card);padding:16px;box-sizing:border-box;}' +
    '.asapp h3{margin:0 0 12px;text-align:center;font-size:20px}.asapp p{margin:8px 0}.asrow{display:flex;gap:8px;align-items:center;margin:8px 0;flex-wrap:wrap}' +
    '.asapp button{font:600 15px/1 system-ui,sans-serif;padding:9px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink);cursor:pointer}' +
    '.asapp button:focus-visible,.asapp input:focus-visible{outline:3px solid var(--accent);outline-offset:2px}' +
    '.asapp input{font:inherit;padding:7px 8px;border-radius:6px;border:1px solid var(--line);background:var(--card);color:var(--ink);width:8em}' +
    '.asapp .asbox{width:40px;height:40px;padding:0;font-size:22px}.asbig{font-size:18px;font-weight:600}' +
    '.asbar{height:18px;border-radius:4px;background:var(--line);overflow:hidden;margin:8px 0}.asbar i{display:block;height:100%;background:#3b82c4;width:0;transition:width .25s}' +
    '.aslist{min-height:110px;border:1px solid var(--line);border-radius:6px;padding:6px 8px;font-size:14px}.aslist div{padding:2px 0}' +
    '.ascre{display:flex;gap:10px;justify-content:center}.ascre button{width:72px;height:72px;border-radius:50%;border:3px solid transparent;color:#fff;font-size:12px}' +
    '.ascre button[aria-pressed=true]{border-color:var(--ink)}.asstat{display:flex;gap:8px;align-items:center;font-size:14px}.asstat .asbar{flex:1;margin:4px 0}' +
    '.assheet{flex:1 1 320px;min-width:0;font-size:14px}.assheet h4{margin:0 0 6px;font-size:13px;color:var(--muted);font-weight:600}' +
    '.asev{border:1px solid var(--line);border-radius:6px;margin:0 0 6px;display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);background:var(--card);transition:background .2s,box-shadow .2s}' +
    '.asev.sub{margin-left:22px}.asev>div{padding:6px 8px}.asev>div+div{border-left:1px solid var(--line)}.asev.lit{background:#fff4c2;box-shadow:0 0 0 2px #e0b400}' +
    '.asev .act{display:block}.asev b{font-weight:700}' +
    '.asx-s{color:#a31515}.asx-o{color:#2c2cd6;font-weight:600}.asx-v{color:#1f2a6b;font-weight:600}' +
    '@media (prefers-color-scheme: dark){.asev.lit{background:#4a3d00;box-shadow:0 0 0 2px #c9a300}.asx-s{color:#f19a8f}.asx-o{color:#9db1ff}.asx-v{color:#c9d3ff}.asbar i{background:#5aa0e0}}' +
    '.asnote{font-size:13px;color:var(--muted);margin-top:6px}';

  /** An expression coloured as Construct's expression box shows it: "text", &, names. */
  function expr(s) {
    var out = document.createElement('span'), re = /("[^"]*")|(&)|([A-Za-z_][\w.]*(?:\([^)]*\))?)|([^"&A-Za-z_]+)/g, m;
    while ((m = re.exec(s))) {
      var sp = document.createElement('span');
      if (m[1]) sp.className = 'asx-s'; else if (m[2]) sp.className = 'asx-o'; else if (m[3]) sp.className = 'asx-v';
      sp.textContent = m[0]; out.appendChild(sp);
    }
    return out;
  }
  /** An event row: cond is text with **bold** object names; acts are [object, action, expression?]. */
  function row(id, cond, acts, sub) {
    var r = document.createElement('div'); r.className = 'asev' + (sub ? ' sub' : ''); r.id = 'ase-' + id;
    var c = document.createElement('div'); c.innerHTML = (sub ? '↳ ' : '') + cond.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    var a = document.createElement('div');
    (acts || []).forEach(function (x) {
      var line = document.createElement('span'); line.className = 'act';
      var ob = document.createElement('b'); ob.textContent = x[0]; line.append(ob, ' ' + x[1] + (x[2] !== undefined ? ' ' : ''));
      if (x[2] !== undefined) line.appendChild(expr(x[2]));
      a.appendChild(line);
    });
    r.append(c, a); return r;
  }
  var timers = {};
  function flash(id) {
    var e = document.getElementById('ase-' + id); if (!e) return;
    e.classList.add('lit'); clearTimeout(timers[id]);
    timers[id] = setTimeout(function () { e.classList.remove('lit'); }, 700);
  }
  function el(tag, text, attrs) { var e = document.createElement(tag); if (text !== undefined && text !== null) e.textContent = text; for (var k in (attrs || {})) e.setAttribute(k, attrs[k]); return e; }
  function button(text, label, fn) { var b = el('button', text, { type: 'button' }); if (label) b.setAttribute('aria-label', label); b.addEventListener('click', fn); return b; }

  // ---- the five apps: build(appBox, sheetBox) draws them; report() posts the state ----
  var APPS = {
    tracker: {
      label: 'Practice tracker',
      build: function (box, sh) {
        box.append(el('h3', 'Practice tracker'));
        var r = el('div', null, { class: 'asrow' }), lab = el('label', 'Minutes practised', { for: 'asmin' });
        ui.input = el('input', null, { id: 'asmin', inputmode: 'numeric', 'aria-label': 'Minutes practised' }); ui.input.value = '15';
        r.append(lab, ui.input, button('Save', 'Save', function () {
          var add = parseInt(ui.input.value, 10); add = isNaN(add) ? 0 : add;
          st.m += add; st.k++; flash('save'); if (spec.settext) st.shown = st.m; B.moved = true; report();
        }));
        ui.total = el('p', '', { class: 'asbig', id: 'astotal' });
        box.append(r, ui.total, el('p', '', { class: 'asnote', id: 'asvar' }));
        ui.varline = box.lastChild;
        sh.append(row('save', '**SaveButton** On clicked', [['System', 'Add to Minutes', 'int(TextInput.Text)']].concat(spec.settext ? [['TotalText', 'Set text', '"You\'ve practised " & Minutes & " minutes"']] : [])));
      },
      show: function () { ui.total.textContent = "You've practised " + st.shown + ' minutes'; ui.varline.textContent = 'Minutes (the variable) = ' + st.m; },
      vars: function () { return { m: st.m, k: st.k }; },
      say: function () { return 'Minutes is ' + st.m + '; the screen says ' + st.shown + ' minutes.'; },
      init: function () { st.m = 0; st.k = 0; st.shown = 0; },
    },
    chores: {
      label: 'Chores checklist',
      build: function (box, sh) {
        box.append(el('h3', 'My jobs today'));
        ui.boxes = [];
        spec.jobsList.forEach(function (j, i) {
          var r = el('div', null, { class: 'asrow' });
          var b = button('⬜', 'Tick box: ' + j, function () {
            st.t++; B.moved = true;
            if (spec.flat) {
              flash('f1'); setTimeout(function () { flash('f2'); }, 250);   // both run on one click: ⬜ → ✅ → ⬜
            } else {
              flash('click'); var was = st.ticks[i];
              st.ticks[i] = !was; setTimeout(function () { flash(was ? 'else' : 'sub'); }, 200);
            }
            report();
          });
          b.className = 'asbox'; ui.boxes.push(b);
          r.append(b, el('span', j)); box.appendChild(r);
        });
        ui.done = el('p', '', { class: 'asnote', id: 'asdone' }); box.appendChild(ui.done);
        if (spec.flat) {
          sh.append(row('f1', '**Box** On clicked · **Box** text is "⬜"', [['Box', 'Set text', '"✅"']]), row('f2', '**Box** On clicked · **Box** text is "✅"', [['Box', 'Set text', '"⬜"']]));
        } else {
          sh.append(row('click', '**Box** On clicked', []), row('sub', '**Box** text is "⬜"', [['Box', 'Set text', '"✅"']], true), row('else', 'Else', [['Box', 'Set text', '"⬜"']], true));
        }
      },
      show: function () { ui.boxes.forEach(function (b, i) { b.textContent = st.ticks[i] ? '✅' : '⬜'; b.setAttribute('aria-pressed', String(!!st.ticks[i])); }); ui.done.textContent = 'Done: ' + st.ticks.filter(Boolean).length + ' of ' + st.ticks.length; },
      vars: function () { return { d: st.ticks.filter(Boolean).length, t: st.t }; },
      say: function () { return st.ticks.filter(Boolean).length + ' of ' + st.ticks.length + ' jobs ticked.'; },
      init: function () { st.ticks = spec.jobsList.map(function () { return false; }); st.t = 0; },
    },
    water: {
      label: 'Water tracker',
      build: function (box, sh) {
        ui.count = el('p', '', { class: 'asbig', id: 'ascount' }); ui.count.style.textAlign = 'center';
        var bar = el('div', null, { class: 'asbar' }); ui.fill = el('i'); bar.appendChild(ui.fill);
        var r = el('div', null, { class: 'asrow' });
        r.append(button('Add a glass', 'Add a glass', function () {
          flash('add'); B.moved = true;
          if (spec.cap === 'wrong') { st.g++; setTimeout(function () { flash('cap'); }, 200); }
          else if (spec.cap === 'right') { if (st.g < spec.goalN) { st.g++; setTimeout(function () { flash('cap'); }, 200); } }
          else st.g++;
          if (st.g > spec.goalN) st.o = 1;
          report();
        }), button('Reset', 'Reset', function () { st.g = 0; flash('reset'); B.moved = true; report(); }));
        ui.msg = el('p', '', { id: 'asmsg' }); ui.msg.style.textAlign = 'center';
        box.append(el('h3', 'Water tracker'), ui.count, bar, r, ui.msg);
        sh.append(row('tick', 'System **Every tick**', [['GlassText', 'Set text', '"Glasses: " & Glasses & " of " & Goal'], ['BarFill', 'Set width', 'Glasses / Goal * 400']]));
        if (spec.cap === 'wrong') sh.append(row('add', '**AddButton** On clicked', [['System', 'Add 1 to Glasses']]), row('cap', 'System Glasses < Goal', [], true));
        else if (spec.cap === 'right') sh.append(row('add', '**AddButton** On clicked', []), row('cap', 'System Glasses < Goal', [['System', 'Add 1 to Glasses']], true));
        else sh.append(row('add', '**AddButton** On clicked', [['System', 'Add 1 to Glasses']]));
        sh.append(row('reset', '**ResetButton** On clicked', [['System', 'Set Glasses to', '0']]),
          row('goal', 'System Glasses = Goal', [['Message', 'Set text', '"Goal reached!"']]), row('keep', 'Else', [['Message', 'Set text', '"Keep going"']]));
        // Every tick runs about 60 times a second: show a steady pulse (slowed down so it can be seen).
        clearInterval(timers.tick); timers.tick = setInterval(function () { flash('tick'); flash(st.g === spec.goalN ? 'goal' : 'keep'); }, 900);
      },
      show: function () {
        ui.count.textContent = 'Glasses: ' + st.g + ' of ' + spec.goalN;
        ui.fill.style.width = Math.min(100, st.g / spec.goalN * 100) + '%';
        ui.msg.textContent = st.g === spec.goalN ? 'Goal reached!' : 'Keep going';
      },
      vars: function () { return { g: st.g, o: st.o }; },
      say: function () { return 'Glasses: ' + st.g + ' of ' + spec.goalN + '.'; },
      init: function () { st.g = 0; st.o = 0; },
    },
    journal: {
      label: 'Values journal',
      build: function (box, sh) { ui.box = box; ui.sh = sh; },
      show: function () {
        var box = ui.box, sh = ui.sh; box.replaceChildren(); sh.querySelectorAll('.asev').forEach(function (e) { e.remove(); });
        if (st.s === 1) {
          box.append(el('h3', 'Values journal'), el('p', 'Which value did you show today?'));
          spec.valuesList.forEach(function (v) {
            var r = el('div', null, { class: 'asrow' });
            r.appendChild(button(v, v, function () { st.chosen = v; st.s = 2; B.moved = true; flash('choose'); report(); }));
            box.appendChild(r);
          });
          sh.append(row('choose', '**ValueButton** On clicked', [['System', 'Set Chosen to', '"' + spec.valuesList[0] + '"'], ['System', 'Go to layout', '"Layout 2"']]));
        } else if (st.s === 2) {
          box.append(el('h3', 'Values journal'), el('p', 'What did you do to show ' + st.chosen + '?'));
          ui.input = el('input', null, { 'aria-label': 'What did you do', id: 'asentry' }); ui.input.style.width = '100%';
          var r = el('div', null, { class: 'asrow' });
          r.appendChild(button('Add to my journal', 'Add to my journal', function () {
            st.entries.push(st.chosen.toUpperCase() + ': ' + (ui.input.value || '…')); st.s = 3; B.moved = true; report();
          }));
          box.append(ui.input, r);
          sh.append(row('start2', 'System **On start of layout**', [['Question', 'Set text', '"What did you do to show " & Chosen & "?"']]),
            row('push', '**AddButton** On clicked', [['Journal', 'Push back', 'uppercase(Chosen) & ": " & TextInput.Text'], ['System', 'Go to layout', '"Layout 3"']]));
          setTimeout(function () { flash('start2'); }, 50);
        } else {
          box.append(el('h3', 'My values in action'));
          var l = el('div', null, { class: 'aslist', id: 'aslist', role: 'list' });
          st.entries.forEach(function (e) { l.appendChild(el('div', e, { role: 'listitem' })); });
          var r = el('div', null, { class: 'asrow' });
          r.appendChild(button('Add another', 'Add another', function () { st.s = 1; B.moved = true; report(); }));
          box.append(l, r);
          sh.append(row('clear', 'System **On start of layout**', [['List', 'Clear']]),
            row('loop', 'System **On start of layout** · System Repeat Journal.Width times', [['List', 'Add item', 'Journal.At(loopindex)']]));
          setTimeout(function () { flash('clear'); setTimeout(function () { flash('loop'); }, 250); }, 50);
        }
        sh.appendChild(ui.note);
        ui.note.textContent = 'Screen ' + st.s + ' of 3 · Chosen = ' + (st.chosen ? '"' + st.chosen + '"' : '""') + ' · Journal.Width = ' + st.entries.length;
      },
      vars: function () { return { n: st.entries.length, s: st.s }; },
      say: function () { return 'Screen ' + st.s + '; ' + st.entries.length + ' entries.'; },
      init: function () { st.s = 1; st.chosen = ''; st.entries = []; },
    },
    creatures: {
      label: 'Creature stats',
      build: function (box, sh) {
        box.append(el('h3', 'Creature stats'));
        var r = el('div', null, { class: 'ascre' }); ui.cre = [];
        CREATURES.forEach(function (c, i) {
          var b = button(c.name, c.name, function () { st.c = i + 1; B.moved = true; flash('pick'); report(); });
          b.style.background = c.colour; ui.cre.push(b); r.appendChild(b);
        });
        ui.stats = el('div'); box.append(r, ui.stats);
        sh.append(row('pick', '**Mouse** On object clicked **Creature**', [['NameText', 'Set text', 'Creature.name'], ['PowerText', 'Set text', '"Power: " & Creature.power'], ['PowerBar', 'Set width', 'Creature.power / 100 * 200'], ['AbilityText', 'Set text', '"Special: " & Creature.ability']]));
      },
      show: function () {
        ui.cre.forEach(function (b, i) { b.setAttribute('aria-pressed', String(st.c === i + 1)); });
        ui.stats.replaceChildren();
        if (!st.c) { ui.stats.appendChild(el('p', 'Click a creature', { class: 'asnote' })); return; }
        var c = CREATURES[st.c - 1];
        ui.stats.appendChild(el('p', c.name, { class: 'asbig', id: 'asname' }));
        [['Power', c.power], ['Speed', c.speed], ['Defence', c.defence]].forEach(function (s) {
          var d = el('div', null, { class: 'asstat' }), bar = el('div', null, { class: 'asbar' }), f = el('i'); f.style.width = s[1] + '%'; bar.appendChild(f);
          d.append(el('span', s[0] + ': ' + s[1]), bar); ui.stats.appendChild(d);
        });
        ui.stats.appendChild(el('p', 'Special: ' + c.ability));
      },
      vars: function () { return { c: st.c }; },
      say: function () { return st.c ? CREATURES[st.c - 1].name + ' picked.' : 'No creature picked yet.'; },
      init: function () { st.c = 0; },
    },
  };

  function report() {
    var a = APPS[spec.appName]; a.show();
    B.say(a.say());
    B.save({ st: JSON.parse(JSON.stringify(st)) });
    B.post({ scope: { vars: a.vars(), points: {} } }, a.say());
  }

  function parse(s) {
    s.appName = String(s.app || '').trim();
    if (!APPS[s.appName]) throw new Error('app: one of ' + Object.keys(APPS).join(', ') + '.');
    s.showSheet = on(s.sheet, true);
    s.settext = on(s.settext, true);
    s.flat = on(s.flat, false);
    s.cap = s.cap === undefined ? 'off' : String(s.cap).trim();
    if (!/^(wrong|right|off)$/.test(s.cap)) throw new Error('cap: wrong, right or off.');
    s.goalN = s.goal === undefined ? 8 : Number(s.goal);
    if (!(s.goalN >= 1 && s.goalN <= 20)) throw new Error('goal: a whole number from 1 to 20.');
    s.jobsList = list(s.jobs, ['Make my bed', 'Feed the cat', 'Homework']);
    s.valuesList = list(s.values, ['Kindness', 'Courage', 'Curiosity', 'Teamwork']);
  }

  function start(fresh) {
    spec = B.spec; ui = {}; st = {};
    Object.keys(timers).forEach(function (k) { clearTimeout(timers[k]); clearInterval(timers[k]); });
    if (!document.getElementById('as-style')) { var s = document.createElement('style'); s.id = 'as-style'; s.textContent = CSS; document.head.appendChild(s); }
    var a = APPS[spec.appName]; a.init();
    var sv = fresh ? null : B.saved(); if (sv && sv.st) st = sv.st;
    var board = B.el('board'); board.replaceChildren();
    var wrap = el('div', null, { class: 'asw' }), box = el('div', null, { class: 'asapp', role: 'group', 'aria-label': 'The app: ' + a.label });
    var sh = el('div', null, { class: 'assheet' }); sh.appendChild(el('h4', 'Event sheet (lights up when an event runs)'));
    ui.note = el('p', '', { class: 'asnote' });
    wrap.appendChild(box); if (spec.showSheet) { sh.appendChild(ui.note); wrap.appendChild(sh); }
    board.appendChild(wrap);
    a.build(box, sh);
    if (spec.showSheet) sh.appendChild(ui.note);
    var panel = B.el('gpanel'); panel.replaceChildren();
    var bar = el('div', null, { class: 'gbar' }), again = button('Start again', null, B.restart); again.className = 'quiet'; bar.appendChild(again); panel.appendChild(bar);
    report();
  }

  B.widget('appscreen', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'A working copy of the app, with its event sheet'; },
    parse: parse,
    start: start,
    redraw: function () { if (spec) report(); },
  });
})(WPB);
