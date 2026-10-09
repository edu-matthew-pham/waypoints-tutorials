# Building a course

How a course is designed and built here, learned from Python Foundations with Turtle. `AUTHORING.md` is the file format reference; this is the method. Use it for every new course (web and MakeCode next).

## 1. Shape: pathway › course › unit › lesson › step › task

- **Pathway** (Python, Web, MakeCode): listed in `content/code/index.md`, courses in order, each `stage: foundations | extensions`. Planned courses go in early as "Coming later", so the whole path is visible.
- **Course**: a folder with `index.md` (title, summary, `order`, `units`, optional `challenge`).
- **Unit**: 2 to 4 lessons that share one idea. Never call it a module (Python meaning).
- **Lesson**: one concept, PRIMM steps. **Step**: one stage. **Task**: a sub-pill inside a step, only when there are several.

Typical fit (year levels) is a teacher note, never a label or a gate.

## 2. Design order

Do these in order, and write each down before building the next.

1. **Concept spine.** Map the course onto the shared spine (sequence, loops, variables, decisions, lists, functions, events, building a widget). Reuse the order unless the new language has a real reason to differ. Students who meet a second pathway should recognise everything.
2. **Units and lessons.** One concept per lesson; group into units by dependency. Mark what each lesson *introduces*.
3. **One insight per step.** Write the `insight:` first (what the student should realise), then choose the check that produces it (see `AUTHORING.md` › Check types: count and predict → number, how something changes → trace, what each part does → match, why it is wrong → bug, structure → parsons).
4. **Hidden assumptions.** For every construct on screen: the goal of this lesson, already taught (cite where), a recipe ("copy this line for now"), or a prerequisite to check. Fix gaps in the lesson that should have taught it, not in the one that trips over it (example: `global` was used in Events and Build a button but explained nowhere; the challenge exposed it).
5. **Error tasks.** Plant this lesson's misconception, authentic, one named fault, symptom not answer, faithful to the real language (`AUTHORING.md` › Error tasks; ids in `misconceptions.json` with a home lesson).
6. **Final challenge** (section 4).
7. **Teacher notes** (`teacher.yml`, AUTHORING.md section 9) in every lesson, written for a non-specialist: the same sections every time, a see → ask → fix list for when students get stuck, and a tested solution for every task. Write the unit primer (`primers/<unit>.md`) with the unit. Slides, worksheets and cheat sheets are generated from these, so check them in Prepare once.

## 3. Lesson recipe

- **Predict** on code that runs (lock in a prediction; Run shows it beside the result). **Run** with a reflect tick. **Investigate** with tools that follow the insight. **Modify** a small complete example whose heading names the task. **Make** is an explicit task with fading support (starter, then outline, then goals only).
- **Real world** is a small complete thing students change; big projects are the teacher's.
- **Build it yourself, then meet the real tool**: hand-built buttons before Gradio, a hand-built loop before a game engine. End with a "Where this leads" line.
- **Clips** only where they earn it: a hook, an expected result shown without code, or explaining why.
- **Code checks** (`type: code`) use `contains` for the exact idea ("the hit test is in the click handler"), not just names: `uses` passes on an import line alone, and `calls` passes on any function called often.
- **Unlocks**: each lesson unlocks the snippets it teaches; the Reference drawer's "This lesson" also picks up snippets its starter code uses. Add a snippet `matches` regex when its first line is too generic.

## 4. Final challenge pattern

- **Low floor, high ceiling.** A core everyone finishes, built in milestones (most code → outline → goals only), then a shared enrichment lesson, then optional lessons that go deeper.
- **Blend both directions in the core and the shared lesson**: state, events, a hit test, a timer loop, lists (shared); a status bar and buttons (user interface); lives, rewards, costs (game rules). The Investigate match "UI or game rule?" names the split.
- **Optional lessons point to the extensions**: a UI lesson (towards Gradio and the DOM) and a games lesson (towards Arcade and microStudio). `optional: true` keeps them out of completion; the course's `challenge:` unit marks "Challenge complete" when its required lessons are done.
- **Prediction as a mechanic** where possible (the turtle on a path), so PRIMM carries into play.
- **No new knowledge in the core.** Anything new is one line, named in the text ("Behind the code"), or moved to an option (random spots).

## 5. Testing (every batch)

1. `npm run validate`: errors fail; warnings (error-task lint, units) are read, not ignored.
2. **Run every code region** headlessly in its playground, starters included: no errors, and the starter does what the step text says. For interactive programs, **play them**: the harness clicks the target, presses Start, waits for game over and restarts (see `.render-tmp` scripts from the challenge batch; they are scratch, so rewrite as needed).
3. **Course and pathway pages** with a fresh browser, part progress and full progress, at desktop and phone width: Continue card, unit counts, open row, badge, `/code/` counts (required lessons only).
4. **Screenshots** of anything visual, read before pushing.
5. Re-render clips for lessons whose clip steps or playgrounds changed; CI re-renders on deploy anyway.

## 6. Runtime facts that shape lessons

**Turtle playground:** one turtle only; the turtle sprite's colour is fixed (mark it with a `dot`); `speed(0)` for instant drawing; clicks wait until an animated move ends, so moving targets step on a 50 ms timer; `write` needs positional arguments (`write(v, False, "left", ("Arial", 20, "normal"))`); `str()` and string joining are not taught yet, so write labels and values separately.

**HTML playground:** live preview, no Run button (a paste closes the Reference drawer); edits autosave per step.

## 7. Before the web units

- **HTML code checks.** `type: code` only works in the turtle playground today. The HTML playground needs to report its code to the lesson page (the same message the turtle playground sends after Run, but on each change), so `contains` checks work for HTML and CSS (for example `contains: ["<ul>", "<li>"]`).
- **Web misconceptions** in `misconceptions.json` with HTML lessons as homes (unclosed tag, nesting order, a CSS selector that does not match, a property without a unit).
- **Spine mapping for HTML & CSS foundations** (to agree first): structure and text, lists and links, images and boxes, CSS rules and selectors, layout, then a small challenge page that blends both directions (a page with a working menu or a quiz card, shared core, optional "make it interactive" leading to p5.js and the DOM).
- **Reference**: HTML snippets already exist (`snippets/html.json`); each lesson's `unlocks` should match what it teaches.
