// Draws the Australia water map for geography/water-australia-7 from Natural Earth (public domain,
// naturalearthdata.com; GeoJSON from github.com/nvkelso/natural-earth-vector). Run:
//   node experiments/water-australia-map/make-map.mjs <folder with the three .geojson files>
// Files: ne_50m_admin_1_states_provinces, ne_10m_rivers_lake_centerlines.
// Writes map.svg (the reading map) and outline.svg (a blank outline with state borders) beside this script.
// What is drawn: coastline and state borders, some major rivers, capital cities. The two basins are labels only:
// Natural Earth's regions for them are label areas, not their extents (its Murray-Darling region reaches Brisbane and
// Adelaide, which are outside the real basin), so no outline is drawn. Students shade them from the official maps
// (Murray-Darling Basin Authority; Geoscience Australia), linked in the lesson.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = process.argv[2];
if (!dir) throw new Error('Give the folder with the Natural Earth GeoJSON files.');
const here = dirname(fileURLToPath(import.meta.url));
const load = (n) => JSON.parse(readFileSync(join(dir, n + '.geojson'), 'utf8'));

// Projection: equirectangular, x scaled by cos(25°S), fitted to a 600-wide box.
const LON0 = 112.5, LON1 = 154, LAT0 = -9.5, LAT1 = -44, K = Math.cos(25 * Math.PI / 180);
const W = 600, S = W / ((LON1 - LON0) * K), H = Math.round((LAT0 - LAT1) * S);
const P = ([lon, lat]) => [(lon - LON0) * K * S, (LAT0 - lat) * S];
const r1 = (v) => Math.round(v * 10) / 10;

