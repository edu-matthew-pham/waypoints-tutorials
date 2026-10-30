---
order: 3
unit: water
title: Good for some, bad for others
node: AC9HG7K01 n3
summary: Explain an effect of moving water, distinguish benefits and harms, and use environmental, economic
  and social lenses.
language: maths
hook: If water is moved to help one place, does every connected place benefit?
---
Moving water can have **environmental effects** on habitats, plants, animals and water quality; **economic effects** on production, jobs and income; and **social effects** on daily life, access and recreation. An **effect** says what changes because water moves. “The channel is long” is a description, not an effect.

These categories are lenses. A change can fit more than one; explain which part you mean.

## Predict: who benefits?

```step
stage: predict
insight: Question whether a helpful connection helps everyone.
check:
  type: predict
  q: In a made-up valley, a channel takes water to crops but leaves less flowing to a wetland. What is most
    likely?
  options:
    - It can help farmers and harm wetland habitat
    - Every connected place must benefit equally
    - The water cannot affect anything outside the farms
    - The channel’s size is the only thing that matters
  actual: One change can help crop production and reduce water reaching wetland habitat. Benefits depend on the
    place or group.
```

## Try: what kind of effect?

```step
stage: run
insight: Sort effects by what changes and reject a non-effect.
check:
  type: sort
  q: In this made-up valley, sort each statement by its main focus.
  options:
    - Environmental
    - Economic
    - Social
    - Description, not an effect
  items:
    - - Less water reaches wetland plants
      - Environmental
      - This focuses on habitat conditions.
    - - Farmers can grow crops for sale
      - Economic
      - This focuses on production and income.
    - - Families lose access to a swimming spot
      - Social
      - This focuses on daily life and recreation.
    - - The channel is long
      - Description, not an effect
      - Length alone does not explain a consequence.
```

## Worked example: the Snowy connection

```step
stage: investigate
insight: Use an Australian example to link movement and consequence.
tasks:
  - check:
      type: question
      q: According to the real-place card, what is one economic effect of the Snowy Scheme’s water movement?
      options:
        - Diverted water supports farmers growing crops for sale
        - Changed river flow alters conditions in the river channel
        - Mountain water moves inland towards other river systems
        - The scheme captures water from mountain rivers and streams
      answer: 0
      feedback:
        - null
        - This focuses on environmental conditions rather than production or income.
        - This describes a pathway without an economic consequence.
        - This describes operation without an economic consequence.
      explain: Diversion inland supplies irrigation that supports crop production.
  - check:
      type: bug
      code: working.txt#nib
      text: Nib explains the case. Click the first line where the reasoning goes wrong.
      answer: 3
      fault: logic
      misconception: water-benefits-everyone
      explain: Line 3 turns one benefit into a benefit for every place. The same diversion can help one place and
        harm another.
    smaller:
      check:
        type: question
        q: A made-up channel sends more water to crops and less to a wetland. Which receives less?
        options:
          - The wetland
          - The crops
        answer: 0
        feedback:
          - null
          - The case says more water reaches the crops.
        explain: Different places can experience different effects from the same movement.
```

### One real change, different effects

```worked
\text{Movement} :: The Snowy Scheme diverts mountain water inland for irrigation.
\text{Consequence} :: Irrigation supplies water to crops.
\text{Effect} :: Supporting crop production is an economic effect.
```

The **Snowy Mountains Scheme** captures mountain water and diverts some inland to the **Murray and Murrumbidgee rivers** for irrigation and electricity generation. Irrigation supplies water to crops.

*Source: [Snowy Scheme (NSW Government, Water)](https://www.water.nsw.gov.au/our-work/projects-and-programs/snowy-scheme), checked 30 October 2026.*

NSW Environment and Heritage describes how diversion reduced flows below **Jindabyne Dam** on the Snowy River and changed the channel. Environmental releases help restore river habitat. This is an environmental consequence alongside the economic uses.

*Source: [Managing water for the environment: Snowy and montane rivers (NSW Environment and Heritage)](https://www.environment.nsw.gov.au/topics/water/water-for-the-environment/catchments/snowy-and-montane/managing), checked 30 October 2026.*

### Find Nib’s slip



## Vary: explain the effect

```step
stage: modify
insight: Separate description from explanation and compare consequences.
tasks:
  - check:
      type: question
      q: Which sentence explains an effect of moving water?
      options:
        - Diversion supplies irrigation, supporting crop production
        - The Snowy Scheme captures mountain water in its storages
        - The Murray and Murrumbidgee are both named river systems
        - The scheme has structures that help it move water inland
      answer: 0
      feedback:
        - null
        - This describes operation; add what changes because of it.
        - Names alone do not explain a consequence.
        - Structures describe how it works; add what changes for a place or group.
      explain: The explanation links movement to production.
  - check:
      type: question
      q: Imagine a made-up town where diversion improves farm supply but leaves a swimming area too shallow. Which
        comparison fits?
      options:
        - Economic benefit for farms; social harm for swimmers
        - Economic benefit for all; social benefit for swimmers
        - Environmental benefit for all; no changes to daily life
        - Social harm for farmers; economic harm for swimmers
      answer: 0
      feedback:
        - null
        - The case says swimmers lose access.
        - A swimming area becoming unusable is a change to daily life.
        - Check the direction and focus of each stated change.
      explain: The same diversion affects groups differently.
```

### Description or effect?



### A made-up contrast



## Practise: cause to consequence

```step
stage: practise
insight: Identify an effect and explain why one benefit does not cancel a harm.
tasks:
  - check:
      type: match
      q: Match the made-up effect to the focus in the sentence.
      pairs:
        - - Floodwater damages nesting habitat
          - Environmental harm
        - - Reliable irrigation raises farm output
          - Economic benefit
        - - Cleaner creek water lets families use a picnic area again
          - Social benefit
      explain: Another category can fit if you explain your focus.
  - check:
      type: question
      q: A made-up channel raises crop output and reduces water reaching a marsh. Which conclusion is supported?
      options:
        - The crop benefit and habitat harm can both be real
        - More crops prove that marsh habitat has improved
        - Marsh damage proves the crops receive no benefit
        - There are no effects because the water still exists
      answer: 0
      feedback:
        - null
        - Production does not prove habitat has improved.
        - An adverse effect does not erase a separate benefit.
        - Where water reaches and what changes there matter.
      explain: Judge each consequence for the affected place or group.
```

### Name the main focus



### Can both be true?



## Make: one effect with a reason

```step
stage: make
insight: Explain one effect type and recognise contrasting consequences.
check:
  type: reflect
  text: In my own book I explained one effect of the Snowy Scheme’s water movement using the card and a because
    link. I named a benefit and an adverse effect of the same movement. A partner or teacher read it.
```

Choose an environmental or economic effect from the cards. Name where water moves and what changes because of it. Add the contrasting benefit or harm. You do not need all three categories to finish. Write in your book, not on this page.

## Typical: three lenses, two cases

```step
stage: make
insight: Widen to all lenses across cases.
check:
  type: reflect
  text: In my book I used all three lenses across the Snowy cards and the made-up farm-and-swimming-town case,
    explaining which groups gain or lose.
tier: typical
```

Use only the stated case details. The made-up case supplies a social effect; do not invent an actual community’s experience of the Snowy Scheme.

## Wider: change the viewpoint

```step
stage: make
insight: Test how the affected group changes the judgement.
check:
  type: reflect
  text: For the made-up diversion I wrote a farmer’s reason for supporting it and a swimmer’s or habitat carer’s
    reason for concern. Each names the water connection.
tier: wider
```

Explain both viewpoints before naming information you would want next.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
