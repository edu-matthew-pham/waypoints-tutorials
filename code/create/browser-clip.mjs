import {inferPlayground,playground} from './playground-registry.mjs?v=1d791c7e0f';
import {manualReason} from './playground-adapters.mjs?v=1d791c7e0f';
// One converter for repository lessons and unpublished browser drafts.
const captionText = v => v && typeof v === 'object' ? String(v.text ?? '') : String(v ?? '');
const captionSay = v => v && typeof v === 'object' && v.say !== undefined ? String(v.say) : captionText(v);
export function browserClip(lesson, step, snippet) {
  if (!step?.config?.clip) throw Error('Selected step has no clip instructions');
  const id=inferPlayground(lesson,step),p=playground(id);
  if(!p)throw Error('Browser editor cannot run this custom app. Choose a built-in playground.');
  const app=p.draftApp||p.id,limitations=new Set();
  if(p.recording==='manual')limitations.add(p.note);
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
    else if (['click','type','expect','show','clear','run','press'].includes(verb)) {
      const reason=manualReason(verb,v,p);if(reason)limitations.add(reason);
      const resolved=verb==='show'?snippet(String(v)):verb==='type'?{...v,text:typeof v.text==='string'&&v.text.startsWith('@')?snippet(v.text.slice(1)):v.text}:v;
      add('action','','',JSON.stringify({[verb]:resolved}));
    }
    else throw Error('Browser editor does not yet support ' + app + ' action: ' + verb);
  }
  return { format: 'waypoints-clip-draft-v1', title: lesson.title + ' — ' + (step.title || step.id), app, query, steps, ...(limitations.size?{mode:'manual',limitations:[...limitations]}:{}), source: { lesson: lesson.slug, step: step.id } };
}

