---
order: 5
unit: water
title: "Putting it together: classify, connect, change"
node: AC9HG7K01 n5
summary: "This lesson brings together the three ideas from the course: what kind of resource water is, how its movement connects places, and how moving water changes the land. Calling river water renewable is true, but it does not say where the water goes or what it changes. Using the Murray Mouth and a made-up bay, the lesson shows how one explanation can join two or three of these ideas."
language: maths
hook: Knowing that river water is renewable does not tell us where it goes or what it changes. Can one
  explanation join those ideas?
---
You have three tools: **classify** water as a resource with a reason; **connect** places by a pathway and what it carries or affects; **explain change** through a process such as erosion or deposition.

Use them on one case. To finish, link at least two tools in your own explanation. Optional steps join all three.

## Predict: is the label enough?

```step
stage: predict
insight: Notice why classification alone cannot explain the whole case.
check:
  type: predict
  q: "In made-up Rill Bay, a river refills after rain and carries soil from a hill to a lake. Is 'the water is renewable' a complete explanation?"
  options:
    - No, it leaves out connection and physical change
    - Yes, its label explains where all sediment travels
    - Yes, renewable means the river can never run low
    - No, river water is always non-renewable instead
  actual: Renewable describes replenishment. It does not trace carried material or explain a physical change.
```

## Try: choose the tool

```step
stage: run
insight: Recognise each concept in the same case.
check:
  type: match
  q: Match each sentence about made-up Rill Bay to its main tool.
  pairs:
    - - Rain refills the river, but taking water faster than it returns can run it low
      - Classification
    - - The river carries soil from the hill to the lake
      - Connection
    - - Soil settles at the lake entrance as flow slows
      - Physical change
  explain: The tools describe different parts of one case. An explanation links them.
```

## Worked example: the Murray Mouth

```step
stage: investigate
insight: Link a pathway with physical change in one sourced case.
tasks:
  - check:
      type: question
      q: Which explanation links connection and physical change in the Murray Mouth card?
      options:
        - Low river outflow lets sand build up until the mouth silts up and can close
        - Renewable river water guarantees steady outflow that keeps the opening clear throughout the year
        - Low river outflow prevents any movement of sand, so the opening cannot change shape
        - Sand build-up proves river flow has increased and the sand must all come from upstream
      answer: 0
      feedback:
        - null
        - Renewable does not guarantee steady flow or an open mouth.
        - Sand can build up under low outflow; low flow does not freeze the landscape.
        - "That gets it backwards: the sand comes in from the ocean when river flow is low."
      explain: It links a water pathway with a physical change that can restrict the opening.
  - check:
      type: bug
      code: working.txt#nib
      text: Nib explains the case. Click the first line where the reasoning goes wrong.
      answer: 4
      fault: logic
      misconception: renewable-explains-everything
      explain: Line 4 treats renewable as a guarantee that flow can never be low. A resource label cannot replace an
        explanation of movement and change.
    smaller:
      check:
        type: question
        q: In made-up Rill Bay, water carries soil to a lake where it settles. Which two tools are linked?
        options:
          - Connection and physical change
          - Classification and connection
        answer: 0
        feedback:
          - null
          - Nothing here says whether the water refills. The soil moves, then changes the lake bed.
        explain: Carrying soil connects places; settling changes the receiving place.
```

### One real case

```worked
\text{Connection} :: Water moves from Lake Alexandrina towards the Murray Mouth.
\text{Change} :: When outflow is low, sand from the ocean builds up in the mouth.
\text{Link} :: Build-up can restrict the opening and the connection.
\text{So} :: Connection and physical change explain parts of the same case.
```

The **Murray Mouth** in South Australia is where the River Murray meets the sea, after flowing through **Lake Alexandrina**. Barrages (gated barriers) are operated to keep seawater out of the lake. When too little river water flows out, sand from the ocean builds up and the mouth can silt up and close, so dredges have been used to keep it open.

