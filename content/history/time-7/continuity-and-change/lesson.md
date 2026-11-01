---
order: 3
unit: change
title: Qin to Han, what changed and what stayed?
node: AC9HH7S05 n3
summary: "Explain continuity (what stayed the same) and change (what was different) across a turning point, using dated evidence for each, and see that both happen at the same time. The worked case is the Han dynasty taking over from the Qin (the Han count their rule from 206 BCE): a new family on the throne, but much of the Qin way of running the empire kept."
language: maths
hook: "By 206 BCE the Qin dynasty had fallen, and soon a new family took the throne. Did everything start again?"
---
When historians look at a turning point, they ask two questions:

- **Change:** what was different afterwards?
- **Continuity:** what stayed the same?

The answer is nearly always *both*. A new ruler can change some things while most people's lives, and much of how the country is run, carry on.

By 206 BCE the Qin dynasty had fallen. A commoner called Liu Bang won the war that followed, in 202 BCE, and became the first emperor of the **Han** dynasty. The Han count their rule from 206 BCE, and they ruled, with one short break, for about 400 years.

## Predict: start again?

```step
stage: predict
insight: "Committing first shows whether students assume a new dynasty means everything changed."
check:
  type: predict
  q: "When the Han took over from the Qin, how much do you think changed?"
  options:
    - "The ruling family changed, but the way of running the empire mostly stayed"
    - "Everything changed, because it was a new dynasty with new rulers"
    - "Probably most things changed, since the Han had just won a war"
    - "Nothing changed at all, because it was still the same China"
  actual: "Some things changed (the ruling family, and later the ideas used to choose officials), but much stayed: officials running commanderies, the written script, standard measures, the empire's borders, and most people's lives as farmers."
```

## Try: continued or changed?

```step
stage: run
insight: "Sorting features into continued and changed shows both lists filling up at once."
check:
  type: sort
  q: "Compare the Qin with the early Han. Sort each one: did it continue or change?"
  options: ["Continued", "Changed"]
  items:
    - ["The family on the throne", "Changed", "Liu Bang's family replaced the Qin rulers."]
    - ["Officials running the empire through commanderies", "Continued", "The Han kept the Qin system of appointed officials."]
    - ["One written script across the empire", "Continued", "The Han kept the Qin script."]
    - ["The empire's borders, roughly", "Continued", "The Han kept most of the Qin's territory."]
    - ["Confucian learning used to choose officials, from Emperor Wu's time", "Changed", "The Qin had not done this."]
```

Was your guess right? A new dynasty did not mean a new everything.

## Worked example: dated sources in order

Historians back up continuity and change with **dated evidence**, put in order. Here are three kinds, described in our own words.

| Date | Source | What it shows |
|---|---|---|
| before 217 BCE | Qin legal texts on bamboo slips, found at **Shuihudi** | Detailed Qin rules for officials: grain stores, labour, punishments |
| about 186 BCE | Han legal texts on bamboo slips, found at **Zhangjiashan** | Han laws; historians report that many follow Qin rules, with changes |
| about 124 BCE | Records of Emperor Wu's academy for training officials in Confucian learning | A new way of choosing and training officials |

Put in order, the sources show **continuity** (Han laws built on Qin ones) and then a **change** (a new idea about what officials should know). Both are true of the same period.

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Catching Nib's 'new dynasty, new everything' names the slip; the match makes students say what each dated source shows."
tasks:
  - check:
      type: bug
      code: "change.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: new-dynasty-new-everything
      explain: "Line 3: a new dynasty changed the ruling family, but the Han kept much of what the Qin built. The Han legal texts show many laws carried on."
    hint: ["Does a new ruler mean new laws, new officials and a new script all at once?", "Look at the Zhangjiashan row in the table."]
    smaller:
      check:
        type: question
        q: "Your school gets a new principal. What usually happens?"
        options:
          - "Some things change, but most classes, rules and teachers stay"
          - "Everything changes on the first day, from rules to teachers"
          - "Nothing changes at all, because schools never change"
          - "The whole school is closed and rebuilt from the ground up"
        answer: 0
        feedback:
          - null
          - "A new leader rarely replaces everything at once."
          - "A new leader usually changes something."
          - "The buildings, timetable and most rules carry on."
        explain: "New leaders change some things and keep many others: change and continuity at once."
  - check:
      type: match
      q: "Match each dated source to what it shows."
      pairs:
        - ["Qin legal slips, before 217 BCE", "How the Qin ran things: the starting point"]
        - ["Han legal slips, about 186 BCE", "Continuity: many Han laws built on Qin ones"]
        - ["Emperor Wu's academy, about 124 BCE", "Change: officials trained in Confucian learning"]
      explain: "Only once the sources are in order can you say what carried on and what changed."
