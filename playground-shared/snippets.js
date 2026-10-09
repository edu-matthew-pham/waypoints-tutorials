// Shared reference panel for the playgrounds: a "Reference" button that opens collapsible groups of cards.
// Each card shows real code with a Copy button; the student pastes it where it belongs. Nothing is inserted
// for them, so where the code goes (and why) stays the student's decision.
// In a snippet's code, ‹text› marks a value to change: it is highlighted on the card and the markers are
// removed when copied.
import { scanModule, callText, defAtCursor } from './modules-scan.mjs';

const OPEN = '‹', CLOSE = '›';
const strip = (t) => String(t).split(OPEN).join('').split(CLOSE).join('');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Card code as HTML: placeholders become <mark> so students can see what to change. */
export const markPlaceholders = (code) => esc(code).replace(/‹([^›]*)›/g, '<mark class="ph" title="Change this">$1</mark>');

const idOf = (label) => String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Progress is per browser: { all: bool (teacher override), done: {step key: true}, unlocked: {"kind:id": true} }.
const STORE = 'wp-progress';
const loadProgress = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } };

// A student's own tools (code they saved from the editor) travel with them across lessons, per browser.
const TOOLS_PREFIX = 'wp-mytools:';
const loadTools = (kind) => { try { return JSON.parse(localStorage.getItem(TOOLS_PREFIX + kind)) || []; } catch { return []; } };
const saveTools = (kind, tools) => { try { localStorage.setItem(TOOLS_PREFIX + kind, JSON.stringify(tools)); } catch { /* storage unavailable */ } };

const PASTE_KEY = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? '⌘V' : 'Ctrl+V';

/** Copy text; fall back to a hidden textarea where the async clipboard is not allowed (file://, old browsers). */
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { /* fall back */ }
  const t = document.createElement('textarea');
  t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
  document.body.append(t); t.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch { ok = false; }
  t.remove();
  return ok;
}

/**
 * Mounts the panel. Returns a controller:
 *   setStudentModules({name: source})  cards for the student's own module tabs
 *   isLocked(id), onChange(fn)         lock state of a snippet or feature id ("save-as-button", "my-module")
 * Options: modules (the lesson's {name: source}); openCopy(name, source) makes an editable copy of a lesson
 * module as the student's own (offered once "my-module" is unlocked); openModule(name) shows a student module tab.
 */
