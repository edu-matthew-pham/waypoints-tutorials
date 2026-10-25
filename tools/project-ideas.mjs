// Ideas to lessons, for Create's "Start from a project" prompt (roadmap/shared.md › Create from a finished project).
// For every coding idea the concept scan knows (CONCEPTS in concepts-core.mjs, by language), the first lesson in each
// Code pathway that `introduces:` it, read through `sameIdea` like the ideas-across-pathways page. Pure: build-create
// writes the result to /code/create/project-ideas.json, and the prompt links it so an AI can say which ideas in a
// teacher's project are taught already, and where.
import { CONCEPTS, sameIdea } from './concepts-core.mjs';

const LANG = { python: 'Python', html: 'HTML and CSS', javascript: 'JavaScript (p5.js, the DOM, Vue)', makecode: 'MakeCode (blocks and the JavaScript they compile to)' };

/** pathways: [{ id, title, courses: [{ path, stage, after }] }] from content/code/index.md; lessons: parsed lessons
 *  (slug, title, order, language, introduces); courseTitle: path -> title. */
export function projectIdeas(pathways, lessons, courseTitle = (p) => p, site = '') {
  const byCourse = new Map();
  for (const l of lessons) {
    const c = l.slug.split('/').slice(0, -1).join('/');
    if (!byCourse.has(c)) byCourse.set(c, []);
    byCourse.get(c).push(l);
  }
  for (const ls of byCourse.values()) ls.sort((a, b) => (Number(a.order) || 999) - (Number(b.order) || 999) || a.slug.localeCompare(b.slug));
  // Per pathway: shared idea id -> the first lesson (in the pathway's course order) that introduces it.
  const first = pathways.map((pw) => {
    const m = new Map();
    for (const c of pw.courses || []) {
      (byCourse.get(c.path) || []).forEach((l, i) => {
        for (const id of l.introduces || []) {
          const k = sameIdea(l.language, id);
          if (!m.has(k)) m.set(k, { pathway: pw.title, course: courseTitle(c.path), coursePath: c.path, lesson: l.title, number: i + 1, url: `${site}/${l.slug}/` });
        }
      });
    }
    return m;
  });
  const languages = {};
  for (const [lang, list] of Object.entries(CONCEPTS)) {
    languages[lang] = {
      name: LANG[lang] || lang,
      ideas: list.map((c) => ({
        id: c.id,
        label: c.label,
        taughtIn: first.map((m) => m.get(sameIdea(lang, c.id))).filter(Boolean),
      })),
    };
  }
  return {
    about: 'Coding ideas the Learning Waypoints Code pathways teach, with the first lesson in each pathway that introduces each one. An idea with no taughtIn entry is not taught as its own lesson yet. Courses are listed in pathway order; "after" names the courses that come first.',
    site,
    pathways: pathways.map((pw) => ({
      id: pw.id,
      title: pw.title,
      courses: (pw.courses || []).filter((c) => byCourse.has(c.path)).map((c) => ({ path: c.path, title: courseTitle(c.path), stage: c.stage, after: c.after || [], url: `${site}/${c.path}/` })),
    })),
    languages,
  };
}
