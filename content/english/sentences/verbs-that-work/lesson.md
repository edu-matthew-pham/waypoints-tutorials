---
order: 6
unit: detail
title: Verbs that do the work
summary: "A precise verb can say what a verb and an adverb need two words for (ran very fast becomes sprinted). The tense tells the reader when something happens: past, present or future. And an adverb group adds how, where, when or how much (very quietly, just outside, quite recently). A writer picks all three to say exactly what is meant."
language: maths
node: [AC9E6LA06 n1, AC9E6LA06 n2, AC9E6LA06 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Dived does the work of jumped very quickly. A precise verb says in one word what a plain verb and an adverb need two for." }
hook: "'Ran very fast' or 'sprinted'. Which one is the writer's best choice, and why?"
---
Three tools make a sentence more exact.

- **A precise verb:** *sprinted* says what *ran very fast* needs three words for.
- **The tense:** *scored* (past), *scores* (present) or *will score* (future) tells the reader when.
- **An adverb group:** *very quietly* (how), *just outside* (where), *quite recently* (when) or *extremely* (how much) adds detail to a verb.

## Predict: one word instead of three

```step
stage: predict
insight: "Predicting the single verb for a wordy phrase shows students that a precise verb carries the meaning of the extra words."
check:
  type: predict
  q: "'Mia said very quietly that she was nervous.' Which single verb could replace 'said very quietly'?"
  options: ["whispered", "shouted", "argued", "asked"]
  actual: "whispered. It means 'said very quietly', so the sentence needs no extra words."
```

## Try: choose the sharper verb

```step
stage: run
insight: "Choosing the verb that matches each wordy phrase shows a precise verb does the work of a plain verb and an adverb."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Read the wordy sentence, then choose the one verb that means the same.", "Cross out the wrong ones by testing: does it mean 'walked very quietly'?"]
smaller:
  check: { type: question, q: "Which single verb means 'ran very fast'?", options: ["sprinted", "jogged", "strolled"], answer: 0, feedback: [null, "Jogged is a slow, steady run.", "Strolled is a slow walk."], explain: "Sprinted means to run very fast, so it replaces ran very fast." }
check: { type: board, text: "Choose the single verb that means the same as each wordy phrase.", when: "n_gaps_right = 3", explain: "Crept means walked very quietly, studied means looked at very carefully, and devoured means ate very quickly. Each one replaces a plain verb and an adverb." }
```

Were you right about Mia? Whispered meant 'said very quietly'.

## Worked example: verbs, tense and adverbs

```step
stage: investigate
insight: "Matching phrases to precise verbs, catching a plain verb with an adverb, and choosing the tense a report needs shows each word choice is made for a reason."
tasks:
  - check:
      type: match
      q: "Match each wordy phrase to the one verb that says it."
      pairs:
        - ["walked with heavy, angry steps", "stomped"]
        - ["looked angrily at", "glared at"]
        - ["laughed in a silly, quiet way", "giggled"]
        - ["picked up quickly and firmly", "grabbed"]
      explain: "Each precise verb carries both the action and how it was done, so the sentence needs no adverb."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's match report, one sentence per line. One line uses a plain verb and an adverb where one precise verb would be sharper. Click it."
      answer: 2
      fault: logic
      misconception: weak-verb
      explain: "Line 2: 'ran very fast' could be 'sprinted' or 'raced'. One precise verb says what the plain verb and the adverb did together."
  - check:
      type: question
      q: "A report posted the day after a match tells what happened. Which tense does it mostly use?"
      options: ["Past: scored, kicked, won", "Future: will score, will kick", "Present: scores, kicks", "No tense at all"]
      answer: 0
      feedback: [null, "Future tense looks ahead to events that have not happened.", "Present tense would make the match sound as if it is happening now.", "Every verb has a tense."]
      explain: "The match is over, so the report mostly says what happened: scored, kicked, won."
```

### Three ways to sharpen a sentence

```worked
\text{Look at the verb} :: Is there one verb that says what the verb and the adverb say together?
\text{Check the tense} :: When does this happen: past, present or future?
\text{Add an adverb group only if it helps} :: How, where, when or how much? Does the reader need it?
```

Now match the phrases to verbs.

### Find the wordy verb

### Which tense?

## Vary: choose the tense

```step
stage: modify
insight: "Choosing the verb form that fits each time clue shows the tense is set by when the event happens."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["Look for a word that says when: yesterday, these days, next week.", "Past tense for what already happened, present for what is true now, will plus a verb for what is coming."]
check: { type: board, text: "Choose the verb form that fits each time clue.", when: "n_gaps_right = 3", explain: "Yesterday points to the past (visited), these days points to the present (leaves), and next week points to the future (will plant)." }
```

## Practise: adverb groups

```step
stage: practise
insight: "Colouring adverb groups by what they add shows they are not all about how."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Chain 1 is how (manner), Chain 2 is when (time), Chain 3 is where (place).", "Click the whole adverb group, such as 'very early', not just one word."]
check: { type: board, text: "Colour the adverb groups: how (Chain 1), when (Chain 2) and where (Chain 3).", when: "chains_ok = 3 and n_stray = 0", explain: "Quite softly and extremely carefully say how. Very early says when. Just outside says where." }
```

## Make: a match report

```step
stage: make
insight: "Writing five sentences of a match report uses precise verbs, past tense and adverb groups where they help a reader see the match."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Choose a match or a game you know (or make one up). Write what happened, in the order it happened.", "Use at least two precise verbs and two adverb groups. Keep to the past tense."]
check: { type: board, text: "Write at least five sentences of a match report, at least 50 words.", when: "n_sentences >= 5 and n_words >= 50", explain: "Your report tells what happened. Ask a partner to underline each precise verb and each adverb group, and check every verb is in the past tense." }
```

The board counts sentences and words. Whether your verbs are precise, your tense is steady and your adverb groups help is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for plain verbs with adverbs puts the move to use outside the board."
check: { type: reflect, text: "I read a piece of my own writing and replaced at least one plain verb and adverb with a single precise verb." }
```
