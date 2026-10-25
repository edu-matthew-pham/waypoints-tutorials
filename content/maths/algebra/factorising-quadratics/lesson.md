---
order: 17
unit: binomials
node: AC9M9A02 n3
uses: [AC9M9A02 n1, AC9M9A02 n2]
assumes: [AC9M9A01 n1, AC9M9A01 n2, AC9M9A01 n3]   # x × x = x² only
connection: garden-extend
title: Factorising quadratics
summary: "Run the pattern backwards: for x² + bx + c, find two numbers that multiply to c and add to b."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You know the area of a garden bed and one side. How do you find the other side from x² + 7x + 12?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8342
  url: http://127.0.0.1:8342/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: quad.yml#explain-pic, caption: "$x^2 + 5x + 6$ packs into a rectangle $(x + 2)$ by $(x + 3)$: the numbers 2 and 3 add to 5 and multiply to 6." }
explainClip:
  query: { code: "@quad.yml#explain", fresh: 1, id: explain }
  caption: "Find two numbers: add to b, multiply to c"
  say: "Pack the tiles into a rectangle. The two sides give the two brackets."
  clip:
    - caption: { text: "x² + 5x + 6: pack the tiles into a rectangle.", say: "Pack x squared plus five x plus six into a rectangle." }
    - wait: 600
    - caption: { text: "Try 1 and 6: they multiply to 6, but add to 7.", say: "One and six multiply to six, but add to seven." }
    - click: Make p bigger
    - wait: 900
    - caption: { text: "2 and 3: multiply to 6, add to 5. It fits.", say: "Two and three multiply to six and add to five." }
    - click: Make p bigger
    - click: Make q smaller
    - click: Make q smaller
    - click: Make q smaller
    - click: Make q smaller
    - wait: 1000
---
Last lesson you started with two brackets and found the answer. Now start with the answer and find the two brackets.

## Predict: the other side

```step
stage: predict
insight: "Committing to the other side shows who divides the number term (12 ÷ 3 = 4) or who looks for the number that fits both the sum and the product."
check:
  type: predict
  q: "A garden bed has area $x^2 + 7x + 12$ and one side is $x + 3$. What's the other side?"
  options:
    - "$x + 4$"
    - "$x + 9$"
    - "$x + 7$"
    - "$x + 12$"
  actual: "x + 4. (x + 3)(x + 4) = x² + 7x + 12: the numbers 3 and 4 add to 7 and multiply to 12. x + 9 adds 3 + 9 = 12 to the middle; x + 7 copies the middle."
```

<figure class="situation" role="img" aria-label="A rectangle labelled area x squared plus 7x plus 12. The side across the top is x plus 3. The side down is marked with a question mark."><svg viewBox="0 0 360 260" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="50" width="230" height="170" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56" stroke-width="1.2"/><text x="175" y="140" text-anchor="middle" fill="currentColor" stroke="none">area x² + 7x + 12</text><text x="175" y="38" text-anchor="middle" fill="currentColor" stroke="none">x + 3</text><text x="310" y="140" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

The club knows the new bed's area and one side. What's the other side?

## Run: pack the tiles

```step
stage: run
insight: "Packing x², 7 x-tiles and 12 ones into a rectangle needs two numbers that add to 7 and multiply to 12."
try: { playground: board, starter: "quad.yml#run", height: 600 }
check: { type: board, text: "Pack $x^2 + 7x + 12$ into a rectangle. Which two numbers worked? Was your prediction right?", when: "r = 1" }
```

Move $p$ and $q$ until the rectangle matches $x^2 + 7x + 12$. The board says when it fits.

## Investigate: add and multiply

