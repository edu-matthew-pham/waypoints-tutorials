---
title: "Refine it and explain the change"
subtitle: "Angles and shapes · Year 9: geometric algorithms · Lesson 32"
---

# Refine it and explain the change

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The tests found two faults. What is the smallest change that fixes both?


:::teacher-note

**In one sentence:** Fix the failed tests with a smaller change, retest, and say what changed and why. Then extend the algorithm to say whether the triangle has a right, acute or obtuse angle.

**Students should be able to say:** I can refine an algorithm from tests. I can explain what changed and why. I can extend an algorithm with a new decision.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**The check "S &gt;= L" lets 3, 4, 7 through. Which small change fixes that case?**

☐ Delete the check

☐ Add 1 to every length

☐ Change "greater than or equal to" to "greater than"

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Change &gt;= to &gt;. Now S must be strictly greater than L, so S = L (a flat line) is rejected. A second change, rejecting zero or negative lengths, handles the other fault.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain and extend


:::keep-together

### Acute

1. $S > L \text{ and all lengths} > 0$ — Refined triangle check.
2. $L^2 - (a^2 + b^2) = 0 \Rightarrow \text{right}$ — Pythagoras.
3. $< 0 \Rightarrow \text{acute};\ > 0 \Rightarrow \text{obtuse}$ — Compare with zero.

**Right, acute or obtuse? For 4, 5 and 6, L² is 36 and the squares of the others sum to 16 + 25 = 41. What is L² minus that sum?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** -5

36 − 41 = −5: L² is less than the sum, so the largest angle is acute.

:::


:::keep-together

### Obtuse

**For 2, 3 and 4: L² is 16 and the squares of the others sum to 4 + 9 = 13. What is L² minus that sum?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 3

16 − 13 = 3: L² is greater, so the largest angle is obtuse.

:::


:::keep-together

### Find the mistake

**Mia adds the right-angle test. Click the step that is wrong.**

```
 1  The triangle check passes for 4, 5 and 6, so I compare the squares.
 2  I take L as the shortest side, 4, so L squared is 16 and the others add to 25 + 36 = 61.
 3  16 is less than 61, so the triangle is acute.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Step 2: she squares the shortest side as L. It is the LONGEST side that sits opposite the largest angle, so use L².

:::


:::typical

## Apply the refined version


**Right triangle.** 

**Explain the change.** 

**After the fix.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Classify by sides


:::keep-together

### L squared difference

**Strips 6, 8 and 11. L² is 121 and the others' squares sum to 36 + 64 = 100. What is L² minus that sum?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 21

121 − 100 = 21.

:::


:::keep-together

### Which kind

**So 6, 8 and 11 make which kind of triangle?**

☐ Acute

☐ Right

☐ Not a triangle

☐ Obtuse

:::


:::teacher-note

**Answer:** Obtuse

L² is bigger than the others' squares added: obtuse.

:::


:::keep-together

### Review

**Review: which test case is a boundary for "S &gt; L"?**

☐ 3, 4, 5

☐ 6, 8, 10

☐ 5, 5, 5

☐ 3, 4, 7

:::


:::teacher-note

**Answer:** 3, 4, 7

3, 4, 7 has S equal to L.

:::


## Make: the machine's final check

Write the final algorithm as numbered steps and mark each decision.

**Also used in**

- **Computer graphics.** Meshes are checked for valid triangles before they are drawn.
- **Surveying.** A land surveyor tests a triangle of measurements for errors in the same way.
- **Next unit.** Year 10: proof and then Pythagoras and trigonometry in practice.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**After a fix, what do you do before saying it works?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Retest the old cases.

:::

