---
title: "Pin the problem down"
subtitle: "Angles and shapes · Year 10: algorithms · Lesson 33"
---

# Pin the problem down

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** "Cover the oval with as few sprinklers as you can." Is that enough for someone to start designing, or is something missing?


:::teacher-note

**In one sentence:** Students pin down a spatial problem before designing anything: the inputs, the output, what counts as done, what must hold and what is assumed. They split the sprinkler job into two smaller problems and find the biggest square one sprinkler covers (AC9M10SP03, node 1).

**Students should be able to say:** I can write a spatial problem with exact inputs, output and success criterion. I can say what I'm assuming, out loud. I can split a job into two smaller problems that fit together.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="A square lawn 16 metres on each side with a sprinkler at its middle. A circle with a radius of 8 metres is drawn round the sprinkler and just touches the middle of each side. A question mark sits in each of the four corners, outside the circle."><svg viewBox="0 0 300 230" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="70" y="20" width="160" height="160" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><circle cx="150" cy="100" r="80" fill="#378ADD" fill-opacity="0.22" stroke="#185FA5" stroke-width="1.4"/><circle cx="150" cy="100" r="4" fill="currentColor" stroke="none"/><line x1="150" y1="100" x2="230" y2="100" stroke-dasharray="4 3"/><text x="190" y="94" fill="currentColor" stroke="none">8 m</text><text x="150" y="204" text-anchor="middle" fill="currentColor" stroke="none">16 m</text><text x="80" y="40" fill="currentColor" stroke="none" font-size="18">?</text><text x="208" y="40" fill="currentColor" stroke="none" font-size="18">?</text><text x="80" y="170" fill="currentColor" stroke="none" font-size="18">?</text><text x="208" y="170" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

You have a guess. Let's see how far a corner really is.

:::keep-together

**A sprinkler's spray reaches 8 m in every direction (made up). It sits in the middle of a square patch 16 m on each side. Does the spray reach all of the patch?**

☐ No: the middle of each side is out of reach

☐ Yes: it reaches the middle of every side, so it reaches everything inside

☐ No: the four corners are out of reach

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. The middle of each side is exactly 8 m away, but a corner is about 11.3 m from the middle, so the four corners stay dry.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## The parts of a job


:::keep-together

