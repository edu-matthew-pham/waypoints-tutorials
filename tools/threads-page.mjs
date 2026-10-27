// How English skills grow (roadmap/english.md, Threads): for each thread in data/curriculum/english-triage.yml, what ACARA
// intends at each stage in plain words and the lessons on the site that practise it. Pure, so a test can use it;
// build-site writes it to /teach/english/threads/. Not a sequence: lessons are not tied to it.

export const STAGES = [
  { id: 'F-2', label: 'Foundation to Year 2' },
  { id: '3-4', label: 'Years 3 and 4' },
  { id: '5-6', label: 'Years 5 and 6' },
  { id: '7-8', label: 'Years 7 and 8' },
  { id: '9-10', label: 'Years 9 and 10' },
];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** Stage id for a node key such as "AC9E6LA02 n1" (code AC9E<year><strand><number>), or null. */
export function stageOf(nodeKey) {
  const m = String(nodeKey).match(/^AC9E(F|\d+)/);
  if (!m) return null;
  const y = m[1] === 'F' ? 0 : Number(m[1]);
  return y <= 2 ? 'F-2' : y <= 4 ? '3-4' : y <= 6 ? '5-6' : y <= 8 ? '7-8' : '9-10';
}

/** triage: parsed english-triage.yml ({ threads, nodes, courses }); lessons: parsed lessons (slug, title, node[], order).
 *  Returns one entry per thread: { thread, stages: [{ id, label, text, nodes, covered, lessons: [lesson], planned: [course], classOnly }] }. */
export function threadsTable(triage, lessons) {
  const threadOf = new Map(triage.nodes.map((n) => [n.node, n.thread]));
  const courseById = new Map((triage.courses || []).map((c) => [c.id, c]));
  const byNode = new Map(); // node key -> lessons
  for (const l of lessons) for (const k of l.node || []) {
    const key = String(k).trim();
    if (!threadOf.has(key)) continue;
    if (!byNode.has(key)) byNode.set(key, []);
    byNode.get(key).push(l);
  }
  return triage.threads.map((thread) => {
    const stages = STAGES.map((s) => {
      const nodes = triage.nodes.filter((n) => n.thread === thread.id && stageOf(n.node) === s.id);
      const seen = new Set(), ls = [];
      let covered = 0;
      for (const n of nodes) {
        const hit = byNode.get(n.node) || [];
        if (hit.length) covered++;
        for (const l of hit) if (!seen.has(l.slug)) { seen.add(l.slug); ls.push(l); }
      }
      ls.sort((a, b) => a.slug.localeCompare(b.slug) || (Number(a.order) || 0) - (Number(b.order) || 0));
      const open = nodes.filter((n) => !(byNode.get(n.node) || []).length);
      const planned = [...new Map(open.filter((n) => n.course && courseById.get(n.course) && courseById.get(n.course).status !== 'built')
        .map((n) => [n.course, courseById.get(n.course)])).values()];
      const classOnly = open.filter((n) => !n.course || !courseById.get(n.course) || courseById.get(n.course).status === 'built').length;
      return { ...s, text: thread.stages?.[s.id] || '', nodes: nodes.length, covered, lessons: ls, planned, classOnly };
    });
    return { thread, stages };
  });
}

export function threadsPageHtml({ title, table, lessonHref, courseTitle, crumbHref = '../../' }) {
  const total = (t) => new Set(t.stages.flatMap((s) => s.lessons.map((l) => l.slug))).size;
  const jump = table.map((t) => `<a class="wpg-chip" href="#thread-${esc(t.thread.id)}">${esc(t.thread.title)}${total(t) ? ` <span class="muted">${total(t)}</span>` : ''}</a>`).join('');
  const sections = table.map((t) => {
    const rows = t.stages.map((s) => {
      const links = s.lessons.map((l) => `<li><a href="${esc(lessonHref(l.slug))}">${esc(l.title)}</a><span class="muted"> · ${esc(courseTitle(l.slug))}</span></li>`).join('');
      const bits = [];
      if (s.planned.length) bits.push(`Planned: ${s.planned.map((c) => esc(c.title)).join(', ')}.`);
      if (s.classOnly) bits.push(`${s.classOnly} idea${s.classOnly === 1 ? ' is' : 's are'} for class, not the site.`);
      const none = !s.lessons.length ? `<p class="muted">${s.nodes ? 'No lessons on the site yet.' : 'Nothing here at this stage.'}</p>` : '';
      return `<div class="wpg-row" data-stage="${esc(s.id)}"><div class="wpg-stage"><b>${esc(s.label)}</b></div><div class="wpg-text">${esc(s.text)}</div>`
        + `<div class="wpg-site">${s.lessons.length ? `<ul>${links}</ul>` : ''}${none}${bits.length ? `<p class="muted wpg-more">${bits.join(' ')}</p>` : ''}</div></div>`;
    }).join('');
    return `<section class="wpg-sec" id="thread-${esc(t.thread.id)}"><h2>${esc(t.thread.title)}</h2><p class="muted wpg-strand">${esc(t.thread.strands)}</p><p>${esc(t.thread.summary)}</p>`
      + `<div class="wpg-grid"><div class="wpg-head"><span>Stage</span><span>What ACARA intends, in plain words</span><span>On this site</span></div>${rows}</div></section>`;
  }).join('');
  const css = `<style>
.wpg-chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 22px}
.wpg-chip{padding:5px 12px;border:1px solid var(--line,#d9d5cc);border-radius:999px;text-decoration:none;font-size:14px;background:var(--card,#fff)}
.wpg-sec{margin:34px 0;scroll-margin-top:calc(var(--nav,56px) + 12px)}
.wpg-strand{margin:0 0 6px;font-size:14px}
.wpg-grid{margin-top:12px;border:1px solid var(--line,#e4e1da);border-radius:8px;overflow:hidden}
.wpg-head,.wpg-row{display:grid;grid-template-columns:150px 1fr 1.1fr;gap:0}
.wpg-head{background:var(--card,#fff);font-size:13px;color:var(--muted,#6b6b6b)}
.wpg-head span,.wpg-row>div{padding:9px 12px}
.wpg-row{border-top:1px solid var(--line,#e4e1da)}
.wpg-row>div:not(:last-child){border-right:1px solid var(--line,#e4e1da)}
.wpg-site ul{margin:0;padding-left:18px}.wpg-site li{margin:2px 0}
.wpg-site p{margin:4px 0}.wpg-more{font-size:14px}
@media (max-width:700px){.wpg-head{display:none}.wpg-row{display:block}.wpg-row>div{border-right:0!important;padding:6px 12px}.wpg-stage{padding-top:10px!important}}
</style>`;
  return `${css}<header class="top"><a class="crumb" href="${esc(crumbHref)}">← Teacher guides</a><h1>${esc(title)}</h1>`
    + `<p class="lede">English skills grow along a few threads, each running from Foundation to Year 10. Each thread below shows what ACARA intends at each stage in plain words, and the lessons here that practise it.</p>`
    + `<p>This is a map, not a sequence. The courses are drop-in skill sets, and none is tied to a stage: pick the lesson that suits your class, then use the thread to see what came before and what comes after. A stage with no lessons is either planned or best done in class.</p></header>`
    + `<nav class="wpg-chips" aria-label="Threads">${jump}</nav>${sections}`
    + `<p class="muted">Built from the Australian Curriculum English descriptors. Each descriptor is placed in the thread its content belongs to, so a thread can mix strands.</p>`;
}
