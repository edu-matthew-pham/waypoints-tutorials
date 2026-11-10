// Open prior-knowledge decisions (10 Nov 2026, roadmap/shared.md › Prior-knowledge tools; rules T24).
// Nothing here links anything: it lists places where a lesson hasn't yet said how it handles an earlier idea, so the
// chat working on that subject can decide. Two lists:
//
// 1. Cross-subject: Kit says a standard builds on an earlier-year idea in another subject (data/curriculum/*.json
//    `cross`, timing "earlier"), the site has something to link to (a lesson on that idea, or a refresher block that
//    covers it), and no lesson of the standard names it. Shown on the lesson that would carry it: the lesson on the
//    linked node when Kit names one, else the standard's first lesson.
// 2. Openers: the first lesson of a standard names none of the Years 7+ standards in Kit's prior knowledge that have
//    lessons on the site (from the 9 Nov science audit: openers otherwise link back to nothing).
//
// A lesson answers either one by naming the code in `uses:` (link to it: the page picks the lightest level) or in
// `assumes:` (decided not to link: the lesson teaches it, or it is left to class). The later lesson check (handoff › F)
// spot-checks the `assumes:` answers.
//
//   npm run cross-links            every open item, by subject
//   npm run cross-links science    one subject
// validate prints one summary line.
import { parseRef } from './progressions.mjs';

const list = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]).map((x) => String(x).trim().replace(/\s+/g, ' '));
const course = (slug) => slug.split('/').slice(0, -1).join('/');
const codeYear = (code) => { const m = String(code).match(/^AC9[A-Z]+?(F(?=[A-Z0-9])|\d{1,2}(?=[A-Z]))/); return m ? (m[1] === 'F' ? 0 : Number(m[1])) : null; };

/** { cross: [...], openers: [...] }. data: loadProgressions(); refreshers: id -> block (with `covers`). */
export function openDecisions(lessons, { data, refreshers = {} }) {
  const yearOf = (code) => data.get(code)?.year ?? codeYear(code);
  // Lessons by the standard and node they teach, in a stable order (year, course, order) so "first" means the opener.
  const sorted = lessons.slice().sort((a, b) => course(a.slug).localeCompare(course(b.slug)) || (a.order ?? 0) - (b.order ?? 0) || a.slug.localeCompare(b.slug));
  const byCode = new Map();
  for (const l of sorted) for (const s of list(l.node)) { const r = parseRef(s); if (!r?.n) continue; if (!byCode.has(r.code)) byCode.set(r.code, []); byCode.get(r.code).push({ n: r.n, l }); }
  const teaching = (code, nodes = []) => [...new Set((byCode.get(code) || []).filter((x) => !nodes.length || nodes.includes(x.n)).map((x) => x.l))];
  const covered = (code) => Object.values(refreshers).find((b) => (b.covers || []).some((c) => parseRef(c)?.code === code));
  const names = (l, code) => [...list(l.uses), ...list(l.assumes)].some((s) => parseRef(s)?.code === code);
  const first = (code) => teaching(code)[0] || null;

  const cross = [];
  for (const [code, d] of data) {
    for (const k of d.cross || []) {
      if (k.timing !== 'earlier') continue;
      const ty = yearOf(k.to);
      if (ty == null || d.year == null || ty >= d.year) continue;   // never forward (Kit's timing and the years must agree)
      const own = teaching(code, k.nodes);
      if (!own.length) continue;   // no lesson on this standard (or node) yet
      const target = teaching(k.to, k.to_nodes)[0] || teaching(k.to)[0] || null, block = covered(k.to);
      if (!target && !block) continue;   // nothing on the site to link to: T24 says teach it in the lesson
      if (teaching(code).some((l) => names(l, k.to))) continue;   // a lesson of this standard has decided
      const at = k.nodes.length ? own[0] : first(code);
      cross.push({ lesson: at.slug, standard: code, to: k.to, toTitle: data.get(k.to)?.title || '', toYear: ty, relationship: k.relationship, thread: k.thread || '', note: k.note || '', target: block ? `refresh/${block.id}` : target.slug });
    }
  }

  const openers = [];
  for (const [code, d] of data) {
    const l = first(code);
    if (!l || (d.year ?? 0) < 7) continue;
    const back = (d.prior || []).filter((p) => p !== code && (yearOf(p) ?? 0) >= 7 && teaching(p).length);
    if (!back.length || back.some((p) => names(l, p))) continue;
    openers.push({ lesson: l.slug, standard: code, prior: back.map((p) => ({ code: p, title: data.get(p)?.title || '', lesson: teaching(p)[0].slug })) });
  }
  return { cross, openers };
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const { loadLessons, getRefreshers } = await import('./lesson.mjs');
  const { loadProgressions } = await import('./progressions.mjs');
  const only = process.argv[2] || '';
  const { cross, openers } = openDecisions(loadLessons(), { data: loadProgressions(), refreshers: getRefreshers().blocks });
  const pick = (xs) => xs.filter((x) => !only || x.lesson.startsWith(only + '/'));
  const c = pick(cross), o = pick(openers);
  const bySubject = (xs) => { const m = new Map(); for (const x of xs) { const s = x.lesson.split('/')[0]; if (!m.has(s)) m.set(s, []); m.get(s).push(x); } return m; };
  console.log(`Open prior-knowledge decisions${only ? ` (${only})` : ''}: ${c.length} cross-subject links, ${o.length} openers.`);
  console.log('Answer each with uses: (link to it) or assumes: (no link: the lesson teaches it, or class does). Rules: roadmap/rules.md T24.\n');
  for (const [s, xs] of bySubject(c)) {
    console.log(`## ${s}: cross-subject links Kit lists, not yet decided`);
    let last = '';
    for (const x of xs.sort((a, b) => a.lesson.localeCompare(b.lesson))) {
      if (x.lesson !== last) console.log(`- ${x.lesson} (${x.standard})`);
      last = x.lesson;
      console.log(`    ${x.to} Year ${x.toYear}: ${x.toTitle}${x.relationship ? ` [${x.relationship}]` : ''}${x.thread ? ` {${x.thread}}` : ''} → on site: ${x.target}${x.note ? `\n      ${x.note}` : ''}`);
    }
    console.log('');
  }
  for (const [s, xs] of bySubject(o)) {
    console.log(`## ${s}: openers that link back to nothing`);
    for (const x of xs) console.log(`- ${x.lesson} (${x.standard}) builds on ${x.prior.map((p) => `${p.code} ${p.title} → ${p.lesson}`).join('; ')}`);
    console.log('');
  }
}
