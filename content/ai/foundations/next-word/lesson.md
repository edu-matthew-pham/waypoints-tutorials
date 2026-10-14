---
title: Can you predict the next word?
summary: See how examples influence which words seem likely to come next, without assuming that the most likely word is certain.
language: science
unit: text-generation
order: 1
---
A sentence can have more than one sensible next word. A text generator needs a way to choose between possibilities.

## Engage: finish the sentence

```step
stage: predict
check:
  type: predict
  q: "Which word must come next after 'The cat sat on the'?"
  options: ["mat", "chair", "roof", "There is no single word that must come next"]
  actual: "There is no single word that must come next. Several endings are possible, even if some are more familiar."
```

Write down one ending of your own. Why did you choose it?

## Explore: count the examples

```step
stage: run
check:
  type: question
  q: "In these six examples, what word follows 'the cat sat on the' most often? mat, mat, chair, mat, roof, chair"
  options: ["mat", "chair", "roof", "All equally often"]
  answer: 0
  feedback: [null, "Chair occurs twice; count mat again.", "Roof occurs once.", "The counts are different."]
```

Count the endings yourself: **mat = 3**, **chair = 2**, **roof = 1**. These are examples from a tiny, invented collection, not a claim about how people normally write.

What would change if we added five more examples ending in *roof*?

## Explain: patterns are not rules

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "If mat follows the phrase in 3 of 6 examples, what fraction of the examples end in mat?"
      options: ["1/2", "1/3", "1/6", "3/2"]
      answer: 0
  - check:
      type: question
      q: "Does 'mat' being most common mean the next word must be 'mat'?"
      options: ["Yes, the most common word is always correct", "No, other endings are possible"]
      answer: 1
  - check: { type: reflect, text: "I can explain the difference between a frequent ending and a certain ending." }
```

A simple model can count which words followed a phrase in its examples. It can use those counts to assign **probabilities** to possible next words. Here, mat has a probability of 3/6, chair 2/6 and roof 1/6 *if we choose an ending in proportion to its frequency in these examples*.

A probability is not a promise. The most likely choice is not the only possible choice.

Modern language models use much more complex learned representations and consider a wider context. Our small counting model is a way to investigate one idea: **possible next words can have different probabilities**.

## Elaborate: change the evidence

```step
stage: modify
check:
  type: question
  q: "Five more 'roof' endings are added. Which ending is now most common?"
  options: ["mat", "chair", "roof", "They are still equal"]
  answer: 2
  feedback: ["Mat still occurs 3 times; roof now occurs 6.", "Chair still occurs twice.", null, "Count each ending after the new examples."]
```

Discuss: does changing the examples change the meaning of the sentence, or just the pattern our model has learned from them?

## Evaluate: a new pattern

```step
stage: info
check:
  type: question
  q: "A model sees 'I drink' followed by water four times and juice once. Which statement is justified?"
  options: ["Water is guaranteed to come next", "Water is more frequent in these examples, but juice remains possible", "Juice is impossible", "The model knows what the writer wants"]
  answer: 1
```

In your own words: explain why a text generator might produce different endings for the same beginning.

**Next:** use dice to make a choice according to these probabilities.
