---
order: 16
unit: lines9
node: AC9M9A03 n4
uses: [AC9M9A03 n1]
assumes: [AC9M9A03 n1]
connection: meet-halfway
title: The midpoint
summary: "The midpoint of two points is halfway along the line between them: the average of the x-coordinates and the average of the y-coordinates."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two friends live at opposite ends of town and want to meet halfway. Where on the map is halfway?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8363
  url: http://127.0.0.1:8363/index.html
  readySelector: "#board"
  layout: full
---
Halfway between two numbers is their average. Halfway between two points is the average of each coordinate.

## Predict: halfway

```step
stage: predict
insight: "Committing to a halfway point on a grid shows who halves each coordinate and who adds them or halves only one."
check:
  type: predict
  q: "Two friends live at (2, 3) and (10, 9) on a town grid. They meet at the point exactly halfway between their homes. Where do they meet?"
  options:
    - "(6, 6)"
    - "(12, 12)"
    - "(6, 3)"
    - "(4, 3)"
  actual: "(6, 6). Halfway across from 2 to 10 is 6. Halfway up from 3 to 9 is 6."
```

<figure class="situation" role="img" aria-label="A town grid with one home at 2, 3 and another at 10, 9, joined by a straight line. A question mark sits on the line, halfway between."><svg viewBox="0 0 300 200" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-opacity="0.2"><path d="M20 180 H280 M20 150 H280 M20 120 H280 M20 90 H280 M20 60 H280 M20 30 H280 M20 30 V180 M60 30 V180 M100 30 V180 M140 30 V180 M180 30 V180 M220 30 V180 M260 30 V180"/></g><path d="M20 180 H285 M20 180 V25" stroke-width="1.5"/><path d="M60 120 L260 30" stroke-width="2" stroke-dasharray="5 4"/><circle cx="60" cy="120" r="5" fill="currentColor"/><circle cx="260" cy="30" r="5" fill="currentColor"/><text x="68" y="138" fill="currentColor" stroke="none">home (2, 3)</text><text x="190" y="24" fill="currentColor" stroke="none">home (10, 9)</text><text x="155" y="82" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

Where is the point halfway between the two homes?

## Run: place the halfway point

```step
stage: run
insight: "Dragging a point to the middle and seeing equal halves along the line connects 'halfway' with the average of each coordinate."
try: { playground: board, starter: "mid.yml#run", height: 560 }
check: { type: board, text: "Drag $M$ to the point halfway between $A$ and $B$. Was your prediction right?", when: "x(M) = 6 and y(M) = 6" }
```

Drag $M$ along the line until it's halfway between $A$ and $B$.

## Investigate: averaging

```step
stage: investigate
insight: "The midpoint's x-coordinate is the average of the two x-coordinates, and its y-coordinate is the average of the two y-coordinates. Adding without halving gives a point far outside the line."
tasks:
  - check:
      type: number
      q: "Find the number halfway between $x = 4$ and $x = 12$."
      answer: 8
      explain: "(4 + 12) ÷ 2 = 8."
  - check:
      type: question
      q: "What is the midpoint of $(-2, 5)$ and $(4, -1)$?"
      options: ["$(1, 2)$", "$(2, 4)$", "$(-1, 3)$", "$(3, 2)$"]
      answer: 0
      feedback: [null, "That adds the coordinates and doesn't halve the y: (−2 + 4 = 2, 5 + −1 = 4).", "Check the x: (−2 + 4) ÷ 2 = 1.", "Check the x: (−2 + 4) ÷ 2 = 1."]
      explain: "x: (−2 + 4) ÷ 2 = 1. y: (5 + −1) ÷ 2 = 2. The midpoint is (1, 2)."
    smaller:
      check: { type: "number", q: "What is $(-2 + 4) \\div 2$?", answer: 1, explain: "−2 + 4 = 2, and 2 ÷ 2 = 1." }
  - check:
      type: bug
      code: "working.txt#tam"
      text: "Tam finds the midpoint of $(2, 3)$ and $(10, 9)$. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: midpoint-sum-not-half
      explain: "Line 3: he stopped after adding. (2 + 10) ÷ 2 = 6 and (3 + 9) ÷ 2 = 6, so the midpoint is (6, 6)."
```

### Halfway between numbers

Here's finding a midpoint.

```worked
A(2, 3),\; B(10, 9) :: The two points.
x = \frac{2 + 10}{2} = 6 :: Average the x-coordinates.
y = \frac{3 + 9}{2} = 6 :: Average the y-coordinates.
M(6, 6) :: The midpoint.
```

Now try one on paper: the points $(-4, 1)$ and $(6, 9)$. Find the midpoint, then type its $x$-coordinate.

### Which midpoint?

### Find the mistake

Read Tam's working. Which line forgets a step?

## Modify: work backwards

