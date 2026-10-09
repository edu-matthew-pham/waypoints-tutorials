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
| `type` | `- type: { into: Name, text: Ada }` | Moves pointer, clicks field, types (clears it first; `append: true` types at the end instead, and `after: "text"` types just after the first place that text appears, such as inside a `<style>` block, so captions can explain each part as it appears) |
| `click` | `- click: Submit` | Button, then label, link or text with that name; `{ selector: "#go", preview: true }` clicks inside the HTML preview |
| `press` | `- press: Enter` | Key press |
| `expect` | `- expect: { field: Greeting, value: "Hello" }` | **Fails the build** if the value is wrong (`contains:` also works; `preview: true` checks an element inside the HTML preview) |
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
- **Box model view** (HTML playground): `boxmodel: 1`, or `inspect: ".card"` to pin one element (students use the **Box model** button and point at a box). Like the browser's developer tools, it shades margin (orange), border (gold), padding (green) and content (blue) and shows the sizes, without changing the layout. Use it, not Boxes, whenever sizes or spacing matter: Boxes adds its own padding to show nesting. In a `picture:`, write `{ ref: page.html#x, inspect: ".card" }`.
- **HTML playground options:** `boxes: 1` turns on the **Boxes** view (a labelled outline around every element, coloured by depth, so nesting shows; students can toggle it with the Boxes button), and `zoom: 1.7` enlarges the code and preview for clips. A step's `try: { boxes: true }` opens its playground with Boxes on, and `try: { boxmodel: true }` with the Box model view on. In clips, type nested code over several indented lines: long lines scroll out of the narrow editor.
- **`pacing`** (frontmatter or a clip step): override `typeCps`, `keyDelayMs`, `preRollMs`, `postRollMs`, `cursorMs`, `afterActionMs`.
- `$REPO_ROOT` and `$OUT_DIR` are available to `app.command`.

## 7. Checks and unlockable snippets

Each playground has a collapsible **Reference** panel built from snippets (`snippets/turtle.json`, `snippets/html.json`).
Each snippet is a card with its code and a Copy button: students copy and paste it themselves, so deciding where
code goes stays their job. `‹text›` marks a value to change (highlighted on the card, removed when copied).
The panel is a drawer over the canvas (or preview), with search and a **This lesson / All** filter. This lesson
(the default inside a lesson) shows the snippets this lesson unlocks, the ones the step's starter code uses, the
lesson's modules and the student's own tools; free play opens on All. "Uses" is found from each snippet's first
line, with placeholders as wildcards; when that line is too generic, add `"matches": "regex"` to the snippet
(as for `def`, lists and the event functions). The full reference pages have the same search. A snippet
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
- **What the card shows:** two lines to copy, `from shapes import square` (at the top of `main.py`) and the call (where it should run). "Show how it works" opens the module's source; once `my-module` is unlocked it also offers **Open a copy to edit**, which makes an editable module of the student's own with the same name (theirs wins the import until they delete it).
- **Locking:** module functions are snippets with ids like `shapes.square`, so `unlocks: [shapes.square]` works as in section 7. `npm run validate` checks that the module and function exist.
- **Limits:** modules can use only what the playground's turtle supports. Detection is a simple pattern, so decorators and nested functions do not become buttons. Only the Python turtle playground supports modules.
- **On the create page:** "+ Add module" adds a file tab and the `modules:` line.

### Student-made buttons and modules (turtle playground)

Two features let students build their own tools, which is how abstraction is taught:

- **Save selection to My tools** (feature id `save-as-button`): students select code (or put the cursor in a `def`) and save it under **My tools**, where it can be copied, edited or removed. Tools are kept per browser and follow the student across lessons. Editing a tool changes future copies only; code already pasted stays as it was (the copied-code fault, used in Modules).
- **+ module** (feature id `my-module`): a tab for a file of their own functions. Functions with a docstring appear as cards under "My module: name" (the import line and the call to copy), with **Edit name.py** to open the tab. Modules are kept per browser and follow the student across lessons and steps.

