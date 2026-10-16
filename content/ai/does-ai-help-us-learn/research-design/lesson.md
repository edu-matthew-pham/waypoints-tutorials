---
title: Are researchers asking the right questions?
summary: Redesign an AI-learning experiment by choosing informative comparison conditions, outcome measures and fair interpretations.
language: science
shape: 5e
unit: evaluating-evidence
order: 3
voice: { name: af_heart, speed: 1.1 }
---
Lessons 4 and 5 gave us evidence about assisted performance, measured learning and confidence. But every experiment starts by deciding **what to compare and what to count as success**.

## Engage: a study that sounds convincing

```step
stage: predict
check:
  type: predict
  q: "A school compares an AI tutor with a printed worksheet. The AI group performs better. What is still unclear?"
  options: ["Whether AI adds anything over a well-designed interactive non-AI tutor", "Whether the AI group scored higher in this comparison", "Whether different teaching tools can ever be compared"]
  actual: "The result could be genuine, yet the comparison does not isolate the added value of AI over other effective digital tools."
```

**Provocation:** Can a carefully conducted experiment answer the wrong question?

## Explore: design a fairer comparison

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "To test whether an AI layer adds value to an existing interactive tutorial, which comparison is most direct?"
      options: ["The same tutorial with and without the AI layer", "A new AI tutor versus a class that does not study", "Two unrelated subjects using different assessments"]
      answer: 0
  - check:
      type: question
      q: "Which outcome best investigates retention rather than immediate assisted performance?"
      options: ["How polished students' AI-assisted work looks", "An appropriately designed delayed task with assistance conditions specified", "How much students enjoyed the interface"]
      answer: 1
  - check:
      type: question
      q: "Why might a later unaided test still be incomplete?"
      options: ["It may miss collaborative, creative or tool-mediated goals", "Any test score must be false", "It proves that AI can never improve learning"]
      answer: 0
```

### Comparison A — conventional learning resources

Students use class instruction, books and notes. This is a useful reference condition, but it may not include the scaffolding of a strong interactive digital tutorial.

### Comparison B — structured non-AI tutorial

Students work through interactive activities with feedback, hints and checks. This can support learning without a generative model. It is not the same as doing everything unaided.

### Comparison C — the same tutorial with an AI layer

Students receive the **same core lesson and tools**, plus a carefully designed AI assistant for particular gaps. This comparison is better suited to asking what AI *adds*.

These are **proposed experimental conditions**, not results from a completed trial.

## Explain: investigate validity and confounding

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is a confounding difference in a study?"
      options: ["A change other than the intended treatment that can affect the outcome", "Any difference found between scores", "A question that is difficult for students"]
      answer: 0
  - check:
      type: question
      q: "What does assessment validity ask?"
      options: ["Whether the assessment provides sound evidence for the claim it is used to make", "Whether all students score the same mark", "Whether the results support the researchers' preferred conclusion"]
      answer: 0
  - check: { type: reflect, text: "I can distinguish a theoretical prediction from an experimentally supported result." }
```

### Isolating a cause

When groups differ in multiple ways—such as feedback, time, pace and AI availability—we cannot safely attribute the entire result to AI alone.

### Measuring what matters

**Validity** concerns whether evidence is appropriate for the conclusion. Immediate tests, later transfer tasks, student explanations and creative or collaborative performance can provide different kinds of information.

### Limits of every design

Even a strong experiment takes place in a particular context, with particular students, tasks and tools. Improved productivity might matter even if an unaided test shows no improvement. This is a question about educational values as well as measurement.

**Theory proposes explanations; experiments test them**

In October 2026, Nakamura published [*Augmentation or Erosion? Regulating Cognitive Offloading in Generative AI-Supported STEM Learning*](https://doi.org/10.1007/s10648-026-10224-6), a **theoretical review** proposing seven testable propositions. It does **not** report an experiment validating the full framework.

One proposed distinction is between offloading thinking **peripheral to the learning goal** and offloading thinking **central to it**. Formatting an already-checked table might free time to interpret scientific findings. Having AI perform the interpretation instead could bypass the skill being practised. The same step may be central or peripheral for different learners and goals. (Nakamura's own word for central is **constitutive**: part of the skill being learned. He treats it as a sliding scale, not two boxes.)

The theory also points to learners' prior expertise, monitoring and how help is designed. These are proposed explanations and predictions, not guaranteed outcomes.

**Inquiry:** What evidence would support or challenge the prediction that offloading peripheral tasks is less harmful to learning than offloading central ones? Could a good non-AI interactive tutorial provide the same benefit?

## Elaborate: redesign the claim

```step
stage: make
tier: typical
check: { type: reflect, text: "I designed a study comparison, defended an outcome measure and identified an unresolved limitation." }
```

Your school is deciding whether to add an AI assistant to an existing mathematics tutorial.

Design a study answering **one precise question**:

- What is the learning goal?
- Which groups would you compare, and what would remain the same?
- What would you measure during assistance, immediately afterwards and later?
- What other outcomes—such as productivity, motivation or agency—might matter?
- What would you still be unable to conclude?

**Theory-testing extension:** Compare complete AI solutions with hints that preserve the learner's own attempt. Predict a delayed unaided outcome, and identify a result that would challenge your prediction. What changes if you add an equally well-designed non-AI tutor?

Discuss your design with someone who values a different outcome. Let them challenge it. Revise the *reasoning* if the objection is persuasive; no particular design must win.

**Optional argument map or discussion:** Show your study's claim, comparison, measurements, possible alternative explanations and unanswered questions.

## Evaluate: interpret a hypothetical result

```step
stage: info
check:
  type: question
  q: "Suppose AI and non-AI tutorials produce similar delayed test results, but the AI group completes more prototypes. What follows?"
  options: ["AI has been proved to improve all meaningful learning", "There may be a productivity difference without a demonstrated difference on that delayed test", "Both groups must have learned nothing"]
  answer: 1
```

Explain why the result would not completely settle whether AI helps people learn.

## Learning with AI: recognise what remains open

```step
stage: info
check: { type: reflect, text: "I can judge an AI-learning claim by its comparisons and outcomes without equating any one measure with learning itself." }
```

You have not solved the debate about AI and learning. You have developed stronger ways to question the evidence, including your own confidence and your assumptions about what counts as learning.

**End of Unit 2:** What research finding would most change your current position—and what would its experiment need to compare?

**Next unit:** When might offloading thinking support or undermine a particular learning goal? Unit 3 will return to Nakamura's proposals and compare AI with other tools.
