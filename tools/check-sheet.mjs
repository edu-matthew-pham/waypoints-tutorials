// Checks the sheet widget's formula engine without a browser. Run: node tools/check-sheet.mjs
//   Formulas, references and ranges, the functions (SUM, AVERAGE, MIN, MAX, COUNT, COUNTIF, IF, ROUND, ABS),
//   operators and precedence, text, and the error values (#DIV/0!, #NAME?, #REF!, #VALUE!, #CIRC!, #ERROR!).
import { readFileSync } from 'node:fs';
const B = { widget() {}, say() {}, post() {}, save() {}, saved() { return null; }, el() { return null; } };
new Function('WPB', readFileSync(new URL('../playground-board/widgets/sheet.js', import.meta.url), 'utf8') + '\n;')(B);
const calc = B.sheetCalc;
let bad = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const show = (r) => (r.err ? r.err : r.v);

// [what, cells, cell to read, expected value or error code]
const sheet = { A1: '4', A2: '6', A3: '10', A4: 'apple', A5: '', B1: '=A1+A2', B2: '=A1*A2', B3: '=A3/A1' };
const dims = { c: 4, r: 6 };
const cases = [
  ['add two cells', sheet, 'B1', 10],
  ['multiply two cells', sheet, 'B2', 24],
  ['divide', sheet, 'B3', 2.5],
  ['a formula keeps up when a cell changes', { ...sheet, A1: '8' }, 'B1', 14],
  ['SUM of a range', { ...sheet, C1: '=SUM(A1:A3)' }, 'C1', 20],
  ['SUM ignores text and empty cells in a range', { ...sheet, C1: '=SUM(A1:A5)' }, 'C1', 20],
  ['AVERAGE', { ...sheet, C1: '=AVERAGE(A1:A3)' }, 'C1', 20 / 3],
  ['MIN and MAX', { ...sheet, C1: '=MAX(A1:A3)-MIN(A1:A3)' }, 'C1', 6],
  ['COUNT counts numbers only', { ...sheet, C1: '=COUNT(A1:A5)' }, 'C1', 3],
  ['COUNTIF with a comparison', { ...sheet, C1: '=COUNTIF(A1:A3,">5")' }, 'C1', 2],
  ['COUNTIF with text', { ...sheet, C1: '=COUNTIF(A1:A5,"apple")' }, 'C1', 1],
  ['IF picks the true branch', { ...sheet, C1: '=IF(A1>3,"tall","short")' }, 'C1', 'tall'],
  ['IF picks the false branch', { ...sheet, C1: '=IF(A1>5,"tall","short")' }, 'C1', 'short'],
  ['ROUND', { ...sheet, C1: '=ROUND(A3/3,1)' }, 'C1', 3.3],
  ['ABS', { ...sheet, C1: '=ABS(A1-A2)' }, 'C1', 2],
  ['precedence: * before +', { ...sheet, C1: '=2+3*4' }, 'C1', 14],
  ['brackets', { ...sheet, C1: '=(2+3)*4' }, 'C1', 20],
  ['power', { ...sheet, C1: '=2^3' }, 'C1', 8],
  ['unary minus', { ...sheet, C1: '=-A1+10' }, 'C1', 6],
  ['percent', { ...sheet, C1: '=50%*A1' }, 'C1', 2],
  ['join text', { ...sheet, C1: '=A4&" pie"' }, 'C1', 'apple pie'],
  ['lower case cell names', { ...sheet, C1: '=a1+a2' }, 'C1', 10],
  ['absolute references work like plain ones', { ...sheet, C1: '=$A$1+A$2' }, 'C1', 10],
  ['an empty cell counts as 0 in sums', { ...sheet, C1: '=A5+1' }, 'C1', 1],
  ['text that is a number counts as one', { ...sheet, A4: ' 7 ', C1: '=A4+1' }, 'C1', 8],
  ['divide by zero', { ...sheet, C1: '=A1/0' }, 'C1', '#DIV/0!'],
  ['divide by an empty cell', { ...sheet, C1: '=A1/A5' }, 'C1', '#DIV/0!'],
  ['AVERAGE of nothing', { ...sheet, C1: '=AVERAGE(A5:A5)' }, 'C1', '#DIV/0!'],
  ['unknown function', { ...sheet, C1: '=SUMM(A1:A3)' }, 'C1', '#NAME?'],
  ['unknown word', { ...sheet, C1: '=A1+total' }, 'C1', '#NAME?'],
  ['a column that is off the sheet', { ...sheet, C1: '=Z99+1' }, 'C1', '#REF!'],
  ['a cell that is off the grid', { ...sheet, C1: '=A9+1' }, 'C1', '#REF!'],
  ['arithmetic on text', { ...sheet, C1: '=A4+1' }, 'C1', '#VALUE!'],
  ['a range used as a single value', { ...sheet, C1: '=A1:A3+1' }, 'C1', '#VALUE!'],
  ['a cell that refers to itself', { ...sheet, C1: '=C1+1' }, 'C1', '#CIRC!'],
  ['two cells that refer to each other', { ...sheet, C1: '=C2', C2: '=C1' }, 'C2', '#CIRC!'],
  ['an error spreads to what uses it', { ...sheet, C1: '=A1/0', C2: '=C1+1' }, 'C2', '#DIV/0!'],
  ['missing bracket', { ...sheet, C1: '=SUM(A1:A3' }, 'C1', '#ERROR!'],
  ['missing operand', { ...sheet, C1: '=A1+' }, 'C1', '#ERROR!'],
  ['a formula can use another formula', { ...sheet, C1: '=B1*2' }, 'C1', 20],
  ['text that only looks like a formula', { ...sheet, C1: 'B1+B2' }, 'C1', 'B1+B2'],
];
for (const [what, cells, ref, want] of cases) {
  let got;
  try { got = show(calc(cells, dims)[ref]); } catch (e) { got = 'threw ' + e.message; }
  const ok = typeof want === 'number' ? typeof got === 'number' && Math.abs(got - want) < 1e-9 : got === want;
  if (!ok) fail(`${what}: ${ref} gave ${JSON.stringify(got)}, expected ${JSON.stringify(want)}`);
}

