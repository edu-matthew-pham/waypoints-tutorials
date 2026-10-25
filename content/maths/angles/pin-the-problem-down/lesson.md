---
order: 33
unit: algorithms10
node: AC9M10SP03 n1
uses: [AC9M9SP03 n1, AC9M8M06 n2]
connection: sprinkler-cover
title: Pin the problem down
summary: "Before an algorithm can solve a spatial problem, the problem has to be exact: what goes in, what comes out, what counts as done, and what you're assuming. Then split it into smaller problems. The sprinkler job shows how."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "\"Cover the oval with as few sprinklers as you can.\" Is that enough for someone to start designing, or is something missing?"
---
The school is putting new sprinklers on the junior oval, and the caretaker's note says to cover it with as few as you can. Hand that note to two people and you'd probably get two different layouts, and an argument about whose one counts. Before anyone writes steps for a machine, the job has to be **pinned down**: what goes in, what has to come out, and what counts as done. The sizes in this lesson are made up, and we'll treat the oval as a rectangle to begin with, which is itself a choice we'll write down. To warm up, have a guess about one sprinkler on a square patch of grass.

## Predict: one sprinkler, one square

<figure class="situation" role="img" aria-label="A square lawn 16 metres on each side with a sprinkler at its middle. A circle with a radius of 8 metres is drawn round the sprinkler and just touches the middle of each side. A question mark sits in each of the four corners, outside the circle."><svg viewBox="0 0 300 230" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="70" y="20" width="160" height="160" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><circle cx="150" cy="100" r="80" fill="#378ADD" fill-opacity="0.22" stroke="#185FA5" stroke-width="1.4"/><circle cx="150" cy="100" r="4" fill="currentColor" stroke="none"/><line x1="150" y1="100" x2="230" y2="100" stroke-dasharray="4 3"/><text x="190" y="94" fill="currentColor" stroke="none">8 m</text><text x="150" y="204" text-anchor="middle" fill="currentColor" stroke="none">16 m</text><text x="80" y="40" fill="currentColor" stroke="none" font-size="18">?</text><text x="208" y="40" fill="currentColor" stroke="none" font-size="18">?</text><text x="80" y="170" fill="currentColor" stroke="none" font-size="18">?</text><text x="208" y="170" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

```step
stage: predict
insight: "Committing to whether the circle reaches the whole square shows who thinks reaching the sides means reaching everything. The corners are the furthest points, and that fact is what the first sub-problem is built on."
check:
  type: predict
  q: "A sprinkler's spray reaches 8 m in every direction (made up). It sits in the middle of a square patch 16 m on each side. Does the spray reach all of the patch?"
  options:
    - "Yes: it reaches the middle of every side, so it reaches everything inside"
    - "No: the four corners are out of reach"
    - "No: the middle of each side is out of reach"
  actual: "No. The middle of each side is exactly 8 m away, but a corner is about 11.3 m from the middle, so the four corners stay dry."
```

You have a guess. Let's see how far a corner really is.

## Run: the furthest point

```step
stage: run
insight: "Working out how far the corner is turns the picture into a number. The corner is the furthest point of the square from the sprinkler, so it is the one that decides whether the square is covered."
check:
  type: number
  q: "A square cell is 10 m on each side (made up) with the sprinkler in the middle. How far is the sprinkler from a corner, to 2 decimal places? Pythagoras gives it: the corner is 5 m across and 5 m along from the middle."
  answer: 7.07
  tolerance: 0.05
  explain: "√(5² + 5²) = √50 ≈ 7.07 m. So a sprinkler with an 8 m spray covers this cell, with a little to spare."
```

## Investigate: the parts of a job

