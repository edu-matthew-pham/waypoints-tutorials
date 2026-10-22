// Lesson diagrams (Mermaid): the field, the source as each output needs it, the size check, and the colour pass on drawn
// SVGs. Pure: no Node or browser APIs, so validate, render-pictures, build-site, teach.mjs and Create all share it.
// Plan: roadmap/diagrams-plan.md. Format: AUTHORING.md › Diagrams.
//
// A diagram is a code reference to Mermaid source plus words for the people who cannot see it:
//   diagram: { ref: diagrams.mmd#loop, alt: "...", caption?: "...", role?: stimulus | explain | misconception | summary, blank?: true }
// on a step or task, as explainDiagram in the frontmatter, and on class plan activities and questions. Source lives in a
// `diagrams.mmd` beside lesson.md (regions `%% region: name` ... `%% endregion`) or inside lesson.md as a
// ```code diagrams.mmd#name block, which keeps the lesson's clips unchanged (a clip's hash covers its folder, not lesson.md).
//
// Where each one goes: the lesson page, Explain it to me, the recap, the teacher guide and the worksheet's blank-label
// version show an SVG drawn at build time (render-pictures, section diagrams: _pictures/diagrams/<slug>/<key>.svg and
// <key>-blank.svg), so pages load no Mermaid. Decks and worksheets carry the Mermaid source in a ```mermaid block, which
// Waypoints Prepare draws and a teacher can edit.

export const DIAGRAM_ROLES = ['stimulus', 'explain', 'misconception', 'summary'];
// The kinds a lesson may use. Data charts (pie, xychart, quadrant) belong on a board; timelines and Gantt charts are
// not lesson diagrams. classDiagram is for the Objects course (one class and its objects), and sparingly.
export const DIAGRAM_KINDS = { flowchart: 'flowchart', graph: 'flowchart', sequenceDiagram: 'sequence', stateDiagram: 'state', 'stateDiagram-v2': 'state', classDiagram: 'class' };
// The size a diagram should stay within (warnings in npm run validate, never a failure). A slide holds about 3 rows
// across a left-to-right chart (Prepare's rule), and a phone about 6 boxes down a top-down one.
export const DIAGRAM_LIMITS = { nodes: 12, across: 3, down: 7, words: 6, actors: 5, messages: 10 };

/** The field as written: a mapping with ref and alt. A bare reference has no alt text, so it is not a diagram. */
export function diagramSpec(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v) || typeof v.ref !== 'string') return null;
  return {
    ref: v.ref.trim(),
    alt: typeof v.alt === 'string' ? v.alt.trim() : '',
    caption: typeof v.caption === 'string' ? v.caption.trim() : '',
    role: typeof v.role === 'string' ? v.role : '',
    blank: v.blank === true,
  };
}

/** Problems with one diagram field, as messages (empty when it is fine). stage: the step's stage, if any. */
export function diagramProblems(v, { stage = '', snip = null, explain = false } = {}) {
  const sp = diagramSpec(v);
  if (!sp) return ['diagram must be a mapping: { ref: diagrams.mmd#name, alt: "what it shows, in words" }'];
  const out = [];
  const refOk = /^[\w.\-/]+\.mmd#[\w-]+$/.test(sp.ref);
  if (!refOk) out.push(`diagram ref "${sp.ref}" must name a region of a .mmd file, such as diagrams.mmd#loop`);
  if (!sp.alt) out.push('diagram needs alt: what it shows, in words, for anyone who cannot see it (and for print)');
  for (const k of Object.keys(v)) if (!['ref', 'alt', 'caption', 'role', 'blank'].includes(k)) out.push(`diagram: unknown field "${k}" (use ref, alt, caption, role, blank)`);
  if (sp.role && !DIAGRAM_ROLES.includes(sp.role)) out.push(`diagram role must be one of ${DIAGRAM_ROLES.join(', ')}`);
  if (v.blank !== undefined && typeof v.blank !== 'boolean') out.push('diagram blank must be true or false');
  if (!explain && stage === 'run') out.push('no diagram on a Run (Explore) step: students meet the real thing first, and a diagram names things too early');
  if (!explain && stage === 'predict' && sp.role !== 'stimulus') out.push('a diagram on a Predict step must be the thing to predict from (role: stimulus), never the answer');
  if (snip && refOk) {
    let src = '';
    try { src = snip(sp.ref); } catch (e) { return [...out, e.message]; }
    const kind = diagramKind(src);
    if (!kind) out.push(`diagram ${sp.ref} must start with one of: flowchart TD, sequenceDiagram, stateDiagram-v2, classDiagram`);
  }
  return out;
}

