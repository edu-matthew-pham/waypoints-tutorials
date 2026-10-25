---
order: 39
unit: stats9
node: AC9M9ST05 n1
uses: ["AC9M9ST01 n1", "AC9M9ST04 n2"]
connection: recycling-audit
title: "Planning: is the recycling working?"
summary: "Turn a worry into a statistical question, decide what to measure and where, when and how often to sample, and plan ahead for what could skew the data."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Is the school's recycling working? What would you need to know?"
---
The school has recycling bins, but are students using them properly? You want to find how much of what goes into the recycling bins is actually recyclable. Before collecting anything, plan: what exactly will you ask, which bins and days will you sample, and what could skew the data? Have a guess how many bins you would need to check, and we'll come back to it at the end.

## Predict: which question

```step
stage: "predict"
insight: "Choosing the best question shows whether students pick one that can be answered with data the school can collect."
check: {"type": "predict", "q": "Which is the best statistical question for the recycling investigation?", "options": ["What percentage of the contents of the school recycling bins is recyclable?", "Is recycling good?", "Do people like bins?"], "actual": "The first. It can be answered by sorting and weighing what is in the bins, and the school can act on the answer."}
```

## Run: what to measure

```step
stage: "run"
insight: "A plan names the variable to measure and how: here the percentage of each bin's contents that is recyclable."
check: {"type": "question", "q": "What should you measure in each bin?", "options": ["The percentage of its contents that is recyclable", "How heavy the bin is", "What colour the bin is", "How full the bin is"], "answer": 0, "feedback": [null, "Weight alone doesn't say how much is recyclable.", "Colour is irrelevant.", "How full tells you little about the contents."], "explain": "The percentage that is recyclable, found by sorting the bin's contents."}
```

## Investigate: sample and skew

```step
stage: "investigate"
insight: "A good plan samples bins across places and days so it does not just capture one unusual day or place; a plan must also say how to avoid bias."
tasks:
  - {"check": {"type": "number", "q": "You will sort 5 bins from different places each day for 5 days. How many bins is that in all?", "answer": 25, "tolerance": 0, "explain": "5 × 5 = 25 bins."}, "smaller": {"check": {"type": "number", "q": "5 bins each day for 2 days. How many bins is that?", "answer": 10, "tolerance": 0, "explain": "5 × 2 = 10."}}}
  - {"check": {"type": "question", "q": "Which choice of days gives the fairest picture?", "options": ["Five ordinary school days across a week", "Only the day after the school fair", "Only Fridays", "Only the day with the best weather"], "answer": 0, "feedback": [null, "A fair day is not typical.", "Fridays may differ from other days.", "Weather could skew who is outside."], "explain": "Ordinary days spread across the week. Special days skew the data."}}
  - {"check": {"type": "bug", "code": "working.txt#zed", "text": "Zed plans the sampling. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "one-day-represents", "explain": "Line 2: one unusual day (with an event) is not typical. Sample over several ordinary days and different places."}}
```

### How many bins

```worked
\text{question: what \% of recycling bin contents is recyclable?} :: A question data can answer.
5 \text{ bins} \times 5 \text{ days} = 25 :: A sampling plan.
\text{ordinary days, different places} :: Avoid skew.
```

### Which days

### Find the mistake

## Modify: improve the plan

```step
stage: "modify"
insight: "Judging plans and fixing weak ones."
tasks:
  - {"check": {"type": "question", "q": "Which is a weakness in a plan that only checks the bins outside the canteen?", "options": ["Bins elsewhere may be used differently", "It is cheap", "It is easy", "It is quick"], "answer": 0, "feedback": [null, "Cheap is not a weakness.", "Easy is not a weakness.", "Quick is not a weakness."], "explain": "Different places may have different habits, so sample across the school."}}
  - {"check": {"type": "question", "q": "How could you reduce the chance that people change their behaviour because they know the bins are being checked?", "options": ["Check without announcing which days", "Tell everyone the exact day", "Only check the bins on a Friday", "Check one bin"], "answer": 0, "feedback": [null, "That changes how they behave on that day.", "Fridays may differ.", "One bin is too few."], "explain": "Unannounced checks reduce the effect of being watched."}}
  - {"check": {"type": "question", "q": "To make a result more trustworthy you should...", "options": ["Check more bins over more days", "Check fewer bins", "Pick the cleanest bins", "Skip the dirty bins"], "answer": 0, "feedback": [null, "Fewer bins vary more.", "That is biased.", "That is biased."], "explain": "More bins and days steady the estimate; choose them fairly."}}
```

### Weak plan

### Being watched

### More data

## Practise: plan numbers

```step
stage: "practise"
insight: "Counting bins and time, with a review of choosing displays."
tasks:
  - {"check": {"type": "number", "q": "6 bins a day for 4 days. How many bins in all?", "answer": 24, "tolerance": 0, "explain": "6 × 4 = 24."}}
  - {"check": {"type": "number", "q": "Sorting each bin takes 5 minutes. How many minutes for 24 bins?", "answer": 120, "tolerance": 0, "explain": "24 × 5 = 120."}}
  - {"check": {"type": "question", "q": "Review: for the percentage recyclable in each bin, which display suits the results?", "options": ["A dot plot or histogram", "A pie of days", "A line of bin colours", "A table of names"], "answer": 0, "feedback": [null, "Days are not parts of a whole.", "Colours are not data.", "Names are not data."], "explain": "A dot plot or histogram shows the spread of percentages."}}
```

### Bins in all

### Sorting time

### Review

## Make: the sorting rota

```step
stage: "make"
insight: "Returning to the audit: work out how long the sorting plan takes, on paper."
check: {"type": "reasoning", "paper": true, "q": "Your plan is 5 bins a day for 5 school days, and each bin takes 4 minutes to sort. How many minutes of sorting is that in all? (The numbers are made up for the task.)", "steps": [["Bins: $5 \\times 5 = 25$", "bins in all"], ["Time: $25 \\times 4 = 100$", "minutes"]], "answer": "100", "answerLabel": "Minutes", "tolerance": 0, "feedback": [["25", "That is the number of bins. Multiply by the 4 minutes each."], ["20", "That is 5 × 4: one day's worth."]], "criteria": ["I counted the bins first.", "I multiplied by the time per bin.", "I thought about whether the days are typical."], "explain": "100 minutes (a bit over an hour and a half) across the week. If that is too long, cut the number of bins per day, not the number of days."}
```

Write the plan in three lines: the question, the sample, and one thing that could skew it.

**Also used in**

- **Science.** Planning a fair test is the same: what to measure, how many, and what could skew.
- **Business.** A shop plans how many customers to survey and at what times.
- **Next lesson.** Collecting the data and analysing it.
