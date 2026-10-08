// Lesson page rendering shared by the Node build and the in-browser /create/ preview.
// Pure: Marked and highlightCode are injected; no fs, no DOM.
import { unlockKind, evalRules } from './lesson-core.mjs';
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const titleCase = (s) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const STAGE_INFO = {
  predict: ['Predict', 'Read the code and say what it will do before you run anything.'],
  run: ['Run', 'Run it and compare the result with your prediction.'],
  investigate: ['Investigate', 'Trace how each line of code connects to what you see.'],
  modify: ['Modify', 'Change the code on purpose and check the result.'],
  make: ['Make', 'Build something new using what you have learned.'],
  info: ['Info', ''],
};
export const STAGE_PREFIX = /^(Predict|Run|Investigate|Modify|Make|Info):\s*/i;


export function codeBlock(highlightCode, src, lang, label) {
  return `<div class="code">${label ? `<div class="code-head"><span>${esc(label)}</span><button type="button" class="copy">Copy</button></div>` : ''}<pre><code>${highlightCode(src, lang)}</code></pre></div>`;
}

export const CSS = `
:root{--bg:#fbfaf8;--ink:#1d2430;--muted:#5d6978;--card:#fff;--line:#e4e1da;--accent:#c2570a;--code:#141a22;--codeink:#e6edf3;
--kw:#ff7b72;--str:#a5d6ff;--fn:#d2a8ff;--com:#7f8fa1;--num:#79c0ff;
--predict:#8a5cf6;--run:#16a05d;--investigate:#2b7de9;--modify:#c2570a;--make:#d63384;--info:#5d6978}
@media(prefers-color-scheme:dark){:root{--bg:#0f141a;--ink:#e6edf3;--muted:#9aa7b6;--card:#161d26;--line:#26303c;--accent:#ff9d3d;--code:#0b0f14;
--predict:#b794ff;--run:#4ade80;--investigate:#6cb6ff;--modify:#ff9d3d;--make:#ff8fc0}}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:820px;margin:0 auto;padding:0 20px 80px}
header.top{padding:44px 0 18px}header.top .crumb{font-size:14px;color:var(--muted);text-decoration:none}
h1{font-size:2.1rem;line-height:1.2;margin:.3em 0 .2em}.by{margin:-.6em 0 1em;color:var(--muted);font-size:14px}.lede{color:var(--muted);font-size:1.1rem;margin:0 0 1em}
nav.steps{display:flex;flex-wrap:nowrap;overflow-x:auto;gap:8px;margin:18px 0 8px;position:sticky;top:var(--cb,0px);z-index:9;padding:10px 0;background:var(--bg);border-bottom:1px solid var(--line);scrollbar-width:thin}
nav.steps a{flex:none;white-space:nowrap}
nav.steps a.here{border-color:var(--c);box-shadow:inset 0 0 0 1px var(--c)}
section.step{scroll-margin-top:calc(var(--cb,0px) + 64px)}
.coursebar{position:sticky;top:0;z-index:11;display:flex;align-items:center;justify-content:space-between;gap:8px;height:46px;background:var(--bg);border-bottom:1px solid var(--line)}
.coursebar a,.cb-toggle{font:inherit;font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;background:none;border:0;cursor:pointer;padding:6px 8px;border-radius:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:34vw}
.coursebar a:hover,.cb-toggle:hover{background:var(--card)}
.cb-prev,.cb-next{flex:0 1 auto;min-width:34px}.cb-next{text-align:right}
.cb-mid{position:relative;flex:1;text-align:center}.cb-toggle{max-width:100%}
.cb-menu{position:absolute;left:50%;transform:translateX(-50%);top:42px;width:min(92vw,440px);background:var(--card);border:1px solid var(--line);border-radius:12px;padding:8px;box-shadow:0 8px 28px rgba(0,0,0,.18);text-align:left}
.cb-menu[hidden]{display:none}.cb-menu ul{list-style:none;margin:0;padding:0}
.cb-menu li a{display:flex;gap:8px;align-items:center;max-width:none;white-space:normal;font-weight:500}.cb-menu li a[aria-current]{font-weight:700;background:var(--bg)}
.cb-menu .tick{flex:none;width:18px;height:18px;border-radius:50%;border:2px solid var(--line);display:inline-block}.cb-menu .tick.on{background:var(--run);border-color:var(--run)}
.cb-menu .cb-tools{display:flex;flex-wrap:wrap;gap:4px;border-top:1px solid var(--line);margin-top:6px;padding-top:6px}
@media(max-width:560px){.cb-prev span,.cb-next span{display:none}}
.nextcard{display:block;margin:34px 0 0;padding:18px 22px;border:1px solid var(--line);border-radius:14px;background:var(--card);color:var(--ink);text-decoration:none}
.nextcard small{display:block;color:var(--muted);font-size:13px;text-transform:uppercase;letter-spacing:.04em}.nextcard b{display:block;font-size:1.15rem}.nextcard span{color:var(--muted);font-size:15px}
.nextcard:hover{border-color:var(--accent)}
.rules{list-style:none;margin:6px 0 0;padding:0}.rules li{display:flex;gap:8px;align-items:center;margin:3px 0}.rules li::before{content:"";width:16px;height:16px;border-radius:50%;border:2px solid var(--line);flex:none}.rules li.ok::before{background:var(--run);border-color:var(--run)}

nav.steps a{font-size:13px;font-weight:600;text-decoration:none;color:var(--ink);border:1px solid var(--line);background:var(--card);padding:5px 11px;border-radius:99px}
nav.steps a i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px;background:var(--c)}
section.step{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px 28px;margin:26px 0;border-top:4px solid var(--c)}
section.step h2{font-size:1.4rem;line-height:1.3;margin:.15em 0 .5em}
.chip{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--c)}
.chip small{font-weight:500;letter-spacing:0;text-transform:none;color:var(--muted);margin-left:8px;font-size:13px}
.code{margin:16px 0;border-radius:10px;overflow:hidden;background:var(--code)}
.code-head{display:flex;justify-content:space-between;align-items:center;padding:7px 14px;font:12px ui-monospace,Menlo,Consolas,monospace;color:#8b98a8;border-bottom:1px solid #26303c}
.code-head button{font:inherit;background:none;border:1px solid #3a4756;color:#c3cdd9;border-radius:6px;padding:2px 9px;cursor:pointer}
.code pre{margin:0;padding:14px 16px;overflow-x:auto;color:var(--codeink);font:14px/1.55 ui-monospace,Menlo,Consolas,monospace}
.kw{color:var(--kw)}.str{color:var(--str)}.fn{color:var(--fn)}.com{color:var(--com)}.num{color:var(--num)}
p code,li code{background:color-mix(in srgb,var(--ink) 9%,transparent);padding:1px 6px;border-radius:5px;font-size:.9em}
figure.clip{margin:18px 0}figure.clip video{width:100%;border-radius:10px;border:1px solid var(--line);display:block;background:#0b0f14}
figure.clip figcaption{font-size:14px;color:var(--muted);margin-top:6px}
.placeholder{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;aspect-ratio:16/9;border:2px dashed var(--line);border-radius:10px;color:var(--muted);text-align:center;font-size:15px;padding:12px}
.placeholder b{color:var(--ink)}
.try{margin:20px 0 6px;border:1px solid var(--line);border-radius:12px;overflow:hidden}
.try-head{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:9px 14px;font-size:14px;background:color-mix(in srgb,var(--c) 10%,transparent);border-bottom:1px solid var(--line)}
.try-head span{color:var(--muted)}
.try iframe{display:block;width:100%;border:0;background:var(--card)}
details.reveal{margin:16px 0;border:1px solid var(--line);border-radius:10px;padding:0 16px}
details.hints{margin:12px 0;border:1px solid var(--line);border-radius:10px;padding:0 16px}
details.hints summary{cursor:pointer;font-weight:600;padding:10px 0}
details.hints[open] summary{border-bottom:1px solid var(--line);margin-bottom:6px}
details.teachers{margin:28px 0 0;border:1px solid var(--line);border-radius:8px;padding:0 16px}
details.teachers summary{cursor:pointer;font-weight:600;padding:12px 0}
.hook{margin:0 0 16px;padding:8px 14px;border-left:4px solid var(--c,#2563eb);background:rgba(37,99,235,.07);border-radius:4px}
details.reveal summary{cursor:pointer;font-weight:600;padding:12px 0;color:var(--c)}
details.reveal[open] summary{border-bottom:1px solid var(--line);margin-bottom:6px}
.legend{display:grid;gap:6px;margin:10px 0 0;padding:0;list-style:none;font-size:15px;color:var(--muted)}
.legend b{color:var(--c)}
ul.lessons{list-style:none;padding:0;display:grid;gap:14px}ul.lessons a{display:block;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px 22px;text-decoration:none;color:inherit}
ul.lessons a:hover{border-color:var(--accent)}ul.lessons b{display:block;font-size:1.15rem}ul.lessons span{color:var(--muted);font-size:15px}
.check{margin:20px 0 4px;padding:14px 16px;border:1px dashed var(--c);border-radius:10px;background:color-mix(in srgb,var(--c) 6%,transparent)}
.check legend,.check .check-q{font-weight:600;margin:0 0 8px;padding:0}.check fieldset{border:0;margin:0;padding:0}
.check label{display:flex;gap:10px;align-items:flex-start;margin:6px 0;cursor:pointer}.check input{margin-top:.35em;accent-color:var(--c)}
.check button{font:inherit;font-size:14px;margin-top:6px;padding:5px 14px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}
.check .msg{margin:8px 0 0;font-size:14px;color:var(--muted)}.check .msg.ok{color:var(--run);font-weight:600}.check .msg.no{color:var(--make)}
.check.done{border-style:solid}
.ref-group{margin:28px 0 8px;font-size:1.15rem}.ref-item{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1.4fr);gap:6px 18px;align-items:start;padding:10px 0;border-top:1px solid var(--line)}
.ref-item .code{margin:0}.ref-item .ref-id{font-size:12px;margin-top:2px}.ref-item p{margin:0;color:var(--muted);font-size:15px}.ref-item b{display:block;color:var(--ink);font-size:15px;margin-bottom:2px}
@media(max-width:640px){.ref-item{grid-template-columns:1fr}}
@media print{body{background:#fff;color:#000}.ref-item{break-inside:avoid}}
footer{margin-top:50px;color:var(--muted);font-size:14px}
`;

