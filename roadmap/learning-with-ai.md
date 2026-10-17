# Roadmap: Learning with AI

Roadmap for the Learning with AI subject (`content/ai/`): two built courses, AI Foundations and Does AI Help Us Learn?, plus a teacher guide to choosing AI tools. Neither course has been tried with classes yet. The planning notes from before the courses were built (course architecture, the dice simulation plan, the original build order) are in `roadmap/archive/learning-with-ai-planning-to-2026-10-17.md`.

Related files: `roadmap/ai-review-fixes.md` (course fixes still to do), `roadmap/ai-tools-handoff.md` (tools work), `roadmap/ai-foundations-evidence-audit.md` (evidence check of Foundations).

## Direction agreed

- **Learning with AI** is the learner-facing pathway name. Self-regulated, AI-supported learning is a central educational aim, not necessarily a separate course.
- Start with **AI Foundations**, then contextual applications (potentially Maths, Science, Writing, Coding). Subject-specific courses are **proposed**, not a committed launch set; they should be usable independently with concise foundations recaps.
- Be **platform-agnostic**: no lesson should require one vendor's AI interface. Separate learning objectives from changing product behaviour.
- AI literacy (understanding AI and evaluating its outputs) and **self-regulation** (deciding whether, when and how to use AI) are complementary. Both run through the pathway.
- Build **calibrated trust**, not reflexive trust or blanket distrust: students should treat AI outputs as suggestions or claims to evaluate against their purpose, reasoning and evidence. Practise three recurring moves: **understand** what the system is doing, **question** what it may have missed, and **verify** what matters before relying on it.
- Progress from **transparent limitations to less visible blind spots**: a small frequency model makes assumptions and errors inspectable; modern LLMs use richer context and learned representations, but persuasive output does not guarantee correctness, completeness or suitability. Do not imply modern LLMs literally use the toy frequency table.
- **Develop learner agency:** the course aims to develop learners who can increasingly regulate their own AI assistance, rather than relying solely on safeguards and pedagogical decisions embedded in AI tools. External scaffolding and learner self-regulation are complementary; responsibility should progressively transfer as learners develop expertise.
- **5E** is the proposed default lesson structure for AI Foundations: Engage, Explore, Explain, Elaborate, Evaluate. Explicit teaching, modelling, guided practice and feedback belong within this structure, especially for novices. Evaluate should check independent understanding and judgement about AI use, not just the produced answer.
- Teach AI as **both an object of study and a tool for learning**. Pair simplified, inspectable simulations with authentic AI interactions. Explain where simulations differ from current LLMs.
- Offloading is not new or inherently harmful. Distinguish delegating **execution** (repetitive operations), **cognitive processing** (summarising, calculating, generating explanations) and **judgement** (deciding what is credible, appropriate or complete). These overlap; the value of offloading depends on the learning objective, learner expertise and retained responsibility.
- Distinguish **learning mode** (developing capability) from **performance mode** (getting a task done). The gym/spotter analogy may help, provided it does not imply all effort is productive.

## Two recurring learning strands

Use two lightweight labels within lessons and teacher guidance, while keeping engaging question-based lesson titles:

- **How AI works:** investigate mechanisms, patterns, capabilities, uncertainty and limitations.
- **Learning with AI:** practise deciding when and why to use AI, evaluating suggestions, verifying claims and retaining the thinking needed for learning.

Introduce **both strands from Lesson 1** rather than teaching them as separate sequential courses. Lessons may emphasise one strand; equal coverage is not required. Use short prompts or headings when useful, not mandatory badges or a rigid template.

Understanding AI mechanisms does not automatically produce good learning decisions. Equally, students can develop verification habits before learning advanced model architecture. Pair transparent simulations with authentic AI-use decisions where appropriate, while making their differences clear.

## Interchangeable model activities and external tools

Keep the **learning objective stable while adapting the tool**. AI Foundations should not depend on access to a particular vendor, account or school-approved service.

For topics such as training data, classification, generalisation and bias, offer two routes when practical:

- **Waypoints route:** a self-contained, inspectable simulation with prepared or editable examples. Students can change inputs, observe predictions and explain why a result changes.
- **Authentic-tool route:** use an external learning tool such as Google's Teachable Machine to collect examples, train a real classifier, test unfamiliar inputs and investigate errors. Quick, Draw! may support discussion of pretrained recognition and mistakes, though it is not an equivalent train-your-own-model activity.

**Equivalent pathways:** teachers may select the Waypoints activity *or* the external tool to meet shared essential objectives and checks. Keep the prediction, investigation, explanation and evaluation prompts aligned where feasible. Provide an accessible fallback when devices, permissions, connectivity or third-party services are unavailable.

**Extension pathway:** students may use the transparent Waypoints model first, then compare it with a real trained model to encounter greater complexity and limitations.

