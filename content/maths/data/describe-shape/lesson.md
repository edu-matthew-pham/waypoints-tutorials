---
order: 34
unit: stats9
node: AC9M9ST03 n1
uses: ["AC9M9ST01 n2", "AC9M7ST02 n3"]
connection: median-house-price
title: "Shape: symmetric or skewed"
summary: "A distribution's shape says where the values pile up and where the long tail runs. A tail to the right is skewed right and pulls the mean above the median."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Waiting times at a clinic: lots of short waits, a few very long ones. What shape is that?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8384
  url: http://127.0.0.1:8384/index.html
  readySelector: "#board"
  layout: full
---
Fourteen patients' waiting times at a clinic, in minutes, are plotted below (made up for the task). Most waits are short, but a few are very long. The long stretch of dots on one side is the tail, and it names the shape: the tail points the way the data is skewed. Have a guess which way the tail points, and we'll come back to it at the end.

## Predict: which way is the tail

```step
stage: "predict"
insight: "Picking the tail direction for waiting times shows whether students name the skew by where the bulk is (left) or where the tail goes (right)."
check: {"type": "predict", "q": "Most waits are 5 to 10 minutes. A few are 22 and 30 minutes. Which way does the tail point, and what is the skew called?", "options": ["Right: skewed right", "Left: skewed left", "No tail: symmetric"], "actual": "The tail points right (towards the large values), so it is skewed right (or positively skewed). The bulk of the data is on the left."}
```

## Run: tail and average

```step
stage: "run"
insight: "Adding one more very long wait stretches the tail and moves the mean much more than the median."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Click the line at about 40 to add one more very long wait. Compare how far the mean and the median moved.", "when": "n = 15 and m > d", "explain": "The mean was about 10.9 and goes up to about 12.8; the median stays 8. The tail pulls the mean."}
```

## Investigate: name the shape

```step
stage: "investigate"
insight: "Skew is named by the long tail; in a right-skewed set the mean is above the median, in a left-skewed set it is below, and a symmetric set has them equal."
tasks:
  - {"check": {"type": "question", "q": "The tail of a distribution is on the left, towards the small values. What is it called?", "options": ["Skewed left", "Skewed right", "Symmetric", "Uniform"], "answer": 0, "feedback": [null, "The tail is on the left.", "Symmetric has no long tail.", "Uniform is flat."], "explain": "The long tail is on the left, so it is skewed left."}, "smaller": {"check": {"type": "question", "q": "Is the tail of a right-skewed set towards the large values or the small values?", "options": ["The large values", "The small values"], "answer": 0, "feedback": [null, "That would be left-skewed."], "explain": "Right-skewed: the tail runs out to the large values."}}}
  - {"check": {"type": "question", "q": "A distribution is skewed left. How do the mean and median compare?", "options": ["The mean is below the median", "The mean is above the median", "They are equal", "They can't be compared"], "answer": 0, "feedback": [null, "That is right-skewed.", "Equal means symmetric.", "They can."], "explain": "The low tail pulls the mean down below the median."}}
  - {"check": {"type": "bug", "code": "working.txt#omar", "text": "Omar describes the clinic waits. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "skew-direction-swapped", "explain": "Line 2: skew is named for the tail, not for where most data sits. The tail runs to the right (long waits), so it is skewed right."}}
```

### Skewed left

```worked
\text{most waits } 5\text{--}10,\ \text{a few } 22, 30 :: Bulk on the left, tail to the right.
\text{skewed right: mean} > \text{median} :: The tail pulls the mean up.
\text{symmetric: mean} \approx \text{median} :: Balanced both sides.
```

### Mean and median

### Find the mistake

## Modify: make other shapes

```step
stage: "modify"
insight: "Building symmetric and left-skewed sets shows the tail and the mean against the median."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#sym", "check": {"type": "board", "text": "Make the set symmetric: add or remove dots until the mean and the median are equal.", "when": "m = d", "explain": "A balanced set, such as 3, 4, 5, 5, 6, 7 (change the 8 to a 7), has a mean and median that agree."}}
  - {"starter": "b.yml#left", "check": {"type": "board", "text": "This set of test marks has a long tail on the left. Remove the dot at 2 and see what happens to the mean.", "when": "n = 10 and m < d", "explain": "Even without the 2 the lower tail keeps the mean (8.5) below the median (9)."}}
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Remove the dots at 22 and 30 from the waiting times. Is it still skewed right?", "when": "n = 12 and m > d", "explain": "Still slightly right-skewed (12 and 15 are a short tail), but much closer to symmetric."}}
```

### Balanced

### Low marks

### Shorten the tail

## Practise: shape and average

```step
stage: "practise"
insight: "Naming the shape and relating the average to the tail."
tasks:
  - {"check": {"type": "question", "q": "A set has mean 52 and median 48. What shape is most likely?", "options": ["Skewed right", "Skewed left", "Symmetric", "Uniform"], "answer": 0, "feedback": [null, "That would have a mean below the median.", "That would have equal values.", "Uniform has equal values."], "explain": "Mean above median means a tail to the right."}}
  - {"check": {"type": "question", "q": "Household incomes in a town are usually which shape?", "options": ["Skewed right", "Skewed left", "Symmetric", "Uniform"], "answer": 0, "feedback": [null, "Few households have very low incomes compared with the very high ones.", "Incomes have a high tail.", "Not flat."], "explain": "A few very high incomes make a long right tail."}}
  - {"check": {"type": "number", "q": "Review: a bar chart axis starts at 50. Bars read 90 and 70. How many times as tall does the first look?", "answer": 2, "tolerance": 0.01, "explain": "(90 − 50) ÷ (70 − 50) = 2."}}
```

### Mean above median

### Incomes

### Review

## Make: back to the clinic

```step
stage: "make"
insight: "Returning to the clinic: use mean and median to describe the skew with numbers, on paper."
check: {"type": "reasoning", "paper": true, "q": "A clinic's waits have mean 10.9 and median 8 minutes (14 waits, made up for the task). Find how much higher the mean is than the median (1 decimal place), then say which way the data is skewed.", "steps": [["Difference: $10.9 - 8 = 2.9$", "mean minus median"], ["Mean above median: tail to the right", "skewed right"]], "answer": "2.9", "answerLabel": "Mean minus median", "tolerance": 0.1, "feedback": [["8", "That is the median."], ["10.9", "That is the mean."]], "criteria": ["I subtracted median from mean.", "I said which way the tail points.", "I linked the skew to a few long waits."], "explain": "The mean is 2.9 minutes above the median, so the data is skewed right: a few long waits pull the mean up."}
```

Why would the clinic manager prefer to quote the median?

**Also used in**

- **Money and size.** Incomes, house prices and city populations are skewed right.
- **Exams.** An easy test has marks piled near the top and a tail to the left.
- **Next lesson.** Comparing two data sets on the same scale.
