---
title: Why does AI make mistakes?
summary: Missing examples and incorrect labels can make a classifier unreliable.
language: science
unit: how-ai-learns
order: 2
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Investigate the model's decision"
  say: "Inspect the clues, then test the prediction."
  clip:
    - caption: { text: "This simple model uses only colour and shape." }
    - wait: 1100
    - caption: { text: "Its prediction is something to check, not automatically accept." }
    - wait: 1100
---
We are investigating how examples and clues influence predictions. This is a deliberately simplified teaching model, **not** a modern neural network.

## Engage: predict

```step
stage: predict
check:
  type: predict
  q: "A fruit sorter has never seen a green banana. Will it necessarily classify one correctly?"
  options: ["Yes, all bananas are recognised","No, unfamiliar examples can cause mistakes","Yes, because labels are always correct"]
  actual: "No, unfamiliar examples can cause mistakes"
```

## Explore: test a fruit sorter

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: board, text: "Test at least two fruits.", when: "t >= 2" }
```

Predict first. Choose a fruit's colour and shape, press **Predict label**, and compare the result with what you expected. Real fruit varies: these two clues are not always sufficient.

Inspect the training examples and their labels. Change one example or label, then test again.

**Alternative or extension:** With school approval, use [Teachable Machine](https://teachablemachine.withgoogle.com/) to train a fruit image classifier and test unfamiliar photos. Compare its behaviour with the Waypoints board. No external tool or account is required for the core route; the two models are not technically equivalent.

## Explain: what changed?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "A banana example was labelled apple. What might happen?"
      options: ["The incorrect label could mislead the model","Nothing: labels do not matter","The model becomes perfectly accurate"]
      answer: 0
  - check:
      type: question
      q: "Why might a model fail even with many examples?"
      options: ["Its examples might not represent the new case","More examples always guarantee success","A confident prediction is always true"]
      answer: 0
  - check: { type: reflect, text: "I can explain one model prediction and one limitation." }
```

### Evidence

Which examples or clues influenced the model?

### Limits

Why might a prediction be wrong even when the procedure runs correctly?

### Your explanation

Explain one test you could perform before relying on the prediction.

## Elaborate: change the model

```step
stage: modify
tier: typical
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: reflect, text: "I changed the model, tested the outcome and explained what happened." }
```

Remove an example, then add a misleading label. Test the same fruit before and after each change. Restore the examples when finished.

**Wider investigation:** Find a case where colour and shape are insufficient. What extra clue or different training example could help? Would that guarantee success?

## Evaluate: independent judgement

```step
stage: info
check:
  type: question
  q: "A classifier gives a wrong answer. What should you check?"
  options: ["Only the number of predictions","Examples, labels, features and the new test case","Nothing, because it is automated"]
  answer: 1
```

Without the board, write: **The model predicted … because … . I would check … before accepting that answer.**

## Learning with AI: calibrated trust

```step
stage: info
check: { type: reflect, text: "I considered what evidence to check and what thinking to retain when using AI." }
```

A real AI assistant may produce a convincing answer without showing the data and mechanisms behind it. What evidence would help you decide whether its answer is useful for your task? What thinking should remain yours if your goal is to learn?

**Important:** Better data improves the chances of useful results, but does not guarantee them. Poor data can explain some failures, but other limitations also matter.
