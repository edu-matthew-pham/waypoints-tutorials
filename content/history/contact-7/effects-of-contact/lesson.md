---
order: 2
unit: effects
title: What did contact and conflict lead to?
node: AC9HH7K12 n2
summary: "Describe the effects of contacts and conflicts between the Han and their neighbours in three kinds: conquest (Han commanderies along the Hexi Corridor), the expansion of trade (silk going west; horses, grapes and other goods coming east) and peace agreements (the heqin agreements with the Xiongnu from about 198 BCE), and explain what each one changed, for every society involved, not only the winner."
language: maths
hook: "For about sixty years, a Han emperor sent silk, food and a bride to the ruler of his enemies every so often. What did each side get out of that?"
---
Contacts and conflicts had **effects**: things that changed because of them. Historians look for three big kinds:

| Kind of effect | What it means |
|---|---|
| **Conquest** | One society takes over land and the people living on it |
| **Trade** | Goods, animals and ideas start to move between societies |
| **Peace agreement** | Rulers agree terms to stop fighting, for a while at least |

And they ask the same question every time: **who changed, and how?** The answer is usually *both sides*.

> **A peace agreement: the heqin (from about 198 BCE).** In 200 BCE the first Han emperor led an army north and was trapped by the Xiongnu at a place called Baideng. He got away, but he could not beat them. About two years later the Han agreed the first **heqin** ("peace through kinship") agreement: a woman of the royal family married the Xiongnu ruler, and the Han sent gifts of silk, food and other goods. The agreement treated the two rulers as equals. Raids did not stop completely, but the Han kept to this kind of agreement until Emperor Wu changed course in the 130s BCE.

> **Conquest: the Hexi Corridor (from 121 BCE).** West of the Han heartland is the Hexi Corridor, a long, narrow strip of land between mountains and desert. In 121 BCE a Han army drove the Xiongnu out of it. The Han then set up four commanderies there, including Dunhuang at the far western end, built farming garrison towns for soldiers and settlers, and by about 100 BCE had extended their walls as far as Dunhuang. The Xiongnu lost grazing land and a route they had controlled.

> **Trade: goods both ways.** With the corridor held, Han envoys and merchants could travel west more safely. Chinese silk went west, passed from trader to trader across Central Asia. Horses, grapes, alfalfa (a crop for feeding horses), wool and other goods came east. Today these routes are often called the **Silk Roads**, but that is a modern name, made up by European writers in the 1800s. People at the time did not use it.

## Predict: who changed?

```step
stage: predict
insight: "Committing first shows whether students think only the winner changes."
check:
  type: predict
  q: "After the Han conquered the Hexi Corridor and drove the Xiongnu out, which society do you think changed?"
  options:
    - "Both: the Han gained land and trade routes, and the Xiongnu lost grazing land"
    - "Only the Han, because they won and gained new land"
    - "Only the Xiongnu, because losing is the only thing that changes you"
    - "Neither: a conquest moves a border, but nothing else changes"
  actual: "Both. The Han gained land, towns and a safer route west; the Xiongnu lost grazing land and a route they had controlled."
```

## Try: what kind of effect?

```step
stage: run
insight: "Sorting effects into conquest, trade and peace agreement shows the range of what contact led to."
check:
  type: sort
  q: "Sort each effect into its kind."
  options: ["Conquest", "Trade", "Peace agreement"]
  items:
    - ["The Han set up commanderies in the Hexi Corridor", "Conquest", "Taking over land and running it."]
    - ["Grapes and alfalfa began to be grown in China", "Trade", "New plants arrived from the west."]
    - ["A Han royal woman married the Xiongnu ruler", "Peace agreement", "A marriage that sealed the heqin terms."]
    - ["Chinese silk reached Central Asia and beyond", "Trade", "Goods moving between societies."]
    - ["The Han sent yearly gifts of silk and food north", "Peace agreement", "Gifts were part of the heqin terms."]
    - ["Han soldiers and settlers moved into new garrison towns", "Conquest", "People moved in to hold the new land."]
```

Was your guess right? Each kind of effect changed the societies on both sides.

## Worked example: both sides changed

```step
stage: investigate
insight: "Matching each effect to what it changed for each side, then catching Nib's 'only the winner changed', shows effects are many-sided."
tasks:
  - check:
      type: match
      q: "Match each effect to what it changed for the Xiongnu."
      pairs:
        - ["The heqin agreements", "They received silk and food, and their ruler was treated as an equal"]
        - ["The Han conquest of the Hexi Corridor", "They lost grazing land and a route they had controlled"]
        - ["Silk going west along the routes", "Traders in between could grow rich by passing goods on"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about the effects of the Han conquest of the Hexi Corridor. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: effects-on-one-side-only
      explain: "Line 3: Nib says only the winner changed. The Xiongnu lost grazing land and a route, and the Han changed too: new towns, new crops and trade, and wars so costly that Emperor Wu brought in new taxes. Contact changes every society involved, not only the winner."
    smaller:
      check:
        type: question
        q: "The Xiongnu were driven out of the Hexi Corridor, where they had grazed their herds. What changed for them?"
        options:
          - "They lost land their animals needed and a route they had controlled"
          - "Nothing: herders move around anyway, so losing land does not matter"
          - "They gained the Hexi Corridor's farmland for themselves"
          - "They became Han farmers in the new garrison towns"
        answer: 0
        feedback:
          - null
          - "Moving around still needs grazing land. Losing a big piece of it is a real change."
          - "It was the other way round: the Han took the corridor."
          - "The garrison towns were for Han soldiers and settlers."
        explain: "The losing side changes too. That is half of seeing the full effects."
  - check:
      type: question
      q: "Emperor Wu's wars against the Xiongnu were very expensive. What did that change inside Han China?"
      options:
        - "The government ran short of money and brought in new taxes and state control of salt and iron"
        - "Nothing, because the Han won, and winners do not pay for wars"
        - "The Xiongnu paid for the wars, so Han people paid less tax"
        - "The emperor stopped collecting taxes so farmers would join the army"
      answer: 0
      feedback:
        - null
        - "Winning does not make a war free. The Han treasury was drained."
        - "The money came from inside Han China. That is why taxes went up."
        - "Taxes went up, not down. Wars need grain and money."
      explain: "Even the winner changed: costly wars led to new taxes and the salt and iron monopolies you may have met in People and power."
```

