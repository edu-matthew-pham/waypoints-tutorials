import { Marked } from 'marked';
import { parseLessonText, validateLessonCore, snippetFrom, snippetId, unlockKind } from './lesson-core.mjs';
import { lessonPageHtml, tryEmbed } from './lesson-view.mjs';
import { highlightCode } from './highlight.js';
import { REQUEST_FORM_URL } from './config.js';

const EXAMPLE = {
  'lesson.md': `---
title: My first turtle lesson
summary: Predict, run and change a short drawing program.
language: python
---
A turtle walks across the screen, leaving a line behind.

## Predict

\`\`\`step
stage: predict
code: shape.py#square
\`\`\`

What shape will the turtle draw? Where will it finish?

## Run

\`\`\`step
stage: run
try: { starter: "shape.py#square", height: 420 }
\`\`\`

Run the program and compare it with your prediction.

## Modify

\`\`\`step
stage: modify
try: { starter: "shape.py#modify", height: 420 }
\`\`\`

Change the loop so the turtle draws a triangle.
`,
  'shape.py': `# region: square
from turtle import *

for i in range(4):
    forward(100)
    right(90)
# endregion

# region: modify
from turtle import *

for i in range(4):
    forward(100)
    right(90)

# Change the code so it draws a triangle.
# endregion
`,
};

const $ = (id) => document.getElementById(id);
const KEY = 'wp-create-v1';
let files = {};      // name -> text, in insertion order
let current = 'lesson.md';

// ---------- state ----------
const load = () => {
  try {
    const h = location.hash.slice(1);
    if (h.startsWith('l=')) return decode(h.slice(2));
    const s = localStorage.getItem(KEY);
    if (s) return Promise.resolve(JSON.parse(s));
  } catch { /* ignore */ }
  return Promise.resolve(null);
};
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(files)); } catch { /* storage unavailable */ } };

