// Checks the cohesion board's cue mode (playground-board/widgets/cohesion.js, `mode: cue`; English › Speaking to an audience).
//   Run: node tools/check-cue.mjs [slug-part]
// Part 1 tests the cue core on small setups: counts, the cards' words and names, the card limit, written scripts, and the
// plain errors for setups cue mode does not take.
// Part 2 walks the lessons: every cue board builds; an example key set (a `-solution` region, or an explain picture) models what
// the lesson teaches (every section has a card, no card over the limit, key words no more than a quarter of the script); and a
// board check that uses the card limit or the quarter rule says so in its text (hidden pass conditions are stated).
// Pure Node, no browser: the same core the board runs. Print layout and the page are tested by experiments/cue-smoke.mjs.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { loadLessons } from './lesson.mjs';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';

const B = { widget() {} };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/cohesion.js', import.meta.url), 'utf8') + '\n;')(B);
const C = B.cohesionCore;
let bad = 0, tests = 0, boards = 0, models = 0, texts = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const T = (name, fn) => { tests++; try { fn(); } catch (e) { fail(`${name}: ${e.message.split('\n')[0]}`); } };
const model = (text) => C.build(C.specFromText(text));
const solved = (text) => { const m = model(text); const st = C.solve(m); return { m, st, v: C.values(m, st, false), cards: C.cueCards(m, st) }; };

