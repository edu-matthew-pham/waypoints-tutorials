// `npm run build`: content/**/lesson.md -> static site in dist/ (URL path = path under content/).
//   dist/index.html                      all subjects
//   dist/<subject>/index.html            collections in a subject        (e.g. /code/)
//   dist/<subject>/<collection>/...      lessons in a collection         (e.g. /code/python/)
//   dist/<subject>/<collection>/<lesson>/index.html
//   dist/_playground/                    the embeddable Python turtle playground
//   dist/_playground-html/               the embeddable HTML & CSS playground
// A step with a clip embeds clips/step-N.mp4 if it exists, otherwise a labelled placeholder,
// so lessons can be written, reviewed and published before any clip is rendered.
import { mkdirSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { Marked } from 'marked';
import { lessonPageHtml, tryEmbed, esc, titleCase, page, codeBlock } from './lesson-view.mjs';
import { readFileSync } from 'node:fs';
import { snippetId, unlockKind } from './lesson-core.mjs';
import { loadLessons, validateLesson, getSnippet, loadDirMeta, loadSnippetFiles, loadSharedModules, CONTENT_ROOT } from './lesson.mjs';
import { buildPlayground, buildHtmlPlayground } from './build-playground.mjs';
import { buildCreate } from './build-create.mjs';

const require = createRequire(import.meta.url);
const { highlightCode } = require('./highlight.cjs');
const OUT = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist';

function clipHtml(lesson, step) {
  const c = step.config;
  if (!c.clip) return '';
  const file = join(OUT, lesson.slug, 'clips', `${step.id}.mp4`);
  const cap = c.caption || step.title;
  let inner;
  if (existsSync(file)) {
    const poster = existsSync(join(OUT, lesson.slug, 'clips', `${step.id}.jpg`)) ? ` poster="clips/${step.id}.jpg"` : '';
    inner = `<figure class="clip"><video controls loop muted playsinline preload="metadata"${poster}><source src="clips/${step.id}.mp4" type="video/mp4"></video><figcaption>${esc(cap)}</figcaption></figure>`;
  } else {
    inner = `<div class="placeholder"><b>Clip placeholder · ${esc(step.id)}</b><span>${esc(cap)}</span><span>Rendered automatically by the build.</span></div>`;
  }
  return c.reveal ? `<details class="reveal"><summary>${esc(typeof c.reveal === 'string' ? c.reveal : 'Reveal what happens')}</summary>${inner}</details>` : inner;
}


/** "Try it yourself": the playground embedded with the step's starter code; edits autosave per student. */
function tryHtml(lesson, step) {
  const t = step.config.try;
  if (!t) return '';
  // Modules a lesson offers: a file next to lesson.md overrides a shared one; shared ones the playground loads itself.
  const local = {};
  for (const name of lesson.modules) { const f = join(lesson.dir, `${name}.py`); if (existsSync(f)) local[name] = readFileSync(f, 'utf8'); }
  return tryEmbed(lesson, step, getSnippet(lesson.dir, t.starter || step.config.code), '../'.repeat(lesson.depth), '', { use: lesson.modules, local }, VERSIONS);
}

function buildLesson(lesson, parentTitle, course) {
  const dir = join(OUT, lesson.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), lessonPageHtml(lesson, {
    Marked, highlightCode,
    snippet: (ref) => getSnippet(lesson.dir, ref),
    clipHtml: (s) => clipHtml(lesson, s),
    tryHtml: (s) => tryHtml(lesson, s),
    snippetNames,
    crumb: { href: '../', title: parentTitle },
    course,
    siteRoot: '../'.repeat(lesson.depth),
    source: `content/${lesson.slug}/lesson.md`,
  }));
}

const PLAYGROUND_PAGE_CSS = `:root{--bg:#fbfaf8;--ink:#1d2430;--line:#e4e1da;--card:#fff;--accent:#c2570a}
@media(prefers-color-scheme:dark){:root{--bg:#0f141a;--ink:#e6edf3;--line:#26303c;--card:#161d26;--accent:#ff9d3d}}
html,body{height:100%;margin:0}body{display:flex;flex-direction:column;background:var(--bg);color:var(--ink);font:15px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.pgbar{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;padding:8px 14px;border-bottom:1px solid var(--line)}
.pgbar a,.pgbar button{font:inherit;font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;background:none;border:1px solid transparent;border-radius:8px;padding:5px 8px;cursor:pointer}
.pgbar a:hover,.pgbar button:hover{background:var(--card);border-color:var(--line)}.pgbar button{font-weight:500;color:inherit;opacity:.85}.grow{flex:1}
iframe{flex:1;width:100%;border:0;min-height:0}`;

