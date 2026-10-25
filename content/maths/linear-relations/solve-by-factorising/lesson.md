---
order: 20
unit: quad9
node: AC9M9A04 n3
uses: [AC9M9A04 n2, AC9M9A01 n3]
assumes: [AC9M9A04 n2, AC9M9A01 n3]
connection: garden-area
title: Solving by factorising
summary: "If two numbers multiply to give 0, one of them must be 0. That turns a factorised quadratic into two simple equations."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A garden bed is x m wide and 3 m longer than it is wide, and it must cover 40 square metres. How wide is it?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8367
  url: http://127.0.0.1:8367/index.html
  readySelector: "#board"
  layout: full
---
A quadratic equation often has two solutions. Factorising finds both, and then the situation decides which one makes sense.

## Predict: how wide?

```step
stage: predict
insight: "Committing to a width for a garden of 40 square metres shows who tries numbers and who sets up an equation. Many will guess 5 or 6."
check:
  type: predict
  q: "A garden bed is $x$ m wide and $(x + 3)$ m long, with an area of 40 square metres. How wide is it?"
  options:
    - "5 m"
    - "4 m"
    - "6 m"
    - "7 m"
  actual: "5 m. Check: 5 × (5 + 3) = 5 × 8 = 40. The equation x(x + 3) = 40 also has a second solution, x = −8, but a width can't be negative."
```

<figure class="situation" role="img" aria-label="A rectangle labelled x metres wide and x plus 3 metres long, with an area of 40 square metres."><svg viewBox="0 0 300 150" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="40" y="30" width="200" height="80" fill="#888780" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><text x="110" y="76" fill="currentColor" stroke="none">area = 40 m²</text><text x="125" y="130" fill="currentColor" stroke="none">x + 3 m</text><text x="248" y="76" fill="currentColor" stroke="none">x m</text></svg></figure>

Try some widths. Which one gives an area of 40?

## Run: where the curve meets zero

```step
stage: run
insight: "Plotting x(x + 3) − 40 shows the solutions as the x-intercepts: there are two, and only one is a width."
try: { playground: board, starter: "solve.yml#run", height: 560 }
check: { type: board, text: "Drag $P$ to the right-hand place where the curve meets the $x$-axis. Was your prediction right?", when: "x(P) = 5 and y(P) = 0" }
```

The curve is $y = x(x + 3) - 40$: the area minus 40. Where it's 0, the area is exactly 40.

## Investigate: the null factor law

```step
stage: investigate
insight: "If a product is 0, one of the factors must be 0. So (x + 8)(x − 5) = 0 gives x + 8 = 0 or x − 5 = 0, and the solutions are the opposite signs of the numbers in the brackets."
tasks:
  - check:
      type: question
      q: "$(x + 8)(x - 5) = 0$. What are the solutions?"
      options: ["$x = -8$ or $x = 5$", "$x = 8$ or $x = -5$", "$x = 8$ or $x = 5$", "$x = -3$"]
      answer: 0
      feedback: [null, "Check: if x = 8, x + 8 = 16 and x − 5 = 3, so the product isn't 0.", "If x = 8, x + 8 = 16, not 0.", "That adds the brackets' numbers. Each bracket gives its own solution."]
      explain: "x + 8 = 0 gives x = −8, and x − 5 = 0 gives x = 5."
  - check:
      type: number
      q: "Solve $x^2 - 7x + 12 = 0$. What is the smaller solution?"
      answer: 3
      explain: "(x − 3)(x − 4) = 0, so x = 3 or x = 4. The smaller is 3."
    smaller:
      check: { type: "question", q: "Two numbers multiply to 12 and add to $-7$. Which pair?", options: ["−3 and −4", "3 and 4", "−2 and −6", "−1 and −12"], answer: 0, explain: "−3 × −4 = 12 and −3 + −4 = −7." }
  - check:
      type: bug
      code: "working.txt#alex"
      text: "Alex solves a quadratic. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: factor-solution-sign
      explain: "Line 3: x − 2 = 0 gives x = 2, not −2. The solutions are the numbers that make each bracket 0: x = 2 or x = 3."
  - check:
      type: number
      q: "Solve $x^2 - 9x + 14 = 0$. What is the larger solution?"
      answer: 7
      explain: "(x − 2)(x − 7) = 0, so x = 2 or x = 7."
```

### The null factor law

Here's solving the garden equation.

```worked
x(x + 3) = 40 :: The garden: width times length is the area.
x^2 + 3x - 40 = 0 :: Expand and make one side 0.
(x + 8)(x - 5) = 0 :: Factorise: 8 × −5 = −40 and 8 + (−5) = 3.
x + 8 = 0 \text{ or } x - 5 = 0 :: If a product is 0, a factor is 0.
x = -8 \text{ or } x = 5 :: Both solve the equation.
x = 5 \text{ (a width can't be negative)} :: The situation picks one.
```

Now try one on paper: $x^2 + x - 12 = 0$. Factorise, find both solutions, then type the positive one.

### Smaller solution

### Find the mistake

Read Alex's working. Which line gets a sign wrong?

### Larger solution

## Modify: change the equation

