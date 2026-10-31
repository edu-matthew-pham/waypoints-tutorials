---
order: 8
unit: circles
node: AC9M7M03 n3
uses: [AC9M7N06 n2, AC9M7A03 n2]   # dividing decimals; undoing an operation (backtracking: d = C ÷ π)
title: Circumference
summary: "Because C ÷ d = π, the circumference is π × diameter: C = πd, or C = 2πr from the radius. Going backwards, d = C ÷ π."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A bike wheel 70 cm across rolls forward one circumference with every turn. How many turns to school? A trundle wheel measures a sports field the same way."
connection: bike-computer
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8280
  url: http://127.0.0.1:8280/index.html
  readySelector: "#sl-r"
  layout: full
explainPicture: { ref: circle.yml#explain-pic, caption: "Radius 2.5 cm, diameter 5 cm: rolled out, $C = \\pi \\times 5 \\approx 15.71$ cm." }
explainClip:
  query: { code: "@circle.yml#explain", fresh: 1, id: explain }
  caption: "C = πd"
  say: "The circumference is pi times the diameter."
  clip:
    - caption: { text: "Radius 2, diameter 4: C = π × 4 ≈ 12.57.", say: "Diameter four: the circumference is pi times four." }
    - wait: 1400
    - caption: { text: "Double the radius: the circumference doubles too.", say: "Double the radius, and the circumference doubles too." }
    - click: Make the radius bigger
    - click: Make the radius bigger
    - expect: { selector: "#gsum", contains: "circumference 25.13" }
    - wait: 1400
---
The last lesson found that $C \div d = \pi$ for every circle. Use $\pi \approx 3.14$, as the questions say.

## Predict: radius 5

```step
stage: predict
insight: "Committing to a circumference for radius 5 shows whether they double to the diameter first, or use the radius as if it were the diameter."
check:
  type: predict
  q: "A circle has radius 5 cm. About how long is its circumference?"
  options: ["31.4 cm", "15.7 cm", "78.5 cm", "10 cm"]
  actual: "31.4 cm. The diameter is 10 cm, and π × 10 ≈ 31.4. 15.7 uses the radius as the diameter; 10 cm is the diameter itself."
```

<figure class="situation" role="img" aria-label="A circle with a radius of 5 cm. The distance round the edge, the circumference, is a question mark."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="175" cy="100" r="60" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><line x1="175" y1="100" x2="235" y2="100"/><text x="205" y="93" text-anchor="middle" fill="currentColor" stroke="none">5 cm</text><text x="175" y="22" text-anchor="middle" fill="currentColor" stroke="none">distance round: ? cm</text></svg></figure>

Find the diameter first.

## Run: roll radius 2.5

```step
stage: run
insight: "Rolling a circle of a given radius checks C = πd = 2πr against the track it leaves."
try: { playground: board, starter: "circle.yml#run", height: 640 }
check: { type: board, text: "Make a circle with radius 2.5 cm and roll it out. Work out π × d first, then compare. Was your prediction method right?", when: "r = 2.5 and o = 1", explain: "d = 5 cm, so C = π × 5 ≈ 15.71 cm." }
```

Predict the circumference from the diameter before you roll.

Here's the rule behind the roll.

Turned round, $C \div d = \pi$ gives a formula for the circumference:

$$C = \pi d \qquad \text{or, since } d = 2r, \qquad C = 2\pi r$$

Going backwards, from a circumference to the diameter, divide by π: $d = C \div \pi$.

## Investigate: forwards and backwards

```step
stage: investigate
insight: "C = πd uses the diameter (Mei uses the radius instead); C = 2πr is the same rule. Going backwards divides by π; students own the working and pick the key reason."
tasks:
  - check:
      type: answer
      q: "A circle has diameter 8 cm. Using π ≈ 3.14, what is its circumference, in cm?"
      answer: "25.12"
      feedback:
        - ["12.56", "That uses half the diameter. C = π × d = 3.14 × 8."]
        - ["50.24", "That uses 16, twice the diameter."]
      explain: "3.14 × 8 = 25.12 cm."
  - check:
      type: bug
      code: "working.txt#mei"
      text: "Mei finds how far a wheel rolls in one turn. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: radius-diameter
      explain: "Line 3: 30 cm is the radius, but C = π × d needs the diameter, 60 cm. 3.14 × 60 = 188.4 cm (or C = 2πr = 2 × 3.14 × 30)."
  - check:
      type: reasoning
      q: "A circular garden bed has circumference 18.84 m. Using π ≈ 3.14, find its diameter. Write your steps."
      steps:
        - ["$C = \\pi d$, so $18.84 = 3.14 \\times d$", "the circumference is π times the diameter"]
        - ["$d = 18.84 \\div 3.14 = 6$ m", "divide by π to undo multiplying by π"]
      picks:
        - step: 2
          options: ["Divide by π to undo multiplying by π", "Multiply by π again", "Divide by 2, because d = 2r"]
          answer: 0
          feedback: [null, "That gives 59.2 m, bigger than the circumference. A diameter is always shorter: divide.", "Halving gives a radius from a diameter, not a diameter from a circumference."]
      answer: "6"
      feedback:
        - ["59.1576", "That multiplies by π. Divide instead."]
        - ["3", "That is the radius. The question asks for the diameter."]
      explain: "18.84 ÷ 3.14 = 6 m."
```

### Use the diameter

Here is the formula forwards and backwards.

```worked
C = \pi d = 3.14 \times 8 = 25.12 \text{ cm} :: From the diameter: multiply by π.
C = 2\pi r = 2 \times 3.14 \times 30 = 188.4 \text{ cm} :: From the radius: double it first (2r is the diameter).
d = C \div \pi = 18.84 \div 3.14 = 6 \text{ m} :: Backwards: divide by π.
C = 10\pi \text{ cm} :: Exact: leave π in the answer (for d = 10). 10π means 10 × π, about 31.4.
```

Now try one: diameter 8 cm.

### Find the mistake

Read Mei's working. Which length does C = πd need?

### Backwards

Your working can be short notes. Then choose the reason for the key step.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: building a circumference on the board, using 22/7, an exact answer, a radius from a circumference (two steps), then a semicircle's perimeter."
try: { playground: board, starter: "circle.yml#twentyfive", height: 640 }
tasks:
  - starter: "circle.yml#twentyfive"
    hint: ["25 ÷ 3.14 is about 8: that is the diameter.", "Radius 4."]
    check: { type: board, text: "Make and roll a circle with circumference about 25 cm (between 24.5 and 25.5).", when: "c > 24.5 and c < 25.5 and o = 1", explain: "d = 8 cm (r = 4): C = π × 8 ≈ 25.13 cm." }
  - check:
      type: answer
      q: "Using π ≈ 22/7, find the circumference of a circle with radius 7 cm."
      answer: "44"
      feedback:
        - ["22", "That uses the radius as the diameter. d = 14."]
      explain: "C = 2 × 22/7 × 7 = 44 cm."
  - check:
      type: question
      q: "What is the exact circumference of a circle with diameter 6 cm?"
      options: ["$6\\pi$ cm", "$3\\pi$ cm", "$12\\pi$ cm", "$6 + \\pi$ cm"]
      answer: 0
      feedback: [null, "3 is the radius. C = π × d.", "12 is twice the diameter.", "C is π times d, not π added."]
      explain: "C = π × 6 = 6π cm (about 18.84 cm)."
  - check:
      type: answer
      q: "A circle has circumference 31.4 cm. Using π ≈ 3.14, what is its radius, in cm?"
      answer: "5"
      feedback:
        - ["10", "That is the diameter. Halve it for the radius."]
      explain: "d = 31.4 ÷ 3.14 = 10 cm, so r = 5 cm."
  - check:
      type: question
      q: "Edge case: a semicircle has diameter 10 cm. What is its perimeter (the curved edge and the straight edge)? Use π ≈ 3.14."
      options: ["25.7 cm", "15.7 cm", "31.4 cm", "41.4 cm"]
      answer: 0
      feedback: [null, "That is only the curved edge. Add the straight diameter.", "That is a whole circle's circumference.", "Half of the circle's circumference, not all of it, plus 10."]
      explain: "Half of 31.4 is 15.7, plus the 10 cm diameter: 25.7 cm."
```

### Circumference 25

Each task changes one thing.

### With 22/7

### Exact

### Backwards: the radius

### A semicircle

## Practise: circumference

```step
stage: practise
insight: "Forwards from d and r, a real-world distance and a review, mixed; using the radius as the diameter is the planted slip."
tasks:
  - check:
      type: answer
      q: "Diameter 12 cm. Circumference, in cm (π ≈ 3.14)?"
      answer: "37.68"
      feedback:
        - ["18.84", "12 is the diameter already: do not halve it."]
      explain: "3.14 × 12 = 37.68 cm."
  - check:
      type: answer
      q: "Radius 3 cm. Circumference, in cm (π ≈ 3.14)?"
      answer: "18.84"
      feedback:
        - ["9.42", "That uses the radius as the diameter. d = 6."]
      explain: "2 × 3.14 × 3 = 18.84 cm."
  - check:
      type: answer
      q: "A bike wheel has diameter 70 cm. How far does the bike go in 100 turns, in metres (π ≈ 3.14)?"
      answer: "219.8"
      feedback:
        - ["21980", "That is in centimetres. 100 cm = 1 m."]
        - ["109.9", "70 cm is the diameter: do not halve it."]
      explain: "One turn: 3.14 × 70 = 219.8 cm. 100 turns: 21 980 cm = 219.8 m."
  - check:
      type: answer
      q: "Review: a triangle has base 10 cm and height 6 cm. Its area, in cm²?"
      answer: "30"
      feedback:
        - ["60", "Halve it."]
      explain: "½ × 10 × 6 = 30 cm²."
```

### From the diameter

### From the radius

### A bike ride

### Review: area

## Make: a trundle wheel

```step
stage: make
insight: "Designing a trundle wheel that clicks every metre turns C = πd round: the diameter is 100 ÷ π, a real design problem with a sensible rounding."
hint: ["One turn should roll exactly 1 m = 100 cm.", "C = πd, so d = 100 ÷ 3.14."]
check:
  type: number
  q: "A trundle wheel clicks once each turn. What diameter, in cm to one decimal place, makes it click once every metre? (π ≈ 3.14)"
  answer: 31.8
  tolerance: 0.15
  explain: "One turn is the circumference: 100 cm. d = 100 ÷ 3.14 ≈ 31.8 cm (radius about 15.9 cm)."
```

Then work out how many clicks it makes around a 400 m running track.

## Make: set the bike computer, on paper

```step
stage: make
insight: "A bike computer needs the distance one turn rolls, which is the circumference; the wheel is given across, so the diameter goes straight into C = πd with no halving or doubling."
hint: ["Is 700 mm the radius or the diameter?", "Multiply the diameter by 3.14."]
check:
  type: reasoning
  paper: true
  q: "A bike computer asks for the wheel's circumference in mm when you set it up. The wheel is 700 mm across. Using π ≈ 3.14, what do you type in? Give the nearest whole number of millimetres."
  steps:
    - ["The wheel is 700 mm across, so $d = 700$ mm", "across means the diameter"]
    - ["$C = \\pi d = 3.14 \\times 700$", "the circumference is π times the diameter"]
    - ["$C = 2198$ mm", "about 2.2 m for every turn"]
  picks:
    - step: 2
      q: "Which length do you multiply by π?"
      options:
        - "The diameter, the width across: 700"
        - "The radius: 350"
        - "The diameter squared"
      answer: 0
      feedback: [null, "With the radius you need a 2 as well (C = 2πr). 3.14 × 350 is only half the way round.", "Squaring is for area. The circumference is a length."]
  answer: "2198"
  tolerance: 2
  feedback:
    - ["1099", "That uses 350, half of 700. The 700 mm is already the diameter."]
    - ["4396", "That doubles the diameter. C = π × d needs no extra 2."]
  criteria:
    - "I said whether 700 mm is the radius or the diameter."
    - "I multiplied that length by 3.14."
    - "My answer is in millimetres and is a bit over 3 times 700."
  explain: "d = 700 mm, so C = 3.14 × 700 = 2198 mm."
```

Do this one in your book, not on the screen. Real tyres squash a little under a rider, so a rider rolls the bike one turn along chalk and measures. Write which length you have, multiply, check it is a bit over 3 diameters, and type the millimetres.

**Also used in**

- **Racing.** In a 400 m race the outer lanes start further forward, because each lane's bends make a bigger circle.
- **Rolling wheels.** A wheel rolled one turn along the ground travels one circumference, which is how C ÷ d was first found.
- **Trundle wheels.** A wheel that clicks once a turn measures a field, if its circumference is a metre.
