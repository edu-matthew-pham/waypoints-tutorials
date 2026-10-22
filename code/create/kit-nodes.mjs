// Waypoints Kit nodes as the site uses them: the teacher pointer pages (tools/pointer-pages.mjs) and Create's node
// picker and "Make a primer for this" pre-fill (create/node-picker.mjs). Pure: no file or DOM access, so the build
// and the browser share it (tools/build-create.mjs copies it into Create). The data is data/curriculum/<subject>.json,
// made by tools/import-curriculum.mjs. Kit holds what the curriculum says; the site adds only review status.

export const KIT_REPO = 'https://github.com/edu-matthew-pham/waypoints-kit';

// The curriculum each imported subject comes from, by code prefix (longest first), and Create's subject for it.
export const KIT_SUBJECTS = [
  { id: 'english', prefix: 'AC9E', label: 'English', create: 'english' },
  { id: 'maths', prefix: 'AC9M', label: 'Maths', create: 'maths' },
  { id: 'science', prefix: 'AC9S', label: 'Science', create: 'science' },
  { id: 'hass', prefix: 'AC9HS', label: 'HASS (Foundation to Year 6)', create: 'hass' },
  { id: 'history', prefix: 'AC9HH', label: 'History', create: 'hass' },
  { id: 'geography', prefix: 'AC9HG', label: 'Geography', create: 'hass' },
  { id: 'civics', prefix: 'AC9HC', label: 'Civics and Citizenship', create: 'hass' },
  { id: 'economics', prefix: 'AC9HE', label: 'Economics and Business', create: 'hass' },
  { id: 'hpe', prefix: 'AC9HP', label: 'Health and Physical Education', create: 'general' },
  { id: 'arts', prefix: 'AC9A', label: 'The Arts', create: 'general' },
  { id: 'languages', prefix: 'AC9L', label: 'Languages', create: 'general' },
  { id: 'design', prefix: 'AC9TDE', label: 'Design and Technologies', create: 'engineering' },
  { id: 'systems', prefix: 'AC9TDI', match: /^AC9TDI\d+K/, label: 'Digital Technologies (knowledge)', create: 'code' },
  { id: 'digital-processes', prefix: 'AC9TDI', match: /^AC9TDI\d+P/, label: 'Digital Technologies (processes)', create: 'code' },
];
export const subjectOfCode = (code) => KIT_SUBJECTS.find((s) => (s.match ? s.match.test(String(code)) : String(code).startsWith(s.prefix)))?.id || null;
// Arts, HPE, Languages and Technologies are written in two-year bands: code year 8 is Years 7–8 (span 2).
export const yearText = (d) => (d.years ? `Years ${d.years}` : d.year === 0 ? 'Foundation' : `Year ${d.year}`);   // d.years: '7–8' (import-curriculum)

// Response modes say where extra effort goes at a waypoint (width), not what kind of lesson it is.
// The proposal's table (Project doc create-generic-proposal › Lesson shape › Width).
export const WIDTH = {
  consolidation: { label: 'Consolidation', weight: 'more practise steps, short feedback loops' },
  context_breadth: { label: 'Context breadth', weight: 'more contexts in the vary or modify step' },
  repertoire_building: { label: 'Repertoire building', weight: 'more cases to sort or classify' },
  structured_reasoning: { label: 'Structured reasoning', weight: 'a worked chain of reasons, then a write-and-compare (reasoning) check' },
  integration: { label: 'Integration', weight: 'a combining task at the wider tier' },
};

/** "AC9HH7S03.1", "AC9HH7S03 n1", "AC9HH7S03-n1" or "AC9HH7S03:1" -> { code, n }; else null. Kit has one 3-digit code (AC9HH9K014);
 * Foundation codes put F where the year goes (AC9MFN04, AC9EFLA01, AC9LCHF01). */
export function parseNodeRef(s) {
  const m = String(s || '').trim().match(/^(AC9(?:[A-Z]{1,5}\d{1,2}[A-Z]{1,3}|[A-Z]{1,4}F[A-Z]{0,3})\d{2,3})(?:\s*(?:[.:-]|\s)\s*n?(\d+))$/i);
  return m ? { code: m[1].toUpperCase(), n: Number(m[2]) } : null;
}
export const nodeKey = (r) => `${r.code} n${r.n}`;          // as lessons write it in node:
export const nodeParam = (r) => `${r.code}.${r.n}`;         // as Create's ?node= takes it

/** One node with its standard's context, or null. cur: data/curriculum/<subject>.json. */
export function findNode(cur, ref) {
  const d = cur?.descriptors?.find((x) => x.code === ref.code);
  const n = d?.nodes?.find((x) => x.n === ref.n);
  return n ? withContext(cur, d, n) : null;
}
export function withContext(cur, d, n) {
  return { ...n, code: d.code, subject: cur.subject, year: d.year, ...(d.years ? { years: d.years } : {}), title: d.title, strand: d.strand, description: d.description, knowledge: d.knowledge || '', kit: d.kit || '' };
}

