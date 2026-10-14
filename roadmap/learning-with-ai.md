# Roadmap: Learning with AI

Planning roadmap for a proposed new subject/pathway in Waypoints Tutorials. **Not yet built.** This file records direction, candidate courses, and decisions needed before writing lessons. Keep implementation status current here, rather than adding dated updates.

## Direction agreed

- **Learning with AI** is the learner-facing pathway name. Self-regulated, AI-supported learning is a central educational aim, not necessarily a separate course.
- Start with **AI Foundations**, then contextual applications (potentially Maths, Science, Writing, Coding). Subject-specific courses are **proposed**, not a committed launch set; they should be usable independently with concise foundations recaps.
- Be **platform-agnostic**: no lesson should require one vendor's AI interface. Separate learning objectives from changing product behaviour.
- AI literacy (understanding AI and evaluating its outputs) and **self-regulation** (deciding whether, when and how to use AI) are complementary. Both run through the pathway.
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
- Course structure, lesson sequence, simulation and subject integration: **proposed, not implemented**.
- No changes to published navigation or existing lesson architecture yet.
