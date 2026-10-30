// Brief pages (tools/briefs.mjs): <course>/briefs/ lists a course's briefs; <course>/briefs/<id>/ is one printable task
// sheet. No scripts and nothing stored: students tick boxes on paper or just read it.
import { PROJECT_CSS } from './project-view.mjs';

export const BRIEF_CSS = PROJECT_CSS + `
.bfprint{float:right;font:inherit;font-weight:600;font-size:15px;padding:8px 16px;border-radius:10px;border:1px solid var(--accent);background:transparent;color:var(--accent);cursor:pointer}
.bfbox ul{margin:6px 0;padding-left:0;list-style:none}.bfbox li{display:flex;gap:10px;margin:7px 0;align-items:flex-start;font-size:15.5px}
.bfbox li::before{content:'';flex:none;width:17px;height:17px;margin-top:3px;border:2px solid var(--muted);border-radius:4px}
.bfbox.plain li::before{display:none}.bfbox.plain ul{padding-left:1.3em;list-style:disc}.bfbox.plain li{display:list-item}
.bfnode{margin:10px 0 2px;font-weight:600;font-size:14.5px;color:var(--muted)}
.wpt-skel-do{margin:6px 0 10px}
.wpt-skel-good{margin:10px 0 4px;font-weight:700;font-size:15px}
.wpt-skel-try{margin:12px 0 2px;padding-top:10px;border-top:1px solid var(--line);font-size:14.5px}
.wpt-skel-try b{color:var(--muted)}.wpt-skel-try ul{margin:4px 0 0;padding-left:1.2em;list-style:disc}.wpt-skel-try li{display:list-item;margin:4px 0;font-size:14.5px}.wpt-skel-try li::before{display:none}
.wpt-skel-soon{color:var(--muted)}
@media print{nav,.bfprint,.crumb,.cfoot{display:none!important}body{background:#fff}.pjbox{break-inside:avoid;border-color:#999}}
`;

/** The list of a course's briefs or inquiry skeletons. cards: [{ id, title, after, goalText }] */
export function briefListBody({ esc, title, cards, kind = 'brief' }) {
  const isSkel = kind === 'skeleton';
  const heading = isSkel ? `${esc(title)}: inquiry skeletons` : `${esc(title)}: project briefs`;
  const lede = isSkel
    ? 'One inquiry outline per subject for a full class investigation on your teacher\'s topic. Write your topic, question, notes and response in your own book or document; each stage below shows what good work looks like and which short lessons here can help.'
    : 'Use what you learned to make something and explain your choices. Each brief says what to make, what to hand in and what to show you can do. Print one or share its link.';
  return `<header class="top"><a class="crumb" href="../">← ${esc(title)}</a><h1>${heading}</h1>` +
    `<p class="lede">${lede}</p></header>` +
    `<div class="pjlist">${cards.map((c) => `<a class="pjcard" href="${esc(c.id)}/"><b>${esc(c.title)}</b><small>${esc(isSkel ? c.after : `After ${c.after}`)}</small><span>${esc(c.goalText)}</span></a>`).join('')}</div>`;
}

/** One brief or inquiry skeleton. nodes: [{ code, n, descriptor, label, criteria }]; stages (for skeletons): [{ title, you_will, nodes, lessons: [{ label, href, note, soon }] }]. */
export function briefPageBody({ esc, md, courseTitle, b, after, nodes, stages = [] }) {
  const list = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const criteriaOf = (ns) => ns.filter((n) => n.criteria?.length).map((n) => `<p class="bfnode">${esc(n.label)}</p>${list(n.criteria)}`).join('');
  if (b.kind === 'skeleton') {
    const lessonItem = (l) => l.soon
      ? `<li><span class="wpt-skel-soon">${esc(l.label)} <em>(Coming later)</em></span></li>`
      : `<li><a href="${esc(l.href)}">${esc(l.label)}</a>${l.note ? ` <span class="wpt-skel-soon">(${esc(l.note)})</span>` : ''}</li>`;
    const stageBoxes = stages.map((st) => {
      const crit = criteriaOf(st.nodes || []);
      const tries = (st.lessons || []).length
        ? `<div class="wpt-skel-try"><b>Need help? Try…</b><ul>${st.lessons.map(lessonItem).join('')}</ul></div>`
        : '';
      return `<section class="pjbox bfbox wpt-skel-stage"><h2>${esc(st.title)}</h2>` +
        `<p class="wpt-skel-do"><b>You will:</b> ${esc(st.you_will)}</p>` +
        (crit ? `<p class="wpt-skel-good">Good looks like</p>${crit}` : '') +
        `${tries}</section>`;
    }).join('');
    return `<header class="top"><a class="crumb" href="../">← ${esc(courseTitle)}: inquiry skeletons</a><button type="button" class="bfprint" onclick="window.print()">Print</button><h1>${esc(b.title)}</h1></header>` +
      `<p class="pjafter">Inquiry skeleton · ${esc(b.subject || after)}</p><div class="pjgoal">${md(String(b.goal || ''))}</div>` +
      stageBoxes +
      `<section class="pjbox bfbox plain"><h2>Hand in</h2>${list(b.handin || [])}</section>` +
      ((b.stretch || []).length ? `<section class="pjbox bfbox plain"><h2>Make it yours</h2>${list(b.stretch)}</section>` : '');
  }
  const criteria = criteriaOf(nodes);
  return `<header class="top"><a class="crumb" href="../">← ${esc(courseTitle)}: project briefs</a><button type="button" class="bfprint" onclick="window.print()">Print</button><h1>${esc(b.title)}</h1></header>` +
    `<p class="pjafter">Project brief · after ${esc(after)}</p><div class="pjgoal">${md(String(b.goal || ''))}</div>` +
    `<section class="pjbox bfbox"><h2>Steps along the way</h2><p>Tick each one when it is done.</p>${list(b.milestones || [])}</section>` +
    `<section class="pjbox bfbox plain"><h2>Hand in</h2>${list(b.handin || [])}</section>` +
    (criteria ? `<section class="pjbox bfbox"><h2>Show that you can</h2><p>Your work and your explanation should show each of these.</p>${criteria}</section>` : '') +
    ((b.stretch || []).length ? `<section class="pjbox bfbox plain"><h2>Make it yours</h2>${list(b.stretch)}</section>` : '');
}
