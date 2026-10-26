// Cohesion: a short text on paper, for how writing holds together (English › Holding writing together). Students trace
// what a word such as "it" or "this" points back to (an arrow is drawn), flag a link that is not clear and fix it,
// colour word chains, choose a connective in a gap, and label or reorder the parts of a paragraph. The text is data:
// the planted answers are marks in the setup, so the same board takes a teacher's own text (no marks: students mark
// and trace themselves, checked by the student, not the board) or a student's own writing (`tools: write`).
//   widget: cohesion
//   mode: link | chain | parts             trace links (default), colour word chains, or label and order sentences
//   p: Mia planted [[the beans|beans]]. [[They>beans]] grew.    one line per paragraph (link and chain modes). Marks:
//       [[words|id]]          something a later word can point back to (id: letters, numbers, _ )
//       [[words>id]]          a linking word that points back to id (several right answers: id/id2)
//       [[words>?~a/b]]       a linking word that is NOT clear: the right move is "Not clear", then fix it with a or b
//       [[words>?~*a/b]]      the same, but only a is a right fix (the rest of the text decides): n_fixed counts a only
//       [[words#c]]           a word or phrase in word chain c (chain mode)
//       [[{so|but|then}=but]] a gap with a choice of words; the right ones after = (several: but/yet). Any mode.
//   s topic: The sentence.                 parts mode: one line per sentence, named by its planted role (any: not checked)
//   para:                                  parts mode: a new paragraph starts here
//   layout: inline | blocks                parts mode: sentences run on in their paragraph (default), or one block each
//   start: 3,1,2,4                         parts mode: the starting order (the lines' own order is the right one)
//   roles: claim example quote explain     parts mode: the labels students may choose, in order (default: those planted)
//   role explain: Explanation              a label's name on screen (built-in names for common roles)
//   show: links | none                     link mode: dotted lines under the planted linking words (default), or none
//                                          (students find them with the mark tool)
//   colours: 3                             chain mode: how many chain colours (1 to 4, default 3)
//   label: on | off                        parts mode: whether students label sentences (default on; off for an ordering task)
//   tools: mark write order label text add  what the student may do beyond the mode's own move (trace, colour, label)
//     mark = make any word a linking word · write = rewrite the whole text (marks are dropped) ·
//     order = move sentences up and down · label = label sentences (parts mode, on by default) ·
//     text = edit the selected sentence's words · add = add and delete sentences
// state: { scope: { vars: {...}, points: {} }, text } with these values (all have an underscore):
//   link: n_planted, n_links (planted links showing), n_traced, n_right, n_wrong, n_unclear (planted unclear links),
//         n_unclear_found, n_fixed, n_flagged, n_marked (links the student made), n_arrows (all arrows drawn)
//   chain: n_chain (planted chain words or phrases), n_coloured, n_missed, n_stray, chains_ok, n_colours_used, max_chain
//   gaps (any mode): n_gaps, n_gaps_set, n_gaps_right, gap_1, gap_2, ... (the chosen option's number, 0 = none)
//   parts: n_s, n_roled, n_labelled, n_right, n_wrong, in_order, n_in_place, first_ok, last_ok, n_empty, has_<role>
//   always: n_words, n_sentences, n_connectives (different joining words used), is_written (1 once the student has rewritten the text)
(function (B) {
  'use strict';
  var ROLE_NAMES = {
    topic: 'Topic sentence', claim: 'Claim', example: 'Example', quote: 'Quotation', explain: 'Explanation',
    detail: 'Detail', overview: 'Overview', conclusion: 'Conclusion', link: 'Link back', body: 'Body paragraph',
    evidence: 'Evidence', opener: 'Opener', hook: 'Hook', step: 'Step',
  };
  var COLOURS = ['#d9480f', '#1971c2', '#2b8a3e', '#9c36b5'];
  var FILLS = ['rgba(217,72,15,.18)', 'rgba(25,113,194,.18)', 'rgba(43,138,62,.18)', 'rgba(156,54,181,.18)'];
  var TOOLS = ['mark', 'write', 'order', 'label', 'text', 'add'];
  // Joining words counted in a student's own writing (n_connectives: how many different ones it uses).
  var CONNECTIVES = ['however', 'but', 'although', 'instead', 'on the other hand', 'even so', 'so', 'therefore', 'as a result',
    'because', 'this means', 'also', 'in addition', 'and then', 'then', 'next', 'after that', 'finally', 'first', 'firstly',
    'meanwhile', 'later', 'for example', 'for instance', 'if', 'unless', 'since', 'while', 'when', 'before', 'after', 'soon'];

  // ---------- the pure part (tools/check-cohesion.mjs uses it as B.cohesionCore) ----------
  var words = function (t) { return (String(t).match(/\S+/g) || []).length; };
  var sentencesIn = function (t) { return (String(t).match(/[^.!?]*[A-Za-z][^.!?]*[.!?]+/g) || []).length; };
  var copy = function (o) { return JSON.parse(JSON.stringify(o)); };

  /** One paragraph of marked text into tokens and groups (appended to m). */
  function readPara(text, para, m, where) {
    var re = /\[\[(.+?)\]\]/g, last = 0, hit;
    function plainWords(s) { String(s).split(/\s+/).forEach(function (w) { if (w) m.tokens.push({ w: w, p: para, g: -1 }); }); }
    function glue(s) {   // punctuation straight after a mark (". , ;") joins the last token
      var mm = /^[^\s]+/.exec(s);
      if (mm && m.tokens.length && m.tokens[m.tokens.length - 1].p === para) { m.tokens[m.tokens.length - 1].after = (m.tokens[m.tokens.length - 1].after || '') + mm[0]; return s.slice(mm[0].length); }
      return s;
    }
    var pendingGlue = false;
    while ((hit = re.exec(text))) {
      var before = text.slice(last, hit.index);
      if (pendingGlue) before = glue(before);
      plainWords(before);
      var inner = hit[1], g = { from: m.tokens.length, to: 0 }, mm;
      if ((mm = /^\{(.+)\}=(.+)$/.exec(inner))) {
        g.type = 'gap'; g.opts = mm[1].split('|').map(function (s) { return s.trim(); });
        g.right = mm[2].split('/').map(function (s) { return s.trim(); });
        g.right.forEach(function (r) { if (g.opts.indexOf(r) < 0) throw new Error(where + ': gap answer "' + r + '" is not one of ' + g.opts.join(', ') + '.'); });
        g.n = m.groups.filter(function (x) { return x.type === 'gap'; }).length + 1;
        m.tokens.push({ w: '', p: para, g: m.groups.length, gap: true });
      } else {
        var body;
        if ((mm = /^(.+?)>(.+)$/.exec(inner))) {
          g.type = 'link'; body = mm[1];
          var rhs = mm[2].trim();
          if (rhs.charAt(0) === '?') {
            g.unclear = true; g.ans = []; g.opts = []; g.fixOk = [];
            (rhs.indexOf('~') > 0 ? rhs.slice(rhs.indexOf('~') + 1).split('/') : []).forEach(function (o) {
              o = o.trim(); if (!o) return;
              if (o.charAt(0) === '*') { o = o.slice(1).trim(); g.fixOk.push(o); }
              g.opts.push(o);
            });
          }
          else g.ans = rhs.split('/').map(function (s) { return s.trim(); });
        } else if ((mm = /^(.+?)\|(\w+)$/.exec(inner))) { g.type = 'target'; body = mm[1]; g.id = mm[2]; }
        else if ((mm = /^(.+?)#(\w+)$/.exec(inner))) { g.type = 'chain'; body = mm[1]; g.chain = mm[2]; }
        else throw new Error(where + ': "[[' + inner + ']]" needs |id (something to point back to), >id (a linking word), #chain or {a|b}=a (a gap).');
        var gi = m.groups.length;
        String(body).split(/\s+/).forEach(function (w) { if (w) m.tokens.push({ w: w, p: para, g: gi }); });
        if (m.tokens.length === g.from) throw new Error(where + ': "[[' + inner + ']]" has no words.');
      }
      g.to = m.tokens.length - 1;
      m.groups.push(g);
      last = re.lastIndex; pendingGlue = true;
    }
    var rest = text.slice(last);
    if (pendingGlue) rest = glue(rest);
    plainWords(rest);
  }

  /** The setup (as core.js reads it: spec.items) into a model. Throws a plain message. */
  function build(s, written) {
    var mode = String(s.mode || 'link').toLowerCase();
    if (['link', 'chain', 'parts'].indexOf(mode) < 0) throw new Error('mode: link, chain or parts.');
    var m = { mode: mode, tokens: [], groups: [], sents: [], breaks: [], tools: {}, roles: [], names: {}, layout: 'inline', show: 'links', colours: 3, start: null };
    var para = 0, paraLines = 0;
    if (mode === 'parts') m.tools.label = true;
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'p') {
        if (mode === 'parts') throw new Error(where + ': parts mode uses "s role: sentence" lines, not p:.');
        if (written === undefined) readPara(it.value, para, m, where);
        para++; paraLines++;
      } else if (it.kind === 's') {
        if (mode !== 'parts') throw new Error(where + ': s lines are for mode: parts.');
        if (!it.name) throw new Error(where + ': name the sentence\'s role, as in "s claim: ..." (or "s any:").');
        m.sents.push({ id: 's' + m.sents.length, role: it.name.toLowerCase(), t: it.value });
      } else if (it.kind === 'para') {
        if (mode !== 'parts') throw new Error(where + ': para: is for mode: parts (in other modes each p: line is a paragraph).');
        if (m.sents.length) m.breaks.push(m.sents.length);
      } else if (it.kind === 'role') {
        if (!it.name) throw new Error(where + ': "role explain: Explanation" names a label.');
        m.names[it.name.toLowerCase()] = it.value;
      }
    });
    if (written !== undefined) {
      String(written).split(/\n\s*\n|\n/).forEach(function (pt, i) { if (pt.trim()) { readPlain(pt, para, m); para++; } });
      if (!m.tokens.length) m.tokens.push({ w: '(empty)', p: 0, g: -1 });
    }
    if (mode !== 'parts' && !paraLines) throw new Error('A ' + mode + ' board needs at least one "p:" line (a paragraph).');
    if (mode === 'parts' && !m.sents.length) throw new Error('A parts board needs at least one "s role: sentence" line.');
    String(s.tools || '').split(/[\s,]+/).filter(Boolean).forEach(function (t) {
      if (TOOLS.indexOf(t) < 0) throw new Error('tools: "' + t + '" is not ' + TOOLS.join(', ') + '.');
      m.tools[t] = true;
    });
    if (s.label !== undefined) { if (!/^(on|off)$/i.test(s.label)) throw new Error('label: on or off.'); m.tools.label = /^on$/i.test(s.label); }
    if (s.show !== undefined) { if (!/^(links|none)$/i.test(s.show)) throw new Error('show: links or none.'); m.show = s.show.toLowerCase(); }
    if (s.layout !== undefined) { if (!/^(inline|blocks)$/i.test(s.layout)) throw new Error('layout: inline or blocks.'); m.layout = s.layout.toLowerCase(); }
    if (s.colours !== undefined) { var c = Number(s.colours); if (!(c >= 1 && c <= 4 && c === Math.round(c))) throw new Error('colours: 1 to 4.'); m.colours = c; }
    if (mode === 'parts') {
      var planted = [];
      m.sents.forEach(function (x) { if (x.role !== 'any' && planted.indexOf(x.role) < 0) planted.push(x.role); });
      m.roles = s.roles ? String(s.roles).toLowerCase().split(/[\s,]+/).filter(Boolean) : planted;
      planted.forEach(function (r) { if (m.roles.indexOf(r) < 0) throw new Error('roles: the planted role "' + r + '" is not in the list, so no one could choose it.'); });
      m.roles.forEach(function (r) { if (!/^[a-z]\w*$/.test(r)) throw new Error('roles: "' + r + '" should be one word.'); });
      if (s.start !== undefined) {
        var st = String(s.start).split(/[\s,]+/).filter(Boolean).map(Number);
        var ok = st.length === m.sents.length && st.slice().sort(function (a, b) { return a - b; }).every(function (v, i) { return v === i + 1; });
        if (!ok) throw new Error('start: list every sentence once by its number (1 to ' + m.sents.length + '), such as 3,1,2.');
        m.start = st.map(function (v) { return v - 1; });
      }
    }
    var ids = {};
    m.groups.forEach(function (g) { if (g.type === 'target') ids[g.id] = true; });
    m.groups.forEach(function (g) {
      if (g.type === 'link' && !g.unclear) g.ans.forEach(function (a) { if (!ids[a]) throw new Error('A linking word points to "' + a + '", but no [[words|' + a + ']] is marked.'); });
    });
    return m;
  }
  function readPlain(text, para, m) { String(text).split(/\s+/).forEach(function (w) { if (w) m.tokens.push({ w: w, p: para, g: -1 }); }); }
  function roleName(m, r) { return m.names[r] || ROLE_NAMES[r] || (r.charAt(0).toUpperCase() + r.slice(1)); }

  /** A new state for this model. */
  function freshState(m) {
    var st = { links: {}, marked: [], found: [], colours: {}, gaps: {}, labels: {}, texts: {}, added: [], removed: [], order: null };
    if (m.mode === 'parts') st.order = m.start ? m.start.map(function (i) { return m.sents[i].id; }) : m.sents.map(function (x) { return x.id; });
    return st;
  }
  function linkKeys(m, st) {   // the links on show: planted ones (all, or those found) and the student's own
    var out = [];
    m.groups.forEach(function (g, gi) { if (g.type === 'link' && (m.show === 'links' || st.found.indexOf(gi) >= 0)) out.push('g' + gi); });
    st.marked.forEach(function (i) { out.push('w' + i); });
    return out;
  }
  function sentList(m, st) {
    var all = m.sents.concat(st.added || []).filter(function (x) { return (st.removed || []).indexOf(x.id) < 0; });
    var byId = {}; all.forEach(function (x) { byId[x.id] = x; });
    return (st.order || []).map(function (id) { return byId[id]; }).filter(Boolean);
  }
  function sentText(st, x) { return st.texts[x.id] !== undefined ? st.texts[x.id] : x.t; }

  /** The values lesson checks read. */
  function values(m, st, written) {
    var v = {};
    var text = plainText(m, st);
    v.n_words = words(text); v.n_sentences = sentencesIn(text); v.is_written = written ? 1 : 0;
    var low = ' ' + text.toLowerCase().replace(/[^a-z' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
    v.n_connectives = CONNECTIVES.filter(function (c) { return low.indexOf(' ' + c + ' ') >= 0; }).length;
    // gaps
    var gaps = m.groups.filter(function (g) { return g.type === 'gap'; }), set = 0, right = 0;
    m.groups.forEach(function (g, gi) {
      if (g.type !== 'gap') return;
      var c = st.gaps[gi];
      v['gap_' + g.n] = c === undefined ? 0 : c + 1;
      if (c !== undefined) { set++; if (g.right.indexOf(g.opts[c]) >= 0) right++; }
    });
    v.n_gaps = gaps.length; v.n_gaps_set = set; v.n_gaps_right = right;
    if (m.mode === 'link') {
      var planted = 0, shown = 0, traced = 0, ok = 0, bad = 0, unclear = 0, ufound = 0, fixed = 0, flagged = 0, arrows = 0;
      m.groups.forEach(function (g, gi) {
        if (g.type !== 'link') return;
        planted++; if (g.unclear) unclear++;
        var key = 'g' + gi, vis = m.show === 'links' || st.found.indexOf(gi) >= 0, L = st.links[key] || {};
        if (!vis) return;
        shown++;
        if (L.to || L.flag) traced++;
        if (L.flag) flagged++;
        if (L.to) arrows++;
        if (g.unclear) {
          if (L.flag) { ufound++; ok++; } else if (L.to) bad++;
          if (L.flag && L.fix && (!g.fixOk.length || g.fixOk.indexOf(L.fix) >= 0)) fixed++;
        } else {
          var tg = L.to && /^g\d+$/.test(L.to) ? m.groups[Number(L.to.slice(1))] : null;
          if (L.flag) bad++;
          else if (tg && tg.type === 'target' && g.ans.indexOf(tg.id) >= 0) ok++;
          else if (L.to) bad++;
        }
      });
      st.marked.forEach(function (i) { var L = st.links['w' + i] || {}; if (L.to) arrows++; if (L.flag) flagged++; });
      v.n_planted = planted; v.n_links = shown; v.n_traced = traced; v.n_right = ok; v.n_wrong = bad;
      v.n_unclear = unclear; v.n_unclear_found = ufound; v.n_fixed = fixed; v.n_flagged = flagged;
      v.n_marked = st.marked.length; v.n_arrows = arrows;
    }
    if (m.mode === 'chain') {
      var chains = {}, total = 0, coloured = 0, missed = 0, stray = 0;
      m.groups.forEach(function (g, gi) { if (g.type === 'chain') { (chains[g.chain] = chains[g.chain] || []).push('g' + gi); total++; } });
      var plantedKeys = {}; Object.keys(chains).forEach(function (c) { chains[c].forEach(function (k) { plantedKeys[k] = c; }); });
      var used = {}, sizes = {};
      Object.keys(st.colours).forEach(function (k) {
        var c = st.colours[k]; if (!c) return;
        coloured++; used[c] = true; sizes[c] = (sizes[c] || 0) + 1;
        if (!plantedKeys[k]) stray++;
      });
      var okChains = 0, colourOf = {};
      Object.keys(chains).forEach(function (c) {
        var cs = chains[c].map(function (k) { return st.colours[k] || 0; });
        cs.forEach(function (x) { if (!x) missed++; });
        if (cs[0] && cs.every(function (x) { return x === cs[0]; })) colourOf[c] = cs[0];
      });
      Object.keys(colourOf).forEach(function (c) {
        var mine = colourOf[c];
        var shared = Object.keys(plantedKeys).some(function (k) { return plantedKeys[k] !== c && st.colours[k] === mine; });
        if (!shared) okChains++;
      });
      v.n_chain = total; v.n_coloured = coloured; v.n_missed = missed; v.n_stray = stray; v.chains_ok = okChains;
      v.n_chains = Object.keys(chains).length;
      v.n_colours_used = Object.keys(used).length;
      v.max_chain = Object.keys(sizes).reduce(function (a, c) { return Math.max(a, sizes[c]); }, 0);
    }
    if (m.mode === 'parts') {
      var list = sentList(m, st), labelled = 0, right2 = 0, wrong2 = 0, roled = 0, place = 0, empty = 0;
      var orig = m.sents.map(function (x) { return x.id; });
      m.roles.forEach(function (r) { v['has_' + r] = 0; });
      list.forEach(function (x, i) {
        var lab = st.labels[x.id];
        if (lab) { labelled++; if (v['has_' + lab] !== undefined) v['has_' + lab]++; }
        if (x.role && x.role !== 'any' && orig.indexOf(x.id) >= 0) {
          roled++;
          if (lab === x.role) right2++; else if (lab) wrong2++;
        }
        if (orig[i] === x.id) place++;
        if (!String(sentText(st, x)).trim()) empty++;
      });
      v.n_s = list.length; v.n_roled = roled; v.n_labelled = labelled; v.n_right = right2; v.n_wrong = wrong2;
      v.n_in_place = place; v.in_order = place === orig.length && list.length === orig.length ? 1 : 0;
      v.first_ok = list.length && list[0].id === orig[0] ? 1 : 0;
      v.last_ok = list.length && list[list.length - 1].id === orig[orig.length - 1] ? 1 : 0;
      v.n_empty = empty;
    }
    return v;
  }

  /** The text as plain words (gaps show their choice, or the first option; a fixed link shows its fix). */
  function plainText(m, st) {
    if (m.mode === 'parts') {
      var list = sentList(m, st), out = [], cur = [];
      list.forEach(function (x, i) { if (i && (m.layout === 'blocks' || breakBefore(m, st, i))) { out.push(cur.join(' ')); cur = []; } cur.push(sentText(st, x)); });
      out.push(cur.join(' '));
      return out.join('\n\n');
    }
    var paras = [], seen = {};
    m.tokens.forEach(function (t, i) {
      var g = t.g >= 0 ? m.groups[t.g] : null, w = t.w;
      if (t.gap) { var c = st.gaps[t.g]; w = g.opts[c === undefined ? 0 : c]; }
      else if (g && g.type === 'link' && st.links['g' + t.g] && st.links['g' + t.g].fix) { if (seen[t.g]) return; seen[t.g] = true; w = st.links['g' + t.g].fix + (m.tokens[g.to].after || ''); }
      (paras[t.p] = paras[t.p] || []).push(w + (t.after || ''));
    });
    return paras.filter(Boolean).map(function (p) { return p.join(' '); }).join('\n\n');
  }
  function breakBefore(m, st, i) { return (m.breaks || []).indexOf(i) >= 0; }

  /** The finished state an author meant: every planted move made. Used to test that each check can be passed. */
  function solve(m, asStudent) {
    var st = freshState(m);
    m.groups.forEach(function (g, gi) {
      if (g.type === 'gap') st.gaps[gi] = g.opts.indexOf(g.right[0]);
      if (g.type === 'link' && asStudent) {   // a student's own text: their marks, as plain words, traced
        var tj = -1; m.groups.forEach(function (h, hi) { if (tj < 0 && h.type === 'target' && (g.ans || []).indexOf(h.id) >= 0) tj = hi; });
        st.marked.push(g.from); st.links['w' + g.from] = tj >= 0 ? { to: 'w' + m.groups[tj].from } : { flag: 1 };
      } else if (g.type === 'link') {
        if (m.show !== 'links') st.found.push(gi);
        if (g.unclear) st.links['g' + gi] = { flag: 1, fix: g.fixOk[0] || g.opts[0] || '' };
        else {
          var ti = -1; m.groups.forEach(function (h, hi) { if (ti < 0 && h.type === 'target' && g.ans.indexOf(h.id) >= 0) ti = hi; });
          st.links['g' + gi] = { to: 'g' + ti };
        }
      }
    });
    var cols = {}, nc = 0;
    m.groups.forEach(function (g, gi) { if (g.type === 'chain') { if (!cols[g.chain]) cols[g.chain] = (nc++ % m.colours) + 1; st.colours['g' + gi] = cols[g.chain]; } });
    if (m.mode === 'parts') {
      st.order = m.sents.map(function (x) { return x.id; });
      m.sents.forEach(function (x) { st.labels[x.id] = x.role !== 'any' ? x.role : m.roles[0]; });
    }
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
  B.cohesionCore = { build: build, freshState: freshState, values: values, solve: solve, plainText: plainText, specFromText: specFromText };

  // ---------- on the page ----------
  var spec, M, S, ui, sel = null, tool = 'trace', paint = 1, selS = null, written, bound = false;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(label, fn, on, cls) { var b = el('button', (cls || '') + (on ? ' co-on' : ''), label); b.type = 'button'; if (on !== undefined) b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.addEventListener('click', fn); return b; }

  function report() {
    var v = values(M, S, written !== undefined);
    B.save({ st: S, written: written });
    var out;
    if (M.mode === 'link') out = v.n_arrows + ' arrow' + (v.n_arrows === 1 ? '' : 's') + (v.n_flagged ? ', ' + v.n_flagged + ' marked not clear' : '');
    else if (M.mode === 'chain') out = v.n_coloured + ' coloured';
    else out = v.n_labelled + ' of ' + v.n_s + ' labelled';
    if (v.n_gaps) out += ', ' + v.n_gaps_set + ' of ' + v.n_gaps + ' gaps chosen';
    B.post({ scope: { vars: v, points: {} }, text: plainText(M, S) }, out);
  }
  function change() { B.moved = true; draw(); report(); }
  function say(t) { if (ui && ui.tip) ui.tip.textContent = t; }

  function groupOfWord(i) { var t = M.tokens[i]; return t && t.g >= 0 ? t.g : -1; }
  function linkKeyOfWord(i) {
    var gi = groupOfWord(i);
    if (gi >= 0 && M.groups[gi].type === 'link' && (M.show === 'links' || S.found.indexOf(gi) >= 0)) return 'g' + gi;
    if (S.marked.indexOf(i) >= 0) return 'w' + i;
    return null;
  }
  function clickWord(i) {
    var gi = groupOfWord(i), g = gi >= 0 ? M.groups[gi] : null;
    if (M.mode === 'chain') {
      var key = g && (g.type === 'chain' || g.type === 'target') ? 'g' + gi : 'w' + i;
      if (paint === 0 || S.colours[key] === paint) delete S.colours[key]; else S.colours[key] = paint;
      change(); return;
    }
    if (tool === 'mark') {
      if (g && g.type === 'link') {
        var at = S.found.indexOf(gi);
        if (M.show === 'links') { say('That word is already a linking word.'); return; }
        if (at >= 0) { S.found.splice(at, 1); delete S.links['g' + gi]; sel = null; } else { S.found.push(gi); sel = 'g' + gi; tool = 'trace'; say('Now click the words it points back to.'); }
      } else {
        var mi = S.marked.indexOf(i);
        if (mi >= 0) { S.marked.splice(mi, 1); delete S.links['w' + i]; sel = null; } else { S.marked.push(i); sel = 'w' + i; tool = 'trace'; say('Now click the words it points back to.'); }
      }
      change(); return;
    }
    var lk = linkKeyOfWord(i);
    if (sel && lk !== sel) {
      // the second click: what the selected link points back to
      var to = g && g.type === 'target' ? 'g' + gi : (lk && lk.charAt(0) === 'g' ? lk : 'w' + i);
      if (to === sel) return;
      S.links[sel] = S.links[sel] || {}; S.links[sel].to = to; S.links[sel].flag = 0;
      sel = null; say('Arrow drawn. Click another dotted word, or click the arrow\'s word again to change it.');
      change(); return;
    }
    if (lk) { sel = lk === sel ? null : lk; say(sel ? 'Now click the words it points back to. If you cannot tell, press Not clear.' : 'Click a dotted word to trace it.'); draw(); return; }
    say(M.tools.mark ? 'That word is not marked as a linking word. Press "Mark a linking word" first.' : 'Click a word with a dotted line under it first.');
  }

  function drawText() {
    var paper = ui.paper; paper.replaceChildren();
    var paras = {}, order = [];
    var openG = -1, wrap = null;
    M.tokens.forEach(function (t, i) {
      var pe = paras[t.p]; if (!pe) { pe = paras[t.p] = el('p', 'co-p'); order.push(t.p); openG = -1; wrap = null; }
      var g = t.g >= 0 ? M.groups[t.g] : null;
      if (t.gap) {
        var c = S.gaps[t.g], s = el('select', 'co-gap'); s.setAttribute('aria-label', 'Choose a word for gap ' + g.n);
        var blank = el('option', '', '…'); blank.value = ''; s.appendChild(blank);
        g.opts.forEach(function (o, k) { var op = el('option', '', o); op.value = String(k); if (c === k) op.selected = true; s.appendChild(op); });
        s.addEventListener('change', function () { if (s.value === '') delete S.gaps[t.g]; else S.gaps[t.g] = Number(s.value); B.moved = true; report(); });
        pe.appendChild(s);
        if (t.after) pe.appendChild(document.createTextNode(t.after));
        pe.appendChild(document.createTextNode(' '));
        openG = -1; wrap = null; return;
      }
      var host = pe;
      if (g) {
        if (openG !== t.g) {
          openG = t.g; wrap = el('span', 'co-g'); wrap.setAttribute('data-g', t.g);
          var key = 'g' + t.g;
          if (g.type === 'link' && (M.show === 'links' || S.found.indexOf(t.g) >= 0)) {
            wrap.classList.add('co-link'); if (sel === key) wrap.classList.add('co-sel');
            var L = S.links[key];
            if (L && L.flag) wrap.classList.add('co-flag');
            if (L && L.fix) { wrap.classList.add('co-fixed'); }
          }
          if (M.mode === 'chain' && S.colours[key]) { wrap.style.background = FILLS[S.colours[key] - 1]; wrap.style.boxShadow = 'inset 0 -2px 0 ' + COLOURS[S.colours[key] - 1]; }
          pe.appendChild(wrap);
          if (g.type === 'link' && S.links[key] && S.links[key].fix) {
            var fx = el('span', 'co-w', S.links[key].fix); fx.setAttribute('data-i', g.from); wrap.appendChild(fx);
            fx.addEventListener('click', function (ev) { ev.stopPropagation(); clickWord(g.from); });
            var tail = M.tokens[g.to].after; if (tail) pe.appendChild(document.createTextNode(tail));
            pe.appendChild(document.createTextNode(' '));
          }
        }
        host = wrap;
        if (S.links['g' + t.g] && S.links['g' + t.g].fix) return;
      } else { openG = -1; wrap = null; }
      var w = el('span', 'co-w', t.w); w.setAttribute('data-i', i);
      var mk = S.marked.indexOf(i) >= 0;
      if (mk) { w.classList.add('co-link', 'co-mine'); if (sel === 'w' + i) w.classList.add('co-sel'); if (S.links['w' + i] && S.links['w' + i].flag) w.classList.add('co-flag'); }
      if (M.mode === 'chain' && S.colours['w' + i]) { w.style.background = FILLS[S.colours['w' + i] - 1]; w.style.boxShadow = 'inset 0 -2px 0 ' + COLOURS[S.colours['w' + i] - 1]; }
      w.setAttribute('tabindex', '0');
      w.addEventListener('click', function (ev) { ev.stopPropagation(); clickWord(i); });
      w.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); clickWord(i); } });
      host.appendChild(w);
      var lastInGroup = !g || i === g.to;
      if (t.after) (lastInGroup ? pe : host).appendChild(document.createTextNode(t.after));
      (lastInGroup ? pe : host).appendChild(document.createTextNode(' '));
      if (lastInGroup) { openG = -1; wrap = null; }
    });
    order.forEach(function (p) { paper.appendChild(paras[p]); });
    paper.appendChild(ui.svg);
  }

  function rectOf(key) {
    var bb = ui.paper.getBoundingClientRect(), box = { left: bb.left + ui.paper.clientLeft, top: bb.top + ui.paper.clientTop }, r;
    if (key.charAt(0) === 'g') {
      var ws = ui.paper.querySelectorAll('[data-g="' + key.slice(1) + '"] .co-w');
      if (!ws.length) return null;
      r = ws[0].getBoundingClientRect(); var r2 = ws[ws.length - 1].getBoundingClientRect();
      if (Math.abs(r2.top - r.top) < 4) r = { left: r.left, right: r2.right, top: r.top, bottom: r.bottom };
    } else {
      var w = ui.paper.querySelector('.co-w[data-i="' + key.slice(1) + '"]'); if (!w) return null; r = w.getBoundingClientRect();
    }
    return { x: (r.left + r.right) / 2 - box.left, y: r.top - box.top, b: r.bottom - box.top };
  }
  function drawArrows() {
    var svg = ui.svg; while (svg.lastChild && svg.lastChild.nodeName !== 'defs') svg.removeChild(svg.lastChild);
    svg.setAttribute('width', ui.paper.scrollWidth); svg.setAttribute('height', ui.paper.scrollHeight);
    if (M.mode !== 'link') return;
    linkKeys(M, S).forEach(function (k) {
      var L = S.links[k]; if (!L || !L.to) return;
      var a = rectOf(k), b = rectOf(L.to); if (!a || !b) return;
      var lift = 14 + Math.min(40, Math.abs(a.x - b.x) * 0.12 + Math.abs(a.y - b.y) * 0.3);
      var top = Math.min(a.y, b.y) - lift;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M' + a.x + ' ' + (a.y + 1) + ' C' + a.x + ' ' + top + ' ' + b.x + ' ' + top + ' ' + b.x + ' ' + (b.y - 1));
      path.setAttribute('class', 'co-arrow' + (k === sel ? ' co-arrow-sel' : ''));
      path.setAttribute('marker-end', 'url(#co-head)');
      svg.appendChild(path);
    });
  }

  function drawBar() {
    var bar = ui.bar; bar.replaceChildren();
    var row = el('div', 'co-row');
    if (M.mode === 'link') {
      if (M.tools.mark) row.appendChild(btn('Mark a linking word', function () { tool = tool === 'mark' ? 'trace' : 'mark'; sel = null; say(tool === 'mark' ? 'Click a word that points back to something earlier (it, this, they, these...). Click it again to unmark.' : 'Click a dotted word to trace it.'); draw(); }, tool === 'mark'));
      var L = sel && S.links[sel];
      if (sel) {
        row.appendChild(btn('Not clear', function () { S.links[sel] = S.links[sel] || {}; var f = S.links[sel].flag ? 0 : 1; S.links[sel].flag = f; if (f) S.links[sel].to = ''; else S.links[sel].fix = ''; say(f ? 'Marked: a reader cannot tell what this points to.' + (fixOpts().length ? ' Choose a fix below.' : '') : 'Not clear taken off.'); change(); }, !!(L && L.flag), 'co-warn'));
        if (L && L.to) row.appendChild(btn('Take the arrow off', function () { S.links[sel].to = ''; change(); }));
        row.appendChild(btn('Done', function () { sel = null; say('Click a dotted word to trace it.'); draw(); }));
        var fo = fixOpts();
        if (L && L.flag && fo.length) {
          var lab = el('label', 'co-f'); lab.appendChild(el('span', '', 'Fix it: write'));
          var s = el('select'); s.setAttribute('aria-label', 'Words to use instead');
          var b0 = el('option', '', '…'); b0.value = ''; s.appendChild(b0);
          fo.forEach(function (o) { var op = el('option', '', o); op.value = o; if (L.fix === o) op.selected = true; s.appendChild(op); });
          s.addEventListener('change', function () { S.links[sel].fix = s.value; change(); });
          lab.appendChild(s); row.appendChild(lab);
        }
      }
    } else if (M.mode === 'chain') {
      row.appendChild(el('span', 'co-lab', 'Colour:'));
      for (var c = 1; c <= M.colours; c++) (function (c) {
        var b = btn('Chain ' + c, function () { paint = c; draw(); }, paint === c, 'co-sw');
        b.style.borderColor = COLOURS[c - 1]; b.style.background = paint === c ? COLOURS[c - 1] : FILLS[c - 1]; if (paint === c) b.style.color = '#fff';
        row.appendChild(b);
      })(c);
      row.appendChild(btn('Rub out', function () { paint = 0; draw(); }, paint === 0));
    }
    if (M.tools.write && M.mode !== 'parts') row.appendChild(btn(ui.writing ? 'Done writing' : 'Write your own', toggleWrite, !!ui.writing));
    bar.appendChild(row);
    bar.hidden = !row.children.length;
  }
  function fixOpts() { if (!sel || sel.charAt(0) !== 'g') return []; var g = M.groups[Number(sel.slice(1))]; return g.unclear ? g.opts : []; }

  function toggleWrite() {
    if (!ui.writing) { ui.writing = true; drawWrite(); drawBar(); return; }
    var t = ui.area.value;
    try { var m2 = build(spec, t); M = m2; } catch (e) { say(e.message); return; }
    written = t; S = freshState(M); sel = null; ui.writing = false; tool = 'trace';
    say(M.mode === 'link' ? 'Now press "Mark a linking word" and click a word that points back.' : 'Now colour the words that belong together.');
    if (M.mode === 'link') M.tools.mark = true;
    change();
  }
  function drawWrite() {
    var paper = ui.paper; paper.replaceChildren();
    ui.area = el('textarea', 'co-area'); ui.area.rows = 7; ui.area.value = written !== undefined ? written : plainText(M, S);
    ui.area.setAttribute('aria-label', 'Your own text');
    paper.appendChild(ui.area); ui.svg.setAttribute('height', 0);
    say('Write or paste your own paragraph. Press Done writing when you are ready to mark it.');
    ui.area.focus();
  }

  // ---------- parts mode ----------
  function drawParts() {
    var paper = ui.paper; paper.replaceChildren();
    var list = sentList(M, S), pe = null;
    list.forEach(function (x, i) {
      if (!pe || M.layout === 'blocks' || breakBefore(M, S, i)) { pe = el('p', 'co-p' + (M.layout === 'blocks' ? ' co-block' : '')); paper.appendChild(pe); }
      var sp = el('span', 'co-s' + (selS === x.id ? ' co-sel' : '')); sp.setAttribute('tabindex', '0'); sp.setAttribute('data-s', x.id);
      var lab = S.labels[x.id];
      if (lab) { var tag = el('span', 'co-tag', roleName(M, lab)); tag.style.background = COLOURS[M.roles.indexOf(lab) % 4]; sp.appendChild(tag); }
      sp.appendChild(document.createTextNode(sentText(S, x) || '(empty)'));
      if (!sentText(S, x)) sp.classList.add('co-blank');
      sp.addEventListener('click', function () { selS = selS === x.id ? null : x.id; drawParts(); drawPartsBar(); });
      sp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selS = selS === x.id ? null : x.id; drawParts(); drawPartsBar(); } });
      pe.appendChild(sp); pe.appendChild(document.createTextNode(' '));
    });
  }
  function drawPartsBar() {
    var bar = ui.bar; bar.replaceChildren(); bar.hidden = false;
    var x = selS && sentList(M, S).filter(function (y) { return y.id === selS; })[0];
    if (!x) { bar.appendChild(el('p', 'co-none', 'Click a sentence to work on it.')); say(''); return; }
    say(M.tools.label ? 'Choose what this sentence does.' + (M.tools.order ? ' Move it if it is in the wrong place.' : '') : M.tools.order ? 'Use Move up and Move down to put it in its place.' : '');
    if (M.tools.label) {
      var row = el('div', 'co-row'); row.appendChild(el('span', 'co-lab', 'This sentence is:'));
      M.roles.forEach(function (r, k) {
        var b = btn(roleName(M, r), function () { if (S.labels[x.id] === r) delete S.labels[x.id]; else S.labels[x.id] = r; change(); }, S.labels[x.id] === r);
        if (S.labels[x.id] === r) { b.style.background = COLOURS[k % 4]; b.style.borderColor = COLOURS[k % 4]; }
        row.appendChild(b);
      });
      bar.appendChild(row);
    }
    var row2 = el('div', 'co-row');
    if (M.tools.order) {
      row2.appendChild(btn('Move up', function () { var i = S.order.indexOf(x.id); if (i > 0) { S.order[i] = S.order[i - 1]; S.order[i - 1] = x.id; change(); } }));
      row2.appendChild(btn('Move down', function () { var i = S.order.indexOf(x.id); if (i < S.order.length - 1) { S.order[i] = S.order[i + 1]; S.order[i + 1] = x.id; change(); } }));
    }
    if (M.tools.add) {
      row2.appendChild(btn('Add a sentence after', function () { var id = 'n' + Date.now().toString(36) + Math.floor(Math.random() * 1e4); S.added.push({ id: id, role: 'any', t: '' }); S.order.splice(S.order.indexOf(x.id) + 1, 0, id); selS = id; change(); }));
      row2.appendChild(btn('Delete', function () { if (S.order.length < 2) return; S.order.splice(S.order.indexOf(x.id), 1); S.removed.push(x.id); delete S.labels[x.id]; selS = null; change(); }));
    }
    if (row2.children.length) bar.appendChild(row2);
    if (M.tools.text) {
      var ta = el('textarea', 'co-text'); ta.rows = 2; ta.value = sentText(S, x); ta.setAttribute('aria-label', 'Words in the selected sentence');
      ta.addEventListener('input', function () { S.texts[x.id] = ta.value; B.moved = true; drawParts(); report(); });
      bar.appendChild(ta);
      if (!String(sentText(S, x)).trim()) { say('Type the sentence in the box' + (M.tools.label ? ', then choose what it does.' : '.')); ta.focus(); }
    }
  }

  function draw() {
    if (M.mode === 'parts') { drawParts(); drawPartsBar(); return; }
    drawBar();
    if (ui.writing) return;
    drawText(); drawArrows();
  }

  B.widget('cohesion', {
    sections: ['gpanel'],
    label: function () { return 'A short text to mark up'; },
    parse: function (s) { s.co = build(s); },
    start: function (fresh) {
      spec = B.spec; written = undefined; M = spec.co;
      var sv = fresh ? null : B.saved();
      if (sv && sv.written !== undefined && sv.written !== null) { try { M = build(spec, String(sv.written)); written = String(sv.written); if (M.mode === 'link') M.tools.mark = true; } catch (e) { M = spec.co; } }
      M = copy(M); S = freshState(M);
      if (sv && sv.st && typeof sv.st === 'object') {
        var o = sv.st;
        ['links', 'colours', 'gaps', 'labels', 'texts'].forEach(function (k) { if (o[k] && typeof o[k] === 'object') S[k] = o[k]; });
        ['marked', 'found', 'added', 'removed'].forEach(function (k) { if (Array.isArray(o[k])) S[k] = o[k]; });
        if (M.mode === 'parts' && Array.isArray(o.order) && o.order.length) S.order = o.order;
      }
      sel = null; selS = null; tool = 'trace'; paint = 1;
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = { writing: false };
      ui.bar = el('div', 'co-bar'); panel.appendChild(ui.bar);
      ui.tip = el('p', 'co-tip'); panel.appendChild(ui.tip);
      var holder = el('div', 'co-holder');
      ui.paper = el('div', 'co-paper');
      ui.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); ui.svg.setAttribute('class', 'co-svg'); ui.svg.setAttribute('aria-hidden', 'true');
      ui.svg.innerHTML = '<defs><marker id="co-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="co-headpath"/></marker></defs>';
      holder.appendChild(ui.paper); panel.appendChild(holder);
      var row = el('div', 'gbar');
      var again = el('button', '', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart); row.appendChild(again);
      panel.appendChild(row);
      ui.paper.addEventListener('click', function () { if (sel && M.mode === 'link') { sel = null; say('Click a dotted word to trace it.'); draw(); } });
      say(M.mode === 'link' ? (M.show === 'links' || written !== undefined ? 'Click a dotted word, then click the words it points back to.' : 'Press "Mark a linking word", then click a word that points back to something earlier.')
        : M.mode === 'chain' ? 'Pick a colour, then click the words that belong to the same chain.' : 'Click a sentence to work on it.');
      if (M.mode === 'link' && M.show === 'none' && !M.tools.mark) M.tools.mark = true;
      draw();
      if (!bound) { bound = true; window.addEventListener('resize', function () { if (ui && ui.paper && ui.paper.isConnected && M.mode === 'link' && !ui.writing) drawArrows(); }); }
      report();
    },
    resize: function () { if (ui && M && M.mode === 'link' && !ui.writing) drawArrows(); },
  });
})(WPB);
