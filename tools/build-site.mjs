// `npm run build`: content/**/lesson.md -> static site in dist/ (URL path = path under content/).
//   dist/index.html                      all subjects
//   dist/<subject>/index.html            collections in a subject        (e.g. /code/)
//   dist/<subject>/<collection>/...      lessons in a collection         (e.g. /code/python/)
//   dist/<subject>/<collection>/<lesson>/index.html
//   dist/_playground/                    the embeddable Python turtle playground
//   dist/_playground-html/               the embeddable HTML & CSS playground
// A step with a clip embeds clips/step-N.mp4 if it exists, otherwise a labelled placeholder,
// so lessons can be written, reviewed and published before any clip is rendered.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { Marked } from 'marked';
import { lessonPageHtml, tryEmbed, esc, titleCase, page } from './lesson-view.mjs';
import { loadLessons, validateLesson, getSnippet, loadDirMeta, CONTENT_ROOT } from './lesson.mjs';
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
  return c.reveal ? `<details class="reveal"><summary>Reveal what happens</summary>${inner}</details>` : inner;
}


/** "Try it yourself": the playground embedded with the step's starter code; edits autosave per student. */
function tryHtml(lesson, step) {
  const t = step.config.try;
  if (!t) return '';
  return tryEmbed(lesson, step, getSnippet(lesson.dir, t.starter || step.config.code), '../'.repeat(lesson.depth));
}

function buildLesson(lesson, parentTitle) {
  const dir = join(OUT, lesson.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), lessonPageHtml(lesson, {
    Marked, highlightCode,
    snippet: (ref) => getSnippet(lesson.dir, ref),
    clipHtml: (s) => clipHtml(lesson, s),
    tryHtml: (s) => tryHtml(lesson, s),
    crumb: { href: '../', title: parentTitle },
    source: `content/${lesson.slug}/lesson.md`,
  }));
}

// ---------- build ----------
const lessons = loadLessons();
let bad = 0;
for (const l of lessons) { const e = validateLesson(l); e.forEach((m) => console.error('✗ ' + m)); bad += e.length; }
if (bad) process.exit(1);

mkdirSync(OUT, { recursive: true });
buildPlayground(OUT);
buildHtmlPlayground(OUT);
buildCreate(OUT);

// directory tree: path ('' = root) -> { title, summary, kids: [{name, kind, title, summary}] }
const dirs = new Map();
const dirNode = (path) => {
  if (!dirs.has(path)) {
    const meta = loadDirMeta(join(CONTENT_ROOT, path));
    const name = path.split('/').pop() || 'Lessons';
    dirs.set(path, { path, title: meta.title || titleCase(name), summary: meta.summary || '', kids: new Map() });
  }
  return dirs.get(path);
};
for (const l of lessons) {
  const segs = l.slug.split('/');
  for (let i = 0; i < segs.length; i++) {
    const parent = dirNode(segs.slice(0, i).join('/'));
    if (i === segs.length - 1) parent.kids.set(segs[i], { kind: 'lesson', title: l.title, summary: l.summary });
    else if (!parent.kids.has(segs[i])) {
      const child = dirNode(segs.slice(0, i + 1).join('/'));
      parent.kids.set(segs[i], { kind: 'dir', title: child.title, summary: child.summary });
    }
  }
}

for (const l of lessons) buildLesson(l, dirNode(l.slug.split('/').slice(0, -1).join('/')).title);

for (const node of dirs.values()) {
  const isRoot = node.path === '';
  const parentPath = node.path.split('/').slice(0, -1).join('/');
  const crumb = isRoot ? '' : `<a class="crumb" href="../">← ${esc(dirNode(parentPath).title)}</a>`;
  const items = (node.path === 'code' ? `<li><a href="create/"><b>Create a lesson</b><span>Write or paste a lesson, preview it with a live playground, and download it.</span></a></li>` : '') + [...node.kids.entries()].map(([name, k]) => `<li><a href="${esc(name)}/"><b>${esc(k.title)}</b>${k.summary ? `<span>${esc(k.summary)}</span>` : ''}</a></li>`).join('');
  const outDir = join(OUT, node.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), page(isRoot ? 'Waypoints tutorials' : node.title,
    `<header class="top">${crumb}<h1>${esc(isRoot ? 'Waypoints tutorials' : node.title)}</h1>${node.summary ? `<p class="lede">${esc(node.summary)}</p>` : ''}</header><ul class="lessons">${items}</ul>`));
}
writeFileSync(join(OUT, '.nojekyll'), '');

const missing = lessons.flatMap((l) => l.steps.filter((s) => s.config.clip && !existsSync(join(OUT, l.slug, 'clips', `${s.id}.mp4`))).map((s) => `${l.slug}/${s.id}`));
console.log(`Built ${lessons.length} lesson(s) into ${OUT}/` + (missing.length ? `; ${missing.length} clip placeholder(s): ${missing.join(', ')}` : '; all clips present'));
