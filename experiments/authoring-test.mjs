import assert from 'node:assert/strict';
import {PLAYGROUND_REGISTRY,PLAYGROUNDS,inferPlayground,LESSON_PROFILES} from '../tools/playground-registry.mjs';
import {starterFiles} from '../create/lesson-starters.mjs';
import {authoringPrompt} from '../create/authoring-prompt.mjs';
import {parseLessonText,validateLessonCore,snippetFrom} from '../tools/lesson-core.mjs';
import {browserClip} from '../create/browser-clip.mjs';
for(const p of [...PLAYGROUND_REGISTRY,{id:'none'}])for(const profile of Object.keys(LESSON_PROFILES)){
 const files=starterFiles({profile,playgroundId:p.id,title:'A topic: "quoted"'}),lesson=parseLessonText(files['lesson.md'],'test');
 assert.deepEqual(validateLessonCore(lesson,n=>files[n]),[],`${profile}/${p.id} schema`);
 if(p.id==='none')assert.equal(inferPlayground(lesson),null,'Text-only starters stay text-only');
 if(p.id!=='none'){
  const step=lesson.steps.find(s=>s.config.try);assert.ok(snippetFrom(n=>files[n],step.config.try.starter));assert.equal(inferPlayground(lesson,step),p.id);
  step.config.clip=[{caption:'Observe'},{wait:100}];const draft=browserClip(lesson,step,ref=>snippetFrom(n=>files[n],ref));assert.equal(draft.mode==='manual',p.recording==='manual');
 }
 const prompt=authoringPrompt({profile,playgroundId:p.id,title:'My topic',scope:'lesson'},{common:'schema',maths:'maths',science:'science',design:'method'});assert.match(prompt,/FILE: lesson.md/);assert.match(prompt,/My topic/);
}
assert.deepEqual(PLAYGROUNDS.maths,PLAYGROUNDS.board);
console.log('All subject profiles, starter schemas, playground inference and prompt examples passed');
// The starter prompt and the lesson prompt carry the same design decisions (create/design-decisions.mjs).
{const {DECISIONS_TEXT,DESIGN}=await import('../create/design-decisions.mjs');const {readFileSync}=await import('node:fs');
assert.ok(readFileSync(new URL('../create/start-prompt.md',import.meta.url),'utf8').includes(DECISIONS_TEXT),'start-prompt.md carries the design decisions');
assert.ok(authoringPrompt({title:'T',profile:Object.keys(LESSON_PROFILES)[0],playgroundId:'turtle',subject:'code',audience:'',goal:'',scope:'lesson'},{common:'',maths:'',science:'',design:''}).includes(DECISIONS_TEXT),'lesson prompt carries the design decisions');
assert.equal(DESIGN.length,5);console.log('Design decisions are in both prompts');}
// Lesson shape (create/shape-guide.mjs, 18 Oct 2026): both prompts carry the three settings; Primer and None exist;
// steps may come in any stage order; a primer uses plain step names on the page.
{const {SHAPE_TEXT}=await import('../create/shape-guide.mjs');const {readFileSync}=await import('node:fs');const {STAGE_INFO_PRIMER}=await import('../tools/lesson-view.mjs');
assert.ok(readFileSync(new URL('../create/start-prompt.md',import.meta.url),'utf8').includes(SHAPE_TEXT),'start-prompt.md carries the lesson shape guide');
const hass=authoringPrompt({title:'Sources as evidence',profile:'primer',playgroundId:'none',subject:'hass',audience:'',goal:'',scope:'lesson'},{common:'',maths:'',science:'',design:''});
assert.ok(hass.includes(SHAPE_TEXT)&&hass.includes('Subject: Humanities and social sciences'),'lesson prompt carries the shape guide and a readable subject');
for(const id of ['primer','none'])assert.equal(LESSON_PROFILES[id].shape,'primer');
const primer=starterFiles({profile:'primer',playgroundId:'none',title:'Sources'}),pl=parseLessonText(primer['lesson.md'],'p');
assert.equal(pl.shape,'primer');assert.ok(pl.steps.some(s=>s.config.check?.type==='reasoning'),'the primer starter shows the write, compare and self-check check');
const md=stages=>'---\ntitle: T\nsummary: S\nlanguage: science\nshape: primer\n---\n'+stages.map((s,i)=>`## Step ${i+1}\n\n\`\`\`step\nstage: ${s}\n\`\`\`\n\nText.\n`).join('\n');
assert.deepEqual(validateLessonCore(parseLessonText(md(['make','predict','info','investigate','predict']),'o'),()=>undefined),[],'any stage order validates');
assert.equal(STAGE_INFO_PRIMER.make[0],'Apply');
console.log('Lesson shape guide in both prompts; Primer and None starters; any stage order');}