function simplify(pts, tol) {   // Douglas-Peucker on projected points
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let best = -1, bi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1;
    for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / L; if (d > best) { best = d; bi = i; } }
    if (best > tol) { keep[bi] = 1; st.push([a, bi], [bi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
const ring = (coords, tol, close) => { const q = coords.map(P); const h = Math.floor(q.length / 2); const p = close && q.length > 6 ? simplify(q.slice(0, h + 1), tol).concat(simplify(q.slice(h), tol).slice(1)) : simplify(q, tol); if (p.length < (close ? 4 : 2)) return ''; return 'M' + p.map(([x, y]) => r1(x) + ' ' + r1(y)).join('L') + (close ? 'Z' : ''); };
const polys = (g) => g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
const lines = (g) => g.type === 'LineString' ? [g.coordinates] : g.coordinates;

const states = load('ne_50m_admin_1_states_provinces').features.filter((f) => f.properties.admin === 'Australia' && f.properties.name !== 'Jervis Bay Territory');
const stateD = states.map((f) => polys(f.geometry).map((p) => ring(p[0], 0.6, true)).join('')).join('');
// The outline: the same rings (coast and borders overlap, so draw states filled and stroked thin).
const rivNames = ['Murray', 'Darling', 'Lachlan', 'Macquarie', 'Barwon', 'Ord', 'Fitzroy', 'Daly', 'Victoria', 'Mitchell', 'Burdekin', 'Roper'];
const rivers = load('ne_10m_rivers_lake_centerlines').features.filter((f) => f.geometry && rivNames.includes(f.properties.name) && f.properties.featurecla !== 'Lake Centerline')
  .filter((f) => JSON.stringify(f.geometry.coordinates).match(/1[1-5]\d\.\d+,-\d+/));
const rivD = rivers.map((f) => lines(f.geometry).map((l) => ring(l, 0.5, false)).join('')).join('');

// Capital cities (settled coordinates, rounded).
const cities = [['Perth', 115.86, -31.95], ['Adelaide', 138.6, -34.93], ['Melbourne', 144.96, -37.81], ['Sydney', 151.21, -33.87], ['Brisbane', 153.03, -27.47], ['Darwin', 130.84, -12.46], ['Hobart', 147.33, -42.88], ['Canberra', 149.13, -35.28]];
const stateLab = [['WA', 121, -26], ['NT', 133.5, -20], ['SA', 134.5, -30], ['Qld', 145, -21.5], ['NSW', 148.6, -31.4], ['Vic', 143.5, -37], ['Tas', 146.5, -42]];

function svg(kind) {
  const read = kind === 'map', HH = H + 46;
  const o = [];
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${HH}" role="img" aria-label="${read ? "Map of Australia: states, some major rivers and capital cities. The Murray–Darling Basin and Great Artesian Basin are labelled, not outlined." : 'Blank outline of Australia with state borders.'}" style="width:100%;max-width:720px;height:auto;background:#f4f8fa;border-radius:12px">`);
  o.push(`<path d="${stateD}" fill="#eef1e6" stroke="#6b7a64" stroke-width="1.2" stroke-linejoin="round"/>`);
  if (read) {
        o.push(`<path d="${rivD}" fill="none" stroke="#187aa4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`);
  }
  const t = (x, y, s, size, extra = '') => o.push(`<text x="${r1(x)}" y="${r1(y)}" font-family="sans-serif" font-size="${size}" fill="#162c38"${extra}>${s}</text>`);
  stateLab.forEach(([s, lon, lat]) => { const [x, y] = P([lon, lat]); t(x, y, s, 15, ' font-weight="600" fill-opacity="0.65"'); });
  // North arrow and an approximate scale bar (500 km along 25°S), on both maps: students copy the conventions.
  o.push(`<path d="M${W - 30} 52 l9 22 -9 -6 -9 6Z" fill="#162c38"/>`); t(W - 35, 44, 'N', 14, ' font-weight="700"');
  const km500 = 500 / (111.32 * K) * K * S;
  o.push(`<path d="M20 ${H - 14} l${r1(km500)} 0 M20 ${H - 19} l0 10 M${r1(20 + km500)} ${H - 19} l0 10" stroke="#162c38" stroke-width="2"/>`);
  t(20, H - 24, '500 km (about)', 11);
  if (read) {
    cities.forEach(([n, lon, lat]) => { const [x, y] = P([lon, lat]); o.push(`<circle cx="${r1(x)}" cy="${r1(y)}" r="3.5" fill="#162c38"/>`); const left = ['Sydney', 'Brisbane', 'Canberra', 'Melbourne', 'Hobart', 'Adelaide'].includes(n); t(left ? x - 6 : x + 6, y + 4, n, 12, left ? ' text-anchor="end"' : ''); });
    let [x, y] = P([138.6, -24.4]); t(x, y, 'Great Artesian Basin', 13, ' font-style="italic" font-weight="600"'); t(x, y + 15, '(underground)', 11, ' font-style="italic"');
    [x, y] = P([141.2, -29.0]); t(x, y, 'Murray–Darling Basin', 13, ' font-style="italic" font-weight="600" fill="#0f5a7a"'); t(x, y + 15, '(the rivers and the land they drain)', 11, ' font-style="italic" fill="#0f5a7a"');
    // Legend
    const ly = H + 12;
    o.push(`<path d="M10 ${ly} l26 0" stroke="#187aa4" stroke-width="2.4"/>`); t(42, ly + 4, 'Major river', 12);
    t(130, ly + 4, 'Basin name', 12, ' font-style="italic" font-weight="600"'); t(204, ly + 4, '= label only, no outline', 12);
    o.push(`<circle cx="380" cy="${ly}" r="3.5" fill="#162c38"/>`); t(390, ly + 4, 'Capital city', 12);
    t(10, ly + 26, 'Map: Natural Earth (public domain), simplified. Only some major rivers shown. Some flow only part of the year.', 11);
  } else {
    t(10, H + 26, 'Outline: Natural Earth (public domain), simplified.', 11);
  }
  o.push('</svg>');
  return o.join('');
}
writeFileSync(join(here, 'map.svg'), svg('map'));
writeFileSync(join(here, 'outline.svg'), svg('outline'));
console.log('map.svg', svg('map').length, 'bytes; outline.svg', svg('outline').length, 'bytes; rivers', [...new Set(rivers.map((f) => f.properties.name))].join(', '));
