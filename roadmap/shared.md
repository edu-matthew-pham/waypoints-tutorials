# Roadmap: shared and general (site, build, shared tools)

Things more than one subject depends on: the build, publishing, the home and plain pages, and shared tools (`tools/*.mjs`, `tools/lesson-view.mjs`, `playground-shared/`, `playground-board/core.js`). Before changing one of these, check this file and `git log` for work in progress, and note here what you are changing.

## State of play (26 Oct 2026)

Audit chat, 26 Oct, against `main` at 46e271f and gh-pages ("Site build from d47854a", 25 Oct 15:18 UTC). Counts are `lesson.md` files (courses = folders with an `index.md`).

### By subject

| Subject | Built and live | Only planned or proposed | Stale status fixed today |
|---|---|---|---|
| Maths | 250 lessons, 8 courses: Years 7–10 complete (Year 9 and 10 batches, Years 7–8 audit pass, connections, practice for every lesson) | Before Year 7 catch-up (Project doc before-year-7-plan, waiting for "go"); Years 8–10 connections library growth | maths.md: "not yet published" on the audit status, Year 9 heading and batch lines (all published 26 Oct) |
| Science | 115 lessons, 15 courses: Years 7–10 every standard, hints Years 7–10, lead-in pilots | Practice pages and combining questions for Years 8–10; practical companion lessons (pilot); populations engine | science.md: hints/lead-ins heading (was "Proposed; not built"), practical previews (teacher list built), prerequisite checks, engines plan |
| Code | 221 lessons, 26 courses incl. SQL (11, new 25 Oct), project briefs with hints, typical years | Arcade multiplayer over radio; benchmark clips for briefs; Node.js parked | code.md: SQL "proposed, not built"; Web pathway after the DOM "not built" |
| How computers work | 70 lessons, 13 courses incl. Starting out, System admin on a Pi, Security lab; 12 project briefs | CTF scoreboard; trial Packets/Passwords against explicit shape | systems.md: briefs heading (was "first batch and proposed") |
| Engineering | 46 lessons, 10 courses; `smaller:` lead-ins on 27 lessons; Arduino and capstone thinking pass | OpenSCAD (proposed, not approved); Python gear loop; 3D and animation parked | none needed |
| Learning with AI | 57 lessons, 5 courses; staff course *AI and your tasks* (Teachers, 13 lessons with Make a lesson) | Contextual courses (Maths, Science, Writing, Coding) not started; dated vendor table | learning-with-ai.md: "Courses as built" listed 2 of 5 |
| ICT skills | Live: Working with data (9) and Documents and slides (9), 16 cards. On main only: Files and systems (4 lessons, 6 cards) and swappable context in data lessons 1–6 and 9 | Investigating and judging information; Staying safe and well (plans only, need approval); `files` widget | ict.md: Files listed as still to propose; "none built" heading |
| Shared | Navigation and search, Make your own version, project briefs, `smaller:`, diagrams, curriculum pointers | Boards catalogue and thin core; lesson position label; teacher.yml out of the clip hash; curriculum maps beyond 7–10; Kit tutorial format | shared.md: progression data/node check, coach prompt, reasoning checks, Create decisions, benchmark heading, navigation "not yet published" |

### On main but not live

*Update (26 Oct 2026, 06:54): Matthew ran a whole-site publish ("Site build from cc446ab"), so Files and systems, swappable context and My path below are now live. Still to publish: the trail back link (dff6662d) and the two ICT pathways being built; one full publish once they land.*

`node tools/changed-lessons.mjs --live` picks up 11 lessons in 2 courses (`ict/data`: 7, `ict/files`: 4) and warns that shared files changed. Everything else is outside content/ and needs a whole-site build:
- My path (`/my-path/`, `site/my-path.js`, "Add to my path" in every lesson footer and on search results).
- Swappable context (`tools/context-core.mjs`, `lesson-core.mjs`, `lesson.mjs`, `check-context`; Create via `build-create.mjs`).
- ICT subject page and Teachers pages (`content/ict/index.md` adds the Files pathway, `ict-teachers.md`, `teachers/index.md`), `misconceptions.json`, `search-index.mjs`.

Recommended: **one whole-site publish** (Quick publish is enough: ICT lessons have no clips and nothing changed touches a clip hash; use the full publish if you want the usual route). publish-lessons alone would put the 11 ICT lessons up without the Files pathway on the subject page or My path; publish-navigation/create does not cover lesson pages. After it, spot-check `/ict/`, `/ict/files/`, `/my-path/` and one ICT data lesson.

### Not yet tried with a class

No course on the site is recorded as tried with a class. Flagged explicitly in the roadmaps: maths Algebra pilot (not run), Years 9–10 and the Years 7–8 pass; science Years 8–10 (drafted 9–11 Oct) and all new hints and lead-ins; Code extension courses and every MakeCode lesson against the live editor and real hardware (Watch-then-PRIMM pilot too); How computers work class plans, Starting out, System admin (real-Pi path untested), Security lab, briefs; Engineering lead-ins and capstones; all five AI courses and the staff course (pilot lessons 1–2 in a staff meeting); ICT Working with data, Documents and slides, Files and systems (colleague pilots).

### Project docs that say something different from the repo (reported only, not edited)

- `arcade-sequence`, `microbit-sequence`, `console-sequence`: say built "not yet published" or "needs a full publish"; all live now. `microbit-sequence` still titled "draft 2".
- `turtle-sequence-status`: says both courses are one folder `content/code/python`, nothing live, class plans missing for A3–A11 and B1. Now two folders (`python-foundations`, `python-functions`), live, class plans exist for A2–A11 and B1.
- `digital-systems-plan`: "ten courses"; lists the Raspberry Pi unit and Years 5–6 as not built and the subject name as open. Now 13 courses (System admin on a Pi, Security lab, Starting out built 25 Oct), name decided (How computers work), 12 project briefs.
- `ict-files-systems-plan`: "plan only, not built, still needs approval". Built 26 Oct.
- `digital-literacy-pathway-plan`: "not yet built", element names unchecked, mapping file to write. Three courses built, names checked, mapping written. `handoff-digital-literacy-pilot` (pilot one lesson, then stop) is overtaken too.
- `maths-connections-pilot-status`: waits for your review before any Year 7 retrofit. Connections went into all seven Years 7–8 courses on 25 Oct (maths.md audit status).

### Open questions for Matthew

1. Maths when, where and why: **answered 26 Oct:** no separate review; the aim is a full suite to pilot. Retrofit covers Years 7–10 (maths-when-where-why.md › Next updated).
2. ICT: **approved 26 Oct:** build Investigating and judging information and Staying safe and well (being built; Staying safe still needs the school wellbeing review before class use).
3. Before Year 7 catch-up: **decided 26 Oct:** build all 22 in a separate chat with its own roadmap (`roadmap/before-year-7.md`, handoff Project doc `handoff-before-year-7`).
4. Engineering OpenSCAD: **decided 26 Oct:** parked until the main suite has been piloted.
5. Site content licence: **interim notice added 26 Oct** (`LICENSE.md`, linked from About): teachers may use and adapt for their own classes and share free with credit; no selling, paid products, republishing as their own, or building/training products without permission. An open licence (CC BY-SA, possibly NC) waits until the school confirms in writing that the work is Matthew's (outside-employment IP question).
6. Project docs: **answered 26 Oct:** this chat orchestrates for now and updated the docs above (status blocks added; plan text kept).

### Needs your approval

- Commit trailer: the 35c0dee6 commit has no `Claude-Session` line (none was given at the time); later commits carry it. Nothing else is blocked.

**Amended (25 Oct 2026, later):** search plus everything-at-once browsing was two extremes, and the pathway links had gone from the menu. Pathways are back under Subjects (links to their trail maps, so students are one click from a trail), and "List for teachers" on a subject page is now a one-screen index of pathways and courses (years, lesson counts); full cards stay on each pathway page. Trails stay the default view; the search box is unchanged.
**Maths pathways, decided to wait (25 Oct 2026):** the four maths pathways (Algebra, Number, Geometry and measurement, Statistics and probability) merge the curriculum's six strands (Measurement with Space, Statistics with Probability). Kept as is: a pathway can hold one unit or an umbrella of two, so splitting a course later changes no navigation. ACARA's progressions divide Number into concepts and modelling, which our copy of the data does not carry; check the Kit data, and the curriculum map's strand rows, if teachers plan that way. Revisit after teacher feedback.

## Proposed: support both uses, "What you should already know" and "Build up to this" (27 Oct 2026, Matthew; wording agreed, nothing built)

- **Decided: the site supports both uses.** Full class units, or backup, recap and extra learning when needed. Teachers and students decide how to use it; the site doesn't pick one. Matthew's reason for valuing the second: teaching every lesson from the site would get monotonous (same shape, same screen), while teachers bring the variety (discussion, hands-on work, real robots, group tasks). This fits what is already decided: the scope is checking and re-teaching understanding, and the decks are what make a lesson work for a class.
- **One principle, two sizes:** meet students where they are, build up from firm ground, then come back to the original task.
  - *Small, inside a lesson:* an easier question first. Built: `smaller:`, currently labelled "Need a smaller step?".
  - *Big, across lessons:* the lesson this one builds on. Partly built: "Catch up first" (Before Year 7 only) and "Builds on" (theory concepts only).
  - *The "come back" half matters at both sizes.* Without it students can stay on the easier version.
- **Wording (agreed 27 Oct):** positive, about building up rather than going backwards.
  - Two jobs, two labels:
    - **"What you should already know"** (decided 27 Oct): one reference row on a lesson page, merging "Catch up first" and "Builds on" (same idea: prior knowledge). Lists the lessons this one relies on, e.g. "What you should already know: Year 6 catch-up lesson, Text as numbers, Variables". "Put to work in" and "Leads into" stay as they are, pointing forward.
    - **"Build up to this"**: the scaffold, used only when needed. It is the in-lesson fold (replacing "Need a smaller step?") and the prompt that sends a stuck student to the lessons in the row above. Matthew's view: it may seem unfamiliar at first but becomes familiar with use, so use it everywhere and the same way.
- **Built, step 1 (27 Oct, Matthew said go):** `linksHtml` (`tools/lesson-view.mjs`) puts Before Year 7 catch-up lessons and lessons introducing an assumed theory concept in one "What you should already know" row (deduped by link); "Put to work in" and "Leads into" unchanged. The `smaller:` fold now reads "Build up to it". AUTHORING, CLAUDE.md, the two Before Year 7 course pages and the maths and science pathway notes use the new words. Checked in Chromium (row and fold, no page errors); 63 lesson pages carry the row. Needs a full publish (shared page code).
- **Step 2 built and merged to main (27 Oct; Matthew approved the links and the one-line descriptions):** `tools/prior-links.mjs` (`node tools/prior-links.mjs [--sample N]` lists them) adds up to two same-subject lessons to the row. Two sources, shown on the page with their reason ("teaches: …" for a node, "idea: …" for a code idea):
  - **Short descriptions (27 Oct):** the one-line description after each link is the first sentence of the lesson's summary, unless the lesson has a hand-written line in `data/link-blurbs.json` (slug -> text, about 100 characters). All 182 lessons whose first sentence ran past 130 characters have one, so none is cut with "…". Add an entry when a new lesson's summary opens with a long sentence (`brief()` in `build-site.mjs`). Needs a full publish.
  - *Progression nodes* (maths, science, How computers work, English): the node before this one in the same descriptor, plus `uses:`. Matthew's intent was nodes from the progression maps. Dropped the broad "descriptor prior knowledge" step on 27 Oct (it gave odd pairs such as Reading and finding ← Choose the hardware).
  - *Code ideas* (Code has no standards tags): the earlier lesson that first teaches an idea the lesson's code uses, from the concept scan. Matthew's answer (27 Oct): fine, since Code uses the big-ideas map rather than standards, with the reason shown on the page.
  - *On the page (27 Oct):* a list, one lesson per line, each with the first sentence of that lesson's own summary as a brief description ("100% is the whole · Percent means out of 100."). Why it was linked (the node or idea) is in the hover text. The same format covers catch-up and theory-concept links.
  - Never a later lesson, a challenge-unit lesson, or an optional lesson from a required one. 597 lesson pages get the row (Code 198 of 221, Maths 226 of 250, Science 84 of 115, How computers work 47 of 70, English 13 of 43; AI, ICT, Engineering and Learning skills none). A "← Back to <lesson>" line (`BACKFROM_HTML`, sessionStorage, this tab only) shows on a lesson reached from the row.
  - Still imperfect where Kit's node order is not a true prerequisite (Static charge ← Sound).
- **Still to build:**
  - *A "What you should already know" row on every lesson,* to the one or two lessons it builds on in the same subject, not only Before Year 7 and theory concepts. The data is mostly there (`after:`, `assumes:`, progression nodes). A stuck student can work back until they hit solid ground without anyone diagnosing the gap, which is the self-regulation skill in action (`roadmap/learning.md`).
  - *A return link* ("Back to <lesson>") on a lesson reached from that row.
  - *A quick "do you already know this?" check at the start,* so a student can tell whether to build up first. Maths already does this with a short retrieval question.
  - *Every lesson makes sense on its own,* and is findable by idea ("I don't get loops", "what's a ratio"): part of the navigation and search rethink.
- **Caution:** optional help is mostly used by students who are already doing fine, so teachers pointing students to a specific lesson by link stays the main way in.
- **Open:** how much of the first meeting with "Build up to this" needs a teacher to introduce it (e.g. a line in the class decks).

## Proposed: a speech lesson shape for any subject (27 Oct 2026, English chat; Matthew agreed in principle, not built)

