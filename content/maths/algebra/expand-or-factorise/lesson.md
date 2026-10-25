---
order: 18
unit: binomials
node: AC9M9A02 n4
uses: [AC9M9A02 n1, AC9M9A02 n2, AC9M9A02 n3]
assumes: [AC9M9A01 n1, AC9M9A01 n2, AC9M9A01 n3]   # x × x = x² only
connection: ball-arc
title: Expand or factorise?
summary: "Expanding and factorising undo each other. Factorised form shows where the curve meets zero; expanded form shows where it starts."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The same curve, written two ways. Each way answers a different question."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8343
  url: http://127.0.0.1:8343/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: curve.yml#explain-pic, caption: "$y = (x - 2)(x - 3)$ meets the x-axis at 2 and 3, because each bracket is zero there." }
explainClip:
  query: { code: "@curve.yml#explain", fresh: 1, id: explain }
  caption: "Factorised form shows where the curve meets zero"
  say: "Match the curve. Each bracket is zero where the curve meets the axis."
  clip:
    - caption: { text: "The dashed curve is x² − 5x + 6.", say: "The dashed curve is x squared minus five x plus six." }
    - click: Make p bigger
    - click: Make p bigger
    - wait: 800
    - caption: { text: "Move p and q until the curves match: p = 2, q = 3.", say: "Move p and q until the curves match." }
    - click: Make q smaller
    - click: Make q smaller
    - click: Make q smaller
    - wait: 900
    - caption: { text: "(x − 2)(x − 3): zero at 2 and at 3.", say: "Two and three: each bracket is zero there." }
    - wait: 900
---
You've expanded two brackets and factorised back. Now: when do you want each form?

## Predict: which form?

```step
stage: predict
insight: "Committing to a form before the board shows who thinks the expanded form says where the curve meets the ground, and who sees that a bracket equal to zero does."
check:
  type: predict
  q: "A skate bowl's floor is the curve $h = x^2 - 6x + 5 = (x - 1)(x - 5)$, with $h$ the height above the ground line in metres. Which form tells you most quickly where the curve meets the ground line?"
  options:
    - "$(x - 1)(x - 5)$"
    - "$x^2 - 6x + 5$"
    - "Both tell you at a glance"
    - "Neither: you need a graph"
  actual: "(x − 1)(x − 5). The curve meets the ground line where h = 0. A product is zero when one bracket is zero: x = 1 or x = 5. The expanded form shows h = 5 at x = 0 instead."
```

<figure class="situation" role="img" aria-label="A bowl-shaped curve dipping below a horizontal ground line. The curve crosses the line at two points, each marked with a question mark."><svg viewBox="0 0 360 240" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><line x1="20" y1="90" x2="340" y2="90" stroke-width="1.5"/><text x="300" y="80" fill="currentColor" stroke="none">ground</text><path d="M60 20 Q 180 250 300 20" stroke="#0F6E56" stroke-width="2.5"/><text x="95" y="112" fill="currentColor" stroke="none" font-size="20">?</text><text x="250" y="112" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

The floor of a skate bowl dips below the ground line. Where does it meet the line?

## Run: match the curve

```step
stage: run
insight: "Moving p and q until the curve matches shows that the numbers in the brackets are where the curve meets the axis."
try: { playground: board, starter: "curve.yml#run", height: 600 }
check: { type: board, text: "Move $p$ and $q$ until the solid curve covers the dashed one. Where does it meet the axis? Was your prediction right?", when: "p = 1 and q = 5" }
```

The dashed curve is $y = x^2 - 6x + 5$. The solid one is $y = (x - p)(x - q)$. Match them, and look at where the points sit.

## Investigate: two forms, two questions

```step
stage: investigate
insight: "Factorised form shows where the curve meets zero; expanded form shows the start value. Leo expands to check but doesn't compare every term."
tasks:
  - check:
      type: answer
      q: "Factorise $x^2 - 7x + 10$. Type $x^2$ as x^2."
      answer: "(x - 2)(x - 5)"
      form: factorised
      feedback:
        - ["(x + 2)(x + 5)", "That makes +7x. The middle is −7x."]
      explain: "−2 and −5 multiply to 10 and add to −7."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo factorises $x^2 + x - 6$ and checks by expanding. Click the line where his working goes wrong."
      answer: 5
      fault: logic
      misconception: check-not-compared
      explain: "Line 5: the expansion gives x² − x − 6, not x² + x − 6. The middle terms differ, so it isn't a match. The numbers should add to +1: −2 and 3, so (x − 2)(x + 3)."
  - check:
      type: question
      q: "The curve is $y = (x - 2)(x - 5)$. Where does it meet the x-axis?"
      options: ["At 2 and at 5", "At −2 and at −5", "At 10 only", "At −7"]
      answer: 0
      feedback: [null, "Each bracket is zero at the opposite sign: x − 2 = 0 means x = 2.", "10 is where it meets the y-axis (2 × 5 = 10), not the x-axis.", "−7 is the middle number of the expanded form: it isn't a meeting point."]
      explain: "x − 2 = 0 at x = 2 and x − 5 = 0 at x = 5."
```

### Undo it

Here's moving from expanded to factorised, and what each form shows.

```worked
x^2 - 6x + 5 :: Start: expanded.
-1 \times -5 = 5, \; -1 + -5 = -6 :: Two numbers: multiply to 5, add to −6.
(x - 1)(x - 5) :: Factorised.
x - 1 = 0 \text{ or } x - 5 = 0 :: A product is zero when a bracket is zero.
x = 1 \text{ or } x = 5 :: Where the curve meets the axis.
\text{start: } 0^2 - 6 \times 0 + 5 = 5 :: From the expanded form: where it meets the y-axis.
```

