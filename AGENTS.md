# Instructions for coding agents (Codex, ChatGPT, Copilot, Claude Code)

Waypoints tutorials: a static site (GitHub Pages) of markdown lessons with live playgrounds, built from `content/`. Owner: Matthew (a teacher). He prefers direct, concise, high-signal replies, in plain language.

**Read `CLAUDE.md` first.** It is the full set of working notes for every agent, not only Claude (the name is historical). It is long, so read these parts before starting, and search it for the rest as needed: *Publishing*, *How we work*, *Teaching decisions*, *Gotchas*, and the section for the subject you are working on.

Then read `ROADMAP.md` (index and rules for parallel work) and the roadmap file for your subject: `roadmap/<subject>.md` (`maths`, `science`, `code`, `english`, `economics`, `history`, `geography`, `civics`, `humanities-inquiry`, `ict`, `systems`, `engineering`, `learning-with-ai`, or `shared.md` for the build and shared tools). Authoring format is in `AUTHORING.md`, how to build a course in `BUILDING.md`, testing and review steps in `roadmap/checklist.md`, every rule with its reason in `roadmap/rules.md`.

**When Matthew raises something, find out what it is before acting.** Often he is asking or unpacking (why did this happen? what are the trade-offs?), not objecting; that may lead to a change, or not. Say back in a line what you think he is asking, answer or explore it with him, and change only what he decides, not everything near it. *Why:* a question read as a complaint, or feedback read too broadly, becomes an overcorrection (4 Nov 2026: asking why History defaulted to predict-first was read as "predict is bad in History", when the point was that the shape was copied without asking what History needs).

## Rules that matter most

Each rule is **firm** (don't depart without asking Matthew) or a **default** (use judgement; if you depart, say why in your roadmap file). Matthew's stance is defaults with reasons, not blanket rules. The full list, with reasons, scope and who decided: `roadmap/rules.md` (T = teaching, W = working).

Firm
- **First Nations content** (every subject): we write no student explanation of First Nations history or culture. Where a skill lesson needs an example, use the custodians' own words: one short sourced line and a link. Teacher notes start from ACARA's elaborations. *Why:* we are not the right authors. (T1)
- **Made-up scenarios never use real brands or real living people;** made-up names are labelled and read as made up. Real people, places and sources are fine when the subject needs them, checked against a source. *Why:* nothing promoted or misrepresented. (T2)
- **No AI marking** of student work, and nothing listens to or judges a voice. *Why:* feedback, not judgement. (T3)
- **Safeguarding:** student writing is never sent anywhere, nothing personal is asked, progress stays in the browser; wellbeing topics carry review and disclosure notes. Hacking techniques only on our pretend boards or a teacher-approved isolated lab, never against real systems or accounts students aren't authorised to test, and nothing that works outside the lab. *Why:* child safety and privacy; white-hat work rests on permission and scope. (T4, T6, T7)
- **Pull before starting and before every push (`git pull --rebase`); never force-push. Never add automatic publish triggers.** *Why:* other chats work in parallel; publishing stays manual by choice. (W1, W2)

Defaults
- **Don't mark free writing,** but use writing where it helps (own book or document, or a small browser-only box, read by a partner or teacher). *Why:* the site is an activity guide, not a marker; "no writing" was never the rule. (T5)
- **Label contestable or simplified ideas where students meet them** ("in economics…", "this model leaves out…"); keep the descriptor's terms; settled facts stay plain; a short phrase is enough. *Why:* ACARA says what to teach, not how sure to sound. (T8)
- **Pace-agnostic:** no pace labels; the untiered path is the minimum; `tier:` steps are optional width, never a faster track; check before leaving a hinge. A teacher note may say where a slower or faster class could spend extra time. *Why:* a tutorial never knows the class. (T9, T10)
- **Include, don't avoid** sensitive topics (First Nations knowledge, disability, caring roles, family make-up): made-up or neutral cases, nothing personal asked, real knowledge in the right people's own words, and a teacher note that the case can be swapped. *Why:* leaving a topic out teaches that it doesn't belong. (T20; T1 stays firm)
- **Lesson shape is a default.** Pick the shape that fits the waypoint and say why if you leave the usual one (ICT shape for planted-answer skills, inquiry for discussion, PRIMM stages as jobs rather than an order in Code). *Why:* one shape copied everywhere pads lessons. (T11)
- **Core skills first.** Every lesson practises at least one of its subject's ACARA skills (Kit's nodes) the way historians, scientists or programmers actually do it, topic lessons included; other defaults give way, firm rules don't. History source work uses real, licensed extracts. (T23)
- **Give the context, not just the instruction** (lessons and how-tos): start from what the student is trying to do; when a step asks them to type or change something, say what each part is for, show it as it is and what it can become, and say what they should see. *Why:* copied code works until they need to change it. (T22)
- **Check facts about people, places, studies and dates against a source;** prefer made-up cases where real ones would date; mark anything unverified. (T12)
- **Handle prior knowledge, lightest first:** name what each lesson assumes from earlier years and other subjects, and how each leap is handled (refresher fold, short page, recap, full lesson). Link to earlier years only, never forward; at most two cross-subject links, labelled with the subject; keep additions skippable. *Why:* the students with gaps are the least likely to follow a link out of the lesson. (T24; BUILDING › 2)
- **Plan, then build:** plan each waypoint in your roadmap file and stop for "go" (`roadmap/checklist.md`). (T14)
- **No step needs a phone;** a QR code may sit beside a link, never instead of one. Worksheets students write on come from Prepare Print; cheat sheets, briefs and reference pages may have their own print layout. (T15, T16)
- **Test before you push** (`npm ci`, `npm run validate`, `npm run build`, a headless-browser check of pages you changed; Chromium via Playwright, serve `dist/`); don't re-render clips locally. (W3)
- **Publishing:** lesson-only batches, publish when finished (`git push origin main:publish-lessons`) and say so; whole-site, navigation or Create publishes, ask Matthew first. Keep notes in your own subject's roadmap file. (W1)
- Add single lines to data files (for example `misconceptions.json`) rather than reformatting them; quote YAML values with colons; give new page parts `wpt-` class names. (W4, W5)
- **When Matthew decides something, write its reason and scope beside it** in `roadmap/rules.md` and your roadmap, in the same commit. (W6)

## Commits

Use a plain commit message that says what changed. Do not add Claude's `Co-Authored-By` or `Claude-Session` lines unless you are Claude. Push to `main` with `git push origin HEAD:main` after pulling.

## When you finish

Say in plain words what changed, what you tested, what you could not test, and what was published or needs a publish (whole-site, quick, navigation, or lessons only: see *Publishing* in `CLAUDE.md`). Record anything you decided or learned in your subject's roadmap file in the same push.
