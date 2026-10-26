// How coding ideas build: one small drawing per band, showing what that group of ideas does (the hinge ideas'
// mechanism where a band has one). Inline SVG; lines and text use currentColor so they follow light and dark,
// with two fixed accents. Used by tools/ideas-page.mjs at the top of each band's section.
const T = '#2f6f5e', O = '#c2570a';
const svg = (label, inner, h = 120) => `<svg class="wpi-pic" viewBox="0 0 340 ${h}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg"><title>${label}</title>`
  + `<defs><marker id="wpia" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>`
  + `<g font-family="inherit" font-size="13" fill="currentColor">${inner}</g></svg>`;
const box = (x, y, w, h, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="currentColor" stroke-width="1.6" ${extra}/>`;
const arrow = (x1, y1, x2, y2, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="1.6" marker-end="url(#wpia)" ${extra}/>`;
const text = (x, y, s, extra = '') => `<text x="${x}" y="${y}" text-anchor="middle" ${extra}>${s}</text>`;

const PICTURES = {
  steps: svg('Three numbered steps, followed one after another in order',
    [0, 1, 2].map((i) => box(10 + i * 112, 40, 92, 42) + text(56 + i * 112, 66, ['1 move', '2 turn', '3 move'][i])).join('')
    + arrow(102, 61, 120, 61) + arrow(214, 61, 232, 61)
    + text(170, 24, 'one step at a time, in the order written', `font-size="12" opacity=".75"`)),

  remember: svg('A box called score whose value changes from 0 to 1 to 2 as the program runs',
    [0, 1, 2].map((i) => `<path d="M${18 + i * 114},44 h40 l6,-12 h-46 z" fill="${T}" opacity=".18"/>`
      + text(42 + i * 114, 41, 'score', 'font-size="11"')
      + box(18 + i * 114, 44, 72, 52, i === 2 ? `class="wpi-ts" stroke-width="2.4"` : '') + text(54 + i * 114, 79, String(i), 'font-size="24" font-weight="700"')).join('')
    + arrow(94, 70, 128, 70) + arrow(208, 70, 242, 70)
    + text(111, 62, '+1', `font-size="12" class="wpi-t" font-weight="700"`) + text(225, 62, '+1', `font-size="12" class="wpi-t" font-weight="700"`)
    + text(170, 114, 'the same box, a new value each time', `font-size="12" opacity=".75"`), 124),

  repeat: svg('A loop that goes round four times, with a counter showing 0, 1, 2 and 3',
    `<path d="M70,30 A34,34 0 1 1 36,64" fill="none" stroke="currentColor" stroke-width="1.8" marker-end="url(#wpia)"/>`
    + text(70, 61, 'repeat', 'font-size="12"') + text(70, 76, '4 times', 'font-size="12"')
    + [0, 1, 2, 3].map((i) => `<circle cx="${160 + i * 46}" cy="56" r="17" fill="${i === 0 ? O : T}" opacity="${i === 0 ? 1 : .85}"/>`
      + text(160 + i * 46, 61, String(i), 'font-size="15" font-weight="700" fill="#fff"')).join('')
    + text(229, 28, 'the counter, each time round', 'font-size="12" opacity=".75"')
    + text(160, 96, 'starts at 0', `font-size="12" fill="${O}" font-weight="700"`)),

  decide: svg('A number line with a gate at 10: 9 is no, 11 is yes, and 10 depends on more than or more than or equal to',
    `<rect x="20" y="48" width="150" height="8" fill="${O}" opacity=".35"/><rect x="170" y="48" width="150" height="8" fill="${T}" opacity=".45"/>`
    + `<line x1="20" y1="52" x2="320" y2="52" stroke="currentColor" stroke-width="1.4"/>`
    + [7, 8, 9, 10, 11, 12, 13].map((n, i) => `<line x1="${50 + i * 40}" y1="46" x2="${50 + i * 40}" y2="58" stroke="currentColor" stroke-width="1.2"/>` + text(50 + i * 40, 74, String(n), n === 10 ? 'font-weight="700"' : '')).join('')
    + `<line x1="170" y1="22" x2="170" y2="60" stroke="currentColor" stroke-width="2.4"/>` + text(170, 17, 'score > 10 ?', 'font-size="12" font-weight="700"')
    + text(90, 36, 'no', `fill="${O}" font-weight="700"`) + text(250, 36, 'yes', `class="wpi-t" font-weight="700"`)
    + text(170, 98, 'at exactly 10: > says no, >= says yes', 'font-size="12" opacity=".8"')),

  until: svg('A loop that runs a round, asks whether lives are still above 0, goes round again on yes and stops on no',
    box(10, 40, 92, 40) + text(56, 65, 'play a round')
    + `<path d="M170,36 L222,60 L170,84 L118,60 z" fill="none" stroke="currentColor" stroke-width="1.6"/>` + text(170, 64, 'lives > 0 ?', 'font-size="12"')
    + arrow(102, 60, 116, 60)
    + `<path d="M170,36 C170,10 56,10 56,38" fill="none" class="wpi-ts" stroke-width="1.8" marker-end="url(#wpia)"/>` + text(118, 16, 'yes: again', `font-size="12" class="wpi-t" font-weight="700"`)
    + arrow(222, 60, 262, 60) + text(240, 52, 'no', `font-size="12" fill="${O}" font-weight="700"`)
    + box(264, 42, 66, 36) + text(297, 64, 'stop', 'font-size="12"')
    + text(170, 108, 'repeats as long as the answer is yes', 'font-size="12" opacity=".75"')),

  events: svg('A button press sets off a set of steps that were waiting for it',
    `<circle cx="56" cy="60" r="26" fill="${T}"/>` + text(56, 66, 'A', 'font-size="18" font-weight="700" fill="#fff"')
    + [[-40, -22], [-38, 0], [-40, 22]].map(([dx, dy]) => `<line x1="${56 + dx}" y1="${60 + dy}" x2="${56 + dx - 10}" y2="${60 + dy + (dy / 22) * 4}" stroke="${O}" stroke-width="2"/>`).join('')
    + text(56, 104, 'press', 'font-size="12"')
    + arrow(88, 60, 150, 60)
    + box(152, 28, 176, 64, 'stroke-dasharray="5 4"') + text(240, 52, 'when A is pressed:', 'font-size="12" opacity=".8"') + text(240, 74, 'add 1 to score', 'font-weight="600"')
    + text(240, 112, 'waits until something happens', 'font-size="12" opacity=".75"'), 122),

  lists: svg('A list of four items in slots numbered 0 to 3, with an arrow stepping through each one',
    ['cat', 'dog', 'fish', 'bird'].map((w, i) => box(22 + i * 76, 48, 70, 36, i === 0 ? `class="wpi-ts" stroke-width="2.4"` : '') + text(57 + i * 76, 71, w) + text(57 + i * 76, 104, String(i), `font-size="12" font-weight="700" fill="${i === 0 ? O : 'currentColor'}"`)).join('')
    + [0, 1, 2].map((i) => `<path d="M${60 + i * 76},44 C${70 + i * 76},22 ${106 + i * 76},22 ${116 + i * 76},44" fill="none" class="wpi-ts" stroke-width="1.6" marker-end="url(#wpia)"/>`).join('')
    + text(15, 106, 'place', 'font-size="11" opacity=".7" text-anchor="start"') + text(170, 16, 'for each item: one after another', 'font-size="12" opacity=".75"'), 116),

  blocks: svg('A named job called double: a value goes in as a parameter and an answer comes back',
    box(122, 34, 96, 52, `class="wpi-ts" stroke-width="2.4"`) + text(170, 65, 'double', 'font-weight="700"')
    + arrow(40, 60, 118, 60) + text(30, 65, '5', 'font-size="18" font-weight="700"') + text(80, 50, 'in', 'font-size="12"') + text(80, 80, 'parameter', `font-size="11" class="wpi-t"`)
    + arrow(222, 60, 300, 60) + text(314, 65, '10', 'font-size="18" font-weight="700"') + text(262, 50, 'out', 'font-size="12"') + text(262, 80, 'returned', `font-size="11" class="wpi-t"`)
    + text(170, 108, 'write it once, use it with one line', 'font-size="12" opacity=".75"')),

  toolkit: svg('A die showing four for random numbers, and seven dots shared into pairs with one left over for remainder',
    box(30, 30, 56, 56) + [[44, 44], [72, 44], [44, 72], [72, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="currentColor"/>`).join('')
    + text(58, 106, 'random 1 to 6', 'font-size="12"')
    + [0, 1, 2].map((g) => `<rect x="${150 + g * 46}" y="42" width="38" height="28" rx="14" fill="none" class="wpi-ts" stroke-width="1.6"/>`
      + `<circle cx="${161 + g * 46}" cy="56" r="5" fill="${T}"/><circle cx="${177 + g * 46}" cy="56" r="5" fill="${T}"/>`).join('')
    + `<circle cx="300" cy="56" r="5" fill="${O}"/>` + text(300, 34, '1 left', `font-size="12" fill="${O}" font-weight="700"`)
    + text(230, 106, '7 % 2 = 1', 'font-size="13" font-weight="700"')),
};

/** Each band's drawing, with its arrowhead id made unique so nine inline SVGs can share a page. */
export const BAND_PICTURES = Object.fromEntries(Object.entries(PICTURES).map(([k, v]) => [k, v.replaceAll('wpia', `wpia-${k}`)]));
