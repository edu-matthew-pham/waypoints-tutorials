// Render every generated deck with marp-cli and report slides whose content runs off the slide.
// Run after `npm run build`: node tools/check-decks.mjs [path part, e.g. code/python-foundations/turtle-]   (needs npx and Chromium)
import { chromium } from 'playwright-core';
import { execSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist/teach');
const out = resolve('.render-tmp/decks');
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : e.name === 'deck.md' ? [join(d, e.name)] : []));
// {{embed: URL}} is a live board in Waypoints Prepare (a 420px frame); marp-cli does not know it, so stand in a box of the same height.
const only = process.argv[2] || '';
const exe = existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined;
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
// ```mermaid blocks are drawn as Waypoints Prepare draws them (src/lib/utils/mermaid.ts): mermaid's default theme, an
// <img> of the SVG at most 400px tall. Drawn here with the copy in vendor/mermaid.
const mm = await browser.newPage();
await mm.setContent('<!doctype html><meta charset="utf-8"><body></body>');
await mm.addScriptTag({ path: resolve('vendor/mermaid/mermaid.min.js') });
await mm.evaluate(() => window.mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose', fontFamily: 'sans-serif' }));
let drawn = 0;
const drawMermaid = async (md) => {
  const parts = md.split(/(```mermaid\n[\s\S]*?```)/);
  for (let i = 1; i < parts.length; i += 2) {
    const src = parts[i].replace(/^```mermaid\n|```$/g, '');
    try {
      const svg = await mm.evaluate(async ({ src, id }) => (await window.mermaid.render(id, src)).svg, { src, id: `cd${drawn++}` });
      parts[i] = `<img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" alt="" style="max-width:100%;max-height:400px;height:auto;object-fit:contain;display:block;margin:0 auto;" />`;
    } catch (e) { bad++; console.log(`✗ a Mermaid diagram does not parse: ${String(e.message || e).split('\n')[0]}`); }
  }
  return parts.join('');
};
let bad = 0;
for (const f of walk(root).filter((f) => !only || f.includes(only))) writeFileSync(join(out, f.split('/').slice(-2, -1)[0] + '.md'), await drawMermaid(readFileSync(f, 'utf8').replace(/\{\{\s*embed:\s*\S+?\s*\}\}/g, '<div style="height:420px;border:2px dashed #999;border-radius:8px"></div>')));
await mm.close();
execSync(`npx -y @marp-team/marp-cli@4 --html --input-dir ${out} -o ${out}`, { stdio: 'ignore', timeout: 180000 });

const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
for (const f of readdirSync(out).filter((f) => f.endsWith('.html'))) {
  await page.goto('file://' + join(out, f)); await page.waitForTimeout(300);
  const over = await page.evaluate(() => [...document.querySelectorAll('section[id]')].map((s) => {
    const r = s.getBoundingClientRect(), scale = r.height / 720;
    const kids = [...s.children].filter((c) => !['STYLE', 'HEADER', 'FOOTER'].includes(c.tagName));
    return [s.id, Math.round(Math.max(0, ...kids.map((c) => c.getBoundingClientRect().bottom - r.top)) / scale)];
  }).filter(([, b]) => b > 690));
  if (over.length) { bad += over.length; console.log(`✗ ${f}: slides ${over.map(([i, b]) => `${i} (${b}px)`).join(', ')}`); }
}
await browser.close();
console.log(bad ? `${bad} slides overflow` : 'All deck slides fit.');
process.exit(bad ? 1 : 0);
