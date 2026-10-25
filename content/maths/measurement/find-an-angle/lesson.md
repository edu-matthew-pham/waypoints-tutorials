---
order: 25
unit: trig9
node: AC9M9M03 n2
uses: [AC9M9M03 n1]
assumes: [AC9M9M03 n1]
connection: ramp-1-in-14
title: Find an angle
summary: "When you know two sides and want the angle, use the inverse ratio: tan⁻¹, sin⁻¹ or cos⁻¹ turn a ratio back into an angle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A ramp rises 1 m over 14 m of ground. How steep is that, in degrees?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8377
  url: http://127.0.0.1:8377/index.html
  readySelector: "#board"
  layout: full
---
Ramps for wheelchairs must be gentle. Australian Standards allow ramps up to 9 m long a slope of at most 1 in 14 ([Queensland Health](https://www.health.qld.gov.au/__data/assets/pdf_file/0029/1477208/Ramps-to-the-house-and-slopes-in-the-garden-slides.pdf)). A ramp rises 1 m for every 14 m along the ground. What angle does it make with the ground? Have a guess, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A ramp rises 1 metre over a run of 14 metres along the ground. The angle at the bottom of the ramp is marked with a question mark."><svg viewBox="0 0 360 150" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="20" y1="120" x2="340" y2="120" stroke-width="1.5"/><path d="M30 120 L330 100 L330 120 Z" stroke-width="2.5" fill="#888780" fill-opacity="0.2"/><path d="M80 120 A50 50 0 0 0 80 117" stroke-width="1.4"/><text x="92" y="116" fill="currentColor" stroke="none">?°</text><text x="170" y="138" fill="currentColor" stroke="none">14 m run</text><text x="340" y="112" fill="currentColor" stroke="none">1 m</text></svg></figure>

## Predict: how steep

```step
stage: predict
insight: "Committing to a size for the 1 in 14 angle shows whether students expect a gentle ramp to be small in degrees."
check:
  type: predict
  q: "A ramp rises 1 m over a run of 14 m. About how big is its angle with the ground?"
  options:
    - "About 4°"
    - "About 14°"
    - "About 7°"
    - "About 45°"
  actual: "About 4°. A ramp can be very gentle: 1 m up over 14 m along is only 4.1°. 45° would be 1 up for every 1 along."
```

## Run: set the angle

```step
stage: run
insight: "Tangent of the angle is rise ÷ run, so the angle is the number whose tangent is 1 ÷ 14."
try: { playground: board, starter: "angle.yml#run", height: 560 }
check: { type: board, text: "Set $t$ to $4$. Read $\\tan 4°$. Is it close to $1 \\div 14 = 0.071$?", when: "t = 4" }
```

## Investigate: the inverse ratio

```step
stage: investigate
insight: "tan turns an angle into a ratio; tan⁻¹ turns a ratio back into an angle. The ratio goes into the inverse key, not the plain one."
tasks:
  - check:
      type: number
      q: "The ramp has opposite $= 1$ and adjacent $= 14$. What is the ratio $1 \\div 14$ to 3 decimal places?"
      answer: 0.071
      tolerance: 0.001
      explain: "1 ÷ 14 = 0.0714."
    smaller:
      check: { type: "number", q: "What is $1 \\div 14$ to 3 decimal places?", answer: 0.071, tolerance: 0.001, explain: "1 ÷ 14 = 0.0714." }
  - check:
      type: number
      q: "Use $\\tan^{-1}$ on $0.5$ (opposite $=$ 1, adjacent $= 2$). What is the angle, to the nearest degree?"
      answer: 27
      tolerance: 0.6
      explain: "tan⁻¹ 0.5 = 26.6°, about 27°."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam finds the angle of the ramp. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: trig-inverse-missed
      explain: "Line 3: tan 0.071 would be an angle's tangent, not an angle. Use tan⁻¹ 0.071 to turn the ratio into an angle."
```

### Ratio to angle

```worked
\tan\theta = \dfrac{1}{14} :: Rise is opposite, run is adjacent.
\tan\theta = 0.0714 :: Divide.
\theta = \tan^{-1}(0.0714) :: Use the inverse key.
\theta \approx 4.1° :: The ramp is about 4°.
```

### The inverse key

### Find the mistake

Read Sam's working. Which line forgets the inverse?

## Modify: other angles

```step
stage: modify
insight: "Changing which two sides are known tests the choice of inverse ratio."
tasks:
  - hint: ["Opposite 3, adjacent 4: tangent.", "tan⁻¹(3 ÷ 4)."]
    check: { type: number, q: "A triangle has opposite $3$ and adjacent $4$. What is the angle, to the nearest degree?", answer: 37, tolerance: 0.6, explain: "tan⁻¹ 0.75 = 36.9°, about 37°." }
  - hint: ["Adjacent and hypotenuse: cosine.", "cos⁻¹(1 ÷ 4)."]
    check: { type: number, q: "A $4$ m ladder has its foot $1$ m from the wall. What angle does the ladder make with the ground, to the nearest degree?", answer: 76, tolerance: 0.6, explain: "cos⁻¹ 0.25 = 75.5°, about 76°." }
  - hint: ["Check which side is the hypotenuse.", "The hypotenuse is the longest side."]
    check: { type: question, q: "A student uses $\\sin^{-1}(7 \\div 5)$ and gets an error. Why?", options: ["Sine can't be more than 1: the opposite side can't be longer than the hypotenuse", "The calculator is broken", "They should use tangent", "7 is too big"], answer: 0, feedback: [null, "The calculator is right: no such angle.", "The sides given suit sine or tan; the issue is the order.", "The size of 7 isn't the problem."], explain: "The hypotenuse is the longest side, so opposite ÷ hypotenuse is below 1. Put the hypotenuse underneath." }
```

### A 3-4 triangle

### A ladder

### An error

## Practise: find the angle

```step
stage: practise
insight: "Choosing the ratio from the two sides known, then using its inverse."
tasks:
  - check:
      type: number
      q: "A triangle has opposite 5 and adjacent 5. What is the angle?"
      answer: 45
      tolerance: 0.5
      explain: "tan⁻¹ 1 = 45°."
  - check:
      type: number
      q: "A triangle has opposite 6 and hypotenuse 10. What is the angle to the nearest degree?"
      answer: 37
      tolerance: 0.6
      explain: "sin⁻¹ 0.6 = 36.9°, about 37°."
    smaller:
      check: { type: "number", q: "What is $6 \\div 10$?", answer: 0.6, tolerance: 0.001, explain: "6 ÷ 10 = 0.6." }
  - check:
      type: number
      q: "Review: a tree's top is 20 m above your eye and you are 20 m away. What is the angle?"
      answer: 45
      tolerance: 0.5
      explain: "tan⁻¹(20 ÷ 20) = 45°."
```

### Opposite and adjacent

### Opposite and hypotenuse

### Review

## Make: is the ramp allowed

```step
stage: make
insight: "Returning to the ramp: turn the rise and run into an angle and compare with the 1 in 14 limit."
tasks:
  - hint: ["Rise and run: tan⁻¹.", "Compare 0.6 ÷ 8 with 1 ÷ 14."]
    check:
      type: reasoning
      paper: true
      q: "A ramp rises 0.6 m over a run of 8 m. What angle does it make with the ground? The 1 in 14 limit is 4.1°. (1 decimal place. The ramp is made up for the task.)"
      steps:
        - ["$\\tan\\theta = 0.6 \\div 8 = 0.075$", "rise over run"]
        - ["$\\theta = \\tan^{-1}(0.075)$", "use the inverse key"]
        - ["$4.3°$", "bigger than 4.1°, so too steep"]
      answer: "4.3"
      answerLabel: "Angle (degrees)"
      tolerance: 0.1
      feedback:
        - ["0.075", "That's the ratio. Use tan⁻¹ to get the angle."]
        - ["0.0752", "That's the ratio. Use tan⁻¹ to get the angle."]
      criteria:
        - "I used rise ÷ run."
        - "I used the inverse key."
        - "I compared with 4.1°."
      explain: "tan⁻¹ 0.075 = 4.29°, about 4.3°: slightly steeper than the 4.1° limit."
  - check:
      type: question
      q: "Is a ramp with an angle of 4.3° allowed if the limit is 4.1°?"
      options: ["No: it's steeper than the limit", "Yes: it's close enough", "Yes: 4.3 is bigger", "Can't tell"]
      answer: 0
      feedback: [null, "The rule is a limit, not a guide.", "A bigger angle is steeper, which is worse.", "You compare the angles."]
      explain: "A bigger angle is steeper. The ramp would need to be longer."
```

### The angle

### Allowed?

The limit is for ramps up to 9 m long: shorter or longer ramps have other rules ([Queensland Health](https://www.health.qld.gov.au/__data/assets/pdf_file/0029/1477208/Ramps-to-the-house-and-slopes-in-the-garden-slides.pdf)). The 0.6 m ramp is made up for the task.

**Also used in**

- **Building.** Roof pitch and stair slope in degrees.
- **Navigation.** The angle to steer to reach a place.
- **Next lesson.** Similar triangles and scale.
