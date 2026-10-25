---
order: 13
unit: area
node: AC9M8M01 n2
uses: [AC9M8M01 n1]
title: Irregular shapes
summary: "A lake or a leaf has no formula. Lay a grid over it: count the full squares, add half the part squares, and multiply by the area of one square. A finer grid gives a better estimate; straight pieces round the edge estimate the perimeter."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How big is a lake? Councils, farmers and park rangers estimate areas like this from maps all the time, with a grid and some careful counting."
connection: fire-map
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8304
  url: http://127.0.0.1:8304/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: shapes.yml#explain, caption: "A lake on a grid of 1 km squares, with 8 straight pieces round its edge." }
explainClip:
  query: { code: "@shapes.yml#explain", fresh: 1, id: explain }
  caption: "Count, then refine"
  say: "Count the full squares, add half the part squares."
  clip:
    - caption: { text: "Green squares are full; orange ones are partly inside.", say: "Green squares are full. Orange ones are partly inside." }
    - click: Count the squares
    - expect: { selector: "#gsum", contains: "Estimate" }
    - wait: 1500
    - caption: { text: "A finer grid: more squares, a better estimate.", say: "A finer grid gives a better estimate." }
    - click: Finer grid
    - wait: 1600
---
An **irregular shape** has curved or uneven edges, so no formula fits. Estimate instead: lay a grid over it and count squares.

## Predict: only the full squares

```step
stage: predict
insight: "Committing to what counting only full squares gives shows whether they see that the edge squares hold area too."
check:
  type: predict
  q: "You count only the squares that are completely inside a lake. Is that the area, too little or too much?"
  options: ["Too little", "Too much", "Exactly the area"]
  actual: "Too little. The squares on the edge are partly inside the lake, and their parts are left out. Counting each as a half fixes most of that."
```

<figure class="situation" role="img" aria-label="A lake drawn over a grid of squares. The edge of the lake passes through some of the squares. The lake's area is a question mark."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M75 25 H275 M75 50 H275 M75 75 H275 M75 100 H275 M75 125 H275 M75 150 H275 M75 25 V150 M100 25 V150 M125 25 V150 M150 25 V150 M175 25 V150 M200 25 V150 M225 25 V150 M250 25 V150 M275 25 V150" stroke-opacity="0.3"/><path d="M110 70 C120 40 170 35 205 50 C250 60 255 105 220 125 C190 140 140 135 115 110 C100 95 100 80 110 70 Z" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="175" y="172" text-anchor="middle" fill="currentColor" stroke="none">area of the lake: ?</text></svg></figure>

Look at the squares the edge passes through.

## Run: count and refine

```step
stage: run
insight: "Counting on a coarse grid then a finer one shows the estimate settling as the squares shrink."
try: { playground: board, starter: "shapes.yml#run", height: 620 }
check: { type: board, text: "Count the squares, then make the grid finer. Was your prediction right? How much did the estimate change?", when: "c = 1 and g = 0.5", explain: "With a finer grid, the part squares cover less area in total, so the half-a-square guess matters less." }
```

**Count the squares** colours full squares green and part squares orange.

Here's what the counting was doing.

- **Area:** put a grid over the shape. Count the **full squares**, and count each **part square** as half (some are mostly in, some mostly out, so on average half). Multiply by the area of one square. A **finer grid** gives a closer estimate.
- **Perimeter:** join points on the edge with **straight pieces** and add their lengths. More, shorter pieces follow the curve more closely.

Always say how precise your estimate is ("about 25 km², to the nearest whole km²").

## Investigate: why half?

```step
stage: investigate
insight: "Part squares count as half because edges cut them at random (Sam counts them as whole); straight pieces always fall a little short of a curve."
tasks:
  - check:
      type: question
      q: "Why is each part square counted as half a square?"
      options: ["Some are mostly in and some mostly out, so on average about half is inside", "Because half of them are inside", "Because the grid is half a kilometre", "So the answer is smaller"]
      answer: 0
      feedback: [null, "It is about each square, not how many.", "The grid size does not decide this.", "It can make the estimate bigger or smaller than the full squares alone."]
      explain: "The edge cuts each part square somewhere: on average, half of it is inside."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam estimates his lake's area. Click the line where his method goes wrong."
      answer: 3
      fault: logic
      misconception: estimate-part-full
      explain: "Line 3: a square the edge passes through is only partly inside. Count each as half: 20 + 7 = 27 km²."
  - check:
      type: question
      q: "You estimate a curved edge with straight pieces between points on it. How does the estimate compare with the real perimeter?"
      options: ["A little shorter: a straight piece is the shortest way between its two points", "A little longer", "Exactly the same", "Twice as long"]
      answer: 0
      feedback: [null, "A curve between two points is longer than the straight line.", "Only for straight edges.", "Far too much."]
      explain: "Each straight piece cuts the corner of the curve, so the total is a little short; more pieces get closer."
```

### Half a square

### Find the mistake

Read Sam's working. Is every orange square all lake?

### Straight pieces

## Modify: closer estimates

