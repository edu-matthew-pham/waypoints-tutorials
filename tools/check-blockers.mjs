// Ad blockers hide page elements by CSS selector ("cosmetic filters"), and their generic rules apply to every site.
// A trail card called `.thead` was hidden this way (25 Oct 2026: Adblock Plus / AdBlock / uBlock Origin Lite in
// Matthew's Chrome showed the cards for a moment, then hid them). This check downloads the generic hiding rules
// of the lists those blockers use by default (EasyList, plus the Fanboy social and annoyance lists some people
// turn on) and reports any element on our main pages that one of them would hide.
//
//   node tools/check-blockers.mjs [--dist dist] [--lists <folder of saved .txt lists>] [page ...]
//
// Needs a built dist/ and the Chromium in /opt/pw-browsers (or CHROME_PATH). Pages default to the ones students
// and teachers land on. Exit 1 if anything would be hidden.
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const LISTS = {
  'EasyList (general)': 'https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_general_hide.txt',
  'Fanboy social (general)': 'https://raw.githubusercontent.com/easylist/easylist/master/fanboy-addon/fanboy_social_general_hide.txt',
  'Fanboy annoyances (general)': 'https://raw.githubusercontent.com/easylist/easylist/master/fanboy-addon/fanboy_annoyance_general_hide.txt',
};
const PAGES = ['', 'code/', 'maths/', 'science/', 'systems/', 'engineering/', 'ai/', 'teachers/', 'code/paths/python/', 'maths/paths/algebra/',
  'code/python-foundations/', 'code/python-foundations/turtle-intro/', 'maths/algebra/', 'science/chemistry/', 'code/html/', 'teach/code/review/', 'about/'];

const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : d; };
const DIST = opt('--dist', 'dist'), LOCAL = opt('--lists', null), WIDE = args.includes('--wide') && args.splice(args.indexOf('--wide'), 1);
// --wide: also one page of each kind for every course (its page, first lesson, reference, practice, projects,
// teacher guide), every pathway page and the curriculum maps.
function wide() {
  const out = new Set(PAGES), has = (p) => existsSync(join(DIST, p, 'index.html'));
  const dirs = (p) => { try { return readdirSync(join(DIST, p), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name); } catch { return []; } };
  for (const sub of ['code', 'maths', 'science', 'systems', 'engineering', 'ai', 'teachers']) {
    if (has(`${sub}/map`)) out.add(`${sub}/map/`);
    for (const pw of dirs(`${sub}/paths`)) out.add(`${sub}/paths/${pw}/`);
    for (const c of dirs(sub)) {
      const cp = `${sub}/${c}`;
      if (!has(cp) || c === 'paths' || c === 'map') continue;
      out.add(`${cp}/`);
      const kids = dirs(cp).filter((k) => has(`${cp}/${k}`));
      const lesson = kids.find((k) => !['reference', 'practice', 'projects', 'playground', 'briefs', 'recap'].includes(k));
      if (lesson) out.add(`${cp}/${lesson}/`);
      for (const k of ['reference', 'practice', 'projects', 'briefs']) if (kids.includes(k)) out.add(`${cp}/${k}/`);
      if (has(`teach/${cp}`)) out.add(`teach/${cp}/`);
    }
  }
  return [...out];
}
const pages = args.length ? args : WIDE ? wide() : PAGES;

async function rules() {
  const out = [];
  for (const [name, url] of Object.entries(LISTS)) {
    let text = null;
    const local = LOCAL && join(LOCAL, url.split('/').pop());
    if (local && existsSync(local)) text = readFileSync(local, 'utf8');
    else { const r = await fetch(url); if (!r.ok) throw new Error(`${name}: ${r.status}`); text = await r.text(); }
    // Generic hiding rules start with ## (no domain before them). Procedural (#?#) and exceptions (#@#) are skipped.
    for (const line of text.split('\n')) if (line.startsWith('##')) out.push({ list: name, sel: line.slice(2).trim() });
  }
  return out;
}

const all = await rules();
console.log(`${all.length} generic hiding rules from ${Object.keys(LISTS).length} lists`);
const port = 8890 + Math.floor(Math.random() * 90);
const server = spawn(process.execPath, ['tools/serve.mjs', DIST, String(port)], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 1200));
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || (existsSync('/opt/pw-browsers') ? (readdirSync('/opt/pw-browsers').filter((d) => /^chromium-\d/.test(d)).map((d) => `/opt/pw-browsers/${d}/chrome-linux64/chrome`).find(existsSync)) : undefined), args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
let hits = 0;
try {
  for (const p of pages) {
    await page.goto(`http://127.0.0.1:${port}/${p}`);
    await page.waitForTimeout(400);
    // Try the selectors in batches; a batch that does not parse is tried one by one.
    const found = await page.evaluate((all) => {
      const res = [], ok = (s) => { try { document.querySelector(s); return true; } catch (e) { return false; } };
      const desc = (e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '');
      for (let i = 0; i < all.length; i += 300) {
        const batch = all.slice(i, i + 300), joined = batch.map((r) => r.sel).join(',');
        let any = false;
        try { any = !!document.querySelector(joined); } catch (e) { any = true; }
        if (!any) continue;
        for (const r of batch) {
          if (!ok(r.sel)) continue;
          const els = [...document.querySelectorAll(r.sel)].filter((e) => !e.closest('.sitenav') || true);
          if (els.length) res.push({ list: r.list, sel: r.sel, els: els.slice(0, 3).map(desc), n: els.length });
        }
      }
      return res;
    }, all);
    for (const f of found) { hits++; console.log(`✗ /${p}: ${f.list} rule \`##${f.sel}\` hides ${f.n} element(s): ${f.els.join(', ')}`); }
  }
} finally { await browser.close(); server.kill(); }
console.log(hits ? `${hits} rule match(es): rename the matched classes or ids to something site-specific (wp-…)` : `✓ no generic ad-blocker rule hides anything on ${pages.length} pages`);
process.exit(hits ? 1 : 0);
