---
order: 12
unit: sci9
node: AC9M9M02 n3
uses: [AC9M9M02 n1, AC9M9M02 n2]
assumes: [AC9M8N02 n1, AC9M8N02 n2, AC9M9A01 n1, AC9M9A01 n2]
connection: microgram-dose
title: Real measurements
summary: "Prefixes are powers of 10, so converting units is multiplying or dividing by a power of 10. A slip of a thousand is a real error."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A label says 250 micrograms. A note says 0.25 milligrams. Same dose, or not?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8349
  url: http://127.0.0.1:8349/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: units.yml#explain-pic, caption: "$250$ micrograms is $2.5 \\times 10^{2}$ µg. A microgram is $10^{-3}$ mg, so it's $2.5 \\times 10^{-1} = 0.25$ mg." }
explainClip:
  query: { code: "@units.yml#explain", fresh: 1, id: explain }
  caption: "Micrograms to milligrams: the power drops by 3"
  say: "A microgram is a thousandth of a milligram. The power drops by three."
  clip:
    - caption: { text: "250 µg = 2.5 × 10² µg.", say: "Two hundred fifty micrograms is two point five times ten squared." }
    - wait: 900
    - caption: { text: "1 µg = 10⁻³ mg: the power drops by 3.", say: "One microgram is ten to the minus three milligrams." }
    - click: Make k smaller
    - click: Make k smaller
    - click: Make k smaller
    - wait: 900
    - caption: { text: "2.5 × 10⁻¹ = 0.25 mg.", say: "Two point five times ten to the minus one is point two five milligrams." }
    - wait: 800
---
Prefixes like milli and micro are powers of 10. That makes converting units a job for scientific notation.

## Predict: label and note

```step
stage: predict
insight: "Committing to whether the two doses agree shows who sees that a milligram is a thousand micrograms, and who matches 250 with 0.25 by the digits."
check:
  type: predict
  q: "A medicine label says the dose is 250 micrograms. A doctor's note says 0.25 milligrams. Are they the same dose?"
  options:
    - "Yes: they're the same"
    - "No: the label is 1000 times the note"
    - "No: the note is 1000 times the label"
    - "No: they're 100 times apart"
  actual: "Yes. A milligram is 1000 micrograms (10³ µg), so 0.25 mg = 0.25 × 1000 = 250 µg."
```

<figure class="situation" role="img" aria-label="Two small cards. The first, a medicine label, reads: dose 250 micrograms. The second, a doctor's note, reads: dose 0.25 milligrams. An equals sign with a question mark sits between them."><svg viewBox="0 0 400 130" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="15" y="25" width="150" height="80" rx="8" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56"/><text x="90" y="55" text-anchor="middle" fill="currentColor" stroke="none">label</text><text x="90" y="85" text-anchor="middle" fill="currentColor" stroke="none" font-size="16">250 micrograms</text><text x="200" y="72" text-anchor="middle" fill="currentColor" stroke="none" font-size="26">= ?</text><rect x="235" y="25" width="150" height="80" rx="8" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="310" y="55" text-anchor="middle" fill="currentColor" stroke="none">doctor's note</text><text x="310" y="85" text-anchor="middle" fill="currentColor" stroke="none" font-size="16">0.25 milligrams</text></svg></figure>

These are two ways to write one amount, or two different amounts. Which?

## Run: shift the point

```step
stage: run
insight: "Changing the unit changes the number by a power of 10, so converting moves the decimal point."
try: { playground: board, starter: "units.yml#run", height: 600 }
check: { type: board, text: "$0.25$ mg is $2.5 \\times 10^{-1}$ mg. A microgram is a thousandth of a milligram, so there are 1000 times as many micrograms. Set the board to $2.5 \\times 10^{2}$. Was your prediction right?", when: "a = 2.5 and k = 2" }
```

Try a few. A bigger power means a bigger number: that's what happens when you change to a smaller unit.

## Investigate: converting with powers

```step
stage: investigate
insight: "Divide the two powers of 10 to convert between units: milligrams to micrograms is 10⁻³ ÷ 10⁻⁶ = 10³. Dev multiplies the powers instead."
tasks:
  - check:
      type: number
      q: "1 mg is $10^{-3}$ g and 1 µg is $10^{-6}$ g. So 1 mg = $10^{k}$ µg. What's $k$?"
      answer: 3
      explain: "10⁻³ ÷ 10⁻⁶ = 10^(−3 − (−6)) = 10³: a milligram is 1000 micrograms."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev converts 0.25 mg to micrograms. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: prefix-convert-multiply
      explain: "Line 3: to find how many micrograms are in a milligram, divide: 10⁻³ ÷ 10⁻⁶ = 10³. So 0.25 mg = 0.25 × 10³ = 250 µg."
  - check:
      type: question
      q: "Which is the biggest?"
      options: ["$5 \\times 10^{-3}$ g", "$5 \\times 10^{-6}$ g", "$5 \\times 10^{-9}$ g"]
      answer: 0
      feedback: [null, "5 × 10⁻⁶ is a thousand times smaller than 5 × 10⁻³.", "5 × 10⁻⁹ is the smallest."]
      explain: "All have the number part 5, so compare the powers: −3 is the biggest."
```

### Divide the powers

Here's a conversion the other way, from micrograms to milligrams.

```worked
250 \text{ µg} :: The label.
2.5 \times 10^{2} \text{ µg} :: In scientific notation.
1 \text{ µg} = 10^{-3} \text{ mg} :: A microgram is a thousandth of a milligram.
2.5 \times 10^{2} \times 10^{-3} :: Multiply by the power of 10.
2.5 \times 10^{-1} \text{ mg} = 0.25 \text{ mg} :: Add the powers: 2 + (−3) = −1.
```

