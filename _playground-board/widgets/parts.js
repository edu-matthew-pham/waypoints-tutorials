// The parts inside a computer, for Years 5–6 (AC9TDI6K01): a games console (or a school laptop) drawn as five parts,
// each with one job. Buttons send a job through the parts and light the path; a part can be taken out to see what
// stops working. A simple model, stated in the teacher notes: the score lives in memory while the console is on,
// a saved game lives in storage, and turning off empties memory.
//   widget: parts
//   device: console        console | laptop (the names of the input and output change: buttons and screen, or
//                          keyboard and screen)
//   jobs: on               each part shows its job (default on); off shows the names only
//   match: on              each part gets a "What does it do?" row: pick its job from five (students match them)
//   remove: on             each part gets a Take out / Put back button
//   actions: press, save, load, restart    the action buttons (default all four)
//   score: 0               the score in memory at the start
// Parts: input, processor, memory, storage, output.
// Actions: Press A (input → processor → memory → processor → output: the score goes up and shows on the screen);
//   Save (processor copies the score from memory to storage); Turn off and on (memory empties, storage keeps);
//   Load (storage → memory → processor → output).
// state: { scope: { vars: { a (last action: 1 press, 2 save, 3 restart, 4 load, 0 none), o (1 if the last action
//          did what it should), s (score shown on the screen, −1 nothing shown), m (score in memory), g (saved
//          score in storage, −1 none), z (part taken out: 1 input, 2 processor, 3 memory, 4 storage, 5 output,
//          0 none), r (parts taken out), k (jobs matched correctly, with match: on), n (actions run) } } }
// Checks: "k = 5", "a = 1 and z = 5 and m > 0", "g = 3 and a = 4 and s = 3", "z = 4 and a = 2 and o = 0".
(function (B) {
  'use strict';
  var spec = null, st = {}, ui = {};
  var IDS = ['input', 'processor', 'memory', 'storage', 'output'];
  var JOBS = {
    input: 'Takes in what you do: a button press or a key',
    processor: 'Follows the instructions: works out what happens next',
    memory: 'Holds what the computer is using right now, while it is on',
    storage: 'Keeps things when the power is off, like a saved game',
    output: 'Shows or plays the result: the screen and the speaker',
  };
  var JOBLIST = IDS.map(function (id) { return JOBS[id]; });
  var CSS = '.ptwrap{display:flex;flex-direction:column;gap:12px;padding:12px;height:100%;box-sizing:border-box;overflow:auto}' +
    '.ptgrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}' +
    '@media (max-width:640px){.ptgrid{grid-template-columns:repeat(2,minmax(0,1fr))}}' +
    '.ptcard{border:2px solid var(--line);border-radius:12px;background:var(--card);padding:10px;display:flex;flex-direction:column;gap:6px;min-width:0}' +
    '.ptcard.lit{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 25%,transparent)}' +
    '.ptcard.out{opacity:.45;border-style:dashed}' +
    '.ptcard b{font-size:17px}.ptstep{font:700 13px/1 system-ui,sans-serif;color:var(--accent);min-height:1em}' +
    '.ptjob{font-size:13px;color:var(--muted)}.ptval{font:700 22px/1.1 ui-monospace,Menlo,Consolas,monospace}' +
    '.ptcard select{font:inherit;font-size:13px;max-width:100%;padding:4px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)}' +
    '.ptcard.ok select{border-color:var(--ok)}.ptcard button,.ptbar button{font:600 14px/1.2 system-ui,sans-serif;padding:7px 10px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}' +
    '.ptbar{display:flex;flex-wrap:wrap;gap:8px}.ptbar button.go{border-color:var(--accent)}' +
    '.ptpath{margin:0;font-size:15px}.ptres{margin:0;font-weight:600}.ptres.ok{color:var(--ok)}.ptres.no{color:var(--accent)}';
  function style() { if (document.getElementById('ptcss')) return; var s = document.createElement('style'); s.id = 'ptcss'; s.textContent = CSS; document.head.appendChild(s); }
  function h(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }

  function parse(s) {
    s.dev = String(s.device || 'console').toLowerCase();
    if (['console', 'laptop'].indexOf(s.dev) < 0) throw new Error('device: console or laptop.');
    s.jobsOn = !/^off$/i.test(s.jobs || '');
    s.match = /^on$/i.test(s.match || '');
    s.remove = /^on$/i.test(s.remove || '');
    var acts = String(s.actions || 'press, save, restart, load').toLowerCase().split(/[\s,]+/).filter(Boolean);
    acts.forEach(function (a) { if (['press', 'save', 'restart', 'load'].indexOf(a) < 0) throw new Error('actions: press, save, restart, load.'); });
    s.acts = acts;
    s.score0 = s.score === undefined ? 0 : Number(s.score);
    if (!(s.score0 >= 0 && s.score0 <= 99)) throw new Error('score: 0 to 99.');
  }
  function names() {
    return spec.dev === 'laptop'
      ? { input: 'Keyboard (input)', processor: 'Processor', memory: 'Memory', storage: 'Storage', output: 'Screen (output)' }
      : { input: 'Buttons (input)', processor: 'Processor', memory: 'Memory', storage: 'Storage', output: 'Screen (output)' };
  }
  function blank() { return { out: {}, mem: spec.score0, saved: -1, shown: spec.score0, last: 0, ok: 0, path: [], msg: '', n: 0, pick: {} }; }
  function has(id) { return !st.out[id]; }

  function act(a) {
    var p = [], ok = 1, msg = '';
    st.n++;
    if (a === 'press') {
      if (!has('input')) { ok = 0; msg = 'Nothing happens: with no buttons, the console never hears the press.'; }
      else if (!has('processor')) { ok = 0; p = ['input']; msg = 'The press goes nowhere: with no processor, nothing works out what to do.'; }
      else if (!has('memory')) { ok = 0; p = ['input', 'processor']; msg = 'The processor has nowhere to keep the score while it works, so nothing can run.'; }
      else {
        st.mem++; p = ['input', 'processor', 'memory', 'processor', 'output'];
        if (has('output')) { st.shown = st.mem; msg = 'The score goes up to ' + st.mem + ' and shows on the screen.'; }
        else { ok = 0; st.shown = -1; msg = 'The score goes up to ' + st.mem + ' in memory, but with no screen, nobody can see it.'; }
      }
    } else if (a === 'save') {
      if (!has('processor')) { ok = 0; msg = 'Nothing happens: with no processor, nothing follows the Save instruction.'; }
      else if (!has('memory')) { ok = 0; p = ['processor']; msg = 'There is no score to save: memory is missing.'; }
      else if (!has('storage')) { ok = 0; p = ['processor', 'memory']; msg = 'Can\'t save: there is no storage to keep the game in.'; }
      else { st.saved = st.mem; p = ['memory', 'processor', 'storage']; msg = 'Saved: storage now keeps a score of ' + st.saved + '.'; }
    } else if (a === 'restart') {
      st.mem = 0; st.shown = has('output') ? 0 : -1; p = []; msg = 'Off and on again: memory is empty, so the score is back to 0.' + (st.saved >= 0 ? ' Storage still keeps ' + st.saved + '.' : ' Nothing was saved.');
    } else if (a === 'load') {
      if (!has('processor')) { ok = 0; msg = 'Nothing happens: with no processor, nothing follows the Load instruction.'; }
      else if (!has('storage')) { ok = 0; p = ['processor']; msg = 'Can\'t load: there is no storage.'; }
      else if (st.saved < 0) { ok = 0; p = ['processor', 'storage']; msg = 'Nothing to load: no game was saved.'; }
      else if (!has('memory')) { ok = 0; p = ['storage', 'processor']; msg = 'Nowhere to put the game while you play: memory is missing.'; }
      else {
        st.mem = st.saved; p = ['storage', 'memory', 'processor', 'output'];
        if (has('output')) { st.shown = st.mem; msg = 'Loaded: the saved score, ' + st.mem + ', is back in memory and on the screen.'; }
        else { ok = 0; st.shown = -1; msg = 'Loaded into memory, but with no screen, nobody can see it.'; }
      }
    }
    st.last = { press: 1, save: 2, restart: 3, load: 4 }[a]; st.ok = ok; st.path = p; st.msg = msg;
  }

  function draw() {
    style();
    var host = B.el('board'); host.replaceChildren();
    var wrap = h('div', 'ptwrap'), grid = h('div', 'ptgrid'), N = names();
    grid.setAttribute('role', 'group'); grid.setAttribute('aria-label', 'The parts of the ' + (spec.dev === 'laptop' ? 'laptop' : 'games console'));
    IDS.forEach(function (id) {
      var steps = []; st.path.forEach(function (q, i) { if (q === id) steps.push(i + 1); });
      var c = h('div', 'ptcard' + (steps.length ? ' lit' : '') + (st.out[id] ? ' out' : '') + (spec.match && st.pick[id] === JOBS[id] ? ' ok' : ''));
      c.appendChild(h('div', 'ptstep', steps.length ? 'Step ' + steps.join(', ') : ''));
      c.appendChild(h('b', '', N[id]));
      if (st.out[id]) c.appendChild(h('div', 'ptjob', 'Taken out'));
      else if (spec.jobsOn && !spec.match) c.appendChild(h('div', 'ptjob', JOBS[id]));
      if (!st.out[id] && id === 'memory') c.appendChild(h('div', 'ptval', 'Score ' + st.mem));
      if (!st.out[id] && id === 'storage') c.appendChild(h('div', 'ptval', st.saved < 0 ? 'Nothing saved' : 'Saved ' + st.saved));
      if (!st.out[id] && id === 'output') c.appendChild(h('div', 'ptval', st.shown < 0 ? '(blank)' : 'Score ' + st.shown));
      if (spec.match) {
        var sel = document.createElement('select'); sel.setAttribute('aria-label', N[id] + ': what does it do?');
        var o0 = document.createElement('option'); o0.value = ''; o0.textContent = 'What does it do?'; sel.appendChild(o0);
        JOBLIST.forEach(function (j) { var o = document.createElement('option'); o.value = j; o.textContent = j; if (st.pick[id] === j) o.selected = true; sel.appendChild(o); });
        sel.addEventListener('change', function () { st.pick[id] = sel.value; B.moved = true; draw(); report(); });
        c.appendChild(sel);
      }
      if (spec.remove) {
        var b = h('button', '', st.out[id] ? 'Put back' : 'Take out'); b.type = 'button';
        b.setAttribute('aria-label', (st.out[id] ? 'Put back the ' : 'Take out the ') + N[id].replace(/ \(.*\)/, '').toLowerCase());
        b.addEventListener('click', function () { st.out[id] = !st.out[id]; st.path = []; st.msg = ''; st.last = 0; B.moved = true; draw(); report(); });
        c.appendChild(b);
      }
      grid.appendChild(c);
    });
    wrap.appendChild(grid);
    var bar = h('div', 'ptbar');
    var L = { press: spec.dev === 'laptop' ? 'Press a key' : 'Press A', save: 'Save the game', restart: 'Turn off and on', load: 'Load the game' };
    spec.acts.forEach(function (a) {
      var b = h('button', a === 'press' ? 'go' : '', L[a]); b.type = 'button';
      b.addEventListener('click', function () { act(a); B.moved = true; draw(); report(); });
      bar.appendChild(b);
    });
    wrap.appendChild(bar);
    if (st.path.length) wrap.appendChild(h('p', 'ptpath', 'Path: ' + st.path.map(function (q) { return N[q].replace(/ \(.*\)/, ''); }).join(' → ')));
    if (st.msg) wrap.appendChild(h('p', 'ptres ' + (st.ok ? 'ok' : 'no'), st.msg));
    host.appendChild(wrap);
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    ui.work = h('p', 'rulework'); ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    var bar = h('div', 'gbar bbar'); var again = h('button', 'quiet', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function report() {
    var gone = IDS.filter(function (id) { return st.out[id]; }), k = 0;
    IDS.forEach(function (id) { if (st.pick[id] === JOBS[id]) k++; });
    var text = st.msg || (spec.match ? k + ' of 5 jobs matched.' : 'Score in memory: ' + st.mem + (st.saved >= 0 ? '. Saved: ' + st.saved : '') + '.');
    if (spec.match && st.msg) text += ' ' + k + ' of 5 jobs matched.';
    ui.work.textContent = text; B.say(text);
    B.save({ st: st });
    B.post({ scope: { vars: { a: st.last, o: st.ok, s: st.shown, m: st.mem, g: st.saved, z: gone.length ? IDS.indexOf(gone[0]) + 1 : 0, r: gone.length, k: k, n: st.n }, points: {} } }, text);
  }

  B.widget('parts', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'The parts inside a ' + (String(s.device || '').toLowerCase() === 'laptop' ? 'laptop' : 'games console'); },
    parse: parse,
    redraw: function () { if (spec) { draw(); report(); } },
    start: function (fresh) {
      spec = B.spec;
      var sv = fresh ? null : B.saved();
      st = sv && sv.st ? Object.assign(blank(), sv.st) : blank();
      paintPanel(); draw(); report();
    },
  });
})(WPB);
