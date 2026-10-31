---
order: 3
unit: water-australia
title: "Who has access to water?"
node: AC9HG7K02 n3
summary: "Where water is, how reliable it is, and what has been built to deliver it affect people's lives differently in different places. This lesson follows two made-up places in the same area: a regional town with piped, treated water and a small remote settlement relying on rainwater tanks and a bore. It traces each from water source to limitation to consequence for health, money and work, and daily life."
language: maths
hook: "Two places sit in the same area, under the same sky. Do they have the same water?"
---
An **implication** is what something means for people: a consequence. To explain one, follow a chain: **where the water comes from**, then **what limits it**, then **the consequence for people**.

The two places in this lesson are made up:

- **Pennerby**, a regional town. Its water is pumped from a river, cleaned at a treatment plant and piped to every house.
- **Fennow**, a small remote settlement. Its water comes from rainwater tanks on the roofs and one bore. The nearest town with a treatment plant is far away.

## Predict: same area, same water?

```step
stage: predict
insight: "Commit to an answer before tracing how two places in one area can have very different water."
check:
  type: predict
  q: "Made-up Pennerby and Fennow are in the same area. What is most likely?"
  options:
    - "Their water can be very different, because of where it comes from and what has been built"
    - "They must have exactly the same water, because they are in the same area"
    - "Fennow will have more reliable water, because it is smaller"
    - "Neither can ever run short, because they share a sky"
  actual: "Being in the same area does not give two places the same water. Pennerby has a river, a treatment plant and pipes. Fennow has tanks and one bore. Their supply, its reliability and its cost are different."
```

## Try: source, limitation, consequence

```step
stage: run
insight: "Each implication is a chain: where the water comes from, what limits it, what that means for people."
check:
  type: match
  q: "In made-up Fennow, match each water source to what limits it."
  pairs:
    - - "Rainwater tanks on the roofs"
      - "They run low when it does not rain for weeks"
    - - "The one bore"
      - "If its pump breaks, a part may take days to arrive"
    - - "Water trucked in during a dry spell"
      - "It costs a lot and depends on the road being open"
  explain: "Each source has its own limit. The next step is to say what that limit means for the people living there."
```

## Worked example: from limit to consequence

```step
stage: investigate
insight: "Link the limit to a lived consequence. Do not stop at the source."
tasks:
  - check:
      type: question
      q: "Fennow's bore pump breaks and the part takes a week to arrive. What is the most direct consequence for people?"
      options:
        - "Families must ration tank water for drinking and washing until it is fixed"
        - "The council will build Fennow a new treatment plant straight away"
        - "Nothing changes for families, because the water is still there in the bore"
        - "Pennerby's water will stop as well, because the two places share an area"
      answer: 0
      feedback:
        - null
        - "Nothing in the case says that. Stay with what the breakdown means this week."
        - "The water is there, but without the pump nobody can reach it."
        - "Pennerby has a different supply. A broken pump at Fennow does not reach it."
      explain: "Source: the bore. Limit: the pump is broken. Consequence: families ration water."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is comparing the two places. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: same-resource-same-access
      explain: "Line 3: being in the same area does not give the same supply. Pennerby's water comes through a river, a treatment plant and pipes; Fennow's comes from tanks and a bore. Each has different limits and different consequences."
    smaller:
      check:
        type: question
        q: "Which is the chain for Fennow's tanks?"
        options: ["Tanks, then a dry month, then families saving water", "Tanks, then a river, then the treatment plant"]
        answer: 0
        feedback: [null, "Fennow's tanks fill from its roofs, not from a river."]
        explain: "Source (the tanks), limit (no rain for a month), consequence (families save water)."
    hint:
      - "Lines 1 and 2 are facts from the cases."
      - "Find the line that assumes the two places are the same."
      - "Where does each place actually get its water?"
```

### The chain for Fennow

```worked
\text{Source} :: Fennow's water comes from rainwater tanks and one bore.
\text{Limit} :: The tanks run low in dry weeks; if the bore pump breaks, parts take days to arrive.
\text{Consequence} :: Families ration water, and trucked-in water costs a lot.
\text{Compare} :: Pennerby's treated, piped river water is more reliable day to day, but not limitless.
```

