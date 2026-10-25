---
order: 12
unit: area
node: AC9M8M01 n1
title: Composite shapes
summary: "A composite shape is made of shapes you know. Cut it into pieces and add their areas, or see it as a big rectangle with pieces taken away; the area is the same either way. The perimeter is the distance round the outside."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "An L-shaped bedroom, a house front with a pointed roof, a photo frame: none is a single rectangle, but each is easy once you cut it up."
connection: l-shaped-floor
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8303
  url: http://127.0.0.1:8303/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: shapes.yml#explain-pic, caption: "A U-shape: the 12 m by 9 m rectangle is 108 m², and the gap is 4 m by 5 m, so the area is 108 − 20 = 88 m²." }
explainClip:
  query: { code: "@shapes.yml#explain", fresh: 1, id: explain }
  caption: "Two ways, one area"
  say: "Cut it up, or take a piece away. The area is the same."
  clip:
    - caption: { text: "An L-shaped room. Cut it up and down into two rectangles.", say: "Cut the L into two rectangles." }
    - click: Cut up and down
    - expect: { selector: "#gsum", contains: "18 + 15 = 33" }
    - wait: 1400
    - caption: { text: "Or: a big rectangle with a corner taken away.", say: "Or see a big rectangle, with a corner taken away." }
    - click: Take away from a rectangle
    - expect: { selector: "#gsum", contains: "= 33" }
    - wait: 1600
---
A **composite shape** is made of simple shapes joined together.

## Predict: an L-shaped room

```step
stage: predict
insight: "Committing to an area for an L-shape shows whether they split it or multiply the two outside lengths."
check:
  type: predict
  q: "An L-shaped room is 8 m wide and 6 m tall, with a 5 m by 3 m corner missing. What is its area?"
  options: ["33 m²", "48 m²", "28 m²", "18 m²"]
  actual: "33 m². The whole 8 by 6 rectangle is 48 m², and the missing corner is 15 m²: 48 − 15 = 33. (28 is the perimeter, in metres.)"
```

<figure class="situation" role="img" aria-label="An L-shaped room 8 metres wide and 6 metres tall, with a corner 5 metres wide and 3 metres deep missing from the top right. Its area is a question mark."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M95 30 L155 30 L155 90 L255 90 L255 150 L95 150 Z" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><rect x="155" y="30" width="100" height="60" stroke-dasharray="4 3"/><text x="205" y="64" text-anchor="middle" fill="currentColor" stroke="none">missing</text><text x="175" y="168" text-anchor="middle" fill="currentColor" stroke="none">8 m</text><text x="88" y="95" text-anchor="end" fill="currentColor" stroke="none">6 m</text><text x="205" y="22" text-anchor="middle" fill="currentColor" stroke="none">5 m</text><text x="262" y="64" text-anchor="start" fill="currentColor" stroke="none">3 m</text><text x="175" y="125" text-anchor="middle" fill="currentColor" stroke="none">area ? m²</text></svg></figure>

Sketch it first, then decide how you would find the area.

## Run: cut it up

```step
stage: run
insight: "Trying each way of cutting the same shape shows that every valid split, and take-away, gives the same area."
try: { playground: board, starter: "shapes.yml#run", height: 600 }
check: { type: board, text: "Try a cut, then the take-away. Do they all give the same area? Was your prediction right?", when: "k > 0 and A = 33", explain: "18 + 15, 24 + 9 and 48 − 15 all make 33 m²." }
```

Each button shows a different way to see the same shape.

Here's how to find the area of a shape like that:

1. **Cut** it into rectangles, triangles or other shapes you know, find each area and **add** them; or
2. see it as a **big rectangle** and **take away** the pieces that are missing.

Read every length you need from the diagram: a missing side is often the difference of two others. The **perimeter** is the total length round the outside, in units of length (m), not area (m²).

## Investigate: lengths and pieces

```step
stage: investigate
insight: "Missing lengths come from differences of others; each piece needs its own height (Ella uses the whole height twice); every method agrees."
tasks:
  - check:
      type: answer
      q: "The L-shape is 8 m along the bottom and 3 m along the top. How long is the step across in the middle?"
      answer: "5"
      feedback:
        - ["11", "The top and the step together make the bottom: 8 − 3."]
      explain: "The bottom (8 m) = the top (3 m) + the step: 8 − 3 = 5 m."
  - check:
      type: bug
      code: "working.txt#ella"
      text: "Ella finds the area of the L-shape. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: composite-wrong-height
      explain: "Line 4: the right piece is only 3 m tall, not 6 m. 5 × 3 = 15, so the total is 18 + 15 = 33 m²."
  - check:
      type: question
      q: "Ali cuts the L across, Bea cuts it up and down, and Cal takes a corner away from a rectangle. Who gets the right area?"
      options: ["All three, if each uses the right lengths", "Only Cal", "Only Ali and Bea", "None: you must use a formula for L-shapes"]
      answer: 0
      feedback: [null, "Cutting gives the same area too.", "Taking away gives the same area too.", "There is no special formula: an L is two rectangles."]
      explain: "The area does not depend on how you cut it, only on using each piece's own lengths."
```

