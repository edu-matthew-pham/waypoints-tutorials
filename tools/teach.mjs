// Teacher resources, generated from each lesson.md and its teacher.yml at build time (no AI):
//   deck.md       a Waypoints Prepare slide deck (Marp; see waypoints-kit format-prepare.md)
//   worksheet.md  a Waypoints Prepare/Print resource with :::teacher-note answers (format-print.md)
//   cheatsheet    one Print reference sheet per unit, from the snippets the unit unlocks
// plus the teacher guide pages under /teach/. Students never see solutions on lesson pages.
import { snippetFrom, splitFiles, parseTrace, workItems } from './lesson-core.mjs';

export const SITE_URL = (process.env.SITE_URL || 'https://tutorials.learningwaypoints.com').replace(/\/$/, '');
export const PREPARE_URL = 'https://prepare.learningwaypoints.com/';
const STAGES = /^(Predict|Run|Investigate|Modify|Make|Info):\s*/i;
const bare = (t) => String(t).replace(STAGES, '');
const strip = (t) => String(t).split('‹').join('').split('›').join('');
const oneLine = (t) => String(t || '').replace(/\s+/g, ' ').trim();
// Markdown that is safe inside a slide or a printed page: no slide separators, no "*" lists.
const safe = (t) => String(t || '').replace(/^---+$/gm, '').replace(/^(\s*)\* /gm, '$1- ').trim();
// Lesson step text without fenced code that belongs to the tutorial (task bodies keep their own code).
const prose = (t) => safe(String(t || '').replace(/```[\s\S]*?```/g, '').replace(/\n{3,}/g, '\n\n'));
const seeded = (seed) => { let h = 2166136261; for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296); };
const shuffled = (arr, seed) => { const r = seeded(seed), a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const letters = 'ABCDEFGH';

const BADGE = {
  check: '<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>',
  activity: '<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>',
  discussion: '<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>',
};

/** Where a step's playground opens on the live site, full screen. */
export const stepUrl = (lesson, step) => `${SITE_URL}/${lesson.slug}/?full=${step.id}#${step.id}`;
export const teachPath = (lesson) => `teach/${lesson.slug}/`;

/** The code a check shows (bug and parsons carry their own). */
const checkCode = (k, snip) => (k.code ? snip(k.code) : '');

/** One check as text pieces: the question, the student's way to answer, and the answer. */
function checkParts(k, snip, key) {
  const q = k.q || k.text || '';
  if (k.type === 'question' || (k.type === 'predict' && k.options)) {
    const ans = k.type === 'question' ? k.options[k.answer] : (k.actual || '');
    return { q, options: k.options, answer: ans, explain: k.explain || (k.type === 'predict' ? '' : '') };
  }
  if (k.type === 'predict') return { q, answer: k.actual || '', explain: '' };
  if (k.type === 'number') return { q, field: true, answer: String(k.answer), explain: k.explain || '' };
  if (k.type === 'trace') {
    const t = parseTrace(k.table);
    return { q: k.text || 'Fill in the table.', trace: t, answer: t.rows.flat().filter((c) => c.blank).map((c) => c.v).join(', '), explain: k.explain || '' };
  }
  if (k.type === 'match') {
    const rights = shuffled(k.pairs.map((p) => p[1]), key);
    return { q: k.q || 'Match each item with what it does.', match: { lefts: k.pairs.map((p) => p[0]), rights }, answer: k.pairs.map((p) => `${p[0]} → ${letters[rights.indexOf(p[1])]}. ${p[1]}`).join('; '), pairs: k.pairs, rights, explain: k.explain || '' };
  }
  if (k.type === 'bug') {
    const files = splitFiles(checkCode(k, snip));
    const ans = (Array.isArray(k.answer) ? k.answer : [k.answer]).map(String);
    return { q: k.text || 'Find the line with the bug.', files, answer: `line ${ans.join(' and ')}`, explain: k.explain || '' };
  }
  if (k.type === 'parsons') {
    const lines = checkCode(k, snip).replace(/\n$/, '').split('\n').filter((l) => l.trim());
    return { q: k.text || 'Put the lines in order.', parsons: shuffled(lines.concat(k.extra || []), key), solution: lines.join('\n'), answer: 'see the program below', explain: k.explain || '' };
  }
  if (k.type === 'code') return { q: k.text, rules: k.rules, answer: '', explain: '' };
  if (k.type === 'reflect') return { q: k.text, reflect: true, answer: '', explain: '' };
  return { q, answer: '', explain: '' };
}

const numbered = (code) => code.replace(/\n$/, '').split('\n').map((l, i) => `${String(i + 1).padStart(2)}  ${l}`).join('\n');
const fence = (code, lang = 'python') => '```' + lang + '\n' + String(code).replace(/\n$/, '') + '\n```';

/** Every check in a lesson, with where it sits: [{ step, task, check, key }]. */
const checksOf = (lesson) => lesson.steps.flatMap((s) => [
  ...(s.config.check ? [{ step: s, task: null, check: s.config.check, key: `${lesson.slug}/${s.id}` }] : []),
  ...s.tasks.filter((t) => t.config.check).map((t) => ({ step: s, task: t, check: t.config.check, key: `${lesson.slug}/${t.id}` })),
]);

// ---------------------------------------------------------------- deck (Prepare Marp)
export function deckFor(lesson, { course, unit, snip }) {
  const T = lesson.teacher || {};
  const slides = [];
  const note = (t) => (t ? `\n\n<!-- Speaker note: ${oneLine(t).replace(/-->/g, '- ->')} -->` : '');
  slides.push(`# ${lesson.title}\n\n${course}${unit ? ` · ${unit}` : ''}` + note(`${T.summary || lesson.summary}${T.time ? ` About ${T.time} minutes${T.timing ? ` (${T.timing})` : ''}.` : ''}`));
  slides.push(`## Today\n\n**We are learning to** ${lowerFirst(lesson.summary.replace(/\.$/, ''))}.\n\n${(T.goals || []).map((g) => `- ${g}`).join('\n')}` + note(T.before ? `Before class: ${T.before}` : ''));
  if (lesson.hook) slides.push(`${BADGE.discussion}\n\n## Why it matters\n\n> ${lesson.hook}` + note(lesson.intro));
  // Programs too long for a slide are read in the tutorial instead.
  const showCode = (code, step) => (code.split('\n').length > 27
    ? `*The program is ${code.split('\n').length} lines long: open it in the tutorial and read it together.*\n\n[Open this step](${stepUrl(lesson, step)})`.replace(/^\*|\*(?=\n)/g, '_')
    : fence(code));
  const runIt = (step, label = 'Run it') => `${BADGE.activity}\n\n## ${label}\n\nOpen the lesson at this step and try it together.\n\n[${stepUrl(lesson, step).replace(/^https:\/\//, '')}](${stepUrl(lesson, step)})`;
  let stuckDone = false;
  for (const s of lesson.steps) {
    const c = s.config, stage = c.stage, title = bare(s.title);
    const code = c.code ? snip(c.code) : '';
    if (stage === 'predict') {
      const k = c.check?.type === 'predict' ? checkParts(c.check, snip, s.id) : null;
      slides.push(`${BADGE.discussion}\n\n## Predict\n\n${code ? showCode(code, s) + '\n\n' : ''}${k ? `**${k.q}**${k.options ? '\n\n' + k.options.map((o) => `- ${o}`).join('\n') : ''}` : prose(s.body)}` + note(`${k?.answer ? `What happens: ${k.answer}` : ''} Take two or three predictions before anyone runs it.`));
      if (k?.answer) slides.push(`${BADGE.check}\n\n## What happened?\n\n* ${oneLine(k.answer)}` + note('Reveal after running. Ask who predicted it, and what made them think so.'));
    } else if (stage === 'run') {
      slides.push(runIt(s) + note(`${prose(s.body)} ${c.check?.type === 'reflect' ? `Students should be able to say: ${c.check.text}` : ''}`));
    } else if (stage === 'investigate') {
      if (code) slides.push(`${BADGE.discussion}\n\n## ${title === 'Investigate' ? 'Investigate' : `Investigate: ${title.replace(/^Investigate:\s*/, '')}`}\n\n${showCode(code, s)}` + note(`${prose(s.body)} ${c.insight ? `What this step is for: ${c.insight}` : ''}`));
      const items = s.tasks.length ? s.tasks.filter((t) => t.config.check).map((t) => ({ t, k: t.config.check })) : (c.check ? [{ t: null, k: c.check }] : []);
      for (const { t, k } of items) {
        const p = checkParts(k, snip, `${s.id}${t ? t.id : ''}`);
        if (p.reflect || k.type === 'code') continue;
        let body = `**${p.q}**`;
        if (p.options) body += '\n\n' + p.options.map((o) => `- ${o}`).join('\n');
        if (p.trace) body += '\n\n' + traceTable(p.trace, true);
        if (p.match) body += '\n\n' + `| | |\n|---|---|\n` + p.match.lefts.map((l, i) => `| \`${l}\` | ${letters[i]}. ${p.match.rights[i]} |`).join('\n');
        if (p.files) {
          const parts = p.files.map((f) => (f.name ? `**${f.name}**\n\n` : '') + fence(numbered(f.code), ''));
          // Two files side by side, so both stay readable.
          body += '\n\n' + (parts.length === 2 ? `<div class="cols" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">\n<div>\n\n${parts[0]}\n\n</div>\n<div>\n\n${parts[1]}\n\n</div>\n</div>` : parts.join('\n\n'));
        }
        if (p.parsons) body += '\n\n' + fence(p.parsons.join('\n'));
        if (t && /```/.test(t.body)) body = prose(t.body.replace(/```(\w*)\n([\s\S]*?)```/g, (m, lang, src) => '\u0000' + src + '\u0000')).replace(/\u0000([\s\S]*?)\u0000/g, (m, src) => fence(src)) + '\n\n' + body;
        const reveal = p.parsons ? '' : `\n\n* Answer: ${oneLine(p.answer)}`;
        slides.push(`${BADGE.check}\n\n## ${t ? t.title : title}\n\n${body}${reveal}` + note(`${p.explain} ${p.parsons ? `Correct order: ${oneLine(p.solution)}` : ''} ${!t && c.insight ? `What this step is for: ${c.insight}` : ''}`));
      }
    } else if (stage === 'modify' || stage === 'make') {
      const tasks = s.tasks.length ? s.tasks.map((t) => `- **${t.title}:** ${oneLine(prose(t.body)).slice(0, 160)}`).join('\n') : '';
      const text = prose(s.body);
      const hints = [...(Array.isArray(c.hint) ? c.hint : c.hint ? [c.hint] : []), ...s.tasks.flatMap((t) => (Array.isArray(t.config.hint) ? t.config.hint : t.config.hint ? [t.config.hint] : []))];
      let n = `${c.insight ? `What this step is for: ${c.insight} ` : ''}${hints.length ? `Hints, in order: ${hints.join(' / ')} ` : ''}`;
      if (!stuckDone && T.stuck?.length) { n += 'When students get stuck: ' + T.stuck.map((x) => `${x.see} Ask: ${x.ask} Fix: ${x.fix}`).join(' / '); stuckDone = true; }
      slides.push(`${BADGE.activity}\n\n## ${stage === 'make' && !/make/i.test(title) ? `Make: ${title}` : title}\n\n${text}${tasks ? '\n\n' + tasks : ''}${c.try ? `\n\n[Open this step](${stepUrl(lesson, s)})` : ''}` + note(n));
    } else if (s.body.trim()) {
      slides.push(`## ${title}\n\n${prose(s.body)}`);
    }
  }
  if (T.exit) slides.push(`${BADGE.check}\n\n## Exit ticket\n\n**${T.exit.q}**\n\n* ${oneLine(T.exit.a)}` + note('Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson.'));
  return `---\nmarp: true\ntheme: default\nhtml: true\n---\n\n${slides.map(fitCode).join('\n\n---\n\n')}\n`;
}
const lowerFirst = (t) => t.charAt(0).toLowerCase() + t.slice(1);
// Keep each slide on the slide (Marp scoped styles). A 1280x720 slide at 29px type has about
// 560px for content. Estimate the height of everything but code, then shrink code first
// (down to 0.5em), then the whole slide. `.render-tmp` overflow checks confirm the estimate.
function fitCode(slide) {
  const blocks = slide.match(/```[\s\S]*?```/g) || [];
  const cols = /<div class="cols"/.test(slide) ? 2 : 1; // two columns: count half the code
  const lines = blocks.reduce((n, b) => n + b.split('\n').length - 2, 0) / cols;
  const plain = (l) => l.replace(/<[^>]+>|\*\*|`|\[([^\]]*)\]\([^)]*\)/g, '$1').trim();
  const wraps = (l, w) => Math.max(1, Math.ceil(plain(l).length / w));
  const rest = slide.replace(/```[\s\S]*?```/g, '').replace(/<!--[\s\S]*?-->|<style[\s\S]*?<\/style>/g, '').split('\n').filter((l) => l.trim());
  const text = rest.reduce((n, l) => {
    if (/^<span/.test(l)) return n + 60;
    if (/^#/.test(l)) return n + 75;
    if (/^\|[-| ]*\|$/.test(l)) return n + (/-/.test(l) ? 0 : 18);
    if (/^\|/.test(l)) return n + 25 + 44 * Math.max(...l.split('|').slice(1, -1).map((c) => wraps(c, 34)));
    if (/^<\/?div/.test(l)) return n;
    if (/^\*\*[^*]+\*\*$/.test(l) && /\.\w+\*\*$/.test(l)) return n + 60 / cols; // file name label
    if (/^[-*] /.test(l)) return n + 12 + 44 * wraps(l, 62);
    return n + 18 + 44 * wraps(l, 66);
  }, 0) + (35 * blocks.length) / cols;
  const code = (s) => lines * 29 * 1.25 * s;
  if (text + code(1) <= 560) return slide;
  let c = Math.min(0.85, (560 - text) / code(1)), s = 1;
  if (c < 0.5) { c = 0.5; s = 560 / (text + code(0.5)); }
  const css = [`pre, marp-pre { font-size: ${Math.floor(c * 100) / 100}em; line-height: 1.25; }`];
  if (s < 1) css.push(`section { font-size: ${Math.max(16, Math.floor(29 * s))}px; }`);
  return `${slide}\n\n<style scoped>${css.join(' ')}</style>`;
}

function traceTable(t, blanks) {
  const head = `| ${t.head.join(' | ')} |\n|${t.head.map(() => '---').join('|')}|`;
  const rows = t.rows.map((r) => `| ${r.map((c) => (c.blank ? (blanks ? '?' : ' ') : c.v)).join(' | ')} |`).join('\n');
  return `${head}\n${rows}`;
}

// ---------------------------------------------------------------- worksheet (Prepare Print)
export function worksheetFor(lesson, { course, unit, snip }) {
  const T = lesson.teacher || {};
  const out = [];
  const tnote = (t) => (t && t.trim() ? `\n\n:::teacher-note\n\n${t.trim()}\n\n:::\n` : '');
  const keep = (t) => `\n\n:::keep-together\n\n${t.trim()}\n\n:::\n`;
  out.push(`---\ntitle: ${yamlStr(lesson.title)}\nsubtitle: ${yamlStr(`${course}${unit ? ` · ${unit}` : ''}${lesson.order != null ? ` · Lesson ${lesson.order}` : ''}`)}\n---\n\n# ${lesson.title}\n\n**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}\n\n> **Key question:** ${lesson.hook || lesson.summary}`);
  out.push(tnote(`**In one sentence:** ${T.summary || lesson.summary}\n\n${T.goals?.length ? `**Students should be able to say:** ${T.goals.join(' ')}\n\n` : ''}**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.`));
  const makeIndex = lesson.steps.findIndex((s) => s.config.stage === 'make');
  for (const [i, s] of lesson.steps.entries()) {
    const c = s.config, stage = c.stage, title = bare(s.title);
    const code = c.code ? snip(c.code) : '';
    const tier = stage === 'modify' ? (makeIndex >= 0 && i > makeIndex ? 'wider' : 'typical') : stage === 'info' && makeIndex >= 0 && i > makeIndex ? 'wider' : '';
    let part = '';
    if (stage === 'predict') {
      const k = c.check?.type === 'predict' ? checkParts(c.check, snip, s.id) : null;
      part = `## Predict\n\n${prose(s.body)}${code ? '\n\n' + fence(code) : ''}` + keep(`${k ? `**${k.q}**\n\n${k.options ? k.options.map((o) => `☐ ${o}`).join('\n\n') + '\n\n' : ''}` : ''}My prediction, and why:\n\n{{lines-3}}`) + tnote(k?.answer ? `**What happens:** ${k.answer}` : '');
    } else if (stage === 'run') {
      part = `## Run\n\nRun the program in the tutorial. Was your prediction right? What was different?\n\n{{lines-2}}`;
    } else if (stage === 'investigate') {
      part = `## ${title}\n\n${prose(s.body)}${code ? '\n\n' + fence(code) : ''}`;
      const items = s.tasks.length ? s.tasks.filter((t) => t.config.check).map((t) => ({ t, k: t.config.check })) : (c.check ? [{ t: null, k: c.check }] : []);
      for (const { t, k } of items) {
        const p = checkParts(k, snip, `${s.id}${t ? t.id : ''}`);
        if (p.reflect || k.type === 'code') continue;
        let q = `${t ? `### ${t.title}\n\n` : ''}**${p.q}**`;
        if (t && /```/.test(t.body)) q = `${t ? `### ${t.title}\n\n` : ''}${t.body.trim()}\n\n**${p.q}**`;
        if (p.options) q += '\n\n' + p.options.map((o) => `☐ ${o}`).join('\n\n');
        if (p.field) q += '\n\nAnswer: {{field-15}}';
        if (p.trace) q += '\n\n{{rows 1}}\n\n' + traceTable(p.trace, false);
        if (p.match) q += '\n\n' + p.match.rights.map((r, i) => `${letters[i]}. ${r}`).join('\n\n') + '\n\n{{columns 60% 40%}}\n\n{{rows 1}}\n\n| Part | Letter |\n|---|---|\n' + p.match.lefts.map((l) => `| \`${l}\` | |`).join('\n');
        if (p.files) q += '\n\n' + p.files.map((f) => (f.name ? `**${f.name}**\n\n` : '') + fence(numbered(f.code), '')).join('\n\n') + '\n\nLine: {{field-15}}\n\nWhy is it wrong?\n\n{{lines-2}}';
        if (p.parsons) q += '\n\n' + p.parsons.map((l, i) => `${letters[i] || i + 1}. \`${l.trim()}\``).join('\n\n') + '\n\nCorrect order (letters): {{field-24}}';
        if (k.type === 'question' && !p.options) q += '\n\n{{lines-2}}';
        part += keep(q) + tnote(`**Answer:** ${p.answer}${p.explain ? `\n\n${p.explain}` : ''}${p.parsons ? `\n\n${fence(p.solution)}` : ''}`);
      }
    } else if (stage === 'modify' || stage === 'make') {
      const tasks = s.tasks.length ? s.tasks.map((t) => `**${t.title}.** ${prose(t.body)}`).join('\n\n') : '';
      const sols = (T.solutions || {});
      const ids = s.tasks.length ? s.tasks.map((t) => t.id) : [s.id];
      const solText = ids.filter((id) => sols[id]).map((id) => {
        const t = s.tasks.find((x) => x.id === id);
        return `${t ? `**${t.title}:**\n\n` : ''}${splitFiles(snip(sols[id])).map((f) => (f.name ? `*${f.name}*\n\n` : '') + fence(f.code)).join('\n\n')}`;
      }).join('\n\n');
      part = `## ${stage === 'make' && !/make/i.test(title) ? `Make: ${title}` : title}\n\n${prose(s.body)}${tasks ? '\n\n' + tasks : ''}\n\nWork in the tutorial. Plan first: what will you change, and how will you test it?\n\n{{box-4}}` + tnote(solText ? `**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.\n\n${solText}` : '');
    } else if (s.body.trim()) {
      part = `## ${title}\n\n${prose(s.body)}`;
    }
    if (!part) continue;
    out.push(tier ? `\n\n:::${tier}\n\n${part.trim()}\n\n:::\n` : part);
  }
  if (T.exit) out.push(`## Exit ticket` + keep(`**${T.exit.q}**\n\n{{lines-3}}`) + tnote(`**Answer:** ${T.exit.a}`));
  return out.join('\n\n').replace(/\n{4,}/g, '\n\n\n') + '\n';
}
const yamlStr = (s) => JSON.stringify(String(s));

// ---------------------------------------------------------------- cheat sheet (Prepare Print reference sheet)
export function cheatSheetFor({ course, unit, lessons, snippets }) {
  const items = [];
  const seen = new Set();
  for (const l of lessons) for (const s of l.steps) for (const id of [...(s.config.unlocks || []), ...s.tasks.flatMap((t) => t.config.unlocks || [])]) {
    const item = snippets.get(id);
    if (item && !seen.has(id)) { seen.add(id); items.push(item); }
  }
  const body = items.map((i) => `:::keep-together\n\n**${i.label}**: ${i.hint || ''}\n\n${fence(strip(i.code))}\n\n:::`).join('\n\n');
  return `---\ntitle: ${yamlStr(`${unit.title}: cheat sheet`)}\nsubtitle: ${yamlStr(course)}\n---\n\n# ${unit.title}\n\n> The commands and patterns from this unit. In the tutorial, open **Reference** in any playground to copy them.\n\n${body || '_This unit has no new commands; it combines ones from earlier units._'}\n`;
}

// ---------------------------------------------------------------- teacher guide pages (HTML bodies)
export function lessonGuideBody(lesson, { esc, md, snip, highlightCode, codeBlock, studentHref, course, unit, files }) {
  const T = lesson.teacher || {};
  const sec = (title, html) => (html ? `<section class="tg"><h2>${esc(title)}</h2>${html}</section>` : '');
  const insights = lesson.steps.flatMap((s) => [s.config.insight ? [bare(s.title), s.config.insight] : null, ...s.tasks.filter((t) => t.config.insight).map((t) => [`${bare(s.title)} › ${t.title}`, t.config.insight])]).filter(Boolean);
  const answers = checksOf(lesson).map(({ step, task, check, key }) => {
    const p = checkParts(check, snip, key);
    if (p.reflect || check.type === 'code') return '';
    return `<li><b>${esc(task ? task.title : bare(step.title))}:</b> ${esc(p.q)}<br><span class="ans">${esc(p.answer)}</span>${p.explain ? `<br><span class="muted">${esc(p.explain)}</span>` : ''}${p.parsons ? codeBlock(highlightCode, p.solution + '\n', 'python', '') : ''}</li>`;
  }).filter(Boolean).join('');
  const sols = T.solutions || {};
  const solHtml = workItems(lesson).map((w) => {
    const ref = sols[w.id];
    const name = w.task ? `${bare(w.step.title)} › ${w.task.title}` : bare(w.step.title);
    if (!ref) return `<h3>${esc(name)}</h3><p class="muted">Open task: any program that does what the step asks.</p>`;
    return `<h3>${esc(name)}</h3>${splitFiles(snip(ref)).map((f) => codeBlock(highlightCode, f.code, 'python', f.name || '')).join('')}`;
  }).join('');
  const stuck = (T.stuck || []).length ? `<table class="stuck"><thead><tr><th>What you will see</th><th>A question to ask</th><th>The fix</th></tr></thead><tbody>${T.stuck.map((x) => `<tr><td>${esc(x.see)}</td><td>${esc(x.ask)}</td><td>${esc(x.fix)}</td></tr>`).join('')}</tbody></table>` : '';
  const dl = files.map((f) => `<li><b>${esc(f.label)}</b> <a href="${esc(f.href)}" download>Download</a> <button type="button" class="copyurl" data-url="${esc(f.url)}">Copy address for Prepare</button><span class="muted"> ${esc(f.note || '')}</span></li>`).join('');
  return `<header class="top"><a class="crumb" href="../">← Teacher guide</a><h1>${esc(lesson.title)}</h1><p class="lede">${esc(T.summary || lesson.summary)}</p><p class="tmeta">${esc(course)}${unit ? ` · ${esc(unit)}` : ''}${T.time ? ` · about ${T.time} minutes` : ''} · <a href="${esc(studentHref)}">Open the student lesson</a></p></header>` +
    sec('Classroom resources', `<p>Load these into <a href="${PREPARE_URL}" target="_blank" rel="noopener">Waypoints Prepare</a>: choose <b>Load URL</b> and paste the copied address, or download the file and import it. In Prepare, the worksheet's Teacher edition shows the answers; the student copy hides them.</p><ul class="dl">${dl}</ul>`) +
    sec('Students will be able to', T.goals ? `<ul>${T.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>` : '') +
    sec('Timing', T.timing ? `<p>${esc(T.timing)}</p>` : '') +
    sec('Before class', T.before ? md(T.before) : '') +
    sec('Running the lesson', T.running ? `<ol>${T.running.map((r) => `<li>${md(r).replace(/^<p>|<\/p>\s*$/g, '')}</li>`).join('')}</ol>` : '') +
    sec('When students get stuck', stuck) +
    sec('Answers to the checks', answers ? `<ol class="answers">${answers}</ol>` : '') +
    sec('Solutions', solHtml ? `<p class="muted">One possible solution for each task. Other correct programs are fine.</p>${solHtml}` : '') +
    sec('Stretch and support', `${T.stretch ? `<p><b>Stretch:</b> ${esc(T.stretch)}</p>` : ''}${T.support ? `<p><b>Support:</b> ${esc(T.support)}</p>` : ''}`) +
    sec('Exit ticket', T.exit ? `<p><b>${esc(T.exit.q)}</b></p><p class="ans">${esc(T.exit.a)}</p>` : '') +
    sec('What each step is for', insights.length ? `<ul>${insights.map(([w, t]) => `<li><b>${esc(w)}:</b> ${esc(t)}</li>`).join('')}</ul>` : '') +
    sec('Where it leads', T.leads ? md(T.leads) : '');
}

export const TEACH_CSS = `.tg{margin:26px 0}.tg h2{font-size:1.15rem;margin:0 0 8px}.tg h3{font-size:1rem;margin:16px 0 6px}
.tmeta{color:var(--muted);font-size:14px}.ans{font-weight:600;color:var(--run)}.muted{color:var(--muted);font-size:14px}
.answers li{margin:0 0 10px}.stuck{width:100%;border-collapse:collapse;font-size:14px}.stuck th,.stuck td{border:1px solid var(--line);padding:8px 10px;vertical-align:top;text-align:left}.stuck th{background:var(--card)}
.dl{list-style:none;padding:0;display:grid;gap:8px}.dl li{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px}
.copyurl{font:inherit;font-size:13px;margin-left:6px;padding:2px 10px;border:1px solid var(--line);border-radius:7px;background:var(--bg);color:var(--ink);cursor:pointer}
.tunit{margin:26px 0}.tunit h2{margin:0 0 4px;font-size:1.15rem}.tunit ul{margin:6px 0}.primer{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:6px 18px}`;
export const TEACH_JS = `document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.copyurl');if(!b)return;var u=b.dataset.url,done=function(){var t=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=t},1500)};
if(navigator.clipboard)navigator.clipboard.writeText(u).then(done,function(){prompt('Copy this address:',u)});else prompt('Copy this address:',u)});`;
