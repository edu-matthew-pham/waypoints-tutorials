// `npm run render`: record one short clip per step that has a `clip:` block.
// Deterministic: reads lesson.md, starts the app, drives it with Playwright, encodes with ffmpeg.
//   --lesson <slug>   only this lesson        --force      ignore the clip cache
//   --no-serve        app is already running  --out <dir>  output root (default: dist)
//   --seed <url>      first download unchanged clips from the live site (same hash = same clip)
//   --check           only report which clips need recording (writes stale=N to $GITHUB_OUTPUT)
import { chromium } from 'playwright-core';
import { spawn, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadLessons, validateLesson, getSnippet } from './lesson.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => (argv.includes(n) ? argv[argv.indexOf(n) + 1] : d);
const OUT = opt('--out', 'dist');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const highlightSrc = readFileSync(join(here, 'highlight.cjs'), 'utf8');
const stageHtml = readFileSync(join(here, 'stage.html'), 'utf8').replace('/*HIGHLIGHT*/', () => highlightSrc);
const rendererSrc = readFileSync(fileURLToPath(import.meta.url), 'utf8');

// ---------- cache ----------
// Clips show a playground, so a change to the playground a lesson uses (or its snippets) must re-record
// that lesson's clips. Only that playground counts: editing the micro:bit snippets leaves turtle clips alone.
const SNIPPETS = { playground: 'turtle', 'playground-html': 'html', 'playground-makecode': 'microbit', 'playground-maths': 'maths', 'playground-board': 'maths' };
const sharedCache = new Map();
function sharedFilesHash(lesson) {
  const pg = String(lesson.app?.command ?? '').match(/_(playground[\w-]*)/)?.[1];
  const key = pg || '';
  if (sharedCache.has(key)) return sharedCache.get(key);
  const h = createHash('sha1');
  const walk = (p) => { if (!existsSync(p)) return; if (statSync(p).isDirectory()) { for (const f of readdirSync(p).sort()) walk(join(p, f)); } else h.update(p).update(readFileSync(p)); };
  if (pg) [pg, 'playground-shared', join('snippets', `${SNIPPETS[pg] ?? pg}.json`)].forEach(walk);
  const d = h.digest('hex');
  sharedCache.set(key, d);
  return d;
}

function stepHash(lesson, step) {
  const h = createHash('sha1');
  h.update(JSON.stringify({ c: step.config, a: lesson.app, p: lesson.pacing, t: lesson.title, l: lesson.language }));
  for (const f of readdirSync(lesson.dir).sort()) {
    const p = join(lesson.dir, f);
    if (f !== 'lesson.md' && statSync(p).isFile()) h.update(f).update(readFileSync(p));
  }
  h.update(stageHtml).update(rendererSrc).update(sharedFilesHash(lesson));
  return h.digest('hex').slice(0, 16);
}

// Download a clip from the live site when its published hash matches: the same inputs give the same clip.
async function seedClip(base, lesson, step, outDir) {
  const url = `${base.replace(/\/$/, '')}/${lesson.slug}/clips/${step.id}`;
  try {
    const meta = await fetch(`${url}.json`, { cache: 'no-store' });
    if (!meta.ok || (await meta.json()).hash !== stepHash(lesson, step)) return false;
    for (const ext of ['mp4', 'jpg']) {
      const r = await fetch(`${url}.${ext}`);
      if (!r.ok) return false;
      writeFileSync(join(outDir, `${step.id}.${ext}`), Buffer.from(await r.arrayBuffer()));
    }
    writeFileSync(join(outDir, `${step.id}.json`), JSON.stringify({ hash: stepHash(lesson, step) }));
    return true;
  } catch { return false; }
}

// ---------- app process ----------
async function startApp(lesson) {
  if (flag('--no-serve')) return null;
  // REPO_ROOT / OUT_DIR let a lesson's command reach shared tooling and built files from any depth.
  const env = { ...process.env, REPO_ROOT: process.cwd(), OUT_DIR: resolve(OUT) };
  const child = spawn(lesson.app.command, { cwd: lesson.dir, shell: true, detached: true, stdio: ['ignore', 'pipe', 'pipe'], env });
  let log = '';
  child.stdout.on('data', (d) => (log += d));
  child.stderr.on('data', (d) => (log += d));
  for (let i = 0; i < 300; i++) {
    if (child.exitCode !== null) throw new Error(`App exited early (code ${child.exitCode}):\n${log.slice(-1200)}`);
    try { if ((await fetch(lesson.app.url)).ok) return child; } catch { /* not up yet */ }
    await sleep(200);
  }
  stopApp(child);
  throw new Error(`App did not respond at ${lesson.app.url} within 60s:\n${log.slice(-1200)}`);
}
function stopApp(child) {
  if (!child) return;
  try { process.kill(-child.pid); } catch { /* already gone */ }
}

// ---------- browser ----------
async function launchBrowser() {
  let executablePath = process.env.CHROMIUM_PATH;
  let args = [];
  if (!executablePath) {
    try { // optional: npm-bundled Chromium for sandboxes that cannot download browsers
      const m = (await import('@sparticuz/chromium')).default;
      executablePath = await m.executablePath();
      args = m.args;
    } catch { /* fall back to Playwright's own browser: npx playwright-core install chromium */ }
  }
  return chromium.launch({ headless: true, executablePath, args });
}

