---
marp: true
theme: default
html: true
---

# How big is a step?

Area, volume, circles and Pythagoras · Log scales

<!-- Speaker note: Students see that one step up the earthquake magnitude scale multiplies the energy by about 32, so several steps multiply it over and over (32 × 32 for two steps) instead of adding. This is what makes the scale logarithmic (AC9M10M02, node 1). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). Sources: Australian earthquakes explained (Geoscience Australia): each step up the magnitude scale is about a 32-fold increase in the energy released, https://ga.gov.au/news/news-archive/australian-earthquakes-explained (checked 25 October 2026). -->

---

## Today

- I can say that one step on a log scale multiplies, not adds.
- I can work out how many times as much energy two quakes differ by when they are several steps apart.
- I can explain why "only two points bigger" hides a multiplication of about a thousand.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need powers and scientific notation from Year 9. This is a hinge lesson: students who read a log scale as additive cannot read any log scale later (decibels, pH, the sizes ruler in the next lesson). The common mistake is multiplying the number of steps by 32 (Maya's working). The one figure is Geoscience Australia's: each step up the magnitude scale is about a 32-fold increase in the energy released. The lesson says "about" every time, because that is the source's word. It does not teach how a magnitude is measured, only what a step means. Teacher: Paper: the try-one after the worked example and the two quakes in Make are worked on paper first. Books out, and look for the steps counted before any multiplying. -->

---

## Why it matters

> Magnitude 5 and magnitude 6 look like neighbours on the news. Are they?

<!-- Speaker note: The news gives every earthquake one number, its magnitude, and the numbers are small: a 5, a 6, a 7. Small numbers like that usually mean small differences. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Geoscience Australia gives each earthquake a magnitude. About how many times as much energy does a magnitude 6 earthquake release than a magnitude 5?**

- About 32 times as much
- About 2 times as much
- Not much more: it's just one step up
- About 10 times as much

<!-- Speaker note: What happens: About 32 times as much. Geoscience Australia says each step up the magnitude scale is about a 32-fold increase in the energy released. One step on the scale is a multiplication, not an extra unit. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 2 times or 10 times read one step as a small change; those who chose 'not much more' read it as one extra unit. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Fhow-big-is-a-step%2Fstep-2&code=widget%3A+graph%0Aaxes%3A+M+%28magnitude%29%2C+E+%28times+a+magnitude+5%29%0Ax%3A+4%2C+8%0Ay%3A+-2%2C+40%0Agrid%3A+1%2C+10%0Aslider+m%3A+5%2C+6%2C+5%0Aplot%3A+y+%3D+32%5E%28x-5%29%0Apoint+A%3A+m%2C+32%5E%28m-5%29%0Atable%3A+5%2C+6%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/how-big-is-a-step/?full=step-2#step-2)

<!-- Speaker note: The board counts energy in "times a magnitude 5", so a magnitude 5 is 1. Slide up one step and read the table. Where does the curve go next? -->

<!-- Speaker note: Teacher: ask where the curve will be at magnitude 7 before anyone moves a slider (it is far off the top of the board). -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 32 times as much. Geoscience Australia says each step up the magnitude scale is about a 32-fold increase in the energy released. One step on the scale is a multiplication, not an extra unit.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Steps multiply

Here is one with three steps.

Now try one on paper: a magnitude 4 against a magnitude 2. Work out the steps first, then type how many times as much energy.

$$3 \to 6$$

1) $32 \times 32 \times 32$ — Each step multiplies the energy by about 32, so multiply three 32s.
2) $32 \times 32 = 1024$ — Two steps so far.
3) $1024 \times 32 = 32\,768$ — Three steps: about 33 000 times the energy.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 3 6 and say "Magnitude 3 up to magnitude 6 is 3 steps." Line 1: write 32 × 32 × 32 and say "Each step multiplies the energy by about 32, so multiply three 32s." Line 2: write 32 × 32 = 1024 and say "Two steps so far." Line 3: write 1024 × 32 = 32768 and say "Three steps: about 33 000 times the energy." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Steps multiply

**How many times as much energy does a magnitude 4 release than a magnitude 2? Use about 32 times for each step.**

* Answer: From 2 to 4 is 2 steps. (count the steps first); $32 \times 32$ (each step multiplies by 32, so multiply 32 by itself once for two steps); $32 \times 32 = 1024$ (work it out)

