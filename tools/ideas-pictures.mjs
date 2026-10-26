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

  decide: svg('Is the score more than 10? On a number line, 7 to 10 are no and 11 to 13 are yes; 10 itself is no, because 10 is not more than 10',
    `<rect x="20" y="50" width="170" height="8" fill="${O}" opacity=".3"/><rect x="190" y="50" width="130" height="8" class="wpi-tf" opacity=".4"/>`
    + `<line x1="20" y1="54" x2="320" y2="54" stroke="currentColor" stroke-width="1.4"/>`
    + `<line x1="190" y1="40" x2="190" y2="66" stroke="currentColor" stroke-width="2.2" stroke-dasharray="3 3"/>`
    + [7, 8, 9, 10, 11, 12, 13].map((n, i) => `<circle cx="${50 + i * 40}" cy="54" r="6" ${n <= 10 ? `fill="${O}"` : 'class="wpi-tf"'}/>` + text(50 + i * 40, 78, String(n), n === 10 ? 'font-weight="700"' : '')).join('')
    + text(170, 18, 'Is the score more than 10?', 'font-size="13" font-weight="700"')
    + text(105, 40, 'no', `fill="${O}" font-weight="700"`) + text(255, 40, 'yes', `class="wpi-t" font-weight="700"`)
    + `<circle cx="170" cy="54" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/>`
    + text(170, 98, '10 is no: it isn\u2019t more than 10.', 'font-size="12" font-weight="600"')
    + text(170, 114, '\u201cAt least 10\u201d would say yes. Edges like this hide mistakes.', 'font-size="11.5" opacity=".8"'), 124),

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

  // Part 2: what each pathway adds.
  web: svg('The same nested boxes twice: on the left plain, labelled what it is; on the right coloured by CSS, labelled how it looks',
    box(14, 26, 120, 76) + text(74, 20, 'what it is (HTML)', 'font-size="11.5"') + box(26, 40, 96, 52) + text(74, 54, 'section', 'font-size="11"')
    + box(36, 60, 76, 12) + box(36, 76, 76, 12) + text(74, 70, 'h2', 'font-size="10"') + text(74, 86, 'p', 'font-size="10"')
    + arrow(140, 64, 196, 64) + text(168, 56, '+ CSS', 'font-size="12" font-weight="700" class="wpi-t"')
    + `<rect x="204" y="26" width="120" height="76" rx="8" fill="${T}" opacity=".18"/>` + box(204, 26, 120, 76) + text(264, 20, 'how it looks (CSS)', 'font-size="11.5"')
    + `<rect x="216" y="40" width="96" height="52" rx="8" fill="#ffffff" opacity=".9" stroke="${O}" stroke-width="2"/>`
    + `<rect x="226" y="60" width="76" height="12" rx="3" fill="${O}"/>` + `<rect x="226" y="77" width="56" height="5" rx="2.5" fill="#888" opacity=".7"/><rect x="226" y="84" width="66" height="5" rx="2.5" fill="#888" opacity=".7"/>`
    + text(170, 118, 'boxes inside boxes; change the look, not the content', 'font-size="12" opacity=".75"'), 126),

  microbit: ((HEART) => svg('A micro:bit running forever, reading a light level as a number, and sending a message by radio to another micro:bit',
    `<rect x="40" y="38" width="76" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>`
    + [0, 1, 2, 3, 4].flatMap((r) => [0, 1, 2, 3, 4].map((c) => `<circle cx="${56 + c * 11}" cy="${48 + r * 11}" r="2.6" fill="${HEART.some(([y, x]) => y === r && x === c) ? O : 'currentColor'}" opacity="${HEART.some(([y, x]) => y === r && x === c) ? 1 : .25}"/>`)).join('')
    + `<path d="M50,34 C50,12 106,12 106,30" fill="none" class="wpi-ts" stroke-width="1.8" marker-end="url(#wpia)"/>` + text(78, 12, 'forever', 'font-size="12" font-weight="700" class="wpi-t"')
    + `<circle cx="16" cy="70" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>` + [0, 1, 2, 3, 4, 5, 6, 7].map((k) => { const a = k * Math.PI / 4; return `<line x1="${(16 + 10 * Math.cos(a)).toFixed(1)}" y1="${(70 + 10 * Math.sin(a)).toFixed(1)}" x2="${(16 + 13 * Math.cos(a)).toFixed(1)}" y2="${(70 + 13 * Math.sin(a)).toFixed(1)}" stroke="currentColor" stroke-width="1.2"/>`; }).join('')
    + text(78, 118, 'light: 180', 'font-size="12" font-weight="600"')
    + [0, 1, 2].map((k) => `<path d="M${136 + k * 12},${54 - k * 6} q8,${16 + k * 6} 0,${32 + k * 12}" fill="none" stroke="${O}" stroke-width="1.8"/>`).join('')
    + text(168, 40, 'radio', `font-size="12" font-weight="700" fill="${O}"`)
    + `<rect x="196" y="46" width="60" height="50" rx="9" fill="none" stroke="currentColor" stroke-width="1.6"/>` + text(226, 76, '1', 'font-size="18" font-weight="700"')
    + arrow(258, 71, 278, 71) + text(306, 75, 'reacts', 'font-size="12"')
    + text(226, 118, 'another micro:bit', 'font-size="12" opacity=".75"'), 126))([[0,1],[0,3],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0],[2,1],[2,2],[2,3],[2,4],[3,1],[3,2],[3,3],[4,2]]),

  arcade: svg('Three frames of a game: a sprite moves a little each frame and, in the third, touches a coin and scores a point',
    [0, 1, 2].map((f) => box(14 + f * 108, 24, 96, 66) + text(62 + f * 108, 18, `frame ${f + 1}`, 'font-size="11.5"')
      + `<rect x="${24 + f * 108 + f * 22}" y="56" width="18" height="18" rx="3" class="wpi-tf"/>`
      + `<circle cx="${86 + f * 108}" cy="${65}" r="7" fill="${f === 2 ? 'none' : '#E3B505'}" stroke="#B88A00" stroke-width="1.4" ${f === 2 ? 'opacity="0"' : ''}/>`).join('')
    + text(294, 46, '+1', `font-size="16" font-weight="700" fill="${O}"`) + [[-14, 0], [14, 0], [0, -14], [-10, -10], [10, -10]].map(([dx, dy]) => `<line x1="${294 + dx * .6}" y1="${65 + dy * .6}" x2="${294 + dx}" y2="${65 + dy}" stroke="${O}" stroke-width="2"/>`).join('')
    + text(170, 112, 'move a little, check, redraw: many times a second', 'font-size="12" opacity=".75"'), 122),

  python: svg('A console conversation where the program asks a name and replies, and the text 12 joined to the text 1 giving 121 while the number 12 plus 1 gives 13',
    `<rect x="12" y="20" width="168" height="78" rx="8" fill="#1d2430" stroke="currentColor" stroke-opacity=".35"/>`
    + `<text x="24" y="44" font-family="ui-monospace,monospace" font-size="12" fill="#f3f1ec">Your name? <tspan fill="#7fd1b5">Sam</tspan></text>`
    + `<text x="24" y="64" font-family="ui-monospace,monospace" font-size="12" fill="#f3f1ec">Hi Sam</text>`
    + `<text x="24" y="84" font-family="ui-monospace,monospace" font-size="12" fill="#f3f1ec">Age? <tspan fill="#7fd1b5">12</tspan></text>`
    + text(96, 114, 'a program that talks', 'font-size="12" opacity=".75"')
    + text(262, 30, 'text or number?', 'font-size="12" font-weight="700"')
    + text(262, 56, '"12" + "1" \u2192 "121"', `font-size="13" font-family="ui-monospace,monospace" fill="${O}"`)
    + text(262, 82, '12 + 1 \u2192 13', 'font-size="13" font-family="ui-monospace,monospace" class="wpi-t"')
    + text(262, 106, 'typing gives text first', 'font-size="11.5" opacity=".75"'), 122),
};

/** Each band's and pathway group's drawing, with its arrowhead id made unique so the inline SVGs can share a page. */
export const BAND_PICTURES = Object.fromEntries(Object.entries(PICTURES).map(([k, v]) => [k, v.replaceAll('wpia', `wpia-${k}`)]));
