// Convert existing lesson frontmatter clip instructions to the experimental browser editor format.
// Usage: node tools/export-browser-clip.mjs --lesson code/... --step step-1 [--out clip.json]
// This does not change lesson metadata or the production video renderer.
import { writeFileSync } from 'node:fs';
import { browserClip as convertBrowserClip } from '../create/browser-clip.mjs';
import { loadLessons, getSnippet } from './lesson.mjs';

export function browserClip(lesson, step) {
  return convertBrowserClip(lesson, step, ref => getSnippet(lesson.dir, ref));
}

const args = process.argv.slice(2);
if (args.includes('--lesson')) {
  const val = key => args[args.indexOf(key) + 1];
  const matches = loadLessons(val('--lesson'));
  if (matches.length !== 1) throw Error('Expected exactly one lesson, found ' + matches.length);
  const lesson = matches[0];
  const candidates = [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])].filter(s => s.config.clip);
  const step = args.includes('--step') ? candidates.find(s => s.id === val('--step')) : candidates[0];
  if (!step) throw Error('No matching clip step. Available: ' + candidates.map(s => s.id).join(', '));
  const json = JSON.stringify(browserClip(lesson, step), null, 2);
  if (args.includes('--out')) { writeFileSync(val('--out'), json + '\n'); console.log('Exported ' + lesson.slug + '/' + step.id); }
  else console.log(json);
}
