// `npm run validate`: parse every lesson and report problems. Exits 1 on any error.
import { loadLessons, validateLesson } from './lesson.mjs';

const lessons = loadLessons(process.argv[2]);
if (!lessons.length) { console.error('No lessons found in lessons/*/lesson.md'); process.exit(1); }

let bad = 0;
for (const l of lessons) {
  const errs = validateLesson(l);
  const clips = l.steps.filter((s) => s.config.clip).length;
  if (errs.length) { bad += errs.length; errs.forEach((e) => console.error('✗ ' + e)); }
  else console.log(`✓ ${l.slug}: ${l.steps.length} steps, ${clips} clips`);
}
import { readFileSync, readdirSync } from 'node:fs';
for (const f of readdirSync('snippets').filter((n) => n.endsWith('.json'))) {
  try {
    const d = JSON.parse(readFileSync(`snippets/${f}`, 'utf8'));
    let n = 0;
    for (const g of d.groups) for (const i of g.items) {
      n++;
      if (!i.label || !i.code || !i.hint) { bad++; console.error(`✗ snippets/${f} › ${g.name} › ${i.label || '(no label)'}: needs label, code and hint`); }
      if ((i.code.match(/‹/g) || []).length !== (i.code.match(/›/g) || []).length) { bad++; console.error(`✗ snippets/${f} › ${i.label}: unbalanced ‹ ›`); }
      if (i.matches !== undefined) { try { new RegExp(i.matches, 'm'); } catch (e) { bad++; console.error(`✗ snippets/${f} › ${i.label}: matches is not a valid regex (${e.message})`); } }
    }
    if (!bad) console.log(`✓ snippets/${f}: ${n} snippets`);
  } catch (e) { bad++; console.error(`✗ snippets/${f}: ${e.message}`); }
}

// Error-task lint (warnings, never a failure): each planted error names its fault and misconception,
// stays on the lesson's path (no misconception from a later lesson), and a design fault is not a one-line hunt.
import { bugKeys, FAULTS } from './lesson-core.mjs';
let mis = {};
try { mis = JSON.parse(readFileSync('misconceptions.json', 'utf8')); } catch (e) { console.warn(`⚠ misconceptions.json: ${e.message}`); }
const bySlug = Object.fromEntries(lessons.map((l) => [l.slug, l]));
let warned = 0;
const warn = (m) => { warned++; console.warn('⚠ ' + m); };
for (const l of lessons) {
  const checks = [];
  for (const st of l.steps) {
    if (st.config.check) checks.push([`${st.id} "${st.title}"`, st.config.check]);
    for (const t of st.tasks) if (t.config.check) checks.push([`${st.id} "${st.title}" task ${t.index}`, t.config.check]);
  }
  for (const [where, k] of checks) {
    const at = `${l.slug} › ${where}`;
    const planted = k.type === 'bug' || k.fault !== undefined || k.misconception !== undefined;
    if (!planted) continue;
    if (!FAULTS.includes(k.fault)) warn(`${at}: name the fault (fault: ${FAULTS.join(' | ')})`);
    if (!k.misconception) warn(`${at}: name the misconception it targets (misconception: an id from misconceptions.json)`);
    else if (!mis[k.misconception]) warn(`${at}: misconception "${k.misconception}" is not in misconceptions.json`);
    else {
      const home = bySlug[mis[k.misconception].home];
      if (!home) warn(`${at}: misconception "${k.misconception}" has home "${mis[k.misconception].home}", which is not a lesson`);
      else if (home.slug.split('/').slice(0, -1).join('/') === l.slug.split('/').slice(0, -1).join('/') && (home.order ?? 0) > (l.order ?? 0)) {
        warn(`${at}: targets "${k.misconception}", which belongs to a later lesson (${home.slug}); plant this lesson's misconception instead`);
      }
    }
    if (k.type === 'bug' && k.fault === 'design' && bugKeys(k.answer).length < 2) {
      warn(`${at}: a design fault is not a one-line bug hunt; ask for every place the copy costs, or make it a refactor task`);
    }
  }
}
if (warned) console.warn(`${warned} warning(s) in error tasks (see AUTHORING.md, Error tasks)`);
else console.log('✓ error tasks: every planted error names its fault and an on-path misconception');
process.exit(bad ? 1 : 0);
