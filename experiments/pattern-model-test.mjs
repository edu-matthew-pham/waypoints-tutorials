// Pattern Trainer models in the classifier widget and web-helpers/pattern-model.js, in a headless browser (28 Oct 2026).
// Then experiments/pattern-model-compare.py checks the answers against the starters' pattern_model.py.
//   git clone --depth 1 https://github.com/edu-matthew-pham/waypoints-tools /home/claude/edu-matthew-pham/waypoints-tools
//   git clone --depth 1 https://github.com/edu-matthew-pham/pattern-detector-starters /home/claude/edu-matthew-pham/pattern-detector-starters
//   node tools/build-playground.mjs && node experiments/pattern-model-test.mjs
//   python -m venv v && v/bin/pip install mediapipe==1.1.1 pillow numpy && v/bin/python experiments/pattern-model-compare.py
// The sandbox cannot reach tools.learningwaypoints.com, so its files are served from the waypoints-tools clone
// (WP_TOOLS), with GitHub Pages' CORS header. Results go to .render-tmp/pt-out/.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, existsSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';

const DIST = resolve('dist');
const TOOLS = resolve(process.env.WP_TOOLS || '/home/claude/edu-matthew-pham/waypoints-tools');
const STARTERS = resolve(process.env.WP_STARTERS || '/home/claude/edu-matthew-pham/pattern-detector-starters');
const OUT = resolve('.render-tmp/pt-out'); mkdirSync(OUT, { recursive: true });
copyFileSync(join(STARTERS, 'my_model.json'), join(DIST, '_playground-board', 'media', 'pt-test.json')); // for model: <path>.json
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.tflite': 'application/octet-stream', '.txt': 'text/plain' };
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.startsWith('/_starters/')) p = join(STARTERS, p.slice(11)); else p = join(DIST, p);
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
}).listen(8731);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1243/chrome-linux64/chrome', args: ['--no-sandbox'] }).catch(() => chromium.launch({ args: ['--no-sandbox'] }));
const ctx = await browser.newContext();
let toolsHits = 0;
// The sandbox cannot reach the tools site: serve the read-only waypoints-tools clone at its address, with GitHub Pages' CORS header.
await ctx.route('https://tools.learningwaypoints.com/**', (route) => {
  const p = join(TOOLS, decodeURIComponent(new URL(route.request().url()).pathname));
  if (!existsSync(p)) return route.fulfill({ status: 404, body: '' });
  toolsHits++;
  route.fulfill({ status: 200, body: readFileSync(p), headers: { 'content-type': TYPES[extname(p)] || 'application/octet-stream', 'access-control-allow-origin': '*' } });
});
await ctx.route('https://teachablemachine.withgoogle.com/**', (r) => r.abort());
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

const board = (setup, id) => `http://localhost:8731/_playground-board/index.html?kind=board&id=${id}&code=${encodeURIComponent(setup)}`;
const msg = () => page.$$eval('.clmsg', (els) => els.map((e) => e.textContent).join(' | '));
const results = {};

// 1. The reader on its own: the original photos, every class's probability, and the first embedding numbers.
await page.goto(board('widget: classifier\ntestset: own\nclasses: Cat, Coffee', 'pt1'));
await page.evaluate(() => localStorage.clear());
await page.addScriptTag({ url: '/_playground-board/vendor/pattern-model.js' });
results.reader = await page.evaluate(async () => {
  const model = await PatternModel.load('/_starters/my_model.json');
  const out = {};
  for (const f of ['cat.jpg', 'coffee.jpg']) {
    const img = new Image(); img.src = '/_starters/test-files/' + f; await img.decode();
    const v = await model.embed(img);
    out[f] = { probs: await model.predict(img), top: await model.top(img), emb: Array.from(v.slice(0, 8)), w: img.naturalWidth, h: img.naturalHeight };
  }
  return out;
});

