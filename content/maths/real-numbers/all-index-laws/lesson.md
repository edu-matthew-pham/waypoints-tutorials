---
order: 8
unit: powers9
node: AC9M9A01 n2
uses: [AC9M9A01 n1, AC9M8N02 n2]
assumes: [AC9M8N02 n1, AC9M8N02 n2]
connection: kilo-mega-giga
title: All the index laws
summary: "The index laws still work with zero and negative indices: add when multiplying, subtract when dividing, multiply for a power of a power. Be careful subtracting a negative."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How many photos fit on a phone? The answer comes from a division of two powers of 10."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8345
  url: http://127.0.0.1:8345/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: laws.yml#explain-pic, caption: "$10^3 \\div 10^6$: three pairs cancel and three 10s are left underneath: $10^{-3}$, a thousandth." }
explainClip:
  query: { code: "@laws.yml#explain", fresh: 1, id: explain }
  caption: "Same laws, any indices"
  say: "The laws are the same. Subtract the indices, even if the answer goes negative."
  clip:
    - caption: { text: "2² ÷ 2²: everything cancels. 2⁰ = 1.", say: "Two squared over two squared cancels to one." }
    - click: Make the second index bigger
    - wait: 900
    - caption: { text: "2² ÷ 2³: 2 − 3 = −1, so 2⁻¹.", say: "Two minus three is minus one, so two to the minus one." }
    - click: Make the second index bigger
    - wait: 900
    - caption: { text: "2² ÷ 2⁴: 2 − 4 = −2, so 2⁻².", say: "Two minus four is minus two." }
    - wait: 800
---
In Year 8 you added and subtracted indices. The same laws work when the answer is zero or negative.

## Predict: photos on a phone

```step
stage: predict
insight: "Committing to a number of photos shows who loses track of how many zeros come from dividing powers of 10."
check:
  type: predict
  q: "A phone has 128 gigabytes of storage and each photo is 4 megabytes. How many photos fit?"
  options:
    - "32 000"
    - "32"
    - "320 000"
    - "3 200 000"
  actual: "32 000. 128 GB is 128 × 10⁹ bytes and 4 MB is 4 × 10⁶ bytes. 128 ÷ 4 = 32 and 10⁹ ÷ 10⁶ = 10³, so 32 × 10³ = 32 000."
```

<figure class="situation" role="img" aria-label="A wide bar labelled 128 gigabytes, and a tiny square labelled 4 megabytes, one photo. The question is how many tiny squares fit in the bar."><svg viewBox="0 0 380 150" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="20" y="30" width="340" height="30" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56"/><text x="190" y="22" text-anchor="middle" fill="currentColor" stroke="none">128 gigabytes of storage</text><rect x="20" y="100" width="6" height="6" fill="#0F6E56" stroke="none"/><text x="38" y="108" fill="currentColor" stroke="none">one photo: 4 megabytes</text><text x="20" y="140" fill="currentColor" stroke="none">How many of these fit in the bar?</text></svg></figure>

No calculator. How many photos fit?

## Run: bigger over smaller

```step
stage: run
insight: "A kilobyte over a megabyte divides two powers of 10: the index goes negative, because the kilobyte is the smaller one."
try: { playground: board, starter: "laws.yml#run", height: 600 }
check: { type: board, text: "Set the board to $10^3 \\div 10^6$: a kilobyte as a fraction of a megabyte. What's left underneath?", when: "m = 3 and n = 6" }
```

Move $m$ and $n$. Look at the index of the answer, and what it means.

## Investigate: all the laws

```step
stage: investigate
insight: "The laws are the same for any indices; the care is in the signs. Jo subtracts the size of a negative index instead of subtracting the negative."
tasks:
  - check:
      type: number
      q: "Simplify $2^{-3} \\times 2^{5}$. It's 2 to what power?"
      answer: 2
      explain: "Multiplying adds the indices: −3 + 5 = 2, so 2²."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo simplifies $5^6 \\div 5^{-2}$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: subtract-negative-index
      explain: "Line 3: 6 − (−2) = 6 + 2 = 8. Subtracting a negative adds, so it's 5⁸."
  - check:
      type: question
      q: "What is $(4 \\times 10^{-3}) \\times (2 \\times 10^{5})$?"
      options: ["$8 \\times 10^{2}$", "$8 \\times 10^{-15}$", "$6 \\times 10^{2}$", "$8 \\times 10^{8}$"]
      answer: 0
      feedback: [null, "Add the indices, don't multiply them: −3 + 5 = 2.", "Multiply 4 and 2, don't add them.", "−3 + 5 = 2, not 8."]
      explain: "4 × 2 = 8 and 10⁻³ × 10⁵ = 10²."
```

### Add the indices

Here's the routine with negatives in it.

```worked
(2^{-2})^3 \times 2^9 \div 2^{-1} :: Powers of powers first.
= 2^{-6} \times 2^9 \div 2^{-1} :: −2 × 3 = −6.
= 2^{3} \div 2^{-1} :: Multiply: −6 + 9 = 3.
= 2^{3 - (-1)} :: Divide: subtract the index.
= 2^4 = 16 :: 3 − (−1) = 4.
```

Now try one on paper: $5^{-3} \times 5^7 \div 5^2$. Then type the value.

