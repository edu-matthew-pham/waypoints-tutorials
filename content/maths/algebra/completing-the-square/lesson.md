---
order: 21
unit: solve10
node: AC9M10A01 n4
uses: [AC9M10A01 n3]
assumes: [AC9M10A01 n3]
connection: ball-arc
title: Completing the square
summary: "Add the ones that fill the corner of a square, and take away the ones you didn't have: x² + 6x + 5 = (x + 3)² − 4. The bracket and the number read off the lowest (or highest) point."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A ball is thrown, and a formula gives its height. How high does it get, and when, without a table or a graph?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8370
  url: http://127.0.0.1:8370/index.html
  readySelector: "#sl-h"
  layout: full
explainPicture: { ref: square.yml#explain-pic, caption: "$x^2 + 6x + 5$: three $x$-tiles down each side, a corner that needs 9 ones, and only 5 to put in it, so 4 are taken away: $(x + 3)^2 - 4$." }
explainClip:
  query: { code: "@square.yml#explain", fresh: 1, id: explain }
  caption: "Fill the corner, then take away what you didn't have"
  say: "Fill the corner to make a square, then take away what you didn't have."
  clip:
    - caption: { text: "x² + 6x + 9: the 9 ones fill the corner, so it's a perfect square, (x + 3)².", say: "Nine ones fill the corner: a perfect square, x plus three, squared." }
    - wait: 900
    - expect: { selector: "#tsum", contains: "(x + 3)²" }
    - caption: { text: "Take 4 ones away: only 5 ones, so 4 are missing from the corner.", say: "Take four ones away: five are left, so four are missing." }
    - click: Make c smaller
    - click: Make c smaller
    - click: Make c smaller
    - click: Make c smaller
    - expect: { selector: "#tsum", contains: "(x + 3)² − 4" }
    - wait: 1400
---
A ball is thrown and its height after $t$ seconds is $h = 5 + 6t - t^2$ metres. (The formula is made up for this lesson, and leaves out air resistance.) You could draw a graph or fill in a table to find the highest point. There is a faster way, and it starts with a square.

<figure class="situation" role="img" aria-label="A ball thrown from the ground on the left follows an arch up and down to the right. The formula h = 5 + 6t − t² is written above the arch. A dashed line marks the top of the arch, labelled with a question mark: highest point."><svg viewBox="0 0 420 210" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M20 185h380" stroke-width="1"/><path d="M40 175 Q 210 -10 380 175" stroke="#0F6E56" stroke-width="2"/><circle cx="40" cy="175" r="7" fill="#1D9E75" stroke="#0F6E56"/><path d="M210 82h110" stroke-dasharray="5 4" stroke-width="1"/><text x="330" y="87" fill="currentColor" stroke="none">highest point?</text><text x="210" y="22" text-anchor="middle" fill="currentColor" stroke="none">h = 5 + 6t − t²</text><text x="210" y="205" text-anchor="middle" fill="currentColor" stroke="none">t seconds</text></svg></figure>

## Predict: the missing corner

```step
stage: predict
insight: "Committing to how many ones fill the corner shows who halves the x-tiles and squares the half (3 × 3 = 9) and who adds, copies or doubles."
check:
  type: predict
  q: "Take a square $x$ by $x$. Add 6 more $x$-tiles: 3 down the right side and 3 along the bottom. How many 1-tiles fill the corner so the whole thing is one big square?"
  options:
    - "$9$"
    - "$6$"
    - "$3$"
    - "$12$"
  actual: "9. The corner is 3 by 3, so it takes 3 × 3 = 9 ones. 6 is the number of x-tiles, 3 is only one side of the corner, and 12 is double the six."
```

<figure class="situation" role="img" aria-label="A big square x by x. Along its right side is a strip 3 wide and along its bottom a strip 3 high. In the bottom right corner where the strips meet there is an empty dashed square with a question mark, for the ones that would fill it."><svg viewBox="0 0 360 290" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="50" y="30" width="170" height="170" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1.4"/><text x="135" y="122" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">x²</text><rect x="220" y="30" width="45" height="170" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1"/><rect x="50" y="200" width="170" height="45" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1"/><rect x="220" y="200" width="45" height="45" stroke-dasharray="5 4" stroke-width="1.4"/><text x="242" y="230" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">?</text><text x="135" y="20" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="242" y="20" text-anchor="middle" fill="currentColor" stroke="none">3</text><text x="285" y="120" fill="currentColor" stroke="none">3 x-tiles</text><text x="135" y="266" text-anchor="middle" fill="currentColor" stroke="none">3 x-tiles along the bottom</text></svg></figure>

Make a guess, then fill the corner on the board.

## Run: fill the corner

```step
stage: run
insight: "With the corner full, x² + bx + c is a perfect square. With fewer ones than the corner needs, some have to be taken away, and that leftover is the number after the bracket."
try: { playground: board, starter: "square.yml#run", height: 640 }
check: { type: board, text: "The board starts with 9 ones, a perfect square. Take ones away until you have $c = 5$. How many are missing from the corner? Was your prediction right?", when: "h = 3 and c = 5" }
```

$h$ is how many $x$-tiles go down each side, so the board has $2h$ of them. The corner needs $h \times h$ ones, and $c$ is how many you have.

## Investigate: the bracket and the number

```step
stage: investigate
insight: "Completing the square is: halve the x number, square the half to fill the corner, then take away whatever you didn't have. Rin copies the c without taking away the corner, so her bracket gives 16 too many."
tasks:
  - check:
      type: number
      q: "Write $x^2 + 10x + 7$ as $(x + 5)^2 + k$. What is $k$?"
      answer: -18
      feedback:
        - [7, "7 is the ones you started with. The bracket (x + 5)² already has a corner of 25, so work out how far 7 is from 25."]
        - [18, "The 7 is 18 short of the 25 the corner needs, so it's negative: take 18 away."]
        - [-25, "25 is the corner. The ones you have are 7, so k is 7 − 25."]
      explain: "Half of 10 is 5, and the corner needs 5 × 5 = 25. You have 7, so k = 7 − 25 = −18: x² + 10x + 7 = (x + 5)² − 18."
  - check:
      type: bug
      code: "working.txt#rin"
      text: "Rin writes $x^2 + 8x + 3$ in the form $(x + 4)^2 + k$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: completing-square-corner
      explain: "Line 3: Rin copied the 3 after the bracket. But (x + 4)² already has a corner of 16, so she needs 3 − 16 = −13. Her check on line 4 is the clue: 3 and 19 don't match."
  - check:
      type: question
      q: "What is the lowest value of $(x + 3)^2 - 4$, and when does it happen?"
      options: ["−4, when $x = -3$", "−4, when $x = 3$", "4, when $x = -3$", "0, when $x = -3$"]
      answer: 0
      feedback: [null, "x = 3 gives (3 + 3)² − 4 = 32. The bracket is zero when x + 3 = 0.", "The −4 is taken off the square, so the lowest value is below zero.", "The bracket is 0 there, but you still take off 4."]
      explain: "A number squared is never below 0, and it is 0 when x + 3 = 0, which is x = −3. There the whole thing is 0 − 4 = −4. So the lowest point of y = (x + 3)² − 4 is (−3, −4)."
```

### Fill the corner

Here's one worked out, piece by piece.

```worked
x^2 + 6x + 5 :: One x², 6 x-tiles and 5 ones.
6 \div 2 = 3 :: Half the x-tiles go down each side: 3 and 3.
3 \times 3 = 9 :: The corner is 3 by 3, so it needs 9 ones.
x^2 + 6x + 9 = (x + 3)^2 :: With 9 ones it is a perfect square.
5 - 9 = -4 :: We only have 5, so 4 are missing: take 4 away.
x^2 + 6x + 5 = (x + 3)^2 - 4 :: The completed square.
```

Now try one on paper, piece by piece like the example: $x^2 + 10x + 7$. Then type $k$.

### Find the mistake

Read Rin's working. Her check is a clue.

### The lowest point

On the board, set $h = 3$ and $c = 5$ and look at the written form and the lowest point.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: using the form to place the lowest point, a perfect square, a negative x number, an odd x number and reading the point off a given form."
try: { playground: board, starter: "square.yml#vary", height: 640 }
tasks:
  - starter: "square.yml#vary"
    hint: ["The bracket is (x + h), so the lowest point has u = −h. For u = −2, set h to 2.", "The corner needs h × h = 4 ones. The lowest point is at 1, so you need 1 more than the corner."]
    check: { type: board, text: "Make the lowest point of $y = x^2 + bx + c$ be $(-2, 1)$.", when: "u = -2 and v = 1", explain: "h = 2 gives the bracket (x + 2)² and u = −2. The corner takes 4 ones and the point is at 1, so c = 5: x² + 4x + 5 = (x + 2)² + 1." }
    smaller:
      check: { type: number, q: "If the bracket is $(x + 2)^2$, how many ones does the corner need?", answer: 4, explain: "2 × 2 = 4 ones." }
  - starter: "square.yml#vary"
    hint: ["8 x-tiles means 4 down each side.", "The corner needs 4 × 4 ones. What leftover do you want?"]
    check: { type: board, text: "Edge case: with 8 $x$-tiles, make a perfect square, so nothing is left over or missing.", when: "h = 4 and k = 0", explain: "h = 4, so the corner needs 16 ones. With c = 16 nothing is left: x² + 8x + 16 = (x + 4)², and its lowest point is (−4, 0)." }
  - check:
      type: number
      q: "Write $x^2 - 8x + 20$ as $(x - 4)^2 + k$. What is $k$?"
      answer: 4
      feedback:
        - [36, "The corner (−4) × (−4) is +16, and it is already in the bracket. Take it away from 20."]
        - [-4, "20 is more than the 16 the corner needs, so 4 are left over: k is positive."]
        - [20, "The bracket (x − 4)² already has a corner of 16. Take it away from 20."]
      explain: "Half of −8 is −4, and the corner is (−4) × (−4) = 16. You have 20, so 4 are left over: x² − 8x + 20 = (x − 4)² + 4."
  - check:
      type: number
      q: "Edge case: an odd number of $x$-tiles. $x^2 + 5x + 1 = (x + 2.5)^2 + k$. What is $k$? (The board only does even numbers of $x$-tiles, so do this one on paper.)"
      answer: -5.25
      tolerance: 0.001
      feedback:
        - [-1.5, "The corner is 2.5 × 2.5, not 2.5."]
        - [7.25, "You have 1 one, and the corner needs 6.25. You are short, so it's negative."]
      explain: "Half of 5 is 2.5, and the corner needs 2.5 × 2.5 = 6.25. You have 1, so k = 1 − 6.25 = −5.25."
    smaller:
      check: { type: number, q: "Just the corner: what is $2.5 \\times 2.5$?", answer: 6.25, tolerance: 0.001, explain: "2.5 × 2.5 = 6.25." }
  - check:
      type: question
      q: "What is the lowest point of $y = x^2 - 6x + 4$?"
      options: ["$(3, -5)$", "$(-3, -5)$", "$(3, 5)$", "$(-3, 4)$"]
      answer: 0
      feedback: [null, "The bracket is (x − 3)², and it is zero when x = 3, not −3.", "4 − 9 is −5, not +5.", "The 4 is only the number you started with. Take the corner away: 4 − 9."]
      explain: "x² − 6x + 4 = (x − 3)² − 5. The square is zero when x = 3, so the lowest point is (3, −5)."
```

### Move the lowest point

### A perfect square

### A negative x number

### An odd number of x

### Read the point

## Practise: complete and read

```step
stage: practise
insight: "Completing the square for a plus and a minus, writing the form, and reading the lowest point, with the review running the move backwards."
tasks:
  - check:
      type: number
      q: "$x^2 + 12x + 20 = (x + 6)^2 + k$. What is $k$?"
      answer: -16
      feedback:
        - [20, "The bracket (x + 6)² already has a corner of 36."]
        - [16, "You are short of the 36 the corner needs, so k is negative."]
      explain: "Half of 12 is 6, and the corner needs 36. 20 − 36 = −16."
  - check:
      type: number
      q: "$x^2 - 10x + 3 = (x - 5)^2 + k$. What is $k$?"
      answer: -22
      feedback:
        - [28, "The corner is (−5) × (−5) = +25, and it is already in the bracket: 3 − 25."]
        - [-2, "3 − 5 is not it. The corner is 5 × 5."]
      explain: "Half of −10 is −5, the corner is 25, and 3 − 25 = −22."
    smaller:
      check: { type: number, q: "Just the corner: what is $(-5) \\times (-5)$?", answer: 25, explain: "A negative times a negative is positive: 25." }
  - check:
      type: question
      q: "Which is $x^2 + 4x - 1$ with the square completed?"
      options: ["$(x + 2)^2 - 5$", "$(x + 2)^2 - 1$", "$(x + 4)^2 - 17$", "$(x + 2)^2 + 3$"]
      answer: 0
      feedback: [null, "The −1 has to lose the corner of 4: −1 − 4 = −5.", "Half of 4 is 2, not 4.", "−1 + 4 is not it: the 4 in the corner was never there, so take it away."]
      explain: "Half of 4 is 2, the corner is 4, and −1 − 4 = −5."
  - check:
      type: question
      q: "What is the lowest point of $y = x^2 + 8x + 19$?"
      options: ["$(-4, 3)$", "$(4, 3)$", "$(-4, 19)$", "$(-4, -3)$"]
      answer: 0
      feedback: [null, "(x + 4)² is zero when x = −4.", "19 is not the lowest value: the square part has a corner of 16 in it.", "19 − 16 is +3."]
      explain: "x² + 8x + 19 = (x + 4)² + 3. The square is zero at x = −4, so the lowest point is (−4, 3)."
  - check:
      type: answer
      q: "Review: expand and simplify $(x - 4)^2 + 6$."
      answer: "x^2 - 8x + 22"
      form: expanded
      feedback:
        - ["x^2 + 22", "(x − 4)² has two strips: expand it as (x − 4)(x − 4)."]
        - ["x^2 - 8x + 10", "The corner is (−4) × (−4) = +16, then add 6."]
      explain: "(x − 4)² = x² − 8x + 16. Add 6: x² − 8x + 22. This is completing the square run backwards."
```

### A plus

### A minus

### Write the form

### Read the point

### Review

Run the move backwards, from Special products.

## Make: how high does the ball get?

```step
stage: make
insight: "Back to the ball: take out the minus so t² is positive, complete the square, and put the minus back. A square is never below zero, so the biggest height is when the bracket is zero."
tasks:
  - hint: ["Take a minus out: −(t² − 6t − 5).", "Half of −6 is −3. The corner is 9. Then −5 − 9."]
    check:
      type: reasoning
      paper: true
      q: "The ball's height is $h = 5 + 6t - t^2$. Write it as a number minus a square, then say how high the ball gets and when."
      steps:
        - ["$h = -(t^2 - 6t - 5)$", "take out a minus so that t² is positive"]
        - ["$t^2 - 6t - 5 = (t - 3)^2 - 14$", "half of −6 is −3, the corner is 9, and −5 − 9 = −14"]
        - ["$h = 14 - (t - 3)^2$", "put the minus back in front"]
        - ["$h$ is biggest when $(t - 3)^2 = 0$, at $t = 3$", "a square is never below zero, so the most we can take off 14 is nothing"]
      picks:
        - step: 3
          q: "Why is 14 the highest the ball gets?"
          options: ["$(t - 3)^2$ is never below 0, and it is taken from 14", "14 is the biggest number in the formula", "The ball is thrown at 14 m/s"]
          answer: 0
          feedback: [null, "That says nothing about why the ball can't go higher. The reason comes from the square part.", "The formula does not say how fast the ball is thrown."]
      answer: "14"
      answerLabel: "Highest height (m)"
      feedback:
        - ["-14", "That's k for t² − 6t − 5. The minus in front turns it round: the height is 14 − (t − 3)²."]
        - ["3", "That's when it happens (3 seconds), not how high."]
        - ["5", "5 m is where the ball starts, at t = 0."]
      criteria:
        - "I took a minus out so t² was positive."
        - "I halved −6, found a corner of 9 and took it away from −5."
        - "I put the minus back and said the square is never below zero."
      explain: "h = 14 − (t − 3)². The square is never below 0 and is 0 when t = 3, so the ball is highest at 14 m, 3 seconds after the throw."
  - check:
      type: number
      q: "Check the form: put $t = 0$ into $14 - (t - 3)^2$. What do you get? Does it match $5 + 6t - t^2$ at $t = 0$?"
      answer: 5
      feedback:
        - [14, "(0 − 3)² is 9, not 0. Take it from 14."]
      explain: "14 − (−3)² = 14 − 9 = 5, and 5 + 0 − 0 = 5. ✓"
```

### The ball

Do this one on paper first, then type your answer.

### A check

**Also used in**

- **Any bowl or hill formula.** A profit that rises and falls, or the area of a pen with a fixed fence: the bracket squared gives the best value at a glance.
- **Solving quadratics.** Run the move backwards: $(x + 3)^2 = 4$ is a quadratic you can solve by square roots.
- **Next lesson.** Solving by reshaping: moving everything to one side, factorising, and rejecting a solution that doesn't fit.
