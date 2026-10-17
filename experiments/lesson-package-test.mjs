import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { zip, readPackage, readPackageEntries, safePath, setFrontmatter, frontmatter, courseIndexMd, vttFromCues, uniqueSlugs } from '../create/lesson-package.mjs';
import { fingerprint, clipFingerprint, clipIsCurrent } from '../create/draft-store.mjs';

const video = new Uint8Array([26, 69, 223, 163, 0, 255, 128, 1]);
const lessonMd = (title, extra = '') => `---\ntitle: ${title}\nsummary: A test.\nlanguage: python\n${extra}---\nIntro.\n\n## Predict\n\n\`\`\`step\nstage: predict\n\`\`\`\n\nGuess.\n\n## Run\n\n\`\`\`step\nstage: run\nclip:\n  - caption: "Watch."\n\`\`\`\n\nRun it.\n`;
const files = { 'lesson.md': lessonMd('Test'), 'shape.py': 'print("hello")' };

// ---------- per-video fingerprints ----------
const fp = await clipFingerprint(files, 'step-2');
assert.equal(await clipFingerprint({ ...files, 'lesson.md': files['lesson.md'].replace('Guess.', 'Guess what happens.') }, 'step-2'), fp, 'editing another step keeps the video');
assert.equal(await clipFingerprint({ ...files, 'lesson.md': setFrontmatter(files['lesson.md'], { title: 'Renamed', unit: 'u1', order: 3 }) }, 'step-2'), fp, 'retitling or moving the lesson keeps the video');
assert.notEqual(await clipFingerprint({ ...files, 'lesson.md': files['lesson.md'].replace('Watch.', 'Look.') }, 'step-2'), fp, 'editing its own step needs a new video');
assert.notEqual(await clipFingerprint({ ...files, 'shape.py': 'changed' }, 'step-2'), fp, 'editing the code needs a new video');
assert.notEqual(await clipFingerprint({ ...files, 'lesson.md': setFrontmatter(files['lesson.md'], { voice: 'af_heart' }) }, 'step-2'), fp, 'other settings count');
assert.ok(await clipIsCurrent(files, 'step-2', { fingerprint: await fingerprint(files) }), 'videos recorded before per-step fingerprints still count while nothing changed');
assert.ok(!(await clipIsCurrent(files, 'step-2', { fingerprint: 'x' })));

// ---------- frontmatter, course index and captions ----------
const moved = setFrontmatter(files['lesson.md'], { unit: 'basics', order: 2 });
assert.equal(frontmatter(moved).unit, 'basics'); assert.equal(frontmatter(moved).order, 2); assert.ok(moved.endsWith('Run it.\n'));
assert.equal(frontmatter(setFrontmatter(moved, { unit: undefined })).unit, undefined);
const index = courseIndexMd({ title: 'Two units', summary: 'S', units: [{ id: 'a', title: 'First' }, { id: 'b', title: 'Second', summary: 'More' }], meta: { recap: true } });
assert.deepEqual(frontmatter(index).units.map((u) => u.id), ['a', 'b']); assert.equal(frontmatter(index).recap, true);
const vtt = vttFromCues([{ at: 0, text: 'One' }, { at: 2500, text: 'Two' }], 6000);
assert.match(vtt, /^WEBVTT/); assert.match(vtt, /00:00:00\.000 --> 00:00:02\.500\nOne/); assert.match(vtt, /00:00:02\.500 --> 00:00:06\.000\nTwo/);
assert.equal(vttFromCues([], 1000), '');
assert.deepEqual(uniqueSlugs(['Intro', 'Intro', 'Next']), ['intro', 'intro-2', 'next']);

// ---------- new layout: lesson and course ----------
const lessonEntries = (dir, md) => [[dir + '/lesson.md', md], [dir + '/shape.py', files['shape.py']], [dir + '/index.html', '<h1>x</h1>'], [dir + '/README.txt', 'read me'],
  [dir + '/clips/step-2.webm', video], [dir + '/clips/step-2.vtt', vtt], [dir + '/clips.json', JSON.stringify({ format: 'waypoints-clips-v1', clips: { 'step-2': { path: 'clips/step-2.webm', fingerprint: fp } } })]];
const single = await readPackage(await zip(lessonEntries('test', files['lesson.md'])));
assert.equal(single.course, null); assert.deepEqual({ ...single.lessons[0].files }, files, 'generated files are not lesson files');
assert.equal(single.lessons[0].clips['step-2'].vtt, vtt); assert.deepEqual(new Uint8Array(await single.lessons[0].clips['step-2'].blob.arrayBuffer()), video);
const course = await zip([['c/index.md', index], ['c/index.html', '<h1>c</h1>'],
  ...lessonEntries('c/later', setFrontmatter(lessonMd('Later'), { unit: 'b', order: 1 })),
  ...lessonEntries('c/second', setFrontmatter(lessonMd('Second'), { unit: 'a', order: 2 })),
  ...lessonEntries('c/first', setFrontmatter(lessonMd('First'), { unit: 'a', order: 1 }))]);
