---
title: "Solving by backtracking"
subtitle: "Algebra Foundations · Equations · Lesson 8"
---

# Solving by backtracking

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Retracing your steps to find a lost key is backtracking: you undo your route, most recent first. Equations work the same way.


:::teacher-note

**In one sentence:** Students solve one- and two-step equations by backtracking, undoing each step of a function machine in reverse order and checking forwards (AC9M7A03, node 2).

**Students should be able to say:** I can solve a two-step equation by backtracking. I can name the step that undoes another (the inverse operation). I can undo steps in the right order, last step first, and check my answer forwards.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="A number machine. A mystery number goes in, is multiplied by 2, then 3 is added, and 11 comes out. The number that went in is a question mark."><svg viewBox="0 0 370 90" width="370" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="10" y="25" width="50" height="40" rx="6" fill="#7F77DD" fill-opacity="0.35" stroke="#534AB7" stroke-width="0.8"/><text x="35.0" y="50" text-anchor="middle" fill="currentColor" stroke="none">?</text><path d="M62 45 H90 M84 39 L90 45 L84 51" stroke-width="1.2"/><rect x="92" y="25" width="70" height="40" rx="6" /><text x="127.0" y="50" text-anchor="middle" fill="currentColor" stroke="none">× 2</text><path d="M164 45 H192 M186 39 L192 45 L186 51" stroke-width="1.2"/><rect x="194" y="25" width="70" height="40" rx="6" /><text x="229.0" y="50" text-anchor="middle" fill="currentColor" stroke="none">+ 3</text><path d="M266 45 H294 M288 39 L294 45 L288 51" stroke-width="1.2"/><rect x="296" y="25" width="60" height="40" rx="6" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><text x="326.0" y="50" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="35" y="85" text-anchor="middle" fill="currentColor" stroke="none">went in</text><text x="326" y="85" text-anchor="middle" fill="currentColor" stroke="none">came out</text></svg></figure>

How did you work it out? Which step did you undo first?

:::keep-together

**I think of a number. I multiply it by 2, then add 3, and I get 11. What was my number?**

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 4. Take away the 3 first (11 − 3 = 8), then halve (8 ÷ 2 = 4).

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Undo in reverse


:::keep-together

### Opposites

To undo a step, do the opposite.

1. $3x + 7 = 19$ — The machine multiplies $x$ by 3, then adds 7, and gives 19.
2. $19 - 7 = 12$ — Undo the last step first: $+\,7$ is undone by $-\,7$.
3. $12 \div 3 = 4$ — Then undo $\times\,3$ with $\div\,3$.
4. $x = 4$ — That is the number that went in.
5. $3(4) + 7 = 19 \checkmark$ — Check by running the machine forwards.

**Match each step with the step that undoes it.**

A. ÷ 3

B. × 2

C. + 4

D. − 7

{{columns 60% 40%}}

{{rows 1}}

| Part | Letter |
|---|---|
| `+ 7` | |
| `× 3` | |
| `− 4` | |
| `÷ 2` | |

:::


:::teacher-note

**Answer:** + 7 → D. − 7; × 3 → A. ÷ 3; − 4 → C. + 4; ÷ 2 → B. × 2

Adding and subtracting undo each other. Multiplying and dividing undo each other.

:::


:::keep-together

### Backtrack it

**Backtrack $5x - 4 = 21$. The machine multiplies by 5, then takes away 4. Write each undo step (such as + 2 or ÷ 3) and the value it gives.**

{{rows 1}}

| step | undo | value |
|---|---|---|
| start | – | 21 |
| 1 |   |   |
| 2 |   |   |

:::


:::teacher-note

**Answer:** + 4, 25, ÷ 5, 5

21 + 4 = 25 undoes the − 4. Then 25 ÷ 5 = 5 undoes the × 5. Check: 5 × 5 − 4 = 21.

:::


:::keep-together

### Find the mistake

**Mia backtracks $2x + 3 = 11$, but her check fails. Click the first line that goes wrong.**

```
 1  2x + 3 = 11
 2  11 ÷ 2 = 5.5
 3  5.5 − 3 = 2.5
 4  x = 2.5
 5  Check: 2 × 2.5 + 3 = 8, not 11
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Mia undid the × 2 first. The machine added 3 last, so that is undone first: 11 − 3 = 8, then 8 ÷ 2 = 4. Check: 2 × 4 + 3 = 11.

:::


:::typical

## New machines


**One step.** Each task loads a new machine. Undo every step to find $x$.

**Taking away.** The machine takes away last this time.

**Dividing.** This machine divides first.

**Adding first.** This machine adds 4 **before** it multiplies by 3. As an equation that is $3(x + 4) = 27$: the brackets show the adding happens first.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Backtrack these


:::keep-together

### Two steps

**Solve $4x + 5 = 33$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7

33 − 5 = 28, then 28 ÷ 4 = 7. Check: 4 × 7 + 5 = 33.

:::


:::keep-together

### With a fraction

**Solve $\frac{x}{2} - 3 = 4$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 14

4 + 3 = 7, then 7 × 2 = 14. Check: 14 ÷ 2 − 3 = 4.

:::


:::keep-together

### Taking away

**Solve $6x - 8 = 34$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7

34 + 8 = 42, then 42 ÷ 6 = 7. Check: 6 × 7 − 8 = 34.

:::


## Make: your own machine

Make a machine a friend could backtrack. Run 6 through your two steps, then write the equation.

Stretch: make one where the machine adds first, so your equation needs brackets.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Make: the excursion bus on paper

Do this one in your book. The prices are made up, but trip organisers work out head counts from a bill like this. Write the machine, undo it, check it, then type the number of students and choose the reason for the first step.

**Also used in**

- **Fees and totals.** A bus costs \$20 to book plus \$3 per student and the bill is \$80: undo the fee, then the price per student, to count who went.
- **Temperature.** Celsius to Fahrenheit multiplies by 1.8 then adds 32. Going back undoes the 32 first.
- **Next lessons.** The balance method, which does the same undoing to both sides and still works when $x$ is on both sides.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Solve 5x + 6 = 41 by backtracking. Show each step and check your answer.**

{{lines-3}}

:::


:::teacher-note

**Answer:** 41 − 6 = 35, then 35 ÷ 5 = 7. Check: 5 × 7 + 6 = 41.

:::

