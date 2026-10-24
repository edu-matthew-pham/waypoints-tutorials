// Ideas across pathways (roadmap/code.md › Ideas across pathways): for each core coding idea, the first lesson
// in each pathway that introduces it, read from lessons' `introduces:` through `sameIdea`. Pure, so a test or
// another page can use it; build-site writes it to /teach/<subject>/ideas/.
import { CORE_IDEAS, sameIdea } from './concepts-core.mjs';

/** pathways: [{ id, title, courses: [{ path }] }] from a subject's index.md; lessons: parsed lessons with slug,
 *  title, order, language, introduces. Returns rows of { id, label, cells: [{ lesson, course } | null] }. */
export function ideasTable(pathways, lessons, courseTitle = (p) => p) {
  const byCourse = new Map();
  for (const l of lessons) { const c = l.slug.split('/').slice(0, -1).join('/'); if (!byCourse.has(c)) byCourse.set(c, []); byCourse.get(c).push(l); }
  for (const ls of byCourse.values()) ls.sort((a, b) => (Number(a.order) || 999) - (Number(b.order) || 999) || a.slug.localeCompare(b.slug));
  const first = pathways.map((pw) => {
    const m = new Map();
    for (const c of pw.courses || []) for (const l of byCourse.get(c.path) || []) for (const id of l.introduces || []) {
      const k = sameIdea(l.language, id);
      if (!m.has(k)) m.set(k, { lesson: l, course: courseTitle(c.path) });
    }
    return m;
  });
  return CORE_IDEAS.map((x) => ({ ...x, cells: first.map((m) => m.get(x.id) || null) }));
}
