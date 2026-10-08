// Shared snippet palette for the playgrounds: a "Snippets" button that opens collapsible groups of
// buttons. Each button inserts real, editable code at the cursor. One way only: nothing is parsed back.
// In a snippet's code, ‹text› marks a placeholder: the first one is selected after inserting, and the
// markers themselves are removed.
import { scanModule, callText, ensureImport, defAtCursor } from './modules-scan.mjs';

const OPEN = '‹', CLOSE = '›';

/**
 * Pure: where and what to insert. On a blank line the snippet goes at the cursor; on a line that has
 * code it goes on the next line, with the same indent (plus four spaces under a line ending in ":").
 */
export function planInsert(value, selStart, selEnd, code) {
  const lineStart = value.lastIndexOf('\n', selStart - 1) + 1;
  let lineEnd = value.indexOf('\n', selStart);
  if (lineEnd < 0) lineEnd = value.length;
  const line = value.slice(lineStart, lineEnd);
  const blank = line.trim() === '';
  const indent = line.match(/^\s*/)[0] + (!blank && line.trimEnd().endsWith(':') ? '    ' : '');
  const body = code.split('\n').map((l, i) => (i === 0 || !l ? l : indent + l)).join('\n');

  // Blank line: put the snippet at the cursor. Otherwise: a new line after the current one.
  const from = blank ? selStart : lineEnd;
  const to = blank ? selEnd : lineEnd;
  const raw = blank ? (selStart === lineStart ? indent : '') + body : '\n' + indent + body;

  const strip = (t) => t.split(OPEN).join('').split(CLOSE).join('');
  const o = raw.indexOf(OPEN);
  const c = o >= 0 ? raw.indexOf(CLOSE, o) : -1;
  const insert = strip(raw);
  let selFrom, selTo;
  if (o >= 0 && c > o) { selFrom = from + strip(raw.slice(0, o)).length; selTo = selFrom + strip(raw.slice(o + 1, c)).length; }
  else selFrom = selTo = from + insert.length;
  return { insert, from, to, selFrom, selTo };
}

const idOf = (label) => String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Progress is per browser: { all: bool (teacher override), done: {step key: true}, unlocked: {"kind:id": true} }.
const STORE = 'wp-progress';
const loadProgress = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } };

// A student's own buttons (code they saved from the editor) travel with them across lessons, per browser.
const TOOLS_PREFIX = 'wp-mytools:';
const loadTools = (kind) => { try { return JSON.parse(localStorage.getItem(TOOLS_PREFIX + kind)) || []; } catch { return []; } };
const saveTools = (kind, tools) => { try { localStorage.setItem(TOOLS_PREFIX + kind, JSON.stringify(tools)); } catch { /* storage unavailable */ } };

/**
 * Mounts the palette. Returns a controller:
 *   setStudentModules({name: source})  buttons for the student's own module tabs
 *   isLocked(id), onChange(fn)         lock state of a snippet or feature id ("save-as-button", "my-module")
 * Options: modules (the lesson's {name: source}), beforeModuleInsert() (called before a module button edits the code).
 */
