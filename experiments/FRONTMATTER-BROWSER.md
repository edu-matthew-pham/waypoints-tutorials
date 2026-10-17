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
and choose **Clip instructions**; the step's `code:` / `try.starter` becomes the source for the
`query` and `clip` fields (every playground in `tools/playground-registry.mjs`; some record by hand).
Choose **Record video**, then **Record video** in the recorder and share **This Tab**.
Run **Preview steps**, stop recording, and choose **Use this video in the lesson**.
The recorder returns to Create, where the video plays in its step. Draft
recording actions use the same converter as built lessons. Bound recordings
cannot edit their sequence separately from Markdown.

Recorder (18 Oct 2026): it checks for tab capture and WebM first and explains when the browser
cannot record (Safari, iPad). Recording shows a timer and stops at 5 minutes; leaving the page
mid-recording, or with an unused video, asks first. Chrome and Edge crop the capture to the caption
and playground (Region Capture). The captions shown while recording are saved as WebVTT with the
video, and the WebM gets its duration written in (`fixWebmDuration`), so players can show its
length and seek.

Draft sources and binary recordings are stored locally in IndexedDB. Reloading or
switching lessons retains them. Each video has its own fingerprint (`clipFingerprint` in
`create/draft-store.mjs`): the lesson's settings, its own `## ` section, code written in
lesson.md and the other files. Editing another step, or the lesson's title, summary, unit or
order, keeps the video; changing its own step or the code marks it as needing re-recording.
Out-of-date videos are left out of downloads, and their steps show placeholders. Videos recorded
before 18 Oct 2026 are tied to the whole lesson and still count until something changes.
Create asks the browser to keep saved work (`navigator.storage.persist()`, after an import or a
recording), shows how much it uses, and removes drafts no lesson points to. Typing is saved after a
pause (with a synchronous backup in localStorage until then).

- **Download lesson (.zip)** makes `<lesson>-lesson.zip`: one `<lesson>/` folder with `lesson.md`
  and its files, `index.html`, `README.txt`, `clips/<step>.webm` and `.vtt`, and `clips.json`.
- **Download course (.zip)** makes `<course>-course.zip`, laid out like `content/<course>/`:
  `index.md` (title, summary, `units:`), `index.html` (lessons grouped by unit), `README.txt`, and a
  folder per lesson (named from its title) whose `lesson.md` carries `unit:` and `order:`.
  Lesson pages have previous/next and course links.
- Unzip and open `index.html` to run a lesson or the whole course. Lesson text, recorded videos
  and their captions work offline (the captions are also inside the page, since browsers will
  not load a caption file next to a page opened from disk). Embedded playgrounds still use the
  Tutorials site and require internet.
- **Import ZIP** and **Import folder** reopen a lesson or course: Create's downloads (this and
  the older numbered-folder layout), a lesson or course folder from the repository's `content/`,
  or a folder that Safari or Finder already unzipped. ZIPs from other tools (deflate, data
  descriptors, `__MACOSX`) are read too. A lesson is added to the course (replacing the untouched
  first-visit starter); a course replaces the workspace after confirmation.
- **Units:** "Unit of this lesson" sets the lesson's `unit:`; **+ Add unit** and **Rename unit**
  edit the course's units, which go into the course's `index.md`.
- **Copy draft link** continues to share text/code only. It does not upload or
  include video.

Limit: 512 MB per package, 100 lessons and 2,000 files. Unsupported clip actions are
reported; recording is interactive and needs screen-sharing permission. Speech
synthesis, background recording and automatic production publishing are unchanged.

`node experiments/lesson-package-test.mjs` checks the package layout, units, repository folders,
older packages, deflated ZIPs, captions, per-video fingerprints and invalid packages. `node experiments/course-smoke.mjs` uses full Chrome for recording two
lessons, returning the recordings to Create, export, offline video playback,
course/lesson import, reordering, persistence and stale-recording exclusion.
