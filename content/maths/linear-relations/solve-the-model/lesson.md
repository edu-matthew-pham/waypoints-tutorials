---
order: 23
unit: quad9
node: [AC9M9A05 n2, AC9M9A05 n3]
uses: [AC9M9A04 n3, AC9M9A05 n1]
assumes: [AC9M9A05 n1]
connection: stopping-distance
title: Use the model, check the answer
summary: "Solve the quadratic model for a real question, keep only the solution that makes sense, and say how far the model can be trusted."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The model says a car at 70 km/h needs 67 m to stop. Should you believe it?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8370
  url: http://127.0.0.1:8370/index.html
  readySelector: "#board"
  layout: full
---
A model is only useful if you use it for a question, check the answer against the situation, and say where it stops being reliable.

## Predict: the equation has two answers

```step
stage: predict
insight: "Seeing that an equation can give two solutions before asking which one the situation allows."
check:
  type: predict
  q: "A model for stopping distance is $d = x^2 + x + 7$, where $x$ is the speed in tens of km/h. It gives $d = 37$ m when $x = 5$ (50 km/h). Setting $x^2 + x + 7 = 37$ and solving, how many solutions will there be?"
  options:
    - "One: the speed is 50 km/h"
    - "Two: and only one of them can be a real speed"
    - "Two: and both are real speeds"
    - "None"
  actual: "Two: x = 5 and x = −6. A speed of −60 km/h isn't possible, so only x = 5 is an answer."
```

The model is the quadratic through the first three figures from the last lesson: 19 m at 30 km/h, 27 m at 40 km/h and 37 m at 50 km/h ([Transport for NSW](https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding), checked 25 October 2026). It is a model: it was fitted to those three figures only.

## Run: aim the line

```step
stage: run
insight: "Where the flat line meets the curve are the solutions; a meeting point at a negative speed is a solution of the equation but not of the problem."
try: { playground: board, starter: "model.yml#run", height: 560 }
check: { type: board, text: "Move $t$ until the flat line meets the curve at $50$ km/h's distance. Where is the other meeting point?", when: "t = 37" }
```

The curve is the model. The flat line is the stopping distance $t$ you ask about. Each place they cross is a solution of $x^2 + x + 7 = t$.

## Investigate: solve and choose

```step
stage: investigate
insight: "Factorising gives two solutions, and the situation decides which to keep: the one with a positive speed."
tasks:
  - check:
      type: number
      q: "Rearrange $x^2 + x + 7 = 67$ to $x^2 + x - 60 = 0$ and factorise as $(x + 8)(x - 7) = 0$. What is the positive solution for $x$?"
      answer: 7
      explain: "x + 8 = 0 gives x = −8. x − 7 = 0 gives x = 7."
    smaller:
      check: { type: "number", q: "What is $7 \\times 8$?", answer: 56, explain: "7 × 8 = 56." }
  - check:
      type: question
      q: "The solutions are $x = 7$ and $x = -8$. Which do you report as the speed?"
      options: ["70 km/h: a speed can't be negative", "−80 km/h: it's a solution", "Both, they are both answers", "Neither"]
      answer: 0
      feedback: [null, "A car can't travel at a negative speed here.", "Both solve the equation, but only one fits the situation.", "One solution fits."]
      explain: "x = 7 means 70 km/h. The negative solution solves the equation but not the problem."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam solves the model for a stopping distance of 37 m. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: keep-negative-solution
      explain: "Line 4: he reports both solutions. A speed of −60 km/h can't happen, so the answer is only 50 km/h."
```

### Solve it

```worked
x^2 + x + 7 = 67 :: The stopping distance we aim for is 67 m.
x^2 + x - 60 = 0 :: Take 67 from both sides.
(x + 8)(x - 7) = 0 :: Two numbers that multiply to −60 and add to 1.
x = -8 \text{ or } x = 7 :: Both solve the equation.
x = 7 :: Keep the one that makes sense: 70 km/h.
```

### Keep one

### Find the mistake

Read Sam's working. Which line reports an answer that can't happen?

## Modify: change the question

