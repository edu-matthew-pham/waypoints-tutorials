# Working notes for Claude (read first)

Waypoints tutorials: a static site (GitHub Pages) of markdown lessons with recorded clips and live playgrounds. Owner: Matthew (teacher, CGGS). He prefers direct, concise, high-signal replies.

## How we work
- "Let's track and discuss" means: record proposals in `ROADMAP.md`, commit locally, do not push, do not build.
- "go" (or "defaults") means: build the whole batch, test in a headless browser, re-render clips, commit with the attribution trailers, `git push origin HEAD:main`.
- Pushing triggers a Pages deploy (a newer push cancels a running one), so do not push while a run should finish.
- Do not add rigid pedagogy rules. Clips only where useful (hook, expected result without code, explaining why).

## Teaching decisions
- PRIMM: Predict (lock in, compare after Run), Run, Investigate, Modify, Make. Investigate tools must follow the lesson insight. Several tasks per step show as sub-pills only when more than one.
- Real-world content is a small complete example students Modify (the heading names the task). Make is an explicit task. Large projects belong to the teacher (For teachers panel).
- Foundations first, spiral curriculum, mastery shown by repeated use. Order: 1 intro, 2 variables, 3 decisions, 4 lists, 5 functions, 6 parameters, 7 returns, 8 modules, 9 events, 10 build a button.
- Progress is per-browser localStorage only; no class tracking.
- Series plan (see ROADMAP): turtle core, events and hand-built widgets, checkpoint, console bridge, then a fork: deepen Python, or Gradio (data/ML) or microStudio (games). Pygame parked.

## Playground runtime
- The turtle playground is our own Skulpt bridge (`playground/skulpt-bridge.js`) plus a canvas renderer (`playground/canvas-turtle.js`), not Skulpt's turtle.
- Events: `onscreenclick`, `onkey`, `ontimer`, `listen`, `textinput`, `numinput`. `mainloop()`/`done()` waits for events until Stop; with nothing registered it returns at once. Code checks and the Run-step compare box accept a Stopped run. Keys need the picture clicked first.
- `predict` check: a locked prediction is stored in `wp-predict`; the next Run step shows it beside the real result.

## Open design decisions (details in ROADMAP.md)
- Hidden-assumptions audit: `assumes`/`introduces` lint plus better in-lesson scaffolds; no "Before you start" card. Error-task part is built (fault/misconception lint); the `assumes`/`introduces` construct scan is still to do.
- Next: checkpoint task, return visit to lists and `if` in functions, console bridge, nicer input UI than `window.prompt`, then the Gradio and microStudio paths.

## Layout
- `content/<path>/<lesson>/lesson.md` plus code files with `# region: name` blocks. Frontmatter: title, summary, order, hook, teachers, author, language, modules, app, pacing.
- `tools/lesson-core.mjs` (pure parse/validate, `evalRules`, `parseTrace`) and `tools/lesson-view.mjs` (page HTML/CSS/JS) are shared with the create page. `tools/build-site.mjs`, `tools/render.mjs` (Playwright + ffmpeg clips), `tools/validate.mjs`.
- `playground/` (turtle), `playground-html/`, `playground-shared/snippets.js`, `snippets/*.json`, `modules/` (shared Python modules), `site/progress.js`, `create/`.
- Docs: `AUTHORING.md` (lesson format and check types), `README.md`, `ROADMAP.md` (done and proposed).
- Check types: reflect, question, code, number, bug, match, trace, parsons, predict. Error items also take `fault:` and `misconception:` (ids in `misconceptions.json`); validate warns on off-path errors (AUTHORING.md, Error tasks).
- Snippet ids are slugs of labels (for example `if-else`); lessons unlock them with `unlocks:`. Students see snippets as the **Reference** drawer over the canvas/preview: cards with Copy buttons (no click-to-insert), search, and a This lesson / All filter (This lesson = the lesson's unlocks via `slug` in `unlocks.json`, snippets the starter code uses via first-line patterns or a snippet's `matches`, lesson modules, My tools). Run closes it. My tools can be copied, edited and removed; student modules are global per browser (`wp-mymodules:turtle`); lesson modules offer "Open a copy to edit" once `my-module` is unlocked.
- Multi-file examples: `# file: name.py` lines split code into panels; bug answers then use `"name.py:7"`.

## Commands
- `npm run validate`, `npm run render` (clips), `npm run build` (site), `npm run all`. A full `all` takes about 2 minutes.
- Local browser tests: Chromium at `/opt/pw-browsers/chromium` with `--no-sandbox`, serve `dist/` with a small static http server. Scratch scripts go in `.render-tmp/` (gitignored; `render` deletes it, so `mkdir -p .render-tmp` first).
- The turtle playground animates; in tests set speed to 10 and click Finish, or wait for the status to leave "Running".

## Gotchas
- Quote YAML captions that contain colons.
- Display-only code regions (bug, compare, parsons) are not meant to run.
- Commit trailers: the `Co-Authored-By:` and `Claude-Session:` lines from the session reminder (they name the current model and session).
- Custom domain tutorials.learningwaypoints.com: DNS and the Pages setting are on Matthew's side.
