// How-to pages (3 Nov 2026, proof of concept; Project doc claude/howto-poc.md): content/howto/<name>.md becomes
// /howto/<name>/. A how-to is a recipe for a student partway through their own project, not a lesson: no steps, no
// checks, no progress, not on trail maps, not in search, noindex. Unlisted until Matthew decides otherwise.
//
// Fenced blocks (each on its own line, closed by a line of just `:::`):
//   ::: for gradio Gradio (Python)   only shown when that context is chosen; the first `for` names the switch's buttons
//   ::: full                         "Show the full code" (folded)
//   ::: teacher                      "For teachers" (folded)
// A `contexts:` list in the frontmatter ({ id, label }) sets the switch. `?for=<id>` in the link picks the context
// (a teacher shares the link for their student's project); the student can still switch.

const FENCE = /^:::\s*(for|full|teacher)\b\s*(\S*)\s*$/;

/** Turn the ::: blocks into HTML wrappers Marked leaves alone (blank lines keep the Markdown inside parsed). */
export function howtoBlocks(text) {
  const out = [], open = [];
  for (const line of text.split('\n')) {
    const m = line.match(FENCE);
    if (m) {
      const [, kind, arg] = m;
      open.push(kind);
      if (kind === 'for') out.push('', `<div class="wpt-ht-for" data-for="${arg.replace(/[^a-z0-9-]/gi, '')}">`, '');
      else if (kind === 'full') out.push('', '<details class="wpt-ht-full"><summary>Show the full code</summary>', '');
      else out.push('', '<details class="wpt-ht-teacher"><summary>For teachers</summary>', '');
    } else if (/^:::\s*$/.test(line) && open.length) {
      const kind = open.pop();
      out.push('', kind === 'for' ? '</div>' : '</details>', '');
    } else out.push(line);
  }
  if (open.length) throw new Error(`how-to: ${open.length} ::: block(s) not closed`);
  return out.join('\n');
}

/** The context switch: "My project uses…" with one button per context. */
export function contextSwitch(contexts = []) {
  if (!contexts.length) return '';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  return `<div class="wpt-ht-switch" role="group" aria-label="My project uses"><span>My project uses</span>${contexts.map((c) => `<button type="button" data-ctx="${esc(c.id)}" aria-pressed="false">${esc(c.label)}</button>`).join('')}</div><p class="wpt-ht-pick">Choose one above to see the steps for your project.</p>`;
}

export const HOWTO_CSS = `.wpt-ht-switch{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:8px 0 18px;padding:12px 14px;background:var(--card);border:1px solid var(--line);border-radius:12px;position:sticky;top:var(--nav,0px);z-index:5}
.wpt-ht-switch span{font-weight:600;margin-right:4px}.wpt-ht-switch button{font:inherit;font-size:15px;padding:6px 14px;border-radius:99px;border:1px solid var(--line);background:var(--bg);color:var(--ink);cursor:pointer}
.wpt-ht-switch button[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff}
.wpt-ht-for{display:none}.wpt-ht-pick{color:var(--muted)}
body[data-ctx] .wpt-ht-pick{display:none}
.wpt-ht details,.wpt-ht-full,.wpt-ht-teacher{margin:18px 0;border:1px solid var(--line);border-radius:12px;background:var(--card);padding:10px 16px}
.wpt-ht-full summary,.wpt-ht-teacher summary{cursor:pointer;font-weight:600}.wpt-ht-teacher{border-left:4px solid var(--accent)}
.wpt-ht pre{position:relative;background:var(--code);color:var(--codeink);padding:14px 16px;border-radius:10px;overflow-x:auto;font-size:14px;line-height:1.5}
.wpt-ht-copy{position:absolute;top:8px;right:8px;font:inherit;font-size:12px;padding:3px 9px;border-radius:6px;border:1px solid #3a4553;background:#1f2833;color:#e6edf3;cursor:pointer}
.wpt-ht-link{font:inherit;font-size:13px;padding:4px 10px;border-radius:99px;border:1px solid var(--line);background:var(--bg);color:var(--muted);cursor:pointer;margin-left:auto}
.wpt-ht-out{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px;min-height:1.5em;white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:14px}`;

// Picks the context from ?for=, shows matching blocks, keeps ?for= in the address (so "Copy link" gives that version),
// and adds a Copy button to every code block. Nothing is stored or sent.
export const HOWTO_JS = `(function(){
var sw=document.querySelector('.wpt-ht-switch');
function pick(id,push){var ok=false;[].forEach.call(document.querySelectorAll('.wpt-ht-switch button'),function(b){var on=b.dataset.ctx===id;b.setAttribute('aria-pressed',on);ok=ok||on});
if(!ok)return;document.body.dataset.ctx=id;[].forEach.call(document.querySelectorAll('.wpt-ht-for'),function(d){d.style.display=d.dataset.for===id?'block':'none'});
if(push){try{var u=new URL(location.href);u.searchParams.set('for',id);history.replaceState(null,'',u)}catch(e){}}}
if(sw){sw.addEventListener('click',function(e){var b=e.target.closest('button[data-ctx]');if(b)pick(b.dataset.ctx,true)});
var cl=document.createElement('button');cl.type='button';cl.className='wpt-ht-link';cl.textContent='Copy link to this version';
cl.addEventListener('click',function(){var t=location.href;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){cl.textContent='Link copied'},function(){window.prompt('Copy this link',t)});setTimeout(function(){cl.textContent='Copy link to this version'},2000)});
sw.appendChild(cl);
var q=new URLSearchParams(location.search).get('for');if(q)pick(q,false)}
[].forEach.call(document.querySelectorAll('.wpt-ht pre'),function(p){var b=document.createElement('button');b.type='button';b.className='wpt-ht-copy';b.textContent='Copy';
b.addEventListener('click',function(){var t=p.querySelector('code')?p.querySelector('code').textContent:p.textContent;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copied'},function(){b.textContent='Select and copy'});setTimeout(function(){b.textContent='Copy'},1500)});p.appendChild(b)});
})();`;
