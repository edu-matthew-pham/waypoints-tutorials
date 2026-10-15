---
title: How does a machine learn?
summary: Teach a simple fruit sorter using labelled examples, then test unfamiliar fruit.
language: science
unit: how-ai-learns
order: 1
voice: { name: bf_emma, speed: 1.05 }
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

**Alternative or extension:** With teacher approval, use [Teachable Machine](https://teachablemachine.withgoogle.com/) to train an image classifier with two fruit classes, then test photos that were **not** used in training. Use the same questions: What examples were used? What did the model predict? What surprised you? If access, images or permissions are unavailable, the Waypoints board is the complete core route. A real image classifier learns much richer features than this board.

## Explain: what did the model use?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is a label?"
      options: ["The category attached to a training example","A guarantee that a prediction is correct","The colour of every fruit"]
      answer: 0
  - check:
      type: question
      q: "Why test a new example?"
      options: ["To see whether the model works beyond its training examples","To prove it never makes mistakes","To replace all training examples"]
      answer: 0
  - check: { type: reflect, text: "I can explain a prediction and name one limitation of the model." }
```

### Identify the evidence

Explain which examples or clues the model used.

### Test the claim

Explain why a prediction can be wrong even when the model follows its procedure.

### Explain in your own words

Describe one way you could test or improve the model without automatically trusting its output.

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
  q: "A model labels a yellow, round fruit as an apple. What should you do?"
  options: ["Accept it because a model said so","Check the example and consider what the model was trained on","Assume all classifiers are useless"]
  answer: 1
```

Without using the model, write: **One thing I understand about how this model works is … One thing I would check before trusting its output is …**

## Learning with AI: retain your judgement

```step
stage: info
check: { type: reflect, text: "I considered what evidence to check and what thinking to retain when using AI." }
```

An AI assistant gives a confident answer about a fruit photograph. You cannot see all its training data. What would you need to check before accepting the label? If the aim is to **learn classification**, which decisions should you practise yourself before asking for help?

**Remember:** Better data often improves a model, but cannot guarantee a good result. Poor data can contribute to mistakes, but it is not the only possible cause.