// ---------- locating things inside the app ----------
async function find(frame, name, kinds) {
  for (const k of kinds) {
    const loc =
      k === 'button' ? frame.getByRole('button', { name, exact: true })
      : k === 'label' ? frame.getByLabel(name, { exact: true })
      : k === 'placeholder' ? frame.getByPlaceholder(name, { exact: true })
      : k === 'link' ? frame.getByRole('link', { name, exact: true })
      : frame.getByText(name, { exact: true });
    if ((await loc.count()) > 0) return loc.first();
  }
  throw new Error(`could not find "${name}" in the app (tried ${kinds.join(', ')})`);
}
// { preview: true } looks inside the HTML playground's preview (the student's page), for example
// - click: { selector: "#go", preview: true } and - expect: { selector: "#message", contains: "Go!", preview: true }.
const target = (frame, v, kinds) => {
  const fr = typeof v === 'object' && v.preview ? frame.frameLocator('#preview') : frame;
  return typeof v === 'object' && v.selector ? fr.locator(v.selector).first() : find(fr, typeof v === 'object' ? v.into || v.field : v, kinds);
};

// ---------- one clip ----------
async function recordClip(browser, lesson, step, outDir) {
  const { config: c } = step;
  const p = { ...lesson.pacing, ...(c.pacing || {}) }; // a step may override pacing, e.g. { keyDelayMs: 40 }
  const tmp = join('.render-tmp', `${lesson.slug.replace(/\//g, '_')}-${step.id}`);
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp, { recursive: true });

  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    colorScheme: 'light',
    recordVideo: { dir: tmp, size: { width: 1280, height: 720 } },
  });
  const t0 = Date.now();
  const page = await ctx.newPage();
  await page.setContent(stageHtml);
  const code = c.code ? getSnippet(lesson.dir, c.code) : '';
  const fileLabel = c.code ? c.code.split('#')[0] : '';
  await page.evaluate((o) => window.stage.init(o), {
    title: lesson.title, stage: c.stage, language: lesson.language, cursorMs: p.cursorMs,
    command: lesson.app?.command, caption: c.caption || step.title, code, file: fileLabel, layout: lesson.app?.layout,
  });

  // step.query adds URL parameters to the app; values like "@file.py#region" are replaced by that code.
  const appUrl = () => {
    const u = new URL(lesson.app.url);
    for (const [k, v] of Object.entries(c.query || {})) u.searchParams.set(k, typeof v === 'string' && v.startsWith('@') ? getSnippet(lesson.dir, v.slice(1)) : String(v));
    return u.toString();
  };
  const frame = page.frameLocator('#app');
  const openApp = async () => {
    await page.evaluate((u) => window.stage.showApp(u), appUrl());
    const ready = lesson.app.readySelector ? frame.locator(lesson.app.readySelector).first() : lesson.app.ready ? frame.getByLabel(lesson.app.ready, { exact: true }).first() : null;
    if (ready) await ready.waitFor({ state: 'visible', timeout: 30000 });
    else await sleep(1500);
  };
  if (c.app) await openApp();
  const readyAt = Date.now();
  await sleep(p.preRollMs);

  const go = async (loc, { click = true } = {}) => {
    await loc.scrollIntoViewIfNeeded();
    const b = await loc.boundingBox();
    const x = b.x + b.width / 2, y = b.y + b.height / 2;
    await page.evaluate(([x, y]) => window.stage.moveCursor(x, y), [x, y]);
    await sleep(p.cursorMs + 80);
    if (click) {
      await page.evaluate(([x, y]) => window.stage.ripple(x, y), [x, y]);
      await loc.click();
    }
  };

  for (const action of c.clip) {
    const verb = Object.keys(action)[0];
    const v = action[verb];
    const ctxMsg = `${lesson.slug} ${step.id} "${verb}"`;
    try {
      if (verb === 'caption') { await page.evaluate((t) => window.stage.caption(t), v); await sleep(350); }
      else if (verb === 'clear') { await page.evaluate(([f]) => window.stage.setCode('', f), [typeof v === 'string' ? v : '']); }
      else if (verb === 'show') {
        await page.evaluate(([t, f]) => window.stage.setCode(t, f), [''  , String(v).split('#')[0]]);
        await page.evaluate(([t, cps]) => window.stage.type(t, cps), [getSnippet(lesson.dir, v), p.typeCps]);
        await sleep(600);
      }
      else if (verb === 'run') { await openApp(); await sleep(900); }
      else if (verb === 'wait') await sleep(v);
      else if (verb === 'click') { await go(await target(frame, v, ['button', 'label', 'link', 'text'])); await sleep(p.afterActionMs); }
      else if (verb === 'press') { await page.keyboard.press(v); await sleep(p.afterActionMs); }
      else if (verb === 'type') {
        const loc = await target(frame, v, ['label', 'placeholder']);
        await go(loc);
        // append: true types at the end of what is there (so captions can explain each part as it appears).
        // append: true types at the end; after: "text" types just after the first place that text appears
        // (for example inside a <style> block), so captions can explain each part as it appears.
        if (v.after !== undefined) {
          const at = await loc.evaluate((el, t) => { el.focus(); const i = el.value.indexOf(t); if (i >= 0) el.selectionStart = el.selectionEnd = i + t.length; return i; }, String(v.after));
          if (at < 0) throw new Error(`type.after: ${JSON.stringify(v.after)} is not in the editor`);
        }
        else if (v.append) { await loc.evaluate((el) => { el.focus(); if ('selectionStart' in el) el.selectionStart = el.selectionEnd = el.value.length; }); }
        else await loc.fill('');
        const text = typeof v.text === 'string' && v.text.startsWith('@') ? getSnippet(lesson.dir, v.text.slice(1)) : String(v.text);
        await loc.pressSequentially(text, { delay: p.keyDelayMs });
        await sleep(p.afterActionMs);
      }
      else if (verb === 'expect') {
        const loc = await target(frame, v, ['label', 'text']);
        const want = v.value !== undefined ? String(v.value) : String(v.contains);
        let got = '';
        for (let i = 0; i < 100; i++) {
          got = await loc.evaluate((el) => ('value' in el ? el.value : el.textContent) ?? '');
          if (v.value !== undefined ? got === want : got.includes(want)) break;
          await sleep(100);
          if (i === 99) throw new Error(`expected ${v.value !== undefined ? 'exactly' : 'to contain'} ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
        }
        await sleep(p.afterActionMs + 600); // let the viewer read the result
      }
    } catch (e) {
      await ctx.close().catch(() => {});
      throw new Error(`${ctxMsg} failed: ${e.message}`);
    }
  }
  await sleep(p.postRollMs);

  const video = page.video();
  await ctx.close();
  const webm = await video.path();

  mkdirSync(outDir, { recursive: true });
  const mp4 = join(outDir, `${step.id}.mp4`);
  const trim = Math.max(0, (readyAt - t0) / 1000 - 0.1).toFixed(2);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-ss', trim, '-i', webm, '-an', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '24',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4]);
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-sseof', '-1.2', '-i', mp4, '-frames:v', '1', '-q:v', '3', join(outDir, `${step.id}.jpg`)]);
  rmSync(tmp, { recursive: true, force: true });
  return mp4;
}

// ---------- main ----------
const lessons = loadLessons(opt('--lesson'));
if (!lessons.length) { console.error('No lessons found.'); process.exit(1); }

let failures = 0, stale = 0, seeded = 0;
for (const lesson of lessons) {
  const errs = validateLesson(lesson);
  if (errs.length) { errs.forEach((e) => console.error('✗ ' + e)); failures += errs.length; continue; }
  const clipSteps = [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])].filter((s) => s.config.clip);
  const outDir = join(OUT, lesson.slug, 'clips');
  mkdirSync(outDir, { recursive: true });

  const isSame = (s) => {
    const meta = join(outDir, `${s.id}.json`);
    return existsSync(meta) && existsSync(join(outDir, `${s.id}.mp4`)) && JSON.parse(readFileSync(meta, 'utf8')).hash === stepHash(lesson, s);
  };
  const todo = [];
  for (const s of clipSteps) {
    if (flag('--force')) { todo.push(s); continue; }
    if (isSame(s)) { console.log(`• ${lesson.slug}/${s.id}: unchanged, skipped`); continue; }
    if (opt('--seed') && await seedClip(opt('--seed'), lesson, s, outDir)) { seeded++; console.log(`↓ ${lesson.slug}/${s.id}: unchanged, downloaded from the live site`); continue; }
    todo.push(s);
  }
  stale += todo.length;
  if (!todo.length || flag('--check')) { todo.forEach((s) => console.log(`○ ${lesson.slug}/${s.id}: needs recording`)); continue; }

  const app = await startApp(lesson);
  try {
    for (const s of todo) {
      const t = Date.now();
      // A fresh browser per clip: some sandboxed Chromium builds die when a recording context closes.
      const browser = await launchBrowser();
      try {
        await recordClip(browser, lesson, s, outDir);
        writeFileSync(join(outDir, `${s.id}.json`), JSON.stringify({ hash: stepHash(lesson, s) }));
        console.log(`✓ ${lesson.slug}/${s.id} "${s.title}" (${((Date.now() - t) / 1000).toFixed(1)}s)`);
      } catch (e) { failures++; console.error(`✗ ${e.message.split('\n')[0]}`); }
      finally { await browser.close().catch(() => {}); }
    }
  } finally { stopApp(app); }
}
rmSync('.render-tmp', { recursive: true, force: true });
console.log(`Clips: ${seeded} downloaded, ${stale} ${flag('--check') ? 'to record' : 'recorded or failed'}.`);
if (process.env.GITHUB_OUTPUT) writeFileSync(process.env.GITHUB_OUTPUT, `stale=${stale}\n`, { flag: 'a' });
process.exit(failures ? 1 : 0);
