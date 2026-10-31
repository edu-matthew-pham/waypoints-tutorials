---
title: "Testing an algorithm: where does it fail?"
subtitle: "Angles and shapes · Year 9: geometric algorithms · Lesson 31"
---

# Testing an algorithm: where does it fail?

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The machine's first program says 3, 4 and 7 make a triangle. What would it cut?


:::teacher-note

**In one sentence:** Good tests include the boundary and the strange cases, not just easy ones. Test the triangle checker on a set of inputs and find where it gives the wrong answer.

**Students should be able to say:** I can test an algorithm with a set of cases. I can name typical, boundary and odd inputs. I can find where an algorithm fails.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**The check says triangle when S is greater than OR EQUAL to L. Which strips are most likely to fool it?**

☐ 3, 4 and 7, where S equals L

☐ 3, 4 and 5

☐ 3, 4 and 8

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 3, 4 and 7. Here S = 7 equals L = 7, so the check says triangle, but the two short strips lie flat along the long one and enclose no space.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Kinds of test case


:::keep-together

### Kinds of test

1. $3,\ 4,\ 5:\ S = 7 > 5$ — Typical, correct.
2. $3,\ 4,\ 7:\ S = 7 = L$ — Boundary, the check says triangle (wrong).
3. $0,\ 4,\ 4:\ S = 4 \ge 4$ — Zero length, the check says triangle (wrong).

**Which kind of test is 3, 4 and 7?**

☐ An invalid input

☐ A typical case

☐ A boundary case

☐ A repeat of another test

:::


:::teacher-note

**Answer:** A boundary case

It sits exactly on the edge of the rule (S = L), the place algorithms most often break.

:::


:::keep-together

### Another boundary

**Test 2.5, 2.5 and 5. What is S minus L?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0

S = 5 and L = 5, so S − L = 0.

:::


:::keep-together

### Find the weak point

**Ravi tests the checker. Click the line that is the weak point of his testing.**

```
 1  I test the checker with 3, 4, 5 then 5, 6, 7 then 6, 8, 10.
 2  All three say triangle, which is correct, so the checker works.
 3  No more tests are needed.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: three typical cases can all pass while a boundary case fails. Add cases where S equals L, where a length is zero, and where the lengths are equal.

:::


:::typical

## Design tests


**Find the fault.** 

**Zero length.** 

**Another boundary.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Run the tests


:::keep-together

### Boundary

**Test 4, 5 and 9. By how much does S exceed L?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0

S = 9 and L = 9: a boundary case.

:::


:::keep-together

### Is it right

**The check S &gt;= L says triangle for 4, 5 and 9. Is it right?**

☐ Yes

☐ No: the strips lie flat

:::


:::teacher-note

**Answer:** No: the strips lie flat

No: S = L means a flat line.

:::


:::keep-together

### Review

**Review: strips 6, 9 and 14. What is S minus L?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 1

15 − 14 = 1.

:::


## Make: test the machine's check

Which kind of test found each fault? Typical, boundary or odd input?

**Also used in**

- **Bird keys.** A key built for five birds names a common myna (brown, black head, yellow bill) a superb fairy-wren, because nobody tested a bird outside the five. Female fairy-wrens are mostly brown too ([Australian Museum: common myna](https://australian.museum/learn/animals/birds/common-myna/), [superb fairy-wren](https://australian.museum/learn/animals/birds/superb-fairy-wren/)).
- **Software.** Testers deliberately try zero, negative and enormous inputs.
- **Engineering.** A bridge is tested at its limit, not just under normal loads.
- **Next lesson.** Refining the algorithm from the tests and explaining the change.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Name a boundary case for "S greater than L".**

{{lines-3}}

:::


:::teacher-note

**Answer:** S equal to L, such as 3, 4, 7.

:::

