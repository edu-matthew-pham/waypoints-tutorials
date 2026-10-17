// Convert existing lesson frontmatter clip instructions to the experimental browser editor format.
// Usage: node tools/export-browser-clip.mjs --lesson code/... --step step-1 [--out clip.json]
// This does not change lesson metadata or the production video renderer.
import { writeFileSync } from 'node:fs';
import { loadLessons, getSnippet, captionText, captionSay } from './lesson.mjs';

export function browserClip(lesson, step) {
  if (!step?.config?.clip) throw Error('Selected step has no clip instructions');
  const app = /_playground-board(?:[\s"']|$)/.test(String(lesson.app?.command || '')) ? 'physics'
    : /_playground(?:[\s"']|$)/.test(String(lesson.app?.command || '')) ? 'turtle' : null;
  if (!app) throw Error('Browser editor currently supports only Turtle and physics board');
  const query = Object.fromEntries(Object.entries(step.config.query || {}).map(([key, value]) => [key, typeof value === 'string' && value.startsWith('@') ? getSnippet(lesson.dir, value.slice(1)) : String(value)]));
  let code = query.code || '';
  const steps = [];
  const add = (type, caption = '', say = '', value = '') => steps.push({ type, caption, say, value });
  if (step.config.caption || step.config.say) add('caption', String(step.config.caption || ''), String(step.config.say || step.config.caption || ''));
  for (const action of step.config.clip) {
    const [verb, v] = Object.entries(action)[0] || [];
    if (verb === 'caption') add('caption', captionText(v), captionSay(v));
    else if (verb === 'wait') add('wait', '', '', String(v));
    else if (verb === 'type' && app === 'turtle' && v.into === 'Python code' && v.after === undefined) {
      code = (v.append ? code : '') + String(v.text || '');
      add('code', '', '', code);
    }
    else if (verb === 'click' && app === 'turtle' && v === 'Run') add('run');
    else if (verb === 'expect' && app === 'turtle' && v.selector === '#status' && v.contains === 'Finished' && steps.at(-1)?.type === 'run') { /* run waits for successful completion */ }
    else if (verb === 'show' && app === 'turtle') { code = getSnippet(lesson.dir, String(v)); add('code', '', '', code); }
    else if (verb === 'run' && app === 'turtle') add('run');
    else throw Error('Browser editor does not yet support ' + app + ' action: ' + verb);
  }
  return { format: 'waypoints-clip-draft-v1', title: lesson.title + ' — ' + (step.title || step.id), app, query, steps, source: { lesson: lesson.slug, step: step.id } };
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
