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

// Tell the lesson page what the code is now, so its code checks and compare box can follow along.
// There is no Run button: every preview update counts as a run. `quiet` marks the first one (page load),
// so a check can tick silently but does not nag before the student has typed anything.
let reported = false;
function report(html) {
  try {
    if (window.parent !== window && params.get('id')) window.parent.postMessage({ wp: 'run', kind: 'html', id: params.get('id'), status: 'done', quiet: !reported, code: html }, location.origin);
  } catch { /* not embedded */ }
  reported = true;
}

// Boxes view (?boxes=1 or the Boxes button): the preview draws a labelled outline around every element,
// coloured by depth, so nesting is visible. Added to the preview only; the student's code is unchanged.
const BOXES = `
<style>body *{outline:2px solid var(--wpc);outline-offset:1px}body *:not(br){padding:4px 6px;margin:6px 4px}body ul,body ol{padding-left:32px}
[data-wp-tag]::before{content:attr(data-wp-tag);display:inline-block;font:600 11px/1.4 ui-monospace,Menlo,Consolas,monospace;
color:#fff;background:var(--wpc);padding:0 5px;border-radius:3px;margin-right:6px;vertical-align:.15em;text-decoration:none;font-style:normal}
[data-wp-tag=tr]::before{content:none}[data-wp-tag=tr]{outline-width:3px}</style>
<script>(function(){var C=['#2563eb','#c2570a','#15803d','#9333ea','#be185d'];
function walk(el,d){[].forEach.call(el.children,function(c){if(/^(SCRIPT|STYLE|BR|TEMPLATE)$/.test(c.tagName))return;
if(/^(TBODY|THEAD|TFOOT)$/.test(c.tagName)){c.style.outline='none';c.style.padding='0';walk(c,d);return;} // the browser adds <tbody> by itself: not a box students wrote
c.setAttribute('data-wp-tag',c.tagName.toLowerCase());c.style.setProperty('--wpc',C[d%C.length]);walk(c,d+1)})}
document.addEventListener('DOMContentLoaded',function(){walk(document.body,0)})})()<\/script>`;
// Every preview: pictures are found in the course's media folder (src="trophy.svg"), and links behave like a
// real page's without replacing the student's page: web addresses open in a new tab, #name scrolls to that part.
const PAGE = `<base href="${new URL('media/', location.href).href}"><script>document.addEventListener('click',function(e){
var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href');e.preventDefault();
if(h.charAt(0)==='#'){var t=document.getElementById(h.slice(1))||document.getElementsByName(h.slice(1))[0];if(t)t.scrollIntoView();}
else if(/^https?:/i.test(h))window.open(h,'_blank','noopener');});<\/script>`;
let boxes = params.get('boxes') === '1';
// ?zoom=1.6 enlarges the code and the preview, for recorded clips (text stays readable at video size).
const zoom = Math.min(3, Math.max(1, Number(params.get('zoom')) || 1));
const ZOOM = zoom > 1 ? `<style>html{zoom:${zoom}}</style>` : '';
if (zoom > 1) codeEl.style.fontSize = `${Math.round(14 * zoom)}px`;
const boxesBtn = $('boxes');
const showBoxes = () => { boxesBtn.setAttribute('aria-pressed', String(boxes)); boxesBtn.textContent = boxes ? 'Boxes on' : 'Boxes'; };
boxesBtn.addEventListener('click', () => { boxes = !boxes; showBoxes(); render(); });
showBoxes();

function render() {
  const html = codeEl.value;
  // Injected before the student's code (after a <!DOCTYPE> if there is one): appended at the end, a half-typed tag
// such as "<stro" would swallow it. The Boxes script waits for the page to load.
  const extra = PAGE + ZOOM + (boxes ? BOXES : '');
  const dt = html.match(/^\s*<!doctype[^>]*>/i);
  previewEl.srcdoc = dt ? dt[0] + extra + html.slice(dt[0].length) : extra + html;
  // Parse (without running anything) so tests can check what the page says.
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const text = (doc.body.innerText ?? doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
  textEl.textContent = text;
  Object.assign(window.__playground, { html, text, title: doc.title, updates: window.__playground.updates + 1 });
  statusEl.dataset.state = 'updated';
  statusEl.textContent = 'Preview updated';
  report(html);
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

mountSnippets({
  kind: 'html', toolbar: document.querySelector('.bar'), textarea: codeEl,
  host: document.querySelector('.preview-pane'), closeOnPaste: true,
  lesson: params.get('id') && params.get('free') !== '1' ? { slug: params.get('id').replace(/\/[^/]*$/, ''), code: starter } : null,
});
