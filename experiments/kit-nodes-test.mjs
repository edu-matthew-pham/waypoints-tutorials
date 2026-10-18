// Kit node data and Create's pre-fill (tools/kit-nodes.mjs), without a browser:
// the imported History data has what pointer pages need; node references parse; success criteria become "I can"
// goals; one node pre-fills a Primer that validates; several nodes never merge silently; misconceptions are offered
// from the node (hinge reason) and written only when picked; the prompt text carries the node data.
//   node experiments/kit-nodes-test.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse as YAMLparse } from 'yaml';
import { validateLessonSource } from '../tools/lesson-validation.mjs';
import { parseNodeRef, nodeKey, nodeParam, findNode, goalFromCriterion, primerFromNodes, misconceptionsOf, widthSuggestions, nodesPromptText, compactCurriculum, isReviewed, subjectOfCode, WIDTH } from '../tools/kit-nodes.mjs';

const cur = JSON.parse(readFileSync('data/curriculum/history.json', 'utf8'));
const review = YAMLparse(readFileSync('data/review/history.yml', 'utf8'));

// Imported data: every Years 7–10 History node has a checkpoint, criteria, width and only Kit's five response modes.
const ds = cur.descriptors.filter((d) => d.year >= 7);
assert.ok(ds.length >= 100 && ds.some((d) => /S\d\d$/.test(d.code)) && ds.some((d) => /K\d\d+$/.test(d.code)));
for (const d of ds) {
  assert.ok(d.kit?.startsWith('data/history/'), `${d.code} kit file`);
  assert.ok(['Knowledge and understanding', 'Historical skills'].includes(d.strand), d.code);
  for (const n of d.nodes) {
    assert.ok(n.checkpoint && n.label && Array.isArray(n.criteria) && n.width && Array.isArray(n.modes), `${d.code} n${n.n}`);
    for (const m of n.modes) assert.ok(WIDTH[m.mode], `${d.code} n${n.n}: ${m.mode} is a response mode`);
  }
}
assert.equal(review.status, 'draft');
assert.equal(isReviewed(review, { code: 'AC9HH7S03', n: 1 }), false);
assert.equal(isReviewed({ status: 'draft', nodes: { 'AC9HH7S03 n1': 'reviewed' } }, { code: 'AC9HH7S03', n: 1 }), true, 'node-level review');
assert.equal(isReviewed({ status: 'reviewed' }, { code: 'AC9HH7S03', n: 2 }), true, 'subject-level review');

// References.
for (const s of ['AC9HH7S03.1', 'AC9HH7S03 n1', 'ac9hh7s03-n1', 'AC9HH7S03:1']) assert.deepEqual(parseNodeRef(s), { code: 'AC9HH7S03', n: 1 }, s);
assert.deepEqual(parseNodeRef('AC9HH9K014.2'), { code: 'AC9HH9K014', n: 2 }, "Kit's 3-digit code");
assert.equal(parseNodeRef('AC9HH7S03'), null);
assert.equal(parseNodeRef('<script>'), null);
assert.equal(nodeKey({ code: 'AC9HH7S03', n: 1 }), 'AC9HH7S03 n1');
assert.equal(nodeParam({ code: 'AC9HH7S03', n: 1 }), 'AC9HH7S03.1');
assert.equal(subjectOfCode('AC9HH7S03'), 'history');
assert.equal(subjectOfCode('AC9TDI8K03'), 'systems');
assert.equal(subjectOfCode('AC9M7A01'), 'maths');

// Goals.
assert.equal(goalFromCriterion("Correctly identifies the producer (who) of a source's origin."), "I can correctly identify the producer (who) of a source's origin");
assert.equal(goalFromCriterion('Distinguishes origin from content'), 'I can distinguish origin from content');
assert.equal(goalFromCriterion('Analyses two sources'), 'I can analyse two sources');
assert.equal(goalFromCriterion('Uses evidence'), 'I can use evidence');
assert.equal(goalFromCriterion('Students can explain why'), 'I can explain why');
assert.match(goalFromCriterion('A clear claim'), /^I can /);

// One node: a Primer starter that validates, goals from every criterion, misconception offered not written.
const n1 = findNode(cur, { code: 'AC9HH7S03', n: 1 });
assert.ok(n1.hinge && n1.hinge_reason);
const one = primerFromNodes([n1], {}, 'v0.2')['lesson.md'];
assert.match(one, /^title: "Origin and content"$/m);
assert.match(one, /^shape: primer$/m);
assert.match(one, /^node: AC9HH7S03 n1$/m);
assert.equal((one.match(/^ {2}- "I can/gm) || []).length, n1.criteria.length);
assert.doesNotMatch(one, /misconception:/);
assert.match(one, /Drafted from Waypoints Kit v0\.2 AC9HH7S03 node 1/);
let v = validateLessonSource(one, { slug: 'node-primer' });
assert.deepEqual(v.errors ?? v.result?.errors ?? [], [], 'one-node primer validates');
const mis = misconceptionsOf(n1);
assert.ok(mis.length >= 1 && mis[0].from === 'hinge reason');
const picked = primerFromNodes([n1], { criteria: [n1.criteria[0]], misconception: mis[0].text }, 'v0.2')['lesson.md'];
assert.equal((picked.match(/^ {2}- "I can/gm) || []).length, 1, 'only the picked criterion');
assert.match(picked, /design:\n {2}misconception: "Students who conflate/);
v = validateLessonSource(picked, { slug: 'node-primer-picked' });
assert.deepEqual(v.errors ?? v.result?.errors ?? [], []);

// Several nodes: no goals until picked, node: as a list, width from both.
const n2 = findNode(cur, { code: 'AC9HH7S04', n: 1 });
const two = primerFromNodes([n1, n2], {}, 'v0.2')['lesson.md'];
assert.match(two, /^node:\n {2}- AC9HH7S03 n1\n {2}- AC9HH7S04 n1$/m);
assert.doesNotMatch(two, /goals:/, 'several nodes: never a silent merge');
v = validateLessonSource(two, { slug: 'node-primer-two' });
assert.deepEqual(v.errors ?? v.result?.errors ?? [], []);
assert.equal(widthSuggestions([n1, n2]).length, n1.modes.length + n2.modes.length);

// Prompt text.
const prompt = nodesPromptText([n1], { misconception: mis[0].text }, 'v0.2');
assert.match(prompt, /CURRICULUM NODES \(from Waypoints Kit v0\.2/);
assert.match(prompt, /node: AC9HH7S03 n1/);
assert.match(prompt, /Success criteria:\n- Correctly identifies/);
assert.match(prompt, /Minimum width:/);
assert.match(prompt, /Hinge: yes\./);
assert.match(prompt, /consolidation → more practise steps/);
assert.match(prompt, /Misconception I picked:/);
assert.match(nodesPromptText([n1, n2]), /do not merge them silently/);
assert.equal(nodesPromptText([]), '');

// Create's compact copy keeps what the picker uses and only Years 7–10.
const c = compactCurriculum(cur, review);
assert.equal(c.status, 'draft'); assert.equal(c.kit, 'v0.2');
assert.ok(c.descriptors.every((d) => d.year >= 7 && d.nodes.every((n) => n.checkpoint && n.modes)));
assert.deepEqual(findNode(c, { code: 'AC9HH7S03', n: 1 }).criteria, n1.criteria);
console.log('kit-nodes-test: pass');
