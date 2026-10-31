---
marp: true
theme: default
html: true
---

# Run it a thousand times

Data and chance · Year 9: chance

<!-- Speaker note: A computer can run a simulation of two kicks a thousand times. Compare the relative frequency of one kick and of two goals in a row with what counting predicts. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can run a simulation and read its relative frequency.
- I can compare it with the counted probability.
- I can say why more trials help.

<!-- Speaker note: Before class: Students need the last lesson. The one idea: simulated relative frequencies vary around the counted probability and settle with more trials. The board uses 4 goals and 1 miss on each kick; rates are made up. -->

---

## Why it matters

> If she scores 4 in 5, how often does she score two in a row? Run it and see.

<!-- Speaker note: Today the board simulates two kicks at a time for the striker who scores 4 in 5 (made up for the task). The five outcomes on each kick are four goals and a miss, all equally likely. Have a guess how often both kicks are goals, and we'll come back to it at the end. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**She scores 80% of kicks. Roughly how often do you expect two goals in a row?**

- About 160%
- About 64%
- About 80%

<!-- Speaker note: What happens: About 64%. Counting the 25 equally likely pairs, 16 are two goals: 16/25 = 0.64. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Frun-the-simulation%2Fstep-2&code=widget%3A+events%0Afirst%3A+goal%2C+goal%2C+goal%2C+goal%2C+miss%0Asecond%3A+goal%2C+goal%2C+goal%2C+goal%2C+miss%0Anames%3A+Kick+1%2C+Kick+2%0Aview%3A+grid%0Atrials%3A+on%0Aseed%3A+11%0Atarget%3A+a+%3D+goal+and+b+%3D+goal%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/run-the-simulation/?full=step-2#step-2)

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 64%. Counting the 25 equally likely pairs, 16 are two goals: 16/25 = 0.64.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Count the pairs

$$25 \text{ pairs},\ 16 \text{ with two goals}$$

1) $P(\text{two goals}) = \tfrac{16}{25} = 0.64$ — Favourable over all.
2) $\text{run 1000 trials} \to \approx 0.64$ — The simulation should agree, give or take.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 25 pairs,16 with two goals and say "Count the grid." Line 1: write P(two goals) = 16 ÷ 25 = 0.64 and say "Favourable over all." Line 2: write run 1000 trials 0.64 and say "The simulation should agree, give or take." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the pairs

**Counting the grid: how many of the 25 pairs are two goals?**

* Answer: 16

<!-- Speaker note: 4 × 4 = 16 pairs. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## More or fewer trials

**Which is closer to the counted probability 0.64?**

- A relative frequency after 1000 trials
- Neither: a simulation never gets near
- They are equally close
- A relative frequency after 10 trials

* Answer: A relative frequency after 1000 trials

<!-- Speaker note: More trials give a steadier relative frequency. Ten trials can easily be 0.5 or 0.8. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Mia runs 20 trials. Click the line where she goes wrong.**

```
 1  I ran the simulation of two kicks 20 times.
 2  Both kicks were goals in 11 of them, so the relative frequency is 11/20 = 0.55.
 3  That is not 0.64, so the counting must be wrong.
```

* Answer: line 3

<!-- Speaker note: Line 3: 20 trials is too few. A relative frequency from 20 trials varies a lot (11 of 20 could easily be 16 of 25 in disguise). Run many more and compare again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Other strikers



- **Weaker striker:** 
- **At least one miss:** 
- **Close enough:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/run-the-simulation/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Different scoring rates change the grid and the simulated result. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Simulate three kicks by running the board twice and combining. The hard part, on purpose: Expecting an exact match. Ask: if we ran it again, would we get exactly the same number? When students get stuck: A student says the simulation is wrong because it is 0.652, not 0.64. Ask: Run it again. Is it the same? Fix: It varies. Compare over many trials. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Red then red

**A spinner has 3 equal sectors, one of them red. It is spun twice. How many of the 9 pairs are red then red?**

* Answer: 1

<!-- Speaker note: Only one: red on the first and red on the second. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Relative frequency

**1000 simulated trials gave 'both goals' 630 times. What is the relative frequency (a decimal)?**

* Answer: 0.63

<!-- Speaker note: 630 ÷ 1000 = 0.63. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: of 40 days, it rained on 14 and the bus was late on 14, with 10 days both. How many days were late or rainy?**

* Answer: 18

<!-- Speaker note: 14 + 14 − 10 = 18. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: compare with the count

Is 0.012 close? Compare it with how far 11 of 20 (0.55) is from 0.64.

**Also used in**

- **Medicine and engineering.** Computers simulate thousands of tests before anything is built or tried on people.
- **Games.** Designers simulate a million rounds to check a game is fair.
- **Next lesson.** Why real results still differ from a simulation.

<!-- Speaker note: What this step is for: Returning to the shootout: how far a simulated result sits from the counted one, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**1000 trials: 648 successes. Relative frequency?**

* 0.648.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M9P03 node 2. Where it leads: describing results and why they differ from reality (next). -->
