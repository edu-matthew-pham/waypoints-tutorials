import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
const dir='browser-recorder-results';mkdirSync(dir,{recursive:true});
const server=spawn(process.execPath,['tools/serve.mjs','dist','8765'],{stdio:'inherit'});
const delay=ms=>new Promise(r=>setTimeout(r,ms));
let browser;const results=[];
try{
 for(let n=0;n<40;n++){try{if((await fetch('http://127.0.0.1:8765/experiments/browser-recorder.html')).ok)break;}catch{}await delay(250)}
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--auto-select-desktop-capture-source=Browser WebM recording experiment','--allow-http-screen-capture','--enable-usermedia-screen-capturing']});
 const page=await browser.newPage({viewport:{width:1280,height:900},permissions:['camera','microphone']});
 page.on('pageerror',e=>console.error('PAGE ERROR:',e.message));
 await page.goto('http://127.0.0.1:8765/experiments/browser-recorder.html');
 for(const kind of ['turtle','physics']){
   await page.selectOption('#app',kind);await page.click('#load');
   const frame=page.frameLocator('#demo');
   await page.waitForFunction(kind => { const f=document.querySelector('#demo'); return f && f.contentWindow && f.contentWindow.location.href.includes(kind==='turtle'?'_playground/index.html':'_playground-board/index.html'); },kind,{timeout:10000}).catch(async e=>{console.log('Navigation diagnostic:',await page.locator('#demo').getAttribute('src'));throw e});
   await delay(1500);
   const details=await frame.locator('body').evaluate(el=>({text:el.innerText.slice(0,300),canvas:el.querySelectorAll('canvas').length,svg:el.querySelectorAll('svg').length,error:el.querySelector('#error')?.textContent||''}));
   await page.screenshot({path:dir+'/'+kind+'.png'});
   let recordStatus='';
   try{
     await page.click('#record',{timeout:8000});
     await delay(3000);
     recordStatus=await page.locator('#status').innerText();
     if(await page.locator('#stop').isEnabled()){await page.click('#stop');await delay(1000)}
   }catch(e){recordStatus='Capture not available in automated headless Chromium: '+e.message.slice(0,160)}
   results.push({kind,...details,recordStatus});
   console.log(JSON.stringify(results.at(-1)));
 }
 // Test the teacher-facing clip editor, not just the standalone recorder.
 await page.goto('http://127.0.0.1:8765/code/create/clip.html');
 await page.locator('#steps button').first().waitFor();
 await page.fill('#title','Automated clip test');
 await page.fill('#caption','An edited caption');
 await page.click('#saveStep');
 if(!await page.locator('#steps').innerText().then(t=>t.includes('An edited caption')))throw Error('Step editing failed');
 const dlPromise=page.waitForEvent('download');
 await page.click('#export');
 const dl=await dlPromise;
 const json=JSON.parse(await (await import('node:fs/promises')).readFile(await dl.path(),'utf8'));
 if(json.title!=='Automated clip test'||json.steps[0].caption!=='An edited caption')throw Error('JSON export mismatch');
 await page.locator('#import').setInputFiles({name:'draft.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(json))});
 await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Draft imported'));
 await page.click('#preview');
 await page.waitForFunction(()=>/Preview complete|Preview failed/.test(document.querySelector('#status').textContent),{timeout:20000});
 const preview=await page.locator('#status').innerText();
 if(!preview.includes('Preview complete'))throw Error('Turtle preview: '+preview);
 results.push({kind:'editor',export:'pass',import:'pass',preview});
 writeFileSync(dir+'/results.json',JSON.stringify(results,null,2));
 if(results.some(r=>r.error||r.text.includes('404 Not Found')||(r.kind==='turtle'&&!r.canvas)||(r.kind==='physics'&&!r.svg)))process.exitCode=1;
}finally{await browser?.close();server.kill();}
