---
order: 28
unit: solids9
node: AC9M9M01 n1
uses: [AC9M8M03 n1, AC9M7M01 n1]
assumes: [AC9M8M03 n1]
connection: can-label
title: Surface area from nets
summary: "Unfold a prism or a cylinder into a net, find the area of every piece and add them. A cylinder's curved side unrolls into a rectangle as wide as the circumference."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How big is the paper label on a can of tomatoes? Unroll it and see."
---
Peel the label off a can and flatten it. What shape is it, and how big? Have a guess, and we'll come back to it at the end. (The can's size is made up for the task.)

<figure class="situation" role="img" aria-label="A can with radius 3 centimetres and height 10 centimetres, its label unrolled into a flat rectangle, and its two circular ends drawn separately."><svg viewBox="0 0 360 170" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><ellipse cx="60" cy="40" rx="30" ry="9" stroke-width="1.6"/><path d="M30 40 v80 a30 9 0 0 0 60 0 v-80" stroke-width="1.6"/><path d="M110 80 h30" stroke-width="1.4"/><path d="M134 74 l8 6 l-8 6" stroke-width="1.4"/><rect x="155" y="50" width="150" height="80" stroke-width="2" fill="#888780" fill-opacity="0.2"/><text x="195" y="94" fill="currentColor" stroke="none">label</text><text x="190" y="150" fill="currentColor" stroke="none">circumference</text><text x="310" y="94" fill="currentColor" stroke="none">10 cm</text><text x="20" y="150" fill="currentColor" stroke="none">r = 3 cm</text></svg></figure>

## Predict: the label

```step
stage: predict
insight: "Choosing the label's width shows whether students expect the curved side to be as wide as the circle's diameter or its circumference."
check:
  type: predict
  q: "A can has radius 3 cm and height 10 cm. The label wraps once all the way round. About how wide is the label when unrolled flat?"
  options:
    - "About 19 cm"
    - "About 6 cm"
    - "About 28 cm"
    - "About 10 cm"
  actual: "About 19 cm. The label goes once round the can, so its width is the circumference: 2 × π × 3 ≈ 18.8 cm. 6 cm is the diameter, which only goes across."
```

## Run: the circumference

```step
stage: run
insight: "The label's width is the circumference, 2πr, so its area is 2πr × h."
check: { type: number, q: "A can has radius $3$ cm. What is its circumference? (use $\\pi \\approx 3.14$; 1 decimal place)", answer: 18.8, tolerance: 0.1, explain: "2 × 3.14 × 3 = 18.84, about 18.8 cm." }
```

## Investigate: every face

```step
stage: investigate
insight: "Add the area of every piece of the net: the rectangle for the curved side, and the two circles for the ends."
tasks:
  - check:
      type: number
      q: "The label is a rectangle 18.8 cm by 10 cm. What is its area? (cm²)"
      answer: 188
      tolerance: 0.5
      explain: "18.8 × 10 = 188 cm²."
    smaller:
      check: { type: "number", q: "What is $18.8 \\times 10$?", answer: 188, tolerance: 0.01, explain: "18.8 × 10 = 188." }
  - check:
      type: number
      q: "Each end is a circle of radius 3 cm. What is the area of one circle? (use $\\pi \\approx 3.14$; cm², 1 decimal place)"
      answer: 28.3
      tolerance: 0.1
      explain: "3.14 × 3 × 3 = 28.26, about 28.3 cm²."
  - check:
      type: bug
      code: "working.txt#dee"
      text: "Dee finds the total surface area of the can. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: cylinder-forgets-ends
      explain: "Line 3: the can has two circular ends as well as the curved side. She forgot to add them."
```

### The net

```worked
\text{curved side} = 2\pi r \times h :: A rectangle as wide as the circumference.
2 \times 3.14 \times 3 \times 10 = 188.4 :: The label.
\text{two ends} = 2 \times \pi r^2 :: Two circles.
2 \times 3.14 \times 3^2 = 56.5 :: The lid and the base.
\text{total} = 188.4 + 56.5 = 244.9 \text{ cm}^2 :: All three pieces.
```

### Add every piece

### Find the mistake

Read Dee's working. Which line leaves out some of the surface?

## Modify: change the can

