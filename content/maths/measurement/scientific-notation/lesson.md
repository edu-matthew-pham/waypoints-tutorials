---
order: 10
unit: sci9
node: AC9M9M02 n1
uses: [AC9M9A01 n1]
assumes: [AC9M8N02 n1, AC9M8N02 n2, AC9M9A01 n1]
connection: sunlight-time
title: Scientific notation
summary: "Write a number as a number from 1 to 10 times a power of 10. Big numbers have a positive power and small numbers a negative one."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The speed of light has nine digits. Scientists write it in a few characters instead."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8347
  url: http://127.0.0.1:8347/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: sci.yml#explain-pic, caption: "$3 \\times 10^8$: the decimal point of 3 moves 8 places right, giving 300 000 000." }
explainClip:
  query: { code: "@sci.yml#explain", fresh: 1, id: explain }
  caption: "The power says how far the point moves"
  say: "The power of ten says how far the decimal point moves, and which way."
  clip:
    - caption: { text: "4.5 × 10⁰ = 4.5: the point stays.", say: "With power zero the point stays where it is." }
    - click: Make k bigger
    - click: Make k bigger
    - click: Make k bigger
    - wait: 900
    - caption: { text: "4.5 × 10³ = 4 500: the point moves 3 right.", say: "Power three: the point moves three places right." }
    - click: Make k smaller
    - click: Make k smaller
    - click: Make k smaller
    - click: Make k smaller
    - click: Make k smaller
    - click: Make k smaller
    - wait: 900
    - caption: { text: "4.5 × 10⁻³ = 0.0045: the point moves 3 left.", say: "Power minus three: the point moves three places left." }
    - wait: 800
---
Some numbers are too long to read. Scientific notation puts the length in a power of 10 instead.

## Predict: the speed of light

```step
stage: predict
insight: "Committing to a power for 300 000 000 shows who counts the zeros wrongly, or gives a big number a negative power."
check:
  type: predict
  q: "Light travels at about 300 000 000 metres per second. Which is that in scientific notation?"
  options:
    - "$3 \\times 10^{8}$"
    - "$3 \\times 10^{9}$"
    - "$3 \\times 10^{7}$"
    - "$3 \\times 10^{-8}$"
  actual: "3 × 10⁸. The decimal point moves 8 places from 3 to 300 000 000. There are 8 zeros. A big number has a positive power; 3 × 10⁻⁸ would be 0.00000003."
```

<figure class="situation" role="img" aria-label="The number 300 000 000 with an arrow showing the decimal point at the right end, and a question mark over the count of places it has to move left to sit after the 3."><svg viewBox="0 0 407.6 130" width="408" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><text x="30" y="70" fill="currentColor" stroke="none" font-size="30" letter-spacing="3">300 000 000</text><circle cx="265" cy="78" r="3" fill="currentColor" stroke="none"/><path d="M262 40 Q150 -5 40 40" stroke-width="1.6" stroke-dasharray="5 4"/><text x="150" y="28" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><text x="30" y="115" fill="currentColor" stroke="none">How many places does the point travel to sit after the 3?</text></svg></figure>

The speed of light is about 300 000 000 m/s. How can you write it with a short power of 10?

## Run: move the point

```step
stage: run
insight: "The power of 10 says how many places the decimal point moves and which way: right for a positive power, left for a negative one."
try: { playground: board, starter: "sci.yml#run", height: 600 }
check: { type: board, text: "Set the board to $3 \\times 10^{8}$ (change $a$ to 3 and $k$ to 8). What does it write out? Was your prediction right?", when: "a = 3 and k = 8" }
```

The first number $a$ is from 1 to 9.9. The board writes the number out for you. Try a negative $k$ too.

## Investigate: big and small

```step
stage: investigate
insight: "The number part must be from 1 up to 10. Count how far the decimal point moves: right for a big number (positive power), left for a small one (negative power). Ravi counts the wrong way for a small number."
tasks:
  - check:
      type: number
      q: "Write $45\\,000$ as $4.5 \\times 10^{k}$. What's $k$?"
      answer: 4
      explain: "The point moves 4 places, from 4.5 to 45 000. So k = 4."
  - check:
      type: bug
      code: "working.txt#ravi"
      text: "Ravi writes 0.0004 in scientific notation. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: sci-notation-places
      explain: "Line 3: the point moves 4 places to the left, and a small number has a negative power: 4 × 10⁻⁴."
  - check:
      type: question
      q: "Which one is in scientific notation?"
      options: ["$1.2 \\times 10^{4}$", "$12 \\times 10^{3}$", "$0.12 \\times 10^{5}$", "$120 \\times 10^{2}$"]
      answer: 0
      feedback: [null, "The first number must be less than 10: 12 is too big.", "The first number must be at least 1: 0.12 is too small.", "The first number must be less than 10: 120 is too big."]
      explain: "All four are 12 000. Only 1.2 × 10⁴ has a number from 1 up to 10."
```

### How far

Here's converting both ways.

```worked
45\,000 :: A big number.
4.5 \times 10^{4} :: The point moves 4 places left to sit after the 4: a positive power.
0.00072 :: A small number.
7.2 \times 10^{-4} :: The point moves 4 places right, to sit after the 7: a negative power.
3.6 \times 10^{5} = 360\,000 :: Back again: move the point 5 places right.
```

