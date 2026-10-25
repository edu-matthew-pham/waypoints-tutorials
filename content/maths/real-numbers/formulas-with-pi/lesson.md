---
order: 13
unit: reals9
node: AC9M9N01 n4
uses: [AC9M9N01 n2]
assumes: [AC9M8N01 n1, AC9M8N01 n2]
connection: pizza-value
title: Formulas with π and roots
summary: "Put real numbers into a formula and keep π or the root exact until the end. Often the π cancels when you compare, so you never need its digits."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A large pizza or two medium ones: which is more pizza? Your answer depends on a number that never ends."
---
Formulas for circles and diagonals have π and square roots in them. You can keep them exact, round at the end, or sometimes skip the digits altogether.

## Predict: one large or two mediums

```step
stage: predict
insight: "Committing before calculating shows who thinks area doubles with width (so one 30 cm is more than two 23 cm) rather than with the square of the radius."
check:
  type: predict
  q: "A shop sells a large pizza that's 30 cm across and a medium that's 23 cm across. Is one large pizza more pizza than two mediums?"
  options:
    - "No: two mediums are more pizza"
    - "Yes: one large is more pizza"
    - "They're about the same"
    - "You can't tell without the price"
  actual: "No: two mediums are more. The large has area π × 15² = 225π ≈ 707 cm². A medium has π × 11.5² = 132.25π, so two have 264.5π ≈ 831 cm²."
```

<figure class="situation" role="img" aria-label="One big circle labelled large, 30 centimetres across, and two smaller circles labelled medium, 23 centimetres across. The question is which has more pizza."><svg viewBox="0 0 420 180" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="100" cy="90" r="75" fill="#EF9F27" fill-opacity="0.35" stroke="#BA7517" stroke-width="1.5"/><text x="100" y="94" text-anchor="middle" fill="currentColor" stroke="none">large: 30 cm</text><circle cx="270" cy="90" r="57" fill="#EF9F27" fill-opacity="0.35" stroke="#BA7517" stroke-width="1.5"/><circle cx="375" cy="90" r="0" stroke="none"/><text x="270" y="94" text-anchor="middle" fill="currentColor" stroke="none">medium</text><text x="270" y="170" text-anchor="middle" fill="currentColor" stroke="none">23 cm, and another one just the same</text></svg></figure>

The sizes are made up for the task. Don't use a calculator yet: is one large more than two mediums?

## Run: calculate it

```step
stage: run
insight: "A calculator's π key keeps many digits, so the area of the large pizza comes out close to its exact value of 225π."
check: { type: number, q: "Use your calculator's π key. What's the area of the large pizza, $\\pi \\times 15^2$, to the nearest whole number of cm²? Was your prediction right?", answer: 707, tolerance: 0.6, explain: "π × 225 = 706.86…, so 707 cm²." }
```

Now work out the medium's area, $\pi \times 11.5^2$, and double it.

## Investigate: π stays exact

```step
stage: investigate
insight: "Write areas as a number times π and compare the numbers: the π is the same on both sides. Pia rounds π to 3 and calls the result exact."
tasks:
  - check:
      type: question
      q: "What's the exact area of a circle of radius 5 cm?"
      options: ["$25\\pi$ cm²", "$78.5$ cm²", "$10\\pi$ cm²", "$25$ cm²"]
      answer: 0
      feedback: [null, "78.5 is rounded: π was cut to 3.14.", "Radius squared, not doubled: 5² = 25.", "Don't forget π."]
      explain: "A = πr² = π × 25 = 25π cm²."
  - check:
      type: bug
      code: "working.txt#pia"
      text: "Pia finds the large pizza's area. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: round-early
      explain: "Line 4: with π = 3 the area is only approximate. The exact area is 225π cm², about 707 cm²."
  - check:
      type: number
      q: "A pizza of radius 15 cm has area $225\\pi$. Two mediums have area $264.5\\pi$ in total. Which has the bigger number in front of π? Type that number."
      answer: 264.5
      explain: "264.5 is bigger than 225, so two mediums are more pizza. The π is the same on both sides, so it doesn't matter what its digits are."
```

### Keep it exact

Here's the comparison without ever using π's digits.

```worked
r = 15 :: Large: half of 30.
A = \pi \times 15^2 = 225\pi :: Keep π.
r = 11.5 :: Medium: half of 23.
A = \pi \times 11.5^2 = 132.25\pi :: One medium.
2 \times 132.25\pi = 264.5\pi :: Two mediums.
264.5 > 225 :: The π is on both sides: compare the numbers.
```

Now try one on paper: one circle of radius 6 cm or two of radius 4 cm. Which is bigger, and by how many π? Type the difference in π units (a number).

### Find the mistake

Read Pia's working. Is 675 exact?

