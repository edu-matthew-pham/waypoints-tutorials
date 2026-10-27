// Train a model in the real Pattern Trainer (local copy of waypoints-tools), as a student would: name classes,
// Upload photos/sounds, Train model, Download. Usage: node train.mjs image|audio out.json Class=dir ...
// Paths below are the Claude sandbox's: ROOT is a clone of edu-matthew-pham/waypoints-tools/trainer, Chromium is Playwright's.
import { chromium } from '/home/claude/waypoints-tutorials/node_modules/playwright-core/index.mjs';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync, readdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
const [mode, out, ...specs] = process.argv.slice(2);
const ROOT = '/home/claude/edu-matthew-pham/waypoints-tools/trainer';
const T = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.tflite': 'application/octet-stream', '.task': 'application/octet-stream' };
const srv = createServer((q, r) => { let p = join(ROOT, decodeURIComponent(new URL(q.url, 'http://x').pathname)); if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html'); if (!existsSync(p)) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'content-type': T[extname(p)] || 'application/octet-stream' }); r.end(readFileSync(p)); }).listen(0);
await new Promise((ok) => srv.on('listening', ok));
const port = srv.address().port;
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome', args: ['--no-sandbox'] });
const ctx = await b.newContext({ acceptDownloads: true });
const pg = await ctx.newPage(); const errs = []; pg.on('pageerror', (e) => errs.push(e.message));
await pg.goto(`http://127.0.0.1:${port}/index.html${mode === 'audio' ? '?mode=audio' : ''}`);
await pg.waitForFunction(() => window.__trainer && window.__trainer.ready && window.__trainer.ready(), null, { timeout: 120000 });
const cards = pg.locator('.class-card');
for (let i = 0; i < specs.length; i++) {
  const [name, dir] = specs[i].split('=');
  if (i >= await cards.count()) await pg.click('#add-class');
  await cards.nth(i).locator('.class-name').fill(name);
  const files = readdirSync(dir).sort().map((f) => join(dir, f));
  await cards.nth(i).locator('.upload').setInputFiles(files);
  await pg.waitForFunction(([i, n]) => { const card = document.querySelectorAll('.class-card')[i]; const m = card.querySelector('.card-msg'); const c = card.querySelector('.count'); return (m && /^Added|couldn|n't/i.test(m.textContent)) || (c && parseInt(c.textContent) >= n && (!m || !/Adding/.test(m.textContent))); }, [i, files.length], { timeout: 900000 });
  console.log('  msg:', (await cards.nth(i).locator('.card-msg').textContent().catch(() => '')).trim());
  console.log(name, await cards.nth(i).locator('.count').textContent());
}
await pg.click('#train-btn');
await pg.waitForFunction(() => document.querySelector('#train-msg').textContent.startsWith('Trained on'), null, { timeout: 300000 });
console.log('trainer says:', (await pg.locator('#train-msg').textContent()).trim());
const [dl] = await Promise.all([pg.waitForEvent('download'), pg.click('#export-btn')]);
await dl.saveAs(out);
console.log('saved', out, dl.suggestedFilename(), errs.length ? errs : 'no page errors');
await b.close(); srv.close();
