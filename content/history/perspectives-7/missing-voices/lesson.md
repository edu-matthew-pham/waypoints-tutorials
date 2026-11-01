---
order: 3
unit: missing
title: Whose voices are missing?
node: AC9HH7S06 n3
summary: "Most surviving writing from the ancient world was made by officials and the educated, so many groups are thin in the record: farmers, labourers, convicts and slaves, conquered peoples, and neighbours who left no writing. Explain why their perspectives are missing, and what limited evidence can still show: records others made about them, objects and burials, and hostile accounts read carefully. The gap itself tells you who held power."
language: maths
hook: "The Xiongnu fought the Han for over a century. No writing of theirs has been found. How can we know anything about them?"
---
Think about who could write in Qin and Han China. Mostly officials, scholars and the families of the rich. Most people could not, and even when ordinary people were written about, someone else usually held the brush.

So some groups are **thin in the record**:

- **farmers**, who were most of the population
- **labourers, convicts and slaves**
- **conquered peoples**, such as the peoples of the far south, whom the Qin conquered around 214 BCE
- **neighbours with no writing of their own**, such as the Xiongnu
- **women**, as [What did women do, and how do we know?](../../people-7/womens-roles/) shows

Their perspectives are hard to reach. But "hard to reach" is not "nothing". Historians use three kinds of evidence:

1. **Records others made about them.** Officials counted people, set them to work and punished them, and wrote it down.
2. **Objects and burials** that the people themselves made or used.
3. **Other people's accounts, read carefully.** A hostile writer can still report how people lived (you met this with Sima Qian on the Xiongnu).

## Predict: why so few?

```step
stage: predict
insight: "Committing first shows whether students link missing voices to who could write and whose records were kept."
check:
  type: predict
  q: "Why do so few written sources from Han China come from farmers?"
  options:
    - "Most farmers could not write, and officials kept the records"
    - "Farmers had nothing worth writing down"
    - "Farmers' writing was all thrown away on purpose"
    - "There were very few farmers in Han China"
  actual: "Most farmers could not read or write, and the records that were kept and copied were made by officials and scholars. Farmers were most of the population."
```

## Try: who left writing?

```step
stage: run
insight: "Sorting groups by whether they left writing makes the pattern of missing voices visible before explaining it."
check:
  type: sort
  q: "Sort each group: did it leave much writing of its own that survives, or little or none?"
  options: ["Left much writing", "Left little or none"]
  items:
    - ["Court historians like Sima Qian", "Left much writing", "Their histories were copied for centuries."]
    - ["Local officials keeping records", "Left much writing", "Bamboo and wooden slips of their records have been dug up."]
    - ["Farming families", "Left little or none", "Most could not write."]
    - ["Convict labourers", "Left little or none", "Officials wrote about them, not the other way round."]
    - ["The Xiongnu", "Left little or none", "No writing of their own has been found."]
```

Was your guess right? The groups with power over others are the ones whose writing survives.

## Worked example: what thin evidence can still show

| Evidence | What it shows | Its limit |
|---|---|---|
| **Liye records**: thousands of Qin wooden slips, found in 2002 in an old well at Liye, from a county the Qin had newly conquered | How officials counted people, sorted labourers into kinds and set them to work, and punished slackness | Written by officials. It shows how labourers were managed, not what they thought. |
| **Noin-Ula burials**: Xiongnu graves in Mongolia from about 100 years before and after 1 CE, with Han silk and lacquered cups, one cup dated 2 BCE | What Xiongnu leaders were buried with, and that they traded or received gifts from the Han | Graves of leaders, not ordinary herders. Objects don't speak. |
| **Sima Qian on the Xiongnu**: a Han historian's account | How they herded, moved and fought, through a rival's eyes | His judgements are a Han view, not the Xiongnu's own. |

Put together, these still tell us a lot. And the gap tells us something too: the people who could write were the people in charge.

Nib's notes below, and Mei later in the lesson, are made up for this lesson.