// 2. The widget, as a student: open the model file, add own test photos, read each card's result.
await page.reload();
await page.waitForSelector('#clptopen');
await page.setInputFiles('#clptfile', join(STARTERS, 'my_model.json'));
for (const [label, f] of [['Cat', 'cat.jpg'], ['Coffee', 'coffee.jpg']]) {
  await page.selectOption('#clownlabel', label);
  await page.fill('#clowngroup', 'desk');
  await page.setInputFiles('#clownfile', join(STARTERS, 'test-files', f));
  await page.waitForFunction((n) => JSON.parse(localStorage.getItem('wp-classifier-own') || '[]').length >= n, label === 'Cat' ? 1 : 2);
}
await page.waitForFunction(() => document.querySelectorAll('.clcard.ok, .clcard.no').length === 2, null, { timeout: 120000 });
results.widget = await page.$$eval('.clcard', (cards) => cards.map((c) => ({ label: c.querySelector('b').textContent, p: Number(c.querySelector('i').style.getPropertyValue('--f')) })));
results.widgetNote = await page.$$eval('.clnote', (els) => els.map((e) => e.textContent).filter((t) => /Using/.test(t)));
results.say = await page.evaluate(() => document.body.innerText.match(/model: .*\)/)?.[0] || '');
results.ownPhotos = await page.evaluate(() => JSON.parse(localStorage.getItem('wp-classifier-own')).map((p) => ({ label: p.label, src: p.src })));
results.stored = await page.evaluate(() => ({ pt: (localStorage.getItem('wp-classifier-pt') || '').length, link: localStorage.getItem('wp-classifier-link') }));
await page.screenshot({ path: join(OUT, 'widget.png'), fullPage: true });

// 3. A later step starts with the same model (no file opened there).
await page.goto(board('widget: classifier\ntestset: own\nwebcam: on', 'pt2'));
await page.waitForFunction(() => document.querySelectorAll('.clcard.ok, .clcard.no').length === 2, null, { timeout: 120000 });
results.laterStep = await page.$$eval('.clcard b', (b) => b.map((x) => x.textContent));

// 4. Wrong files get a message.
const bad = {
  pose: join(STARTERS, 'my_pose_model.json'),
  sound: join(STARTERS, 'my_audio_model.json'),
};
const spec = JSON.parse(readFileSync(join(STARTERS, 'my_model.json'), 'utf8'));
writeFileSync(join(OUT, 'my_project.json'), JSON.stringify({ format: 'pattern-trainer-project', version: 1, input: spec.input, classes: [] }));
const broken = structuredClone(spec); broken.layers[1].bias.data[0] += 0.5; writeFileSync(join(OUT, 'broken.json'), JSON.stringify(broken));
writeFileSync(join(OUT, 'tm-model.json'), JSON.stringify({ modelTopology: {}, weightsManifest: [] }));
bad.project = join(OUT, 'my_project.json'); bad.check = join(OUT, 'broken.json'); bad.tm = join(OUT, 'tm-model.json');
results.errors = {};
for (const [k, f] of Object.entries(bad)) {
  await page.goto(board('widget: classifier\ntestset: own', 'pt3' + k));
  await page.waitForSelector('#clptopen');
  await page.setInputFiles('#clptfile', f);
  await page.waitForSelector('.clmsg.bad', { timeout: 30000 });
  results.errors[k] = await msg();
}

// 5. model: a Pattern Trainer file on the site (demo or fallback).
await page.evaluate(() => localStorage.removeItem('wp-classifier-pt'));
await page.goto(board('widget: classifier\ntestset: own\nmodel: media/pt-test.json', 'pt4'));
await page.waitForFunction(() => document.querySelectorAll('.clcard.ok, .clcard.no').length === 2, null, { timeout: 120000 });
results.sitePath = await page.$$eval('.clcard b', (b) => b.map((x) => x.textContent));
results.sitePathKeptPt = await page.evaluate(() => localStorage.getItem('wp-classifier-pt'));

// 6. Teachable Machine path unchanged: a non-TM link is refused; a TM link tries TM (blocked here).
await page.goto(board('widget: classifier\ntestset: own', 'pt5'));
await page.fill('#cllink', 'https://example.com/model');
await page.click('text=Load');
results.tmBadLink = await msg();
await page.fill('#cllink', 'https://teachablemachine.withgoogle.com/models/abc123/');
await page.click('text=Load');
await page.waitForSelector('.clmsg.bad', { timeout: 60000 });
await page.waitForFunction(() => !/Loading/.test(document.querySelector('.clmsg')?.textContent || ''), null, { timeout: 60000 });
results.tmBlocked = await msg();

results.toolsHits = toolsHits;
results.pageErrors = errors.filter((e) => !/teachablemachine|Failed to load resource/.test(e));
writeFileSync(join(OUT, 'browser.json'), JSON.stringify(results, null, 1));
console.log(JSON.stringify({ ...results, ownPhotos: results.ownPhotos.map((p) => p.label) }, null, 1));
if (results.pageErrors.some((e) => !/XNNPACK/.test(e))) process.exitCode = 1;
await browser.close(); server.close();
