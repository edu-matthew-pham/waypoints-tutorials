---
order: 19
unit: products10
node: AC9M10A01 n3
uses: [AC9M9A02 n1, AC9M9A02 n2, AC9M9A02 n3]
assumes: [AC9M9A02 n1, AC9M9A02 n2, AC9M9A02 n3, AC9M10A01 n2]   # n2 (negative powers with letters) is taught in Real numbers, Year 10
connection: mental-shortcut
title: Special products
summary: "A square bracket has two strips and a corner, so (x − 3)² = x² − 6x + 9, not x² − 9. And (x + a)(x − a) has strips that cancel, leaving x² − a²."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Can you square 51 in your head, and work out 49 × 51, with no calculator?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8351
  url: http://127.0.0.1:8351/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: special.yml#explain-pic, caption: "$(x - 3)^2$: the square $x^2$, two red strips of $3x$ taken off, and a corner of $+9$." }
explainClip:
  query: { code: "@special.yml#explain", fresh: 1, id: explain }
  caption: "A square bracket: two strips and a corner"
  say: "A bracket squared makes a square with two strips and a corner."
  clip:
    - caption: { text: "(x + 2)(x + 2): x², two strips of 2x, and a corner of 4.", say: "x plus two, times x plus two, is a square, two strips and a corner." }
    - wait: 900
    - expect: { selector: "#tsum", contains: "x² + 4x + 4" }
    - caption: { text: "Make both numbers −2: the strips turn red, the corner stays +4.", say: "Make both numbers minus two. The strips turn red, but the corner stays positive." }
    - click: Make p smaller
    - click: Make p smaller
    - click: Make p smaller
    - click: Make p smaller
    - click: Make q smaller
    - click: Make q smaller
    - click: Make q smaller
    - click: Make q smaller
    - expect: { selector: "#tsum", contains: "x² − 4x + 4" }
    - wait: 1400
---
Try $51 \times 51$ in your head. Then try $49 \times 51$. Most people reach for a phone, but a few can do both in a couple of seconds, and it isn't a memorised table. It's a picture, and the picture still works when the number is a letter.

<figure class="situation" role="img" aria-label="Two shapes with their areas missing. A square marked 51 by 51 with a question mark for its area, and a rectangle marked 49 by 51, a little narrower, with a question mark for its area."><svg viewBox="0 0 420 190" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="20" y="30" width="130" height="130" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56" stroke-width="1.2"/><text x="85" y="22" text-anchor="middle" fill="currentColor" stroke="none">51</text><text x="8" y="100" text-anchor="middle" fill="currentColor" stroke="none">51</text><text x="85" y="102" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">?</text><rect x="240" y="30" width="125" height="130" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56" stroke-width="1.2"/><text x="302" y="22" text-anchor="middle" fill="currentColor" stroke="none">49</text><text x="382" y="100" text-anchor="middle" fill="currentColor" stroke="none">51</text><text x="302" y="102" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">?</text></svg></figure>

## Predict: the lawn

```step
stage: predict
insight: "Committing to the area of a lawn with a strip taken off two sides shows who squares each term ((x − 3)² = x² − 9) and who sees two strips and a corner."
check:
  type: predict
  q: "A square lawn is $x$ metres each way. A path 3 m wide takes a strip off two sides, so the lawn that's left is $x - 3$ metres each way. Which expression is its area?"
  options:
    - "$x^2 - 6x + 9$"
    - "$x^2 - 9$"
    - "$x^2 - 6x - 9$"
    - "$x^2 - 3x + 9$"
  actual: "x² − 6x + 9. Start with the whole x by x square and take off the two strips of 3x. The 3 by 3 corner was in both strips, so it's been taken off twice: put 9 back. x² − 9 only squares each part; x² − 6x − 9 forgets to put the corner back."
```

