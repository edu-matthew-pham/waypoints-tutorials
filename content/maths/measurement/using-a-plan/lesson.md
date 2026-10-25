---
order: 47
unit: scale10
node: AC9M10M05 n2
uses: [AC9M10M05 n1, AC9M10M04 n1]
assumes: [AC9M10M05 n1]
connection: floor-plan
title: Using a plan
summary: "Read a length off a plan, convert it with the scale, and compare it with the real thing you want to fit. A plan read to the nearest millimetre is out by a little, and the scale multiplies that."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A plan, a ruler and a new sofa. Will it fit?"
---
A living room plan is drawn at 1 : 50. The wall between the corner and the door measures 3.4 cm on the plan. You want to put a 2.2 m sofa along it. Have a guess whether it fits, and we'll come back to it at the end. (The plan and the sofa are made up for the task.)

<figure class="situation" role="img" aria-label="A living room drawn from above at a scale of 1 to 50. The bottom wall runs from the corner to a door gap, and that stretch measures 3.4 centimetres on the plan. A sofa, 2.2 metres long in real life, is drawn beside it with a question mark."><svg viewBox="0 0 400 214" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M30 30 H370 V170 H230 M190 170 H30 Z" stroke-width="3"/><path d="M190 170 H230" stroke-width="1" stroke-dasharray="4 3"/><path d="M190 170 Q190 130 230 130" stroke-width="1" stroke-dasharray="3 3"/><path d="M30 200 H190" stroke-width="1.4"/><path d="M30 194 v12 M190 194 v12" stroke-width="1.4"/><text x="110" y="192" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">3.4 cm on the plan</text><text x="210" y="196" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">door</text><text x="200" y="90" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">Sofa 2.2 m: fits?</text><text x="340" y="190" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">scale 1 : 50</text></svg></figure>

## Predict: does it fit

```step
stage: predict
insight: "Deciding whether the sofa fits before working it out shows who reads the plan's number as real centimetres and who converts with the scale."
check:
  type: predict
  q: "The plan is at 1 : 50 and the wall measures 3.4 cm. The sofa is 2.2 m long. Does the sofa fit along the wall?"
  options:
    - "No: the wall is only 1.7 m"
    - "Yes: the wall is 3.4 m"
    - "Yes: the wall is 170 m"
    - "Only just: the wall is 2.2 m"
  actual: "No. 3.4 × 50 = 170 cm = 1.7 m, which is shorter than the 2.2 m sofa."
```

## Run: read the plan

```step
stage: run
insight: "To use a plan you read a length with a ruler, multiply by the scale, and change to metres."
check: { type: number, q: "The wall is $3.4$ cm on a plan at $1 : 50$. How long is the real wall? (m)", answer: 1.7, tolerance: 0.001, explain: "3.4 × 50 = 170 cm = 1.7 m." }
```

## Investigate: reading with care

