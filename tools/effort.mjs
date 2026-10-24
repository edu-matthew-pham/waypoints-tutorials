// Effort lint: the lesson makes the right things hard and says so (AUTHORING › Effort and struggle).
// Warnings only, never a failure. `npm run validate` prints one summary line; `npm run effort` lists every gap.
//   no-struggle  teacher.yml has no `struggle:` (where the difficulty is on purpose, and what to say instead of rescuing)
//   no-recap     teacher.yml has no `goals:`, so the lesson ends without a "Now you can" list
//   hint-gives   a first hint gives the answer away: a code span from the solution that the starter does not have,
//                or the answer of a number check
//   no-smaller   (npm run effort only, never in validate's summary) no step or task has a smaller: lead-in, and the
//                lesson teaches a hinge node (Kit's known sticking point: maths, science, Digital systems) or has a
//                stuck: list (teacher.yml or the lesson.md teacher block). One line per lesson, never per step.
import { workItems } from './lesson-core.mjs';

const squash = (s) => String(s).replace(/\s+/g, '');
const firstHint = (c) => [].concat(c?.hint ?? [])[0];

/** Gaps for every lesson in a course with units (lessons outside units are drafts and free pages). */
export function auditEffort(lessons, getSnippet, progressions = null) {
  const gaps = [];
  const add = (l, kind, where, why) => gaps.push({ slug: l.slug, kind, where, why });
  for (const l of lessons) {
    if (!l.unit || !l.teacher) continue;
    const T = l.teacher;
    if (!T.struggle) add(l, 'no-struggle', 'teacher.yml', 'add struggle: where students should find it hard, and what to say instead of helping');
    if (!T.goals?.length) add(l, 'no-recap', 'teacher.yml', 'add goals: ("I can …"); they become the "Now you can" list at the end');
    const snip = (ref) => { try { return getSnippet(l.dir, ref); } catch { return ''; } };
    // Code tasks: a code span in the first hint that is in the solution but not in the starter writes the answer.
    for (const w of workItems(l)) {
      const hint = firstHint(w.task?.config) ?? (w.task ? undefined : firstHint(w.step.config));
      const ref = T.solutions?.[w.id];
      if (!hint || !ref) continue;
      const sol = squash(snip(ref));
      const start = squash(snip(w.task?.config.starter || w.step.config.try?.starter || ''));
      for (const [, span] of String(hint).matchAll(/`([^`]+)`/g)) {
        const s = squash(span);
        if (s.length >= 10 && sol.includes(s) && !start.includes(s)) { add(l, 'hint-gives', `${w.id} hint 1`, `\`${span}\` is solution code; point at the idea or the line instead`); break; }
      }
    }
    // Number checks: the first hint states the answer.
    for (const s of l.steps) for (const [id, c] of [[s.id, s.config], ...s.tasks.map((t) => [t.id, t.config])]) {
      const k = c.check, hint = firstHint(c);
      if (!hint || k?.type !== 'number' || k.answer === undefined) continue;
      const a = String(k.answer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (String(k.answer).length >= 2 && new RegExp(`(^|[^\\d.])${a}([^\\d]|$)`).test(String(hint))) add(l, 'hint-gives', `${id} hint 1`, `states the answer (${k.answer})`);
    }
  }
  // Hinge lessons with no smaller step (only when progressions are passed: npm run effort).
  if (progressions) for (const l of lessons) {
    if (!l.unit) continue;
    const hinge = [].concat(l.node ?? []).map((r) => String(r).match(/^(\S+)\s+n(\d+)$/)).filter(Boolean)
      .find(([, code, n]) => progressions.get(code)?.nodes.find((x) => x.n === Number(n))?.hinge);
    const has = l.steps.some((s) => s.config.smaller || s.tasks.some((t) => t.config.smaller));
    if (has) continue;
    // stuck: is read from the parsed teacher data, so single-file lessons (teacher block in lesson.md) count too.
    const stuck = Array.isArray(l.teacher?.stuck) ? l.teacher.stuck.length : 0;
    if (hinge) add(l, 'no-smaller', 'lesson.md', `${hinge[0]} is a hinge node: add smaller: (a folded easier check) where students stick; the node's criteria and stuck: say where`);
    else if (stuck) add(l, 'no-smaller', 'lesson.md', `${stuck} stuck: ${stuck > 1 ? 'entries' : 'entry'} and no smaller:; add one where a stuck: ask is a thinking step (not an error message the friendly errors already answer)`);
  }
  return gaps;
}

export const EFFORT_KINDS = { 'no-struggle': 'no struggle note', 'no-recap': 'no goals for the recap', 'hint-gives': 'first hints that give the answer', 'no-smaller': 'lessons with a hinge node or stuck: list and no smaller step' };

export function summary(gaps) {
  const n = (k) => gaps.filter((g) => g.kind === k).length;
  return Object.entries(EFFORT_KINDS).filter(([k]) => n(k)).map(([k, label]) => `${n(k)} ${label}`).join(', ');
}

// `npm run effort [path]`: every gap, grouped by course, with a count per course.
if (import.meta.url === `file://${process.argv[1]}`) {
  const { loadLessons, getSnippet } = await import('./lesson.mjs');
  const { loadProgressions } = await import('./progressions.mjs');
  const gaps = auditEffort(loadLessons(process.argv[2]), getSnippet, loadProgressions());
  if (!gaps.length) { console.log('✓ effort: every lesson names its hard part, ends with a recap, and no first hint gives the answer'); process.exit(0); }
  const byCourse = {};
  for (const g of gaps) (byCourse[g.slug.split('/').slice(0, -1).join('/')] ??= []).push(g);
  for (const [course, gs] of Object.entries(byCourse)) {
    console.log(`\n${course} (${summary(gs)})`);
    for (const g of gs) console.log(`  ${g.slug.split('/').pop()} › ${g.where}: ${g.why}`);
  }
  console.log(`\n${gaps.length} gap(s): ${summary(gaps)}`);
}
