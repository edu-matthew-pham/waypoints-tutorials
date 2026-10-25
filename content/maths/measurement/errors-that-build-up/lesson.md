---
order: 45
unit: error10
node: AC9M10M04 n3
uses: [AC9M10M04 n2]
assumes: [AC9M10M04 n2]
connection: carpet-error
title: Errors that build up
summary: "In a long job done in many small steps, the errors add up: the worst case grows with every step. When a calculation multiplies several measurements, their percentage errors add up too."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A builder tapes a 20 m wall one 4 m piece at a time. Each piece is measured to the nearest 10 cm."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8411
  url: http://127.0.0.1:8411/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: formula.yml#pic, caption: "Five lengths of 4.0 m, each to the nearest 0.1 m: the total is 20.0 m, and it could be out by up to 0.25 m." }
explainClip:
  query: { code: "@formula.yml#explain", fresh: 1, id: explain }
  caption: "Small errors add up"
  say: "Five pieces, each out by five centimetres, add up to more error."
  clip:
    - caption: { text: "Five pieces, each to the nearest 0.1 m.", say: "Five pieces, each measured to the nearest tenth of a metre." }
    - wait: 600
    - caption: { text: "Each could be 0.05 m out. The total's lowest and highest are shown below.", say: "Each could be five centimetres out, and the total has a lowest and highest below." }
    - click: Make a bigger
    - wait: 800
    - expect: { selector: ".rulework", contains: "T = 4.3 + 3.8 + 4.1 + 3.9 + 4.3 = 20.4" }
    - caption: { text: "The gap between lowest and highest stays the same: 0.5 m.", say: "The gap between the lowest and the highest stays the same, half a metre." }
    - wait: 1000
---
A builder tapes a long wall one piece at a time, five pieces of about 4 m each, and measures each piece to the nearest 10 cm. All five come out at 4.0 m, so the wall is 20.0 m. Have a guess how far out the 20.0 m could be, and we'll come back to it at the end. (The wall is made up for the task.)

<figure class="situation" role="img" aria-label="A wall drawn as five equal pieces end to end, each labelled 4.0 metres to the nearest 10 centimetres. Above the whole wall is a bracket labelled 20.0 metres, and a question mark: how far out could the total be."><svg viewBox="0 0 400 140" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-width="2"><rect x="20" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/><rect x="92" y="70" width="72" height="30" fill="#1D9E75" fill-opacity="0.2"/><rect x="164" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/><rect x="236" y="70" width="72" height="30" fill="#1D9E75" fill-opacity="0.2"/><rect x="308" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="56" y="90">4.0 m</text><text x="128" y="90">4.0 m</text><text x="200" y="90">4.0 m</text><text x="272" y="90">4.0 m</text><text x="344" y="90">4.0 m</text><text x="200" y="124" font-size="12" opacity="0.8">each piece to the nearest 10 cm</text><text x="200" y="32" font-size="18">20.0 m, out by ?</text></g><path d="M20 56 v-10 h360 v10" stroke-width="1.6"/></svg></figure>

## Predict: five pieces

```step
stage: predict
insight: "Choosing how far out the total could be shows who thinks the total is out by only one piece's error, and who sees that the errors can all go the same way."
check:
  type: predict
  q: "Each piece could be 5 cm (0.05 m) out. How far out could the 20.0 m total be, at most?"
  options:
    - "25 cm"
    - "5 cm"
    - "10 cm"
    - "50 cm"
  actual: "25 cm. In the worst case all five pieces are 5 cm too long, so the errors add: 5 × 5 cm = 25 cm. A total made of more pieces can be out by more."
```

## Run: five readings

```step
stage: run
insight: "The total of several readings has a lowest and a highest, and the gap between them is the sum of the gaps of the pieces: the worst case grows with every piece."
try: { playground: board, starter: "formula.yml#run", height: 600 }
check: { type: board, text: "Set all five lengths to $4.0$ m and read how far out the total could be. Was your prediction right?", when: "a = 4 and b = 4 and c = 4 and d = 4 and e = 4" }
```

Each slider is a reading to the nearest 0.1 m. Under the working, the board shows the lowest and highest the total could be. Try changing one piece: does the gap between lowest and highest change?

## Investigate: more steps, more error

