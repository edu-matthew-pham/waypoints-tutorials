// SQL playground: type a query, press Run, see a table. SQLite runs in this page (sql.js, vendor/): nothing is sent anywhere.
//   ?code=<starting query>   ?id=<key for saving this student's edits, and for reporting runs to the lesson page>
//   ?db=<name>               start from data/<name>.sql (a script of CREATE TABLE and INSERT lines); no db gives an empty database
//   ?zoom=1.6                enlarges the page, for recorded clips
const params = new URLSearchParams(location.search);
const starter = params.get('code') ?? 'SELECT 1 + 1;\n';
const id = params.get('id');
const dbName = params.get('db');
const zoom = Math.min(3, Math.max(1, Number(params.get('zoom')) || 1));
if (zoom > 1) document.documentElement.style.zoom = String(zoom);
const storeKey = id ? `wp-sql-playground:${id}` : null;

const $ = (i) => document.getElementById(i);
const codeEl = $('code'), statusEl = $('status'), resultEl = $('result'), problemEl = $('problem'), schemaEl = $('schema'), runBtn = $('run');
const read = () => { try { return storeKey ? localStorage.getItem(storeKey) : null; } catch { return null; } };
const write = (v) => { try { if (storeKey) (v === null ? localStorage.removeItem(storeKey) : localStorage.setItem(storeKey, v)); } catch { /* storage unavailable */ } };
codeEl.value = read() ?? starter;

// A small, stable surface for tests and tooling.
const state = window.__playground = { status: 'loading', output: '', code: '', error: null, runs: 0, rows: 0, columns: [] };
function report(status) {
  try { if (window.parent !== window && id) window.parent.postMessage({ wp: 'run', kind: 'sql', id, status, output: state.output, code: state.code, rows: state.rows }, location.origin); } catch { /* not embedded */ }
}
function setStatus(status, text) {
  state.status = status;
  statusEl.dataset.state = status;
  statusEl.textContent = text;
}

let SQL = null, db = null, datasetText = '';
const loadScript = (src) => new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => no(new Error('Could not load ' + src)); document.head.append(s); });

async function freshDatabase() {
  if (db) db.close();
  db = new SQL.Database();
  if (datasetText) db.exec(datasetText);
  showSchema();
}

function showSchema() {
  schemaEl.replaceChildren();
  const res = db.exec("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name");
  const names = res.length ? res[0].values.map((r) => r[0]) : [];
  if (!names.length) { schemaEl.textContent = 'No tables yet.'; return; }
  for (const n of names) {
    const cols = db.exec(`PRAGMA table_info("${n.replace(/"/g, '""')}")`)[0].values.map((c) => ({ name: c[1], type: c[2], pk: c[5] }));
    const line = document.createElement('div');
    const b = document.createElement('b'); b.textContent = n;
    line.append(b, document.createTextNode(' ('));
    cols.forEach((c, i) => {
      if (i) line.append(document.createTextNode(', '));
      line.append(document.createTextNode(c.name));
      if (c.type) { const t = document.createElement('span'); t.className = 't'; t.textContent = ' ' + c.type.toLowerCase(); line.append(t); }
      if (c.pk) { const t = document.createElement('span'); t.className = 't'; t.textContent = ' key'; line.append(t); }
    });
    line.append(document.createTextNode(')'));
    schemaEl.append(line);
  }
}

const MAX_ROWS = 200;
function showResult(set, changed) {
  resultEl.replaceChildren();
  state.columns = set ? set.columns : [];
  state.rows = set ? set.values.length : 0;
  if (!set) {
    state.output = '';
    const d = document.createElement('div'); d.className = 'empty';
    d.textContent = changed ? `Done. ${changed} row${changed === 1 ? '' : 's'} changed.` : 'Done. The query ran and gave no rows back.';
    resultEl.append(d);
    return;
  }
  const t = document.createElement('table'); t.className = 'rs';
  const head = document.createElement('tr');
  for (const c of set.columns) { const th = document.createElement('th'); th.textContent = c; head.append(th); }
  const thead = document.createElement('thead'); thead.append(head); t.append(thead);
  const body = document.createElement('tbody');
  set.values.slice(0, MAX_ROWS).forEach((row) => {
    const tr = document.createElement('tr');
    for (const v of row) {
      const td = document.createElement('td');
      if (v === null) { td.className = 'null'; td.textContent = 'NULL'; }
      else { td.textContent = String(v); if (typeof v === 'number') td.className = 'num'; }
      tr.append(td);
    }
    body.append(tr);
  });
  t.append(body); resultEl.append(t);
  const note = document.createElement('div'); note.className = 'note';
  note.textContent = `${set.values.length} row${set.values.length === 1 ? '' : 's'}` + (set.values.length > MAX_ROWS ? `, showing the first ${MAX_ROWS}` : '');
  resultEl.append(note);
  // What the lesson page checks: a header line, then one line per row, values joined with " | ".
  state.output = [set.columns.join(' | '), ...set.values.map((r) => r.map((v) => (v === null ? 'NULL' : String(v))).join(' | '))].join('\n');
}

