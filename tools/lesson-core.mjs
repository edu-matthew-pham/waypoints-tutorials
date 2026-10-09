// Pure lesson logic shared by the Node build and the in-browser /create/ page: no fs, no DOM.
// `read(file)` returns the text of a lesson-relative file (or undefined if missing).
import YAML from 'yaml';
import { scanModule } from './modules-scan.mjs';

export const STAGES = ['predict', 'run', 'investigate', 'modify', 'make', 'info'];
export const VERBS = ['caption', 'show', 'clear', 'run', 'type', 'click', 'press', 'expect', 'wait'];
export const LAYOUTS = ['split', 'full'];
export const PLAYGROUND_KINDS = ['turtle', 'html'];
export const CHECK_TYPES = ['reflect', 'question', 'code', 'number', 'bug', 'match', 'trace', 'parsons', 'predict'];
// What kind of fault an error item plants (bug, and error-based question or predict): see AUTHORING.md "Error tasks".
export const FAULTS = ['syntax', 'runtime', 'logic', 'design'];

/**
 * A trace table written as a small pipe table: first row is the header, cells in [brackets] are the blanks
 * students fill in (the bracket holds the answer). Returns { head: [..], rows: [[{v, blank}]] }.
 */
export function parseTrace(text) {
  const rows = String(text).split('\n').map((l) => l.trim()).filter(Boolean).map((l) => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim()));
  if (rows.length < 2) throw new Error('needs a header row and at least one data row');
  const head = rows.shift();
  const body = rows.map((r) => {
    if (r.length !== head.length) throw new Error(`every row needs ${head.length} cells (found a row with ${r.length})`);
    return r.map((c) => { const m = c.match(/^\[(.*)\]$/); return m ? { v: m[1].trim(), blank: true } : { v: c, blank: false }; });
  });
  if (!body.some((r) => r.some((c) => c.blank))) throw new Error('needs at least one blank, written in [brackets] with its answer inside');
  return { head, rows: body };
}
export const CODE_RULES = ['defs', 'calls', 'loops', 'returns', 'params', 'imports', 'uses', 'contains'];

/**
 * Evaluates a code check's rules against the student's code (all their files joined). Pure and
 * self-contained: the lesson page inlines this function's source, so it must not use anything outside itself.
 * Rules: defs (functions defined), calls (one of the student's functions called this many times, in the text),
 * loops (for/while lines), returns (return lines), params (one function with this many parameters),
 * imports (list of module names), uses (list of names that must appear, such as pencolor). Returns [{ label, ok }].
 */
