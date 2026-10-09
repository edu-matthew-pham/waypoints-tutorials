// Pictures for the printable cheat sheets: run each turtle snippet's `example` in the playground
// and save what it draws, cropped, as dist/_pictures/<snippet id>.png; render each HTML snippet's
// `example` as a page (as the HTML playground's preview shows it: browser defaults, 320px wide) and
// save it as dist/_pictures/html/<snippet id>.png (HTML ids can repeat turtle ones, such as `comment`).
// Shared by the Reference page, the playground's Reference drawer and the cheat sheets.
// pictures.json: { id: { w, h, hash, div? } }; div is device pixels per printed pixel (default 5.2, turtle).
// Part of `npm run render` (after build-playground). Cached: a picture is redrawn only when its
// example or the playground changed (pictures.json keeps the hashes). --force redraws all.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname, resolve, dirname } from 'node:path';

const OUT = resolve(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist');
const FORCE = process.argv.includes('--force');
const DIR = join(OUT, '_pictures');
mkdirSync(DIR, { recursive: true });

// Same slug rule as snippet ids everywhere else (lesson-core snippetId).
const { snippetId } = await import('./lesson-core.mjs');
const strip = (c) => c.replace(/[‹›]/g, '');

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
let browser = null, server = null, port = 0;
async function open() {
  if (browser) return;
  server = createServer((req, res) => {
    const p = join(OUT, decodeURIComponent(req.url.split('?')[0]));
    const f = existsSync(p) && statSync(p).isDirectory() ? join(p, 'index.html') : p;
    if (!existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': TYPES[extname(f)] || 'application/octet-stream' }); res.end(readFileSync(f));
  }).listen(0);
  port = server.address().port;
  const executablePath = process.env.CHROMIUM_PATH || (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  browser = await chromium.launch({ headless: true, executablePath, args: ['--no-sandbox'] });
}

// One kind of picture: jobs [{ id, code }], drawn by draw(page, job) -> { data, w, h, div? } | null.
async function pictures({ name, dir, base, jobs, viewport, draw }) {
  mkdirSync(dir, { recursive: true });
  const manifestPath = join(dir, 'pictures.json');
  const old = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
  const hashOf = (j) => createHash('sha1').update(base).update(j.code).digest('hex').slice(0, 16);
  const todo = jobs.filter((j) => FORCE || old[j.id]?.hash !== hashOf(j) || !existsSync(join(dir, `${j.id}.png`)));
  const manifest = {};
  for (const j of jobs) if (!todo.includes(j) && old[j.id]) manifest[j.id] = old[j.id];
  if (todo.length) {
    await open();
    const page = await browser.newPage({ viewport, deviceScaleFactor: 2 });
    for (const j of todo) {
      const png = await draw(page, j);
      if (!png) { console.log(`- ${name} ${j.id}: draws nothing, no picture`); continue; }
      mkdirSync(dirname(join(dir, `${j.id}.png`)), { recursive: true }); // expected pictures sit in a folder per lesson
      writeFileSync(join(dir, `${j.id}.png`), Buffer.from(png.data.split(',')[1], 'base64'));
      manifest[j.id] = { hash: hashOf(j), w: png.w, h: png.h, ...(png.div ? { div: png.div } : {}) };
      console.log(`✓ ${name} ${j.id} (${png.w}×${png.h})`);
    }
    await page.close();
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 1) + '\n');
  console.log(`Pictures (${name}): ${jobs.length} examples, ${todo.length} drawn, ${jobs.length - todo.length} cached.`);
}

// HTML pages are drawn as the playground's preview shows them: pictures (src="trophy.svg") come from its media folder.
const withMedia = (code) => {
  const base = `<base href="http://localhost:${port}/_playground-html/media/">`;
  // Always standards mode, as in the playground preview (a page with no <!DOCTYPE> would otherwise render in quirks mode).
  const dt = code.match(/^\s*<!doctype[^>]*>/i);
  return dt ? dt[0] + base + code.slice(dt[0].length) : '<!DOCTYPE html>' + base + code;
};
const examples = (file, wrap) => JSON.parse(readFileSync(file, 'utf8')).groups.flatMap((g) => g.items.filter((i) => i.example).map((i) => ({ id: snippetId(i.label), code: wrap(strip(i.example)) })));
const hashDir = (...parts) => {
  const h = createHash('sha1');
  const walk = (d) => { for (const f of readdirSync(d).sort()) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else h.update(p).update(readFileSync(p)); } };
  for (const p of parts) if (typeof p === 'string' && existsSync(p) && statSync(p).isDirectory()) walk(p); else h.update(String(p));
  return h.digest('hex');
};

// ---- turtle: run the example in the playground, crop to what was drawn.
await pictures({
  name: 'turtle', dir: DIR, viewport: { width: 900, height: 700 },
  base: hashDir('playground', readFileSync(new URL(import.meta.url)), 'v2'),
  jobs: examples('snippets/turtle.json', (c) => `from turtle import *\n\n${c}`),
  async draw(page, j) {
    await page.goto(`http://localhost:${port}/_playground/?view=output&speed=10&autorun=1&shape=classic&code=${encodeURIComponent(j.code)}`);
    await page.waitForFunction(() => ['done', 'error', 'stopped'].includes(window.__playground?.status), null, { timeout: 20000 });
    const st = await page.evaluate(() => window.__playground);
    if (st.status === 'error') throw new Error(`${j.id}: the example failed: ${st.error}`);
    // Crop to what was drawn (anything unlike the corner pixel), with a margin.
    return page.evaluate(() => {
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
  },
});

// ---- HTML: the example as a page, as the HTML playground's preview shows it (browser defaults),
// 320px wide; cropped to what is on it (text, boxes with a background or border, controls), with a margin.
await pictures({
  name: 'html', dir: join(DIR, 'html'), viewport: { width: 320, height: 600 },
  base: hashDir('media', readFileSync(new URL(import.meta.url)), 'html-v1'),
  jobs: examples('snippets/html.json', (c) => c),
  async draw(page, j) {
    await page.setContent(withMedia(j.code), { waitUntil: 'load' });
    const box = await page.evaluate(() => {
      let r = 0, b = 0;
      const add = (q) => { if (q.width > 0 && q.height > 0) { r = Math.max(r, q.right); b = Math.max(b, q.bottom); } };
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let n; (n = w.nextNode());) if (n.textContent.trim()) { const g = document.createRange(); g.selectNodeContents(n); [...g.getClientRects()].forEach(add); }
      for (const el of document.body.querySelectorAll('*')) {
        const cs = getComputedStyle(el), q = el.getBoundingClientRect();
        const paints = /^(IMG|INPUT|BUTTON|SELECT|TEXTAREA|HR|TABLE|TD|TH|SVG|CANVAS)$/i.test(el.tagName)
          || !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor)
          || ['Top', 'Right', 'Bottom', 'Left'].some((s) => parseFloat(cs[`border${s}Width`]) > 0 && cs[`border${s}Style`] !== 'none');
        if (paints) add(q);
        if (el.tagName === 'LI') add({ ...q.toJSON(), right: q.left + 1 }); // keep its bullet or number
      }
      return { r: Math.ceil(r), b: Math.ceil(b) };
    });
    if (!box.r || !box.b) return null;
    const m = 8, width = Math.min(320, box.r + m), height = Math.min(600, box.b + m);
    const buf = await page.screenshot({ clip: { x: 0, y: 0, width, height } });
    return { data: `data:image/png;base64,${buf.toString('base64')}`, w: width * 2, h: height * 2, div: 3 };
  },
});

// ---- Expected results: the page a solution region makes, as a picture (no code), for "Show the expected result"
// in HTML lessons (expected: on a step or task). 520px wide like a lesson's preview, cropped to the page's height.
const { loadLessons, getSnippet, expectedItems } = await import('./lesson.mjs');
await pictures({
  name: 'expected', dir: join(DIR, 'expected'), viewport: { width: 520, height: 900 },
  base: hashDir('media', readFileSync(new URL(import.meta.url)), 'expected-v1'),
  jobs: loadLessons().flatMap((l) => expectedItems(l).map((e) => ({ id: `${l.slug}/${e.key}`, code: getSnippet(l.dir, e.ref) }))),
  async draw(page, j) {
    await page.setContent(withMedia(j.code), { waitUntil: 'load' });
    const bottom = await page.evaluate(() => {
      let b = 0;
      for (const el of document.body.querySelectorAll('*')) { const q = el.getBoundingClientRect(); if (q.height > 0) b = Math.max(b, q.bottom + parseFloat(getComputedStyle(el).marginBottom || 0)); }
      return Math.ceil(b);
    });
    if (!bottom) return null;
    const height = Math.min(900, bottom + 8);
    const buf = await page.screenshot({ clip: { x: 0, y: 0, width: 520, height } });
    return { data: `data:image/png;base64,${buf.toString('base64')}`, w: 1040, h: height * 2, div: 2 };
  },
});

// ---- "What this code makes": picture: on steps and tasks, and explainPicture, drawn by the HTML playground itself
// (so the Boxes view looks exactly as students see it), cropped to the page's content.
const { pictureItems } = await import('./lesson.mjs');
await pictures({
  name: 'shown', dir: join(DIR, 'shown'), viewport: { width: 1100, height: 1400 },
  base: hashDir('media', 'playground-html', readFileSync(new URL(import.meta.url)), 'shown-v1'),
  // The view settings are part of the cached code, so changing boxes or inspect redraws the picture.
  jobs: loadLessons().flatMap((l) => pictureItems(l).map((e) => ({ id: `${l.slug}/${e.key}`, view: e.inspect ? `inspect=${encodeURIComponent(e.inspect)}&` : e.boxes ? 'boxes=1&' : '', src: getSnippet(l.dir, e.ref) }))).map((j) => ({ ...j, code: `<!-- view: ${j.view} -->\n${j.src}` })),
  async draw(page, j) {
    await page.goto(`http://localhost:${port}/_playground-html/index.html?${j.view}code=${encodeURIComponent(j.src)}`);
    await page.waitForFunction(() => window.__playground?.updates > 0);
    await page.waitForTimeout(j.view.startsWith('inspect') ? 800 : 500);
    const el = await page.$('#preview'), frame = await el.contentFrame(), box = await el.boundingBox();
    const ext = await frame.evaluate(() => {
      let r = 0, b = 0;
      for (const e of document.querySelectorAll('body *, [data-wp-inspect] *')) { const q = e.getBoundingClientRect(); if (q.width && q.height) { r = Math.max(r, q.right); b = Math.max(b, q.bottom); } }
      return { r: Math.ceil(r), b: Math.ceil(b) };
    });
    if (!ext.b) return null;
    const width = Math.min(box.width - 2, ext.r + 14), height = Math.min(box.height - 2, ext.b + 14);
    const buf = await page.screenshot({ clip: { x: box.x + 1, y: box.y + 1, width, height } });
    return { data: `data:image/png;base64,${buf.toString('base64')}`, w: Math.round(width * 2), h: Math.round(height * 2), div: 2 };
  },
});

if (browser) { await browser.close(); server.close(); }