```step
stage: investigate
insight: "In a sum the worst-case error of the total is the number of pieces times one piece's error. Sam takes one step's error to be the error of the whole job."
tasks:
  - hint: ["Use the highest of each side.", "10.05 × 6.05 × 5.05."]
    check:
      type: reasoning
      paper: true
      q: "A box is 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. What is the highest its volume could be? (cm³, 1 decimal place)"
      steps:
        - ["$10.05$, $6.05$ and $5.05$", "the highest each side could be"]
        - ["$10.05 \\times 6.05 = 60.8025$", "multiply the first two"]
        - ["$60.8025 \\times 5.05 = 307.05$", "then the third"]
      answer: "307.05"
      answerLabel: "Highest volume (cm³)"
      tolerance: 0.1
      feedback:
        - ["300", "That is the measured volume, 10 × 6 × 5. The question asks for the highest it could be."]
        - ["301.5", "That adds 0.05 to each side's share once. Multiply the three highest sides."]
      criteria:
        - "I used the highest of each of the three sides."
        - "I multiplied all three."
      explain: "10.05 × 6.05 × 5.05 = 307.05, about 7 cm³ more than the measured 300: the error grew as more measurements were multiplied."
  - hint: ["Each piece could be 0.05 m out.", "Five pieces."]
    check: { type: number, q: "Five pieces are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m, 2 decimal places)", answer: 0.25, tolerance: 0.005, explain: "5 × 0.05 = 0.25 m." }
  - hint: ["Ten pieces, each 0.05 m.", "10 × 0.05."]
    check: { type: number, q: "Ten pieces of $2.0$ m are each measured to the nearest $0.1$ m, so the total is $20.0$ m. How far out could the total be, at most? (m)", answer: 0.5, tolerance: 0.005, explain: "10 × 0.05 = 0.5 m. The same 20 m wall, measured in shorter pieces, could be out by twice as much." }
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam lays a 1 m ruler end to end 30 times along a fence. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: build-up-no-growth
      explain: "Line 3: each placement could be 1 cm out, and the 30 errors add. In the worst case the fence is out by 30 × 1 cm = 30 cm."
  - check:
      type: question
      q: "The worst case for the fence is 30 cm out. What does that number tell you?"
      options:
        - "The most it could be out; it will usually be less, because some errors go up and others down"
        - "How far out it is: exactly 30 cm"
        - "It cannot be out by more than 1 cm"
        - "Nothing: the errors cancel out completely"
      answer: 0
      feedback:
        - null
        - "30 cm is the most it could be, not what it is."
        - "That is one placement's error, not the whole fence's."
        - "They cancel only partly. A bound is for being sure."
      explain: "The bound is what you can promise: it is not out by more than that. Random errors that go both ways usually leave the real error smaller."
```

### A box

```worked
l = 2.0,\; w = 1.5,\; h = 1.0 :: A tank measured to the nearest 0.1 m (made up).
\dfrac{0.05}{2.0} = 2.5\%,\; \dfrac{0.05}{1.5} = 3.3\%,\; \dfrac{0.05}{1.0} = 5\% :: Each measurement's percentage error.
2.5 + 3.3 + 5 = 10.8\% :: Multiplying three measurements adds their percentage errors, about.
V = 2.0 \times 1.5 \times 1.0 = 3.0 :: The measured volume.
3.0 \times 0.108 \approx 0.32 :: So the volume could be out by about 0.32 m³ either way.
```

Now try one on paper after the worked example: a box 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. Work out the highest the volume could be.

### Five pieces

### Ten shorter pieces

### Find the mistake

Read Sam's working. Is the whole fence's error one placement's error?

### What the bound means


## Modify: more factors, a tiny one

```step
stage: modify
insight: "Changing what is multiplied changes how fast the error grows: each extra measurement adds its percentage error, and a small measurement has the biggest percentage error."
try: { playground: board, starter: "formula.yml#volume", height: 560 }
tasks:
  - hint: ["Add 1.4 + 2 + 2.3.", "Percentage errors of l, w and h."]
    check: { type: number, q: "A room is $3.5$ m by $2.5$ m by $2.2$ m, each to the nearest $0.1$ m. The percentage errors are $1.4\\%$, $2\\%$ and $2.3\\%$. About what percentage could the volume be out by? (%)", answer: 5.7, tolerance: 0.1, explain: "1.4 + 2 + 2.3 = 5.7%. The board shows a volume from about 18.2 to 20.3, which is 5.7% either way." }
  - hint: ["Work out each percentage error.", "0.05 ÷ 10, 0.05 ÷ 6, 0.05 ÷ 0.5."]
    check:
      type: question
      q: "Edge case: a box is $10.0$ cm by $6.0$ cm by $0.5$ cm, each to the nearest $0.1$ cm. Which measurement adds most to the volume's percentage error?"
      options:
        - "The 0.5 cm: its 0.05 is 10% of it"
        - "The 10.0 cm, because it is the longest"
        - "The 6.0 cm, because it is the middle one"
        - "All three the same, because each is out by 0.05"
      answer: 0
      feedback:
        - null
        - "The longest is out by 0.5% only."
        - "6.0 is out by about 0.8%."
        - "The same 0.05 is a much bigger share of a small length."
      explain: "0.05 ÷ 0.5 = 10%, against 0.5% and 0.8% for the others. The thin measurement needs measuring more accurately."
  - hint: ["Think of 1.02 × 1.02 × 1.02.", "Three equal measurements."]
    check: { type: number, q: "A cube's side is out by $2\\%$. About what percentage could its volume be out by? (%)", answer: 6, tolerance: 0.2, explain: "The side appears three times: 2 + 2 + 2 = 6%. Exactly, 1.02³ = 1.0612, about 6.1%." }
```

