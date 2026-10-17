// Assemble dist/code/create/: the in-browser lesson maker. It reuses the exact parse/validate/render
// modules the site build uses, plus vendored marked and yaml (ES modules, no CDN).
import { cpSync, mkdirSync, copyFileSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLessons } from './lesson.mjs';
import { browserClip } from './export-browser-clip.mjs';
import { FORMS_JS, NUMBAS_VERSION } from './maths-forms.mjs';
import { stampPlayground } from './build-playground.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export function buildCreate(out = 'dist') {
  const dest = join(out, 'code', 'create'); // each subject gets its own maker: /code/create/, later /maths/create/
  rmSync(join(out, 'create'), { recursive: true, force: true });
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'create'), dest, { recursive: true });
  const sections = text => Object.fromEntries([...text.matchAll(/^## (\d+)\.[^\n]*\n([\s\S]*?)(?=^## \d+\.|$(?![\s\S]))/gm)].map(m => [m[1], m[0]]));
  const authoring = sections(readFileSync(join(root, 'AUTHORING.md'), 'utf8'));
  const building = sections(readFileSync(join(root, 'BUILDING.md'), 'utf8'));
  writeFileSync(join(dest, 'authoring-guidance.json'), JSON.stringify({
    common: ['2','3','4','7','9','10'].map(k=>authoring[k]).join('\n'),
    maths: authoring['11'].split('- **The board**')[0] + '\nBoard setup example: widget: balance; left: x + 2; right: 5. See AUTHORING.md section 11 for other widgets.\n', science: authoring['12'],
    design: ['2','3','4','5'].map(k=>building[k]).join('\n')
  }));
  // Export supported existing frontmatter clips for direct browser selection; unsupported actions are omitted.
  const clips = [];
  for (const lesson of loadLessons()) {
    for (const step of [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])]) {
      if (!step.config?.clip) continue;
      try { clips.push(browserClip(lesson, step)); } catch { /* Unsupported browser action; production renderer remains authoritative. */ }
    }
  }
  writeFileSync(join(dest, 'lesson-clips.json'), JSON.stringify(clips));
  for (const f of ['lesson-core.mjs', 'lesson-view.mjs', 'playground-registry.mjs', 'modules-scan.mjs', 'math-expr.mjs', 'maths.mjs']) copyFileSync(join(root, 'tools', f), join(dest, f));
  // highlight.cjs is a plain function declaration; expose it as an ES module for the browser.
  writeFileSync(join(dest, 'highlight.js'), readFileSync(join(root, 'tools', 'highlight.cjs'), 'utf8').replace(/^if \(typeof module[^\n]*$/m, '') + '\nexport { highlightCode };\n');
  mkdirSync(join(dest, 'vendor'), { recursive: true });
  copyFileSync(join(root, 'node_modules', 'marked', 'lib', 'marked.esm.js'), join(dest, 'vendor', 'marked.esm.js'));
  cpSync(join(root, 'node_modules', 'yaml', 'browser'), join(dest, 'vendor', 'yaml'), { recursive: true });
  copyFileSync(join(root, 'node_modules/katex/dist/katex.mjs'), join(dest, 'vendor/katex.mjs'));
  writeFileSync(join(dest,'maths-forms-browser.mjs'),`export const forms=${JSON.stringify({js:FORMS_JS,src:'_numbas/numbas-jme.min.js?v='+NUMBAS_VERSION()})};`);
  // Version the editor entry points and local imports so a deploy cannot reuse an older recorder script.
  stampPlayground(dest);
  // Old address: forward to the new one, keeping any #l=... share link.
  mkdirSync(join(out, 'create'), { recursive: true });
  writeFileSync(join(out, 'create', 'index.html'), '<!doctype html><meta charset="utf-8"><title>Moved</title><script>location.replace("../code/create/"+location.hash)</script><a href="../code/create/">Moved to /code/create/</a>');
  return dest;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  console.log('Create page built into ' + buildCreate(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist'));
}
