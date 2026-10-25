---
order: 32
unit: error9
node: AC9M9M04 n2
uses: [AC9M9M04 n1]
assumes: [AC9M9M04 n1]
connection: part-tolerance
title: Absolute and relative error
summary: "Absolute error is how far a measurement is from the true value. Relative error divides that by the true value, so it shows how big the error is for the size of the thing."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Is a 1 mm mistake a big deal? On a bolt hole, yes. On a house, no."
---
A 1 mm mistake on a bolt hole ruins the part. A 1 mm mistake on a 2 m beam is nothing. The same error means different things for different sizes. Have a guess how to compare them, and we'll come back to it at the end. (The sizes are made up for the task.)

<figure class="situation" role="img" aria-label="A small bolt hole 20 millimetres wide and a long beam 2000 millimetres long, each with a 1 millimetre mark showing the error."><svg viewBox="0 0 360 120" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><circle cx="60" cy="60" r="22" stroke-width="2"/><path d="M82 60 h2" stroke="#D85A30" stroke-width="3"/><rect x="130" y="50" width="210" height="20" stroke-width="1.6" fill="#888780" fill-opacity="0.2"/><path d="M340 50 v20" stroke="#D85A30" stroke-width="3"/><text x="30" y="105" fill="currentColor" stroke="none">20 mm hole</text><text x="190" y="105" fill="currentColor" stroke="none">2000 mm beam</text></svg></figure>

## Predict: which is worse

```step
stage: predict
insight: "Choosing which 1 mm error is worse shows whether students judge by the size of the error alone or by its size compared with the thing."
check:
  type: predict
  q: "A 20 mm hole is made 1 mm too big. A 2000 mm beam is cut 1 mm too long. Which error matters more?"
  options:
    - "The hole: 1 mm is a much bigger share of 20 mm"
    - "The beam: it is longer"
    - "They matter the same: both are 1 mm"
    - "Neither matters"
  actual: "The hole. Both errors are 1 mm, but 1 mm is 1/20 of the hole and only 1/2000 of the beam. The relative error is 100 times bigger for the hole."
```

## Run: find the error

```step
stage: run
insight: "Absolute error is the difference between the measured and the true value, ignoring the sign."
check: { type: number, q: "A hole should be $20$ mm. It is measured as $20.04$ mm. What is the absolute error? (mm)", answer: 0.04, tolerance: 0.001, explain: "|20.04 − 20| = 0.04 mm." }
```

## Investigate: size matters

```step
stage: investigate
insight: "Relative error is the absolute error divided by the true value: a small error on a small thing can be a big relative error."
tasks:
  - check:
      type: number
      q: "The hole's absolute error is $0.04$ mm and its true size is $20$ mm. What is the relative error? (3 decimal places)"
      answer: 0.002
      tolerance: 0.0005
      explain: "0.04 ÷ 20 = 0.002."
    smaller:
      check: { type: "number", q: "What is $0.04 \\div 20$? (3 decimal places)", answer: 0.002, tolerance: 0.0005, explain: "0.04 ÷ 20 = 0.002." }
  - check:
      type: number
      q: "A $2000$ mm beam is out by $1$ mm. What is the relative error? (4 decimal places)"
      answer: 0.0005
      tolerance: 0.00005
      explain: "1 ÷ 2000 = 0.0005."
  - check:
      type: bug
      code: "working.txt#una"
      text: "Una finds the relative error of a hole that is 0.04 mm out. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: relative-error-product
      explain: "Line 3: relative error divides the absolute error by the true value. Multiplying gives a number that grows when it should shrink."
```

### Absolute and relative

```worked
\text{absolute error} = |\text{measured} - \text{true}| :: How far out, in the same unit.
|20.04 - 20| = 0.04 \text{ mm} :: The hole.
\text{relative error} = \dfrac{\text{absolute error}}{\text{true value}} :: How big compared with the thing.
0.04 \div 20 = 0.002 :: The hole's relative error.
1 \div 2000 = 0.0005 :: The beam's relative error.
```

### Divide by the true value

### Find the mistake

Read Una's working. Which line multiplies when it should divide?

