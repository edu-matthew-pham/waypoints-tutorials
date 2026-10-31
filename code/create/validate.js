import {validateLessonSource,validationReport} from './lesson-validation.mjs?v=59ba610f20';
import {snippetId,FEATURES} from './lesson-core.mjs?v=59ba610f20';
const $=id=>document.getElementById(id);
let files=Object.create(null),source='lesson.md',known,shared,ready=false,loading=false,revision=0;
function invalidate(message='Source changed. Validate again for an updated report.') {
  $('copyReport').disabled=true;$('validatorResult').hidden=true;$('reportText').value='';
  $('validatorStatus').textContent=message;
}
function fileList() {
  $('supportCount').textContent=`(${Object.keys(files).length})`;
  $('supportFiles').replaceChildren(...Object.keys(files).sort().map(name=>{
    const item=document.createElement('li'),label=document.createElement('span'),remove=document.createElement('button');
    label.textContent=name;remove.type='button';remove.textContent='Remove';remove.setAttribute('aria-label','Remove '+name);
    remove.onclick=()=>{delete files[name];fileList();invalidate()};item.append(label,remove);return item;
  }));
}
$('lessonSource').oninput=()=>{revision++;invalidate()};
$('chooseFiles').onclick=()=>$('sourceFiles').click();
$('sourceFiles').onchange=async event=>{
  const selected=[...event.target.files];if(!selected.length)return;
  const token=++revision;loading=true;$('validateLesson').disabled=true;invalidate('Reading files…');
  try {
    const names=new Set();
    for(const file of selected){
      if(file.name.endsWith('.zip'))throw Error('Upload Markdown and source files here. Open lesson/course ZIP packages in Create.');
      if(names.has(file.name))throw Error('Select files from one lesson, with unique filenames.');names.add(file.name);
    }
    const markdown=selected.filter(file=>/\.md$/i.test(file.name));
    const main=selected.find(file=>file.name==='lesson.md')||(markdown.length===1?markdown[0]:null);
    if(!main&&markdown.length>1)throw Error('Name the main lesson file lesson.md, or paste its Markdown and upload supporting files separately.');
    const loaded=await Promise.all(selected.map(async file=>[file.name,await file.text()]));
    if(token!==revision)return; // Do not overwrite text entered while files were being read.
    const next=main?Object.create(null):Object.assign(Object.create(null),files);
    for(const [name,text]of loaded)if(name!==main?.name)next[name]=text;
    files=next;
    if(main){source=main.name;$('lessonSource').value=loaded.find(([name])=>name===main.name)[1]}
    fileList();$('supportDetails').open=Object.keys(files).length>0;invalidate('Files loaded. Ready to validate.');
  } catch(error) {$('validatorStatus').textContent=error.message;}
  finally {loading=false;$('validateLesson').disabled=!ready;event.target.value='';}
};
$('clearSource').onclick=()=>{
  revision++;files=Object.create(null);source='lesson.md';$('lessonSource').value='';fileList();invalidate('Paste or upload a lesson to begin.');$('lessonSource').focus();
};
$('validateLesson').onclick=()=>{
  if(!ready||loading)return;
  const {result}=validateLessonSource($('lessonSource').value,{source,read:name=>files[name],known,shared});
  const report=validationReport([result]);$('reportText').value=JSON.stringify(report,null,2);
  $('validatorResult').hidden=false;$('validatorResult').dataset.valid=String(report.valid);
  $('resultTitle').textContent=report.valid?'Lesson format passed':`${result.errors.length} format error${result.errors.length===1?'':'s'} to fix`;
  $('validatorErrors').replaceChildren(...result.errors.map(error=>{const li=document.createElement('li');li.textContent=error;return li}));
  $('validatorStatus').textContent=report.valid?`${result.title} · ${result.steps} step${result.steps===1?'':'s'} checked.`:'Copy the report back to your chat, fix the files, then validate again.';
  $('copyReport').disabled=false;$('resultTitle').focus();
};
$('copyReport').onclick=async()=>{
  try {await navigator.clipboard.writeText($('reportText').value);$('validatorStatus').textContent='Validation report copied. Paste it into your chat.';}
  catch {$('reportDetails').open=true;$('reportText').focus();$('reportText').select();$('validatorStatus').textContent='Select and copy the report below.';}
};
try {
  const response=await fetch(new URL('validator-reference.json',import.meta.url),{cache:'no-cache'});
  if(!response.ok)throw Error('Validation data unavailable');
  const refs=await response.json();shared=refs.shared;
  known=Object.fromEntries(Object.entries(refs.snippets).map(([kind,data])=>[kind,new Set(data.groups.flatMap(g=>g.items.map(item=>snippetId(item.label))))]));
  if(known.turtle)for(const feature of FEATURES)known.turtle.add(feature.id);
  ready=true;$('validateLesson').disabled=loading;invalidate('Paste or upload a lesson to begin.');
} catch {$('validatorStatus').textContent='Could not load validation data. Reload this page to try again.';}
