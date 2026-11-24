// Smoke test for the App Builder apps course (code/apps): after `npm run build`, open a lesson, build in the embedded
// App Builder by clicking its labelled controls, and check that the step's code checks tick by themselves.
//   node experiments/apps-smoke.mjs
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import assert from 'node:assert/strict';

const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.mp4': 'video/mp4' };
const srv = createServer((q, r) => {
  let p = join('dist', decodeURIComponent(q.url.split('?')[0]));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) { r.writeHead(404); r.end(); return; }
  r.writeHead(200, { 'content-type': T[extname(p)] || 'application/octet-stream' }); r.end(readFileSync(p));
}).listen(0);
const base = `http://127.0.0.1:${srv.address().port}`;
const exe = existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : '/usr/bin/google-chrome';
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1100 } });
page.setDefaultTimeout(15000);
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));

await page.goto(base + '/code/apps/practice-tracker/');
const step = page.locator('#step-5');
await step.scrollIntoViewIfNeeded();
const f = step.frameLocator('iframe').first();
await f.locator('.stage.design').waitFor();
const ticked = (i) => step.locator('.check').nth(i).evaluate((el) => el.classList.contains('done') || !!el.querySelector('.rules li.ok:last-child') && [...el.querySelectorAll('.rules li')].every((li) => li.classList.contains('ok')));

// task 1: make the screen
const add = async (kind) => { await f.locator('[data-ab="add-object"]').click(); await f.locator(`[data-ab="kind:${kind}"]`).click(); };
await add('input'); await add('button'); await add('text');
const names = await f.locator('.tree .obj-name').allInnerTexts();
const rename = async (from, to) => {
  await f.locator(`[data-ab="object:${from}"]`).click();
  await f.locator('[data-ab="object-menu"]').click();
  await f.locator('[data-ab="menu:rename"]').click();
  await f.locator('input[aria-label="Object name"]').fill(to);
  await f.locator('input[aria-label="Object name"]').press('Enter');
};
await rename(names[0], 'TextInput'); await rename(names[1], 'SaveButton'); await rename(names[2], 'TotalText');
await page.waitForTimeout(800);
assert.ok(await ticked(0), 'task 1 ticks when the screen has the three objects: ' + (await step.locator('.check').nth(0).innerText()));

// task 2: the variable and the event (the clicks the walkthrough clip shows)
await step.locator('.taskpills [role=tab]').nth(1).click();
await f.locator('[data-ab="new-variable-name"]').fill('Minutes');
await f.locator('[data-ab="new-variable-name"]').press('Enter');
await f.locator('[data-ab="tab:events"]').click();
await step.locator('iframe').first().evaluate((el) => el.scrollIntoView({ block: 'start' })); // keep the editor's dialogs in view
const ev = f.locator('.view-events');
await ev.locator('[data-ab="add-event"]').click();
await ev.locator('.ev.sel [data-ab="add-condition"]').click();
await f.locator('[data-ab="group:object:SaveButton"]').click();
await f.locator('[data-ab="entry:onClicked"]').click();
await f.locator('dialog[open] [data-ab="done"]').click();
await ev.locator('.ev.sel [data-ab="add-action"]').click();
await f.locator('[data-ab="group:Variables"]').click();
await f.locator('[data-ab="entry:addTo"]').click();
await f.locator('dialog[open] [data-ab="param:value"]').fill('15');
await f.locator('dialog[open] [data-ab="done"]').click();
await page.waitForTimeout(800);
assert.ok(await ticked(1), 'task 2 ticks: ' + (await step.locator('.check').nth(1).innerText()));
await page.screenshot({ path: 'experiments/apps-smoke.png' });
assert.deepEqual(errors, []);
console.log('apps smoke test passed');
await browser.close(); srv.close();
