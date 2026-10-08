// Shared snippet palette for the playgrounds: a "Snippets" button that opens collapsible groups of
// buttons. Each button inserts real, editable code at the cursor. One way only: nothing is parsed back.
// In a snippet's code, ‹text› marks a placeholder: the first one is selected after inserting, and the
// markers themselves are removed.
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

export async function mountSnippets({ toolbar, textarea, kind, before = null, url = 'snippets.json' }) {
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
