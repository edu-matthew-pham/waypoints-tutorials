---
order: 4
unit: warmup
title: Build a noun group
summary: "A noun group is a noun with the words that tell more about it. The head noun is the main thing; a determiner points it out or counts it (the, my, two), a describer says what it is like (old), and a classifier says what kind it is (fishing). They usually come in that order. A well-built noun group gives a reader a precise picture without extra sentences."
language: maths
node: [AC9E5LA06 n1, AC9E5LA06 n2, AC9E5LA06 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Every word in the noun group has a job: The points it out, red describes it, fire says what kind of engine, and engine is the head noun." }
hook: "'The racket' or 'our rusty old tennis racket'. Which one could you draw?"
---
A **noun group** is a noun and the words around it that tell more about it. Its parts usually come in this order:

- **Determiner:** points out or counts the noun (*this*, *some*, *our*, *three*)
- **Describer** (adjective): says what it is like (*tiny*, *rusty*)
- **Classifier:** says what kind it is (*garden*, *tennis*)
- **Head noun:** the main thing (*gate*, *rackets*)

Detail can also come after the head noun (*with a loose latch*).

## Predict: which is the main word?

```step
stage: predict
insight: "Predicting the head noun of a long group shows students that the other words all depend on one main word."
check:
  type: predict
  q: "'The tiny red lizard ran under the rock.' Which word is the head noun of the first noun group?"
  options: ["lizard", "tiny", "red", "The"]
  actual: "lizard. The tiny red lizard is about one animal. The, tiny and red all tell you more about it."
```

## Try: label the parts

```step
stage: run
insight: "Labelling each word in three noun groups shows that every word has a job and that groups differ in how many parts they use."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Click a word, then choose its job.", "Find the head noun first: the thing all the other words are about. A classifier says what kind of thing it is."]
smaller:
  check: { type: question, q: "In 'the old fishing boat', which word is the head noun?", options: ["boat", "old", "fishing"], answer: 0, feedback: [null, "Old describes the boat. It is not the thing itself.", "Fishing says what kind of boat. It is not the boat itself."], explain: "Boat is what the whole group is about. The other words tell you more about it." }
check: { type: board, text: "Label each word in the three noun groups.", when: "n_right = 11 and n_wrong = 0", explain: "In each group the head noun is the main thing: boat, buses and bike. Determiners point out or count it. Describers say what it is like: old, noisy and new. Fishing and school are classifiers: they say what kind of boat and buses." }
```

Were you right about the lizard? Lizard was the main word, and tiny and red told you more about it.

## Worked example: what does each part do?

```step
stage: investigate
insight: "Matching each part to its job, catching a noun group too thin to picture, and asking what a longer one does for a buyer shows noun groups are chosen for what they let the reader see."
tasks:
  - check:
      type: match
      q: "Match each set of words to the part of a noun group they are."
      pairs:
        - ["the, a, my, those", "Determiner: points out or counts"]
        - ["tiny, shiny, cracked", "Describer: what it is like"]
        - ["paper, kitchen, sports", "Classifier: what kind it is"]
        - ["The word all the others tell you more about", "Head noun"]
      explain: "Each part has its own job. A determiner points out the thing, a describer says what it is like, a classifier says what kind, and the head noun is the thing itself."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's information report, one sentence per line. One line has a noun group so thin that you cannot picture what it names. Click it."
      answer: 2
      fault: logic
      misconception: vague-noun
      explain: "Line 2: 'a thing on its face' could be anything. The report needs a precise noun group, such as 'its soft rubbery bill'."
  - check:
      type: question
      q: "A hiking shop writes 'our lightweight waterproof hiking backpack' instead of 'our bag'. What does the longer noun group do?"
      options: ["Tells the buyer exactly what it is and why it suits them", "Makes the sentence shorter", "Changes the head noun into a describer", "Means the sentence no longer needs a verb"]
      answer: 0
      feedback: [null, "It is longer than the first, not shorter.", "The head noun is still backpack.", "The sentence needs its verb either way."]
      explain: "Lightweight and waterproof are describers, and hiking is a classifier. Together they let the buyer picture exactly what they are getting."
```

### Noun group parts

```worked
\text{Find the head noun} :: What is the main thing? Everything else tells you more about it.
\text{Check the order} :: Determiner, describer, classifier, head noun.
\text{Ask what it lets you see} :: Does the group help the reader picture exactly what is meant?
```

Now match the parts.

### Find the thin noun group

### What does the longer group do?

## Vary: build a sentence around a noun group

```step
stage: modify
insight: "Building a sentence by placing the parts of a noun group in order shows the order is not a choice: describers come before classifiers."
try: { playground: board, starter: "text.yml#vary", height: 380 }
hint: ["Start with the determiner. The head noun comes last in the noun group.", "A describer says what it is like, so it comes before the classifier, which says what kind."]
check: { type: board, text: "Build the sentence, with the noun group in the right order.", when: "in_order = 1", explain: "The shiny kitchen tap dripped all night. The determiner, describer and classifier come in that order before the head noun, tap." }
```

## Practise: describers and classifiers

```step
stage: practise
insight: "Colouring describers and classifiers separately shows the two jobs are different."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Chain 1 is for describers (what it is like). Chain 2 is for classifiers (what kind it is).", "Skip determiners such as The and Its. Ask of each word: does it say what kind of thing, or what it is like?"]
check: { type: board, text: "Colour the describers (Chain 1) and the classifiers (Chain 2).", when: "chains_ok = 2 and n_stray = 0", explain: "Tall, muddy, wide, twisty and cool say what things are like. Gum and creek say what kind of tree and bank." }
```

## Make: a report with noun groups

In your own document, write four sentences of an information report about an animal, a place or an object. Make it at least 40 words. Build each noun group with a determiner, at least one describer or classifier, and a head noun.

Here is one example: "The Murray cod is **a large freshwater fish**. It lives in **slow, muddy rivers** across the southern inland. **Its broad, mottled body** helps it hide among fallen logs."

Then swap with a partner. Circle each noun group in each other's report. Does each one have a head noun and at least one describer or classifier?

```step
stage: make
insight: "Writing four sentences of an information report puts noun groups to work, where precision matters most."
hint: ["Choose an animal, a place or an object. Write four sentences for an information report.", "Build each noun group with a determiner, at least one describer or classifier, and a head noun."]
check: { type: reflect, text: "I wrote an information report of four sentences, and a partner and I circled each noun group and checked it has a head noun and a describer or classifier." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for thin noun groups puts the move to use outside the board."
check: { type: reflect, text: "I read a piece of my own writing and found one noun group that was too thin to picture, then rebuilt it with a describer or a classifier." }
```
