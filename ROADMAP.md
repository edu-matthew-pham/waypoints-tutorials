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

**Scope rule.** HTML is a few ideas plus a large vocabulary. Keep what is (1) a core idea every tag or property builds on, (2) needed by the DOM extension (the tree, classes, selectors), or (3) used on the challenge page. Everything else is a Reference card. Core ideas: tags label meaning; nesting makes a tree; attributes add information; a CSS rule is a selector plus declarations (a rule that matches nothing fails silently); every element is a box; one layout tool (Flexbox). Dropped to Reference: most other tags (Grid has an optional lesson, 12), positioning, units beyond px and %, colour formats beyond names and hex, specificity, media queries.

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

**Settled 9 Oct:** semantic tags are a real step (lesson 8); images and tables are separate lessons; hero and cards stay their own lesson (Flexbox already has two tasks); `first-page` is reworked into lesson 1. Nine core lessons plus the challenge, about the Python course's size. Groundwork built 9 Oct: HTML code checks, CSS `/* region */` markers, HTML pictures for the Reference and cheat sheets (23 snippet examples), units in `code/html/index.md` (no `challenge:` until the challenge lesson exists, so no empty badge) and eight web misconceptions. Lesson 1 (Tags and nesting) built 9 Oct, reworked from `first-page` (slug kept): Predict on line breaks (most students guess 4 lines; the page shows 2), Investigate tasks on meaning, nesting order, a broken-nesting bug that looks fine, and a missing closing tag (no error message), Modify in three tasks, Make a school notice, real-world step "Tidy up a newsletter article" with the standard page wrapper as a recipe; teacher notes and the Structure primer. Fixed on the way: HTML syntax highlighting, tags in slides and worksheets shown as text, a missing space before "Got it.". Lessons 2 to 4 built 9 Oct (Lists and links, Images, Tables): each with a predict where a wrong guess is likely (the hidden link address, a misspelt picture name showing its alt text, tables with no grid lines), an error task, expected-result pictures and an Explain it to me clip. Pictures are drawn for the course (`media/html/`: trophy, medal, book, ball), so there are no licence questions; links in the preview open in a new tab. `npm run check-html` walks every check in the HTML lessons. Unit 1 (Structure) is complete. Next: Unit 2 (Style), after review.

Unit 1 revision (9 Oct): each lesson shows combinations (mix-and-match nesting; a link and a list inside list items; a picture inside a link and list items; a link, picture and strong word inside table cells) with a Boxes picture and a new Modify task; Explain it to me text now follows its clip step by step, with a picture of the clip's result (`picture:` and `explainPicture:`, rendered from the playground). Boxes labels pictures and form fields.

Voiceover (later): clips stay silent by default; add optional narration students can turn on when headphones or quiet playback are possible (text-to-speech from the captions, or recorded). Captions remain the default.

Explanations as clips (decided 9 Oct): captions first, no voiceover for now (headphones are not guaranteed in class); short clips (under about 30 s) that show the idea, with key phrases as captions rather than a full transcript (multimedia principles: segmenting, signalling, redundancy). Pilot: lesson 1's Investigate clip types nested tags with the playground's new Boxes view on. Voiceover options for later: text-to-speech in the pipeline, or Matthew recording over a generated clip. Next: lesson 2 (Lists and links), after review.

## Unit 2 (Style): built 9 Oct

