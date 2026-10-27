---
order: 3
unit: warmup
title: What the extra clause adds
summary: "A dependent clause adds a particular kind of information: a reason (because), a purpose (so that), a condition (unless), a concession, which admits something against the point (although) or a time (until). Which clause comes first changes what the reader notices, so writers choose an order for effect."
language: maths
node: [AC9E5LA05 n1, AC9E5LA05 n2, AC9E5LA05 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Even though adds a surprise: Ava was nervous, yet she spoke. Putting it first lets the reader feel the nerves before the courage." }
hook: "'Although the canteen costs more, it serves healthier food.' Why does the writer start with the downside?"
---
A dependent clause adds one of five kinds of information:

- **Reason:** *because* the filter broke
- **Purpose:** *so that* everyone can see
- **Condition:** *if* the creek rises
- **Concession:** *although* the fare was high (a point that goes against the main idea)
- **Time:** *after* the bell rang

It can come before or after the main clause. What comes **first** gets the reader's attention first.

## Predict: what is although doing?

```step
stage: predict
insight: "Predicting what although does shows students that a joining word carries a relationship, not just a join."
check:
  type: predict
  q: "'Although the new canteen costs more, it serves healthier food.' What is the writer doing with although?"
  options: ["Admitting a downside, then answering it", "Giving a reason", "Setting a condition", "Saying when something happens"]
  actual: "Admitting a downside, then answering it. Although names a point that goes against the main idea, which the main clause then outweighs."
```

## Try: which relationship?

```step
stage: run
insight: "Labelling the relationship each dependent clause makes shows that the joining word, not the position, tells the reader what it adds."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Click a dependent clause, then choose Reason, Purpose, Condition, Concession or Time.", "Ask what the clause adds: why, what for, what must be true, a surprise, or when?"]
smaller:
  check: { type: question, q: "'Although the oval was wet, the game went ahead.' Is it what you would expect after a wet oval?", options: ["No, it is a surprise, which is what although signals", "Yes, a wet oval makes a game go ahead", "It does not matter, although tells you when"], answer: 0, feedback: [null, "A wet oval is more likely to stop a game than to start one.", "Although does not give a time."], explain: "Although marks a point that goes against the main idea. That is a concession." }
check: { type: board, text: "Label what each dependent clause adds: reason, purpose, condition, concession or time.", when: "n_right = 5 and n_wrong = 0", explain: "Because students were getting sunburnt gives the reason, so that everyone can sit down says what the tables are for, unless the rain stops sets a condition, although the oval was wet is a concession, and until the last bus left says when." }
```

Were you right about the canteen? Although admitted a downside before the writer answered it.

## Worked example: choose the relationship, then the order

```step
stage: investigate
insight: "Sorting joining words by the relationship they make, catching a joining word that makes the wrong one, and choosing what the order puts first shows both are choices."
tasks:
  - check:
      type: sort
      q: "Sort each joining word by what its clause adds."
      options: ["Reason", "Purpose", "Condition", "Concession", "Time"]
      items:
        - ["because", "Reason", "Because says why something happened."]
        - ["so that", "Purpose", "So that says what something is for."]
        - ["as long as", "Condition", "As long as says what has to stay true."]
        - ["even though", "Concession", "Even though names a point that goes against the main idea."]
        - ["after", "Time", "After says when."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's letter to the principal, one sentence per line. One joining word gives a different relationship from the one Nib means. Click that line."
      answer: 3
      fault: logic
      misconception: wrong-relationship
      explain: "Line 3: Nib means 'because many students need a quiet place to read', a reason. Although admits a point against the main idea, so the sentence says the opposite of what Nib means."
  - check:
      type: question
      q: "'Although the walk was long, the group finished before dark.' Compared with 'The group finished before dark although the walk was long,' what does the first put first?"
      options: ["The difficulty, so the finish comes as a relief", "The finish, so the difficulty is only an afterthought", "Nothing, because the order makes no difference", "Both ideas at once"]
      answer: 0
      feedback: [null, "That describes the second sentence, which starts with the finish.", "The same facts come across differently, so the order does matter.", "A sentence can only put one clause first."]
      explain: "The first version makes the reader meet the long walk first, so the finish lands as a relief. The second leads with the good news."
```

### Which relationship, and what is first?

```worked
\text{Find the dependent clause} :: Look for the joining word.
\text{Name what it adds} :: Reason, purpose, condition, concession or time?
\text{Ask what comes first} :: The clause that comes first is what the reader notices first.
```

Now sort the joining words.

### Find the wrong relationship

### What does the order put first?

## Vary: change the order

```step
stage: modify
insight: "Building the same sentence both ways shows the order can be changed without changing the facts, only the emphasis."
try: { playground: board, starter: "text.yml#vary", height: 330 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Click a piece to place it. The first piece you place starts the sentence.", "Read the result aloud. Does it say what you mean?"]
    check: { type: board, text: "Build the sentence with the reason first.", when: "first_a = 1 and in_order = 1", explain: "Because the bus was late, the excursion started late. The reader meets the reason first." }
  - starter: "text.yml#vary-b"
    hint: ["Take the pieces out, or use Move left and Move right.", "Now put the main clause first."]
    check: { type: board, text: "Now build it with the main clause first.", when: "first_b = 1 and in_order = 1", explain: "The excursion started late because the bus was late. The same facts, but the reader meets the news first." }
```

### Reason first

### Main clause first

## Practise: choose the joining word

```step
stage: practise
insight: "Choosing the joining word for a named relationship in context shows the relationship decides the word."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Read each sentence with each choice. Ask what the dependent clause is adding.", "Say each sentence aloud with your choice and listen for one that makes sense."]
check: { type: board, text: "Choose the joining word that fits each sentence.", when: "n_gaps_right = 3", explain: "Because gives the reason the ferry stopped, so that gives the council's purpose, and although names a surprise: shallow water, yet life jackets." }
```

## Make: a letter to the principal

```step
stage: make
insight: "Writing four sentences of a persuasive letter with three different joining words puts the relationships to work for an argument."
try: { playground: board, starter: "text.yml#make", height: 360 }
hint: ["Choose something you would like the school to change. Write to the principal.", "Use at least three different joining words from this lesson, such as because, so that, unless, although or until. Start at least one sentence with its dependent clause."]
check: { type: board, text: "Write at least four sentences of a letter to the principal and use at least three different joining words.", when: "n_sentences >= 4 and n_joiners >= 3", explain: "Your letter uses dependent clauses to give reasons, purposes and conditions. Ask a partner which clause each sentence puts first, and why." }
```

The board counts sentences and joining words. Whether each clause adds the relationship you meant is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real piece of writing for what each dependent clause adds and which comes first puts the move to use."
check: { type: reflect, text: "I checked a piece of my own writing: I named what each dependent clause adds, and I tried the other order for at least one sentence to see what changed." }
```

## Another context

```step
stage: make
tier: wider
insight: "Moving a clause in a science sentence applies the same choice at the same level in a new text type."
check:
  type: reasoning
  q: "A science report says: 'The ice melts if the temperature rises above zero.' Write the sentence with the condition first. What does the reader notice first now?"
  placeholder: "If the temperature rises above zero, ... The reader notices ..."
  models:
    - title: "A strong answer"
      text: "If the temperature rises above zero, the ice melts. The reader now notices the condition first, so the sentence reads like a rule: whenever this happens, that follows."
    - title: "A different view that also works"
      text: "If the temperature rises above zero, the ice melts. Starting with the condition makes the temperature the topic, which suits a report about what warmth does."
  criteria: ["I put the dependent clause first and kept the facts the same.", "I said what the reader notices first.", "I linked that to what the report is about."]
  explain: "Both orders are correct. The one that puts the condition first fits a text explaining what depends on what."
```
