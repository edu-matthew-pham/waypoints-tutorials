---
order: 11
unit: fractions
node: AC9M7N04 n3
uses: [AC9M7N07 n1]      # ordering negatives (Comparing integers)
title: Fractions and decimals on the line
summary: Split each unit into equal parts and count from zero. A negative fraction or decimal counts to the left, so −1.5 sits halfway between −2 and −1.
language: maths
voice: { name: af_heart, speed: 1.1 }
connection: measuring-jug   # data/connections/maths.yml
hook: "A tide of −0.6 m, a share price down 1¼ dollars, a recipe with ¾ of a cup: numbers between the whole numbers, above and below zero."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8164
  url: http://127.0.0.1:8164/index.html
  readySelector: "#kmove-pt"
  layout: full
explainPicture: { ref: line.yml#explain-pic, caption: "Quarters: $-1\\tfrac{1}{4}$ (A), $-\\tfrac{3}{4}$ (B) and $\\tfrac{1}{2}$ (C)." }
explainClip:
  query: { code: "@line.yml#explain", fresh: 1, id: explain }
  caption: "Split each unit, then count from zero"
  say: "Split each unit into equal parts, then count from zero."
  clip:
    - caption: { text: "Each unit is split into 4 quarters. P is 3 quarters right of 0.", say: "Each unit is split into four quarters. P is three quarters right of zero." }
    - wait: 400
    - caption: { text: "Negative three quarters: 3 quarters left of 0.", say: "Negative three quarters is three quarters to the left of zero." }
    - click: Move P left
    - click: Move P left
    - click: Move P left
    - click: Move P left
    - click: Move P left
    - click: Move P left
    - wait: 400
    - caption: { text: "−1 1/4: past −1, and one more quarter left.", say: "Negative one and a quarter: past negative one, and one more quarter left." }
    - click: Move P left
    - click: Move P left
    - expect: { selector: "#status", contains: "−1 1/4" }
    - wait: 1200
---
Between any two whole numbers on a number line there are fractions and decimals: $\tfrac{1}{2}$, $0.3$, $1\tfrac{3}{4}$. Below zero there are negative ones too: $-\tfrac{1}{2}$, $-0.3$, $-1\tfrac{3}{4}$.

So where exactly does each one go, positive or negative, fraction, decimal or mixed numeral?

## Predict: where is −1.5?

<figure class="situation" role="img" aria-label="A number line from minus 4 to 4 with every whole number labelled. A question mark above the line stands for where minus 1.5 goes."><svg viewBox="0 0 400 115" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><line x1="22" y1="80" x2="378" y2="80"/><line x1="30.0" y1="75" x2="30.0" y2="85"/><text x="30.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−4</text><line x1="72.5" y1="75" x2="72.5" y2="85"/><text x="72.5" y="102" text-anchor="middle" fill="currentColor" stroke="none">−3</text><line x1="115.0" y1="75" x2="115.0" y2="85"/><text x="115.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−2</text><line x1="157.5" y1="75" x2="157.5" y2="85"/><text x="157.5" y="102" text-anchor="middle" fill="currentColor" stroke="none">−1</text><line x1="200.0" y1="75" x2="200.0" y2="85"/><text x="200.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">0</text><line x1="242.5" y1="75" x2="242.5" y2="85"/><text x="242.5" y="102" text-anchor="middle" fill="currentColor" stroke="none">1</text><line x1="285.0" y1="75" x2="285.0" y2="85"/><text x="285.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">2</text><line x1="327.5" y1="75" x2="327.5" y2="85"/><text x="327.5" y="102" text-anchor="middle" fill="currentColor" stroke="none">3</text><line x1="370.0" y1="75" x2="370.0" y2="85"/><text x="370.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">4</text><text x="200" y="28" text-anchor="middle" fill="currentColor" stroke="none">−1.5 goes where on this line?</text><text x="200" y="52" text-anchor="middle" fill="currentColor" stroke="none">?</text></svg></figure>

```step
stage: predict
insight: "Committing to a place for −1.5 before using the board tests whether they count the half towards zero or away from it."
check:
  type: predict
  q: "Where does $-1.5$ go on a number line?"
  options:
    - "Halfway between $-2$ and $-1$"
    - "Halfway between $-1$ and $0$"
    - "Halfway between $1$ and $2$"
    - "Just to the left of $-15$"
  actual: "Halfway between −2 and −1. −1.5 is one and a half units below zero: count 1 unit left from 0, then half a unit further left."
```

Think of a temperature of $-1.5$ °C. Is it colder or warmer than $-1$ °C?

## Run: place it on the line

```step
stage: run
insight: "Dragging P to −1.5 and reading where it lands settles the prediction: the half is counted further from zero, to the left."
try: { playground: board, starter: "line.yml#run", height: 420 }
check: { type: board, text: "Put $P$ at $-1.5$. Was your prediction right?", when: "x(P) = -1.5" }
```

Drag $P$ along the line, or pick it under **Move** and use the arrows. It lands on the halves. The board says where it is under the line.

## Investigate: count the parts

```step
stage: investigate
insight: "Split each unit into the denominator's number of parts and count from zero, to the left for a negative. Jo's mistake counts the 0.5 back towards zero."
tasks:
  - check:
      type: answer
      q: "Quick check: write $\\tfrac{3}{4}$ as a decimal."
      answer: "0.75"
      feedback:
        - ["0.34", "3/4 means 3 out of 4 equal parts, not 3 point 4. How many hundredths is a quarter?"]
        - ["3.4", "3/4 is less than 1."]
      explain: "One quarter is 0.25, so three quarters is 0.75."
  - check:
      type: question
      q: "Which is less, $-\\tfrac{3}{4}$ or $-\\tfrac{1}{4}$?"
      options: ["$-\\tfrac{3}{4}$", "$-\\tfrac{1}{4}$"]
      answer: 0
      feedback: [null, "Count quarters left from 0: which is further left?"]
      explain: "−3/4 is three quarters left of 0, further left than −1/4, so it is less."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo places $-1.5$. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: negative-decimal-direction
      explain: "Line 4: −1.5 is 1.5 below zero, so the 0.5 is further below too. From −1, move half a unit left, to halfway between −2 and −1."
```

### Quick check

Converting fractions and decimals, from class.

### Placing −3/4 and −1 1/4

Here is how to place a negative fraction and a negative mixed numeral.

```worked
-\tfrac{3}{4} :: The denominator is 4, so split each unit into 4 equal parts (quarters).
\text{count 3 quarters left from } 0 :: Negative means left of zero.
-\tfrac{3}{4} \text{ is between } -1 \text{ and } 0 :: It is 3 of the 4 quarters from 0 to $-1$.
-1\tfrac{1}{4} = -1 - \tfrac{1}{4} :: A negative mixed numeral is a whole number and a part, both below zero.
\text{count 1 unit left, then 1 quarter further left} :: The quarter is further from zero, not back towards it.
-1\tfrac{1}{4} \text{ is between } -2 \text{ and } -1 :: Just past $-1$, a quarter of the way to $-2$.
```

Then: which is less, $-\tfrac{3}{4}$ or $-\tfrac{1}{4}$?

### Find the mistake

Read Jo's working one line at a time. Which line moves the wrong way?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a negative fraction, a negative mixed numeral, tenths, then a line that does not have zero in the middle, then the edge case of two names for one place."
try: { playground: board, starter: "line.yml#quarters", height: 420 }
tasks:
  - starter: "line.yml#quarters"
    hint: "Each unit is split into 4. Count 1 quarter left from 0."
    check: { type: board, text: "Put $P$ at $-\\tfrac{1}{4}$.", when: "x(P) = -0.25", explain: "One quarter left of zero." }
  - starter: "line.yml#quarters"
    hint: ["Count 1 whole unit left from 0.", "Then 3 more quarters further left."]
    check: { type: board, text: "Put $P$ at $-1\\tfrac{3}{4}$.", when: "x(P) = -1.75", explain: "One unit left of zero, then three quarters further: a quarter short of −2." }
  - starter: "line.yml#tenths"
    hint: "This line is split into tenths. Count 6 tenths left from 0."
    check: { type: board, text: "Put $P$ at $-0.6$.", when: "x(P) = -0.6", explain: "Six tenths left of zero, a bit past halfway to −1." }
  - starter: "line.yml#offset"
    hint: "Zero is not in the middle of this line. Find it first."
    check: { type: board, text: "This line runs from $-2$ to $5$. Put $P$ at $-1\\tfrac{1}{2}$ and $Q$ at $2\\tfrac{1}{2}$.", when: "x(P) = -1.5 and x(Q) = 2.5", explain: "Find zero first, then count: P is 1½ left of 0, Q is 2½ right." }
  - check:
      type: question
      q: "Edge case: where do $-\\tfrac{2}{4}$ and $-0.5$ go?"
      options: ["At the same place: halfway between $-1$ and $0$", "$-\\tfrac{2}{4}$ is further left", "$-0.5$ is further left"]
      answer: 0
      feedback: [null, "Simplify −2/4. Is it the same number as −0.5?", "−0.5 and −2/4 are both one half below zero."]
      explain: "−2/4 = −1/2 = −0.5: two names for one place on the line."
```

### A negative fraction

Each task changes one thing. First: quarters below zero.

### A negative mixed numeral

### Tenths

### Zero is not in the middle

### Two names, one place

## Practise: place and order

```step
stage: practise
insight: "Placing, ordering and comparing a mix of fractions and decimals; the review keeps integer ordering fresh."
tasks:
  - check:
      type: question
      q: "Which list is in order from least to greatest?"
      options: ["$-1\\tfrac{1}{2},\\; -1.2,\\; -\\tfrac{3}{4},\\; 0.5$", "$-\\tfrac{3}{4},\\; -1.2,\\; -1\\tfrac{1}{2},\\; 0.5$", "$-1.2,\\; -1\\tfrac{1}{2},\\; -\\tfrac{3}{4},\\; 0.5$"]
      answer: 0
      feedback: [null, "Which of these is furthest left? −3/4 is closer to zero than −1.2.", "−1 1/2 is −1.5, further left than −1.2."]
      explain: "As decimals: −1.5, −1.2, −0.75, 0.5. Read left to right."
  - check:
      type: question
      q: "Which is greater, $-0.3$ or $-0.25$?"
      options: ["$-0.25$", "$-0.3$"]
      feedback: [null, "Write both in hundredths: −0.30 and −0.25. Which is further left?"]
      answer: 0
      explain: "−0.25 is closer to zero, so it is greater: −0.3 < −0.25."
  - check:
      type: answer
      q: "What number is halfway between $-3$ and $-2$?"
      answer: "-2.5"
      feedback:
        - ["2.5", "Both ends are below zero, so the halfway point is too."]
        - ["-1.5", "That is halfway between −2 and −1. Look between −3 and −2."]
      explain: "−2.5, or −2 1/2."
  - check:
      type: question
      q: "Review: which is less, $-6$ or $-9$?"
      options: ["$-9$", "$-6$"]
      answer: 0
      feedback: [null, "Further left is less. Which is further left?"]
      explain: "−9 < −6: −9 is further left."
```

### In order

### Which is greater?

### Halfway

### Review

## Make: always another number

```step
stage: make
insight: "Finding a number between two close numbers reverses the lesson: from the places back to a number, and shows there is always another one in between."
try: { playground: board, starter: "line.yml#make", height: 420 }
hint: ["This line is from −1 to 0, in steps of 0.05. Find −0.3 and −0.2.", "What number is halfway between them?"]
check: { type: board, text: "Put $P$ at a number between $-0.3$ and $-0.2$.", when: "x(P) > -0.3 and x(P) < -0.2", explain: "−0.25 is halfway: between any two numbers on the line, there is always another." }
```

The line now shows only $-1$ to $0$, in twentieths. Find a number between $-0.3$ and $-0.2$.

Stretch: find a number between $-\tfrac{1}{3}$ and $-\tfrac{1}{4}$. Can you always find another between any two?

## Make: a measuring jug on paper

```step
stage: make
insight: "A scale marked in quarters cannot show a third exactly; the paper task makes them put both on a common scale and compare the gaps."
hint: ["Draw the jug from 1 to 2 and mark the quarters.", "Write 1½, 1⅔ and 1¾ all in twelfths."]
check:
  type: reasoning
  paper: true
  q: "A recipe needs $1\\tfrac{2}{3}$ cups of water. The jug is marked every quarter cup (the recipe is made up for the task). Which mark on the jug is nearest to $1\\tfrac{2}{3}$? Type it as a decimal, in cups."
  steps:
    - ["The marks near it are $1\\tfrac{1}{2} = 1.5$ and $1\\tfrac{3}{4} = 1.75$", "$1\\tfrac{2}{3}$ is about 1.67, between 1.5 and 1.75"]
    - ["In twelfths: $1\\tfrac{6}{12}$, $1\\tfrac{8}{12}$ and $1\\tfrac{9}{12}$", "twelfths are a common size for halves, thirds and quarters"]
    - ["$1\\tfrac{8}{12}$ is 1 twelfth below $1\\tfrac{9}{12}$ and 2 twelfths above $1\\tfrac{6}{12}$", "the nearer mark is the one with the smaller gap"]
    - ["The nearest mark is $1\\tfrac{3}{4}$, which is $1.75$ cups", "pour to the three-quarter mark; it is a little more than the recipe wants"]
  picks:
    - step: 3
      q: "Why is $1.75$ nearer than $1.5$?"
      options:
        - "The gap to 1.75 is 1 twelfth and the gap to 1.5 is 2 twelfths, so 1.75 is closer"
        - "1.75 is a bigger number, so it is always the better choice"
        - "Thirds are always closer to the higher quarter"
      answer: 0
      feedback: [null, "Bigger does not mean nearer. Compare the gaps on the line.", "It depends on the numbers. Here the gaps are 1 twelfth and 2 twelfths."]
  answer: "1.75"
  feedback:
    - ["1.5", "That is the mark below, and it is the farther one: 2 twelfths away, against 1 twelfth."]
    - ["1.67", "The jug has no mark there. Pick the nearest quarter."]
  criteria:
    - "I drew the jug as a number line with the quarter marks on it."
    - "I put 1⅔ between the two marks it sits between."
    - "I compared the two gaps, not just the size of the numbers."
  explain: "1⅔ is 1 8/12. The marks either side are 1 6/12 (2 twelfths away) and 1 9/12 (1 twelfth away), so the nearest mark is 1¾ = 1.75 cups."
```

Do this one in your book, not on the screen. The recipe is made up for the task, but the question is real: a jug marked in quarters cannot show a third exactly, so you place it between the marks and pick the nearer one. Draw the jug as a line, mark the quarters, then place the third.

**Also used in**

- **Kitchens.** Measuring cups and jugs are number lines, marked in halves, quarters or thirds.
- **Thermometers and rulers.** Readings between the marks are placed by counting the parts, the same way, and below zero they count left.
- **Fuel gauges.** An eighth of a tank is a place on a scale, not a count.
