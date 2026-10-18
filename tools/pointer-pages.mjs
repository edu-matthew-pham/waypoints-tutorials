// Teacher pointer pages (Project doc create-generic-proposal › Coverage model): one page per Waypoints Kit node at
// /teach/curriculum/<subject>/<code>/n<k>/, with a page per standard and an index, generated from
// data/curriculum/<subject>.json (tools/import-curriculum.mjs). Each node page shows what Kit says (checkpoint,
// success criteria, prior knowledge, width, hinge, response modes, a link to the node file) plus what only this site
// knows: the lessons tagged with that node, and "Make a primer for this", which opens Create with the node pre-filled.
// Teacher-facing only: nothing in the student navbar or subject menus; linked from /teach/. Until data/review/<subject>.yml
// says the subject (or node) is reviewed, every page says "Draft, from Waypoints Kit <version>" and carries noindex.
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse as YAMLparse } from 'yaml';
import { createHash } from 'node:crypto';
import { CSS, NAV_CSS, NAV_JS } from './lesson-view.mjs';
import { KIT_REPO, KIT_SUBJECTS, WIDTH, nodeKey, nodeParam, isReviewed, yearText } from './kit-nodes.mjs';

// Subjects with pointer pages: every imported Kit subject, as drafts until reviewed (19 Oct: review happens through the
// lessons teachers make from them, so the pages come first).
export const POINTER_SUBJECTS = KIT_SUBJECTS.map((s) => s.id);
export const CREATE_PATH = 'code/create/';          // Create's address from the site root
const LABEL = Object.fromEntries(KIT_SUBJECTS.map((s) => [s.id, s.label]));

export function loadReview(subject, root = '.') {
  const f = join(root, 'data', 'review', `${subject}.yml`);
  return existsSync(f) ? YAMLparse(readFileSync(f, 'utf8')) || {} : { status: 'draft' };
}

export const POINTER_CSS = `.draft{background:#fff4d6;color:#5a4300;border:1px solid #e9c46a;border-radius:10px;padding:10px 14px;font-size:14px;margin:0 0 16px}
@media (prefers-color-scheme:dark){.pp .make{color:#1b1206}.draft{background:#3a3110;color:#f3e3b0;border-color:#7a6420}}
.pp h2{font-size:1.1rem;margin:22px 0 8px}.pp .chk{font-size:1.05rem;line-height:1.5}.pp ul{padding-left:20px}.pp li{margin:4px 0}
.pp .make{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;border-radius:8px;padding:10px 16px;margin:6px 0}
.pp .hinge{border-left:4px solid var(--accent);padding:4px 12px;margin:8px 0}.pp .mode{margin:8px 0}.pp .mode b{display:block}
.pp dl.w{display:grid;grid-template-columns:max-content 1fr;gap:6px 14px;margin:0}.pp dl.w dt{font-weight:600}.pp dl.w dd{margin:0}
@media (max-width:560px){.pp dl.w{grid-template-columns:1fr}.pp dl.w dd{margin-bottom:8px}}
.pp .pn{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:26px;font-size:14px}
.pp .nodes{list-style:none;padding:0;display:grid;gap:10px}.pp .nodes a{display:block;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 16px;color:inherit;text-decoration:none}.pp .nodes a:hover{border-color:var(--accent)}
.pp .nodes span{display:block;color:var(--muted);font-size:14px;margin-top:4px}.pp .tag{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--accent);margin-left:6px}
.pp .stds{list-style:none;padding:0;display:grid;gap:8px}.pp .stds a{display:flex;gap:10px;flex-wrap:wrap;align-items:baseline;color:inherit;text-decoration:none;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px}
.pp .stds a:hover{border-color:var(--accent)}.pp .stds code{font-size:13px;color:var(--muted)}.pp .stds small{color:var(--muted);margin-left:auto}
.pp .src{color:var(--muted);font-size:13px;margin-top:28px}.pp .muted{color:var(--muted);font-size:14px}.pp .tmeta{color:var(--muted);font-size:14px}`;

/**
 * Write the pages. ctx: { OUT, page, navFor, esc, lessons } where lessons are parsed lessons (slug, title, node).
 * Returns the number of node pages written.
 */
let ASSETS = null;
function sharedAssets(OUT) {
  if (ASSETS) return ASSETS;
  const css = CSS + NAV_CSS + POINTER_CSS, js = NAV_JS, v = createHash('sha1').update(css + js).digest('hex').slice(0, 10);
  mkdirSync(join(OUT, 'teach', 'curriculum'), { recursive: true });
  writeFileSync(join(OUT, 'teach', 'curriculum', 'pointer.css'), css);
  writeFileSync(join(OUT, 'teach', 'curriculum', 'pointer.js'), js);
  return (ASSETS = { css: `teach/curriculum/pointer.css?v=${v}`, js: `teach/curriculum/pointer.js?v=${v}` });
}

