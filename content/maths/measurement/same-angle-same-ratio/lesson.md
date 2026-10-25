---
order: 22
unit: trig9
node: AC9M9SP01 n2
uses: [AC9M9SP01 n1, AC9M8SP01 n1]
assumes: [AC9M9SP01 n1]
connection: shadow-height
title: Same angle, same ratio
summary: "Make a right-angled triangle bigger without changing its angle and every side grows by the same factor, so the ratio of any two sides stays the same. That is why trigonometry works."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A tree and a person cast shadows at the same moment. Why can you find the tree's height from the two shadows?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8374
  url: http://127.0.0.1:8374/index.html
  readySelector: "#board"
  layout: full
---
Stand next to a tree on a sunny day. You and the tree both make a shadow, and the sun hits both at the same angle. Those two triangles are the same shape, one bigger than the other. Have a guess how that helps, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A person and a tree stand side by side with shadows on the ground. The sun's rays reach the top of each at the same angle. The person is 1.5 m tall with a 2 m shadow. The tree's shadow is 12 m. Its height is unknown."><svg viewBox="0 0 360 190" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="160" x2="350" y2="160" stroke-width="1"/><line x1="90" y1="160" x2="90" y2="130" stroke="#D85A30" stroke-width="3"/><line x1="90" y1="130" x2="130" y2="160" stroke-width="1" stroke-dasharray="4 3"/><line x1="200" y1="160" x2="200" y2="40" stroke="#D85A30" stroke-width="4"/><line x1="200" y1="40" x2="320" y2="160" stroke-width="1" stroke-dasharray="4 3"/><text x="40" y="145" fill="currentColor" stroke="none">1.5 m</text><text x="92" y="178" fill="currentColor" stroke="none">2 m</text><text x="160" y="100" fill="currentColor" stroke="none">?</text><text x="250" y="178" fill="currentColor" stroke="none">12 m</text></svg></figure>

## Predict: a bigger copy

```step
stage: predict
insight: "Finding the opposite side of a copy twice the size shows whether students scale all sides together or add the same amount."
check:
  type: predict
  q: "A right-angled triangle has an opposite side of 3 and a hypotenuse of 5. A bigger copy with the same angles has a hypotenuse of 10. How long is its opposite side?"
  options:
    - "6"
    - "8"
    - "5"
    - "7"
  actual: "6. The hypotenuse doubled (5 to 10), so every side doubles: 3 becomes 6. Adding 5 to both sides (8) would change the shape."
```

## Run: change the size

```step
stage: run
insight: "Changing the size changes every side, but opposite ÷ hypotenuse stays the same: the angle sets the ratio."
try: { playground: board, starter: "same.yml#run", height: 560 }
check: { type: board, text: "Set $t$ to $35$ and then change only $h$. What happens to the sine ratio? Set $h$ to $10$.", when: "t = 35 and h = 10" }
```

## Investigate: why the ratio is fixed

```step
stage: investigate
insight: "Every side of the bigger triangle is the same multiple of the smaller one, so any two sides have the same ratio. The angle alone decides it."
tasks:
  - check:
      type: number
      q: "A triangle has opposite 3 and hypotenuse 5. What is opposite ÷ hypotenuse?"
      answer: 0.6
      tolerance: 0.001
      explain: "3 ÷ 5 = 0.6."
    smaller:
      check: { type: "number", q: "What is $3 \\div 5$?", answer: 0.6, tolerance: 0.001, explain: "3 ÷ 5 = 0.6." }
  - check:
      type: number
      q: "A bigger copy has opposite 6 and hypotenuse 10. What is opposite ÷ hypotenuse?"
      answer: 0.6
      tolerance: 0.001
      explain: "6 ÷ 10 = 0.6. The same ratio: both sides doubled."
  - check:
      type: bug
      code: "working.txt#ana"
      text: "Ana compares a triangle with its bigger copy. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: bigger-triangle-bigger-ratio
      explain: "Line 4: both sides doubled, so the ratio stayed the same. A bigger triangle doesn't mean a bigger ratio."
```

### Doubling

```worked
3 \text{ and } 5 :: The small triangle's opposite and hypotenuse.
\times 2 \Rightarrow 6 \text{ and } 10 :: The bigger copy: every side doubles.
3 \div 5 = 0.6 :: The small triangle's ratio.
6 \div 10 = 0.6 :: The big triangle's ratio.
\text{same angle} \Rightarrow \text{same ratio} :: The angle decides the ratio, not the size.
```