### For the Xiongnu

### Find Nib's mistake

### For the Han

## Vary: a peace agreement's effects

```step
stage: modify
insight: "Looking at a peace agreement from both sides shows that a treaty also changes relationships, not only borders."
check:
  type: question
  q: "Under the heqin agreements, the Han sent gifts and the two rulers were treated as equals. What does that tell you about the Han and the Xiongnu at the time?"
  options:
    - "The Han could not beat the Xiongnu, so they paid for peace and accepted them as equals"
    - "The Han were much stronger, so they gave gifts to show off their wealth"
    - "The Xiongnu had been conquered and were paying the Han for protection"
    - "The two societies had no contact at all apart from one wedding"
  answer: 0
  feedback:
    - null
    - "A much stronger side does not usually agree to treat its enemy as an equal. Remember Baideng."
    - "It was the Han sending gifts north, not the other way round."
    - "The agreements went on for decades, with gifts sent again and again."
  explain: "A peace agreement's terms show who was stronger. Here the Han paid, because they could not win by fighting."
```

## Practise: effects and change

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which statement best describes the effects of Han contact with the lands to the west?"
      options:
        - "Conquest, trade and peace agreements each changed the Han and their neighbours"
        - "The Han won, so the effects were all good for the Han and bad for everyone else"
        - "Trade was the only effect, because war does not change anything"
        - "There were no real effects, because the lands were so far away"
      answer: 0
      feedback:
        - null
        - "The Han paid a high price for their wars, and traders in between gained. Effects were mixed on every side."
        - "Conquest changed who held the Hexi Corridor. That is an effect too."
        - "Far away still mattered: silk travelled thousands of kilometres, and new crops reached China."
      explain: "Several kinds of effect, and every society involved changed."
  - check:
      type: sort
      q: "Did each change happen to the Han, or to the Xiongnu?"
      options: ["The Han", "The Xiongnu"]
      items:
        - ["New crops such as grapes and alfalfa were grown", "The Han", "They came east into China."]
        - ["They lost grazing land in the Hexi Corridor", "The Xiongnu", "They were driven out in 121 BCE."]
        - ["New taxes were brought in to pay for wars", "The Han", "Emperor Wu's wars drained the treasury."]
        - ["They received silk and food under the heqin", "The Xiongnu", "The Han sent the gifts north."]
insight: "Practising effects on each side, so 'who changed?' always has more than one answer."
```

### The best description

### Which side changed?

## Make: describe the effects, in your book

```step
stage: make
insight: "Describing two kinds of effect for both sides of one contact or conflict makes the waypoint their own."
check: { type: reflect, text: "In my own book I described two kinds of effect (conquest, trade or a peace agreement) from one contact or conflict (Han China, or the society our class is studying) and explained what each changed for more than one society. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Egypt and the Hittites make peace

```step
stage: make
tier: typical
insight: "ACARA's Egyptian example: a peace treaty after a battle that neither side clearly won."
check:
  type: question
  q: "Egypt and the Hittites fought at Kadesh in about 1274 BCE, and both kings claimed victory. About fifteen years later they agreed a peace treaty: no more attacks, help if the other was attacked, and sending back people who fled from one king to the other. Who did the treaty change? (See the Egypt card on the Reference page.)"
  options:
    - "Both: each side gained a safe border and an ally, and gave up attacking the other"
    - "Only Egypt, because Ramesses II said he won at Kadesh"
    - "Only the Hittites, because they had to send people back"
    - "Neither, because a treaty is only words on a tablet"
  answer: 0
  feedback:
    - null
    - "Both kings claimed victory. The treaty bound both sides the same way."
    - "Both sides agreed to send back people who fled. The terms worked both ways."
    - "Copies were carved in Egypt and kept at the Hittite capital, and the kings later sealed the peace with a marriage."
  explain: "A peace treaty changes both sides' relationship: safer borders, an ally, and rules both agree to keep."
```

## Wider: Rome and Carthage

```step
stage: make
tier: wider
insight: "A long war that ended in conquest shows effects on the winner as well as the conquered."
check:
  type: question
  q: "Rome and Carthage fought three wars between 264 and 146 BCE. Rome won the first and took Sicily; at the end of the third, Carthage was destroyed. What is the best description of the effects? (See the Rome card.)"
  options:
    - "Carthage lost everything, and Rome became the top power in the western Mediterranean"
    - "Only Carthage changed, because Rome stayed exactly the same as it was before"
    - "Only Rome changed, because the people of Carthage simply moved somewhere else"
    - "Nothing much changed, because the wars were spread out over more than a century"
  answer: 0
  feedback:
    - null
    - "Rome changed a great deal: new lands overseas and power across the western Mediterranean."
    - "Carthage did not move away. The city was destroyed and its people were enslaved."
    - "A long war can bring the biggest changes of all. Look at the map before and after."
  explain: "Conquest changed both sides: the conquered lost everything, and the conqueror grew into a different kind of power."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
