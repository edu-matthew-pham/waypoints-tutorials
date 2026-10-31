---
marp: true
theme: default
html: true
---

# Reading log scales

Area, volume, circles and Pythagoras · Log scales

<!-- Speaker note: Students read a decibel scale as steps that multiply (every 3 dB halves the safe time, so 100 dB allows 15 minutes against 8 hours), then use one ruler of powers of 10 to put a blood cell, a hair and the distance to the Sun side by side, and compare two sizes by counting steps (AC9M10M02, nodes 2 and 3). About 45 minutes (Predict and Run 8 min · Investigate 15 min · Modify 10 min · Practise and Make 12 min). Sources: Workplace exposure standards for noise (SafeWork SA): 85 dB(A) averaged over 8 hours; every 3 dB(A) increase doubles the risk of hearing damage, https://safework.sa.gov.au/workers/your-health-and-safety-at-work/hazardous-noise/workplace-exposure-standards (checked 25 October 2026); Micrometre (Wikipedia): hair width 20 to 200 micrometres, red blood cell 6 to 8, https://en.wikipedia.org/wiki/Micrometre (checked 25 October 2026); Earth facts (NASA): the average distance from the Sun, 150 million km, https://science.nasa.gov/earth/facts/ (checked 25 October 2026). -->

---

## Today

- I can read a level on the decibel scale as a number of 3 dB steps.
- I can explain why a log ruler is used for sizes that run from tiny to huge.
- I can compare two quantities on a log ruler by counting the steps between them.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need How big is a step? (the same multiplier each step) and scientific notation. Two ideas: a step on a log scale is a multiplication (halving per 3 dB), and a log ruler gives every power of 10 the same space, so the middle is a multiplication too. The common mistakes are taking hours off per step and averaging the ends of the ruler (Priya's working). Source: SafeWork SA's standard is 85 dB(A) averaged over 8 hours, and every 3 dB(A) increase doubles the risk of hearing damage. The lesson reads "doubles the risk" as "half the time for the same risk", so 88 dB is 4 hours, 91 dB is 2 hours and 100 dB is 15 minutes. That reading is the lesson's own, so check it against SafeWork's published exposure table before you rely on the minutes. The lesson never explains how decibels are calculated, only the 3 dB step. Sizes: red blood cell 6 to 8 micrometres and hair 20 to 200 micrometres (the lesson uses 8 and 70, Wikipedia, Micrometre); the Earth to the Sun about 150 million km (NASA). Teacher: Paper: the 97 dB try-one and the concert in Make are worked on paper first. Books out, and look for the steps counted before any halving. -->

---

## Why it matters

> A sound meter creeping from 85 to 88 hardly looks like a change. Is it?

<!-- Speaker note: A worker's sound meter sits on 85 and then creeps up to 88. Three notches on a dial doesn't sound like much, but a sound meter isn't a ruler. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A workplace is allowed to expose a worker to 85 dB for 8 hours a day. Every 3 dB more doubles the risk of hearing damage. How many hours is it safe to stay at 88 dB?**

- 6 hours
- 2 hours
- 4 hours
- 5 hours

<!-- Speaker note: What happens: 4 hours. Every 3 dB doubles the risk, so you can stay half as long for the same risk: 8 hours, then 4. It's a multiplication each step, not three hours taken off. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 5 hours took 3 hours off for 3 dB. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Freading-log-scales%2Fstep-2&code=widget%3A+graph%0Aaxes%3A+L+%28dB%29%2C+T+%28hours%29%0Ax%3A+82%2C+100%0Ay%3A+-0.5%2C+9%0Agrid%3A+3%2C+1%0Aslider+d%3A+85%2C+91%2C+85%2C+3%0Aplot%3A+y+%3D+8+*+0.5%5E%28%28x-85%29%2F3%29%0Apoint+A%3A+d%2C+8+*+0.5%5E%28%28d-85%29%2F3%29%0Atable%3A+85%2C+88%2C+91%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/reading-log-scales/?full=step-2#step-2)

<!-- Speaker note: Slide up another 3 dB, and another. Look at the table and then at the graph. What does the graph do? -->

<!-- Speaker note: Teacher: ask students to say what the next row of the table will be before they slide. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 4 hours. Every 3 dB doubles the risk, so you can stay half as long for the same risk: 8 hours, then 4. It's a multiplication each step, not three hours taken off.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Halving steps

Here's one the other way up. 94 dB is the same as 85 dB plus three steps.

Now try one on paper: 97 dB. Work out the steps first, then type the hours.

$$94 - 85 = 9$$

1) $9 \div 3 = 3$ — Each 3 dB is one step, so 3 steps.
2) $8 \div 2 \div 2 \div 2$ — Each step halves the safe time, so halve 3 times.
3) $8 \div 8 = 1$ — Halving 3 times is dividing by 2 × 2 × 2 = 8: 1 hour.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 94 - 85 = 9 and say "How far above 85 dB." Line 1: write 9 ÷ 3 = 3 and say "Each 3 dB is one step, so 3 steps." Line 2: write 8 ÷ 2 ÷ 2 ÷ 2 and say "Each step halves the safe time, so halve 3 times." Line 3: write 8 ÷ 8 = 1 and say "Halving 3 times is dividing by 2 × 2 × 2 = 8: 1 hour." -->