/** Review status (data/review/<subject>.yml, parsed): subject-level now, node-level allowed. */
export function isReviewed(review, ref) {
  if (!review) return false;
  if (review.status === 'reviewed') return true;
  const v = review.nodes && (review.nodes[nodeKey(ref)] ?? review.nodes[ref.code]);
  return v === 'reviewed';
}

// A success criterion ("Correctly identifies the producer…") as a student goal ("I can correctly identify the producer…"),
// because teacher goals start "I can" (lesson-core). Always editable in Create.
export function goalFromCriterion(c) {
  const t = String(c || '').trim().replace(/\.$/, '');
  if (!t) return '';
  if (/^I can\b/.test(t)) return t;
  const can = t.match(/^(?:students?|they|the student)\s+can\s+(.*)$/i);
  if (can) return `I can ${can[1]}`;
  const base = (w) => (/ies$/.test(w) ? w.slice(0, -3) + 'y' : /(sh|ch|x|ss|z)es$/.test(w) ? w.slice(0, -2) : /[^s]s$/.test(w) ? w.slice(0, -1) : null);
  const words = t.split(/\s+/);
  const i = /ly$/i.test(words[0]) && words[1] ? 1 : 0;                // "Correctly identifies"
  const b = base(words[i].toLowerCase());
  if (!b) return `I can show this: ${t.charAt(0).toLowerCase()}${t.slice(1)}`;
  words[i] = b;
  if (i) words[0] = words[0].toLowerCase();
  return `I can ${words.join(' ')}`;
}

// Possible misconceptions to offer (never paste silently): Kit nodes have no misconception field, but a hinge reason
// names the mix-up that makes it a hinge, and response-mode reasons often name what students commonly confuse.
const MIXUP = /\b(conflat|confus|mix(es|ing)? up|mistak|misconception|misread|wrongly|commonly|frequently|often (think|assume|believe|treat))/i;
export function misconceptionsOf(node) {
  const out = [];
  const add = (text, from) => { const t = String(text || '').trim(); if (t && !out.some((o) => o.text === t)) out.push({ text: t, from }); };
  if (node.hinge && node.hinge_reason) add(node.hinge_reason, 'hinge reason');
  for (const m of node.modes || []) for (const s of String(m.reason || '').split(/(?<=[.!?])\s+/)) if (MIXUP.test(s)) add(s, `${WIDTH[m.mode]?.label || m.mode} reason`);
  return out;
}

/** Width suggestions from every chosen node's response modes (a list), each with Kit's reason. */
export function widthSuggestions(nodes) {
  return nodes.flatMap((n) => (n.modes || []).map((m) => ({ node: nodeKey(n), mode: m.mode, label: WIDTH[m.mode]?.label || m.mode, weight: WIDTH[m.mode]?.weight || '', reason: m.reason })));
}

const q = (s) => JSON.stringify(String(s));
const stdName = (n) => `${n.code} node ${n.n} (${yearText(n)} ${n.subjectLabel || labelOf(n.subject)}: ${n.title})`;
const labelOf = (id) => KIT_SUBJECTS.find((s) => s.id === id)?.label || id;

/**
 * A Primer starter (shape: primer) pre-filled from chosen Kit nodes. nodes: from findNode. pick: the teacher's
 * choices { criteria: [text] } (one node: all its success criteria unless the teacher picked; several nodes: only
 * what the teacher picked, never a silent merge). The misconception is offered in Create and written (as
 * design.misconception) only when the teacher has picked one.
 * The title is the node's label (Kit's short name for its checkpoint); the summary is the checkpoint.
 */
