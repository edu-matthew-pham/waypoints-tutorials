import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
const dir='browser-recorder-results';mkdirSync(dir,{recursive:true});
const server=spawn(process.execPath,['tools/serve.mjs','dist','8765'],{stdio:'inherit'});
const delay=ms=>new Promise(r=>setTimeout(r,ms));
let browser,page;const results=[],errors=[];
try{
 let ready=false;
 for(let n=0;n<40;n++){try{if((await fetch('http://127.0.0.1:8765/code/create/clip.html')).ok){ready=true;break}}catch{}await delay(250)}
 assert.ok(ready,'Built editor server starts');
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage','--auto-accept-this-tab-capture','--auto-select-tab-capture-source-by-title=Waypoints · Create clip','--allow-http-screen-capture','--enable-usermedia-screen-capturing']});
 page=await browser.newPage({viewport:{width:1280,height:900}});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/code/create/clip.html');
 await page.waitForFunction(()=>document.querySelector('#lessonClip').options.length>1);
 const catalogue=await page.evaluate(async()=>await (await fetch('./lesson-clips.json')).json());
 for(const kind of ['turtle','physics']){
   const index=catalogue.findIndex(c=>c.app===kind && (kind==='physics'?c.source.lesson==='ai/foundations/dice-generator':c.source.lesson==='code/python-foundations/turtle-intro' && c.source.step==='explain'));
   assert.ok(index>=0,kind+' frontmatter clip exists');
   const clip=catalogue[index];
   await page.selectOption('#lessonClip',String(index));await page.click('#loadLessonClip');
   assert.match(await page.locator('#status').innerText(),/from lesson frontmatter/);
   await page.waitForFunction(({kind,query})=>{const f=document.querySelector('#demo');try{const u=new URL(f.contentWindow.location.href);return u.pathname.includes(kind==='turtle'?'/_playground/':'/_playground-board/')&&Object.entries(query).every(([k,v])=>u.searchParams.get(k)===v)}catch{return false}},{kind,query:clip.query});
   const frame=page.frameLocator('#demo');
   await frame.locator(kind==='turtle'?'#code':'#gpanel').waitFor();
   const dlPromise=page.waitForEvent('download');await page.click('#export');
   const dl=await dlPromise;const exported=JSON.parse(await readFile(await dl.path(),'utf8'));
   assert.deepEqual(exported,clip,'Direct loading preserves complete converted draft');
   await page.locator('#import').setInputFiles({name:'draft.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(exported))});
   await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Draft imported'));
   await page.click('#record');
   await page.waitForFunction(()=>/Recording tab|Recording failed/.test(document.querySelector('#status').textContent));
   assert.match(await page.locator('#status').innerText(),/^Recording tab/);
   await page.click('#preview');
   await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),null,{timeout:120000});
   assert.match(await page.locator('#status').innerText(),/^Preview complete/);
   if(kind==='turtle'){
     await page.waitForFunction(()=>{const p=document.querySelector('#demo').contentWindow.__playground;return p&&p.status!=='running'},null,{timeout:30000});
     const state=await frame.locator('body').evaluate(()=>window.__playground);
     assert.equal(state.error,null);assert.ok(await frame.locator('canvas').count());
   }else {assert.match(await frame.locator('#gpanel').innerText(),/Roll a word/);await frame.getByRole('button',{name:'Roll once',exact:true}).click();assert.match(await frame.locator('#gpanel').innerText(),/Total: 1/);}
   await page.screenshot({path:dir+'/'+kind+'.png'});
   await page.click('#stop');await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('WebM ready'));
   const recording=await page.evaluate(async()=>{const b=await (await fetch(document.querySelector('#download').href)).blob();return {bytes:b.size,type:b.type,header:Array.from(new Uint8Array(await b.slice(0,4).arrayBuffer()))}});
   assert.ok(recording.bytes>1024);assert.match(recording.type,/video\/webm/);assert.deepEqual(recording.header,[26,69,223,163]);
   const videoDownload=page.waitForEvent('download');await page.click('#download');await (await videoDownload).saveAs(dir+'/'+kind+'.webm');
   await page.locator('#video').evaluate(v=>v.load());await page.waitForFunction(()=>document.querySelector('#video').readyState>=2);
   const dimensions=await page.locator('#video').evaluate(v=>({width:v.videoWidth,height:v.videoHeight}));assert.ok(dimensions.width>0&&dimensions.height>0);
   results.push({kind,source:clip.source,preview:'pass',recording,dimensions});console.log(JSON.stringify(results.at(-1)));
 }
 assert.deepEqual(errors,[],'No browser runtime errors');
}catch(e){if(page)await page.screenshot({path:dir+'/failure.png'}).catch(()=>{});results.push({error:e.stack});throw e}
finally{writeFileSync(dir+'/results.json',JSON.stringify({results,errors},null,2));await browser?.close();server.kill();}
