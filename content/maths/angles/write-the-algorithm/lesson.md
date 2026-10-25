---
order: 34
unit: algorithms10
node: AC9M10SP03 n2
uses: [AC9M10SP03 n1, AC9M9SP03 n2, AC9M8M06 n2]
assumes: [AC9M10SP03 n1]
connection: sprinkler-cover
title: Write the algorithm
summary: "Turn the pinned-down sprinkler job into numbered steps with a decision and a loop, exact enough for a machine, then run it by hand on two ovals."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Hand the sprinkler plan to a friend who has never seen the job. Could they follow it step by step and get your answer, with nobody to ask?"
---
Last time you pinned the sprinkler job down: an oval that's L long and W wide, a spray that reaches r, and every point within r of a sprinkler. Now the plan has to be written so exactly that a machine could follow it. You found that one sprinkler covers a square a bit under 1.41 × r wide, so the plan uses 1.4 × r to stay on the safe side, and the oval is cut into cells that size or smaller with a sprinkler in the middle of each. The tricky part is deciding how many cells fit, so have a guess at that before the steps.

## Predict: how many cells?

<figure class="situation" role="img" aria-label="An oval drawn as a rectangle, 40 metres long and 24 metres wide. Squares 11.2 metres wide are marked from the top left corner: three across and two down, each with a sprinkler dot in the middle. A strip is left over at the right and a thin strip at the bottom, each marked with a question mark."><svg viewBox="0 0 320 210" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="40" y="30" width="240" height="144" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><g stroke-dasharray="4 3" stroke-width="1"><line x1="107.2" y1="30" x2="107.2" y2="164.4"/><line x1="174.4" y1="30" x2="174.4" y2="164.4"/><line x1="241.6" y1="30" x2="241.6" y2="174"/><line x1="40" y1="97.2" x2="241.6" y2="97.2"/><line x1="40" y1="164.4" x2="280" y2="164.4"/></g><g fill="currentColor" stroke="none"><circle cx="73.6" cy="63.6" r="4"/><circle cx="140.8" cy="63.6" r="4"/><circle cx="208" cy="63.6" r="4"/><circle cx="73.6" cy="130.8" r="4"/><circle cx="140.8" cy="130.8" r="4"/><circle cx="208" cy="130.8" r="4"/></g><text x="260" y="108" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="140" y="196" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="160" y="20" text-anchor="middle" fill="currentColor" stroke="none">40 m</text><text x="28" y="106" text-anchor="end" fill="currentColor" stroke="none">24 m</text></svg></figure>

```step
stage: predict
insight: "Committing to a number of sprinklers shows who rounds a count down or to the nearest whole number. The algorithm's key detail is that a part-cell still needs a sprinkler, and the oval has two different sides to count."
check:
  type: predict
  q: "One sprinkler covers a square about 11.2 m wide (made up). The junior oval is 40 m by 24 m. How many sprinklers does it need to be fully covered?"
  options:
    - "6 (3 across, 2 down)"
    - "8 (4 across, 2 down)"
    - "9 (3 across, 3 down)"
    - "12 (4 across, 3 down)"
  actual: "12. Across, 40 ÷ 11.2 is about 3.6, so a fourth sprinkler is needed for the last strip. Down, 24 ÷ 11.2 is about 2.1, so a third is needed even though the last strip is thin: 4 × 3 = 12."
```

You have a guess. Now here are the steps that give the answer.

## Run: the cell size

```step
stage: run
insight: "Following the first steps of the algorithm on a real oval shows that after rounding up the cells come out a little smaller than the biggest square, and that is why they stay covered."
check:
  type: number
  q: "Steps 3 to 5 on the junior oval (L = 40, W = 24, r = 8): s = 1.4 × 8 = 11.2, then cols = 40 ÷ 11.2 rounded up. After that, w = 40 ÷ cols. How wide is one cell, in metres?"
  answer: 10
  tolerance: 0
  explain: "40 ÷ 11.2 ≈ 3.57, rounded up to 4 columns, and w = 40 ÷ 4 = 10 m. The cell is narrower than 11.2 m, so its corners are covered."
```

## Investigate: steps, decisions and loops

