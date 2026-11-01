---
order: 1
unit: facts
title: Fact or interpretation?
node: AC9HH7S07 n1
assumes: [AC9HH7S06]
summary: "A historical fact is something the evidence directly shows, such as when something happened. A historical interpretation is an argument about what the facts mean: why something happened, or how important it was. Interpretations are built from evidence, so they are not just opinions, but historians can build different ones from the same facts. The worked case is the fall of the Qin dynasty in 206 BCE."
language: maths
hook: "The Qin unified China in 221 BCE. By 206 BCE the dynasty was gone. That much is fact. Why it fell is another kind of statement."
---
Historians make two kinds of statement:

- A **fact** is something the evidence directly shows, and the evidence agrees on. *The First Emperor died in 210 BCE.*
- An **interpretation** is an **argument** about what the facts mean: why something happened, what caused it, or how much it mattered. *The Qin fell because its rule was too harsh.*

An interpretation is not just an opinion. A historian has to back it with evidence and reasons. But two careful historians can look at the same facts and build **different** interpretations, which is why you need to know which kind of statement you are reading.

Here are some facts about the end of the Qin:

| Date | What happened |
|---|---|
| 221 BCE | The Qin unify China. King Zheng becomes the First Emperor. |
| 210 BCE | The First Emperor dies while touring his empire. |
| 209 BCE | A revolt begins and spreads across the old states. |
| 207 BCE | The last Qin ruler surrenders. |
| 206 BCE | The Qin dynasty is over. Years of war follow before the Han take over. |

## Predict: which kind?

```step
stage: predict
insight: "Committing first shows whether students treat a 'because' statement as a fact."
check:
  type: predict
  q: "'The Qin fell because it ruled too harshly.' Is that a fact or an interpretation?"
  options:
    - "An interpretation: it explains why, and historians argue about it"
    - "A fact: it is in history books"
    - "A fact: Han writers said so"
    - "Neither: it is just a made-up story"
  actual: "An interpretation. It is an argument about why the Qin fell, made first by Han writers and argued about ever since. It is built from evidence, so it isn't made up, but it isn't the only way to read the facts."
```

## Try: sort the statements

```step
stage: run
insight: "Sorting statements into facts and interpretations is the hinge distinction, practised before it is explained."
check:
  type: sort
  q: "Sort each statement about the end of the Qin."
  options: ["Fact", "Interpretation"]
  items:
    - ["The First Emperor died in 210 BCE", "Fact", "A date the sources agree on."]
    - ["The Qin dynasty was over by 206 BCE", "Fact", "A date the sources agree on."]
    - ["The Qin fell because its laws were too harsh", "Interpretation", "An argument about why: 'because'."]
    - ["The First Emperor's death was the turning point that doomed the Qin", "Interpretation", "An argument about what mattered most."]
```

Was your guess right? Words like *because*, *mainly*, *turning point* and *the real reason* are a sign you are reading an interpretation.

## Worked example: same facts, built into an argument

The **Han writers** who came after the Qin, such as **Jia Yi** (who lived about 200 to 169 BCE) and the court historian **Sima Qian**, built this interpretation, in our words:

> The Qin won its empire by force, then kept ruling by force and harsh laws, and did not care for its people. So when the revolt came, the people turned against it, and it fell fast.

| | |
|---|---|
| **The facts it uses** | The Qin conquered its rivals; it had strict laws; a revolt began in 209 BCE and spread fast; the dynasty ended by 206 BCE. |
| **The argument it makes** | Ruling by force with no care for the people *caused* the fall. |
| **Is it a fact?** | No. It is an interpretation: an argument from the facts. Historians still discuss it. |

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Catching Nib copying an interpretation into a list of facts names the hinge slip; the second check says what makes an interpretation more than an opinion."
tasks:
  - check:
      type: bug
      code: "facts.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: interpretation-as-fact
      explain: "Line 3: 'the Qin fell because it was too harsh' is an argument about why, not something the evidence directly shows. It belongs in the interpretation column, however often it is repeated."
    hint: ["Which line explains why?", "Does any line contain 'because'?"]
    smaller:
      check:
        type: question
        q: "Which of these is a fact, not an interpretation?"
        options:
          - "Our team lost the final 3 goals to 2"
          - "Our team lost because the coach chose the wrong players"
          - "Our team lost mainly because of the rain"
          - "The real reason our team lost was nerves"
        answer: 0
        feedback:
          - null
          - "That explains why, so people could argue about it."
          - "'Mainly because' is an argument about what mattered most."
          - "'The real reason' is an argument, not the score."
        explain: "The score is the fact. Every 'because' is an interpretation of it."
  - check:
      type: question
      q: "What makes an interpretation more than just an opinion?"
      options:
        - "It gives reasons and uses evidence that others can check"
        - "It is written by someone famous or important"
        - "It is the oldest explanation anyone wrote"
        - "Most people agree with it"
      answer: 0
      feedback:
        - null
        - "Fame doesn't make an argument stronger; evidence does."
        - "Old explanations can be wrong; new evidence can change them."
        - "Agreement doesn't turn an argument into a fact."
      explain: "An interpretation is an argument from evidence. Others can check the evidence and the reasoning."
