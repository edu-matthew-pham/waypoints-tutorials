---
marp: true
theme: default
html: true
---

# Simulate it

Data and chance · Year 10: conditional chance

<!-- Speaker note: Students design a simulation of the screening test where the second step depends on the first, run it many times on the board, and compare the simulated chance with the table. They see that a simulation wanders around the calculated chance and settles as trials grow (AC9M10P02, nodes 1 and 2). About 50 minutes (Predict and Run 10 min · Investigate 18 min · Modify 8 min · Practise and Make 14 min). Sources: Made up for this lesson: the screening test and its rates (as in the last lesson), the simulated counts, and the bags of counters., https://tutorials.learningwaypoints.com/maths/data/simulate-it/ (checked 25 October 2026). -->

---

## Today

- I can design a simulation where the second step depends on the first.
- I can run it many times and work out a conditional chance from the counts.
- I can compare the simulated chance with the calculated one and say why more trials get closer.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need the last lessons (tables, Venns and trees) and Year 9's simulation lessons. The one idea: a simulation picks random people with the right chances, then counts. A conditional chance is read from the counts inside the group, so the Positive rows give the chance given a positive. The board here picks one outcome in proportion to its count (the tree in the last lesson), so one trial is one imaginary person. The two-step design with digits is the same idea in a form a student could do with dice, a spreadsheet or code. The board has no field for the chance given a positive: students read the count table and divide. That is deliberate. Results are random, so no check depends on a particular count: the board checks wait for a number of trials, and the number questions use counts given in the question. Every rate and count is made up: the screening test, the simulated counts and the counters. A simulation of a made-up test says nothing about any real test. Teacher: Paper: the counters design and the Make comparison are worked on paper first. Look for a different second step. -->

---

## Why it matters

> Could a computer pretend to test a thousand people in a blink and tell us what the table says?

<!-- Speaker note: Back to the screening test from the last lesson. Out of 1000 people, 20 have the condition. The test is positive for 9 in 10 of them and, wrongly, for 1 in 20 of the others. All of these rates are made up. The table said the chance of the condition, given a positive test, is 18 out of 67. A simulation lets you check that without the table: pick imaginary people at random with the right chances, test them, and count. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A simulation picks 1000 imaginary people with the rates above. The table says 67 of 1000 test positive. How many positives will the simulation give?**

- Exactly 67 every time
- Close to 67, but a little different each time
- It could be anything from 0 to 1000

<!-- Speaker note: What happens: Close to 67, but a little different each time. The picks are random, so the count wanders around 67 (for example 59 or 74) and does not land on it every time. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the board. Most choose exactly 67. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Fsimulate-it%2Fstep-2&code=widget%3A+events%0Afirst%3A+Yes%2C+No%0Asecond%3A+Positive%2C+Negative%0Anames%3A+Condition%2C+Test%0Aweights%3A+18%2C+2%3B+49%2C+931%0Aview%3A+tree%0Atrials%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/simulate-it/?full=step-2#step-2)

<!-- Speaker note: The table lists how many times each outcome came up. To find the simulated chance of the condition, given a positive test, add the two Positive counts, then see how many of them are the "Yes" row. -->

<!-- Speaker note: Teacher: ask each group to report its own simulated chance after 1000 trials. They will differ: put them on the board. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Close to 67, but a little different each time. The picks are random, so the count wanders around 67 (for example 59 or 74) and does not land on it every time.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which design

**Which design simulates one person in the screening test correctly?**

- Pick a random whole number from 1 to 1000 and say the first 67 are positive
- Pick a random whole number from 1 to 10 for everyone: 1 to 9 mean positive
- Pick a random whole number from 1 to 50 (1 means has the condition). If it was 1, pick from 1 to 10 (1 to 9 mean positive). Otherwise pick from 1 to 20 (1 means positive)
- Toss a coin for every person: heads means positive

* Answer: Pick a random whole number from 1 to 50 (1 means has the condition). If it was 1, pick from 1 to 10 (1 to 9 mean positive). Otherwise pick from 1 to 20 (1 means positive)

<!-- Speaker note: The first pick decides who has the condition, with chance 1 in 50. The second pick uses the chance that goes with that result, 9 in 10 or 1 in 20. That is how the condition is built in. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## How the second step depends

Here is the method on a bag of counters.

Now try a different bag on paper, with the example beside you. Then type your answer.

$$\text{A bag has 3 red and 7 blue. Draw two, no put-back.}$$

1) $\text{Step 1: a digit 0 to 9; 0, 1, 2 mean red}$ — 3 of the 10 digits are red.
2) $\text{Step 2 (if red first): a digit 0 to 8; 0, 1 mean red}$ — 2 reds are left among 9 counters, so the second step has 9 digits and 2 reds.
3) $\text{Run many times. Look only at trials where step 1 was red.}$ — The condition: count how often step 2 is red inside them.
4) $\text{Theory: } \tfrac{2}{9} = 0.22$ — What the simulation should settle near.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write A bag has 3 red and 7 blue. Draw two, no put-back. and say "Find the chance the second is red, given the first was red, by simulation." Line 1: write Step 1: a digit 0 to 9; 0, 1, 2 mean red and say "3 of the 10 digits are red." Line 2: write Step 2 (if red first): a digit 0 to 8; 0, 1 mean red and say "2 reds are left among 9 counters, so the second step has 9 digits and 2 reds." Line 3: write Run many times. Look only at trials where step 1 was red. and say "The condition: count how often step 2 is red inside them." Line 4: write Theory: 2 ÷ 9 = 0.22 and say "What the simulation should settle near." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How the second step depends