<figure class="situation" role="img" aria-label="A big square lawn marked x by x. A path 3 metres wide runs down the right side and along the bottom, shaded, overlapping in the bottom right corner. The lawn left is a smaller square marked x minus 3 each way, with a question mark for its area."><svg viewBox="0 0 360 290" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="50" y="30" width="210" height="210" stroke-width="1.2" stroke-dasharray="6 4"/><rect x="220" y="30" width="40" height="210" fill="currentColor" fill-opacity="0.18" stroke="none"/><rect x="50" y="200" width="210" height="40" fill="currentColor" fill-opacity="0.18" stroke="none"/><rect x="50" y="30" width="170" height="170" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1.4"/><text x="135" y="118" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><text x="135" y="142" text-anchor="middle" fill="currentColor" stroke="none">lawn left</text><path d="M50 20h210M50 15v10M260 15v10" stroke-width="1"/><text x="155" y="12" text-anchor="middle" fill="currentColor" stroke="none">x</text><path d="M50 255h170M50 250v10M220 250v10" stroke-width="1"/><text x="135" y="276" text-anchor="middle" fill="currentColor" stroke="none">x − 3</text><text x="272" y="140" fill="currentColor" stroke="none">3 m path</text></svg></figure>

The council wants a path along two sides of the lawn. What area of lawn is left? Make a guess before you build it.

## Run: take the strips off

```step
stage: run
insight: "Taking a strip off each side of a square leaves the corner taken off twice, so the corner has to come back: two strips and a corner, not just a square."
try: { playground: board, starter: "special.yml#run", height: 600 }
check: { type: board, text: "Set the board to $(x - 3)(x - 3)$. Which pieces are red, and what's the corner? Was your prediction right?", when: "p = -3 and q = -3" }
```

$p$ and $q$ are the numbers in the brackets. Make both of them $-3$: the red strips are the path, and the board shows what's left.

## Investigate: two strips and a corner

```step
stage: investigate
insight: "A squared bracket is the bracket times itself, so every term multiplies every term: two strips and a corner, never just x² plus the square of the number. Dev squares each term and drops the strips."
tasks:
  - check:
      type: answer
      q: "Expand $(x + 6)^2$. Type $x^2$ as x^2."
      answer: "x^2 + 12x + 36"
      form: expanded
      feedback:
        - ["x^2 + 36", "That leaves out the two strips. (x + 6)² is (x + 6)(x + 6): four pieces."]
        - ["x^2 + 6x + 36", "There are two strips of 6x, not one."]
        - ["x^2 + 12x + 12", "The corner is 6 × 6, not 6 + 6."]
      explain: "x² + 6x + 6x + 36 = x² + 12x + 36."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev expands $(x - 4)^2$. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: binomial-two-terms
      explain: "Line 4: Dev left out the two strips, −4x and −4x. (x − 4)(x − 4) = x² − 4x − 4x + 16 = x² − 8x + 16."
  - check:
      type: question
      q: "Why does $(x + 6)(x - 6)$ have no $x$ term?"
      options: ["The two strips are +6x and −6x, so they cancel", "6 and −6 are small numbers", "Both brackets start with x", "There's only one strip when the signs differ"]
      answer: 0
      feedback: [null, "The size of the numbers doesn't matter: 7 and −7 would do the same.", "That's true of every pair of brackets here, and most of them have an x term.", "There are always two strips. One is red."]
      explain: "x² − 6x + 6x − 36: the strips are opposites, so they add to nothing and the answer is x² − 36."
```

### Square a bracket

Here's one worked out, piece by piece.

```worked
(x + 4)^2 :: Means (x + 4)(x + 4): a square, x + 4 each way.
x \times x = x^2 :: The big square.
x \times 4 = 4x :: One strip.
4 \times x = 4x :: The other strip, the same size.
4 \times 4 = 16 :: The corner.
x^2 + 4x + 4x + 16 = x^2 + 8x + 16 :: Collect the two strips.
```

Now try one on paper, piece by piece like the example: $(x + 6)^2$. Then type your answer.

### Find the mistake

Read Dev's working. How many pieces should there be?

### No x term

