# Proposed changes (not built yet)

Batched for the next "go". Newest decisions first.

## Done in the last batch

Real-world steps named for the task; Functions III lesson (`turtle-returns`) with a faded Make; code checks (`type: code`) on the function lessons; module pain demo; course bar and next-lesson card; playground pages with an unlock-all toggle (free play only); My progress dialog and `progress-manifest.json`.

## Done: Investigate tools and tasks

Tasks in any step (sub-pills, shared playground, "Modify 2/3" on the step pill); check types number, match, trace, bug, parsons; `insight:` for teachers; `uses` code rule; create page templates; Investigate and Modify steps in the six turtle lessons rewritten around stated insights.

## Done: Predict, Decisions, Lists

Predict lock-in (`type: predict`, compare on the Run step, playground reports output); Decisions lesson (3) and Lists lesson (4) before functions; orders now 1 intro, 2 variables, 3 decisions, 4 lists, 5 functions, 6 parameters, 7 returns, 8 modules; `list` and `for each item` snippets. Still to do: a return visit to lists inside functions, and `if` inside a function that decides.

## Done: Events and Build a button

Turtle events and input: `onscreenclick`, `onkey`, `ontimer`, `listen`, `mainloop`/`done` (waits for events until Stop; ends at once if nothing is registered), `textinput`, `numinput`; code checks and the compare box also accept a Stopped run. Lessons 9 Events (`turtle-events`) and 10 Build a button (`turtle-buttons`, with a `modules/ui.py` toolkit). Still to do: checkpoint task, return visit to lists/if in functions, console bridge, a nicer input UI than `window.prompt`.

## Done: Error-task audit, Reference panel

Error tasks are chosen by stated checks (on the path, authentic, one named fault, symptom not answer, faithful to Python), documented in AUTHORING.md "Error tasks". Each planted error declares `fault:` (syntax, runtime, logic, design) and `misconception:` (an id in `misconceptions.json` with a home lesson); `npm run validate` warns on a missing field, an unknown id, a misconception from a later lesson, or a design fault set as a one-line hunt. Multi-file examples: `# file: name.py` lines split display code, fenced code and bug checks into named panels; bug answers use `"name.py:7"` and need every listed line. Lessons: Modules asks for every line the copied `wall` costs, adds a shadowing item (a local `def` replacing an import), and the Modify starter's wall turns 80 so it is fixed once in the module as `360 / 4`; Functions adds "same name twice" (a second `def` silently replaces the first); Returns now matches real Python (the bridge raises `TypeError` for non-number moves, such as `forward(None)`); Buttons plants `or` for `and` (the hit-test misconception; screen-y-down was dropped because students only know turtle's y-up). The playground's Snippets became **Reference**: cards with the code, a hint and Copy (students paste it themselves; placeholders highlighted, stripped on copy); module cards give the import line and the call separately. My tools can be copied, edited (future copies only) and removed. Student modules follow the student across lessons and steps (`wp-mymodules:turtle`; per-step ones migrate). Lesson modules offer "Open a copy to edit" once `my-module` is unlocked. Reference is a drawer over the canvas (full screen on narrow widths; Run closes it) with search and a This lesson / All filter (This lesson by default in lessons, All in free play); the full reference pages have the same search. In HTML a paste closes the drawer (the preview is live). Each playground can go full screen and back. Playground files and iframes are version-stamped, so a deploy is never mixed with a cached copy. Course pages lead with progress (Grok-style): Continue card, compact lesson rows with one segment per check linking to its step, Playground and Reference as chips, footer with unlocks and My tools. A site navbar replaces the My progress dialog (My progress is the course page); pages outside a lesson offer "Back to <lesson> › <step>" for the tab. The Python course is now "Python Foundations with Turtle", listed first. Still to do from the audit: the `assumes`/`introduces` construct scan.

## Done: Pathways page, units, final challenge

`/code/` shows the three pathways (Python, Web, MakeCode), foundations then extensions, with planned courses as "Coming later" and each built course's progress. Course pages group lessons into units with collapsed rows (steps and a Start/Continue button inside) and a "Challenge complete" badge. Final challenge unit: Catch the turtle (path, catch, blink, timer and Start, in three milestones with fading support; random spots as an option), Power-ups (lives, status bar with `label()`, gold turtle, Slow upgrade, then your own power-up), and two optional lessons: Control panel (buttons from lists, difficulty row; leads to Gradio and the DOM) and Game levels (screens with a state variable, levels, a turtle that walks in steps; leads to Arcade and microStudio). New `contains` code rule. Events now explains `global`.

