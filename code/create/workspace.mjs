import { maths } from './maths-browser.mjs?v=59ba610f20';
import { SafeMarked as Marked } from './safe-markdown.mjs?v=59ba610f20';
import { parseLessonText, snippetFrom } from './lesson-core.mjs?v=59ba610f20';
import { lessonPageHtml, tryEmbed, esc } from './lesson-view.mjs?v=59ba610f20';
import { diagramPreviewHtml } from './diagram-core.mjs?v=59ba610f20';
import { highlightCode } from './highlight.js?v=59ba610f20';
import { draftBrowserClip as converter } from './draft-clip.mjs?v=59ba610f20';
import { readDraft, updateDraft, deleteDraft, listDraftIds, clipFingerprint, clipIsCurrent, keepStorage } from './draft-store.mjs?v=59ba610f20';
import { zip, readZipEntries, readFolderEntries, readPackageEntries, safePath, slug, uniqueSlugs, setFrontmatter, frontmatter, courseIndexMd, GENERATED } from './lesson-package.mjs?v=59ba610f20';
import { newLessonFiles } from './lesson-starters.mjs?v=59ba610f20';

const $ = (id) => document.getElementById(id);
const KEY = 'wp-create-course-v1', PENDING = 'wp-create-pending-v1'; // edits typed but not yet saved to IndexedDB
const allSteps = (lesson) => [...lesson.steps, ...(lesson.explainStep ? [lesson.explainStep] : [])];
const uuid = () => crypto.randomUUID();
const rootURL = new URL('../../', location.href).href;
const notice = (text) => { $('packageStatus').textContent = text; };
const MB = (n) => `${Math.max(0.1, n / 1048576).toFixed(n < 10485760 ? 1 : 0)} MB`;
// WebM files from MediaRecorder carry no duration, so players cannot seek until it is found.
const FIX_DURATION = 'if(this.duration===Infinity){this.currentTime=1e101;this.ontimeupdate=function(){this.ontimeupdate=null;this.currentTime=0}}';
const videoTag = (src, vtt) => `<figure class="clip"><video controls preload="metadata" src="${esc(src)}" onloadedmetadata="${FIX_DURATION}">${vtt ? `<track kind="captions" srclang="en" label="Captions" default src="${esc(vtt)}">` : ''}</video></figure>`;
const README = (what) => `This is a Learning Waypoints ${what} made with Create (https://tutorials.learningwaypoints.com/code/create/).

To view it: open index.html in a web browser. Text and videos work offline; the interactive
playgrounds need internet.

To edit it: in Create, choose "Open existing work", then import this ZIP, or the unzipped folder
(handy when Safari or Finder has already unzipped it).

To publish it on the site: ask for it to be reviewed (Create's "Request publishing"). The folders
match the site's content/ layout: index.md holds the course and its units, and each lesson folder
holds lesson.md and its code. index.html, README.txt, clips.json and clips/ are made by Create and
are not needed in the site's repository (the site records its own videos).
`;
function parsed(files, id = 'my-lesson') { return parseLessonText(files['lesson.md'] || '', id); }