### Find Nib's slip

## Vary: kinds of consequence

```step
stage: modify
insight: "Consequences can be for health, for money and work, or for daily life."
tasks:
  - check:
      type: sort
      q: "In made-up Fennow, what is each consequence mainly about?"
      options: ["Health", "Money and work", "Daily life"]
      items:
        - ["Bore water has to be tested before it is safe to drink", "Health", "Whether the water is safe affects people's health."]
        - ["Trucking in water in a dry spell costs a lot", "Money and work", "It is a cost to the community."]
        - ["Families take shorter showers when the tanks are low", "Daily life", "It changes everyday routines."]
        - ["A station cannot water its cattle while the bore is broken", "Money and work", "It affects how people earn a living."]
  - check:
      type: question
      q: "In a long dry spell, made-up Pennerby's river runs low and the council limits garden watering. What does this show?"
      options:
        - "Town water can be limited too; the type of place alone does not decide access"
        - "Towns can never run short of water, so the council must have made a mistake"
        - "Pennerby now has exactly the same water and the same problems as Fennow"
        - "Only remote places ever have limits, so this town must count as remote now"
      answer: 0
      feedback:
        - null
        - "Even a town's river can run low in a long dry spell."
        - "Pennerby still has its treatment plant and pipes. The limit is different from Fennow's."
        - "Pennerby is a regional town, and it has a limit now."
      explain: "Access depends on the source, how reliable it is, and what has been built, not only on whether a place is a town."
```

### What kind of consequence?

### A town in a dry spell

## Practise: explain a difference

```step
stage: practise
insight: "A comparison names the difference and explains it with the chain."
check:
  type: question
  q: "Which sentence best explains a difference between made-up Pennerby and Fennow?"
  options:
    - "Pennerby's piped, treated water is more reliable; Fennow's tanks and bore can fail, so families may ration water"
    - "Pennerby is a bigger town than Fennow, with more houses, more shops and more people living close together beside its river"
    - "Fennow is in the same area as Pennerby, so both will have the same supply and run into the same problems in a dry spell"
    - "Fennow has no water at all, because only places with a river, a treatment plant and pipes can have any water"
  answer: 0
  feedback:
    - null
    - "Size is a description. Explain what is different about the water and what it means for people."
    - "Being near each other does not give them the same supply."
    - "Fennow has tanks and a bore. Its water is less reliable, not missing."
  explain: "Name the difference, then follow it to a consequence for people."
```

## Make: two implications

```step
stage: make
insight: "Explaining two implications with the chain, then comparing, is the waypoint."
check: { type: reflect, text: "In my own book I explained two implications of water distribution for made-up Fennow, each as source, limit and consequence, and compared one of them with Pennerby. A partner gave feedback." }
```

Use only the case details. Both places are made up: do not describe a real community's experience. Write it in your own book or document, not on this page.

## Typical: reliable, affordable, maintained

```step
stage: make
tier: typical
insight: "Comparing on several points shows how access differs."
check: { type: reflect, text: "In my book I compared Pennerby and Fennow on three points: how reliable the water is, how much it costs to get, and who fixes it when it breaks. For each I said what it means for people." }
```

## Wider: evidence or generalisation?

```step
stage: make
tier: wider
insight: "Keep what the case shows apart from claims about every place like it."
check:
  type: sort
  q: "Is each statement evidence from the made-up cases, or a generalisation that goes beyond them?"
  options: ["Evidence from the case", "Generalisation"]
  items:
    - ["Fennow's bore pump took a week to fix", "Evidence from the case", "The case says this."]
    - ["Every remote place has unsafe water", "Generalisation", "The case is about one made-up place. It says nothing about every remote place."]
    - ["Pennerby limited garden watering in a dry spell", "Evidence from the case", "The case says this."]
    - ["Towns always have better water than small settlements", "Generalisation", "One comparison cannot show what is always true."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
