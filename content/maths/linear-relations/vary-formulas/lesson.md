---
order: 12
unit: rules
node: [AC9M7A06 n1, AC9M7A06 n2]
uses: [AC9M7A01 n2]   # substituting into a formula
title: Changing one thing at a time
summary: "To see what one variable does to a formula, change only that one and hold the rest still, then read the table. The same test works on a box, on distance and on a square."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A scientist testing a plant changes the light, but not the water. How would you test one letter in a formula the same way?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8301
  url: http://127.0.0.1:8301/index.html
  readySelector: "#sl-h"
  layout: full
explainPicture: { ref: formula.yml#explain-pic, caption: "With $l = 2$ and $w = 3$ held still, a taller box (h = 3) has volume $2 \\times 3 \\times 3 = 18$." }
explainClip:
  query: { code: "@formula.yml#explain", fresh: 1, id: explain }
  caption: "Only h changes"
  say: "Hold l and w still. Change only h."
  clip:
    - caption: { text: "l = 2 and w = 3 stay fixed. h = 1 gives V = 6.", say: "L and w stay fixed. H is one, so V is six." }
    - wait: 800
    - caption: { text: "Make h bigger, and V grows by 6 each time.", say: "Make h bigger, and V grows by six each time." }
    - click: Make h bigger
    - click: Make h bigger
    - expect: { selector: "body", contains: "2 × 3 × 3" }
    - wait: 1500
connection: event-budget
---
A **formula** has several variables, such as $V = l \times w \times h$. To find out what one variable does to the output, **vary it systematically**: change that one, keep every other variable the same, and write the results in a table.

## Predict: doubling h

```step
stage: predict
insight: "Committing to what doubling h does to V shows whether they see volume as a product, where doubling one factor doubles the output."
check:
  type: predict
  q: "A box has $l = 2$, $w = 3$ and $h = 2$, so $V = 12$. What is $V$ when $h$ is doubled to 4 and the rest stay the same?"
  options: ["24", "16", "14", "12"]
  actual: "24. V = 2 × 3 × 4 = 24: doubling one factor doubles the product."
```

<figure class="situation" role="img" aria-label="Two boxes. The first has length 2, width 3 and height 2, so V is 12. The second has the same length and width but is twice as tall, height 4. Its volume V is a question mark."><svg viewBox="0 0 420 180" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="30" y="90" width="80" height="40"/><polygon points="30,90 54,66 134,66 110,90"/><polygon points="110,90 134,66 134,106 110,130"/><rect x="250" y="50" width="80" height="80"/><polygon points="250,50 274,26 354,26 330,50"/><polygon points="330,50 354,26 354,106 330,130"/><text x="70" y="148" text-anchor="middle" fill="currentColor" stroke="none">w = 3</text><text x="130" y="60" fill="currentColor" stroke="none">l = 2</text><text x="18" y="115" text-anchor="end" fill="currentColor" stroke="none">h = 2</text><text x="130" y="170" fill="currentColor" stroke="none">V = 12</text><text x="290" y="148" text-anchor="middle" fill="currentColor" stroke="none">w = 3</text><text x="350" y="40" fill="currentColor" stroke="none">l = 2</text><text x="238" y="95" text-anchor="end" fill="currentColor" stroke="none">h = 4</text><text x="350" y="170" fill="currentColor" stroke="none">V = ?</text></svg></figure>

Keep l and w the same.

## Run: change only h

```step
stage: run
insight: "Moving only h and reading V, with l and w held still, shows the pattern for one variable at a time."
try: { playground: board, starter: "formula.yml#run", height: 520 }
check: { type: board, text: "Keep $l = 2$ and $w = 3$. Move $h$ up from 1 to 4 and watch $V$. Was your prediction right?", when: "l = 2 and w = 3 and h = 4", explain: "V = 6, 12, 18, 24: each step of 1 in h adds 6 to V, because l × w = 6." }
```

Move one slider at a time. Here is what the board shows:

| $h$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $V$ (with $l = 2$, $w = 3$) | 6 | 12 | 18 | 24 |

## Investigate: a fair test

```step
stage: investigate
insight: "A fair test changes one variable (Tom changes two); a table shows the pattern; some variables matter more than others."
tasks:
  - check:
      type: answer
      q: "With $l = 2$ and $w = 3$, $V$ is 6, 12, 18 when $h$ is 1, 2, 3. By how much does $V$ go up for each extra 1 in $h$?"
      answer: "6"
      feedback:
        - ["1", "That is how much h goes up. Look at V: 6 to 12."]
      explain: "V goes up by 6 each time, which is l × w = 2 × 3."
  - check:
      type: bug
      code: "working.txt#tom"
      text: "Tom wants to know what h does to V. Click the line where his test stops being fair."
      answer: 3
      fault: logic
      misconception: vary-two-at-once
      explain: "Line 3: he changes w as well as h, so he cannot tell which caused the change in V. Change h alone: V = 2 × 3 × 2 = 12."
  - check:
      type: question
      q: "To find the effect of $w$ on $V = lwh$, what should you do?"
      options: ["Change w only, and keep l and h the same", "Change l, w and h together", "Change l and h only", "Change w and h together"]
      answer: 0
      feedback: [null, "You could not tell which letter did what.", "w is the letter you want to test.", "Then h would also change V."]
      explain: "Isolate one variable at a time: that is a fair test."
```

### The pattern in the table

Look at the V row.

### A fair test?

Read Tom's working. What did he change?

### What to change

## Modify: other formulas

```step
stage: modify
insight: "The same method on distance and on a square: both variables doubling, a square growing faster than its side, and the variable with the biggest effect."
try: { playground: board, starter: "formula.yml#distance", height: 520 }
tasks:
  - starter: "formula.yml#distance"
    hint: ["d = s × t, so 150 = s × 3.", "Try speeds of 30, 40, 50."]
    check: { type: board, text: "Set the time to 3 hours. Choose the speed so the distance is 150 km.", when: "d = 150 and t = 3", explain: "150 ÷ 3 = 50 km/h." }
  - check:
      type: question
      q: "$d = st$. Speed and time both double. What happens to the distance?"
      options: ["It becomes 4 times as big", "It doubles", "It stays the same", "It becomes 3 times as big"]
      answer: 0
      feedback: [null, "The product is multiplied by 2 twice, so it is 4 times as big.", "Both factors went up.", "Think of 2 × 2."]
      explain: "(2s) × (2t) = 4st: the distance is 4 times as big."
  - starter: "formula.yml#square"
    check: { type: board, text: "A square has area $A = s \\times s$. Make the side 6 cm. What does the area become?", when: "A = 36", explain: "6 × 6 = 36 cm². Doubling the side from 3 to 6 made the area 4 times as big (9 to 36)." }
  - check:
      type: question
      q: "$V = lwh$ with $l = 2$, $w = 3$, $h = 4$ (V = 24). Adding 1 to just one variable, which gives the biggest V?"
      options: ["Adding 1 to l (V = 36)", "Adding 1 to w (V = 32)", "Adding 1 to h (V = 30)", "They all give the same V"]
      answer: 0
      feedback: [null, "Adding 1 to w gives 2 × 4 × 4 = 32.", "Adding 1 to h gives 2 × 3 × 5 = 30.", "Try each: 36, 32 and 30."]
      explain: "l is the smallest, so one more makes the biggest proportional change: 3 × 3 × 4 = 36."
```

### Find the speed

Hold the time at 3.

### Both double

### Side and area

### The biggest change

## Practise: vary and describe

```step
stage: practise
insight: "Reading tables, single changes and a substitution review, mixed; forgetting to hold the others is the planted slip; the substitution review keeps formulas fresh."
try: { playground: board, starter: "formula.yml#box", height: 520 }
tasks:
  - check:
      type: answer
      q: "$V = lwh$ with $l = 2$, $w = 3$, $h = 4$. What is $V$?"
      answer: "24"
      explain: "2 × 3 × 4 = 24."
  - check:
      type: answer
      q: "Now change only $w$, from 3 to 4. What is $V$?"
      answer: "32"
      feedback:
        - ["28", "l and h stay at 2 and 4: 2 × 4 × 4."]
      explain: "2 × 4 × 4 = 32."
    smaller:
      check: { type: "number", q: "Which two stay the same, $l$ and $h$? What is $l \\times h$?", answer: 8, explain: "l = 2 and h = 4 stay put: 2 × 4 = 8. Then w is the only one that changes." }
  - check:
      type: answer
      q: "$d = st$ with $s = 60$ km/h. The time doubles from 2 to 4 hours. What is $d$ now, in km?"
      answer: "240"
      feedback:
        - ["120", "That is the distance for 2 hours. For 4 hours, 60 × 4."]
      explain: "60 × 4 = 240 km, double the 120 km for 2 hours."
  - check:
      type: answer
      q: "Review: $P = 2l + 2w$ with $l = 6$ and $w = 4$. What is $P$?"
      answer: "20"
      feedback:
        - ["50", "2l means 2 × l, not the digits side by side."]
      explain: "2 × 6 + 2 × 4 = 12 + 8 = 20."
```

### Find V

### Change w

### Change t

### Review: substitution

## Make: a test of your own

```step
stage: make
insight: "Choosing numbers to meet a target then describing the effect of each variable puts the method to use."
try: { playground: board, starter: "formula.yml#box", height: 520 }
hint: ["Find three numbers up to 6 that multiply to 60.", "Try l = 6: then w × h must be 10."]
check: { type: board, text: "Make a box with volume 60 where $l > w > h$ (all different).", when: "V = 60 and l > w and w > h", explain: "For example l = 5, w = 4, h = 3 (60), or l = 6, w = 5, h = 2 (60)." }
```

Now write a table (on paper or in a spreadsheet) that varies $h$ from 1 to 6 for your box, and describe in a sentence what happens to $V$ as $h$ goes up.

## Make: change the ticket price on paper

```step
stage: make
insight: "A fair test changes one number and holds the rest still; the paper task makes them choose which numbers stay put."
hint: ["Work out the profit as it is first.", "Only the ticket price changes. Keep the costs and the number of people."]
check:
  type: reasoning
  paper: true
  q: "A school event has fixed costs of 200 dollars and a cost of 4 dollars per head. Tickets are 10 dollars and 60 people come, so $\\text{profit} = \\text{price} \\times n - (\\text{fixed} + \\text{cost} \\times n)$ (all made up for the task). Change only the ticket price, from 10 to 11 dollars. What is the new profit, in dollars?"
  steps:
    - ["Now: $10 \\times 60 - (200 + 4 \\times 60) = 600 - 440 = 160$", "work out the starting profit"]
    - ["Keep $n = 60$, fixed 200 and cost 4 the same", "a fair test changes one number only"]
    - ["$11 \\times 60 - 440 = 660 - 440 = 220$", "the costs are still 440"]
    - ["Profit goes up by $220 - 160 = 60$", "each extra dollar of price brings 60 more, one per person"]
  picks:
    - step: 2
      q: "Raising the price from 10 to 11. What happens to the costs, 200 + 4 × 60 = 440?"
      options:
        - "They stay at 440, because only the price changed"
        - "They go up by 1"
        - "They are worked out again with 11 in place of 4"
      answer: 0
      feedback: [null, "Nothing in the costs depends on the ticket price.", "The 4 is the cost per head, not the price. It does not change."]
  answer: "220"
  feedback:
    - ["600", "That is the takings at 10 dollars. Use 11, then take away the costs."]
    - ["161", "Raising the price by 1 dollar brings in 1 dollar from each of the 60 people, not 1 dollar in all."]
  criteria:
    - "I wrote down which numbers stay the same before I changed the price."
    - "I worked out the starting profit and the new profit with the same costs."
    - "I can say why the profit went up by 60."
  explain: "Costs stay at 200 + 4 × 60 = 440. Takings are 11 × 60 = 660, so profit is 220: 60 more than the 160 before. In real life a higher price may mean fewer people come."
```

Do this one in your book, not on the screen. Organisers test one number at a time like this in a budget spreadsheet: "what if we raise the price by a dollar?" Work out both profits, then type the new one.

**Also used in**

- **Event budgets.** A spreadsheet tests one change at a time: the price, the numbers or the costs.
- **Science experiments.** A fair test changes one thing and keeps everything else the same.
- **Spreadsheets and simulations.** Every "what if" is one input changed while the rest are held still.
