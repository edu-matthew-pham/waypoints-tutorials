import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';
import {spawn} from 'node:child_process';
import {mkdir,writeFile,readFile,mkdtemp} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import {readPackage,readZipEntries} from '../create/lesson-package.mjs';
const dir='browser-recorder-results';await mkdir(dir,{recursive:true});
const server=spawn(process.execPath,['tools/serve.mjs','dist','8780'],{stdio:'inherit'}),base='http://127.0.0.1:8780/code/create/';
let browser,page;const errors=[],results=[];
const delay=ms=>new Promise(r=>setTimeout(r,ms));
async function download(page,selector,name){const event=page.waitForEvent('download');await page.click(selector);const file=await event;const path=join(dir,name);await file.saveAs(path);return new Blob([await readFile(path)],{type:'application/zip'})}
async function extract(blob){const dest=await mkdtemp(join(tmpdir(),'waypoints-package-'));for(const [name,bytes] of await readZipEntries(blob)){const path=join(dest,name);await mkdir(dirname(path),{recursive:true});await writeFile(path,bytes)}return dest}
async function recordCurrent(page, checkChangedLesson=false){
 await page.locator('#draftClip option').first().waitFor({state:'attached'});
 await page.waitForFunction(()=>!document.querySelector('#recordClip').disabled);
 await page.click('#recordClip');await page.waitForURL(/clip\.html\?draft=/);
 await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Loaded draft lesson'));
 assert.ok(await page.locator('#caption').isDisabled(),'Lesson-bound instructions stay tied to Markdown');
 await page.click('#record');await page.waitForFunction(()=>/Recording tab|Recording failed/.test(document.querySelector('#status').textContent));
 assert.match(await page.locator('#status').innerText(),/^Recording tab/);
 await page.click('#preview');await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),null,{timeout:90000});
 assert.equal(await page.locator('#status').innerText(),'Preview complete');
 await page.click('#stop');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('WebM ready'));
 if(checkChangedLesson){
   const original=await page.evaluate(async()=>{const {readDraft,updateDraft}=await import('./draft-store.mjs');const id=new URLSearchParams(location.search).get('draft'),record=await readDraft(id);await updateDraft(id,r=>({...r,files:{...r.files,'note.txt':'Changed while recording'}}));return record.files});
   await page.click('#attachRecording');await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Lesson changed'));
   await page.evaluate(async files=>{const {updateDraft}=await import('./draft-store.mjs');await updateDraft(new URLSearchParams(location.search).get('draft'),r=>({...r,files}))},original);
 }
 await page.click('#attachRecording');await page.waitForURL(/\/code\/create\/\?lesson=/);
 await page.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— recorded'));
 await page.reload();await page.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— recorded'));
 await page.frameLocator('#preview').locator('video').first().waitFor();
}
try{
 for(let n=0;n<40;n++){try{if((await fetch(base)).ok)break}catch{}await delay(250)}
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage','--auto-accept-this-tab-capture','--auto-select-tab-capture-source-by-title=Waypoints · Create clip','--allow-http-screen-capture']});
 const context=await browser.newContext({viewport:{width:1280,height:1000}});
 // Local headless-shell verification only; CI uses full Chrome's real tab capture.
 if(process.env.WP_TEST_CANVAS_CAPTURE==='1')await context.addInitScript(()=>{navigator.mediaDevices.getDisplayMedia=async()=>{const canvas=document.createElement('canvas');canvas.width=640;canvas.height=360;const ctx=canvas.getContext('2d');let x=0;const timer=setInterval(()=>{ctx.fillStyle='white';ctx.fillRect(0,0,640,360);ctx.fillStyle='blue';ctx.fillRect(x++%600,20,40,40)},50);const stream=canvas.captureStream(20);stream.getVideoTracks()[0].addEventListener('ended',()=>clearInterval(timer));return stream}});
 page=await context.newPage();page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.waitForFunction(()=>document.querySelector('#courseLesson').options.length===1);
 await page.fill('#courseTitle','Turtle course');await page.fill('#courseSummary','Two lessons with recorded explanations.');await page.locator('#courseSummary').blur();
 await recordCurrent(page,true);
 const lessonZip=await download(page,'#downloadPackage','lesson-package.zip'),lesson=await readPackage(lessonZip);
 assert.equal(Object.keys(lesson.clips).length,1);assert.match(lesson.files['lesson.md'],/clip:/);
 results.push({lessonExport:'pass',bytes:lessonZip.size,recordedClips:1});
 await page.click('#addLesson');await page.waitForFunction(()=>document.querySelector('#courseLesson').options.length===2);
 await page.waitForFunction(()=>document.querySelector('#text').value.includes('title: Lesson 2'));
 const second=await page.locator('#text').inputValue();await page.fill('#text',second.replace('title: Lesson 2','title: Second turtle lesson').replace('try: { starter: \"shape.py#start\", height: 420 }','try: { starter: \"shape.py#start\", height: 420 }\nquery: { speed: 9 }'));
 await page.locator('#text').evaluate(el=>el.setSelectionRange(el.value.indexOf('## Run')+8,el.value.indexOf('## Run')+8));
 await page.click('#addclip');assert.match(await page.locator('#text').inputValue(),/speed: 9/);assert.match(await page.locator('#text').inputValue(),/app: true/);assert.equal((await page.locator('#text').inputValue()).match(/^query:/gm).length,1);await page.waitForFunction(()=>!document.querySelector('#recordClip').disabled);
 await recordCurrent(page);
 await page.click('#moveLessonUp');await page.waitForFunction(()=>document.querySelector('#courseLesson').options[0].textContent==='Second turtle lesson');
 await page.click('#moveLessonDown');await page.waitForFunction(()=>document.querySelector('#courseLesson').options[1].textContent==='Second turtle lesson');
 await page.click('#previousLesson');await page.waitForFunction(()=>document.querySelector('#text').value.includes('title: My first turtle lesson'));
 await page.click('#nextLesson');await page.waitForFunction(()=>document.querySelector('#text').value.includes('title: Second turtle lesson'));
 const courseZip=await download(page,'#downloadCourse','course-package.zip'),course=await readPackage(courseZip);
 assert.equal(course.lessons.length,2);assert.equal(course.course.title,'Turtle course');assert.ok(course.lessons.every(l=>Object.keys(l.clips).length===1));
 const dest=await extract(courseZip),offline=await context.newPage();await offline.route(/^https?:/,route=>route.abort());
 await offline.goto(pathToFileURL(join(dest,'turtle-course/index.html')).href);
 const links=offline.locator('ol a');assert.equal(await links.count(),2);
 await links.first().click();await offline.waitForFunction(()=>document.querySelector('video')?.readyState>=2);
 await offline.locator('video').evaluate(v=>v.play());await offline.waitForFunction(()=>document.querySelector('video').currentTime>0);
 await offline.getByRole('link',{name:'Next lesson',exact:true}).click();await offline.waitForFunction(()=>document.querySelector('video')?.readyState>=2);
 assert.match(await offline.locator('h1').innerText(),/Second turtle lesson/);await offline.close();
 results.push({courseExport:'pass',lessons:2,offlineVideoPlayback:'pass',bytes:courseZip.size,capture:process.env.WP_TEST_CANVAS_CAPTURE==='1'?'local canvas test stream':'real Chrome tab'});
 const importedContext=await browser.newContext({viewport:{width:1280,height:1000}}),importedPage=await importedContext.newPage();importedPage.on('dialog',d=>d.accept());importedPage.on('pageerror',e=>errors.push(e.message));
 await importedPage.goto(base);await importedPage.waitForFunction(()=>document.querySelector('#courseLesson').options.length===1);
 await importedPage.locator('#importPackage').setInputFiles({name:'course.zip',mimeType:'application/zip',buffer:Buffer.from(await courseZip.arrayBuffer())});
 await importedPage.waitForFunction(()=>document.querySelector('#packageStatus').textContent.startsWith('Course package imported'));
 assert.equal(await importedPage.locator('#courseLesson option').count(),2);assert.equal(await importedPage.locator('#courseTitle').inputValue(),'Turtle course');
 await importedPage.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— recorded'));
 const original=await importedPage.locator('#text').inputValue();await importedPage.fill('#text',original+'\nA new instruction.\n');
 await importedPage.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— needs updating'));
 const stale=await download(importedPage,'#downloadPackage','stale-package.zip');assert.equal(Object.keys((await readPackage(stale)).clips).length,0);
 await importedPage.fill('#text',original);await importedPage.waitForFunction(()=>document.querySelector('#draftClip').selectedOptions[0]?.textContent.endsWith('— recorded'));
 await importedPage.locator('#importPackage').setInputFiles({name:'lesson.zip',mimeType:'application/zip',buffer:Buffer.from(await lessonZip.arrayBuffer())});
 await importedPage.waitForFunction(()=>document.querySelector('#packageStatus').textContent.startsWith('Lesson package imported'));
 assert.equal(await importedPage.locator('#courseLesson option').count(),3);
 await importedPage.screenshot({path:join(dir,'course-workspace.png'),fullPage:true});
 await importedPage.setViewportSize({width:390,height:844});assert.ok(await importedPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Course editor fits mobile viewport');
 await importedPage.screenshot({path:join(dir,'course-mobile.png'),fullPage:true});
 results.push({courseImport:'pass',lessonImport:'pass',staleRecording:'excluded',localPersistence:'pass'});
 assert.deepEqual(errors,[]);console.log(JSON.stringify(results));
}catch(error){if(page)await page.screenshot({path:join(dir,'course-failure.png'),fullPage:true}).catch(()=>{});results.push({error:error.stack});throw error}
finally{await writeFile(join(dir,'course-results.json'),JSON.stringify({results,errors},null,2));await browser?.close();server.kill()}
