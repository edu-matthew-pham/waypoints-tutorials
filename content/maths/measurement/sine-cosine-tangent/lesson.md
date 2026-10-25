---
order: 23
unit: trig9
node: AC9M9SP01 n3
uses: [AC9M9SP01 n2]
assumes: [AC9M9SP01 n2]
connection: tree-height
title: Sine, cosine and tangent
summary: "The three ratios have names: sine is opposite ÷ hypotenuse, cosine is adjacent ÷ hypotenuse and tangent is opposite ÷ adjacent. A calculator knows the value for each angle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How tall is that tree? You can't climb it, but an angle and a measured distance are enough."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8375
  url: http://127.0.0.1:8375/index.html
  readySelector: "#board"
  layout: full
---
You are 20 m from the foot of a tree. You measure 40° up to its top. The tree is the opposite side and your distance is the adjacent side. Which ratio links them? Have a guess, and we'll come back to it at the end.

## Predict: name the ratio

```step
stage: predict
insight: "Matching the 0.75 to a pair of sides shows who has linked each ratio to its two sides."
check:
  type: predict
  q: "A right-angled triangle has opposite 3, adjacent 4 and hypotenuse 5 from the marked angle. Which ratio equals $0.75$?"
  options:
    - "opposite ÷ adjacent ($3 \\div 4$)"
    - "opposite ÷ hypotenuse ($3 \\div 5$)"
    - "adjacent ÷ hypotenuse ($4 \\div 5$)"
    - "hypotenuse ÷ adjacent"
  actual: "Opposite ÷ adjacent: 3 ÷ 4 = 0.75. This ratio is called the tangent."
```

## Run: three ratios, one angle

```step
stage: run
insight: "Each ratio is a number that depends only on the angle: sine and cosine are always between 0 and 1, tangent can be bigger."
try: { playground: board, starter: "ratios.yml#run", height: 560 }
check: { type: board, text: "Set the angle to $45°$. What do you notice about sine and cosine?", when: "t = 45" }
```

## Investigate: which ratio is which

```step
stage: investigate
insight: "Sine uses opposite and hypotenuse, cosine uses adjacent and hypotenuse, tangent uses opposite and adjacent."
tasks:
  - check:
      type: number
      q: "A triangle has opposite 6 and hypotenuse 10. What is the sine of the angle?"
      answer: 0.6
      tolerance: 0.001
      explain: "sin = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6."
    smaller:
      check: { type: "number", q: "What is $6 \\div 10$?", answer: 0.6, tolerance: 0.001, explain: "6 ÷ 10 = 0.6." }
  - check:
      type: question
      q: "Which ratio is adjacent ÷ hypotenuse?"
      options: ["Cosine", "Sine", "Tangent", "None of them"]
      answer: 0
      feedback: [null, "Sine uses the opposite side.", "Tangent uses opposite and adjacent.", "It has a name."]
      explain: "Cosine is adjacent ÷ hypotenuse."
  - check:
      type: bug
      code: "working.txt#lee"
      text: "Lee finds the sine of the angle. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: sin-cos-swapped
      explain: "Line 3: sine uses the opposite side, not the adjacent. Adjacent ÷ hypotenuse is the cosine."
```

### Which sides

```worked
\sin = \dfrac{\text{opposite}}{\text{hypotenuse}} :: Sine: opposite over hypotenuse.
\cos = \dfrac{\text{adjacent}}{\text{hypotenuse}} :: Cosine: adjacent over hypotenuse.
\tan = \dfrac{\text{opposite}}{\text{adjacent}} :: Tangent: opposite over adjacent.
\text{3, 4, 5 triangle: } \sin = 0.6, \cos = 0.8, \tan = 0.75 :: The same sides give three ratios.
```

### Which ratio

### Find the mistake

Read Lee's working. Which line uses the wrong sides for sine?

## Modify: read the board

