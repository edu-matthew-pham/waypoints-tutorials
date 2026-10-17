# Browser clips from existing lessons

Build with `npm ci && npm run build`, serve `dist` with `node tools/serve.mjs dist 8765`,
and open `http://127.0.0.1:8765/code/create/clip.html`.
Choose an **Existing lesson clip**, click **Load lesson clip**, then **Preview steps**.
The catalogue comes from the existing `lesson.md` steps and `explainClip`; no new
lesson frontmatter or separate JSON authoring is required. `@file#region` query
values are resolved at build time. JSON import/export remains an optional local draft workflow.

For video, click **Record WebM**, choose **This Tab** in Chrome/Edge, preview the
steps, then **Stop recording** and **Download WebM**. Microphone narration is optional.

## Current limits

- Supports the Turtle playground and shared board playground. The editor retains
  the historical `physics` app identifier for shared boards, including non-physics widgets.
- The catalogue includes only clips whose complete action sequence can be converted.
  Supported actions: captions, waits, Turtle show/run, typing into **Python code**
  (including append), clicking **Run**, and the following `#status: Finished` expectation.
  Other actions and playgrounds are omitted; they still use the production renderer.
- Preview uses complete code updates rather than character-by-character typing,
  waits for Turtle completion (30-second limit), and adds one second per action.
  It does not reproduce production narration timing or pacing.
- Recording captures the whole tab, including editor controls. Narration text is
  a script; only microphone/tab audio is recorded, with no speech synthesis.
- Downloads stay local. This does not replace production MP4 clips, publish a
  recording, write edits back to Markdown, or change rendering/cache inputs.
- Chrome automation verifies silent tab recording; microphone hardware, picker
  interaction and other browsers require manual checks.

## Checks

`node experiments/frontmatter-bridge-test.mjs` checks conversion against existing
lessons. After building, `node experiments/browser-smoke.mjs` uses full Chrome
(`CHROME_PATH` may override its path) to load Turtle and dice lessons directly,
round-trip JSON, preview, interact and record. It checks the WebM header and browser
decoding, and saves screenshots, recordings and diagnostics in
`browser-recorder-results/`. A headless-shell-only Chromium build does not support
tab capture; use full Chrome. The dedicated Actions workflow runs these checks
without invoking the production renderer or publishing.

## Draft lessons and courses

Create lesson now has a local course workspace. Name the course, add lessons,
switch between them, reorder them or remove one. Lesson titles and summaries
remain in the existing lesson frontmatter. Each lesson's preview runs its own
playground and keeps its own progress identifiers.

The example includes a recordable clip. For another step, place the cursor in it
and choose **Clip instructions**; a supported Turtle or shared-board `code:` /
`try.starter` becomes the source for the existing `query` and `clip` fields.
Choose **Record selected clip**, then **Record WebM** and share **This Tab**.
Run **Preview steps**, stop recording, and choose **Use recording in lesson**.
The recorder returns to Create lesson, where the clip plays in its step. Draft
recording actions use the same converter as built lessons. Bound recordings
cannot edit their sequence separately from Markdown.

Draft sources and binary recordings are stored locally in IndexedDB. Reloading or
switching lessons retains them. Any source-file edit marks the lesson's recordings
as outdated; old clips are omitted from exports, and their steps show placeholders.
Returning the files to their recorded state makes the clips valid again. This is
separate from the production renderer's cache. Browser storage can be cleared or
run out of space; download packages to keep a durable copy.

- **Download lesson + videos** creates a ZIP containing `index.html`, original
  source files, `clips/<step>.webm`, and `waypoints-lesson.json`.
- **Download course + videos** creates a ZIP with a contents `index.html`, an
  `index.md` using existing course metadata, `waypoints-course.json`, and numbered
  lesson folders. Lesson pages have previous/next and course links.
- Unzip and open the top-level `index.html` to run a lesson or the whole course.
  Lesson text and recorded videos work offline. Embedded playgrounds still use the
  Tutorials site and require internet. This is not a fully offline playground bundle.
- **Import lesson / course package** reopens the source and recordings for editing.
  A lesson is added to the current course; a course replaces the workspace after
  confirmation. Source-only uploads and source ZIP downloads remain available.
- **Copy share link** continues to share text/code only. It does not upload or
  include video. ZIP packages can be sent through normal file-sharing channels or
  extracted onto static hosting, but Create does not upload them automatically.

Packages use store-only ZIP entries, since WebM is compressed already. Imports
support packages exported here, not arbitrary third-party ZIP formats. Limit:
512 MB per package, 100 lessons and 2,000 files. Unsupported clip actions are
reported; recording is interactive and needs screen-sharing permission. Speech
synthesis, background recording and automatic production publishing are unchanged.

`node experiments/lesson-package-test.mjs` checks binary ZIP round-trips and invalid
packages. `node experiments/course-smoke.mjs` uses full Chrome for recording two
lessons, returning the recordings to Create, export, offline video playback,
course/lesson import, reordering, persistence and stale-recording exclusion.
