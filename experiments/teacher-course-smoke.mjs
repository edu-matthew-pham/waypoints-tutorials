// Teachers menu and Make a lesson (needs `npm run build` first): the menu lists what content/teachers/index.md links,
// Teachers is off the home page's subject list, pages fit at 1280 and 390px, and lesson 1's route works: its link to a
// pointer page, Make a primer for this, a Lock-in prediction written over the starter (format passes), the student link.
// Waits for conditions, never fixed pauses: CI machines are slower (WP_SLOW=4 throttles the CPU to check locally).
//   CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node experiments/teacher-course-smoke.mjs
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { parse as YAMLparse } from 'yaml';
const PORT=8797, root=`http://127.0.0.1:${PORT}/`;
const server = spawn(process.execPath, ['tools/serve.mjs','dist',String(PORT)],{stdio:'ignore'});
for (let n = 0; n < 80; n++) { try { if ((await fetch(root)).ok) break; } catch { /* starting */ } await new Promise((r) => setTimeout(r, 250)); }
const b = await chromium.launch({headless:true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args:['--no-sandbox']});
const ctx = await b.newContext({viewport:{width:1280,height:1000}, permissions:['clipboard-read','clipboard-write']});
const SLOW = Number(process.env.WP_SLOW || 0);
const newPage = async () => { const pg = await ctx.newPage(); pg.setDefaultTimeout(30000); pg.on('pageerror', (e) => errors.push(`${pg.url()}: ${e.message}`));
  if (SLOW) { const cdp = await ctx.newCDPSession(pg); await cdp.send('Emulation.setCPUThrottlingRate', { rate: SLOW }); } return pg; };
const errors = []; const p = await newPage();
// Create is ready when its editor holds text and the format check has run.
const createReady = (pg) => pg.waitForFunction(() => document.querySelector('#text')?.value && document.querySelector('#problems li'));
const formatPassed = (pg) => pg.waitForFunction(() => document.querySelector('#problems li.ok') && !document.querySelector('#problems li:not(.ok)'));
const LESSONS = ['first-primer', 'one-idea', 'misconception', 'checks', 'video', 'share', 'example-seasons'];
const shots = process.env.WP_SHOTS; // optional folder for screenshots
// How far the page scrolls sideways, and which elements stick out (named in the failure message).
const over = async (pg) => pg.evaluate(() => { const W = document.documentElement.clientWidth, o = document.documentElement.scrollWidth - W;
  return o > 0 ? `${o}px: ${[...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > W + 1).slice(0, 6).map((e) => `${e.tagName.toLowerCase()}.${e.className}`).join(' ')}` : 0; });
