---
order: 4
unit: stages
title: Purpose shapes the text
summary: "A text's purpose decides its stages and its language. The same facts about frogs become a report (a general statement, then descriptions, in the present tense with technical words), an argument (a position, reasons and the position restated, with should and would) or a recount (an orientation and events in time order, in the past tense with time words)."
language: maths
node: [AC9E7LA03 n1, AC9E7LA03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Same topic, two purposes: the recount retells one ride in time order, in the past tense; the report describes what bikes are like, in the present tense." }
hook: "You know ten facts about frogs. Would you put them in the same order to teach Year 3, to win a debate, or to tell your family about an excursion?"
---
A text's **purpose** decides its **stages** and its **language**.

- **Retell what happened: a recount.** Orientation, events, ending. Past tense and time words.
- **Describe what something is like: a report.** General statement, then descriptions. Present tense and technical words.
- **Explain how or why: an explanation.** Opening statement, then steps in order. When, then, as a result.
- **Persuade: an argument.** Position, reasons, position restated. Should, would, because.

## Predict: which shape?

```step
stage: predict
insight: "Choosing a shape for a purpose before seeing the models shows students they already link purpose and structure."
check:
  type: predict
  q: "Your class found frogs at the creek. You want the principal to let you build a frog pond. Which shape will your text take?"
  options: ["What you want, your reasons, then what you want again", "What happened at the creek, in time order", "Facts about frogs: what they are, then what they're like", "Any shape works if the facts are right"]
  actual: "What you want, your reasons, then what you want again. That is an argument: a position, reasons and the position restated. The facts about frogs become your reasons."
```

## Try: the stages of a report

```step
stage: run
insight: "Labelling a report's stages shows its purpose (to describe) in its shape: say what it is, then describe it."
try: { playground: board, starter: "text.yml#run", height: 340 }
hint: ["Click a sentence, then choose General statement or Description.", "One sentence says what frogs are. The others each describe one thing about them."]
smaller:
  check: { type: question, q: "'Frogs are amphibians: animals that live part of their lives in water and part on land.' What is this sentence doing?", options: ["Saying what frogs are", "Describing one detail about frogs", "Giving an opinion about frogs"], answer: 0, feedback: [null, "It covers all frogs, not one detail such as their skin.", "There's no should or best here."], explain: "It classifies frogs, so it is the general statement that opens the report." }
check: { type: board, text: "Label the general statement and each description.", when: "n_right = 4 and n_wrong = 0", explain: "The first sentence says what frogs are. Each description covers one aspect: their skin, how they grow, where they live." }
```

Were you right about the pond? The report you just labelled describes frogs; it doesn't ask for anything. An argument would need a different shape.

## Worked example: purpose to stages to language

```step
stage: investigate
insight: "Matching purposes to stages, sorting language by purpose and catching Nib's drift show purpose deciding both structure and words."
tasks:
  - check:
      type: match
      q: "Match each purpose to the stages that fit it."
      pairs:
        - ["To retell what happened", "Orientation, events, ending"]
        - ["To describe what something is like", "General statement, descriptions"]
        - ["To explain how or why", "Opening statement, steps in order"]
        - ["To persuade", "Position, reasons, position restated"]
      explain: "Each purpose needs different stages. A writer chooses the stages by asking what the text is for."
  - check:
      type: sort
      q: "Which kind of text does each sentence's language belong to?"
      options: ["Recount", "Report", "Argument"]
      items:
        - ["On Friday, we visited the museum.", "Recount", "Past tense and a time phrase: retelling."]
        - ["After that, we ate lunch in the park.", "Recount", "After that moves the events along in time."]
        - ["Wombats dig burrows with their front claws.", "Report", "Present tense, about all wombats: describing."]
        - ["Eucalypts are evergreen trees.", "Report", "A general fact with technical words."]
        - ["Our school should build a frog pond.", "Argument", "Should gives a position."]
        - ["A pond would let every class study frogs.", "Argument", "Would imagines a result as a reason."]
      explain: "Recounts use the past tense and time words, reports the present tense and technical words, and arguments words such as should and would."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's report on frogs, one sentence per line. Click the line where Nib drifts away from the report's purpose."
      answer: 3
      fault: logic
      misconception: purpose-drift
      explain: "Line 3 retells the excursion: past tense, our class, a funny moment. That belongs in a recount. A report describes frogs in general, so Nib should cut it or move it to a recount of the trip."
```

### Purpose decides the stages

```worked
\text{Ask what it is for} :: Retell, describe, explain or persuade?
\text{Choose the stages} :: Each purpose has its own stages (see the list above).
\text{Choose the language} :: Past tense and time words, present tense and technical words, or should and because.
\text{Check for drift} :: Every sentence should serve the one purpose.
```

Now match each purpose to its stages.

### Sort the language

### Find Nib's drift

## Vary: the same facts, as an argument

```step
stage: modify
insight: "Labelling an argument built from the same frog facts shows how a new purpose regroups the facts into reasons."
try: { playground: board, starter: "text.yml#vary", height: 340 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Click a sentence, then choose Position, Reason or Restated position.", "The first and last sentences both say what the writer wants. Which one comes first?"]
    check: { type: board, text: "Label the position, the reasons and the restated position.", when: "n_right = 4 and n_wrong = 0", explain: "The position says what the writer wants. The frog facts (clean water to breed, studying them up close) have become reasons. The last sentence restates the position so the reader leaves with it." }
  - check:
      type: question
      q: "Why does an argument restate its position at the end, when a report doesn't need to?"
      options: ["To leave the reader with what the writer wants them to think or do", "Because every text must end by repeating its first sentence", "To add a new reason the reader hasn't heard", "Because the writer ran out of facts"]
      answer: 0
      feedback: [null, "A report ends when the description is complete. It doesn't need to repeat anything.", "A new reason at the end would need its own paragraph and evidence.", "Restating is a choice that serves the purpose."]
      explain: "An argument's purpose is to persuade, so it ends by pressing the position again. A report's purpose is to describe, so it ends when the description is done."
```

### Label the argument

### Why restate?

## Practise: language that fits the purpose

```step
stage: practise
insight: "Colouring time words in the recount and technical words in the report shows the language changes with the purpose, even on the same topic."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Chain 1: words or phrases that move the recount along in time. Chain 2: technical words in the report.", "There are four time words or phrases in the recount, and four technical words in the report."]
check: { type: board, text: "Colour the time words in the recount (Chain 1) and the technical words in the report (Chain 2).", when: "chains_ok = 2 and n_stray = 0", explain: "Last Tuesday, First, Then and After lunch move the recount along in time. Amphibians, tadpoles, gills and metamorphosis name things exactly, which a report needs." }
```

## Make: your own report

```step
stage: make
insight: "Writing a report with a general statement and descriptions, in the present tense, applies the purpose-to-structure link."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Pick an animal or a place you know well. Start with what it is: '___ are ___.'", "Add at least two descriptions, each about one aspect, in the present tense. Then label every sentence."]
check: { type: board, text: "Write a report with a general statement and at least two descriptions, and label each one.", when: "has_general = 1 and has_describe >= 2 and n_empty = 0", explain: "Your report says what your topic is, then describes it. Check with a partner: is it all present tense, with no story or opinion slipping in?" }
```

The board checks that the stages are there and labelled. You and a partner check the language: present tense, facts, no drift.

## In your own writing

```step
stage: make
tier: typical
insight: "Naming the purpose before planning a real piece of writing makes the stages a choice, not a habit."
check: { type: reflect, text: "Before my next piece of writing, I wrote its purpose in one line (retell, describe, explain or persuade) and listed the stages it needs before I started." }
```