## Done: teacher layer and classroom resources

The tutorials stay light on explanation for students; non-specialist teachers get the rest (like Grok and CodeHS). Every lesson has `teacher.yml`: plain-language notes in the same sections (in one sentence, time, before class, running the lesson, when students get stuck as see → ask → fix, stretch and support, where it leads), "I can" goals, an exit ticket and an optional student **Explain it to me** panel. Every Modify and Make task has a solution as a code region that passes its own code check (57 solutions, all run in the playground). Five unit primers ("Functions in 5 minutes"). Generated for Waypoints Prepare at build time: a Marp deck per lesson (goal slide, Discussion and Check slides with click-to-reveal answers, Activity slides linking to the step's playground full screen via `?full=step-N`, exit ticket, speaker notes), a Print worksheet per lesson (answers and solutions in teacher notes; Modify `:::typical`, later real-world steps `:::wider`) and a cheat sheet per unit. Teacher pages at `/teach/`, linked from the course footer only. Cheat sheets are printable A4 pages (two columns, a picture of what each command draws, rendered from the snippet's `example`), per unit and for the whole course, plus Markdown for Prepare. Students get the same sheets from the Reference page (`reference/print/`), the Reference page shows each command's example and picture, and drawer cards have an Example button; examples were checked against every task and swapped where they gave an answer away (star, square spiral, square function). QR codes were dropped (no phones in class). Still to do: confirm Prepare's load-by-URL parameter so "Copy address for Prepare" can become one-click "Open in Prepare"; later, Kit's coach mode as an optional "practise with AI" prompt.

## Done: navbar and pathway pages

