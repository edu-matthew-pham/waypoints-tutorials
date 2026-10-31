---
marp: true
theme: default
html: true
---

# One error, one result

Area, volume, circles and Pythagoras · Measurement error

<!-- Speaker note: Students see that a calculated result carries the errors of every measurement in it, find the lowest and highest a result could be from the lowest and highest of each measurement, and see why the area's error is bigger than a length's (AC9M10M04, node 2). About 45 minutes (Predict and Run 8 min · Investigate 14 min · Modify 10 min · Practise and Make 13 min). -->

---

## Today

- I can find the lowest and highest a result could be from the lowest and highest of each measurement.
- I can say how far a result could be out.
- I can explain why an area is out by more than a length.

<!-- Speaker note: Before class: Students need bounds from Every measurement is an estimate (Year 9) and percentage error. This is a hinge lesson: students who cannot trace one error into a result cannot reason about errors that build up (next lesson). Do the Run board yourself first: under the working it shows the lowest and highest the result could be. The board reads each slider as a reading to the nearest 0.1, because the lesson's `accuracy: 0.1` setting; the two numbers are found by trying every low and high combination, which is exact for products and sums. The room, courtyard and tile are made up for the task. The method is a worst case: errors in practice often partly cancel, which the next lesson comes back to. Teacher: Paper: the courtyard after the worked example and the carpet order in Make are worked on paper first. -->

---

## Why it matters

> A room is 4.0 m by 3.0 m, to the nearest 10 cm. How much carpet do you order?

<!-- Speaker note: A carpet shop sells by the square metre. You measure a room with a tape marked every 10 cm and get 4.0 m by 3.0 m. How much carpet should you order so that you are sure to have enough? Have a guess, and we'll come back to it at the end. (The room is made up for the task.) <figure class="situation" role="img" aria-label="A rectangular room drawn from above, labelled 4.0 metres along the top and 3.0 metres down the side, each to the nearest 10 centimetres. Inside is a question mark: how many square metres of carpet."><svg viewBox="0 0 380 190" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="40" width="240" height="120" stroke-width="2.4" fill="#D85A30" fill-opacity="0.15"/><text x="180" y="28" text-anchor="middle" fill="currentColor" stroke="none">4.0 m (nearest 10 cm)</text><text x="312" y="105" fill="currentColor" stroke="none">3.0 m</text><text x="180" y="108" text-anchor="middle" fill="currentColor" stroke="none" font-size="30">? m²</text><text x="180" y="182" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" opacity="0.8">of carpet to be sure it covers the floor</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Each length is 'to the nearest 10 cm', so each could be 5 cm (0.05 m) bigger. What is the largest the floor's area could really be?**

- About 12.35 m²
- About 12.6 m²
- About 12.05 m²
- Exactly 12 m²

<!-- Speaker note: What happens: About 12.35 m². Both lengths could be 5 cm bigger at the same time: 4.05 × 3.05 = 12.3525 m². The area is out by about 0.35 m², not 0.05. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Those who pick 12.05 are using one length's error for the area; ask them to draw the room with both lengths 5 cm longer. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Fone-error-one-result%2Fstep-2&code=widget%3A+formula%0Aformula%3A+A+%3D+lw%0Aslider+l%3A+3%2C+5%2C+3.5%2C+0.1%0Aslider+w%3A+2%2C+4%2C+2.5%2C+0.1%0Aaccuracy%3A+0.1%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/one-error-one-result/?full=step-2#step-2)

<!-- Speaker note: Each slider is a reading to the nearest 0.1 m, so the board shows what it could really be, 0.05 m either way, in brackets. Under the working it shows the lowest and highest the area could be. -->

<!-- Speaker note: Teacher: before moving a slider, ask what the highest area will be if the length is the high bound but the width is not. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 12.35 m². Both lengths could be 5 cm bigger at the same time: 4.05 × 3.05 = 12.3525 m². The area is out by about 0.35 m², not 0.05.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Highest and lowest

Now try one on paper after the worked example: a courtyard 8.0 m by 5.0 m, each to the nearest 0.1 m. Work out the highest the area could be, then how far above the measured area that is.

$$l: 3.95 \text{ to } 4.05,\; w: 2.95 \text{ to } 3.05$$

1) $\text{lowest } A = 3.95 \times 2.95 = 11.6525$ — Both at their lowest.
2) $\text{highest } A = 4.05 \times 3.05 = 12.3525$ — Both at their highest.
3) $12.3525 - 12 = 0.3525$ — How far above the measured 12 m² the area could be.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write l: 3.95 to 4.05, w: 2.95 to 3.05 and say "Each reading is out by up to 0.05 m, so write its lowest and highest." Line 1: write lowest A = 3.95 × 2.95 = 11.6525 and say "Both at their lowest." Line 2: write highest A = 4.05 × 3.05 = 12.3525 and say "Both at their highest." Line 3: write 12.3525 - 12 = 0.3525 and say "How far above the measured 12 m² the area could be." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Highest and lowest

**A courtyard is measured as 8.0 m by 5.0 m, each to the nearest 0.1 m. How far above the measured area could the real area be, at most? (m²)**

* Answer: $8.0 + 0.05 = 8.05$ and $5.0 + 0.05 = 5.05$ (the highest each length could be); $8.05 \times 5.05 = 40.6525$ (the highest the area could be); $40.6525 - 40 = 0.6525$ (take away the measured area, $8.0 \times 5.0 = 40$)