Do not present the routes as technically interchangeable: a simplified classifier does not reproduce a neural network. State what each represents and cannot show. Prefer pedagogical interchangeability over a claim of identical mechanisms or outcomes.

**Design principle:** use simplified models to reveal mechanisms, authentic models to encounter complexity, and reflection to develop independent judgement.

## Courses as built (18 Oct 2026)

**AI Foundations** (`content/ai/foundations/`, 12 lessons, `shape: 5e`):
- How AI generates text: Can you predict the next word? · Build a text generator with dice · Let the computer take over (a toy n-gram model, labelled as such; `text-prediction` and `word-sampler` boards).
- How AI learns: How does a machine learn? · Why does AI make mistakes? · How do models combine clues? · Can a neural network learn?
- Communicating with AI: How do you communicate with AI? · How do you work with an AI response? (scripted response laboratory, not a live AI).
- Getting good help from AI (unit id `learning-effectively-with-ai`): Ask for the right kind of help · Check what AI tells you · Decide what to hand over.

**Does AI Help Us Learn?** (`content/ai/does-ai-help-us-learn/`, 12 lessons, class plans for all 12):
- What does it mean to learn? · What does the evidence show? · When should we use AI? · Who decides what learning looks like? (three lessons each).

Both courses have recap pages. Neither has `coach: true`, so no coach prompts are shown anywhere in the AI courses yet (see Decisions).

### Contextual courses: candidates (not started)

- Learning with AI in Maths, Science, Writing, Coding. Focus on the thinking that must remain with the student in each domain; short recap links rather than re-teaching Foundations.

## Tools for schools (16 Oct 2026)

Purpose: help schools choose and trial AI tools, using what the two courses already teach. Matthew's school is trialling Microsoft 365 Copilot (Study and Learn mode) and Thinking Mode (https://thinkingmode.com/). Lessons stay platform-agnostic; this is teacher-facing material beside them.

**Two kinds of tool, one per course:**
- **Help tools** (tutor or study modes, general assistants, AI in Office): judged by the AI Foundations Unit 4 habits.
  - Does it give a hint before the answer, and can a teacher set that?
  - Does it show sources?
  - Can a teacher control what it will do for a student?
- **Evidence tools** (Thinking Mode: the student uploads finished work and answers adaptive questions about it; the teacher gets a transcript): judged by Does AI Help Us Learn? Unit 4 (evidence of achievement).
  - Does the conversation show what the student understands, or how well they talk?
  - Is it fair for students who are nervous, quieter or learning English?
  - Can the teacher read and overrule the judgement?
- **Teacher tools** (planning, rubrics, feedback drafts): the same habits from the teacher's side (keep the parts you need to understand or control).

**Plan:**
1. **Teacher page "Choosing AI tools for learning"** (built: `content/choosing-ai-tools.md`, published at `/choosing-ai-tools/`, linked from the home page).
   - The questions above.
   - Practical checks: age limits in the terms, student accounts, where data goes and how long it stays, teacher visibility and settings, LMS fit.
   - One dated table of example tools, each claim linked to the vendor's own pages. No endorsements.
2. **Small-trial template**, flexible: a fixed core plus optional parts per kind of tool. It is the Does AI Help Us Learn? research-design lesson applied to a real decision.
   - **Core (every trial):** what you are trialling and why; what you compare it with (existing practice, another tool, or a prompt in a general chatbot); who takes part and for how long; what you measure; a check one or two weeks later; student and teacher views; what would change your decision.
   - **Can we trust it? (every trial):** judge this alongside "does it work?"; a free prompt can match a tool on the first and still lose on this. Check:
     - **Privacy:** where work and transcripts go, how long they're kept, and whether they train a model.
     - **Safety:** guardrails that keep it on task.
     - **Terms of use:** minimum age, consumer versus education terms, who owns uploaded work, and whether use with minors and in assessment is allowed.
     - **Oversight and accountability:** what the teacher can see, and a vetted vendor answerable to the school.
     - **Access and fairness:** every student gets the same tool, with no personal accounts.
   - **Help-tool part:** a hint-first task, then a new question without the tool a week later, plus students' confidence before and after.
   - **Evidence-tool part:** for a sample of students, compare the tool's transcript judgement with the teacher's own short conversation about the same work; note disagreements and who they affect.
   - **Teacher-tool part:** time saved, how much was edited, whether the teacher could defend the result.
   - Scale it to the school: one class for a fortnight is a valid trial if it says so. First worked examples: Thinking Mode (evidence) and Copilot Study and Learn (help).
