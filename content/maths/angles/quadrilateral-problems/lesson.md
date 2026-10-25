---
order: 19
unit: congruence
node: AC9M8SP02 n2
uses: [AC9M8SP02 n1, AC9M7M04 n2, AC9M7M05 n3]
assumes: [AC9M8M06 n2]
title: Problems with quadrilaterals
summary: "Use the properties of parallelograms, rhombuses, rectangles, kites and trapeziums to find unknown angles and lengths, with a reason for each step, and check with the angle sum of 360°."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A gate is braced with a diagonal so it stays a rectangle. A carpenter checks it by measuring both diagonals. Why does that work, and what does it tell her?"
connection: parallelogram-linkage
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8325
  url: http://127.0.0.1:8325/index.html
  readySelector: "#gclass"
  layout: full
explainPicture: { ref: quad.yml#explain-pic, caption: "A parallelogram: opposite angles are equal (45° and 45°, 135° and 135°), and neighbouring angles add to 180°." }
explainClip:
  query: { code: "@quad.yml#explain", fresh: 1, id: explain }
  caption: "Angles in a parallelogram"
  say: "Opposite angles are equal."
  clip:
    - caption: { text: "A parallelogram: A = C and B = D.", say: "In a parallelogram, opposite angles are equal." }
    - expect: { selector: "#gsum", contains: "A = 45°" }
    - wait: 800
    - caption: { text: "Neighbours add to 180°: 45° + 135°. They are co-interior.", say: "Neighbouring angles add to one hundred and eighty. They are co-interior angles." }
    - wait: 1800
    - caption: { text: "Move A: not a parallelogram, and opposite angles are no longer equal.", say: "Move one corner, and opposite angles are no longer equal." }
    - click: Move A left
    - wait: 1600
    - click: Move A right
    - wait: 600
---
Problems with quadrilaterals use their **properties**, with a reason for each step. Start with what you already know: every quadrilateral's angles add to 360°, and co-interior angles between parallel lines add to 180°.

## Predict: one angle

```step
stage: predict
insight: "Committing to all four angles of a parallelogram from one shows whether they use opposite-equal and co-interior."
check:
  type: predict
  q: "A parallelogram has one angle of 70°. What are the other three?"
  options: ["110°, 70°, 110°", "70°, 70°, 70°", "110°, 110°, 70°", "You cannot tell"]
  actual: "110°, 70° and 110°. The opposite angle is equal (70°), and each neighbour is 180° − 70° = 110°."
```

<figure class="situation" role="img" aria-label="A parallelogram ABCD. The angle at A is marked 70 degrees. The angles at B, C and D are each marked with a question mark."><svg viewBox="0 0 320 200" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><polygon points="50,160 230,160 270,50 90,50" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="80" y="150" text-anchor="start" fill="currentColor" stroke="none">70°</text><text x="210" y="150" text-anchor="end" fill="currentColor" stroke="none">?</text><text x="252" y="72" text-anchor="end" fill="currentColor" stroke="none">?</text><text x="112" y="72" text-anchor="start" fill="currentColor" stroke="none">?</text><text x="38" y="178" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="242" y="178" text-anchor="middle" fill="currentColor" stroke="none">B</text><text x="282" y="46" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="78" y="46" text-anchor="middle" fill="currentColor" stroke="none">D</text></svg></figure>

Picture the parallelogram, with its 70° angle in one corner.

## Run: make a parallelogram

```step
stage: run
insight: "Making parallelograms on the board shows opposite angles equal and neighbours adding to 180° every time."
try: { playground: board, starter: "quad.yml#run", height: 640 }
check: { type: board, text: "Drag the corners to make a parallelogram that is not a rectangle. Check the angles: were you right?", when: "z = 4", explain: "Opposite angles are equal and each pair of neighbours adds to 180°, whatever the parallelogram." }
```

Here are the properties to use:

| Shape | Angles | Diagonals |
|---|---|---|
| any quadrilateral | add to 360° | |
| parallelogram | opposite angles equal; neighbours add to 180° | bisect each other |
| rhombus | as a parallelogram | bisect each other at 90° |
| rectangle | four right angles | equal, and bisect each other |
| kite | the angles between the unequal sides are equal | cross at 90° |
| isosceles trapezium | base angles equal (in pairs) | equal |

Neighbouring angles of a parallelogram add to 180° because they are **co-interior** angles between parallel sides.

## Investigate: find the angles

```step
stage: investigate
insight: "Use co-interior angles for neighbours and equality for opposites, with reasons; opposite angles adding to 180° is the slip (Jo); a kite's equal angles come from congruent triangles."
tasks:
  - check:
      type: number
      q: "In parallelogram PQRS, angle P = 65°. What is angle Q, in degrees?"
      answer: 115
      tolerance: 0
      feedback:
        - ["65", "Q is next to P, not opposite. Neighbouring angles add to 180°."]
      explain: "P and Q are co-interior angles between the parallel sides PS and QR: 180 − 65 = 115°."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo works out the angles of a parallelogram. Click the line where she goes wrong."
      answer: 2
      fault: logic
      misconception: opp-angles-supplementary
      explain: "Line 2: opposite angles are equal, so C = 65°. Neighbouring angles add to 180°. Then D = 115°."
  - check:
      type: question
      q: "Kite ABCD has AB = AD and CB = CD, and angle B = 100°. Which other angle must be 100°, and why?"
      options: ["Angle D: triangles ABC and ADC are congruent (SSS)", "Angle A: it is opposite", "Angle C: it is next to B", "None of them"]
      answer: 0
      feedback: [null, "A is next to B, not opposite it; D is opposite B.", "C is between CB and CD, next to B.", "The congruent triangles give one equal pair."]
      explain: "AB = AD, CB = CD and AC is shared, so the triangles are congruent and angle B = angle D."
```

### Neighbours

Here is the routine.

```worked
\angle K = 72^\circ \text{ in parallelogram } KLMN :: What is given?
\angle K + \angle L = 180^\circ :: Co-interior angles: KN is parallel to LM.
\angle L = 180^\circ - 72^\circ = 108^\circ :: Work it out.
\angle M = 72^\circ,\ \angle N = 108^\circ :: Opposite angles are equal. Check: they add to 360°.
```

### Find the mistake

Read Jo's working. Which angle is opposite A?

### A kite

## Modify: other shapes

```step
stage: modify
insight: "The same reasoning on a rhombus, a rectangle's diagonals, a kite and an isosceles trapezium."
tasks:
  - check:
      type: number
      q: "A rhombus has an angle of 70°. What is the size of its larger angles, in degrees?"
      answer: 110
      tolerance: 0
      explain: "A rhombus is a parallelogram: neighbouring angles add to 180°, so 180 − 70 = 110°."
  - check:
      type: number
      q: "Rectangle ABCD has diagonals that cross at M. AC = 10 cm. How long is BM, in cm?"
      answer: 5
      tolerance: 0
      feedback:
        - ["10", "BM is half of BD."]
      explain: "The diagonals are equal (BD = 10) and cut each other in half, so BM = 5 cm."
  - check:
      type: number
      q: "Kite ABCD has AB = AD and CB = CD. Angle A = 70° and angle C = 90°. What is angle B, in degrees?"
      answer: 100
      tolerance: 0
      feedback:
        - ["200", "200° is B and D together."]
      explain: "Angles B and D are equal (congruent triangles). 360 − 70 − 90 = 200, so each is 100°."
  - check:
      type: number
      q: "An isosceles trapezium has two base angles of 70°. What is each of the other two angles, in degrees?"
      answer: 110
      tolerance: 0
      explain: "Each top angle is co-interior with a base angle: 180 − 70 = 110°. Check: 70 + 70 + 110 + 110 = 360."
```

### Rhombus

### Rectangle diagonals

### Kite

### Isosceles trapezium

## Practise: quadrilateral problems

```step
stage: practise
insight: "Angles with algebra, diagonals and Pythagoras, mixed; opposite angles as supplementary is the planted slip again; similar shapes review."
tasks:
  - check:
      type: number
      q: "Two neighbouring angles of a parallelogram are x° and 2x°. What is x?"
      answer: 60
      tolerance: 0
      feedback:
        - ["120", "That is 2x. Solve x + 2x = 180."]
      explain: "x + 2x = 180, so 3x = 180 and x = 60. The angles are 60° and 120°."
  - check:
      type: number
      q: "A rhombus has diagonals of 6 cm and 8 cm. How long is each side, in cm?"
      answer: 5
      tolerance: 0
      explain: "The diagonals cut each other in half at 90°, making right-angled triangles with legs 3 and 4: the side is 5 cm."
  - check:
      type: number
      q: "In parallelogram ABCD, angle A = 52°. What is angle C, in degrees?"
      answer: 52
      tolerance: 0
      feedback:
        - ["128", "C is opposite A, not next to it. Opposite angles are equal."]
      explain: "Opposite angles of a parallelogram are equal: 52°."
  - check:
      type: number
      q: "Review: a 2 cm by 3 cm rectangle is enlarged with scale factor 4. What is the longer side now, in cm?"
      answer: 12
      tolerance: 0
      explain: "3 × 4 = 12 cm."
```

### Angles with x

### Rhombus sides

### Opposite angles

### Review: similar shapes

## Make: a right-angled kite

```step
stage: make
insight: "Building a kite with a given angle, then solving for the others, joins the board, the properties and the angle sum."
try: { playground: board, starter: "quad.yml#make", height: 640 }
hint: ["A kite has AB = AD and CB = CD.", "Put B and D level, the same distance either side of A, so that angle A is 90°.", "Try A at 5,1, B at 7,3 and D at 3,3, then move C up the middle."]
check: { type: board, text: "Make a kite (not a square) with a right angle at A, where AB = AD.", when: "z = 6 and a = 90", explain: "Such as corners 5,1; 7,3; 5,7; 3,3. Angles B and D are equal (congruent triangles), and all four add to 360°." }
```

Then read angle C on the board and work out angles B and D, with a reason for each. The board rounds each angle to a whole degree, so its B and D can differ by 1°: your answer can be a half.

## Make: a linkage tray, on paper

```step
stage: make
insight: "A swinging toolbox tray is a parallelogram: neighbouring angles are co-interior, so they add to 180°, and the four angles add to 360° as a check."
hint: ["Is angle B next to A or opposite it?", "Neighbouring angles of a parallelogram add to 180°."]
check:
  type: reasoning
  paper: true
  q: "A toolbox tray swings on two equal arms, so its hinge points A, B, C and D make a parallelogram. With the tray open, angle A is 64°. Find angle B, and check the four angles add to 360°."
  steps:
    - ["$A$ and $B$ are neighbours, between the parallel sides $AD$ and $BC$", "they are co-interior angles"]
    - ["$A + B = 180^\\circ$", "co-interior angles between parallel sides add to $180^\\circ$"]
    - ["$B = 180^\\circ - 64^\\circ = 116^\\circ$", "take $A$ away from $180^\\circ$"]
    - ["$C = 64^\\circ$ and $D = 116^\\circ$, and $64 + 116 + 64 + 116 = 360$", "opposite angles are equal; check with the angle sum of $360^\\circ$"]
  picks:
    - step: 2
      q: "Why can you find B from A like this?"
      options:
        - "A and B are neighbours between parallel sides, so they add to 180°"
        - "A and B are opposite, so they are equal"
        - "A and B must add to 360°, like all four angles"
      answer: 0
      feedback: [null, "Opposite angles are equal, but B is next to A, not opposite it.", "360° is for all four angles together. Two neighbours add to 180°."]
  answer: "116"
  tolerance: 0
  feedback:
    - ["64", "That is angle A. B is next to it, so B and A add to 180°."]
    - ["296", "That is 360° − 64°, all three other angles together. Take A from 180° for its neighbour."]
  criteria:
    - "I wrote that A and B are co-interior, so they add to 180°."
    - "I found C and D as well."
    - "I checked that all four angles add to 360°."
  explain: "A and B are neighbours between parallel sides, so B = 180° − 64° = 116°. Then C = 64° and D = 116°, and the four add to 360°."
```

Do this one in your book, not on the screen. The angle is made up for the task; real trays have arms that stop at a set angle. Write the reason for each line, check with 360°, and type angle B.

**Also used in**

- **Desk lamps and barriers.** Lamp arms and car-park barriers use the same parallelogram linkage, so the lamp head or the barrier arm keeps its direction as it moves.
- **Garden beds.** Setting out a parallelogram-shaped bed means knowing which sides and angles must match.
- **Frames.** A carpenter measures a frame's two diagonals: equal ones show a parallelogram frame is a rectangle.
