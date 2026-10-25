---
order: 31
unit: error9
node: AC9M9M04 n1
uses: [AC9M9M02 n1]
assumes: [AC9M8M01 n1]
connection: part-tolerance
title: Every measurement is an estimate
summary: "A reading to the nearest millimetre could be up to half a millimetre out either way. The true value is somewhere between a lower bound and an upper bound."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A bolt hole must be 20 mm, give or take 0.05 mm. A measured hole is 20.04 mm. Does it pass?"
---
A factory makes a bolt hole that must be 20 mm, give or take 0.05 mm. An inspector measures one and gets 20.04 mm. Does it pass? Have a guess, and we'll come back to it at the end. (The numbers are made up for the task.)

<figure class="situation" role="img" aria-label="A ruler marked in millimetres with a line at the 24 mm mark, and a shaded band from 23.5 to 24.5 millimetres around it."><svg viewBox="0 0 360 120" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="50" width="320" height="30" stroke-width="1.5"/><g stroke-width="1"><path d="M60 50 v14 M100 50 v14 M140 50 v14 M180 50 v14 M220 50 v14 M260 50 v14 M300 50 v14"/></g><rect x="190" y="30" width="40" height="20" fill="#D85A30" fill-opacity="0.35" stroke="none"/><path d="M210 30 v50" stroke="#D85A30" stroke-width="2"/><text x="180" y="100" fill="currentColor" stroke="none">reads 24 mm</text><text x="168" y="24" fill="currentColor" stroke="none">23.5 to 24.5?</text></svg></figure>

## Predict: how far out

```step
stage: predict
insight: "Choosing the range for a 24 mm reading shows whether students treat a reading as exact or as the nearest mark."
check:
  type: predict
  q: "A ruler with marks every 1 mm reads 24 mm for a length. What could the true length be?"
  options:
    - "Anything from 23.5 mm to 24.5 mm"
    - "Exactly 24 mm"
    - "Anything from 24 mm to 25 mm"
    - "Anything from 23 mm to 25 mm"
  actual: "Anything from 23.5 mm to 24.5 mm. The reading is the nearest mark, so the true length is within half a millimetre of 24 either way."
```

## Run: the bounds

```step
stage: run
insight: "The reading plus or minus half of the smallest mark gives the upper and lower bounds."
check: { type: number, q: "A ruler reads $24$ mm to the nearest mm. What is the lower bound? (mm)", answer: 23.5, tolerance: 0.001, explain: "24 − 0.5 = 23.5 mm." }
```

## Investigate: half the precision

```step
stage: investigate
insight: "The bounds are half the smallest unit either side. A reading is never exact, only closest."
tasks:
  - check:
      type: number
      q: "A tape reads $156$ cm to the nearest cm. What is the upper bound? (cm)"
      answer: 156.5
      tolerance: 0.001
      explain: "156 + 0.5 = 156.5 cm."
    smaller:
      check: { type: "number", q: "What is half of 1 cm? (cm)", answer: 0.5, tolerance: 0.001, explain: "Half of 1 is 0.5." }
  - check:
      type: number
      q: "A scale reads $3.2$ kg to the nearest $0.1$ kg. What is the upper bound? (kg)"
      answer: 3.25
      tolerance: 0.001
      explain: "Half of 0.1 is 0.05, so 3.2 + 0.05 = 3.25 kg."
  - check:
      type: bug
      code: "working.txt#max"
      text: "Max checks a bolt measured to the nearest millimetre. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: measurement-exact
      explain: "Line 2: a reading of 20 mm to the nearest mm only says the true value is between 19.5 and 20.5 mm."
```

### Bounds

```worked
\text{reading } 24 \text{ mm, to the nearest } 1 \text{ mm} :: The smallest mark is 1 mm.
1 \div 2 = 0.5 :: Half the smallest mark.
24 - 0.5 = 23.5 :: Lower bound.
24 + 0.5 = 24.5 :: Upper bound.
23.5 \le \text{true length} < 24.5 :: The true value is in this range.
```

### Half the mark

### Find the mistake

Read Max's working. Which line treats the reading as exact?

## Modify: change the instrument