```step
stage: investigate
insight: "A decision from a plan needs the real lengths in metres. Leo multiplies correctly and then names the wrong unit."
tasks:
  - hint: ["Multiply by 50 first.", "8.4 × 50 = 420 cm."]
    check:
      type: reasoning
      paper: true
      q: "The long wall is 8.4 cm on the 1 : 50 plan, and a door gap takes 0.9 m of it. How much wall is left for furniture? (m)"
      steps:
        - ["$8.4 \\times 50 = 420$ cm $= 4.2$ m", "plan to real, then to metres"]
        - ["$4.2 - 0.9$", "take away the door gap"]
        - ["$= 3.3$", "work it out"]
      answer: "3.3"
      answerLabel: "Wall left (m)"
      tolerance: 0.001
      feedback:
        - ["4.2", "That is the whole wall. The door gap takes 0.9 m of it."]
        - ["420", "That is in centimetres, and the door gap is not taken off."]
      criteria:
        - "I converted the plan length to metres."
        - "I took away the door gap."
      explain: "8.4 × 50 = 420 cm = 4.2 m, and 4.2 − 0.9 = 3.3 m."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo checks whether a 2.2 m sofa fits along the long wall, drawn 8.4 cm at 1 : 50. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: plan-units-unconverted
      explain: "Line 4: 420 is in centimetres, because the plan was in centimetres. The wall is 4.2 m, which still fits a 2.2 m sofa but not by the amount Leo thinks."
  - hint: ["Multiply the door's plan length by 50."]
    check: { type: number, q: "The door gap measures $1.8$ cm on the $1 : 50$ plan. How wide is the real door gap? (m)", answer: 0.9, tolerance: 0.001, explain: "1.8 × 50 = 90 cm = 0.9 m." }
  - hint: ["Compare 3.3 m left with the sofa."]
    check:
      type: question
      q: "3.3 m of wall is left and the sofa is 2.2 m. Does the sofa fit, and how much is spare?"
      options:
        - "Yes, with 1.1 m spare"
        - "Yes, with 3.3 m spare"
        - "No: the sofa is too long"
        - "Only just, with nothing spare"
      answer: 0
      feedback:
        - null
        - "3.3 m is the wall left, not the spare. Take away the sofa."
        - "The sofa is shorter than the wall left."
        - "3.3 − 2.2 = 1.1."
      explain: "3.3 − 2.2 = 1.1 m spare."
```

### Wall left

```worked
\text{plan: wall } 8.4 \text{ cm},\; 1 : 50 :: Read the plan with a ruler, then use the scale.
8.4 \times 50 = 420 \text{ cm} = 4.2 \text{ m} :: Plan to real, then to metres.
4.2 - 0.9 = 3.3 \text{ m} :: Take away the door gap.
3.3 \ge 2.2 \Rightarrow \text{fits} :: Compare with what you want to fit.
```

### Find the mistake

Read Leo's working. Which line names the wrong unit?

### The door

### Does it fit

## Modify: a different scale, a different reading

```step
stage: modify
insight: "Changing the scale or the accuracy of the reading changes the decision: a plan read to the nearest millimetre is out by a little, and the scale multiplies that."
tasks:
  - hint: ["Change the real wall to centimetres first.", "Then divide by the scale factor."]
    check: { type: number, q: "The same $4.2$ m wall is redrawn at $1 : 100$. How long is it on the plan? (cm)", answer: 4.2, tolerance: 0.01, explain: "4.2 m = 420 cm, and 420 ÷ 100 = 4.2 cm." }
  - hint: ["Nearest millimetre is 0.05 cm either way.", "0.05 × 50."]
    check: { type: number, q: "Edge case: a length is read off the plan with a ruler to the nearest millimetre, so it could be out by $0.05$ cm. At $1 : 50$, how far out could the real length be? (cm)", answer: 2.5, tolerance: 0.01, explain: "0.05 × 50 = 2.5 cm. The scale multiplies the reading's error, so a coarser scale such as 1 : 200 gives 10 cm." }
  - hint: ["Real sides: 4.2 m and 2.8 m.", "Perimeter is 2 × (4.2 + 2.8) = 14, take away the door."]
    check: { type: number, q: "A room is $8.4$ cm by $5.6$ cm on the $1 : 50$ plan. Skirting board goes along every wall except the $0.9$ m door gap. How much do you need? (m)", answer: 13.1, tolerance: 0.01, explain: "The real room is 4.2 m by 2.8 m, so the walls total 2 × (4.2 + 2.8) = 14 m, and 14 − 0.9 = 13.1 m." }
```

### Another scale

### How far out

### Skirting board

## Practise: using plans