// ---------- part 1: the core ----------
const SAMPLE = `widget: cohesion
mode: cue
max: 6
p opening: Good morning, everyone. Today I want to talk about [[litter on our oval#k]].
p point1: First, [[litter harms animals#k]]. Birds and lizards eat small pieces of plastic and get sick.
p close: So please, [[use the bins#k]]. A clean oval is something we can all be proud of.
`;
T('fresh board counts nothing', () => {
  const m = model(SAMPLE), v = C.values(m, C.freshState(m), false);
  assert.equal(v.n_sections, 3); assert.equal(v.n_cards, 0); assert.equal(v.n_missing, 3); assert.equal(v.n_key_words, 0);
  assert.equal(v.max_card_words, 0); assert.equal(v.n_over, 0); assert.equal(v.key_pct, 0);
});
T('planted key words make the cards', () => {
  const { v, cards } = solved(SAMPLE);
  assert.equal(v.n_cards, 3); assert.equal(v.n_missing, 0); assert.equal(v.n_key_words, 4 + 3 + 3);
  assert.equal(v.max_card_words, 4); assert.equal(v.n_over, 0);
  assert.deepEqual(cards.map((c) => c.name), ['Opening', 'Point 1', 'Close']);
  assert.deepEqual(cards.map((c) => c.runs), [['litter on our oval'], ['litter harms animals'], ['use the bins']]);
  assert.equal(v.script_words, 44);
  assert.equal(v.key_pct, Math.round(100 * 10 / 44));
});
T('neighbouring key words share a run, others stay apart, and a trailing mark is dropped', () => {
  const m = model(SAMPLE), st = C.freshState(m);
  // tokens of section 2: First, litter harms animals. Birds and lizards ...  pick "First," and "lizards" and "sick."
  const idx = (w) => m.tokens.findIndex((t) => t.w === w);
  [idx('First,'), idx('lizards'), idx('get'), idx('sick.')].forEach((i) => { st.keys[i] = 1; });
  const c = C.cueCards(m, st)[1];
  assert.deepEqual(c.runs, ['First', 'lizards', 'get sick']); assert.equal(c.n, 4);
});
T('a card over the limit is counted', () => {
  const m = model(SAMPLE), st = C.freshState(m);
  m.tokens.forEach((t, i) => { if (t.p === 1 && i < 20) st.keys[i] = 1; });
  const v = C.values(m, st, false), c = C.cueCards(m, st)[1];
  assert.ok(v.n_over === 1 && c.over && v.max_card_words > 6, JSON.stringify(v));
  assert.ok(v.n_cards === 1 && v.n_missing === 2);
});
T('names: planted, by place, and role names', () => {
  const named = model('widget: cohesion\nmode: cue\nrole point2: Second point\np opening: A b.\np point2: C d.\np close: E f.\n');
  assert.deepEqual(C.cueCards(named, C.freshState(named)).map((c) => c.name), ['Opening', 'Second point', 'Close']);
  const spec = C.specFromText('widget: cohesion\nmode: cue\np any: placeholder\n');
  const names = (n) => C.cueCards(C.build(spec, Array.from({ length: n }, (_, i) => 'w' + i + ' x').join('\n\n')), { keys: {} }).map((c) => c.name);
  assert.deepEqual(names(2), ['Opening', 'Close']); assert.deepEqual(names(3), ['Opening', 'Point', 'Close']);
  assert.deepEqual(names(5), ['Opening', 'Point 1', 'Point 2', 'Point 3', 'Close']);
});
T('a written script gives sections by paragraph', () => {
  const m = C.build(C.specFromText(SAMPLE), 'One two three.\n\nFour five.\n\nSix.');
  const v = C.values(m, C.freshState(m), true);
  assert.equal(v.n_sections, 3); assert.equal(v.is_written, 1); assert.equal(v.script_words, 6);
});
T('max is read and checked', () => {
  assert.equal(model(SAMPLE.replace('max: 6', 'max: 20')).max, 20);
  assert.equal(model(SAMPLE.replace('max: 6\n', '')).max, 12);
  for (const bad of ['max: 2', 'max: 41', 'max: 7.5', 'max: lots']) assert.throws(() => model(SAMPLE.replace('max: 6', bad)), /max:/);
});
T('setups cue mode does not take give a plain error', () => {
  assert.throws(() => model(SAMPLE + 'p point2: A [[{so|but}=so]] b.\n'), /no gaps/);
  assert.throws(() => model(SAMPLE + 'p point2: [[it|a]] [[they>a]].\n'), /\[\[words#k\]\]/);
  assert.throws(() => model(SAMPLE + 'p point2: A [[b#c2]].\n'), /\[\[words#k\]\]/);
  assert.throws(() => model('widget: cohesion\nmode: cue\ns topic: One.\n'), /for mode: parts/);
  assert.throws(() => model('widget: cohesion\nmode: cue\n'), /needs at least one/);
});
T('the planted key words are the same as the picture solution', () => {
  const m = model(SAMPLE + 'answer: on\n');
  assert.equal(m.answer, true);
});

// ---------- part 2: the lessons ----------
const only = process.argv[2];
const isCue = (code) => /^\s*widget:\s*cohesion\b/m.test(code) && /^\s*mode:\s*cue\b/mi.test(code);
for (const l of loadLessons().filter((x) => !only || x.slug.includes(only))) {
  const raw = readFileSync(join(l.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  if (!/cue/.test(raw)) continue;
  let lesson;
  try { lesson = parseLessonText(raw, l.slug); } catch (e) { fail(`${l.slug}: ${e.message}`); continue; }
  const read = (name) => (existsSync(join(l.dir, name)) ? readFileSync(join(l.dir, name), 'utf8') : lesson.inline?.[name]);
  const items = [];   // [where, ref, check text, when]
  const add = (where, ref, ck) => { if (ref) items.push([where, ref, ck?.type === 'board' ? ck.text : null, ck?.type === 'board' ? ck.when : null]); };
  for (const s of lesson.steps) {
    const base = s.config.try?.starter;
    add(s.id, base, s.config.check);
    for (const t of s.tasks) { add(t.id, t.config.starter || base, t.config.check); if (t.config.smaller?.starter) add(t.id + '~smaller', t.config.smaller.starter, t.config.smaller.check); }
    if (s.config.smaller?.starter) add(s.id + '~smaller', s.config.smaller.starter, s.config.smaller.check);
  }
  const ep = lesson.explainPicture, epRef = typeof ep === 'string' ? ep : ep?.ref;
  const models_ = [];   // regions that stand for finished work
  if (epRef) models_.push([`explainPicture (${epRef})`, epRef]);
  for (const [where, ref, text, when] of items) {
    let code;
    try { code = snippetFrom(read, ref); } catch (e) { fail(`${l.slug} ${where}: ${e.message}`); continue; }
    if (!isCue(code)) continue;
    boards++;
    let m;
    try { m = model(code); } catch (e) { fail(`${l.slug} ${where} (${ref}): ${e.message}`); continue; }
    const [file, region] = String(ref).split('#');
    try { models_.push([`${where} solution`, `${file}#${region}-solution`, true]); } catch { /* none */ }
    if (when) {
      texts++;
      if (/\bkey_pct\b/.test(when) && !/quarter|25/.test(text || '')) fail(`${l.slug} ${where}: the check uses key_pct, so its text must say the key words may be no more than a quarter of the script`);
      if (/\b(n_over|max_card_words)\b/.test(when) && !new RegExp('\\b' + m.max + '\\b').test(text || '')) fail(`${l.slug} ${where}: the check uses the card limit, so its text must say a card holds at most ${m.max} words`);
      if (/\bn_cards\b|\bn_missing\b/.test(when) && !/every|each|all/i.test(text || '')) fail(`${l.slug} ${where}: the check needs a card for each section, so its text must say every section needs one`);
    }
  }
  for (const [what, ref, optional] of models_) {
    let code;
    try { code = snippetFrom(read, ref); } catch (e) { if (optional) continue; fail(`${l.slug} ${what}: ${e.message}`); continue; }
    if (!isCue(code)) continue;
    models++;
    try {
      const { m, v } = solved(code);
      const planted = m.groups.some((g) => g.type === 'chain');
      if (!planted) { fail(`${l.slug} ${what}: a model set of cards needs [[words#k]] key words`); continue; }
      if (v.n_cards !== v.n_sections) fail(`${l.slug} ${what}: every section needs a card in the model (${v.n_cards} of ${v.n_sections})`);
      if (v.n_over) fail(`${l.slug} ${what}: a model card is over the limit of ${m.max} words`);
      if (v.key_pct > 25) fail(`${l.slug} ${what}: the model's key words are ${v.key_pct}% of the script (a quarter at most)`);
    } catch (e) { fail(`${l.slug} ${what}: ${e.message}`); }
  }
}
console.log(bad ? `\n${bad} problem(s)` : `✓ cue: ${tests} core tests pass; ${boards} lesson cue boards build, ${models} model sets of cards follow the limits, ${texts} board checks say their pass conditions`);
process.exit(bad ? 1 : 0);
