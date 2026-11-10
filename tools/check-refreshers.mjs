// `npm run check-refreshers`: the shared refresher blocks and cross-subject links (roadmap/shared.md › Prior-knowledge
// tools). Node only, no browser: every block in data/refreshers/ is valid, bad blocks and bad uses are caught, a lesson
// shows the right lines and check, and cross-subject links keep their rules (earlier years only, at most two, the
// lightest level first).
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { loadRefreshers, validateRefresher, prepareRefresher, refresherUse, refresherView, yearFromNodes } from './refreshers.mjs';
import { crossLinks, MAX_CROSS } from './prior-links.mjs';
import { validateLessonCore } from './lesson-core.mjs';
import { openDecisions } from './cross-links.mjs';

let n = 0;
const t = (name, fn) => { fn(); n++; console.log(`  ✓ ${name}`); };

// The real blocks.
const { blocks, errors } = loadRefreshers({ readdirSync, readFileSync, existsSync, join, parse });
t('every block in data/refreshers/ is valid', () => assert.deepEqual(errors, []));
t('the five first blocks are there (new blocks may join them)', () => { for (const id of ['delta', 'graph-over-time', 'kelvin', 'percentage', 'rate']) assert.ok(blocks[id], id); });
t('maths blocks open "From maths" and name what they cover', () => { for (const id of ['rate', 'percentage', 'graph-over-time']) { assert.equal(blocks[id].from, 'maths'); assert.ok(blocks[id].covers.length); } });

// Bad blocks are caught.
const bad = (b) => validateRefresher('x', b);
t('missing fold and summary', () => assert.ok(bad({ title: 'X', page: false }).length >= 2));
t('a fold that runs past three sentences', () => assert.ok(bad({ title: 'X', summary: 's', page: false, fold: 'One. Two. Three. Four.' }).some((e) => /sentences/.test(e))));
t('a check type other than question or number', () => assert.ok(bad({ title: 'X', summary: 's', page: false, fold: 'One.', check: { type: 'code' } }).some((e) => /question or number/.test(e))));
t('a number check without an answer', () => assert.ok(bad({ title: 'X', summary: 's', page: false, fold: 'One.', check: { type: 'number', q: 'How many?' } }).some((e) => /answer/.test(e))));
t('an unknown field', () => assert.ok(bad({ title: 'X', summary: 's', page: false, fold: 'One.', colour: 'red' }).some((e) => /unknown field "colour"/.test(e))));
t('a page is needed unless page: false', () => assert.ok(bad({ title: 'X', summary: 's', fold: 'One.' }).some((e) => /page/.test(e))));

// What a use shows.
t('refresher: rate and { block, part, example } both read', () => {
  assert.deepEqual(refresherUse('rate'), { block: 'rate', parts: null, example: '' });
  assert.deepEqual(refresherUse({ block: 'percentage', part: 'of', example: 'Here.' }), { block: 'percentage', parts: ['of'], example: 'Here.' });
});
t('one part shows its own line and its own check', () => {
  const v = refresherView(blocks.percentage, refresherUse({ block: 'percentage', part: 'of' }));
  assert.equal(v.lines.length, 1); assert.match(v.lines[0], /10% of it/); assert.equal(v.check.answer, 50);
});
t('no part shows every line and the block check', () => {
  const v = refresherView(blocks.percentage, refresherUse('percentage'));
  assert.equal(v.lines.length, 2); assert.equal(v.check.answer, 40);
});
t('a lesson year from its nodes', () => { assert.equal(yearFromNodes('AC9S10U05 n3'), 10); assert.equal(yearFromNodes(['AC9S7U05 n4', 'AC9M8M05']), 7); assert.equal(yearFromNodes('AC9MFN01'), 0); assert.equal(yearFromNodes(null), null); });

