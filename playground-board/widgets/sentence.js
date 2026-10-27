// Sentence: build a sentence from pieces, choose punctuation for meaning, or write your own and see simple counts
// (English › Building sentences and Punctuation for meaning). The text is data: planted answers are in the setup, and
// a student's own writing is only counted here, never judged (a partner or the teacher judges it). Labelling clauses and
// choosing between verb forms use the cohesion board's parts mode and gaps, so they are not repeated here.
//   widget: sentence
//   mode: build | punct | write
//
//   build   Pieces (tiles) go in a tray; the student clicks them into a sentence line and moves them about.
//     tile a: although the creek was low^     a piece, written as it reads in the middle of a sentence (lower case).
//                                             The first piece gets a capital; ^ adds a comma when it comes first.
//     decoy d: because                        a piece that does not belong (no one right answer uses it)
//     ans: a b                                a right order (ids of the real pieces, each exactly once); more ans: lines add more
//     end: .                                  the mark that ends the sentence (default a full stop)
//     before: Nib wrote two short sentences.  optional text shown above the tray ("Start with")
//   punct   One or more paragraphs with slots for punctuation. [[{,|;|nothing}=;]] is a slot: the choices, then the right
//           ones after = (several: ;/,). "nothing" is the choice of no mark. Where the slot sits decides how it attaches:
//           no space before it = joins the word before (, ; : ) ' s); a space before and none after = joins the word
//           after (an opening bracket); a space each side = stands alone (a dash). Slots start unset.
//     p: The creek was low[[{,|;|nothing}=;]] the walkers crossed it.      one line per paragraph
//   write   A box to write in; the board counts. p: lines give a starting text (to rewrite) or nothing to start empty.
//     counts: commas semicolons colons dashes brackets apostrophes quotes joiners who short long
//                                             extra counts to show beside words and sentences
//   all     answer: on  starts solved and read-only, for Explain-it-to-me pictures (explainPicture), never a step
//           as: student (write, in a -solution region) counts the text as the student's own writing
// state: { scope: { vars: {...}, points: {} }, text } with these values (all have an underscore):
//   build: n_tiles (real pieces), n_placed, n_decoys_used, in_order, first_ok, has_<id>, first_<id>
//   punct: n_slots, n_set, n_right, n_wrong, slot_N (the chosen option's number, 0 = unset)
//   write: is_written (1 once the text differs from the start), and always n_words, n_sentences
//   counts (write): n_commas, n_semicolons, n_colons, n_dashes, n_brackets, n_apostrophes, n_quotes (opening quotation marks), n_joiners (different
//     subordinating joining words), n_who (who, which, whose), n_short (sentences of 5 words or fewer), n_long (15 or
//     more), longest, shortest. Rough counts of marks and words, never a judgement.
(function (B) {
  'use strict';
  var MODES = ['build', 'punct', 'write'];
  var SUBORD = ['although', 'because', 'since', 'while', 'whereas', 'if', 'unless', 'when', 'whenever', 'before', 'after',
    'until', 'though', 'once', 'so that', 'as soon as'];
  var COUNTS = ['commas', 'semicolons', 'colons', 'dashes', 'brackets', 'apostrophes', 'quotes', 'joiners', 'who', 'short', 'long'];
  var COUNT_LABEL = { commas: 'commas', semicolons: 'semicolons', colons: 'colons', dashes: 'dashes', brackets: 'brackets', apostrophes: 'apostrophes',
    quotes: 'quotation marks', joiners: 'joining words', who: 'who/which/whose', short: 'short sentences', long: 'long sentences' };

  // ---------- the pure part (tools/check-sentence.mjs uses it as B.sentenceCore) ----------
  var copy = function (o) { return JSON.parse(JSON.stringify(o)); };
  var words = function (t) { return (String(t).match(/\S+/g) || []).length; };
  var sentenceList = function (t) { return String(t).match(/[^.!?]*[A-Za-z][^.!?]*[.!?]+|[^.!?]*[A-Za-z][^.!?]*$/g) || []; };
  var count = function (t, re) { return (String(t).match(re) || []).length; };
  var same = function (a, b) { return a.length === b.length && a.every(function (x, i) { return x === b[i]; }); };

  /** The setup (as core.js reads it: spec.items) into a model. Throws a plain message. */
  function build(s) {
    var mode = String(s.mode || 'build').toLowerCase();
    if (MODES.indexOf(mode) < 0) throw new Error('mode: ' + MODES.join(', ') + '.');
    var m = { mode: mode, tiles: [], answers: [], before: '', end: '.', paras: [], slots: [], start: '', counts: [], answer: false, own: false };
    if (s.answer !== undefined) { if (!/^(on|off)$/i.test(s.answer)) throw new Error('answer: on or off.'); m.answer = /^on$/i.test(s.answer); }
    if (s.as !== undefined) { if (!/^student$/i.test(s.as)) throw new Error('as: student (or leave it out).'); m.own = true; }
    if (s.end !== undefined) { if (!/^[.!?]$/.test(s.end)) throw new Error('end: . or ? or !'); m.end = s.end; }
    if (s.before !== undefined) m.before = s.before;
    var lines = [];
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'tile' || it.kind === 'decoy') {
        if (mode !== 'build') throw new Error(where + ': ' + it.kind + ' lines are for mode: build.');
        if (!it.name) throw new Error(where + ': name the piece, as in "tile a: although it was low".');
        if (m.tiles.some(function (t) { return t.id === it.name; })) throw new Error(where + ': there are two pieces called "' + it.name + '".');
        var t = it.value, hat = /\^$/.test(t); if (hat) t = t.replace(/\^$/, '').trim();
        if (!t) throw new Error(where + ': the piece has no words.');
        m.tiles.push({ id: it.name, t: t, hat: hat, decoy: it.kind === 'decoy' });
      } else if (it.kind === 'ans') {
        if (mode !== 'build') throw new Error(where + ': ans lines are for mode: build.');
        m.answers.push(it.value.split(/[\s,]+/).filter(Boolean));
      } else if (it.kind === 'p') {
        if (mode === 'build') throw new Error(where + ': build mode uses tile lines (and before:), not p:.');
        lines.push({ text: it.value, line: it.line });
      }
    });
    if (mode === 'build') {
      var real = m.tiles.filter(function (t) { return !t.decoy; }).map(function (t) { return t.id; });
      if (real.length < 2) throw new Error('A build board needs at least two pieces (tile lines).');
      if (!m.answers.length) throw new Error('A build board needs an "ans: a b c" line (the right order).');
      m.answers.forEach(function (a) {
        a.forEach(function (id) {
          var t = m.tiles.filter(function (x) { return x.id === id; })[0];
          if (!t) throw new Error('ans: there is no piece called "' + id + '".');
          if (t.decoy) throw new Error('ans: "' + id + '" is a decoy, so no right answer can use it.');
        });
        if (!same(a.slice().sort(), real.slice().sort())) throw new Error('ans: "' + a.join(' ') + '" must use every real piece exactly once.');
      });
    }
    if (mode === 'punct') {
      if (!lines.length) throw new Error('A punct board needs at least one "p:" line.');
      lines.forEach(function (ln) { m.paras.push(readPunct(ln.text, m, 'Line ' + ln.line)); });
      if (!m.slots.length) throw new Error('A punct board needs at least one slot, like [[{,|;|nothing}=;]].');
    }
    if (mode === 'write') {
      m.start = lines.map(function (l) { return l.text; }).join('\n\n');
      String(s.counts || '').split(/[\s,]+/).filter(Boolean).forEach(function (c) {
        if (COUNTS.indexOf(c) < 0) throw new Error('counts: "' + c + '" is not ' + COUNTS.join(', ') + '.');
        m.counts.push(c);
      });
    }
    return m;
  }

  /** One punct paragraph: pieces of words and slots. */
  function readPunct(text, m, where) {
    var re = /\[\[(.+?)\]\]/g, last = 0, hit, out = [];
    // glue: text straight after a slot (no space) joins it, as the closing quotation mark does in ?'
    function plain(s, glue) {
      s = String(s); var first = true;
      s.split(/\s+/).forEach(function (w, i) { if (w) { out.push(glue && first && i === 0 ? { w: w, glue: true } : { w: w }); first = false; } });
    }
    while ((hit = re.exec(text))) {
      plain(text.slice(last, hit.index), last > 0);
      var mm = /^\{(.+)\}=(.+)$/.exec(hit[1]);
      if (!mm) throw new Error(where + ': "[[' + hit[1] + ']]" should look like [[{,|;|nothing}=;]] (the choices, then the right ones).');
      var opts = mm[1].split('|').map(function (x) { return x.trim(); }), right = mm[2].split('/').map(function (x) { return x.trim(); });
      if (opts.length < 2) throw new Error(where + ': a slot needs at least two choices.');
      right.forEach(function (r) { if (opts.indexOf(r) < 0) throw new Error(where + ': slot answer "' + r + '" is not one of ' + opts.join(' ') + '.'); });
      var before = hit.index > 0 ? text.charAt(hit.index - 1) : ' ', after = text.charAt(hit.index + hit[0].length) || ' ';
      var side = /\s/.test(before) ? (/\s/.test(after) ? 'free' : 'open') : 'close';
      var slot = { n: m.slots.length + 1, opts: opts, right: right, side: side };
      m.slots.push(slot); out.push({ slot: slot });
      last = re.lastIndex;
    }
    plain(text.slice(last), last > 0);
    return out;
  }
  var markOf = function (opt) { return opt === 'nothing' ? '' : opt; };

  function freshState(m) {
    if (m.mode === 'build') return { placed: [] };
    if (m.mode === 'punct') return { choice: {} };
    return { text: undefined };
  }

  /** The sentence the placed pieces make. */
  function sentence(m, ids) {
    if (!ids.length) return '';
    var byId = {}; m.tiles.forEach(function (t) { byId[t.id] = t; });
    var parts = ids.map(function (id, i) {
      var t = byId[id], s = t.t;
      if (i === 0) { if (t.hat && ids.length > 1) s += ','; s = s.charAt(0).toUpperCase() + s.slice(1); }
      return s;
    });
    return parts.join(' ') + m.end;
  }

  /** A punct paragraph as text, with each slot's chosen mark attached the way its place says. */
  function paraText(m, st, para) {
    var out = '', glue = false;
    para.forEach(function (p) {
      if (p.w !== undefined) { out += (out && !glue && !p.glue ? ' ' : '') + p.w; glue = false; return; }
      var c = st.choice[p.slot.n], mk = c === undefined ? '' : markOf(p.slot.opts[c]);
      if (!mk) return;
      if (p.slot.side === 'close') out += mk;
      else if (p.slot.side === 'open') { out += (out ? ' ' : '') + mk; glue = true; }
      else { out += (out ? ' ' : '') + mk; glue = false; }
    });
    return out;
  }

  function plainText(m, st) {
    if (m.mode === 'build') return sentence(m, st.placed);
    if (m.mode === 'punct') return m.paras.map(function (p) { return paraText(m, st, p); }).join('\n\n');
    return st.text !== undefined ? st.text : m.start;
  }

  /** The values lesson checks read. */
  function values(m, st, written) {
    var v = {}, text = plainText(m, st);
    v.n_words = words(text); v.n_sentences = sentenceList(text).length;
    if (m.mode === 'build') {
      var real = m.tiles.filter(function (t) { return !t.decoy; });
      v.n_tiles = real.length; v.n_placed = st.placed.length;
      v.n_decoys_used = st.placed.filter(function (id) { return m.tiles.filter(function (t) { return t.id === id && t.decoy; }).length; }).length;
      v.in_order = m.answers.some(function (a) { return same(a, st.placed); }) ? 1 : 0;
      v.first_ok = st.placed.length && m.answers.some(function (a) { return a[0] === st.placed[0]; }) ? 1 : 0;
      m.tiles.forEach(function (t) { v['has_' + t.id] = st.placed.indexOf(t.id) >= 0 ? 1 : 0; v['first_' + t.id] = st.placed[0] === t.id ? 1 : 0; });
    }
    if (m.mode === 'punct') {
      var set = 0, right = 0, wrong = 0;
      m.slots.forEach(function (s) {
        var c = st.choice[s.n];
        v['slot_' + s.n] = c === undefined ? 0 : c + 1;
        if (c !== undefined) { set++; if (s.right.indexOf(s.opts[c]) >= 0) right++; else wrong++; }
      });
      v.n_slots = m.slots.length; v.n_set = set; v.n_right = right; v.n_wrong = wrong;
    }
    if (m.mode === 'write') {
      v.is_written = written || (st.text !== undefined && st.text !== m.start && st.text.trim()) ? 1 : 0;
      var low = ' ' + text.toLowerCase().replace(/[^a-z' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
      var lens = sentenceList(text).map(words);
      v.n_commas = count(text, /,/g); v.n_semicolons = count(text, /;/g); v.n_colons = count(text, /:/g);
      v.n_dashes = count(text, /[–—]|\s-\s|--/g); v.n_brackets = count(text, /\(/g);
      v.n_apostrophes = count(text, /['’]/g); v.n_quotes = count(text, /(^|[\s(])['‘“"]/g);
      v.n_joiners = SUBORD.filter(function (c) { return low.indexOf(' ' + c + ' ') >= 0; }).length;
      v.n_who = count(low, / (who|which|whose) /g);
      v.n_short = lens.filter(function (n) { return n <= 5; }).length; v.n_long = lens.filter(function (n) { return n >= 15; }).length;
      v.longest = lens.length ? Math.max.apply(null, lens) : 0; v.shortest = lens.length ? Math.min.apply(null, lens) : 0;
    }
    return v;
  }

  /** The finished state an author meant: every planted move made. Used to test that each check can be passed. */
  function solve(m) {
    var st = freshState(m);
    if (m.mode === 'build') st.placed = m.answers[0].slice();
    if (m.mode === 'punct') m.slots.forEach(function (s) { st.choice[s.n] = s.opts.indexOf(s.right[0]); });
    return st;
  }

  /** The same line reader as core.js (for Node checks). */
  function specFromText(text) {
    var s = { items: [] };
    String(text || '').split('\n').forEach(function (line, i) {
      var t = line.replace(/(^|\s+)#.*$/, '');
      var mm = /^\s*([a-z]+)(?:\s+([A-Za-z]\w*))?\s*:\s*(.*?)\s*$/i.exec(t);
      if (!mm) { if (t.trim()) throw new Error('Line ' + (i + 1) + ' needs "key: value".'); return; }
      s.items.push({ kind: mm[1].toLowerCase(), name: mm[2] || null, value: mm[3], line: i + 1 });
      if (!mm[2] && mm[3] !== '') s[mm[1]] = mm[3];
    });
    return s;
  }
  B.sentenceCore = { build: build, freshState: freshState, values: values, solve: solve, plainText: plainText, specFromText: specFromText };

  // ---------- on the page ----------
  var M, S, ui, sel = null;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(label, fn, cls) { var b = el('button', cls || '', label); b.type = 'button'; b.addEventListener('click', fn); return b; }
  function say(t) { if (ui && ui.tip) ui.tip.textContent = t; }

  function report() {
    var v = values(M, S, false);
    if (!M.answer) B.save({ st: S });
    var out;
    if (M.mode === 'build') out = v.n_placed + ' of ' + v.n_tiles + ' pieces placed';
    else if (M.mode === 'punct') out = v.n_set + ' of ' + v.n_slots + ' marks chosen';
    else out = v.n_words + ' words';
    B.post({ scope: { vars: v, points: {} }, text: plainText(M, S) }, out);
  }
  function change() { B.moved = true; draw(); report(); }

  function tileById(id) { return M.tiles.filter(function (t) { return t.id === id; })[0]; }

  function drawBuild() {
    var paper = ui.paper; paper.replaceChildren();
    if (M.before) { var b = el('p', 'se-before'); b.appendChild(el('b', '', 'Start with: ')); b.appendChild(document.createTextNode(M.before)); paper.appendChild(b); }
    if (!M.answer) {
      var tray = el('div', 'se-tray'); tray.setAttribute('role', 'group'); tray.setAttribute('aria-label', 'Pieces to use');
      var left = M.tiles.filter(function (t) { return S.placed.indexOf(t.id) < 0; });
      left.forEach(function (t) {
        var tb = btn(t.t.replace(/\^$/, ''), function () {
          var at = sel && S.placed.indexOf(sel) >= 0 ? S.placed.indexOf(sel) + 1 : S.placed.length;
          S.placed.splice(at, 0, t.id); sel = t.id;
          say('Placed. Click a piece in your sentence to move it, or choose another piece.'); change();
        }, 'se-tile');
        tray.appendChild(tb);
      });
      if (!left.length) tray.appendChild(el('span', 'se-none', 'All the pieces are in your sentence.'));
      paper.appendChild(tray);
    }
    var strip = el('div', 'se-strip' + (M.answer ? ' se-strip-answer' : '')); strip.setAttribute('role', 'group'); strip.setAttribute('aria-label', 'Your sentence');
    S.placed.forEach(function (id, i) {
      var t = tileById(id);
      var label = i === 0 ? t.t.charAt(0).toUpperCase() + t.t.slice(1) : t.t;
      var tb = el(M.answer ? 'span' : 'button', 'se-tile se-placed' + (sel === id && !M.answer ? ' se-sel' : ''), label);
      if (!M.answer) { tb.type = 'button'; tb.addEventListener('click', function () { sel = sel === id ? null : id; say(sel ? 'Use the buttons to move this piece or take it out.' : ''); draw(); }); }
      strip.appendChild(tb);
    });
    if (!S.placed.length) strip.appendChild(el('span', 'se-none', 'Click pieces above to build your sentence here.'));
    paper.appendChild(strip);
    var read = el('p', 'se-read'); read.appendChild(el('b', '', 'It reads: ')); read.appendChild(document.createTextNode(sentence(M, S.placed) || '(nothing yet)'));
    paper.appendChild(read);
  }

  function drawPunct() {
    var paper = ui.paper; paper.replaceChildren();
    M.paras.forEach(function (para) {
      var pe = el('p', 'se-p'), glue = false;
      para.forEach(function (p) {
        if (p.w !== undefined) {
          if (pe.lastChild && !glue && !p.glue) pe.appendChild(document.createTextNode(' '));
          pe.appendChild(document.createTextNode(p.w)); glue = false; return;
        }
        var s = p.slot, c = S.choice[s.n];
        if (s.side !== 'close' && pe.lastChild && !glue) pe.appendChild(document.createTextNode(' '));
        var node;
        if (M.answer) {
          var mk = c === undefined ? '' : markOf(s.opts[c]);
          node = el('span', 'se-mark', mk || ' ');
        } else {
          node = el('select', 'se-slot'); node.setAttribute('aria-label', 'Punctuation, mark ' + s.n + ' of ' + M.slots.length);
          var blank = el('option', '', '…'); blank.value = ''; node.appendChild(blank);
          s.opts.forEach(function (o, k) { var op = el('option', '', o === 'nothing' ? '(none)' : o); op.value = String(k); if (c === k) op.selected = true; node.appendChild(op); });
          node.addEventListener('change', function () { if (node.value === '') delete S.choice[s.n]; else S.choice[s.n] = Number(node.value); B.moved = true; report(); drawLive(); });
        }
        pe.appendChild(node); glue = s.side === 'open';
      });
      paper.appendChild(pe);
    });
    if (!M.answer) { ui.live = el('p', 'se-read'); paper.appendChild(ui.live); drawLive(); }
  }
  function drawLive() {
    if (!ui.live) return;
    ui.live.replaceChildren(); ui.live.appendChild(el('b', '', 'It reads: '));
    ui.live.appendChild(document.createTextNode(plainText(M, S).replace(/\n\n/g, ' ') || '(nothing yet)'));
  }

  function drawWrite() {
    var paper = ui.paper; paper.replaceChildren();
    if (M.answer) { String(plainText(M, S)).split(/\n\n|\n/).forEach(function (t) { if (t.trim()) paper.appendChild(el('p', 'se-p', t)); }); return; }
    var ta = el('textarea', 'se-area'); ta.rows = 8; ta.value = plainText(M, S); ta.setAttribute('aria-label', 'Your own writing');
    ta.addEventListener('input', function () { S.text = ta.value; B.moved = true; report(); drawCounts(); });
    paper.appendChild(ta);
    ui.counts = el('p', 'se-counts'); paper.appendChild(ui.counts); drawCounts();
  }
  function drawCounts() {
    if (!ui.counts) return;
    var v = values(M, S, false), bits = [v.n_words + ' words', v.n_sentences + (v.n_sentences === 1 ? ' sentence' : ' sentences')];
    M.counts.forEach(function (c) { bits.push(COUNT_LABEL[c] + ': ' + v['n_' + c]); });
    ui.counts.textContent = 'The board counts: ' + bits.join(' · ') + '. It counts only; it cannot tell whether your writing is good.';
  }

  function drawBar() {
    var bar = ui.bar; bar.replaceChildren(); bar.hidden = true;
    if (M.mode !== 'build' || M.answer || !sel || S.placed.indexOf(sel) < 0) return;
    var i = S.placed.indexOf(sel), row = el('div', 'se-row');
    row.appendChild(btn('Move left', function () { if (i > 0) { S.placed[i] = S.placed[i - 1]; S.placed[i - 1] = sel; change(); } }, i === 0 ? 'se-off' : ''));
    row.appendChild(btn('Move right', function () { if (i < S.placed.length - 1) { S.placed[i] = S.placed[i + 1]; S.placed[i + 1] = sel; change(); } }, i === S.placed.length - 1 ? 'se-off' : ''));
    row.appendChild(btn('Take it out', function () { S.placed.splice(i, 1); sel = null; say(''); change(); }));
    row.appendChild(btn('Done', function () { sel = null; say(''); draw(); }));
    bar.appendChild(row); bar.hidden = false;
  }

  function draw() {
    if (M.mode === 'build') { drawBuild(); drawBar(); }
    else if (M.mode === 'punct') drawPunct();
    else drawWrite();
  }

  B.widget('sentence', {
    sections: ['gpanel'],
    label: function () { return 'A sentence to build or punctuate'; },
    parse: function (s) { s.se = build(s); },
    start: function (fresh) {
      var spec = B.spec; M = copy(spec.se); S = M.answer ? solve(M) : freshState(M);
      if (M.mode === 'write' && M.answer) S.text = undefined;
      var sv = M.answer || fresh ? null : B.saved();
      if (sv && sv.st && typeof sv.st === 'object') {
        var o = sv.st;
        if (M.mode === 'build' && Array.isArray(o.placed)) S.placed = o.placed.filter(function (id) { return tileById(id); });
        if (M.mode === 'punct' && o.choice && typeof o.choice === 'object') S.choice = o.choice;
        if (M.mode === 'write' && typeof o.text === 'string') S.text = o.text;
      }
      sel = null;
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = {};
      ui.bar = el('div', 'se-bar'); panel.appendChild(ui.bar);
      ui.tip = el('p', 'se-tip'); panel.appendChild(ui.tip);
      var holder = el('div', 'se-holder' + (M.answer ? ' se-answer' : ''));
      ui.paper = el('div', 'se-paper'); holder.appendChild(ui.paper); panel.appendChild(holder);
      if (M.answer) { ui.bar.hidden = true; ui.tip.hidden = true; }
      else {
        var row = el('div', 'gbar'); var again = el('button', '', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart); row.appendChild(again); panel.appendChild(row);
        say(M.mode === 'build' ? 'Click the pieces in the order they should read.' : M.mode === 'punct' ? 'Choose a mark for each box, then read the sentence.' : 'Write in the box. The board counts as you go.');
      }
      draw(); report();
    },
  });
})(WPB);
