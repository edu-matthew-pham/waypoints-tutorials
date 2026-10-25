---
order: 27
unit: chance9
node: AC9M9P03 n1
uses: ["AC9M8P03 n1", "AC9M9P01 n1"]
connection: penalty-shootout
title: "Designing a simulation"
summary: "To simulate something you cannot repeat, match each outcome to a share of random digits, decide what one trial is, and plan how many trials to run."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A striker scores 4 penalties in 5. How often would she score all five in a shootout?"
---
A striker scores about 4 of every 5 penalties (made up for the task). A shootout is 5 kicks. You cannot ask her to take thousands of shootouts, so you simulate: use random digits in place of kicks. Have a guess how often she scores all five, and we'll come back to it at the end.

## Predict: which digits are goals

```step
stage: "predict"
insight: "Choosing digits for an 80% scorer shows whether students match the share (8 of 10 digits) rather than the count (4)."
check: {"type": "predict", "q": "A random digit from 0 to 9 stands for one kick. The striker scores 80% of the time. Which digits should mean \"goal\"?", "options": ["0 to 7 (8 digits)", "0 to 3 (4 digits)", "0 to 9 (all 10)"], "actual": "0 to 7. Eight of the ten digits are 80% of the digits, and every digit is equally likely."}
```

## Run: share of digits

```step
stage: "run"
insight: "A rule that gives each outcome the right share of digits is what makes a simulation fair to the real thing."
check: {"type": "number", "q": "A player scores 60% of the time. How many of the 10 digits 0 to 9 should stand for a goal?", "answer": 6, "tolerance": 0, "explain": "60% of 10 digits is 6."}
```

## Investigate: trial, record, repeat

```step
stage: "investigate"
insight: "A simulation has a rule for each outcome, a definition of one trial, and many repeats; a wrong share (like using 5 digits for 80%) spoils everything."
tasks:
  - {"check": {"type": "number", "q": "A trial is one shootout of 5 kicks, using 5 digits. A digit 0 to 7 is a goal. The digits are 7 2 9 0 3. How many goals is that?", "answer": 4, "tolerance": 0, "explain": "7, 2, 0 and 3 are goals (9 is a miss): 4 goals."}, "smaller": {"check": {"type": "question", "q": "With the rule 0 to 7 is a goal, is the digit 9 a goal or a miss?", "options": ["A miss", "A goal", "Neither", "Both"], "answer": 0, "feedback": [null, "Only 0 to 7 are goals.", "It is one or the other.", "It is one or the other."], "explain": "9 is not in 0 to 7, so it is a miss."}}}
  - {"check": {"type": "question", "q": "In your simulation, what should one trial be?", "options": ["One whole shootout of 5 digits", "One digit", "The total of all digits", "One goal"], "answer": 0, "feedback": [null, "One digit is one kick, but the question is about a whole shootout.", "Adding digits means nothing here.", "A goal is a result inside a trial."], "explain": "A trial is one run of whatever you are studying: here a full shootout, so five digits, and you note whether all five were goals."}}
  - {"check": {"type": "bug", "code": "working.txt#raj", "text": "Raj sets up a simulation of a player who scores 4 in every 5 penalties. Click the line where he goes wrong.", "answer": 2, "fault": "logic", "misconception": "sim-wrong-share", "explain": "Line 2: digits 0 to 4 are 5 of the 10 digits, a 50% chance. 80% needs 8 digits, 0 to 7."}}
```

### One shootout

```worked
P(\text{goal}) = 0.8 :: The rate from the player's record.
\text{digits } 0\text{--}7 \text{ goal},\ 8,9 \text{ miss} :: 8 of 10 digits is 80%.
5 \text{ digits} = 1 \text{ shootout} :: One trial is a whole shootout; repeat many times.
```

### What is a trial

### Find the mistake

## Modify: other players

```step
stage: "modify"
insight: "The same plan for other scoring rates and for other events."
tasks:
  - {"check": {"type": "number", "q": "A player scores 70% of the time. How many of the 10 digits stand for a goal?", "answer": 7, "tolerance": 0, "explain": "70% of 10 = 7 digits."}}
  - {"check": {"type": "question", "q": "A player scores 1 in 4 penalties. How could you use the digits 0 to 9?", "options": ["It does not split evenly: use 0 to 3 for 4 of 16, or use a dice or four cards", "0 and 1 only", "Digits 0 to 2 are goals", "Digits 0 to 4 are goals"], "answer": 0, "feedback": [null, "That is 2 of 10, which is 20%.", "That is 3 of 10, which is 30%.", "That is 50%."], "explain": "25% of 10 digits isn't a whole number. Use a spinner, a four-sided dice (1 is a goal) or digits where 4 of every 16 are goals."}}
  - {"check": {"type": "question", "q": "To simulate a coin toss, what is a good rule for a digit 0 to 9?", "options": ["0 to 4 is heads, 5 to 9 is tails", "0 is heads, 1 to 9 is tails", "Even is tails, odd is tails", "1 to 3 is heads"], "answer": 0, "feedback": [null, "That gives heads 10% of the time.", "Both are tails.", "That gives heads 30%."], "explain": "Five digits each: half the digits are heads."}}
```

### 70% scorer

### One in four

### A coin

## Practise: digit rules

```step
stage: "practise"
insight: "Setting digit rules for different chances, and a review of the last lesson."
tasks:
  - {"check": {"type": "number", "q": "A student gets a bus on time 90% of the time. How many of the 10 digits stand for on time?", "answer": 9, "tolerance": 0, "explain": "90% of 10 = 9."}}
  - {"check": {"type": "number", "q": "A simulation of a 3-kick penalty round needs 3 digits for each round. How many digits are needed for 20 rounds?", "answer": 60, "tolerance": 0, "explain": "3 × 20 = 60."}}
  - {"check": {"type": "number", "q": "Review: a bus was late on 12 of 40 days. What is the relative frequency (a decimal)?", "answer": 0.3, "tolerance": 0.005, "explain": "12 ÷ 40 = 0.3."}}
```

### On-time rate

### Digits needed

### Review

## Make: plan the shootout

```step
stage: "make"
insight: "Returning to the shootout: plan how many digits the simulation needs, on paper."
check: {"type": "reasoning", "paper": true, "q": "You will simulate 20 shootouts of 5 kicks for the 80% scorer (made up for the task), using random digits where 0 to 7 is a goal. How many digits do you need in all?", "steps": [["One shootout: $5$ digits", "one digit per kick"], ["Twenty shootouts: $20 \\times 5 = 100$", "repeat the trial"]], "answer": "100", "answerLabel": "Digits needed", "tolerance": 0, "feedback": [["20", "That is the number of shootouts. Each needs 5 digits."], ["8", "That is the number of goal digits."]], "criteria": ["I used one digit per kick.", "I matched 80% to 8 digits.", "I repeated the trial."], "explain": "20 × 5 = 100 digits. In the next lesson the board runs a thousand trials for you."}
```

Where would you get 100 random digits from? A spreadsheet, a calculator or a dice are all fine.

**Also used in**

- **Engineering.** Testing a bridge design against thousands of random loads is a simulation.
- **Weather and finance.** Forecasts run thousands of simulated futures and report how often each happens.
- **Next lesson.** Running a simulation on a computer and comparing with the theory.
