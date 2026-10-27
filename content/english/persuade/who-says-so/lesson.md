---
order: 3
unit: warmup
title: "Who says so?"
summary: "A claim is more persuasive when it names a specific source that knows about the topic. Anonymous or vague sources (some people say, experts say) give a reader nothing to check. A source can be named and still not be an authority on the claim."
language: maths
node: [AC9E5LA02 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "A named source who knows the topic is stronger than 'someone says'." }
hook: "'Word is the canteen is closing.' Who said so? Could you check?"
---
Who says so matters. A claim is stronger when the writer names **a specific source**: a person, a record or a count that you could find.

- **Vague**: *Some people say… Experts say… They say…*
- **Named**: *Ms Iqbal, the pool supervisor who checks the water each morning, says…*

A named source helps only if the source knows about this claim. A baker may know about bread. A baker does not know whether a bridge is safe.

## Predict: who do you trust?

```step
stage: predict
insight: "Predicting which source is stronger previews that naming and fitting the source matters."
check:
  type: predict
  q: "Which source makes the claim 'The library roof leaks' more persuasive?"
  options: ["Some people say so", "A student in Year 3 who has never been inside", "Mr Okafor, the caretaker who repairs the roofs"]
  actual: "Mr Okafor. He is named and repairs the roofs, so he knows about leaks. 'Some people' gives you nothing to check."
```

## Try: vague or specific?

```step
stage: run
insight: "Placing six claims by how they name a source shows that vague sources give a reader nothing to check."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Could you find this person or record?", "Is it 'someone' or a particular source?"]
smaller:
  check: { type: question, q: "Which gives you something you could look up?", options: ["Word is the exam is hard", "The lost-property book lists 14 jumpers this week", "Lots of students think so"], answer: 1, feedback: ["'Word' could be anyone.", null, "'Lots of students' could be anyone."], explain: "A record in a book is something you could look up and check." }
check: { type: board, text: "Place each claim: vague source or named source.", when: "n_right = 6 and n_wrong = 0", explain: "Some experts say, People say and They say do not point to anyone. The groundskeeper, the temperature log and the Year 8 count are specific." }
```

Which of the three named sources would you check first?

## Worked example: does the source know?

```step
stage: investigate
insight: "Sorting sources into fitting or not fitting, finding a vague source in a paragraph and saying why a named source persuades shows how to judge a source."
tasks:
  - check:
      type: sort
      q: "Does the source know about this claim?"
      options: ["Knows about it", "Does not know about it"]
      items:
        - ["A swimming coach says goggles help young swimmers see the wall.", "Knows about it", "A swimming coach knows about swimming."]
        - ["A famous singer says this cough medicine works.", "Does not know about it", "Singing is not medicine."]
        - ["A footballer says this phone is the fastest.", "Does not know about it", "Football is not phones."]
        - ["A bus driver says the 8:10 bus is often full.", "Knows about it", "A driver sees the bus every day."]
        - ["A chef says the bridge is safe to cross.", "Does not know about it", "Cooking is not bridges."]
        - ["A librarian says this book is a good start for mystery readers.", "Knows about it", "A librarian knows books and readers."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph about the reef, one sentence per line. One sentence uses a vague source. Click it."
      answer: 3
      fault: logic
      misconception: any-source-counts
      explain: "Line 3 says 'a friend of my cousin'. You cannot check who that is or what they saw. The other lines name a team, a person or a record."
  - check:
      type: question
      q: "Why does 'Dr Ortiz, who has counted the reef for ten years, says…' persuade more than 'someone says'?"
      options: ["It uses a title, and titles always win arguments", "It names a person who knows the reef, so a reader can check", "It is longer, so it sounds more important"]
      answer: 1
      feedback: ["A title only helps if the person knows the topic.", null, "Length alone does not make a source stronger."]
      explain: "A named person with a reason to know gives a reader something to check."
```

### Vague or specific?

```worked
\text{Look at who is named} :: A person, a record or a count, or 'some people'?
\text{Ask: could I check it?} :: A named source can be found. A vague one cannot.
\text{Ask: do they know this?} :: A source helps only on what it knows about.
```

### Spot the vague source

### Why name the source?

## Vary: pick a source that fits

```step
stage: modify
insight: "Choosing a source that fits the claim shows that a named source must know about the topic."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who would see this every day?", "Who has a reason to know?"]
check: { type: board, text: "Choose the source that fits each claim.", when: "n_gaps_right = 2", explain: "The science technician looks after the equipment, and the librarian looks after the books." }
```

## Practise: rank the sources

```step
stage: practise
insight: "Placing sources by how well they fit shows how to judge them."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Is the source named?", "Does it know about this claim?"]
check: { type: board, text: "Place each source: vague (nobody you could find), named but no fit, or named and fitting.", when: "n_right = 6 and n_wrong = 0", explain: "Some experts say and a friend of my cousin are vague: nobody you could find. Chef Bruno Aldo is named, but cooking is not bus times. The timetable, Mr Webb and Ms Kaur are named and know their topic." }
```

## Make: add a source

```step
stage: make
insight: "Writing a claim and naming a fitting source puts the idea to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Who at your school knows about this?", "What could you ask them?"]
check: { type: board, text: "Write at least three sentences (at least 30 words in all): a claim about the school, and a named source who knows about it.", when: "n_sentences >= 3 and n_words >= 30", explain: "You wrote a claim with a source. Ask a partner whether the person you named really knows about it." }
```

The board counts sentences and words. Whether the source fits is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking the source of a real claim puts the idea to use outside the board."
check: { type: reflect, text: "I looked at a real claim and asked who said it and whether they know about the topic." }
```

## Wider: sources in different texts

```step
stage: make
tier: wider
insight: "Comparing how a news report and a school essay name sources applies the idea across text types at the same level."
check:
  type: reasoning
  q: "A news report and a school essay both use sources. Give one way they might name a source differently, and say why."
  placeholder: "A news report ... A school essay ..."
  models:
    - title: "A strong answer"
      text: "A news report may say 'the mayor said' because readers know the mayor. A school essay may give the author, the year and the title so a teacher can find it."
    - title: "A different view that also works"
      text: "The news report names who spoke, and the essay names where the idea came from, because the essay's reader may want to check it."
  criteria: ["I gave one difference.", "I said why.", "I wrote about the reader's need to check."]
  explain: "Different texts name sources in different ways so the reader can check."
```
