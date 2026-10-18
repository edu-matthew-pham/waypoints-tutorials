# Handoff: build *AI at our school* (the AI committee course) (18 Oct 2026)

**Done 18 Oct 2026: the course is built** (status in `roadmap/ai-committee-plan.md` › Status). The rest of this note is kept for history.

For any assistant continuing the AI committee course. **Start by asking Matthew the open decisions below; build only after he answers.** Then follow `CLAUDE.md` › "go".

## Read first
- `CLAUDE.md`, `BUILDING.md`, `AUTHORING.md` (lesson format, check types, `tier:` steps, class plans).
- `roadmap/ai-committee-plan.md`: **the plan** (three units, nine sessions, ground rules, the illustrative Google AI Mode case, decisions).
- `roadmap/ai-society-course-plan.md` and `roadmap/learning-with-ai.md` (AI and society status).
- For shape, copy the two courses built 18 Oct: `content/ai/who-does-ai-affect/` and `content/ai/ai-in-your-life/` (5E lessons, `teacher.yml`, `class/<lesson>.yml`, `primers/`, `recap.md`, quoted `summary:` lines, course-wide `order:`).
- Teacher guide: `content/choosing-ai-tools.md` (dated vendor table; the trial checklist). Kit: `proposals/2026-10-ai-tools.md` in edu-matthew-pham/waypoints-kit (public; `trial.md` was dropped on 16 Oct, so the checklist is teacher guidance).

## State of play (18 Oct 2026)
- **Built and live:** AI Foundations (13 lessons, incl. `kinds-of-ai`), Does AI Help Us Learn? (12), *Who Does AI Affect?* (11), *AI in your life* (10), on pathways foundations, inquiry and **society** (`content/ai/index.md`). New board widgets `feed` and `consent` (AUTHORING lists their values). Cyber safety has three AI steps (malicious model, voice-clone phish, prompt injection).
- **Matthew's side, not this task:** wellbeing-lead review of `ai-in-your-life/chatbot-friend` and `fake-about-someone`; trying the courses with classes; scheduled re-checks (plan tables).
- **Parked:** the "Unit 2 · lesson 5 of 5" label (`roadmap/shared.md`); the optional "Advise a younger student" lesson.

## Open decisions (ask first)
1. Title: *AI at our school* or *The AI committee*.
2. A course on the AI and society pathway (`stage: extensions`, `after:` both society courses) or a teacher-run project pack.
3. Unit order: Unit 1 (charter) first, then 2 and 3 in either order.
4. Staff version: staff-facing class plans in the same course, or the Choosing AI tools guide only.
5. Worked examples for teacher notes: the Google AI Mode case (Unit 3) and Copilot Study and Learn or Thinking Mode (Unit 2), all dated.
6. The candidate teacher course on making tutorials stays separate.

## How to build (once decided)
- Write the made-up material first and reuse it across lessons: a made-up school (aims, current AI policy), StudyPal (pitch, one small study, privacy page, settings with training on by default, 13+ terms), and a made-up search page with an AI answer above the results.
- `language: science`, `shape: 5e`; Year 7 core on made-up material, `tier: typical | wider` for real documents and Years 9–10. Checks: question, sort, unmarked `reasoning` with model answers. No new widgets (reuse `consent` in lesson 5 if useful).
- **The emphasis is principles that guide decisions**, not verdicts: every real case is illustrative, dated, and framed as "which principles does this test?".
- Real products only in dated teacher notes, checked on vendors' own pages; claims only from checked sources (the research brief's rule). No student accounts or student data; never survey students' private use.
- Products per unit: charter, recommendation, response plan, as printable templates (the lessons' worksheets).
- Add the course to the society pathway; add "Start with principles" and "When AI is already here" sections to `content/choosing-ai-tools.md` linking to it.
- Test as for the society courses: `npm run validate`, build, headless page loads at desktop and phone width, `npm run check-decks`. Commit with the trailers, push to main. A new course plus the subject page and guide needs the **full publish** (`gh workflow run publish.yml`); content-only follow-ups can use `gh workflow run publish-lessons.yml --ref main` (the `publish-lessons` trigger branch has diverged; don't force-push it).

## Matthew's preferences
Plain words for Year 7; cases, not lectures; platform-agnostic; no phones in class; every activity works offline on paper; a solo, self-paced version of every lesson; not too much AI encouragement; short, direct replies.