```step
stage: modify
insight: "Changing the target distance shows that every answer needs the same sense check, and that the model is least trustworthy far from its data."
tasks:
  - hint: ["Set the model equal to 37.", "x² + x − 30 = (x + 6)(x − 5)."]
    check: { type: number, q: "Use the model to find the speed (in tens of km/h) that gives a stopping distance of $37$ m.", answer: 5, explain: "x² + x − 30 = 0 gives (x + 6)(x − 5) = 0. x = 5 is 50 km/h." }
  - hint: ["Put x = 6 into the model.", "6² + 6 + 7."]
    check: { type: number, q: "What stopping distance does the model give at 60 km/h ($x = 6$)? The published figure is 56 m.", answer: 49, explain: "36 + 6 + 7 = 49 m. The model is 7 m short of the real figure." }
  - hint: ["Compare the 7 m miss at 60 km/h with 70 km/h.", "The data curves faster than the model."]
    check: { type: question, q: "The model is 7 m short at 60 km/h. Is the 67 m it gives for 70 km/h more or less trustworthy?", options: ["Less: it is further from the three figures it was fitted to", "More: bigger numbers are more accurate", "The same: a model is exact", "More: it is a quadratic"], answer: 0, feedback: [null, "The further from the data, the less reliable.", "The model already missed at 60 km/h.", "A fitted model is only an estimate."], explain: "The model was fitted to 30, 40 and 50 km/h. The miss grows the further out you go, so treat 67 m as too low." }
```

### Another distance

### Check the model

### How far to trust

## Practise: solve and decide

```step
stage: practise
insight: "Solving the equation, then choosing the answer that fits."
tasks:
  - check:
      type: number
      q: "Solve $x^2 + x + 7 = 13$. What is the positive solution?"
      answer: 2
      explain: "x² + x − 6 = 0, so (x + 3)(x − 2) = 0. x = 2."
  - check:
      type: question
      q: "A ball's height is $h = 20t - 5t^2$ metres. Solving $h = 15$ gives $t = 1$ and $t = 3$. How do you report this?"
      options: ["Both are real: the ball is at 15 m going up and coming down", "Only t = 1", "Only t = 3", "Neither"]
      answer: 0
      feedback: [null, "It is also at 15 m on the way down.", "It is also at 15 m on the way up.", "Both times are real."]
      explain: "Here both answers fit the situation. The check is whether each makes sense, not always to throw one out."
    smaller:
      check: { type: "number", q: "What is $20 \\times 1 - 5 \\times 1^2$?", answer: 15, explain: "20 − 5 = 15." }
  - check:
      type: number
      q: "Review: what is the gradient of the line through $(1, 3)$ and $(3, 11)$?"
      answer: 4
      explain: "(11 − 3) ÷ (3 − 1) = 4."
```

### Positive solution

### Both fit

### Review

## Make: how far can you trust it

```step
stage: make
insight: "Returning to the stopping distances: use the model for a question, check the answer, and say what the road safety message is."
tasks:
  - hint: ["Solve x² + x + 7 = 67.", "(x + 8)(x − 7) = 0."]
    check:
      type: reasoning
      paper: true
      q: "A council asks which speed gives a stopping distance of 67 m by the model. Find the speed in km/h."
      steps:
        - ["$x^2 + x - 60 = 0$", "rearrange to equal 0"]
        - ["$(x + 8)(x - 7) = 0$", "factorise"]
        - ["$x = 7$", "keep the positive solution"]
      answer: "70"
      answerLabel: "Speed (km/h)"
      tolerance: 0.001
      feedback:
        - ["7", "That's x in tens of km/h. Convert to km/h."]
        - ["-80", "A speed can't be negative. Keep the positive solution."]
      criteria:
        - "I rearranged to equal 0 before factorising."
        - "I kept only the solution that fits the situation."
        - "I gave the speed in km/h."
      explain: "x = 7 is 70 km/h."
  - check:
      type: question
      q: "The model is 7 m short at 60 km/h. What should the council do with its answer for 70 km/h?"
      options: ["Treat 67 m as the least it could be, and check with real data", "Use 67 m exactly", "Ignore the model entirely", "Use 49 m"]
      answer: 0
      feedback: [null, "The model under-estimates further out.", "The model works near the data it was fitted to.", "49 m is the model's value at 60 km/h."]
      explain: "A model is a tool. State the answer, say how far it is trusted, and check with real data."
```

### Find the speed

### What to tell the council

Figures: [Transport for NSW](https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding). The model is made up for the task from three of them.

**Also used in**

- **Road safety.** Models like this help decide where crossings and speed limits go, always checked against real measurements.
- **Sport.** A ball's height has two times at the same level, one going up and one coming down.
- **Next lesson.** Changing the numbers in a rule and watching the graph.