```step
stage: investigate
insight: "A pinned-down problem names its inputs, its output, what counts as done, what must hold and what is assumed. Kai's mistake is leaving out the shape, so two different ovals look the same. Splitting the job into smaller problems gives something an algorithm can be written for."
diagram:
  ref: diagrams.mmd#parts
  alt: "The whole job, cover the whole oval, splits into two smaller problems: the biggest square one sprinkler covers, and how many of those squares fit the oval. Both feed into the layout, the count and the positions."
  caption: "Two smaller problems"
  role: explain
tasks:
  - check:
      type: sort
      q: "Here is the caretaker's job, written out. What kind of piece is each line?"
      options: ["Input", "Output", "Must be true", "Aim", "Assumption"]
      items:
        - ["The oval is 40 m long and 24 m wide", "Input"]
        - ["The sprinkler's spray reaches 8 m", "Input"]
        - ["The number of sprinklers and where each one goes", "Output"]
        - ["Every point of the oval is within 8 m of a sprinkler", "Must be true", "A layout that leaves dry spots doesn't count, however few sprinklers it uses."]
        - ["Sprinklers can only stand on the oval", "Must be true"]
        - ["Use as few sprinklers as possible", "Aim", "It only matters once the layout works."]
        - ["The spray is a full circle on flat ground", "Assumption"]
        - ["There is no wind", "Assumption"]
      explain: "Inputs go in and the output comes out. 'Must be true' lines decide whether a layout counts at all. The aim chooses between layouts that count. Assumptions are things we're taking for granted and ought to say out loud."
  - check:
      type: reasoning
      paper: true
      q: "Sprinklers with a spray of 6 m (made up) replace the old ones. How long is the side of the biggest square one sprinkler covers, to 1 decimal place? Write each step down, with a reason."
      steps:
        - ["The corner is the furthest point from the middle of the square", "so the square is covered when its corner is within 6 m"]
        - ["The corner is half a diagonal away: $s \\div \\sqrt{2} = 6$", "half the diagonal of a square with side $s$ is $s \\div \\sqrt{2}$"]
        - ["$s = 6\\sqrt{2} \\approx 8.5$ m", "multiply both sides by $\\sqrt{2}$"]
      answer: "8.5"
      answerLabel: "Side of the biggest square (m)"
      tolerance: 0.05
      feedback:
        - ["12", "That's the width of the circle. The corner is further from the middle than the edge is."]
        - ["6", "That's the radius. The side of the square is longer than the radius."]
      criteria:
        - "I said why the corner is the point to check."
        - "I used the corner's distance, not the edge's."
        - "I gave the side with a unit and rounded at the end."
      explain: "The corner is the furthest point, so s ÷ √2 = 6 and s = 6√2 ≈ 8.5 m."
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai's definition gives the same answer for an oval 10 m by 10 m and one 100 m by 1 m, because both have an area of 100 m². Click the line that makes it unable to tell them apart."
      answer: 2
      fault: logic
      misconception: area-sets-the-count
      explain: "Line 2: the input is only the area, so the shape is lost. The 10 m by 10 m oval needs one sprinkler and the long thin one needs several. (The rule in line 4 is shaky too, since circles leave gaps, but even a perfect rule couldn't tell the two ovals apart from an area alone.)"
  - check:
      type: question
      q: "Which pair of smaller problems, solved in order, would solve the oval job?"
      options:
        - "How big a square one sprinkler covers, then how many of those squares fit the oval"
        - "How much oval one sprinkler waters, then divide the oval's area by it"
        - "Put the first sprinkler anywhere, then add more at random until it looks covered"
        - "How much water the oval needs, then how many sprinklers the tank can feed"
      answer: 0
      feedback:
        - null
        - "That's Kai's idea again. Circles leave gaps, and the shape of the oval matters."
        - "Random placement can't promise that every point is within reach."
        - "That's a different job, about water, not about where the sprinklers go."
      explain: "The first problem is about one sprinkler and its furthest point. The second is about fitting those squares onto the oval. Together they give the layout."
```

```code diagrams.mmd#parts
flowchart TD
  J[Cover the whole oval] --> A[Biggest square one sprinkler covers]
  J --> B[How many squares fit the oval]
  A --> L[Layout: count and positions]
  B --> L
```

### Sort the pieces

Look for the line that decides whether a layout counts at all, and the line that only chooses between layouts that do.

### Pin it down, line by line

Here is the junior oval pinned down. Each line says what kind of piece it is.

```worked
\text{Oval: } L = 40,\ W = 24;\ \text{spray radius } r = 8 :: Inputs, in metres. The oval is treated as a rectangle (an assumption).
\text{Output: the number of sprinklers, and where each goes} :: What the answer has to say.
\text{Done when every point is within } 8\text{ m of a sprinkler} :: The success criterion. 'Covered' has to mean something exact.
s \div \sqrt{2} = 8 :: Smaller problem 1. The corner is the furthest point, half a diagonal from the middle of a square with side $s$.
s = 8\sqrt{2} \approx 11.3 :: One sprinkler covers a square about 11.3 m wide.
40 \div 11.3 \approx 3.5,\ 24 \div 11.3 \approx 2.1 :: Smaller problem 2: how many of those squares each side takes. What to do with the part-squares is for the next lesson.
```

Now try one on paper with the example beside you. Find the side of the biggest square one sprinkler covers when its spray is 6 m, saying why for each line.

### Find the mistake

Read Kai's input line. What does it keep, and what does it throw away?

### Break it into two

Think about which question comes first, and which one needs the answer to the other.

## Modify: change the job

```step
stage: modify
insight: "Changing one piece of the pinned-down problem and seeing which parts move: a new rule, a new radius, and an oval smaller than the biggest square."
tasks:
  - check:
      type: question
      q: "The caretaker adds: 'The cricket pitch strip in the middle can't have a sprinkler on it.' Which part of the pinned-down problem changes?"
      options: ["What must be true: where sprinklers can stand", "The inputs", "The output", "The assumption of no wind"]
      answer: 0
      feedback:
        - null
        - "The oval and the spray haven't changed."
        - "The output is still a count and positions."
        - "Nothing about wind has changed."
      explain: "It's a new rule about where sprinklers can stand, so it belongs with the things that must be true."
  - check:
      type: number
      q: "The spray is now 5 m (made up). How long is the side of the biggest square one sprinkler covers, to 1 decimal place?"
      answer: 7.1
      tolerance: 0.05
      explain: "s = 5√2 ≈ 7.07, so about 7.1 m. Only the input changed; the way of working it out stayed the same."
  - check:
      type: question
      q: "A small garden bed is 9 m by 9 m (made up), and one sprinkler's square is 11.3 m wide. How many sprinklers does the job need?"
      options: ["1", "0", "2", "You can't tell"]
      answer: 0
      feedback:
        - null
        - "Then nothing would be watered."
        - "The whole bed fits inside one square, so one sprinkler reaches all of it."
        - "You can tell: the bed is smaller than one square."
      explain: "A bed smaller than one square still needs a sprinkler, and one is enough. Its furthest corner is only about 6.4 m from the middle."
```

