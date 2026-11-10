// Shared refresher blocks (10 Nov 2026, roadmap/shared.md › Prior-knowledge tools; AUTHORING › Refreshers).
// One file per idea in data/refreshers/<id>.yml, written once and used by any lesson that needs it, so the wording
// can't drift between lessons. The same file makes two of the four levels for handling a leap:
//   1. the fold: `refresher:` on a step or task shows it as a closed "Build up to it" above the hints (lesson-view.mjs);
//   2. the short page: /refresh/<id>/, one idea, with the earlier lesson's recap and the full lesson a click further.
// Pure helpers first (shared with Create via build-create.mjs); the Node loader and the page writer are below them.

import { arrangeOptions, validateLessonCore } from './lesson-core.mjs';

export const REFRESHER_FIELDS = ['title', 'from', 'summary', 'keywords', 'covers', 'fold', 'parts', 'check', 'page', 'lessons'];
export const REFRESHER_CHECKS = ['question', 'number'];
/** A lesson's example line beside the block: one line, short enough to skip in seconds. */
export const EXAMPLE_MAX = 200;

/** `refresher: rate` or `{ block, part?, example? }` -> { block, parts: [ids] | null, example }. */
export function refresherUse(v) {
  if (typeof v === 'string') return { block: v.trim(), parts: null, example: '' };
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  return { block: String(v.block || '').trim(), parts: v.part == null ? null : [].concat(v.part).map(String), example: v.example == null ? '' : String(v.example) };
}

/** Errors in one block (id: its file name). checkErrors(check, where) validates a check as lessons do. */
export function validateRefresher(id, b, lessonSlugs = null) {
  const errs = [], err = (m) => errs.push(`data/refreshers/${id}.yml › ${m}`);
  const str = (s) => typeof s === 'string' && s.trim() !== '';
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) err('the file name must be lowercase words joined by hyphens (it is the block id)');
  if (!b || typeof b !== 'object') return [`data/refreshers/${id}.yml › must be a mapping`];
  for (const k of Object.keys(b)) if (!REFRESHER_FIELDS.includes(k)) err(`unknown field "${k}" (use ${REFRESHER_FIELDS.join(', ')})`);
  if (!str(b.title)) err('title: the idea, in a few words');
  if (!str(b.summary)) err('summary: one line, for the index and search');
  if (b.from !== undefined && !/^[a-z][a-z ]*$/.test(String(b.from))) err('from: the subject the idea comes from, in lowercase (the fold opens "From maths:")');
  if (!str(b.fold)) err('fold: one or two sentences, the "Build up to it" text');
  else if (b.fold.split(/(?<=[.!?])\s+/).filter(Boolean).length > 3) err('fold: keep it to one or two sentences (three at most), so a student who doesn\'t need it skips it in seconds');
  if (b.covers !== undefined && !(Array.isArray(b.covers) && b.covers.every((c) => /^AC9[A-Z0-9]+( n\d+)?$/.test(String(c))))) err('covers: a list of curriculum codes or nodes, e.g. [AC9M8M05, AC9M7N06 n3]');
  if (b.page !== false && !str(b.page)) err('page: the short page\'s Markdown, or false for a one-liner with no page');
  if (!Array.isArray(b.lessons || [])) err('lessons: a list of lesson slugs, lightest first');
  else if (lessonSlugs) for (const s of b.lessons || []) if (!lessonSlugs.has(s)) err(`lessons: no lesson "${s}"`);
  const checks = [];
  if (b.check !== undefined) checks.push(['check', b.check]);
  if (b.parts !== undefined) {
    if (!b.parts || typeof b.parts !== 'object' || Array.isArray(b.parts)) err('parts: a mapping of id: { text, check? }');
    else for (const [p, v] of Object.entries(b.parts)) {
      if (!v || !str(v.text)) err(`parts.${p}: needs text`);
      for (const k of Object.keys(v || {})) if (!['text', 'check'].includes(k)) err(`parts.${p}: unknown field "${k}" (use text, check)`);
      if (v?.check !== undefined) checks.push([`parts.${p}.check`, v.check]);
    }
  }
  for (const [where, k] of checks) {
    if (!REFRESHER_CHECKS.includes(k?.type)) { err(`${where}: type must be ${REFRESHER_CHECKS.join(' or ')} (one easy check)`); continue; }
    // Validate the check the way a lesson's would: a one-step stand-in lesson.
    const stand = { slug: `refresh/${id}`, title: b.title || id, language: 'science', steps: [{ id: 'step-1', title: 'Refresher', body: '', tasks: [], config: { stage: 'info', check: k } }] };
    for (const e of validateLessonCore(stand, () => null, {}, {})) if (/step-1/.test(e)) err(`${where}: ${e.replace(/^.*?step-1 "Refresher" ?/, '').replace(/^check ?/, '')}`);
  }
  return errs;
}

/** A block ready for the page: question options arranged as a lesson's are (seeded shuffle), every check keyed by part. */
export function prepareRefresher(id, b) {
  const arrange = (k, seed) => (k?.type === 'question' ? arrangeOptions(k, `refresh/${id}${seed}`) : k);
  const parts = Object.fromEntries(Object.entries(b.parts || {}).map(([p, v]) => [p, { text: String(v.text), check: v.check ? arrange(v.check, `#${p}`) : null }]));
  return {
    id, title: String(b.title), from: b.from ? String(b.from) : '', summary: String(b.summary || ''), keywords: String(b.keywords || ''),
    covers: (b.covers || []).map(String), fold: String(b.fold), parts, check: b.check ? arrange(b.check, '') : null,
    page: b.page === false ? false : String(b.page || ''), lessons: (b.lessons || []).map(String),
  };
}

