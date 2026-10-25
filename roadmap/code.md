# Roadmap: Code (Python, Web, MakeCode)

The code chat's file: current status, what is open and the decisions that still apply. Rewritten 12 Oct 2026. Earlier entries (design reasoning, test notes, older decisions) are in [`archive/code-to-2026-10-12.md`](archive/code-to-2026-10-12.md), word for word. Shared tools and site pages: `shared.md`.

**How to keep it current:** when something is built, update its course block below. Don't add a dated section. Write new proposals under "Proposed". After a push, give one line in "Log". Move long design notes to the archive once they are decided.

## Open now

**Needs Matthew (school devices, classes, live sites)**
- **School network:** the Pyodide courses (first load, jsDelivr or our own copy), wikidata.org and api.open-meteo.com, and microstudio.dev (works at home; if the school blocks it, Matthew asks IT). The `/check/` page tests most of these.
- **MakeCode against the live editors and real hardware:**
  - every micro:bit, Arcade and Robotics lesson (block names, toolbox drawers, simulator details written from knowledge);
  - whether the text `indexOf`/`charAt` and bitwise `^` blocks exist (Secret messages);
  - the `ml` extension in our embed;
  - serial and the radio bridge on real micro:bits;
  - a real Teachable Machine export in the classifier board;
  - whether the robot start block errors on a micro:bit that isn't in a robot.
- **Class trials:** none of the extension courses has been tried with a class yet.

**Code chat can do next**

## Courses

Lesson counts include optional lessons. "Pictures" are drawn by `render-pictures`; "clips" are explain clips unless named.

### Python pathway

- **Python Foundations with Turtle** (`code/python-foundations`, 11 lessons) and **Python functions and events** (`code/python-functions`, 12, 2 optional), both foundations: split 13 Oct from the old 15-lesson `code/python`, one move per lesson (plan in the Project doc turtle-sequence).
  - Foundations: drawing with a turtle, repeat, name a value, the counter, a value that grows, a street of houses (review), if and else, every other (`%`, `elif`), lists, for each, then the tile challenge.
  - Functions and events: read a program, functions, parameters, returns, functions that decide, modules, events, build a button, then the challenge (Catch the turtle and Power-ups, plus optional Control panel and Game levels). Events and the button are foundations (the open question of 12 Oct is settled by the split); the final challenge replaced the planned checkpoint.
  - Has teacher layer, voice and concept tags.
  - Class plans (13 Oct): as for MakeCode, the generic finger votes and "Show a friend" endings were removed from Python Foundations, Python functions (Read a program) and Console; prompts not already in the Predict line of `running:` moved there. Kept end activities test the lesson's idea on a partner's program and do not repeat the exit ticket: Change one number, Guess the rule, Tile gallery, the street gallery walk, and in Console Read it like a computer, Spot the number, Break my machine, Add it up together, Order from my menu, Break my function and the app showcase. Console's two real predict activities stay (Read it like a computer in Guess, Work it out by hand in the app).
- **Console bridge** (`code/console`, 11 lessons): built 11 Oct as 4 lessons, redone 13 Oct as one move per lesson (plan in the Project doc console-sequence). Units: Text (print, ask and store, numbers into text), Numbers (text into numbers, check first with `isdigit`), Keep asking (`while`, running total, guess the number), Menus and testing (menu with `break`, test with a table), then the console app challenge.
  - Single-file lessons (teacher notes and code inside `lesson.md`). Console mode in the turtle playground with inline `input()`; Playground and Reference pages.
  - `stage: foundations`, after Python functions and events: the last foundations course, and every Python extension comes after it.
- **Objects with turtles** (`code/objects`, 5): built 11 Oct. Several turtles in the playground (BUILDING › 7).
- **Deeper Python in the console** (`code/deeper`, 6): built 11 Oct.
  - Text, lists, dictionaries, errors, a text adventure, and Save the game (`json`, on the Python playground).
- **Data detective** (`code/data`, 6 incl. optional Ask an API): built 11 Oct.
  - Runs on the Python playground (Pyodide). Data sets in `sets/`.
  - Not done: a shared `load()` helper, and a real Wikidata export to replace the hand-made `music.csv`.
- **Apps with Gradio** (`code/gradio`, 4): built 11 Oct, using the mini-Gradio stand-in. Real Gradio is covered in the teacher notes.
- **Machine learning with Gradio** (`code/ml`, 6): built 11 Oct.
  - Palmer Penguins data, scikit-learn vendored.
  - No clips: scikit-learn takes about 15 s to load.
- **Web apps with Flask** (`code/flask`, 6, on the Python and Web pathways): built 11 Oct.
  - Not done: SQLite as the last storage step, templates in files, FastAPI's `/docs` page.