<!-- Speaker note: Teacher: put the ruler on the board and ask where 10⁻² m would sit before they answer the middle question. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Halving steps

**How many hours is it safe to stay at 97 dB? Use 8 hours at 85 dB, and halve the time for every 3 dB more.**

* Answer: $97 - 85 = 12$ dB more (how far above 85); $12 \div 3 = 4$ steps (each 3 dB is one step); $8 \div 2 \div 2 \div 2 \div 2 = 8 \div 16$ (halve once for each step, four times); $8 \div 16 = 0.5$ hours (half an hour, or 30 minutes)

<!-- Speaker note: 12 dB is 4 steps: 8 ÷ 16 = 0.5 hours, which is 30 minutes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One ruler for sizes

**The ruler shows a red blood cell, a hair and the distance to the Sun. Why are its marks 10 times apart each time instead of 1 metre apart?**

- It's only a style: either ruler shows the same picture
- The sizes cover so many powers of 10 that 1 metre apart would squash the cell and the hair together, and the Sun off the page
- Because 10 is an easier number than 1
- Because the Sun is exactly 10 times bigger than a hair

* Answer: The sizes cover so many powers of 10 that 1 metre apart would squash the cell and the hair together, and the Sun off the page

<!-- Speaker note: A log ruler gives every power of 10 the same space, so tiny and enormous sizes both fit on one page. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Priya finds the number halfway between 10 m and 1000 m on a ruler like this. Click the line where her working goes wrong.**

```
 1  Priya's ruler has marks at 10 m and 1000 m. She finds the number halfway between them.
 2  The ruler has equal steps of ×10 between its marks.
 3  Halfway between 10 and 1000 is the average of the two.
 4  (10 + 1000) ÷ 2 = 505.
 5  So the halfway mark is 505 m.
```

* Answer: line 3

<!-- Speaker note: Line 3: on a ruler with equal steps of ×10 the halfway mark is one ×10 step from each end, 100 m, not the average, 505 m. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the level



- **Thirty minutes:** 
- **Further up:** 
- **Below the line:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/reading-log-scales/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: a louder level, a level a long way up the dial, and a level below 85 where the multiplier goes the other way. Hints, in order: Use the table for 97 dB. / A quarter of an hour is 15 minutes. / 103 − 85 = 18 dB. / How many 3 dB steps is that? / 82 is 3 dB below 85. / Going down a step does the opposite of going up. For students who need more support: A strip with the decibel levels 85, 88, 91, 94, 97, 100 and the safe time under each, filled in from the left. For early finishers: The safe time at 100 dB is 32 times shorter than at 85 dB. The earthquake step was 32 times the energy. Do those two 32s mean the same thing? The hard part, on purpose: Using the average for the middle of a log ruler, or taking hours off instead of halving. Ask students: is each step on the ruler the same amount added, or the same number multiplied? When students get stuck: A student says 91 dB is 8 − 3 − 3 = 2 hours, and 100 dB is 8 − 15 = a negative time. Ask: At 88 dB is the time 3 hours less, or half as long? Fix: Half as long. Halve once for every 3 dB: 15 dB is 5 halvings. / A student says halfway between 10 m and 1000 m is 505 m. Ask: How many ×10 steps are there between 10 and 1000? Fix: Two. Halfway is one step from each end: 100 m. / A student says halving 5 times is dividing by 10. Ask: What is 2 × 2 × 2 × 2 × 2? Fix: 32. Five halvings divide by 32. -->

<!-- Speaker note: Teacher: before 82 dB, ask whether 82 is above or below 85. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hours

**How many hours is it safe to stay at 91 dB?**

* Answer: 2

<!-- Speaker note: 91 dB is 2 steps above 85: 8 ÷ 4 = 2 hours. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The middle

**A ruler has marks at 100 and 10 000, with equal steps of ×10 between them. What number is halfway along?**

* Answer: 1000

<!-- Speaker note: From 100, one step is 1000 and the next step is 10 000. Halfway is 1000. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The gap

**On the sizes ruler a hair is near $10^{-4}$ m and the Earth to the Sun is near $10^{11}$ m. The Sun's distance is about $10^{k}$ times a hair. What's $k$?**

* Answer: 15

<!-- Speaker note: From -4 to 11 is 15 steps along the ruler, each ×10, so 10¹⁵. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: $0.000008$ m written as $8 \times 10^{k}$ m. What's $k$?**

* Answer: -6

<!-- Speaker note: The point moves 6 places right to reach 8: k = −6. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the concert



- **Standing at the concert:** Back to the concert. Work this out on paper first, then type your answer.
- **How many times shorter?:** 85 dB(A) averaged over 8 hours is the workplace exposure standard, and every 3 dB(A) increase doubles the risk of hearing damage: [Workplace exposure standards 

<!-- Speaker note: What this step is for: Coming back to the noise limit: a loud concert is five 3 dB steps above 85, so the safe time is halved five times, and the comparison with 8 hours is a ratio of 32. Hints, in order: How many dB above 85 is 100? / Halve the 8 hours once for each 3 dB step. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**How many hours is it safe to stay at 94 dB, if 85 dB allows 8 hours and every 3 dB halves it?**

* 1 hour (3 steps, 8 ÷ 8).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Finishes AC9M10M02. Where it leads: exponential graphs and growth and decay (Year 10 Algebra), and science scales that run over many powers of ten. -->
