---
order: 13
unit: lines9
node: AC9M9A03 n1
uses: [AC9M8A04 n1]
assumes: [AC9M8A04 n1]
connection: ramp-1-in-14
title: Gradient between two points
summary: "Gradient is rise over run: how far up (or down) you go for each step across, found from any two points on the line."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A wheelchair ramp can only be so steep. How do you put a number on steep, using just two points?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8360
  url: http://127.0.0.1:8360/index.html
  readySelector: "#board"
  layout: full
---
A ramp, a roof and a ski run all rise as you move along. The gradient says how much, and you can find it from any two points.

## Predict: how steep?

```step
stage: predict
insight: "Committing to a number for two points on a grid shows who divides the rise by the run and who divides the other way, or just subtracts."
check:
  type: predict
  q: "A ramp's start is at A (1, 1) and its top is at B (5, 9) on a grid in metres. For each 1 metre across, how many metres up does it go?"
  options:
    - "2"
    - "8"
    - "½"
    - "4"
  actual: "2. Across, it goes from 1 to 5, which is 4. Up, it goes from 1 to 9, which is 8. So 8 up for 4 across is 2 up for each 1 across."
```

<figure class="situation" role="img" aria-label="A grid with a ramp drawn as a sloping line from point A at 1, 1 to point B at 5, 9."><svg viewBox="0 0 260 230" width="260" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-opacity="0.2"><path d="M30 200 H230 M30 160 H230 M30 120 H230 M30 80 H230 M30 40 H230 M30 40 V200 M70 40 V200 M110 40 V200 M150 40 V200 M190 40 V200 M230 40 V200"/></g><path d="M30 200 H235 M30 200 V35" stroke-width="1.5"/><path d="M70 160 L190 40" stroke-width="3"/><circle cx="70" cy="160" r="5" fill="currentColor"/><circle cx="190" cy="40" r="5" fill="currentColor"/><text x="78" y="178" fill="currentColor" stroke="none">A (1, 1)</text><text x="132" y="34" fill="currentColor" stroke="none">B (5, 9)</text></svg></figure>

The ramp runs from $A$ to $B$. Work out how many metres up for each metre across.

## Run: rise and run

```step
stage: run
insight: "Dragging B and watching the dashed 'across' and 'up' sides shows that gradient is up divided by across, and that the same line gives the same number wherever you measure it."
try: { playground: board, starter: "two-points.yml#run", height: 560 }
check: { type: board, text: "Drag B so the line goes up 2 for every 1 across. Was your prediction right?", when: "m = 2" }
```

Point $A$ stays put. Drag $B$ and read the dashed sides: how far across, how far up.

## Investigate: rise over run

```step
stage: investigate
insight: "Gradient is the rise divided by the run, taken in the same direction from both points. Swapping the two points swaps both signs and gives the same number."
tasks:
  - check:
      type: number
      q: "A line goes through $(2, 3)$ and $(6, 11)$. What is its gradient?"
      answer: 2
      explain: "Rise 11 − 3 = 8. Run 6 − 2 = 4. 8 ÷ 4 = 2."
    smaller:
      check: { type: "number", q: "From $(2, 3)$ to $(6, 11)$, how far across is that (the run)?", answer: 4, explain: "6 − 2 = 4." }
  - check:
      type: question
      q: "A line goes up 3 for every 2 across. Which is its gradient?"
      options: ["$\\frac{3}{2}$", "$\\frac{2}{3}$", "$5$", "$1$"]
      answer: 0
      feedback: [null, "That's the run over the rise, the wrong way up.", "Gradient divides the two numbers; it doesn't add them.", "That would be up 1 for every 1 across."]
      explain: "Rise over run: 3 up over 2 across is 3/2, or 1.5."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe finds the gradient between $(1, 7)$ and $(4, 1)$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: gradient-order-mixed
      explain: "Line 3: she did 1 − 7 for the rise but 1 − 4 for the run, starting from different points. Both must start from the same point: (1 − 7) ÷ (4 − 1) = −6 ÷ 3 = −2."
```

### Rise over run

Here's finding a gradient from two points.

```worked
A(1, 2),\; B(5, 10) :: The two points.
\text{rise} = 10 - 2 = 8 :: Up from A to B: the y values.
\text{run} = 5 - 1 = 4 :: Across from A to B: the x values, in the same order.
\text{gradient} = \frac{8}{4} = 2 :: Rise over run: up 2 for each 1 across.
```

Now try one on paper: the points $(2, 7)$ and $(6, 3)$. Work out the rise, the run and the gradient, then type the gradient.

### Which way up?

### Find the mistake

Read Zoe's working. Which line takes from different points?

## Modify: change the line

