---
order: 45
unit: conditional10
node: [AC9M10P02 n1, AC9M10P02 n2]
uses: [AC9M10P01 n2, AC9M9P03 n1, AC9M9P03 n2]   # the screening test table; designing and running a simulation
connection: rare-test
title: Simulate it
summary: "Build a simulation of the screening test where the second step depends on the first, run it many times, and compare what comes out with the table: close, but not the same, and closer as the trials grow."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Could a computer pretend to test a thousand people in a blink and tell us what the table says?"
explainPicture: { ref: sim.yml#explain-pic, caption: "Each trial picks one imaginary person from the tree, in proportion to the counts. The Positive outcomes are the ones to look inside." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8443
  url: http://127.0.0.1:8443/index.html
  readySelector: "#board"
  layout: full
---
Back to the screening test from the last lesson. Out of 1000 people, 20 have the condition. The test is positive for 9 in 10 of them and, wrongly, for 1 in 20 of the others. All of these rates are made up. The table said the chance of the condition, given a positive test, is 18 out of 67. A simulation lets you check that without the table: pick imaginary people at random with the right chances, test them, and count.

## Predict: how close will it be

```step
stage: predict
insight: "A simulation uses random picks, so each run is a little different. Students who expect the exact counts from the table are treating a sample as if it were the whole."
check:
  type: predict
  q: "A simulation picks 1000 imaginary people with the rates above. The table says 67 of 1000 test positive. How many positives will the simulation give?"
  options:
    - "Exactly 67 every time"
    - "Close to 67, but a little different each time"
    - "It could be anything from 0 to 1000"
  actual: "Close to 67, but a little different each time. The picks are random, so the count wanders around 67 (for example 59 or 74) and does not land on it every time."
```

<figure class="situation" role="img" aria-label="A two-step flow. Step 1: pick a person, 1 in 50 have the condition. Step 2: if the person has it, the test is positive 9 times in 10; if not, 1 time in 20. At the end: count the positives, how many have the condition, and a question mark."><svg viewBox="0 0 480 170" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-width="2"><rect x="15" y="50" width="120" height="60" rx="6"/><rect x="180" y="20" width="130" height="50" rx="6"/><rect x="180" y="95" width="130" height="50" rx="6"/><rect x="355" y="50" width="110" height="60" rx="6"/></g><g stroke-width="1.5"><line x1="135" y1="80" x2="180" y2="45"/><line x1="135" y1="80" x2="180" y2="120"/><line x1="310" y1="45" x2="355" y2="80"/><line x1="310" y1="120" x2="355" y2="80"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="75" y="76">1 pick:</text><text x="75" y="94">1 in 50 have it</text><text x="245" y="42">Has it: positive</text><text x="245" y="58">9 in 10</text><text x="245" y="117">Doesn't: positive</text><text x="245" y="133">1 in 20</text><text x="410" y="76">count positives</text><text x="410" y="96" font-size="20" font-weight="700">?</text></g></svg></figure>

Make a guess before you use the board.

## Run: a thousand imaginary people

```step
stage: run
insight: "Each trial picks one imaginary person from the tree in proportion to the counts. 1000 trials give a count for each outcome. The positives with the condition, over all the positives, estimate the chance given a positive."
try: { playground: board, starter: "sim.yml#run", height: 700 }
check: { type: board, text: "Press Run 1000 two or three times and watch the count table. How close to the chance in the table (0.27) do you get, from the two Positive rows?", when: "u >= 3000" }
```

The table lists how many times each outcome came up. To find the simulated chance of the condition, given a positive test, add the two Positive counts, then see how many of them are the "Yes" row.

## Investigate: the design, and the comparison

```step
stage: investigate
insight: "A simulation of a conditional chance must make the second step depend on the first: the chance of a positive is different for people with and without the condition. A simulated result differs from the calculated one by chance, and the gap shrinks as the trials grow."
tasks:
  - check:
      type: question
      q: "Which design simulates one person in the screening test correctly?"
      options: ["Pick a random whole number from 1 to 50 (1 means has the condition). If it was 1, pick from 1 to 10 (1 to 9 mean positive). Otherwise pick from 1 to 20 (1 means positive)", "Pick a random whole number from 1 to 10 for everyone: 1 to 9 mean positive", "Toss a coin for every person: heads means positive", "Pick a random whole number from 1 to 1000 and say the first 67 are positive"]
      answer: 0
      feedback: [null, "That gives every person the same chance of a positive. The chance is different for people with and without the condition.", "A coin gives 1 in 2 for everyone and ignores both rates.", "That fixes the count, so every run gives 67 positives. A simulation should pick people at random."]
      explain: "The first pick decides who has the condition, with chance 1 in 50. The second pick uses the chance that goes with that result, 9 in 10 or 1 in 20. That is how the condition is built in."
  - check:
      type: reasoning
      paper: true
      q: "A bag has 4 red and 6 blue counters (made up). Two are drawn with no put-back. Design a simulation with random digits: the first digit from 0 to 9, and the second step depends on the first. Then use it to find the chance the second counter is red, given the first was red. Give a decimal to 2 places."
      steps:
        - ["First draw: digits 0 to 3 mean red, 4 to 9 mean blue", "4 of the 10 digits are red"]
        - ["If the first was red, 3 red and 6 blue are left: use digits 0 to 8, with 0 to 2 meaning red", "the second step depends on the first"]
        - ["$3 \\div 9 = 0.33$", "the chance of a red second, given a red first"]
      answer: "0.33"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.4", "That is the chance of red on the first draw. Once a red is out, 3 of the 9 left are red."]
        - ["0.16", "That is red then red: 4/10 × 3/9. Given a red first, only the second draw is left to find."]
      criteria:
        - "I used 4 of 10 digits for the first red."
        - "I changed the second step to 9 digits because one counter is out."
        - "I gave the chance as 3 out of 9."
      explain: "After a red is out, 3 of the 9 left are red, so the second step uses 9 digits with 3 for red: 3/9 = 0.33."
    smaller:
      check: { type: number, q: "A bag has 4 red and 6 blue counters. One red counter is drawn and kept out. How many counters are left in the bag?", answer: 9, tolerance: 0, explain: "10 − 1 = 9 counters are left: 3 red and 6 blue. The second draw uses these 9." }
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe compares a simulation of 100 people with the table. Click the line where she goes wrong."
      answer: 3
      fault: logic
      misconception: sim-differs-so-wrong
      explain: "Line 3: a simulation of only 100 people wanders. 0.35 against 0.27 is not enough to say the table is wrong. She should run many more trials and see whether the result settles near 0.27."
```

### Which design

The design has to build the condition in: the chance of a positive depends on who has the condition.

### How the second step depends

Here is the method on a bag of counters.

```worked
\text{A bag has 3 red and 7 blue. Draw two, no put-back.} :: Find the chance the second is red, given the first was red, by simulation.
\text{Step 1: a digit 0 to 9; 0, 1, 2 mean red} :: 3 of the 10 digits are red.
\text{Step 2 (if red first): a digit 0 to 8; 0, 1 mean red} :: 2 reds are left among 9 counters, so the second step has 9 digits and 2 reds.
\text{Run many times. Look only at trials where step 1 was red.} :: The condition: count how often step 2 is red inside them.
\text{Theory: } \tfrac{2}{9} = 0.22 :: What the simulation should settle near.
```

Now try a different bag on paper, with the example beside you. Then type your answer.

### Find the mistake

Read Zoe's working. A simulation of 100 people differs from the table. Does that mean the table is wrong?

## Modify: more trials, a different test

```step
stage: modify
insight: "More trials bring the simulated chance closer to the table. A different test changes the calculated chance, and the simulation follows it. With very few trials, a simulation may not give any positives at all."
try: { playground: board, starter: "sim.yml#run", height: 700 }
tasks:
  - starter: "sim.yml#run"
    hint: "Press Run 1000 until the trial count is at least 10,000. Each press adds 1000 more."
    check: { type: board, text: "Run at least 10,000 trials. Read the two Positive rows and work out the simulated chance of the condition, given a positive test. Compare it with 0.27.", when: "u >= 10000", explain: "With 10,000 trials the simulated chance should be close to 0.27: a gap of a couple of hundredths is normal." }
  - starter: "sim.yml#better"
    hint: "This test has 14 false alarms in 980 instead of 49."
    check: { type: board, text: "This test gives fewer false alarms. Run at least 5,000 trials and work out the simulated chance of the condition, given a positive test. The table gives 18 out of 32.", when: "u >= 5000", explain: "18/32 = 0.56. The simulation should be near 0.56, a lot higher than the 0.27 of the first test." }
  - starter: "sim.yml#run"
    check:
      type: question
      q: "Edge case: you run only 10 trials of the first test. About 7 in 100 trials are positive. What can go wrong when you try to find the chance of the condition, given a positive test?"
      options: ["There might be no positives at all, so there is nothing to divide by", "The chance will be exactly 0.27", "The simulation will give an error because 10 is too small a number for the board", "The chance will be more than 1"]
      answer: 0
      feedback: [null, "With only 10 trials the result can be anything, and there is no reason for it to be exactly 0.27.", "The board runs any number of trials. The trouble is in the results, not the board.", "A part of a group is never more than the group."]
      explain: "Only about 0.7 of the 10 trials are expected to be positive, so you may get none. With no positives there is no group to look in, so the chance cannot be worked out."
```

### Ten thousand

### A better test

### Too few

## Practise: compare the numbers

```step
stage: practise
insight: "Reading a simulated chance from its counts, describing the gap from the table, and saying what more trials do. Review: counting a compound outcome from Year 9."
tasks:
  - check: { type: number, q: "A simulation of the screening test gave 22 people with the condition and a positive test, and 51 people without it and a positive test. What is the simulated chance of the condition, given a positive test? Give a decimal to 2 places.", answer: 0.3, tolerance: 0.01, feedback: [[0.022, "That is 22 out of 1000 people. Given a positive test, divide by the 73 positives."]], explain: "22 + 51 = 73 positives, and 22 of them have the condition: 22 ÷ 73 = 0.30." }
  - check:
      type: question
      q: "The table says 0.27. Run A (1000 trials) gave 0.31. Run B (50 000 trials) gave 0.28. Which sentence is right?"
      options: ["Both are close to 0.27, and the larger run is the closer one, as expected, because more trials settle nearer the true chance", "Run A is wrong because it is not 0.27", "Run B is exactly right because it used more trials", "Run A is better because it was quicker"]
      answer: 0
      feedback: [null, "A simulation is not wrong for being a little off. The gap is what you expect from chance.", "50,000 trials give a result near 0.27, not exactly 0.27.", "Speed doesn't matter. What matters is how many trials there are."]
      explain: "Run A is 0.04 from 0.27 and Run B is 0.01. Both are near, and the one with more trials is nearer: a simulation settles as the trials grow."
  - check: { type: number, q: "Review: a coin is tossed and a die is rolled, so there are 12 outcomes. How many of them are heads with a die showing 5 or 6?", answer: 2, tolerance: 0, explain: "Heads with 5 and heads with 6: 2 of the 12." }
```

### Reading a simulation

### Which run is better

### A review

From Year 9: list the outcomes of both, then count the ones you want.

## Make: back to the test

```step
stage: make
insight: "Returning to the opening: the simulation is checked against the table. A good comparison gives both chances, says how far apart they are and why that is expected."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A simulation of 10 000 imaginary people (the first test) gave 192 people with the condition and a positive test, and 507 people without it and a positive test. What is the simulated chance of the condition, given a positive test? Give a decimal to 2 places."
      steps:
        - ["All the positives: $192 + 507 = 699$", "the group the 'given' picks"]
        - ["Positives with the condition: $192$", "the count inside the group"]
        - ["$192 \\div 699 = 0.27$", "the part over the group"]
      answer: "0.27"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.019", "That is 192 out of all 10 000 people. Given a positive test, divide by the positives."]
        - ["0.72", "That is the other way round: the share of positives who don't have the condition."]
      criteria:
        - "I added both Positive counts to find the group."
        - "I used only the Yes row inside it."
        - "I divided by the positives."
      explain: "699 test positive and 192 of them have the condition: 192 ÷ 699 = 0.27."
  - check:
      type: question
      q: "Which sentence best compares the simulation with the table?"
      options: ["The simulated chance of 0.27 matches the table's 18/67 = 0.27, as expected for 10 000 trials, and a run of only 100 would be likely to wander further", "The simulation proves the table is exactly right", "The simulation is different so the table is wrong", "The simulation and the table are different things and can't be compared"]
      answer: 0
      feedback: [null, "A simulation agrees closely with the table. It does not prove anything exactly.", "A small gap is what chance gives, and here there is hardly a gap.", "They estimate the same chance, so they can be compared."]
      explain: "A simulation estimates the same chance as the table. A good comparison gives both numbers and says what the number of trials does to the gap."
```

### Check against the table

Work this out on paper first, then type your answer.

### Say how they compare

Sources: every rate and count in this lesson is made up (the screening test, the simulated counts and the bags of counters). A simulation here is a model of a made-up test, not of a real one.

**Also used in**

- **Sport.** A simulated penalty shootout works the same way: the chance of the next kick depends on how the last one went, and many runs show how often the team wins.
- **Weather and hospitals.** Forecasters and planners simulate many runs of a model to see how much results can wander before deciding.
- **Class work.** Decide when a simulation supports a real decision, and what it leaves out.