```step
stage: modify
insight: "Changing what is covered (no lid, a prism) tests that the net, not the formula, decides which pieces to add."
tasks:
  - hint: ["No lid: leave out one circle.", "Curved side plus one circle: 188.4 + 28.3."]
    check: { type: number, q: "A pencil holder is a can with no lid (radius $3$ cm, height $10$ cm). What is its outside surface area? (cm², nearest whole number)", answer: 217, tolerance: 1, explain: "188.4 + 28.3 = 216.7, about 217 cm²." }
  - hint: ["A triangular prism has two triangles and three rectangles.", "Triangles: half of 6 × 4 each."]
    check: { type: number, q: "A triangular prism has triangular ends with base $6$ and height $4$ (cm), and its three rectangular sides have total area $240$ cm². What is the area of the two triangular ends together? (cm²)", answer: 24, explain: "Each triangle is ½ × 6 × 4 = 12, so two make 24." }
  - hint: ["Count the faces.", "A box has six faces."]
    check: { type: number, q: "A closed box is $5$ cm by $3$ cm by $2$ cm. What is its surface area? (cm²)", answer: 62, explain: "2 × (5×3 + 5×2 + 3×2) = 2 × 31 = 62." }
```

### No lid

### A triangular prism

### A box

## Practise: total surface area

```step
stage: practise
insight: "Naming every face of the net and adding their areas."
tasks:
  - check:
      type: number
      q: "A cylinder has radius 2 cm and height 5 cm. What is the area of its curved side? (use $\\pi \\approx 3.14$; cm², 1 decimal place)"
      answer: 62.8
      tolerance: 0.1
      explain: "2 × 3.14 × 2 × 5 = 62.8."
  - check:
      type: number
      q: "What is the total surface area of that cylinder, with both ends? (cm², 1 decimal place)"
      answer: 87.9
      tolerance: 0.2
      explain: "62.8 + 2 × 3.14 × 4 = 62.8 + 25.1 = 87.9."
    smaller:
      check: { type: "number", q: "What is the area of one end, radius 2 cm? (use 3.14; cm²)", answer: 12.6, tolerance: 0.1, explain: "3.14 × 2 × 2 = 12.56." }
  - check:
      type: number
      q: "Review: scale factor 3 on a shape with area 4 cm². What is the new area? (cm²)"
      answer: 36
      explain: "4 × 3² = 36."
```

### Curved side

### Both ends

### Review

## Make: the label and the can

```step
stage: make
insight: "Returning to the label: the label's area is only part of the can's surface."
tasks:
  - hint: ["The label is the curved side.", "2πrh."]
    check:
      type: reasoning
      paper: true
      q: "A can has radius 3 cm and height 10 cm (made up for the task). How much paper is needed for the label, and how much of the can's total surface is that? (Give the label area in cm², use $\\pi \\approx 3.14$.)"
      steps:
        - ["width $= 2 \\times 3.14 \\times 3 = 18.84$", "the circumference"]
        - ["area $= 18.84 \\times 10 = 188.4$", "width times height"]
        - ["total $= 244.9$, so the label covers about three quarters", "188.4 ÷ 244.9"]
      answer: "188.4"
      answerLabel: "Label area (cm²)"
      tolerance: 0.5
      feedback:
        - ["244.9", "That is the whole can. The label is only the curved side."]
        - ["56.5", "That is the two ends. The label is the curved side."]
      criteria:
        - "I used the circumference for the label's width."
        - "I multiplied by the height."
        - "I compared with the total."
      explain: "Label: 188.4 cm². The whole can is 244.9 cm², so the label is about 77% of it."
  - check:
      type: question
      q: "A label has to overlap by 1 cm to be glued. How does that change the width?"
      options: ["It is 1 cm wider than the circumference", "It is the same", "It is 1 cm narrower", "It is the diameter"]
      answer: 0
      feedback: [null, "An overlap needs extra paper.", "An overlap adds paper.", "The diameter doesn't go round."]
      explain: "The paper has to go round the can and overlap a little."
```

### The label

### Overlap

**Also used in**

- **Packaging.** Boxes, tubes and tins are cut from flat sheets.
- **Painting and covering.** Surface area says how much paint or wrap you need.
- **Next lesson.** How much the can holds: its volume.