```step
stage: practise
insight: "Reading lengths off plans and making a decision from the real lengths."
tasks:
  - hint: ["Multiply by 50 and change to metres."]
    check:
      type: question
      q: "A corridor is $1.9$ cm wide on a $1 : 50$ plan. You want to carry a $1.0$ m wide bed frame through it. Does it fit?"
      options:
        - "No: the corridor is 0.95 m wide"
        - "Yes: the corridor is 1.9 m wide"
        - "Yes: the corridor is 95 m wide"
        - "Only just: the corridor is 1.0 m wide"
      answer: 0
      feedback:
        - null
        - "1.9 is the plan's width in centimetres. Multiply by 50."
        - "95 is in centimetres, not metres."
        - "1.9 × 50 = 95 cm."
      explain: "1.9 × 50 = 95 cm = 0.95 m, narrower than the 1.0 m bed frame."
  - hint: ["Real to plan: divide."]
    check: { type: number, q: "A table is $3.5$ m long. At $1 : 50$, how long is it drawn on the plan? (cm)", answer: 7, tolerance: 0.01, explain: "3.5 m = 350 cm, and 350 ÷ 50 = 7 cm." }
    smaller:
      check: { type: "number", q: "How many centimetres is $3.5$ m?", answer: 350, explain: "3.5 × 100 = 350." }
  - hint: ["Find the real sides first, 3 m and 2 m."]
    check: { type: number, q: "Review: at $1 : 50$ a room is $6$ cm by $4$ cm on the plan. What is its real area? (m²)", answer: 6, tolerance: 0.01, explain: "The real room is 3 m by 2 m, so 6 m²." }
```

### A corridor

### A table

### Review

## Make: where the sofa goes

```step
stage: make
insight: "Back to the sofa: one wall is too short, so the model's question becomes where it can go. State what the plan assumes and check how much a reading error could change the answer."
tasks:
  - hint: ["Use the wall left from before: 3.3 m.", "Sofa 2.2 m and bookcase 1.2 m end to end."]
    check:
      type: reasoning
      paper: true
      q: "You want both the 2.2 m sofa and a 1.2 m bookcase end to end along the long wall, which has 3.3 m left after the door gap. How much space is spare? (m, negative if they don't fit)"
      steps:
        - ["$2.2 + 1.2 = 3.4$", "the length of the two together"]
        - ["$3.3 - 3.4$", "space left minus space needed"]
        - ["$= -0.1$", "negative means short by 0.1 m"]
      answer: "-0.1"
      answerLabel: "Spare space (m)"
      tolerance: 0.001
      feedback:
        - ["0.1", "Check the sign: 3.3 is less than 3.4, so they are short, not spare."]
        - ["1.1", "That is the space after the sofa alone. The bookcase takes 1.2 m too."]
      criteria:
        - "I added the lengths of the sofa and bookcase."
        - "I compared that with the 3.3 m left."
        - "I said what I assumed, for example that the plan is accurate and nothing else is on the wall."
      explain: "3.3 − 3.4 = −0.1 m, so the two are 10 cm too long for the wall, and the plan's reading error (about 2.5 cm) is too small to change that."
  - check:
      type: question
      q: "The plan can be read to within about 2.5 cm. Does that change the decision that the sofa and bookcase don't fit?"
      options:
        - "No: they are 10 cm short, more than 2.5 cm"
        - "Yes: 2.5 cm could be enough to make them fit"
        - "Yes: a plan is never accurate enough"
        - "No: the plan error doesn't matter at all"
      answer: 0
      feedback:
        - null
        - "They miss by 10 cm. 2.5 cm out in one direction leaves them 7.5 cm short."
        - "The plan is accurate to a few centimetres, which is enough here."
        - "It matters when the answer is close. Here it is not close."
      explain: "Compare the margin, 10 cm, with the error, 2.5 cm. When the margin is bigger than the error, the decision is safe."
```

### Both on the wall

Work this out on paper first, then type your answer.

### Is it safe

The plan, sofa and bookcase are made up for the task.

**Also used in**

- **Building.** Checking a door or corridor against a plan before you order furniture or fittings.
- **Design.** A modelling task: fit things into a space, say what you assumed, and check how close the answer is.
- **Error.** The reading error of a plan is multiplied by the scale, so a big scale factor makes a small slip big.
