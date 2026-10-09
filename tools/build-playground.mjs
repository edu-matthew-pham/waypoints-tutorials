// Assemble the static playground into dist/_playground (our files + vendored Skulpt).
// Used by `npm run build:playground` and imported by the site build.
import { cpSync, mkdirSync, copyFileSync, rmSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Shared snippet palette (code + styles) and this playground's snippet list. */
function addSnippets(dest, name) {
  for (const f of ['snippets.js', 'snippets.css']) copyFileSync(join(root, 'playground-shared', f), join(dest, f));
  copyFileSync(join(root, 'snippets', `${name}.json`), join(dest, 'snippets.json'));
  copyFileSync(join(root, 'tools', 'modules-scan.mjs'), join(dest, 'modules-scan.mjs'));
  // Shared Python modules (modules/*.py) that lessons can offer: { name: source }
  const mods = {};
  const mdir = join(root, 'modules');
  if (existsSync(mdir)) for (const f of readdirSync(mdir)) if (f.endsWith('.py')) mods[f.slice(0, -3)] = readFileSync(join(mdir, f), 'utf8');
  writeFileSync(join(dest, 'modules.json'), JSON.stringify(mods));
}

/**
 * Version-stamp a built playground so a new deploy is never mixed with a browser's cached copy: every local
 * script and stylesheet reference (index.html src/href, JS imports) gets ?v=<hash of the playground's files>.
 * Data files (snippets.json, modules.json, unlocks.json) are fetched with cache: 'no-cache' instead.
 * Returns the hash; it is also written to version.txt for the site build's iframe URLs.
 */
export function stampPlayground(dest) {
  const files = [];
  const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) walk(p); else files.push(p); } };
  walk(dest);
  files.sort();
  const h = createHash('sha1');
  for (const f of files) if (['.js', '.mjs', '.css', '.html', '.json'].includes(extname(f))) h.update(f.slice(dest.length)).update(readFileSync(f));
  const v = h.digest('hex').slice(0, 10);
  const local = (u) => !/^[a-z]+:|^\/\//i.test(u);
  for (const f of files) {
    const ext = extname(f);
    if (ext === '.html') {
      const s = readFileSync(f, 'utf8').replace(/\b(src|href)="([^"?#]+\.(?:m?js|css))"/g, (m, a, u) => (local(u) ? `${a}="${u}?v=${v}"` : m));
      writeFileSync(f, s);
    } else if (ext === '.js' || ext === '.mjs') {
      if (f.includes(`${join('', 'vendor')}`)) continue;
      const s = readFileSync(f, 'utf8').replace(/(\bfrom\s+|\bimport\s*\(\s*)(['"])(\.\.?\/[^'"?]+\.m?js)\2/g, (m, k, q, u) => `${k}${q}${u}?v=${v}${q}`);
      writeFileSync(f, s);
    }
  }
  writeFileSync(join(dest, 'version.txt'), v);
  return v;
}

export function buildPlayground(out = 'dist') {
  const dest = join(out, '_playground');
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'playground'), dest, { recursive: true });
  addSnippets(dest, 'turtle');
  mkdirSync(join(dest, 'vendor'), { recursive: true });
  for (const f of ['skulpt.min.js', 'skulpt-stdlib.js']) {
    const src = join(root, 'node_modules', 'skulpt', 'dist', f);
    if (!existsSync(src)) throw new Error(`Missing ${src}. Run "npm ci" first.`);
    copyFileSync(src, join(dest, 'vendor', f));
  }
  stampPlayground(dest);
  return dest;
}

/** The HTML & CSS playground has no dependencies: it is copied as is. */
export function buildHtmlPlayground(out = 'dist') {
  const dest = join(out, '_playground-html');
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'playground-html'), dest, { recursive: true });
  addSnippets(dest, 'html');
  stampPlayground(dest);
  return dest;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist';
  console.log('Playground built into ' + buildPlayground(out));
  console.log('HTML playground built into ' + buildHtmlPlayground(out));
}
