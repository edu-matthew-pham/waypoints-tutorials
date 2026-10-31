---
marp: true
theme: default
html: true
---

# Every measurement is an estimate

Area, volume, circles and Pythagoras · Measurement error

<!-- Speaker note: Students find the lower and upper bounds of a measurement from its precision (AC9M9M04, node 1). About 35 minutes (Predict and Run 6 min · Investigate 10 min · Modify 8 min · Practise and Make 11 min). -->

---

## Today

- I can say why a measurement is only an estimate.
- I can find the bounds from a reading and its precision.
- I can decide if a part passes a tolerance.

<!-- Speaker note: Before class: Students need Scientific notation and decimals. The one idea: half the smallest mark either side. A measured value alone is not the whole story. The bolt hole numbers are made up for the task. Have rulers and a stopwatch so students can measure something. Teacher: Paper: the upper bound in Make is worked on paper first. -->

---

## Why it matters

> A bolt hole must be 20 mm, give or take 0.05 mm. A measured hole is 20.04 mm. Does it pass?

<!-- Speaker note: A factory makes a bolt hole that must be 20 mm, give or take 0.05 mm. An inspector measures one and gets 20.04 mm. Does it pass? Have a guess, and we'll come back to it at the end. (The numbers are made up for the task.) <figure class="situation" role="img" aria-label="A ruler marked in millimetres with a line at the 24 mm mark, and a shaded band from 23.5 to 24.5 millimetres around it."><svg viewBox="0 0 360 120" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="50" width="320" height="30" stroke-width="1.5"/><g stroke-width="1"><path d="M60 50 v14 M100 50 v14 M140 50 v14 M180 50 v14 M220 50 v14 M260 50 v14 M300 50 v14"/></g><rect x="190" y="30" width="40" height="20" fill="#D85A30" fill-opacity="0.35" stroke="none"/><path d="M210 30 v50" stroke="#D85A30" stroke-width="2"/><text x="180" y="100" fill="currentColor" stroke="none">reads 24 mm</text><text x="168" y="24" fill="currentColor" stroke="none">23.5 to 24.5?</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A ruler with marks every 1 mm reads 24 mm for a length. What could the true length be?**

- Anything from 23.5 mm to 24.5 mm
- Anything from 23 mm to 25 mm
- Exactly 24 mm
- Anything from 24 mm to 25 mm

<!-- Speaker note: What happens: Anything from 23.5 mm to 24.5 mm. The reading is the nearest mark, so the true length is within half a millimetre of 24 either way. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Anything from 23.5 mm to 24.5 mm. The reading is the nearest mark, so the true length is within half a millimetre of 24 either way.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/measurement/every-measurement-estimate/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/measurement/every-measurement-estimate/?full=step-2#step-2)

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Bounds

$$\text{reading } 24 \text{ mm, to the nearest } 1 \text{ mm}$$

1) $1 \div 2 = 0.5$ — Half the smallest mark.
2) $24 - 0.5 = 23.5$ — Lower bound.
3) $24 + 0.5 = 24.5$ — Upper bound.
4) $23.5 \le \text{true length} < 24.5$ — The true value is in this range.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write reading 24 mm, to the nearest 1 mm and say "The smallest mark is 1 mm." Line 1: write 1 ÷ 2 = 0.5 and say "Half the smallest mark." Line 2: write 24 - 0.5 = 23.5 and say "Lower bound." Line 3: write 24 + 0.5 = 24.5 and say "Upper bound." Line 4: write 23.5 true length < 24.5 and say "The true value is in this range." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Bounds

**A tape reads $156$ cm to the nearest cm. What is the upper bound? (cm)**

* Answer: 156.5

<!-- Speaker note: 156 + 0.5 = 156.5 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Half the mark

**A scale reads $3.2$ kg to the nearest $0.1$ kg. What is the upper bound? (kg)**

* Answer: 3.25

<!-- Speaker note: Half of 0.1 is 0.05, so 3.2 + 0.05 = 3.25 kg. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Max checks a bolt measured to the nearest millimetre. Click the line where his working goes wrong.**

```
 1  The ruler reads 20 mm to the nearest mm.
 2  So the bolt is exactly 20 mm.
 3  The tolerance is 19.95 to 20.05, so it passes.
```

* Answer: line 2

<!-- Speaker note: Line 2: a reading of 20 mm to the nearest mm only says the true value is between 19.5 and 20.5 mm. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the instrument



- **Upper bound:** 
- **Does it pass:** 
- **On the limit:** 

<!-- Speaker note: What this step is for: A finer instrument has narrower bounds, but never none. Hints, in order: The smallest mark is 0.01 mm. / Half of that is 0.005. / The part passes if it's between 19.95 and 20.05. / Is the upper bound inside? / Compute the upper bound for 20.05. / 20.05 + 0.005. For students who need more support: A printed ruler with bounds shaded. For early finishers: Measure a desk with a ruler marked in cm and mm and compare the bounds. The hard part, on purpose: Thinking a reading is exact. Ask: could the true length be a bit more than the nearest mark? When students get stuck: A student gives the bounds as ±1 unit. Ask: How far could a reading be from the true value if it is the nearest mark? Fix: Half a mark. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Lower bound

**A reading is 12 cm to the nearest cm. What is the lower bound? (cm)**

* Answer: 11.5

<!-- Speaker note: 12 − 0.5 = 11.5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Upper bound

**A reading is 4.6 s to the nearest 0.1 s. What is the upper bound? (s)**

* Answer: 4.65

<!-- Speaker note: 4.6 + 0.05 = 4.65. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a shape's side is 5 cm. It is enlarged with a scale factor of 3. What is the new area if the original area was 4 cm²? (cm²)**

* Answer: 36

<!-- Speaker note: 4 × 3² = 36. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: does it pass



- **The upper bound:** 
- **Why precision matters:** **Also used in** - **Manufacturing.** Parts are made to a tolerance and checked with calibrated instruments. - **Science.** Every result has an uncertainty, and

<!-- Speaker note: What this step is for: Returning to the bolt hole: both bounds must sit inside the tolerance for the part to pass for sure. Hints, in order: Half of 0.01 is 0.005. / Compare the bounds with 19.95 and 20.05. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A reading is 7 cm to the nearest cm. What are the bounds?**

* 6.5 cm and 7.5 cm.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M9M04 node 1. Where it leads: Absolute and relative error. -->
