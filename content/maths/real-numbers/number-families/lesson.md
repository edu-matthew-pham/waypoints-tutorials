---
order: 10
unit: reals9
node: AC9M9N01 n1
uses: [AC9M8N01 n1, AC9M8N01 n2]
assumes: [AC9M8N01 n1, AC9M8N01 n2]
title: Number families
summary: "Natural numbers sit inside the integers, the integers inside the rational numbers, and the rational and irrational numbers together make the real numbers. Each family was invented to answer a question the last couldn't."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Each kind of number was invented because the old ones couldn't answer a question. Which question did each one answer?"
---
You've met whole numbers, negatives, fractions and numbers like √2. They fit inside each other like nested boxes.

## Predict: the smallest family

```step
stage: predict
insight: "Committing to the smallest family before sorting shows who thinks the nesting stops at the rationals, or forgets √2 isn't a fraction."
check:
  type: predict
  q: "Which is the smallest family that contains all of these: $7$, $-3$, $0.5$ and $\\sqrt{2}$?"
  options:
    - "The real numbers"
    - "The rational numbers"
    - "The integers"
    - "The natural numbers"
  actual: "The real numbers. 7 is natural, −3 is an integer, 0.5 = 1/2 is rational, but √2 never ends or repeats, so it's irrational. Rational and irrational numbers together make the real numbers."
```

<figure class="situation" role="img" aria-label="Four question cards in a row. Subtract 5 from 2 is minus 3. Share 1 between 2 is a half. Which number times itself makes 2 is a question mark. Count 1, 2, 3 and so on is where numbers started."><svg viewBox="0 0 440 150" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="5" y="30" width="100" height="80" rx="8" fill="#1D9E75" fill-opacity="0.2" stroke="#0F6E56"/><text x="55" y="70" text-anchor="middle" fill="currentColor" stroke="none">count</text><text x="55" y="92" text-anchor="middle" fill="currentColor" stroke="none">1, 2, 3 …</text><rect x="115" y="30" width="100" height="80" rx="8" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="165" y="70" text-anchor="middle" fill="currentColor" stroke="none">2 − 5</text><text x="165" y="92" text-anchor="middle" fill="currentColor" stroke="none">= ?</text><rect x="225" y="30" width="100" height="80" rx="8" fill="#EF9F27" fill-opacity="0.25" stroke="#BA7517"/><text x="275" y="70" text-anchor="middle" fill="currentColor" stroke="none">1 shared</text><text x="275" y="92" text-anchor="middle" fill="currentColor" stroke="none">between 2</text><rect x="335" y="30" width="100" height="80" rx="8" fill="#7F77DD" fill-opacity="0.2" stroke="#534AB7"/><text x="385" y="70" text-anchor="middle" fill="currentColor" stroke="none">? × ? = 2</text></svg></figure>

Four questions, and each needs a bigger kind of number. Which family holds a number that answers all four?

## Run: sort the numbers

```step
stage: run
insight: "Sorting numbers into their smallest family shows the nesting: a number can belong to several families, but has one smallest."
check:
  type: sort
  q: "Which is the smallest family that each number belongs to?"
  options: ["Natural", "Integer", "Rational", "Irrational"]
  items:
    - ["5", "Natural"]
    - ["−2", "Integer", "It's a whole number, but below the naturals."]
    - ["3/4", "Rational"]
    - ["√7", "Irrational"]
    - ["√16", "Natural", "√16 = 4."]
    - ["−√9", "Integer", "−√9 = −3."]
    - ["0.333…", "Rational", "It's 1/3."]
    - ["π", "Irrational"]
  explain: "Each number goes in the smallest family that holds it. 5 is also an integer and rational, but its smallest family is natural."
```

Natural numbers are 1, 2, 3 and so on. Integers add zero and the negatives. Rational numbers can be written as a fraction of two integers. Irrational numbers can't.

## Investigate: the nesting

```step
stage: investigate
insight: "Every natural number is an integer, every integer is rational and every rational is real. Having a root sign doesn't make a number irrational: it depends on what's under it. Zoe judges √16 by the sign."
tasks:
  - check:
      type: question
      q: "True or false: every integer is a rational number."
      options: ["True: 5 = 5/1", "False: integers aren't fractions", "False: only positive integers are", "It depends on the integer"]
      answer: 0
      feedback: [null, "Any integer can be written as a fraction with 1 underneath.", "−5 = −5/1 is also rational.", "Every integer can be written over 1."]
      explain: "Any integer n is the fraction n/1, so every integer is rational."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe decides whether √16 is rational or irrational. Click the line where her thinking goes wrong."
      answer: 2
      fault: logic
      misconception: root-sign-irrational
      explain: "Line 2: a root sign doesn't make a number irrational. √16 = 4, a whole number, so it's rational. √7 would be irrational: 7 isn't a perfect square."
  - check:
      type: number
      q: "How many of $\\sqrt{4}$, $\\sqrt{5}$, $\\sqrt{9}$, $\\sqrt{10}$ and $\\sqrt{16}$ are irrational?"
      answer: 2
      explain: "√4 = 2, √9 = 3 and √16 = 4 are whole numbers. √5 and √10 are irrational."
```

### Every integer

The nesting, step by step.

```worked
5 :: Natural: a counting number.
-5 :: Not natural. Integer.
-5 = \tfrac{-5}{1} :: So it's also rational.
\tfrac{1}{2} :: Rational, not an integer.
\sqrt{2} :: Not a fraction: irrational.
\text{rational} + \text{irrational} = \text{real} :: Every number on the number line is real.
```

Now try one on paper: for each of $\sqrt{4}$, $\tfrac{1}{2}$, $-3$, $\sqrt{3}$ and $5$, write whether it's rational. Then type how many are.

