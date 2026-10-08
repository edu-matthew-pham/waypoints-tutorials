# Proposed changes (not built yet)

Batched for the next "go". Newest decisions first.

## Next run

1. **Real-world steps take the task's name.** Drop the separate "In the real world" heading and pill (it appears twice in the sticky bar). The step's heading and pill become the task, e.g. "Modify a floor plan" or "Extend the house plan"; the real-world framing is implied by the task itself, and by the lesson hook and the For teachers panel. One real-world task per lesson stays, as a Modify of a small, complete example.
   - Affects: turtle-intro (tiles), turtle-variables (room plan), turtle-functions (house), turtle-parameters (floor plan), turtle-modules (street), html/first-page (add one), AUTHORING.md section 9.
2. **Functions III lesson** (later spiral): return values, functions calling functions, functions inside loops. Slots in after Parameters; renumber `order`.
3. **Mastery, not just the concept.** Functions I is the concept checkpoint; Parameters and Functions III are the repeated-use checkpoints. Make this observable with a code check type (for example "defines 2 or more functions", "calls `square` 3 or more times"), reported by the playground.
4. **Faded scaffolds on return visits:** a later lesson gives a blank file and a hint instead of a starter plus snippet.
5. **Pain demo for modules:** two programs need the same functions, copy them across, then fix a bug in one copy. Currently only loops and functions have the pain demo.
6. **Course bar above the sticky step pills:** `‹ prev` · `3 of 5 · Title ▾` · `next ›`, in the same sticky block. The dropdown lists the path's lessons with ticks (from `wp-progress`, per browser, no tracking) and a link back to the path page; a "Next lesson" card at the end of each lesson; collapses to dropdown plus arrows on phones. Open question: how a lesson with no checks counts as done (reaching its last step, or never ticked).
7. **Playground pages** at `/code/python/playground/` and `/code/html/playground/`: full-height playground with a slim header (back to the path page, "Continue lesson" to the last lesson visited). A Playground card beside Reference on path index pages, and a Playground link in the lesson course bar. Own autosave, file tabs, My tools and shared modules. Open question: respect each student's unlock progress (recommended) or unlock everything in free play.

## Parked

- p5.js playground and lesson (the JS route before DOM work); Blockly; ML or pretrained modules.
- More foundations: conditionals (`if`), `while`, `random`, HTML links, images and CSS.
- Auto-closing tags in the HTML playground; a student view link for unpublished lessons.
- Custom domain setup (DNS and the Pages setting are on Matthew's side).
- Gradio clips need re-checking; HTML and Gradio paths need more lessons.
