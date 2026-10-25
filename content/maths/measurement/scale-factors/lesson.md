---
order: 46
unit: scale10
node: AC9M10M05 n1
uses: [AC9M9SP02 n1, AC9M9SP02 n2]
assumes: [AC9M9SP02 n1]
connection: floor-plan
title: Scale factors
summary: "A scale such as 1 : 100 is a scale factor. To go from a plan to the real thing, multiply by it; to go from the real thing to the plan, divide. Change units last."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A plan says 1 : 100. What does that actually promise?"
---
A bedroom plan is drawn at a scale of 1 : 100. The bed on it is 2 cm long. Have a guess how long the real bed is, and we'll come back to it at the end. (The plan is made up for the task.)

<figure class="situation" role="img" aria-label="A bedroom drawn from above. The bed is a rectangle 2 centimetres long on the plan. A label says scale 1 to 100, and a question mark asks how long the real bed is."><svg viewBox="0 0 380 200" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="30" y="30" width="250" height="140" stroke-width="2.4"/><path d="M110 170 h40" stroke="#fff" stroke-width="4"/><rect x="50" y="50" width="80" height="48" stroke-width="1.8" fill="#378ADD" fill-opacity="0.25"/><text x="90" y="79" text-anchor="middle" fill="currentColor" stroke="none">bed</text><path d="M50 108 h80" stroke-width="1.4"/><text x="105" y="126" text-anchor="middle" fill="currentColor" stroke="none">2 cm on the plan</text><text x="330" y="90" text-anchor="middle" fill="currentColor" stroke="none">Scale</text><text x="330" y="110" text-anchor="middle" fill="currentColor" stroke="none" font-size="17">1 : 100</text><text x="330" y="150" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">? m</text></svg></figure>

(The plan above is not drawn to scale on your screen, so use the numbers, not a ruler.)

## Predict: the real bed

```step
stage: predict
insight: "Choosing the real length of a 2 cm bed at 1 : 100 shows who forgets to change units afterwards and who divides instead of multiplies."
check:
  type: predict
  q: "A plan is drawn at 1 : 100. The bed on it is 2 cm long. How long is the real bed?"
  options:
    - "2 m"
    - "200 m"
    - "0.02 m"
    - "102 cm"
  actual: "2 m. Every length on the plan is 100 times smaller than the real one, so the real bed is 2 × 100 = 200 cm, which is 2 m."
```

## Run: the scale factor

```step
stage: run
insight: "A scale of 1 : 100 means 1 unit on the plan is 100 of the same unit in real life. The scale factor from plan to real is 100."
check: { type: number, q: "The bed is $2$ cm on the plan and $200$ cm in real life. What is the scale factor from plan to real?", answer: 100, explain: "200 ÷ 2 = 100. That is the 100 in 1 : 100." }
```

## Investigate: both directions

```step
stage: investigate
insight: "Plan to real multiplies by the scale factor and real to plan divides by it, then the unit is changed to one that suits. Ivy divides when she should multiply."
tasks:
  - hint: ["Multiply by 50, then change to metres.", "5 × 50 = 250 cm."]
    check:
      type: reasoning
      paper: true
      q: "A plan is drawn at 1 : 50. A wall is 5 cm long on the plan. How long is the real wall? (m)"
      steps:
        - ["$5 \\times 50$", "plan to real: multiply by the scale factor"]
        - ["$= 250$ cm", "the answer is in the plan's unit, centimetres"]
        - ["$250 \\text{ cm} = 2.5$ m", "change to metres last"]
      answer: "2.5"
      answerLabel: "Real wall (m)"
      tolerance: 0.001
      feedback:
        - ["250", "That is in centimetres. Change to metres: divide by 100."]
        - ["0.1", "That divides by 50. The real wall is bigger than the plan, so multiply."]
      criteria:
        - "I multiplied, because the real wall is bigger than the plan."
        - "I changed centimetres to metres at the end."
      explain: "5 × 50 = 250 cm = 2.5 m."
  - check:
      type: bug
      code: "working.txt#ivy"
      text: "Ivy finds the real length of a wall drawn 5 cm long at 1 : 50. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: scale-wrong-direction
      explain: "Line 3: the real wall is bigger than the plan, so multiply by 50. 5 × 50 = 250 cm, which is 2.5 m."
  - hint: ["1 : 100 compares the plan with the real thing, in that order."]
    check:
      type: question
      q: "What does a scale of 1 : 100 mean?"
      options:
        - "1 cm on the plan is 100 cm in real life"
        - "1 cm in real life is 100 cm on the plan"
        - "The plan is 100 times bigger than the real thing"
        - "100 cm on the plan is 1 cm in real life"
      answer: 0
      feedback:
        - null
        - "That is the wrong way round: the real thing is bigger."
        - "The plan is smaller."
        - "That is the wrong way round."
      explain: "The first number is the plan, the second is real life: 1 cm on the plan stands for 100 cm."
  - hint: ["Real to plan: divide.", "360 cm ÷ 100."]
    check: { type: number, q: "The real wall is $3.6$ m. At 1 : 100, how long is it on the plan? (cm)", answer: 3.6, tolerance: 0.01, explain: "3.6 m = 360 cm, and 360 ÷ 100 = 3.6 cm." }
```

### A wall at 1 : 50

```worked
1 : 100 \;\Rightarrow\; \text{real} = \text{plan} \times 100 :: Plan to real: multiply by the scale factor.
2.5 \times 100 = 250 \text{ cm} :: The answer is in the same unit as the plan.
250 \text{ cm} = 2.5 \text{ m} :: Change to a sensible unit last.
\text{real } 3.6 \text{ m} = 360 \text{ cm} \to 360 \div 100 = 3.6 \text{ cm} :: Real to plan: divide.
```

