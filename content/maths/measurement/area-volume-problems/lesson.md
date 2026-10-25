---
order: 30
unit: solids9
node: AC9M9M01 n3
uses: [AC9M9M01 n1, AC9M9M01 n2]
assumes: [AC9M9M01 n2]
connection: can-design
title: Area and volume problems
summary: "Real problems use both: the volume says how much it holds and the surface area says how much material it needs. Choose the right measure, then check the units."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A can has to hold 375 mL. What shape uses the least metal, and why don't real cans look like that?"
---
A drinks company wants a can that holds 375 mL using as little metal as possible. A can's volume is fixed, but its shape isn't: it can be tall and thin or short and wide. Have a guess which uses least metal, and we'll come back to it at the end. (1 mL is 1 cm³.)

<figure class="situation" role="img" aria-label="Three cans of the same volume: one tall and thin, one medium, one short and wide."><svg viewBox="0 0 360 170" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-width="1.6" fill="#888780" fill-opacity="0.2"><path d="M40 40 v100 a20 6 0 0 0 40 0 v-100 a20 6 0 0 0 -40 0 z"/><path d="M130 70 v70 a30 8 0 0 0 60 0 v-70 a30 8 0 0 0 -60 0 z"/><path d="M240 100 v40 a45 10 0 0 0 90 0 v-40 a45 10 0 0 0 -90 0 z"/></g><text x="40" y="162" fill="currentColor" stroke="none">tall</text><text x="140" y="162" fill="currentColor" stroke="none">medium</text><text x="260" y="162" fill="currentColor" stroke="none">wide</text></svg></figure>

## Predict: which shape

```step
stage: predict
insight: "Choosing the can that uses least metal shows whether students think the tallest, the shortest or something in between wins."
check:
  type: predict
  q: "Three cans all hold 375 mL: one tall and thin, one medium, one short and wide. Which uses the least metal?"
  options:
    - "The medium one"
    - "The tall and thin one"
    - "The short and wide one"
    - "They all use the same"
  actual: "The medium one, with the height about the same as the width across the can. Tall and thin cans waste metal on the curved side, and short and wide ones on the ends."
```

## Run: try a few radii

```step
stage: run
insight: "For a fixed volume, the height follows from the radius: h = V ÷ (πr²). Then the surface area follows."
check: { type: number, q: "A can holds $375$ cm³ and has radius $4$ cm. What is its height? ($\\pi \\approx 3.14$; 1 decimal place)", answer: 7.5, tolerance: 0.1, explain: "375 ÷ (3.14 × 16) = 375 ÷ 50.24 = 7.46, about 7.5 cm." }
```

## Investigate: compare surface areas

```step
stage: investigate
insight: "Surface area is in square units and volume is in cubic units: always check the units match the question."
tasks:
  - check:
      type: number
      q: "A can of radius 4 cm and height 7.5 cm has total surface area $2\\pi r^2 + 2\\pi r h$. What is it? (cm², nearest whole number, $\\pi \\approx 3.14$)"
      answer: 289
      tolerance: 3
      explain: "2 × 3.14 × 16 + 2 × 3.14 × 4 × 7.5 = 100.5 + 188.4 = 288.9, about 289 cm²."
    smaller:
      check: { type: "number", q: "What is $2 \\times 3.14 \\times 16$? (1 decimal place)", answer: 100.5, tolerance: 0.1, explain: "2 × 3.14 × 16 = 100.48." }
  - check:
      type: question
      q: "A can with radius 3 cm and height 13.3 cm has surface area 306 cm². A can with radius 4 cm and height 7.5 cm has 289 cm². Both hold 375 mL. Which uses less metal?"
      options: ["The radius 4 cm can", "The radius 3 cm can", "They use the same", "Can't tell"]
      answer: 0
      feedback: [null, "306 is more than 289.", "The surface areas differ.", "Compare the numbers."]
      explain: "Less surface area means less metal: 289 < 306."
  - check:
      type: bug
      code: "working.txt#bea"
      text: "Bea compares two cans. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: units-area-volume-mixed
      explain: "Line 3: surface area is in cm², not cm³. Cubic units are for volume."
```

### Same volume, different shapes

```worked
V = \pi r^2 h = 375 :: The volume is fixed.
h = 375 \div (\pi r^2) :: Height from the radius.
r = 3 \Rightarrow h = 13.3, \; SA = 306 :: A tall can.
r = 4 \Rightarrow h = 7.5, \; SA = 289 :: A medium can.
r = 5 \Rightarrow h = 4.8, \; SA = 307 :: A wide can.
\text{least metal near } r \approx 3.9, \; h \approx 7.8 :: Height about the width.
```