```step
stage: investigate
insight: "Catching Nib's 'no writing, so nothing to know' names the slip; the Liye check practises saying what an official record can and cannot show."
tasks:
  - check:
      type: bug
      code: "missing.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: no-writing-no-history
      explain: "Line 3: no writing of their own doesn't mean nothing can be known. Their graves and objects survive, and Han writers described how they lived. Read carefully, these tell historians a lot."
    hint: ["Is writing the only kind of evidence?", "Look at the table: which rows are about the Xiongnu?"]
    smaller:
      check:
        type: question
        q: "A family in your street never writes anything down. Could someone in 100 years still learn about them?"
        options:
          - "Yes: from their house, their things, and records others kept"
          - "No: without their own writing there is nothing to learn"
          - "Yes, if a neighbour wrote a whole book about their lives"
          - "Probably not, unless they were famous enough to be in the news"
        answer: 0
        feedback:
          - null
          - "That treats writing as the only evidence. Writing is one kind of evidence among many."
          - "A book helps, but it is still writing. Houses, objects and records others kept count too."
          - "That treats fame as the only way into the record. Ordinary people leave things, buildings and records too."
        explain: "Objects, places and records kept by others are evidence too."
  - check:
      type: question
      q: "The Liye records were written by Qin officials. What can they best show about labourers?"
      options:
        - "How officials counted and used them, though not what the labourers thought"
        - "What the labourers thought about the Qin and their work"
        - "Nothing, because the labourers did not write the records"
        - "That labourers were happy, because they did not complain in writing"
      answer: 0
      feedback:
        - null
        - "The labourers didn't write these. Whose view do the records give?"
        - "A record made about people is still evidence about them."
        - "Silence in an official record is not the same as being happy."
      explain: "An official record shows how power reached people: who was counted, sorted and set to work."
```

### Find Nib's mistake

### Records made about them

## Vary: their own view?

```step
stage: modify
insight: "Separating a description by others from a group's own view checks the second half of the checkpoint: why their perspective is still missing."
check:
  type: question
  q: "Mei says: 'Han writers described the Xiongnu in detail, so we know how the Xiongnu saw themselves.' What is the best reply?"
  options:
    - "We know how Han writers saw them; their own view is still missing"
    - "That is right, because the descriptions are very detailed"
    - "Yes, if several Han writers agree, that must be how they saw it"
    - "No, because a hostile writer's description is useless as evidence"
  answer: 0
  feedback:
    - null
    - "Detail is not the same as their own voice. Who did the describing?"
    - "Several Han writers agreeing still gives a Han view. Outsiders agreeing is not the group's own voice."
    - "That throws away useful evidence. A hostile account can still report how people lived; it just can't give their own view."
  explain: "A detailed outside account is still an outside account."
```

## Practise: what each kind can show

```step
stage: practise
insight: "Matching each kind of evidence to what it can reveal checks the 'what limited evidence can still show' part on its own."
check:
  type: match
  q: "Match each kind of evidence to what it can best show about a group with little writing of its own."
  pairs:
    - ["Officials' records about them", "How those in power counted and used them"]
    - ["Graves and objects", "What they made, used or were buried with"]
    - ["A rival's description, read carefully", "How they lived, seen from outside"]
    - ["The lack of their own writing", "Who could write, and who held power"]
  explain: "Each kind of evidence gives a different slice; the gap itself is evidence too."
```

## Make: a missing voice, in your book

```step
stage: make
insight: "Naming a missing group, why it is missing and one piece of evidence for it is the checkpoint in their own words."
check: { type: reflect, text: "In my own book I named one group that is thin in the record of the society our class is studying (or Qin and Han China), why their voices are missing, and one piece of evidence that still tells us something about them. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a register of absences

In the Egyptian village of **Deir el-Medina** lived the craftsmen who built the royal tombs. The British Museum holds a flat piece of limestone from the village, used as a writing surface, with a register of about forty workmen over a year in the reign of Ramesses II (about 3,250 years ago). Next to each absence is a reason: being ill, eye trouble, a death in the family, building a house, a festival.

```step
stage: make
tier: typical
insight: "An official record that still shows ordinary lives practises reading a record made about people, in another society."
check:
  type: question
  q: "What can the register of absences show a historian about the workmen?"
  options:
    - "Parts of their everyday lives, recorded by someone tracking their work"
    - "What the workmen thought about their jobs, in their own words"
    - "Nothing much, because a list of names and days is not a story"
    - "How all Egyptian farmers lived at the time, across the country"
  answer: 0
  feedback:
    - null
    - "It records reasons, not their feelings, and it was kept to track their work."
    - "Lists are evidence: the reasons tell you about illness, family and festivals."
    - "These were skilled tomb-builders in one village, not farmers across Egypt."
  explain: "A work record kept by others can still show everyday life: illness, family, festivals."
```

## Wider: the gap as evidence

```step
stage: make
tier: wider
insight: "Treating the absence itself as evidence is the step historians take when they ask who controlled the record."
check:
  type: question
  q: "Almost no writing by Han farmers survives, but a lot by officials does. What does that gap itself tell historians?"
  options:
    - "Who could write and whose records were kept: a sign of who held power"
    - "That farmers' lives didn't change at all during those 400 years"
    - "That officials were more interesting to write about than farmers"
    - "Nothing, because a gap can't be evidence of anything"
  answer: 0
  feedback:
    - null
    - "The gap is in the record, not in their lives."
    - "Who gets written about is a matter of power, not interest."
    - "What survives, and what doesn't, can show how a society worked."
  explain: "Who wrote, and whose writing was kept, is evidence about power and literacy."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