// Friendly line for the common slips; the engine's own words follow it. Never the answer to the task.
function hint(message, code) {
  let m;
  if ((m = /no such table: (.+)/i.exec(message))) return `There is no table called ${m[1]}. Open "Tables in this database" to see the names.`;
  if ((m = /no such column: (.+)/i.exec(message))) return `There is no column called ${m[1]}. Check the spelling against "Tables in this database". A word in quotes is text, not a column.`;
  if (/unrecognized token: "'/.test(message) || /incomplete input/i.test(message)) return 'Something is not closed: a quote or a bracket is missing its other half.';
  if ((m = /near "([^"]*)": syntax error/i.exec(message))) {
    const w = m[1];
    if (/^(from|where|order|group|limit)$/i.test(w) && /,\s*$/.test(code.slice(0, code.toUpperCase().indexOf(w.toUpperCase())).trim())) return `There is a comma just before ${w}. A comma goes between two things, not after the last one.`;
    return `SQLite got stuck at "${w}". Look at the words just before it: a comma missing between columns, or a word spelled wrong.`;
  }
  if (/syntax error/i.test(message)) return 'The query is not written in a way SQL understands. Check the order of the words and that each part is spelled the way it appears in the lesson.';
  if (/ambiguous column name/i.test(message)) return 'Two tables have a column with that name, so SQL cannot tell which you mean. Put the table name and a dot in front of it.';
  if (/UNIQUE constraint failed|PRIMARY KEY/i.test(message)) return 'A row with that key is already there. Keys are never repeated, so pick one that is not used yet.';
  return '';
}

function showProblem(message, code) {
  const h = hint(message, code);
  problemEl.hidden = false; problemEl.replaceChildren();
  const b = document.createElement('b'); b.textContent = h || 'Something went wrong'; problemEl.append(b);
  const s = document.createElement('small'); s.textContent = 'SQLite says: ' + message.replace(/^Error:\s*/, ''); problemEl.append(s);
  resultEl.replaceChildren();
  state.error = { message, hint: h };
  state.rows = 0; state.output = ''; state.columns = [];
  setStatus('error', 'There is a problem with the query');
}

function run() {
  if (!db) return;
  state.code = codeEl.value; state.error = null; state.runs++;
  problemEl.hidden = true;
  try {
    const sets = db.exec(state.code);
    const changed = db.getRowsModified();
    const writes = /^\s*(insert|update|delete|create|drop|alter)\b/im.test(state.code.replace(/--.*$/gm, ''));
    showResult(sets.length ? sets[sets.length - 1] : null, writes ? changed : 0);
    if (writes) showSchema();
    setStatus('done', 'Ran: ' + (sets.length ? `${state.rows} row${state.rows === 1 ? '' : 's'}` : 'no rows back'));
    report('done');
  } catch (e) {
    showProblem(String(e && e.message || e), state.code);
    report('error');
  }
}

runBtn.addEventListener('click', run);
$('reset').addEventListener('click', async () => { codeEl.value = starter; write(null); problemEl.hidden = true; resultEl.replaceChildren(); if (SQL) await freshDatabase(); setStatus('ready', 'Ready: press Run'); });
codeEl.addEventListener('input', () => write(codeEl.value));
codeEl.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') { e.preventDefault(); codeEl.setRangeText('  ', codeEl.selectionStart, codeEl.selectionEnd, 'end'); write(codeEl.value); }
  else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run(); }
});
// The lesson page can reset the editor to a task's own starter query.
window.addEventListener('message', (e) => {
  const m = e.data;
  if (e.origin === location.origin && m && m.wp === 'set-code' && typeof m.code === 'string') { codeEl.value = m.code; write(m.code); }
});

try {
  await loadScript('vendor/sql-wasm.js');
  SQL = await window.initSqlJs({ locateFile: (f) => 'vendor/' + f });
  if (dbName) {
    const r = await fetch(`data/${encodeURIComponent(dbName)}.sql`, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`No starting data called ${dbName}`);
    datasetText = await r.text();
  }
  await freshDatabase();
  setStatus('ready', 'Ready: press Run');
  if (new URLSearchParams(location.search).get('autorun') === '1') run();
} catch (e) {
  setStatus('error', 'Could not start: ' + (e && e.message || e));
}
