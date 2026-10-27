// Open projects (roadmap/code.md › Recap and open projects): small self-paced briefs written per course in
// content/<course>/projects.yml, with example programs beside it in content/<course>/projects/. Kept outside the
// lesson folders, so adding a brief never re-records a lesson's clips.
//
//   playground: turtle                    the course's playground (turtle, html, dom, microbit, arcade, p5)
//   projects:
//     - id: night-sky                     slug, unique in the course
//       title: Night sky
//       after: turtle-parameters          the lesson after which every skill it needs has been taught
//       goal: |                           Markdown: what to make (never how)
//         Draw a night sky ...
//       example: night-sky.py             a possible result: drawn as the brief's picture, never shown to students
//       uses: [loop-index, param, random] 3 or 4 concept ids (tools/concepts-core.mjs); { id, label } renames one
//       milestones: [It runs ..., ...]    2 to 4, ticked by the student. Each is a string, or an object for layered help:
//         - { text: ..., hints: [..., ...], way: "one piece of code", part: 1 }
//           hints: up to 3, shown one at a time (a generic move, never the joined-up answer); way: one piece of this
//           project's solution for that milestone, behind "Show one way" (needs reveal: true; part = the crossover part, from 1)
//       benchmark:                        optional, 1 or 2 more pictures beside the example's: pages of a FINISHED state (typed-in
//         - { file: logger-a.html, caption: A light logger }   numbers, no scripts), drawn like the example and shown to students
//                                         as "ways it could look" (a standard to aim for, not code). File is in <course>/projects/.
//       reveal: true                      lets students earn "Show one way" (off by default; the teacher guide always has the full example)
//       stretch: [...]                    "make it yours" ideas
//       teacher: |                        notes for the teacher guide (Markdown)
//       parts:                            optional, for a crossover: one playground each (title, playground,
//         - { title: The micro:bit, playground: microbit, uses: [...], example: x.ts, starter: ... }
//
//   playground: external                  (25 Oct 2026 add-on, 27 Oct) for apps that run on the student's own computer, such as the Pattern
//                                         Detector starters: no embedded editor. The part lists links: [{ label, href, note }] ("Where you'll
//                                         work") and the page offers an optional paste box that runs the same skill scan on code the student
//                                         pastes. after: is optional when every part is external (the course may have no lessons at all).
// A part's playground defaults to the course's (turtle, html, dom, microbit, arcade); the scan reads its language.
// The project page lights a "You'll use" chip when the student's own code uses it (concepts-core in the browser).
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse as YAMLparse } from 'yaml';
import { conceptIds, conceptsIn, CONCEPTS } from './concepts-core.mjs';

export const LANG_OF = { external: 'python', turtle: 'python', python: 'python', html: 'html', dom: 'html', microbit: 'makecode', arcade: 'makecode', p5: 'javascript' };
const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Every course's briefs: [{ course, file, dir, projects: [...] }], parts filled in. defaultPlay(course) names the course's playground. */
export function loadProjects(root, defaultPlay) {
  const out = [];
  const walk = (rel) => {
    const dir = join(root, rel);
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(rel ? `${rel}/${e.name}` : e.name);
      else if (e.name === 'projects.yml' && rel) {
        const file = join(dir, e.name);
        const data = YAMLparse(readFileSync(file, 'utf8')) || {};
        const projects = (Array.isArray(data.projects) ? data.projects : []).map((p) => {
          const parts = (Array.isArray(p.parts) && p.parts.length ? p.parts : [{ playground: p.playground, uses: p.uses, example: p.example, starter: p.starter, answers: p.answers, height: p.height, links: p.links }])
            .map((x) => {
              const playground = x.playground || data.playground || defaultPlay(rel);
              const read = (f) => (f && existsSync(join(dir, 'projects', f)) ? readFileSync(join(dir, 'projects', f), 'utf8') : null);
              return {
                title: x.title || '', playground, language: LANG_OF[playground] || 'python',
                uses: (Array.isArray(x.uses) ? x.uses : []).map((u) => (typeof u === 'string' ? { id: u } : u)),
                example: x.example || null, exampleCode: read(x.example),
                starter: typeof x.starter === 'string' ? (x.starter.includes('\n') || !read(x.starter) ? x.starter : read(x.starter)) : null,
                height: Number(x.height) || null,
                links: (Array.isArray(x.links) ? x.links : []).map((l) => ({ label: String(l?.label || ''), href: String(l?.href || ''), note: String(l?.note || '') })),
                answers: Array.isArray(x.answers) ? x.answers.map(String) : [], // console examples: what is typed at each input(), for the picture

              };
            });
          const msx = (Array.isArray(p.milestones) ? p.milestones : []).map((m) => (typeof m === 'string' ? { text: m } : { text: String(m?.text ?? ''), hints: Array.isArray(m?.hints) ? m.hints.map(String) : [], way: m?.way ? String(m.way).replace(/\s+$/, '') : '', part: Number(m?.part) || 1 }));
          const read = (f) => (f && existsSync(join(dir, 'projects', f)) ? readFileSync(join(dir, 'projects', f), 'utf8') : null);
          const benchmark = (Array.isArray(p.benchmark) ? p.benchmark : []).map((b) => ({ file: String(b?.file || ''), caption: String(b?.caption || ''), code: read(String(b?.file || '')) }));
          return { ...p, milestones: msx.map((m) => m.text), msx, benchmark, parts };
        });
        out.push({ course: rel, file, dir, projects });
      }
    }
  };
  walk('');
  return out;
}

