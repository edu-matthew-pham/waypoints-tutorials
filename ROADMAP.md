# Proposed changes (not built yet)

Batched for the next "go". Newest decisions first.

## Done in the last batch

Real-world steps named for the task; Functions III lesson (`turtle-returns`) with a faded Make; code checks (`type: code`) on the function lessons; module pain demo; course bar and next-lesson card; playground pages with an unlock-all toggle (free play only); My progress dialog and `progress-manifest.json`.

## Done: Investigate tools and tasks

Tasks in any step (sub-pills, shared playground, "Modify 2/3" on the step pill); check types number, match, trace, bug, parsons; `insight:` for teachers; `uses` code rule; create page templates; Investigate and Modify steps in the six turtle lessons rewritten around stated insights.

## Proposed (discussed, not decided)

- **Predict checks, lock in then compare.** Predict steps can carry any check type, but graded-immediately feedback removes the reason to run. PRIMM design: the student locks in a prediction ("Lock in my prediction" button, cannot be changed afterwards, counts as done, no right or wrong shown), stored per step in the browser, and the Run step shows "You predicted X. It actually did Y." Good prompts: what is printed (new small `text` check), where the turtle finishes (x, heading; the playground already reports them), how many sides or repeats (number). Later: picture options; the playground reporting real output so a typed prediction can be compared without the author writing the answer.
- **Decisions (`if` / `else`) before functions.** New lesson 3, after variables and operations: checkerboard row with `i % 2 == 0`, a trace table of the loop counter, a spot-the-bug using `=` instead of `==`. Claims the existing `if-else` snippet. Order becomes: 1 intro, 2 variables, 3 decisions, 4 functions, 5 parameters, 6 returns (can use `if` in a function that decides), 7 modules.

- **Lists before functions; two blocks.** Control and data (sequence and loops, variables, decisions, **lists**), then abstraction (functions, parameters, returns, modules). Order: 1 intro, 2 variables, 3 decisions, 4 lists (create, index, loop over items, mix with `if`), 5 functions, 6 parameters, 7 returns, 8 modules; later a return visit to lists inside functions (take or return a list) and a strings lesson just before Gradio. Lists need only loops, variables and `if`, give decisions a second visit, and give functions data to work on.
- **Revisit if/else** later in a new context (a function that decides, `if` over a list, `if` inside a Gradio function), the same spiral as functions.
- **Python path beyond turtle.** Turtle covers sequence, loops, variables, selection, functions, parameters, returns and modules. Add **lists** (`for c in colours`, a second visit to `if`) and **strings** (`write()`, joining text) while still in turtle, then move to Gradio, where a function with a return value and an `if` becomes a clickable app and `import gradio as gr` is a module someone else wrote. Turtle stays as the foundations sandbox.

- **UI-based Python without a server: build the widgets (the iceberg idea).** Gradio Lite is no longer maintained (HF forum, Oct 2025); tkinter has no browser support that I found (not conclusive). Turtle has no widgets, which is the point: digital technologies is mostly the 90% under the visible UI, so students build buttons from scratch. Plan: (1) add events and input to the turtle playground (`onclick`, `onkey`, `ontimer`, text and number prompts); (2) lesson sequence: hit test (is the click inside this rectangle? uses Decisions), `draw_button(x, y, w, h, label)` (functions and parameters revisited), a click that changes a variable (counter, colour), many buttons via a list and a loop (Lists), package it as `ui.py` (Modules gets a real purpose), then reveal that Gradio's `Button` is this same code with the browser drawing and hit-testing; Make task: control panel, quiz or game menu. No in-house HTML widget module needed. (3) Keep Gradio as the real-world and ML endpoint, run on Hugging Face Spaces or locally. PyScript/Pyodide with the page's HTML is a heavier option that would tie the Python and HTML paths together.

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
