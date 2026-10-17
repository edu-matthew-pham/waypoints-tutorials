// IndexedDB stores binary recordings without putting them in URLs or localStorage.
let database;
function db() {
  return database ||= new Promise((resolve, reject) => {
    const req = indexedDB.open('wp-lesson-drafts-v1', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('drafts', { keyPath: 'id' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
export async function readDraft(id) {
  const database = await db();
  return new Promise((resolve, reject) => {
    const req = database.transaction('drafts').objectStore('drafts').get(id);
    req.onsuccess = () => resolve(req.result);
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
    tx.onabort = tx.onerror = () => reject(tx.error || Error('Could not save the lesson draft'));
  });
}
export async function fingerprint(files) {
  const content = JSON.stringify(Object.keys(files).sort().map(name => [name, files[name]]));
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(content));
  return Array.from(new Uint8Array(hash), n => n.toString(16).padStart(2, '0')).join('');
}
export async function deleteDraft(id) {
  const database=await db();
  return new Promise((resolve,reject)=>{const tx=database.transaction('drafts','readwrite');tx.objectStore('drafts').delete(id);tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error)});
}
