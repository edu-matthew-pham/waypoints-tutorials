---
order: 32
unit: algorithms9
node: AC9M9SP03 n3
uses: ["AC9M9SP03 n2", "AC9M8M06 n2"]
title: "Refine it and explain the change"
summary: "Fix the failed tests with a smaller change, retest, and say what changed and why. Then extend the algorithm to say whether the triangle has a right, acute or obtuse angle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The tests found two faults. What is the smallest change that fixes both?"
---
The tests showed the S >= L check fails when S equals L and when a length is zero. A refinement fixes the fault with the smallest change, then retests. Once the check is right, it can do more: using Pythagoras, compare L² with the sum of the squares of the other two to say whether the largest angle is right, acute or obtuse. Have a guess how L² compares with the others when the triangle is acute, and we'll come back to the machine at the end.

## Predict: the smallest fix

```step
stage: "predict"
insight: "Choosing the minimal change shows whether students change the comparison (> not >=) rather than rebuild everything."
check: {"type": "predict", "q": "The check \"S >= L\" lets 3, 4, 7 through. Which small change fixes that case?", "options": ["Change \"greater than or equal to\" to \"greater than\"", "Add 1 to every length", "Delete the check"], "actual": "Change >= to >. Now S must be strictly greater than L, so S = L (a flat line) is rejected. A second change, rejecting zero or negative lengths, handles the other fault."}
```

## Run: retest

```step
stage: "run"
insight: "After a change, rerun the failed cases: a fix is only done when the old failures now pass."
check: {"type": "question", "q": "With the new check \"S > L\" and \"all lengths greater than 0\", what does the machine say for 3, 4 and 7?", "options": ["No triangle", "Triangle", "It depends", "Error"], "answer": 0, "feedback": [null, "S = 7 is not greater than L = 7.", "It is decided.", "It runs fine."], "explain": "S is not greater than L, so it says no triangle: the old failure now passes."}
```

## Investigate: explain and extend

```step
stage: "investigate"
insight: "A refinement is explained by what changed, why, and what the retest shows; extending an algorithm adds a new decision using a new geometric idea."
tasks:
  - {"check": {"type": "number", "q": "Right, acute or obtuse? For 4, 5 and 6, L² is 36 and the squares of the others sum to 16 + 25 = 41. What is L² minus that sum?", "answer": -5, "tolerance": 0, "explain": "36 − 41 = −5: L² is less than the sum, so the largest angle is acute."}, "smaller": {"check": {"type": "question", "q": "If L² is smaller than the sum of the other squares, is the largest angle acute or obtuse?", "options": ["Acute", "Obtuse"], "answer": 0, "feedback": [null, "Obtuse would have L² larger."], "explain": "Acute."}}}
  - {"check": {"type": "number", "q": "For 2, 3 and 4: L² is 16 and the squares of the others sum to 4 + 9 = 13. What is L² minus that sum?", "answer": 3, "tolerance": 0, "explain": "16 − 13 = 3: L² is greater, so the largest angle is obtuse."}}
  - {"check": {"type": "bug", "code": "working.txt#mia", "text": "Mia adds the right-angle test. Click the step that is wrong.", "answer": 2, "fault": "logic", "misconception": "compare-shortest-square", "explain": "Step 2: she squares the shortest side as L. It is the LONGEST side that sits opposite the largest angle, so use L²."}}
```

### Acute

```worked
S > L \text{ and all lengths} > 0 :: Refined triangle check.
L^2 - (a^2 + b^2) = 0 \Rightarrow \text{right} :: Pythagoras.
< 0 \Rightarrow \text{acute};\ > 0 \Rightarrow \text{obtuse} :: Compare with zero.
```

### Obtuse

### Find the mistake

## Modify: apply the refined version

```step
stage: "modify"
insight: "Running the whole refined algorithm on new strips, and explaining a change."
tasks:
  - {"check": {"type": "number", "q": "For 5, 12 and 13: L² is 169 and the others' squares sum to 25 + 144 = 169. What is the difference?", "answer": 0, "tolerance": 0, "explain": "169 − 169 = 0: a right triangle."}}
  - {"check": {"type": "question", "q": "Which sentence best explains the refinement?", "options": ["I changed >= to > because S = L gives a flat shape, and retesting 3, 4, 7 now says no triangle", "I changed the code to make it better", "I changed it because it was wrong", "I added more lines"], "answer": 0, "feedback": [null, "Say what changed and why.", "Say what was wrong and how it was fixed.", "More lines are not a reason."], "explain": "A good explanation names the change, the fault it fixes, and the retest."}}
  - {"check": {"type": "question", "q": "After the refinement, 3, 4, 7 gives \"no triangle\" and 3, 4, 5 gives \"triangle\". What should you do next?", "options": ["Retest the other old cases to check nothing else broke", "Stop: it works", "Delete the tests", "Change it again"], "answer": 0, "feedback": [null, "A fix can break something else.", "Tests are still needed.", "No new fault was found."], "explain": "Rerun the whole test set: a refinement can fix one case and break another."}}
```

### Right triangle

### Explain the change

### After the fix

## Practise: classify by sides

```step
stage: "practise"
insight: "Using the L² comparison on new strips, and a review of testing."
tasks:
  - {"check": {"type": "number", "q": "Strips 6, 8 and 11. L² is 121 and the others' squares sum to 36 + 64 = 100. What is L² minus that sum?", "answer": 21, "tolerance": 0, "explain": "121 − 100 = 21."}}
  - {"check": {"type": "question", "q": "So 6, 8 and 11 make which kind of triangle?", "options": ["Obtuse", "Right", "Acute", "Not a triangle"], "answer": 0, "feedback": [null, "The difference is not 0.", "L² is bigger, so the angle is wider than right.", "S = 14 > 11, so it is a triangle."], "explain": "L² is bigger than the others' squares added: obtuse."}}
  - {"check": {"type": "question", "q": "Review: which test case is a boundary for \"S > L\"?", "options": ["3, 4, 7", "3, 4, 5", "5, 5, 5", "6, 8, 10"], "answer": 0, "feedback": [null, "Far from the edge.", "Far from the edge.", "Far from the edge."], "explain": "3, 4, 7 has S equal to L."}}
```

### L squared difference

### Which kind

### Review

## Make: the machine's final check

```step
stage: "make"
insight: "Returning to the machine: run the finished algorithm and report the result, on paper."
check: {"type": "reasoning", "paper": true, "q": "Run the refined algorithm on 6, 8 and 11. First check it is a triangle, then compare L² with the sum of the other two squares. What is L² minus that sum? (The lengths are made up for the task.)", "steps": [["$S = 6 + 8 = 14 > 11$", "triangle"], ["$L^2 = 121$, $6^2 + 8^2 = 100$", "squares"], ["$121 - 100 = 21$ so obtuse", "positive means obtuse"]], "answer": "21", "answerLabel": "L² minus the sum", "tolerance": 0, "feedback": [["100", "That is the sum of the squares of the other two. Subtract it from L²."], ["-21", "Subtract the other way round."]], "criteria": ["I checked it is a triangle first.", "I squared the longest side.", "I said obtuse because the difference is positive."], "explain": "21. A positive difference means the largest angle is obtuse. The algorithm has two checks, the triangle check and the angle type, each tested on cases."}
```

Write the final algorithm as numbered steps and mark each decision.

**Also used in**

- **Computer graphics.** Meshes are checked for valid triangles before they are drawn.
- **Surveying.** A land surveyor tests a triangle of measurements for errors in the same way.
- **Next unit.** Year 10: proof and then Pythagoras and trigonometry in practice.
