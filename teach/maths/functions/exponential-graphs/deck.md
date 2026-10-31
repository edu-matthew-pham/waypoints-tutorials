---
marp: true
theme: default
html: true
---

# Exponential graphs

Quadratics and exponentials · Exponentials

<!-- Speaker note: Students draw y = a(bˣ) on a graph board, find that a is where it starts and b above or below 1 decides growth or decay, and see that a decay graph never reaches the asymptote y = 0, using a cooling cup of tea (AC9M10A03, node 2). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can read where an exponential graph starts from its rule.
- I can say whether y = a(bˣ) grows or decays from b.
- I can explain why a decay graph never reaches the x-axis.

<!-- Speaker note: Before class: Do the Run and Modify boards yourself first. Students need the ratio from the last lesson (Same ratio each time) and where a line crosses the y-axis from Linear relations. The one idea: the base b decides growth (more than 1) or decay (between 0 and 1), and a decay graph gets closer and closer to y = 0 without reaching it. The tea comes back at the end: the gap between tea and room decays, so the tea settles above room temperature. All the tea readings are made up (tea at 90 °C, room at 20 °C, the gap halving every 10 minutes). Real readings follow a similar pattern, and your students' own will show how close. A class practical: hot (not boiling) water in a cup, a thermometer, a reading every 2 minutes for 20 minutes. Supervise the hot water. Plot the readings, then the gap to the room (tea minus room), and ask what shape the gap makes. Teacher: Paper: the try-one after the worked example and the tea in Make are worked on paper first. Books out, and look for the 20 °C added back on. -->

---

## Why it matters

> Pour a cup of tea and leave it on the bench. Will it ever get colder than the room?

<!-- Speaker note: A cup of tea starts at 90 °C in a room at 20 °C. It cools quickly at first and then more slowly. The readings in this lesson are made up. In class you can take your own with a thermometer, every couple of minutes, and see how close they are. Will the tea ever get colder than the room? -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The tea starts at 90 °C. After 10 minutes it is 55 °C, a fall of 35 °C. What does it do in the next 10 minutes?**

- It falls by 35 °C again, to 20 °C
- It falls by less than 35 °C
- It falls by more than 35 °C
- It stays at 55 °C

<!-- Speaker note: What happens: It falls by less than 35 °C. The hotter the tea is above the room, the faster it loses heat, so the cooling slows as the gap closes. With these made-up readings the gap to the room halves every 10 minutes: 35 °C, then 17.5 °C. So at 20 minutes the tea is 20 + 17.5 = 37.5 °C, a fall of 17.5 °C. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. The common wrong answer is 'it falls by 35 °C again, to 20 °C': students expect a steady fall. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fexponential-graphs%2Fstep-2&code=widget%3A+graph%0Ax%3A+-3%2C+5%0Ay%3A+-2%2C+40%0Agrid%3A+1%2C+10%0Aslider+a%3A+1%2C+5%2C+2%0Aslider+b%3A+0.5%2C+2%2C+2%2C+0.5%0Aplot%3A+y+%3D+a%28b%5Ex%29%0Atable%3A+-2%2C+-1%2C+0%2C+1%2C+2%2C+3%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/exponential-graphs/?full=step-2#step-2)

<!-- Speaker note: The board draws $y = a(b^x)$. $a$ is where it starts, and $b$ is what you multiply by each time $x$ goes up by 1. Change them and watch the graph and the table. -->

<!-- Speaker note: Teacher: ask students to read the table for b = 0.5 down the column: 16, 8, 4, 2... and say whether it ever hits 0. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It falls by less than 35 °C. The hotter the tea is above the room, the faster it loses heat, so the cooling slows as the gap closes. With these made-up readings the gap to the room halves every 10 minutes: 35 °C, then 17.5 °C. So at 20 minutes the tea is 20 + 17.5 = 37.5 °C, a fall of 17.5 °C.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Where it starts

Here is a decay graph worked out.

Now try one on paper like the example: $y = 3(2^x)$. Where does it cross the $y$-axis, and does it grow or decay? Then type the $y$-axis value.

$$y = 80(0.5^x)$$

1) $x = 0:\; y = 80(0.5^0) = 80$ — Put 0 in. Any number to the power 0 is 1, so y is just a. It crosses the y-axis at 80.
2) $b = 0.5 < 1$ — The base is less than 1: each step multiplies by a half, so the graph decays.
3) $80,\; 40,\; 20,\; 10,\; 5,\; 2.5$ — Keep halving for x = 0, 1, 2, 3, 4, 5.
4) $y > 0 \text{ always}$ — Halving never gives 0, so y never touches the x-axis.
5) $y = 0$ — The graph gets closer and closer to y = 0 but never reaches it. A line it gets close to like this is called an asymptote.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write y = 80(0.5^x) and say "What does this graph do?" Line 1: write x = 0: y = 80(0.5^0) = 80 and say "Put 0 in. Any number to the power 0 is 1, so y is just a. It crosses the y-axis at 80." Line 2: write b = 0.5 < 1 and say "The base is less than 1: each step multiplies by a half, so the graph decays." Line 3: write 80, 40, 20, 10, 5, 2.5 and say "Keep halving for x = 0, 1, 2, 3, 4, 5." Line 4: write y > 0 always and say "Halving never gives 0, so y never touches the x-axis." Line 5: write y = 0 and say "The graph gets closer and closer to y = 0 but never reaches it. A line it gets close to like this is called an asymptote." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 16px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where it starts

