# Archive: Learning with AI planning notes (to 17 Oct 2026)

Moved from `roadmap/learning-with-ai.md` on 18 Oct 2026 once both courses were built. Kept for the reasoning behind the design; the current plan and status are in that file.

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

