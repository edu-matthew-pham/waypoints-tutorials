---
order: 28
unit: proof10
node: AC9M10SP01 n2
uses: [AC9M8SP02 n1, AC9M7M04 n3, AC9M7M05 n3]
assumes: [AC9M10SP01 n1]
title: Writing a proof
summary: "A proof is a list of statements, each with a reason: a given fact, a rule you already know, or an earlier line. Writing one for opposite angles of a parallelogram shows the habit: no line without a reason."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Mia measured four parallelograms and says opposite angles are always equal. Ben asks, \"How do you know the fifth one won't break it?\" What could Mia say that Ben couldn't argue with?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8421
  url: http://127.0.0.1:8421/index.html
  readySelector: "#gclass"
  layout: full
explainPicture: { ref: proof.yml#explain-pic, caption: "A parallelogram ABCD. A + B = 180° and B + C = 180°, both co-interior angles, so A = C." }
explainClip:
  query: { code: "@proof.yml#explain", fresh: 1, id: explain }
  caption: "Each statement has a reason"
  say: "A proof gives a reason for every statement."
  clip:
    - caption: { text: "A + B = 180°: co-interior angles, AD parallel to BC.", say: "A and B add to one eighty. Co-interior angles." }
    - wait: 1200
    - caption: { text: "B + C = 180°: co-interior angles, AB parallel to DC.", say: "B and C add to one eighty too." }
    - wait: 1200
    - caption: { text: "So A = C. Every line has a reason.", say: "So A equals C. Every line has a reason." }
    - wait: 1200
---
A **proof** is a short list of statements. Each one comes with a reason: something given, a rule you already know, or a line you have already proved. If a line has no reason, a careful reader can say "so what?".

<figure class="situation" role="img" aria-label="A parallelogram ABCD with A at the bottom left, B bottom right, C top right and D top left. The bottom and top sides are marked parallel, and so are the left and right sides. The angle at A is marked 70 degrees and the angle at C has a question mark."><svg viewBox="0 0 300 210" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M30 170H200L244 50H74Z" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56" stroke-width="1.4"/><text x="14" y="184" fill="currentColor" stroke="none">A</text><text x="204" y="186" fill="currentColor" stroke="none">B</text><text x="250" y="48" fill="currentColor" stroke="none">C</text><text x="58" y="42" fill="currentColor" stroke="none">D</text><text x="56" y="162" fill="currentColor" stroke="none">70°</text><text x="206" y="62" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

## Predict: the opposite corner

```step
stage: predict
insight: "Committing to the angle at C when A is 70° shows who expects opposite angles to be equal and who thinks the shape's sides decide it. The proof then says why."
check:
  type: predict
  q: "ABCD is a parallelogram and angle $A = 70^\\circ$. What is angle $C$, the opposite corner?"
  options:
    - "$70^\\circ$"
    - "$110^\\circ$"
    - "$20^\\circ$"
    - "$90^\\circ$"
  actual: "70°. Angle B is 110° (it makes 180° with A), and C makes 180° with B, so C is 70°. That is the reasoning to write down."
```

You have a guess. Now find out how to write down why.

## Run: try parallelograms

```step
stage: run
insight: "Dragging parallelograms and comparing a and c is a demonstration; the proof then gives the reason that works for all of them."
try: { playground: board, starter: "proof.yml#run", height: 640 }
check: { type: board, text: "Drag the corners to make a different parallelogram, with angle $a$ more than $90^\\circ$. Compare $a$ and $c$. Was your prediction right? Does that prove it for every parallelogram?", when: "p = 2 and a > 90", explain: "a and c match every time, but only for the parallelograms you made. The proof gives the reason." }
```

The panel names the shape. Keep it a parallelogram: opposite sides parallel.

## Investigate: statements and reasons

```step
stage: investigate
insight: "A proof lists statements, each with a reason. The reason is a given, a known rule or an earlier line. Nia's mistake uses the conclusion as a reason; the key reason in each chain is the parallel-line rule."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "Triangle ABC has interior angles $a$ at A and $b$ at B. The side AC is extended past C to make an exterior angle $x$. Prove that $x = a + b$."
      steps:
        - ["$c = 180^\\circ - a - b$", "angles in a triangle add to $180^\\circ$"]
        - ["$x = 180^\\circ - c$", "$c$ and $x$ are on a straight line, so they add to $180^\\circ$"]
        - ["$x = 180^\\circ - (180^\\circ - a - b) = a + b$", "put the first line into the second and simplify"]
      picks:
        - step: 2
          q: "What is the reason for $x = 180^\\circ - c$?"
          options: ["Angles on a straight line add to 180°", "Angles in a triangle add to 180°", "Alternate angles are equal"]
          answer: 0
          feedback: [null, "x is not inside the triangle.", "There are no parallel lines in this triangle."]
      criteria:
        - "Every line has a reason after it."
        - "My reasons are given facts or rules I know, not 'it looks like it'."
        - "My last line is what I was asked to prove."
      explain: "c = 180° − a − b (triangle), x = 180° − c (straight line), so x = a + b. Each statement has a reason. This works for every triangle, because a and b stand for any angles."
    smaller:
      check:
        type: question
        q: "Just the first line. Which first statement, with its reason, starts the proof?"
        options: ["$c = 180^\\circ - a - b$, because angles in a triangle add to $180^\\circ$", "$x = a + b$, because it looks the same", "$c = x$, because they are next to each other"]
        answer: 0
        feedback: [null, "That is what we want to prove, so it cannot be a reason.", "c and x are on a straight line: they add to 180°, they are not equal."]
        explain: "Start with what you know: the three angles of the triangle add to 180°, so c = 180° − a − b."
  - check:
      type: bug
      code: "working.txt#nia"
      text: "Nia tries to prove that opposite angles of a parallelogram are equal. Click the line where her reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: proof-assumes-conclusion
      explain: "Line 3: \"opposite angles are equal\" is exactly what Nia is meant to prove. A reason cannot be the conclusion. She needs a different reason, such as co-interior angles at the parallel sides."
  - check:
      type: question
      q: "In parallelogram ABCD, $AD \\parallel BC$. What is the reason for \"angle $A$ + angle $B$ = $180^\\circ$\"?"
      options: ["Co-interior angles between parallel lines add to 180°", "Alternate angles between parallel lines are equal", "Angles in a quadrilateral add to 360°", "They look like they do"]
      answer: 0
      feedback: [null, "Alternate angles are equal, they do not add to 180°. A and B are on the same side of AB.", "That is true, but it does not give A + B on its own. Two angles would be unknown.", "A reason has to be a fact or a rule."]
      explain: "A and B are between the parallel lines AD and BC, on the same side of the transversal AB. That makes them co-interior, so they add to 180°."
```

### Prove it, line by line

Here is a proof that opposite angles of a parallelogram are equal. Each line says what is true and why.

```worked
ABCD \text{ is a parallelogram}, \text{ so } AD \parallel BC \text{ and } AB \parallel DC :: Given. This is what a parallelogram is.
\angle A + \angle B = 180^\circ :: Co-interior angles, $AD \parallel BC$.
\angle B + \angle C = 180^\circ :: Co-interior angles, $AB \parallel DC$.
\angle A = 180^\circ - \angle B = \angle C :: Both $A$ and $C$ equal $180^\circ - \angle B$, so $\angle A = \angle C$.
```

The two parallel pairs are the only facts it needed, so it holds for every parallelogram: a rectangle, a rhombus, any slant. Now try one on paper with the example beside you. Prove that an exterior angle of a triangle equals the two interior angles opposite it. Write each line with its reason, then pick the reason that matters.

### Find the mistake

Read Nia's working. Is her last line a reason, or the thing she is proving?

### Pick the reason

Look at where A and B sit between the parallel sides.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: the same proof for a rectangle, a sum from one line of the proof, and a shape where a missing parallel pair breaks it."
try: { playground: board, starter: "proof.yml#trapezium", height: 640 }
tasks:
  - check:
      type: question
      q: "Does the same proof show that opposite angles of a rectangle are equal?"
      options: ["Yes: a rectangle is a parallelogram, so every step still holds", "No: a rectangle needs its own proof", "Only if the rectangle is a square", "No: rectangles have right angles, so they are not parallelograms"]
      answer: 0
      feedback: [null, "The proof used only the two pairs of parallel sides. A rectangle has them.", "It holds for every rectangle, not only squares.", "A rectangle is a parallelogram with right angles."]
      explain: "The proof used only AD ∥ BC and AB ∥ DC. A rectangle (and a rhombus, and a square) has both, so it is covered."
  - check: { type: number, q: "In parallelogram ABCD, angle $A = 65^\\circ$. Use the proof's second line to find angle $B$, in degrees.", answer: 115, explain: "A + B = 180° (co-interior angles), so B = 180 − 65 = 115°." }
  - hint: ["Make a quadrilateral with only one pair of parallel sides.", "Compare a and c."]
    check: { type: board, text: "Edge case: a trapezium has only one pair of parallel sides. Drag the corners so $p = 1$ and look at $a$ and $c$. Does the proof still show $a = c$?", when: "p = 1 and a > 100", explain: "a and c are no longer equal: the proof needs both pairs of parallel sides, and a trapezium has only one." }
```

### A rectangle

### Using one line

### One pair of parallel sides

## Practise: reasons

```step
stage: practise
insight: "Choosing the reason, using the proof's lines to find angles, and a review of the exterior angle shortcut."
tasks:
  - check:
      type: question
      q: "In parallelogram ABCD, $AB \\parallel DC$. What is the reason for \"angle $B$ + angle $C$ = $180^\\circ$\"?"
      options: ["Co-interior angles between parallel lines add to 180°", "Alternate angles between parallel lines are equal", "Vertically opposite angles are equal", "Angles in a triangle add to 180°"]
      answer: 0
      feedback: [null, "Alternate angles are equal, they do not add to 180°.", "B and C are not vertically opposite.", "There is no triangle here."]
      explain: "B and C sit between AB and DC, on the same side of the transversal BC: co-interior."
  - check:
      type: number
      q: "ABCD is a parallelogram. Angle $A = (2x + 10)^\\circ$ and angle $C = (3x - 20)^\\circ$. Find $x$."
      answer: 30
      tolerance: 0
      explain: "Opposite angles are equal: 2x + 10 = 3x − 20, so x = 30 (and A = C = 70°)."
  - check:
      type: question
      q: "Which statement can be the first line of a proof that a parallelogram's opposite angles are equal?"
      options: ["AD ∥ BC and AB ∥ DC, because ABCD is a parallelogram", "A = C, because opposite angles are equal", "A = C, because they look the same", "A = 70°, because I measured it"]
      answer: 0
      feedback: [null, "That is what you are trying to prove.", "A reason has to be a fact, not a look.", "That is one case."]
      explain: "Start from what is given: a parallelogram has two pairs of parallel sides."
  - check: { type: number, q: "Review: a triangle has angles $a = 48^\\circ$ and $b = 75^\\circ$. The side through C is extended, making an exterior angle $x$ at C. What is $x$, in degrees?", answer: 123, tolerance: 0, explain: "x = a + b = 48 + 75 = 123°. (c = 57°, and 180 − 57 = 123°.)" }
```

### Straight to the reason

### Opposite angles

### The first line

### Review: exterior angle

## Make: back to Mia and Ben

```step
stage: make
insight: "Writing a full proof for the other pair of opposite angles, then saying why Mia's four measurements could not have done it: the reason covers every parallelogram."
tasks:
  - hint: ["Follow the plan: say what is parallel, then use co-interior angles twice.", "This time start from angle B."]
    check:
      type: reasoning
      paper: true
      q: "Prove that angle $B$ = angle $D$ in parallelogram ABCD. Write each line with its reason. Then pick the reason for the key step."
      steps:
        - ["$AD \\parallel BC$ and $AB \\parallel DC$", "ABCD is a parallelogram (given)"]
        - ["$\\angle B + \\angle C = 180^\\circ$", "co-interior angles, $AB \\parallel DC$"]
        - ["$\\angle C + \\angle D = 180^\\circ$", "co-interior angles, $AD \\parallel BC$"]
        - ["$\\angle B = 180^\\circ - \\angle C = \\angle D$", "both equal $180^\\circ - \\angle C$"]
      picks:
        - step: 3
          q: "What is the reason for angle $C$ + angle $D$ = $180^\\circ$?"
          options: ["Co-interior angles, because AD ∥ BC", "Alternate angles, because AD ∥ BC", "Angles in a triangle add to 180°"]
          answer: 0
          feedback: [null, "Alternate angles are equal, they do not add to 180°.", "There is no triangle in this proof."]
      criteria:
        - "My first line says what is given."
        - "Every line has a reason that is a fact or a rule."
        - "My last line is angle B = angle D, and does not use that fact as a reason."
      explain: "Given: both pairs of sides parallel. B + C = 180° and C + D = 180° (co-interior angles), so B = D."
  - check:
      type: question
      q: "Why could Mia's four measured parallelograms not do what the proof does?"
      options: ["Four parallelograms are four cases, and the proof's reason works for every parallelogram", "Her protractor was not accurate enough", "She should have measured more than four", "Parallelograms cannot be measured"]
      answer: 0
      feedback: [null, "Better measuring improves the cases but does not add the ones not measured.", "Forty parallelograms are still forty cases.", "They can be measured. The measurements are evidence, not a proof."]
      explain: "Measurements are cases. The proof used only the two pairs of parallel sides, which every parallelogram has."
```

### Angle B and angle D

Write this on paper first, a line at a time with its reason. Then pick the reason for the key step.

### Mia and Ben

**Also used in**

- **Quadrilaterals.** The Year 8 proofs used congruent triangles. This one uses parallel lines. Both are lists of statements with reasons.
- **Everywhere reasons are needed.** A lawyer, a scientist and a programmer each say what is given, what rule they use, and what follows.
- **Using theorems.** The next lesson picks the theorem that fits a problem and uses it in a short proof.
