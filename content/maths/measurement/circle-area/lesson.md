---
order: 16
unit: circles
node: AC9M8M03 n1
uses: [AC9M7M03 n3]
title: Area of a circle
summary: "Cut a circle into thin slices and lay them top to tail: they make a shape close to a rectangle, πr long and r high. So the area of a circle is A = πr². It is between 2r² and 4r², about 3.14 times r²."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How much pizza is in a pizza? Cut it into slices, lay them out top to tail, and a rectangle appears."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8307
  url: http://127.0.0.1:8307/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: circle.yml#explain-pic, caption: "24 slices of a circle of radius 3 cm, top to tail: nearly a rectangle 3π ≈ 9.42 cm long and 3 cm high, so about 28.3 cm²." }
explainClip:
  query: { code: "@circle.yml#explain", fresh: 1, id: explain }
  caption: "Slices into a rectangle"
  say: "Rearrange the slices, and a rectangle appears."
  clip:
    - caption: { text: "A circle cut into 8 slices.", say: "A circle cut into eight slices." }
    - wait: 800
    - caption: { text: "Lay them top to tail: a bumpy rectangle.", say: "Lay them top to tail." }
    - click: Rearrange the pieces
    - expect: { selector: "#gsum", contains: "πr × r" }
    - wait: 1000
    - caption: { text: "More slices: πr long, r high. A = πr².", say: "More slices. Pi r long, r high. Area is pi r squared." }
    - click: Make the number of pieces bigger
    - click: Make the number of pieces bigger
    - click: Make the number of pieces bigger
    - click: Make the number of pieces bigger
    - wait: 1600
---
A circle has no straight sides to multiply. How would you measure the space inside it?

## Predict: radius 3

```step
stage: predict
insight: "Committing to an area for radius 3 shows whether they reason between 2r² and 4r², or mix area with circumference."
check:
  type: predict
  q: "A circle has radius 3 cm. Which is closest to its area?"
  options: ["28 cm²", "19 cm²", "9 cm²", "36 cm²"]
  actual: "28 cm². It is between 2 × 9 = 18 and 4 × 9 = 36 cm²: about 3.14 × 9 = 28.3 cm². (19 cm² is close to the circumference, 18.8 cm, a length.)"
```

<figure class="situation" role="img" aria-label="A circle of radius 3 cm drawn inside a square of side 6 cm. Inside the circle: its area in square centimetres is a question mark."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="105" y="20" width="140" height="140" stroke-dasharray="4 3"/><circle cx="175" cy="90" r="70" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><line x1="175" y1="90" x2="245" y2="90"/><text x="210" y="83" text-anchor="middle" fill="currentColor" stroke="none">3 cm</text><text x="175" y="128" text-anchor="middle" fill="currentColor" stroke="none">area ? cm²</text></svg></figure>

Imagine the circle inside a square 6 cm by 6 cm.

## Run: slices into a rectangle

```step
stage: run
insight: "Rearranging more and more slices shows the shape approaching a rectangle πr by r, which gives A = πr²."
try: { playground: board, starter: "circle.yml#run", height: 600 }
check: { type: board, text: "Rearrange the pieces, then use at least 16 slices. Was your prediction right?", when: "k = 1 and n >= 16", explain: "The slices make a near-rectangle πr long and r high: A = πr × r = πr²." }
```

The slices you rearranged work like this.

Cut a circle into equal slices (sectors) and lay them out top to tail. Half the slices point up and half point down, so the shape is about **half the circumference** long ($\pi r$) and **one radius** high ($r$). The more slices, the closer it is to a rectangle. So

$$A = \pi r \times r = \pi r^2$$

A quick check: a circle fits inside a square of side $2r$ (area $4r^2$) and around a square of area $2r^2$, so its area is between $2r^2$ and $4r^2$: about $3.14 r^2$. Do not mix it up with the circumference, $C = 2\pi r$, which is a length.

## Investigate: why it works

```step
stage: investigate
insight: "The long side is half the circumference; area and circumference are different formulas (Jo uses 2πr); 2r² < A < 4r² is a check."
tasks:
  - check:
      type: question
      q: "Why is the rearranged shape πr long?"
      options: ["Half the slices' curved edges are along the bottom: half of the circumference 2πr", "Because the circle has radius r", "Because π is about 3", "Because there are n slices"]
      answer: 0
      feedback: [null, "The radius is the height.", "π comes from the circumference.", "The length does not depend on how many slices."]
      explain: "The curved edges of the slices make the circumference; half is on top, half on the bottom: πr each."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo finds the area of a circle of radius 5 cm. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: circle-area-circumference
      explain: "Line 2: 2πr is the circumference (a length). The area is πr² = 3.14 × 25 ≈ 78.5 cm²."
  - check:
      type: question
      q: "A circle has radius 5 cm. Why must its area be between 50 and 100 cm²?"
      options: ["It is more than the inside square (2r² = 50) and less than the outside square (4r² = 100)", "Because 5 × 10 = 50", "Because π is between 2 and 4 exactly", "Because the diameter is 10"]
      answer: 0
      feedback: [null, "That is not the reason.", "π is about 3.14; the squares give the bounds.", "The diameter helps draw the outside square, but not alone."]
      explain: "The outside square has side 2r (area 4r² = 100); the square on the diagonals has area 2r² = 50."
```

### The long side

### Find the mistake

Read Jo's working. Is 2πr an area or a length?

### A check with squares

## Modify: squares and sizes

