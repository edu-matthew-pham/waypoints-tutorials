// Maths course split, step 1: the mapping (plan only; moves nothing).
// Reads every lesson in the eight Years 7–10 maths strand courses and places it by its first (main) `node:`
// in one course per strand per year, as ACARA splits the curriculum (roadmap/maths.md › Course split).
// Writes data/maths-split.json (used by the move in step 2) and roadmap/maths-split.md (the table to review).
// Run: node tools/maths-split.mjs
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const MATHS = path.join(ROOT, 'content/maths');
const COURSES = ['number', 'real-numbers', 'algebra', 'linear-relations', 'functions', 'measurement', 'angles', 'data'];
const STRANDS = { N: 'number', A: 'algebra', M: 'measurement', SP: 'space', ST: 'statistics', P: 'probability' };
const STRAND_TITLE = { number: 'Number', algebra: 'Algebra', measurement: 'Measurement', space: 'Space', statistics: 'Statistics', probability: 'Probability' };
const CODE = /^AC9M(\d+)(SP|ST|N|A|M|P)\d\d/;

const front = (file) => {
  const m = fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  return m ? YAML.parse(m[1]) : {};
};
const list = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const parse = (node) => {
  const m = String(node).match(CODE);
  return m ? { year: +m[1], strand: STRANDS[m[2]], code: String(node).split(' ')[0] } : null;
};

// Units of each old course, with the year their lessons mostly sit in (worked out below).
const units = {};
const lessons = [];
for (const course of COURSES) {
  const idx = front(path.join(MATHS, course, 'index.md'));
  units[course] = Object.fromEntries((idx.units || []).map((u) => [u.id, u]));
  for (const dir of fs.readdirSync(path.join(MATHS, course))) {
    const file = path.join(MATHS, course, dir, 'lesson.md');
    if (!fs.existsSync(file)) continue;
    const f = front(file);
    const nodes = list(f.node);
    lessons.push({
      from: `maths/${course}/${dir}`, course, folder: dir, title: f.title, unit: f.unit || null, order: f.order ?? null,
      optional: !!f.optional, nodes, main: nodes[0] ? parse(nodes[0]) : null,
      practice: fs.existsSync(path.join(MATHS, course, 'practice', `${dir}.yml`)),
      classPlan: fs.existsSync(path.join(MATHS, course, 'class', `${dir}.yml`)),
    });
  }
}

// The year and strand most of a unit's lessons sit in, to place a lesson with no `node:` and to spot odd ones out.
const unitHome = {};
for (const l of lessons) {
  if (!l.main) continue;
  const k = `${l.course}/${l.unit}`;
  (unitHome[k] ||= {})[`${l.main.strand}-${l.main.year}`] = (unitHome[k]?.[`${l.main.strand}-${l.main.year}`] || 0) + 1;
}
const majority = (k) => Object.entries(unitHome[k] || {}).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

for (const l of lessons) {
  const home = majority(`${l.course}/${l.unit}`);
  l.to = l.main ? `maths/${l.main.strand}-${l.main.year}` : home ? `maths/${home}` : null;
  l.placedBy = l.main ? 'main node' : home ? 'no node: unit majority' : 'unplaced';
  // Flags for the "genuinely mixed?" review. Not decisions: a short list for Matthew.
  const flags = [];
  const others = l.nodes.slice(1).map(parse).filter(Boolean);
  if (home && l.main && home !== `${l.main.strand}-${l.main.year}`) flags.push(`rest of its unit (${l.course} › ${l.unit}) goes to ${home}`);
  const otherStrands = [...new Set(others.filter((o) => l.main && o.strand !== l.main.strand && o.year === l.main.year).map((o) => o.strand))];
  if (otherStrands.length) flags.push(`also a same-year main tag in ${otherStrands.join(', ')}`);
  const later = others.filter((o) => l.main && o.year > l.main.year);
  if (later.length) flags.push(`also tags a later year (${[...new Set(later.map((o) => o.code))].join(', ')})`);
  l.flags = flags;
}

// New courses, each with its units (old unit ids kept, prefixed by the old course where two collide).
const courses = {};
for (const l of lessons.filter((x) => x.to).sort((a, b) => (a.order ?? 999) - (b.order ?? 999))) {
  const c = (courses[l.to] ||= { path: l.to, units: [], lessons: [] });
  const unitKey = `${l.course}/${l.unit}`;
  if (!c.units.find((u) => u.key === unitKey)) c.units.push({ key: unitKey, id: l.unit, title: units[l.course][l.unit]?.title || l.unit });
  c.lessons.push(l.from);
  l.toUnit = unitKey;
}
for (const c of Object.values(courses)) {
  const ids = c.units.map((u) => u.id);
  for (const u of c.units) if (ids.filter((i) => i === u.id).length > 1) u.id = `${u.key.split('/')[0]}-${u.id}`;
  // Folder names must be unique inside a new course.
  const folders = c.lessons.map((s) => s.split('/').pop());
  c.clashes = folders.filter((f, i) => folders.indexOf(f) !== i);
}

