// Teachers menu and Make a lesson (needs `npm run build` first): the menu lists the course and the two teacher pages,
// Teachers is off the home page's subject list, pages fit at 1280 and 390px, and lesson 1's route works: its link to a
// pointer page, Make a primer for this, a Lock-in prediction written over the starter (format passes), the student link.
//   CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node experiments/teacher-course-smoke.mjs
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
const PORT=8797, root=`http://127.0.0.1:${PORT}/`;
const server = spawn(process.execPath, ['tools/serve.mjs','dist',String(PORT)],{stdio:'ignore'});
await new Promise(r=>setTimeout(r,800));
const b = await chromium.launch({headless:true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args:['--no-sandbox']});
const ctx = await b.newContext({viewport:{width:1280,height:1000}, permissions:['clipboard-read','clipboard-write']});
const errors=[]; const p = await ctx.newPage(); p.on('pageerror',e=>errors.push(e.message));
const shots = process.env.WP_SHOTS; // optional folder for screenshots
const over = async (pg) => pg.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
try {
  await p.goto(root);
  const menus = await p.$$eval('.sitenav .sn-top', es=>es.map(e=>e.textContent));
  const sub = await p.$$eval('.sn-dd:last-of-type .sn-sub a', es=>es.map(e=>[e.textContent,e.getAttribute('href')]));
  assert.deepEqual(sub.map(x=>x[1]), ['teachers/make-a-lesson/','maths-teachers/','choosing-ai-tools/']);
  assert.equal(await p.locator('ul.lessons a[href="teachers/"]').count(), 0, 'not on home subject list');
  await p.goto(root+'teachers/'); console.log('teachers page', await p.$$eval('ul.lessons a', es=>es.map(e=>e.getAttribute('href'))));
  await p.goto(root+'maths-teachers/'); console.log('teachers menu on at maths-teachers:', await p.locator('.sn-dd.on .sn-top').textContent());
  for (const w of [1280,390]) { await p.setViewportSize({width:w,height:900});
    for (const u of ['teachers/','teachers/make-a-lesson/','teachers/make-a-lesson/first-primer/','teachers/make-a-lesson/example-seasons/','teach/teachers/make-a-lesson/','teach/teachers/make-a-lesson/first-primer/']) { await p.goto(root+u); const o=await over(p); assert.ok(o<=0, u); if (shots) await p.screenshot({path:`${shots}/${w}-${u.replace(/\W+/g,'_')}.png`, fullPage:true}); } }
  await p.setViewportSize({width:1280,height:1000});
  await p.goto(root+'teachers/make-a-lesson/first-primer/');
  console.log('lesson menu on:', await p.locator('.sn-dd.on .sn-top').textContent());
  const href = await p.locator('section.step a', {hasText:'curriculum page for one waypoint'}).getAttribute('href');
  await p.goto(new URL(href, p.url()).href); assert.match(p.url(), /teach\/curriculum\/history\/AC9HH7S03\/n1\/$/);
  await p.click('a.make'); await p.waitForTimeout(3000);
  const ta = p.locator('#text');
  // Rewrite the intro, then click on the Think first line and add a prediction.
  let text = await ta.inputValue();
  assert.match(text, /Replace this introduction/);
  const lines = text.split('\n'); const i = lines.findIndex(l=>l.startsWith('Ask a question students can answer'));
  await ta.evaluate((el, pos)=>{el.focus(); el.setSelectionRange(pos,pos);}, text.indexOf('Ask a question students can answer')+3);
  await p.click('#addpred'); await p.waitForTimeout(500);
  await p.keyboard.type('A photo shows soldiers marching. Who made this source?');
  await p.waitForTimeout(800);
  // Now the options and actual, typed over the starter values; and the intro.
  for (const [a,bb] of [['"first guess", "second guess"','"The soldiers", "Whoever took the photograph", "You can\'t tell from the picture alone"'],['What it really does, shown after Run.','You can\'t tell from the picture alone: origin needs a caption or record.'],['Replace this introduction with one or two sentences students will read first.','By the end you can say who made a source, and what it shows, and keep the two apart.']]) {
    const t = await ta.inputValue(); const at = t.indexOf(a); assert.ok(at>=0, a);
    await ta.evaluate((el,[x,y])=>{el.focus(); el.setSelectionRange(x,y);}, [at, at+a.length]); await p.keyboard.insertText(bb); }
  await p.waitForTimeout(1500);
  assert.equal(await p.locator('text=Lesson format passed').count(), 1, 'starter with the new question validates');
  await p.click('button:has-text("Copy student link")'); await p.waitForTimeout(500);
  const link = await p.evaluate(()=>navigator.clipboard.readText());
  const s = await ctx.newPage(); await s.goto(link); await s.waitForTimeout(1500);
  assert.equal(await s.locator('text=Who made this source').count(), 1, 'student view shows the question');
  assert.deepEqual(errors, []);
  console.log('teacher-course-smoke: pass');
} finally { await b.close(); server.kill(); }
