// Pure lesson logic shared by the Node build and the in-browser /create/ page: no fs, no DOM.
// `read(file)` returns the text of a lesson-relative file (or undefined if missing).
import YAML from 'yaml';
import { scanModule } from './modules-scan.mjs';

export const STAGES = ['predict', 'run', 'investigate', 'modify', 'make', 'info'];
export const VERBS = ['caption', 'show', 'clear', 'run', 'type', 'click', 'press', 'expect', 'wait'];
export const LAYOUTS = ['split', 'full'];
export const PLAYGROUND_KINDS = ['turtle', 'html'];
export const CHECK_TYPES = ['reflect', 'question'];

/** Playground features (not snippets) that a step can unlock for the turtle playground. */
export const FEATURES = [
  { id: 'save-as-button', label: 'Save selection as button', hint: 'Turn code the student selects (or a def) into their own button.' },
  { id: 'my-module', label: '+ module (own module file)', hint: 'Let the student write their own module file and import from it.' },
];

/** Stable id for a snippet, from its label: "for loop" -> "for-loop". */
export const snippetId = (label) => String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Which playground (and so which snippet list) a step's unlocks refer to. */
export const unlockKind = (lesson, step) => step.config.try?.playground || (lesson.language === 'html' ? 'html' : 'turtle');

export const DEFAULT_PACING = {
  typeCps: 55,        // characters per second when code is "typed" into the stage's code panel
  keyDelayMs: 150,    // delay between keystrokes in app fields
  preRollMs: 700,     // hold before the first action
  postRollMs: 1800,   // hold after the last action
  cursorMs: 800,      // time the pointer takes to travel to a target
  afterActionMs: 450, // beat after each click/type
};


