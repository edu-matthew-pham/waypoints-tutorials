---
marp: true
theme: default
html: true
---

# Writing a geometry rule as an algorithm

Angles and shapes · Year 9: geometric algorithms

<!-- Speaker note: An algorithm is a list of steps with decisions. Write the rule for whether three strips can make a triangle as steps, and mark which are computations and which are decisions. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can write a geometry rule as numbered steps.
- I can say which steps compute and which decide.
- I can follow an algorithm on a set of inputs.

<!-- Speaker note: Before class: Students need triangles and the Year 7 and 8 classifying algorithms. The one idea: an algorithm is exact steps, some computing, some deciding. Pseudocode is used here; a flowchart is a drawing of the same steps (a diamond for each decision). Lengths are made up. -->

---

## Why it matters

> A cutting machine is given three strip lengths for a triangular frame. How does it know the frame will close?

<!-- Speaker note: A cutting machine makes triangular frames from three strips. Before it cuts, a program should check that the three lengths can really make a triangle. The rule from geometry is that the two shorter strips together must be longer than the longest one. An **algorithm** turns that rule into exact steps: some steps **compute** a number, and some **decide** between two paths. Have a guess whether 3, 4 and 8 can make a triangle, and we'll come back to the machine at the end. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Strips of length 3, 4 and 8 (made up for the task). Can they make a triangle?**

- Yes: any three strips can
- No: 3 + 4 = 7 is less than 8
- Yes: 8 is less than 3 + 4 + 8

<!-- Speaker note: What happens: No. The two short strips, 3 + 4 = 7, cannot reach across the 8 strip, so the ends do not meet. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. The two short strips, 3 + 4 = 7, cannot reach across the 8 strip, so the ends do not meet.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/angles/triangle-test-algorithm/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/angles/triangle-test-algorithm/?full=step-2#step-2)

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Which step decides

$$\text{Read } a, b, c$$

1) $L = \max(a, b, c),\ S = a + b + c - L$ — Two computation steps.
2) $S > L ? \text{ triangle } : \text{ no triangle}$ — One decision with two branches.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write Read a, b, c and say "Input." Line 1: write L = (a, b, c),S = a + b + c - L and say "Two computation steps." Line 2: write S > L ? triangle : no triangle and say "One decision with two branches." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which step decides

**Here is the algorithm:
1. Read the three lengths.
2. Find the longest, L.
3. Add the other two, S.
4. If S is greater than L, say "triangle"; otherwise say "no triangle".
Which step is a decision?**

- Step 3
- Step 4
- Step 1
- Step 2

* Answer: Step 4

<!-- Speaker note: Step 4 chooses between two outputs. Steps 2 and 3 compute a value. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Run it

**Run the algorithm on 5, 6 and 10. What is S, the sum of the two shorter strips?**

* Answer: 11

<!-- Speaker note: L = 10, so S = 5 + 6 = 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Lena writes her own algorithm. Test it on 8, 2 and 3. Click the step that makes it fail.**

```
 1  Read the three lengths a, b and c.
 2  Add a and b. If a + b is greater than c, say triangle.
 3  Otherwise say no triangle.
```

* Answer: line 2

<!-- Speaker note: Step 2: it only adds a and b. For 8, 2 and 3 that gives 10, which is bigger than 3, so it says triangle, but 2 + 3 = 5 is less than 8. The sum must be the two SHORTER strips, compared with the longest. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the algorithm



- **An extra decision:** 
- **Flowchart shapes:** 
- **S minus L:** 

<!-- Speaker note: What this step is for: Adding a step or a second decision to the same algorithm, and writing it as a flowchart. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Write the same algorithm as a flowchart, then as pseudocode with a loop that tests a list of strip sets. The hard part, on purpose: Writing vague steps like "check the strips". Ask: what exactly does a machine compute, and what does it compare? When students get stuck: A student writes "check the lengths". Ask: Which two numbers does the machine compare? Fix: Name the numbers and the comparison. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## S minus L

**Strips 6, 9 and 14. By how much does S exceed L? (Negative if it falls short.)**

* Answer: 1

<!-- Speaker note: S = 6 + 9 = 15 and L = 14, so 15 − 14 = 1. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The answer

**Strips 6, 9 and 14: what does the algorithm say?**

- Triangle
- No triangle

* Answer: Triangle

<!-- Speaker note: S > L, so it says triangle. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a shape is enlarged by scale factor 3. How many times bigger is its area?**

* Answer: 9

<!-- Speaker note: 3² = 9. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: check the machine's strips

Write the algorithm in your own words as numbered steps and mark the decision.

**Also used in**

- **Bird keys.** The Year 7 and 8 bird key is the same kind of algorithm: each question is a decision, and the answer is a name instead of "triangle".
- **Computer graphics.** A program checks a mesh triangle is valid before it draws it.
- **Building and design.** Frames, trusses and kites use triangles because the sides must satisfy this rule.
- **Next lesson.** Testing the algorithm with awkward cases to find where it fails.

<!-- Speaker note: What this step is for: Returning to the machine: use the algorithm on a real order, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Is "find the longest" a computation or a decision?**

* A computation.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Starts AC9M9SP03 node 1. Where it leads: testing with awkward cases (next). -->