```step
stage: modify
insight: "A finer instrument has narrower bounds, but never none."
tasks:
  - hint: ["The smallest mark is 0.01 mm.", "Half of that is 0.005."]
    check: { type: number, q: "Calipers read $20.04$ mm to the nearest $0.01$ mm. What is the upper bound? (mm)", answer: 20.045, tolerance: 0.0005, explain: "20.04 + 0.005 = 20.045 mm." }
  - hint: ["The part passes if it's between 19.95 and 20.05.", "Is the upper bound inside?"]
    check: { type: question, q: "The hole must be $20$ mm give or take $0.05$ mm ($19.95$ to $20.05$). The calipers read $20.04$ mm (bounds $20.035$ to $20.045$). Does it pass?", options: ["Yes: the whole range is inside the tolerance", "No: 20.04 is too big", "Only if it's exactly 20", "Can't tell"], answer: 0, feedback: [null, "20.04 is less than 20.05.", "Nothing is exactly 20 in measurement.", "You can tell: both bounds are inside."], explain: "Both 20.035 and 20.045 are between 19.95 and 20.05, so it passes." }
  - hint: ["Compute the upper bound for 20.05.", "20.05 + 0.005."]
    check: { type: question, q: "A second hole reads $20.05$ mm on the same calipers. Does it pass for sure?", options: ["No: its upper bound is 20.055, above the 20.05 limit, so it might fail", "Yes: 20.05 is exactly the limit", "Yes: it is under 20.1", "No: it is exactly 20.05"], answer: 0, feedback: [null, "The true value could be a little above the limit.", "The limit is 20.05, not 20.1.", "Reading isn't exact: the true value may be less."], explain: "The reading is 20.05 but the true value could be up to 20.055, so you can't be certain." }
```

### Upper bound

### Does it pass

### On the limit

## Practise: bounds

```step
stage: practise
insight: "Finding both bounds from a reading and its precision."
tasks:
  - check:
      type: number
      q: "A reading is 12 cm to the nearest cm. What is the lower bound? (cm)"
      answer: 11.5
      tolerance: 0.001
      explain: "12 − 0.5 = 11.5."
  - check:
      type: number
      q: "A reading is 4.6 s to the nearest 0.1 s. What is the upper bound? (s)"
      answer: 4.65
      tolerance: 0.001
      explain: "4.6 + 0.05 = 4.65."
    smaller:
      check: { type: "number", q: "What is half of 0.1?", answer: 0.05, tolerance: 0.001, explain: "Half of 0.1 is 0.05." }
  - check:
      type: number
      q: "Review: a shape's side is 5 cm. It is enlarged with a scale factor of 3. What is the new area if the original area was 4 cm²? (cm²)"
      answer: 36
      explain: "4 × 3² = 36."
```

### Lower bound

### Upper bound

### Review

## Make: does it pass

```step
stage: make
insight: "Returning to the bolt hole: both bounds must sit inside the tolerance for the part to pass for sure."
tasks:
  - hint: ["Half of 0.01 is 0.005.", "Compare the bounds with 19.95 and 20.05."]
    check:
      type: reasoning
      paper: true
      q: "A hole must be 20 mm give or take 0.05 mm. The calipers read 20.04 mm to the nearest 0.01 mm. What is the upper bound of the true diameter? (mm; made up for the task)"
      steps:
        - ["precision $0.01$, half is $0.005$", "half the smallest mark"]
        - ["upper bound $= 20.04 + 0.005 = 20.045$", "add"]
        - ["$20.045 < 20.05$, so it passes", "inside the limit"]
      answer: "20.045"
      answerLabel: "Upper bound (mm)"
      tolerance: 0.0005
      feedback:
        - ["20.04", "That's the reading. Add half the smallest mark."]
        - ["20.05", "That's the tolerance limit. Find the upper bound of the reading."]
      criteria:
        - "I halved the precision."
        - "I added it to the reading."
        - "I compared with the limit."
      explain: "20.04 + 0.005 = 20.045 mm, below 20.05 mm, so the part passes."
  - check:
      type: question
      q: "Why does a good inspector care about the instrument's precision as well as the reading?"
      options: ["The bounds decide whether you can be sure the part passes", "Precision doesn't matter", "Readings are always exact", "Only the limit matters"]
      answer: 0
      feedback: [null, "It can change the decision.", "Every measurement is an estimate.", "Both matter."]
      explain: "The same reading could pass with fine calipers and be uncertain with a coarse ruler."
```

### The upper bound

### Why precision matters

**Also used in**

- **Manufacturing.** Parts are made to a tolerance and checked with calibrated instruments.
- **Science.** Every result has an uncertainty, and good reports give it.
- **Next lesson.** How big the error is, and how it compares.
