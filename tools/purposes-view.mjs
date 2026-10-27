// "What are you teaching?" (roadmap/english.md, ways in): a subject's index.md `purposes:` list as cards, one per text
// purpose, each naming typical units and the courses to draw on (built ones link, planned ones say "coming later"), then a
// short "Not sure where to start?" set. Pure; build-site places it under the subject's search box.
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** purposes: [{ id, title, units, note?, courses: [{ path } | { title }] }]; start: { text, courses }; href(path), titleOf(path) */
export function purposesHtml({ purposes, start, href, titleOf }) {
  const course = (c) => c.path
    ? `<li><a href="${esc(href(c.path))}">${esc(titleOf(c.path))}</a>${c.note ? `<span class="muted"> · ${esc(c.note)}</span>` : ''}</li>`
    : `<li class="wpe-soon">${esc(c.title)} <span class="muted">· coming later</span></li>`;
  const cards = purposes.map((p) => `<section class="wpe-card" id="purpose-${esc(p.id)}"><h3>${esc(p.title)}</h3><p class="wpe-units">${esc(p.units)}</p>`
    + `<ul>${(p.courses || []).map(course).join('')}</ul>${p.note ? `<p class="muted wpe-note">${esc(p.note)}</p>` : ''}</section>`).join('');
  const startHtml = start ? `<p class="wpe-start"><b>Not sure where to start?</b> ${esc(start.text)} `
    + `${(start.courses || []).map((c) => c.path ? `<a href="${esc(href(c.path))}">${esc(titleOf(c.path))}</a>` : `${esc(c.title)} (coming later)`).join(', ')}. ${esc(start.after || '')}</p>` : '';
  return `<style>.wpe-wrap{margin:22px 0}.wpe-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-top:10px}
.wpe-card{border:1px solid var(--line,#e4e1da);border-radius:10px;padding:12px 16px;background:var(--card,#fff)}.wpe-card h3{margin:0 0 4px}
.wpe-units{margin:0 0 8px;font-size:14px;color:var(--muted,#6b6b6b)}.wpe-card ul{margin:0;padding-left:18px}.wpe-card li{margin:3px 0}
.wpe-soon{color:var(--muted,#6b6b6b)}.wpe-note{font-size:13px;margin:8px 0 0}.wpe-start{margin-top:16px;max-width:760px}</style>`
    + `<section class="wpe-wrap" aria-labelledby="wpe-h"><h2 id="wpe-h">What are you teaching?</h2><p class="muted">Pick the kind of writing or speaking in your unit. Each card lists the courses to draw on; one course can sit under several.</p>`
    + `<div class="wpe-grid">${cards}</div>${startHtml}</section>`;
}
