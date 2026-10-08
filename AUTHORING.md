# Authoring a lesson

A lesson is a folder: `content/<subject>/<collection>/<lesson>/` containing `lesson.md`, the code being taught, and
(optionally) `requirements.txt`. The build never calls an LLM. Everything below is the
complete format, so it also works as a brief to give an LLM that is writing a lesson.

## 1. Pick the teaching sequence (PRIMM)

Order steps so students **Predict** before they run, then **Run**, **Investigate**,
**Modify**, and **Make**. Use `info` for anything that does not fit.

| Stage | Student does | Clip? |
|---|---|---|
| `predict` | Reads code, writes a prediction | Optional, hidden behind a "Reveal" (`reveal: true`) |
| `run` | Runs it, compares with prediction | Yes: show the run |
| `investigate` | Links lines of code to behaviour (questions, not answers) | Yes: show the behaviour the questions are about |
| `modify` | Changes one thing at a time | Usually no |
| `make` | Builds something new from a spec | No |

Guidelines: one concept per step; one short clip per concept (10–25 s); write
Investigate prompts as questions; put a prediction question *before* any output is shown.

## 2. `lesson.md` layout

Frontmatter keys: `title`, `summary`, `author` (optional, shown as "By …"), `language`, `app`, `pacing`.

```markdown
---
title: Intro to Gradio
summary: One sentence for the lesson index.
language: python            # used for syntax colouring
app:                        # only needed if any step has a clip
  command: python app.py    # run from the lesson folder
  url: http://127.0.0.1:7860
  ready: Name               # a label to wait for before recording (or readySelector: "css")
pacing: { typeCps: 55 }     # optional overrides, see tools/lesson.mjs
---

Intro text (markdown).

## Predict: what will `greet` return?

```step
stage: predict
code: app.py#greet          # file, or file#region
app: true                   # show the running app from the first frame
reveal: true                # hide the clip behind "Reveal what happens"
caption: Shown at the start of the clip
clip:
  - type: { into: Name, text: Ada }
  - click: Submit
  - expect: { field: Greeting, value: "Hello, Ada." }
```

Student-facing markdown for this step goes here.
```

Every `## ` heading starts a step. The ```` ```step ```` block is the only machine-read part;
steps without a `clip` are plain text and need no app.

## 3. Showing code: regions

Mark the parts of a source file you want to show:

```python
# region: greet
def greet(name): ...
# endregion
```

`code: app.py#greet` shows only that block (marker lines are removed). `code: app.py` shows
the whole file. Because the page and the video read the real file, they cannot drift from it.

## 4. Clip actions

Each list item has exactly one verb.

| Verb | Example | Effect |
|---|---|---|
| `caption` | `- caption: Now tick the box` | Changes the bottom caption |
| `run` | `- run: true` | Reveals the app (when `app: false` at start) |
| `show` | `- show: app.py#launch` | Types that code into the code panel |
| `clear` | `- clear: app.py` | Empties the code panel |
| `type` | `- type: { into: Name, text: Ada }` | Moves pointer, clicks field, types |
| `click` | `- click: Submit` | Button, then label, link or text with that name |
| `press` | `- press: Enter` | Key press |
| `expect` | `- expect: { field: Greeting, value: "Hello" }` | **Fails the build** if the value is wrong (`contains:` also works) |
| `wait` | `- wait: 1000` | Pause in milliseconds |

Targets are found by visible label/name, not position. If something has no usable label,
use `{ selector: "#css" }` instead (works for `click`, `type`, `expect`).

Always end a clip with an `expect`. It turns every clip into a test: if the app changes so
the lesson is no longer true, CI fails instead of publishing a stale video.

## 5. Commands

```bash
npm run validate   # check lessons (fast, no browser)
npm run build      # site with clip placeholders (no browser needed)
npm run render     # record clips (needs ffmpeg + Chromium); skips unchanged clips
npm run all        # validate, render, build
```

`dist/` is the finished site.

## 6. Nested paths, the playground and other options

