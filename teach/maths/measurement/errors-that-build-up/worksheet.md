---
title: "Errors that build up"
subtitle: "Area, volume, circles and Pythagoras · Measurement error · Lesson 45"
---

# Errors that build up

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A builder tapes a 20 m wall one 4 m piece at a time. Each piece is measured to the nearest 10 cm.


:::teacher-note

**In one sentence:** Students see that errors add up over many steps: a total of several readings has a worst-case error of the number of pieces times one piece's error, and a product of several measurements has about the sum of their percentage errors (AC9M10M04, node 3).

**Students should be able to say:** I can find how far out a total of many readings could be. I can say that percentage errors add up when measurements are multiplied. I can say what a worst-case bound does and does not tell me.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Each piece could be 5 cm (0.05 m) out. How far out could the 20.0 m total be, at most?**

☐ 5 cm

☐ 10 cm

☐ 25 cm

☐ 50 cm

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 25 cm. In the worst case all five pieces are 5 cm too long, so the errors add: 5 × 5 cm = 25 cm. A total made of more pieces can be out by more.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## More steps, more error


:::keep-together

### A box

1. $l = 2.0,\; w = 1.5,\; h = 1.0$ — A tank measured to the nearest 0.1 m (made up).
2. $\dfrac{0.05}{2.0} = 2.5\%,\; \dfrac{0.05}{1.5} = 3.3\%,\; \dfrac{0.05}{1.0} = 5\%$ — Each measurement's percentage error.
3. $2.5 + 3.3 + 5 = 10.8\%$ — Multiplying three measurements adds their percentage errors, about.
4. $V = 2.0 \times 1.5 \times 1.0 = 3.0$ — The measured volume.
5. $3.0 \times 0.108 \approx 0.32$ — So the volume could be out by about 0.32 m³ either way.

Now try one on paper after the worked example: a box 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. Work out the highest the volume could be.

**A box is 10.0 cm by 6.0 cm by 5.0 cm, each to the nearest 0.1 cm. What is the highest its volume could be? (cm³, 1 decimal place)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** $10.05$, $6.05$ and $5.05$ (the highest each side could be); $10.05 \times 6.05 = 60.8025$ (multiply the first two); $60.8025 \times 5.05 = 307.05$ (then the third)

10.05 × 6.05 × 5.05 = 307.05, about 7 cm³ more than the measured 300: the error grew as more measurements were multiplied.

:::


:::keep-together

### Five pieces

**Five pieces are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m, 2 decimal places)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.25

5 × 0.05 = 0.25 m.

:::


:::keep-together

### Ten shorter pieces

**Ten pieces of $2.0$ m are each measured to the nearest $0.1$ m, so the total is $20.0$ m. How far out could the total be, at most? (m)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.5

10 × 0.05 = 0.5 m. The same 20 m wall, measured in shorter pieces, could be out by twice as much.

:::


:::keep-together

### Find the mistake

**Sam lays a 1 m ruler end to end 30 times along a fence. Click the line where his working goes wrong.**

```
 1  Sam measures a 30 m fence by laying a 1 m ruler end to end, 30 times.
 2  Each time he marks the end of the ruler he could be out by up to 1 cm.
 3  So the whole fence could be out by 1 cm.
 4  He writes the fence as 30.00 m, to the nearest centimetre.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: each placement could be 1 cm out, and the 30 errors add. In the worst case the fence is out by 30 × 1 cm = 30 cm.

:::


:::keep-together

### What the bound means

**The worst case for the fence is 30 cm out. What does that number tell you?**

☐ It cannot be out by more than 1 cm

☐ Nothing: the errors cancel out completely

☐ How far out it is: exactly 30 cm

☐ The most it could be out; it will usually be less, because some errors go up and others down

:::


:::teacher-note

**Answer:** The most it could be out; it will usually be less, because some errors go up and others down

The bound is what you can promise: it is not out by more than that. Random errors that go both ways usually leave the real error smaller.

:::


:::typical

## More factors, a tiny one


**Three factors.** 

**A thin box.** 

**A cube.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Totals and products


:::keep-together

### Eight pieces

**Eight pieces of $2.5$ m are each measured to the nearest $0.1$ m. How far out could the total be, at most? (m)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.4

8 × 0.05 = 0.4 m.

:::


:::keep-together

### A square

**A square garden has a side of $5.0$ m to the nearest $0.1$ m. How far above $25$ m² could the area be, at most? (m²)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.5

5.05 × 5.05 = 25.5025, so 0.5025 m² above 25.

:::


:::keep-together

### Review

**Review: a rectangle is $8.0$ m by $5.0$ m, each to the nearest $0.1$ m. What is the lowest its area could be? (m², 2 decimal places)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 39.35

7.95 × 4.95 = 39.3525.

:::


## Make: the wall


**The beam.** Work this out on paper first, then type your answer.

**A tighter total.** The wall and its measurements are made up for the task.

**Also used in**

- **Building.** A long fence or a run of kitchen cabinets set out piece by piece: the errors add.
- **Science.** A density works from a mass, a length, a width and a height: four measurements, so four percentage errors.
- **Next lesson.** Scale factors: a plan has its own scale, and a reading off it carries its own error.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Twelve pieces are each measured to the nearest 0.1 m. How far out could the total be, at most?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 12 × 0.05 = 0.6 m.

:::

