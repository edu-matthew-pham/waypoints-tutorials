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
.wp-lbl{display:inline-block;font:600 11px/1.4 ui-monospace,Menlo,Consolas,monospace;color:#fff;background:var(--wpc);padding:0 5px;border-radius:3px;margin:0 4px 0 0;vertical-align:top;outline:none!important;text-decoration:none}
[data-wp-tag=tr]::before{content:none}[data-wp-tag=tr]{outline-width:3px}</style>
<script>(function(){var C=['#2563eb','#c2570a','#15803d','#9333ea','#be185d'];
function walk(el,d){[].slice.call(el.children).forEach(function(c){if(/^(SCRIPT|STYLE|BR|TEMPLATE)$/.test(c.tagName))return;
if(/^(TBODY|THEAD|TFOOT)$/.test(c.tagName)){c.style.outline='none';c.style.padding='0';walk(c,d);return;} // the browser adds <tbody> by itself: not a box students wrote
c.setAttribute('data-wp-tag',c.tagName.toLowerCase());c.style.setProperty('--wpc',C[d%C.length]);
if(/^(IMG|INPUT|SELECT|TEXTAREA)$/.test(c.tagName)){var lb=document.createElement('span');lb.className='wp-lbl';lb.textContent=c.tagName.toLowerCase();lb.style.setProperty('--wpc',C[d%C.length]);c.parentNode.insertBefore(lb,c);} // no ::before on pictures and form fields
walk(c,d+1)})}
document.addEventListener('DOMContentLoaded',function(){walk(document.body,0)})})()<\/script>`;
// Every preview: pictures are found in the course's media folder (src="trophy.svg"), and links behave like a
// real page's without replacing the student's page: web addresses open in a new tab, #name scrolls to that part.
const PAGE = `<base href="${new URL('media/', location.href).href}"><script>document.addEventListener('click',function(e){
var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href');e.preventDefault();
if(h.charAt(0)==='#'){var t=document.getElementById(h.slice(1))||document.getElementsByName(h.slice(1))[0];if(t)t.scrollIntoView();}
else if(/^https?:/i.test(h))window.open(h,'_blank','noopener');});<\/script>`;
// Box model view (?boxmodel=1, or ?inspect=<selector> to pin one element; or the Box model button): like the browser's
// developer tools, it draws margin (orange), border (yellow), padding (green) and content (blue) over the element under
// the pointer, with its sizes. Drawn on top of the page, so the layout does not change (unlike Boxes).
const INSPECT = (pin) => `<script>(function(){var pin=${JSON.stringify(pin || '')};var L;
function px(v){return parseFloat(v)||0}
function draw(el){if(L)L.remove();if(!el||el===document.body||el===document.documentElement)return;var r=el.getBoundingClientRect(),cs=getComputedStyle(el);
var x=r.left+scrollX,y=r.top+scrollY,m=[px(cs.marginTop),px(cs.marginRight),px(cs.marginBottom),px(cs.marginLeft)],b=[px(cs.borderTopWidth),px(cs.borderRightWidth),px(cs.borderBottomWidth),px(cs.borderLeftWidth)],p=[px(cs.paddingTop),px(cs.paddingRight),px(cs.paddingBottom),px(cs.paddingLeft)];
L=document.createElement('div');L.setAttribute('data-wp-inspect','');L.style.cssText='position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;z-index:2147483647';
function box(l,t,w,h,c){var d=document.createElement('div');d.style.cssText='position:absolute;left:'+l+'px;top:'+t+'px;width:'+Math.max(0,w)+'px;height:'+Math.max(0,h)+'px;background:'+c;L.appendChild(d)}
box(x-m[3],y-m[0],r.width+m[1]+m[3],r.height+m[0]+m[2],'rgba(246,178,107,.38)');box(x,y,r.width,r.height,'rgba(255,214,102,.5)');
box(x+b[3],y+b[0],r.width-b[1]-b[3],r.height-b[0]-b[2],'rgba(147,196,125,.38)');box(x+b[3]+p[3],y+b[0]+p[0],r.width-b[1]-b[3]-p[1]-p[3],r.height-b[0]-b[2]-p[0]-p[2],'rgba(111,168,220,.32)');
var t=document.createElement('div'),n=function(a){return a[0]===a[1]&&a[1]===a[2]&&a[2]===a[3]?String(Math.round(a[0])):a.map(Math.round).join(' ')};
t.textContent=el.tagName.toLowerCase()+(el.className&&typeof el.className==='string'?'.'+el.className.trim().split(/\s+/).join('.'):'')+'  '+Math.round(r.width)+' × '+Math.round(r.height)+'   margin '+n(m)+' · border '+n(b)+' · padding '+n(p);
t.style.cssText='position:absolute;left:'+Math.max(0,x-m[3])+'px;top:'+Math.max(0,y-m[0]-24)+'px;font:600 12px/1.6 ui-monospace,Menlo,Consolas,monospace;background:#1d2430;color:#fff;padding:1px 7px;border-radius:4px;white-space:nowrap';
L.appendChild(t);document.documentElement.appendChild(L)}
var last=null;function show(el){last=el;requestAnimationFrame(function(){draw(el)})}
document.addEventListener('mousemove',function(e){if(pin)return;var t=document.elementFromPoint(e.clientX,e.clientY);if(t&&t!==last&&!t.closest('[data-wp-inspect]'))show(t)});
window.addEventListener('load',function(){var el=pin&&document.querySelector(pin);if(el)show(el)});window.addEventListener('resize',function(){if(last)show(last)})})()<\/script>`;
let boxmodel = params.get('boxmodel') === '1' || !!params.get('inspect');
const pin = params.get('inspect') || '';
let boxes = params.get('boxes') === '1' && !boxmodel;
// ?zoom=1.6 enlarges the code and the preview, for recorded clips (text stays readable at video size).
const zoom = Math.min(3, Math.max(1, Number(params.get('zoom')) || 1));
const ZOOM = zoom > 1 ? `<style>html{zoom:${zoom}}</style>` : '';
if (zoom > 1) codeEl.style.fontSize = `${Math.round(14 * zoom)}px`;
const boxesBtn = $('boxes');
const showBoxes = () => { boxesBtn.setAttribute('aria-pressed', String(boxes)); boxesBtn.textContent = boxes ? 'Boxes on' : 'Boxes'; };
const boxmodelBtn = $('boxmodel');
const showBoxmodel = () => { boxmodelBtn.setAttribute('aria-pressed', String(boxmodel)); boxmodelBtn.textContent = boxmodel ? 'Box model on' : 'Box model'; };
// The two views are never on together: Boxes changes the layout, Box model measures it.
boxesBtn.addEventListener('click', () => { boxes = !boxes; if (boxes) boxmodel = false; showBoxes(); showBoxmodel(); render(); });
boxmodelBtn.addEventListener('click', () => { boxmodel = !boxmodel; if (boxmodel) boxes = false; showBoxes(); showBoxmodel(); render(); });
showBoxes(); showBoxmodel();

function render() {
  const html = codeEl.value;
  // Injected before the student's code (after a <!DOCTYPE> if there is one): appended at the end, a half-typed tag
// such as "<stro" would swallow it. The Boxes script waits for the page to load.
  const extra = PAGE + ZOOM + (boxes ? BOXES : '') + (boxmodel ? INSPECT(pin) : '');
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
