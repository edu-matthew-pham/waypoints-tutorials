---
order: 7
unit: models10
node: AC9M10A05 n2
uses: [AC9M10A04 n2, AC9M9A06 n1]   # writing an exponential model; where two lines meet (Year 9)
assumes: [AC9M10A05 n1]   # making and testing a conjecture is taught in class
connection: compound-savings
title: Where they meet
summary: "Two plans can swap places. Read where a curve and a line meet from a graph, say the coordinates, then zoom in or halve the gap in a table to pin the crossing down."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two ways to save: one starts ahead, one starts behind. When does the one behind pull level?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8388
  url: http://127.0.0.1:8388/index.html
  readySelector: "#sl-r"
  layout: full
explainPicture: { ref: meet.yml#explain-pic, caption: "Plan A (dashed) starts ahead and adds $300 a year. Plan B (solid) starts lower and grows 20% a year. They meet at about 8.2 years, when both are worth about $4,460." }
explainClip:
  query: { code: "@meet.yml#explain", fresh: 1, id: explain }
  caption: "The crossing is where the plans are equal"
  say: "The crossing is where the two plans are equal."
  clip:
    - caption: { text: "The dashed line is the steady plan. The curve grows by a share each year.", say: "The dashed line is the steady plan. The curve grows by a share each year." }
    - wait: 600
    - caption: { text: "Where they meet, both are worth the same.", say: "Where they meet, both are worth the same." }
    - wait: 600
    - click: Make r smaller
    - wait: 600
    - caption: { text: "A lower rate pushes the crossing later.", say: "A lower rate pushes the crossing later." }
    - wait: 1200
---
Two plans for saving. Plan A is steady: $2,000 now, and $300 more each year. Plan B starts with $1,000 and grows by 20% a year. The 20% is made up, and much higher than a real savings account, so that the plans swap places in a short time.

## Predict: who is ahead at 10 years?

```step
stage: predict
insight: "Committing to who is ahead after 10 years shows who thinks the plan that starts ahead stays ahead (A) and who sees that a share of a growing balance eventually outgrows the same dollars each year."
check:
  type: predict
  q: "Plan A starts at $2,000 and adds $300 a year. Plan B starts at $1,000 and grows 20% a year. After 10 years, which plan is worth more, and by about how much?"
  options:
    - "Plan B, by about $1{,}200$"
    - "Plan A, by about $1{,}200$"
    - "They are equal"
    - "Plan A, by about $4{,}000$"
  actual: "Plan B, by about $1,200. Plan A is worth 2,000 + 3,000 = 5,000. Plan B is worth 1,000 × 1.2¹⁰ = 6,192. B started $1,000 behind and ended $1,192 ahead, so the plans swapped places on the way."
```

<figure class="situation" role="img" aria-label="Two bars at the start: plan A is 2,000 and plan B is 1,000, so A is the taller. Two question marks mark the bars at 10 years."><svg viewBox="0 0 480 220" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="190" x2="470" y2="190"/><rect x="40" y="90" width="50" height="100" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="110" y="140" width="50" height="50" fill="#B96F1B" fill-opacity="0.3" stroke="#8A4F0C"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="65" y="84">A 2,000</text><text x="135" y="134">B 1,000</text><text x="100" y="208">start</text><text x="300" y="130" font-size="28">?</text><text x="370" y="130" font-size="28">?</text><text x="335" y="208">10 years</text></g></svg></figure>

The bars show where the plans start. Make a guess before you check.

## Run: look for the crossing

```step
stage: run
insight: "Where the curve meets the line, the two plans are equal. The graph marks that point and gives its coordinates."
try: { playground: board, starter: "meet.yml#run", height: 640 }
check: { type: board, text: "Set $r$ to 20. Read the point where the plans meet. Between which two whole years is it?", when: "r = 20" }
```

The board marks where the plans meet and gives its coordinates. Change $r$ and watch the crossing move. Which way does it go when $r$ is smaller?

## Investigate: zoom in

```step
stage: investigate
insight: "The first look gives a window, not an answer. Zooming in narrows the window until the crossing is known to the accuracy you need. Comparing at one time says who is ahead then, not where they swap."
try: { playground: board, starter: "meet.yml#zoom1", height: 560 }
tasks:
  - check:
      type: question
      q: "In this window the plans meet between which two whole years?"
      options: ["Between 8 and 9 years", "Between 6 and 7 years", "Between 9 and 10 years", "At exactly 8 years"]
      answer: 0
      feedback: [null, "At 6 and 7 years the line is still above the curve.", "By 9 years the curve is already above the line.", "At 8 years the line is 4,400 and the curve is about 4,300: not equal."]
      explain: "At 8 years the line is ahead (4,400 against 4,300). At 9 years the curve is ahead (5,160 against 4,700). The swap happens between them."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo compares the plans at 10 years. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: one-time-comparison
      explain: "Line 4: one comparison says who is ahead at that time, not at all times. At 6 years, B is worth about 2,986 and A about 3,800: A is ahead. The plans swap where they cross, at about 8.2 years."
  - check:
      type: number
      q: "Zoom in once more in your head: at 8 years the plans differ by $4,400 - 4,300 = 100$ dollars (A ahead), and at 9 years by $5,160 - 4,700 = 460$ dollars (B ahead). Is the crossing closer to 8 or to 9? Type the closer whole number."
      answer: 8
      explain: "The gap at 8 years is 100 and at 9 years is 460, so the plans are much closer at 8 years. The crossing is just after 8."
```

### Which window?

Read the window before you decide.

```worked
2^x \text{ and } 10 + x :: Where do the curve and the line meet?
x = 3:\; 2^3 = 8,\; 10 + 3 = 13 :: The line is ahead.
x = 4:\; 2^4 = 16,\; 10 + 4 = 14 :: The curve is ahead. The swap is between 3 and 4.
x = 3.5:\; 11.3 \text{ and } 13.5 :: The line is still ahead, so the swap is between 3.5 and 4.
x = 3.8:\; 13.9 \text{ and } 13.8 :: The curve is just ahead, so the swap is between 3.5 and 3.8.
x \approx 3.8 :: Halve the gap again if you need more places.
```

Now try one on paper: $3^x$ against $20 + x$. At which whole number of $x$ is the curve first ahead? Type it.

### Find the mistake

Read Jo's working. Does one comparison show where they swap?

### Closer to which year?

## Modify: change the rate

```step
stage: modify
insight: "A smaller zoom window gives more figures. A different rate moves the crossing, and a very small rate means the plans may not meet in the window at all."
try: { playground: board, starter: "meet.yml#zoom2", height: 560 }
tasks:
  - hint: ["Read the table: the plans swap between two readings.", "8.1 has the line ahead and 8.3 has the curve ahead."]
    check: { type: answer, q: "In this window ($8$ to $8.4$ years), what is the crossing to 1 decimal place, in years?", answer: "8.2", feedback: [["8", "The window starts at 8, but the plans are not equal yet there: A is worth 4,400 and B about 4,300."], ["8.3", "At 8.3 the curve is already ahead (4,542 against 4,490). The swap is a little earlier."]], explain: "At 8.2 years both are worth about $4,460. The crossing is at about (8.2, 4460)." }
  - hint: ["Use the value both plans share there.", "Plan A at 8.2 years is $2000 + 300 \\times 8.2$."]
    check: { type: answer, q: "What is each plan worth at the crossing, in dollars, to the nearest 10 dollars?", answer: "4460", feedback: [["8.2", "8.2 is the time. How much money is each plan worth then?"], ["4400", "That's the line at 8 years. At 8.2 years it is 2,000 + 300 × 8.2."]], explain: "2,000 + 300 × 8.2 = 4,460, and 1,000 × 1.2^8.2 is about 4,460 too." }
  - hint: "Look at the line: it keeps adding 300 each year. Does the curve ever fall below it again?"
    check:
      type: question
      q: "Edge case: after the crossing, does Plan A ever overtake Plan B again (with 20% a year)?"
      options: ["No: the curve adds more each year, and the line adds only $300 each year", "Yes: lines are always ahead in the end", "Yes: at about 20 years", "No: curves never come back"]
      answer: 0
      feedback: [null, "A line adds the same amount each year. The curve adds 20% of a growing balance, which gets bigger.", "After the crossing the gap grows: at 10 years it is about 1,192 in B's favour.", "Curves can swing back; here it doesn't happen because the curve adds more each year."]
      explain: "After 8.2 years Plan B adds more each year than $300, so the gap only grows."
```

### Reading the window

### The value there

### Does it swap back?

## Practise: find the crossing

```step
stage: practise
insight: "Reading a crossing from two values, from a bracket of years, and (review) finding where two lines meet."
tasks:
  - check:
      type: question
      q: "At 5 years Plan A is worth $4,000$ and Plan B is worth $3,200$. At 6 years A is worth $4,300$ and B is worth $4,000$. At 7 years A is worth $4,600$ and B is worth $5,000$. Between which two years do they meet?"
      options: ["Between 6 and 7 years", "Between 5 and 6 years", "At 6 years", "After 7 years"]
      answer: 0
      feedback: [null, "At 6 years A is still ahead (4,300 against 4,000).", "At 6 years the plans are 300 apart.", "At 7 years B is already ahead."]
      explain: "A is ahead at 6 years and B is ahead at 7 years, so they swap between 6 and 7."
    smaller:
      check: { type: question, q: "At 6 years A is worth $4,300$ and B is worth $4,000$. Which is ahead?", options: ["A", "B", "Neither"], answer: 0, explain: "4,300 is more than 4,000, so A is ahead." }
  - check:
      type: number
      q: "A table shows $2^x$ and $x + 12$. At $x = 3$ they are $8$ and $15$. At $x = 4$ they are $16$ and $16$. At what $x$ do they meet?"
      answer: 4
      explain: "At x = 4 both are 16."
  - check:
      type: question
      q: "At 2 years $2^x$ is 4 and $3x$ is 6. At 3 years they are 8 and 9. At 4 years they are 16 and 12. Which statement is right?"
      options: ["The curve overtakes the line between 3 and 4 years", "The curve overtakes the line between 2 and 3 years", "The curve is always below the line", "They meet at exactly 3 years"]
      answer: 0
      feedback: [null, "At 3 years the line is still ahead (9 against 8).", "At 4 years the curve is ahead (16 against 12).", "At 3 years they are 8 and 9, not equal."]
      explain: "The line is ahead at 3 years and the curve is ahead at 4 years, so the swap is between."
  - check:
      type: number
      q: "Review: two lines $y = 2x + 1$ and $y = x + 5$ meet where $2x + 1 = x + 5$. What is $x$?"
      answer: 4
      explain: "2x + 1 = x + 5, so x = 4."
```

### Between which years?

### Which is ahead?

### A curve overtakes

### Review

From the last unit: where two lines meet.

## Make: back to the plans

```step
stage: make
insight: "Coming back to the savings: the crossing is the decision. Before it the steady plan wins, after it the compounding one wins, so the right choice depends on how long you save."
try: { playground: board, starter: "meet.yml#vary", height: 640 }
tasks:
  - hint: ["Plan A at 6 years is 2,000 + 300 × 6.", "Plan B at 6 years is 1,000 × 1.2⁶."]
    check:
      type: reasoning
      paper: true
      q: "At 6 years, how many dollars is Plan A worth more than Plan B? Use $r = 20$. Round to the nearest dollar."
      steps:
        - ["$2000 + 300 \\times 6 = 3800$", "plan A at 6 years"]
        - ["$1000 \\times 1.2^6 = 2986$", "plan B at 6 years"]
        - ["$3800 - 2986 = 814$", "how much more A is worth"]
      answer: "814"
      answerLabel: "Dollars more"
      tolerance: 0.5
      feedback:
        - ["2986", "That's plan B. Subtract it from plan A."]
        - ["3800", "That's plan A. Find how much more it is than plan B."]
      criteria:
        - "I worked out both plans at 6 years."
        - "I used 1.2, not 0.2, as the factor."
        - "I subtracted in the right order and gave dollars."
      explain: "3,800 − 2,986 = 814, so A is ahead by about $814 at 6 years."
  - check:
      type: question
      q: "A friend plans to save for 5 years only. Using these plans with 20% a year, which should they pick?"
      options: ["Plan A: the plans don't meet until about 8.2 years, and A is ahead until then", "Plan B: it grows faster", "Either: they are equal at 5 years", "Plan B: curves always win"]
      answer: 0
      feedback: [null, "B grows faster in the end, but at 5 years A is worth 3,500 and B is worth about 2,488.", "They are equal only at the crossing, about 8.2 years.", "A curve wins only after the crossing."]
      explain: "Before about 8.2 years A is worth more. A saver for 5 years should pick A, and one for 10 should pick B."
```

### How far ahead?

Back to the plans. Work it out on paper first, then type your answer.

### Which plan for 5 years?

The decision is the crossing. The 20% a year is made up and much higher than a real savings account, so that the crossing is within a few years.

Sources: the two plans and the 20% a year are made up for this lesson.

**Also used in**

- **Phone plans.** A plan with a low fee and a high price per gigabyte meets a plan with a high fee and a low price per gigabyte, and the crossing says which to pick.
- **Science.** Where a measured line meets a predicted curve is where the model agrees with the data.
- **Next lesson.** Circles: relations that are not functions.