```

### Find Nib's mistake

### Sources in order

## Vary: did nothing happen?

```step
stage: modify
insight: "Continuity is easy to mistake for 'nothing happened'; this check separates the two."
check:
  type: question
  q: "Under both the Qin and the Han, most people were farmers who paid grain tax. What does that continuity tell us?"
  options:
    - "Farm life and tax carried on, even while rulers and their ideas changed"
    - "Nothing at all happened to farmers in those 400 years of Han rule"
    - "Farmers did not even notice when the Qin fell and the Han took over"
    - "The Han must have copied the Qin on everything, not just on tax"
  answer: 0
  feedback:
    - null
    - "Continuity means something stayed the same. Farmers still lived through wars, floods and new taxes."
    - "Many were caught up in the wars after 206 BCE. Continuity in farming doesn't mean they missed it."
    - "One thing continuing doesn't mean everything did. Look at the 'Changed' list."
  explain: "Continuity means one part of life stayed much the same. Other parts, at the same time, could change."
```

## Practise: both at once

```step
stage: practise
insight: "Choosing the statement that holds both together checks the 'coexist' part of the checkpoint."
check:
  type: question
  q: "Which sentence best describes the change from Qin to Han?"
  options:
    - "A new family ruled, but it kept much of the Qin way of running the empire"
    - "The Han threw out everything the Qin had built and began again"
    - "Nothing changed, because the Han and Qin were the same dynasty"
    - "Everything changed at once in 206 BCE and then stayed the same"
  answer: 0
  feedback:
    - null
    - "The Han kept the commanderies, the script and many laws."
    - "They were different ruling families: that is a real change."
    - "Some changes came decades later, such as Emperor Wu's academy."
  explain: "Historians describe periods as a mix: some things continue while others change."
```

## Make: continuity and change, in your book

```step
stage: make
insight: "Writing one continuity and one change, each with dated evidence, is the checkpoint in their own words."
check: { type: reflect, text: "In my own book I wrote one thing that continued and one thing that changed across a turning point in the society our class is studying (or Qin to Han), with a dated source or event for each. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Rome, republic to empire

After 27 BCE, Augustus held power over Rome's armies and government. But the **Senate** still met, and Romans still elected **consuls** each year.

```step
stage: make
tier: typical
insight: "Rome's republic-to-empire shows continuity and change at once in a second society."
check:
  type: sort
  q: "Rome after Augustus took power in 27 BCE. Sort each one."
  options: ["Continued", "Changed"]
  items:
    - ["The Senate still met", "Continued", "An old institution carried on."]
    - ["Consuls were still chosen each year", "Continued", "The old offices stayed."]
    - ["One man controlled the armies and had the final say", "Changed", "That was new: in practice, an emperor."]
```

## Wider: it depends how long you look

```step
stage: make
tier: wider
insight: "The same development can read as change or continuity depending on the timescale, which shows how the question shapes the answer."
check:
  type: question
  q: "Confucius died in 479 BCE. The Qin did not favour his ideas, but the Han later trained officials in them. Is the Han's use of Confucian ideas continuity or change?"
  options:
    - "Both: a change from the Qin, but a continuity from the centuries before"
    - "Change, because the Qin had not used Confucian ideas to run things"
    - "Continuity, because Confucius had lived long before the Han began"
    - "It depends on your opinion, so there is no way to decide either way"
  answer: 0
  feedback:
    - null
    - "Compared with the Qin, yes. But the ideas had been taught for centuries before the Qin."
    - "Over the long run, yes. But compared with the Qin, using them to train officials was new."
    - "It does depend, but on what you compare it with, not on opinion. Name the comparison and you can decide."
  explain: "Whether something counts as continuity or change depends on what you compare it with and how long a stretch you look at."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
