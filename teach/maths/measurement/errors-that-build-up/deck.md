---
marp: true
theme: default
html: true
---

# Errors that build up

Area, volume, circles and Pythagoras · Measurement error

<!-- Speaker note: Students see that errors add up over many steps: a total of several readings has a worst-case error of the number of pieces times one piece's error, and a product of several measurements has about the sum of their percentage errors (AC9M10M04, node 3). About 40 minutes (Predict and Run 8 min · Investigate 14 min · Modify 8 min · Practise and Make 10 min). -->

---

## Today

- I can find how far out a total of many readings could be.
- I can say that percentage errors add up when measurements are multiplied.
- I can say what a worst-case bound does and does not tell me.

<!-- Speaker note: Before class: Students need One error, one result. The Run and Modify boards use the `accuracy: 0.1` setting of the formula board, so under the working they show the lowest and highest the result could be. For the volume board these are found at the corners, which is exact for products of positive numbers. The honest point: the bounds are worst cases, where every error pushes the same way. Real errors partly cancel, so the real error is usually much smaller. A bound is what you can promise, not what will happen. The wall, fence, tank and boxes are made up for the task. Teacher: Paper: the box after the worked example and the beam in Make are worked on paper first. -->

---

## Why it matters

> A builder tapes a 20 m wall one 4 m piece at a time. Each piece is measured to the nearest 10 cm.

<!-- Speaker note: A builder tapes a long wall one piece at a time, five pieces of about 4 m each, and measures each piece to the nearest 10 cm. All five come out at 4.0 m, so the wall is 20.0 m. Have a guess how far out the 20.0 m could be, and we'll come back to it at the end. (The wall is made up for the task.) <figure class="situation" role="img" aria-label="A wall drawn as five equal pieces end to end, each labelled 4.0 metres to the nearest 10 centimetres. Above the whole wall is a bracket labelled 20.0 metres, and a question mark: how far out could the total be."><svg viewBox="0 0 400 140" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-width="2"><rect x="20" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/><rect x="92" y="70" width="72" height="30" fill="#1D9E75" fill-opacity="0.2"/><rect x="164" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/><rect x="236" y="70" width="72" height="30" fill="#1D9E75" fill-opacity="0.2"/><rect x="308" y="70" width="72" height="30" fill="#378ADD" fill-opacity="0.2"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="56" y="90">4.0 m</text><text x="128" y="90">4.0 m</text><text x="200" y="90">4.0 m</text><text x="272" y="90">4.0 m</text><text x="344" y="90">4.0 m</text><text x="200" y="124" font-size="12" opacity="0.8">each piece to the nearest 10 cm</text><text x="200" y="32" font-size="18">20.0 m, out by ?</text></g><path d="M20 56 v-10 h360 v10" stroke-width="1.6"/></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Each piece could be 5 cm (0.05 m) out. How far out could the 20.0 m total be, at most?**

- 5 cm
- 10 cm
- 25 cm
- 50 cm

<!-- Speaker note: What happens: 25 cm. In the worst case all five pieces are 5 cm too long, so the errors add: 5 × 5 cm = 25 cm. A total made of more pieces can be out by more. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Those who pick 5 cm are using one piece's error; ask them how long the wall is if all five pieces are 5 cm too long. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fmeasurement%2Ferrors-that-build-up%2Fstep-2&code=widget%3A+formula%0Aformula%3A+T+%3D+a+%2B+b+%2B+c+%2B+d+%2B+e%0Aslider+a%3A+3%2C+5%2C+4.2%2C+0.1%0Aslider+b%3A+3%2C+5%2C+3.8%2C+0.1%0Aslider+c%3A+3%2C+5%2C+4.1%2C+0.1%0Aslider+d%3A+3%2C+5%2C+3.9%2C+0.1%0Aslider+e%3A+3%2C+5%2C+4.3%2C+0.1%0Aunits%3A+m%0Aaccuracy%3A+0.1%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/measurement/errors-that-build-up/?full=step-2#step-2)

<!-- Speaker note: Each slider is a reading to the nearest 0.1 m. Under the working, the board shows the lowest and highest the total could be. Try changing one piece: does the gap between lowest and highest change? -->

<!-- Speaker note: Teacher: ask what happens to the gap between lowest and highest when one slider moves (nothing: the gap is fixed by the number of pieces). -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 25 cm. In the worst case all five pieces are 5 cm too long, so the errors add: 5 × 5 cm = 25 cm. A total made of more pieces can be out by more.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## A box

Now try one on paper after the worked example: a box 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. Work out the highest the volume could be.

$$l = 2.0,\; w = 1.5,\; h = 1.0$$

1) $\dfrac{0.05}{2.0} = 2.5\%,\; \dfrac{0.05}{1.5} = 3.3\%,\; \dfrac{0.05}{1.0} = 5\%$ — Each measurement's percentage error.
2) $2.5 + 3.3 + 5 = 10.8\%$ — Multiplying three measurements adds their percentage errors, about.
3) $V = 2.0 \times 1.5 \times 1.0 = 3.0$ — The measured volume.
4) $3.0 \times 0.108 \approx 0.32$ — So the volume could be out by about 0.32 m³ either way.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write l = 2.0, w = 1.5, h = 1.0 and say "A tank measured to the nearest 0.1 m (made up)." Line 1: write 0.05 ÷ 2.0 = 2.5\%, 0.05 ÷ 1.5 = 3.3\%, 0.05 ÷ 1.0 = 5\% and say "Each measurement's percentage error." Line 2: write 2.5 + 3.3 + 5 = 10.8\% and say "Multiplying three measurements adds their percentage errors, about." Line 3: write V = 2.0 × 1.5 × 1.0 = 3.0 and say "The measured volume." Line 4: write 3.0 × 0.108 0.32 and say "So the volume could be out by about 0.32 m³ either way." -->

