---
title: Does more interaction mean better learning?
summary: Compare behavioural interaction, cognitive engagement, instructional responsiveness and evidence of learning.
language: science
shape: 5e
unit: choosing-assistance
order: 2
voice: { name: af_heart, speed: 1.1 }
---
We can click many times, receive lots of feedback or have an extended conversation without necessarily learning more. But these experiences can also be useful. **What does an interaction contribute to learning?**

## Engage: a busy activity

```step
stage: predict
check:
  type: predict
  q: "One learner completes twenty rapid quiz questions. Another explains one worked example. What follows?"
  options: ["The quiz always teaches more", "The explanation always teaches more", "We need the learning goal and evidence of understanding; the activities demand different thinking"]
  actual: "Interaction counts do not show which intended capabilities developed."
```

**Provocation:** Blooket-style quizzes may encourage energetic participation and retrieval. When is this a strength—and when is it insufficient?

## Explore: inspect four kinds of assistance

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What does the rapid quiz illustration most clearly provide?"
      options: ["Retrieval opportunities and correctness feedback", "A guaranteed correction of every misconception", "Evidence of long-term retention"]
      answer: 0
  - check:
      type: question
      q: "What does the worked example invite the student to do?"
      options: ["Receive points", "Study a pattern and explain its meaning", "Ask unlimited follow-up questions"]
      answer: 1
  - check:
      type: question
      q: "What can predetermined feedback do without generative AI?"
      options: ["Identify a selected error and suggest a targeted next step", "Understand every possible question", "Guarantee transfer"]
      answer: 0
  - check:
      type: question
      q: "What might conversational AI add?"
      options: ["Infallibility", "Flexible responses to unfamiliar follow-up questions", "Proof that learning persists"]
      answer: 1
```

These are **authored illustrations** of assistance, not actual outputs from commercial products and not a comparison experiment.

### A — game-like retrieval

A learner chooses the answer to (-3) × (-4). They select -12, receive **Incorrect; the answer is 12**, and move to another question. It provides retrieval and immediate correctness feedback, but this particular response does not explain the misconception.

### B — worked explanation

A student reads a number pattern: (-3) × 2 = -6, (-3) × 1 = -3, (-3) × 0 = 0. Continuing the pattern suggests (-3) × (-1) = 3. The learner explains what changes at each step. A pattern illustrates the rule; more reasoning may be needed to justify it fully.

### C — structured interactive tutorial

A student selects -12. The tutorial responds with a prepared message: **"You might be applying the sign rule for one negative number. Predict the next value in this pattern, then try again."** Targeted feedback is possible without generating free-form language.

### D — AI-style conversation

**Student:** "I remember the rule, but why does it make sense?"

**Illustrative tutor:** "Would a pattern, a visual example or an algebraic explanation help you explore that question?"

This depicts a *possible conversational affordance*, not a live AI interaction. Generated explanations may still be misleading, incomplete or unsuitable.

## Explain: distinguish four dimensions

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which is behavioural interaction?"
      options: ["Clicking an answer choice", "Guaranteed learning", "Delayed transfer"]
      answer: 0
  - check:
      type: question
      q: "Which question concerns cognitive engagement?"
      options: ["How many animations play?", "What must the student retrieve, explain, compare or revise?", "How colourful is the interface?"]
      answer: 1
  - check:
      type: question
      q: "What is instructional responsiveness?"
      options: ["Adapting feedback or next steps to the learner's response", "Loading a page rapidly", "Having many buttons"]
      answer: 0
  - check:
      type: question
      q: "Which is better evidence of learning than interaction count alone?"
      options: ["The number of clicks", "A sound explanation followed by an appropriately chosen later attempt", "The length of an AI conversation"]
      answer: 1
```

### Behavioural interaction

Visible participation such as answering, tapping or selecting. Useful participation does not alone tell us what the learner understands.

### Cognitive engagement

The thinking encouraged or required: recalling, interpreting, predicting, questioning, explaining or revising. Even substantial thinking during an activity is not proof of durable learning.

### Instructional responsiveness

How the learning experience responds to the learner: a fixed example, prepared misconception-specific feedback, adaptive sequencing or open-ended dialogue. More responsiveness is not invariably better.

### Evidence of learning

Appropriate new attempts, explanations and delayed checks can provide evidence that an intended capability is developing. No single measure captures everything.

## Elaborate: connect to real tools, challenge the ranking

```step
stage: make
tier: typical
check: { type: reflect, text: "I compared instructional affordances and challenged a simplistic ranking of interaction types." }
```

Real platforms include **Blooket, Mathspace, Education Perfect, Khan Academy, Brilliant and Quill**. They combine different kinds of instruction and some include AI features. Their capabilities change; these names are examples to explore, **not fixed categories or product endorsements**.

Consider two different learning goals:

- A student already understands negative multiplication but needs quick retrieval practice.
- Another confidently repeats the wrong sign rule and needs to reconstruct why it works.

Would you choose the same assistance? What if the AI explanation is inaccurate? What if a conventional interactive tutorial already addresses the misconception?

**Optional authentic exploration:** If your teacher approves and you already have access to a learning platform, inspect one feature and compare it with our simplified illustrations. No account, payment or external platform is required to complete this lesson.

## Evaluate: what does an interaction prove?

```step
stage: info
check:
  type: question
  q: "Which statement best distinguishes interaction and learning?"
  options: ["Highly interactive always means highly effective", "Interaction may support learning, but learning requires evidence appropriate to the goal", "Static explanations can never help"]
  answer: 1
```

**Next question:** If *how* assistance is structured matters, how might we deliberately design it?
