---
order: 3
unit: change
title: The many, and change over time
node: AC9HH7K10 n3
summary: "Describe the roles of slaves, convict labourers and other groups near the bottom of Qin and Han society, explain how the society depended on their work, and describe how relationships between groups changed over time. The groups at the bottom were not just passive; the order between groups shifted when rulers changed the rules and when people pushed back."
language: maths
hook: "The First Emperor's tomb, the walls and the roads were not built by the emperor. Who built them, and did that give those people any power?"
---
Near the bottom of Qin and Han society were many people whose work everything else rested on:

- **Farmers**, most of the population, who grew the food, paid grain tax and owed labour and army service.
- **Conscripted labourers**: ordinary men called up to build walls, roads, canals and the emperor's tomb.
- **Convicts**, who were punished with years of hard labour.
- **Slaves**, owned by the government or by private families, who worked in households, workshops and fields. In the Han they were a small part of the population.
- **Merchants**, who could become rich, but whom many officials looked down on, because Confucian thinkers ranked trade below farming and crafts. That ranking was an ideal order, not a list of who had the most money.

The order between these groups was not fixed. Some changes:

> **209 BCE.** According to Sima Qian, writing about a century later, a group of about 900 conscripts led by Chen Sheng and Wu Guang were held up by heavy rain on their way to the northern frontier. Late, and fearing punishment, they rebelled. Their revolt spread, and the Qin dynasty fell within a few years.

> **Under Emperor Wu (141 to 87 BCE).** The Han government taxed merchants heavily, and in 119 BCE took over making and selling salt and iron, which had made private traders rich.

> **9 CE.** Wang Mang, who had seized the throne, banned buying and selling land and slaves. Powerful families opposed it, and he cancelled the ban in 12 CE.

## Predict: who built the walls?

```step
stage: predict
insight: "Committing first surfaces the idea that history is made only by rulers."
check:
  type: predict
  q: "Who did most of the work of building the Qin walls, roads and the First Emperor's tomb?"
  options:
    - "Conscripted labourers, convicts and craftworkers"
    - "The emperor and his officials"
    - "Hired workers who chose the job for good pay"
    - "Soldiers from other countries"
  actual: "Conscripted labourers, convicts and craftworkers. Officials organised the work; ordinary people did it."
```

## Try: who did what?

```step
stage: run
insight: "Matching groups to their work shows how much the society rested on people near the bottom."
check:
  type: match
  q: "Match each group to the work it mainly did."
  pairs:
    - ["Farmers", "Grew the food and paid grain tax"]
    - ["Conscripted labourers", "Built walls, roads and canals for a set time"]
    - ["Convicts", "Did hard labour as a punishment"]
    - ["Government and household slaves", "Worked in workshops, fields and homes"]
```

Was your guess right? The people with the least power did much of the work.

## Worked example: did they matter?

```step
stage: investigate
insight: "Explaining how the bottom groups shaped events, then catching Nib's 'they did not matter', shows influence that is not the same as power."
tasks:
  - check:
      type: question
      q: "How did the rebellion of Chen Sheng and Wu Guang in 209 BCE influence Qin society?"
      options:
        - "Their revolt spread and helped bring down the Qin dynasty"
        - "It changed nothing, because conscripts had no power"
        - "It made the Qin rulers go easier on conscripts"
        - "It was a revolt of officials against the emperor"
      answer: 0
      feedback:
        - null
        - "Having little power did not stop their revolt from spreading. The dynasty fell within a few years."
        - "Sima Qian tells of no such change. The revolt spread, and the Qin fell within a few years."
        - "Chen Sheng and Wu Guang were leading conscripts, not officials of the court."
      explain: "People with little power could still change history, especially when many acted together."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about slaves and labourers in Qin and Han China (Nib's notes are made up for this lesson). Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: bottom-groups-passive
      explain: "Line 3: Nib says these groups did not matter because they had little power. The society depended on their work, and conscripts' revolt helped end the Qin. Having little power is not the same as having no influence."
    smaller:
      check:
        type: question
        q: "If every conscripted labourer stopped working, what would happen to the emperor's walls and roads?"
        options:
          - "They would not get built"
          - "Nothing: the emperor would build them himself"
          - "Officials would finish them in a day"
          - "Hired workers would quickly take their place"
        answer: 0
        feedback:
          - null
          - "The emperor did not dig walls. That was the conscripts' work."
          - "There were far too few officials, and that was not their job."
          - "The state relied on owed labour because it could not pay that many workers."
        explain: "The powerful depended on the work of people with little power."
  - check:
      type: question
      q: "Why does the lesson say 'according to Sima Qian' about the rebellion?"
      options:
        - "He wrote a century later, for the Han, so he had a view"
        - "Because historians think the revolt never happened"
        - "Because Sima Qian saw the revolt with his own eyes"
        - "Because he was the only person in China who could write"
      answer: 0
      feedback:
        - null
        - "Historians accept that there was a revolt. The details, such as the reasons, come from Sima Qian's account."
        - "He lived about a hundred years later and was a court historian. He was not there."
        - "Many officials could write. Sima Qian's history is the main account that survives."
      explain: "Naming the source keeps the account honest: this is what Sima Qian tells us, from where he stood."
```

