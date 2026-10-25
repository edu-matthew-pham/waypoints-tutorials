// Project briefs for subjects without code (roadmap/systems.md › a project brief per course). A course with
// content/<course>/briefs.yml gets <course>/briefs/: a printable task sheet per brief. Unlike open projects
// (tools/projects.mjs) there is no playground, concept scan or badge: the student makes something outside the page
// and hands it in, so the sheet says what to make, what to hand in and what to show. Success criteria are not
// written here: a brief names the curriculum nodes it evidences (`nodes: ["AC9TDI8K03 n1", ...]`, like a lesson's
// `node:`) and the sheet lists those nodes' own criteria from data/curriculum/<subject>.json, so one source says
// what "can explain" means and any school can use it. Kept outside the lesson folders, so briefs never re-record clips.
//
//   briefs:
//     - id: secret-alphabet            slug, unique in the course
//       title: A code for the club
//       after: binary-patterns         the lesson after which everything needed has been taught
//       nodes: ["AC9TDI8K04 n1", ...]  nodes it evidences (their criteria are shown as "Show that you can")
//       goal: |                        Markdown: the task, a scenario, what to make (never how)
//       handin: ["...", "..."]         1 to 4 things to give the teacher
//       milestones: ["...", "..."]     2 to 4 steps along the way (a tick-box checklist)
//       stretch: ["..."]               optional
//       teacher: |                     notes for the teacher guide (Markdown)
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse as YAMLparse } from 'yaml';

const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const NODE = /^(AC9[A-Z0-9]+) n(\d+)$/;

/** Every course's briefs: [{ course, file, briefs: [...] }]. */
export function loadBriefs(root) {
  const out = [];
  const walk = (rel) => {
    const dir = join(root, rel);
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(rel ? `${rel}/${e.name}` : e.name);
      else if (e.name === 'briefs.yml' && rel) {
        const file = join(dir, e.name);
        const data = YAMLparse(readFileSync(file, 'utf8')) || {};
        out.push({ course: rel, file, briefs: Array.isArray(data.briefs) ? data.briefs : [] });
      }
    }
  };
  walk('');
  return out;
}

/** Resolve a brief's nodes against a subject's curriculum ({ descriptors }): [{ code, n, descriptor, label, criteria }]; unknown ones carry `missing`. */
export function briefNodes(brief, cur) {
  const by = new Map((cur?.descriptors || []).map((d) => [d.code, d]));
  return (brief.nodes || []).map((ref) => {
    const m = NODE.exec(String(ref));
    if (!m) return { ref, missing: true };
    const d = by.get(m[1]), node = d?.nodes?.find((x) => x.n === Number(m[2]));
    return node ? { code: m[1], n: node.n, descriptor: d.title, label: node.label, criteria: node.criteria || [] } : { ref, missing: true };
  });
}

/** Problems with a course's briefs: [{ level: 'error' | 'warn', msg }]. */
export function checkBriefs(set, lessonsIn, cur) {
  const out = [], where = set.file.replace(/^.*?content\//, 'content/');
  const err = (m) => out.push({ level: 'error', msg: `${where}: ${m}` });
  const seen = new Set(), names = new Set(lessonsIn(set.course).map((l) => l.slug.split('/').pop()));
  if (!set.briefs.length) out.push({ level: 'warn', msg: `${where}: no briefs listed` });
  for (const b of set.briefs) {
    const tag = `brief "${b.id}"`;
    if (!b.id || !ID.test(b.id)) { err(`a brief needs an id (lower-case words joined by -): ${b.id}`); continue; }
    if (seen.has(b.id)) err(`${tag} is listed twice`); seen.add(b.id);
    if (!b.title) err(`${tag} has no title`);
    if (!b.goal) err(`${tag} has no goal`);
    if (!b.after || !names.has(String(b.after))) err(`${tag}: after: names no lesson of ${set.course} (${b.after})`);
    const list = (k, lo, hi) => { const a = Array.isArray(b[k]) ? b[k] : []; if (a.length < lo || a.length > hi) err(`${tag} needs ${lo} to ${hi} ${k} (it has ${a.length})`); };
    list('handin', 1, 4); list('milestones', 2, 4);
    if (!Array.isArray(b.nodes) || !b.nodes.length) err(`${tag} names no nodes (its success criteria come from them)`);
    for (const n of briefNodes(b, cur)) if (n.missing) err(`${tag}: node ${n.ref} is not in the curriculum data`);
  }
  return out;
}