3. **Optional "Try it with your school's tool" steps** in Foundations Unit 4 and `evidence-of-achievement`: **back on** (corrected 18 Oct 2026, see Decisions), as optional steps beside the scripted labs. No prompt cards inside lessons for now.
4. **Prompt library: use Waypoints Kit** (edu-matthew-pham/waypoints-kit), not a separate library.
   - How Kit works: a starter prompt has a chatbot read `START-HERE.md`, the standard's node file and one format file.
   - `coach.md` is already a tool-neutral study mode: Discover, Practise, Teach it back, Spot the flaw and Check. It is hint first, ends each round of help with "how do you know?", and stays inside the waypoint.
   - The tools page links to Kit's coach and starter prompts rather than repeating them.
   - Kit additions (checked 18 Oct 2026): `defend.md`, `draft.md` and `discussion.md` are live in Kit; `trial.md` is not yet written. Original proposals:
     - A **"Defend my work" coach mode**: the student pastes their work, the AI asks about their decisions one at a time, then gives a descriptive summary for the teacher. It is the self-check version of an evidence tool.
     - **`trial.md`**: the trial template above as a Kit format. It gives options and placeholders, and the teacher decides.
   - Teacher prompts: Kit's planning, assessment and slide prompts, plus the tutorials' teacher-lesson prompt (Project doc teacher-lesson-prompt).
   - Coach prompts stay off for code (roadmap/code.md).
   - First trial idea at CGGS: Copilot running Kit's coach compared with Copilot Study and Learn, on the same waypoint. First check whether Copilot can open web links; if not, use `waypoints-kit-all.md`.
5. **Later**: short guides per tool type, written after the template has been used in at least one real trial.

**A prompt copies behaviour, not controls.**
- A prompt can get most tools to behave like a mode (hint first, question me about my work).
- It can't add a mode's controls: a locked session, teacher settings, a transcript the teacher sees.
- Rule for schools: if you need the behaviour, a prompt may be enough; if you need control or evidence, you need the tool.
- Vendors' named modes (Thinking Mode's Defence, Draft and Discussion; MagicSchool's teacher and student tools; Copilot Study and Learn) are mapped to help, evidence or teacher in the tools table, with a date, not described in detail, because they change.

**To find out during the trial:**
- Thinking Mode's Draft and Discussion modes. Its site names them but doesn't describe them.
- Which AI model it uses, and how long it keeps data.
- Whether students can see and question their transcript.
- How it handles a student who wrote the work but explains it poorly.

## Decisions (18 Oct 2026)

- **Prompts in the AI courses (corrected 18 Oct 2026).** Matthew's "recap pages only" decision applies to coach prompts in general lessons, not to the Learning with AI courses. In a course about using AI, lessons may include optional prompt steps: scripted response labs stay the core (every check doable without AI), plus an optional step with one copyable prompt ("ask your school's AI…, then check its reply with the habit you just practised"), `tier: typical`, never needed to finish. Who sees it (hidden until a teacher's link turns it on, or visible with "only if your teacher says you can") is still to decide. Not too much AI encouragement; age limits of tools (often 13+) apply.
- **Both courses are for Year 7.** AI Foundations was already written for Year 7; Does AI Help Us Learn? must be made Year 7 accessible too (plainer words, shorter sentences, hands-on Explore steps rather than read-then-quiz, fewer definition checks). Added to `roadmap/ai-review-fixes.md`.

## Open

- Which contextual course (Maths, Science, Writing, Coding) to pilot first.
- Which LLMs Unplugged materials can be adapted under CC BY-SA 4.0, and how to attribute them.
- What can be assessed independently, without relying on AI output quality or a particular model.

## Status (18 Oct 2026)

- **Built:** AI Foundations (12 lessons, 4 units) and Does AI Help Us Learn? (12 lessons, 4 units, class plans for all), with recap pages; the Choosing AI tools teacher guide. Validate passes for all 24 lessons.
- **Merged:** the review-fixes branch `ai-review-fixes` (PR #1, 16 Oct): Group 1 fixes, the Unit 4 rename, DAHUL class plans, the tools roadmap.
- **Fixed 18 Oct:** the three Unit 1 boards (`dice-generator` and `automate-generator` had two step blocks under one heading, so their boards never showed; `next-word` loaded both board setups, starting at 12 endings instead of 3/2/1). Validate now flags both mistakes. The Nakamura (2026) DOI was confirmed by Matthew.
- **Done 18 Oct (later):** Does AI Help Us Learn? rewritten for Year 7 (plain words, hands-on Explore steps, applied checks); review Groups 2 and 3 done for both courses (details and the few skipped items in `roadmap/ai-review-fixes.md`); a bug that stopped three AI widgets' board checks ticking is fixed; the Choosing AI tools guide is dated (last checked 18 October 2026), uses relative links, names DAHUL Unit 4 correctly and is linked from both AI pathway pages.
- **Next:** try both courses with a Year 7 class; Foundations class plans; the dated vendor table (only with claims checked on vendors' own pages).
- **Not yet tried with classes.**