```step
stage: investigate
insight: "An algorithm for a spatial problem has computation steps, a decision that guards the input, and a loop that repeats one placement for every cell. Zoe's mistake is a wrong formula in the loop: the sprinkler goes on the cell's edge, not its middle."
diagram:
  ref: diagrams.mmd#flow
  alt: "A flowchart of the sprinkler algorithm. Read the length, width and reach. A decision asks whether any of them is zero or less: if yes, say not an oval and stop. If no, set s to 1.4 times r, count the columns and rows rounding up, work out the cell size, place one sprinkler in each cell, then say the count and positions."
  caption: "The sprinkler algorithm"
  role: explain
tasks:
  - check:
      type: sort
      q: "Here is the algorithm, step by step. What does each step do?"
      options: ["Computation", "Decision", "Loop", "Output"]
      items:
        - ["Step 2: If L, W or r is zero or less, say 'not an oval' and stop", "Decision"]
        - ["Step 3: Set s = 1.4 × r", "Computation"]
        - ["Step 4: Set cols = L ÷ s and rows = W ÷ s, each rounded up", "Computation"]
        - ["Step 5: Set w = L ÷ cols and h = W ÷ rows", "Computation"]
        - ["Step 6: For each row and each column, put a sprinkler in the middle of the cell", "Loop", "It repeats the same placing for every cell."]
        - ["Step 7: Say how many sprinklers, and where each one is", "Output"]
      explain: "A computation finds a number. A decision chooses between two paths. A loop repeats a step for every cell. The last step hands the answer back."
  - check:
      type: reasoning
      paper: true
      q: "Run the algorithm by hand on the senior oval: L = 60 m, W = 30 m, r = 8 m (made up). Write each step's result, then how many sprinklers it places."
      steps:
        - ["$s = 1.4 \\times 8 = 11.2$", "step 3"]
        - ["$\\text{cols} = 60 \\div 11.2 \\approx 5.36$, rounded up to $6$", "step 4: a part-cell still needs a sprinkler"]
        - ["$\\text{rows} = 30 \\div 11.2 \\approx 2.68$, rounded up to $3$", "step 4"]
        - ["$w = 60 \\div 6 = 10$ and $h = 30 \\div 3 = 10$", "step 5"]
        - ["$6 \\times 3 = 18$ sprinklers", "step 7: one in each cell"]
      picks:
        - step: 2
          q: "Why is 5.36 rounded up to 6, not down to 5?"
          options:
            - "Five cells would leave a strip at the end with no sprinkler"
            - "Six is always a better number than five"
            - "Rounding down would make the cells too small"
          answer: 0
          feedback:
            - null
            - "It isn't about the number. Think about the last strip of the oval."
            - "Rounding down makes each cell bigger, not smaller, and then the corners are out of reach."
      answer: "18"
      answerLabel: "Sprinklers on the senior oval"
      tolerance: 0
      feedback:
        - ["15", "That's 5 × 3: the 5.36 was rounded down."]
        - ["12", "That's 6 × 2: the 2.68 was rounded down."]
      criteria:
        - "I used 11.2 for s and rounded each count up."
        - "I got the cell size from the rounded counts, not from s."
        - "I multiplied the columns by the rows."
      explain: "s = 11.2, cols = 6, rows = 3, cells 10 m by 10 m, so 6 × 3 = 18 sprinklers."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe tries her algorithm on the junior oval (w = 10, h = 8) and finds the left end of the oval is out of reach of every sprinkler. Click the line where it goes wrong."
      answer: 6
      fault: logic
      misconception: placement-at-cell-edge
      explain: "Line 6: x = i × w puts the first sprinkler at 10 m, the right-hand edge of its cell, so the cell's far corners are over 12 m away. The middle of the first cell is at x = 5, which is (i − 0.5) × w."
    smaller:
      check:
        type: number
        q: "On the junior oval each cell is 10 m wide. How far along the 40 m side is the middle of the first cell, in metres?"
        answer: 5
        tolerance: 0
        explain: "Half a cell is 5 m, so the middle of the first cell is at 5 m."
  - check:
      type: question
      q: "What is the loop in step 6 for?"
      options:
        - "To place a sprinkler in every cell without writing each position out"
        - "To check that the oval has a sensible size"
        - "To round the counts up"
        - "To stop the algorithm when the oval is covered"
      answer: 0
      feedback:
        - null
        - "That's the decision in step 2."
        - "Rounding is a computation in step 4."
        - "The algorithm stops after the last cell by itself."
      explain: "The loop repeats one placing step for every row and column, so the same few words handle an oval with 12 cells or 120."
```

