---
order: 7
unit: shapes
title: Simple, compound, complex
summary: "Sentences come in four shapes. A simple sentence has one main clause. A compound sentence joins two main clauses with and, but, so or or. A complex sentence has a main clause and a dependent clause. A compound-complex sentence has two main clauses and a dependent clause. Knowing the shapes lets a writer build the one they need."
language: maths
node: [AC9E7LA05 n1, AC9E7LA05 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Two main clauses joined by but, plus a dependent clause: a compound-complex sentence." }
hook: "Is a long sentence always a complicated one?"
---
A clause has a verb that says what someone or something does or is. Count the clauses and see what joins them.

- **Simple:** one main clause. *The kite soared.*
- **Compound:** two main clauses joined by *and, but, so* or *or*. *The kite soared, and the children cheered.*
- **Complex:** a main clause and a dependent clause. *The children cheered when the kite soared.*
- **Compound-complex:** two main clauses and a dependent clause. *The kite soared, and the children cheered because the wind was strong.*

## Predict: count the clauses

```step
stage: predict
insight: "Predicting the clause count before the lesson shows students that a long sentence is not always a complicated one."
check:
  type: predict
  q: "'The bus was late, but we waited because it was raining.' How many clauses does it have?"
  options: ["Three", "Two", "One", "Four"]
  actual: "Three: the bus was late, but we waited, because it was raining. Two are main clauses and one is dependent."
```

## Try: name the shape

```step
stage: run
insight: "Labelling whole sentences by shape shows each kind is set by how many main and dependent clauses it has."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Count the verbs, then look for a joining word.", "Two main clauses joined by and, but, so or or is compound. A dependent clause starts with a word like because, when or if."]
smaller:
  check: { type: question, q: "'We ate lunch, and then we played cricket.' Which shape is it?", options: ["Compound", "Simple", "Complex"], answer: 0, feedback: [null, "A simple sentence has only one main clause.", "A complex sentence has a dependent clause, and this one has none."], explain: "Two main clauses (we ate lunch, we played cricket) joined by and make a compound sentence." }
check: { type: board, text: "Label each sentence: simple, compound, complex or compound-complex.", when: "n_right = 6", explain: "Count the main and dependent clauses. One main clause alone is simple. Two main clauses are compound. A main and a dependent clause are complex. Two mains and a dependent are compound-complex." }
```

Were you right about the bus? Three clauses: two main and one dependent.

## Worked example: how the shapes differ

```step
stage: investigate
insight: "Sorting, catching a mislabelled sentence and explaining a comma shows students what makes each shape and what is lost when the shape is wrong."
tasks:
  - check:
      type: sort
      q: "Sort each sentence by its shape."
      options: ["Simple", "Compound", "Complex"]
      items:
        - ["The tide came in.", "Simple", "One main clause and nothing else."]
        - ["The tide came in, so we left.", "Compound", "Two main clauses joined by so."]
        - ["We left because the tide came in.", "Complex", "Because the tide came in is a dependent clause."]
        - ["Ava swam and Ben watched.", "Compound", "Two main clauses joined by and."]
        - ["Ben watched while Ava swam.", "Complex", "While Ava swam is a dependent clause."]
        - ["Everyone cheered.", "Simple", "One main clause."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib labelled each sentence on its own line. One label is wrong. Click the line with the wrong label."
      answer: 3
      fault: logic
      misconception: shape-miscount
      explain: "Line 3 is complex, not compound: 'because the storm grew' is a dependent clause, not a second main clause."
  - check:
      type: question
      q: "'The dog barked, and the cat ran.' Why is this compound and not complex?"
      options: ["Both parts could stand alone as sentences", "It has a comma", "It has the word and", "It is a long sentence"]
      answer: 0
      feedback: [null, "Commas appear in all four shapes.", "And is a clue, but the test is whether both parts could stand alone.", "Length does not decide the shape."]
      explain: "Both 'the dog barked' and 'the cat ran' could stand alone, so they are both main clauses. Two main clauses make a compound sentence."
```

### Four steps to name a shape

```worked
\text{Count the verbs} :: Each verb belongs to a clause. How many are there?
\text{Test each clause} :: Could it stand alone as a sentence? Then it is a main clause.
\text{Name the shape} :: One main is simple, two mains compound, a main with a dependent complex, two mains with a dependent compound-complex.
```

### Count the clauses

### Which shape?

## Vary: build a compound-complex sentence

```step
stage: modify
insight: "Building a compound-complex sentence from three clauses shows how a joining word and a dependent clause fit together."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["Two of the three pieces could stand alone. The third cannot.", "Try the pieces in more than one order and read each aloud."]
check: { type: board, text: "Build a sentence with two main clauses and one dependent clause.", when: "in_order = 1", explain: "Ava dived in and Ben followed although the pool was cold has two main clauses joined by and, plus one dependent clause starting with although. The dependent clause can also come first or in the middle, so more than one order works." }
```

## Practise: spot the dependent clause

```step
stage: practise
insight: "Colouring the dependent clauses in compound-complex sentences shows where the extra clause sits."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["A dependent clause cannot stand alone as a sentence. Find the parts that cannot.", "Colour the whole dependent clause, from its joining word to the end of the clause."]
check: { type: board, text: "Colour the dependent clause in each sentence.", when: "chains_ok = 1 and n_stray = 0", explain: "In each sentence the dependent clause starts with a word like because, when, although or if." }
```

## Make: a note home

```step
stage: make
insight: "Writing a short note that uses a compound, a complex and a compound-complex sentence puts all the shapes to work in a real text."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Write to a parent about a school event. Include at least one compound and one complex sentence.", "Try one compound-complex sentence for the most important news."]
check: { type: board, text: "Write at least four sentences, using at least two joining words that start dependent clauses.", when: "n_sentences >= 4 and n_joiners >= 2", explain: "Your note uses joining words that start dependent clauses. Ask a partner to label each sentence simple, compound, complex or compound-complex." }
```

The board counts sentences and joining words. Whether your shapes are what you meant is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Labelling the shapes in a real paragraph shows whether the writing has a mix."
check: { type: reflect, text: "I labelled the shape of every sentence in a paragraph I wrote, and I noticed which shape I used most." }
```
