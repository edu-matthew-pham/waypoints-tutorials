// Node/fs side of lesson loading and validation. Pure logic lives in lesson-core.mjs.
//
// Content tree:  content/<subject>/<collection>/<lesson>/lesson.md
// A lesson's slug is its path under content/ (e.g. "code/python-foundations/turtle-intro") and is also
// its URL path on the site. Optional content/<dir>/index.md (frontmatter: title, summary)
// names the subject and collection pages.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';
import YAML from 'yaml';
import { createRequire } from 'node:module';
import { expandContext } from './context-core.mjs';
import { snippetFrom, extractInlineCode, parseLessonText, validateLessonCore, snippetId, FEATURES, setSqlRunner } from './lesson-core.mjs';

// SQL lessons: run a solution against its starting database (the same sql.js the playground uses), so a check on the rows can be tested.
{
  const root = resolve(import.meta.dirname, '..');
  const mod = { exports: {} };   // sql-wasm.js is a plain script: give it a CommonJS shell
  new Function('module', 'exports', 'require', '__dirname', '__filename', readFileSync(join(root, 'vendor', 'sql', 'sql-wasm.js'), 'utf8'))(mod, mod.exports, createRequire(import.meta.url), join(root, 'vendor', 'sql'), join(root, 'vendor', 'sql', 'sql-wasm.js'));
  const init = mod.exports.default || mod.exports;
  const SQL = await init({ locateFile: (f) => join(root, 'vendor', 'sql', f) });
  setSqlRunner((dbName, code) => {
    const db = new SQL.Database();
    try {
      if (dbName) db.exec(readFileSync(join(root, 'data', 'sql', `${dbName}.sql`), 'utf8'));
      const sets = db.exec(code); const set = sets[sets.length - 1];
      return set ? [set.columns.join(' | '), ...set.values.map((r) => r.map((v) => (v === null ? 'NULL' : String(v))).join(' | '))].join('\n') : '';
    } finally { db.close(); }
  });
}

export * from './lesson-core.mjs';

export const CONTENT_ROOT = resolve('content');

// Code in a lesson's folder, else code written inside its lesson.md (```code file#region blocks; see extractInlineCode).
const inlineCache = new Map();
function inlineCode(dir) {
  const p = join(dir, 'lesson.md');
  if (!existsSync(p)) return {};
  const m = statSync(p).mtimeMs, hit = inlineCache.get(dir);
  if (hit && hit.m === m) return hit.inline;
  const inline = extractInlineCode(readFileSync(p, 'utf8').replace(/\r\n/g, '\n')).inline;
  inlineCache.set(dir, { m, inline });
  return inline;
}
const readIn = (dir) => (file) => { const p = join(dir, file); return existsSync(p) ? readFileSync(p, 'utf8') : inlineCode(dir)[file]; };

export function listLessonDirs(root = CONTENT_ROOT) {
  const out = [];
  const walk = (dir) => {
    if (existsSync(join(dir, 'lesson.md'))) { out.push(dir); return; }
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name);
      if (name.startsWith('.') || name === 'node_modules') continue;
      if (statSync(p).isDirectory()) walk(p);
    }
  };
  if (existsSync(root)) walk(root);
  return out;
}

/** Frontmatter of content/<dir>/index.md, for subject and collection pages. */
export function loadDirMeta(dir) {
  const file = join(dir, 'index.md');
  if (!existsSync(file)) return {};
  const m = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  return m ? YAML.parse(m[1]) || {} : {};
}

/** Read a code reference "file" or "file#region" relative to the lesson dir. */
export function getSnippet(dir, ref) { return snippetFrom(readIn(dir), ref); }

export function loadLesson(dir) {
  const slug = relative(CONTENT_ROOT, dir).split(sep).join('/');
  const lesson = { ...parseLessonText(readFileSync(join(dir, 'lesson.md'), 'utf8'), slug), dir };
  // teacher.yml beside lesson.md: notes, goals, exit ticket, student explanation and solutions (see AUTHORING.md).
  const t = join(dir, 'teacher.yml');
  // A ```teacher block inside lesson.md (parseLessonText) wins; teacher.yml is the fallback.
  // Swappable context: a lesson with a ```context block expands {{ }} in these files too (tools/context-core.mjs).
  const ex = (text) => (lesson.context ? expandContext(text, lesson.context, lesson.slug) : text);
  if (!lesson.teacher && existsSync(t)) lesson.teacher = YAML.parse(ex(readFileSync(t, 'utf8'))) || {};
  // Class activities (content/<course>/class/<lesson>.yml): kept outside the lesson folder so editing them never
  // re-records the lesson's clips. They become slides in the deck and a section of the teacher guide (AUTHORING › Class plan).
  const c = join(dir, '..', 'class', `${dir.split(sep).pop()}.yml`);
  if (!lesson.classPlan && existsSync(c)) lesson.classPlan = YAML.parse(ex(readFileSync(c, 'utf8'))) || {};
  return lesson;
}

export function loadLessons(only) {
  return listLessonDirs()
    .map(loadLesson)
    .filter((l) => !only || l.slug === only || l.slug.endsWith('/' + only));
}

/** Snippet files: { turtle: {...}, html: {...} } (parsed JSON), read from snippets/ in the repo root. */
export function loadSnippetFiles() {
  const out = {};
  for (const kind of ['turtle', 'html', 'microbit', 'arcade', 'robot', 'p5']) {
    const p = resolve('snippets', `${kind}.json`);
    if (existsSync(p)) out[kind] = JSON.parse(readFileSync(p, 'utf8'));
  }
  return out;
}

/** Shared modules: { name: source } from modules/*.py in the repo root. */
export function loadSharedModules() {
  const dir = resolve('modules');
  const out = {};
  if (existsSync(dir)) for (const f of readdirSync(dir)) if (f.endsWith('.py')) out[f.slice(0, -3)] = readFileSync(join(dir, f), 'utf8');
  return out;
}

export function validateLesson(lesson) {
  const files = loadSnippetFiles();
  const known = Object.fromEntries(Object.entries(files).map(([k, d]) => [k, new Set(d.groups.flatMap((g) => g.items.map((i) => snippetId(i.label))))]));
  if (known.turtle) for (const f of FEATURES) known.turtle.add(f.id);
  return validateLessonCore(lesson, readIn(lesson.dir), known, loadSharedModules());
}
