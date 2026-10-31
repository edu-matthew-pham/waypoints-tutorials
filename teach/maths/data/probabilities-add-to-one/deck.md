---
marp: true
theme: default
html: true
---

# Every outcome, and the total of 1

Data and chance · Year 9: chance

<!-- Speaker note: Give each outcome its probability, then add them up. If the total is not 1, an outcome was missed or counted wrongly. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can give each outcome its probability.
- I can check that the probabilities of all outcomes add to 1.
- I can use the total to find a missing probability.

<!-- Speaker note: Before class: Students need the last lesson. The one idea: the probabilities of all outcomes add to 1, which makes the total a check on the list. The board treats counters as different (two red entries), so counts are of equally likely outcomes. Counter numbers are made up. -->

---

## Why it matters

> A bag holds 2 red counters, a blue and a green. Draw two without looking. Can you say the chance of every possible result, and do they add up?

<!-- Speaker note: A bag holds 2 red counters, 1 blue and 1 green (made up for the task). Two are drawn one after the other and not put back. Each outcome has a probability, and together they use up all the chance there is: they add to 1. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**2 red, 1 blue and 1 green counter. Two are drawn without putting back. If you treat each counter as different, how many outcomes are there?**

- 6
- 9
- 12

<!-- Speaker note: What happens: 12. 4 counters for the first, 3 left for the second: 4 × 3 = 12. The two reds are different counters. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Fprobabilities-add-to-one%2Fstep-2&code=widget%3A+events%0Afirst%3A+red%2C+red%2C+blue%2C+green%0Asecond%3A+red%2C+red%2C+blue%2C+green%0Anames%3A+First+counter%2C+Second+counter%0Areplace%3A+off%0Aview%3A+grid%0Acomplement%3A+on%0Atarget%3A+a+%3D+red+or+b+%3D+red%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/probabilities-add-to-one/?full=step-2#step-2)

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 12. 4 counters for the first, 3 left for the second: 4 × 3 = 12. The two reds are different counters.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Exactly one red

$$P(RR) = \tfrac{2}{12},\ P(\text{one red}) = \tfrac{8}{12},\ P(\text{no red}) = \tfrac{2}{12}$$

1) $\tfrac{2}{12} + \tfrac{8}{12} + \tfrac{2}{12} = 1$ — The three kinds cover every outcome.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write P(RR) = 2 ÷ 12,P(one red) = 8 ÷ 12,P(no red) = 2 ÷ 12 and say "Count the outcomes of each kind." Line 1: write 2 ÷ 12 + 8 ÷ 12 + 2 ÷ 12 = 1 and say "The three kinds cover every outcome." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exactly one red

**Two reds come out in 2 of the 12 outcomes. How many outcomes have exactly one red?**

* Answer: 8

<!-- Speaker note: R1 or R2 with blue or green, in either order: 2 × 2 × 2 = 8. (12 − 2 two-red outcomes − 2 no-red outcomes = 8.) -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Check the total

**P(two reds) = 1/6 and P(no red) = 1/6. What is P(exactly one red)? (Decimal, 3 places.)**

* Answer: 0.667

<!-- Speaker note: All three cases cover everything, so they add to 1: 1 − 1/6 − 1/6 = 2/3 ≈ 0.667. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Lee lists the colours that can come out and their probabilities. Click the line that goes wrong.**

```
 1  Two counters are drawn from 2 red, 1 blue and 1 green. There are 12 outcomes.
 2  P(two reds) = 2/12, P(red and blue) = 4/12, P(red and green) = 4/12.
 3  That is every kind of result, and the total is 10/12, which is fine because probabilities do not have to total 1.
```

* Answer: line 3

<!-- Speaker note: Line 3: probabilities of all the outcomes always add to 1. Lee's total is 10/12, so he left out blue and green (2/12). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Other events



- **Blue is in it:** 
- **Both red:** 
- **Could these work:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/probabilities-add-to-one/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Different events on the same 12 outcomes still make a pair that adds to 1 with their complement. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Add a second blue. What are the probabilities of 0, 1 and 2 reds? The hard part, on purpose: Treating the two reds as one outcome. Ask: if you painted them different colours, would the count change? When students get stuck: A student counts RR once, getting 9 outcomes. Ask: Are the two reds the same counter? Fix: Different counters make different outcomes: 12. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The fourth outcome

**A spinner has outcomes with probabilities 0.1, 0.25 and 0.4, and a fourth outcome. What is the fourth probability?**

* Answer: 0.25

<!-- Speaker note: 0.1 + 0.25 + 0.4 = 0.75, so the fourth is 1 − 0.75 = 0.25. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A total of 1.2

**A student's list of probabilities adds to 1.2. What does that tell you?**

- Some probability is counted too much
- It is correct
- An outcome is missing
- The event is certain

* Answer: Some probability is counted too much

<!-- Speaker note: The total of all outcomes can't pass 1, so something is counted twice or too big. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: 3 mains and 4 drinks. How many meal deals?**

* Answer: 12

<!-- Speaker note: 3 × 4 = 12. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: three names in the hat

Check: P(Ana gets a job) plus P(Ana does not) is 1.

**Also used in**

- **Insurance and games.** Odds are set so that every outcome's chance is accounted for and the total is exactly 1.
- **Checking your work.** A total that is not 1 is the quick sign that an outcome was missed.
- **Next lesson.** Using records of what happened to estimate probabilities.

<!-- Speaker note: What this step is for: Returning to the name draw: list every outcome with its probability and prove the total is 1, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A list of probabilities is 0.3, 0.3, 0.3. What is wrong?**

* The total is 0.9: an outcome is missing.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Completes AC9M9P01 node 3. Where it leads: using data, not counting, to estimate probabilities (next). -->
