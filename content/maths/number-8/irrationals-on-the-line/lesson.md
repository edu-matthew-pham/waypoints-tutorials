---
order: 4
unit: irrational
node: AC9M8N01 n2
uses: [AC9M8N01 n1]
title: Irrational numbers on the line
summary: "Every point on the number line is a real number, rational or irrational. To place √30, find the perfect squares either side: 25 < 30 < 36, so √30 is between 5 and 6, nearer 5. A rounded value like 5.48 is close, not exact."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A carpenter needs a brace across a 1 m by 2 m gate: √5 metres. Where is √5 on a tape measure, and how close is close enough?"
connection: square-patch
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8313
  url: http://127.0.0.1:8313/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: line.yml#explain-pic, caption: "√6 is between 2 and 3 (4 < 6 < 9), then between 2.4 and 2.5 (2.4² = 5.76, 2.5² = 6.25)." }
explainClip:
  query: { code: "@line.yml#explain", fresh: 1, id: explain }
  caption: "Squares either side"
  say: "Find the perfect squares either side."
  clip:
    - caption: { text: "4 < 6 < 9, so √6 is between 2 and 3.", say: "Six is between four and nine, so root six is between two and three." }
    - click: Between 2 and 3
    - wait: 1000
    - caption: { text: "2.4² = 5.76 and 2.5² = 6.25: between 2.4 and 2.5.", say: "Two point four squared is under six. Two point five squared is over." }
    - click: Between 2.4 and 2.5
    - expect: { selector: "#gsum", contains: "2.4" }
    - wait: 1500
---
The **real numbers** are every point on the number line: the rational numbers and the irrational ones together. Between any two numbers, however close, there are both.

To place a square root, find the **perfect squares** either side:

$$25 < 30 < 36 \quad\Rightarrow\quad 5 < \sqrt{30} < 6$$

30 is a little nearer 25 than 36, so $\sqrt{30}$ is a bit under 5.5 (check: $5.5^2 = 30.25$). To get closer, square decimals: $5.4^2 = 29.16$ and $5.5^2 = 30.25$; then $5.47^2 = 29.92$ and $5.48^2 = 30.03$, so $\sqrt{30} \approx 5.48$. A rounded value is an **approximation**; the exact value is $\sqrt{30}$.

## Predict: root thirty

```step
stage: predict
insight: "Committing to an interval for √40 shows whether they use the squares either side or halve the number."
check:
  type: predict
  q: "Between which two whole numbers is √40?"
  options: ["6 and 7", "20 and 21", "4 and 5", "39 and 41"]
  actual: "6 and 7: 6² = 36 and 7² = 49, and 40 is between them. (Halving 40 gives 20, but 20² = 400.)"
```

<figure class="situation" role="img" aria-label="A square vegetable patch with an area of 40 square metres. Its side length is marked with a question mark."><svg viewBox="0 0 350 180" width="350" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="110" y="35" width="130" height="130" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56"/><text x="175" y="25" text-anchor="middle" fill="currentColor" stroke="none">side ? m</text><text x="175" y="105" text-anchor="middle" fill="currentColor" stroke="none">area 40 m²</text></svg></figure>

## Run: place √5

```step
stage: run
insight: "Placing √5 to the nearest tenth by dragging uses the squares either side and then a decimal check."
try: { playground: board, starter: "line.yml#run", height: 420 }
check: { type: board, text: "Drag P to where √5 is, to the nearest tenth. Did you use squares, as for √40?", when: "x(P) > 2.15 and x(P) < 2.25", explain: "4 < 5 < 9, so 2 < √5 < 3; 2.2² = 4.84 and 2.3² = 5.29, so √5 ≈ 2.2 (2.236…)." }
```

## Investigate: squares either side

