---
order: 29
unit: chance9
node: AC9M9P03 n3
uses: ["AC9M9P03 n2", "AC9M9P02 n1"]
connection: few-reviews
title: "Why real results differ"
summary: "Small groups of trials vary a lot, a simulation leaves things out, and a real season is only a short run; describe the results, compare with the theory and explain the gap."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The simulation says she scores all five about a third of the time. In real shootouts she did it 3 times in 10. Is the simulation wrong?"
---
Five groups each simulated 50 two-kick tries for the 80% striker (made up for the task) and recorded how many were two goals in a row: 29, 33, 35, 31 and 32. The counted probability is 0.64. Have a guess whether all five groups got close to 0.64, and we'll come back to it at the end.

## Predict: group by group

```step
stage: "predict"
insight: "Guessing how the group results spread around 32 of 50 shows whether students expect every group to be exactly 32 or to vary."
check: {"type": "predict", "q": "Each group runs 50 trials. With P = 0.64, 32 two-goal tries are expected per group. What will the five groups' results look like?", "options": ["Spread around 32, some above and some below", "All exactly 32", "All below 32"], "actual": "Spread around 32, some above and some below: chance variation. Here they were 29, 33, 35, 31 and 32."}
```

## Run: pool the groups

```step
stage: "run"
insight: "Pooling the five groups gives 250 trials, and the pooled relative frequency sits very close to the counted probability."
check: {"type": "number", "q": "All five groups together: 29 + 33 + 35 + 31 + 32 = 160 two-goal tries in 250 trials. What is the pooled relative frequency (a decimal)?", "answer": 0.64, "tolerance": 0.005, "explain": "160 ÷ 250 = 0.64."}
```

## Investigate: variation and models

```step
stage: "investigate"
insight: "Small groups vary, pooling steadies the result, and a gap between a real season and a simulation can come from chance or from what the model leaves out."
tasks:
  - {"check": {"type": "number", "q": "The five groups' relative frequencies ranged from 29/50 = 0.58 to 35/50 = 0.70. What is the range (a decimal)?", "answer": 0.12, "tolerance": 0.005, "explain": "0.70 − 0.58 = 0.12."}}
  - {"check": {"type": "question", "q": "Which is NOT a good reason for a real season to differ from the simulation?", "options": ["The simulation is always wrong", "A real season is a short run of trials, so chance varies", "Pressure may change how well the striker plays", "The scoring rate used might be a bit off"], "answer": 0, "feedback": [null, "This is a real reason.", "This is something the model leaves out.", "This is a real reason."], "explain": "A simulation is not always wrong: it is a model. Differences come from chance, from what the model leaves out and from the numbers fed into it."}}
  - {"check": {"type": "bug", "code": "working.txt#ivy", "text": "Ivy compares one group with the theory. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "sim-too-few", "explain": "Line 2: 29/50 = 0.58 is within the normal spread of 50 trials. One group can't show the model is wrong. Pool the groups: 160/250 = 0.64."}}
```

### The spread

```worked
0.58,\ 0.66,\ 0.70,\ 0.62,\ 0.64 :: Group results vary by chance.
\tfrac{160}{250} = 0.64 :: Pool them: more trials, steadier.
\text{real season: } 3 \text{ in } 10 = 0.3 :: A short run, so it varies a lot.
```

### Reasons for a gap

### Find the mistake

## Modify: judge the claims

```step
stage: "modify"
insight: "Judging claims about differences between results and a model by the number of trials and what the model leaves out."
tasks:
  - {"check": {"type": "question", "q": "A real striker scored all five penalties in 3 of 10 shootouts. The model says about 0.33. What is the best statement?", "options": ["The difference is small and 10 shootouts is a short run", "The model is clearly wrong", "The striker is cheating", "The model is exactly right"], "answer": 0, "feedback": [null, "3 of 10 is 0.3, close to 0.33.", "There is no reason to think so.", "It is 0.3 against 0.33: close, but not identical."], "explain": "0.3 against 0.33 is close, and ten shootouts is very few trials."}}
  - {"check": {"type": "question", "q": "After 20 trials the simulated relative frequency is 0.5; after 2000 it is 0.63. Which would you rely on?", "options": ["The 2000 trials", "The 20 trials", "Both equally", "Neither"], "answer": 0, "feedback": [null, "20 trials vary a great deal.", "More trials are steadier.", "The longer run is useful."], "explain": "The longer run. The more trials, the closer a simulation tends to settle to the true probability."}}
  - {"type": "question", "q": "What does the striker simulation leave out?", "options": ["Pressure, tiredness and the goalkeeper", "The number of kicks", "The scoring rate", "Nothing: it is exact"], "answer": 0, "feedback": [null, "The number of kicks is in the model.", "The scoring rate is the model's main input.", "Models always leave something out."], "explain": "Real kicks are affected by pressure, tiredness and the goalkeeper's choices. A simulation uses one fixed rate."}
```

### 3 in 10

### 20 or 2000

### What is left out

## Practise: describe and compare

```step
stage: "practise"
insight: "Describing results with the numbers and comparing them with the model, and a review."
tasks:
  - {"check": {"type": "number", "q": "Four groups got 18, 22, 20 and 24 successes in 40 trials each. What is the pooled relative frequency (a decimal)? ", "answer": 0.525, "tolerance": 0.005, "explain": "84 ÷ 160 = 0.525."}}
  - {"check": {"type": "number", "q": "The counted probability is 0.5. The pooled result is 0.525. By how much do they differ?", "answer": 0.025, "tolerance": 0.001, "explain": "0.525 − 0.5 = 0.025."}}
  - {"check": {"type": "number", "q": "Review: a spinner has 3 equal sectors, one red. It is spun twice. How many of 9 pairs are red then not-red?", "answer": 2, "tolerance": 0, "explain": "Red then one of the other two: 1 × 2 = 2."}}
```

### Pool the groups

### The gap

### Review

## Make: season against model

```step
stage: "make"
insight: "Returning to the shootouts: describe a real season against the model, with a number for the gap."
check: {"type": "reasoning", "paper": true, "q": "The model says the striker scores all five in a shootout with probability 0.8⁵ ≈ 0.328. In real shootouts she scored all five in 3 of 10 (made up). Find the difference between the model and the real relative frequency (a decimal to 3 places), then name one thing the model leaves out. (The numbers are made up for the task.)", "steps": [["Real relative frequency: $3 \\div 10 = 0.3$", "times over trials"], ["Difference: $0.328 - 0.3 = 0.028$", "subtract"], ["Ten shootouts is a short run; the model ignores pressure", "explain the gap"]], "answer": "0.028", "answerLabel": "Difference", "tolerance": 0.003, "feedback": [["0.3", "That is the real result. Find how far it is from 0.328."], ["0.328", "That is the model's value."]], "criteria": ["I found both relative frequencies.", "I gave the gap as a number.", "I named something the model leaves out."], "explain": "0.028 is a small gap for only ten shootouts. Chance variation is likely enough on its own; pressure, tiredness and the goalkeeper are also left out of the model."}
```

Would you change your mind about the model after 10 more shootouts?

**Also used in**

- **Climate and disease models.** They are checked by how well they agree with records, and corrected for what they left out.
- **Reviews and ratings.** A product with 3 reviews can look perfect or terrible by chance; 3000 reviews settle down.
- **Next lesson.** Statistics: where did a number come from?
