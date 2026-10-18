# Handoff: generic Create, part 2 (teacher section, pointer pages, node picker)

For a new chat continuing the generic Create work (18 Oct 2026). Propose a short plan first, then build (CLAUDE.md › How we work: "go" means build, test, commit, push to main). Touches shared code: follow `ROADMAP.md` › Working in parallel (pull before starting and before every push; never force-push).

## Read first
- Project doc `claude/create-generic-proposal.md`: the plan, decisions and build status. This handoff covers its steps 3 and 4 (and 6 if time).
- `CLAUDE.md`, `roadmap/shared.md` › "Generic Create, first batch (18 Oct 2026, afternoon)", `strategy/learning-design.md` › "Where guidance sits".
- AUTHORING.md › Primers (`shape: primer`) and section 13 (Create).
- Waypoints Kit (public, edu-matthew-pham/waypoints-kit): `core.md` (the model: waypoints, width, hinges, response modes, pace profile), `HOW-IT-WORKS.md`, `index/<subject>.md` (one row per standard, linking its node file), `data/<subject>/*.json` (`standard` with `nodes`: `progression_checkpoint`, `success_criteria`, `prior_knowledge`, `minimum_width`, `typical_width`, `wider`, `hinge`, `hinge_reason`, `response_modes` as a list of `{mode, reason}`). Clone it read-only with `GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1`.

## Already built (main 1e5ad66)
- `shape: primer` (Think first, The idea, Check, Apply) on page, deck and worksheet; Primer and None profiles; English and Humanities (HASS) subjects in Create.
- `create/shape-guide.mjs` (`SHAPE_TEXT`) in both prompts: sequence, guidance, width; Kit anchoring by reading node files.
- Humanities example in Create (History primer from Kit AC9HH7S03 n1; untested, not reviewed curriculum).
- Write, compare, self-check = the existing unmarked `reasoning` check (`q`, `models`, `criteria`).
- Existing Kit import: `tools/import-curriculum.mjs` (maths, science → `data/curriculum/<subject>.json`, for the curriculum map) and `tools/kit-page.mjs` (progression pages in `data/progressions/<subject>/`). Maps exist for maths, science and systems (`map: true` in the subject's `index.md`; `tools/curriculum-map.mjs`, `site/curriculum-map.js`). `CHECKED` in `tools/progressions.mjs` lists subjects whose lessons must name a node.

## Tasks
1. **Teacher section with pointer pages, History first.**
   - Import History from Kit with the existing importer (extend it beyond maths and science; output committed, so the build never needs Kit).
   - Generate one teacher page per node at `/teach/curriculum/<subject>/<code>/` (suggested address; nothing in the student navbar or the subject menus; linked from the teacher pages only). Each page: checkpoint, success criteria, prior knowledge, width (minimum, typical, wider), hinge and reason, response modes with reasons, link to the Kit node file; plus what only this site knows: lessons tagged with that node (none yet for History) and a **"Make a primer for this"** button that opens Create with the node pre-filled (see task 2).
   - Every page says "Draft, from Waypoints Kit v0.2" and carries `<meta name="robots" content="noindex">` until the subject is reviewed.
   - Review status: `data/review/<subject>.yml` (subject-level now, node-level allowed later); a reviewed subject drops the draft label and `noindex`.
   - Do **not** add a History subject menu or `content/history/`: that would put History on the public site before review.
   - Done means: pages build for every History node in Kit, validate and `npm run build` pass, a browser check opens a few pages and the Create button works.
2. **"Make a primer for this" and a Kit node picker in Create.**
   - Create accepts a node in the URL (for example `?node=AC9HH7S03.1`) and pre-fills a Primer starter from it: title from the checkpoint, the teacher block's goals from the success criteria, `misconception` in `design:` offered from the node (not pasted silently), and width suggestions from its response modes (each with Kit's reason).
   - A simple picker in Create's lesson-idea panel: subject, year, standard, node, from the imported data. Several nodes give a pick list of their success criteria and misconceptions (proposal › Pre-fill from nodes), never a silent merge.
   - The copied lesson prompt includes the chosen nodes' data, so the AI need not fetch Kit.
   - Keep anchors optional: a lesson with no node still works everywhere.
   - Done means: Node tests for the pre-fill, a browser test that opens Create from a pointer page and gets a valid primer, and all existing Create tests passing.
3. **If time (independent, cheap):** Create at a subject-neutral `/create/` with `/code/create/` kept as a redirect (fix the stale "later /maths/create/" comment in `tools/build-create.mjs`); a board picker filter by kind of task (graphing, calculating, data, simulating, sorting, coding).

## Decisions already made (don't reopen without Matthew)
- Kit holds what the curriculum says; corrections go to Kit, never an overlay here. The site adds only review status.
- Pointer pages are teacher-facing, draft-labelled and `noindex` until reviewed. Start with History only.
- One template to adapt: presets name the shared stages; tutorials lean explicit; inquiry sits in the class plan; width comes from response modes (a list). Response modes are width suggestions, not lesson types.
- No AI inside the site: Create builds copyable prompts.

## Testing
- Node: `node experiments/<name>-test.mjs` (frontmatter-bridge, lesson-package, authoring, board-catalogue, validator, create-examples). Browser: `CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome WP_TEST_CANVAS_CAPTURE=1 node experiments/<name>-smoke.mjs` (entry, browser, course, authoring, board-picker, validator-browser). Add new tests to `.github/workflows/frontmatter-bridge-test.yml`; check it passes after the push.
- Phone width: smoke tests fail if anything overflows at 390px (long select labels did once).
- `npm run validate`, `npm run build`, `npm run check-decks` (one existing overflow, `html-nesting`, is not yours).

## For Matthew
- Report the Kit data slip: `yf_maths_AC9MFN04` node 2 lists `width_opportunity` as a response mode (it is a flag).
- Publishing: Create changes go out with publish-navigation (`create`) or the full publish; the teacher pages need the full publish.
