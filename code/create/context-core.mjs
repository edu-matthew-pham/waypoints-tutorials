// Swappable context (26 Oct 2026, roadmap/shared.md › make lessons adaptable, step 2). Pure: shared by the build,
// validate and Create (copied by build-create).
//
// A lesson may hold a ```context block (YAML) beside its steps:
//   data:   { dark: [4, 5.5, 3], label: Dark, threshold: 10 }   numbers, lists of numbers, or words
//   assert: ["avg(sun) > avg(dark)"]                            claims the lesson text makes about the data
// Anywhere in lesson.md, in the files it reads (sheet.yml) and in teacher notes, {{ expression }} is replaced by its
// value: names, name[2] (1-based), + - * / ( ), and sum avg max min count above(list, n) countif(list, ">10") round(x, n) abs.
// So the numbers in the text, the starter cells and the stored answers (a board check's `when:`, a number check's
// `answer:`) all come from one dataset, and swapping the dataset swaps them together.
import YAML from 'yaml';

export const CONTEXT_RE = /^```context[ \t]*\n([\s\S]*?)\n```[ \t]*$\n?/m;

export function contextFrom(text, where = 'lesson') {
  let d;
  try { d = YAML.parse(text) || {}; } catch (e) { throw new Error(`${where}: the context block is not valid YAML (${String(e.message).split('\n')[0]})`); }
  const data = d.data && typeof d.data === 'object' && !Array.isArray(d.data) ? d.data : {};
  for (const [k, v] of Object.entries(data)) {
    if (!/^[A-Za-z_]\w*$/.test(k)) throw new Error(`${where}: context name "${k}" must be letters, digits and _ (not starting with a digit)`);
    const ok = (x) => typeof x === 'number' || typeof x === 'string';
    if (!(ok(v) || (Array.isArray(v) && v.every((x) => typeof x === 'number')))) throw new Error(`${where}: context "${k}" must be a number, a word or a list of numbers`);
  }
  const assert = d.assert == null ? [] : [].concat(d.assert).map(String);
  return { data, assert };
}

const tidy = (x) => Number(Number(x).toPrecision(12));
const FUNCS = {
  sum: (l) => l.reduce((a, b) => a + b, 0),
  avg: (l) => (l.length ? FUNCS.sum(l) / l.length : NaN),
  max: (l) => Math.max(...l), min: (l) => Math.min(...l), count: (l) => l.length,
  countif: (l, rule) => { const m = String(rule).match(/^\s*(>=|<=|<>|>|<|=)?\s*(-?[\d.]+)\s*$/); if (!m) throw new Error(`countif rule "${rule}" must look like ">10"`); const n = Number(m[2]); const op = m[1] || '='; return l.filter((x) => (op === '>' ? x > n : op === '<' ? x < n : op === '>=' ? x >= n : op === '<=' ? x <= n : op === '<>' ? x !== n : x === n)).length; },
  above: (l, n) => l.filter((x) => x > n).length,
  round: (x, n = 0) => tidy(Math.round(x * 10 ** n) / 10 ** n),
  abs: (x) => Math.abs(x),
};