![The whole job, cover the whole oval, splits into two smaller problems: the biggest square one sprinkler covers, and how many of those squares fit the oval. Both feed into the layout, the count and the positions.](https://tutorials.learningwaypoints.com/_pictures/diagrams/maths/angles/pin-the-problem-down/step-3.svg?v=b3f6ac097a4019e0)

*Two smaller problems*

:::


:::keep-together

### Sort the pieces

**Here is the caretaker's job, written out. What kind of piece is each line?**

Groups: Input, Output, Must be true, Aim, Assumption

- The oval is 40 m long and 24 m wide: {{field-15}}
- The sprinkler's spray reaches 8 m: {{field-15}}
- The number of sprinklers and where each one goes: {{field-15}}
- Every point of the oval is within 8 m of a sprinkler: {{field-15}}
- Sprinklers can only stand on the oval: {{field-15}}
- Use as few sprinklers as possible: {{field-15}}
- The spray is a full circle on flat ground: {{field-15}}
- There is no wind: {{field-15}}

:::


:::teacher-note

**Answer:** The oval is 40 m long and 24 m wide → Input; The sprinkler's spray reaches 8 m → Input; The number of sprinklers and where each one goes → Output; Every point of the oval is within 8 m of a sprinkler → Must be true; Sprinklers can only stand on the oval → Must be true; Use as few sprinklers as possible → Aim; The spray is a full circle on flat ground → Assumption; There is no wind → Assumption

Inputs go in and the output comes out. 'Must be true' lines decide whether a layout counts at all. The aim chooses between layouts that count. Assumptions are things we're taking for granted and ought to say out loud.

:::


:::keep-together

### Pin it down, line by line

Here is the junior oval pinned down. Each line says what kind of piece it is.

1. $\text{Oval: } L = 40,\ W = 24;\ \text{spray radius } r = 8$ — Inputs, in metres. The oval is treated as a rectangle (an assumption).
2. $\text{Output: the number of sprinklers, and where each goes}$ — What the answer has to say.
3. $\text{Done when every point is within } 8\text{ m of a sprinkler}$ — The success criterion. 'Covered' has to mean something exact.
4. $s \div \sqrt{2} = 8$ — Smaller problem 1. The corner is the furthest point, half a diagonal from the middle of a square with side $s$.
5. $s = 8\sqrt{2} \approx 11.3$ — One sprinkler covers a square about 11.3 m wide.
6. $40 \div 11.3 \approx 3.5,\ 24 \div 11.3 \approx 2.1$ — Smaller problem 2: how many of those squares each side takes. What to do with the part-squares is for the next lesson.

Now try one on paper with the example beside you. Find the side of the biggest square one sprinkler covers when its spray is 6 m, saying why for each line.

**Sprinklers with a spray of 6 m (made up) replace the old ones. How long is the side of the biggest square one sprinkler covers, to 1 decimal place? Write each step down, with a reason.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** The corner is the furthest point from the middle of the square (so the square is covered when its corner is within 6 m); The corner is half a diagonal away: $s \div \sqrt{2} = 6$ (half the diagonal of a square with side $s$ is $s \div \sqrt{2}$); $s = 6\sqrt{2} \approx 8.5$ m (multiply both sides by $\sqrt{2}$)

The corner is the furthest point, so s ÷ √2 = 6 and s = 6√2 ≈ 8.5 m.

:::


:::keep-together

### Find the mistake

**Kai's definition gives the same answer for an oval 10 m by 10 m and one 100 m by 1 m, because both have an area of 100 m². Click the line that makes it unable to tell them apart.**

```
 1  Kai pins down the oval problem.
 2  Input: the oval's area in square metres, and the sprinkler's radius.
 3  Output: the number of sprinklers.
 4  Rule: sprinklers = oval area ÷ the area of one sprinkler's circle.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: the input is only the area, so the shape is lost. The 10 m by 10 m oval needs one sprinkler and the long thin one needs several. (The rule in line 4 is shaky too, since circles leave gaps, but even a perfect rule couldn't tell the two ovals apart from an area alone.)

:::


:::keep-together

### Break it into two

**Which pair of smaller problems, solved in order, would solve the oval job?**

☐ How big a square one sprinkler covers, then how many of those squares fit the oval

☐ How much oval one sprinkler waters, then divide the oval's area by it

☐ How much water the oval needs, then how many sprinklers the tank can feed

☐ Put the first sprinkler anywhere, then add more at random until it looks covered

:::


:::teacher-note

**Answer:** How big a square one sprinkler covers, then how many of those squares fit the oval

The first problem is about one sprinkler and its furthest point. The second is about fitting those squares onto the oval. Together they give the layout.

:::


:::typical

## Change the job


**A new rule.** 

**A smaller spray.** 

**Smaller than one square.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Parts and pieces


:::keep-together

### Squares along the long side

**The senior oval is 60 m long (made up) and the sprinkler's square is 11.3 m wide. How many squares is the 60 m side, to 1 decimal place?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 5.3

60 ÷ 11.3 ≈ 5.31, so about 5.3 squares.

:::


:::keep-together

### Squares along the short side

**The same oval is 30 m wide. How many squares is the 30 m side, to 1 decimal place?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2.7

30 ÷ 11.3 ≈ 2.65, so about 2.7 squares.

:::


:::keep-together

### What counts as covered

**Which of these is an exact success criterion for the sprinkler job?**

☐ The oval looks green all over

☐ Every point of the oval is within the spray's reach of a sprinkler

☐ The sprinklers are spread out evenly

☐ Most of the oval gets wet

:::


:::teacher-note

**Answer:** Every point of the oval is within the spray's reach of a sprinkler

You can test it for any point, and a layout either passes or it doesn't.

:::


:::keep-together

### Review: a diagonal

**Review: a rectangle is 6 m by 8 m. How long is its diagonal, in metres?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 10

√(6² + 8²) = √100 = 10 m.

:::


## Make: back to the caretaker's note


**Pin down another oval.** Write this on paper first, a line at a time with its reason.

**The note's gaps.** **Also used in**

- **Packing a van.** The inputs are the box sizes and the van's floor, the output is a layout, and done means everything fits.
- **Phone masts.** Each mast reaches a circle, and the job is covering a town, much like the sprinklers.
- **Next lesson.** Writing the steps as an algorithm and running it on two ovals.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A spray reaches 7 m. Write one thing that must be true of a layout, and find the side of the biggest square one sprinkler covers, to 1 decimal place.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Every point of the oval is within 7 m of a sprinkler. The side is 7 × √2 ≈ 9.9 m.

:::

