---
order: 1
unit: causes
title: Why did societies meet and fight?
node: AC9HH7K12 n1
assumes: [AC9HH7K11]
summary: "Describe the causes of contacts and conflicts involving Qin and Han China (the Qin wars of unification, the long conflict between the Han and the Xiongnu, and Zhang Qian's mission west) and sort them into kinds: power, land, security, trade and resources. Most contacts and conflicts had several causes at once, and the causes shaped what happened next."
language: maths
hook: "In 138 BCE an emperor sent about a hundred men walking west into lands no one at his court had mapped. Why would he do that?"
---
A **contact** is any time two societies meet: through trade, travel, talks between rulers, or war. A **conflict** is when the meeting turns into a fight. Historians ask what caused each one, and the answer is almost never a single thing. Causes come in different kinds:

| Kind of cause | What it means |
|---|---|
| **Power** | A ruler wants to be stronger, more respected, or in charge of more people |
| **Land** | Wanting more farmland or territory, and the people on it to tax |
| **Security** | Protecting your people from attack |
| **Trade and resources** | Wanting goods, animals or materials you cannot get at home |

Here are three cases from ancient China.

> **The Qin wars of unification (230 to 221 BCE).** China was split into seven rival states. The state of Qin conquered the other six, one after another, and in 221 BCE its king became the First Emperor. Historians think several causes drove this: the king of Qin's wish to rule all the states (power), more farmland and people to tax and call up (land), and getting rid of dangerous neighbours (security).

> **The Han and the Xiongnu.** North of China lived the **Xiongnu**, herders who moved with their animals across the grasslands and fought on horseback. Their horsemen raided Han farms, and they wanted Han goods such as silk. The Han needed protection from the raids, and they wanted horses, because their own were smaller. From 133 BCE, Emperor Wu stopped trying to keep the peace and sent armies against the Xiongnu.

> **Zhang Qian's mission west (138 BCE).** According to Sima Qian, Emperor Wu sent Zhang Qian west to find the Yuezhi, a people the Xiongnu had driven out, and ask them to join the Han against the Xiongnu. The Xiongnu caught him and held him for about ten years. He escaped and reached the Yuezhi, but they did not want a war. He came home about thirteen years after he left, with news of rich lands to the west, including Ferghana (in Central Asia), where people bred big, strong horses. Emperor Wu later sent armies to Ferghana. The first failed in 104 BCE; the second came back in 101 BCE with the horses.

## Predict: why so long?

```step
stage: predict
insight: "Committing first shows whether students reach for one cause or several."
check:
  type: predict
  q: "The Han and the Xiongnu clashed, made peace and clashed again for well over a hundred years. What do you think kept them in contact for so long?"
  options:
    - "Several reasons at once: raids, horses, goods they each wanted, and rulers' power"
    - "Only one reason: the Han wanted to take the Xiongnu's grassland"
    - "Only one reason: the Xiongnu wanted to rule China themselves"
    - "No reason at all: fighting was just normal in ancient times"
  actual: "Several reasons at once. Raids made security a cause, the Han wanted horses and the Xiongnu wanted Han goods, and each ruler wanted to be the stronger one."
```

## Try: what kind of cause?

```step
stage: run
insight: "Sorting causes into kinds is the first move away from 'they just wanted land'."
check:
  type: sort
  q: "Sort each cause into its kind."
  options: ["Power", "Land", "Security", "Trade and resources"]
  items:
    - ["The king of Qin wanted to rule all seven states", "Power", "Being in charge of more people."]
    - ["Qin wanted more farmland and more farmers to tax", "Land", "Territory and the people on it."]
    - ["Xiongnu horsemen raided Han farms", "Security", "The Han wanted to protect their people."]
    - ["The Han wanted strong horses from Ferghana", "Trade and resources", "Animals they could not breed at home."]
    - ["The Xiongnu wanted Han silk", "Trade and resources", "Goods they did not make themselves."]
    - ["Emperor Wu wanted allies against the Xiongnu", "Security", "Allies to help protect the Han."]
```

Was your guess right? The Han and the Xiongnu had reasons of more than one kind, and so did the Qin.

## Worked example: causes shape what happens

```step
stage: investigate
insight: "Matching each case to its mix of causes, then catching Nib's single cause, shows that the mix explains what happened."
tasks:
  - check:
      type: match
      q: "Match each contact or conflict to the mix of causes behind it."
      pairs:
        - ["The Qin wars of unification", "Ruling all the states, more farmland, and safer borders"]
        - ["The Han–Xiongnu conflict", "Stopping raids, getting horses, and each side's power"]
        - ["Zhang Qian's mission", "Finding allies against the Xiongnu, then news of lands and horses"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining why the Han fought the Xiongnu. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: single-cause-conflict
      explain: "Line 3: Nib gives one cause, land, and stops. The Han also wanted to stop the raids (security), wanted horses (resources), and Emperor Wu wanted to be the stronger ruler (power). One cause on its own cannot explain why the conflict went on so long, or why the Han wanted horses and allies."
    smaller:
      check:
        type: question
        q: "Xiongnu horsemen raided Han farms. Which kind of cause is that for the Han?"
        options:
          - "Security: the Han wanted to protect their farmers"
          - "Land: the Han wanted the farms the raiders took"
          - "Trade: the Han wanted to buy goods from raiders"
          - "Power: the raids were the emperor's own idea"
        answer: 0
        feedback:
          - null
          - "The farms were already Han farms. The problem was keeping the people on them safe."
          - "Raiding is taking, not trading. That is a security problem."
          - "The emperor did not send the raids; the Xiongnu did."
        explain: "Protecting people from attack is a security cause. That is a second cause beside land."
  - check:
      type: question
      q: "The Han wanted protection from Xiongnu horsemen. How did that cause shape what Emperor Wu did next?"
      options:
        - "He looked for allies and for strong horses, which is why he sent Zhang Qian west"
        - "It changed nothing, because the Han already had all the horses they needed"
        - "He gave up on the north and moved the capital far to the south"
        - "He asked the Xiongnu to protect the Han from other raiders"
      answer: 0
      feedback:
        - null
        - "The Han horses were smaller. That is why horses from Ferghana mattered."
        - "The capital stayed in the north. The emperor tried to get stronger instead."
        - "The Xiongnu were the raiders the Han feared, so they were not likely protectors."
      explain: "A security cause led to a search for allies and horses. Causes do not just sit in a list: they shape the contact that follows."
```

