# Roadmap

Split by workstream on 11 Oct 2026 so separate chats can work at the same time (one each for code, maths and science) without editing the same file:

- [`roadmap/code.md`](roadmap/code.md): Python, Web (HTML and CSS) and MakeCode, including everything recorded here before the split.
- [`roadmap/maths.md`](roadmap/maths.md): maths lessons and boards.
- [`roadmap/science.md`](roadmap/science.md): science lessons and engines.
- [`roadmap/systems.md`](roadmap/systems.md): Digital systems (the Digital Technologies Knowledge and understanding strand: data representation, networks, security, hardware), added 12 Oct 2026.
- [`roadmap/engineering.md`](roadmap/engineering.md): Engineering (an elective STEM layer: mechanisms, physical computing with Arduino, CAD and fabrication, board design; 3D and animation parked for a later Digital Media / Design subject), added 12 Oct 2026.
- [`roadmap/learning-with-ai.md`](roadmap/learning-with-ai.md): Learning with AI (`content/ai/`: AI Foundations, Does AI Help Us Learn?, the Choosing AI tools guide), with `ai-review-fixes.md` (fixes still to do), `ai-tools-handoff.md` (tools work) and `ai-foundations-evidence-audit.md`. Added to this index 18 Oct 2026.
- [`roadmap/ict.md`](roadmap/ict.md): ICT skills (`content/ict/`: spreadsheets, documents, files and judging information, taught by the ideas every app shares; the `sheet` board widget), added 25 Oct 2026.
- [`roadmap/english.md`](roadmap/english.md): English (`content/english/`: Holding writing together, a cohesion course for Years 6–8 on the `cohesion` board widget, no AI marking), added 27 Oct 2026.
- [`roadmap/learning.md`](roadmap/learning.md): Learning skills (`content/learning/`: How you learn best, an optional self-regulated learning course, and strategy cards for any subject), added 27 Oct 2026.
- [`roadmap/before-year-7.md`](roadmap/before-year-7.md): Before Year 7, short maths and science catch-up lessons on the primary ideas Year 7 lessons rely on (its own chat), added 26 Oct 2026.
- [`roadmap/economics.md`](roadmap/economics.md): Economics and Business (`content/economics/`, not built yet; Year 7 AC9HE7K01 Scarcity and opportunity cost proposed, pace-agnostic), added 30 Oct 2026.
- [`roadmap/civics.md`](roadmap/civics.md): Civics and Citizenship (`content/civics/`, not built yet; rules in `shared.md` › Decided: humanities), added 30 Oct 2026.
- [`roadmap/geography.md`](roadmap/geography.md): Geography (`content/geography/`, not built yet; rules in `shared.md` › Decided: humanities), added 30 Oct 2026.
- [`roadmap/history.md`](roadmap/history.md): History (`content/history/`: Source origin and purpose, with a Before Year 7 catch-up; a Preview pilot; rules in `shared.md` › Decided: humanities), added 30 Oct 2026.
- [`roadmap/humanities-inquiry.md`](roadmap/humanities-inquiry.md): the shared inquiry-skills course for the four humanities subjects (not built yet), added 30 Oct 2026.
- [`roadmap/shared.md`](roadmap/shared.md): shared and general: the build, publishing, home and plain pages, and shared tools.
- [`roadmap/diagrams-plan.md`](roadmap/diagrams-plan.md): Mermaid diagrams across lesson parts, decks and worksheets (proposed 19 Oct 2026); the tools to follow it are in `shared.md` › Proposed: visual and quality tools.
- [`roadmap/maths-when-where-why.md`](roadmap/maths-when-where-why.md): the when, where and why of maths: a library of purposes and real situations per node (`data/connections/maths.yml`), how lessons use it, and pictures (hand SVG, Mermaid, charts) (decided 22–23 Oct 2026).

**Every subject, current and future:** tutorials are pace-agnostic (`roadmap/shared.md` › Decided (30 Oct 2026): tutorials are pace-agnostic). Read it before planning a new subject or course.

"ROADMAP › <section>" in CLAUDE.md, AUTHORING.md and BUILDING.md means that section in the subject's file. Older sections moved to `roadmap/archive/` when a file was tidied (the code file on 12 Oct 2026: `roadmap/archive/code-to-2026-10-12.md`), so look there if a section is not in the current file.

## Working in parallel

1. Start every session with `git pull --rebase origin main`, then read CLAUDE.md and your subject's file.
2. Write decisions and proposals in your subject's file only. Your lessons live in your subject's folder under `content/`.
3. Shared files (anything under `tools/`, `playground-shared/`, `playground-board/core.js`, `tools/lesson-view.mjs`, CLAUDE.md, AUTHORING.md, BUILDING.md, `roadmap/shared.md`): before changing one, check `roadmap/shared.md` and `git log` for work already under way, keep the change small, and say in `shared.md` what you changed.
4. Before every push, `git pull --rebase origin main`, run `npm run validate`, and resolve any conflict by keeping both sides' work. Never force-push to `main`.
5. Pushing deploys nothing. One manual publish run builds whatever is on `main`, so any chat's pushes go out together.
