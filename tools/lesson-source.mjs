// The text of a lesson's folder for "Make your own version" (25 Oct 2026): built beside each lesson page as
// <lesson>/source.json ({ title, files }) and read by Create (?open=<slug>). Single-file form: teacher.yml and the
// class plan (content/<course>/class/<lesson>.yml) are folded into a ```teacher block in lesson.md, the way Create
// and the console lessons already keep them, so the copy needs no files outside its folder. Text files only.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import YAML from 'yaml';

const TEXT = new Set(['.py', '.html', '.css', '.js', '.json', '.txt', '.csv', '.ino', '.mmd', '.ts', '.yml', '.md', '.sql']);
const MAX_FILE = 200 * 1024, MAX_TOTAL = 1024 * 1024;

export function lessonSource(lesson) {
  const files = {};
  let total = 0;
  for (const name of readdirSync(lesson.dir).sort()) {
    if (name === 'lesson.md' || name === 'teacher.yml' || name.startsWith('.')) continue;
    const p = join(lesson.dir, name);
    if (!statSync(p).isFile() || !TEXT.has(extname(name))) continue;
    const size = statSync(p).size;
    if (size > MAX_FILE || total + size > MAX_TOTAL) continue;
    files[name] = readFileSync(p, 'utf8'); total += size;
  }
  let md = readFileSync(join(lesson.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  if (!/^```teacher[ \t]*$/m.test(md)) {
    const t = join(lesson.dir, 'teacher.yml'), tf = existsSync(t) ? YAML.parse(readFileSync(t, 'utf8')) || {} : null;
    const plan = lesson.classPlan;
    if (tf || plan) {
      const block = { ...(tf || {}), ...(plan ? { class: plan } : {}) };
      md = md.replace(/\s*$/, '\n') + '\n```teacher\n' + YAML.stringify(block).trimEnd() + '\n```\n';
    }
  }
  // Data files kept outside the folder (try.files: ../sets/music.csv) come along, beside lesson.md.
  for (const m of new Set(md.match(/(?:\.\.\/)+[\w./-]+\.(?:csv|sql|json|txt)/g) || [])) {
    const p = join(lesson.dir, m);
    if (!existsSync(p) || statSync(p).size > MAX_FILE || Object.hasOwn(files, basename(m))) continue;
    files[basename(m)] = readFileSync(p, 'utf8'); md = md.split(m).join(basename(m));
  }
  return { title: lesson.title, slug: lesson.slug, files: { 'lesson.md': md, ...files } };
}
