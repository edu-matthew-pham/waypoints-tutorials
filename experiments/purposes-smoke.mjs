// English "What are you teaching?" cards: every named course path exists and every card has courses (npm run check-purposes).
import { readFileSync, existsSync } from 'node:fs';
import { parse } from 'yaml';
const fm = parse(readFileSync('content/english/index.md', 'utf8').split('\n---\n')[0].replace(/^---\n/, ''));
let bad = 0;
const chk = (c) => { if (c.path && !existsSync(`content/${c.path}`)) { console.error('✗ no course ' + c.path); bad++; } if (!c.path && !c.title) { console.error('✗ course needs path or title'); bad++; } };
for (const p of fm.purposes) { if (!p.courses?.length) { console.error('✗ empty card ' + p.id); bad++; } p.courses.forEach(chk); }
fm.start.courses.forEach(chk);
if (bad) process.exit(1);
console.log(`✓ purposes: ${fm.purposes.length} cards, start set of ${fm.start.courses.length}`);