<!-- Speaker note: 8.05 × 5.05 = 40.6525 and 40.6525 − 40 = 0.6525, about 0.65 m²: more than ten times the 0.05 m each length could be out by. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Lowest

**The lengths are $4.0$ m and $3.0$ m, each to the nearest $0.1$ m. What is the lowest the area could be? (m², 2 decimal places)**

* Answer: 11.65

<!-- Speaker note: 3.95 × 2.95 = 11.6525, about 11.65 m². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How much bigger

**The measured area is $4.0 \times 3.0 = 12$ m². How much bigger than that could the area be, at most? (m², 2 decimal places)**

* Answer: 0.35

<!-- Speaker note: 4.05 × 3.05 = 12.3525, and 12.3525 − 12 = 0.3525, about 0.35 m². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Noor works out how much carpet to order. Click the line where her working goes wrong.**

```
 1  Noor measures a room as 4.0 m by 3.0 m, each to the nearest 0.1 m.
 2  Each length could be out by 0.05 m.
 3  The area is 4.0 × 3.0 = 12.0 m².
 4  So the area is out by 0.05 m², at most 12.05 m².
 5  She orders 12.05 m² of carpet.
```

* Answer: line 4

<!-- Speaker note: Line 4: each length can be 0.05 m out, but the area is length times width, and both are out at once. The area could be out by about 0.35 m², not 0.05 m². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why bigger

**The area could be out by about 0.35 m², much more than the 0.05 m each length could be out by. Why?**

- Both lengths are out, and each error is multiplied by the other length: about 4 × 0.05 + 3 × 0.05
- The tape is worse at measuring areas
- The error is always multiplied by 7 for any room
- Because the area is in square metres

* Answer: Both lengths are out, and each error is multiplied by the other length: about 4 × 0.05 + 3 × 0.05

<!-- Speaker note: A strip 4 m long and 0.05 m wide plus a strip 3 m long and 0.05 m wide is about 0.2 + 0.15 = 0.35 m² of extra floor. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Other measurements



- **A fence:** 
- **A finer tape:** 
- **A coarse tape:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/one-error-one-result/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing the formula or the accuracy changes the result's error: a perimeter adds the lengths' errors, and a coarser tape makes the area's error much bigger. Hints, in order: The perimeter is 2l + 2w. Each of the four sides could be 0.05 m out. / Four sides, each 0.05 m. / Nearest centimetre means 0.005 m either way. / 4.005 × 3.005. / Nearest whole metre means 0.5 m either way. / 4.5 × 3.5. For students who need more support: A rectangle drawn on squared paper with the extra 0.05 strips shaded along two sides. For early finishers: Show that the percentage error of the area is close to the sum of the percentage errors of the length and the width. Why does it not quite match? The hard part, on purpose: Taking the area's error to be a length's error (0.05 m, so 0.05 m²). Ask: if the length and the width are both 5 cm bigger, how much extra floor is that? When students get stuck: A student says the area is out by 0.05 m². Ask: If the length and the width are both 5 cm longer, how big is the extra strip of floor? Fix: Two strips: about 4 × 0.05 and 3 × 0.05, so about 0.35 m². / A student uses the lowest length with the highest width. Ask: Which pair gives the biggest area? Fix: Both at their highest. For the lowest area use both at their lowest. / A student gives the order as 12.35 m². Ask: Can you buy 12.35 m² of carpet? Fix: Sold in whole square metres: round up to 13. -->

<!-- Speaker note: Teacher: with the perimeter, ask why four small errors add rather than multiply. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A rectangle

**A rectangle is measured as $6.0$ m by $2.0$ m, each to the nearest $0.1$ m. What is the highest its area could be? (m², 2 decimal places)**

* Answer: 12.4

<!-- Speaker note: 6.05 × 2.05 = 12.4025, about 12.40 m². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A tile

**A square tile is measured as $0.30$ m by $0.30$ m, each to the nearest $0.01$ m. What is the lowest its area could be? (m², 4 decimal places)**

* Answer: 0.087

<!-- Speaker note: Each side could be 0.295 m: 0.295 × 0.295 = 0.087025, about 0.0870 m². -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: the room's area is $12$ m² and could be out by $0.35$ m². What is the percentage error? (%, 1 decimal place)**

* Answer: 2.9

<!-- Speaker note: 0.35 ÷ 12 = 0.0292, × 100 = 2.9%. Each length had a percentage error of about 1.3% and 1.7%: the area's percentage error is close to their sum. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the carpet order



- **The order:** Work this out on paper first, then type your answer.
- **Beyond the measuring:** The room and its measurements are made up for the task. **Also used in** - **Building.** Ordering paint, tiles or turf: the error in the area is bigger than the

<!-- Speaker note: What this step is for: Back to the carpet: to be sure it covers the floor you order for the highest the area could be, which is more than the measured area. Hints, in order: Use the highest length and width. / 4.05 × 3.05 = 12.3525. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A square is measured as 5.0 m by 5.0 m, each to the nearest 0.1 m. What is the highest its area could be?**

* 5.05 × 5.05 = 25.5025 m².

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10M04 (node 2). Where it leads: errors that build up over many steps (next lesson), and the percentage error of a result. -->
