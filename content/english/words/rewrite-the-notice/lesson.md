---
order: 8
unit: challenge
title: "Challenge: rewrite the notice"
summary: "Nib wrote a notice about a change to training for parents and the principal, using friendly words that suit a friend. Students move it up the scale in four parts: place the sentences, choose formal wording, find the informal words, then rewrite the whole notice. A last step checks a real message."
language: maths
node: [AC9E6LA01 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "The same news said two ways. The second fits the reader better." }
hook: "A notice with the right news in the wrong voice. Can you make it fit its readers?"
---
Nib wrote a notice about training moving to the gym. It is going to parents and the principal, but Nib wrote it the way Nib would text a friend. You will fix it in four parts, using what you learned in this course: the scale from slang to formal, and who the notice is for. A last step asks you to check a message of your own.

## Predict: what changes first?

```step
stage: predict
insight: "Thinking about what to change first makes students link the reader to the wording before fixing."
check:
  type: predict
  q: "Nib's notice is going to parents Nib has never met. Which change matters most?"
  options: ["The slang and short forms", "The length of the notice", "The day training happens"]
  actual: "The slang and short forms. Parents are readers Nib does not know well, so the words need to move up the scale. The length and the day are not the problem."
```

## Part 1: place the sentences

```step
stage: practise
insight: "Placing sentences from the notice shows which ones already fit and which ones need to change."
try: { playground: board, starter: "text.yml#scale", height: 480 }
hint: ["Which sentences would you say to a friend?", "Which already sound official?"]
check: { type: board, text: "Place each sentence from the notice on the scale.", when: "n_right = 6 and n_wrong = 0", explain: "Oval's heaps too wet is colloquial. Bring ya runners is between slang and colloquial. Training starts at four is conversational. Cheers, Nib is colloquial. Parents are invited to attend and We regret any inconvenience are formal." }
```

## Part 2: choose formal wording

```step
stage: practise
insight: "Choosing the formal word for two phrases applies the scale to the notice."
try: { playground: board, starter: "text.yml#swap", height: 340 }
hint: ["Which choice is the most official?", "Which would you not say aloud to a friend?"]
check: { type: board, text: "Choose the formal wording for each gap.", when: "n_right = 2 and n_wrong = 0", explain: "Relocated and unsuitable for use are the formal choices. Bumped is slang, and moved and too wet are conversational." }
```

## Part 3: find the informal words

```step
stage: practise
insight: "Colouring the informal words in Nib's note shows where the voice slips."
try: { playground: board, starter: "text.yml#chain", height: 340 }
hint: ["Which words would you not put in a letter to parents?", "Which opening and closing words are casual?"]
check: { type: board, text: "Colour every informal word in the note.", when: "chains_ok = 1 and n_stray = 0", explain: "Hey, heaps, ya, Cheers and No worries are the informal words. The rest of the note is already neutral." }
```

## Part 4: rewrite the notice

```step
stage: make
insight: "Rewriting the whole notice formally puts the scale and the reader to use together."
try: { playground: board, starter: "text.yml#make", height: 460 }
hint: ["Which words in Nib's notice have you found are informal?", "Who is reading, and what do they need to know?"]
check: { type: board, text: "Rewrite the notice formally in at least four sentences, with no short forms and no exclamation marks.", when: "is_written = 1 and n_contractions = 0 and n_exclaims = 0 and n_sentences >= 4", explain: "You wrote a formal notice. Swap with a partner and ask them to point to any word they would not say to the principal." }
```

The board counts short forms, exclamation marks and sentences. It cannot tell whether your wording fits the readers, so ask a partner or your teacher.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message for its readers is the transfer step for the whole course."
check: { type: reflect, text: "I read a message I wrote, said who it was for, and changed one word so it fitted the reader better." }
```

## Wider: rewrite for a different reader

```step
stage: make
tier: wider
insight: "Rewriting the same notice for a different reader applies the same checks at the same level."
check: { type: reflect, text: "I rewrote the notice for a different reader, such as younger students, and explained which words I changed and why." }
```
