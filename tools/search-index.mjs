// The site search index (25 Oct 2026, roadmap/shared.md › Decided: navigation and ways in). Built at publish time
// into dist/search-index.json and searched in the browser (site/search.js): no server, no tracking.
// One entry per course, unit, lesson and teacher page, plus one per curriculum standard for the subjects that have
// lessons (maths, science, Digital Technologies). Entry keys are short to keep the file small:
//   t title, u address from the site root, s subject, sp subject folder, c course, y years label, k extra words
//   (normalised), d one-line summary, ty course | unit | lesson | standard | page, n (standards) lessons tagged to it.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CORE_IDEAS, sameIdea } from './concepts-core.mjs';

// Words a teacher might type for a language or tool; the lesson's `language:` is a key, not a word they'd use.
const LANG = { python: 'python turtle', makecode: 'makecode blocks micro:bit microbit arcade', html: 'html css web page website', javascript: 'javascript js p5' };
// Standards entries: the curriculum files whose subjects have lessons on this site. The page for each is the
// teacher pointer page (tools/pointer-pages.mjs).
const STANDARD_SUBJECTS = ['maths', 'science', 'systems', 'digital-processes'];

// Normalise text the way the browser does (site/search.js): lower case, "Year 8" / "yr 8" / "y8" -> year8.
export const norm = (s) => String(s || '').toLowerCase()
  .replace(/\b(?:years?|yrs?|y)\s*(\d{1,2})\s*(?:-|–|to|and)\s*(\d{1,2})\b/g, (_, a, b) => { let o = ''; for (let y = +a; y <= +b; y++) o += ` year${y}`; return o; })
  .replace(/\b(?:year|yr|y)\s*(\d{1,2})\b/g, 'year$1')
  .replace(/[^a-z0-9. ]+/g, ' ').replace(/\s+/g, ' ').trim();

const yearsLabel0 = (lo, hi) => (lo == null ? '' : lo === hi ? (lo === 0 ? 'Foundation' : `Year ${lo}`) : lo === 0 ? `Foundation–Year ${hi}` : `Years ${lo}–${hi}`);
const yearsLabel = (lo, hi, usual = false) => { const t = yearsLabel0(lo, hi); return t && usual ? `Usually ${t}` : t; };
const yearTokens = (lo, hi) => { if (lo == null) return ''; let o = ''; for (let y = lo; y <= hi; y++) o += ` year${y}`; return o + (lo === 0 ? ' foundation' : ''); };
// Years named in a title or summary: "Year 8 Chemistry", "(Year 8)", "Years 7–8".
function yearsInText(text) {
  const t = String(text || ''), out = [];
  for (const m of t.matchAll(/\bYears? (\d{1,2})(?:\s*(?:–|-|and|to)\s*(\d{1,2}))?/g)) { out.push(+m[1]); if (m[2]) out.push(+m[2]); }
  return out;
}

function loadDescriptors(root = '.') {
  const map = new Map(), perSubject = {};
  for (const sub of new Set([...STANDARD_SUBJECTS])) {
    const f = join(root, 'data', 'curriculum', `${sub}.json`);
    if (!existsSync(f)) continue;
    const j = JSON.parse(readFileSync(f, 'utf8'));
    perSubject[sub] = j.descriptors || [];
  }
  // Codes can sit in one file but be tagged from lessons anywhere: read every file for year lookup.
  const dir = join(root, 'data', 'curriculum');
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.json'))) {
    const j = JSON.parse(readFileSync(join(dir, f), 'utf8'));
    for (const d of j.descriptors || []) if (!map.has(d.code)) map.set(d.code, d);
  }
  return { map, perSubject };
}
const dyears = (d) => (d.years ? d.years.split(/[–-]/).map(Number) : [d.year, d.year + ((d.span || 1) - 1)]);

/**
 * makeSearch({ lessons, dirNode, courses, subjects, pathwayOf, play }) -> { entries, yearsOfCourse(path) }
 * courses: [{ path, title }]; subjects: [{ path, title, teachers }]; pathwayOf(coursePath) -> { sub, pw } | null;
 * play: { [coursePath]: { label } }.
 */