Both are unlockable like snippets: put `save-as-button` or `my-module` in a step's `unlocks:` (the create page lists them under "Playground features"). Until a lesson unlocks them they stay locked, if some lesson claims them.

Suggested order: sequence, loop, variable, function (students write `def`), **save to My tools** (function as a tool), then **module** (several related functions in one file, shared rather than copied).

## 9. Hook, "Use it" step and teacher notes

Optional frontmatter, plain text:

```yaml
hook: "Loops are how a program draws 100 tiles without 100 lines of code."
```

- `hook`: one or two sentences shown at the top of the lesson: where the skill appears in real life. No project, just the "why".

### teacher.yml (teacher notes, solutions, "Explain it to me")

Teacher notes live in `teacher.yml` beside `lesson.md`. Write for any teacher, not a specialist: plain words, jargon explained on first use. `npm run validate` warns when a lesson in a course with units has none, or a code-checked task has no solution.

```yaml
summary: One sentence on what students do and see.
time: 50                       # minutes
timing: "Predict and Run 10 min · Investigate 15 min · Modify 15 min · Make 10 min"
goals: ["I can write a function with def and call it by name."]   # each starts "I can"
before: Try the Make task yourself; the surprise for students is ...
running: ["Predict and Run: ...", "Investigate: ...", "Make: ..."]  # what to do and say, in order
stuck:                         # what you will see → a question to ask → the fix
  - { see: "Nothing is drawn, and no error.", ask: "Where do you call the function?", fix: "Add square() below the def." }
stretch: ...
support: ...
leads: Where it leads next, and class ideas (Markdown).
exit: { q: "One question on the main idea", a: "Its answer" }
explain: |                     # optional: the student "Explain it to me" panel (Markdown)
  ...
solutions:                     # work item → code region
  step-4#t2: functions.py#sol-triangle
  step-5: functions.py#sol-make
```

