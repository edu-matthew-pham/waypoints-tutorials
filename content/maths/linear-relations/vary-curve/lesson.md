---
order: 25
unit: vary9
node: AC9M9A06 n2
uses: [AC9M9A04 n2]
assumes: [AC9M9A04 n2, AC9M9A06 n1]
connection: ball-arc
title: Change a, h and k in a curve
summary: "In y = a(x − h)² + k, the turning point is (h, k) and a sets which way the curve opens and how wide it is."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A thrown ball's path is a curve. Which numbers in its rule decide how high it goes?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8372
  url: http://127.0.0.1:8372/index.html
  readySelector: "#board"
  layout: full
---
A quadratic written as $y = a(x - h)^2 + k$ shows its turning point straight away. Change one number at a time to see what each controls.

## Predict: where does it turn

```step
stage: predict
insight: "Predicting the turning point from the rule before moving anything shows whether the signs are read correctly."
check:
  type: predict
  q: "The curve is $y = (x - 3)^2 + 2$. Where is its turning point?"
  options:
    - "$(3, 2)$"
    - "$(-3, 2)$"
    - "$(3, -2)$"
    - "$(2, 3)$"
  actual: "(3, 2). The bracket (x − 3) is zero at x = 3, and the +2 lifts the lowest point to y = 2."
```

## Run: move the sliders

```step
stage: run
insight: "h slides the curve left or right, k moves it up or down, and a flips it or makes it narrower or wider; the turning point sits at (h, k)."
try: { playground: board, starter: "curve.yml#run", height: 560 }
check: { type: board, text: "Set $a$ to $-1$, $h$ to $2$ and $k$ to $5$. Where is the highest point?", when: "a = -1 and h = 2 and k = 5" }
```

## Investigate: what each number does

```step
stage: investigate
insight: "k is the height of the turning point, h its place across (the sign flips inside the bracket), and a decides whether it is a peak or a valley."
tasks:
  - check:
      type: number
      q: "For $y = (x - 4)^2 + 1$, what is the $x$-coordinate of the turning point?"
      answer: 4
      explain: "x − 4 = 0 at x = 4."
    smaller:
      check: { type: "number", q: "What is $4 - 4$?", answer: 0, explain: "4 − 4 = 0." }
  - check:
      type: question
      q: "What does a negative $a$ do, as in $y = -(x - 4)^2 + 1$?"
      options: ["Flips the curve: the turning point is a peak", "Moves the curve left", "Moves the curve down 1", "Makes the curve narrower"]
      answer: 0
      feedback: [null, "Left and right is h.", "Up and down is k.", "Narrower comes from a bigger size of a, not its sign."]
      explain: "A negative a turns the curve upside down: a peak instead of a valley, like a thrown ball."
  - check:
      type: bug
      code: "working.txt#lee"
      text: "Lee finds the turning point of y = (x + 3)² + 2. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: turning-point-h-sign
      explain: "Line 3: x + 3 = 0 at x = −3, so the turning point is (−3, 2). The sign flips because the bracket must be zero."
```

### Reading the turning point

```worked
y = (x - 3)^2 + 2 :: h = 3, k = 2.
(x - 3) = 0 \Rightarrow x = 3 :: The bracket is zero at the turning point.
(3, 2) :: The turning point.
y = (x + 3)^2 + 2 :: The bracket is x + 3.
(x + 3) = 0 \Rightarrow x = -3 :: The sign flips.
(-3, 2) :: The turning point.
```

### Up or down

### Find the mistake

Read Lee's working. Which line takes the sign from the bracket?

## Modify: place the turning point

```step
stage: modify
insight: "Choosing h, k and the sign of a to put the peak where you want it."
tasks:
  - hint: ["h is where the bracket is zero.", "Write (x − h)."]
    check: { type: number, q: "A ball's path peaks at $(2, 5)$. Which value of $h$ goes in $y = a(x - h)^2 + k$?", answer: 2, explain: "The peak's x-coordinate is h = 2." }
  - hint: ["k is the height of the turning point.", "Read the y-value of the peak."]
    check: { type: number, q: "The same ball peaks at $(2, 5)$. What is $k$?", answer: 5, explain: "k = 5: the peak's height." }
  - hint: ["A peak, not a valley.", "Which sign of a opens downward?"]
    check: { type: question, q: "Which rule gives a peak at $(2, 5)$?", options: ["$y = -(x - 2)^2 + 5$", "$y = (x - 2)^2 + 5$", "$y = -(x + 2)^2 + 5$", "$y = (x + 2)^2 - 5$"], answer: 0, feedback: [null, "This opens upward: a valley at (2, 5).", "The turning point is at x = −2.", "This is a valley at (−2, −5)."], explain: "Negative a gives a peak, (x − 2) gives h = 2, and +5 gives k = 5." }
```

### The peak across

### The peak height

### Choosing the rule

## Practise: read the rule

```step
stage: practise
insight: "Reading the turning point and direction from the rule."
tasks:
  - check:
      type: number
      q: "For $y = (x - 6)^2 + 3$, what is $k$?"
      answer: 3
      explain: "k is the number added on the end."
  - check:
      type: number
      q: "For $y = (x + 2)^2 + 7$, what is the $x$-coordinate of the turning point?"
      answer: -2
      explain: "x + 2 = 0 at x = −2."
    smaller:
      check: { type: "number", q: "What is $-2 + 2$?", answer: 0, explain: "−2 + 2 = 0." }
  - check:
      type: number
      q: "Review: solve $x^2 - 7x + 12 = 0$. What is the smaller solution?"
      answer: 3
      explain: "(x − 3)(x − 4) = 0."
```

### The height

### The sign flips

### Review

## Make: the ball

```step
stage: make
insight: "Returning to the thrown ball: use the turning point to find the highest height and the time."
tasks:
  - hint: ["Compare with y = a(x − h)² + k.", "The peak is (h, k)."]
    check:
      type: reasoning
      paper: true
      q: "A ball's height in metres after $t$ seconds is $h = -5(t - 2)^2 + 22$. This rule is made up for the task. What is the greatest height of the ball?"
      steps:
        - ["$h = -5(t - 2)^2 + 22$", "match with a(x − h)² + k"]
        - ["turning point $(2, 22)$", "bracket is zero at t = 2"]
        - ["22 m", "the peak height is k"]
      answer: "22"
      answerLabel: "Greatest height (m)"
      tolerance: 0.001
      feedback:
        - ["2", "That is the time of the peak, not its height."]
      criteria:
        - "I found the turning point from the rule."
        - "I picked the height, not the time."
        - "I included the unit."
      explain: "The peak is (2, 22): after 2 seconds, 22 m high."
  - check:
      type: question
      q: "When does the ball reach its greatest height?"
      options: ["After 2 seconds", "After 22 seconds", "After −2 seconds", "At the start"]
      answer: 0
      feedback: [null, "22 is the height.", "Time can't be negative here.", "It rises first."]
      explain: "The bracket is zero at t = 2."
```

### The greatest height

### When it peaks

**Also used in**

- **Sport.** The path of a ball, a jump or a fountain's water.
- **Bridges and cables.** Curved arches follow the same shape.
- **Next unit.** Using the rule to solve problems about heights and times.