// ---------- build ----------
const orderOf = (l) => (l.order ?? Infinity);
const lessons = loadLessons().sort((a, b) => (a.slug.split('/').slice(0, -1).join('/')).localeCompare(b.slug.split('/').slice(0, -1).join('/')) || orderOf(a) - orderOf(b) || a.slug.localeCompare(b.slug));
const snippetFiles = loadSnippetFiles();
// kind -> { snippet id -> label } so a check can say what it unlocked by name
const snippetNames = Object.fromEntries(Object.entries(snippetFiles).map(([k, d]) => [k, Object.fromEntries(d.groups.flatMap((g) => g.items.map((i) => [snippetId(i.label), i.label])))]));
let bad = 0;
for (const l of lessons) { const e = validateLesson(l); e.forEach((m) => console.error('✗ ' + m)); bad += e.length; }
if (bad) process.exit(1);

mkdirSync(OUT, { recursive: true });
buildPlayground(OUT);
buildHtmlPlayground(OUT);
// Each playground's build stamp, added to the iframe URLs so a deploy is picked up at once.
const VERSIONS = Object.fromEntries(['_playground', '_playground-html'].map((d) => [d, readFileSync(join(OUT, d, 'version.txt'), 'utf8').trim()]));
buildCreate(OUT);

// Which lesson step unlocks which snippet: the playgrounds lock exactly these until the check is passed.
const claimsByKind = {};
for (const [kind, dir] of [['turtle', '_playground'], ['html', '_playground-html']]) {
  const claims = claimsByKind[kind] = {};
  for (const l of lessons) for (const s of l.steps) {
    if (unlockKind(l, s) !== kind) continue;
    const stepTitle = s.title.replace(/^(Predict|Run|Investigate|Modify|Make|Info):\s*/i, '');
    for (const id of s.config.unlocks || []) claims[id] = { lesson: l.title, slug: l.slug, step: stepTitle };
    for (const t of s.tasks) for (const id of t.config.unlocks || []) claims[id] = { lesson: l.title, slug: l.slug, step: `${stepTitle} › ${t.title}` };
  }
  writeFileSync(join(OUT, dir, 'unlocks.json'), JSON.stringify(claims));
}

// directory tree: path ('' = root) -> { title, summary, kids: [{name, kind, title, summary}] }
const dirs = new Map();
const dirNode = (path) => {
  if (!dirs.has(path)) {
    const meta = loadDirMeta(join(CONTENT_ROOT, path));
    const name = path.split('/').pop() || 'Lessons';
    dirs.set(path, { path, title: meta.title || titleCase(name), summary: meta.summary || '', order: Number.isFinite(Number(meta.order)) && meta.order != null ? Number(meta.order) : null, kids: new Map() });
  }
  return dirs.get(path);
};
for (const l of lessons) {
  const segs = l.slug.split('/');
  for (let i = 0; i < segs.length; i++) {
    const parent = dirNode(segs.slice(0, i).join('/'));
    if (i === segs.length - 1) parent.kids.set(segs[i], { kind: 'lesson', title: l.title, summary: l.summary, order: l.order });
    else if (!parent.kids.has(segs[i])) {
      const child = dirNode(segs.slice(0, i + 1).join('/'));
      parent.kids.set(segs[i], { kind: 'dir', title: child.title, summary: child.summary, order: child.order });
    }
  }
}

