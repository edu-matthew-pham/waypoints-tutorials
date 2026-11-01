---
order: 1
unit: system
title: What did they believe, and what did they do about it?
node: AC9HH7K11 n1
assumes: [AC9HH7K10]
summary: "Describe key beliefs held by many people in Han China (duty to ancestors and parents, Heaven and the Mandate of Heaven, an afterlife much like this life) and explain how each belief led to practices such as offerings, careful funerals and furnished tombs. The beliefs fitted together like a system, so a practice that looks strange makes sense once you know the belief behind it."
language: maths
hook: "Why would a family put dishes of food, a set of clothes and a little clay model of a granary into a grave?"
---
A **belief** is something people hold to be true about the world: what happens after death, who gives a ruler the right to rule, what you owe your family. A **practice** is something people do. Historians look for how the two connect, because a belief usually explains a practice.

Many people in Han China held beliefs that fitted together:

| What many people believed | What they did because of it |
|---|---|
| The spirits of ancestors lived on, and could help their descendants | Families made regular offerings of food and drink to their ancestors |
| Children owe their parents care and respect, while they live and after they die (Confucian teaching on **filial piety**, which means duty to parents) | Careful funerals, and offerings that kept going for years |
| Heaven gave a ruler the right to rule only while he ruled well: the **Mandate of Heaven** | Advisers read floods and droughts as Heaven's warnings, and told the emperor to change how he ruled |
| Life after death was much like life before it | Tombs were filled with food, clothes, dishes and models of houses and granaries |

When Confucius was asked about duty to parents, the *Analects* (a collection of his sayings) record him answering that parents should be served properly while they are alive, buried properly when they die, and given offerings properly after that. In 136 BCE, under Emperor Wu, Confucian teaching became the official basis of Han government. Dong Zhongshu, a Confucian adviser to Emperor Wu, taught that floods and droughts were Heaven's way of warning the emperor.

See how the beliefs link up. Duty to your parents does not stop when they die, so funerals and offerings matter. If the dead live on much as before, they need what the living need, so the tomb is stocked. Together the beliefs work like a system: each one helps explain the others, and together they explain what people did.

This is a simplified picture. Beliefs varied between places and families and changed over the 400 years of the Han, and people also followed other teachings, such as Daoism.

## Predict: why stock a tomb?

```step
stage: predict
insight: "Committing first shows whether students reach for a belief behind a practice, or treat it as an odd custom."
check:
  type: predict
  q: "Archaeologists open a Han tomb and find dishes of food, clothes and a model house. What best explains why they were put there?"
  options:
    - "Many people believed the dead lived on and would need what the living need"
    - "The family was getting rid of things nobody in the house used any more"
    - "It was just a custom people followed without any reason behind it"
    - "Robbers broke in later and left the things they did not want"
  actual: "A belief about the afterlife. Many people in Han China believed life after death was much like life before it, so the dead would need food, clothes and a home."
```

## Try: which belief, which practice?

```step
stage: run
insight: "Matching each belief to the practice it led to makes the link between believing and doing the first habit."
check:
  type: match
  q: "Match each belief held by many people in Han China to the practice it led to."
  pairs:
    - ["Ancestors' spirits live on and can help their family", "Regular offerings of food and drink at home"]
    - ["Children owe duty to their parents, even after death", "Careful funerals for parents"]
    - ["Heaven lets a ruler rule only while he rules well", "Reading a flood as a warning to the emperor"]
    - ["Life after death is much like this life", "Putting food and model houses in tombs"]
```

Was your guess right? Behind the dishes in the tomb is a belief about what the dead would need.

## Worked example: beliefs explain practices

```step
stage: investigate
insight: "Separating beliefs from practices, then fixing Nib's 'they just liked decorating', shows a practice as the result of a belief."
tasks:
  - check:
      type: sort
      q: "Is each one a belief (what people held to be true) or a practice (what people did)?"
      options: ["Belief", "Practice"]
      items:
        - ["The dead need food in the afterlife", "Belief", "That is an idea about the world."]
        - ["Placing dishes of food in a tomb", "Practice", "That is something people did."]
        - ["Heaven chooses who should rule", "Belief", "An idea about where a ruler's right comes from."]
        - ["Making offerings to a grandparent's spirit", "Practice", "An action, done because of a belief."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about Han tombs. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: beliefs-as-odd-customs
      explain: "Line 3: Nib treats the model houses as decoration, a custom with no reason. Many people believed the dead lived on and needed a home, food and help, so the family gave them those things. The practice makes sense once you know the belief."
    smaller:
      check:
        type: question
        q: "A family puts a small clay granary in a grave. Which question helps a historian most?"
        options:
          - "What did the family believe the dead person would need?"
          - "Did the family just like the look of granaries?"
          - "How much did the clay model cost to make?"
          - "Why did they waste a good granary on a grave?"
        answer: 0
        feedback:
          - null
          - "That treats it as decoration. Ask what belief would make a granary useful to the dead."
          - "Cost tells you about wealth, not why a granary was chosen."
          - "It is a model, made for the grave. Ask what it was meant to give the dead person."
        explain: "Asking what people believed turns an odd-looking object into evidence."
  - check:
      type: question
      q: "Why did a family that followed Confucian teaching keep making offerings after a parent died?"
      options:
        - "They believed their duty to a parent carried on after death"
        - "It was a habit they kept up without really meaning it"
        - "They wanted to show the neighbours how rich they were"
        - "They thought their parent had not really died at all"
      answer: 0
      feedback:
        - null
        - "That treats it as a habit. Confucius taught that offerings were part of a child's duty."
        - "Some families may have shown off, but the teaching behind offerings was duty to parents."
        - "They knew the parent had died. They believed the parent's spirit lived on and was owed care."
      explain: "Filial piety, duty to parents, did not stop at death, so offerings continued."
```