**A bag has 4 red and 6 blue counters (made up). Two are drawn with no put-back. Design a simulation with random digits: the first digit from 0 to 9, and the second step depends on the first. Then use it to find the chance the second counter is red, given the first was red. Give a decimal to 2 places.**

* Answer: First draw: digits 0 to 3 mean red, 4 to 9 mean blue (4 of the 10 digits are red); If the first was red, 3 red and 6 blue are left: use digits 0 to 8, with 0 to 2 meaning red (the second step depends on the first); $3 \div 9 = 0.33$ (the chance of a red second, given a red first)

<!-- Speaker note: After a red is out, 3 of the 9 left are red, so the second step uses 9 digits with 3 for red: 3/9 = 0.33. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Zoe compares a simulation of 100 people with the table. Click the line where she goes wrong.**

```
 1  The table says the chance of the condition, given a positive test, is 18 ÷ 67 = 0.27.
 2  I ran the simulation for 100 people and got 0.35.
 3  0.35 is not 0.27, so the table must be wrong.
 4  I will use 0.35 as the answer.
```

* Answer: line 3

<!-- Speaker note: Line 3: a simulation of only 100 people wanders. 0.35 against 0.27 is not enough to say the table is wrong. She should run many more trials and see whether the result settles near 0.27. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## More trials, a different test



- **Ten thousand:** 
- **A better test:** 
- **Too few:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/simulate-it/?full=step-4#step-4)

<!-- Speaker note: What this step is for: More trials bring the simulated chance closer to the table. A different test changes the calculated chance, and the simulation follows it. With very few trials, a simulation may not give any positives at all. Hints, in order: Press Run 1000 until the trial count is at least 10,000. Each press adds 1000 more. / This test has 14 false alarms in 980 instead of 49. For students who need more support: A printed table of the four outcomes with a space for tallies, and the calculation written as a fraction to fill in: ___ ÷ (___ + ___). For early finishers: Change the board's rates so 100 people in 1000 have the condition, the test is positive for 9 in 10 of them and for 1 in 20 of the rest. Predict the chance given a positive, then simulate it. What did a more common condition do? The hard part, on purpose: Forgetting that the second step changes with the first. Ask: 'Is the chance of a positive the same for everyone? Who has a different chance?' When students get stuck: A student gives every person the same chance of a positive. Ask: Is a positive equally likely for someone who has the condition and someone who doesn't? Fix: Make the second step depend on the first: 9 in 10 for people with it, 1 in 20 for the rest. / A student divides by the number of trials. Ask: Given a positive test, which trials are you looking at? Fix: Only the trials with a positive result: add the two Positive rows. / A student says the table is wrong because the simulation gave a different number. Ask: If you ran it again, would you get exactly the same number? How many trials was it? Fix: Run more trials and see whether the result settles near the table's number. -->

<!-- Speaker note: Teacher: before the last board, ask 'what is the chance there are no positives in 10 trials?' (about half). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading a simulation

**A simulation of the screening test gave 22 people with the condition and a positive test, and 51 people without it and a positive test. What is the simulated chance of the condition, given a positive test? Give a decimal to 2 places.**

* Answer: 0.3

<!-- Speaker note: 22 + 51 = 73 positives, and 22 of them have the condition: 22 ÷ 73 = 0.30. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which run is better

**The table says 0.27. Run A (1000 trials) gave 0.31. Run B (50 000 trials) gave 0.28. Which sentence is right?**

- Run B is exactly right because it used more trials
- Both are close to 0.27, and the larger run is the closer one, as expected, because more trials settle nearer the true chance
- Run A is wrong because it is not 0.27
- Run A is better because it was quicker

* Answer: Both are close to 0.27, and the larger run is the closer one, as expected, because more trials settle nearer the true chance

<!-- Speaker note: Run A is 0.04 from 0.27 and Run B is 0.01. Both are near, and the one with more trials is nearer: a simulation settles as the trials grow. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 22px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A review

**Review: a coin is tossed and a die is rolled, so there are 12 outcomes. How many of them are heads with a die showing 5 or 6?**

* Answer: 2

<!-- Speaker note: Heads with 5 and heads with 6: 2 of the 12. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the test



- **Check against the table:** Work this out on paper first, then type your answer.
- **Say how they compare:** Sources: every rate and count in this lesson is made up (the screening test, the simulated counts and the bags of counters). A simulation here is a model of a m

<!-- Speaker note: What this step is for: Returning to the opening: the simulation is checked against the table. A good comparison gives both chances, says how far apart they are and why that is expected. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A simulation gave 12 people with the condition and a positive test, and 36 without it and a positive test. What is the simulated chance of the condition, given a positive test?**

* 12 out of 48, which is 0.25.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10P02 nodes 1 and 2. Where it leads: node 3, a real decision supported by a simulation (class work), and Year 10's other probability and statistics lessons. -->
