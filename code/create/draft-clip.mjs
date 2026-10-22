import { snippetFrom } from './lesson-core.mjs?v=8f2bb9b51c';
import { browserClip } from './browser-clip.mjs?v=8f2bb9b51c';
export function draftBrowserClip(files, lesson, step) {
  const read = name => files[name] ?? lesson.inline?.[name];
  const draft = browserClip(lesson, step, ref => snippetFrom(read, ref));
  if(draft.app === 'turtle' && lesson.modules.length) {
    draft.query.use = lesson.modules.join(',');
    draft.query.mods = JSON.stringify(Object.fromEntries(lesson.modules.filter(name => read(name+'.py') !== undefined).map(name => [name, read(name+'.py')])));
  }
  return draft;
}
