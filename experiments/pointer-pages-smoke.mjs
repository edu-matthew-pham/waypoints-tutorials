// Teacher pointer pages and Create's node pre-fill, in a browser (needs `npm run build` first):
// a few History pointer pages are draft-labelled and noindex, linked only from /teach/; "Make a primer for this" opens
// Create with a valid Primer starter from that node; the node picker builds a pick list for several nodes and puts
// their data in the copied prompt; nothing overflows at phone width (390px).
//   CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node experiments/pointer-pages-smoke.mjs
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, mkdirSync } from 'node:fs';

const PORT = 8798, root = `http://127.0.0.1:${PORT}/`;
const server = spawn(process.execPath, ['tools/serve.mjs', 'dist', String(PORT)], { stdio: 'ignore' });
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const dir = 'browser-recorder-results'; mkdirSync(dir, { recursive: true });
let browser; const errors = [];
const overflow = async (page) => {
  const [over, who] = await page.evaluate(() => {
    const W = document.documentElement.clientWidth, over = document.documentElement.scrollWidth - W;
    return [over, [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > W + 1).slice(0, 8).map((e) => `${e.tagName}#${e.id}.${e.className}`).join(' ')];
  });
  if (over > 0) console.log('overflow:', over, who);
  return over;
};
try {
  for (let n = 0; n < 40; n++) { try { if ((await fetch(root)).ok) break; } catch { /* starting */ } await delay(250); }
  // Static checks on the built files: every History node has a page; no student page links to them.
  const cur = JSON.parse(readFileSync('data/curriculum/history.json', 'utf8'));
  const nodes = cur.descriptors.filter((d) => d.year >= 7).flatMap((d) => d.nodes.map((n) => `${d.code}/n${n.n}`));
  assert.ok(nodes.length > 300, 'History nodes imported');
  for (const p of nodes) assert.ok(existsSync(`dist/teach/curriculum/history/${p}/index.html`), `page for ${p}`);
  assert.ok(!existsSync('dist/history'), 'no student-facing History section');

  browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage(); page.setDefaultTimeout(15000); page.on('pageerror', (e) => errors.push(e.message));

  // The teacher index links to the pointers; the home page does not.
  await page.goto(root + 'teach/');
  await page.click('a[href="curriculum/history/"]');
  await page.waitForURL(/teach\/curriculum\/history\/$/);
  assert.equal(await page.locator('meta[name=robots]').getAttribute('content'), 'noindex');
  assert.match(await page.locator('.draft').innerText(), /Draft, from Waypoints Kit v0\.2/);
  await page.goto(root);
  assert.equal(await page.locator('a[href*="curriculum/history"]').count(), 0, 'not linked from the student home page');

  // A few node pages: draft label, noindex, checkpoint, criteria, width, modes, Kit link, Create button.
  for (const p of ['AC9HH7S03/n1', 'AC9HH9K08/n1', 'AC9HH10S08/n2']) {
    await page.goto(`${root}teach/curriculum/history/${p}/`);
    assert.equal(await page.locator('meta[name=robots]').getAttribute('content'), 'noindex', p);
    assert.match(await page.locator('.draft').innerText(), /Draft, from Waypoints Kit v0\.2/, p);
    for (const h of ['Checkpoint', 'Lessons on this site', 'Success criteria', 'Prior knowledge', 'Width', 'Response modes']) assert.ok(await page.locator('h2', { hasText: h }).count(), `${p}: ${h}`);
    assert.match(await page.locator('a', { hasText: 'Kit node file' }).getAttribute('href'), /waypoints-kit\/blob\/main\/data\/history\/y\d+_history_AC9HH/);
    assert.match(await page.locator('a.make').getAttribute('href'), /code\/create\/\?node=AC9HH\w+\.\d$/);
  }

  // Phone width: no horizontal scroll on the index, a standard and a node page.
  const phone = await context.newPage(); await phone.setViewportSize({ width: 390, height: 844 });
  for (const p of ['', 'AC9HH9K04/', 'AC9HH7S03/n1/']) { await phone.goto(`${root}teach/curriculum/history/${p}`); assert.ok(await overflow(phone) <= 0, `overflow at 390px: ${p}`); }

  // "Make a primer for this" → Create with a pre-filled, valid Primer.
  await page.goto(`${root}teach/curriculum/history/AC9HH7S03/n1/`);
  await page.click('a.make');
  await page.waitForURL(/code\/create\/.*workspace=1/);
  await page.waitForFunction(() => document.querySelector('#text').value.includes('node: AC9HH7S03 n1'));
  const md = await page.locator('#text').inputValue();
  assert.match(md, /^title: "Origin and content"/m);
  assert.match(md, /shape: primer/);
  assert.match(md, /goals:\n {2}- "I can correctly identify the producer/);
  assert.doesNotMatch(md, /misconception:/, 'the misconception is offered, not pasted');
  assert.match(md, /Width \(Kit's response modes\): consolidation/);
  await page.waitForFunction(() => document.querySelector('#problems li.ok'));
  assert.equal(await page.locator('#problems li:not(.ok)').count(), 0, 'the starter validates');
  assert.equal(await page.locator('#authorProfile').inputValue(), 'primer');
  assert.equal(await page.locator('#authorSubject').inputValue(), 'hass');
  assert.ok(!page.url().includes('node='), 'node parameter consumed');
  // Offered misconception: "Use this" writes design.misconception into the lesson.
  await page.locator('#nodeChosen button', { hasText: 'Use this' }).first().click();
  await page.waitForFunction(() => document.querySelector('#text').value.includes('misconception: Students who conflate origin with content') || document.querySelector('#text').value.includes('misconception: "Students who conflate'));
  // The copied prompt carries the node data.
  await page.click('#copyLessonPrompt');
  await page.waitForFunction(() => document.querySelector('#authorStatus').textContent.startsWith('Prompt copied'));
  const prompt = await page.evaluate(() => navigator.clipboard.readText());
  assert.match(prompt, /CURRICULUM NODES \(from Waypoints Kit v0\.2/);
  assert.match(prompt, /Checkpoint: Students can identify the origin of a source/);
  assert.match(prompt, /consolidation → more practise steps/);
  assert.match(prompt, /Misconception I picked: Students who conflate/);
  await page.screenshot({ path: `${dir}/create-from-node.png`, fullPage: true });

  // Picker: add a second node; criteria become a pick list (none ticked), and the starter lists both nodes.
  await page.selectOption('#nodeSubject', 'history');
  await page.selectOption('#nodeYear', '7');
  await page.selectOption('#nodeStandard', 'AC9HH7S04');
  await page.selectOption('#nodePick', '1');
  await page.click('#nodeAdd');
  await page.waitForFunction(() => document.querySelectorAll('#nodeChosen .node-card').length === 2);
  assert.equal(await page.locator('#nodeChosen .node-card input:checked').count(), 0, 'several nodes: nothing ticked silently');
  await page.locator('#nodeChosen .node-card').nth(1).locator('input').first().check();
  const lessons = await page.locator('#courseLesson option').count();
  await page.click('#newFromSettings');
  await page.waitForFunction((n) => document.querySelector('#courseLesson').options.length === n + 1, lessons);
  await page.waitForFunction(() => document.querySelector('#text').value.includes('  - AC9HH7S04 n1'));
  const md2 = await page.locator('#text').inputValue();
  assert.match(md2, /node:\n {2}- AC9HH7S03 n1\n {2}- AC9HH7S04 n1/);
  assert.equal((md2.match(/^ {2}- "I can/gm) || []).length, 1, 'only the ticked criterion became a goal');
  await page.waitForFunction(() => document.querySelector('#problems li.ok'));

  // Create at phone width with the panel open.
  await phone.goto(`${root}code/create/?node=AC9HH8S03.2`);
  await phone.waitForFunction(() => document.querySelector('#text').value.includes('node: AC9HH8S03 n2'));
  assert.ok(await overflow(phone) <= 0, 'Create overflows at 390px with the waypoint panel open');

  // A bad node gives a message, not a broken page.
  await phone.goto(`${root}code/create/?node=AC9HH7S99.1`);
  await phone.waitForFunction(() => /Could not open that waypoint/.test(document.querySelector('#authorStatus').textContent));

  assert.deepEqual(errors, []);
  console.log('pointer-pages-smoke: pass');
} finally {
  await browser?.close();
  server.kill();
}