### Missing lengths

Here is the routine.

```worked
\text{an L } 10 \text{ m by } 7 \text{ m, a } 6 \times 4 \text{ corner missing} :: A different L, as an example.
\text{pieces: } 4 \times 7 \text{ and } 6 \times 3 :: Cut into shapes you know, with each piece's own lengths.
28 + 18 = 46\ \text{m}^2 :: Add the pieces.
10 \times 7 - 6 \times 4 = 70 - 24 = 46\ \text{m}^2 :: Or: the big rectangle, take away the missing corner.
10 + 3 + 6 + 4 + 4 + 7 = 34\ \text{m} :: The perimeter adds every side, in metres.
```

Now find the step.

### Find the mistake

Read Ella's working. How tall is each piece?

### Three ways

## Modify: other shapes

```step
stage: modify
insight: "A U-shape is quickest by taking away, a house needs a triangle, and the perimeter needs missing sides first; units separate area from length."
try: { playground: board, starter: "shapes.yml#u-shape", height: 600 }
tasks:
  - starter: "shapes.yml#u-shape"
    hint: ["The rectangle around the U is 10 m by 8 m.", "The gap is 4 m wide and 5 m deep."]
    check: { type: board, text: "Find the area of the U-shape by taking away from a rectangle.", when: "k = 3 and A = 60", explain: "10 × 8 − 4 × 5 = 80 − 20 = 60 m²." }
  - starter: "shapes.yml#house"
    hint: ["Cut where the roof meets the walls.", "The roof is a triangle: half of base times height."]
    check: { type: board, text: "The front of a house: walls 4 m tall, the roof's top 7 m up. Cut it into a rectangle and a triangle.", when: "k = 1 and n = 2", explain: "Rectangle 8 × 4 = 32, triangle ½ × 8 × 3 = 12: 44 m²." }
  - starter: "shapes.yml#hidden"
    check:
      type: number
      q: "Two sides of the L are marked ?. Work them out, then find the perimeter in metres."
      answer: 28
      tolerance: 0
      explain: "The ? sides are 8 − 3 = 5 m and 6 − 3 = 3 m. Perimeter: 8 + 3 + 5 + 3 + 3 + 6 = 28 m."
  - check:
      type: question
      q: "A garden has an area of 33 and a perimeter of 28. Which units are right?"
      options: ["33 m² and 28 m", "33 m and 28 m²", "33 m² and 28 m²", "33 m and 28 m"]
      answer: 0
      feedback: [null, "Area counts squares; perimeter is a length.", "A perimeter is a length, not an area.", "An area counts squares, so it needs m²."]
      explain: "Area is in square units (m²); perimeter is a length (m)."
```

### Take away

### A house

### Missing sides

### Units

## Practise: composite shapes

```step
stage: practise
insight: "Adding a triangle, taking away a frame and a perimeter shortcut, mixed; using the whole height for a piece is the planted slip; the triangle review keeps half base times height fresh."
tasks:
  - check:
      type: number
      q: "A shape is a rectangle 10 cm by 4 cm with a triangle on top (base 10 cm, height 3 cm). What is its area in cm²?"
      answer: 55
      tolerance: 0
      explain: "10 × 4 + ½ × 10 × 3 = 40 + 15 = 55 cm²."
  - check:
      type: number
      q: "A photo frame is 30 cm by 20 cm on the outside, with a 24 cm by 14 cm hole for the photo. What is the frame's area in cm²?"
      answer: 264
      tolerance: 0
      explain: "30 × 20 − 24 × 14 = 600 − 336 = 264 cm²."
  - check:
      type: number
      q: "An L-shape fits exactly inside an 8 m by 6 m rectangle (one corner cut out). What is its perimeter in metres?"
      answer: 28
      tolerance: 0
      explain: "The steps in the L add up to the missing sides of the rectangle, so the perimeter is 8 + 6 + 8 + 6 = 28 m."
  - check:
      type: number
      q: "Review: what is the area of a triangle with base 6 cm and height 5 cm, in cm²?"
      answer: 15
      tolerance: 0
      explain: "½ × 6 × 5 = 15 cm²."
  - check:
      type: number
      q: "An L-shape is 10 m wide along the bottom and 7 m tall on the left. Its left part is 4 m wide; its right part is 6 m wide and only 3 m tall. What is its area in m²?"
      answer: 46
      tolerance: 0
      feedback:
        - ["70", "The right part is only 3 m tall: 6 × 3, not 6 × 7."]
      explain: "4 × 7 + 6 × 3 = 28 + 18 = 46 m²."
    smaller:
      check: { type: number, q: "Take the right part on its own: 6 m wide and 3 m tall. How many square metres is that part?", answer: 18, tolerance: 0, explain: "6 × 3 = 18 m². Now the left part, then add." }
```

