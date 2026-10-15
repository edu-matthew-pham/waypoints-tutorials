---
title: What should you let AI do?
summary: Decide when to work independently, seek assistance or delegate a task based on the purpose and what must be checked.
language: science
unit: learning-effectively-with-ai
order: 3
voice: { name: bf_emma, speed: 1.05 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Choose what thinking to keep"
  say: "Whether to delegate a task depends on your purpose."
  clip:
    - caption: { text: "First identify whether your goal is learning or completing a task." }
    - wait: 1000
    - caption: { text: "Decide which thinking you need to practise yourself." }
    - wait: 1000
    - caption: { text: "Delegate only what is appropriate, then check the result." }
    - wait: 1000
---
AI can save time by carrying out repetitive work, generating options and explaining ideas. But completing a task is different from developing the ability to do it. **Deciding what to delegate is itself a skill.** It depends on your goal, current understanding, task expectations and the consequences of errors.

## Engage: would you delegate it?

```step
stage: predict
check:
  type: predict
  q: "You have already verified a list of dates and need to format it as a table. What might be sensible?"
  options: ["Ask AI to format the list, then check that each date is unchanged", "Ask AI to invent missing dates and trust them", "Never use tools for formatting"]
  actual: "Formatting may be a sensible task to delegate once the information is checked. The learner still checks the result."
```

## Explore: make context-sensitive decisions

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Evaluate at least two delegation decisions.", when: "t >= 2" }
```

The board presents prepared situations: practising mathematics, formatting a timetable, writing a science explanation and checking claims. For each, first identify the **goal**, then choose whether to work yourself, request assistance or delegate execution. Inspect the consequences and compare at least two situations. There is no universal rule that AI must always be used or avoided.

## Explain: what changes with the goal?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What matters most when deciding whether AI should complete a task for you?"
      options: ["Whether the task is long", "What you are trying to learn or achieve and what must be checked", "Whether AI can produce something quickly"]
      answer: 1
  - check:
      type: question
      q: "Which is an example of reasonable delegation?"
      options: ["Ask AI to format checked information, then verify the result", "Copy AI explanations as proof of your own understanding", "Treat generated facts as automatically reliable"]
      answer: 0
  - check: { type: reflect, text: "I can justify which parts of a task I would do, get help with or delegate." }
```

### Purpose

Is the immediate goal to build your capability, or to complete a task efficiently?

### Responsibility

What reasoning, evidence checking or judgement must remain yours?

### Decision

Which parts could you appropriately delegate, and how would you verify the outcome?

## Elaborate: design your own division of work

```step
stage: make
tier: typical
check: { type: reflect, text: "I completed and explained an independent application of this lesson." }
```

Choose an authentic school task. Divide it into **thinking you need to learn**, **assistance you could request** and **execution that may be safely delegated**. Explain how you will check anything produced by AI. Then consider how your choices would change if this were a timed performance task rather than a practice activity.

**Optional authentic comparison:** With a school-approved AI assistant, compare what happens in an actual interaction with what the prepared board suggests. Do not share sensitive information. Judge the result against your own learning purpose.

## Evaluate: decide independently

```step
stage: info
check:
  type: question
  q: "When should you decide what AI will do for you?"
  options: ["Only after you copy the final output", "By considering your learning goal, the task conditions and the need to check results", "Always ask AI to do as much as possible"]
  answer: 1
```

Without the board, describe one situation where delegation helps and another where it might undermine a specific learning goal. Explain the difference.

## Learning with AI: take responsibility for the outcome

```step
stage: info
check: { type: reflect, text: "I can explain what judgement and understanding should remain mine when using AI." }
```

Self-regulation is not simply doing everything alone. It is deciding when to attempt, when to ask for help and when to delegate. Even if AI performs some work, **you remain responsible for deciding whether the result is appropriate and sufficiently checked**.
