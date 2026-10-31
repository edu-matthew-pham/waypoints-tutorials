---
title: "From graph to equation"
subtitle: "Quadratics and exponentials · Exponentials · Lesson 3"
---

# From graph to equation

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Two cups of tea, two graphs. Which cup cools faster, and could you tell from the rule alone?


:::teacher-note

**In one sentence:** Students match a decaying curve on a graph board, read a and b off points and tables, write y = a(bˣ), and read growth or decay back from a rule, using two cups of tea cooling at different speeds (AC9M10A03, node 3).

**Students should be able to say:** I can write y = a(bˣ) from two points or a table. I can read where an exponential starts and whether it grows or decays from its rule. I can say which of two decay rules cools faster, and why.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="A graph of the gap between cup B and the room against time in 10-minute steps. The gap is 50 degrees at 0 and 40 degrees at 1 step. A dashed curve carries on downwards with a question mark."><svg viewBox="0 0 420 240" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="60" y1="200" x2="400" y2="200"/><line x1="60" y1="200" x2="60" y2="20"/><path d="M130 72 C180 98 250 124 380 146" stroke-dasharray="6 4"/><circle cx="60" cy="40" r="5" fill="#1D9E75" stroke="#0F6E56"/><circle cx="130" cy="72" r="5" fill="#1D9E75" stroke="#0F6E56"/><g fill="currentColor" stroke="none"><text x="72" y="36">(0, 50)</text><text x="142" y="68">(1, 40)</text><text x="320" y="132" font-size="26">?</text><text x="60" y="218" text-anchor="middle">0</text><text x="130" y="218" text-anchor="middle">1</text><text x="200" y="218" text-anchor="middle">2</text><text x="270" y="218" text-anchor="middle">3</text><text x="340" y="218" text-anchor="middle">4 steps</text><text x="64" y="16">gap (°C)</text></g></svg></figure>

Each step is 10 minutes. The two dots are the first two readings. Make a guess for the rule before you try it.

:::keep-together

**Cup B's gap shrinks by the same share every 10 minutes. Its graph passes through $(0, 50)$ and $(1, 40)$. Which rule fits?**

☐ $y = 50(0.8^x)$

☐ $y = 40(0.8^x)$

☐ $y = 0.8(50^x)$

☐ $y = 50(40^x)$

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** y = 50(0.8^x). The graph crosses the y-axis at (0, 50), so a = 50. To get from 50 to 40, multiply by 40 ÷ 50 = 0.8, so b = 0.8. At x = 1 that gives 50 × 0.8 = 40. ✓

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## A and b


:::keep-together

### Read a and b

Here's cup B's table turned into a rule.

1. $(0,\,50),\; (1,\,40),\; (2,\,32)$ — Cup B's gap, as points on the graph. What is the rule y = a(b^x)?
2. $a = 50$ — a is where the graph crosses the y-axis: the value at x = 0.
3. $b = 40 \div 50 = 0.8$ — b is what you multiply by. Divide a value by the one before.
4. $32 \div 40 = 0.8$ — Check with the next pair. The same ratio again, so it's exponential.
5. $y = 50(0.8^x)$ — Put a and b into y = a(b^x).
6. $x = 3:\; 50(0.8^3) = 25.6$ — Check the rule on the next step: 0.8 × 32 = 25.6. ✓

Now try one on paper like the example: $(0, 2)$, $(1, 10)$, $(2, 50)$. Write the rule, then type it.

Going the other way is quicker. From $y = 50(0.8^x)$ you can see without drawing it that the graph starts at 50, decays (0.8 is less than 1), and gets close to $y = 0$ without reaching it.

**A graph goes through $(0, 2)$, $(1, 10)$ and $(2, 50)$. Write its rule in the form $y = a(b^x)$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2(5^x)

a = 2 (the value at x = 0) and b = 10 ÷ 2 = 5. Check: 50 ÷ 10 = 5 too. So y = 2(5^x).

:::


:::keep-together

### Find the mistake

**Tom writes the rule for a graph through $(0, 5)$, $(1, 15)$ and $(2, 45)$. Click the line where his working goes wrong.**

```
 1  A graph goes through (0, 5), (1, 15) and (2, 45). Write y = a(b^x).
 2  a is where it crosses the y-axis, so a = 5.
 3  b is the next number in the table, so b = 15.
 4  So y = 5(15^x).
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: b isn't the next number in the table. It's what you multiply by: 15 ÷ 5 = 3. The rule is y = 5(3^x). Check: x = 2 gives 5 × 9 = 45.

:::


:::keep-together

### Which rule?

**A graph starts at 40 and halves every step. Which rule is it?**

☐ $y = 40 - 0.5x$

☐ $y = 0.5(40^x)$

☐ $y = 40(0.5^x)$

☐ $y = 40(2^x)$

:::


:::teacher-note

**Answer:** $y = 40(0.5^x)$

It starts at 40 (a = 40) and multiplies by 0.5 each step (b = 0.5): y = 40(0.5^x).

:::


:::typical

## One change at a time


**Cover a growth curve.** 

**A decay rule.** 

**No point at x = 0.** 

**A ratio of 1.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Write and read rules


:::keep-together

### Two points

**A graph goes through $(0, 7)$ and $(1, 21)$. Write its rule in the form $y = a(b^x)$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7(3^x)

a = 7 and b = 21 ÷ 7 = 3, so y = 7(3^x).

:::


:::keep-together

### Reading a rule

**What does $y = 12(0.75^x)$ tell you without drawing it?**

☐ It starts at 12 and decays towards 0

☐ It starts at 12 and grows

☐ It starts at 0.75 and grows

☐ It starts at 12 and falls below 0

:::


:::teacher-note

**Answer:** It starts at 12 and decays towards 0

a = 12 is the start, and b = 0.75 is between 0 and 1, so it decays. It gets close to the line y = 0.

:::


:::keep-together

### A quarter

**A graph goes through $(0, 80)$ and $(1, 20)$. Write its rule.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 80(0.25^x)

a = 80 and b = 20 ÷ 80 = 0.25, so y = 80(0.25^x).

:::


:::keep-together

### Review

**Review: the graph of $y = 5(0.8^x)$ gets close to a horizontal line but never reaches it. What is $y$ on that line?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0

0. A decay graph keeps getting closer to y = 0 and never reaches it.

:::


## Make: back to the two cups


**Cup B after 30 minutes.** Back to the two cups. Work this out on paper first, then type your answer.

**Cup A after 30 minutes.** **Also used in**

- **Cooling.** Any hot thing in a cool room, a pie or a pan or a drink, has a gap that shrinks the same way. The ratio is different for each.
- **Money.** A savings account that grows by the same percentage each year is $y = a(b^x)$ with $b$ a bit more than 1.
- **Next lessons.** Solving for when the gap reaches a number, which means finding $x$ when it's in the power.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A graph goes through (0, 6) and (1, 18). Write its rule. Does it grow or decay?**

{{lines-3}}

:::


:::teacher-note

**Answer:** y = 6(3^x). It grows, because b = 3 is more than 1.

:::

