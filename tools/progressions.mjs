// Progression data and the node check (maths, science and Digital systems lessons must name a node).
//
// Data: data/curriculum/<subject>.json, imported from Waypoints Kit by tools/import-curriculum.mjs (the same data the
// teacher pointer pages, Create and the curriculum maps use; one copy, one re-import). Until 19 Oct 2026 it read
// data/progressions/<subject>/<code>.md pages instead: the same nodes, criteria, hinges and prior knowledge.
// Lessons: `node: AC9M7A01 n2` (or a list), `uses: [AC9M7N07]` (a descriptor or node the lesson relies on that the
// data does not record), `assumes: [AC9M8A02 n3]` (taught in class, not on the site).
//
// A lesson's prerequisites: the node before it in the same descriptor, or for node 1 every descriptor named in the
// descriptor's prior knowledge; plus its `uses:`. A prerequisite is met when an earlier lesson (lower order in the course,
// or a course it comes after in the subject's index.md) covers it (a descriptor: every one of its nodes), when the
// lesson lists it in `assumes:`, or when it is from an earlier year (taught in class). Related standards are ignored:
// many point forward.
//
// `node tools/progressions.mjs --report` (npm run nodes) prints each course's lessons, nodes and prerequisites.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { theoryIds } from './concepts-core.mjs';   // theory concepts (assumes: [text-as-numbers]) are not node codes

export const CHECKED = ['maths', 'science', 'systems', 'english', 'economics', 'civics', 'hass', 'history'];   // subjects whose lessons must name a node
const CODE = /AC9[A-Z]{1,4}\d{1,2}[A-Z]{1,3}\d{2}/g;

/** The year level in a code such as AC9M7A01 (7), AC9M10A01 (10), AC9TDI8K03 (8) or AC9MFN01 (Foundation: 0); null if none. */
export function yearOf(code) { const m = String(code).match(/^AC9[A-Z]+?(F(?=[A-Z0-9])|\d{1,2}(?=[A-Z]))/); return m ? (m[1] === 'F' ? 0 : Number(m[1])) : null; }

/** Every descriptor in data/curriculum/: Map code -> { code, title, year, prior, subject, nodes: [{ n, title, hinge, criteria, checkpoint }] }. */
export function loadProgressions(root = 'data/curriculum') {
  const out = new Map();
  if (!existsSync(root)) return out;
  for (const f of readdirSync(root).filter((n) => n.endsWith('.json'))) {
    const cur = JSON.parse(readFileSync(join(root, f), 'utf8'));
    for (const d of cur.descriptors || []) out.set(d.code, {
      code: d.code, title: d.title, year: d.year, prior: d.prior || [], subject: cur.subject,
      nodes: (d.nodes || []).map((n) => ({ n: n.n, title: n.label, hinge: !!n.hinge, criteria: n.criteria || [], checkpoint: n.checkpoint || '' })),
    });
  }
  return out;
}

/** "AC9M7A01 n2" -> { code, n }; "AC9M7N07" -> { code, n: null }; else null. */
export function parseRef(s) {
  const m = String(s).trim().match(/^(AC9[A-Z0-9]+?)(?:\s+n(\d+))?$/);
  return m && m[1].match(CODE)?.[0] === m[1] ? { code: m[1], n: m[2] ? Number(m[2]) : null } : null;
}
const key = (r) => (r.n ? `${r.code} n${r.n}` : r.code);
const list = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]).map(String);
const course = (slug) => slug.split('/').slice(0, -1).join('/');

/**
 * The check. lessons: parsed lessons (each with `node`, `uses`, `assumes`, `order`, `optional`, `slug`);
 * prereqs: course path -> Set of course paths (and ids) it comes after; data: loadProgressions().
 * Returns { warnings: [string], report: [{ slug, title, course, nodes, deps: [{ ref, status, by }] }] }.
 */
