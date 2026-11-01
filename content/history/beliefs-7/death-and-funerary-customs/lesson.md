---
order: 2
unit: funerary
title: What do the tombs tell us?
node: AC9HH7K11 n2
summary: "Describe death and funerary customs in Qin and Han China using evidence from tombs (Mawangdui, tomb models of houses, granaries and farms, the First Emperor's terracotta army), and connect each practice to the belief or value behind it. Tombs are strong evidence, but they show the burials of people who could afford them, not how everyone was buried."
language: maths
hook: "One Han tomb held so much that, fifty years after it was opened, the museum was still counting. What would you want to know before using it as evidence?"
---
An ancient society's **death and funerary customs** are what people did when someone died: how they buried them, what they put with them, and what they kept doing afterwards. For Qin and Han China, this is the area with the most evidence, because tombs were built to last and many have been dug up by archaeologists.

> **Mawangdui** is a group of three Han tombs near the city of Changsha, opened in 1972 to 1974. They belonged to a noble family of the 2nd century BCE: Li Cang, the Marquis of Dai (died 186 BCE), his wife Xin Zhui, often called Lady Dai, and a man thought to be their son (buried in 168 BCE). The tombs held lacquer dishes and trays, silk clothes, food, wooden figures of servants and musicians, books written on silk and bamboo, and bamboo slips listing the names and numbers of the objects buried. A painted silk banner on Lady Dai's coffin shows her funeral and her journey after death. In 2024 the Hunan Museum finished counting: 26,937 items.

> **Tomb models.** Many Han tombs, especially in the later Han, held pottery models of houses, granaries, wells, mills, watchtowers, pig pens and farm animals. Museums explain them as things to provide for the dead person in the afterlife.

> **The terracotta army.** The First Emperor of Qin (died 210 BCE) was buried in a huge tomb complex. In pits nearby stood thousands of life-size clay soldiers and horses, with wooden war chariots and bronze weapons, facing outward from the tomb. No written source from the time says why they were made; historians think they were probably meant to guard the emperor after death.

Each piece of evidence tells you something about beliefs and values. A tomb stocked like a home suggests a belief that the dead live on and need what the living need. Bamboo lists of the buried objects show the family kept a careful record of what they gave the dead, which fits the duty to family from the last lesson. A clay army suggests the emperor expected to rule and need protecting after death.

But think about **whose** tombs these are. A marquis's family and an emperor had wealth and workers to build tombs like this. Most people in Han China were farmers, and their graves were much simpler, so far fewer of their burials have been studied.

## Predict: whose burial?

```step
stage: predict
insight: "Committing first shows whether students notice that the best-known tombs belonged to the rich."
check:
  type: predict
  q: "Lady Dai's tomb held thousands of objects. What does it tell us about how a farming family in Han China buried their dead?"
  options:
    - "Not much directly: it shows how a rich noble family was buried"
    - "Exactly: every family buried thousands of objects like this"
    - "Nothing at all, because one tomb is never any use as evidence"
    - "That farmers were not buried, because their tombs are not famous"
  actual: "Not much directly. Mawangdui shows how a rich noble family was buried. Farmers' graves were simpler, so we need other evidence for them."
```

## Try: what was in the tombs?

```step
stage: run
insight: "Matching objects to what they suggest about beliefs starts reading tombs as evidence."
check:
  type: match
  q: "Match each find to what it suggests about beliefs or values."
  pairs:
    - ["Dishes of food in Lady Dai's tomb", "The dead were believed to need food"]
    - ["A pottery model of a granary", "The dead would need a store of grain, like the living"]
    - ["Bamboo slips listing the buried objects", "A careful record of what the family gave the dead"]
    - ["Clay soldiers facing outward from the First Emperor's tomb", "He was probably expected to need protecting after death"]
```

Was your guess right? These tombs are rich evidence of beliefs, but mostly the beliefs of rich families.

## Worked example: reading a tomb as evidence

```step
stage: investigate
insight: "Using tomb evidence to describe practices, then fixing Nib's 'one tomb shows everyone', keeps evidence tied to whose burial it is."
tasks:
  - check:
      type: sort
      q: "Sort each find into the practice it is evidence of."
      options: ["Providing for the dead", "Protecting the dead", "Recording what was given"]
      items:
        - ["Silk clothes folded in a tomb", "Providing for the dead", "Clothes for the dead to wear."]
        - ["Clay soldiers in pits beside a tomb", "Protecting the dead", "Historians think they were probably guards."]
        - ["A bamboo slip naming a dish and how many", "Recording what was given", "A list of the grave goods."]
        - ["A pottery model of a pig pen", "Providing for the dead", "Food animals for the afterlife."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about burials in Han China. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: tomb-shows-everyone
      explain: "Line 3: Nib takes one rich family's tomb as how everyone was buried. Mawangdui belonged to a marquis's family. Most people were farmers, and their graves were much simpler. The tomb is strong evidence of what wealthy people did and believed, not of every burial."
    smaller:
      check:
        type: question
        q: "A museum shows the grandest tomb ever found in one region. What is the safest thing to say?"
        options:
          - "It shows how the richest people there were buried"
          - "It shows how everyone in the region was buried"
          - "It shows nothing, because one tomb proves nothing"
          - "It shows that poor people were never buried there"
        answer: 0
        feedback:
          - null
          - "The grandest tomb is not a typical tomb. Most people could not afford one."
          - "One tomb is still good evidence. It just has limits: whose burial is it?"
          - "Simpler graves are less famous and less often studied. That is a gap in the evidence."
        explain: "Ask whose burial a tomb shows before you say what it tells you."
  - check:
      type: question
      q: "Historians think the terracotta army was probably meant to guard the First Emperor. Why do they say 'probably'?"
      options:
        - "No written source from the time says why the soldiers were made"
        - "Historians are not sure the clay soldiers really exist at all"
        - "The soldiers were made long after the emperor had died"
        - "Saying 'probably' is just a polite way of saying it is true"
      answer: 0
      feedback:
        - null
        - "Thousands have been dug up and can be seen. The doubt is about why, not whether."
        - "They were made for his tomb complex, during his reign."
        - "'Probably' means a reasoned guess from the evidence, not a fact a source states."
      explain: "When no source states a purpose, historians reason from the evidence and say how sure they are."
```

