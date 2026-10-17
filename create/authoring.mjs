import {PLAYGROUND_REGISTRY,LESSON_PROFILES,playground,inferPlayground} from './playground-registry.mjs';
import {starterFiles} from './lesson-starters.mjs';
import {authoringPrompt} from './authoring-prompt.mjs';
const $=id=>document.getElementById(id);
export function setupAuthoring(controller){
 for(const [id,profile]of Object.entries(LESSON_PROFILES)){const opt=document.createElement('option');opt.value=id;opt.textContent=profile.label;$('authorProfile').append(opt)}
 for(const p of PLAYGROUND_REGISTRY){const opt=document.createElement('option');opt.value=p.id;opt.textContent=p.label;$('authorPlayground').append(opt)}
 const none=document.createElement('option');none.value='none';none.textContent='No playground (text and checks)';$('authorPlayground').append(none);
 const settings=()=>({title:$('authorTopic').value.trim()||'My lesson',profile:$('authorProfile').value,playgroundId:$('authorPlayground').value,subject:$('authorSubject').value,audience:$('authorAudience').value.trim(),goal:$('authorGoal').value.trim(),scope:$('authorScope').value,courseContext:{title:$('courseTitle').value,summary:$('courseSummary').value,lessons:[...$('courseLesson').options].map(o=>o.textContent)}});
 function changed(){
  const p=playground($('authorPlayground').value);
  $('authorCapabilities').textContent=p?`${p.label}: ${p.recording==='automatic'?'automated preview and tab recording':'manual tab recording'}. ${p.note||''}`:'Text and checks only; no interactive preview to record.';
  controller.setStarterFactory(title=>starterFiles({...settings(),title:$('authorTopic').value.trim()||title}));
 }
 $('authorSubject').onchange=()=>{const defaults={code:['coding','turtle'],maths:['maths','board'],science:['science','science'],engineering:['design','board'],general:['inquiry','board']}[$('authorSubject').value];$('authorProfile').value=defaults[0];$('authorPlayground').value=defaults[1];changed()};
 $('authorProfile').onchange=$('authorPlayground').onchange=changed;
 $('newFromSettings').onclick=()=>{changed();$('addLesson').click();$('authorStatus').textContent='Added a new lesson starter. Edit its topic, activities and questions before sharing.'};
 async function prompt(copy){
  try{
   const response=await fetch('./authoring-guidance.json',{cache:'no-cache'});if(!response.ok)throw Error('Authoring reference unavailable');
   const text=authoringPrompt(settings(),await response.json());$('lessonPrompt').value=text;
   $('promptDetails').open=true;
   if(copy){try{await navigator.clipboard.writeText(text);$('authorStatus').textContent='Prompt copied. Paste it into your preferred AI assistant, then import its Markdown here.'}catch{$('lessonPrompt').focus();$('lessonPrompt').select();$('authorStatus').textContent='Prompt ready. Copy the selected text with your browser’s Copy command.'}}
   else $('authorStatus').textContent='Review the prompt below. It includes your brief, the current format and a matching starter.';
  }catch(error){$('authorStatus').textContent='Could not prepare prompt: '+error.message}
 }
 $('copyLessonPrompt').onclick=()=>prompt(true);$('showLessonPrompt').onclick=()=>prompt(false);
 let last='';
 function sync(lesson,id){
  const key=JSON.stringify([id,lesson.language,lesson.shape,lesson.app]);if(key===last)return;last=key;
  const profile=lesson.shape==='design'?'design':lesson.language==='maths'?'maths':lesson.language==='science'?'science':lesson.shape==='5e'?'inquiry':'coding';
  $('authorSubject').value={coding:'code',maths:'maths',science:'science',design:'engineering',inquiry:'general'}[profile];$('authorProfile').value=profile;
  $('authorPlayground').value=inferPlayground(lesson)||'none';
  if(!$('authorTopic').value)$('authorTopic').value=lesson.title;
  // Synchronising an existing lesson does not change it or the default Add lesson behaviour.
  const p=playground($('authorPlayground').value);$('authorCapabilities').textContent=p?`${p.label}: ${p.recording==='automatic'?'automated preview and tab recording':'manual tab recording'}. ${p.note||''}`:'This lesson has no recognised browser playground.';
 }
 return {settings,sync};
}