try {
  await p.goto(root);
  const menus = await p.$$eval('.sitenav .sn-top', es=>es.map(e=>e.textContent));
  const sub = await p.$$eval('.sn-dd:last-of-type .sn-sub a', es=>es.map(e=>[e.textContent,e.getAttribute('href')]));
  const links = YAMLparse(readFileSync('content/teachers/index.md', 'utf8').split('---')[1]).links.map((l) => l.href);
  assert.deepEqual(sub.map(x=>x[1]), links, 'the Teachers menu lists what content/teachers/index.md links');
  assert.ok(links.includes('teachers/make-a-lesson/'));
  assert.equal(await p.locator('ul.lessons a[href="teachers/"]').count(), 0, 'not on home subject list');
  await p.goto(root+'teachers/'); console.log('teachers page', await p.$$eval('ul.lessons a', es=>es.map(e=>e.getAttribute('href'))));
  await p.goto(root+'maths-teachers/'); console.log('teachers menu on at maths-teachers:', await p.locator('.sn-dd.on .sn-top').textContent());
  // 320px as well as 390px: Chrome on CI sets type a little wider than local Chromium, so tight fits show up here first.
  for (const w of [1280,390,320]) { await p.setViewportSize({width:w,height:900});
    for (const u of ['teachers/','teachers/make-a-lesson/','teach/teachers/make-a-lesson/', ...LESSONS.flatMap((l) => [`teachers/make-a-lesson/${l}/`, `teach/teachers/make-a-lesson/${l}/`])]) { await p.goto(root+u); const o=await over(p); assert.ok(!o, `overflow at ${w}px on ${u}: ${o}`); if (shots) await p.screenshot({path:`${shots}/${w}-${u.replace(/\W+/g,'_')}.png`, fullPage:true}); } }
  await p.setViewportSize({width:1280,height:1000});
  // Every relative link in the course's lessons resolves.
  for (const l of LESSONS) { await p.goto(`${root}teachers/make-a-lesson/${l}/`);
    for (const h of await p.$$eval('section.step a[href], .intro a[href], main a[href]', (as) => as.map((a) => a.href).filter((x) => x.startsWith(location.origin) && !x.includes('#'))))
      assert.ok((await fetch(h)).ok, `${l}: link ${h}`); }
  // Create's start page links to the course.
  await p.goto(root+'code/create/'); assert.equal(await p.locator('#createStart a[href="../../teachers/make-a-lesson/"]').count(), 1, 'Create links to Make a lesson');
  await p.goto(root+'teachers/make-a-lesson/first-primer/');
  console.log('lesson menu on:', await p.locator('.sn-dd.on .sn-top').textContent());
  const href = await p.locator('section.step a', {hasText:'curriculum page for one waypoint'}).getAttribute('href');
  await p.goto(new URL(href, p.url()).href); assert.match(p.url(), /teach\/curriculum\/history\/AC9HH7S03\/n1\/$/);
  await p.click('a.make');
  await p.waitForFunction(() => document.querySelector('#text')?.value.includes('node: AC9HH7S03 n1'));
  await createReady(p);
  const ta = p.locator('#text');
  assert.equal(await p.locator('#authorTopic').inputValue(), 'Origin and content', 'Topic comes from the waypoint, not the last lesson');
  // Rewrite the intro, then click on the Think first line and add a prediction.
  let text = await ta.inputValue();
  assert.match(text, /Replace this introduction/);
  const lines = text.split('\n'); const i = lines.findIndex(l=>l.startsWith('Ask a question students can answer'));
  await ta.evaluate((el, pos)=>{el.focus(); el.setSelectionRange(pos,pos);}, text.indexOf('Ask a question students can answer')+3);
  await p.click('#addpred');
  await p.waitForFunction(() => document.querySelector('#text').value.includes('type: predict'));
  await p.keyboard.type('A photo shows soldiers marching. Who made this source?');
  await p.waitForFunction(() => document.querySelector('#text').value.includes('Who made this source?'));
  // Now the options and actual, typed over the starter values; and the intro.
  for (const [a,bb] of [['"first guess", "second guess"','"The soldiers", "Whoever took the photograph", "You can\'t tell from the picture alone"'],['What it really does, shown after Run.','You can\'t tell from the picture alone: origin needs a caption or record.'],['Replace this introduction with one or two sentences students will read first.','By the end you can say who made a source, and what it shows, and keep the two apart.']]) {
    const t = await ta.inputValue(); const at = t.indexOf(a); assert.ok(at>=0, a);
    await ta.evaluate((el,[x,y])=>{el.focus(); el.setSelectionRange(x,y);}, [at, at+a.length]); await p.keyboard.insertText(bb); }
  await formatPassed(p);   // the starter with the new question validates
  await p.click('button:has-text("Copy student link")');
  await p.waitForFunction(async () => /view\.html#l=/.test(await navigator.clipboard.readText().catch(() => '')));
  const link = await p.evaluate(()=>navigator.clipboard.readText());
  const s = await newPage(); await s.goto(link);
  await s.locator('text=Who made this source').first().waitFor();   // the student view shows the question
  // The no-waypoint route (lesson 1's Not History?): any subject, Primer, a topic, Add a lesson starter.
  const e = await newPage(); await e.goto(root+'code/create/?workspace=1'); await createReady(e);
  await e.waitForFunction(() => document.querySelector('#authorProfile option[value="primer"]'));
  await e.selectOption('#authorSubject', 'english'); await e.selectOption('#authorProfile', 'primer'); await e.fill('#authorTopic', 'Persuasive openings');
  const before = await e.locator('#courseLesson option').count();
  await e.click('#newFromSettings');
  await e.waitForFunction((n) => document.querySelector('#courseLesson').options.length === n + 1 && document.querySelector('#text').value.includes('Persuasive openings'), before);
  const et = await e.locator('#text').inputValue();
  assert.match(et, /shape: "?primer/); assert.match(et, /Replace this introduction/); assert.match(et, /Ask a question students can answer before they are taught/);
  await formatPassed(e);   // the no-waypoint primer validates
  assert.deepEqual(errors, []);
  console.log('teacher-course-smoke: pass');
} catch (err) {
  // CI's logs can't always be read from where the test is fixed; an annotation can (the API lists it), so say what failed there.
  if (process.env.GITHUB_ACTIONS) console.log(`::error title=teacher-course-smoke::${String(err?.message || err).slice(0, 900).replace(/%/g, '%25').replace(/\r?\n/g, '%0A')}`);
  throw err;
} finally { await b.close(); server.kill(); }