### Belief or practice?

### Find Nib's mistake

Read Nib's notes (made up for this lesson). Which line turns a practice into decoration?

### Duty after death

## Vary: a flood and the Mandate of Heaven

```step
stage: modify
insight: "A different belief, about rulers, shows the same move: find the belief that makes a practice make sense."
check:
  type: question
  q: "In a year of terrible floods, a Han adviser tells the emperor he must change how he rules. Which belief is the adviser drawing on?"
  options:
    - "Heaven sends warnings when a ruler governs badly"
    - "Floods happen by chance and mean nothing at all"
    - "The emperor controls the rivers with his own power"
    - "Ancestors send floods to punish their own families"
  answer: 0
  feedback:
    - null
    - "That is a modern way to explain floods. The question asks what many people believed at the time."
    - "The emperor was not thought to control the rivers. Heaven was thought to send the warning."
    - "Ancestors were linked to families, not to how the emperor ruled."
  explain: "Under the Mandate of Heaven, disasters could be read as a sign that the ruler was losing Heaven's approval."
```

## Practise: beliefs as a system

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which statement about beliefs in Han China is best?"
      options:
        - "Many people held linked beliefs, though they varied by place and family"
        - "Everyone in Han China believed exactly the same things in the same way"
        - "Their beliefs were separate odd customs that had nothing to do with each other"
        - "People had no beliefs of their own, only rules the emperor gave them"
      answer: 0
      feedback:
        - null
        - "Beliefs varied between places, families and over time. 'Many people' is safer than 'everyone'."
        - "The beliefs linked up: duty to parents and the afterlife both explain funerals and tombs."
        - "Families made offerings at home for their own ancestors. Beliefs were not only the emperor's rules."
      explain: "Linked beliefs, held by many but not identically by all."
  - check:
      type: sort
      q: "Which belief best explains each practice?"
      options: ["Duty to family", "Mandate of Heaven", "Afterlife like this life"]
      items:
        - ["Holding a careful funeral for a parent", "Duty to family", "Confucius taught that parents should be buried properly."]
        - ["An adviser reading a drought as a warning", "Mandate of Heaven", "Disasters were read as signs from Heaven."]
        - ["Burying a model well and pig pen", "Afterlife like this life", "The dead would need water and food."]
        - ["Putting clothes and dishes in a tomb", "Afterlife like this life", "The dead would need to dress and eat."]
        - ["Making offerings to a grandparent's spirit", "Duty to family", "Duty to parents and grandparents carried on after death."]
insight: "Practising the link from each practice back to its belief."
```

### The best statement

### Which belief?

## Make: two beliefs and what they led to, in your book

```step
stage: make
insight: "Explaining two beliefs and the practices they led to, for the society their class studies, makes the belief-to-practice link their own."
check: { type: reflect, text: "In my own book I described two beliefs held in a society (Han China, or the one our class is studying) and explained how each one led to a practice, with an example. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: household gods in Rome

```step
stage: make
tier: typical
insight: "The same move, belief then practice, works for a society with different beliefs."
check:
  type: question
  q: "Many Roman homes had a small shrine for the household gods (the Lares), where the family prayed and made offerings at family festivals. Which belief best explains this? (See the Rome card on the Reference page.)"
  options:
    - "The household gods were believed to watch over the home and family"
    - "Romans built the shrines only as decoration for the house"
    - "Only priests in big temples were allowed to worship at all"
    - "Romans did not believe in gods, so the shrines meant nothing"
  answer: 0
  feedback:
    - null
    - "That is Nib's slip again. Ask what the family believed the gods did for them."
    - "Worship happened at home as well as in temples. That is what the shrine was for."
    - "Romans worshipped many gods. The shrine shows a belief, not an empty custom."
  explain: "A belief about gods who cared for the household explains a practice in the home."
```

## Wider: asking the gods in Greece

```step
stage: make
tier: wider
insight: "Religious authority could shape big decisions, such as going to war."
check:
  type: question
  q: "Greek lawmakers, colonists and cities asked the oracle of the god Apollo at Delphi for advice, including about wars they were planning. What does this show? (See the Greece card.)"
  options:
    - "Many Greeks believed the god's advice mattered, so belief shaped their choices"
    - "The oracle had its own army that forced the cities to obey it"
    - "The Greeks only asked the oracle about small personal worries"
    - "It shows the Greeks did not really believe in their gods"
  answer: 0
  feedback:
    - null
    - "The oracle gave advice; it did not command armies. Its power came from what people believed."
    - "Lawmakers and colonists asked it too, and it was asked about planned wars."
    - "Travelling to Delphi to ask is a sign of belief, not of doubt."
  explain: "A belief about the gods could shape decisions about laws, new colonies and war."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
