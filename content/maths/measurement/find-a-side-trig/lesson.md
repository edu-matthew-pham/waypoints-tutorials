---
order: 24
unit: trig9
node: AC9M9M03 n1
uses: [AC9M9SP01 n3]
assumes: [AC9M9SP01 n3]
connection: tree-height
title: Find a side with trigonometry
summary: "Name the sides from the angle, pick the ratio that links the side you know to the side you want, then multiply or divide: opposite = hypotenuse × sin, and so on."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You can't climb the tallest tree in the grounds. You can stand back, measure an angle and work out its height."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8376
  url: http://127.0.0.1:8376/index.html
  readySelector: "#board"
  layout: full
---
Stand 20 m from the foot of a tall tree. A clinometer (or a phone app) says the top is 40° above your eye level. How tall is the tree? Have a guess before you read on, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A person stands 20 metres from a tree. A line from their eye to the top of the tree makes an angle of 40 degrees with the level ground. The height above eye level is unknown."><svg viewBox="0 0 360 190" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="165" x2="350" y2="165" stroke-width="1"/><line x1="300" y1="165" x2="300" y2="20" stroke="#D85A30" stroke-width="4"/><line x1="50" y1="140" x2="300" y2="140" stroke-width="1" stroke-dasharray="4 3"/><line x1="50" y1="140" x2="300" y2="48" stroke-width="1.4"/><circle cx="50" cy="132" r="6" stroke-width="1.4"/><line x1="50" y1="138" x2="50" y2="165" stroke-width="1.4"/><path d="M92 140 A42 42 0 0 0 88 124" stroke-width="1.4"/><text x="96" y="134" fill="currentColor" stroke="none">40°</text><text x="160" y="158" fill="currentColor" stroke="none">20 m</text><text x="308" y="100" fill="currentColor" stroke="none">?</text></svg></figure>

## Predict: an easy angle first

```step
stage: predict
insight: "At 45° the opposite and adjacent sides are equal, so committing to the height shows who sees that tan 45° is 1."
check:
  type: predict
  q: "Standing 20 m from a tree, the angle up to its top is 45°. How high is the top above your eye level?"
  options:
    - "20 m"
    - "10 m"
    - "40 m"
    - "14 m"
  actual: "20 m. At 45° the opposite side equals the adjacent side (tan 45° = 1). At 40° the height will be a little less."
```

## Run: sides and angle

```step
stage: run
insight: "Tangent links the opposite and the adjacent sides: the tree height is the adjacent distance times the tangent of the angle."
try: { playground: board, starter: "side.yml#run", height: 560 }
check: { type: board, text: "Set $t$ to $40$. Read $\\tan 40°$ from the board.", when: "t = 40" }
```

## Investigate: choose and calculate

```step
stage: investigate
insight: "The sides you know and want choose the ratio, and then the calculation is one multiplication or division."
tasks:
  - check:
      type: number
      q: "For the tree, opposite $=$ adjacent $\\times \\tan 40°$ with adjacent $= 20$ m and $\\tan 40° = 0.839$. How high above your eye is the top? (1 decimal place)"
      answer: 16.8
      tolerance: 0.1
      explain: "20 × 0.839 = 16.78, about 16.8 m."
    smaller:
      check: { type: "number", q: "What is $20 \\times 0.839$? (1 decimal place)", answer: 16.8, tolerance: 0.1, explain: "20 × 0.839 = 16.78." }
  - check:
      type: question
      q: "You know the adjacent side and want the opposite side. Which ratio do you use?"
      options: ["Tangent", "Sine", "Cosine", "Any of them"]
      answer: 0
      feedback: [null, "Sine needs the hypotenuse.", "Cosine needs the hypotenuse.", "Each ratio uses a particular pair."]
      explain: "Opposite and adjacent: tangent."
  - check:
      type: bug
      code: "working.txt#pat"
      text: "Pat finds the height of the tree. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: trig-divide-instead-of-multiply
      explain: "Line 3: tan = opposite ÷ adjacent, so opposite = adjacent × tan. Pat divided, which gives a height far too big."
```

### Find the opposite

```worked
\tan 40° = \dfrac{\text{opposite}}{\text{adjacent}} :: The ratio that links the two sides.
\text{opposite} = 20 \times \tan 40° :: Multiply both sides by 20.
\text{opposite} = 20 \times 0.839 = 16.8 :: Use the calculator in degree mode.
\text{opposite} \approx 16.8 \text{ m} :: Above eye level.
```

### Which ratio

### Find the mistake

Read Pat's working. Which line divides when it should multiply?

## Modify: other sides

