import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';
import {spawn} from 'node:child_process';
import {mkdir} from 'node:fs/promises';
const server=spawn(process.execPath,['tools/serve.mjs','dist','8794'],{stdio:'inherit'});
const base='http://127.0.0.1:8794/code/create/';let browser;
try {
  for(let i=0;i<40;i++){try{if((await fetch(base)).ok)break}catch{}await new Promise(r=>setTimeout(r,200))}
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
  const context=await browser.newContext({permissions:['clipboard-read','clipboard-write'],viewport:{width:1280,height:900}});
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.locator('#startPrompt:enabled').waitFor();
  assert.equal(await page.locator('#createWorkspace').isVisible(),false);
  assert.equal(await page.locator('.start-card:visible').count(),3);
  await page.click('#startPrompt');await page.locator('#copyStartPrompt:enabled').waitFor();
  await page.click('#copyStartPrompt');await page.waitForFunction(()=>document.querySelector('#startCopyStatus').textContent.startsWith('Prompt copied'));
  assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/Do not assume this is a coding lesson/);
  assert.equal(await page.locator('#authorSubject').isVisible(),false,'Copying the starter needs no configuration');
  await page.click('#promptOpenFiles');
  const source={name:'lesson.md',mimeType:'text/markdown',buffer:Buffer.from('---\ntitle: Community garden\nsummary: Choose a planting location.\nlanguage: maths\n---\n## Think\nWhat evidence would help you choose a suitable location?\n')};
  await page.setInputFiles('#startSourceFiles',[source]);
  await page.locator('#createWorkspace:visible').waitFor();
  assert.match(await page.locator('#text').inputValue(),/Community garden/);
  assert.equal(await page.locator('#courseLesson option').count(),1,'First source import replaces the unused starter');
  await page.click('#copyValidation');
  await page.waitForFunction(()=>document.querySelector('#validationStatus').textContent.startsWith('Validation report copied'));
  let report=JSON.parse(await page.evaluate(()=>navigator.clipboard.readText()));
  assert.equal(report.valid,false);assert.match(report.results[0].errors.join('\n'),/stage must be/);
  await page.fill('#text',source.buffer.toString().replace('## Think\n','## Think\n\n```step\nstage: info\n```\n'));
  await page.click('#copyValidation'); // Must validate the latest edit, before the debounce fires.
  report=JSON.parse(await page.evaluate(()=>navigator.clipboard.readText()));
  assert.equal(report.valid,true);assert.equal(report.scope,'lesson-format');
  await page.evaluate(()=>{window.savedClipboardWriter=navigator.clipboard.writeText;navigator.clipboard.writeText=()=>Promise.reject(Error('Clipboard blocked'))});
  await page.click('#copyValidation');await page.locator('#validationText:visible').waitFor();
  assert.equal(JSON.parse(await page.locator('#validationText').inputValue()).valid,true);
  await page.evaluate(()=>{navigator.clipboard.writeText=window.savedClipboardWriter;delete window.savedClipboardWriter});
  const validatorDownload=page.waitForEvent('download');await page.getByRole('link',{name:'Download validator',exact:true}).click();
  assert.equal((await validatorDownload).suggestedFilename(),'validator.zip');
  const original=await page.locator('#courseLesson').inputValue();
  await page.click('#backToStart');await page.click('#startExample');
  await page.locator('#createWorkspace:visible').waitFor();
  assert.equal(await page.locator('#courseLesson option').count(),2,'Example adds a lesson rather than replacing the course');
  await page.selectOption('#courseLesson',original);
  await page.waitForFunction(()=>document.querySelector('#text').value.includes('Community garden'));
  await page.click('#backToStart');await page.reload();await page.locator('#startOpen:enabled').waitFor();
  await page.click('#startOpen');await page.click('#startResume');
  assert.match(await page.locator('#text').inputValue(),/Community garden/,'Resume keeps the active draft');
  const downloadPromise=page.waitForEvent('download');await page.click('#downloadCourse');const download=await downloadPromise;
  const packagePath=await download.path();
  await page.click('#backToStart');await page.click('#startOpen');
  page.once('dialog',dialog=>dialog.accept());await page.setInputFiles('#importPackage',packagePath);
  await page.waitForFunction(()=>document.querySelector('#packageStatus').textContent.startsWith('Course package imported'));
  assert.equal(await page.locator('#courseLesson option').count(),2);
  await page.click('#backToStart');await page.click('#startOpen');await page.setInputFiles('#startSourceFiles',{name:'notes.txt',mimeType:'text/plain',buffer:Buffer.from('Not a lesson')});
  await page.waitForFunction(()=>document.querySelector('#startStatus').textContent.includes('Select a lesson.md'));
  assert.equal(await page.locator('#createWorkspace').isVisible(),false,'Invalid imports remain on Start');
  for(const width of [1280,390]){
    await page.setViewportSize({width,height:900});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));
  }
  await mkdir('browser-recorder-results',{recursive:true});
  await page.screenshot({path:'browser-recorder-results/create-entry-mobile.png',fullPage:true});
  const lesson=await page.locator('#courseLesson').inputValue();
  await page.goto(base+'?lesson='+encodeURIComponent(lesson));
  await page.locator('#createWorkspace:visible').waitFor();
  assert.equal(await page.locator('#createStart').isVisible(),false,'Recorder returns bypass Start');
  assert.deepEqual(errors,[]);
  console.log('Entry routes, prompt/report copy and clipboard fallback, validator download, source/package imports, safe examples, resume, mobile and recorder returns passed');
} finally {await browser?.close();server.kill()}
