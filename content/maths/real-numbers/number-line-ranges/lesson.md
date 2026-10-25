---
order: 12
unit: reals9
node: AC9M9N01 n3
uses: [AC9M9N01 n1, AC9M9N01 n2]
assumes: [AC9M8N01 n1, AC9M8N01 n2]
connection: part-tolerance
title: Ranges on the line
summary: "A tolerance or a safe range is a stretch of the number line. ≤ and ≥ include the end (a closed circle); < and > leave it out (an open circle)."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A hole has to be 20 mm, give or take a tiny bit. Where's the line between a part that fits and one that doesn't?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8350
  url: http://127.0.0.1:8350/index.html
  readySelector: "#board"
  layout: full
---
Real numbers fill the whole number line, so a range is a stretch of it with two ends. The ends need care.

## Predict: does it pass?

```step
stage: predict
insight: "Committing to pass or fail for a hole at 20.04 mm shows who reads the tolerance as a single number and who sees the range."
check:
  type: predict
  q: "A bolt hole must be 20 mm, give or take 0.05 mm. A hole is measured at 20.04 mm. Does it pass?"
  options:
    - "Yes: it's inside the range"
    - "No: it isn't 20 mm"
    - "No: it's more than 20 mm"
    - "You can't tell without a bigger ruler"
  actual: "Yes. The range is from 20 − 0.05 = 19.95 mm to 20 + 0.05 = 20.05 mm. 20.04 is between them, so it passes."
```

<figure class="situation" role="img" aria-label="A metal plate with a round hole. The hole is labelled 20 millimetres, plus or minus 0.05. A measuring tool shows 20.04 millimetres."><svg viewBox="0 0 380 190" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="20" y="20" width="200" height="150" rx="6" fill="#888780" fill-opacity="0.25" stroke="#5F5E5A"/><circle cx="120" cy="95" r="45" fill="var(--bg, #fff)" stroke="currentColor" stroke-width="2"/><path d="M75 95 L165 95" stroke-width="1.2"/><text x="120" y="88" text-anchor="middle" fill="currentColor" stroke="none">20 mm</text><text x="240" y="70" fill="currentColor" stroke="none">must be 20 mm,</text><text x="240" y="90" fill="currentColor" stroke="none">give or take 0.05</text><text x="240" y="125" fill="currentColor" stroke="none">measured: 20.04 mm</text></svg></figure>

The drawing says 20 mm, give or take 0.05 mm. The measured hole is 20.04 mm. Does it pass?

## Run: mark the limits

```step
stage: run
insight: "Marking both limits on the line shows the passing range as a stretch with two ends, and the measured hole sits inside it."
try: { playground: board, starter: "line.yml#run", height: 560 }
check: { type: board, text: "Drag A to the smallest hole that passes (19.95) and B to the biggest (20.05). Is the measured hole between them? Was your prediction right?", when: "x(A) = 19.95 and x(B) = 20.05" }
```

The measured hole is the fixed point. Drag $A$ and $B$ to the two limits.

## Investigate: closed and open ends

```step
stage: investigate
insight: "A range with its end points included uses ≤ and ≥ (closed circles); leaving them out uses < and > (open circles). Ben's strict signs would fail a hole of exactly 20.05."
tasks:
  - check:
      type: question
      q: "Which inequality describes every hole that passes, from 19.95 mm to 20.05 mm, including both limits?"
      options: ["$19.95 \\le x \\le 20.05$", "$19.95 < x < 20.05$", "$x \\le 20.05$", "$x = 20$"]
      answer: 0
      feedback: [null, "That leaves out holes of exactly 19.95 and 20.05, which still pass.", "That lets in holes much too small.", "That means only exactly 20 mm."]
      explain: "≤ keeps the end points: a closed circle at each limit."
  - check:
      type: bug
      code: "working.txt#ben"
      text: "Ben writes the passing range. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: interval-ends-open
      explain: "Line 2: < leaves the ends out, but a hole of exactly 19.95 or 20.05 passes. It should be 19.95 ≤ x ≤ 20.05."
  - check:
      type: number
      q: "A shaft must be $12$ mm, give or take $0.02$ mm. What's the smallest length that passes?"
      answer: 11.98
      tolerance: 0.001
      explain: "12 − 0.02 = 11.98 mm."
```

### Both limits

Here's turning a tolerance into a range on the line.

```worked
20 \pm 0.05 :: The drawing: 20 mm, give or take 0.05.
20 - 0.05 = 19.95 :: The lower limit.
20 + 0.05 = 20.05 :: The upper limit.
19.95 \le x \le 20.05 :: Both ends count: closed circles.
20.04 \text{ is between } 19.95 \text{ and } 20.05 :: So it passes.
```

Now try one on paper: a shaft of 12 mm ± 0.02 mm. Write the range, then type the upper limit.

### Find the mistake

Read Ben's working. Which signs keep the end?

### How small?

## Modify: change the ends

