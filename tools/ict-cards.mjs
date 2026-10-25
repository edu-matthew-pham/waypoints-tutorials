// ICT cards (26 Oct 2026): the reference side of an ICT skill. `content/ict/<course>/cards.yml` lists cards; each is
// one screen: the idea, steps that work in any app, a note for each common app, and a link to the lesson that teaches it.
// A card has no ticks and no progress. The lesson counts toward progress; the card is for looking up.
// card: { id, title, unit, lesson (folder name), idea, steps[], watch?, apps{ name: text } }
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse as YAMLparse } from 'yaml';
import { esc } from './lesson-view.mjs';

/** Cards of a course folder (content/ict/<course>), or [] when it has none. */
export function loadIctCards(courseDir) {
  const f = join(courseDir, 'cards.yml');
  return existsSync(f) ? (YAMLparse(readFileSync(f, 'utf8')).cards || []) : [];
}

/** Problems: missing fields, a lesson or unit that does not exist, a repeated id. */
export function validateIctCards(cards, { course, lessonSlugs, unitIds }) {
  const errs = [], seen = new Set();
  for (const c of cards) {
    const w = `${course}/cards.yml › ${c.id || c.title || '?'}`;
    for (const k of ['id', 'title', 'unit', 'lesson', 'idea']) if (!c[k]) errs.push(`${w}: needs ${k}`);
    if (!Array.isArray(c.steps) || !c.steps.length) errs.push(`${w}: needs steps`);
    else if (c.steps.length > 6) errs.push(`${w}: more than 6 steps (a card is one screen)`);
    if (!c.apps || !Object.keys(c.apps).length) errs.push(`${w}: needs apps (a note for each common app)`);
    if (seen.has(c.id)) errs.push(`${w}: id repeated`); seen.add(c.id);
    if (c.lesson && !lessonSlugs.includes(`${course}/${c.lesson}`)) errs.push(`${w}: lesson "${c.lesson}" is not in the course`);
    if (c.unit && unitIds && !unitIds.includes(c.unit)) errs.push(`${w}: unit "${c.unit}" is not a unit of the course`);
  }
  return errs;
}

export const ICT_CARD_CSS = `.ict-card{display:block;padding:14px 0;border-top:1px solid var(--line,#ddd)}
.ict-card h3{margin:0 0 4px;font-size:1.05rem}.ict-card p{margin:4px 0}.ict-card ol{margin:6px 0;padding-left:22px}
.ict-card .ict-watch{font-size:.95em}.ict-card .ict-watch b{color:var(--muted,#666)}
.ict-apps{margin:8px 0 0;display:grid;grid-template-columns:max-content 1fr;gap:2px 12px;font-size:.95em}.ict-apps dt{font-weight:600}.ict-apps dd{margin:0}
.ict-more{font-size:.92em;color:var(--muted,#666)}
@media(max-width:640px){.ict-apps{grid-template-columns:1fr}.ict-apps dd{margin-bottom:4px}}`;

/** The text a search needs to find a card. */
export const ictCardText = (c) => [c.title, c.idea, ...(c.steps || []), c.watch || '', ...Object.entries(c.apps || {}).flat()].join(' ').toLowerCase();

/** The reference page body. units: [{id,title}]; lessonTitle(folder) -> title. */
export function ictCardsBody({ cards, units, lessonTitle }) {
  const card = (c) => `<article class="ref-item ict-card" id="${esc(c.id)}" data-text="${esc(ictCardText(c))}"><div><h3>${esc(c.title)}</h3><p>${esc(c.idea)}</p>` +
    `<ol>${c.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>` +
    (c.watch ? `<p class="ict-watch"><b>Watch for:</b> ${esc(c.watch)}</p>` : '') +
    `<dl class="ict-apps">${Object.entries(c.apps).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>` +
    `<p class="ict-more">Other apps work the same way; look for the same word in the menus. Lesson: <a href="../${esc(c.lesson)}/">${esc(lessonTitle(c.lesson))}</a></p></div></article>`;
  const secs = units.map((u) => ({ u, cs: cards.filter((c) => c.unit === u.id) })).filter((s) => s.cs.length)
    .map((s) => `<section class="ref-section"><h2 class="ref-group">${esc(s.u.title)}</h2>${s.cs.map(card).join('')}</section>`).join('');
  const search = `<input type="search" id="ref-search" class="ref-search" placeholder="Search: a skill, or an app" aria-label="Search the cards"><p id="ref-none" class="lede" hidden></p>`;
  const script = `<script>(function(){var q=document.getElementById('ref-search'),none=document.getElementById('ref-none');q.addEventListener('input',function(){var w=q.value.toLowerCase().split(/\\s+/).filter(Boolean),n=0;document.querySelectorAll('.ref-section').forEach(function(sec){var any=false;sec.querySelectorAll('.ref-item').forEach(function(it){var t=it.dataset.text,hit=w.every(function(x){return t.indexOf(x)>=0});it.hidden=!hit;if(hit){any=true;n++}});sec.hidden=!any});none.hidden=n>0;none.textContent=n?'':'Nothing matches "'+q.value.trim()+'".'})})();</script>`;
  return `<style>${ICT_CARD_CSS}</style>${search}${secs}${script}`;
}
