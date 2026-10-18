# Handoff: build *Teaching when AI is everywhere* (the staff AI course) (19 Oct 2026)

**Done 19 Oct 2026: decided and built (see `roadmap/staff-ai-course-plan.md` › Status).** Kept for the record.

For any assistant continuing the staff AI course. **Start by asking Matthew the open decisions below; build only after he answers.** (IB Appendix 6 has now been read: see Checked sources.) Then follow `CLAUDE.md` › "go".

## Read first
- `CLAUDE.md`, `BUILDING.md`, `AUTHORING.md` (lesson format, check types, `tier:` steps, class plans incl. the `staff:` field).
- `roadmap/staff-ai-course-plan.md`: **the plan** (six lessons, teacher layer, decisions). Also Project doc `claude/staff-ai-course-plan.md`.
- For format, copy *Make a lesson*: `content/teachers/make-a-lesson/` and `roadmap/teacher-course-plan.md` (do first then the why; teachers bring their own work; PD facilitator notes; Teachers menu in `content/teachers/index.md`). A parallel chat is still building it: `git pull` first and check `git log` and `roadmap/shared.md` before touching the Teachers menu.
- What the student/committee course teaches, which this course must line up with: `content/ai/ai-at-our-school/` and `roadmap/ai-committee-plan.md` (status and updates of 18–19 Oct).
- Teacher guide: `content/choosing-ai-tools.md` (lesson 6 routes through it; don't repeat it).

## Why this course exists
*AI at our school* teaches a committee to *notice* know-how gaps (lesson 10: rule problem vs know-how problem; lesson 11: "who needs to know each change, and how"). It deliberately doesn't run staff training. This course is where staff *close* those gaps.

## Ideas to keep consistent with *AI at our school*
- **Rule vs know-how.** If the person who knows a rule best still can't apply it, fix the rule; if they can and others can't, it's know-how (guidance, worked examples, practice). New rules don't fix know-how gaps.
- **Four layers:** a thin AI statement (principles, the map, who holds it, review); AI lines inside existing policies (integrity and assessment, wellbeing and behaviour, privacy incl. families, inclusion incl. agreed adjustments, devices and ICT use incl. AI that acts, staff conduct); termly guidelines (approved tools, settings, year-level expectations); task instructions (set by each teacher). This course lives mostly in the **task instructions** layer.
- **Check, don't police.** Most AI use can't be caught: home use is invisible and detectors are unreliable. Rules work through task design, honest acknowledgement (owning up isn't the offence; skipping the thinking the task was for can still affect the mark) and understanding why the thinking matters.
- **Shifting capability.** Don't design on what AI can't do yet. Test: "what if AI could do this next year?" AI that once made arithmetic slips now runs code to check itself; some AI can now act (open, fill in, submit). Principle: a person sends, submits or changes anything on a school account.
- **Outside rules sit above school rules** for assessed work (IB, BSSS).

## Checked sources (reuse, re-check before teaching)
- BSSS Teacher Guide: AI and Academic Integrity (2023): https://www.bsss.act.edu.au/__data/assets/pdf_file/0003/571719/BSSS_Teacher_Guide_AI_and_Academic_Integrity.pdf (checked 19 Oct 2026). Unattributed or disallowed AI use in assessment is a breach; teachers decide acceptable use per task; students declare permitted use; "Don't rely solely on AI plagiarism detectors"; controls such as drafts, validation tasks, in-class checkpoints.
- IB Academic integrity policy (updated March 2023): https://ibo.org/globalassets/new-structure/programmes/shared-resources/pdfs/academic-integrity-policy-en.pdf. Appendix 6, "Guidance on the use of artificial intelligence tools" (added March 2023), **read 19 Oct 2026**: the IB won't ban AI and avoids the detector "arms race" (detectors not reliable enough to be sole evidence); AI-produced work, even in part, isn't the student's own, so AI text, images or graphs must be credited in the body (quotation marks, the prompt and the date) and in the bibliography; authentication rests on seeing the work develop, the student explaining it, clear referencing and quality fitting the student; consequences are the school's decision under its own integrity policy; language acquisition bans language and translation tools; access and inclusion software is considered separately. Summary in `content/ai/ai-at-our-school/where-ai-belongs/teacher.yml`.
- Detectors: OpenAI withdrew its AI text classifier on 20 July 2023 "due to its low rate of accuracy" (https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text); Liang et al. (2023), detectors flagged over half of 91 human-written TOEFL essays as AI (avg false positive rate 61%) (https://arxiv.org/abs/2304.02819). Checked 18 Oct 2026.
- Capability (checked 19 Oct 2026): OpenAI Academy, "ChatGPT writes and runs the Python code for you" (https://academy.openai.com/public/resources/data-analysis); OpenAI Help, Agent mode in Atlas can "take actions in the browser for you" (https://help.openai.com/en/articles/12628199); the earlier "ChatGPT agent" page now says it "is no longer available" (https://help.openai.com/articles/11752874), a good illustration of how fast features change.
- Microsoft Study and Learn agent (13+, coaches rather than answers): https://support.microsoft.com/education/study-learn-agent (checked 18 Oct 2026).

## Open decisions (ask first)
1. Title: *Teaching when AI is everywhere* (working), *Tasks that keep the thinking*, or *AI and your tasks*.
2. Where it lives: its own course at `content/teachers/ai-and-your-tasks/` in the Teachers menu (recommended), or a section of *Choosing AI tools*.
3. AI levels: generic levels in examples plus "use your school's scale if it has one" (recommended), or adopt a published scale (then check it at its source and date it).
4. Lesson 2's optional try-it step in a school-approved tool: keep, or drop so the course never touches an AI tool.
5. Assessment depth: generic plus dated IB and BSSS pointers (recommended), or a CGGS-specific version.
6. Separate from *Make a lesson* in the same menu (recommended).

## How to build (once decided)
- Write the rotating example tasks once (English essay, science report, maths problem set, history source task, design folio), each with the thinking it's for and what AI can now do with it; reuse across lessons 1–4.
- Real products only in dated teacher notes, checked on vendors' own pages; course text names none.
- Facilitator notes in `teacher.yml` (a 50-minute staff meeting covers lessons 1–2; another covers 3–4); teachers bring a task they're setting in the next fortnight.
- Pilot lessons 1–2 in one staff meeting before writing the rest (Matthew's call whether to draft all first, as he did for *Make a lesson*).
- Test: `npm run validate`, `npm run effort -- content/teachers/<slug>`, build, headless page loads at desktop and phone width (wide tables overflow at 390px: keep tables to about four columns), `npm run check-decks -- <slug>` (long option text and big tables overflow slides). Commit with the trailers, `git pull --rebase`, push to main. A new course in the Teachers menu needs the full publish.

## Matthew's preferences
Plain words; cases, not lectures; platform-agnostic; every activity works on paper; a solo, self-paced version of every lesson; not too much AI encouragement; principles over policing; short, direct replies.
