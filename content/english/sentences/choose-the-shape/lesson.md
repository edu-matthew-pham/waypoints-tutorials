---
order: 8
unit: shapes
title: Choose the shape for the job
summary: "A dependent clause can elaborate (give more detail), extend (add something new) or explain (say why). A writer also chooses a short or long, simple, compound or complex sentence for the job: short for something that must be seen at once, longer to carry detail and reasons. Mixing them keeps a reader moving."
language: maths
node: [AC9E7LA05 n3, AC9E7LA05 n4]
explainPicture: { ref: text.yml#explain-pic, caption: "The dependent clause says why, so the sentence explains." }
hook: "'Stop.' or 'Please stop, because there is a hole in the road ahead.' Which would you put on a sign?"
---
A dependent clause adds one of three things.

- **Elaborates:** gives more detail. *We found a cave that stretched deep under the hill.*
- **Extends:** adds something new. *We reached the summit, where we ate lunch.*
- **Explains:** says why. *We turned back because the path was flooded.*

Then a writer chooses the shape for the job: a short sentence for a warning, a longer one when the reader needs the detail or the reason.

## Predict: which suits a sign?

```step
stage: predict
insight: "Predicting which version suits a sign shows that sentence length is a choice made for the reader, not a rule."
check:
  type: predict
  q: "A sign at a building site must be read in one glance. Which would you put on it?"
  options: ["Hard hats must be worn.", "Anyone who is entering this site is required to wear a hard hat at all times, since falling objects are a danger.", "Although it is not always raining, a hard hat is needed because there is danger.", "Hard hats, which are important, should perhaps be worn."]
  actual: "The short one. A sign is read in a glance, so one short sentence works better than a long one."
```

## Try: what does the clause add?

```step
stage: run
insight: "Labelling what a dependent clause adds shows the three jobs: detail, something new, or a reason."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Ask of the added clause: is it more detail about something, a new fact, or a reason?", "A reason answers 'why'. A new fact would still make sense as its own sentence."]
smaller:
  check: { type: question, q: "'We turned back because the path was flooded.' What does the clause 'because the path was flooded' do?", options: ["Explains", "Elaborates", "Extends"], answer: 0, feedback: [null, "It does not describe a noun in more detail.", "It does not add a new fact; it gives the reason."], explain: "It answers why they turned back, so it explains." }
check: { type: board, text: "Label what each dependent clause adds: elaborates, extends or explains.", when: "n_right = 6", explain: "Elaborates gives more detail, extends adds something new and explains says why." }
```

Were you right about the sign? The short one: read in one glance.

## Worked example: choosing on purpose

```step
stage: investigate
insight: "Matching jobs to shapes, catching a sentence too long for its job and seeing why a mix of lengths helps shows each choice has a reason."
tasks:
  - check:
      type: match
      q: "Match each job to the kind of sentence that suits it."
      pairs:
        - ["A warning that must be read in a glance", "A short simple sentence"]
        - ["Two facts of equal weight", "A compound sentence"]
        - ["A fact with the reason for it", "A complex sentence with because"]
        - ["A point that should stand out after a long sentence", "A very short sentence"]
      explain: "Each job asks for a different shape. The short sentence stands out because it comes after longer ones."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib wrote a notice for the school gate, one sentence per line. One line is too long for a notice read from a car. Click it."
      answer: 2
      fault: logic
      misconception: one-shape
      explain: "Line 2 buries the instruction in a long sentence. A driver needs 'Slow down' first."
  - check:
      type: question
      q: "Why might a writer follow a long sentence with a very short one?"
      options: ["The short one stands out and lands the point", "Short sentences are always correct", "The reader needs a rest", "It makes the text longer"]
      answer: 0
      feedback: [null, "No shape is always correct; the choice depends on the job.", "Readers do not need a rest; the contrast is a tool.", "Length of text is not the aim."]
      explain: "After a long sentence full of detail, a short one catches attention and lands the main point."
```

### Pick the shape for the job

```worked
\text{Name the job} :: Warn, give detail, show a reason, or land a point?
\text{Choose the shape} :: Short for a glance, compound for two equal facts, complex for a reason or detail.
\text{Mix them} :: Check the paragraph has some short and some long sentences.
```

### Find the sentence that is too long

### Why mix lengths?

## Vary: extend a sentence

```step
stage: modify
insight: "Building a sentence that extends the main idea shows a dependent clause can add something new, not only a reason."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["The first piece says where we got to. The second adds what happened there.", "Where joins the two pieces and adds a new fact."]
check: { type: board, text: "Build a sentence that extends the first idea.", when: "in_order = 1", explain: "We reached the summit, where we ate lunch adds a new fact about the summit with the word where." }
```

## Practise: spot the short and the long

```step
stage: practise
insight: "Colouring the shortest and longest sentences shows the mix in a paragraph."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Chain 1 is a very short sentence of five words or fewer. Chain 2 is a long one of fifteen words or more.", "Click all the words of a sentence."]
check: { type: board, text: "Colour the short sentence (Chain 1) and the two long sentences (Chain 2).", when: "chains_ok = 2 and n_stray = 0", explain: "The three-word sentence stands out against the two long ones with detail." }
```

## Make: a notice for the school fair

```step
stage: make
insight: "Writing a notice with some short and some long sentences puts the choice of shape to work for a reader."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Write what, when and what to bring. Put the most important instruction in a short sentence.", "Use at least one long sentence that gives detail or a reason."]
check: { type: board, text: "Write at least five sentences, with at least one of five words or fewer and one of fifteen words or more.", when: "n_sentences >= 5 and n_short >= 1 and n_long >= 1", explain: "Your notice has a mix of short and long sentences. Ask a partner whether the short sentences carry the key instructions and the long ones carry the detail." }
```

The board counts sentence lengths. Whether the short ones carry the key points is for you and a partner to judge.

## Go wider: the same choice in science

```step
stage: make
tier: wider
insight: "Choosing the shape for a science sentence applies the same idea at the same level in a new text type."
check:
  type: reasoning
  q: "A science report says: 'Water boils. Steam rises. The lid shakes.' What would one complex sentence add? Write it."
  placeholder: "As water boils, ... This adds ..."
  models:
    - title: "A strong answer"
      text: "As the water boils, steam rises and shakes the lid. This adds the link between the events: the boiling causes the steam, and the steam causes the shaking."
    - title: "A different view that also works"
      text: "When water boils, steam rises, so the lid shakes. This shows each event follows from the one before, which the three short sentences leave the reader to guess."
  criteria: ["I joined the events into one sentence.", "I used a joining word to show how they connect.", "I said what the reader learns that the short sentences left out."]
  explain: "Both versions show the connection. The three short sentences are correct, but they leave the link for the reader to work out."
```

## In your own writing

```step
stage: make
tier: typical
insight: "Looking for a flat run of same-length sentences in real writing puts the choice to use outside the board."
check: { type: reflect, text: "I found a run of sentences in my own writing that were all the same length, and I changed one to a different shape." }
```
