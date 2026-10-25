---
order: 23
unit: chance9
node: AC9M9P01 n3
uses: ["AC9M9P01 n2", "AC9M8P01 n1"]
connection: name-draw
title: "Every outcome, and the total of 1"
summary: "Give each outcome its probability, then add them up. If the total is not 1, an outcome was missed or counted wrongly."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A bag holds 2 red counters, a blue and a green. Draw two without looking. Can you say the chance of every possible result, and do they add up?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8380
  url: http://127.0.0.1:8380/index.html
  readySelector: "#board"
  layout: full
---
A bag holds 2 red counters, 1 blue and 1 green (made up for the task). Two are drawn one after the other and not put back. Each outcome has a probability, and together they use up all the chance there is: they add to 1.

## Predict: how many outcomes

```step
stage: "predict"
insight: "A count with two reds shows whether students treat the reds as one outcome (9 or fewer) or as different counters (12)."
check: {"type": "predict", "q": "2 red, 1 blue and 1 green counter. Two are drawn without putting back. If you treat each counter as different, how many outcomes are there?", "options": ["12", "9", "6"], "actual": "12. 4 counters for the first, 3 left for the second: 4 × 3 = 12. The two reds are different counters."}
```

## Run: at least one red

```step
stage: "run"
insight: "Counting the outcomes with a red and the outcomes with none shows the two probabilities cover everything."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Choose every outcome where at least one counter is red. Then press Show not A.", "when": "r = 1", "explain": "10 of the 12 outcomes have a red. The 2 left (blue then green, and green then blue) have none: 10/12 + 2/12 = 1."}
```

## Investigate: all outcomes, total 1

```step
stage: "investigate"
insight: "Probabilities of all outcomes add to 1, so the complement and the missing outcomes can be found by subtraction; a total below 1 means something was left out."
tasks:
  - {"check": {"type": "number", "q": "Two reds come out in 2 of the 12 outcomes. How many outcomes have exactly one red?", "answer": 8, "tolerance": 0, "explain": "R1 or R2 with blue or green, in either order: 2 × 2 × 2 = 8. (12 − 2 two-red outcomes − 2 no-red outcomes = 8.)"}}
  - {"check": {"type": "number", "q": "P(two reds) = 1/6 and P(no red) = 1/6. What is P(exactly one red)? (Decimal, 3 places.)", "answer": 0.667, "tolerance": 0.005, "explain": "All three cases cover everything, so they add to 1: 1 − 1/6 − 1/6 = 2/3 ≈ 0.667."}, "smaller": {"check": {"type": "number", "q": "Chances of 2 reds, 1 red and 0 reds are 1/6, ?, 1/6. What do the three have to add to?", "answer": 1, "tolerance": 0, "explain": "They cover every possibility, so 1."}}}
  - {"check": {"type": "bug", "code": "working.txt#lee", "text": "Lee lists the colours that can come out and their probabilities. Click the line that goes wrong.", "answer": 3, "fault": "logic", "misconception": "prob-total-not-one", "explain": "Line 3: probabilities of all the outcomes always add to 1. Lee's total is 10/12, so he left out blue and green (2/12)."}}
```

### Exactly one red

```worked
P(RR) = \tfrac{2}{12},\ P(\text{one red}) = \tfrac{8}{12},\ P(\text{no red}) = \tfrac{2}{12} :: Count the outcomes of each kind.
\tfrac{2}{12} + \tfrac{8}{12} + \tfrac{2}{12} = 1 :: The three kinds cover every outcome.
```

### Check the total

### Find the mistake

## Modify: other events

```step
stage: "modify"
insight: "Different events on the same 12 outcomes still make a pair that adds to 1 with their complement."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#blue", "check": {"type": "board", "text": "Choose every outcome that includes the blue counter.", "when": "r = 1", "explain": "Blue first (3) or blue second (3): 6 of 12."}}
  - {"starter": "b.yml#tworeds", "check": {"type": "board", "text": "Choose every outcome where both counters are red.", "when": "r = 1", "explain": "R1 R2 and R2 R1: 2 of 12 = 1/6."}}
  - {"type": "question", "q": "Which could be the probabilities of every outcome of a chance event?", "options": ["0.2, 0.3, 0.5", "0.2, 0.3, 0.4", "0.5, 0.5, 0.5", "0.6, 0.5, −0.1"], "answer": 0, "feedback": [null, "They add to 0.9: an outcome is missing.", "They add to 1.5.", "A probability can't be negative."], "explain": "They must add to exactly 1, and none can be below 0."}
```

### Blue is in it

### Both red

### Could these work

## Practise: totals and missing outcomes

```step
stage: "practise"
insight: "Using the total of 1 to find a missing probability and to catch a wrong list."
tasks:
  - {"check": {"type": "number", "q": "A spinner has outcomes with probabilities 0.1, 0.25 and 0.4, and a fourth outcome. What is the fourth probability?", "answer": 0.25, "tolerance": 0.005, "explain": "0.1 + 0.25 + 0.4 = 0.75, so the fourth is 1 − 0.75 = 0.25."}}
  - {"check": {"type": "question", "q": "A student's list of probabilities adds to 1.2. What does that tell you?", "options": ["Some probability is counted too much", "An outcome is missing", "It is correct", "The event is certain"], "answer": 0, "feedback": [null, "A missing outcome would make the total less than 1.", "Probabilities of all outcomes add to exactly 1.", "Certain means one outcome has probability 1."], "explain": "The total of all outcomes can't pass 1, so something is counted twice or too big."}}
  - {"check": {"type": "number", "q": "Review: 3 mains and 4 drinks. How many meal deals?", "answer": 12, "tolerance": 0, "explain": "3 × 4 = 12."}}
```

### The fourth outcome

### A total of 1.2

### Review

## Make: three names in the hat

```step
stage: "make"
insight: "Returning to the name draw: list every outcome with its probability and prove the total is 1, on paper."
check: {"type": "reasoning", "paper": true, "q": "Ana, Ben and Cai are in a hat. Two names are drawn for two jobs and the first is not put back. List the outcomes, give each its probability, and find P(Ana gets a job). (Decimal, 3 places.)", "steps": [["Outcomes: $3 \\times 2 = 6$", "AB, AC, BA, BC, CA, CB"], ["Each has probability $\\tfrac{1}{6}$; six of them add to 1", "check the total"], ["Ana is in AB, AC, BA, CA: $4 \\div 6 = 0.667$", "count the outcomes with Ana"]], "answer": "0.667", "answerLabel": "P(Ana gets a job)", "tolerance": 0.005, "feedback": [["0.5", "That is 3 of 6. Count AB, AC, BA, CA."], ["0.333", "That is the chance she gets the first job only."]], "criteria": ["I listed all 6 outcomes.", "I checked they add to 1.", "I counted outcomes with Ana."], "explain": "4 of the 6 outcomes include Ana: 4/6 ≈ 0.667. Not drawn: 2 of 6 (BC and CB). 4/6 + 2/6 = 1."}
```

Check: P(Ana gets a job) plus P(Ana does not) is 1.

**Also used in**

- **Insurance and games.** Odds are set so that every outcome's chance is accounted for and the total is exactly 1.
- **Checking your work.** A total that is not 1 is the quick sign that an outcome was missed.
- **Next lesson.** Using records of what happened to estimate probabilities.
