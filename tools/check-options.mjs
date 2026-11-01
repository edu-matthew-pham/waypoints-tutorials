// `npm run check-options`: questions whose right answer gives itself away by length (tools/option-length.mjs).
//   npm run check-options                 counts by subject and course, then every flagged question
//   npm run check-options -- science/biology-7    only lessons under that path
//   npm run check-options -- --counts     counts only
//   npm run check-options -- --update     rewrite data/option-length-baseline.json (the known list validate skips)
// The baseline only ever shrinks: run --update after fixing a course; never add new questions to it by hand.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { loadLessons } from './lesson.mjs';
import { flaggedQuestions, questionChecks, RATIO, GAP } from './option-length.mjs';

export const BASELINE = 'data/option-length-baseline.json';
const args = process.argv.slice(2);
const update = args.includes('--update'), countsOnly = args.includes('--counts');
const prefix = args.find((a) => !a.startsWith('--'));

const lessons = loadLessons().filter((l) => !prefix || l.slug.startsWith(prefix));
const flagged = flaggedQuestions(lessons);
const total = lessons.reduce((n, l) => n + questionChecks(l).filter((c) => c.check.type === 'question').length, 0);

if (update) {
  if (prefix) { console.error('--update rewrites the whole baseline; run it without a path.'); process.exit(1); }
  const old = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf8')).keys || [] : [];
  const keys = flagged.map((f) => f.key).sort();
  const added = keys.filter((k) => !old.includes(k));
  if (old.length && added.length) {
    console.error(`✗ ${added.length} flagged questions are not in the baseline (new or edited). Fix them rather than adding them:`);
    added.forEach((k) => console.error('  ' + k));
    process.exit(1);
  }
  writeFileSync(BASELINE, JSON.stringify({ about: 'Known questions whose right answer is much longer than the wrong ones (tools/option-length.mjs). validate skips these; the list only shrinks. Regenerate with npm run check-options -- --update.', keys }, null, 1) + '\n');
  console.log(`✓ ${BASELINE}: ${keys.length} questions (was ${old.length})`);
  process.exit(0);
}

const by = (f) => f.slug.split('/').slice(0, 2).join('/');
const courses = new Map();
for (const f of flagged) courses.set(by(f), (courses.get(by(f)) || 0) + 1);
const subjects = new Map();
for (const [c, n] of courses) { const s = c.split('/')[0]; subjects.set(s, (subjects.get(s) || 0) + n); }

console.log(`Right answer more than ${RATIO}× the longest wrong option and ${GAP}+ characters longer: ${flagged.length} of ${total} question checks.\n`);
for (const [s, n] of [...subjects].sort((a, b) => b[1] - a[1])) {
  console.log(`${s}: ${n}`);
  for (const [c, m] of [...courses].filter(([c]) => c.split('/')[0] === s).sort((a, b) => b[1] - a[1])) console.log(`  ${c}: ${m}`);
}
if (!countsOnly) {
  console.log('');
  for (const f of flagged) console.log(`${f.key}  (${f.right} vs ${f.longestWrong} chars)  ${f.q}`);
}