export async function setupWorkspace(controller) {
  let workspace;
  try { workspace = JSON.parse(localStorage.getItem(KEY)); } catch { /* none saved */ }
  const sharedLink = location.hash.startsWith('#l=');
  if (!workspace || !Array.isArray(workspace.lessons) || !workspace.lessons.length) {
    const id = uuid(); workspace = { title: 'My course', summary: '', units: [], meta: {}, active: id, lessons: [{ id, title: 'My lesson' }], starter: id };
  } else if (sharedLink) {
    if (workspace.lessons.length >= 100) throw Error('The course is full. Export it before importing another shared lesson.');
    const id = uuid(); workspace.lessons.push({ id, title: parsed(controller.getFiles()).title }); workspace.active = id;
  }
  workspace.units ||= []; workspace.meta ||= {};
  const requested = !sharedLink && new URLSearchParams(location.search).get('lesson');
  if (workspace.lessons.some((l) => l.id === requested)) workspace.active = requested;
  if (!workspace.lessons.some((l) => l.id === workspace.active)) workspace.active = workspace.lessons[0].id;
  let starterFactory = null;
  let recordings = {}, current = new Set(), clipState = '', queue = Promise.resolve(), revision = 0, pending = null, pendingTimer = 0;
  const urls = new Map();
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(workspace)); } catch { /* storage unavailable */ } };
  const unitOf = (files) => String(frontmatter(files['lesson.md']).unit ?? '');
  const unitTitle = (id) => workspace.units.find((u) => u.id === id)?.title;
  // The first-visit starter, still untouched (never edited, no videos): imports and new files replace it.
  const pristine = async () => workspace.lessons.length === 1 && workspace.starter === workspace.lessons[0].id && !Object.keys((await readDraft(workspace.starter))?.clips || {}).length;

  function workspaceUI() {
    $('courseTitle').value = workspace.title; $('courseSummary').value = workspace.summary;
    $('courseLesson').replaceChildren(...workspace.lessons.map((l) => {
      const opt = document.createElement('option'); opt.value = l.id;
      const u = l.unit && unitTitle(l.unit); opt.textContent = u ? `${u} › ${l.title}` : l.title; return opt;
    }));
    $('courseLesson').value = workspace.active;
    const index = workspace.lessons.findIndex((l) => l.id === workspace.active);
    $('moveLessonUp').disabled = index === 0; $('moveLessonDown').disabled = index === workspace.lessons.length - 1; $('removeLesson').disabled = workspace.lessons.length === 1;
    $('previousLesson').disabled = index === 0; $('nextLesson').disabled = index === workspace.lessons.length - 1;
    const active = workspace.lessons[index];
    $('lessonUnit').replaceChildren(new Option('No unit', ''), ...workspace.units.map((u) => new Option(u.title, u.id)));
    if (active?.unit && !workspace.units.some((u) => u.id === active.unit)) $('lessonUnit').append(new Option(`${active.unit} (not in this course's units)`, active.unit));
    $('lessonUnit').value = active?.unit || '';
    $('renameUnit').disabled = !active?.unit || !workspace.units.some((u) => u.id === active.unit);
  }
  function releaseURLs() { for (const url of urls.values()) URL.revokeObjectURL(url); urls.clear(); }
  const blobURL = (key, blob) => { if (!urls.has(key)) urls.set(key, URL.createObjectURL(blob)); return urls.get(key); };
  function clipHtml(step) {
    if (!step.config.clip) return '';
    const clip = recordings[step.id];
    if (clip && current.has(step.id)) return videoTag(blobURL(step.id, clip.blob), clip.vtt ? blobURL(step.id + '.vtt', new Blob([clip.vtt], { type: 'text/vtt' })) : '');
    return `<div class="placeholder"><b>${clip ? 'Video needs re-recording' : 'No video yet'} · ${esc(step.id)}</b><span>Record it under “Videos for this lesson”, then download the lesson or course.</span></div>`;
  }
  async function storageNote() {
    const s = await keepStorage(false);
    const used = s.used != null ? `This browser is using ${MB(s.used)} for Create. ` : '';
    return used + (s.persisted ? 'Saved work is protected from automatic clearing.' : 'The browser may clear saved work when space runs low, or after a week without a visit in Safari: download a package to keep it.');
  }
  async function clipsUI(files) {
    const select = $('draftClip'), previous = select.value; select.replaceChildren(); let missing = 0, unsupported = 0, total = 0;
    try {
      const lesson = parsed(files);
      for (const step of allSteps(lesson).filter((s) => s.config.clip)) {
        total++; const opt = document.createElement('option'); opt.value = step.id;
        const clip = recordings[step.id], state = current.has(step.id) ? 'recorded' : clip ? 'needs re-recording' : 'not recorded';
        let mode = ''; try { if (converter(files, lesson, step).mode === 'manual') mode = ' (record by hand)'; } catch (error) { opt.disabled = true; opt.textContent = `${step.title} — can’t record here: ${error.message}`; unsupported++; select.append(opt); continue; }
        if (state !== 'recorded') missing++;
        opt.textContent = `${step.title}${mode} — ${state}`; select.append(opt);
      }
      if ([...select.options].some((o) => o.value === previous && !o.disabled)) select.value = previous;
      else select.value = [...select.options].find((o) => !o.disabled)?.value || '';
      $('recordClip').disabled = !select.value;
      $('videoStatus').textContent = total
        ? `${total} video(s) in this lesson: ${missing} still to record.${unsupported ? ` ${unsupported} use actions Create can’t record.` : ''} ${await storageNote()}`
        : 'No videos in this lesson yet. Put the cursor in a step of lesson.md and use “Clip instructions” to add one.';
    } catch (error) { $('recordClip').disabled = true; $('videoStatus').textContent = error.message; }
  }
  // Re-check which videos still match the lesson. The preview re-renders only when that changes
  // (or when asked), so typing does not reload it twice.
  async function refresh(force = true) {
    const token = ++revision, id = workspace.active; await queue;
    const record = await readDraft(id), files = controller.getFiles(), clips = record?.clips || {}, ok = new Set();
    for (const [stepId, clip] of Object.entries(clips)) if (await clipIsCurrent(files, stepId, clip)) ok.add(stepId);
    if (token !== revision || id !== workspace.active) return;
    const state = JSON.stringify([id, Object.keys(clips).sort(), [...ok].sort(), Object.values(clips).map((c) => c.recordedAt)]);
    const changedState = state !== clipState;
    if (changedState) { releaseURLs(); recordings = clips; current = ok; clipState = state; }
    await clipsUI(files);
    if (force || changedState) controller.render();
  }
  function save(files) {
    const id = workspace.active, snapshot = structuredClone(files);
    try {
      const l = workspace.lessons.find((x) => x.id === id);
      l.title = parsed(snapshot).title || 'Untitled lesson'; l.unit = unitOf(snapshot);
      if (workspace.starter === id) delete workspace.starter;
      persist(); workspaceUI();
    } catch { /* lesson.md does not parse yet */ }
    queue = queue.catch(() => {}).then(() => updateDraft(id, (record) => ({ ...record, files: snapshot }))).then(() => { try { if (JSON.parse(localStorage.getItem(PENDING))?.id === id) localStorage.removeItem(PENDING); } catch { /* none */ } });
    queue.then(() => refresh(false)).catch((error) => notice('Could not save this lesson: ' + error.message));
    return queue;
  }
  /** Save the editor's files. Typing passes { later: true } so saving waits for a pause. */
  function changed(files, { later = false } = {}) {
    clearTimeout(pendingTimer);
    if (later) {
      pending = files; pendingTimer = setTimeout(() => { const f = pending; pending = null; save(f); }, 600);
      try { localStorage.setItem(PENDING, JSON.stringify({ id: workspace.active, files })); } catch { /* storage unavailable */ }
      return Promise.resolve();
    }
    pending = null; return save(files);
  }
  const flush = () => changed(controller.getFiles());
  async function switchLesson(id) {
    // Save the editor into the lesson it belongs to; when that lesson was just replaced, drop the old text instead.
    if (id !== workspace.active) await flush(); else { clearTimeout(pendingTimer); pending = null; await queue.catch(() => {}); }
    const record = await readDraft(id);
    if (!record) throw Error('Lesson draft not found');
    ++revision; workspace.active = id; recordings = {}; current = new Set(); clipState = ''; releaseURLs(); persist(); workspaceUI(); controller.setFiles(record.files); await refresh();
  }
  const report = (fn) => async () => { try { await fn(); } catch (error) { notice(error.message); } };
  $('courseTitle').onchange = () => { workspace.title = $('courseTitle').value || 'My course'; persist(); };
  $('courseSummary').onchange = () => { workspace.summary = $('courseSummary').value; persist(); };
  $('courseLesson').onchange = report(() => switchLesson($('courseLesson').value));
  $('previousLesson').onclick = report(() => switchLesson(workspace.lessons[workspace.lessons.findIndex((l) => l.id === workspace.active) - 1].id));
  $('nextLesson').onclick = report(() => switchLesson(workspace.lessons[workspace.lessons.findIndex((l) => l.id === workspace.active) + 1].id));
  async function moveLesson(direction) {
    await flush(); const index = workspace.lessons.findIndex((l) => l.id === workspace.active), other = index + direction;
    if (other < 0 || other >= workspace.lessons.length) return;
    [workspace.lessons[index], workspace.lessons[other]] = [workspace.lessons[other], workspace.lessons[index]]; persist(); workspaceUI();
  }
  $('moveLessonUp').onclick = report(() => moveLesson(-1)); $('moveLessonDown').onclick = report(() => moveLesson(1));
  $('removeLesson').onclick = report(async () => {
    if (workspace.lessons.length === 1 || !confirm('Remove this lesson and its videos from the course? Download the course first if you want to keep a copy.')) return;
    await flush(); const id = workspace.active, index = workspace.lessons.findIndex((l) => l.id === id);
    workspace.lessons.splice(index, 1); await switchLesson(workspace.lessons[Math.min(index, workspace.lessons.length - 1)].id); await deleteDraft(id);
  });
  $('addLesson').onclick = report(async () => {
    await flush(); if (workspace.lessons.length >= 100) throw Error('A course can contain up to 100 lessons');
    const id = uuid(), title = `Lesson ${workspace.lessons.length + 1}`, unit = workspace.lessons.find((l) => l.id === workspace.active)?.unit || '';
    let starter = starterFactory ? starterFactory(title) : newLessonFiles(title);
    if (unit) starter = { ...starter, 'lesson.md': setFrontmatter(starter['lesson.md'], { unit }) };
    await updateDraft(id, () => ({ id, files: starter, clips: {} })); workspace.lessons.push({ id, title: parsed(starter).title || title, unit }); await switchLesson(id);
  });
  // ---------- units ----------
  function setUnit(id) {
    const files = controller.getFiles();
    controller.editLesson(setFrontmatter(files['lesson.md'], { unit: id || undefined }));
  }
  $('lessonUnit').onchange = report(async () => { setUnit($('lessonUnit').value); await flush(); });
  $('addUnit').onclick = report(async () => {
    const title = (prompt('Name of the new unit (for example “How AI generates text”)') || '').trim(); if (!title) return;
    let id = slug(title), n = 2; while (workspace.units.some((u) => u.id === id)) id = `${slug(title)}-${n++}`;
    workspace.units.push({ id, title, summary: '' }); persist(); setUnit(id); await flush();
  });
  $('renameUnit').onclick = report(async () => {
    const unit = workspace.units.find((u) => u.id === workspace.lessons.find((l) => l.id === workspace.active)?.unit); if (!unit) return;
    const title = (prompt('New name for this unit', unit.title) || '').trim(); if (!title) return;
    unit.title = title; persist(); workspaceUI();
  });
  $('refreshClips').onclick = report(() => refresh());
  $('recordClip').onclick = report(async () => {
    await flush();
    const lesson = parsed(controller.getFiles()), step = allSteps(lesson).find((s) => s.id === $('draftClip').value);
    converter(controller.getFiles(), lesson, step); // fail before leaving the editor
    location.href = `clip.html?draft=${encodeURIComponent(workspace.active)}&step=${encodeURIComponent(step.id)}`;
  });
  window.addEventListener('focus', () => refresh(false).catch((error) => notice(error.message)));
  window.addEventListener('pagehide', () => { if (pending) save(pending); });
  const channel = typeof BroadcastChannel === 'function' ? new BroadcastChannel('wp-lesson-recordings') : null;
  if (channel) channel.onmessage = (event) => { if (event.data === workspace.active) refresh(false).catch((error) => notice(error.message)); };

  // ---------- packages ----------
  async function lessonEntries(record, dir, { navigation = '', sharedAssets = null, unit, order } = {}) {
    let files = { ...record.files };
    if (unit !== undefined || order !== undefined) files['lesson.md'] = setFrontmatter(files['lesson.md'], { unit: unit || undefined, order });
    const lesson = parsed(files, 'package/' + dir.split('/').pop()), read = (name) => files[name] ?? lesson.inline?.[name], clips = {}, entries = [];
    let missing = 0;
    for (const name of Object.keys(files)) {
      safePath(name);
      if (GENERATED.has(name) || name.startsWith('clips/')) throw Error(`“${name}” is a name Create uses for its own files. Rename that file in the lesson first.`);
      entries.push([dir + '/' + name, files[name]]);
    }
    for (const step of allSteps(lesson).filter((s) => s.config.clip)) {
      const clip = record.clips?.[step.id];
      if (!(await clipIsCurrent(record.files, step.id, clip))) { missing++; continue; }
      const file = `clips/${step.id}.webm`;
      clips[step.id] = { path: file, fingerprint: await clipFingerprint(files, step.id), recordedAt: clip.recordedAt, ...(clip.vtt ? { captions: `clips/${step.id}.vtt` } : {}) };
      entries.push([dir + '/' + file, clip.blob]);
      if (clip.vtt) entries.push([dir + `/clips/${step.id}.vtt`, clip.vtt]);
    }
    // Captions go in the page as a data: URL as well as clips/<step>.vtt: browsers will not load a caption file
    // beside a page opened from disk.
    const dataVtt = (id) => record.clips[id]?.vtt ? 'data:text/vtt;charset=utf-8,' + encodeURIComponent(record.clips[id].vtt) : '';
    const clip = (step) => !step.config.clip ? '' : clips[step.id] ? videoTag(clips[step.id].path, clips[step.id].captions && dataVtt(step.id)) : `<div class="placeholder">No video yet · ${esc(step.id)}</div>`;
    const tryHtml = (step) => { if (!step.config.try) return ''; return tryEmbed(lesson, step, snippetFrom(read, step.config.try.starter || step.config.code), rootURL, '', { use: lesson.modules, local: Object.fromEntries(lesson.modules.filter((n) => read(n + '.py') !== undefined).map((n) => [n, read(n + '.py')])) }); };
    let html = lessonPageHtml(lesson, { Marked, highlightCode, snippet: (ref) => snippetFrom(read, ref), clipHtml: clip, tryHtml, maths, crumb: null, source: '', diagramHtml: (v) => diagramPreviewHtml(v, (r) => snippetFrom(read, r), new URL('vendor/mermaid.min.js', import.meta.url).href) });
    html = html.replace('<div class="wrap">', `<div class="wrap">${navigation}<p class="lede">Downloaded lesson. Text and videos work offline; interactive playgrounds need internet.</p>`);
    if (lesson.language === 'maths') {
      const assetPath = sharedAssets?.path || dir;
      if (sharedAssets) html = html.replaceAll('href="_katex/', 'href="../_katex/').replaceAll('src="_numbas/', 'src="../_numbas/');
      if (!sharedAssets?.included) {
        const response = await fetch(rootURL + '_katex/katex.min.css'); if (!response.ok) throw Error('Maths stylesheet unavailable'); const css = await response.text();
        entries.push([assetPath + '/_katex/katex.min.css', css]);
        const fonts = [...new Set([...css.matchAll(/url\((fonts\/[^)]+)\)/g)].map((m) => m[1]))];
        await Promise.all(fonts.map(async (file) => { const r = await fetch(rootURL + '_katex/' + file); if (!r.ok) throw Error('Maths font unavailable'); entries.push([assetPath + '/_katex/' + file, await r.blob()]); }));
        if (sharedAssets) sharedAssets.included = true;
      }
      if (html.includes('_numbas/') && !sharedAssets?.forms) {
        const r = await fetch(rootURL + maths.forms.src); if (!r.ok) throw Error('Maths check engine unavailable'); entries.push([assetPath + '/_numbas/numbas-jme.min.js', await r.blob()]);
        if (sharedAssets) sharedAssets.forms = true;
      }
    }
    entries.push([dir + '/index.html', html]);
    if (Object.keys(clips).length) entries.push([dir + '/clips.json', JSON.stringify({ format: 'waypoints-clips-v1', clips }, null, 2)]);
    return { entries, missing, title: lesson.title, summary: lesson.summary };
  }
  function download(blob, name) { const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 30000); }
  const missingNote = (n) => n ? ` ${n} video(s) are missing or need re-recording; the pages show a placeholder instead.` : ' All recorded videos are included.';
  $('downloadPackage').onclick = report(async () => {
    await flush(); const record = await readDraft(workspace.active), dir = slug(parsed(record.files).title);
    const result = await lessonEntries(record, dir);
    result.entries.push([dir + '/README.txt', README('lesson')]);
    download(await zip(result.entries), `${dir}-lesson.zip`); notice('Lesson downloaded.' + missingNote(result.missing));
  });
  // The lesson's current videos and captions as plain files (to post on a learning platform), like waypoints-audio's MP3s.
  $('downloadVideos').onclick = report(async () => {
    await flush(); const record = await readDraft(workspace.active), lesson = parsed(record.files), base = slug(lesson.title), entries = [];
    allSteps(lesson).forEach((s, i) => { s.n = i + 1; });
    for (const step of allSteps(lesson).filter((s) => s.config.clip)) {
      const clip = record.clips?.[step.id];
      if (!(await clipIsCurrent(record.files, step.id, clip))) continue;
      const name = `${base}-${step.id === 'explain' ? 'explain' : String(step.n).padStart(2, '0') + '-' + slug(step.title)}`;
      entries.push([`${base}-videos/${name}.webm`, clip.blob]);
      if (clip.vtt) entries.push([`${base}-videos/${name}.vtt`, clip.vtt]);
    }
    if (!entries.length) throw Error('This lesson has no recorded videos yet. Record them under “Videos for this lesson”.');
    entries.push([`${base}-videos/README.txt`, `Videos from the lesson "${lesson.title}", recorded in Create.\nEach .webm plays in current browsers (Chrome, Edge, Firefox, Safari 17.4 or later). The .vtt file beside it holds its captions: add it as subtitles where your platform allows.\n`]);
    download(await zip(entries), `${base}-videos.zip`); notice(`Videos downloaded: ${entries.filter(([n]) => n.endsWith('.webm')).length} video(s) with their captions.`);
  });
  $('downloadCourse').onclick = report(async () => {
    await flush();
    const root = slug(workspace.title), unitIndex = new Map(workspace.units.map((u, i) => [u.id, i]));
    const records = await Promise.all(workspace.lessons.map((l) => readDraft(l.id)));
    // Lessons go out grouped by unit (in the units' order), keeping the course order inside each unit.
    const items = records.map((r, i) => ({ r, i, unit: unitOf(r.files) })).sort((a, b) => (unitIndex.get(a.unit) ?? unitIndex.size) - (unitIndex.get(b.unit) ?? unitIndex.size) || a.i - b.i);
    const dirs = uniqueSlugs(items.map(({ r }) => parsed(r.files).title)), counts = new Map(), entries = [], sharedAssets = { path: root, included: false };
    let missing = 0; const cards = [];
    for (let k = 0; k < items.length; k++) {
      const { r, unit } = items[k], order = (counts.get(unit) || 0) + 1; counts.set(unit, order);
      const navigation = `<nav aria-label="Course"><a href="../index.html">← ${esc(workspace.title)}</a>${k ? ` · <a href="../${dirs[k - 1]}/index.html">Previous lesson</a>` : ''}${k + 1 < items.length ? ` · <a href="../${dirs[k + 1]}/index.html">Next lesson</a>` : ''}</nav>`;
      const result = await lessonEntries(r, `${root}/${dirs[k]}`, { navigation, sharedAssets, unit, order });
      entries.push(...result.entries); missing += result.missing;
      cards.push({ unit, html: `<li><a href="${dirs[k]}/index.html">${esc(result.title)}</a><p>${esc(result.summary)}</p></li>` });
    }
    const groups = [...workspace.units.map((u) => ({ title: u.title, summary: u.summary, cards: cards.filter((c) => c.unit === u.id) })), { title: workspace.units.length ? 'Other lessons' : '', cards: cards.filter((c) => !unitIndex.has(c.unit)) }].filter((g) => g.cards.length);
    entries.push([root + '/index.md', courseIndexMd(workspace)], [root + '/README.txt', README('course')]);
    entries.push([root + '/index.html', `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(workspace.title)}</title><style>body{font:18px system-ui;max-width:850px;margin:40px auto;padding:20px;line-height:1.5}li{padding:8px 0}a{color:#125c9e}h2{margin-top:1.6em}</style><h1>${esc(workspace.title)}</h1><p>${esc(workspace.summary)}</p><p>Choose a lesson. Text and videos work offline; interactive playgrounds need internet.</p>${groups.map((g) => `${g.title ? `<h2>${esc(g.title)}</h2>` : ''}${g.summary ? `<p>${esc(g.summary)}</p>` : ''}<ol>${g.cards.map((c) => c.html).join('')}</ol>`).join('')}</html>`]);
    download(await zip(entries), `${root}-course.zip`); notice(`Course downloaded: ${items.length} lesson(s).` + missingNote(missing));
  });
  async function importEntries(entries) {
    await flush();
    const imported = readPackageEntries(entries), newLessons = [];
    const replaceCourse = !!imported.course;
    if (replaceCourse && !confirm('Replace the current course with the imported one? Download the current course first if you want to keep a copy.')) return;
    if (!replaceCourse && workspace.lessons.length + imported.lessons.length > 100) throw Error('A course can contain up to 100 lessons');
    for (const lesson of imported.lessons) {
      const clips = {};
      for (const [id, clip] of Object.entries(lesson.clips)) if (await clipIsCurrent(lesson.files, id, clip)) clips[id] = clip;
      const id = uuid(); await updateDraft(id, () => ({ id, files: lesson.files, clips })); newLessons.push({ id, title: parsed(lesson.files).title, unit: unitOf(lesson.files) });
    }
    const old = workspace.lessons.map((l) => l.id);
    // An untouched starter lesson is replaced rather than kept beside the import.
    const starterOnly = !replaceCourse && await pristine();
    if (replaceCourse) workspace = { title: imported.course.title, summary: imported.course.summary, units: imported.course.units, meta: imported.course.meta, lessons: newLessons, active: newLessons[0].id };
    else if (starterOnly) workspace.lessons = newLessons;
    else workspace.lessons.push(...newLessons);
    persist(); await switchLesson(newLessons[0].id);
    if (replaceCourse || starterOnly) for (const id of old) await deleteDraft(id).catch(() => {});
    const s = await keepStorage(true);
    const skipped = imported.skipped.length ? ` Skipped ${imported.skipped.length} file(s) that are not text (Create keeps lesson text and code only).` : '';
    notice(`${replaceCourse ? 'Course' : 'Lesson'} imported with ${newLessons.length} lesson(s) and their videos.${skipped}${s.persisted ? '' : ' Download a package now and then: this browser may clear saved work.'}`);
  }
  $('importPackage').onchange = report(async () => {
    const file = $('importPackage').files[0]; if (!file) return;
    try { await importEntries(await readZipEntries(file)); } finally { $('importPackage').value = ''; }
  });
  $('importFolder').onchange = report(async () => {
    const list = [...$('importFolder').files]; if (!list.length) return;
    try { await importEntries(await readFolderEntries(list)); } finally { $('importFolder').value = ''; }
  });

  // ---------- start ----------
  // Edits typed just before the page closed: put them back into their lesson's draft.
  try {
    const p = JSON.parse(localStorage.getItem(PENDING));
    if (p?.id && p.files?.['lesson.md'] !== undefined && workspace.lessons.some((l) => l.id === p.id) && await readDraft(p.id)) { await updateDraft(p.id, (record) => ({ ...record, files: p.files })); if (workspace.starter === p.id) delete workspace.starter; }
    localStorage.removeItem(PENDING);
  } catch { /* none */ }
  const existing = await readDraft(workspace.active);
  if (existing && !sharedLink) controller.setFiles(existing.files);
  else await updateDraft(workspace.active, () => ({ id: workspace.active, files: controller.getFiles(), clips: {} }));
  persist();
  if (sharedLink) { const address = new URL(location.href); address.hash = ''; address.searchParams.set('lesson', workspace.active); history.replaceState(null, '', address); }
  workspaceUI();
  if (workspace.starter !== workspace.active) await changed(controller.getFiles()); // keeps an untouched starter marked as one
  await refresh();
  // Drafts no lesson points to any more (from before course imports cleaned up after themselves).
  listDraftIds().then(async (ids) => { const keep = new Set(workspace.lessons.map((l) => l.id)); for (const id of ids) if (!keep.has(id)) await deleteDraft(id); }).catch(() => {});
  async function addFiles(files, { replaceInitial = false } = {}) {
    const replace = workspace.lessons.length === 1 && (replaceInitial || await pristine());
    if (!replace && workspace.lessons.length >= 100) throw Error('The course is full. Export it before adding another lesson.');
    if (!replace) await flush();
    const title = parsed(files).title, id = replace ? workspace.active : uuid();
    await updateDraft(id, () => ({ id, files, clips: {} }));
    if (replace) { workspace.lessons[0].title = title; workspace.lessons[0].unit = unitOf(files); delete workspace.starter; }
    else workspace.lessons.push({ id, title, unit: unitOf(files) });
    await switchLesson(id);
  }
  return { changed, flush, clipHtml, lessonId: () => workspace.active, setStarterFactory: (fn) => { starterFactory = fn; }, addFiles, importEntries };
}