Now try one on paper: $x^2 - 8x + 12$. Where does the curve meet the axis, and where does it start? Then type the smaller meeting point.

### Find the mistake

Read Leo's working. Compare every term.

### What the curve says

## Modify: move the curve

```step
stage: modify
insight: "Moving p and q shows factorised form giving the meeting points straight away, while the start value needs the expanded form (p × q). One meeting point makes a bracket squared."
try: { playground: board, starter: "curve.yml#vary", height: 620 }
tasks:
  - hint: ["Set p to 2 and q to 6.", "The points sit where the curve meets the axis."]
    check: { type: number, q: "The curve is $y = (x - 2)(x - 6)$. Where does it meet the x-axis on the left?", answer: 2, explain: "x − 2 = 0 at x = 2. The other point is x = 6." }
  - hint: ["Put x = 0 into the expanded form.", "$(0 - 2)(0 - 6)$ is the same thing."]
    check: { type: number, q: "Where does $y = (x - 2)(x - 6)$ meet the y-axis? That's its value at $x = 0$.", answer: 12, explain: "(0 − 2)(0 − 6) = (−2)(−6) = 12. In the expanded form x² − 8x + 12 it's the last number." }
    smaller:
      check: { type: "number", q: "Just the last step: what's $-2 \\times (-6)$?", answer: 12, explain: "A negative times a negative is positive: 12." }
  - hint: ["Set p and q to the same number.", "Where do the points go?"]
    check: { type: number, q: "Edge case: how many times does $y = (x - 3)^2$ meet the x-axis?", answer: 1, explain: "(x − 3)(x − 3): both brackets are zero at x = 3. The curve touches the axis once, then goes back up." }
```

### Where it meets the axis

### Where it starts

### One meeting point

## Practise: move between the forms

```step
stage: practise
insight: "Moving in both directions, mixed, and saying what each form shows; the review keeps expanding fresh."
tasks:
  - check:
      type: answer
      q: "Expand $(x - 4)(x + 9)$."
      answer: "x^2 + 5x - 36"
      form: expanded
      feedback:
        - ["x^2 - 5x - 36", "The numbers are −4 and +9: they add to +5."]
      explain: "−4 + 9 = 5 and −4 × 9 = −36."
  - check:
      type: answer
      q: "Factorise $x^2 + 4x - 21$."
      answer: "(x - 3)(x + 7)"
      form: factorised
      feedback:
        - ["(x + 3)(x - 7)", "That makes −4x. The bigger number is positive."]
      explain: "−3 and 7 multiply to −21 and add to 4."
  - check:
      type: question
      q: "You want to know where the curve $y = x^2 - 3x - 10$ meets the x-axis. What do you do first?"
      options: ["Factorise it to (x − 5)(x + 2)", "Put x = 0 into it", "Expand it"]
      answer: 0
      feedback: [null, "That gives where it meets the y-axis: −10.", "It's already expanded."]
      explain: "Factorised form shows where each bracket is zero: x = 5 and x = −2."
    smaller:
      check: { type: "number", q: "Which two numbers multiply to −10 and add to −3? Type the negative one.", answer: -5, explain: "−5 and 2 multiply to −10 and add to −3." }
  - check:
      type: answer
      q: "Review: expand $(x - 6)(x - 6)$."
      answer: "x^2 - 12x + 36"
      form: expanded
      feedback:
        - ["x^2 + 36", "There are two strips of −6x: −12x."]
      explain: "−6 + (−6) = −12 and (−6)(−6) = 36."
```

### Expand

### Factorise

### Choose a form

### Review

A bracket squared, from Two brackets.

## Make: back to the skate bowl

```step
stage: make
insight: "Coming back to the opening: the factorised form gives where the bowl meets the ground line, and the expanded form gives the height at the start."
tasks:
  - hint: ["Find two numbers that multiply to 5 and add to −6.", "−1 and −5."]
    check:
      type: reasoning
      paper: true
      q: "The bowl is $h = x^2 - 6x + 5$. Where does the floor meet the ground line, and how high is the edge at $x = 0$? Give the smaller meeting point."
      steps:
        - ["$x^2 - 6x + 5 = (x - 1)(x - 5)$", "factorise: −1 and −5 multiply to 5, add to −6"]
        - ["$x = 1$ or $x = 5$", "each bracket is zero"]
        - ["$h = 5$ at $x = 0$", "put x = 0 into the expanded form"]
      answer: "1"
      answerLabel: "Smaller meeting point"
      feedback:
        - ["5", "5 is the height at x = 0. The meeting points are where h = 0."]
        - ["-1", "x − 1 = 0 means x = 1."]
      criteria:
        - "I factorised before reading off the meeting points."
        - "I used the expanded form for the height at x = 0."
        - "Both my meeting points make a bracket zero."
      explain: "(x − 1)(x − 5) is zero at x = 1 and x = 5. At x = 0 the height is 5."
  - check:
      type: question
      q: "Which statement is true of $y = (x - 1)(x - 5)$ and $y = x^2 - 6x + 5$?"
      options: ["They are the same curve", "They are different curves with the same start", "They cross the x-axis at different points"]
      answer: 0
      feedback: [null, "Expanding the first gives the second exactly.", "Both meet the axis at 1 and 5: expanding doesn't move the curve."]
      explain: "Expanding and factorising rewrite the same curve. Only the form changes."
```

### The bowl

Back to the skate bowl. Work it out on paper first, then type the smaller meeting point.

### Same curve

**Also used in**

- **Thrown balls.** A ball's height follows a curve like this one, upside down. Its landing time is where the curve meets the ground line.
- **Next.** Solving quadratic equations: making a product equal zero.