### Which can

### Find the mistake

Read Bea's working. Which line has the wrong units?

## Modify: change the target

```step
stage: modify
insight: "Changing the size of the can, or the question, tests choosing surface area or volume for the job."
tasks:
  - hint: ["It is a covering question.", "Surface area."]
    check: { type: question, q: "You want to know how much paint covers a box. Do you need its volume or its surface area?", options: ["Surface area", "Volume", "Both", "Neither"], answer: 0, feedback: [null, "Paint covers the outside, which is an area.", "Only the outside is painted.", "Paint covers a surface."], explain: "Painting covers the outside: surface area, in square units." }
  - hint: ["It is a filling question.", "Volume."]
    check: { type: question, q: "You want to know how much a can holds. Volume or surface area?", options: ["Volume", "Surface area", "Both", "Neither"], answer: 0, feedback: [null, "Holding means the space inside.", "Only the inside space counts.", "Holding is about the space inside."], explain: "How much it holds is the volume, in cubic units." }
  - hint: ["Real cans must be stacked, held and printed.", "Height about the width is best for metal; real cans are often taller."]
    check: { type: question, q: "The least-metal can has its height about equal to its width. Real drink cans are taller. Why might that be?", options: ["Taller cans are easier to hold and stack, so metal isn't the only thing that matters", "The calculation is wrong", "Taller cans use less metal", "Real cans are the same shape"], answer: 0, feedback: [null, "The calculation is fine: the design has other goals.", "That is the opposite of what the table shows.", "They are taller than the minimum."], explain: "A model for one goal (least metal) ignores others: grip, stacking, labels and cost." }
```

### Paint a box

### Fill a can

### Why real cans differ

## Practise: choose the measure

```step
stage: practise
insight: "Choosing volume or surface area and giving the right units."
tasks:
  - check:
      type: number
      q: "A box is 3 cm by 4 cm by 5 cm. What is its volume? (cm³)"
      answer: 60
      explain: "3 × 4 × 5 = 60."
  - check:
      type: number
      q: "What is the total surface area of that box? (cm²)"
      answer: 94
      explain: "2 × (12 + 15 + 20) = 94."
    smaller:
      check: { type: "number", q: "What is $3 \\times 4 + 3 \\times 5 + 4 \\times 5$?", answer: 47, explain: "12 + 15 + 20 = 47." }
  - check:
      type: number
      q: "Review: a cylinder has radius 2 cm and height 5 cm. What is its volume? (cm³, $\\pi \\approx 3.14$)"
      answer: 62.8
      tolerance: 0.2
      explain: "3.14 × 4 × 5 = 62.8."
```

### Volume

### Surface area

### Review

## Make: design the can

```step
stage: make
insight: "Returning to the can: use the table to pick a radius and say what the design gives up."
tasks:
  - hint: ["Compare the surface areas from the table.", "Smaller area means less metal."]
    check:
      type: reasoning
      paper: true
      q: "Compare cans holding 375 cm³ with radius 3 cm (surface area 306 cm²), 4 cm (289 cm²) and 5 cm (307 cm²). Which radius uses the least metal, and how much less than the radius 5 cm can? (cm²)"
      steps:
        - ["$306, 289, 307$", "the three surface areas"]
        - ["least is $289$ at radius 4 cm", "smallest of the three"]
        - ["$307 - 289 = 18$", "the saving over radius 5"]
      answer: "18"
      answerLabel: "Metal saved (cm²)"
      tolerance: 0.5
      feedback:
        - ["289", "That's the least area. Find how much less than the radius 5 cm can."]
        - ["4", "That's the radius. Find the saving."]
      criteria:
        - "I compared all three areas."
        - "I took the difference."
        - "I gave the unit."
      explain: "307 − 289 = 18 cm² saved."
  - check:
      type: question
      q: "Why is a table of three radii not enough to be sure which is best?"
      options: ["The best radius could be between the ones tried", "Tables are always wrong", "Only one radius is allowed", "Surface area doesn't matter"]
      answer: 0
      feedback: [null, "A table is a fair start.", "Any radius could be used.", "It's the goal of the problem."]
      explain: "The true best is near r = 3.9, between 3 and 4. A finer table would show it."
```

### The best radius

### Is three enough

The can sizes are calculated for the task (π ≈ 3.14, 1 mL = 1 cm³).

**Also used in**

- **Packaging.** Less material means lower cost and less waste.
- **Engineering.** Pressure vessels and tanks balance material against capacity.
- **Next unit.** Measurement error: every measurement is an estimate.
