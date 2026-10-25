---
order: 21
unit: quad9
node: AC9M9A04 n4
uses: [AC9M9A04 n3]
assumes: [AC9M9A04 n3]
connection: poster-area
title: Three ways to solve
summary: "The solutions of a quadratic are the zeros in a table, the x-intercepts of a graph and the numbers that make each bracket 0. They are the same numbers seen three ways."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A poster is 4 cm longer than it is wide and covers 45 square centimetres. You could solve it with algebra, a graph or a table. Do they agree?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8368
  url: http://127.0.0.1:8368/index.html
  readySelector: "#board"
  layout: full
---
You can solve the same quadratic with a table, a graph or algebra. Each shows the same two numbers in a different way.

## Predict: from the graph to the brackets

```step
stage: predict
insight: "Committing to a factorised form from a graph shows who reads the intercepts and then flips the sign, and who copies the intercepts straight into the brackets."
check:
  type: predict
  q: "The graph of $y = x^2 + 4x - 45$ crosses the $x$-axis at $x = -9$ and $x = 5$. Which is the factorised form?"
  options:
    - "(x + 9)(x − 5)"
    - "(x − 9)(x + 5)"
    - "(x − 9)(x − 5)"
    - "(x + 9)(x + 5)"
  actual: "(x + 9)(x − 5). Each bracket is 0 at an intercept: x + 9 = 0 at x = −9, and x − 5 = 0 at x = 5. Check: 9 × (−5) = −45 and 9 − 5 = 4."
```

<figure class="situation" role="img" aria-label="A curve that opens upward and crosses the x-axis at minus 9 and at 5."><svg viewBox="0 0 320 170" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M10 60 H310" stroke-width="1.5"/><path d="M60 8 Q165 292 270 8" stroke-width="3"/><circle cx="81" cy="60" r="4" fill="currentColor"/><circle cx="249" cy="60" r="4" fill="currentColor"/><text x="68" y="48" fill="currentColor" stroke="none">−9</text><text x="244" y="48" fill="currentColor" stroke="none">5</text></svg></figure>

The curve crosses the axis in two places. What do the brackets look like?

## Run: zeros in a table, intercepts on a graph

```step
stage: run
insight: "The table's zeros and the graph's x-intercepts land on the same x-values, so a table and a graph both find the solutions."
try: { playground: board, starter: "three.yml#run", height: 560 }
check: { type: board, text: "Drag $P$ to the left-hand place where the curve meets the $x$-axis. Which value in the table is 0? Was your prediction right?", when: "x(P) = -9 and y(P) = 0" }
```

The table lists $y = x^2 + 4x - 45$ for some $x$-values. Find the zero in the table and on the graph.

## Investigate: connecting the three

```step
stage: investigate
insight: "A zero in the table, an x-intercept and a bracket that gives 0 are one number seen three ways. A table of whole numbers can miss a solution, so check the graph or the algebra too."
tasks:
  - check:
      type: number
      q: "For $y = x^2 + 4x - 45$, what is $y$ when $x = 4$?"
      answer: -13
      explain: "4² + 4 × 4 − 45 = 16 + 16 − 45 = −13."
    smaller:
      check: { type: "number", q: "What is $4^2 + 4 \\times 4$?", answer: 32, explain: "16 + 16 = 32." }
  - check:
      type: question
      q: "The graph of $y = x^2 - 2x - 8$ crosses the $x$-axis at $x = -2$ and $x = 4$. Which is its factorised form?"
      options: ["$(x + 2)(x - 4)$", "$(x - 2)(x + 4)$", "$(x - 2)(x - 4)$", "$(x + 2)(x + 4)$"]
      answer: 0
      feedback: [null, "That gives x = 2 and x = −4: the signs are the wrong way round.", "That gives x = 2 and 4: both positive.", "That gives x = −2 and −4: both negative."]
      explain: "x = −2 comes from (x + 2) = 0 and x = 4 from (x − 4) = 0."
  - check:
      type: bug
      code: "working.txt#mei"
      text: "Mei solves $x^2 + 4x - 45 = 0$ from a table of $x = 0$ to $10$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: table-first-zero-only
      explain: "Line 3: her table starts at 0, so it can't show the other solution at x = −9. An equation like this has two solutions, so check negatives or use algebra."
  - check:
      type: number
      q: "Solve $x^2 - 2x - 8 = 0$ by any method. What is the larger solution?"
      answer: 4
      explain: "(x + 2)(x − 4) = 0, so x = −2 or x = 4."
```

### Same numbers

Here's one equation solved three ways.

```worked
x^2 - 2x - 8 = 0 :: The equation.
(x + 2)(x - 4) = 0,\; x = -2 \text{ or } x = 4 :: Algebra: factorise, then each bracket.
\text{crosses the x-axis at } -2 \text{ and } 4 :: Graph: the x-intercepts.
y = 7, 0, -5, -8, -9, -8, -5, 0, 7 \text{ for } x = -3, -2, \ldots, 5 :: Table: y is 0 at x = −2 and x = 4.
-2 \text{ and } 4 :: All three methods give the same numbers.
```

Now try one on paper: $x^2 - x - 6 = 0$. Solve it by factorising and check one solution in a table. Type the smaller solution.

### Graph to brackets

### Find the mistake

Read Mei's working. Which line reaches the wrong conclusion?

### Larger solution

