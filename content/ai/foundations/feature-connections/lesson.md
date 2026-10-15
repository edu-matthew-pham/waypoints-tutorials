---
title: How do models combine clues?
summary: Explore how colour and shape influence an inspectable weighted decision.
language: science
unit: how-ai-learns
order: 3
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Combining clues"
  say: "Two clues can influence one decision."
  clip:
    - caption: { text: "Colour and shape each contribute to a score." }
    - wait: 1100
    - caption: { text: "Changing a weight can change the decision, not the fruit." }
    - wait: 1100
---
Our previous model used labelled examples. Now we will investigate how **several clues can contribute to one decision**. This is one hand-adjusted decision unit, **not a trained neural network**.

## Engage: predict

```step
stage: predict
check:
  type: predict
  q: "A fruit is yellow but round. Is colour alone enough to identify it?"
  options: ["Always", "Not necessarily: several clues may matter", "Yes, yellow always means banana"]
  actual: "Several clues may help, but cannot guarantee a correct label."
```

## Explore: combine clues

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: board, text: "Test at least two fruit descriptions.", when: "t >= 2" }
```

Predict the result before testing a green, round fruit and a yellow, long fruit. Then try a yellow, round fruit. Change the **colour** and **shape** weights using **More** and **Less**. These are weights you set by hand, not weights learned from examples.

## Explain: which clues matter?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What happens when you increase the colour weight?"
      options: ["Colour influences the decision more", "The unit automatically learns from new photos", "The fruit changes colour"]
      answer: 0
  - check:
      type: question
      q: "Is this decision unit a complete neural network?"
      options: ["Yes", "No: real neural networks can learn many interacting parameters", "Yes, because it has two clues"]
      answer: 1
  - check: { type: reflect, text: "I can explain how two clues contribute to a decision." }
```

### Clues

Which clues contribute to the score?

### Weights

Why can changing a weight change the prediction?

### Limits

Why might the prediction still be wrong?

Real neural networks can learn many interacting weights from examples and use layers to represent more complicated patterns. Our board shows only **combining features**, not neural-network training.

## Elaborate: change the decision

```step
stage: modify
tier: typical
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: reflect, text: "I changed the weights, tested the same fruit and explained the difference." }
```

Find two settings that produce different predictions for the same yellow, round fruit. Explain what changed and what did not change.

**Wider investigation:** Could two different fruits share both clues? Suggest a third clue. Why would that still not guarantee a correct answer?

**Optional authentic comparison:** With school approval, train an image classifier using [Teachable Machine](https://teachablemachine.withgoogle.com/) and test unfamiliar photos. Unlike our hand-adjusted unit, the image model learns from examples.

## Evaluate: check the output

```step
stage: info
check:
  type: question
  q: "A model produces a convincing fruit label. What does that establish?"
  options: ["It must be correct", "It is a prediction to evaluate against evidence", "The model understands fruit"]
  answer: 1
```

Without the board, explain how changing the importance of a clue can affect a prediction.

## Learning with AI: keep your judgement

```step
stage: info
check: { type: reflect, text: "I considered what evidence to check and what thinking to retain when using AI." }
```

AI systems can use richer patterns than this model, but still have blind spots. When using AI to learn, what should you check before accepting its output? What understanding should remain yours?