export const JS = `var evalRules=${evalRules.toString()};
(function(){var t=document.querySelector('.cb-toggle'),m=document.getElementById('cb-menu');if(!t||!m)return;
t.addEventListener('click',function(){var o=m.hidden;m.hidden=!o;t.setAttribute('aria-expanded',String(o))});
document.addEventListener('click',function(e){if(!m.hidden&&!e.target.closest('.cb-mid')){m.hidden=true;t.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){m.hidden=true;t.setAttribute('aria-expanded','false');t.focus()}});
var d=(function(){try{return JSON.parse(localStorage.getItem('wp-progress'))||{}}catch(e){return {}}})().done||{};
[].forEach.call(m.querySelectorAll('li a'),function(a){var ks=(a.dataset.checks||'').split('|').filter(Boolean);
if(ks.length&&ks.every(function(k){return d[k]}))a.querySelector('.tick').classList.add('on')});
var h=document.querySelector('h1');try{localStorage.setItem('wp-last-lesson',JSON.stringify({href:location.pathname,title:h?h.textContent:document.title}))}catch(e){}})();
(function(){var links=[].slice.call(document.querySelectorAll('nav.steps a'));if(!links.length||!window.IntersectionObserver)return;
var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
var io=new IntersectionObserver(function(){var cur=0;secs.forEach(function(el,i){if(el&&el.getBoundingClientRect().top<window.innerHeight*0.4)cur=i});
links.forEach(function(a,i){a.classList.toggle('here',i===cur);if(i===cur)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')})},{threshold:[0,0.1,0.5,1]});
secs.forEach(function(el){if(el)io.observe(el)});window.addEventListener('scroll',function(){io.takeRecords()},{passive:true})})();
document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){
var t=b.closest('.code').querySelector('code').innerText;navigator.clipboard&&navigator.clipboard.writeText(t).then(function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1200)})})});
(function(){
var KEY='wp-progress';
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
function save(s){try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){}}
var ov=new URLSearchParams(location.search).get('unlock');
if(ov){var s0=load();s0.all=ov==='all';save(s0)}
document.querySelectorAll('.check').forEach(function(box){
var key=box.dataset.key,kind=box.dataset.kind,ids=(box.dataset.unlocks||'').split(',').filter(Boolean),names=(box.dataset.names||'').split('|');
var msg=box.querySelector('.msg');
function pass(){
var s=load();s.done=s.done||{};s.unlocked=s.unlocked||{};s.done[key]=true;
ids.forEach(function(id){s.unlocked[kind+':'+id]=true});save(s);show(true)}
function show(fresh){
box.classList.add('done');
if(ids.length){msg.className='msg ok';msg.textContent=(fresh?'Unlocked: ':'Unlocked: ')+names.join(', ')+'. Find '+(names.length>1?'them':'it')+' under Snippets in the playground.'}
else{msg.className='msg ok';msg.textContent='Got it.'}}
if((load().done||{})[key])show(false);
if(box.dataset.type==='code'){var rules=JSON.parse(box.dataset.rules),ul=box.querySelector('.rules');
function paint(res){ul.replaceChildren();res.forEach(function(r){var li=document.createElement('li');li.textContent=r.label;if(r.ok)li.className='ok';ul.appendChild(li)})}
var done0=(load().done||{})[key];paint(evalRules(rules,'').map(function(r){return {label:r.label,ok:!!done0}}));
window.addEventListener('message',function(e){var m=e.data;if(e.origin!==location.origin||!m||m.wp!=='run'||m.id!==key)return;
var res=evalRules(rules,m.code||'');paint(res);
if(res.every(function(r){return r.ok})&&m.status==='done'){pass()}
else{msg.className='msg';msg.textContent=m.status==='done'?'Not quite yet. Change your code, then run it again.':'Fix the error, then run it again.'}})}
var cb=box.querySelector('input[type=checkbox]');
if(cb){if((load().done||{})[key])cb.checked=true;cb.addEventListener('change',function(){if(cb.checked)pass()})}
var go=box.querySelector('button');
if(go){go.addEventListener('click',function(){
var pick=box.querySelector('input[type=radio]:checked');
if(!pick){msg.className='msg no';msg.textContent='Choose an answer first.';return}
if(Number(pick.value)===Number(box.dataset.answer)){pass();if(box.dataset.explain)msg.textContent=box.dataset.explain+(ids.length?' ':'')+msg.textContent}
else{msg.className='msg no';msg.textContent='Not quite. Look at the code again and try another answer.'}})}
});
})();`;

