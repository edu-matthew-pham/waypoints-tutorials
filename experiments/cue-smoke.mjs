// Browser test for the cohesion board's cue mode (27 Oct 2026). Needs `node tools/build-playground.mjs` first.
//   node experiments/cue-smoke.mjs [outdir]     (screenshots and a PDF go to outdir, default .render-tmp/cue)
// At 1280 and 390 px: the sections and cards draw, clicking and the keyboard toggle key words, counts follow, a card over
// the limit is marked, "Use my own script" turns pasted paragraphs into sections, answer: on draws the picture (cards inside the
// paper, nothing clickable), and the print sheets (index cards, highlighted script) show under print media with the board hidden.
import { chromium } from 'playwright-core';
import http from 'node:http';
import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const out = process.argv[2] || '.render-tmp/cue';
await mkdir(out, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };
const srv = http.createServer(async (q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  try { const b = await readFile(join('dist', p)); r.writeHead(200, { 'content-type': TYPES[p.slice(p.lastIndexOf('.'))] || 'application/octet-stream' }); r.end(b); } catch { r.writeHead(404); r.end(); }
}).listen(0);
await new Promise((ok) => srv.on('listening', ok));
const port = srv.address().port;

const SETUP = `widget: cohesion
mode: cue
max: 6
p opening: Good morning, everyone. Today I want to talk about [[litter on our oval#k]].
p point1: First, [[litter harms animals#k]]. Birds and lizards eat small pieces of plastic and get sick.
p close: So please, [[use the bins#k]]. A clean oval is something we can all be proud of.
tools: write
`;
const url = (code, extra = '') => `http://localhost:${port}/_playground-board/index.html?fresh=1&id=cue${extra}&code=${encodeURIComponent(code)}`;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
let n = 0;
const ok = (m) => { n++; console.log('✓ ' + m); };

