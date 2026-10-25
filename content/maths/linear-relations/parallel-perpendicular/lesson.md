---
order: 14
unit: lines9
node: AC9M9A03 n2
uses: [AC9M9A03 n1]
assumes: [AC9M9A03 n1]
connection: car-park-lines
title: Parallel and perpendicular
summary: "Parallel lines have the same gradient. Perpendicular lines have gradients that multiply to −1: turn one upside down and change the sign."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Every line in a car park has to be parallel or at a right angle to its neighbour. Can the plan check that with numbers alone?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8361
  url: http://127.0.0.1:8361/index.html
  readySelector: "#board"
  layout: full
---
Parallel lines never meet and perpendicular lines cross at a right angle. You can tell which a pair is from their gradients alone.

## Predict: parallel?

```step
stage: predict
insight: "Committing on a pair of lines that look about parallel shows who trusts the picture and who compares the gradients."
check:
  type: predict
  q: "On a car-park plan, one line goes through (0, 1) and (4, 3). Another goes through (1, 0) and (5, 2). Are the lines parallel?"
  options:
    - "Yes: they go up at the same rate"
    - "No: they start at different places"
    - "No: one is longer"
    - "You can't tell without drawing them"
  actual: "Yes. The first goes up 2 for 4 across, so its gradient is 2 ÷ 4 = ½. The second also goes up 2 for 4 across: ½. Same gradient, so they're parallel."
```

<figure class="situation" role="img" aria-label="A car-park plan on a grid with two short lines. One starts at 0, 1 and ends at 4, 3. The other starts at 1, 0 and ends at 5, 2."><svg viewBox="0 0 280 170" width="280" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-opacity="0.2"><path d="M30 140 H250 M30 110 H250 M30 80 H250 M30 50 H250 M30 20 H250 M30 20 V140 M65 20 V140 M100 20 V140 M135 20 V140 M170 20 V140 M205 20 V140 M240 20 V140"/></g><path d="M30 140 H255 M30 140 V15" stroke-width="1.5"/><path d="M30 110 L170 40" stroke-width="3"/><path d="M65 140 L205 70" stroke-width="3"/><text x="140" y="32" fill="currentColor" stroke="none">(0, 1) to (4, 3)</text><text x="150" y="130" fill="currentColor" stroke="none">(1, 0) to (5, 2)</text></svg></figure>

Do the two lines ever meet? Think about how fast each one rises.

## Run: match the gradient

```step
stage: run
insight: "Sliding the gradient of one line against a dashed line shows that equal gradients never meet, whatever the starting point."
try: { playground: board, starter: "pair.yml#run", height: 560 }
check: { type: board, text: "Move $m$ so the solid line is parallel to the dashed line. Was your prediction right?", when: "m = 2" }
```

The dashed line is $y = 2x + 1$. Change $m$ in the solid line, $y = mx$, until the lines never meet.

## Investigate: parallel and perpendicular

```step
stage: investigate
insight: "Parallel lines share a gradient. A perpendicular gradient is the negative reciprocal: turn it upside down and change the sign, so the two multiply to −1."
tasks:
  - check:
      type: question
      q: "A line goes through $(0, 1)$ and $(2, 7)$. Another goes through $(1, 0)$ and $(3, 6)$. Are they parallel?"
      options: ["Yes: both have gradient 3", "No: one has gradient 3 and the other 6", "No: they start at different places", "You can't tell"]
      answer: 0
      feedback: [null, "Check the second: it rises 6 over a run of 2.", "Different starting places don't matter: parallel lines can start anywhere.", "You can tell, from the gradients."]
      explain: "(7 − 1) ÷ (2 − 0) = 3 and (6 − 0) ÷ (3 − 1) = 3. Same gradient, so parallel."
  - check:
      type: number
      q: "A line has gradient $4$. What is the gradient of a line perpendicular to it?"
      answer: -0.25
      tolerance: 0.001
      explain: "Turn 4 (that is 4/1) upside down: 1/4. Change the sign: −1/4, or −0.25. Check: 4 × (−¼) = −1."
    smaller:
      check: { type: "number", q: "Perpendicular gradients multiply to −1. What number times 4 gives −1?", answer: -0.25, tolerance: 0.001, explain: "4 × (−0.25) = −1." }
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai finds the gradient of a line perpendicular to a line of gradient 3. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: perpendicular-negate-only
      explain: "Line 2: changing only the sign gives −3, but 3 × (−3) = −9, not −1. Turn it upside down too: −1/3."
```

### Same gradient

Here's finding a perpendicular gradient.

```worked
m_1 = \frac{3}{2} :: The gradient of the first line.
\frac{2}{3} :: Turn it upside down.
m_2 = -\frac{2}{3} :: Change the sign.
\frac{3}{2} \times \left(-\frac{2}{3}\right) = -1 :: Check: perpendicular gradients multiply to −1.
```

Now try one on paper: a line has gradient $5$. Find the gradient of a perpendicular line, then type it.

### Upside down and change the sign

### Find the mistake

Read Kai's working. What should the second line say?

## Modify: change the lines

