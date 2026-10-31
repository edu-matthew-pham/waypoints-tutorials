---
marp: true
theme: default
html: true
---

# From graph to equation

Quadratics and exponentials · Exponentials

<!-- Speaker note: Students match a decaying curve on a graph board, read a and b off points and tables, write y = a(bˣ), and read growth or decay back from a rule, using two cups of tea cooling at different speeds (AC9M10A03, node 3). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can write y = a(bˣ) from two points or a table.
- I can read where an exponential starts and whether it grows or decays from its rule.
- I can say which of two decay rules cools faster, and why.

<!-- Speaker note: Before class: Do the Run and Modify boards yourself first. Students need the last two lessons (the ratio, and where an exponential starts and what growth and decay look like). The one idea: from a graph, a is the value at x = 0 and b is one value divided by the one before. Check with a third point. Going the other way, a rule tells you the start, growth or decay, and the asymptote without drawing. All the readings are made up: two cups at 70 °C in a 20 °C room, so the gap starts at 50 °C. Cup A halves it every 10 minutes (b = 0.5). Cup B, a flask, keeps 0.8 of it (b = 0.8). If you did the class practical from the last lesson, use your students' own readings in place of cup A and B for the Make. Teacher: Paper: the try-one after the worked example and the two cups in Make are worked on paper first. Books out, and look for a division to find b. -->

---

## Why it matters

> Two cups of tea, two graphs. Which cup cools faster, and could you tell from the rule alone?

<!-- Speaker note: Your class timed two cups of tea, 70 °C in a 20 °C room, and graphed the gap between each cup and the room every 10 minutes. Cup A is an ordinary mug and cup B is an insulated flask. Both gaps start at 50 °C. The readings here are made up. Your own will be different, but the same ideas apply. Both graphs decay, and both follow a rule of the form $y = a(b^x)$. What are $a$ and $b$ for each cup? -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Cup B's gap shrinks by the same share every 10 minutes. Its graph passes through $(0, 50)$ and $(1, 40)$. Which rule fits?**

- $y = 50(0.8^x)$
- $y = 40(0.8^x)$
- $y = 0.8(50^x)$
- $y = 50(40^x)$

<!-- Speaker note: What happens: y = 50(0.8^x). The graph crosses the y-axis at (0, 50), so a = 50. To get from 50 to 40, multiply by 40 ÷ 50 = 0.8, so b = 0.8. At x = 1 that gives 50 × 0.8 = 40. ✓ Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. 50(40^x) is Tom's mistake: b read as the next value. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fgraph-to-equation%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+5%0Ay%3A+0%2C+60%0Agrid%3A+1%2C+10%0Aaxes%3A+Time+%2810-minute+steps%29%2C+Gap+%28%C2%B0C%29%0Aslider+a%3A+10%2C+60%2C+30%2C+10%0Aslider+b%3A+0.5%2C+1.5%2C+0.5%2C+0.1%0Aplot%3A+y+%3D+a%28b%5Ex%29%0Aplot%3A+y+%3D+50%280.8%5Ex%29%2C+dashed%0Atable%3A+0%2C+1%2C+2%2C+3%2C+4%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/graph-to-equation/?full=step-2#step-2)

<!-- Speaker note: The dashed curve is cup B's gap. Slide $a$ and $b$ until the solid curve sits on top of it. The table has a row for each curve, so you can read the numbers too. -->

<!-- Speaker note: Teacher: ask students to read the dashed row of the table (50, 40, 32, 25.6) and say how to get each value from the one before without sliding. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* y = 50(0.8^x). The graph crosses the y-axis at (0, 50), so a = 50. To get from 50 to 40, multiply by 40 ÷ 50 = 0.8, so b = 0.8. At x = 1 that gives 50 × 0.8 = 40. ✓

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Read a and b

Here's cup B's table turned into a rule.

Now try one on paper like the example: $(0, 2)$, $(1, 10)$, $(2, 50)$. Write the rule, then type it.

Going the other way is quicker. From $y = 50(0.8^x)$ you can see without drawing it that the graph starts at 50, decays (0.8 is less than 1), and gets close to $y = 0$ without reaching it.

$$(0,\,50),\; (1,\,40),\; (2,\,32)$$

1) $a = 50$ — a is where the graph crosses the y-axis: the value at x = 0.
2) $b = 40 \div 50 = 0.8$ — b is what you multiply by. Divide a value by the one before.
3) $32 \div 40 = 0.8$ — Check with the next pair. The same ratio again, so it's exponential.
4) $y = 50(0.8^x)$ — Put a and b into y = a(b^x).
5) $x = 3:\; 50(0.8^3) = 25.6$ — Check the rule on the next step: 0.8 × 32 = 25.6. ✓

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write (0,50), (1,40), (2,32) and say "Cup B's gap, as points on the graph. What is the rule y = a(b^x)?" Line 1: write a = 50 and say "a is where the graph crosses the y-axis: the value at x = 0." Line 2: write b = 40 ÷ 50 = 0.8 and say "b is what you multiply by. Divide a value by the one before." Line 3: write 32 ÷ 40 = 0.8 and say "Check with the next pair. The same ratio again, so it's exponential." Line 4: write y = 50(0.8^x) and say "Put a and b into y = a(b^x)." Line 5: write x = 3: 50(0.8^3) = 25.6 and say "Check the rule on the next step: 0.8 × 32 = 25.6. ✓." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 16px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read a and b

