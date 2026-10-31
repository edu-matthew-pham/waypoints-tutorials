---
marp: true
theme: default
html: true
---

# Same base both sides

Quadratics and exponentials · Exponentials

<!-- Speaker note: Students find where y = 2ˣ meets a horizontal line on a graph board, then solve equations with x in the power by writing both sides as powers of the same base and matching the indices, using the doubling sandwich from lesson 1 (AC9M10A03, node 4). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 10 min · Practise and Make 10 min). Sources: The 2-hour/4-hour rule (NSW Food Authority): the rule's cut-offs are quoted in the opening. The germ counts and the 6,400 worry point are made up, https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf (checked 25 October 2026). -->

---

## Today

- I can solve 2ˣ = 64 by writing both sides as powers of 2.
- I can rewrite a base like 4 or 8 as a power of 2 to match the other side.
- I can explain why I can't divide by the base to solve for x.

<!-- Speaker note: Before class: Do the Run and Modify boards yourself first. Students need the index laws from Year 9 (powers of powers, negative powers) and the doubling ideas from the first lesson. The one idea: if aˣ = aʸ then x = y, so rewrite both sides as powers of the same base and match the indices. The board shows it as a picture: the curve y = 2ˣ meeting the line y = t. For a t that isn't a power of 2 (like 24) the answer is between whole numbers, which the board shows and algebra alone can't yet find. Logarithms come later. The sandwich numbers are made up: a start of 100 germs, doubling every half hour, and 6,400 as the worry point. The rule itself (2 hours, 4 hours) is NSW Food Authority's. Teacher: Paper: the try-one after the worked example and the sandwich in Make are worked on paper first. Books out, and look for both sides written with the same base. -->

---

## Why it matters

> Doubling sneaks up on you. How long until the sandwich crosses the line?

<!-- Speaker note: Back to the sandwich from the first lesson. It starts with 100 germs, and they double every half hour. Say it's time to worry once there are 6,400 germs. (Both numbers are made up, like the doubling. The real rule comes from food-safety research: [the 2-hour/4-hour rule, NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf).) How long does it take to get there? -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A number starts at 1 and doubles $x$ times to reach 64, so $2^x = 64$. What is $x$?**

- $x = 62$
- $x = 32$
- $x = 6$
- $x = 8$

<!-- Speaker note: What happens: x = 6. Doubling from 1: 2, 4, 8, 16, 32, 64. That is 6 doublings, and 2⁶ = 64. Dividing 64 by 2 (32) or taking 2 away (62) doesn't count the doublings. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. 32 (64 ÷ 2) is Eli's mistake: dividing by the base. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fsame-base%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+8%0Ay%3A+0%2C+140%0Agrid%3A+1%2C+20%0Aslider+t%3A+8%2C+128%2C+8%2C+8%0Aplot%3A+y+%3D+2%5Ex%0Aplot%3A+y+%3D+t%0Across%3A+1%2C+2%0Atable%3A+0%2C+1%2C+2%2C+3%2C+4%2C+5%2C+6%2C+7%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/same-base/?full=step-2#step-2)

<!-- Speaker note: The curve is $y = 2^x$ and the line is $y = t$. Slide $t$ and read the $x$ where they meet. Try a $t$ that isn't a power of 2, like 24: the answer isn't a whole number. -->

<!-- Speaker note: Teacher: ask students to find t so that the answer is a whole number, then one where it isn't, and say what the board shows. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* x = 6. Doubling from 1: 2, 4, 8, 16, 32, 64. That is 6 doublings, and 2⁶ = 64. Dividing 64 by 2 (32) or taking 2 away (62) doesn't count the doublings.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Same base

Here's how to solve one when the two sides aren't powers of each other.

Now try one on paper like the example: $4^x = 32$. Write both sides as powers of 2, then type $x$.

$$8^x = 32$$

1) $8 = 2^3,\; 32 = 2^5$ — Write each side with the same base, 2.
2) $(2^3)^x = 2^5$ — Put them in the equation.
3) $2^{3x} = 2^5$ — A power of a power: multiply the indices.
4) $3x = 5$ — The bases match, so the indices must match.
5) $x = \tfrac{5}{3}$ — Divide both sides by 3.
6) $8^1 = 8 \text{ and } 8^2 = 64$ — Check it's sensible: 32 is between 8 and 64, so x should be between 1 and 2. 5/3 is about 1.67. ✓

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 8^x = 32 and say "Solve for x. Neither side is a power of the other, but both are powers of 2." Line 1: write 8 = 2^3, 32 = 2^5 and say "Write each side with the same base, 2." Line 2: write (2^3)^x = 2^5 and say "Put them in the equation." Line 3: write 2^3x = 2^5 and say "A power of a power: multiply the indices." Line 4: write 3x = 5 and say "The bases match, so the indices must match." Line 5: write x = 5 ÷ 3 and say "Divide both sides by 3." Line 6: write 8^1 = 8 and 8^2 = 64 and say "Check it's sensible: 32 is between 8 and 64, so x should be between 1 and 2. 5/3 is about 1.67. ✓." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Same base

