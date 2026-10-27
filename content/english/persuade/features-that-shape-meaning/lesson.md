---
order: 7
unit: core
title: "Features that shape meaning"
summary: "Writers choose language features, such as speaking to you, a question that expects a yes, repetition and strong verbs. Each shapes what the reader understands or feels. The features change with the audience and the purpose."
language: maths
node: [AC9E7LY03 n1, AC9E7LY03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Four features on one poster. Each does a different job." }
hook: "'Who wants a dirty beach?' Does the writer really want an answer?"
---
Writers choose **language features** on purpose. Four common ones:

- **Speaking to the reader**: *you*, *join us*.
- **A question that expects a yes or no**: *Who wants a dirty beach?*
- **Repetition**: *clean beaches, clean seas, clean futures*.
- **A strong verb**: *strangles* instead of *harms*.

Each shapes meaning. Speaking to *you* makes the reader part of it. A question nudges the reader to agree. Repetition makes an idea stick. A strong verb makes a problem sound serious.

The features change with the **audience** and the **purpose**. A poster to students and a letter to the council do different jobs.

## Predict: why ask?

```step
stage: predict
insight: "Predicting why a poster asks a question previews that features do a job."
check:
  type: predict
  q: "A poster asks, 'Who wants a dirty beach?' Why would the writer ask it?"
  options: ["To make the reader think 'not me' and agree", "To find out who wants a dirty beach", "To describe the beach in detail"]
  actual: "To make the reader think 'not me' and agree. The question already expects the answer, so it nudges the reader."
```

## Try: name the feature

```step
stage: run
insight: "Labelling eight sentences by their feature shows how each one is built."
try: { playground: board, starter: "text.yml#run", height: 620 }
hint: ["Is it talking to the reader, asking, repeating or using a strong verb?", "What is the sentence doing?"]
smaller:
  check: { type: question, q: "'Clean beaches, clean seas, clean futures.' Which feature is this?", options: ["Repetition", "A strong verb", "Speaking to the reader"], answer: 0, feedback: [null, "There is no strong verb here.", "It does not say you."], explain: "The word clean is repeated, so it is repetition." }
check: { type: board, text: "Label each sentence with its feature.", when: "n_right = 8", explain: "You and Join us speak to the reader. Who wants and Isn't it time are questions that expect agreement. The two lists repeat. Strangles and dumped are strong verbs." }
```

Some sentences did more than one thing. Pick the feature that stands out most.

## Worked example: what does each feature do?

```step
stage: investigate
insight: "Matching features to effects, finding a wrongly named feature and explaining why features change with the audience shows how language shapes meaning."
tasks:
  - check:
      type: match
      q: "Match each feature to what it does."
      pairs:
        - ["Speaking to 'you'", "Makes the reader feel part of it"]
        - ["A question that expects a yes", "Nudges the reader to agree"]
        - ["Repeating a phrase", "Makes the idea stick"]
        - ["A strong verb such as strangles", "Makes a problem sound serious"]
      explain: "Each feature has a different job in shaping what the reader feels or remembers."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib explaining a feature of a poster, one point per line. One line gets the feature wrong. Click it."
      answer: 3
      fault: logic
      misconception: feature-misnamed
      explain: "Line 3 calls 'Join us this Saturday' a question. It is an invitation that speaks to the reader, not a question."
  - check:
      type: question
      q: "Why would a letter to the council use fewer 'Join us!' lines than a poster for students?"
      options: ["The letter gives reasons to an official, but the poster rallies students", "Letters are not allowed to use any features", "Students cannot understand reasons"]
      answer: 0
      feedback: [null, "Letters can use features; they choose different ones.", "Students can follow reasons. The poster has a different job."]
      explain: "The purpose and audience decide the features. A poster rallies. A letter reasons."
```

### Name it, then say what it does

```worked
\text{Name the feature} :: Talking to you, a question, repetition or a strong verb?
\text{Say the effect} :: What does it make the reader feel or remember?
\text{Ask: why for this reader?} :: How does the audience or purpose explain the choice?
```

### Spot the wrongly named feature

### Why do features change?

## Vary: choose for the reader

```step
stage: modify
insight: "Choosing wording for students and for the council shows how features change with the audience."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who is reading?", "What is the writer trying to do?"]
check: { type: board, text: "Choose the wording that fits each reader.", when: "n_gaps_right = 2", explain: "You can help today fits a poster to students. We request that the council act fits a letter to the council." }
```

## Practise: two kinds of feature

```step
stage: practise
insight: "Colouring words that speak to the reader and strong verbs applies the features to a new text."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Which words speak straight to the reader?", "Which words are strong verbs?"]
check: { type: board, text: "Colour the words that speak to the reader one colour and the strong verbs another.", when: "chains_ok = 2 and n_stray = 0", explain: "You and Join us speak to the reader. Strangles and chokes are strong verbs." }
```

## Make: a short poster

```step
stage: make
insight: "Writing a poster uses features on purpose."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Who is the poster for?", "Which feature will you use to nudge them?"]
check: { type: board, text: "Write a poster of at least four sentences about keeping a school garden tidy, with at least two short sentences (five words or fewer).", when: "n_sentences >= 4 and n_short >= 2", explain: "You wrote a poster. Ask a partner to name two features you used and what each does." }
```

The board counts sentences and short sentences. It cannot find your features, so ask a partner to name them.

## In your own writing

```step
stage: make
tier: typical
insight: "Spotting features in a real text puts the idea to use outside the board."
check: { type: reflect, text: "I read a real poster or advertisement and named two language features and what each does." }
```

## Wider: one subject, two audiences

```step
stage: make
tier: wider
insight: "Comparing two texts on one subject applies the idea to audience and purpose at the same level."
check:
  type: reasoning
  q: "Pick a topic such as recycling. Describe one feature you would use in a poster to young students and a different one in a letter to the council, and say why."
  placeholder: "For the poster ... For the letter ..."
  models:
    - title: "A strong answer"
      text: "Poster: a question such as 'Who wants a messy yard?' to nudge students. Letter: a reason with a number, to persuade an official."
    - title: "A different view that also works"
      text: "Poster: repetition of a slogan so it sticks. Letter: formal wording that shows respect."
  criteria: ["I named a feature for each.", "I said why it suits the audience.", "I linked it to the purpose."]
  explain: "The audience and purpose explain the features."
```
