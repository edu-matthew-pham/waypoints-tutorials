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
- `widget: sheet` (`playground-board/widgets/sheet.js`; AUTHORING › board widgets; `node tools/check-sheet.mjs` tests the formula engine).
- `content/ict/` (subject page, order 7) with the course `ict/data` (Working with data) and lesson 1, **A formula keeps up** (cells have names, a formula uses them and keeps up when a cell changes, a typed answer does not; bean-plant growth data; ends with a `tier: typical` step in the school's own spreadsheet app). No clips (no `app:`), so nothing to record.
- Misconceptions `typed-answer-stale` and `row-before-column`.

## Next
- Matthew pilots lesson 1 with a colleague. After a publish, check the Subjects menu, the subject page, search and the teacher guide.
- Lessons 2 onward (SUM and AVERAGE on a column, sort and filter, one chart), then the other pathways.
- Write the mapping file (pathway, Digital Literacy sub-elements touched, overlapping DT nodes) after checking element names against the ACARA v9 table (only "Practising digital safety and wellbeing" is confirmed so far).
- Search hints (`SEARCH_HINTS`) and the Teachers menu may want ICT entries once there is more than one course.
