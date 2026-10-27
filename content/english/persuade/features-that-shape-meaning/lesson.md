---
order: 7
unit: core
title: "Features that shape meaning"
summary: "Writers choose language features, such as speaking to you, a question with an obvious answer, repetition and strong verbs. Each shapes what the reader understands or feels. The features change with the audience and the purpose."
language: maths
node: [AC9E7LY03 n1, AC9E7LY03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Four features on one poster. Each does a different job." }
hook: "A poster asks, 'Would you leave a puppy out in the cold?' Does the writer really want an answer?"
---
Writers choose **language features** on purpose. Four common ones:

- **Speaking to the reader**: *your*, *we need you*.
- **A question with an obvious answer**: *Would you leave a puppy out in the cold?*
- **Repetition**: *read more, learn more, be more*.
- **A strong verb**: *crushes* instead of *hurts*.

Each feature does a job for the reader. You will work out which job in the Worked example.

The features change with the **audience** and the **purpose**. A poster to students and a letter to the council do different jobs.

## Predict: why ask?

```step
stage: predict
insight: "Predicting why a poster asks a question previews that features do a job."
check:
  type: predict
  q: "A poster asks, 'Would you leave a puppy out in the cold?' Why would the writer ask it?"
  options: ["To find out who owns a puppy", "To describe the weather in detail", "To make the reader think 'no' and agree"]
  actual: "To make the reader think 'no' and agree. The question already has an obvious answer, so it nudges the reader."
```

## Try: name the feature

```step
stage: run
insight: "Labelling eight sentences by their feature shows how each one is built."
try: { playground: board, starter: "text.yml#run", height: 620 }
hint: ["Is it talking to the reader, asking, repeating or using a strong verb?", "What is the sentence doing?"]
smaller:
  check: { type: question, q: "'Read more, learn more, be more.' Which feature is this?", options: ["A strong verb", "Repetition", "Speaking to the reader"], answer: 1, feedback: ["There is no verb doing heavy work here.", null, "It does not say you."], explain: "The words learn and more come round again, so it is repetition." }
check: { type: board, text: "Label each sentence with its feature.", when: "n_right = 8", explain: "We need your help and Your voice counts speak to the reader. Who wants and Would you swim are questions with an obvious answer. The two lists repeat. Strangles and smothers are strong verbs." }
```

Which sentence was hardest to label? Say what made you choose.

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
        - ["A question with an obvious answer", "Nudges the reader to agree"]
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
      options: ["Letters are never allowed to use any features at all", "Students are not able to follow any reasons at all", "A letter reasons with an official, while a poster rallies students"]
      answer: 2
      feedback: ["Letters can use features; they choose different ones.", "Students can follow reasons. The poster has a different job.", null]
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
check: { type: board, text: "Choose the wording that fits each reader.", when: "n_gaps_right = 2", explain: "You can help fits a poster to students. We request that the council act fits a letter to the council." }
```

## Practise: two kinds of feature

```step
stage: practise
insight: "Colouring words that speak to the reader and strong verbs applies the features to a new text."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Which words speak straight to the reader?", "Which words are strong verbs?"]
check: { type: board, text: "Colour the words that speak to the reader one colour and the strong verbs another.", when: "chains_ok = 2 and n_stray = 0", explain: "You and Join us speak to the reader. Choke and clogs are strong verbs." }
```

## Make: a short poster

In your own document, write a poster of at least four sentences about keeping a school garden tidy. Include at least two short sentences (five words or fewer). Use at least two language features on purpose, such as a question to the reader, repetition, a direct invitation or strong verbs.

Here is one example: "Our garden needs you. **Who wants weeds?** Pick up your litter. A tidy garden grows better beans and a happier school. **Join us on Friday.**"

Then swap with a partner. Name two features in the poster and say what each does to the reader.

```step
stage: make
insight: "Writing a poster uses features on purpose."
hint: ["Who is the poster for?", "Which feature will you use to nudge them?"]
check: { type: reflect, text: "I wrote a poster of at least four sentences with two short ones, and a partner and I named two features and what each does." }
```

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
