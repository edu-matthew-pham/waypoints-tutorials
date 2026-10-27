---
order: 1
unit: warmup
title: One main idea, one extra
summary: "A main clause makes sense on its own. A dependent clause adds something to it, such as when, why or if, and cannot stand alone. A joining word (a subordinating conjunction) such as because, until, if or after links them. Putting the two together makes a complex sentence that says more than two short ones."
language: maths
node: [AC9E4LA06 n1, AC9E4LA06 n2, AC9E4LA06 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Ava kept swimming can stand alone, so it is the main clause. Although the water was cold cannot, so it is the dependent clause. Although adds a surprise to the main idea." }
hook: "'Because the water was high.' Is that a whole sentence?"
---
A **clause** is a group of words built around a verb. There are two kinds:

- A **main clause** makes sense on its own. It can be a whole sentence.
- A **dependent clause** adds extra information (when, why, if) and cannot stand alone. It starts with a **joining word** (also called a subordinating conjunction) such as *because*, *until*, *if*, *after* or *while*.

A sentence with a main clause and a dependent clause is a **complex sentence**.

## Predict: which part can stand alone?

```step
stage: predict
insight: "Predicting which half of a sentence can stand alone shows students they already feel the difference between a complete idea and an add-on."
check:
  type: predict
  q: "'When the bell rang, the students lined up.' Which part could be a whole sentence on its own?"
  options: ["When the bell rang", "the students lined up", "Both parts", "Neither part"]
  actual: "'The students lined up' stands alone. 'When the bell rang' leaves you waiting to hear what happened, so it is the add-on, the dependent clause."
```

## Try: main or dependent?

```step
stage: run
insight: "Labelling both halves of four sentences shows that the joining word belongs to the dependent clause and that the order of the halves can change."
try: { playground: board, starter: "text.yml#run", height: 470 }
hint: ["Click a part, then choose Main clause or Dependent clause.", "Ask of each part: could it be a whole sentence on its own?"]
smaller:
  check: { type: question, q: "'after the game ended' is part of a sentence. Could it be a whole sentence on its own?", options: ["No, it leaves you waiting to hear what happened", "Yes, because it has a verb", "Yes, because it starts with a joining word"], answer: 0, feedback: [null, "Having a verb isn't enough. It also needs to be a complete idea.", "A joining word makes a part depend on another, so it works against standing alone."], explain: "It leaves you waiting for more, so it is a dependent clause." }
check: { type: board, text: "Label each part of each sentence as a main clause or a dependent clause.", when: "n_right = 8 and n_wrong = 0", explain: "Because it was raining, If the creek rises, until the bus arrived and while she washed the dishes cannot stand alone, so they are dependent clauses. The match was cancelled, the class waited, the track will close and Mia sang each stand alone. The dependent clause can come first or last." }
```

Were you right about the bell? 'The students lined up' stood alone, and 'when the bell rang' was the extra.

## Worked example: what does the extra add?

```step
stage: investigate
insight: "Matching joining words to what they add, catching a dependent clause pretending to be a sentence, and choosing the one that gives a reason shows the clause is chosen for the meaning it adds."
tasks:
  - check:
      type: match
      q: "Match each joining word to what its clause adds."
      pairs:
        - ["after", "When: time"]
        - ["because", "Why: reason"]
        - ["unless", "What must be true: condition"]
        - ["as if", "How: manner"]
      explain: "The joining word tells the reader how the extra idea connects to the main one: when it happens, why, what has to be true, or how."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's recount, one sentence per line. One line is only a dependent clause, so it cannot stand alone. Click it."
      answer: 3
      fault: logic
      misconception: clause-alone
      explain: "Line 3: 'Because the water was high.' leaves you waiting for what happened. Nib needs a main clause: 'Because the water was high, Ms Okafor told us to stay back.'"
  - check:
      type: question
      q: "Which sentence tells you why the group packed up?"
      options: ["We packed up because the storm was coming.", "We packed up before the storm arrived.", "We will pack up if the storm arrives.", "We packed up when the storm arrived."]
      answer: 0
      feedback: [null, "Before tells you when, not why.", "If tells you what has to be true.", "When tells you the time."]
      explain: "Because gives the reason. The joining word decides what kind of extra information the dependent clause adds."
```

### Three steps for any complex sentence

```worked
\text{Find the joining word} :: Look for because, until, if, after, while, although.
\text{Test each part} :: Could this part be a whole sentence on its own?
\text{Name what it adds} :: When? Why? What must be true? How?
```

Now match the joining words.

### Find the clause that cannot stand alone

### Which one gives the reason?

## Vary: choose the joining word

```step
stage: modify
insight: "Choosing the joining word that fits each sentence shows the word decides the meaning the dependent clause adds."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["Read each sentence with each choice. Only one makes sense.", "Ask what the dependent clause is adding: a reason, a time, or how something was done."]
check: { type: board, text: "Choose the joining word that fits each sentence.", when: "n_gaps_right = 3", explain: "Because gives the reason the match was cancelled, until says how long we wait, and as if says how Mia ran. The wrong choices make nonsense, which shows the joining word is doing real work." }
```

## Practise: find the joining words

```step
stage: practise
insight: "Colouring the joining words in a short text shows where each dependent clause starts."
try: { playground: board, starter: "text.yml#practise", height: 300 }
hint: ["Choose Chain 1, then click each word that joins a dependent clause to its main clause.", "There are three. Each one starts the extra part of its sentence."]
check: { type: board, text: "Colour the three joining words.", when: "chains_ok = 1 and n_stray = 0", explain: "After, while and If each start a dependent clause. They link the extra idea to the main one." }
```

## Make: a recount with extras

```step
stage: make
insight: "Writing three sentences of a recount with two different joining words puts complex sentences to work in a real text type."
try: { playground: board, starter: "text.yml#make", height: 330 }
hint: ["Think of a school excursion or a day out. Write what happened.", "Use at least two different joining words, such as when, because, after, until or while."]
check: { type: board, text: "Write at least three sentences of a recount and use at least two different joining words.", when: "n_sentences >= 3 and n_joiners >= 2", explain: "Your recount uses dependent clauses to add when and why. Ask a partner to point to each dependent clause and say whether it could stand alone." }
```

The board counts sentences and joining words. Whether each dependent clause really cannot stand alone is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for dependent clauses that stand alone puts the move to use outside the board."
check: { type: reflect, text: "I read a recount of my own and checked that each dependent clause is joined to a main clause, so none is left as a sentence on its own." }
```
