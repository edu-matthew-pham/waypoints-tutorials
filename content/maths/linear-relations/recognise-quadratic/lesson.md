---
order: 18
unit: quad9
node: AC9M9A04 n1
uses: [AC9M7A05 n3]
assumes: [AC9M7A05 n3]
connection: handshakes
title: Recognising a quadratic
summary: "A table is quadratic when its second differences are constant: the first differences change, but by the same amount each time."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Everyone in a group shakes hands with everyone else once. How many handshakes for 6 people? Does the count go up at a steady rate?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8365
  url: http://127.0.0.1:8365/index.html
  readySelector: "#board"
  layout: full
---
Some patterns grow at a steady rate, and those make straight lines. Others grow faster each time. One kind of speeding-up pattern is called quadratic.

## Predict: more people, more handshakes

```step
stage: predict
insight: "Committing to the next number in a handshake count shows who keeps adding the same amount and who spots that each step adds more."
check:
  type: predict
  q: "In a group, everyone shakes hands with everyone else once. 2 people make 1 handshake, 3 make 3, 4 make 6 and 5 make 10. How many handshakes for 6 people?"
  options:
    - "15"
    - "13"
    - "14"
    - "12"
  actual: "15. The count goes up by 2, then 3, then 4. The next step goes up by 5, so 10 + 5 = 15. A new person shakes hands with everyone already there, so each person adds one more handshake than the last."
```

<figure class="situation" role="img" aria-label="Groups of 2, 3, 4 and 5 dots with lines joining every pair. The groups show 1, 3, 6 and 10 lines."><svg viewBox="0 0 400 110" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g transform="translate(10,10)"><circle cx="15" cy="45" r="4" fill="currentColor"/><circle cx="65" cy="45" r="4" fill="currentColor"/><path d="M15 45 L65 45"/><text x="25" y="95" fill="currentColor" stroke="none">2 people</text></g><g transform="translate(110,10)"><circle cx="40" cy="15" r="4" fill="currentColor"/><circle cx="15" cy="65" r="4" fill="currentColor"/><circle cx="65" cy="65" r="4" fill="currentColor"/><path d="M40 15 L15 65 L65 65 Z"/><text x="20" y="95" fill="currentColor" stroke="none">3 people</text></g><g transform="translate(210,10)"><circle cx="15" cy="15" r="4" fill="currentColor"/><circle cx="65" cy="15" r="4" fill="currentColor"/><circle cx="15" cy="65" r="4" fill="currentColor"/><circle cx="65" cy="65" r="4" fill="currentColor"/><path d="M15 15 L65 15 L65 65 L15 65 Z M15 15 L65 65 M65 15 L15 65"/><text x="20" y="95" fill="currentColor" stroke="none">4 people</text></g><g transform="translate(310,10)"><text x="10" y="50" fill="currentColor" stroke="none" font-size="22">5 people: ?</text></g></svg></figure>

The count goes 1, 3, 6, 10. What comes next?

## Run: read the handshakes

```step
stage: run
insight: "Sliding along the graph of handshake counts shows each count and how the climb gets steeper, which is how a quadratic differs from a straight line."
try: { playground: board, starter: "recognise.yml#run", height: 560 }
check: { type: board, text: "Slide the cursor to 6 people. How many handshakes? Was your prediction right?", when: "x(R) = 6" }
```

The dots show the handshakes for each group size. Slide the cursor along and watch how the count climbs.

## Investigate: differences

```step
stage: investigate
insight: "Subtract each value from the next to get the first differences. If those change by the same amount each time, the second differences are constant and the table is quadratic."
tasks:
  - check:
      type: number
      q: "The handshake counts for 1, 2, 3, 4, 5 people are $0, 1, 3, 6, 10$. The first differences are $1, 2, 3, 4$. What is the second difference (the change in the first differences)?"
      answer: 1
      explain: "1, 2, 3, 4 goes up by 1 each time, so the second difference is 1."
    smaller:
      check: { type: "number", q: "From $1, 2, 3, 4$, how much does each number go up by?", answer: 1, explain: "2 − 1 = 1, 3 − 2 = 1 and 4 − 3 = 1." }
  - check:
      type: question
      q: "Which table of $y$ values (for $x = 1, 2, 3, 4$) is quadratic?"
      options: ["$3, 6, 11, 18$", "$3, 6, 9, 12$", "$3, 6, 12, 24$", "$3, 7, 11, 15$"]
      answer: 0
      feedback: [null, "The first differences are all 3: that's a straight line.", "The first differences are 3, 6, 12. They double, so the second differences (3, 6) aren't equal.", "The first differences are all 4: that's a straight line."]
      explain: "3, 6, 11, 18 has first differences 3, 5, 7 and constant second differences 2, 2."
  - check:
      type: question
      q: "Which equation gives a quadratic relationship?"
      options: ["$y = x^2 - 4$", "$y = 3x + 2$", "$y = \\dfrac{5}{x}$", "$y = 2x - x$"]
      answer: 0
      feedback: [null, "That's a straight line: x only to the power 1.", "x is on the bottom: that's a different kind of curve.", "2x − x is just x: a straight line."]
      explain: "A quadratic has $x^2$ as its highest power."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam looks at the table $y = 2, 5, 10, 17$ for $x = 1, 2, 3, 4$. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: quadratic-needs-equal-first-differences
      explain: "Line 3: unequal first differences don't rule out a quadratic. Equal first differences mean a straight line. A quadratic has equal second differences: 2, 2."
```

### Second differences

Here's testing a table.