export const page = (title, body, scripts = '') => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><style>${CSS}</style></head><body><div class="wrap">${body}</div><script>${JS}</script>${scripts}</body></html>`;


/** The "got it?" box under a step: a tick (reflect) or a short question. Passing it unlocks snippets. */
export function checkHtml(lesson, step, names = {}) {
  const k = step.config.check;
  if (!k) return '';
  const kind = unlockKind(lesson, step);
  const ids = step.config.unlocks || [];
  const label = (id) => names[kind]?.[id] || id.replace(/-/g, ' ');
  const base = `data-key="${esc(`${lesson.slug}/${step.id}`)}" data-kind="${kind}" data-unlocks="${esc(ids.join(','))}" data-names="${esc(ids.map(label).join('|'))}"`;
  if (k.type === 'reflect') {
    return `<div class="check" ${base}><label><input type="checkbox"><span>${esc(k.text)}</span></label><p class="msg" aria-live="polite"></p></div>`;
  }
  if (k.type === 'code') {
    return `<div class="check" ${base} data-type="code" data-rules="${esc(JSON.stringify(k.rules))}"><p class="check-q">${esc(k.text)}</p><ul class="rules" aria-label="What your code needs"></ul><p class="msg" aria-live="polite">Run your program. This ticks when your code does all of the above.</p></div>`;
  }
  const name = `q-${lesson.slug}-${step.id}`.replace(/[^a-z0-9-]/gi, '-');
  return `<div class="check" ${base} data-answer="${k.answer}" data-explain="${esc(k.explain || '')}"><fieldset><legend>${esc(k.q)}</legend>` +
    k.options.map((o, i) => `<label><input type="radio" name="${name}" value="${i}"><span>${esc(o)}</span></label>`).join('') +
    `</fieldset><button type="button">Check answer</button><p class="msg" aria-live="polite"></p></div>`;
}

/**
 * The complete lesson page.
 * deps: { Marked, highlightCode, snippet(ref), clipHtml(step), tryHtml(step), crumb: {href, title}, source }
 */
export function lessonPageHtml(lesson, deps) {
  const { Marked, highlightCode, snippet, clipHtml, tryHtml, crumb, source, snippetNames, course = null, siteRoot = '' } = deps;
  const md = new Marked({
    renderer: { code({ text, lang }) { return codeBlock(highlightCode, text.replace(/\n$/, '') + '\n', lang || lesson.language, ''); } },
  });
  // "Predict: what will `greet` return?" -> "What will <code>greet</code> return?"
  const heading = (t) => {
    const s = t.replace(STAGE_PREFIX, '');
    return md.parseInline(s.charAt(0).toUpperCase() + s.slice(1));
  };
  const stagesUsed = [...new Set(lesson.steps.map((s) => s.config.stage).filter((s) => s !== 'info'))];
  const nav = lesson.steps.map((s) => `<a href="#${s.id}" style="--c:var(--${s.config.stage})"><i></i>${heading(s.title)}</a>`).join('');
  const legend = stagesUsed.filter((k) => STAGE_INFO[k]).map((k) => `<li style="--c:var(--${k})"><b>${STAGE_INFO[k][0]}</b>: ${esc(STAGE_INFO[k][1])}</li>`).join('');

  const steps = lesson.steps.map((s) => {
    const c = s.config;
    const [label, hint] = STAGE_INFO[c.stage] || STAGE_INFO.info;
    let showCode = '';
    if (c.code) {
      try { showCode = codeBlock(highlightCode, snippet(c.code), lesson.language, c.code.split('#')[0]); }
      catch (e) { showCode = `<div class="placeholder"><b>${esc(e.message)}</b></div>`; }
    }
    const clip = clipHtml(s);
    const body = md.parse(s.body);
    // Predict steps: code first, then the questions, then the hidden reveal. Others: text, code, clip.
    // Hints are nudges, one click each: "Need a hint?", then "Another hint".
    const hs = c.hint === undefined ? [] : [].concat(c.hint);
    const hints = hs.map((h, i) => `<details class="hints"><summary>${i ? 'Another hint' : 'Need a hint?'}</summary>${md.parse(h)}</details>`).join('');
    // Predict: code, questions, hidden reveal. A hidden clip on a task comes after the attempt: text, code, try, hints, clip.
    const inner = c.stage === 'predict' ? `${showCode}${body}${clip}${tryHtml(s)}${hints}${checkHtml(lesson, s, snippetNames)}`
      : c.reveal ? `${body}${showCode}${tryHtml(s)}${hints}${clip}${checkHtml(lesson, s, snippetNames)}`
      : `${body}${showCode}${clip}${tryHtml(s)}${hints}${checkHtml(lesson, s, snippetNames)}`;
    return `<section class="step" id="${s.id}" style="--c:var(--${STAGE_INFO[c.stage] ? c.stage : 'info'})"><div class="chip">${esc(label)}<small>${esc(hint)}</small></div><h2>${heading(s.title)}</h2>${inner}</section>`;
  }).join('');

  // Course bar (prev / where am I / next) and the card at the end. course: { index, total, prev, next, list, pathHref, pathTitle, playground }
  const lab = (l) => `${l.order != null ? `${l.order}. ` : ''}${l.title}`;
  const cb = !course ? '' : `<div class="coursebar" role="navigation" aria-label="Lesson navigation"><style>:root{--cb:46px}</style>` +
    (course.prev ? `<a class="cb-prev" href="${esc(course.prev.href)}" title="${esc(lab(course.prev))}">‹ <span>${esc(lab(course.prev))}</span></a>` : '<span class="cb-prev"></span>') +
    `<div class="cb-mid"><button type="button" class="cb-toggle" aria-expanded="false" aria-controls="cb-menu">${course.index} of ${course.total} · ${esc(lesson.title)} ▾</button>` +
    `<div class="cb-menu" id="cb-menu" hidden><ul>${course.list.map((l) => `<li><a href="${esc(l.href)}" data-checks="${esc(l.checks.join('|'))}"${l.current ? ' aria-current="page"' : ''}><i class="tick"></i><span>${esc(lab(l))}</span></a></li>`).join('')}</ul>` +
    `<div class="cb-tools"><a href="${esc(course.pathHref)}">All ${esc(course.pathTitle)} lessons</a>${course.playground ? `<a href="${esc(course.playground)}">Playground</a>` : ''}<a href="#" data-progress-open>My progress</a></div></div></div>` +
    (course.next ? `<a class="cb-next" href="${esc(course.next.href)}" title="${esc(lab(course.next))}"><span>${esc(lab(course.next))}</span> ›</a>` : '<span class="cb-next"></span>') + `</div>`;
  const nextCard = !course ? '' : course.next
    ? `<a class="nextcard" href="${esc(course.next.href)}"><small>Next lesson</small><b>${esc(lab(course.next))}</b>${course.next.summary ? `<span>${esc(course.next.summary)}</span>` : ''}</a>`
    : `<a class="nextcard" href="${esc(course.pathHref)}"><small>You reached the end</small><b>Back to ${esc(course.pathTitle)}</b></a>`;

  return page(lesson.title, `
