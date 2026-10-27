---
order: 3
unit: stages
title: Stages and phases
summary: "Stages are the big parts of a text, and phases are the smaller moves inside a stage. An explanation has an opening statement, then an explanation sequence whose phases are the steps in order. A review gives the context, a description (often in phases) and a judgement. Words such as when, then and as a result signal an explanation's phases; words such as best and disappointing signal a judgement."
language: maths
node: [AC9E5LA03 n1, AC9E5LA03 n2, AC9E5LA03 n3, AC9E5LA03 n4, AC9E6LA03 n1, AC9E6LA03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The opening statement says what is being explained. The explanation sequence has three phases, one step each, in the order they happen." }
hook: "You're explaining to a Year 2 student how rain forms. Where do you start, and how many steps are there?"
---
A text's big parts are its **stages**. Inside a stage there can be smaller moves called **phases**.

An **explanation** says how or why something happens. It has two stages:

- An **opening statement:** what is being explained.
- An **explanation sequence:** the steps, in order. Each step is a **phase**.

## Predict: where does it start?

```step
stage: predict
insight: "Predicting what follows an opening statement shows students they expect an explanation's sequence."
check:
  type: predict
  q: "An explanation starts: 'Rain is water that falls from clouds to the ground.' What will the rest of it do?"
  options: ["Go through the steps that make rain, in order", "Give the writer's opinion of rain", "Tell a story about a rainy day", "List different kinds of weather"]
  actual: "Go through the steps, in order. The first sentence named what is being explained. That is the opening statement, and the steps that follow are the explanation sequence."
```

## Try: label the stages and phases

```step
stage: run
insight: "Labelling the opening statement and each step makes the sequence visible as a chain of phases."
try: { playground: board, starter: "text.yml#run", height: 380 }
hint: ["Click a sentence, then choose Opening statement or Step in the sequence.", "Ask of each sentence: does it say what is being explained, or one thing that happens on the way to rain?"]
smaller:
  check: { type: question, q: "'The warm, moist air rises and cools, and the vapour condenses into tiny droplets.' What is this sentence doing?", options: ["Giving one step in how rain forms", "Saying what rain is", "Giving an opinion about rain"], answer: 0, feedback: [null, "The first sentence already said what rain is.", "There's no opinion here, only a process."], explain: "It is one phase of the explanation sequence: a single step in the process." }
check: { type: board, text: "Label the opening statement and each step in the sequence.", when: "n_right = 5 and n_wrong = 0", explain: "The first sentence names what is explained. The four steps are phases of the sequence: evaporation, then condensation into clouds, then droplets joining, then falling as rain." }
```

Were you right about where it starts? The opening statement came first, and then four phases in order.

## Worked example: phases and their signals

```step
stage: investigate
insight: "Defining a phase, catching Nib's phases out of order, and matching signal words to stages show how language marks the structure."
tasks:
  - check:
      type: question
      q: "What is a phase?"
      options: ["A smaller move inside a stage, such as one step", "Another name for a paragraph in a long text", "The last stage of a text, after the others", "Any sentence that has a joining word in it"]
      answer: 0
      feedback: [null, "A paragraph can hold several phases, or one phase can take several paragraphs.", "Phases happen inside any stage, not just the last.", "Joining words often signal a phase, but a phase is about the job, not the words."]
      explain: "Stages are the big parts. Phases are the smaller moves that build each stage."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's explanation of how a seed grows, one sentence per line. Click the first line that comes before a step it depends on."
      answer: 2
      fault: logic
      misconception: phase-out-of-order
      explain: "Line 2: the shoot can't push up before the seed has soaked up water and split its coat (lines 3 and 4). In an explanation, each phase depends on the one before, so the order must follow the process."
  - check:
      type: match
      q: "Match each set of signal words to the stage or phase it usually marks."
      pairs:
        - ["When, then, as a result", "Steps in an explanation sequence"]
        - ["This is how rain forms.", "An explanation's opening statement"]
        - ["Brilliant, disappointing, worth seeing", "A review's judgement"]
        - ["First, next, after lunch", "Events in a recount"]
      explain: "Writers use different words in different stages. The words are clues to where you are in the text."
```

### What is a phase?

```worked
\text{Find the stages} :: Ask what job each big part does: name it, or explain it?
\text{Find the phases} :: Inside a stage, ask what smaller moves build it, such as each step.
\text{Check the order} :: In an explanation, each step should depend only on steps before it.
\text{Use the signals} :: Words such as when, then and as a result mark the phases.
```

Now: what is a phase?

### Find Nib's slip

### Signal words

## Vary: order the phases

```step
stage: modify
insight: "Putting a jumbled sequence back in order makes students reason about cause, not just spot labels; the spoken version shows stages hold across modes."
try: { playground: board, starter: "text.yml#vary", height: 380 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Start with the opening statement: what a rainbow is.", "Follow the light: it enters the drop, reflects off the back, leaves the drop, and then you see it."]
    check: { type: board, text: "Put the explanation in order: the opening statement, then each phase in the order it happens.", when: "in_order = 1", explain: "Light enters and bends, reflects off the back, bends again as it leaves, and millions of drops together make the arc. Each phase needs the one before." }
  - check:
      type: question
      q: "Ms Lee turns the rainbow explanation into a two-minute video with a voiceover and a diagram. What stays the same?"
      options: ["The stages and phases: what a rainbow is, then the steps in order", "Nothing: a video is a different kind of text", "Only the diagram", "The written sentences, word for word"]
      answer: 0
      feedback: [null, "It's still an explanation, so it still needs an opening and the steps.", "The diagram is new. The structure is what carries over.", "Spoken explanations use shorter, looser sentences, but the structure stays."]
      explain: "Changing the mode (written, spoken, a video with pictures) changes how it is delivered. The explanation still needs its opening statement and its phases in order."
```

### Put the phases in order

### Spoken, not written

## Practise: the stages of a review

```step
stage: practise
insight: "A review has different stages, and its description has two phases, so students apply 'what job does this part do?' to a new type."
try: { playground: board, starter: "text.yml#practise", height: 430 }
hint: ["A review tells you what it is (context), what it's like (description) and what the reviewer thinks (judgement).", "Ask of each paragraph: is it setting the scene, saying what the library is like, or weighing it up?"]
check: { type: board, text: "Label each paragraph of the review as context, description or judgement.", when: "n_right = 4 and n_wrong = 0", explain: "The first gives the context (a new library, built for families). The description has two phases: what's inside, then what you can do. The last paragraph is the judgement, with best as its signal word." }
```

## Make: your own explanation

```step
stage: make
insight: "Writing an explanation with an opening statement and at least three phases makes the structure theirs."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Pick something you know how it works: how ice melts, how a bike moves, how toast browns. Write what it is first.", "Add at least three steps in the order they happen. Use when, then or as a result. Label every sentence."]
check: { type: board, text: "Write an explanation with an opening statement and at least three steps, and label each one.", when: "has_opening = 1 and has_step >= 3 and n_empty = 0", explain: "Your explanation names what it explains and then goes through the steps. Ask a partner to read your steps one at a time: does each one make sense after the one before?" }
```

The board checks that the stages are there and labelled. Whether your steps are right and in order is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking the phases of an explanation they wrote in science or humanities moves the structure across subjects."
check: { type: reflect, text: "I took an explanation I wrote in another subject and checked it has an opening statement and steps in the order they happen. I fixed any step that came too early." }
```