**Solve $4^x = 32$. Write both sides as powers of 2.**

* Answer: 2.5

<!-- Speaker note: 4 = 2², so 4^x = (2²)^x = 2^(2x). And 32 = 2⁵. So 2x = 5 and x = 2.5. Check: 4² = 16 and 4³ = 64, and 32 is between them. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Eli solves $3^x = 81$. Click the line where his working goes wrong.**

```
 1  Solve 3^x = 81.
 2  I'll undo the 3 like in an equation, so I divide both sides by 3.
 3  x = 81 ÷ 3 = 27.
 4  So x = 27.
```

* Answer: line 2

<!-- Speaker note: Line 2: in 3^x the 3 isn't multiplying x, so dividing by 3 doesn't undo anything. Write 81 as a power of 3: 81 = 3⁴, so 3^x = 3⁴ and x = 4. (3²⁷ would be a huge number.) -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which base?

**To solve $25^x = 125$, you write both sides as powers of which number?**

- $5$, because $25 = 5^2$ and $125 = 5^3$
- $25$, because 25 is in the equation
- $125$, because it's the biggest
- No number works

* Answer: $5$, because $25 = 5^2$ and $125 = 5^3$

<!-- Speaker note: 25 = 5² and 125 = 5³, so (5²)^x = 5³, 5^(2x) = 5³, 2x = 3 and x = 1.5. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Tricky cases



- **Count the 3s:** Set the board, then read where the curve meets the line.
- **Power zero:** 
- **A fraction:** 
- **Rewrite both:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/same-base/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: a bigger base read on the board, x = 0, a negative x for a fraction, and a base that isn't the same as either side. Hints, in order: Set $b$ to 3 and $t$ to 243. Read where the curve meets the line. / Or count: 3, 9, 27, 81, 243. / What power of 7 gives 1? / $\tfrac{1}{25}$ is smaller than 1, so the power is negative. / $5^{-2} = \tfrac{1}{5^2}$. / Write 9 as a power of 3, and 27 as a power of 3. / $9^x = (3^2)^x = 3^{2x}$ and $27 = 3^3$. For students who need more support: A strip of powers: 2¹ = 2 up to 2⁸ = 256, 3¹ to 3⁵ = 243 and 5¹ to 5⁴ = 625. Students look up the base's powers before solving. For early finishers: How long for the germs to reach 1,000? Predict from the board (it is between 3 and 4 half-hours), then try to find it with algebra. What goes wrong? (That is what logarithms are for.) The hard part, on purpose: Treating the base as something multiplying x and dividing by it (3ˣ = 81 → x = 27). Count the multiplications: how many 3s make 81? When students get stuck: A student divides by the base: 3ˣ = 81, x = 27 (Eli's mistake). Ask: How many 3s do you multiply to make 81? Fix: 3, 9, 27, 81: four 3s. Then write 81 = 3⁴ so the bases match. / A student solves 4ˣ = 32 as x = 5 because 2⁵ = 32. Ask: What's 4 as a power of 2? Fix: 4 = 2², so 4ˣ = 2²ˣ. Then 2x = 5. / A student gets 6 for the sandwich and stops. Ask: What does x count? Fix: x is half-hours, so 6 half-hours is 3 hours. -->

<!-- Speaker note: Teacher: before 5ˣ = 1/25, ask: is x bigger or smaller than 0? (The right side is less than 1.) -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the doublings

**Solve $2^x = 128$.**

* Answer: 7

<!-- Speaker note: 128 = 2⁷, so x = 7. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Rewrite 4

**Solve $4^x = 128$. Write both sides as powers of 2.**

* Answer: 3.5

<!-- Speaker note: 4 = 2², so 4^x = 2^(2x) and 128 = 2⁷. So 2x = 7 and x = 3.5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A number in front

**Solve $5(2^x) = 80$.**

* Answer: 4

<!-- Speaker note: Divide both sides by 5: 2^x = 16. And 16 = 2⁴, so x = 4. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a graph goes through $(0, 5)$ and $(1, 10)$. What is $b$ in $y = a(b^x)$?**

* Answer: 2

<!-- Speaker note: b = 10 ÷ 5 = 2. a = 5, so y = 5(2^x). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the sandwich



- **Time to 6,400:** Back to the sandwich. Work this out on paper first, then type your answer.
- **Time to 25,600:** Sources: the 2-hour/4-hour rule is from [NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf). The 100 g

<!-- Speaker note: What this step is for: Coming back to the sandwich: the germ count is 100(2^x), and solving it for the target gives the time. The same method answers a different target. Hints, in order: The count is 100 × 2^x after x half-hours. / Divide both sides by 100 first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Solve 9ˣ = 81, then solve 4ˣ = 8.**

* 9ˣ = 81: x = 2. 4ˣ = 8: 2²ˣ = 2³, so x = 1.5.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Year 10 modelling: choosing whether a situation is linear or exponential, writing the model from the situation and judging it. Solving when the unknown isn't a whole-number power uses logarithms or a digital tool. Where it leads in class: compound interest (how long to double), half-life, and population growth. -->