Now try one on paper: $0.000\,038$ in scientific notation. Then type the power.

### Find the mistake

Read Ravi's working. Which way does the point move for a small number?

### Which is scientific notation?

## Modify: change the number

```step
stage: modify
insight: "One change at a time: a bigger number, then back to a decimal, then a power of zero."
try: { playground: board, starter: "sci.yml#vary", height: 620 }
tasks:
  - hint: ["The board shows the number written out.", "Set a to 6.3 and find the k that writes 6 300 000."]
    check: { type: number, q: "Write $6\\,300\\,000$ as $6.3 \\times 10^{k}$. What's $k$?", answer: 6, explain: "The point moves 6 places: k = 6." }
    smaller:
      check: { type: "number", q: "How many places does the point move from 6.3 to 6 300 000?", answer: 6, explain: "6.3 → 63 → 630 → 6 300 → 63 000 → 630 000 → 6 300 000: six places." }
  - hint: ["A negative power: the point moves left.", "$5.1 \\times 10^{-3}$ is a small number."]
    check: { type: answer, q: "Write $5.1 \\times 10^{-3}$ as a decimal.", answer: "0.0051", form: simplified, feedback: [["5100", "A negative power makes a small number, not a big one."], ["0.051", "Three places left, not two: 0.0051."]], explain: "The point moves 3 places left: 0.0051." }
  - hint: ["$10^0 = 1$.", "So the point doesn't move."]
    check: { type: answer, q: "Edge case: write $7.2 \\times 10^{0}$ as a decimal.", answer: "7.2", form: simplified, feedback: [["72", "10⁰ = 1, so the point doesn't move."]], explain: "10⁰ = 1, so 7.2 × 1 = 7.2." }
```

### A bigger number

### Back to a decimal

### Power zero

## Practise: both ways

```step
stage: practise
insight: "Converting big and small numbers both ways, mixed; the review keeps negative powers fresh."
tasks:
  - check:
      type: number
      q: "Write $82\\,000\\,000$ as $8.2 \\times 10^{k}$. What's $k$?"
      answer: 7
      explain: "The point moves 7 places: k = 7."
  - check:
      type: number
      q: "Write $0.000\\,52$ as $5.2 \\times 10^{k}$. What's $k$?"
      answer: -4
      explain: "The point moves 4 places left past the zeros: k = −4."
    smaller:
      check: { type: "number", q: "How many places does the point move from 0.000 52 to 5.2?", answer: 4, explain: "0.00052 → 0.0052 → 0.052 → 0.52 → 5.2: four places. It moves right, so the power is negative: −4." }
  - check:
      type: answer
      q: "Write $9.4 \\times 10^{5}$ as a number."
      answer: "940000"
      form: simplified
      feedback:
        - ["94000", "Five places right: 940 000."]
      explain: "The point moves 5 places right: 940 000."
  - check:
      type: answer
      q: "Review: work out $10^{-4}$ as a decimal."
      answer: "0.0001"
      form: simplified
      feedback:
        - ["0.001", "10⁻⁴ = 1/10 000."]
      explain: "10⁻⁴ = 1/10 000 = 0.0001."
```

### A big number

### A small number

### Back to a number

### Review

A negative power, from earlier.

## Make: back to the speed of light

```step
stage: make
insight: "Coming back to the opening: writing a long number in scientific notation shows its size at a glance."
tasks:
  - hint: ["299 792 458 is close to 300 000 000.", "How many places does the point move?"]
    check:
      type: reasoning
      paper: true
      q: "Light travels at 299 792 458 m/s. Round it to $3 \\times 10^{k}$ m/s. What's $k$? Then say how many times faster it is than a car at $3 \\times 10^{1}$ m/s."
      steps:
        - ["$299\\,792\\,458 \\approx 300\\,000\\,000$", "round to one digit"]
        - ["$300\\,000\\,000 = 3 \\times 10^{8}$", "the point moves 8 places"]
        - ["$(3 \\times 10^{8}) \\div (3 \\times 10^{1}) = 10^{7}$", "divide the numbers, subtract the powers"]
      answer: "8"
      answerLabel: "The power k"
      feedback:
        - ["9", "300 000 000 has 8 zeros, so the point moves 8 places."]
        - ["-8", "A big number has a positive power."]
      criteria:
        - "I rounded before writing it in scientific notation."
        - "My number part is from 1 to 10."
        - "The speed of light is a big number, so my power is positive."
      explain: "3 × 10⁸ m/s. A car at 3 × 10¹ m/s (about 108 km/h) is 10⁷, ten million, times slower."
  - check:
      type: number
      q: "Which is smaller, $3 \\times 10^{-5}$ or $3 \\times 10^{-7}$? Type the power of the smaller one."
      answer: -7
      explain: "3 × 10⁻⁷ = 0.0000003 is smaller than 3 × 10⁻⁵ = 0.00003."
```

### The power of light

Back to light. Work it out on paper first, then type the power.

### Which is smaller?

Speed of light: 299 792 458 m/s, exact: [NIST](https://physics.nist.gov/cuu/Constants/Value/c.html).

**Also used in**

- **Space and science.** Sizes from atoms to galaxies are written this way.
- **Next lesson.** Calculating with numbers in scientific notation, like how far the Sun is.