```step
stage: investigate
insight: "The two numbers add to the middle and multiply to the end. Mia finds a pair that multiplies to c but ignores the sum and the signs."
tasks:
  - check:
      type: answer
      q: "Factorise $x^2 + 8x + 15$. Type $x^2$ as x^2."
      answer: "(x + 3)(x + 5)"
      form: factorised
      feedback:
        - ["(x + 1)(x + 15)", "1 × 15 = 15, but 1 + 15 = 16, not 8."]
        - ["(x + 2)(x + 6)", "That makes x² + 8x + 12. The numbers must multiply to 15."]
      explain: "Pairs that multiply to 15: 1 and 15 (sum 16), 3 and 5 (sum 8). So (x + 3)(x + 5)."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia factorises $x^2 - x - 6$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: factor-pair-sign
      explain: "Line 3: −2 + 3 = 1, but the middle is −1. The numbers multiply to −6 and add to −1: 2 and −3. So (x + 2)(x − 3)."
  - check:
      type: question
      q: "How can you check that $(x + 2)(x - 3)$ is the factorisation of $x^2 - x - 6$?"
      options: ["Expand it and compare", "Check that 2 and 3 multiply to 6", "Check that it has two brackets"]
      answer: 0
      feedback: [null, "That ignores the sign: 2 × (−3) = −6, and 2 + (−3) = −1.", "Any two brackets have two brackets."]
      explain: "Expanding is the check: x² − 3x + 2x − 6 = x² − x − 6."
```

### Two numbers

Here's the method, worked out.

```worked
x^2 + 7x + 12 :: Two numbers: add to 7, multiply to 12.
1 \times 12 = 12, \; 1 + 12 = 13 :: Too big.
2 \times 6 = 12, \; 2 + 6 = 8 :: Close.
3 \times 4 = 12, \; 3 + 4 = 7 :: That's it.
(x + 3)(x + 4) :: The brackets.
```

Now try one on paper: $x^2 + 9x + 20$. Then type your answer.

### Find the mistake

Read Mia's working. Check her two numbers against both rules.

### Check by expanding

## Modify: change the signs

```step
stage: modify
insight: "A negative number term means one number is positive and one negative; a negative middle with a positive end means both are negative. The sign of c tells you whether the numbers match."
try: { playground: board, starter: "quad.yml#vary", height: 620 }
tasks:
  - hint: ["Both numbers are negative.", "They multiply to +6 and add to −5."]
    check: { type: answer, q: "Factorise $x^2 - 5x + 6$.", answer: "(x - 2)(x - 3)", form: factorised, feedback: [["(x + 2)(x + 3)", "That makes +5x. The middle is −5x, so both numbers are negative."], ["(x - 1)(x - 6)", "1 + 6 = 7, not 5."]], explain: "−2 and −3: they multiply to 6 and add to −5." }
    smaller:
      check: { type: "number", q: "Which two numbers multiply to 6 and add to −5? Type the bigger one.", answer: -2, explain: "−2 and −3: −2 × (−3) = 6 and −2 + (−3) = −5. The bigger one is −2." }
  - hint: ["The end is negative, so one number is positive and one negative.", "They multiply to −12 and add to 1."]
    check: { type: answer, q: "Factorise $x^2 + x - 12$.", answer: "(x - 3)(x + 4)", form: factorised, feedback: [["(x + 3)(x - 4)", "That makes −x. The middle is +x, so the bigger number is positive."], ["(x - 2)(x + 6)", "−2 + 6 = 4, not 1."]], explain: "−3 and 4: they multiply to −12 and add to 1." }
  - hint: ["The middle is 0.", "The two numbers cancel: one is the opposite of the other."]
    check: { type: answer, q: "Factorise $x^2 - 25$.", answer: "(x - 5)(x + 5)", form: factorised, feedback: [["(x - 5)(x - 5)", "That makes −10x in the middle."]], explain: "−5 and 5 multiply to −25 and add to 0: the strips cancel." }
  - hint: ["The two numbers are the same.", "Think of a number times itself that gives 16, and adds to 8."]
    check: { type: answer, q: "Edge case: factorise $x^2 + 8x + 16$.", answer: "(x + 4)(x + 4)", form: factorised, feedback: [["(x + 2)(x + 8)", "2 + 8 = 10, not 8."]], explain: "4 and 4 multiply to 16 and add to 8: $(x + 4)^2$." }
```

