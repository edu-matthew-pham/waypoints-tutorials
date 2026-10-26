// Checks every board check on a cohesion board (playground-board/widgets/cohesion.js; English lessons).
//   Run: node tools/check-cohesion.mjs [slug-part]
// For each `type: board` check whose starter is a cohesion setup: the setup builds, the check does NOT already hold
// at the start, and it DOES hold once every planted move is made (the widget's own solve(): each linking word traced
// to its answer, unclear links marked and fixed, chains coloured, gaps chosen, sentences labelled and put in order).
// A check that needs the student's own words (a Make step) can name a solution: the starter region's sibling
// `<region>-solution` in the same file, a setup standing for the finished work, solved the same way.
// Pure Node, no browser: the same core the board runs.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadLessons } from './lesson.mjs';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';
import { MATH } from './math-expr.mjs';

const B = { widget() {} };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/cohesion.js', import.meta.url), 'utf8') + '\n;')(B);
const C = B.cohesionCore;

let bad = 0, checked = 0, boards = 0, pictures = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const only = process.argv[2];
// A solution region with `as: student` stands for a student's own text: its linking words count as words the student
// marked and traced, and it counts as written (`is_written = 1`).
const vars = (text, solved) => {
  const sp = C.specFromText(text), m = C.build(sp), own = solved && /^student$/i.test(sp.as || '');
  return C.values(m, solved ? C.solve(m, own) : C.freshState(m), own);
};
for (const l of loadLessons().filter((x) => (!only || x.slug.includes(only)))) {
  const raw = readFileSync(join(l.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  if (!/cohesion|\.yml#/.test(raw)) continue;
  let lesson;
  try { lesson = parseLessonText(raw, l.slug); } catch (e) { fail(`${l.slug}: ${e.message}`); continue; }
  const read = (name) => (existsSync(join(l.dir, name)) ? readFileSync(join(l.dir, name), 'utf8') : lesson.inline?.[name]);
  const items = [];
  for (const s of lesson.steps) {
    const base = s.config.try?.starter;
    if (base) items.push([s.id, base, s.config.check?.type === 'board' ? s.config.check.when : null]);
    for (const t of s.tasks) {
      const ref = t.config.starter || base;
      if (ref) items.push([t.id, ref, t.config.check?.type === 'board' ? t.config.check.when : null]);
      const sm = t.config.smaller || null;
      if (sm?.starter) items.push([t.id + '~smaller', sm.starter, sm.check?.type === 'board' ? sm.check.when : null]);
    }
    if (s.config.smaller?.starter) items.push([s.id + '~smaller', s.config.smaller.starter, s.config.smaller.check?.type === 'board' ? s.config.smaller.check.when : null]);
  }
  // Explain-it-to-me pictures: a cohesion setup must say answer: on (so the picture shows the finished markings) and solve.
  const ep = lesson.explainPicture;
  const epRef = typeof ep === 'string' ? ep : ep?.ref;
  if (epRef) {
    try {
      const code = snippetFrom(read, epRef);
      if (/^\s*widget:\s*cohesion\b/m.test(code)) {
        pictures++;
        const sp = C.specFromText(code), m = C.build(sp);
        if (!m.answer) fail(`${l.slug} explainPicture (${epRef}): add "answer: on" so the picture shows the finished markings`);
        C.values(m, C.solve(m), false);
      }
    } catch (e) { fail(`${l.slug} explainPicture (${epRef}): ${e.message}`); }
  }
  for (const [id, ref, when] of items) {
    let starter;
    try { starter = snippetFrom(read, ref); } catch (e) { fail(`${l.slug} ${id}: ${e.message}`); continue; }
    if (!/^\s*widget:\s*cohesion\b/m.test(starter)) continue;
    boards++;
    let start, done;
    if (/^\s*answer:\s*on\b/mi.test(starter)) fail(`${l.slug} ${id} (${ref}): answer: on starts the board solved, so it is for pictures only, never a step`);
    try { start = vars(starter, false); } catch (e) { fail(`${l.slug} ${id} (${ref}): the board cannot start: ${e.message}`); continue; }
    if (!when) continue;
    const [file, region] = String(ref).split('#');
    let solution = starter;
    try { solution = snippetFrom(read, `${file}#${region}-solution`); } catch { /* the starter's own planted answers */ }
    try { done = vars(solution, true); } catch (e) { fail(`${l.slug} ${id}: the solution cannot be read: ${e.message}`); continue; }
    checked++;
    try {
      const used = MATH.checkCondition(when).vars.filter((v) => !(v in start));
      if (used.length) { fail(`${l.slug} ${id}: when "${when}" uses ${used.join(', ')}, which the board does not report`); continue; }
      if (MATH.holds(when, { vars: start, points: {} })) fail(`${l.slug} ${id}: when "${when}" already holds at the start`);
      if (!MATH.holds(when, { vars: done, points: {} })) fail(`${l.slug} ${id}: the finished board does not pass\n    when: ${when}\n    values: ${JSON.stringify(done)}`);
    } catch (e) { fail(`${l.slug} ${id}: ${e.message}`); }
  }
}
console.log(bad ? `\n${bad} problem(s)` : `✓ cohesion: ${boards} boards start, and ${checked} board checks fail at the start and pass when finished; ${pictures} explain pictures solve`);
process.exit(bad ? 1 : 0);
