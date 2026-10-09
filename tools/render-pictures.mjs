// Pictures for the printable cheat sheets: run each turtle snippet's `example` in the playground
// and save what it draws, cropped, as dist/_pictures/<snippet id>.png
// (shared by the Reference page, the playground's Reference drawer and the cheat sheets).
// Part of `npm run render` (after build-playground). Cached: a picture is redrawn only when its
// example or the playground changed (pictures.json keeps the hashes). --force redraws all.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';

const OUT = resolve(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist');
const FORCE = process.argv.includes('--force');
const DIR = join(OUT, '_pictures');
mkdirSync(DIR, { recursive: true });

// Same slug rule as snippet ids everywhere else (lesson-core snippetId).
const { snippetId } = await import('./lesson-core.mjs');
const strip = (c) => c.replace(/[‹›]/g, '');

const h = createHash('sha1');
const walk = (d) => { for (const f of readdirSync(d).sort()) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else h.update(p).update(readFileSync(p)); } };
walk('playground'); h.update(readFileSync(new URL(import.meta.url))).update('v2');
const BASE = h.digest('hex');

const data = JSON.parse(readFileSync('snippets/turtle.json', 'utf8'));
const jobs = data.groups.flatMap((g) => g.items.filter((i) => i.example).map((i) => ({ id: snippetId(i.label), code: `from turtle import *\n\n${strip(i.example)}` })));
const manifestPath = join(DIR, 'pictures.json');
const old = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
const hashOf = (j) => createHash('sha1').update(BASE).update(j.code).digest('hex').slice(0, 16);
const todo = jobs.filter((j) => FORCE || old[j.id]?.hash !== hashOf(j) || !existsSync(join(DIR, `${j.id}.png`)));

const manifest = {};
for (const j of jobs) if (!todo.includes(j)) manifest[j.id] = old[j.id];
if (todo.length) {
  const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm' };
  const server = createServer((req, res) => {
    const p = join(OUT, decodeURIComponent(req.url.split('?')[0]));
    const f = existsSync(p) && statSync(p).isDirectory() ? join(p, 'index.html') : p;
    if (!existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': TYPES[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
  }).listen(0);
  const port = server.address().port;
  let executablePath = process.env.CHROMIUM_PATH || (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  const browser = await chromium.launch({ headless: true, executablePath, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 900, height: 700 }, deviceScaleFactor: 2 });
  for (const j of todo) {
    await page.goto(`http://localhost:${port}/_playground/?view=output&speed=10&autorun=1&shape=classic&code=${encodeURIComponent(j.code)}`);
    await page.waitForFunction(() => ['done', 'error', 'stopped'].includes(window.__playground?.status), null, { timeout: 20000 });
    const st = await page.evaluate(() => window.__playground);
    if (st.status === 'error') throw new Error(`${j.id}: the example failed: ${st.error}`);
    // Crop to what was drawn (anything unlike the corner pixel), with a margin.
    const png = await page.evaluate(() => {
      const c = document.getElementById('canvas'), x = c.getContext('2d');
      const { width: w, height: hh } = c, px = x.getImageData(0, 0, w, hh).data;
      const bg = px.slice(0, 4);
      let x0 = w, y0 = hh, x1 = 0, y1 = 0;
      for (let y = 0; y < hh; y++) for (let i = 0; i < w; i++) {
        const k = (y * w + i) * 4;
        const r = px[k], g = px[k + 1], b = px[k + 2];
        if (Math.abs(r - bg[0]) + Math.abs(g - bg[1]) + Math.abs(b - bg[2]) <= 30) continue;
        if (Math.max(r, g, b) - Math.min(r, g, b) < 12 && r > 150 && r < 240) continue; // the grey axes
        if (i < x0) x0 = i; if (i > x1) x1 = i; if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
      if (x1 < x0) return null;
      // Always include the start (the centre), so the picture shows where the turtle began.
      const cx = Math.round(w / 2), cy = Math.round(hh / 2);
      x0 = Math.min(x0, cx); x1 = Math.max(x1, cx); y0 = Math.min(y0, cy); y1 = Math.max(y1, cy);
      const m = Math.round(Math.min(w, hh) * 0.04);
      x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(w - 1, x1 + m); y1 = Math.min(hh - 1, y1 + m);
      const o = document.createElement('canvas'); o.width = x1 - x0 + 1; o.height = y1 - y0 + 1;
      o.getContext('2d').drawImage(c, x0, y0, o.width, o.height, 0, 0, o.width, o.height);
      return { data: o.toDataURL('image/png'), w: o.width, h: o.height };
    });
    if (!png) { console.log(`- ${j.id}: draws nothing, no picture`); continue; }
    writeFileSync(join(DIR, `${j.id}.png`), Buffer.from(png.data.split(',')[1], 'base64'));
    manifest[j.id] = { hash: hashOf(j), w: png.w, h: png.h };
    console.log(`✓ ${j.id} (${png.w}×${png.h})`);
  }
  await browser.close(); server.close();
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 1) + '\n');
console.log(`Pictures: ${jobs.length} examples, ${todo.length} drawn, ${jobs.length - todo.length} cached.`);
