---
order: 4
unit: water-australia
title: "Making water last"
node: AC9HG7K02 n4
shape: primer
summary: "Strategies try to make water last. Some bring in more water (desalination, stormwater harvesting, moving water from another region), recycling lets the same water be used again, and some cut how much is used. This lesson explains how each works, how to match a strategy to the cause of a shortage, and why water is hard to manage when many users share it and supply changes."
language: maths
hook: "A coastal city gets part of its water from the sea. Should an inland farming district do the same?"
---
A **sustainable** water supply is one that can keep meeting people's needs without running the source down. A **strategy** is a planned way of getting there. To **diagnose** a shortage is to work out what is causing it, so you can choose a strategy that fits. Each strategy works in its own way:

- **Desalination**: removing the salt from seawater, or from salty water pumped up from underground. It needs a supply of salty water, a plant to build and energy to run.
- **Stormwater harvesting**: collecting rain that runs off roofs, roads and drains, and storing it to use.
- **Recycling grey water**: reusing water from showers, basins and washing machines, for example on gardens.
- **Inter-regional transfer**: moving water by pipe or channel from one region to another.
- **Reducing water use**: using less, for example with water-saving fittings or limits on watering.

Two made-up places:

- **Mellick Bay**, a coastal town. Its population is growing, and in dry years its dam runs low.
- **The farms around Drybank**, the same made-up inland town from lesson 2, far from the sea. Little rain falls for long periods.

## Think first: one fix for both?

```step
stage: predict
insight: "Commit to an answer before checking whether a strategy suits a place's geography and cause."
check:
  type: predict
  q: "Perth gets part of its water from desalination plants (Water Corporation). Should the farms around made-up Drybank, far inland, build one too?"
  options:
    - "Not without checking first: a plant needs salty water nearby, money to build and energy to run"
    - "Yes, because a strategy that works well in Perth will work just as well anywhere"
    - "Yes, because a desalination plant gives a place all the water it could ever want"
    - "No, because desalination only ever works for big cities with lots of money"
  actual: "A strategy has to fit the place and the cause. Desalination needs salty water nearby (the sea, or salty groundwater), a plant and energy. For inland farms far from the sea, other strategies may fit better. That is a judgement to argue, not a rule."
```

## Try: how each one works

```step
stage: run
insight: "Before choosing a strategy, know how it works."
check:
  type: match
  q: "Match each strategy to how it works."
  pairs:
    - - "Desalination"
      - "Removes salt from sea or salty water"
    - - "Stormwater harvesting"
      - "Collects and stores rain that runs off hard surfaces"
    - - "Recycling grey water"
      - "Reuses water from showers and washing"
    - - "Inter-regional transfer"
      - "Moves water from one region to another"
    - - "Reducing water use"
      - "Lowers how much people take"
  explain: "Some bring in more water, recycling lets the same water be used again, and reducing use cuts how much is taken."
```

## The idea: fit the strategy to the cause

```step
stage: investigate
insight: "A strategy works when it targets the diagnosed cause and suits the place."
tasks:
  - check:
      type: question
      q: "Made-up Mellick Bay runs short in dry years and is on the coast. Which strategy uses its location?"
      options:
        - "Desalination, because seawater is close by"
        - "Recycling grey water, because it needs the sea"
        - "Inter-regional transfer, because it only works on the coast"
        - "Building a bigger dam, because more storage always fixes dry years"
      answer: 0
      feedback:
        - null
        - "Grey water comes from showers and washing, not the sea."
        - "A transfer moves water between regions, coast or not."
        - "A bigger dam still needs rain to fill it. Which strategy uses the sea?"
      explain: "Desalination depends on the sea, which Mellick Bay has. It is not the only option: using less or collecting stormwater could also help."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is planning for the farms around Drybank. Click the first line where Nib's thinking goes wrong."
      answer: 2
      fault: logic
      misconception: one-water-solution-fits-all
      explain: "Line 2: Perth is on the coast, with seawater close by. The farms around Drybank are far inland: they would need salty groundwater, a plant and energy, and other strategies may fit better. Copying a strategy without checking the place and the cause can give a poor fit, and line 3 forgets the cost too."
    smaller:
      check:
        type: question
        q: "A made-up town's dam is fine, but people use far more water each year. Which strategy targets that cause?"
        options: ["Reducing water use", "Building a bigger dam"]
        answer: 0
        feedback: [null, "The dam is not the problem. The amount being used is."]
        explain: "When the cause is how much is used, a strategy that lowers use targets it directly."
    hint:
      - "Line 1 is about Perth."
      - "Find the line that copies Perth's strategy without checking the new place."
      - "What does a desalination plant need nearby?"
```

