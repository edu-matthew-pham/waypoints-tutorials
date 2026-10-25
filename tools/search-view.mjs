// The search box (site/search.js reads it). Hidden until the script runs, so a browser without JavaScript sees no
// dead box. subject: a top-level folder to limit results to (a subject page); root: the way back to the site root.
import { esc } from './lesson-view.mjs';

export const SEARCH_CSS = `.wp-search{margin:14px 0 18px;max-width:680px}.wp-search[hidden]{display:none}.wp-search label{display:block;font-weight:700;margin-bottom:6px}
.wp-search input[type=search]{width:100%;box-sizing:border-box;font:inherit;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink)}
.wp-search input:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.wp-hint{color:var(--muted);font-size:14px;margin:6px 0 0}
.wp-results{list-style:none;margin:8px 0 0;padding:0;border:1px solid var(--line);border-radius:10px;background:var(--card);overflow:hidden}.wp-results:empty{display:none}
.wp-results li+li{border-top:1px solid var(--line)}.wp-results a{display:block;padding:9px 12px;text-decoration:none;color:var(--ink)}
.wp-results a:hover,.wp-results a:focus-visible{background:var(--bg)}.wp-results b{display:block}.wp-results span{display:block;color:var(--muted);font-size:13px}
.wp-none{padding:10px 12px;color:var(--muted)}.wp-extra{margin:8px 0 0;font-size:14px}.wp-extra a{color:var(--accent)}`;

export function searchBoxHtml({ root = '', subject = '', label = 'Find a lesson', hint = '', extra = '' } = {}) {
  const id = `wp-q-${subject || 'all'}`;
  return `<style>${SEARCH_CSS}</style><form class="wp-search" role="search" data-root="${esc(root)}" data-subject="${esc(subject)}" hidden>` +
    `<label for="${esc(id)}">${esc(label)}</label><input id="${esc(id)}" type="search" autocomplete="off" placeholder="${esc(hint)}" aria-describedby="${esc(id)}-r">` +
    `<ul class="wp-results" id="${esc(id)}-r" aria-live="polite"></ul>${extra ? `<p class="wp-extra">${extra}</p>` : ''}</form>` +
    `<script src="${esc(root)}search.js" defer></script>`;
}

// What to type, by subject: how its teachers tend to look. Anything else gets the general hint.
export const SEARCH_HINTS = {
  '': 'Try fractions, Python, micro:bit, Year 8 chemistry, or a curriculum code',
  code: 'Try Python, MakeCode, loops, web page, Year 8, or a standard such as AC9TDI8P05',
  maths: 'Try fractions, equations, Year 8, or a curriculum code',
  science: 'Try chemical reactions, cells, Year 8, or a code such as AC9S8U02',
  systems: 'Try binary, networks, encryption, Year 9, or a standard such as AC9TDI8K03',
  engineering: 'Try gears, Arduino, CAD, 3D printing',
  ai: 'Try how AI works, ethics, prompts',
  teachers: 'Try guides, Create, Make a lesson, AI tools',
};
