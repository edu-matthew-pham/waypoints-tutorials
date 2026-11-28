// Page: a small document or slide deck, for the ideas every word processor and slide app share: styles (a heading says
// what a part is, not just how it looks), the outline that headings build, lists and tables, room to read, one idea
// per slide, pictures with alt text and credits, and readable size and contrast.
//   widget: page
//   mode: doc | slide                       a document page (default) or a deck of slides
//   block title: Bean growth report         one line per block, in order. Doc styles: title, h1, h2, body, bullet, number,
//   block table: Day|Height; 1|3; 4|11      caption, table (rows split by ; and cells by |), image. Slide styles: title,
//   block image: bean                       bullet, text, image. Pictures drawn here (no photos): bean, plant, sun, chart, crowd.
//   alt b3: A bean seedling in a pot        start values for the 3rd block (b1, b2, ...): alt text, credit line,
//   credit b3: Drawn for this lesson, ...   fake (bold | big | both: looks like a heading but has no style),
//   fake b2: both                           newslide (yes: a slide starts here), big (yes: large picture)
//   style h1: 22 serif bold                 a style's start size (points), font (sans | serif) and bold
//   spacing: 1|2|3   margin: 1|2|3   align: left|centre     the page layout (doc), body text alignment
//   bg: white|navy|yellow|grey|dark   ink: black|white|yellow|pale|blue     the slide colours
//   header: on|off                          whether a table's first row is a header row (default off)
//   outline: on|off                         the headings panel beside a document (default on)
//   tools: style text format styledef layout add alt credit colour header size slides
//                                           what the student may do (default none: look only; the outline always shows)
//     style = change a block's style · text = edit its words · format = bold and bigger on one block by hand ·
//     styledef = change a style for every block that uses it · layout = spacing, margins, alignment ·
//     add = add and delete blocks · alt, credit = write them for a picture · colour = slide colours ·
//     header = table header row · size = small or large picture · slides = start a new slide here, move up and down
// state: { scope: { vars: { n_blocks, n_title, n_h1, n_h2, n_body, n_bullet, n_number, n_table, n_images, n_empty, n_words,
//   n_outline (headings in the outline), n_skips (a Heading 2 before any Heading 1), n_fake (body text made to look like a
//   heading by hand), n_direct (blocks with by-hand bold or size), st_N (block N's style: title 1, h1 2, h2 3, body 4,
//   bullet 5, number 6, caption 7, table 8, image 9), size_/font_/bold_ + title|h1|h2|body (font 1 sans, 2 serif),
//   spacing_n, margin_n, align_n (1 left, 2 centre), table_header, n_alt (pictures with good alt text),
//   n_credit (pictures whose credit has who, where and licence), n_big, n_slides, max_words, max_bullets,
//   n_untitled (slides not starting with a title), n_overflow (slides whose text runs off), font_min, contrast_x10,
//   contrast_ok (1 when the text/background contrast is at least 4.5) }, points: {} }, blocks: [...] }
(function (B) {
  'use strict';
  var CODE = { title: 1, h1: 2, h2: 3, body: 4, bullet: 5, number: 6, caption: 7, table: 8, image: 9 };
  var NAMES_DOC = { title: 'Title', h1: 'Heading 1', h2: 'Heading 2', body: 'Body text', bullet: 'Bullet list', number: 'Numbered list', caption: 'Caption' };
  var NAMES_SLIDE = { title: 'Title', bullet: 'Bullet', body: 'Text' };
  var DEF_DOC = { title: [26, 1], h1: [18, 1], h2: [14, 1], body: [11, 0] };
  var DEF_SLIDE = { title: [40, 1], h1: [32, 1], h2: [28, 1], body: [26, 0] };
  var TOOLS = ['style', 'text', 'format', 'styledef', 'layout', 'add', 'alt', 'credit', 'colour', 'header', 'size', 'slides'];
  var BG = { white: ['White', '#ffffff'], navy: ['Navy', '#12306b'], yellow: ['Yellow', '#ffe45c'], grey: ['Light grey', '#e6e6e6'], dark: ['Dark grey', '#333333'] };
  var INK = { black: ['Black', '#000000'], white: ['White', '#ffffff'], yellow: ['Yellow', '#ffe45c'], pale: ['Pale grey', '#b8b8b8'], blue: ['Light blue', '#7aa7ff'] };
  var PICS = {
    bean: '<rect width="120" height="80" fill="#e8f3ff"/><path d="M42 52h36l-5 24H47z" fill="#a8672f"/><path d="M60 52V30" stroke="#2e8b3d" stroke-width="3"/><ellipse cx="50" cy="30" rx="11" ry="6" fill="#3fae4f" transform="rotate(-25 50 30)"/><ellipse cx="70" cy="24" rx="11" ry="6" fill="#3fae4f" transform="rotate(25 70 24)"/>',
    plant: '<rect width="120" height="80" fill="#fff6e0"/><path d="M40 56h40l-5 20H45z" fill="#c4553a"/><path d="M60 56V16" stroke="#2e8b3d" stroke-width="4"/><ellipse cx="46" cy="38" rx="13" ry="6" fill="#3fae4f" transform="rotate(-30 46 38)"/><ellipse cx="74" cy="30" rx="13" ry="6" fill="#3fae4f" transform="rotate(30 74 30)"/><ellipse cx="50" cy="20" rx="10" ry="5" fill="#5bc06a" transform="rotate(-20 50 20)"/>',
    sun: '<rect width="120" height="80" fill="#cfe8ff"/><circle cx="60" cy="40" r="16" fill="#ffc933"/><g stroke="#ffc933" stroke-width="4"><path d="M60 12v8M60 60v8M32 40h8M80 40h8M40 20l6 6M74 54l6 6M80 20l-6 6M46 54l-6 6"/></g>',
    chart: '<rect width="120" height="80" fill="#f4f4f4"/><path d="M16 66h92M16 10v56" stroke="#555" stroke-width="2"/><rect x="26" y="44" width="16" height="22" fill="#4a7fd4"/><rect x="52" y="30" width="16" height="36" fill="#4a7fd4"/><rect x="78" y="16" width="16" height="50" fill="#4a7fd4"/>',
    crowd: '<rect width="120" height="80" fill="#eef7ee"/><g fill="#c98b4a"><circle cx="24" cy="30" r="8"/><circle cx="50" cy="26" r="8"/><circle cx="76" cy="30" r="8"/><circle cx="98" cy="26" r="8"/></g><g fill="#4a7fd4"><rect x="14" y="40" width="20" height="30" rx="6"/><rect x="40" y="36" width="20" height="34" rx="6"/><rect x="66" y="40" width="20" height="30" rx="6"/><rect x="88" y="36" width="20" height="34" rx="6"/></g>',
  };

  var spec, P, mode, blocks, defs, lay, col, hdr, sel, ui, tools, status = '', bound = false;
  var isSlide = function () { return mode === 'slide'; };
  var words = function (t) { return (String(t).match(/\S+/g) || []).length; };
  var defKey = function (s) { return s === 'title' || s === 'h1' || s === 'h2' ? s : 'body'; };
  var copy = function (o) { return JSON.parse(JSON.stringify(o)); };

  function lum(hex) {
    var c = [1, 3, 5].map(function (i) { var v = parseInt(hex.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }

  // ---------- reading the setup ----------
  function parse(s) {
    var m = String(s.mode || 'doc').toLowerCase();
    if (m !== 'doc' && m !== 'slide') throw new Error('mode: doc or slide.');
    var slide = m === 'slide';
    var pg = { mode: m, blocks: [], defs: copy(slide ? DEF_SLIDE : DEF_DOC), tools: {}, lay: { spacing: 2, margin: 2, align: 1 }, col: { bg: 'white', ink: 'black' }, header: 0, outline: !/^off$/i.test(s.outline || '') };
    var fonts = { title: 1, h1: 1, h2: 1, body: 1 }, bolds = { title: 1, h1: 1, h2: 1, body: 0 };
    pg.font = fonts; pg.bold = bolds;
    var allowed = slide ? ['title', 'bullet', 'text', 'image'] : ['title', 'h1', 'h2', 'body', 'bullet', 'number', 'caption', 'table', 'image'];
    var extra = [];
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line;
      if (it.kind === 'block') {
        var st = String(it.name || '').toLowerCase();
        if (st === 'text') st = 'body';
        if (allowed.indexOf(st === 'body' && slide ? 'text' : st) < 0) throw new Error(where + ': "block ' + it.name + '" is not one of ' + allowed.join(', ') + '.');
        var b = { s: st, t: it.value, b: 0, z: 0, brk: 0, alt: '', cr: '', big: 0, pic: '' };
        if (st === 'image') { if (!PICS[it.value]) throw new Error(where + ': picture "' + it.value + '" is not ' + Object.keys(PICS).join(', ') + '.'); b.pic = it.value; b.t = ''; }
        if (st === 'table' && !/\|/.test(it.value)) throw new Error(where + ': a table needs cells split by | (and rows split by ;).');
        pg.blocks.push(b);
      } else if (/^(alt|credit|fake|newslide|big)$/.test(it.kind)) extra.push(it);
      else if (it.kind === 'style') {
        if (!defs0(pg)[it.name]) throw new Error(where + ': style ' + it.name + ' is not title, h1, h2 or body.');
        var p = String(it.value).toLowerCase().split(/\s+/);
        var sz = Number(p[0]);
        if (!(sz >= 6 && sz <= 80)) throw new Error(where + ': a style needs a size from 6 to 80 first (style h1: 22 serif bold).');
        pg.defs[it.name] = [sz, pg.defs[it.name][1]]; pg.bold[it.name] = pg.defs[it.name][1];
        p.slice(1).forEach(function (w) { if (w === 'serif') fonts[it.name] = 2; else if (w === 'sans') fonts[it.name] = 1; else if (w === 'bold') pg.bold[it.name] = 1; else if (w === 'plain') pg.bold[it.name] = 0; else throw new Error(where + ': "' + w + '" is not serif, sans, bold or plain.'); });
      }
    });
    extra.forEach(function (it) {
      var where = 'Line ' + it.line, mm = /^b(\d+)$/.exec(it.name || '');
      if (!mm || Number(mm[1]) < 1 || Number(mm[1]) > pg.blocks.length) throw new Error(where + ': "' + it.kind + ' ' + it.name + '" needs a block such as b2 (the 2nd block).');
      var b = pg.blocks[Number(mm[1]) - 1];
      if (it.kind === 'alt') b.alt = it.value; else if (it.kind === 'credit') b.cr = it.value;
      else if (it.kind === 'newslide') b.brk = /^(yes|on|1)$/i.test(it.value) ? 1 : 0;
      else if (it.kind === 'big') b.big = /^(yes|on|1)$/i.test(it.value) ? 1 : 0;
      else { if (!/^(bold|big|both)$/.test(it.value)) throw new Error(where + ': fake is bold, big or both.'); if (/bold|both/.test(it.value)) b.b = 1; if (/big|both/.test(it.value)) b.z = 6; }
    });
    String(s.tools || '').split(/[\s,]+/).filter(Boolean).forEach(function (t) {
      if (TOOLS.indexOf(t) < 0) throw new Error('tools: "' + t + '" is not ' + TOOLS.join(', ') + '.');
      pg.tools[t] = true;
    });
    ['spacing', 'margin'].forEach(function (k) { if (s[k] !== undefined) { var n = Number(s[k]); if (!(n === 1 || n === 2 || n === 3)) throw new Error(k + ': 1, 2 or 3.'); pg.lay[k] = n; } });
    if (s.align !== undefined) { if (!/^(left|centre|center)$/i.test(s.align)) throw new Error('align: left or centre.'); pg.lay.align = /^left$/i.test(s.align) ? 1 : 2; }
    if (s.bg !== undefined) { if (!BG[s.bg]) throw new Error('bg: ' + Object.keys(BG).join(', ') + '.'); pg.col.bg = s.bg; }
    if (s.ink !== undefined) { if (!INK[s.ink]) throw new Error('ink: ' + Object.keys(INK).join(', ') + '.'); pg.col.ink = s.ink; }
    if (s.header !== undefined) pg.header = /^on$/i.test(s.header) ? 1 : 0;
    if (!pg.blocks.length) throw new Error('A page needs at least one "block" line.');
    s.pg = pg;
  }
  function defs0(pg) { return { title: 1, h1: 1, h2: 1, body: 1 }; }

  // ---------- numbers for checks ----------
  function slidesOf() {
    var out = [];
    blocks.forEach(function (b, i) { if (i === 0 || b.brk || !out.length) out.push([]); out[out.length - 1].push(i); });
    return out;
  }
  function effSize(b) { return defs[defKey(b.s)][0] + b.z; }
  function snapshot() {
    var v = {}, n = { title: 0, h1: 0, h2: 0, body: 0, bullet: 0, number: 0, caption: 0, table: 0, image: 0 };
    var fake = 0, direct = 0, skips = 0, seenH1 = false, empty = 0, w = 0, nalt = 0, ncr = 0, nbig = 0, fmin = 999;
    blocks.forEach(function (b, i) {
      n[b.s]++;
      v['st_' + (i + 1)] = CODE[b.s];
      var fm = (b.b || b.z) ? 1 : 0;
      if (fm) direct++;
      if (fm && (b.s === 'body' || b.s === 'bullet')) fake++;
      if (b.s === 'h1') seenH1 = true;
      if (b.s === 'h2' && !seenH1) skips++;
      if (b.s === 'image') {
        if (words(b.alt) >= 3 && !/^(an? )?(image|picture|photo|pic)\b/i.test(b.alt.trim())) nalt++;
        var parts = b.cr.split(',').filter(function (p) { return p.trim(); });
        if (parts.length >= 3) ncr++;
        if (b.big) nbig++;
      } else if (b.s !== 'table') {
        if (!b.t.trim()) empty++;
        w += words(b.t);
        fmin = Math.min(fmin, effSize(b));
      }
    });
    var sl = slidesOf(), maxW = 0, maxB = 0, untitled = 0;
    sl.forEach(function (ix) {
      var sw = 0, sb = 0;
      ix.forEach(function (i) { var b = blocks[i]; if (b.s !== 'image' && b.s !== 'table') sw += words(b.t); if (b.s === 'bullet') sb++; });
      maxW = Math.max(maxW, sw); maxB = Math.max(maxB, sb);
      if (blocks[ix[0]].s !== 'title') untitled++;
    });
    var cr = contrast(BG[col.bg][1], INK[col.ink][1]);
    var over = 0;
    if (ui && ui.stage) Array.prototype.forEach.call(ui.stage.querySelectorAll('.pg-slide'), function (el) { if (el.scrollHeight > el.clientHeight + 2) { over++; el.classList.add('pg-over'); } else el.classList.remove('pg-over'); });
    v.n_blocks = blocks.length; v.n_title = n.title; v.n_h1 = n.h1; v.n_h2 = n.h2; v.n_body = n.body; v.n_bullet = n.bullet; v.n_number = n.number;
    v.n_caption = n.caption; v.n_table = n.table; v.n_images = n.image; v.n_empty = empty; v.n_words = w;
    v.n_outline = n.h1 + n.h2; v.n_skips = skips; v.n_fake = fake; v.n_direct = direct;
    ['title', 'h1', 'h2', 'body'].forEach(function (k) { v['size_' + k] = defs[k][0]; v['font_' + k] = P.font[k]; v['bold_' + k] = P.bold[k]; });
    v.spacing_n = lay.spacing; v.margin_n = lay.margin; v.align_n = lay.align; v.table_header = hdr;
    v.n_alt = nalt; v.n_credit = ncr; v.n_big = nbig;
    v.n_slides = sl.length; v.max_words = maxW; v.max_bullets = maxB; v.n_untitled = untitled; v.n_overflow = over;
    v.font_min = fmin === 999 ? 0 : fmin; v.contrast_x10 = Math.round(cr * 10); v.contrast_ok = cr >= 4.5 ? 1 : 0;
    return { scope: { vars: v, points: {} }, blocks: blocks.map(function (b) { return { style: b.s, text: b.t, alt: b.alt, credit: b.cr }; }) };
  }
  function report() {
    var s = snapshot();
    B.save({ blocks: blocks, defs: defs, font: P.font, bold: P.bold, lay: lay, col: col, hdr: hdr });
    var v = s.scope.vars;
    B.post(s, isSlide() ? v.n_slides + ' slides, ' + v.n_words + ' words' : v.n_outline + ' headings, ' + v.n_words + ' words');
  }
  function change() { B.moved = true; paint(); report(); }

  // ---------- drawing ----------
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function btn(label, fn, on) { var b = el('button', on ? 'pg-on' : '', label); b.type = 'button'; if (on !== undefined) b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.addEventListener('click', fn); return b; }
  function fontCss(k) { return P.font[k] === 2 ? 'Georgia, "Times New Roman", serif' : 'system-ui, -apple-system, "Segoe UI", sans-serif'; }

  function blockEl(b, i, u) {
    var key = defKey(b.s), size = effSize(b) * u;
    var e;
    if (b.s === 'image') {
      e = el('figure', 'pg-fig');
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 120 80'); svg.setAttribute('role', b.alt ? 'img' : 'presentation'); if (b.alt) svg.setAttribute('aria-label', b.alt);
      svg.innerHTML = PICS[b.pic]; svg.style.width = (isSlide() ? (b.big ? 400 : 180) * u : (b.big ? 200 : 110) * u) + 'px';
      e.appendChild(svg);
      if (b.cr) { var cp = el('figcaption', 'pg-cap', 'Credit: ' + b.cr); cp.style.fontSize = Math.max(6, (isSlide() ? 14 : 9)) * u + 'px'; e.appendChild(cp); }
    } else if (b.s === 'table') {
      e = el('table', 'pg-table');
      b.t.split(';').forEach(function (row, r) {
        var tr = el('tr');
        row.split('|').forEach(function (cell) { var c = el(r === 0 && hdr ? 'th' : 'td', '', cell.trim()); c.style.fontSize = defs.body[0] * u + 'px'; tr.appendChild(c); });
        e.appendChild(tr);
      });
    } else {
      e = el(b.s === 'title' ? 'h2' : b.s === 'h1' ? 'h3' : b.s === 'h2' ? 'h4' : 'p', 'pg-b pg-' + b.s);
      e.removeAttribute('role');
      e.textContent = b.t || '(empty)';
      if (!b.t) e.classList.add('pg-blank');
      var bold = key === 'body' ? (P.bold.body || b.b) : (P.bold[key] || b.b);
      if (b.s === 'caption') size = Math.max(6, defs.body[0] - 2) * u;
      e.style.fontSize = size + 'px'; e.style.fontWeight = bold ? '700' : '400'; e.style.fontFamily = fontCss(key);
      if (b.s === 'body' || b.s === 'bullet' || b.s === 'number') e.style.textAlign = lay.align === 2 ? 'center' : 'left';
      if (b.s === 'title' && isSlide()) e.style.textAlign = 'left';
      if (b.s === 'bullet') e.classList.add('pg-li');
      if (b.s === 'number') e.classList.add('pg-li', 'pg-num');
    }
    e.classList.add('pg-sel-able'); if (i === sel) e.classList.add('pg-sel');
    e.setAttribute('tabindex', '0');
    e.addEventListener('click', function (ev) { ev.stopPropagation(); sel = i; paint(); });
    e.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); sel = i; paint(); } });
    return e;
  }

  function paintStage() {
    var st = ui.stage; st.replaceChildren();
    var spaceEm = [0.2, 0.7, 1.3][lay.spacing - 1], lineH = [1.15, 1.4, 1.7][lay.spacing - 1];
    if (!isSlide()) {
      var pw = Math.max(260, Math.min(520, st.clientWidth || 520));
      var u = 1.3 * Math.max(0.85, Math.min(1, pw / 520));
      var page = el('div', 'pg-page'); page.style.padding = [10, 26, 52][lay.margin - 1] * Math.min(1, pw / 520) + 'px';
      page.style.lineHeight = lineH; page.style.setProperty('--pg-gap', spaceEm * defs.body[0] * u + 'px');
      var num = 0;
      blocks.forEach(function (b, i) {
        num = b.s === 'number' ? num + 1 : 0;
        var e = blockEl(b, i, u);
        if (b.s === 'number') e.setAttribute('data-n', num + '.');
        page.appendChild(e);
      });
      st.appendChild(page);
    } else {
      var sw = Math.max(240, Math.min(560, st.clientWidth || 560)), us = sw / 960;
      slidesOf().forEach(function (ix, si) {
        var wrap = el('div', 'pg-slidewrap'); wrap.appendChild(el('span', 'pg-slideno', 'Slide ' + (si + 1)));
        var sl = el('div', 'pg-slide'); sl.style.width = sw + 'px'; sl.style.height = sw * 9 / 16 + 'px';
        sl.style.background = BG[col.bg][1]; sl.style.color = INK[col.ink][1]; sl.style.padding = 40 * us + 'px'; sl.style.lineHeight = lineH;
        sl.style.setProperty('--pg-gap', spaceEm * 14 * us + 'px');
        ix.forEach(function (i) { sl.appendChild(blockEl(blocks[i], i, us)); });
        wrap.appendChild(sl); st.appendChild(wrap);
      });
    }
  }
  function paintOutline() {
    var o = ui.outline; if (!o) return; o.replaceChildren();
    o.appendChild(el('h3', 'pg-oh', 'Headings'));
    var any = false;
    blocks.forEach(function (b, i) {
      if (b.s !== 'h1' && b.s !== 'h2') return;
      any = true;
      var a = el('button', 'pg-o pg-o-' + b.s, b.t || '(empty)'); a.type = 'button';
      a.addEventListener('click', function () { sel = i; paint(); });
      o.appendChild(a);
    });
    if (!any) o.appendChild(el('p', 'pg-none', 'No headings yet. Only text with a Heading style shows here.'));
  }
  function field(label, node) { var l = el('label', 'pg-f'); l.appendChild(el('span', '', label)); l.appendChild(node); return l; }
  function select(opts, val, fn, label) {
    var s = el('select'); s.setAttribute('aria-label', label);
    opts.forEach(function (o) { var op = el('option', '', o[1]); op.value = o[0]; if (o[0] === val) op.selected = true; s.appendChild(op); });
    s.addEventListener('change', function () { fn(s.value); }); return s;
  }
  function paintBar() {
    var bar = ui.bar; bar.replaceChildren();
    if (!(tools.style || tools.text || tools.format || tools.add || tools.alt || tools.credit || tools.size || tools.slides)) { bar.hidden = true; return; }
    bar.hidden = false;
    var b = blocks[sel];
    if (!b) { bar.appendChild(el('p', 'pg-none', 'Click a part of the page to work on it.')); return; }
    var row = el('div', 'pg-row');
    var names = isSlide() ? NAMES_SLIDE : NAMES_DOC;
    row.appendChild(el('span', 'pg-sellabel', 'Selected: ' + (b.s === 'image' ? 'Picture' : b.s === 'table' ? 'Table' : names[b.s] || b.s)));
    if (tools.style && b.s !== 'image' && b.s !== 'table') row.appendChild(field('Style', select(Object.keys(names).map(function (k) { return [k, names[k]]; }), b.s, function (v) { b.s = v; change(); }, 'Style of the selected part')));
    if (tools.format && b.s !== 'image' && b.s !== 'table') {
      row.appendChild(btn('Bold', function () { b.b = b.b ? 0 : 1; change(); }, !!b.b));
      row.appendChild(btn('Bigger', function () { b.z = Math.min(24, b.z + 2); change(); }));
      row.appendChild(btn('Smaller', function () { b.z = Math.max(-6, b.z - 2); change(); }));
    }
    if (tools.size && b.s === 'image') row.appendChild(btn(b.big ? 'Make smaller' : 'Make larger', function () { b.big = b.big ? 0 : 1; change(); }));
    if (tools.slides) {
      if (sel > 0) row.appendChild(btn(b.brk ? 'Join the slide above' : 'Start a new slide here', function () { b.brk = b.brk ? 0 : 1; change(); }, !!b.brk));
      row.appendChild(btn('Move up', function () { if (sel > 0) { var t = blocks[sel - 1]; blocks[sel - 1] = b; blocks[sel] = t; sel--; change(); } }));
      row.appendChild(btn('Move down', function () { if (sel < blocks.length - 1) { var t = blocks[sel + 1]; blocks[sel + 1] = b; blocks[sel] = t; sel++; change(); } }));
    }
    if (tools.add) row.appendChild(btn('Delete', function () { if (blocks.length > 1) { blocks.splice(sel, 1); sel = Math.max(0, sel - 1); change(); } }));
    bar.appendChild(row);
    if (tools.text && b.s !== 'image' && b.s !== 'table') {
      var ta = el('textarea', 'pg-text'); ta.rows = 2; ta.value = b.t; ta.setAttribute('aria-label', 'Words in the selected part');
      ta.addEventListener('input', function () { b.t = ta.value; B.moved = true; paintStage(); paintOutline(); report(); });
      bar.appendChild(ta);
    }
    if (b.s === 'image') {
      if (tools.alt) { if (!b.alt) bar.appendChild(el('p', 'pg-noalt', 'No alt text yet: someone using a screen reader gets nothing from this picture.')); var a = el('input', 'pg-in'); a.type = 'text'; a.value = b.alt; a.placeholder = 'Alt text: what the picture shows'; a.setAttribute('aria-label', 'Alt text'); a.addEventListener('input', function () { b.alt = a.value; B.moved = true; var nl = bar.querySelector('.pg-noalt'); if (nl && a.value) nl.remove(); report(); }); bar.appendChild(field('Alt text', a)); }
      if (tools.credit) { var c = el('input', 'pg-in'); c.type = 'text'; c.value = b.cr; c.placeholder = 'Credit line'; c.setAttribute('aria-label', 'Credit line'); c.addEventListener('input', function () { b.cr = c.value; B.moved = true; paintStage(); report(); }); bar.appendChild(field('Credit', c)); }
    }
    if (tools.add) {
      var add = el('div', 'pg-row');
      add.appendChild(el('span', 'pg-sellabel', 'Add below:'));
      var kinds = isSlide() ? [['title', 'Title'], ['bullet', 'Bullet'], ['body', 'Text'], ['image', 'Picture']] : [['h1', 'Heading 1'], ['h2', 'Heading 2'], ['body', 'Paragraph'], ['bullet', 'List item']];
      kinds.forEach(function (k) {
        add.appendChild(btn(k[1], function () {
          var nb = { s: k[0], t: k[0] === 'image' ? '' : 'New ' + k[1].toLowerCase(), b: 0, z: 0, brk: 0, alt: '', cr: '', big: 0, pic: k[0] === 'image' ? 'sun' : '' };
          blocks.splice(sel + 1, 0, nb); sel++; change();
        }));
      });
      bar.appendChild(add);
    }
  }
  function paintStyles() {
    var p = ui.styles; if (!p) return; p.replaceChildren();
    var names = isSlide() ? { title: 'Title', body: 'Text' } : { title: 'Title', h1: 'Heading 1', h2: 'Heading 2', body: 'Body text' };
    p.appendChild(el('h3', 'pg-oh', 'Styles'));
    var row = el('div', 'pg-row');
    row.appendChild(field('Style', select(Object.keys(names).map(function (k) { return [k, names[k]]; }), ui.styleSel, function (v) { ui.styleSel = v; paintStyles(); }, 'Which style to change')));
    var k = ui.styleSel, step = isSlide() ? 4 : 1;
    row.appendChild(btn('Smaller', function () { defs[k][0] = Math.max(6, defs[k][0] - step); change(); }));
    row.appendChild(el('span', 'pg-size', defs[k][0] + ' pt'));
    row.appendChild(btn('Bigger', function () { defs[k][0] = Math.min(80, defs[k][0] + step); change(); }));
    row.appendChild(btn('Bold', function () { P.bold[k] = P.bold[k] ? 0 : 1; change(); }, !!P.bold[k]));
    row.appendChild(btn(P.font[k] === 2 ? 'Font: serif' : 'Font: sans', function () { P.font[k] = P.font[k] === 2 ? 1 : 2; change(); }));
    p.appendChild(row);
  }
  function seg(label, opts, val, fn) {
    var g = el('div', 'pg-seg'); g.appendChild(el('span', 'pg-sellabel', label));
    opts.forEach(function (o, i) { g.appendChild(btn(o, function () { fn(i + 1); }, val === i + 1)); });
    return g;
  }
  function paintLayout() {
    var p = ui.layout; if (!p) return; p.replaceChildren();
    p.appendChild(seg('Space between parts', ['Tight', 'Normal', 'Open'], lay.spacing, function (n) { lay.spacing = n; change(); }));
    if (!isSlide()) p.appendChild(seg('Margins', ['Narrow', 'Normal', 'Wide'], lay.margin, function (n) { lay.margin = n; change(); }));
    p.appendChild(seg('Body text', ['Left', 'Centred'], lay.align, function (n) { lay.align = n; change(); }));
  }
  function paintColour() {
    var p = ui.colour; if (!p) return; p.replaceChildren();
    var row = el('div', 'pg-row');
    row.appendChild(field('Background', select(Object.keys(BG).map(function (k) { return [k, BG[k][0]]; }), col.bg, function (v) { col.bg = v; change(); }, 'Slide background')));
    row.appendChild(field('Text colour', select(Object.keys(INK).map(function (k) { return [k, INK[k][0]]; }), col.ink, function (v) { col.ink = v; change(); }, 'Text colour')));
    p.appendChild(row);
  }
  function paintHeader() {
    var p = ui.header; if (!p) return; p.replaceChildren();
    p.appendChild(btn('First row is a header', function () { hdr = hdr ? 0 : 1; change(); }, !!hdr));
  }
  function paint() {
    paintStage(); paintOutline(); paintBar(); paintStyles(); paintLayout(); paintColour(); paintHeader();
  }

  B.widget('page', {
    sections: ['gpanel'],
    label: function () { return B.spec && B.spec.pg && B.spec.pg.mode === 'slide' ? 'A slide deck' : 'A document'; },
    parse: parse,
    start: function (fresh) {
      spec = B.spec; P = copy(spec.pg); mode = P.mode; tools = P.tools;
      blocks = P.blocks; defs = P.defs; lay = P.lay; col = P.col; hdr = P.header;
      var sv = fresh ? null : B.saved();
      if (sv && Array.isArray(sv.blocks) && sv.blocks.length && sv.blocks.every(function (b) { return b && CODE[b.s] && typeof b.t === 'string'; })) {
        blocks = sv.blocks.map(function (b) { return { s: b.s, t: b.t, b: b.b ? 1 : 0, z: Number(b.z) || 0, brk: b.brk ? 1 : 0, alt: String(b.alt || ''), cr: String(b.cr || ''), big: b.big ? 1 : 0, pic: PICS[b.pic] ? b.pic : (b.s === 'image' ? 'sun' : '') }; });
        if (sv.defs) ['title', 'h1', 'h2', 'body'].forEach(function (k) { if (sv.defs[k] && sv.defs[k][0] >= 6 && sv.defs[k][0] <= 80) defs[k] = [sv.defs[k][0], defs[k][1]]; });
        if (sv.font) ['title', 'h1', 'h2', 'body'].forEach(function (k) { if (sv.font[k] === 1 || sv.font[k] === 2) P.font[k] = sv.font[k]; });
        if (sv.bold) ['title', 'h1', 'h2', 'body'].forEach(function (k) { if (sv.bold[k] === 0 || sv.bold[k] === 1) P.bold[k] = sv.bold[k]; });
        if (sv.lay) ['spacing', 'margin', 'align'].forEach(function (k) { var n = Number(sv.lay[k]); if (n >= 1 && n <= 3) lay[k] = n; });
        if (sv.col && BG[sv.col.bg] && INK[sv.col.ink]) col = { bg: sv.col.bg, ink: sv.col.ink };
        if (sv.hdr === 0 || sv.hdr === 1) hdr = sv.hdr;
      }
      sel = 0; status = '';
      var panel = B.el('gpanel'); panel.replaceChildren();
      ui = { styleSel: isSlide() ? 'body' : 'h1' };
      var main = el('div', 'pg-main');
      if (!isSlide() && P.outline) { ui.outline = el('nav', 'pg-outline'); ui.outline.setAttribute('aria-label', 'Headings in this document'); main.appendChild(ui.outline); }
      var right = el('div', 'pg-right');
      ui.bar = el('div', 'pg-bar'); right.appendChild(ui.bar);
      ui.stage = el('div', 'pg-stage'); right.appendChild(ui.stage);
      if (tools.styledef) { ui.styles = el('div', 'pg-tool'); right.appendChild(ui.styles); }
      if (tools.layout) { ui.layout = el('div', 'pg-tool'); right.appendChild(ui.layout); }
      if (tools.colour && isSlide()) { ui.colour = el('div', 'pg-tool'); right.appendChild(ui.colour); }
      if (tools.header) { ui.header = el('div', 'pg-tool'); right.appendChild(ui.header); }
      main.appendChild(right); panel.appendChild(main);
      var row = el('div', 'gbar');
      var again = el('button', '', 'Start again'); again.type = 'button'; again.addEventListener('click', B.restart); row.appendChild(again);
      panel.appendChild(row);
      paint();
      if (!bound) { bound = true; window.addEventListener('resize', function () { if (ui && ui.stage && ui.stage.isConnected) paintStage(); }); }
      report();
    },
  });
})(WPB);
