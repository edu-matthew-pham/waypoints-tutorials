---
order: 15
unit: lines9
node: AC9M9A03 n3
uses: [AC9M9A03 n1, AC9M8M06 n1]
assumes: [AC9M9A03 n1, AC9M8M06 n1]
connection: crow-flies
title: Distance between two points
summary: "The straight-line distance between two points is the hypotenuse of a right-angled triangle whose sides are the across and up differences."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A rescue helicopter doesn't follow the roads. How far does it fly, straight from base to the farm?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8362
  url: http://127.0.0.1:8362/index.html
  readySelector: "#board"
  layout: full
---
On a map grid, two places are some way across and some way up from each other. The straight-line distance is the third side of a right-angled triangle.

## Predict: how far is the flight?

```step
stage: predict
insight: "Committing to a distance for an across and up journey shows who adds the two distances, as if the helicopter flew along the grid lines."
check:
  type: predict
  q: "A rescue helicopter flies straight from its base to a farm. On the map grid the farm is 12 km east and 5 km north of the base. About how far is the flight?"
  options:
    - "13 km"
    - "17 km"
    - "7 km"
    - "60 km"
  actual: "13 km. The flight is the long side of a right-angled triangle with sides 12 and 5: 12² + 5² = 144 + 25 = 169, and √169 = 13. Going 12 east and then 5 north would be 17 km, but the helicopter takes the shortcut."
```

<figure class="situation" role="img" aria-label="A map grid. The base is at the bottom left and the farm is 12 squares east and 5 squares north. A dashed line goes east, then north. A solid line goes straight from the base to the farm."><svg viewBox="0 0 320 130" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-opacity="0.2"><path d="M20 110 H300 M20 90 H300 M20 70 H300 M20 50 H300 M20 30 H300 M20 30 V110 M60 30 V110 M100 30 V110 M140 30 V110 M180 30 V110 M220 30 V110 M260 30 V110 M300 30 V110"/></g><path d="M20 110 H260 V30" stroke-dasharray="5 4"/><path d="M20 110 L260 30" stroke-width="3"/><circle cx="20" cy="110" r="5" fill="currentColor"/><circle cx="260" cy="30" r="5" fill="currentColor"/><text x="26" y="104" fill="currentColor" stroke="none">base</text><text x="226" y="24" fill="currentColor" stroke="none">farm</text><text x="130" y="124" fill="currentColor" stroke="none">12 km east</text><text x="266" y="75" fill="currentColor" stroke="none">5 km north</text></svg></figure>

The helicopter doesn't follow the roads. How far does it go?

## Run: the triangle under the flight

```step
stage: run
insight: "The dashed across and up sides make a right-angled triangle, with the flight as its longest side, so Pythagoras gives the distance."
try: { playground: board, starter: "dist.yml#run", height: 560 }
check: { type: board, text: "Drag the farm $B$ to 12 across and 5 up from the base. What are the two short sides of the triangle? Was your prediction right?", when: "h = 12 and v = 5" }
```

The base $A$ is at $(0, 0)$. The dashed sides show how far across and how far up.

## Investigate: Pythagoras on the grid

```step
stage: investigate
insight: "The distance is the square root of (across squared plus up squared): the two short sides are squared before they are added, never just added."
tasks:
  - check:
      type: number
      q: "Find the distance between $(1, 2)$ and $(7, 10)$."
      answer: 10
      explain: "Across 7 − 1 = 6, up 10 − 2 = 8. 6² + 8² = 36 + 64 = 100. √100 = 10."
    smaller:
      check: { type: "number", q: "From $(1, 2)$ to $(7, 10)$: what is $6^2 + 8^2$?", answer: 100, explain: "36 + 64 = 100." }
  - check:
      type: question
      q: "A point is 4 to the left of another and 3 up. The across difference is $-4$. What is $(-4)^2$?"
      options: ["16", "−16", "−8", "8"]
      answer: 0
      feedback: [null, "A negative times a negative is positive.", "That's −4 × 2, not −4 × −4.", "That's 4 × 2."]
      explain: "(−4) × (−4) = 16. The square is never negative, so left or right makes no difference to the distance."
  - check:
      type: bug
      code: "working.txt#lin"
      text: "Lin finds the distance between $(1, 5)$ and $(4, 1)$. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: distance-add-differences
      explain: "Line 4: she added the sides, 3 + 4 = 7. The distance is the longest side of the triangle: √(3² + 4²) = √25 = 5."
  - check:
      type: number
      q: "Find the distance between $(0, 0)$ and $(3, 5)$ to 2 decimal places."
      answer: 5.83
      tolerance: 0.01
      explain: "3² + 5² = 9 + 25 = 34. √34 ≈ 5.83."
```

### Across and up

Here's finding the distance between two points.

