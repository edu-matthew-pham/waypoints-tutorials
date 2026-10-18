---
title: How do models combine clues?
summary: Explore how colour and shape influence an inspectable weighted decision.
language: science
shape: 5e
unit: how-ai-learns
order: 6
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

Predict the result before testing a green, round fruit and a yellow, long fruit. Then try a yellow, round fruit. Change the **colour** and **shape** weights using **More** and **Less**. These are weights you set by hand, not weights learned from examples. If the score is exactly 0, the two clues cancel out and the unit says **unsure**.

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
      q: "Set the colour weight to 0 and the shape weight to 2. What does the unit predict for a yellow, round fruit?"
      options: ["apple", "banana", "unsure"]
      answer: 0
      feedback: [null, "With colour weight 0, yellow adds nothing. Round pushes the score below zero.", "Try it on the board: the score is below zero."]
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

## Evaluate: check the output

```step
stage: info
check:
  type: question
  q: "With colour weight 3 and shape weight 1, the unit calls a yellow, round fruit a banana. What does this show?"
  options: ["The weights trust colour much more than shape, so colour decides", "Yellow, round fruits are bananas", "The unit learned this from examples"]
  answer: 0
  feedback: [null, "The label comes from the weights you set, not from what the fruit really is.", "You set these weights by hand. Nothing was learned from examples."]
```

Without the board, explain how changing the importance of a clue can affect a prediction.

## Learning with AI: hidden weights

```step
stage: info
check: { type: reflect, text: "I can explain how weights I can't see could tilt an AI's answer." }
```

Here you could see both weights and change them. A real AI weighs millions of clues, and nobody can read all its weights. A clue that is weighted too heavily can tilt its answer the wrong way, just as colour did here. So treat its answer as a prediction to check, not a fact.
