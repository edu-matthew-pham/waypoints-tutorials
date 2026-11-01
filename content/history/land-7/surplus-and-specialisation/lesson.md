---
order: 2
unit: surplus
title: From farming to cities
node: AC9HH7K09 n2
summary: "Explain how fertile land and water control let farmers grow a surplus (more food than their own families needed), and how that surplus fed people who did not farm, such as craftworkers, officials and soldiers. This is one way historians explain how cities and governments grew, and it starts with farming that came thousands of years before the first emperors."
language: maths
hook: "A bronze-maker spends all day at a hot furnace. A tax official spends all day counting. Neither grows a single grain of millet. So who feeds them?"
---
Farming in northern China is very old. Archaeologists have found millet grown along the middle Yellow River about 7,800 years ago. The Qin did not unite China until 221 BCE, more than 5,000 years later.

A **surplus** is food left over after the farming families have eaten what they need. Historians often explain how ancient cities grew like this:

1. Good soil and water let farmers grow crops most years.
2. Some years they grow **more than their own families need**: a surplus.
3. The surplus can be stored, traded, or paid to the government as **grain tax**.
4. Stored grain feeds people who do **not** farm: craftworkers, officials, soldiers and scholars.
5. With more of those people, towns grow into cities, and governments grow too.

It is one way of explaining it, not the only one, and each link needs evidence. But it helps explain why farming land mattered so much.

Here is a grain record for **a made-up Qin farming village** (the village and the numbers are made up for this lesson):

| This year | Sacks of grain |
|---|---|
| Harvested by all the village's farms | 600 |
| Eaten by the farming families | 400 |
| Paid to the government as grain tax | 100 |
| Stored in the village granary | 100 |

## Predict: who feeds the bronze-maker?

```step
stage: predict
insight: "Committing first shows whether students connect non-farming jobs to food grown by someone else."
check:
  type: predict
  q: "The bronze-maker in the hook never farms. Where does their food most likely come from?"
  options:
    - "Grain that farmers grew beyond what their own families needed"
    - "The bronze-maker hunts in the evenings after work"
    - "Nobody: craftworkers ate very little"
    - "The emperor grew it in his own fields"
  actual: "Grain grown beyond what farm families needed: a surplus, traded or collected as tax. That is what let some people do jobs other than farming."
```

## Try: find the surplus

```step
stage: run
insight: "Working out the surplus from the village record makes the word a number students can see."
check:
  type: number
  q: "In the made-up village's record, how many sacks of grain were grown beyond what the farming families ate?"
  answer: 200
  feedback:
    - [600, "That is the whole harvest. Take away what the families ate."]
    - [400, "That is what the families ate. The surplus is what was left over."]
    - [100, "That is only the tax, or only the stored grain. Both came out of the surplus."]
  explain: "600 − 400 = 200 sacks. Half went to the government as tax and half stayed in the village granary."
```

Back to the bronze-maker. Grain that the farming families did not need, like these 200 sacks, is what fed everyone else.

## Worked example: from soil to cities

```step
stage: investigate
insight: "Linking each step in the chain, then fixing Nib's backwards order, gives students the causal chain the next lens (roles and groups) depends on."
tasks:
  - check:
      type: match
      q: "Match each step in one way historians explain the growth of cities to what it leads to."
      pairs:
        - ["Fertile soil and river water", "Crops grow well in most years"]
        - ["Dykes and canals to control water", "Harvests are more reliable, with less damage from floods and drought"]
        - ["More grain than farm families need", "A surplus to store, trade or pay as tax"]
        - ["Stored and taxed grain", "Food for craftworkers, officials and soldiers who do not farm"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining where cities came from. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: states-before-farming
      explain: "Line 3: Nib has the order backwards. People were farming along the Yellow River thousands of years before any emperor. Cities, armies and officials needed a farming surplus to feed them, so the farming had to come first."
    smaller:
      check:
        type: question
        q: "Before there could be thousands of full-time soldiers, what had to exist?"
        options:
          - "Farmers growing enough extra grain to feed them"
          - "An emperor to give the orders and pay them"
          - "Walls and forts for the soldiers to guard"
          - "Bronze weapons and armour for every soldier"
        answer: 0
        feedback:
          - null
          - "An emperor can give orders, but orders do not feed an army. Someone must grow the food."
          - "Walls need guarding, but soldiers still need feeding every day."
          - "Weapons matter, but soldiers who do not farm still need someone else's grain."
        explain: "People who do not farm can only exist if others grow more than they need."
  - check:
      type: question
      q: "What does the 200-sack surplus in the village record mean?"
      options:
        - "Food beyond what the families needed, to store or tax to feed others"
        - "Every farmer in the village was now rich, with grain to spare"
        - "Spare grain that nobody needed, so the village threw it away"
        - "The whole harvest that the village grew and stored that year"
      answer: 0
      feedback:
        - null
        - "Half went to the government as tax. A surplus does not mean each farmer kept it all."
        - "Surplus grain was valuable: it fed officials, soldiers and workers, or was kept for bad years."
        - "The whole harvest was 600 sacks. The surplus is only what was left after the families ate."
      explain: "A surplus is extra food. Its value is what it lets happen: storage for bad years, and food for people who do not farm."
```

