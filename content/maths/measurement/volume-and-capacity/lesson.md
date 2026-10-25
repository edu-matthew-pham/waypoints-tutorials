---
order: 14
unit: volume
node: AC9M8M02 n1
title: Volume and capacity
summary: "Volume measures space in cubic units; capacity measures how much a container holds. 1 cm³ holds 1 mL, 1000 cm³ holds 1 L, and 1 m³ holds 1000 L. A cubic metre is 100 × 100 × 100 = 1 000 000 cm³, not 100."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How much water does a box hold, and how do you get it from the box's size? A cubic metre of water weighs about a tonne, but how do litres and cubic centimetres fit together?"
connection: rainwater-tank   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8305
  url: http://127.0.0.1:8305/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: prism.yml#explain-pic, caption: "A 10 cm cube: 10 × 10 × 10 = 1000 cm³, which holds exactly 1 L." }
explainClip:
  query: { code: "@prism.yml#explain", fresh: 1, id: explain }
  caption: "A litre is a 10 cm cube"
  say: "Fill a ten centimetre cube, layer by layer."
  clip:
    - caption: { text: "A 10 cm by 10 cm base: each layer is 100 cm³, so 100 mL.", say: "Each layer is one hundred cubic centimetres: one hundred millilitres." }
    - wait: 1000
    - caption: { text: "Ten layers make 1000 cm³: exactly 1 litre.", say: "Ten layers make one thousand: exactly one litre." }
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - click: Make the height bigger
    - expect: { selector: "#gsum", contains: "1 L" }
    - wait: 1500
---
**Volume** is the space a solid takes up, in cubic units (cm³, m³). **Capacity** is how much a container holds, in millilitres (mL), litres (L) or kilolitres (kL). How do the two fit together?

## Predict: a 10 cm cube

```step
stage: predict
insight: "Committing to how much a 10 cm cube holds shows whether they link cm³ to mL, and the size of a litre."
check:
  type: predict
  q: "A box is 10 cm by 10 cm by 10 cm. How much water does it hold?"
  options: ["1 L", "100 mL", "10 L", "1000 L"]
  actual: "1 L. 10 × 10 × 10 = 1000 cm³, and each cm³ holds 1 mL: 1000 mL = 1 L."
```

<figure class="situation" role="img" aria-label="A cube-shaped box 10 centimetres along every edge. How much water it holds is marked with a question mark."><svg viewBox="0 0 300 200" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><polygon points="50,170 145,170 145,75 50,75" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><polygon points="50,75 145,75 190,45 95,45" fill="#378ADD" fill-opacity="0.1" stroke="#185FA5"/><polygon points="145,170 190,140 190,45 145,75" fill="#378ADD" fill-opacity="0.1" stroke="#185FA5"/><text x="97" y="189" text-anchor="middle" fill="currentColor" stroke="none">10 cm</text><text x="42" y="125" text-anchor="end" fill="currentColor" stroke="none">10 cm</text><text x="212" y="140" text-anchor="start" fill="currentColor" stroke="none">10 cm</text><text x="150" y="30" text-anchor="start" fill="currentColor" stroke="none">holds ? of water</text></svg></figure>

How many cubic centimetres is it, and how many millilitres is that?

## Run: fill a box

```step
stage: run
insight: "Building boxes and reading their volume and capacity side by side shows cm³ and mL are the same number."
try: { playground: board, starter: "prism.yml#run", height: 600 }
check: { type: board, text: "Make a box that holds exactly 1 L. Was your prediction right? Could a box with different lengths also hold 1 L?", when: "v = 1000", explain: "10 × 10 × 10 = 1000 cm³. A 5 × 10 × 20 box (too long for this board) would hold 1 L too: any box of 1000 cm³ does." }
```

The panel gives the volume and the capacity together.

Here's how volume and capacity line up.

They link exactly:

| Volume | Capacity |
|---|---|
| 1 cm³ | 1 mL |
| 1000 cm³ (a 10 cm cube) | 1 L |
| 1 m³ | 1000 L = 1 kL |

A cubic metre is 100 cm × 100 cm × 100 cm = **1 000 000 cm³**: a length conversion is used three times, once for each direction.

