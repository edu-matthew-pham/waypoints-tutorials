// "What you should already know" for every lesson (27 Oct 2026, roadmap/shared.md › support both uses): up to two
// lessons in the same subject that teach something this lesson relies on, so a stuck student can build up from there.
// Before Year 7 catch-up lessons and theory concepts are linked elsewhere (build-site catchUpIndex, concepts theoryLinks).
//
// Two sources, both data the site already has; no guessing from titles or order alone:
// - Progression nodes (maths, science, Digital systems, English): the node before this one in the same descriptor,
//   plus `uses:` (the node check's rule in progressions.mjs, minus its "prior knowledge" step: a descriptor's prior list
//   is broad, and Matthew chose the narrower links on 27 Oct 2026). A dependency links to a lesson tagged with that node
//   (for a whole descriptor named in `uses:`, the lesson with its highest node).
// - Code concepts (CONCEPTS languages): each idea the lesson's code uses or `assumes:` links to the earlier lesson that
//   `introduces:` it (same language, as concepts.mjs auditConcepts decides "earlier").
// Never linked: a lesson that comes later (same course, or a course that follows this one), a challenge-unit lesson
// (it combines ideas rather than teaching one), and an optional lesson from a required one.
// Ranking: a node dependency counts 2, a whole-descriptor or concept match 1; then the nearest earlier lesson.
import { parseRef } from './progressions.mjs';
import { CONCEPTS, theoryIds } from './concepts-core.mjs';
import { scanLesson } from './concepts.mjs';

const list = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]).map((x) => String(x).trim().replace(/\s+/g, ' '));
const course = (slug) => slug.split('/').slice(0, -1).join('/');
const subject = (slug) => slug.split('/')[0];
const isCatchUp = (l) => /^(maths|science)\/before-year-7\//.test(l.slug);
export const MAX_PRIOR = 2;

/** A lesson in its course's challenge unit (`challenge:` in the course index.md, `unit:` on the lesson). */
export function challengeTest(loadDirMeta, root) {
  const cache = new Map();
  const unitOf = (c) => { if (!cache.has(c)) { let u = null; try { u = loadDirMeta(`${root}/${c}`).challenge || null; } catch { u = null; } cache.set(c, u); } return cache.get(c); };
  return (l) => { const u = unitOf(course(l.slug)); return !!u && l.unit === u; };
}

/** slug -> [{ slug, label, kind }] (label: what that lesson teaches that this one needs; kind: 'node' for a curriculum
 *  node, 'idea' for a code idea found by the concept scan. Code has no standards tags, so its big ideas stand in). */