- **Why:** speeches happen across subjects (a Year 7 science class gave climate change speeches), and English's speaking standards need the same support. The site helps with planning and reflecting; the speaking happens in class. No mode listens to students or judges delivery (no AI marking).
- **Shape** (like `shape: 5e` or `shape: design`): Purpose and audience → Plan (opening, two or three points, close) → Script (an unmarked `reasoning` check with a model and a self-check) → Cue cards (cut the script to key words: the one new piece, a small board) → Rehearse (partner, or optionally PowerPoint's Speaker Coach where the school has Microsoft 365) → Present in class → Self-check and peer feedback (`reflect` checklist; a printable peer card on the guide).
- **Split:** English teaches the speaking skills; other subjects use the shape for their content and link back to the English lessons.
- **Where it lives (agreed 27 Oct):** two layers. First a speech lesson shape in Create, so any subject can make a speech lesson; then one short English course, Speaking to an audience (purpose and audience, structure, cue cards, delivery), that speech lessons in other subjects link back to ("builds on").
- **Cue cards (agreed 27 Oct):** a `cue` mode on the existing `cohesion` board, not a new board. The student writes or pastes their script, clicks the key words, and the board makes one card per section (opening, each point, close). Light checks, said to be rough counts: every section has a card, about 12 words or fewer per card, cards well under a quarter of the script's words. A Print cards button gives index-card pages (no phones in class).
- **Delivery is flexible (agreed 27 Oct):** writing the speech out word for word stays as the drafting step; what the shape discourages is reading it aloud word for word. The teacher picks how students deliver: from the full script, from a highlighted script (every word, key words highlighted: same board, different print layout), from cue cards (the default), or from memory. Students can move along that scale over the year.

## Proposed: self-regulation strategies as an optional toolkit (27 Oct 2026; first slice built the same day: `roadmap/learning.md`)

- **Why:** self-regulation (planning, monitoring and evaluating your own learning) is a skill to keep practising across subjects, like spelling, but mostly invisible. The aim is to make it visible. ACARA anchor: Personal and Social Capability (self-management) and Critical and Creative Thinking.
- **Stance:** an extra tool in the arsenal, not part of every lesson. Lessons stay as they are; the toolkit sits beside them and comes in through the teacher layer and the class decks.
- **Backbone:** one before / during / after cycle (Zimmerman's forethought, performance, reflection; the EEF's plan, monitor, evaluate) as shared language across subjects.
- **Strategy cards:** a small library of concrete strategies, each saying when to reach for it (Veenman: what, when, why, how). General ones (what is this asking? (Winne and Hadwin), predict first, check your confidence, retrieval, explain it to yourself) plus subject versions: Code (test a small piece, read the error, trace), maths (estimate, is the answer reasonable, try a simpler case), science (predict then compare with the data, is the test fair), English (reread aloud, check against purpose and audience). Cards sit beside the tutorials, like the ICT cards.
- **Teaching a strategy:** NEMO-T (Shyam Barr, *Educate to Self-Regulate*, 2024: Name, Explain, Model, Opportunity to practise, Transfer), with SRSD (Harris and Graham) as a second sequence; both end in gradual release. Model is a think-aloud: the teacher, or Nib, narrating real uncertainty and recovery, not a polished performance (planned stop points, one job each). Not every strategy needs NEMO-T's name-first order; a variant lets students try the task, notice the problem, then meet the strategy (fits 5E).
- **Getting it used (Barr's availability vs production):** knowing a strategy is not using it. Once taught, prompts are open questions ("What might help you here?") rather than naming the strategy, and they fade. Natural spot on the site: the stuck moment (a "try a strategy first" link to the subject's cards before hints).
- **In class, through the decks (optional inserts in Present mode / Prepare):** Teach it (a 3–4 slide NEMO-T insert ending "now use it in today's lesson"), Show it (a think-aloud on the current step), Nudge it (one prompt slide at a natural pause: opening = plan or predict, middle = how do you know it's working, close = what would you do differently). One moment per deck by default and not on every deck: roughly a third of a course's lessons or fewer (teach early, model at the first hard lesson, nudge before challenge or independent work, reflect at the end), so it doesn't become ritual. The deck builder could suggest the spot; the teacher can switch it off or add more.
- **Teacher page:** plain-language explanation of the cycle, think-aloud and NEMO-T, so non-specialists can bring it into any lesson.
- **Cautions:** it depends on subject knowledge (another reason it lives inside subject lessons, not standalone); prompts compete for working memory during hard tasks, so keep it light; frame students' notes as their own record, not monitoring (no tracking).
- **Links:** Does AI Help Us Learn? (cognitive offloading is a self-regulation question; Bjork's illusions of competence), Nib's notebook, Present mode, the `reasoning` check's self-check.
- **Other research to draw on:** Dunlosky et al. (learning techniques), Bjork (desirable difficulties), Pekrun and Zimmerman on emotion and self-efficacy (the stuck moment handles feelings too), Loksa and Ko and Prather et al. (novice programmers' problem-solving stages). Don't overfit to one author.
- **Decided (27 Oct):** an optional, discussion-led intro course (4 workshops: shared trap task first, then the student's own task as transfer), framed around why it matters and how self-regulated differs from self-directed learning; its own small subject, Learning skills; Years 6–8; general and Code cards first. Built: see `roadmap/learning.md`.
- **Open:** how deck inserts are authored (class plan field vs a shared insert library).

## Proposed (30 Oct 2026, Matthew; discussed, nothing built): "Make your own version" as a prompt first, Create as the checker

Why: Create (the editor) is complex and overwhelming for a teacher who only wants to adapt one lesson. Most teachers already have an AI chat open, and a text box to paste into is a gentler way in.

- **Front door:** the `wpt-mine` card at the end of every lesson page (`createHref` in `lessonPageHtml`, `tools/lesson-view.mjs`) offers **Copy a prompt** first, with the existing "Make your own version" link to Create kept as the second, advanced option.
- **What the prompt holds:** (1) the lesson's own source, the same text the build already writes to `<lesson>/source.json` (`tools/lesson-source.mjs`: lesson files, teacher.yml and class plan); (2) a short line for the teacher to fill in, "Adapt this for my class: …" (year level, context, what to keep); (3) the format rules the AI must follow, taken from AUTHORING and `AGENTS.md`: keep the lesson format and check types, keep every `answer:` index aligned with its options, no write boxes (Make steps are written in the student's own book with a `reflect` tick), no LLM marking, made-up cases labelled as made up, nothing about First Nations history or culture written for students, pace-agnostic wording, and "say what you changed".
- **Get the result back in:** the teacher pastes what the AI returns into Create, which stays the place that validates and previews it (checks accept their stored answers, nodes exist, the page renders). So Create becomes "check my version", not "write my version".
- **Limits to state on the card:** AI output can break the format or the rules, so it is checked before use; schools that restrict AI need the Create route (or the teacher edits the text by hand); the prompt is a convenience, not a guarantee. Nothing is sent from the site: the prompt is built in the browser and copied (same privacy stance as My path).
- **Open questions for Matthew:** one prompt for every lesson or a variant per subject (maths and science boards, code playgrounds); whether very long lessons need a "paste the lesson separately" note; wording on the card; whether the prompt should be offered in the teacher guide and on Prepare as well.
- **Needs when built:** a copy button and a prompt template (a pure function beside `lesson-source.mjs`, so Create and the lesson page share it), a test that the prompt contains every rule line, and a whole-site publish (every lesson page changes). Related: roadmap/shared.md state of play, "Make your own version" (25 Oct 2026, built).

## Proposed (30 Oct 2026, Matthew; audit later, nothing built): deck "We are learning to" line and lesson summaries

Found on the Economics `scarcity-7/needs-and-wants` deck, which opened "We are learning to a need is something you must have...".

- **Cause:** the Today slide (`tools/teach.mjs`, around line 233) writes `**We are learning to**` plus the lesson's `summary:` with the first letter lowercased. That only works when the summary is one short verb-first sentence. Economics summaries are 3-5 sentence descriptions that start with a noun or a definition, so every one of them reads wrongly. Other new humanities, AI and English lessons may too. The summary is fine as a search and card description; the deck misuses it.
- **Rule to add (AUTHORING, and the humanities roadmaps' lesson notes):** `summary:` is a description for cards and search. The deck's learning goal is a separate field, for example `learning:` in `teacher.yml` (one verb-first sentence, "tell needs from wants and explain why wants never run out").
- **Audit:** list every lesson whose summary is not verb-first or runs past about one sentence, course by course (Economics, History, Civics, Geography first; then AI, English, ICT, Science, Maths, Code). Report counts before changing anything.
- **Fix in `teach.mjs` (done 30 Oct 2026):** `TEACHER_TEXT` in `tools/lesson-core.mjs` now accepts `learning:` in `teacher.yml`, and `tools/teach.mjs` uses `T.learning` when present, otherwise the first of `T.goals` (with `I can ` stripped), falling back to `lesson.summary`. Decks only, so no clips re-recorded; needs a whole-site publish (or publish-lessons for the affected lessons' `teach/` pages).
- **Also check:** the same slide and the teacher guide for other places that reuse `summary:` as a sentence.

## Proposed (30 Oct 2026, Matthew; audit later, nothing built): rules audit of existing humanities lessons

The rules in `AGENTS.md` and the self-check in `roadmap/checklist.md` only reach lessons written after them. Lessons already built (Economics `scarcity-7` and `businesses-7`, History, Civics, Geography `water-7`, `hass/inquiry-7`, `hass/before-year-7`) need one read-only pass first. Order: humanities first; then science (simplified models in student text); then AI, English persuade and ICT information as spot checks; maths and code a light scan. Report only; no edits until Matthew has seen the counts.

- **Contestable or simplified ideas stated as settled truth,** even where ACARA words them that way (for example "wants are unlimited", "markets allocate", one cause for a historical event, how a system of government should work; in science a simplified model such as shells, a one-layer greenhouse or rigid molecules presented as how things are, with its limits only in teacher notes). Judgement, not a checklist: flag where a student would be misled, not every use of "is".
- **Made-up names and brands:** cases labelled as made up; no names that read as real brands, people or places.
- **First Nations content:** nothing student-facing written by us; teacher notes quote ACARA's elaborations.
- **Pace labels and write boxes:** none.
- **Distractors and feedback:** each distractor is a real student error and its feedback names the slip; answer indexes match options.
- **Wording:** descriptor terms only, no invented aliases.
- **Deck fields:** `summary:` is a description; `learning:` present in `teacher.yml` once that field is built (see the deck audit note above).
- **Output:** a table per course (lesson, rule, line or step, suggested fix), counts per rule, and which fixes are mechanical and which need Matthew's call. Reviewer should not be the agent that wrote the lesson (a different chat or model).

## Decided (30 Oct 2026, Matthew): humanities (Economics, Civics, Geography, History)

- **One course per standard**, one lesson per waypoint, in the node file's order (pattern: `content/economics/scarcity-7/`).
- **Inquiry skills: a shared core plus subject skills.** One shared course for the skills that are near-identical in all four (develop questions, locate and organise information, create explanations and arguments), each lesson tagged with every subject's node; each subject builds only its own skills (History's source work, Geography's data and action, Civics' participation, Economics' response to an issue). The full investigation is class work, with a printable inquiry skeleton per subject. Plan: `roadmap/humanities-inquiry.md`.
- **First Nations wider items** are teacher notes: start from ACARA's own elaboration for that content, then local, community-approved material on top; we write no student text for them (Matthew, 30 Oct: the elaborations are the starting point; imported, see Done above).
- **First Nations content, refined (Matthew, 30 Oct, afternoon):** teacher notes stay as above. In student lessons we write no explanation of First Nations history or culture ourselves. Where a skill lesson needs an example (for example Budj Bim in History's "How we know"), use the custodians' own words: one short factual line that names its community and source, plus a link to how they tell it, about evidence and technology only, no ancestral remains or images of people who have died, no culture or belief. Deep time Australia (History K02–K07) and the First Nations values items stay pointer pages to First Nations-led resources until someone has been consulted. Before the humanities courses go beyond CGGS, ask a First Nations educator to review them (the school's Indigenous education contact or RAP group is the first ask). Economics and the other subjects follow this if it comes up.

## Done (30 Oct 2026, Matthew said go): ACARA elaborations in the node data

ACARA Progressions and Planner hold each standard's elaborations in `static/data/<subject>/<subject>_y<N>_width_tiers.json` (an `elaborations` list per standard). waypoints-kit had none of these files, and `tools/import-curriculum.mjs` reads only per-standard node files, so `data/curriculum/*.json` had no elaborations (an earlier note here wrongly said the data lacked them).

- **waypoints-kit** (`d93e6e5`): 122 `*_width_tiers.json` files copied into `data/<subject>/` (1,512 standards, 1,489 with elaborations); `SOURCES.md` has a row for them. Three Visual Arts early-years files (`visual_arts_yf`, `_y12`, `_y34`) are left out because the source files in Progressions and Planner are not valid JSON (unescaped quotes); fix them there, then copy.
- **Importer**: reads the width-tier files and stores `elaborations` on each descriptor (the standard, not a waypoint). All 14 `data/curriculum/*.json` re-imported; the diff is additions only.
- **Pointer pages** (`/teach/curriculum/<subject>/<code>/`) show an "ACARA elaborations" section, labelled as examples, not a checklist.
- **Create and the copied lesson prompt** (Matthew said include them, 30 Oct): `withContext` and `compactCurriculum` in `tools/kit-nodes.mjs` carry `elaborations`, and `nodesPromptText` lists them once per standard ("examples that illustrate the whole standard, not a checklist and not tied to one waypoint"). Create's compact curriculum files grew about 10%. `node experiments/kit-nodes-test.mjs` passes.
- Needs a whole-site publish (pointer pages) and a Create publish (`git push origin main:publish-create`) for Create.

## Changed by the Economics chat (30 Oct 2026): node check

`economics` added to `CHECKED` in `tools/progressions.mjs`, so Economics lessons must name their node (roadmap/economics.md).

## Changed by the Civics chat (30 Oct 2026): node check

`civics` added to `CHECKED` in `tools/progressions.mjs`, so Civics lessons must name their node (roadmap/civics.md). One misconception added to `misconceptions.json` (`parliament-changes-constitution`).

Lessons 2–5 add four single-line entries to `misconceptions.json`: `directly-elect-pm`, `complete-separation-australia`, `federal-is-state-boss`, `australia-only-westminster`. No shared tools changed.

## Changed by the History chat (30 Oct 2026): node check and catch-up links

- `history` added to `CHECKED` in `tools/progressions.mjs`, so History lessons must name their node (roadmap/history.md).
- `isCatchUp` in `tools/build-site.mjs` and `tools/prior-links.mjs` now matches `history/before-year-7/` as well as maths and science (one word in each regex), so a History lesson that lists a catch-up node in `assumes:` gets "What you should already know" and the catch-up lesson gets "Leads into". Nothing changes for maths and science.
- Four misconceptions added to `misconceptions.json` (`old-means-primary`, `origin-from-content`, `context-is-setting`, `purpose-is-content`).
- Not built (no shared code): the **Preview** label and the planned-units display from the humanities plan. History says "Preview (a pilot, not finished)" in the subject, pathway and course summaries, and shows planned courses as "Coming later" cards. A shared Preview label and greyed planned units inside a course are still open.

## Changed by the History chat (30 Oct 2026): completed courses without playgrounds

- Browser testing `history/evidence-7` found that `site/progress.js` sent every completed course to `playground/`, even when no playground existed. The completion card now uses an existing course chip in order: playground, recap, reference; otherwise it links back to a lesson. Courses with playgrounds keep their playground destination.
- This is a small shared progress-script change, not a lesson renderer or workflow change. Whole-site publish required. Browser checks cover the new History course, the existing Source origin and purpose course without a playground, and Python Foundations with its playground.

## Changed by the Geography chat (30 Oct 2026): node check

`geography` added to `CHECKED` in `tools/progressions.mjs`, so Geography lessons must name their node (roadmap/geography.md). One misconception added to `misconceptions.json` (`continuous-is-renewable`). New subject `content/geography/` (order 10).

## Decided (30 Oct 2026, Matthew): tutorials are pace-agnostic, in every subject

A tutorial never knows the class, so it never assumes a pace. This matches the Kit, where node files carry no pace profile and pace only comes in when a teacher divides up time. Applies to every current and future subject (Economics next).

- **Same waypoints, same order.** Lessons follow the node file's sequence and never teach a later waypoint early.
- **Build to the floor, offer the rest.** The untiered path is minimum width, which every student must reach. `tier: typical` and `tier: wider` steps are optional extras on the same waypoint, never a faster track.
- **Pace is the teacher's call, in class.** Lessons, teacher guides and class plans don't say "for a Consolidating / Steady / Advancing class" and don't assume Steady. A teacher note may say where a slower or faster class could spend extra time, but nothing gates or hides content by pace. No class tracking.
- **Protect the hinges.** On a hinge waypoint, include a check before moving on (and `smaller:` support), so a student doesn't leave with a thin foundation whatever the pace.

New subject chats: read this before planning a course.

## Decided (27 Oct 2026, Matthew): year grouping is not width

Wider steps add contexts at the same level and demand; content for older students is not width, in any subject, AI included. Nothing in a wider tier is acceleration. This reverses the AI courses' "wider steps for older students" (`content/ai/index.md`) and the 18 Oct fold of the Years 9 to 10 candidate into wider steps (`roadmap/learning-with-ai.md`). The 37 AI wider steps are sorted in Project doc `claude/ai-wider-steps-sort.md`: keep 18, reshape 10, move 9 (policy, law or research reading; a separate optional course or optional steps). No lesson, `index.md`, `CLAUDE.md` or `AUTHORING.md` text has changed yet. The English build no longer waits on this audit.

Provision (Matthew, 27 Oct): years are suggestions only, never rules for school adoption. A course, lesson or step may say "usually Years 7 to 9" as a teacher note; nothing gates, hides or tiers content by year, and a school may use any course with any class. Wording for `fit:` and descriptions: "usually Years X to Y", not "for older students".

Proposed, not built (27 Oct): optional content that is not width. `tier` is the only way to make a step optional, so optional steps pose as width. Suggested: a separate step-level marker (`optional: school | evidence | ...`), not needed to finish, shown under its own label and outside the width control. The 9 AI steps that are not width split into school context (5, need the school's own policies) and optional evidence (4, study or law reading). Per-step sort and options A, B and C: Project doc `claude/ai-wider-steps-sort.md`. Shared format: waiting for Matthew.

## Audit done (27 Oct 2026): misconceptions and wider steps against Kit (report only, nothing changed)

Full report: Project doc `claude/kit-alignment-audit.md` (notes: `claude/kit-alignment-audit-notes.md`). Waiting for Matthew's decisions before any fix.

- **Misconceptions:** none of the 79 read contradicts Kit (English all 16, maths 46 of 251 stratified, Systems 17 of 67). Kit names the same error in 14, covers the skill or topic in 31, says nothing in 33; 2 mis-tags found (`factor-pair-sign` in `non-monic-factorising`, `and-vs-or` in `data-clean`). 10 unused ids, 6 ids planted outside their `home`.
- **Wider steps:** Science 15 of 24 read trace to Kit `width.wider`, 7 are same-level breadth, 2 go beyond Kit (isotopes weighted average, allotropes); Kit's own wider items include harder standards (Rf at Year 7, mass-energy at Year 9). English 2 of 2 trace. ICT 6 of 6 are breadth. AI's 37 wider steps are declared "for older students" (`content/ai/index.md`), which conflicts with AUTHORING › Width tiers.
- **Kit data the site ignores:** the framework pairs five failure modes with the five response modes; Kit's glossary holds about 818 failure-mode entries (science and Digital Technologies); `import-curriculum.mjs` does not read them.
- **Formats:** `fault:` is `logic` for nearly everything outside code. `kind: belief | craft` maps onto the framework's five failure types.
- **Decisions needed from Matthew:** the width rule for AI; `kind` (two values or five); whether to fix the 2 mis-tags; when to import the glossary. Proposed `npm run check-kit-alignment` is not built.

## Proposed: misconceptions and wider steps traced to Kit (27 Oct 2026, English chat; audit done, see above)

Found while building English: built lessons in every subject use site-authored misconceptions and wider steps, and nothing checks them against Waypoints Kit.

- **What Kit has:** no misconception field in any subject (`tools/kit-nodes.mjs` says so). Each node does have `criteria` (success criteria, some written as a misconception to avoid, such as "Does not treat all connectives as interchangeable", AC9E4LA04 n2), `hinge` and `hinge_reason`, `modes` with reasons, and `width` (minimum, typical, wider statements). Create's primer and the pointer pages already use these; built lessons don't.
- **What the site has:** `misconceptions.json` (ids with a home lesson, written by each chat), `fault: syntax | runtime | logic | design` on error tasks (AUTHORING › Error tasks, made for code; all 16 English bug tasks say `logic`), and `tier: typical | wider` steps (AUTHORING › Width tiers: "more contexts, never harder content"; see also Speculative: width for faster students, above).
- **Proposed audit (all subjects):** for each built lesson, check its planted misconceptions against its nodes' `criteria`, `hinge_reason` and mode reasons, and its `tier: wider` steps against `width.wider`. Report mismatches (a wider step that is really acceleration, a misconception with no Kit basis where Kit names one, a Kit criterion misconception no lesson plants). Report first; fix with Matthew's say.
- **Possibly, after the audit:** a `kind: belief | craft` field in `misconceptions.json` (a wrong rule a student holds, or a context-dependent weakness such as a buried main point); fault types per subject (English: purpose, structure, link, audience, evidence) or none outside code; bug tasks that accept several lines or "missing between lines N and N+1"; a validate lint that lists misconceptions and wider steps that don't trace to Kit.
- **Decided for English (27 Oct):** wider steps are breadth only; Years 9–10 nodes wait for their own phase (`roadmap/english.md`).

## Changed by the code chat (28 Oct 2026): "You'll use" note on external project pages

- `tools/project-view.mjs`: on a project with an external part (Pattern Detector only), the "You'll use" note says the starters already use some of the skills. Other project pages are unchanged.

## Changed by the code chat (28 Oct 2026): Pattern Trainer models in the `classifier` widget

- `web-helpers/pattern-model.js` (new): reads a Pattern Trainer model file in the browser. `tools/build-playground.mjs` also copies it into the board's `vendor/` (it already goes beside students' pages with the other `web-helpers/`).
- `tools/render.mjs` (cache section only, so nothing re-records): a `classifier` board clip's hash also counts `web-helpers/pattern-model.js`.
- `playground-board/widgets/classifier.js` and AUTHORING › `widget: classifier`. Details: roadmap/code.md › Log, 28 Oct.

## Changed by the Learning skills chat (27 Oct 2026): cards for a second subject

- `tools/ict-cards.mjs`: `loadCardsFile` reads optional top-level `groups` (sections used instead of the course's units), `lede`, `search` and `more`; `ictCardsBody` takes `placeholder` and `more`. ICT pages are unchanged.
- `tools/build-site.mjs`: card pages and search entries for `learning/*` too (card entries now carry their own subject in `sp`). `tools/validate.mjs`: checks `learning/*/cards.yml`. `tools/search-view.mjs` (`SEARCH_HINTS.learning`), `tools/search-index.mjs` (teacher page), `content/teachers/index.md` (menu link), `misconceptions.json` (four ids).

## Changed by the English chat (27 Oct 2026): `cohesion` board widget, English subject

- New board widget `playground-board/widgets/cohesion.js` (script tag in `playground-board/index.html`, `.co-*` styles at the end of `style.css`): only English lessons use it, so no other clip re-records. AUTHORING › `widget: cohesion`; test `npm run check-cohesion`.
- Small shared edits: `tools/progressions.mjs` (`english` in `CHECKED`), `tools/search-index.mjs` (`english` in `STANDARD_SUBJECTS`, an "English" label for its standards, the English teacher page), `tools/search-view.mjs` (`SEARCH_HINTS.english`), `tools/check-lesson-boards.mjs` (walks `dist/english` as well as `dist/maths`), `misconceptions.json` (eight English ids), `content/teachers/index.md` (For English teachers link). Search gains about 280 English standards entries.

## Changed (26 Oct 2026): "Catch up first" links for Before Year 7 (science chat; Matthew agreed)
- `tools/build-site.mjs` (`catchUpIndex`, `conceptLinks`) and `tools/lesson-view.mjs` (`linksHtml`): a lesson under `maths/before-year-7/` or `science/before-year-7/` is found by its `node:`; any lesson whose `assumes:` names one of those nodes gets a "Catch up first" row, and the catch-up lesson gets a "Leads into" row listing those lessons. Node refs in `assumes:` were already accepted and did nothing visible, so no lesson file needs a new field.
- Course pages: a course whose lessons link to catch-up lessons gets a "Before Year 7" line in its teacher strip (`.wpt-catch`), linking to the catch-up course.
- The existing "Builds on" / "Put to work in" rows still read only theory concept ids.
- Needs a full publish (every page with a link changes).
- Kit (waypoints-kit): the same node ids can be shown there; to do.

## Changed (26 Oct 2026): back link on trail maps
- Every pathway trail map (`<subject>/paths/<id>/` in all seven trail subjects: Code, Maths, Science, How computers work, Engineering, Learning with AI, ICT skills) now has a "← All <subject> pathways" link at the top left of the map itself (`opts.back` in `trailHtml`, `tools/trail.mjs`; class `wpt-tback`), because people navigate by the map rather than the chip row. On phones it is the first item of the list. The chip row stays. Tested at 1280 and 390 px, light and dark, keyboard reachable, `check-blockers` clean. Needs a full publish (shared page code).

## Changed by the ICT chat (26 Oct 2026): bug lines scroll inside their box
- `.buglines` in `tools/lesson-view.mjs` gains `overflow-x:auto`. A planted-mistake list with long lines (prose working in ICT lessons, long code lines anywhere) pushed the whole page sideways at 390 px; now only the list scrolls, as code blocks do. One CSS property, no change to markup or behaviour; lesson-view is outside every clip hash, so nothing re-records. Needs the full publish to reach every page.

## Changed by the ICT chat (25 Oct 2026): `sheet` board widget, ICT skills subject

Shared files touched, all additions: `playground-board/index.html` (one script line for `widgets/sheet.js`), `playground-board/style.css` (the `.sh-*` and `table.sh` rules at the end), `misconceptions.json` (two ids, `typed-answer-stale` and `row-before-column`), AUTHORING.md (`widget: sheet` entry), CLAUDE.md (an ICT skills section) and ROADMAP.md (index line). New: `tools/check-sheet.mjs`, `roadmap/ict.md`, `content/ict/`. The new subject appears in the Subjects menu once published (order 7). Update (25 Oct, later): the `sheet` widget gained copy and paste, fill down, sort, filter and a chart (more `.sh-*` rules at the end of `style.css`), and `misconceptions.json` has seven more ids (`same-formula-every-row`, `fixed-cell-moves`, `comma-not-colon`, `zero-for-missing`, `words-need-quotes`, `sort-one-column`, `pie-for-change`); all additions.

## Changed by the ICT chat (26 Oct 2026): `page` board widget, ICT skills › Documents and slides

Shared files touched, all additions: `playground-board/index.html` (one script line for `widgets/page.js`), `playground-board/style.css` (the `.pg-*` rules at the end), `misconceptions.json` (nine ids: `fake-heading`, `restyle-by-hand`, `order-needs-numbers`, `list-for-table`, `cram-the-page`, `slide-is-a-page`, `decoration-picture`, `low-contrast`, `no-credit-needed-online`), `content/ict/index.md` (a second pathway), AUTHORING.md (`widget: page` entry) and CLAUDE.md (ICT section). New: `content/ict/documents/` (nine lessons, no clips). The course appears with the next full publish.

## Open projects: layered help and benchmark pictures built 25 Oct; benchmark clips not started (code chat; Matthew agreed)
Built 25 Oct: milestone `hints:` (up to 3, one at a time), `reveal: true` + milestone `way:` ("Show one way", unlocked by ticking the earlier milestones or using every hint), a "Help used" list on the Show your teacher card, and hints and `way` in the teacher guide (AUTHORING › Open projects; `tools/projects.mjs`, `project-view.mjs`, `site/project.js`; the three micro:bit crossover briefs use it). Needs a full publish (site script and page layout). Not built: the benchmark clip (editing `render.mjs` outside its cache and main sections re-records every clip, so it needs its own plan), and rolling hints out to the other 34 briefs.
**Benchmark pictures built 25 Oct** (two-picture version, Matthew's call): `benchmark:` on a brief lists 1 or 2 `{ file, caption }` pages of a finished state (typed-in numbers, no `<script>`), drawn by `render-pictures` (projects section, `projects/<course>/<id>-bench-N.png`) and shown on the brief page as "Ways it could look when it works". Used on the three micro:bit crossovers. Needs a full publish.
**Plan for benchmark clips (later; not started).** The recorder (`render.mjs`) is lesson-shaped: `loadLessons`, `startApp(lesson)`, `<slug>/clips/`, build-site's clip lookup, `render-shards.mjs` and the workflows all assume a lesson. Cheapest route: treat a benchmark as a one-step pseudo-lesson with an output-only `clip:` (two finished versions, no code), enumerated in `render.mjs`'s main section and `render-shards.mjs` (neither is hashed), recorded by the unchanged recording code (so no existing clip re-records), output to `<course>/projects/<id>/clips/`, and read by `writeProjects`. Needs: a loader for `benchmark-clip:` in `projects.yml`, a pretend-micro:bit script for the pages (serial lines typed on a timer), a full publish and a check that `check-clips`/seed reuse find the new folder. Cost is mostly content (two versions per brief) and MakeCode parts (makecode.com unreachable here; self-hosted `pxt-core` + `pxt-microbit` from npm is an untested option for build-time use only).
Original proposal:
Open project briefs (`projects.yml`, 37 in 15 courses) show students a goal and milestones only; the `example` is drawn as a picture for teachers and never shown to students. Proposal, for every brief at once:
- **Benchmark clip** (`benchmark:`): a short output-only clip of two different finished versions at the expected level, captioned "one way it could look" against the milestones. Sets the standard and shows how the parts join (micro:bit, wire, page) without a single answer to copy. Never the code or build steps. Recorded by `render.mjs` like other output-only clips; needs `projects.mjs` and `render.mjs` changes and a full publish.
- **Layered help per milestone** (`hints:` on a milestone, escalating as in lessons): a student opens them one at a time; nothing else is revealed.
- **Show one way** (student, optional per brief): the example's relevant part for one milestone, revealed only after the student has ticked the milestones before it or opened every hint for it. Off by default; a teacher can turn it on with `reveal: true`.
- **Teachers**: the guide keeps the full example (as now), the benchmark clip, the milestone hints and the usual stuck points.
Open question: whether opening "Show one way" should show on the "Show your teacher" card (honest record, like the reflection line). Start with the three micro:bit crossovers, then the rest.

## Open in Prepare / Print, and a security gap in Prepare (25 Oct 2026, code chat; Matthew asked)

- Built: guide pages have **Open in Prepare** (slides) and **Open in Print** (worksheet, cheat sheet) links (`prepareLink` in `tools/teach.mjs`); Prepare's main page and `/print` read `?src=<address of the .md>`. Both are on `main`; publish with the quick publish once Prepare has deployed.
- Step 1 of the security fix is on a Prepare branch, `trust-src-param`, not yet merged: `?src=` loads at once only from the Waypoints sites, localhost and our two GitHub accounts; any other host asks the teacher first.
- **To do (step 2): sanitise what Prepare renders.** Prepare's slides (Marp, `html: true`) and Print (marked) show raw HTML from the loaded file with nothing removed, so a pasted or linked file can run script in Prepare's page (tested 25 Oct: an `<img onerror>` ran on both). Step 1 only limits where `?src=` loads from; pasting or importing a file is still unsafe, and so is a link from a trusted site if that site's file is ever changed. The fix is to strip script, event handlers and `javascript:` links from the rendered output, without breaking the things decks rely on: `{{embed}}` boards, Mermaid diagrams, answer controls and Marp's own styles. Needs tests with real decks (`npm run check-decks` here, Prepare's e2e tests there). Not started.

## For every chat (25 Oct 2026, review chat): checklist added; tidy your own roadmap file when you reach a pause

- `roadmap/checklist.md` now holds the steps before a push, a lesson review pass and what to say after a push (which publish route, which edits re-record clips). Handoffs and roadmaps should link to it instead of repeating those lines. Add a line there when you find a step that was missing.
- The roadmaps have grown long (`shared.md` is about 800 lines, `science.md` and `maths.md` over 300 each). Not urgent, and not for the review chat to do while you are editing. At a natural pause, move your finished blocks (Built, Done, Changed) to `roadmap/done-<subject>-<month>.md` and keep a one-line pointer in the live file, so the live file holds only what is open. For `shared.md`, whichever chat built a block moves it; the review chat will do the leftovers when the others are idle.
- Keep the newest block of each kind in place until it has been published once; "ready to publish" notes are how a returning chat sees what is still unpublished.

## Built (25 Oct 2026, code chat; Matthew said go): one name per idea across pathways, and a teacher view

Details and reasons in `roadmap/code.md` › Proposed (Ideas across pathways). Two shared changes:
1. `tools/concepts-core.mjs`: an alias map so the JavaScript ids that name the same idea as MakeCode and Python resolve to one (`array` → `list`, `array-index` → `list-index`, `for-count` → `repeat`, `return` → `return-value`, `property` → `attribute`, `math` → `math-fn`, `event` → `callback`). No lesson tags change; `object` stays separate (it means different things in Python and JavaScript).
2. `tools/teach.mjs`: a generated teacher page, core ideas against MakeCode, Python and Web, each cell the lesson that introduces it, linked from the Code course guides.

**As built:** `SAME_IDEA`, `sameIdea()` and `CORE_IDEAS` in `tools/concepts-core.mjs` (also `html: { list: 'html-list' }`, so HTML's bulleted lists don't count as data lists, and a MakeCode `callback` fact concept with no code test, so the hidden-assumptions lint is unchanged; micro:bit Wait for a press and Arcade Move with the controller now introduce it). The table is worked out by a new pure `tools/ideas-page.mjs`; `tools/build-site.mjs` writes `/teach/<subject>/ideas/` for any subject with more than one pathway (today only Code), lists it on the teacher guide index under "Across pathways" and links it from that subject's course guides ("Ideas across pathways"); built before the course guides so the link only appears where the page exists. `teach.mjs` is unchanged. Reaches the site with a whole-site publish.

## Built (25 Oct 2026, review chat; Matthew said build it): `smaller:` push (1). Proposed by the maths chat: support when it's needed, invisible when it isn't

**Built, push (1):** `smaller:` on a step or task, with every one of the Code chat's asks below. In `tools/lesson-core.mjs`: `SMALLER_TYPES` (question, number, trace, answer; answer only in `language: maths`), `validateSmaller` (a mapping of `check` and optional display-only `code:`; must sit beside a real check; on the task when a step has tasks; no `starter:` yet; no `smaller:` on a Predict outside `maths/`; no `code:` in MakeCode lessons), and lead-in options are arranged like any check's. In `tools/lesson-view.mjs`: `checkHtml` takes a lead-in (`{ k, key }`, key `<slug>/<step or task>~smaller`, never unlocks); `smallerOf` renders a closed `details.smaller` ("Need a smaller step?") *above* the hints, with its `code:` through the same `codeOf` as a step's `code:`; the full-screen drawer drops `.smaller` from its clone and shows one line pointing back to the page; Numbas loads when a lead-in is an `answer`. Never counted: progress-manifest, course rows, the course menu ticks, task pills and the drawer's tick bar all read explicit key lists, so the `~smaller` key is in none of them (tested). `tools/effort.mjs`: `no-smaller`, one line per lesson in `npm run effort` only (not validate's summary): a hinge node, or a `stuck:` list from the parsed teacher data (so the 76 single-file lessons count), and no `smaller:` (603 lessons today). `tools/check-html-lessons.mjs` finds checks by key (a lead-in sits above the real check, so "first `.check`" would have picked it) and answers lead-ins. AUTHORING › Smaller step, with the voice rules. Tested in Chromium on temporary lead-ins (maths Predict number, maths task trace, code Make number with `code:`, HTML task number in `check-html`), then removed: no lesson has one yet. No clip re-records (`lesson-view` is not in a clip hash); Create picks it up on its next publish (`publish-create`), lessons on their next publish.

**Built, push (2), board lead-ins (25 Oct, review chat):** `smaller: { starter, check, height? }`. In `lesson-core`: `starter:` must be a region in the lesson and the step's playground `board` or `science`; `height` 200–900; a `board` lead-in check needs its own `starter:`; `board` added to `SMALLER_TYPES`. In `lesson-view`: the lead-in's board is the step's `tryHtml` for a stand-in step with id `<id>~smaller`, so the board reports under that id and the lead-in check's `data-play` matches it (the step's own board checks never see it, and the lead-in never sees the step's board); its iframe is `data-src` until the fold's `toggle` opens it. Three page scripts that took the first `.try` or iframe in a step or task set now skip `details.smaller` (the task-drawer setup, `?full=`, and the board's "Reset to this task's start", which in a task step would have found the lead-in board first, since task bodies come before the step's playground). Tested in Chromium on a temporary lead-in (Changing the subject, Modify task 1; removed): not loaded until opened; its own id; the step board doesn't tick it and it ticks only itself; only its `~smaller` key stored; task pill untouched; `?full=` and the drawer use the step board; no page errors. Validate refuses a board lead-in with no `starter:` and a `starter:` on a step without a board. The `push: hot | cold` option on `coordination` (for the feedback lead-in) is the science chat's widget change.

**Next, in the subject chats:** maths: the Changing the subject Predict lead-in (step (2) below); code: the three lead-ins in `roadmap/code.md`; science: hints first, then board lead-ins (push (2), shape in `roadmap/science.md`); systems: the three in its plan. Still not built: MakeCode `code:` lead-ins, Parsons lead-ins.

**Who does push (2), board lead-ins (25 Oct, Matthew agreed):** the review chat builds the shared mechanism (the lead-in's own board, loaded on click; its check reads only that board; validate requires `starter:` to be a region in the same lesson; never counted; AUTHORING section), as for push (1). The science chat writes the pilot lead-ins (physics-8/transform, earth-10/greenhouse; regions and checks in `roadmap/science.md` › Board lead-ins) and later the `push: hot | cold` option on `coordination` for biology-9/feedback. Science is ready: Year 8 hints are in.

The concrete form of "below Steady: support on demand" in *Speculative: width for faster students, support for stuck ones* (12 Oct). Applies to every subject. (Proposal text kept as written; see Built above.)

**Principle.** Every check carries its support folded: hints that lead toward the answer, and, where the move has a picture, a smaller step that does half the move on the picture first. A student who has the foundations never sees it. A student who doesn't opens it, builds the step they're missing, then does the real check. The lesson itself slows down for no one. (ZPD without knowing the student: the student decides, not the lesson; it fits the self-paced design and needs no accounts.)

**Each subject has its own "picture":** maths a bar model, balance or area tiles; coding a trace table or the same code with one line fewer; science the board set to the simpler case.

**Mechanism (small, shared):** a `smaller:` field on a step or task, beside `hint:`, holding one lead-in check closed by default ("Need a smaller step?"). The hint folding carries it; the lead-in is a normal check (question, number or answer) marked and kept like any other but never needed to complete the lesson. One field in `lesson-core` (parse and validate), one block in `lesson-view` (render under the hints), a paragraph in AUTHORING, and `npm run effort` lists steps with no `smaller:` on a hinge node or with a `stuck:` entry in `teacher.yml`. Authors add one where a move has a known sticking point, and nowhere else.

**Amended 25 Oct 2026 (review chat, Matthew agreed) after a read of all six subjects.** The first draft above said `support:` on the check, beside `hint:`, taking board lead-ins too. Five changes:
- *Name and place.* `support:` already means the teacher's line in `teacher.yml` (TEACHER_TEXT) and the inline teacher block; two fields with one name would confuse authors, Create and the worksheet. The student field is `smaller:`. And `hint:` sits on the step or task, not on the check object, so `smaller:` goes there too (a task with a check gets its own).
- *Question, number and answer first; boards later.* "The board set to the simpler case" needs its own starter (a `boards.yml` or `formula.yml` region) and a place beside the step's board, so a board lead-in is `smaller: { starter, check }` and touches the `try:` layout. Build the three plain kinds first; they cover the maths first use. Decide the board shape after the pilot, with the science examples below.
- *Never counted.* Every check with a `data-key` lands in `progress-manifest.json` and the course page's "n of m done". The lead-in's key is left out of the manifest and the course row, or "never needed to finish" is false.
- *Not on a Code Predict.* A smaller step before lock-in hands over the misconception the Predict exists to surface. Maths Predict is different (the first use is "do the move once with numbers"), so the rule is per shape: PRIMM Predict no; maths Predict and science Engage yes where the step is already a move.
- *Second trigger for the lint.* `hinge` and `hinge_reason` come from Kit nodes, so only maths, science and systems have them (282 of 591 lessons; Code has 6 `node:` tags, Engineering and AI none). Every lesson does have `stuck:` (see / ask / fix) in `teacher.yml`, and `stuck.ask` is the lead-in question a teacher would use. The lint flags a step with no `smaller:` when its lesson is on a hinge node *or* has a `stuck:` entry; authors lift the wording from `stuck.ask`. That also answers the open question below for the non-maths subjects: written per lesson, from `stuck:`, not generated.

**Where it would land first, by subject** (one or two checks each, found in the review; the picture is what the smaller step shows):
- *Code:* turtle-decisions Make (a trace table of `size` against `< 60?`; lead-in: how many passes are red?); turtle-parameters Make (the same code without the turn; lead-in: 6 copies, how many degrees each?); console-check Modify or its bug task (a trace with `first.isdigit()`, `second.isdigit()`, `and`). Lead-ins fit code, bug and trace checks well (a pre-filled trace row, the same code one line fewer, a filled Parsons).
- *Science:* no science lesson has a `hint:` at all (0 of 115; Code 130 of 130, maths 118 of 121, systems 44 of 46, Engineering 24 of 46, AI 5 of 57), so there is nothing for the fold to sit beside yet; hints come first, in the Year 8 review pass. Board lead-ins when built: physics-8/transform torch (a two-stage chain, Wires → Bulb: did the type change?), earth-10/greenhouse (the climate board in `mode: balance`, in and out arrows only: if out < in, does T rise?), biology-9/feedback (one direction only: is sweating on now?).
- *Digital systems:* binary-patterns "fewest bits for 100" (the bits board at six cards, all up: can six reach 100?); data-as-numbers Make "Yes" (the decode board at one cell: 97 shows a; make e); shell/pipes Vary (`head -n 2 pets.txt` alone, which that lesson never teaches before asking for it).
- *Engineering:* winch worked example 16 → 40 seconds to lift 1 m (three steps: turns, turns a minute, seconds; the wrong-answer feedback already names the slips); Arduino `&&` band (the one line with the knob at 200, 500, 800 and each half's result).
- *Learning with AI:* follow-up-dialogue Explore (a worked example on one reply); illusion-of-competence Evaluate (a half-done frame: check it, then "still not proved: ___"). Mostly question lead-ins; no boards.

**Maths rules it sits with** (from the week's review of the pilot lessons; the maths end of the same idea, to go into `maths-structure` as a "Writing the move" section rather than "Accessibility", since they are rules for writing a lesson and maths teachers would read Accessibility as a disability checklist; 5–8 are already decided elsewhere and are collected here):
1. *Picture before symbols.* Every rule is a picture first (bar model, balance, area tiles); the symbols label parts of the picture; the same picture carries through the lesson.
2. *Numbers before letters.* The student makes the move once with real numbers in a situation; the formula is written afterwards as the record of what they did.
3. *Every symbol points at something* the student can name in the situation (spatial or abstract-but-real: money, marks).
4. *Fluency after meaning.* Bare-symbol practice belongs in Practise, once the picture is there. Still a goal; it is about order.
5. *Show the question, never the answer*, in anything before the student commits (hook, intro, drawing: a "?" where the unknown is). Checkable: validate can warn when a hook contains the Predict answer.
6. *Say it as you'd say it* to a student at their desk (no labels or stage directions in the prose).
7. *Read once, then fold.* Anything the student read on an earlier lesson is one line, opened on click (the stage list is done).
8. *One move, one picture, one situation* the lesson returns to at the end.

**First use:** maths/algebra/rearranging. Its Predict asked students to pick between four symbolic forms of P = 2l + 2w before they had done the move; the lesson side is done (5378451: the fence with numbers, 20 m of fence, 6 m long, how wide, on the first row of a bar model; Investigate adds the bar model row by row beside the worked example; Make draws the same bar model for the test marks). What remains is the shared change and one line in that lesson: the Predict step gets `smaller:` (a number check: take off the two lengths first; what is left for the two widths?). Then a pass over the Year 7–8 manipulation lessons to list which have no picture behind their rule (8b4fd82 lists them).

**Maths chat's note for push (1)** (25 Oct): the maths openings put a hand-drawn `<figure class="situation">` (inline SVG) in step bodies, on Predict steps and in Make tasks (Changing the subject, Finding a side, Pythagoras, the five Algebra Predicts). If the full-screen task drawer clones step text, it will clone those too; they are plain SVG with an `aria-label`, so cloning is fine, but a cloned figure should keep `max-width: 100%` so it fits the drawer. Maths lead-ins: `answer` (with `form:`) and `number` cover the six lessons ready for `smaller:` (Changing the subject's Predict and the five picture Predicts); the maths chat adds those lines after the push lands, and touches neither `lesson-view.mjs` nor `lesson-core.mjs` until then.

**Code chat's asks for push (1)** (25 Oct; reasons and the three Code lead-ins in `roadmap/code.md` › Proposed):
- `trace` as a lead-in type, and an optional display-only `code:` on the lead-in (`smaller: { code: file.py#region, check: {…} }`), or Code has nothing to write: its "picture" is a trace row or the same code one line fewer.
- The "Need a smaller step?" fold goes *above* the hints, not under them: Code hints escalate to the code, so under them it arrives after the answer.
- The full-screen task drawer (`lesson-view.mjs`, `fill()`) must skip the `.smaller` block (it would clone a dead check) and keep it out of its code-check tick bar; one line in the drawer can point back to the page.
- Validate: lead-in types question, number, trace (answer for maths), never code, predict or flag; no `smaller:` on a `stage: predict` step or `type: predict` check in non-maths lessons.
- The lint reads `stuck:` from the parsed teacher data, since 76 single-file code lessons keep it in `lesson.md`. Every code lesson has `stuck:`, so for lessons without a hinge node, report per lesson in `npm run effort`, not a per-step validate warning.
- Also leave the lead-in out of the course row's per-check segments and task sub-pills; `check-html` and `check-makecode` still check its answer. MakeCode lead-ins (a `code:` needs a blocks picture) can wait.

**Order:** (1) `smaller:` for question, number and answer, the manifest exclusion, the AUTHORING paragraph and the two-trigger lint, in one shared push; (2) the one line in Changing the subject; (3) science hints in the Year 8 review; (4) board lead-ins, shape decided from the pilot.

**Open:** for maths, whether some lead-ins could come from the Practice templates instead of being written; how it shows on the deck (probably not at all) and the worksheet (probably as the teacher's `support:` line, which already exists).

## Changed by the science chat (25 Oct 2026): rigour fixes in three shared-board widgets

- `energy.js` coaster: at a turning point on a slope the car froze (the energy sum gives zero speed, so it never moved again); it now rolls back when gravity along the track beats friction, so on the high-friction track it settles in the valley. The end message says how much became heat and sound and how much is still potential energy (it used to say all of it became heat and sound).
- `charge.js`: static mode's Touch metal is now **Join with metal** (a conductor between the two, so the electrons go back to the wool; touching earth would send them to the ground). Current mode's conventional-current label moved to the top wire, where it points the right way.
- `cell.js`: the egg's "Jelly coat" is the "Protective coat (zona pellucida)".
Clips on these widgets re-record on the next full publish. AUTHORING updated for the charge buttons.

## Changed by the science chat (25 Oct 2026): `push:` and `e` on the coordination widget

`playground-board/widgets/coordination.js`, feedback mode: `push: hot | cold` lets the Air slider go only one way from 22 °C (for the biology-9/feedback board lead-in in push (2)), and the board reports `e` (1 sweating, −1 shivering, 0 neither). No other board changes; only clips on the `coordination` widget re-record. AUTHORING › coordination updated, including what the model really does: in steady heat a smaller response stays on to hold 37 °C.

## Changed by the science chat (25 Oct 2026): Year 7–10 rigour pass, more widget edits

All widget code, so clips on these widgets re-record on the next full publish; no format or authoring change except where noted.

- `universe`: reports `x`, the number of home galaxies space has been expanded from (documented in AUTHORING › universe); the redshift lesson's check uses it, because `e` never reset.
- `climate`: the info line says the model lets all sunlight reach the ground (really about half is reflected or absorbed on the way down).
- `forces`: the status line no longer says the forces are balanced when only left and right balance; it says up and down do not.
- `selection` (in `playground-science/main.js`): the end message says whether the average colour moved towards or away from the ground; with a student hunter, Done hunting needs at least 5 beetles eaten; with `change: on`, the task is not done until the ground has been changed.
- `cell`: the chromosome and nucleus zoom text says the X is the copied chromosome.

## Changed by the science chat (25 Oct 2026): `kscale:` on the reaction widget

`playground-science/main.js` (science-owned, noted here because every science-board clip hashes it): the `reaction` widget takes `kscale:` (kelvins shown per model kelvin; default 1, so no other board changes). Used by Chemistry 8 *Hotter or colder?* so nitrogen + oxygen runs at a true 1800 K instead of 600 K. AUTHORING › Atoms and reactions has the line. All 17 science-board clips re-record on the next full publish.

## Done (25 Oct 2026, systems chat): Processes row on the systems map; small shared additions

- `tools/curriculum-map.mjs`: `BORROW` lets a subject's map take named descriptors from another subject's data. Systems borrows AC9TDI8P13, 8P14, 10P13 and 10P14 from `digital-processes.json` as a row "Security and privacy (Processes)", so Cyber safety and the CTF's page-source lesson are on a map at last (before, P-tagged lessons were on none). `loadCurriculum` merges them; a two-year DT Processes code (its digit is the band's last year) starts a year earlier, as science's two-year descriptors do. Maths and science maps are unchanged (no `BORROW` entry).
- `tools/concepts-core.mjs`: `THEORY` gains `hex` (introduced by Digital systems › Hex: binary in fours).
- `misconceptions.json`: `lock-with-own-key`, `hex-digits-joined`.
- Not touched: `lesson-core`, `lesson-view`, AUTHORING. Systems uses `smaller:` (a4e344d) as built; board lead-ins wait for push (2).
- Later (25 Oct): `playground-board/index.html` gains one widget line, `widgets/parts.js` (Starting out; widget script lines are outside the core hash, so no other clip re-records); `widgets/network.js` gains `simple: on` (re-records network clips); `misconceptions.json` gains five Starting out ids.

## Done (23 Oct 2026): stage list folded on every lesson page (maths chat, Matthew asked)

The stage list under a lesson's intro (Predict: …, Try: …, and so on) was the same on every lesson and long to read. `lesson-view.mjs` now folds it into a closed `<details class="legendbox">` whose summary names the stages in one line ("How this lesson works: Predict, Try, Investigate, Modify, Practise, Make"); the descriptions open on a click. Every subject and shape, no lesson changes; tested on maths, code, science, systems and engineering pages. Reaches the live site with each lesson's next publish, or all at once with a whole-site publish. The per-step chip (the same description inside each step) is unchanged.

**Done (25 Oct 2026, maths chat; Matthew asked): wrong rearrangements get their own feedback.** `answer` checks with `form:` matched feedback with `F.check(fb, v, '')`; with no form, the checker read `x = …` as a true-or-false comparison and called every pair of equations the same, so every wrong rearrangement got the first feedback message. Two fixes: `lesson-view.mjs` now matches feedback with the check's own form (`F.check(v, fb, form)`), and `maths-forms.mjs` compares two equations side by side when no form is named. Two cases added to `data/forms-cases.json`; `npm run check-forms` passes; all 16 feedback pairs in Changing the subject verified in a browser. Any lesson with `form:` checks picks it up on its next publish (the checker is copied into each page). **Still open:** `teach.mjs` puts an intro SVG into the deck's speaker note as raw markup (strip `<figure>`/`<svg>` in `note()`). Pushing main to `publish-lessons` found no changed lessons on 22 Oct; naming the lessons works.

## Done (27 Oct 2026): publish speed, setup and pictures (not yet run in Actions)

Timings from runs 36 to 42 (25 to 27 Oct): drawing new pictures took 8, 15 and 22 minutes in the three big runs, all in one job before clips could be planned; recording was steady at 18 to 20 minutes per job; but record-job setup took 22 to 39 minutes on 6 of 16 jobs (runs 40, 41) because the Ubuntu mirror ran at about 49 kB/s (ffmpeg's 69 MB took 24 minutes, Playwright's 25 MB of fonts 8 minutes). Small runs cost 20 to 30 minutes of fixed work (clip planning 2 to 6, "fill in unchanged clips" 2 to 6).

- `72f0150`: ffmpeg installs with `--no-install-recommends`, a 5 minute limit and up to 3 tries (publish.yml and publish-lessons.yml). The second `apt-get update` is gone. A retry around Playwright's `--with-deps` install (`40a9999`) was reverted the same day: the time limit stopped the wrapper but not the root `apt-get` it started, which kept the package lock, so the retries failed with "Could not get lock /var/lib/dpkg/lock-frontend" and the job failed. Not retried; a safe version would run `apt-get` itself under `sudo timeout` (download first, then install).
- `ee87973`: pictures are drawn in parallel `draw` jobs (one per 25 pictures still to draw, at most "jobs"; `WP_SHARD=k/n`; `tools/merge-pictures.mjs` joins them in `plan`). Tested locally on one section only.

First run (#44, 27 Oct): 55 minutes in all (69 and 95 before). Draw jobs took 1 to 2.4 minutes each, except one that spent 6.8 minutes in the browser install; record setup was normal on 7 of 8 jobs (worst 12.8 minutes, was 22 to 39). Still to check: whether 25 pictures per job is the right size (each job pays a few minutes of setup). Still open: the fixed costs above (planning and fill-in grow with the whole site, not with what changed), narrower clip hashes and one browser per job (the last two need `render.mjs` edits, which re-record every clip).

## Done (11 Oct 2026): parallel clip recording

The publish workflow now records clips in parallel jobs: `plan` → `record` (matrix, default 4, set in the Run workflow form) → `publish`. `tools/render-shards.mjs` asks `render.mjs --seed --check` what needs recording and shares lessons out by clip count. `render.mjs` is unchanged, so this re-records nothing. Caches (11 Oct): the browser, pip, the Kokoro model (key: `tools/voice.mjs`) and spoken lines (`.voice-cache`: each record job uploads its lines, the publish job merges them with the last set and saves `voice-<run id>`; old lines are never pruned, so clear the cache in the Actions tab if it grows large). Picture seeding downloads 16 at a time (about 1 minute down to a few seconds in the plan job; `pictures()` is not part of any picture's hash, so nothing redraws). Sharing picture drawing between jobs is not worth it for normal runs (about 3.5 minutes) and would add a stage, since explain clips depend on the pictures; revisit if full redraws (after a `SHARED` bump, 558 pictures) become common. Not done yet: narrow the clip hash (`render.mjs` source and whole playground folders re-record every clip on any edit); one browser per job instead of per clip.

## Done (11 Oct 2026): cooling widget `steps`, igneous clip

`widget: cooling` takes `steps: N` (1 to 10 cooling steps per frame, same result). The recorder plays about 7 frames a second, so the igneous explain clip (Slow cooling, about 290 frames) never reached "Solid rock" inside the check's 10 s window and failed in CI; with `steps: 6` it records. Open: in this sandbox the clip is still about 67 s (over the 30 s guide) because every click takes 7 to 15 s on that page; check the real length in the next run's log (the over-30 s warning) and shorten the clip if it is long, for example one cooling run instead of two. Editing `playground-science/main.js` re-records every science clip once (27 lessons).

## Effort: "if coding is hard, why do it" (11 Oct 2026)

Students expect coding to be fun and easy and read struggle as failure. Response: cut friction (bad hard), keep and name the thinking (good hard). AUTHORING › Effort and struggle has the rules.

**Done (shared tools, all subjects):**
- Predict and Make stage notes say a wrong guess is fine and a few tries are normal (`STAGE_INFO*` in `lesson-view.mjs`).
- **Now you can** at the end of every lesson, from `teacher.yml` `goals` ("I can" dropped). Every lesson already has goals, so it shows everywhere.
- `teacher.yml` `struggle:` (where it is hard on purpose, what to say instead of rescuing): For teachers, teacher guide, slide notes on the first Modify or Make.
- Lint `tools/effort.mjs`: one summary line in validate; `npm run effort [path]` lists no `struggle:`, no `goals:`, and first hints that give the answer (solution code of 10+ characters not in the starter, or a number check's answer).

**To do:**
1. **Audit existing lessons**, course by course from `npm run effort` (230 without `struggle:`, 18 first hints flagged, mostly HTML/CSS; some are judgement calls). Add difficulty cues to reliably hard tasks while there. Editing `teacher.yml` changes the lesson folder's clip hash, so batch it per course before a publish.
2. ~~Friendly Python errors~~ **Done 11 Oct**: `tools/python-errors.mjs` in both Python playgrounds, tested by `npm run check-python-errors` and in a headless browser (CLAUDE.md › Playground runtime). Next: watch real student errors in class for slips it misses.

## Done: home page and plain pages (11 Oct 2026)

`content/index.md` `about:` renders on the home page (About, Why we made this, How the lessons work). Any other `content/<name>.md` is a plain page at `/<name>/`: `approach.md` (Why we teach this way; references checked) and `behind-the-scenes.md` (how lessons are made and checked, privacy). Claims stay true to what the tools do; checks not yet built are worded as aims.

## Shared: progression data and node check (decided 11 Oct 2026; built 11 Oct by the maths chat, see below; for maths and science)

The `introduces`/`assumes` scan suits code, where a dependency is a construct on screen; each subject has a different kind of dependency, so maths and science also get their own in-lesson checks (see their files).

- **Data:** export the kit's nodes and `prior_knowledge` for the covered descriptors into the repo (a small JSON file), and add `node:` (descriptor and node) to every maths and science lesson.
- **Check:** warn when a lesson's node depends on a node that no earlier lesson covers and that the lesson does not list in `assumes:` (taught in class). Without `assumes:` most science lessons would warn, since one tutorial per hinge node leaves most prior nodes to class teaching. It finds gaps between nodes only; ideas used inside a lesson that the kit does not record still need a read-through.

Build it once, in one chat, and note here who is building it before starting; the other subject then tags its own lessons.

**Built by the maths chat (11 Oct 2026).** Data as pasted progression pages (`data/progressions/<subject>/<code>.md`, the waypoints-kit markdown export, since the kit repo is unreachable from here; README there), parsed by `tools/progressions.mjs`. Lesson frontmatter `node:` and `uses:` (`tools/lesson-core.mjs` keeps them); `assumes:` also takes descriptor and node codes. Warnings in `validate.mjs`; `npm run nodes` (map) and `npm run check-nodes` (tests, `tools/check-progressions.mjs`). Only subjects in `CHECKED` (maths) must name a node: science adds `data/progressions/science/` pages, tags its lessons and adds itself to `CHECKED`. Rules: the node before in the descriptor, or the page's Prior Knowledge for node 1, plus `uses:`; earlier-year prerequisites count as taught in class; Related standards are ignored.

Also changed: `prerequisites()` in `tools/concepts.mjs` now treats a course listed with both `path` and `id` as one (an `after:` may name either), so `after: [number-foundations]` reaches `maths/number`. Code courses are unaffected (none has both).

## Changed by the science chat (12 Oct 2026): `woven:` for Human endeavour and Inquiry

Matthew approved. Lesson frontmatter `woven: [AC9S7H03, …]` lists woven-strand descriptors a lesson practises. `tools/lesson-core.mjs` keeps it; `tools/build-site.mjs` passes it to the map; `tools/curriculum-map.mjs` counts it as a whole-descriptor link (the card lists the lessons; the strand heading says how many are practised) and `WOVEN_NOTE` says so; `tools/validate.mjs` checks each code is a woven-strand descriptor in the subject's curriculum data. Maths has no woven strands, so its map is unchanged (checked).

## Changed by the code chat (11 Oct 2026)

- `tools/concepts.mjs`: Python concept `try` (try and except).

- `tools/build-site.mjs`: Playground and Reference entries for `code/deeper`. `snippets/turtle.json`: a Text and collections group. `misconceptions.json`: three Deeper Python misconceptions.

- `tools/build-site.mjs`: Playground and Reference entries for `code/objects` (same pattern as the console bridge). `tools/concepts.mjs`: Python concepts `object`, `attribute`, `class`, `method`. `snippets/turtle.json`: an Objects group. `misconceptions.json`: five Objects misconceptions.

- `BUILDING.md` › 7 and `CLAUDE.md` (runtime limits): the turtle playground now has several turtles and more shapes (`playground/`, code-owned).

- New plain page `content/check.md` (Check your school, `/check/`) with its script `site/check.js`, copied to `dist/check.js` by one line in `tools/build-site.mjs`; Behind the scenes links to it. For the in-browser Python courses only.

- `tools/build-site.mjs`: Playground and Reference pages for `code/console`, and Reference pages for `code/microbit-computer` and `code/microbit-security` (both use `snippets/microbit.json`). New optional fields: a `PLAY` entry can give `id` (its own saved program) and `code` (a starter); a `REFS` entry can give `groups` (only those groups of the file), `title` and `summary`. Other entries are unchanged.

- `tools/concepts.mjs`: added `CONCEPTS.html`; `visibleCode` now also reads `.html`/`.css` regions and fenced `html`/`css` blocks (other languages unchanged: their warnings are the same before and after). `tools/check-concepts.mjs`: HTML tests.
- New `tools/check-makecode.mjs` (`npm run check-makecode`, script added to `package.json`): static checks on MakeCode code tasks. Reads only; changes no shared behaviour.
- `misconceptions.json`: added `global-missing` (home `code/python/turtle-events`), and `text-plus-number`, `input-is-text`, `loop-never-changes` (console bridge).
- `BUILDING.md` › 7 and `CLAUDE.md` › Playground runtime: console mode in the turtle playground (`playground/`, code-owned).

## Done by the code chat (11 Oct 2026): Explain it to me as a help button

`tools/lesson-view.mjs`: the "Explain it to me" panel moves out of the top of every lesson (where its clip could show the Predict answer, as in Lesson 1) into a "?" button in the sticky step-pills bar that opens it as a drawer. Before the lesson's first Predict is locked in, the button says to make the prediction first. Affects every subject's lesson pages; no clip re-records (page HTML is not in clip hashes). Built: `.xbtn` first in `nav.steps`, `#xdrawer` (Esc or Close shuts it, video pauses), `EXPLAIN_JS` reads `wp-predict` for the first `.check[data-type=predict]` and unlocks live on the `wp-predict` event; lessons with no Predict open at once. Before the prediction, the button shows a small popover (`.xpop`, fixed under the button; hides after 4 s, on a click elsewhere, Esc or a real scroll) instead of opening the drawer. `check-html` now counts `#xdrawer video`. Tested at desktop and phone widths.

## Changed by the maths chat (11 Oct 2026)

- Form checks (Matthew approved Numbas, 11 Oct): `vendor/numbas/` (Numbas JME v11.0, Apache-2.0, English only, minified; rebuilt by `tools/numbas/build-jme.sh`), `tools/maths-forms.mjs` (checker, page script, Node loader). `tools/lesson-core.mjs`: `answer` checks take `form:` (and skip WPM checks on their answer and feedback). `tools/lesson-view.mjs`: such checks carry `data-form` and are marked by `WPF` on the page; lessons with one load `_numbas/numbas-jme.min.js` (deferred) and the checker script; other pages are unchanged. `tools/build-site.mjs` passes the script in `maths.forms`; `tools/build-playground.mjs` gains `buildNumbas` (copies to `dist/_numbas/`). `tools/validate.mjs` marks every form check's answer and feedback in Node. New `npm run check-forms` (`tools/check-forms.mjs`, `data/forms-cases.json`). Plain answer checks and board conditions still use WPM. New check type `working` (lesson-core, lesson-view, teach.mjs, validate): one step per line, marked by the same Numbas checker; CLAUDE.md check-types line updated.

- Maths cards can come from several files: `snippets/maths.json` plus `snippets/maths-<name>.json`, each naming its `course:` (`loadAllMathsCards()` in `tools/maths-cards.mjs`; `build-site.mjs`, `validate.mjs` and the maths section of `render-pictures.mjs` read them all). Existing cards, ids and picture hashes are unchanged.
- Shared board (`playground-board/`): new maths widget `widgets/parallel.js` with its script tag in `index.html` and `.pangles` styles in `style.css`; the graph widget gains the keyboard Move row (maths-only widget). No change to `core.js` or other widgets.

## Speculative: teach a novice ("Nib") (11 Oct 2026, discussion only)

An intention, not a rule; pilot it before anything becomes a design rule. Applies to every subject. The novice is **Nib** (see Nib and Nib's notebook, below): one non-human character across subjects, so the mistake never carries a real student's name. (Error-analysis tasks that use "Sam" can stay as they are.)

- **Intent:** after the worked example, the student explains the lesson's one new move to Nib, who holds one named misconception. Nib then tries a new case, run or checked on the board where possible, so a weak explanation fails visibly and a good one works.
- **Why:** learning by teaching (the protégé effect) and self-explanation, without an LLM: offline, no accounts, predictable, reusing the misconception data and `when:` checks. Easier to script than a Socratic tutor, which without an LLM reduces to the hint and feedback lessons already have.
- **Leanings:** write a one-line explanation before choosing from options (choosing alone tests recognition, not production); use it sparingly, at hinge nodes where the misconception has a visible consequence; only after the worked example; end with an own-words explanation compared with a model one. Not for recall or evaluate steps.
- **Teacher in the loop, light to heavy:** an on-screen "check this with your teacher" after two failed attempts; the own-words explanation as an exit ticket (nothing stored); later, perhaps an ephemeral live "stuck on step X" view in Kit or Prepare. The last one bends the no-tracking stance and needs a decision.
- **Later, maybe:** a teacher-led LLM version in Waypoints Kit (the AI as a novice scoped to one move), given age terms and answer leakage.
- **Open:** pilot lesson (the winch, or a maths hinge node); how authored options and branches are written in the lesson format.
- **First use (maths, 11 Oct):** the `reasoning` check follows "write, then choose, then compare": free working (not marked), a reason chosen at the key step (marked, with misconception feedback), then a model and a self-check. In *Reasoning with angles* and *Unknown angles in shapes*; no Nib yet.

## Speculative: Present mode, with a class signal later (12 Oct 2026, discussion only)

An intention, not a rule; pilot it on one lesson before deciding. Applies to every subject.

- **Why:** self-paced lessons, coding and theory alike, can feel like a chore: many small steps, a check after every action, and every idea arriving as text. Novices learn best from modelling, then guided, then independent practice (Rosenshine), and a prediction made in front of the class matters more than one made alone.
- **Intent:** the same lesson in two modes. **Present** (teacher drives, on the projector): one step per screen, large code or board, Predict with a reveal (mini whiteboards or hands), Run and Investigate live, the teacher thinking aloud. **Lab** (students drive): their lesson page from Modify onwards, with the earlier steps folded into a recap and checks mainly here. The self-paced path stays for catch-up, absent students and revision.
- **Leanings:** short follow-along only (students run the code, they don't type it); students do something every few minutes (vote, predict, spot a planted bug); a timer and the task on screen during Lab. Builds on what exists: board embeds, `?full=step-N`, explain clips and the Prepare decks; Present is a live view of the lesson page, so there's no export step.
- **Signal, later and separate:** the interactions that matter most work without data (whiteboards, hands, reading the room). A class signal would add a live prediction split for peer instruction ("convince your neighbour", re-vote) and "done" or "stuck on step N" during Lab. It bends the account-free, no-tracking stance, so it would be a separate classroom tool, never part of the tutorials: a session code, nothing kept after the session, no names or first names only.
- **Keep the door open:** stable ids on steps, tasks and predictions (mostly there already), so a signal tool can name "prediction 1 of Variables" without the tutorials knowing about it. Later, perhaps a small hook: when a session code is set, the lesson page posts a prediction or stuck status to that tool and stores nothing itself.
- **Open:** pilot lesson (Python Variables suggested); whether Present replaces the Marp decks or sits beside them; how a lesson marks where Present ends and Lab begins (default: at Modify).

## Speculative: width for faster students, support for stuck ones (12 Oct 2026, discussion only)

An intention, not a rule; pilot it before deciding. Applies to every subject. Replaces an earlier "test out" idea (skip to the Make), which was about speed.

- **Stance: depth first.** Learning Waypoints builds foundations through width: faster students go wider and deeper, not ahead (the mastery view, as in Teaching for Mastery and Singapore maths). Fast students can already skip the reading (nothing is locked); what they lack is something worth doing with the time they save.
- **Why (research):** PRIMM is supported for novices (Sentance, Waite and Kallia, 2019, about 500 students aged 11–14) and untested for intermediate or expert learners; for them the wider research applies: support that helps novices can get in the way of students who already know the idea (the expertise reversal effect, Kalyuga), and varied, combined practice builds transfer. Use–modify–create (Lee et al., 2011), which PRIMM builds on, already assumes students move towards open creation as they gain skill.
- **What students see:** one switch, **Steady / Advanced** (the existing width switch; the teacher's `?width=` link sets the starting level). Everyone does the same core path and checks, so the one new move and class discussion stay shared.
  - **Steady** (default): as Typical now.
  - **Advanced:** width means (1) more contexts, (2) **connections**: combining this lesson's idea with ideas taught earlier, and (3) explaining why (which line does what, why an edge case breaks, where a model stops working). Never new content. Investigate is lighter (prompts faded, worked example collapsed) but keeps the one key trace or reasoning question, so PRIMM's reading benefit stays and the foundation is shown. The time saved goes into Modify and Make, where the connections happen.
- **Below Steady: support on demand, not a level to choose** (choosing "Consolidating" carries stigma). It opens when a student is stuck, for example after two wrong answers ("Want another worked example?"); a teacher's link can switch it on from the start for a group. Already built: escalating hints, Explain it to me (clip, picture, text), the explanation after an answer, the Reference drawer, maths Practice pages. New: an extra faded worked example, an easier version of a task (Parsons or fill-in for a Modify), smaller Modify rungs.
- **By PRIMM stage:** Predict and Run the same for everyone; Investigate fuller with support, lighter on Advanced (key trace kept); Modify ladders smaller with support and further on Advanced (the last rung combines an earlier concept); Make smaller with a starter with support, and an integrating stretch plus "explain which line does what" on Advanced.
- **Who goes where (no tracking):** the teacher (per class by link; per student in the moment, from Present-mode whiteboards and the key trace); the lesson (from answers in this browser: a confident, correct Predict and key trace on the first try suggests Advanced; two wrong answers offer support; earlier lessons passed first try suggest Advanced as the start); the student (can always choose Advanced; the key trace still checks them). Suggestions, never locks.
- **Acceleration is the teacher's exception, not the site's offer.** Its evidence is good, especially subject acceleration in maths, but mostly from selected able students. Conditions: earned (the Advanced stretch done well, not just the core done fast) and never jumping a hinge node the student hasn't shown. The Advanced stretch doubles as that evidence. By subject: maths and coding allow it (pathways are already options, not gates); science mostly width (strands are largely independent, models spiral, practical work happens in class; Inquiry and Human endeavour tasks make natural Advanced stretches), acceleration at most within one strand's model sequence; Digital systems mostly width, linked to Code.
- **Rule change it needs:** AUTHORING says "Wider means more contexts, never harder content". It would become: Advanced may be harder only by combining ideas taught up to this lesson.
- **Lint:** the concept scan already knows each lesson's `introduces` and `assumes`; an Advanced step could be checked to use only concepts taught up to its lesson (validate warns on anything new).
- **Examples:** Python Variables: a spiral whose colour and size both change (lesson 1's loop with lesson 2's variable), then say which line controls which. Maths ratio: ratio with area or rates from earlier lessons, not proportion. Packets: which link to break when Wi-Fi loses packets and router C is busy (Wired or wireless with Packets).
- **In class:** pairs with Present mode (above): the teacher models the shared core; in Lab, Advanced students start on the stretch.
- **Open:** authoring cost (about 140 of 469 lessons have tiered steps, mostly extra contexts rather than connections, so an audit and new stretch tasks over time); whether below-Steady support is written per lesson or generated (Practice templates); how the old Minimum floor maps (probably: support on from the start); pilot course (Python Foundations suggested).

## Proposed: Nib and Nib's notebook (11 Oct 2026, discussed, not decided)

Replaces the Python-only "turtle companion" proposal (was in `roadmap/code.md`) with one character for every subject.

- **Nib:** a small, clearly non-human learner (a nib is a pen tip: it writes down what it is taught). Sits in the corner of course and lesson pages with a light CSS idle animation (blink, bob; still with reduced motion; can be hidden).
- **Nib's notebook:** clicking Nib opens what the student has taught it so far: the course's unlocked Reference cards (Python, web), maths cards, and later MakeCode blocks and science ideas, each with the lesson it came from. Gives maths and science an unlock moment they lack today.
- **Light gamification:** the notebook is a useful reference, not a score. One small moment when a page is added; no points, streaks or new badges beyond "Challenge complete". Per browser, built from existing progress data (`wp-progress`, `unlocks:`); no tracking.
- **Link:** the teach-a-novice step (above) is where Nib's pages come from, when a lesson has one.
- **Cost:** shared change (`tools/lesson-view.mjs`, `site/progress.js`, course pages); maths and science need a rule for which cards count as notebook pages. Snippet unlocks today: Python and HTML courses only; MakeCode, maths and science have none.
- New check type `reasoning` (Matthew approved 11 Oct; a first use of the teach-a-novice leaning "write before choosing"): `tools/lesson-core.mjs` (validation), `tools/lesson-view.mjs` (render, handler, `.rs-*` in MATHS_CSS, `wp-reasoning` storage), `tools/teach.mjs` (guides show the model steps). The free working is never marked; the answer and picked reasons are. AUTHORING and CLAUDE.md updated.
- `tools/maths-forms.mjs`: `subject x` accepts the subject in either case (Numbas already compares letters case-insensitively); case added to `data/forms-cases.json`.
- Board: geometry gains `angles: given …` and `exterior: C`; parallel takes several given angles (maths-only widgets).

## Proposed: other clips beyond Explain it to me (11 Oct 2026, discussed, not built)

Applies to every subject. The limits are the existing design rules: Predict comes before the new move, and new knowledge appears only in the worked example (or Investigate). So no clip may teach before Predict, and no "today we will learn" intro.

- **Hooks (phenomenon clips).** 10 to 20 s, little or no narration. A hook shows a situation without explaining it (the winch stalls, the sorter fails on a messy bench, a line tilts as m changes) and ends on the Predict question.
  - **Unit hook (the default):** one clip that sets the driving problem the unit returns to. Optional `hook:` clip in the course `index.md` `units:` entry, shown on the course page and the unit's first lesson.
  - **Lesson hook (sparingly):** only where the Predict depends on seeing something move or fail. Optional, on the Predict step. Many Predicts already hook; don't add filler.
  - Recorded from a board or playground setup with the existing clip pipeline, so cost is low. Avoid real footage (licences, school filters).
- **How-to clips: their own section, like Reference.** Short screen recordings of tool setup that is a recipe, not the lesson's knowledge: export a Teachable Machine model, connect a micro:bit over Web Serial, paste a link into the board, open MakeCode full screen.
  - One place per subject or pathway (beside Reference). A step links to the clip at the point of need ("How to: …").
  - Reused across courses (record "Connect a micro:bit" once).
  - Dated, with the tool version, so stale ones are easy to find when a tool's interface changes.
  - Prepare lists the how-tos a lesson needs, so teachers can rehearse the setup.
- **Recap: no new clip type.** Practise already does recap as retrieval. Instead, a review question (one revisiting an earlier lesson's idea) can point back to where the idea was taught:
  - A `revisit: <lesson slug>` field on the check. After a wrong answer (or two), the page shows "Revisit: <lesson title>", which opens that lesson with its Explain drawer already open (`?explain=1` on lesson pages).
  - Validate checks that the slug exists and comes earlier (same rule as `assumes`).
  - Not plain links in feedback: feedback is rendered as plain text (`textContent`, `plain()` in `lesson-view.mjs`).
  - Build it with the first Practise step that has review questions; document in AUTHORING.md only once built.
- **Open:** format for `hook:` (clip spec as for `explainClip`, or a board setup); where the How-to section lives (per pathway or per subject); whether how-tos are recorded by `render.mjs` or by hand (real tools such as Teachable Machine can't be driven from the sandbox).
- Answer forms `simplest` (fraction in lowest terms) and `decimal` in `tools/maths-forms.mjs` (no Numbas needed for them) and the form lists in `tools/lesson-core.mjs`; answer checks (`tools/lesson-view.mjs`) ignore a trailing % or °. New maths board widget `widgets/bars.js` (script tag in `playground-board/index.html`).
- Board (maths widgets): graph gains `plot: x = a` and `shade:` regions; numberline gains `ray:` (inequalities).
- New maths board widgets `widgets/data.js` (dot plots, stem-and-leaf, statistics) and `widgets/chance.js` (coin, dice, spinner, bag; trials and relative frequency), with script tags in `playground-board/index.html` and styles in `style.css`. New tool `tools/kit-page.mjs` writes progression pages from a waypoints-kit checkout (for the node check), noted in `data/progressions/README.md`; the map's importer (`tools/import-curriculum.mjs`) is unchanged.
- New maths board widgets (maths chat, 11 Oct): `widgets/square.js` (squares and roots), `factortree.js` (factor trees, HCF and LCM), `fracadd.js` (adding and subtracting fractions), `fracarea.js` (multiplying fractions) and `percent.js` (percentages of amounts), with script tags in `playground-board/index.html` and two `.ftpick` rules in `style.css`. No change to `core.js` or other widgets.
- New maths board widgets (maths chat, 11 Oct): `widgets/area.js` (parallelograms and triangles on a grid, cut and move), `prism.js` (prisms in layers, SVG) and `circle.js` (parts of a circle, roll it out for π), with script tags in `playground-board/index.html`. `square.js`, `fracarea.js` and `fracadd.js` gained `resize` (redraw on window resize). No change to `core.js`.
- Maths boards, Number (maths chat, 11 Oct): new `widgets/placevalue.js`, `widgets/rounding.js` (`mode: round | estimate`) and `widgets/ratio.js` (`mode: tape | share`), script tags in `playground-board/index.html`, `.pv*` styles in `style.css`. No existing widget changed. Board `when:` variables must be single letters (the expression evaluator multiplies adjacent letters). Every board widget needs an `#board svg` for `render-pictures` to wait on (placevalue draws counters in SVG for that reason).
- Number checks show `feedback` (maths chat, 12 Oct): `["wrong number", "message"]` pairs on a `number` check were ignored (34 pairs across maths never showed). `lesson-view.mjs` now outputs them and matches the typed number within the tolerance; `lesson-core.mjs` validates the pairs. No content changed.
- Maths board, Year 8 Statistics (maths chat, 12 Oct): new `widgets/sample.js` (a fixed school of 200 and samples from it), script tag in `playground-board/index.html`. No change to `core.js` or other widgets.
- Maths boards, Year 8 Chance (maths chat, 12 Oct): new `widgets/events.js` (sample spaces as a row, grid or tree; choose outcomes, complement, simulated trials) and `widgets/venn.js` (Venn diagram and two-way table), script tags in `playground-board/index.html`, a `.vn*`/`.evcell` block at the end of `style.css`. No change to `core.js` or other widgets.
- Maths boards, Year 8 Space (maths chat, 12 Oct): new `widgets/congruence.js` (triangles from given parts; SSA can give two), `widgets/similar.js` (a triangle and a scaled copy, or two rectangles) and `widgets/space3d.js` (3D axes and a point), script tags in `playground-board/index.html`. `widgets/geometry.js` gains `diagonals: on` (off by default, so existing lessons are unchanged). No change to `core.js`.
- Maths board, Year 8 Rates (maths chat, 12 Oct): new `widgets/rate.js` (a double number line), script tag in `playground-board/index.html`. No change to `core.js` or other widgets.
- Sources in teacher notes (maths chat, 12 Oct, Matthew approved): `teacher.yml` takes `sources:` (title, https url, checked YYYY-MM-DD), checked by `validateTeacher` in `lesson-core.mjs` (`sourceList` formats it) and shown as Sources in For teachers (`lesson-view.mjs`), the teacher guide (`teach.mjs`) and the title slide's speaker note. First used by maths/number/money-models and maths/measurement/time-zones. Other subjects can use it for facts that change.
- Maths boards, Year 8 Number (maths chat, 12 Oct): new `widgets/longdiv.js`, `zoomline.js`, `indexlaws.js` and `money.js`, script tags in `playground-board/index.html`. No change to `core.js` or other widgets. New course folder `content/maths/real-numbers/` (the pathway's "Irrational numbers and index laws" placeholder, now built) with `snippets/maths-real.json`.
- Maths boards, Year 8 Measurement (maths chat, 11 Oct): new `widgets/composite.js` (`mode: shape | estimate`), `widgets/circlearea.js` and `widgets/timezone.js`, script tags in `playground-board/index.html`; the prism board's `capacity: on` also takes `units: m` (litres). No change to `core.js` or other widgets.
- Maths boards, Space (maths chat, 11 Oct): new `widgets/transform.js` (`mode: translate | reflect | rotate`), `widgets/net.js` (`mode: cube | prism`) and `widgets/views.js`, script tags in `playground-board/index.html`, `.vgrid` / `.vcell` rules at the end of `style.css`. The SVG widgets (net, views, and now ratio and rounding) are absolutely positioned inside `#board` (`height: 100%`) so they fit the flex board. No change to `core.js` or other widgets; the classification algorithm lesson reuses the `key` widget.
- Maths boards (maths chat, 11 Oct): `widgets/geometry.js` gains `classify: on` (ticks, parallel arrows, right-angle marks and shape names; existing lessons unchanged, as it is off by default); new `widgets/pythag.js` (squares on the sides, an angle slider), script tag in `playground-board/index.html`.

## Done (11 Oct 2026): trail map on Code pathway pages

Pathway pages open on a trail map for students, with a "List for teachers" toggle. Code only (`trail: true` in `content/code/index.md`); maths and science pathway pages are unchanged. Mockup and discussion: the "Trail map mockup" canvas.

- **Shared files changed:** `tools/build-site.mjs` (pathway page: map, toggle, `tagline` on cards, warns when a course has no tagline; only when the subject has `trail: true`), `tools/lesson-view.mjs` (one rule: `.pcard .ptag`). New: `tools/trail.mjs` (layout and CSS), `site/trail.js` (copied to `dist/trail.js`).
- **Layout** from `after:`: a column per step along the trail, rows lining a course up with what it follows. An extension with no `after:` follows the foundations. A prerequisite in another pathway (Flask needs HTML & CSS) is a portal node linking to that pathway.
- **Progress** from `wp-progress` through `progress.js`: done, in progress (n/m), not started, coming later. "You are here" is the course of the last lesson opened, else one in progress; otherwise "Next stop" or "Start here". Hover or focus previews a course in the card; Continue opens the next unfinished lesson. On phones the map is a list with "After …" lines and the taglines.
- **Content:** every Code course has a student `tagline:` (drafts; Matthew to adjust wording).
- **Tested** headless at 1280 and 390 px, light and dark, no progress and seeded progress, keyboard focus, list remembered, list shown without JavaScript.

**Next:** Things you've made (proposed, not built): a gallery of each student's Make outputs, grouped by course on the pathway page (latest few plus "All n"), the full set on the course page, one starred favourite. Needs a snapshot per playground (turtle canvas, HTML preview, MakeCode simulator) saved per browser.

**Maths and science: to plan before turning the map on** (`trail: true`):
- Is a pathway a trail there? Maths courses follow the curriculum's year order and the progression data's `prior_knowledge`; the map could use those links instead of hand-written `after:`, which would make it much denser.
- What is a waypoint: a course, a unit, or a progression node? Science "courses" are year-level sets of concept tutorials (a side tool, not a whole course), so a map may not fit at all.
- Cross-subject links (the winch needs maths ratio and science forces) could be portal nodes, as Code does across pathways.
- Taglines for every maths and science course.
- Home page (`content/index.md`): a "Maths teachers: start here" link after the maths paragraph, to the new plain page `/maths-teachers/`.

## Done (11 Oct 2026): curriculum map for maths (preview for maths teachers)

`/maths/map/` (and "Curriculum map" in the Maths menu, and a card on the Maths page): all 101 Years 7–10 descriptors in a grid of strands by years, plus the 22 earlier-year descriptors they build on. Each tile shows its waypoints (done, has a lesson, no lesson yet, from lessons' `node:`). Hover or focus previews a descriptor in the card (descriptor text, waypoints with their lessons and courses, hinge marks, builds on and leads to); click chooses it and puts `#AC9M8A02` in the address to share. Lines show builds on (solid blue) and leads to (dashed teal) for the one in focus only. "With lessons" dims the rest. Phones: one list per strand, card first, no lines.

- **Data:** `data/curriculum/maths.json`, made by `node tools/import-curriculum.mjs <waypoints-kit checkout> maths` from waypoints-kit (now at cggs-matthew-pham/waypoints-kit, public) and committed, so the build never needs the kit. Titles: the progression page's where one exists, else the kit's in sentence case. `data/progressions/` (the node check) is unchanged.
- **Shared files changed:** `tools/build-site.mjs` (map page when the subject's index.md has `map: true` and the data exists; menu item; Maths page card), `tools/lesson-view.mjs` (one rule: `.pcard.pmap`). New: `tools/curriculum-map.mjs`, `site/curriculum-map.js`, `tools/import-curriculum.mjs`.
- **Questions for the maths teachers:** is the grid the right overview, or would a list by strand be quicker? Is a "usually taught" layer (term or school program) worth adding beside the builds-on lines? Which descriptors most need lessons next? Should students see this, or the course trails?
- **Science: built, switched off (11 Oct).** `data/curriculum/science.json` (51 Years 7–10 descriptors and 22 earlier ones). Rows: Biological, Chemical, Earth and space, Physical, Human endeavour, Inquiry. Human endeavour and Inquiry are written for two years at a time (7H, 7I = Years 7–8; 9H, 9I = Years 9–10), so their cells span two columns. The kit labels Year 7 Understanding descriptors only "Understanding" with no prior knowledge (except 7U06); the importer takes their sub-strand from the code, but their links back to Years 5–6 need fixing in the kit.
- **Handoff to the science chat:** tag each science lesson with the node it teaches (`node: AC9S7U04 n2`, as maths lessons do; the topic list in CLAUDE.md › Science gives most of them), then add `map: true` to `content/science/index.md`. Until the tags are in, every science tile shows "no lesson yet", which is why it is off. Adding `science` to `CHECKED` in `tools/progressions.mjs` is a separate choice (it makes validate require a node on every science lesson).

## Done (11 Oct 2026): trailheads on the Code page

With `trail: true`, `/code/` opens on trailheads: a Continue card (the course of the last lesson opened, else one in progress, linking to its next unfinished lesson), then one card per pathway with its summary, a small picture of its trail (dots and lines from the same layout as the pathway map, marked done, in progress and "you are here"), a "Start here…" line (new `fit:` on each pathway in `code/index.md`), "n of m courses done", and a link to its trail. "List for teachers" holds the old page and shares the `wp-pathview` choice with the pathway pages. Shared files: `tools/build-site.mjs` (subject page), `tools/trail.mjs` (`trailThumb`, `trailheadsHtml`, `TRAILHEADS_CSS`); new `site/trailheads.js`. Maths and science pages are unchanged until they set `trail: true` (their pathways would need `fit:` and course taglines).

## Done (11 Oct 2026): science trails

`/science/` now opens on trailheads and each science pathway page on a trail map, like Code (`trail: true`, `fit:` per pathway, a `tagline:` per course in `content/science/index.md`). Each pathway runs Year 7 → 8 → 9 → 10 through `after:`; Year 9 Physics also follows Year 7 Chemistry (heat transfer uses the particle model), shown as a portal. The curriculum map stays for teachers and curious students: on a subject with trails its card now sits below the trailheads instead of above them (`tools/build-site.mjs`, one line; Maths unchanged). Tested headless at 1280 and 390 px, no page errors, no sideways scroll. Maths followed the same day: `trail: true`, `fit:` and taglines in `content/maths/index.md` (its existing `after:` lines drive the layout; Number Foundations is a portal on the other three trails). `tools/trail.mjs` now accepts a course's `id:` in `after:` as well as its path (maths uses ids).

## Done (11 Oct 2026): science trail stops are standards

`trail: units` in a subject's index.md (science) makes each unit of a course a stop, named by the unit (one standard each in science: Particle theory, Pure substances and mixtures, ...), with the course's year in the stop's small line ("Year 8 · 5 lessons"). Units chain within a course; a course's first unit follows the last unit of what it comes after. `after:` may name one unit of another pathway's course (`science/chemistry#particles`), shown as a portal with the unit's name and in the teacher list as "Year 7 Chemistry (Particle theory)". Progress, "You are here" and Continue count the unit's lessons only (`unit` added to `progress-manifest.json` lessons and passed through `progress.js`); stops link to `#unit-<id>` on the course page (unit sections now have that id). Narrower columns for unit trails so eight stops fit at 1080 px; on phones the indent stops growing after two steps. Maths uses it too (same day); Code keeps one stop per course (`trail: true`). A stop's small line shows the course's year only when the course title starts with one (science); maths shows just the lesson count. Shared files: `tools/trail.mjs`, `tools/build-site.mjs`, `site/trail.js`, `site/trailheads.js`, `site/progress.js`.

## Proposed (11 Oct 2026, branch trail-expand): open one course at a time on the trail

Pathway pages of subjects with `trail: units` (Code too, on this branch) show one stop per course, laid out as the course trail; a course with two or more units opens into an area headed by its name, its units as stops snaking inside (up to three to a row, ending on the right so the trail leaves it cleanly). The current course opens on its own (else the first); clicking another course opens it and closes the one that was open; a unit stop goes to that unit on the course page. Trailhead pictures on subject pages are back to one dot per course. Shared files: `tools/trail.mjs` (`layoutTrailExpand`, area HTML and CSS), `site/trail.js` (rewritten: unit progress, open/close, lines in any direction), `tools/build-site.mjs`.

## Done (11 Oct 2026): recap page (Year 7 Chemistry first)

`recap: true` in a course's index.md makes `<course>/recap/` (a Recap chip on the course page): required lessons grouped by unit, each a card with the lesson's exit question as "Try first" and a closed "Check your answer" holding the exit answer, the Explain-it-to-me text, its picture and its clip (`preload="none"`, files read from the lesson's own `clips/`). A lesson with no exit question shows "Show the explanation" instead. Nothing new to write: it reuses `teacher.yml` (`exit`, `explain`) and the lesson's `explainPicture` and `explainClip`. On for `science/chemistry` only; turn it on per course. Shared file: `tools/build-site.mjs` (`writeRecap`, `RECAP_CSS`).

## Done (12 Oct 2026, shared-tools chat): a choice of voices for clips, and the recorder lag

Built together (both edit `render.mjs`, so one full re-record at the next publish, not two), from the proposal below and the maths and science notes under it.

- **Recorder lag fixed.** `render.mjs` no longer uses Playwright's `recordVideo`: it takes Chromium's screencast frames (CDP `Page.startScreencast`), saves each with the time it was drawn, and builds the clip from those times (ffmpeg concat at 25 fps), so a busy board that drops frames keeps step with the voice. Encoding happens once after recording, which also frees the CPU during it. Measured in the sandbox with flite: igneous captions now land within 0.1 s of their voice lines, also with every core busy (the old recorder was a steady 0.9 s out here, and about 15 s in CI). x264 `crf` 24 → 27: frames are now sharp (the old source was a blurry webm), so busy boards stay near their old size (plates 3.4 MB at 24, about 1.8 MB at 27, was 1.3 MB); light clips are smaller than before. The igneous explain clip is back (`content/science/earth-8/igneous/lesson.md`, unchanged from before its removal).
- **Voices.** `CLIP_VOICES` (Emma, George, Heart) and `VOICE_LABELS` in `tools/lesson-core.mjs`. Every line is made in all three at the lesson's speed. The lesson's own voice is mixed into `clips/<id>.mp4` as before (so the default needs no syncing, a download is not silent, and a script failure still talks); each other voice is `clips/<id>.<voice>.m4a`, as long as the video, listed in `clips/<id>.json` as `voices`. `--seed` and the out-of-time fallback download them too. The voice set is in the clip hash.
- **Timing.** Captions wait for the slowest voice (as planned). The first click, press or run after a caption waits until every voice has finished that line (science's suggestion). Code typed after a caption (`show`, `type`, `clear`) moves only by how much longer the slowest voice takes: holding typing for the whole line made HTML clips about 11 s longer (first-page Investigate 25 → 37 s) and broke "type as the caption explains it". Change the one `if` in `recordClip` if every action should wait.
- **Page.** `clipHtml` (`build-site.mjs`) adds `data-voice`/`data-voices` and a "Voice: Emma · George · Heart" picker; `VOICE_JS` and `.vpick` styles in `lesson-view.mjs` (the script is added only to pages with a multi-voice clip; recap pages get it too). The choice is saved as `wp-voice` and applies to every clip. Another voice plays as an `Audio` kept in step with the video: play, pause, waiting, seek, rate, every loop (restart when `currentTime` jumps back), drift over 0.3 s corrected on `timeupdate`. The video's own voice is silenced through a Web Audio gain where the browser allows a video's volume to be set (so the sound button still works as usual); on iPhone and iPad (volume is read-only) the video stays muted and each press of its sound button turns the chosen voice on or off, said in the note beside the picker. A voice file that fails to load falls back to the lesson's voice.
- **Checks.** `build-site` refuses any `.m4a` whose clip record says flite or is missing. `voice.mjs`: flite uses a different voice for George (`rms`) and Heart (`awb`), so local tests show the slowest-voice timing. `tools/serve.mjs` serves `.m4a`. Render warns on clips over 30 s in their slowest voice and lists them at the end of the log and in the publish run's summary.
- **Tested** (headless Chromium, 390 × 844 touch viewport; this Chromium has no H.264 or AAC, so the test served VP8/Opus copies of the same clips): picker shown, choice saved and restored after reload; with the chosen voice and sound on, the voice file plays within 0.15 s of the video after play, seek, rate 1.5 and a loop; pause and mute stop it; switching back to the lesson's voice stops it; the iPhone path (volume read-only) toggles on each sound press. Clips recorded with flite: igneous, plates, turtle intro, HTML first page, irrationals on the line.
- **Cost at the next publish:** every clip re-records, and every spoken line is made in two more voices (Kokoro, a few seconds each; cached afterwards in `.voice-cache`). Use 8 jobs in the Run workflow form for that run. A Safari check on a real phone is still worth doing after the publish.
- **Still to do:** after the first publish, list the clips over 30 s in their slowest voice (run summary) for the subject chats to trim.

## Done (12 Oct 2026, shared-tools chat): one bad picture no longer fails the publish

The publish run on 3a177f1 failed in the plan job's "Draw new pictures": the Digital systems `decode` and `pixels` boards draw plain HTML, and `drawBoard` waited for `#board svg` (or `canvas.wpcv`), so their explain pictures timed out and the whole step stopped.
- `tools/render-pictures.mjs`: a picture that throws is reported (`✗`), skipped and drawn again next run; it keeps its old picture if it had one. The run ends normally and lists skipped pictures in the log, the run summary and a warning annotation.
- `drawBoard` also accepts any board content (`#board > *`), so plain-HTML widgets need no hidden svg. This changes the board and maths pictures' hash: all of them redraw at the next publish (227 board pictures took about 4 minutes here), alongside the full clip re-record that publish already does.
- For the Digital systems chat: the run-length explain picture is cropped through its last code line (`1, 1, 1, 1, 1, 1,`); the board is wider than the picture's 680 px viewport.

## Done (12 Oct 2026, maths chat; Matthew approved): shuffle question options at build time

The right answer is the first option in most `question` checks: 335 of 353 in maths, 455 of 471 in science, 190 of 288 in code, all 21 in systems (and nearly every `predict`). Students learn to pick the first option. `lesson-view.mjs` prints options in authored order. Proposal: a seeded shuffle at build time (seed from the lesson slug and the question text, so it is stable between builds and the same on the page, the teacher guide, the deck and the worksheet), remapping `answer` and per-option `feedback`; `predict` options shuffled the same way. Authors keep writing the right answer first. Test harnesses that click an option by index would read the remapped `answer`. The Year 8 Chance lessons were rotated by hand first.

Built: `arrangeOptions` in `tools/lesson-core.mjs`, called from `parseLessonText` for every step and task check, so the page, `teach.mjs` (guides, decks, worksheets), `check-html` and the create page all see the same order. Seeded by slug, question and options (FNV hash into mulberry32); options that are all numbers or fractions are sorted; catch-alls (None of them, Neither, You cannot tell, It depends) stay last; `shuffle: false` opts out; `authoredAnswer` keeps the original index. Across 1259 question checks the answer now lands evenly (first option about a third of three-option and a quarter of four-option questions). Clips are unaffected (they record boards and code, not checks). For other chats: a test plan that clicks an option by its authored index must read the parsed `answer` instead (`check-html` already does). Students who already answered keep their ticks (progress is stored by check, not option).

## Done (12 Oct 2026, maths chat): practice choices, scenario banks and the board
- `practice-core.mjs`: `choices:`, `cases:`, `board:` (+ `height:`) and `when:`; `practice-view.mjs` shows choice buttons and one board iframe per page (`set-code` for each question; `when` is checked against its last `run` message, and needs the student to have moved it). `build-site` passes the board's address (`VERSIONS`). `tools/check-practice.mjs` (`npm run check-practice`): every board setup starts, and every `when` uses reported values and does not hold at the start. Usable by any subject with practice files.

## Done (12 Oct 2026, maths chat): Practise this skill card on lesson pages
- `build-site` passes `course.practice` (`../practice/?skill=<lesson>`) when `content/<course>/practice/<lesson>.yml` exists; `lesson-view` draws a `.practicecard` (a `.nextcard`) after Now you can. Any subject that adds practice files gets it; no clips change.

## Done (12 Oct 2026, maths chat): Practice pages take algebra; fully factorised fix
- `tools/practice-core.mjs`: expression answers, `form: expanded | factorised | simplified` (Numbas, loaded on the practice page only when used; marks by value alone if it has not loaded after 10 s), `subject x`, inequality answers, `|c`/`|sc` coefficient filters, a `keep` flag on form slips (the streak is kept), typed ² and ³, "Use the letter n".
- `tools/maths-forms.mjs` (shared with lesson answer checks): "fully factorised" now takes the HCF of the bracket's whole-number coefficients. Numbas's collectIntegerFactors also grouped any two terms sharing a factor, so 3(2x + y + 2) was wrongly told to take out a common factor. Cases added to `data/forms-cases.json`.

## Done (12 Oct 2026, maths chat; Matthew asked): a Practice page with new numbers each time

Like 101computing's logic-gate practice: a check is a template whose numbers change each view. `vars: { r: 2..9, b: 2..9 }`, `where: "r != b"`, `{r}` in the question, `answer: "r/(r+b)"` (an expression, marked with the existing maths equivalence checker), feedback answers as expressions too. A **New question** button; optionally `need: 3` (3 right in a row to tick). Decks and worksheets print one fixed seed so the answer key matches. Validate tries each template a few hundred times (no division by zero, constraints satisfiable, tidy answers). Board generators fit the same idea later (a random logic circuit for a truth table, random triangle parts, a random sample space). First: number and answer checks, trialled on the Practise steps of a few Year 8 maths lessons. Shared files: `lesson-core.mjs` (template fields, validation), `lesson-view.mjs` (generate and mark), `teach.mjs` (fixed instance).

Built as a course page rather than in lessons (lessons keep their chosen numbers): `tools/practice-core.mjs` (templates, generation, marking; inlined in the page like MATH_JS and used by validate), `tools/practice-view.mjs` (page UI and CSS), `build-site.mjs` (`practiceSkills`, `writePractice`, a Practice chip when `content/<course>/practice/` exists), `validate.mjs` (300 questions per template; errors for broken or self-failing answers). Files sit in `content/<course>/practice/`, outside lesson folders, so no clip re-records. Any subject can use it (science's numeric skills, the Digital systems chat's logic practice once a board generator exists). First course: Number Foundations (29 skills; Checking a model has none, as naming assumptions isn't auto-markable).

## Proposed (12 Oct 2026, code chat; Matthew agreed the idea): a choice of voices for clips (built: see Done above)

**Why:** students choose the voice they like best for Explain it to me clips. Today each lesson names one voice: code uses Heart (US), maths and science use Emma (UK) at 1.05.

**How:** the video is recorded once and each voice gets its own audio file, so recording time does not grow with the number of voices.
- **`render.mjs`:**
  - Already makes every spoken line before it records (`lineFor`, with each line's length).
  - It would make each line in every voice and time the clip by the longest one. The next caption waits for the slowest voice, so the faster voices have a slightly longer pause after their line.
  - It would then write a silent `clips/<id>.mp4`, plus `clips/<id>.<voice>.m4a` for each voice, built the same way `muxVoice` builds today's mixed audio.
  - The `.vtt` transcript stays as it is: the words are the same for every voice.
- **Lesson page (`clipHtml` in `build-site.mjs`, plus a little script in `lesson-view.mjs`):**
  - The video stays muted, and a hidden audio element plays the chosen voice in step with it (play, pause, seek, loop, rate).
  - A small "Voice: Emma · George · Heart" picker sits under voiced clips. The choice is saved per browser (`wp-voice`) and applies to every clip on the site.
  - Unmuting the video's own button turns the voice on, as now.
- **Why not one file with several audio tracks:** most browsers can't switch audio tracks inside a video, Chrome included. Separate files work everywhere.
- **Voices:** Emma (`bf_emma`, UK woman), George (`bm_george`, UK man) and Heart (`af_heart`, US woman); the default is Heart (every lesson since 16 Oct; Emma before). Kokoro has no Australian voice.
  - A lesson's `voice:` keeps its speed, and its name sets the voice students hear until they choose one.
  - `say:` lines are shared by all three voices.
- **Cost:**
  - Changing `render.mjs` re-records every voiced clip once at the next publish, about the same time as a normal full re-record.
  - After that, speech is a few seconds per voice per clip, and three audio files add about 100 to 300 KB per clip.
  - Lines must still fit the slowest voice in under about 30 s.
- **Checks:**
  - `build-site` refuses flite audio files, as it refuses flite clips today.
  - A clip with a missing voice file falls back to the lesson's default voice.
  - Test the sync on a phone, where Safari is strict about autoplay.
- **To agree with the maths and science chats:** Emma as the default, and the three-voice set.
- **Maths chat (12 Oct): agreed**, Emma as default and the three voices. Maths say: lines are already written as spoken words ("root two", "one point four"), and the lexicon is plain text swaps, so they suit all three voices. Suggestions:
  - Keep the lesson's default voice muxed into `clips/<id>.mp4` (as today) and add `.m4a` files only for the other voices. The default then needs no syncing, a missing file or a script failure still talks, and a downloaded or directly linked clip is not silent. Choosing another voice mutes the video's own track and plays its `.m4a`.
  - Clips loop (`loop` on every clip): restart the `.m4a` on each loop, not only on seek.
  - Validate's 15-word guide stays; time each caption by the slowest voice as planned (maths explain clips are 12 to 25 s, so the extra pause is small).

- **Science chat (12 Oct): agreed**, Emma as default and the three voices (all 103 science lessons use Emma at 1.05, so nothing changes for students who never pick). Agree with maths: keep the default voice muxed into the `.mp4`. Suggestions:
  - **Pictures shouldn't run ahead of a slower voice.** Science clips use a fixed `wait:` after each caption (tuned by ear to Emma), then click the board. With George a little slower, the board would move on while he is still describing the step before. Suggest: in multi-voice recording, the first action after a caption waits until the slowest voice has finished that line (as `speak()` already does for the next caption). That lengthens clips slightly and keeps words and pictures together in every voice; then most hand-tuned `wait:` values can stay.
  - **Fix the busy-board lag in the same change.** Both edit `render.mjs`, and each edit re-records every clip, so doing the recorder lag (Open, above) together costs one full re-record, not two, and brings back the igneous clip.
  - **Check length with the slowest voice.** Some science clips run near or over the 30 s guide with Emma; after the first multi-voice publish, list clips over 30 s in their slowest voice and trim those `say:` lines.

## Built (12 Oct 2026, science chat; Matthew agreed the idea): a one-move coach prompt on recap pages

*Status (26 Oct audit): built for science recap pages (roadmap/science.md › Done: coach prompts; `coach: true` in science course index files). Heading said "Proposed"; the text is the original proposal.*

**Why:** responsible AI use, aimed at beneficial rather than detrimental offloading. Lodge and Loble, *Artificial intelligence, cognitive offloading and implications for education* (UTS, March 2026; https://www.uts.edu.au/news/2026/03/experts-warn-unstructured-ai-use-in-schools-risks-cognitive-atrophy/contentassets/ai-cognitive-offloading-and-implications-for-education.pdf): offloading extraneous load can help, offloading the thinking that builds learning harms it, unstructured use drifts to the harmful kind and novices are hit hardest. It recommends metacognitive prompts, critical thinking within domain knowledge, teacher agency over AI tools, and favours teacher-facing AI.

**What:** a "Copy a coach prompt" button, not a built-in chatbot. The site sends nothing and needs no accounts or keys; the student pastes the prompt into the AI tool the school allows (age terms and policy stay with the school).
- **Scoped to one move:** the lesson's node sentence (the exact idea, not the topic), its success criteria, the misconceptions behind its wrong options, and its predict question.
- **Coaching rules in the prompt:** Socratic, one question at a time, never give the answer; probe the named misconception; may check the one prerequisite node the progression data names (one step back), never later ideas; redirect anything else ("that's for another lesson"); stop when the student explains the move in their own words and gets one new case right, then send them back to the lesson.
- **Limits stated plainly:** a prompt instructs, it can't enforce; it makes the coached path the default.

**Where (low prominence for now):**
- **Recap page only** (`recapHtml` in `build-site.mjs`): a small "Still stuck? Copy a coach prompt" under each answer, after the student has tried. Not on lesson pages, so the board and checks stay the main path.
- **Teacher guide:** the same prompt per lesson, so teachers see exactly what it says.
- Off unless the course or teacher turns it on (a course flag, or `?coach=1` on the recap link, as `?width=` works).
- Generated at build time from existing data (no AI at build); applies to any subject with nodes and misconceptions (maths and science first; code later).

**Later, if it works:** move into lessons after two wrong attempts; relates to the parked Nib idea (protégé effect, also named in the paper).

**To agree with the code and maths chats:** placement (recap and teacher guide), the default (off), and the prompt rules.

**Built for science (12 Oct, Matthew asked):** `tools/coach.mjs` (new) builds the prompt from the node's title, statement and success criteria, the node before it, and the first three `stuck:` lines. A course opts in with `coach: true` in its `index.md` (all 15 science courses; no other course changes). `tools/build-site.mjs`: prompts computed for opted-in courses; the recap card gets a hidden "Still stuck?" box with Copy (`.rccoach`, `RECAP_COACH_JS`), shown only when the recap URL has `?coach=1`. `tools/teach.mjs`: a "Coach prompt (optional)" section in the lesson guide with the full prompt and the `?coach=1` recap link. Maths or code can opt in by adding `coach: true` once they agree.

## Made (12 Oct 2026, code chat): 10K02 practice in HTML & CSS

The systems chat tagged the lessons, built How a web page is made and the theory concepts (see the systems entry below). On top of that, two checks so students who take only HTML & CSS still practise 10K02. Only lesson.md changed, so no clip re-records:
- Rules and selectors: a last Investigate task that sorts parts of a page into content, structure and presentation (n1).
- Page sections: a question on one style sheet restyling 40 pages, and screen readers reading the structure (n3's reasons). The node tags stay as the systems chat set them.

## Made (12 Oct 2026, code chat): open projects (Matthew asked to build)

Shared files touched; nothing re-records except the four lessons whose exit question changed and DOM clips (dom-errors hint):
- `tools/concepts.mjs` is split: the pure table and `conceptsIn` moved to `tools/concepts-core.mjs` (re-exported, no behaviour change; `check-concepts` passes), which the build copies to `dist/concepts-core.js`.
- `tools/build-site.mjs`: `writeProjects` (pages, chip, script), a projects section in the course teacher guide, recap cards get `id="<lesson>"` so links can land on one.
- `tools/trail.mjs` and `site/trail.js`: `trailHtml(layout, up, esc, { projects })` marks a course stop with its briefs and the card offers "◆ n projects to build" (units offer their course's).
- `tools/render-pictures.mjs`: a new `projects` section (only its own pictures draw).
- `tools/validate.mjs`: checks briefs. `tools/build-playground.mjs`: copies `web-helpers/` into the HTML and DOM playgrounds' `media/`.
- New: `tools/projects.mjs`, `tools/project-view.mjs`, `site/project.js`, `web-helpers/microbit.js`.
Maths and science can add `projects.yml` to a course if useful; `uses` needs concepts in `concepts-core` for their language, so for now it suits code courses.

## Made (12 Oct 2026, code chat): shared changes for the web pathway after the DOM

Proposed first, then made in the same batch, as Matthew asked for the courses to be built. Status per line: made with Bootstrap unless marked later.

For the four web proposals in `roadmap/code.md` (Bootstrap, Vue, the three-framework lesson, JavaScript `fetch`). Matthew asked for them to be built; these are the shared-tool changes they need, kept small. Nothing here changes a maths or science file.
- **`vendor/web/` (new):** Bootstrap 5.3.8 CSS, Vue 3.5.43 (global development build, for its warnings), Preact 11 with htm as one script, and Svelte 5.57.2's compiler and runtime with a small glue script (`svelte-glue.js`, ours). Licences beside them; `make.mjs` rebuilds them from npm. No CDN at run time.
- **`tools/build-playground.mjs`:** `buildHtmlPlayground` also copies `vendor/web/*` into `_playground-html/media/`; `buildDomPlayground` copies `media/html/` and `vendor/web/*` into `_playground-dom/media/`. A page then loads a library as a file beside it (`<script src="vue.js">`), in the playground, in pictures and in clips. `hashDir('media')` in `render-pictures` reads the source `media/` folder, so no existing picture redraws because of the copies.
- **`tools/serve.mjs` and the server in `tools/render-pictures.mjs`:** send `Access-Control-Allow-Origin: *`, as GitHub Pages does, so `fetch("weather.json")` from a sandboxed preview works in clips and pictures as it does on the site. No section hash changes (the server is outside them).
- **`tools/build-site.mjs`:** `PLAY` entries for `code/bootstrap` (HTML playground) and `code/vue` (DOM playground); `REFS` pages for `code/bootstrap`, `code/vue` and `code/dom` (groups of `snippets/html.json`).
- **`tools/concepts.mjs`:** `CONCEPTS.html` gains Bootstrap, Vue and `fetch` concepts, so the hidden-assumptions lint covers the new lessons.
- **`misconceptions.json`:** entries with homes in the new lessons. The voice lexicon is left alone (editing it re-records every voiced clip on the site): spoken lines spell awkward names in `say:` instead ("view" for Vue).
- **Clips and pictures:** `snippets/html.json` gains Bootstrap, Vue, Frameworks and Fetch groups, and `playground-dom/` changes (below), so every HTML and DOM clip records again at the next publish (as when turtle.json grew). New cards get new pictures; existing pictures keep their hashes.
- **`vendor/web/` also has** Bulma, Pico (classless), Tailwind's browser build and daisyUI, for the Bootstrap course's look at other frameworks (Matthew asked for it).
- **`tools/check-html-lessons.mjs`:** also walks `code/bootstrap/`, and answers `sort` checks the way it answers `match` (no existing lesson's result changed).
- **`tools/render-pictures.mjs` (with Vue):** the html and expected sections load each page from the local server's address (`showPage`) instead of `setContent`, which writes the page with `document.write`, so Chromium blocked its `<script src>` lines and Vue pages drew `{{ }}` unfilled. Their hashes change, so the 56 HTML card pictures and 98 expected pictures redraw once (quick; no MakeCode, no `SHARED` bump).
- **`tools/check-html-lessons.mjs` (with Vue):** also walks `code/dom/` and `code/vue/`; on the DOM playground it presses Run after putting in a solution. All DOM lessons pass.
- **Svelte wrapper:** a component sits in `<textarea data-svelte hidden>` (not a `<script>` with a comment), so code checks and the concept scan see it.
- **`media/html/weather.json` (with fetch):** the saved Canberra forecast, so `fetch("weather.json")` works beside the page. `hashDir('media')` changes, so the HTML-playground `shown` pictures redraw once too.
- **For Your site, for real and Saving between visits (12 Oct):** `tools/build-site.mjs` `PLAY` and `REFS` for `code/site`; `tools/concepts.mjs` gains `local-storage`; `tools/build-playground.mjs` copies `playground-html/download.js` into `_playground-dom/`; `tools/check-html-lessons.mjs` walks `code/site/`, accepts planted paths from one computer as broken pictures, and retries a Run that did not report. `snippets/html.json` gains the "A page for everyone, online" cards (alt text, heading outline, whole page, relative path): they match ordinary HTML, so the HTML course's cheat sheets list them too (they are unlocked in the site lessons).
- **Code chat's own files (for the record):** `playground-dom/main.js` gives the preview `<base href="media/">` (as the HTML playground does), makes `#name` links scroll inside the page, shows an `Error` in `console.log` by its message, gives a line number only for errors in the page itself (not in a library), and loads `<script src>` files beside the page with `crossorigin` (same line) so a library's rethrown error shows its real message, not "Script error.". `playground-dom/dom-errors.js`: hints for a Vue ref changed without `.value`, for a missing library line, for a promise used without `await` and for text that is not JSON. Later the same day: a **Download** button in both playgrounds; the DOM preview gets a `localStorage` stand-in kept per step by the playground, and the HTML preview an in-memory one (the sandboxed previews have no storage of their own).

## Parked

- Custom domain setup (DNS and the Pages setting are on Matthew's side).
- Progress export and import (a short copy-and-paste code to move progress between browsers) and a printable certificate of current progress. A fun long-term idea; keep it account-free.

## Changed by the science chat (11 Oct 2026)

- New shared-board widget `playground-board/widgets/energy.js` (Matthew approved): `mode: coaster | chain | sankey` for Year 8 and 9 energy. One `<script>` line in `playground-board/index.html` and a few `.en*` rules at the end of `style.css`; nothing existing changed (AUTHORING › 12). As with any board change, board clips and pictures re-record and redraw on the next publish.
- Proposed (not built): validate does not parse `teacher.yml`, so a colon in an unquoted summary only fails at build time (it has happened twice). A YAML parse of each `teacher.yml` in validate would catch it.

- Science map switched on (handoff above done): all 65 science lessons have `node:` (from their teacher notes; every one matched the kit's node labels), `map: true` in `content/science/index.md`, and `science` is in `CHECKED` (`tools/progressions.mjs`). 21 progression pages written with `tools/kit-page.mjs` from the kit. 18 lessons list `assumes:` for earlier nodes taught in class (each comment names the node); seasons and word equations list a node they deliberately come before. `tools/curriculum-map.mjs` and `site/curriculum-map.js` (Matthew approved): `WOVEN` strands (science's Human endeavour and Inquiry) show no waypoint dots, "woven through lessons and class work" in the row and card instead of "no lesson yet". Maths is unchanged.

- `playground-board/widgets/atom.js` (Matthew approved): `mode: halflife`, a `colour:` option for the table, and a stable or radioactive line in build mode (values `u`, `i`); a fix to "1 electrons". `playground-board/style.css` gains `.atkey`, `.atsw`, `.atstab`. Only atom lessons change; every board clip and picture redraws on the next publish, as with any board change.

- `playground-board/widgets/atom.js` gains `mode: decay` and `mode: shield` (alpha, beta, gamma; for 9U06 n3). Science-owned widget, no other file changed. As with any board change, every board clip re-records and every board picture redraws on the next publish.

- Board: two new widgets, `playground-board/widgets/atom.js` and `equation.js`, each a `<script>` line in `playground-board/index.html` and a small block at the end of `playground-board/style.css` (`.atgrid`/`.atcell` for the element table, `.eqtally` for the tally). Nothing existing changed. AUTHORING › 12 and CLAUDE.md › Science list them. `data/progressions/science/` holds four pasted pages (science is not in `CHECKED`, so validate is unchanged).

- Pictures on the science board (Matthew approved): `pictureBoard(lesson)` in `lesson-core.mjs` ('science' when a step uses `playground: science`, else 'board'); `usesBoardPictures` is now maths or science. `render-pictures.mjs` has a new `science` section (`drawScience`: the science board's `#board` after 1.8 s, cropped like the board's; `dist/_pictures/science/`); the board section's filter takes `pictureBoard(l) === 'board'`, so its hash and the maths pictures are unchanged. `build-site.mjs` reads the right folder.

- Board pictures for science (Matthew approved): `usesBoardPictures(lesson)` in `tools/lesson-core.mjs` (maths, or science with no step on the science board). Validate, `render-pictures.mjs` (the `board` job) and `build-site.mjs` (the picture lookup) use it instead of `language === 'maths'`. Maths pictures and their hashes are unchanged; science-board lessons (`playground: science`) still cannot have pictures (that needs a draw function for `_playground-science/`).

- `playground-board/widgets/universe.js`: the redshift spectrum is drawn 5 times bigger, not 20 (at 20, far galaxies showed no lines). AUTHORING › 12 `universe` line updated to match. Only the Redshift lesson uses it.

## Changed by the code chat: playgrounds and their courses (11–12 Oct 2026)

One block per playground. Course status is in `code.md`.

### Python playground (11 Oct, Matthew approved)

- **Pyodide on our own site.** `vendor/pyodide/` (Pyodide 314.0.7: core, pandas, FastAPI, Jinja2 and their dependencies, plus the Flask wheels from PyPI; 30 files, 24 MB) is committed, made by `tools/pyodide-vendor.mjs` (run by hand to change the version or packages). `buildPyPlayground` in `tools/build-playground.mjs` copies it to `dist/_pyodide/` (not stamped; its files are named by version) and builds `playground-py/` into `dist/_playground-py/`. No workflow change.
- `stampPlayground` also hashes `.py` files (only `playground-py/` has any; other playgrounds' stamps are unchanged).
- `tools/lesson-core.mjs`: `PLAYGROUND_KINDS` gains `python`; `unlockKind` maps `python` to `turtle`, and code checks on a `python` step use the turtle rules, so Python snippets, unlocks and code rules are shared. `tools/lesson-view.mjs` `PLAYGROUNDS` gains `python` (`_playground-py`). `tools/build-site.mjs` builds it, adds it to `VERSIONS`, and writes the turtle `unlocks.json` into it too.
- `tools/serve.mjs` serves `.wasm`, `.zip`, `.whl` and `.py` with proper types (Pyodide needs `application/wasm`). `render.mjs` is untouched, so no clip re-records.
- For Save the game (11 Oct): `snippets/turtle.json` gains a Files group (this re-records clips on the turtle playground, as any turtle snippet change does); `tools/concepts.mjs` gains Python concepts `file` and `json`; `misconceptions.json` gains `open-w-reads`; `tools/build-site.mjs`: the Deeper Python Reference shows the Files group and its Playground opens `_playground-py`.
- For Data detective (11 Oct): `try.files` on Python playground steps (data files from the lesson folder: validated in `tools/lesson-core.mjs`, copied to `<lesson>/files/` by `tools/build-site.mjs`, passed as `?files=&from=` by `tryEmbed` in `tools/lesson-view.mjs`; documented in AUTHORING). The playground adds missing lesson files, restores them on request and can add a file from the computer. **Fix in `evalRules`** (`tools/lesson-core.mjs`): Python comments are now stripped only outside quotes, so `"#" * 5` and `"#ff0000"` no longer cut a line short for `contains` rules (no existing lesson's result changed: validate passes). `snippets/turtle.json` gains a Data group (turtle-playground clips re-record again). `tools/concepts.mjs`: `csv`, `assert`, `pandas`. `misconceptions.json`: three entries. `tools/build-site.mjs`: Playground and Reference for `code/data`. `content/code/index.md`: Data detective is built; the machine learning card comes after `code/data`.
- For Web apps with Flask (11 Oct): `snippets/turtle.json` gains a Web apps group (turtle-playground clips re-record again); `tools/concepts.mjs` gains `decorator`; `misconceptions.json` six entries; `tools/build-site.mjs` Playground and Reference for `code/flask`; `content/code/index.md` lists `code/flask` on the Python and Web pathways (replacing the two planned cards).
- For Apps with Gradio (11 Oct): the playground's Gradio stand-in gains `gr.Radio`; tracebacks hide all of the playground's helper files; clips can pass a data file's text as `?file:<name>=` (the fix for the Data detective clips that failed in CI; AUTHORING updated). `snippets/turtle.json`: a quiz-question snippet in the Data group. `misconceptions.json`: three entries. `tools/build-site.mjs`: Playground and Reference for `code/gradio`.
- For Data detective's API lesson (11 Oct): the Python playground gains a `requests` stand-in (`playground-py/requests.py`, `wpFetch` in `worker.js`), and the package scan skips our stand-ins' imports (`requests`, `gradio`, `uvicorn`).
- For Machine learning (11 Oct): `vendor/pyodide/` adds scikit-learn (and scipy, joblib, threadpoolctl; `PACKAGES` in `tools/pyodide-vendor.mjs`), 43 MB in all; Check your school loads it too. `snippets/turtle.json`: a Machine learning group. `misconceptions.json`: three entries. `tools/build-site.mjs`: Playground and Reference for `code/ml`. `content/code/index.md`: the course is built.

### microStudio game player (11 Oct, Matthew approved link-out games)
- New playground kind `microstudio` (`PLAYGROUND_KINDS`, `unlockKind` maps it to `turtle` like `python`; `PLAYGROUNDS.microstudio` in `lesson-view.mjs`, titled "Play it", no saving). It is play only: `try: { playground: microstudio, starter: file#region }` shows the game running; no code checks.
- `playground-microstudio/index.html` plus `vendor/microstudio/` (microStudio's `microengine.js` and `runner.js`, Brython 3.11.3 and its stdlib, BitCell font; MIT and BSD-3 licences beside them). Built by `buildMicrostudioPlayground` in `build-playground.mjs` into `dist/_playground-microstudio/` (stamped; in `VERSIONS`). The page starts the engine itself when the game has no pictures (the engine otherwise waits for its first sprite to load) and replaces `Player.reportError` and `log` to show errors and prints over the game.

### p5.js playground (11 Oct)
- New playground kind `p5` (`PLAYGROUND_KINDS`; `unlockKind` returns `p5` when a lesson's `language` is `javascript`; `PLAYGROUNDS.p5` in `lesson-view.mjs`). `playground-p5/` plus `vendor/p5/` (p5 2.3.4, LGPL-2.1, unmodified, licence and README beside it), built by `buildP5Playground` in `build-playground.mjs` into `dist/_playground-p5/` (stamped, in `VERSIONS`). The sketch runs in a sandboxed iframe (`allow-scripts`); the page reports `{wp:'run', kind:'p5', ...}` like the other playgrounds.
- `tools/lesson-core.mjs`: `P5_RULES` (`contains`, `defs`, `params`, `calls`, `loops`, `returns`, `uses`) and a `p5` branch in `evalRules` that reads JavaScript (comments and strings skipped; p5's own hook functions are not "functions of your own"). No existing lesson's result changed.
- `tools/concepts.mjs`: `CONCEPTS.javascript` (23 concepts); the fenced-code scan also reads `js` blocks. Note the scan ignores text before a lesson's first `##`. `misconceptions.json`: seven entries. `tools/build-playground.mjs`/`build-site.mjs` only add the new builder. `render.mjs` untouched: no clip re-records.
- `playground-p5/p5-errors.js` is pure (like `python-errors.mjs`) but has no test script yet.
- p5 round-off (11 Oct): `loadSnippetFiles` in `tools/lesson.mjs` also reads `snippets/p5.json`; `tools/build-site.mjs` adds `PLAY['code/p5']`, a `REFS` entry, and an empty `PICS.javascript` (so p5 cards never borrow turtle pictures by id); the playground page hides the unlock button for p5. `playground-p5/p5-errors.js` fixes (wrong-case hint, Unexpected identifier order); `npm run check-p5-errors`.
- Proposed and approved (Matthew, 11 Oct): two new shared-board widgets for 9U04 n2 to n5, `playground-board/widgets/wave.js` (`mode: sound | refract | spectrum`) and `charge.js` (`mode: static | pair | current`), each a `<script>` line in `playground-board/index.html` and a block at the end of `style.css`. Sound and charge draw on a canvas inside `#board`, so `B.jsx` in `core.js` gets one line that removes a leftover `canvas.wpcv` before it starts a JSXGraph board (nothing else in core changes). Board clips and pictures re-record and redraw on the next publish, as with any board change.

- `tools/render-pictures.mjs` (board section): `drawBoard` now also waits for `#board canvas.wpcv`, so the canvas boards (`wave` sound, `charge`) can have pictures. Boards drawn with JSXGraph are unchanged.
- p5 pictures and clips (11 Oct): `tools/render-pictures.mjs` gains sections `p5` and `p5shown` (own folders `_pictures/p5`, `_pictures/p5shown`; no existing section's hash changed, `SHARED` not bumped), a `WP_ONLY=<name prefix>` filter for testing one kind, and the `expected` section skips `language: javascript` lessons. `tools/lesson-core.mjs`: `picture:`/`explainPicture` and `expected:` are accepted in p5 lessons (`expected` needs `playground: p5`). `tools/build-site.mjs`: p5 lessons read their pictures from `p5shown`; `PICS.javascript` reads `_pictures/p5`. `playground-p5/main.js`: `?zoom=`. p5 clips use the lesson's `app:` (port 8130), so `render.mjs`/`stage.html` are untouched.

### DOM playground (11 Oct)
- New playground kind `dom` (`PLAYGROUND_KINDS`; `lesson-core` maps `dom` to `html` for `unlockKind`, code checks and `expected:`; `PLAYGROUNDS.dom` in `lesson-view.mjs`). `playground-dom/` is built by `buildDomPlayground` into `dist/_playground-dom/` (stamped, in `VERSIONS`) and copies `playground-p5/p5-errors.js`. The HTML playground is untouched, so no HTML clip re-records. `?zoom=` zooms the code and the preview's page (not the playground itself, because that puts Playwright clicks in the wrong place).
- `playground-p5/p5-errors.js`: the not-a-function hint now says "a name the browser or p5 has" (check-p5-errors passes). p5 clips re-record at the next publish.
- `tools/concepts.mjs` `CONCEPTS.html`: `text-content`, `style-prop`, `class-list`, `input-value`, `console-log`, `create-element`, `append-element`. `content/code/html/make-it-react` now lists `text-content, style-prop` in `recipes` (metadata only, `lesson.md`, so no clip re-records).
- `misconceptions.json`: `selector-typo`, `selector-prefix`, `script-order`, `call-not-pass`, `class-dot`, `value-is-text`, `list-is-live`, `state-in-handler`, `name-typo`.
- Note: `check-decks` reports `robot-drive` slide 4 at 709px. This was already the case and is not from this change.

### microStudio playground, Reference and clips (12 Oct)
- `playground-microstudio/edit.html` and `edit.js` add an editor beside the player (`index.html`), which runs in an iframe on the same origin. `build-playground` copies `tools/python-errors.mjs` into `_playground-microstudio/`. Two changes to `index.html`:
  - `brython({ indexedDB: false })`: when the top page has another origin (the clip stage), Brython's cache never opens and it waits forever.
  - A guard sets `navigator.language` to en-US when `Intl` cannot read the browser's locale. With no `LANG` set (this sandbox), Chromium reports `en-US@posix` and Brython stops at load.
  - No existing clip used this playground, so nothing re-records.
- `tools/build-site.mjs`:
  - `PLAY` entries can name `page:` (the file to open, default `index.html`); `PLAY['code/games']` is the new entry.
  - New `REFS` entry `code/games/reference`.
  - `MS_SNIPS` is read on its own (not through `loadSnippetFiles`), so its card ids never shadow turtle cards of the same name.
  - `PICS.microstudio`, and `refItem` picks pictures by `target: microstudio`.
  - A course whose steps use `playground: microstudio` takes its cheat-sheet cards and pictures from `snippets/microstudio.json`.
- `tools/render-pictures.mjs`: new section `microstudio` (`_pictures/microstudio/`, the 9 examples). No other section's hash changed.

## Changed by the Digital systems chat (12 Oct 2026)

- New subject folder `content/systems/` (menu "Digital systems"; roadmap in `roadmap/systems.md`). No build changes were needed: subjects are found from the content folders.
- Board: new widget `playground-board/widgets/bits.js`, registered in `playground-board/index.html`, styles at the end of `style.css`. `core.js` unchanged. Editing the board folder re-records every board clip on the next publish (the clip hash covers the playground).
- `misconceptions.json`: two entries. AUTHORING › board: `bits` entry.
- Later the same day: `tools/progressions.mjs` (`CHECKED` adds `systems`; `yearOf` reads any learning-area prefix, so AC9TDI8K03 is Year 8; maths and science codes read as before), `tools/kit-page.mjs` (letter T → the kit's `data/technologies/`, written to `data/progressions/systems/`), `tools/import-curriculum.mjs` (subject `systems`: K descriptors only, rows by topic), `tools/curriculum-map.mjs` (`STRANDS.systems`) and the map's short codes (`6K03` rather than `DI6K03`; maths and science unchanged). New board widgets `decode`, then `pixels` and `sampling` (and `decode` gained `type: on` and `table: on`, which add to it), then `logic`; `pixels` gained `mode: bw`, `rle:`, `show: codes` and `lossy:` (additions). `tools/concepts.mjs` `prerequisites()` now includes `systems`. Then `network` and `security`. Then `hardware` (spec sheet and jobs; `systems/hardware`, ports 8479–8481). Then `gates` and `cpu` (`systems/logic`, ports 8482–8485). Then theory concepts across subjects: `THEORY` and `theoryIds` in `tools/concepts-core.mjs`; `tools/concepts.mjs` lints them across languages and exports `theoryLinks`; `tools/progressions.mjs` ignores theory ids in `assumes:`; `tools/build-site.mjs` passes `conceptLinks` and lists other subjects' lessons on a subject's curriculum map when they carry its descriptors; `tools/lesson-view.mjs` shows "Builds on" / "Put to work in" under the hook (`.clinks`). Frontmatter-only edits to code lessons: HTML & CSS first-page, selectors, sections, club-page (`node:` 10K02), microbit-security/caesar (`assumes: [text-as-numbers]`), p5/p5-shapes (`assumes: [rgb-colour]`). 10K02 now has a Digital systems home (`systems/web`, no coding); the HTML & CSS course keeps its tags as practice, and Rules and selectors got `assumes: [web-layers]` (frontmatter only) so its page links to Three layers. New board widget `webdoc` (ports 8486–8487). Then `shell` (`systems/shell`, ports 8488–8492). Then `cyber` (`systems/cyber`, ports 8493–8499 and 8540; 8540 sits above Engineering's 8500–8539). Then `shapes` (Data representation › Shapes as numbers, port 8541), `encode` and `source` (`systems/ctf`, ports 8542–8544); `THEORY` gains `vector-graphics` and `encoding`. Then `netctf` (Networks › Network capture the flag, port 8545). Clip-server ports: Digital systems lessons use 8460–8499; two maths lessons and two of ours had both claimed 8320–8333, so pick a fresh range when adding lessons.

## Changed by the Engineering chat (12 Oct 2026)

- New subject folder `content/engineering/` (menu "Engineering"; roadmap in `roadmap/engineering.md`). No build changes.
- Board: new widget `playground-board/widgets/gears.js`, registered in `playground-board/index.html`, styles at the end of `style.css`. `core.js` unchanged. Like any board change, every board clip re-records on the next publish.
- `misconceptions.json`: three entries (`bigger-gear-faster`, `gear-ratio-upside-down`, `gear-one-effect`). AUTHORING › board: `gears` entry.
- Clip-server ports 8500–8539 for Engineering lessons.
- Later the same day: new board widget `circuit` (`playground-board/widgets/circuit.js`, registered in `index.html`, styles at the end of `style.css`); `core.js` unchanged. `misconceptions.json`: four entries for the circuits course.
- Later again: new board widget `arduino` (`playground-board/widgets/arduino.js`, registered in `index.html`, styles at the end of `style.css`); `core.js` unchanged. `misconceptions.json`: six entries for the Arduino course.
- Engineering again: new board widget `breadboard` (`playground-board/widgets/breadboard.js`, registered in `index.html`, styles in `style.css`); the `arduino` widget gained `test:` cases (an addition). `misconceptions.json`: three entries.
- Engineering: new board widget `motor` (`playground-board/widgets/motor.js`, registered in `index.html`, styles in `style.css`). `misconceptions.json`: four entries.
- Engineering capstones: `tools/lesson-core.mjs` reads a new frontmatter key `shape:` (only `design` for now) into `lesson.shape`; `tools/lesson-view.mjs` adds `STAGE_INFO_DESIGN` (Inquire, Develop, Create, Test, Evaluate on predict, investigate, make, modify, practise) and picks it when `lesson.shape === 'design'`. Nothing else changes; no clip re-records (lesson-view is not in the clip hash). AUTHORING › Design projects.
- Engineering: new board widget `fab` (`playground-board/widgets/fab.js`, registered in `index.html`, styles in `style.css`). `misconceptions.json`: six entries.

- 12 Oct: `teach.mjs` honours `shape: design`. Decks and worksheets for capstone projects use the step's own title (Inquire, Develop, Create, Test, Evaluate), never "Predict" or "Make:"; the Inquire step renders as its check (the brief sort), not a prediction. Sort checks now list their items on slides (groups and items on one line each) and worksheets (one answer field per item). `check-decks` passes.
- 12 Oct (engineering chat): new board widget `train` (`playground-board/widgets/geartrain.js`, registered in `playground-board/index.html`, styles `.gmid` and `.gback`). Any board-playground change re-records board clips on the next publish.
- 12 Oct (engineering chat): new board widget `lever` (`playground-board/widgets/lever.js`, `mode: lever | pulley`), registered in `playground-board/index.html`, styles `.lv*` and `.pl*`.
- 12 Oct (engineering chat): new board widget `motion` (`playground-board/widgets/motion.js`, `mode: crank | cam | linkage`), registered in `playground-board/index.html`, styles `.mv*`.
- 12 Oct (engineering chat): new board widget `pcb` (`playground-board/widgets/pcb.js`, `mode: layout | route | rules`), registered in `playground-board/index.html`, styles `.pcb*`.
- 12 Oct (engineering chat): new board widget `truss` (`playground-board/widgets/truss.js`, `mode: truss | beam`), registered in `playground-board/index.html`, styles `.tr*`.
- 12 Oct (engineering chat): `THEORY` gained eleven Science ids (forces, energy, current, turning effect); physics lessons in `content/science/physics-7` to `physics-10` got one-line `introduces:` tags (no other change); `prerequisites()` in `tools/concepts.mjs` reads `engineering`. Science lesson pages now show "Put to work in" links to Engineering.

## Proposed (13 Oct 2026, code chat; Matthew agreed the plan, not scheduled): boards for teachers and a thin shared core
Full plan in the Project doc `boards-catalogue-plan`. Nothing built; no date set.
- **Why:** teachers should be able to find a board, try a setup and reuse it in their own lessons and decks; and 88 shared-board widgets (19,574 lines) plus 21 science-board widgets repeat the same plumbing, which makes boards slow to add and hard to keep consistent.
- **Facts checked:** shared board `playground-board/` has 88 widget files (maths about 41, systems 17, science 15, engineering 10 + `train`, code `classifier` and `serial`; only `graph` and `key` serve two subjects); `core.js` is 139 lines (setup parser, `B.jsx`, `B.post`, `B.save`, status). 30 widgets define their own `el()`, 27 their own `slider()`, 18 their own `btn()`. Science board `playground-science/main.js` holds 21 more widgets. Both hosts read the setup from `?code=`. Only `arduino`, `cpu`, `shell` and `gates`/`logic` take student-written code; no board is driven by blocks or Python. `create/` has no board kind.
- **Order when taken up:** (1) `/boards/` catalogue (a card per widget from `data/boards/<widget>.yml` plus the widget file's header comment; Open, Copy embed, values for `when:` checks, "Used in" links; a Try area with an editable setup); (2) `npm run check-boards` (every example starts, every listed value is reported, no widget without a card); (3) a `board` kind in `create/`; (4) later, per-widget forms or blocks/Python only if teachers ask.
- **Shared core (gradual):** add to `core.js` only controls (`B.slider`, `B.button`, `B.row`), element makers, a standard declaration of named values (`scope.vars`) and of settings. Keep it thin: widgets keep their own drawing (SVG, JSXGraph or canvas). Widgets move onto it one at a time when next touched, after `check-boards` exists, because changing a widget's markup re-records clips and redraws pictures for the lessons that show it.
- **Open:** cards as YAML in `data/boards/` or header-only; one catalogue for all subjects with a filter; whether `playground-science` joins the shared core later.
- Parallel chats: this touches shared tools (`core.js`, `build-site.mjs`, `validate`); check `git log` and this file first when taken up.

## Changed by the AI audit chat (18 Oct 2026)
- `tools/lesson-core.mjs`: validate now errors on (1) more than one ```` ```step ```` block under one `##` heading (only the first was read; the rest showed as text) and (2) a board starter with no `#region` when the file has regions (it loaded every setup at once). Only the three AI Unit 1 lessons tripped them, now fixed. Parsed steps carry `extraSteps` only when there are extra blocks. No clip hashes change.
- `create/`: new `safe-markdown.mjs` (`SafeMarked`), used for Create's preview and package pages instead of plain Marked, so a shared draft link or imported package can no longer run script on this site's origin. Sandboxing the preview iframe was tried and rejected: it removes storage, which breaks step links and the playgrounds.
- `.github/workflows/frontmatter-bridge-test.yml` (Create's real-Chrome tests) now also runs on pushes to main that touch Create, not only on pull requests.
- CLAUDE.md documents the `publish-navigation` / `publish-create` route.

## Changed by the Create chat (18 Oct 2026): packages, units, videos
Matthew approved the audit's Create items. Built:
- **Packages laid out like `content/`** (`create/lesson-package.mjs`): course ZIP = `<course>/index.md` (title, summary, `units:`), `index.html`, `README.txt`, and one folder per lesson named from its title (`lesson.md` gets `unit:` and `order:`; `index.html`, `clips/<step>.webm|.vtt`, `clips.json`). Lesson ZIP = one such folder. One "Download lesson" and one "Download course" (`<slug>-lesson.zip`, `<slug>-course.zip`); the source-only download and create.js's second ZIP writer are gone.
- **Import** reads the ZIP's central directory (store or deflate via `DecompressionStream`, data descriptors, `__MACOSX`/`.DS_Store` skipped), a folder (`#importFolder`, `webkitdirectory`: Safari/Finder already unzipped it), a repository lesson or course folder, and the older Create layout (`waypoints-lesson.json` / `waypoints-course.json`). Importing replaces the untouched first-visit starter instead of keeping it beside the import.
- **Units** in the workspace: "Unit of this lesson", "+ Add unit", "Rename unit"; lesson labels read "Unit › Lesson"; downloads group lessons by unit. Other `index.md` keys round-trip (`workspace.meta`).
- **Per-video fingerprints** (`clipFingerprint` in `create/draft-store.mjs`): settings minus descriptive fields, the video's own section, inline code and other files. Older whole-lesson fingerprints still count until something changes (`clipIsCurrent`).
- **Storage:** `navigator.storage.persist()` after imports and recordings, usage shown under the videos, orphaned drafts deleted on load and after a course import. Quota errors get a plain message.
- **Recorder** (`create/clip.js`): support check up front (Safari/iPad told they cannot record), timer, 5-minute limit, leave-page warning, Region Capture crop to the caption and playground, captions saved as WebVTT with the video (offline pages also embed them as a data: URL), and `fixWebmDuration` writes the WebM's duration.
- **Typing** saves after a 600 ms pause (with a localStorage backup restored on the next load), and the preview re-renders from video checks only when a video's state changes, so it no longer reloads on every keystroke.
- **Words:** "video" for recordings, "clip instructions" for the script; "Video recorder", "Record video", "Use this video in the lesson", "Download lesson/course (.zip)".
- Tests: `experiments/lesson-package-test.mjs` rewritten; `course-smoke`, `entry-smoke`, `authoring-smoke` updated (editing another step keeps a video; editing its own step needs re-recording). Locally all Create tests pass with `WP_TEST_CANVAS_CAPTURE=1` and Chromium.

## Agreed 18 Oct 2026 (Matthew): reasoning checks for any subject, and clearer check names (built 18 Oct: see Built 18 Oct below)
- **Reasoning check, subject-neutral:** keep maths wording for maths lessons; elsewhere use "Your thinking" (not "Your working"), "Show a model answer" (not "model solution") and a neutral default placeholder. Use it for "decide and justify" tasks in English, humanities, science and the AI courses: free writing (never marked), an optional pick ("which evidence/reason is strongest?"), then model answer(s) and rubric-style self-check `criteria`.
- **Unmarked mode:** a reasoning check may have neither `answer` nor `picks`: the student writes, then sees one or more model answers (e.g. "a strong answer", "a different view that also works") and ticks the self-check. Use a marked pick only where one reason is clearly best. Validation and AUTHORING.md change to allow it.
- **Names:** in AUTHORING.md call `sort` "sort into groups" (items into categories; groups can repeat) so it is not confused with ordering (`parsons`), and `match` "match pairs" (one-to-one).

## Agreed 18 Oct 2026 (Matthew): Create keeps teachers in the design decisions (built 18 Oct: see Built 18 Oct below)
Principle: Create should involve teachers in the lesson-design decisions rather than let the AI make them silently (the same principle as the AI courses: keep the part that is the skill). Non-specialist teachers are a welcome audience and get guidance; specialists are not slowed down (expertise reversal).
- **Starter and lesson prompts** (`create/start-prompt.md`, `create/authoring-prompt.mjs`): before drafting, the AI walks the teacher through four decisions: the one idea students leave with, the misconception to tackle, the opening move (e.g. predict or puzzle), and what the checks should catch. For each it asks first ("If you're not sure, say so and I'll suggest three with reasons"); a teacher who is unsure gets two or three options with reasons and chooses or writes their own; anyone can say "suggest and I'll adjust". It then drafts to those choices and lists them at the top of its reply (or as a comment in lesson.md).
- **Create review** beside the preview: shows the teacher's own choices next to "Does the lesson do this?" for them to tick. Nothing is marked; a prompt for their judgement, like the reasoning check's self-check.
- **Videos in Create (agreed 18 Oct 2026):** keep recording opt-in and not heavy-handed; no rules about when videos help (context varies, including flipped learning). When a teacher adds clip instructions, Create asks one neutral question with open examples: "What will this video do for your students? For example: a hook, a demo to watch before class, the expected result, catching up after an absence." The authoring prompt asks the same ("Would a video help here? If so, what for?") and shapes the clip instructions to the answer.
- **Sharing routes (agreed 18 Oct 2026):** usage is unknown, so design for all three: publishing, colleague sharing and students.
  - **Publishing:** "Request publishing" predates in-browser recording and sends only a draft link. Change it to send the lesson or course ZIP (lesson, videos as drafts, captions), for example as a Google Form file upload. Where the site's robot can record a clip, it re-records on publish for consistency; where it cannot (MakeCode, key-driven games), the teacher's video can be kept as the published one.
  - **Share menu:** one menu with three named choices: Link (text and clip instructions only; the recipient edits and re-records), ZIP (everything, with videos) and Student link.
  - **Students:** a "Student link" that opens the lesson as a plain student page (no editor), carried in the link like the draft link and rendered with SafeMarked; text, checks and playgrounds work, videos do not travel in a link. Plus "Download videos" as plain files to post on the school's learning platform (MP4 where the browser can record it, else WebM), the way waypoints-audio exports plain MP3s. Optional: a step can take a video link (for example an unlisted or platform-hosted video) that the student page shows in place.

## Built 18 Oct 2026: reasoning for any subject, prompt cards, video links
- `reasoning` check: maths keeps its wording; other subjects get "Your thinking", "Show a model answer", "Check your own thinking", a neutral placeholder and neutral default self-check. Unmarked mode (no `answer`, no `picks`): "Compare with a model answer" shows the models and the self-check. `models:` (text or `{ title, text }`) adds model answers; `steps` is optional when `models` is given. Styles for non-maths pages come from `RS_CSS` (taken from `MATHS_CSS`). `teach.mjs` lists models in guides.
- Step `prompt:` (text or `{ title, text }`): a copyable AI prompt card with "only if your teacher says you can" (`promptHtml`, `AIP_CSS`, `AIP_JS` in `lesson-view.mjs`). For the Learning with AI courses.
- Step `video:` (`https://` address or `{ url, caption }`): YouTube/Vimeo as a privacy-friendly embed (youtube-nocookie), video files as a player, else a link (`videoHtml`). For teacher-made lessons.
- AUTHORING.md documents all three and calls `sort` "sort into groups". No clip hashes change (`lesson-view.mjs`, `lesson-core.mjs` and `teach.mjs` are not in clip hashes).

## Candidate (18 Oct 2026, Matthew): a course for teachers on making tutorials
A short course for teachers, in the site's own lesson format with Create as its playground, on making a tutorial: likely the four decisions Create now asks about (the one idea, the misconception, the opening move, checks that test understanding), what a video is for, and sharing. Create's options-with-reasons prompts could link to it. **Wait:** design decisions are to be settled after the current Create and AI-course work has played out. Plan approved 18 Oct (evening): `roadmap/teacher-course-plan.md`; handoff in the Project doc `claude/handoff-teacher-course.md`. Not built.

## Built 18 Oct 2026: Create design decisions and sharing (from the agreed items above)
- Prompts: `create/design-decisions.mjs` (`DESIGN`, `DECISIONS_TEXT`) in both `start-prompt.md` and the lesson prompt; `experiments/authoring-test.mjs` checks both carry it. Teacher notes accept `design:` (validated in `lesson-core.mjs`; the teacher block is outside video fingerprints, so editing it keeps videos).
- Create: "Your design decisions" panel (edits write `design:` into the teacher block or `teacher.yml`; ticks in localStorage `wp-create-review`), the video-purpose question after "Clip instructions", a "Video link" helper, one Share row (download lesson/course, edit link, student link, download videos, request publishing).
- Student link: `create/view.html` + `view.js` render a `#l=` lesson as a plain student page with SafeMarked; the lesson is kept in sessionStorage so step links (which change `#`) survive a refresh. Progress key `shared/<hash of the files>`.
- Request publishing now downloads the lesson or course ZIP and opens the form. **Matthew:** add a file-upload question to the Google Form (forms.gle/CoRAXJWHnVQ8mXpPA) so the ZIP can be attached.
- Not done: MP4 recording. Videos stay WebM, which plays in current Chrome, Edge, Firefox and Safari 17.4+; MP4 would need changes to the recorder, the duration fix and the package checks.

## Changed after the handoff (18 Oct 2026): Create examples and starters
- `create/lesson-starters.mjs` is the one source for Create's ready-made lessons: `EXAMPLES` (coding Turtle, maths balance board, science forces board; each with a filled `design:` teacher block) and `newLessonFiles` (the "+ Add lesson" fallback), beside `starterFiles`. `create.js` and `workspace.mjs` import them; the inline copies are gone.
- Start page: **Explore an example** opens a Coding / Maths / Science chooser (`#exampleRoute`, buttons built by `entry.mjs`). The Turtle example now also carries a `design:` block.
- Tests: new `experiments/create-examples-test.mjs` (in the Create workflow) validates each example and the add-lesson starter and checks all five design keys; `entry-smoke` opens each example and checks its validation report.

## Lesson position label (proposed, 18 Oct 2026, Matthew)
- The lesson bar shows "N of M" across the whole course, by `order:`. The AI courses had per-unit `order:` numbers, so their counters and previous/next links were wrong; fixed 18 Oct by renumbering them course-wide (the convention everywhere else).
- Matthew's idea for later: show the unit as well, for example "Unit 2 · lesson 5 of 5" (or "Unit 2, 5 of 5 · 8 of 13 in the course"). A change to `lesson-view.mjs`/`build-site.mjs`; not started. Validate could also warn when two lessons in a course share an `order:`.

## Generic Create, first batch (18 Oct 2026, afternoon)
Plan in the Project doc `create-generic-proposal` (Lesson shape). Built:
- `shape: primer` (lesson-core, `STAGE_INFO_PRIMER` in lesson-view, plain titles and a text-only "The idea" slide in teach.mjs). Profiles **Primer** and **None** (free steps; plain step names) in `LESSON_PROFILES`; Create's subjects add English and Humanities (HASS), defaulting to Primer with no playground.
- `create/shape-guide.mjs` (`SHAPE_TEXT`): the three settings (sequence, guidance, width) and Kit anchoring (node files from the Kit index; success criteria, misconceptions, width tiers, `response_modes` as a list). In both prompts; `authoring-test` checks both, and that any stage order validates (it already did).
- The write, compare and self-check check needed no new type: the unmarked `reasoning` check (`q`, `models`, `criteria`) already works in any subject.
- Fourth Create example, **Humanities**: a History primer drafted from Kit AC9HH7S03 node 1 (origin and content), with made-up sources, a `design:` block and a class plan. An untested example of the generic flow, not reviewed curriculum; nothing new on the public site.
- Next (proposal order): teacher section with pointer pages; Kit node picker with pre-fill; synthesise prompt; subject-neutral `/create/` address; board picker by task kind.

## Generic Create, part 2: pointer pages and node picker (18 Oct 2026, evening)
Steps 3 and 4 of the Project doc `create-generic-proposal`. Built:
- `tools/import-curriculum.mjs` takes `history` (AC9HH; strands Knowledge and understanding / Historical skills from the code) and keeps every node's width, hinge reason, response modes (Kit's five only; `width_opportunity` is a flag) and related standards, plus the standard's prior knowledge, endpoint and Kit file. `data/curriculum/history.json` committed (105 standards, 332 nodes, Kit 5f973ec). Maths, science and systems were not re-imported: their extra fields arrive when they are.
- Review status: `data/review/<subject>.yml` (`status: draft | reviewed`, `kit: v0.2`, optional `nodes:` per node or standard). Only History so far.
- Teacher pointer pages (`tools/pointer-pages.mjs`, `POINTER_SUBJECTS = ['history']`): `/teach/curriculum/history/` (index by year and strand), a page per standard and per node (`…/<code>/n<k>/`): checkpoint, criteria, prior knowledge, width, hinge, response modes, related standards, Kit file link, tagged lessons and **Make a primer for this**. Draft label and `noindex` until reviewed. Linked only from `/teach/`; no History menu or `content/history/`.
- Shared change: `page()` in `lesson-view.mjs` takes an optional fifth `head` argument (used for `noindex`).
- Create: `tools/kit-nodes.mjs` (pure; copied into Create) parses refs (`AC9HH7S03.1`, `AC9HH7S03 n1`), turns criteria into "I can" goals, builds the Primer pre-fill and the prompt's node text; `create/node-picker.mjs` is the picker. Long lesson titles no longer widen Create on phones.
- Tests: `experiments/kit-nodes-test.mjs` and `experiments/pointer-pages-smoke.mjs`, both in the frontmatter-bridge workflow.
- Kit data slips for Matthew: `yf_maths_AC9MFN04` node 2 lists `width_opportunity` as a response mode; `y9_history_AC9HH9K14.json` gives its code as `AC9HH9K014` (imported as Kit has it).
- Next: faint pointer dots on the map; the synthesise prompt (step 5); subject-neutral `/create/` and the board picker's task-kind filter (step 6); other subjects' pointer pages once History's are reviewed.

## Make a lesson: Teachers menu, weak example, lesson 1 (18 Oct 2026, evening)
Plan: `roadmap/teacher-course-plan.md` (approved). Built, then stopped for Matthew's pilot of lesson 1 with one non-specialist teacher:
- **Teachers menu** (shared change, `build-site.mjs`): a top-level folder's `index.md` may list `links:` (`{ title, href, summary }`, `href` from the site root and ending in `/`), added to its navbar menu and listed on its folder page; `audience: teachers` sorts the menu last and keeps the folder off the home page's subject list. `content/teachers/index.md` lists Make a lesson, For maths teachers and Choosing AI tools; the menu is marked on those pages. No `trail:`, so no trail picks it up.
- **Navbar** (shared change, `NAV_CSS` in `lesson-view.mjs`): from 701 to 1100px, top-level links take 6px side padding, so an eighth menu still fits in two rows at 1024px (it went to three).
- **Course** `content/teachers/make-a-lesson/` (units Make one; The lesson to improve). Lesson 1 *Make your first primer* (`shape: primer`; pointer page AC9HH7S03 n1 → Make a primer for this → rewrite the intro, Lock-in prediction with a `reasoning` check against a model → optional AI route → Copy student link; teacher notes for a facilitator, with a 50-minute session plan). *Example to improve: Seasons and the Moon* (optional): one fault per design decision (two ideas; the distance-from-the-Sun misconception never raised; opens by telling; checks passable by guessing or recall), for lessons 2–4.
- Test: `experiments/teacher-course-smoke.mjs` (in the frontmatter-bridge workflow).
- Next, after the pilot: lessons 2–6, the rest of the teacher notes, the line on Create's start page.

## Make a lesson: lessons 2–6 drafted (19 Oct 2026)
Matthew asked for the rest before the lesson 1 pilot. Built: 2 One idea (topic vs idea, three tests; sort of eight statements across subjects), 3 The misconception and the opening move (London in January; multiplying makes bigger), 4 Checks that test understanding (guessable / recall / understanding sort; Perth in December rewrite; feedback on each option; width), 5 What a video is for (optional; four jobs, captions first, recording in Create), 6 Share it and get it reviewed (Share row, the six-item review checklist run on the example and a colleague's primer, Request publishing, become a reviewer). Units: Make one, Make it better, Videos and sharing, The lesson to improve. Teacher notes give three facilitator sessions (1–2, 3–4, 5–6).
- Every subject, not only History: lessons teach subject-neutral moves with examples rotated across History, Science, Maths, English and Digital Technologies; from lesson 2 teachers work on their own topic; lesson 1 has a "Not History?" route (Create's waypoint picker for Maths, Science and Digital Technologies; Primer with no waypoint for any other subject). Add a starting waypoint per subject to lesson 1 as each subject gets pointer pages.
- Review is indirect (Matthew, 19 Oct): teachers review tutorials, not Kit; a reviewer who says a lesson's goals or misconception are wrong is reviewing its waypoint, and Matthew corrects Kit. Done the same day: see Curriculum pointers for every subject.
- Create: opening a waypoint (`?node=`) now replaces the Topic and Learning goal (they kept the last lesson's title, "My first turtle lesson"); the start page links to Make a lesson.


## Proposed (19 Oct 2026, Matthew asked; for later, after Mermaid): visual and quality tools

Mermaid diagrams come first: plan in `roadmap/diagrams-plan.md` (not approved to build yet). Prepare already renders Mermaid in decks (`waypoints-prepare`, `src/lib/utils/mermaid.ts`). Then, in this order:

1. **Step-through code tracer (Python Tutor style).** A Step button showing variables, call frames and return values. Skulpt's `tracer` hook is already stubbed in `playground/skulpt-bridge.js`. It fills the visual gap in Python foundations, functions, console and objects, none of which has an `explainPicture`, and it supports the trace checks. Build it in-house rather than embedding pythontutor.com.
2. **PhET simulations.** Free, browser-based and embeddable, and borrowing over reinventing is the stated preference. They'd cover science with no engine yet (circuits, waves, states of matter beyond the particle board), as an alternative or extension beside the hinge-node boards, not replacing them.
3. **Site-wide search (Pagefind).** A static index built at build time, with no server. Search today covers only the Reference pages; teachers and revising students need to find things across about 600 lessons, primers, recaps and cheat sheets.
4. **Plain-language readability check in `npm run validate`.** A score (Flesch-Kincaid or similar) on student-facing fields, flagging text that's too dense for Year 7, the way `effort` flags hints. Catches drift across parallel chats.
5. **Accessibility checks (axe-core) in the headless runs.** Contrast, labels and keyboard traps on pages, boards and playgrounds. Do this before Mermaid SVGs and new widgets multiply.
6. **Observable Plot or Vega-Lite for data lessons.** For real datasets (histograms, grouped bars) where JSXGraph is awkward: the Data course and science "investigate the data" steps.
7. **`<model-viewer>` for Engineering CAD and 3D printing.** Spin the STL or GLB of the part being designed or printed. Only once those lessons need it.

8. **Simple drawn figures and an icon set** (added 19 Oct, after Matthew noted Mermaid overused in Prepare decks where a picture would have done better).
   - For things that are seen rather than connected (a gear, a cell, a circuit symbol, a labelled object) when no board draws it and no photo fits.
   - Hand-made SVG files beside the lesson (`figure:`, same shape as `diagram:`, themed the same way).
   - A small vendored icon set (Lucide, ISC licence) for signposts, never as content.
   - Prepare gets the matching route (its slide prompt routed every drawn visual to Mermaid). See `roadmap/diagrams-plan.md` › Prepare.

Considered and skipped: Excalidraw or tldraw (students' own notes cover sketching), Graphviz or D2 (Mermaid is enough). Already in place or planned elsewhere: JSXGraph, KaTeX, Pyodide and Skulpt, p5, microStudio, Numbas, Teachable Machine, Wokwi (Arduino), WebVM (command line).

## Curriculum pointers for every subject (19 Oct 2026)
Matthew reversed "History first, others after review": review happens through the tutorials teachers make, so the pages come first, as drafts. Built:
- `tools/import-curriculum.mjs` takes every Years 7–10 learning area in Kit (`SUBJECTS`): english, maths, science, history, geography, civics, economics, hpe, arts, languages, design (AC9TDE), systems (AC9TDI K, unchanged: the map's subject) and digital-processes (AC9TDI P). Strands come from the code where Kit's labels vary (Arts: art form and strand; Languages: second language or background speakers, F–10 or from Year 7). Banded subjects (Arts, HPE, Languages, Technologies; Science H and I) record `years: "7–8"`; `yearText` in `kit-nodes.mjs` shows it on pages and in Create's picker. A re-import keeps a committed title whose capitals were fixed by hand. Maths, Science and Systems were re-imported from Kit 5f973ec (adds hinge reasons, response modes and width; codes and titles unchanged), History is byte-identical.
- `KIT_SUBJECTS` lists all 13 (a `match` regex splits AC9TDI into knowledge and processes); `POINTER_SUBJECTS` is all of them; `data/review/<subject>.yml` for each, all `draft`.
- Size: about 3,000 pointer pages. They now link one shared `teach/curriculum/pointer.css` and `pointer.js` (the site CSS, navbar CSS and JS, stamped with a hash) instead of inlining ~75 KB each: 44 MB, not 259 MB; `dist/` is the same size as before.
- Create: a primer from a node keeps the node's Create subject (Arts and HPE: Other concepts; Design: Engineering; DT processes: Digital technologies) instead of being reset to HASS.
- Make a lesson › lesson 1's Not History? route links every subject's curriculum pages.
- Tests: `pointer-pages-smoke` checks every subject's index, a banded page, the shared style sheet, Make a primer for this in four more subjects and phone width on three more pages.
- Foundation to Year 10 (19 Oct, later, Matthew: "go"): the importer takes every year, Foundation as year 0 (`yearOf` reads `F` where the year goes; this also fixes Foundation English codes such as AC9EFLA07 being read as Year 7), adds `hass` (HASS, Foundation to Year 6), and takes maths strands from the code for every year. `parseNodeRef` accepts Foundation codes (AC9MFN01, AC9LCHF01). Pages say "Foundation", "Year 4" or "Years 1–2" (`yearText`); each subject's index and the /teach/ list give its range. The curriculum maps are unchanged: `curriculumMapHtml` shows Years 7–10 plus only the earlier descriptors they name as prior knowledge. 14 subjects, about 5,700 pointer pages (82 MB); Create's curriculum data 7.7 MB, fetched one subject at a time.

## Changed (19 Oct 2026, diagrams chat): Mermaid diagrams, push 1 (plan: `roadmap/diagrams-plan.md`)

Shared files touched, each change small:
- **New `tools/diagram-core.mjs`.** The field, deck and render sources, the size check, the colour pass and Create's live preview.
- **`lesson-core.mjs`:**
  - `%%` region markers and `.mmd` inline code.
  - `explainDiagram` parsed.
  - Diagram problems added to `validateLessonCore`.
- **`lesson-view.mjs`:** a `diagramHtml` dep, used on steps, task panels and Explain it to me, with `figure.diagram` CSS.
- **`build-site.mjs`:**
  - `diagramPic` / `diagramHtml`, shown on lesson pages and the recap.
  - The `diagram` option passed to the teach generators.
- **`teach.mjs`:**
  - Decks: one diagram slide per diagram, as a ```mermaid block. `measure` counts a block as a 400px picture.
  - Worksheets: the SVG, or its blank copy.
  - Teacher guide: a Diagrams section.
- **`render-pictures.mjs`:**
  - `pictures()` takes `ext: 'svg'`. PNG sections are unchanged, so nothing redraws.
  - New section `diagrams`.
- **`check-decks.mjs`:** draws Mermaid as Prepare does.
- **`validate.mjs`:** size warnings.
- **Create and the validator:** copy `diagram-core.mjs`. Create's previews (`create.js`, `view.js`, `workspace.mjs`) draw diagrams live.
- **`vendor/mermaid` (11.17.2, MIT).**

Publishing needs the full publish (a renderer section and shared tools changed). Only the new diagram SVGs are drawn; existing pictures and clips are reused.

## Proposed (19 Oct 2026, Matthew asked; not approved to build): curriculum maps beyond Years 7–10, and overlap with ACARA Progressions

**Curriculum maps, Foundation to Year 10.** The data now holds every year (`data/curriculum/`, 14 subjects); the maps (`tools/curriculum-map.mjs`) still show Years 7–10 plus a "Before Year 7" column, and exist only for Maths, Science and Digital systems (subjects with lessons and `map: true`).
1. A year-range switch on each map (Years 7–10 by default; F–6 and F–10 on request), not one 11-column grid: eleven columns don't fit a laptop, and F–6 crowds out the years the site teaches. Two-year bands span their columns, as science's Human endeavour and Inquiry already do.
2. Maps for subjects without a subject folder or lessons (English, HASS and the rest) live with the teacher pointer pages (`/teach/curriculum/<subject>/map/`), not the student navbar: a map with no lessons is a curriculum view, which is what the pointer index already is in list form. Its dots link to pointer pages; it fills in as lessons are tagged.
3. Order: (a) the switch on the three existing maps; (b) teacher-side maps for the other subjects, generated from the same code; (c) "builds on" lines across F–6 (Kit's prior knowledge already names them).
Size is small (one page per subject). Open question: is a map useful for subjects whose standards are mostly skills that recur every year (English, the Arts)?

**Overlap with ACARA Progressions** (acara.learningwaypoints.com, where Kit's node files are authored and browsed). The site now holds three copies of the same nodes, two hops from the source: Progressions → Kit → `data/curriculum/` (pointer pages, Create, maps) and `data/progressions/<subject>/*.md` (the node check for maths, science and systems, from `tools/kit-page.mjs`). The pointer pages repeat most of what Progressions shows.
- What only this site adds: lessons tagged with a node, **Make a primer for this**, and review status. Everything else (checkpoint, criteria, width, hinge, response modes, prior knowledge) is Progressions' to show.
- Proposed: (1) thin the pointer pages to what a teacher needs to choose and act (checkpoint, success criteria, lessons here, Make a primer for this, draft label) and link "Full waypoint in ACARA Progressions" for the rest, once its URL pattern per standard and node is confirmed; keep the full data in `data/curriculum/` for Create's pre-fill. (2) Retire `data/progressions/*.md` by pointing the node check (`tools/progressions.mjs`) at `data/curriculum/`, which now carries the same nodes and prior knowledge, so there is one copy and one re-import (`import-curriculum.mjs`) per Kit release (check first that nothing reads the pages' elaborations or planning mode). (3) Optionally, a "Make a primer for this" link on Progressions itself (`/create/?node=`), so teachers browsing there reach Create directly; that change is in the Progressions repo.

## Teachers menu: AI and your tasks (19 Oct 2026)
- `content/teachers/index.md` lists a fourth item, *AI and your tasks* (after Make a lesson); the menu line in CLAUDE.md is updated. The course itself: `roadmap/staff-ai-course-plan.md` › Status. New course in the Teachers menu, so it needs the full publish.

## One copy of the curriculum data (19 Oct 2026, Matthew: "let's fix that")
The site kept Kit's nodes twice: `data/progressions/<subject>/*.md` (97 pages for maths, science and systems, read by the node check and the coach prompt) and `data/curriculum/<subject>.json` (pointer pages, Create, maps). Compared node by node they matched (titles, criteria, hinges, prior knowledge); the only gap was four Digital Technologies process standards, now in `digital-processes.json`. `tools/progressions.mjs` now loads every `data/curriculum/*.json` (same shape as before: code, title, year, prior, nodes; plus each node's checkpoint), `tools/coach.mjs` takes the "I can" line from the node's checkpoint, and `data/progressions/` and `tools/kit-page.mjs` are gone. Checked: the node report (`npm run nodes`) and all 288 coach prompts are byte-identical before and after; `npm run check-nodes` tests the loader on real data. One re-import per Kit release: `node tools/import-curriculum.mjs <kit> <subject>`. Other tools in the suite keep their own copies, as before.

## Teacher guides: the "When students get stuck" table on phones (19 Oct 2026)
CI's Teachers smoke test had failed since 18 Oct 17:57: in Chrome stable (CI), `/teach/teachers/make-a-lesson/misconception/` scrolled 9px sideways at 390px because the three-column stuck table (`table.stuck`, `tools/teach.mjs`) could not shrink further; local Chromium's narrower fonts hid it. Shared change: under 560px the table stacks, one card per row, each cell labelled (What you will see / A question to ask / The fix, from `data-label`), with `overflow-wrap:anywhere`. Applies to every teacher guide. The smoke test now also checks 320px, waits for conditions instead of fixed pauses (`WP_SLOW=4` throttles the CPU to try it), reads the Teachers menu from `content/teachers/index.md`, and on CI writes a failure as an annotation, which the API can read when the log host can't be reached.

## Decided (25 Oct 2026, Matthew): navigation and ways in, teacher-first, with search

Replaces the 22 Oct "make the site easier to enter" proposal. **Built 25 Oct 2026 (pushed; published 26 Oct in the site build from d47854a, so the "not yet published" note is history): needed the full or quick publish, not publish-navigation alone, because it adds /about/, search-index.json and changes the home, subject and course pages.** Subject order is set by `order:` in each subject's index.md; subject pages and the Teachers page carry the search box; standards (maths, science, Digital Technologies) are searchable.

Not done, for Matthew's say (25 Oct 2026): (1) a Code curriculum map: the general coverage is built (roadmap/code.md › general coverage, `data/curriculum/code-coverage.yml`), but a map needs lesson-level dots, so it waits; (2) how long a course takes (no data yet; the strip shows lesson count); (3) "Copy link for students" on lesson pages (course pages only for now); (4) maths and science subject pages only gained the search box and the map link: they do not yet lead with a "by topic or year" layout, as the decision said; (5) the home page uses its own opening sentence, not the two-sentence overview line shared with the main site (unpack the curriculum, plan units, teach from a curated library of lessons or make your own); (6) a student-facing way in beyond one line ("Learning on your own?") and checking that every subject's course pages make sense to a student arriving cold; (7) years on course strips and in search come from the tagged standards, or from a year in the course title ("Year 8 Chemistry"), so a course's years follow its lessons as they are added (Algebra now reads Years 7–9 after the Year 9 batch); (8) watch a few teachers use it before changing the groupings (the main site's roadmap item E1). Easy to change later: menus, wording and grouping are reversible.

**Who uses the navigation.** Teachers browse the site, choose lessons and give students a link. Students mostly arrive on a course or lesson page from that link, not the home page. Independent self-paced use is still welcome, just not the front door.

**How teachers look for a lesson** varies by teacher and subject: Digital Technologies teachers (Code, How computers work, Engineering) mostly browse pathways; science and maths teachers look by topic, year level or a curriculum code.

- **Home page.** Speaks to teachers first ("find a lesson for your class"), with search at the top, then the subjects. A small "Learning on your own? Start here" route for students. The About and approach text moves off the front (its own page, or below).
- **Search** is part of this, not later. Topic, year level and curriculum code, across every subject. Built at publish time into a small index the browser searches: no server, no tracking.
- **Subject pages** lead with how their teachers look: pathways and trails for Digital Technologies; topic and year, with the curriculum map close by, for maths and science.
- **Course pages** show a teacher what they need to choose before opening a lesson (who it's for, years, roughly how long, what students need first) and have a "Copy link for students" button (a link only, no QR code). They make sense to a student arriving cold.
- **Navbar.** Fewer items: Subjects, Teachers, About, plus the Learning Waypoints link. Maps stay with their subjects. Teacher material (guides, Create, Make a lesson, Choosing AI tools, maths teachers, Prepare) gathers under Teachers. Lesson-page chips (Playground, Reference, My progress) unchanged.
- **Keep.** Course and lesson URLs (teachers share them, and progress is keyed by lesson slug), trail maps, curriculum maps.
- **Decide while building.** How subjects are grouped in the menu (core and beyond, or one list); what each search result shows (start with course name, subject and years).

The main site's pattern is the reference: waypoints-framework (private) `hypotheses/product-strategy/04`–`06`, and edu-matthew-pham/learningwaypoints `assets/site.js` and `site.css`. Here the navbar is `siteNav` in `tools/lesson-view.mjs` and `navFor` in `tools/build-site.mjs`.

Quick fixes done 22 Oct: home page About lists all six subjects; "Why we made this" gains the browser paragraph; the request line says lessons are checked before they're added and refined as they're used; Engineering and Digital systems get a line under How the lessons work.

## Proposed (22 Oct 2026, Matthew agreed; not scheduled): make a tutorial from the Kit

Add a `format-tutorial.md` to waypoints-kit, alongside its `format-prepare.md` (slides) and `format-print.md` (worksheets). A teacher's own AI, having read the Kit and the standard's node file, writes a lesson in the format Create reads; the teacher pastes it into Create to preview, edit and request publishing.

- Build on what exists: the teacher lesson prompt (Project doc `claude/teacher-lesson-prompt.md`) and Create's lesson format (AUTHORING.md). The Kit file should mostly point at these rather than restate them, so there is one lesson format.
- Anchor the lesson to the node file's waypoints (Create's optional Kit-node anchor, roadmap › Generic Create).
- Keep it secondary in the Kit: the Kit now leads with planning (README, 22 Oct), then resources; a tutorial format sits with the resource formats, not above them. Add a starter prompt to the Kit README and a tile to the main site's Ask your AI page (Lessons group) when built.

**Done (25 Oct 2026, maths chat; Matthew asked): `paper: true` on the `reasoning` check, for every subject.** Working done by hand, not typed: the working box becomes one line ("Work it out on paper first…" in maths, "Write it in your book or on paper first…" elsewhere), the answer and picks are marked as before, then the model solution shows with "Put your page beside this and compare, step by step" and a self-check about the page. Not Mathspace-style step marking: the page checks the answer, the student's page holds the working. Changes: `lesson-view.mjs` (render and handler; the handler works with no textarea), `lesson-core.mjs` (paper must be true; no placeholder), AUTHORING › reasoning. Used first in the maths pilots (Finding a side: try one after the worked example, the screen, the ladder; Pythagoras: the shortcut). Ideas for other subjects: trace tables by hand (code), force or particle diagrams (science), binary conversions and the tiny processor (Digital systems), written responses in the AI courses (unmarked, with `models:`).

- **Built (25 Oct, code chat): project briefs for Console and p5.js.** `LANG_OF` has `p5: 'javascript'`; a brief may list `answers:` (typed at each `input()`), and `render-pictures` draws a Console example (no `turtle` in it) as its transcript through the turtle playground in console mode, and a p5 example with `p5Draw` (moved above the projects section). Existing project pictures are untouched (the section's hash base is unchanged). Needs a whole-site publish to go live.

## Create from a finished project (25 Oct 2026; first version built the same day, Matthew: "go")

Teachers often work out a tutorial backwards: build an example project, then decide what is worth teaching from it. Create has no route for that today (its starts are a prompt that asks what to teach, opening existing lesson files, or an example lesson), so a pasted project gets no guidance and tends to become a tour of the code.

Not all projects are alike. Some are hobby projects with many ideas at once; others were made for students and already fit a level. The route should ask which it is, because that changes how hard it cuts.

**First version (small): a prompt template.** Create's prompt start is already a template the teacher copies into their own AI chat, so this is a second template (beside `create/start-prompt.md`) that runs the steps below, plus a published `concepts.json` (each idea and the lesson that `introduces:` it, by pathway), linked from the prompt like `board-catalogue.json`, so the AI can say which ideas are taught already and where. No new Create screens beyond a start card.

**Built (first version):** a fourth start card, **Start from a project** (`create/index.html`, `create/entry.mjs`), copies `create/project-prompt.md` followed by `start-prompt.md` (the project prompt says to start from the project instead of asking what to teach). `tools/project-ideas.mjs` writes `/code/create/project-ideas.json` at build (`build-create.mjs`): every idea in `CONCEPTS` (Python, HTML, JavaScript, MakeCode) with the first lesson in each Code pathway that introduces it, through `sameIdea`, plus the pathways' courses and `after:`. The start cards are now two by two. `experiments/entry-smoke.mjs` checks the card, the joined prompt and the ideas file. Not yet tried with a real teacher project.

**Later, only if worth it:** run the scan in the page (`concepts-core.mjs`) so a teacher sees taught and new before any chat.

**Proposed route, "Start from a project" (the template's steps):**
1. Paste or upload the finished code; say whether it was made for students or is a personal project.
2. Scan it with `concepts-core.mjs` (already in the browser for Open projects): list the ideas it uses, split into "taught already" (with the lesson that `introduces:` it, from the pathway tags) and "new". Show "Do first" courses for anything taught elsewhere.
3. The teacher picks the one or two new ideas worth teaching; the rest become starter code or labelled "copy for now" recipes.
4. Cut the project into milestones, each a smaller working version teaching one new idea; the whole project becomes the final Make or challenge. A project made for students may need little cutting; a hobby project usually needs a simpler version first.
5. Hand a tailored prompt to the AI step with the existing design questions (one idea, misconception, opening, checks, video), and optionally write a `projects.yml` brief from the same milestones.

**Limits:** the scan reads Python, HTML/CSS and MakeCode only (Arduino C++, plain JavaScript and p5.js would get the planning help but no scan). Hobby projects are often beyond the class: the scan shows the gap; the starter has to hide the rest.

Shared files the first version would touch: a new prompt beside `create/start-prompt.md`, a start card in `create/index.html` and `create/entry.mjs`, and a build step writing `concepts.json` from lessons' `introduces:`. Code notes point here (roadmap/code.md › Proposed).

- **Code proposes (25 Oct): a SQL playground** for a proposed SQL and databases course (roadmap/code.md › Proposed). A query box, a results table, a starter database per lesson (a `.sql` or `.csv` file beside the lesson), Reset, and reports of the query on the playground channel so `code` checks (`contains`) and a new result check (rows match) can tick. Engines (25 Oct, Matthew: both): sql.js (about 1 MB, a new vendored library) for the SQL-only lessons, so they load fast without Python, and SQLite inside the Pyodide we already vendor for SQL from Python, Flask and Gradio (`sqlite3` works there, checked 25 Oct). Both are SQLite, so the same SQL and the same starter database file work in each. **Built 25 Oct (Matthew: "let's start"), sql.js half only:** `playground-sql/` (query box, Run or Ctrl+Enter, results table, a "Tables in this database" list, Reset, per-step storage `wp-sql-playground:<id>`, friendly hints for the common slips, `?db=<name>` loads `data/sql/<name>.sql`, `?zoom=`), `vendor/sql/` (sql.js 1.15.1, MIT, with its licence), `buildSqlPlayground`, registry kind `sql`, lesson `language: sql`, steps take `try: { playground: sql, db: music }`. Code checks for SQL (`SQL_RULES`): `contains` (case and spacing ignored, comments ignored), `rows` (count), `columns` (names in order), `result` (the exact table, text with ` | `). `evalRules` got a fourth argument, the playground's `output` (the lesson page passes `m.output`); `tools/lesson.mjs` installs `setSqlRunner` (sql.js in Node) so `validate` runs each teacher solution against its database. Not yet done: the Pyodide `sqlite3` half (Python/Flask/Gradio lessons), clips for SQL lessons (no explain clip support), SQL highlighting in Reference. Needs the full publish (new playground).

## Built (25 Oct 2026, maths chat): `tiles` two brackets take a number in front of x (Year 10 batch 1)
`playground-board/widgets/tiles.js`, `mode: binomial` only: `slider a:` / `slider b:` (or fixed `a: 2`), whole numbers 1 to 4, default 1, give (ax + p)(bx + q) as a rectangle with a·b x² tiles, b·p + a·q x-tiles and p·q ones. `target:` takes three numbers (A, B, C for Ax² + Bx + C) as well as two (B, C; A = 1). New values for checks: `a`, `b`, `n` (x² tiles), `A`; `r` now needs a·b = A too. With `a` and `b` unset every Year 9 board draws and reports exactly as before. Used by Special products and Factorising when x² has a number (`content/maths/algebra/`). Needs the full publish; the two lessons re-record their own clips only.

## Changed (25 Oct 2026, systems chat): project briefs for subjects without code

New `tools/briefs.mjs` and `tools/briefs-view.mjs`; small hooks in `tools/build-site.mjs` (`BRIEFS`, `writeBriefs`, a chip and a teacher guide section, beside the open projects ones) and `tools/validate.mjs` (a briefs check). Any subject can add `content/<course>/briefs.yml` (AUTHORING › Project briefs); criteria come from the nodes in `data/curriculum/<subject>.json`. Used so far by How computers work.

## Built (25 Oct 2026, maths chat): `netgraph` board widget and the Year 10 Networks unit (batch 5)
New `playground-board/widgets/netgraph.js` plus one script line in `playground-board/index.html`. An undirected network (`node A: x, y`, `edges: A-B, B-C`, `words: junction, street`) the student drives a route along by clicking junctions (or the keyboard Move buttons). Settings: `start:`, `path:` (preset route), `closed:` (preset closed streets), `change: on` (lets the student close streets), `show:` (`degrees, used, odd, connected, mark`). Values for checks: `e` streets driven, `n` open streets, `o` odd junctions, `c` connected (1/0), `d` every open street driven once, `t` that route is a circuit, `x` closed streets, `k` junctions. Used by `content/maths/angles/every-street-once/` only; two more lessons in the new `networks` unit (`nodes-and-edges`, `eulers-rule`) use Mermaid pictures. Needs the full publish (new widget), not publish-lessons alone. Tested in a scratch page outside an iframe; the scope-vars posting and the explain clip are not yet tested in the built site.

## Built (25 Oct 2026, maths chat): two more board modes for Year 10 batch 2
- `playground-board/widgets/tiles.js`, new `mode: square` (completing the square): `slider h` (half of b, -6 to 6) and `slider c` (-12 to 30), `corner: off`, `result: off`. Posts `h, b (2h), c, s (h²), k (c − h²), u (−h), v (k), as the turning point (u, v)`. Only even b is drawn; odd b is paper-only. Existing modes unchanged. Check examples: `h = 3 and c = 5`, `u = -2 and v = 1`.
- `playground-board/widgets/graph.js`, new `circle: h, k, r` (numbers or slider letters): draws the circle, keeps x and y at the same scale so it looks round (boards without `circle:` are unchanged), and lists `(x − h)² + (y − k)² = r²` under the graph. Slider letters h, k, r are check values.
- Both need the full publish (lessons using them: Completing the square; Circles as relations). Browser-checked 25 Oct: h = 3, k = -1, r = 4 gives `(x − 3)² + (y + 1)² = 16`; the square board reads `x² + 12x + 14 = (x + 6)² − 22` at h = 6, c = 14.

## Built (25 Oct 2026, maths chat): three board changes for Year 10 batch 3
- `playground-board/widgets/trig.js`: `view: elevation` (`h` height up to 200, `t` angle 5–85, `look: down|up`, `show` defaults `tan`; check vars t, h, d, l, o, a, s, c, n, w; t = 8, h = 6 gives d = 42.69) and `view: bearing` (`t` bearing 0–360 clockwise from north, `h` distance up to 5000, `show: north, east`; vars t, h, n, e; t = 40, h = 600 gives n = 459.63, e = 385.67). Default trig view unchanged.
- `playground-board/widgets/space3d.js`: `diagonal: on` forces `box: on`, draws the floor diagonal and the space diagonal and shades the standing triangle; optional `scale:` and `units:` change only the diagonal readout; extra vars f (floor diagonal) and g (space diagonal). Boards without `diagonal` unchanged.
- `playground-board/widgets/formula.js`: `accuracy: 0.1` reads each slider as ± half that step, shows the range beside each value and "Lowest/Highest it could be" under the working (exact for products and sums only); `result: off` hides it; check vars `res_lo`, `res_hi`, `res_out`. Boards without `accuracy:` unchanged.
- All three need the full publish. Lessons: Looking up, looking down; Bearings; The triangle inside; One error, one result; Errors that build up. Pages and boards load in headless Chromium with no page errors; the `when:` checks and explain clips are not yet run.

## Built (25 Oct 2026, maths chat): four board changes for Year 10 batch 4
- `playground-board/widgets/venn.js`: `given: a | b | not a | not b` fades regions outside the given group; readout "of the g in the group, h are chosen"; check vars `g`, `h`, `c` (h ÷ g, 3 places; 0 when g = 0); an empty group says "not defined"; not with `blank:`. `n`, `t`, `p` unchanged, so `c = p` tests independence.
- `playground-board/widgets/events.js`: `weights: 18, 2; 49, 931` (whole-number counts, one row per first outcome, `;` between rows): tree branches show chances (second stage conditional), outcomes show counts, P(A) adds chosen counts, trials pick in proportion; `n` chosen counts added, `m` total; a zero count drops that outcome.
- `playground-board/widgets/data.js`: `view: box` (one boxplot per set, first at the bottom, `second:` above), `dots: on`, `outliers: on` (beyond 1.5 × IQR; whiskers stop at the last value inside). Quartiles are medians of each half (median left out when the count is odd). Check names need an underscore: set A `q_lo, q_hi, q_iqr, w_lo, w_hi, q_out`, set B `Q_LO, Q_HI, Q_IQR, W_LO, W_HI, Q_OUT`; `l d h` etc. unchanged. Edit through the Values box only.
- `playground-board/widgets/graph.js`: `series Name: x,y; ..., dots` draws points with no line (not with named-point series or a cursor); axes sit on the lower and left edges when the range starts above 0.
- All four need the full publish. Lessons: `content/maths/data/` units `conditional10`, `claims10`, `boxplots10`, `scatter10`, `twoway10`. Pages load in headless Chromium without errors; `when:` checks not yet run.

## Proposed (25 Oct 2026): leave `teacher.yml` out of the clip hash (later)
Nothing in `tools/render.mjs` reads `lesson.teacher`, so `teacher.yml` (notes, `struggle:`, `running:`, `explain`, exit ticket) can't change a clip, yet `stepHash` hashes every file in the lesson folder except `lesson.md`, so any teacher-file edit re-records that lesson's clips. Fix: skip `teacher.yml` in the loop at `stepHash` (the cache section of `render.mjs`, so the edit itself is not in the hash). Cost: every lesson with a `teacher.yml` gets a new hash once, so the next full publish re-records about 270 clips (longer for voiced ones). After that, teacher-file edits re-record nothing. Decision (Matthew): flag for later, leave as is for now; batch teacher-file edits into one publish per course until then. Check this file and `git log` before changing it (shared tool).
## Changed (25 Oct 2026, science chat): the curriculum import reads Kit's progression maps
- Kit now carries Progressions' map for each learning area (`data/<folder>/<folder>_progression_map.json`; which descriptor leads to which). `tools/import-curriculum.mjs` builds each descriptor's `prior` from the codes its prior knowledge text names plus its map parents from earlier years. Foundation codes (AC9SFU01, AC9MFN04) now count in the text too: the code pattern missed them before.
- Kit's Year 7 science Understanding sentences (7U01–U06) now name what they build on, so the science map and pointer pages show Year 7 linking back to primary.
- Every subject re-imported (Kit 6bb92e4): links went up in maths (287 → 339), English (234 → 300), science (120 → 153), HASS, HPE, Arts, Design, Systems and Economics; none were lost and no descriptors were added. `npm run check-nodes` and `validate` are unchanged.
- **Held back:** the maps also link descriptors within the same year (about 50, mostly maths and English). Taking them makes the node check ask for earlier lessons in four maths lessons (classifying-triangles, gradient, growing-patterns, rates) and one systems lesson (run-length). Maths and systems chats: decide whether those links belong (add `assumes:` or a lesson), then drop the earlier-years-only filter (`mapPrior`). The maths map also puts AC9M3A02 above AC9M2A03, which stays skipped.
- Fixed the same day (Kit c921661): AC9S6U03's prior knowledge text named AC9S8U05, a Year 8 descriptor; it now names heat, sound and light (3U03, 2U02, 5U03).

## Proposed (25 Oct 2026, review chat; Matthew agreed 1, 2 and 3; step 1 built 25 Oct, 2 built for ICT 26 Oct, 3 built 26 Oct): make lessons adaptable, not "the one way"
Why: teachers building their own resources is a good thing, and the site should not read as the only way to teach. Reinventing the machinery (boards, playgrounds, marking, clips) is waste; choosing the example, the order and the framing is the teacher's craft. Keep the machinery shared and make the default easy to bend. Guides keep the register "a side tool, use one lesson, change what suits your class".
Already modular: widgets and playgrounds are shared; lesson, class plan, `teacher.yml` and primers are separate files; course order is data (`after:`, units).
1. **Make your own version (first, smallest). BUILT 25 Oct 2026 (needs a full publish).** A button on each lesson ("Make your own version") that opens its source in Create as a draft the teacher can edit, keeping boards and marking. Today Create cannot open an existing live lesson (only Python modules offer "Open a copy to edit"). Check first: how Create loads a package (`create/lesson-package.mjs`, `draft-store.mjs`), that a lesson's folder (regions, code files, `teacher.yml`) can be exported from the built site or `main`, and licence and credit wording. This also tests whether teachers adapt at all.
2. **Swappable context. BUILT for ICT `sheet` 26 Oct 2026 (lesson 9 only; see 'Step 2 built' below).** A `context:` or `data:` block per lesson (a sheet's dataset, a case's names, the club app) so a teacher can put in their school's version without rewriting steps. The check must follow the change: stored answers and `solutions` have to be recomputed or the lesson will mark its own author wrong. Do one subject at a time, starting with ICT `sheet` (data is already a board setup) and the maths boards.
3. **My path. BUILT 26 Oct 2026 (needs a full publish; see 'Step 3 built' below).** A shareable sequence of chosen lessons or steps in the teacher's order, with their own note, as a link (no accounts; stored in the link or a draft like Create's shared draft links). Suits "use a bit, not all of it".
Not proposed: lifting single steps between lessons (4); do it only if someone asks. Build order: 1, then 3, then 2.

## Fixed (25 Oct 2026, maths chat): reasoning answer row overflowed on phones
`tools/lesson-view.mjs` `.ansrow` now wraps and its input has `max-width:100%`: on a 390px screen the "Answer" label plus the 14em box ran 13–20px past the edge in every `reasoning` check. Lesson pages carry the CSS inline, so this reaches live pages only on the full publish.

### Step 1 built (25 Oct 2026): Make your own version
Route chosen: the build writes `<lesson>/source.json` (`tools/lesson-source.mjs`: `{ title, slug, files }`, text files of the folder up to 200 KB each and 1 MB in all) beside every lesson page; the lesson page footer has a `wpt-mine` card with the button, linking to `code/create/?open=<slug>`; Create (`create/create.js`) fetches `../../<slug>/source.json` (slug pattern checked), sets the title to "<title> (my version)" and `author` to "Adapted from <title> (Learning Waypoints)", adds it as a new lesson with `workspace.addFiles` (replaces an untouched starter, else joins the course) and says it is saved in this browser and the original is unchanged. Nothing is sent anywhere; the copy is an ordinary Create draft.
- Why not main or GitHub: no network step, same origin, works offline from the built site, and it only needs what the build already knows.
- `teacher.yml` and the class plan (`content/<course>/class/<lesson>.yml`, outside the folder) are folded into a ```teacher block with `class:` at the end of lesson.md, the single-file form Create already reads. Data files outside the folder (`try.files: ../sets/music.csv`) are copied beside lesson.md and the paths rewritten. Boards, playgrounds and marking come along because they are lesson.md config; code regions and files come along as files.
- Checked: all 781 lessons export; 775 pass Create's format check as exported. The 6 that do not use shared Python modules (`ui`, `shapes`), which Create supplies in the browser. Drafts open in Create via headless Chromium (`node experiments/make-own-smoke.mjs`; authoring-smoke, teacher-course-smoke and entry-smoke still pass); `check-blockers` clean on a lesson page and Create. 13 MB of `source.json` in `dist/`.
- Not copied: recorded clips and pictures (the copy has none until recorded in Create), media files and binaries. Clip fingerprints strip teacher blocks, so the folded notes do not matter to recordings.
- Credit and licence: the repo has no LICENSE file, so the wording is a courtesy line (author field and the status message "If you share it, say where it came from"), not a licence claim. Matthew to decide whether to add a licence for lesson content.
- Takes effect only after a full publish (page footers, `source.json` and Create's new code all live under `dist/`); `publish-lessons` would update lesson folders but not Create, so use the full publish or `publish-create` plus publish-lessons.
- Next in the plan: step 3 (My path), then 2 (swappable context).

### Added (26 Oct 2026, maths chat): `npm run check-lesson-boards`
`tools/check-lesson-boards.mjs [slug-prefix…]` (after a build) loads every maths board step's starter into the real board and reports: boards that cannot start, `when:` variables the board never reports, and `when:` conditions already true at the start (a check that ticks with no action). First run over 505 boards: 21 flagged; the Year 10 ones are fixed. Still flagged (other chats' lessons, not edited): algebra/finding-unknowns, angles/nets, data/and-or-not, data/investigations, linear-relations/{gradient-two-points,intercept,vary-formulas}, measurement/{circle-problems,find-a-side-trig,find-an-angle (board error: t range 5–85),real-measurements}, number/{estimating,money-models,percentage-change}, real-numbers/{index-laws-letters,negative-powers}. Some may be false positives (`~smaller` boards share a step).

### Step 2 built for ICT (26 Oct 2026): swappable context
Design: one ```context block in lesson.md (`data:` named numbers, lists and words; `assert:` claims the text makes) and `{{ expression }}` wherever a number from the data appears (`tools/context-core.mjs`: names, `x[2]`, arithmetic, sum/avg/max/min/count/above/countif/round/abs). Expansion happens before parsing, in `parseLessonText` (lesson.md, including frontmatter and the teacher block), `snippetFrom` (sheet.yml and other files; reads the block as the file `context.yml`) and `loadLesson` (teacher.yml, class plan). It is plain text substitution, so stored answers (`when:`, `answer:`, `actual:`) are recomputed from the same data and cannot go stale. Create works unchanged: the copy carries the block (and `lesson-source.mjs` folds the notes from the raw files so their `{{ }}` survive); editing the block in Create changes the preview's text, starter and checks at once (tested in headless Chromium: sun heights changed, board check became `c_D8 = 21`, validation passed).
- Built for `ict/data/report-on-an-investigation` only (the 15-number dataset a teacher most wants to replace). Its sheet.yml has `summarise-solution` and `chart-solution` regions; `npm run check-context` (`tools/check-context.mjs`) runs each board check against that solution in Node with the real data and with a changed one (scaled and shifted), and fails on a typed number (shown by temporarily hard-coding `c_B8 = 4.6`: caught on the swapped data only, as it should be). Validate fails when an `assert` is false (set the sun heights to 1: "the lesson text says it is true").
- Not done: lessons 1 to 8 (their small datasets sit in many `number` and `question` answers; same method, one lesson at a time), words that name things (group names, "beans" stay plain text, `assert` guards the ordering the text claims), changing the shape of the data (more or fewer plants: the formulas' ranges `B2:B6` and the table are written for five rows; a `rows` count would need `{{ }}` in ranges, which works but is untested).
- Learned: do not add a second parser for answers; substituting before parsing is simpler than "recompute at validate" and covers prose too. Rounding noise is trimmed to 12 significant digits (`avg` of 23/5 prints 4.6). The solution-region convention is what makes the check honest; without it a swapped lesson could pass validate while marking its author wrong.
- Maths boards next: the data there is mostly in the board `starter` (a graph's points, a table) and in `answer:` numbers computed from it. The same block works for the numbers, but checks that read a widget's values (`when: "m = 2"` on `forces`, `graph`) need a solution state per board (a saved board state or a `-solution` region the checker can load in the real board, as `check-lesson-boards.mjs` loads starters in Chromium) because there is no small Node engine for them. Start with one `number` course where answers are plain arithmetic on the context (`answer: {{a * b}}`), which needs no solution state, and use `practice:` templates as the model for generated answers.
- Needs a full publish (Create gained context-core; ICT lesson 9's page, guide and class plan changed). `publish-lessons` alone would update the lesson but not Create.

### Step 3 built (26 Oct 2026, scheduled run while Matthew slept): My path
Reading taken: lessons only (not single steps), one ordered list, a title and one note for the whole path. Step 1 was already on main, so My path is independent of it.
- Storage: the link's `#` part, `/my-path/#t=<title>&n=<note>&l=<slug>,<slug>`. Never sent to a server, works offline on static Pages, no draft store or accounts needed. Drawback: a link cannot be edited later (edit, then share the new link); about 40 characters per lesson, so 10 lessons is about 500 characters, and the page warns above 1,800. A draft-style short id was rejected because it needs somewhere to store it.
- `/my-path/` is a plain page (`content/my-path.md` + `site/my-path.js`). With no `l=` it is the editor (draft in localStorage `wp-mypath`): name, note, lessons with Up/Down/Remove, a search box to add, the link with Copy, Start again. With `l=` it is the student view: title, note, the lessons in order as ordinary links (titles from `search-index.json`, so slugs are shown if it fails to load), and "Make my own copy of this path". Slugs are checked against a strict pattern, so a crafted link cannot inject anything (text is set with textContent).
- Adding: search results for lessons gain an "Add to my path" button (`site/search.js`, which loads `my-path.js` on first press; `window.wpPathAdd`), and each lesson page's footer card links to `my-path/?add=<slug>` (the page adds it and cleans the address). Listed in the Teachers menu (Make your own) and in search. Class names are `wpt-path-*`; `check-blockers` clean.
- Lesson URLs and progress are untouched: students open the normal lesson addresses.
- Test: `node experiments/my-path-smoke.mjs` (search add, lesson-page add, reorder, link, student view, bad slugs). validate, check-blockers, authoring, teacher-course and make-own smoke tests pass.
- Needs a full publish (lesson footers, search.js, new page, Teachers menu). Not done: single steps (could be `slug#step-3`), a note per lesson, progress ticks on the student view (the `wp-progress` shape would be read from `progress-manifest.json`), a QR code (none by decision).
- Update 26 Oct (later): lessons 1 to 6 of ict/data converted by six parallel agents (one worktree each, merged), so 7 of 9 lessons now carry a context block; `check-context` runs 48 board checks. Lessons 7 (sort) and 8 (chart) still need `check-context` to apply sort and filter state before they can be converted. Lists swap by scale and shift, so single values that must move with the data (a cut-off, a corrected reading) are one-item lists (`cut: [10]`); COUNTIF rules must stay literal, so counts use `above(list, n)`.

### Cost of swappable context (26 Oct 2026, Matthew's note: it sounded easier than it is)
The mechanism was cheap (one run). The per-lesson work is not: every number the data produces sits in the text, questions, hints, stored answers, class plan and teacher notes (13 to 20 places per ICT sheet lesson), each board step needs a `-solution` the checker can run, and each lesson needs `assert:` rules for claims the data must keep making. Only values swap safely; row counts, group names and the data's shape do not. Rule of thumb: a quarter to half a day per lesson, so convert only lessons teachers want to re-data, not whole subjects. Everything else relies on "Make your own version" (edit freely, no guarantee the stored answers still fit). New lessons are cheapest written this way from the start (context block, `{{ }}`, `-solution`); proposed, not built: a validate warning when a board check has no `-solution` region, and a line in the lesson-writing prompts. Maths and science boards also need a loadable solution state per widget (no Node engine), so they are the expensive case.

### Small shared fixes from ICT › Investigating and judging information (26 Oct 2026)
- `tools/lesson-view.mjs`: parsons pieces in `data-subj=science` lessons wrap (`white-space:pre-wrap`; `.pcol` and `.piece` get `min-width:0`), so steps written as prose no longer push a page sideways at 390 px. Code lessons keep `pre` (indentation matters there).
- `playground-board/widgets/sheet.js`: sheet fields fit a narrow board (inline `max-width:100%`, `min-width:0`, `box-sizing` on the field and its text box), fixing an 8 px sideways scroll in the chart settings (also on Working with data › Choose a chart). Inline rather than in `playground-board/style.css`, because that file is in every board clip's hash and would re-record them all.
- `playground-board/widgets/sheet.js`: opt-in `tools: chart axis` ("Vertical axis starts at", `chart ymin:`, `ch_ymin`, `ch_zero`); default charts unchanged. Tested in `tools/check-sheet.mjs`.

## Built (26 Oct 2026, orchestrating chat): Make a lesson › Other ways to start
Optional lesson 8 in the Make one unit (`content/teachers/make-a-lesson/other-ways/`): which start fits (Make your own version, Start from a project, My path, a waypoint). Lesson text only, no clips; goes live with publish-lessons or the next full publish.

## Built (26 Oct 2026, code chat; Matthew approved): how coding ideas build
Details in `roadmap/code.md` › How coding ideas build. Shared changes: `CORE_IDEAS` in `tools/concepts-core.mjs` reordered by band with three new ideas (`sequence`, `input`, `compare`; `html: { 'input-value': 'input' }` in `SAME_IDEA`); new `tools/ideas-map.mjs` (pure data and helpers); `tools/ideas-page.mjs` draws the map and table; `tools/build-site.mjs` writes the page and adds idea chips to Code lesson guides; `tools/check-concepts` checks the map's data. Search picks up the new labels. Whole-site publish.


## Built (30 Oct 2026, shared inquiry chat): Humanities skills (hass)
`content/hass/` (Preview): course `inquiry-7` (9 lessons across Asking, Finding and Sharing) and `before-year-7` (Year 6 catch-ups). `tools/progressions.mjs` `CHECKED` now includes `hass`.
- **Built later the same day (30 Oct 2026):**
  - Four printable **Inquiry skeletons** (`content/hass/inquiry-7/skeletons.yml`, `kind: skeleton` with `stages:` and optional `student_nodes:` cap for the two-page student sheet while keeping the full `nodes:` list in `/teach/hass/inquiry-7/#briefs`).
  - Cross-subject node lookup (`subjectOfCode`, `briefNodes(b, loadCurriculum)`) and `kind: skeleton` validation in `tools/briefs.mjs` and `tools/validate.mjs`; skeleton list and stage sheet view (`.wpt-skel-*`, printable blank lines, no write boxes) in `tools/briefs-view.mjs` and `tools/build-site.mjs`.
  - **"Coming later" planned lessons in a built course:** a unit in `content/<course>/index.md` can list `planned: [{ title, summary }]` (rendered as `.wpt-crow-soon` rows without `data-keys` so `site/progress.js` ignores them, with `, N coming later` in the course's teacher strip and listed in `/teach/<course>/`). Used first in `content/hass/before-year-7/index.md` for *Spending choices* and *Three levels of government*.
  - Needs a whole-site or quick publish.

## Done: grouped Subjects menu (30 Oct 2026, Matthew)
- The Subjects dropdown had grown to 14 subjects and about 69 links. Each subject's `index.md` now has `group:` (Core: Maths, Science, English, Learning skills; Technologies: Code, How computers work, Engineering, Learning with AI, ICT skills; Humanities: Economics, History, Humanities skills, Civics, Geography). Groups show in the order they first appear (by `order:`); a subject with no `group:` falls under "More". New subjects need a `group:`.
- The grouped menu lists subject names only (30 Oct, Matthew): a ▸ expander for pathways was built and then dropped, since each subject page already opens on its pathways and the menu stays simpler without it.
- Found while testing: `content/geography/index.md` never closed its frontmatter (no closing `---`), so the site ignored its title, summary and pathways. Closed.
- Lesson learned the same day: the navigation publish swapped only the navbar's HTML, while its CSS and script are copied into every page, so the live menu showed unstyled ▸ buttons and every pathway. `NAV_CSS` and `NAV_JS` now carry markers (`/*wp-nav-css*/ … /*wp-nav-css-end*/`, `/*wp-nav-js*/ … /*wp-nav-js-end*/`) and `publish-navigation.yml` swaps them too, in pages and in the pointer pages' shared files. Pages built before the markers need one whole-site (or quick) publish first; after that, navigation publishes cover CSS and script changes.
- Subject order (30 Oct 2026, Matthew): `order:` in each subject's `index.md` now follows the Australian Curriculum's learning-area order, which sets the Subjects menu (within each group; groups appear in order of their first subject) and the home page: English 1, Maths 2, Science 3, Learning skills 4, Humanities skills 5, History 6, Geography 7, Civics 8, Economics 9, How computers work 10, Code 11, Engineering 12, ICT skills 13, Learning with AI 14. Give a new subject a number that places it in its group. The home page changes, so this needs a quick or whole-site publish (the navigation publish swaps only the navbar).
- Home page subjects (30 Oct 2026, Matthew): grouped like the Subjects menu (Core, Humanities, Technologies) as compact cards (a line icon from `tools/subject-icons.mjs`, the name, a tag of about five words), about 1,300 px instead of 3,300; a new subject needs an icon there too. Each subject's `index.md` carries `group:`, a short `blurb:` (the card tag; the long `summary:` stays on the subject's own page) and, for pilots, `preview: true` (a small Preview tag; set on History, Geography, Civics, Humanities skills). A new subject needs `group:`, `blurb:` and an `order:` that places it in its group. The home page lede no longer lists subjects. Needs a quick or whole-site publish.
- Humanities teacher guides (30 Oct 2026, draft, Matthew): `content/humanities-teachers.md` (shared inquiry skills), `history-teachers.md`, `geography-teachers.md`, `civics-teachers.md`, `economics-teachers.md`, in the Teachers menu under Subject guides (subject order) and in `tools/search-index.mjs`. They state only what is built (History 4 lessons + 1 catch-up, Geography 1 of 5, Civics 1 of 5, Economics 4, shared inquiry 6 + 2 catch-ups) and mark everything else as planned. Update each guide when its subject builds more. Needs a whole-site or quick publish.
- Teachers page and menu (30 Oct 2026): the Teachers page shows the same groups as its menu, as two-column cards with short descriptions; subject guides are in subject order under short names (English, Maths, ...). Group and order come from `links:` in `content/teachers/index.md`.
