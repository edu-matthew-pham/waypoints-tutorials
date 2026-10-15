---
title: What thinking should we keep?
summary: Examine cognitive offloading by changing learning goals, learner expertise and the nature of assistance.
language: science
unit: choosing-assistance
order: 1
voice: { name: af_heart, speed: 1.1 }
---
Unit 2 distinguished good performance from evidence of learning. Now consider a different decision: **if AI can do some thinking for us, which thinking should we keep?**

## Engage: the completed argument

```step
stage: predict
check:
  type: predict
  q: "A learner asks AI to write a persuasive argument they are learning to construct. What can we infer?"
  options: ["The learner certainly learned nothing", "The finished argument alone does not show what reasoning the learner developed", "The learner must have mastered argument writing"]
  actual: "A finished product does not establish which reasoning the student practised or understood."
```

**Provocation:** Does saving effort always save us from learning, or might it free attention for something more valuable?

## Explore: the same help, different goals

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "If the goal is constructing a reasoned argument, which action most directly practises that goal?"
      options: ["Changing the font", "Constructing reasons and answering objections", "Copying an entire generated argument"]
      answer: 1
  - check:
      type: question
      q: "If the goal is exploring unfamiliar perspectives, what might AI usefully provide?"
      options: ["Perspectives to investigate and verify", "Proof every suggested claim is true", "A guarantee of understanding"]
      answer: 0
  - check:
      type: question
      q: "If a student has already developed the reasoning and wants to communicate it clearly, which task might be relatively peripheral?"
      options: ["Checking claims", "Deciding which reasons are convincing", "Formatting the finished handout"]
      answer: 2
```

### Goal A — learning to construct arguments

A student learning persuasive reasoning asks AI to write an argument about providing more outdoor learning at school. They receive a polished paragraph. What thinking did they bypass? Could studying the paragraph, explaining its structure and writing a new one still be educational?

### Goal B — exploring alternatives

The student already knows how to form an argument but wants unfamiliar counterarguments. AI offers possible perspectives. This may expand what they consider, but the student still needs to evaluate those perspectives.

### Goal C — presenting developed thinking

The student has already researched and defended a position. AI helps format notes into a handout. The writing and presentation still need checking, but some formatting effort might be less relevant to the stated learning goal.

**Notice:** The same AI contribution can have different implications depending on the purpose.

## Explain: expertise changes the judgement

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is cognitive offloading?"
      options: ["Delegating part of a mental task to an external resource", "Always refusing assistance", "A guarantee that thinking disappears"]
      answer: 0
  - check:
      type: question
      q: "Why might novices and experts use the same assistance differently?"
      options: ["Experts never make errors", "Prior understanding affects what they can interpret, check and learn", "Novices cannot benefit from worked examples"]
      answer: 1
  - check:
      type: question
      q: "Which is a useful proposed distinction?"
      options: ["Every task is permanently central or peripheral", "Thinking central to a current learning goal may be worth retaining", "All delegation is harmful"]
      answer: 1
```

### Cognitive offloading

Using notes, calculators, peers or AI to handle part of a mental task is **cognitive offloading**. Offloading may free attention, but it may also bypass thinking a learner needs to practise.

### Central versus peripheral thinking

What is **central** depends on the goal. For someone learning to interpret data, checking the meaning of a graph may be central while formatting labels is peripheral. These categories are not permanent properties of a task.

### Prior expertise

A beginner might benefit from a complete worked example, then learn by explaining and reconstructing it. An experienced learner might delegate routine steps but fail to notice an AI error. An expert in writing can still be a novice in statistics.

Nakamura's 2026 theoretical review proposes that offloading outcomes depend on factors including goals, expertise and monitoring. These are **propositions to investigate**, not experimentally established rules.

## Elaborate: test and revise the principle

```step
stage: make
tier: typical
check: { type: reflect, text: "I defended or refined a conditional principle about offloading after considering goals and prior expertise." }
```

Test the rule **"Keep the important thinking and delegate the rest"** against two counterexamples:

- A novice learns from a complete worked example. Was receiving the full solution necessarily harmful?
- An expert uncritically accepts an AI-generated counterargument that cites a nonexistent source. Did expertise guarantee good judgement?

Try transferring the principle: a student developing a game uses generated collision code. Is that thinking central when learning to program? What if their goal is testing which game mechanics players enjoy? You need no programming knowledge to discuss these different purposes.

Propose a more conditional rule, and identify a situation in which it might fail.

## Evaluate: what would count as evidence?

```step
stage: info
check:
  type: question
  q: "What most directly helps establish whether offloading supported the intended learning?"
  options: ["Only the speed of completion", "What thinking the learner undertook and evidence of the intended capability", "The number of AI messages"]
  answer: 1
```

**Next question:** If assistance is appropriate, why assume generative AI is the best way to provide it?