```

### Find Nib's mistake

### More than an opinion

## Vary: which is the interpretation?

```step
stage: modify
insight: "A second event checks the distinction outside the Qin case."
check:
  type: question
  q: "Which statement about Liu Bang, the first Han emperor, is an interpretation?"
  options:
    - "Liu Bang won because he was kinder than his rivals"
    - "Liu Bang became the first emperor of the Han dynasty"
    - "Liu Bang's family ruled China after the Qin had fallen"
    - "Liu Bang's capital was in the Wei River valley"
  answer: 0
  feedback:
    - null
    - "That is a fact: the evidence agrees he did."
    - "That is a fact: the Han were his family."
    - "That is a fact about where, not an argument about why."
  explain: "'Won because…' is an argument about why. It may be well supported, but it is still an interpretation."
```

## Practise: facts and interpretations

```step
stage: practise
insight: "Matching each statement to what kind it is and why checks that students can say the reason, not just the label."
check:
  type: match
  q: "Match each statement to the best description of it."
  pairs:
    - ["The Qin unified China in 221 BCE", "A fact: a date the sources agree on"]
    - ["The Qin fell because it ruled by force", "An interpretation: an argument about why"]
    - ["The Qin was the most important dynasty", "An interpretation: an argument about importance"]
    - ["A revolt began in 209 BCE", "A fact: an event the sources agree on"]
  explain: "Facts say what happened and when; interpretations argue why or how much it mattered."
```

## Make: facts and an interpretation, in your book

```step
stage: make
insight: "Writing their own fact and interpretation about the same event is the checkpoint in their own words."
check: { type: reflect, text: "In my own book I wrote two facts and one interpretation about an event in the society our class is studying (or the fall of the Qin), and for the interpretation I wrote which facts it uses. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Hatshepsut's broken statues

Hatshepsut ruled Egypt as pharaoh about 3,500 years ago. In the 1920s, archaeologists found many of her statues smashed. For a long time, historians argued that her successor, Thutmose III, had them broken out of hatred for her. In 2025, an archaeologist re-read the old excavation notes and argued that much of the damage was a ritual done to many pharaohs' statues, plus later reuse of the stone.

```step
stage: make
tier: typical
insight: "A real interpretation changing with re-examined evidence shows interpretations are arguments, in another society."
check:
  type: sort
  q: "Sort each statement about Hatshepsut's statues."
  options: ["Fact", "Interpretation"]
  items:
    - ["Many of Hatshepsut's statues were found broken in the 1920s", "Fact", "Excavators recorded it."]
    - ["Thutmose III broke them out of hatred for her", "Interpretation", "An argument about why: the older one."]
    - ["Most of the damage came from a ritual done to many pharaohs' statues", "Interpretation", "An argument about why: the newer one."]
```

## Wider: what makes an interpretation strong?

```step
stage: make
tier: wider
insight: "Judging the strength of an interpretation by its evidence and reasoning prepares for weighing interpretations later."
check:
  type: question
  q: "Two interpretations explain the same event. Which is likely to be stronger?"
  options:
    - "The one that fits more of the evidence, including awkward parts"
    - "The one written by the most famous historian of all"
    - "The one written closest in time to the event itself"
    - "The one that tells the most exciting story about it"
  answer: 0
  feedback:
    - null
    - "Fame is not evidence."
    - "Closeness helps, but writers at the time had their own perspectives."
    - "A good story isn't the same as a well-supported one."
  explain: "Historians judge an interpretation by its evidence, its reasoning, and how it handles evidence that doesn't fit."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
