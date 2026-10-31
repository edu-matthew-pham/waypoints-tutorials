---
marp: true
theme: default
html: true
---

# Linear or quadratic?

Linear relations · Quadratic relationships

<!-- Speaker note: Students use first and second differences to compare a straight-line and a quadratic model of real stopping distances, and say where each fails (AC9M9A05, node 1). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 8 min · Practise and Make 12 min). -->

---

## Today

- I can use differences to decide between a line and a curve.
- I can say when neither model fits exactly.
- I can say why an under-estimate matters in a real situation.

<!-- Speaker note: Before class: Students need Recognising a quadratic. The one idea: choose the model whose pattern is closer, and say how far it is out and where it stops working. The common mistake is assuming a rate from one step (Pat's working). The figures are typical stopping distances from Transport for NSW (checked 25 October 2026) on a reasonable road surface. They don't separate reaction and braking distances, so the lesson says that split from the physics, not from the table. Teacher: Paper: the try-one after the worked example and the under-estimate in Make are worked on paper first. Books out, and look for the differences written out. -->

---

## Why it matters

> Why does 60 km/h take so much longer to stop than 50 km/h, when it is only 10 km/h faster?

<!-- Speaker note: Real measurements are never perfectly straight or perfectly curved. Choosing a model means asking which pattern fits better, and where it stops working. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Transport for NSW gives typical stopping distances on a reasonable road: about 19 m at 30 km/h, 27 m at 40 km/h and 37 m at 50 km/h. Following the pattern, what is the stopping distance at 60 km/h?**

- 46 m
- 47 m
- 49 m
- 56 m

<!-- Speaker note: What happens: About 56 m, the published figure. A steady 9 m more for each 10 km/h would give 46 m. Even the extra growing by 2 each time would give 49 m. The real distance grows faster than both. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 46 or 47 kept the rate steady. Reveal the real figure after Run. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Flinear-relations%2Flinear-or-quadratic%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+8%0Ay%3A+-10%2C+70%0Agrid%3A+1%2C+10%0Aaxes%3A+Speed+%28tens+of+km%2Fh%29%2C+Distance+%28m%29%0Aslider+m%3A+0%2C+15%2C+4%2C+1%0Aslider+c%3A+-20%2C+20%2C+0%2C+1%0Aseries+Data%3A+3%2C19%3B+4%2C27%3B+5%2C37%3B+6%2C56%0Aplot%3A+y+%3D+mx+%2B+c%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/linear-relations/linear-or-quadratic/?full=step-2#step-2)

<!-- Speaker note: On the board, $x$ is the speed in tens of km/h ($x = 3$ is 30 km/h) and $y$ is the stopping distance in metres. The dots are the published figures. -->

<!-- Speaker note: Teacher: ask students to say, before setting m and c, how much each 10 km/h should add. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 56 m, the published figure. A steady 9 m more for each 10 km/h would give 46 m. Even the extra growing by 2 each time would give 49 m. The real distance grows faster than both.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## The jump to 60

To choose a model, look at the differences. Equal first differences mean a line. Equal second differences mean a quadratic.

Work out the differences of $19, 27, 37, 56$ on paper, then answer.

$$\text{Table A: } 2, 5, 8, 11$$

1) $\text{first differences: } 3, 3, 3$ — Equal, so linear.
2) $\text{Table B: } 1, 4, 9, 16$ — Another table.
3) $\text{first differences: } 3, 5, 7$ — Not equal.
4) $\text{second differences: } 2, 2$ — Equal, so quadratic.
5) $\text{real data } 19, 27, 37, 56$ — Neither is exactly equal.
6) $\text{choose the better model and say why}$ — And say where it stops working.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write Table A: 2, 5, 8, 11 and say "Four values at equal steps." Line 1: write first differences: 3, 3, 3 and say "Equal, so linear." Line 2: write Table B: 1, 4, 9, 16 and say "Another table." Line 3: write first differences: 3, 5, 7 and say "Not equal." Line 4: write second differences: 2, 2 and say "Equal, so quadratic." Line 5: write real data 19, 27, 37, 56 and say "Neither is exactly equal." Line 6: write choose the better model and say why and say "And say where it stops working." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The jump to 60

**The stopping distances at 30, 40, 50 and 60 km/h are $19, 27, 37, 56$ m. What is the first difference between 50 and 60 km/h?**

* Answer: 19

<!-- Speaker note: 56 − 37 = 19 m. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A straight line?

