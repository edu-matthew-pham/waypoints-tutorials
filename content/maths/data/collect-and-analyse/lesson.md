---
order: 40
unit: stats9
node: AC9M9ST05 n2
uses: ["AC9M9ST05 n1", "AC9M9ST03 n3"]
connection: recycling-audit
title: "Collect and analyse the audit"
summary: "Record the percentage of each bin that is recyclable, display it, and use the mean, median and range to describe what the school is doing."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You sorted 10 bins. What does the school's recycling really look like?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8398
  url: http://127.0.0.1:8398/index.html
  readySelector: "#board"
  layout: full
---
Following the plan, you sorted 10 bins and recorded what percentage of each bin's contents was actually recyclable (made up for the task): 62, 70, 55, 81, 66, 74, 59, 68, 72 and 64. Now analyse it. Have a guess what the typical bin looks like, and we'll come back to it at the end.

## Predict: a typical bin

```step
stage: "predict"
insight: "Estimating the typical percentage from the list shows whether students look for the middle of the values rather than the largest."
check: {"type": "predict", "q": "The ten percentages run from 55 to 81, mostly in the 60s and 70s. What is a sensible guess for the typical bin?", "options": ["About 67% recyclable", "About 81% recyclable", "About 55% recyclable"], "actual": "About 67%. The typical value sits in the middle of the data, not at either end."}
```

## Run: add another bin

```step
stage: "run"
insight: "Adding an 11th bin at 90% changes the mean by a small amount, because one value among eleven has little pull."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Add one more bin to the plot at 90% (click the line at 90). What happens to the mean and the median?", "when": "n = 11 and h = 90", "explain": "The mean rises from 67.1 to about 69.1 and the median moves from 67 to 68. One bin shifts them a little."}
```

## Investigate: the numbers

```step
stage: "investigate"
insight: "Mean, median and range summarise centre and spread; the range shows how much bins differ even though the mean looks tidy."
tasks:
  - {"check": {"type": "number", "q": "What is the mean percentage recyclable of the 10 bins (1 decimal place)?", "answer": 67.1, "tolerance": 0.05, "explain": "671 ÷ 10 = 67.1."}}
  - {"check": {"type": "number", "q": "What is the range of the 10 bins?", "answer": 26, "tolerance": 0, "explain": "81 − 55 = 26."}}
  - {"check": {"type": "bug", "code": "working.txt#kai", "text": "Kai reports the audit. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "mean-hides-spread", "explain": "Line 2: a mean of 67.1% hides the range: some bins were as low as 55% and others as high as 81%. Report the spread as well."}}
```

### Mean

```worked
\text{mean} = \tfrac{671}{10} = 67.1 :: Add the percentages and divide by 10.
\text{range} = 81 - 55 = 26 :: Highest minus lowest.
\text{median} = 67 :: Middle of the ordered values.
```

### Range

### Find the mistake

## Modify: another week

```step
stage: "modify"
insight: "Adding a second week's bins on the same scale and comparing."
try: {"playground": "board", "starter": "b.yml#two", "height": 620}
tasks:
  - {"starter": "b.yml#two", "check": {"type": "board", "text": "Week 1 is the top plot you can edit; Week 2 is below. Add a bin to week 1 so its mean is above week 2's mean.", "when": "m > M", "explain": "Adding a 100 gives week 1 a mean of 70.1, above week 2's 68.1."}}
  - {"type": "question", "q": "Week 1's mean is 67.1 and week 2's is 68.1. What does this suggest?", "options": ["A very small difference that may be chance", "Recycling has clearly improved", "Recycling has got worse", "Nothing, the data is useless"], "answer": 0, "feedback": [null, "One point is small compared with bins that vary by 20.", "The mean went up.", "The data are useful, just not conclusive."], "explain": "The mean rose by 1 but the bins vary by 20 or more, so the difference could be chance."}
  - {"type": "question", "q": "Which display would you use for each bin's percentage in both weeks?", "options": ["Two dot plots on the same scale", "A pie chart", "A scatter of names", "A line graph of colours"], "answer": 0, "feedback": [null, "Not parts of one whole.", "Names are not numbers.", "Colours are not data."], "explain": "Dot plots on one scale, to compare centre and spread."}
```

### Beat week 2

### Small difference?

### Which display

## Practise: means, medians and ranges

```step
stage: "practise"
insight: "Computing summaries for a new set, with a review of planning."
tasks:
  - {"check": {"type": "number", "q": "Week 2: 58, 60, 63, 66, 68, 70, 71, 73, 75, 77. What is the median?", "answer": 69, "tolerance": 0, "explain": "The middle is between 68 and 70: 69."}}
  - {"check": {"type": "number", "q": "What is the range of week 2?", "answer": 19, "tolerance": 0, "explain": "77 − 58 = 19."}}
  - {"check": {"type": "number", "q": "Review: 7 bins a day for 4 days, 5 minutes each. How many minutes of sorting?", "answer": 140, "tolerance": 0, "explain": "7 × 4 × 5 = 140."}}
```

### Median

### Range

### Review

## Make: week 2

```step
stage: "make"
insight: "Returning to the audit: find the second week's mean, on paper."
check: {"type": "reasoning", "paper": true, "q": "Week 2: 58, 60, 63, 66, 68, 70, 71, 73, 75, 77 (percent recyclable). Find the mean to 1 decimal place. (The numbers are made up for the task.)", "steps": [["Sum: $58+60+63+66+68+70+71+73+75+77 = 681$", "add them"], ["Mean: $681 \\div 10 = 68.1$", "divide by 10"]], "answer": "68.1", "answerLabel": "Mean (%)", "tolerance": 0.05, "feedback": [["681", "That is the sum. Divide by 10."], ["69", "That is the median."]], "criteria": ["I added all ten.", "I divided by 10.", "I could say week 2 is a little higher."], "explain": "68.1%. Week 1 was 67.1%: a difference of 1 point, small next to bins that vary by 20 points or more."}
```

What would make you more confident about a difference between weeks?

**Also used in**

- **Science.** Every experiment goes from a table of readings to a mean, a range and a display.
- **Business.** Weekly sales reports are exactly this: a mean and a spread.
- **Next lesson.** Reporting the findings and how strong the evidence is.
