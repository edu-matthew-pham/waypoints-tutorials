// `npm run validate`: parse every lesson and report problems. Exits 1 on any error.
import { loadLessons, validateLesson } from './lesson.mjs';

const lessons = loadLessons(process.argv[2]);
if (!lessons.length) { console.error('No lessons found in lessons/*/lesson.md'); process.exit(1); }

let bad = 0;
for (const l of lessons) {
  const errs = validateLesson(l);
  const clips = l.steps.filter((s) => s.config.clip).length;
  if (errs.length) { bad += errs.length; errs.forEach((e) => console.error('✗ ' + e)); }
  else console.log(`✓ ${l.slug}: ${l.steps.length} steps, ${clips} clips`);
}
import { readFileSync, readdirSync } from 'node:fs';
for (const f of readdirSync('snippets').filter((n) => n.endsWith('.json'))) {
  try {
    const d = JSON.parse(readFileSync(`snippets/${f}`, 'utf8'));
    let n = 0;
    for (const g of d.groups) for (const i of g.items) {
      n++;
      if (!i.label || !i.code || !i.hint) { bad++; console.error(`✗ snippets/${f} › ${g.name} › ${i.label || '(no label)'}: needs label, code and hint`); }
      if ((i.code.match(/‹/g) || []).length !== (i.code.match(/›/g) || []).length) { bad++; console.error(`✗ snippets/${f} › ${i.label}: unbalanced ‹ ›`); }
    }
    if (!bad) console.log(`✓ snippets/${f}: ${n} snippets`);
  } catch (e) { bad++; console.error(`✗ snippets/${f}: ${e.message}`); }
}
process.exit(bad ? 1 : 0);