```step
stage: modify
insight: "Moving the points one at a time: a gentler line, a line that goes down, and a line with no run."
try: { playground: board, starter: "two-points.yml#vary", height: 560 }
tasks:
  - hint: ["Gentler means a smaller number up for each 1 across.", "Up 1 for each 2 across is 1 ÷ 2."]
    check: { type: board, text: "Move the points so the line goes up 1 for every 2 across: a gradient of $\\frac{1}{2}$.", when: "m = 0.5" }
  - hint: ["Going down means the rise is negative.", "Try moving B below A."]
    check: { type: board, text: "Make a line that goes down 1 for every 1 across: a gradient of $-1$.", when: "m = -1" }
  - hint: ["Put B straight above A.", "What is the run?"]
    check: { type: question, q: "Edge case: B is straight above A, so the run is 0. What is rise ÷ 0?", options: ["It has no value: you can't divide by 0", "0", "1", "It's the same as the rise"], answer: 0, feedback: [null, "0 would mean a flat line. This line is straight up.", "Nothing makes it 1.", "Dividing by 0 doesn't leave the rise unchanged."], explain: "A line going straight up has no gradient: you can't divide by a run of 0." }
```

### Gentler

### Going down

### Straight up

## Practise: find the gradient

```step
stage: practise
insight: "Rise over run from two points, with positive, negative and zero gradients and the check on direction."
tasks:
  - check:
      type: number
      q: "Find the gradient of the line through $(1, 2)$ and $(4, 11)$."
      answer: 3
      explain: "Rise 11 − 2 = 9, run 4 − 1 = 3. 9 ÷ 3 = 3."
  - check:
      type: number
      q: "Find the gradient of the line through $(0, 8)$ and $(4, 0)$."
      answer: -2
      explain: "Rise 0 − 8 = −8, run 4 − 0 = 4. −8 ÷ 4 = −2: the line goes down."
    smaller:
      check: { type: "question", q: "From $(0, 8)$ to $(4, 0)$, does the line go up or down?", options: ["Down", "Up"], answer: 0, explain: "y goes from 8 to 0, so it goes down: the rise is negative." }
  - check:
      type: number
      q: "Find the gradient of the line through $(2, 5)$ and $(7, 5)$."
      answer: 0
      explain: "Rise 5 − 5 = 0. 0 ÷ 5 = 0: a flat line."
  - check:
      type: question
      q: "Review: in $y = 3x + 1$, what does the 3 tell you?"
      options: ["The line goes up 3 for each 1 across", "The line crosses the y-axis at 3", "The line goes up 1 for each 3 across", "The line goes through $(3, 1)$"]
      answer: 0
      feedback: [null, "That's the number on its own, 1.", "That's the wrong way up.", "Check: when x = 3, y = 10."]
      explain: "In y = mx + c the m is the gradient: 3 up for each 1 across."
```

### Up

### Down

### Flat

### Review

From Year 8: the number in front of $x$ is the gradient.

## Make: the ramp

```step
stage: make
insight: "Returning to the ramp: turn a rise and a run into a gradient and compare it to the legal limit."
tasks:
  - hint: ["Gradient is rise ÷ run.", "To write it as 1 in ___, divide the run by the rise."]
    check:
      type: reasoning
      paper: true
      q: "A ramp rises 0.5 m over a run of 8 m. The limit for ramps up to 9 m is 1 in 14. Write its gradient as 1 in …"
      steps:
        - ["$\\text{gradient} = \\frac{0.5}{8}$", "rise over run"]
        - ["$\\frac{0.5}{8} = \\frac{1}{16}$", "double the top and bottom to get 1 on top"]
        - ["1 in 16", "1 up for every 16 across"]
      answer: "16"
      answerLabel: "1 in …"
      tolerance: 0.01
      feedback:
        - ["8", "That divides the run by 1, not by the rise of 0.5. 8 ÷ 0.5 = 16."]
        - ["0.0625", "That's the gradient as a decimal. Write it as 1 in … by dividing 8 by 0.5."]
      criteria:
        - "I wrote rise over run, not run over rise."
        - "I turned the gradient into the form 1 in …"
        - "I compared the result to the limit of 1 in 14."
      explain: "0.5 ÷ 8 = 1/16, so it's 1 in 16. That's gentler than 1 in 14, so it meets the limit."
  - check:
      type: question
      q: "Is a ramp of 1 in 16 allowed, if the limit is 1 in 14 (up to 9 m long)?"
      options: ["Yes: 1 in 16 is gentler than 1 in 14", "No: 16 is more than 14", "No: it must be exactly 1 in 14"]
      answer: 0
      feedback: [null, "A bigger number after 'in' means a gentler ramp: 1 up in 16 across.", "The limit is the steepest allowed; gentler is fine."]
      explain: "1/16 is smaller than 1/14, so the ramp is gentler and it passes."
```

### 1 in what?

Back to the ramp. Work it out on paper first, then type your answer.

### Allowed?

The ramp measurements here are made up for the task. The limit is real: ramps up to 9 m long can be at most 1 in 14 ([Queensland Health, Ramps to the house and slopes in the garden](https://www.health.qld.gov.au/__data/assets/pdf_file/0029/1477208/Ramps-to-the-house-and-slopes-in-the-garden-slides.pdf), citing AS 1428.1).

**Also used in**

- **Road signs.** A sign saying 8% means 8 m up for every 100 m along.
- **Roofs and stairs.** Builders give a roof's pitch and a staircase's steepness as rise over run.
- **Next lesson.** Parallel and perpendicular lines: what the gradients tell you.