/** The first line that is not a comment or blank: the diagram's kind ('flowchart', 'sequence', 'state', 'class') or ''. */
export function diagramKind(src) {
  const first = String(src).split('\n').map((l) => l.trim()).find((l) => l && !l.startsWith('%%')) || '';
  const word = first.split(/\s+/)[0];
  return DIAGRAM_KINDS[word] || '';
}

// Colours with a meaning, the same as the boards: orange for what is new or changed in this lesson, red for the
// misconception. Authors write `class B new` or `class C wrong`; these definitions are added to the source. `keep`
// marks a box whose label stays in the blank-label copy (the given clue, such as the stimulus).
const MEANING = {
  deck: { new: 'fill:#fff1e3,stroke:#c2570a,stroke-width:2px', wrong: 'fill:#fde8e8,stroke:#c0392b,stroke-width:2px', keep: 'font-style:normal' },
  svg: { new: 'fill:#f1f2f3,stroke:#2a2b2c,stroke-width:2px', wrong: 'fill:#f2f3f4,stroke:#3a3b3c,stroke-width:2px', keep: 'font-style:normal' },
};
const usesClass = (src, name) => new RegExp(`(?:^\\s*class\\s+[\\w,]+\\s+${name}\\b|:::${name}\\b)`, 'm').test(src);
function withMeaning(src, set) {
  const kind = diagramKind(src);
  if (kind !== 'flowchart' && kind !== 'state' && kind !== 'class') return src;
  const defs = Object.entries(MEANING[set]).filter(([n]) => usesClass(src, n) && !new RegExp(`^\\s*classDef\\s+${n}\\b`, 'm').test(src)).map(([n, css]) => `  classDef ${n} ${css}`);
  return defs.length ? `${src.replace(/\s+$/, '')}\n${defs.join('\n')}\n` : src;
}
// accTitle and accDescr: Mermaid's own accessible title and description, after the kind line.
const oneLine = (t) => String(t || '').replace(/\s+/g, ' ').replace(/[{}]/g, '').trim();
function withAccessibility(src, alt, caption) {
  if (/^\s*accTitle\s*:/m.test(src)) return src;
  const lines = String(src).replace(/\s+$/, '').split('\n');
  const at = lines.findIndex((l) => l.trim() && !l.trim().startsWith('%%'));
  const acc = [`  accTitle: ${oneLine(caption || alt).slice(0, 120)}`, ...(caption && alt ? [`  accDescr: ${oneLine(alt)}`] : [])];
  lines.splice(at + 1, 0, ...acc);
  return lines.join('\n') + '\n';
}
const stripRegions = (src) => String(src).split('\n').filter((l) => !/^\s*%%\s*(end)?region\b/.test(l)).join('\n');

/** The source for a deck or worksheet (Prepare draws it): left to right for a landscape slide, with the meaning colours
 *  and the alt text as accTitle/accDescr. A top-down flowchart becomes left to right; other kinds are left as written. */