### The bigger copy

### Find the mistake

Read Ana's working. Which line says the ratio changes?

## Modify: scale it

```step
stage: modify
insight: "Using the fixed ratio to find a side of a different-sized copy shows that the ratio is a tool, not just a fact."
tasks:
  - hint: ["The ratio is 0.6, opposite ÷ hypotenuse.", "opposite = 0.6 × hypotenuse."]
    check: { type: number, q: "The ratio opposite ÷ hypotenuse is $0.6$ for this angle. A triangle at this angle has a hypotenuse of $20$. What is the opposite side?", answer: 12, explain: "0.6 × 20 = 12." }
  - hint: ["Divide the opposite by the ratio.", "9 ÷ 0.6."]
    check: { type: number, q: "A triangle at this angle has an opposite side of $9$. What is the hypotenuse?", answer: 15, explain: "9 ÷ 0.6 = 15." }
  - hint: ["A different angle needs a different ratio.", "Look at the board with a bigger angle."]
    check: { type: question, q: "A triangle has a bigger angle than the first one. Is opposite ÷ hypotenuse bigger or smaller than 0.6?", options: ["Bigger: a bigger angle has a bigger opposite side", "Smaller", "The same", "It depends on the size"], answer: 0, feedback: [null, "A bigger angle opens up the opposite side.", "Only the same angle gives the same ratio.", "The size doesn't change the ratio."], explain: "As the angle grows, the opposite side grows relative to the hypotenuse." }
```

### Find the opposite

### Find the hypotenuse

### A different angle

## Practise: use the ratio

```step
stage: practise
insight: "Scaling sides with a fixed ratio."
tasks:
  - check:
      type: number
      q: "A triangle has opposite 4 and hypotenuse 10. What is opposite ÷ hypotenuse?"
      answer: 0.4
      tolerance: 0.001
      explain: "4 ÷ 10 = 0.4."
  - check:
      type: number
      q: "A copy of that triangle has hypotenuse 25. What is its opposite side?"
      answer: 10
      explain: "0.4 × 25 = 10."
    smaller:
      check: { type: "number", q: "What is $0.4 \\times 25$?", answer: 10, explain: "0.4 × 25 = 10." }
  - check:
      type: number
      q: "Review: what is the hypotenuse of a right-angled triangle with sides 6 and 8?"
      answer: 10
      explain: "6² + 8² = 100, so the hypotenuse is 10."
```

### The ratio

### A bigger copy

### Review

## Make: the tree and the shadow

```step
stage: make
insight: "Returning to the tree: the shadow triangles share an angle, so their sides are in the same ratio."
tasks:
  - hint: ["Height ÷ shadow is the same for both.", "1.5 ÷ 2 = 0.75."]
    check:
      type: reasoning
      paper: true
      q: "A person 1.5 m tall casts a 2 m shadow. At the same moment the tree's shadow is 12 m long. How tall is the tree? (The lengths are made up for the task.)"
      steps:
        - ["$1.5 \\div 2 = 0.75$", "height ÷ shadow for the person"]
        - ["$0.75 \\times 12 = 9$", "the same ratio for the tree"]
        - ["9 m", "the tree's height"]
      answer: "9"
      answerLabel: "Tree height (m)"
      tolerance: 0.001
      feedback:
        - ["0.75", "That's the ratio. Multiply it by the tree's shadow."]
        - ["12", "That's the tree's shadow, not its height."]
      criteria:
        - "I found the ratio from the person."
        - "I used the same ratio for the tree."
        - "I gave the answer in metres."
      explain: "0.75 × 12 = 9 m."
  - check:
      type: question
      q: "Why can you use the person's ratio for the tree?"
      options: ["The sun's angle is the same for both, so the triangles have the same ratio", "The tree and the person are the same height", "The shadows are the same length", "The ground is flat"]
      answer: 0
      feedback: [null, "They aren't: that's what we're finding out.", "The tree's shadow is 12 m and the person's is 2 m.", "Flat ground matters, but it's the angle that fixes the ratio."]
      explain: "The same sun angle makes the two triangles similar, so height ÷ shadow is the same for both."
```

### The tree's height

### Why it works

Does the trick fail on a slope? Yes: the ground would change the angle. The lengths here are made up for the task.

**Also used in**

- **Photography.** A smaller print keeps the same angles and the same ratios.
- **Maps and models.** Scale drawings are similar to the real thing.
- **Next lesson.** Giving each ratio a name: sine, cosine and tangent.
