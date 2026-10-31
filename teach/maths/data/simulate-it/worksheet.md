---
title: "Simulate it"
subtitle: "Data and chance · Year 10: conditional chance · Lesson 45"
---

# Simulate it

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Could a computer pretend to test a thousand people in a blink and tell us what the table says?


:::teacher-note

**In one sentence:** Students design a simulation of the screening test where the second step depends on the first, run it many times on the board, and compare the simulated chance with the table. They see that a simulation wanders around the calculated chance and settles as trials grow (AC9M10P02, nodes 1 and 2).

**Students should be able to say:** I can design a simulation where the second step depends on the first. I can run it many times and work out a conditional chance from the counts. I can compare the simulated chance with the calculated one and say why more trials get closer.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="A two-step flow. Step 1: pick a person, 1 in 50 have the condition. Step 2: if the person has it, the test is positive 9 times in 10; if not, 1 time in 20. At the end: count the positives, how many have the condition, and a question mark."><svg viewBox="0 0 480 170" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-width="2"><rect x="15" y="50" width="120" height="60" rx="6"/><rect x="180" y="20" width="130" height="50" rx="6"/><rect x="180" y="95" width="130" height="50" rx="6"/><rect x="355" y="50" width="110" height="60" rx="6"/></g><g stroke-width="1.5"><line x1="135" y1="80" x2="180" y2="45"/><line x1="135" y1="80" x2="180" y2="120"/><line x1="310" y1="45" x2="355" y2="80"/><line x1="310" y1="120" x2="355" y2="80"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="75" y="76">1 pick:</text><text x="75" y="94">1 in 50 have it</text><text x="245" y="42">Has it: positive</text><text x="245" y="58">9 in 10</text><text x="245" y="117">Doesn't: positive</text><text x="245" y="133">1 in 20</text><text x="410" y="76">count positives</text><text x="410" y="96" font-size="20" font-weight="700">?</text></g></svg></figure>

Make a guess before you use the board.

:::keep-together

**A simulation picks 1000 imaginary people with the rates above. The table says 67 of 1000 test positive. How many positives will the simulation give?**

☐ Exactly 67 every time

☐ Close to 67, but a little different each time

☐ It could be anything from 0 to 1000

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Close to 67, but a little different each time. The picks are random, so the count wanders around 67 (for example 59 or 74) and does not land on it every time.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## The design, and the comparison


:::keep-together

### Which design

**Which design simulates one person in the screening test correctly?**

☐ Pick a random whole number from 1 to 1000 and say the first 67 are positive

☐ Pick a random whole number from 1 to 10 for everyone: 1 to 9 mean positive

☐ Pick a random whole number from 1 to 50 (1 means has the condition). If it was 1, pick from 1 to 10 (1 to 9 mean positive). Otherwise pick from 1 to 20 (1 means positive)

☐ Toss a coin for every person: heads means positive

:::


:::teacher-note

**Answer:** Pick a random whole number from 1 to 50 (1 means has the condition). If it was 1, pick from 1 to 10 (1 to 9 mean positive). Otherwise pick from 1 to 20 (1 means positive)

The first pick decides who has the condition, with chance 1 in 50. The second pick uses the chance that goes with that result, 9 in 10 or 1 in 20. That is how the condition is built in.

:::


:::keep-together

### How the second step depends

Here is the method on a bag of counters.

1. $\text{A bag has 3 red and 7 blue. Draw two, no put-back.}$ — Find the chance the second is red, given the first was red, by simulation.
2. $\text{Step 1: a digit 0 to 9; 0, 1, 2 mean red}$ — 3 of the 10 digits are red.
3. $\text{Step 2 (if red first): a digit 0 to 8; 0, 1 mean red}$ — 2 reds are left among 9 counters, so the second step has 9 digits and 2 reds.
4. $\text{Run many times. Look only at trials where step 1 was red.}$ — The condition: count how often step 2 is red inside them.
5. $\text{Theory: } \tfrac{2}{9} = 0.22$ — What the simulation should settle near.

Now try a different bag on paper, with the example beside you. Then type your answer.

**A bag has 4 red and 6 blue counters (made up). Two are drawn with no put-back. Design a simulation with random digits: the first digit from 0 to 9, and the second step depends on the first. Then use it to find the chance the second counter is red, given the first was red. Give a decimal to 2 places.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** First draw: digits 0 to 3 mean red, 4 to 9 mean blue (4 of the 10 digits are red); If the first was red, 3 red and 6 blue are left: use digits 0 to 8, with 0 to 2 meaning red (the second step depends on the first); $3 \div 9 = 0.33$ (the chance of a red second, given a red first)

After a red is out, 3 of the 9 left are red, so the second step uses 9 digits with 3 for red: 3/9 = 0.33.

:::


:::keep-together

### Find the mistake

**Zoe compares a simulation of 100 people with the table. Click the line where she goes wrong.**

```
 1  The table says the chance of the condition, given a positive test, is 18 ÷ 67 = 0.27.
 2  I ran the simulation for 100 people and got 0.35.
 3  0.35 is not 0.27, so the table must be wrong.
 4  I will use 0.35 as the answer.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: a simulation of only 100 people wanders. 0.35 against 0.27 is not enough to say the table is wrong. She should run many more trials and see whether the result settles near 0.27.

:::


:::typical

## More trials, a different test


**Ten thousand.** 

**A better test.** 

**Too few.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Compare the numbers


:::keep-together

### Reading a simulation

**A simulation of the screening test gave 22 people with the condition and a positive test, and 51 people without it and a positive test. What is the simulated chance of the condition, given a positive test? Give a decimal to 2 places.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.3

22 + 51 = 73 positives, and 22 of them have the condition: 22 ÷ 73 = 0.30.

:::


:::keep-together

### Which run is better

**The table says 0.27. Run A (1000 trials) gave 0.31. Run B (50 000 trials) gave 0.28. Which sentence is right?**

☐ Run B is exactly right because it used more trials

☐ Both are close to 0.27, and the larger run is the closer one, as expected, because more trials settle nearer the true chance

☐ Run A is wrong because it is not 0.27

☐ Run A is better because it was quicker

:::


:::teacher-note

**Answer:** Both are close to 0.27, and the larger run is the closer one, as expected, because more trials settle nearer the true chance

Run A is 0.04 from 0.27 and Run B is 0.01. Both are near, and the one with more trials is nearer: a simulation settles as the trials grow.

:::


:::keep-together

### A review

**Review: a coin is tossed and a die is rolled, so there are 12 outcomes. How many of them are heads with a die showing 5 or 6?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2

Heads with 5 and heads with 6: 2 of the 12.

:::


## Make: back to the test


**Check against the table.** Work this out on paper first, then type your answer.

**Say how they compare.** Sources: every rate and count in this lesson is made up (the screening test, the simulated counts and the bags of counters). A simulation here is a model of a made-up test, not of a real one.

**Also used in**

- **Sport.** A simulated penalty shootout works the same way: the chance of the next kick depends on how the last one went, and many runs show how often the team wins.
- **Weather and hospitals.** Forecasters and planners simulate many runs of a model to see how much results can wander before deciding.
- **Class work.** Decide when a simulation supports a real decision, and what it leaves out.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A simulation gave 12 people with the condition and a positive test, and 36 without it and a positive test. What is the simulated chance of the condition, given a positive test?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 12 out of 48, which is 0.25.

:::

