---
order: 4
unit: volume
node: AC9M7M02 n1
uses: [AC9M7M01 n2]   # areas of rectangles and triangles, with units
title: Volume in layers
summary: "Fill a box with unit cubes layer by layer. Each layer has as many cubes as the base has squares, so the volume is the area of the base times the height: V = A × h. Volume is in cubic units, cm³."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How many sugar cubes fit in a box, how much water fills a fish tank, how much concrete for a path? All are volumes: how much space a solid takes up."
connection: concrete-path   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8276
  url: http://127.0.0.1:8276/index.html
  readySelector: "#sl-h"
  layout: full
explainPicture: { ref: prism.yml#explain-pic, caption: "Each layer is the 4 by 3 base: 12 cubes. 5 layers: $12 \\times 5 = 60$ cm³." }
explainClip:
  query: { code: "@prism.yml#explain", fresh: 1, id: explain }
  caption: "Layer on layer"
  say: "Volume is the base, layer on layer."
  clip:
    - caption: { text: "One layer covers the 4 by 3 base: 12 cubes.", say: "One layer covers the base: twelve cubes." }
    - wait: 1000
    - caption: { text: "Each new layer adds another 12.", say: "Each new layer adds another twelve." }
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - expect: { selector: "#gsum", contains: "= 60" }
    - wait: 600
    - caption: { text: "5 layers of 12: V = 12 × 5 = 60 cm³.", say: "Five layers of twelve: sixty cubic centimetres." }
    - wait: 1200
---
**Volume** is how much space a solid takes up, counted in unit cubes. A cube 1 cm along each edge is one **cubic centimetre**, 1 cm³.

## Predict: fill the box

```step
stage: predict
insight: "Committing to a count for a 4 by 3 by 5 box shows whether they picture it full of layers or count only the outside."
check:
  type: predict
  q: "A box is 4 cubes long, 3 cubes wide and 5 cubes high. How many cubes fill it?"
  options: ["60", "12", "94", "47"]
  actual: "60: 5 layers of 12. 12 is one layer; 94 counts the squares on all six outside faces, which is not the space inside."
```

<figure class="situation" role="img" aria-label="A box built of unit cubes: 4 cubes long, 3 cubes wide and 5 cubes high. The number of cubes that fill it is marked with a question mark."><svg viewBox="0 0 320 205" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><polygon points="65,175 165,175 165,50 65,50" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><polygon points="65,50 165,50 210,23 110,23" fill="#378ADD" fill-opacity="0.1" stroke="#185FA5"/><polygon points="165,175 210,148 210,23 165,50" fill="#378ADD" fill-opacity="0.1" stroke="#185FA5"/><line x1="90.0" y1="175" x2="90.0" y2="50" stroke="#185FA5" stroke-width="0.5"/><line x1="90.0" y1="50" x2="135.0" y2="23" stroke="#185FA5" stroke-width="0.5"/><line x1="115.0" y1="175" x2="115.0" y2="50" stroke="#185FA5" stroke-width="0.5"/><line x1="115.0" y1="50" x2="160.0" y2="23" stroke="#185FA5" stroke-width="0.5"/><line x1="140.0" y1="175" x2="140.0" y2="50" stroke="#185FA5" stroke-width="0.5"/><line x1="140.0" y1="50" x2="185.0" y2="23" stroke="#185FA5" stroke-width="0.5"/><line x1="65" y1="150.0" x2="165" y2="150.0" stroke="#185FA5" stroke-width="0.5"/><line x1="165" y1="150.0" x2="210" y2="123.0" stroke="#185FA5" stroke-width="0.5"/><line x1="65" y1="125.0" x2="165" y2="125.0" stroke="#185FA5" stroke-width="0.5"/><line x1="165" y1="125.0" x2="210" y2="98.0" stroke="#185FA5" stroke-width="0.5"/><line x1="65" y1="100.0" x2="165" y2="100.0" stroke="#185FA5" stroke-width="0.5"/><line x1="165" y1="100.0" x2="210" y2="73.0" stroke="#185FA5" stroke-width="0.5"/><line x1="65" y1="75.0" x2="165" y2="75.0" stroke="#185FA5" stroke-width="0.5"/><line x1="165" y1="75.0" x2="210" y2="48.0" stroke="#185FA5" stroke-width="0.5"/><line x1="180.0" y1="166.0" x2="180.0" y2="41.0" stroke="#185FA5" stroke-width="0.5"/><line x1="80.0" y1="41.0" x2="180.0" y2="41.0" stroke="#185FA5" stroke-width="0.5"/><line x1="195.0" y1="157.0" x2="195.0" y2="32.0" stroke="#185FA5" stroke-width="0.5"/><line x1="95.0" y1="32.0" x2="195.0" y2="32.0" stroke="#185FA5" stroke-width="0.5"/><text x="115" y="195" text-anchor="middle" fill="currentColor" stroke="none">4 long</text><text x="57" y="118" text-anchor="end" fill="currentColor" stroke="none">5 high</text><text x="225" y="150" text-anchor="start" fill="currentColor" stroke="none">3 wide</text><text x="225" y="100" text-anchor="start" fill="currentColor" stroke="none">? cubes</text></svg></figure>

How many cubes fit on the bottom? How many layers?

## Run: build it up

```step
stage: run
insight: "Building the box layer by layer shows each layer is the base area, so the volume is base area × number of layers."
try: { playground: board, starter: "prism.yml#run", height: 560 }
check: { type: board, text: "Build the box up to 5 layers. How many cubes in each layer, and in all? Was your prediction right?", when: "h = 5", explain: "12 in each layer (the 4 by 3 base), 5 layers: 60 cubes, 60 cm³." }
```

The top layer is orange. Count the cubes in it, then the layers.

Here's the rule the layers show.

A box (a **rectangular prism**; a **prism** is any solid with the same shape all the way through) fills up in layers. The bottom layer covers the base: a 4 cm by 3 cm base holds $4 \times 3 = 12$ cubes. Every layer above is the same, so the number of layers is the height:

$$V = \text{area of the base} \times \text{height} = A \times h$$

## Investigate: base times height

```step
stage: investigate
insight: "V = A × h, because every layer is a copy of the base; Finn counts the outside squares he can see, not the cubes that fill the box."
tasks:
  - check:
      type: answer
      q: "A box is 6 cm long, 2 cm wide and 3 cm high. What is its volume, in cm³?"
      answer: "36"
      feedback:
        - ["11", "That adds the lengths. Volume multiplies them."]
        - ["12", "That is one layer (6 × 2). How many layers?"]
      explain: "Base 6 × 2 = 12 cm², 3 layers: 12 × 3 = 36 cm³."
  - check:
      type: bug
      code: "working.txt#finn"
      text: "Finn counts the cubes that fill a box. Click the line where his method goes wrong."
      answer: 2
      fault: logic
      misconception: volume-visible-cubes
      explain: "Line 2: the squares you can see are only the outside. The box is full: 4 × 3 = 12 cubes in a layer, 2 layers: 24."
  - check:
      type: question
      q: "Why is the volume of a box the area of its base times its height?"
      options: ["Each layer has one cube for each square of the base, and there are as many layers as the height", "Because volume is always three numbers multiplied", "Because the base is the biggest face"]
      answer: 0
      feedback: [null, "That is true for boxes, but the reason is the layers: it also works for prisms with other bases.", "Any face can be the base, as long as the layers repeat it."]
      explain: "Each layer is the base (A cubes), and there are h layers: V = A × h."
```

### Layers

Here is the idea, then the routine.

```worked
4 \times 3 = 12 :: One layer covers the base: 12 cubes, as many as the base has squares.
12 \times 5 = 60 \text{ cm}^3 :: 5 layers of 12.
V = A \times h = l \times w \times h :: For a box, the base area is length × width.
V = 6 \times 2 \times 3 = 36 \text{ cm}^3 :: Volume is in cubic units: cm³.
```

Now try one: a 6 by 2 by 3 box.

### Find the mistake

Read Finn's method. Is the box hollow?

### Why it works

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: building a given volume, a base area given directly, a missing height (backwards), a decimal edge, then two boxes with the same volume and different shapes."
try: { playground: board, starter: "prism.yml#build", height: 560 }
tasks:
  - starter: "prism.yml#build"
    hint: ["2 layers, so each layer holds 12.", "Which base is 12 squares?"]
    check: { type: board, text: "Build a box with volume 24 cm³ that is 2 layers high.", when: "v = 24 and h = 2", explain: "Each layer is 12: a 4 by 3 or 6 by 2 base." }
  - check:
      type: answer
      q: "A prism has a base of area 20 cm² and height 7 cm. What is its volume, in cm³?"
      answer: "140"
      feedback:
        - ["27", "That adds. Each of the 7 layers is 20 cm³."]
      explain: "20 × 7 = 140 cm³."
  - check:
      type: answer
      q: "A box has volume 60 cm³ and a base 4 cm by 5 cm. How high is it, in cm?"
      answer: "3"
      feedback:
        - ["51", "That subtracts. How many layers of 20 make 60?"]
        - ["1200", "That multiplies. Divide the volume by the base area."]
      explain: "The base is 4 × 5 = 20 cm², and 60 ÷ 20 = 3 cm."
    smaller:
      check: { type: number, q: "The base is 4 cm by 5 cm. How many cubes fill one layer?", answer: 20, tolerance: 0, explain: "4 × 5 = 20 cubes in a layer. Now, how many layers of 20 make 60?" }
  - check:
      type: answer
      q: "A box is 2.5 cm long, 4 cm wide and 2 cm high. What is its volume, in cm³?"
      answer: "20"
      feedback:
        - ["8.5", "That adds."]
      explain: "2.5 × 4 = 10 cm², × 2 = 20 cm³."
  - check:
      type: question
      q: "Edge case: which box holds more: 1 cm by 1 cm by 24 cm, or 2 cm by 3 cm by 4 cm?"
      options: ["They hold the same: 24 cm³ each", "The 24 cm one: it is longer", "The 2 by 3 by 4 one: it is fatter"]
      answer: 0
      feedback: [null, "Long and thin can hold the same as short and wide.", "Work out both: 1 × 1 × 24 and 2 × 3 × 4."]
      explain: "1 × 1 × 24 = 24 and 2 × 3 × 4 = 24: the same volume, different shapes."
```

### Volume 24

Each task changes one thing.

### A base area

### Backwards: the height

### A decimal

### Same volume

## Practise: volume

```step
stage: practise
insight: "A cube, a box with units and a missing length, mixed; counting the outside is the planted slip; the review keeps triangle area fresh."
tasks:
  - check:
      type: answer
      q: "A cube has edges of 5 cm. What is its volume, in cm³?"
      answer: "125"
      feedback:
        - ["15", "That adds the edges."]
        - ["25", "That is one face. 5 layers of 25."]
      explain: "5 × 5 × 5 = 125 cm³."
  - check:
      type: question
      q: "A fish tank is 50 cm long, 20 cm wide and 30 cm high. What is its volume?"
      options: ["30 000 cm³", "100 cm³", "30 000 cm²", "1000 cm³"]
      answer: 0
      feedback: [null, "That adds the lengths.", "Volume is in cubic units: cm³.", "That is one layer, 50 × 20."]
      explain: "50 × 20 = 1000 cm² base, × 30 = 30 000 cm³."
  - check:
      type: answer
      q: "A box holds 48 cm³. Its base is 4 cm by 3 cm. How high is it, in cm?"
      answer: "4"
      feedback:
        - ["12", "12 cm² is the base. How many layers of 12 make 48?"]
      explain: "48 ÷ 12 = 4 cm."
  - check:
      type: answer
      q: "Review: a triangle has base 8 cm and height 3 cm. Its area, in cm²?"
      answer: "12"
      feedback:
        - ["24", "Halve it."]
      explain: "½ × 8 × 3 = 12 cm²."
```

### A cube

### Units

### Backwards

### Review: triangles

## Make: 36 cubes, stacked

```step
stage: make
insight: "Building a box with a set volume and more than one layer means finding a base and height that multiply to it."
try: { playground: board, starter: "prism.yml#make", height: 560 }
hint: ["Which numbers multiply to 36?", "Choose a height first, then a base that fits."]
check: { type: board, text: "Build a box with volume 36 cm³ that is more than one layer high.", when: "v = 36 and h > 1", explain: "For example 3 × 3 × 4, 6 × 3 × 2, 6 × 2 × 3 or 2 × 3 × 6." }
```

Then find another box with the same volume and a different height.

## Make: concrete for a path, on paper

```step
stage: make
insight: "A path is a thin slab: its top is one big layer and the thickness is the height, so V = A × h with all lengths in metres."
hint: ["Which face is one whole layer?", "Keep every length in metres: 0.1 m, not 10 cm."]
check:
  type: reasoning
  paper: true
  q: "A concrete path is 12 m long, 1.2 m wide and 0.1 m thick. How many cubic metres of concrete does it need?"
  steps:
    - ["The path is a thin slab: one layer is its top, 12 m by 1.2 m", "volume is layers of the base"]
    - ["$A = 12 \\times 1.2 = 14.4$ m²", "the area of the top"]
    - ["$V = 14.4 \\times 0.1 = 1.44$ m³", "the thickness, 0.1 m, is the height: how many metres of layers"]
  picks:
    - step: 3
      q: "Why is 0.1 m the height here?"
      options:
        - "The slab lies flat: its top is one layer, and 0.1 m is how deep it goes"
        - "It is the smallest number, so it must be the height"
        - "The height is always the last number in the question"
      answer: 0
      feedback: [null, "The size of a number is not the reason. The path lies flat, and 0.1 m is its depth.", "The order of the numbers does not decide it. What decides it is the shape: a flat slab with a top layer."]
  answer: "1.44"
  tolerance: 0
  feedback:
    - ["14.4", "That is the area of the top. Multiply by the thickness."]
    - ["144", "That uses 10 for the thickness. Keep every length in metres: 0.1 m."]
  criteria:
    - "I worked out the area of the top first."
    - "I used 0.1 m for the thickness, not 10."
    - "My answer is in m³."
  explain: "The top is 12 × 1.2 = 14.4 m², and the slab is 0.1 m thick: 14.4 × 0.1 = 1.44 m³. A supplier would add some for wastage and the reinforcing mesh."
```

Do this one in your book, not on the screen. The path is made up for the task. Write the top's area, then the volume, and type the answer.

**Also used in**

- **Concrete paths and slabs.** Concrete is ordered by the cubic metre. Suppliers add some for wastage and for the space the reinforcing mesh takes.
- **Garden soil.** A raised bed is a box of soil, sold by the cubic metre.
- **Packing.** A box of sugar cubes is layers of cubes: a base, then the number of layers.
