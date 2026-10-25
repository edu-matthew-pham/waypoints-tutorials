---
order: 15
unit: approx10
node: AC9M10N01 n1
uses: [AC9M9N01 n2]
assumes: [AC9M9N01 n1, AC9M9N01 n2]
connection: square-patch
title: Exact or approximate?
summary: "√50 × √2 is exactly 10. Replace each root with a rounded decimal and you get 9.9687: close, but the 10 is gone. Approximating swaps an exact number for a different, nearby one."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two people work out the same path across the same patch and get different answers."
---
A square vegetable patch has an area of exactly 50 m². The gardener wants a path from one corner to the opposite corner, and she works it out with a calculator and a pencil. A builder friend says he can do it in his head, and he doesn't get her answer.

## Predict: the gardener's path

```step
stage: predict
insight: "Committing to the gardener's answer shows who thinks rounded values multiply to the exact answer, and who expects a small shortfall."
check:
  type: predict
  q: "The path across a square is its side times $\\sqrt{2}$. The gardener uses 7.07 m for the side and 1.41 for $\\sqrt{2}$. What length does she get for the path?"
  options:
    - "$9.97$ m"
    - "$10$ m"
    - "$9.5$ m"
    - "$10.5$ m"
  actual: "9.9687 m, about 9.97. Both numbers were rounded, so the product is close to the true length but not equal to it."
```

<figure class="situation" role="img" aria-label="A square patch with area 50 square metres. A dashed path runs from one corner to the opposite corner and is marked with a question mark. One side is marked 7.07 metres, and the corner-to-corner factor is marked 1.41."><svg viewBox="0 0 320 240" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="30" width="180" height="180" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56" stroke-width="1.5"/><path d="M60 210 L240 30" stroke="#0F6E56" stroke-dasharray="6 5" stroke-width="1.5"/><text x="150" y="226" text-anchor="middle" fill="currentColor" stroke="none">side 7.07 m</text><text x="116" y="108" fill="currentColor" stroke="none">path: ? m</text><text x="150" y="60" text-anchor="middle" fill="currentColor" stroke="none">area 50 m²</text></svg></figure>

She'll lay edging along the path, so she wants its length.

## Run: two ways on a calculator

```step
stage: run
insight: "Rounded numbers multiply to something close to the answer; the exact roots multiply to a whole number."
tasks:
  - check: { type: number, q: "Use a calculator. What is $7.07 \\times 1.41$, to 4 decimal places? Was your prediction right?", answer: 9.9687, tolerance: 0.0001, explain: "7.07 × 1.41 = 9.9687." }
  - check: { type: number, q: "Now press $\\sqrt{50} \\times \\sqrt{2}$ on your calculator, with no rounding in between. What does it show?", answer: 10, explain: "√50 × √2 = 10. The calculator keeps all the digits of each root, and they multiply to exactly 10." }
```

### The gardener's way

### The builder's way

The builder isn't guessing. He knows that two roots multiply into one: $\sqrt{50} \times \sqrt{2} = \sqrt{100}$.

## Investigate: what rounding changes

```step
stage: investigate
insight: "A decimal like 7.07 is a different number from √50, a nearby fraction that stops. Mia's mistake is to call the product of rounded values exact."
tasks:
  - check:
      type: number
      q: "A second patch has an area of 18 m². Its path is $\\sqrt{18} \\times \\sqrt{2}$. Work it out exactly. What is it?"
      answer: 6
      explain: "√18 × √2 = √36 = 6."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia works out the path with rounded numbers. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: round-early
      explain: "Line 4: 7.07 × 1.41 = 9.9687 is the product of two rounded numbers, so it's close but not exact. The path is exactly √50 × √2 = 10 m."
  - check:
      type: question
      q: "What changes when $\\sqrt{50}$ is replaced by 7.07?"
      options: ["It becomes a different number, one that stops after 2 places", "Nothing: they are the same number", "It becomes a bit smaller, by exactly 0.01", "It becomes a negative number"]
      answer: 0
      feedback: [null, "7.07 × 7.07 = 49.9849, not 50. So they aren't the same.", "√50 is 7.0710678…, which is 0.0010678… more than 7.07, not 0.01.", "Both are positive."]
      explain: "7.07 is the fraction 707/100. It stops, but √50 never does, so no decimal is exactly √50."
```

### Exact first

Here's the builder's way, and what rounding does to it.

```worked
\sqrt{50} \times \sqrt{2} :: The side times the corner-to-corner factor, both exact.
= \sqrt{50 \times 2} :: Two roots multiply into one root.
= \sqrt{100} :: Multiply under the root.
= 10 :: A whole number. Nothing was rounded, so nothing was lost.
7.07 \times 1.41 = 9.9687 :: Round each root first and the 10 is gone: close, not exact.
```

Now try one on paper: a patch of 18 m² has a path of $\sqrt{18} \times \sqrt{2}$. Work it out exactly, then type it.

### Find the mistake

Read Mia's working. Is a product of rounded numbers exact?

### What did rounding change?

## Modify: change how much you round

