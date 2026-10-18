// Import a subject's Foundation to Year 10 descriptors from a waypoints-kit checkout into data/curriculum/<subject>.json,
// for the teacher pointer pages, Create's node picker and the curriculum map (tools/curriculum-map.mjs; Years 7–10,
// plus the earlier descriptors they name as prior knowledge). Foundation is year 0.
//
//   node tools/import-curriculum.mjs <path to waypoints-kit> <subject>   (maths, science, systems, history, english, geography,
//   civics, economics, hpe, arts, languages, design, digital-processes: SUBJECTS below)
//
// Each node keeps everything a teacher pointer page (tools/pointer-pages.mjs) and Create's node picker need: checkpoint,
// success criteria, width (minimum, typical, wider), hinge and its reason, response modes with Kit's reasons, related
// standards. The standard keeps its prior knowledge text and progression endpoint. Kit holds what the curriculum says:
// corrections go to Kit and are re-imported, never edited here.
//
// waypoints-kit holds one JSON file per descriptor in data/<subject>/ (copied from ACARA Progressions). Descriptor
// text is from the Australian Curriculum v9 (ACARA, CC BY 4.0); waypoints and prior knowledge are Learning Waypoints'.
// Re-run it when the kit changes; the output is committed, so the build never needs the kit.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const [kit, subject = 'maths'] = process.argv.slice(2);
// Every subject the site imports: its code prefix, the kit's folder, and (optionally) which codes to keep.
// Arts, HPE, Languages and Technologies are written in two-year bands (code year 8 = Years 7–8): span 2.
const SUBJECTS = {
  maths: { prefix: 'AC9M' }, science: { prefix: 'AC9S' }, history: { prefix: 'AC9HH' }, english: { prefix: 'AC9E' },
  geography: { prefix: 'AC9HG' }, civics: { prefix: 'AC9HC' }, economics: { prefix: 'AC9HE' },
  hass: { prefix: 'AC9HS' },   // Humanities and Social Sciences, Foundation to Year 6 (Years 7–10 split into History, Geography, Civics, Economics)
  hpe: { prefix: 'AC9HP', span: 2 }, arts: { prefix: 'AC9A', span: 2 }, languages: { prefix: 'AC9L', span: 2 },
  systems: { prefix: 'AC9TDI', kit: 'technologies', only: /^AC9TDI\d+K/ },          // Digital systems: Knowledge and understanding (the map's subject)
  'digital-processes': { prefix: 'AC9TDI', kit: 'technologies', only: /^AC9TDI\d+P/, span: 2 },   // Digital Technologies processes and production skills
  design: { prefix: 'AC9TDE', kit: 'technologies', span: 2 },                         // Design and Technologies
};
if (!kit || !SUBJECTS[subject]) { console.error(`usage: node tools/import-curriculum.mjs <path to waypoints-kit> [${Object.keys(SUBJECTS).join(' | ')}]`); process.exit(1); }
const { prefix: PREFIX, kit: KITDIR, only: ONLY } = SUBJECTS[subject];
const KIT = KITDIR || subject;   // the kit's folder
const CODE = /AC9[A-Z]{1,4}\d{1,2}[A-Z]{1,3}\d{2}/g;
const MODES = ['consolidation', 'context_breadth', 'repertoire_building', 'structured_reasoning', 'integration'];
// Foundation codes have F where the year goes (AC9MFN04, AC9EFLA01): year 0.
const yearOf = (c) => { const m = String(c).match(/^AC9[A-Z]+?(F(?=[A-Z0-9])|\d{1,2}(?=[A-Z]))/); return m ? (m[1] === 'F' ? 0 : Number(m[1])) : NaN; };
const truthy = (v) => v === true || v === 'True' || v === 'true';
const list = (v) => (Array.isArray(v) ? v : typeof v === 'string' && v.startsWith('[') ? JSON.parse(v.replace(/'/g, '"').replace(/\bNone\b/g, 'null')) : []);

// Every descriptor in the kit, by code.
const all = new Map();
for (const f of readdirSync(join(kit, 'data', KIT)).filter((n) => n.endsWith('.json'))) {
  let d;
  try { d = JSON.parse(readFileSync(join(kit, 'data', KIT, f), 'utf8')); } catch { continue; }
  const s = d.standard;
  if (!s?.code?.startsWith(PREFIX) || (ONLY && !ONLY.test(s.code)) || !Number.isFinite(yearOf(s.code))) continue;
  all.set(s.code, { ...s, kitFile: `data/${KIT}/${f}` });
}

// Kit titles are in Title Case; the site writes sentence case. Keep capitals the curriculum needs.
const KEEP = new Set(['Cartesian', 'Pythagoras', "Pythagoras'", 'Australian', 'Earth', 'I', 'GST', 'Newton', 'Bohr', 'Big', 'Bang', 'First', 'Nations', 'Aboriginal', 'Torres', 'Strait', 'Islander', 'English']);
const lower = (t) => String(t).split(' ').map((w, i) => (i === 0 || KEEP.has(w.replace(/'s$/, '')) || /^[A-Z0-9]{2,}$/.test(w) ? w : w.toLowerCase())).join(' ');
// Proper nouns that are only proper in a phrase (History titles: "the Second World War", but "other nations").
const PHRASES = [[/\bsecond world war\b/gi, 'Second World War'], [/\buniversal declaration of human rights\b/gi, 'Universal Declaration of Human Rights'],
  [/\b(europe|european|asia-pacific|asian|australia|australians|anzac)\b/gi, (w) => w.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('-')],
  [/\bother Nations\b/g, 'other nations'], [/\bhigh court\b/gi, 'High Court'], [/\bprivacy principles\b/gi, 'Privacy Principles']];
const sentence = (t) => PHRASES.reduce((s, [re, to]) => s.replace(re, to), lower(t));
// Hand-written titles from the progression pages win where they exist.
const pageTitles = new Map();
try {
  for (const f of readdirSync(join('data', 'progressions', subject))) {
    const m = readFileSync(join('data', 'progressions', subject, f), 'utf8').match(/^#\s+(AC9\S+)\s+[—-]\s+(.+)$/m);
    if (m) pageTitles.set(m[1], m[2].trim());
  }
} catch { /* no pages */ }

// Strand names. Maths: Years 7–10 use the curriculum's (Number, Algebra…); earlier years use keys such as
// number_concepts. Science: the four Understanding sub-strands, Human endeavour and Inquiry; the kit labels Year 7
// Understanding descriptors only "Understanding", so those take their sub-strand from the code.
const SCI = [['biolog', 'Biological'], ['chemi', 'Chemical'], ['earth', 'Earth and space'], ['physic', 'Physical'], ['endeavour', 'Human endeavour'], ['inquiry', 'Inquiry']];
const SCI7 = { U01: 'Biological', U02: 'Biological', U03: 'Earth and space', U04: 'Physical', U05: 'Chemical', U06: 'Chemical' };
// Digital systems: the kit files every K descriptor under one strand, so the map's rows come from the code.
const SYS = { '6K01': 'Digital systems', '6K02': 'Networks and security', '6K03': 'Data representation', '6K04': 'Data representation', '8K01': 'Digital systems', '8K02': 'Networks and security', '8K03': 'Data representation', '8K04': 'Data representation', '10K01': 'Networks and security', '10K02': 'Web documents', '10K03': 'Data representation' };
const strandOf = (s, code) => {
  const k = String(s || '').toLowerCase();
  if (subject === 'science') {
    for (const [m, n] of SCI) if (k.includes(m)) return n;
    if (/^AC9S7U0\d$/.test(code)) return SCI7[code.slice(-3)];
    return /^AC9S\d+H/.test(code) ? 'Human endeavour' : /^AC9S\d+I/.test(code) ? 'Inquiry' : s;
  }
  if (subject === 'history') return /^AC9HH\d+S/.test(code) ? 'Historical skills' : 'Knowledge and understanding';
  // The other subjects take their strand from the code: the kit's strand labels vary between files.
  const tail = code.match(/^AC9([A-Z]+?)(?:\d{1,2}|F)([A-Z]{0,3})\d{2,3}$/) || [];
  const [, area = '', letters = ''] = tail;
  const kitStrand = String(s || '').split(' — ')[0].trim();
  if (subject === 'english') return { LA: 'Language', LE: 'Literature', LY: 'Literacy' }[letters] || s;
  if (['geography', 'civics', 'economics', 'hass'].includes(subject)) return letters === 'S' ? 'Skills' : 'Knowledge and understanding';
  if (subject === 'hpe') return letters === 'M' ? 'Movement and physical activity' : 'Personal, social and community health';
  if (subject === 'arts') return `${{ ADA: 'Dance', ADR: 'Drama', AMA: 'Media arts', AMU: 'Music', AVA: 'Visual arts' }[area] || area}: ${{ E: 'exploring and responding', D: 'developing practices and skills', C: 'creating and making', P: 'presenting and performing' }[letters] || s}`;
  if (subject === 'languages') return `${area === 'LCH' ? 'Background speakers' : 'Second language'}${letters.startsWith('E') ? ', from Year 7' : ', F–10'}: ${letters ? (letters.endsWith('C') ? 'communicating' : 'understanding') : kitStrand.toLowerCase() || 'all strands'}`;
  if (subject === 'design') return letters === 'K' ? 'Knowledge and understanding' : 'Processes and production skills';
  if (subject === 'digital-processes') return 'Processes and production skills';
  if (subject === 'systems') return SYS[code.match(/(\d+)K(\d\d)$/)?.slice(1).join('K')] || 'Digital systems';
  if (subject === 'maths') { const m = { N: 'Number', A: 'Algebra', M: 'Measurement', SP: 'Space', ST: 'Statistics', P: 'Probability' }[letters]; if (m) return m; }
  for (const n of ['Number', 'Algebra', 'Measurement', 'Space', 'Statistics', 'Probability']) if (k.startsWith(n.toLowerCase())) return n;
  return s;
};
// Science as a human endeavour and Science inquiry are written for two years at a time (7H01 is Years 7–8).
const spanOf = (code) => (yearOf(code) === 0 ? 1 : SUBJECTS[subject].span || (subject === 'science' && /^AC9S\d+[HI]\d/.test(code) ? 2 : 1));
// A two-year band as text: science's H and I descriptors start at their code year (7H01 is Years 7–8); the banded
// subjects end at it (Arts AC9AMU8E01 is Years 7–8).
const bandOf = (c) => { const y = yearOf(c), sp = spanOf(c); return subject === 'science' ? `${y}–${y + sp - 1}` : `${y - sp + 1}–${y}`; };
const want = [...all.keys()].filter((c) => yearOf(c) >= 0 && yearOf(c) <= 10);
const prior = (s) => [...new Set(String(s.prior_knowledge || '').match(CODE) || [])].filter((c) => c !== s.code);
for (const c of [...want]) for (const p of prior(all.get(c))) if (!want.includes(p) && all.has(p)) want.push(p);

// A title already in the committed file wins when only its capitals differ (fixed by hand: "3D", "Earth-Sun-Moon").
const before = new Map();
try { for (const d of JSON.parse(readFileSync(join('data', 'curriculum', `${subject}.json`), 'utf8')).descriptors) before.set(d.code, d.title); } catch { /* first import */ }
const keepCase = (c, t) => (before.get(c)?.toLowerCase() === t.toLowerCase() ? before.get(c) : t);
const out = want.sort((a, b) => yearOf(a) - yearOf(b) || a.localeCompare(b)).map((c) => {
  const s = all.get(c);
  return {
    code: c, kit: s.kitFile, year: yearOf(c), span: spanOf(c), ...(spanOf(c) > 1 ? { years: bandOf(c) } : {}), strand: strandOf(s.strand, c), title: keepCase(c, sentence(pageTitles.get(c) || s.title)), description: s.description,
    prior: prior(s),
    knowledge: s.prior_knowledge || '', endpoint: s.progression_endpoint || '',
    nodes: (s.nodes || []).map((n) => ({
      n: Number(n.id), label: n.label, checkpoint: n.progression_checkpoint, hinge: truthy(n.hinge), criteria: list(n.success_criteria),
      ...(truthy(n.hinge) && n.hinge_reason ? { hinge_reason: n.hinge_reason } : {}),
      width: { minimum: n.minimum_width || '', typical: n.typical_width || '', wider: list(n.wider) },
      // A list of { mode, reason }. Only Kit's five response modes: width_opportunity is a flag, not a mode
      // (yf_maths_AC9MFN04 node 2 lists it as one; reported to Kit).
      modes: list(n.response_modes).map((r) => (typeof r === 'string' ? { mode: r, reason: '' } : r)).filter((r) => MODES.includes(r?.mode)).map((r) => ({ mode: r.mode, reason: r.reason || '' })),
      ...(list(n.related_standards).length ? { related: list(n.related_standards) } : {}),
    })),
  };
});
let source = kit;
try { source = `waypoints-kit ${execFileSync('git', ['-C', kit, 'rev-parse', '--short', 'HEAD']).toString().trim()}`; } catch { /* not a git checkout */ }
mkdirSync(join('data', 'curriculum'), { recursive: true });
writeFileSync(join('data', 'curriculum', `${subject}.json`), JSON.stringify({
  subject, source, note: 'Descriptor text: Australian Curriculum v9 (ACARA, CC BY 4.0). Waypoints and prior knowledge: Learning Waypoints. Made by tools/import-curriculum.mjs; do not edit by hand.',
  descriptors: out,
}, null, 1) + '\n');
console.log(`data/curriculum/${subject}.json: ${out.filter((d) => d.year >= 7).length} Years 7–10 descriptors, ${out.filter((d) => d.year < 7).length} Foundation to Year 6 (${source})`);
