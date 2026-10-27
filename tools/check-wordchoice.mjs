// Checks every board check on a wordchoice board (playground-board/widgets/wordchoice.js; English lessons).
//   Run: node tools/check-wordchoice.mjs [slug-part]
// For each `type: board` check whose starter is a wordchoice setup: the setup builds, the check does NOT already hold
// at the start, and it DOES hold once every planted move is made (the widget's own solve(): every word placed in its first right band, every slot set to its first right word).
// A check that needs the student's own words (a Make step) can name a solution: the starter region's sibling
// `<region>-solution` in the same file, a setup standing for the finished work, solved the same way.
// Pure Node, no browser: the same core the board runs.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadLessons } from './lesson.mjs';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';
import { MATH } from './math-expr.mjs';

const B = { widget() {} };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/wordchoice.js', import.meta.url), 'utf8') + '\n;')(B);
const C = B.wordchoiceCore;

let bad = 0, checked = 0, boards = 0, pictures = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const only = process.argv[2];
// A solution region with `as: student` stands for a student's own text, and it counts as written (`is_written = 1`).
const vars = (text, solved) => {
  const sp = C.specFromText(text), m = C.build(sp), own = solved && /^student$/i.test(sp.as || '');
  return C.values(m, solved ? C.solve(m) : C.freshState(m));
};
// The widget's own rules, on small made-up boards (so a change to the widget is caught even before a lesson uses it).
{
  const ok = (cond, msg) => { if (!cond) fail('widget self-test: ' + msg); };
  const run = (text) => { const sp = C.specFromText(text), m = C.build(sp); return { m, v: (st) => C.values(m, st), text: (st) => C.plainText(m, st) }; };
  const sc = run('widget: wordchoice\nmode: scale\nbands: Casual | Neutral | Formal\nword a: mate = 1\nword b: sir = 3\nword c: hello = 1/2');
  const s0 = C.freshState(sc.m);
  ok(sc.v(s0).n_placed === 0 && sc.v(s0).n_right === 0 && sc.v(s0).n_words === 3, 'a scale board starts with every word in the tray');
  ok(sc.v({ place: { a: 1, b: 3, c: 2 } }).n_right === 3, 'a word with two right bands accepts either');
  ok(sc.v({ place: { a: 3 } }).n_wrong === 1 && sc.v({ place: { a: 3 } }).w_a === 3, 'a wrong band is counted and reported');
  ok(sc.v(C.solve(sc.m)).n_right === 3, 'solve places every word');
  const sw = run('widget: wordchoice\nmode: swap\nbands: Casual | Neutral | Formal\np: Tell your [[{mate@1|colleague@3}=colleague]] now. Please [[{ask@2|beg}=ask]] them.');
  ok(sw.v(C.freshState(sw.m)).n_slots === 2 && sw.v(C.freshState(sw.m)).n_set === 0, 'slots start unset');
  ok(sw.text(C.solve(sw.m)) === 'Tell your colleague now. Please ask them.', 'a swap reads as chosen: ' + sw.text(C.solve(sw.m)));
  ok(sw.v({ choice: { 1: 0, 2: 0 } }).band_1 === 1 && sw.v({ choice: { 1: 0 } }).n_wrong === 1, 'the chosen word reports its band, and a wrong choice is counted');
  for (const [bad, why] of [['widget: wordchoice\nmode: scale\nbands: A | B\nword a: x = 3\nword b: y = 1', 'a band off the scale'], ['widget: wordchoice\nmode: swap\nbands: A | B\np: x [[{a|b}=c]]', 'an answer that is not a choice']]) {
    try { run(bad); fail('widget self-test: ' + why + ' should be refused'); } catch { /* refused, as it should be */ }
  }
}
for (const l of loadLessons().filter((x) => (!only || x.slug.includes(only)))) {
  const raw = readFileSync(join(l.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  if (!/wordchoice|\.yml#/.test(raw)) continue;
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
  // Explain-it-to-me pictures: a wordchoice setup must say answer: on (so the picture shows the finished sentence) and solve.
  const ep = lesson.explainPicture;
  const epRef = typeof ep === 'string' ? ep : ep?.ref;
  if (epRef) {
    try {
      const code = snippetFrom(read, epRef);
      if (/^\s*widget:\s*wordchoice\b/m.test(code)) {
        pictures++;
        const sp = C.specFromText(code), m = C.build(sp);
        if (!m.answer) fail(`${l.slug} explainPicture (${epRef}): add "answer: on" so the picture shows the finished markings`);
        C.values(m, C.solve(m));
      }
    } catch (e) { fail(`${l.slug} explainPicture (${epRef}): ${e.message}`); }
  }
  for (const [id, ref, when] of items) {
    let starter;
    try { starter = snippetFrom(read, ref); } catch (e) { fail(`${l.slug} ${id}: ${e.message}`); continue; }
    if (!/^\s*widget:\s*wordchoice\b/m.test(starter)) continue;
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
console.log(bad ? `\n${bad} problem(s)` : `✓ wordchoice: ${boards} boards start, and ${checked} board checks fail at the start and pass when finished; ${pictures} explain pictures solve`);
process.exit(bad ? 1 : 0);