/** Evaluate one expression against context data. Returns a number, a word or a list. Throws a plain Error. */
export function evalExpr(src, data) {
  const toks = [...String(src).matchAll(/\s*(?:(\d+\.?\d*|\.\d+)|([A-Za-z_]\w*)|"([^"]*)"|('[^']*')|(>=|<=|==|!=|<>|[-+*/()[\],<>]))/gy)];
  const used = toks.reduce((n, m) => n + m[0].length, 0);
  if (used !== String(src).trimEnd().length && String(src).slice(used).trim()) throw new Error(`cannot read "${String(src).slice(used).trim().slice(0, 12)}"`);
  const T = toks.map((m) => (m[1] !== undefined ? { n: Number(m[1]) } : m[2] !== undefined ? { id: m[2] } : m[3] !== undefined ? { s: m[3] } : m[4] !== undefined ? { s: m[4].slice(1, -1) } : { op: m[5] }));
  let i = 0;
  const peek = () => T[i], take = () => T[i++];
  const eat = (op) => { if (peek()?.op === op) { i++; return true; } return false; };
  const need = (op) => { if (!eat(op)) throw new Error(`expected "${op}"`); };
  const num = (v) => { if (typeof v !== 'number') throw new Error('a number is needed here'); return v; };
  function primary() {
    const t = take();
    if (!t) throw new Error('the expression ends too soon');
    if (t.n !== undefined) return t.n;
    if (t.s !== undefined) return t.s;
    if (t.op === '(') { const v = cmp(); need(')'); return v; }
    if (t.op === '-') return -num(primary());
    if (t.id) {
      if (peek()?.op === '(') {
        take(); const args = [];
        if (!eat(')')) { do args.push(cmp()); while (eat(',')); need(')'); }
        const f = FUNCS[t.id.toLowerCase()];
        if (!f) throw new Error(`unknown function "${t.id}"`);
        if (t.id.toLowerCase() === 'round') return f(num(args[0]), args[1]);
        if (!Array.isArray(args[0])) { if (['sum', 'avg', 'max', 'min', 'count'].includes(t.id.toLowerCase())) throw new Error(`${t.id}() needs a list`); return f(...args); }
        const r = f(...args); if (typeof r === 'number' && Number.isNaN(r)) throw new Error(`${t.id}() of an empty list`); return r;
      }
      if (!Object.hasOwn(data, t.id)) throw new Error(`"${t.id}" is not in the context data`);
      const v = data[t.id];
      if (peek()?.op === '[') { take(); const k = num(cmp()); need(']'); if (!Array.isArray(v) || !Number.isInteger(k) || k < 1 || k > v.length) throw new Error(`${t.id}[${k}] is outside the list`); return v[k - 1]; }
      return v;
    }
    throw new Error(`unexpected "${t.op}"`);
  }
  const term = () => { let v = primary(); while (peek()?.op === '*' || peek()?.op === '/') { const o = take().op; const r = num(primary()); v = o === '*' ? num(v) * r : num(v) / r; } return v; };
  const sum = () => { let v = term(); while (peek()?.op === '+' || peek()?.op === '-') { const o = take().op; const r = num(term()); v = o === '+' ? num(v) + r : num(v) - r; } return v; };
  function cmp() {
    const a = sum(); const o = peek()?.op;
    if (['>', '<', '>=', '<=', '==', '!=', '<>'].includes(o)) { take(); const b = sum(); return (o === '>' ? a > b : o === '<' ? a < b : o === '>=' ? a >= b : o === '<=' ? a <= b : o === '==' ? a === b : a !== b) ? 1 : 0; }
    return a;
  }
  const v = cmp();
  if (i < T.length) throw new Error(`unexpected "${T[i].op || T[i].id || T[i].n}"`);
  return typeof v === 'number' ? tidy(v) : v;
}

const show = (v) => (Array.isArray(v) ? v.join(', ') : String(v));

/** Replace every {{ expression }} in text. Throws "context: {{expr}}: reason" on a bad one. */
export function expandContext(text, ctx, where = 'lesson') {
  return String(text).replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (_, e) => {
    try { return show(evalExpr(e, ctx.data)); } catch (err) { throw new Error(`${where}: context {{${e}}}: ${err.message}`); }
  });
}

/** The context's claims that do not hold for its data (swap a dataset, then read this). */
export function failedAsserts(ctx, where = 'lesson') {
  const out = [];
  for (const a of ctx.assert) {
    try { if (!evalExpr(a, ctx.data)) out.push(`${where}: context assert "${a}" is false for this data: the lesson text says it is true`); } catch (e) { out.push(`${where}: context assert "${a}": ${e.message}`); }
  }
  return out;
}
