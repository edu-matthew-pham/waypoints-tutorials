// One converter for repository lessons and unpublished browser drafts.
const captionText = v => v && typeof v === 'object' ? String(v.text ?? '') : String(v ?? '');
const captionSay = v => v && typeof v === 'object' && v.say !== undefined ? String(v.say) : captionText(v);
export function browserClip(lesson, step, snippet) {
  if (!step?.config?.clip) throw Error('Selected step has no clip instructions');
  const app = /_playground-board(?:[\s"']|$)/.test(String(lesson.app?.command || '')) ? 'physics'
    : /_playground(?:[\s"']|$)/.test(String(lesson.app?.command || '')) ? 'turtle' : null;
  if (!app) throw Error('Browser editor currently supports only Turtle and physics board');
  const query = Object.fromEntries(Object.entries(step.config.query || {}).map(([key, value]) => [key, typeof value === 'string' && value.startsWith('@') ? snippet(value.slice(1)) : String(value)]));
  let code = query.code || '';
  const steps = [];
  const add = (type, caption = '', say = '', value = '') => steps.push({ type, caption, say, value });
  if (step.config.caption || step.config.say) add('caption', String(step.config.caption || ''), String(step.config.say || step.config.caption || ''));
  for (const action of step.config.clip) {
    const [verb, v] = Object.entries(action)[0] || [];
    if (verb === 'caption') add('caption', captionText(v), captionSay(v));
    else if (verb === 'wait') add('wait', '', '', String(v));
    else if (verb === 'type' && app === 'turtle' && v.into === 'Python code' && v.after === undefined) {
      const text = typeof v.text === 'string' && v.text.startsWith('@') ? snippet(v.text.slice(1)) : String(v.text || '');
      code = (v.append ? code : '') + text;
      add('code', '', '', code);
    }
    else if (verb === 'click' && app === 'turtle' && v === 'Run') add('run');
    else if (verb === 'expect' && app === 'turtle' && v.selector === '#status' && v.contains === 'Finished' && steps.at(-1)?.type === 'run') { /* run waits for successful completion */ }
    else if (verb === 'show' && app === 'turtle') { code = snippet(String(v)); add('code', '', '', code); }
    else if (verb === 'run' && app === 'turtle') add('run');
    else throw Error('Browser editor does not yet support ' + app + ' action: ' + verb);
  }
  return { format: 'waypoints-clip-draft-v1', title: lesson.title + ' — ' + (step.title || step.id), app, query, steps, source: { lesson: lesson.slug, step: step.id } };
}

