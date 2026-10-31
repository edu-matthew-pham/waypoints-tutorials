// Checks the catchment board's model (playground-board/widgets/catchment.js) without a browser.
// Run: node experiments/catchment-check.mjs
import { readFileSync } from 'node:fs';
const src = readFileSync(new URL('../playground-board/widgets/catchment.js', import.meta.url), 'utf8');
let w = null;
new Function('WPB', src)({ widget: (name, def) => { w = def; } });
const m = w.model, bad = [];
const ok = (cond, msg) => { if (!cond) bad.push(msg); };
const slopes = ['forest', 'grass', 'bare'], farms = ['grazed', 'bare'];
for (const s of slopes) for (const f of farms) for (const d of [false, true]) {
  const r = m(s, f, d), tag = `${s}/${f}/${d ? 'dam' : 'no dam'}`;
  for (const [k, v] of Object.entries(r)) ok(Number.isInteger(v) && v >= 0 && v <= 3, `${tag}: ${k} = ${v} is not a level 0–3`);
  ok(r.soil_lost >= 1, `${tag}: a storm always moves a little soil`);
  if (d) { ok(r.dam_soil === r.soil_lost && r.town_soil < r.soil_lost, `${tag}: the dam traps most soil`); ok(r.town_steady === 1, `${tag}: dam evens out supply`); }
  else { ok(r.dam_soil === 0 && r.town_soil === r.soil_lost && r.lake_soil === r.soil_lost, `${tag}: without a dam soil passes the town to the lake`); }
  const nd = m(s, f, false);
  if (d) { ok(r.lake_water < nd.lake_water, `${tag}: a dam sends less water on to the lake`); ok(r.lake_soil <= nd.lake_soil, `${tag}: and no more soil`); }
}
// Bare loses more soil than grass, grass than forest; a bare farm more than a grazed one.
for (const f of farms) { ok(m('bare', f, false).soil_lost >= m('grass', f, false).soil_lost && m('grass', f, false).soil_lost >= m('forest', f, false).soil_lost, `slope order with farm ${f}`); ok(m('bare', f, false).soil_lost > m('forest', f, false).soil_lost, `bare beats forest with farm ${f}`); }
for (const s of slopes) ok(m(s, 'bare', false).soil_lost > m(s, 'grazed', false).soil_lost || m(s, 'grazed', false).soil_lost === 3, `bare farm beats grazed with slope ${s}`);
// The lesson checks: the starting position never meets them; the intended move does.
const start = m('forest', 'grazed', false);
ok(!(start.town_soil >= 2), 'lesson 2: the start already has town_soil >= 2');
ok(m('forest', 'bare', false).town_soil >= 2, 'lesson 2: a bare farm should send town_soil >= 2');
ok(!(start.soil_lost >= 2), 'lesson 4: the start already has soil_lost >= 2');
ok(m('bare', 'grazed', false).soil_lost >= 2 && m('bare', 'grazed', false).lake_soil >= 1, 'lesson 4: a bare slope should erode and deposit at the lake');
if (bad.length) { console.error(bad.join('\n')); process.exit(1); }
console.log('catchment model: all checks pass (' + slopes.length * farms.length * 2 + ' combinations)');
