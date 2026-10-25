---
order: 8
unit: models10
node: AC9M10A05 n3
uses: [AC9M9A04 n1, AC9M10A04 n1]   # distance between two points (Year 9); a relation is not always a function
connection: centre-pivot
title: Circles as relations
summary: "A circle is every point a fixed distance from a centre. Its equation is (x − h)² + (y − k)² = r². It is a relation but not a function, because most x values have two y values."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A farm waters a big round paddock with one arm that swings around a post. How would you describe the edge of the wet ground with an equation?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8389
  url: http://127.0.0.1:8389/index.html
  readySelector: "#sl-h"
  layout: full
explainPicture: { ref: pivot.yml#explain-pic, caption: "A circle with centre (0, 0) and radius 5. The point (3, 4) is on it: 3² + 4² = 9 + 16 = 25." }
explainClip:
  query: { code: "@pivot.yml#explain", fresh: 1, id: explain }
  caption: "Move the centre, change the radius, and the equation follows"
  say: "Move the centre, change the radius, and the equation follows."
  clip:
    - caption: { text: "The centre is the pivot. The radius is the arm.", say: "The centre is the pivot, and the radius is the arm." }
    - wait: 600
    - click: Make r bigger
    - wait: 600
    - caption: { text: "A longer arm: a bigger circle.", say: "A longer arm gives a bigger circle." }
    - wait: 600
    - click: Make h bigger
    - wait: 600
    - caption: { text: "Move the pivot and the circle moves with it.", say: "Move the pivot, and the circle moves with it." }
    - wait: 1200
---
A centre-pivot sprinkler is a long arm that swings around a post. Everything the arm reaches is watered, and the edge of the wet ground is a circle. On the plan below, one square is 100 m. The arm length is made up for this lesson.

## Predict: the end of the arm

```step
stage: predict
insight: "Committing to which point is at the end of a 5-square arm shows who adds the coordinates (3 + 4 = 7, not 5), who picks a pair that looks right, and who sees that the distance from the pivot needs squares."
check:
  type: predict
  q: "The pivot is at $(0, 0)$ and the arm is 5 squares long. Which of these points is exactly at the end of the arm?"
  options:
    - "$(3, 4)$"
    - "$(4, 4)$"
    - "$(5, 5)$"
    - "$(2, 3)$"
  actual: "(3, 4). The distance from (0, 0) is found with Pythagoras: 3² + 4² = 9 + 16 = 25, and 5² = 25. For (4, 4) it is 32, which is more than 25, so that point is past the end of the arm. For (2, 3) it is 13, which is less."
```

<figure class="situation" role="img" aria-label="A grid with a pivot dot at the centre, 0 and 0. A circle of radius 5 squares is drawn round it. One arm from the pivot to the circle is drawn at an angle and labelled 5 squares. A question mark sits on the circle at the end of the arm."><svg viewBox="0 0 300 300" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><circle cx="150" cy="150" r="100" stroke="#0F6E56" stroke-width="2" fill="#1D9E75" fill-opacity="0.12"/><line x1="10" y1="150" x2="290" y2="150" stroke-opacity="0.4"/><line x1="150" y1="10" x2="150" y2="290" stroke-opacity="0.4"/><line x1="150" y1="150" x2="210" y2="70" stroke="#8A4F0C" stroke-width="2"/><circle cx="150" cy="150" r="4" fill="currentColor"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="168" y="168">pivot</text><text x="196" y="124">5</text><text x="228" y="66" font-size="24">?</text></g></svg></figure>

The picture shows the pivot at the centre and an arm of 5 squares. Make a guess before you check.

## Run: move the pivot

```step
stage: run
insight: "The centre of the circle is where the pivot is and the radius is the arm. Moving the pivot changes the equation in a way you can see."
try: { playground: board, starter: "pivot.yml#run", height: 640 }
check: { type: board, text: "Set the pivot at $(3, -1)$ and the arm to 4. Read the equation under the graph. Compare the signs with the numbers you set.", when: "h = 3 and k = -1 and r = 4" }
```

The graph draws every point the arm reaches. The equation is listed under the graph. Move the centre and look at the signs in the brackets.

## Investigate: centre, radius and not a function

```step
stage: investigate
insight: "In (x − h)² + (y − k)² = r² the centre is (h, k) and the right side is the radius squared. A circle gives two y values for most x values, so it isn't a function."
tasks:
  - check:
      type: number
      q: "A circle has centre $(-1, 4)$ and radius 3. What number is on the right side of its equation?"
      answer: 9
      feedback:
        - [3, "3 is the radius. The right side is the radius squared."]
        - [-1, "-1 is part of the centre. The right side is the radius squared: 3 × 3."]
      explain: "The equation is (x + 1)² + (y − 4)² = 9. The right side is r² = 3² = 9."
  - check:
      type: bug
      code: "working.txt#alex"
      text: "Alex reads the centre and radius from an equation. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: circle-centre-sign
      explain: "Line 2: the brackets are (x − 3) and (y + 1), and the centre is where each bracket is zero: x = 3 and y = −1. The centre is (3, −1), not (−3, 1)."
  - check:
      type: question
      q: "On the circle $x^2 + y^2 = 25$, the points $(3, 4)$ and $(3, -4)$ are both on it. What does that say about a circle?"
      options: ["It isn't a function: the input x = 3 has two outputs, 4 and −4", "It is a function: every point has an x and a y", "It is a function: it's a smooth curve", "It isn't a function: the radius is 5"]
      answer: 0
      feedback: [null, "Every relation has points. A function gives exactly one y for each x.", "A smooth curve can still be a relation that isn't a function.", "The radius isn't the reason. The same x gives two different y values."]
      explain: "A vertical line at x = 3 meets the circle twice. A function has only one y for each x, so a circle is a relation but not a function."
  - check:
      type: question
      q: "The circle $x^2 + y^2 = 25$ moves 2 right and 1 up. The radius stays 5. What is its new equation?"
      options: ["$(x - 2)^2 + (y - 1)^2 = 25$", "$(x + 2)^2 + (y + 1)^2 = 25$", "$(x - 2)^2 + (y - 1)^2 = 5$", "$x^2 + y^2 = 28$"]
      answer: 0
      feedback: [null, "Moving right 2 makes the bracket (x − 2): the centre's x is where the bracket is zero.", "The right side is r², and r hasn't changed: it's 25.", "Adding to the right side changes the radius; it doesn't move the centre."]
      explain: "The centre is now (2, 1): the brackets are (x − 2) and (y − 1). The radius is still 5, so the right side is 25."
```

### Write the equation

Here's how to write the equation of a circle from its centre and radius.

```worked
\text{centre } (2, -3),\; r = 5 :: Write the equation of the circle.
(x - 2)^2 :: The centre's x is 2, so the bracket is x minus 2.
(y + 3)^2 :: The centre's y is −3, so the bracket is y minus −3, which is y plus 3.
r^2 = 25 :: The right side is the radius squared.
(x - 2)^2 + (y + 3)^2 = 25 :: Put the two brackets and the right side together.
```

Now try one on paper: centre $(-1, 4)$, radius 3. Work out the number on the right side and type it.

### Find the mistake

Read Alex's working. Where is the centre?

### Why not a function?

### Moving the circle

## Modify: change the pivot

```step
stage: modify
insight: "One change at a time: the farthest east the arm reaches, a point exactly on the edge, and a radius of 0."
try: { playground: board, starter: "pivot.yml#vary", height: 640 }
tasks:
  - hint: ["The pivot is at (3, −1) and the arm is 4.", "East is the x direction: 3 + 4."]
    check: { type: answer, q: "The pivot is at $(3, -1)$ and the arm is 4 squares. How far east, in squares from $x = 0$, does the arm reach at its farthest?", answer: "7", feedback: [["4", "4 is the arm's length. The pivot is already 3 squares east of x = 0."], ["1", "That's 3 − 4, the farthest west. The farthest east is 3 + 4."]], explain: "The farthest east is the centre's x plus the radius: 3 + 4 = 7." }
  - hint: ["Work out how far (1, 1) is from the tower at (−2, 1).", "They are on the same row, so count across: 1 − (−2)."]
    check:
      type: question
      q: "A phone tower is at $(-2, 1)$ and covers everything within 3 squares of it. The point $(1, 1)$ is exactly 3 squares away. Is it covered?"
      options: ["On the edge: exactly 3 away, so it's on the circle", "Outside: only points closer than 3 are covered", "Inside: it's close to the tower", "Not enough information"]
      answer: 0
      feedback: [null, "'Within 3' includes the edge: exactly 3 away is still covered.", "Being close isn't the test. Its distance from the tower is 3, which is the radius: that's the edge.", "The distance is enough: 1 − (−2) = 3."]
      explain: "(1 − (−2))² + (1 − 1)² = 9 = 3², so the point is on the circle, at the edge of the coverage."
  - hint: "What is (x − 3)² + (y + 1)² = 0?"
    check:
      type: question
      q: "Edge case: the radius is 0, so the equation is $(x - 3)^2 + (y + 1)^2 = 0$. Which points are on it?"
      options: ["Only the centre, (3, −1)", "No points at all", "Every point on the line x = 3", "A circle of radius 0 doesn't have an equation"]
      answer: 0
      feedback: [null, "The centre makes both brackets 0, so 0 + 0 = 0.", "A point with x = 3 and y different from −1 makes the second bracket positive.", "It has the equation; it just has one point."]
      explain: "Both squares are 0 or more, so the sum is 0 only when both brackets are 0. That is the single point (3, −1)."
```

### Farthest east

### On the edge

### A radius of 0

## Practise: circles

```step
stage: practise
insight: "Testing a point against a circle, reading a circle's centre and radius, and (review) a square root."
tasks:
  - check:
      type: question
      q: "Is $(6, 8)$ inside, on or outside the circle $x^2 + y^2 = 100$?"
      options: ["On it: 6² + 8² = 100", "Inside: 6² + 8² is less than 100", "Outside: 6² + 8² is more than 100", "Can't tell"]
      answer: 0
      feedback: [null, "36 + 64 = 100, not less than 100.", "36 + 64 = 100, not more than 100.", "Work out 6² + 8² and compare it with 100."]
      explain: "36 + 64 = 100, which is 10². The point is on the circle."
    smaller:
      check: { type: number, q: "What is $6^2 + 8^2$?", answer: 100, explain: "36 + 64 = 100. Compare it with the number on the right side." }
  - check:
      type: number
      q: "A circle is $(x - 4)^2 + (y + 2)^2 = 49$. What is its radius?"
      answer: 7
      feedback:
        - [49, "49 is the radius squared. The radius is the square root: 7."]
      explain: "r² = 49, so r = 7."
  - check:
      type: question
      q: "What is the centre of the circle $(x + 3)^2 + (y - 5)^2 = 9$?"
      options: ["$(-3, 5)$", "$(3, -5)$", "$(3, 5)$", "$(-3, -5)$"]
      answer: 0
      feedback: [null, "Both signs are flipped. The centre is where each bracket is 0.", "x + 3 = 0 gives x = −3, not 3.", "y − 5 = 0 gives y = 5, and x + 3 = 0 gives x = −3."]
      explain: "x + 3 = 0 gives x = −3, and y − 5 = 0 gives y = 5."
  - check:
      type: number
      q: "Review: solve $x^2 = 49$. What is the positive solution?"
      answer: 7
      explain: "x = 7 (and x = −7)."
```

### Inside, on or outside

### Radius

### Centre

### Review

From the last unit: a square root.

## Make: back to the sprinkler

```step
stage: make
insight: "Coming back to the paddock: test a tree against the circle by adding squares, and say why the whole circle can't be written as one y = rule."
tasks:
  - hint: ["The tree is at (4, 3.5).", "Compare x² + y² with 5² = 25."]
    check:
      type: reasoning
      paper: true
      q: "The pivot is at $(0, 0)$ and the arm is 5 squares. A tree is at $(4, 3.5)$. Work out $x^2 + y^2$ for the tree. Is the tree watered?"
      steps:
        - ["$4^2 + 3.5^2 = 16 + 12.25 = 28.25$", "the squared distance from the pivot"]
        - ["$5^2 = 25$", "the arm squared"]
        - ["28.25 is more than 25, so the tree is outside", "past the end of the arm"]
      answer: "28.25"
      answerLabel: "x² + y² for the tree"
      tolerance: 0.001
      feedback:
        - ["28", "Not rounded: 3.5² is 12.25, not 12."]
        - ["7.5", "That adds 4 and 3.5. Square each one first, then add."]
      criteria:
        - "I squared the coordinates before adding."
        - "I compared my answer with 25, the arm squared."
        - "I said whether the tree is inside, on or outside."
      explain: "16 + 12.25 = 28.25, which is more than 25. The tree is outside the watered circle."
  - check:
      type: question
      q: "Someone tries to write the whole circle as one rule $y = \\ldots$. Why can't they?"
      options: ["Most x values have two y values, a top one and a bottom one, so it isn't a function", "The circle doesn't have an x", "A circle needs a y² and a function can't have squares", "A circle has no centre"]
      answer: 0
      feedback: [null, "The circle has an x and a y; each x has two points on the circle.", "A function can have squares: a quadratic is a function. The issue is two y values for one x.", "The centre is the pivot."]
      explain: "A function gives one y for each x. The circle gives two, the top half and the bottom half, so it has to be written as an equation of x and y, or as two functions."
```

### Is the tree watered?

Back to the paddock. Work it out on paper first, then type your answer.

### One rule for the whole circle?

The arm length and the pivot are made up. A real centre-pivot circle can be measured: your class could choose a circular paddock on a satellite map, put a grid over it and write its equation.

Sources: the arm length of 5 squares (500 m) and the tree are made up for this lesson.

**Also used in**

- **Phone towers and no-fly zones.** The area within a fixed distance of a point is a circle, and the equation tells you whether a place is inside.
- **Science.** Sound or light spreading evenly from a source travels out in circles.
- **Next.** Judging a model, and making a conjecture: both are done in class.
