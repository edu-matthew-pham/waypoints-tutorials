// Browser test for the board's `dig` widget (1 Nov 2026, History › How we know). Needs `node tools/build-playground.mjs`
// first (or a full build). Run: node experiments/dig-smoke.mjs [outdir]
// For each mode at 1280 and 390 px: the board starts with no error, no check value holds at the start, a student's
// wrong moves are counted as wrong, the planted moves solve it, the keyboard works, and nothing scrolls sideways.
import { chromium } from 'playwright-core';
import http from 'node:http';
import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const out = process.argv[2] || '.render-tmp/dig';
await mkdir(out, { recursive: true });
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };
const srv = http.createServer(async (q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  try { const b = await readFile(join('dist', p)); r.writeHead(200, { 'content-type': T[p.slice(p.lastIndexOf('.'))] || 'application/octet-stream' }); r.end(b); } catch { r.writeHead(404); r.end(); }
}).listen(0);
await new Promise((ok) => srv.on('listening', ok));
const port = srv.address().port;
const LAYERS = 'site: A made-up dig\nlayer C: new floor, cooking pots\nlayer B: charcoal, burnt roof wood\nlayer A: earlier floor, pottery\n';
const SET = {
  order: 'widget: dig\nmode: order\n' + LAYERS + 'dig: on\n',
  pit: 'widget: dig\nmode: pit\n' + LAYERS + 'pit: C-A, coin\n',
  date: 'widget: dig\nmode: date\n' + LAYERS + 'find: B, coin, 220 BCE\n',
  build: 'widget: dig\nmode: build\n' + LAYERS + 'pit: C-A, coin\n',
};
const host = (code) => `<!doctype html><iframe id="b" style="width:100%;height:640px;border:0" src="/_playground-board/index.html?fresh=1&id=dig&code=${encodeURIComponent(code)}"></iframe><script>window.last=null;addEventListener('message',function(e){if(e.data&&e.data.wp==='run')window.last=e.data})</script>`;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
let n = 0;
const ok = (m) => { n++; console.log('✓ ' + m); };

for (const width of [1280, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const errors = []; page.on('pageerror', (e) => errors.push(e.message));
  const vars = async () => { await page.waitForTimeout(120); return page.evaluate(() => window.last && window.last.state.scope.vars); };
  const moved = () => page.evaluate(() => window.last && window.last.moved);
  for (const [mode, code] of Object.entries(SET)) {
    await page.route('**/_dig-host.html', (r) => r.fulfill({ contentType: 'text/html', body: host(code) }));
    await page.goto(`http://localhost:${port}/_dig-host.html`);
    const f = page.frameLocator('#b');
    await f.locator('.wpt-dgstack').waitFor();
    await page.waitForFunction(() => window.last);
    assert.equal(await moved(), false); ok(`${width} ${mode}: starts, nothing moved`);
    const v0 = await vars();
    if (mode === 'order') {
      assert.equal(v0.in_order, 0); assert.equal(v0.n_dug, 0);
      assert.equal(await f.locator('.wpt-dgcov').count(), 3);
      // keyboard: tab to the dig button and press Enter three times
      const dig = f.getByRole('button', { name: 'Dig down one layer' });
      await dig.focus(); await page.keyboard.press('Enter'); await page.keyboard.press('Enter'); await page.keyboard.press('Enter');
      assert.equal((await vars()).n_dug, 3); assert.equal(await dig.isDisabled(), true); ok(`${width} order: the keyboard digs every layer, then the button stops`);
      // wrong: number the top layer 1st
      await f.getByRole('button', { name: /^Layer C formed/ }).click();
      let v = await vars(); assert.equal(v.n_wrong, 1); assert.equal(v.in_order, 0); ok(`${width} order: top layer as 1st counts as wrong`);
      // right: C 3rd, B 2nd, A 1st
      await f.getByRole('button', { name: /^Layer C formed/ }).click(); await f.getByRole('button', { name: /^Layer C formed/ }).click();
      await f.getByRole('button', { name: /^Layer B formed/ }).click(); await f.getByRole('button', { name: /^Layer B formed/ }).click();
      await f.getByRole('button', { name: /^Layer A formed/ }).click();
      v = await vars(); assert.equal(v.in_order, 1); assert.equal(v.n_wrong, 0); ok(`${width} order: bottom 1st, top 3rd solves it`);
    } else if (mode === 'pit') {
      assert.equal(v0.n_found, 0); assert.equal(v0.n_stray, 0);
      await f.getByRole('button', { name: /^pottery, in layer A/ }).click();
      await f.getByRole('button', { name: 'Younger than the layer around it', exact: true }).click();
      let v = await vars(); assert.equal(v.n_stray, 1); assert.equal(v.n_found, 0); ok(`${width} pit: a find in its own layer marked younger counts as stray`);
      await f.getByRole('button', { name: 'Younger than the layer around it', exact: true }).click();   // undo
      await f.getByRole('button', { name: /^coin, in the pit/ }).click();
      await f.getByRole('button', { name: 'Older than the layer around it', exact: true }).click();
      v = await vars(); assert.equal(v.n_found, 0); ok(`${width} pit: the pit coin marked older is not found`);
      await f.getByRole('button', { name: 'Younger than the layer around it', exact: true }).click();
      v = await vars(); assert.equal(v.n_found, 1); assert.equal(v.n_stray, 0); ok(`${width} pit: the pit coin marked younger solves it`);
    } else if (mode === 'date') {
      assert.equal(v0.n_right, 0);
      await f.getByRole('button', { name: "Layer A: That year or later" }).click();
      let v = await vars(); assert.equal(v.n_wrong, 1); ok(`${width} date: the layer below the coin as "that year or later" counts as wrong`);
      await f.getByRole('button', { name: "Layer A: Can't tell from the coin" }).click();
      await f.getByRole('button', { name: 'Layer B: That year or later' }).click();
      await f.getByRole('button', { name: 'Layer C: That year or later' }).click();
      v = await vars(); assert.equal(v.n_right, 3); assert.equal(v.n_wrong, 0); ok(`${width} date: coin's layer and above later, below can't tell, solves it`);
    } else {
      assert.equal(v0.n_laid, 0);
      for (let i = 0; i < 3; i++) await f.getByRole('button', { name: 'Lay down the next layer' }).click();
      assert.equal(await f.locator('.wpt-dgpit').count(), 0);
      await f.getByRole('button', { name: 'Dig the pit' }).click();
      const v = await vars(); assert.equal(v.n_laid, 3); assert.equal(v.pit_dug, 1);
      assert.equal(await f.locator('.wpt-dgpit').count(), 3); ok(`${width} build: layers go down bottom up, then the pit cuts all three`);
    }
    const sw = await page.frameLocator('#b').locator('body').evaluate((b) => b.scrollWidth - b.clientWidth);
    assert.ok(sw <= 0, `${mode} scrolls sideways by ${sw}`);
    await page.screenshot({ path: join(out, `dig-${mode}-${width}.png`), fullPage: true });
    await page.unroute('**/_dig-host.html');
  }
  assert.deepEqual(errors, []); ok(`${width}: no page errors`);
  await page.close();
}
await browser.close(); srv.close();
console.log(`${n} dig checks passed`);
