---
order: 10
unit: shapes
title: Say more in fewer words
summary: "Two choppy sentences about the same thing can fold into one. The second becomes an embedded clause that sits right after the noun it tells about, starting with who, which or that. The sentence carries the same facts in fewer words, and the reader meets them in one go."
language: maths
node: [AC9E8LA05 n1, AC9E8LA05 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Two sentences fold into one: 'who plays the cello' sits right after 'sister'." }
hook: "'My sister plays the cello. My sister practises daily.' Can you say both in one sentence without repeating 'my sister'?"
---
Two short sentences about the same thing can fold into one.

- **Before:** *The cafe sells hot pies. The cafe closes at four.*
- **After:** *The cafe, which sells hot pies, closes at four.*

The second sentence becomes an **embedded clause** (*which sells hot pies*). It sits right after the noun it tells about. Take it out and the reader loses a fact.

## Predict: fold two into one

```step
stage: predict
insight: "Predicting the folded sentence shows students that the second sentence can slot in after the noun it describes."
check:
  type: predict
  q: "'My sister plays the cello. My sister practises daily.' Which single sentence says both without repeating 'my sister'?"
  options: ["My sister, who plays the cello, practises daily.", "My sister plays the cello, my sister practises daily.", "My sister who practises daily, plays the cello and.", "Plays the cello, my sister practises daily."]
  actual: "My sister, who plays the cello, practises daily. The second sentence folds in right after 'sister', so the noun is named only once."
```

## Try: fold the second sentence in

```step
stage: run
insight: "Choosing the embedded clause that folds in a second sentence shows the joining word for a person (who), a thing (which) or either (that)."
try: { playground: board, starter: "text.yml#run", height: 420 }
hint: ["The new clause goes right after the noun it tells about.", "Who is for people. Which and that are for things."]
smaller:
  check: { type: question, q: "'Mia has a dog. The dog barks all night.' Which joining word folds the second sentence in?", options: ["that", "who", "because"], answer: 0, feedback: [null, "Who is for people, and a dog is not a person here.", "Because would add a reason, not fold in a detail."], explain: "That barks all night sits right after dog, so the sentence is 'Mia has a dog that barks all night.'" }
check: { type: board, text: "Choose the words that fold each second sentence into the first.", when: "n_gaps_right = 3", explain: "Each choice puts the second sentence right after the noun it tells about, starting with who, which or that." }
```

Were you right about your sister? The folded sentence names her only once.

## Worked example: what the embedded clause carries

```step
stage: investigate
insight: "Matching clauses to their nouns, finding the sentence not yet folded and saying what is lost when a clause is removed shows what an embedded clause carries."
tasks:
  - check:
      type: match
      q: "Match each embedded clause to the noun it tells about."
      pairs:
        - ["The cod that Mia caught was huge.", "cod"]
        - ["My cousin, who lives in Perth, visits in June.", "cousin"]
        - ["The oval, which floods every winter, is closed.", "oval"]
        - ["The student who won the prize smiled.", "student"]
      explain: "An embedded clause sits right after the noun it tells about, so the noun is the word just before the joining word."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib folded some choppy sentences into one. One line is still choppy, two sentences about the same thing. Click it."
      answer: 3
      fault: logic
      misconception: choppy-pair
      explain: "Line 3 still repeats 'the pool'. It folds to: The pool, which is old, is closed."
  - check:
      type: question
      q: "'My neighbour, who lives next door, plays cricket.' What do we lose if we take out 'who lives next door'?"
      options: ["A fact about where the neighbour lives", "The verb", "The word neighbour", "Nothing at all"]
      answer: 0
      feedback: [null, "The verb 'plays' is in the main clause.", "Neighbour is in the main clause.", "The clause adds a fact, so it matters."]
      explain: "The embedded clause carries a fact. Take it out and the reader no longer knows where the neighbour lives."
```

### Fold in three steps

```worked
\text{Find the shared noun} :: What are both sentences about?
\text{Fold the second in} :: Put it right after the noun, starting with who, which or that.
\text{Check it} :: Is the noun named once? Are both facts still there?
```

### Which noun?

### Still choppy?

## Vary: fold three pieces

```step
stage: modify
insight: "Building the folded sentence from three pieces shows where the embedded clause goes and how the commas frame it."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["The piece that starts with who tells about the sister.", "It goes right after sister, inside the sentence."]
check: { type: board, text: "Build the sentence that folds the second sentence into the first.", when: "in_order = 1", explain: "My sister, who plays the cello, practises daily puts the embedded clause right after sister." }
```

## Practise: spot the embedded clause

```step
stage: practise
insight: "Colouring each embedded clause shows where it sits and how short it can be."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Find who, which or that, then colour to the end of the clause.", "The clause is only the extra detail, not the whole sentence."]
check: { type: board, text: "Colour every embedded clause.", when: "chains_ok = 1 and n_stray = 0", explain: "Each embedded clause starts with who, which or that, and sits right after the noun it tells about." }
```

## Make: a review

```step
stage: make
insight: "Writing a short review that folds details into embedded clauses puts the move to work in a real text type."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Review a book, game or place. Say what it is, then add details with who, which or that.", "Fold two sentences into one wherever you repeat a noun."]
check: { type: board, text: "Write at least four sentences, using who, which or whose at least twice.", when: "n_sentences >= 4 and n_who >= 2" , explain: "Your review has embedded clauses. Ask a partner to underline each one and name the noun it tells about." }
```

The board counts sentences and the words who, which and whose. Whether your clauses sit next to the right noun is for a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Looking for choppy pairs in a real piece of writing puts the move to use outside the board."
check: { type: reflect, text: "I found two choppy sentences about the same thing in my own writing and folded them into one." }
```