```step
stage: modify
insight: "Comparing with squares, using the formula, and doubling the radius show how area grows with r²."
try: { playground: board, starter: "circle.yml#squares", height: 600 }
tasks:
  - starter: "circle.yml#squares"
    hint: "Set the radius to 4, then press Compare with squares."
    check: { type: board, text: "Compare a circle of radius 4 cm with the squares. Between which two areas is it?", when: "s = 1 and r = 4", explain: "Between 2 × 16 = 32 and 4 × 16 = 64 cm²; πr² ≈ 50.3 cm²." }
  - check:
      type: number
      q: "Find the area of a circle of radius 10 cm, in cm², to 1 decimal place."
      answer: 314.2
      tolerance: 0.2
      explain: "π × 10² = π × 100 ≈ 314.2 cm² (with 3.14: 314 cm²)."
  - check:
      type: question
      q: "The radius of a circle doubles. What happens to its area?"
      options: ["It becomes 4 times as big", "It doubles", "It becomes 3.14 times as big", "It stays the same"]
      answer: 0
      feedback: [null, "r is squared: 2r squared is 4r².", "π does not change.", "A bigger circle has more area."]
      explain: "π(2r)² = 4πr²: four times the area."
  - starter: "circle.yml#free"
    check: { type: board, text: "Rearrange 32 slices of a circle. How close is the shape to a rectangle?", when: "k = 1 and n = 32", explain: "With 32 slices the edges are nearly straight: the rectangle is πr by r." }
```

### Squares

### Radius 10

### Double the radius

### 32 slices

## Practise: circle areas

```step
stage: practise
insight: "Area from the radius or diameter and a formula choice, mixed; using 2πr for area is the planted slip; the circumference review keeps the other formula separate."
tasks:
  - check:
      type: number
      q: "Find the area of a circle of radius 7 cm, in cm², to 1 decimal place."
      answer: 153.9
      tolerance: 0.1
      explain: "π × 49 ≈ 153.9 cm² (with 3.14: 153.86)."
  - check:
      type: number
      q: "A circle has diameter 10 m. Find its area in m², to 1 decimal place."
      answer: 78.5
      tolerance: 0.1
      feedback:
        - ["314.2", "Use the radius, not the diameter: r = 5."]
      explain: "r = 5 m, so A = π × 25 ≈ 78.5 m²."
    smaller:
      check: { type: "number", q: "The circle is 10 m across. What's its radius, in m?", answer: 5, explain: "The radius is half the diameter: 5 m. Use 5 in the formula." }
  - check:
      type: question
      q: "Which formula gives the area of a circle?"
      options: ["A = πr²", "A = 2πr", "A = πd", "A = 2r²"]
      answer: 0
      feedback: [null, "That is the circumference.", "That is also the circumference.", "That is the inside square, smaller than the circle."]
      explain: "A = πr²; the circumference is C = 2πr = πd."
  - check:
      type: number
      q: "Review: find the circumference of a circle of radius 5 cm, in cm, to 1 decimal place."
      answer: 31.4
      tolerance: 0.05
      explain: "C = 2 × π × 5 ≈ 31.4 cm."
```

### Radius 7

### From the diameter

### The formula

### Review: circumference

## Make: an area of 50

```step
stage: make
insight: "Searching for a radius to hit an area uses πr² as a prediction before the board checks it."
try: { playground: board, starter: "circle.yml#free", height: 600 }
hint: ["πr² = 50, so r² is about 16.", "The square root of 16 is 4."]
check: { type: board, text: "Find the radius (in steps of 0.5 cm) whose area is closest to 50 cm².", when: "a > 49 and a < 51", explain: "r = 4: π × 16 ≈ 50.3 cm²." }
```

Then explain why the area is not 3.14 × 4 = 12.56.

## Make: a round table, on paper

```step
stage: make
insight: "A table top is measured across, which is the diameter; the formula needs the radius, so the key step is halving before squaring."
hint: ["The formula uses the radius. How far across is 1.2 m, and how far from the centre to the edge?", "Square the radius first, then multiply by 3.14."]
check:
  type: reasoning
  paper: true
  q: "A round table top is 1.2 m across and is to be varnished. What area of top is there, in m²? Use π ≈ 3.14 and give two decimal places."
  steps:
    - ["Across is the diameter, so $r = 1.2 \\div 2 = 0.6$ m", "the formula needs the radius, half the way across"]
    - ["$A = \\pi r^2 = 3.14 \\times 0.6^2 = 3.14 \\times 0.36$", "square the radius first: 0.6 × 0.6 = 0.36"]
    - ["$A \\approx 1.13$ m²", "area is in square metres"]
    - ["Check: between $2r^2 = 0.72$ and $4r^2 = 1.44$", "a circle is bigger than the inside square and smaller than the outside one"]
  picks:
    - step: 1
      q: "Why is the radius 0.6 and not 1.2?"
      options:
        - "1.2 m is the width across, so the radius is half of it"
        - "A radius is always less than a metre"
        - "The formula needs the diameter, so 1.2 is right"
      answer: 0
      feedback: [null, "A radius can be any length. This one is half the way across.", "A = πr² uses the radius. The width across is twice that."]
  answer: "1.13"
  tolerance: 0.01
  feedback:
    - ["4.52", "That uses 1.2 as the radius. 1.2 m is across: halve it first."]
    - ["3.77", "That is the circumference, a length. Area is π × r²."]
  criteria:
    - "I halved the width across to get the radius."
    - "I squared the radius before multiplying by π."
    - "I checked my area is between 2r² and 4r²."
  explain: "r = 0.6 m, so A = 3.14 × 0.36 ≈ 1.13 m², between 0.72 and 1.44."
```

Do this one in your book, not on the screen. The table is made up for the task. Write the radius, square it, multiply by 3.14, check it against the squares, and type the area.