### A new rule

### A smaller spray

### Smaller than one square

## Practise: parts and pieces

```step
stage: practise
insight: "Using the first smaller problem's answer on a bigger oval, choosing the exact success criterion, and a review of Pythagoras."
tasks:
  - check:
      type: number
      q: "The senior oval is 60 m long (made up) and the sprinkler's square is 11.3 m wide. How many squares is the 60 m side, to 1 decimal place?"
      answer: 5.3
      tolerance: 0.05
      explain: "60 ÷ 11.3 ≈ 5.31, so about 5.3 squares."
  - check:
      type: number
      q: "The same oval is 30 m wide. How many squares is the 30 m side, to 1 decimal place?"
      answer: 2.7
      tolerance: 0.06
      explain: "30 ÷ 11.3 ≈ 2.65, so about 2.7 squares."
  - check:
      type: question
      q: "Which of these is an exact success criterion for the sprinkler job?"
      options:
        - "Every point of the oval is within the spray's reach of a sprinkler"
        - "The oval looks green all over"
        - "Most of the oval gets wet"
        - "The sprinklers are spread out evenly"
      answer: 0
      feedback:
        - null
        - "A person could argue about 'looks green'. A machine can't check it."
        - "'Most' isn't a number. Which points may stay dry?"
        - "Even spacing is a way to get there, not the thing you're after."
      explain: "You can test it for any point, and a layout either passes or it doesn't."
  - check:
      type: number
      q: "Review: a rectangle is 6 m by 8 m. How long is its diagonal, in metres?"
      answer: 10
      tolerance: 0
      explain: "√(6² + 8²) = √100 = 10 m."
```

### Squares along the long side

### Squares along the short side

### What counts as covered

### Review: a diagonal

## Make: back to the caretaker's note

```step
stage: make
insight: "Returning to the note: pinning down a new job, then answering the first smaller problem for it, and saying what the original note left out."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "The caretaker's other oval is 30 m long and 20 m wide, with sprinklers whose spray reaches 10 m (made up). Pin the job down in your own words: the inputs, the output, what counts as done, and one assumption. Then find the side of the biggest square one sprinkler covers, to 1 decimal place."
      steps:
        - ["Inputs: $L = 30$ m, $W = 20$ m, $r = 10$ m", "what goes in, with units"]
        - ["Output: how many sprinklers, and where each one goes", "what has to come out"]
        - ["Done when every point of the oval is within 10 m of a sprinkler", "an exact success criterion"]
        - ["Assumption: the oval is a rectangle, the spray a full circle, and there is no wind", "things taken for granted, said out loud"]
        - ["The corner is the furthest point: $s \\div \\sqrt{2} = 10$", "half a diagonal"]
        - ["$s = 10\\sqrt{2} \\approx 14.1$ m", "multiply both sides by $\\sqrt{2}$"]
      answer: "14.1"
      answerLabel: "Side of the biggest square (m)"
      tolerance: 0.05
      feedback:
        - ["20", "That's the width of the circle. The corner is further than the edge."]
        - ["10", "That's the radius. The square is wider than that."]
      criteria:
        - "I listed the inputs, the output, what counts as done and an assumption."
        - "My success criterion could be tested for any point."
        - "I used the corner, not the edge, to find the square."
      explain: "s = 10√2 ≈ 14.1 m. The pinned-down job: inputs 30, 20 and 10, output a count with positions, done when every point is within 10 m of a sprinkler, assuming a rectangle, a full circle and no wind."
  - check:
      type: question
      q: "What did the caretaker's note, 'Cover the oval with as few sprinklers as you can', leave out?"
      options:
        - "The oval's size and shape, the spray's reach, and what 'cover' means"
        - "The price of a sprinkler"
        - "The colour of the sprinklers"
        - "Nothing: it was already exact"
      answer: 0
      feedback:
        - null
        - "Cost might matter later, but a layout can't be designed without the size and reach."
        - "Colour doesn't change the layout."
        - "Two people could follow it and get different layouts, so it wasn't exact."
      explain: "No sizes, no reach and no meaning for 'cover' means no way to check a layout. Once those are written down, an algorithm can be designed."
```

### Pin down another oval

Write this on paper first, a line at a time with its reason.

### The note's gaps

**Also used in**

- **Packing a van.** The inputs are the box sizes and the van's floor, the output is a layout, and done means everything fits.
- **Phone masts.** Each mast reaches a circle, and the job is covering a town, much like the sprinklers.
- **Next lesson.** Writing the steps as an algorithm and running it on two ovals.