**The first differences are $8, 10, 19$. What does that say about a straight-line model?**

- A line doesn't fit: the distance goes up by more for each extra 10 km/h
- A line fits exactly: the differences are all even or odd
- A line fits well: the distance always goes up
- You can't tell from three differences

* Answer: A line doesn't fit: the distance goes up by more for each extra 10 km/h

<!-- Speaker note: A line needs equal first differences. These grow, so the data curves upward. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why it curves

**The distance a car travels while the driver reacts grows in step with speed. The braking distance grows with the square of the speed. What shape is the total stopping distance?**

- A straight line
- Curved upward: a mix of a straight part and a squared part
- A flat line
- A curve that bends downward

* Answer: Curved upward: a mix of a straight part and a squared part

<!-- Speaker note: Reaction distance is linear and braking distance is quadratic, so the total curves upward. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Pat estimates the distance at 60 km/h from the first two figures. Click the line where his working goes wrong.**

```
 1  Stopping distance: 19 m at 30 km/h, 27 m at 40 km/h.
 2  From 30 to 40 km/h the distance goes up by 8 m.
 3  So every 10 km/h more adds 8 m.
 4  At 60 km/h: 19 + 8 + 8 + 8 = 43 m.
```

* Answer: line 3

<!-- Speaker note: Line 3: one step doesn't set the pattern. The next differences are 10 and 19, not 8, so the estimate of 43 m is far too low. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the speed



- **Cutting the limit:** 
- **Going further:** 
- **Zero speed:** 

<!-- Speaker note: What this step is for: Using the figures for new speeds shows that the gap grows and that a model has limits: it can give an impossible answer outside the data. Hints, in order: Use the published figures for 50 and 60 km/h. / 56 − 37. / A line through the last two points goes up 19 per 10 km/h. / The data is curving upward. / At 0 km/h the car is already stopped. / What does the line y = 9x − 8 give at x = 0? For students who need more support: A printed table with space for both rows of differences. For early finishers: Fit y = ax² + bx to the points at 30 and 60 km/h, and see how far it is out at 40 and 50. The hard part, on purpose: Expecting a perfect pattern. Ask: do the differences have to match exactly for the model to be useful? When students get stuck: A student says the data is linear because it always goes up. Ask: Are the differences equal? Fix: 8, 10, 19: no. A line needs equal differences. / A student says the data must be quadratic because it curves. Ask: Are the second differences equal? Fix: 2 and 9: not exactly. It's a better fit than a line, but not exact. -->

<!-- Speaker note: Teacher: before the zero-speed question, ask what a stopped car needs. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Second difference

**A table gives $y = 2, 5, 10, 17$ for $x = 1, 2, 3, 4$. What is the second difference?**

* Answer: 2

<!-- Speaker note: First differences 3, 5, 7. Second differences 2, 2. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A line?

**A table gives $y = 4, 9, 14, 19$. Which model fits?**

- Linear: the first differences are all 5
- Exponential
- Quadratic: the second differences are 5
- Neither

* Answer: Linear: the first differences are all 5

<!-- Speaker note: 9 − 4 = 5, 14 − 9 = 5, 19 − 14 = 5: equal first differences. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Neither exact

**A table gives $y = 3, 4, 7, 13$ for $x = 1, 2, 3, 4$. Which is the best description?**

- No pattern at all
- A perfect quadratic
- Curving upward: neither exact, but a curve fits better than a line
- A perfect line

* Answer: Curving upward: neither exact, but a curve fits better than a line

<!-- Speaker note: First differences 1, 3, 6 and second differences 2, 3: not exact, but clearly curving upward. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: solve $x^2 - 5x + 4 = 0$. What is the larger solution?**

* Answer: 4

<!-- Speaker note: (x − 1)(x − 4) = 0, so x = 1 or x = 4. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the speed limit



- **How far out?:** Back to the stopping distances. Work it out on paper first, then type your answer.
- **Why it matters:** The stopping distances are typical values on a reasonable road surface from [Transport for NSW](https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding

<!-- Speaker note: What this step is for: Returning to the stopping distances: measure how far a straight-line model is out and say why that matters for a speed limit. Hints, in order: The line y = 9x − 8 at x = 6 is 46. / The published figure is 56. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A table has first differences 4, 4, 4. Linear, quadratic or neither?**

* Linear: the first differences are equal.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M9A05 node 1. Where it leads: Solving the model and saying what the answer means, then reporting its limits. -->