export function auditNodes(lessons, prereqs, data) {
  const warnings = [];
  const report = [];
  const subjectOf = (l) => l.slug.split('/')[0];
  const before = (a, b) => (course(a.slug) === course(b.slug) ? (a.order ?? 0) < (b.order ?? 0) : prereqs(course(b.slug)).has(course(a.slug)));
  const tagged = lessons.filter((l) => list(l.node).length);
  for (const l of lessons) if (CHECKED.includes(subjectOf(l)) && !list(l.node).length) warnings.push(`${l.slug} › node: none; name the progression node it teaches (node: AC9M7A01 n1)`);

  for (const l of tagged) {
    const mine = [];
    for (const s of list(l.node)) {
      const r = parseRef(s);
      if (!r || !r.n) { warnings.push(`${l.slug} › node: "${s}" is not a node (write it as AC9M7A01 n2)`); continue; }
      const page = data.get(r.code);
      if (!page) { warnings.push(`${l.slug} › node: ${r.code} is not in the curriculum data (check the code, or re-import from Kit: node tools/import-curriculum.mjs)`); mine.push(r); continue; }
      if (!page.nodes.some((x) => x.n === r.n)) { warnings.push(`${l.slug} › node: ${r.code} has no node ${r.n} (it has ${page.nodes.length})`); continue; }
      mine.push(r);
    }
    const assumed = list(l.assumes).map(parseRef).filter(Boolean);
    for (const s of list(l.assumes)) if (!parseRef(s) && !theoryIds.has(s) && CHECKED.includes(subjectOf(l))) warnings.push(`${l.slug} › assumes: "${s}" is not a descriptor or node code`);
    const earlier = tagged.filter((e) => e !== l && before(e, l) && (!e.optional || l.optional));
    const coveredBy = (code, n) => {
      const hit = (e) => list(e.node).map(parseRef).some((r) => r && r.code === code && r.n === n);
      if (mine.some((r) => r.code === code && r.n === n)) return l.slug;
      return earlier.find(hit)?.slug || null;
    };
    const yr = (code) => data.get(code)?.year ?? yearOf(code);
    const year = Math.min(...mine.map((r) => yr(r.code) ?? 99));
    const deps = [];
    const need = (ref, why) => { if (!deps.some((d) => key(d.ref) === key(ref))) deps.push({ ref, why }); };
    for (const r of mine) {
      if (r.n > 1) need({ code: r.code, n: r.n - 1 }, `node before ${key(r)}`);
      else for (const c of data.get(r.code)?.prior || []) need({ code: c, n: null }, `prior knowledge of ${r.code}`);
    }
    for (const s of list(l.uses)) {
      const r = parseRef(s);
      if (!r) { warnings.push(`${l.slug} › uses: "${s}" is not a descriptor or node code`); continue; }
      need(r, 'uses');
    }
    const rows = [];
    for (const { ref, why } of deps) {
      const isAssumed = assumed.some((a) => a.code === ref.code && (a.n == null || a.n === ref.n));
      const y = yr(ref.code);
      let status, by = '';
      if (isAssumed) status = 'assumed';
      else if (y != null && year !== 99 && y < year) status = 'earlier year';
      else if (ref.n) {
        by = coveredBy(ref.code, ref.n);
        status = by ? 'taught' : 'missing';
        if (!by) warnings.push(`${l.slug} › needs ${key(ref)} (${why}), which no earlier lesson teaches; teach it earlier, check it in this lesson and list it in assumes:, or list it in assumes: if it is taught in class`);
      } else {
        const page = data.get(ref.code);
        if (!page) {
          status = 'no page';
          warnings.push(`${l.slug} › needs ${ref.code} (${why}), which is not in the curriculum data; check the code, or list it in assumes: if it is taught in class`);
        } else {
          const gaps = page.nodes.filter((x) => !coveredBy(ref.code, x.n) && !assumed.some((a) => a.code === ref.code && a.n === x.n)).map((x) => `n${x.n}`);
          status = gaps.length ? 'missing' : 'taught';
          by = gaps.length ? gaps.join(', ') : '';
          if (gaps.length) warnings.push(`${l.slug} › needs ${ref.code} (${why}), but no earlier lesson teaches ${gaps.join(', ')}; teach it earlier, or list it in assumes: (taught in class)`);
        }
      }
      rows.push({ ref: key(ref), why, status, by });
    }
    report.push({ slug: l.slug, title: l.title, course: course(l.slug), order: l.order, nodes: mine.map(key), deps: rows });
  }
  return { warnings, report };
}

// CLI: npm run nodes
if (process.argv[1] && process.argv[1].endsWith('progressions.mjs') && process.argv.includes('--report')) {
  const { loadLessons, loadDirMeta, CONTENT_ROOT } = await import('./lesson.mjs');
  const { prerequisites } = await import('./concepts.mjs');
  const lessons = loadLessons();
  const { report, warnings } = auditNodes(lessons, prerequisites(loadDirMeta, CONTENT_ROOT), loadProgressions());
  let c = '';
  for (const r of report.sort((a, b) => a.course.localeCompare(b.course) || (a.order ?? 0) - (b.order ?? 0))) {
    if (r.course !== c) { c = r.course; console.log(`\n${c}`); }
    console.log(`  ${String(r.order ?? '').padStart(2)}. ${r.title} — ${r.nodes.join(', ')}`);
    for (const d of r.deps) console.log(`        ${d.status === 'missing' || d.status === 'no page' ? '✗' : '·'} ${d.ref} (${d.why}): ${d.status}${d.by ? ' ' + d.by.replace(/^maths\/[^/]+\//, '') : ''}`);
  }
  console.log(`\n${warnings.length} warning(s)`);
}
