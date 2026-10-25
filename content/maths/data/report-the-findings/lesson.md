---
order: 41
unit: stats9
node: AC9M9ST05 n3
uses: ["AC9M9ST05 n2", "AC9M9ST01 n2"]
connection: recycling-audit
title: "Report the findings and how sure you are"
summary: "A report says what was found, how strong the evidence is, and what to do. A small difference between two weeks can be chance; say so."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Week 2's mean is a point higher. Is the recycling improving?"
---
The audit gave a mean of 67.1% recyclable for week 1 and 68.1% for week 2 (made up for the task). The range was 26 points in week 1 and 19 in week 2. A good report says what you found, how sure you are, and what the school should do. Have a guess whether this is strong evidence that recycling has improved, and we'll come back to it at the end.

## Predict: is it improving

```step
stage: "predict"
insight: "Judging a one-point rise against the spread of the bins shows whether students over-read a small difference."
check: {"type": "predict", "q": "Week 2's mean is 1 point higher than week 1's, but bins in each week vary by about 20 points. How strong is the evidence that recycling improved?", "options": ["Weak: the difference is small compared with how much bins vary", "Strong: the mean went up", "Proof: week 2 is higher"], "actual": "Weak. A 1-point rise is small compared with a spread of 20, so it could easily be chance. More weeks of data would tell."}
```

## Run: size of the difference

```step
stage: "run"
insight: "Putting a number on the difference between the two weeks' means gives the evidence something to be weighed against."
check: {"type": "number", "q": "Week 1's mean is 67.1 and week 2's is 68.1. By how many points is week 2's mean higher?", "answer": 1, "tolerance": 0.05, "explain": "68.1 − 67.1 = 1.0."}
```

## Investigate: how strong is the evidence

```step
stage: "investigate"
insight: "Evidence is stronger when the difference is large next to the spread, the sample is big and fair, and the result repeats; honest reports say how far the data can be trusted."
tasks:
  - {"check": {"type": "question", "q": "Which sentence is the most honest summary?", "options": ["Week 2's mean was 1 point higher, but the bins vary so much that this may be chance", "Recycling has improved", "Recycling has got worse", "Recycling is perfect"], "answer": 0, "feedback": [null, "The data don't show that clearly.", "The data don't show that.", "Nowhere near perfect."], "explain": "It reports the finding and its limit."}, "smaller": {"check": {"type": "question", "q": "Is a 1-point difference big or small next to bins that vary by 20 points?", "options": ["Small", "Big"], "answer": 0, "feedback": [null, "It is small."], "explain": "Small."}}}
  - {"check": {"type": "number", "q": "Week 2's range is 77 − 58. What is it?", "answer": 19, "tolerance": 0, "explain": "77 − 58 = 19."}}
  - {"check": {"type": "bug", "code": "working.txt#zed2", "text": "Zed writes the report. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "small-difference-is-real", "explain": "Line 2: a 1-point difference, with bins varying by about 20 points, is within the normal variation. It is not good evidence of improvement."}}
```

### Honest summary

```worked
68.1 - 67.1 = 1.0 :: The difference in means.
\text{range} \approx 20 :: How much bins vary.
1 \ll 20 \Rightarrow \text{weak evidence} :: A small difference next to a big spread.
```

### Spread of week 2

### Find the mistake

## Modify: strengthen or weaken

```step
stage: "modify"
insight: "Judging what would make the evidence stronger or weaker."
tasks:
  - {"check": {"type": "question", "q": "Which would make the evidence for an improvement stronger?", "options": ["Eight weeks in a row of rising means", "One more bin at 90%", "A prettier graph", "A shorter report"], "answer": 0, "feedback": [null, "One bin is a small change.", "Looks do not change the evidence.", "Length does not change the evidence."], "explain": "A pattern that repeats over weeks is more convincing than one rise."}}
  - {"check": {"type": "question", "q": "Which part of the report should say what the school can do?", "options": ["A recommendation", "The title only", "The axis labels", "The footnote"], "answer": 0, "feedback": [null, "A title doesn't recommend.", "Labels don't recommend.", "A footnote is too hidden."], "explain": "A clear recommendation, such as sorting bins at lunch or repeating the audit."}}
  - {"check": {"type": "question", "q": "Why report the range as well as the mean?", "options": ["The mean alone hides how much bins differ", "The range is easier", "The mean is wrong", "Reports need two numbers"], "answer": 0, "feedback": [null, "Easier is not the reason.", "The mean is correct, just incomplete.", "Not a rule."], "explain": "A tidy mean can hide big differences from bin to bin."}}
```

### Stronger evidence

### Recommendation

### Mean and range

## Practise: differences and spreads

```step
stage: "practise"
insight: "Comparing a difference with a spread, with a review of collecting data."
tasks:
  - {"check": {"type": "number", "q": "Group A mean 52, group B mean 55. How many points higher is B's mean?", "answer": 3, "tolerance": 0, "explain": "55 − 52 = 3."}}
  - {"check": {"type": "question", "q": "Both groups vary by about 30 points. Is a 3-point difference strong evidence?", "options": ["No: it is small next to the spread", "Yes: B is higher", "Yes: 3 is a lot", "Cannot tell: no spread given"], "answer": 0, "feedback": [null, "Higher doesn't mean significantly higher.", "3 is small next to 30.", "The spread was given: about 30."], "explain": "3 out of a spread of 30 is well within variation."}}
  - {"check": {"type": "number", "q": "Review: set 4, 8, 6, 10, 2. What is the range?", "answer": 8, "tolerance": 0, "explain": "10 − 2 = 8."}}
```

### Difference

### Strong or weak

### Review

## Make: one sentence for the school

```step
stage: "make"
insight: "Returning to the audit: size the difference and word the finding, on paper."
check: {"type": "reasoning", "paper": true, "q": "The mean for week 2 is 68.1% and for week 1 is 67.1%, and the bins vary by about 20 points. By how many percentage points is week 2's mean higher? Then write one honest sentence for the school. (The numbers are made up for the task.)", "steps": [["Difference: $68.1 - 67.1 = 1.0$", "subtract"], ["1 point against a spread of about 20", "small next to the spread"]], "answer": "1", "answerLabel": "Percentage points", "tolerance": 0.05, "feedback": [["68.1", "That is week 2's mean. Find the difference."], ["20", "That is the spread."]], "criteria": ["I found the difference.", "I compared it with the spread.", "My sentence says what we found and how sure we are."], "explain": "1 point. For example: \"Week 2's bins were on average 1 point more recyclable than week 1's, but bins differ by about 20 points, so we cannot say recycling has improved. We recommend repeating the audit for four more weeks.\""}
```

Compare your sentence with a classmate's: do they claim more than the evidence allows?

**Also used in**

- **Science fair.** Every conclusion should say how sure the evidence makes you.
- **News.** Good reports say 'a small difference that may be chance'.
- **Next year.** Probability and statistics at Year 10 build on this: more on sampling and on comparing groups.
