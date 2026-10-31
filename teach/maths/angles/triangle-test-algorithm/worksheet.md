---
title: "Writing a geometry rule as an algorithm"
subtitle: "Angles and shapes · Year 9: geometric algorithms · Lesson 30"
---

# Writing a geometry rule as an algorithm

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A cutting machine is given three strip lengths for a triangular frame. How does it know the frame will close?


:::teacher-note

**In one sentence:** An algorithm is a list of steps with decisions. Write the rule for whether three strips can make a triangle as steps, and mark which are computations and which are decisions.

**Students should be able to say:** I can write a geometry rule as numbered steps. I can say which steps compute and which decide. I can follow an algorithm on a set of inputs.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Strips of length 3, 4 and 8 (made up for the task). Can they make a triangle?**

☐ Yes: any three strips can

☐ No: 3 + 4 = 7 is less than 8

☐ Yes: 8 is less than 3 + 4 + 8

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. The two short strips, 3 + 4 = 7, cannot reach across the 8 strip, so the ends do not meet.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Computations and decisions


:::keep-together

### Which step decides

1. $\text{Read } a, b, c$ — Input.
2. $L = \max(a, b, c),\ S = a + b + c - L$ — Two computation steps.
3. $S > L ? \text{ triangle } : \text{ no triangle}$ — One decision with two branches.

**Here is the algorithm:
1. Read the three lengths.
2. Find the longest, L.
3. Add the other two, S.
4. If S is greater than L, say "triangle"; otherwise say "no triangle".
Which step is a decision?**

☐ Step 3

☐ Step 4

☐ Step 1

☐ Step 2

:::


:::teacher-note

**Answer:** Step 4

Step 4 chooses between two outputs. Steps 2 and 3 compute a value.

:::


:::keep-together

### Run it

**Run the algorithm on 5, 6 and 10. What is S, the sum of the two shorter strips?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 11

L = 10, so S = 5 + 6 = 11.

:::


:::keep-together

### Find the mistake

**Lena writes her own algorithm. Test it on 8, 2 and 3. Click the step that makes it fail.**

```
 1  Read the three lengths a, b and c.
 2  Add a and b. If a + b is greater than c, say triangle.
 3  Otherwise say no triangle.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Step 2: it only adds a and b. For 8, 2 and 3 that gives 10, which is bigger than 3, so it says triangle, but 2 + 3 = 5 is less than 8. The sum must be the two SHORTER strips, compared with the longest.

:::


:::typical

## Change the algorithm


**An extra decision.** 

**Flowchart shapes.** 

**S minus L.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Steps and results


:::keep-together

### S minus L

**Strips 6, 9 and 14. By how much does S exceed L? (Negative if it falls short.)**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 1

S = 6 + 9 = 15 and L = 14, so 15 − 14 = 1.

:::


:::keep-together

### The answer

**Strips 6, 9 and 14: what does the algorithm say?**

☐ Triangle

☐ No triangle

:::


:::teacher-note

**Answer:** Triangle

S &gt; L, so it says triangle.

:::


:::keep-together

### Review

**Review: a shape is enlarged by scale factor 3. How many times bigger is its area?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 9

3² = 9.

:::


## Make: check the machine's strips

Write the algorithm in your own words as numbered steps and mark the decision.

**Also used in**

- **Bird keys.** The Year 7 and 8 bird key is the same kind of algorithm: each question is a decision, and the answer is a name instead of "triangle".
- **Computer graphics.** A program checks a mesh triangle is valid before it draws it.
- **Building and design.** Frames, trusses and kites use triangles because the sides must satisfy this rule.
- **Next lesson.** Testing the algorithm with awkward cases to find where it fails.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Is "find the longest" a computation or a decision?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A computation.

:::

