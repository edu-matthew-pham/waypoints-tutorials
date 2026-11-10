// Word choice: place words on a scale, or swap a word in a sentence and see where it sits (English › Language for people
// and situations, Judging and persuading). The scale is rough: a word can have more than one acceptable band, and
// where an answer is defensible it is accepted or left out. Colouring words by tone uses the cohesion board's chain mode.
//   widget: wordchoice
//   mode: scale | swap
//   bands: Casual | Neutral | Formal      the labels along the scale, left to right (2 to 7)
//   before: A note to the principal.      optional text above the board
//   scale   Words go in a tray; the student picks a word, then the band it belongs in.
//     word a: mate = 1                    a word or phrase and its right band(s): = 2 or = 2/3 (more than one is accepted)
//   swap    Sentences with a word to choose. [[{mate@1|friend@2|colleague@3}=colleague]] is a slot: the choices (each with the
//           band it sits in after @), then the right choice(s) after =. The board shows where the chosen word sits.
//     p: Please tell your [[{mate@1|colleague@3}=colleague]] about the change.      one line per paragraph
//   all     answer: on  starts solved and read-only, for Explain-it-to-me pictures (explainPicture), never a step
// state: { scope: { vars: {...}, points: {} }, text } with these values (all have an underscore):
//   scale: n_words, n_placed, n_right, n_wrong, w_<id> (the band number chosen, 0 = still in the tray)
//   swap:  n_slots, n_set, n_right, n_wrong, slot_N (the chosen option's number, 0 = unset), band_N (that word's band)
(function (B) {
  'use strict';
  var MODES = ['scale', 'swap'];
  var copy = function (o) { return JSON.parse(JSON.stringify(o)); };

  // ---------- the pure part (tools/check-wordchoice.mjs uses it as B.wordchoiceCore) ----------
  function bandsOf(s) {
    var list = String(s.bands || '').split('|').map(function (x) { return x.trim(); }).filter(Boolean);
    if (list.length < 2 || list.length > 7) throw new Error('bands: 2 to 7 labels with | between them, as in "bands: Casual | Neutral | Formal".');
    return list;
  }

  function build(s) {
    var mode = String(s.mode || 'scale').toLowerCase();
    if (MODES.indexOf(mode) < 0) throw new Error('mode: ' + MODES.join(', ') + '.');
    var m = { mode: mode, bands: bandsOf(s), words: [], paras: [], slots: [], before: s.before || '', answer: false };
    if (s.answer !== undefined) { if (!/^(on|off)$/i.test(s.answer)) throw new Error('answer: on or off.'); m.answer = /^on$/i.test(s.answer); }
    var lines = [];
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'word') {
        if (mode !== 'scale') throw new Error(where + ': word lines are for mode: scale.');
        if (!it.name) throw new Error(where + ': name the word, as in "word a: mate = 1".');
        if (m.words.some(function (w) { return w.id === it.name; })) throw new Error(where + ': there are two words called "' + it.name + '".');
        var mm = /^(.+?)\s*=\s*([\d/]+)$/.exec(it.value);
        if (!mm) throw new Error(where + ': write the word and its band, as in "word a: mate = 1" (or = 2/3).');
        var right = mm[2].split('/').map(Number);
        right.forEach(function (r) { if (!(r >= 1 && r <= m.bands.length)) throw new Error(where + ': band ' + r + ' is not on the scale (1 to ' + m.bands.length + ').'); });
        m.words.push({ id: it.name, t: mm[1].trim(), right: right });
      } else if (it.kind === 'p') {
        if (mode !== 'swap') throw new Error(where + ': p: lines are for mode: swap.');
        lines.push({ text: it.value, line: it.line });
      }
    });
    if (mode === 'scale' && m.words.length < 2) throw new Error('A scale board needs at least two "word" lines.');
    if (mode === 'swap') {
      if (!lines.length) throw new Error('A swap board needs at least one "p:" line.');
      lines.forEach(function (ln) { m.paras.push(readSwap(ln.text, m, 'Line ' + ln.line)); });
      if (!m.slots.length) throw new Error('A swap board needs at least one slot, like [[{mate@1|colleague@3}=colleague]].');
    }
    return m;
  }

  /** One swap paragraph: pieces of text and slots. */
  function readSwap(text, m, where) {
    var re = /\[\[(.+?)\]\]/g, last = 0, hit, out = [];
    while ((hit = re.exec(text))) {
      if (hit.index > last) out.push({ t: text.slice(last, hit.index) });
      var mm = /^\{(.+)\}=(.+)$/.exec(hit[1]);
      if (!mm) throw new Error(where + ': "[[' + hit[1] + ']]" should look like [[{mate@1|colleague@3}=colleague]].');
      var opts = mm[1].split('|').map(function (x) {
        var p = /^(.*?)(?:@(\d))?$/.exec(x.trim());
        var band = p[2] ? Number(p[2]) : 0;
        if (band && band > m.bands.length) throw new Error(where + ': band ' + band + ' is not on the scale (1 to ' + m.bands.length + ').');
        return { t: p[1].trim(), band: band };
      });
      var right = mm[2].split('/').map(function (x) { return x.trim(); });
      if (opts.length < 2) throw new Error(where + ': a slot needs at least two choices.');
      right.forEach(function (r) { if (!opts.some(function (o) { return o.t === r; })) throw new Error(where + ': slot answer "' + r + '" is not one of the choices.'); });
      var slot = { n: m.slots.length + 1, opts: opts, right: right };
      m.slots.push(slot); out.push({ slot: slot });
      last = re.lastIndex;
    }
    if (last < text.length) out.push({ t: text.slice(last) });
    return out;
  }

  function freshState(m) { return m.mode === 'scale' ? { place: {} } : { choice: {} }; }

  function plainText(m, st) {
    if (m.mode === 'scale') return m.words.map(function (w) { return w.t; }).join(', ');
    return m.paras.map(function (para) {
      return para.map(function (p) {
        if (p.t !== undefined) return p.t;
        var c = st.choice[p.slot.n]; return c === undefined ? '…' : p.slot.opts[c].t;
      }).join('');
    }).join('\n\n');
  }

  function values(m, st) {
    var v = {}, text = plainText(m, st);
    v.n_words = (text.match(/\S+/g) || []).length;
    if (m.mode === 'scale') {
      var placed = 0, right = 0, wrong = 0;
      m.words.forEach(function (w) {
        var b = st.place[w.id] || 0; v['w_' + w.id] = b;
        if (b) { placed++; if (w.right.indexOf(b) >= 0) right++; else wrong++; }
      });
      v.n_words = m.words.length; v.n_placed = placed; v.n_right = right; v.n_wrong = wrong;
    } else {
      var set = 0, ok = 0, bad = 0;
      m.slots.forEach(function (s) {
        var c = st.choice[s.n];
        v['slot_' + s.n] = c === undefined ? 0 : c + 1; v['band_' + s.n] = c === undefined ? 0 : s.opts[c].band;
        if (c !== undefined) { set++; if (s.right.indexOf(s.opts[c].t) >= 0) ok++; else bad++; }
      });
      v.n_slots = m.slots.length; v.n_set = set; v.n_right = ok; v.n_wrong = bad;
    }
    return v;
  }

  function solve(m) {
    var st = freshState(m);
    if (m.mode === 'scale') m.words.forEach(function (w) { st.place[w.id] = w.right[0]; });
    else m.slots.forEach(function (s) { st.choice[s.n] = s.opts.map(function (o) { return o.t; }).indexOf(s.right[0]); });
    return st;
  }

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
  B.wordchoiceCore = { build: build, freshState: freshState, values: values, solve: solve, plainText: plainText, specFromText: specFromText };

  // ---------- on the page ----------
  var M, S, ui, sel = null;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(label, fn, cls) { var b = el('button', cls || '', label); b.type = 'button'; b.addEventListener('click', fn); return b; }
  function say(t) { if (ui && ui.tip) ui.tip.textContent = t; }

  function report() {
    var v = values(M, S);
    if (!M.answer) B.save({ st: S });
    var out = M.mode === 'scale' ? v.n_placed + ' of ' + v.n_words + ' words placed' : v.n_set + ' of ' + v.n_slots + ' words chosen';
    B.post({ scope: { vars: v, points: {} }, text: plainText(M, S) }, out);
  }
  function change() { B.moved = true; draw(); report(); }
  // Fixed, answer-blind order for display: sorted by a hash of the text, so list order never gives the answer away.
  function hsh(t) { var h = 7; for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) % 100003; return h; }
  function wordById(id) { return M.words.filter(function (w) { return w.id === id; })[0]; }

  function drawScale() {
    var paper = ui.paper; paper.replaceChildren();
    if (M.before) { var b = el('p', 'wc-before'); b.appendChild(document.createTextNode(M.before)); paper.appendChild(b); }
    var chip = function (w, where) {
      var on = sel === w.id && !M.answer;
      var c = el(M.answer ? 'span' : 'button', 'wc-chip' + (on ? ' wc-sel' : ''), w.t);
      if (!M.answer) {
        c.type = 'button';
        c.addEventListener('click', function () { sel = sel === w.id ? null : w.id; say(sel ? (S.place[w.id] ? 'Click a band to move it, or "Back to the tray".' : 'Now click the band this word belongs in.') : ''); draw(); });
      }
      return c;
    };
    if (!M.answer) {
      var tray = el('div', 'wc-tray'); tray.setAttribute('role', 'group'); tray.setAttribute('aria-label', 'Words to place');
      var left = M.words.filter(function (w) { return !S.place[w.id]; }).sort(function (a, b) { return hsh(a.t) - hsh(b.t); });
      left.forEach(function (w) { tray.appendChild(chip(w)); });
      if (!left.length) tray.appendChild(el('span', 'wc-none', 'Every word is on the scale.'));
      paper.appendChild(tray);
    }
    var scale = el('div', 'wc-scale'); scale.setAttribute('role', 'group'); scale.setAttribute('aria-label', 'The scale');
    M.bands.forEach(function (label, i) {
      var col = el(M.answer ? 'div' : 'button', 'wc-band'); if (!M.answer) col.type = 'button';
      col.appendChild(el('span', 'wc-bl', label));
      var inner = el('span', 'wc-in');
      M.words.filter(function (w) { return S.place[w.id] === i + 1; }).forEach(function (w) { inner.appendChild(chip(w)); });
      col.appendChild(inner);
      if (!M.answer) col.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('.wc-chip')) return;
        if (!sel) { say('Pick a word first.'); return; }
        S.place[sel] = i + 1; var w = wordById(sel); sel = null; say(w.t + ' is in "' + label + '".'); change();
      });
      scale.appendChild(col);
    });
    paper.appendChild(scale);
    if (!M.answer && sel && S.place[sel]) {
      var back = el('div', 'wc-back'); back.appendChild(btn('Back to the tray', function () { delete S.place[sel]; sel = null; say(''); change(); }));
      paper.appendChild(back);
    }
  }

  function drawSwap() {
    var paper = ui.paper; paper.replaceChildren();
    if (M.before) { var b = el('p', 'wc-before'); b.appendChild(document.createTextNode(M.before)); paper.appendChild(b); }
    M.paras.forEach(function (para) {
      var pe = el('p', 'wc-p');
      para.forEach(function (p) {
        if (p.t !== undefined) { pe.appendChild(document.createTextNode(p.t)); return; }
        var s = p.slot, c = S.choice[s.n];
        if (M.answer) { pe.appendChild(el('span', 'wc-word', c === undefined ? '…' : s.opts[c].t)); return; }
        var node = el('select', 'wc-slot'); node.setAttribute('aria-label', 'Word choice ' + s.n + ' of ' + M.slots.length);
        var blank = el('option', '', '…'); blank.value = ''; node.appendChild(blank);
        s.opts.map(function (o, k) { return { o: o, k: k }; }).sort(function (a, b) { return hsh(a.o.t) - hsh(b.o.t); }).forEach(function (z) { var o = z.o, k = z.k; var op = el('option', '', o.t); op.value = String(k); if (c === k) op.selected = true; node.appendChild(op); });
        node.addEventListener('change', function () { if (node.value === '') delete S.choice[s.n]; else S.choice[s.n] = Number(node.value); B.moved = true; report(); drawLive(); });
        pe.appendChild(node);
      });
      paper.appendChild(pe);
    });
    ui.live = el('div', 'wc-live'); paper.appendChild(ui.live); drawLive();
  }
  function drawLive() {
    if (!ui.live) return;
    ui.live.replaceChildren();
    M.slots.forEach(function (s) {
      var c = S.choice[s.n]; if (c === undefined) return;
      var o = s.opts[c];
      if (!o.band) return;
      var row = el('p', 'wc-where'); row.appendChild(el('b', '', '"' + o.t + '"')); row.appendChild(document.createTextNode(' sits at '));
      row.appendChild(el('b', '', M.bands[o.band - 1])); row.appendChild(document.createTextNode(' on the scale: '));
      var bar = el('span', 'wc-mini'); bar.setAttribute('aria-hidden', 'true');
      M.bands.forEach(function (_, i) { bar.appendChild(el('span', 'wc-tick' + (i + 1 === o.band ? ' wc-on' : ''))); });
      row.appendChild(bar); ui.live.appendChild(row);
    });
    if (M.answer) return;
    var v = values(M, S);
    if (v.n_set === v.n_slots) { var r = el('p', 'wc-read'); r.appendChild(el('b', '', 'It reads: ')); r.appendChild(document.createTextNode(plainText(M, S).replace(/\n\n/g, ' '))); ui.live.appendChild(r); }
  }

  function draw() { if (M.mode === 'scale') drawScale(); else drawSwap(); }

  B.widget('wordchoice', {
    sections: ['gpanel'],
    label: function () { return 'Words to place or choose'; },
    parse: function (s) { s.wc = build(s); },
    start: function (fresh) {
      var spec = B.spec; M = copy(spec.wc); S = M.answer ? solve(M) : freshState(M);
      var sv = M.answer || fresh ? null : B.saved();
      if (sv && sv.st && typeof sv.st === 'object') {
        var o = sv.st;
        if (M.mode === 'scale' && o.place && typeof o.place === 'object') Object.keys(o.place).forEach(function (k) { if (wordById(k) && o.place[k] >= 1 && o.place[k] <= M.bands.length) S.place[k] = o.place[k]; });
        if (M.mode === 'swap' && o.choice && typeof o.choice === 'object') S.choice = o.choice;
      }
      sel = null;
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = {};
      ui.tip = el('p', 'wc-tip'); panel.appendChild(ui.tip);
      var holder = el('div', 'wc-holder' + (M.answer ? ' wc-answer' : ''));
      ui.paper = el('div', 'wc-paper'); holder.appendChild(ui.paper); panel.appendChild(holder);
      if (M.answer) ui.tip.hidden = true;
      else {
        var row = el('div', 'gbar'); var again = el('button', '', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart); row.appendChild(again); panel.appendChild(row);
        say(M.mode === 'scale' ? 'Click a word, then the band it belongs in.' : 'Choose a word for each box and see where it sits.');
      }
      draw(); report();
    },
  });
})(WPB);
