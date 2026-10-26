---
order: 3
unit: warmup
optional: true
title: Where a sentence starts
summary: "The start of a sentence tells the reader what it is about, and the rest adds something new. When each start picks up from what came before, the paragraph flows. Moving a time, a reason or a contrast to the start gives it the spotlight."
language: maths
node: [AC9E5LA04 n1, AC9E5LA04 n2, AC9E5LA04 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "They picks up the penguins, which the reader already knows. Starting with After the storm picks up the storm and puts the time in the spotlight." }
hook: "Two sentences say exactly the same thing in different orders. Why does one fit the paragraph and the other make you stop?"
---
The **start** of a sentence tells the reader what the sentence is about. The rest of the sentence adds something **new** about it. When each start picks up something the reader already knows, the paragraph flows from one sentence to the next.

## Predict: which version fits?

```step
stage: predict
insight: "Committing to one of two same-meaning versions shows students already feel flow, before they can say why."
check:
  type: predict
  q: "'Wombats dig long burrows under the ground.' Which sentence fits best next?"
  options: ["Their burrows can be up to 30 metres long.", "Up to 30 metres is how long their burrows can be.", "Both fit equally well", "Neither fits"]
  actual: "Their burrows can be up to 30 metres long. It starts with what you just read about (burrows) and adds the new fact (30 metres). The other version starts with the new fact, so you have to hold it until the end to see what it is about."
```

## Try: choose the versions that flow

```step
stage: run
insight: "Choosing between versions with the same meaning isolates the one thing that changes: where the sentence starts."
try: { playground: board, starter: "text.yml#run", height: 330 }
hint: ["For each gap, look at the sentence before. Which version starts with something you already know?", "Starting with 'They' or 'Their' picks up the wombats. Starting with a new number or a new thing makes the reader wait."]
smaller:
  check: { type: question, q: "The sentence before is about wombats' burrows. Which start picks that up?", options: ["Their burrows...", "Up to 30 metres..."], answer: 0, feedback: [null, "30 metres is the new fact. Save it for the end."], explain: "Their burrows is something the reader already knows, so it makes a good start." }
check: { type: board, text: "Choose the version of each sentence that flows from the one before.", when: "n_gaps_right = 3", explain: "Each choice starts with something the reader already met (their burrows, they, these short legs) and ends with the new fact." }
```

Were you right about the wombat sentence? Every choice here followed the same rule: known first, new after.

## Worked example: follow the starts

```step
stage: investigate
insight: "Reading only the starts of each sentence models how to check flow. Nib's slip is a sentence whose start jumps to something the reader hasn't met."
tasks:
  - check:
      type: question
      q: "'After the storm, the creek flooded the walking track.' What does putting After the storm first do?"
      options: ["It puts the time in the spotlight, so the reader knows when before what", "It makes the sentence a question", "It shows the storm was the most important thing in the whole text", "Nothing: the start of a sentence doesn't matter"]
      answer: 0
      feedback: [null, "It is still a statement.", "It shows what matters in this sentence, not the whole text.", "Try reading 'The creek flooded the walking track after the storm.' The focus moves."]
      explain: "Moving the time to the start gives it the spotlight: the reader learns when first, then what happened."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph, one sentence per line. Click the sentence whose start jumps to something the reader hasn't met yet."
      answer: 3
      fault: logic
      misconception: start-with-new
      explain: "Line 3 starts with 'A sticky substance called propolis', which is brand new. Starting with 'They' (the bees) and ending with propolis would keep the thread: They seal gaps with a sticky substance called propolis."
  - check:
      type: question
      q: "Why does starting with something the reader knows make writing easier to follow?"
      options: ["The reader connects the new information to what they already have", "It makes sentences shorter", "Teachers prefer it", "It means you never repeat a word"]
      answer: 0
      feedback: [null, "Length doesn't change: the same words move around.", "It helps every reader, not just teachers.", "You often repeat or point back to a word to do it."]
      explain: "Known first gives the reader a hook to hang the new information on."
```

### Reading the starts

```worked
\text{Underline each start} :: Mark the first few words of every sentence, up to the main doing word.
\text{Read only the starts} :: Read them in a row. Do they follow a thread (wombats, their burrows, they)?
\text{Find a jump} :: A start that names something new breaks the thread. The reader has to stop.
\text{Move it} :: Rewrite so the start picks up something known, and the new thing comes at the end.
```

Now look at what a start can do when the writer moves a time to the front.

### Find Nib's jump

### Why known first?

## Vary: put it in the spotlight

```step
stage: modify
insight: "Choosing which part goes first for a reason (a time, a cause, a contrast) shows that the start is a choice the writer makes on purpose."
try: { playground: board, starter: "text.yml#vary", height: 300 }
hint: ["The first sentence after each gap tells you what the writer wants the reader to notice.", "If the surprise is that it happened despite the cold, start with Although."]
check: { type: board, text: "For each gap, pick the version whose start puts the right thing in the spotlight.", when: "n_gaps_right = 2", explain: "Although it was freezing puts the surprise first, and Because the bus was late puts the reason first, which is what each paragraph is about." }
```

## Practise: a paragraph that flows

```step
stage: practise
insight: "Three choices in a row on a new topic make the move a habit rather than a one-off."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["Read the sentence before each gap. Which version starts with something already named?", "This paragraph is about the school's solar panels. Keep the panels, or what they make, at the start."]
check: { type: board, text: "Choose the version of each sentence that keeps the paragraph flowing.", when: "n_gaps_right = 3", explain: "Each choice starts with the panels or the electricity they make, so the reader never loses the thread." }
```

## Make: your own starts

```step
stage: make
insight: "Writing a paragraph and then reading only its starts turns the check into a habit for their own writing."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own and write four sentences about an animal, a place or a game.", "Then read only the start of each sentence. Does each one pick up something from before?"]
check: { type: board, text: "Write a paragraph of at least four sentences, then read only the starts of each sentence aloud.", when: "is_written = 1 and n_sentences >= 4", explain: "If your starts follow a thread, your reader can follow your paragraph." }
```

The board only checks that you wrote it. Reading the starts aloud, to yourself or a partner, is the real check.

## In your own writing

```step
stage: make
tier: typical
insight: "Rereading class writing for the starts of sentences is a quick edit students can keep using."
check: { type: reflect, text: "In a paragraph of my own writing, I underlined the start of each sentence and read the starts in a row. Where one jumped to something new, I rewrote it so the start picked up something the reader already knew." }
```
