// Run after a build: node experiments/civics-checks-smoke.mjs (serves dist/, needs Chromium at /opt/pw-browsers/chromium).
// Clicks every non-board check in the Year 7 Civics lessons and the HASS catch-up:
// a wrong answer first (must be rejected), then the stored answer (must pass).
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.png': 'image/png' };
const srv = http.createServer(async (q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  try { const b = await readFile(join('dist', p)); r.writeHead(200, { 'content-type': T[p.slice(p.lastIndexOf('.'))] || 'application/octet-stream' }); r.end(b); } catch { r.writeHead(404); r.end(); } }).listen(0);
await new Promise((ok) => srv.on('listening', ok));
const base = `http://localhost:${srv.address().port}`;
const lessons = [];
for (const c of ['government-7', 'democracy-7', 'law-7', 'diversity-7', 'perspectives-7', 'values-7'])
  for (const d of await readdir(`content/civics/${c}`, { withFileTypes: true })) if (d.isDirectory() && !['class', 'primers', 'practice'].includes(d.name)) lessons.push(`civics/${c}/${d.name}`);
lessons.push('hass/before-year-7/three-levels');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
let fails = 0; const fail = (m) => { fails++; console.log('FAIL', m); };
const tot = {};
for (const slug of lessons) {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } }); const pg = await ctx.newPage();
  const errs = []; pg.on('pageerror', (e) => errs.push(e.message));
  const res = await pg.goto(`${base}/${slug}/`); if (res.status() !== 200) { fail(`${slug} ${res.status()}`); continue; }
  await pg.waitForTimeout(400);
  for (const d of await pg.$$('details')) await d.evaluate((e) => { e.open = true; });
  const count = {};
  const checks = await pg.$$('.check');
  for (const c of checks) {
    const ty = await c.getAttribute('data-type');
    const label = `${slug} ${ty} "${(await c.evaluate((e) => (e.querySelector('.check-q,legend')?.textContent || '').trim())).slice(0, 50)}"`;
    const done = () => c.evaluate((e) => e.classList.contains('done'));
    const msg = () => c.evaluate((e) => e.querySelector('.msg')?.textContent.trim() || '');
    try {
      if (ty === 'question') {
        const ans = await c.getAttribute('data-answer'); const radios = await c.$$('input[type=radio]');
        const vals = await Promise.all(radios.map((r) => r.getAttribute('value')));
        const wi = vals.findIndex((v) => v !== ans), ai = vals.findIndex((v) => v === ans);
        await radios[wi].evaluate((r) => { r.checked = true; }); await c.$eval('button', (x) => x.click());
        if (await done()) fail(label + ' accepted a wrong answer'); else if (!(await msg())) fail(label + ' no feedback');
        await radios[ai].evaluate((r) => { r.checked = true; }); await c.$eval('button', (x) => x.click());
        if (!(await done())) fail(label + ' rejected its answer');
      } else if (ty === 'bug') {
        const good = JSON.parse(await c.getAttribute('data-answers')).map(String);
        const lines = await c.$$eval('.buglines button', (bs) => bs.map((b) => b.dataset.line));
        const wl = lines.find((l) => !good.includes(String(l)));
        await c.$eval(`button[data-line="${wl}"]`, (x) => x.click());
        if (await done()) fail(label + ' accepted line ' + wl);
        for (const g of good) await c.$eval(`button[data-line="${g}"]`, (x) => x.click());
        if (!(await done())) fail(label + ' rejected its line');
      } else if (ty === 'sort' || ty === 'match') {
        const want = JSON.parse(await c.getAttribute('data-answers'));
        const sels = await c.$$('select'); const pick = (s, v) => s.evaluate((e, v) => { e.value = v; }, v);
        if (sels.length !== want.length) fail(`${label} ${sels.length} selects for ${want.length} answers`);
        // wrong: shift the first one to another option
        const opts = await sels[0].$$eval('option', (os) => os.map((o) => o.value).filter(Boolean));
        for (const [i, s] of sels.entries()) await pick(s, want[i]);
        await pick(sels[0], opts.find((o) => o !== want[0]));
        await c.$eval('button', (x) => x.click());
        if (await done()) fail(label + ' accepted a wrong sort');
        await pick(sels[0], want[0]);
        await c.$eval('button', (x) => x.click());
        if (!(await done())) fail(label + ' rejected its answers');
        for (const [i, s] of sels.entries()) { const o = await s.$$eval('option', (os) => os.map((x) => x.value)); if (!o.includes(want[i])) fail(`${label} answer "${want[i]}" not an option`); }
      } else if (ty === 'parsons') {
        const lines = JSON.parse(await c.getAttribute('data-lines'));
        const add = async (t) => c.evaluate((e, t) => { const b = [...e.querySelectorAll('.ppool button.piece')].find((b) => b.textContent === t); if (!b) return false; b.click(); return true; }, t);
        for (const t of [...lines].reverse()) await add(t);
        await c.$eval('.pcheck', (x) => x.click());
        if (lines.length > 1 && await done()) fail(label + ' accepted reverse order');
        await c.$eval('.preset', (x) => x.click());
        for (const t of lines) if (!(await add(t))) fail(label + ' piece missing: ' + t);
        await c.$eval('.pcheck', (x) => x.click());
        if (!(await done())) fail(label + ' rejected the right order: ' + (await msg()));
      } else if (ty === 'predict') {
        const r = await c.$('input[type=radio]');
        await c.$eval('button', (x) => x.click());
        if (!/prediction first/i.test(await msg())) fail(label + ' locked with nothing chosen');
        if (r) await r.evaluate((x) => { x.checked = true; }); else await c.$eval('input.pin', (x) => { x.value = '1'; });
        await c.$eval('button', (x) => x.click());
        if (!/Locked in/.test(await msg())) fail(label + ' did not lock: ' + (await msg()));
      } else if (ty === 'reasoning') {
        const ta = await c.$('.rs-in');
        if (ta) { await c.$eval('.rs-go', (x) => x.click()); if (await done()) fail(label + ' passed with nothing written'); await ta.fill('My view and a reason.'); }
        await c.$eval('.rs-go', (x) => x.click());
        if (!(await done())) fail(label + ' did not pass: ' + (await msg()));
        if (await c.$eval('.rs-model', (m) => m.hidden)) fail(label + ' model answer not shown');
      } else if (ty === 'reflect') {
        await c.$eval('input[type=checkbox]', (x) => x.click());
        if (!(await done())) fail(label + ' tick did not count');
      } else if (ty === 'board') { /* boards: check-lesson-boards and the board smokes */ }
      else fail(label + ' type not handled');
    } catch (e) { fail(label + ' threw ' + e.message.split('\n')[0]); }
    count[ty] = (count[ty] || 0) + 1; tot[ty] = (tot[ty] || 0) + 1;
  }
  if (errs.length) fail(`${slug} page errors: ${errs.join(' | ')}`);
  console.log(slug.padEnd(55), Object.entries(count).map(([k, v]) => `${k} ${v}`).join(', '));
  await ctx.close();
}
console.log('\nTotals:', Object.entries(tot).map(([k, v]) => `${k} ${v}`).join(', '));
console.log(fails ? fails + ' FAILED' : 'ALL OK'); await browser.close(); srv.close(); process.exit(fails ? 1 : 0);
