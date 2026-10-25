---
order: 19
unit: quad9
node: AC9M9A04 n2
uses: [AC9M9A04 n1, AC9M9A03 n4]
assumes: [AC9M9A04 n1, AC9M9A03 n4]
connection: ball-arc
title: Graphing a quadratic
summary: "A quadratic graph is a curve with a turning point on its axis of symmetry. The x-intercepts sit equally either side of the axis."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A ball is thrown in the air and comes down again. How high does it go, and when does it land?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8366
  url: http://127.0.0.1:8366/index.html
  readySelector: "#board"
  layout: full
---
A quadratic makes a curve called a parabola. Its highest or lowest point is the turning point, and the curve is a mirror image either side of it.

## Predict: the highest point

```step
stage: predict
insight: "Committing to when a ball is highest shows who uses the symmetry of the path and who guesses from the look of the curve."
check:
  type: predict
  q: "A ball is thrown up and lands again. Its height is 0 m at time 0 s and again at 6 s. At what time is it at its highest?"
  options:
    - "3 s"
    - "2 s"
    - "4 s"
    - "You can't tell without the formula"
  actual: "3 s. The path is a mirror image either side of the highest point, so the highest point is exactly halfway between 0 s and 6 s: (0 + 6) ÷ 2 = 3."
```

<figure class="situation" role="img" aria-label="A curved arc rising from the ground at time 0 seconds, peaking at a question mark, and coming back to the ground at 6 seconds."><svg viewBox="0 0 320 170" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M20 140 H300" stroke-width="1.5"/><path d="M40 140 Q160 -40 280 140" stroke-width="3"/><circle cx="40" cy="140" r="4" fill="currentColor"/><circle cx="280" cy="140" r="4" fill="currentColor"/><text x="30" y="160" fill="currentColor" stroke="none">0 s</text><text x="272" y="160" fill="currentColor" stroke="none">6 s</text><text x="154" y="42" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

When is the ball at its highest?

## Run: find the turning point

```step
stage: run
insight: "Dragging a point to the top of the curve shows that the turning point is halfway between the two x-intercepts and that its height is the ball's highest height."
try: { playground: board, starter: "arc.yml#run", height: 560 }
check: { type: board, text: "Drag $P$ to the highest point of the curve. Was your prediction right?", when: "x(P) = 3 and y(P) = 9" }
```

The curve is the ball's height, $y = 6x - x^2$ (the made-up path of the ball, with $x$ in seconds and $y$ in metres). Drag $P$ to the top.

## Investigate: reading the parabola

```step
stage: investigate
insight: "The axis of symmetry is the x-value halfway between the x-intercepts, and the turning point is on it. Read the x-coordinate for the time and the y-coordinate for the height."
tasks:
  - check:
      type: number
      q: "A ball's height is 0 m at 0 s and again at 8 s. At what time is it highest?"
      answer: 4
      explain: "Halfway between 0 and 8: (0 + 8) ÷ 2 = 4 s."
  - check:
      type: number
      q: "The height is $y = 6x - x^2$. What is $y$ when $x = 3$?"
      answer: 9
      explain: "6 × 3 − 3² = 18 − 9 = 9."
    smaller:
      check: { type: "number", q: "What is $6 \\times 3$?", answer: 18, explain: "6 × 3 = 18." }
  - check:
      type: question
      q: "A parabola crosses the $x$-axis at $x = 1$ and $x = 5$. What is its axis of symmetry?"
      options: ["$x = 3$", "$x = 5$", "$x = 1$", "$x = 6$"]
      answer: 0
      feedback: [null, "5 is where the curve meets the axis, not the middle.", "1 is where the curve meets the axis, not the middle.", "That adds 1 and 5. Halve it."]
      explain: "(1 + 5) ÷ 2 = 3."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo reads the graph of the ball's height. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: turning-point-coordinates-swapped
      explain: "Line 3: the height is the y-coordinate, 9. The 3 is the time (the x-coordinate): the ball is highest after 3 s."
```

### Halfway

Here's finding the turning point from the intercepts.

```worked
y = x^2 - 4x + 3,\; \text{crosses the x-axis at } 1 \text{ and } 3 :: The graph and its x-intercepts.
x = \frac{1 + 3}{2} = 2 :: The axis of symmetry: halfway between the intercepts.
y = 2^2 - 4 \times 2 + 3 = -1 :: Put x = 2 into the rule.
\text{turning point } (2, -1) :: The lowest point of this curve.
```

Now try one on paper: $y = x^2 - 6x + 5$ crosses the $x$-axis at $1$ and $5$. Find the turning point, then type its $y$-coordinate.

### The height

### The axis

### Find the mistake

Read Jo's working. Which line reads the wrong coordinate?

## Modify: throw it harder