### Find the mistake

Read Ivy's working. Is the real wall bigger or smaller than the plan?

### Which way round

### On the plan

## Modify: other scales and areas

```step
stage: modify
insight: "Changing the scale changes the size of the multiplier, and areas use the scale factor squared."
tasks:
  - hint: ["Multiply by 50 first.", "3 × 50 = 150 cm."]
    check: { type: number, q: "At a scale of 1 : 50, a line is $3$ cm on the plan. How long is the real thing? (m)", answer: 1.5, tolerance: 0.001, explain: "3 × 50 = 150 cm = 1.5 m." }
    smaller:
      check: { type: "number", q: "What is $3 \\times 50$?", answer: 150, explain: "3 × 50 = 150." }
  - hint: ["Multiply by 20 000, then change to kilometres.", "1 km is 100 000 cm."]
    check: { type: number, q: "Edge case: a map is drawn at 1 : 20 000. A path is $4.5$ cm long on the map. How long is the real path? (km)", answer: 0.9, tolerance: 0.01, explain: "4.5 × 20 000 = 90 000 cm, and 100 000 cm is 1 km, so 0.9 km." }
    smaller:
      check: { type: "number", q: "How many centimetres are in $1$ km?", answer: 100000, explain: "1 km = 1000 m = 100 000 cm." }
  - hint: ["Real lengths first: 4 cm and 3 cm at 1 : 100.", "Then multiply the real lengths."]
    check: { type: number, q: "At 1 : 100, a room is $4$ cm by $3$ cm on the plan. What is the real floor area? (m²)", answer: 12, tolerance: 0.01, explain: "The real room is 4 m by 3 m, so 12 m². Scaling the plan area, 12 cm², by 100 would be wrong: areas scale by 100 × 100 = 10 000, and 12 cm² × 10 000 = 12 m²." }
```

### Three centimetres

### A map

### An area

## Practise: scales

```step
stage: practise
insight: "Converting plan to real and real to plan at different scales, and finding the scale from two lengths."
tasks:
  - hint: ["Multiply by 100, then to metres."]
    check: { type: number, q: "At 1 : 100, a wall is $7.2$ cm on the plan. How long is it in real life? (m)", answer: 7.2, tolerance: 0.01, explain: "7.2 × 100 = 720 cm = 7.2 m." }
  - hint: ["Real to plan: divide by 50."]
    check: { type: number, q: "At 1 : 50, a real wall is $4$ m long. How long is it on the plan? (cm)", answer: 8, tolerance: 0.01, explain: "4 m = 400 cm, and 400 ÷ 50 = 8 cm." }
    smaller:
      check: { type: "number", q: "How many centimetres is $4$ m?", answer: 400, explain: "4 × 100 = 400." }
  - hint: ["Put both in the same unit, then divide real by model.", "4.8 m = 480 cm."]
    check: { type: number, q: "A model car is $12$ cm long. The real car is $4.8$ m long. What is the scale factor from model to real?", answer: 40, tolerance: 0.01, explain: "4.8 m = 480 cm and 480 ÷ 12 = 40, so the scale is 1 : 40." }
    smaller:
      check: { type: "number", q: "The real car is $4.8$ m long. How many centimetres is that?", answer: 480, explain: "4.8 × 100 = 480." }
  - hint: ["Area is the scale factor squared."]
    check: { type: number, q: "Review: a shape is enlarged with every length multiplied by $3$. By what number is its area multiplied?", answer: 9, explain: "Area scales with the square of the scale factor: 3 × 3 = 9." }
```

### A wall

### A real wall

### A model car

### Review

## Make: the bedroom

```step
stage: make
insight: "Back to the bedroom: reading its sides off the plan at 1 : 100 gives the real floor area, and the area is not the plan area times 100."
tasks:
  - hint: ["Multiply each side by 100 first.", "420 cm and 350 cm, then change to metres."]
    check:
      type: reasoning
      paper: true
      q: "On the 1 : 100 plan the bedroom is 4.2 cm by 3.5 cm. What is the real floor area? (m²)"
      steps:
        - ["$4.2 \\times 100 = 420$ cm and $3.5 \\times 100 = 350$ cm", "plan to real: multiply each side by the scale factor"]
        - ["$4.2$ m and $3.5$ m", "change to metres"]
        - ["$4.2 \\times 3.5 = 14.7$", "area in square metres"]
      answer: "14.7"
      answerLabel: "Floor area (m²)"
      tolerance: 0.01
      feedback:
        - ["1470", "That multiplies the plan area, 14.7 cm², by 100. Areas scale by 100 × 100, so first find the real sides."]
        - ["147000", "That is in square centimetres. 10 000 cm² make 1 m²."]
      criteria:
        - "I multiplied each side by the scale factor."
        - "I changed to metres before finding the area."
      explain: "4.2 m × 3.5 m = 14.7 m²."
  - check:
      type: question
      q: "The plan shows the bed as 2 cm long. What can't you tell from the plan?"
      options:
        - "How high the bed is"
        - "How long the bed is"
        - "Which wall the bed is against"
        - "How big the room is"
      answer: 0
      feedback:
        - null
        - "The plan gives the length: 2 cm × 100 = 2 m."
        - "The plan shows where the bed is."
        - "The room's sides can be read off the plan."
      explain: "A plan is a view from above, so it shows lengths and widths but not heights."
```

### Floor area

Work this out on paper first, then type your answer.

### What a plan hides

The plan and its measurements are made up for the task.

**Also used in**

- **Building.** Architects' plans are drawn at 1 : 50 or 1 : 100; maps use much larger scale factors.
- **Models.** A model train or an architect's model has a scale: measure one part and you know the rest.
- **Next lesson.** Using a plan: reading lengths off a plan to decide whether something fits.