## Modify: change the constant

```step
stage: modify
insight: "Moving the constant c lifts the curve: two solutions, one solution or none. The table shows y = 0 only where the curve meets the axis."
try: { playground: board, starter: "three.yml#vary", height: 560 }
tasks:
  - hint: ["The curve is y = x² − 4x + c.", "For crossings at 1 and 3: (x − 1)(x − 3) = x² − 4x + 3."]
    check: { type: board, text: "Set $c$ so the curve crosses the $x$-axis at $x = 1$ and $x = 3$.", when: "c = 3" }
  - hint: ["Make the curve just touch the axis.", "How many solutions is that?"]
    check: { type: question, q: "When $c = 4$ the curve just touches the $x$-axis at $x = 2$. How many solutions does $x^2 - 4x + 4 = 0$ have?", options: ["One: x = 2", "Two", "None", "Three"], answer: 0, feedback: [null, "The curve touches the axis once, so the two brackets give the same answer.", "It does touch the axis, at x = 2.", "A quadratic has at most two."], explain: "x² − 4x + 4 = (x − 2)(x − 2), so x = 2 is the only solution." }
  - hint: ["Set c = 5 and look at the table.", "Does y ever equal 0?"]
    check: { type: question, q: "Edge case: when $c = 5$ the curve stays above the $x$-axis. How many solutions does $x^2 - 4x + 5 = 0$ have?", options: ["None: y is never 0", "Two", "One", "It depends on x"], answer: 0, feedback: [null, "Two solutions need two crossings.", "One solution needs the curve to touch the axis.", "x doesn't change: the curve never reaches 0."], explain: "The table never shows 0 and the curve never meets the axis, so there are no solutions." }
```

### Crossing at 1 and 3

### Touching

### Missing the axis

## Practise: any method

```step
stage: practise
insight: "Choosing the quickest method for each equation and checking with a second one."
tasks:
  - check:
      type: number
      q: "Solve $x^2 + x - 6 = 0$. What is the smaller solution?"
      answer: -3
      explain: "(x + 3)(x − 2) = 0, so x = −3 or x = 2."
  - check:
      type: number
      q: "For $y = x^2 - 5x + 4$, what is $y$ when $x = 2$?"
      answer: -2
      explain: "4 − 10 + 4 = −2."
    smaller:
      check: { type: "number", q: "What is $2^2 - 5 \\times 2$?", answer: -6, explain: "4 − 10 = −6." }
  - check:
      type: question
      q: "The table for $y = x^2 - 5x + 4$ shows $y = 0$ at $x = 1$ and $x = 4$. Which equation does that solve?"
      options: ["$(x - 1)(x - 4) = 0$", "$(x + 1)(x + 4) = 0$", "$(x - 1)(x + 4) = 0$", "$(x + 1)(x - 4) = 0$"]
      answer: 0
      feedback: [null, "That gives x = −1 and −4.", "That gives x = 1 and −4.", "That gives x = −1 and 4."]
      explain: "x = 1 gives (x − 1) = 0 and x = 4 gives (x − 4) = 0."
  - check:
      type: number
      q: "Review: a rectangle is $x$ m wide and $(x + 2)$ m long, area 35 m². The equation gives $x = 5$ or $x = -7$. What is the width in metres?"
      answer: 5
      explain: "A width can't be negative, so x = 5."
```

### Smaller solution

### A table value

### From table to brackets

### Review

From the last lesson: the situation picks the solution.

## Make: the poster

```step
stage: make
insight: "Returning to the poster: solve it with algebra, then check the answer a second way."
tasks:
  - hint: ["Write x(x + 4) = 45 as x² + 4x − 45 = 0.", "Which numbers multiply to −45 and add to 4?"]
    check:
      type: reasoning
      paper: true
      q: "The poster is $x$ cm wide and $(x + 4)$ cm long, with area 45 cm². Solve $x(x + 4) = 45$ and type the width in cm."
      steps:
        - ["$x^2 + 4x - 45 = 0$", "make one side 0"]
        - ["$(x + 9)(x - 5) = 0$", "9 × −5 = −45 and 9 − 5 = 4"]
        - ["$x = -9 \\text{ or } x = 5$", "each bracket gives a solution"]
        - ["$x = 5$", "a width can't be negative"]
      answer: "5"
      answerLabel: "Width (cm)"
      tolerance: 0.001
      feedback:
        - ["9", "That's the other number in the bracket: it gives x = −9."]
        - ["-9", "That solves the equation but a width can't be negative."]
      criteria:
        - "I made one side 0 before factorising."
        - "I chose the solution that fits a width."
        - "I checked my answer a second way."
      explain: "x = 5: the poster is 5 cm wide and 9 cm long, with area 45 cm²."
  - check:
      type: number
      q: "Check with the table: what is $x^2 + 4x - 45$ when $x = 5$?"
      answer: 0
      explain: "25 + 20 − 45 = 0, so x = 5 is a zero of the table."
```

### The width

Back to the poster. Work it out on paper first, then type your answer.

### Check it

The poster size here is made up for the task.

**Also used in**

- **Design.** Sizes of signs, screens and frames are often set by an area and a ratio, and give quadratic equations.
- **Spreadsheets.** A table of values made in a spreadsheet is the quickest way to hunt for a zero.
- **Next unit step.** Modelling a real change, and deciding whether a straight line or a curve fits it better.