- **Games with microStudio** (`code/games`, 5): built 11 Oct; Playground, Reference and clips added 12 Oct.
  - Students make their games on microstudio.dev (decided: link out). Our pages show each game playing in `playground-microstudio/`, the engine and Brython from microStudio's HTML5 export.
  - The Playground (`edit.html`) puts code beside the player and also works when microstudio.dev is blocked.
  - Reference: `snippets/microstudio.json` (22 cards, 9 pictures).
  - Clips for A game loop, Stars as objects, and Catch and score.
  - No clip for Keys (the recorder can't hold a key down) or Make it yours (sound and sprites).
  - Not done: a class trial.

### Web pathway

- **HTML & CSS**, two foundations courses: **Structure and style a page** (`code/html`, 13: tags to forms, ending with the club page challenge) and **Layout and components** (`code/css`, 12, 2 optional: which rule wins to Flexbox and cards, the club page laid out, optional Grid and Make it react). Built 9 Oct as one 12-lesson course, later split.
  - Has voice, pictures, Boxes and Box model views, and `check-html`.
  - Scope rule (still applies): only core ideas, what the DOM needs, and what the challenge page uses; everything else becomes a Reference card.
  - Later: a wider code panel for clips.
- **Pages with Bootstrap** (`code/bootstrap`, 3): built 12 Oct.
  - Style by class names; Navbar, cards and a grid (the club page rebuilt); Make Bootstrap yours (own rules after the link, Bootstrap vs hand-built, and a look at Bulma, Tailwind, daisyUI and Pico).
  - HTML playground; libraries from `vendor/web/` served beside the page. Reference (Bootstrap and Other CSS frameworks groups in `snippets/html.json`), pictures, voiced clips, `check-html` walks it.
  - Bootstrap's CSS only (no JavaScript): the navbar uses `navbar-expand`. Tailwind runs on its browser build, labelled as the trying-things version.
  - Not done: a class trial.
- **Drawing and animation with p5.js** (`code/p5`, 8 incl. optional Moving art): built 11 Oct.
  - Own playground (`playground-p5/`, p5 2.3.4 vendored), Reference (37 cards), pictures and clips.
  - Not done: clips for the moving sketches (animated sketches show a still), a class trial.
- **The DOM and the browser console** (`code/dom`, 10, 3 optional: The real browser console, Data from the web, Saving between visits): built 11 Oct.
  - Its own `playground-dom/` (Run, console panel, DOM hints; reports as `html`), clips and expected pictures.
  - Optional lesson 10, Saving between visits (built 12 Oct): `localStorage`, lists as JSON; the DOM playground keeps each step's saved data (a stand-in, since the sandboxed preview has none).
  - Optional lesson 9, Data from the web: fetch (built 12 Oct): `fetch`, `await`, `.json()`, and `try`/`catch` falling back to the saved `weather.json` (Data detective's file, now also in `media/html/`) when Open-Meteo can't be reached. Reference page added (`code/dom/reference`).
  - Not done: a class trial, saving between visits (by design).

- **Apps with Vue** (`code/vue`, 7 incl. optional Same app, three frameworks): built 12 Oct.
  - Data on the page, Lists and choices, Events and inputs, Computed, Components and props, then the challenge (a to-do app in three milestones) and the optional three-framework lesson (Vue, Preact with htm, Svelte compiled in the page).
  - Composition API (`ref`, `computed`) in the global build, on the DOM playground. Vue's development build, for its warnings. Svelte components sit in a hidden `<textarea data-svelte>`, compiled by `svelte.js` (vendor/web).
  - Reference (Vue and Frameworks groups in `snippets/html.json`), pictures, voiced clips; `check-html` walks it and the DOM course.
  - Not done: a class trial; `:key` and `emit` are teacher-note stretches only.

- **Your site, for real** (`code/site`, 2): built 12 Oct. After HTML & CSS, so every route ends there; works on any page.
  - Pages for everyone (alt, heading outline, labels, link text, contrast, keyboard, then a classmate test) and Put it online (a site is a folder, relative paths, Download, publish with the teacher: GitHub Pages, Netlify Drop or the school's site; the publish step is `tier: typical`).
  - Download button in the HTML and DOM playgrounds (`playground-html/download.js`).
  - Not done: a class trial; a built-in accessibility checker (Lighthouse is in the teacher notes).

### MakeCode pathway

- **micro:bit Foundations** (`code/microbit`, 11) and **micro:bit: talk and play** (`code/microbit-play`, 10, 2 optional): redone 13 Oct as one move per lesson (plan and status in the Project doc microbit-sequence). Foundations: pictures in order, forever, button events, counting, sensors, if, else, else if, lists, pick from a list, then the Pocket pet challenge. Talk and play: functions, radio, which message, a shared code, time between, true or false, then Reaction timer and Radio duel (Fake-outs and levels, Tournament optional). Robotics, micro:bit and the computer and Secret messages now follow talk and play.
  - Single-file lessons; a review step ("Mix it up") from lesson 3; each move lesson's Make unlocks its block (new blocks: animation, counter, pick from list, which message, shared code, time it). MakeCode snippets still have no `example`.
  - Playground in controller mode, blocks pictures and "what it makes" pictures, Reference.
  - Not yet tried against the live editor; tested headless by sending each solution as a playground report.
- **Arcade Foundations** (`code/arcade`, 11) and **Arcade advanced skills** (`code/arcade-advanced`, 12, 1 optional): redone 13 Oct as one move per lesson (plan and status in the Project doc arcade-sequence). Foundations: sprites, controller, speed, overlaps, score and lives, timers, if every frame, else and chasing, projectiles, Read a game (a review lesson), then Space dodger. Advanced: every one of a kind, functions, parameters, gravity, jump from the ground, level up, a list per level, true or false, run out, then the Power-ups challenge, Will it work in Arcade? and optional Your own game. Each advanced unit's teacher notes point to a MakeCode skillmap (Jungle Jump, Monster Truck Racer, Save the Galaxy, Game Maker Guide).
  - Single-file lessons; "Mix it up" from lesson 3; new blocks: hit costs a life, check every frame, jump from ground, level up, count down. Projects split: Treasure hunt and Escape in Foundations, Defender (after every one of a kind) and Your own Arcade game (after a list per level) in advanced.
  - Not yet tried against the live editor; tested headless by sending each solution as a playground report. Tilemaps are outside the core.
  - Class plans (13 Oct): the generic "Vote, then argue" and "Show a friend" activities were removed from the MakeCode foundations courses (the deck's Predict slide already carries the vote, and the Predict line of `running:` is its speaker note); specific prompts moved into that line. Kept: activities tied to the idea (Be the loop, Drop a ball, Roll a dice) and end activities that test a named risk (Test the edge, One hit, one heart).
  - Later: Arcade multiplayer over radio as a third course (arcade-sequence › Later; check hardware and the simulator first).
- **Robotics challenges** (`code/robotics`, 12): built 10 Oct.
  - Uses `microbit-robot` v2.7.4 with the Cutebot. Units: Drive, Sense, Modes, Talk, then the challenge (Showcase, Patrol and alert, optional Tripwire).
  - Rule: radio handlers only set a mode; forever drives the motors.
  - MOVE Motor support later, as a driver contributed to `microbit-robot`.
- **micro:bit and the computer** (`code/microbit-computer`, 8): built 10 Oct.
  - Topics: USB serial, a radio bridge, Teachable Machine with the classifier board, CreateAI with the `ml` extension, and a capstone.
  - Tested only with stand-in models and a mocked micro:bit.
- **AI robots** (`code/ai-robots`, 5): built 10 Oct. In the simulator, buttons stand in for the model.
- **Secret messages** (`code/microbit-security`, 10): built 10 Oct.
  - Defence-oriented: no lessons where students sniff, spoof or replay each other's messages.
  - Uses the `flag` check (it stores only a hash).
  - Not done: clips, a cipher board widget, a teacher trial.

## MakeCode embedding (reference)

The playground relies on these protocol rules. Each one broke the checks until it was fixed (full notes in the archive, "MakeCode: embedding check"):
- Be a real project store: answer every `workspacesync` with all projects.
- After `importproject`, follow the new id.
- Set the project name in `pxt.json`.
- Build imports from a real header.
- Starters can be JavaScript only (`switchblocks` after the import).
- Route messages by frame.
- Saves arrive in pairs: wait about 500 ms after the last one.
- Controller mode reports no compile errors, so checks read `main.ts`.
- Ignore the leftover default project.

Risks: we depend on Microsoft's hosted editor and its unversioned message API. Fallback: link out to MakeCode's own tutorials. `?tutorial=` works but is not a lesson option yet (see Parked).

## Standing decisions

- **Pathways are options, not gates** (`after:` is a hint). Typical year fit is a teacher note only. Extensions run side by side after the console bridge. The only real dependencies are machine learning after Data detective and microStudio after Objects.
- **Build it yourself, then meet the real tool**, for example turtle buttons before Gradio.
- Arcade is games with blocks; microStudio is games in text code.
- **Python runtimes:** Skulpt for turtle, the console bridge and Objects. One Pyodide playground, hosted on our site, for everything that needs real libraries.
- Gradio over Streamlit. Flask, then optionally FastAPI. Storage goes variables → CSV → JSON → SQLite.
- APIs are kept small: keyless only, always with a saved copy to fall back on.
- **Data sets are swappable:** one table shape, with each set's licence and credit line shipped beside it.
- **Hidden assumptions:** use the `introduces`/`assumes`/`recipes` lint plus scaffolds inside lessons; no "Before you start" card. MakeCode, HTML, p5.js and the turtle lessons are tagged.
- **No vendor CDN at run time:** p5, Pyodide, microStudio and Teachable Machine are all served from our site.
- **No student accounts on our site.** Progress is saved per browser.
- **Voice (25 Oct, Matthew):** student-facing text reads the way you'd say it to a student at their desk, using the maths chat's rules (`maths-when-where-why.md` › Voice). For Code that means no stage directions ("Read the code.", "This mixes two lessons"), no internal names ("Course A"), and asking rather than labelling. Python Foundations, Python functions and events, Console and both Web foundations courses have had a pass; MakeCode read and left as it is.

## Proposed (discussed, not decided)

**SQL and databases (25 Oct 2026; Matthew asked; built 25 Oct and live: SQL playground, 11 lessons in `content/code/sql/`, Flask lesson 7 and Gradio lesson 5 optional; see Log. Status said "proposed, not built"; the text is the original proposal).** Code has no SQL: Data detective reads CSV with pandas, Flask saves to CSV, Objects keeps records in memory. SQL is the most common data tool across school courses (Years 9–10 data work and senior computing), and Supabase is SQL with hosting on top, so the course teaches the idea and mentions Supabase in "Where this leads" (no accounts; the site's no-account rule stays). Matthew has run SQLite with Streamlit before; Gradio fills that role here (Streamlit is not in the playground). Checked 25 Oct: `sqlite3` works in the vendored Pyodide (a query ran under Node), so the Python lessons need nothing new.
- **Course (about 8 lessons, after Data detective, Years 9–10 and senior):** tables and SELECT; WHERE; ORDER BY and LIMIT; COUNT, AVG and GROUP BY; joining two tables; INSERT, UPDATE and DELETE; designing tables with keys; SQL from Python. Then **Flask with a database** as the main route (Flask Save's CSV becomes a table: routes, forms and a database is the common web app shape), and one optional **Gradio** lesson (a dashboard over a query, after Data dashboard).
- **Playground:** a SQL playground (query box, results table, a starter database per lesson, Reset). Built on sql.js for the SQL-only lessons and on the Pyodide we already serve for the Python, Flask and Gradio ones (Matthew, 25 Oct: both; same SQLite, same starter files; roadmap/shared.md).
- **Datasets:** small and real-feeling, one per lesson set (a music library, a sports carnival, a canteen), with the same data available as CSV so Data detective students see the same table both ways.

**More `smaller:` lead-ins (25 Oct 2026; deliberately paused, revisit after class trials).** Built so far: 42 (the three first lead-ins, eight more, and 31 on the Make steps of Python Foundations, Python functions, Console, HTML and CSS). Not built: about 100 Make steps in the MakeCode courses (micro:bit, micro:bit play, Arcade, Arcade advanced, Robotics and the rest) and in the extension courses. Rule if we add more: Make steps with a check only, never Predict, never open challenge tasks, Modify steps skipped (they are guided); one question or number on the idea the step turns on, with a reason on each wrong option. Why paused: the lead-in is a second layer on top of hints that already escalate, it is closed by default, and we don't know if students open it. Teachers and classmates already do this job, and some independence is part of learning to code (Effort notes: name the hard part, don't remove it). Evidence to look for before adding more: students stalling on a Make step with nobody to ask, or home use turning out to be common.

- **Create from a finished project** (25 Oct; first version built: a Start from a project card and a published ideas-to-lessons file): reverse-engineer a tutorial from a teacher's own project, using the concept scan to split taught and new ideas and cut it into milestones. Plan in roadmap/shared.md › Create from a finished project.

**`smaller:` for Code (25 Oct 2026, code chat's reply to `shared.md` › Proposed 25 Oct, amended).** Not built; the shared push waits for Matthew's go.

*Fit.* Yes for Modify, Make and Investigate tasks, where Code's sticking points are. But the review's three Code forms (a pre-filled trace row, the same code one line fewer, a filled Parsons) are not question, number or answer, so as ordered the first push gives Code nothing to write. Two small additions make it fit, both without boards: `trace` as a lead-in kind (a plain table check, no layout cost), and an optional display-only `code:` on the lead-in (`smaller: { code: file.py#region, check: {…} }`, rendered as the step's `code:` is). Parsons can wait. `answer` (Numbas) is maths only.

*PRIMM Predict: agreed, off.* A smaller step before lock-in hands over the misconception. Enforce it in validate by shape (a step with `stage: predict` or a `type: predict` check in any non-maths lesson), not by authors remembering. Run steps don't need one either (their only check is reflect or the compare box).

*The three Code checks and their lead-ins:*
1. **turtle-decisions, Make** (code check: colour the spiral with an `if` that reads `size`). Not the trace the review suggested: the Mix it up step just before already traces a growing `size` against a cut-off, boundary included (10, 30, 50 against `< 50`). The Make's other sticking point (`stuck:` "every side is the same colour": is the choice made every pass?) is the gap. Lead-in: question, with `code:` = the Make starter. "Each line needs its own colour, so where should the `if` and `else` go?" Options: just before `forward(size)`, inside the loop (right); above the `for` line; after the loop; after `size = size + 10` (feedback: "That runs, but each line gets the colour meant for the next one, so the cut-off slips along by one.").
2. **turtle-parameters, Make** (code check: `pattern(sides, copies)`). From `stuck:` "Does the turtle turn between the copies?". Lead-in: number, with `code:` = `pattern` with no turn ("this draws 6 hexagons on top of each other"). "Here's `pattern` with no turn, so all six hexagons land on top of each other. How far should the turtle turn between them so the six go once round?" Answer 60; explain: "Once round is 360, shared between 6 copies." Distinct from Mix it up (the turn inside `polygon`).
3. **console-check, Modify** (code check: ask for two numbers, check both, print the total). The bug task already has a trace before it in Investigate; Modify is where `and` joins two checks for the first time. Lead-in: trace, "Fill in what the check gives for each pair, and what gets printed." | first | second | `first.isdigit() and second.isdigit()` | prints |: "3", "4", True, "Total: 7" given; "3", "four", [False], [the message]; "three", "4", [False], [the message]. Explain: "`and` only gives True when both answers are digits. One word in either box and the else runs."

*Voice.* A lead-in is what a teacher says crouched beside the desk, so it follows the maths chat's voice rules (`maths-when-where-why.md` › Voice, 23 Oct) in every subject: read it aloud; no labels or stage directions ("Smaller step:", "Hint:", "Think about:"); talk about the turtle, the spiral or the ticket machine, and name the Python once; contractions fine; one short question, not a worksheet. The wording above is drafted to that. The AUTHORING paragraph for `smaller:` should carry these rules (or point to one shared Voice section, since Code has none written down yet), because the lint only checks that a lead-in exists, not how it sounds.

*What breaks for Code in the mechanism as written:*
- **Order with hints.** "Render under the hints" puts it after the answer: Code hints escalate to the code (AUTHORING › Effort; turtle-parameters' second hint already says 360 divided by the copies). Put "Need a smaller step?" above the hints, so the thinking step comes before the code.
- **Full screen.** Two of the three are Make steps, which students often do in full screen. The task drawer clones every step child that is not itself `.check` (`lesson-view.mjs`, `fill()`), so a wrapper holding the lead-in would be cloned dead (ids stripped, no listeners). Skip `.smaller` in the clone and show one line in the drawer ("A smaller step is on the page: Hide task or Esc").
- **Never a code check.** The drawer's tick bar takes every `.check[data-type="code"]` in the step, and MakeCode full screen checks every task of the step. Validate: lead-in types are question, number, trace (answer for maths); never code, predict, flag.
- **The lint's second trigger is every Code step.** All 206 code lessons have `stuck:`, and 76 of them (console, micro:bit, Arcade and the other single-file courses) keep it in `lesson.md`'s teacher block, not `teacher.yml`. A per-step lint would flag nearly every Modify and Make in Code, and would miss the single-file `stuck:` if it reads only `teacher.yml`. Proposal: read the parsed teacher data (both places); for lessons without a hinge node, report per lesson ("has `stuck:`, no `smaller:`") in `npm run effort`, not a validate warning; skip Predict, Run and info steps. Also, many `stuck.ask` lines are about error messages (SyntaxError, TypeError), which the friendly errors already answer; only some are lead-ins.
- **Counting, beyond the manifest.** Also keep the lead-in out of the course row's per-check segments (`site/progress.js`) and out of task sub-pills. `check-html` and `check-makecode` should still check the lead-in's stored answer.
- **MakeCode later.** A lead-in `code:` in a MakeCode lesson would need a blocks picture (`render-pictures` keys). Leave MakeCode out of the first push.

*Asked of the shared push, for Code:* trace and `code:` on lead-ins, the fold above the hints, the drawer skip, the type and Predict rules in validate, and the lint reading both teacher sources. With those, the three lead-ins above are a `lesson.md` change only, and no clips re-record (the clip hash leaves out `lesson.md`).

- **Revisit if/else** in a new context: a function that decides and an `if` over a list are built (turtle lesson 8); still open: an `if` inside a Gradio function.
- **Clips on the create page:** a helper to write `explainClip` steps, and a live preview.
- A small form on the create page for code-check rules.
- Drag-and-drop for match items; keep Parsons answers across reloads.
- Prepare: confirm its load-by-URL parameter so "Copy address" can become "Open in Prepare".

**Ideas across pathways: show what's there, don't engineer more (25 Oct 2026, Matthew asked; built 25 Oct, see `shared.md`).** Matthew's question: do the shared coding ideas (variables, decisions, loops, lists, functions, events) need their own register or cohesion strategy? No new structure: the concept lists in `tools/concepts-core.mjs` already use the same id for the same idea in MakeCode, Python and JavaScript (`if`, `else`, `variable`, `variable-update`, `for-of`, `function`, `param`, `random`, `remainder`, `bool-value`…), and every lesson's `introduces:` already says where each is taught. Pathways stay options with their own order (MakeCode meets events in week two, Python in its second course), so nothing should keep them in step. Two small things, both shared tools, so proposed in `roadmap/shared.md`:
1. **Same idea, same name.** An alias map rather than renames, so no lesson tags change: JavaScript `array` = `list`, `array-index` = `list-index`, `for-count` = `repeat`, `return` = `return-value`, `property` = `attribute`, `math` = `math-fn`, and JavaScript `event` = Python `callback`. Not aliased: `object`, which means an instance of a class in Python and a `{ x: 5 }` record in JavaScript (that one is closer to Python's `dict`).
2. **A teacher view**, generated: one table, core ideas down the side, MakeCode, Python and Web across the top, each cell the lesson that introduces it (linked). For a teacher moving a student between pathways, and the data behind the "shared thread" in the real-world proposals below.
Not yet: a student line such as "You met this on the micro:bit" from local progress; buildable, but noise for the many students on one pathway. Wait for a teacher to ask.

**Real-world examples: a register, not a library (25 Oct 2026, Matthew asked; findings in `roadmap/code-real-world.md`; built 25 Oct, see Log).** Matthew's question: does Code need something like the maths library of real-world examples, for cohesion? Not the maths shape: maths needs a vetted "why" per node, while in Code what students make is already the point. But the examples that exist (hooks, Make contexts, "Change a …" steps, "Where this leads", projects) were each written on their own, and it shows. Proposed, in order:
1. **Keep the register** (`roadmap/code-real-world.md`, one row per lesson) and check new examples against it, project briefs first.
2. **Python's gap.** If and else, Every other, Lists and For each get a small "Change a …" step, borrowing their micro:bit twin's situation on purpose so the pathways meet (a thermostat dial that goes red past a mark, a striped crossing, a weekly lunch menu, a bar per rainfall day). Six of Python's eight current examples are buildings or streets.
3. **Web's variety.** Keep the club page as the through-line, but move about half the other Make tasks off clubs and events (a shop's product page, a sports results page, a recipe, a local guide), so the through-line stands out instead of being everything.
4. **One shared thread across pathways.** Name three or four situations every pathway builds (a scoreboard or total, an alarm on a threshold, an order or menu, a timer), and say so where they recur ("the scoreboard you built on the micro:bit"), in the lesson or its teacher notes.
5. **Hooks.** At least 59 of 206 use the "Every X, Y and Z …" template; rewrite them in the voice pass, a course at a time.
6. **Small fixes.** Swap one of Arcade's two firework shows; change the Bootstrap brief from an event page (below).

**Effect on the project briefs below:** Bootstrap's first brief becomes **a page for a local business** (a café, a bike shop, a vet) instead of an event, since Web already has an event page project and dozens of event Make tasks. The DOM and Vue briefs fill thin domains already (flashcards, a habit tracker, a reading log, a poll) and stay.

**Project briefs for the DOM course, Vue and Bootstrap (25 Oct 2026; built 25 Oct as drafted below, examples in each course's `projects/`).** The open "Next" item below. Same format as the other courses (`projects.yml`, an `example` page drawn as the picture, 3–4 `uses` ids from `CONCEPTS.html`, which already has every DOM, Vue and Bootstrap id). DOM and Vue use `playground: dom` (already working in the micro:bit crossover); Bootstrap uses `html`. Each brief is chosen to differ from that lesson's own Make task (tip calculator, shopping list, quiz, to-do app), so a project is never a repeat.

*The DOM and the browser console* (4):
1. **Light, dark and big text** (after dom-style; `js-query`, `js-event`, `class-list`). "Give a page you've made three buttons: light, dark and big text. Each one switches a look on or off." Milestones: each button changes something you can see; pressing it again switches it back; the page still reads well in every look. Stretch: a theme of your own; remember the choice (after Saving between visits).
2. **Flashcards** (after dom-list; `input-value`, `create-element`, `class-list`). "Type a question and its answer, add it as a card, then click a card to flip it." Milestones: adding makes a new card; clicking flips it to the answer and back; an empty box adds nothing. Stretch: a shuffle button; a count of cards.
3. **Pick your own path** (after dom-state; `js-event`, `text-content`, `js-query`). "A short story where the reader picks what happens next. Two buttons, and the words change with every choice." Milestones: three places in the story; one ending you can reach two ways; a Start again button. Stretch: a score or an item you carry; a picture that changes too.
4. **A habit tracker that remembers** (after dom-save, optional; `local-storage`, `create-element`, `json-data`). "Tick off a habit each day. Close the page, open it again, and your ticks are still there." Milestones: ticks show on the page; they're still there after Run again; a Clear button starts fresh. Teacher note: the preview's saved data is the per-step stand-in, so "close and reopen" means Run again.

*Apps with Vue* (3):
1. **Class poll** (after vue-events; `vue-ref`, `vue-text`, `vue-on`, `vue-if`). "Ask a question with three answers. Each click adds a vote, and the leader shows on top." Milestones: every button counts; the totals update by themselves; a message shows once someone has voted. Stretch: a Reset button; a bar for each answer using `:style`.
2. **Reading log** (after vue-computed; `vue-for`, `vue-model`, `vue-computed`). "Keep a list of books with a rating. A box filters the list as you type, and a line shows how many you've read." Milestones: books show from a list; adding one works; the filter and the count are both computed. Stretch: sort by rating; hide finished books.
3. **Card gallery** (after vue-components; `vue-component`, `vue-props`, `vue-for`). "One card component, used for every item in a gallery: pets to adopt, players in a team, places to visit." Milestones: the card is written once; each card gets its data through props; adding an item to the list adds a card. Stretch: a Favourite button on each card.

*Pages with Bootstrap* (2):
1. **A page for a local business** (after bs-components; `bootstrap`, `bs-component`, `bs-grid`). "A one-page site for a café, a bike shop or a vet: a navbar, a big opening line, a card for each thing it offers and a contact form, all from Bootstrap's classes." Milestones: navbar and cards from Bootstrap; the cards sit in a row on a wide screen and stack on a narrow one; every form box has a label. Stretch: an alert for this week's special. (Changed from an event page after the real-world register.)
2. **Bootstrap, your way** (after bs-yours; `bootstrap`, `css-rule`, `class-selector`). "Take your landing page and make it look like yours, not like Bootstrap: your colours, your font, one component styled your own way." Milestones: your rules come after Bootstrap's link; at least three changes you can point to; it still works on a narrow screen. Teacher note: the same comparison as bs-yours, now on the student's own page.

*Order of work if agreed:* write the nine examples first (each must use its listed skills, which validate checks), then the YAML, then a build and a headless look at each projects page and its skill chips (the DOM playground must report its code for the chips to light).

## Built (12 Oct 2026, Matthew agreed): recap and open projects for code

Maths and science have recap pages (`recap: true`, roadmap/shared.md). For code, recalling an idea is not the same as using it, so the plan has two parts that do different jobs:

1. **Recap (cheap).** All 162 code lessons already have `exit:`. Turn on `recap: true` for the foundations courses (Python, HTML & CSS, micro:bit, Arcade) once each exit question has been checked to stand alone, as maths did. Use it at the crossings between courses: Python to Gradio or the console bridge, HTML to Bootstrap or the DOM, micro:bit to Robotics.
2. **Open projects (the main value).** A Projects page per pathway (`<subject>/paths/<id>/projects/`, or a course flag) with 4 to 6 loose briefs. Each brief has:
   - a goal and one picture of a possible result (never the code)
   - "You'll use" chips linking to recap cards, so recap is where a stuck student goes
   - 2 or 3 milestones students tick themselves, and "make it yours" stretch ideas
   - no code checks (a reflect check at most)

   This is the step after Make and the challenge units, with less support. It stays apart from "large projects belong to the teacher": these are small, self-paced briefs, and bigger ideas stay in For teachers. Python and Web first. MakeCode's Showcase, Patrol and Tripwire already work much like open briefs.
3. **Coach prompts: off for code.** An AI is likely to write the solution. If wanted later, use a stricter prompt (no code, ask a question back) and test it in Copilot first.

**Where projects live (agreed 12 Oct).** Each brief is written in a course (`content/code/<course>/projects.yml`) and shown in three places:
- a Projects chip on the course page, beside Playground, Reference and Recap
- a side branch on the pathway trail just after that course, which never blocks the main route
- gathered for the whole pathway in its "List for teachers" view, and listed in the course's teacher guide beside its primers

A brief that needs two courses belongs to the later one. Why not a pathway page alone: the "You'll use" chips link to course recap cards, and one long page would mix briefs for students at very different points.

**A project is a self-assessed achievement (discussed 12 Oct).**
- **Milestones.** The student ticks them ("it runs", "it does the goal", "I added my own idea"); nothing is marked.
- **Evidence chips.** Worked out from the code by the concept scan: "You built it with: functions with parameters · a list · an `if` inside a loop". A brief lists only 3 or 4 skills. The wording is "you used", never "you still need", so students aren't pushed to cram in constructs.
- **A short reflection,** such as "the hardest part was…".
- **A badge,** kept apart from lesson progress (it shows on the course page and the trail, not in "Done").
- **A "Show your teacher" card** (badge, skills, reflection, Download), because progress is per browser.

**No new playground features.** Every playground already reports its code to the page. The page embeds the course's playground as a step and runs `conceptsIn(code, language)` on each report. That function moves into a pure `concepts-core.mjs` the build copies to the site, as `python-errors.mjs` is. One thing to check: a Python project with modules must report every tab. These are shared changes (`build-site`, `lesson-view`, the scanner split), so they get a roadmap/shared.md proposal before building.

**Crossovers (later, a small set).** For example, a micro:bit and a web page:
- one page, a playground per part, chips combined
- lives in the course after both halves (micro:bit and the computer), and shows on both trails
- needs a small `microbit.js` helper in `media/` (`connect()`, `onLine()`), labelled as a recipe
- the sandboxed preview probably can't use Web Serial, so the real version is downloaded and opened in Chrome (`tier: typical`), and a "pretend micro:bit" button sends lines in the playground

**Decided and built (12 Oct, "build it now"):**
- Briefs are `projects.yml` per course, with examples in `projects/` (AUTHORING › Open projects).
- Badges never count towards Done.
- The reflection shows on the Show your teacher card.
- Recap shipped with the exit-question check (four questions that leaned on their lesson rewritten: turtle-catch, turtle-decisions, microbit-duel, microbit-reaction; their clips re-record).
- `microbit.js` is ours (`web-helpers/`), not a site like MakeAIRobots, so the pages students make keep working from a downloaded file.

**What exists:**
- Python Foundations: Pattern maker. Python functions and events: A street of your own, Chart your data, Click-and-key art, Your own game.
- HTML & CSS: A page about something you love, A recipe card, An event page, An order form.
- micro:bit and the computer: A live dashboard (crossover: MakeCode and a DOM page with `microbit.js`).
- micro:bit Foundations: Plant monitor, The answer machine. micro:bit: talk and play: Quiz buzzer, Your own micro:bit game. (Pocket pet became Foundations' final challenge.)
- Arcade Foundations: Treasure hunt, Escape. Arcade advanced skills: Defender, Your own Arcade game.
- Recap on for Python, HTML & CSS, micro:bit and Arcade.

**Next:**
- Briefs for the DOM course, Vue and Bootstrap.
- MakeCode examples were written without the live editor (the sandbox cannot reach it): the first publish draws their pictures, and a failed one shows in `_pictures/makecode-out/failures.txt`.
- Try the badge and the Show your teacher card with a class.
- Test `microbit.js` with a real micro:bit in Chrome (the sandbox has no USB).

## Built (12 Oct 2026, Matthew agreed the direction): Web pathway after the DOM

*Status (26 Oct audit): all four items are built (Bootstrap, Vue, vue-compare, dom-fetch), as each item says. Heading said "Proposed …; not built".*

The plan keeps "build it yourself, then meet the real tool": students hand-build components (HTML & CSS) and state (DOM lesson 6) before a framework does the same work for them. Everything runs in the browser with no build step, and every library is hosted on our site.

1. **Bootstrap** (built 12 Oct, see Courses; extension after HTML & CSS; about 3 lessons). Rebuild the club page's navbar, cards and form with Bootstrap classes, compare it with the hand-built CSS, then customise it.
   - Bootstrap's CSS is hosted under the HTML playground's media folder, so the HTML playground works unchanged.
   - Checks use `contains` on class names.
   - Why Bootstrap rather than Tailwind: it reads easily for beginners, and its class names map onto the components students already built by hand.
2. **Vue** (built 12 Oct, see Courses; extension after the DOM course; about 5 lessons, Years 10+).
   - Lessons: data and `{{ }}`, `v-if` and `v-for`, events, `computed`, components with props, then a small app (the quiz or a to-do list).
   - Teach the **Composition API** (`ref`, `computed`), because it is the closest to React hooks and Svelte's patterns.
   - The no-build version of Vue (about 150 KB) is hosted on our site. It probably runs in the DOM playground, with `<script>` loading it.
   - The hard part: when the page updates, and keeping derived values in `computed`.
3. **Same app, three frameworks** (built 12 Oct as `code/vue/vue-compare`; an optional last Vue lesson). The same small app in Vue, React-style (Preact with htm, about 5 KB) and Svelte (its compiler in the browser, about 1–2 MB, loaded only by this lesson).
   - The point: components, state, derived values and events are the same ideas in all three, and only the syntax and update rules differ.
   - React's update rule (`setState`, and replacing values rather than changing them) is named as the thing that catches people out.
   - Angular is left out: it needs TypeScript and a command-line toolchain. AngularJS is dead (support ended in 2021).
4. **`fetch` and APIs in JavaScript** (built 12 Oct as `code/dom/dom-fetch`; an optional DOM lesson). Load JSON, show it on the page, and fall back to a saved copy when the network fails, as Data detective does in Python.

## Built (12 Oct 2026, Matthew agreed): the end of the Web pathway, with or without a framework

Every route through the Web pathway (hand-built pages, Bootstrap, the DOM, Vue) ends in the same optional steps. They teach no new framework and work on whatever page the student already has.

1. **Saving between visits** (optional DOM lesson 10, `code/dom/dom-save`). Plain `localStorage`: save a list or score as JSON when it changes, load it when the page opens, and start fresh when nothing is saved. The teacher notes show the Vue version (`watch` the list and save it), for students coming from the to-do app.
2. **A new course, "Your site, for real"** (`code/site`, extension, `after: [code/html]`, so every route reaches it; 2 lessons, bring your own page):
   - **Pages for everyone:** headings as the page's outline, `alt` text, labels joined to their boxes, link text that says where it goes, contrast; then a five-minute test with a classmate and fixing the top three problems. Works the same on a hand-built page, a Bootstrap page or a Vue app.
   - **Put it online:** "you have a website; here is how it goes online". A site is files in a folder: download the page, put its pictures and library files (`vue.js`, `bootstrap.min.css`) beside it, make every path relative, open it from the computer to test, then publish. Publishing itself is teacher-led (accounts): GitHub Pages, Netlify Drop or the school's own server, each in the teacher notes with the account and privacy questions. That step is `tier: typical`, so classes without accounts can complete the course.
3. **Playground change (code chat's own files):** a **Download** button in the HTML and DOM playgrounds. It saves the page as `index.html` (wrapped in a full HTML page if the code has no `<!DOCTYPE>`) and lists the files the page uses from beside it (pictures, `vue.js`, `bootstrap.min.css`, `weather.json`), each with its own download link. Every HTML and DOM clip already records again at the next publish, so this adds no cost.

**Parked: Node.js.** It does not run in a browser. StackBlitz's WebContainers is proprietary, heavy, and needs security headers GitHub Pages cannot set. Local installs or online editors need accounts. Flask already teaches servers and APIs, and schools generally prefer Python. Revisit only if a school wants a JavaScript-only path.

## Pilot (12 Oct 2026, on main): concept lessons, then PRIMM on a bigger program; class plans

Class plans (AUTHORING › Class plan) put votes, playing turtle, jigsaw reading and show-and-tell on the deck; Modify and Make stay self-paced on the site. Lessons 1 and 2.5 have class plans; their extra Investigate checks moved to the slides. Next: the same pass over the whole Python pathway, split across chats.

### Original pilot notes: concept lessons, then PRIMM on a bigger program

Question: is full PRIMM on every small snippet the best use of it? Research behind PRIMM (Block Model, tracing before writing, expertise reversal, faded worked examples) suggests short explicit concept lessons, then one full PRIMM on a longer program that combines them, where Investigate can ask about parts and how they connect. Piloted on the Drawing unit:
- **1 Drawing with a turtle** (concept, 40 min): Predict now asks what the loop draws, with options that are wrong ideas of a loop (only the first line repeats, it runs once, nothing because `i` is unused; misconception `loop-body-indent`). Investigate keeps line counting, the counter trace and the heading question, and adds an indent bug task. Make is a staircase (find the repeating part, write it once), replacing the house, whose roof was angle work. The tiles example moves to lesson 2.5.
- **2 Variables and operations** (concept, 45 min): the corner trace is dropped (lesson 1 owns the full turn).
- **2.5 A street of houses** (new, `turtle-street`): a build-along clip (captions name each part: name the numbers, move to the start, one house, step along, work out the length), then PRIMM on the 30-line program. Predict a change (5 houses: 380); Investigate matches parts to jobs, traces where houses start, follows a change to `width`, asks why a line is needed, and a bug that hides while `houses` is 4 (`count-wrong-variable`); Modify six houses, growing houses, is the length still right; Make adds a part with its own loop and variable. Introduces nothing new.
- Watch-then-PRIMM: a worked example (the build clip, segmented with subgoal captions), then reading and changing the result. Not yet tried with a class. If it works, repeat per unit (Catch already plays this role for the challenge unit).

## Parked

- Pygame: only after a prototype proves the in-browser runtime. microStudio covers games for now.
- Blockly.
- Auto-closing tags in the HTML playground; a student view link for unpublished lessons.
- MakeCode tutorials as a lesson option (`try.tutorial`). `?tutorial=` already opens built-in and GitHub tutorials in our embed.
- **Hiding blocks (toolbox filters), decided 12 Oct: not per step.** Hidden blocks make later tasks confusing, our editor would differ from the MakeCode students use elsewhere, and every step's list would need upkeep against an unversioned API. If hiding blocks is wanted (say after class trials show overwhelm), it comes through tutorials: a MakeCode tutorial limits the toolbox to the blocks its own code uses, so a tutorial as a lesson option (above), for a guided Make or a first lesson, is the way.
- An Arcade "Worlds" unit (tilemaps); a picture of the robot arena.

## Log
- 25 Oct: SQL playground built (sql.js; roadmap/shared.md) and the first three lessons of `content/code/sql/` (look inside a table, WHERE, ORDER BY and LIMIT; music library in `data/sql/music.sql`); on the Python pathway after Data detective. Lessons 4 to 10 added (count and add up; GROUP BY; join, with an artists table in music.sql; INSERT; UPDATE and DELETE; design a table; link tables with keys, with a reviews table). The SQL-only part is complete at 10 lessons. Lesson 11 `sql-python` (SQL from Python: `sqlite3`, loop over rows, `?` placeholders) uses the existing Python playground with `music.sql` as a lesson file (`files: ["../../../../data/sql/music.sql"]`), so no playground change was needed (`sqlite3` runs in the vendored Pyodide, tested in the browser). Lesson `flask-database` (optional, last in the Flask course, unit A database behind the app: `club.db` with `sqlite3`, committed changes, `?` values; tested in the playground: the file persists across Run and reload). Optional Gradio lesson `gradio-scores` (a quiz with a scoreboard in `scores.db`; pandas labelled a recipe; tested in the playground). The SQL, Flask and Gradio database work is done. Needs the full publish.
- 25 Oct (Matthew asked): pandas taught properly. Built: Data detective lesson 3 `data-pandas` ("The same job in pandas": `read_csv`, `.mean()`, `.max()`, `len`, filter with a test; introduces pandas; the dashboard now assumes it; later lessons renumbered 4 to 7). numpy: no lesson uses it (only pandas and scikit-learn use it underneath), so no numpy lesson for now; add one only if ML gains array work. `gradio-scores` still labels pandas a recipe because the Gradio course does not depend on Data detective.
- 25 Oct (from the Digital systems chat): code crossovers (micro:bit counter, radio packets, data logger) are code projects and belong in this chat's `projects.yml`, not in the Digital systems briefs sheets. Built 25 Oct: three more crossover briefs in `content/code/microbit-computer/projects.yml` (A press counter, Watch the radio packets, A data logger), each a MakeCode part plus a DOM page using `microbit.js`; examples in `projects/`. Content only (publish-lessons or quick-publish paths carry it). Also: the `publish-lessons` branch has a stale tip, and it cannot be force-pushed without Matthew's say-so.
- 25 Oct: SQL and databases proposed (Flask first, Gradio later, Supabase as a mention); `sqlite3` checked in the vendored Pyodide.
- 25 Oct: 31 more `smaller:` lead-ins on the Make steps of the foundations courses (Python Foundations 3, Python functions 1, Console 7, HTML 11, CSS 9), one question or number on the idea the step turns on, each opened, answered and ticked in a headless test. Rule used: Make steps only, never Predict, never open or challenge tasks with no check; Modify steps skipped (guided). Left: MakeCode courses (about 100 Make steps), the extension courses, and Make steps with tasks.
- 25 Oct: voice pass over the extension courses (Objects, Deeper, Data, Gradio, ML, Flask, p5.js, DOM, Vue, Bootstrap, Your site, Games): no stock phrases or exclamations in student text (every `!` is program output); seven hooks rewritten where four Objects hooks and three "everything you have learned" hooks repeated one shape. `check-html` passes with the four new Web steps.
- 25 Oct: four Web "Change a …" steps, the first in the HTML, CSS and DOM courses: a bus timetable (Tables), a recipe (Lists), a price tag (Boxes) and a bill splitter (Inputs), each with a solution region and code check. All are inline code blocks in `lesson.md`, so no clips re-record. Web had none; the register's Web rows are the thinnest left (`roadmap/code-real-world.md`).
- 25 Oct: five more project briefs (Console: a quiz game, a fortune teller; p5.js: a night sky, bouncing balls, a pattern maker), 34 in 15 courses, with pictures drawn and the pages loading clean. The projects tool now draws Console transcripts (brief `answers:`) and p5 sketches (built by Code; roadmap/shared.md). Needs the whole-site publish.
- 25 Oct: eight more `smaller:` lead-ins (turtle-grow, every-other, for-each, functions, buttons, decide; console-while, console-total), all in the built pages with the fold above the hints; Objects project briefs (a turtle race, an aquarium) with pictures drawn. 
- 25 Oct: real-world fixes from the register: a "Change a …" step in If and else (fridge thermometer, pointing back to the micro:bit alarm), Every other (zebra crossing), Lists (medal podium) and For each (rainfall chart), whose new starter regions re-record those four lessons' clips once; seven Web Make tasks moved off clubs and events (a place, a booking form, a sport or band, a shop card, a sports team, a trophy cabinet, a local walk); 59 formulaic hooks rewritten across Code (five that gave away their Predict answer fixed); Arcade's second firework show now says it's the Foundations one again; scoreboard thread lines in Console Running total and DOM Keep score.
- 25 Oct: nine project briefs built (DOM 4, Vue 3, Bootstrap 2), every skill chip lit from its example in a headless test, pictures drawn; the ideas-across-pathways teacher page (`/teach/code/ideas/`).
- 25 Oct: first three `smaller:` lead-ins (turtle-decisions Make, turtle-parameters Make, console-check Modify), tested headless: fold above the hints, each answers and ticks, keys end `~smaller`, nothing in the manifest, full screen shows the pointer line only. turtle-parameters gained a `no-turn` region, so its clips re-record once.
- 25 Oct: real-world examples register (`roadmap/code-real-world.md`) and six proposals; Bootstrap brief moved from an event page to a local business.
- 25 Oct: voice pass on Web (every Predict's "Read the code.", Course A/B names in lessons and primers, one Mix it up) and three leftovers (Python functions, CSS, Objects); MakeCode prose read, no changes. CLAUDE.md: pathways and HTML & CSS lines brought up to date.
- 25 Oct: voice pass over Python Foundations, then the same patterns in Python functions and events and Console (11 lines)' lesson prose (Predict intros, bug-task and Mix it up lead-ins, the Course A/B names); `lesson.md` only, no clips re-record.
- 25 Oct: reply to the shared `smaller:` proposal (Proposed); Courses block brought up to date (Python split into two courses, console 11 lessons and foundations, HTML & CSS split, DOM 10).
- 12 Oct: micro:bit and Arcade project briefs (8); MakeCode brief pictures drawn by the simulator.
- 12 Oct: open projects (10 briefs, self-assessed badges, skills lit by the concept scan), `microbit.js` with a pretend micro:bit, recap on four foundations courses.

- 12 Oct: per-step MakeCode toolbox filters parked; hiding blocks, if wanted, comes through tutorials (Parked).
- 12 Oct: Python Foundations lesson 8, Functions that decide (the lists and `if` revisit); later lessons renumbered 9 to 15 (slugs unchanged, so progress keeps).
- 12 Oct: Saving between visits (DOM lesson 10), Your site, for real (2 lessons), and a Download button in the HTML and DOM playgrounds.
- 12 Oct: Data from the web: fetch (optional DOM lesson 9). The four web proposals are all built.
- 12 Oct: Apps with Vue (6 lessons + optional Same app, three frameworks); the DOM playground loads local libraries with CORS and gives Vue hints; `check-html` also walks the DOM and Vue courses.
- 12 Oct: Pages with Bootstrap (3 lessons), with a nod to Bulma, Tailwind, daisyUI and Pico (Matthew's request); `vendor/web/` and the shared changes in `shared.md`.
- 12 Oct: `struggle:` notes for all 63 MakeCode lessons; every code lesson now has one (`npm run effort` is clean for code).
- 12 Oct: effort audit for Python Foundations, the console bridge, Objects, Deeper Python 1 to 5 and HTML & CSS (40 `struggle:` notes; 17 first hints now point at the idea, with the code as the next hint); two overflowing deck slides fixed (Robotics Drive, Python Variables).
- 12 Oct: voiceover for the 19 clips in p5.js, DOM and Games (`af_heart` at 1.1; `say:` lines read code aloud). Timed with the test voice: 24 to 32 s.
- 12 Oct: Games with microStudio gets a Playground, Reference and three clips; this file is rewritten (history archived).
- 11 Oct: DOM course; p5.js course with Reference, pictures and clips; Data detective, Web apps with Flask, Apps with Gradio, Machine learning, Deeper Python, Objects, the console bridge, the Python playground, Check your school.
- 10 Oct: Robotics, micro:bit and the computer, AI robots, Secret messages, the MakeCode hidden-assumptions scan.
- 9 Oct: HTML & CSS, micro:bit Foundations, the MakeCode playground, Arcade written.

## Done (25 Oct 2026, Matthew approved the first pass; touches shown, labelled): general coverage of Digital Technologies Processes standards

**Built:** `data/curriculum/code-coverage.yml` (read by `tools/coverage.mjs`) lists main-focus and touches courses per standard. It shows on the standard's pointer page ("Covered in these courses", with a note that touches may not be a course's main focus and could be extended), on its waypoint pages, in search results, and as a "Standards, in general" line on each Code course's strip. Edit the yml to move an entry; the build fails if a course path is wrong. The table below is the first pass and may drift from the yml, which is the source.

**Idea (Matthew):** don't tag lessons to standards one to one. Say which courses and pathways *generally cover* a standard. Only 6 of 206 Code lessons carry a `node:` today, so a Code teacher who finds a standard sees almost no lessons under it.

**How it would work once approved:** a small data file (`data/curriculum/code-coverage.yml`: standard code → `core:` and `touches:` course paths). The standard's page and the search result then say "Covered in: Python functions and events (main focus), Micro:bit: talk and play (touches)", and a course's strip can list the standards it generally covers. No lesson-level claims. Standards with nothing listed say so plainly.

**Drafted from the course titles and summaries only; I have not read the lessons.** Main focus (`core`) means the course is built around it; `touches` means it comes up but isn't the point. Years 7–8, then 9–10. Years 2–6 standards are outside the site's band.

| Standard | Main focus | Touches |
|---|---|---|
| 8P09 Programs with functions | python-functions, microbit-play | python-foundations, console, arcade-advanced, p5, dom |
| 8P06 Trace algorithms to predict output | every Code course (the Predict step) | |
| 8P05 Nested algorithms (flowcharts, pseudocode) | | python-foundations, microbit, arcade (nesting yes; flowcharts and pseudocode not checked) |
| 8P01 Acquire, store, validate data | data | deeper, flask, dom (JSON) |
| 8P02 Analyse and visualise data | data | ml |
| 8P03 Model structured data | objects, deeper | data |
| 8P07 Design the user experience | site | html, css, bootstrap |
| 8P04 Decompose problems, user stories | none in Code (Engineering design briefs) | |
| 8P08 Generate and evaluate designs | none clear | bootstrap (compares with the hand-built page) |
| 8P10, 8P11, 8P12 | none in Code | |
| 8P13, 8P14 | already tagged in How computers work | |
| 10P09 Modular programs, OOP, data structures | objects | games, vue, p5, flask |
| 10P06 Validate against test cases | data | deeper |
| 10P05 Algorithms with logical operators | | microbit, arcade, python-foundations |
| 10P01 / 10P02 Data | data | flask (API), ml |
| 10P03 Entities and relationships | | objects, deeper |
| 10P07 Prototype the user experience | | html, css, bootstrap, vue |
| 10P11 Interactive content for diverse audiences | dom, site | p5, vue |
| 10P04, 10P08, 10P10, 10P12 | none in Code | |
| 10P13, 10P14 | already tagged in How computers work (microbit-security touches 10P13) | |

**Pathway roll-up (generated from the courses):** Python mainly covers functions, data, structured data and OOP; Web covers user experience, interactive content and JavaScript functions; MakeCode covers functions, decisions and logical operators, with radio and security touching threat models.

**Gaps worth knowing (honest, not failures):** user stories and decomposition (4), alternative designs (8), evaluation against future impact (10), agile project management (12) and spreadsheets and databases (1, 2) are not Code's job as built. Engineering and a possible Design and Technologies subject are the likelier homes.

**To approve:** the table (move any entry), and whether "touches" is worth showing at all or only "main focus".

### Review sheet for teachers (25 Oct 2026, built)
`tools/review-sheet.mjs` makes `/teach/code/review/` (printable page) and `review.md` (Prepare Print Markdown), generated from `code-coverage.yml`, the courses' years and `after:`, so it cannot drift. Three tables: courses (Use, years you use it), standards (our focus and touches against Agree, Should be focus, Wrong) and the standards no course covers (Yes, I cover it another way / Gap). Linked from the Code subject page and the teacher guide index; in search. Same idea as the science practicals checklist (which science has since folded into its For science teachers page). Not yet given to any teacher; when sheets come back, fix `code-coverage.yml` and the course years. Needs the full or quick publish.


## Optional items done (25 Oct 2026)
- SQL: Reference page (`snippets/sql.json`, `code/sql/reference`) and explain clips for ten SQL lessons (each declares `app:` on ports 8190–8199, so `render.mjs` is untouched). `sql-insert` test-recorded fine. Needs a full publish (snippets and build code are outside `content/`) and a record run for the clips.
- Data detective: optional `data-numpy` (unit read, order 8) and a `numpy` construct in `tools/concepts-core.mjs` (full publish for the tool; the lesson alone can go by publish-lessons). Pyodide already vendors numpy as a pandas dependency, and `loadPackagesFromImports` loads it, so the worker needed no change.
- Self-hosting MakeCode, trial result: `pxt-core` (13.2.13, MIT) and `pxt-microbit` (9.1.1) install from npm, but `pxt-microbit` ships only docs, simulator and CSS: no `libs/` and no built editor. A static editor needs the target's `libs/` from GitHub (403 from this sandbox), so a local build is not possible here. Option left: build it once in GitHub Actions (which can reach GitHub) with `pxt staticpkg` and cache it as a build artifact.
  - **Second trial (25 Oct, evening):** `git clone` of public GitHub repos does work from the sandbox (the 403 was another route), so `pxt-microbit` v9.1.1 with `libs/` cloned and `npm install` worked (with `PUPPETEER_SKIP_DOWNLOAD=1`). `pxt staticpkg` then built every lib but failed at the compiler test: the native hex comes from MakeCode's cloud compiler at `www.makecode.com`, which the sandbox cannot resolve. So the build has to run in Actions. Also: run `pxt-core`'s CLI (`node node_modules/pxt-core/built/pxt.js`), not `npx pxt` (an unrelated package), with `node_modules/.bin` first on PATH (a global TypeScript 6 broke the sim build).
  - **Test workflow:** `.github/workflows/makecode-static-test.yml`, manual only, touches no branch. One job per target, micro:bit (`pxt-microbit` v9.1.1) and Arcade (`pxt-arcade` v4.2.1, same build recipe). Each builds its editor (artifact `makecode-<target>-static`, 90 days), serves it on localhost (mapping `/--docs`, `/--run`, `/--embed`), blocks the makecode.com hosts in `/etc/hosts`, then runs `render-pictures` with `WP_ONLY=makecode`, `MAKECODE_RENDER` and `MAKECODE_EDITOR` into a scratch folder for a set number of minutes. No code changes were needed: both overrides already exist. The run summary lists pictures drawn and the requests the static server could not answer. Not run yet.
  - `MAKECODE_RENDER` and `MAKECODE_EDITOR` are one URL for both targets, so each test job also draws the other target's programs with the wrong editor; the job keeps only its own target's pictures (Arcade lesson blocks found by id, as render-pictures names them). For real use the overrides need to be per target. Those lines are inside the makecode and makecode-out draw functions, so changing them changes both sections' hashes and redraws every MakeCode picture once (350 blocks plus the output pictures; tens of minutes).
  - **Result (25 Oct, evening):** micro:bit self-hosting works. In Actions, `staticpkg` builds in about a minute (its sim TypeScript errors in the log do not stop it) and the editor draws pictures with makecode.com blocked (blocked hosts in `/etc/hosts`). Against the live site: blocks 291 of 305 identical, 13 differ in size by 2 to 12 px, 1 differs in 5% of pixels; simulator pictures 1 of 35 identical, 8 within 0.5%, 26 about 6% different (not investigated: simulator version or animation timing). Pushed to the orphan branch `makecode-editor` (247 MB, largest file 4 MB, pxt-microbit v9.1.1, pxt-core 13.0.1) with `serve.mjs`, licences and a README, then cloned and used in the sandbox: 120 pictures drawn in two minutes with makecode.com unreachable. Usage and caveats are in CLAUDE.md › Publishing › Self-hosted micro:bit editor.
  - **Arcade (not possible as tried):** its simulator is the separate repo `microsoft/pxt-arcade-sim`, checked out by Arcade's CI with a secret deploy key (anonymous access refused; the npm name is a security placeholder), so `staticpkg` stops at `scandir 'public'`. An empty stand-in gets further, then the build fails at "hex file is not available" (the log's last lines did not show which step; not diagnosed). In the test workflow Arcade is `continue-on-error`. Arcade pictures stay with arcade.makecode.com in the publish workflows.
  - **Open:** `MAKECODE_RENDER` and `MAKECODE_EDITOR` are one URL for both targets (see above), so a self-hosted run draws Arcade programs with the micro:bit editor; per-target overrides would change the makecode and makecode-out hashes (every MakeCode picture redraws once), so they are not done. The simulator pictures' 6% difference is worth a side-by-side look before anyone relies on them.
  - Expected gaps: extensions such as `microbit-robot`, fetched through makecode.com's API at run time. The publish workflows are unchanged; they still use makecode.com.