// ---- copy and paste: relative references move, $ keeps them, strings are left alone ----
const shift = B.sheetShift;
const same = (what, got, want) => { if (got !== want) fail(`${what}: got ${JSON.stringify(got)}, expected ${JSON.stringify(want)}`); };
same('shift down a row', shift('=C2-B2', 0, 1), '=C3-B3');
same('shift right a column', shift('=B2*2', 1, 0), '=C2*2');
same('shift both', shift('=SUM(B2:B5)', 1, 2), '=SUM(C4:C7)');
same('$ keeps a column', shift('=B2*$F2', 1, 1), '=C3*$F3');
same('$ keeps a row', shift('=B2*F$2', 1, 1), '=C3*G$2');
same('$ keeps both', shift('=B2*$F$2', 3, 3), '=E5*$F$2');
same('a typed number is not changed', shift('42', 1, 1), '42');
same('text in quotes is not changed', shift('=IF(B2>3,"A1","B2")', 0, 1), '=IF(B3>3,"A1","B2")');
same('a function name is not a cell', shift('=LOG10(B2)', 0, 1), '=LOG10(B3)');
same('pushed off the top gives #REF!', shift('=B1', 0, -1), '=A0');
same('pushed off the left gives #REF!', shift('=B2', -2, 0), '=A0');
if (show(calc({ C1: '=A0+1' }, { c: 3, r: 3 }).C1) !== '#REF!') fail('A0 should show #REF!');

