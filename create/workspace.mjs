import {maths} from './maths-browser.mjs';
import { Marked } from 'marked';
import { parseLessonText, snippetFrom } from './lesson-core.mjs';
import { lessonPageHtml, tryEmbed, esc } from './lesson-view.mjs';
import { highlightCode } from './highlight.js';
import { draftBrowserClip as converter } from './draft-clip.mjs';
import { readDraft, updateDraft, deleteDraft, fingerprint } from './draft-store.mjs';
import { zip, readPackage, safePath } from './lesson-package.mjs';
const $ = id => document.getElementById(id);
const KEY = 'wp-create-course-v1';
const allSteps = lesson => [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])];
const slug = title => String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'lesson';
const uuid = () => crypto.randomUUID();
const rootURL = new URL('../../', location.href).href;
const notice = text => $('packageStatus').textContent = text;
function parsed(files, id='my-lesson') { return parseLessonText(files['lesson.md'] || '', id); }
export async function setupWorkspace(controller) {
  let workspace;
  try { workspace = JSON.parse(localStorage.getItem(KEY)); } catch {}
  const sharedLink=location.hash.startsWith('#l=');
  if(!workspace || !Array.isArray(workspace.lessons) || !workspace.lessons.length) {
    const id = uuid();workspace = {title:'My course',summary:'',active:id,lessons:[{id,title:'My lesson'}]};
  }
  else if(sharedLink) {
    if(workspace.lessons.length>=100)throw Error('The course is full. Export it before importing another shared lesson.');
    const id=uuid();workspace.lessons.push({id,title:parsed(controller.getFiles()).title});workspace.active=id;
  }
  const requested=!sharedLink&&new URLSearchParams(location.search).get('lesson');if(workspace.lessons.some(l=>l.id===requested))workspace.active=requested;
  if(!workspace.lessons.some(l => l.id === workspace.active))workspace.active = workspace.lessons[0].id;
  let starterFactory=null;
  let recordings = {}, currentHash = '', queue = Promise.resolve(), revision = 0;
  const urls = new Map();
  const persist = () => {localStorage.setItem(KEY, JSON.stringify(workspace));};
  function workspaceUI() {
    $('courseTitle').value = workspace.title;$('courseSummary').value = workspace.summary;
    $('courseLesson').replaceChildren(...workspace.lessons.map(l => {const opt = document.createElement('option');opt.value=l.id;opt.textContent=l.title;return opt}));
    $('courseLesson').value=workspace.active;
    const index=workspace.lessons.findIndex(l=>l.id===workspace.active);
    $('moveLessonUp').disabled=index===0;$('moveLessonDown').disabled=index===workspace.lessons.length-1;$('removeLesson').disabled=workspace.lessons.length===1;
    $('previousLesson').disabled=index===0;$('nextLesson').disabled=index===workspace.lessons.length-1;
  }
  function releaseURLs(){for(const url of urls.values())URL.revokeObjectURL(url);urls.clear()}
  function clipHtml(step) {
    if(!step.config.clip)return '';
    const clip=recordings[step.id];
    if(clip && clip.fingerprint === currentHash) {
      if(!urls.has(step.id))urls.set(step.id, URL.createObjectURL(clip.blob));
      return `<figure class="clip"><video controls preload="metadata" src="${esc(urls.get(step.id))}"></video><figcaption>Recorded lesson clip</figcaption></figure>`;
    }
    return `<div class="placeholder"><b>${clip?'Recording needs updating':'Clip not recorded'} · ${esc(step.id)}</b><span>Record this clip in Create lesson, then export the lesson package.</span></div>`;
  }
  function clipsUI(files) {
    const select=$('draftClip'),previous=select.value;select.replaceChildren();let missing=0,unsupported=0,total=0;
    try {
      const lesson=parsed(files);
      for(const step of allSteps(lesson).filter(s=>s.config.clip)){
        total++;const opt=document.createElement('option');opt.value=step.id;
        const clip=recordings[step.id],state=clip?.fingerprint===currentHash?'recorded':clip?'needs updating':'not recorded';
        let mode='';try {if(converter(files,lesson,step).mode==='manual')mode=' (manual recording)'}catch(error){opt.disabled=true;opt.textContent=`${step.title} — unsupported: ${error.message}`;unsupported++;select.append(opt);continue}
        if(state!=='recorded')missing++;
        opt.textContent=`${step.title}${mode} — ${state}`;select.append(opt);
      }
      if([...select.options].some(o=>o.value===previous&&!o.disabled))select.value=previous;
      else select.value=[...select.options].find(o=>!o.disabled)?.value||'';
      $('recordClip').disabled=!select.value;
      $('videoStatus').textContent=total?`${total} clip(s): ${missing} supported recording(s) still needed.${unsupported?` ${unsupported} clip(s) use unsupported actions.`:''} Recordings are kept in this browser; export a package to keep or share them.`:'No clip instructions yet. Select a step in lesson.md and use “Clip instructions” to add them.';
    } catch(error){$('recordClip').disabled=true;$('videoStatus').textContent=error.message}
  }
  async function refresh() {
    const token=++revision,id=workspace.active;await queue;
    const record=await readDraft(id),hash=await fingerprint(controller.getFiles());
    if(token!==revision||id!==workspace.active)return;
    releaseURLs();recordings=record?.clips||{};currentHash=hash;
    clipsUI(controller.getFiles());controller.render();
  }
  function changed(files) {
    const id=workspace.active,snapshot=structuredClone(files);
    try {workspace.lessons.find(l=>l.id===id).title=parsed(snapshot).title||'Untitled lesson';persist();workspaceUI()}catch{}
    queue=queue.catch(()=>{}).then(()=>updateDraft(id, record=>({...record,files:snapshot})));
    queue.then(()=>refresh()).catch(error=>notice('Could not save videos/draft: '+error.message));
    return queue;
  }
  async function switchLesson(id) {
    await queue;const record=await readDraft(id);
    if(!record)throw Error('Lesson draft not found');
    ++revision;workspace.active=id;recordings={};currentHash='';releaseURLs();persist();workspaceUI();controller.setFiles(record.files);await refresh();
  }
  const report = fn => async () => {try {await fn()}catch(error){notice(error.message)}};
  $('courseTitle').onchange=()=>{workspace.title=$('courseTitle').value||'My course';persist()};
  $('courseSummary').onchange=()=>{workspace.summary=$('courseSummary').value;persist()};
  $('courseLesson').onchange=report(()=>switchLesson($('courseLesson').value));
  $('previousLesson').onclick=report(()=>switchLesson(workspace.lessons[workspace.lessons.findIndex(l=>l.id===workspace.active)-1].id));
  $('nextLesson').onclick=report(()=>switchLesson(workspace.lessons[workspace.lessons.findIndex(l=>l.id===workspace.active)+1].id));
  async function moveLesson(direction) {
    await queue;const index=workspace.lessons.findIndex(l=>l.id===workspace.active),other=index+direction;
    if(other<0||other>=workspace.lessons.length)return;
    [workspace.lessons[index],workspace.lessons[other]]=[workspace.lessons[other],workspace.lessons[index]];persist();workspaceUI();
  }
  $('moveLessonUp').onclick=report(()=>moveLesson(-1));$('moveLessonDown').onclick=report(()=>moveLesson(1));
  $('removeLesson').onclick=report(async()=>{
    if(workspace.lessons.length===1||!confirm('Remove this lesson and its local recordings from the course? Export a package first if you want to keep it.'))return;
    await queue;const id=workspace.active,index=workspace.lessons.findIndex(l=>l.id===id);
    workspace.lessons.splice(index,1);await switchLesson(workspace.lessons[Math.min(index,workspace.lessons.length-1)].id);await deleteDraft(id);
  });
  $('addLesson').onclick=report(async()=>{
    await queue;if(workspace.lessons.length>=100)throw Error('A course can contain up to 100 lessons');
    const id=uuid(),title=`Lesson ${workspace.lessons.length+1}`;
    const files={'lesson.md':`---\ntitle: ${title}\nsummary: Write a short summary.\nlanguage: python\n---\n## Run\n\n\`\`\`step\nstage: run\ntry: { starter: "shape.py#start", height: 420 }\n\`\`\`\n\nRun the code, then change it.\n`,'shape.py':'# region: start\nfrom turtle import *\nforward(100)\n# endregion\n'};
    const starter=starterFactory?starterFactory(title):files;
    await updateDraft(id,()=>({id,files:starter,clips:{}}));workspace.lessons.push({id,title});await switchLesson(id);
  });
  $('refreshClips').onclick=report(refresh);
  $('recordClip').onclick=report(async()=>{
    await changed(controller.getFiles());
    const lesson=parsed(controller.getFiles()),step=allSteps(lesson).find(s=>s.id===$('draftClip').value);
    converter(controller.getFiles(),lesson,step); // fail before leaving the editor
    location.href=`clip.html?draft=${encodeURIComponent(workspace.active)}&step=${encodeURIComponent(step.id)}`;
  });
  window.addEventListener('focus',()=>refresh().catch(error=>notice(error.message)));
  const channel=typeof BroadcastChannel==='function'?new BroadcastChannel('wp-lesson-recordings'):null;
  if(channel)channel.onmessage=event=>{if(event.data===workspace.active)refresh().catch(error=>notice(error.message))};
  async function lessonEntries(record, path, navigation='', sharedAssets=null) {
    const files=record.files,lesson=parsed(files,'package/'+record.id),hash=await fingerprint(files),read=name=>files[name]??lesson.inline?.[name],clips={},entries=[];let missing=0;
    for(const name of Object.keys(files)){
      safePath(name);if(name==='index.html'||name==='waypoints-lesson.json'||name.startsWith('clips/'))throw Error('Reserved source filename: '+name);
      entries.push([path+'/'+name,files[name]]);
    }
    for(const step of allSteps(lesson).filter(s=>s.config.clip)){
      const clip=record.clips?.[step.id];
      if(clip?.fingerprint!==hash){missing++;continue}
      const file=`clips/${step.id}.webm`;clips[step.id]={path:file,fingerprint:hash,recordedAt:clip.recordedAt};entries.push([path+'/'+file,clip.blob]);
    }
    const clip = step=>!step.config.clip?'':clips[step.id]?`<figure class="clip"><video controls preload="metadata" src="${clips[step.id].path}"></video></figure>`:`<div class="placeholder">Clip not recorded · ${esc(step.id)}</div>`;
    const tryHtml=step=>{if(!step.config.try)return '';return tryEmbed(lesson,step,snippetFrom(read,step.config.try.starter||step.config.code),rootURL,'',{use:lesson.modules,local:Object.fromEntries(lesson.modules.filter(n=>read(n+'.py')!==undefined).map(n=>[n,read(n+'.py')]))})};
    let html=lessonPageHtml(lesson,{Marked,highlightCode,snippet:ref=>snippetFrom(read,ref),clipHtml:clip,tryHtml,maths,crumb:null,source:''});
    html=html.replace('<div class="wrap">',`<div class="wrap">${navigation}<p class="lede">Downloaded lesson. Text and recorded videos work offline; interactive playgrounds need internet.</p>`);
    if(lesson.language==='maths'){
      const assetPath=sharedAssets?.path||path;
      if(sharedAssets)html=html.replaceAll('href="_katex/','href="../_katex/').replaceAll('src="_numbas/','src="../_numbas/');
      if(!sharedAssets?.included){
        const response=await fetch(rootURL+'_katex/katex.min.css');if(!response.ok)throw Error('Maths stylesheet unavailable');const css=await response.text();
        entries.push([assetPath+'/_katex/katex.min.css',css]);
        const fonts=[...new Set([...css.matchAll(/url\((fonts\/[^)]+)\)/g)].map(m=>m[1]))];
        await Promise.all(fonts.map(async file=>{const r=await fetch(rootURL+'_katex/'+file);if(!r.ok)throw Error('Maths font unavailable');entries.push([assetPath+'/_katex/'+file,await r.blob()])}));
        if(sharedAssets)sharedAssets.included=true;
      }
      if(html.includes('_numbas/')&&!sharedAssets?.forms){
        const r=await fetch(rootURL+maths.forms.src);if(!r.ok)throw Error('Maths check engine unavailable');entries.push([assetPath+'/_numbas/numbas-jme.min.js',await r.blob()]);
        if(sharedAssets)sharedAssets.forms=true;
      }
    }
    entries.push([path+'/index.html',html],[path+'/waypoints-lesson.json',JSON.stringify({format:'waypoints-lesson-package-v1',files:Object.keys(files),clips},null,2)]);
    return {entries,missing,title:lesson.title,summary:lesson.summary};
  }
  function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)}
  $('downloadPackage').onclick=report(async()=>{
    await changed(controller.getFiles());const record=await readDraft(workspace.active),title=slug(parsed(record.files).title),result=await lessonEntries(record,title);
    download(await zip(result.entries),title+'.zip');notice(`Lesson package downloaded.${result.missing?` ${result.missing} clip(s) are missing or need re-recording; placeholders are included.`:' All recorded clips are included.'}`);
  });
  $('downloadCourse').onclick=report(async()=>{
    await changed(controller.getFiles());const root=slug(workspace.title),records=await Promise.all(workspace.lessons.map(l=>readDraft(l.id)));
    const paths=records.map((r,i)=>`${i+1}-${slug(parsed(r.files).title)}`),entries=[],cards=[],sharedAssets={path:root,included:false};let missing=0;
    for(let i=0;i<records.length;i++){
      const navigation=`<nav aria-label="Course"><a href="../index.html">← ${esc(workspace.title)}</a>${i?` · <a href="../${paths[i-1]}/index.html">Previous lesson</a>`:''}${i+1<records.length?` · <a href="../${paths[i+1]}/index.html">Next lesson</a>`:''}</nav>`;
      const result=await lessonEntries(records[i],root+'/'+paths[i],navigation,sharedAssets);entries.push(...result.entries);missing+=result.missing;
      cards.push(`<li><a href="${paths[i]}/index.html">${esc(result.title)}</a><p>${esc(result.summary)}</p></li>`);
    }
    entries.push([root+'/waypoints-course.json',JSON.stringify({format:'waypoints-course-package-v1',title:workspace.title,summary:workspace.summary,lessons:paths},null,2)]);
    entries.push([root+'/index.md',`---\ntitle: ${JSON.stringify(workspace.title)}\nsummary: ${JSON.stringify(workspace.summary)}\n---\n`]);
    entries.push([root+'/index.html',`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(workspace.title)}</title><style>body{font:18px system-ui;max-width:850px;margin:40px auto;padding:20px;line-height:1.5}li{padding:12px}a{color:#125c9e}</style><h1>${esc(workspace.title)}</h1><p>${esc(workspace.summary)}</p><p>Choose a lesson. Text and videos work offline; interactive playgrounds need internet.</p><ol>${cards.join('')}</ol></html>`]);
    download(await zip(entries),root+'.zip');notice(`Course package downloaded: ${records.length} lesson(s).${missing?` ${missing} clip(s) are missing or need re-recording.`:' All recorded clips are included.'}`);
  });
  $('importPackage').onchange=report(async()=>{
    const file=$('importPackage').files[0];if(!file)return;
    await queue;const imported=await readPackage(file),lessons=imported.lessons||[imported],newLessons=[];
    if(imported.course&&!confirm('Replace the current course workspace? Export its package first if you want to keep a copy.')){$('importPackage').value='';return}
    if(!imported.course&&workspace.lessons.length+lessons.length>100)throw Error('A course can contain up to 100 lessons');
    for(const lesson of lessons){
      const metadata=parsed(lesson.files),hash=await fingerprint(lesson.files),clips={};
      for(const [id,clip] of Object.entries(lesson.clips))if(clip.fingerprint===hash)clips[id]=clip;
      const id=uuid();await updateDraft(id,()=>({id,files:lesson.files,clips}));newLessons.push({id,title:metadata.title});
    }
    if(imported.course)workspace={...imported.course,lessons:newLessons,active:newLessons[0].id};
    else workspace.lessons.push(...newLessons);
    await switchLesson(newLessons[0].id);$('importPackage').value='';notice(`${imported.course?'Course':'Lesson'} package imported with ${newLessons.length} lesson(s) and their recordings.`);
  });
  const existing=await readDraft(workspace.active);
  if(existing && !location.hash.startsWith('#l='))controller.setFiles(existing.files);
  else await updateDraft(workspace.active,()=>({id:workspace.active,files:controller.getFiles(),clips:{}}));
  persist();
  if(sharedLink){const address=new URL(location.href);address.hash='';address.searchParams.set('lesson',workspace.active);history.replaceState(null,'',address)}
  workspaceUI();await changed(controller.getFiles());await refresh();
  return {changed,clipHtml,lessonId:()=>workspace.active,setStarterFactory:fn=>{starterFactory=fn}};
}
