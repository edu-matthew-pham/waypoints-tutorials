// `npm run check-lesson-boards [slug-prefix ...]`: every lesson step that has a board starts it without an error, and
// each board check (`when:`) on that step uses values the board reports and does not already hold before the student
// does anything. Builds nothing: run `npm run build` first. Like check-practice, but for lesson pages: the step's
// board code is read from the built page and loaded into the real board (dist/_playground-board/) in headless Chromium.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const T = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };
const srv = http.createServer(async (q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  try { const b = await readFile(join('dist', p)); const e = p.slice(p.lastIndexOf('.')); r.writeHead(200, { 'content-type': T[e] || 'application/octet-stream' }); r.end(b); } catch { r.writeHead(404); r.end(); }
}).listen(0);
await new Promise((ok) => srv.on('listening', ok));
const port = srv.address().port;
const { MATH } = await import('./math-expr.mjs');
const prefixes = process.argv.slice(2);
const lessons = [];
async function walk(d) { for (const f of await readdir(d, { withFileTypes: true })) { const p = join(d, f.name); if (f.isDirectory()) { if (!f.name.startsWith('_')) await walk(p); } else if (f.name === 'index.html' && /^dist\/maths\//.test(p)) lessons.push(p.slice(5, -11)); } }
await walk('dist/maths');
const want = lessons.filter((l) => !prefixes.length || prefixes.some((p) => l.startsWith(p)));
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const host = await browser.newPage();
await host.route('**/_check-host.html', (r) => r.fulfill({ contentType: 'text/html', body: `<!doctype html><iframe id="b" style="width:800px;height:600px" src="/_playground-board/index.html?fresh=1&id=check&code=${encodeURIComponent('widget: balance')}"></iframe><script>window.last=null;addEventListener('message',function(e){if(e.data&&e.data.wp==='run')window.last=e.data})</script>` }));
await host.goto(`http://localhost:${port}/_check-host.html`);
await host.waitForFunction(() => document.getElementById('b').contentDocument && document.getElementById('b').contentDocument.readyState === 'complete');
const pg = await browser.newPage();
let boards = 0, checks = 0, bad = 0;
for (const l of want) {
  await pg.goto(`http://localhost:${port}/${l}/`, { waitUntil: 'domcontentloaded' });
  const steps = await pg.evaluate(() => [...document.querySelectorAll('section.step')].map((s, i) => ({
    i, frames: [...s.querySelectorAll('iframe[src*="_playground-board"]')].map((f) => new URL(f.getAttribute('src'), location.href).searchParams.get('code')),
    whens: [...s.querySelectorAll('[data-when]')].map((c) => c.getAttribute('data-when')),
  })).filter((s) => s.frames.length));
  for (const s of steps) {
    for (const code of s.frames) {
      if (!code) continue;
      boards++;
      const res = await host.evaluate((c) => { window.last = null; const fr = document.getElementById('b'); fr.contentWindow.postMessage({ wp: 'set-code', code: c }, location.origin); return new Promise((ok) => setTimeout(() => { const e = fr.contentDocument.getElementById('error'); ok({ err: e && !e.hidden ? e.textContent : '', last: window.last }); }, 400)); }, code);
      const scope = res.last && res.last.state && res.last.state.scope;
      const problems = [];
      if (res.err) problems.push(`board error: ${res.err.trim().slice(0, 140)}`);
      else if (s.whens.length && !scope) problems.push('the board sent no values to check against');
      else for (const w of s.whens) {
        checks++;
        try {
          const used = MATH.checkCondition(w).vars.filter((v) => !(v in (scope.vars || {})));
          if (used.length) problems.push(`when "${w}" uses ${used.join(', ')}, which the board does not report (it reports ${Object.keys(scope.vars || {}).join(' ')})`);
          else if (MATH.holds(w, scope)) problems.push(`when "${w}" already holds at the start`);
        } catch (e) { problems.push(`when "${w}": ${e.message}`); }
      }
      if (problems.length) { bad++; console.log(`✗ ${l} step ${s.i + 1}: ${problems.join('; ')}`); }
    }
  }
}
await browser.close(); srv.close();
console.log(bad ? `${bad} of ${boards} boards have problems (${checks} board checks read)` : `✓ ${boards} lesson boards start cleanly, ${checks} board checks read values the board reports`);
process.exit(bad ? 1 : 0);
