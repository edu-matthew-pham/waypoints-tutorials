---
order: 6
unit: core
title: "Judging and backing it up"
summary: "Evaluative words say how a writer feels, what they think of a person's actions, or how good a thing is. A judgement is stronger when it is backed up with a detail from the text or a trusted outside source, and weaker when it stands alone."
language: maths
node: [AC9E7LA02 n1, AC9E7LA02 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Three kinds of judging word for one book. A judgement backed by a detail is stronger." }
hook: "'The ending is brilliant.' Why should anyone believe you? What would make it stronger?"
---
When we review a story, a film or an event, we use **judging words**. They come in three kinds:

- **How it made me feel**: *thrilled*, *terrified*, *moved*.
- **What I think of a person's actions**: *brave*, *cruel*, *loyal*.
- **How good the thing is**: *graceful*, *clumsy*, *beautifully drawn*.

A judgement on its own is easy to ignore. It is stronger when it is **backed up** with a detail from the text, such as what a character does, or with a trusted outside source. A review that does both is easier to believe.

## Predict: what would convince you?

```step
stage: predict
insight: "Predicting what makes a judgement convincing previews that a detail from the text backs it up."
check:
  type: predict
  q: "A review says 'The book is gripping.' What would make a reader believe it?"
  options: ["A detail showing a tense moment in the story", "Saying it again in a louder way", "Making the sentence longer"]
  actual: "A detail showing a tense moment. A reader can check it against the book. Saying it louder or longer adds nothing to check."
```

## Try: what kind of judging word?

```step
stage: run
insight: "Labelling six judging phrases by their kind shows that judging comes in feelings, actions and quality."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Is it about a feeling, a person or the thing itself?", "What is the word describing?"]
smaller:
  check: { type: question, q: "'Maya is loyal.' Which kind of judging is this?", options: ["How I felt", "What I think of a person's actions", "How good the thing is"], answer: 1, feedback: ["Loyal does not say how the reader felt.", null, "Loyal is not about the book's quality."], explain: "Loyal judges a person's actions, so it is the second kind." }
check: { type: board, text: "Label each phrase: feeling, character or quality.", when: "n_right = 6", explain: "Thrilled and terrified are feelings. Brave and cruel judge people's actions. Graceful and beautifully drawn judge how good the thing is." }
```

Which was hardest? Some words, like terrified, could describe the book or the reader. Ask what is being judged.

## Worked example: is the judgement backed?

```step
stage: investigate
insight: "Sorting judgements by their backing, finding a judgement with none and saying why a detail strengthens it shows how to substantiate."
tasks:
  - check:
      type: sort
      q: "How is each judgement backed up?"
      options: ["A detail from the text", "An outside source", "Not backed up"]
      items:
        - ["Maya is brave: in chapter two she walks into the cave alone.", "A detail from the text", "It points to what Maya does."]
        - ["The book is popular: the library lists it as borrowed 80 times this term.", "An outside source", "The library record is outside the book."]
        - ["The ending is brilliant.", "Not backed up", "It gives no reason."]
        - ["Tom is cruel, because he laughs when Maya falls.", "A detail from the text", "It points to what Tom does."]
        - ["The writer is skilful: the librarian chose the book for book of the year.", "An outside source", "The librarian's choice is outside the book."]
        - ["The setting is amazing.", "Not backed up", "It gives no reason."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's book review, one point per line. One judgement has nothing to back it up. Click it."
      answer: 3
      fault: logic
      misconception: claim-without-backing
      explain: "Line 3 says 'The ending is just amazing' and gives no detail. The other lines each point to something in the book."
  - check:
      type: question
      q: "Why does adding a quote from the story make a review stronger?"
      options: ["A reader can check the judgement against the story", "Quotes make the review longer", "Quotes show the reviewer reads a lot of books"]
      answer: 0
      feedback: [null, "Longer is not the same as stronger.", "That may be true, but it does not back up the judgement."]
      explain: "A quote shows where the judgement comes from, so a reader can check it."
```

### What kind of judging, and is it backed?

```worked
\text{Find the judging word} :: Is it a feeling, a view of a person or a view of the thing?
\text{Look for backing} :: A detail from the text or a trusted outside source?
\text{Decide the strength} :: Backed means a reader can check. Unbacked means they must take your word.
```

### Spot the judgement with no backing

### Why a quote helps

## Vary: match the backing to the judgement

```step
stage: modify
insight: "Choosing the detail that backs a judgement shows that backing must match what is claimed."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["What exactly is the judgement?", "Which detail shows that?"]
check: { type: board, text: "Choose the detail that backs each judgement.", when: "n_gaps_right = 2", explain: "Waiting at the cave for hours shows loyalty. Fog that hides the path and echoing sounds make the setting eerie." }
```

## Practise: find the judging words

```step
stage: practise
insight: "Colouring the judging words in a short review applies the idea to a new text."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Which words say how good or bad something is?", "Which words only report?"]
check: { type: board, text: "Colour every judging word in the review.", when: "chains_ok = 1 and n_stray = 0", explain: "Stunning, courageous and dreadful all judge. Some scenes last ten minutes is a fact." }
```

## Make: a short review

```step
stage: make
insight: "Writing a review with a detail in quotation marks puts judging and backing up to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["What did you think of it?", "Which detail shows that?"]
check: { type: board, text: "Write at least four sentences reviewing a book, film or event, and put one detail that backs a judgement in quotation marks.", when: "n_sentences >= 4 and n_quotes >= 1", explain: "You wrote a review with a detail. Ask a partner whether the detail really backs your judgement." }
```

The board counts sentences and quotation marks. Whether the detail backs the judgement is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Backing up a real judgement puts the idea to use outside the board."
check: { type: reflect, text: "I made a judgement about something I watched or read and backed it up with a detail." }
```

## Wider: the same play, three judgements

```step
stage: make
tier: wider
insight: "Judging one event in three ways builds a word bank at the same level."
check:
  type: reasoning
  q: "For a school play you imagine, write one judging word of each kind: a feeling, a view of a person, and a view of the thing. Then say which is easiest to back up."
  placeholder: "Feeling ... Person ... Thing ..."
  models:
    - title: "A strong answer"
      text: "Feeling: delighted. Person: confident (the lead actor). Thing: colourful (the costumes). Colourful is easiest to back up, because you can point to the costumes."
    - title: "A different view that also works"
      text: "Feeling: bored. Person: careless (the stage crew). Thing: slow (the second act). Careless is easiest, because I can describe a moment when something was dropped."
  criteria: ["I gave a word of each kind.", "I chose one and said why.", "I did not need the word to be positive."]
  explain: "Any of the three can be backed up if you point to something that happened or something you could show."
```