for (const [label, width] of [['1280', 1280], ['390', 390]]) {
  const page = await browser.newPage({ viewport: { width, height: width > 600 ? 900 : 844 } });
  const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });
  page.on('response', (r) => { if (r.status() >= 400 && !/favicon/.test(r.url())) errors.push(r.status() + ' ' + r.url()); });
  await page.goto(url(SETUP.replace(/\[\[(.+?)#k\]\]/g, '$1')));
  // (the planted marks are stripped above: a student's board starts without key words; the marks only matter for answer: on)
  await page.waitForSelector('.co-cue-sec');
  assert.equal(await page.locator('.co-cue-sec').count(), 3); ok(`${label}: three sections draw`);
  assert.deepEqual(await page.locator('.co-cue-lab').allTextContents(), ['Opening', 'Point 1', 'Close']); ok(`${label}: sections are named from the setup`);
  assert.equal(await page.locator('.co-card').count(), 3);
  assert.match(await page.locator('.co-cuesum').textContent(), /Cards: 0 of 3 sections have key words/); ok(`${label}: nothing is counted at the start`);
  assert.equal(await page.locator('.co-card.co-empty').count(), 3);

  // click words: "litter", "on", "our", "oval." in the opening
  const word = (t) => page.locator('.co-cue-sec:nth-of-type(1) .co-w', { hasText: new RegExp('^' + t + '$') });
  for (const t of ['litter', 'on', 'our', 'oval\\.']) await word(t).first().click();
  assert.equal(await page.locator('.co-w.co-key').count(), 4);
  assert.equal(await page.locator('.co-card').first().locator('.co-ckeys').textContent(), 'litter on our oval'); ok(`${label}: clicking key words fills the card (a run stays together, the full stop is dropped)`);
  assert.match(await page.locator('.co-cuesum').textContent(), /Cards: 1 of 3 sections have key words\. Longest card: 4 words \(a card holds 6 at most\)\. Key words are 9% of the script/); ok(`${label}: counts follow`);
  assert.equal(await page.locator('.co-card .co-cn').first().textContent(), '4 words');
  // keyboard
  const first = page.locator('.co-cue-sec:nth-of-type(2) .co-w').first();
  await first.focus(); await page.keyboard.press('Enter');
  assert.equal(await first.getAttribute('aria-pressed'), 'true'); ok(`${label}: the keyboard toggles a key word`);
  await page.keyboard.press('Enter');
  assert.equal(await first.getAttribute('aria-pressed'), 'false');
  // over the limit: pick 7 words in the second section
  const sec2 = page.locator('.co-cue-sec:nth-of-type(2) .co-w');
  for (let i = 0; i < 7; i++) await sec2.nth(i).click();
  assert.equal(await page.locator('.co-card.co-over').count(), 1);
  assert.match(await page.locator('.co-card.co-over .co-cn').textContent(), /7 words: over the limit/); ok(`${label}: a card over the limit is marked`);
  await page.screenshot({ path: join(out, `cue-${label}-working.png`), fullPage: true });

  // write your own script
  await page.getByRole('button', { name: 'Use my own script' }).click();
  assert.equal(await page.locator('.co-area').count(), 1);
  await page.locator('.co-area').fill('Hello everyone. This is my opening.\n\nFirst point goes here with some words.\n\nSecond point is short.\n\nThanks for listening.');
  await page.getByRole('button', { name: 'Done writing' }).click();
  assert.deepEqual(await page.locator('.co-cue-lab').allTextContents(), ['Opening', 'Point 1', 'Point 2', 'Close']); ok(`${label}: a pasted script becomes sections, named by place`);
  await page.locator('.co-cue-sec:nth-of-type(3) .co-w').first().click();
  assert.equal(await page.locator('.co-card').nth(2).locator('.co-ckeys').textContent(), 'Second');
  await page.screenshot({ path: join(out, `cue-${label}-written.png`), fullPage: true });

  // print sheets under print media
  await page.evaluate(() => WPB.cuePrintSheet('cards'));
  await page.emulateMedia({ media: 'print' });
  assert.equal(await page.evaluate(() => getComputedStyle(document.querySelector('main')).display), 'none');
  assert.match(await page.evaluate(() => getComputedStyle(document.getElementById('co-printsheet')).display), /^(block|flex)$/);
  assert.equal(await page.locator('.co-pcard').count(), 4); ok(`${label}: print cards show four index cards and hide the board`);
  const wmm = await page.locator('.co-pcard').first().evaluate((e) => e.getBoundingClientRect().width / 96 * 25.4);
  assert.ok(Math.abs(wmm - 92) < 1.5, 'card width ' + wmm);
  if (label === '1280') { await page.pdf({ path: join(out, 'cue-cards.pdf'), format: 'A4' }); }
  await page.evaluate(() => WPB.cuePrintSheet('script'));
  assert.equal(await page.locator('.co-pscript').count(), 4);
  assert.equal(await page.locator('.co-pkey').count() > 0, true); ok(`${label}: the highlighted script marks the key words`);
  if (label === '1280') { await page.pdf({ path: join(out, 'cue-script.pdf'), format: 'A4' }); }
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => document.body.classList.remove('co-printing'));
  assert.deepEqual(errors, [], 'page errors: ' + errors.join('; '));
  await page.close();
}

// answer: on (an Explain picture): the example key words, the cards inside the paper, nothing to click
for (const width of [1280, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 800 } });
  await page.goto(url(SETUP + 'answer: on\n'));
  await page.waitForSelector('.co-cue-sec');
  assert.equal(await page.locator('.co-paper .co-card').count(), 3);
  assert.equal(await page.locator('.co-w.co-key').count(), 10);
  assert.equal(await page.locator('.co-paper .co-cuesum').count(), 0);
  assert.equal(await page.locator('.co-cue-sec .co-w[tabindex]').count(), 0);
  assert.equal(await page.locator('.co-bar:visible').count(), 0);
  await page.locator('.co-paper').screenshot({ path: join(out, `cue-${width}-picture.png`) });
  ok(`${width}: answer: on draws the finished cards inside the paper, read-only`);
  await page.close();
}
await browser.close(); srv.close();
console.log(`\n✓ cue smoke: ${n} checks (screenshots and PDFs in ${out})`);
