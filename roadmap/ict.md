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

## Built (26 Oct 2026, overnight, Matthew approved building this pathway)
- `widget: page` (`playground-board/widgets/page.js`; AUTHORING › `widget: page`): a small document or slide deck. Styles and a headings panel, by-hand formatting against styles, lists and tables with a header row, page layout, slides (one idea each, breaks, titles), pictures drawn by the widget (no photos), alt text and credit lines, slide colours with a measured contrast ratio, and text that runs off a slide.
- `content/ict/documents/` (second pathway in `content/ict/index.md`), course `ict/documents` (Documents and slides, Years 6 to 8), nine lessons in five units, no clips: Structure (**Headings say what a part is**, **Change the style, not every line**, **Lists and tables**), Room to read (**Room to read**), Slides (**One idea per slide**, **Pictures that help**, **Readable from the back**), Whose is it? (**Whose is it?**: who, where and the licence, with pretend source cards and `.example` addresses), then the challenge **Report the investigation** (a one-page report, then three slides, on the bean results from Working with data). Same lesson shape as Working with data; each ends with a `tier: typical` step in the school's own app.
- Misconceptions: `fake-heading`, `restyle-by-hand`, `order-needs-numbers`, `list-for-table`, `cram-the-page`, `slide-is-a-page`, `decoration-picture`, `low-contrast`, `no-credit-needed-online`.
- Tested 26 Oct: validate, build, `check-sheet.mjs`, all 34 board checks driven in a headless browser (each ticks with its intended actions and none is true at the start), no sideways scroll at 390 px (pages and boards), `check-decks ict/documents`, `check-blockers` (also `--wide`).
- Known limits: the checks are rough counts (headings, steps, slides, words, contrast, alt text of three or more words, a credit with three parts); real apps check none of these, and the lessons and teacher notes say so. Contrast is the standard WCAG ratio; the 24-point rule is a rule of thumb. The credit lesson is general practice, not legal advice, and tells teachers to fit it to the school's own rules. Slides on a phone are small (the model scales to the width).

## Decisions (Matthew, 26 Oct 2026): lessons and cards
- ICT skills is its own subject with its own entry point: light courses plus cards. Other subjects may link in optionally (a lesson or card that says "needs this ICT skill"); maths, science and code lessons are left alone for now.
- A skill has a **lesson** (counts toward progress) and a **card** (reference: no ticks, one screen: the idea, steps that work in any app, a note for each common app such as Word, Excel, Docs, Sheets, a "watch for" line, and a link to the lesson). Both exist; search finds both.
- Each ICT course has a Reference page listing its cards (`<course>/reference/`, the Reference chip on the course page). Cards live in `content/ict/<course>/cards.yml` (`tools/ict-cards.mjs`, AUTHORING › ICT cards). Core functions only; app notes name menus that rarely change and always say other apps work the same.
- Files and systems is cut to about four habit lessons (names and folders, copy/move/delete, versions and backup, fix it first) with no new widget for now; they link to the concept lessons in How computers work.

## Built (26 Oct 2026): cards
- First batch: 8 cards for Working with data and 8 for Documents and slides, from their lessons. Pictures are not drawn yet (text only); whether widgets can be drawn through `render-pictures` is untested.
- Next: a "used in" list on a card (other subjects' lessons that need it) once a first subject links in; cards for the later pathways as each is built.

## Next
- Matthew pilots the course with a colleague. After a publish (a new subject needs the full publish), check the Subjects menu, the subject page, search and the teacher guide.
- The other pathways in the plan, each proposed for approval before building: files and systems, investigating and judging information (workshop-style), staying safe and well (workshop-style). Plans for all three are in the Project docs (see below).
- Matthew also pilots Documents and slides with a colleague. Ask in particular whether the alt text and credit rules in the board are too strict or too loose, and whether the Years 6 to 8 fit is right.
- Mapping file written 26 Oct: `data/curriculum/ict-digital-literacy.yml` (nothing reads it yet) and the Project doc `claude/ict-digital-literacy-mapping.md`. Element and sub-element names were checked against the Version 9 pages (two copies agree); only the Level 6 wording was read, so no level is claimed for the Years 5 to 8 pathways. Earlier drafts and the data course's `about:` used wrong labels; the ICT subject page now uses the Version 9 names.
- Later ideas for the data course: a lesson on reading someone else's sheet and finding its mistakes, a lookup lesson, and clip-free class data entry.

## Plans for the other pathways (26 Oct 2026, Project docs; none built, each to be approved first)
- `claude/ict-files-systems-plan.md`: Files and systems, Years 5 to 7, eight lessons on a new `files` widget (folders and paths, names, copy and move, cloud, versions, backup, fix it first, a rescue challenge). Open question: whether `shell.js`'s pretend filesystem can be shared.
- `claude/ict-investigating-information-plan.md`: Investigating and judging information, Years 5 to 8, eight workshops and a challenge on scripted sources only (no real sites judged), mostly existing check types; check `source.js` before designing a new widget.
- `claude/ict-safe-and-well-plan.md`: Staying safe and well, Years 5 to 8, seven workshops and a class agreement on made-up scenarios; needs a wellbeing review and a disclosure note; links to Cyber safety and privacy instead of repeating it.
- `claude/ict-documents-presentations-plan.md`: the plan Documents and slides was built from.
