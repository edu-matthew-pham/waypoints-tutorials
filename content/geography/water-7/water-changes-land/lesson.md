---
order: 4
unit: water
title: How moving water changes the land
node: AC9HG7K01 n4
summary: Explain erosion, transport and deposition as processes that change a place, rather than merely naming
  a landform.
language: maths
hook: A river runs through a valley. Does that explain how the valley became deeper?
---
Water flowing downhill gains energy as gravity pulls it down a slope. It can loosen and remove soil or rock: **erosion**. It can carry material along: **transport**. When flow slows enough that it cannot carry some material, particles settle: **deposition**. The carried particles are **sediment**.

A process explanation says how a place changes. Naming a valley or saying a river is there does not explain how water changes the land.

## Predict: after the storm

```step
stage: predict
insight: Predict removal and accumulation from the same flow.
check:
  type: predict
  q: In made-up Kerrin, storm runoff crosses a bare slope and enters the lake. What might you find afterwards?
  options:
    - A small channel on the slope and soil deposited near the lake entrance
    - Only water has moved, so the land cannot have changed
    - All the loosened soil remains exactly where it started
    - A taller slope because water added material everywhere
  actual: Runoff can remove soil, carry it to the lake and let some settle as flow slows.
```

## Try: name what happened

```step
stage: run
insight: Distinguish erosion, transport and deposition.
check:
  type: match
  q: Match the made-up observations to the process.
  pairs:
    - - Runoff cuts soil out of a bare slope
      - Erosion
    - - Flow carries loosened soil towards the lake
      - Transport
    - - Particles settle where flow enters the lake and slows
      - Deposition
  explain: Material can be removed in one place and added elsewhere.
```

<figure class="wpt-catchment" style="margin:0 0 14px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" role="img" aria-label="Made-up Kerrin catchment. Rain falls on a high slope beside a farm. Runoff enters a river flowing past a town to a lake. Some rain soaks into soil and rock. Not to scale." style="width:100%;max-width:720px;height:auto;background:#f4f8fa;border-radius:12px"><path d="M10 200 L95 80 L190 165 L320 185 L470 210 L470 285 L10 285Z" fill="#d7e7cb" stroke="#49634b" stroke-width="2"/><path d="M120 140 Q160 155 210 180 T330 200 L400 210" fill="none" stroke="#187aa4" stroke-width="10"/><ellipse cx="425" cy="210" rx="44" ry="25" fill="#a9dbef" stroke="#187aa4" stroke-width="2"/><path d="M225 184 l18 4 -12 10 M335 201 l18 4 -12 10" fill="#187aa4"/><path d="M157 165 l0 45 M178 175 l0 42" stroke="#187aa4" stroke-width="2" stroke-dasharray="5 4"/><g fill="#162c38" font-family="sans-serif" font-size="22"><text x="15" y="34">Rain on high slope</text><text x="175" y="124">Farm</text><text x="288" y="152">Town</text><text x="401" y="216">Lake</text><text x="32" y="266">Soil and rock below ground</text></g><path d="M70 48 l-7 19 M95 48 l-7 19 M120 48 l-7 19" stroke="#187aa4" stroke-width="3"/><rect x="187" y="139" width="22" height="20" fill="#ba8d5c"/><path d="M182 139 l16 -13 16 13" fill="#8c533b"/><rect x="290" y="164" width="18" height="16" fill="#856cb0"/><rect x="316" y="167" width="18" height="16" fill="#856cb0"/></svg><figcaption>Kerrin is made up, not to scale. Follow the flow arrows from the farm past the town to the lake.</figcaption></figure>

## Worked example: a process, not a location

```step
stage: investigate
insight: Explain change through water acting on material.
tasks:
  - check:
      type: question
      q: Which order explains Kerrin’s storm?
      options:
        - Downhill flow → erosion → transport → deposition
        - Downhill flow → deposition → erosion → transport
        - Downhill flow → transport → deposition → erosion
        - Deposition → downhill flow → erosion → transport
      answer: 0
      feedback:
        - null
        - Soil must be removed and carried before it settles elsewhere.
        - Removal comes before carrying that material towards the lake.
        - Start with moving water; settling is the final part of this case.
      explain: Gravity pulls runoff downhill. Flow removes soil, carries it and deposits some where it slows.
  - check:
      type: bug
      code: working.txt#nib
      text: Nib explains the case. Click the first line where the reasoning goes wrong.
      answer: 3
      fault: logic
      misconception: valley-location-is-process
      explain: Line 3 gives the river’s location as the whole explanation. Explain how erosion and transport remove
        material over time.
    smaller:
      check:
        type: question
        q: A marked patch of soil is gone after runoff carries it away. Which process removed it?
        options:
          - Erosion
          - Deposition
        answer: 0
        feedback:
          - null
          - Deposition adds material; this patch lost it.
        explain: Erosion removes material from a place.
    hint:
      - Does Nib explain a change or name a location?
      - Look for what happens to soil or rock.
      - A process explanation says how material is removed.
```

