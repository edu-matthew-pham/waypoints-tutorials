---
marp: true
theme: default
html: true
---

# Refine it and explain the change

Angles and shapes · Year 9: geometric algorithms

<!-- Speaker note: Fix the failed tests with a smaller change, retest, and say what changed and why. Then extend the algorithm to say whether the triangle has a right, acute or obtuse angle. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can refine an algorithm from tests.
- I can explain what changed and why.
- I can extend an algorithm with a new decision.

<!-- Speaker note: Before class: Students need the last two lessons and Pythagoras (Year 8). The one idea: fix with a small change, retest everything, and explain. The right/acute/obtuse test is the converse of Pythagoras and its extension. Lengths are made up. -->

---

## Why it matters

> The tests found two faults. What is the smallest change that fixes both?

<!-- Speaker note: The tests showed the S >= L check fails when S equals L and when a length is zero. A refinement fixes the fault with the smallest change, then retests. Once the check is right, it can do more: using Pythagoras, compare L² with the sum of the squares of the other two to say whether the largest angle is right, acute or obtuse. Have a guess how L² compares with the others when the triangle is acute, and we'll come back to the machine at the end. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The check "S &gt;= L" lets 3, 4, 7 through. Which small change fixes that case?**

- Delete the check
- Add 1 to every length
- Change "greater than or equal to" to "greater than"

<!-- Speaker note: What happens: Change &gt;= to &gt;. Now S must be strictly greater than L, so S = L (a flat line) is rejected. A second change, rejecting zero or negative lengths, handles the other fault. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Change &gt;= to &gt;. Now S must be strictly greater than L, so S = L (a flat line) is rejected. A second change, rejecting zero or negative lengths, handles the other fault.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/angles/refine-an-algorithm/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/angles/refine-an-algorithm/?full=step-2#step-2)

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Acute

$$S > L \text{ and all lengths} > 0$$

1) $L^2 - (a^2 + b^2) = 0 \Rightarrow \text{right}$ — Pythagoras.
2) $< 0 \Rightarrow \text{acute};\ > 0 \Rightarrow \text{obtuse}$ — Compare with zero.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write S > L and all lengths > 0 and say "Refined triangle check." Line 1: write L^2 - (a^2 + b^2) = 0 right and say "Pythagoras." Line 2: write < 0 acute;> 0 obtuse and say "Compare with zero." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Acute

**Right, acute or obtuse? For 4, 5 and 6, L² is 36 and the squares of the others sum to 16 + 25 = 41. What is L² minus that sum?**

* Answer: -5

<!-- Speaker note: 36 − 41 = −5: L² is less than the sum, so the largest angle is acute. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Obtuse

**For 2, 3 and 4: L² is 16 and the squares of the others sum to 4 + 9 = 13. What is L² minus that sum?**

* Answer: 3

<!-- Speaker note: 16 − 13 = 3: L² is greater, so the largest angle is obtuse. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Mia adds the right-angle test. Click the step that is wrong.**

```
 1  The triangle check passes for 4, 5 and 6, so I compare the squares.
 2  I take L as the shortest side, 4, so L squared is 16 and the others add to 25 + 36 = 61.
 3  16 is less than 61, so the triangle is acute.
```

* Answer: line 2

<!-- Speaker note: Step 2: she squares the shortest side as L. It is the LONGEST side that sits opposite the largest angle, so use L². -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Apply the refined version



- **Right triangle:** 
- **Explain the change:** 
- **After the fix:** 

<!-- Speaker note: What this step is for: Running the whole refined algorithm on new strips, and explaining a change. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Write the algorithm in pseudocode with a loop that tests a list of strip sets and prints a verdict for each. The hard part, on purpose: Changing everything at once. Ask: what is the smallest change that fixes the failed case? When students get stuck: A student rewrites the algorithm. Ask: Which single comparison caused the fault? Fix: Change one thing and retest. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## L squared difference

**Strips 6, 8 and 11. L² is 121 and the others' squares sum to 36 + 64 = 100. What is L² minus that sum?**

* Answer: 21

<!-- Speaker note: 121 − 100 = 21. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which kind

**So 6, 8 and 11 make which kind of triangle?**

- Acute
- Right
- Not a triangle
- Obtuse

* Answer: Obtuse

<!-- Speaker note: L² is bigger than the others' squares added: obtuse. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: which test case is a boundary for "S &gt; L"?**

- 3, 4, 5
- 6, 8, 10
- 5, 5, 5
- 3, 4, 7

* Answer: 3, 4, 7

<!-- Speaker note: 3, 4, 7 has S equal to L. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the machine's final check

Write the final algorithm as numbered steps and mark each decision.

**Also used in**

- **Computer graphics.** Meshes are checked for valid triangles before they are drawn.
- **Surveying.** A land surveyor tests a triangle of measurements for errors in the same way.
- **Next unit.** Year 10: proof and then Pythagoras and trigonometry in practice.

<!-- Speaker note: What this step is for: Returning to the machine: run the finished algorithm and report the result, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**After a fix, what do you do before saying it works?**

* Retest the old cases.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Completes AC9M9SP03 node 3. Where it leads: Year 10 proof and trigonometry. -->
