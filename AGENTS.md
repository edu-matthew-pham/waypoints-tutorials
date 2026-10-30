# Instructions for coding agents (Codex, ChatGPT, Copilot, Claude Code)

Waypoints tutorials: a static site (GitHub Pages) of markdown lessons with live playgrounds, built from `content/`. Owner: Matthew (a teacher). He prefers direct, concise, high-signal replies, in plain language.

**Read `CLAUDE.md` first.** It is the full set of working notes for every agent, not only Claude (the name is historical). It is long, so read these parts before starting, and search it for the rest as needed: *Publishing*, *How we work*, *Teaching decisions*, *Gotchas*, and the section for the subject you are working on.

Then read `ROADMAP.md` (index and rules for parallel work) and the roadmap file for your subject: `roadmap/<subject>.md` (`maths`, `science`, `code`, `english`, `economics`, `history`, `geography`, `civics`, `humanities-inquiry`, `ict`, `systems`, `engineering`, `learning-with-ai`, or `shared.md` for the build and shared tools). Authoring format is in `AUTHORING.md`, how to build a course in `BUILDING.md`, testing and review steps in `roadmap/checklist.md`.

## Rules that matter most

- **Never publish.** Pushes to `main` publish nothing, on purpose. Do not run, add or change workflow triggers, and do not push to `gh-pages`, `publish-*` branches or `makecode-editor`. Matthew runs the manual publish workflows. After a push, say what is ready to publish.
- **Pull before starting and before every push** (`git pull --rebase`), never force-push, and keep notes in your own subject's roadmap file. Other agents work in parallel (one per subject).
- **Test before you push:** `npm ci`, `npm run validate`, `npm run build`, and a headless-browser check of any page you changed (Chromium via Playwright, serve `dist/`). Do not re-render clips locally.
- **Tutorials are pace-agnostic in every subject** (`roadmap/shared.md` › Decided, 30 Oct 2026): no Consolidating, Steady or Advancing labels; the untiered path is the minimum; `tier:` steps are optional width on the same idea, never a faster track.
- **First Nations content:** no student-facing explanations of First Nations history or culture written by us; teacher notes start from ACARA's elaborations and ask the teacher to add local, community-approved material.
- **Student writing:** the site does not mark or pass/fail free writing (no counting words as a check, no LLM marking) and does not send it anywhere. Writing is fine and often useful: students can write in their own book or document, or in a small box that stays in their browser, and a partner or the teacher reads it (a `reflect` tick). Don't build a lesson around write boxes and don't avoid writing either; use it where it helps. Printable sheets come from Prepare Print (the generated `worksheet.md` per lesson, or a guide page offered through it); do not build custom blank-line or fill-in layouts on pages.
- **Do not state contestable or simplified ideas as settled truth, even when ACARA words them that way.** The descriptor tells us what to teach, not how sure to sound. Where a claim is a model, an assumption, a theory, a contested view or a simplification that is wrong in detail (human wants are unlimited, a historian's interpretation, electrons in shells, a one-layer greenhouse), say what it is where students meet it: "in economics...", "one view is...", "this model leaves out...". Keep the descriptor's terms. A short phrase is enough; this is about honesty and judgement, not a checklist or a disclaimer on every sentence. Distractors and misconception slips should be genuine errors of the model or of fact, not disagreements with an assumption. Teacher notes say what is assumed, what the model leaves out, who disagrees, and may offer a discussion prompt. Settled facts (dates, places, defined terms, well-established science) stay plain.
- **Lesson shape is a default, not a rule.** Humanities courses copy `economics/scarcity-7/needs-and-wants`, which suits skill waypoints with a planted answer. If a waypoint is mostly discussion or weighing views, an inquiry shape (`shape: 5e` or `primer`) may suit better: say why in your roadmap file.
- **Facts about people, places, studies and dates must be checked against a source.** Made-up cases are preferred; say so in the notes when something is unverified.
- Do not reformat whole data files (for example `misconceptions.json`): add single lines.
- Quote YAML values that contain colons. Give new page parts site-specific `wpt-` class names.

## Commits

Use a plain commit message that says what changed. Do not add Claude's `Co-Authored-By` or `Claude-Session` lines unless you are Claude. Push to `main` with `git push origin HEAD:main` after pulling.

## When you finish

Say in plain words what changed, what you tested, what you could not test, and what needs a publish (whole-site, quick, navigation, or lessons only: see *Publishing* in `CLAUDE.md`). Record anything you decided or learned in your subject's roadmap file in the same push.
