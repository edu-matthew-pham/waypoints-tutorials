// Checks the science board's atoms engine (playground-science/atoms.js) without a browser: every kind of reaction
// keeps its atoms and changes the total kinetic energy by exactly `release` per reaction, and a higher temperature or
// a catalyst makes a reaction faster. Run: node tools/check-atoms.mjs
import { readFileSync } from 'node:fs';
const window = { SCI: {} }; globalThis.matchMedia = () => ({ matches: false });
new Function('window', readFileSync(new URL('../playground-science/atoms.js', import.meta.url), 'utf8'))(window);
const A = window.SCI.atoms;
let bad = 0;
const fail = (m) => { bad++; console.log('✗ ' + m); };
const box = () => ({ x0: 0, x1: 22, y0: 0, y1: 12 });
const cases = [
  ['H2 + Cl2 -> 2 HCl', [['H2', 12], ['Cl2', 12]], 1.5, -0.5, 1],
  ['H2 + O2 -> H2O2', [['H2', 12], ['O2', 6]], 1.5, 1, 1],
  ['N2O4 -> 2 NO2', [['N2O4', 10]], 2, -0.5, 2],
  ['CH4 + 2 O2 -> CO2 + 2 H2O', [['CH4', 6], ['O2', 12]], 1, 1, 1],
];
for (const [rule, start, ea, release, t] of cases) {
  const sim = new A.Sim(box()); sim.t = t; sim.hold = false; sim.rules = [A.parseRule(rule, ea, release)];
  start.forEach(([f, n]) => sim.add(f, n)); sim.setTemp(t);
  const ke = () => sim.ms.reduce((s, m) => s + sim.ke(m), 0), atoms0 = JSON.stringify(sim.atomTally()), k0 = ke();
  for (let f = 0; f < 900; f++) sim.step();
  if (!sim.wins) fail(`${rule}: no reactions`);
  if (JSON.stringify(sim.atomTally()) !== atoms0) fail(`${rule}: atoms changed`);
  if (Math.abs(ke() - (k0 + release * sim.wins)) > 1e-6) fail(`${rule}: energy ${ke().toFixed(3)}, expected ${(k0 + release * sim.wins).toFixed(3)}`);
  else console.log(`✓ ${rule}: ${sim.wins} reactions, atoms and energy conserved`);
}
// Rates: time for 3/4 of H2 + Cl2 at ea 3, averaged over runs.
const time = (K, cat) => { let sum = 0; for (let r = 0; r < 4; r++) { const sim = new A.Sim(box()); sim.t = K / 300; sim.catalyst = cat; sim.rules = [A.parseRule('H2 + Cl2 -> 2 HCl', 3, 0)]; sim.add('H2', 15); sim.add('Cl2', 15); sim.setTemp(K / 300); let f = 0; while (sim.count('HCl') < 22 && f < 60 * 240) { sim.step(); f++; } sum += f / 60; } return sum / 4; };
const [cold, hot, cat] = [time(300, 1), time(500, 1), time(300, 0.5)];
console.log(`  3/4 reacted: 300 K ${cold.toFixed(1)} s · 500 K ${hot.toFixed(1)} s · 300 K with catalyst ${cat.toFixed(1)} s`);
if (!(hot < cold && cat < cold)) fail('a higher temperature and a catalyst should both be faster');
for (const bad of ['H2 + Cl2 -> HCl', 'Xx2 -> X']) { try { A.parseRule(bad, 1, 0); fail(`accepted "${bad}"`); } catch { /* refused, as it should be */ } }
console.log(bad ? `${bad} problem(s)` : 'Atoms engine OK.');
process.exit(bad ? 1 : 0);