Water links the units to mass too. A litre of water has a mass of about a kilogram, so a cubic metre of water, 1000 L, is about a tonne. (That is how the litre was first defined: from 1901 to 1964 it was "the volume occupied by a mass of 1 kilogram of pure water" at its greatest density, [BIPM, 1901](https://www.bipm.org/committees/cg/cgpm/3-1901/resolution-1).)

## Investigate: converting units

```step
stage: investigate
insight: "1 m³ = 1000 L; converting cubic units uses the length factor three times (Ravi uses it once); the unit should suit the context."
tasks:
  - check:
      type: number
      q: "How many litres does 1 m³ hold?"
      answer: 1000
      tolerance: 0
      explain: "1 m³ = 100 × 100 × 100 = 1 000 000 cm³ = 1 000 000 mL = 1000 L."
  - check:
      type: bug
      code: "working.txt#ravi"
      text: "Ravi works out how much a 2 m³ tank holds. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: cube-conversion
      explain: "Line 2: a cubic metre is 100 cm in each of three directions: 100 × 100 × 100 = 1 000 000 cm³. The tank holds 2000 L."
  - check:
      type: question
      q: "Which unit suits the capacity of a backyard swimming pool?"
      options: ["Kilolitres (or cubic metres)", "Millilitres", "Cubic centimetres", "Litres, to the nearest millilitre"]
      answer: 0
      feedback: [null, "Millions of them: far too small a unit.", "Tens of millions: far too small.", "A pool cannot be measured that precisely."]
      explain: "A backyard pool might hold something like 30 kilolitres (30 cubic metres), a size made up for the task."
```

### Cubic metres

### Find the mistake

Read Ravi's working. How many cm are in each direction of a cubic metre?

### Choosing units

## Modify: tanks and cartons

```step
stage: modify
insight: "Building a tank in metres, converting both ways, and the difference between cm and cm³."
try: { playground: board, starter: "prism.yml#tank", height: 600 }
tasks:
  - starter: "prism.yml#tank"
    hint: ["24 000 L is 24 m³.", "Try a base of 4 m by 3 m."]
    check: { type: board, text: "Make a water tank that holds 24 000 L.", when: "c = 24000", explain: "24 000 L = 24 m³: for example 4 m × 3 m × 2 m." }
  - check:
      type: number
      q: "A jug holds 2.5 L. How many cm³ is that?"
      answer: 2500
      tolerance: 0
      explain: "1 L = 1000 cm³, so 2.5 L = 2500 cm³."
  - check:
      type: number
      q: "A cup holds 350 mL. How many cm³ is that?"
      answer: 350
      tolerance: 0
      explain: "1 mL = 1 cm³, so 350 cm³."
  - check:
      type: question
      q: "Which of these is a volume?"
      options: ["12 cm³", "12 cm", "12 cm²", "12 kg"]
      answer: 0
      feedback: [null, "A length.", "An area.", "A mass."]
      explain: "Volume is in cubic units: cm³."
```

### A tank

### Litres to cm³

### Millilitres to cm³

### Which is a volume?

## Practise: volume and capacity

```step
stage: practise
insight: "Conversions both ways and a box's capacity, mixed; using 100 instead of 1 000 000 for m³ is the planted slip; the triangular prism review keeps base times height fresh."
tasks:
  - check:
      type: number
      q: "Write 4500 mL in litres."
      answer: 4.5
      tolerance: 0
      explain: "4500 ÷ 1000 = 4.5 L."
  - check:
      type: number
      q: "A container holds 0.6 m³. How many litres is that?"
      answer: 600
      tolerance: 0
      explain: "0.6 × 1000 = 600 L."
    smaller:
      check: { type: number, q: "A cubic metre is 100 cm long, 100 cm wide and 100 cm high. How many cm³ is that?", answer: 1000000, tolerance: 0, explain: "100 × 100 × 100 = 1 000 000 cm³, and a litre is 1000 of them. So how many litres in one cubic metre?" }
  - check:
      type: number
      q: "A box is 20 cm by 15 cm by 10 cm. How many litres does it hold?"
      answer: 3
      tolerance: 0
      explain: "20 × 15 × 10 = 3000 cm³ = 3000 mL = 3 L."
  - check:
      type: number
      q: "Review: a triangular prism has a right-triangle end with legs 3 cm and 4 cm, and is 10 cm long. What is its volume in cm³?"
      answer: 60
      tolerance: 0
      explain: "Base area ½ × 3 × 4 = 6 cm², times 10 = 60 cm³."
```

### mL to L

### m³ to L

### A box

### Review: triangular prisms

## Make: a juice carton

```step
stage: make
insight: "Designing to a capacity with a constraint uses volume and capacity together."
try: { playground: board, starter: "prism.yml#carton", height: 600 }
hint: ["600 mL = 600 cm³.", "Try a base of 10 cm by 6 cm."]
check: { type: board, text: "Design a carton that holds 600 mL, with a base that is not square (l more than w).", when: "c = 600 and l > w", explain: "For example 10 × 6 × 10, or 12 × 5 × 10." }
```

Then say which of your designs would fit best in a lunch box, and why.

## Make: a tank for the roof, on paper

```step
stage: make
insight: "Rain on a roof is a thin layer: 1 mm over 1 m² is 0.001 m³, which is 1 L. The tank's volume in m³ then becomes litres, and the two are compared."
hint: ["Find the rain in litres, then the tank in litres.", "1 mm of rain on 1 m² is 1 L; 1 m³ holds 1000 L."]
check:
  type: reasoning
  paper: true
  q: "A roof has an area of 80 m². In a storm 30 mm of rain falls on it, and all of it runs into an empty tank that is 1.5 m long, 1 m wide and 1.2 m high. By how many litres does the rain overflow the tank?"
  steps:
    - ["$80 \\times 30 = 2400$ L of rain", "1 mm of rain on 1 m² is 1 L"]
    - ["Tank: $1.5 \\times 1 \\times 1.2 = 1.8$ m³, and $1.8 \\times 1000 = 1800$ L", "1 m³ holds 1000 L"]
    - ["$2400 - 1800 = 600$ L", "rain minus what the tank holds"]
  picks:
    - step: 1
      q: "Why does 1 mm of rain on 1 m² make 1 L?"
      options:
        - "A layer 1 mm deep over 1 m² is 0.001 m³, and 0.001 m³ is 1 L"
        - "1 mm is the same as 1 mL"
        - "A litre is defined as a square metre of rain"
      answer: 0
      feedback: [null, "1 mm is a length and 1 mL is a volume. It is the layer's volume, 1 m² × 0.001 m, that equals 1 L.", "A litre is 1000 cm³. Rain over 1 m², 1 mm deep, happens to be exactly that."]
  answer: "600"
  tolerance: 0
  feedback:
    - ["1800", "That is how much the tank holds. The question asks how much is left over."]
    - ["2400", "That is all the rain. Take away what the tank holds."]
    - ["0.6", "That is in cubic metres. The question asks for litres."]
  criteria:
    - "I changed rain on the roof into litres, and the tank into litres."
    - "I changed m³ to litres by multiplying by 1000."
    - "I took the tank's capacity away from the rain."
  explain: "Rain: 80 × 30 = 2400 L. Tank: 1.5 × 1 × 1.2 = 1.8 m³ = 1800 L. The overflow is 2400 − 1800 = 600 L. The Bureau of Meteorology calls the 1 mm = 1 L rule approximate, and real tanks collect less than falls on the roof."
```

Do this one in your book, not on the screen. The roof, the storm and the tank are made up for the task. Write the rain and the tank in litres, then type the overflow.

**Also used in**

- **Rainwater tanks.** The Bureau of Meteorology says 1 mm of rain on 1 m² gives about 1 L, an approximation ([Bureau of Meteorology](https://www.bom.gov.au/climate/how/faq-data.shtml)). Real tanks collect less, because some water is lost.
- **Pool dosing.** The label is per 10 000 L, so the pool's volume in m³ is changed to litres first.
- **Cartons.** A 1 L carton holds 1000 cm³, about a 10 cm cube.
