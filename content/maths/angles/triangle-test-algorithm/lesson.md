---
order: 30
unit: algorithms9
node: AC9M9SP03 n1
uses: ["AC9M7SP04 n2"]
title: "Writing a geometry rule as an algorithm"
summary: "An algorithm is a list of steps with decisions. Write the rule for whether three strips can make a triangle as steps, and mark which are computations and which are decisions."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A cutting machine is given three strip lengths for a triangular frame. How does it know the frame will close?"
---
A cutting machine makes triangular frames from three strips. Before it cuts, a program should check that the three lengths can really make a triangle. The rule from geometry is that the two shorter strips together must be longer than the longest one. An **algorithm** turns that rule into exact steps: some steps **compute** a number, and some **decide** between two paths. Have a guess whether 3, 4 and 8 can make a triangle, and we'll come back to the machine at the end.

## Predict: 3, 4 and 8

```step
stage: "predict"
insight: "Guessing whether 3, 4 and 8 close shows whether students compare the two short strips with the long one or look only at the numbers."
check: {"type": "predict", "q": "Strips of length 3, 4 and 8 (made up for the task). Can they make a triangle?", "options": ["No: 3 + 4 = 7 is less than 8", "Yes: any three strips can", "Yes: 8 is less than 3 + 4 + 8"], "actual": "No. The two short strips, 3 + 4 = 7, cannot reach across the 8 strip, so the ends do not meet."}
```

## Run: the sum of the short strips

```step
stage: "run"
insight: "The rule needs one number from the two shorter strips; computing it is a step of the algorithm."
check: {"type": "number", "q": "The strips are 5, 7 and 13. What is the sum of the two shorter strips?", "answer": 12, "tolerance": 0, "explain": "5 + 7 = 12."}
```

## Investigate: computations and decisions

```step
stage: "investigate"
insight: "An algorithm has computation steps (find a number) and decision steps (choose a path), and every step must be exact enough for a machine; a rule that checks only one pair is not the whole algorithm."
tasks:
  - {"check": {"type": "question", "q": "Here is the algorithm:\n1. Read the three lengths.\n2. Find the longest, L.\n3. Add the other two, S.\n4. If S is greater than L, say \"triangle\"; otherwise say \"no triangle\".\nWhich step is a decision?", "options": ["Step 4", "Step 2", "Step 3", "Step 1"], "answer": 0, "feedback": [null, "Step 2 finds a number.", "Step 3 finds a number.", "Step 1 reads the input."], "explain": "Step 4 chooses between two outputs. Steps 2 and 3 compute a value."}, "smaller": {"check": {"type": "question", "q": "Does \"Add the other two, S\" compute a number or choose a path?", "options": ["Computes a number", "Chooses a path"], "answer": 0, "feedback": [null, "It finds a number; it does not branch."], "explain": "It computes a number."}}}
  - {"check": {"type": "number", "q": "Run the algorithm on 5, 6 and 10. What is S, the sum of the two shorter strips?", "answer": 11, "tolerance": 0, "explain": "L = 10, so S = 5 + 6 = 11."}}
  - {"check": {"type": "bug", "code": "working.txt#lena", "text": "Lena writes her own algorithm. Test it on 8, 2 and 3. Click the step that makes it fail.", "answer": 2, "fault": "logic", "misconception": "check-one-pair", "explain": "Step 2: it only adds a and b. For 8, 2 and 3 that gives 10, which is bigger than 3, so it says triangle, but 2 + 3 = 5 is less than 8. The sum must be the two SHORTER strips, compared with the longest."}}
```

### Which step decides

```worked
\text{Read } a, b, c :: Input.
L = \max(a, b, c),\ S = a + b + c - L :: Two computation steps.
S > L ? \text{ triangle } : \text{ no triangle} :: One decision with two branches.
```

### Run it

### Find the mistake

## Modify: change the algorithm

```step
stage: "modify"
insight: "Adding a step or a second decision to the same algorithm, and writing it as a flowchart."
tasks:
  - {"check": {"type": "question", "q": "You want the machine to also say \"equilateral\" when all three lengths are equal. Where is the best place for that decision?", "options": ["After step 4 says triangle: only triangles can be equilateral", "Before step 1", "Instead of step 3", "It does not need a decision"], "answer": 0, "feedback": [null, "There are no lengths to compare before they are read.", "Step 3 is needed for the triangle check.", "Comparing three lengths is a decision."], "explain": "First decide it is a triangle, then ask whether all three are equal."}}
  - {"check": {"type": "question", "q": "In a flowchart, which shape holds a decision?", "options": ["A diamond", "A rectangle", "An oval", "A circle"], "answer": 0, "feedback": [null, "A rectangle holds an action or computation.", "An oval marks start or end.", "Circles join lines."], "explain": "A diamond, with one arrow for yes and one for no."}}
  - {"check": {"type": "number", "q": "The strips are 4, 4 and 9. What is S minus L? (A negative means it cannot close.)", "answer": -1, "tolerance": 0, "explain": "S = 4 + 4 = 8 and L = 9, so 8 − 9 = −1."}}
```

### An extra decision

### Flowchart shapes

### S minus L

## Practise: steps and results

```step
stage: "practise"
insight: "Running the algorithm on cases and naming its parts, then a review of the Year 9 enlargement."
tasks:
  - {"check": {"type": "number", "q": "Strips 6, 9 and 14. By how much does S exceed L? (Negative if it falls short.)", "answer": 1, "tolerance": 0, "explain": "S = 6 + 9 = 15 and L = 14, so 15 − 14 = 1."}}
  - {"check": {"type": "question", "q": "Strips 6, 9 and 14: what does the algorithm say?", "options": ["Triangle", "No triangle"], "answer": 0, "feedback": [null, "S = 15 is more than L = 14, so it closes."], "explain": "S > L, so it says triangle."}}
  - {"check": {"type": "number", "q": "Review: a shape is enlarged by scale factor 3. How many times bigger is its area?", "answer": 9, "tolerance": 0, "explain": "3² = 9."}}
```

### S minus L

### The answer

### Review

## Make: check the machine's strips

```step
stage: "make"
insight: "Returning to the machine: use the algorithm on a real order, on paper."
check: {"type": "reasoning", "paper": true, "q": "The machine is asked for strips of 5, 7 and 13. Follow the algorithm and find how many units too short the two shorter strips are (L − S). (The lengths are made up for the task.)", "steps": [["Longest: $L = 13$", "step 2"], ["Sum of the others: $S = 5 + 7 = 12$", "step 3"], ["$L - S = 13 - 12 = 1$", "S is less than L, so no triangle"]], "answer": "1", "answerLabel": "Units too short", "tolerance": 0, "feedback": [["12", "That is S. Find how far it falls short of L."], ["-1", "Subtract the other way: L minus S."]], "criteria": ["I found the longest strip.", "I added the other two.", "I compared them and said what the machine does."], "explain": "The machine says no triangle: the short strips fall 1 unit short, so the ends would not meet."}
```

Write the algorithm in your own words as numbered steps and mark the decision.

**Also used in**

- **Computer graphics.** A program checks a mesh triangle is valid before it draws it.
- **Building and design.** Frames, trusses and kites use triangles because the sides must satisfy this rule.
- **Next lesson.** Testing the algorithm with awkward cases to find where it fails.
