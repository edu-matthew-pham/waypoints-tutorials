# Handoff: remaining tasks after the 18 Oct 2026 audit (for a new chat)

For any assistant continuing the small items left after the AI-pathway and Create audits. Matthew approved these as next steps; propose a short plan first, then work through them (CLAUDE.md › How we work). Not in scope: *Who Does AI Affect?* (its own handoff, `roadmap/ai-society-research-handoff.md`) and the deferred items at the end.

## Read first
- `CLAUDE.md` (rules for any assistant), `ROADMAP.md` › Working in parallel.
- `roadmap/shared.md`: the 18 Oct sections on Create (packages, design decisions and sharing) and reasoning checks, prompt cards and video links.
- `roadmap/learning-with-ai.md` (Status, Decisions) and `roadmap/ai-review-fixes.md`.
- AUTHORING.md: class plans (`content/<course>/class/<lesson>.yml`), section 13 (Create).

## Tasks
1. **Class plans for AI Foundations** (`content/ai/foundations/`, 12 lessons; Does AI Help Us Learn? already has all 12 in `class/`).
   - Done means: one `class/<lesson>.yml` per lesson, following the Does AI Help Us Learn? ones: an `inquiry` question the class can disagree about, two or three `activities` (`at:` a stage the lesson has; `kind: activity | discussion | check`; `minutes`; `do:` in words for the slide; `notes:` for the teacher). Whole class for predict and investigate, self-paced for the rest. Activities work with paper and talk (no phones).
   - Validate passes; decks build (`dist/teach/ai/foundations/<lesson>/deck.md`). Class plans don't change student pages or clips.
2. **A maths or science example on Create's start page** (`create/entry.mjs`, `create/create.js` `EXAMPLE`, `create/lesson-starters.mjs`, `create/index.html` "Explore an example").
   - Today the only example is a Turtle coding lesson. Done means: "Explore an example" lets a teacher choose Coding, Maths or Science, each a short working lesson (maths and science on the shared board; pick working setups from `board-catalogue.json` and existing lessons), each with a `design:` block in its teacher notes so the "Your design decisions" panel shows a filled-in model.
   - Keep `experiments/entry-smoke.mjs` passing, and add a check that each example opens and passes validation.
3. **One Turtle starter instead of three** (`create/create.js` `EXAMPLE`, the "+ Add lesson" starter in `create/workspace.mjs`, `create/lesson-starters.mjs`).
   - Done means: one source for each starter (`lesson-starters.mjs`), used by all three places; behaviour unchanged; all Create tests pass.
4. **Optional: the dated example-tools table in the tools guide** (`content/choosing-ai-tools.md`; plan in `roadmap/learning-with-ai.md` › Tools for schools).
   - Done means: a small table of example tools (help, evidence, teacher tools), each claim linked to the vendor's own page and quoted, with "checked <date>"; no endorsements. If a vendor page can't be read, leave that row out and list it for Matthew. Skip the task if fewer than three tools can be checked properly.

## Testing (Create tasks)
- `node experiments/<name>-test.mjs` for the Node tests; browser smoke tests with `CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome WP_TEST_CANVAS_CAPTURE=1 node experiments/<name>-smoke.mjs` (entry, course, authoring, browser, board-picker, validator-browser). On push to main, `.github/workflows/frontmatter-bridge-test.yml` reruns them in real Chrome; check it passes.
- Dependencies: `npm ci` (or link an existing `node_modules`; never commit it).

## Rules
- Research or factual claims: read the source itself; mark anything you can't reach as unverified, never wrong; ask Matthew for PDFs.
- Plain words; students own their working; light checks; no phones in class.
- Git: pull before starting and before every push; never force-push; commit trailers per CLAUDE.md; push to main. Don't publish unless Matthew asks (publish routes are in CLAUDE.md › Temporary home).
- Keep replies to Matthew short and plain.

## Deferred (wait for Matthew; not part of this handoff)
- A teachers' course on making tutorials (`roadmap/shared.md`, candidate).
- *Who Does AI Affect?* and the committee extension (`roadmap/learning-with-ai.md` › Proposal).
- What remains of the Years 9–10 idea; `shape: discussion` (only if a discussion lesson needs it); MP4 recording in Create; Kit's `trial.md` (Kit repo).

## For Matthew (not for the assistant)
- Add a file-upload question to the Google request form, so "Request publishing" ZIPs can be attached.
- Skim the rewritten Does AI Help Us Learn? (Year 7 rewrite and width regrouping were done by helpers on 18 Oct; checked for function, not read in full).
