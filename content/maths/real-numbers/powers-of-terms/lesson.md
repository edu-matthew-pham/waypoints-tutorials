---
order: 14
unit: powers10
node: [AC9M10A01 n1, AC9M10A01 n2]
uses: [AC9M9SP02 n2]
assumes: [AC9M9A01 n1, AC9M9A01 n2, AC9M9A01 n3]
connection: scale-up-monster
title: Powers of terms
summary: "A whole term can be raised to a power: (2k)³ = 8k³, because the 2 is cubed as well as the k. Divide the terms and a negative index turns into a fraction: 4k² ÷ 8k³ = 1/(2k)."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Scale a model by a factor that already has a letter in it, like 2k, and weight and leg strength both come out as terms with powers."
---
Last year you scaled a lizard up and found its weight grows faster than its legs. This time the scale factor is a term, like $2k$, so the laws have to work on a number and a letter together.

## Predict: a bigger monster

```step
stage: predict
insight: "Committing to a weight factor for a lizard scaled by 6 shows who adds or multiplies the scale factors (6 × 3 = 18), who uses area (36), and who cubes it."
check:
  type: predict
  q: "A film studio scales a lizard model up to 6 times as long, 6 times as wide and 6 times as tall, in the same shape. How many times heavier is the monster?"
  options:
    - "$216$ times"
    - "$6$ times"
    - "$18$ times"
    - "$36$ times"
  actual: "216 times. Weight follows volume: 6 × 6 × 6 = 6³ = 216. Area goes up 6 × 6 = 36 times, which is what the legs' strength follows."
```

<figure class="situation" role="img" aria-label="A small lizard model on the left and a lizard six times longer, wider and taller on the right. Under the big one is written weight: how many times heavier? with a question mark."><svg viewBox="0 0 400 200" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><ellipse cx="60" cy="150" rx="26" ry="10" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><path d="M86 150 L108 145" stroke="#0F6E56"/><text x="30" y="184" fill="currentColor" stroke="none">model</text><ellipse cx="280" cy="100" rx="100" ry="46" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><path d="M380 100 L396 94" stroke="#0F6E56"/><text x="190" y="184" fill="currentColor" stroke="none">6 × every length: heavier by ? times</text></svg></figure>

A studio builds a monster by scaling a small lizard model up in every direction. The weight and the strength of the legs don't grow in step, and that's what the studio's engineers argue about.

## Run: check with a calculator

```step
stage: run
insight: "Scaling by 6 in three directions is 6 × 6 × 6, a power of the scale factor: the index counts the directions."
check: { type: number, q: "Use a calculator. What is $6 \\times 6 \\times 6$? Was your prediction right?", answer: 216, explain: "6³ = 216." }
```

Length is 6 times, area is $6 \times 6$ and volume is $6 \times 6 \times 6$. The index counts how many directions get stretched.

## Investigate: a factor with a letter in it

```step
stage: investigate
insight: "A power applies to the whole bracket: both the number and the letter. Dev gets a negative index right and then reads it as a negative number."
tasks:
  - check:
      type: answer
      q: "The scale factor is $3k$. Weight goes up by $(3k)^3$ and leg strength by $(3k)^2$. Simplify $(3k)^3 \\div (3k)^2$."
      answer: "3k"
      form: simplified
      feedback:
        - ["k", "The 3 is in the bracket, so it's cubed and squared too: 27 ÷ 9 = 3."]
        - ["3k^5", "Dividing subtracts the indices: 3 − 2."]
        - ["27k^3", "That's just the cubed bracket. Divide by 9k² as well."]
      explain: "(3k)³ = 27k³ and (3k)² = 9k². 27 ÷ 9 = 3 and k³ ÷ k² = k, so 3k."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev simplifies $6a^3 \\div 3a^5$. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: negative-power-negative
      explain: "Line 4: a⁻² is a reciprocal, not a negative number. 2a⁻² = 2/a², which is positive."
  - check:
      type: question
      q: "Which is the same as $(3a^2b)^2$?"
      options: ["$9a^4b^2$", "$3a^4b^2$", "$9a^4b$", "$6a^4b^2$"]
      answer: 0
      feedback: [null, "The 3 is squared too: 3² = 9.", "The b is squared as well, so b² stays.", "Squaring 3 gives 9, not 6."]
      explain: "Square each part: 3² = 9, (a²)² = a⁴ and b² = b². So 9a⁴b²."
```