export function evalRules(rules, text) {
  const code = String(text).split('\n').map((l) => l.replace(/#.*$/, ''));
  const defs = [];
  code.forEach((l) => { const m = l.match(/^\s*def\s+([A-Za-z_]\w*)\s*\(([^)]*)\)/); if (m) defs.push({ name: m[1], params: m[2].split(',').filter((x) => x.trim()).length }); });
  const count = (re) => code.filter((l) => re.test(l)).length;
  const callsOf = (name) => code.filter((l) => !/^\s*def\s/.test(l)).reduce((n, l) => n + (l.match(new RegExp('\\b' + name + '\\s*\\(', 'g')) || []).length, 0);
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  const out = [];
  if (rules.defs) out.push({ label: `Define at least ${plural(rules.defs, 'function')} with def`, ok: defs.length >= rules.defs });
  if (rules.params) out.push({ label: `Write a function with at least ${plural(rules.params, 'parameter')}`, ok: defs.some((d) => d.params >= rules.params) });
  if (rules.calls) out.push({ label: rules.calls === 1 ? 'Call your function' : `Call one of your functions at least ${rules.calls} times`, ok: Math.max(0, ...defs.map((d) => callsOf(d.name))) >= rules.calls });
  if (rules.loops) out.push({ label: rules.loops === 1 ? 'Use a loop' : `Use at least ${rules.loops} loops`, ok: count(/^\s*(for|while)\b/) >= rules.loops });
  if (rules.returns) out.push({ label: 'Use return to give a value back', ok: count(/^\s*return\b/) >= rules.returns });
  (rules.uses || []).forEach((n) => out.push({ label: `Use ${n}`, ok: code.some((l) => new RegExp('\\b' + n + '\\b').test(l)) }));
  (rules.imports || []).forEach((m) => out.push({ label: `Import from ${m}`, ok: code.some((l) => new RegExp('^\\s*(from|import)\\s+' + m + '\\b').test(l)) }));
  // contains: code fragments that must appear somewhere (spaces ignored, comments skipped), shown as written.
  const flat = code.join('\n').replace(/\s+/g, '');
  (rules.contains || []).forEach((frag) => out.push({ label: `Your code has ${frag}`, ok: flat.includes(String(frag).replace(/\s+/g, '')) }));
  return out;
}

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

/**
 * Split display code into files. A line "# file: name.py" (or "<!-- file: name -->", "// file: name")
 * starts a new file, so several programs show as separate panels and never as one file.
 * Returns [{ name, code }]; code with no marker is one file with name ''.
 */
export function splitFiles(code) {
  const mark = /^\s*(?:#|\/\/|<!--)\s*file:\s*([\w.\-/]+)\s*(?:-->)?\s*$/;
  const files = [];
  let cur = null;
  for (const line of String(code).replace(/\n$/, '').split('\n')) {
    const m = line.match(mark);
    if (m) { cur = { name: m[1], lines: [] }; files.push(cur); continue; }
    if (!cur) { cur = { name: '', lines: [] }; files.push(cur); }
    cur.lines.push(line);
  }
  return files
    .map((f) => ({ name: f.name, code: f.lines.join('\n').replace(/^\n+|\s+$/g, '') + '\n' }))
    .filter((f) => f.name || f.code.trim());
}

/** Bug answers as "line" (one file) or "file:line" (several files) keys, the same keys the page uses. */
export function bugKeys(answer) {
  return (Array.isArray(answer) ? answer : [answer]).map((a) => String(a).trim());
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
    // "### Heading" lines inside a step are its tasks (sub-pills). One or no heading: the step has a single task.
    const secs = body.split(/^### /m);
    const lead = secs.shift();
    let tasks = [];
    if (secs.length >= 2) {
      tasks = secs.map((t, n) => {
        const nl2 = t.indexOf('\n');
        return { index: n + 1, id: `step-${i + 1}#t${n + 1}`, title: (nl2 === -1 ? t : t.slice(0, nl2)).trim(), body: (nl2 === -1 ? '' : t.slice(nl2 + 1)).trim(), config: (Array.isArray(config.tasks) && config.tasks[n] && typeof config.tasks[n] === 'object') ? config.tasks[n] : {} };
      });
      body = lead;
    }
    return { index: i + 1, id: `step-${i + 1}`, title, body: body.trim(), config, tasks };
  });
  return {
    slug,
    depth: slug.split('/').length,
    title: meta.title || slug,
    summary: meta.summary || '',
    author: meta.author ? String(meta.author) : '',
    order: Number.isFinite(Number(meta.order)) && meta.order !== null && meta.order !== '' ? Number(meta.order) : null,
    hook: meta.hook ? String(meta.hook).trim() : '',
    unit: meta.unit ? String(meta.unit) : '',          // the unit (group of lessons) in the course's index.md
    optional: meta.optional === true,                // an optional lesson: not needed to finish the course
    teachers: meta.teachers ? String(meta.teachers).trim() : '',
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

  // One check (a step's, or a task's). c is the step config, for what a check needs from the step (a playground).
  const validateCheck = (k, where, c) => {
    if (!k || typeof k !== 'object' || Array.isArray(k) || !CHECK_TYPES.includes(k.type)) return err(where, `check.type must be one of ${CHECK_TYPES.join(', ')}`);
    const str = (v) => typeof v === 'string' && v.trim();
    if (k.fault !== undefined && !FAULTS.includes(k.fault)) err(where, `check fault must be one of ${FAULTS.join(', ')}`);
    if (k.misconception !== undefined && !/^[a-z][a-z0-9-]*$/.test(String(k.misconception))) err(where, 'check misconception must be a concept id such as return-vs-print (lowercase, hyphens)');
    if (k.type === 'reflect') { if (!str(k.text)) err(where, 'check (reflect) needs text, e.g. "I can explain why the turtle turns"'); }
    else if (k.type === 'code') {
      if (!str(k.text)) err(where, 'check (code) needs text, e.g. "Write a function and call it"');
      const r = k.rules;
      if (!r || typeof r !== 'object' || Array.isArray(r)) err(where, `check (code) needs rules, a mapping using ${CODE_RULES.join(', ')}`);
      else {
        for (const key of Object.keys(r)) if (!CODE_RULES.includes(key)) err(where, `unknown code rule "${key}" (use ${CODE_RULES.join(', ')})`);
        for (const key of ['defs', 'calls', 'loops', 'returns', 'params']) if (r[key] !== undefined && !(Number.isInteger(r[key]) && r[key] > 0)) err(where, `code rule ${key} must be a whole number above 0`);
        if (r.uses !== undefined && !(Array.isArray(r.uses) && r.uses.every((m) => /^\w+$/.test(String(m))))) err(where, 'code rule uses must be a list of names, such as [pencolor]');
        if (r.imports !== undefined && !(Array.isArray(r.imports) && r.imports.every((m) => /^\w+$/.test(String(m))))) err(where, 'code rule imports must be a list of module names');
        if (r.contains !== undefined && !(Array.isArray(r.contains) && r.contains.every((f) => typeof f === 'string' && f.trim()))) err(where, 'code rule contains must be a list of code fragments, such as ["inside(x, y"]');
        if (!Object.keys(r).length) err(where, 'check (code) needs at least one rule');
      }
      if (!c.try || (c.try.playground && c.try.playground !== 'turtle')) err(where, 'a code check needs a Python turtle playground (try: { starter: ... }) to run');
    }
    else if (k.type === 'question') {
      if (!str(k.q)) err(where, 'check (question) needs q');
      if (!Array.isArray(k.options) || k.options.length < 2 || !k.options.every((o) => typeof o === 'string')) err(where, 'check (question) needs options: a list of at least two strings');
      else if (!Number.isInteger(k.answer) || k.answer < 0 || k.answer >= k.options.length) err(where, `check.answer must be the number (from 0) of the correct option, 0 to ${k.options.length - 1}`);
    }
    else if (k.type === 'number') {
      if (!str(k.q)) err(where, 'check (number) needs q');
      if (typeof k.answer !== 'number' || !Number.isFinite(k.answer)) err(where, 'check (number) needs answer: a number');
      if (k.tolerance !== undefined && !(typeof k.tolerance === 'number' && k.tolerance >= 0)) err(where, 'check (number) tolerance must be 0 or more');
    }
    else if (k.type === 'bug' || k.type === 'parsons') {
      let code = '';
      if (!str(k.code)) err(where, `check (${k.type}) needs code: a file#region reference`);
      else { try { code = snip(k.code); } catch (e) { err(where, `check.code: ${e.message}`); } }
      const lines = code.replace(/\n$/, '').split('\n');
      if (k.type === 'bug') {
        const files = code ? splitFiles(code) : [];
        const multi = files.length > 1 || (files[0] && files[0].name);
        const keys = k.answer === undefined || k.answer === null ? [] : bugKeys(k.answer);
        if (!keys.length) err(where, 'check (bug) needs answer: a line number, or a list of line numbers (counting from 1)');
        else if (code) {
          for (const key of keys) {
            const m = key.match(/^(?:(.+):)?(\d+)$/);
            const f = m && (m[1] ? files.find((x) => x.name === m[1]) : (!multi ? files[0] : null));
            if (!m || Number(m[2]) < 1) err(where, `check (bug) answer "${key}" must be a line number${multi ? ' written as file:line, such as program_b.py:6' : ''}`);
            else if (!f) err(where, multi ? `check (bug) answer "${key}" must name one of the files: ${files.map((x) => x.name).join(', ')} (as file:line)` : `check (bug) answer "${key}" names a file, but the code has no "# file:" lines`);
            else if (Number(m[2]) > f.code.replace(/\n$/, '').split('\n').length) err(where, `check (bug) answer "${key}" is past the end of ${f.name || 'the code'}`);
          }
        }
        
      } else {
        if (code && lines.filter((l) => l.trim()).length < 3) err(where, 'check (parsons) needs at least 3 lines of code');
        if (k.extra !== undefined && !(Array.isArray(k.extra) && k.extra.every((l) => typeof l === 'string' && l.trim()))) err(where, 'check (parsons) extra must be a list of spare lines');
      }
    }
    else if (k.type === 'match') {
      if (!Array.isArray(k.pairs) || k.pairs.length < 2 || !k.pairs.every((p) => Array.isArray(p) && p.length === 2 && p.every(str))) err(where, 'check (match) needs pairs: a list of at least two [left, right] pairs');
      else if (new Set(k.pairs.map((p) => p[1].trim())).size !== k.pairs.length) err(where, 'check (match) every right-hand item must be different');
    }
    else if (k.type === 'predict') {
      if (!str(k.q)) err(where, 'check (predict) needs q, e.g. "How many sides will the shape have?"');
      if (k.kind !== undefined && !['text', 'number'].includes(k.kind)) err(where, 'check (predict) kind must be text or number');
      if (k.options !== undefined && !(Array.isArray(k.options) && k.options.length >= 2 && k.options.every((o) => typeof o === 'string' && o.trim()))) err(where, 'check (predict) options must be a list of at least two strings');
      if (k.actual !== undefined && !str(String(k.actual))) err(where, 'check (predict) actual must be text, shown after the Run step');
    }
    else if (k.type === 'trace') {
      if (!str(k.table)) err(where, 'check (trace) needs table: a pipe table with blanks in [brackets]');
      else { try { parseTrace(k.table); } catch (e) { err(where, `check (trace) table ${e.message}`); } }
    }
  };

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
      if (s.tasks.length) err(where, 'this step has tasks (### headings): put each check on its task, under tasks:');
      else validateCheck(c.check, where, c);
    }
    const tasksHaveChecks = s.tasks.some((t) => t.config.check);
    if (c.unlocks !== undefined) {
      if (!Array.isArray(c.unlocks) || !c.unlocks.every((u) => typeof u === 'string')) err(where, 'unlocks must be a list of snippet ids');
      else {
        if (!c.check && !tasksHaveChecks) err(where, 'unlocks needs a check (what the student does to earn them)');
        const ids = known?.[unlockKind(lesson, s)];
        if (ids) for (const u of c.unlocks) if (!ids.has(u)) err(where, `unknown snippet id "${u}" (see the reference page for ids)`);
      }
    }
    if (c.insight !== undefined && !(typeof c.insight === 'string' && c.insight.trim())) err(where, 'insight must be a short text: what this step should help students see');
    if (c.tasks !== undefined) {
      if (!Array.isArray(c.tasks)) err(where, 'tasks must be a list, one entry per ### heading in the step');
      else if (c.tasks.length !== s.tasks.length) err(where, `tasks has ${c.tasks.length} entries but the step has ${s.tasks.length} ### headings (they must match, in order)`);
    }
    s.tasks.forEach((t) => {
      const tw = `${where} task ${t.index} "${t.title}"`;
      const tc = t.config;
      if (tc.hint !== undefined) {
        const hs = Array.isArray(tc.hint) ? tc.hint : [tc.hint];
        if (hs.length > 3 || !hs.every((h) => typeof h === 'string' && h.trim())) err(tw, 'hint must be a short text, or a list of up to 3 texts');
      }
      if (tc.starter !== undefined) {
        if (!c.try) err(tw, 'a task starter needs the step to have a try playground');
        else { try { snip(tc.starter); } catch (e) { err(tw, `starter: ${e.message}`); } }
      }
      if (tc.insight !== undefined && !(typeof tc.insight === 'string' && tc.insight.trim())) err(tw, 'insight must be a short text');
      if (tc.check !== undefined) validateCheck(tc.check, tw, c);
      if (tc.unlocks !== undefined) {
        if (!Array.isArray(tc.unlocks) || !tc.unlocks.every((u) => typeof u === 'string')) err(tw, 'unlocks must be a list of snippet ids');
        else {
          if (!tc.check) err(tw, 'unlocks needs a check on this task');
          const ids = known?.[unlockKind(lesson, s)];
          if (ids) for (const u of tc.unlocks) if (!ids.has(u)) err(tw, `unknown snippet id "${u}"`);
        }
      }
    });
    if (c.hint !== undefined) {
      const hs = Array.isArray(c.hint) ? c.hint : [c.hint];
      if (hs.length > 3 || !hs.every((h) => typeof h === 'string' && h.trim())) err(where, 'hint must be a short text, or a list of up to 3 texts (nudges, not answers)');
    }
    if (c.reveal !== undefined && typeof c.reveal !== 'boolean' && !(typeof c.reveal === 'string' && c.reveal.trim())) err(where, 'reveal must be true, or the text of the button, e.g. "Show the expected result"');
    if (c.reveal && !c.clip) err(where, '"reveal" only makes sense on a step with a clip');
  }
  return errs;
}