- **`explainClip`** (lesson frontmatter; needs `app:`): a captioned clip shown first in the student's **Explain it to me** panel, written like a step's clip (`query`, `caption`, `clip:` actions); it records as `clips/explain.mp4`. Keep the `explain` text to two or three lines beside it.
- **Where it shows:** the lesson's collapsed **For teachers** panel (no solutions), the teacher guide page `/teach/<course>/<lesson>/`, and the generated slides and worksheet. `explain` is a collapsed panel after the lesson intro.
- **Solutions** are code regions (`sol-*`) in the lesson's `.py` files, keyed by work item: each Modify or Make step with a playground (`step-N`), or each of its tasks (`step-N#tM`). A solution must pass its task's code check (validate runs the rules). Multi-file solutions use `# file:` lines. Use only what students have met by then. An open Make task with no solution shows "any program that does what the step asks".
- **Unit primers:** `content/<course>/primers/<unit id>.md` (front matter `title`, for example "Functions in 5 minutes"), shown on the course guide. Sections: the idea in plain words; why programmers use it; an everyday picture and where it breaks; try it yourself (5 minutes); questions students ask; how it connects.
- **Generated at build time** (`tools/teach.mjs`, no AI) into `dist/teach/<course>/<lesson>/`: `deck.md` (Waypoints Prepare Marp: goal and "I can" slide, Predict and Investigate as Discussion and Check slides with click-to-reveal answers, Modify and Make as Activity slides with an "Open this step" link that opens the playground full screen via `?full=step-N`, an exit ticket; speaker notes from the notes above) and `worksheet.md` (Prepare Print: answers and solutions in `:::teacher-note`; Modify before Make is `:::typical`, later real-world steps `:::wider`). Each unit gets a printable cheat sheet (`cheatsheet-<unit>/`, A4, two columns, a picture per command) and `cheatsheet-<unit>.md` for Prepare, listing the snippets its lessons unlock or use; the course gets a whole-course sheet (`cheatsheet/`). A snippet gets a picture from `example` (a short complete program, run by `npm run render`) and an optional `shows` caption in `snippets/<kind>.json`. The same example and picture appear on the Reference page and behind the drawer card's **Example** button, and students get the same cheat sheets at `<course>/reference/print/`. Keep examples off the lessons' tasks: an example must not be the answer to a Modify, Make or stretch task (a star, a square spiral, a lesson's own shape function). Code too long for a slide shrinks; programs over 27 lines link to the tutorial instead. After changing deck layout, `npm run check-decks` renders every deck and reports slides that overflow.

- **Make vs a real-world Modify:** Make is an explicit task ("draw a house: a square with two lines on top"). A real-world step is a small, complete, pre-made example the student modifies (`stage: modify`, no check). Give it a heading that names the task ("Resize a room plan", "Extend a street"), not "In the real world": the real-world framing is implied by the example, the hook and the teacher notes. Larger projects belong to the teacher.
- Clips are optional. Use one for a first-run demo or to explain why; skip it where students are about to do the thing in the playground.

### Hints and expected results

- `picture: page.html#combos` (or `{ ref: page.html#combos, boxes: true }`) on an Investigate, Modify, Make or info step or task, in an HTML lesson: a picture of what that code makes, shown beside it (not hidden), drawn by the playground itself so Boxes looks as students see it. Not allowed on Predict or Run (it would give the answer away). `explainPicture:` (lesson frontmatter, same form) puts one in the Explain it to me panel, after the text.
- `expected: page.html#sol-x` (HTML steps and tasks with a playground) shows a picture of that region's page, no code, under a collapsed "Show the expected result". `npm run render` draws it (cached in `dist/_pictures/expected/`); until then the reveal is left out. Use a picture for static results and an output-only clip (below) for results that move.

### Hints and "expected result" clips

- `hint: "text"` or a list of up to 3 texts adds "Need a hint?" (then "Another hint") buttons under the playground. Write nudges, not answers: the first points at the idea, the second at what changes.
- `reveal: "Show the expected result"` hides a step's clip behind a button with that text, placed after the playground so students try first.
- An **output-only clip** shows the result without the code. Give the step `app: true` and a query that loads the solution and hides the editor:

```yaml
app: true
query: { code: "@square.py#triangle", view: output, autorun: 1 }
clip:
  - expect: { selector: "#status", contains: Finished }
```

  `view=output` shows only the drawing and `autorun=1` runs the program when the page loads.

### Ordering lessons

Add `order: 1` (a number) to a lesson's frontmatter. Index pages list lessons by `order`, show it as "1. Title", and put unnumbered lessons after the numbered ones, alphabetically. A folder's `index.md` can have `order` too (folders are sorted but not numbered).

### Code checks (mastery you can see)

A check can look at the student's code instead of asking them to tick a box:

```yaml
check:
  type: code
  text: "Write a function for a house, call it in a loop, and run it."
  rules: { defs: 1, calls: 1, loops: 1 }
```

The box ticks when the student runs a program that meets every rule. Rules (all optional, at least one needed): `defs` (functions defined), `params` (a function with this many parameters), `calls` (one of their functions called this many times), `loops` (for/while), `returns` (return statements), `imports` (list of module names). The check reads all the student's files, ignores comments, and needs a `try` playground on the step. It can unlock snippets like any check.

**In the HTML playground** a code check ticks as the student types (there is no Run): the playground reports its code on every preview update. Only two rules apply: `tags` (tag names that must be used, without brackets: `tags: [ul, li, a]`) and `contains` (fragments, spaces and letter case ignored: `contains: ["display: flex"]`). `<!-- -->` and `/* */` comments are ignored, and `#` is not a comment (colours, links). Validate rejects Python rules on an HTML step. The first report (page load) never ticks a check, so a starter that already passes does not tick itself; still write starters that do not pass. The Run step's compare box also works for HTML: it fills in as soon as the preview loads and updates when the prediction is locked.

### Lesson navigation, playground pages and My progress

- **Course bar:** every lesson page has a sticky bar with previous and next lessons (by `order`), a "3 of 6" menu with ticks for finished lessons, and links to the path, the playground and My progress. A "Next lesson" card ends each lesson. Nothing to configure: it follows `order`.
- **Playground pages:** `/code/python/playground/` and `/code/html/playground/` are free play. They remember the student's last lesson ("Continue lesson"), respect unlock progress, and have an "Unlock all snippets" toggle that applies only to free play.
- **My progress:** a dialog (course bar, playground page, path pages) comparing this browser's progress with `progress-manifest.json`, which the build writes. It is per browser and nothing is sent anywhere. `window.wpProgressSummary()` returns the same data for a future export.

## 10. Tasks (sub-pills) and more check types

### Tasks: several parts in one step

Put `###` headings inside a step and each becomes a **task**, shown as a sub-pill (only when there are two or more). Per-task settings go in a `tasks:` list in the step's YAML, in the same order:

````markdown
## Modify

```step
stage: modify
insight: "Change a working program one small step at a time."
try: { starter: "square.py#modify", height: 420 }
tasks:
  - hint: "Two numbers change."
    check: { type: reflect, text: "I drew a triangle." }
  - starter: "square.py#modify"      # optional: "Reset to this task's start"
    hint: ["First nudge.", "Second nudge."]
    check: { type: code, text: "Change the colour.", rules: { uses: [pencolor] } }
unlocks: [pencolor]                  # fires when every task is done
```

### Draw a triangle
...
### Change the pen
...
````

- One playground is shared by all the tasks, so code carries on from task to task. A task `starter` adds a "Reset to this task's start" button.
- A task can have its own `hint` (text or up to 3), `check`, `unlocks` and `insight`. Checks go on tasks, not on the step.
- Step-level `unlocks` fire when every task with a check is done; task-level `unlocks` fire when that task passes.
- Code checks only evaluate for the task that is open, so a later task cannot be ticked by code written for an earlier one.
- The sticky step pill shows progress, for example "Modify 2/3". Pills are ordered but never locked.
- Works on any stage (Investigate questions, Modify ladders, Make milestones).

### `insight:` (what the step is for)

A step or a task can have `insight: "..."`: one sentence on what students should come to see. It is shown to teachers only, in **For teachers › What each step is for**.

### Units, optional lessons and pathways

A course folder's `index.md` can group its lessons into units:

```yaml
units:
  - { id: functions, title: Functions, summary: "Name steps, give them inputs and outputs." }
challenge: challenge   # optional: the unit whose required lessons mark "Challenge complete"
```

Each lesson then names its unit (`unit: functions`) and can be `optional: true` (shown with an Optional tag and not needed to finish the course). `npm run validate` checks the unit ids. `code/index.md` lists the pathways shown on `/code/`: each has `courses`, either `{ path: code/python, stage: foundations }` for a built course or `{ title, summary, stage: extensions }` for one coming later.

### Check types

All except `code` are static and need no running code. Write the check under `check:` (a step with no tasks) or under a task.

| `type` | You write | Student does |
|---|---|---|
| `reflect` | `text` | ticks a box |
| `question` | `q`, `options`, `answer` (0-based), `explain` | picks one option |
| `number` | `q`, `answer`, optional `tolerance`, `explain` | types a number |
| `match` | `q`, `pairs: [[left, right], ...]`, `explain` | picks each right-hand item from a list (shuffled for them) |
| `trace` | `text`, `table`, `explain` | fills the blanks of a table |
| `bug` | `code: file#region`, `answer: 7` (or `[7, 19]`; `"main.py:7"` when the code has several files), `fault`, `misconception`, `text`, `explain` | clicks the wrong line (every listed line, when there are several) |
| `parsons` | `code: file#region` (the correct program), optional `extra: [spare lines]`, `text`, `explain` | orders scrambled lines |
| `predict` | `q`, optional `options: [...]` (else typed; `kind: number` for a number), optional `actual` | locks in a prediction before running (cannot change it) |
| `code` | `text`, `rules` (`defs`, `calls`, `loops`, `returns`, `params`, `imports`, `uses`, `contains: ["inside(x, y"]`) | runs a program that meets the rules |

A **trace table** is a pipe table; the first row is the header and cells in `[brackets]` are the blanks, with the answer inside:

```yaml
table: |
  | corner | turned so far |
  | 0 | 72 |
  | 1 | [144] |
  | 2 | [216] |
```

Choose the tool from the insight the step should produce: repetition cost, count and predict (`number`); how a loop or variable changes, `trace`; what each part controls, `match`; why code is wrong, `bug`; how code is structured, `parsons`. `predict` goes on a Predict step with no right or wrong. The locked answer is kept in the browser; the next Run step shows "You predicted X. It actually: Y." (Y is `actual`, or what the program printed). Good prompts: what is printed, how many repeats or sides, which colour. Code rules now also include `uses: [pencolor]` (a name that must appear in the code).

On the create page, the helper row adds a starter for each check type and for tasks.

### HTML lessons: pictures and links

Pictures students use live in `media/html/` (drawn for the course: `trophy.svg`, `medal.svg`, `book.svg`, `ball.svg`, `star.svg`, `music.svg`); lesson code names them directly, `<img src="trophy.svg" alt="...">`, as files next to a real page. Add new ones there (your own drawings, or images you may share). Links in the preview open in a new tab, so the student's page stays; use `https://example.com/...` addresses in lessons. Forms send nowhere: pressing a form's button (or Enter in a box) shows a short note saying nothing was sent.

### HTML lessons: tags in text

Write every tag in running text inside backticks: `` `<h1>` ``. A bare `<h1>` in Markdown (lesson text, task bodies, **hints**, and the Markdown fields of `teacher.yml`: `before`, `running`, `leads`, `explain`) becomes a real tag on the page, the teacher guide and the slides, and swallows the text after it (a bare `<style>` swallows the rest of the page, its script included, so no check works). `npm run validate` warns about any it finds. Plain-text fields (check questions, options, match pairs, explanations, `goals`, `stuck`, `stretch`, `support`, `exit`) can use bare tags: every page and generator escapes them. Code is highlighted as HTML (tags, attributes, values, comments) when the lesson's `language` or a fence is `html`.

### Several files in one example

A line `# file: name.py` (`<!-- file: name.html -->` in HTML) starts a new file. Display code, fenced code in a
step or task body, and `bug` checks then show one panel per file with its name, so two programs never read as one
file. A `bug` answer names the file: `answer: ["program_a.py:7", "program_b.py:7"]` (line numbers count within
each file).

### Error tasks (planted bugs and misconceptions)

A planted error is a teaching choice, so it is chosen on purpose. Before writing one, check:

- **On the path:** it is this lesson's misconception (or a spiral of an earlier one), never one from a later lesson and never an incidental slip.
- **Authentic:** an error students really make, not an invented typo.
- **One fault, named:** `fault: syntax | runtime | logic | design`. A `design` fault (the code runs, but is badly built, such as copied code) is not a one-line hunt: ask for every place it costs, or make it a refactor in Modify.
- **Symptom, not answer:** the stem says what happens ("stops with a TypeError", "every click counts"); it never states the corrected value.
- **Faithful:** the symptom matches real Python. If the playground differs, fix the playground.

Name the misconception with an id from `misconceptions.json` (`misconception: return-vs-print`); each id has a
`home` lesson. Questions and predictions that plant an error take the same two fields. `npm run validate` warns
(it never fails) when an item has no fault or misconception, uses an unknown id, targets a misconception whose home
is a later lesson, or sets a `design` fault as a one-line hunt. Add a new id to `misconceptions.json` with its home
and a one-line description.

## 11. Maths lessons

A lesson with `language: maths` (see `content/maths/algebra/`) gets maths notation, maths checks and the board.
How maths lessons are sequenced, and why, is in the Project note `maths-structure.md` (Predict, Try, Worked example,
Vary, Practise, Make).

- **Notation:** `$2x + 3 = 11$` inline and `$$...$$` on its own line, rendered with KaTeX at build time (no maths
  library on student pages). Works in lesson text, headings, check questions and options, and the teacher guide.
  Money stays text: the opening `$` must be followed by a non-space, the closing `$` preceded by one and not followed
  by a digit, so "$5 and $10" is not maths. Explanations (`explain:`) show maths as plain text.
- **Worked example:** a fenced block with the language `worked`, one step per line, maths then the reason after `::`.
  Students reveal it one step at a time; decks and worksheets get a numbered list.
  ````
  ```worked
  2x + 3 = 11 :: Start with the equation.
  2(4) + 3 :: Put 4 in place of $x$.
  ```
  ````
- **`answer` check** (typed maths): `answer: "13"` passes any equivalent form (`26/2`, `3(5) - 2`, `x = 13`);
  `equation: { x: 6 }` instead passes any equation that value makes true (for Make tasks). `feedback:` is a list of
  `[wrong answer, what to say]` pairs for planted misconceptions; validate rejects feedback that is the right answer.
  Equivalence is tested by evaluating at several values (`tools/math-expr.mjs`), so it handles algebra like `2(x + 1)`.
- **`board` check:** ticks when the board reports what the check asks for, and never on the starting position. It
  needs `try: { playground: board, starter: file#region }` on the step (`maths` is the old name and still works).
  - `when:` a condition on the board's named values (any board with sliders or points): `"m = -1 and c = 2"`,
    `"c > 0"`, `"P on y = mx + c"` (the point's coordinates make the equation true), `"x(A) = 3"`, `"y(B) > y(A)"`.
    Comparisons are `=`, `<`, `>`, `<=`, `>=`; join parts with `and`. Validate checks that it can be read.
  - `expect:` fields of the balance or machine report: `balanced`, `solved` or `x`. With both, both must hold.
- **Practise stage:** `stage: practise`, between Modify and Make: a few `answer` checks with feedback.
- **The board** (`playground-board/`, JSXGraph): interactive diagrams for any subject. `core.js` reads the setup and
  reports to the lesson; each widget is a file in `widgets/`. The starter is a region in a `.yml` file, one line each:
  `key: value` (a setting) or `kind name: value` (a named object). `# ...` starts a comment.
  - `widget: balance` with `left:` and `right:` (one variable). `mode: try` (default): a slider for x; the scale tips
    and shows each side worked out. `mode: solve`: take blocks or bags of x from both sides, or share both sides into
    equal groups; the scale stays level, the steps are written as algebra, and the answer is checked in the first
    equation. Both sides must be whole-number bags and blocks (such as `2x + 3`).
  - `widget: machine` with `ops: × 2, + 3` and `output: 11`: students undo the steps from the output, last step
    first; a wrong undo gets a nudge, not the answer.
  - `widget: graph`: axes, with
    - `x: -1, 10` and `y: -1, 20` (ranges; default -10 to 10), `grid: 1` (spacing, or `off`), `snap: 0.5` (where
      dragged points land; default the grid spacing);
    - `slider m: 0, 5, 2` (min, max, start, optional step; one lower-case letter, not x or y): shown with − and +
      buttons, and usable in plots and points;
    - `plot: y = mx + c` (up to 4): drawn, and listed under the graph with the slider values put in (`y = 2x + 1`);
    - `point A: 2, 5` (fixed; coordinates may use sliders, as in `point B: 0, c`) and `point P: 1, 3, drag`
      (students drag it; it snaps); one capital letter each;
    - `segment: A, B` or `line: A, B`; `table: 0, 1, 2, 3` (a table of values of each plot at these x values).
  - Each task's `starter` loads its own board when the task is opened. Work is saved in the browser per step;
    `?fresh=1` on the board's address starts from the setup and saves nothing (slides on a shared projector).
  - The board's old address, `_playground-maths/`, forwards to it with the same parameters, so embeds keep working
    (the embedding contract is in the project notes).
- **Maths cards** (`snippets/maths.json`, for the course named by its `course:`): the words and methods of the course,
  one card each, with `label`, `code` (TeX, shown typeset), `hint` (may use `$...$`), `unit` (the unit whose cheat sheet
  lists it) and optionally `board` (a board setup, drawn as the card's picture by `npm run render`) with `shows` (its
  caption). They make the course's Reference page (`<course>/reference/`, with search), the student print sheets, and
  the teacher cheat sheets (A4 and Markdown for Prepare). Validate checks the maths parses and the unit exists.
- **Maths pathways:** `content/maths/index.md` lists pathways like `code/index.md`, with planned courses as "Coming later".

## 12. Science lessons

A lesson with `language: science` (see `content/science/chemistry/`) is a short concept tutorial for introducing or
revising one idea, beside practical work, never instead of it. One tutorial per hinge node of the XY Model node files
(waypoints-kit `data/science/`); nodes whose response mode is `integration` are left to class tasks.

- **5E on the existing stages.** Science pages label the stages in 5E words, so predict-and-compare, decks and
  worksheets work unchanged: `predict` = **Engage** (one `predict` check, with `actual:`), `run` = **Explore** (a board;
  the compare box shows the prediction), `investigate` = **Explain**, `practise` = **Practise** (when the node's response
  mode is consolidation), `modify` = **Elaborate**, `info` = **Evaluate** (a `reflect` check and a revision summary).
- **Width tiers** (any lesson, not only science): `tier: typical` or `tier: wider` on a step marks extra contexts beyond
  the minimum path. The page shows a Minimum / Typical / Wider control; `?width=` in the link sets the floor (a
  teacher's choice), students can widen but not narrow, and the default is typical. Tiered steps' checks are not
  needed to finish the lesson and are left out of course progress. Worksheets wrap them in `:::typical` / `:::wider`.
  Wider means more contexts, never harder content.
- **`sort` check** (any lesson): `options:` are groups, `items:` are `[text, group]` or `[text, group, why]`; a group can
  be used many times (unlike `match`), and extra groups act as distractors. The why shows once an item is right.
- **`question` feedback** (any lesson): `feedback:` is one entry per option (text, or `null`), shown when that wrong
  option is chosen. Aim each at the misconception behind the option.
- **`board` check:** `expect: { done: true }` ticks when the science board's widget finishes its task.
- **The science board** (`playground-science/`: `engine.js` is the particle engine, `main.js` the widgets; JSXGraph).
  The starter is a `key: value` region in `boards.yml`. Widgets: `zoom` (`samples:` from ice, water, steam,
  distilled, salt, sand, air, copper), `identify` (`need:`), `build`, `syringe`, `diffusion`, `jar`, `heat`, `dissolve`,
  `bench`, `filter`, `evaporate`, `distil`, `chroma`, `box` (a model to look at), `windows` (`set: floatsink | six |
  ice | abc`, static diagrams) and `quiz` (`need:`, `options: Label=value; …`, repeated `item: text | value | why`).
  Each task's `starter` loads its own board. Nothing on the board is saved.
- **Science pathways:** `content/science/index.md` lists Chemistry (built), Biology, Physics and Earth and space.