```step
stage: modify
insight: "Reading ratios off the board for particular angles builds a feel for how each one behaves."
tasks:
  - hint: ["Set the angle to 45° on the board.", "Both sides are the same length."]
    check: { type: number, q: "What is the tangent of $45°$?", answer: 1, tolerance: 0.001, explain: "At 45° the opposite and adjacent sides are equal, so tan 45° = 1." }
  - hint: ["Set the angle to 30°.", "Read the sine row."]
    check: { type: number, q: "What is the sine of $30°$?", answer: 0.5, tolerance: 0.001, explain: "sin 30° = 0.5: the opposite side is half the hypotenuse." }
  - hint: ["As the angle gets bigger, the opposite side gets longer.", "Look at the sine and cosine rows."]
    check: { type: question, q: "As the angle gets bigger, what happens to the cosine?", options: ["It gets smaller", "It gets bigger", "It stays the same", "It goes above 1"], answer: 0, feedback: [null, "The adjacent side shrinks as the angle opens.", "The ratio depends on the angle.", "The adjacent side can't be longer than the hypotenuse."], explain: "A bigger angle leaves less adjacent side, so the cosine falls." }
```

### Tangent at 45

### Sine at 30

### Cosine

## Practise: pick the ratio

```step
stage: practise
insight: "Choosing the ratio from the sides that are involved."
tasks:
  - check:
      type: number
      q: "A triangle has opposite 5 and adjacent 4 . What is $\\tan$ of the angle? Give it to 2 decimal places."
      answer: 1.25
      tolerance: 0.01
      explain: "5 ÷ 4 = 1.25."
  - check:
      type: question
      q: "You know the adjacent side and the hypotenuse. Which ratio do you use?"
      options: ["Cosine", "Sine", "Tangent", "Any of them"]
      answer: 0
      feedback: [null, "Sine uses the opposite side.", "Tangent uses opposite and adjacent.", "Each ratio uses a particular pair of sides."]
      explain: "Adjacent and hypotenuse give the cosine."
    smaller:
      check: { type: "question", q: "Which side does the cosine use alongside the hypotenuse?", options: ["The adjacent side", "The opposite side", "Neither", "Both"], answer: 0, explain: "Cosine is adjacent ÷ hypotenuse." }
  - check:
      type: number
      q: "Review: scale a triangle with opposite 3 and hypotenuse 5 so the hypotenuse is 20. What is the new opposite side?"
      answer: 12
      explain: "The ratio 0.6 × 20 = 12."
```

### Tangent

### Which ratio

### Review

## Make: the tree

```step
stage: make
insight: "Returning to the tree: choosing the right ratio from what is known and what is wanted."
tasks:
  - check:
      type: question
      q: "You stand 20 m from the tree and measure the angle up to its top. The height above your eye is the opposite side and the 20 m is the adjacent side. Which ratio links them?"
      options: ["Tangent", "Sine", "Cosine", "None of them"]
      answer: 0
      feedback: [null, "Sine needs the hypotenuse, the sloping line of sight.", "Cosine needs the hypotenuse, the sloping line of sight.", "One ratio uses opposite and adjacent."]
      explain: "Opposite and adjacent: tangent."
  - hint: ["tan = opposite ÷ adjacent.", "12 ÷ 20."]
    check:
      type: reasoning
      paper: true
      q: "From 20 m away, a tree's top is 12 m above your eye level. What is the tangent of the angle? (The numbers are made up for the task.)"
      steps:
        - ["opposite $= 12$, adjacent $= 20$", "name the sides from the angle"]
        - ["$\\tan = 12 \\div 20$", "tangent is opposite ÷ adjacent"]
        - ["$0.6$", "divide"]
      answer: "0.6"
      answerLabel: "tan of the angle"
      tolerance: 0.001
      feedback:
        - ["1.67", "That's 20 ÷ 12 the wrong way up. Tangent is opposite ÷ adjacent."]
      criteria:
        - "I named the opposite and adjacent sides."
        - "I put the opposite on top."
        - "I divided correctly."
      explain: "12 ÷ 20 = 0.6."
```

### Which ratio

### The tangent

**Also used in**

- **Surveying and building.** Roof pitch, slope and heights from an angle.
- **Physics.** Components of a force or a velocity along and across a direction.
- **Next unit.** Using the ratios to find a missing side.
