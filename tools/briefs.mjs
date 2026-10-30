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
const CODE_SUBJ = [
  ['AC9HE', 'economics'],
  ['AC9HC', 'civics'],
  ['AC9HG', 'geography'],
  ['AC9HH', 'history'],
  ['AC9HS', 'hass'],
  ['AC9TDI', 'systems'],
  ['AC9TDE', 'engineering'],
  ['AC9M', 'maths'],
  ['AC9S', 'science'],
  ['AC9E', 'english'],
];

export function subjectOfCode(code) {
  const s = String(code || '');
  const hit = CODE_SUBJ.find(([p]) => s.startsWith(p));
  return hit ? hit[1] : null;
}

/** Every course's briefs: [{ course, file, kind, briefs: [...] }]. */
export function loadBriefs(root) {
  const out = [];
  const walk = (rel) => {
    const dir = join(root, rel);
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(rel ? `${rel}/${e.name}` : e.name);
      else if ((e.name === 'briefs.yml' || e.name === 'skeletons.yml') && rel) {
        const file = join(dir, e.name);
        const data = YAMLparse(readFileSync(file, 'utf8')) || {};
        const isSkelFile = e.name === 'skeletons.yml' || data.kind === 'skeleton';
        const raw = Array.isArray(data) ? data : Array.isArray(data.briefs) ? data.briefs : Array.isArray(data.skeletons) ? data.skeletons : [];
        const briefs = raw.map((b) => (isSkelFile && !b.kind ? { ...b, kind: 'skeleton' } : b));
        const kind = briefs.length && briefs.every((b) => b.kind === 'skeleton') ? 'skeleton' : 'brief';
        out.push({ course: rel, file, kind, briefs });
      }
    }
  };
  walk('');
  return out;
}

/**
 * Resolve a brief's (or stage's) nodes against curriculum data.
 * `cur` may be a single curriculum object `{ descriptors }` or a loader function `(subject) => ({ descriptors })`.
 * Returns `[{ code, n, descriptor, label, criteria }]`; unknown ones carry `missing`.
 */
export function briefNodes(brief, cur, field = 'nodes') {
  const byCache = new Map();
  const mapFor = (code) => {
    if (typeof cur === 'function') {
      const subj = subjectOfCode(code);
      if (!subj) return null;
      if (!byCache.has(subj)) {
        const c = cur(subj);
        byCache.set(subj, new Map((c?.descriptors || []).map((d) => [d.code, d])));
      }
      return byCache.get(subj);
    }
    if (!byCache.has('_')) byCache.set('_', new Map((cur?.descriptors || []).map((d) => [d.code, d])));
    return byCache.get('_');
  };
  const refs = Array.isArray(brief?.[field])
    ? brief[field]
    : (brief?.kind === 'skeleton' && Array.isArray(brief?.stages) ? brief.stages.flatMap((s) => s.nodes || []) : []);
  return refs.map((ref) => {
    const m = NODE.exec(String(ref));
    if (!m) return { ref, missing: true };
    const by = mapFor(m[1]);
    const d = by?.get(m[1]), node = d?.nodes?.find((x) => x.n === Number(m[2]));
    return node ? { code: m[1], n: node.n, descriptor: d.title, label: node.label, criteria: node.criteria || [] } : { ref, missing: true };
  });
}

/** Problems with a course's briefs: [{ level: 'error' | 'warn', msg }]. */
export function checkBriefs(set, lessonsIn, cur, allLessons = []) {
  const out = [], where = set.file.replace(/^.*?content\//, 'content/');
  const err = (m) => out.push({ level: 'error', msg: `${where}: ${m}` });
  const seen = new Set(), names = new Set(lessonsIn(set.course).map((l) => l.slug.split('/').pop()));
  const allSlugs = new Set(allLessons.map((l) => l.slug));
  if (!set.briefs.length) out.push({ level: 'warn', msg: `${where}: no briefs listed` });
  for (const b of set.briefs) {
    const tag = `brief "${b.id}"`;
    if (!b.id || !ID.test(b.id)) { err(`a brief needs an id (lower-case words joined by -): ${b.id}`); continue; }
    if (seen.has(b.id)) err(`${tag} is listed twice`); seen.add(b.id);
    if (!b.title) err(`${tag} has no title`);
    if (!b.goal) err(`${tag} has no goal`);
    const list = (obj, k, lo, hi, label = tag) => {
      const a = Array.isArray(obj[k]) ? obj[k] : [];
      if (a.length < lo || a.length > hi) err(`${label} needs ${lo} to ${hi} ${k} (it has ${a.length})`);
    };
    list(b, 'handin', 1, 4);
    if (b.kind === 'skeleton') {
      if (!b.subject) err(`${tag} (skeleton) needs a subject`);
      if (b.after && !names.has(String(b.after))) err(`${tag}: after: names no lesson of ${set.course} (${b.after})`);
      list(b, 'stages', 4, 6);
      const stageSeen = new Set();
      for (const st of b.stages || []) {
        const stag = `${tag} stage "${st.id || st.title || '?'}"`;
        if (!st.id || !ID.test(st.id)) err(`${stag} needs an id (lower-case words joined by -)`);
        else if (stageSeen.has(st.id)) err(`${stag} is listed twice`);
        stageSeen.add(st.id);
        if (!st.title) err(`${stag} has no title`);
        if (!st.you_will) err(`${stag} needs you_will`);
        if (!Array.isArray(st.nodes) || !st.nodes.length) err(`${stag} names no nodes`);
        for (const n of briefNodes(st, cur)) if (n.missing) err(`${stag}: node ${n.ref} is not in the curriculum data`);
        if (st.student_nodes != null) {
          if (!Array.isArray(st.student_nodes) || !st.student_nodes.length) err(`${stag}: student_nodes must be a non-empty list`);
          const full = new Set((st.nodes || []).map(String));
          for (const ref of st.student_nodes || []) if (!full.has(String(ref))) err(`${stag}: student_nodes entry "${ref}" is not in stage nodes`);
        }
        if (!Array.isArray(st.lessons) || !st.lessons.length) err(`${stag} needs at least one entry in lessons`);
        for (const item of st.lessons || []) {
          if (typeof item === 'string' || (item && typeof item === 'object' && item.slug)) {
            const ref = typeof item === 'string' ? item : String(item.slug);
            const ok = ref.includes('/') ? allSlugs.has(ref) : names.has(ref);
            if (!ok) err(`${stag}: lesson "${ref}" does not exist`);
          } else if (item && typeof item === 'object' && item.soon === true) {
            if (!item.title || !String(item.title).trim()) err(`${stag}: a soon: true lesson needs a title`);
          } else {
            err(`${stag}: invalid lesson entry ${JSON.stringify(item)}`);
          }
        }
      }
      continue;
    }
    if (!b.after || !names.has(String(b.after))) err(`${tag}: after: names no lesson of ${set.course} (${b.after})`);
    list(b, 'milestones', 2, 4);
    if (!Array.isArray(b.nodes) || !b.nodes.length) err(`${tag} names no nodes (its success criteria come from them)`);
    for (const n of briefNodes(b, cur)) if (n.missing) err(`${tag}: node ${n.ref} is not in the curriculum data`);
  }
  return out;
}
