// A shared lesson as a plain student page: the lesson travels in the link (#l=, as Create's edit link), with no editor.
// Rendered with SafeMarked, like Create's preview, because the link may come from anyone. Videos recorded in Create
// are not in the link; steps with a video: link show it, and clip steps show nothing.
import { maths } from './maths-browser.mjs?v=3b8bfd6780';
import { SafeMarked as Marked } from './safe-markdown.mjs?v=3b8bfd6780';
import { parseLessonText, snippetFrom } from './lesson-core.mjs?v=3b8bfd6780';
import { lessonPageHtml, tryEmbed } from './lesson-view.mjs?v=3b8bfd6780';
import { highlightCode } from './highlight.js?v=3b8bfd6780';

async function decode(str) {
  const bin = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return JSON.parse(await new Response(stream).text());
}
async function shortHash(text) {
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(h).slice(0, 6), (n) => n.toString(16).padStart(2, '0')).join('');
}
try {
  // Step links change the address's #, so keep the lesson for this tab too (a refresh after clicking a step still works).
  let code = location.hash.startsWith('#l=') ? location.hash.slice(3) : '';
  try { if (code) sessionStorage.setItem('wp-view-lesson', code); else code = sessionStorage.getItem('wp-view-lesson') || ''; } catch { /* storage unavailable */ }
  if (!code) throw Error('This link has no lesson in it. Ask your teacher for the student link again.');
  const files = await decode(code);
  if (!files || typeof files['lesson.md'] !== 'string') throw Error('This link does not hold a lesson.');
  // Progress is kept per browser under a key made from the lesson's text, so the same link keeps its ticks.
  const lesson = parseLessonText(files['lesson.md'], 'shared/' + await shortHash(JSON.stringify(files)));
  const read = (f) => files[f] ?? lesson.inline?.[f];
  const siteRoot = new URL('../../', location.href).href;
  const tryHtml = (s) => {
    const t = s.config.try; if (!t) return '';
    try { return tryEmbed(lesson, s, snippetFrom(read, t.starter || s.config.code), siteRoot, '', { use: lesson.modules, local: Object.fromEntries(lesson.modules.filter((n) => files[`${n}.py`] !== undefined).map((n) => [n, files[`${n}.py`]])) }); } catch { return ''; }
  };
  const html = lessonPageHtml(lesson, { Marked, highlightCode, snippet: (r) => snippetFrom(read, r), clipHtml: () => '', tryHtml, maths, siteRoot, crumb: null, source: '' });
  document.open(); document.write(html); document.close();
} catch (error) {
  document.getElementById('status').textContent = 'Could not open this lesson: ' + error.message;
}
