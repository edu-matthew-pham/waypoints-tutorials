---
order: 2
unit: water
title: "Water on the move: how it joins places"
node: AC9HG7K01 n2
summary: Trace water through a catchment, distinguish its forms, and explain what it carries between places.
language: maths
hook: A town has had no rain, but its river turns muddy. How could a change somewhere else reach it?
---
Water can be **surface water** in rivers and lakes, **soil moisture** held in soil, or **groundwater** in spaces and cracks below ground. It can also be salt water, ice or invisible water vapour. A form tells us where or how water exists; a pathway tells us where it moves.

**Runoff** flows over the ground. Water can also soak in and move underground, or evaporate, travel in the air and fall as rain elsewhere. A **catchment** is the area that drains towards a river or other outlet. **Upstream** is towards a river's source; **downstream** is towards its mouth.

## Predict: mud without rain

```step
stage: predict
insight: Notice that a place can receive consequences from somewhere else.
check:
  type: predict
  q: In made-up Kerrin, the town has no rain but its river turns muddy. What could explain it?
  options:
    - Rain washed soil off a farm upstream
    - Only rain over the town can affect its river
    - River water cannot carry soil
    - All the mud must have formed in the town
  actual: Rain upstream can wash soil into the river. Flow can carry it to the town even when the town has no rain.
```

## Try: follow the water

```step
stage: run
insight: Distinguish water stores before explaining connections.
check:
  type: match
  q: Match each description in Kerrin to its water form.
  pairs:
    - - Water between soil particles around roots
      - Soil moisture
    - - Water in cracks in rock below the soil
      - Groundwater
    - - Water flowing past the town in the river
      - Surface water
  explain: The stores differ by where water is held. They can be connected by water movement.
```

<figure class="wpt-catchment" style="margin:0 0 14px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" role="img" aria-label="Made-up Kerrin catchment. Rain falls on a high slope beside a farm. Runoff enters a river flowing past a town to a lake. Some rain soaks into soil and rock. Not to scale." style="width:100%;max-width:720px;height:auto;background:#f4f8fa;border-radius:12px"><path d="M10 200 L95 80 L190 165 L320 185 L470 210 L470 285 L10 285Z" fill="#d7e7cb" stroke="#49634b" stroke-width="2"/><path d="M120 140 Q160 155 210 180 T330 200 L400 210" fill="none" stroke="#187aa4" stroke-width="10"/><ellipse cx="425" cy="210" rx="44" ry="25" fill="#a9dbef" stroke="#187aa4" stroke-width="2"/><path d="M225 184 l18 4 -12 10 M335 201 l18 4 -12 10" fill="#187aa4"/><path d="M157 165 l0 45 M178 175 l0 42" stroke="#187aa4" stroke-width="2" stroke-dasharray="5 4"/><g fill="#162c38" font-family="sans-serif" font-size="22"><text x="15" y="34">Rain on high slope</text><text x="175" y="124">Farm</text><text x="288" y="152">Town</text><text x="401" y="216">Lake</text><text x="32" y="266">Soil and rock below ground</text></g><path d="M70 48 l-7 19 M95 48 l-7 19 M120 48 l-7 19" stroke="#187aa4" stroke-width="3"/><rect x="187" y="139" width="22" height="20" fill="#ba8d5c"/><path d="M182 139 l16 -13 16 13" fill="#8c533b"/><rect x="290" y="164" width="18" height="16" fill="#856cb0"/><rect x="316" y="167" width="18" height="16" fill="#856cb0"/></svg><figcaption>Kerrin is made up, not to scale. Follow the flow arrows from the farm past the town to the lake.</figcaption></figure>

Imagine rain soaking into the farm soil. Some stays around roots, some moves deeper into rock, and some runs into the river. These are made-up observations, not a report about a real place.

## Worked example: more than a direction

```step
stage: investigate
insight: Explain a connection as a pathway, something carried and another place affected.
tasks:
  - check:
      type: question
      q: In Kerrin, rain washes loose soil off the farm. Why might the town downstream care?
      options:
        - The river can carry soil to the town’s water intake
        - Every place on the river must have identical rain
        - The town can only be affected by its own land
        - Soil cannot travel beyond the farm boundary
      answer: 0
      feedback:
        - null
        - River connections do not mean identical weather.
        - Follow the flow from the farm to the town.
        - Flow can carry loose particles beyond a boundary.
      explain: The farm and town are connected by surface water carrying soil, with a consequence for water quality.
    smaller:
      check:
        type: question
        q: Muddy water flows along a gutter. What could reach a drain farther along?
        options:
          - Water with some of the mud
          - Only perfectly clean water
        answer: 0
        feedback:
          - null
          - Flow can carry particles as well as water.
        explain: Moving water can carry material from one place to another.
    hint:
      - Find the farm and town on the picture.
      - Trace the river between them.
      - Name something that can travel with the water.
  - check:
      type: bug
      code: working.txt#nib
      text: Nib explains the case. Click the first line where the reasoning goes wrong.
      answer: 3
      fault: logic
      misconception: water-is-only-transport
      explain: Line 3 ignores the loose soil moving water can carry. Explain what travels and why another place
        could care.
```

