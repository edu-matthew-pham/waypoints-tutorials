---
order: 36
unit: stats9
node: AC9M9ST03 n3
uses: ["AC9M9ST03 n2", "AC9M9ST03 n1"]
connection: bus-lateness
title: "Which is better? Centre, spread, shape and outliers"
summary: "Compare two distributions on centre, spread, shape and outliers, and say which is better for the job. Two sets can share a median and still be very different."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Both brands have a median of 10 hours. Are the batteries the same?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8397
  url: http://127.0.0.1:8397/index.html
  readySelector: "#board"
  layout: full
---
The battery data again: brand A (8 to 12 hours) and brand B (5 to 15 hours), nine batteries each (made up for the task). The medians are both 10. A fair comparison looks at four things: the centre, the spread, the shape and any outliers. Have a guess which brand you would trust for a torch on a camping trip, and we'll come back to it at the end.

## Predict: same median

```step
stage: "predict"
insight: "Choosing between batteries with equal medians shows whether students stop at the centre or look at spread."
check: {"type": "predict", "q": "Both brands have median 10 hours. Brand A ranges from 8 to 12 and brand B from 5 to 15. For a torch you need to rely on, which do you choose?", "options": ["Brand A: its lives are closer together", "Brand B: its best battery lasts longest", "Either: the medians are equal"], "actual": "Brand A. The medians match, but A's results sit in a narrow band, so you know about how long it will last."}
```

## Run: better and steadier

```step
stage: "run"
insight: "Pushing A's mean above B's while keeping A's range below B's shows a brand can be both higher on average and steadier."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Add dots to brand A until its mean is above B's and its range is still smaller than B's.", "when": "m > M and r < R", "explain": "Adding 14, 14 gives A a mean of about 10.7 (B's is 10.56) and a range of 6, still below B's 10."}
```

## Investigate: four things to compare

```step
stage: "investigate"
insight: "Centre, spread, shape and outliers each answer a different question; matching centres can hide different spreads, and an outlier can distort the mean."
tasks:
  - {"check": {"type": "number", "q": "What is brand B's mean to 1 decimal place? (5, 7, 9, 10, 10, 12, 13, 14, 15)", "answer": 10.6, "tolerance": 0.05, "explain": "95 ÷ 9 = 10.56, about 10.6."}}
  - {"check": {"type": "question", "q": "Which brand has the smaller spread?", "options": ["Brand A (range 4)", "Brand B (range 10)", "They are equal", "It can't be told"], "answer": 0, "feedback": [null, "B's range is bigger.", "The ranges differ.", "The ranges tell."], "explain": "A's range of 4 is smaller than B's 10."}, "smaller": {"check": {"type": "number", "q": "What is brand A's range?", "answer": 4, "tolerance": 0, "explain": "12 − 8 = 4."}}}
  - {"check": {"type": "bug", "code": "working.txt#jo", "text": "Jo compares the brands. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "same-centre-same-data", "explain": "Line 2: two sets with the same median can differ a lot in spread, shape and outliers. Compare all four features, not just the centre."}}
```

### Mean of B

```worked
\text{centre: both median } 10 :: Same.
\text{spread: } 4 \text{ against } 10 :: A is steadier.
\text{shape: both roughly symmetric; outliers: none} :: Nothing odd.
```

### Spread

### Find the mistake

## Modify: an outlier

```step
stage: "modify"
insight: "An outlier changes the mean and the range; removing it shows how much it was doing."
try: {"playground": "board", "starter": "b.yml#out", "height": 620}
tasks:
  - {"starter": "b.yml#out", "check": {"type": "board", "text": "This set has one very high result, at 30. Remove that dot and watch the mean.", "when": "n = 8 and m < 11", "explain": "The mean falls from about 12.7 to 10.5. The range falls from 21 to 3."}}
  - {"type": "question", "q": "A battery that lasted 30 hours in a set of results around 10 is probably...", "options": ["An outlier: check if it was a mistake or a real result", "The most important result", "The mean", "Always an error"], "answer": 0, "feedback": [null, "It stands out, but it is not the main point.", "The mean is a calculated value.", "It might be real."], "explain": "Check it: a recording error or a special battery. Do not delete it without a reason."}
  - {"type": "question", "q": "When comparing centres, which is safer when one set has an outlier?", "options": ["The median", "The mean", "The range", "The mode"], "answer": 0, "feedback": [null, "The mean is pulled by the outlier.", "The range is affected most.", "The mode ignores size."], "explain": "The median is not pulled by one extreme value."}
```

### Remove it

### Check an outlier

### Safer centre

## Practise: compare and decide

```step
stage: "practise"
insight: "Comparing two sets numerically and deciding, then a review."
tasks:
  - {"check": {"type": "number", "q": "Set A has mean 50 and range 10. Set B has mean 52 and range 40. By how much does B's mean exceed A's?", "answer": 2, "tolerance": 0, "explain": "52 − 50 = 2."}}
  - {"check": {"type": "question", "q": "A bus company wants the most reliable route. Which statistic matters most?", "options": ["The spread of the lateness", "The mean lateness only", "The highest lateness only", "The number of buses"], "answer": 0, "feedback": [null, "The mean alone hides how much it varies.", "One bad day is just one day.", "The number of buses doesn't say."], "explain": "A small spread means the bus is steady."}}
  - {"check": {"type": "number", "q": "Review: set A runs from 12 to 20 and set B from 8 to 24. How much wider is B's range?", "answer": 8, "tolerance": 0, "explain": "B: 16, A: 8, so 16 − 8 = 8."}}
```

### Difference of means

### Reliable route

### Review

## Make: which brand

```step
stage: "make"
insight: "Returning to the batteries: how much longer on average, and which you would pick, on paper."
check: {"type": "reasoning", "paper": true, "q": "Brand A's mean is 10 hours and brand B's mean is 95 ÷ 9 hours. How many hours longer is B's mean than A's? (1 decimal place) (The numbers are made up for the task.)", "steps": [["B: $95 \\div 9 = 10.56$", "mean of B"], ["$10.56 - 10 = 0.56 \\approx 0.6$", "subtract"]], "answer": "0.6", "answerLabel": "Hours longer", "tolerance": 0.05, "feedback": [["10.6", "That is B's mean. Find how much longer it is than A's."], ["0.5", "Divide 95 by 9 first: 10.56, then subtract."]], "criteria": ["I found the mean of B.", "I subtracted A's mean.", "I also said which has the smaller spread."], "explain": "B is only 0.6 hours longer on average but its range is 6 hours wider, so A is the safer buy: similar centre, far more predictable."}
```

Write two sentences comparing the brands: one on centre and one on spread.

**Also used in**

- **Transport.** A bus that is on average 2 minutes late every day is better than one that is on time six days then 30 minutes late.
- **Medicine.** A drug that works the same for most people is safer than one that works brilliantly for few.
- **Next lesson.** Choosing the right display for the data.