**Where does $y = 3(2^x)$ cross the $y$-axis? Give the value of $y$.**

* Answer: 3

<!-- Speaker note: 3. When x = 0, 2 to the power 0 is 1, so y = 3 × 1 = 3. That's a. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Kim sketches $y = 4(0.5^x)$. Click the line where her reasoning goes wrong.**

```
 1  Sketch y = 4 × 0.5^x.
 2  When x = 0, y = 4, so the graph starts at 4.
 3  0.5 is less than 1, so y gets smaller as x grows: 4, 2, 1, 0.5, ...
 4  Keep halving and y reaches 0, so the graph crosses the x-axis.
```

* Answer: line 4

<!-- Speaker note: Line 4: halving never gets to 0. 4, 2, 1, 0.5, 0.25, 0.125... there is always half left. The graph gets closer and closer to the x-axis but never touches it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Growth or decay

**Which of these is a decay graph?**

- $y = 5(1.2^x)$
- $y = 5(0.8^x)$
- $y = 0.8(5^x)$

* Answer: $y = 5(0.8^x)$

<!-- Speaker note: y = 5(0.8^x) multiplies by 0.8 each step, so it gets smaller: decay. The base, the number with the x in its power, decides. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change a and b



- **Two points, growth:** Each of the first two tasks gives you two points. Set $a$ and $b$ so the graph passes through both.
- **Two points, decay:** 
- **A base of 1:** 
- **Going backwards:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/exponential-graphs/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: match two points with a and b, make a decay graph, set b to 1, then step back to a negative x. Hints, in order: The graph crosses the y-axis at $P$. Which slider sets that? / From $P$ to $Q$ the value doubles. / Where does it cross the y-axis? / From 3 to 1.5, what do you multiply by? / Set $b$ to 1 and look at the table. / Going one step back divides by $b$. / At $x = 0$, $y = 4$. At $x = -1$, divide by 2. For students who need more support: A table of the first six values of 80(0.5ˣ) with the x row and y row, and a halving arrow between neighbours. Draw the curve by hand from it. For early finishers: Why can't b be negative? Try b = −1 on paper: −1, 1, −1, 1... Or: if the tea were at 5 °C in a 20 °C room, what would the gap do? The hard part, on purpose: Believing repeated halving eventually reaches 0. Keep halving a number on paper or a calculator and look at how small it gets without ever being 0. When students get stuck: A student says a decay graph reaches 0 (Kim's mistake). Ask: What is half of 0.001? And half of that? Fix: Halve a number several times on a calculator: it gets tiny but never 0. The graph gets as close to the axis as you like but never touches it. / A student reads b as where the graph crosses the y-axis. Ask: What is y when x is 0? Put 0 in. Fix: Anything to the power 0 is 1, so y = a. The y-axis crossing is a; b is what you multiply by. / A student says y = 0.8(5^x) is decay because of the 0.8. Ask: Which number has the x in its power? Fix: The base 5 decides. 0.8 is the starting value a. -->

<!-- Speaker note: Teacher: before the base of 1, ask what multiplying by 1 does. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Start

**Where does $y = 7(3^x)$ cross the $y$-axis? Give the value of $y$.**

* Answer: 7

<!-- Speaker note: 7. At x = 0, 3⁰ = 1 and y = 7 × 1 = 7. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Growth or decay

**Is $y = 100(0.9^x)$ growth or decay?**

- Decay: 0.9 is less than 1
- Growth: 0.9 is positive
- Growth: 100 is a big number

* Answer: Decay: 0.9 is less than 1

<!-- Speaker note: The base 0.9 is between 0 and 1, so each step makes y smaller: decay. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Never reaches

**The graph of $y = 6(0.5^x)$ gets closer and closer to a horizontal line but never reaches it. What is $y$ on that line?**

* Answer: 0

<!-- Speaker note: 0. Halving 6, 3, 1.5, 0.75... gets closer and closer to 0 and never reaches it. The line y = 0 is the asymptote. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: the table goes $7, 14, 28, 56$. What do you multiply by each time?**

* Answer: 2

<!-- Speaker note: 14 ÷ 7 = 2 and 28 ÷ 14 = 2. Each value is 2 times the one before. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the tea



- **Tea after 30 minutes:** Back to the cup. Work this out on paper first, then type your answer.
- **Colder than the room?:** Move $b$ on the board. A flask that keeps the heat in has a $b$ close to 0.9. Does the tea ever go below the dashed line? **Also used in** - **Hot food.** A pie

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/exponential-graphs/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Coming back to the cup: the gap to the room decays and never reaches 0, so the tea never goes below the room. Hints, in order: The gap starts at 70 °C and halves every 10 minutes. / 30 minutes is three halvings. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**For y = 10(0.5ˣ): where does it cross the y-axis, does it grow or decay, and what line does it get close to but never reach?**

* At 10; decay; y = 0.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: reading the rule y = a(bˣ) from a graph (a from the start, b from the ratio of neighbours), then solving equations where x is in the power. Where it leads in class: modelling growth and decay (is it linear or exponential?), compound interest, and half-life. -->
