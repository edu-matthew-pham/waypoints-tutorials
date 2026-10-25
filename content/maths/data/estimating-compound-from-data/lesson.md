---
order: 26
unit: chance9
node: AC9M9P02 n3
uses: ["AC9M9P02 n1", "AC9M9P02 n2"]
connection: bus-lateness
title: "Late and rainy: estimating \"and\" and \"or\""
summary: "A table of what happened on 40 days gives estimates for \"late and rainy\", \"late or rainy\" and \"late on a dry day\", and lets you predict how many days to expect."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Is the bus more often late on rainy days, and how often is it both?"
---
Over 40 school days a class recorded whether it rained and whether the bus was late (made up for the task). It rained on 14 days. On 10 of those the bus was late. On the 26 dry days the bus was late on 4. Have a guess how often a day is both late and rainy, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A table: rain and late 10, rain and on time 4, dry and late 4, dry and on time 22"><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><text x="20" y="30" fill="currentColor" stroke="none">          Late    On time</text><text x="20" y="60" fill="currentColor" stroke="none">Rain      10        4</text><text x="20" y="90" fill="currentColor" stroke="none">Dry         4       22</text><text x="20" y="125" fill="currentColor" stroke="none">40 school days (made up)</text></svg></figure>

## Predict: late and rainy

```step
stage: "predict"
insight: "Picking the share for \"late and rainy\" shows whether students use the late days (14), the rainy days (14) or the days that are both (10)."
check: {"type": "predict", "q": "From the table, what fraction of all 40 days were both late and rainy?", "options": ["10/40", "14/40", "10/14"], "actual": "10/40. The 10 days that were both, out of all 40 days."}
```

## Run: read the table

```step
stage: "run"
insight: "Each estimate is a count from the table over the 40 days."
check: {"type": "number", "q": "What is the relative frequency of a day that was both late and rainy (a decimal)?", "answer": 0.25, "tolerance": 0.005, "explain": "10 ÷ 40 = 0.25."}
```

## Investigate: and, or and not

```step
stage: "investigate"
insight: "\"And\" is one cell, \"or\" is three cells (not four added), and \"dry and late\" is another cell; the same table answers all of them."
tasks:
  - {"check": {"type": "number", "q": "How many days were late or rainy (or both)?", "answer": 18, "tolerance": 0, "explain": "10 + 4 + 4 = 18 days (all except the 22 dry and on-time days)."}, "smaller": {"check": {"type": "number", "q": "How many days were neither late nor rainy?", "answer": 22, "tolerance": 0, "explain": "The dry and on-time cell: 22."}}}
  - {"check": {"type": "number", "q": "What is the relative frequency of late or rainy (a decimal)?", "answer": 0.45, "tolerance": 0.005, "explain": "18 ÷ 40 = 0.45."}}
  - {"check": {"type": "bug", "code": "working.txt#kim", "text": "Kim estimates the chance a day is late or rainy. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "or-double-count", "explain": "Line 2: the 10 days that were both are in the late total and in the rainy total. Adding 14 + 14 counts them twice. Late or rainy = 14 + 14 − 10 = 18 days."}}
```

### Count the days

```worked
\text{late and rainy} = 10 :: One cell of the table.
\text{late or rainy} = 14 + 14 - 10 = 18 :: Add, then take off the overlap once.
\tfrac{18}{40} = 0.45 :: Relative frequency of "late or rainy".
```

### Make it a probability

### Find the mistake

## Modify: other questions from the table

```step
stage: "modify"
insight: "Other cells and combinations from the same record, then a prediction."
tasks:
  - {"check": {"type": "number", "q": "What is the relative frequency of a day that is dry and late (a decimal)?", "answer": 0.1, "tolerance": 0.005, "explain": "4 ÷ 40 = 0.1."}}
  - {"check": {"type": "number", "q": "About how many days in the next 100 would you expect to be late and rainy?", "answer": 25, "tolerance": 0, "explain": "0.25 × 100 = 25."}}
  - {"check": {"type": "question", "q": "Of the 14 rainy days, the bus was late on 10. Of the 26 dry days, it was late on 4. What does this suggest?", "options": ["Late buses are much more common on rainy days", "Rain makes no difference", "Late buses are more common on dry days", "Nothing: 40 days is too many to tell"], "answer": 0, "feedback": [null, "10 of 14 is far higher than 4 of 26.", "4 of 26 is much lower.", "40 days is a short record but enough to see a clear difference."], "explain": "10 of 14 (about 71%) against 4 of 26 (about 15%) is a big difference. It is still an estimate from one 40-day record."}}
```

### Dry and late

### Predict

### What it suggests

## Practise: estimates from a table

```step
stage: "practise"
insight: "Estimates from a different two-way record, and a review of \"and\" and \"or\"."
tasks:
  - {"check": {"type": "number", "q": "Students: 6 walk and play sport, 9 walk and do not play sport, 4 do not walk and play sport, 11 do neither. What is the relative frequency of walks and plays sport (a decimal)? (Made up.)", "answer": 0.2, "tolerance": 0.005, "explain": "6 ÷ 30 = 0.2."}}
  - {"check": {"type": "number", "q": "In the same group, how many walk or play sport (or both)?", "answer": 19, "tolerance": 0, "explain": "6 + 9 + 4 = 19."}}
  - {"check": {"type": "number", "q": "Review: 20 play A, 15 play B, 5 play both. How many play A or B?", "answer": 30, "tolerance": 0, "explain": "20 + 15 − 5 = 30."}}
```

### Walks and plays sport

### Walks or plays sport

### Review

## Make: another day type

```step
stage: "make"
insight: "Returning to the bus: use the table to estimate and predict a different combination."
check: {"type": "reasoning", "paper": true, "q": "Use the table (rain and late 10, rain and on time 4, dry and late 4, dry and on time 22). About how many days of the next 100 would you expect to be dry and late? (The numbers are made up for the task.)", "steps": [["Dry and late: $4$ of $40$ days", "one cell"], ["$4 \\div 40 = 0.1$", "relative frequency"], ["$0.1 \\times 100 = 10$", "predict"]], "answer": "10", "answerLabel": "Expected days", "tolerance": 0, "feedback": [["4", "That is the number in the 40-day record. Scale it to 100 days."], ["25", "That is late and rainy."]], "criteria": ["I read the right cell.", "I divided by 40.", "I scaled up to 100."], "explain": "0.1 × 100 = 10 days, about. It is an estimate, so the real number will vary."}
```

Would you trust this estimate more or less than one from a year of records?

**Also used in**

- **Health studies.** Tables of "exposed and ill", "exposed and well" and so on are how risks are estimated.
- **Business.** A shop records "sale and special offer" against "sale and no offer".
- **Next lesson.** Simulating something you cannot easily repeat.
