// "Make your own version": a lesson page's button opens a copy in Create (needs a built dist/; CHROME_PATH for Chromium).
import http from 'node:http'; import { readFileSync, existsSync, statSync } from 'node:fs'; import { join, extname } from 'node:path';
import assert from 'node:assert/strict'; import { chromium } from 'playwright-core';
const T = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((q, r) => { let p = join('dist', decodeURIComponent(q.url.split('?')[0])); if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html'); if (!existsSync(p)) { r.statusCode = 404; return r.end(); } r.setHeader('content-type', T[extname(p)] || 'application/octet-stream'); r.end(readFileSync(p)); }).listen(8391);
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ['--no-sandbox'] });
for (const slug of ['code/python-foundations/turtle-intro', 'science/chemistry/distil-chroma', 'ict/data/a-formula-keeps-up']) {
  const pg = await (await b.newContext()).newPage(), errs = []; pg.on('pageerror', (e) => errs.push(e.message));
  await pg.goto('http://localhost:8391/' + slug + '/'); await pg.click('.wpt-mine-btn'); await pg.waitForURL(/create/);
  await pg.waitForFunction(() => /Opened a copy|Could not/.test(document.body.innerText), null, { timeout: 15000 });
  assert.match(await pg.locator('#packageStatus').innerText(), /Opened a copy/, slug);
  const md = await pg.evaluate(() => JSON.parse(localStorage.getItem('wp-create-v1') || '{}')['lesson.md'] || '');
  assert.match(md, /\(my version\)/); assert.match(md, /```teacher/); assert.deepEqual(errs, [], slug);
}
await b.close(); srv.close(); console.log('make-own-smoke: pass');
