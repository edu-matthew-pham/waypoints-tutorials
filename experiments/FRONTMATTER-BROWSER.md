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