**A graph goes through $(0, 2)$, $(1, 10)$ and $(2, 50)$. Write its rule in the form $y = a(b^x)$.**

* Answer: 2(5^x)

<!-- Speaker note: a = 2 (the value at x = 0) and b = 10 ÷ 2 = 5. Check: 50 ÷ 10 = 5 too. So y = 2(5^x). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Tom writes the rule for a graph through $(0, 5)$, $(1, 15)$ and $(2, 45)$. Click the line where his working goes wrong.**

```
 1  A graph goes through (0, 5), (1, 15) and (2, 45). Write y = a(b^x).
 2  a is where it crosses the y-axis, so a = 5.
 3  b is the next number in the table, so b = 15.
 4  So y = 5(15^x).
```

* Answer: line 3

<!-- Speaker note: Line 3: b isn't the next number in the table. It's what you multiply by: 15 ÷ 5 = 3. The rule is y = 5(3^x). Check: x = 2 gives 5 × 9 = 45. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which rule?

**A graph starts at 40 and halves every step. Which rule is it?**

- $y = 40 - 0.5x$
- $y = 0.5(40^x)$
- $y = 40(0.5^x)$
- $y = 40(2^x)$

* Answer: $y = 40(0.5^x)$

<!-- Speaker note: It starts at 40 (a = 40) and multiplies by 0.5 each step (b = 0.5): y = 40(0.5^x). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **Cover a growth curve:** 
- **A decay rule:** 
- **No point at x = 0:** 
- **A ratio of 1:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/graph-to-equation/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: match a growth curve on the board, read a decay rule from two points, find a when the graph isn't given at x = 0, and a ratio of 1. Hints, in order: The dashed curve starts at 8. / Slide $b$ until the curves match: 12 ÷ 8 = 1.5. / From 4 to 2, what do you multiply by? / Find b first: how many times bigger is 18 than 6? / Then go one step back from $(1, 6)$ to get $a$. / If nothing changes from 10 to 10, what do you multiply by? For students who need more support: A table with x = 0, 1, 2, 3 and the ratio arrow ×? between neighbours. Fill in a from the first row, then b from the arrow, then write y = a(b^x). For early finishers: Cup C's gap starts at 60 and is 15 after 2 steps. Find b, then write the rule. Try it on the board. The hard part, on purpose: Using the next value in the table as b. a is the value at x = 0; b is what you multiply by: a value divided by the one before. When students get stuck: A student writes b = 15 for a table 5, 15, 45 (Tom's mistake). Ask: What do you multiply 5 by to get 15? Fix: 15 ÷ 5 = 3, so b = 3. Check: 5 × 3 × 3 = 45. / A student swaps a and b: y = 0.8(50^x). Ask: Which number is the value when x is 0? Fix: a is the start: put x = 0 in your rule and see if it gives the graph's first value. / A student uses the value at x = 1 as a (Modify, no point at x = 0). Ask: What is x for the first point they gave you? Fix: Step back: divide the value at x = 1 by b to get the value at x = 0. -->

<!-- Speaker note: Teacher: before 'no point at x = 0', ask what they need to find first (b), then how to step back. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two points

**A graph goes through $(0, 7)$ and $(1, 21)$. Write its rule in the form $y = a(b^x)$.**

* Answer: 7(3^x)

<!-- Speaker note: a = 7 and b = 21 ÷ 7 = 3, so y = 7(3^x). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading a rule

**What does $y = 12(0.75^x)$ tell you without drawing it?**

- It starts at 12 and decays towards 0
- It starts at 12 and grows
- It starts at 0.75 and grows
- It starts at 12 and falls below 0

* Answer: It starts at 12 and decays towards 0

<!-- Speaker note: a = 12 is the start, and b = 0.75 is between 0 and 1, so it decays. It gets close to the line y = 0. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A quarter

**A graph goes through $(0, 80)$ and $(1, 20)$. Write its rule.**

* Answer: 80(0.25^x)

<!-- Speaker note: a = 80 and b = 20 ÷ 80 = 0.25, so y = 80(0.25^x). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: the graph of $y = 5(0.8^x)$ gets close to a horizontal line but never reaches it. What is $y$ on that line?**

* Answer: 0

<!-- Speaker note: 0. A decay graph keeps getting closer to y = 0 and never reaches it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the two cups



- **Cup B after 30 minutes:** Back to the two cups. Work this out on paper first, then type your answer.
- **Cup A after 30 minutes:** **Also used in** - **Cooling.** Any hot thing in a cool room, a pie or a pan or a drink, has a gap that shrinks the same way. The ratio is different for each. -

<!-- Speaker note: What this step is for: Coming back to the two cups: the base b is the share of the gap left each step, so the smaller b cools faster, and the rule gives the gap at any time. Hints, in order: Cup A halves, so its $b$ is 0.5. Cup B keeps 0.8 of the gap. / 30 minutes is 3 steps. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A graph goes through (0, 6) and (1, 18). Write its rule. Does it grow or decay?**

* y = 6(3^x). It grows, because b = 3 is more than 1.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: solving when x is in the power (finding when a cup's gap, or a germ count, reaches a number) by writing both sides with the same base. Then, in Year 10 modelling, choosing between a linear and an exponential model. Where it leads in class: compound interest (b = 1 + rate), depreciation, and half-life. -->
