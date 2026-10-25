---
order: 7
unit: powers9
node: AC9M9A01 n1
uses: [AC9M8N02 n1, AC9M8N02 n2]
assumes: [AC9M8N02 n1, AC9M8N02 n2]
connection: metric-small
title: Negative powers
summary: "Keep dividing by the base and the powers go below zero: 2⁻³ is 1/2³ = 1/8, a small positive number, not a negative one."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A micrometre is written 10⁻⁶ metres. How can a power be negative, and what does it mean?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8344
  url: http://127.0.0.1:8344/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: neg.yml#explain-pic, caption: "$2^2 \\div 2^5$: two pairs cancel and three 2s are left underneath, so it's $\\tfrac{1}{2^3} = 2^{-3}$." }
explainClip:
  query: { code: "@neg.yml#explain", fresh: 1, id: explain }
  caption: "Keep dividing: the power goes below zero"
  say: "Divide by the base again, and the power goes below zero."
  clip:
    - caption: { text: "2² ÷ 2³: one 2 is left underneath.", say: "Two squared over two cubed leaves one two underneath." }
    - wait: 800
    - caption: { text: "That's 1/2 = 2⁻¹.", say: "That's one over two, which is two to the minus one." }
    - click: Make the second index bigger
    - wait: 900
    - caption: { text: "2² ÷ 2⁴: two 2s underneath: 1/4 = 2⁻².", say: "Two squared over two to the fourth is one over four." }
    - wait: 900
---
In Year 8 you met $a^0 = 1$. Keep going below zero and you get negative powers.

## Predict: a micrometre

```step
stage: predict
insight: "Committing to a power for a millionth of a metre shows who reads a negative power as a negative number (−10⁶) or as a large number (10⁶)."
check:
  type: predict
  q: "A micrometre is one millionth of a metre. Which is that as a power of 10, in metres?"
  options:
    - "$10^{-6}$"
    - "$-10^{6}$"
    - "$10^{6}$"
    - "$6^{-10}$"
  actual: "10⁻⁶. A negative power is not a negative number. It's a reciprocal: 10⁻⁶ = 1/10⁶ = 0.000001, a millionth. 10⁶ is a million; −10⁶ is minus a million."
```

<figure class="situation" role="img" aria-label="Three bars, each 1000 times shorter than the one above. The top bar is 1 metre, the middle bar is 1 millimetre, a thousandth of a metre, and the bottom bar is 1 micrometre, a millionth of a metre, drawn as a dot."><svg viewBox="0 0 380 190" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="20" y="20" width="340" height="18" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="20" y="62" fill="currentColor" stroke="none">1 metre</text><rect x="20" y="85" width="34" height="14" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="64" y="97" fill="currentColor" stroke="none">1 millimetre: a thousandth of that</text><rect x="20" y="140" width="4" height="10" fill="#0F6E56" stroke="none"/><text x="34" y="150" fill="currentColor" stroke="none">1 micrometre: a thousandth of that again</text></svg></figure>

Each bar is 1000 times shorter than the one before. How do you write a millionth of a metre as a power of 10?

## Run: keep dividing

```step
stage: run
insight: "Dividing a smaller power by a bigger one leaves factors underneath, so the answer is 1 over a power: the index goes below zero."
try: { playground: board, starter: "neg.yml#run", height: 600 }
check: { type: board, text: "Set the board to $2^2 \\div 2^5$. What's left underneath? Was your prediction right?", when: "m = 2 and n = 5" }
```

The board divides $a^m$ by $a^n$ and cancels pairs. When $n$ is bigger than $m$, factors are left underneath. Try a few.

## Investigate: reciprocals