### What practice?

### Find Nib's mistake

Read Nib's notes (made up for this lesson). Which line turns one family's tomb into everyone's?

### Why 'probably'?

## Vary: models, not the real thing

```step
stage: modify
insight: "Asking what a model house shows, and what it does not, practises the limits of tomb evidence another way."
check:
  type: question
  q: "A Han tomb holds a pottery model of a large house with a watchtower. A museum says such models show what a person might have wanted in the afterlife, not always what they owned. What follows?"
  options:
    - "It shows hopes for the afterlife, so check other evidence before saying they owned it"
    - "It proves the dead person lived in a house exactly like this one"
    - "It shows nothing, because a model is not a real building"
    - "It proves every Han family lived in a house with a watchtower"
  answer: 0
  feedback:
    - null
    - "The model may show a wish for the afterlife, not the house they had."
    - "A model is still evidence: of what people hoped the dead would have."
    - "That is Nib's slip again: one tomb standing for everyone."
  explain: "Tomb models are evidence of beliefs and hopes about the afterlife; what they show about real life needs checking."
```

## Practise: customs and the evidence

```step
stage: practise
tasks:
  - check:
      type: match
      q: "Match each funerary practice to the belief or value behind it."
      pairs:
        - ["Stocking a tomb with food, clothes and dishes", "An afterlife much like this life"]
        - ["A careful funeral and offerings for a parent", "Duty to parents, even after death"]
        - ["An army of clay soldiers by a ruler's tomb", "A ruler who would still need guarding"]
  - check:
      type: question
      q: "Which piece of evidence would help most to find out how ordinary farmers in Han China were buried?"
      options:
        - "Simple graves dug up in a village cemetery"
        - "Lady Dai's tomb at Mawangdui"
        - "The First Emperor's terracotta army"
        - "A model house from a noble's tomb"
      answer: 0
      feedback:
        - null
        - "Lady Dai was a noblewoman. Her tomb shows a rich family's burial."
        - "That was made for an emperor, the richest burial of all."
        - "A noble's tomb shows what a noble family provided, not a farmer's burial."
      explain: "To learn about a group, look for evidence from that group."
insight: "Practising the link from practice to belief, and choosing evidence that fits the question."
```

### Practice and belief

### Choosing evidence

## Make: three customs and the evidence, in your book

```step
stage: make
insight: "Describing practices with evidence and their beliefs, for the society their class studies, makes the focus area their own."
check: { type: reflect, text: "In my own book I described three funerary customs of a society (Han China, or the one our class is studying), named a piece of evidence for each, explained the belief behind two of them, and said whose burials the evidence shows. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: everyday life on the farm

```step
stage: make
tier: typical
insight: "The same tomb evidence also opens another focus area: everyday life."
check:
  type: question
  q: "Tomb models of granaries, wells, mills and pig pens are common in later Han tombs. What can they tell us about everyday life and values?"
  options:
    - "Farming and stored grain mattered so much that people wanted them after death"
    - "Han people did not farm, so they made models of farms to remember it"
    - "The models show nothing about life, because they were made for tombs"
    - "Every family in Han China owned a mill, a well and a granary"
  answer: 0
  feedback:
    - null
    - "Most people in Han China were farmers. The models show something they knew well."
    - "Things made for tombs still tell us what people thought mattered."
    - "The models come from tombs of families who could afford them. That is Nib's slip."
  explain: "Grave goods show what people valued in daily life, here food, water and stored grain."
```

## Wider: the Mandate of Heaven and war

```step
stage: make
tier: wider
insight: "Beliefs also shaped another focus area, warfare: the Mandate of Heaven could be used to justify going to war."
check:
  type: question
  q: "Chinese accounts say that when the Zhou overthrew the Shang kings, around 1046 BCE, they claimed the Shang had ruled badly and lost Heaven's mandate. How did this belief help?"
  options:
    - "It gave a reason why fighting a ruling king could be right"
    - "It proved that the Zhou were stronger fighters than the Shang"
    - "It meant nobody in China fought a war for centuries afterwards"
    - "It showed that Heaven did not matter to people in a war"
  answer: 0
  feedback:
    - null
    - "Winning shows strength. The Mandate explained why the war was right, not who was stronger."
    - "Later rulers and rebels also claimed the Mandate when they fought. It did not end war."
    - "The Zhou claimed Heaven was on their side. Heaven mattered a great deal."
  explain: "The Mandate of Heaven helped people understand and justify war: a ruler who lost Heaven's approval could be overthrown. Some historians note it was usually the winners who said who had lost it."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
