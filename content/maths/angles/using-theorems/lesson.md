---
order: 29
unit: proof10
node: AC9M10SP01 n3
uses: [AC9M8M06 n3, AC9M8SP02 n1, AC9M7SP02 n2, AC9M10SP01 n2]
assumes: [AC9M10SP01 n2, AC9M8M06 n3]
connection: set-out-3-4-5
title: Using theorems
summary: "A theorem is a result already proved. To use one, match the facts you have to the facts it needs, and check its direction. Pythagoras' converse checks a square corner, and a parallelogram with equal diagonals is a rectangle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A builder has a tape measure and string, and no set square. How can she tell whether the corner of a new slab is square?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8422
  url: http://127.0.0.1:8422/index.html
  readySelector: "#gclass"
  layout: full
explainPicture: { ref: theorems.yml#explain-pic, caption: "Sides 3 and 4 at the corner, and the string across is 5: 3² + 4² = 5², so the corner is a right angle." }
explainClip:
  query: { code: "@theorems.yml#explain", fresh: 1, id: explain }
  caption: "Using Pythagoras' converse"
  say: "If a squared plus b squared equals c squared, the corner is square."
  clip:
    - caption: { text: "Sides 3 and 4. The string across is 5.", say: "Sides three and four, and the string across is five." }
    - wait: 1200
    - caption: { text: "3² + 4² = 9 + 16 = 25 = 5². So the corner is a right angle.", say: "Nine plus sixteen is twenty-five, which is five squared. So the corner is square." }
    - expect: { selector: "#gclass", contains: "ight" }
    - wait: 1200
---
On a building site, a slab corner needs to be square. The builder pegs 4 m along one edge and 3 m along the other, then stretches a string between the two pegs and measures it.

<figure class="situation" role="img" aria-label="The corner of a slab. A horizontal edge is marked 4 metres with a peg at its end, and a vertical edge is marked 3 metres with a peg at its end. A string across between the pegs is marked 5.2 metres. The angle at the corner has a question mark."><svg viewBox="0 0 320 210" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M40 180H250V30" stroke-width="1.6"/><path d="M250 30L40 180" stroke-dasharray="6 4" stroke-width="1.2"/><circle cx="250" cy="180" r="3" fill="currentColor"/><circle cx="250" cy="30" r="4" fill="#1D9E75" stroke="#0F6E56"/><circle cx="40" cy="180" r="4" fill="#1D9E75" stroke="#0F6E56"/><text x="140" y="198" text-anchor="middle" fill="currentColor" stroke="none">4 m</text><text x="262" y="110" fill="currentColor" stroke="none">3 m</text><text x="116" y="92" fill="currentColor" stroke="none">5.2 m</text><text x="214" y="168" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

A **theorem** is a result that has already been proved. You don't prove it again. You check that the facts you have match the facts it needs, and use it. Here are three you can use today.

| Theorem | What it needs | What it gives |
|---|---|---|
| Pythagoras' converse | two sides of a triangle and the third side, with $a^2 + b^2 = c^2$ | the angle opposite the longest side is $90^\circ$ |
| The rectangle test | a **parallelogram** whose diagonals are equal | it is a rectangle |
| The parallelogram test | both pairs of opposite sides equal | it is a parallelogram, so its opposite sides are parallel |

## Predict: the string

```step
stage: predict
insight: "Committing to the corner when the string is longer than the 3-4-5 triangle's 5 shows who knows the converse can tell which way the angle is off, not only whether it is square."
check:
  type: predict
  q: "The pegs are 4 m and 3 m from the corner, and the string between them is 5.2 m. Compared with a right angle, the corner is..."
  options:
    - "wider than $90^\\circ$"
    - "exactly $90^\\circ$"
    - "narrower than $90^\\circ$"
  actual: "Wider than 90°. A square corner would make the string 5 m, because 3² + 4² = 25. A longer string means the corner has opened out: it is about 95°."
```

Think about what 5.0 m would mean, then what 5.2 m does.

## Run: build the 3-4-5

```step
stage: run
insight: "Making a triangle with sides 3 and 4 and a right angle between them on the dot grid shows the third side is 5, so the 3-4-5 triangle is right-angled."
try: { playground: board, starter: "theorems.yml#run", height: 600 }
check: { type: board, text: "Drag the corners to make a triangle with a side of 3 across from A, and a side of 4 up from A, with a right angle at A. Does the third side look like 5? Was your prediction right?", when: "r = 2 and x(B) - x(A) = 3 and y(C) - y(A) = 4", explain: "With sides 3 and 4 at a right angle, the third side is √(9 + 16) = 5. Builders use the same triangle the other way: if the sides are 3, 4 and 5, the angle is a right angle." }
```

The dots are 1 unit apart. Count 3 across and 4 up, then count the slope across: it is 5 units long.

## Investigate: which theorem fits?

```step
stage: investigate
insight: "Choose the theorem by matching what you have to what it needs. Pythagoras' converse compares a² + b² with c², equal diagonals are only enough in a parallelogram (Theo's mistake), and equal opposite sides give a parallelogram, not a rectangle."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A slab corner has sides 6.0 m and 8.0 m, and the diagonal between the pegs is 10.1 m. Is the corner square? Use a theorem, with a reason for each line. Then type the value of $a^2 + b^2$."
      steps:
        - ["$6^2 + 8^2 = 36 + 64 = 100$", "the two sides at the corner, squared and added"]
        - ["$10.1^2 = 102.01$", "the diagonal, squared"]
        - ["$100 \\ne 102.01$, so the corner is not square (it is a little over $90^\\circ$)", "if the corner were $90^\\circ$, Pythagoras says the two numbers would be equal"]
      picks:
        - step: 3
          q: "Why does \"not equal\" mean the corner is not square?"
          options: ["A square corner would make $a^2 + b^2 = c^2$; they are not equal", "6 + 8 = 14, which is not 10.1", "The corner must be square if the sides are whole numbers"]
          answer: 0
          feedback: [null, "Compare the squares, not the sides: 6 + 8 is not what Pythagoras compares.", "The sides being whole numbers has nothing to do with it."]
      answer: "100"
      answerLabel: "a² + b²"
      feedback:
        - ["14", "Square each side first: 6² + 8² = 36 + 64."]
      criteria:
        - "I squared the two sides at the corner and added them."
        - "I squared the diagonal and compared the two numbers."
        - "My last line says what the comparison means for the corner."
      explain: "6² + 8² = 100 and 10.1² = 102.01. They are not equal, so the corner is not square. The diagonal is a little too long, so the corner is a little wider than 90°."
  - check:
      type: bug
      code: "working.txt#theo"
      text: "Theo checks a market stall's frame. Click the line where his reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: equal-diagonals-enough
      explain: "Line 4: the theorem is the other way round. A rectangle's diagonals are equal, but equal diagonals do not make a rectangle. The frame must also be a parallelogram. An isosceles trapezium has equal diagonals and no right angles."
  - check:
      type: question
      q: "A cantilever toolbox tray hangs on four arms. The top and bottom arms are the same length, and the two side arms are the same length. Which theorem shows the tray stays level (the top and bottom arms stay parallel)?"
      options: ["The parallelogram test: both pairs of opposite sides equal, so it is a parallelogram", "The rectangle test: equal diagonals", "Pythagoras' converse", "None: it only works if the arms are at right angles"]
      answer: 0
      feedback: [null, "No diagonals are measured, and the arms swing, so the shape is not a rectangle.", "There is no triangle with a longest side to compare.", "The arms swing through all kinds of angles, and the tray stays level, so right angles are not needed."]
      explain: "Both pairs of opposite sides are equal, so the shape is a parallelogram at every position. Opposite sides of a parallelogram are parallel, so the tray stays level."
  - check:
      type: question
      q: "Opposite sides of a shelf frame measure 1.2 m and 1.2 m, and 0.8 m and 0.8 m. What can you say about it?"
      options: ["It is a parallelogram, but it could still lean over to one side", "It is a rectangle", "It is a square", "You can say nothing without a protractor"]
      answer: 0
      feedback: [null, "Equal opposite sides give a parallelogram. A rectangle needs a right angle too, or equal diagonals.", "A square also needs equal neighbouring sides.", "The parallelogram test needs only the lengths."]
      explain: "The parallelogram test gives a parallelogram. To be sure it is a rectangle, measure both diagonals: if they are equal, the rectangle test applies."
```

### Is the corner square?

Here is how to use Pythagoras' converse on a gate frame, 0.9 m by 1.2 m, with a diagonal of 1.5 m.

```worked
0.9^2 + 1.2^2 = 0.81 + 1.44 = 2.25 :: The two sides at the corner, squared and added.
1.5^2 = 2.25 :: The diagonal, squared.
0.9^2 + 1.2^2 = 1.5^2 :: The two numbers are equal.
\text{The corner is a right angle.} :: Pythagoras' converse: if $a^2 + b^2 = c^2$, the angle opposite $c$ is $90^\circ$.
```

Now try one on paper, with the example beside you: the slab with sides 6.0 m and 8.0 m and a diagonal of 10.1 m. Write each line with its reason. Then type your answer.

### Find the mistake

Read Theo's working. What does a rectangle's diagonal fact say, and which way round did he use it?

### The tray

Pick the theorem by what you know about the arms.

### Sides only

Equal opposite sides are a parallelogram. What else does a rectangle need?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: bigger sides in the same ratio, a different triple, a parallelogram turned into a rectangle by its diagonals, and the edge case of a shape with equal diagonals that is not a parallelogram."
try: { playground: board, starter: "theorems.yml#frame", height: 640 }
tasks:
  - check: { type: number, q: "A shed base has sides 9 m and 12 m. How long must the diagonal be, in metres, for the corner to be square?", answer: 15, explain: "9² + 12² = 81 + 144 = 225 = 15². (It is the 3-4-5 triangle made 3 times bigger.)" }
  - check:
      type: question
      q: "Edge case: a corner has sides 5 m and 12 m, and the diagonal is 13 m. Is it square?"
      options: ["Yes: 5² + 12² = 169 = 13²", "No: it is not 3-4-5", "No: 5 + 12 = 17, not 13", "Can't tell without a protractor"]
      answer: 0
      feedback: [null, "3-4-5 is only one triangle that works. The test is a² + b² = c².", "Pythagoras compares the squares, not the sides.", "The converse tells you without a protractor."]
      explain: "25 + 144 = 169 = 13², so the corner is square. 5-12-13 works just like 3-4-5."
  - hint: ["Start with a parallelogram that leans over. Move the corners so the diagonals become equal.", "Watch l (equal diagonals) and the shape's name."]
    check: { type: board, text: "Make a parallelogram whose diagonals are equal. What does the panel call it?", when: "p = 2 and l = 1", explain: "A parallelogram with equal diagonals is a rectangle. That is the rectangle test." }
  - check:
      type: question
      q: "Edge case: an isosceles trapezium has equal diagonals. Is it a rectangle?"
      options: ["No: it is not a parallelogram, so the rectangle test does not apply", "Yes: the diagonals are equal", "Yes: a trapezium has parallel sides", "It is a rectangle if its parallel sides are long enough"]
      answer: 0
      feedback: [null, "Equal diagonals are only enough when the shape is a parallelogram first.", "A trapezium has only one pair of parallel sides. A rectangle has two.", "Length has nothing to do with it."]
      explain: "The rectangle test needs a parallelogram. An isosceles trapezium has equal diagonals but only one pair of parallel sides and no right angles."
```

### Bigger sides

### Another triple

### Equal diagonals

### Not a parallelogram

## Practise: choose and use

```step
stage: practise
insight: "Matching the facts to the right theorem, using Pythagoras' converse on another triple, and a review of Pythagoras' theorem for a hypotenuse."
tasks:
  - check:
      type: question
      q: "A corner has sides 6 m and 8 m, and the diagonal is 9.5 m. Compared with a right angle, the corner is..."
      options: ["narrower than $90^\\circ$", "exactly $90^\\circ$", "wider than $90^\\circ$"]
      answer: 0
      feedback: [null, "A square corner would need 10 m.", "A longer diagonal means a wider corner. This one is shorter than 10."]
      explain: "6² + 8² = 100, but 9.5² = 90.25. The diagonal is shorter than a square corner needs, so the corner is narrower than 90°."
  - check:
      type: question
      q: "You know a gate frame is a parallelogram. Its two diagonals measure the same. Which theorem lets you say it is a rectangle?"
      options: ["The rectangle test", "Pythagoras' converse", "The parallelogram test", "None of them"]
      answer: 0
      feedback: [null, "No side lengths are compared with a² + b² = c².", "You already know it is a parallelogram.", "The rectangle test needs exactly these facts."]
      explain: "A parallelogram with equal diagonals is a rectangle."
  - check: { type: number, q: "A corner has sides 8 m and 15 m. How long must the diagonal be, in metres, for the corner to be square?", answer: 17, explain: "8² + 15² = 64 + 225 = 289 = 17²." }
  - check: { type: number, q: "Review: a right-angled triangle has shorter sides 7 cm and 24 cm. How long is the hypotenuse, in cm?", answer: 25, explain: "7² + 24² = 49 + 576 = 625 = 25²." }
```

### Narrower or wider

### Which theorem

### Another triple

### Review: the hypotenuse

## Make: back to the slab

```step
stage: make
insight: "Coming back to the opening with new numbers, then choosing the theorem for a new problem and using it in a proof with a reason for each line."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A shed base has sides 2.4 m and 3.2 m, and the diagonal between the pegs is 4.0 m. Is the corner square? Use a theorem, with a reason for each line. Then type the value of $a^2 + b^2$."
      steps:
        - ["$2.4^2 + 3.2^2 = 5.76 + 10.24 = 16$", "the two sides at the corner, squared and added"]
        - ["$4.0^2 = 16$", "the diagonal, squared"]
        - ["The two are equal, so the corner is a right angle", "Pythagoras' converse: $a^2 + b^2 = c^2$ means the angle opposite $c$ is $90^\\circ$"]
      picks:
        - step: 3
          q: "What lets you say the corner is square?"
          options: ["Pythagoras' converse: the squares match", "The sides are less than 5 m", "The diagonal is a whole number"]
          answer: 0
          feedback: [null, "The size of the sides does not decide it.", "A whole number diagonal can still be the wrong length for a square corner."]
      answer: "16"
      answerLabel: "a² + b²"
      criteria:
        - "I squared both sides at the corner and added them."
        - "I squared the diagonal and compared the two."
        - "I named the theorem and said what it gave."
      explain: "2.4² + 3.2² = 16 and 4.0² = 16, so the corner is square. (It is the 3-4-5 triangle scaled by 0.8.)"
  - hint: ["Triangles ABC and DCB share the side BC.", "Equal diagonals give a third pair of equal sides.", "Co-interior angles add to 180°."]
    check:
      type: reasoning
      paper: true
      q: "A stall frame ABCD is a parallelogram with equal diagonals, AC = BD. Prove that angle $ABC = 90^\\circ$, so it is a rectangle. Write each line with its reason, then pick the reason for the congruence."
      steps:
        - ["$AB = DC$ and $AB \\parallel DC$", "opposite sides of a parallelogram (given)"]
        - ["$\\triangle ABC \\equiv \\triangle DCB$", "SSS: $AB = DC$, $BC$ is shared, $AC = DB$"]
        - ["$\\angle ABC = \\angle DCB$", "matching angles of congruent triangles"]
        - ["$\\angle ABC + \\angle DCB = 180^\\circ$", "co-interior angles, $AB \\parallel DC$"]
        - ["$\\angle ABC = 90^\\circ$", "two equal angles that add to $180^\\circ$"]
      picks:
        - step: 2
          q: "Which test shows triangles ABC and DCB are congruent?"
          options: ["SSS: AB = DC, BC shared, AC = DB", "SAS: two sides and the angle between", "RHS: a right angle is known", "AAS: two angles are known"]
          answer: 0
          feedback: [null, "No angle is known to be equal yet.", "No right angle is known yet: that is what we are proving.", "No angles are known yet."]
      criteria:
        - "I chose the two triangles that share a side."
        - "I named the congruence test and its three pairs."
        - "My last line has an angle of 90° and each line has a reason."
      explain: "SSS gives △ABC ≡ △DCB, so ∠ABC = ∠DCB. They are co-interior angles between the parallel sides AB and DC, so they add to 180°, and each is 90°. A parallelogram with a right angle is a rectangle."
```

### The shed base

Back to the slab. Work this out on paper first, with a reason for each line. Then type your answer.

### The stall frame

The rectangle test, proved. Write it on paper, then pick the reason for the congruence.

**Also used in**

- **Building and woodwork.** A frame is checked by measuring both diagonals, after the sides are known to make a parallelogram.
- **Parallelogram linkages.** A cantilever toolbox tray stays level because its arms form a parallelogram at every position.
- **Next.** The proofs in this unit use the same habit in senior mathematics: say what is given, name the theorem, and give a reason for each line.