```step
stage: modify
insight: "Matching the factors to the x-intercepts: the solutions are where the curve crosses, and some equations have only one."
try: { playground: board, starter: "solve.yml#vary", height: 560 }
tasks:
  - hint: ["The curve crosses where each bracket is 0.", "x − p = 0 gives x = p."]
    check: { type: board, text: "Set $p$ and $q$ so that $(x - p)(x - q) = 0$ has the solutions $2$ and $6$.", when: "p + q = 8 and p * q = 12" }
  - hint: ["Write x(x + 2) = 24 as x² + 2x − 24 = 0.", "Which two numbers multiply to −24 and add to 2?"]
    check: { type: number, q: "A rectangle is $x$ m wide and $(x + 2)$ m long, with area 24 square metres. How wide is it?", answer: 4, explain: "x² + 2x − 24 = 0, so (x + 6)(x − 4) = 0. x = −6 or x = 4. A width can't be negative, so x = 4." }
  - hint: ["Set p and q to the same number on the board.", "How many places does the curve touch the axis?"]
    check: { type: question, q: "Edge case: $x^2 - 6x + 9 = 0$ factorises as $(x - 3)(x - 3) = 0$. How many solutions does it have?", options: ["One: x = 3", "Two: x = 3 and x = −3", "None", "Three"], answer: 0, feedback: [null, "Both brackets give x = 3, so −3 isn't a solution.", "x = 3 works: 9 − 18 + 9 = 0.", "A quadratic never has three."], explain: "Both brackets give x = 3. The curve touches the x-axis at one point: x = 3." }
```

### Solutions 2 and 6

### Another garden

### One solution

## Practise: solve and decide

```step
stage: practise
insight: "Factorise, solve, and then use the situation to pick: the answer to the equation is not always the answer to the problem."
tasks:
  - check:
      type: number
      q: "Solve $x^2 + 5x + 6 = 0$. What is the larger solution?"
      answer: -2
      explain: "(x + 2)(x + 3) = 0, so x = −2 or x = −3. The larger one is −2."
  - check:
      type: number
      q: "Solve $x^2 - 3x - 10 = 0$. What is the positive solution?"
      answer: 5
      explain: "(x − 5)(x + 2) = 0, so x = 5 or x = −2."
    smaller:
      check: { type: "question", q: "Two numbers multiply to $-10$ and add to $-3$. Which pair?", options: ["−5 and 2", "5 and −2", "−5 and −2", "−10 and 1"], answer: 0, explain: "−5 × 2 = −10 and −5 + 2 = −3." }
  - check:
      type: question
      q: "A rectangle is $x$ m wide and $(x + 4)$ m long with area 32 m². The equation gives $x = 4$ or $x = -8$. Which is the width?"
      options: ["4 m: a width can't be negative", "−8 m: it's the smaller solution", "Both: they both solve the equation", "Neither"]
      answer: 0
      feedback: [null, "A length can't be negative.", "Both solve the equation, but only one makes sense as a width.", "4 × (4 + 4) = 32, so 4 works."]
      explain: "Both numbers solve x² + 4x − 32 = 0, but only x = 4 can be a width."
  - check:
      type: number
      q: "Review: a parabola crosses the $x$-axis at $x = 2$ and $x = 8$. What is the $x$-coordinate of its turning point?"
      answer: 5
      explain: "(2 + 8) ÷ 2 = 5."
```

### Larger solution

### Positive solution

### Which is the width?

### Review

From the last lesson: the axis is halfway.

## Make: the garden bed

```step
stage: make
insight: "Returning to the garden: solve the equation, then say which solution answers the question and why."
tasks:
  - hint: ["Expand and move the 40 across.", "Then factorise."]
    check:
      type: reasoning
      paper: true
      q: "The bed is $x$ m wide and $(x + 3)$ m long, with area 40 m². Solve $x(x + 3) = 40$ and type the width in metres."
      steps:
        - ["$x^2 + 3x - 40 = 0$", "expand and make one side 0"]
        - ["$(x + 8)(x - 5) = 0$", "8 × −5 = −40 and 8 + (−5) = 3"]
        - ["$x = -8 \\text{ or } x = 5$", "each bracket gives a solution"]
        - ["$x = 5$", "a width can't be negative"]
      answer: "5"
      answerLabel: "Width (m)"
      tolerance: 0.001
      feedback:
        - ["-8", "That solves the equation but a width can't be negative."]
        - ["8", "8 is the length (x + 3 = 8). The width is x."]
      criteria:
        - "I made one side 0 before factorising."
        - "I found both solutions."
        - "I used the situation to choose the width."
      explain: "x = −8 or 5. A width can't be negative, so x = 5 m (and the length is 8 m)."
  - check:
      type: question
      q: "Why do we reject $x = -8$?"
      options: ["A length can't be negative", "It's too big", "It doesn't solve the equation", "It's the smaller solution"]
      answer: 0
      feedback: [null, "It's the wrong sign, not the wrong size.", "(−8 + 8)(−8 − 5) = 0, so it does solve the equation.", "Being smaller isn't the reason."]
      explain: "x = −8 solves the equation but gives a negative width, which doesn't exist."
```

### The width

Back to the garden. Work it out on paper first, then type your answer.

### Why reject −8?

The bed and its area here are made up for the task.

**Also used in**

- **Design and building.** Rooms, paving and signs are often sized by area equations like this.
- **Science.** Equations for a ball's flight or a car's braking can be solved by factorising when they have whole-number solutions.
- **Next lesson.** Solving the same equation three ways: algebra, a graph and a table.