// Reference (cheat sheet) pages are generated from the same snippet files the playgrounds use.
const REFS = [{ file: 'turtle', path: 'code/python/reference' }, { file: 'html', path: 'code/html/reference' }];
for (const r of REFS) {
  const data = JSON.parse(readFileSync(join('snippets', `${r.file}.json`), 'utf8'));
  const parent = r.path.split('/').slice(0, -1).join('/');
  const plain = (t) => String(t).split('‹').join('').split('›').join('');
  const search = `<input type="search" id="ref-search" class="ref-search" placeholder="Search: a name, or what it does" aria-label="Search the reference"><p id="ref-none" class="lede" hidden></p>`;
  // Same search as the playground drawer: every word must appear in the name, hint or code.
  const script = `<script>(function(){var q=document.getElementById('ref-search'),none=document.getElementById('ref-none');q.addEventListener('input',function(){var w=q.value.toLowerCase().split(/\\s+/).filter(Boolean),n=0;document.querySelectorAll('.ref-section').forEach(function(sec){var any=false;sec.querySelectorAll('.ref-item').forEach(function(it){var t=it.dataset.text,hit=w.every(function(x){return t.indexOf(x)>=0});it.hidden=!hit;if(hit){any=true;n++}});sec.hidden=!any});none.hidden=n>0;none.textContent=n?'':'Nothing matches "'+q.value.trim()+'".'})})();</script>`;
  const body = search + data.groups.map((g) => `<section class="ref-section"><h2 class="ref-group">${esc(g.name)}</h2>` + g.items.map((i) =>
    `<div class="ref-item" data-text="${esc([i.label, i.hint || '', plain(i.code)].join(' ').toLowerCase())}">${codeBlock(highlightCode, i.code.split('‹').join('').split('›').join('').replace(/\n$/, '') + '\n', data.language, '')}<div><b>${esc(i.label)}</b><p>${esc(i.hint || '')}</p><p class="ref-id">id: <code>${snippetId(i.label)}</code></p></div></div>`).join('') + '</section>').join('') + script;
  mkdirSync(join(OUT, r.path), { recursive: true });
  writeFileSync(join(OUT, r.path, 'index.html'), page(data.title,
    `<header class="top"><a class="crumb" href="../">← ${esc(dirs.get(parent)?.title || titleCase(parent.split('/').pop()))}</a><h1>${esc(data.title)}</h1><p class="lede">${esc(data.summary)}</p></header>${body}`));
}

// Playground pages live beside Reference on the paths that have a playground.
const PLAY = { 'code/python': { kind: 'turtle', dir: '_playground', label: 'Python' }, 'code/html': { kind: 'html', dir: '_playground-html', label: 'HTML and CSS' } };
const checkKeys = (l) => l.steps.flatMap((s) => s.tasks.length ? s.tasks.filter((t) => t.config.check).map((t) => `${l.slug}/${t.id}`) : s.config.check ? [`${l.slug}/${s.id}`] : []);
for (const l of lessons) {
  const parentPath = l.slug.split('/').slice(0, -1).join('/');
  const sibs = lessons.filter((x) => x.slug.split('/').slice(0, -1).join('/') === parentPath);
  const i = sibs.indexOf(l);
  const link = (x) => ({ href: `../${x.slug.split('/').pop()}/`, title: x.title, order: x.order, summary: x.summary });
  buildLesson(l, dirNode(parentPath).title, {
    index: i + 1, total: sibs.length,
    prev: i > 0 ? link(sibs[i - 1]) : null, next: i < sibs.length - 1 ? link(sibs[i + 1]) : null,
    list: sibs.map((x) => ({ ...link(x), checks: checkKeys(x), current: x === l })),
    pathHref: '../', pathTitle: dirNode(parentPath).title,
    playground: PLAY[parentPath] ? '../playground/' : '',
  });
}

// progress-manifest.json: every path's lessons, checks and lesson-claimed snippets, for the "My progress" dialog.
const manifest = { paths: [] };
for (const path of [...new Set(lessons.map((l) => l.slug.split('/').slice(0, -1).join('/')))]) {
  const ls = lessons.filter((l) => l.slug.split('/').slice(0, -1).join('/') === path);
  const kind = PLAY[path]?.kind || null;
  const claims = kind ? claimsByKind[kind] : {};
  manifest.paths.push({
    title: dirNode(path).title, href: `${path}/`, kind,
    lessons: ls.map((l) => ({ title: l.title, order: l.order, href: `${l.slug}/`, checks: checkKeys(l) })),
    snippets: Object.entries(claims).map(([id, c]) => ({ id, label: snippetNames[kind]?.[id] || id, lesson: c.lesson, step: c.step })),
  });
}
writeFileSync(join(OUT, 'progress-manifest.json'), JSON.stringify(manifest));
copyFileSync(join('site', 'progress.js'), join(OUT, 'progress.js'));

