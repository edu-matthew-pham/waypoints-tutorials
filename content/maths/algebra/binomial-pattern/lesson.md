---
order: 16
unit: binomials
node: AC9M9A02 n2
uses: [AC9M9A02 n1]
assumes: [AC9M9A01 n1, AC9M9A01 n2, AC9M9A01 n3]   # x × x = x² only
connection: mental-shortcut
title: The pattern
summary: "Every (x + a)(x + b) comes out as x² + (a + b)x + ab: add the numbers for the middle, multiply them for the end."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Someone says 47 × 53 is 2491 before you can find your phone. There's a pattern in two brackets that does it."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8341
  url: http://127.0.0.1:8341/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: pattern.yml#explain-pic, caption: "$(x + 5)(x + 2)$: the strips are $5x$ and $2x$, which join to make $7x$. The corner is $5 \\times 2 = 10$." }
explainClip:
  query: { code: "@pattern.yml#explain", fresh: 1, id: explain }
  caption: "Add for the middle, multiply for the end"
  say: "The two strips join into one, and the corner is the two numbers multiplied."
  clip:
    - caption: { text: "(x + 5)(x + 2): the strips are 5x and 2x.", say: "The strips are five x and two x." }
    - wait: 600
    - caption: { text: "Together: 7x. That's 5 + 2.", say: "Together that's seven x. Five plus two." }
    - wait: 900
    - caption: { text: "The corner: 10. That's 5 × 2.", say: "The corner is ten. Five times two." }
    - wait: 900
    - expect: { selector: "#tsum", contains: "x² + 7x + 10" }
---
Last lesson you drew the rectangle and added four pieces. The same four pieces appear every time, so you can skip the drawing.

## Predict: 47 × 53

```step
stage: predict
insight: "Committing to an answer shows who thinks 47 × 53 matches 50 × 50, because the two numbers are each 3 from 50."
check:
  type: predict
  q: "What is $47 \\times 53$?"
  options:
    - "2491"
    - "2500"
    - "2509"
    - "2481"
  actual: "2491. It's (50 − 3)(50 + 3): the two strips cancel and the corner is −9, so it's 2500 − 9. Not 2500: one side is shorter by 3 and the other longer by 3, and the rectangle is not the square."
```

<figure class="situation" role="img" aria-label="A square 50 by 50. A rectangle 47 wide and 53 tall is drawn over it: 3 narrower on the right and 3 taller at the top."><svg viewBox="0 0 340 300" width="340" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="40" y="60" width="200" height="200" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.2"/><text x="140" y="165" text-anchor="middle" fill="currentColor" stroke="none">50 × 50</text><rect x="40" y="48" width="188" height="212" stroke-width="1.2" stroke-dasharray="6 4"/><text x="134" y="36" text-anchor="middle" fill="currentColor" stroke="none">47</text><text x="256" y="160" fill="currentColor" stroke="none">53</text></svg></figure>

A 47 by 53 rectangle is almost a 50 by 50 square. No calculator. What's its area?

## Run: spot the pattern

```step
stage: run
insight: "Trying several pairs of numbers on the board shows the middle count is the sum of the two numbers and the corner is their product."
try: { playground: board, starter: "pattern.yml#run", height: 600 }
check: { type: board, text: "Set the board to $(x + 5)(x + 2)$. Read the middle and the end. How do they come from 5 and 2?", when: "p = 5 and q = 2" }
```

Try a few pairs. Each time, look at the number in front of $x$ and the last number, and compare them with $p$ and $q$.

## Investigate: add and multiply

```step
stage: investigate
insight: "The middle number is a + b because there are two strips; the last is ab because it's the corner. Sam swaps them."
tasks:
  - check:
      type: answer
      q: "Use the pattern: expand $(x + 6)(x + 4)$. Type $x^2$ as x^2."
      answer: "x^2 + 10x + 24"
      form: expanded
      feedback:
        - ["x^2 + 24x + 10", "The middle is 6 + 4 and the end is 6 × 4. Not the other way round."]
        - ["x^2 + 24", "The middle number is 6 + 4, as the two strips together."]
      explain: "6 + 4 = 10 in the middle and 6 × 4 = 24 at the end: x² + 10x + 24."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam uses the pattern on $(x + 3)(x + 5)$. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: pattern-sum-product
      explain: "Line 3: the middle number is the sum, 3 + 5 = 8, and the last is the product, 3 × 5 = 15: x² + 8x + 15."
  - check:
      type: answer
      q: "Use the pattern: expand $(x + 7)(x - 2)$."
      answer: "x^2 + 5x - 14"
      form: expanded
      feedback:
        - ["x^2 + 9x - 14", "The second number is −2, so the sum is 7 + (−2) = 5."]
        - ["x^2 + 5x + 14", "7 × (−2) is −14."]
      explain: "7 + (−2) = 5 in the middle, and 7 × (−2) = −14 at the end: x² + 5x − 14."
```

### Add and multiply

Here's the pattern, worked out.

```worked
(x + 5)(x + 2) :: Numbers: 5 and 2.
5 + 2 = 7 :: The middle: the two strips together.
5 \times 2 = 10 :: The end: the corner.
x^2 + 7x + 10 :: Put it together.
```

Now try one on paper: $(x + 3)(x + 8)$. Then type your answer.

### Find the mistake

Read Sam's working. Which is the sum and which is the product?

### With a negative

Put the minus in with its number, then add and multiply.

## Modify: change one number