export function deckSource(src, { alt = '', caption = '', landscape = true } = {}) {
  let s = stripRegions(src);
  if (landscape) s = s.replace(/^(\s*(?:flowchart|graph))\s+(TD|TB)\b/m, '$1 LR').replace(/^(\s*direction)\s+(TD|TB)\b/m, '$1 LR');
  // Sequence diagrams: no second row of participant boxes at the bottom (it doubles the height on a slide).
  if (diagramKind(s) === 'sequence' && !/%%\{\s*init/.test(s)) s = `%%{init: {"sequence": {"mirrorActors": false}}}%%\n${s.replace(/^\n+/, '')}`;
  return withAccessibility(withMeaning(s, 'deck'), alt, caption);
}

/** The source as render-pictures draws it for pages: as written (top-down suits a phone), with marker colours that
 *  themeDiagramSvg turns into the site's light and dark colours. */
export function renderSource(src, { alt = '' } = {}) {
  return withAccessibility(withMeaning(stripRegions(src), 'svg'), alt, '');
}

// Marker colours: Mermaid draws with these, and themeDiagramSvg swaps each for a CSS variable whose light and dark
// values are the site's (lesson-view.mjs :root). Colours Mermaid works out for itself (lighter or darker shades) become
// the fill or the line by brightness.
const MARK = {
  '#f0f1f2': 'fill', '#0d0e0f': 'ink', '#0a0b0c': 'line', '#1a1b1c': 'border', '#fcfdfe': 'bg',
  '#f1f2f3': 'new-fill', '#2a2b2c': 'new', '#f2f3f4': 'wrong-fill', '#3a3b3c': 'wrong',
};
export const MERMAID_CONFIG = {
  startOnLoad: false, securityLevel: 'strict', theme: 'base', htmlLabels: false, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  flowchart: { htmlLabels: false, useMaxWidth: false, padding: 12 }, sequence: { useMaxWidth: false, mirrorActors: false }, state: { useMaxWidth: false }, class: { useMaxWidth: false },
  themeVariables: {
    fontSize: '16px', background: '#fcfdfe', primaryColor: '#f0f1f2', primaryTextColor: '#0d0e0f', primaryBorderColor: '#1a1b1c', lineColor: '#0a0b0c', textColor: '#0d0e0f',
    secondaryColor: '#f0f1f2', tertiaryColor: '#fcfdfe', mainBkg: '#f0f1f2', nodeBorder: '#1a1b1c', nodeTextColor: '#0d0e0f', edgeLabelBackground: '#fcfdfe', clusterBkg: '#fcfdfe', clusterBorder: '#1a1b1c',
    titleColor: '#0d0e0f', actorBkg: '#f0f1f2', actorBorder: '#1a1b1c', actorTextColor: '#0d0e0f', actorLineColor: '#0a0b0c', signalColor: '#0a0b0c', signalTextColor: '#0d0e0f',
    noteBkgColor: '#fcfdfe', noteBorderColor: '#1a1b1c', noteTextColor: '#0d0e0f', labelBoxBkgColor: '#f0f1f2', labelBoxBorderColor: '#1a1b1c', labelTextColor: '#0d0e0f', loopTextColor: '#0d0e0f',
    activationBkgColor: '#f0f1f2', activationBorderColor: '#1a1b1c', sequenceNumberColor: '#fcfdfe',
    stateBkg: '#f0f1f2', stateBorder: '#1a1b1c', transitionColor: '#0a0b0c', transitionLabelColor: '#0d0e0f', stateLabelColor: '#0d0e0f', compositeBackground: '#fcfdfe', compositeTitleBackground: '#f0f1f2', altBackground: '#fcfdfe',
    classText: '#0d0e0f',
  },
};
// Light and dark values (the site's own: --card, --ink, --muted, --line, --bg, --accent).
const VARS = {
  light: { fill: '#ffffff', ink: '#1d2430', line: '#5d6978', border: '#8a95a3', bg: '#fbfaf8', 'new-fill': '#fff1e3', new: '#c2570a', 'wrong-fill': '#fde8e8', wrong: '#c0392b' },
  dark: { fill: '#161d26', ink: '#e6edf3', line: '#9aa7b6', border: '#4a5868', bg: '#0f141a', 'new-fill': '#3a2410', new: '#ff9d3d', 'wrong-fill': '#3a1616', wrong: '#ff7b72' },
};
const varsCss = (o) => Object.entries(o).map(([k, v]) => `--wd-${k}:${v}`).join(';');

const hex2 = (n) => Number(n).toString(16).padStart(2, '0');
function colourKey(c) {
  let m = /^#([0-9a-f]{3})$/i.exec(c);
  if (m) c = '#' + m[1].split('').map((x) => x + x).join('');
  m = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(c);
  if (m) c = '#' + hex2(m[1]) + hex2(m[2]) + hex2(m[3]);
  c = c.toLowerCase();
  if (MARK[c]) return MARK[c];
  let r, g, b;
  if ((m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(c))) [r, g, b] = [m[1], m[2], m[3]].map((x) => parseInt(x, 16));
  else if ((m = /^hsla?\(\s*([\d.]+)[\s,]+([\d.]+)%[\s,]+([\d.]+)%/i.exec(c))) { const l = Number(m[3]) / 100; r = g = b = l * 255; }
  else return null;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.5 ? 'fill' : 'line';
}
const COLOUR = /#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|rgba?\([^)]*\)|hsla?\([^)]*\)/g;

/** A drawn SVG made ready for the site: every colour a CSS variable with light and dark values (an SVG shown by <img>
 *  follows the reader's light or dark setting), a fixed size from its viewBox, and its labels hidden for `blank`. */
export function themeDiagramSvg(svg, { blank = false } = {}) {
  let s = String(svg).replace(COLOUR, (c) => { const k = colourKey(c); return k ? `var(--wd-${k})` : c; });
  const vb = /viewBox="([-\d.]+) ([-\d.]+) ([\d.]+) ([\d.]+)"/.exec(s);
  const w = vb ? Math.ceil(Number(vb[3])) : 400, h = vb ? Math.ceil(Number(vb[4])) : 300;
  s = s.replace(/^<svg\b([^>]*)>/, (m, attrs) => {
    const a = attrs.replace(/\s(width|height)="[^"]*"/g, '').replace(/\sstyle="[^"]*"/, '');
    const hide = blank ? '.node:not(.keep) text,.edgeLabel text,.messageText,.noteText,text.actor,.actor tspan{visibility:hidden}' : '';
    return `<svg${a} width="${w}" height="${h}"><style>svg{${varsCss(VARS.light)}}.edgeLabel text,.messageText{paint-order:stroke;stroke:var(--wd-fill);stroke-width:5px;stroke-linejoin:round}@media (prefers-color-scheme:dark){svg{${varsCss(VARS.dark)}}}@media print{svg{${varsCss(VARS.light)}}}${hide}</style>`;
  });
  return { svg: s, w, h };
}

/** Size warnings for one diagram's source (messages; empty when it fits). */
export function diagramWarnings(src) {
  const kind = diagramKind(src), out = [];
  const lines = stripRegions(src).split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('%%'));
  if (kind === 'sequence') {
    const actors = new Set();
    let messages = 0;
    for (const l of lines) {
      let m = /^(?:participant|actor)\s+([\w-]+)/.exec(l);
      if (m) { actors.add(m[1]); continue; }
      m = /^([\w-]+)\s*-[-)x>]*>+[+-]?\s*([\w-]+)\s*:/.exec(l);
      if (m) { actors.add(m[1]); actors.add(m[2]); messages++; }
    }
    if (actors.size > DIAGRAM_LIMITS.actors) out.push(`${actors.size} participants (keep to ${DIAGRAM_LIMITS.actors} or fewer)`);
    if (messages > DIAGRAM_LIMITS.messages) out.push(`${messages} messages (keep to ${DIAGRAM_LIMITS.messages} or fewer, or split it)`);
    return out;
  }
  if (kind !== 'flowchart' && kind !== 'state') return out;
  // Nodes and edges: A[label] --> B, A -- text --> B, A -.-> B, A ==> B, chains (A --> B --> C), and state lines A --> B.
  const label = /\[\[?([^\]]*)\]?\]|\{\{?([^}]*)\}?\}|\(\(?\[?([^)\]]*)\]?\)?\)|>([^\]]*)\]/;
  const ids = new Set(), edges = [], words = [];
  const node = (tok) => {
    const t = tok.trim().replace(/:::\w+$/, '');
    const m = /^([\w-]+|\[\*\])/.exec(t);
    if (!m || /^(class|classDef|style|linkStyle|direction|subgraph|end|click|accTitle|accDescr|state|note)$/.test(m[1])) return null;
    const lm = label.exec(t);
    if (lm) words.push((lm[1] || lm[2] || lm[3] || lm[4] || '').replace(/["`]/g, ''));
    ids.add(m[1]);
    return m[1];
  };
  for (const l of lines.slice(1)) {
    if (/^(class|classDef|style|linkStyle|direction|subgraph|end|click|accTitle|accDescr|note)\b/.test(l)) continue;
    // Edge labels out first (A -- yes --> B, A -->|yes| B, A -. maybe .-> B, A == big ==> B), then split on the arrows.
    const bare = l.replace(/\|[^|]*\|/g, ' ').replace(/(--|==|-\.)\s+[^-=.>]+?\s+(-->|==>|\.->|---)/g, ' $2 ');
    const parts = bare.split(/\s*<?(?:-{2,}|={2,}|-\.+-?)[>ox]?\s*/).map((p) => p.trim()).filter(Boolean);
    if (parts.length > 1) {
      const groups = parts.map((p) => p.split(/\s*&\s*/).map(node).filter(Boolean));
      for (let i = 0; i + 1 < groups.length; i++) for (const a of groups[i]) for (const b of groups[i + 1]) edges.push([a, b]);
    } else node(l);
  }
  if (ids.size > DIAGRAM_LIMITS.nodes) out.push(`${ids.size} boxes (keep to ${DIAGRAM_LIMITS.nodes} or fewer, or split it)`);
  const long = words.filter((w) => w.trim().split(/\s+/).length > DIAGRAM_LIMITS.words);
  if (long.length) out.push(`label${long.length > 1 ? 's' : ''} over ${DIAGRAM_LIMITS.words} words: ${long.map((w) => `"${w.trim()}"`).join(', ')}`);
  // Rows: the longest path from a start (back edges ignored). Top-down: rows down a phone. On a slide (left to right)
  // the widest row is how many boxes stack.
  const into = new Map([...ids].map((i) => [i, 0])), next = new Map([...ids].map((i) => [i, []]));
  for (const [a, b] of edges) { next.get(a)?.push(b); into.set(b, (into.get(b) || 0) + 1); }
  const rank = new Map(), queue = [...ids].filter((i) => !into.get(i));
  if (!queue.length && ids.size) queue.push([...ids][0]);
  queue.forEach((i) => rank.set(i, 0));
  for (let q = 0; q < queue.length; q++) for (const n of next.get(queue[q]) || []) if (!rank.has(n)) { rank.set(n, rank.get(queue[q]) + 1); queue.push(n); }
  const rows = new Map();
  for (const r of rank.values()) rows.set(r, (rows.get(r) || 0) + 1);
  const down = rows.size, across = Math.max(0, ...rows.values());
  if (kind === 'flowchart' && down > DIAGRAM_LIMITS.down) out.push(`${down} rows deep (keep to ${DIAGRAM_LIMITS.down} or fewer, so it fits a phone)`);
  if (kind === 'flowchart' && across > DIAGRAM_LIMITS.across) out.push(`${across} boxes side by side in one row (keep to ${DIAGRAM_LIMITS.across}: on a slide they stack)`);
  return out;
}

/** Every diagram a lesson asks for: [{ key, spec, where, stage }]. Keys name the SVG: a step's id, a task's id
 *  (# becomes -), 'explain', and class-plan items (class-a<n>, class-q<n>). */
export function diagramItems(lesson) {
  const out = [];
  const add = (v, key, where, stage = '') => { const spec = diagramSpec(v); if (v !== undefined) out.push({ key, spec, raw: v, where, stage }); };
  if (lesson.explainDiagram !== undefined && lesson.explainDiagram !== null) add(lesson.explainDiagram, 'explain', 'explainDiagram', 'explain');
  for (const s of lesson.steps || []) {
    if (s.config?.diagram !== undefined) add(s.config.diagram, s.id, `${s.id} (${s.title})`, s.config.stage);
    for (const t of s.tasks || []) if (t.config?.diagram !== undefined) add(t.config.diagram, t.id.replace('#', '-'), `${t.id} (${t.title})`, s.config.stage);
  }
  const C = lesson.classPlan || {};
  (C.activities || []).forEach((a, i) => { if (a && a.diagram !== undefined) add(a.diagram, `class-a${i}`, `class plan activities[${i}]`); });
  (C.questions || []).forEach((q, i) => { if (q && q.diagram !== undefined) add(q.diagram, `class-q${i}`, `class plan questions[${i}]`); });
  return out;
}

const escHtml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** Create's preview (no build step): the diagram drawn in the page by Mermaid loaded from mermaidUrl, in Mermaid's
 *  neutral theme. The published site shows the SVG render-pictures draws instead. snip reads the lesson's code. */
export function diagramPreviewHtml(v, snip, mermaidUrl) {
  const sp = diagramSpec(v);
  if (!sp) return '';
  let src = '';
  try { src = renderSource(snip(sp.ref), sp); } catch (e) { return `<div class="placeholder"><b>${escHtml(e.message)}</b></div>`; }
  const js = `(function(){if(window.__wdq)return window.__wdq();var run=window.__wdq=function(){if(!window.mermaid)return;window.mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',htmlLabels:false,flowchart:{htmlLabels:false}});document.querySelectorAll('.wd-live:not([data-done])').forEach(function(el,i){el.dataset.done='1';window.mermaid.render('wdp'+Date.now()+i,el.dataset.src).then(function(r){el.innerHTML=r.svg;var s=el.querySelector('svg');if(s){s.style.maxWidth='100%';s.style.height='auto';}}).catch(function(e){el.textContent='This diagram does not draw: '+String(e&&e.message||e).split('\\n')[0];});});};var t=document.createElement('script');t.src=${JSON.stringify(mermaidUrl)};t.onload=run;document.head.appendChild(t);})();`;
  return `<figure class="diagram${sp.role === 'misconception' ? ' dmis' : ''}"><div class="wd-live" role="img" aria-label="${escHtml(sp.alt)}" data-src="${escHtml(src)}"></div>${sp.caption ? `<figcaption>${escHtml(sp.caption)}</figcaption>` : ''}<script>${js}</script></figure>`;
}