export function makeSearch({ lessons, dirNode, courses, subjects, pathwayOf, play = {}, coverage = { std: new Map() }, root = '.' }) {
  const { map: desc, perSubject } = loadDescriptors(root);
  const subjTitle = (path) => dirNode(path.split('/')[0]).title;
  const codesOf = (l) => [].concat(l.node || [], l.woven || []).map((r) => String(r).split(/\s+/)[0]).filter((c) => desc.has(c));
  const span = (ys) => (ys.length ? [Math.min(...ys), Math.max(...ys)] : [null, null]);
  // A year in a title ("Year 8 Chemistry") beats the band of the standards (Years 7-8). Without one, the years of the
  // tagged standards and any named in the summaries, together (Algebra: Years 7 to 9).
  const yearsOf = (codes, texts, titles = []) => {
    const named = titles.flatMap(yearsInText);
    return named.length ? span(named) : span([...codes.flatMap((c) => dyears(desc.get(c))), ...texts.flatMap(yearsInText)]);
  };
  const courseCodes = new Map(), courseYears = new Map(), typical = new Set();
  for (const c of courses) {
    const ls = lessons.filter((l) => l.slug.split('/').slice(0, -1).join('/') === c.path);
    const codes = [...new Set(ls.flatMap(codesOf))];
    courseCodes.set(c.path, codes);
    // `years: "6-8"` in a course's index.md (Code, 25 Oct 2026): its typical fit, which beats the standards' years.
    const ty = String(dirNode(c.path).meta?.years || '').match(/^(\d{1,2})\s*[-–]\s*(\d{1,2})$|^(\d{1,2})$/);
    if (ty) { courseYears.set(c.path, ty[3] ? [+ty[3], +ty[3]] : [+ty[1], +ty[2]]); typical.add(c.path); continue; }
    courseYears.set(c.path, yearsOf(codes, [dirNode(c.path).summary, ...(dirNode(c.path).meta?.units || []).map((u) => `${u.title} ${u.summary || ''}`)], [c.title]));
  }
  const entries = [];
  const short = (s) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); return t.length > 150 ? t.slice(0, 147).replace(/\s+\S*$/, '') + '…' : t; };
  const add = (e) => entries.push({ ...e, k: norm(e.k) });
  const pwOf = (cp) => pathwayOf(cp)?.pw.title || '';
  // The big ideas a lesson introduces, by the name a teacher would type ("Variables", "Repeat a number of times"),
  // so "loops" or "variables" finds the lesson in any pathway.
  const ideaWords = (l) => (l.introduces || []).map((id) => CORE_IDEAS.find((i) => i.id === sameIdea(l.language, id))?.label).filter(Boolean).join(' ');
  const stdWords = (codes) => codes.map((c) => `${c} ${desc.get(c).title}`).join(' ');

  for (const c of courses) {
    const d = dirNode(c.path), [lo, hi] = courseYears.get(c.path);
    const first = lessons.find((l) => l.slug.startsWith(c.path + '/'));
    add({ t: c.title, u: `${c.path}/`, s: subjTitle(c.path), sp: c.path.split('/')[0], c: '', y: yearsLabel(lo, hi, typical.has(c.path)), ty: 'course', d: short(d.summary),
      k: [pwOf(c.path), play[c.path]?.label, LANG[first?.language], subjTitle(c.path), yearTokens(lo, hi), stdWords(courseCodes.get(c.path)), d.meta?.tagline, d.summary].filter(Boolean).join(' ') });
    for (const u of d.meta?.units || []) {
      if (!lessons.some((l) => l.slug.startsWith(c.path + '/') && l.unit === u.id)) continue;
      const [ulo, uhi] = typical.has(c.path) ? [null, null] : yearsOf(lessons.filter((l) => l.slug.startsWith(c.path + '/') && l.unit === u.id).flatMap(codesOf), [u.summary], [u.title]);
      add({ t: u.title, u: `${c.path}/#unit-${u.id}`, s: subjTitle(c.path), sp: c.path.split('/')[0], c: c.title, y: yearsLabel(ulo ?? lo, uhi ?? hi, typical.has(c.path)), ty: 'unit', d: short(u.summary),
        k: [c.title, pwOf(c.path), play[c.path]?.label, subjTitle(c.path), yearTokens(ulo ?? lo, uhi ?? hi), u.summary].filter(Boolean).join(' ') });
    }
  }
  for (const l of lessons) {
    const cp = l.slug.split('/').slice(0, -1).join('/'), cn = dirNode(cp), codes = codesOf(l);
    const unit = (cn.meta?.units || []).find((u) => u.id === l.unit);
    const [lo0, hi0] = courseYears.get(cp) || [null, null];
    const [lo, hi] = typical.has(cp) ? [null, null] : yearsOf(codes, [], [l.title]);
    add({ t: l.title.replace(/^Optional:\s*/, ''), u: `${l.slug}/`, s: subjTitle(l.slug), sp: l.slug.split('/')[0], c: cn.title, y: yearsLabel(lo ?? lo0, hi ?? hi0, lo == null && typical.has(cp)), ty: 'lesson', d: short(l.summary || l.hook),
      k: [cn.title, unit?.title, pwOf(cp), play[cp]?.label, LANG[l.language], subjTitle(l.slug), yearTokens(lo ?? lo0, hi ?? hi0), stdWords(codes), ideaWords(l), l.summary].filter(Boolean).join(' ') });
  }
  for (const sub of STANDARD_SUBJECTS) {
    for (const d of perSubject[sub] || []) {
      const [lo, hi] = dyears(d), tagged = lessons.filter((l) => codesOf(l).includes(d.code)).length;
      const cov = coverage.std.get(d.code), tt = (ps) => ps.map((p) => dirNode(p).title).join(', ');
      // What a teacher sees under the title: lessons tagged to it, else the courses that generally cover it (said as such), else that nothing does yet.
      const note = tagged ? `${tagged} lesson${tagged > 1 ? 's' : ''} here` : cov && (cov.focus.length || cov.touches.length)
        ? [cov.focus.length ? (cov.all ? 'Main focus of every Code course' : `Main focus of ${tt(cov.focus.slice(0, 3))}${cov.focus.length > 3 ? ` and ${cov.focus.length - 3} more` : ''}`) : '', cov.touches.length ? `touched on in ${tt(cov.touches.slice(0, 3))}${cov.touches.length > 3 ? ` and ${cov.touches.length - 3} more` : ''}` : ''].filter(Boolean).join('; ') : 'no lessons yet';
      add({ t: d.title, u: `teach/curriculum/${sub}/${d.code}/`, s: sub === 'maths' ? 'Maths' : sub === 'science' ? 'Science' : 'Digital Technologies', sp: sub === 'digital-processes' ? 'code' : sub, c: d.strand || '', y: yearsLabel(lo, hi), ty: 'standard',
        n: tagged + (cov && (cov.focus.length || cov.touches.length) ? 1 : 0), d: `${d.code} · ${note}`, k: [d.code, d.title, d.strand, d.description, yearTokens(lo, hi)].filter(Boolean).join(' ') });
    }
  }
  for (const p of [
    { t: 'Create lessons and courses', u: 'code/create/', d: 'Write or paste a lesson, preview it with a live playground, and request it be added.' },
    { t: 'Code: ideas across pathways', u: 'teach/code/ideas/', d: 'Each core coding idea (variables, loops, if, lists) against Python, Web and MakeCode, linked to the lesson that introduces it.' },
    { t: 'Code courses: which do you use? (review sheet)', u: 'teach/code/review/', d: 'A printable tick-sheet of our course years and standards coverage, for teachers to correct.' },
    { t: 'Make a lesson', u: 'teachers/make-a-lesson/', d: 'A short course on making your own lesson.' },
    { t: 'About these tutorials', u: 'about/', d: 'What the tutorials are, why they were made and how the lessons work.' },
    { t: 'Why we teach this way', u: 'approach/', d: 'The ideas behind these tutorials.' },
    { t: 'Behind the scenes', u: 'behind-the-scenes/', d: 'How a lesson is made and checked.' },
    { t: 'Check your school', u: 'check/', d: 'Can your school devices and network run the in-browser Python lessons?' },
    { t: 'Choosing AI tools for learning', u: 'choosing-ai-tools/', d: 'A teacher guide to comparing AI tools fairly.' },
    { t: 'For science teachers', u: 'science-teachers/', d: 'How the science boards sit beside class practicals, and a draft list of common Year 7 to 10 practicals to correct.' },
    { t: 'For maths teachers', u: 'maths-teachers/', d: 'What is here for Years 7 and 8 maths and a ten-minute tour.' },
  ]) add({ ...p, s: 'Teachers', sp: 'teachers', c: '', y: '', ty: 'page', k: `${p.t} ${p.d} teacher teachers` });
  return { entries, yearsOfCourse: (path) => courseYears.get(path) || [null, null], yearsLabel, typical: (path) => typical.has(path) };
}
