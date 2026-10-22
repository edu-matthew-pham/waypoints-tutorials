// Curriculum node picker in Create's lesson-idea panel (Project doc create-generic-proposal › Pre-fill from nodes):
// subject, year, standard and waypoint from the imported Kit data (curriculum/<subject>.json, written by
// tools/build-create.mjs). Anchors are optional: with no node, Create works as before. One node pre-fills its success
// criteria as goals; several give a pick list (never a silent merge). Misconceptions are offered, never pasted:
// "Use this" writes design.misconception into the open lesson. Width suggestions come from every node's response modes.
import { KIT_SUBJECTS, yearText, findNode, nodeKey, parseNodeRef, subjectOfCode, misconceptionsOf, widthSuggestions } from './kit-nodes.mjs?v=8f2bb9b51c';
const $ = (id) => document.getElementById(id);
const el = (tag, props = {}, ...kids) => { const e = Object.assign(document.createElement(tag), props); e.append(...kids.filter((k) => k != null)); return e; };
const short = (t, n = 70) => (t.length > n ? `${t.slice(0, n - 1)}…` : t);

export function setupNodePicker({ onChange = () => {}, useDesign = () => false } = {}) {
  const data = new Map();      // subject -> compact curriculum
  let index = [];
  let chosen = [];             // nodes from findNode
  let picked = new Set();      // criteria texts the teacher ticked
  let misconception = '';
  const load = async (id) => {
    if (!data.has(id)) {
      const r = await fetch(`curriculum/${id}.json`, { cache: 'no-cache' });
      if (!r.ok) throw Error(`Curriculum data for ${id} is unavailable.`);
      data.set(id, await r.json());
    }
    return data.get(id);
  };
  const ready = (async () => {
    try {
      const r = await fetch('curriculum/index.json', { cache: 'no-cache' });
      if (!r.ok) throw Error('unavailable');
      index = await r.json();
      $('nodeSubject').replaceChildren(el('option', { value: '', textContent: 'Choose…' }), ...index.map((s) => el('option', { value: s.id, textContent: `${s.label}${s.status === 'reviewed' ? '' : ' (draft)'}` })));
      $('nodeStatus').textContent = 'Optional. Anchor the lesson to one or more curriculum waypoints from Waypoints Kit (a draft under review).';
    } catch { $('nodeStatus').textContent = 'Curriculum data is unavailable here; lessons work without a node.'; }
  })();

  const fill = (sel, items, label) => { sel.replaceChildren(el('option', { value: '', textContent: label }), ...items); sel.disabled = items.length === 0; };
  async function subjectChanged() {
    const id = $('nodeSubject').value;
    fill($('nodeYear'), [], 'Year'); fill($('nodeStandard'), [], 'Standard'); fill($('nodePick'), [], 'Waypoint');
    if (!id) return;
    const cur = await load(id);
    fill($('nodeYear'), [...new Set(cur.descriptors.map((d) => d.year))].map((y) => el('option', { value: y, textContent: yearText(cur.descriptors.find((d) => d.year === y)) })), 'Year');
  }
  async function yearChanged() {
    const cur = await load($('nodeSubject').value), y = Number($('nodeYear').value);
    fill($('nodePick'), [], 'Waypoint');
    fill($('nodeStandard'), cur.descriptors.filter((d) => d.year === y).map((d) => el('option', { value: d.code, textContent: short(`${d.code} ${d.title}`), title: d.title })), 'Standard');
  }
  async function standardChanged() {
    const cur = await load($('nodeSubject').value), d = cur.descriptors.find((x) => x.code === $('nodeStandard').value);
    fill($('nodePick'), d ? d.nodes.map((n) => el('option', { value: n.n, textContent: short(`${n.n}. ${n.label}`), title: n.checkpoint })) : [], 'Waypoint');
  }
  $('nodeSubject').onchange = subjectChanged; $('nodeYear').onchange = yearChanged; $('nodeStandard').onchange = standardChanged;
  $('nodeAdd').onclick = async () => {
    const code = $('nodeStandard').value, n = Number($('nodePick').value);
    if (!code || !n) { $('nodeStatus').textContent = 'Choose a standard and a waypoint first.'; return; }
    await add({ code, n });
  };

  /** Add a node by reference; returns it, or throws. */
  async function add(ref) {
    await ready;
    const id = subjectOfCode(ref.code);
    if (!id || !index.some((s) => s.id === id)) throw Error(`No curriculum data for ${ref.code}.`);
    const node = findNode(await load(id), ref);
    if (!node) throw Error(`${nodeKey(ref)} is not in Waypoints Kit's data.`);
    if (!chosen.some((x) => nodeKey(x) === nodeKey(node))) chosen.push(node);
    // Leave the selects on this node's standard, so a neighbouring waypoint is one choice away.
    if ($('nodeStandard').value !== node.code) {
      $('nodeSubject').value = id; await subjectChanged();
      $('nodeYear').value = String(node.year); await yearChanged();
      $('nodeStandard').value = node.code; await standardChanged();
    }
    // One node: its success criteria are the goals. Several: the teacher picks (start from none).
    picked = chosen.length === 1 ? new Set(node.criteria) : (chosen.length === 2 && picked.size === chosen[0].criteria.length ? new Set() : picked);
    $('nodeStatus').textContent = `${nodeKey(node)} added.${chosen.length > 1 ? ' Several waypoints: tick the success criteria to use as goals.' : ''}`;
    render(); onChange();
    return node;
  }
  function remove(key) {
    chosen = chosen.filter((x) => nodeKey(x) !== key);
    if (chosen.length === 1) picked = new Set(chosen[0].criteria);
    else picked = new Set([...picked].filter((c) => chosen.some((n) => n.criteria.includes(c))));
    if (!chosen.length) misconception = '';
    render(); onChange();
  }
  function render() {
    const box = $('nodeChosen');
    box.hidden = !chosen.length;
    if (!chosen.length) { box.replaceChildren(); return; }
    const kit = index.find((s) => s.id === chosen[0].subject)?.kit || '';
    const cards = chosen.map((n) => el('div', { className: 'node-card' },
      el('p', {}, el('b', { textContent: `${nodeKey(n)} ${n.label}` }), n.hinge ? el('span', { className: 'node-tag', textContent: 'Hinge' }) : null,
        el('button', { type: 'button', className: 'node-remove', textContent: 'Remove', onclick: () => remove(nodeKey(n)), ariaLabel: `Remove ${nodeKey(n)}` })),
      el('p', { className: 'muted', textContent: `${yearText(n)} · ${n.title} · ${n.checkpoint}` }),
      el('fieldset', {}, el('legend', { textContent: 'Goals from its success criteria' }),
        ...n.criteria.map((c) => { const cb = el('input', { type: 'checkbox', checked: picked.has(c), onchange: () => { if (cb.checked) picked.add(c); else picked.delete(c); onChange(); } }); return el('label', { className: 'node-opt' }, cb, ` ${c}`); }))));
    const mis = chosen.flatMap((n) => misconceptionsOf(n).map((m) => ({ ...m, node: nodeKey(n) })));
    const misBox = el('fieldset', {}, el('legend', { textContent: 'Possible misconceptions (from Kit; pick one, or write your own in Your design decisions)' }),
      ...(mis.length ? mis.map((m) => el('div', { className: 'node-opt' },
        el('span', { textContent: `${m.text} ` }), el('span', { className: 'muted', textContent: `(${m.node}, ${m.from}) ` }),
        el('button', { type: 'button', textContent: misconception === m.text ? 'Chosen' : 'Use this', onclick: (e) => { misconception = m.text; const wrote = useDesign('misconception', m.text); $('nodeStatus').textContent = wrote ? 'Misconception written into the open lesson’s design decisions.' : 'Misconception chosen: it goes into the copied prompt and the next starter.'; render(); onChange(); } })))
        : [el('p', { className: 'muted', textContent: 'Kit names none for these waypoints. Write your own in Your design decisions.' })]));
    const width = widthSuggestions(chosen);
    const widthBox = el('fieldset', {}, el('legend', { textContent: 'Width suggestions (Kit’s response modes; where extra effort goes, not the lesson type)' }),
      ...(width.length ? width.map((w) => el('details', { className: 'node-opt' }, el('summary', { textContent: `${w.label}: ${w.weight}${chosen.length > 1 ? ` (${w.node})` : ''}` }), el('p', { className: 'muted', textContent: w.reason })))
        : [el('p', { className: 'muted', textContent: 'No response modes in the data for these waypoints yet.' })]));
    box.replaceChildren(el('h3', { textContent: `Anchored to ${chosen.length} waypoint${chosen.length === 1 ? '' : 's'}${kit ? ` (Waypoints Kit ${kit}, draft)` : ''}` }), ...cards, misBox, widthBox);
  }
  return {
    ready, add,
    async addParam(param) { const ref = parseNodeRef(param); if (!ref) throw Error(`"${param}" is not a node (write it as AC9HH7S03.1).`); return add(ref); },
    nodes: () => chosen.slice(),
    pick: () => ({ criteria: chosen.length ? chosen.flatMap((n) => n.criteria).filter((c, i, a) => picked.has(c) && a.indexOf(c) === i) : [], misconception }),
    kit: () => index.find((s) => s.id === chosen[0]?.subject)?.kit || '',
    createSubject: () => KIT_SUBJECTS.find((s) => s.id === chosen[0]?.subject)?.create || null,
  };
}
