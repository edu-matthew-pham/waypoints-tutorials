// `npm run check-appbuilder`: every code-checked task on an App Builder step (Run steps too, not only Modify and Make), checked statically with the same rules the
// lesson page uses (lesson-core evalRules, kind 'appbuilder') on the project turned into plain text by App Builder's own
// sheet-text module (playground-appbuilder/sheet-text.mjs), so no browser is needed:
//   1. the teacher solution (a project JSON region) passes;
//   2. the starter the student begins from does not;
//   3. no earlier task's solution in the same step does (a step keeps one project, so its tasks build on each other).
// Also: every starter and solution parses as a project and names nothing that isn't in it (expressions are checked by
// App Builder's own checker when the student opens it, so here only JSON and the check rules). Exit 1 on any failure.
//   node tools/check-appbuilder.mjs [course]
import { loadLessons, getSnippet, evalRules, unlockKind } from './lesson.mjs';
import { sheetText } from '../playground-appbuilder/sheet-text.mjs';

const only = process.argv[2];
const lessons = loadLessons().filter((l) => l.steps.some((s) => s.config.try?.playground === 'appbuilder' || s.tasks.some((t) => t.config.try?.playground === 'appbuilder')) && (!only || l.slug.startsWith(only + '/')))
  .sort((a, b) => a.slug.localeCompare(b.slug));
let fails = 0, tasks = 0, noSolution = 0;
const fail = (m) => { fails++; console.log('  ✗ ' + m); };
const project = (l, ref) => {
  let src; try { src = getSnippet(l.dir, ref); } catch (e) { fail(`${ref}: ${e.message}`); return null; }
  try { return JSON.parse(src); } catch (e) { fail(`${ref} is not a project (JSON): ${e.message}`); return null; }
};
const text = (p) => (p ? sheetText(p) : '');
// every step or task with a code check, on a step whose playground is App Builder
const items = (l) => l.steps.flatMap((s) => (s.tasks.length ? s.tasks.map((t) => ({ id: t.id, step: s, task: t, check: t.config.check })) : [{ id: s.id, step: s, task: null, check: s.config.check }]));
const failing = (rules, p) => evalRules(rules, text(p), 'appbuilder').filter((r) => !r.ok).map((r) => r.label);

for (const l of lessons) {
  console.log(l.slug);
  const sol = l.teacher?.solutions || {};
  for (const s of l.steps) {
    const ref = s.config.try?.playground === 'appbuilder' && s.config.try.starter;
    if (ref) project(l, ref);
  }
  for (const w of items(l).filter((x) => x.check?.type === 'code' && x.check.rules)) {
    if (unlockKind(l, w.step) !== 'appbuilder') continue;
    tasks++;
    const before = fails;
    // Run-step tasks can't have teacher.yml solutions (those are for Modify and Make), so their answers sit in app.json as
    // regions named after the task: step-4#t2 -> app.json#sol-step-4-t2.
    if (!sol[w.id] && !['modify', 'make'].includes(w.step.config.stage)) sol[w.id] = 'app.json#sol-' + w.id.replace('#', '-');
    const s = sol[w.id] ? project(l, sol[w.id]) : null;
    if (!sol[w.id]) { noSolution++; console.log(`  · ${w.id}: no solution in teacher.yml`); }
    else if (s) { const f = failing(w.check.rules, s); if (f.length) fail(`${w.id}: the solution ${sol[w.id]} fails: ${f.join('; ')}`); }
    const starterRef = w.task?.config.try?.starter ?? w.step.config.try?.starter;
    const st = starterRef ? project(l, starterRef) : null;
    if (!failing(w.check.rules, st).length) fail(`${w.id}: the starter ${starterRef || '(empty)'} already passes`);
    if (w.task) for (const e of items(l).filter((x) => x.step === w.step && x.task && x.task.index < w.task.index && x.check?.type === 'code')) {
      const es = sol[e.id] ? project(l, sol[e.id]) : null;
      if (es && !failing(w.check.rules, es).length) fail(`${w.id}: the solution to ${e.id} already passes it, so it ticks for free`);
    }
    if (fails === before) console.log(`  ✓ ${w.id}`);
  }
}
console.log(`\n${tasks} code-checked task(s) in ${lessons.length} App Builder lesson(s); ${noSolution} without a solution; ${fails ? `${fails} FAILED` : 'all passed'}`);
process.exit(fails ? 1 : 0);
