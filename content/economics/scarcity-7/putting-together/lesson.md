---
order: 4
unit: choice
title: Putting it together - scarcity, choice and the future
node: AC9HE7K01 n4
summary: "Unlimited wants meet limited resources, which is scarcity. Scarcity forces choices about what, how and for whom, and every choice has an opportunity cost. Using resources now also affects what is left for later, so a good choice thinks about sustainability. This lesson links the four ideas into one chain and applies it to a made-up council decision."
language: maths
hook: "A council has $2 million. People want a water recycling plant, a skate park and longer library hours. It can afford one. How should it decide, and who pays the cost?"
---
You have met needs and wants, scarcity and opportunity cost. This lesson puts them in one chain and uses it on a real-sounding decision.

Choosing well also means thinking ahead. A resource used up now is not there later, so we ask whether a choice is **sustainable**: does it leave enough for the future?

## Predict: the chain

```step
stage: predict
insight: "Committing to an order first shows which ideas students think come first."
check:
  type: predict
  q: "Which comes first in the chain: scarcity, wants, or opportunity cost?"
  options: ["Wants (they never run out)", "Scarcity", "Opportunity cost", "Choices"]
  actual: "Wants. Unlimited wants meet limited resources and that is scarcity. Scarcity forces choices, and each choice has an opportunity cost."
```

## Try: order the chain

```step
stage: run
insight: "Putting the ideas in order makes the links usable rather than a list of words."
check:
  type: parsons
  code: "chain.txt#order"
  text: "Put the chain in order, from the start to the opportunity cost."
```

Each line follows from the one before. If you take one away, the next one stops making sense.

## Worked example: the council's $2 million

```step
stage: investigate
insight: "Applying the chain to one decision shows how each idea does a job."
tasks:
  - check:
      type: question
      q: "The council can afford a water recycling plant, a skate park or longer library hours. It picks the plant. What makes this a choice at all?"
      options: ["Scarcity: there is $2 million and not enough for all three", "The council is greedy", "Nobody wants the others", "The plant is the cheapest"]
      answer: 0
      feedback: [null, "Wanting all three is normal. The limit on money is what forces the choice.", "People do want them, and that is why it is hard.", "Price is not the reason. The limit is."]
      explain: "There are three wants and one budget, so the council has to choose."
  - check:
      type: question
      q: "The council ranks them: plant, then library hours, then skate park. It picks the plant. What is the opportunity cost?"
      options: ["Longer library hours", "The skate park", "The $2 million", "All the others"]
      answer: 0
      feedback: [null, "That was third. The next best was library hours.", "That is the budget, not what was given up.", "Only the next best counts."]
      explain: "Library hours were the next best option, so they are the opportunity cost."
  - check:
      type: question
      q: "Which is a sustainability reason to pick the plant?"
      options: ["It reuses water, so there is more left for the future", "It costs the most", "More people like it", "It is built quickly"]
      answer: 0
      feedback: [null, "Cost is not sustainability.", "Popularity may matter, but it is not about the future.", "Speed is not about what is left."]
      explain: "Sustainability asks whether the resource will still be there later. Recycling water helps with that."
```

### Why a choice at all

### What the council gives up

### Looking ahead

## Vary: costs and benefits

```step
stage: modify
insight: "Weighing financial and non-financial costs and benefits shows what each choice really involves."
tasks:
  - check:
      type: sort
      q: "For the council choosing the water plant, is each thing a cost or a benefit?"
      options: ["Cost", "Benefit"]
      items:
        - ["Less money for other projects", "Cost", "Money spent on the plant is gone."]
        - ["Water for the future", "Benefit", "The plant helps water last."]
        - ["Library hours stay short", "Cost", "That is the opportunity cost."]
        - ["Fewer water restrictions in dry years", "Benefit", "People can use more water."]
  - check:
      type: sort
      q: "Is each of these a financial or non-financial cost or benefit?"
      options: ["Financial", "Non-financial"]
      items:
        - ["The $2 million budget", "Financial", "It is money."]
        - ["Young people with no skate park", "Non-financial", "It affects people, not the budget."]
        - ["Water bills fall", "Financial", "It is money."]
        - ["A cleaner river", "Non-financial", "It is about the environment."]
```

### Costs and benefits

### Money or not

## Practise: judge a choice

```step
stage: practise
insight: "Explaining one decision with the whole chain is the point of the lesson."
check:
  type: reasoning
  q: "A town can use its last block of land for a clinic or a car park. It picks the clinic. Use the chain: say why it had to choose, what the opportunity cost is, and one sustainability point."
  paper: true
  models:
    - title: "A strong answer"
      text: "It had to choose because wants are larger than the one block, which is scarcity. The opportunity cost is the car park, the next best use. A sustainability point: a clinic keeps people well for the long term, but building uses up the last land."
    - title: "A different choice that also works"
      text: "Scarcity means only one can fit. The opportunity cost is the clinic if they pick the car park, since it was ranked first. A sustainability point: the car park may cause more traffic and pollution for years."
  criteria: ["I said why a choice was needed.", "I named one alternative as the opportunity cost.", "I gave one point about the future."]
```

## Make: your own decision

```step
stage: make
insight: "Using the chain on a decision you care about is how it becomes yours."
check: { type: reflect, text: "In my own book I described a decision at school or in my town, and used scarcity, opportunity cost and one sustainability point to explain it. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: into the future

```step
stage: make
tier: typical
insight: "Judging a choice by its future shows why sustainability matters."
check:
  type: question
  q: "A fishing town catches as many fish as it can this year. What is the best sustainability concern?"
  options: ["There may be fewer fish next year", "The boats cost money", "Fish are cheap", "People like fish"]
  answer: 0
  feedback: [null, "Cost is a financial point, not a future one.", "Price does not show what is left.", "Liking fish is a want."]
  explain: "Using a resource faster than it recovers leaves less for later."
```

## Wider: a shared resource

```step
stage: make
tier: wider
insight: "When many people share one resource, each person's choice affects all of them."
check: { type: reflect, text: "I thought about a shared resource such as groundwater, where everyone using a little too much leaves too little for all, and said who should decide how much each takes." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
