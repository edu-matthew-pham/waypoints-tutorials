---
title: "Write the algorithm"
subtitle: "Angles and shapes · Year 10: algorithms · Lesson 34"
---

# Write the algorithm

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Hand the sprinkler plan to a friend who has never seen the job. Could they follow it step by step and get your answer, with nobody to ask?


:::teacher-note

**In one sentence:** Students turn the pinned-down sprinkler job into numbered steps with a decision and a loop, run the steps by hand on two ovals, and find a bug where a sprinkler is placed on the edge of its cell instead of the middle (AC9M10SP03, node 2).

**Students should be able to say:** I can write the steps of an algorithm exactly enough for a machine. I can say which steps compute, which decide and which repeat. I can run an algorithm by hand on two different inputs.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="An oval drawn as a rectangle, 40 metres long and 24 metres wide. Squares 11.2 metres wide are marked from the top left corner: three across and two down, each with a sprinkler dot in the middle. A strip is left over at the right and a thin strip at the bottom, each marked with a question mark."><svg viewBox="-11.6 0 331.6 210" width="332" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="40" y="30" width="240" height="144" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><g stroke-dasharray="4 3" stroke-width="1"><line x1="107.2" y1="30" x2="107.2" y2="164.4"/><line x1="174.4" y1="30" x2="174.4" y2="164.4"/><line x1="241.6" y1="30" x2="241.6" y2="174"/><line x1="40" y1="97.2" x2="241.6" y2="97.2"/><line x1="40" y1="164.4" x2="280" y2="164.4"/></g><g fill="currentColor" stroke="none"><circle cx="73.6" cy="63.6" r="4"/><circle cx="140.8" cy="63.6" r="4"/><circle cx="208" cy="63.6" r="4"/><circle cx="73.6" cy="130.8" r="4"/><circle cx="140.8" cy="130.8" r="4"/><circle cx="208" cy="130.8" r="4"/></g><text x="260" y="108" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="140" y="196" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="160" y="20" text-anchor="middle" fill="currentColor" stroke="none">40 m</text><text x="28" y="106" text-anchor="end" fill="currentColor" stroke="none">24 m</text></svg></figure>

You have a guess. Now here are the steps that give the answer.

:::keep-together

**One sprinkler covers a square about 11.2 m wide (made up). The junior oval is 40 m by 24 m. How many sprinklers does it need to be fully covered?**

☐ 6 (3 across, 2 down)

☐ 8 (4 across, 2 down)

☐ 9 (3 across, 3 down)

☐ 12 (4 across, 3 down)

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 12. Across, 40 ÷ 11.2 is about 3.6, so a fourth sprinkler is needed for the last strip. Down, 24 ÷ 11.2 is about 2.1, so a third is needed even though the last strip is thin: 4 × 3 = 12.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Steps, decisions and loops


:::keep-together

![A flowchart of the sprinkler algorithm. Read the length, width and reach. A decision asks whether any of them is zero or less: if yes, say not an oval and stop. If no, set s to 1.4 times r, count the columns and rows rounding up, work out the cell size, place one sprinkler in each cell, then say the count and positions.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/write-the-algorithm/step-3.svg?v=b383f2c94824e469)

*The sprinkler algorithm*

:::


:::keep-together

### Name each step

**Here is the algorithm, step by step. What does each step do?**

Groups: Computation, Decision, Loop, Output

- Step 2: If L, W or r is zero or less, say 'not an oval' and stop: {{field-15}}
- Step 3: Set s = 1.4 × r: {{field-15}}
- Step 4: Set cols = L ÷ s and rows = W ÷ s, each rounded up: {{field-15}}
- Step 5: Set w = L ÷ cols and h = W ÷ rows: {{field-15}}
- Step 6: For each row and each column, put a sprinkler in the middle of the cell: {{field-15}}
- Step 7: Say how many sprinklers, and where each one is: {{field-15}}

:::


:::teacher-note

**Answer:** Step 2: If L, W or r is zero or less, say 'not an oval' and stop → Decision; Step 3: Set s = 1.4 × r → Computation; Step 4: Set cols = L ÷ s and rows = W ÷ s, each rounded up → Computation; Step 5: Set w = L ÷ cols and h = W ÷ rows → Computation; Step 6: For each row and each column, put a sprinkler in the middle of the cell → Loop; Step 7: Say how many sprinklers, and where each one is → Output

A computation finds a number. A decision chooses between two paths. A loop repeats a step for every cell. The last step hands the answer back.

:::


:::keep-together

### Run it by hand

Here is the whole algorithm run on the junior oval.

