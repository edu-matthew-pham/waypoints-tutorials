---
title: Decide what to hand over
summary: Decide when to work independently, seek assistance or delegate a task based on the purpose and what must be checked.
language: science
shape: 5e
unit: learning-effectively-with-ai
order: 3
voice: { name: af_heart, speed: 1.1 }
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
AI learns patterns from examples, so it is often good at routine, well-practised jobs, and it can still be wrong on something new or unusual. AI can save time by carrying out repetitive work, generating options and explaining ideas. But completing a task is different from developing the ability to do it. **Deciding what to delegate is itself a skill.** It depends on your goal, current understanding, task expectations and the consequences of errors.

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
      q: "On the board, the timetable dates were already checked. Why is formatting them a reasonable job to hand over?"
      options: ["Formatting isn't the skill you're learning, and you can check the dates didn't change", "Formatting is too boring to do yourself", "AI never makes mistakes with dates"]
      answer: 0
      feedback: [null, "Boring isn't the reason. What matters is whether it is the skill you're learning.", "AI can change or invent dates. That's why you check."]
  - check:
      type: question
      q: "On the board, your goal is to understand controlled variables. Which choice keeps the thinking you need?"
      options: ["Write your own explanation, then ask for feedback", "Ask AI to write the explanation to hand in", "Ask AI for a summary of a different experiment"]
      answer: 0
      feedback: [null, "Then the explanation, and the understanding, are the AI's.", "That doesn't help with your goal."]
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

## Evaluate: decide independently

```step
stage: info
tasks:
  - check:
      type: sort
      q: "Your goal: learn to write science explanations. What would you do with each part of your seedling report?"
      options: ["Do it myself", "Ask for a hint or feedback", "Hand over, then check"]
      items:
        - ["Write why the 8-hour seedlings grew taller", "Do it myself", "Writing explanations is the skill you are learning."]
        - ["Turn your checked measurements into a neat table", "Hand over, then check", "Tables are not today's skill. Check that no number changed."]
        - ["You are not sure your explanation makes sense", "Ask for a hint or feedback"]
        - ["Check the spelling", "Hand over, then check"]
  - check:
      type: sort
      q: "Same report, new goal: learn to make tables from data. What would you do with each part now?"
      options: ["Do it myself", "Ask for a hint or feedback", "Hand over, then check"]
      items:
        - ["Write why the 8-hour seedlings grew taller", "Do it myself", "It is still your report, so the thinking about your results stays yours."]
        - ["Turn your checked measurements into a neat table", "Do it myself", "Now tables are the skill you are learning, so you keep this part."]
        - ["You are not sure which columns your table needs", "Ask for a hint or feedback"]
        - ["Check the spelling", "Hand over, then check"]
```

Without the board, describe one situation where delegation helps and another where it might undermine a specific learning goal. Explain the difference.

### Goal 1: learning to explain

Sort each part of the report. Which parts are the skill you are practising?

### Goal 2: learning to make tables

The task is the same. What moved, and what stayed yours?

## Learning with AI: take responsibility for the outcome

```step
stage: info
check: { type: reflect, text: "I can say what I would hand over, what I would keep, and how I would check the result." }
```

Self-regulation is not simply doing everything alone. It is deciding when to attempt, when to ask for help and when to delegate. Even if AI performs some work, **you remain responsible for deciding whether the result is appropriate and sufficiently checked**.
