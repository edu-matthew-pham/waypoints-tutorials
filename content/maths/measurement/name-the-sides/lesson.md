---
order: 21
unit: trig9
node: AC9M9SP01 n1
uses: [AC9M8M06 n1]
assumes: [AC9M8M06 n1]
title: Name the sides
summary: "In a right-angled triangle the sides are named from an angle: the hypotenuse is across from the right angle, the opposite side is across from your angle and the adjacent side touches it. Change the angle and the names change."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two people stand at different corners of the same triangle. Is a side the 'opposite' for both?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8373
  url: http://127.0.0.1:8373/index.html
  readySelector: "#board"
  layout: full
---
Every trig problem starts the same way: pick the angle you are working from, then name the three sides. Get the names wrong and everything after it goes wrong.

## Predict: which side is opposite

```step
stage: predict
insight: "Choosing the side opposite the marked angle shows whether the names are tied to the angle or to where the side sits on the page."
check:
  type: predict
  q: "In the triangle, the marked angle is at the bottom left. Which side is the opposite side?"
  options:
    - "The upright side on the right"
    - "The bottom side"
    - "The sloping side"
    - "The side on the left"
  actual: "The upright side on the right. It is the side across from the marked angle, the one the angle doesn't touch. The bottom side touches the angle, so it is the adjacent side."
```

<figure class="situation" role="img" aria-label="A right-angled triangle with the right angle at the bottom right. The angle at the bottom left is marked with an arc. The upright side on the right, the bottom side and the sloping side are unlabelled."><svg viewBox="0 0 300 180" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M30 150 L250 150 L250 40 Z" stroke-width="2.5"/><path d="M250 150 v-14 h-14" stroke-width="1.2"/><path d="M62 150 A32 32 0 0 0 57 133" stroke-width="1.6"/><text x="74" y="143" fill="currentColor" stroke="none">θ</text><text x="140" y="170" fill="currentColor" stroke="none">bottom</text><text x="260" y="100" fill="currentColor" stroke="none">upright</text><text x="108" y="82" fill="currentColor" stroke="none">sloping</text></svg></figure>

## Run: look from each angle

```step
stage: run
insight: "The sloping side is always the hypotenuse, but the other two swap names when you look from the other angle."
try: { playground: board, starter: "sides.yml#run", height: 560 }
check: { type: board, text: "Press Look from the other angle. Which side was adjacent and is now opposite?", when: "w = 1" }
```

The board names the sides from the marked angle. Press the button to stand at the other corner.

## Investigate: names depend on the angle

```step
stage: investigate
insight: "The hypotenuse never changes. Opposite and adjacent are decided by the marked angle, not by up or down."
tasks:
  - check:
      type: question
      q: "Which side is always the hypotenuse?"
      options: ["The side across from the right angle (the longest)", "The bottom side", "The upright side", "The side touching the marked angle"]
      answer: 0
      feedback: [null, "The bottom side can be opposite or adjacent depending on the angle.", "The upright side can be opposite or adjacent depending on the angle.", "That describes the adjacent side."]
      explain: "The hypotenuse is across from the right angle. It is the longest side and does not change with the marked angle."
    smaller:
      check: { type: "question", q: "Which angle in the triangle is the right angle?", options: ["The corner marked with a small square", "The corner marked with an arc", "The top corner", "The biggest angle in every triangle"], answer: 0, explain: "The small square marks the right angle." }
  - check:
      type: question
      q: "The marked angle moves to the top corner. The upright side was opposite. What is it now?"
      options: ["Adjacent: it touches the new angle", "Opposite: it was opposite before", "The hypotenuse", "It has no name"]
      answer: 0
      feedback: [null, "The names follow the angle, so they change when the angle moves.", "The hypotenuse is across from the right angle.", "Every side has a name from the marked angle."]
      explain: "From the top corner, the upright side touches the angle, so it is adjacent."
  - check:
      type: bug
      code: "working.txt#mo"
      text: "Mo names the sides from the top angle. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: opposite-always-vertical
      explain: "Line 3: from the top angle the upright side touches it, so it is adjacent, not opposite. The names follow the angle."
```

### Hypotenuse, opposite, adjacent

```worked
\text{hypotenuse} :: Across from the right angle: the longest side.
\text{opposite} :: Across from the marked angle: it does not touch it.
\text{adjacent} :: Next to the marked angle: it touches it, and is not the hypotenuse.
\text{move the angle} :: Opposite and adjacent swap. The hypotenuse stays.
```

### Move the angle