<!-- Speaker note: Two steps: 32 × 32 = 1024, so about a thousand times as much. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Maya works out how much more energy a magnitude 7 releases than a magnitude 4. Click the line where her working goes wrong.**

```
 1  Maya works out how many times more energy a magnitude 7 earthquake releases than a magnitude 4.
 2  Each step up the scale multiplies the energy by about 32.
 3  From 4 to 7 is 3 steps.
 4  So the energy goes up by 3 × 32 = 96 times.
 5  That is about 96 times as much energy.
```

* Answer: line 4

<!-- Speaker note: Line 4: three steps multiply by 32 three times, 32 × 32 × 32 = 32 768, not 3 × 32 = 96. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The same step

**The step from magnitude 4 to 5 and the step from magnitude 7 to 8 are both one step. What's the same about them?**

- Nothing: the bigger quake is a bigger step
- Each one adds about the same amount of energy
- Each one multiplies the energy by about the same number
- Each one releases about the same energy

* Answer: Each one multiplies the energy by about the same number

<!-- Speaker note: Equal steps on the scale mean the same multiplier. That's what makes it a logarithmic scale. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the step



- **Down a step:** 
- **Eight against five:** 
- **Back to steps:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/how-big-is-a-step/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing one thing at a time: going down a step instead of up, counting steps from the energy given, and working back from a big multiplier to a number of steps. Hints, in order: Going up multiplies by 32. / Going down is the other way. / Count the steps from 5 up to 8. / Multiply 32 that many times. / Try 32 × 32. / How many 32s did you multiply? For students who need more support: A table with one column for the magnitude and one for the energy: 5 is 1, 6 is 32, 7 is 32 × 32, and the student writes the next row. For early finishers: A magnitude 9 is how many times a magnitude 5? Write it as a power of 32, then roughly as a power of 10. The hard part, on purpose: Reading steps as additions: 3 steps as 3 × 32. Ask students: after one step the energy is 32 times as much. What is it after the next step, compared with where you started? When students get stuck: A student writes 3 steps = 3 × 32 = 96. Ask: After one step it's 32 times as much. After the second step, what do you multiply that by? Fix: By 32 again: 32 × 32, then × 32 again. / A student says a magnitude 4 has 32 times the energy of a magnitude 5. Ask: Is 4 higher or lower on the scale than 5? Fix: Lower, so it has less energy: a 32nd of it. / A student says the energy goes up by about 32 each step. Ask: Up by 32 means plus 32. Is that what the board shows? Fix: No: 1, 32, 1024. Times 32 each step, not plus 32. -->

<!-- Speaker note: Teacher: before 'down a step', ask whether the energy of a magnitude 4 is bigger or smaller than a 5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One step

**About how many times as much energy does a magnitude 7 earthquake release than a magnitude 6?**

* Answer: 32

<!-- Speaker note: One step up: 32. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Three steps

**About how many times as much energy does a magnitude 9 earthquake release than a magnitude 6? Type the number with no spaces.**

* Answer: 32768

<!-- Speaker note: 6 to 9 is 3 steps: 32 × 32 × 32 = 32768. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The smaller one

**A magnitude 5 earthquake releases what fraction of the energy of a magnitude 7? Give a fraction.**

* Answer: 1/1024

<!-- Speaker note: Two steps down divides by 32 twice: 1/1024. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: 32 768 written in scientific notation, rounded to one significant figure, is $3 \times 10^{k}$. What's $k$?**

* Answer: 4

<!-- Speaker note: 32 768 is about 30 000 = 3 × 10⁴: the point moves 4 places. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the two quakes



- **The main shock:** Back to the two quakes. Work this out on paper first, then type your answer.
- **The headline:** "Each step up the magnitude scale is about a 32-fold increase in the energy released": [Australian earthquakes explained, Geoscience Australia](https://ga.gov.a

<!-- Speaker note: What this step is for: Coming back to the magnitude 5 and 6 on the news: two steps is 32 × 32, about a thousand times the energy, and 'two points bigger' hides that. Hints, in order: How many steps from 5 to 7? / Multiply 32 that many times. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A magnitude 8 against a magnitude 6: about how many times as much energy?**

* About 1000 (32 × 32 = 1024).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Starts AC9M10M02. Where it leads: reading log scales in context (decibels, a ruler of sizes), then comparing quantities across many orders of magnitude. -->
