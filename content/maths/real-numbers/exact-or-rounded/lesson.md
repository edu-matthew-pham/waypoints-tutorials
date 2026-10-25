---
order: 11
unit: reals9
node: AC9M9N01 n2
uses: [AC9M9N01 n1]
assumes: [AC9M8N01 n1, AC9M8N01 n2]
connection: square-patch
title: Exact or rounded?
summary: "√2 is exact. 1.41 is only close. Keep the exact value, or the full calculator value, until the last step, and round at the end."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A calculator shows √50 as 7.0710678… and a builder cuts to 7.1 m. How wrong is that?"
---
An irrational number never ends, so every decimal for it is a rounded version. The question is when rounding is fine.

## Predict: a rounded side

```step
stage: predict
insight: "Committing to the area of a rounded square shows who thinks rounding the side to 7.1 m changes nothing, and who expects it to be a little bigger."
check:
  type: predict
  q: "A square patch is meant to have an area of exactly 50 m², so its side is $\\sqrt{50}$ m. A builder rounds the side up to 7.1 m. What area does the patch actually have?"
  options:
    - "$50.41$ m²"
    - "$50$ m²"
    - "$49.0$ m²"
    - "$51.0$ m²"
  actual: "50.41 m². 7.1 × 7.1 = 50.41, a bit more than 50. √50 = 7.0710678…, so 7.1 is a little too big and squaring doubles the error's effect."
```

<figure class="situation" role="img" aria-label="A square vegetable patch. Its area is marked 50 square metres. Each side is marked with the question mark metres."><svg viewBox="0 0 320 240" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="30" width="180" height="180" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56" stroke-width="1.5"/><text x="150" y="125" text-anchor="middle" fill="currentColor" stroke="none">area 50 m²</text><text x="150" y="226" text-anchor="middle" fill="currentColor" stroke="none">? m</text><text x="258" y="125" fill="currentColor" stroke="none">? m</text></svg></figure>

The vegetable patch should be exactly 50 m². What length is each side?

## Run: check on a calculator

```step
stage: run
insight: "Squaring a rounded side doesn't give back the exact area: the result is close but not exact."
check: { type: number, q: "Use a calculator. What is $7.1 \\times 7.1$? Was your prediction right?", answer: 50.41, tolerance: 0.001, explain: "7.1² = 50.41, a little over 50." }
```

Press √50 on your calculator. The screen shows a rounded version of a number that never ends.

## Investigate: when rounding matters

```step
stage: investigate
insight: "Round at the end, not in the middle: each early rounding adds a small error that later steps can grow. Lee treats 2 × 1.4 as exact."
tasks:
  - check:
      type: question
      q: "Which one keeps the exact value of the side?"
      options: ["$\\sqrt{50}$", "$7.07$", "$7.071$", "$7.1$"]
      answer: 0
      feedback: [null, "7.07 is √50 rounded to 2 decimal places.", "7.071 is √50 rounded to 3 decimal places.", "7.1 is √50 rounded to 1 decimal place."]
      explain: "√50 is exact. Each decimal version is rounded."
  - check:
      type: bug
      code: "working.txt#lee"
      text: "Lee works out the cable along 2 diagonals of a 1 m square. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: round-early
      explain: "Line 4: 2 × 1.4 = 2.8 is an approximation, because √2 was rounded. The exact length is 2√2 m, which is about 2.83 m."
  - check:
      type: number
      q: "Use exact values: what is $\\sqrt{50} \\times \\sqrt{50}$?"
      answer: 50
      explain: "√50 × √50 = 50 exactly: a square root times itself gives the number back."
```

### Exact first

Here's the difference rounding early makes.

```worked
\sqrt{2} \times \sqrt{2} \times \sqrt{2} \times \sqrt{2} :: Exact: (√2)² = 2, so (√2)⁴ = 4.
1.4 \times 1.4 \times 1.4 \times 1.4 :: Rounded to 1 decimal place first.
= 3.8416 :: Not 4.
\sqrt{2} \approx 1.41421356 \text{, so } 1.41421356^4 \approx 4.0000 :: Keep more digits and it's closer.
```

Now try one on paper: use $\sqrt{2} \approx 1.4$ to work out $(\sqrt{2})^4$ by multiplying four 1.4s. Then type the value you get.

### Find the mistake

Read Lee's working. Is 2.8 exact?

### Which is exact?

## Modify: change the rounding

