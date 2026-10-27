---
order: 6
unit: challenge
title: "Challenge: punctuate the newsletter"
summary: "Nib typed the school fair newsletter with no punctuation at all. Students put the marks back in four parts: apostrophes, commas, colons and semicolons, then a whole paragraph, and then check the commas in a piece of their own writing."
language: maths
node: [AC9E6LA09 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "The comma comes before the speech, after the words that introduce it." }
hook: "A newsletter with every fact right and not one mark of punctuation. Can you make it readable again?"
---
Nib typed the school fair newsletter fast, and the punctuation got left out. You will put it back in four parts, using the marks from this course: apostrophes, commas, colons and semicolons, and then a whole paragraph. A last step asks you to check the commas in your own writing.

## Predict: which mark first?

```step
stage: predict
insight: "Thinking about which mark the newsletter needs most makes students link each job to its mark before fixing."
check:
  type: predict
  q: "Nib's newsletter has a list, an opening clause and a quotation. Which one mark do all three of those need?"
  options: ["The comma", "The colon", "The semicolon", "The apostrophe"]
  actual: "The comma. It separates list items, follows an opening clause and comes before the quotation. The colon and the semicolon each do one of these jobs at most, and the apostrophe does none of them."
```

## Part 1: apostrophes

```step
stage: practise
insight: "Choosing the owner word and the contraction applies the first lesson's marks to the newsletter."
try: { playground: board, starter: "text.yml#apostrophes", height: 360 }
hint: ["Who owns the room, and how many owners are there?", "Is each gap a short form of two words, or a word that shows who owns something?"]
check: { type: board, text: "Choose the word for each gap.", when: "n_gaps_right = 3", explain: "The room belongs to all the teachers, so the apostrophe goes after the s. It's is short for it is. One stall belongs to Ava and Ben together, so the apostrophe goes on the last name." }
```

## Part 2: commas

```step
stage: practise
insight: "Choosing commas across the three jobs and a place where none belongs applies the comma lesson to the newsletter."
try: { playground: board, starter: "text.yml#commas", height: 420 }
hint: ["Name the structure in each sentence: opening phrase or clause, list, speech.", "Is any gap between a subject and its verb?"]
check: { type: board, text: "Choose a comma or no comma for each box.", when: "n_right = 5 and n_wrong = 0", explain: "A comma follows each long opening phrase or clause, separates the first items in a list and comes before the speech. 'The new library' stays joined to 'opens'." }
```

## Part 3: colons and semicolons

```step
stage: practise
insight: "Choosing among a colon, a semicolon, a comma and no mark makes students test what stands on each side."
try: { playground: board, starter: "text.yml#colons", height: 440 }
hint: ["Could each side of the gap stand alone as a sentence?", "Is the part before the gap a whole sentence that promises something?"]
check: { type: board, text: "Choose the mark for each box.", when: "n_right = 5 and n_wrong = 0", explain: "A colon follows a whole clause that promises a list or a reason. A semicolon joins two related main clauses. A comma follows an opening clause. After 'need' the clause is unfinished, so no mark." }
```

## Part 4: punctuate a whole paragraph

```step
stage: make
insight: "Punctuating a whole paragraph makes students decide each mark in context, as they do in extended writing."
try: { playground: board, starter: "text.yml#make", height: 460 }
hint: ["Where does each sentence end? Put the capital letters and full stops in first.", "Read it aloud. Where does your voice stop, and where does a reader need help to follow the meaning?"]
check: { type: board, text: "Punctuate the paragraph: at least four sentences, at least four commas, a colon and speech marks.", when: "n_sentences >= 4 and n_commas >= 4 and n_colons >= 1 and n_quotes >= 1", explain: "Your paragraph has sentences, commas, a colon and speech marks. Swap with a partner and ask them to find each comma and say its job." }
```

The board counts marks. It cannot tell whether each one is in the right place. A partner or your teacher can.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking the commas in a piece of their own writing is the transfer step for the whole course."
check: { type: reflect, text: "I read a piece of my own writing for commas, found a place where one was missing or did not belong, and fixed it." }
```

## Wider: edit a partner's writing

```step
stage: make
tier: wider
insight: "Editing a partner's writing for commas applies the same checks at the same level to someone else's text."
check: { type: reflect, text: "I checked a partner's writing for commas, found one to fix and explained to them which job it does or does not do." }
```