export function primerFromNodes(nodes, pick = {}, kitVersion = '') {
  if (!nodes.length) throw Error('Choose a curriculum node first.');
  const one = nodes.length === 1, first = nodes[0];
  const criteria = pick.criteria ?? (one ? first.criteria : []);
  const goals = criteria.map(goalFromCriterion).filter(Boolean);
  const title = one ? first.label.replace(/\s+[—–-]\s+.*$/, '') : (pick.title || `${first.title}: ${nodes.length} waypoints`);
  const summary = one ? first.checkpoint.replace(/^Students can\s+/i, 'Learn to ').replace(/\s*$/, '') : `Waypoints from ${[...new Set(nodes.map((n) => n.code))].join(', ')}.`;
  const nodeLine = one ? `node: ${nodeKey(first)}` : `node:\n${nodes.map((n) => `  - ${nodeKey(n)}`).join('\n')}`;
  const width = widthSuggestions(nodes);
  const hinge = nodes.filter((n) => n.hinge).map(nodeKey);
  const before = [
    `Drafted from Waypoints Kit${kitVersion ? ` ${kitVersion}` : ''} ${nodes.map(stdName).join('; ')}. Kit is a draft under review: check the waypoint, goals and checks before use.`,
    hinge.length ? `Kit marks ${hinge.join(', ')} as a hinge: students who miss it struggle with what follows, so check it before moving on.` : '',
    width.length ? `Width (Kit's response modes): ${[...new Set(width.map((w) => `${w.label.toLowerCase()} (${w.weight})`))].join('; ')}.` : '',
  ].filter(Boolean).join(' ');
  const lesson = `---
title: ${q(title)}
summary: ${q(summary)}
language: science
shape: primer
${nodeLine}
---
${one ? first.checkpoint : nodes.map((n) => `- ${n.checkpoint}`).join('\n')}

Replace this introduction with one or two sentences students will read first.

## Think first

\`\`\`step
stage: predict
\`\`\`

Ask a question students can answer before they are taught: what do they think, and why?

## The idea

\`\`\`step
stage: investigate
\`\`\`

State the one idea in plain words, with a short example.

## Worked example

\`\`\`step
stage: investigate
\`\`\`

Apply the idea to one example, one step at a time, saying why at each step.

## Check

\`\`\`step
stage: practise
\`\`\`

A short check: can students use the idea on a new example?

## Apply

\`\`\`step
stage: make
check:
  type: reasoning
  q: "Use the idea on your own class text or topic. Write two or three sentences."
  models:
    - "A short model answer that uses the idea, for students to compare with."
  criteria:
${(criteria.length ? criteria : ['I used the idea, not just the topic.', 'I gave a reason or evidence.']).map((c) => `    - ${q(c)}`).join('\n')}
\`\`\`

Students use the idea on their own class text or topic, then compare with a model answer.

\`\`\`teacher
summary: ${q(one ? first.checkpoint : `Waypoints ${nodes.map(nodeKey).join(', ')}.`)}
${goals.length ? `goals:\n${goals.map((g) => `  - ${q(g)}`).join('\n')}\n` : ''}before: ${q(before)}
${pick.misconception ? `design:\n  misconception: ${q(pick.misconception)}\n` : ''}\`\`\`
`;
  return { 'lesson.md': lesson };
}

/** The chosen nodes as plain text for the copied lesson prompt, so the AI need not fetch Kit. */
export function nodesPromptText(nodes, pick = {}, kitVersion = '') {
  if (!nodes.length) return '';
  const L = [`CURRICULUM NODES (from Waypoints Kit${kitVersion ? ` ${kitVersion}` : ''}, a draft under review; use these and do not fetch Kit for them)`,
    `Write them in frontmatter as node: ${nodes.length === 1 ? nodeKey(nodes[0]) : `[${nodes.map(nodeKey).join(', ')}]`}. Quote codes exactly; never invent one.`];
  for (const n of nodes) {
    L.push('', `${nodeKey(n)}: ${yearText(n)} ${labelOf(n.subject)}, ${n.code} ${n.title} (${n.strand})`, `Descriptor: ${n.description}`, `Waypoint ${n.n}: ${n.label}`, `Checkpoint: ${n.checkpoint}`);
    if (n.knowledge) L.push(`Prior knowledge (the standard's): ${n.knowledge}`);
    if (n.criteria?.length) L.push('Success criteria:', ...n.criteria.map((c) => `- ${c}`));
    if (n.width) {
      if (n.width.minimum) L.push(`Minimum width: ${n.width.minimum}`);
      if (n.width.typical) L.push(`Typical width: ${n.width.typical}`);
      if (n.width.wider?.length) L.push('Wider:', ...n.width.wider.map((w) => `- ${w}`));
    }
    if (n.hinge) L.push(`Hinge: yes. ${n.hinge_reason || ''}`.trim());
    if (n.modes?.length) L.push('Response modes (width suggestions, not lesson types):', ...n.modes.map((m) => `- ${m.mode} → ${WIDTH[m.mode]?.weight || ''}. Kit's reason: ${m.reason}`));
  }
  if (pick.criteria?.length) L.push('', 'Goals I picked from the success criteria:', ...pick.criteria.map((c) => `- ${c}`));
  if (pick.misconception) L.push('', `Misconception I picked: ${pick.misconception}`);
  if (nodes.length > 1 && !pick.criteria?.length) L.push('', 'Several nodes: ask me which success criteria and misconception to use; do not merge them silently.');
  return L.join('\n') + '\n\n';
}

/** Create's compact copy of a subject's data (only what the picker and pre-fill use). */
export function compactCurriculum(cur, review) {
  return {
    subject: cur.subject, label: labelOf(cur.subject), source: cur.source, kit: review?.kit || '', status: review?.status || 'draft',
    descriptors: cur.descriptors.map((d) => ({
      code: d.code, year: d.year, ...(d.years ? { years: d.years } : {}), strand: d.strand, title: d.title, description: d.description, knowledge: d.knowledge || '', kit: d.kit || '',
      nodes: d.nodes.map((n) => ({ n: n.n, label: n.label, checkpoint: n.checkpoint, hinge: n.hinge, ...(n.hinge_reason ? { hinge_reason: n.hinge_reason } : {}), criteria: n.criteria || [], ...(n.width ? { width: n.width } : {}), modes: n.modes || [] })),
    })),
  };
}
