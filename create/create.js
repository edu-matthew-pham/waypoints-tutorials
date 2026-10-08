import { Marked } from 'marked';
import { parseLessonText, validateLessonCore, snippetFrom } from './lesson-core.mjs';
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
function render() {
  const read = (f) => files[f];
  let lesson;
  try { lesson = parseLessonText(files['lesson.md'] || '', 'my-lesson'); }
  catch (e) { problemsList(['lesson.md: ' + e.message.split('\n')[0]]); return; }
  const errs = validateLessonCore(lesson, read).map((m) => m.replace(/^my-lesson › /, ''));
  // clip checks that need an app are skipped here: clips are only recorded by the repository build
  problemsList(errs, 'Looks good.');
  const clipHtml = (s) => s.config.clip
    ? `<div class="placeholder"><b>Clip placeholder · ${s.id}</b><span>Recorded when this lesson is added to the repository.</span></div>` : '';
  const tryHtml = (s) => {
    const t = s.config.try; if (!t) return '';
    try { return tryEmbed(lesson, s, snippetFrom(read, t.starter || s.config.code), siteRoot); } catch { return ''; }
  };
  const keep = $('preview').contentWindow?.scrollY || 0;
  $('preview').srcdoc = lessonPageHtml(lesson, { Marked, highlightCode, snippet: (r) => snippetFrom(read, r), clipHtml, tryHtml, crumb: null, source: '' });
  $('preview').onload = () => { try { $('preview').contentWindow.scrollTo(0, keep); } catch { /* ignore */ } };
}

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