The navbar now plans for more subjects: **Learning Waypoints ↗** (the main site), **Tutorials** (this site's home), then **Code ▾** with the three pathways (Python, Web, MakeCode); Playground, Reference and My progress stay on the right inside a course. Courses left the navbar and sit under their pathway. Each pathway has a page (`/code/paths/python/`, `/web/`, `/makecode/`) with an intro, its courses in order with progress, and "Coming later" placeholders; MakeCode is a placeholder page until its first course. Course URLs did not move, so student progress is kept. Maths or Science would be new menus beside Code once they have content.

## HTML & CSS foundations: sequence (decided 9 Oct 2026, not built)

**Scope rule.** HTML is a few ideas plus a large vocabulary. Keep what is (1) a core idea every tag or property builds on, (2) needed by the DOM extension (the tree, classes, selectors), or (3) used on the challenge page. Everything else is a Reference card. Core ideas: tags label meaning; nesting makes a tree; attributes add information; a CSS rule is a selector plus declarations (a rule that matches nothing fails silently); every element is a box; one layout tool (Flexbox). Dropped to Reference: most other tags, Grid, positioning, units beyond px and %, colour formats beyond names and hex, specificity, media queries.

**PRIMM as in Python.** Predict shows display code only (predict check); the Run step has the playground, whose live preview is the reveal and fills the compare box. HTML code checks use `tags` and `contains` (built on the local branch `html-playground-checks`).

**Unit 1: Structure (a page is a tree)**
1. Tags and nesting: `h1`, `p`, `strong`/`em`; tags label meaning, close in reverse order. Error: overlapping tags. `<!DOCTYPE>` and `<head>` as a recipe. Reworked from `first-page` (its list moves to lesson 2, its CSS step to lesson 5).
2. Lists and links: `ul`, `ol`, `li`, `a href`; introduces attributes. Error: an `li` outside a list. Real world: the club notice page from `first-page`. Make: a top-5 list with links.
3. Images: `img src alt` (no closing tag), why `alt` matters. Make: a picture with a caption.
4. Tables: `table` › `tr` › `td`/`th`, for data only. Error: a row with a missing cell. Make: a results table or timetable.

**Unit 2: Style (CSS is rules)**

5. Rules and selectors: `<style>`, element selectors, `class`, `color`, `font-size`. Error: a class typo, so the rule matches nothing.
6. Boxes: padding, border, margin, width; block versus inline. Error: `padding: 10` with no unit.

**Unit 3: Components and layout**

7. Flexbox: a navbar from a `ul`, then a gallery with `flex-wrap` (Grid named as the tool when rows must line up). Error: `display: flex` on the items instead of the container.
8. Page sections and components: semantic tags (`header`, `nav`, `main`, `footer`) name the parts of a page; a hero and cards fill them, built from tags, classes, boxes and Flexbox. Each component built once becomes a Reference card (like My tools), unlocked by the lesson that builds it, so its example never answers an open task (students now see examples); real-world steps are finished components to Modify.
9. Forms: `label`, `input`, `select`, `button`, styled as a card. Insight: submitting does nothing; the form is the front and code behind it does the work (leads to the DOM and to Gradio, where an app is a form plus a function). Error: a `label` whose `for` does not match its input's `id`.

**Challenge unit**

10. Club page: assembled from components (sections, navbar, hero, cards, results table, sign-up form) in milestones with fading support; no new knowledge.
11. Optional, Make it react (towards the DOM course): about 5 lines of JavaScript as a recipe: a button that changes text, then the form shows "Hi, Ada!" on the page. Students still Predict, match each line to what it does, Modify (message, target, colour) and Make; a collapsed "Behind the code" note names the parts, and the DOM course explains them properly. Bridges from turtle events (`onscreenclick` → `addEventListener`). Output goes on the page (no console). Check with `contains: ["addEventListener"]`.
12. Optional, Page layout with Grid (visual direction).

The core stays JavaScript-free; JavaScript proper (variables, decisions, functions, events) is the DOM extension.

**Settled 9 Oct:** semantic tags are a real step (lesson 8); images and tables are separate lessons; hero and cards stay their own lesson (Flexbox already has two tasks); `first-page` is reworked into lesson 1. Nine core lessons plus the challenge, about the Python course's size. Groundwork built 9 Oct: HTML code checks, CSS `/* region */` markers, HTML pictures for the Reference and cheat sheets (23 snippet examples), units in `code/html/index.md` (no `challenge:` until the challenge lesson exists, so no empty badge) and eight web misconceptions. Lesson 1 (Tags and nesting) built 9 Oct, reworked from `first-page` (slug kept): Predict on line breaks (most students guess 4 lines; the page shows 2), Investigate tasks on meaning, nesting order, a broken-nesting bug that looks fine, and a missing closing tag (no error message), Modify in three tasks, Make a school notice, real-world step "Tidy up a newsletter article" with the standard page wrapper as a recipe; teacher notes and the Structure primer. Fixed on the way: HTML syntax highlighting, tags in slides and worksheets shown as text, a missing space before "Got it.". Next: lesson 2 (Lists and links), after review.

## Proposed: turtle companion (discussed, not decided)

A small turtle in the corner of course and lesson pages with a CSS idle animation (blink, bob; none with reduced motion; can be hidden). It earns one item per unit finished: a colourful pen (Drawing and repeating), a signpost and a backpack (Choices and collections), a jigsaw piece (Functions), a remote (Interaction), a crown (Final challenge). Clicking it shows its items and where each was earned; finishing a unit plays a short celebration. Per browser, built from existing progress data.

## Pathways (decided direction, 9 Oct 2026)

Three pathways offered as options, not gates. Each shares one concept spine (sequence, loops, variables, decisions, lists, functions, events, building a widget) and the "build it yourself, then meet the real tool" approach. Typical fit is a teacher note only (For teachers panel and here), never a label students see.

**Foundations (build now; typically Years 6–8)**
- **MakeCode** (typically 6–8): micro:bit (sensors, LEDs, radio, then Kitronik MOVE Motor in simulation, then the real robot) or Arcade (games: sprites, collisions, game loop). Blocks first, then the same programs in MakeCode Python or JavaScript. First step: check whether the MakeCode editor embeds in our lesson pages or is linked out.
- **Python Foundations with Turtle** (typically 7–8): the 10 built lessons, then the checkpoint task, which ends foundations.
- **HTML & CSS basics** (typically 7–8): grow the one lesson into a short sequence (about 4–5 lessons).

**Extensions (plan only, build later; typically Year 9+)**
- **Console bridge** (`input()`, `print()`, a text menu; now the last foundations course, see Decided below) and **Deeper console Python** (strings, dictionaries, files): a console inside our own playgrounds. A real terminal is out of scope; teachers can extend if they want.
- **Gradio → ML.** Embedded Spaces run the teacher's fixed code: students can use the app but not edit it. Hugging Face accounts need age 13+ (their terms, no parental-consent route) and the platform has no school features, so teacher-hosted Spaces are the baseline and student Spaces are optional for older students with school approval. For in-lesson Modify and Make, the option is our own in-browser Gradio-style playground: Pyodide plus a small `gr.Interface` subset (text, number, slider, image, outputs, Submit), so the same code later runs unchanged in real Gradio. In-browser ML: small models with scikit-learn/numpy (train on a CSV); large pretrained models only through teacher Spaces.
- **microStudio** (games in text code): a full browser IDE, so students do edit code. Open source (MIT) and self-hostable, so a school-run copy avoids public accounts. Still to check: account and age terms on the public site, Python completeness, iframe embedding.
- **p5.js → DOM with the browser console:** JavaScript on a canvas mirroring turtle (variables, decisions, arrays, functions, `mousePressed`, the draw loop), then JavaScript driving HTML (`querySelector`, `addEventListener`). The p5 playground in `edu-matthew-pham/codeswitch` (`src/lib/p5-playground`, `src/routes/p5_playground`) is the starting point; not yet reviewed.
- **Advanced MOVE Motor:** sensors and autonomous behaviour.

**MakeCode simulation beyond the micro:bit.** MakeCode is open source (`microsoft/pxt`, `microsoft/pxt-microbit`, MIT). Extensions can ship a simulator extension (a static web app in an iframe), but these need MakeCode team approval and a second review. Microsoft's `microbit-robot` (MIT) already simulates two-wheeled robots with line sensors and obstacle detection, but Kitronik MOVE Motor is not on its list. Options, least work first: (1) contribute MOVE Motor support to `microbit-robot`; (2) our own simulator extension (needs approval); (3) bridge MakeCode code into the Godot robotics simulator.

**Overlap settled:** Arcade is games with blocks (MakeCode pathway); microStudio is games in text code (Python extension).

**Next builds, in order:** the lists/`if` revisit (the final challenge is built); HTML & CSS sequence; MakeCode (starting with the embedding check).

**Decided (9 Oct):** the console bridge (one or two lessons: `input()`, `print()`, a text menu) is the last Python foundations course and comes before every extension. Deeper console Python (strings, dictionaries, files, errors) is its own extension. Machine learning with Gradio comes after both Deeper console Python and the Gradio course. Pathway cards show this as "After: …" (`after:` in `code/index.md`, by course path or planned `id`).

**Open:** whether turtle lessons 9–10 (events, build a button) suit foundations or extensions.

This supersedes the earlier "Series shape", "Console bridge and fork" and "Games path" entries below where they differ (they stay for their reasoning).

## Proposed (discussed, not decided)

- **Revisit if/else** later in a new context (a function that decides, `if` over a list, `if` inside a Gradio function), the same spiral as functions.
- **Python path beyond turtle.** Turtle covers sequence, loops, variables, selection, functions, parameters, returns and modules. Add **lists** (`for c in colours`, a second visit to `if`) and **strings** (`write()`, joining text) while still in turtle, then move to Gradio, where a function with a return value and an `if` becomes a clickable app and `import gradio as gr` is a module someone else wrote. Turtle stays as the foundations sandbox.

- **UI-based Python without a server: build the widgets (the iceberg idea).** Gradio Lite is no longer maintained (HF forum, Oct 2025); tkinter has no browser support that I found (not conclusive). Turtle has no widgets, which is the point: digital technologies is mostly the 90% under the visible UI, so students build buttons from scratch. Plan: (1) add events and input to the turtle playground (`onclick`, `onkey`, `ontimer`, text and number prompts); (2) lesson sequence: hit test (is the click inside this rectangle? uses Decisions), `draw_button(x, y, w, h, label)` (functions and parameters revisited), a click that changes a variable (counter, colour), many buttons via a list and a loop (Lists), package it as `ui.py` (Modules gets a real purpose), then reveal that Gradio's `Button` is this same code with the browser drawing and hit-testing; Make task: control panel, quiz or game menu. No in-house HTML widget module needed. (3) Keep Gradio as the real-world and ML endpoint, run on Hugging Face Spaces or locally. PyScript/Pyodide with the page's HTML is a heavier option that would tie the Python and HTML paths together.

- **Series shape: core, then two paths.** Core is turtle (variables, decisions, lists, functions, parameters, returns, modules, then events and hand-built widgets), ending in a low-stakes checkpoint task (for example a three-button control panel) measured by the existing checks. After the checkpoint students choose a path: Gradio (data and ML apps, a framework doing the UI; suits the ML unit) or microStudio (games and interactive apps with sprites, sound and publishing; browser-based, supports microScript, JavaScript, Python and Lua per its wiki; no widget set, so it reuses the build-it-yourself idea). Reveal step before the paths: the same button-and-counter app as the student's `ui.py` and as Gradio, compared with the Investigate tools. Turtle is a checkpoint, not authentic assessment; real assessment is a product with a user (a Gradio app or published game), written and marked by the teacher, with suggested tasks per path in the For teachers panel. To check before committing: whether microStudio's Python is complete enough, and whether it embeds in an iframe. Keep tracking out of scope; the checkpoint is only a milestone in the student's own progress (could feed the parked certificate).

- **Console bridge and fork.** After the turtle core and checkpoint, a short console bridge (one or two lessons: `input()`, `print()`, a text menu app; needs text input in the playground, shared with the planned turtle prompts) shows the same logic without graphics and makes a function something a framework can wrap. Then a fork: (a) deepen Python in the console (strings, dictionaries, files, error handling, later classes), with real terminal skills (`argv`, scripts, pipes) as an optional local-install extension; or (b) build real apps with Gradio (data and ML) or microStudio (games). Most students will not use a terminal day to day, so the console is a practice space, not the destination. Gradio is preferred over Streamlit (reruns the whole script, which hides the event idea) and Flask (a web server needing HTML, routes and templates; a later follow-on from the HTML path). Open: whether "deepen Python" needs its own sequence or folds into the core.

- **Games path: microStudio over Pygame.** microStudio is a real engine (sprite, map and sound editors, game loop, input, one-click web publishing) and is external, so it needs almost no build work: link out or iframe if it allows, lessons guided by instructions plus reflect or question steps, no automated code checks. Pygame is a library, not an engine, and would need a new in-browser runtime (Pyodide with pygame-ce, or pygbag), an async main loop, a heavy first load, and new message, check and clip work; park it as an optional "real Python games" extension, only after a small prototype proves it. Pygame's strength is transferable standard Python; the build-it-yourself learning (events, hit tests, loops) is already covered by the turtle core.

- **Hidden assumptions audit (curse of knowledge).** Principle: for every construct on screen, decide whether it is (1) the goal of this lesson (teach it, scaffold without giving the answer), (2) already taught (cite where, spiral back), (3) incidental (label it openly as a recipe: "copy this line for now"), or (4) a prerequisite we cannot assume (check it first). Examples to fix: `for i in range(4)` needs a trace (`i` takes 0, 1, 2, 3); why the turtle finishes facing right (a closed shape turns 360 degrees in total; predict then notice); unnamed assumptions: centre is (0, 0), heading 0 is right, `right` turns clockwise, indentation groups lines, the colon, `from turtle import *`, pen starts down. Scaffolds that do not give the answer: question prompts before explanations (commit, then compare), tiered hints (built), a collapsible "Behind the code" note, trace tables (built), and, only if later needed, an optional untracked "Before you start" card. Make it systematic: `assumes:` and `introduces:` concept ids in lesson frontmatter, plus a validator that scans code regions for constructs (`for ... in range`, `def`, `%`, `[ ]`, `global`, `elif`, imports) and warns when a lesson uses one no earlier lesson introduces or marks as a recipe. Then one audit pass over all lessons to list and fix gaps. Decided: lint (`assumes`/`introduces`) plus better in-lesson scaffolds; no "Before you start" card (risks bloat). The card stays an option only if the audit shows gaps scaffolds cannot fix.

## Next ideas

- A small form on the create page for code-check rules (templates exist; no form yet).
- Use the new Investigate tools and tasks in the HTML and Gradio lessons.
- Drag-and-drop for match items (dropdowns today); persistence of Parsons state across reloads.
- HTML code checks (for example `has: ul`) using the same message channel.
- More Python foundations: conditionals, `while`, `random`; then HTML links, images and CSS.

## Parked

- p5.js playground and lesson (the JS route before DOM work); Blockly; ML or pretrained modules.
- More foundations: conditionals (`if`), `while`, `random`, HTML links, images and CSS.
- Auto-closing tags in the HTML playground; a student view link for unpublished lessons.
- Custom domain setup (DNS and the Pages setting are on Matthew's side).
- Gradio clips need re-checking; HTML and Gradio paths need more lessons.
- Progress export and import (a short copy-and-paste code to move progress between browsers) and a printable certificate of current progress. A fun long-term idea; keep it account-free.