### What reaches the town?

```worked
\text{Start} :: Rain washes litter into a made-up school gutter.
\text{Pathway} :: Water flows along the gutter towards a creek.
\text{Transfer} :: Flow carries litter from the school to the creek.
\text{Connection} :: A change at school can affect water quality in the creek.
```

### Find Nib’s slip



## Vary: forms and pathways

```step
stage: modify
insight: Apply the connection idea to a real river and different forms.
tasks:
  - check:
      type: question
      q: On the real-river card, which pathway joins the named places?
      options:
        - Murrumbidgee headwaters to its junction with the Murray
        - Murray junction to Murrumbidgee headwaters
        - The rivers have no surface-water connection
        - Every river journey must first pass through the air
      answer: 0
      feedback:
        - null
        - Follow the direction from headwaters towards the junction.
        - A junction is where river channels join.
        - Evaporation is one pathway, not a step in every river journey.
      explain: The Murrumbidgee carries surface water from its headwaters towards the Murray.
  - check:
      type: match
      q: Match the other forms to a possible pathway.
      pairs:
        - - Ice on a slope
          - Melts, then runs into a stream
        - - Salt water at the sea surface
          - Evaporates; water vapour travels in air
        - - Water vapour in the air
          - Cools and condenses; water may fall as rain elsewhere
      explain: Water can become a resource elsewhere after moving or changing form. Evaporation leaves most
        dissolved salts behind.
```

### A real river connection

Parks ACT describes the **Murrumbidgee River** flowing from headwaters in Kosciuszko National Park to its junction with the **Murray River** near Balranald. This is the real pathway. The muddy farm and town in Kerrin are made up; they are not claims about the Murrumbidgee.

*Source: [Murrumbidgee River Corridor (Parks ACT)](https://www.parks.act.gov.au/find-a-nature-park/murrumbidgee-river-corridor), checked 30 October 2026.*

### Other forms can move too



## Practise: explain what travels

```step
stage: practise
insight: Explain a pathway and what is transferred.
tasks:
  - check:
      type: question
      q: In a made-up case, a spill soaks into rock beside a village. Groundwater moves towards a spring at another
        village. Why might the second village care?
      options:
        - Dissolved pollution could travel to its spring
        - Groundwater stays still because it is underground
        - Underground water is always safe to drink
        - Only a shared road can connect the villages
      answer: 0
      feedback:
        - null
        - Groundwater can move through connected pores and cracks.
        - Being underground does not guarantee clean water.
        - The pathway here is groundwater, not a road.
      explain: A connection can be underground. Name the pathway and what it carries.
  - check:
      type: question
      q: Which explanation goes beyond saying water flows downhill?
      options:
        - Runoff carries fertiliser from a field to a lake, affecting water quality
        - The river flows from high land to low land through the catchment
        - There is water in the river and a lake farther downstream
        - The river and the lake are both stores of surface water
      answer: 0
      feedback:
        - null
        - This gives direction but no transferred material or consequence.
        - This names places without explaining what is transferred.
        - This classifies stores without explaining a connection.
      explain: Name the starting place, pathway, material and receiving place.
```

### An underground connection



### More than downhill



## Make: explain one connection

```step
stage: make
insight: Produce a specific connection, not a list of terms.
check:
  type: reflect
  text: In my own book I named three water forms, traced one pathway between two named places in Kerrin, and
    explained what the water carries and why the receiving place could care. A partner or teacher read it.
```

Use the made-up Kerrin picture. Draw arrows and write two or three sentences. Include the water form, starting place, receiving place and something carried or affected. Write in your book, not on this page.

## Typical: through soil, rock and air

```step
stage: make
insight: Widen pathways while keeping the connection reasoning.
check:
  type: reflect
  text: In my book I explained two made-up connections, one through soil or rock and one through the air,
    including how salt water, ice or vapour could become a usable resource elsewhere.
tier: typical
```

Imagine groundwater feeding a spring after rain soaks into a hillside. In another case, sea water evaporates and vapour travels inland before rain falls. Explain the forms and pathways.

## Wider: one connection at two scales

```step
stage: make
insight: Transfer the same reasoning between scales.
check:
  type: reflect
  text: I explained how litter could travel from a school gutter to a creek and how dissolved pollution could
    travel through a larger made-up river system. I named a receiving place in each.
tier: wider
```

Both cases are made up. Keep the explanation pattern even though the distances differ.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
