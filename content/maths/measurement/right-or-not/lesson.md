---
order: 11
unit: pythagoras
node: AC9M8M06 n3
uses: [AC9M7SP02 n1]   # acute, right and obtuse triangles
title: Right, acute or obtuse?
summary: "Pythagoras works backwards: square the two shorter sides and add, then compare with the longest side squared. Equal: right-angled. The longest square is bigger: obtuse. Smaller: acute."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Given only three lengths, can you tell whether a triangle has a right angle, without drawing it? Builders do exactly this when they mark out a square corner with a tape measure."
connection: set-out-3-4-5   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8286
  url: http://127.0.0.1:8286/index.html
  readySelector: "#sl-t"
  layout: full
explainPicture: { ref: tri.yml#explain-pic, caption: "Open the angle to 110° and the biggest square grows: $c^2 \\approx 33.2$, more than $9 + 16 = 25$. The triangle is obtuse." }
explainClip:
  query: { code: "@tri.yml#explain", fresh: 1, id: explain }
  caption: "Open the angle"
  say: "Only a right angle makes the squares balance."
  clip:
    - caption: { text: "At 90°: 9 + 16 = 25, exactly c².", say: "At ninety degrees, nine and sixteen make exactly twenty-five." }
    - wait: 1200
    - caption: { text: "Open the angle: c² grows past 25. Obtuse.", say: "Open the angle and the long side's square grows past twenty-five." }
    - click: Open the angle
    - click: Open the angle
    - expect: { selector: "#gsum", contains: "but c²" }
    - wait: 1000
    - caption: { text: "Close it below 90°: c² shrinks under 25. Acute.", say: "Close it below ninety and it shrinks: acute." }
    - click: Close the angle
    - click: Close the angle
    - click: Close the angle
    - click: Close the angle
    - expect: { selector: "#gsum", contains: "but c²" }
    - wait: 1200
---
Take the three sides of a triangle and call the **longest** one $c$.

## Predict: 4, 5 and 6

```step
stage: predict
insight: "Committing to a type for sides 4, 5, 6 shows whether they compare squares or guess from the shape of the numbers."
check:
  type: predict
  q: "A triangle has sides 4 cm, 5 cm and 6 cm. Is it right-angled, acute or obtuse?"
  options: ["Acute", "Right-angled", "Obtuse"]
  actual: "Acute. 4² + 5² = 16 + 25 = 41, and 6² = 36. The two squares are more than the longest one, so the biggest angle is less than 90°."
```

<figure class="situation" role="img" aria-label="A triangle with sides of 4 centimetres, 5 centimetres and 6 centimetres. The question asks whether it is right-angled, acute or obtuse."><svg viewBox="0 0 294.5 195" width="294" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><polygon points="30,160 210,160 97.5,61" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="52" y="112" text-anchor="end" fill="currentColor" stroke="none">4 cm</text><text x="160" y="104" text-anchor="start" fill="currentColor" stroke="none">5 cm</text><text x="120" y="180" text-anchor="middle" fill="currentColor" stroke="none">6 cm</text><text x="97" y="86" text-anchor="middle" fill="currentColor" stroke="none">?</text><text x="150" y="45" text-anchor="start" fill="currentColor" stroke="none">right, acute or obtuse?</text></svg></figure>

Compare $4^2 + 5^2$ with $6^2$.

## Run: when do the squares balance?

```step
stage: run
insight: "Opening and closing the angle between sides 3 and 4 shows that c² equals a² + b² only at 90°, and is bigger beyond it and smaller before it."
try: { playground: board, starter: "tri.yml#run", height: 640 }
check: { type: board, text: "The angle between a and b is 70°. Change it until the two smaller squares exactly make the biggest. What angle is that? Then compare with your prediction.", when: "r = 2", explain: "Only at 90°: 9 + 16 = 25. Under 90°, c² is less than 25; over 90°, more." }
```

**Open the angle** and **Close the angle** change the corner between a and b.

Here's what the board was showing.

Pythagoras' theorem only works for right-angled triangles, and that is what makes it a test. Compare the squares:

| If… | the angle opposite $c$ is… | the triangle is… |
|---|---|---|
| $a^2 + b^2 = c^2$ | 90° | right-angled |
| $a^2 + b^2 < c^2$ | more than 90° | obtuse |
| $a^2 + b^2 > c^2$ | less than 90° | acute |

Whole numbers that fit exactly, like 3, 4, 5, are called **Pythagorean triples**.

## Investigate: compare the squares

```step
stage: investigate
insight: "Compare a² + b² with the longest side squared; Ava uses a shorter side as c. Multiples of a triple are triples too."
tasks:
  - check:
      type: question
      q: "A triangle has sides 6 cm, 8 cm and 11 cm. Is it right-angled, acute or obtuse?"
      options: ["Obtuse", "Right-angled", "Acute"]
      answer: 0
      feedback: [null, "36 + 64 = 100, but 11² = 121.", "100 is less than 121, so the biggest angle is more than 90°."]
      explain: "6² + 8² = 100 is less than 11² = 121: the angle opposite 11 is more than 90°, obtuse."
  - check:
      type: bug
      code: "working.txt#ava"
      text: "Ava tests whether a triangle is right-angled. Click the line where her method goes wrong."
      answer: 2
      fault: logic
      misconception: c-not-longest
      explain: "Line 2: c must be the longest side, 13. Test 5² + 12² = 25 + 144 = 169 = 13²: it is right-angled."
  - check:
      type: question
      q: "3, 4, 5 is a Pythagorean triple. Which of these is also one?"
      options: ["6, 8, 10", "4, 5, 6", "3, 4, 6", "5, 6, 7"]
      answer: 0
      feedback: [null, "16 + 25 = 41, not 36.", "9 + 16 = 25, not 36.", "25 + 36 = 61, not 49."]
      explain: "6, 8, 10 is 3, 4, 5 doubled: 36 + 64 = 100 = 10²."
```

### The test

Here is the test, step by step.

```worked
c = 13 \text{ (the longest)} :: Choose the longest side as c.
5^2 + 12^2 = 25 + 144 = 169 :: Square the other two and add.
13^2 = 169 :: Square the longest.
169 = 169 \Rightarrow \text{right-angled} :: Equal: right-angled. Less: obtuse. More: acute.
```

Now try one: sides 6, 8 and 11.

### Find the mistake

Read Ava's working. Which side must be c?

### Triples

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: an acute triangle on the board, a triple to test, the smallest obtuse side, then the edge case of lengths that make no triangle at all."
try: { playground: board, starter: "tri.yml#acute", height: 640 }
tasks:
  - starter: "tri.yml#acute"
    hint: "Close the angle. Watch c² fall below 25."
    check: { type: board, text: "Close the angle until c² is less than 20.", when: "r = 1 and C < 20", explain: "At 75° or less, c² drops below 20: the triangle is acute." }
  - check:
      type: question
      q: "Is a triangle with sides 7, 24 and 25 right-angled?"
      options: ["Yes: 49 + 576 = 625 = 25²", "No: 7 + 24 is not 25", "No: 24² + 25² is not 7²"]
      answer: 0
      feedback: [null, "Compare the squares, not the sides.", "c must be the longest side, 25."]
      explain: "7² + 24² = 625 = 25²: right-angled."
  - check:
      type: answer
      q: "Two sides of a triangle are 5 and 12. What is the smallest whole-number longest side that makes it obtuse?"
      answer: "14"
      feedback:
        - ["13", "13 makes it right-angled exactly (169 = 169)."]
        - ["17", "Obtuse needs c² more than 169, and 14² = 196 already is."]
      explain: "5² + 12² = 169 = 13². Any longer side is obtuse; the next whole number is 14 (196 > 169)."
  - check:
      type: question
      q: "Edge case: what kind of triangle has sides 2 cm, 3 cm and 6 cm?"
      options: ["None: 2 + 3 is less than 6, so the sides cannot meet", "Obtuse", "Acute"]
      answer: 0
      feedback: [null, "Check first that the two short sides can reach across the long one.", "Check first that the two short sides can reach across the long one."]
      explain: "2 + 3 = 5 is less than 6: the short sides cannot meet, so there is no triangle to test."
```

### Acute on the board

Each task changes one thing.

### A triple?

### Just obtuse

### Not a triangle

## Practise: right, acute or obtuse

```step
stage: practise
insight: "Each type once and a review, mixed; testing with the wrong side as c is the planted slip."
tasks:
  - check:
      type: question
      q: "Sides 9, 12 and 15?"
      options: ["Right-angled", "Acute", "Obtuse"]
      answer: 0
      feedback: [null, "81 + 144 = 225 = 15².", "81 + 144 = 225 = 15²."]
      explain: "81 + 144 = 225 = 15²: right-angled (3, 4, 5 times 3)."
  - check:
      type: question
      q: "Sides 5, 6 and 7?"
      options: ["Acute", "Right-angled", "Obtuse"]
      answer: 0
      feedback: [null, "25 + 36 = 61, not 49.", "61 is more than 49."]
      explain: "25 + 36 = 61 is more than 7² = 49: acute."
  - check:
      type: question
      q: "Sides 3, 5 and 7?"
      options: ["Obtuse", "Acute", "Right-angled"]
      answer: 0
      feedback: [null, "9 + 25 = 34 is less than 49.", "34 is not 49."]
      explain: "9 + 25 = 34 is less than 7² = 49: obtuse."
  - check:
      type: answer
      q: "Review: hypotenuse 10 cm, one side 6 cm. The other side, in cm?"
      answer: "8"
      feedback:
        - ["11.66", "That adds the squares. Subtract."]
      explain: "100 − 36 = 64, √64 = 8 cm."
```

### Right

### Acute

### Obtuse

### Review: a side

## Make: a new triple

```step
stage: make
insight: "Searching for a Pythagorean triple that is not 3-4-5 or a multiple of it turns the test into a hunt for two squares that add to a square."
try: { playground: board, starter: "tri.yml#make", height: 640 }
hint: ["Try a = 5 and look along the b values.", "Or a = 8: which b makes a² + b² a perfect square?"]
check: { type: board, text: "Find a right-angled triangle with whole-number sides, hypotenuse under 20, that is not 3-4-5 or a multiple of it.", when: "(C - 169) * (C - 289) = 0", explain: "5, 12, 13 (25 + 144 = 169) or 8, 15, 17 (64 + 225 = 289)." }
```

Then: is the triple you found a multiple of another one?

## Make: is the corner square, on paper

```step
stage: make
insight: "A builder's check is the converse of Pythagoras: square the two strings, add, and compare with the diagonal's square. The size of the gap says which way the corner is out."
hint: ["Which length is c? It is the longest.", "Compare 1.5² + 2² with 2.55²."]
check:
  type: reasoning
  paper: true
  q: "A builder pegs out a corner of a slab. One string is 1.5 m long, the other is 2 m long, and the diagonal between their ends measures 2.55 m. On paper, test the corner. Is it a right angle, or is it more or less than 90°?"
  steps:
    - ["$c = 2.55$ m, the diagonal", "c is the longest side"]
    - ["$1.5^2 + 2^2 = 2.25 + 4 = 6.25$", "square the two shorter sides and add"]
    - ["$2.55^2 = 6.5025$, and $6.25 < 6.5025$", "compare with the longest side squared"]
    - ["The angle opposite the diagonal is more than 90°, so the corner is not square", "a² + b² less than c² means obtuse"]
  picks:
    - step: 1
      q: "Which length is c in the test?"
      options:
        - "The diagonal, 2.55 m, because it is the longest"
        - "The 2 m string, because it is the longer string"
        - "Any of them: it does not matter which one is c"
      answer: 0
      feedback: [null, "c is the longest side of the triangle, and the diagonal is longer than both strings.", "It matters: c is always the longest side, opposite the angle you are testing."]
    - step: 4
      q: "What does the test tell the builder?"
      options:
        - "The angle is more than 90°: the pegs are too far apart, so the corner is not square"
        - "The angle is less than 90°: the pegs are too close together"
        - "It is square: 2.55 m is near enough to 2.5 m"
      answer: 0
      feedback: [null, "A longer diagonal means the angle has opened wider, not closed.", "1.5, 2 and 2.5 would be exactly square (3-4-5 halved). A diagonal 5 cm too long leaves the corner a little over 90°, enough to show on a slab."]
  criteria:
    - "I chose the diagonal as c because it is the longest."
    - "I squared all three lengths before comparing."
    - "I said which way the corner is out, and what to do: bring the diagonal in to 2.5 m."
  explain: "1.5² + 2² = 6.25 but 2.55² = 6.5025, so the diagonal is too long and the angle is more than 90°. Move a peg until the diagonal reads 2.5 m, where 2.25 + 4 = 6.25 = 2.5²."
```

Do this one in your book, not on the screen. The measurements are made up for the task. Write the test with all three squares, then choose what it tells the builder.

**Also used in**

- **Builders.** A 3-4-5 triangle of string checks a corner is square. Bigger copies such as 6-8-10 or 9-12-15 are more accurate on a slab.
- **Frames and gardens.** If both diagonals of a four-sided frame are equal and opposite sides match, it is a rectangle.