```step
stage: investigate
insight: "A negative power is the reciprocal of the positive one: a⁻ⁿ = 1/aⁿ. The sign of the power flips the fraction, not the sign of the number. Tess multiplies the base by the power."
tasks:
  - check:
      type: answer
      q: "Work out $2^{-3}$. Give a fraction."
      answer: "1/8"
      form: simplest
      feedback:
        - ["-8", "A negative power doesn't make a negative number. It makes a reciprocal."]
        - ["-6", "That's 2 × −3. A power is repeated multiplication, not multiplication by the index."]
        - ["1/6", "2³ is 2 × 2 × 2 = 8, not 6."]
      explain: "2⁻³ = 1/2³ = 1/8."
  - check:
      type: bug
      code: "working.txt#tess"
      text: "Tess works out $3^{-2}$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: negative-power-negative
      explain: "Line 3: a power isn't multiplication by the index. 3⁻² = 1/3² = 1/9."
  - check:
      type: question
      q: "Which is the same as $5^{-1}$?"
      options: ["$\\tfrac{1}{5}$", "$-5$", "$5^{-1}$ can't be worked out", "$-\\tfrac{1}{5}$"]
      answer: 0
      feedback: [null, "5⁻¹ isn't negative: it's a reciprocal.", "It can: 1 divided by 5.", "The power is negative; the answer isn't."]
      explain: "5⁻¹ = 1/5¹ = 1/5."
```

### Reciprocal

Here's the pattern that makes negative powers make sense.

```worked
10^3 = 1000 :: Start high.
10^2 = 100 :: Divide by 10 each time.
10^1 = 10 :: Still dividing by 10.
10^0 = 1 :: The pattern says one.
10^{-1} = 1 \div 10 = \tfrac{1}{10} :: Keep going.
10^{-2} = \tfrac{1}{100} :: A hundredth.
```

Now try one on paper: $10^{-4}$ as a fraction and as a decimal. Then type the decimal.

### Find the mistake

Read Tess's working. Is a power multiplication by the index?

### Which is the same?

## Modify: change the base and the power

```step
stage: modify
insight: "Changing one number at a time: a different power, a different base, a negative power on a fraction base, and the largest power the board allows."
try: { playground: board, starter: "neg.yml#vary", height: 620 }
tasks:
  - hint: ["Set a to 10 and m to 2.", "Then try n = 3, 4 and 5."]
    check: { type: answer, q: "Work out $10^{-3}$ as a decimal.", answer: "0.001", form: simplified, feedback: [["-1000", "10⁻³ isn't negative: it's 1/10³."], ["0.0001", "That's 10⁻⁴. 10³ is 1000, so 1/1000."]], explain: "1/1000 = 0.001." }
  - hint: ["Try a = 5.", "5⁻² is 1 over 5²."]
    check: { type: answer, q: "Work out $5^{-2}$ as a fraction.", answer: "1/25", form: simplest, feedback: [["1/10", "5² is 5 × 5 = 25, not 10."], ["-25", "A negative power isn't a negative number."]], explain: "5⁻² = 1/5² = 1/25." }
    smaller:
      check: { type: "number", q: "Just the bottom of the fraction: what's $5^2$?", answer: 25, explain: "5 × 5 = 25." }
  - hint: ["$2^{-1} = \\tfrac{1}{2}$.", "$\\left(\\tfrac{1}{2}\\right)^{-1}$ flips it back."]
    check: { type: answer, q: "Edge case: work out $\\left(\\tfrac{1}{2}\\right)^{-2}$.", answer: "4", form: simplified, feedback: [["1/4", "A negative power flips the fraction: (1/2)⁻² = (2/1)² = 4."], ["-4", "A negative power doesn't make a negative number."]], explain: "Flip the fraction and square: (2/1)² = 4." }
```

### Ten to the minus three

### Another base

### A fraction to a negative power

## Practise: reciprocals

