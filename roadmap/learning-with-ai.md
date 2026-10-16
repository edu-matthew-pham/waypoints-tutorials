# Roadmap: Learning with AI

Planning roadmap for the Learning with AI pathway in Waypoints Tutorials. The first AI Foundations pilot lessons are now authored; broader course coverage and classroom validation remain in progress. This file records direction, candidate courses and decisions while keeping implementation status current.

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

## Unit 3: Communicating with AI (authored)

- Lesson 8, **How do you communicate with AI?** Practise specifying goals, relevant context, response form and the type of assistance. Avoid treating prompt length as quality or promising guaranteed outputs.
- Lesson 9, **How do you work with an AI response?** Diagnose a response, select a purposeful follow-up and compare possible outcomes. Distinguish self-checks from independent verification.
- Both lessons use an explicit **scripted response laboratory**, not a fake live AI, with optional school-approved assistant comparisons. They preserve Year 7 accessibility and independent learner judgement.
- Planned next: **Learning effectively with AI** (select helpful assistance, verify claims, decide what to delegate), without conflating curriculum outcomes with interaction techniques.

## Proposed course architecture

### AI Foundations — first course to design

Concepts to sequence and test:
1. What an AI system does and does not do; predictions versus understanding.
2. Data, patterns, probability and generation.
3. Training examples, representation, limitations and bias.
4. Prompts and context: why outputs change.
5. Plausibility, accuracy, uncertainty and verification.
6. Cognitive offloading: what is delegated, what remains with the learner.
7. Using AI deliberately: choosing help, checking it and demonstrating independent transfer.

**These are themes, not a settled lesson list.** Map learning objectives and prerequisites before naming units and lessons. Use UNESCO's AI Competency Framework for Students, AI4K12 and AI-literacy research as potential coverage checks, not as a substitute for the lesson design.

### Contextual courses — candidates

- Learning with AI in Maths
- Learning with AI in Science
- Learning with AI in Writing
- Learning with AI in Coding

Focus on the thinking that must remain with the student in each domain. Avoid re-teaching all of Foundations; provide short recap links or self-contained refreshers.

## First simulation candidate: from dice to a language model

Inspired by ANU School of Cybernetics' **LLMs Unplugged** paper-and-dice activities (https://www.llmsunplugged.org/). Study the original activity and attribution/licensing before adapting its mechanics or materials.

Proposed learning progression:
1. **Manual:** inspect a tiny text corpus, count word transitions, construct a probability table, and roll physical or virtual dice to choose the next word.
2. **Assisted:** let the browser count transitions and show the table, while the learner controls sampling and can inspect each choice.
3. **Automated:** generate many samples using the *same visible rules* to compare patterns, corpora and variability.
4. **Reflect:** identify what work was delegated at each step, what understanding was gained or lost, and what remains the learner's responsibility.

Design constraints:
- Keep the corpus, counts, probability distribution and chosen outcome inspectable.
- Preserve a manual/automatic toggle so the offloading itself is visible.
- Automate repetition *after* learners understand what is being repeated.
- Identify the model accurately as a **small probabilistic text generator** (for example, an n-gram model), **not a miniature transformer or faithful LLM implementation**.
- Use a real AI assistant later to investigate what the simplified model can and cannot explain.

Possible 5E arc: Engage with a text-prediction question; Explore with dice; Explain probabilities and transitions; Elaborate with automation and changed data; Evaluate with a new example and offloading reflection.

## Tools for schools (proposed, 16 Oct 2026)

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
1. **Teacher page "Choosing AI tools for learning"** (a plain page, e.g. `content/ai/tools.md`).
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
3. **Optional "Try it with your school's tool" steps** (`tier: typical`) in Foundations Unit 4 and in `evidence-of-achievement`, so students compare the board with the real tool. These are worded for any tool.
4. **Prompt library: use Waypoints Kit** (edu-matthew-pham/waypoints-kit), not a separate library.
   - How Kit works: a starter prompt has a chatbot read `START-HERE.md`, the standard's node file and one format file.
   - `coach.md` is already a tool-neutral study mode: Discover, Practise, Teach it back, Spot the flaw and Check. It is hint first, ends each round of help with "how do you know?", and stays inside the waypoint.
   - The tools page links to Kit's coach and starter prompts rather than repeating them.
   - Proposed Kit additions (to raise in the Kit repo, not built):
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

## Open before implementation

- What ages/prior knowledge is Foundations designed for? Which objectives are essential versus optional?
- What are the minimum viable units and lessons, and their prerequisite sequence?
- Should simulations use existing board widgets, a new shared simulator, or both? Review AUTHORING and the current playground architecture first.
- What can be assessed independently without relying on AI output quality or a particular model?
- Which subject-specific course should be piloted first?
- Which ANU resources can be referenced or adapted under their licences?

## Build order (proposed)

1. Audit current authoring conventions and board widgets; inspect a Science 5E lesson.
2. Write a short **AI Foundations** course index, learning objectives, prerequisites and a pilot unit outline.
3. Prototype the **manual → assisted → automated** dice simulation with one inspectable probability model.
4. Author one complete 5E lesson, including teacher notes, checks, accessibility and explicit limitations.
5. Test with learners; revise before expanding the course or adding contextual pathways.

## Status

- Agreed pedagogical direction: **documented**.
- Course structure and first three units: **implemented as lesson drafts**; classroom validation and subject-specific integration remain in progress.
- **AI Foundations authored:** seven lessons across text generation and how AI learns, plus two lessons in **Communicating with AI** (purposeful prompts and follow-up interaction). Unit 3 uses scripted response comparisons, explicitly not a live LLM. Publishing, browser checks and video playback remain subject to build verification.
- **Review fixes (16 Oct 2026)** on branch `ai-review-fixes`: board and research fixes, Unit 4 renamed "Getting good help from AI", class plans for all Does AI Help Us Learn? lessons. Remaining work: `roadmap/ai-review-fixes.md`; tools work: `roadmap/ai-tools-handoff.md`.