Back to $(x + 6)(x - 6)$ on the board. Look at the two strips.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a negative square, strips that cancel, spotting a perfect square, and a number in front of x."
try: { playground: board, starter: "special.yml#vary", height: 620 }
tasks:
  - hint: ["Set p and q both to −5. Both strips are red.", "The corner is −5 × (−5)."]
    check: { type: answer, q: "Expand $(x - 5)^2$.", answer: "x^2 - 10x + 25", form: expanded, feedback: [["x^2 - 25", "That leaves out the two strips. (x − 5)² is (x − 5)(x − 5)."], ["x^2 + 10x + 25", "Both strips are red: −5x and −5x."], ["x^2 - 10x - 25", "A negative times a negative is positive: the corner is +25."]], explain: "x² − 5x − 5x + 25 = x² − 10x + 25." }
    smaller:
      check: { type: "answer", q: "Just the two strips: what's $-5x$ and $-5x$ together?", answer: "-10x", explain: "Both strips are negative: −5x − 5x = −10x." }
  - hint: ["Set p to 9 and q to −9.", "What happens to the two strips?"]
    check: { type: answer, q: "Expand $(x + 9)(x - 9)$.", answer: "x^2 - 81", form: expanded, feedback: [["x^2 + 81", "9 × (−9) is −81."], ["x^2 - 18x - 81", "The strips are +9x and −9x. They cancel."], ["x^2 - 9", "The corner is 9 × 9 = 81, not 9."]], explain: "x² − 9x + 9x − 81 = x² − 81. The strips cancel." }
  - hint: ["Try the strips: do they add to the middle number?", "A perfect square has two equal strips and a corner that's a square."]
    check:
      type: question
      q: "Which of these is a bracket squared, like $(x + a)^2$ for some number $a$?"
      options: ["$x^2 + 10x + 25$", "$x^2 + 10x + 16$", "$x^2 + 25$", "$x^2 - 25$"]
      answer: 0
      feedback: [null, "16 is a square, but two strips of 4x make 8x, not 10x.", "A squared bracket always has two strips. Without them it's not (x + a)²: the strips would be 0.", "That's (x + 5)(x − 5), two different brackets with strips that cancel."]
      explain: "x² + 10x + 25 is (x + 5)(x + 5): two strips of 5x and a corner of 25. Half the middle number, squared, gives the last: (10 ÷ 2)² = 25."
  - hint: ["Set a and b to 2 and p and q to 3.", "$2x \\times 2x$ is $4x^2$, not $2x^2$."]
    check: { type: answer, q: "Edge case: expand $(2x + 3)^2$.", answer: "4x^2 + 12x + 9", form: expanded, feedback: [["4x^2 + 9", "That leaves out the two strips. (2x + 3)² is (2x + 3)(2x + 3)."], ["2x^2 + 12x + 9", "2x times 2x is 4x²: 2 × 2 and x × x."], ["4x^2 + 6x + 9", "There are two strips of 6x: 12x."]], explain: "4x² + 6x + 6x + 9 = 4x² + 12x + 9." }
```

### A negative square

### Strips that cancel

### Is it a square?

### A number in front of x

## Practise: expand and spot

```step
stage: practise
insight: "Squares and differences of squares, mixed, with the review keeping factorising a pair of numbers fresh."
tasks:
  - check:
      type: answer
      q: "Expand $(x + 8)^2$."
      answer: "x^2 + 16x + 64"
      form: expanded
      feedback:
        - ["x^2 + 64", "(x + 8)² is (x + 8)(x + 8): four pieces, with two strips of 8x."]
      explain: "x² + 8x + 8x + 64 = x² + 16x + 64."
  - check:
      type: answer
      q: "Expand $(x - 7)^2$."
      answer: "x^2 - 14x + 49"
      form: expanded
      feedback:
        - ["x^2 - 49", "That's what (x − 7)(x + 7) makes. (x − 7)² has two red strips."]
        - ["x^2 + 14x + 49", "Both strips are red: −7x and −7x."]
        - ["x^2 - 14x - 49", "−7 × (−7) is +49."]
      explain: "x² − 7x − 7x + 49 = x² − 14x + 49."
    smaller:
      check: { type: "number", q: "Just the corner: what's $(-7) \\times (-7)$?", answer: 49, explain: "A negative times a negative is positive: +49." }
  - check:
      type: answer
      q: "Expand $(x + 10)(x - 10)$."
      answer: "x^2 - 100"
      form: expanded
      feedback:
        - ["x^2 + 100", "10 × (−10) is −100."]
        - ["x^2 - 20x - 100", "The strips are +10x and −10x: they cancel."]
      explain: "x² − 10x + 10x − 100 = x² − 100."
  - check:
      type: question
      q: "Which of these is a difference of two squares: a square take away a square?"
      options: ["$x^2 - 64$", "$x^2 + 64$", "$x^2 - 16x + 64$", "$x^2 - 60$"]
      answer: 0
      feedback: [null, "That's a sum: a square plus a square. It has no pair of brackets that gives it.", "That's (x − 8)², a bracket squared, not a difference.", "60 isn't a square number."]
      explain: "x² − 64 is x² − 8², which is (x + 8)(x − 8)."
  - check:
      type: answer
      q: "Review: factorise $x^2 + 9x + 20$."
      answer: "(x + 4)(x + 5)"
      form: factorised
      feedback:
        - ["(x + 2)(x + 10)", "2 + 10 = 12, not 9."]
      explain: "4 and 5 multiply to 20 and add to 9."
