---
order: 42
unit: composite10
node: [AC9M10M01 n3, AC9M10M01 n4]
uses: [AC9M10M01 n1, AC9M10M01 n2, AC9M9M01 n2]
assumes: [AC9M10M01 n1]
connection: rainwater-tank
title: Volume of composite objects
summary: "Find a composite volume by adding parts or taking one away, in whichever way is easier, then say what the model assumes. A rainwater tank, a pool with a deep end and a silo."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How much rain does it take to fill a water tank?"
---
Rain falling on a roof runs into a tank. The Bureau of Meteorology says each millimetre of rain on each square metre gives about a litre ([Bureau of Meteorology](https://www.bom.gov.au/climate/how/faq-data.shtml), checked 25 October 2026). This tank is a cylinder with a cone-shaped bottom, and a roof of 100 m² feeds it (shape and sizes made up for the task). How many millimetres of rain fill it from empty? Have a guess, and we'll come back to it at the end.

## Predict: filling the tank

```step
stage: predict
insight: "Committing to the rainfall shows who leaves the cone out, who counts it as a full cylinder, and who loses a factor of 1000 between cubic metres and litres."
check:
  type: predict
  q: "The tank is a cylinder (radius 1.1 m, wall height 2 m) with a cone-shaped bottom 0.6 m deep. A roof of 100 m² feeds it. About how many millimetres of rain fill the empty tank?"
  options:
    - "About 84 mm"
    - "About 76 mm"
    - "About 99 mm"
    - "About 8 mm"
  actual: "About 84 mm. The tank holds about 8.36 m³, which is 8360 litres. Each millimetre on 100 m² gives 100 litres, so 8360 ÷ 100 is about 84 mm. Leaving out the cone gives 76 mm, and counting it as a full cylinder gives 99 mm."
```

<figure class="situation" role="img" aria-label="A rainwater tank: a cylinder with a radius of 1.1 metres and a wall height of 2 metres, with a cone-shaped bottom 0.6 metres deep. A roof of 100 square metres feeds it. Not to scale."><svg viewBox="0 0 400 235" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><ellipse cx="110" cy="30" rx="55" ry="13" stroke-width="1.6"/><path d="M55 30 v110 L110 190 L165 140 v-110" stroke-width="1.8" fill="#378ADD" fill-opacity="0.2"/><path d="M55 140 a55 13 0 0 0 110 0" stroke-width="1" stroke-dasharray="3 3"/><text x="178" y="90" fill="currentColor" stroke="none">wall 2 m tall</text><text x="178" y="172" fill="currentColor" stroke="none">cone 0.6 m deep</text><path d="M110 30 H165" stroke-dasharray="4 3"/><text x="138" y="22" text-anchor="middle" fill="currentColor" stroke="none">radius 1.1 m</text><path d="M270 70 L320 40 L370 70 Z" stroke-width="1.6" fill="#D9A441" fill-opacity="0.3"/><text x="320" y="92" text-anchor="middle" fill="currentColor" stroke="none">roof, 100 m²</text><path d="M300 76 Q300 120 175 28" stroke-width="1" stroke-dasharray="4 3"/></svg></figure>

The picture isn't to scale. What is the tank's capacity in litres?

## Run: the cone at the bottom

```step
stage: run
insight: "The cone-shaped bottom is one third of base area times depth, and it is added to the cylinder above it."
check: { type: number, q: "The cone's base is the circle of area $3.8$ m² and it is $0.6$ m deep. What is its volume? (m³, 2 decimal places)", answer: 0.76, tolerance: 0.02, explain: "One third of 3.8 × 0.6 = 0.76 m³." }
```

Remember from the silo: a cone holds a third of the cylinder that fits round it. The cylinder part of the tank is the base area $3.8$ m² times $2$ m.

## Investigate: add, or take away

```step
stage: investigate
insight: "A composite volume is found by adding parts or by taking a part away from a bigger solid, and both give the same answer. A hole is always taken away. Tom adds the hole."
tasks:
  - hint: ["Cylinder: base area 3.8 times 2 is 7.6.", "Then add the cone, 0.76."]
    check: { type: number, q: "What is the tank's total volume? (m³, 2 decimal places)", answer: 8.36, tolerance: 0.02, explain: "Cylinder 3.8 × 2 = 7.6 (more exactly 7.599), cone 0.76. Total 8.36 m³." }
    smaller:
      check: { type: "number", q: "What is $7.6 + 0.76$?", answer: 8.36, tolerance: 0.005, explain: "7.6 + 0.76 = 8.36." }
  - check:
      type: bug
      code: "working.txt#tom"
      text: "Tom finds the volume of concrete in a block with a hole through it. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: hole-added
      explain: "Line 4: a hole has no concrete in it. Tom added the hole's 1570 cm³ instead of taking it away."
  - check:
      type: reasoning
      paper: true
      q: "A pool is 12 m long and 6 m wide. The first 8 m is 1 m deep and the last 4 m is 2.5 m deep (made up for the task). What is its volume? (m³) Find it by adding two boxes, then check it by taking one box away from a bigger one."
      steps:
        - ["$V = 8 \\times 6 \\times 1 + 4 \\times 6 \\times 2.5$", "add: a shallow box and a deep box"]
        - ["$V = 48 + 60 = 108$", "the total"]
        - ["$12 \\times 6 \\times 2.5 - 8 \\times 6 \\times 1.5 = 180 - 72 = 108$", "check: a big box as deep as the deep end, minus the missing water"]
      answer: "108"
      answerLabel: "Volume (m³)"
      feedback:
        - ["180", "That is the whole pool as deep as the deep end. Take the missing water away."]
        - ["48", "That is only the shallow part. The deep part holds water too."]
      criteria:
        - "I found the volume by adding two boxes."
        - "I checked it by taking a box away from a bigger one."
        - "Both ways gave the same number."
      explain: "Adding: 48 + 60 = 108 m³. Taking away: 180 − 72 = 108 m³. The same, so I can trust it."
```

### The whole tank

Add the cylinder and the cone, and keep the units in cubic metres.

### Find the mistake

Read Tom's working. A concrete block has a round hole drilled right through it.

### Two ways to see a pool

A pool is 10 m long and 5 m wide. The first 6 m is 1 m deep and the last 4 m is 2 m deep (made up for the task).

<figure class="situation" role="img" aria-label="Side view of a pool 10 metres long. The first 6 metres are 1 metre deep and the last 4 metres are 2 metres deep. It is 5 metres wide."><svg viewBox="0 0 380 140" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M30 30 V60 H210 V90 H330 V30 Z" stroke-width="1.8" fill="#378ADD" fill-opacity="0.25"/><text x="120" y="52" text-anchor="middle" fill="currentColor" stroke="none">6 m long, 1 m deep</text><text x="270" y="68" text-anchor="middle" fill="currentColor" stroke="none">4 m, 2 m deep</text><path d="M30 112 H330 M30 107 v10 M330 107 v10" stroke-width="1"/><text x="180" y="132" text-anchor="middle" fill="currentColor" stroke="none">10 m long, 5 m wide</text></svg></figure>

```worked
V = 6 \times 5 \times 1 + 4 \times 5 \times 2 :: Add: the shallow part is one box and the deep part is another.
V = 30 + 40 = 70 \text{ m}^3 :: The total.
V = 10 \times 5 \times 2 - 6 \times 5 \times 1 :: Take away: a big box as deep as the deep end, minus the box of missing water.
V = 100 - 30 = 70 \text{ m}^3 :: The same answer both ways.
```

Now try a bigger pool on paper: work it both ways, one step per line, then type the volume.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: a part-filled silo, a bigger roof for the tank, and a silo filled exactly to the join."
tasks:
  - hint: ["Grain only fills the cylinder, up to 4 m.", "Base area times 4."]
    check: { type: number, q: "The silo (radius $2$ m, wall $6$ m tall, cone roof) is filled with grain to $4$ m up the wall. How many cubic metres of grain? (1 decimal place, $\\pi \\approx 3.14$)", answer: 50.2, tolerance: 0.2, explain: "3.14 × 2² × 4 = 50.24 m³. The cone is empty." }
  - hint: ["The tank holds about 8360 litres.", "1 mm on 120 m² is 120 litres."]
    check: { type: number, q: "A different roof is $120$ m². The tank holds $8360$ litres. How many millimetres of rain fill it? (1 decimal place)", answer: 69.7, tolerance: 0.2, explain: "1 mm on 120 m² is 120 litres, so 8360 ÷ 120 = 69.7 mm." }
  - hint: ["Which solid is left to fill?", "A third of the cylinder that fits round the roof."]
    check: { type: number, q: "Edge case: the silo is filled exactly up to the join, where the cone starts. How many cubic metres of room are left in the roof? (1 decimal place, $\\pi \\approx 3.14$)", answer: 6.3, tolerance: 0.05, explain: "The roof cone is ⅓ × 3.14 × 2² × 1.5 = 6.28 m³." }
```

### Half-full silo

### A bigger roof

### Filled to the join

## Practise: composite volumes

```step
stage: practise
insight: "Adding blocks, taking a hole away, and the review of percentage error."
tasks:
  - check:
      type: number
      q: "A step: a block $3$ m long, $2$ m wide and $1$ m tall sits on a block $5$ m long, $2$ m wide and $0.5$ m tall. What is the total volume? (m³)"
      answer: 11
      explain: "3 × 2 × 1 = 6 and 5 × 2 × 0.5 = 5. Total 11 m³."
  - hint: ["Whole cylinder minus the hole.", "The hole's radius is 0.25 m."]
    check:
      type: number
      q: "A concrete pipe is $4$ m long, with an outer radius of $0.3$ m and a hole radius of $0.25$ m. What is the volume of concrete? (m³, 2 decimal places, $\\pi \\approx 3.14$)"
      answer: 0.35
      tolerance: 0.01
      explain: "3.14 × 0.3² × 4 = 1.1304 and 3.14 × 0.25² × 4 = 0.785. The difference is 0.3454, about 0.35 m³."
    smaller:
      check: { type: "number", q: "What is the volume of the whole outer cylinder, as if it were solid? (m³, 2 decimal places)", answer: 1.13, tolerance: 0.01, explain: "3.14 × 0.3² × 4 = 1.1304." }
  - check:
      type: number
      q: "Review: a student works out the tank's volume as $8.4$ m³ when the true value is $8.36$ m³. What is the percentage error? (%, 1 decimal place)"
      answer: 0.5
      tolerance: 0.05
      explain: "The absolute error is 0.04 m³. 0.04 ÷ 8.36 × 100 = 0.48%, about 0.5%."
```

### Steps

### The pipe

### Review

## Make: the tank, and what it assumes

```step
stage: make
insight: "A model is only as good as its assumptions. Write them down, calculate, then say which way each one pushes the answer."
tasks:
  - hint: ["Assumptions first: shape, walls, and the rain.", "1 mm on 100 m² is 100 litres."]
    check:
      type: reasoning
      paper: true
      q: "Use the tank (radius 1.1 m, wall height 2 m, cone bottom 0.6 m deep) and the 100 m² roof. How many millimetres of rain fill it from empty? On paper, write down at least three assumptions first, then your steps. (1 decimal place, $\\pi \\approx 3.14$)"
      steps:
        - ["Assume: a perfect cylinder and a perfect cone, walls with no thickness, filled to the brim, and every drop that lands on the roof reaches the tank.", "the model's assumptions"]
        - ["$V = 7.6 + 0.76 = 8.36 \\text{ m}^3 = 8360 \\text{ L}$", "the capacity in litres"]
        - ["$1 \\text{ mm on } 100 \\text{ m}^2 = 100 \\text{ L}$", "the Bureau's rule"]
        - ["$8360 \\div 100 = 83.6$", "the rain in millimetres"]
      answer: "83.6"
      answerLabel: "Rain (mm)"
      tolerance: 0.5
      feedback:
        - ["76", "That leaves the cone out. The cone holds water too."]
        - ["98.8", "That treats the cone as a full cylinder. It holds a third of that."]
        - ["836", "1 mm on 100 m² is 100 litres, so divide the litres by 100."]
      criteria:
        - "I wrote at least three assumptions before calculating."
        - "I added the cone to the cylinder."
        - "I changed cubic metres to litres before using the Bureau's rule."
      explain: "8360 litres ÷ 100 litres per millimetre is about 83.6 mm, if the model's assumptions hold."
  - check:
      type: question
      q: "A model treats the silo as a perfect cylinder topped by a perfect cone, filled to the very tip, and gets $81.6$ m³. Which assumption most likely makes this too big?"
      options:
        - "Grain doesn't fill the very tip of the cone, so the real amount is a bit less"
        - "A cone holds a third of its cylinder, so the model has left out two thirds"
        - "Grain is measured in cubic metres, which is too small a unit"
        - "Nothing: a model is an exact copy of the silo"
      answer: 0
      feedback:
        - null
        - "A third is correct for a cone. The model has used it properly."
        - "The unit is not an assumption: cubic metres are fine."
        - "A model simplifies the silo. That is why it needs assumptions."
      explain: "Grain doesn't pile into the very tip of the roof, and the walls are not perfect, so 81.6 m³ is the most the silo could hold."
  - check:
      type: question
      q: "The Bureau's rule of 1 litre for each millimetre on each square metre is approximate. Some rain is lost from a real roof. Compared with 83.6 mm, how much rain must really fall to fill the tank?"
      options:
        - "More, because some of the rain never reaches the tank"
        - "Less, because the tank is a cone"
        - "The same, because the model is exact"
        - "It can't be estimated"
      answer: 0
      feedback:
        - null
        - "The cone is already in the 8360 litres."
        - "The Bureau calls its rule approximate."
        - "It can be estimated: the real amount is somewhat more."
      explain: "If some rain is lost, more has to fall for 8360 litres to arrive."
```

### The tank, on paper

Back to the tank. Write your assumptions first, work it out on paper, then type your answer.

### The silo's assumptions

### Rain that is lost

**Also used in**

- **Pools and construction.** A pool with a deep end, a step, a dam wall: boxes and prisms added or taken away.
- **Tanks and silos.** Capacity questions always start with the shape, then the assumptions.
- **Measurement error.** How far out an answer could be when the sizes are only measured to the nearest unit.
