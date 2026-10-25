# ICT skills (`content/ict/`)

Started 25 Oct 2026 (Matthew asked). Plan and decisions: the Project doc `claude/digital-literacy-pathway-plan.md`; handoff: `claude/handoff-digital-literacy-pilot.md`.

## What it is
General ICT skills for students and for teachers of any subject, as its own subject (not Digital Technologies, so tool training is not taught as DT). Mapped loosely to the ACARA Digital Literacy general capability, which is not in Kit's node data (checked 25 Oct): at pathway level only, showing "main focus" and "touches", no per-lesson tags and no node derivation for now. Overlap with Digital Technologies nodes is named in text (for example AC9TDI6P07, AC9TDI8P11, AC9TDI8P01 and AC9TDI8P02, AC9TDI6P10 and AC9TDI8P14).

## Decisions (Matthew, 25 Oct 2026)
- Name: ICT skills.
- Concept first, tool second; core functions only, nothing that changes year to year (no pivot tables, macros, Copilot buttons); tool-agnostic with "in Excel / in Sheets" notes.
- Borrow or link existing resources (Microsoft Learn, Google Applied Digital Skills, typing tools) rather than rebuilding; touch typing is a link-out only.
- Pathways, in order: Working with data (spreadsheets, Years 6 to 8), documents and presentations, files and systems, investigating and judging information (workshop-style short lessons), staying safe and well (workshop-style).
- Pilot first: one lesson, tried with a colleague. If it works, continue with lessons 2 onward and the other pathways, proposing each pathway's plan for approval before building. If the widget or navigation does not work, stop and propose changes.

## Built (25 Oct 2026)
- `widget: sheet` (`playground-board/widgets/sheet.js`; AUTHORING › board widgets; `node tools/check-sheet.mjs` tests the formula engine and the copy, sort, filter and chart logic). With `table:` and `tools:` it also does Copy, Paste and Fill down (references shift like a real app's), Sort, Filter and a Chart.
- `content/ict/` (subject page, order 7) with the course `ict/data` (Working with data, Years 6 to 8), nine lessons, none with clips (no `app:`), so nothing to record:
  - Cells and formulas: **A formula keeps up** (cells have names, a formula uses them and keeps up, a typed answer does not), **Copy a formula** (a copy moves its names; fill down), **A cell that stays put** (`$` fixes a shared cell, such as g).
  - Summing up: **Add up a column** (SUM, a range is a colon), **Typical, smallest and biggest** (AVERAGE, MIN, MAX, ROUND, a typed 0 against an empty cell), **Count and decide** (IF, COUNTIF, quotes round words, `>=` against `>`).
  - Show the data: **Put the rows in order** (sort moves whole rows, filter hides), **Choose a chart** (column, line, scatter, pie; titles and axis titles).
  - Challenge **Report on an investigation** (beans in dark, shade and sun: summarise with formulas, chart the averages, pick a conclusion that matches the evidence).
  - Every lesson has the same shape: Predict, Try, Worked example (one planted mistake), Vary, Practise, Make and a `tier: typical` step in the school's own app. Data comes from Year 7 science (bean growth, weight and g, rainfall, animals, cooling water).
- Misconceptions: `typed-answer-stale`, `row-before-column`, `same-formula-every-row`, `fixed-cell-moves`, `comma-not-colon`, `zero-for-missing`, `words-need-quotes`, `sort-one-column`, `pie-for-change`.
- Tested 25 Oct: validate, build, `check-sheet.mjs`, every board check driven in a headless browser (each ticks with its intended actions), no sideways scroll at 390 px, `check-decks ict/`, `check-blockers` on the ICT pages.

## Next
- Matthew pilots the course with a colleague. After a publish (a new subject needs the full publish), check the Subjects menu, the subject page, search and the teacher guide.
- The other pathways in the plan, each proposed for approval before building: documents and presentations, files and systems, investigating and judging information (workshop-style), staying safe and well (workshop-style).
- Write the mapping file (pathway, Digital Literacy sub-elements touched, overlapping DT nodes) after checking element names against the ACARA v9 table (only "Practising digital safety and wellbeing" is confirmed so far).
- Later ideas for the data course: a lesson on reading someone else's sheet and finding its mistakes, a lookup lesson, and clip-free class data entry.
