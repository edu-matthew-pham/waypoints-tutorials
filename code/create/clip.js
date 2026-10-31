import {PLAYGROUND_REGISTRY,playground} from './playground-registry.mjs?v=59ba610f20';
import {createAdapter,manualReason} from './playground-adapters.mjs?v=59ba610f20';
import { parseLessonText } from './lesson-core.mjs?v=59ba610f20';
import { draftBrowserClip } from './draft-clip.mjs?v=59ba610f20';
import { readDraft, updateDraft, clipFingerprint, keepStorage } from './draft-store.mjs?v=59ba610f20';
import { vttFromCues, fixWebmDuration } from './lesson-package.mjs?v=59ba610f20';
const $=id=>document.getElementById(id);
const defaults={format:'waypoints-clip-draft-v1',title:'My explanation',app:'turtle',steps:[{type:'caption',caption:'The turtle follows each instruction.',say:'The turtle follows each instruction.',value:''},{type:'code',caption:'Draw two lines.',say:'',value:'from turtle import *\nforward(100)\nright(90)\nforward(100)'},{type:'run',caption:'Run the code.',say:'',value:''}]};
let binding=null,lastRecording=null,recordingURL=null,lastCaptions='',attached=false;
// Captions shown while recording become a caption file (WebVTT) kept with the video; timing is from the recording's start.
let cues=[],recordStart=0,tick=0,limitTimer=0;
const LIMIT_MS=5*60*1000;
const support=()=>{if(!navigator.mediaDevices?.getDisplayMedia||typeof MediaRecorder!=='function')return 'This browser can’t record a tab. Use Chrome or Edge on a computer (Safari and iPads can’t). You can still preview the steps.';if(!['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].some(x=>MediaRecorder.isTypeSupported(x)))return 'This browser can’t make WebM videos. Use Chrome or Edge on a computer. You can still preview the steps.';return ''};
function showCaption(text){$('previewCaption').textContent=text;if(recorder?.state==='recording'&&text)cues.push({at:Date.now()-recordStart,text})}
let model=structuredClone(defaults),selected=0,recorder,screen,mic,chunks=[];
const siteRoot=new URL('../../',location.href),delay=ms=>new Promise(r=>setTimeout(r,ms));
for(const p of PLAYGROUND_REGISTRY){const option=document.createElement('option');option.value=p.draftApp||p.id;option.textContent=p.label;$('app').append(option)}
function status(s){$('status').textContent=s}
const adapter=()=>createAdapter($('demo'),model.app,siteRoot,model.query);
function reset(){adapter().reset();}
function limitations(){
 const p=playground(model.app),reasons=new Set(model.limitations||[]);if(p.recording==='manual')reasons.add(p.note);
 for(const step of model.steps){if(step.type==='action'){try{const [verb,value]=Object.entries(JSON.parse(step.value))[0];const reason=manualReason(verb,value,p);if(reason)reasons.add(reason)}catch{}}}
 return [...reasons];
}
function draw(){ $('app').value=model.app;$('capabilities').textContent=limitations().length?'Manual tab recording: '+limitations().join(' '):'Automated preview of local controls. Record this tab to capture the preview.';$('title').value=model.title;$('steps').replaceChildren();model.steps.forEach((s,i)=>{let li=document.createElement('li'),b=document.createElement('button');b.textContent=(i+1)+'. '+s.type+' · '+(s.caption||s.value||'').slice(0,40);b.setAttribute('aria-pressed',String(i===selected));b.onclick=()=>{selected=i;if(s.caption)showCaption(s.caption);draw()};li.append(b);$('steps').append(li)});const s=model.steps[selected];if(s){$('type').value=s.type;$('caption').value=s.caption||'';$('say').value=s.say||'';$('value').value=s.value||''} }
function save(){let s=model.steps[selected];if(!s)return;s.type=$('type').value;s.caption=$('caption').value;s.say=$('say').value;s.value=$('value').value;model.title=$('title').value;draw()}
$('saveStep').onclick=()=>{save();status('Step saved')};
$('add').onclick=()=>{save();model.steps.push({type:'caption',caption:'',say:'',value:''});selected=model.steps.length-1;draw()};
$('remove').onclick=()=>{if(model.steps.length<=1)return;model.steps.splice(selected,1);selected=Math.max(0,selected-1);draw()};
$('app').onchange=()=>{const app=$('app').value;save();model.app=app;delete model.query;delete model.mode;delete model.limitations;reset();draw()};
$('reset').onclick=reset;
function download(blob,name){let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),30000)}
$('export').onclick=()=>{save();download(new Blob([JSON.stringify(model,null,2)],{type:'application/json'}),'waypoints-clip.json')};
$('import').onchange=async e=>{try{const data=JSON.parse(await e.target.files[0].text());if(data.format!=='waypoints-clip-draft-v1'||!playground(data.app)||!Array.isArray(data.steps))throw Error('Not a compatible clip draft');model=data;selected=0;draw();reset();status('Draft imported')}catch(err){status(err.message)}};
$('preview').onclick=async()=>{
 save();$('previewCaption').scrollIntoView({block:'start'});$('preview').disabled=true;
 try{
  const a=adapter();await a.load();
  if(limitations().length){status('Manual recording required: '+limitations().join(' ')+' Follow the listed steps in the playground while recording.');return}
  for(let i=0;i<model.steps.length;i++){selected=i;draw();const s=model.steps[i];if(s.caption)showCaption(s.caption);status('Preview '+(i+1)+'/'+model.steps.length+': '+(s.caption||s.type));await a.action(s);await delay(1000)}a.health();status('Preview complete');
 }catch(e){status('Preview failed: '+e.message)}finally{$('preview').disabled=false}
};
$('record').onclick=async()=>{const unsupported=support();if(unsupported){status(unsupported);return}try{$('attachRecording').disabled=true;screen=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30},audio:true,preferCurrentTab:true,selfBrowserSurface:'include'});let tracks=[...screen.getTracks()];if($('mic').checked){mic=await navigator.mediaDevices.getUserMedia({audio:true});const ctx=new AudioContext(),dest=ctx.createMediaStreamDestination();for(const stream of [screen,mic])if(stream.getAudioTracks().length)ctx.createMediaStreamSource(new MediaStream(stream.getAudioTracks())).connect(dest);tracks=[...screen.getVideoTracks(),...dest.stream.getAudioTracks()];recorderAudioContext=ctx}
const mime=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].find(x=>MediaRecorder.isTypeSupported(x));if(!mime)throw Error('WebM unsupported');chunks=[];recorder=new MediaRecorder(new MediaStream(tracks),{mimeType:mime});recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};recorder.onstop=async()=>{clearInterval(tick);clearTimeout(limitTimer);$('timer').textContent='';const ended=Date.now()-recordStart;lastCaptions=vttFromCues(cues,ended);attached=false;const raw=new Blob(chunks,{type:mime}),blob=new Blob([fixWebmDuration(new Uint8Array(await raw.arrayBuffer()),ended)],{type:mime}),url=URL.createObjectURL(blob);if(recordingURL)URL.revokeObjectURL(recordingURL);recordingURL=url;lastRecording=blob;if(binding)$('attachRecording').disabled=false;$('video').src=url;$('video').hidden=false;$('download').href=url;$('download').download='waypoints-clip.webm';$('download').hidden=false;releaseCapture();$('record').disabled=false;$('stop').disabled=true;status('WebM ready ('+Math.round(blob.size/1024)+' KB)')};screen.getVideoTracks()[0].onended=()=>{if(recorder.state==='recording')recorder.stop()};
// Record only the playground and its caption where the browser can crop a tab (Chrome and Edge's Region Capture).
try{if(typeof CropTarget==='function'&&screen.getVideoTracks()[0].cropTo)await screen.getVideoTracks()[0].cropTo(await CropTarget.fromElement($('stage')))}catch{/* whole tab */}
cues=[];recordStart=Date.now();if($('previewCaption').textContent)cues.push({at:0,text:$('previewCaption').textContent});recorder.start(1000);
tick=setInterval(()=>{const s=Math.floor((Date.now()-recordStart)/1000);$('timer').textContent=`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')} of 5:00`},500);
limitTimer=setTimeout(()=>{if(recorder?.state==='recording'){recorder.stop();setTimeout(()=>status('Stopped at the 5-minute limit. Keep videos short: one idea each.'),50)}},LIMIT_MS);$('record').disabled=true;$('stop').disabled=false;status('Recording tab; preview steps to capture interactions')}catch(e){releaseCapture();$('record').disabled=false;$('stop').disabled=true;status('Recording failed: '+e.message)}};
let recorderAudioContext;
function releaseCapture(){screen?.getTracks().forEach(t=>t.stop());mic?.getTracks().forEach(t=>t.stop());recorderAudioContext?.close().catch(()=>{});screen=null;mic=null;recorderAudioContext=null;}
$('stop').onclick=()=>{if(recorder?.state==='recording')recorder.stop()};
draw();reset();
{const why=support();if(why){$('record').disabled=true;status(why)}}
// Leaving mid-recording, or with a video not yet added to the lesson, loses it.
addEventListener('beforeunload',e=>{if(recorder?.state==='recording'||(binding&&lastRecording&&!attached)){e.preventDefault();e.returnValue=''}});
// Load build-generated clips from existing lesson.md frontmatter; no JSON import required.
let lessonClips=[];
fetch('./lesson-clips.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Lesson clip catalogue unavailable');return r.json()}).then(clips=>{
  lessonClips=clips;
  for(let i=0;i<clips.length;i++){
    const opt=document.createElement('option');opt.value=String(i);
    opt.textContent=clips[i].source.lesson+' / '+clips[i].source.step;
    $('lessonClip').append(opt);
  }
}).catch(e=>{if(!draftId)status(e.message)});
$('loadLessonClip').onclick=()=>{
  const i=$('lessonClip').value;
  if(i===''){status('Choose an existing lesson clip');return}
  const clip=lessonClips[Number(i)];
  if(!clip){status('Lesson clip not found');return}
  model=structuredClone(clip);selected=0;draw();reset();
  status('Loaded '+clip.source.lesson+' / '+clip.source.step+' from lesson frontmatter');
};