### Build the process chain



### Find Nib’s slip

```worked
\text{Energy} :: Gravity pulls runoff down a bare slope in a made-up park.
\text{Erosion} :: Water removes loose soil.
\text{Transport} :: Flow carries the soil along a shallow channel.
\text{Change} :: The slope loses soil and the channel becomes deeper.
```

## Vary: changed flow, changed channel

```step
stage: modify
insight: Apply the process to a sourced river and a made-up deposit.
tasks:
  - check:
      type: question
      q: On the Snowy River card, what process changes the channel?
      options:
        - Released flows scour and carry sediment from the bed
        - The river’s location alone explains its changing depth
        - All the sediment stays fixed once it reaches the river
        - The river’s name tells us how its channel was formed
      answer: 0
      feedback:
        - null
        - Location omits the process acting on the material.
        - Flow can pick up and carry sediment from the bed.
        - A name does not explain physical change.
      explain: Scouring removes material and flow transports it, reshaping the channel.
  - check:
      type: question
      q: Why might a deposit form where runoff enters Kerrin’s lake?
      options:
        - Flow slows enough for some carried particles to settle
        - The water must vanish as soon as it enters the lake
        - All carried soil instantly turns into dissolved salt
        - Deposition lifts material off the slope upstream
      answer: 0
      feedback:
        - null
        - Water can keep moving while particles settle.
        - Sediment need not dissolve to move or settle.
        - That describes removal, not settling.
      explain: Deposition occurs when flow can no longer carry some of its sediment.
```

### A real riverbed

NSW Environment and Heritage describes **Snowy River** environmental releases scouring (washing away) and transporting sediment to help form a deeper channel within the old riverbed. This is a real example of water changing a place by removing and moving sediment.

*Source: [Managing water for the environment: Snowy and montane rivers (NSW Environment and Heritage)](https://www.environment.nsw.gov.au/topics/water/water-for-the-environment/catchments/snowy-and-montane/managing), checked 30 October 2026.*

### A made-up deposit



## Practise: explain the change

```step
stage: practise
insight: Use process terms instead of merely naming outcomes.
tasks:
  - check:
      type: sort
      q: In these made-up observations, which process is the main focus?
      options:
        - Erosion
        - Transport
        - Deposition
      items:
        - - A stream removes soil from its bank
          - Erosion
          - Material is removed from the bank.
        - - Sand travels along the streambed
          - Transport
          - The focus is material being carried.
        - - Silt settles on a flooded field as water slows
          - Deposition
          - Settling adds material at this place.
  - check:
      type: question
      q: Which explanation tells how a valley can become deeper?
      options:
        - Repeated flows erode the bed and carry loosened material away
        - The river lies in a low place between areas of higher ground
        - The valley is below a hill and the river is at its bottom
        - A valley is a low area with a river flowing through it
      answer: 0
      feedback:
        - null
        - This locates the river but does not explain the change.
        - Relative height is an observation, not a process.
        - A definition does not explain removal of material.
      explain: Erosion and transport can deepen a channel over time.
```

### Which process?



### Explain, rather than locate



## Make: how a place changed

```step
stage: make
insight: Explain one physical change with appropriate process terms.
check:
  type: reflect
  text: In my own book I explained how runoff changed Kerrin’s bare slope using erosion and transport. I
    identified the removed material and where water carries it. A partner or teacher read it.
```

Use the storm from Predict. Draw a before-and-after sketch and write a short explanation naming the slope, flowing water, soil removed and material carried away. Write in your book, not on this page.

## Typical: where material builds up

```step
stage: make
insight: Explain deposition as well as removal in the same case.
check:
  type: reflect
  text: I added the lake entrance to my Kerrin explanation and explained why some sediment settles there, using
    erosion, transport and deposition accurately.
tier: typical
```

Material lost from the slope can be gained at the lake entrance. A river can both erode and deposit; do not give it one permanent label.

## Wider: change the ground cover

```step
stage: make
insight: Apply the chain to another surface at the same level.
check:
  type: reflect
  text: I compared two made-up slopes with the same rain and steepness, one with plant cover and one with
    exposed loose soil. I explained which could lose more soil and why.
tier: wider
```

Imagine roots and ground cover protect the first slope. Loose soil on the second is exposed to runoff. Explain a possible difference and another condition you would need to check.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