### Mix of causes

### Find Nib's mistake

### How a cause shapes events

## Vary: take one cause away

```step
stage: modify
insight: "Removing one cause and seeing what is left shows that causes are separate and can each keep a contact going."
check:
  type: question
  q: "Imagine the Xiongnu had stopped raiding for good. Which reason for Han contact with the lands to the west would still be there?"
  options:
    - "The Han would still want horses and goods from the west"
    - "None: without raids there was no reason for any contact"
    - "The Han would still need allies against the raiders"
    - "The Han would want to conquer Ferghana's farmland"
  answer: 0
  feedback:
    - null
    - "Raids were one cause, not the only one. Trade and horses were reasons of their own."
    - "If the raids had stopped, allies against them would matter less. Look for a different kind of cause."
    - "Ferghana was far away. The Han wanted its horses, not its land."
  explain: "Take away the security cause and the trade and resources cause is still there. Different causes can each keep a contact going."
```

## Practise: causes and kinds

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which explanation of the Qin wars of unification is strongest?"
      options:
        - "Qin's king wanted power, Qin wanted more land, and its neighbours were a danger"
        - "Qin's king wanted power, so that is the whole reason for the wars"
        - "Qin wanted land, and land is the reason for every ancient war"
        - "The six states asked Qin to rule them, so there was no war"
      answer: 0
      feedback:
        - null
        - "Power was one cause. A strong explanation adds land and security too."
        - "Land mattered, but one cause for every war is too simple. Look for other kinds."
        - "The six states fought back. Qin conquered them one by one."
      explain: "The strongest explanation names more than one cause, of different kinds."
  - check:
      type: sort
      q: "Is each one a cause of the Han–Xiongnu conflict, or something that happened because of it?"
      options: ["Cause", "Result"]
      items:
        - ["Xiongnu horsemen raided Han farms", "Cause", "Raids came first and made the Han want to fight back."]
        - ["Han armies brought horses back from Ferghana", "Result", "This came after the Han went looking for horses."]
        - ["The Han wanted bigger, stronger horses", "Cause", "A reason the Han went looking west."]
        - ["Zhang Qian brought home news of lands to the west", "Result", "His mission came out of the conflict."]
insight: "Practising the kinds of cause, and telling causes from results, gets ready for the effects lesson."
```

### The strongest explanation

### Cause or result?

## Make: explain the causes, in your book

```step
stage: make
insight: "Explaining several causes of one contact or conflict, and how one of them shaped what happened, makes the waypoint their own."
check: { type: reflect, text: "In my own book I chose one contact or conflict (from Han China, or the society our class is studying), described at least two causes of different kinds, and explained how one of them shaped what happened. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: why Greeks sailed away

```step
stage: make
tier: typical
insight: "The same question, what kinds of cause, works for Greek colonisation."
check:
  type: question
  q: "Between about 750 and 550 BCE, Greeks from many city-states set up new towns around the Mediterranean and the Black Sea. Historians give several causes. Which answer names causes of different kinds? (See the Greece card on the Reference page.)"
  options:
    - "Little good farmland at home, trade in grain and metals, and quarrels in their home cities"
    - "Little good farmland at home, and that one cause explains every new town"
    - "The Greeks were told to leave by the Egyptians, so they had no choice"
    - "Greeks liked sailing, so they set up towns wherever their ships landed"
  answer: 0
  feedback:
    - null
    - "Land was a big cause, but historians also point to trade and to quarrels at home."
    - "The causes came from inside Greece and from trade, not from Egyptian orders."
    - "Founding a town took planning and a reason. Look for land, trade and politics."
  explain: "Land, trade and politics: three kinds of cause behind one movement of people."
```

## Wider: the spark and the fuel

```step
stage: make
tier: wider
insight: "Separating a short-term trigger from longer causes applies the idea to a major war."
check:
  type: question
  q: "Around 499 BCE, Athens sent ships to help Greek cities that had rebelled against Persia. Persia later invaded Greece, in 490 and 480 BCE. Which is the best way to describe Athens' help? (See the Greece card.)"
  options:
    - "A short-term trigger: the deeper cause was Persia's long growth into a huge empire"
    - "The only cause: without it, Persia and Greece would always have been at peace"
    - "Not a cause at all, because it happened years before the invasions"
    - "A result of the invasions, because it came after the Persian Wars"
  answer: 0
  feedback:
    - null
    - "Persia's empire had been growing towards Greece for decades. One event is rarely the only cause."
    - "Causes can come years before. The help gave Persia a reason to invade."
    - "Check the dates: 499 BCE comes before 490 and 480 BCE."
  explain: "A trigger is the spark; longer causes, like an empire's growth, are the fuel."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
