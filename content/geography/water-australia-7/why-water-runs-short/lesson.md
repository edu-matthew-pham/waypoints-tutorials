---
order: 2
unit: water-australia
title: "Why does water run short?"
node: AC9HG7K02 n2
summary: "Water scarcity means not having enough usable water for what people need. This lesson sorts its causes three ways: not enough water in the place (a physical cause), water that is there but cannot reach people because pipes, pumps or treatment are missing (an economic cause), and more water being used than the place can supply. It also explains why the amount of water in a place varies: climate, seasons, evaporation, location and the shape of the land."
language: maths
hook: "A town has a river running right past it, yet its taps keep running dry. How can that be?"
---
**Water scarcity** means people do not have enough usable water for what they need. Geographers often sort its causes three ways. It is a way of sorting, not a law: real places often have more than one cause at once.

- **Physical cause**: there is not enough water in the place. Little rain falls, or water evaporates fast.
- **Economic cause**: the water is there, but people cannot get it because the pipes, pumps, dams or treatment needed have not been built or have broken down.
- **The ways water is used**: more water is taken, by farms, industry or towns, than the place can supply.

**Variability** means how much the amount of water changes from season to season and year to year.

## Predict: a river and dry taps

```step
stage: predict
insight: "Commit to a reason before learning that 'not enough water' has more than one cause."
check:
  type: predict
  q: "Made-up Corrowin has a river beside it all year, but its taps often run dry. What is the most likely reason?"
  options:
    - "The town has no working way to get the river water to its houses"
    - "It must not be raining at Corrowin"
    - "River water can never be used by a town"
    - "Corrowin is too close to the river"
  actual: "The water is there. What is missing is a way to get it, clean, into people's houses: pumps, pipes and treatment. That is an economic cause, not a lack of rain."
```

## Try: sort the causes

```step
stage: run
insight: "Sorting causes three ways shows that 'not enough water' can mean different problems."
check:
  type: sort
  q: "In these made-up cases, what is the main cause of the shortage?"
  options: ["Physical cause", "Economic cause", "The ways water is used"]
  items:
    - ["Very little rain falls for years at a time", "Physical cause", "There is not enough water in the place."]
    - ["Hot sun and wind dry up water stored in open dams", "Physical cause", "Evaporation takes the water away."]
    - ["The town cannot afford to build a plant to clean its river water", "Economic cause", "The water is there, but the town cannot make it fit to use."]
    - ["Old pipes leak and break, so water does not reach the houses", "Economic cause", "The problem is the system that delivers the water."]
    - ["Farms upstream take more water from the river every year", "The ways water is used", "Demand has grown faster than the supply."]
    - ["A new factory uses a large share of the town's water", "The ways water is used", "Another use competes for the same water."]
```

Was your prediction right? "Not enough water" and "not enough rain" are different things.

## Worked example: two dry towns

```step
stage: investigate
insight: "Ask two questions in order: is the water physically there, and can people reliably get usable water?"
tasks:
  - check:
      type: question
      q: "Made-up Drybank has had little rain for three years, and its dam is nearly empty. What kind of cause is this?"
      options:
        - "Physical: there is not enough water in the place"
        - "Economic: the town has the wrong pipes"
        - "The ways water is used: the town uses too much"
        - "No cause: a dam always refills by itself"
      answer: 0
      feedback:
        - null
        - "Pipes cannot deliver water that is not there. Look at the rainfall."
        - "Use could make it worse, but the case says the rain stopped."
        - "A dam refills from rain and runoff, which have stopped."
      explain: "The water itself is missing, so it is a physical cause."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Corrowin. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: scarcity-always-means-no-rain
      explain: "Line 3: the river is there all year, so the water is physically there. The taps run dry because the town cannot get the water to its houses. Nib's fix in line 4, a dam to catch rain, would not help."
    smaller:
      check:
        type: question
        q: "In made-up Corrowin the river is full, but the pump to the houses is broken. What is missing?"
        options: ["A way to get the water to people", "Water in the river"]
        answer: 0
        feedback: [null, "The river is full. Look at what happens between the river and the houses."]
        explain: "The water is there. What is missing is the way to deliver it."
    hint:
      - "Line 1 says where the water is."
      - "Find the line that guesses a cause the case does not support."
      - "Is the river short of water, or are the houses?"
```

### Two questions in order