```step
stage: modify
insight: "Changing one end at a time: a ray from one number, closed or open, then a range and the whole numbers in it."
try: { playground: board, starter: "line.yml#vary", height: 560 }
tasks:
  - hint: ["Drag P to 2.", "x ≥ 2 includes 2: a closed circle, pointing right."]
    check: { type: board, text: "Set the board to $x \\ge 2$: a closed circle at 2, with the line going right.", when: "x(P) = 2 and k = 1 and s = 1" }
  - hint: ["List them: 3, 4, …", "x < 8 leaves 8 out."]
    check: { type: number, q: "How many whole numbers satisfy $3 \\le x < 8$?", answer: 5, explain: "3, 4, 5, 6, 7: five. 8 is left out." }
    smaller:
      check: { type: "number", q: "Which is the biggest whole number with $x < 8$?", answer: 7, explain: "8 isn't allowed because the sign is <, so 7 is the biggest." }
  - hint: ["√2 is 1.4142…", "Is that between 1.41 and 1.42?"]
    check: { type: question, q: "Edge case: is $\\sqrt{2}$ in the range $1.41 \\le x \\le 1.42$?", options: ["Yes: √2 = 1.4142…", "No: √2 isn't a number you can place", "No: it's not equal to 1.41 or 1.42"], answer: 0, feedback: [null, "Every real number has a place on the line, even if it never ends.", "It doesn't have to equal an end: it just has to be between them."], explain: "1.41 ≤ 1.4142… ≤ 1.42." }
```

### A ray

### Whole numbers in a range

### An irrational in a range

## Practise: read and write ranges

```step
stage: practise
insight: "Writing and reading ranges with open and closed ends, mixed; the review keeps exact and rounded values separate."
tasks:
  - check:
      type: number
      q: "A part must be $50$ mm ± $0.1$ mm. What's the upper limit?"
      answer: 50.1
      tolerance: 0.001
      explain: "50 + 0.1 = 50.1 mm."
  - check:
      type: question
      q: "Which means 'at least 5, but less than 9'?"
      options: ["$5 \\le x < 9$", "$5 < x \\le 9$", "$5 \\le x \\le 9$", "$5 < x < 9$"]
      answer: 0
      feedback: [null, "That leaves out 5 but keeps 9.", "That keeps 9: it says 'less than 9'.", "That leaves out 5: it says 'at least 5'."]
      explain: "At least 5 includes 5 (≤). Less than 9 leaves out 9 (<)."
    smaller:
      check: { type: "question", q: "'At least 5' includes 5. Which sign keeps the end?", options: ["≤", "<"], answer: 0, explain: "≤ and ≥ keep the end point." }
  - check:
      type: number
      q: "Three holes are measured: $19.94$, $20.03$ and $20.05$ mm. How many pass the range $19.95 \\le x \\le 20.05$?"
      answer: 2
      explain: "19.94 is below 19.95: fails. 20.03 and 20.05 pass."
  - check:
      type: question
      q: "Review: which is exact?"
      options: ["$\\sqrt{3}$", "$1.73$", "$1.732$"]
      answer: 0
      feedback: [null, "1.73 is rounded.", "1.732 is rounded."]
      explain: "√3 is exact; each decimal is a rounded version."
```

### Tolerance

### Which signs

### How many pass

### Review

Exact or rounded, from the last lesson.

## Make: back to the bolt hole

```step
stage: make
insight: "Coming back to the opening: the range, the measurement and the decision, with the ends handled correctly."
tasks:
  - hint: ["Lower and upper limits first.", "Then check each measurement against both ends."]
    check:
      type: reasoning
      paper: true
      q: "The drawing says 20 mm ± 0.05 mm. Four holes measure 19.95, 20.00, 20.06 and 19.99 mm. How many pass?"
      steps:
        - ["$19.95 \\le x \\le 20.05$", "lower limit 19.95, upper limit 20.05, both included"]
        - ["19.95 ✓, 20.00 ✓, 19.99 ✓", "inside the range, 19.95 sits on the lower end"]
        - ["20.06 ✗", "bigger than 20.05"]
      answer: "3"
      answerLabel: "Holes that pass"
      feedback:
        - ["2", "19.95 is on the end and the end counts: ≤."]
        - ["4", "20.06 is more than 20.05: it fails."]
      criteria:
        - "I wrote both limits before checking any hole."
        - "I counted the hole on the end as a pass."
        - "I checked each hole against both ends."
      explain: "19.95, 20.00 and 19.99 pass; 20.06 is too big."
  - check:
      type: question
      q: "A sign says 'height under 4.0 m'. Does a truck of exactly 4.0 m fit?"
      options: ["No: under 4.0 leaves out 4.0", "Yes: 4.0 is the limit", "Only if it's a small truck"]
      answer: 0
      feedback: [null, "'Under' means less than, which leaves out the end.", "The size doesn't matter: the height is exactly 4.0."]
      explain: "x < 4.0: an open circle at 4.0."
```

### Which pass?

Back to the bolt hole. Work it out on paper first, then type your answer.

### An open end

The hole sizes and the drawing here are made up for the task.

**Also used in**

- **Making things.** Every machined part has a tolerance range on its drawing.
- **Next lesson.** Using exact and rounded real numbers in formulas, including π.
