---
order: 26
unit: trig9
node: AC9M9M03 n3
uses: [AC9M9SP01 n2]
assumes: [AC9M9SP01 n2, AC9M8SP01 n1]
connection: shadow-height
title: Similar triangles and scale
summary: "Similar triangles have the same angles. Multiply every side by the same scale factor to go from one to the other, and the area grows by that factor squared."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A flagpole is too tall to measure, but its shadow isn't. How do you use a stick to find its height?"
---
A person and a flagpole stand in the sun. Each makes a right-angled triangle with its shadow, and the sun's angle is the same for both. So the two triangles are similar: one is a scaled copy of the other. Have a guess how to find the flagpole's height from them, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A person 1.8 metres tall has a shadow 1.2 metres long. A flagpole beside them has a shadow 8 metres long. Its height is marked with a question mark."><svg viewBox="0 0 360 190" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="165" x2="350" y2="165" stroke-width="1"/><line x1="70" y1="165" x2="70" y2="135" stroke="#D85A30" stroke-width="3"/><line x1="70" y1="135" x2="100" y2="165" stroke-width="1" stroke-dasharray="4 3"/><line x1="170" y1="165" x2="170" y2="35" stroke="#D85A30" stroke-width="4"/><line x1="170" y1="35" x2="320" y2="165" stroke-width="1" stroke-dasharray="4 3"/><text x="18" y="150" fill="currentColor" stroke="none">1.8 m</text><text x="72" y="182" fill="currentColor" stroke="none">1.2 m</text><text x="130" y="105" fill="currentColor" stroke="none">?</text><text x="230" y="182" fill="currentColor" stroke="none">8 m</text></svg></figure>

## Predict: scale it up

```step
stage: predict
insight: "Scaling the shortest side to 9 shows whether students multiply every side by the same factor or add the same amount."
check:
  type: predict
  q: "A right-angled triangle has sides 3, 4 and 5. A similar triangle has a shortest side of 9. How long is its longest side?"
  options:
    - "15"
    - "11"
    - "12"
    - "14"
  actual: "15. The shortest side went from 3 to 9, a scale factor of 3, so every side is multiplied by 3: 3, 4, 5 becomes 9, 12, 15. Adding 6 to each side (9, 10, 11) would not keep the shape."
```

## Run: the scale factor

```step
stage: run
insight: "The scale factor is new side ÷ old side, and it is the same for every pair of matching sides."
check: { type: number, q: "A triangle with sides 3, 4, 5 is enlarged so the shortest side is 9. What is the scale factor?", answer: 3, explain: "9 ÷ 3 = 3. Every side is multiplied by 3." }
```

The 3, 4, 5 triangle and the 9, 12, 15 triangle have the same angles. Matching sides go in the same ratio.

## Investigate: matching sides

```step
stage: investigate
insight: "Find the scale factor from one pair of matching sides, then use it on any other side. Area scales by the factor squared."
tasks:
  - check:
      type: number
      q: "Triangle A has sides 3, 4, 5. Triangle B is similar with its longest side 20. What is the scale factor from A to B?"
      answer: 4
      explain: "20 ÷ 5 = 4."
    smaller:
      check: { type: "number", q: "What is $20 \\div 5$?", answer: 4, explain: "20 ÷ 5 = 4." }
  - check:
      type: number
      q: "Using that scale factor, how long is the shortest side of triangle B?"
      answer: 12
      explain: "3 × 4 = 12."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo enlarges the 3, 4, 5 triangle so its longest side is 20. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: similar-by-adding
      explain: "Line 3: she added 15 to every side. A similar triangle needs every side multiplied by the same factor (4), not the same amount added."
```

### Scale factor

```worked
3, 4, 5 \to ?, ?, 20 :: The longest side goes from 5 to 20.
20 \div 5 = 4 :: The scale factor.
3 \times 4 = 12, \quad 4 \times 4 = 16 :: Multiply every side by 4.
\text{area} \times 4^2 = \times 16 :: Area is multiplied by the factor squared.
```

### The factor

### Find the mistake

Read Jo's working. Which line adds instead of multiplying?

## Modify: use the factor