```step
stage: modify
insight: "Changing which side is unknown tests the choice of ratio and shows when to divide."
tasks:
  - hint: ["Opposite and hypotenuse: sine.", "opposite = hypotenuse × sin 70°."]
    check: { type: number, q: "A ladder is $8$ m long and leans at $70°$ to the ground. How high up the wall does it reach? ($\\sin 70° = 0.940$; 1 decimal place)", answer: 7.5, tolerance: 0.1, explain: "8 × 0.940 = 7.52, about 7.5 m." }
  - hint: ["The unknown is on the bottom this time.", "hypotenuse = adjacent ÷ cos 60°."]
    check: { type: number, q: "A ramp's horizontal run is $10$ m and it makes $60°$ with the ground. How long is the ramp surface? ($\\cos 60° = 0.5$)", answer: 20, tolerance: 0.1, explain: "adjacent = hypotenuse × cos, so hypotenuse = 10 ÷ 0.5 = 20 m." }
  - hint: ["Is a 70° ladder steep or shallow?", "The wall height has to be less than the ladder."]
    check: { type: question, q: "A calculation gives a ladder's reach as $11$ m for an $8$ m ladder. What does that tell you?", options: ["There is a mistake: the height can't be more than the ladder", "The ladder is very steep", "The ladder is long enough", "Nothing: ladders can stretch"], answer: 0, feedback: [null, "Even a vertical ladder only reaches 8 m.", "It can't reach further than its length.", "A ladder has a fixed length."], explain: "The opposite side is shorter than the hypotenuse. If it isn't, check for dividing instead of multiplying." }
```

### Ladder reach

### Ramp length

### Does it make sense

## Practise: find the side

```step
stage: practise
insight: "Choosing sine, cosine or tangent and then multiplying or dividing."
tasks:
  - check:
      type: number
      q: "A triangle has hypotenuse 12 and a 30° angle. The opposite side is hypotenuse × $\\sin 30°$ (0.5). How long is it?"
      answer: 6
      explain: "12 × 0.5 = 6."
  - check:
      type: number
      q: "A cliff is $50$ m high. From the boat the angle up to its top is $35°$. How far is the boat from the foot of the cliff? ($\\tan 35° = 0.700$; nearest metre. Made up for the task.)"
      answer: 71
      tolerance: 1
      explain: "50 ÷ 0.700 = 71.4, about 71 m."
    smaller:
      check: { type: "number", q: "What is $50 \\div 0.7$ to the nearest whole number?", answer: 71, tolerance: 1, explain: "50 ÷ 0.7 = 71.4." }
  - check:
      type: number
      q: "Review: what is the sine of an angle in a triangle with opposite 6 and hypotenuse 10?"
      answer: 0.6
      tolerance: 0.001
      explain: "6 ÷ 10 = 0.6."
```

### Opposite

### Adjacent

### Review

## Make: the tree

```step
stage: make
insight: "Returning to the tree: the angle is measured from eye level, so add the eye height."
tasks:
  - hint: ["The height above eye level is 20 × tan 40°.", "Then add your eye height."]
    check:
      type: reasoning
      paper: true
      q: "You stand 20 m from the tree with your eye 1.6 m above the ground. The angle up to the top is 40°. How tall is the tree? ($\\tan 40° = 0.839$; 1 decimal place. The figures are made up for the task.)"
      steps:
        - ["opposite $= 20 \\times \\tan 40°$", "the height above eye level"]
        - ["$20 \\times 0.839 = 16.8$", "multiply"]
        - ["$16.8 + 1.6 = 18.4$", "add the eye height"]
      answer: "18.4"
      answerLabel: "Tree height (m)"
      tolerance: 0.1
      feedback:
        - ["16.8", "That's above your eye. Add your eye height."]
        - ["20", "That is the distance, not the height."]
      criteria:
        - "I chose tangent because I had opposite and adjacent."
        - "I added the eye height at the end."
        - "I gave the answer in metres."
      explain: "20 × 0.839 = 16.78. Add 1.6 to get 18.4 m."
  - check:
      type: question
      q: "What could make your answer wrong?"
      options: ["Sloping ground, or a tree that leans", "The tree being tall", "Using a calculator", "Standing 20 m away"]
      answer: 0
      feedback: [null, "Tall trees are fine.", "A calculator in degree mode is how you do it.", "The distance is one of the measurements."]
      explain: "The method assumes level ground and a vertical tree."
```

### Total height

### What could go wrong

**Also used in**

- **Surveying.** Heights of buildings and cliffs from an angle.
- **Aviation.** A plane's height from its distance and angle of climb.
- **Next lesson.** Finding the angle when you know the sides.
