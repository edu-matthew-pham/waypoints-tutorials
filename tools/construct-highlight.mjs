// Construct expressions on lesson pages (24 Nov 2026, Construct apps and Construct games): inline code is coloured the
// way Construct's expression box colours it, so students can match the page to their screen. Text in quotes dark red,
// & blue, names (variables, objects, expressions such as int() or Journal.At(loopindex)) navy and bold. Applied at build
// time to <code> elements outside <pre>, <script>, <style> and <textarea> on lessons under code/construct*; colour is never the only cue (names are bold).

const dec = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const enc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** One expression as coloured HTML. */
export function constructExpr(text) {
  const re = /("[^"]*")|(&)|([A-Za-z_][\w.]*)|([^"&A-Za-z_]+)/g;
  let out = '', m;
  while ((m = re.exec(text))) {
    const cls = m[1] ? 'cx-s' : m[2] ? 'cx-o' : m[3] ? 'cx-v' : '';
    out += cls ? `<span class="${cls}">${enc(m[0])}</span>` : enc(m[0]);
  }
  return out;
}

export const CONSTRUCT_CSS = '<style>code .cx-s{color:#a31515}code .cx-o{color:#2c2cd6;font-weight:600}code .cx-v{color:#1f2a6b;font-weight:600}' +
  '@media(prefers-color-scheme:dark){code .cx-s{color:#f19a8f}code .cx-o{color:#9db1ff}code .cx-v{color:#c9d3ff}}</style>';

/** A built lesson page with its inline code coloured (code inside <pre> is left alone). */
export function highlightConstructPage(html) {
  const parts = html.split(/(<pre[\s\S]*?<\/pre>|<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<textarea[\s\S]*?<\/textarea>)/);
  const body = parts.map((p, i) => (i % 2 ? p : p.replace(/<code>([^<]*)<\/code>/g, (_, inner) => `<code>${constructExpr(dec(inner))}</code>`))).join('');
  return body.replace('</head>', CONSTRUCT_CSS + '</head>');
}