```step
stage: modify
insight: "Moving the solid line to a right angle, then testing the rule at the edges: a flat line."
try: { playground: board, starter: "pair.yml#vary", height: 560 }
tasks:
  - hint: ["The dashed line goes up 2 for each 1 across.", "Turn 2 upside down and change the sign."]
    check: { type: board, text: "Set $m$ so the solid line is perpendicular to the dashed line: the corner is a right angle.", when: "m = -0.5" }
  - hint: ["Multiply the two gradients.", "Is the answer −1?"]
    check: { type: question, q: "Two lines have gradients $\\frac{3}{4}$ and $-\\frac{4}{3}$. Are they perpendicular?", options: ["Yes: they multiply to −1", "No: they're both different", "No: only equal gradients are special", "Only if both are positive"], answer: 0, feedback: [null, "Different gradients can still be perpendicular.", "Parallel lines have equal gradients; perpendicular lines are the other special case.", "One of the two has to be negative."], explain: "3/4 × (−4/3) = −1, so they're perpendicular." }
  - hint: ["A flat line has gradient 0.", "What would the perpendicular line look like?"]
    check: { type: question, q: "Edge case: a line is flat, with gradient 0. What is the line perpendicular to it?", options: ["A vertical line, which has no gradient", "A line with gradient 0", "A line with gradient −1", "There isn't one"], answer: 0, feedback: [null, "That would be parallel to it.", "That line leans at an angle.", "There is: straight up and down."], explain: "Turning 0 upside down would divide by 0. The perpendicular is vertical, and a vertical line has no gradient." }
```

### A right angle

### The test

### A flat line

## Practise: parallel or perpendicular?

```step
stage: practise
insight: "Using gradients to decide, and to build a line with a given relationship."
tasks:
  - check:
      type: number
      q: "A line is parallel to $y = 3x + 7$. What is its gradient?"
      answer: 3
      explain: "Parallel lines have the same gradient: 3."
  - check:
      type: number
      q: "A line has gradient $\\frac{1}{2}$. What is the gradient of a line perpendicular to it?"
      answer: -2
      explain: "Turn ½ upside down to get 2, then change the sign: −2."
    smaller:
      check: { type: "question", q: "Turn $\\frac{1}{2}$ upside down. What do you get?", options: ["2", "−½", "½"], answer: 0, explain: "1/2 upside down is 2/1 = 2." }
  - check:
      type: question
      q: "Line A goes through $(0, 0)$ and $(2, 6)$. Line B goes through $(0, 5)$ and $(6, 3)$. Which is true?"
      options: ["They're perpendicular", "They're parallel", "Neither"]
      answer: 0
      feedback: [null, "Line A has gradient 3 and line B has gradient −1/3: not equal.", "3 × (−1/3) = −1, so it's more than neither."]
      explain: "A: 6 ÷ 2 = 3. B: (3 − 5) ÷ (6 − 0) = −1/3. 3 × (−1/3) = −1: perpendicular."
  - check:
      type: question
      q: "Review: what is the gradient of the line through $(1, 2)$ and $(3, 8)$?"
      options: ["3", "1/3", "6", "−3"]
      answer: 0
      feedback: [null, "That's run over rise.", "6 is the rise; divide by the run, 2.", "The line goes up, so the gradient is positive."]
      explain: "Rise 6, run 2: 6 ÷ 2 = 3."
```

### Parallel

### Perpendicular

### Which pair?

### Review

From the last lesson: rise over run.

## Make: the car park

```step
stage: make
insight: "Returning to the car park: use gradients to check that the plan's lines are at right angles."
tasks:
  - hint: ["Find each gradient first.", "Then multiply them."]
    check:
      type: reasoning
      paper: true
      q: "On a car-park plan, the kerb goes through $(1, 2)$ and $(5, 4)$. A bay line goes through $(0, 6)$ and $(2, 2)$. Work out both gradients, multiply them, and type the product."
      steps:
        - ["$\\text{kerb} = \\frac{4 - 2}{5 - 1} = \\frac{1}{2}$", "rise over run for the kerb"]
        - ["$\\text{bay} = \\frac{2 - 6}{2 - 0} = -2$", "rise over run for the bay line"]
        - ["$\\frac{1}{2} \\times (-2) = -1$", "the gradients multiply to −1"]
      answer: "-1"
      answerLabel: "Product of the gradients"
      tolerance: 0.001
      feedback:
        - ["1", "The bay line goes down, so its gradient is negative."]
        - ["-4", "Check the kerb's run: 5 − 1 = 4, so the rise 2 ÷ 4 = 1/2."]
      criteria:
        - "I found each gradient as rise over run."
        - "I took the rise and run in the same order for each line."
        - "I multiplied them and compared the answer with −1."
      explain: "½ × (−2) = −1, so the bay line is perpendicular to the kerb."
  - check:
      type: question
      q: "What does the answer tell the builder?"
      options: ["The bay line meets the kerb at a right angle", "The bay line is parallel to the kerb", "The lines are the same length", "The bay line is too steep"]
      answer: 0
      feedback: [null, "Parallel lines have equal gradients, not gradients that multiply to −1.", "Gradients say nothing about length.", "Steepness isn't a problem here: only the angle."]
      explain: "A product of −1 means perpendicular."
```

### The product

Back to the car park. Work it out on paper first, then type your answer.

### What it means

The coordinates here are made up for the task.

**Also used in**

- **Building.** Walls, floors and tiles are laid parallel or at right angles, and a plan can be checked with gradients.
- **Computer graphics.** Games need the direction at right angles to a surface to work out how light and bounces behave.
- **Next lesson.** The distance between two points: how long is each line?