/** Read a code reference "file" or "file#region" via read(file). */
export function snippetFrom(read, ref) {
  const [file, region] = String(ref).split('#');
  const text = read(file);
  if (text === undefined || text === null) throw new Error(`code reference "${ref}": file not found`);
  const lines = String(text).replace(/\r\n/g, '\n').split('\n');
  const marker = /^\s*(?:#|\/\/|<!--)\s*(end)?region\b\s*:?\s*([\w-]*)/;
  let out = lines;
  if (region) {
    let on = false;
    out = [];
    for (const line of lines) {
      const m = line.match(marker);
      if (m && !m[1] && m[2] === region) { on = true; continue; }
      if (m && m[1] && on) { on = false; break; }
      if (on) out.push(line);
    }
    if (!out.length) throw new Error(`code reference "${ref}": region "${region}" not found or empty`);
  }
  return out.filter((l) => !marker.test(l)).join('\n').replace(/^\n+|\s+$/g, '') + '\n';
}

/** Parse lesson.md text into a lesson object (no files touched). */
export function parseLessonText(raw, slug = 'lesson') {
  raw = raw.replace(/\r\n/g, '\n');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fm) throw new Error(`${slug}: lesson.md must start with --- frontmatter ---`);
  const meta = YAML.parse(fm[1]) || {};
  const rest = raw.slice(fm[0].length);
  const parts = rest.split(/^## /m);
  const intro = parts.shift().trim();
  const steps = parts.map((chunk, i) => {
    const nl = chunk.indexOf('\n');
    const title = (nl === -1 ? chunk : chunk.slice(0, nl)).trim();
    let body = nl === -1 ? '' : chunk.slice(nl + 1);
    let config = {};
    const m = body.match(/```step\n([\s\S]*?)\n```\n?/);
    if (m) {
      config = YAML.parse(m[1]) || {};
      body = body.replace(m[0], '');
    }
    return { index: i + 1, id: `step-${i + 1}`, title, body: body.trim(), config };
  });
  return {
    slug,
    depth: slug.split('/').length,
    title: meta.title || slug,
    summary: meta.summary || '',
    author: meta.author ? String(meta.author) : '',
    modules: Array.isArray(meta.modules) ? meta.modules.map(String) : [],
    language: meta.language || 'python',
    app: meta.app || null,
    pacing: { ...DEFAULT_PACING, ...(meta.pacing || {}) },
    intro,
    steps,
  };
}

/** known (optional): { turtle: Set<snippet id>, html: Set<...> } to check `unlocks` ids against. */
export function validateLessonCore(lesson, read, known, shared = {}) {
  // Modules this lesson offers: a file next to lesson.md wins over a shared one in modules/.
  const errs = [];
  const moduleSource = (name) => read(`${name}.py`) ?? shared[name];
  if (lesson.modules?.length) {
    known = { ...known };
    const ids = new Set(known.turtle || []);
    for (const f of FEATURES) ids.add(f.id);
    for (const name of lesson.modules) {
      const src = /^[a-z][a-z0-9_]*$/.test(name) ? moduleSource(name) : undefined;
      if (src === undefined) { errs.push(`${lesson.slug} › frontmatter: module "${name}" not found (add ${name}.py next to lesson.md or in modules/; names are lowercase letters, digits and _)`); continue; }
      for (const fn of scanModule(src)) ids.add(`${name}.${fn.name}`);
    }
    if (known.turtle) known.turtle = ids;
  }
  const snip = (ref) => snippetFrom(read, ref);
  const err = (where, msg) => errs.push(`${lesson.slug} › ${where}: ${msg}`);
  const hasClips = lesson.steps.some((s) => s.config.clip);

  if (!lesson.steps.length) err('lesson', 'no steps (each step starts with "## Title")');
  if (hasClips) {
    if (!lesson.app?.command) err('frontmatter', 'app.command is required when any step has a clip');
    if (!lesson.app?.url) err('frontmatter', 'app.url is required when any step has a clip');
  }
  if (lesson.app?.layout && !LAYOUTS.includes(lesson.app.layout)) err('frontmatter', `app.layout must be one of ${LAYOUTS.join(', ')}`);

  for (const s of lesson.steps) {
    const where = `${s.id} "${s.title}"`;
    const c = s.config;
    if (!STAGES.includes(c.stage)) err(where, `stage must be one of ${STAGES.join(', ')} (got "${c.stage}")`);
    if (c.code) {
      try { snip(c.code); } catch (e) { err(where, e.message); }
    }
    if (c.pacing !== undefined && (typeof c.pacing !== 'object' || Array.isArray(c.pacing))) err(where, 'pacing must be a mapping, e.g. { keyDelayMs: 40 }');
    if (c.query !== undefined) {
      if (typeof c.query !== 'object' || Array.isArray(c.query)) err(where, 'query must be a mapping of URL parameters');
      else for (const [k, v] of Object.entries(c.query)) {
        if (typeof v === 'string' && v.startsWith('@')) { try { snip(v.slice(1)); } catch (e) { err(where, `query.${k}: ${e.message}`); } }
      }
    }
    if (c.try !== undefined) {
      if (typeof c.try !== 'object' || Array.isArray(c.try)) err(where, 'try must be a mapping: { starter: file#region, height: 460 }');
      else if (c.try.playground && !PLAYGROUND_KINDS.includes(c.try.playground)) err(where, `try.playground must be one of ${PLAYGROUND_KINDS.join(', ')}`);
      else if (c.try.starter) { try { snip(c.try.starter); } catch (e) { err(where, `try.starter: ${e.message}`); } }
      else if (!c.code) err(where, 'try needs a starter (file#region) or a step-level code reference to start from');
    }
    if (c.clip !== undefined) {
      if (!Array.isArray(c.clip) || !c.clip.length) { err(where, 'clip must be a non-empty list of actions'); continue; }
      c.clip.forEach((a, i) => {
        const w = `${where} clip[${i + 1}]`;
        const keys = a && typeof a === 'object' ? Object.keys(a) : [];
        if (keys.length !== 1) return err(w, 'each action must have exactly one verb key');
        const verb = keys[0];
        const v = a[verb];
        if (!VERBS.includes(verb)) return err(w, `unknown verb "${verb}" (use ${VERBS.join(', ')})`);
        if (verb === 'show') { try { snip(v); } catch (e) { err(w, e.message); } }
        if (verb === 'type' && !(v && v.text !== undefined && (v.into || v.selector))) err(w, 'type needs {into|selector, text}');
        if (verb === 'expect' && !(v && (v.field || v.selector) && (v.value !== undefined || v.contains !== undefined))) err(w, 'expect needs {field|selector, value|contains}');
        if (verb === 'click' && !(typeof v === 'string' || (v && v.selector))) err(w, 'click needs a label string or {selector}');
        if (verb === 'wait' && typeof v !== 'number') err(w, 'wait needs milliseconds');
        if (verb === 'type' && v && typeof v.text === 'string' && v.text.startsWith('@')) {
          try { snip(v.text.slice(1)); } catch (e) { err(w, `type.text: ${e.message}`); }
        }
      });
    }
    if (c.check !== undefined) {
      const k = c.check;
      if (!k || typeof k !== 'object' || Array.isArray(k) || !CHECK_TYPES.includes(k.type)) err(where, `check.type must be one of ${CHECK_TYPES.join(', ')}`);
      else if (k.type === 'reflect' && !(typeof k.text === 'string' && k.text.trim())) err(where, 'check (reflect) needs text, e.g. "I can explain why the turtle turns"');
      else if (k.type === 'question') {
        if (!(typeof k.q === 'string' && k.q.trim())) err(where, 'check (question) needs q');
        if (!Array.isArray(k.options) || k.options.length < 2 || !k.options.every((o) => typeof o === 'string')) err(where, 'check (question) needs options: a list of at least two strings');
        else if (!Number.isInteger(k.answer) || k.answer < 0 || k.answer >= k.options.length) err(where, `check.answer must be the number (from 0) of the correct option, 0 to ${k.options.length - 1}`);
      }
    }
    if (c.unlocks !== undefined) {
      if (!Array.isArray(c.unlocks) || !c.unlocks.every((u) => typeof u === 'string')) err(where, 'unlocks must be a list of snippet ids');
      else {
        if (!c.check) err(where, 'unlocks needs a check (what the student does to earn them)');
        const ids = known?.[unlockKind(lesson, s)];
        if (ids) for (const u of c.unlocks) if (!ids.has(u)) err(where, `unknown snippet id "${u}" (see the reference page for ids)`);
      }
    }
    if (c.reveal && !c.clip) err(where, '"reveal" only makes sense on a step with a clip');
  }
  return errs;
}
