---
order: 25
unit: enlarge9
node: AC9M9SP02 n1
uses: [AC9M8SP01 n1]
assumes: [AC9M8SP01 n1]
connection: screen-ratio
title: What enlargement keeps
summary: "An enlargement multiplies every length by the same scale factor. It keeps the angles and the shape, and changes the lengths, the perimeter and the area."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A video made for a TV screen is shown on a phone. Why does it sometimes have black bars?"
---
A video is 1920 pixels wide and 1080 tall. A phone screen is 2400 by 1080. Can you enlarge or shrink the video so it fills the phone exactly? Have a guess, and we'll come back to it at the end. (These screen sizes are examples: your own phone's settings will show its size.)

<figure class="situation" role="img" aria-label="A wide rectangle labelled 1920 by 1080 and a wider rectangle labelled 2400 by 1080. The second has more width for the same height."><svg viewBox="0 0 360 160" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="40" width="144" height="81" stroke-width="2" fill="#888780" fill-opacity="0.2"/><rect x="190" y="40" width="160" height="72" stroke-width="2" fill="#888780" fill-opacity="0.2"/><text x="40" y="32" fill="currentColor" stroke="none">1920 by 1080</text><text x="220" y="32" fill="currentColor" stroke="none">2400 by 1080</text></svg></figure>

## Predict: what stays the same

```step
stage: predict
insight: "Choosing the angles of an enlarged triangle shows whether students think angles scale with the sides."
check:
  type: predict
  q: "A triangle has angles 30°, 60° and 90°. It is enlarged with a scale factor of 2. What are the angles of the enlarged triangle?"
  options:
    - "30°, 60° and 90°"
    - "60°, 120° and 180°"
    - "15°, 30° and 45°"
    - "30°, 60° and 120°"
  actual: "30°, 60° and 90°. An enlargement keeps the angles; only the lengths change. Angles in a triangle must still add to 180°, which the doubled angles (360°) would not."
```

## Run: enlarge it

```step
stage: run
insight: "Every length is multiplied by the scale factor, so a 6 cm side becomes 12 cm when the factor is 2."
check: { type: number, q: "A shape has a 6 cm side. It is enlarged with a scale factor of 2. How long is the new side? (cm)", answer: 12, explain: "6 × 2 = 12 cm." }
```

## Investigate: kept and changed

```step
stage: investigate
insight: "Angles and shape are kept. Lengths and the perimeter grow by the scale factor, and the area grows by more."
tasks:
  - check:
      type: number
      q: "A rectangle is 4 cm by 3 cm. It is enlarged by a scale factor of 3. How long is the longer side now? (cm)"
      answer: 12
      explain: "4 × 3 = 12 cm."
    smaller:
      check: { type: "number", q: "What is $4 \\times 3$?", answer: 12, explain: "4 × 3 = 12." }
  - check:
      type: question
      q: "Which of these does an enlargement keep?"
      options: ["Angles and the shape", "Side lengths", "Area", "Perimeter"]
      answer: 0
      feedback: [null, "Every length is multiplied.", "Area changes too.", "The perimeter is a length, so it is multiplied."]
      explain: "The angles and the shape stay the same: only the size changes."
  - check:
      type: bug
      code: "working.txt#kim"
      text: "Kim enlarges a triangle. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: enlarge-angles-grow
      explain: "Line 3: the angles stay at 40°, 60°, 80° because the shape is the same. If all three doubled they would add to 360°."
```

### Kept and changed

```worked
\text{angles: } 40°, 60°, 80° \to 40°, 60°, 80° :: Kept: the shape is the same.
\text{sides: } 3, 4, 5 \to 6, 8, 10 :: Changed: every side is multiplied by 2.
\text{perimeter: } 12 \to 24 :: Also multiplied by 2.
\text{area: } 6 \to 24 :: Changed by more: 2 × 2 = 4 times bigger.
```

### Keep and change

### Find the mistake

Read Kim's working. Which line changes the angles?

## Modify: change the factor

