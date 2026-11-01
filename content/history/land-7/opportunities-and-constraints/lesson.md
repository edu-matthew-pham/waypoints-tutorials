---
order: 3
unit: limits
title: Help and limits
node: AC9HH7K09 n3
summary: "Explain how the physical environment shaped where people in ancient China settled, how they traded and what they became, by weighing opportunities and constraints together. The same feature can do both, and people changed their land in response, so geography helps explain a society without deciding everything about it."
language: maths
hook: "The Yellow River fed millions of people. It also drowned whole villages when it burst its banks. So was it a gift or a curse?"
---
The last two lessons showed what the land **gave** people. But the same feature can also **hold them back**.

- An **opportunity** is something the environment makes possible: farming, travel, trade, protection.
- A **constraint** is something it makes hard: floods, distance, mountains to cross, land too dry to farm.

People did not just accept what the land gave them. They changed it: dykes, canals, walls and roads. So to explain a society, historians look at the land **and** at what people did about it.

> **The Yellow River.** Its floods spread fresh, fertile soil over the North China Plain. But a big flood could destroy crops and villages, and over the centuries the river has changed its course many times. People built dykes along its banks again and again. In English it is sometimes called "China's Sorrow" because of its floods.

> **The mountains and deserts of the west.** They protected the heartland from attack from the west. They also made overland travel to the west slow and hard, so traffic was squeezed into narrow routes such as the **Hexi Corridor**, between the mountains and the desert.

> **The Lingqu Canal.** Built on the First Emperor's orders and finished in 214 BCE, it joined two rivers (the Xiang and the Li) across a range of hills in the south. Boats could now carry grain and soldiers between the Yangtze and rivers further south. People made it; it is not a natural feature.

## Predict: gift or curse?

```step
stage: predict
insight: "Committing first shows whether students see a feature as only good, only bad, or both."
check:
  type: predict
  q: "Was the Yellow River mainly a help or a problem for the people who lived along it?"
  options: ["Both: it fed them and it flooded them", "A help: rivers only bring good things", "A problem: floods made it useless", "Neither: rivers did not matter"]
  actual: "Both. Its silt fed farms, and its floods destroyed them. Most features of the land worked both ways."
```

## Try: opportunity or constraint?

```step
stage: run
insight: "Sorting statements about the same features shows that one feature can sit on both sides."
check:
  type: sort
  q: "Sort each statement about the land of ancient China: is it an opportunity or a constraint?"
  options: ["Opportunity", "Constraint"]
  items:
    - ["The Yellow River's floods spread fresh soil over the fields", "Opportunity", "Fresh soil helped crops grow."]
    - ["The Yellow River's floods washed away villages and crops", "Constraint", "Same river, but this time it destroyed things."]
    - ["Mountains in the west kept many attackers away", "Opportunity", "Protection is something the land made possible."]
    - ["Mountains in the west made trade with the west slow and hard", "Constraint", "Same mountains, but this time they got in the way."]
    - ["Rivers carried boats loaded with grain", "Opportunity", "Rivers made transport easier."]
    - ["Dry land in the north-west was too dry for farming villages", "Constraint", "Not enough water for crops."]
```

Was your guess right? Notice that the river and the mountains each appear twice: once as an opportunity and once as a constraint.

## Worked example: the land and what people did

```step
stage: investigate
insight: "Separating natural features from human changes, and catching Nib's 'geography decided everything', gives students a balanced explanation."
tasks:
  - check:
      type: question
      q: "Is the Lingqu Canal a natural feature of the land?"
      options:
        - "No: people dug it to join two rivers through a barrier of hills"
        - "Yes: it carries water like a river, so it is part of the landscape"
        - "Yes: it was there before the Qin, and they just made use of it"
        - "No: it is a road over the hills, not a waterway"
      answer: 0
      feedback:
        - null
        - "It carries water like a river, but people dug it. That makes it a human change."
        - "The card says it was finished in 214 BCE, on the First Emperor's orders."
        - "Boats used it, so it is a waterway. The key point is that people made it."
      explain: "The canal is a human response to a constraint: hills that blocked river travel between north and south."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing a draft paragraph (made up for this lesson). Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: geography-decides-everything
      explain: "Line 3: Nib says geography decided everything. The land set opportunities and limits, but people responded: they built dykes against floods and canals across hills. Their choices changed what the land made possible."
    smaller:
      check:
        type: question
        q: "Hills blocked boats between the Yangtze and the rivers further south. Then the Lingqu Canal was dug. What does that show?"
        options:
          - "People changed the land to get around a limit"
          - "The hills were never really a barrier"
          - "Geography decided where boats could go, and nothing could change it"
          - "The canal was a natural river all along"
        answer: 0
        feedback:
          - null
          - "Boats could not cross them before the canal. That is a barrier."
          - "The canal changed where boats could go. People's choices mattered too."
          - "The card says it was built and finished in 214 BCE."
        explain: "The land set a limit, and people worked around it. Both are part of the explanation."
  - check:
      type: question
      q: "Did the mountains and deserts of the west cut ancient China off from other societies?"
      options:
        - "No: they made contact harder, but people still crossed by narrow routes"
        - "Yes: no one ever crossed them, so China had no contact with the west"
        - "No: they were easy to cross, so they made no real difference"
        - "Yes: deserts and mountains always stop trade, wherever they are"
      answer: 0
      feedback:
        - null
        - "Goods and travellers did cross, along a few routes. A barrier slows contact; it rarely stops it."
        - "They were hard to cross, which is why travel used a few narrow routes."
        - "Traders crossed deserts with camels and water stops. It was hard, not impossible."
      explain: "Barriers shape where and how contact happens, through narrow routes such as the Hexi Corridor. They rarely stop it altogether."
```