*Sources: [River Murray flow report, 9 July 2021 (SA Department for Environment and Water)](https://www.waterconnect.sa.gov.au/Content/Flow%20Reports/RM-Flow-Report-20210709.pdf); [Murray Mouth barrage outflow and dredging (SA report card, 2023)](https://data.environment.sa.gov.au/Content/Publications/RC2023_RC_WA_SW_MurrayMouthBarrageOutflowAndDredging.pdf), checked 1 November 2026.*

### Find Nib’s slip



## Vary: link the tools

```step
stage: modify
insight: Distinguish linked explanations from lists and unsupported labels.
tasks:
  - check:
      type: question
      q: Which joins two tools in the made-up Rill Bay case?
      options:
        - Runoff carries soil to the lake; slower flow there lets sediment settle
        - The river, the hill and the lake all have their own place names
        - Surface water, soil moisture and groundwater are forms of water
        - Renewable water comes back, so it never takes time to refill
      answer: 0
      feedback:
        - null
        - Place names need a pathway and a transfer or consequence.
        - This lists forms but does not explain their links in the case.
        - Renewable resources still depend on the speed of replenishment.
      explain: Connection and deposition are joined by soil travelling from the hill to the lake.
  - check:
      type: question
      q: A made-up town takes river water faster than rain refills it. Which classification and reason fit?
      options:
        - "Renewable: it refills, but taking too much can run it low"
        - "Continuous: rain keeps falling, so the river can never be run low"
        - "Non-renewable: once a town uses river water, it is gone for good"
        - "Continuous: water that keeps moving always belongs in this group"
      answer: 0
      feedback:
        - null
        - That treats rain as unlimited. Rain refills at its own pace, so the river can run low.
        - That forgets refilling. Used water comes back with rain and runoff.
        - That makes it about moving. The test is whether our use can run it low.
      explain: Classify from replenishment and possible depletion, then explain connections separately.
```

### A link, not a list



### Keep the classification reason



## Practise: a new place

```step
stage: practise
insight: Transfer the tools before writing a joined explanation.
tasks:
  - check:
      type: question
      q: Made-up Pebblewash Creek flows from a bare slope past a village to a pond, carrying soil. Which sentence
        explains a connection?
      options:
        - The creek carries soil from the slope past the village to the pond
        - The slope and the pond are two different named places in this case
        - The village and the slope must always receive identical rainfall
        - The water is a continuous resource because it can flow downhill
      answer: 0
      feedback:
        - null
        - Two named places still need a pathway and something transferred.
        - Connection does not imply identical weather.
        - Flow does not decide classification or explain a connection.
      explain: It names a starting place, pathway, material and receiving place.
  - check:
      type: question
      q: Flow slows in that pond and sand settles. Which physical change follows?
      options:
        - Sand builds up as a deposit on the pond bed
        - The pond bed is worn away as the water slows down
        - The sand is carried straight on out of the pond
        - Nothing changes, because the water stays in the pond
      answer: 0
      feedback:
        - null
        - That swaps the processes. Slowing water drops sand; it does not wear the bed away.
        - That misses the slowing. When flow slows, it can no longer carry all the sand.
        - "Something does change: sand moves to the pond bed and builds it up."
      explain: Deposition changes the physical landscape.
```

### Trace Pebblewash Creek



### Explain its change



## Make: one joined explanation

```step
stage: make
insight: Meet minimum width by linking at least two concepts in one case.
check:
  type: reflect
  text: In my own book I explained the Murray Mouth case or made-up Pebblewash Creek using at least two of
    classification, connection and physical change. I named places, a water form and a process or
    classification reason. A partner or teacher checked that my sentences link the ideas.
```

Use the supplied case details. Connection plus change works for either case. If you choose classification, give evidence about refilling rather than guessing from a place name. Use because, so or when to link your ideas. Write in your book, not on this page.

Before ticking, check that you explained the same case throughout and joined the ideas.

## Typical: join all three

```step
stage: make
insight: Explain the relationships among all three tools in one case.
check:
  type: reflect
  text: For made-up Rill Bay I wrote an explanation joining classification, connection and change, with a reason
    for each link.
tier: typical
```

The river refills after rain. Runoff carries loose hill soil into the lake, where some settles as flow slows. Explain why renewable does not mean unlimited, then link movement of material to change at the receiving place.

## Wider: a proposed pipeline

```step
stage: make
insight: Use the same concepts to judge a hypothetical change.
check:
  type: reflect
  text: I used all three tools to discuss a made-up pipeline, naming something that might improve, something
    that might worsen and one piece of missing evidence.
tier: wider
```

A made-up town proposes taking water from Rill Bay’s river through a pipeline. It would improve town supply but leave less flow downstream. Does it change how the river refills? What connection does it add? How might less flow affect sediment movement? State possibilities rather than certain outcomes without evidence.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
