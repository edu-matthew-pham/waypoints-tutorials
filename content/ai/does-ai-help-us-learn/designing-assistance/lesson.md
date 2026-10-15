---
title: Can we design AI to make us think?
summary: Compare direct instruction, guided hints and fading support for different learners.
language: science
unit: choosing-assistance
order: 3
voice: { name: bf_emma, speed: 1.05 }
---
Lesson 8 showed that interaction does not automatically produce learning. If we can control when a tutor explains, questions or hints, **how should we arrange that help?**

## Engage: competing designs

```step
stage: predict
check:
  type: predict
  q: "A beginner encounters a new writing technique. Which tutor must be better?"
  options: ["One that always gives the complete answer", "One that always asks questions first", "Neither is universally better; consider the learner and goal"]
  actual: "Worked examples and guided questioning can both support learning. Their value depends on how they are used."
```

Why might an explicit explanation help someone who has never seen a method? When might a sequence of hints be more productive?

## Explore: compare sequences

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What can a worked example provide to a novice?"
      options: ["A visible model of a new technique", "Proof of independent competence", "Guaranteed long-term retention"]
      answer: 0
  - check:
      type: question
      q: "What can an attempt followed by a hint reveal?"
      options: ["Where the learner is currently stuck", "What the learner will remember next year", "That instruction is unnecessary"]
      answer: 0
  - check:
      type: question
      q: "What is fading support?"
      options: ["Reducing help as capability develops", "Withholding all explanations from beginners", "Using AI to write every answer"]
      answer: 0
```

### A — model first

A student is learning to build a persuasive paragraph. The tutor shows a short model, pointing out claim, reason, evidence and explanation. The student identifies each part, then tries a new topic. A complete explanation may supply essential background.

### B — questions and hints

The student attempts a paragraph first. The tutor asks which sentence gives the claim and offers a targeted hint about evidence. This may surface a misconception. But repeated questions can become frustrating if the learner does not yet know what a good paragraph looks like.

### C — gradually less help

The tutor models one paragraph, gives a partly completed second example, then invites a fresh paragraph without the model. This *aims* to support growing capability. It does not by itself prove durable learning.

## Explain: instructional scaffolding

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is scaffolding in learning?"
      options: ["Support that makes a developing skill manageable", "Keeping the student permanently dependent", "Avoiding all difficulty"]
      answer: 0
  - check:
      type: question
      q: "Why could the same teaching sequence work differently for two learners?"
      options: ["Their prior knowledge and needs may differ", "Experts are always correct", "Every beginner dislikes examples"]
      answer: 0
  - check:
      type: question
      q: "What could a fresh unaided attempt add?"
      options: ["Evidence about capability beyond supported participation", "Proof of every kind of learning", "Proof the tutor caused every improvement"]
      answer: 0
```

### Scaffolding and modelling

**Scaffolding** provides support as a learner develops a capability. Modelling a procedure, asking a question and offering targeted feedback are different kinds of support. An appropriate choice depends partly on what the learner knows.

### Productive difficulty

Effort can support learning when the learner has resources to make progress. Struggle can also become unproductive. More effort is not automatically more learning.

### Fading and reconstruction

Reducing assistance and trying a new task may help reveal developing capability. Lesson 2 reminded us that immediate success alone does not establish retention or transfer.

## Elaborate: design and challenge a tutor

```step
stage: make
tier: typical
check: { type: reflect, text: "I designed a support sequence, considered a learner with different expertise and identified limitations." }
```

Choose a familiar learning goal: learning to write a reasoned paragraph, explain a science idea or solve a maths problem.

Decide what your learner already knows, which initial support to offer, when to provide feedback, when to reduce help, and what later attempt would help evaluate learning.

Now challenge your design. What if the learner has less prior knowledge than you assumed? What if they confidently request an answer they cannot explain?

Should **students, teachers or an adaptive system** control the help? Defend two different possibilities before deciding whether any general rule is justified.

## Evaluate: avoid replacing one rigid rule with another

```step
stage: info
check:
  type: question
  q: "Which conclusion is best supported?"
  options: ["Tutors must always ask instead of explain", "The learner, goal and quality of evidence matter when choosing support", "Reducing hints guarantees retention"]
  answer: 1
```

**Unit inquiry:** When should learners retain thinking, choose a particular tool, and request or receive structured help?

**Next unit:** Assistance may be valuable during learning but raise different questions when schools evaluate achievement. Who decides what counts?
