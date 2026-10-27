---
order: 1
unit: warmup
title: Apostrophes and speech marks
summary: "An apostrophe does one of two jobs: it stands in for letters that were left out (don't), or it shows who owns something (the dog's bone). Speech marks wrap the words someone said, and the comma or question mark that ends them goes inside. Getting these right lets a reader see at a glance what was said, who said it and who owns what."
language: maths
node: [AC9E3LA11 n1, AC9E3LA11 n2, AC9E4LA12 n1, AC9E4LA12 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The apostrophe goes straight after the owner. One cat owns the bowl, so it sits before the s. Two cats share it, so it sits after the s." }
hook: "'The dogs bone' or 'the dog's bone'. What does the apostrophe tell you?"
---
An **apostrophe** (') does one of two jobs.

- **Letters left out:** *can't* stands in for *cannot*; the apostrophe sits where the letters were.
- **Who owns it:** *the pilot's cap* is the cap of one pilot. For more than one pilot, the apostrophe moves after the s: *the pilots' cap*.

**Speech marks** (' ') go around the exact words someone said. The comma, question mark or exclamation mark that ends the spoken words sits inside the closing mark: *'Time to go,' said Ravi.* When the speaker's name comes in the middle, the speech carries on in lower case: *'We can leave,' said Ravi, 'if the bus comes.'*

## Predict: who owns the bone?

```step
stage: predict
insight: "Predicting the possessive for one dog shows students already know the apostrophe has a job before they learn the rule."
check:
  type: predict
  q: "One dog owns a bone. Which phrase shows that?"
  options: ["the dog's bone", "the dogs bone", "the dogs' bone", "the dog bone's"]
  actual: "the dog's bone. The apostrophe goes straight after the owner, before the s, because there is one dog."
```

## Try: the right word

```step
stage: run
insight: "Choosing the correct word in each sentence shows the apostrophe either replaces letters or shows an owner."
try: { playground: board, starter: "text.yml#run", height: 400 }
hint: ["Read the sentence before each choice. Is it a missing letter, or someone owning something?", "How many owners are there: one or more than one?"]
smaller:
  check: { type: question, q: "'Do not' becomes 'don't'. Which letter does the apostrophe stand in for?", options: ["o", "n", "t"], answer: 0, feedback: [null, "The n is still in don't.", "The t is still in don't."], explain: "Do not becomes don't: the o of not is left out, and the apostrophe sits where it was." }
check: { type: board, text: "Choose the correct word in each sentence.", when: "n_gaps_right = 3", explain: "Didn't is did not with the o left out. The teacher's pen belongs to one teacher. The girls' bags belong to three girls, so the apostrophe comes after the s." }
```

Were you right about the dog? One owner, so the apostrophe sits before the s.

## Worked example: what the apostrophe is doing

```step
stage: investigate
insight: "Matching contractions to their full words, catching an apostrophe used to make a plural and placing speech marks shows what each mark is for."
tasks:
  - check:
      type: match
      q: "Match each contraction to the words it stands in for."
      pairs:
        - ["they're", "they are"]
        - ["we'll", "we will"]
        - ["isn't", "is not"]
        - ["let's", "let us"]
      explain: "In each one the apostrophe sits where letters were left out."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's trip report, one sentence per line. One line has an apostrophe where it does not belong. Click it."
      answer: 2
      fault: logic
      misconception: apostrophe-plural
      explain: "Line 2: 'giraffe's' has an apostrophe, but it just means more than one giraffe. Plain 'giraffes' is right."
  - check:
      type: question
      q: "'We can start now,' said Mia. Where does the comma go, and why?"
      options: ["Inside the closing speech mark, because it ends the spoken words", "Outside the closing speech mark, because the sentence carries on", "After said, because that is where the speaker is named", "No comma is needed"]
      answer: 0
      feedback: [null, "The comma belongs with the spoken words, so it goes inside.", "Said comes after the comma, not before it.", "Without it the spoken words run straight into 'said Mia'."]
      explain: "The comma ends the spoken words, so it sits inside the closing speech mark. Then the speaker is named in lower case."
```

### Two jobs for an apostrophe

```worked
\text{Ask what the apostrophe is for} :: Letters left out, or an owner?
\text{Count the owners} :: One owner, apostrophe before the s. More than one, after the s.
\text{Check a plain plural} :: A word that just means more than one has no apostrophe.
```

### Find the stray apostrophe

### Where does the comma go?

## Vary: speech punctuation

```step
stage: modify
insight: "Choosing the mark for speech in sentences with the speaker named in different places shows the comma rule changes with where the speaker goes."
try: { playground: board, starter: "text.yml#vary", height: 380 }
hint: ["Does the spoken part end the sentence, or does the sentence carry on?", "Read the sentence aloud. Where does the speaker's voice stop?"]
check: { type: board, text: "Choose the mark for each box.", when: "n_right = 4 and n_wrong = 0", explain: "A comma closes the speech when the speaker is named next. After the speaker, a comma leads into more speech or a quote. A sentence that carries on after the speaker has a comma, not a full stop, before the lower case speech." }
```

## Practise: owners and missing letters

```step
stage: practise
insight: "Mixing contractions, owners and a look-alike word in the same sentences makes students check each apostrophe's job."
try: { playground: board, starter: "text.yml#practise", height: 420 }
hint: ["For each word ask: is a letter missing, does someone own something, or is it a plain plural?", "It's can be read out as 'it is'. Try that to test it."]
check: { type: board, text: "Choose the correct word for each gap.", when: "n_gaps_right = 4", explain: "Hasn't is has not. Two dogs share one kennel, so dogs'. Its tail is the puppy's own, with no apostrophe. It's nearly is it is." }
```

## Make: a scene with talk

```step
stage: make
insight: "Writing a short scene with speech and apostrophes puts both marks to work in a real text type."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Write a short scene from a story: two characters talking at the bus stop or at a campsite.", "Use speech marks for what they say, and at least two apostrophes."]
check: { type: board, text: "Write at least four sentences, with at least one piece of speech in speech marks and at least two apostrophes.", when: "n_sentences >= 4 and n_quotes >= 1 and n_apostrophes >= 2", explain: "Your scene has speech and apostrophes. Ask a partner to check that each apostrophe stands for missing letters or shows an owner, and that every spoken part ends inside its closing mark." }
```

The board counts speech marks and apostrophes. Whether each one is in the right place is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking each apostrophe in a real piece of writing puts the check to use outside the board."
check: { type: reflect, text: "I checked every apostrophe in a piece of my own writing and fixed at least one that did not belong or was in the wrong place." }
```
