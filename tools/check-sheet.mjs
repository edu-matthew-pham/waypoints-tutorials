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
if (!bad) console.log(`✓ sheet engine: ${cases.length} cases pass`);
process.exit(bad ? 1 : 0);
