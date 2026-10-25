---
order: 31
unit: algorithms9
node: AC9M9SP03 n2
uses: ["AC9M9SP03 n1"]
title: "Testing an algorithm: where does it fail?"
summary: "Good tests include the boundary and the strange cases, not just easy ones. Test the triangle checker on a set of inputs and find where it gives the wrong answer."
connection: field-guide-key   # data/connections/maths.yml (documentation only)
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The machine's first program says 3, 4 and 7 make a triangle. What would it cut?"
---
A programmer changes the machine's check to "if S is greater than or equal to L, say triangle". It looks fine, so the machine goes into production. Have a guess which three strips would make it cut a frame that cannot close, and we'll come back to the machine at the end.

## Predict: which strips break it

```step
stage: "predict"
insight: "Choosing a case that breaks the check shows whether students think of the boundary (where S equals L)."
check: {"type": "predict", "q": "The check says triangle when S is greater than OR EQUAL to L. Which strips are most likely to fool it?", "options": ["3, 4 and 7, where S equals L", "3, 4 and 5", "3, 4 and 8"], "actual": "3, 4 and 7. Here S = 7 equals L = 7, so the check says triangle, but the two short strips lie flat along the long one and enclose no space."}
```

## Run: the boundary

```step
stage: "run"
insight: "A boundary case is one where the comparison is exactly equal; computing S minus L shows whether the check is right there."
check: {"type": "number", "q": "The strips are 3, 4 and 7. What is S minus L?", "answer": 0, "tolerance": 0, "explain": "S = 3 + 4 = 7 and L = 7, so S − L = 0: the strips lie flat in a line."}
```

## Investigate: kinds of test case

```step
stage: "investigate"
insight: "A good test set has typical cases, boundary cases and impossible or odd inputs; testing only easy cases finds nothing."
tasks:
  - {"check": {"type": "question", "q": "Which kind of test is 3, 4 and 7?", "options": ["A boundary case", "A typical case", "An invalid input", "A repeat of another test"], "answer": 0, "feedback": [null, "Typical cases are far from the edge.", "The lengths are all allowed; it is an edge.", "It differs from the others."], "explain": "It sits exactly on the edge of the rule (S = L), the place algorithms most often break."}, "smaller": {"check": {"type": "question", "q": "Is a test where S and L are equal on the edge of the rule or far from it?", "options": ["On the edge", "Far from it"], "answer": 0, "feedback": [null, "Equal is exactly the boundary."], "explain": "On the edge."}}}
  - {"check": {"type": "number", "q": "Test 2.5, 2.5 and 5. What is S minus L?", "answer": 0, "tolerance": 0, "explain": "S = 5 and L = 5, so S − L = 0."}}
  - {"check": {"type": "bug", "code": "working.txt#ravi", "text": "Ravi tests the checker. Click the line that is the weak point of his testing.", "answer": 2, "fault": "logic", "misconception": "test-only-easy-cases", "explain": "Line 2: three typical cases can all pass while a boundary case fails. Add cases where S equals L, where a length is zero, and where the lengths are equal."}}
```

### Kinds of test

```worked
3,\ 4,\ 5:\ S = 7 > 5 :: Typical, correct.
3,\ 4,\ 7:\ S = 7 = L :: Boundary, the check says triangle (wrong).
0,\ 4,\ 4:\ S = 4 \ge 4 :: Zero length, the check says triangle (wrong).
```

### Another boundary

### Find the weak point

## Modify: design tests

```step
stage: "modify"
insight: "Choosing a test set that would catch the fault, and judging a failed test."
tasks:
  - {"check": {"type": "question", "q": "Which set of tests would find the fault in the S >= L check?", "options": ["3, 4, 5 and 3, 4, 7", "3, 4, 5 and 5, 6, 7", "6, 6, 6 and 5, 5, 5", "10, 11, 12 and 20, 21, 22"], "answer": 0, "feedback": [null, "Neither case has S equal to L.", "Neither case has S equal to L.", "Neither case has S equal to L."], "explain": "Only a case with S = L (3, 4, 7) shows the check says triangle when it should not."}}
  - {"check": {"type": "question", "q": "A strip has length 0. What should the checker say?", "options": ["No triangle", "Triangle", "Perhaps", "It depends on the other strips"], "answer": 0, "feedback": [null, "A zero length strip is just a point.", "It is not allowed to guess.", "Zero is never a strip."], "explain": "No triangle. A zero-length side cannot be part of a frame."}}
  - {"check": {"type": "number", "q": "Strips 1, 1 and 2. What is S minus L?", "answer": 0, "tolerance": 0, "explain": "S = 2 and L = 2: another boundary case."}}
```

### Find the fault

### Zero length

### Another boundary

## Practise: run the tests

```step
stage: "practise"
insight: "Running the algorithm on a list of cases and counting its wrong answers."
tasks:
  - {"check": {"type": "number", "q": "Test 4, 5 and 9. By how much does S exceed L?", "answer": 0, "tolerance": 0, "explain": "S = 9 and L = 9: a boundary case."}}
  - {"check": {"type": "question", "q": "The check S >= L says triangle for 4, 5 and 9. Is it right?", "options": ["No: the strips lie flat", "Yes"], "answer": 0, "feedback": [null, "They cannot enclose any space."], "explain": "No: S = L means a flat line."}}
  - {"check": {"type": "number", "q": "Review: strips 6, 9 and 14. What is S minus L?", "answer": 1, "tolerance": 0, "explain": "15 − 14 = 1."}}
```

### Boundary

### Is it right

### Review

## Make: test the machine's check

```step
stage: "make"
insight: "Returning to the machine: run five test cases through the S >= L check and count the wrong answers, on paper."
check: {"type": "reasoning", "paper": true, "q": "The check says triangle if S >= L. Run it on these five cases: (3, 4, 5), (3, 4, 7), (0, 4, 4), (1, 1, 1) and (2, 3, 9). How many does it get wrong? (The lengths are made up for the task.)", "steps": [["3, 4, 5: $7 \\ge 5$, triangle: correct", "typical"], ["3, 4, 7: $7 \\ge 7$, triangle: WRONG (flat)", "boundary"], ["0, 4, 4: $4 \\ge 4$, triangle: WRONG (zero length)", "odd input"], ["1, 1, 1 correct, 2, 3, 9: $5 \\ge 9$ is false, correct", "the other two"]], "answer": "2", "answerLabel": "Wrong answers", "tolerance": 0, "feedback": [["0", "Test the boundary and the zero length."], ["3", "Only two of them fool the check."]], "criteria": ["I ran every case.", "I found the boundary case.", "I found the zero length case."], "explain": "Two of the five are wrong: 3, 4, 7 and 0, 4, 4. Both were found only because the test set included an edge case and an odd input."}
```

Which kind of test found each fault? Typical, boundary or odd input?

**Also used in**

- **Bird keys.** A key built for five birds names a common myna (brown, black head, yellow bill) a superb fairy-wren, because nobody tested a bird outside the five. Female fairy-wrens are mostly brown too ([Australian Museum: common myna](https://australian.museum/learn/animals/birds/common-myna/), [superb fairy-wren](https://australian.museum/learn/animals/birds/superb-fairy-wren/)).
- **Software.** Testers deliberately try zero, negative and enormous inputs.
- **Engineering.** A bridge is tested at its limit, not just under normal loads.
- **Next lesson.** Refining the algorithm from the tests and explaining the change.
