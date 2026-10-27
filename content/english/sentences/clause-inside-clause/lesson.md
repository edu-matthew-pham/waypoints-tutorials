---
order: 5
unit: detail
title: A clause inside a clause
summary: "An embedded clause is tucked inside a main clause, straight after the noun it tells about, and starts with who, which, that or whose. It adds detail without a new sentence and keeps the main news in the main clause. A clause joined at the end of a sentence is different: it adds a reason, a time or a condition to the whole idea."
language: maths
node: [AC9E6LA05 n1, AC9E6LA05 n2, AC9E6LA05 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Who grew up in Darwin is tucked inside the main clause, right after the noun it tells about. Take it out and the sentence still stands." }
hook: "'The boat, which Eli loved, sank.' Where did 'which Eli loved' come from?"
---
An **embedded clause** (also called a relative clause) sits **inside** a main clause, right after the noun it tells about. It starts with *who*, *which*, *that* or *whose*.

- *My cousin, **who lives in Perth**, visits in June.*

A clause joined at the **end** is different. It starts with a joining word such as *because* or *after* and says something about the whole main clause.

- *The track is closed **because the creek is high**.*

Both are dependent clauses, but they do different jobs.

## Predict: take it out

```step
stage: predict
insight: "Predicting what is left when the embedded clause is cut shows students that the main clause stands without it."
check:
  type: predict
  q: "'The librarian, who wears a green scarf, found the book.' If you cut out 'who wears a green scarf', what is left?"
  options: ["The librarian found the book.", "The librarian, found the book.", "Wears a green scarf found the book.", "Nothing that makes sense"]
  actual: "The librarian found the book. The embedded clause adds detail about the librarian. The main clause still stands on its own."
```

## Try: embedded or at the end?

```step
stage: run
insight: "Labelling three kinds of part in five sentences shows an embedded clause sits inside the main clause, splitting it, while an end clause joins on after it."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Click a part, then choose Main clause, Embedded clause or Clause joined at the end.", "An embedded clause comes right after a noun and starts with who, which or that. Take it out: the main clause still stands."]
smaller:
  check: { type: question, q: "'The dog that barked woke the baby.' Which words are the embedded clause?", options: ["that barked", "The dog", "woke the baby"], answer: 0, feedback: [null, "The dog is the noun the clause tells about.", "Woke the baby is the rest of the main clause."], explain: "That barked is tucked in after the noun dog and tells you which dog." }
check: { type: board, text: "Label each part of each sentence: main clause, embedded clause, or clause joined at the end.", when: "n_right = 13 and n_wrong = 0", explain: "The old mill, the walkers, the ranger and their ends are main clause. Which stands beside the river, who were tired and who knew the track are embedded: each sits right after a noun. Because the creek is high and after the storm passed are joined at the end. (A main clause split by an embedded clause is labelled in both parts.)" }
```

Were you right about the librarian? The sentence was still complete without the clause.

## Worked example: where does it go, and why?

```step
stage: investigate
insight: "Sorting sentences by where the clause sits, catching an embedded clause that has drifted away from its noun, and choosing the construction that keeps the main news main shows the embedded clause is chosen for what it does."
tasks:
  - check:
      type: sort
      q: "Sort each sentence by the kind of dependent clause it has."
      options: ["Embedded clause", "Clause joined at the end"]
      items:
        - ["The cod that Mia caught was huge.", "Embedded clause", "That Mia caught sits right after cod and tells you which cod."]
        - ["My cousin, who lives in Perth, visits in June.", "Embedded clause", "Who lives in Perth is tucked in after cousin."]
        - ["The oval that we use is flooded.", "Embedded clause", "That we use tells you which oval, and sits inside the main clause."]
        - ["We stayed inside because it was raining.", "Clause joined at the end", "Because it was raining adds a reason to the whole main clause."]
        - ["The match stopped after the siren sounded.", "Clause joined at the end", "After the siren sounded adds a time to the whole main clause."]
        - ["Ava smiled while she waited.", "Clause joined at the end", "While she waited adds a time to the whole main clause."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's biography, one sentence per line. One embedded clause has drifted away from the noun it tells about, so the sentence says something silly. Click it."
      answer: 3
      fault: logic
      misconception: embedded-misplaced
      explain: "Line 3: 'in a book that sank' makes the book sink. The clause should sit right after the noun it tells about: 'Eli wrote about the boat that sank in a book.' or 'Eli wrote a book about the boat that sank.'"
  - check:
      type: question
      q: "'The bridge is closed. It crosses the creek.' A writer wants the closure to stay the main news and the creek to be a side detail. Which sentence does that?"
      options: ["The bridge, which crosses the creek, is closed.", "The bridge crosses the creek, so it is closed.", "The bridge is closed because it crosses the creek.", "The bridge crosses the creek and is closed."]
      answer: 0
      feedback: [null, "So makes crossing the creek the reason it is closed, which is not what the two sentences say.", "Because makes crossing the creek the reason, which changes the meaning.", "And gives the crossing the same weight as the closing."]
      explain: "An embedded clause tucks the detail inside, so the main clause (the bridge is closed) stays the main news, without changing the facts."
```

### Embedded or joined at the end?

```worked
\text{Find the noun} :: Which noun is the clause telling you about?
\text{Check where it sits} :: Right after that noun, inside the main clause.
\text{Take it out} :: The main clause should still stand on its own.
```

Now sort the sentences.

### Find the clause that drifted

### Which keeps the main news main?

## Vary: tuck it inside

```step
stage: modify
insight: "Building one sentence from the main clause and an embedded clause shows the clause goes in the middle, not at the end."
try: { playground: board, starter: "text.yml#vary", height: 420 }
hint: ["The embedded clause goes right after the noun it tells about.", "Start with the noun group. The commas are already part of the pieces."]
check: { type: board, text: "Build the sentence with the embedded clause inside the main clause.", when: "in_order = 1 and n_decoys_used = 0", explain: "The bridge, which crosses the creek, is closed. The embedded clause sits right after bridge. The decoy, because it crosses the creek, would change the meaning." }
```

## Practise: find the embedded clauses

```step
stage: practise
insight: "Colouring only the embedded clauses in a short text shows the difference between them and the other dependent clauses."
try: { playground: board, starter: "text.yml#practise", height: 300 }
hint: ["Choose Chain 1 and click the words of each embedded clause.", "Two sentences have an embedded clause. The others have a clause joined at the end."]
check: { type: board, text: "Colour the two embedded clauses.", when: "chains_ok = 1 and n_stray = 0", explain: "Who runs a bakery and that she bakes each sit right after a noun. Because she starts at four and after the last customer leaves are joined at the end." }
```

## Make: a short biography

```step
stage: make
insight: "Writing a short biography with at least two embedded clauses puts the move to work where a writer packs in detail about a person."
try: { playground: board, starter: "text.yml#make", height: 360 }
hint: ["Choose a person you know or have made up. Write four sentences about them.", "Use who, which or whose at least twice to add detail inside a sentence, right after the noun it tells about."]
check: { type: board, text: "Write at least four sentences of a short biography and use who, which or whose at least twice.", when: "n_sentences >= 4 and n_who >= 2", explain: "Your biography packs detail into its sentences. Ask a partner to point to each embedded clause and the noun it tells about." }
```

The board counts sentences and the words who, which and whose. Whether each clause sits right after its noun is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for embedded clauses puts the move to use outside the board."
check: { type: reflect, text: "I read a piece of my own writing and found two short sentences about the same person or thing, then joined them with an embedded clause." }
```
