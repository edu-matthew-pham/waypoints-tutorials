---
order: 11
unit: challenge
title: "Challenge: rework the report"
summary: "Nib wrote a report on the school garden, but it reads like a list of short, bumpy sentences with a tense slip. Students rework it with four moves from the course: fold two sentences into one, keep the tense steady, choose the shape for the job, and then rework a choppy paragraph of their own."
language: maths
node: [AC9E7LA06 n2, AC9E8LA05 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Two choppy sentences fold into one: 'which grew slowly' sits right after 'beans'." }
hook: "A report has all the right facts but reads like a list. Can you rework it without changing a single fact?"
---
Nib's class started a garden behind the hall. Their facts are right, but every sentence is short and bumpy, and some verbs slip into the wrong tense. You will rework it in four parts, with four moves from this course: folding sentences, steady tense, choosing the shape, and then your own.

## Predict: what's the problem?

```step
stage: predict
insight: "Naming what makes the report bumpy before fixing it makes students choose the right move for each problem."
check:
  type: predict
  q: "A reader says: 'Every sentence is about the same length, some repeat the same noun, and a few verbs jump to a different time.' Which moves fix that?"
  options: ["Fold sentences, fix the tense and mix the shapes", "Make every sentence longer", "Add more facts to each sentence", "Use bigger words everywhere"]
  actual: "Folding removes the repeated noun, steady tense fixes the jump in time, and a mix of shapes stops every sentence sounding the same. That is the plan for this challenge."
```

## Part 1: fold two sentences into one

```step
stage: practise
insight: "Folding a repeated noun into an embedded clause is the first move applied to the report."
try: { playground: board, starter: "text.yml#fold", height: 330 }
hint: ["Both sentences are about the garden. Name it once.", "The new clause goes right after garden."]
smaller:
  check: { type: question, q: "'The garden was behind the hall. The garden had four beds.' Which joining word folds the second sentence in?", options: ["which", "who", "because"], answer: 0, feedback: [null, "Who is for people, and the garden is a thing.", "Because gives a reason, not a detail."], explain: "Which has four beds sits right after garden." }
check: { type: board, text: "Build one sentence that folds the second into the first.", when: "in_order = 1", explain: "The garden, which was behind the hall, had four beds names the garden once and keeps both facts." }
```

## Part 2: keep the tense steady

```step
stage: practise
insight: "Spotting tense slips in the report applies the steady-tense move to a real recount."
try: { playground: board, starter: "text.yml#tense", height: 330 }
hint: ["The first sentence sets the tense.", "Click only the verbs that do not match it."]
check: { type: board, text: "Colour the two verbs that slip out of the past tense.", when: "chains_ok = 1 and n_stray = 0", explain: "The recount is in the past, so 'water' and 'pick' are the slips: watered and picked." }
```

## Part 3: choose the shape for the job

```step
stage: practise
insight: "Choosing the joining word that fits each job in the report applies the shape move."
try: { playground: board, starter: "text.yml#shape", height: 320 }
hint: ["Read each choice aloud in its sentence.", "Listen for the choice that makes the sentence say what Nib means."]
check: { type: board, text: "Choose the words that fit the job in each sentence.", when: "n_gaps_right = 3", explain: "But turns against the hope that beans grow fast, because puts the reason first, and which tucks a detail about the pods in right after the word pods." }
```

## Part 4: rework a choppy paragraph

```step
stage: make
insight: "Reworking a choppy paragraph with all the moves is the course's main transfer task."
try: { playground: board, starter: "text.yml#make", height: 440 }
hint: ["Fold two sentences about the same thing with which or who.", "Join two ideas with a word like because or until, and keep a short sentence to land the end."]
check: { type: board, text: "Rework the paragraph: at least four sentences, using who, which or whose once, at least two joining words such as because or until, one short sentence and one long one.", when: "is_written = 1 and n_sentences >= 4 and n_who >= 1 and n_joiners >= 2 and n_short >= 1 and n_long >= 1", explain: "Your paragraph has folded detail, joined ideas and a mix of lengths. Ask a partner whether it says the same facts as the choppy version." }
```

The board counts words, sentences and joining words, and it cannot tell whether you reworked the paragraph or only added to it. Whether the facts are the same and the paragraph reads well is for a partner or your teacher to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Reworking a choppy piece of their own writing is the course's transfer step."
check: { type: reflect, text: "I took a paragraph of my own that read like a list and reworked it: I folded at least two sentences, kept the tense steady and changed the shape of at least one sentence." }
```