// refresher: in a lesson is validated.
const lessonWith = (refresher, tasks = false) => ({ slug: 'science/x/y', title: 'Y', language: 'science', steps: [{ id: 'step-1', title: 'S', body: '', tasks: [], config: { stage: 'investigate', check: { type: 'reflect', text: 'Done.' }, refresher } }] });
const errsOf = (r) => validateLessonCore(lessonWith(r), () => null, { refreshers: blocks }, {}).filter((e) => /refresher/.test(e));
t('a known block passes', () => assert.deepEqual(errsOf({ block: 'rate', example: 'Here, metres for each second.' }), []));
t('an unknown block is named', () => assert.ok(errsOf('speed').some((e) => /no refresher block "speed"/.test(e))));
t('an unknown part is named', () => assert.ok(errsOf({ block: 'rate', part: 'of' }).some((e) => /no part "of"/.test(e))));
t('an example over one line is refused', () => assert.ok(errsOf({ block: 'rate', example: 'one\ntwo' }).some((e) => /one line/.test(e))));

// Cross-subject links.
const data = new Map([
  ['AC9M8M05', { year: 8, nodes: [{ n: 1 }] }], ['AC9M7A04', { year: 7, nodes: [{ n: 1 }] }],
  ['AC9M8A04', { year: 8, nodes: [{ n: 1 }] }], ['AC9M9A01', { year: 9, nodes: [{ n: 1 }] }], ['AC9M5N04', { year: 5, nodes: [{ n: 1 }] }],
  ['AC9HH7S01', { year: 7, nodes: [{ n: 1 }] }],
]);
const L = (slug, node, uses = []) => ({ slug, node, uses });
const maths = [L('maths/m8/rates', 'AC9M8M05 n1'), L('maths/a7/graphs', 'AC9M7A04 n1'), L('maths/a8/gradient', 'AC9M8A04 n1'), L('maths/a9/lines', 'AC9M9A01 n1'), L('maths/b7/hundred', 'AC9M5N04 n1'), L('history/e7/dating', 'AC9HH7S01 n1')];
const run = (l) => crossLinks([...maths, l], { data, lessonYear: (x) => yearFromNodes(x.node), refreshers: blocks });
t('earlier year, covered by a block: lands on the short page', () => { const r = run(L('science/p10/acc', 'AC9S10U05 n3', ['AC9M8M05 n1'])); assert.deepEqual(r.links.get('science/p10/acc'), [{ kind: 'refresh', block: 'rate', ref: 'AC9M8M05 n1', year: 8 }]); });
t('earlier year, no block: the lesson (the build picks its recap card)', () => { const r = run(L('science/p10/acc', 'AC9S10U05 n3', ['AC9M8A04 n1'])); assert.equal(r.links.get('science/p10/acc')[0].slug, 'maths/a8/gradient'); });
t('same year: no link, and a warning', () => { const r = run(L('science/c7/heat', 'AC9S7U05 n4', ['AC9M7A04 n1'])); assert.equal(r.links.get('science/c7/heat'), undefined); assert.match(r.warnings[0], /never link forward/); });
t('a later year: no link, and a warning', () => { const r = run(L('science/c8/x', 'AC9S8U05 n1', ['AC9M9A01 n1'])); assert.equal(r.links.get('science/c8/x'), undefined); assert.equal(r.warnings.length, 1); });
t(`at most ${MAX_CROSS} links, with a warning for the rest`, () => { const r = run(L('science/p10/acc', 'AC9S10U05 n3', ['AC9M8M05 n1', 'AC9M8A04 n1', 'AC9M5N04 n1'])); assert.equal(r.links.get('science/p10/acc').length, MAX_CROSS); assert.match(r.warnings[0], /only the first 2/); });
t('a reverse link back in years (Year 9 science to Year 7 History)', () => { const r = run(L('science/c9/halflife', 'AC9S9U06 n4', ['AC9HH7S01 n1'])); assert.equal(r.links.get('science/c9/halflife')[0].slug, 'history/e7/dating'); });
t('same-subject uses: are left to the same-subject links', () => { const r = run(L('maths/a9/other', 'AC9M9A02 n1', ['AC9M8A04 n1'])); assert.equal(r.links.get('maths/a9/other'), undefined); assert.deepEqual(r.warnings, []); });
t('no year known: no link, and a warning', () => { const r = run(L('code/x/y', undefined, ['AC9M8M05 n1'])); assert.equal(r.links.get('code/x/y'), undefined); assert.match(r.warnings[0], /year is unknown/); });

