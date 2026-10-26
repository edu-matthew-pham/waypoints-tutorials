---
order: 7
unit: guide
title: Open and close
summary: "An overview at the start tells the reader where a whole text is going, and a conclusion at the end tells them where it went. They are the topic sentences of the whole text. A good overview even sets the order of the paragraphs that follow."
language: maths
node: [AC9E7LA04 n2]
hook: "A friend gives you directions: turn left, go past three houses, turn right. Would it help if they first said 'It's the blue house at the end of the next street'?"
---
A topic sentence tells the reader what a **paragraph** is about. A whole text has the same thing on a bigger scale:

- An **overview** (or introduction) at the start says what the text is about and where it is going.
- **Body paragraphs** each take one part, in order.
- A **conclusion** at the end pulls it together, so the reader knows where they have been.

## Predict: which helps more?

```step
stage: predict
insight: "Committing to how much an overview helps before seeing one makes its job concrete."
check:
  type: predict
  q: "A report starts straight in with 'A female lays one or two eggs in a burrow.' Another starts with 'This report looks at three surprises about the platypus.' Which gets the reader ready faster?"
  options: ["The one that says what the report will look at", "The one that starts with a fact", "Both are the same", "Neither: the title does that job"]
  actual: "The one with the overview. The fact on its own leaves the reader asking whose eggs, and why we are talking about them. The overview says what is coming, so every fact has a place to go."
```

## Try: label the parts

```step
stage: run
insight: "Labelling each paragraph's job (overview, body, conclusion) shows that each block guides the reader in a different way."
try: { playground: board, starter: "text.yml#run", height: 470 }
hint: ["Click a paragraph, then choose its job.", "The overview names what the report will cover. The conclusion pulls the three surprises together."]
smaller:
  check: { type: question, q: "Which paragraph names the three surprises before any of them is explained?", options: ["The first", "The second", "The last"], answer: 0, feedback: [null, "The second explains one surprise: the eggs.", "The last pulls the surprises together after they have been explained."], explain: "The first paragraph is the overview: it names the three surprises the report will cover." }
check: { type: board, text: "Label each paragraph as the overview, a body paragraph or the conclusion.", when: "n_right = 5 and n_wrong = 0", explain: "The first paragraph names the three surprises. The middle three take one surprise each, and the last pulls them together without adding anything new." }
```

Were you right about the overview? It named the three surprises before the body paragraphs explained them.

## Worked example: what each part does

```step
stage: investigate
insight: "Modelling how to check an overview against the body paragraphs and the conclusion gives a method for the whole text. Nib's slip is a conclusion that adds a new point."
tasks:
  - check:
      type: question
      q: "What does an overview do for the reader?"
      options: ["Says what the text is about and what it will cover, often in order", "Gives the most interesting fact first", "Repeats the title", "Says what the reader should think at the end"]
      answer: 0
      feedback: [null, "A good fact can hook a reader, but the overview's job is to show the way.", "It goes further than the title: it names the parts.", "That is closer to a conclusion's job, in a persuasive text."]
      explain: "The overview is a map: what the text is about and the parts it will cover."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is the plan for Nib's report, one paragraph per line. Click the paragraph that does the wrong job for its place."
      answer: 5
      fault: logic
      misconception: new-idea-in-conclusion
      explain: "Line 5: the conclusion brings in a new fact (wombats have cube-shaped droppings) that no paragraph covered. A conclusion pulls together what the text has already said. A new fact belongs in a body paragraph."
  - check:
      type: question
      q: "Why might a conclusion repeat some words from the overview?"
      options: ["So the reader sees the text has come back to where it started", "Because the writer ran out of ideas", "To make the text longer", "Conclusions should never repeat the overview"]
      answer: 0
      feedback: [null, "It's a deliberate move, not a lack of ideas.", "Length isn't the reason.", "A conclusion that echoes the overview ties the text together. It shouldn't copy it word for word."]
      explain: "Echoing the overview tells the reader the journey is complete: this is the point the text set out to make."
```

### Checking a whole text

```worked
\text{Read the overview} :: What is the text about? What parts does it promise to cover, and in what order?
\text{Match the body} :: Does each body paragraph take one of those parts, in that order?
\text{Read the conclusion} :: Does it pull the parts together, with nothing new?
\text{Fix what's missing} :: Add a missing overview, reorder the body, or move a new fact out of the conclusion.
```

Now: what does an overview do for the reader?

### Find Nib's slip

### Echo the overview

## Vary: put it in order

```step
stage: modify
insight: "Reordering a shuffled text by following the overview's own order shows that the overview sets the order of the body."
try: { playground: board, starter: "text.yml#vary", height: 470 }
hint: ["Click a paragraph, then use Move up and Move down.", "The overview names the surprises in an order: eggs, electricity, venom. The body paragraphs should follow it."]
check: { type: board, text: "Put the paragraphs back in order: overview, the three body paragraphs in the order the overview names them, then the conclusion.", when: "in_order = 1", explain: "The overview promised eggs, then electricity, then venom. When the body follows that order, the reader always knows which part they are in." }
```

## Practise: a persuasive text

```step
stage: practise
insight: "A persuasive text uses the same parts with a different flavour: the overview states a position, and the conclusion asks the reader to act."
try: { playground: board, starter: "text.yml#practise", height: 450 }
hint: ["First label each paragraph, then put them in order.", "The overview gives the reasons in an order: healthy food, then learning. The conclusion asks for something."]
check: { type: board, text: "Label each paragraph, then put them in order.", when: "n_right = 4 and in_order = 1", explain: "The overview states the position and two reasons, the body paragraphs take them in the same order, and the conclusion asks the principal to act." }
```

## Make: open and close it yourself

```step
stage: make
insight: "Writing the overview and conclusion for body paragraphs that already exist makes students do the guiding work themselves."
try: { playground: board, starter: "text.yml#make", height: 470 }
hint: ["Click the empty first paragraph and type an overview: what the text is about and the two parts it covers, in order.", "Click the empty last paragraph and write a conclusion that pulls both parts together, with nothing new. Then label all four."]
check: { type: board, text: "Write an overview and a conclusion for the two body paragraphs, then label all four parts.", when: "n_empty = 0 and n_right = 4", explain: "Your overview tells the reader what is coming and your conclusion tells them where they have been. Read just your two paragraphs: do they make sense together?" }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a longer piece of class writing for an overview that matches its body is the transfer step."
check: { type: reflect, text: "In a longer piece of my own writing, I checked that the introduction says what the text will cover, the body paragraphs follow that order, and the conclusion adds nothing new. I fixed one thing that didn't match." }
```
