// How coding ideas build (roadmap/code.md › How coding ideas build): for each core coding idea, the first lesson
// in each pathway that introduces it (read from lessons' `introduces:` through `sameIdea`), drawn as a map of what
// each idea needs first and a table by band with plain words and a tiny example per tool. Pure, so a test or
// another page can use it; build-site writes it to /teach/<subject>/ideas/.
import { CORE_IDEAS, sameIdea } from './concepts-core.mjs';
import { BANDS, IDEAS, BLOCK_COLOURS, PATHWAY_IDEAS, exampleFor, unlocks } from './ideas-map.mjs';
import { BAND_PICTURES } from './ideas-pictures.mjs';

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
const pathExample = (x) => x.blocks ? blocksHtml(x.blocks) : x.code ? `<pre class="wpi-code"><code>${esc(x.code.text)}</code></pre>` : '';

/** The page body (header, map, table, notes) with its own style and script. lessonHref(slug) gives a lesson's link. */
export function ideasPageHtml({ title, pathways, rows, lessonHref, lessonInfo = () => null, crumbHref = '../../' }) {
  const byId = new Map(rows.map((r) => [r.id, r]));
  const nameOf = (id) => shortLabel(byId.get(id)?.label || id);
  const data = Object.fromEntries(rows.map((r) => [r.id, { label: shortLabel(r.label), needs: IDEAS[r.id].needs, unlocks: unlocks(r.id), plain: IDEAS[r.id].plain, hinge: !!IDEAS[r.id].hinge }]));

  const map = `<section class="wpi-map" id="wpi-map" aria-label="Map of how the ideas build"><div class="wpi-mapinner">`
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
    return `<section class="wpi-sec" id="band-${esc(b.id)}"><h3>${esc(b.title)}</h3><div class="wpi-head">${BAND_PICTURES[b.id] || ''}<p class="muted">${esc(b.intro || '')}</p></div>`
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
  // Part 2: what each pathway adds (PATHWAY_IDEAS). Each idea names the shared ideas it builds on.
  const allPathIdeas = new Map(PATHWAY_IDEAS.flatMap((g) => g.ideas.map((x) => [x.id, x])));
  const ideaLink = (id) => IDEAS[id] ? `<a href="#idea-${esc(id)}">${esc(nameOf(id))}</a>` : `<a href="#idea-${esc(id)}">${esc(allPathIdeas.get(id)?.label || id)}</a>`;
  const part2 = PATHWAY_IDEAS.map((g) => `<section class="wpi-sec" id="path-${esc(g.id)}"><h3>${esc(g.title)}</h3><div class="wpi-head">${BAND_PICTURES[g.id] || ''}<p class="muted">${esc(g.intro)}</p></div>`
    + `<div class="wpi-wrap"><table class="wpi-table wpi-ptable"><thead><tr><th>Idea</th><th>Looks like</th><th>First taught in</th></tr></thead><tbody>`
    + g.ideas.map((x) => {
      const li = lessonInfo(x.lesson);
      return `<tr id="idea-${esc(x.id)}"><th scope="row"><b>${esc(x.label)}</b>${x.hinge ? ' <span class="wpi-badge">hinge</span>' : ''}<p>${esc(x.plain)}</p>${x.note ? `<p class="muted">${esc(x.note)}</p>` : ''}<p class="wpi-needs">Builds on: ${x.builds.map(ideaLink).join(', ')}</p></th>`
        + `<td data-path="Looks like">${pathExample(x)}</td>`
        + `<td data-path="First taught in"><p class="wpi-lesson">${li ? `<a href="${esc(lessonHref(x.lesson))}">${esc(li.title)}</a><span class="muted"> · ${esc(li.course)}</span>` : '<span class="muted">Not yet</span>'}</p></td></tr>`;
    }).join('') + '</tbody></table></div></section>').join('');

  // The sidebar (wide screens) or a sticky "Jump to" bar (phones): both parts, groups with their ideas, hinges dotted.
  const tocIdea = (id, label, hinge) => `<li><a href="#idea-${esc(id)}" data-idea="${esc(id)}">${esc(label)}${hinge ? ' <span class="wpi-dot" title="hinge idea">●</span>' : ''}</a></li>`;
  const toc = `<aside class="wpi-side"><details class="wpi-toc" open><summary>Jump to…</summary><nav aria-label="On this page">`
    + `<p class="wpi-tochead">Shared by every pathway</p><ul>`
    + `<li><a href="#wpi-map" data-sec="wpi-map">Map</a></li><li><a href="#wpi-why" data-sec="wpi-why">Why it matters</a></li>`
    + BANDS.map((b) => { const rs = rows.filter((r) => IDEAS[r.id].band === b.id);
      return `<li class="wpi-tg"><a href="#band-${esc(b.id)}" data-sec="band-${esc(b.id)}">${esc(b.title.replace(/:.*/, ''))}</a><ul>${rs.map((r) => tocIdea(r.id, nameOf(r.id), IDEAS[r.id].hinge)).join('')}</ul></li>`; }).join('')
    + `</ul><p class="wpi-tochead">What each pathway adds</p><ul>`
    + PATHWAY_IDEAS.map((g) => `<li class="wpi-tg"><a href="#path-${esc(g.id)}" data-sec="path-${esc(g.id)}">${esc(g.title)}</a><ul>${g.ideas.map((x) => tocIdea(x.id, x.label, x.hinge)).join('')}</ul></li>`).join('')
    + `</ul></nav></details></aside>`;
  const body = `<header class="top"><a class="crumb" href="${esc(crumbHref)}">← Teacher guides</a><h1>${esc(title)}</h1>`
    + `<p class="lede">Every pathway teaches the same few coding ideas, each in its own order and its own tool. Some ideas must come before others; the rest can come in any order. Part 1 shows which is which, what each idea looks like in each tool, and where each pathway first teaches it. Part 2 adds the few ideas each pathway has of its own.</p></header>`
    + `<div class="wpi-layout">${toc}<div class="wpi-main">`
    + `<h2 class="wpi-part">Part 1: ideas every pathway shares</h2>`
    + map
    + `<section class="wpi-why" id="wpi-why"><h2>Why these ideas matter, even if coding isn't your strength</h2>`
    + `<p>You don't need to be a programmer to teach or use these ideas. They are about what a program does, not the exact words you type: the same idea looks different in blocks, Python and JavaScript, and the plain words below are enough to talk about it.</p>`
    + `<p>The ideas also matter when an AI tool helps write some of the code, as it increasingly does. Someone still has to say precisely what the program should do, check that it does it, and say what to change when it doesn't. That takes the ideas on this page, the hinge ideas most of all: a value that changes as the program runs, the loop counter, and the yes-or-no questions, where mistakes hide at the edges (does \u201cmore than 10\u201d include 10?). Typing the code by hand may matter less than it did; knowing what each part does, and predicting what it will do, matters as much as ever.</p></section>`
    + `<h2>The shared ideas, in plain words</h2><p>Grouped as on the map. Each row says what the idea means, then how it looks in each pathway and the lesson where that pathway first teaches it. Pathways are options, not a sequence: a gap means that pathway teaches the idea later or leaves it out.</p>`
    + sections
    + `<h2 class="wpi-part" id="part-2">Part 2: what each pathway adds</h2><p>Each pathway also has a few ideas of its own. These are often what a teacher new to that tool finds hardest, because they are about the tool's world (pages, devices, games, text programs) rather than coding in general. Each says which shared ideas it builds on.</p>`
    + part2
    + `<p class="muted">Read from each lesson's <code>introduces:</code> tags. MakeCode blocks are drawn here as plain shapes in MakeCode's colours, not screenshots.</p>`
    + `</div></div>`;

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
.wpi-head{display:flex;gap:16px;align-items:center;margin:4px 0 10px}.wpi-head p{margin:0;max-width:360px}
.wpi-pic{flex:0 0 auto;width:340px;max-width:100%;height:auto;color:var(--ink,#222);background:var(--card,#fff);border:1px solid var(--line,#e4e1da);border-radius:10px;padding:4px}
.wpi-pic .wpi-t,.wpi-pic .wpi-tf{fill:#2f6f5e}.wpi-pic .wpi-ts{stroke:#2f6f5e}
@media (prefers-color-scheme:dark){.wpi-pic .wpi-t,.wpi-pic .wpi-tf{fill:#7fd1b5}.wpi-pic .wpi-ts{stroke:#7fd1b5}}
.wpi-sec{margin:22px 0 8px}.wpi-sec h3{margin:0 0 2px}.wpi-sec>p.muted{margin:0 0 8px}
.wpi-part{margin-top:34px;padding-top:10px;border-top:2px solid var(--line,#e4e1da)}
.wpi-layout{display:block}
.wpi-toc{font-size:14px}
.wpi-toc summary{cursor:pointer;font-weight:600;list-style:none}
.wpi-toc summary::-webkit-details-marker{display:none}
.wpi-toc summary::after{content:" ▾"}
.wpi-toc ul{list-style:none;margin:0;padding:0}
.wpi-toc li a{display:block;padding:3px 8px;border-radius:6px;color:var(--ink,#222);text-decoration:none;line-height:1.3}
.wpi-toc li a:hover{background:var(--card,#f3f1ec)}
.wpi-toc li a.on{background:#2f6f5e1f;color:#2f6f5e;font-weight:600}
.wpi-toc .wpi-tg>ul{display:none;margin:0 0 4px 10px;border-left:2px solid var(--line,#e4e1da)}
.wpi-toc .wpi-tg.open>ul{display:block}
.wpi-toc .wpi-tg>ul a{font-size:13px;color:var(--muted,#6b6b6b)}
.wpi-tochead{margin:12px 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted,#6b6b6b)}
.wpi-dot{color:#2f6f5e;font-size:9px;vertical-align:1px}
@media (min-width:1100px){
  .wrap{max-width:1220px}
  .wpi-layout{display:grid;grid-template-columns:230px minmax(0,1fr);gap:32px;align-items:start}
  .wpi-side{position:sticky;top:calc(var(--nav,56px) + 14px);max-height:calc(100vh - var(--nav,56px) - 28px);overflow-y:auto;padding-right:4px}
  .wpi-toc summary{display:none}
}
@media (max-width:1099.98px){
  .js-wpi .wpi-side{position:sticky;top:var(--nav,56px);z-index:20;background:var(--bg,#fbfaf7);padding:8px 0;border-bottom:1px solid var(--line,#e4e1da);margin:0 0 12px}
  .wpi-toc summary{padding:6px 12px;border:1px solid var(--line,#e4e1da);border-radius:8px;background:var(--card,#fff);display:inline-block}
  .wpi-toc[open] nav{max-height:60vh;overflow-y:auto;margin-top:6px;padding:4px;border:1px solid var(--line,#e4e1da);border-radius:8px;background:var(--card,#fff)}
}
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
  .wpi-head{flex-direction:column;align-items:flex-start}
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
})();
(function(){
var side=document.querySelector('.wpi-side'), det=side&&side.querySelector('.wpi-toc'); if(!det) return;
document.documentElement.classList.add('js-wpi');
var wide=window.matchMedia('(min-width:1100px)');
function fit(){ det.open=wide.matches; } fit(); if(wide.addEventListener) wide.addEventListener('change',fit);
det.addEventListener('click',function(e){ if(e.target.closest('a')&&!wide.matches) det.open=false; });
var links={}, ideaLinks={};
side.querySelectorAll('a[data-sec]').forEach(function(a){links[a.getAttribute('data-sec')]=a;});
side.querySelectorAll('a[data-idea]').forEach(function(a){ideaLinks[a.getAttribute('data-idea')]=a;});
var secs=Object.keys(links).map(function(id){return document.getElementById(id);}).filter(Boolean);
var rows=Object.keys(ideaLinks).map(function(id){return document.getElementById('idea-'+id);}).filter(Boolean);
function current(list){ var top=(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav'))||56)+80, best=null;
  list.forEach(function(el){ if(el.getBoundingClientRect().top<=top) best=el; }); return best; }
var ticking=false;
function spy(){ ticking=false;
  var s=current(secs), r=current(rows);
  Object.keys(links).forEach(function(id){ var on=!!s&&s.id===id; links[id].classList.toggle('on',on); var li=links[id].parentNode; if(li.classList.contains('wpi-tg')) li.classList.toggle('open',on); });
  Object.keys(ideaLinks).forEach(function(id){ var on=!!r&&r.id==='idea-'+id&&!!s&&s.contains(r); ideaLinks[id].classList.toggle('on',on); });
  if(wide.matches&&s){ var a=links[s.id], sr=side.getBoundingClientRect(), ar=a.getBoundingClientRect(); if(ar.top<sr.top||ar.bottom>sr.bottom) side.scrollTop+=ar.top-sr.top-40; }
}
window.addEventListener('scroll',function(){ if(!ticking){ticking=true;requestAnimationFrame(spy);} },{passive:true});
spy();
})();</script>`;
  return css + body + js;
}
