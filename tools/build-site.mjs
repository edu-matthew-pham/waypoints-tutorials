// `npm run build`: content/**/lesson.md -> static site in dist/ (URL path = path under content/).
//   dist/index.html                      all subjects
//   dist/<subject>/index.html            collections in a subject        (e.g. /code/)
//   dist/<subject>/<collection>/...      lessons in a collection         (e.g. /code/python/)
//   dist/<subject>/<collection>/<lesson>/index.html
//   dist/_playground/                    the embeddable Python turtle playground
// A step with a clip embeds clips/step-N.mp4 if it exists, otherwise a labelled placeholder,
// so lessons can be written, reviewed and published before any clip is rendered.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { Marked } from 'marked';
import { loadLessons, validateLesson, getSnippet, loadDirMeta, CONTENT_ROOT } from './lesson.mjs';
import { buildPlayground } from './build-playground.mjs';

const require = createRequire(import.meta.url);
const { highlightCode } = require('./highlight.cjs');
const OUT = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const titleCase = (s) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const STAGE_INFO = {
  predict: ['Predict', 'Read the code and say what it will do before you run anything.'],
  run: ['Run', 'Run it and compare the result with your prediction.'],
  investigate: ['Investigate', 'Trace how each line of code connects to what you see.'],
  modify: ['Modify', 'Change the code on purpose and check the result.'],
  make: ['Make', 'Build something new using what you have learned.'],
  info: ['Info', ''],
};
const STAGE_PREFIX = /^(Predict|Run|Investigate|Modify|Make|Info):\s*/i;

function codeBlock(src, lang, label) {
  return `<div class="code">${label ? `<div class="code-head"><span>${esc(label)}</span><button type="button" class="copy">Copy</button></div>` : ''}<pre><code>${highlightCode(src, lang)}</code></pre></div>`;
}

function markdown(lesson) {
  return new Marked({
    renderer: {
      code({ text, lang }) { return codeBlock(text.replace(/\n$/, '') + '\n', lang || lesson.language, ''); },
    },
  });
}

const CSS = `
:root{--bg:#fbfaf8;--ink:#1d2430;--muted:#5d6978;--card:#fff;--line:#e4e1da;--accent:#c2570a;--code:#141a22;--codeink:#e6edf3;
--kw:#ff7b72;--str:#a5d6ff;--fn:#d2a8ff;--com:#7f8fa1;--num:#79c0ff;
--predict:#8a5cf6;--run:#16a05d;--investigate:#2b7de9;--modify:#c2570a;--make:#d63384;--info:#5d6978}
@media(prefers-color-scheme:dark){:root{--bg:#0f141a;--ink:#e6edf3;--muted:#9aa7b6;--card:#161d26;--line:#26303c;--accent:#ff9d3d;--code:#0b0f14;
--predict:#b794ff;--run:#4ade80;--investigate:#6cb6ff;--modify:#ff9d3d;--make:#ff8fc0}}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:820px;margin:0 auto;padding:0 20px 80px}
header.top{padding:44px 0 18px}header.top .crumb{font-size:14px;color:var(--muted);text-decoration:none}
h1{font-size:2.1rem;line-height:1.2;margin:.3em 0 .2em}.lede{color:var(--muted);font-size:1.1rem;margin:0 0 1em}
nav.steps{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 8px}
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
details.reveal summary{cursor:pointer;font-weight:600;padding:12px 0;color:var(--c)}
details.reveal[open] summary{border-bottom:1px solid var(--line);margin-bottom:6px}
.legend{display:grid;gap:6px;margin:10px 0 0;padding:0;list-style:none;font-size:15px;color:var(--muted)}
.legend b{color:var(--c)}
ul.lessons{list-style:none;padding:0;display:grid;gap:14px}ul.lessons a{display:block;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px 22px;text-decoration:none;color:inherit}
ul.lessons a:hover{border-color:var(--accent)}ul.lessons b{display:block;font-size:1.15rem}ul.lessons span{color:var(--muted);font-size:15px}
footer{margin-top:50px;color:var(--muted);font-size:14px}
`;

const JS = `document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){
var t=b.closest('.code').querySelector('code').innerText;navigator.clipboard&&navigator.clipboard.writeText(t).then(function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1200)})})});`;