// A lesson-bound recorder reads the same frontmatter converter as the repository build.
const parameters=new URLSearchParams(location.search),draftId=parameters.get('draft'),stepId=parameters.get('step');
if(draftId){
  try{
    const record=await readDraft(draftId);if(!record)throw Error('Lesson draft not found in this browser');
    const lesson=parseLessonText(record.files['lesson.md'],'my-lesson');
    const step=[...lesson.steps,...(lesson.explainStep?[lesson.explainStep]:[])].find(s=>s.id===stepId);
    model=draftBrowserClip(record.files,lesson,step);binding={id:draftId,step:stepId,fingerprint:await clipFingerprint(record.files,stepId),signature:JSON.stringify(model)};
    selected=0;draw();reset();
    for(const id of ['app','title','type','caption','say','value','saveStep','add','remove','import','lessonClip','loadLessonClip'])$(id).disabled=true;
    $('attachRecording').hidden=false;$('returnLesson').hidden=false;$('returnLesson').href='./?lesson='+encodeURIComponent(draftId);
    status('Loaded draft lesson / '+stepId+'. Record this tab and preview the steps, then use the recording in your lesson. Edit instructions in Create lesson.');
  }catch(error){status('Cannot load draft clip: '+error.message);$('record').disabled=true;$('preview').disabled=true}
}
$('attachRecording').onclick=async()=>{
  try{
    if(!binding||!lastRecording)throw Error('Record this lesson clip first');
    save();if(JSON.stringify(model)!==binding.signature)throw Error('Clip instructions changed. Reopen the recorder from your lesson.');
    const latest=await readDraft(binding.id);
    if(!latest||await clipFingerprint(latest.files,binding.step)!==binding.fingerprint)throw Error('Lesson changed. Return to the lesson and record its updated instructions.');
    const snapshot=JSON.stringify(latest.files);
    await updateDraft(binding.id,record=>{
      if(JSON.stringify(record.files)!==snapshot)throw Error('Lesson changed while saving the recording');
      return {...record,clips:{...record.clips,[binding.step]:{blob:lastRecording,fingerprint:binding.fingerprint,recordedAt:new Date().toISOString(),...(lastCaptions?{vtt:lastCaptions}:{})}}};
    });
    attached=true;await keepStorage(true);
    if(typeof BroadcastChannel==='function'){const channel=new BroadcastChannel('wp-lesson-recordings');channel.postMessage(binding.id);channel.close()}
    location.href='./?lesson='+encodeURIComponent(binding.id);
  }catch(error){status('Could not attach recording: '+error.message)}
};
