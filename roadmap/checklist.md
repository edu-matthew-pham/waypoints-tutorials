# Checklist: before a push, a review pass, and after a push

One place for the testing and review steps. Handoffs and roadmaps link here instead of repeating them. Add a line when a chat finds a step that should have been on it. Last updated 25 Oct 2026.

## Before every push
1. `git pull --rebase origin main`. Never force-push. Shared files (`tools/`, `playground-*/core.js`, `playground-shared/`, CLAUDE.md, AUTHORING.md, BUILDING.md, `roadmap/shared.md`): check `roadmap/shared.md` and `git log` first, keep the change small and say in `shared.md` what changed.
2. `npm run validate`. Fix errors; read warnings that name your lessons.
3. `npm run build` (sandbox: `WP_NO_MAKECODE=1`) and open what you changed in a headless browser (Chromium at `/opt/pw-browsers/chromium`, `--no-sandbox`, serve `dist/`). Look for page errors, then answer the new checks the way a student would. Scratch scripts go in `.render-tmp/`.
4. Run the check that matches what you touched:
   - HTML, CSS, DOM, Vue lessons: `npm run check-html`
   - MakeCode checks, starters or solutions: `npm run check-makecode`
   - maths or science practice pages: `npm run check-practice` (after a build)
   - decks or worksheets: `npm run check-decks`
   - Python errors or concepts: `npm run check-python-errors`, `npm run check-concepts`
   - forms (`answer`, `working`): `npm run check-forms`
   - curriculum `node:` tags: `npm run check-nodes`
   - science engines: `node tools/check-engines.mjs`
   - Create: `node experiments/<name>-test.mjs`; its browser smoke tests are listed in `claude/handoff-create-generic.md`
5. Commit with the `Co-Authored-By:` and `Claude-Session:` lines from the session reminder. `git push origin HEAD:main`.
6. Notes go in your own roadmap file. Pushing deploys nothing.

## Review pass for a lesson (checks the writing, not just that it runs)
- **Voice.** Student text reads as you'd say it at their desk: no labels, no stage directions, the term named once (`roadmap/maths-when-where-why.md` › Voice).
- **Checks.** Each question has per-option `feedback` that answers that wrong idea; options are not led by length or order; the answer is not in the question.
- **Hints.** Up to three, escalating, none giving the line or the answer. Where students stick (`stuck:` in teacher notes, or a hinge node), add a `smaller:` lead-in (AUTHORING › Smaller step).
- **Effort.** `npm run effort` for the lesson: `struggle:` in `teacher.yml`, goals a student would recognise, hints that escalate.
- **Picture or diagram.** Would a picture explain this better than the text? Named boxes and arrows (a flow, a wiring path, a process) go in a Mermaid `diagram:` (AUTHORING › Diagrams); a spatial or "what it makes" idea goes in a picture (`picture:`, `expected:`, a board picture or an inline SVG). Skip it when the text is already clear.
- **Brief against checks.** Every number in the brief matches the check and the stored answer. Boundary cases (equal to the limit) are tested, not only the middle.
- **Teacher layer.** `teacher.yml` notes, stuck list, exit ticket; class plan has at most about three checks per site step.
- **Claims.** Facts, figures and studies are checked against the source and carry their limits. Mark anything you could not reach as unverified.
- **Honest scope.** Say what was only validated and built, and what was clicked through. Drafted lessons are "not yet tried with classes" until a class has used them.

## After a push
- Say what is ready to publish and which route it needs:
  - lesson text and `teacher.yml` only: **Publish changed lessons** (`git push origin main:publish-lessons`) or the full publish;
  - `tools/`, playgrounds, widgets, snippets, data, subject or home pages: **full publish**;
  - navbar or Create only: **publish-navigation**.
- A clip's hash covers its lesson folder except `lesson.md`, so edits to `board.yml`, `teacher.yml` or a widget re-record that lesson's clips; `lesson.md`-only edits do not. Say how many lessons will re-record.
- Do not publish unless Matthew asks. After a publish, spot-check one changed lesson and one shared page on the live site.
