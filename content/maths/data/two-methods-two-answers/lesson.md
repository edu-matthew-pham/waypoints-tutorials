---
order: 32
unit: stats9
node: AC9M9ST02 n1
uses: ["AC9M9ST01 n1", "AC9M8ST02 n1"]
connection: canteen-sample
title: "Two samples, two answers"
summary: "Ask the same question of the same school with two different sampling methods and you get two different results. The method, not just the size, decides which to trust."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Ask at the library, or draw names from the roll: do you get the same answer about the canteen?"
---
The canteen wants to know how many of the school's 900 students would buy a hot lunch (made up for the task). Group A asked 30 students in the library at lunchtime; 9 said yes. Group B drew 30 names at random from the school roll; 21 said yes. Have a guess which group is closer to the truth, and we'll come back to it at the end.

## Predict: which is more trustworthy

```step
stage: "predict"
insight: "Choosing between two samples of the same size shows whether students think equal sizes make equal quality."
check: {"type": "predict", "q": "Group A asked 30 students in the library. Group B asked 30 chosen at random from the roll. Which result is more trustworthy for the whole school?", "options": ["Group B: random from the roll", "Group A: it was easier to do", "Both are equally trustworthy: both are 30"], "actual": "Group B. The roll lists everyone, so a random draw gives every student the same chance. Library users are a particular group who may buy less hot lunch."}
```

## Run: compare the results

```step
stage: "run"
insight: "The two samples give very different relative frequencies even though both are 30 students."
check: {"type": "number", "q": "Group A: 9 of 30. Group B: 21 of 30. How much higher, as a decimal, is B's proportion than A's?", "answer": 0.4, "tolerance": 0.005, "explain": "B: 21 ÷ 30 = 0.7. A: 9 ÷ 30 = 0.3. The difference is 0.4."}
```

## Investigate: which method, which answer

```step
stage: "investigate"
insight: "Different methods answer to different groups: a library sample reflects library users, and equal sample sizes do not mean equal quality."
tasks:
  - {"check": {"type": "question", "q": "Why might the library sample give a low proportion who buy hot lunch?", "options": ["Students at the library at lunch are not in the canteen", "The library is quiet", "Students there are older", "The sample is too big"], "answer": 0, "feedback": [null, "Quiet isn't relevant.", "Age isn't the point.", "30 is not too big."], "explain": "Students who spend lunch in the library are the ones less likely to buy lunch, so the sample is not typical."}}
  - {"check": {"type": "number", "q": "Using Group B, what is the estimate of the number of the 900 students who buy hot lunch?", "answer": 630, "tolerance": 0, "explain": "21 ÷ 30 = 0.7 and 0.7 × 900 = 630."}}
  - {"check": {"type": "bug", "code": "working.txt#ben", "text": "Ben compares the two groups. Click the line where he goes wrong.", "answer": 3, "fault": "logic", "misconception": "big-sample-no-bias", "explain": "Line 3: equal size does not mean equal quality. Group A's method leaves out most students, so it is biased no matter how many are asked."}}
```

### Why they differ

```worked
\text{A: } \tfrac{9}{30} = 0.3 :: Library sample.
\text{B: } \tfrac{21}{30} = 0.7 :: Random sample from the roll.
0.7 \times 900 = 630 :: Scale the more trustworthy proportion to the school.
```

### Estimate for the school

### Find the mistake

## Modify: other methods

```step
stage: "modify"
insight: "Matching the method to its likely result."
tasks:
  - {"check": {"type": "question", "q": "Group C asks 30 students in the canteen queue. What is the likely result?", "options": ["A high proportion: the students in the queue are buying lunch", "A low proportion", "The same as the random sample", "Impossible to say"], "answer": 0, "feedback": [null, "The queue is full of buyers.", "Not likely.", "We can say it leans high."], "explain": "People in the queue are there to buy, so C overestimates."}}
  - {"check": {"type": "question", "q": "Which sampling method gives every student the same chance?", "options": ["Random selection from the whole roll", "Asking friends", "Asking one class", "Asking the library group"], "answer": 0, "feedback": [null, "Friends are alike.", "One class is not the school.", "Library users are a subset."], "explain": "A random draw from a full list gives equal chances."}}
  - {"check": {"type": "question", "q": "A random sample of 30 gave 0.7 and another random sample of 30 gave 0.6. What explains the difference?", "options": ["Chance variation between samples", "Bias", "A mistake", "The roll is wrong"], "answer": 0, "feedback": [null, "Both are random, so they aren't biased.", "Random samples vary.", "The roll is the same list."], "explain": "Two fair samples still differ by chance. A bigger sample varies less."}}
```

### Canteen queue

### Equal chances

### Two random samples

## Practise: compare sampling methods

```step
stage: "practise"
insight: "Judging samples and scaling a proportion up, and a review of the mean."
tasks:
  - {"check": {"type": "number", "q": "A random sample of 50 students found 20 walk to school. Estimate how many of the 800 students walk.", "answer": 320, "tolerance": 0, "explain": "20 ÷ 50 = 0.4 and 0.4 × 800 = 320."}}
  - {"check": {"type": "question", "q": "To estimate how many students own a bike, which is the best sample?", "options": ["50 chosen at random from the roll", "50 students at the bike racks", "50 friends", "The first 50 to arrive"], "answer": 0, "feedback": [null, "Bike-rack students own bikes.", "Friends are alike.", "Early arrivers may differ."], "explain": "The random draw from the full roll."}}
  - {"check": {"type": "number", "q": "Review: five values are 4, 8, 6, 10 and 2. What is the mean?", "answer": 6, "tolerance": 0, "explain": "30 ÷ 5 = 6."}}
```

### Scale up

### Best sample

### Review

## Make: how many want hot lunch

```step
stage: "make"
insight: "Returning to the canteen: use the trustworthy sample to answer the canteen's question, on paper."
check: {"type": "reasoning", "paper": true, "q": "The canteen needs to know about how many of the 900 students would buy a hot lunch. Use Group B (21 of 30 chosen at random). (The numbers are made up for the task.)", "steps": [["Proportion: $21 \\div 30 = 0.7$", "from the random sample"], ["Estimate: $0.7 \\times 900 = 630$", "scale to 900"]], "answer": "630", "answerLabel": "Students", "tolerance": 0, "feedback": [["270", "That uses Group A (9 of 30 in the library)."], ["21", "That is the sample count, not the school."]], "criteria": ["I used the random sample.", "I scaled up to 900.", "I said it is only an estimate."], "explain": "About 630. It is an estimate: another random sample of 30 would give a different answer, and a bigger one would be closer."}
```

Write the sentence you would send the canteen, including how the sample was chosen.

**Also used in**

- **Elections and polls.** Pollsters choose carefully so that groups are represented, then report a margin.
- **Quality control.** Sampling items from all across a batch, not just the top of the box.
- **Next lesson.** How a graph's design can steer what you think.
