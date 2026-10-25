---
order: 9
unit: powers9
node: AC9M9A01 n3
uses: [AC9M9A01 n2]
assumes: [AC9M8N02 n1, AC9M8N02 n2]
connection: scale-up-monster
title: Index laws with letters
summary: "A letter stands for a number, so the index laws work on it the same way. Numbers in front multiply; indices add, subtract or multiply by the same laws."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Make an animal 10 times longer and it's 1000 times heavier. Letters and index laws show why."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8346
  url: http://127.0.0.1:8346/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: laws.yml#explain-pic, caption: "$a^2 \\times a^3$: two $a$s and three $a$s make five, so $a^5$. Here $a = 3$." }
explainClip:
  query: { code: "@laws.yml#explain", fresh: 1, id: explain }
  caption: "A letter follows the same laws as a number"
  say: "A letter is a number you haven't chosen yet. The same laws work."
  clip:
    - caption: { text: "a² × a¹: three a's in all: a³.", say: "A squared times a: three a's, so a cubed." }
    - click: Make the second index bigger
    - wait: 900
    - caption: { text: "a² × a²: four a's: a⁴. The indices add.", say: "Two and two: four a's. The indices add." }
    - click: Make the second index bigger
    - wait: 900
    - caption: { text: "a² × a³: five a's: a⁵.", say: "Two and three make five." }
    - wait: 800
---
A letter is just a number you haven't chosen yet. So the index laws you know work on it, with the numbers in front kept separate.

## Predict: the scaled-up lizard

```step
stage: predict
insight: "Committing to a weight for the scaled-up lizard shows who thinks weight grows with length (×10) or with area (×100) rather than volume."
check:
  type: predict
  q: "A film monster is a lizard made 10 times longer, 10 times wider and 10 times taller, in the same shape. How many times heavier is it?"
  options:
    - "1000 times"
    - "10 times"
    - "100 times"
    - "30 times"
  actual: "1000 times. Weight follows volume: length × width × height. 10 × 10 × 10 = 10³ = 1000. Its leg bones only get 10 × 10 = 100 times the cross-section, so each part of a leg carries 10 times as much as before."
```

<figure class="situation" role="img" aria-label="A small lizard and a lizard drawn ten times longer, wider and taller, in the same shape, with a box around each."><svg viewBox="0 0 380 200" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><ellipse cx="70" cy="160" rx="30" ry="12" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><path d="M100 160 L130 155" stroke="#0F6E56"/><text x="40" y="190" fill="currentColor" stroke="none">1 × length</text><ellipse cx="270" cy="105" rx="90" ry="40" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><path d="M360 105 L378 98" stroke="#0F6E56"/><text x="230" y="190" fill="currentColor" stroke="none">10 × length</text></svg></figure>

A lizard is scaled up 10 times in every direction. Is its weight 10 times, 100 times or 1000 times more?

## Run: add the indices

```step
stage: run
insight: "Multiplying powers of the same base adds the indices, whatever the base. A letter is a base you haven't chosen yet."
try: { playground: board, starter: "laws.yml#run", height: 600 }
check: { type: board, text: "Set the board to $a^2 \\times a^3$ with $a = 3$. How many $a$s are there in all?", when: "a = 3 and m = 2 and n = 3" }
```

Change the base and the indices. The board uses a number for $a$. The laws are the same for any $a$.

## Investigate: numbers and letters

```step
stage: investigate
insight: "Coefficients multiply and powers of each letter follow the index laws. Kim multiplies the indices when she should add them."
tasks:
  - check:
      type: answer
      q: "Simplify $a^3 \\times a^5$. Type $a^8$ as a^8."
      answer: "a^8"
      form: simplified
      feedback:
        - ["a^15", "Multiplying powers adds the indices: 3 + 5, not 3 × 5."]
        - ["2a^8", "There's no 2: a³ × a⁵ is eight a's multiplied."]
      explain: "a³ × a⁵: three a's and five a's make eight: a⁸."
  - check:
      type: bug
      code: "working.txt#kim"
      text: "Kim simplifies $3a^2 \\times 4a^3$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: index-multiply-for-product
      explain: "Line 3: multiplying powers adds the indices: 2 + 3 = 5. So 3a² × 4a³ = 12a⁵."
  - check:
      type: question
      q: "What is $(2a^3)^2$?"
      options: ["$4a^6$", "$2a^6$", "$4a^5$", "$2a^5$"]
      answer: 0
      feedback: [null, "The 2 is squared too: 2 × 2 = 4.", "A power of a power multiplies: 3 × 2 = 6.", "Square the 2 and multiply the indices."]
      explain: "(2a³)² = 2² × (a³)² = 4a⁶."
```

### Add the indices

Here's the routine with numbers and two letters.

```worked
3x^2y \times 4xy^3 \div 6x^2y :: Numbers, then each letter.
= 12x^3y^4 \div 6x^2y :: Multiply: 3 × 4 = 12, x² × x = x³, y × y³ = y⁴.
= 2 x^{3-2} y^{4-1} :: Divide: 12 ÷ 6 = 2, subtract the indices.
= 2xy^3 :: x¹ is just x.
```

Now try one on paper: $5a^3b^2 \times 2ab^4$. Then type your answer.

### Find the mistake

Read Kim's working. Add or multiply?

### A power of a product

## Modify: change the letters and indices