export async function mountSnippets({ toolbar, textarea, kind, before = null, url = 'snippets.json', modules = {}, beforeModuleInsert = () => {} }) {
  let data;
  try { data = await (await fetch(url)).json(); } catch { return null; }
  // Snippets that some lesson step unlocks start locked; the rest are always available.
  let claims = {};
  try { claims = await (await fetch('unlocks.json')).json(); } catch { /* no lessons claim any */ }
  // The create page's preview passes this lesson's own locks: ?locks=id~Step title|id~Step title
  const lp = new URLSearchParams(location.search).get('locks');
  if (lp) for (const pair of lp.split('|')) { const [id, step] = pair.split('~'); if (id) claims[id] = { lesson: 'this lesson', step: step || 'a step' }; }
  // Teacher override: ?unlock=all shows everything (remembered in this browser); ?unlock=off resets it.
  const ov = new URLSearchParams(location.search).get('unlock');
  if (ov) { const p = loadProgress(); p.all = ov === 'all'; try { localStorage.setItem(STORE, JSON.stringify(p)); } catch { /* ignore */ } }
  // Free play (the playground page): its own "unlock all" toggle, which never touches the lessons' progress.
  const free = new URLSearchParams(location.search).get('free') === '1';
  const isLocked = (id) => {
    if (!claims[id]) return false;
    const p = loadProgress();
    return !(p.all || (free && p.free) || (p.unlocked || {})[`${kind}:${id}`]);
  };
  const changeCallbacks = [];

  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'btn snippets-toggle'; btn.id = 'snippets-toggle';
  btn.textContent = 'Snippets'; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'snippets-panel');
  if (before) toolbar.insertBefore(btn, before); else toolbar.prepend(btn);

  const panel = document.createElement('div');
  panel.id = 'snippets-panel'; panel.className = 'snippets-panel'; panel.hidden = true;
  panel.setAttribute('role', 'region'); panel.setAttribute('aria-label', 'Snippets');
  let buttons = []; // [element, id, {hint}, isDynamic]
  const lockable = (b, id, hint, dyn = false) => { buttons.push([b, id, { hint }, dyn]); b.dataset.id = id; };

  for (const group of data.groups) {
    const det = document.createElement('details');
    const sum = document.createElement('summary'); sum.textContent = group.name; det.append(sum);
    const row = document.createElement('div'); row.className = 'snippet-row';
    for (const item of group.items) {
      const id = idOf(item.label);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'snippet'; b.textContent = item.label;
      b.addEventListener('click', () => { if (isLocked(id)) return; insert(item.code); toggle(false); });
      lockable(b, id, item.hint);
      row.append(b);
    }
    det.append(row); panel.append(det);
  }

  // Groups that change while the page is open: the student's own buttons and modules.
  const dynamic = document.createElement('div');
  panel.append(dynamic);
  toolbar.after(panel);
  let studentModules = {};
  let note;

  const say = (text) => { if (!note) return; note.textContent = text; clearTimeout(say.t); say.t = setTimeout(() => (note.textContent = ''), 4000); };

  function moduleGroup(mod, source, owned) {
    const fns = scanModule(source);
    if (!fns.length) return null;
    const det = document.createElement('details'); det.open = owned;
    const sum = document.createElement('summary'); sum.textContent = owned ? `My module: ${mod}` : `Module: ${mod}`; det.append(sum);
    const row = document.createElement('div'); row.className = 'snippet-row';
    for (const fn of fns) {
      const id = `${mod}.${fn.name}`;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'snippet'; b.textContent = fn.name;
      b.addEventListener('click', () => {
        if (isLocked(id)) return;
        beforeModuleInsert(); // imports go in the main program, not in a module tab
        const r = ensureImport(textarea.value, mod, fn.name);
        if (r.added) {
          let a = textarea.selectionStart, z = textarea.selectionEnd;
          textarea.value = r.value;
          if (r.at <= a) a += r.added;
          if (r.at <= z) z += r.added;
          textarea.setSelectionRange(a, z);
        }
        insert(callText(fn)); toggle(false);
      });
      lockable(b, id, fn.doc, true);
      row.append(b);
    }
    if (!owned) {
      const how = document.createElement('button');
      how.type = 'button'; how.className = 'snippet how'; how.textContent = 'Show how it works';
      how.addEventListener('click', () => showSource(mod, source));
      row.append(how);
    }
    det.append(row);
    return det;
  }

  function toolsGroup() {
    const tools = loadTools(kind);
    const det = document.createElement('details'); det.open = true;
    const sum = document.createElement('summary'); sum.textContent = 'My tools'; det.append(sum);
    const row = document.createElement('div'); row.className = 'snippet-row';
    tools.forEach((t, i) => {
      const wrap = document.createElement('span'); wrap.className = 'tool';
      const b = document.createElement('button'); b.type = 'button'; b.className = 'snippet'; b.textContent = t.label; b.title = 'Insert your saved code';
      b.addEventListener('click', () => { insert(t.code); toggle(false); });
      const x = document.createElement('button'); x.type = 'button'; x.className = 'snippet rm'; x.textContent = '×'; x.title = `Remove "${t.label}"`; x.setAttribute('aria-label', `Remove ${t.label}`);
      x.addEventListener('click', () => { const all = loadTools(kind); all.splice(i, 1); saveTools(kind, all); renderDynamic(); });
      wrap.append(b, x); row.append(wrap);
    });
    const save = document.createElement('button');
    save.type = 'button'; save.className = 'snippet save'; save.textContent = 'Save selection as button';
    save.addEventListener('click', () => {
      if (isLocked('save-as-button')) return;
      let sel = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
      if (!sel.trim()) sel = defAtCursor(textarea.value, textarea.selectionStart);
      if (!sel.trim()) { say('Select some code first, or put the cursor inside a def.'); return; }
      const m = sel.match(/^\s*def\s+([A-Za-z_]\w*)/);
      const label = (prompt('Name for this button:', m ? m[1] : sel.trim().split('\n')[0].slice(0, 24)) || '').trim();
      if (!label) return;
      const all = loadTools(kind); all.push({ label, code: sel.replace(/\s+$/, '') + '\n' }); saveTools(kind, all);
      renderDynamic(); say(`Saved "${label}". Find it under My tools.`);
    });
    lockable(save, 'save-as-button', 'Select some code in the editor (or put the cursor in a def), then click to keep it as a button.', true);
    row.append(save);
    det.append(row);
    return det;
  }

  function renderDynamic() {
    buttons = buttons.filter((x) => !x[3]);
    dynamic.replaceChildren();
    note = document.createElement('p'); note.className = 'note'; note.setAttribute('aria-live', 'polite');
    dynamic.append(toolsGroup(), note);
    for (const [mod, source] of Object.entries(modules)) {
      if (studentModules[mod] !== undefined) continue; // the student's own module of the same name wins
      const g = moduleGroup(mod, source, false); if (g) dynamic.append(g);
    }
    for (const [mod, source] of Object.entries(studentModules)) { const g = moduleGroup(mod, source, true); if (g) dynamic.append(g); }
    refresh();
  }

  function refresh() {
    for (const [b, id, item] of buttons) {
      const locked = isLocked(id);
      b.classList.toggle('locked', locked);
      b.setAttribute('aria-disabled', String(locked));
      b.title = locked ? `Unlocks in ${claims[id].lesson}: ${claims[id].step}` : item.hint || '';
    }
    changeCallbacks.forEach((f) => f());
  }
  renderDynamic();
  window.addEventListener('storage', (e) => { if (e.key === STORE) refresh(); }); // a check passed in the lesson page

  let dlg;
  function showSource(mod, source) {
    if (!dlg) {
      dlg = document.createElement('dialog'); dlg.className = 'source-dialog';
      dlg.innerHTML = '<form method="dialog"><h2></h2><pre></pre><button class="btn">Close</button></form>';
      document.body.append(dlg);
    }
    dlg.querySelector('h2').textContent = `${mod}.py`;
    dlg.querySelector('pre').textContent = source;
    dlg.showModal();
  }

  function insert(code) {
    const p = planInsert(textarea.value, textarea.selectionStart, textarea.selectionEnd, code);
    textarea.focus();
    textarea.setRangeText(p.insert, p.from, p.to, 'end');
    textarea.setSelectionRange(p.selFrom, p.selTo);
    textarea.dispatchEvent(new Event('input', { bubbles: true })); // autosave, preview, etc.
  }
  function toggle(open = panel.hidden) {
    panel.hidden = !open; btn.setAttribute('aria-expanded', String(open));
    if (!open) textarea.focus();
  }
  btn.addEventListener('click', () => toggle());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) toggle(false); });

  return {
    setStudentModules(m) { studentModules = m || {}; renderDynamic(); },
    isLocked,
    onChange(f) { changeCallbacks.push(f); },
  };
}
