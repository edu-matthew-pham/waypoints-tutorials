const $=id=>document.getElementById(id);
const defaults={format:'waypoints-clip-draft-v1',title:'My explanation',app:'turtle',steps:[{type:'caption',caption:'The turtle follows each instruction.',say:'The turtle follows each instruction.',value:''},{type:'code',caption:'Draw two lines.',say:'',value:'from turtle import *\nforward(100)\nright(90)\nforward(100)'},{type:'run',caption:'Run the code.',say:'',value:''}]};
let model=structuredClone(defaults),selected=0,recorder,screen,mic,chunks=[];
const physics=['widget: forces','object: Trolley','mass: 1, 10, 2','force P: right, 8, Push, adjust 0-40','motion: on','track: 80','time: 3'].join('\n');
const sources={turtle:'../../_playground/index.html?code='+encodeURIComponent('from turtle import *\n'),physics:'../../_playground-board/index.html?fresh=1&code='+encodeURIComponent(physics)};
const delay=ms=>new Promise(r=>setTimeout(r,ms));
function status(s){$('status').textContent=s}
function reset(){ const url=new URL(sources[model.app],location.href); for(const [key,value] of Object.entries(model.query||{}))url.searchParams.set(key,value); $('demo').src=url.href; }
function draw(){ $('app').value=model.app;$('title').value=model.title;$('steps').replaceChildren();model.steps.forEach((s,i)=>{let li=document.createElement('li'),b=document.createElement('button');b.textContent=(i+1)+'. '+s.type+' · '+(s.caption||s.value||'').slice(0,40);b.setAttribute('aria-pressed',String(i===selected));b.onclick=()=>{selected=i;draw()};li.append(b);$('steps').append(li)});const s=model.steps[selected];if(s){$('type').value=s.type;$('caption').value=s.caption||'';$('say').value=s.say||'';$('value').value=s.value||''} }
function save(){let s=model.steps[selected];if(!s)return;s.type=$('type').value;s.caption=$('caption').value;s.say=$('say').value;s.value=$('value').value;model.title=$('title').value;draw()}
$('saveStep').onclick=()=>{save();status('Step saved')};
$('add').onclick=()=>{save();model.steps.push({type:'caption',caption:'',say:'',value:''});selected=model.steps.length-1;draw()};
$('remove').onclick=()=>{if(model.steps.length<=1)return;model.steps.splice(selected,1);selected=Math.max(0,selected-1);draw()};
$('app').onchange=()=>{const app=$('app').value;save();model.app=app;delete model.query;reset();draw()};
$('reset').onclick=reset;
function download(blob,name){let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),30000)}
$('export').onclick=()=>{save();download(new Blob([JSON.stringify(model,null,2)],{type:'application/json'}),'waypoints-clip.json')};
$('import').onchange=async e=>{try{const data=JSON.parse(await e.target.files[0].text());if(data.format!=='waypoints-clip-draft-v1'||!['turtle','physics'].includes(data.app)||!Array.isArray(data.steps))throw Error('Not a compatible clip draft');model=data;selected=0;draw();reset();status('Draft imported')}catch(err){status(err.message)}};
function frame(){return $('demo').contentWindow}
async function action(s){if(s.caption)$('previewCaption').textContent=s.caption;const doc=frame().document;if(s.type==='wait'){await delay(Math.max(0,Math.min(30000,Number(s.value)||1000)));return}
if(s.type==='code'&&model.app==='turtle'){const t=doc.querySelector('#code');if(!t)throw Error('Turtle code editor missing');t.value=s.value;t.dispatchEvent(new Event('input',{bubbles:true}));}
if(s.type==='run'&&model.app==='turtle'){const b=doc.querySelector('#run');if(!b)throw Error('Run button missing');b.click();const deadline=Date.now()+30000;await delay(50);while(frame().__playground?.status==='running'&&Date.now()<deadline)await delay(50);if(frame().__playground?.status!=='done')throw Error(frame().__playground?.error||'Turtle did not finish');}
if(s.type==='force'&&model.app==='physics'){const ranges=[...doc.querySelectorAll('input[type=range]')];if(!ranges.length)throw Error('Force slider not found');ranges[0].value=s.value;ranges[0].dispatchEvent(new Event('input',{bubbles:true}));ranges[0].dispatchEvent(new Event('change',{bubbles:true}));}
}
$('preview').onclick=async()=>{save();$('previewCaption').scrollIntoView({block:'start'});$('preview').disabled=true;try{await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Playground load timed out')),15000);$('demo').addEventListener('load',()=>{clearTimeout(timer);resolve()},{once:true});reset()});await delay(700);for(let i=0;i<model.steps.length;i++){selected=i;draw();const s=model.steps[i];status('Preview '+(i+1)+'/'+model.steps.length+': '+(s.caption||s.type));await action(s);await delay(1000)}status('Preview complete')}catch(e){status('Preview failed: '+e.message)}finally{$('preview').disabled=false}};
$('record').onclick=async()=>{try{screen=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30},audio:true,preferCurrentTab:true,selfBrowserSurface:'include'});let tracks=[...screen.getTracks()];if($('mic').checked){mic=await navigator.mediaDevices.getUserMedia({audio:true});const ctx=new AudioContext(),dest=ctx.createMediaStreamDestination();for(const stream of [screen,mic])if(stream.getAudioTracks().length)ctx.createMediaStreamSource(new MediaStream(stream.getAudioTracks())).connect(dest);tracks=[...screen.getVideoTracks(),...dest.stream.getAudioTracks()];recorderAudioContext=ctx}
const mime=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].find(x=>MediaRecorder.isTypeSupported(x));if(!mime)throw Error('WebM unsupported');chunks=[];recorder=new MediaRecorder(new MediaStream(tracks),{mimeType:mime});recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};recorder.onstop=()=>{const blob=new Blob(chunks,{type:mime}),url=URL.createObjectURL(blob);$('video').src=url;$('video').hidden=false;$('download').href=url;$('download').download='waypoints-clip.webm';$('download').hidden=false;screen.getTracks().forEach(t=>t.stop());mic?.getTracks().forEach(t=>t.stop());recorderAudioContext?.close();$('record').disabled=false;$('stop').disabled=true;status('WebM ready ('+Math.round(blob.size/1024)+' KB)')};screen.getVideoTracks()[0].onended=()=>{if(recorder.state==='recording')recorder.stop()};recorder.start(1000);$('record').disabled=true;$('stop').disabled=false;status('Recording tab; preview steps to capture interactions')}catch(e){screen?.getTracks().forEach(t=>t.stop());status('Recording failed: '+e.message)}};
let recorderAudioContext;
$('stop').onclick=()=>{if(recorder?.state==='recording')recorder.stop()};
draw();reset();
// Load build-generated clips from existing lesson.md frontmatter; no JSON import required.
let lessonClips=[];
fetch('./lesson-clips.json').then(r=>{if(!r.ok)throw Error('Lesson clip catalogue unavailable');return r.json()}).then(clips=>{
  lessonClips=clips;
  for(let i=0;i<clips.length;i++){
    const opt=document.createElement('option');opt.value=String(i);
    opt.textContent=clips[i].source.lesson+' / '+clips[i].source.step;
    $('lessonClip').append(opt);
  }
}).catch(e=>status(e.message));
$('loadLessonClip').onclick=()=>{
  const i=$('lessonClip').value;
  if(i===''){status('Choose an existing lesson clip');return}
  const clip=lessonClips[Number(i)];
  if(!clip){status('Lesson clip not found');return}
  model=structuredClone(clip);selected=0;draw();reset();
  status('Loaded '+clip.source.lesson+' / '+clip.source.step+' from lesson frontmatter');
};
