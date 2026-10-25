// Teacher review sheet for the Code courses (25 Oct 2026, roadmap/code.md). Our guesses (which courses are the main
// focus of each Processes standard, who each course is for) laid out as a tick-sheet teachers can print, correct and
// hand back. Pure: returns the page body and a Markdown copy for Prepare Print.
import { readFileSync } from 'node:fs';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const BOX = '☐';
// Standards tagged lesson by lesson in How computers work (cyber safety), so they are not part of the coverage guess.
const TAGGED = new Set(['AC9TDI8P13', 'AC9TDI8P14', 'AC9TDI10P13', 'AC9TDI10P14']);

export function reviewSheet({ root = '.', coverage, courses, courseTitle, yearsLabel, yearsOf, lessonCount, afterOf }) {
  const dp = JSON.parse(readFileSync(`${root}/data/curriculum/digital-processes.json`, 'utf8')).descriptors
    .filter((d) => /^AC9TDI(8|10)P\d+$/.test(d.code) && !TAGGED.has(d.code))
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code, 'en', { numeric: true }));
  const names = (ps) => ps.map(courseTitle).join(', ');
  const stdRows = dp.map((d) => {
    const c = coverage.std.get(d.code);
    const focus = c ? (c.all ? 'Every Code course' : names(c.focus)) : '';
    const touches = c ? names(c.touches) : '';
    return { band: d.year === 8 ? 'Year 8' : 'Year 10', code: d.code.replace('AC9TDI', ''), title: d.title, focus: focus || 'none', touches: touches || 'none', none: !focus && !touches };
  });
  const courseRows = courses.map((p) => {
    const [lo, hi] = yearsOf(p), first = afterOf(p);
    return { title: courseTitle(p), years: lo == null ? 'not stated' : yearsLabel(lo, hi), lessons: lessonCount(p), after: first ? (first.length ? first.join('; ') : 'none') : '' };
  });

  const intro = 'These are our best guesses, written from course titles and summaries, not from a teacher reading the lessons. Please correct them freely. A course that only <i>touches</i> a standard meets it in passing; a teacher could extend it to cover the standard more fully, so touches are a flag for what to adapt.';
  const hand = 'Tick: <b>Agree</b> = this is right · <b>Should be focus</b> = more than a touch · <b>Wrong</b> = we have it wrong, say how in the notes.';
  const gaps = stdRows.filter((r) => r.none);
  const css = '<style>.rv{border-collapse:collapse;width:100%;font-size:14px;margin:8px 0 18px}.rv th,.rv td{border:1px solid var(--line,#ccc);padding:6px 8px;text-align:left;vertical-align:top}.rv thead th{background:var(--card,#fff)}.rv td.bx{text-align:center;width:64px;font-size:18px}.rv td.nt{min-width:130px}.rv .none{color:var(--muted,#666)}.rv-wrap{overflow-x:auto}@media print{nav,.crumb,.rv-no{display:none!important}.rv{font-size:11px}h2{break-after:avoid}tr{break-inside:avoid}}</style>';
  const tbl = (head, rows) => `<div class="rv-wrap"><table class="rv"><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;

  let body = css + `<header class="top"><a class="crumb" href="../../">← Teacher guides</a><h1>Code courses: which do you use?</h1><p class="lede">A short check for Digital Technologies teachers. Print it, tick it, hand it back.</p></header>` +
    `<p>${intro}</p><p class="rv-no"><a href="review.md" download>Download for Prepare Print (Markdown)</a> <button type="button" onclick="window.print()">Print</button></p>` +
    `<p><b>Name:</b> ________________ <b>Year levels you teach:</b> ________________</p>`;
  body += `<h2>1. Courses</h2><p>${esc('Tick Use if you use the course. Years and "Do first" are ours; where a course is not tied to a year level, write the years you would use it in.')}</p>` +
    tbl(['Course', 'Years (ours)', 'Lessons', 'Do first', 'Use', 'Years you use it', 'Notes'], courseRows.map((r) => `<tr><th scope="row">${esc(r.title)}</th><td>${esc(r.years)}</td><td>${r.lessons}</td><td>${esc(r.after)}</td><td class="bx">${BOX}</td><td class="nt"></td><td class="nt"></td></tr>`));
  body += `<h2>2. Standards: which courses cover them?</h2><p>${hand}</p>` +
    tbl(['Standard', 'Main focus (ours)', 'Touches (ours)', 'Agree', 'Should be focus', 'Wrong', 'Notes'], stdRows.filter((r) => !r.none).map((r) => `<tr><th scope="row">${r.band} · ${esc(r.code)}<br><span class="none">${esc(r.title)}</span></th><td>${esc(r.focus)}</td><td>${esc(r.touches)}</td><td class="bx">${BOX}</td><td class="bx">${BOX}</td><td class="bx">${BOX}</td><td class="nt"></td></tr>`));
  if (gaps.length) body += `<h2>3. No course covers these. Do you cover them another way?</h2><p>Tick <b>Yes</b> and say how, or <b>Gap</b> if you would like a course for it.</p>` +
    tbl(['Standard', 'Yes, I cover it', 'Gap: we need it', 'How (notes)'], gaps.map((r) => `<tr><th scope="row">${r.band} · ${esc(r.code)}<br><span class="none">${esc(r.title)}</span></th><td class="bx">${BOX}</td><td class="bx">${BOX}</td><td class="nt"></td></tr>`));
  body += `<p class="muted">Cyber safety and privacy standards (8P13, 8P14, 10P13, 10P14) are tagged lesson by lesson in How computers work, so they are not on this sheet.</p>`;

  const strip = (h) => h.replace(/<[^>]+>/g, '');
  let md = `---\ntitle: Code courses: which do you use?\nsubtitle: Digital Technologies · draft for teachers to correct\n---\n\n# Code courses: which do you use?\n\n**Name:** {{field-1}} **Year levels you teach:** {{field-2}}\n\n${strip(intro)}\n\n## 1. Courses\n\n| Course | Years (ours) | Lessons | Do first | Use | Years you use it | Notes |\n|---|---|---|---|---|---|---|\n`;
  md += courseRows.map((r) => `| ${r.title} | ${r.years} | ${r.lessons} | ${r.after} | ${BOX} | | |`).join('\n');
  md += `\n\n## 2. Standards: which courses cover them?\n\n${strip(hand)}\n\n| Standard | Main focus (ours) | Touches (ours) | Agree | Should be focus | Wrong | Notes |\n|---|---|---|---|---|---|---|\n`;
  md += stdRows.filter((r) => !r.none).map((r) => `| ${r.band} · ${r.code} ${r.title} | ${r.focus} | ${r.touches} | ${BOX} | ${BOX} | ${BOX} | |`).join('\n');
  if (gaps.length) md += `\n\n## 3. No course covers these. Do you cover them another way?\n\n| Standard | Yes, I cover it | Gap: we need it | How (notes) |\n|---|---|---|---|\n` + gaps.map((r) => `| ${r.band} · ${r.code} ${r.title} | ${BOX} | ${BOX} | |`).join('\n');
  md += '\n';
  return { body, md, gapCount: gaps.length };
}
