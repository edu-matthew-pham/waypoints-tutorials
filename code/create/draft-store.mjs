// IndexedDB stores binary recordings without putting them in URLs or localStorage.
import YAML from 'yaml';
let database;
function db() {
  return database ||= new Promise((resolve, reject) => {
    const req = indexedDB.open('wp-lesson-drafts-v1', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('drafts', { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
const friendly = (error) => error?.name === 'QuotaExceededError'
  ? Error('Browser storage is full. Download your course package to keep a copy, then remove lessons or videos you no longer need.')
  : error;
export async function readDraft(id) {
  const database = await db();
  return new Promise((resolve, reject) => {
    const req = database.transaction('drafts').objectStore('drafts').get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
export async function listDraftIds() {
  const database = await db();
  return new Promise((resolve, reject) => {
    const req = database.transaction('drafts').objectStore('drafts').getAllKeys();
    req.onsuccess = () => resolve(req.result.map(String));
    req.onerror = () => reject(req.error);
  });
}
export async function updateDraft(id, update) {
  const database = await db();
  return new Promise((resolve, reject) => {
    const tx = database.transaction('drafts', 'readwrite'), store = tx.objectStore('drafts');
    const req = store.get(id);let next;
    req.onsuccess = () => {
      try { next = update(req.result || {id, files: {}, clips: {}});store.put(next); }
      catch (error) { reject(error);tx.abort(); }
    };
    tx.oncomplete = () => resolve(next);
    tx.onabort = tx.onerror = () => reject(friendly(tx.error) || Error('Could not save the lesson draft'));
  });
}
async function sha(content) {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(content));
  return Array.from(new Uint8Array(hash), n => n.toString(16).padStart(2, '0')).join('');
}
/** The whole lesson (every file). Videos recorded before 18 Oct 2026 were tied to this. */
export async function fingerprint(files) {
  return sha(JSON.stringify(Object.keys(files).sort().map(name => [name, files[name]])));
}
// Frontmatter that never changes what a video shows, so editing it keeps recordings.
const COSMETIC = ['title', 'summary', 'order', 'unit', 'optional', 'hook', 'author', 'sources', 'teachers', 'introduces', 'assumes', 'recipes', 'node', 'uses', 'woven', 'tagline', 'moveId', 'reviews', 'block'];
/**
 * What one video depends on: the frontmatter (less the descriptive fields above; explainClip only for the
 * explain video), its own "## " section of lesson.md, code written inside lesson.md and every other file.
 * Editing another step's text, or retitling, reordering or moving the lesson to another unit, keeps the video.
 */
export async function clipFingerprint(files, stepId) {
  const md = String(files['lesson.md'] || '').replace(/\r\n/g, '\n');
  const fm = md.match(/^---\n([\s\S]*?)\n---\n?/);
  let meta = {};
  try { meta = (fm && YAML.parse(fm[1])) || {}; } catch { meta = { invalid: fm?.[1] }; }
  for (const k of COSMETIC) delete meta[k];
  if (stepId !== 'explain') delete meta.explainClip;
  const body = fm ? md.slice(fm[0].length) : md;
  const inline = [...body.matchAll(/^```code[ \t]+[\w.\-/]+#[\w-]+[ \t]*\n[\s\S]*?\n```[ \t]*$/gm)].map(m => m[0]);
  const sections = body.replace(/^```teacher[ \t]*\n[\s\S]*?\n```[ \t]*$\n?/gm, '').split(/^## /m);
  const n = /^step-(\d+)$/.exec(stepId)?.[1];
  const section = n ? (sections[Number(n)] ?? '').replace(/^```code[ \t]+[\w.\-/]+#[\w-]+[ \t]*\n[\s\S]*?\n```[ \t]*$/gm, '').trim() : '';
  const others = Object.keys(files).filter(k => k !== 'lesson.md').sort().map(k => [k, files[k]]);
  return sha(JSON.stringify({ v: 2, step: stepId, meta: sortKeys(meta), section, inline, files: others }));
}
function sortKeys(v) {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === 'object') return Object.fromEntries(Object.keys(v).sort().map(k => [k, sortKeys(v[k])]));
  return v;
}
/** A recording still matches the lesson: its own step is unchanged (or, for older videos, the whole lesson is). */
export async function clipIsCurrent(files, stepId, clip) {
  if (!clip?.fingerprint) return false;
  return clip.fingerprint === await clipFingerprint(files, stepId) || clip.fingerprint === await fingerprint(files);
}
export async function deleteDraft(id) {
  const database=await db();
  return new Promise((resolve,reject)=>{const tx=database.transaction('drafts','readwrite');tx.objectStore('drafts').delete(id);tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error)});
}
/**
 * Report whether saved work is protected from automatic clearing and how much is used. With request, also ask
 * the browser to protect it (call after a user action: Firefox shows a prompt; Chrome decides silently).
 */
export async function keepStorage(request = false) {
  const s = navigator.storage;
  let persisted = false;
  try { persisted = (await s?.persisted?.()) || (request && await s?.persist?.()) || false; } catch { /* not supported */ }
  let used = null, quota = null;
  try { const e = await s?.estimate?.(); used = e?.usage ?? null; quota = e?.quota ?? null; } catch { /* not supported */ }
  return { persisted, used, quota };
}