### Three factors

### A thin box

### A cube

## Practise: totals and products

```step
stage: practise
insight: "Adding up errors over many pieces, and seeing which measurement matters most in a product."
tasks:
  - hint: ["Eight pieces, each 0.05 m."]
    check: { type: number, q: "Eight pieces of $2.5$ m are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m)", answer: 0.4, tolerance: 0.005, explain: "8 × 0.05 = 0.4 m." }
    smaller:
      check: { type: "number", q: "How far out could one piece be, measured to the nearest $0.1$ m? (m)", answer: 0.05, tolerance: 0.001, explain: "Half of 0.1 is 0.05." }
  - hint: ["Highest side times highest side.", "5.05 × 5.05."]
    check: { type: number, q: "A square garden has a side of $5.0$ m to the nearest $0.1$ m. How far above $25$ m² could the area be, at most? (m²)", answer: 0.5, tolerance: 0.01, explain: "5.05 × 5.05 = 25.5025, so 0.5025 m² above 25." }
  - hint: ["Lowest length times lowest width.", "7.95 × 4.95."]
    check: { type: number, q: "Review: a rectangle is $8.0$ m by $5.0$ m, each to the nearest $0.1$ m. What is the lowest its area could be? (m², 2 decimal places)", answer: 39.35, tolerance: 0.01, explain: "7.95 × 4.95 = 39.3525." }
```

### Eight pieces

### A square

### Review

## Make: the wall

```step
stage: make
insight: "Back to the wall: the total could be 25 cm out, so a beam cut to the measured length might be short; the length to order is the highest the total could be."
tasks:
  - hint: ["Each piece could be 4.05 m.", "5 × 4.05."]
    check:
      type: reasoning
      paper: true
      q: "The wall is five pieces of 4.0 m, each to the nearest 10 cm. A beam must be long enough to span the wall whatever the real lengths are. What is the shortest beam length that is certain to be long enough? (m)"
      steps:
        - ["highest piece: $4.0 + 0.05 = 4.05$", "each piece could be 0.05 m longer"]
        - ["$5 \\times 4.05$", "five pieces, all at their highest"]
        - ["$= 20.25$", "work it out"]
      answer: "20.25"
      answerLabel: "Beam length (m)"
      tolerance: 0.001
      feedback:
        - ["20", "That is the measured total. The wall could be longer, and a 20 m beam might be short."]
        - ["20.05", "That adds one piece's error. All five pieces are out."]
      criteria:
        - "I found the highest one piece could be."
        - "I added the five highest pieces."
      explain: "5 × 4.05 = 20.25 m: a beam that long spans the wall even if every piece was 5 cm longer than measured."
  - check:
      type: question
      q: "The builder wants a tighter beam length. What would make the highest total closer to 20 m?"
      options:
        - "Measure the whole wall in one go, with one reading to the nearest 10 cm"
        - "Use more pieces"
        - "Measure each piece to the nearest metre"
        - "Nothing: the error is fixed"
      answer: 0
      feedback:
        - null
        - "More pieces means more errors to add."
        - "A coarser reading makes each error bigger."
        - "How you measure sets the error."
      explain: "One reading to the nearest 10 cm leaves the total out by at most 0.05 m. Fewer, longer steps keep the error small."
```

### The beam

Work this out on paper first, then type your answer.

### A tighter total

The wall and its measurements are made up for the task.

**Also used in**

- **Building.** A long fence or a run of kitchen cabinets set out piece by piece: the errors add.
- **Science.** A density works from a mass, a length, a width and a height: four measurements, so four percentage errors.
- **Next lesson.** Scale factors: a plan has its own scale, and a reading off it carries its own error.
