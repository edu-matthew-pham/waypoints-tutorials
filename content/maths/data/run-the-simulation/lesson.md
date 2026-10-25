---
order: 28
unit: chance9
node: AC9M9P03 n2
uses: ["AC9M9P03 n1", "AC9M9P01 n1"]
connection: penalty-shootout
title: "Run it a thousand times"
summary: "A computer can run a simulation of two kicks a thousand times. Compare the relative frequency of one kick and of two goals in a row with what counting predicts."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "If she scores 4 in 5, how often does she score two in a row? Run it and see."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8382
  url: http://127.0.0.1:8382/index.html
  readySelector: "#board"
  layout: full
---
Today the board simulates two kicks at a time for the striker who scores 4 in 5 (made up for the task). The five outcomes on each kick are four goals and a miss, all equally likely. Have a guess how often both kicks are goals, and we'll come back to it at the end.

## Predict: two in a row

```step
stage: "predict"
insight: "Estimating two goals in a row from 0.8 shows whether students say 0.8 again or something smaller."
check: {"type": "predict", "q": "She scores 80% of kicks. Roughly how often do you expect two goals in a row?", "options": ["About 64%", "About 80%", "About 160%"], "actual": "About 64%. Counting the 25 equally likely pairs, 16 are two goals: 16/25 = 0.64."}
```

## Run: 1000 trials

```step
stage: "run"
insight: "Running 1000 trials brings the relative frequency of two goals close to the counted 16/25 = 0.64."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Choose every pair where both kicks are goals, then press Run 1000. Does the relative frequency end near the probability?", "when": "u >= 1000 and e < 0.05", "explain": "After 1000 trials the relative frequency is within 0.05 of 16/25 = 0.64."}
```

## Investigate: simulated or counted

```step
stage: "investigate"
insight: "A simulation gives a relative frequency that varies; counting gives the exact probability, and the two agree better the more trials you run."
tasks:
  - {"check": {"type": "number", "q": "Counting the grid: how many of the 25 pairs are two goals?", "answer": 16, "tolerance": 0, "explain": "4 × 4 = 16 pairs."}, "smaller": {"check": {"type": "number", "q": "How many goal outcomes does the first kick have, out of 5?", "answer": 4, "tolerance": 0, "explain": "4 goals and 1 miss."}}}
  - {"check": {"type": "question", "q": "Which is closer to the counted probability 0.64?", "options": ["A relative frequency after 1000 trials", "A relative frequency after 10 trials", "They are equally close", "Neither: a simulation never gets near"], "answer": 0, "feedback": [null, "10 trials jump about a lot.", "More trials usually mean closer.", "With enough trials it gets very near."], "explain": "More trials give a steadier relative frequency. Ten trials can easily be 0.5 or 0.8."}}
  - {"check": {"type": "bug", "code": "working.txt#mia", "text": "Mia runs 20 trials. Click the line where she goes wrong.", "answer": 3, "fault": "logic", "misconception": "sim-too-few", "explain": "Line 3: 20 trials is too few. A relative frequency from 20 trials varies a lot (11 of 20 could easily be 16 of 25 in disguise). Run many more and compare again."}}
```

### Count the pairs

```worked
25 \text{ pairs},\ 16 \text{ with two goals} :: Count the grid.
P(\text{two goals}) = \tfrac{16}{25} = 0.64 :: Favourable over all.
\text{run 1000 trials} \to \approx 0.64 :: The simulation should agree, give or take.
```

### More or fewer trials

### Find the mistake

## Modify: other strikers

```step
stage: "modify"
insight: "Different scoring rates change the grid and the simulated result."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#six", "check": {"type": "board", "text": "A weaker striker scores 3 in 5. Choose every pair where both kicks are goals and run 1000 trials.", "when": "u >= 1000 and e < 0.05", "explain": "3 × 3 = 9 of 25 pairs: 0.36. The simulation lands near it."}}
  - {"starter": "b.yml#miss", "check": {"type": "board", "text": "The striker scores 4 in 5. Choose every pair where at least one kick is a miss and run 1000 trials.", "when": "u >= 1000 and e < 0.05", "explain": "25 − 16 = 9 pairs have a miss: 0.36."}}
  - {"type": "question", "q": "A simulation of 1000 trials gives 0.652 and counting gives 0.64. What is the best conclusion?", "options": ["They agree closely; the small gap is chance variation", "The counting is wrong", "The simulation is wrong", "They must match exactly"], "answer": 0, "feedback": [null, "0.012 apart is well within normal variation.", "The same.", "Simulations vary around the true value."], "explain": "Results of a simulation vary around the true value. 0.652 vs 0.64 is a small difference at 1000 trials."}
```

### Weaker striker

### At least one miss

### Close enough

## Practise: compare and count

```step
stage: "practise"
insight: "Counting favourable pairs and judging a simulation against them."
tasks:
  - {"check": {"type": "number", "q": "A spinner has 3 equal sectors, one of them red. It is spun twice. How many of the 9 pairs are red then red?", "answer": 1, "tolerance": 0, "explain": "Only one: red on the first and red on the second."}}
  - {"check": {"type": "number", "q": "1000 simulated trials gave 'both goals' 630 times. What is the relative frequency (a decimal)?", "answer": 0.63, "tolerance": 0.0005, "explain": "630 ÷ 1000 = 0.63."}}
  - {"check": {"type": "number", "q": "Review: of 40 days, it rained on 14 and the bus was late on 14, with 10 days both. How many days were late or rainy?", "answer": 18, "tolerance": 0, "explain": "14 + 14 − 10 = 18."}}
```

### Red then red

### Relative frequency

### Review

## Make: compare with the count

```step
stage: "make"
insight: "Returning to the shootout: how far a simulated result sits from the counted one, on paper."
check: {"type": "reasoning", "paper": true, "q": "A simulation of 1000 two-kick tries gave 'both goals' 628 times. Counting gives 16/25 = 0.64. How far apart are the relative frequency and 0.64? (Give the difference as a decimal.) (The numbers are made up for the task.)", "steps": [["Relative frequency: $628 \\div 1000 = 0.628$", "times over trials"], ["Difference: $0.64 - 0.628 = 0.012$", "subtract"]], "answer": "0.012", "answerLabel": "Difference", "tolerance": 0.001, "feedback": [["0.628", "That is the simulation. Find how far it is from 0.64."], ["0.64", "That is the counted value."]], "criteria": ["I found the relative frequency first.", "I compared it with 0.64.", "I said whether it is close."], "explain": "0.012 apart: close, as expected for 1000 trials."}
```

Is 0.012 close? Compare it with how far 11 of 20 (0.55) is from 0.64.

**Also used in**

- **Medicine and engineering.** Computers simulate thousands of tests before anything is built or tried on people.
- **Games.** Designers simulate a million rounds to check a game is fair.
- **Next lesson.** Why real results still differ from a simulation.