### Natural or human-made?

### Find Nib's mistake

Read Nib's draft paragraph. Which line leaves out what people did?

### Cut off?

## Vary: a route to the west

In the Han period, in the 2nd century BCE, an official named **Zhang Qian** was sent west on a mission to the lands of Central Asia. Routes through the Hexi Corridor became part of the long trade routes later called the **Silk Roads**, which UNESCO lists as World Heritage.

```step
stage: modify
insight: "A real route shows a constraint and an opportunity working together: the land narrowed the route, and people used it."
check:
  type: question
  q: "How did geography shape the route west through the Hexi Corridor?"
  options:
    - "Mountains and desert squeezed travellers into a narrow strip with water"
    - "The corridor was a wide, empty plain, so travellers went any way they liked"
    - "The Han built the corridor by digging a way through the mountains"
    - "Travellers went this way because it was shorter than going by sea"
  answer: 0
  feedback:
    - null
    - "Look at the map: it is a narrow strip between the high land and the desert."
    - "The corridor is a natural strip of land. People built forts and posts along it, but they did not dig it."
    - "The route ran overland, far from the sea. The land itself, not a comparison with the sea, shaped the path."
  explain: "The land made a narrow path possible and blocked the rest. People made the most of that path."
```

## Practise: both sides of one feature

```step
stage: practise
insight: "Matching each feature to both its opportunity and its constraint checks the balanced view on its own."
check:
  type: match
  q: "Match each feature of ancient China's land to what it made possible and what it made hard."
  pairs:
    - ["Yellow River", "Fertile soil for farms, but deadly floods"]
    - ["Mountains in the west", "Protection from attack, but slow trade with the west"]
    - ["Hexi Corridor", "A route to the west, but only a narrow one"]
    - ["Northern steppe", "Grazing land for herders, but too dry for farming villages"]
```

## Make: a balanced paragraph in your book

```step
stage: make
insight: "Writing one feature's opportunity, constraint and the human response in their own book makes the balanced explanation theirs."
check: { type: reflect, text: "In my own book I chose one feature of the land (in ancient China, or the society our class is studying) and wrote a paragraph with an opportunity it gave, a constraint it set, and one thing people did in response. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: the sea and the mountains of Greece

```step
stage: make
tier: typical
insight: "The same balance works for a society where the sea, not a river, was the main opportunity."
check:
  type: question
  q: "For the ancient Greeks, which pair is an opportunity and a constraint from the same geography? (See the Greece card on the Reference page.)"
  options:
    - "The sea made boat travel easy, but mountains left little flat farmland"
    - "The mountains gave lots of flat farmland, and the sea stopped all trade"
    - "The sea and the mountains were both just opportunities for Greeks"
    - "Greece had no constraints at all because it had a warm climate"
  answer: 0
  feedback:
    - null
    - "Mountains mean less flat land, not more. And the sea carried trade."
    - "Mountains made farming and land travel harder. That is a constraint."
    - "A warm climate helps, but there were still limits, such as little farmland."
  explain: "Like China, Greece's land gave and took. The Greeks used the sea to make up for what the mountains did not give."
```

## Wider: the Himalayas and India

```step
stage: make
tier: wider
insight: "ACARA's own Indian example shows how a great barrier shapes contact without stopping it."
check:
  type: question
  q: "The Himalayas run along the north of the Indian subcontinent. How did they shape contact with other societies? (See the India card.)"
  options:
    - "They blocked most northern travel, so people used north-west passes"
    - "They had no effect, because people could walk over them quite easily"
    - "They cut India off completely, so there was no trade with anyone"
    - "They made the north the busiest and easiest trade route into India"
  answer: 0
  feedback:
    - null
    - "They are the highest mountains in the world. Crossing them was very hard."
    - "Trade and contact still happened, through passes and by sea."
    - "The high mountains in the north made that the hardest way in, not the busiest."
  explain: "A great barrier shapes where contact happens. The passes in the north-west mattered because the rest of the north was so hard to cross."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