export function priorLessons(lessons, { data, prereqs, read, isChallenge = () => false }) {
  const pos = new Map(lessons.map((l, i) => [l.slug, i]));
  const sameCourseLater = (e, l) => course(e.slug) === course(l.slug) && (e.order ?? 0) >= (l.order ?? 0);
  const before = (a, b) => (course(a.slug) === course(b.slug) ? (a.order ?? 0) < (b.order ?? 0) : prereqs(course(b.slug)).has(course(a.slug)));
  const allowed = (e, l) => e !== l && !isCatchUp(e) && !isChallenge(e) && subject(e.slug) === subject(l.slug) && !sameCourseLater(e, l) && !before(l, e) && (!e.optional || l.optional);

  // Nodes: "AC9M7A01 n2" -> [lesson]; descriptor -> [{ n, lesson }].
  const byNode = new Map(), byCode = new Map();
  for (const l of lessons) for (const s of list(l.node)) {
    const r = parseRef(s); if (!r?.n) continue;
    const k = `${r.code} n${r.n}`;
    byNode.set(k, [...(byNode.get(k) || []), l]);
    byCode.set(r.code, [...(byCode.get(r.code) || []), { n: r.n, l }]);
  }
  const nodeLabel = (code, n) => data.get(code)?.nodes.find((x) => x.n === n)?.title || `${code} n${n}`;

  // Concepts: id -> [lesson that introduces it].
  const introBy = new Map();
  for (const l of lessons) for (const id of list(l.introduces)) introBy.set(id, [...(introBy.get(id) || []), l]);

  const out = new Map();
  for (const l of lessons) {
    if (isCatchUp(l)) continue;
    const found = new Map();   // slug -> { lesson, labels: Set, score }
    const add = (e, label, w = 1, kind = 'node') => { if (!allowed(e, l)) return; const f = found.get(e.slug) || { lesson: e, labels: new Set(), kinds: new Set(), score: 0 }; if (!f.labels.has(label)) { f.labels.add(label); f.kinds.add(kind); f.score += w; } found.set(e.slug, f); };

    // Progression nodes.
    const mine = list(l.node).map(parseRef).filter((r) => r?.n);
    const own = new Set(mine.map((r) => `${r.code} n${r.n}`));
    const deps = [];
    for (const r of mine) {
      if (r.n > 1) deps.push({ code: r.code, n: r.n - 1 });
    }
    for (const s of list(l.uses)) { const r = parseRef(s); if (r) deps.push(r); }
    for (const d of deps) {
      if (d.n) {
        if (own.has(`${d.code} n${d.n}`)) continue;   // a multi-node lesson teaches its own earlier node
        for (const e of byNode.get(`${d.code} n${d.n}`) || []) add(e, nodeLabel(d.code, d.n), 2);
      } else {
        // A whole descriptor: the lesson on its highest node, preferring lessons that teach just one node of it.
        const nodesOf = (e) => list(e.node).map(parseRef).filter((r) => r?.code === d.code).length;
        const tagged = (byCode.get(d.code) || []).filter((x) => allowed(x.l, l)).sort((a, b) => (nodesOf(a.l) > 1) - (nodesOf(b.l) > 1) || b.n - a.n);
        if (tagged.length) add(tagged[0].l, data.get(d.code)?.title || d.code);
      }
    }

    // Code concepts.
    if (CONCEPTS[l.language]) {
      const label = (id) => CONCEPTS[l.language].find((c) => c.id === id)?.label || id;
      const skip = new Set([...list(l.introduces), ...list(l.recipes)]);
      let used = [];
      try { used = [...scanLesson(l, read).keys()]; } catch { used = []; }
      const need = [...new Set([...used, ...list(l.assumes).filter((id) => !theoryIds.has(id))])].filter((id) => !skip.has(id));
      for (const id of need) {
        const by = (introBy.get(id) || []).filter((e) => e.language === l.language && before(e, l));
        if (by.length) add(by[by.length - 1], label(id), 1, 'idea');
      }
    }

    const ranked = [...found.values()].sort((a, b) => b.score - a.score || (pos.get(b.lesson.slug) ?? 0) - (pos.get(a.lesson.slug) ?? 0));
    if (ranked.length) out.set(l.slug, ranked.slice(0, MAX_PRIOR).map((f) => ({ slug: f.lesson.slug, label: [...f.labels].join(', '), labels: [...f.labels], kind: f.kinds.has('idea') && !f.kinds.has('node') ? 'idea' : 'node' })));
  }
  return out;
}

// CLI: node tools/prior-links.mjs [--sample N] prints each lesson's links (or a random sample) for review.
if (import.meta.url === `file://${process.argv[1]}`) {
  const { loadLessons, loadDirMeta, getSnippet, CONTENT_ROOT } = await import('./lesson.mjs');
  const { prerequisites } = await import('./concepts.mjs');
  const { loadProgressions } = await import('./progressions.mjs');
  const lessons = loadLessons();
  const map = priorLessons(lessons, { data: loadProgressions(), prereqs: prerequisites(loadDirMeta, CONTENT_ROOT), read: getSnippet, isChallenge: challengeTest(loadDirMeta, CONTENT_ROOT) });
  const title = new Map(lessons.map((l) => [l.slug, l.title]));
  const bySubject = {};
  for (const l of lessons) if (!isCatchUp(l)) { const s = subject(l.slug); bySubject[s] ||= [0, 0]; bySubject[s][0]++; if (map.has(l.slug)) bySubject[s][1]++; }
  console.log('Lessons with links, by subject:', Object.entries(bySubject).map(([s, [n, k]]) => `${s} ${k}/${n}`).join(', '));
  const i = process.argv.indexOf('--sample');
  let rows = [...map.entries()];
  if (i > 0) { const n = Number(process.argv[i + 1]) || 30; let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647; rows = rows.map((r) => [rnd(), r]).sort((a, b) => a[0] - b[0]).slice(0, n).map((x) => x[1]).sort((a, b) => a[0].localeCompare(b[0])); }
  for (const [slug, xs] of rows) console.log(`- ${title.get(slug)} (${slug})\n${xs.map((x) => `    ← ${title.get(x.slug)} (${x.slug}) [${x.kind}]: ${x.label}`).join('\n')}`);
}
