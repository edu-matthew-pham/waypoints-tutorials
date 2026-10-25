---
order: 29
unit: solids9
node: AC9M9M01 n2
uses: [AC9M9M01 n1, AC9M8M03 n1]
assumes: [AC9M9M01 n1]
connection: rainwater-tank
title: Volume of prisms and cylinders
summary: "A prism or a cylinder is the same layer, stacked. Its volume is the area of the base times the height: V = Ah, and for a cylinder V = πr²h."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How much water does a round rainwater tank hold?"
---
Rain falling on a roof runs into a tank. The Bureau of Meteorology says each millimetre of rain on each square metre gives about a litre ([Bureau of Meteorology](https://www.bom.gov.au/climate/how/faq-data.shtml), checked 25 October 2026). A tank is a cylinder with a radius of 1.1 m and a height of 2 m (made up for the task). How many litres can it hold? Have a guess, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A cylindrical rainwater tank, radius 1.1 metres and height 2 metres, shown as a stack of circular layers."><svg viewBox="0 0 360 170" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><ellipse cx="120" cy="30" rx="60" ry="14" stroke-width="1.8"/><path d="M60 30 v100 a60 14 0 0 0 120 0 v-100" stroke-width="1.8" fill="#378ADD" fill-opacity="0.2"/><path d="M60 60 a60 14 0 0 0 120 0 M60 90 a60 14 0 0 0 120 0 M60 120 a60 14 0 0 0 120 0" stroke-width="0.8" stroke-dasharray="3 3"/><text x="195" y="85" fill="currentColor" stroke="none">height 2 m</text><text x="82" y="165" fill="currentColor" stroke="none">radius 1.1 m</text></svg></figure>

## Predict: how much it holds

```step
stage: predict
insight: "Estimating the tank's volume shows whether students use the diameter, the radius or a full-size box."
check:
  type: predict
  q: "A tank is a cylinder with radius 1.1 m and height 2 m. About how many cubic metres does it hold?"
  options:
    - "About 7.6 m³"
    - "About 4.4 m³"
    - "About 2.4 m³"
    - "About 15 m³"
  actual: "About 7.6 m³. The base is a circle of area π × 1.1² ≈ 3.8 m², and the tank is 2 m tall. A box 2.2 m wide each way would hold 9.7 m³, a bit more than the round tank."
```

## Run: layers

```step
stage: run
insight: "Stacking layers of equal area gives V = base area × height."
check: { type: number, q: "The base of the tank is a circle of radius $1.1$ m. What is its area? (use $\\pi \\approx 3.14$; m², 2 decimal places)", answer: 3.8, tolerance: 0.02, explain: "3.14 × 1.1 × 1.1 = 3.80 m²." }
```

## Investigate: base times height

```step
stage: investigate
insight: "Volume is the base area times the height for any prism or cylinder, and the base's area depends on the radius, not the diameter."
tasks:
  - check:
      type: number
      q: "The base area is $3.8$ m² and the tank is $2$ m tall. What is its volume? (m³, 1 decimal place)"
      answer: 7.6
      tolerance: 0.1
      explain: "3.8 × 2 = 7.6 m³."
    smaller:
      check: { type: "number", q: "What is $3.8 \\times 2$?", answer: 7.6, tolerance: 0.01, explain: "3.8 × 2 = 7.6." }
  - check:
      type: number
      q: "$1$ m³ is $1000$ litres. How many litres does the tank hold? (to the nearest 100)"
      answer: 7600
      tolerance: 50
      explain: "7.6 × 1000 = 7600 L."
  - check:
      type: bug
      code: "working.txt#raj"
      text: "Raj finds the volume of a tank with diameter 2.2 m and height 2 m. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: diameter-as-radius
      explain: "Line 3: 2.2 m is the diameter. The formula needs the radius, which is 1.1 m."
```

### Base times height

```worked
V = A \times h :: Volume: base area times height.
A = \pi r^2 = 3.14 \times 1.1^2 = 3.8 :: The base is a circle.
V = 3.8 \times 2 = 7.6 \text{ m}^3 :: The cylinder's volume.
7.6 \times 1000 = 7600 \text{ L} :: 1 m³ = 1000 litres.
```

### Base area

### Find the mistake

Read Raj's working. Which line uses the diameter for the radius?

## Modify: other prisms

```step
stage: modify
insight: "The same V = Ah works for any prism; only the base changes."
tasks:
  - hint: ["The base is a triangle.", "½ × 6 × 4 = 12, then × 10."]
    check: { type: number, q: "A triangular prism has a triangular base with base $6$ and height $4$ (cm) and the prism is $10$ cm long. What is its volume? (cm³)", answer: 120, explain: "Base area ½ × 6 × 4 = 12, volume 12 × 10 = 120 cm³." }
  - hint: ["Radius is half the diameter.", "r = 1.5."]
    check: { type: number, q: "A cylinder has diameter $3$ cm and height $10$ cm. What is its volume? (cm³, nearest whole number, $\\pi \\approx 3.14$)", answer: 71, tolerance: 1, explain: "r = 1.5, so 3.14 × 1.5² × 10 = 70.65, about 71 cm³." }
  - hint: ["1 m³ = 1000 L.", "Use the volume you've found."]
    check: { type: question, q: "A tank holds $7.6$ m³. A roof of $100$ m² gets $76$ mm of rain, which gives $76 \\times 100 = 7600$ L. Does the tank fill, and is the result exact?", options: ["It just fills in theory, but real roofs lose some water, so it is approximate", "It overflows", "It is exactly full", "It can't be calculated"], answer: 0, feedback: [null, "7600 L is the tank's capacity, so no overflow.", "The BoM calls the figure approximate.", "It can be estimated."], explain: "1 mm of rain on 1 m² is about a litre (approximate). Some water is lost, so the tank is likely a little under full." }
```

### A triangular prism

### Diameter to radius

### Does the tank fill

## Practise: volume

```step
stage: practise
insight: "Base area times height for prisms and cylinders, with units."
tasks:
  - check:
      type: number
      q: "A box has base 4 cm by 5 cm and height 6 cm. What is its volume? (cm³)"
      answer: 120
      explain: "4 × 5 × 6 = 120."
  - check:
      type: number
      q: "A cylinder has radius 2 cm and height 5 cm. What is its volume? (cm³, 1 decimal place, $\\pi \\approx 3.14$)"
      answer: 62.8
      tolerance: 0.2
      explain: "3.14 × 4 × 5 = 62.8."
    smaller:
      check: { type: "number", q: "What is the area of the base, radius 2 cm? (use 3.14; cm²)", answer: 12.6, tolerance: 0.1, explain: "3.14 × 2 × 2 = 12.56." }
  - check:
      type: number
      q: "Review: a can has radius 3 cm and height 10 cm. What is its curved surface area? (cm², nearest whole number)"
      answer: 188
      tolerance: 1
      explain: "2 × 3.14 × 3 × 10 = 188.4."
```

### Box

### Cylinder

### Review

## Make: the tank

```step
stage: make
insight: "Returning to the tank: work out the capacity in litres and compare with a rainfall."
tasks:
  - hint: ["Base area × height.", "Then × 1000 to get litres."]
    check:
      type: reasoning
      paper: true
      q: "The tank has radius 1.1 m and height 2 m (made up for the task). How many litres can it hold? (nearest 100, $\\pi \\approx 3.14$)"
      steps:
        - ["$A = 3.14 \\times 1.1^2 = 3.8$", "the base area in m²"]
        - ["$V = 3.8 \\times 2 = 7.6$", "volume in m³"]
        - ["$7.6 \\times 1000 = 7600$", "litres"]
      answer: "7600"
      answerLabel: "Capacity (litres)"
      tolerance: 100
      feedback:
        - ["7.6", "That's cubic metres. Multiply by 1000 for litres."]
        - ["2.4", "That uses the diameter somewhere: check the radius."]
      criteria:
        - "I used the radius, not the diameter."
        - "I multiplied the base area by the height."
        - "I converted to litres."
      explain: "7.6 m³ is about 7600 L."
  - check:
      type: question
      q: "A roof of 80 m² catches 50 mm of rain. About how many litres is that?"
      options: ["About 4000 L", "About 130 L", "About 400 L", "About 40,000 L"]
      answer: 0
      feedback: [null, "That adds instead of multiplying.", "Each mm on each m² is about a litre: 80 × 50.", "That has a zero too many."]
      explain: "80 × 50 = 4000 L (approximate, as the Bureau says)."
```

### Capacity

### Rain on a roof

**Also used in**

- **Water and storage.** Tanks, pipes, silos and bottles are cylinders.
- **Cooking.** A tin's contents in millilitres: 1 cm³ is 1 mL.
- **Next lesson.** Problems that use surface area and volume together.