/** Problems with a course's briefs: [{ level: 'error' | 'warn', msg }]. lessonsIn(course) gives its lessons. */
export function checkProjects(set, lessonsIn) {
  const out = [], where = set.file.replace(/^.*?content\//, 'content/');
  const err = (m) => out.push({ level: 'error', msg: `${where}: ${m}` }), warn = (m) => out.push({ level: 'warn', msg: `${where}: ${m}` });
  const seen = new Set(), names = new Set(lessonsIn(set.course).map((l) => l.slug.split('/').pop()));
  if (!set.projects.length) warn('no projects listed');
  for (const p of set.projects) {
    const tag = `project "${p.id}"`;
    if (!p.id || !ID.test(p.id)) { err(`a project needs an id (lower-case words joined by -): ${p.id}`); continue; }
    if (seen.has(p.id)) err(`${tag} is listed twice`); seen.add(p.id);
    if (!p.title) err(`${tag} has no title`);
    if (!p.goal) err(`${tag} has no goal`);
    const allExternal = p.parts.length > 0 && p.parts.every((x) => x.playground === 'external');
    if (!(allExternal && !p.after) && (!p.after || !names.has(String(p.after)))) err(`${tag}: after: names no lesson of ${set.course} (${p.after})`);
    const ms = Array.isArray(p.milestones) ? p.milestones : [];
    if (ms.length < 2 || ms.length > 4) err(`${tag} needs 2 to 4 milestones (it has ${ms.length})`);
    if ((p.benchmark || []).length > 2) err(`${tag}: benchmark: has ${p.benchmark.length} pictures (2 at most)`);
    for (const [i, b] of (p.benchmark || []).entries()) {
      if (!b.file || b.code == null) err(`${tag}: benchmark ${i + 1}: file "${b.file}" is not in ${set.course}/projects/`);
      if (!b.caption) err(`${tag}: benchmark ${i + 1} needs a caption`);
      if (b.code != null && /<script\b/i.test(b.code)) err(`${tag}: benchmark ${i + 1}: a benchmark page is a picture of a finished state: no <script>`);
    }
    for (const [i, m] of (p.msx || []).entries()) {
      if (!m.text) err(`${tag}: milestone ${i + 1} has no text`);
      if ((m.hints || []).length > 3) err(`${tag}: milestone ${i + 1} has ${m.hints.length} hints (3 at most)`);
      if (m.way && p.reveal !== true) err(`${tag}: milestone ${i + 1} has a way: but the project has no reveal: true`);
      if (m.way && (m.part < 1 || m.part > p.parts.length)) err(`${tag}: milestone ${i + 1}: part ${m.part} does not exist`);
      if (m.way && p.parts[m.part - 1]?.exampleCode && !p.parts[m.part - 1].exampleCode.replace(/\s+/g, '').includes(m.way.replace(/\s+/g, ''))) warn(`${tag}: milestone ${i + 1}: way: is not a piece of the part's example (so it may not fit the solution)`);
    }
    for (const [i, part] of p.parts.entries()) {
      const pt = p.parts.length > 1 ? `${tag} part ${i + 1}` : tag;
      if (!LANG_OF[part.playground]) err(`${pt}: no playground for projects called "${part.playground}" (turtle, html, dom, microbit, arcade, external)`);
      const ids = conceptIds(part.language);
      if (!part.uses.length) err(`${pt} lists no skills (uses:)`);
      if (part.uses.length > 4) warn(`${pt} lists ${part.uses.length} skills: keep it to 3 or 4, so students build, not tick boxes`);
      for (const u of part.uses) if (!ids.has(u.id)) err(`${pt}: uses: "${u.id}" is not a ${part.language} concept (tools/concepts-core.mjs)`);
      if (part.playground === 'external') {
        if (!part.links.length) err(`${pt}: an external project needs links: (where the student works)`);
        for (const l of part.links) if (!l.label || !/^https:\/\//.test(l.href)) err(`${pt}: a link needs a label and an https:// address (${l.label || l.href})`);
      }
      if (part.example && part.exampleCode == null) err(`${pt}: example ${part.example} is not in ${set.course}/projects/`);
      if (part.exampleCode != null) {
        const found = conceptsIn(part.exampleCode, part.language);
        const miss = part.uses.filter((u) => ids.has(u.id) && !found.has(u.id)).map((u) => u.id);
        if (miss.length) err(`${pt}: its example does not use ${miss.join(', ')}, so a student's version might not either`);
      } else warn(`${pt} has no example (the brief's picture, and the check that its skills can be used together)`);
    }
  }
  return out;
}

/** The label students see for a skill. */
export const skillLabel = (language, u) => u.label || (CONCEPTS[language] || []).find((c) => c.id === u.id)?.label || u.id;