const page = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><style>${CSS}</style></head><body><div class="wrap">${body}</div><script>${JS}</script></body></html>`;

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
  const starter = getSnippet(lesson.dir, t.starter || step.config.code);
  const q = new URLSearchParams({ id: `${lesson.slug}/${step.id}`, code: starter });
  if (t.extent) q.set('extent', t.extent);
  if (t.speed) q.set('speed', t.speed);
  const src = `${'../'.repeat(lesson.depth)}_playground/index.html?${q.toString()}`;
  return `<div class="try"><div class="try-head"><b>Try it yourself</b><span>Your edits are saved in this browser.</span></div>` +
    `<iframe title="Python turtle playground" loading="lazy" style="height:${Number(t.height) || 480}px" src="${esc(src)}"></iframe></div>`;
}

function buildLesson(lesson, parentTitle) {
  const md = markdown(lesson);
  const dir = join(OUT, lesson.slug);
  mkdirSync(dir, { recursive: true });

  // "Predict: what will `greet` return?" -> "What will <code>greet</code> return?"
  const heading = (t) => {
    const s = t.replace(STAGE_PREFIX, '');
    return md.parseInline(s.charAt(0).toUpperCase() + s.slice(1));
  };
  const stagesUsed = [...new Set(lesson.steps.map((s) => s.config.stage).filter((s) => s !== 'info'))];
  const nav = lesson.steps.map((s) => `<a href="#${s.id}" style="--c:var(--${s.config.stage})"><i></i>${heading(s.title)}</a>`).join('');
  const legend = stagesUsed.map((k) => `<li style="--c:var(--${k})"><b>${STAGE_INFO[k][0]}</b>: ${esc(STAGE_INFO[k][1])}</li>`).join('');

  const steps = lesson.steps.map((s) => {
    const c = s.config;
    const [label, hint] = STAGE_INFO[c.stage] || STAGE_INFO.info;
    const showCode = c.code ? codeBlock(getSnippet(lesson.dir, c.code), lesson.language, c.code.split('#')[0]) : '';
    const clip = clipHtml(lesson, s);
    const body = md.parse(s.body);
    // Predict steps: code first, then the questions, then the hidden reveal. Others: text, code, clip.
    const inner = (c.stage === 'predict' ? `${showCode}${body}${clip}` : `${body}${showCode}${clip}`) + tryHtml(lesson, s);
    return `<section class="step" id="${s.id}" style="--c:var(--${c.stage})"><div class="chip">${esc(label)}<small>${esc(hint)}</small></div><h2>${heading(s.title)}</h2>${inner}</section>`;
  }).join('');

  writeFileSync(join(dir, 'index.html'), page(lesson.title, `
<header class="top"><a class="crumb" href="../">← ${esc(parentTitle)}</a><h1>${esc(lesson.title)}</h1>${lesson.summary ? `<p class="lede">${esc(lesson.summary)}</p>` : ''}</header>
${md.parse(lesson.intro)}
<ul class="legend">${legend}</ul>
<nav class="steps">${nav}</nav>
${steps}
<footer>Source: <code>content/${esc(lesson.slug)}/lesson.md</code></footer>`));
}

// ---------- build ----------
const lessons = loadLessons();
let bad = 0;
for (const l of lessons) { const e = validateLesson(l); e.forEach((m) => console.error('✗ ' + m)); bad += e.length; }
if (bad) process.exit(1);

mkdirSync(OUT, { recursive: true });
buildPlayground(OUT);

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
  const items = [...node.kids.entries()].map(([name, k]) => `<li><a href="${esc(name)}/"><b>${esc(k.title)}</b>${k.summary ? `<span>${esc(k.summary)}</span>` : ''}</a></li>`).join('');
  const outDir = join(OUT, node.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), page(isRoot ? 'Waypoints tutorials' : node.title,
    `<header class="top">${crumb}<h1>${esc(isRoot ? 'Waypoints tutorials' : node.title)}</h1>${node.summary ? `<p class="lede">${esc(node.summary)}</p>` : ''}</header><ul class="lessons">${items}</ul>`));
}
writeFileSync(join(OUT, '.nojekyll'), '');

const missing = lessons.flatMap((l) => l.steps.filter((s) => s.config.clip && !existsSync(join(OUT, l.slug, 'clips', `${s.id}.mp4`))).map((s) => `${l.slug}/${s.id}`));
console.log(`Built ${lessons.length} lesson(s) into ${OUT}/` + (missing.length ? `; ${missing.length} clip placeholder(s): ${missing.join(', ')}` : '; all clips present'));