```step
stage: modify
insight: "Finding an end point from the midpoint reverses the same averaging: the midpoint is as far on one side as the other."
try: { playground: board, starter: "mid.yml#vary", height: 560 }
tasks:
  - hint: ["From A to M is 3 across and 4 up.", "Go the same again past M."]
    check: { type: board, text: "$M$ is the midpoint of $A$ and $B$. Drag $B$ to the right place.", when: "x(B) = 8 and y(B) = 11" }
  - hint: ["Average the x-coordinates: (x + 8) ÷ 2 = 5.", "So x + 8 = 10."]
    check: { type: number, q: "The midpoint of $P$ and $(8, 3)$ is $(5, 4)$. What is the $x$-coordinate of $P$?", answer: 2, explain: "(x + 8) ÷ 2 = 5, so x + 8 = 10 and x = 2." }
  - hint: ["Both points have y = 6."]
    check: { type: question, q: "Edge case: both points have the same $y$-coordinate, 6. What is the $y$-coordinate of the midpoint?", options: ["6", "3", "12", "0"], answer: 0, feedback: [null, "That halves one 6 only.", "That adds without halving.", "Nothing makes it 0."], explain: "(6 + 6) ÷ 2 = 6: the midpoint is on the same horizontal line." }
```

### The far end

### The missing coordinate

### The same height

## Practise: find the midpoint

```step
stage: practise
insight: "Averaging coordinates, with negatives and with the missing end."
tasks:
  - check:
      type: question
      q: "Find the midpoint of $(0, 4)$ and $(8, 10)$."
      options: ["$(4, 7)$", "$(8, 14)$", "$(4, 14)$", "$(4, 3)$"]
      answer: 0
      feedback: [null, "That adds without halving.", "Halve the y-coordinates too.", "Add the y-coordinates: 4 + 10 = 14, then halve."]
      explain: "(0 + 8) ÷ 2 = 4, (4 + 10) ÷ 2 = 7."
  - check:
      type: number
      q: "Find the $y$-coordinate of the midpoint of $(3, -6)$ and $(5, 2)$."
      answer: -2
      explain: "(−6 + 2) ÷ 2 = −4 ÷ 2 = −2."
    smaller:
      check: { type: "number", q: "What is $-6 + 2$?", answer: -4, explain: "Start at −6 and go up 2: −4." }
  - check:
      type: number
      q: "The midpoint of $A$ and $B(9, 5)$ is $(6, 4)$. What is the $y$-coordinate of $A$?"
      answer: 3
      explain: "(y + 5) ÷ 2 = 4, so y + 5 = 8 and y = 3."
  - check:
      type: question
      q: "Review: how far is it between $(0, 0)$ and $(6, 8)$?"
      options: ["10", "14", "48", "7"]
      answer: 0
      feedback: [null, "That adds the sides.", "That multiplies them.", "That's the average of 6 and 8."]
      explain: "6² + 8² = 100, and √100 = 10."
```

### A midpoint

### The y-coordinate

### Working backwards

### Review

From the last lesson: the distance between two points.

## Make: the bus stop

```step
stage: make
insight: "Returning to the halfway point: place a stop between two places and say what 'halfway' means on the map."
tasks:
  - hint: ["Average the x-coordinates.", "Then average the y-coordinates."]
    check:
      type: reasoning
      paper: true
      q: "Two schools are at $(1, 2)$ and $(9, 12)$ on a grid in km. A bus stop goes halfway between them. Find its coordinates, then type the $x$-coordinate."
      steps:
        - ["$x = \\frac{1 + 9}{2} = 5$", "average the x-coordinates"]
        - ["$y = \\frac{2 + 12}{2} = 7$", "average the y-coordinates"]
        - ["$(5, 7)$", "the stop is at (5, 7)"]
      answer: "5"
      answerLabel: "x-coordinate of the stop"
      tolerance: 0.001
      feedback:
        - ["10", "That adds 1 and 9. Halve it."]
        - ["7", "That's the y-coordinate. The x-coordinate comes first."]
      criteria:
        - "I averaged the x-coordinates and the y-coordinates separately."
        - "I wrote the midpoint as a pair of coordinates."
        - "I checked that it's as far from each school."
      explain: "(1 + 9) ÷ 2 = 5 and (2 + 12) ÷ 2 = 7: the stop is at (5, 7)."
  - check:
      type: number
      q: "What is the $y$-coordinate of the stop?"
      answer: 7
      explain: "(2 + 12) ÷ 2 = 7."
  - check:
      type: question
      q: "Is the stop halfway by road as well?"
      options: ["Not necessarily: roads aren't straight", "Yes, always", "Only if the schools are the same size"]
      answer: 0
      feedback: [null, "The midpoint is halfway in a straight line; roads bend.", "Size doesn't matter."]
      explain: "The midpoint is halfway along the straight line between the schools. By road it could be further for one of them."
```

### The stop

Back to the bus stop. Work it out on paper first, then type your answer.

### The other coordinate

### By road

The schools and grid here are made up for the task.

**Also used in**

- **Meeting points.** Apps find a fair place for two people to meet by using the midpoint (then check the roads).
- **Games.** The centre of a line between two characters is the midpoint of their positions.
- **Next lesson.** Using gradient, distance and midpoint together in one problem.