export async function mountSnippets({ toolbar, textarea, kind, before = null, url = 'snippets.json', modules = {}, openCopy = null, openModule = null }) {
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
  btn.textContent = 'Reference'; btn.title = 'Code you can copy, then paste into your program';
  btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'snippets-panel');
  if (before) toolbar.insertBefore(btn, before); else toolbar.prepend(btn);

  const panel = document.createElement('div');
  panel.id = 'snippets-panel'; panel.className = 'snippets-panel'; panel.hidden = true;
  panel.setAttribute('role', 'region'); panel.setAttribute('aria-label', 'Reference');
  const intro = document.createElement('p'); intro.className = 'ref-intro';
  intro.innerHTML = `Copy what you need, then paste it into your code with <kbd>${PASTE_KEY}</kbd>. <mark class="ph">Highlighted</mark> values are yours to change.`;
  const note = document.createElement('p'); note.className = 'note'; note.setAttribute('aria-live', 'polite');
  panel.append(intro, note);
  const say = (text) => { note.textContent = text; clearTimeout(say.t); say.t = setTimeout(() => (note.textContent = ''), 4000); };

  let cards = []; // [element, id, hint, isDynamic]

  /** A card: name, hint, then one or more code parts (each with its own Copy), then any extra actions. */
  function card({ id, label, hint, parts, dyn = false, actions = [] }) {
    const c = document.createElement('div'); c.className = 'ref-card'; c.dataset.id = id;
    const head = document.createElement('div'); head.className = 'ref-head';
    const name = document.createElement('span'); name.className = 'ref-name'; name.textContent = label;
    head.append(name, ...actions);
    c.append(head);
    if (hint) { const h = document.createElement('p'); h.className = 'ref-hint'; h.textContent = hint; c.append(h); }
    const lock = document.createElement('p'); lock.className = 'ref-lock'; c.append(lock);
    for (const part of parts) {
      if (part.note) { const n = document.createElement('p'); n.className = 'ref-where'; n.textContent = part.note; c.append(n); }
      const row = document.createElement('div'); row.className = 'ref-code';
      const pre = document.createElement('pre'); pre.innerHTML = markPlaceholders(part.code.replace(/\n$/, ''));
      const cp = document.createElement('button'); cp.type = 'button'; cp.className = 'snippet copy'; cp.textContent = 'Copy';
      cp.setAttribute('aria-label', `Copy ${label}${part.note ? `: ${part.note}` : ''}`);
      cp.addEventListener('click', async () => {
        if (isLocked(id)) return;
        const ok = await copyText(strip(part.code).replace(/\n$/, ''));
        if (ok) { cp.textContent = 'Copied'; setTimeout(() => (cp.textContent = 'Copy'), 1500); say(`Copied. Click where it belongs in your code and paste with ${PASTE_KEY}.`); }
        else { const r = document.createRange(); r.selectNodeContents(pre); const s = getSelection(); s.removeAllRanges(); s.addRange(r); say('Copying is blocked here: the code is selected, so copy it yourself.'); }
      });
      row.append(pre, cp);
      c.append(row);
    }
    cards.push([c, id, hint, dyn]);
    return c;
  }
  // Groups the student opened or closed stay that way when the panel re-renders (a tool saved, a module edited).
  const opened = new Map();
  function group(title, open = false) {
    const det = document.createElement('details'); det.open = opened.has(title) ? opened.get(title) : open;
    det.addEventListener('toggle', () => opened.set(title, det.open));
    const sum = document.createElement('summary'); sum.textContent = title; det.append(sum);
    const grid = document.createElement('div'); grid.className = 'ref-grid'; det.append(grid);
    return [det, grid];
  }
  const small = (label, title, fn) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'snippet small'; b.textContent = label; b.title = title; b.addEventListener('click', fn); return b; };

  for (const g of data.groups) {
    const [det, grid] = group(g.name);
    for (const item of g.items) grid.append(card({ id: idOf(item.label), label: item.label, hint: item.hint, parts: [{ code: item.code }] }));
    panel.append(det);
  }

  // Groups that change while the page is open: the student's own tools and modules.
  const dynamic = document.createElement('div');
  panel.append(dynamic);
  toolbar.after(panel);
  let studentModules = {};

  function moduleGroup(mod, source, owned) {
    const fns = scanModule(source);
    if (!fns.length && !owned) return null;
    const [det, grid] = group(owned ? `My module: ${mod}` : `Module: ${mod}`, owned);
    const bar = document.createElement('div'); bar.className = 'ref-bar';
    if (owned) {
      if (openModule) bar.append(small(`Edit ${mod}.py`, 'Open this module in its tab', () => { openModule(mod); toggle(false); }));
    } else {
      bar.append(small('Show how it works', `Read the code inside ${mod}.py`, () => showSource(mod, source)));
    }
    det.insertBefore(bar, grid);
    if (!fns.length) { const p = document.createElement('p'); p.className = 'ref-hint'; p.textContent = 'No functions with a """docstring""" yet. Each one you add shows up here.'; grid.append(p); }
    for (const fn of fns) {
      grid.append(card({
        id: `${mod}.${fn.name}`, label: `${fn.name}()`, hint: fn.doc, dyn: true,
        parts: [
          { note: '1. At the top of main.py', code: `from ${mod} import ${fn.name}` },
          { note: '2. Where you want it to run', code: callText(fn) },
        ],
      }));
    }
    return det;
  }

  function toolsGroup() {
    const tools = loadTools(kind);
    const [det, grid] = group('My tools', true);
    tools.forEach((t, i) => {
      grid.append(card({
        id: `tool:${i}`, label: t.label, dyn: true, parts: [{ code: t.code }],
        actions: [
          small('Edit', `Change "${t.label}"`, () => editTool(i)),
          small('×', `Remove "${t.label}"`, () => { if (!confirm(`Remove "${t.label}" from My tools?`)) return; const all = loadTools(kind); all.splice(i, 1); saveTools(kind, all); renderDynamic(); }),
        ],
      }));
    });
    const save = document.createElement('button');
    save.type = 'button'; save.className = 'snippet save'; save.textContent = 'Save selection to My tools'; save.dataset.id = 'save-as-button';
    save.addEventListener('click', () => {
      if (isLocked('save-as-button')) return;
      let sel = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
      if (!sel.trim()) sel = defAtCursor(textarea.value, textarea.selectionStart);
      if (!sel.trim()) { say('Select some code first, or put the cursor inside a def.'); return; }
      const m = sel.match(/^\s*def\s+([A-Za-z_]\w*)/);
      const label = (prompt('Name for this tool:', m ? m[1] : sel.trim().split('\n')[0].slice(0, 24)) || '').trim();
      if (!label) return;
      const all = loadTools(kind); all.push({ label, code: sel.replace(/\s+$/, '') + '\n' }); saveTools(kind, all);
      renderDynamic(); say(`Saved "${label}". Find it under My tools.`);
    });
    cards.push([save, 'save-as-button', 'Select some code in the editor (or put the cursor in a def), then click to keep it under My tools.', true]);
    grid.append(save);
    return det;
  }

  function renderDynamic() {
    cards = cards.filter((x) => !x[3]);
    dynamic.replaceChildren(toolsGroup());
    for (const [mod, source] of Object.entries(modules)) {
      if (studentModules[mod] !== undefined) continue; // the student's own module of the same name wins
      const g = moduleGroup(mod, source, false); if (g) dynamic.append(g);
    }
    for (const [mod, source] of Object.entries(studentModules)) { const g = moduleGroup(mod, source, true); if (g) dynamic.append(g); }
    refresh();
  }

  function refresh() {
    for (const [el, id, hint] of cards) {
      const locked = isLocked(id);
      el.classList.toggle('locked', locked);
      el.setAttribute('aria-disabled', String(locked));
      const why = locked ? `Unlocks in ${claims[id].lesson}: ${claims[id].step}` : '';
      const lock = el.querySelector?.('.ref-lock');
      if (lock) lock.textContent = why;
      else el.title = why || hint || '';
    }
    changeCallbacks.forEach((f) => f());
  }
  renderDynamic();
  window.addEventListener('storage', (e) => { if (e.key === STORE) refresh(); }); // a check passed in the lesson page

  // One dialog for reading a module's source and for editing a saved tool.
  let dlg;
  function dialog() {
    if (!dlg) { dlg = document.createElement('dialog'); dlg.className = 'source-dialog'; document.body.append(dlg); }
    return dlg;
  }
  function showSource(mod, source) {
    const d = dialog();
    const canCopy = openCopy && !isLocked('my-module');
    d.innerHTML = `<form method="dialog"><h2>${esc(mod)}.py</h2><pre></pre><p class="ref-hint">${canCopy
      ? `Open a copy to change it. Your copy is a module of your own called ${esc(mod)}, and it replaces this one in your programs until you delete it.`
      : 'This is the code your program runs when it imports from this module.'}</p><div class="ref-bar">${canCopy ? '<button class="btn" value="copy">Open a copy to edit</button>' : ''}<button class="btn" value="close">Close</button></div></form>`;
    d.querySelector('pre').textContent = source;
    d.onclose = () => { if (d.returnValue === 'copy') { openCopy(mod, source); toggle(false); } };
    d.returnValue = ''; d.showModal();
  }
  function editTool(i) {
    const all = loadTools(kind), t = all[i];
    if (!t) return;
    const d = dialog();
    d.innerHTML = `<form method="dialog"><h2>Edit tool</h2><label class="ref-field">Name <input name="label"></label><label class="ref-field">Code <textarea name="code" rows="10" spellcheck="false"></textarea></label><p class="ref-hint">This changes what you copy from now on. Code you already pasted into a program does not change: that copy has to be fixed where it is.</p><div class="ref-bar"><button class="btn" value="save">Save</button><button class="btn" value="cancel">Cancel</button></div></form>`;
    const f = d.querySelector('form');
    f.label.value = t.label; f.code.value = t.code;
    f.code.addEventListener('keydown', (e) => { if (e.key === 'Tab') { e.preventDefault(); f.code.setRangeText('    ', f.code.selectionStart, f.code.selectionEnd, 'end'); } });
    d.onclose = () => {
      if (d.returnValue !== 'save') return;
      const label = f.label.value.trim(), code = f.code.value.replace(/\s+$/, '');
      if (!label || !code) return;
      const now = loadTools(kind); now[i] = { label, code: code + '\n' }; saveTools(kind, now);
      renderDynamic(); say(`Saved "${label}".`);
    };
    d.returnValue = ''; d.showModal();
  }

  function toggle(open = panel.hidden) {
    panel.hidden = !open; btn.setAttribute('aria-expanded', String(open));
    if (!open) textarea.focus();
  }
  btn.addEventListener('click', () => toggle());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden && !dlg?.open) toggle(false); });

  return {
    setStudentModules(m) { studentModules = m || {}; renderDynamic(); },
    isLocked,
    onChange(f) { changeCallbacks.push(f); },
  };
}
