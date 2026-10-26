// How coding ideas build (roadmap/code.md › How coding ideas build): for each core coding idea, the first lesson
// in each pathway that introduces it (read from lessons' `introduces:` through `sameIdea`), drawn as a map of what
// each idea needs first and a table by band with plain words and a tiny example per tool. Pure, so a test or
// another page can use it; build-site writes it to /teach/<subject>/ideas/.
import { CORE_IDEAS, sameIdea } from './concepts-core.mjs';
import { BANDS, IDEAS, BLOCK_COLOURS, exampleFor, unlocks } from './ideas-map.mjs';

/** pathways: [{ id, title, courses: [{ path }] }] from a subject's index.md; lessons: parsed lessons with slug,
 *  title, order, language, introduces. Returns rows of { id, label, cells: [{ lesson, course } | null] }. */
export function ideasTable(pathways, lessons, courseTitle = (p) => p) {
  const byCourse = new Map();
  for (const l of lessons) { const c = l.slug.split('/').slice(0, -1).join('/'); if (!byCourse.has(c)) byCourse.set(c, []); byCourse.get(c).push(l); }
  for (const ls of byCourse.values()) ls.sort((a, b) => (Number(a.order) || 999) - (Number(b.order) || 999) || a.slug.localeCompare(b.slug));
  const first = pathways.map((pw) => {
    const m = new Map();
    for (const c of pw.courses || []) for (const l of byCourse.get(c.path) || []) {
      if (!m.has('sequence')) m.set('sequence', { lesson: l, course: courseTitle(c.path) });
      for (const id of l.introduces || []) {
        const k = sameIdea(l.language, id);
        if (!m.has(k)) m.set(k, { lesson: l, course: courseTitle(c.path) });
      }
    }
    return m;
  });
  return CORE_IDEAS.map((x) => ({ ...x, cells: first.map((m) => m.get(x.id) || (IDEAS[x.id]?.fallback && m.get(IDEAS[x.id].fallback)) || null) }));
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shortLabel = (label) => label.replace(/\s*\(.*\)$/, '');

function blocksHtml(lines) {
  return `<div class="wpi-blocks">${lines.map((line) => {
    const depth = (line.match(/^ */)[0].length / 2) | 0, m = line.trim().match(/^(\w+):\s*(.*)$/);
    return `<div class="wpi-blk" style="--d:${depth};--c:${BLOCK_COLOURS[m[1]]}">${esc(m[2])}</div>`;
  }).join('')}</div>`;
}
const exampleHtml = (ex) => !ex ? '' : ex.kind === 'blocks' ? blocksHtml(ex.lines) : `<pre class="wpi-code"><code>${esc(ex.code)}</code></pre>`;

/** The page body (header, map, table, notes) with its own style and script. lessonHref(slug) gives a lesson's link. */
export function ideasPageHtml({ title, pathways, rows, lessonHref, crumbHref = '../../' }) {
  const byId = new Map(rows.map((r) => [r.id, r]));
  const nameOf = (id) => shortLabel(byId.get(id)?.label || id);
  const data = Object.fromEntries(rows.map((r) => [r.id, { label: shortLabel(r.label), needs: IDEAS[r.id].needs, unlocks: unlocks(r.id), plain: IDEAS[r.id].plain, hinge: !!IDEAS[r.id].hinge }]));

  const map = `<section class="wpi-map" aria-label="Map of how the ideas build"><div class="wpi-mapinner">`
    + BANDS.map((b) => {
      const ids = rows.filter((r) => IDEAS[r.id].band === b.id).map((r) => r.id);
      return `<div class="wpi-band${b.toolkit ? ' wpi-tool' : ''}"><a class="wpi-bandname" href="#band-${esc(b.id)}">${esc(b.title)}</a><div class="wpi-nodes">${ids.map((id) =>
        `<button type="button" class="wpi-node${IDEAS[id].hinge ? ' wpi-hinge' : ''}" data-id="${esc(id)}">${esc(nameOf(id))}</button>`).join('')}</div></div>`;
    }).join('')
    + `<svg class="wpi-lines" aria-hidden="true"></svg></div>`
    + `<p class="wpi-key"><span class="wpi-node wpi-hinge wpi-keychip">Bold border</span> a hinge idea: give it extra time and check it's solid before moving on. Lines join an idea to what it needs first (the one above it; on a phone, tap an idea to see its lines). Everything builds on steps in order, so those lines are left out. The toolkit needs nothing and can come whenever a task needs it.</p>`
    + `<div class="wpi-pick" aria-live="polite"><p class="muted">Click an idea to see what it needs and what it leads to.</p></div></section>`;

  const sections = BANDS.map((b) => {
    const rs = rows.filter((r) => IDEAS[r.id].band === b.id);
    if (!rs.length) return '';
    return `<section class="wpi-sec" id="band-${esc(b.id)}"><h3>${esc(b.title)}</h3><p class="muted">${esc(b.intro || '')}</p>`
      + `<div class="wpi-wrap"><table class="wpi-table"><thead><tr><th>Idea</th>${pathways.map((pw) => `<th>${esc(pw.title)}</th>`).join('')}</tr></thead><tbody>`
      + rs.map((r) => {
        const x = IDEAS[r.id];
        const needs = x.needs.length ? `<p class="wpi-needs">Needs first: ${x.needs.map((n) => `<a href="#idea-${esc(n)}">${esc(nameOf(n))}</a>`).join(', ')}</p>` : '';
        return `<tr id="idea-${esc(r.id)}"><th scope="row"><b>${esc(r.label)}</b>${x.hinge ? ' <span class="wpi-badge">hinge</span>' : ''}<p>${esc(x.plain)}</p>${x.note ? `<p class="muted">${esc(x.note)}</p>` : ''}${needs}</th>`
          + pathways.map((pw, k) => {
            const c = r.cells[k], ex = exampleFor(r.id, pw.id);
            const lesson = c ? `<a href="${esc(lessonHref(c.lesson.slug))}">${esc(c.lesson.title)}</a><span class="muted"> · ${esc(c.course)}</span>` : '<span class="muted">No lesson teaches this yet</span>';
            return `<td data-path="${esc(pw.title)}">${exampleHtml(ex)}<p class="wpi-lesson">${lesson}</p></td>`;
          }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></section>';
  }).join('');
  const jump = `<nav class="wpi-jump" aria-label="Groups of ideas">${BANDS.map((b) => `<a href="#band-${esc(b.id)}">${esc(b.title.replace(/:.*/, ''))}</a>`).join('')}</nav>`;
  const body = `<header class="top"><a class="crumb" href="${esc(crumbHref)}">← Teacher guides</a><h1>${esc(title)}</h1>`
    + `<p class="lede">Every pathway teaches the same few coding ideas, each in its own order and its own tool. Some ideas must come before others; the rest can come in any order. This page shows which is which, what each idea looks like in each tool, and where each pathway first teaches it.</p></header>`
    + map
    + `<section class="wpi-why"><h2>Why these ideas matter, even if coding isn't your strength</h2>`
    + `<p>You don't need to be a programmer to teach or use these ideas. They are about what a program does, not the exact words you type: the same idea looks different in blocks, Python and JavaScript, and the plain words below are enough to talk about it.</p>`
    + `<p>The ideas also matter when an AI tool helps write some of the code, as it increasingly does. Someone still has to say precisely what the program should do, check that it does it, and say what to change when it doesn't. That takes the ideas on this page, the hinge ideas most of all: a value that changes as the program runs, the loop counter, and the yes-or-no questions where the edge cases hide (more than, or more than or equal to?). Typing the code by hand may matter less than it did; knowing what each part does, and predicting what it will do, matters as much as ever.</p></section>`
    + `<h2>The ideas, in plain words</h2><p>Grouped as on the map. Each row says what the idea means, then how it looks in each pathway and the lesson where that pathway first teaches it. Pathways are options, not a sequence: a gap means that pathway teaches the idea later or leaves it out.</p>`
    + jump + sections
    + `<p class="muted">Read from each lesson's <code>introduces:</code> tags. MakeCode blocks are drawn here as plain shapes in MakeCode's colours, not screenshots.</p>`;

  const css = `<style>
.wpi-map{margin:12px 0 28px}
.wpi-mapinner{position:relative;display:flex;flex-direction:column;gap:18px;padding:4px 0}
.wpi-band{position:relative;z-index:1;display:flex;gap:12px;align-items:center}
.wpi-bandname{flex:0 0 150px;font-size:13px;color:var(--muted,#6b6b6b);text-align:right}
.wpi-nodes{display:flex;flex-wrap:wrap;gap:10px 14px}
.wpi-tool{margin-top:6px;padding-top:12px;border-top:1px dashed var(--line,#e4e1da)}
.wpi-node{font:inherit;font-size:14px;padding:6px 12px;border-radius:999px;border:1.5px solid var(--line,#cfcac0);background:var(--card,#fff);color:inherit;cursor:pointer;position:relative;z-index:2}
.wpi-node.wpi-hinge{border:3px solid #2f6f5e;font-weight:600}
.wpi-node:focus-visible{outline:3px solid var(--accent,#2f6f5e);outline-offset:2px}
.wpi-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible}
.wpi-lines path{fill:none;stroke:#bdb7ab;stroke-width:1.5}
.wpi-lines path.on-need{stroke:#c2570a;stroke-width:2.5}
.wpi-lines path.on-next{stroke:#2f6f5e;stroke-width:2.5}
.wpi-map.picked .wpi-node:not(.is-pick):not(.is-need):not(.is-next){color:var(--muted,#9a958c);border-color:var(--line,#e4e1da)}
.wpi-node.is-pick{background:#2f6f5e;color:#fff;border-color:#2f6f5e}
.wpi-node.is-need{border-color:#c2570a;box-shadow:0 0 0 2px #c2570a33}
.wpi-node.is-next{border-color:#2f6f5e;box-shadow:0 0 0 2px #2f6f5e33}
.wpi-map.picked .wpi-lines path:not(.on-need):not(.on-next){opacity:.2}
.wpi-key{font-size:14px;color:var(--muted,#6b6b6b);margin-top:14px}
.wpi-keychip{cursor:default;font-size:12px;padding:2px 8px;margin-right:4px}
.wpi-pick{margin-top:8px;padding:10px 14px;border-radius:8px;background:var(--card,#fff);border:1px solid var(--line,#e4e1da);min-height:3em}
.wpi-pick p{margin:4px 0}
.wpi-need-t{color:#c2570a;font-weight:600}.wpi-next-t{color:#2f6f5e;font-weight:600}
.wpi-wrap{overflow-x:auto}
.wpi-table{border-collapse:collapse;width:100%;font-size:15px}
.wpi-table th,.wpi-table td{border:1px solid var(--line,#e4e1da);padding:8px 10px;text-align:left;vertical-align:top}
.wpi-table thead th{background:var(--card,#fff)}
.wpi-table tbody th{font-weight:400;width:26%;min-width:210px}
.wpi-table tbody th p{margin:6px 0 0}
.wpi-why{margin:8px 0 24px;max-width:760px}.wpi-why p{margin:8px 0}
.wpi-sec{margin:22px 0 8px}.wpi-sec h3{margin:0 0 2px}.wpi-sec>p.muted{margin:0 0 8px}
.wpi-jump{display:flex;flex-wrap:wrap;gap:6px 14px;margin:8px 0 4px;font-size:14px}
a.wpi-bandname{text-decoration:none}a.wpi-bandname:hover{text-decoration:underline}
.wpi-table tr:target th,.wpi-table tr:target td{background:#2f6f5e14}
.wpi-badge{display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:1px 6px;border-radius:4px;background:#2f6f5e;color:#fff;vertical-align:2px}
.wpi-needs{font-size:13px}
.wpi-lesson{margin:6px 0 0;font-size:14px}
.wpi-code{margin:0;padding:6px 8px;font-size:13px;line-height:1.35;white-space:pre;overflow-x:auto;border-radius:6px;background:var(--code-bg,#f3f1ec)}
.wpi-blocks{display:flex;flex-direction:column;align-items:flex-start;gap:2px}
.wpi-blk{margin-left:calc(var(--d) * 16px);background:var(--c);color:#fff;font-size:13px;font-weight:600;padding:4px 10px;border-radius:4px;line-height:1.3;white-space:nowrap}
.wpi-table td{min-width:190px}
@media (max-width:720px){
  .wpi-map:not(.picked) .wpi-lines{display:none}
  .wpi-map.picked .wpi-lines path:not(.on-need):not(.on-next){display:none}
  .wpi-table td{min-width:0}
  .wpi-band{flex-direction:column;align-items:flex-start;gap:6px}
  .wpi-bandname{flex:none;text-align:left}
  .wpi-table thead{display:none}
  .wpi-table,.wpi-table tbody,.wpi-table tr,.wpi-table th,.wpi-table td{display:block;width:auto}
  .wpi-table tbody th{width:auto;border-bottom:none}
  .wpi-table tr{margin-bottom:12px}
  .wpi-table td{border-top:none}
  .wpi-table td::before{content:attr(data-path);display:block;font-size:12px;font-weight:700;color:var(--muted,#6b6b6b);margin-bottom:4px}
}
</style>`;

  const js = `<script>(function(){
var D=${JSON.stringify(data).replace(/</g, '\\u003c')};
var map=document.querySelector('.wpi-map'); if(!map) return;
var inner=map.querySelector('.wpi-mapinner'), svg=map.querySelector('.wpi-lines'), pick=map.querySelector('.wpi-pick');
var nodes={}; map.querySelectorAll('.wpi-node[data-id]').forEach(function(b){nodes[b.dataset.id]=b;});
function anc(id,s){(D[id].needs||[]).forEach(function(n){if(!s[n]){s[n]=1;anc(n,s);}});return s;}
function draw(){
  var r0=inner.getBoundingClientRect(), out='';
  Object.keys(D).forEach(function(id){(D[id].needs||[]).forEach(function(n){
    if(n==='sequence') return;
    var a=nodes[n], b=nodes[id]; if(!a||!b) return;
    var ra=a.getBoundingClientRect(), rb=b.getBoundingClientRect(), x1,y1,x2,y2,d;
    if(Math.abs(ra.top-rb.top)<4){ x1=ra.right-r0.left; y1=ra.top+ra.height/2-r0.top; x2=rb.left-r0.left; y2=rb.top+rb.height/2-r0.top;
      if(x2<x1||x2-x1>30){ x1=ra.left+ra.width/2-r0.left; y1=ra.top-r0.top; x2=rb.left+rb.width/2-r0.left; y2=rb.top-r0.top; d='M'+x1+','+y1+' C'+x1+','+(y1-22)+' '+x2+','+(y2-22)+' '+x2+','+y2; }
      else d='M'+x1+','+y1+' L'+x2+','+y2; }
    else { x1=ra.left+ra.width/2-r0.left; y1=ra.bottom-r0.top; x2=rb.left+rb.width/2-r0.left; y2=rb.top-r0.top; var m=(y2-y1)/2; d='M'+x1+','+y1+' C'+x1+','+(y1+m)+' '+x2+','+(y2-m)+' '+x2+','+y2; }
    out+='<path data-from="'+n+'" data-to="'+id+'" d="'+d+'"/>';
  });});
  svg.innerHTML=out; mark();
}
var current=null;
function mark(){
  map.classList.toggle('picked',!!current);
  var need=current?anc(current,{}):{}, next={}; if(current) D[current].unlocks.forEach(function(u){next[u]=1;});
  Object.keys(nodes).forEach(function(id){var b=nodes[id]; b.classList.toggle('is-pick',id===current); b.classList.toggle('is-need',!!need[id]); b.classList.toggle('is-next',!!next[id]); b.setAttribute('aria-pressed',id===current?'true':'false');});
  svg.querySelectorAll('path').forEach(function(p){var f=p.getAttribute('data-from'),t=p.getAttribute('data-to');
    p.classList.toggle('on-need',!!(current&&(t===current||need[t])&&(need[f]||f===current))); p.classList.toggle('on-next',!!(current&&f===current));});
}
function names(ids){return ids.map(function(i){return D[i].label;}).join(', ');}
function show(id){
  current=(current===id)?null:id; mark();
  if(!current){pick.innerHTML='<p class="muted">Click an idea to see what it needs and what it leads to.</p>';return;}
  var x=D[id], need=Object.keys(anc(id,{}));
  pick.innerHTML='<p><b>'+x.label+'</b>'+(x.hinge?' <span class="wpi-badge">hinge</span>':'')+': '+x.plain.replace(/</g,'&lt;')+'</p>'
    +'<p><span class="wpi-need-t">Needs first:</span> '+(x.needs.length?names(x.needs)+(need.length>x.needs.length?' (and what those need: '+names(need.filter(function(n){return x.needs.indexOf(n)<0;}))+')':''):'nothing')+'</p>'
    +'<p><span class="wpi-next-t">Leads to:</span> '+(x.unlocks.length?names(x.unlocks):'nothing on this map')+'</p>'
    +'<p><a href="#idea-'+id+'">How it looks in each pathway ↓</a></p>';
}
Object.keys(nodes).forEach(function(id){nodes[id].addEventListener('click',function(){show(id);});});
var t; window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(draw,100);});
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(draw);
draw();
})();</script>`;
  return css + body + js;
}
