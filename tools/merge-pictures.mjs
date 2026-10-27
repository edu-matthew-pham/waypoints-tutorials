// Join the pictures drawn by parallel `draw` jobs (publish workflow). Usage:
//   node tools/merge-pictures.mjs <base _pictures dir> <shard dir> [<shard dir> ...]
// Each shard dir is one job's copy of dist/_pictures. Files are copied into the base unless it already has them
// (unchanged pictures are the same in every shard); every pictures.json is joined entry by entry. A picture drawn by
// one shard is in only that shard's manifest, so the join is exact. makecode-out/failures.txt lines are joined.
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const [base, ...shards] = process.argv.slice(2);
if (!base || !shards.length) { console.error('usage: merge-pictures.mjs <base> <shard>...'); process.exit(2); }
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const failures = [];
let copied = 0, merged = 0;
for (const shard of shards) {
  if (!existsSync(shard)) continue;
  for (const f of walk(shard)) {
    const rel = relative(shard, f), to = join(base, rel);
    mkdirSync(dirname(to), { recursive: true });
    if (rel.endsWith('pictures.json')) {
      const mine = existsSync(to) ? JSON.parse(readFileSync(to, 'utf8')) : {};
      const theirs = JSON.parse(readFileSync(f, 'utf8'));
      for (const [id, e] of Object.entries(theirs)) {
        // Keep the entry that matches a drawn file: a shard's own drawing replaces an older or seeded record.
        if (!mine[id] || mine[id].hash !== e.hash) { mine[id] = e; merged++; }
      }
      writeFileSync(to, JSON.stringify(mine, null, 1) + '\n');
    } else if (rel === join('makecode-out', 'failures.txt')) {
      for (const l of readFileSync(f, 'utf8').split('\n')) if (l && l !== 'none') failures.push(l);
    } else if (!existsSync(to)) { copyFileSync(f, to); copied++; }
  }
}
if (existsSync(join(base, 'makecode-out')) || failures.length) {
  mkdirSync(join(base, 'makecode-out'), { recursive: true });
  writeFileSync(join(base, 'makecode-out', 'failures.txt'), failures.length ? failures.join('\n') + '\n' : 'none\n');
}
console.log(`Merged ${shards.length} shard(s): ${copied} picture file(s) added, ${merged} manifest entries joined.`);
