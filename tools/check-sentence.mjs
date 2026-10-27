// Checks every board check on a sentence board (playground-board/widgets/sentence.js; English lessons).
//   Run: node tools/check-sentence.mjs [slug-part]
// For each `type: board` check whose starter is a sentence setup: the setup builds, the check does NOT already hold
// at the start, and it DOES hold once every planted move is made (the widget's own solve(): every piece placed in the first right order, every slot set to its first right mark).
// A check that needs the student's own words (a Make step) can name a solution: the starter region's sibling
// `<region>-solution` in the same file, a setup standing for the finished work, solved the same way.
// Pure Node, no browser: the same core the board runs.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadLessons } from './lesson.mjs';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';
import { MATH } from './math-expr.mjs';

const B = { widget() {} };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/sentence.js', import.meta.url), 'utf8') + '\n;')(B);
const C = B.sentenceCore;

let bad = 0, checked = 0, boards = 0, pictures = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const only = process.argv[2];
// A solution region with `as: student` stands for a student's own text, and it counts as written (`is_written = 1`).
const vars = (text, solved) => {
  const sp = C.specFromText(text), m = C.build(sp), own = solved && /^student$/i.test(sp.as || '');
  return C.values(m, solved ? C.solve(m, own) : C.freshState(m), own);
};
// The widget's own rules, on small made-up boards (so a change to the widget is caught even before a lesson uses it).
{
  const ok = (cond, msg) => { if (!cond) fail('widget self-test: ' + msg); };
  const run = (text) => { const sp = C.specFromText(text), m = C.build(sp); return { m, v: (st, w) => C.values(m, st, w), text: (st) => C.plainText(m, st) }; };
  const b = run('widget: sentence\nmode: build\ntile a: although the creek was low^\ntile b: the walkers crossed it\ndecoy d: because\nans: a b\nans: b a');
  const st = C.freshState(b.m);
  ok(b.v(st).in_order === 0 && b.v(st).n_placed === 0, 'a build board starts empty');
  ok(b.text(C.solve(b.m)) === 'Although the creek was low, the walkers crossed it.', 'fronted piece gets a capital and a comma: ' + b.text(C.solve(b.m)));
  const st2 = { placed: ['b', 'a'] };
  ok(b.text(st2) === 'The walkers crossed it although the creek was low.' && b.v(st2).in_order === 1, 'second right order passes, with no comma');
  ok(b.v({ placed: ['a', 'd', 'b'] }).n_decoys_used === 1 && b.v({ placed: ['a', 'd', 'b'] }).in_order === 0, 'a decoy is counted and fails the order');
  const p = run('widget: sentence\nmode: punct\np: The creek was low[[{,|;|nothing}=;]] the walkers crossed it. They said [[{(|nothing}=(]]carefully[[{)|nothing}=)]] hello [[{–|,}=–]] twice.');
  ok(p.v(C.freshState(p.m)).n_set === 0 && p.v(C.freshState(p.m)).n_slots === 4, 'slots start unset');
  ok(p.text(C.solve(p.m)) === 'The creek was low; the walkers crossed it. They said (carefully) hello – twice.', 'marks attach by where the slot sits: ' + p.text(C.solve(p.m)));
  ok(p.v({ choice: { 1: 0, 2: 0, 3: 0, 4: 0 } }).n_wrong === 1, 'a wrong mark is counted');
  const q = run("widget: sentence\nmode: punct\np: 'Where is the bridge[[{?|.|,}=?]]' asked Ben. Ava said[[{,|.}=,]] 'hello.'");
  ok(q.text(C.solve(q.m)) === "'Where is the bridge?' asked Ben. Ava said, 'hello.'", 'a quotation mark straight after a slot joins it: ' + q.text(C.solve(q.m)));
  const w = run('widget: sentence\nmode: write\ncounts: commas who\np: Nib likes cats.');
  ok(w.v(C.freshState(w.m)).is_written === 0, 'unchanged starting text is not written');
  const wv = w.v({ text: 'The bridge, which is old, is closed; people use the other one. It rained.' });
  ok(wv.is_written === 1 && wv.n_commas === 2 && wv.n_semicolons === 1 && wv.n_who === 1 && wv.n_sentences === 2, 'counts: ' + JSON.stringify(wv));
  try { run('widget: sentence\nmode: build\ntile a: x y\ntile b: z\nans: a'); fail('widget self-test: ans missing a piece should be refused'); } catch { /* refused, as it should be */ }
}
for (const l of loadLessons().filter((x) => (!only || x.slug.includes(only)))) {
  const raw = readFileSync(join(l.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  if (!/sentence|\.yml#/.test(raw)) continue;
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
  // Explain-it-to-me pictures: a sentence setup must say answer: on (so the picture shows the finished sentence) and solve.
  const ep = lesson.explainPicture;
  const epRef = typeof ep === 'string' ? ep : ep?.ref;
  if (epRef) {
    try {
      const code = snippetFrom(read, epRef);
      if (/^\s*widget:\s*sentence\b/m.test(code)) {
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
    if (!/^\s*widget:\s*sentence\b/m.test(starter)) continue;
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
console.log(bad ? `\n${bad} problem(s)` : `✓ sentence: ${boards} boards start, and ${checked} board checks fail at the start and pass when finished; ${pictures} explain pictures solve`);
process.exit(bad ? 1 : 0);