```

### A positive square

### A negative square

### The strips cancel

### Name the pattern

### Review

Two numbers, from Factorising quadratics.

## Make: back to 51 × 51

```step
stage: make
insight: "Coming back to the numbers: 51 is 50 + 1, so the square has two strips of 50 and a corner of 1, and 49 × 51 is (50 − 1)(50 + 1), where the strips cancel."
tasks:
  - hint: ["Write 51 as 50 + 1 and 49 as 50 − 1.", "50 × 50 is 2500."]
    check:
      type: reasoning
      paper: true
      q: "Work out $51^2$ and $49 \\times 51$ with no calculator, by writing each with 50 in it. Then say how much bigger $51^2$ is."
      steps:
        - ["$51^2 = (50 + 1)^2 = 2500 + 50 + 50 + 1 = 2601$", "a square of 50, two strips of 50 and a corner of 1"]
        - ["$49 \\times 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499$", "the two strips are +50 and −50, so they cancel"]
        - ["$2601 - 2499 = 102$", "subtract"]
      picks:
        - step: 2
          q: "Why is there no 50 strip left in $49 \\times 51$?"
          options: ["One strip is +50 and the other is −50", "49 and 51 are close to 50", "Multiplying is quicker than squaring"]
          answer: 0
          feedback: [null, "That's why it's easy to see, but not why the strips go. Look at their signs.", "The strips go because of their signs, not how quick it is."]
      answer: "102"
      answerLabel: "How much bigger"
      feedback:
        - ["100", "That's the two strips. 51² also has the corner of 1, and 49 × 51 has −1 instead: 100 + 1 + 1."]
        - ["2", "That's the two corners, +1 and −1. The strips add 100 as well."]
      criteria:
        - "I wrote 51 as 50 + 1 and 49 as 50 − 1."
        - "I found the strips (two of 50 for the square, none for the other) and the corner."
        - "Both my answers are close to 2500."
      explain: "51² = 2601 and 49 × 51 = 2499, so 51² is 102 bigger: the two strips of 50, plus the corner of +1 against −1."
  - check:
      type: question
      q: "Which is the quick way to work out $98 \\times 102$?"
      options: ["$(100 - 2)(100 + 2) = 10\\,000 - 4 = 9996$", "$(100 - 2)(100 + 2) = 10\\,000 + 4 = 10\\,004$", "$100 \\times 100 - 2 \\times 2 \\times 100 = 9600$", "$98 \\times 100 + 2 = 9802$"]
      answer: 0
      feedback: [null, "The corner is 2 × (−2) = −4: the strips cancel, but the corner stays.", "There's no strip left to take off: the strips cancel.", "102 is 100 + 2, not 100 + 2 ones tacked on after."]
      explain: "98 is 100 − 2 and 102 is 100 + 2, so the strips cancel and it's 100² − 2² = 9996."
```

### The numbers

Back to 51. Work this out on paper first, then type your answer.

### Another pair

**Also used in**

- **Mental maths.** Any two numbers the same distance either side of an easy number: $47 \times 53$, $98 \times 102$, $19 \times 21$.
- **Factorising.** Run the pattern backwards: $x^2 - 49$ is $(x + 7)(x - 7)$, and $x^2 + 10x + 25$ is $(x + 5)^2$.
- **Next lessons.** Factorising when there's a number in front of $x^2$, then completing the square, which is a squared bracket with the corner moved out.