```step
stage: modify
insight: "Rounding to fewer places gives a bigger gap, rounding to more places a smaller one, but no decimal ever reaches 10. A decimal that looks exact, like 0.125, can be exact."
tasks:
  - hint: ["Round the side to 7.1 and $\\sqrt{2}$ to 1.4.", "Multiply them."]
    check: { type: number, q: "Round the side to 1 decimal place (7.1) and $\\sqrt{2}$ to 1 decimal place (1.4). What is the path now?", answer: 9.94, tolerance: 0.005, explain: "7.1 × 1.4 = 9.94, further from 10 than before." }
  - hint: ["Use 7.0711 and 1.4142.", "Give your answer to 4 decimal places."]
    check: { type: number, q: "Now round to 4 decimal places: 7.0711 and 1.4142. What is the product, to 4 decimal places?", answer: 9.9999, tolerance: 0.00005, explain: "7.0711 × 1.4142 = 9.99995 to 5 places: much closer to 10, but still not 10." }
  - hint: ["Exact means no digits were cut off.", "A fraction that stops is exact."]
    check: { type: question, q: "Edge case: which of these decimals is exact, not an approximation?", options: ["$0.125$ for $\\tfrac{1}{8}$", "$7.07$ for $\\sqrt{50}$", "$3.14$ for $\\pi$", "$1.41$ for $\\sqrt{2}$"], answer: 0, feedback: [null, "√50 never stops, so 7.07 is cut short.", "π never stops, so 3.14 is cut short.", "√2 never stops, so 1.41 is cut short."], explain: "1/8 is exactly 0.125. A decimal is exact only if the number itself stops." }
```

### One place

### Four places

### An exact decimal

## Practise: exact, then approximate

```step
stage: practise
insight: "Doing a two-step calculation exactly and then with rounded values, and measuring the gap; the review keeps the families straight."
tasks:
  - check:
      type: number
      q: "A square patch has an area of 72 m². Its path from corner to corner is $\\sqrt{72} \\times \\sqrt{2}$. How long is it, exactly?"
      answer: 12
      explain: "√72 × √2 = √144 = 12."
    smaller:
      check: { type: "number", q: "Just the number under the root: what's $72 \\times 2$?", answer: 144, explain: "72 × 2 = 144, and √144 = 12." }
  - check:
      type: number
      q: "Someone rounds the side to 8.49 and $\\sqrt{2}$ to 1.41. What path length do they get, to 2 decimal places?"
      answer: 11.97
      tolerance: 0.005
      explain: "8.49 × 1.41 = 11.9709, so 11.97."
  - check:
      type: number
      q: "How much shorter than the exact path is that, to 2 decimal places?"
      answer: 0.03
      tolerance: 0.005
      explain: "12 − 11.97 = 0.03 m, or 3 cm."
  - check:
      type: question
      q: "Review: which of these is rational?"
      options: ["$\\sqrt{81}$", "$\\sqrt{80}$", "$\\sqrt{82}$", "$\\pi$"]
      answer: 0
      feedback: [null, "80 isn't a perfect square, so √80 never stops.", "82 isn't a perfect square.", "π never stops or repeats."]
      explain: "√81 = 9, a whole number."
```

### Exactly

### Rounded

### The gap

### Review

Rational or irrational, from Number families.

## Make: back to the path

```step
stage: make
insight: "Coming back to the patch: the exact path is 10 m, and the rounded working is 3 cm short."
tasks:
  - hint: ["Exact: $\\sqrt{50} \\times \\sqrt{2} = \\sqrt{100}$.", "Rounded: 7.07 × 1.41. Then find the difference in cm."]
    check:
      type: reasoning
      paper: true
      q: "A square patch has an area of 50 m². Work out the path across it exactly. Then work it out with the side rounded to 7.07 and $\\sqrt{2}$ rounded to 1.41. By how many centimetres is the second one short?"
      steps:
        - ["$\\sqrt{50} \\times \\sqrt{2} = \\sqrt{100} = 10$ m", "exact: two roots make one root"]
        - ["$7.07 \\times 1.41 = 9.9687$ m", "both rounded first"]
        - ["$10 - 9.9687 = 0.0313$ m", "the gap in metres"]
        - ["About 3 cm", "0.0313 m × 100, to the nearest cm"]
      answer: "3"
      answerLabel: "Short by (cm)"
      tolerance: 0.5
      feedback:
        - ["0.03", "That's in metres. The question asks for centimetres."]
        - ["31", "0.0313 m is about 3 cm, not 31."]
      criteria:
        - "I worked out the exact path by multiplying the roots first."
        - "I used the rounded numbers only for the second path."
        - "I changed metres to centimetres at the end."
      explain: "The exact path is 10 m. The rounded one is 9.9687 m, which is 0.0313 m or about 3 cm short."
  - check:
      type: question
      q: "Why does the exact way give a whole number when the rounded way doesn't?"
      options: ["The two roots multiply into √100, which is 10, but rounded decimals no longer multiply to that", "The exact way rounds more places", "10 is always the answer for any square", "The calculator guesses"]
      answer: 0
      feedback: [null, "The exact way doesn't round at all.", "It depends on the area: this one happens to give a whole number.", "A calculator keeps many digits of each root; it isn't guessing."]
      explain: "√50 × √2 = √100 = 10 exactly. Once each root is cut short, that match is lost."
```

### The path

Back to the patch. Work this out on paper first, then type your answer.

### Why the difference?

The patch is made up: an area of 50 m².

**Also used in**

- **Building.** Plans keep numbers like √2 exact, and the builder rounds once, at the end, to the nearest millimetre.
- **Next lesson.** Chopping digits off or rounding them: which one drifts when you do it thousands of times?
