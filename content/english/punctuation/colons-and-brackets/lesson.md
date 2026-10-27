---
order: 4
unit: core
title: Colons and brackets
summary: "A colon comes after a complete main clause and introduces what the clause promises: a list, an explanation or a quotation. It never splits a clause in the middle. Brackets hold extra information that the sentence could do without: if you take the bracketed part out, the sentence still makes sense."
language: maths
node: [AC9E7LA09 n1, AC9E7LA09 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The first part is a whole sentence on its own. The colon promises that a list comes next." }
hook: "'I have one rule: no spoilers.' What does the colon promise the reader?"
---
A **colon** (:) follows a complete main clause and says *here comes the detail*:

- **A list:** *The kit has three parts: a lens, a tube and a stand.*
- **An explanation:** *The reason was simple: the bus never came.*
- **A quotation:** *The sign said: 'Closed today.'* (For something a person says aloud, a comma is usual, as in the last lesson.)

If the words before the colon cannot stand alone as a sentence, the colon does not belong.

**Brackets** ( ) hold extra information that the sentence can do without:

- *The museum (next to the library) opens at nine.*

Test: cover the bracketed part. If what is left is still a whole, sensible sentence, the brackets are in the right place.

## Predict: which mark?

```step
stage: predict
insight: "Predicting which mark follows a complete clause shows students that the colon needs a whole clause before it."
check:
  type: predict
  q: "'The coach had one rule be on time.' Which mark goes after 'rule'?"
  options: ["A colon", "A comma", "A bracket", "No mark"]
  actual: "A colon. 'The coach had one rule' is a complete sentence, and it promises something: what the rule is. The colon introduces it."
```

## Try: what does the colon introduce?

```step
stage: run
insight: "Labelling what each colon introduces shows that it always promises something: a list, an explanation or a quotation."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Read the words after the colon. Are they items, a reason or detail, or someone's words?", "What did the first part promise?"]
smaller:
  check: { type: question, q: "'I have one wish: to win.' What does the colon introduce?", options: ["A list of wishes", "The detail the first part promised", "Someone's spoken words"], answer: 1, feedback: ["There is only one wish, and 'to win' is not a list.", null, "Nobody is quoted here."], explain: "The first part promises a wish. The words after the colon say what it is." }
check: { type: board, text: "Label what each colon introduces: a list, an explanation or a quotation.", when: "n_right = 6 and n_wrong = 0", explain: "Two sentences have a list after the colon, two give the explanation, and two quote written words: the sign and the poster." }
```

## Worked example: does the colon belong?

```step
stage: investigate
insight: "Sorting colons by whether a complete clause comes before them, spotting one in the middle of a clause, and testing bracketed parts shows that each mark has a condition."
tasks:
  - check:
      type: sort
      q: "Does the colon in each sentence belong?"
      options: ["The colon belongs", "The colon does not belong"]
      items:
        - ["Ravi had one goal: to finish the track.", "The colon belongs", "'Ravi had one goal' is a complete sentence, and the colon introduces what the goal is."]
        - ["We stayed home because: it was raining.", "The colon does not belong", "'We stayed home because' is not a complete sentence. The colon splits the clause."]
        - ["Ava bought three things: bread, milk and eggs.", "The colon belongs", "A complete sentence comes before the colon, and a list follows."]
        - ["She said that: the bus was late.", "The colon does not belong", "'She said that' is not a complete sentence. The colon splits the clause."]
        - ["The result was clear: our team had won.", "The colon belongs", "A complete sentence comes first, and the colon introduces the explanation."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's excursion note, one sentence per line. One line has a colon in the middle of a clause. Click it."
      answer: 3
      fault: logic
      misconception: colon-mid-clause
      explain: "Line 3 has a colon after 'because', so the colon splits the clause. The words before it are not a sentence on their own."
  - check:
      type: question
      q: "Which sentence stops making sense when you take out the bracketed part?"
      options: ["Ava (our captain) won the toss.", "The race (was cancelled) because of rain.", "The cave (about two hours away) is huge."]
      answer: 1
      feedback: ["Without the brackets: 'Ava won the toss.' It is still whole.", null, "Without the brackets: 'The cave is huge.' It is still whole."]
      explain: "Without the bracketed part, 'The race because of rain.' is not a sentence. Brackets hold extra information, not words the sentence needs."
```

### Does the colon belong?

```worked
\text{Cover the colon and what follows} :: Is what is left a whole sentence?
\text{If it is} :: The colon can introduce a list, an explanation or a quotation.
\text{If it is not} :: A colon splits the clause. Leave it out.
```

### Spot the misplaced colon

### Take out the brackets

## Vary: brackets

```step
stage: modify
insight: "Building a sentence with brackets shows which words are extra and which the sentence needs."
try: { playground: board, starter: "text.yml#vary", height: 320 }
hint: ["Which tile gives extra information about Ravi?", "Cover the bracketed part. Does the sentence still work?"]
check: { type: board, text: "Build the sentence with the extra detail in brackets.", when: "in_order = 1", explain: "'Ravi scored twice' stands alone. '(our team captain)' is the extra detail, so it goes in brackets." }
```

## Practise: colons in a notice

```step
stage: practise
insight: "Choosing a colon, a comma or no mark across several sentences makes students check what comes before."
try: { playground: board, starter: "text.yml#practise", height: 420 }
hint: ["Is what comes before the gap a complete sentence?", "If not, what is the gap in the middle of?"]
check: { type: board, text: "Choose the mark for each box.", when: "n_right = 5 and n_wrong = 0", explain: "A colon follows each complete clause that promises something. After 'need' and 'because' the clause is not finished, so no mark." }
```

## Make: an information note

```step
stage: make
insight: "Writing an information note with a colon and brackets puts both marks to work in a real text type."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Write a note for families about an excursion or an event.", "Use a colon to introduce what to bring, and brackets for extra detail such as a time or a place."]
check: { type: board, text: "Write at least four sentences with a colon and brackets.", when: "n_sentences >= 4 and n_colons >= 1 and n_brackets >= 1", explain: "Your note has a colon and brackets. Ask a partner to cover the colon and check a whole sentence comes before it, then to cover the bracketed part and check what is left still makes sense." }
```

The board counts colons and brackets. Whether they are in the right place is for you and a partner to check.

## In your own writing

```step
stage: make
tier: typical
insight: "Testing each colon and bracket in real writing puts the two tests to use outside the board."
check: { type: reflect, text: "I tested a colon or a bracket in my own writing by covering the part around it." }
```

## Wider: a colon in a science report

```step
stage: make
tier: wider
insight: "Joining two sentences with a colon applies the same idea at the same level in a new text type."
check:
  type: reasoning
  q: "A science report says: 'The experiment failed. The water was too cold.' Join the two sentences with a colon and say what the second part does."
  placeholder: "The experiment failed: ... The second part ..."
  models:
    - title: "A strong answer"
      text: "The experiment failed: the water was too cold. The second part explains the first, so the reader gets the cause straight away."
    - title: "A different view that also works"
      text: "The experiment failed: the water was too cold. The colon promises a reason, and the second part gives it."
  criteria: ["I joined the sentences with a colon.", "A whole sentence comes before the colon.", "I said the second part explains the first."]
  explain: "A colon links a statement to the detail that follows. It suits reports, where reasons come right after results."
```