```step
stage: practise
insight: "Evaluating negative powers with different bases, mixed; the review keeps zero powers fresh."
tasks:
  - check:
      type: answer
      q: "Work out $3^{-3}$ as a fraction."
      answer: "1/27"
      form: simplest
      feedback:
        - ["-27", "A negative power isn't a negative number."]
        - ["1/9", "3³ = 27. That's 3²."]
      explain: "3⁻³ = 1/3³ = 1/27."
  - check:
      type: answer
      q: "Work out $10^{-2}$ as a decimal."
      answer: "0.01"
      form: simplified
      feedback:
        - ["0.001", "That's 10⁻³. 10² is 100, so 1/100."]
      explain: "1/100 = 0.01."
  - check:
      type: answer
      q: "Write $\\tfrac{1}{16}$ as a power of 2 with a negative index."
      answer: "2^-4"
      form: simplified
      feedback:
        - ["2^4", "That's 16. A reciprocal needs a negative index."]
      explain: "16 = 2⁴, so 1/16 = 2⁻⁴."
    smaller:
      check: { type: "number", q: "How many 2s multiply to make 16? Type that number.", answer: 4, explain: "2 × 2 × 2 × 2 = 16: four 2s." }
  - check:
      type: answer
      q: "Review: work out $7^0 + 2^{-1}$ as a fraction."
      answer: "3/2"
      form: simplest
      feedback:
        - ["1/2", "7⁰ = 1, so add it: 1 + 1/2."]
      explain: "7⁰ = 1 and 2⁻¹ = 1/2, so 1 + 1/2 = 3/2."
```

### Fractions

### Decimals

### Backwards

### Review

Zero power, from the Year 8 laws.

## Make: back to the micrometre

```step
stage: make
insight: "Coming back to the micrometre: writing sizes as powers of 10 makes comparing them a division."
tasks:
  - hint: ["A micrometre is 10⁻⁶ m.", "70 micrometres is 7 × 10 micrometres."]
    check:
      type: reasoning
      paper: true
      q: "A hair is about 70 micrometres wide and a red blood cell about 8 micrometres. Write each in metres as a power of 10 times a number, then work out how many cells fit across the hair, to the nearest whole number."
      steps:
        - ["$70 \\times 10^{-6} = 7 \\times 10^{-5}$ m", "a hair"]
        - ["$8 \\times 10^{-6}$ m", "a cell"]
        - ["$(7 \\times 10^{-5}) \\div (8 \\times 10^{-6}) = 8.75$", "divide: 7 ÷ 8 and 10⁻⁵ ÷ 10⁻⁶ = 10"]
        - ["About 9 cells", "round 8.75 to the nearest whole number"]
      answer: "9"
      answerLabel: "Cells across a hair"
      feedback:
        - ["0.875", "10⁻⁵ ÷ 10⁻⁶ = 10, so 0.875 × 10."]
        - ["8", "8.75 rounds up to 9."]
      criteria:
        - "I wrote both sizes in metres as a number times a power of 10."
        - "I divided the numbers and then the powers of 10."
        - "My answer is a bit under 10."
      explain: "70 ÷ 8 = 8.75, so about 9 cells across the hair."
  - check:
      type: question
      q: "Which is the biggest?"
      options: ["$10^{-3}$ m", "$10^{-6}$ m", "$10^{-9}$ m"]
      answer: 0
      feedback: [null, "10⁻⁶ is a millionth. 10⁻³ is a thousandth, which is bigger.", "10⁻⁹ is a billionth."]
      explain: "10⁻³ = 0.001, 10⁻⁶ = 0.000001 and 10⁻⁹ = 0.000000001. The bigger the negative, the smaller the number."
```

### Cells across a hair

Back to the micrometre. Work this out on paper first, then type your answer.

### Which is bigger?

Sizes: hair width about 20 to 200 micrometres (we use 70) and a typical red blood cell 6 to 8 micrometres (we use 8): [Micrometre, Wikipedia](https://en.wikipedia.org/wiki/Micrometre).

**Also used in**

- **Science.** A nanometre is 10⁻⁹ m, the scale of atoms and molecules.
- **Next lessons.** Using all the index laws on numbers, then on letters, then writing very small numbers in scientific notation.
