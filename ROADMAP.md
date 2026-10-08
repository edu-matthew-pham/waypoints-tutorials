# Proposed changes (not built yet)

Batched for the next "go". Newest decisions first.

## Done in the last batch

Real-world steps named for the task; Functions III lesson (`turtle-returns`) with a faded Make; code checks (`type: code`) on the function lessons; module pain demo; course bar and next-lesson card; playground pages with an unlock-all toggle (free play only); My progress dialog and `progress-manifest.json`.

## Proposed (discussed, not decided)

- **Better Investigate steps.** PRIMM Investigate is understanding code without changing it. Ours are mostly one multiple-choice question plus "try changing a number" (which is really Modify). Candidate tasks, lightest first: trace (numeric answers; several questions in one check), match or label lines, spot the bug, Parsons (reorder scrambled lines), critique. Code stays read-only and visible. Decide order: trace first, Parsons second.
  - Choose the tool from the **insight** the step should produce, not for its own sake. Example for "why loops": count the lines to draw a 20-sided shape, then predict how many numbers change if every side doubles (cost of change, two numeric answers). Mapping: repetition cost -> count and predict; how a loop or variable works -> trace table; what each part controls -> match or label; parameter or return -> predict a call; why code is wrong -> spot the bug; structure -> Parsons; tradeoff -> critique.
  - Check types to build: numeric answer (one or several per step), trace table (grid, auto-checked), match, spot-the-bug (click a line), Parsons. All static, per browser, no code execution.
  - Optional `insight:` line on a step stating the objective, shown in the For teachers panel and in authoring. If the insight cannot be written, the step probably should not exist.
- **Modify as a task ladder, with sub-pills inside the step.** Sub-pills ("1 · Change a value", "2 · Add a line", "3 · Extend it"); one task visible at a time, each with its own text, hint and optional code rule (or tick); pills tick as done; later pills open once the previous is done. One playground per step, shared across tasks, so code carries on from task to task; a task may set its own starter, plus "Reset to this task's start". The sticky step pill reads "Modify 2/3"; the step passes (and fires its unlocks) when every task is done. Allow the same `tasks:` structure on Make steps.

## Next ideas

- Teachers can set code-check rules from the create page (today they write the YAML).
- HTML code checks (for example `has: ul`) using the same message channel.
- More Python foundations: conditionals, `while`, `random`; then HTML links, images and CSS.

## Parked

- p5.js playground and lesson (the JS route before DOM work); Blockly; ML or pretrained modules.
- More foundations: conditionals (`if`), `while`, `random`, HTML links, images and CSS.
- Auto-closing tags in the HTML playground; a student view link for unpublished lessons.
- Custom domain setup (DNS and the Pages setting are on Matthew's side).
- Gradio clips need re-checking; HTML and Gradio paths need more lessons.
- Progress export and import (a short copy-and-paste code to move progress between browsers) and a printable certificate of current progress. A fun long-term idea; keep it account-free.
