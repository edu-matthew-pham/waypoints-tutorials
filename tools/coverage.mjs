// General coverage of standards by courses (data/curriculum/code-coverage.yml, 25 Oct 2026): "focus" and "touches"
// lists of course paths per standard, for subjects whose lessons are not tagged to each waypoint (Code and the
// Processes strand). Read by the search index, the pointer pages and the course strip.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export function loadCoverage(root = '.', codeCourses = []) {
  const f = join(root, 'data', 'curriculum', 'code-coverage.yml');
  const std = new Map(), byCourse = new Map();
  if (!existsSync(f)) return { std, byCourse };
  const titles = new Map();
  const dp = join(root, 'data', 'curriculum', 'digital-processes.json');
  if (existsSync(dp)) for (const d of JSON.parse(readFileSync(dp, 'utf8')).descriptors) titles.set(d.code, d.title);
  for (const [code, v] of Object.entries((parse(readFileSync(f, 'utf8')) || {}).standards || {})) {
    const all = v.focus === 'all', e = { code, title: titles.get(code) || code, all, note: v.note || '', focus: all ? codeCourses : (v.focus || []), touches: v.touches || [] };
    std.set(code, e);
    for (const [kind, list] of [['focus', e.focus], ['touches', e.touches]]) for (const p of list) {
      if (!byCourse.has(p)) byCourse.set(p, { focus: [], touches: [] });
      byCourse.get(p)[kind].push(e);
    }
  }
  return { std, byCourse };
}
export const shortCode = (code) => String(code).replace(/^AC9TDI/, '');
// The sentence both the standard's page and a node's page use, so the claim is worded once.
export const COVERAGE_NOTE = 'This is general coverage, not a lesson tagged to each waypoint. A course that only touches a standard meets it in passing; it may not be the course\'s main focus, and a teacher could extend it to cover the standard more fully.';
