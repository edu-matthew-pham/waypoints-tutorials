// Assemble the static playground into dist/_playground (our files + vendored Skulpt).
// Used by `npm run build:playground` and imported by the site build.
import { cpSync, mkdirSync, copyFileSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export function buildPlayground(out = 'dist') {
  const dest = join(out, '_playground');
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'playground'), dest, { recursive: true });
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
  return dest;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist';
  console.log('Playground built into ' + buildPlayground(out));
  console.log('HTML playground built into ' + buildHtmlPlayground(out));
}