## Modify: compare

```step
stage: modify
insight: "Relative errors can be compared when the absolute errors can't."
tasks:
  - hint: ["Divide each error by its own true value.", "Compare 0.002 and 0.0005."]
    check: { type: question, q: "The hole's relative error is $0.002$ and the beam's is $0.0005$. Which measurement is relatively more accurate?", options: ["The beam: its error is the smaller share", "The hole: it is smaller", "They are equal", "Can't tell"], answer: 0, feedback: [null, "The hole's relative error is bigger.", "0.002 is four times 0.0005.", "You can compare relative errors."], explain: "The smaller relative error is the more accurate: the beam's 0.0005." }
  - hint: ["Absolute error first, then divide.", "|9.8 − 10| = 0.2."]
    check: { type: number, q: "A mass should be $10$ kg and is measured as $9.8$ kg. What is the relative error?", answer: 0.02, tolerance: 0.001, explain: "0.2 ÷ 10 = 0.02." }
  - hint: ["Rearrange: absolute error = relative error × true value.", "0.01 × 500."]
    check: { type: number, q: "A $500$ m track is measured with a relative error of $0.01$. How many metres out could it be?", answer: 5, tolerance: 0.001, explain: "0.01 × 500 = 5 m." }
```

### Which is more accurate

### A mass

### Going backwards

## Practise: errors

```step
stage: practise
insight: "Finding absolute and relative error from a measured and a true value."
tasks:
  - check:
      type: number
      q: "A length should be 50 cm and is measured as 49 cm. What is the absolute error? (cm)"
      answer: 1
      explain: "|49 − 50| = 1."
  - check:
      type: number
      q: "What is the relative error of that measurement? (2 decimal places)"
      answer: 0.02
      tolerance: 0.001
      explain: "1 ÷ 50 = 0.02."
    smaller:
      check: { type: "number", q: "What is $1 \\div 50$?", answer: 0.02, tolerance: 0.001, explain: "1 ÷ 50 = 0.02." }
  - check:
      type: number
      q: "Review: a reading is 12 cm to the nearest cm. What is the upper bound? (cm)"
      answer: 12.5
      tolerance: 0.001
      explain: "12 + 0.5 = 12.5."
```

### Absolute

### Relative

### Review

## Make: compare the errors

```step
stage: make
insight: "Returning to the hole and the beam: show with numbers that the same absolute error is not the same relative error."
tasks:
  - hint: ["Divide each 1 mm by its own true size.", "1 ÷ 20 and 1 ÷ 2000."]
    check:
      type: reasoning
      paper: true
      q: "A 20 mm hole and a 2000 mm beam are each out by 1 mm. How many times bigger is the hole's relative error than the beam's? (made up for the task)"
      steps:
        - ["hole: $1 \\div 20 = 0.05$", "relative error of the hole"]
        - ["beam: $1 \\div 2000 = 0.0005$", "relative error of the beam"]
        - ["$0.05 \\div 0.0005 = 100$", "compare"]
      answer: "100"
      answerLabel: "Times bigger"
      tolerance: 0.001
      feedback:
        - ["0.05", "That's the hole's error. Compare it with the beam's."]
        - ["1", "The absolute errors are equal, but the relative errors are not."]
      criteria:
        - "I divided each error by its own size."
        - "I compared the two relative errors."
        - "I explained why they differ."
      explain: "0.05 ÷ 0.0005 = 100. The hole's relative error is 100 times the beam's."
  - check:
      type: question
      q: "Which should an engineer worry about more?"
      options: ["The hole: the same absolute error is a much bigger share", "The beam: it's longer", "They are equal", "Neither"]
      answer: 0
      feedback: [null, "The beam's error is tiny for its size.", "The absolute errors are equal, the relative errors are not.", "A hole 5% out might not fit a bolt."]
      explain: "A 5% error could stop a bolt fitting; 0.05% on a beam is invisible."
```

### How many times bigger

### Which to worry about

**Also used in**

- **Manufacturing and building.** Tolerances are often given as percentages.
- **Science.** Reports quote relative or percentage uncertainty.
- **Next lesson.** Percentage error.