1. $s = 1.4 \times 8 = 11.2$ — Step 3.
2. $\text{cols} = 40 \div 11.2 \approx 3.57 \to 4$ — Step 4: round up, since a part-cell still needs a sprinkler.
3. $\text{rows} = 24 \div 11.2 \approx 2.14 \to 3$ — Step 4 again.
4. $w = 40 \div 4 = 10,\ h = 24 \div 3 = 8$ — Step 5. The cells come out a little smaller than the biggest square, so they stay covered.
5. $x = 5, 15, 25, 35;\ y = 4, 12, 20$ — Step 6: the middle of each cell is $(i - 0.5) \times w$ across and $(j - 0.5) \times h$ down.
6. $4 \times 3 = 12$ — Step 7.

Now run it yourself on paper, on the senior oval, with the example beside you. Write each step's result, then pick the reason for rounding up.

**Run the algorithm by hand on the senior oval: L = 60 m, W = 30 m, r = 8 m (made up). Write each step's result, then how many sprinklers it places.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** $s = 1.4 \times 8 = 11.2$ (step 3); $\text{cols} = 60 \div 11.2 \approx 5.36$, rounded up to $6$ (step 4: a part-cell still needs a sprinkler); $\text{rows} = 30 \div 11.2 \approx 2.68$, rounded up to $3$ (step 4); $w = 60 \div 6 = 10$ and $h = 30 \div 3 = 10$ (step 5); $6 \times 3 = 18$ sprinklers (step 7: one in each cell)

s = 11.2, cols = 6, rows = 3, cells 10 m by 10 m, so 6 × 3 = 18 sprinklers.

:::


:::keep-together

### Find the mistake

**Zoe tries her algorithm on the junior oval (w = 10, h = 8) and finds the left end of the oval is out of reach of every sprinkler. Click the line where it goes wrong.**

```
 1  Read the oval's length L, its width W and the spray's reach r.
 2  Set s = 1.4 × r.
 3  Set cols = L ÷ s, rounded up. Set rows = W ÷ s, rounded up.
 4  Set w = L ÷ cols and h = W ÷ rows.
 5  For each row j from 1 to rows and each column i from 1 to cols:
 6      put a sprinkler at x = i × w and y = j × h.
 7  Say how many sprinklers, and where each one is.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 6

Line 6: x = i × w puts the first sprinkler at 10 m, the right-hand edge of its cell, so the cell's far corners are over 12 m away. The middle of the first cell is at x = 5, which is (i − 0.5) × w.

:::


:::keep-together

### What the loop does

**What is the loop in step 6 for?**

☐ To stop the algorithm when the oval is covered

☐ To round the counts up

☐ To place a sprinkler in every cell without writing each position out

☐ To check that the oval has a sensible size

:::


:::teacher-note

**Answer:** To place a sprinkler in every cell without writing each position out

The loop repeats one placing step for every row and column, so the same few words handle an oval with 12 cells or 120.

:::


:::typical

## Change the oval


**An exact fit.** 

**Just over one cell.** 

**Enough, but not the fewest.** 

**A different spray.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Run it


:::keep-together

### A new oval

**Run the algorithm on an oval 50 m long and 20 m wide (r = 8, so s = 11.2). How many sprinklers does it place?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 10

50 ÷ 11.2 ≈ 4.46 rounds up to 5 columns. 20 ÷ 11.2 ≈ 1.79 rounds up to 2 rows. 5 × 2 = 10.

:::


:::keep-together

### Where the first one goes

**On that oval each cell is 10 m wide. How far along the 50 m side is the middle of the first cell, in metres?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 5

(1 − 0.5) × 10 = 5 m.

:::


:::keep-together

### A boundary case

**Which of these is a boundary case for the algorithm when s = 11.2?**

☐ An oval 40 m by 24 m

☐ An oval 30 m by 20 m

☐ An oval exactly 11.2 m long

☐ An oval 100 m by 50 m

:::


:::teacher-note

**Answer:** An oval exactly 11.2 m long

A boundary case sits right on the edge where the answer changes. At exactly 11.2 m the count is 1, and a hair over gives 2.

:::


:::keep-together

### Review: corner to middle

**Review: a cell is 6 m wide and 8 m tall, with the sprinkler in the middle. How far is the sprinkler from a corner, in metres?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 5

The corner is 3 m across and 4 m along from the middle: √(3² + 4²) = 5 m.

:::


## Make: the other oval


**Run it on the third oval.** Write this on paper first, a step at a time.

**Check the criterion.** **Also used in**

- **Packing a van.** A loop places one box after another, a decision rejects a box that's too big, and the steps are exact enough for a program.
- **Laying paving or tiles.** The same rounding up and the same cell by cell placing.
- **Testing and refining.** The next job is to test an algorithm on awkward ovals, such as a curved one or one with a tree in the way, find where it fails, and improve it. That's for your class project.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A sprinkler reaches 8 m (s = 11.2). Run the algorithm on an oval 25 m long and 14 m wide. How many sprinklers does it place?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 25 ÷ 11.2 ≈ 2.23 rounds up to 3 columns. 14 ÷ 11.2 = 1.25 rounds up to 2 rows. 3 × 2 = 6 sprinklers.

:::