### Find the mistake

Read Zoe's thinking. What decides if a root is irrational?

### Count the irrationals

## Modify: change the number

```step
stage: modify
insight: "Changing one number at a time: a root of a perfect square, an irrational plus its opposite, and a decimal that stops."
tasks:
  - hint: ["Is 25 a perfect square?", "5 × 5 = 25."]
    check: { type: question, q: "Is $\\sqrt{25}$ rational or irrational?", options: ["Rational: it equals 5", "Irrational: it has a root sign"], answer: 0, feedback: [null, "A root sign doesn't make a number irrational: 5 × 5 = 25."], explain: "√25 = 5, a whole number." }
    smaller:
      check: { type: "number", q: "What number times itself makes 25?", answer: 5, explain: "5 × 5 = 25, so √25 = 5." }
  - hint: ["Work it out: √2 + (−√2).", "What is a number plus its opposite?"]
    check: { type: question, q: "Edge case: is $\\sqrt{2} + (-\\sqrt{2})$ rational or irrational?", options: ["Rational: it's 0", "Irrational: both parts are irrational"], answer: 0, feedback: [null, "Two irrationals can add to a rational: the parts cancel."], explain: "√2 + (−√2) = 0, which is rational." }
  - hint: ["It stops. Can you write it as a fraction?", "0.125 = 125/1000."]
    check: { type: question, q: "Is $0.125$ rational or irrational?", options: ["Rational: it stops, so it's a fraction", "Irrational: it has a decimal point"], answer: 0, feedback: [null, "A decimal that stops is a fraction: 125/1000 = 1/8."], explain: "0.125 = 125/1000 = 1/8." }
```

### A root of a square

### Two irrationals

### A short decimal

## Practise: which family

```step
stage: practise
insight: "Sorting again with new numbers; the review keeps exact and rounded values separate."
tasks:
  - check:
      type: sort
      q: "Which is the smallest family that each number belongs to?"
      options: ["Natural", "Integer", "Rational", "Irrational"]
      items:
        - ["12", "Natural"]
        - ["−8", "Integer"]
        - ["2/5", "Rational"]
        - ["√11", "Irrational"]
        - ["√49", "Natural", "√49 = 7."]
        - ["0.75", "Rational", "It's 3/4."]
        - ["−1.5", "Rational", "It's −3/2."]
      explain: "Perfect-square roots are whole numbers, stopping decimals are fractions, and √ of a non-square never ends or repeats."
  - check:
      type: question
      q: "Which is irrational?"
      options: ["$\\sqrt{12}$", "$\\sqrt{36}$", "$\\tfrac{22}{7}$", "$0.\\overline{3}$"]
      answer: 0
      feedback: [null, "√36 = 6.", "22/7 is a fraction, so it's rational (it's only close to π).", "0.333… is 1/3."]
      explain: "12 isn't a perfect square, so √12 never ends or repeats."
    smaller:
      check: { type: "number", q: "Which whole number squared is closest below 12? Type it.", answer: 3, explain: "3² = 9 and 4² = 16, so 12 is between them: not a perfect square." }
  - check:
      type: question
      q: "True or false: the real numbers include both rational and irrational numbers."
      options: ["True", "False: they're only the irrationals", "False: they're only the rationals"]
      answer: 0
      feedback: [null, "Rational numbers are real too.", "Irrational numbers are real too."]
      explain: "Every point on the number line is a real number."
  - check:
      type: number
      q: "Review: what's the exact value of $\\sqrt{81}$?"
      answer: 9
      explain: "9 × 9 = 81."
```

### Sort again

### Spot the irrational

### The real numbers

### Review

A square root, from Irrational numbers.

## Make: why each family exists

```step
stage: make
insight: "Coming back to the opening: each equation needs a family, and the smallest one that holds the answer shows why it was invented."
tasks:
  - hint: ["Solve each equation.", "Then ask: is the answer a whole number, a fraction, or neither?"]
    check:
      type: reasoning
      paper: true
      q: "Solve $x + 5 = 2$, $3x = 2$, $x^2 = 2$ and $x^2 = 9$ (positive answers for the squares). How many of the four answers are NOT rational?"
      steps:
        - ["$x = -3$", "an integer, so also rational"]
        - ["$x = \\tfrac{2}{3}$", "rational"]
        - ["$x = \\sqrt{2}$", "irrational: 2 isn't a perfect square"]
        - ["$x = 3$", "natural, so also rational"]
      answer: "1"
      answerLabel: "Answers that are not rational"
      feedback:
        - ["0", "x² = 2 has the answer √2, which is irrational."]
        - ["2", "Only x² = 2 is not rational: x² = 9 gives 3."]
      criteria:
        - "I solved each equation before sorting."
        - "I remembered that √9 = 3 is a whole number."
        - "My answer is the number of irrational solutions."
      explain: "−3, 2/3 and 3 are rational. Only √2 is irrational."
  - check:
      type: question
      q: "Which equation first needed negative numbers?"
      options: ["$x + 5 = 2$", "$3x = 2$", "$x^2 = 2$"]
      answer: 0
      feedback: [null, "3x = 2 gave a fraction, 2/3.", "x² = 2 gave an irrational number."]
      explain: "x = −3: the integers were invented to answer questions like this."
```

### Who's not rational?

Back to the four questions. Work these out on paper first, then type your answer.

### The first negative

**Also used in**

- **Everyday numbers.** Counting uses naturals, money and temperatures use integers and rationals, and measuring a diagonal can need an irrational.
- **Next lesson.** Exact values like √2 and rounded ones like 1.41: when each is needed.