const sharedModuleNames = Object.keys(loadSharedModules());
for (const [path, pg] of Object.entries(PLAY)) {
  const depth = path.split('/').length + 1; // .../playground/ -> site root
  const up = '../'.repeat(depth);
  const src = `${up}${pg.dir}/index.html?id=free&free=1&v=${VERSIONS[pg.dir]}${pg.kind === 'turtle' && sharedModuleNames.length ? `&use=${sharedModuleNames.join(',')}` : ''}`;
  mkdirSync(join(OUT, path, 'playground'), { recursive: true });
  writeFileSync(join(OUT, path, 'playground', 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(pg.label)} playground</title><style>${PLAYGROUND_PAGE_CSS}</style></head><body>
<header class="pgbar"><a href="../">← ${esc(dirNode(path).title)}</a><b>${esc(pg.label)} playground</b><span class="grow"></span>
<a id="cont" href="#" hidden>Continue lesson</a><a href="../reference/">Reference</a><a href="#" data-progress-open>My progress</a>
<button type="button" id="unlock" aria-pressed="false" title="Some snippets are for things you haven't learned yet.">Unlock all snippets (use this if your progress was lost)</button></header>
<iframe title="${esc(pg.label)} playground" src="${esc(src)}"></iframe>
<script>
(function(){var KEY='wp-progress',b=document.getElementById('unlock');
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
function paint(){var on=!!load().free;b.setAttribute('aria-pressed',String(on));b.textContent=on?'Re-lock snippets':'Unlock all snippets (use this if your progress was lost)'}
b.addEventListener('click',function(){var p=load();p.free=!p.free;try{localStorage.setItem(KEY,JSON.stringify(p))}catch(e){}paint();
var f=document.querySelector('iframe');try{f.contentWindow.dispatchEvent(new StorageEvent('storage',{key:KEY}))}catch(e){}});
paint();
try{var l=JSON.parse(localStorage.getItem('wp-last-lesson'));if(l&&l.href){var c=document.getElementById('cont');c.href=l.href;c.title=l.title||'';c.hidden=false}}catch(e){}})();
</script><script src="${up}progress.js" data-root="${up}" defer></script></body></html>`);
}

for (const node of dirs.values()) {
  const isRoot = node.path === '';
  const parentPath = node.path.split('/').slice(0, -1).join('/');
  const crumb = isRoot ? '' : `<a class="crumb" href="../">← ${esc(dirNode(parentPath).title)}</a>`;
  const ref = REFS.find((r) => r.path === `${node.path}/reference`);
  const play = PLAY[node.path];
  const items = (play ? `<li><a href="playground/"><b>Playground</b><span>Free play: write and run your own ${esc(play.label)} code.</span></a></li>` : '') + (ref ? `<li><a href="reference/"><b>Reference</b><span>Every command and tag in the playground, with what it does.</span></a></li>` : '') + (node.path === 'code' ? `<li><a href="create/"><b>Create a lesson</b><span>Write or paste a lesson, preview it with a live playground, and download it.</span></a></li>` : '') + [...node.kids.entries()].sort(([an, a], [bn, b]) => (a.order ?? Infinity) - (b.order ?? Infinity) || an.localeCompare(bn)).map(([name, k]) => `<li><a href="${esc(name)}/"><b>${k.kind === 'lesson' && k.order != null ? `${k.order}. ` : ''}${esc(k.title)}</b>${k.summary ? `<span>${esc(k.summary)}</span>` : ''}</a></li>`).join('');
  const outDir = join(OUT, node.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), page(isRoot ? 'Waypoints tutorials' : node.title,
    `<header class="top">${crumb}<h1>${esc(isRoot ? 'Waypoints tutorials' : node.title)}</h1>${node.summary ? `<p class="lede">${esc(node.summary)}</p>` : ''}</header>${play ? '<p><a href="#" data-progress-open>My progress</a></p>' : ''}<ul class="lessons">${items}</ul>`, play ? `<script src="${'../'.repeat(node.path.split('/').length)}progress.js" data-root="${'../'.repeat(node.path.split('/').length)}" defer></script>` : ''));
}
writeFileSync(join(OUT, '.nojekyll'), '');

const missing = lessons.flatMap((l) => l.steps.filter((s) => s.config.clip && !existsSync(join(OUT, l.slug, 'clips', `${s.id}.mp4`))).map((s) => `${l.slug}/${s.id}`));
console.log(`Built ${lessons.length} lesson(s) into ${OUT}/` + (missing.length ? `; ${missing.length} clip placeholder(s): ${missing.join(', ')}` : '; all clips present'));