### A scale factor of 3k

A power of a bracket applies to everything inside it. Here's the routine for a factor of $2k$.

```worked
(2k)^3 :: The weight factor: cube the whole bracket.
= 2^3 \times k^3 :: The 2 is cubed as well as the k.
= 8k^3 :: 2³ = 8.
(2k)^2 = 4k^2 :: The leg factor, the same way.
8k^3 \div 4k^2 :: Weight factor divided by leg factor.
= (8 \div 4) \times k^{3-2} :: Numbers first, then subtract the indices.
= 2k :: k¹ is just k.
```

Now try one on paper: a factor of $3k$, so work out $(3k)^3 \div (3k)^2$ the same way. Then type your answer.

### Find the mistake

Read Dev's working. Is $a^{-2}$ a negative number?

### A power of a product

## Modify: change the terms

```step
stage: modify
insight: "Changing one thing at a time: letters that need dividing, a bracket inside a bracket, and a letter that cancels completely."
tasks:
  - hint: ["Numbers first: 20 ÷ 5.", "Then a⁶ ÷ a²."]
    check: { type: answer, q: "Simplify $20a^6b \\div 5a^2$.", answer: "4a^4b", form: simplified, feedback: [["4a^8b", "Dividing subtracts the indices: 6 − 2."], ["15a^4b", "20 ÷ 5 = 4, not 15."]], explain: "20 ÷ 5 = 4, a⁶ ÷ a² = a⁴, and b stays." }
  - hint: ["Cube the bracket first: $(2x^2y)^3$.", "Then multiply by $x$."]
    check: { type: answer, q: "Simplify $(2x^2y)^3 \\times x$.", answer: "8x^7y^3", form: simplified, feedback: [["2x^7y^3", "The 2 is cubed too: 8."], ["8x^6y^3", "There's an extra x to multiply on: x⁶ × x¹."]], explain: "(2x²y)³ = 8x⁶y³, and x⁶ × x = x⁷, so 8x⁷y³." }
  - hint: ["$y \\div y$ is 1.", "A letter that cancels disappears."]
    check: { type: answer, q: "Edge case: simplify $12x^5y \\div 4x^2y$.", answer: "3x^3", form: simplified, feedback: [["3x^3y", "y ÷ y = 1, so the y cancels completely."], ["8x^3", "12 ÷ 4 = 3."]], explain: "12 ÷ 4 = 3, x⁵ ÷ x² = x³, and y ÷ y = 1, so no y is left." }
```

### Dividing terms

### A bracket inside a bracket

### A letter that cancels

## Practise: terms and powers

