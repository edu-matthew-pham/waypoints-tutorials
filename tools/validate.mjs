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
process.exit(bad ? 1 : 0);
