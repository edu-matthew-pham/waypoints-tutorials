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
7. **Playground pages** at `/code/python/playground/` and `/code/html/playground/`: full-height playground with a slim header (back to the path page, "Continue lesson" to the last lesson visited). A Playground card beside Reference on path index pages, and a Playground link in the lesson course bar. Own autosave, file tabs, My tools and shared modules. The toggle also serves students whose progress was lost (cleared data, shared laptop), so its label should say so: "Unlock all snippets (use this if your progress was lost)". Free play respects each student's unlock progress, with a quiet "Unlock all snippets" toggle in the playground header (and "Re-lock"), note: "Some snippets are for things you haven't learned yet." The toggle uses its own flag and applies only on the playground page, so it never unlocks lessons or counts as passing a check.
8. **"My progress" modal (and page):** opened from the course bar, the playground header and path pages. Per path: lessons with checks done out of total and a tick, snippets unlocked out of total with the next unlock and the lesson that earns it, counts of the student's own buttons and modules, and whether "unlock all" is on. The build writes a small `progress-manifest.json` (every lesson's checks and unlock ids); the modal compares it with `wp-progress` in the browser. Foundation for export and the certificate.

## Parked

- p5.js playground and lesson (the JS route before DOM work); Blockly; ML or pretrained modules.
- More foundations: conditionals (`if`), `while`, `random`, HTML links, images and CSS.
- Auto-closing tags in the HTML playground; a student view link for unpublished lessons.
- Custom domain setup (DNS and the Pages setting are on Matthew's side).
- Gradio clips need re-checking; HTML and Gradio paths need more lessons.
- Progress export and import (a short copy-and-paste code to move progress between browsers) and a printable certificate of current progress. A fun long-term idea; keep it account-free.