async function encode(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate-raw'));
  const buf = new Uint8Array(await new Response(stream).arrayBuffer());
  let bin = ''; buf.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function decode(str) {
  const bin = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return JSON.parse(await new Response(stream).text());
}

// ---------- UI ----------
function renderTabs() {
  $('tabs').innerHTML = '';
  for (const name of Object.keys(files)) {
    const b = document.createElement('button');
    b.type = 'button'; b.role = 'tab'; b.textContent = name;
    b.setAttribute('aria-selected', String(name === current));
    b.onclick = () => { current = name; sync(); };
    $('tabs').append(b);
  }
}
function sync() {
  renderTabs();
  $('text').value = files[current] ?? '';
  $('fname').value = current;
  $('fname').disabled = current === 'lesson.md';
  $('delfile').disabled = current === 'lesson.md';
  $('helpers').hidden = current !== 'lesson.md';
}
$('text').addEventListener('input', () => { files[current] = $('text').value; save(); schedule(); });
$('text').addEventListener('keydown', (e) => {
  if (e.key === 'Tab') { e.preventDefault(); const t = $('text'); t.setRangeText('    ', t.selectionStart, t.selectionEnd, 'end'); files[current] = t.value; save(); schedule(); }
});
$('fname').addEventListener('change', () => {
  const to = $('fname').value.trim().replace(/[\\/]/g, '');
  if (!to || to === current || files[to] !== undefined) { $('fname').value = current; return; }
  const next = {};
  for (const [k, v] of Object.entries(files)) next[k === current ? to : k] = v;
  files = next; current = to; save(); sync(); schedule();
});
$('addfile').onclick = () => {
  let n = 1; while (files[`code${n}.py`] !== undefined) n++;
  files[`code${n}.py`] = '# region: start\nfrom turtle import *\n\nforward(100)\n# endregion\n';
  current = `code${n}.py`; save(); sync(); schedule();
};
$('delfile').onclick = () => {
  if (current === 'lesson.md' || !confirm(`Delete ${current}?`)) return;
  delete files[current]; current = 'lesson.md'; save(); sync(); schedule();
};
$('example').onclick = () => {
  if (!confirm('Replace everything with the example lesson?')) return;
  files = { ...EXAMPLE }; current = 'lesson.md'; save(); sync(); schedule();
};
$('upload').onchange = async (e) => {
  for (const f of e.target.files) files[f.name] = await f.text();
  e.target.value = ''; if (files['lesson.md'] === undefined) files = { 'lesson.md': '', ...files };
  save(); sync(); schedule();
};

// ---------- preview ----------
const siteRoot = new URL('../../', location.href).href;
let timer;
const schedule = () => { clearTimeout(timer); timer = setTimeout(render, 350); };

function problemsList(items, ok) {
  $('problems').innerHTML = '';
  for (const t of items.length ? items : [ok]) {
    const li = document.createElement('li'); li.textContent = t; if (!items.length) li.className = 'ok'; $('problems').append(li);
  }
}
// Snippet lists of both playgrounds: used to validate ids and to offer the unlock picker.
const snippetData = {};
const loadSnippets = Promise.all(['turtle', 'html'].map(async (k) => {
  const dir = k === 'turtle' ? '_playground' : '_playground-html';
  try { snippetData[k] = await (await fetch(new URL(`../../${dir}/snippets.json`, location.href))).json(); } catch { /* validation of ids is skipped */ }
}));
const knownIds = () => Object.fromEntries(Object.entries(snippetData).map(([k, d]) => [k, new Set(d.groups.flatMap((g) => g.items.map((i) => snippetId(i.label))))]));

function render() {
  const read = (f) => files[f];
  let lesson;
  try { lesson = parseLessonText(files['lesson.md'] || '', 'my-lesson'); }
  catch (e) { problemsList(['lesson.md: ' + e.message.split('\n')[0]]); return; }
  const errs = validateLessonCore(lesson, read, knownIds()).map((m) => m.replace(/^my-lesson › /, ''));
  // clip checks that need an app are skipped here: clips are only recorded by the repository build
  problemsList(errs, 'Looks good.');
  const clipHtml = (s) => s.config.clip
    ? `<div class="placeholder"><b>Clip placeholder · ${s.id}</b><span>Recorded when this lesson is added to the repository.</span></div>` : '';
  const locksFor = (kind) => lesson.steps.filter((x) => (x.config.unlocks || []).length && unlockKind(lesson, x) === kind)
    .flatMap((x) => x.config.unlocks.map((id) => `${id}~${x.title.replace(/[|~]/g, ' ')}`)).join('|');
  const tryHtml = (s) => {
    const t = s.config.try; if (!t) return '';
    try { return tryEmbed(lesson, s, snippetFrom(read, t.starter || s.config.code), siteRoot, locksFor(unlockKind(lesson, s))); } catch { return ''; }
  };
  const keep = $('preview').contentWindow?.scrollY || 0;
  $('preview').srcdoc = lessonPageHtml(lesson, { Marked, highlightCode, snippet: (r) => snippetFrom(read, r), clipHtml, tryHtml, crumb: null, source: '' });
  $('preview').onload = () => { try { $('preview').contentWindow.scrollTo(0, keep); } catch { /* ignore */ } };
}

// ---------- step helpers: add a check or choose snippets to unlock ----------
/** The step the cursor is in: its section's line range and the line index of its closing ``` fence. */
function stepAt(text, pos) {
  const lines = text.split('\n');
  let offset = 0, sec = -1, secLine = -1, n = -1;
  for (let i = 0; i < lines.length; i++) {
    if (offset > pos) break;
    if (/^## /.test(lines[i])) { n++; secLine = i; }
    offset += lines[i].length + 1;
  }
  if (secLine < 0) return null;
  let open = -1, close = -1;
  for (let i = secLine + 1; i < lines.length && !/^## /.test(lines[i]); i++) {
    if (open < 0 && /^```step\s*$/.test(lines[i])) open = i;
    else if (open >= 0 && /^```\s*$/.test(lines[i])) { close = i; break; }
  }
  sec = n;
  return { lines, index: sec, open, close };
}
const stepKeyLines = (st) => st.lines.slice(st.open + 1, st.close);
function setText(next, selectText) {
  files['lesson.md'] = next; save(); sync(); schedule();
  const t = $('text'); t.focus();
  if (selectText) { const i = next.indexOf(selectText); if (i >= 0) t.setSelectionRange(i, i + selectText.length); }
}
function withStep(fn) {
  const t = $('text'), st = stepAt(t.value, t.selectionStart);
  if (!st || st.open < 0 || st.close < 0) { alert('Put the cursor inside a step (under a "## Title" heading that has a ```step block) first.'); return; }
  fn(st);
}
const TICK = ['check: { type: reflect, text: "I can explain …" }'];
const QUESTION = ['check:', '  type: question', '  q: "Your question?"', '  options: ["Option A", "Option B", "Option C"]', '  answer: 0', '  explain: "Why that answer is right."'];
function addCheck(block, selectText) {
  withStep((st) => {
    if (stepKeyLines(st).some((l) => /^check:/.test(l))) { alert('This step already has a check. Edit or delete it first.'); return; }
    st.lines.splice(st.close, 0, ...block);
    setText(st.lines.join('\n'), selectText);
  });
}
$('addtick').onclick = () => addCheck(TICK, '…');
$('addq').onclick = () => addCheck(QUESTION, 'Your question?');
$('resetprog').onclick = () => { try { localStorage.removeItem('wp-progress'); } catch { /* ignore */ } render(); };

$('pick').onclick = async () => {
  await loadSnippets;
  withStep((st) => {
    let lesson;
    try { lesson = parseLessonText(files['lesson.md'], 'my-lesson'); } catch { alert('Fix the errors in lesson.md first.'); return; }
    const step = lesson.steps[st.index];
    const kind = unlockKind(lesson, step);
    const data = snippetData[kind];
    if (!data) { alert('Could not load the snippet list.'); return; }
    const have = new Set(step.config.unlocks || []);
    $('pickinfo').textContent = `Tick the snippets students earn by passing this step's check (${kind === 'html' ? 'HTML and CSS' : 'Python turtle'} playground). Unticked ones stay available to everyone unless another step claims them.`;
    $('picklist').innerHTML = '';
    for (const g of data.groups) {
      const h = document.createElement('h3'); h.textContent = g.name; $('picklist').append(h);
      for (const i of g.items) {
        const id = snippetId(i.label);
        const l = document.createElement('label');
        const c = document.createElement('input'); c.type = 'checkbox'; c.value = id; c.checked = have.has(id);
        l.append(c, document.createTextNode(i.label)); l.title = i.hint || ''; $('picklist').append(l);
      }
    }
    $('pickdlg').returnValue = '';
    $('pickdlg').onclose = () => {
      if ($('pickdlg').returnValue !== 'ok') return;
      const ids = [...$('picklist').querySelectorAll('input:checked')].map((c) => c.value);
      const st2 = stepAt(files['lesson.md'], $('text').selectionStart) || st;
      const lines = st2.lines;
      let at = -1;
      for (let i = st2.open + 1; i < st2.close; i++) if (/^unlocks:/.test(lines[i])) at = i;
      if (!ids.length) { if (at >= 0) lines.splice(at, 1); }
      else if (at >= 0) lines[at] = `unlocks: [${ids.join(', ')}]`;
      else lines.splice(st2.close, 0, `unlocks: [${ids.join(', ')}]`);
      setText(lines.join('\n'));
    };
    $('pickdlg').showModal();
  });
};

// ---------- share / download ----------
$('share').onclick = async () => {
  const url = `${location.origin}${location.pathname}#l=${await encode(files)}`;
  try { await navigator.clipboard.writeText(url); $('share').textContent = 'Link copied'; } catch { prompt('Copy this link', url); }
  setTimeout(() => ($('share').textContent = 'Copy share link'), 1500);
};

// Request publishing: copy the share link (the form asks for it), then open the form.
if (REQUEST_FORM_URL) {
  $('request').hidden = false;
  $('request').onclick = async () => {
    const url = `${location.origin}${location.pathname}#l=${await encode(files)}`;
    let copied = true;
    try { await navigator.clipboard.writeText(url); } catch { copied = false; prompt('Copy this lesson link, then paste it into the form', url); }
    if (copied) alert('Your lesson link is copied. Paste it into the form on the next page.');
    window.open(REQUEST_FORM_URL, '_blank', 'noopener');
  };
}

const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc32 = (b) => { let c = 0xffffffff; for (const x of b) c = crcTable[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
function zip(entries) { // store-only zip
  const enc = new TextEncoder(); const parts = []; const central = []; let off = 0;
  const u16 = (n) => [n & 255, (n >> 8) & 255], u32 = (n) => [n & 255, (n >> 8) & 255, (n >> 16) & 255, (n >>> 24) & 255];
  for (const [name, text] of entries) {
    const nb = enc.encode(name), data = enc.encode(text), crc = crc32(data);
    const local = new Uint8Array([0x50, 0x4b, 3, 4, 20, 0, 0, 8, 0, 0, 0, 0, 0x21, 0, ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(nb.length), 0, 0, ...nb]);
    parts.push(local, data);
    central.push(new Uint8Array([0x50, 0x4b, 1, 2, 20, 0, 20, 0, 0, 8, 0, 0, 0, 0, 0x21, 0, ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(nb.length), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...u32(off), ...nb]));
    off += local.length + data.length;
  }
  const cdSize = central.reduce((n, c) => n + c.length, 0);
  return new Blob([...parts, ...central, new Uint8Array([0x50, 0x4b, 5, 6, 0, 0, 0, 0, ...u16(entries.length), ...u16(entries.length), ...u32(cdSize), ...u32(off), 0, 0])], { type: 'application/zip' });
}
$('download').onclick = () => {
  let title = 'my-lesson';
  try { title = parseLessonText(files['lesson.md'], 'x').title; } catch { /* use default */ }
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-lesson';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(zip(Object.entries(files).map(([n, t]) => [`${slug}/${n}`, t])));
  a.download = `${slug}.zip`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};

// ---------- start ----------
files = (await load()) || { ...EXAMPLE };
if (!files['lesson.md'] && files['lesson.md'] !== '') files = { 'lesson.md': '', ...files };
sync(); render();