### Find the mistake

Read Mo's working. Which line names a side from the wrong angle?

## Modify: name the sides

```step
stage: modify
insight: "Naming sides in a fresh triangle, including one that is turned, shows the names come from the angle and not the page."
tasks:
  - hint: ["Find the right angle first.", "The side across from it is the hypotenuse."]
    check: { type: number, q: "A right-angled triangle has sides 6, 8 and 10 cm. How long is the hypotenuse?", answer: 10, explain: "The hypotenuse is the longest side, across from the right angle: 10 cm." }
  - hint: ["The opposite side doesn't touch the marked angle.", "The adjacent side touches it."]
    check: { type: question, q: "The marked angle is between the 6 cm side and the 10 cm side. Which side is opposite?", options: ["The 8 cm side", "The 6 cm side", "The 10 cm side", "None of them"], answer: 0, feedback: [null, "The 6 cm side touches the marked angle, so it is adjacent.", "The 10 cm side is the hypotenuse.", "The side that doesn't touch the angle is opposite."], explain: "The marked angle is touched by the 6 and the 10. The 8 cm side is across from it: opposite." }
  - hint: ["Turn your head: the names still follow the marked angle.", "Which side touches the angle but isn't the hypotenuse?"]
    check: { type: question, q: "The triangle is turned so the 6 cm side points up. The marked angle is the same one. Which side is adjacent?", options: ["The 6 cm side", "The 8 cm side", "The 10 cm side", "It depends which way the page faces"], answer: 0, feedback: [null, "The 8 cm side is across from the marked angle.", "The 10 cm side is the hypotenuse.", "Turning the triangle doesn't change which sides touch the angle."], explain: "Turning the page changes nothing: the 6 cm side still touches the marked angle." }
```

### The hypotenuse

### Across from the angle

### Turned around

## Practise: label the sides

```step
stage: practise
insight: "Naming sides quickly and correctly, including after the angle moves."
tasks:
  - check:
      type: number
      q: "A triangle has sides 5, 12 and 13 cm. How long is the hypotenuse?"
      answer: 13
      explain: "The longest side, across from the right angle."
  - check:
      type: question
      q: "The marked angle is between the 5 cm side and the 13 cm side. Which side is opposite?"
      options: ["The 12 cm side", "The 5 cm side", "The 13 cm side", "None of them"]
      answer: 0
      feedback: [null, "The 5 cm side touches the angle.", "The 13 cm side is the hypotenuse.", "Exactly one side is opposite."]
      explain: "The 12 cm side doesn't touch the marked angle."
    smaller:
      check: { type: "question", q: "Which two sides touch the marked angle (the 5 cm and the 13 cm), and which doesn't?", options: ["The 12 cm side doesn't touch it", "The 5 cm side doesn't touch it", "The 13 cm side doesn't touch it", "All three touch it"], answer: 0, explain: "The marked angle sits between the 5 and the 13, so the 12 cm side is across from it." }
  - check:
      type: number
      q: "Review: a ladder is 5 m long and its foot is 3 m out. How high does it reach? (Pythagoras)"
      answer: 4
      explain: "5² − 3² = 16, so the height is 4 m."
```

### Hypotenuse

### Opposite

### Review

## Make: name them yourself

```step
stage: make
insight: "Stating the names for a ramp from the angle it makes with the ground, and checking the reason."
tasks:
  - check:
      type: question
      q: "A ramp rises 1 m over a 14 m run along the ground. The angle is where the ramp meets the ground. Which side is opposite that angle?"
      options: ["The 1 m rise", "The 14 m run", "The ramp's sloping surface", "The wall"]
      answer: 0
      feedback: [null, "The run touches the angle, so it is adjacent.", "The sloping surface is the hypotenuse.", "There's no wall in this triangle."]
      explain: "The rise is across from the angle at the bottom of the ramp."
  - check:
      type: question
      q: "Which side is adjacent to that angle?"
      options: ["The 14 m run along the ground", "The 1 m rise", "The ramp's sloping surface", "None of them"]
      answer: 0
      feedback: [null, "The rise is opposite.", "The sloping surface is the hypotenuse, which is never adjacent.", "One side is adjacent."]
      explain: "The run touches the angle and isn't the hypotenuse, so it is adjacent."
```

### The rise

### The run

**Also used in**

- **Building.** Ramps, roofs and stairs are all right-angled triangles.
- **Surveying.** Heights and distances use the same sides.
- **Next lesson.** Why the ratio of two sides stays fixed when the angle does.