<!-- Speaker note: Teacher: the ten shorter pieces make the point that more steps means more error. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A box

**A box is 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. What is the highest its volume could be? (cm³, 1 decimal place)**

* Answer: $10.05$, $6.05$ and $5.05$ (the highest each side could be); $10.05 \times 6.05 = 60.8025$ (multiply the first two); $60.8025 \times 5.05 = 307.05$ (then the third)

<!-- Speaker note: 10.05 × 6.05 × 5.05 = 307.05, about 7 cm³ more than the measured 300: the error grew as more measurements were multiplied. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Five pieces

**Five pieces are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m, 2 decimal places)**

* Answer: 0.25

<!-- Speaker note: 5 × 0.05 = 0.25 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Ten shorter pieces

**Ten pieces of $2.0$ m are each measured to the nearest $0.1$ m, so the total is $20.0$ m. How far out could the total be, at most? (m)**

* Answer: 0.5

<!-- Speaker note: 10 × 0.05 = 0.5 m. The same 20 m wall, measured in shorter pieces, could be out by twice as much. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam lays a 1 m ruler end to end 30 times along a fence. Click the line where his working goes wrong.**

```
 1  Sam measures a 30 m fence by laying a 1 m ruler end to end, 30 times.
 2  Each time he marks the end of the ruler he could be out by up to 1 cm.
 3  So the whole fence could be out by 1 cm.
 4  He writes the fence as 30.00 m, to the nearest centimetre.
```

* Answer: line 3

<!-- Speaker note: Line 3: each placement could be 1 cm out, and the 30 errors add. In the worst case the fence is out by 30 × 1 cm = 30 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What the bound means

**The worst case for the fence is 30 cm out. What does that number tell you?**

- It cannot be out by more than 1 cm
- Nothing: the errors cancel out completely
- How far out it is: exactly 30 cm
- The most it could be out; it will usually be less, because some errors go up and others down

* Answer: The most it could be out; it will usually be less, because some errors go up and others down

<!-- Speaker note: The bound is what you can promise: it is not out by more than that. Random errors that go both ways usually leave the real error smaller. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## More factors, a tiny one



- **Three factors:** 
- **A thin box:** 
- **A cube:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/measurement/errors-that-build-up/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing what is multiplied changes how fast the error grows: each extra measurement adds its percentage error, and a small measurement has the biggest percentage error. Hints, in order: Add 1.4 + 2 + 2.3. / Percentage errors of l, w and h. / Work out each percentage error. / 0.05 ÷ 10, 0.05 ÷ 6, 0.05 ÷ 0.5. / Think of 1.02 × 1.02 × 1.02. / Three equal measurements. For students who need more support: A table with the number of pieces down the side and the worst-case error beside it. For early finishers: A wall is measured as one piece to the nearest 10 cm, and the same wall as 100 pieces each to the nearest 1 cm. Which total is better known? The hard part, on purpose: Taking a long job's error to be one step's error. Ask: if every piece is 5 cm too long, how long is the wall? When students get stuck: A student says the fence is out by 1 cm. Ask: How many times did Sam place the ruler? Fix: 30 times, each up to 1 cm out: up to 30 cm in the worst case. / A student multiplies the percentage errors. Ask: If a side is 2% too big, how many times is it counted in a cube's volume? Fix: Three times: 2% + 2% + 2%, about 6%. / A student says the real error is 30 cm. Ask: Do all 30 errors have to go the same way? Fix: No: 30 cm is the most, not what it is. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Eight pieces

**Eight pieces of $2.5$ m are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m)**

* Answer: 0.4

<!-- Speaker note: 8 × 0.05 = 0.4 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A square

**A square garden has a side of $5.0$ m to the nearest $0.1$ m. How far above $25$ m² could the area be, at most? (m²)**

* Answer: 0.5

<!-- Speaker note: 5.05 × 5.05 = 25.5025, so 0.5025 m² above 25. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a rectangle is $8.0$ m by $5.0$ m, each to the nearest $0.1$ m. What is the lowest its area could be? (m², 2 decimal places)**

* Answer: 39.35

<!-- Speaker note: 7.95 × 4.95 = 39.3525. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the wall



- **The beam:** Work this out on paper first, then type your answer.
- **A tighter total:** The wall and its measurements are made up for the task. **Also used in** - **Building.** A long fence or a run of kitchen cabinets set out piece by piece: the e

<!-- Speaker note: What this step is for: Back to the wall: the total could be 25 cm out, so a beam cut to the measured length might be short; the length to order is the highest the total could be. Hints, in order: Each piece could be 4.05 m. / 5 × 4.05. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Twelve pieces are each measured to the nearest 0.1 m. How far out could the total be, at most?**

* 12 × 0.05 = 0.6 m.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10M04 (node 3). Where it leads: scale and plans, where a reading from the plan is multiplied by the scale and so is its error. -->
