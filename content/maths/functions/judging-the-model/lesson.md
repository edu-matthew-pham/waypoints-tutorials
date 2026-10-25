---
order: 9
unit: models10
node: AC9M10A04 n3
uses: [AC9M10A04 n2, AC9M10A03 n1]   # writing an exponential model; a constant ratio
assumes: [AC9M10A03 n4]   # same base both sides, for the review task
connection: food-left-out
title: Judging the model
summary: "A model that fits for a while can fail further out. Say what a result means, check it against a real measurement, name what the model assumes, and say how far to trust it."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A food-safety rule says to throw out food left out for 4 hours. Can a doubling model say anything about that number?"
explainPicture: { ref: dish.yml#explain-pic, caption: "The model doubles every 20 minutes. The dashed line is the most a small dish could hold: past it, the curve is no longer telling the truth." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8430
  url: http://127.0.0.1:8430/index.html
  readySelector: "#sl-d"
  layout: full
---
Food that is left out between 5 °C and 60 °C is safe for under 2 hours, can be used but not refrigerated for 2 to 4 hours, and has to be thrown out after 4 hours ([NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf), checked 25 October 2026). Bacteria are one reason. In this lesson a dish starts with 100 cells that double every 20 minutes. Both numbers are made up: real doubling times depend on the bacteria and the temperature.

## Predict: two hours against four

```step
stage: predict
insight: "Comparing the count at 4 hours with the count at 2 hours shows whether students see that the same two hours does much more the second time: it multiplies 6 more doublings, so 2⁶ = 64 times."
check:
  type: predict
  q: "The dish has 100 cells. They double every 20 minutes. About how many times as many cells are there after 4 hours as after 2 hours?"
  options:
    - "$2$ times"
    - "$4$ times"
    - "$64$ times"
    - "$4096$ times"
  actual: "64 times. 2 hours is 6 doublings and 4 hours is 12. The last 2 hours add 6 more doublings, so the count is multiplied by 2⁶ = 64. After 2 hours there are 6,400 cells and after 4 hours there are 409,600."
```

<figure class="situation" role="img" aria-label="A time line with three marks: the start with 100 cells, 2 hours with a question mark and 4 hours with a question mark. A label under the line reads: doubles every 20 minutes."><svg viewBox="0 0 480 150" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="30" y1="80" x2="450" y2="80"/><g stroke-width="2"><line x1="40" y1="68" x2="40" y2="92"/><line x1="240" y1="68" x2="240" y2="92"/><line x1="440" y1="68" x2="440" y2="92"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="58">100 cells</text><text x="240" y="58" font-size="22">?</text><text x="440" y="58" font-size="22">?</text><text x="40" y="112">start</text><text x="240" y="112">2 hours</text><text x="440" y="112">4 hours</text><text x="240" y="140">doubles every 20 minutes</text></g></svg></figure>

The first mark is the start. Make a guess before you check.

## Run: a doubling dish

```step
stage: run
insight: "The model N = 100(2^(60x ÷ d)) doubles every d minutes. It climbs until it crosses the dashed line, the most a small dish could hold. Past that point the curve describes a dish that does not exist."
try: { playground: board, starter: "dish.yml#run", height: 640 }
check: { type: board, text: "Set $d$ to 20, so the cells double every 20 minutes. Read the table at 2 hours and at 4 hours. Does the ratio match your prediction? Then look at hour 5: where is it against the dashed line?", when: "d = 20" }
```

The curve is $N = 100 \times 2^{60x \div d}$, with $x$ in hours and $d$ the doubling time in minutes. The dashed line is the most a small dish could hold: 1,000,000 cells (made up).

## Investigate: how far to trust it

```step
stage: investigate
insight: "A model gives a number. Judging it means saying what the number means, testing it somewhere you have a real measurement, and finding where its assumptions stop holding. Fitting at one time does not make it true at every time."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A yeast model says the colony covers $A = 50(1.4^h)$ square millimetres after $h$ hours. The dish only has $3{,}000$ square millimetres of room (made up). Work out $A$ for whole hours. What is the first hour when the model gives more than the dish can hold?"
      steps:
        - ["$50 \\times 1.4^{12} = 2834.7$", "hour 12 is still inside the dish"]
        - ["$50 \\times 1.4^{13} = 3968.6$", "hour 13 is over 3,000"]
        - ["The model can be trusted up to about hour 12", "after that it describes room that isn't there"]
      answer: "13"
      answerLabel: "First hour over 3,000"
      tolerance: 0
      feedback:
        - ["12", "At hour 12 the model gives 2,834.7, which is still under 3,000. Check the next hour."]
        - ["3968.6", "That's the area at hour 13. The question asks for the hour."]
      criteria:
        - "I worked out the model for whole hours."
        - "I compared each value with the 3,000 the dish holds."
        - "I said which hour is the first one over, and that the model is not reliable from there."
      explain: "At hour 12 the area is 2,834.7, under 3,000. At hour 13 it is 3,968.6, over. So hour 13 is the first, and the model should not be trusted past about hour 12."
    smaller:
      check: { type: number, q: "Just the first step: what is $50 \\times 1.4^{12}$, to one decimal place?", answer: 2834.7, tolerance: 0.1, explain: "1.4¹² = 56.69 and 50 × 56.69 = 2,834.7. Now compare it with 3,000." }
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam tests the dish model against a lab count of 6,400 cells at 3 hours. Click the line where the reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: fits-here-fits-everywhere
      explain: "Line 4: matching one measurement at 3 hours shows the model works near 3 hours. It doesn't show that the doubling carries on for any time. By line 5 it predicts more cells than could fit on a tray."
  - check:
      type: question
      q: "The model says the count doubles every 20 minutes, however many cells there are. Which real-life fact does that assumption ignore?"
      options: ["Food and room run out, so the growth slows", "Time is measured in hours", "The count starts at 100", "Bacteria are alive"]
      answer: 0
      feedback: [null, "Measuring in hours is a choice of units. The model's trouble is what it says about the cells.", "The start of 100 is a number put in. The problem is the rule for how the count grows.", "That is true and it is not an assumption that fails."]
      explain: "The model keeps doubling for ever. In real life the food and the room run out, so the doubling slows and stops."
```

### Judging a model

Here is how to judge a model, step by step.

```worked
A = 2(1.5^w) :: A pond plant covers A square metres after w weeks (made up). The pond is 60 square metres. Judge the model.
w = 10 \Rightarrow A = 2(1.5^{10}) = 115.3 :: Say what the number means: 115 square metres, more than the whole pond.
w = 8 \Rightarrow A = 51.3 and w = 9 \Rightarrow A = 76.9 :: Find where it passes 60. The first whole week over the pond is week 9.
\text{Assumption: the plant grows by 1.5 times each week for ever} :: A real plant slows when it runs out of room.
\text{Trust it up to about week 8} :: Report the answer with its limit.
```

Now try the yeast on paper first. The assumption in the question is the same: the colony keeps growing by 1.4 times an hour.

### Find the mistake

Read Sam's working. Does matching one measurement make a model right everywhere?

### What the model leaves out

Think about what really limits a colony.

## Modify: fit it, then test it

```step
stage: modify
insight: "Judging a model can mean changing it. Try the doubling time that fits the lab count, then ask where the new model fails, including at the edges."
try: { playground: board, starter: "dish.yml#vary", height: 640 }
tasks:
  - hint: ["The lab counted $6{,}400$ cells at 3 hours from 100. That is $64$ times as many.", "$64 = 2^6$, so there were 6 doublings in 3 hours."]
    check: { type: answer, q: "A lab counts $6{,}400$ cells after 3 hours (made up). Which doubling time $d$, in minutes, makes the model give $6{,}400$ at $x = 3$? Set $d$ and read the table.", answer: "30", feedback: [["20", "d = 20 gives 51,200 at 3 hours, which is 8 times too high."], ["60", "d = 60 gives 800 at 3 hours, which is too low."]], explain: "6,400 ÷ 100 = 64 = 2⁶, so 6 doublings in 180 minutes: one every 30 minutes." }
  - hint: "Keep d at 30. Look down the table for the first whole hour over the dashed line, 1,000,000."
    check: { type: answer, q: "With $d = 30$, in which whole hour does the model first pass $1{,}000{,}000$ cells?", answer: "7", feedback: [["6", "At hour 6 the model gives 409,600, which is under 1,000,000. Try the next hour."], ["8", "Hour 8 is over, but hour 7 already is: 1,638,400."]], explain: "100 × 2¹² = 409,600 at hour 6 and 100 × 2¹⁴ = 1,638,400 at hour 7, so hour 7 is the first." }
  - hint: "Put x = −1 into the model with d = 20: the power is 60 × (−1) ÷ 20."
    check:
      type: question
      q: "Edge case: with $d = 20$, the model at $x = -1$ gives $100 \\times 2^{-3} = 12.5$ cells. What should you say about that?"
      options: ["It makes no sense: half a cell can't exist, and the dish had no cells before the start", "It is fine: the model works at every time", "It means the dish loses 12.5 cells", "It means the doubling time is 12.5 minutes"]
      answer: 0
      feedback: [null, "The model was built for time after the start. Before that there was no dish.", "A negative time is before the start, not a loss of cells.", "12.5 is a count of cells, not a doubling time."]
      explain: "The model was built for hours after the dish was started. Outside that range the formula still gives a number, and the number means nothing."
```

### Fitting the lab

### When it fills

### Before the start

## Practise: report the answer

```step
stage: practise
insight: "Comparing a model with a real value, saying how far out it can be trusted, and (review) solving with the same base."
tasks:
  - check:
      type: number
      q: "A model says a car is worth $V = 20000(0.85^n)$ dollars after $n$ years. A listing shows one 3 years old at $\\$13{,}000$. By how many dollars is the model's value lower than the listing? Give the answer in dollars."
      answer: 717.5
      tolerance: 0.01
      feedback:
        - [12282.5, "That's the model's value. Subtract it from the listing, 13,000."]
      explain: "20,000 × 0.85³ = 12,282.50, and 13,000 − 12,282.50 = 717.50."
  - check:
      type: question
      q: "The same car model gives about $\\$153$ for a car 30 years old. What is the best comment?"
      options: ["Far outside the ages it was checked on, so don't trust it: a car that old could be worth much more or much less", "It is exact, because the model fitted at 3 years", "It is wrong because the value can't go below $20,000$", "It is wrong because 30 is not a whole number"]
      answer: 0
      feedback: [null, "Fitting at 3 years says nothing about 30.", "A car does lose value. The problem is how far the model is being pushed.", "30 is a whole number of years."]
      explain: "The model was only checked near 3 years. At 30 years it is guessing, and a very old car can be a collector's item or scrap."
  - check:
      type: number
      q: "Review: solve $4^x = 64$. What is $x$?"
      answer: 3
      explain: "64 = 4³, so x = 3."
```

### Model against listing

### How far out

### Review

From the last unit: solving with the same base.

## Make: report the answer

```step
stage: make
insight: "Back to the dish: give the answer and say how far to trust it. The report has three parts: the result in words, an assumption, and the range."
tasks:
  - hint: ["With d = 30, the count at 2 hours is 100 × 2⁴ and at 4 hours is 100 × 2⁸.", "Divide the 4-hour count by the 2-hour count."]
    check:
      type: reasoning
      paper: true
      q: "The lab's doubling time was $30$ minutes (from the Modify step), so $N = 100(2^{2x})$. How many times as many cells are there after 4 hours as after 2 hours?"
      steps:
        - ["$100 \\times 2^{4} = 1600$", "the count at 2 hours"]
        - ["$100 \\times 2^{8} = 25600$", "the count at 4 hours"]
        - ["$25600 \\div 1600 = 16$", "how many times as many"]
      answer: "16"
      answerLabel: "Times as many"
      tolerance: 0
      feedback:
        - ["2", "That doubles the count once. In 2 hours at one doubling every 30 minutes there are 4 doublings."]
        - ["64", "64 is the answer for a 20-minute doubling time. The lab found 30 minutes."]
      criteria:
        - "I used d = 30, not 20."
        - "I worked out both counts before dividing."
        - "I gave the answer as a number of times."
      explain: "1,600 at 2 hours and 25,600 at 4 hours: 16 times as many. Still a big jump for the second two hours."
  - check:
      type: question
      q: "Which is the best report of the model's answer for a tray left out for 4 hours?"
      options: ["About 25,600 cells, from a made-up 30-minute doubling time, so only a rough guide, and not reliable once the food and room run low (past about hour 6 or 7 in the dish)", "25,600 cells exactly", "There will be 25,600 cells because maths says so", "The model is useless because it is a model"]
      answer: 0
      feedback: [null, "'Exactly' hides the made-up doubling time and the assumption.", "A model's answer depends on what it assumes. Say what it assumes.", "A model can be useful inside its range. The report says how far to trust it."]
      explain: "A good report gives the answer in words, names the made-up input and the assumption, and says where the model stops being reliable."
```

### Compare two hours with four

Back to the dish. Work this out on paper first, then type your answer.

### The report

A report has three parts: what the number means, what the model assumes, and how far out you trust it.

Sources: the 100 cells, the doubling times and the dish limit of 1,000,000 cells are made up for this lesson. The 2-hour and 4-hour rule is from the [NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf) (checked 25 October 2026). The car, plant and yeast numbers are made up too.

**Also used in**

- **Science.** A population model for a lake or a culture is judged the same way: fit it to a count, then ask when the food or room runs out.
- **Money.** A savings or loan model assumes a fixed rate. If the rate changes, the model is no longer the account.
- **Last lesson.** Where two models meet: the crossing is only worth trusting while both models are.