```step
stage: modify
insight: "More pieces and finer grids close in on the true values; a different shape tests the method; the answer states its precision."
try: { playground: board, starter: "shapes.yml#run", height: 620 }
tasks:
  - starter: "shapes.yml#run"
    hint: "Watch the perimeter estimate as n grows."
    check: { type: board, text: "Use 32 straight pieces. Does the perimeter estimate get bigger or smaller?", when: "n = 32", explain: "It grows a little and settles: the pieces hug the curve more closely." }
  - starter: "shapes.yml#run"
    hint: ["Press Finer grid twice.", "Then Count the squares."]
    check: { type: board, text: "Use the finest grid (0.25 km squares) and count. How close is the estimate to the measured area?", when: "c = 1 and g = 0.25", explain: "The finest grid is within about 1 km² of the measured area." }
  - starter: "shapes.yml#leaf"
    check: { type: board, text: "Estimate the area of a leaf on a 0.5 cm grid.", when: "c = 1 and g = 0.5", explain: "Full squares plus half the part squares, times 0.25 cm² each." }
  - check:
      type: question
      q: "Your estimate on a 1 km grid is 26.5 km². How should you report it?"
      options: ["About 27 km² (to the nearest km²): the grid cannot be more precise", "26.500 km²", "Exactly 26.5 km²", "Between 0 and 100 km²"]
      answer: 0
      feedback: [null, "Extra decimal places claim a precision the grid does not have.", "It is an estimate, not exact.", "True, but far less useful than it could be."]
      explain: "A 1 km grid gives an estimate to about the nearest km²; say so."
```

### More pieces

### The finest grid

### A leaf

### Precision

## Practise: estimating

```step
stage: practise
insight: "The count rule with different square sizes, mixed; counting part squares as whole is the planted slip; the composite review keeps exact areas fresh."
tasks:
  - check:
      type: number
      q: "A shape covers 30 full squares and part of 12 more. Each square is 1 m². Estimate its area in m²."
      answer: 36
      tolerance: 0
      feedback:
        - ["42", "Part squares count as half each."]
      explain: "30 + 12 ÷ 2 = 36 m²."
  - check:
      type: number
      q: "On a grid of 0.5 m squares, a shape covers 40 full squares and part of 20 more. Estimate its area in m²."
      answer: 12.5
      tolerance: 0
      explain: "Each square is 0.5 × 0.5 = 0.25 m². (40 + 10) × 0.25 = 12.5 m²."
  - check:
      type: question
      q: "Which gives the best estimate of a pond's perimeter?"
      options: ["24 short straight pieces round its edge", "4 straight pieces round its edge", "Counting the squares inside it", "Multiplying its length by its width"]
      answer: 0
      feedback: [null, "Four pieces cut big corners off the curve.", "That estimates area, not perimeter.", "That is for rectangles' areas."]
      explain: "More, shorter pieces follow the curve more closely."
  - check:
      type: number
      q: "Review: a rectangle 8 m by 5 m has a 2 m by 2 m square cut from one corner. What is its area in m²?"
      answer: 36
      tolerance: 0
      explain: "8 × 5 − 2 × 2 = 40 − 4 = 36 m²."
```

### Count

### Half-metre squares

### Perimeter

### Review: composite shapes

## Make: an island

```step
stage: make
insight: "Estimating to a stated precision brings the counting method and the finer grid together."
try: { playground: board, starter: "shapes.yml#island", height: 620 }
hint: ["Count on each grid, coarsest first.", "The measured area appears on the finest grid."]
check: { type: board, text: "Estimate the island's area to within 2 km² of the measured area.", when: "c = 1 and g = 0.25 and e - t < 2 and t - e < 2", explain: "On the finest grid, full squares plus half the part squares lands within about 1 km²." }
```

Then write your estimate with its precision, and estimate the coastline with 32 pieces.

## Make: area of a fire, on paper

```step
stage: make
insight: "A map grid is read in metres and hectares, so one square's area comes first; the burnt area is the whole squares plus half the part squares."
hint: ["One square is 500 m by 500 m. How many hectares is that?", "Part squares count as half."]
check:
  type: reasoning
  paper: true
  q: "A map of a grassfire has a grid laid over it. Each square is 500 m by 500 m on the ground. The burnt area covers 14 whole squares and 10 part squares. Estimate the burnt area in hectares (1 hectare is 10 000 m²)."
  steps:
    - ["One square: $500 \\times 500 = 250\\,000$ m² $= 25$ ha", "a hectare is 10 000 m², and 250 000 ÷ 10 000 = 25"]
    - ["Squares: $14 + 10 \\div 2 = 19$", "count each part square as half"]
    - ["Area: $19 \\times 25 = 475$ ha", "the number of squares times the area of one square"]
  picks:
    - step: 2
      q: "How should the part squares be counted?"
      options:
        - "Each counts as half a square"
        - "Each counts as a whole square"
        - "Leave them out"
      answer: 0
      feedback: [null, "The fire only burnt part of each one, so whole squares count too much.", "That leaves out burnt ground, so the estimate is too small."]
  answer: "475"
  tolerance: 0
  feedback:
    - ["600", "That counted every part square as a whole one. Count each as half."]
    - ["350", "That left the part squares out. Count each as half."]
    - ["19", "That is the number of squares. Multiply by 25 ha for each one."]
  criteria:
    - "I worked out the area of one square before counting."
    - "I counted the part squares as half."
    - "I wrote my answer as an estimate (about 475 ha), not as exact."
  explain: "One square is 25 ha. 14 + 5 = 19 squares, so about 19 × 25 = 475 ha."
```

Do this one in your book, not on the screen. The fire and the grid are made up for the task. Real fires burn patchily and maps stretch a little, so the fire service's own figure will differ. Work out one square, count, multiply, and type the hectares.

**Also used in**

- **Fire and flood maps.** Emergency teams lay a grid over a map to estimate how much land is burnt or under water.
- **Lakes and islands.** The area of a lake or island is found by counting squares, with a finer grid for a closer estimate.
- **Satellite views.** A farm circle seen from above is a case where a formula is exact and no counting is needed.
