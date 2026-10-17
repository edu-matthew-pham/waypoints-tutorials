import {playgroundURL} from './playground-registry.mjs?v=3b8bfd6780';
const $=id=>document.getElementById(id);
const labels={maths:'Maths',science:'Science',engineering:'Engineering / design',code:'Computing',ai:'AI'};
export function setupBoardPicker(onChoose){
 let catalogue=[],selected=null,family='turtle',desiredWidget=null,previewTimer;
 const status=text=>$('boardCatalogueStatus').textContent=text;
 function details(){
  const entry=selected;$('boardDetails').hidden=!entry;if(!entry)return;
  $('boardTitle').textContent=entry.title;$('boardDescription').textContent=entry.description;
  $('boardExample').textContent=entry.example;$('boardReference').textContent=entry.reference;
  const link=$('boardExampleLink');link.hidden=!entry.exampleSource.lesson;
  link.href=entry.exampleSource.lesson?'https://github.com/edu-matthew-pham/waypoints-tutorials/tree/main/content/'+entry.exampleSource.lesson:'https://github.com/edu-matthew-pham/waypoints-tutorials/blob/main/AUTHORING.md';
  clearTimeout(previewTimer);$('boardPreview').hidden=true;$('boardPreview').src='about:blank';$('boardPreviewStatus').textContent='Preview loads this example in the real playground. Some activities require devices, permissions or external services.';
 }
 function draw(){
  const query=$('boardSearch').value.trim().toLowerCase(),filter=$('boardFamily').value,subject=$('boardSubject').value;
  const visible=catalogue.filter(e=>(filter==='all'||e.playground===filter)&&(subject==='all'||e.subjects.includes(subject))&&[e.title,e.widget,e.description,...e.subjects].join(' ').toLowerCase().includes(query));
  $('boardCards').replaceChildren(...visible.map(entry=>{
   const button=document.createElement('button');button.type='button';button.className='board-card';button.dataset.board=entry.id;button.setAttribute('aria-pressed',String(selected?.id===entry.id));
   const name=document.createElement('strong'),meta=document.createElement('small'),description=document.createElement('span');name.textContent=entry.title;meta.textContent=(entry.playground==='science'?'Particle simulation':'Shared board')+' · '+entry.subjects.map(s=>labels[s]||s).join(', ');description.textContent=entry.description;
   button.append(name,meta,description);button.onclick=()=>{selected=entry;family=entry.playground;details();draw();onChoose(entry)};return button;
  }));
  status(`${visible.length} of ${catalogue.length} activities.${selected?' Selected: '+selected.title+'.':''}${!visible.length?' Try another search or filter.':''}`);
 }
 for(const id of ['boardSearch','boardFamily','boardSubject'])$(id).addEventListener(id==='boardSearch'?'input':'change',draw);
 $('previewBoard').onclick=()=>{
  if(!selected)return;
  const frame=$('boardPreview');clearTimeout(previewTimer);frame.hidden=false;frame.scrollIntoView({block:'center'});$('boardPreviewStatus').textContent='Loading '+selected.title+'…';
  frame.onload=()=>{if(frame.src==='about:blank'||frame.contentWindow.location.href!==frame.src)return;clearTimeout(previewTimer);try{const error=frame.contentDocument.querySelector('#error');$('boardPreviewStatus').textContent=error&&!error.hidden&&error.textContent.trim()?error.textContent:'Preview loaded. Try the controls, then use “Add a lesson starter” when ready.'}catch{$('boardPreviewStatus').textContent='Preview could not be inspected. Try loading it again.'}};
  frame.src=playgroundURL(selected.playground,new URL('../../',location.href),{code:selected.example,fresh:1});
  previewTimer=setTimeout(()=>{$('boardPreviewStatus').textContent='Preview is taking longer than expected. Try again or check the connection.'},30000);
 };
 function sync(nextFamily,widget=null){
  const changed=family!==nextFamily;family=nextFamily;desiredWidget=widget;
  $('boardPicker').hidden=!['board','science'].includes(family);
  if($('boardPicker').hidden){clearTimeout(previewTimer);$('boardPreview').hidden=true;$('boardPreview').src='about:blank';return}
  const desired=catalogue.find(e=>e.playground===family&&e.widget===widget);
  const next=desired||(!changed&&selected?.playground===family?selected:null)||catalogue.find(e=>e.playground===family&&e.widget===(family==='science'?'heat':'balance'));
  if(next?.id!==selected?.id){selected=next;details()}
  draw();
 }
 const ready=fetch('./board-catalogue.json',{cache:'no-cache'}).then(async response=>{
  if(!response.ok)throw Error('Board catalogue unavailable');catalogue=await response.json();
  for(const subject of [...new Set(catalogue.flatMap(e=>e.subjects))].sort()){const opt=document.createElement('option');opt.value=subject;opt.textContent=labels[subject]||subject;$('boardSubject').append(opt)}
  sync(family,desiredWidget);return catalogue;
 }).catch(error=>{status('Could not load activities: '+error.message);return []});
 return {ready,sync,selected:()=>['board','science'].includes(family)?selected:null,catalogue:()=>catalogue};
}
