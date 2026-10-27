// Every thread renders, every node sits in a thread and a stage, and lesson nodes map to a thread (npm run check-threads).
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { threadsTable, threadsPageHtml, stageOf } from '../tools/threads-page.mjs';
const triage = parse(readFileSync('data/curriculum/english-triage.yml', 'utf8'));
let bad = 0;
const fail = (m) => { console.error('✗ ' + m); bad++; };
const ids = new Set(triage.threads.map((t) => t.id));
for (const n of triage.nodes) { if (!ids.has(n.thread)) fail(`node ${n.node}: unknown thread ${n.thread}`); if (!stageOf(n.node)) fail(`node ${n.node}: no stage`); }
const lessons = [{ slug: 'english/x/a', title: 'A', node: ['AC9E6LA04 n1', 'NOPE n9'], order: 1 }];
const t = threadsTable(triage, lessons);
if (t.length !== triage.threads.length) fail('thread count');
const html = threadsPageHtml({ title: 'T', table: t, lessonHref: (s) => s, courseTitle: () => 'C' });
for (const th of triage.threads) if (!html.includes(`id="thread-${th.id}"`)) fail('missing section ' + th.id);
if (!html.includes('>A</a>')) fail('lesson link missing');
if (bad) process.exit(1);
console.log(`✓ threads: ${t.length} threads, ${triage.nodes.length} nodes placed, page renders`);
