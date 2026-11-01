---
order: 1
unit: power
title: Who ran the society, and how?
node: AC9HH7K10 n1
assumes: [AC9HH7K09]
summary: "Describe the layers of society in Qin and Han China and the roles of the nobility and the officials (the bureaucracy), and explain how they used their power: by counting people and land, collecting tax, running the courts and organising labour and armies. Knowing who was at the top is only half the answer; how their power worked is the other half."
language: maths
hook: "The emperor lived in the capital. A village paying grain tax could be weeks of travel away. So who made sure the grain arrived?"
---
Most ancient societies had a **hierarchy**: layers of people, with a few at the top holding most of the power and most people near the bottom. In Qin and Han China it looked roughly like this:

| Layer | Who | What they did |
|---|---|---|
| The ruler | The emperor | Made laws, appointed officials, led the army |
| Nobles | Relatives and allies of the ruling family, given titles and, in the early Han, whole kingdoms to rule | Ruled their lands, often passing them to their sons |
| Officials (the bureaucracy) | Governors, county magistrates, clerks, tax collectors | Ran the country day to day for the emperor |
| Most people | Farmers | Grew the food, paid grain tax, and owed labour each year and a period of army service |
| Others | Craftworkers, merchants, soldiers | Made, traded and fought |
| At the bottom | Convicts and slaves | Did forced labour |

The **officials** are the key to how power worked. After the Qin united China in 221 BCE, the First Emperor divided the land into 36 **commanderies**, each split into **counties**. Instead of leaving each area to a noble family, he sent officials to run them. Officials were appointed by the emperor, paid by him, and could be moved or dismissed. The early Han kept the officials, though for a time it also gave kingdoms to the emperor's relatives.

Here is how officials carried the emperor's power out to the villages:

- **Counting**: registers of every household and its land, so the state knew who could pay tax and who could be called up for labour or the army.
- **Tax**: grain collected from farmers (the surplus from *Shaped by the land*), which fed officials and soldiers.
- **Law**: written rules, like the ones on the Qin bamboo slips, told officials what to do and set punishments.
- **Labour and armies**: men were called up to build walls, roads and canals, or to serve as soldiers.

> **A made-up county official's day** (made up for this lesson): check the grain store against the register; hear a dispute about a field boundary; send ten men to repair the road; write a report to the commandery.

## Predict: who collects the grain?

```step
stage: predict
insight: "Committing first shows whether students picture power as the emperor alone, or as a system of people doing jobs."
check:
  type: predict
  q: "The emperor wants grain from a village far from the capital. Who most likely makes sure it arrives?"
  options:
    - "Local officials who keep the village's records and collect the tax"
    - "The emperor travels to the village to collect it himself"
    - "The farmers decide to send it because they respect the emperor"
    - "Nobody: villages far away did not pay tax"
  actual: "Local officials. The emperor's power reached the village through the officials who kept the records and collected the tax."
```

## Try: who is who?

```step
stage: run
insight: "Sorting people into nobles, officials and most people separates power by birth from power by appointment."
check:
  type: sort
  q: "Sort each person in Qin or Han China into their group."
  options: ["Nobles", "Officials", "Most people"]
  items:
    - ["A king who was the emperor's brother, ruling a region in the early Han", "Nobles", "He holds power because of his family."]
    - ["A county magistrate sent from the capital", "Officials", "He was appointed and could be moved."]
    - ["A clerk who keeps the household register", "Officials", "Record keeping is official work."]
    - ["A millet farmer who pays grain tax", "Most people", "Farmers were most of the population."]
    - ["A marquis given a title and land by the emperor", "Nobles", "A title and land from the ruler."]
    - ["A man called up to repair a road for a month", "Most people", "Ordinary men owed labour service."]
```

Was your guess right? Power reached the villages through officials, not the emperor in person.

## Worked example: how power worked

```step
stage: investigate
insight: "Matching each tool of power to what it controlled, then fixing Nib's 'the emperor just made it happen', shows power as a system."
tasks:
  - check:
      type: match
      q: "Match each tool officials used to what it let the state control."
      pairs:
        - ["Household and land registers", "Who could be taxed and called up for labour or the army"]
        - ["Grain tax", "Food for officials and soldiers"]
        - ["Written laws and punishments", "How people and officials behaved"]
        - ["Calling men up for labour", "Building walls, roads and canals"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how the Qin emperor ruled (Nib's notes are made up for this lesson). Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: power-without-how
      explain: "Line 3: Nib says the emperor just made things happen because he was at the top. Being at the top is who had power, not how it worked. The emperor's orders were carried out by officials who counted people, collected tax, ran the courts and called up labour."
    smaller:
      check:
        type: question
        q: "The emperor orders a new road in a far commandery. What has to happen before anyone starts digging?"
        options:
          - "Officials use the registers to call up workers"
          - "Nothing: the order is enough on its own"
          - "The emperor travels there to lead the work"
          - "Farmers volunteer because they want a road"
        answer: 0
        feedback:
          - null
          - "An order on its own builds nothing. Someone has to find the workers and feed them."
          - "One person cannot run a whole empire in person. That is what officials were for."
          - "Labour was owed to the state, and officials made sure men turned up."
        explain: "Officials used the registers to call up workers and organise food for them. Orders became action through officials, records and owed labour."
  - check:
      type: question
      q: "What was the main difference between a noble and an official in Qin China?"
      options:
        - "A noble's power came from family; an official's from the emperor"
        - "Officials were richer, so they had more power than nobles"
        - "Nobles did all the paperwork and officials fought in the army"
        - "There was no difference: both inherited their jobs"
      answer: 0
      feedback:
        - null
        - "Wealth was not the difference, and some nobles were very rich. The difference was where their power came from."
        - "It was the other way round: officials kept the records."
        - "Qin officials were appointed, not born into the job. That was the point of them."
      explain: "An official was appointed by the emperor and could be dismissed, so he depended on the emperor. That is one reason the Qin used officials instead of noble families."
```

