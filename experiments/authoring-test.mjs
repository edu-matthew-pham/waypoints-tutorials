import assert from 'node:assert/strict';
import {PLAYGROUND_REGISTRY,PLAYGROUNDS,inferPlayground,LESSON_PROFILES} from '../tools/playground-registry.mjs';
import {starterFiles} from '../create/lesson-starters.mjs';
import {authoringPrompt} from '../create/authoring-prompt.mjs';
import {parseLessonText,validateLessonCore,snippetFrom} from '../tools/lesson-core.mjs';
import {browserClip} from '../create/browser-clip.mjs';
for(const p of [...PLAYGROUND_REGISTRY,{id:'none'}])for(const profile of Object.keys(LESSON_PROFILES)){
 const files=starterFiles({profile,playgroundId:p.id,title:'A topic: "quoted"'}),lesson=parseLessonText(files['lesson.md'],'test');
 assert.deepEqual(validateLessonCore(lesson,n=>files[n]),[],`${profile}/${p.id} schema`);
 if(p.id!=='none'){
  const step=lesson.steps.find(s=>s.config.try);assert.ok(snippetFrom(n=>files[n],step.config.try.starter));assert.equal(inferPlayground(lesson,step),p.id);
  step.config.clip=[{caption:'Observe'},{wait:100}];const draft=browserClip(lesson,step,ref=>snippetFrom(n=>files[n],ref));assert.equal(draft.mode==='manual',p.recording==='manual');
 }
 const prompt=authoringPrompt({profile,playgroundId:p.id,title:'My topic',scope:'lesson'},{common:'schema',maths:'maths',science:'science',design:'method'});assert.match(prompt,/FILE: lesson.md/);assert.match(prompt,/My topic/);
}
assert.deepEqual(PLAYGROUNDS.maths,PLAYGROUNDS.board);
console.log('All subject profiles, starter schemas, playground inference and prompt examples passed');