```worked
A(2, 1),\; B(8, 9) :: The two points.
\text{across} = 8 - 2 = 6,\; \text{up} = 9 - 1 = 8 :: The short sides.
d^2 = 6^2 + 8^2 = 36 + 64 = 100 :: Pythagoras: square and add.
d = \sqrt{100} = 10 :: The long side.
```

Now try one on paper: $(1, 3)$ and $(9, 18)$. Find the across, the up and the distance, then type the distance.

### Left and right

### Find the mistake

Read Lin's working. Which line adds the wrong thing?

### Not a whole number

## Modify: change the flight

```step
stage: modify
insight: "Moving the farm to land on whole-number distances, then finding more than one answer to the same distance."
try: { playground: board, starter: "dist.yml#vary", height: 560 }
tasks:
  - hint: ["Try across 6 and up 8.", "6² + 8² = 100."]
    check: { type: board, text: "Move $B$ so the flight is exactly 10 km.", when: "d = 10" }
  - hint: ["3² + 4² = 25.", "There are several places that work."]
    check: { type: board, text: "Find a point $B$ that is exactly 5 km from the base. Then find a different one.", when: "d = 5" }
  - hint: ["Put B straight above A.", "What is the across difference?"]
    check: { type: question, q: "Edge case: $B$ is straight above $A$, 7 km up. How far is the flight?", options: ["7 km", "0 km", "√7 km", "14 km"], answer: 0, feedback: [null, "The up difference is 7, so it can't be 0.", "That's the square root of 7, not 49.", "7 isn't doubled."], explain: "Across 0, up 7: √(0² + 7²) = 7." }
```

### Ten

### Five

### Straight up

## Practise: find the distance

```step
stage: practise
insight: "The same steps for different points, including exact answers and rounded ones."
tasks:
  - check:
      type: number
      q: "Find the distance between $(0, 0)$ and $(5, 12)$."
      answer: 13
      explain: "5² + 12² = 25 + 144 = 169. √169 = 13."
  - check:
      type: number
      q: "Find the distance between $(-2, 1)$ and $(4, 9)$."
      answer: 10
      explain: "Across 4 − (−2) = 6, up 9 − 1 = 8. 36 + 64 = 100. √100 = 10."
    smaller:
      check: { type: "number", q: "How far across is it from $x = -2$ to $x = 4$?", answer: 6, explain: "4 − (−2) = 6." }
  - check:
      type: number
      q: "A drone flies from $(1, 1)$ to $(4, 6)$ on a map grid in km. How far is that, to 1 decimal place?"
      answer: 5.8
      tolerance: 0.05
      explain: "Across 3, up 5: 9 + 25 = 34. √34 ≈ 5.8 km."
  - check:
      type: question
      q: "Review: a line goes through $(0, 3)$ and $(4, 11)$. What is its gradient?"
      options: ["2", "1/2", "8", "4"]
      answer: 0
      feedback: [null, "That's run over rise.", "8 is the rise; divide by the run, 4.", "4 is the run."]
      explain: "Rise 8, run 4: 8 ÷ 4 = 2."
```

### Whole number

### Negative coordinates

### A drone

### Review

From the first lesson of this unit: rise over run.

## Make: back to the helicopter

```step
stage: make
insight: "Returning to the helicopter: find a new straight-line distance and say what it means for the flight."
tasks:
  - hint: ["Find the across and the up first.", "Then square, add and square root."]
    check:
      type: reasoning
      paper: true
      q: "A second farm is 9 km east and 12 km north of the base. How far is the flight there, in km?"
      steps:
        - ["$9^2 + 12^2 = 81 + 144$", "square the across and the up, then add"]
        - ["$= 225$", "the sum of the squares"]
        - ["$\\sqrt{225} = 15$", "the flight is 15 km"]
      answer: "15"
      answerLabel: "Distance (km)"
      tolerance: 0.01
      feedback:
        - ["21", "That adds 9 and 12. Square them first."]
        - ["225", "That's the squares added: take the square root."]
      criteria:
        - "I found the across and up differences first."
        - "I squared both before adding."
        - "I took the square root at the end."
      explain: "9² + 12² = 225 and √225 = 15 km."
  - check:
      type: question
      q: "The helicopter flies there and back. How far is the round trip?"
      options: ["30 km", "15 km", "21 km", "42 km"]
      answer: 0
      feedback: [null, "That's one way.", "That's 9 + 12.", "That's 21 doubled."]
      explain: "15 km each way is 30 km."
```

### How far?

Back to the helicopter. Work it out on paper first, then type your answer.

### Round trip

The base, the farms and the distances here are made up for the task.

**Also used in**

- **Maps and apps.** A map app's "straight-line distance" tool uses the same triangle.
- **Games.** A game works out how far two characters are apart from their coordinates.
- **Next lesson.** The midpoint: the place halfway between two points.