### Find the mistake

Read Jo's working. What's $6 - (-2)$?

### Scientific style

## Modify: change the indices

```step
stage: modify
insight: "Changing the base, the signs and the power of a power: the same laws, with care over negative indices and a zero index."
try: { playground: board, starter: "laws.yml#vary", height: 620 }
tasks:
  - hint: ["Set a to 2, m to 3 and n to 5.", "Subtract the indices: 3 − 5."]
    check: { type: answer, q: "Work out $2^3 \\div 2^5$ as a fraction.", answer: "1/4", form: simplest, feedback: [["1/2", "3 − 5 = −2, so 2⁻² = 1/4."], ["-4", "A negative power isn't a negative number."]], explain: "2³ ÷ 2⁵ = 2⁻² = 1/4." }
  - hint: ["$6^0 = 1$.", "Then $2^{-2}$."]
    check: { type: answer, q: "Work out $6^0 \\times 2^{-2}$ as a fraction.", answer: "1/4", form: simplest, feedback: [["0", "6⁰ is 1, not 0."], ["1/24", "6⁰ = 1. Multiply 1 by 1/4."]], explain: "6⁰ = 1 and 2⁻² = 1/4." }
    smaller:
      check: { type: "number", q: "Just the first part: what's $6^0$?", answer: 1, explain: "Anything to the power 0 is 1." }
  - hint: ["Multiply the indices: −1 × −3.", "A negative times a negative is positive."]
    check: { type: number, q: "Edge case: simplify $(2^{-1})^{-3}$. It's 2 to what power?", answer: 3, explain: "−1 × −3 = 3, so 2³ = 8." }
```

### Dividing to negative

### With a zero

### Negative times negative

## Practise: mixed laws

```step
stage: practise
insight: "Using each law with negative and zero indices, mixed; the review keeps one Year 8 law fresh."
tasks:
  - check:
      type: number
      q: "Simplify $3^{-4} \\times 3^{6}$. It's 3 to what power?"
      answer: 2
      explain: "−4 + 6 = 2."
  - check:
      type: number
      q: "Simplify $7^{2} \\div 7^{-3}$. It's 7 to what power?"
      answer: 5
      explain: "2 − (−3) = 5."
  - check:
      type: number
      q: "Simplify $(5^{-2})^{3}$. It's 5 to what power?"
      answer: -6
      explain: "−2 × 3 = −6."
    smaller:
      check: { type: "number", q: "Just the indices: what's $-2 \\times 3$?", answer: -6, explain: "A negative times a positive is negative: −6." }
  - check:
      type: answer
      q: "Review: work out $10^3 \\times 10^{-5}$ as a decimal."
      answer: "0.01"
      form: simplified
      feedback:
        - ["0.001", "3 + (−5) = −2, so 10⁻² = 0.01."]
      explain: "10³ × 10⁻⁵ = 10⁻² = 0.01."
```

### Multiply

### Divide

### Power of a power

### Review

Powers of 10, from the Year 8 laws.

## Make: back to the phone

```step
stage: make
insight: "Coming back to the photos: writing the sizes as powers of 10 turns the question into a division of numbers and a division of powers."
tasks:
  - hint: ["Write both in bytes.", "128 ÷ 4 and 10⁹ ÷ 10⁶."]
    check:
      type: reasoning
      paper: true
      q: "A phone has 128 GB of storage. Each photo is 4 MB. Use powers of 10 to work out how many photos fit."
      steps:
        - ["$128 \\times 10^{9}$ bytes and $4 \\times 10^{6}$ bytes", "giga is 10⁹ and mega is 10⁶"]
        - ["$(128 \\times 10^{9}) \\div (4 \\times 10^{6})$", "storage divided by the size of a photo"]
        - ["$32 \\times 10^{3}$", "128 ÷ 4 = 32 and 10⁹ ÷ 10⁶ = 10³"]
        - ["32 000 photos", "multiply out"]
      answer: "32000"
      answerLabel: "Photos"
      feedback:
        - ["32", "That's 32 × 10³, with the 10³ left off."]
        - ["320000", "10⁹ ÷ 10⁶ = 10³ = 1000, not 10 000."]
      criteria:
        - "I wrote both sizes in bytes as numbers times powers of 10."
        - "I divided the numbers and then subtracted the indices."
        - "My answer is in the tens of thousands."
      explain: "(128 × 10⁹) ÷ (4 × 10⁶) = 32 × 10³ = 32 000."
  - check:
      type: number
      q: "A kilobyte is $10^3$ bytes and a gigabyte is $10^9$ bytes. A kilobyte is $10^{?}$ of a gigabyte. What's the index?"
      answer: -6
      explain: "10³ ÷ 10⁹ = 10⁻⁶: a millionth."
```

### The photos

Back to the phone. Work it out on paper first, then type your answer.

### A kilobyte as a fraction

Prefix sizes: [SI prefixes, BIPM](https://www.bipm.org/en/measurement-units/si-prefixes). (Phone makers sometimes use $2^{10}$ steps; this task uses the SI powers of 10.)

**Also used in**

- **Computing.** Storage, memory and download speeds all use kilo, mega, giga.
- **Next lessons.** The same laws on letters, then scientific notation.