```step
stage: modify
insight: "Opposite numbers make the middle disappear (a difference of squares); the same number makes a perfect square; the pattern also shortcuts mental sums."
try: { playground: board, starter: "pattern.yml#vary", height: 620 }
tasks:
  - hint: ["Set p to 6 and q to −6.", "The middle number is 6 + (−6)."]
    check: { type: answer, q: "Expand $(x + 6)(x - 6)$. Which term disappears?", answer: "x^2 - 36", form: expanded, feedback: [["x^2 + 36", "6 × (−6) is −36."], ["x^2 - 12x - 36", "The strips cancel: 6 + (−6) = 0."]], explain: "6 + (−6) = 0, so there's no middle term. 6 × (−6) = −36: x² − 36." }
  - hint: ["$(x + 4)^2$ is $(x + 4)(x + 4)$.", "The middle is 4 + 4."]
    check: { type: answer, q: "Expand $(x + 4)^2$.", answer: "x^2 + 8x + 16", form: expanded, feedback: [["x^2 + 16", "There are two strips of 4x: 8x."], ["x^2 + 4x + 16", "Two strips of 4x make 8x."]], explain: "4 + 4 = 8 in the middle and 4 × 4 = 16 at the end." }
  - hint: ["Write 47 as 50 − 3 and 53 as 50 + 3.", "Think of 50 as the x: (50 − 3)(50 + 3)."]
    check: { type: number, q: "Use $x = 50$: $(x - 3)(x + 3) = x^2 - 9$. What is $47 \\times 53$?", answer: 2491, explain: "50² = 2500, and 2500 − 9 = 2491." }
    smaller:
      check: { type: "number", q: "Just the first part: what's $50^2$?", answer: 2500, explain: "50 × 50 = 2500." }
  - hint: ["Both numbers are 4 from 60 on each side.", "$x = 60$ and the numbers are −4 and +4."]
    check: { type: number, q: "Edge case: what is $56 \\times 64$?", answer: 3584, explain: "(60 − 4)(60 + 4) = 3600 − 16 = 3584." }
```

### Opposite numbers

Each task changes one thing. Set the board, then type the expansion.

### Same number

### A mental shortcut

### Another pair

## Practise: use the pattern

```step
stage: practise
insight: "Using the pattern with each sign combination, mixed; the review keeps the rectangle fresh."
tasks:
  - check:
      type: answer
      q: "Expand $(x + 9)(x + 2)$."
      answer: "x^2 + 11x + 18"
      form: expanded
      feedback:
        - ["x^2 + 18x + 11", "The middle is the sum 9 + 2, and the end is the product 9 × 2."]
      explain: "9 + 2 = 11 and 9 × 2 = 18: x² + 11x + 18."
  - check:
      type: answer
      q: "Expand $(x - 8)(x + 3)$."
      answer: "x^2 - 5x - 24"
      form: expanded
      feedback:
        - ["x^2 + 5x - 24", "The numbers are −8 and +3: the sum is −5."]
        - ["x^2 - 5x + 24", "−8 × 3 is −24."]
      explain: "−8 + 3 = −5 and −8 × 3 = −24."
  - check:
      type: answer
      q: "Expand $(x - 7)(x - 5)$."
      answer: "x^2 - 12x + 35"
      form: expanded
      feedback:
        - ["x^2 - 12x - 35", "−7 × (−5) is +35."]
        - ["x^2 + 12x + 35", "Both numbers are negative, so the sum is −12."]
      explain: "−7 + (−5) = −12 and (−7) × (−5) = 35."
    smaller:
      check: { type: "number", q: "Just the middle number: what's $-7 + (-5)$?", answer: -12, explain: "Both are negative: −7 − 5 = −12." }
  - check:
      type: answer
      q: "Review: expand $(x + 2)(x + 6)$ by drawing the rectangle first."
      answer: "x^2 + 8x + 12"
      form: expanded
      feedback:
        - ["x^2 + 12", "The two strips are 2x and 6x."]
      explain: "x² + 6x + 2x + 12 = x² + 8x + 12."
```

### Two positive

### One negative

### Two negative

### Review

The rectangle from last time still works.

## Make: back to 47 × 53

```step
stage: make
insight: "Coming back to the opening product: the same idea works for a different pair, and writing the steps shows why it works."
tasks:
  - hint: ["Both numbers are the same distance from 70.", "$x = 70$ and the numbers are −2 and +2."]
    check:
      type: reasoning
      paper: true
      q: "Work out $68 \\times 72$ without a calculator, using the pattern."
      steps:
        - ["$68 = 70 - 2$ and $72 = 70 + 2$", "write each number as 70 plus or minus 2"]
        - ["$(x - 2)(x + 2) = x^2 - 4$ with $x = 70$", "the middle disappears: −2 + 2 = 0"]
        - ["$70^2 - 4 = 4900 - 4 = 4896$", "put x = 70 back in"]
      answer: "4896"
      answerLabel: "68 × 72"
      feedback:
        - ["4900", "That's 70 × 70. Take off 2 × 2 = 4."]
        - ["4904", "−2 × 2 is −4, so take it off."]
      criteria:
        - "I wrote both numbers as 70 plus or minus the same amount."
        - "I used x² minus a square."
        - "My answer is a little less than 4900."
      explain: "(70 − 2)(70 + 2) = 4900 − 4 = 4896."
  - hint: "Look at the shape of the answer from the first task."
    check:
      type: question
      q: "Which pair is quickest to multiply in your head with this pattern?"
      options:
        - "$49 \\times 51$"
        - "$47 \\times 62$"
        - "$38 \\times 73$"
      answer: 0
      explain: "49 and 51 are 1 below and 1 above 50: 2500 − 1 = 2499. The others aren't the same distance from a round number."
```

### Your own product

Back to 47 × 53. Work this one on paper first, then type your answer.

### Choose a pair

**Also used in**

- **Mental maths.** Any two numbers the same distance either side of a round number.
- **Next lesson.** Running the pattern backwards: a quadratic like $x^2 + 7x + 12$ comes from two brackets. Which?
