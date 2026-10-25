# Roadmap: Before Year 7 (catch-up lessons for maths and science)

Its own chat and roadmap file (Matthew, 26 Oct 2026: build all 22 in a separate chat). Plan: Project doc `claude/before-year-7-plan.md`; handoff: Project doc `claude/handoff-before-year-7.md`. Approved 26 Oct 2026: build all 22, no two-lesson pilot first (the aim is a full suite to pilot).

## Status (26 Oct 2026)
- Built and pushed to main: all 22 lessons (10 science in `content/science/before-year-7/`, 12 maths in `content/maths/before-year-7/`), a Before Year 7 pathway on each subject page, and the "Catch up first" / "Leads into" links (shared change, see roadmap/shared.md). Not published yet: needs the full publish (tools changed, and every Year 7 page that links a catch-up lesson changes).
- Tried: validate, build, check-nodes, check-practice, every page loaded at 1280 and 390 px with no errors, every board setup loaded and its check variables confirmed. Not tried: answering every check by hand in a browser, check-decks (needs the network), a class.
- Lessons are single files (teacher block inside, no clips, no ports), so no re-recording.

## Decided (26 Oct 2026)
- Name in this file and the handoff: **Before Year 7**. Final student-facing name is the chat's first proposal (Before Year 7, Catch up, or similar), confirmed with Matthew before building.
- About 22 short lessons: 10 science, 12 maths, one idea each, 15–20 minutes, primer shape (Think first, The idea, Check, Apply), reusing Year 7 boards. Lesson list in the plan.
- They show as optional "catch up first" links before the Year 7 lessons that need them and on the Years 3–6 curriculum pointer pages.

## Decided (26 Oct 2026, with Matthew)
- A separate course per subject in its own small "Before Year 7" pathway (card on the subject page, own trail map, no `after:` edges into Year 7 courses). Year 7 course pages show a "Before Year 7" line. Links come from the lesson's `assumes:` naming the catch-up node.

## Open (for the chat to propose, then Matthew decides)
- Where the lessons live: a course inside maths and science each (e.g. `content/maths/before-year-7/`, `content/science/before-year-7/`), or one shared course.
- How the "catch up first" link is made (an `assumes:`/Builds on link, or a new field), and whether it touches shared tools (`lesson-view.mjs`, `trail.mjs`): if so, note it in `roadmap/shared.md` first.
- Kit fix: prior-knowledge links for the six Year 7 science standards (in waypoints-kit, not here).
- Second round (Year 8–9 roots: light, circuits, rocks).

## Log
- 26 Oct 2026: file created by the orchestrating chat.
- 26 Oct 2026: built and pushed the shared link change, then the science batch, then the maths batch (one push each).
- Notes for review: `find-the-missing-number` may overlap Year 7 Algebra (equation balance); the Kit data's prior-knowledge links for the six Year 7 science standards are still to fix in waypoints-kit; some check options still need a polish pass (longest option sometimes correct); `angles-on-a-line-and-at-a-point` uses the parallel-lines board only to pick angle pairs on a line.
