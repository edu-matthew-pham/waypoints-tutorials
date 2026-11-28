// Smoke test for the Data apps course (code/data-apps, including Build around a simulation): after `npm run build`, open lessons, build in the embedded
// App Builder by clicking its labelled controls, and check that the step's code checks tick by themselves.
//   node experiments/data-apps-smoke.mjs
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
const allOk = (step) => step.locator('.check').first().evaluate((el) => el.classList.contains('done') || ([...el.querySelectorAll('.rules li')].length > 0 && [...el.querySelectorAll('.rules li')].every((li) => li.classList.contains('ok'))));

// One table instead, Build 1: make the Songs table in the sidebar
await page.goto(base + '/code/data-apps/one-table/');
let step = page.locator('#step-2');
await step.scrollIntoViewIfNeeded();
let f = step.frameLocator('iframe').first();
await f.locator('.stage.design').waitFor();
assert.equal(await allOk(step), false, 'Build 1 should not tick before the table exists');
await f.locator('[data-ab="new-table-name"]').fill('Songs');
await f.locator('[data-ab="new-table-add"]').click();
const renameField = async (from, to) => {
  await f.locator(`[data-ab="field-menu:Songs.${from}"]`).click();
  await f.locator('[data-ab="menu:rename"]').click();
  await f.locator('input[aria-label="Field name"]').fill(to);
  await f.locator('input[aria-label="Field name"]').press('Enter');
};
await renameField('name', 'title');
for (const name of ['artist', 'length']) {
  await f.locator('[data-ab="add-field:Songs"]').click();
  await f.locator('input[aria-label="Field name"]').fill(name);
  await f.locator('input[aria-label="Field name"]').press('Enter');
}
await f.locator('[data-ab="field-menu:Songs.length"]').click();
await f.locator('[data-ab="menu:number"]').click();
await page.waitForTimeout(600);
assert.equal(await allOk(step), true, 'Build 1 ticks once Songs has title, artist and length');
console.log('✓ one-table Build 1: the table check ticks');

// Records and fields: the finished app runs (Total length)
await page.goto(base + '/code/data-apps/records-and-fields/');
step = page.locator('#step-1');
await step.scrollIntoViewIfNeeded();
f = step.frameLocator('iframe').first();
await f.locator('.view-run [data-ab="widget:TotalButton"]').click();
assert.match(await f.locator('.view-run [data-ab="widget:TotalText"]').innerText(), /Total: 14 min/);
console.log('✓ records-and-fields: the finished app totals the lengths');

// Search, filter and sort: the finished app searches into Results
await page.goto(base + '/code/data-apps/search-filter-sort/');
step = page.locator('#step-1');
await step.scrollIntoViewIfNeeded();
f = step.frameLocator('iframe').first();
await f.locator('.view-run [data-ab="widget:SearchInput"] input').fill('an');
await f.locator('.view-run [data-ab="widget:SearchButton"]').click();
assert.equal(await f.locator('.view-run [data-ab="widget:ResultsTable"] tbody tr').count(), 1);
console.log('✓ search-filter-sort: search copies one matching row');

// Build around a simulation: the finished lab runs inside the lesson (a sandboxed page in an Embed, inside App Builder's
// frame); the page reports its period, Moon sends gravity, Record adds a row. Then Build 1 by clicks, and its check ticks.
await page.goto(base + '/code/data-apps/simulation/');
step = page.locator('#step-1');
await step.scrollIntoViewIfNeeded();
f = step.frameLocator('iframe').first();
await f.locator("[data-ab='widget:PeriodText']").filter({ hasText: 'Period: 2.01 s' }).waitFor();
await f.locator(".view-run [data-ab='widget:Planet']").nth(1).click();
await f.locator("[data-ab='widget:PeriodText']").filter({ hasText: 'Period: 4.97 s' }).waitFor();
await f.locator(".view-run [data-ab='widget:Record']").click();
await f.locator(".view-run [data-ab='widget:ReadingsView']").filter({ hasText: '4.97' }).waitFor();
console.log('✓ simulation: the finished lab reports its period, Moon sends gravity, Record adds a row');
step = page.locator('#step-2');
await step.scrollIntoViewIfNeeded();
f = step.frameLocator('iframe').first();
await f.locator("[data-ab='tab:events']").click();
await f.locator(".view-events [data-ab='add-event']").click();
await f.locator(".view-events .ev.sel [data-ab='add-condition']").click();
await f.locator("[data-ab='group:object:Sim']").click();
await f.locator("[data-ab='entry:onEmbedSends']").click();
await f.locator("dialog[open] [data-ab='done']").click();
await f.locator(".view-events .ev.sel [data-ab='add-action']").click();
await f.locator("[data-ab='group:object:PeriodText']").click();
await f.locator("[data-ab='entry:setText']").click();
await f.locator("dialog[open] [data-ab='param:value']").fill('"Period: " & Sim.period & " s"');
await f.locator("dialog[open] [data-ab='done']").click();
await page.waitForFunction(() => document.querySelector('#step-2 .check')?.classList.contains('done') || [...document.querySelectorAll('#step-2 .rules li')].every((li) => li.classList.contains('ok')), null, { timeout: 10000 });
await f.locator("[data-ab='tab:run']").click();
await f.locator("[data-ab='widget:PeriodText']").filter({ hasText: 'Period: 2.01 s' }).waitFor();
console.log('✓ simulation: Build 1 by clicks ticks its check, and the period shows when it runs');

assert.deepEqual(errors, []);
console.log('no page errors');
await browser.close();
srv.close();
