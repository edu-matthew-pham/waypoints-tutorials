import {PLAYGROUND_REGISTRY,LESSON_PROFILES,playground,inferPlayground} from './playground-registry.mjs';
import {starterFiles} from './lesson-starters.mjs';
import {setupBoardPicker} from './board-picker.mjs';
import {snippetFrom} from './lesson-core.mjs';
import {authoringPrompt} from './authoring-prompt.mjs';
import {setupNodePicker} from './node-picker.mjs';
import {primerFromNodes,nodesPromptText} from './kit-nodes.mjs';
const $=id=>document.getElementById(id);
export function setupAuthoring(controller){
 for(const [id,profile]of Object.entries(LESSON_PROFILES)){const opt=document.createElement('option');opt.value=id;opt.textContent=profile.label;$('authorProfile').append(opt)}
 for(const p of PLAYGROUND_REGISTRY){const opt=document.createElement('option');opt.value=p.id;opt.textContent=p.label;$('authorPlayground').append(opt)}
 const none=document.createElement('option');none.value='none';none.textContent='No playground (text and checks)';$('authorPlayground').append(none);
 const picker=setupBoardPicker(entry=>{$('authorPlayground').value=entry.playground;changed()});
 const nodes=setupNodePicker({onChange:()=>changed(),useDesign:(key,value)=>controller.writeDesign?.(key,value)});
 // With waypoints chosen and the Primer structure, the starter is pre-filled from them (tools/kit-nodes.mjs); anchors stay optional.
 const nodeStarter=()=>nodes.nodes().length&&$('authorProfile').value==='primer'?primerFromNodes(nodes.nodes(),nodes.pick(),nodes.kit()):null;
 const settings=()=>({nodeText:nodesPromptText(nodes.nodes(),nodes.pick(),nodes.kit()),nodeStarter:nodeStarter(),title:$('authorTopic').value.trim()||'My lesson',profile:$('authorProfile').value,playgroundId:$('authorPlayground').value,subject:$('authorSubject').value,audience:$('authorAudience').value.trim(),goal:$('authorGoal').value.trim(),scope:$('authorScope').value,board:picker.selected(),boardCatalogue:picker.catalogue(),courseContext:{title:$('courseTitle').value,summary:$('courseSummary').value,lessons:[...$('courseLesson').options].map(o=>o.textContent)}});
 function changed(){
  picker.sync($('authorPlayground').value);
  const p=playground($('authorPlayground').value);
  $('authorCapabilities').textContent=p?`${p.label}: ${p.recording==='automatic'?'automated preview and tab recording':'manual tab recording'}. ${p.note||''}`:'Text and checks only; no interactive preview to record.';
  controller.setStarterFactory(title=>nodeStarter()||starterFiles({...settings(),title:$('authorTopic').value.trim()||title}));
 }
 $('authorSubject').onchange=()=>{const defaults={code:['coding','turtle'],maths:['maths','board'],science:['science','science'],engineering:['design','board'],english:['primer','none'],hass:['primer','none'],general:['inquiry','board']}[$('authorSubject').value];$('authorProfile').value=defaults[0];$('authorPlayground').value=defaults[1];changed()};
 $('authorProfile').onchange=$('authorPlayground').onchange=changed;
 $('newFromSettings').onclick=async()=>{await picker.ready;if(['board','science'].includes($('authorPlayground').value)&&!picker.selected()){$('authorStatus').textContent='Load the board catalogue before adding this starter.';return}changed();$('addLesson').click();$('authorStatus').textContent='Added a new lesson starter. Edit its topic, activities and questions before sharing.'};
 async function prompt(copy){
  try{
   await picker.ready;if(['board','science'].includes($('authorPlayground').value)&&!picker.selected())throw Error('Board catalogue unavailable. Retry before copying a board prompt.');
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
  let widget=null;try{const activity=lesson.steps.flatMap(s=>[s,...(s.tasks||[])]).find(s=>s.config.try);if(activity){const source=snippetFrom(name=>controller.getFiles()[name]??lesson.inline?.[name],activity.config.try.starter||activity.config.code);widget=/^\s*widget:\s*([\w-]+)/m.exec(source)?.[1]||null}}catch{}
  const key=JSON.stringify([id,lesson.language,lesson.shape,lesson.app,widget]);if(key===last)return;last=key;
  const profile=lesson.shape==='primer'?'primer':lesson.shape==='design'?'design':lesson.language==='maths'?'maths':lesson.language==='science'?'science':lesson.shape==='5e'?'inquiry':lesson.steps?.length&&lesson.steps.every(s=>s.config.stage==='info')?'reading':'coding';
  $('authorSubject').value={coding:'code',maths:'maths',science:'science',design:'engineering',inquiry:'general',reading:'general',primer:['english','hass'].includes($('authorSubject').value)?$('authorSubject').value:'hass'}[profile];$('authorProfile').value=profile;
  $('authorPlayground').value=inferPlayground(lesson)||'none';
  picker.sync($('authorPlayground').value,widget);
  if(!$('authorTopic').value)$('authorTopic').value=lesson.title;
  // Synchronising an existing lesson does not change it or the default Add lesson behaviour.
  const p=playground($('authorPlayground').value);$('authorCapabilities').textContent=p?`${p.label}: ${p.recording==='automatic'?'automated preview and tab recording':'manual tab recording'}. ${p.note||''}`:'This lesson has no recognised browser playground.';
 }
 // "Make a primer for this" (a teacher pointer page links to Create with ?node=AC9HH7S03.1): choose the node, switch to the
 // Primer structure with no playground, and return the pre-filled starter for the caller to add as a new lesson.
 async function openNode(param){
  const node=await nodes.addParam(param);
  const subject=nodes.createSubject();if(subject)$('authorSubject').value=subject;
  $('authorProfile').value='primer';$('authorPlayground').value='none';
  // Opening a waypoint starts a new lesson, so its topic and goal replace whatever the last lesson left there.
  $('authorTopic').value=node.label.replace(/\s+[—–-]\s+.*$/,'');
  $('authorGoal').value=node.checkpoint;
  $('nodePanel').open=true;changed();
  return nodeStarter();
 }
 return {settings,sync,openNode,nodes};
}
