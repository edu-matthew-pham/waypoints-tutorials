---
sources:
  - { title: "Swift (2026), LLMs Unplugged (peer-reviewed conference paper)", url: "https://doi.org/10.1145/3786228.3786237", checked: 2026-10-15 }
  - { title: "AI4K12, Grade Band Progression Charts", url: "https://ai4k12.org/gradeband-progression-charts/", checked: 2026-10-15 }
  - { title: "UNESCO, AI Competency Framework for Students (2024)", url: "https://www.unesco.org/en/articles/ai-competency-framework-students", checked: 2026-10-15 }
title: Can you predict the next word?
summary: See how examples influence which words seem likely to come next, without assuming that the most likely word is certain.
language: science
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
unit: text-generation
hook: "A phone suggests the next word as you type. Is it predicting what you mean, or using patterns from examples?"
time: 20
misconceptions:
  - "Most likely means certain."
  - "The generator understands what the writer intends."
  - "Changing the examples cannot change the model's prediction."
leads: "Follow with the dice sampling lesson. Ask students to bring a physical die; no online AI account is needed."
exit: { q: "If the most common ending appears 3 times in 6 examples, must it be selected?", a: "No. It has probability 3/6 under our sampling rule; other endings remain possible." }
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

Write down one ending of your own **before looking at any examples**. Why did you choose it? Keep your answer to revisit later.

## Explore: change the examples

```step
stage: run
insight: "Students change example endings and inspect how word frequencies change the prediction."
try: { playground: board, starter: "boards.yml", height: 590 }
check: { type: board, text: "Add five roof examples and update the model.", when: "c >= 1 and r = 1 and n >= 11" }
```

Start with **mat = 3**, **chair = 2**, **roof = 1**. Predict the most frequent ending, then add five more lines containing **roof**. Press **Update examples** and explain why the prediction changes.

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

Modern language models use tokens, neural networks and much more complex learned representations of context. Our small counting model is a way to investigate one idea: **possible next words can have different probabilities**.

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

**Without looking at the table**, explain why a text generator might produce different endings for the same beginning. Then return to your first prediction: would you change it? Why?

**For teachers:** This is an intentionally transparent, fixed-context frequency model. Ask learners to justify answers using *counts* rather than guesses about the writer's intentions. The next lesson introduces sampling; the later interactive board should allow students to edit examples and immediately inspect the resulting counts. Do not describe this toy model as the mechanism used by a modern LLM.

**Next:** use dice to make a choice according to these probabilities.