```step
stage: investigate
insight: "Perfect squares bound a root (Ben halves instead); real numbers fill the line."
tasks:
  - check:
      type: number
      q: "√50 is between two whole numbers. What is the smaller one?"
      answer: 7
      tolerance: 0
      feedback:
        - ["25", "Halving is not square rooting. Which squares are either side of 50?"]
      explain: "7² = 49 and 8² = 64, so √50 is between 7 and 8 (just over 7)."
  - check:
      type: bug
      code: "working.txt#ben"
      text: "Ben places √50 on a number line. Click the line where his reasoning goes wrong."
      answer: 2
      fault: logic
      misconception: root-as-half
      explain: "Line 2: a square root is the number that multiplies by itself to give 50, not half of it. 7² = 49, so √50 is just over 7."
  - check:
      type: question
      q: "Which is true of the number line?"
      options: ["Every point is a real number, and there are rational and irrational numbers between any two points", "Only rational numbers have a place on it", "Irrational numbers sit between the whole numbers only", "√2 has no exact point"]
      answer: 0
      feedback: [null, "√2 is the length of a diagonal: it has a point.", "They are everywhere, not just in some gaps.", "It has an exact point; only its decimal is endless."]
      explain: "The real numbers fill the whole line, rationals and irrationals mixed together."
```

### Squares either side

### Find the mistake

Read Ben's working. What times itself makes 50?

### Real numbers

## Modify: more roots, and π

```step
stage: modify
insight: "Placing √10 and π, ordering a root among decimals, and deciding when an approximation is good enough."
try: { playground: board, starter: "line.yml#free", height: 420 }
tasks:
  - starter: "line.yml#free"
    hint: ["9 < 10 < 16.", "3.1² = 9.61 and 3.2² = 10.24."]
    check: { type: board, text: "Place √10 to the nearest tenth.", when: "x(P) > 3.15 and x(P) < 3.25", explain: "√10 = 3.162…, so 3.2 to the nearest tenth." }
  - starter: "line.yml#free"
    check: { type: board, text: "Place π to the nearest tenth.", when: "x(P) > 3.05 and x(P) < 3.15", explain: "π = 3.14159…, so 3.1 to the nearest tenth." }
  - check:
      type: question
      q: "Put these in order, smallest first: √3, 1.7, 7/4."
      options: ["1.7, √3, 7/4", "√3, 1.7, 7/4", "7/4, √3, 1.7", "1.7, 7/4, √3"]
      answer: 0
      feedback: [null, "√3 = 1.732…, more than 1.7.", "7/4 = 1.75 is the biggest.", "7/4 = 1.75 is more than √3 = 1.732…"]
      explain: "1.7 < 1.732… < 1.75."
  - check:
      type: question
      q: "A right triangle has legs of 1 m, so its long side is exactly √2 m. A carpenter cuts a brace. What should she use?"
      options: ["1.41 m: close enough to cut, though √2 m is the exact length", "Exactly √2 m on the tape", "1 m", "2 m"]
      answer: 0
      feedback: [null, "A tape measure cannot show an endless decimal, so she rounds.", "That is the length of a leg.", "That is the two legs added."]
      explain: "Exact in the maths (√2), rounded for the job: 1.41 m to the centimetre, or 1.414 m to the millimetre."
```

### Root 10

### π

### In order

### Good enough

## Practise: placing roots

```step
stage: practise
insight: "Bounding, comparing and rounding roots, mixed; halving instead of rooting is the planted slip; the rational review keeps the classification fresh."
tasks:
  - check:
      type: number
      q: "√20 is between two whole numbers. What is the smaller one?"
      answer: 4
      tolerance: 0
      feedback:
        - ["10", "Halving is not square rooting: 4² = 16 and 5² = 25."]
      explain: "16 < 20 < 25, so √20 is between 4 and 5."
  - check:
      type: question
      q: "Which is bigger: √8 or 2.8?"
      options: ["√8", "2.8", "They are equal"]
      answer: 0
      feedback: [null, "2.8² = 7.84, less than 8.", "√8 is irrational; 2.8 is not."]
      explain: "2.8² = 7.84 < 8, so √8 > 2.8 (√8 = 2.828…)."
  - check:
      type: number
      q: "Write √2 rounded to 2 decimal places."
      answer: 1.41
      tolerance: 0
      explain: "√2 = 1.41421…, so 1.41."
  - check:
      type: question
      q: "Review: which number is irrational?"
      options: ["√12", "√4", "0.5", "1/3"]
      answer: 0
      feedback: [null, "√4 = 2.", "0.5 = 1/2.", "A fraction."]
      explain: "12 is not a perfect square."
```