### Tools of power

### Find Nib's mistake

### Nobles or officials?

## Vary: why officials?

```step
stage: modify
insight: "Asking why a ruler would choose officials over nobles shows that how power is organised is a choice with reasons."
check:
  type: question
  q: "Historians think one reason the First Emperor used appointed officials instead of noble families was to keep control. Why would officials help him do that?"
  options:
    - "He could dismiss them, so they had reason to obey him"
    - "Officials were his relatives, so they were always loyal"
    - "Officials cost less, because they were not paid"
    - "Officials lived in the capital, close to him"
  answer: 0
  feedback:
    - null
    - "Relatives were the nobles. Officials were chosen for the job, often not family."
    - "Officials were paid by the state. That was part of why they depended on the emperor."
    - "Most officials were sent out to commanderies and counties far from the capital."
  explain: "An official who owes his job to the ruler is easier to control than a noble family with its own land and followers."
```

## Practise: layers and power

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which statement describes the hierarchy best?"
      options:
        - "A few at the top held most power; most people were farmers"
        - "Power was shared out fairly evenly between the layers"
        - "Merchants were at the top because they had the most money"
        - "The emperor held all the power, and officials had none"
      answer: 0
      feedback:
        - null
        - "A hierarchy means layers with very different amounts of power."
        - "Some merchants were rich, but the officials and the emperor held the power. Money and power were not the same thing."
        - "The emperor was at the top, but officials held real power over the areas they ran."
      explain: "Layers, with power concentrated at the top, and most people farming near the bottom, paying tax and owing labour."
  - check:
      type: sort
      q: "Is each one about who had power, or how power worked?"
      options: ["Who had power", "How power worked"]
      items:
        - ["The emperor was at the top", "Who had power", "That names a position."]
        - ["Officials kept registers of every household", "How power worked", "Records let the state tax and call people up."]
        - ["Nobles held titles from the emperor", "Who had power", "That names a group."]
        - ["Grain tax fed the soldiers", "How power worked", "That is the mechanism."]
insight: "Practising the difference between who had power and how it worked."
```

### The hierarchy

### Who or how?

## Make: explain how power worked, in your book

```step
stage: make
insight: "Explaining one tool of power for the society their class studies makes 'how' their own."
check: { type: reflect, text: "In my own book I described the layers of a society (Qin and Han China, or the one our class is studying) and explained one way the people at the top used their power, with an example. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Egypt's officials

```step
stage: make
tier: typical
insight: "The same question, how did power reach ordinary people, works for another society."
check:
  type: question
  q: "In ancient Egypt, the Pharaoh ruled through viziers, regional governors (nomarchs) and scribes. What did the scribes most likely do for the Pharaoh's power? (See the Egypt card on the Reference page.)"
  options:
    - "Kept records of harvests, taxes and workers"
    - "Ruled their own regions apart from the Pharaoh"
    - "Grew most of the food for the country"
    - "Advised the Pharaoh on which laws to make"
  answer: 0
  feedback:
    - null
    - "Scribes worked for the state; they did not rule regions of their own."
    - "Farmers grew the food. Scribes counted and recorded it."
    - "That was closer to the viziers' job. Scribes did the counting and writing that let orders be carried out."
  explain: "As in Qin China, writing and record keeping carried the ruler's power to the villages."
```

## Wider: power by vote in Athens

```step
stage: make
tier: wider
insight: "A society where some power worked through citizens' votes shows that hierarchies were organised differently."
check:
  type: question
  q: "In Athens, male citizens could vote in the assembly. Does that mean everyone in Athens shared power? (See the Athens card.)"
  options:
    - "No: women, slaves and foreigners could not vote"
    - "Yes: everyone living in Athens could vote"
    - "No: only rich nobles could vote in the assembly"
    - "Yes: all men living in Athens could vote"
  answer: 0
  feedback:
    - null
    - "Only adult male citizens could vote."
    - "Poorer male citizens could vote too. What counted was being an adult male citizen."
    - "Only male citizens. Foreign men living there and enslaved men could not vote."
  explain: "Power was shared among some men only. It can be organised by votes as well as by officials, but who counts as a citizen decides who shares it."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