export function buildPointerPages(subject, ctx) {
  const { OUT, page, navFor, esc, lessons } = ctx;
  const cur = JSON.parse(readFileSync(join('data', 'curriculum', `${subject}.json`), 'utf8'));
  const review = loadReview(subject), kitV = review.kit || '';
  const name = LABEL[subject] || subject;
  const ds = cur.descriptors.filter((d) => d.year >= 7);
  const byCode = new Map(ds.map((d) => [d.code, d]));
  const tagged = (code, n) => lessons.filter((l) => (l.node || []).map(String).some((r) => r === `${code} n${n}`));
  const base = `teach/curriculum/${subject}`;
  const up = (p) => '../'.repeat(p.split('/').length);
  const draftNote = (reviewed) => reviewed ? '' : `<p class="draft" role="note"><b>Draft, from Waypoints Kit ${esc(kitV)}.</b> Generated from Kit's node data and not yet reviewed by a specialist in ${esc(name)}: treat it as a starting suggestion and check it before use.</p>`;
  const head = (reviewed) => (reviewed ? '' : '<meta name="robots" content="noindex">');
  const kitLink = (d) => (d.kit ? `${KIT_REPO}/blob/main/${d.kit}` : `${KIT_REPO}/tree/main/index`);
  // About 3,000 pages across every subject: each links one shared style sheet and the navbar script (written once,
  // stamped with a hash for caching) instead of inlining the site's ~75 KB of lesson CSS and JS, which these pages
  // don't use. Same look: the same CSS, NAV_CSS and NAV_JS as page().
  const assets = sharedAssets(OUT);
  const write = (path, title, body, reviewed) => {
    mkdirSync(join(OUT, path), { recursive: true });
    const r = up(path);
    writeFileSync(join(OUT, path, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${head(reviewed)}
<title>${esc(title)}</title><link rel="stylesheet" href="${r}${assets.css}"></head><body>${navFor(path, 'home')}<div class="wrap"><div class="pp">${body}</div></div><script src="${r}${assets.js}"></script></body></html>`);
  };
  const src = `<p class="src">Descriptors: Australian Curriculum v9 (ACARA, CC BY 4.0). Waypoints, success criteria, width and response modes: Waypoints Kit ${esc(kitV)} (CC BY-NC-SA 4.0), ${esc(cur.source || '')}. Corrections go to Kit, not this site.</p>`;
  const anyReviewed = ds.some((d) => d.nodes.some((n) => isReviewed(review, { code: d.code, n: n.n })));
  let count = 0;

  // Index: by year, then strand.
  const years = [...new Set(ds.map((d) => d.year))].sort((a, b) => a - b);
  const strands = [...new Set(ds.map((d) => d.strand))];
  const list = (arr) => `<ul class="stds">${arr.map((d) => {
    const nl = d.nodes.reduce((a, n) => a + tagged(d.code, n.n).length, 0);
    return `<li><a href="${esc(d.code)}/"><code>${esc(d.code)}</code><b>${esc(d.title)}</b><small>${d.nodes.length} waypoint${d.nodes.length === 1 ? '' : 's'}${nl ? ` · ${nl} lesson${nl === 1 ? '' : 's'}` : ''}</small></a></li>`;
  }).join('')}</ul>`;
  write(base, `${name} curriculum (teacher pointers)`,
    `<header class="top"><a class="crumb" href="../../">← Teacher guides</a><h1>${esc(name)}: curriculum pointers</h1><p class="lede">One page per waypoint in the Years 7–10 curriculum for ${esc(name)}: what students should be able to do, how to widen it, and a button to make a short primer lesson for it in Create.</p></header>` +
    draftNote(review.status === 'reviewed') +
    (['history', 'geography', 'civics', 'economics'].includes(subject) ? `<p class="muted">Knowledge standards cluster by topic and suit teacher-made topic units; skills standards recur across every topic and suit short primers.</p>` : '') +
    years.map((y) => `<h2>${esc(yearText(ds.find((d) => d.year === y)))}</h2>` + strands.map((s) => { const arr = ds.filter((d) => d.year === y && d.strand === s); return arr.length ? `<h3>${esc(s)}</h3>${list(arr)}` : ''; }).join('')).join('') + src,
    review.status === 'reviewed');

  for (const d of ds) {
    const sp = `${base}/${d.code}`, sReviewed = d.nodes.every((n) => isReviewed(review, { code: d.code, n: n.n }));
    write(sp, `${d.code}: ${d.title}`,
      `<header class="top"><a class="crumb" href="../">← ${esc(name)} curriculum</a><h1>${esc(d.title)}</h1><p class="tmeta">${esc(d.code)} · ${esc(yearText(d))} ${esc(name)} · ${esc(d.strand)}</p></header>` + draftNote(sReviewed) +
      `<h2>Descriptor</h2><p class="chk">${esc(d.description)}</p>` +
      (d.knowledge ? `<h2>Prior knowledge</h2><p>${esc(d.knowledge)}</p>` : '') +
      (d.endpoint ? `<h2>By the end</h2><p>${esc(d.endpoint)}</p>` : '') +
      `<h2>Waypoints</h2><ul class="nodes">${d.nodes.map((n) => `<li><a href="n${n.n}/"><b>${n.n}. ${esc(n.label)}</b>${n.hinge ? '<span class="tag" style="display:inline">Hinge</span>' : ''}<span>${esc(n.checkpoint)}</span></a></li>`).join('')}</ul>` +
      `<p><a href="${esc(kitLink(d))}">Kit node file for ${esc(d.code)}</a> (JSON)</p>` + src,
      sReviewed);
    d.nodes.forEach((n, i) => {
      const ref = { code: d.code, n: n.n }, reviewed = isReviewed(review, ref);
      const np = `${sp}/n${n.n}`, root = up(np), ls = tagged(d.code, n.n);
      const prev = d.nodes[i - 1], next = d.nodes[i + 1];
      const related = (n.related || []).map((c) => byCode.has(c) ? `<a href="../../${esc(c)}/">${esc(c)} ${esc(byCode.get(c).title)}</a>` : esc(c));
      const w = n.width || {};
      write(np, `${nodeKey(ref)}: ${n.label}`,
        `<header class="top"><a class="crumb" href="../">← ${esc(d.code)} ${esc(d.title)}</a><h1>${esc(n.label)}</h1><p class="tmeta">${esc(nodeKey(ref))} · waypoint ${n.n} of ${d.nodes.length} · ${esc(yearText(d))} ${esc(name)} · ${esc(d.strand)}${n.hinge ? ' · <b>Hinge</b>' : ''}</p></header>` + draftNote(reviewed) +
        `<h2>Checkpoint</h2><p class="chk">${esc(n.checkpoint)}</p>` +
        `<p><a class="make" href="${root}${CREATE_PATH}?node=${esc(nodeParam(ref))}">Make a primer for this</a><br><span class="muted">Opens Create with a Primer starter: title, goals from the success criteria, the misconception and width suggestions to choose from. Nothing is published until you send it in.</span></p>` +
        `<h2>Lessons on this site</h2>${ls.length ? `<ul>${ls.map((l) => `<li><a href="${root}${esc(l.slug)}/">${esc(l.title)}</a></li>`).join('')}</ul>` : '<p class="muted">None yet.</p>'}` +
        (n.criteria?.length ? `<h2>Success criteria</h2><ul>${n.criteria.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : '') +
        `<h2>Prior knowledge</h2>` + (prev ? `<p>Waypoint ${prev.n}: <a href="../n${prev.n}/">${esc(prev.label)}</a>.</p>` : (d.knowledge ? `<p>${esc(d.knowledge)}</p>` : '<p class="muted">Kit names none.</p>')) +
        `<h2>Width</h2><dl class="w">${w.minimum ? `<dt>Minimum</dt><dd>${esc(w.minimum)}</dd>` : ''}${w.typical ? `<dt>Typical</dt><dd>${esc(w.typical)}</dd>` : ''}${w.wider?.length ? `<dt>Wider</dt><dd><ul>${w.wider.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></dd>` : ''}</dl>` +
        (n.hinge ? `<h2>Hinge</h2><p class="hinge">${esc(n.hinge_reason || 'Kit marks this waypoint as a hinge: check it before moving on.')}</p>` : '') +
        (n.modes?.length ? `<h2>Response modes</h2><p class="muted">Where extra effort goes at this waypoint (width), not what kind of lesson it is.</p>${n.modes.map((m) => `<div class="mode"><b>${esc(WIDTH[m.mode]?.label || m.mode)}: ${esc(WIDTH[m.mode]?.weight || '')}</b>${esc(m.reason)}</div>`).join('')}` : '') +
        (related.length ? `<h2>Related standards</h2><p>${related.join(' · ')}</p>` : '') +
        `<p><a href="${esc(kitLink(d))}">Kit node file for ${esc(d.code)}</a> (JSON; this waypoint is node ${n.n})</p>` +
        `<nav class="pn" aria-label="Waypoints">${prev ? `<a href="../n${prev.n}/">← ${esc(prev.label)}</a>` : '<span></span>'}${next ? `<a href="../n${next.n}/">${esc(next.label)} →</a>` : ''}</nav>` + src,
        reviewed);
      count++;
    });
  }
  return { count, label: name, path: `${base}/`, draft: !anyReviewed && review.status !== 'reviewed' };
}
