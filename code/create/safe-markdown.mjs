// Create's preview renders lessons that may come from someone else (a shared draft link or an
// imported package) on this site's own origin. It cannot simply be sandboxed: lesson pages and their
// playgrounds need the site's storage, and a sandboxed frame has none (step links and playgrounds
// stop working). Instead, lesson text is rendered with a Marked that keeps ordinary HTML (details,
// kbd, tables, images) but drops anything that can run script: script-like elements, on* attributes
// and javascript:/vbscript:/data: links. Marked hands raw HTML over a tag or a fragment at a time, so
// this cleans tag by tag and escapes any "<" that is not a well-formed tag.
// The published site still uses plain Marked: its lessons are reviewed in the repository.
import { Marked } from 'marked';

const DROP = new Set(['script', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet', 'base', 'meta', 'link', 'style', 'template', 'noscript', 'form', 'svg', 'math', 'portal']);
const URL_ATTRS = new Set(['href', 'src', 'action', 'formaction', 'xlink:href', 'poster', 'background', 'cite', 'data', 'srcset', 'ping']);
const BAD_URL = /^(javascript|vbscript|data):/i;
const TAG = /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[^\s"'>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>`]+))?)*)\s*(\/?)>/y;
const ATTR = /([^\s"'>\/=]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'>`]+))?/g;
const attrEsc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decode = (s) => s.replace(/&#x([0-9a-f]+);?/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);?/g, (_, d) => String.fromCodePoint(Number(d))).replace(/&colon;/gi, ':').replace(/&tab;|&newline;/gi, '');

export function cleanUrl(url) {
  // Browsers decode entities and ignore control characters and spaces inside a scheme ("java&#10;script:").
  const squashed = decode(String(url ?? '')).replace(/[\u0000- \u007f]+/g, '');
  return BAD_URL.test(squashed) || (/,/.test(squashed) && /(javascript|vbscript|data):/i.test(squashed)) ? '#' : url;
}

function cleanTag(close, name, attrs, selfClose) {
  const tag = name.toLowerCase();
  if (DROP.has(tag)) return '';
  if (close) return `</${tag}>`;
  const kept = [];
  for (const [, rawName, rawValue] of attrs.matchAll(ATTR)) {
    const n = rawName.toLowerCase();
    if (n.startsWith('on') || n === 'srcdoc' || n === 'style' || n === 'formaction' || n === 'is') continue;
    if (rawValue === undefined) { kept.push(n); continue; }
    let v = /^["']/.test(rawValue) ? rawValue.slice(1, -1) : rawValue;
    if (URL_ATTRS.has(n)) v = cleanUrl(v);
    kept.push(`${n}="${attrEsc(decode(v))}"`);
  }
  return `<${tag}${kept.length ? ' ' + kept.join(' ') : ''}${selfClose ? ' /' : ''}>`;
}

export function sanitizeHtml(html) {
  let out = '';
  for (let i = 0; i < html.length;) {
    const lt = html.indexOf('<', i);
    if (lt < 0) { out += html.slice(i); break; }
    out += html.slice(i, lt);
    if (html.startsWith('<!--', lt)) { const end = html.indexOf('-->', lt + 4); i = end < 0 ? html.length : end + 3; continue; }
    TAG.lastIndex = lt;
    const m = TAG.exec(html);
    if (m) { out += cleanTag(m[1], m[2], m[3], m[4]); i = TAG.lastIndex; }
    else { out += '&lt;'; i = lt + 1; }
  }
  return out;
}

const safety = {
  // Raw HTML in lesson Markdown (block or inline).
  renderer: { html(token) { return sanitizeHtml(token.text); } },
  // Markdown links and images: [x](javascript:...) and ![x](javascript:...).
  walkTokens(token) { if ((token.type === 'link' || token.type === 'image') && token.href) token.href = cleanUrl(token.href); },
};

/** Marked with the safety rules always applied; lessonPageHtml constructs it with its own options. */
export class SafeMarked extends Marked {
  constructor(...args) {
    super(...args);
    this.use(safety);
  }
}