### Rectangle and triangle

### A frame

### Perimeter shortcut

### Review: triangles

### Another L

## Make: design a garden

```step
stage: make
insight: "Choosing two lengths to hit a target area uses the decomposition in reverse."
try: { playground: board, starter: "shapes.yml#make", height: 600 }
hint: ["The left part is always 3 × 6 = 18 m².", "The right part must be 38 − 18 = 20 m²."]
check: { type: board, text: "Change a and b so the L-shaped garden has an area of 38 m².", when: "A = 38", explain: "18 + (a − 3) × b = 38, so (a − 3) × b = 20: a = 7 and b = 5, or a = 8 and b = 4." }
```

Then find your garden's perimeter, and say how many metres of edging it needs.

## Make: flooring and skirting, on paper

```step
stage: make
insight: "A living room that is a rectangle with a corner missing is quickest by taking away; flooring is an area and skirting is a perimeter, so they use different units."
hint: ["Find the area of the whole 7 by 6 rectangle first.", "The missing corner is not floor. What do you do with its area?"]
check:
  type: reasoning
  paper: true
  q: "A living room is an L-shape: 7 m along the bottom and 6 m up the left side, with a corner 4 m wide and 3 m deep missing from the top right. How many square metres of flooring cover it?"
  steps:
    - ["Whole rectangle: $7 \\times 6 = 42$ m²", "pretend the corner is there"]
    - ["Missing corner: $4 \\times 3 = 12$ m²", "this part is not floor"]
    - ["Floor: $42 - 12 = 30$ m²", "take the missing part away"]
    - ["Skirting board: $7 + 3 + 4 + 3 + 3 + 6 = 26$ m", "the perimeter adds every edge, in metres"]
  picks:
    - step: 3
      q: "Why take 12 m² away from 42 m²?"
      options:
        - "The corner is inside the 7 by 6 rectangle but is not floor"
        - "The corner is more floor, so it should be added"
        - "You always take the smaller number from the bigger"
      answer: 0
      feedback: [null, "The missing corner has no floor. Adding it would count floor that is not there.", "Which number is smaller is not the reason. Ask what the 12 m² is."]
  answer: "30"
  tolerance: 0
  feedback:
    - ["42", "That is the whole rectangle, with the missing corner counted."]
    - ["54", "That adds the corner. It has no floor, so take it away."]
    - ["26", "That is the skirting, a length in metres. Flooring is an area."]
  criteria:
    - "I wrote the area of the whole rectangle and the area of the missing corner."
    - "I took the corner away, and my answer is in m²."
    - "I found the skirting as a perimeter in m, not m²."
  explain: "7 × 6 − 4 × 3 = 42 − 12 = 30 m² of flooring. Skirting goes round the edge: 26 m."
```

<figure class="situation" role="img" aria-label="An L-shaped living room 7 metres along the bottom and 6 metres up the left side, with a corner 4 metres wide and 3 metres deep missing from the top right."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M105 30 L165 30 L165 90 L245 90 L245 150 L105 150 Z" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><rect x="165" y="30" width="80" height="60" stroke-dasharray="4 3"/><text x="205" y="64" text-anchor="middle" fill="currentColor" stroke="none">missing</text><text x="175" y="168" text-anchor="middle" fill="currentColor" stroke="none">7 m</text><text x="98" y="95" text-anchor="end" fill="currentColor" stroke="none">6 m</text><text x="205" y="22" text-anchor="middle" fill="currentColor" stroke="none">4 m</text><text x="252" y="64" text-anchor="start" fill="currentColor" stroke="none">3 m</text><text x="175" y="125" text-anchor="middle" fill="currentColor" stroke="none">flooring ? m²</text></svg></figure>

Do this one in your book, not on the screen. The room is made up for the task. A real job leaves out the doorways for the skirting and adds some for cutting waste. Write the big rectangle, take the corner away, and type the area.

**Also used in**

- **Building.** Flooring is sold by the square metre and skirting board by the metre.
- **Houses.** The front of a house is a rectangle with a triangle for the roof, and paint is bought by the area.
- **Maps.** A block of land with a corner cut off is a rectangle with a piece taken away.