### The rebellion

### Find Nib's mistake

### According to whom?

## Vary: changing the rules

```step
stage: modify
insight: "Looking at rules that changed shows that relationships between groups were not fixed."
check:
  type: match
  q: "Match each change to the group it affected most."
  pairs:
    - ["Heavy taxes on traders under Emperor Wu", "Merchants"]
    - ["The state taking over salt and iron in 119 BCE", "Private traders in salt and iron"]
    - ["Wang Mang banning the sale of slaves in 9 CE", "Slaves and their owners"]
    - ["The revolt of 209 BCE", "The Qin rulers"]
```

## Practise: change or no change?

```step
stage: practise
tasks:
  - check:
      type: question
      q: "In 9 CE Wang Mang banned buying and selling slaves. Powerful families opposed it, and he cancelled the ban in 12 CE. What does that show about change over time?"
      options:
        - "A change in the rules could be undone"
        - "Nothing ever changed in Han China"
        - "Once a law is made, it lasts for good"
        - "Slavery in China ended for good in 9 CE"
      answer: 0
      feedback:
        - null
        - "The rules about selling slaves changed twice in three years."
        - "This law lasted only about three years."
        - "The ban was on buying and selling slaves, not on owning them, and it was cancelled in 12 CE."
      explain: "Change over time is not always in one direction; reforms can be reversed."
  - check:
      type: sort
      q: "Is each statement about the role of a group, or about a change over time?"
      options: ["Role of a group", "Change over time"]
      items:
        - ["Farmers paid grain tax", "Role of a group", "What farmers did."]
        - ["The Han taxed merchants more heavily under Emperor Wu", "Change over time", "A new rule that changed things."]
        - ["Convicts did hard labour", "Role of a group", "What convicts did."]
        - ["Selling slaves was banned in 9 CE and allowed again in 12 CE", "Change over time", "Two changes, one after another."]
insight: "Separating roles from changes practises the two halves of this waypoint."
```

### Lasting change?

### Role or change?

## Make: one group, one change, in your book

```step
stage: make
insight: "Writing about one group's role and one change for their own society makes the waypoint theirs."
check: { type: reflect, text: "In my own book I chose one group near the bottom of a society (Han China, or the one our class is studying), described its work and how the society depended on it, and described one way its position changed over time. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: slavery in Rome

```step
stage: make
tier: typical
insight: "ACARA's Roman example: the same questions about a society that relied much more on slaves."
check:
  type: question
  q: "In the Roman Empire, many slaves were captured in wars, and some were later freed. What does the rise of freed slaves (freedmen) show? (See the Rome card.)"
  options:
    - "Groups were not fixed: some people moved out of slavery"
    - "Slavery in Rome was ending, since so many were freed"
    - "Slaves in Rome had the same rights as citizens"
    - "Once freed, a person joined the patrician families"
  answer: 0
  feedback:
    - null
    - "Many slaves were freed, but wars kept bringing in new slaves. Slavery went on."
    - "Slaves had very few rights. Freeing was a change in status."
    - "Patricians were old noble families by birth. Freedmen were a separate group, though some became rich."
  explain: "Movement between groups is one kind of change over time: some people left slavery, and some freedmen became wealthy."
```

## Wider: an ideal order or real life?

```step
stage: make
tier: wider
insight: "Separating an ideal ranking from how people really lived applies the source skills to social structure."
check:
  type: question
  q: "Confucian writers ranked scholars first, then farmers, then craftworkers, then merchants. Yet some Han merchants were richer than many officials. What is the best conclusion?"
  options:
    - "It shows what officials valued, not who was richest"
    - "The ranking proves most merchants were poor"
    - "The ranking was wrong, so it tells us nothing"
    - "Rich merchants had more power than officials"
  answer: 0
  feedback:
    - null
    - "Some merchants were very rich. The ranking was about respect and values, not wealth."
    - "It tells us what educated officials valued, which is useful evidence."
    - "Merchants could be rich, but the emperor and officials held the power, and could tax merchants heavily."
  explain: "The ranking was an ideal of how society should be ordered. A text's ideal order is evidence of values. Compare it with other evidence before treating it as a description."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
