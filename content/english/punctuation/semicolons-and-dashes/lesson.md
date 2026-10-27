---
order: 5
unit: core
title: Semicolons and dashes
summary: "A semicolon joins two closely related main clauses, each of which could stand alone, and a comma on its own cannot do that job. A pair of dashes sets off an aside with emphasis, and a single dash adds a pause or a surprise. Each mark sets a different tone."
language: maths
node: [AC9E8LA09 n1, AC9E8LA09 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Both sides could stand alone as sentences. The semicolon joins two ideas that belong together." }
hook: "'It was quiet – too quiet.' What does the dash make you do as you read?"
---
A **semicolon** (;) joins two **main clauses**, each of which could stand alone, when the ideas are closely related:

- *The lights went out; the whole street went quiet.*

A comma alone cannot join them. (*The lights went out, the whole street went quiet.* is two sentences stuck together.)

A **dash** (–) works in two ways:

- **A pair of dashes** sets off an aside, with more emphasis than brackets: *My cousin – the one from Perth – is visiting.*
- **A single dash** adds a pause, or a surprise: *The door opened – and nobody was there.*

## Predict: which mark?

```step
stage: predict
insight: "Predicting which mark joins two main clauses shows that a comma alone is not enough."
check:
  type: predict
  q: "'The shop was closed we went home.' Which mark joins the two clauses best?"
  options: ["A comma", "A semicolon", "A colon", "A bracket"]
  actual: "A semicolon. Both 'The shop was closed' and 'we went home' could stand alone, and the ideas are closely related. A comma alone would stick two sentences together."
```

## Try: what does each mark do?

```step
stage: run
insight: "Labelling each mark by its job shows how a semicolon, a pair of dashes and a single dash differ."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Could each side of the mark stand alone as a sentence?", "Are there two dashes around some words, or one dash before the end?"]
smaller:
  check: { type: question, q: "'The rain stopped; the game restarted.' Why can a semicolon join these two parts?", options: ["Each part could stand alone as a sentence", "The second part is an aside", "The first part cannot stand alone"], answer: 0, feedback: [null, "An aside could be taken out. 'The game restarted' is a main clause of its own.", "'Ava loves swimming' is a whole sentence."], explain: "Both parts are main clauses, and the two ideas are closely related." }
check: { type: board, text: "Label what the mark in each sentence does: semicolon, pair of dashes or single dash.", when: "n_right = 6 and n_wrong = 0", explain: "A semicolon joins two main clauses. A pair of dashes sets off an aside. A single dash adds a pause or a surprise." }
```

## Worked example: is it joined correctly?

```step
stage: investigate
insight: "Sorting joins by whether each side can stand alone, spotting two sentences stuck together with a comma, and choosing what a semicolon can join shows the condition each mark depends on."
tasks:
  - check:
      type: sort
      q: "Is each sentence joined correctly?"
      options: ["Joined correctly", "Needs fixing"]
      items:
        - ["Ben loves chess; Ava prefers cards.", "Joined correctly", "Both sides could stand alone and the ideas are related."]
        - ["Ben loves chess, Ava prefers cards.", "Needs fixing", "A comma alone sticks two sentences together."]
        - ["The oval was flooded; training was cancelled.", "Joined correctly", "Both sides could stand alone and the second follows from the first."]
        - ["We stayed home; because it was raining.", "Needs fixing", "'Because it was raining' cannot stand alone, so a semicolon does not belong."]
        - ["The oval was flooded, training was cancelled.", "Needs fixing", "A comma alone sticks two sentences together."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's beach diary, one sentence per line. One line has two sentences stuck together with a comma. Click it."
      answer: 2
      fault: logic
      misconception: comma-splice
      explain: "Line 2 sticks two sentences together with a comma: 'The tide was high' and 'the beach was closed' could both stand alone. A semicolon, or a full stop, fixes it."
  - check:
      type: question
      q: "Which two pieces could a semicolon join?"
      options: ["'The sky cleared' and 'the match restarted'", "'Because it rained' and 'we stayed in'", "'When the bell rang' and 'the class lined up'"]
      answer: 0
      feedback: [null, "'Because it rained' cannot stand alone. A comma would join these two.", "'When the bell rang' cannot stand alone. A comma would join these two."]
      explain: "A semicolon needs a main clause on each side. 'The sky cleared' and 'the match restarted' each stand alone."
```

### Is it joined correctly?

```worked
\text{Read each side on its own} :: Could each side stand alone as a sentence?
\text{If both could} :: A semicolon can join them, if the ideas are closely related.
\text{If one could not} :: Use a comma, or no mark, instead.
```

### Spot the two sentences stuck together

### Which pieces can a semicolon join?

## Vary: build with a semicolon

```step
stage: modify
insight: "Building a sentence with a semicolon shows which tile joins and which tile only looks right."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Which tile has a mark that can join two main clauses?", "Could each side stand alone?"]
check: { type: board, text: "Build one sentence from the two related main clauses.", when: "in_order = 1", explain: "The creek was flooded; we took the long way home joins two main clauses with a semicolon. The comma version would stick two sentences together." }
```

## Practise: commas, semicolons or nothing

```step
stage: practise
insight: "Choosing among a comma, a semicolon and no mark across several sentences makes students check what stands on each side."
try: { playground: board, starter: "text.yml#practise", height: 420 }
hint: ["Could each side of the gap stand alone as a sentence?", "Is one side a clause that cannot stand alone?"]
check: { type: board, text: "Choose the mark for each box.", when: "n_right = 5 and n_wrong = 0", explain: "A semicolon joins two main clauses. A comma follows an opening clause that cannot stand alone. No mark splits 'The old bridge' from 'was closed'." }
```

## Make: describe a place

```step
stage: make
insight: "Writing a short description with a semicolon and dashes puts the marks to work in a real text type."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Describe a place you know well: a beach, a playground, a street.", "Use a semicolon between two related sentences, and a pair of dashes for an aside or a single dash for a surprise."]
check: { type: board, text: "Write at least four sentences with a semicolon and a dash.", when: "n_sentences >= 4 and n_semicolons >= 1 and n_dashes >= 1", explain: "Your description has a semicolon and a dash. Ask a partner to check that each side of the semicolon could stand alone, and to say what each dash does." }
```

The board counts semicolons and dashes. Whether each one does its job is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking each semicolon or dash in real writing against its job puts the rule to use outside the board."
check: { type: reflect, text: "I checked a semicolon or a dash in my own writing and could say what it does." }
```

## Wider: the same idea, two marks

```step
stage: make
tier: wider
insight: "Comparing a semicolon and a dash on the same pair of clauses applies the idea at the same level in a new context."
check:
  type: reasoning
  q: "Compare 'The lake was frozen; we skated all day.' with 'The lake was frozen – we skated all day.' What does each mark do to the way you read it?"
  placeholder: "The semicolon ... The dash ..."
  models:
    - title: "A strong answer"
      text: "The semicolon links the two ideas calmly, as equals. The dash adds a pause, so 'we skated all day' lands as a small surprise or a reward."
    - title: "A different view that also works"
      text: "With the semicolon, the reader moves on smoothly. With the dash, the reader stops for a moment before the second part, which gives it more weight."
  criteria: ["I said what the semicolon does.", "I said what the dash does.", "I said how the reading differs."]
  explain: "Both marks join the two clauses. The semicolon balances them; the dash adds a pause and emphasis."
```
