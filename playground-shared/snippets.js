// Shared snippet palette for the playgrounds: a "Snippets" button that opens collapsible groups of
// buttons. Each button inserts real, editable code at the cursor. One way only: nothing is parsed back.
// In a snippet's code, ‹text› marks a placeholder: the first one is selected after inserting, and the
// markers themselves are removed.
import { scanModule, callText, ensureImport } from './modules-scan.mjs';

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

export async function mountSnippets({ toolbar, textarea, kind, before = null, url = 'snippets.json', modules = {} }) {
  let data;
  try { data = await (await fetch(url)).json(); } catch { return; }
  // Snippets that some lesson step unlocks start locked; the rest are always available.
  let claims = {};
  try { claims = await (await fetch('unlocks.json')).json(); } catch { /* no lessons claim any */ }
  // The create page's preview passes this lesson's own locks: ?locks=id~Step title|id~Step title
  const lp = new URLSearchParams(location.search).get('locks');
  if (lp) for (const pair of lp.split('|')) { const [id, step] = pair.split('~'); if (id) claims[id] = { lesson: 'this lesson', step: step || 'a step' }; }
  // Teacher override: ?unlock=all shows everything (remembered in this browser); ?unlock=off resets it.
  const ov = new URLSearchParams(location.search).get('unlock');
  if (ov) { const p = loadProgress(); p.all = ov === 'all'; try { localStorage.setItem(STORE, JSON.stringify(p)); } catch { /* ignore */ } }
  const isLocked = (id) => {
    if (!claims[id]) return false;
    const p = loadProgress();
    return !(p.all || (p.unlocked || {})[`${kind}:${id}`]);
  };
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'btn snippets-toggle'; btn.id = 'snippets-toggle';
  btn.textContent = 'Snippets'; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'snippets-panel');
  if (before) toolbar.insertBefore(btn, before); else toolbar.prepend(btn);

  const panel = document.createElement('div');
  panel.id = 'snippets-panel'; panel.className = 'snippets-panel'; panel.hidden = true;
  panel.setAttribute('role', 'region'); panel.setAttribute('aria-label', 'Snippets');
  const buttons = [];
  for (const group of data.groups) {
    const det = document.createElement('details');
    const sum = document.createElement('summary'); sum.textContent = group.name; det.append(sum);
    const row = document.createElement('div'); row.className = 'snippet-row';
    for (const item of group.items) {
      const id = idOf(item.label);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'snippet'; b.textContent = item.label; b.dataset.id = id;
      b.addEventListener('click', () => { if (isLocked(id)) return; insert(item.code); toggle(false); });
      buttons.push([b, id, item]);
      row.append(b);
    }
    det.append(row); panel.append(det);
  }
  // One group per module the lesson offers: a button per function, plus "Show how it works".
  for (const [mod, source] of Object.entries(modules)) {
    const fns = scanModule(source);
    if (!fns.length) continue;
    const det = document.createElement('details');
    const sum = document.createElement('summary'); sum.textContent = `Module: ${mod}`; det.append(sum);
    const row = document.createElement('div'); row.className = 'snippet-row';
    for (const fn of fns) {
      const id = `${mod}.${fn.name}`;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'snippet'; b.textContent = fn.name; b.dataset.id = id;
      b.addEventListener('click', () => {
        if (isLocked(id)) return;
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
      buttons.push([b, id, { hint: fn.doc }]);
      row.append(b);
    }
    const how = document.createElement('button');
    how.type = 'button'; how.className = 'snippet how'; how.textContent = 'Show how it works';
    how.addEventListener('click', () => showSource(mod, source));
    row.append(how);
    det.append(row); panel.append(det);
  }
  toolbar.after(panel);

  function refresh() {
    for (const [b, id, item] of buttons) {
      const locked = isLocked(id);
      b.classList.toggle('locked', locked);
      b.setAttribute('aria-disabled', String(locked));
      b.title = locked ? `Unlocks in ${claims[id].lesson}: ${claims[id].step}` : item.hint || '';
    }
  }
  refresh();
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
}