Lessons 5 (Rules and selectors) and 6 (Boxes) are built as designed below, with the Box model view (rings for margin, border and padding around the content; correct under clip zoom), clips that type rules inside the `<style>` block (`after:`), and Box model pictures (`inspect:`). Found on the way: hints are Markdown, and bare tags in them had been rendering as real tags in Unit 1 (a bare `<style>` in a hint swallowed a whole lesson's script); all hints now use backticks, validate checks hints, and `check-html` fails if a lesson script did not run. Next: Unit 3 (Components and layout), after review.

### Design

Same standard as Unit 1: PRIMM used selectively, a combinations task with a picture, a new Modify task per idea, expected-result pictures, an Explain it to me clip with text and a picture that follow it, teacher notes, and the Style primer. CSS stays in a `<style>` block in the page (one file in the playground); regions inside it use `/* region: x */`. All facts below checked in Chromium in standards mode, as in the preview.

**Lesson 5: Rules and selectors** (`code/html/selectors`)
- Predict: a page with an `<h1>`, two paragraphs and a list, and `p { color: teal; }`. "How many lines turn teal?" Many say all of the page; it is the two paragraphs. Insight: a selector picks every element that matches, and only those.
- Run: unlocks `style-block`, `rule`, `color`, `font-size`. Change the selector to `li` and watch the colour move.
- Investigate: match the parts of a rule (selector, property, value, braces, semicolon); a class (`.note` matches `class="note"`, the dot only in CSS); bug `selector-mismatch` (a class typo, `.Notice` for `class="notice"`: class names must match exactly, capitals included; the paragraph stays black, no error); combinations with a picture: one rule for several selectors (`h1, h2`), a class on an `<li>` and on a table cell, several rules on one element.
- Modify: change a colour; add a `font-size` rule; give one paragraph a class and style it; style two kinds of tag with one rule.
- Make: style the school notice from lesson 1 with at least three rules and one class.
- Real world: "Restyle the club notice" (colours and sizes for a real page).
- Snippets to add: class selector (`.name { }` with `class="name"`), grouped selector (`h1, h2`).

**Lesson 6: Boxes** (`code/html/boxes`)
- Predict: `.card { width: 200px; padding: 20px; border: 5px solid; }`. "How wide is the card on the page, in pixels?" Most say 200; it is 250 (padding and border add to the width on both sides). Insight: every element is a box of content, padding, border and margin.
- Run: the new **Box model** view (hover a box to see its margin, border, padding and content, with sizes; it does not change the layout, unlike Boxes). Unlocks `padding`, `margin`, `border`, `width`, `background-color`.
- Investigate: match padding, border, margin and width to what they change; a trace or number task on widths (200 + 2 × 20 + 2 × 5); block versus inline (paragraphs stack, `<strong>` and `<a>` sit in a line); bug `css-missing-unit` (`padding: 20` does nothing: no error, the rule is ignored); combinations with a picture: a card holding a heading, a picture and a paragraph, with padding inside and margin between cards.
- Modify: add padding; add a border; space two cards apart with margin; set a width.
- Make: a house card (border, padding, background, width) with a heading, a picture and a line of text.
- Real world: "Turn the newsletter into cards" (two articles as boxes).
- Snippets to add: `width`.

**Groundwork for this batch:** Box model view (`?inspect=selector` pins one element for clips and pictures; hover otherwise); snippets and examples; the Style unit primer ("CSS in 5 minutes"); picture rendering always in standards mode (fixed); `npm run check-html` covers the new lessons automatically.

## Challenge unit (HTML): built 9 Oct

Lessons 10 to 12 are built. Club page: plan the page by naming its parts, then three milestones with fading support (header and menu; hero and cards from an outline in comments; results, sign-up and footer from goals only), then Make it yours; finishing it marks "Challenge complete" (`challenge: challenge` in `code/html/index.md`). Optional Make it react: JavaScript as a recipe (find, wait, change), with the snippets `on click`, `change the text` and `read a box` in a "JavaScript (recipes)" Reference group; error task `#Go` versus `id="go"`; Make a greeting; then the Forms sign-up says thank you. Optional Page layout with Grid: `display: grid`, `grid-template-columns`, `fr`, `repeat`; error task Grid on the items (`grid-on-items`); Grid or Flexbox; a page, cards and a gallery. Clip actions `click` and `expect` take `preview: true`. `check-html` ignores errors from bug-task regions (they are meant to be broken).

Later: a wider code panel for clips (Make it react's recipe lines only fit at zoom 1.0).

## Unit 3 (Components and layout): built 9 Oct

Lessons 7 (Flexbox), 8 (Page sections and components) and 9 (Forms) are built as designed below. Added on the way: `list-style: none` as part of the menu pattern (bullets sit oddly in a flex row); a note in the preview when a form is sent ("Nothing was sent..."); two more drawn pictures (`star.svg`, `music.svg`); Boxes floats a flex or grid container's label at its corner (it had become a flex item). Next: the final challenge unit (a club page from every component; optional Make it react and Page layout with Grid), after review.

### Design

Same standard as Units 1 and 2. Facts checked in the preview.

**Lesson 7: Flexbox** (`code/html/flexbox`)
- Predict: a menu list with `ul { display: flex; gap: 16px; }`. "How will the three menu items be placed?" Side by side in a row.
- Investigate: match `display: flex` (on the container), `gap`, `flex-wrap: wrap`, `justify-content: center`; which box gets `display: flex` (the parent); bug `flex-on-items` (`li { display: flex; }` changes nothing); combinations with a picture: a menu of links, a wrapping gallery, cards side by side.
- Modify: menu in a row, a gap, centred; gallery that wraps. Make: a gallery of at least four pictures. Real world: "Put the club menu in a row".

**Lesson 8: Page sections and components** (`code/html/sections`)
- Predict: `<div>` swapped for `<header>` and `<footer>`. "What changes on the page?" Nothing you can see: section tags name the parts (screen readers, search engines); CSS decides the look.
- Investigate: match `header`, `nav`, `main`, `footer`, `section`; why name parts; combinations with a Boxes picture: a hero and a row of cards inside `main`; bug spiralling `flex-on-items` (`.card` gets `display: flex` instead of `.cards`).
- Modify: wrap the top in `<header>`, add a `<nav>`, add a `<footer>`, put the cards in a row. Make: a hero section. Real world: "Rebuild the club homepage" from plain divs.

**Lesson 9: Forms** (`code/html/forms`)
- Predict: a sign-up form. "What happens when you press Send?" Nothing: the form is not connected to anything yet (the preview shows a note saying so). Insight: the form is the front; code behind it does the work (leads to Make it react, the DOM and Gradio).
- Investigate: match `form`, `label`, `input`, `type="email"`, `select`, `button`; label linking (`for` matches `id`); bug `label-not-linked`; combinations with a picture: a form styled as a card.
- Modify: add an email field, a house drop-down, link the labels, style the form as a card. Make: a club sign-up form. Real world: "Fix the sign-up form".

**Groundwork:** a note in the preview when a form is sent; snippets (`display: flex`, `gap`, `flex-wrap`, `justify-content`, section tags, form fields); two more drawn pictures for galleries; misconception `semantic-tags-look`; the Components unit primer.

## MakeCode: embedding check (done 9 Oct 2026; sample lesson works, not built into the site)

**Answer: embed, with code checks.** MakeCode offers three levels of embedding, and the deepest one gives us the student's code on every edit. Verified in Chrome for micro:bit and Arcade (probe page and a working five-step sample lesson, opened as local files).

1. **Share-dialog embeds**: a project as a code picture, a read-only editor, or the simulator only. No feedback to our page.
2. **Blocks renderer**: a hidden iframe (`/--docs?render=1`). We post `renderblocks` with JavaScript and get back a picture of the blocks (`uri` plus `width`). Show it at that width (capped at 100%); unsized, it fills the pane and looks huge. This gives blocks pictures for Predict steps, decks, worksheets and cheat sheets without screenshots, and CI can run it at build time.
3. **Full editor in controller mode**: `?controller=1` inside an iframe. Our page owns storage: the editor asks for projects (`workspacesync`) and saves every edit to us (`workspacesave`, the whole project: `main.blocks` XML, `main.ts`, `main.py` once used, `pxt.json`, plus `assets.json` and `.simstate.json` in Arcade). We can send `importproject`, `newproject`, `switchblocks`/`switchjavascript`/`switchpython`, `startsimulator`, `hidesimulator` and `saveproject`.

Checked in the `pxt-core` 13.2.5 source: controller mode is switched on by the URL alone, with no host allowlist. Sign-in is turned off inside the embed, and projects live in memory and go only to our page: nothing lands in the student's MakeCode account or the browser's MakeCode project list. The micro:bit Educational Foundation's `@microbit/makecode-embed` (MIT, 0.7.x, API "not yet stable") wraps the same protocol.

**Protocol rules learned building the sample** (each one broke the checks until fixed):
- **Be a real project store.** Answer every `workspacesync` with all projects held (from saves and imports). MakeCode re-syncs on import, and an empty reply loses the project.
- **Imported projects get a new id.** After `importproject`, adopt the id of the first save that carries the step's name, then follow that id.
- **The name comes from `pxt.json`.** Set it there as well as in the header, or MakeCode renames the project "Untitled" after one save.
- **Build imports from a real header.** Let MakeCode create its default project first, then reuse that header and `pxt.json` as the template for each step's project.
- **Starters can be JavaScript only.** Send an empty `main.blocks`, then `switchblocks` after the import, and MakeCode builds the blocks.
- **Route messages by frame** (`event.source`): the editor and the renderer share an origin.
- **Saves arrive in pairs**, and rapidly while LEDs are clicked: wait about 500 ms after the last one before checking.
- **No compile errors in this mode** (`workspacediagnostics` does not fire in controller mode, per the embed library), so checks read `main.ts`.
- A leftover default project keeps saving in the background; ignore any id that is not the current step's.

**What this means for lessons**
- **Code checks work.** Blocks always compile to `main.ts`, so one rule checks blocks, JavaScript and Python. Useful rules: code inside `basic.forever` (brace-matched), counting frames (`basic.show…` calls), and LED patterns as text (`. # . . .`), so a check can test a micro:bit picture. Arcade sprite art is inline 16×16 text, or ``assets.image`name` `` once named, so Arcade checks test structure (`sprites.create`, `SpriteKind.Player`, overlap handlers), never pixels.
- **New playground kind** `makecode` (`try: { playground: microbit | arcade }`): reports code on every save like the HTML playground (no Run; the simulator is in the frame). Per-step project in localStorage plus "Start this step again"; nothing goes to MakeCode's cloud and there are no accounts. `.hex` download works from inside the frame (`allow="usb"`). Work stays on our site unless we add an "Open in MakeCode" export.
- **PRIMM fits.** Predict shows a rendered blocks picture. Run loads the program with `importproject`. Investigate, Modify and Make start from step starters, and their checks tick by themselves as students build. Solutions are `sol-*` projects that must pass their check.
- **Reference.** Blocks live in MakeCode's toolbox, so the drawer turns into a cheat sheet: a blocks picture plus the JavaScript and Python lines.
- **Clips.** Playwright can load projects and run the simulator, but dragging blocks is unreliable: clips show results, not building.

**Sample lesson.** "Pictures on the LEDs" (micro:bit lesson 1, one standalone HTML file): Predict (heart, then small heart, from rendered blocks), Run (compare with the prediction), Investigate (move both hearts into forever; question on why it beats), Modify (a show leds frame plus pause), Make (three or more frames, one hand-drawn), with a For teachers panel and `?debug` message log. All five steps work against the live editor. It is the reference for building the playground.

**MOVE Motor in the simulator (tested 9 Oct):** the Kitronik extension's blocks run without errors, but nothing shows a robot moving. The gap is a visual robot, not broken code. Decide the route (add MOVE Motor to `microbit-robot`, our own simulator extension, or the Godot bridge) before the Robotics course, once micro:bit Foundations is underway.

**Risks.** We depend on Microsoft's hosted editor and an unversioned message API (pin a versioned path if offered; smoke-test in CI). The editor is heavy: one frame per lesson page, projects swapped with `importproject`. Still to check: whether the Kitronik MOVE Motor extension does anything in the simulator (the simulation options above are unchanged), and the embed served from a github.io address rather than a local file.

**Fallback:** link out to MakeCode's own Markdown tutorials (hosted on GitHub): no build, but students leave our site with no code checks or progress.

**Next:** build the `makecode` playground into the site from the sample lesson, then map the micro:bit course onto the shared spine (`BUILDING.md` › 2), with "Pictures on the LEDs" as lesson 1.

## MakeCode: micro:bit Foundations sequence (decided 9 Oct 2026; all 14 lessons written, not built)

**Shape.** Two parallel foundations courses, start with either: **micro:bit Foundations** and **MakeCode Arcade**. Neither depends on the other. Foundations is fully simulator-based (no hardware needed; real micro:bits are a For teachers bonus via Download). Robots come in **Robotics challenges** (extensions, after micro:bit Foundations): each idea learnt in the simulator, then run on a real Kitronik MOVE Motor. That course's sim-first design waits on MOVE Motor simulation (see embedding check); foundations does not.

**Spine, with one deliberate change: events at lesson 2.** In blocks an event is just a holder you fill (no callback syntax, no `global`, no `mainloop`), the buttons are the device's whole interface, and lessons 3 to 6 need input to count and react to. Radio's `on received` (Unit 5) spirals events back.

**Python peek from lesson 8, not lesson 1.** MakeCode's Python shows even `forever` as `def on_forever(): …` plus `basic.forever(on_forever)`: callback structure before students have met functions. At Functions it becomes the insight ("every event block is a function you hand to the micro:bit"); after that, short read-only "same program in Python" Predict or match steps. Earlier, the For teachers panel can mention the Python button.

**Units and lessons** (folder `content/code/microbit/`)

1. **Show and react** (written): 1 Pictures on the LEDs (sequence, `forever`; error `run-once-vs-forever`). 2 Buttons and gestures (events; error `button-check-once`).
2. **Remember and sense** (written): 3 Counting (variables, set versus change; error `reset-in-loop`; Make a step counter). 4 Sensors are numbers (light, temperature, tilt; Sam's thermometer spirals `run-once-vs-forever`; Make a thermometer).
3. **Decide** (written): 5 If (night light whose lights stay on, because an if does nothing when false; error `comparison-direction`; Make a weather warning). 6 Else and ranges (tilt arrows; the first true question wins; error `else-if-order`; Make a comfort meter from two questions).
4. **Collections and tools** (written): 7 Lists (magic 8-ball, places from 0, length − 1; error `list-first-is-one`; Make rock paper scissors). 8 Functions (flashHeart, a parameter; error `define-not-call`; the Python peek starts here: every event block is a function; Make a stick-figure dance).
5. **Talk** (written): 9 Send and receive (groups, a micro:bit never hears itself; error `radio-group-mismatch`; Make bike signals by radio). 10 Messages with meaning (a shared list as a code, a reply message; error `shared-code-mismatch`; Make a mood check-in).
6. **Challenge** (written): 11 Reaction timer (milestones: time the press, no cheating with a true/false variable, beat your best). 12 Radio duel (milestones: refactor copied blocks into `go`, error `copied-blocks`; first press wins; first to three). 13 Optional: Fake-outs and levels (decoys, a list of target times per level, lives). 14 Optional: Tournament (a two-place scoreboard list, a `startRound` function so rounds carry on, a champion and reset). Optional lessons are the high ceiling within the course, not previews of other courses. Only two new blocks in the whole unit: running time and true/false.

**Format additions the playground needs** (used by the written lessons): `try.playground: microbit` (and `arcade`), `language: makecode` (display code shown as a rendered blocks picture), and two code rules: `inside: { "basic.forever": [fragments] }` (fragments inside the first `{ … }` block after the key, so it also works for `"input.onButtonPressed(Button.B"`; comments and spaces ignored) and `count: { "basic.show": 3 }` (occurrences; note that `if(` also counts `else if(`). The existing `defs`, `calls` and `params` rules read named MakeCode functions (`function name (points: number)`); event blocks are anonymous `function ()`, so they never count. Check labels show the check's `text`, never a code fragment, since students work in blocks. Validate rejects these until the playground exists, so the content waits on a branch.

**Playground built (9 Oct; not yet tried in class against the live editor):** `playground-makecode/` hosts the MakeCode editor in controller mode (`?target=microbit|arcade`), applies every protocol rule above, autosaves each step's project (`wp-makecode-playground:<step>`), has **Start again**, and reports `main.ts` to the lesson on the HTML playground's channel (`{ wp: 'run', kind: 'microbit', code }`; quiet until the student changes something). `lesson-core` has the `microbit` and `arcade` kinds, the `inside` and `count` rules and the MakeCode reading of `defs`/`calls`/`params`; validation is clean. Lesson pages hide the rule list for MakeCode (the task text says what to do), and show display code as a blocks picture from MakeCode's renderer, with the code one click away (open by itself if the renderer cannot be reached). Tested headless with a mock editor served at makecode.microbit.org (re-sync on import, new id, name from pxt.json, saves in pairs): pictures render, starters import and switch to blocks, half-done work does not tick, correct blocks tick, work survives a reload, Start again, the Run step's compare box, and Python and HTML lessons unchanged. **Still to do:** try a lesson against the live editor; check memory on school laptops, since each step with a playground loads its own editor (lazy, as it scrolls into view); teacher decks, worksheets and cheat sheets still show MakeCode code as text (blocks pictures there are the second pass).

**Teacher material, Explain it to me and the playground page (9 Oct):** `render-pictures` draws MakeCode blocks pictures through `_playground-makecode/render.html` (MakeCode's own renderer; offline, nothing is drawn and pages keep code as text): one per block in `snippets/microbit.json` (32 blocks in six groups) and one per program a lesson shows (display code, code in task text, solutions, explainPicture), keyed by a hash of the code (`_pictures/makecode/code/<hash>.png`, cached). Decks (Marp `h:` so pictures stay on the slide), worksheets, teacher guides (picture, code one click away) and lesson pages use them, and lesson pages fall back to the live renderer. Cheat sheets per unit and the whole course come from `snippets/microbit.json` through the same pattern matching as Python and HTML (MakeCode solutions count too, because lessons ask students to add blocks their starters lack); each card is the block's picture plus its code, and the text says to find blocks in the MakeCode toolbox. `code/microbit/reference/` lists all 32 blocks, with print copies for students. Each lesson has an `explainPicture` (allowed in MakeCode lessons, shown as blocks): always a program students already see in the lesson, never a task's answer. `/code/microbit/playground/` is free play (saved per browser as `free/microbit`), linked from the course page. Tested with a mock renderer (all 104 pictures drawn and used) and in a browser; validation clean. Not yet run: `npm run check-decks` (Marp overflow) on the MakeCode decks.

**Parked (9 Oct):** (1) **Click-to-load editors**: each step's playground loads its own MakeCode editor as it scrolls into view; if laptops or the school connection struggle in testing, show a placeholder and load one editor at a time on click. Waiting to see how the current version behaves. (2) **MakeCode tutorials** (the tutorial maker's format: step panel, highlighted hints, filtered toolbox): not for the core, because it takes over the editor, runs its own sequence instead of PRIMM and lives in a second set of files. Possible later as an optional "follow along" for the hardest Make milestones: controller mode can load one (`importtutorial`) and reports progress (`tutorialevent`).

**Proposed next: toolbox filters per step.** `importproject` takes `filters` (namespaces and blocks), so a step could list the blocks students need (`try: { blocks: [basic, input] }`) and the toolbox shows only those. A real help for Year 6 to 8 beginners, and a small change to the playground.

**Arcade** gets the same treatment next, on the same spine: sprites, movement, overlaps as events, score and lives, projectiles as lists, functions, levels, then a challenge game.

All 14 lessons and six unit primers are written to the full standard, with teacher notes, solutions, nine planted misconceptions and Python peeks from lesson 8. All 42 code checks are tested with the proposed rules: every solution passes, every starter fails, and no earlier task's solution ticks a later task. Simulator details in the text (light and temperature sliders, tilting with the mouse, the second micro:bit for radio, SHAKE and A+B buttons) were written from knowledge of MakeCode and need a spot-check in the live editor.

## Proposed: turtle companion (discussed, not decided)

A small turtle in the corner of course and lesson pages with a CSS idle animation (blink, bob; none with reduced motion; can be hidden). It earns one item per unit finished: a colourful pen (Drawing and repeating), a signpost and a backpack (Choices and collections), a jigsaw piece (Functions), a remote (Interaction), a crown (Final challenge). Clicking it shows its items and where each was earned; finishing a unit plays a short celebration. Per browser, built from existing progress data.

## Pathways (decided direction, 9 Oct 2026)

Three pathways offered as options, not gates. Each shares one concept spine (sequence, loops, variables, decisions, lists, functions, events, building a widget) and the "build it yourself, then meet the real tool" approach. Typical fit is a teacher note only (For teachers panel and here), never a label students see.

**Foundations (build now; typically Years 6–8)**
- **MakeCode** (typically 6–8): micro:bit (sensors, LEDs, radio, then Kitronik MOVE Motor in simulation, then the real robot) or Arcade (games: sprites, collisions, game loop). Blocks first, then the same programs in MakeCode Python or JavaScript. Embedding is checked and works (see "MakeCode: embedding check"); sequence in "micro:bit Foundations sequence".
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

**Next builds, in order:** the lists/`if` revisit (the final challenge is built); HTML & CSS is built (lessons 1 to 12); MakeCode (micro:bit Foundations built: 14 lessons, playground, teacher material; next is testing with teachers, then toolbox filters and Arcade).

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
- Clips on the create page (future): a helper to write caption and code steps for `explainClip` and step clips, and a live "Preview clip" that plays the steps in the playground without recording. Today teachers can write a clip in the lesson file, but it is recorded only after review and commit.
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
