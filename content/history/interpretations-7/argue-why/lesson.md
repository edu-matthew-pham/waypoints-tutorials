---
order: 3
unit: argue
title: Make your own argument
node: AC9HH7S07 n3
summary: "Build a historical argument about why an event is interpreted in different ways: say what each interpretation argues and the evidence behind it, then explain why they differ, using different evidence, different questions and different values. An argument explains why the interpretations differ; it doesn't just say that they do, and it doesn't have to pick a winner. The argument itself is written in your own book and read by a partner or your teacher."
language: maths
hook: "Two interpretations of the Qin's fall stand side by side. Your job isn't to pick one. It's to explain why they're different."
---
You have met two interpretations of why the Qin fell:

- **Han writers** such as Jia Yi: the Qin ruled by force and did not care for its people.
- **Some historians today**, who have also read Qin law texts dug up since 1975: the Qin may not have been as cruel as Han writers said, so they look harder at a crisis at court and the old states rising again.

Now the question is: **why** are they different? A good answer is a short **argument** with four parts:

1. **Claim**: answer the question in one sentence.
2. **The interpretations**: say what each one argues, and what evidence it uses.
3. **Reasons**: explain why they differ: different **evidence**, different **questions**, different **values**.
4. **Conclusion**: sum up.

## Predict: what makes a good answer?

```step
stage: predict
insight: "Committing first shows whether students think a good answer picks a winner or explains the difference."
check:
  type: predict
  q: "Which is the best answer to 'Why is the fall of the Qin interpreted in different ways?'"
  options:
    - "One that explains what each side could see and cared about, with evidence"
    - "One that says which side is right"
    - "One that lists the two interpretations and stops"
    - "One that says people just have different opinions"
  actual: "The best answer explains why they differ (evidence, questions, values), with evidence for each side. It doesn't have to say which is right, and 'different opinions' explains nothing."
```

## Try: which part is which?

```step
stage: run
insight: "Sorting sentences into the parts of an argument shows the structure before students build one."
check:
  type: sort
  q: "Sort each sentence from an argument about the fall of the Qin."
  options: ["Claim", "An interpretation", "A reason they differ"]
  items:
    - ["Historians explain the fall of the Qin differently mainly because of their evidence and values.", "Claim", "It answers the question in one sentence."]
    - ["Han writers argued the Qin fell because it ruled by force.", "An interpretation", "What one side argues."]
    - ["Some historians today look harder at the crisis at court.", "An interpretation", "What the other side argues."]
    - ["Han writers worked for the dynasty that replaced the Qin.", "A reason they differ", "A value or loyalty that shaped how they told it."]
    - ["Qin law texts dug up since 1975 were never seen by Han writers.", "A reason they differ", "Different evidence."]
```

Was your guess right? Each part has a job.

## Worked example: one argument

Here is one way to write it. It is an example of the shape, not the only right answer.

> Historians explain the fall of the Qin in different ways mainly because they had different evidence and different values. Han writers such as Jia Yi argued that the Qin fell because it ruled by force without caring for its people. They wrote for the dynasty that had replaced the Qin, and they believed a good ruler should care for the people, so a cruel Qin fitted both their lesson for rulers and their loyalty. Some historians today have also read Qin law texts dug up since 1975, which show laws that officials applied with some care. With that evidence, they look harder at the crisis at court and the old states rising again. So the interpretations differ less because one side is wrong than because each side could see, and cared about, different things.

| Part | In the example |
|---|---|
| Claim | "mainly because they had different evidence and different values" |
| The interpretations | Han writers: ruled by force. Some historians today: crisis at court and old states. |
| Reasons | Values and loyalty (Han writers); new evidence (law texts) |
| Conclusion | "each side could see, and cared about, different things" |

Nib's argument below is made up for this lesson.

