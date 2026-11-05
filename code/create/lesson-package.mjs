// Lesson and course packages, laid out like the repository's content/ folders, so one ZIP can be
// shared with a colleague, opened offline, imported back into Create, or copied into content/:
//
//   my-course/index.md            course title, summary and units (as in content/<course>/index.md)
//   my-course/index.html          offline course page (generated)
//   my-course/README.txt          how to open, import or publish it (generated)
//   my-course/<lesson>/lesson.md  frontmatter carries unit: and order:
//   my-course/<lesson>/*.py ...   the lesson's other files
//   my-course/<lesson>/index.html offline lesson page (generated)
//   my-course/<lesson>/clips/<step>.webm, <step>.vtt   recorded videos and their captions
//   my-course/<lesson>/clips.json fingerprints that tie each video to the source it was recorded from
//
// A lesson package is one <lesson>/ folder. Import also reads a plain lesson or course folder (no clips),
// ZIPs made by other tools (deflate, data descriptors, __MACOSX), and the older Create packages
// (waypoints-lesson.json / waypoints-course.json).
import YAML from 'yaml';

const enc = new TextEncoder(), dec = new TextDecoder('utf-8', { fatal: true });
const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc32 = (bytes) => { let c = 0xffffffff; for (const b of bytes) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const LIMIT = 512 * 1024 * 1024;
export const GENERATED = new Set(['index.html', 'clips.json', 'README.txt', 'waypoints-lesson.json']);
const WEBM = [26, 69, 223, 163];

export function safePath(name) {
  if (typeof name !== 'string' || !name || name.includes('\\') || name.includes('\0') || name.split('/').some((x) => !x || x === '.' || x === '..') || /^[a-z]:/i.test(name)) throw Error('Unsafe package filename');
  return name;
}
export const slug = (title) => String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'lesson';
/** Distinct folder names: "intro", "intro-2", ... */
export function uniqueSlugs(titles) {
  const seen = new Map();
  return titles.map((t) => { const s = slug(t), n = (seen.get(s) || 0) + 1; seen.set(s, n); return n === 1 ? s : `${s}-${n}`; });
}

// ---------- writing ----------
export async function zip(entries) {
  if (entries.length > 2000) throw Error('Too many package files');
  const parts = [], central = [], seen = new Set(); let offset = 0;
  const u16 = (n) => [n & 255, (n >>> 8) & 255], u32 = (n) => [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255];
  for (const [name, value] of entries) {
    safePath(name); if (seen.has(name)) throw Error('Duplicate package filename: ' + name); seen.add(name);
    const nb = enc.encode(name), data = typeof value === 'string' ? enc.encode(value) : value instanceof Blob ? new Uint8Array(await value.arrayBuffer()) : new Uint8Array(value);
    if (nb.length > 65535 || offset + data.length > LIMIT) throw Error('Package exceeds 512 MB');
    const crc = crc32(data), local = new Uint8Array([80, 75, 3, 4, 20, 0, 0, 8, 0, 0, 0, 0, 33, 0, ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(nb.length), 0, 0, ...nb]);
    parts.push(local, data);
    central.push(new Uint8Array([80, 75, 1, 2, 20, 0, 20, 0, 0, 8, 0, 0, 0, 0, 33, 0, ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(nb.length), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...u32(offset), ...nb]));
    offset += local.length + data.length;
  }
  const size = central.reduce((n, c) => n + c.length, 0);
  return new Blob([...parts, ...central, new Uint8Array([80, 75, 5, 6, 0, 0, 0, 0, ...u16(entries.length), ...u16(entries.length), ...u32(size), ...u32(offset), 0, 0])], { type: 'application/zip' });
}

/** Set (or add) frontmatter keys in lesson.md text, keeping the rest of the file and its comments. */
export function setFrontmatter(text, values) {
  const m = String(text).match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return text;
  const doc = YAML.parseDocument(m[1]);
  for (const [k, v] of Object.entries(values)) { if (v === undefined || v === '') doc.delete(k); else doc.set(k, v); }
  return `---\n${String(doc).trimEnd()}\n---\n` + String(text).slice(m[0].length);
}
export function frontmatter(text) {
  const m = String(text || '').match(/^---\n([\s\S]*?)\n---\n?/);
  try { return (m && YAML.parse(m[1])) || {}; } catch { return {}; }
}
export function courseIndexMd(course) {
  const meta = { ...(course.meta || {}), title: course.title || 'My course', summary: course.summary || '' };
  if (course.units?.length) meta.units = course.units.map((u) => ({ id: u.id, title: u.title, ...(u.summary ? { summary: u.summary } : {}) }));
  else delete meta.units;
  return `---\n${YAML.stringify(meta).trimEnd()}\n---\n`;
}
export function vttFromCues(cues, end) {
  const t = (ms) => { const s = Math.max(0, ms) / 1000, h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${(s % 60).toFixed(3).padStart(6, '0')}`; };
  const list = (cues || []).filter((c) => c && String(c.text || '').trim());
  if (!list.length) return '';
  return 'WEBVTT\n\n' + list.map((c, i) => `${i + 1}\n${t(c.at)} --> ${t(Math.max(c.at + 500, list[i + 1]?.at ?? end ?? c.at + 4000))}\n${String(c.text).replace(/-->/g, '→').trim()}`).join('\n\n') + '\n';
}

/**
 * MediaRecorder's WebM has no Duration, so players cannot show its length or seek well. Add it to the
 * Segment's Info element (EBML). Returns the input unchanged when it already has one or the layout is unexpected.
 */
const concat = (parts) => { const out = new Uint8Array(parts.reduce((n, x) => n + x.length, 0)); let o = 0; for (const x of parts) { out.set(x, o); o += x.length; } return out; };
export function fixWebmDuration(bytes, ms) {
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const vlen = (x) => { for (let i = 0; i < 8; i++) if (x & (0x80 >> i)) return i + 1; return 0; };
  const readId = (p) => { const n = vlen(b[p]); return n ? { n, id: [...b.subarray(p, p + n)].reduce((v, x) => v * 256 + x, 0) } : null; };
  const readSize = (p) => {
    const n = vlen(b[p]); if (!n) return null;
    let v = b[p] & (0xff >> n), unknown = v === (0xff >> n);
    for (let i = 1; i < n; i++) { v = v * 256 + b[p + i]; if (b[p + i] !== 0xff) unknown = false; }
    return { n, v, unknown };
  };
  const vint8 = (v) => { const out = new Uint8Array(8); out[0] = 1; for (let i = 7; i >= 1; i--) { out[i] = v % 256; v = Math.floor(v / 256); } return out; };
  try {
    let p = 0; const h = readId(p); if (!h || h.id !== 0x1a45dfa3) return b;
    const hs = readSize(p + h.n); p += h.n + hs.n + hs.v;
    const seg = readId(p); if (!seg || seg.id !== 0x18538067) return b;
    const segSizeAt = p + seg.n, ss = readSize(segSizeAt), segData = segSizeAt + ss.n;
    for (let q = segData; q < Math.min(b.length, segData + 65536);) {
      const e = readId(q); if (!e) return b; const es = readSize(q + e.n); if (!es || es.unknown) return b;
      const data = q + e.n + es.n, end = data + es.v;
      if (e.id === 0x1f43b675) return b; // reached a Cluster: no Info
      if (e.id === 0x1549a966) {
        let scale = 1000000;
        for (let r = data; r < end;) {
          const c = readId(r), cs = readSize(r + c.n), cd = r + c.n + cs.n;
          if (c.id === 0x4489) return b; // already has a duration
          if (c.id === 0x2ad7b1) scale = [...b.subarray(cd, cd + cs.v)].reduce((v, x) => v * 256 + x, 0) || scale;
          r = cd + cs.v;
        }
        const dur = new Uint8Array(11); dur.set([0x44, 0x89, 0x88]); new DataView(dur.buffer).setFloat64(3, ms * 1000000 / scale);
        const info = concat([b.subarray(q, q + e.n), vint8(es.v + dur.length), b.subarray(data, end), dur]);
        const grow = info.length - (end - q);
        const segSize = ss.unknown ? b.subarray(segSizeAt, segData) : vint8(ss.v + grow);
        return concat([b.subarray(0, segSizeAt), segSize, b.subarray(segData, q), info, b.subarray(end)]);
      }
      q = end;
    }
  } catch { /* leave it as recorded */ }
  return b;
}

// ---------- reading ----------
async function inflate(bytes) {
  if (typeof DecompressionStream !== 'function') throw Error('This browser cannot open compressed ZIPs. Use a recent Chrome, Edge, Firefox or Safari.');
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
const junk = (name) => name.split('/').some((p) => p === '__MACOSX' || p === '.DS_Store' || p.startsWith('._') || p === 'Thumbs.db');

/** path -> bytes, from the ZIP's central directory (works for store or deflate, with or without data descriptors). */
export async function readZipEntries(file) {
  if (file.size > LIMIT) throw Error('Package exceeds 512 MB');
  const bytes = new Uint8Array(await file.arrayBuffer()), view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), entries = new Map();
  if (bytes.length < 22) throw Error('Truncated ZIP: this file is not a complete ZIP');
  let eocd = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65535); i--) if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw Error('Invalid ZIP: no file list found');
  const count = view.getUint16(eocd + 10, true); let p = view.getUint32(eocd + 16, true);
  if (count === 0xffff || p === 0xffffffff) throw Error('ZIP64 packages are not supported');
  if (count > 2000) throw Error('Too many files in the ZIP');
  for (let n = 0; n < count; n++) {
    if (p + 46 > bytes.length || view.getUint32(p, true) !== 0x02014b50) throw Error('Invalid ZIP file list');
    const flags = view.getUint16(p + 8, true), method = view.getUint16(p + 10, true), crc = view.getUint32(p + 16, true), size = view.getUint32(p + 20, true), raw = view.getUint32(p + 24, true);
    const nameLen = view.getUint16(p + 28, true), extraLen = view.getUint16(p + 30, true), commentLen = view.getUint16(p + 32, true), local = view.getUint32(p + 42, true);
    const nameBytes = bytes.subarray(p + 46, p + 46 + nameLen);
    p += 46 + nameLen + extraLen + commentLen;
    let name; try { name = dec.decode(nameBytes); } catch { name = new TextDecoder('latin1').decode(nameBytes); }
    if (name.endsWith('/') || junk(name)) continue;
    safePath(name);
    if (flags & 1) throw Error('Encrypted ZIPs are not supported');
    if (local + 30 > bytes.length || view.getUint32(local, true) !== 0x04034b50) throw Error('Truncated ZIP entry: ' + name);
    const start = local + 30 + view.getUint16(local + 26, true) + view.getUint16(local + 28, true);
    if (start + size > bytes.length) throw Error('Truncated ZIP entry: ' + name);
    const stored = bytes.subarray(start, start + size);
    const data = method === 0 ? stored : method === 8 ? await inflate(stored) : null;
    if (!data) throw Error(`Unsupported compression in ${name}`);
    if (data.length !== raw || crc32(data) !== crc) throw Error('Package checksum failed: ' + name);
    if (entries.has(name)) throw Error('Duplicate ZIP entry: ' + name);
    entries.set(name, data);
  }
  return entries;
}
/** path -> bytes from an <input webkitdirectory> selection (a folder unzipped by Finder or Safari). */
export async function readFolderEntries(fileList) {
  const entries = new Map();
  for (const f of fileList) {
    const name = f.webkitRelativePath || f.name;
    if (junk(name)) continue;
    safePath(name);
    if (entries.size >= 2000) throw Error('Too many files in the folder');
    entries.set(name, new Uint8Array(await f.arrayBuffer()));
  }
  return entries;
}
const text = (bytes) => { try { return dec.decode(bytes); } catch { return null; } };
const dirOf = (path) => path.includes('/') ? path.slice(0, path.lastIndexOf('/') + 1) : '';

function readLesson(entries, dir, skipped) {
  const files = Object.create(null), clips = Object.create(null);
  let manifest = null;
  for (const [path, bytes] of entries) {
    if (!path.startsWith(dir)) continue;
    const rel = path.slice(dir.length);
    if (rel.startsWith('clips/') || GENERATED.has(rel)) continue;
    if (rel.includes('/') && entries.has(dir + rel.split('/')[0] + '/lesson.md')) continue; // a nested lesson
    const t = text(bytes);
    if (t === null) { skipped.push(path); continue; }
    files[rel] = t;
  }
  if (typeof files['lesson.md'] !== 'string') throw Error('Missing lesson.md in ' + (dir || 'the package'));
  const clipJson = entries.get(dir + 'clips.json'), legacy = entries.get(dir + 'waypoints-lesson.json');
  try {
    if (clipJson) manifest = JSON.parse(text(clipJson));
    else if (legacy) { const m = JSON.parse(text(legacy)); manifest = { clips: m.clips }; if (Array.isArray(m.files)) for (const k of Object.keys(files)) if (!m.files.includes(k)) delete files[k]; }
  } catch { throw Error('Invalid clips.json in ' + (dir || 'the package')); }
  for (const [id, clip] of Object.entries(manifest?.clips || {})) {
    if (!/^step-\d+$|^explain$/.test(id) || !clip || typeof clip.fingerprint !== 'string') throw Error('Invalid clip metadata');
    const data = entries.get(dir + `clips/${id}.webm`);
    if (!data || data.length < 4 || WEBM.some((b, i) => data[i] !== b)) throw Error('Missing or invalid WebM: ' + id);
    const vtt = entries.get(dir + `clips/${id}.vtt`), cap = vtt ? text(vtt) : '';
    clips[id] = { blob: new Blob([data], { type: 'video/webm' }), fingerprint: clip.fingerprint, recordedAt: clip.recordedAt, ...(cap && cap.startsWith('WEBVTT') ? { vtt: cap } : {}) };
  }
  return { files, clips, path: dir };
}

/** { course: { title, summary, units, meta } | null, lessons: [{ files, clips, path }], skipped: [paths] } */
export function readPackageEntries(entries) {
  const skipped = [];
  const lessonDirs = [...entries.keys()].filter((p) => p === 'lesson.md' || p.endsWith('/lesson.md')).map(dirOf);
  if (!lessonDirs.length) throw Error('No lesson.md found. Choose a lesson or course ZIP or folder.');
  if (lessonDirs.length > 100) throw Error('A course can contain up to 100 lessons');
  // The course folder is the parent the lessons share; its index.md holds the title and units.
  const parents = [...new Set(lessonDirs.map((d) => dirOf(d.slice(0, -1))))];
  const root = parents.length === 1 ? parents[0] : null;
  const legacyCourse = root !== null && entries.get(root + 'waypoints-course.json');
  const indexMd = root !== null && entries.get(root + 'index.md');
  const lessons = lessonDirs.map((d) => readLesson(entries, d, skipped));
  if (lessonDirs.length === 1 && !indexMd && !legacyCourse) return { course: null, lessons, skipped };
  let course = { title: 'My course', summary: '', units: [], meta: {} };
  if (indexMd) {
    const fm = frontmatter(text(indexMd));
    const { title, summary, units, ...meta } = fm;
    course = { title: String(title || 'My course'), summary: String(summary || ''), units: Array.isArray(units) ? units.filter((u) => u && u.id).map((u) => ({ id: String(u.id), title: String(u.title || u.id), summary: String(u.summary || '') })) : [], meta };
  }
  let order = null;
  if (legacyCourse) {
    try { const c = JSON.parse(text(legacyCourse)); if (!indexMd || !course.title) { course.title = String(c.title || course.title); course.summary = String(c.summary || course.summary); } if (Array.isArray(c.lessons)) order = c.lessons.map((p) => root + p + '/'); } catch { /* use folder order */ }
  }
  const unitIndex = new Map(course.units.map((u, i) => [u.id, i]));
  const key = (l) => {
    const fm = frontmatter(l.files['lesson.md']);
    return [order ? order.indexOf(l.path) : 0, unitIndex.has(String(fm.unit)) ? unitIndex.get(String(fm.unit)) : unitIndex.size, Number.isFinite(Number(fm.order)) && fm.order !== null && fm.order !== '' ? Number(fm.order) : Infinity, l.path];
  };
  lessons.sort((a, b) => { const x = key(a), y = key(b); for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] < y[i] ? -1 : 1; return 0; });
  return { course, lessons, skipped };
}
export async function readPackage(file) { return readPackageEntries(await readZipEntries(file)); }