```worked
y = 3, 6, 11, 18, 27 :: The table for x = 1, 2, 3, 4, 5.
\text{first differences: } 3, 5, 7, 9 :: Subtract each value from the next.
\text{second differences: } 2, 2, 2 :: Subtract again.
\text{constant, so the table is quadratic} :: The second differences are all equal.
```

Now try one on paper: $y = 0, 2, 8, 18, 32$ for $x = 0, 1, 2, 3, 4$. Work out the first differences, then type the second difference.

### Which table?

### Which equation?

### Find the mistake

Read Sam's working. Which line draws the wrong conclusion?

## Modify: change the numbers

```step
stage: modify
insight: "Changing a changes the second difference: for y = ax², it is 2a. And a = 0 is no quadratic at all."
try: { playground: board, starter: "recognise.yml#vary", height: 560 }
tasks:
  - hint: ["Try a = 2 first and read the table.", "The values for a = 3 are 0, 3, 12, 27, …"]
    check: { type: board, text: "Set $a$ so the table starts $0, 3, 12, 27$.", when: "a = 3" }
  - hint: ["For y = ax², the second difference is 2a.", "2a = 6."]
    check: { type: number, q: "A table has constant second differences of 6 and follows $y = ax^2$. What is $a$?", answer: 3, explain: "The second difference is 2a, so 2a = 6 and a = 3." }
  - hint: ["Set a = 0 on the board.", "Look at the table."]
    check: { type: question, q: "Edge case: $a = 0$ so $y = 0x^2$. Is it a quadratic?", options: ["No: every value is 0, so there's no curve", "Yes: it still has an x²", "Yes: it's a quadratic with a flat curve", "It depends on x"], answer: 0, feedback: [null, "0 times x² is 0, so the x² has gone.", "A quadratic needs a curve.", "The values are 0 for every x."], explain: "With a = 0, y is always 0: a flat line, not a quadratic. A quadratic needs a not 0." }
```

### Find a

### Second difference to a

### When a is 0

## Practise: quadratic or not?

```step
stage: practise
insight: "Differences on a table decide: equal first differences are linear, equal second differences are quadratic. Then you can extend the pattern."
tasks:
  - check:
      type: number
      q: "For $x = 0, 1, 2, 3, 4$ a table gives $y = 1, 2, 5, 10, 17$. What is the second difference?"
      answer: 2
      explain: "First differences 1, 3, 5, 7. Second differences 2, 2, 2."
  - check:
      type: question
      q: "A table gives $y = 4, 7, 10, 13$ for $x = 1, 2, 3, 4$. What kind of relationship is it?"
      options: ["Linear: the first differences are all 3", "Quadratic: it keeps going up", "Neither", "You can't tell from four values"]
      answer: 0
      feedback: [null, "Going up isn't enough: a quadratic has changing first differences.", "Equal first differences make a straight line.", "Four values are enough to see equal differences."]
      explain: "7 − 4 = 3, 10 − 7 = 3, 13 − 10 = 3: linear."
  - check:
      type: number
      q: "A quadratic table has $y = 3, 5, 9, 15$. The second differences are 2. What is the next $y$ value?"
      answer: 23
      explain: "First differences 2, 4, 6. The next is 8, so the next value is 15 + 8 = 23."
    smaller:
      check: { type: "number", q: "The first differences are $2, 4, 6$. What is the next first difference?", answer: 8, explain: "They go up by 2 each time." }
  - check:
      type: number
      q: "Review: what is the gradient of the line through $(1, 3)$ and $(3, 9)$?"
      answer: 3
      explain: "Rise 6, run 2: 6 ÷ 2 = 3."
```

### The second difference

### Linear or quadratic

### The next value

### Review

From the first unit: rise over run.

## Make: more handshakes

```step
stage: make
insight: "Returning to the handshakes: extend the pattern with differences, and check what the count means for a bigger group."
tasks:
  - hint: ["Write the differences: 1, 2, 3, 4, …", "Keep adding the next difference."]
    check:
      type: reasoning
      paper: true
      q: "The handshake counts for 2, 3, 4, 5 people are $1, 3, 6, 10$. Extend the table to find the count for 8 people."
      steps:
        - ["$\\text{first differences: } 2, 3, 4, 5, 6, 7$", "each new person adds one more handshake than the last"]
        - ["$10 + 5 = 15, 15 + 6 = 21, 21 + 7 = 28$", "keep adding the next difference"]
        - ["28 handshakes", "for 8 people"]
      answer: "28"
      answerLabel: "Handshakes for 8 people"
      tolerance: 0.001
      feedback:
        - ["24", "That adds 5 each time. The amount added goes up by 1 each time."]
        - ["21", "That's the count for 7 people. Add one more difference."]
      criteria:
        - "I wrote the first differences and saw them go up by 1."
        - "I carried the pattern on from 10 for each extra person."
        - "I counted people carefully: 8 people, not 8 handshakes."
      explain: "5, 6, 7 added to 10 gives 15, 21, 28. So 8 people make 28 handshakes."
  - check:
      type: number
      q: "How many handshakes for 10 people?"
      answer: 45
      explain: "28 + 8 = 36 for 9 people, and 36 + 9 = 45 for 10."
```

### Eight people

Back to the handshakes. Work it out on paper first, then type your answer.

### Ten people

The group sizes here are a pattern to work with, not a measurement.

**Also used in**

- **Networks.** If every computer in a network is linked directly to every other, the number of links grows the same way.
- **Sport.** A round-robin competition with $n$ teams needs the same number of matches.
- **Next lesson.** Drawing a quadratic: the curve, its highest point and where it crosses the axes.
