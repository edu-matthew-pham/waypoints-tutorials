# Handoff: AI tools work (16 Oct 2026)

For any AI chat continuing this work (Claude, ChatGPT or another).
- Everything needed is in this repo, on branch `ai-review-fixes` of edu-matthew-pham/waypoints-tutorials.
- Read these first:
  - this file
  - `roadmap/learning-with-ai.md` › "Tools for schools"
  - `roadmap/ai-review-fixes.md` (course fixes still to do)
  - `CLAUDE.md` (how the repo works; the rules apply to any assistant)

## Where things stand
- **Branch `ai-review-fixes`, not yet merged into main.** It has:
  - the Group 1 review fixes for AI Foundations and Does AI Help Us Learn?
  - Foundations Unit 4 renamed "Getting good help from AI"
  - class plans for every Does AI Help Us Learn? lesson
  - the tools roadmap
- **Three kinds of tool**, each judged by one course:
  - **Help tools** (e.g. Copilot Study and Learn): Foundations Unit 4.
  - **Evidence tools** (e.g. Thinking Mode, https://thinkingmode.com/: the student defends uploaded work in a locked session, and the teacher gets a transcript): Does AI Help Us Learn? Unit 4.
  - **Teacher tools.**
- **Every trial asks two questions:**
  - "Does it work?"
  - "Can we trust it?": privacy, safety, terms of use including age limits, oversight and fair access.
- **A prompt copies behaviour, not controls.** A free prompt can match a tool's questioning, but not its locked session, teacher transcript, data agreements or terms.
- **The prompt library is Waypoints Kit** (public repo edu-matthew-pham/waypoints-kit; read its `HOW-IT-WORKS.md` and `coach.md`). `coach.md` is already a tool-neutral study mode with five modes: Discover, Practise, Teach it back, Spot the flaw and Check.

## Task 1: Kit, as proposals only (Kit is v0.2, under review)
Write the proposals as a new file in the Kit repo, `proposals/2026-10-ai-tools.md`, or as a pull request. If you can't write to the Kit repo, give Matthew the file to add. **Don't change `coach.md` or other live files.**
1. **"Defend my work" coach mode**, a sixth mode in Kit's style:
   - The student pastes finished work.
   - The AI asks about the student's decisions and reasoning, one question at a time, and never rewrites the work.
   - It probes the waypoint's success criteria, then gives a short descriptive summary the student can show the teacher. The summary says what they explained securely and what was unclear, with no marks.
   - It is the self-check version of an evidence tool. Say plainly that it is practice, not assessment evidence: there is no lock and no teacher transcript, and it relies on what the student chooses to share.
2. **`trial.md`, a format file** for "help me plan a trial of [tool]":
   - **Fixed core:**
     - what is being trialled and why
     - the comparison (existing practice, another tool, or a Kit prompt in a general chatbot)
     - who takes part and for how long
     - what you measure
     - a check one or two weeks later
     - student and teacher views
     - "Can we trust it?"
     - what would change the decision
   - **Optional parts** for help, evidence and teacher tools (see `roadmap/learning-with-ai.md`).
   - **Kit's stance:** options with reasons, placeholders, and the teacher decides.
   - **Worked examples:**
     - Thinking Mode, compared with the teacher's own short conversation about the same work and with the Kit "Defend my work" prompt in Copilot.
     - Copilot Study and Learn, compared with Copilot running Kit's coach on the same waypoint.
     - Check first whether Copilot can open URLs; if not, use `waypoints-kit-all.md`.

## Task 2: tutorials, a lesson `prompt` block
Do this after `ai-review-fixes` is merged, or on that branch if Matthew says so.
- **A step can include a prompt card:** a title, the prompt text, a **Copy** button, and the line "Use an AI tool your school allows, if your teacher says you can."
- **Reuse the existing recap coach box:**
  - styles: `.rccoach` CSS in `tools/build-site.mjs`
  - copy code: `RECAP_COACH_JS`
  - prompt wording: follow `tools/coach.mjs`, which adapts Kit's rules into self-contained text because school Copilot can't open URLs
- **This touches shared code** (`tools/lesson-view.mjs`):
  - Read `ROADMAP.md` › Working in parallel.
  - Check `roadmap/shared.md` and `git log`.
  - Keep the change small, and log it in `roadmap/shared.md`.
- **Document it** in `AUTHORING.md` next to the other step fields. Validate should check the fields.

## Task 3: optional "Try it with your school's tool" steps
- **Each step is `tier: typical`** (optional, never needed to finish), with one prompt card:
  - Foundations `learning-support` (Ask for the right kind of help): a hint-first coach for something the student is learning.
  - Foundations `checking-ai-claims` (Check what AI tells you): "help me check this claim", with the student supplying the claim and a source.
  - Foundations `delegating-thinking` (Decide what to hand over): "help me decide what to keep and what to hand over for this task and goal".
  - Does AI Help Us Learn? `evidence-of-achievement`: "defend my work", the Kit-style mode from Task 1.
- **Each step asks the student to compare** the tool's behaviour with the lesson's board, using the habit.
- **Lessons stay platform-agnostic:**
  - Don't name products in student text.
  - Keep everything doable without an AI account.

## Rules
- **Git:**
  - Pull before starting and before every push.
  - Never force-push.
  - Use the commit trailers in CLAUDE.md, adapted to the assistant you are.
  - Push to the branch Matthew names, not main, unless he says so.
- **Checks:**
  - `npm run validate` must pass.
  - Test new UI in a headless browser if you can run one. If you can't, say so.
- **Coach prompts:**
  - Keep them off for code lessons (roadmap/code.md).
  - Keep Kit's rules: one question at a time, no giveaways, a reflective question after help, and the AI can be wrong.
- **Writing:**
  - Plain words for Years 7–10.
  - Teacher notes go in `teacher.yml`, not student text.
  - Keep replies to Matthew short and direct.
- **Don't repeat these weaknesses** from the existing course drafts (see `roadmap/ai-review-fixes.md`):
  - multiple-choice answers where the cautious-sounding option is always right
  - dense wording
  - disclaimers in student text