/** What one use shows: the fold's lines and its one check (a single chosen part's own check, else the block's). */
export function refresherView(block, use) {
  const ids = use.parts || Object.keys(block.parts);
  const parts = ids.map((p) => block.parts[p]).filter(Boolean);
  const check = (use.parts?.length === 1 && block.parts[use.parts[0]]?.check) || block.check;
  return { lines: parts.map((p) => p.text), check };
}

/** A lesson's earliest year from its curriculum nodes (AC9S7U05 n4 -> 7; Foundation -> 0), or null. */
export function yearFromNodes(node) {
  const ys = [].concat(node || []).map((s) => String(s).match(/^AC9[A-Z]+?(F(?=[A-Z0-9])|\d{1,2}(?=[A-Z]))/)).filter(Boolean).map((m) => (m[1] === 'F' ? 0 : Number(m[1])));
  return ys.length ? Math.min(...ys) : null;
}

// ---------- Node: load every block, and write the short pages ----------

/** id -> prepared block, plus errors. Reads data/refreshers/*.yml (fs and YAML passed in, so this file stays browser-safe). */
export function loadRefreshers({ readdirSync, readFileSync, existsSync, join, parse }, { root = 'data/refreshers', lessonSlugs = null } = {}) {
  const blocks = {}, errors = [];
  if (!existsSync(root)) return { blocks, errors };
  for (const f of readdirSync(root).filter((n) => n.endsWith('.yml')).sort()) {
    const id = f.slice(0, -4);
    let b;
    try { b = parse(readFileSync(join(root, f), 'utf8')); } catch (e) { errors.push(`data/refreshers/${f} › ${e.message}`); continue; }
    const errs = validateRefresher(id, b, lessonSlugs);
    errors.push(...errs);
    if (!errs.length) blocks[id] = prepareRefresher(id, b);
  }
  return { blocks, errors };
}

const escH = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const REFRESH_CSS = `.wpt-rf{max-width:46rem}.wpt-rf-from{display:inline-block;font-size:13px;font-weight:600;color:var(--muted);border:1px solid var(--line);border-radius:99px;padding:2px 10px;margin:0 0 6px}
.wpt-rf-try{margin:22px 0;padding:12px 16px;background:var(--card);border:1px solid var(--line);border-radius:12px}.wpt-rf-try p{margin:.3em 0}.wpt-rf-try summary{cursor:pointer;font-weight:600;color:var(--accent)}
.wpt-rf-more{margin:26px 0 0;padding:14px 18px;background:var(--card);border:1px solid var(--line);border-radius:14px}.wpt-rf-more h2{font-size:1.05rem;margin:0 0 6px}.wpt-rf-more ul{margin:0;padding-left:20px}.wpt-rf-more li{margin:6px 0}.wpt-rf-more a{color:var(--accent);font-weight:600}.wpt-rf-more small{color:var(--muted)}
.wpt-rf-list{margin:18px 0;padding:14px 20px;background:var(--card);border:1px solid var(--line);border-radius:14px}.wpt-rf-list ul{margin:0;padding-left:20px}.wpt-rf-list li{margin:6px 0}.wpt-rf-list a{color:var(--accent);font-weight:600}.wpt-rf-list small{color:var(--muted)}`;

// ?from=<year> (set by the fold's link): hide links to lessons from that year or later, so a Year 7 student is never
// sent on to a Year 8 lesson (never link forward). Without it every link shows.
export const REFRESH_JS = `(function(){var y=Number(new URLSearchParams(location.search).get('from'));if(!isFinite(y)||!y)return;
var n=0,all=document.querySelectorAll('.wpt-rf-more li[data-year]');[].forEach.call(all,function(li){if(Number(li.dataset.year)>=y){li.hidden=true;n++}});
if(n&&n===all.length){var m=document.querySelector('.wpt-rf-more');if(m)m.hidden=true}})();`;

/** The short page's body. links: [{ title, href, year, label, recap }] (recap: the recap card's href, or ''). */
export function refresherPageBody(block, { md, links = [], up = '../../' }) {
  const from = block.from ? `<p class="wpt-rf-from">A ${escH(block.from)} idea, used here in a new place</p>` : '';
  const k = block.check;
  const tryIt = k ? `<details class="wpt-rf-try"><summary>Try one: ${escH(k.q)}</summary>${k.type === 'number' ? `<p><b>${escH(String(k.answer))}</b></p>` : `<p><b>${escH(k.options[k.answer])}</b></p>`}${k.explain ? `<p>${escH(k.explain)}</p>` : ''}</details>` : '';
  const more = links.length ? `<section class="wpt-rf-more"><h2>Want more?</h2><ul>${links.map((l) => `<li data-year="${l.year ?? ''}">${l.recap ? `<a href="${escH(up + l.recap)}">Quick recap: ${escH(l.title)}</a> · ` : ''}<a href="${escH(up + l.href)}">${l.recap ? 'the full lesson' : `The full lesson: ${escH(l.title)}`}</a> <small>(${escH(l.label)})</small></li>`).join('')}</ul></section>` : '';
  return `<div class="pabout wpt-rf">${from}${md(block.page)}${tryIt}${more}</div>`;
}