Now try one on paper: a tablet is 0.5 mg. How many micrograms is that? Write it as $5 \times 10^{k}$ µg and type $k$.

### Find the mistake

Read Dev's working. Should the powers be multiplied or divided?

### Which is the biggest?

## Modify: change the units

```step
stage: modify
insight: "One change at a time: millimetres to nanometres, a made-up measurement from metres, and a ratio of two sizes."
try: { playground: board, starter: "units.yml#vary", height: 620 }
tasks:
  - hint: ["A millimetre is 10⁻³ m and a nanometre is 10⁻⁹ m.", "10⁻³ ÷ 10⁻⁹."]
    check: { type: number, q: "$3$ mm is $3 \\times 10^{k}$ nm. What's $k$?", answer: 6, explain: "1 mm = 10⁻³ ÷ 10⁻⁹ = 10⁶ nm, so 3 mm = 3 × 10⁶ nm." }
    smaller:
      check: { type: "number", q: "Just the powers: what's $-3 - (-9)$?", answer: 6, explain: "−3 + 9 = 6." }
  - hint: ["A nanometre is 10⁻⁹ m.", "Divide: 1.2 × 10⁻⁷ by 10⁻⁹."]
    check: { type: number, q: "A particle is $1.2 \\times 10^{-7}$ m wide. How wide is it in nanometres?", answer: 120, explain: "1.2 × 10⁻⁷ ÷ 10⁻⁹ = 1.2 × 10² = 120 nm." }
  - hint: ["Divide the number parts.", "Subtract the powers."]
    check: { type: number, q: "Edge case: how many cells of width $5 \\times 10^{-7}$ m fit across a grain $2.5 \\times 10^{-3}$ m wide?", answer: 5000, explain: "2.5 ÷ 5 = 0.5 and −3 − (−7) = 4: 0.5 × 10⁴ = 5000." }
```

### Millimetres to nanometres

### Metres to nanometres

### How many fit?

## Practise: convert

```step
stage: practise
insight: "Converting between prefixes both ways, mixed; the review keeps multiplying fresh."
tasks:
  - check:
      type: number
      q: "$2$ mg is $2 \\times 10^{k}$ µg. What's $k$?"
      answer: 3
      explain: "1 mg = 10³ µg."
  - check:
      type: number
      q: "$5 \\times 10^{-9}$ m is $5 \\times 10^{k}$ mm. What's $k$?"
      answer: -6
      explain: "1 nm = 10⁻⁹ ÷ 10⁻³ = 10⁻⁶ mm."
    smaller:
      check: { type: "number", q: "Just the powers: what's $-9 - (-3)$?", answer: -6, explain: "−9 + 3 = −6." }
  - check:
      type: answer
      q: "$4.2 \\times 10^{-3}$ g is how many milligrams?"
      answer: "4.2"
      form: simplified
      feedback:
        - ["4200", "A gram is the bigger unit: 1 g = 1000 mg. 4.2 × 10⁻³ × 10³ = 4.2."]
      explain: "4.2 × 10⁻³ g × 1000 mg/g = 4.2 mg."
  - check:
      type: number
      q: "Review: work out $(2 \\times 10^{3}) \\times (4 \\times 10^{4})$ as $8 \\times 10^{k}$. What's $k$?"
      answer: 7
      explain: "2 × 4 = 8 and 3 + 4 = 7."
```

### Bigger to smaller

### Smaller to bigger

### Decimal answer

### Review

Multiplying, from the last lesson.

## Make: back to the label

```step
stage: make
insight: "Coming back to the label: the same dose written two ways, and what a slip of 1000 would do."
tasks:
  - hint: ["Convert 0.25 mg to micrograms.", "Then compare 250 mg with 250 µg."]
    check:
      type: reasoning
      paper: true
      q: "The label says 250 micrograms. Someone reads it as 250 milligrams. How many times too much is that?"
      steps:
        - ["$1 \\text{ mg} = 10^{3} \\text{ µg}$", "a milligram is 1000 micrograms"]
        - ["$250 \\text{ mg} = 250 \\times 10^{3} \\text{ µg}$", "convert the milligrams to micrograms"]
        - ["$(250 \\times 10^{3}) \\div 250 = 10^{3}$", "compare with the real dose"]
      answer: "1000"
      answerLabel: "Times too much"
      feedback:
        - ["1", "1 mg is not the same as 1 µg. Convert both to the same unit."]
        - ["100", "A milligram is 1000 micrograms."]
      criteria:
        - "I converted both amounts to the same unit."
        - "I used 1 mg = 10³ µg."
        - "My answer is a power of 10."
      explain: "250 mg = 250 000 µg, which is 1000 times 250 µg."
  - check:
      type: question
      q: "A label says $0.5$ mg per tablet. Which is the same dose?"
      options: ["500 micrograms", "5 micrograms", "50 micrograms", "5000 micrograms"]
      answer: 0
      feedback: [null, "1 mg is 1000 µg, so 0.5 mg is 500 µg.", "1 mg is 1000 µg, so 0.5 mg is 500 µg.", "1 mg is 1000 µg, so 0.5 mg is 500 µg."]
      explain: "0.5 × 1000 = 500 µg."
```

### Too much

Back to the label. Work it out on paper first, then type your answer.

### Same dose

Prefix sizes (milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹): [SI prefixes, BIPM](https://www.bipm.org/en/measurement-units/si-prefixes). The doses here are made up for the task, not real prescriptions.

**Also used in**

- **Science and medicine.** Doses, lengths on a microscope and amounts in chemistry are all written with prefixes.
- **Next.** Year 9 Real numbers: where scientific notation sits among the numbers.