```step
stage: practise
insight: "Using the laws on whole terms: product, quotient, power of a product, and a negative index written as a fraction; the review keeps a numeric negative power fresh."
tasks:
  - check:
      type: answer
      q: "Simplify $6x^4y^2 \\times 2x^3y$."
      answer: "12x^7y^3"
      form: simplified
      feedback:
        - ["12x^12y^2", "Multiplying powers adds the indices: 4 + 3, and y² × y¹ is y³."]
        - ["8x^7y^3", "Multiply the numbers: 6 × 2 = 12."]
      explain: "6 × 2 = 12, x⁴ × x³ = x⁷ and y² × y = y³."
  - check:
      type: answer
      q: "Simplify $(2a^3b)^4$."
      answer: "16a^12b^4"
      form: simplified
      feedback:
        - ["2a^12b^4", "The 2 is raised to the power 4 as well: 16."]
        - ["8a^12b^4", "2⁴ = 16, not 8."]
        - ["16a^7b^4", "A power of a power multiplies the indices: 3 × 4 = 12."]
      explain: "2⁴ = 16, (a³)⁴ = a¹² and b⁴ = b⁴."
    smaller:
      check: { type: "number", q: "Just the number in front: what's $2^4$?", answer: 16, explain: "2 × 2 × 2 × 2 = 16." }
  - check:
      type: answer
      q: "Simplify $5a^2 \\div a^5$ and write the answer with a positive index."
      answer: "5/a^3"
      form: simplified
      feedback:
        - ["-5a^3", "A negative index isn't a negative number. It puts the letter underneath."]
        - ["5a^3", "2 − 5 is −3: the a ends up underneath."]
      explain: "a² ÷ a⁵ = a⁻³ = 1/a³, so 5a² ÷ a⁵ = 5/a³."
  - check:
      type: answer
      q: "Review: work out $2^{-4}$ as a fraction."
      answer: "1/16"
      form: simplest
      feedback:
        - ["-16", "A negative power isn't a negative number."]
        - ["1/8", "2⁴ = 16, not 8."]
      explain: "2⁻⁴ = 1/2⁴ = 1/16."
```

### Multiply

### A power of a product

### Divide and flip

### Review

A negative power, from earlier in the year.

## Make: back to the monster

```step
stage: make
insight: "Coming back to the lizard: with a factor of 2k, the load on its legs goes up by 2k and the leg area per kilogram goes down by 1/(2k)."
tasks:
  - hint: ["Weight goes with the volume factor, $(2k)^3$.", "Load on the legs is weight divided by leg area."]
    check:
      type: reasoning
      paper: true
      q: "The studio scales the lizard by $2k$ in every direction. Weight goes up by $(2k)^3$ and the cross-section of its legs by $(2k)^2$. By what factor does the load on each bit of leg go up? Give it in terms of $k$."
      steps:
        - ["Weight $\\times (2k)^3 = 8k^3$", "cube the whole bracket, number and letter"]
        - ["Leg area $\\times (2k)^2 = 4k^2$", "square the whole bracket"]
        - ["$8k^3 \\div 4k^2 = 2k$", "divide the numbers, subtract the indices"]
      answer: "2k"
      answerLabel: "Load on each bit of leg (times)"
      feedback:
        - ["8k^3", "That's the weight. Divide by the leg area 4k² as well."]
        - ["k", "The numbers don't cancel: 8 ÷ 4 = 2."]
      criteria:
        - "I cubed and squared the 2 as well as the k."
        - "I divided the numbers, then subtracted the indices."
        - "My answer gets bigger when k does."
      explain: "(2k)³ = 8k³ and (2k)² = 4k², so the load goes up by 8k³ ÷ 4k² = 2k. For k = 5 the scale factor is 10, and the load is 10 times as much."
  - check:
      type: answer
      q: "Turn it round: the leg area for each unit of weight changes by $4k^2 \\div 8k^3$. Write it with a positive index."
      answer: "1/(2k)"
      form: simplified
      feedback:
        - ["2k", "That's the load, the other way up."]
        - ["-1/(2k)", "A negative index isn't a negative number."]
      explain: "4k² ÷ 8k³ = (4 ÷ 8) × k⁻¹ = 1/(2k): the bigger the monster, the less leg it has for each kilogram."
```

### The load on the legs

Back to the monster. Work this out on paper first, then type your answer.

### The other way up

The scaling comes from the geometry of similar shapes (length $\times k$, area $\times k^2$, volume $\times k^3$). Real animals change shape as they grow, so this is a model, not a measurement.

**Also used in**

- **Science.** Why a small animal can jump many times its own length and a big one can't.
- **Next lessons.** Expanding the special products, then factorising quadratics that start with more than $x^2$.
