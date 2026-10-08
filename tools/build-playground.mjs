// Assemble the static playground into dist/_playground (our files + vendored Skulpt).
// Used by `npm run build:playground` and imported by the site build.
import { cpSync, mkdirSync, copyFileSync, rmSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
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
  return dest;
}

/** The HTML & CSS playground has no dependencies: it is copied as is. */
export function buildHtmlPlayground(out = 'dist') {
  const dest = join(out, '_playground-html');
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'playground-html'), dest, { recursive: true });
  addSnippets(dest, 'html');
  return dest;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist';
  console.log('Playground built into ' + buildPlayground(out));
  console.log('HTML playground built into ' + buildHtmlPlayground(out));
}