```step
stage: modify
insight: "Changing b changes how long the ball stays up and how high it goes. The model also stops being a ball once it hits the ground."
try: { playground: board, starter: "arc.yml#vary", height: 560 }
tasks:
  - hint: ["The ball lands when y is 0 again.", "For y = bx − x², that's at x = b."]
    check: { type: board, text: "Set $b$ so the ball lands after 8 seconds.", when: "b = 8" }
  - hint: ["The highest point is halfway: x = 4.", "Put x = 4 into 8x − x²."]
    check: { type: number, q: "For $y = 8x - x^2$, what is the highest height?", answer: 16, explain: "At x = 4: 8 × 4 − 4² = 32 − 16 = 16 m." }
  - hint: ["Look at the curve after the ball lands.", "A height below 0 is below the ground."]
    check: { type: question, q: "Edge case: the formula gives $y = -7$ at $x = 7$ for $y = 6x - x^2$. What does that mean for the ball?", options: ["Nothing: the ball has already landed, so the model stops at 6 s", "The ball is 7 m under the ground", "The ball bounced", "The formula is wrong"], answer: 0, feedback: [null, "A ball can't go under the ground: it landed at 6 s.", "The formula doesn't include bounces.", "The formula is fine for 0 to 6 s."], explain: "The formula describes the ball only while it's in the air. Past 6 s, it has landed." }
```

### Land at 8

### Highest height

### After landing

## Practise: read the curve

```step
stage: practise
insight: "Using the symmetry to find the axis, the turning point and what each coordinate means."
tasks:
  - check:
      type: number
      q: "A parabola crosses the $x$-axis at $x = 2$ and $x = 8$. What is its axis of symmetry, $x = $ ?"
      answer: 5
      explain: "(2 + 8) ÷ 2 = 5."
  - check:
      type: number
      q: "A ball follows $y = 10x - x^2$. What is its highest height?"
      answer: 25
      explain: "The ball lands at x = 10, so the top is at x = 5. y = 50 − 25 = 25."
    smaller:
      check: { type: "number", q: "Where does $y = 10x - x^2$ cross the $x$-axis (apart from 0)? Hint: $10x - x^2 = x(10 - x)$.", answer: 10, explain: "x(10 − x) is 0 when x = 0 or x = 10." }
  - check:
      type: question
      q: "The graph of $y = x^2 - 4$ opens upward. What is its turning point?"
      options: ["The lowest point, at $(0, -4)$", "The highest point, at $(0, -4)$", "The lowest point, at $(-4, 0)$", "It has no turning point"]
      answer: 0
      feedback: [null, "An upward curve has a lowest point.", "x = 0 gives y = −4, so the point is (0, −4).", "Every parabola has one."]
      explain: "At x = 0, y = −4, and the curve rises either side: the lowest point is (0, −4)."
  - check:
      type: number
      q: "Review: the second differences of a quadratic table are 4. If $y = ax^2$, what is $a$?"
      answer: 2
      explain: "The second difference is 2a, so 2a = 4 and a = 2."
```

### The axis

### Highest height

### Which point?

### Review

From the last lesson: second differences.

## Make: the ball

```step
stage: make
insight: "Returning to the thrown ball: find the highest point from the symmetry and say what the model leaves out."
tasks:
  - hint: ["Where does the ball land?", "Then the top is halfway."]
    check:
      type: reasoning
      paper: true
      q: "A ball follows $y = 6x - x^2$ ($x$ in seconds, $y$ in metres), landing at 6 s. Find its highest point, and type the greatest height."
      steps:
        - ["$x = \\frac{0 + 6}{2} = 3$", "the top is halfway between the intercepts 0 and 6"]
        - ["$y = 6 \\times 3 - 3^2 = 18 - 9$", "put x = 3 into the rule"]
        - ["$y = 9$", "the greatest height is 9 m, at 3 s"]
      answer: "9"
      answerLabel: "Greatest height (m)"
      tolerance: 0.001
      feedback:
        - ["3", "That's the time. The height is the y-coordinate."]
        - ["18", "That's 6 × 3 with no −3² taken away."]
      criteria:
        - "I used the symmetry to find x first."
        - "I put x back into the rule to find the height."
        - "I gave the answer with its meaning: height, not time."
      explain: "The top is at x = 3, and y = 18 − 9 = 9 m."
  - check:
      type: question
      q: "What does this model leave out?"
      options: ["Air resistance, so a real ball would be slightly lower", "The weight of the ball", "Nothing: it's exact", "The colour of the ball"]
      answer: 0
      feedback: [null, "The model doesn't use weight in this form, but the main thing missing is the air.", "Real balls slow in the air, so it's an approximation.", "Colour doesn't affect the flight."]
      explain: "A real throw is slowed by the air. The parabola is a good approximation, and the height here is made up for the task."
```

### The greatest height

Back to the ball. Work it out on paper first, then type your answer.

### What it leaves out

The ball's path and numbers here are made up for the task.

**Also used in**

- **Sport.** Basketball shots, goal kicks and javelin throws follow a parabola (until the air matters).
- **Engineering.** The cables of a suspension bridge hang close to a parabola.
- **Next lesson.** Finding the landing time exactly: solving a quadratic by factorising.
