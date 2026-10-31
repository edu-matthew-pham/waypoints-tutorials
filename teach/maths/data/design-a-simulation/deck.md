---
marp: true
theme: default
html: true
---

# Designing a simulation

Data and chance · Year 9: chance

<!-- Speaker note: To simulate something you cannot repeat, match each outcome to a share of random digits, decide what one trial is, and plan how many trials to run. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can match digits to a probability.
- I can say what one trial is.
- I can plan how many digits a simulation needs.

<!-- Speaker note: Before class: Students need last lessons and relative frequency (Year 8). The one idea: a simulation gives each outcome the right share of random digits, defines one trial, and repeats. The scoring rates are made up; do not claim a real player's rate. -->

---

## Why it matters

> A striker scores 4 penalties in 5. How often would she score all five in a shootout?

<!-- Speaker note: A striker scores about 4 of every 5 penalties (made up for the task). A shootout is 5 kicks. You cannot ask her to take thousands of shootouts, so you simulate: use random digits in place of kicks. Have a guess how often she scores all five, and we'll come back to it at the end. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A random digit from 0 to 9 stands for one kick. The striker scores 80% of the time. Which digits should mean "goal"?**

- 0 to 7 (8 digits)
- 0 to 9 (all 10)
- 0 to 3 (4 digits)

<!-- Speaker note: What happens: 0 to 7. Eight of the ten digits are 80% of the digits, and every digit is equally likely. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 0 to 7. Eight of the ten digits are 80% of the digits, and every digit is equally likely.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/data/design-a-simulation/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/data/design-a-simulation/?full=step-2#step-2)

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## One shootout

$$P(\text{goal}) = 0.8$$

1) $\text{digits } 0\text{--}7 \text{ goal},\ 8,9 \text{ miss}$ — 8 of 10 digits is 80%.
2) $5 \text{ digits} = 1 \text{ shootout}$ — One trial is a whole shootout; repeat many times.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write P(goal) = 0.8 and say "The rate from the player's record." Line 1: write digits 0--7 goal,8,9 miss and say "8 of 10 digits is 80%." Line 2: write 5 digits = 1 shootout and say "One trial is a whole shootout; repeat many times." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One shootout

**A trial is one shootout of 5 kicks, using 5 digits. A digit 0 to 7 is a goal. The digits are 7 2 9 0 3. How many goals is that?**

* Answer: 4

<!-- Speaker note: 7, 2, 0 and 3 are goals (9 is a miss): 4 goals. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What is a trial

**In your simulation, what should one trial be?**

- One digit
- One goal
- One whole shootout of 5 digits
- The total of all digits

* Answer: One whole shootout of 5 digits

<!-- Speaker note: A trial is one run of whatever you are studying: here a full shootout, so five digits, and you note whether all five were goals. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Raj sets up a simulation of a player who scores 4 in every 5 penalties. Click the line where he goes wrong.**

```
 1  The striker scores 4 out of every 5 penalties.
 2  I will use digits 0 to 4 as a goal and 5 to 9 as a miss.
 3  Five digits make one shootout, and I will run 100 shootouts.
```

* Answer: line 2

<!-- Speaker note: Line 2: digits 0 to 4 are 5 of the 10 digits, a 50% chance. 80% needs 8 digits, 0 to 7. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Other players



- **70% scorer:** 
- **One in four:** 
- **A coin:** 

<!-- Speaker note: What this step is for: The same plan for other scoring rates and for other events. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Design a simulation where chances are not round: a player scores 7 in 12. The hard part, on purpose: Matching the count, not the share. Ask: out of 10 digits, how many is 80%? When students get stuck: A student says digits 0 to 4 for 80%. Ask: How many of the 10 digits is that? Fix: 5 of 10 is 50%. 80% needs 8. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## On-time rate

**A student gets a bus on time 90% of the time. How many of the 10 digits stand for on time?**

* Answer: 9

<!-- Speaker note: 90% of 10 = 9. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Digits needed

**A simulation of a 3-kick penalty round needs 3 digits for each round. How many digits are needed for 20 rounds?**

* Answer: 60

<!-- Speaker note: 3 × 20 = 60. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a bus was late on 12 of 40 days. What is the relative frequency (a decimal)?**

* Answer: 0.3

<!-- Speaker note: 12 ÷ 40 = 0.3. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: plan the shootout

Where would you get 100 random digits from? A spreadsheet, a calculator or a dice are all fine.

**Also used in**

- **Engineering.** Testing a bridge design against thousands of random loads is a simulation.
- **Weather and finance.** Forecasts run thousands of simulated futures and report how often each happens.
- **Next lesson.** Running a simulation on a computer and comparing with the theory.

<!-- Speaker note: What this step is for: Returning to the shootout: plan how many digits the simulation needs, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A player scores 30% of the time. Which digits are goals?**

* Three digits, such as 0 to 2.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Starts AC9M9P03 node 1. Where it leads: running the simulation (next). -->