```code diagrams.mmd#flow
flowchart TD
  A[Read L, W and r] --> B{"Any of them zero or less?"}
  B -- yes --> C[Say not an oval, stop]
  B -- no --> D[Set s to 1.4 times r]
  D --> E[Count cols and rows, rounding up]
  E --> F[Work out the cell size]
  F --> G[Place a sprinkler in each cell]
  G --> H[Say the count and positions]
  class G new
```

### Name each step

Say which steps compute, which decide, and which repeat. Here are the steps in full.

1. Read the oval's length L, its width W and the spray's reach r, all in metres.
2. If L, W or r is zero or less, say "not an oval" and stop.
3. Set s = 1.4 × r.
4. Set cols = L ÷ s, rounded up, and rows = W ÷ s, rounded up.
5. Set w = L ÷ cols and h = W ÷ rows.
6. For each row j from 1 to rows, and each column i from 1 to cols, put a sprinkler at x = (i − 0.5) × w and y = (j − 0.5) × h.
7. Say how many sprinklers there are (cols × rows), and where each one is.

### Run it by hand

Here is the whole algorithm run on the junior oval.

```worked
s = 1.4 \times 8 = 11.2 :: Step 3.
\text{cols} = 40 \div 11.2 \approx 3.57 \to 4 :: Step 4: round up, since a part-cell still needs a sprinkler.
\text{rows} = 24 \div 11.2 \approx 2.14 \to 3 :: Step 4 again.
w = 40 \div 4 = 10,\ h = 24 \div 3 = 8 :: Step 5. The cells come out a little smaller than the biggest square, so they stay covered.
x = 5, 15, 25, 35;\ y = 4, 12, 20 :: Step 6: the middle of each cell is $(i - 0.5) \times w$ across and $(j - 0.5) \times h$ down.
4 \times 3 = 12 :: Step 7.
```

Now run it yourself on paper, on the senior oval, with the example beside you. Write each step's result, then pick the reason for rounding up.

### Find the mistake

Check where Zoe's first sprinkler lands, and where its cell's middle is.

### What the loop does

Think about what you'd have to write without a loop.

## Modify: change the oval

```step
stage: modify
insight: "Running the algorithm on an oval with an exact fit, on one that is just over, and with a different spray, to see what changes and what the algorithm does when the answer isn't the fewest."
tasks:
  - check:
      type: number
      q: "Run it on an oval exactly 11.2 m long and 11.2 m wide (r = 8). How many sprinklers does it place?"
      answer: 1
      tolerance: 0
      explain: "11.2 ÷ 11.2 = 1 exactly, so cols = 1 and rows = 1. When the division comes out whole there's nothing to round up."
  - check:
      type: number
      q: "Run it on an oval 11.5 m long and 4 m wide (r = 8). How many sprinklers does it place?"
      answer: 2
      tolerance: 0
      explain: "11.5 ÷ 11.2 ≈ 1.03, which rounds up to 2 columns. 4 ÷ 11.2 rounds up to 1 row. So 2 × 1 = 2 sprinklers."
  - check:
      type: question
      q: "On that 11.5 m by 4 m oval, one sprinkler in the middle is only about 6.1 m from a corner, well inside 8 m. What does that tell you about the algorithm?"
      options:
        - "It always covers the oval, but it doesn't always use the fewest sprinklers"
        - "It left a dry spot, so it is wrong"
        - "It always uses the fewest sprinklers"
        - "It tells you nothing"
      answer: 0
      feedback:
        - null
        - "Two sprinklers cover everything. The trouble is that one would have been enough."
        - "Here one would do and the algorithm placed two."
        - "It shows exactly when the algorithm gives more than it needs."
      explain: "The algorithm meets the 'must be true' rule, so every point is covered, but it doesn't meet the aim of using as few as possible when an oval is just over one cell."
  - check:
      type: question
      q: "The new sprinklers reach 5 m instead of 8 m. Which step of the algorithm has to be rewritten?"
      options:
        - "None: only the input r changes, and step 3 works out the new s"
        - "Step 3 only"
        - "Steps 3 and 4"
        - "All of the steps"
      answer: 0
      feedback:
        - null
        - "Step 3 uses r, so it already adapts."
        - "Steps 3 and 4 use r through s, so they adapt too."
        - "The algorithm is written for any r."
      explain: "The steps use r rather than 8, so changing r changes every later number without rewriting a step."
```