```step
stage: investigate
insight: "Catching Nib's 'different opinions' ending names the node's own failing criterion; the second check finds the sentence that would fix it."
tasks:
  - check:
      type: bug
      code: "argue.txt#nib"
      text: "Click the first line where Nib's argument goes wrong."
      answer: 3
      fault: logic
      misconception: different-opinions-explains
      explain: "Line 3: 'different opinions' doesn't explain anything. Why are their views different? Nib needs a reason: what each side could see (evidence), what it was asking (questions) or what it cared about (values)."
    hint: ["Lines 1 and 2 describe the interpretations. What should line 3 do?", "Does line 3 say why the opinions are different?"]
    smaller:
      check:
        type: question
        q: "Two friends disagree about which film is best. Which answer explains why?"
        options:
          - "One loves action films, and the other loves comedies"
          - "They just have different opinions about films"
          - "One of them is wrong about which film is best"
          - "They disagree because they don't agree"
        answer: 0
        feedback:
          - null
          - "True, but why? What makes their opinions different?"
          - "That picks a winner. It doesn't say why they differ."
          - "That repeats the question as the answer."
        explain: "An explanation gives the reason behind the different views: here, what each one values."
  - check:
      type: question
      q: "Which sentence, put in place of Nib's line 3, would make the argument strongest?"
      options:
        - "Historians today can read Qin law texts that Han writers never saw"
        - "Everyone is entitled to their own opinion about the past"
        - "The Han writers were clearly right, so the others are wrong"
        - "History is all just stories, so it doesn't really matter"
      answer: 0
      feedback:
        - null
        - "True, but it doesn't say why these views differ."
        - "That picks a winner instead of explaining the difference."
        - "Interpretations are built from evidence; it does matter which evidence."
      explain: "Naming a reason (here, different evidence) turns a list of views into an argument."
```

### Find Nib's mistake

### Fix the argument

## Vary: which plan?

```step
stage: modify
insight: "Choosing the plan that meets the brief checks the four parts without marking anyone's writing."
check:
  type: question
  q: "Which plan for an argument meets the brief best?"
  options:
    - "Claim; what each side argues and its evidence; reasons they differ; conclusion"
    - "What happened, in order, from 221 BCE to 206 BCE"
    - "Which side is right, with three reasons why"
    - "Both interpretations, then 'they have different opinions'"
  answer: 0
  feedback:
    - null
    - "That's a timeline of facts. Where are the interpretations?"
    - "The brief asks why they differ, not which one wins."
    - "Missing the reasons: why are the opinions different?"
  explain: "The plan answers 'why do they differ?' with evidence for each side and named reasons."
```

## Practise: what each part does

```step
stage: practise
insight: "Matching each part to its job checks the structure students will write in their own book."
check:
  type: match
  q: "Match each part of the argument to its job."
  pairs:
    - ["Claim", "Answers the question in one sentence"]
    - ["The interpretations", "Say what each side argues and its evidence"]
    - ["Reasons", "Name the evidence, questions or values behind the difference"]
    - ["Conclusion", "Sums up why the interpretations differ"]
  explain: "Four parts, four jobs."
```

## Make: your argument, in your book

```step
stage: make
insight: "Writing the argument is the checkpoint itself; a partner or teacher reads it, and nothing on the site marks it."
check: { type: reflect, text: "In my own book I wrote an argument about why one event or person (from the society our class is studying, or the fall of the Qin) is interpreted in different ways: a claim, what each interpretation argues and its evidence, at least two reasons they differ, and a conclusion. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it and gives feedback. Nothing on this page marks your writing.

## Typical: Hatshepsut's statues again

For a long time, historians argued that Thutmose III smashed Hatshepsut's statues out of hatred for her. In 2025, an archaeologist re-read the notes, drawings and letters from the 1920s excavations and argued that much of the damage was a ritual done to many pharaohs' statues, plus later reuse of the stone.

```step
stage: make
tier: typical
insight: "A second, real change of interpretation gives students another case to argue about, in another society."
check:
  type: question
  q: "What is the main reason the interpretation of Hatshepsut's statues changed?"
  options:
    - "Someone re-examined the evidence from the excavations"
    - "Historians today just have a different opinion"
    - "Thutmose III was proved to have liked Hatshepsut"
    - "The statues were found to be fakes"
  answer: 0
  feedback:
    - null
    - "Why is their view different? What did the new study use?"
    - "The study doesn't rule out all hostility; it argues most damage had other causes."
    - "Nobody says they are fakes."
  explain: "Re-examining the evidence led to a new interpretation: a case of different evidence, or the same evidence read more closely."
```

## Wider: which is better supported?

```step
stage: make
tier: wider
insight: "Arguing for one interpretation while giving the other its due is the wider move in Kit's node."
check:
  type: question
  q: "You want to argue that one interpretation of the Qin's fall is better supported. What should you do?"
  options:
    - "Show it explains more of the evidence, and say what the other gets right"
    - "Ignore the evidence that supports the other interpretation"
    - "Say the other historians are biased, and stop there"
    - "Choose the one you heard about first"
  answer: 0
  feedback:
    - null
    - "Leaving out evidence that doesn't fit makes an argument weaker, not stronger."
    - "Everyone has a perspective. Show where the evidence leads."
    - "Order heard isn't evidence."
  explain: "A strong argument uses the evidence on both sides and still makes a case."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
