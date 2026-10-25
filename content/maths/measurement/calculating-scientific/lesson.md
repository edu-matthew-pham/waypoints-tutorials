---
order: 11
unit: sci9
node: AC9M9M02 n2
uses: [AC9M9M02 n1, AC9M9A01 n2]
assumes: [AC9M8N02 n1, AC9M8N02 n2, AC9M9A01 n1, AC9M9A01 n2]
connection: sunlight-time
title: Calculating in scientific notation
summary: "Multiply or divide the number parts, add or subtract the powers of 10, then check the number part is still from 1 to 10."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Light takes about 8 minutes to reach us from the Sun. How far is that, without a calculator?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8348
  url: http://127.0.0.1:8348/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: calc.yml#explain-pic, caption: "$15 \\times 10^{10}$ is $1.5 \\times 10^{11}$: the number part has to be from 1 to 10, so move a factor of 10 into the power." }
explainClip:
  query: { code: "@calc.yml#explain", fresh: 1, id: explain }
  caption: "Fix the number part, then fix the power"
  say: "Fifteen times ten to the ten has a number part that's too big."
  clip:
    - caption: { text: "15 × 10¹⁰: the number part is too big.", say: "Fifteen is too big for the number part." }
    - wait: 900
    - caption: { text: "15 = 1.5 × 10, so one more 10 goes in the power.", say: "Fifteen is one point five times ten. That adds one to the power." }
    - click: Make k bigger
    - wait: 900
    - caption: { text: "1.5 × 10¹¹.", say: "One point five times ten to the eleven." }
    - wait: 800
---
Scientific notation is made for calculating. The number parts multiply and the powers of 10 follow the index laws.

## Predict: the distance to the Sun

```step
stage: predict
insight: "Committing to a distance shows who slips by a power of 10 when multiplying a speed and a time."
check:
  type: predict
  q: "Light travels at $3 \\times 10^{8}$ m/s. It takes about 500 seconds ($5 \\times 10^{2}$) to reach us from the Sun. How far is the Sun?"
  options:
    - "$1.5 \\times 10^{11}$ m"
    - "$1.5 \\times 10^{10}$ m"
    - "$1.5 \\times 10^{12}$ m"
    - "$8 \\times 10^{10}$ m"
  actual: "1.5 × 10¹¹ m. Distance = speed × time = (3 × 10⁸) × (5 × 10²) = 15 × 10¹⁰ = 1.5 × 10¹¹ m: 150 million kilometres."
```

<figure class="situation" role="img" aria-label="The Sun on the left and the Earth on the right with a long arrow between them labelled: light, about 500 seconds. The distance between them is marked with a question mark."><svg viewBox="0 0 400 140" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="50" cy="70" r="30" fill="#EF9F27" fill-opacity="0.5" stroke="#BA7517"/><circle cx="360" cy="70" r="10" fill="#378ADD" fill-opacity="0.5" stroke="#185FA5"/><path d="M90 70 L342 70" stroke-width="2"/><path d="M342 70 l-10 -6 m10 6 l-10 6" stroke-width="2"/><text x="215" y="55" text-anchor="middle" fill="currentColor" stroke="none">light: about 500 seconds</text><text x="215" y="100" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

Sunlight takes about 500 seconds. How far has it come? Don't use a calculator.

## Run: fix the number part

```step
stage: run
insight: "Multiplying the number parts can give 10 or more. Then the number part is rewritten from 1 to 10, and the power changes to match."
try: { playground: board, starter: "calc.yml#run", height: 600 }
check: { type: board, text: "$3 \\times 5 = 15$ and $10^{8} \\times 10^{2} = 10^{10}$, so the answer is $15 \\times 10^{10}$. Set the board to the same number with a number part from 1 to 10. Was your prediction right?", when: "a = 1.5 and k = 11" }
```

The board writes $a \times 10^k$ out. Which values of $a$ and $k$ give the same number as $15 \times 10^{10}$?

## Investigate: number parts, then powers

```step
stage: investigate
insight: "Multiply the number parts, add the powers, then fix the number part if it's 10 or more. Mia stops one step early."
tasks:
  - check:
      type: number
      q: "Work out $(2 \\times 10^{3}) \\times (3 \\times 10^{4})$ as $6 \\times 10^{k}$. What's $k$?"
      answer: 7
      explain: "2 × 3 = 6 and 3 + 4 = 7: 6 × 10⁷."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia works out $(4 \\times 10^{3}) \\times (5 \\times 10^{4})$. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: sci-not-normalised
      explain: "Line 4: 20 × 10⁷ isn't in scientific notation, because 20 is more than 10. 20 = 2 × 10, so it's 2 × 10⁸."
  - check:
      type: question
      q: "What is $(6 \\times 10^{5}) \\div (2 \\times 10^{2})$?"
      options: ["$3 \\times 10^{3}$", "$3 \\times 10^{7}$", "$4 \\times 10^{3}$", "$3 \\times 10^{2.5}$"]
      answer: 0
      feedback: [null, "Divide means subtract the powers: 5 − 2 = 3.", "Divide the number parts: 6 ÷ 2 = 3.", "Subtract the whole powers: 5 − 2."]
      explain: "6 ÷ 2 = 3 and 10⁵ ÷ 10² = 10³."
```

### Multiply

Here's the whole routine, with a number part that grows.

```worked
(3 \times 10^{8}) \times (5 \times 10^{2}) :: Speed times time.
3 \times 5 = 15 :: Multiply the number parts.
10^{8} \times 10^{2} = 10^{10} :: Add the powers.
15 \times 10^{10} :: Too big: the number part is 10 or more.
1.5 \times 10 \times 10^{10} :: 15 = 1.5 × 10.
1.5 \times 10^{11} :: Add the extra 10 to the power.
```