const restored = await readPackage(course);
assert.equal(restored.course.title, 'Two units'); assert.deepEqual(restored.course.units.map((u) => u.title), ['First', 'Second']); assert.equal(restored.course.meta.recap, true);
assert.deepEqual(restored.lessons.map((l) => frontmatter(l.files['lesson.md']).title), ['First', 'Second', 'Later'], 'lessons are ordered by unit, then order');

// ---------- a plain repository course folder (no Create files) ----------
const repo = readPackageEntries(new Map([['ai/foundations/index.md', index], ['ai/foundations/one/lesson.md', setFrontmatter(lessonMd('One'), { unit: 'a', order: 1 })], ['ai/foundations/one/boards.yml', 'widget: x'], ['ai/foundations/primers/a.md', '# a']].map(([k, v]) => [k, new TextEncoder().encode(v)])));
assert.equal(repo.lessons.length, 1); assert.equal(repo.course.title, 'Two units'); assert.deepEqual(Object.keys(repo.lessons[0].files).sort(), ['boards.yml', 'lesson.md']);

// ---------- older Create packages still import ----------
const oldHash = await fingerprint(files);
const old = (p) => [[p + '/lesson.md', files['lesson.md']], [p + '/shape.py', files['shape.py']], [p + '/clips/step-2.webm', video], [p + '/index.html', '<h1>x</h1>'],
  [p + '/waypoints-lesson.json', JSON.stringify({ format: 'waypoints-lesson-package-v1', files: Object.keys(files), clips: { 'step-2': { path: 'clips/step-2.webm', fingerprint: oldHash } } })]];
const oldCourse = await readPackage(await zip([...old('course/2-two'), ...old('course/1-one'), ['course/index.md', '---\ntitle: "Old"\nsummary: ""\n---\n'], ['course/waypoints-course.json', JSON.stringify({ format: 'waypoints-course-package-v1', title: 'Old', summary: '', lessons: ['1-one', '2-two'] })]]));
assert.deepEqual(oldCourse.lessons.map((l) => l.path), ['course/1-one/', 'course/2-two/']); assert.ok(await clipIsCurrent(oldCourse.lessons[0].files, 'step-2', oldCourse.lessons[0].clips['step-2']));
assert.equal((await readPackage(await zip(old('solo')))).lessons.length, 1);

// ---------- ZIPs made by other tools: deflate, data descriptors, __MACOSX ----------
const dir = mkdtempSync(join(tmpdir(), 'wp-pkg-'));
mkdirSync(join(dir, 'my-course/one/clips'), { recursive: true }); mkdirSync(join(dir, '__MACOSX'), { recursive: true });
writeFileSync(join(dir, 'my-course/index.md'), index); writeFileSync(join(dir, 'my-course/one/lesson.md'), setFrontmatter(lessonMd('One'), { unit: 'a' }));
writeFileSync(join(dir, 'my-course/one/clips/step-2.webm'), video); writeFileSync(join(dir, 'my-course/one/clips.json'), JSON.stringify({ clips: { 'step-2': { fingerprint: 'stale' } } }));
writeFileSync(join(dir, 'my-course/.DS_Store'), 'x'); writeFileSync(join(dir, '__MACOSX/._index.md'), 'x');
execFileSync('python3', ['-c', `import zipfile,os
z=zipfile.ZipFile('${dir}/deflated.zip','w',zipfile.ZIP_DEFLATED)
for root,_,names in os.walk('${dir}'):
  for n in names:
    p=os.path.join(root,n)
    if p.endswith('.zip'): continue
    z.write(p,os.path.relpath(p,'${dir}'))
z.close()`]);
const deflated = await readPackage(new Blob([readFileSync(join(dir, 'deflated.zip'))]));
assert.equal(deflated.course.title, 'Two units'); assert.equal(deflated.lessons.length, 1); assert.equal(Object.keys(deflated.lessons[0].clips).length, 1);
execFileSync('sh', ['-c', `cd ${dir} && rm -f streamed.zip && zip -qr -fd streamed.zip my-course 2>/dev/null || (cd ${dir} && zip -qr streamed.zip my-course)`]);
assert.equal((await readPackage(new Blob([readFileSync(join(dir, 'streamed.zip'))]))).lessons.length, 1);

// ---------- malformed packages ----------
for (const path of ['../lesson.md', '/lesson.md', 'a/../x', 'a\\b', 'C:/x', 'a//b']) assert.throws(() => safePath(path));
const good = new Uint8Array(await (await zip(lessonEntries('test', files['lesson.md']))).arrayBuffer()), corrupted = good.slice(); corrupted[60] ^= 1;
await assert.rejects(() => readPackage(new Blob([corrupted])), /checksum|Truncated|Invalid/);
await assert.rejects(() => zip([['test/x', 'a'], ['test/x', 'b']]), /Duplicate/);
await assert.rejects(() => readPackage(new Blob([new Uint8Array([80, 75, 3, 4])])), /Truncated/);
const noLesson = await zip([['x/notes.txt', 'hi']]); await assert.rejects(() => readPackage(noLesson), /No lesson\.md/);
console.log('Lesson/course packages: new layout with units, plain repository folders, older Create packages, deflated and streamed ZIPs, captions, per-video fingerprints and malformed packages passed');