```step
stage: modify
insight: "Changing how many places the side is rounded to: more places make the squared answer closer to 50. An exact form like 5√2 never needs rounding."
tasks:
  - hint: ["Round √50 to 2 decimal places: 7.07.", "Then square it."]
    check: { type: number, q: "Round $\\sqrt{50}$ to 2 decimal places (7.07), then square it. What do you get?", answer: 49.98, tolerance: 0.01, explain: "7.07² = 49.9849, a little under 50." }
    smaller:
      check: { type: "number", q: "Just the first part: what's $7.07 \\times 7.07$ to the nearest whole number?", answer: 50, explain: "7.07 × 7.07 = 49.98…, which is about 50." }
  - hint: ["Round √50 to 3 decimal places: 7.071.", "Then square it."]
    check: { type: number, q: "Round $\\sqrt{50}$ to 3 decimal places (7.071), then square it. What do you get, to 1 decimal place?", answer: 50, tolerance: 0.05, explain: "7.071² = 49.999…, so 50.0 to 1 decimal place." }
  - hint: ["50 = 25 × 2.", "√25 = 5."]
    check: { type: question, q: "Edge case: which one is exactly equal to $\\sqrt{50}$?", options: ["$5\\sqrt{2}$", "$7\\sqrt{1}$", "$25\\sqrt{2}$", "$\\sqrt{25}$"], answer: 0, feedback: [null, "7 × 1 = 7, but √50 is 7.07….", "5√2 squared is 50, but 25√2 squared is 1250.", "√25 = 5."], explain: "√50 = √(25 × 2) = √25 × √2 = 5√2. Both are exact." }
```

### Two decimal places

### Three decimal places

### Another exact form

## Practise: decide

```step
stage: practise
insight: "Choosing between exact and rounded and rounding at the end; the review keeps the families straight."
tasks:
  - check:
      type: number
      q: "The exact side of a square of area 20 m² is $\\sqrt{20}$. To 2 decimal places, what is it?"
      answer: 4.47
      tolerance: 0.005
      explain: "√20 = 4.4721…, so 4.47."
  - check:
      type: number
      q: "Edging goes round that square: 4 sides of $\\sqrt{20}$ m. Work it out with the full calculator value, then round to 1 decimal place."
      answer: 17.9
      tolerance: 0.05
      explain: "4 × 4.4721… = 17.888…, which is 17.9. Round at the end."
    smaller:
      check: { type: "number", q: "Just the first step: what's $\\sqrt{20}$ to 2 decimal places?", answer: 4.47, tolerance: 0.005, explain: "√20 = 4.47 to 2 decimal places." }
  - check:
      type: question
      q: "A drawing says a part is $\\sqrt{2}$ m long. Which is best for the drawing?"
      options: ["Write √2", "Write 1.4", "Write 1.41", "Write 1.4142"]
      answer: 0
      feedback: [null, "1.4 is rounded: it loses information.", "1.41 is rounded.", "1.4142 is rounded: the drawing can stay exact."]
      explain: "On a drawing the exact value stays exact. The builder rounds when cutting."
  - check:
      type: question
      q: "Review: which is rational?"
      options: ["$\\sqrt{49}$", "$\\sqrt{50}$", "$\\sqrt{51}$"]
      answer: 0
      feedback: [null, "50 isn't a perfect square.", "51 isn't a perfect square."]
      explain: "√49 = 7."
```

### A square patch

### Edging

### A drawing

### Review

Rational or irrational, from the last lesson.

## Make: back to the patch

```step
stage: make
insight: "Coming back to the patch: working with the exact value, then rounding once at the end, gives the edging length."
tasks:
  - hint: ["Edging = 4 × the side.", "The side is √50. Use the calculator's full value, then round once."]
    check:
      type: reasoning
      paper: true
      q: "A square patch has area 50 m². Work out the length of edging for all 4 sides, to 1 decimal place."
      steps:
        - ["$\\text{side} = \\sqrt{50}$", "exact value of the side"]
        - ["$4\\sqrt{50} = 28.2842\\ldots$", "use the full calculator value"]
        - ["$28.3$ m", "round once, at the end"]
      answer: "28.3"
      answerLabel: "Edging (m)"
      tolerance: 0.05
      feedback:
        - ["28.4", "That's from rounding the side to 7.1 first. Round at the end."]
        - ["28", "Keep one decimal place: 28.3."]
      criteria:
        - "I used the exact value of the side."
        - "I rounded only once, at the end."
        - "My answer is close to 28.3."
      explain: "4 × 7.0710678… = 28.284…, so 28.3 m."
  - check:
      type: question
      q: "Why was 28.4 a worse answer than 28.3?"
      options: ["The side was rounded to 7.1 first", "28.4 isn't a number", "4 × 7.1 is wrong"]
      answer: 0
      feedback: [null, "It is a number: just not the best one.", "4 × 7.1 = 28.4: the arithmetic is right, but 7.1 was already rounded."]
      explain: "Rounding the side early adds an error that the multiplication then grows."
```

### The edging

Back to the patch. Work this out on paper first, then type your answer.

### Why 28.4?

**Also used in**

- **Building and design.** A drawing keeps √2, and the builder rounds to the nearest millimetre when cutting.
- **Next lesson.** Where numbers sit on the line, and ranges of values like tolerances.
