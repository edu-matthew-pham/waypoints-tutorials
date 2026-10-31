---
marp: true
theme: default
html: true
---

# Which model?

Quadratics and exponentials · Year 10: models and relations

<!-- Speaker note: Students test tables for a line, a quadratic and an exponential using differences, second differences and ratios, and say which pattern they found. The hinge node: classify, then justify (AC9M10A04, node 1). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: Made up for this lesson: the car prices (30,000 new, 20% off each year) are not real listings. Real prices also depend on kilometres and condition., https://tutorials.learningwaypoints.com/maths/functions/which-model/ (checked 25 October 2026). -->

---

## Today

- I can tell a line, a quadratic and an exponential apart from a table.
- I can show the pattern that proves my choice.
- I can say what a model leaves out.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need the exponential ratio (lesson 1) and difference and second-difference tests from Year 9 (Linear or quadratic?). The hinge: students must decide AND justify. The three tests go in order: first differences (line), second differences (quadratic), ratios (exponential). Marks go to showing the constant pattern, not to naming the model. All car prices are made up: 30,000 new and 20% off each year. Say so in class. Real listings also depend on kilometres, condition and the market. A class option: each group picks one model on a car-sales site, writes down five asking prices at different ages and tests them. Expect a rough fit, not an exact one; that is the lesson. Teacher: Paper: the try-one after the worked example and the dollars gap in Make are worked on paper first. Look for the ratio written as a division, not a subtraction. -->

---

## Why it matters

> Used cars get cheaper every year. How cheap, by how old?

<!-- Speaker note: A dealer lists the same model of car at different ages. The prices below are made up for this lesson. Real prices also depend on kilometres and condition. | Age (years) | 0 | 1 | 2 | 3 | |---|---|---|---|---| | Price ($) | 30,000 | 24,000 | 19,200 | 15,360 | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The same model is for sale at 0, 1, 2 and 3 years old for the prices above. What would you expect a 4-year-old one to cost?**

- $9{,}000
- $12{,}288
- $11{,}520
- $12{,}000

<!-- Speaker note: What happens: 12,288. The drops are 6,000, then 4,800, then 3,840: they get smaller. Each price is 0.8 times the one before (24,000 ÷ 30,000 = 0.8, 19,200 ÷ 24,000 = 0.8), so 15,360 × 0.8 = 12,288. Taking off 3,840 again would give 11,520, which is a line's answer. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands before revealing. Those who chose 11,520 repeated the last drop; don't correct it yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fwhich-model%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+6%0Ay%3A+0%2C+32000%0Agrid%3A+1%2C+8000%0Aaxes%3A+Age+%28years%29%2C+Price+%28%24%29%0Aslider+m%3A+-8000%2C+0%2C+-3000%2C+500%0Aslider+b%3A+0.5%2C+1%2C+0.9%2C+0.05%0Aseries+Prices%3A+0%2C30000%3B+1%2C24000%3B+2%2C19200%3B+3%2C15360%3B+4%2C12288%0Aplot%3A+y+%3D+30000%28b%5Ex%29%0Aplot%3A+y+%3D+30000+%2B+mx%2C+dashed%0Atable%3A+0%2C+1%2C+2%2C+3%2C+4%2C+5%2C+6%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/which-model/?full=step-2#step-2)

<!-- Speaker note: The solid curve multiplies the price by $b$ each year. The dashed line takes the same dollars off each year, set by $m$. Try to get the dashed line through all five dots too. -->

<!-- Speaker note: Teacher: ask where the dashed line and the dots separate, and what the solid curve does differently. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 12,288. The drops are 6,000, then 4,800, then 3,840: they get smaller. Each price is 0.8 times the one before (24,000 ÷ 30,000 = 0.8, 19,200 ÷ 24,000 = 0.8), so 15,360 × 0.8 = 12,288. Taking off 3,840 again would give 11,520, which is a line's answer.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Multiply by what?

There are three tests, and you try them in order.

Now try one on paper: $64, 48, 36, 27$. Find the ratio, then type it.

$$10,\; 12,\; 14.4,\; 17.28$$

1) $2,\; 2.4,\; 2.88$ — First differences. They aren't equal, so it isn't a line.
2) $0.4,\; 0.48$ — Second differences. They aren't equal either, so it isn't a quadratic.
3) $12 \div 10,\; 14.4 \div 12,\; 17.28 \div 14.4$ — Ratios.
4) $1.2,\; 1.2,\; 1.2$ — The same every time.
5) $\text{exponential, ratio } 1.2$ — Equal ratios mean exponential. Each value is 1.2 times the one before.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 10, 12, 14.4, 17.28 and say "Which model fits this table?" Line 1: write 2, 2.4, 2.88 and say "First differences. They aren't equal, so it isn't a line." Line 2: write 0.4, 0.48 and say "Second differences. They aren't equal either, so it isn't a quadratic." Line 3: write 12 ÷ 10, 14.4 ÷ 12, 17.28 ÷ 14.4 and say "Ratios." Line 4: write 1.2, 1.2, 1.2 and say "The same every time." Line 5: write exponential, ratio 1.2 and say "Equal ratios mean exponential. Each value is 1.2 times the one before." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Multiply by what?

**Look at $64, 48, 36, 27$. What do you multiply by to get from each value to the next?**

