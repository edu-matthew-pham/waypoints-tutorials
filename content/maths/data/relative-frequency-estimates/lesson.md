---
order: 24
unit: chance9
node: AC9M9P02 n1
uses: ["AC9M9P01 n3", "AC9M8P03 n2"]
connection: bus-lateness
title: "Records as probabilities"
summary: "When you cannot count outcomes, a record of what happened gives an estimate: the relative frequency. More records give a steadier estimate."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The 8:05 bus has been late on some days. How likely is it to be late tomorrow?"
---
There is no way to list the outcomes of a bus ride, but there is a record. Over the last 40 school days the 8:05 bus was late on 8 of them (made up for the task). Have a guess how likely it is to be late tomorrow, and we'll come back to it at the end.

## Predict: an estimate

```step
stage: "predict"
insight: "Estimating the chance of a late bus from 8 late days in 40 shows whether students give the count, the share, or the share of the wrong thing."
check: {"type": "predict", "q": "The bus was late on 8 of the last 40 school days. What is the best estimate of the probability it is late tomorrow?", "options": ["0.2", "8", "0.8"], "actual": "0.2. Relative frequency = times it happened ÷ number of days = 8 ÷ 40 = 0.2."}
```

## Run: relative frequency

```step
stage: "run"
insight: "Dividing the number of late days by the number of days gives the same kind of number as P = favourable ÷ all."
check: {"type": "number", "q": "The bus was late on 12 of 40 days. What is the relative frequency of a late bus (a decimal)?", "answer": 0.3, "tolerance": 0.005, "explain": "12 ÷ 40 = 0.3."}
```

## Investigate: how good is the estimate

```step
stage: "investigate"
insight: "A relative frequency is an estimate, not an exact probability; more records steady it, and a short run can be far off."
tasks:
  - {"check": {"type": "number", "q": "The bus was late on 15 of 60 days. What is the relative frequency (a decimal)?", "answer": 0.25, "tolerance": 0.005, "explain": "15 ÷ 60 = 0.25."}}
  - {"check": {"type": "question", "q": "Which estimate of the chance of a late bus can you trust most?", "options": ["Late on 80 of 400 days", "Late on 2 of 5 days", "Late on 1 of 2 days", "They are equally good"], "answer": 0, "feedback": [null, "5 days is a very short record; one more day could change it a lot.", "2 days is far too few.", "A longer record settles down; short ones jump about."], "explain": "The longer record. Relative frequencies from lots of trials are steadier."}}
  - {"check": {"type": "bug", "code": "working.txt#tess", "text": "Tess uses her first 5 days of records. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "estimate-is-exact", "explain": "Line 2: a relative frequency from 5 days is only an estimate. The real chance could be quite different, and in 100 days the number of late days will only be about 40, not exactly 40."}}
```

### Work it out

```worked
\text{late on 8 of 40 days} :: The record.
\tfrac{8}{40} = 0.2 :: Relative frequency = times it happened ÷ number of trials.
0.2 \times 50 = 10 :: In 50 more days, expect about 10 late.
```

### Trust the estimate

### Find the mistake

## Modify: change the record

```step
stage: "modify"
insight: "Changing the record changes the estimate; using it to predict gives an expected count, not an exact one."
tasks:
  - {"check": {"type": "number", "q": "The bus was late on 18 of 90 days. What is the relative frequency (a decimal)?", "answer": 0.2, "tolerance": 0.005, "explain": "18 ÷ 90 = 0.2."}}
  - {"check": {"type": "number", "q": "The chance of a late bus is estimated at 0.2. About how many late days do you expect in the next 50 days?", "answer": 10, "tolerance": 0, "explain": "0.2 × 50 = 10. It is an expectation, not a promise."}}
  - {"check": {"type": "question", "q": "After 10 more days the record is late on 11 of 50. The old estimate was 8 of 40. What should you do?", "options": ["Use all 50 days: 11 ÷ 50 = 0.22", "Throw the old record away", "Use only the new 10 days", "Average the two answers 0.2 and 0.1"], "answer": 0, "feedback": [null, "More data is better, so keep it.", "The new 10 days are only a short run.", "Averaging two fractions with different totals gives the wrong weight."], "explain": "Combine them: more trials make a steadier estimate."}}
```

### Another record

### Predict a count

### New days arrive

## Practise: estimating from records

```step
stage: "practise"
insight: "Relative frequencies and expected counts from records, plus a review of putting back."
tasks:
  - {"check": {"type": "number", "q": "A shop sells 63 of its 300 phones in a month on credit. What is the relative frequency of a credit sale (a decimal)? (Made up for the task.)", "answer": 0.21, "tolerance": 0.005, "explain": "63 ÷ 300 = 0.21."}}
  - {"check": {"type": "number", "q": "A machine's records give P(faulty) = 0.03. About how many faulty items in the next 1000?", "answer": 30, "tolerance": 0, "explain": "0.03 × 1000 = 30."}}
  - {"check": {"type": "number", "q": "Review: 6 names in a hat, two drawn in order with no put-back. How many outcomes?", "answer": 30, "tolerance": 0, "explain": "6 × 5 = 30."}}
```

### Credit sales

### Faulty items

### Review

## Make: tomorrow's bus

```step
stage: "make"
insight: "Returning to the opening: three weeks of records turned into an estimate and a prediction, on paper."
check: {"type": "reasoning", "paper": true, "q": "Over the last 15 school days the bus was late on 4 of them. Estimate the probability it is late tomorrow, as a decimal to 3 places. (The numbers are made up for the task.)", "steps": [["Relative frequency: $4 \\div 15$", "times it happened over trials"], ["$= 0.267$", "divide"]], "answer": "0.267", "answerLabel": "Estimated probability", "tolerance": 0.005, "feedback": [["4", "That is the count. Divide by the 15 days."], ["0.8", "That is 4 out of 5. There are 15 days."]], "criteria": ["I divided by the total number of days.", "I said it is an estimate.", "I could use it for an expected count."], "explain": "4 ÷ 15 ≈ 0.267. In the next 30 days, expect about 8 late days. A longer record would give a steadier estimate."}
```

Predict: in the next 30 school days, about how many late days do you expect?

**Also used in**

- **Weather forecasts.** "30% chance of rain" comes from how often it rained on past days that looked like this one.
- **Sport.** A goalkeeper's save rate is a relative frequency from past shots.
- **Next lesson.** "And" and "or" with a Venn diagram.