// ---- sort: whole rows move, formulas follow, empties go last ----
const table = { c1: 0, r1: 1, c2: 2, r2: 5 };
const data = { A1: 'Plant', B1: 'Day 1', C1: 'Growth', A2: 'Bean', B2: '5', C2: '=B2*2', A3: 'Pea', B3: '2', C3: '=B3*2', A4: 'Corn', B4: '9', C4: '=B4*2', A5: 'Oat', C5: '=B5*2' };
const dimsT = { c: 3, r: 6 };
const asc = B.sheetSort(data, dimsT, table, 1, false);
same('sort low to high: first row', asc.B2, '2');
same('sort low to high: names move with their rows', asc.A2 + asc.A3 + asc.A4, 'PeaBeanCorn');
same('sort: a formula follows its row', asc.C2, '=B2*2');
same('sort: an empty cell goes last', asc.A5, 'Oat');
same('sort: the header row stays', asc.A1, 'Plant');
const desc = B.sheetSort(data, dimsT, table, 1, true);
same('sort high to low', desc.B2 + desc.B3 + desc.B4, '952');
const byName = B.sheetSort(data, dimsT, table, 0, false);
same('sort text A to Z', byName.A2 + byName.A3 + byName.A4 + byName.A5, 'BeanCornOatPea');
const byResult = B.sheetSort(data, dimsT, table, 2, true);
same('sort by a formula\'s result', byResult.A2, 'Corn');
const o1 = B.sheetOrder(calc(asc, dimsT), table, 1), o2 = B.sheetOrder(calc(data, dimsT), table, 1), o3 = B.sheetOrder(calc(desc, dimsT), table, 1);
same('order: ascending after sort', o1.up && !o1.down, true);
same('order: unsorted is neither', !o2.up && !o2.down, true);
same('order: descending after sort', o3.down && !o3.up, true);

// ---- filter ----
const P = B.sheetPasses;
same('filter is (number)', P(20, { op: 'is', val: '20' }), true);
same('filter is (text, any case)', P('Mammal', { op: 'is', val: 'mammal' }), true);
same('filter is: a number never equals text', P(5, { op: 'is', val: 'five' }), false);
same('filter is not', P('Bird', { op: 'not', val: 'Mammal' }), true);
same('filter more than', P(8, { op: 'more', val: '5' }), true);
same('filter more than does not include equal', P(5, { op: 'more', val: '5' }), false);
same('filter less than', P(3, { op: 'less', val: '5' }), true);
same('filter more than ignores text', P('x', { op: 'more', val: '5' }), false);
same('filter: an empty cell passes only "is not"', P(null, { op: 'not', val: '5' }) && !P(null, { op: 'is', val: '5' }), true);

// ---- chart ----
const cv = calc({ A2: 'Mon', A3: 'Tue', A4: 'Wed', B2: '4', B3: '6', B4: '=B3+4', C2: '1', C3: '2', C4: '3', A6: 'x' }, { c: 3, r: 6 });
const ch = B.sheetChart;
same('chart: needs a type', ch(cv, { type: '', values: 'B2:B4' }).ok, false);
same('chart: needs values', ch(cv, { type: 'bar', values: '' }).ok, false);
same('chart: counts and sums its values', (() => { const d = ch(cv, { type: 'bar', labels: 'A2:A4', values: 'B2:B4' }); return d.ok && d.n === 3 && d.sum === 20; })(), true);
same('chart: labels must match the values', ch(cv, { type: 'bar', labels: 'A2:A3', values: 'B2:B4' }).ok, false);
same('chart: text cannot be plotted', ch(cv, { type: 'bar', values: 'A2:A4' }).ok, false);
same('chart: labels are optional for a bar chart', ch(cv, { type: 'bar', values: 'B2:B4' }).labels.join(), '1,2,3');
same('chart: scatter needs numbers for x', ch(cv, { type: 'scatter', labels: 'A2:A4', values: 'B2:B4' }).ok, false);
same('chart: scatter with numbers', ch(cv, { type: 'scatter', labels: 'C2:C4', values: 'B2:B4' }).xs.join(), '1,2,3');
same('chart: a pie of nothing above zero', ch(calc({ B2: '0', B3: '0' }, { c: 2, r: 3 }), { type: 'pie', values: 'B2:B3' }).ok, false);
same('chart: a bad range', ch(cv, { type: 'bar', values: 'B2-B4' }).ok, false);
if (!bad) console.log(`✓ sheet engine: ${cases.length} formula cases and the copy, sort, filter and chart checks pass`);
process.exit(bad ? 1 : 0);