```step
stage: modify
insight: "Changing the pattern: a smaller index on top (a negative result), a power of a power and a zero index."
try: { playground: board, starter: "laws.yml#vary", height: 620 }
tasks:
  - hint: ["Set m to 2 and n to 5.", "Subtract the indices: 2 − 5."]
    check: { type: answer, q: "Simplify $a^2 \\div a^5$. Type $a^{-3}$ as a^-3.", answer: "a^-3", form: simplified, feedback: [["a^3", "2 − 5 is −3, not 3."], ["-a^3", "A negative index doesn't make a negative number."]], explain: "a² ÷ a⁵ = a^(2−5) = a⁻³." }
    smaller:
      check: { type: "number", q: "Just the index: what's $2 - 5$?", answer: -3, explain: "2 − 5 = −3." }
  - hint: ["Do the power of a power first.", "$(a^2)^3 = a^6$."]
    check: { type: answer, q: "Simplify $(a^2)^3 \\times a$.", answer: "a^7", form: simplified, feedback: [["a^6", "There's an extra a: a⁶ × a¹."], ["a^5", "Multiply the indices in the brackets: 2 × 3 = 6."]], explain: "(a²)³ = a⁶, and a⁶ × a = a⁷." }
  - hint: ["Anything to the power 0 is 1.", "$(7a)^0$ means the whole bracket."]
    check: { type: number, q: "Edge case: what is $(7a)^0$? (Take $a$ as any number that isn't 0.)", answer: 1, explain: "Anything (not zero) to the power 0 is 1." }
```

### Smaller on top

### A power of a power

### Zero index

## Practise: mixed laws with letters

```step
stage: practise
insight: "Using each law with letters, coefficients and two letters, mixed; the review keeps a numeric negative power fresh."
tasks:
  - check:
      type: answer
      q: "Simplify $6x^4 \\times 2x^3$."
      answer: "12x^7"
      form: simplified
      feedback:
        - ["12x^12", "Multiplying powers adds the indices: 4 + 3."]
        - ["8x^7", "Multiply the numbers: 6 × 2 = 12."]
      explain: "6 × 2 = 12 and x⁴ × x³ = x⁷."
  - check:
      type: answer
      q: "Simplify $10a^7b^2 \\div 5a^3b$."
      answer: "2a^4b"
      form: simplified
      feedback:
        - ["2a^10b", "Dividing powers subtracts the indices: 7 − 3 = 4."]
        - ["5a^4b", "10 ÷ 5 = 2."]
      explain: "10 ÷ 5 = 2, a⁷ ÷ a³ = a⁴, b² ÷ b = b."
  - check:
      type: answer
      q: "Simplify $(3a^2)^3$."
      answer: "27a^6"
      form: simplified
      feedback:
        - ["3a^6", "The 3 is cubed too: 27."]
        - ["9a^6", "3³ = 27, not 9."]
      explain: "3³ = 27 and (a²)³ = a⁶."
    smaller:
      check: { type: "number", q: "Just the number: what's $3^3$?", answer: 27, explain: "3 × 3 × 3 = 27." }
  - check:
      type: answer
      q: "Review: work out $4^{-2}$ as a fraction."
      answer: "1/16"
      form: simplest
      feedback:
        - ["-16", "A negative power isn't a negative number."]
      explain: "4⁻² = 1/4² = 1/16."
```

### Multiply

### Divide

### A power of a product

### Review

A negative power, from the last two lessons.

## Make: back to the monster

```step
stage: make
insight: "Coming back to the lizard: letters let the scaling work for any factor, and the ratio shows why the legs struggle."
tasks:
  - hint: ["Scale factor k: length k, area k², volume k³.", "Divide weight by leg area."]
    check:
      type: reasoning
      paper: true
      q: "A lizard is made $k$ times longer in every direction. Its weight goes up by $k^3$ and the cross-section of its legs by $k^2$. By what factor does the load on each bit of leg go up, when $k = 10$?"
      steps:
        - ["Weight $\\times k^3$ and leg area $\\times k^2$", "what grows by how much"]
        - ["$k^3 \\div k^2 = k$", "subtract the indices"]
        - ["$k = 10$: ten times", "put the scale factor in"]
      answer: "10"
      answerLabel: "Load on each bit of leg (times)"
      feedback:
        - ["1000", "That's the weight. Divide by the leg area's 100."]
        - ["100", "That's the leg area. The load is weight ÷ area."]
      criteria:
        - "I wrote the weight and the leg area using k."
        - "I subtracted the indices when I divided."
        - "My answer goes up with k."
      explain: "k³ ÷ k² = k: ten times the load on each bit of leg."
  - check:
      type: question
      q: "Which grows fastest when a shape is scaled up by $k$?"
      options: ["Volume, $k^3$", "Area, $k^2$", "Length, $k$"]
      answer: 0
      feedback: [null, "Area grows by k², but volume grows by k³, faster.", "Length grows the slowest."]
      explain: "Volume goes with k³, which grows fastest."
```

### The legs

Back to the lizard. Work it out on paper first, then type your answer.

### What grows fastest?

The scaling facts here come from the geometry of similar shapes. Real animals aren't exact copies at different sizes, so this is a model, not a measurement.

**Also used in**

- **Science.** Why small animals can jump many times their length and big ones can't.
- **Next lesson.** Writing very big and very small numbers in scientific notation.
