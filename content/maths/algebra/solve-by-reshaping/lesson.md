---
order: 22
unit: solve10
node: AC9M10A01 n5
uses: [AC9M9A02 n3, AC9M10A01 n3]
assumes: [AC9M9A02 n3, AC9M10A01 n3]
connection: frame-border
title: Solving by reshaping
summary: "Set up an equation from a picture, expand it, move everything to one side so it equals 0, factorise, solve, throw out the answer that doesn't fit, and check. The same reshaping solves equations with the unknown in a power."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A framer says a frame will double the area of your photo. How wide does the border have to be?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8371
  url: http://127.0.0.1:8371/index.html
  readySelector: "#sl-w"
  layout: full
explainPicture: { ref: reshape.yml#explain-pic, caption: "The framed area $4w^2 + 100w + 600$ meets $1200$ at a border of $w = 5$ cm." }
explainClip:
  query: { code: "@reshape.yml#explain", fresh: 1, id: explain }
  caption: "Make the framed area reach 1200"
  say: "Make the border wider until the framed area reaches twelve hundred."
  clip:
    - caption: { text: "No border: the area is just the photo, 30 × 20 = 600 cm².", say: "With no border, the area is the photo, six hundred square centimetres." }
    - wait: 900
    - caption: { text: "Make the border wider and the area climbs.", say: "Make the border wider and the area climbs." }
    - click: Make w bigger
    - click: Make w bigger
    - click: Make w bigger
    - wait: 600
    - caption: { text: "At w = 5 the point meets the dashed line: 1200 cm².", say: "At five centimetres, the point meets the dashed line at twelve hundred." }
    - click: Make w bigger
    - click: Make w bigger
    - wait: 1400
---
A photo is 30 cm by 20 cm. (The sizes are made up for this lesson.) A frame goes round it, the same width all the way round, and the framed picture's area is to be 1200 cm², double the photo's 600 cm². Guessing and checking gets there. Reshaping the equation gets there, and tells you if there is another answer.

<figure class="situation" role="img" aria-label="A photo 30 centimetres by 20 centimetres sits inside a frame of the same width, x, all the way round. The outside of the frame is a dashed rectangle. The width x is marked on each side and a question mark asks how wide it should be."><svg viewBox="0 0 420 260" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="40" y="30" width="270" height="190" stroke-dasharray="6 4" stroke-width="1.2"/><rect x="70" y="60" width="210" height="130" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1.4"/><text x="175" y="130" text-anchor="middle" fill="currentColor" stroke="none">photo 30 × 20</text><text x="55" y="50" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="175" y="50" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="55" y="130" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="330" y="130" fill="currentColor" stroke="none">border x = ?</text></svg></figure>

## Predict: the border

```step
stage: predict
insight: "Committing to the border shows who guesses a size from the doubling and who sees that the border adds to both ends of each side."
check:
  type: predict
  q: "A photo is 30 cm by 20 cm. A frame the same width, $x$ cm, goes all the way round it. The framed picture should have an area of 1200 cm², double the photo's 600 cm². Which border width gives that?"
  options:
    - "$5$ cm"
    - "$10$ cm"
    - "$15$ cm"
    - "$2.5$ cm"
  actual: "5 cm. The framed picture is 30 + 2 × 5 = 40 by 20 + 2 × 5 = 30, and 40 × 30 = 1200. 10 cm would make it 50 by 40, which is 2000: the border adds to both ends of each side, so it grows quickly."
```

Make a guess, then try it on the board.

## Run: widen the border

```step
stage: run
insight: "The framed area is (30 + 2w)(20 + 2w), and the border needs to be the width that puts it on 1200: the picture grows by 2w on each side, not w."
try: { playground: board, starter: "reshape.yml#run", height: 560 }
check: { type: board, text: "Move $w$ until the point is on the dashed line, 1200 cm². Was your prediction right?", when: "w = 5" }
```

$w$ is the border in centimetres. The curve is the framed picture's area, and the dashed line is the 1200 cm² you want.

## Investigate: reshape, factorise, reject

```step
stage: investigate
insight: "To solve, the equation is expanded and moved so that one side is 0, then factorised, because a product is only 0 if a bracket is. Taz uses the brackets with a 20 on the right. The negative answer solves the equation but not the frame."
tasks:
  - check:
      type: number
      q: "A 20 cm by 10 cm photo has a frame of width $x$ and a framed area of 336 cm². Solve $(20 + 2x)(10 + 2x) = 336$ and type the border width in cm."
      answer: 2
      feedback:
        - [-17, "That solves the equation, but a border can't be −17 cm wide."]
        - [17, "The positive answer is the other one. (x − 2)(x + 17) = 0 gives 2 or −17."]
      explain: "Expand: 4x² + 60x + 200 = 336, so 4x² + 60x − 136 = 0 and x² + 15x − 34 = 0. (x + 17)(x − 2) = 0, so x = −17 or x = 2. A border can't be negative: 2 cm. Check: 24 × 14 = 336."
  - check:
      type: bug
      code: "working.txt#taz"
      text: "Taz solves $(x + 5)(x - 3) = 20$. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: zero-product-nonzero
      explain: "Line 2: a bracket can only be set equal to 0 when the product is 0. (x + 5)(x − 3) = 20 can be made by many pairs. Move 20 across first: x² + 2x − 35 = 0, which is (x + 7)(x − 5) = 0. His check on line 4 is the clue."
  - check:
      type: question
      q: "$x = -30$ solves $(30 + 2x)(20 + 2x) = 1200$. Why isn't it the border?"
      options: ["A border can't be −30 cm wide", "Negative answers are always thrown out", "−30 doesn't make the equation true", "Only the first answer counts"]
      answer: 0
      feedback: [null, "Not always: a temperature or a height below ground can be negative. It's the width here that can't.", "Try it: (30 − 60)(20 − 60) = (−30)(−40) = 1200. It does make the equation true.", "Both answers solve the equation. The picture decides which fits."]
      explain: "−30 satisfies the equation, but x is a width. Always put your answers back into the picture and ask if they make sense."
```

### Reshape and solve

Here's the frame from the start, worked out step by step.

```worked
(30 + 2x)(20 + 2x) = 1200 :: The framed picture is 30 + 2x by 20 + 2x: the border goes on both ends of each side.
4x^2 + 100x + 600 = 1200 :: Expand: 600 + 60x + 40x + 4x².
4x^2 + 100x - 600 = 0 :: Move 1200 across, so one side is 0.
x^2 + 25x - 150 = 0 :: Divide by 4.
(x + 30)(x - 5) = 0 :: Two numbers that multiply to −150 and add to 25: 30 and −5.
x = -30 \text{ or } x = 5 :: One bracket has to be 0.
x = 5 :: A border can't be −30 cm wide.
40 \times 30 = 1200 :: Check by putting x = 5 back in.
```

Now try one on paper, step by step like the example: a 20 cm by 10 cm photo with a framed area of 336 cm². Then type the border width.

### Find the mistake

Read Taz's working. Check his answer in the equation.

### Which answer fits?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: reshaping a quadratic first, an unknown in a power, a negative power, a double solution, and a context where one solution is thrown out."
tasks:
  - hint: ["Move the 14 across: x² + 5x − 14 = 0.", "Two numbers that multiply to −14 and add to 5."]
    check:
      type: question
      q: "Solve $x^2 + 5x = 14$."
      options: ["$x = 2$ or $x = -7$", "$x = 7$ or $x = -2$", "$x = 0$ or $x = -5$"]
      answer: 0
      feedback: [null, "Check x = 7: 49 + 35 = 84, not 14. The signs are the other way.", "That's what x(x + 5) = 0 gives, but the right side is 14, not 0."]
      explain: "x² + 5x − 14 = 0, so (x + 7)(x − 2) = 0, which gives x = −7 or x = 2. Check x = 2: 4 + 10 = 14."
    smaller:
      check: { type: number, q: "After moving the 14 across, $x^2 + 5x - 14 = 0$. Two numbers multiply to −14 and add to 5. What is the positive one?", answer: 7, explain: "7 × (−2) = −14 and 7 − 2 = 5, so the brackets are (x + 7)(x − 2)." }
  - hint: ["Write 81 as a power of 3.", "$81 = 3^4$, so $x + 1 = 4$."]
    check:
      type: number
      q: "Solve $3^{x + 1} = 81$."
      answer: 3
      feedback:
        - [4, "That's the exponent x + 1 = 4. Then x is one less."]
        - [27, "81 ÷ 3 is 27, but the unknown is in the power. Write 81 as 3 to a power."]
      explain: "81 = 3⁴, so x + 1 = 4 and x = 3. Check: 3⁴ = 81."
  - hint: ["What is $\\dfrac{1}{2^3}$ as a power of 2?", "A negative power is a reciprocal."]
    check:
      type: number
      q: "Edge case: solve $2^x = \\dfrac{1}{8}$."
      answer: -3
      feedback:
        - [3, "2³ = 8, not 1/8. A reciprocal needs a negative power."]
        - [-8, "That's the denominator. Write 1/8 as 2 to a power."]
      explain: "1/8 = 2⁻³, so x = −3. Check: 2⁻³ = 1/2³ = 1/8."
  - hint: ["Try factorising: what multiplies to 9 and adds to −6?", "Both numbers are the same."]
    check:
      type: question
      q: "Edge case: how many solutions does $x^2 - 6x + 9 = 0$ have?"
      options: ["One: $x = 3$", "Two: $x = 3$ and $x = -3$", "None", "One: $x = 9$"]
      answer: 0
      feedback: [null, "Check x = −3: 9 + 18 + 9 = 36, not 0.", "It does have a solution: x = 3 gives 9 − 18 + 9 = 0.", "x = 9 gives 81 − 54 + 9 = 36."]
      explain: "x² − 6x + 9 = (x − 3)², so (x − 3)(x − 3) = 0 and the only answer is x = 3. A perfect square gives one solution."
  - hint: ["Width $w$, length $w + 3$. The area is $w(w + 3)$.", "Expand, move the 40 across, factorise."]
    check:
      type: number
      q: "A rectangle's length is 3 cm more than its width, and its area is 40 cm². How wide is it, in cm?"
      answer: 5
      feedback:
        - [-8, "That solves the equation, but a width can't be negative."]
        - [8, "That's the length: the rectangle is 5 by 8. The width is the shorter side."]
      explain: "w(w + 3) = 40, so w² + 3w − 40 = 0 and (w + 8)(w − 5) = 0. w = −8 is thrown out, so w = 5. The rectangle is 5 cm by 8 cm: 5 × 8 = 40."
```

### Reshape first

### An unknown in a power

### A negative power

### One solution, not two

### A rectangle

## Practise: set up, solve, check

```step
stage: practise
insight: "Quadratics that need reshaping, unknowns in powers and a word problem where a solution is thrown out, with the review keeping completing the square fresh."
tasks:
  - check:
      type: number
      q: "Solve $x^2 + 2x = 24$. Give the positive solution."
      answer: 4
      feedback:
        - [24, "Move the 24 across first: x² + 2x − 24 = 0."]
        - [-6, "That is the other solution. The question asks for the positive one."]
      explain: "x² + 2x − 24 = 0, so (x + 6)(x − 4) = 0: x = −6 or x = 4. The positive one is 4."
  - check:
      type: number
      q: "Solve $2^x = 64$."
      answer: 6
      feedback:
        - [32, "That's 64 ÷ 2. The unknown is the power: 2 to what is 64?"]
      explain: "64 = 2⁶, so x = 6."
  - check:
      type: number
      q: "Solve $5^{x - 1} = 25$."
      answer: 3
      feedback:
        - [2, "That's the exponent x − 1 = 2. Then x is one more."]
      explain: "25 = 5², so x − 1 = 2 and x = 3. Check: 5² = 25."
  - check:
      type: number
      q: "A garden is 4 m longer than it is wide, and its area is 60 m². How wide is it, in m?"
      answer: 6
      feedback:
        - [-10, "That solves the equation, but a width can't be negative."]
        - [10, "The garden is 6 m by 10 m. The width is the smaller one."]
      explain: "w(w + 4) = 60, so w² + 4w − 60 = 0 and (w + 10)(w − 6) = 0. w = 6. The garden is 6 m by 10 m."
    smaller:
      check:
        type: question
        q: "Which equation says the area is 60?"
        options: ["$w(w + 4) = 60$", "$w + w + 4 = 60$", "$4w = 60$"]
        answer: 0
        feedback: [null, "That's adding the sides. Area multiplies the width by the length.", "The length is w + 4, not 4 times the width."]
        explain: "The width is w and the length is w + 4, so the area is w(w + 4)."
  - check:
      type: number
      q: "Review: $x^2 + 6x + 1 = (x + 3)^2 + k$. What is $k$?"
      answer: -8
      feedback:
        - [1, "The bracket (x + 3)² already has a corner of 9. Take it away from 1."]
      explain: "Half of 6 is 3, the corner needs 9, and 1 − 9 = −8."
```

### Reshape

### A power

### Another power

### A word problem

### Review

Completing the square, from the last lesson.

## Make: a bigger print

```step
stage: make
insight: "Back to the frame: set up, expand, move across, divide, factorise, throw out the negative and check, with a bigger print."
tasks:
  - hint: ["The picture is 40 + 2x by 30 + 2x.", "1656 − 1200 = 456, and 456 ÷ 4 = 114."]
    check:
      type: reasoning
      paper: true
      q: "A print is 40 cm by 30 cm. A frame of width $x$ goes all the way round, and the framed picture's area should be 1656 cm². The sizes are made up. Find the border."
      steps:
        - ["$(40 + 2x)(30 + 2x) = 1656$", "the border goes on both ends of each side"]
        - ["$4x^2 + 140x + 1200 = 1656$, so $4x^2 + 140x - 456 = 0$", "expand, then move across so one side is 0"]
        - ["$x^2 + 35x - 114 = 0$", "divide by 4"]
        - ["$(x + 38)(x - 3) = 0$", "38 × (−3) = −114 and 38 − 3 = 35"]
        - ["$x = 3$", "x = −38 can't be a width"]
      picks:
        - step: 5
          q: "Why isn't $x = -38$ the border?"
          options: ["A border can't be −38 cm wide", "−38 doesn't solve the equation", "Only the second bracket counts"]
          answer: 0
          feedback: [null, "It does: (40 − 76)(30 − 76) = (−36)(−46) = 1656. The picture decides, not the equation.", "Both brackets give an answer. The frame decides which one fits."]
      answer: "3"
      answerLabel: "Border (cm)"
      feedback:
        - ["-38", "That solves the equation, but a width can't be negative."]
        - ["38", "That is the number in the bracket, which gives x = −38. Set the bracket to 0: x + 38 = 0."]
      criteria:
        - "I wrote the sides as 40 + 2x and 30 + 2x."
        - "I moved everything across so one side was 0 before I factorised."
        - "I threw out the negative answer and gave a reason."
      explain: "x² + 35x − 114 = (x + 38)(x − 3) = 0, so x = 3. The border is 3 cm: 46 × 36 = 1656."
  - check:
      type: number
      q: "Check by substitution: put $x = 3$ into $(40 + 2x)(30 + 2x)$. What area do you get?"
      answer: 1656
      feedback:
        - [1200, "That is the print without a border. Put x = 3 into both brackets."]
      explain: "(40 + 6)(30 + 6) = 46 × 36 = 1656. ✓"
```

### The print

Do this one on paper first, then type your answer.

### Check it

**Also used in**

- **Land and building.** Fixing a path width or a wall thickness when the area is known.
- **Index equations.** Writing both sides as powers of the same base, which is where the Real numbers index laws pay off.
- **Next lesson.** Solving inequalities, where the answer is a whole range, and the context decides which values fit.