```step
stage: modify
insight: "A factor between 0 and 1 shrinks the shape, and unequal stretching is not an enlargement."
tasks:
  - hint: ["Multiply every length by 0.5.", "A scale factor under 1 shrinks a shape."]
    check: { type: number, q: "A side is $10$ cm. It is enlarged with a scale factor of $0.5$. How long is it now? (cm)", answer: 5, explain: "10 × 0.5 = 5 cm: a reduction is an enlargement with a factor below 1." }
  - hint: ["Divide the new length by the old.", "15 ÷ 6."]
    check: { type: number, q: "A side of $6$ cm becomes $15$ cm. What is the scale factor?", answer: 2.5, tolerance: 0.001, explain: "15 ÷ 6 = 2.5." }
  - hint: ["Does every length get the same factor?", "Compare 1920 ÷ 1080 with 2400 ÷ 1080."]
    check: { type: question, q: "A $1920$ by $1080$ picture is stretched to $2400$ by $1080$. Is that an enlargement?", options: ["No: the width grew by more than the height, so the shape changed", "Yes: it is bigger", "Yes: the height is the same", "Can't tell"], answer: 0, feedback: [null, "Bigger isn't enough: every length needs the same factor.", "The width was multiplied by 1.25 and the height by 1.", "You can tell: the factors differ."], explain: "2400 ÷ 1920 = 1.25 but 1080 ÷ 1080 = 1. The factors aren't the same, so it's stretched, not enlarged." }
```

### A smaller copy

### The factor

### Is it an enlargement

## Practise: keep and change

```step
stage: practise
insight: "Using the scale factor on lengths and remembering the angles stay."
tasks:
  - check:
      type: number
      q: "A triangle has a 50° angle. It is enlarged by a scale factor of 4. What is that angle now? (degrees)"
      answer: 50
      explain: "Angles are kept."
  - check:
      type: number
      q: "A rectangle is 5 cm by 2 cm. Enlarge it by a scale factor of 3. What is its perimeter? (cm)"
      answer: 42
      explain: "The new sides are 15 and 6, so the perimeter is 2 × (15 + 6) = 42."
    smaller:
      check: { type: "number", q: "What are the new side lengths after multiplying 5 and 2 by 3? Give the longer one.", answer: 15, explain: "5 × 3 = 15, 2 × 3 = 6." }
  - check:
      type: number
      q: "Review: tan⁻¹ of 1 is what angle?"
      answer: 45
      tolerance: 0.5
      explain: "tan 45° = 1."
```

### An angle

### The perimeter

### Review

## Make: fit the screen

```step
stage: make
insight: "Returning to the screens: check whether a scale factor takes one screen shape to the other."
tasks:
  - hint: ["Divide each length of the phone by the matching length of the video.", "Compare the two factors."]
    check:
      type: reasoning
      paper: true
      q: "A video is 1920 by 1080. A phone screen is 2400 by 1080. Scale the video so its width is 2400. How tall is it? (Screen sizes are examples.)"
      steps:
        - ["$2400 \\div 1920 = 1.25$", "the scale factor for the width"]
        - ["$1080 \\times 1.25 = 1350$", "multiply the height by the same factor"]
        - ["1350 pixels, which is taller than 1080", "it doesn't fit"]
      answer: "1350"
      answerLabel: "Height (pixels)"
      tolerance: 0.5
      feedback:
        - ["1080", "That is the original height. Multiply it by the same factor as the width."]
        - ["1.25", "That's the scale factor. Use it on the height."]
      criteria:
        - "I found one scale factor from the width."
        - "I used the same factor on the height."
        - "I compared with the screen's height."
      explain: "1080 × 1.25 = 1350, but the screen is only 1080 tall, so the video has to be smaller or cropped."
  - check:
      type: question
      q: "So how does a video fill a screen of a different shape?"
      options: ["It leaves bars or crops, because one scale factor can't fit both lengths", "It changes the angles", "It uses a different scale factor for each side", "It always fits"]
      answer: 0
      feedback: [null, "Angles stay the same in an enlargement.", "Different factors would stretch the picture.", "Only the same shape fits exactly."]
      explain: "An enlargement keeps the shape, so a different-shaped screen leaves bars or crops the picture (or stretches it)."
```

### The height

### What the screen does

**Also used in**

- **Photos and posters.** Enlarging a photo keeps the shape; cropping changes it.
- **Maps.** Every length on a map is scaled by the same factor.
- **Next lesson.** What happens to area and volume.