Now try one on paper: $(2.5 \times 10^{4}) \times (4 \times 10^{3})$. Then type the power in your answer.

### Find the mistake

Read Mia's working. Is 20 allowed as the number part?

### Divide

## Modify: change the calculation

```step
stage: modify
insight: "One change at a time: division, a negative power, then adding instead of multiplying."
try: { playground: board, starter: "calc.yml#vary", height: 620 }
tasks:
  - hint: ["Divide the number parts: 8 ÷ 2.", "Subtract the powers: 7 − 4."]
    check: { type: number, q: "Work out $(8 \\times 10^{7}) \\div (2 \\times 10^{4})$ as $4 \\times 10^{k}$. What's $k$?", answer: 3, explain: "8 ÷ 2 = 4 and 7 − 4 = 3: 4 × 10³." }
  - hint: ["Add the powers: −3 + 5.", "Multiply the number parts: 3 × 2."]
    check: { type: number, q: "Work out $(3 \\times 10^{-3}) \\times (2 \\times 10^{5})$ as $6 \\times 10^{k}$. What's $k$?", answer: 2, explain: "3 × 2 = 6 and −3 + 5 = 2: 6 × 10²." }
    smaller:
      check: { type: "number", q: "Just the powers: what's $-3 + 5$?", answer: 2, explain: "−3 + 5 = 2." }
  - hint: ["You can't add the powers: these are added numbers.", "Write both as ordinary numbers first."]
    check: { type: answer, q: "Edge case: work out $3 \\times 10^{4} + 2 \\times 10^{3}$ as an ordinary number.", answer: "32000", form: simplified, feedback: [["5 × 10^7", "Adding doesn't add the powers. 30 000 + 2 000."], ["50000", "3 × 10⁴ = 30 000 and 2 × 10³ = 2 000."]], explain: "30 000 + 2 000 = 32 000, or 3.2 × 10⁴." }
```

### Divide

### Negative power

### Add

## Practise: calculate

```step
stage: practise
insight: "Multiplying, dividing and fixing the number part, mixed; the review keeps conversion fresh."
tasks:
  - check:
      type: number
      q: "Work out $(2 \\times 10^{5}) \\times (3 \\times 10^{2})$ as $6 \\times 10^{k}$. What's $k$?"
      answer: 7
      explain: "2 × 3 = 6 and 5 + 2 = 7."
  - check:
      type: number
      q: "Work out $(9 \\times 10^{6}) \\times (6 \\times 10^{3})$ as $5.4 \\times 10^{k}$. What's $k$?"
      answer: 10
      explain: "9 × 6 = 54 and 6 + 3 = 9: 54 × 10⁹ = 5.4 × 10¹⁰."
    smaller:
      check: { type: "number", q: "Just 9 × 6: what's the number part before it's fixed?", answer: 54, explain: "9 × 6 = 54. Then 54 = 5.4 × 10, which adds 1 to the power." }
  - check:
      type: number
      q: "Work out $(6 \\times 10^{-2}) \\div (3 \\times 10^{4})$ as $2 \\times 10^{k}$. What's $k$?"
      answer: -6
      explain: "6 ÷ 3 = 2 and −2 − 4 = −6."
  - check:
      type: number
      q: "Review: write $0.0063$ as $6.3 \\times 10^{k}$. What's $k$?"
      answer: -3
      explain: "The point moves 3 places right: k = −3."
```

### Multiply

### A bigger number part

### Divide

### Review

Conversion, from the last lesson.

## Make: back to the Sun

```step
stage: make
insight: "Coming back to the opening: the whole routine on a real distance, then a check against a published value."
tasks:
  - hint: ["Distance = speed × time.", "Multiply the number parts, add the powers, fix the number part."]
    check:
      type: reasoning
      paper: true
      q: "Light travels at $3 \\times 10^{8}$ m/s and takes about 500 s to reach us from the Sun. Work out the distance in metres in scientific notation. What's the power of 10?"
      steps:
        - ["$500 = 5 \\times 10^{2}$", "write the time in scientific notation"]
        - ["$(3 \\times 10^{8}) \\times (5 \\times 10^{2}) = 15 \\times 10^{10}$", "multiply the number parts, add the powers"]
        - ["$15 \\times 10^{10} = 1.5 \\times 10^{11}$", "fix the number part"]
      answer: "11"
      answerLabel: "The power of 10"
      feedback:
        - ["10", "15 × 10¹⁰ still needs fixing: the number part is more than 10."]
        - ["12", "15 = 1.5 × 10, so add 1 to 10, not 2."]
      criteria:
        - "I wrote 500 as 5 × 10²."
        - "My number part is from 1 to 10."
        - "My answer matches 1.5 × 10¹¹ m."
      explain: "1.5 × 10¹¹ m."
  - check:
      type: number
      q: "NASA gives the average distance as 150 million km. In metres, that's $1.5 \\times 10^{k}$. What's $k$?"
      answer: 11
      explain: "150 million km = 150 000 000 000 m = 1.5 × 10¹¹ m. It matches."
```

### The distance

Back to the Sun. Work it out on paper first, then type the power.

### Check with NASA

Light time: [Smithsonian](https://howthingsfly.si.edu/ask-an-explainer/how-long-does-it-take-light-sun-get-earth) says about 8 minutes 20 seconds, which is about 500 s. Speed of light: [NIST](https://physics.nist.gov/cuu/Constants/Value/c.html). Earth's average distance from the Sun: [NASA](https://science.nasa.gov/earth/facts/). Earth's orbit isn't a perfect circle, so the distance changes a little through the year.

**Also used in**

- **Computing.** Data sizes and speeds are multiplied and divided in powers of 10.
- **Next lesson.** Using scientific notation for real measurements, from medicine to space.
