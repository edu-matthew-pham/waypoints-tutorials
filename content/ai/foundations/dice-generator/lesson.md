---
sources:
  - { title: "Swift (2026), LLMs Unplugged (peer-reviewed conference paper)", url: "https://doi.org/10.1145/3786228.3786237", checked: 2026-10-15 }
  - { title: "LLMs Unplugged teaching resources (CC BY-SA 4.0)", url: "https://www.llmsunplugged.org/", checked: 2026-10-15 }
title: Build a text generator with dice
summary: Turn word frequencies into dice outcomes, then sample words without always picking the most common one.
language: science
unit: text-generation
order: 2
---
Last lesson, we counted six endings: **mat, mat, mat, chair, chair, roof**. Now we will use a six-sided die to choose one of those endings.

This is a **toy probabilistic text generator**, not a miniature LLM. You can do it with paper and a physical die.

## Engage: is the most likely outcome certain?

```step
stage: predict
check:
  type: predict
  q: "If three faces on a die mean 'mat', two mean 'chair' and one means 'roof', what happens when you roll?"
  options: ["You always get mat", "You could get any of the three words", "You always get roof"]
  actual: "Any of the three words can occur. Mat is most likely, but no outcome is guaranteed."
```

## Explore: build the lookup table

```step
stage: run
check:
  type: question
  q: "Which assignment matches the counts mat = 3, chair = 2, roof = 1?"
  options: ["1–3 mat; 4–5 chair; 6 roof", "1 mat; 2 chair; 3–6 roof", "1–2 mat; 3–4 chair; 5–6 roof"]
  answer: 0
```

Copy this table into your book:

| Die result | Next word |
|---|---|
| 1, 2, 3 | mat |
| 4, 5 | chair |
| 6 | roof |

Roll a die **ten times**, recording each result and the chosen word. If you have no physical die, use a teacher-provided virtual die. Keep the lookup table unchanged.

Compare with a partner. Did you get identical results? Does a short run always match the expected 3:2:1 ratio?

## Explain: sampling

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is the chance of getting 'chair' on one roll?"
      options: ["1/6", "2/6", "3/6", "5/6"]
      answer: 1
  - check:
      type: question
      q: "Why might ten rolls produce no 'roof' outcomes?"
      options: ["Roof is impossible", "Random samples need not match the expected proportions exactly", "The lookup table changes after each roll"]
      answer: 1
  - check: { type: reflect, text: "I can map a frequency to dice faces and explain why sampled results vary." }
```

Choosing an outcome according to its assigned probability is called **sampling**. A model can use sampling instead of always selecting the single most frequent word.

Our model only chooses **one word after one fixed phrase**. A larger word-transition model would use the newly chosen word to look up another set of possible next words. That is still far simpler than a modern LLM.

## Elaborate: change the model

```step
stage: modify
check:
  type: question
  q: "A new collection has 2 mat, 3 chair and 1 roof. Which assignment matches it?"
  options: ["1–2 mat; 3–5 chair; 6 roof", "1–3 mat; 4–5 chair; 6 roof", "1 mat; 2–3 chair; 4–6 roof"]
  answer: 0
```

Make a new lookup table and roll five times. Explain what changed: the die, the sampling procedure or the model's examples?

## Evaluate: explain an unexpected outcome

```step
stage: info
check:
  type: question
  q: "Your model produces 'roof' twice in a row. What can you conclude?"
  options: ["The model is broken", "Roof has become the most likely ending", "An unlikely result can happen without changing the probabilities"]
  answer: 2
```

Write one sentence distinguishing **probability** from **what actually happened** in your rolls.

**Next:** let a computer repeat this same sampling procedure, and decide what understanding you must keep.
