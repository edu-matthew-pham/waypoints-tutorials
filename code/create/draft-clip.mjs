import { snippetFrom } from './lesson-core.mjs?v=1d791c7e0f';
import { browserClip } from './browser-clip.mjs?v=1d791c7e0f';
export function draftBrowserClip(files, lesson, step) {
  const read = name => files[name] ?? lesson.inline?.[name];
  const draft = browserClip(lesson, step, ref => snippetFrom(read, ref));
  if(draft.app === 'turtle' && lesson.modules.length) {
    draft.query.use = lesson.modules.join(',');
    draft.query.mods = JSON.stringify(Object.fromEntries(lesson.modules.filter(name => read(name+'.py') !== undefined).map(name => [name, read(name+'.py')])));
  }
  return draft;
}
