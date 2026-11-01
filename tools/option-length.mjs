// Right answers that give themselves away by length (1 Nov 2026, roadmap/shared.md › right answers that give
// themselves away by length; roadmap/rules.md T8b). Pure: no file access, so validate and check-options share it.
//
// A `question` check is flagged when its right answer is more than RATIO times the longest wrong option AND at
// least GAP characters longer. Number-only options and checks whose options are all short are skipped: a short
// label can't give much away. Only checks with an `answer` index are read (a `predict` has no right option).

export const RATIO = 1.5;
export const GAP = 20;
export const SHORT = 12;

const plain = (o) => String(o ?? '').replace(/[`*_]/g, '').replace(/\s+/g, ' ').trim();
const isNumberish = (s) => /^[-+−]?[\d.,\s%$/:]+$/.test(s);

/** null if fine, else { right, longestWrong } lengths. */
export function lengthGiveaway(check) {
  if (!check || check.type !== 'question' || !Array.isArray(check.options) || !Number.isInteger(check.answer)) return null;
  const opts = check.options.map(plain);
  if (opts.length < 2 || check.answer < 0 || check.answer >= opts.length) return null;
  if (opts.every((o) => o.length <= SHORT) || opts.every(isNumberish)) return null;
  const right = opts[check.answer].length;
  const longestWrong = Math.max(...opts.filter((_, i) => i !== check.answer).map((o) => o.length));
  return right > RATIO * longestWrong && right - longestWrong >= GAP ? { right, longestWrong } : null;
}

/** Every question check in a parsed lesson, with a stable key: `<slug>#<step or task id>[~smaller]`. */
export function questionChecks(lesson) {
  const out = [];
  const add = (id, cfg) => {
    if (!cfg || typeof cfg !== 'object') return;
    if (cfg.check) out.push({ key: `${lesson.slug}#${id}`, check: cfg.check });
    if (cfg.smaller?.check) out.push({ key: `${lesson.slug}#${id}~smaller`, check: cfg.smaller.check });
  };
  for (const s of lesson.steps || []) {
    add(s.id, s.config);
    for (const t of s.tasks || []) add(t.id, t.config);
  }
  return out;
}

/** Flagged checks in a list of parsed lessons: [{ key, slug, q, right, longestWrong }]. */
export function flaggedQuestions(lessons) {
  const out = [];
  for (const l of lessons) for (const { key, check } of questionChecks(l)) {
    const g = lengthGiveaway(check);
    if (g) out.push({ key, slug: l.slug, q: plain(check.q).slice(0, 90), ...g });
  }
  return out;
}
