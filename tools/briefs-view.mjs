// Brief pages (tools/briefs.mjs): <course>/briefs/ lists a course's briefs; <course>/briefs/<id>/ is one printable task
// sheet. No scripts and nothing stored: students tick boxes on paper or just read it.
import { PROJECT_CSS } from './project-view.mjs';

export const BRIEF_CSS = PROJECT_CSS + `
.bfprint{float:right;font:inherit;font-weight:600;font-size:15px;padding:8px 16px;border-radius:10px;border:1px solid var(--accent);background:transparent;color:var(--accent);cursor:pointer}
.bfbox ul{margin:6px 0;padding-left:0;list-style:none}.bfbox li{display:flex;gap:10px;margin:7px 0;align-items:flex-start;font-size:15.5px}
.bfbox li::before{content:'';flex:none;width:17px;height:17px;margin-top:3px;border:2px solid var(--muted);border-radius:4px}
.bfbox.plain li::before{display:none}.bfbox.plain ul{padding-left:1.3em;list-style:disc}.bfbox.plain li{display:list-item}
.bfnode{margin:10px 0 2px;font-weight:600;font-size:14.5px;color:var(--muted)}
@media print{nav,.bfprint,.crumb,.cfoot{display:none!important}body{background:#fff}.pjbox{break-inside:avoid;border-color:#999}}
`;

/** The list of a course's briefs. cards: [{ id, title, after, goalText }] */
export function briefListBody({ esc, title, cards }) {
  return `<header class="top"><a class="crumb" href="../">← ${esc(title)}</a><h1>${esc(title)}: project briefs</h1>` +
    `<p class="lede">Use what you learned to make something and explain your choices. Each brief says what to make, what to hand in and what to show you can do. Print one or share its link.</p></header>` +
    `<div class="pjlist">${cards.map((c) => `<a class="pjcard" href="${esc(c.id)}/"><b>${esc(c.title)}</b><small>After ${esc(c.after)}</small><span>${esc(c.goalText)}</span></a>`).join('')}</div>`;
}

/** One brief. nodes: [{ code, n, descriptor, label, criteria }]. */
export function briefPageBody({ esc, md, courseTitle, b, after, nodes }) {
  const list = (items, cls = '') => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const criteria = nodes.filter((n) => n.criteria?.length).map((n) => `<p class="bfnode">${esc(n.label)}</p>${list(n.criteria)}`).join('');
  return `<header class="top"><a class="crumb" href="../">← ${esc(courseTitle)}: project briefs</a><button type="button" class="bfprint" onclick="window.print()">Print</button><h1>${esc(b.title)}</h1></header>` +
    `<p class="pjafter">Project brief · after ${esc(after)}</p><div class="pjgoal">${md(String(b.goal || ''))}</div>` +
    `<section class="pjbox bfbox"><h2>Steps along the way</h2><p>Tick each one when it is done.</p>${list(b.milestones || [])}</section>` +
    `<section class="pjbox bfbox plain"><h2>Hand in</h2>${list(b.handin || [])}</section>` +
    (criteria ? `<section class="pjbox bfbox"><h2>Show that you can</h2><p>Your work and your explanation should show each of these.</p>${criteria}</section>` : '') +
    ((b.stretch || []).length ? `<section class="pjbox bfbox plain"><h2>Make it yours</h2>${list(b.stretch)}</section>` : '');
}
