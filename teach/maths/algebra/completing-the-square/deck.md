---
marp: true
theme: default
html: true
---

# Completing the square

Algebra Foundations · Year 10: solving

<!-- Speaker note: Students fill the corner of an x² and x-tile square, take away the ones they did not have, and read the lowest (or highest) point from the result: x² + 6x + 5 = (x + 3)² − 4, then the ball's highest point (AC9M10A01, node 4). About 45 minutes (Predict and Run 8 min · Investigate 15 min · Modify 12 min · Practise and Make 10 min). -->

---

## Today

- I can write x² + bx + c as (x + b/2)² + k by filling the corner and taking away what I did not have.
- I can read the lowest point of y = x² + bx + c from the completed square.
- I can use it to find the highest point of a ball's path.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need Special products from this unit: (x + 3)² is x² + 6x + 9, two strips and a corner. Here the corner is the missing piece. The one idea: half the x-tiles go down each side, the corner needs half times half ones, and k is what you have minus what the corner needs (positive: left over, negative: short and taken away). The common mistake is writing k = c (Rin's working, planted after the worked example). Hinge node: solving quadratics, the turning point and later the quadratic formula all use this move. The smaller steps ask for half the move with numbers (the corner, then the subtraction). If a student's bracket is right and k is wrong, ask what (x + 4)² already has in it. The board makes a bowl, so the ball (a hill) is turned over by taking a minus out first. The height formula is made up for this lesson and leaves out air resistance, so the ball in real life is not exactly this arch. The board only does an even number of x-tiles (b from −12 to 12); the odd case, with halves, is done on paper. Teacher: Paper: the try-one after the worked example and the ball in Make are worked on paper first. Books out, and look for the minus taken out at the start of the ball. -->

---

## Why it matters

> A ball is thrown, and a formula gives its height. How high does it get, and when, without a table or a graph?

<!-- Speaker note: A ball is thrown and its height after $t$ seconds is $h = 5 + 6t - t^2$ metres. (The formula is made up for this lesson, and leaves out air resistance.) You could draw a graph or fill in a table to find the highest point. There is a faster way, and it starts with a square. <figure class="situation" role="img" aria-label="A ball thrown from the ground on the left follows an arch up and down to the right. The formula h = 5 + 6t − t² is written above the arch. A dashed line marks the top of the arch, labelled with a question mark: highest point."><svg viewBox="0 0 429 210" width="429" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M20 185h380" stroke-width="1"/><path d="M40 175 Q 210 -10 380 175" stroke="#0F6E56" stroke-width="2"/><circle cx="40" cy="175" r="7" fill="#1D9E75" stroke="#0F6E56"/><path d="M210 82h110" stroke-dasharray="5 4" stroke-width="1"/><text x="330" y="87" fill="currentColor" stroke="none">highest point?</text><text x="210" y="22" text-anchor="middle" fill="currentColor" stroke="none">h = 5 + 6t − t²</text><text x="210" y="205" text-anchor="middle" fill="currentColor" stroke="none">t seconds</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Take a square $x$ by $x$. Add 6 more $x$-tiles: 3 down the right side and 3 along the bottom. How many 1-tiles fill the corner so the whole thing is one big square?**

- $12$
- $9$
- $3$
- $6$

<!-- Speaker note: What happens: 9. The corner is 3 by 3, so it takes 3 × 3 = 9 ones. 6 is the number of x-tiles, 3 is only one side of the corner, and 12 is double the six. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands for 9, 6, 3 and 12. Ask the 6s where the 6 came from. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Falgebra%2Fcompleting-the-square%2Fstep-2&code=widget%3A+tiles%0Amode%3A+square%0Aslider+h%3A+-5%2C+6%2C+3%0Aslider+c%3A+-12%2C+30%2C+9%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/algebra/completing-the-square/?full=step-2#step-2)

<!-- Speaker note: $h$ is how many $x$-tiles go down each side, so the board has $2h$ of them. The corner needs $h \times h$ ones, and $c$ is how many you have. -->

<!-- Speaker note: Teacher: ask how many ones are missing when c = 5, and what the minus sign on the 4 means. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 9. The corner is 3 by 3, so it takes 3 × 3 = 9 ones. 6 is the number of x-tiles, 3 is only one side of the corner, and 12 is double the six.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Fill the corner

Here's one worked out, piece by piece.

Now try one on paper, piece by piece like the example: $x^2 + 10x + 7$. Then type $k$.

$$x^2 + 6x + 5$$

1) $6 \div 2 = 3$ — Half the x-tiles go down each side: 3 and 3.
2) $3 \times 3 = 9$ — The corner is 3 by 3, so it needs 9 ones.
3) $x^2 + 6x + 9 = (x + 3)^2$ — With 9 ones it is a perfect square.
4) $5 - 9 = -4$ — We only have 5, so 4 are missing: take 4 away.
5) $x^2 + 6x + 5 = (x + 3)^2 - 4$ — The completed square.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write x^2 + 6x + 5 and say "One x², 6 x-tiles and 5 ones." Line 1: write 6 ÷ 2 = 3 and say "Half the x-tiles go down each side: 3 and 3." Line 2: write 3 × 3 = 9 and say "The corner is 3 by 3, so it needs 9 ones." Line 3: write x^2 + 6x + 9 = (x + 3)^2 and say "With 9 ones it is a perfect square." Line 4: write 5 - 9 = -4 and say "We only have 5, so 4 are missing: take 4 away." Line 5: write x^2 + 6x + 5 = (x + 3)^2 - 4 and say "The completed square." -->

<!-- Speaker note: Teacher: draw x² + 8x + 3 live and ask how many ones the 4-by-4 corner needs before Rin's line 3. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Fill the corner