### The chain

### Find Nib's mistake

Read Nib's explanation. Which line gets the order backwards?

### What surplus means

## Vary: taming a river

The state of Qin built the **Dujiangyan** water system around 256 BCE, on the Min River in what is now Sichuan. It split the river to control floods and sent water out to the fields of the Chengdu Plain. It is still in use today, and UNESCO lists it as World Heritage.

```step
stage: modify
insight: "A real water project shows that fertile land was not automatic: people worked to make harvests reliable."
check:
  type: question
  q: "How does the Dujiangyan water system fit the chain from farming to cities?"
  options:
    - "Reliable water and flood control gave steadier harvests and a bigger surplus"
    - "It shows that good soil always produces a surplus without any work"
    - "It was built to carry soldiers by boat, so it has nothing to do with farming"
    - "It made every farmer on the plain rich, so nobody needed to pay tax"
  answer: 0
  feedback:
    - null
    - "If good soil were enough, nobody would build dykes and channels. Floods and dry years were real risks."
    - "UNESCO describes it as controlling floods and watering fields. That is about farming."
    - "Bigger harvests meant more surplus, and governments collected some of it as tax."
  explain: "Water control turned good land into reliable land. Reliable harvests meant a dependable surplus."
```

## Practise: who grows the food?

```step
stage: practise
tasks:
  - check:
      type: sort
      q: "Sort each person in Qin or Han China by where their food mainly came from."
      options: ["Grew their own food", "Fed by the surplus"]
      items:
        - ["A millet farmer on the North China Plain", "Grew their own food", "Farmers grew food for their families, and paid some as tax."]
        - ["A bronze-caster in a city workshop", "Fed by the surplus", "Spends the day making things, not growing food."]
        - ["A tax official counting grain", "Fed by the surplus", "Counting grain is not growing it."]
        - ["A soldier guarding the northern frontier", "Fed by the surplus", "Soldiers were fed from grain others grew."]
        - ["A scribe copying laws onto bamboo slips", "Fed by the surplus", "Writing is a full-time job that needs someone else's food."]
  - check:
      type: question
      q: "The Yellow River's floods sometimes wiped out a whole year's crops. What does that tell you about fertile land?"
      options:
        - "Good soil helped, but harvests could fail, so people stored grain"
        - "Good soil meant every harvest was large, whatever the weather"
        - "Floods only ever helped, because they brought fresh soil"
        - "Floods meant nobody could farm near the river at all"
      answer: 0
      feedback:
        - null
        - "Floods and droughts could ruin a year's crop even on rich soil."
        - "Floods did spread fresh soil, but a big flood could also destroy crops and villages."
        - "People did farm near the river for thousands of years. They managed the risk."
      explain: "Rich land came with risks. Granaries and water works were how people dealt with bad years."
insight: "Applying the chain to people and to bad years checks that surplus means food that feeds others and protects against failure."
```

### Who grows the food?

### When the river floods

## Make: the chain in your book

```step
stage: make
insight: "Writing the chain for a society in their own words, with one piece of evidence, makes the causal link their own."
check: { type: reflect, text: "In my own book I wrote, in my own words, how the land helped farmers grow a surplus and who that surplus fed, for ancient China or the society our class is studying. I named one piece of evidence (a water project, a granary, a grain record). A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Rome's fertile valleys

```step
stage: make
tier: typical
insight: "ACARA's own Roman example shows the same chain: fertile soil, surplus, and trade."
check:
  type: question
  q: "The plains around the Tiber and Po rivers in Italy had fertile soil. What could a farming surplus there make possible? (See the Rome card on the Reference page.)"
  options:
    - "Grain and other produce to trade and to feed people in growing towns"
    - "Nothing, because a surplus is food that goes to waste"
    - "Only more farmers, because surplus food can only feed farmers"
    - "An end to farming, because people had enough food forever"
  answer: 0
  feedback:
    - null
    - "A surplus is valuable: it can be stored, traded or used to feed others."
    - "The point of a surplus is that it can feed people who are not farming."
    - "A surplus is for one season or a few years. Farming still has to go on."
  explain: "As in China, a surplus can be traded and can feed people in towns who do other work."
```

## Wider: when harvests fail

```step
stage: make
tier: wider
insight: "Thinking about the chain in reverse shows how much the non-farming groups depended on the land."
check:
  type: question
  q: "Imagine floods ruin the harvest in a region for three years in a row, and the granaries run low. Who is likely to be affected, and why?"
  options:
    - "Everyone who ate farmers' grain, including officials and soldiers"
    - "Mainly the farmers, since they are the ones who grow the grain"
    - "Nobody much, because cities could make their own food"
    - "Only the emperor, because all the tax grain belonged to him"
  answer: 0
  feedback:
    - null
    - "That forgets who else ate the grain. Officials, soldiers and craftworkers ate grain too, and they did not grow it."
    - "Cities depended on grain grown in the countryside."
    - "Tax grain fed soldiers, officials and workers, not just the ruler."
  explain: "The surplus held the whole system up. When it shrank, people far from the fields felt it."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
