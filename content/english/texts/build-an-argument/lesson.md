---
order: 9
unit: challenge
title: "Challenge: build an argument"
summary: "The course challenge, following the genre cycle. Students take a model argument apart (position, reasons, restated position), put Nib's jumbled argument back in order, choose the joining words that carry an argument from reason to reason, then build their own argument on the board and check it with a partner."
language: maths
node: [AC9E6LA03 n2, AC9E7LA03 n1, AC9E8LA03 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "The position says what the writer wants, a reason backs it up with evidence, and the restated position presses the point again at the end." }
hook: "You want your school to change one thing. You get one page to convince the principal. How do you build it?"
---
An **argument** tries to convince the reader. It has three stages:

- **Position:** what you want, in one clear sentence.
- **Reasons:** each one in its own paragraph, with evidence.
- **Restated position:** the point again, so the reader leaves with it.

In this challenge you take a model apart, fix Nib's, then build your own.

## Predict: what does an argument need?

```step
stage: predict
insight: "Naming an argument's stages before seeing the model makes the challenge a test of what they've learned."
check:
  type: predict
  q: "You're writing to the principal to ask for more trees in the playground. Which plan will convince them best?"
  options: ["What you want, your reasons with evidence, then what you want again", "A story about a hot day, and nothing else", "Facts about trees, with no request", "Your request, said three times in a row"]
  actual: "What you want, your reasons with evidence, then what you want again: the stages of an argument. A story might help as an opening, but on its own it doesn't ask for anything."
```

## Part 1: take the model apart

```step
stage: practise
insight: "Labelling a model argument's stages is the 'deconstruction' step of the genre cycle: see the plan before using it."
try: { playground: board, starter: "text.yml#model", height: 470 }
hint: ["Click a paragraph, then choose Position, Reason or Restated position.", "The first and last paragraphs both say what the writer wants. The last one also sums up the reasons."]
smaller:
  check: { type: question, q: "'Our school should plant twenty more trees around the playground.' What job does this sentence do?", options: ["It gives the position", "It gives a reason", "It restates the position at the end"], answer: 0, feedback: [null, "A reason says why. This says what the writer wants.", "It comes first, before any reasons."], explain: "It says what the writer wants, so it is the position." }
check: { type: board, text: "Label the position, the two reasons and the restated position.", when: "n_right = 4 and n_wrong = 0", explain: "The position comes first. Each reason has its own paragraph with evidence (hot asphalt, cooler air and calm). The last paragraph sums up the reasons and presses the request again." }
```

## Part 2: put Nib's argument in order

```step
stage: practise
insight: "Reordering Nib's jumbled argument is the joint construction step: fix a draft together before writing alone."
try: { playground: board, starter: "text.yml#order", height: 440 }
hint: ["Click a paragraph, then press Move up or Move down.", "Start with the sentence that says what Nib wants. End with the one that sums up and asks again."]
check: { type: board, text: "Put Nib's argument in order: position, the reasons, then the restated position.", when: "in_order = 1", explain: "The position tells the reader what Nib wants before any reasons arrive. Wet and scratched bikes comes before also encouraging riding, because also adds a second reason to the first. The restated position sums up both." }
```

## Part 3: carry the reader from reason to reason

```step
stage: practise
insight: "Choosing joining words inside an argument shows how the reasons are linked and how the ending follows from them."
try: { playground: board, starter: "text.yml#joins", height: 300 }
hint: ["For each gap, ask: is this the first reason, another reason, or what follows from all of them?", "Therefore says the request follows from the reasons."]
check: { type: board, text: "Choose a joining word for each gap.", when: "n_gaps_right = 3", explain: "Firstly introduces the first reason, In addition adds a second, and Therefore says the request follows from them. The joining words show the argument's plan." }
```

## Part 4: build your own

```step
stage: make
insight: "Writing their own argument on the board is the independent construction step: the stages are theirs to use."
try: { playground: board, starter: "text.yml#make", height: 520 }
hint: ["Choose one change you'd like at your school. Click the first box and write your position in one sentence.", "Write two reasons, each with a piece of evidence, then a restated position. Label each part. Add a box if you need one."]
check: { type: board, text: "Write a position, at least two reasons and a restated position, and label each one.", when: "has_position = 1 and has_reason >= 2 and has_restate = 1 and n_empty = 0", explain: "Your argument has all its stages. Now check it with a partner using the checklist below." }
```

The board checks that each stage is there and labelled. With a partner, check the rest:

- Is the position one clear sentence?
- Does each reason have a piece of evidence?
- Does the restated position sum up the reasons, without adding a new one?

## In your own writing

```step
stage: make
tier: typical
insight: "Planning a real argument with the stages first is the course's transfer step."
check: { type: reflect, text: "Before writing my next argument or persuasive piece, I planned it as position, reasons with evidence, and restated position, then checked my draft against that plan." }
```
