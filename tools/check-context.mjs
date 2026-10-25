// Checks lessons with a swappable context (tools/context-core.mjs; AUTHORING › Swappable context).
//   Run: node tools/check-context.mjs [slug-part]
// For each lesson with a ```context block, and again with a deliberately different dataset (every number scaled and
// shifted, the order of the groups kept): the context's `assert` claims hold, every {{ }} expands, and every board
// check passes for the board's own solution. A solution is the starter region's sibling `<region>-solution` in the
// same file (the cells, and chart lines, a student would add). If a stored answer does not follow the data, the
// lesson would mark its own author wrong, and this fails.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { loadLessons } from './lesson.mjs';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';
import { CONTEXT_RE, contextFrom, failedAsserts } from './context-core.mjs';
import { MATH } from './math-expr.mjs';

const B = { widget() {}, say() {}, post() {}, save() {}, saved() { return null; }, el() { return null; } };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/sheet.js', import.meta.url), 'utf8') + '\n;')(B);
const calc = B.sheetCalc;

const colName = (c) => String.fromCharCode(65 + c);
const colOf = (s) => s.toUpperCase().charCodeAt(0) - 65;
function cellsOf(text) { const o = {}; for (const m of text.matchAll(/^cell ([A-L]\d+):[ \t]*(.*)$/gm)) o[m[1]] = m[2].trim(); return o; }
function lineOf(text, key) { const m = text.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm')); return m ? m[1].trim() : ''; }
function rangeCells(ref) {
  const m = String(ref).match(/^([A-L])(\d+):([A-L])(\d+)$/i); if (!m) return [];
  const out = [];
  for (let r = +m[2]; r <= +m[4]; r++) for (let c = colOf(m[1]); c <= colOf(m[3]); c++) out.push(colName(c) + r);
  return out;
}

/** The values a sheet board reports (as playground-board/widgets/sheet.js does), from starter + solution text. */
function sheetVars(starter, solution) {
  const raws = { ...cellsOf(starter), ...cellsOf(solution) };
  let maxR = 1, maxC = 1;
  for (const k of Object.keys(raws)) { maxR = Math.max(maxR, +k.slice(1) + 1); maxC = Math.max(maxC, colOf(k) + 2); }
  const vals = calc(raws, { c: Math.max(maxC, 4), r: Math.max(maxR, 6) });
  const vars = {}; let formulas = 0, errors = 0;
  for (const [k, raw] of Object.entries(raws)) {
    const isF = String(raw).startsWith('=');
    if (isF) formulas++;
    const v = vals[k];
    if (v?.err) errors++;
    vars['f_' + k] = isF ? 1 : 0;
    if (v && !v.err && typeof v.v === 'number') vars['c_' + k] = Math.round(v.v * 1e9) / 1e9;
  }
  vars.n_formulas = formulas; vars.n_errors = errors;
  const all = starter + '\n' + solution;
  const type = lineOf(solution, 'chart type') || lineOf(starter, 'chart type');
  if (/^tools:.*\bchart\b/m.test(all)) {
    const vr = lineOf(solution, 'chart values') || lineOf(starter, 'chart values');
    const nums = rangeCells(vr).map((k) => vals[k]).filter((v) => v && !v.err && typeof v.v === 'number').map((v) => v.v);
    for (const t of ['bar', 'line', 'scatter', 'pie']) vars['ch_' + t] = nums.length && type === t ? 1 : 0;
    vars.ch_n = nums.length; vars.ch_sum = Math.round(nums.reduce((a, b) => a + b, 0) * 1e9) / 1e9;
    vars.ch_title = (lineOf(solution, 'chart title') || lineOf(starter, 'chart title')) ? 1 : 0;
    vars.ch_xlab = (lineOf(solution, 'chart xlabel') || lineOf(starter, 'chart xlabel')) ? 1 : 0;
    vars.ch_ylab = (lineOf(solution, 'chart ylabel') || lineOf(starter, 'chart ylabel')) ? 1 : 0;
  }
  return vars;
}

/** A different dataset with the same shape: numbers scaled and shifted (same order, so the lesson's claims hold). */
function swapped(text) {
  const d = YAML.parse(text) || {};
  const map = (v) => (typeof v === 'number' ? Number((v * 1.5 + 2).toFixed(2)) : v);
  const data = Object.fromEntries(Object.entries(d.data || {}).map(([k, v]) => [k, k === 'threshold' ? v : Array.isArray(v) ? v.map(map) : v]));
  return YAML.stringify({ ...d, data });
}

let bad = 0, checked = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const only = process.argv[2];
for (const l of loadLessons().filter((x) => x.context && (!only || x.slug.includes(only)))) {
  const raw = readFileSync(join(l.dir, 'lesson.md'), 'utf8').replace(/\r\n/g, '\n');
  const cm = raw.match(CONTEXT_RE);
  for (const [label, text] of [['its own data', cm[1]], ['a swapped dataset', swapped(cm[1])]]) {
    const where = `${l.slug} with ${label}`;
    let lesson;
    try {
      const swappedRaw = raw.replace(CONTEXT_RE, () => '```context\n' + text.trimEnd() + '\n```\n');
      lesson = parseLessonText(swappedRaw, l.slug);
    } catch (e) { fail(`${where}: ${e.message}`); continue; }
    for (const m of failedAsserts(contextFrom(text, l.slug), where)) fail(m);
    const read = (name) => (name === 'context.yml' ? text : existsSync(join(l.dir, name)) ? readFileSync(join(l.dir, name), 'utf8') : lesson.inline?.[name]);
    const boards = [];
    for (const s of lesson.steps) {
      const base = s.config.try?.starter;
      if (s.config.check?.type === 'board' && base) boards.push([s.id, base, s.config.check.when]);
      for (const t of s.tasks) if (t.config.check?.type === 'board') boards.push([t.id, t.config.starter || base, t.config.check.when]);
    }
    for (const [id, ref, when] of boards) {
      const [file, region] = String(ref).split('#');
      let starter, solution;
      try { starter = snippetFrom(read, ref); } catch (e) { fail(`${where} ${id}: ${e.message}`); continue; }
      try { solution = snippetFrom(read, `${file}#${region}-solution`); } catch { fail(`${where} ${id}: no ${file}#${region}-solution region, so the check cannot be tried against an answer`); continue; }
      const vars = sheetVars(starter, solution);
      checked++;
      try { if (!MATH.holds(when, { vars, points: {} })) fail(`${where} ${id}: the board's own solution does not pass its check\n    when: ${when}`); } catch (e) { fail(`${where} ${id}: ${e.message}`); }
    }
  }
}
console.log(bad ? `\n${bad} problem(s)` : `✓ context: ${checked} board checks pass for their own solutions, with each lesson's data and a swapped dataset`);
process.exit(bad ? 1 : 0);