```worked
\text{Is the water physically there?} :: Drybank, no: little rain for years. That is a physical cause.
\text{Can people reliably get usable water?} :: Corrowin, no: the river is full, but pumps, pipes or treatment are missing. That is an economic cause.
\text{Is more being taken than the place can supply?} :: If farms or a factory take more each year, that is a cause from the ways water is used.
\text{Why it matters} :: Each cause needs a different fix. A dam does not help Corrowin; new pipes do not help Drybank.
```

### Find Nib's slip

## Vary: why the amount changes

```step
stage: modify
insight: "Variability factors explain why the amount of water in a place changes, and each works in its own way."
tasks:
  - check:
      type: match
      q: "Match each factor to how it changes the water in a place."
      pairs:
        - - "Seasonality"
          - "Most rain falls in one part of the year, so rivers run high then low"
        - - "Evaporation"
          - "Heat and wind turn stored water into vapour"
        - - "Topography"
          - "The shape of the land decides where water runs and collects"
        - - "Location"
          - "Inland places usually get less rain than coastal ones"
      explain: "Each factor changes how much water there is, or when. Name the factor and say how it works."
  - check:
      type: question
      q: "In northern Australia almost all rain falls in the wet season, from about November to April (Bureau of Meteorology). What does this mean for a river there?"
      options:
        - "It can run high in the wet season and low or dry for the rest of the year"
        - "It carries about the same amount of water every month, whatever the season"
        - "It has the most water in the dry season, when the weather is hottest"
        - "Seasons only change the groundwater under it, not the river on the surface"
      answer: 0
      feedback:
        - null
        - "Rivers fill from rain. If the rain comes in a few months, so does most of the flow."
        - "Heat in the dry season speeds up evaporation, so there is less, not more."
        - "Rivers fill from rain and runoff, so seasons change them directly."
      explain: "That is seasonality: the amount of water changes through the year."
```

### Factors and how they work

### A northern river

## Practise: name the cause

```step
stage: practise
insight: "The diagnosis decides the fix, so name the cause before choosing a response."
tasks:
  - check:
      type: question
      q: "Made-up Corrowin fixes its pipes and pumps. Then a long dry spell leaves its river very low. What kind of cause is it now?"
      options:
        - "Physical: now the water itself is short"
        - "Economic: the pipes must have broken again"
        - "None: a town with good pipes cannot run short"
        - "The ways water is used: Corrowin must be wasting water"
      answer: 0
      feedback:
        - null
        - "The case says the pipes were fixed. What changed is the river."
        - "Good pipes cannot deliver water that is not there."
        - "The case does not say use went up. It says the rain stopped."
      explain: "The same town can have different causes at different times. Diagnose from the evidence."
  - check:
      type: question
      q: "Old pipes at made-up Corrowin leak, so river water does not reach the houses. Which response targets that cause?"
      options:
        - "Repair or replace the pipes"
        - "Build a bigger dam to catch more rain"
        - "Ask people to wait for wetter years"
        - "Move the town further from the river"
      answer: 0
      feedback:
        - null
        - "More stored water still has to travel through the same leaking pipes."
        - "Rain is not the problem here, so waiting does not fix it."
        - "Being near the river helps. The problem is the pipes."
      explain: "An economic cause needs a fix to the system that delivers the water."
```

### Diagnose again

### Match the fix to the cause

## Make: two towns, two causes

```step
stage: make
insight: "Explaining a physical and an economic cause in your own words shows the difference is yours."
check: { type: reflect, text: "In my own book I explained one physical cause (Drybank) and one economic cause (Corrowin) of water running short, and two factors that make the amount of water vary, saying how each one works. A partner gave feedback." }
```

Both towns are made up. Write it in your own book or document, not on this page. Use the two questions: is the water there, and can people get it?

## Typical: more than one cause

```step
stage: make
tier: typical
insight: "Real shortages often combine causes. Name each one."
check:
  type: sort
  q: "A made-up town has dry years, a growing population and a treatment plant that is too small. Sort each fact by the cause it shows."
  options: ["Physical cause", "Economic cause", "The ways water is used"]
  items:
    - ["Less rain falls in dry years", "Physical cause", "There is less water in the place."]
    - ["The treatment plant cannot clean enough water", "Economic cause", "The water could be there, but the system cannot make enough fit to use."]
    - ["More people move in each year and use more water", "The ways water is used", "Demand is growing."]
```

## Wider: same cause, same fix?

```step
stage: make
tier: wider
insight: "Comparing places tests whether one fix suits different causes."
check: { type: reflect, text: "With a partner I compared a made-up place short of rain with a made-up place that has water but no pipes or treatment, and explained why the same strategy would not suit both." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