- **Path = URL.** `content/code/python/turtle-intro/` is served at `/code/python/turtle-intro/`.
  Add `index.md` (frontmatter `title`, `summary`) in a subject or collection folder to name its index page.
- **`try`** (any step): embeds the playground so students can edit and run code on the page.
  `try: { starter: file#region, height: 420, extent: 500, speed: 6 }`. If omitted, `starter`
  defaults to the step's `code`. Student edits autosave in their browser.
- **Recording the playground.** Frontmatter:
  ```yaml
  app:
    command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground" 8123
    url: http://127.0.0.1:8123/index.html
    ready: Python code
    layout: full        # app fills the stage; no separate code panel (default: split)
  ```
  A clip step also needs `app: true` to open the app. Useful targets: `type: {into: "Python code", text: "@file.py#region"}`
  (a leading `@` means "use this code reference"), `click: Run`, and
  `expect: { selector: "#status", contains: Finished }` / `{ selector: "#turtle-state", contains: "heading 0" }`.
- **`try.playground`**: `turtle` (default) or `html`. For HTML, record with `ready: HTML code`, `type: {into: "HTML code", text: "@page.html#region"}` and `expect: {selector: "#preview-text", contains: "..."}`; use `query: { code: "" }` to start from an empty editor. Region markers in HTML are `<!-- region: name -->` / `<!-- endregion -->`.
- **`query`** (clip step): extra URL parameters for the app, e.g. `query: { speed: 8, code: "@file.py#region" }`.
- **`pacing`** (frontmatter or a clip step): override `typeCps`, `keyDelayMs`, `preRollMs`, `postRollMs`, `cursorMs`, `afterActionMs`.
- `$REPO_ROOT` and `$OUT_DIR` are available to `app.command`.

## 7. Checks and unlockable snippets

Each playground has a collapsible **Snippets** palette (`snippets/turtle.json`, `snippets/html.json`). A snippet
is locked only if some step claims it with `unlocks`; unclaimed snippets are always available. A step earns its
unlocks with a `check`, shown under the step:

```yaml
check: { type: reflect, text: "I can explain what forward(100) does." }   # a tick box
unlocks: [forward, right]                                                   # snippet ids
```

```yaml
check:
  type: question
  q: "How many times does the loop repeat?"
  options: ["2 times", "4 times", "90 times"]
  answer: 1                         # number of the correct option, counting from 0
  explain: "Right: range(4) repeats 4 times."
unlocks: [for-loop]
```

- A snippet's id is its label in lowercase with dashes ("for loop" becomes `for-loop`); the generated reference
  pages (`/code/python/reference/`, `/code/html/reference/`) show every id. `npm run validate` rejects unknown ids.
- The playground a step's `unlocks` refer to is its `try.playground` (default `turtle`, or `html` for `language: html`).
- Progress is stored in the student's browser only. Question answers are in the page source, so this suits
  practice, not assessment. Teachers can open any lesson or playground with `?unlock=all` to show everything
  (remembered in that browser), and `?unlock=off` to switch it back.

## 8. Python modules (tools that become buttons)

A module is an ordinary Python file whose functions the playground turns into buttons, so students can use an
idea (say, "draw a square") before they can write the `def` themselves. Offer modules in the frontmatter:

```yaml
modules: [shapes]
```

- **Where the file lives:** `shapes.py` next to `lesson.md` (lesson-local, wins) or in the repo's `modules/` folder (shared by all lessons).
- **What becomes a button:** each top-level `def name(args):` that starts with a docstring. The first docstring line is the hint; default values become the placeholders: `square(‹100›)`.
- **What a click does:** inserts the call and adds `from shapes import square` to the code, if it is not there yet. "Show how it works" opens the module's source read-only.
- **Locking:** module functions are snippets with ids like `shapes.square`, so `unlocks: [shapes.square]` works as in section 7. `npm run validate` checks that the module and function exist.
- **Limits:** modules can use only what the playground's turtle supports. Detection is a simple pattern, so decorators and nested functions do not become buttons. Only the Python turtle playground supports modules.
- **On the create page:** "+ Add module" adds a file tab and the `modules:` line.