### Both negative

### One of each

### Strips that cancel

### A square

## Practise: find the pair

```step
stage: practise
insight: "Factorising with each sign pattern, mixed; the review keeps taking a common factor fresh."
tasks:
  - check:
      type: answer
      q: "Factorise $x^2 + 9x + 14$."
      answer: "(x + 2)(x + 7)"
      form: factorised
      feedback:
        - ["(x + 1)(x + 14)", "1 + 14 = 15, not 9."]
      explain: "2 and 7 multiply to 14 and add to 9."
  - check:
      type: answer
      q: "Factorise $x^2 - 3x - 10$."
      answer: "(x - 5)(x + 2)"
      form: factorised
      feedback:
        - ["(x + 5)(x - 2)", "That makes +3x. The middle is −3x."]
      explain: "−5 and 2 multiply to −10 and add to −3."
  - check:
      type: answer
      q: "Factorise $x^2 - 11x + 24$."
      answer: "(x - 3)(x - 8)"
      form: factorised
      feedback:
        - ["(x + 3)(x + 8)", "That makes +11x. The middle is −11x, so both numbers are negative."]
        - ["(x - 4)(x - 6)", "4 + 6 = 10, not 11."]
      explain: "−3 and −8 multiply to 24 and add to −11."
    smaller:
      check: { type: "number", q: "Which two numbers multiply to 24 and add to 11? Type the smaller one.", answer: 3, explain: "3 × 8 = 24 and 3 + 8 = 11." }
  - check:
      type: answer
      q: "Review: factorise $6x + 15$ fully."
      answer: "3(2x + 5)"
      form: factorised
      feedback:
        - ["6(x + 15)", "Divide every term: 15 ÷ 6 is not a whole number."]
      explain: "The HCF of 6 and 15 is 3: 3(2x + 5)."
```

### Both positive

### One negative

### Both negative

### Review

A common factor, from Factorising.

## Make: the other side

```step
stage: make
insight: "Coming back to the garden: the factorisation gives the other side, and putting a number in shows the bed's size."
tasks:
  - hint: ["Find two numbers that multiply to 12 and add to 7.", "3 and 4."]
    check:
      type: answer
      q: "The bed's area is $x^2 + 7x + 12$ and one side is $x + 3$. Factorise to find the other side."
      answer: "(x + 3)(x + 4)"
      form: factorised
      feedback:
        - ["(x + 3)(x + 9)", "3 + 9 = 12, not 7. Find two numbers that multiply to 12 and add to 7."]
      explain: "3 and 4 multiply to 12 and add to 7: the other side is x + 4."
  - hint: ["The sides are x + 3 and x + 4.", "Put x = 5 into both."]
    check:
      type: reasoning
      paper: true
      q: "The club picks $x = 5$. How long is the other side, and what's the area in square metres?"
      steps:
        - ["$x + 3 = 8$ m and $x + 4 = 9$ m", "put x = 5 into each side"]
        - ["$8 \\times 9 = 72$ m²", "multiply the sides"]
        - ["$25 + 35 + 12 = 72$ m²", "check with x² + 7x + 12"]
      answer: "72"
      answerLabel: "Area (m²)"
      feedback:
        - ["9", "That's the other side. The area is the two sides multiplied."]
      criteria:
        - "I put x = 5 into both brackets."
        - "I checked the area with the expanded form."
        - "My two answers match."
      explain: "(5 + 3)(5 + 4) = 8 × 9 = 72, and 25 + 35 + 12 = 72."
```

### The other side

Back to the garden. Work this out on paper first, then type your answer.

### Pick a size

**Also used in**

- **Solving.** If $(x + 3)(x + 4) = 0$, one bracket must be zero: that's how quadratic equations are solved.
- **Next lesson.** Which form is useful when: expanded or factorised?