### An exact fit

### Just over one cell

### Enough, but not the fewest

### A different spray

## Practise: run it

```step
stage: practise
insight: "Running the algorithm on new ovals, finding a sprinkler's position, spotting a boundary case, and a review of a cell's half-diagonal."
tasks:
  - check:
      type: number
      q: "Run the algorithm on an oval 50 m long and 20 m wide (r = 8, so s = 11.2). How many sprinklers does it place?"
      answer: 10
      tolerance: 0
      explain: "50 ÷ 11.2 ≈ 4.46 rounds up to 5 columns. 20 ÷ 11.2 ≈ 1.79 rounds up to 2 rows. 5 × 2 = 10."
  - check:
      type: number
      q: "On that oval each cell is 10 m wide. How far along the 50 m side is the middle of the first cell, in metres?"
      answer: 5
      tolerance: 0
      explain: "(1 − 0.5) × 10 = 5 m."
  - check:
      type: question
      q: "Which of these is a boundary case for the algorithm when s = 11.2?"
      options: ["An oval exactly 11.2 m long", "An oval 40 m by 24 m", "An oval 100 m by 50 m", "An oval 30 m by 20 m"]
      answer: 0
      feedback:
        - null
        - "That's an ordinary case."
        - "That's an ordinary case, just a big one."
        - "That's an ordinary case."
      explain: "A boundary case sits right on the edge where the answer changes. At exactly 11.2 m the count is 1, and a hair over gives 2."
  - check:
      type: number
      q: "Review: a cell is 6 m wide and 8 m tall, with the sprinkler in the middle. How far is the sprinkler from a corner, in metres?"
      answer: 5
      tolerance: 0
      explain: "The corner is 3 m across and 4 m along from the middle: √(3² + 4²) = 5 m."
```

### A new oval

### Where the first one goes

### A boundary case

### Review: corner to middle

## Make: the other oval

```step
stage: make
insight: "Returning to the sprinkler job: running the whole algorithm on a new oval, then checking the answer against the success criterion."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "The caretaker's third oval is 36 m long and 20 m wide, with an 8 m spray (made up). Run the algorithm by hand. Write each step's result, then how many sprinklers it places."
      steps:
        - ["$s = 1.4 \\times 8 = 11.2$", "step 3"]
        - ["$\\text{cols} = 36 \\div 11.2 \\approx 3.21$, rounded up to $4$", "step 4"]
        - ["$\\text{rows} = 20 \\div 11.2 \\approx 1.79$, rounded up to $2$", "step 4"]
        - ["$w = 36 \\div 4 = 9$ and $h = 20 \\div 2 = 10$", "step 5"]
        - ["$4 \\times 2 = 8$ sprinklers", "step 7"]
      answer: "8"
      answerLabel: "Sprinklers on the third oval"
      tolerance: 0
      feedback:
        - ["6", "That's 3 × 2: 3.21 was rounded down."]
        - ["7", "Check the counts: 4 columns and 2 rows."]
      criteria:
        - "I rounded each count up."
        - "I found the cell size from the rounded counts."
        - "I finished with the number of sprinklers."
      explain: "s = 11.2, cols = 4, rows = 2, cells 9 m by 10 m, so 4 × 2 = 8 sprinklers."
  - check:
      type: number
      q: "Now test the answer. Each cell on that oval is 9 m by 10 m with its sprinkler in the middle. How far is the sprinkler from a corner of its cell, to 1 decimal place? Is it within 8 m?"
      answer: 6.7
      tolerance: 0.05
      explain: "The corner is 4.5 m across and 5 m along: √(4.5² + 5²) = √45.25 ≈ 6.7 m. That's within 8 m, so every point of the oval is covered."
```

### Run it on the third oval

Write this on paper first, a step at a time.

### Check the criterion

**Also used in**

- **Packing a van.** A loop places one box after another, a decision rejects a box that's too big, and the steps are exact enough for a program.
- **Laying paving or tiles.** The same rounding up and the same cell by cell placing.
- **Testing and refining.** The next job is to test an algorithm on awkward ovals, such as a curved one or one with a tree in the way, find where it fails, and improve it. That's for your class project.