${cb}<header class="top">${crumb ? `<a class="crumb" href="${esc(crumb.href)}">← ${esc(crumb.title)}</a>` : ''}<h1>${esc(lesson.title)}</h1>${lesson.summary ? `<p class="lede">${esc(lesson.summary)}</p>` : ''}${lesson.author ? `<p class="by">By ${esc(lesson.author)}</p>` : ''}</header>
${lesson.hook ? `<p class="hook">${esc(lesson.hook)}</p>` : ''}
${md.parse(lesson.intro)}
<ul class="legend">${legend}</ul>
<nav class="steps">${nav}</nav>
${steps}
${lesson.teachers ? `<details class="teachers"><summary>For teachers</summary>${md.parse(lesson.teachers)}</details>` : ''}
${nextCard}
${source ? `<footer>Source: <code>${esc(source)}</code></footer>` : ''}`, siteRoot ? `<script src="${esc(siteRoot)}progress.js" data-root="${esc(siteRoot)}" defer></script>` : '');
}

export const PLAYGROUNDS = {
  turtle: { dir: '_playground', title: 'Python turtle playground' },
  html: { dir: '_playground-html', title: 'HTML and CSS playground' },
};

/** "Try it yourself" iframe. siteRoot is the URL of the site root (with trailing slash), e.g. "../../../". */
export function tryEmbed(lesson, step, starter, siteRoot, locks = '', mods = null) {
  const t = step.config.try;
  const pg = PLAYGROUNDS[t.playground || 'turtle'] || PLAYGROUNDS.turtle;
  const q = new URLSearchParams({ id: `${lesson.slug}/${step.id}`, code: starter });
  if (t.extent) q.set('extent', t.extent);
  if (t.speed) q.set('speed', t.speed);
  // Modules the playground offers: ?use=shapes,house, plus ?mods={name: source} for ones that live in the lesson
  if (mods && pg === PLAYGROUNDS.turtle && mods.use.length) { q.set('use', mods.use.join(',')); if (Object.keys(mods.local).length) q.set('mods', JSON.stringify(mods.local)); }
  if (locks) q.set('locks', locks); // the create page's preview: "id~Step title|id~Step title"
  return `<div class="try"><div class="try-head"><b>Try it yourself</b><span>Your edits are saved in this browser.</span></div>` +
    `<iframe title="${esc(pg.title)}" loading="lazy" style="height:${Number(t.height) || 480}px" src="${esc(`${siteRoot}${pg.dir}/index.html?${q.toString()}`)}"></iframe></div>`;
}