const order = (p) => {
  const [s, y] = p.replace('maths/', '').split(/-(?=\d)/);
  return Object.keys(STRAND_TITLE).indexOf(s) + +y * 10;
};
const coursePaths = Object.keys(courses).sort((a, b) => order(a) - order(b));

// Old units that end up split across two or more new courses.
const splitUnits = {};
for (const l of lessons) if (l.to) ((splitUnits[`${l.course}/${l.unit}`] ||= new Set())).add(l.to);
const unitsSplit = Object.entries(splitUnits).filter(([, s]) => s.size > 1).map(([k, s]) => ({ unit: k, into: [...s] }));

const out = {
  note: 'Made by tools/maths-split.mjs; do not edit by hand. Plan only: nothing has moved yet.',
  made: new Date().toISOString().slice(0, 10),
  courses: coursePaths.map((p) => ({ path: p, title: `Year ${p.split('-').pop()} ${STRAND_TITLE[p.split('/')[1].split('-')[0]]}`, units: courses[p].units.map(({ id, title, key }) => ({ id, title, from: key })), lessons: courses[p].lessons, clashes: courses[p].clashes })),
  lessons: lessons.sort((a, b) => a.from.localeCompare(b.from)).map(({ from, to, toUnit, placedBy, title, nodes, optional, practice, classPlan, flags }) => ({ from, to: to && `${to}/${from.split('/').pop()}`, unit: toUnit, placedBy, title, nodes, optional, practice, classPlan, flags })),
  unitsSplit,
};
fs.writeFileSync(path.join(ROOT, 'data/maths-split.json'), JSON.stringify(out, null, 1) + '\n');

// The markdown table for review.
const md = [];
md.push('# Maths course split: mapping (plan, step 1)', '');
md.push(`Made by \`node tools/maths-split.mjs\` on ${out.made} from each lesson's first \`node:\` (data in \`data/maths-split.json\`). Plan only: nothing has moved. Decisions and open questions are in \`roadmap/maths.md\` › Course split.`, '');
md.push('## New courses', '', '| Course | Lessons | Units (from old course › unit) |', '|---|---|---|');
for (const c of out.courses) md.push(`| \`${c.path}\` | ${c.lessons.length} | ${c.units.map((u) => `${u.title} (${u.from.replace('/', ' › ')})`).join('; ')} |`);
md.push('', `Total placed: ${lessons.filter((l) => l.to).length} of ${lessons.length}.`);
const unplaced = lessons.filter((l) => !l.to);
if (unplaced.length) md.push('', `Unplaced (no node, no unit majority): ${unplaced.map((l) => `\`${l.from}\``).join(', ')}.`);
const noNode = lessons.filter((l) => l.placedBy.startsWith('no node'));
if (noNode.length) md.push('', `Placed by their unit, because they have no \`node:\`: ${noNode.map((l) => `\`${l.from}\` → \`${l.to}\``).join(', ')}.`);
const clashes = out.courses.filter((c) => c.clashes.length);
md.push('', clashes.length ? `Folder name clashes: ${clashes.map((c) => `${c.path}: ${c.clashes.join(', ')}`).join('; ')}.` : 'No folder name clashes inside any new course.');
md.push('', '## Old units split across new courses', '');
md.push(...(unitsSplit.length ? unitsSplit.map((u) => `- ${u.unit.replace('/', ' › ')} → ${u.into.map((t) => `\`${t}\``).join(', ')}`) : ['None.']));
md.push('', '## Flagged by the script (for the mixed-lesson review)', '', 'A flag is only a reason to look. The short list Matthew decides on is in `roadmap/maths.md`.', '', '| Lesson | Goes to | Main node | Why flagged |', '|---|---|---|---|');
for (const l of out.lessons.filter((x) => x.flags.length)) md.push(`| \`${l.from}\` | \`${l.to}\` | ${l.nodes[0]} | ${l.flags.join('; ')} |`);
md.push('', '## Every lesson', '', '| Old | New course | Unit | Main node | Other tags |', '|---|---|---|---|---|');
for (const l of out.lessons) md.push(`| \`${l.from}\` | \`${l.to ? l.to.split('/').slice(0, 2).join('/') : '—'}\` | ${l.unit ? l.unit.split('/')[1] : '—'} | ${l.nodes[0] || '—'} | ${l.nodes.slice(1).join(', ') || ''} |`);
fs.writeFileSync(path.join(ROOT, 'roadmap/maths-split.md'), md.join('\n') + '\n');

console.log(`${lessons.length} lessons, ${out.courses.length} new courses, ${out.lessons.filter((l) => l.flags.length).length} flagged, ${unitsSplit.length} old units split.`);
for (const c of out.courses) console.log(c.path.padEnd(22), String(c.lessons.length).padStart(3), c.clashes.join(' '));