* Answer: 0.75

<!-- Speaker note: 48 ÷ 64 = 0.75, 36 ÷ 48 = 0.75 and 27 ÷ 36 = 0.75. Each value is 0.75 times the one before. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Dev looks at the car prices. Click the line where his working goes wrong.**

```
 1  The prices are 30000, 24000, 19200, 15360. Is it linear or exponential?
 2  The price goes down every year, so it's a straight line going down.
 3  The line is y = 30000 - 6000x.
 4  At 3 years that gives 12000, but the table says 15360. The table must be wrong.
```

* Answer: line 2

<!-- Speaker note: Line 2: falling every year doesn't make a table linear. A line drops the same dollars each time. These drops are 6,000, 4,800 and 3,840, so they aren't the same. The ratio is 0.8 every time, so it's exponential, and the table was right. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which table?

**Which table is exponential?**

- $100, 90, 70, 40$
- $100, 90, 81, 72.9$
- $100, 90, 80, 70$

* Answer: $100, 90, 81, 72.9$

<!-- Speaker note: 100, 90, 81, 72.9: each value is 0.9 times the one before. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the car



- **Another car:** Each task changes the board or the rule. Answer from the table.
- **Below zero:** 
- **A ratio of 1:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/which-model/?full=step-4#step-4)

<!-- Speaker note: What this step is for: A model can be tested against more data. A line can run below zero where the price can't, while an exponential falls but never reaches it. Hints, in order: Set $b$ to 0.7 and read the table at 2 years ($x = 2$). / $30000 \times 0.7 \times 0.7$. / Put 7 into the dashed line's rule. / $30000 - 4800 \times 7$. / Slide $b$ to 1 and watch the table. For students who need more support: A table with two extra rows: 'difference' and 'ratio'. Fill both for 2, 4, 6, 8 and for 2, 4, 8, 16 so the contrast is visible before they classify. For early finishers: Find a table that is both a line and an exponential. Then find one that is a quadratic and not an exponential. Real prices rarely fit exactly: how close does the exponential fit your class's real listings? The hard part, on purpose: Choosing from the look of the numbers ('it goes down, so it's a line'). Ask 'what test did you try?' and have them write the differences and the ratio under the table before they choose. When students get stuck: A student says the table is a line because the price 'goes down by about the same amount'. Ask: What are the drops, written out? 6,000, then what? Fix: Write the three drops and the three ratios under the table. Drops 6,000, 4,800, 3,840 are not equal; ratios 0.8, 0.8, 0.8 are. / A student divides the wrong way (24,000 ÷ 30,000 versus 30,000 ÷ 24,000). Ask: Is each price bigger or smaller than the one before? Should the ratio be bigger or smaller than 1? Fix: Divide each value by the one before it. A falling table has a ratio below 1. / A student tests only one pair and decides. Ask: Does the next pair give the same answer? Fix: A pattern needs at least three values and two equal gaps or ratios. -->

<!-- Speaker note: Teacher: before the ratio of 1, ask what multiplying by 1 does. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A multiplying table

**A table gives $6, 9, 13.5, 20.25$. Which model fits?**

- Quadratic: the second differences are equal
- Exponential: each value is 1.5 times the one before
- Linear: the differences are equal
- None of them

* Answer: Exponential: each value is 1.5 times the one before

<!-- Speaker note: 9 ÷ 6 = 1.5, 13.5 ÷ 9 = 1.5 and 20.25 ÷ 13.5 = 1.5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A second difference

**A table gives $3, 7, 13, 21$. Which model fits?**

- Exponential: the ratios are equal
- Quadratic: the second differences are both 2
- Linear: the differences are equal
- None of them

* Answer: Quadratic: the second differences are both 2

<!-- Speaker note: First differences 4, 6, 8. Second differences 2, 2. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A falling line

**A table gives $50, 45, 40, 35$. Which model fits?**

- Quadratic: it falls every time
- Exponential: it falls every time
- Linear: it takes off 5 every time
- None of them

* Answer: Linear: it takes off 5 every time

<!-- Speaker note: The differences are −5, −5, −5. Equal differences mean a line. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: solve $2^x = 32$. What is $x$?**

* Answer: 5

<!-- Speaker note: 32 = 2⁵, so the bases match and x = 5. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the car



- **How far out?:** Back to the car. Work it out on paper first, then type your answer.
- **What else changes the price?:** The prices here are made up, and so is the 20% a year. Real listings differ in kilometres and condition. Your class can pick a model on a car-sales site, write 

<!-- Speaker note: What this step is for: Coming back to the car: the line through the first two prices misses the 4-year-old car by thousands, which is why checking the pattern matters. Hints, in order: A line through the first two prices drops 6,000 each year. / The exponential model gives 12,288 at 4 years. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A table goes 80, 100, 125, 156.25. Linear, quadratic or exponential? Show the test.**

* Exponential: 100 ÷ 80 = 1.25, 125 ÷ 100 = 1.25 and 156.25 ÷ 125 = 1.25. The differences 20, 25, 31.25 are not equal.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: writing the model, y = a(bⁿ), with an initial value and a growth or decay factor, and using it to answer a question in dollars. Where it leads in class: judging how well a model fits real data, and what it leaves out. -->