### The bigger number

## Modify: change the shapes

```step
stage: modify
insight: "Changing the formula: a calculator answer to one decimal place, the diameter given instead of the radius, and two roots multiplied exactly."
tasks:
  - hint: ["π × 10² = π × 100.", "Use the π key."]
    check: { type: number, q: "A circle has radius 10 cm. What's its area to 1 decimal place?", answer: 314.2, tolerance: 0.06, explain: "π × 100 = 314.159…, so 314.2 cm²." }
    smaller:
      check: { type: "number", q: "Just the square: what's $10^2$?", answer: 100, explain: "10 × 10 = 100." }
  - hint: ["Halve the diameter first.", "Radius 6, then square."]
    check: { type: number, q: "A circle has diameter 12 cm. Its exact area is $k\\pi$ cm². What's $k$?", answer: 36, explain: "r = 6 and 6² = 36: 36π." }
  - hint: ["√2 × √8 = √16.", "√16 is a whole number."]
    check: { type: number, q: "Edge case: what is $\\sqrt{2} \\times \\sqrt{8}$ exactly?", answer: 4, explain: "√2 × √8 = √16 = 4: the roots multiply into a whole number." }
```

### Area to 1 decimal place

### Diameter given

### Two roots

## Practise: exact and rounded

```step
stage: practise
insight: "Using formulas with π and roots, exact and rounded, mixed; the review keeps ranges fresh."
tasks:
  - check:
      type: number
      q: "A circle has radius 4 cm. Its exact area is $k\\pi$ cm². What's $k$?"
      answer: 16
      explain: "4² = 16: 16π."
  - check:
      type: number
      q: "Use the π key: the area of a circle of radius 7 cm, to 1 decimal place."
      answer: 153.9
      tolerance: 0.06
      explain: "π × 49 = 153.938…, so 153.9 cm²."
    smaller:
      check: { type: "number", q: "Just the square: what's $7^2$?", answer: 49, explain: "7 × 7 = 49." }
  - check:
      type: number
      q: "A square has side 3 cm. Its diagonal is $\\sqrt{18}$ cm. To 2 decimal places, how long is it?"
      answer: 4.24
      tolerance: 0.006
      explain: "√18 = 4.2426…, so 4.24."
  - check:
      type: question
      q: "Review: a hole passes if $19.95 \\le x \\le 20.05$. Does 20.05 pass?"
      options: ["Yes: ≤ keeps the end", "No: it's on the end"]
      answer: 0
      feedback: [null, "≤ means the end counts."]
      explain: "20.05 ≤ 20.05, so it passes."
```

### Exact area

### Rounded area

### Diagonal

### Review

A range, from the last lesson.

## Make: back to the pizzas

```step
stage: make
insight: "Coming back to the pizzas: the comparison done exactly, and then a rounded answer for how much more pizza two mediums give."
tasks:
  - hint: ["Large 225π, two mediums 264.5π.", "Subtract, then use π, then round once."]
    check:
      type: reasoning
      paper: true
      q: "How many more square centimetres of pizza do two mediums have than one large? Give the answer to the nearest whole number."
      steps:
        - ["$\\text{large} = \\pi \\times 15^2 = 225\\pi$", "radius 15"]
        - ["$\\text{two mediums} = 2 \\times \\pi \\times 11.5^2 = 264.5\\pi$", "radius 11.5"]
        - ["$264.5\\pi - 225\\pi = 39.5\\pi$", "keep π exact while subtracting"]
        - ["$39.5\\pi = 124.09\\ldots \\approx 124$", "round once, at the end"]
      answer: "124"
      answerLabel: "Extra pizza (cm²)"
      tolerance: 0.6
      feedback:
        - ["39.5", "That's the number in front of π. Multiply by π."]
        - ["125", "39.5 × π = 124.09…, not 125."]
      criteria:
        - "I kept π exact until the last step."
        - "I rounded once."
        - "My answer is a bit over 120."
      explain: "39.5π ≈ 124 cm² more pizza from the two mediums."
  - check:
      type: question
      q: "Why didn't you need π's digits to decide which is more pizza?"
      options: ["π was on both sides, so only the other numbers mattered", "π is exactly 3", "π doesn't affect area"]
      answer: 0
      feedback: [null, "π isn't 3: it's 3.14159… and never ends.", "π is in the area formula."]
      explain: "225π against 264.5π: comparing 225 with 264.5 is enough."
```

### The extra pizza

Back to the pizzas. Work it out on paper first, then type your answer.

### Why no digits?

Pizza sizes here are made up; real menus differ.

**Also used in**

- **Design and building.** Circle areas and diagonals come out irrational, and the job decides whether to keep π or round.
- **Next.** Year 9 Measurement and Algebra, with more formulas to substitute into.
