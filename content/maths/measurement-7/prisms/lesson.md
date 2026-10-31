---
order: 5
unit: volume
node: AC9M7M02 n2
uses: [AC9M7M01 n1]   # area of triangles
title: Prisms and capacity
summary: "Any right prism has the same shape all the way along: its cross-section. Volume = area of the cross-section × length, for triangles too (halve first). Capacity: 1 cm³ holds 1 mL, and 1000 cm³ is a litre."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A tent, a chocolate bar in a triangular box, a drink carton: how much do they hold? If the shape is the same all the way through, one rule finds them all."
connection: garden-bed-soil   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8277
  url: http://127.0.0.1:8277/index.html
  readySelector: "#sl-h"
  layout: full
explainPicture: { ref: prism.yml#explain-pic, caption: "The triangle is half of a 4 by 3 rectangle: 6 cm². 5 layers of it: $6 \\times 5 = 30$ cm³." }
explainClip:
  query: { code: "@prism.yml#explain", fresh: 1, id: explain }
  caption: "The same all the way along"
  say: "A prism repeats its cross-section."
  clip:
    - caption: { text: "The triangle end: half of 4 × 3, so 6 cm².", say: "The triangle end is half of four by three: six square centimetres." }
    - wait: 1200
    - caption: { text: "Each layer is another 6 cm³.", say: "Each layer adds another six." }
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - expect: { selector: "#gsum", contains: "= 30" }
    - wait: 600
    - caption: { text: "V = 6 × 5 = 30 cm³.", say: "Six times five: thirty cubic centimetres." }
    - wait: 1200
---
A **right prism** has the same shape all the way through, like a loaf of bread: cut it anywhere, straight across, and you get the same slice. That slice is the **cross-section**. A box has a rectangle cross-section; a **triangular prism** (a tent, a triangular chocolate box) has a triangle.

## Predict: a triangular prism

```step
stage: predict
insight: "Committing to a volume for a triangular prism shows whether they halve for the triangle or multiply the three lengths as for a box."
check:
  type: predict
  q: "A prism's triangle end is half of a 4 cm by 3 cm rectangle. The prism is 5 cm long. What is its volume?"
  options: ["30 cm³", "60 cm³", "12 cm³", "6 cm³"]
  actual: "30 cm³. The triangle is ½ × 4 × 3 = 6 cm², and 5 layers of 6 is 30. 60 is the whole box; 6 is one layer."
```

<figure class="situation" role="img" aria-label="A triangular prism lying on its side. The triangle at the end has sides of 4 centimetres and 3 centimetres at a right angle. The prism is 5 centimetres long. Its volume is marked with a question mark."><svg viewBox="0 0 300 200" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><polygon points="40,170 160,170 40,80" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><line x1="160" y1="170" x2="250" y2="120" stroke-width="1"/><line x1="40" y1="80" x2="130" y2="30" stroke-width="1"/><line x1="130" y1="30" x2="250" y2="120" stroke-width="1"/><line x1="40" y1="80" x2="160" y2="170" stroke-width="1"/><line x1="40" y1="170" x2="130" y2="120" stroke-width="0.8" stroke-dasharray="4 3"/><line x1="130" y1="120" x2="250" y2="120" stroke-width="0.8" stroke-dasharray="4 3"/><line x1="130" y1="120" x2="130" y2="30" stroke-width="0.8" stroke-dasharray="4 3"/><text x="100" y="190" text-anchor="middle" fill="currentColor" stroke="none">4 cm</text><text x="32" y="130" text-anchor="end" fill="currentColor" stroke="none">3 cm</text><text x="212" y="166" text-anchor="start" fill="currentColor" stroke="none">5 cm</text><text x="14" y="30" text-anchor="start" fill="currentColor" stroke="none">volume = ?</text></svg></figure>

What is the area of the triangle end?

## Run: build the prism

```step
stage: run
insight: "Building the triangular prism up shows each layer is the triangle's area, half of the matching box's layer."
try: { playground: board, starter: "prism.yml#run", height: 560 }
check: { type: board, text: "Build the prism up to 5 cm. What is each layer, and the whole volume? Was your prediction right?", when: "h = 5", explain: "Each layer is the triangle, 6 cm². 5 layers: 30 cm³, half of the 4 by 3 by 5 box." }
```

The board stands the prism on its triangle end, so its length points up (h on the board). The orange triangle is the cross-section: half of a 4 by 3 rectangle, cut along its diagonal.

Here's why the layers give the volume.

The layer idea works for every prism. Each layer is the cross-section, and the layers go all the way along:

$$V = \text{area of the cross-section} \times \text{length}$$

Volume and **capacity** (how much a container holds) are linked: 1 cm³ holds 1 millilitre, so 1000 cm³ holds 1 litre.

## Investigate: cross-section times length

```step
stage: investigate
insight: "V = cross-section area × length; Lena forgets the triangle's half. The cross-section is the face that repeats all the way along, not the biggest face."
tasks:
  - check:
      type: answer
      q: "A prism's cross-section is a triangle with base 6 cm and height 4 cm. The prism is 10 cm long. What is its volume, in cm³?"
      answer: "120"
      feedback:
        - ["240", "Halve the triangle: ½ × 6 × 4 = 12."]
        - ["20", "That adds the lengths."]
      explain: "½ × 6 × 4 = 12 cm², × 10 = 120 cm³."
  - check:
      type: bug
      code: "working.txt#lena"
      text: "Lena finds how much air is inside a tent. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: triangle-no-half
      explain: "Line 2: the end is a triangle, so halve: ½ × 2 × 1.5 = 1.5 m². Volume = 1.5 × 3 = 4.5 m³."
  - check:
      type: question
      q: "How do you find a prism's cross-section?"
      options: ["It is the face that is the same shape all the way along, like a slice of bread", "It is always the face it stands on", "It is the biggest face"]
      answer: 0
      feedback: [null, "A tent stands on a rectangle, but its cross-section is the triangle end.", "The biggest face of a tent is a sloping rectangle; the slices are triangles."]
      explain: "Cut straight across anywhere: the cross-section is what every slice looks like."
```

### Any prism

Here is the rule for any prism, and capacity.

```worked
A = \tfrac{1}{2} \times 6 \times 4 = 12 \text{ cm}^2 :: Find the area of the cross-section (a triangle: halve).
V = 12 \times 10 = 120 \text{ cm}^3 :: Times the length: one layer of 12 for each centimetre.
120 \text{ cm}^3 = 120 \text{ mL} :: Capacity: 1 cm³ holds 1 mL.
1000 \text{ cm}^3 = 1 \text{ L} :: 1000 mL is a litre: a 10 cm cube holds 1 L.
```

Now try one: a triangle end with base 6 cm and height 4 cm, 10 cm long.

### Find the mistake

Read Lena's working. What shape is the tent's end?

### The cross-section

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a 1 litre box on the board, cm³ to litres, a carton in mL, a parallelogram cross-section, then a prism standing differently."
try: { playground: board, starter: "prism.yml#litre", height: 600 }
tasks:
  - starter: "prism.yml#litre"
    hint: ["1 L = 1000 cm³.", "Try the same number for all three lengths."]
    check: { type: board, text: "Make a box that holds exactly 1 litre.", when: "v = 1000", explain: "10 × 10 × 10 = 1000 cm³ = 1000 mL = 1 L." }
  - check:
      type: answer
      q: "A container holds 2500 cm³. How many litres is that?"
      answer: "2.5"
      feedback:
        - ["2500", "That is millilitres. 1000 mL = 1 L."]
        - ["25", "Divide by 1000, not 100."]
      explain: "2500 ÷ 1000 = 2.5 L."
  - check:
      type: answer
      q: "A drink carton is 6 cm by 6 cm by 20 cm. How many millilitres does it hold?"
      answer: "720"
      feedback:
        - ["32", "That adds the lengths."]
      explain: "6 × 6 × 20 = 720 cm³ = 720 mL."
  - check:
      type: answer
      q: "A prism's cross-section is a parallelogram with base 5 cm and height 2 cm. The prism is 4 cm long. Volume, in cm³?"
      answer: "40"
      feedback:
        - ["20", "A parallelogram is not halved: 5 × 2 = 10 cm²."]
      explain: "5 × 2 = 10 cm², × 4 = 40 cm³."
  - check:
      type: question
      q: "Edge case: a triangular prism lies on its side, with its triangle end facing you. Does its volume change?"
      options: ["No: the cross-section and the length are the same", "Yes: it is now shorter", "Yes: the base is now a rectangle"]
      answer: 0
      feedback: [null, "Turning it does not change the space inside.", "It stands on a rectangle, but the cross-section is still the triangle."]
      explain: "However it is turned, V = area of the triangle × length."
```

### One litre

Each task changes one thing.

### Litres

### Millilitres

### A parallelogram

### Turned over

## Practise: prisms

```step
stage: practise
insight: "A triangular prism, a capacity conversion and a box in mL, mixed; forgetting the half is the planted slip; the review keeps units fresh."
tasks:
  - check:
      type: answer
      q: "A prism's cross-section has area 15 cm² and the prism is 8 cm long. Volume, in cm³?"
      answer: "120"
      feedback:
        - ["23", "That adds."]
      explain: "15 × 8 = 120 cm³."
  - check:
      type: answer
      q: "How many cm³ is 3 litres?"
      answer: "3000"
      feedback:
        - ["300", "1 L = 1000 cm³."]
      explain: "3 × 1000 = 3000 cm³."
  - check:
      type: answer
      q: "A tent's triangle end has base 3 m and height 2 m. It is 4 m long. Volume, in m³?"
      answer: "12"
      feedback:
        - ["24", "Halve the triangle: ½ × 3 × 2 = 3 m²."]
      explain: "3 m² × 4 = 12 m³."
  - check:
      type: answer
      q: "Review: write 250 cm in metres."
      answer: "2.5"
      feedback:
        - ["25", "100 cm = 1 m, so divide by 100."]
      explain: "250 ÷ 100 = 2.5 m."
```

### Cross-section given

### Litres to cm³

### A tent

### Review: units

## Make: a 24 cm³ wedge

```step
stage: make
insight: "Building a triangular prism with a set volume means the box it is half of must be 48: the halving works backwards."
try: { playground: board, starter: "prism.yml#make", height: 580 }
hint: ["The triangular prism is half a box. What volume must the box be?", "l × w × h = 48."]
check: { type: board, text: "Build a triangular prism with volume 24 cm³.", when: "v = 24", explain: "l × w × h must be 48: for example 4, 3, 4 or 6, 2, 4 or 4, 4, 3." }
```

Then find one that is as long as possible.

## Make: soil for a corner bed, on paper

```step
stage: make
insight: "A triangular bed is a triangular prism lying flat: the floor is the cross-section and the soil depth is the length, so halve first."
hint: ["Which shape stays the same all the way down through the soil?", "The two sides at the right angle are the triangle's base and height."]
check:
  type: reasoning
  paper: true
  q: "A triangular garden bed fits into a corner. Its two straight sides at the right angle are 2 m and 1.5 m long, and it is filled with soil 0.4 m deep. How many cubic metres of soil fill it to the top?"
  steps:
    - ["The bed is a triangular prism: the floor is the triangle, and it is 0.4 m deep", "the same shape all the way down, so cross-section × depth"]
    - ["Triangle $= \\tfrac{1}{2} \\times 2 \\times 1.5 = 1.5$ m²", "the two sides at the right angle are the base and height"]
    - ["$V = 1.5 \\times 0.4 = 0.6$ m³", "cross-section area × depth"]
  picks:
    - step: 2
      q: "Why is the floor 1.5 m² and not 3 m²?"
      options:
        - "A triangle is half of the 2 × 1.5 rectangle"
        - "Soil settles, so you take some off"
        - "The bed is only 1.5 m wide"
      answer: 0
      feedback: [null, "Settling is a reason to order a little extra, not to change the floor's area.", "Both sides count: the triangle is cut from a 2 m by 1.5 m rectangle."]
  answer: "0.6"
  tolerance: 0
  feedback:
    - ["1.2", "That treats the bed as a rectangle, 2 × 1.5 × 0.4. The floor is a triangle: halve."]
    - ["1.5", "That is the area of the floor. Multiply by the depth."]
  criteria:
    - "I found the shape that repeats all the way down, and halved for the triangle."
    - "My lengths are all in metres."
    - "My answer is in m³."
  explain: "The triangle floor is ½ × 2 × 1.5 = 1.5 m². With soil 0.4 m deep, V = 1.5 × 0.4 = 0.6 m³. Suppliers suggest ordering a little extra, because soil settles."
```

Do this one in your book, not on the screen. The bed is made up for the task. Sketch the triangle, work out the soil in cubic metres, and type it.

**Also used in**

- **Garden beds.** Soil is sold by the cubic metre, and suppliers suggest ordering a little extra because it settles.
- **Concrete paths.** A path is a long, thin slab: its cross-section times its length, ordered in cubic metres.
- **Tents.** The space inside a triangular tent is a triangular prism.
