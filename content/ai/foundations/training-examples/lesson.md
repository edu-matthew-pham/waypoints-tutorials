---
title: How does a machine learn?
summary: Teach a simple fruit sorter using labelled examples, then test unfamiliar fruit.
language: science
shape: 5e
unit: how-ai-learns
order: 4
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "What do examples and labels teach?"
  say: "What do examples and labels teach?"
  clip:
    - caption: { text: "A model uses examples and labels to decide how to classify new cases." }
    - wait: 1200
    - caption: { text: "Test unfamiliar cases; a prediction is not a guarantee." }
    - wait: 1200
---

We are moving beyond choosing words with dice. Now we will investigate how a model uses **examples and clues** to classify something new. Our Waypoints model is deliberately simplified: it is **not** a modern neural network.

**Kind of AI:** a model that **learns to predict or sort** from labelled examples. Unit 1's generator was a different kind: one that **makes new content**.

## Engage: predict before testing

```step
stage: predict
check:
  type: predict
  q: "A sorter has only seen yellow, long bananas. Can it reliably recognise every banana?"
  options: ["Yes, it has learned what every banana looks like","Not necessarily: unfamiliar bananas may look different","It will always choose the right label"]
  actual: "Not necessarily. The examples shape the patterns it uses, and real bananas vary."
```

## Explore: investigate a fruit sorter

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: board, text: "Test at least two fruits with different clues.", when: "t >= 2" }
```

The model sees only two clues: **colour** (green or yellow) and **shape** (round or long). Real fruits are more varied. Predict its answer first, then choose clues and press **Predict label**. Compare the result with your prediction.

Look at the labelled examples. Test a yellow, long fruit and a green, round fruit. What does the model do when the clues do not clearly match one kind?

## Explain: what did the model use?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "On the board, one training example reads: yellow | round | apple. Which part is the label?"
      options: ["apple","yellow","round"]
      answer: 0
      feedback: [null, "Yellow is a clue the sorter looks at. The label is the answer it is taught.", "Round is a clue the sorter looks at. The label is the answer it is taught."]
  - check:
      type: question
      q: "No training example is green and long. You test a green, long fruit and the sorter says banana. What does that show?"
      options: ["It can sort at least one fruit it was never shown","It will be right about every fruit","Green, long fruits are always bananas"]
      answer: 0
      feedback: [null, "One right answer doesn't show it will always be right.", "In real life a green, long fruit could be many things. The sorter just copied its nearest examples."]
  - check: { type: reflect, text: "I can explain a prediction and name one limitation of the model." }
```

### Identify the evidence

Explain which examples or clues the model used.

### Test the claim

Explain why a prediction can be wrong even when the model follows its procedure.

### Explain in your own words

Describe one way you could test or improve the model without automatically trusting its output.

When the sorter answers for a green, long fruit it was never shown, it is **generalising**: using what similar examples have in common to handle something new. Remember the dice lookup table from Unit 1? It had no row for a new phrase, so it was stuck. A model that generalises is not stuck, but it can still be wrong.

Examples and labels shape predictions; a test case is not automatically proof. The toy sorter compares simple clues with nearby examples, rather than training a neural network.

## Elaborate: change and test

```step
stage: modify
tier: typical
try: { playground: board, starter: "boards.yml#explore", height: 600 }
check: { type: reflect, text: "I changed the model, tested a prediction and explained what changed." }
```

Add a correctly labelled example of a yellow, round banana. Test the same clues before and after adding it. Explain what changed.

**Wider investigation:** Try a case where the same two clues could describe different real fruits. What additional information might help? Explain why a better dataset may help without guaranteeing a correct answer.

## Evaluate: judge a new prediction

```step
stage: info
check:
  type: question
  q: "Your friend's sorter was taught only yellow fruit. It calls a green, round fruit a banana. What is the most likely reason?"
  options: ["It had no green examples, so it copied the nearest yellow ones","Sorters can't handle green fruit","Your friend tested it the wrong way"]
  answer: 0
  feedback: [null, "Give it green examples and it can sort green fruit.", "The test was fine. Look at what the sorter was taught."]
```

Without using the model, write: **One thing I understand about how this model works is … One thing I would check before trusting its output is …**

## Learning with AI: you can't see its examples

```step
stage: info
check: { type: reflect, text: "I can explain why an AI's answer depends on examples I usually can't see." }
```

On the board you could see every example. A real AI assistant learned from far more examples than you could ever read, and you can't see them. So when it gives you a confident answer, ask: *what might it have learned from?* Better examples often help a model, but they can't guarantee a good answer.