### Fit the strategy

```worked
\text{Name the cause} :: Is the water short (physical), not delivered (economic), or over-used?
\text{Know how the strategy works} :: Desalination needs salty water nearby; transfer needs a region with water to spare; reducing use lowers demand.
\text{Check the place} :: Coast or inland? Who else uses the water? Does supply change year to year?
\text{Name a trade-off} :: Cost to build and run, energy, and who might get less.
```

### Find Nib's slip

## Vary: why water is hard to manage

```step
stage: modify
insight: "Shared uses and a supply that changes make water hard to manage."
tasks:
  - check:
      type: question
      q: "Made-up farms, a town and a wetland all use the same river. Why is this hard to manage?"
      options:
        - "Taking water for one use leaves less for others, and the flow changes each year"
        - "It is easy: give each user the same amount every year, whatever the rain does"
        - "It is not hard: each user can take as much as it wants, because rivers refill"
        - "Only the farms and the town count, because they are the ones who pay for water"
      answer: 0
      feedback:
        - null
        - "That forgets that the flow changes. In a dry year the same shares may not exist."
        - "That treats the river as endless. If everyone takes what they want, it can run low."
        - "That leaves out the wetland, which needs water too, whether or not it pays."
      explain: "Shared and competing uses, and a supply that varies, are why sustainable management is difficult."
  - check:
      type: question
      q: "Made-up Mellick Bay plans to pipe water from a nearby river region. What should it check first?"
      options:
        - "Whether that region has water to spare, and who there would get less"
        - "Only how long the pipe will be and how much it will cost to build"
        - "Nothing, because moving water from one place to another creates more water"
        - "Only whether Mellick Bay needs the water, since it is the town paying"
      answer: 0
      feedback:
        - null
        - "Length affects cost, but the bigger question is the water at the other end."
        - "A transfer moves water. It takes it from somewhere else."
        - "Mellick Bay's need is half the question. What about the region the water comes from?"
      explain: "A transfer helps one place by taking water from another. Check both ends."
```

### Many users, one river

### Two ends of a pipe

## Check: strategies and their limits

```step
stage: practise
insight: "Each strategy has limits. Name them alongside the benefit."
tasks:
  - check:
      type: question
      q: "Which statement about recycling grey water is accurate?"
      options:
        - "It lets the same water be used again for some jobs, but makes no new water"
        - "It creates a new, unlimited supply of water, so a town can never run short"
        - "Grey water is safe to drink and use for anything, with no treatment needed"
        - "Recycling grey water costs nothing to set up or to run"
      answer: 0
      feedback:
        - null
        - "Recycling reuses water that was already supplied. It does not add new water."
        - "Grey water is suited to some jobs, such as gardens. Not every use."
        - "Recycling needs pipes, tanks and sometimes treatment, so it has costs."
      explain: "Recycling stretches the water a place already has."
  - check:
      type: question
      q: "Someone says building new supply always beats using less. What is the best reply?"
      options:
        - "It depends on the cause: if a place uses too much, using less targets it"
        - "They are right: using less never makes a real difference to a water shortage"
        - "Using less always beats building new supply, in every place and for every cause"
        - "Neither matters much, because rivers and dams always refill after a dry spell"
      answer: 0
      feedback:
        - null
        - "If over-use is the cause, using less targets it."
        - "That is the same mistake the other way round. It depends on the cause and the place."
        - "Water can run short, as the earlier lessons showed."
      explain: "No single approach suits every place. Match the strategy to the cause."
```

### What recycling can do

### New supply or using less?

## Apply: choose and justify

```step
stage: make
insight: "Explaining how a strategy targets a cause, with a trade-off, is the waypoint. More than one choice can be right."
check: { type: reflect, text: "In my own book I chose a strategy for made-up Mellick Bay or the farms around Drybank, named the cause it targets, explained how it works, and gave one trade-off and one reason water there is hard to manage. A partner gave feedback." }
```

There is more than one defensible answer. A good answer names the cause, says how the strategy works on it, and is honest about its costs. Write it in your own book or document, not on this page.

## Typical: compare two strategies

```step
stage: make
tier: typical
insight: "Comparing two strategies on the same criteria makes the trade-offs visible."
check: { type: reflect, text: "In my book I made a small table comparing two strategies for one made-up place on four points: how well it targets the cause, cost, effect on the environment, and who gains or gets less. I said which I would choose and why, and what would change my mind." }
```

## Wider: when would the choice change?

```step
stage: make
tier: wider
insight: "Conditions change which strategy suits best."
check: { type: reflect, text: "With a partner I compared building new supply (such as desalination) with reducing water use, and described one set of conditions where each would be the better choice." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
