---
marp: true
theme: default
html: true
---

# Testing an algorithm: where does it fail?

Angles and shapes · Year 9: geometric algorithms

<!-- Speaker note: Good tests include the boundary and the strange cases, not just easy ones. Test the triangle checker on a set of inputs and find where it gives the wrong answer. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can test an algorithm with a set of cases.
- I can name typical, boundary and odd inputs.
- I can find where an algorithm fails.

<!-- Speaker note: Before class: Students need the last lesson. The one idea: algorithms break at the edges, so tests must include boundary and odd cases. The S >= L fault is deliberate. Lengths are made up. -->

---

## Why it matters

> The machine's first program says 3, 4 and 7 make a triangle. What would it cut?

<!-- Speaker note: A programmer changes the machine's check to "if S is greater than or equal to L, say triangle". It looks fine, so the machine goes into production. Have a guess which three strips would make it cut a frame that cannot close, and we'll come back to the machine at the end. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The check says triangle when S is greater than OR EQUAL to L. Which strips are most likely to fool it?**

- 3, 4 and 7, where S equals L
- 3, 4 and 5
- 3, 4 and 8

<!-- Speaker note: What happens: 3, 4 and 7. Here S = 7 equals L = 7, so the check says triangle, but the two short strips lie flat along the long one and enclose no space. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 3, 4 and 7. Here S = 7 equals L = 7, so the check says triangle, but the two short strips lie flat along the long one and enclose no space.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/angles/test-with-awkward-cases/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/angles/test-with-awkward-cases/?full=step-2#step-2)

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Kinds of test

$$3,\ 4,\ 5:\ S = 7 > 5$$

1) $3,\ 4,\ 7:\ S = 7 = L$ — Boundary, the check says triangle (wrong).
2) $0,\ 4,\ 4:\ S = 4 \ge 4$ — Zero length, the check says triangle (wrong).

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 3,4,5:S = 7 > 5 and say "Typical, correct." Line 1: write 3,4,7:S = 7 = L and say "Boundary, the check says triangle (wrong)." Line 2: write 0,4,4:S = 4 4 and say "Zero length, the check says triangle (wrong)." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Kinds of test

**Which kind of test is 3, 4 and 7?**

- An invalid input
- A typical case
- A boundary case
- A repeat of another test

* Answer: A boundary case

<!-- Speaker note: It sits exactly on the edge of the rule (S = L), the place algorithms most often break. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Another boundary

**Test 2.5, 2.5 and 5. What is S minus L?**

* Answer: 0

<!-- Speaker note: S = 5 and L = 5, so S − L = 0. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the weak point

**Ravi tests the checker. Click the line that is the weak point of his testing.**

```
 1  I test the checker with 3, 4, 5 then 5, 6, 7 then 6, 8, 10.
 2  All three say triangle, which is correct, so the checker works.
 3  No more tests are needed.
```

* Answer: line 2

<!-- Speaker note: Line 2: three typical cases can all pass while a boundary case fails. Add cases where S equals L, where a length is zero, and where the lengths are equal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Design tests



- **Find the fault:** 
- **Zero length:** 
- **Another boundary:** 

<!-- Speaker note: What this step is for: Choosing a test set that would catch the fault, and judging a failed test. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Design a test set of five cases that finds every fault in a checker. The hard part, on purpose: Testing only easy cases. Ask: what is the closest case to the edge of the rule? When students get stuck: A student says all the tests pass. Ask: Did you try S equal to L? Fix: Add the boundary. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Boundary

**Test 4, 5 and 9. By how much does S exceed L?**

* Answer: 0

<!-- Speaker note: S = 9 and L = 9: a boundary case. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Is it right

**The check S &gt;= L says triangle for 4, 5 and 9. Is it right?**

- Yes
- No: the strips lie flat

* Answer: No: the strips lie flat

<!-- Speaker note: No: S = L means a flat line. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: strips 6, 9 and 14. What is S minus L?**

* Answer: 1

<!-- Speaker note: 15 − 14 = 1. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: test the machine's check

Which kind of test found each fault? Typical, boundary or odd input?

**Also used in**

- **Bird keys.** A key built for five birds names a common myna (brown, black head, yellow bill) a superb fairy-wren, because nobody tested a bird outside the five. Female fairy-wrens are mostly brown too ([Australian Museum: common myna](https://australian.museum/learn/animals/birds/common-myna/), [superb fairy-wren](https://australian.museum/learn/animals/birds/superb-fairy-wren/)).
- **Software.** Testers deliberately try zero, negative and enormous inputs.
- **Engineering.** A bridge is tested at its limit, not just under normal loads.
- **Next lesson.** Refining the algorithm from the tests and explaining the change.

<!-- Speaker note: What this step is for: Returning to the machine: run five test cases through the S >= L check and count the wrong answers, on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Name a boundary case for "S greater than L".**

* S equal to L, such as 3, 4, 7.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M9SP03 node 2. Where it leads: refining the algorithm (next). -->