```step
stage: modify
insight: "Changing the factor, or going from big to small, tests that matching sides and the factor are used together."
tasks:
  - hint: ["Find the factor from the matching pair.", "The factor is small this time: a copy that shrinks."]
    check: { type: number, q: "Triangle C has sides 6, 8, 10. Triangle D is similar with its shortest side 3. What is its longest side?", answer: 5, explain: "The factor is 3 ÷ 6 = 0.5, so 10 × 0.5 = 5." }
  - hint: ["Area scales by the factor squared.", "Factor 3 gives 3 × 3."]
    check: { type: number, q: "A triangle has area 6. A similar copy has all sides tripled. What is the area of the copy?", answer: 54, explain: "The area is multiplied by 3² = 9: 6 × 9 = 54." }
  - hint: ["Compare each angle with the matching one.", "Equal angles but a different shape is impossible."]
    check: { type: question, q: "Two triangles have sides 3, 4, 5 and 6, 8, 11. Are they similar?", options: ["No: the factor is 2 for two sides but 2.2 for the third", "Yes: the sides are all bigger", "Yes: 6 and 8 are doubles", "Can't tell"], answer: 0, feedback: [null, "Bigger isn't enough: the factor has to match.", "Two sides doubling isn't enough.", "You can test: 3, 4, 5 doubles to 6, 8, 10."], explain: "Similar triangles need the same factor for every pair. 11 ÷ 5 = 2.2 is not 2." }
```

### A smaller copy

### Area

### Are they similar?

## Practise: scale factors

```step
stage: practise
insight: "Finding the factor from a matching pair and applying it."
tasks:
  - check:
      type: number
      q: "Triangle P has sides 2, 3, 4. Triangle Q is similar with its shortest side 10. What is the scale factor?"
      answer: 5
      explain: "10 ÷ 2 = 5."
  - check:
      type: number
      q: "How long is the longest side of triangle Q?"
      answer: 20
      explain: "4 × 5 = 20."
    smaller:
      check: { type: "number", q: "What is $4 \\times 5$?", answer: 20, explain: "4 × 5 = 20." }
  - check:
      type: number
      q: "Review: a right-angled triangle has hypotenuse 13 and one side 5. How long is the other side?"
      answer: 12
      explain: "13² − 5² = 144, so the side is 12."
```

### The factor

### The longest side

### Review

## Make: the flagpole

```step
stage: make
insight: "Returning to the flagpole: the person and the flagpole make similar triangles, so one scale factor connects every pair of sides."
tasks:
  - hint: ["Scale factor from the shadows: 8 ÷ 1.2.", "Multiply the person's height by it."]
    check:
      type: reasoning
      paper: true
      q: "A person 1.8 m tall casts a 1.2 m shadow. At the same moment the flagpole's shadow is 8 m. How tall is the flagpole? (The lengths are made up for the task.)"
      steps:
        - ["$8 \\div 1.2 = 6.67$", "the scale factor between the shadows"]
        - ["$1.8 \\times 6.67 = 12$", "scale the person's height"]
        - ["12 m", "the flagpole's height"]
      answer: "12"
      answerLabel: "Flagpole height (m)"
      tolerance: 0.05
      feedback:
        - ["8", "That is the flagpole's shadow, not its height."]
        - ["6.67", "That's the scale factor. Multiply the person's height by it."]
      criteria:
        - "I found the factor from matching sides (the two shadows)."
        - "I applied it to the person's height."
        - "I gave the answer in metres."
      explain: "The factor is 8 ÷ 1.2 = 6.67 (exactly 20 ÷ 3). 1.8 × 20 ÷ 3 = 12 m."
  - check:
      type: question
      q: "What would make this method wrong?"
      options: ["Sloping ground, or measuring at different times", "A very tall flagpole", "A short person", "A cloudy day"]
      answer: 0
      feedback: [null, "Tall flagpoles are fine.", "Short people are fine.", "You need the shadows, so cloud is a problem for measuring, but not for the idea."]
      explain: "The two shadows must be made by the sun at the same angle, on level ground."
```

### The height

### When it fails

**Also used in**

- **Maps and plans.** A scale drawing is similar to the real thing.
- **Cameras and photos.** Enlarging keeps angles and changes sizes.
- **Next lesson.** Using Pythagoras, trigonometry and scale together.