// prepareRefresher keeps question answers right after arranging the options.
t('arranged question options keep the right answer', () => { const k = prepareRefresher('g', parse(readFileSync('data/refreshers/graph-over-time.yml', 'utf8'))).check; assert.equal(k.options[k.answer], 'Staying the same'); });

// Open decisions from Kit's cross-subject links (tools/cross-links.mjs).
{
  const D = (year, extra = {}) => ({ year, prior: [], cross: [], ...extra });
  const kitData = (lessonUses = {}) => new Map([
    ['AC9S10U01', D(10, { cross: [{ to: 'AC9M7P01', nodes: [4], to_nodes: [], timing: 'earlier' }, { to: 'AC9M10P01', nodes: [], to_nodes: [], timing: 'earlier' }, { to: 'AC9M9N01', nodes: [], to_nodes: [], timing: 'same_year' }], prior: ['AC9S9U02'] })],
    ['AC9S9U02', D(9)], ['AC9M7P01', D(7)], ['AC9M10P01', D(10)], ['AC9M9N01', D(9)], ['AC9M7N08', D(7)],
    ['AC9S8U01', D(8, { cross: [{ to: 'AC9M7N08', nodes: [], to_nodes: [], timing: 'earlier' }] })],
  ]);
  const base = [L('maths/p7/sample', 'AC9M7P01 n1'), L('maths/p10/x', 'AC9M10P01 n1'), L('maths/n9/x', 'AC9M9N01 n1'), L('science/b9/gametes', 'AC9S9U02 n1')];
  const sci = (uses = [], assumes = []) => [{ ...L('science/b10/dna', 'AC9S10U01 n1', uses), assumes, order: 1 }, { ...L('science/b10/punnett', 'AC9S10U01 n4'), order: 3 }];
  const run2 = (ls) => openDecisions([...base, ...ls], { data: kitData(), refreshers: blocks });
  t('open link shown on the lesson for the linked node', () => { const r = run2(sci()); assert.deepEqual(r.cross.map((x) => [x.lesson, x.to]), [['science/b10/punnett', 'AC9M7P01']]); });
  t('a same-year or later link is never listed', () => { const r = run2(sci()); assert.ok(!r.cross.some((x) => ['AC9M10P01', 'AC9M9N01'].includes(x.to))); });
  t('uses: answers it (on any lesson of the standard)', () => assert.equal(run2(sci(['AC9M7P01 n1'])).cross.length, 0));
  t('assumes: answers it too (no link: taught in the lesson)', () => assert.equal(run2(sci([], ['AC9M7P01'])).cross.length, 0));
  t('nothing on the site to link to: not listed', () => { const r = openDecisions([...sci(), L('science/b8/cells', 'AC9S8U01 n1')], { data: kitData(), refreshers: blocks }); assert.ok(!r.cross.some((x) => x.to === 'AC9M7N08')); });
  t('opener with an on-site Years 7+ prior and no answer is listed', () => { const r = run2(sci()); assert.deepEqual(r.openers.map((x) => [x.lesson, x.prior.map((p) => p.code)]), [['science/b10/dna', ['AC9S9U02']]]); });
  t('opener answered by uses: is not listed', () => assert.equal(run2(sci(['AC9S9U02 n1'])).openers.length, 0));
}

console.log(`check-refreshers: ${n} passed`);
