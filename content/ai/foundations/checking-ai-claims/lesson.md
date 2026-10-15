---
title: How do you know whether AI is right?
summary: Compare confident claims with independent evidence and distinguish supported, contradicted and insufficiently evidenced statements.
language: science
unit: learning-effectively-with-ai
order: 2
voice: { name: bf_emma, speed: 1.05 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Evidence before confidence"
  say: "A convincing answer is not the same as a verified answer."
  clip:
    - caption: { text: "Read the claim without assuming it is accurate." }
    - wait: 1000
    - caption: { text: "Compare it with a separate, inspectable record." }
    - wait: 1000
    - caption: { text: "Decide what the evidence supports and what remains uncertain." }
    - wait: 1000
---
A useful AI response may still include mistakes, overgeneralisations or unsupported claims. **Fluent language and confidence are not evidence.** In this lesson, you will investigate what a supplied record actually supports. Real verification often requires checking reliable, independent sources.

## Engage: does it sound right?

```step
stage: predict
check:
  type: predict
  q: "An AI response claims that every seedling given more light grew taller. What evidence would you need?"
  options: ["A confident tone", "Measurements for the groups being compared", "A longer AI explanation"]
  actual: "You need relevant measurements. Even then, a limited dataset may not justify a claim about every possible seedling."
```

## Explore: test claims against records

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Check at least two claims against the supplied measurements.", when: "t >= 2" }
```

The board shows **invented classroom measurements** of seedlings and several AI-style claims about them. The data are separate from the claims, so you can independently compare the words with the numbers. Choose each claim, decide whether the evidence **supports**, **contradicts**, or **cannot establish** it, and explain why. Some claims are carefully limited; others go beyond what was measured. Do not treat the invented observations as real scientific findings.

## Explain: what does the evidence establish?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why is a fluent answer not enough to establish truth?"
      options: ["It may contain claims that are untested or unsupported", "Long sentences are always wrong", "An AI cannot ever be useful"]
      answer: 0
  - check:
      type: question
      q: "A dataset records plant height but not plant health. Can it confirm that one group is healthier?"
      options: ["Yes, height always equals health", "No, health needs relevant evidence beyond these heights", "Yes, if AI says so"]
      answer: 1
  - check: { type: reflect, text: "I can distinguish claims supported by evidence from claims that need more checking." }
```

### Identify the claim

Which words in the statement require evidence, such as *all*, *always*, or *average*?

### Examine evidence

What observations actually support or challenge the claim?

### Decide the limit

What might remain unknown even if the recorded observations agree with a narrower claim?

## Elaborate: investigate a new claim

```step
stage: make
tier: typical
check: { type: reflect, text: "I completed and explained an independent application of this lesson." }
```

Create a short table of fictional observations (for example, time spent practising and quiz results). Write one claim that the table supports and one that it does **not** justify. Swap with a partner, who must explain what the evidence can and cannot establish. For claims about the real world, use appropriate trustworthy sources rather than invented data.

**Optional authentic comparison:** With a school-approved AI assistant, compare what happens in an actual interaction with what the prepared board suggests. Do not share sensitive information. Judge the result against your own learning purpose.

## Evaluate: decide independently

```step
stage: info
check:
  type: question
  q: "An AI gives a confident answer and cites no checkable evidence. What should you do for an important claim?"
  options: ["Accept the confidence as proof", "Compare the claim with an independent reliable source or relevant data", "Ask it to repeat the claim more forcefully"]
  answer: 1
```

Without using the board, explain why *supported by these observations* is different from *always true*. Identify one way to verify a claim independently.

## Learning with AI: independent checking matters

```step
stage: info
check: { type: reflect, text: "I can explain what judgement and understanding should remain mine when using AI." }
```

An AI can help you identify questions to investigate, but **asking the same model to confirm itself is not independent verification**. For consequential claims, inspect the original evidence or trustworthy sources. Even apparently credible citations may be missing, irrelevant or misrepresented.