**Write $x^2 + 10x + 7$ as $(x + 5)^2 + k$. What is $k$?**

* Answer: -18

<!-- Speaker note: Half of 10 is 5, and the corner needs 5 × 5 = 25. You have 7, so k = 7 − 25 = −18: x² + 10x + 7 = (x + 5)² − 18. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Rin writes $x^2 + 8x + 3$ in the form $(x + 4)^2 + k$. Click the line where her working goes wrong.**

```
 1  Write x² + 8x + 3 as (x + 4)² + k.
 2  Half of 8 is 4, so the bracket is (x + 4)².
 3  So x² + 8x + 3 = (x + 4)² + 3.
 4  Check with x = 0: the left side is 3, the right side is 16 + 3 = 19.
```

* Answer: line 3

<!-- Speaker note: Line 3: Rin copied the 3 after the bracket. But (x + 4)² already has a corner of 16, so she needs 3 − 16 = −13. Her check on line 4 is the clue: 3 and 19 don't match. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The lowest point

**What is the lowest value of $(x + 3)^2 - 4$, and when does it happen?**

- −4, when $x = -3$
- 0, when $x = -3$
- 4, when $x = -3$
- −4, when $x = 3$

* Answer: −4, when $x = -3$

<!-- Speaker note: A number squared is never below 0, and it is 0 when x + 3 = 0, which is x = −3. There the whole thing is 0 − 4 = −4. So the lowest point of y = (x + 3)² − 4 is (−3, −4). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One change at a time



- **Move the lowest point:** 
- **A perfect square:** 
- **A negative x number:** 
- **An odd number of x:** 
- **Read the point:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/algebra/completing-the-square/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: using the form to place the lowest point, a perfect square, a negative x number, an odd x number and reading the point off a given form. Hints, in order: The bracket is (x + h), so the lowest point has u = −h. For u = −2, set h to 2. / The corner needs h × h = 4 ones. The lowest point is at 1, so you need 1 more than the corner. / 8 x-tiles means 4 down each side. / The corner needs 4 × 4 ones. What leftover do you want? For students who need more support: A table with columns b, b ÷ 2, (b ÷ 2)², and c − (b ÷ 2)². Draw the x² and x-tile square for each before filling in the table. For early finishers: Complete the square for 2x² + 12x + 5 by taking out the 2 first: 2(x² + 6x) + 5, and say where its lowest point is. Then try the odd case x² + 5x + 1 with halves. The hard part, on purpose: Copying the number after the bracket without taking the corner away (Rin), and the sign of the bracket when b is negative. Ask students to say how many ones the corner needs before they write anything. When students get stuck: A student writes x² + 8x + 3 = (x + 4)² + 3 (Rin's mistake). Ask: How many ones does the (x + 4)² square already hold in its corner? Fix: 16. So 3 is 13 short of it: (x + 4)² − 13. / A student writes x² − 8x + 20 = (x + 4)² + 4. Ask: Which way do the x-tiles go on the board when b is negative? Fix: Red: the bracket is (x − 4). The corner is still +16. / A student writes h = 14 − (t − 3)² but says the lowest point is 14. Ask: Is (t − 3)² taken from 14 or added to it? Fix: Taken from it, so it is biggest when the square is 0: a highest point, not a lowest. -->

<!-- Speaker note: Teacher: before the lowest point (−2, 1), ask which of h and c sets the left-and-right position. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A plus

**$x^2 + 12x + 20 = (x + 6)^2 + k$. What is $k$?**

* Answer: -16

<!-- Speaker note: Half of 12 is 6, and the corner needs 36. 20 − 36 = −16. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A minus

**$x^2 - 10x + 3 = (x - 5)^2 + k$. What is $k$?**

* Answer: -22

<!-- Speaker note: Half of −10 is −5, the corner is 25, and 3 − 25 = −22. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Write the form

**Which is $x^2 + 4x - 1$ with the square completed?**

- $(x + 4)^2 - 17$
- $(x + 2)^2 + 3$
- $(x + 2)^2 - 1$
- $(x + 2)^2 - 5$

* Answer: $(x + 2)^2 - 5$

<!-- Speaker note: Half of 4 is 2, the corner is 4, and −1 − 4 = −5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the point

**What is the lowest point of $y = x^2 + 8x + 19$?**

- $(4, 3)$
- $(-4, -3)$
- $(-4, 3)$
- $(-4, 19)$

* Answer: $(-4, 3)$

<!-- Speaker note: x² + 8x + 19 = (x + 4)² + 3. The square is zero at x = −4, so the lowest point is (−4, 3). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: expand and simplify $(x - 4)^2 + 6$.**

* Answer: x^2 - 8x + 22

<!-- Speaker note: (x − 4)² = x² − 8x + 16. Add 6: x² − 8x + 22. This is completing the square run backwards. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: how high does the ball get?



- **The ball:** Do this one on paper first, then type your answer.
- **A check:** **Also used in** - **Any bowl or hill formula.** A profit that rises and falls, or the area of a pen with a fixed fence: the bracket squared gives the best valu

<!-- Speaker note: What this step is for: Back to the ball: take out the minus so t² is positive, complete the square, and put the minus back. A square is never below zero, so the biggest height is when the bracket is zero. Hints, in order: Take a minus out: −(t² − 6t − 5). / Half of −6 is −3. The corner is 9. Then −5 − 9. -->

<!-- Speaker note: Teacher: before anyone writes, ask whether 14 or 5 is the biggest height, and how they would know. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Write x² + 6x + 1 as (x + 3)² + k. What is k?**

* −8: the corner needs 9 and there is 1, so k = 1 − 9 = −8.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues the Year 10 algebra work (AC9M10A01 node 4, second half). Where it leads: Solving by reshaping (next lesson), and the quadratic formula, which is this move done once with letters. -->
