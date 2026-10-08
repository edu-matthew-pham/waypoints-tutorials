import { mountSnippets } from './snippets.js';

// HTML & CSS playground: type HTML, see the page update. The preview is a sandboxed iframe
// (scripts may run, but it is a separate origin and cannot reach this page or the site).
//   ?code=<starter html>   ?id=<key for autosaving this student's edits>
const params = new URLSearchParams(location.search);
const starter = params.get('code') ?? '<h1>Hello!</h1>\n<p>Change me.</p>\n';
const storeKey = params.get('id') ? `wp-html-playground:${params.get('id')}` : null;

const $ = (id) => document.getElementById(id);
const codeEl = $('code'), previewEl = $('preview'), statusEl = $('status'), textEl = $('preview-text');

const read = () => { try { return storeKey ? localStorage.getItem(storeKey) : null; } catch { return null; } };
const write = (v) => { try { if (storeKey) (v === null ? localStorage.removeItem(storeKey) : localStorage.setItem(storeKey, v)); } catch { /* storage unavailable */ } };

codeEl.value = read() ?? starter;

// A small, stable surface for tests and tooling.
window.__playground = { html: '', text: '', title: '', updates: 0 };

function render() {
  const html = codeEl.value;
  previewEl.srcdoc = html;
  // Parse (without running anything) so tests can check what the page says.
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const text = (doc.body.innerText ?? doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
  textEl.textContent = text;
  Object.assign(window.__playground, { html, text, title: doc.title, updates: window.__playground.updates + 1 });
  statusEl.dataset.state = 'updated';
  statusEl.textContent = 'Preview updated';
}

// Throttle (not debounce): the preview keeps up while someone is typing, and always catches the last keystroke.
let timer = null;
const schedule = () => { if (!timer) timer = setTimeout(() => { timer = null; render(); }, 120); };

codeEl.addEventListener('input', () => { write(codeEl.value); schedule(); });
// A lesson task can reset the editor to its own starter code.
window.addEventListener('message', (e) => {
  const m = e.data;
  if (e.origin !== location.origin || !m || m.wp !== 'set-code' || typeof m.code !== 'string') return;
  codeEl.value = m.code; write(m.code); schedule();
});
codeEl.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') { // keep focus in the editor; indent with two spaces
    e.preventDefault();
    codeEl.setRangeText('  ', codeEl.selectionStart, codeEl.selectionEnd, 'end');
    write(codeEl.value); schedule();
  }
});
$('reset').addEventListener('click', () => { codeEl.value = starter; write(null); render(); });

render();

mountSnippets({ kind: 'html', toolbar: document.querySelector('.bar'), textarea: codeEl });
