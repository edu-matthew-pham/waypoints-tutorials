import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';
import {spawn} from 'node:child_process';
import {mkdir,writeFile,readFile,mkdtemp} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import {readZipEntries} from '../create/lesson-package.mjs';
const dir='browser-recorder-results';await mkdir(dir,{recursive:true});
const server=spawn(process.execPath,['tools/serve.mjs','dist','8790'],{stdio:'inherit'}),base='http://127.0.0.1:8790/code/create/';
const delay=ms=>new Promise(r=>setTimeout(r,ms));let browser,page;const results=[],errors=[];
try{
 for(let n=0;n<40;n++){try{if((await fetch(base)).ok)break}catch{}await delay(250)}
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage','--auto-accept-this-tab-capture','--auto-select-tab-capture-source-by-title=Waypoints · Create clip','--allow-http-screen-capture']});
 const context=await browser.newContext({viewport:{width:1280,height:1000},permissions:['clipboard-read','clipboard-write']});
 if(process.env.WP_TEST_CANVAS_CAPTURE==='1')await context.addInitScript(()=>{navigator.mediaDevices.getDisplayMedia=async()=>{const c=document.createElement('canvas');c.width=640;c.height=360;const x=c.getContext('2d'),t=setInterval(()=>{x.fillStyle='white';x.fillRect(0,0,640,360);x.fillStyle='blue';x.fillRect(Date.now()%600,20,40,40)},50),s=c.captureStream(20);s.getVideoTracks()[0].addEventListener('ended',()=>clearInterval(t));return s}});
 page=await context.newPage();page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'?workspace=1');await page.waitForFunction(()=>document.querySelector('#authorPlayground').options.length>10);
 const original=await page.locator('#text').inputValue();
 await page.selectOption('#authorSubject','maths');await page.fill('#authorTopic','Balance equations');await page.fill('#authorGoal','Explain why both sides stay equal');
 await page.click('#copyLessonPrompt');await page.waitForFunction(()=>document.querySelector('#authorStatus').textContent.startsWith('Prompt copied'));
 const prompt=await page.evaluate(()=>navigator.clipboard.readText());assert.match(prompt,/Balance equations/);assert.match(prompt,/Worked example/);assert.match(prompt,/`reasoning` check/);assert.match(prompt,/widget: balance/);assert.ok(prompt.length<100000);
 assert.equal(await page.locator('#text').inputValue(),original,'Prompt and selector preserve source');
 await page.selectOption('#authorScope','course');await page.click('#showLessonPrompt');await page.waitForFunction(()=>document.querySelector('#lessonPrompt').value.includes('course plan'));assert.match(await page.locator('#lessonPrompt').inputValue(),/one complete lesson at a time/);
 await page.click('#newFromSettings');await page.waitForFunction(()=>document.querySelector('#courseLesson').options.length===2);
 await page.waitForFunction(()=>document.querySelector('#text').value.includes('language: "maths"'));
 assert.equal(await page.locator('#courseLesson option').last().innerText(),'Balance equations');
 let md=await page.locator('#text').inputValue();md=md.replace('One idea to investigate.', 'Solve $x + 2 = 5$.\n\n```worked\nx + 2 = 5 :: Start\nx = 3 :: Subtract two\n```\n\nOne idea to investigate.');md=md.replace('stage: run','stage: run\ncheck: { type: answer, q: \"Solve x + 2 = 5\", answer: \"3\", form: simplest }');await page.fill('#text',md);
 await page.frameLocator('#preview').locator('.katex').first().waitFor();
 await page.locator('#text').evaluate(e=>e.setSelectionRange(e.value.indexOf('## Try')+7,e.value.indexOf('## Try')+7));await page.click('#addclip');
 await page.waitForFunction(()=>!document.querySelector('#recordClip').disabled);
 await page.click('#recordClip');await page.waitForURL(/clip.html/);await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Loaded draft lesson'));
 await page.click('#record');await page.waitForFunction(()=>/Recording tab|Recording failed/.test(document.querySelector('#status').textContent));assert.match(await page.locator('#status').innerText(),/^Recording tab/);
 await page.click('#preview');await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),null,{timeout:90000});assert.equal(await page.locator('#status').innerText(),'Preview complete');
 await page.click('#stop');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('WebM ready'));await page.click('#attachRecording');await page.waitForURL(/\?lesson=/);
 await page.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— recorded'));
 const download=page.waitForEvent('download');await page.click('#downloadPackage');const blob=new Blob([await readFile(await(await download).path())]);const entries=await readZipEntries(blob);assert.ok([...entries.keys()].some(k=>k.includes('/_katex/fonts/')));assert.ok([...entries.keys()].some(k=>k.endsWith('.webm')));assert.ok([...entries.keys()].some(k=>k.includes('/_numbas/')));
 const dest=await mkdtemp(join(tmpdir(),'wp-maths-'));for(const [name,bytes]of entries){const file=join(dest,name);await mkdir(dirname(file),{recursive:true});await writeFile(file,bytes)}
 const offline=await context.newPage();await offline.route(/^https?:/,r=>r.abort());await offline.goto(pathToFileURL(join(dest,[...entries.keys()].find(k=>k.endsWith('/index.html')))).href);await offline.locator('.katex').first().waitFor();await offline.waitForFunction(()=>!!window.WPF);await offline.locator('.wnext').click();assert.equal(await offline.locator('.worked li[hidden]').count(),0);await offline.close();
 const courseDownload=page.waitForEvent('download');await page.click('#downloadCourse');const courseEntries=await readZipEntries(new Blob([await readFile(await(await courseDownload).path())]));const lessonPages=[...courseEntries].filter(([k])=>/^[^/]+\/[^/]+\/index\.html$/.test(k)).map(([,v])=>new TextDecoder().decode(v));assert.ok(lessonPages.some(html=>/href="\.\.\/_katex/.test(html)),'Course lesson pages share the maths assets');assert.ok([...courseEntries.keys()].some(k=>/^[^/]+\/_numbas\//.test(k)));
 results.push({mathsStarterPromptPreviewRecordingPackage:'pass'});
 await page.screenshot({path:dir+'/authoring-maths.png',fullPage:true});
 await page.goto(base+'clip.html');await page.waitForFunction(()=>document.querySelector('#app').options.length===11);
 const cases=[
  {app:'science',query:{code:'widget: heat\n'},steps:[{type:'action',value:JSON.stringify({type:{selector:'input[type=range]',text:'110'}})},{type:'action',value:JSON.stringify({expect:{selector:'#status',contains:'Steam'}})}]},
  {app:'physics',query:{code:'widget: balance\nleft: x + 2\nright: 5\n'},steps:[{type:'action',value:JSON.stringify({type:{selector:'input[type=range]',text:'3'}})},{type:'action',value:JSON.stringify({expect:{selector:'input[type=range]',value:'3'}})}]},
  {app:'html',steps:[{type:'code',value:'<h1>Live preview check</h1>'},{type:'action',value:JSON.stringify({expect:{selector:'#code',contains:'Live preview'}})}]},
  {app:'dom',steps:[{type:'code',value:'<h1>DOM check</h1>'},{type:'run'}]},
  {app:'p5',steps:[{type:'code',value:'function setup(){createCanvas(100,100);background(240)}'},{type:'run'}]},
  {app:'python',steps:[{type:'code',value:'print(42)'},{type:'run'},{type:'action',value:JSON.stringify({expect:{selector:'#output',contains:'42'}})}]},
 ];
 for(const item of cases){
  const draft={format:'waypoints-clip-draft-v1',title:'Adapter '+item.app,...item};await page.locator('#import').setInputFiles({name:'clip.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(draft))});await page.waitForFunction(()=>document.querySelector('#status').textContent==='Draft imported');
  if(item.app==='science'){await page.click('#record');await page.waitForFunction(()=>/Recording tab|Recording failed/.test(document.querySelector('#status').textContent));assert.match(await page.locator('#status').innerText(),/^Recording tab/)}
  await page.click('#preview');await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),null,{timeout:120000});assert.equal(await page.locator('#status').innerText(),'Preview complete',item.app);
  if(item.app==='science'){await page.screenshot({path:dir+'/science-adapter.png'});await page.click('#stop');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('WebM ready'));await page.locator('#video').evaluate(v=>v.load());await page.waitForFunction(()=>document.querySelector('#video').readyState>=2);assert.ok(await page.locator('#video').evaluate(v=>v.videoWidth>0))}
  results.push({app:item.app,preview:'pass',...(item.app==='science'?{recording:'pass'}:{})});console.log(item.app,'passed');
 }
 const catalogue=await page.evaluate(async()=>await(await fetch('./lesson-clips.json')).json());
 for(const slug of ['science/chemistry/states','maths/algebra/brackets']){
  const index=catalogue.findIndex(c=>c.source.lesson===slug&&!c.mode);assert.ok(index>=0);
  await page.selectOption('#lessonClip',String(index));await page.click('#loadLessonClip');assert.match(await page.locator('#status').innerText(),/from lesson frontmatter/);
  await page.click('#preview');await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),null,{timeout:120000});assert.equal(await page.locator('#status').innerText(),'Preview complete',slug);results.push({existingFrontmatter:slug,preview:'pass'});
 }
 // A failed assertion cannot masquerade as a successful preview.
 const bad={format:'waypoints-clip-draft-v1',title:'Failure',app:'science',steps:[{type:'action',value:JSON.stringify({expect:{selector:'#status',contains:'THIS MUST FAIL'}})}]};
 await page.locator('#import').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(bad))});await page.waitForFunction(()=>document.querySelector('#status').textContent==='Draft imported');await page.click('#preview');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Preview failed'),null,{timeout:90000});
 const manual={...bad,steps:[{type:'action',value:JSON.stringify({click:{selector:'#preview',preview:true}})}]};await page.locator('#import').setInputFiles({name:'manual.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(manual))});await page.waitForFunction(()=>document.querySelector('#status').textContent==='Draft imported');await page.click('#preview');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Manual recording required'));assert.match(await page.locator('#capabilities').innerText(),/Manual/);
 await page.setViewportSize({width:390,height:844});await page.goto(base+'?workspace=1');await page.waitForFunction(()=>document.querySelector('#authorProfile').options.length>0);await page.selectOption('#authorProfile','reading');await page.selectOption('#authorPlayground','none');await page.click('#newFromSettings');await page.waitForFunction(()=>document.querySelector('#courseLesson').options.length===3);assert.equal(await page.locator('#authorPlayground').inputValue(),'none');assert.equal(await page.locator('#authorProfile').inputValue(),'reading');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));await page.screenshot({path:dir+'/authoring-mobile.png',fullPage:true});
 assert.deepEqual(errors,[]);console.log('Authoring and adapter browser workflows passed');
}catch(error){if(page)await page.screenshot({path:dir+'/authoring-failure.png'}).catch(()=>{});results.push({error:error.stack});throw error}
finally{await writeFile(dir+'/authoring-results.json',JSON.stringify({results,errors},null,2));await browser?.close();server.kill()}