### Bounds

### Compare

### Round

### Review: irrational

## Make: root seven

```step
stage: make
insight: "Finding √7 to 2 places without a wrong press makes them check each square before they choose."
try: { playground: board, starter: "line.yml#sqrt7", height: 520 }
hint: ["4 < 7 < 9.", "2.6² = 6.76 and 2.7² = 7.29."]
check: { type: board, text: "Find the first 2 decimal digits of √7, without a wrong press: square the ends first.", when: "d = 1 and w = 0", explain: "√7 = 2.6457…: the first two decimal digits are 64, and rounded to 2 decimal places it is 2.65." }
```

Then mark √7 on a sketch of the number line between 2 and 3.

## Make: edging a patch, on paper

```step
stage: make
insight: "A square of area 50 m² has a side between 7 and 8, and which tenth it rounds to needs one more squaring. Halving 50 is the planted slip."
hint: ["49 and 64 are the squares either side of 50.", "Square 7.05, halfway between 7.0 and 7.1."]
check:
  type: reasoning
  paper: true
  q: "A square vegetable patch must have an area of 50 m². Its side is $\\sqrt{50}$ m. What is the side to the nearest tenth of a metre?"
  steps:
    - ["$7^2 = 49$ and $8^2 = 64$, so $7 < \\sqrt{50} < 8$", "the perfect squares either side of 50"]
    - ["50 is just over 49, so the side is just over 7", "50 is much nearer 49 than 64"]
    - ["$7.05^2 = 49.7025$, which is under 50, so $\\sqrt{50}$ is past halfway between 7.0 and 7.1", "square the halfway value to see which tenth is nearer"]
    - ["The side is about 7.1 m", "check: $7.1^2 = 50.41$, just over 50"]
  picks:
    - step: 3
      q: "How do you choose between 7.0 and 7.1?"
      options:
        - "Square the halfway value 7.05: it is under 50, so the root is past halfway"
        - "Halve 50 to get 25"
        - "It is just over 7, so round down to 7.0"
      answer: 0
      feedback: [null, "A square root is the number that times itself makes 50, not half of it.", "Being just over 7 is not enough: 7.0 and 7.1 are both close. Check the halfway value."]
  answer: "7.1"
  answerLabel: "Side (m)"
  tolerance: 0
  feedback:
    - ["7", "That is the whole number just under. To the nearest tenth, test 7.0 and 7.1."]
    - ["25", "That halves 50. The side times itself must make 50."]
    - ["7.07", "That is 2 decimal places. The question asks for the nearest tenth."]
  criteria:
    - "I started with the squares either side of 50."
    - "I squared a decimal to choose the tenth."
    - "I checked my side by squaring it."
  explain: "49 < 50 < 64, so the side is between 7 and 8. 7.05² = 49.70 is under 50, so √50 is past halfway: 7.1 m (7.07 to two decimal places)."
```

Do this one in your book, not on the screen. The patch is made up for the task, but you can check it: square your side and you should get back about 50. Bound the root, squeeze it, and type the side.

**Also used in**

- **Gardens.** The edging for the patch is 4 sides, about 4 × 7.07 = 28.3 m, with a little extra for the corners.
- **Carpentry.** A brace across a 1 m by 2 m gate is √5 m long, placed the same way.
- **Later.** The same patch returns when exact and rounded answers are compared.
