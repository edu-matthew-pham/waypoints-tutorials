// The search box (site/search.js reads it). Hidden until the script runs, so a browser without JavaScript sees no
// dead box. subject: a top-level folder to limit results to (a subject page); root: the way back to the site root.
import { esc } from './lesson-view.mjs';

export const SEARCH_CSS = `.wp-search{margin:14px 0 18px;max-width:680px}.wp-search[hidden]{display:none}.wp-search label{display:block;font-weight:700;margin-bottom:6px}
.wp-search input[type=search]{width:100%;box-sizing:border-box;font:inherit;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink)}
.wp-search input:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.wp-hint{color:var(--muted);font-size:14px;margin:6px 0 0}
.wp-results{list-style:none;margin:8px 0 0;padding:0;border:1px solid var(--line);border-radius:10px;background:var(--card);overflow:hidden}.wp-results:empty{display:none}
.wp-results li+li{border-top:1px solid var(--line)}.wp-results a{display:block;padding:9px 12px;text-decoration:none;color:var(--ink)}
.wp-results a:hover,.wp-results a:focus-visible{background:var(--bg)}.wp-results b{display:block}.wp-results span{display:block;color:var(--muted);font-size:13px}
.wp-none{padding:10px 12px;color:var(--muted)}.wp-extra{margin:8px 0 0;font-size:14px}.wp-extra a{color:var(--accent)}
.wpt-sf{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;margin:10px 0 0;font-size:14px}.wpt-sf[hidden]{display:none}.wpt-sf-l{display:inline-flex!important;gap:6px;align-items:center;font-weight:600!important;margin:0!important}
.wpt-sf select{font:inherit;font-weight:400;padding:5px 8px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink)}
.wpt-sf-y{display:inline-flex;flex-wrap:wrap;gap:4px;align-items:center}.wpt-sf-yl{font-weight:600;margin-right:2px}.wpt-sf-y button,.wpt-sf-clear{font:inherit;font-size:13px;font-weight:600;padding:4px 10px;border:1px solid var(--line);border-radius:99px;background:var(--card);color:var(--ink);cursor:pointer}
.wpt-sf-y button[aria-pressed=true]{background:var(--ink);color:var(--bg);border-color:var(--ink)}.wpt-sf-y button:focus-visible,.wpt-sf select:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.wpt-sf-more{display:block;padding:0 12px 8px 24px;color:var(--muted);font-size:13px}`;

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
  ict: 'Try spreadsheets, formulas, cells, Year 7',
  english: 'Try cohesion, pronouns, topic sentences, Year 7, or a code such as AC9E7LA04',
  ai: 'Try how AI works, ethics, prompts',
  learning: 'Try planning, checking your work, stuck, revision, self-regulation',
  teachers: 'Try guides, Create, Make a lesson, AI tools',
  history: 'Try sources, perspectives, ancient China, Year 7, or a code such as AC9HH7S03',
  geography: 'Try water, liveability, maps, Year 7',
  civics: 'Try democracy, laws, citizenship, Year 7',
  economics: 'Try needs and wants, choices, money, Year 7',
  hass: 'Try questions, sources, Before Year 7, Year 6',
};
