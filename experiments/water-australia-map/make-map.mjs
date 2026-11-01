// Draws the Australia water map for geography/water-australia-7 from Natural Earth (public domain,
// naturalearthdata.com; GeoJSON from github.com/nvkelso/natural-earth-vector). Run:
//   node experiments/water-australia-map/make-map.mjs <folder with the three .geojson files>
// Files: ne_50m_admin_1_states_provinces, ne_10m_rivers_lake_centerlines (Natural Earth), plus the two basin outlines:
//   mdb-boundary.geojson: Murray-Darling Basin boundary as defined in s 4(1) of the Water Act 2007 (MDBA data library,
//     library-mdba.opendata.arcgis.com, item ba731d77d80947fbbcbf7524364372ff; CC BY 4.0 per its data.gov.au listing).
//   gab-boundary.geojson: Revised Great Artesian Basin Jurassic-Cretaceous boundary (Geoscience Australia, Great Artesian
//     Basin Water Resource Assessment, data.gov.au dataset 241d11ac-649d-46a5-8cae-3dddb53a8010; CC BY 3.0 AU),
//     converted from its Albers shapefile to longitude and latitude with proj4. Only the feature named Great Artesian
//     Basin is drawn (the file also holds the separate Laura Basin).
// Writes map.svg (the reading map) and outline.svg (a blank outline with state borders) beside this script.
// What is drawn: coastline and state borders, some major rivers, the two basins (shaded, simplified), capital cities.
// Natural Earth's own basin regions are label areas, not extents, so the official outlines are used instead.
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
const basin = (file, pick) => load(file).features.filter(pick).map((f) => polys(f.geometry).map((p) => p.map((r) => ring(r, 0.7, true)).join('')).join('')).join('');
const mdbD = basin('mdb-boundary', () => true);
const gabD = basin('gab-boundary', (f) => /great artesian/i.test(f.properties.basin || ''));

// Capital cities (settled coordinates, rounded).
const cities = [['Perth', 115.86, -31.95], ['Adelaide', 138.6, -34.93], ['Melbourne', 144.96, -37.81], ['Sydney', 151.21, -33.87], ['Brisbane', 153.03, -27.47], ['Darwin', 130.84, -12.46], ['Hobart', 147.33, -42.88], ['Canberra', 149.13, -35.28]];
const stateLab = [['WA', 121, -26], ['NT', 133.5, -20], ['SA', 134.5, -30], ['Qld', 145, -21.5], ['NSW', 148.6, -31.4], ['Vic', 143.5, -37], ['Tas', 146.5, -42]];

function svg(kind) {
  const read = kind === 'map', HH = H + (read ? 52 : 40);
  const o = [];
  o.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${HH}" role="img" aria-label="${read ? "Map of Australia: states, some major rivers, capital cities, the Murray–Darling Basin shaded blue across inland south-east Australia, and the Great Artesian Basin dotted under much of inland Queensland and parts of New South Wales, South Australia and the Northern Territory." : 'Blank outline of Australia with state borders.'}" style="width:100%;max-width:720px;height:auto;background:#f4f8fa;border-radius:12px">`);
  o.push(`<path d="${stateD}" fill="#eef1e6" stroke="#6b7a64" stroke-width="1.2" stroke-linejoin="round"/>`);
  if (read) {
    o.push(`<defs><pattern id="wpt-gabdots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#9a6a2a"/></pattern></defs>`);
    o.push(`<path d="${gabD}" fill="url(#wpt-gabdots)" fill-opacity="0.75" stroke="#9a6a2a" stroke-width="1.6" stroke-dasharray="2 3" fill-rule="evenodd"/>`);
    o.push(`<path d="${mdbD}" fill="#187aa4" fill-opacity="0.16" stroke="#0f5a7a" stroke-width="1.6" fill-rule="evenodd"/>`);
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
    let [x, y] = P([137.2, -22.6]); t(x, y, 'Great Artesian Basin', 13, ' font-style="italic" font-weight="600" fill="#6e4a18"'); t(x, y + 15, '(underground)', 11, ' font-style="italic" fill="#6e4a18"');
    [x, y] = P([139.4, -32.6]); t(x, y, 'Murray–Darling Basin', 13, ' font-style="italic" font-weight="600" fill="#0f5a7a" text-anchor="end"');
    // Legend
    const ly = H + 12;
    o.push(`<path d="M10 ${ly} l26 0" stroke="#187aa4" stroke-width="2.4"/>`); t(42, ly + 4, 'Major river', 12);
    o.push(`<rect x="118" y="${ly - 7}" width="22" height="14" fill="#187aa4" fill-opacity="0.16" stroke="#0f5a7a"/>`); t(146, ly + 4, 'Murray–Darling Basin', 12);
    o.push(`<rect x="282" y="${ly - 7}" width="22" height="14" fill="url(#wpt-gabdots)" stroke="#9a6a2a" stroke-dasharray="2 3"/>`); t(310, ly + 4, 'Great Artesian Basin', 12);
    o.push(`<circle cx="452" cy="${ly}" r="3.5" fill="#162c38"/>`); t(462, ly + 4, 'Capital city', 12);
    t(10, ly + 22, 'Sources: Natural Earth (public domain); Murray–Darling Basin: MDBA (CC BY 4.0); Great Artesian Basin:', 10);
    t(10, ly + 35, 'Geoscience Australia (CC BY 3.0 AU). All simplified. Only some major rivers shown; some flow only part of the year.', 10);
  } else {
    t(10, H + 26, 'Outline: Natural Earth (public domain), simplified.', 11);
  }
  o.push('</svg>');
  return o.join('');
}
writeFileSync(join(here, 'map.svg'), svg('map'));
writeFileSync(join(here, 'outline.svg'), svg('outline'));
console.log('map.svg', svg('map').length, 'bytes; outline.svg', svg('outline').length, 'bytes; rivers', [...new Set(rivers.map((f) => f.properties.name))].join(', '));
