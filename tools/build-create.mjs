// Assemble dist/code/create/: the in-browser lesson maker. It reuses the exact parse/validate/render
// modules the site build uses, plus vendored marked and yaml (ES modules, no CDN).
import { cpSync, mkdirSync, copyFileSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLessons, loadDirMeta, CONTENT_ROOT } from './lesson.mjs';
import { projectIdeas } from './project-ideas.mjs';
import { browserClip } from './export-browser-clip.mjs';
import { buildBoardCatalogue } from './board-catalogue.mjs';
import { FORMS_JS, NUMBAS_VERSION } from './maths-forms.mjs';
import { stampPlayground } from './build-playground.mjs';
import { buildValidator } from './build-validator.mjs';
import { compactCurriculum, KIT_SUBJECTS } from './kit-nodes.mjs';
import { loadReview } from './pointer-pages.mjs';
import { existsSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export async function buildCreate(out = 'dist') {
  const dest = join(out, 'code', 'create'); // each subject gets its own maker: /code/create/, later /maths/create/
  rmSync(join(out, 'create'), { recursive: true, force: true });
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(root, 'create'), dest, { recursive: true });
  const lessons=loadLessons();
  writeFileSync(join(dest,'board-catalogue.json'),JSON.stringify(buildBoardCatalogue(lessons)));
  // Ideas to lessons for the "Start from a project" prompt (tools/project-ideas.mjs, create/project-prompt.md).
  const site = (process.env.SITE_URL || 'https://tutorials.learningwaypoints.com').replace(/\/$/, '');
  const codeMeta = loadDirMeta(join(CONTENT_ROOT, 'code'));
  const courseTitle = (p) => { try { return loadDirMeta(join(CONTENT_ROOT, p)).title || p; } catch { return p; } };
  writeFileSync(join(dest,'project-ideas.json'),JSON.stringify(projectIdeas(codeMeta.pathways || [], lessons, courseTitle, site), null, 1));
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
  for (const lesson of lessons) {
    for (const step of [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])]) {
      if (!step.config?.clip) continue;
      try { clips.push(browserClip(lesson, step)); } catch { /* Unsupported browser action; production renderer remains authoritative. */ }
    }
  }
  writeFileSync(join(dest, 'lesson-clips.json'), JSON.stringify(clips));
  // Kit node data for the node picker and "Make a primer for this" (create/node-picker.mjs): a compact copy of each
  // imported subject (data/curriculum/), with its review status, so Create never needs Kit.
  mkdirSync(join(dest, 'curriculum'), { recursive: true });
  const subjects = [];
  for (const { id } of KIT_SUBJECTS) {
    const f = join(root, 'data', 'curriculum', `${id}.json`);
    if (!existsSync(f)) continue;
    const c = compactCurriculum(JSON.parse(readFileSync(f, 'utf8')), loadReview(id, root));
    writeFileSync(join(dest, 'curriculum', `${id}.json`), JSON.stringify(c));
    subjects.push({ id, label: c.label, status: c.status, kit: c.kit, years: [...new Set(c.descriptors.map((d) => d.year))].sort((a, b) => a - b) });
  }
  writeFileSync(join(dest, 'curriculum', 'index.json'), JSON.stringify(subjects));
  for (const f of ['kit-nodes.mjs', 'lesson-core.mjs', 'lesson-validation.mjs', 'lesson-view.mjs', 'playground-registry.mjs', 'modules-scan.mjs', 'math-expr.mjs', 'maths.mjs', 'diagram-core.mjs', 'context-core.mjs']) copyFileSync(join(root, 'tools', f), join(dest, f));
  const validatorVersion=await buildValidator(dest);
  for(const file of ['index.html','validate.html']) {
    const page=join(dest,file);
    writeFileSync(page,readFileSync(page,'utf8').replaceAll('href="validator.zip"',`href="validator.zip?v=${validatorVersion.slice(0,12)}"`));
  }
  // highlight.cjs is a plain function declaration; expose it as an ES module for the browser.
  writeFileSync(join(dest, 'highlight.js'), readFileSync(join(root, 'tools', 'highlight.cjs'), 'utf8').replace(/^if \(typeof module[^\n]*$/m, '') + '\nexport { highlightCode };\n');
  mkdirSync(join(dest, 'vendor'), { recursive: true });
  copyFileSync(join(root, 'node_modules', 'marked', 'lib', 'marked.esm.js'), join(dest, 'vendor', 'marked.esm.js'));
  cpSync(join(root, 'node_modules', 'yaml', 'browser'), join(dest, 'vendor', 'yaml'), { recursive: true });
  copyFileSync(join(root, 'node_modules/katex/dist/katex.mjs'), join(dest, 'vendor/katex.mjs'));
  copyFileSync(join(root, 'vendor/mermaid/mermaid.min.js'), join(dest, 'vendor/mermaid.min.js'));   // diagrams in the preview (tools/diagram-core.mjs)
  writeFileSync(join(dest,'maths-forms-browser.mjs'),`export const forms=${JSON.stringify({js:FORMS_JS,src:'_numbas/numbas-jme.min.js?v='+NUMBAS_VERSION()})};`);
  // Version the editor entry points and local imports so a deploy cannot reuse an older recorder script.
  stampPlayground(dest);
  // Old address: forward to the new one, keeping any #l=... share link.
  mkdirSync(join(out, 'create'), { recursive: true });
  writeFileSync(join(out, 'create', 'index.html'), '<!doctype html><meta charset="utf-8"><title>Moved</title><script>location.replace("../code/create/"+location.hash)</script><a href="../code/create/">Moved to /code/create/</a>');
  return dest;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  console.log('Create page built into ' + await buildCreate(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'dist'));
}
