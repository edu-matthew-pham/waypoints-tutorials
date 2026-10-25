---
order: 20
unit: products10
node: AC9M10A01 n4
uses: [AC9M10A01 n3, AC9M9A02 n3]
assumes: [AC9M9A02 n3, AC9M10A01 n3]
connection: frame-border
title: Factorising when x² has a number
summary: "For 2x² + 7x + 3, the two numbers multiply to 2 × 3 = 6, not 3. They split the strips so the tiles pack into a rectangle: (2x + 1)(x + 3)."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A frame shop's price list gives a frame's whole area as 4x² + 20x + 24. Can you get the two lengths back?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8352
  url: http://127.0.0.1:8352/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: nonmonic.yml#explain-pic, caption: "$2x^2 + 7x + 3$ packs into a rectangle $2x + 1$ wide and $x + 3$ tall: 2 big squares, 7 strips and 3 ones." }
explainClip:
  query: { code: "@nonmonic.yml#explain", fresh: 1, id: explain }
  caption: "Pack the tiles: the x² number changes the sides"
  say: "Pack two x squared plus seven x plus three into a rectangle."
  clip:
    - caption: { text: "x + 1 by x + 3 makes one x², not two. The board says the x² tiles need to be 2.", say: "x plus one by x plus three makes only one x squared." }
    - wait: 1000
    - caption: { text: "Make a bigger: now 2x + 1 across. Two squares, and the 7 strips fit.", say: "Make a bigger, and the strips fit." }
    - click: Make a bigger
    - expect: { selector: "#tsum", contains: "2x² + 7x + 3" }
    - wait: 1400
---
The frame shop prints the whole area for each frame on its price list. The saw needs two lengths, though, and the list never says them.

<figure class="situation" role="img" aria-label="A small photo, 6 centimetres by 4 centimetres, in the middle of a frame. The frame has a border the same width, x, all the way round. The whole frame's area is marked 4x squared plus 20x plus 24. The two outer lengths are marked with question marks."><svg viewBox="0 0 400 280" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="50" y="40" width="260" height="208" stroke-width="1.2" stroke-dasharray="6 4"/><rect x="102" y="92" width="156" height="104" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1.4"/><text x="180" y="138" text-anchor="middle" fill="currentColor" stroke="none">photo</text><text x="180" y="158" text-anchor="middle" fill="currentColor" stroke="none">6 cm by 4 cm</text><text x="76" y="150" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="180" y="72" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="180" y="30" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="330" y="148" fill="currentColor" stroke="none" font-size="18">?</text><text x="180" y="270" text-anchor="middle" fill="currentColor" stroke="none">area 4x² + 20x + 24 cm²</text></svg></figure>

## Predict: the other side

```step
stage: predict
insight: "Committing to the other side of a packed rectangle shows who finds a pair for the last number only (3 gives x + 3 by luck) and who sees that the 2 in front of x² changes what the strips do."
check:
  type: predict
  q: "Two big squares, 7 strips and 3 ones pack exactly into a rectangle. The rectangle is $2x + 1$ wide. Which expression is its height?"
  options:
    - "$x + 3$"
    - "$x + 6$"
    - "$2x + 3$"
    - "$x + 7$"
  actual: "x + 3. (2x + 1)(x + 3) = 2x² + 6x + x + 3. The 2x across and the x down make the two big squares; the strips are 6x and x, which make 7x; the corner is 1 × 3. x + 6 takes the strips as 7 − 1 and misses the squares; 2x + 3 would make four big squares."
```

<figure class="situation" role="img" aria-label="A pile of tiles: two big squares marked x squared, seven long thin strips marked x, and three small squares marked 1. Above, an empty rectangle with its width marked 2x plus 1 and its height marked with a question mark."><svg viewBox="0 0 400 310" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="120" y="40" width="150" height="130" stroke-width="1.4" stroke-dasharray="6 4"/><text x="195" y="30" text-anchor="middle" fill="currentColor" stroke="none">2x + 1</text><text x="292" y="110" fill="currentColor" stroke="none" font-size="20">?</text><rect x="30" y="215" width="36" height="36" fill="#8a4fb8" fill-opacity="0.25" stroke="#8a4fb8"/><rect x="70" y="215" width="36" height="36" fill="#8a4fb8" fill-opacity="0.25" stroke="#8a4fb8"/><text x="68" y="272" text-anchor="middle" fill="currentColor" stroke="none">2 of x²</text><g fill="#2f6fb3" fill-opacity="0.25" stroke="#2f6fb3"><rect x="150" y="213" width="36" height="9"/><rect x="150" y="225" width="36" height="9"/><rect x="150" y="237" width="36" height="9"/><rect x="150" y="249" width="36" height="9"/><rect x="150" y="261" width="36" height="9"/><rect x="150" y="273" width="36" height="9"/><rect x="150" y="285" width="36" height="9"/></g><text x="168" y="308" text-anchor="middle" fill="currentColor" stroke="none">7 of x</text><g fill="#c2570a" fill-opacity="0.25" stroke="#c2570a"><rect x="250" y="228" width="9" height="9"/><rect x="262" y="228" width="9" height="9"/><rect x="274" y="228" width="9" height="9"/></g><text x="266" y="272" text-anchor="middle" fill="currentColor" stroke="none">3 of 1</text></svg></figure>

The tiles pack into a rectangle with no gaps and no tiles left over. How tall is it? Make a guess before you build it.

## Run: pack the tiles

```step
stage: run
insight: "Packing 2 x² tiles, 7 x-tiles and 3 ones needs the x² number to be 2, so one bracket starts with 2x; then the strips and the corner decide the rest."
try: { playground: board, starter: "nonmonic.yml#run", height: 600 }
check: { type: board, text: "Pack $2x^2 + 7x + 3$ into a rectangle. Which brackets worked? Was your prediction right?", when: "r = 1" }
```

$a$ and $b$ put a number in front of each $x$. The board tells you which part of the target is out: the big squares, the ones or the strips.

## Investigate: multiply, then split

```step
stage: investigate
insight: "The two numbers for the strips multiply to a × c, not c: the x² number times the last number. Priya looks for a pair that multiplies to c and decides there isn't one."
tasks:
  - check:
      type: answer
      q: "Factorise $3x^2 + 10x + 8$. Type $x^2$ as x^2."
      answer: "(3x + 4)(x + 2)"
      form: factorised
      feedback:
        - ["(3x + 2)(x + 4)", "That makes 3x² + 14x + 8: the strips are 12x and 2x. Expand to check."]
        - ["(3x + 8)(x + 1)", "That makes 3x² + 11x + 8: the strips are 3x and 8x."]
        - ["(x + 2)(x + 4)", "That makes x² + 6x + 8. There are three big squares, so a 3x goes in a bracket."]
      explain: "3 × 8 = 24, and 4 and 6 multiply to 24 and add to 10. 3x² + 6x + 4x + 8 = 3x(x + 2) + 4(x + 2) = (3x + 4)(x + 2)."
  - check:
      type: bug
      code: "working.txt#priya"
      text: "Priya tries to factorise $2x^2 + 7x + 3$. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: factor-pair-sign
      explain: "Line 2: with 2x² the two numbers multiply to 2 × 3 = 6, not 3. 1 and 6 multiply to 6 and add to 7, so it factorises: (2x + 1)(x + 3)."
  - check:
      type: answer
      q: "Expand $(2x + 3)(x + 1)$, to see whether it could be a factorisation of $2x^2 + 7x + 3$."
      answer: "2x^2 + 5x + 3"
      form: expanded
      feedback:
        - ["2x^2 + 7x + 3", "That's what you were hoping for. Multiply it out: the strips are 2x and 3x."]
        - ["2x^2 + 3", "That leaves out the two strips."]
      explain: "2x² + 2x + 3x + 3 = 2x² + 5x + 3. It's close, but the strips make 5x, not 7x, so it isn't."
```

### Multiply, then split

Here's how the tiles pack, step by step.

```worked
2x^2 + 7x + 3 :: Two big squares, 7 strips, 3 ones: pack them into a rectangle.
2 \times 3 = 6 :: The strips go on two sides, so look at the x² number times the last number.
1 \times 6 = 6, \; 1 + 6 = 7 :: A pair that multiplies to 6 and adds to 7.
2x^2 + 6x + x + 3 :: Split the 7 strips into 6 and 1.
2x(x + 3) + 1(x + 3) :: Take out what each pair has in common.
(2x + 1)(x + 3) :: Both pairs share x + 3. That's one side; what's left is the other.
```

Now try one on paper, step by step like the example: $3x^2 + 10x + 8$. Then type your answer.

### Find the mistake

Read Priya's working. Which two numbers do the strips need?

### Check by expanding

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a bigger x² number, a negative middle, and a common factor taken out first."
try: { playground: board, starter: "nonmonic.yml#vary", height: 620 }
tasks:
  - hint: ["The two numbers multiply to 2 × 3 = 6.", "They add to 5."]
    check: { type: answer, q: "Factorise $2x^2 + 5x + 3$.", answer: "(2x + 3)(x + 1)", form: factorised, feedback: [["(2x + 1)(x + 3)", "That makes 2x² + 7x + 3. The strips are 6x and x: 7x. You need 5x."], ["(x + 2)(x + 3)", "That makes x² + 5x + 6. There are 2 big squares, so a 2x goes in a bracket."]], explain: "2 × 3 = 6, and 2 and 3 add to 5: 2x² + 2x + 3x + 3 = 2x(x + 1) + 3(x + 1) = (2x + 3)(x + 1)." }
    smaller:
      check: { type: "number", q: "Which two numbers multiply to 6 and add to 5? Type the bigger one.", answer: 3, explain: "2 and 3: 2 × 3 = 6 and 2 + 3 = 5. The bigger one is 3." }
  - hint: ["The x² number times the last number is 18.", "Two numbers that multiply to 18 and add to 11."]
    check: { type: answer, q: "Factorise $6x^2 + 11x + 3$.", answer: "(3x + 1)(2x + 3)", form: factorised, feedback: [["(6x + 1)(x + 3)", "That makes 6x² + 19x + 3: the strips are 18x and x."], ["(3x + 3)(2x + 1)", "That makes 6x² + 9x + 3: the strips are 3x and 6x."]], explain: "6 × 3 = 18, and 2 and 9 multiply to 18 and add to 11. 6x² + 9x + 2x + 3 = 3x(2x + 3) + 1(2x + 3) = (3x + 1)(2x + 3)." }
  - hint: ["The middle is negative and the last number is positive, so both numbers are negative.", "They multiply to 24 and add to −10."]
    check: { type: answer, q: "Factorise $3x^2 - 10x + 8$.", answer: "(3x - 4)(x - 2)", form: factorised, feedback: [["(3x + 4)(x + 2)", "That makes +10x. The middle is −10x, so both numbers are negative."], ["(3x - 2)(x - 4)", "That makes 3x² − 14x + 8: the strips are −12x and −2x."]], explain: "−4 and −6 multiply to 24 and add to −10. 3x² − 6x − 4x + 8 = 3x(x − 2) − 4(x − 2) = (3x − 4)(x − 2)." }
  - hint: ["Every term has a 2 in it. Take that out first.", "What's left is $2x^2 + 7x + 3$."]
    check: { type: answer, q: "Edge case: factorise $4x^2 + 14x + 6$ fully.", answer: "2(2x + 1)(x + 3)", form: factorised, feedback: [["(2x + 1)(x + 3)", "That's 2x² + 7x + 3, half of what you want. The common factor 2 stays outside."], ["2(2x + 3)(x + 1)", "That makes 2(2x² + 5x + 3). The strips need to be 7x."]], explain: "Take out 2: 2(2x² + 7x + 3) = 2(2x + 1)(x + 3)." }
```

### A bigger number

### A third number

### A negative middle

### Take out the common factor first

## Practise: split the strips

```step
stage: practise
insight: "Factorising with a number in front of x² and each sign pattern, mixed; the review keeps a difference of two squares fresh."
tasks:
  - check:
      type: answer
      q: "Factorise $2x^2 + 9x + 4$."
      answer: "(2x + 1)(x + 4)"
      form: factorised
      feedback:
        - ["(2x + 4)(x + 1)", "That makes 2x² + 6x + 4. The strips are 2x and 4x."]
        - ["(x + 1)(x + 4)", "That makes x² + 5x + 4. There are 2 big squares."]
      explain: "2 × 4 = 8, and 1 and 8 add to 9. 2x² + 8x + x + 4 = 2x(x + 4) + 1(x + 4) = (2x + 1)(x + 4)."
  - check:
      type: answer
      q: "Factorise $3x^2 + 7x + 2$."
      answer: "(3x + 1)(x + 2)"
      form: factorised
      feedback:
        - ["(3x + 2)(x + 1)", "That makes 3x² + 5x + 2: the strips are 3x and 2x."]
      explain: "3 × 2 = 6, and 1 and 6 add to 7. 3x² + 6x + x + 2 = 3x(x + 2) + 1(x + 2) = (3x + 1)(x + 2)."
  - check:
      type: answer
      q: "Factorise $5x^2 - 13x + 6$."
      answer: "(5x - 3)(x - 2)"
      form: factorised
      feedback:
        - ["(5x + 3)(x + 2)", "That makes +11x. The middle is −13x, so both numbers are negative."]
        - ["(5x - 2)(x - 3)", "That makes 5x² − 17x + 6: the strips are −15x and −2x."]
      explain: "5 × 6 = 30, and −3 and −10 multiply to 30 and add to −13. 5x² − 10x − 3x + 6 = 5x(x − 2) − 3(x − 2) = (5x − 3)(x − 2)."
    smaller:
      check: { type: "number", q: "Which two numbers multiply to 30 and add to −13? Type the bigger one.", answer: -3, explain: "−3 and −10: −3 × (−10) = 30 and −3 + (−10) = −13. The bigger one is −3." }
  - check:
      type: answer
      q: "Factorise $2x^2 - 5x - 3$."
      answer: "(2x + 1)(x - 3)"
      form: factorised
      feedback:
        - ["(2x - 1)(x + 3)", "That makes 2x² + 5x − 3. The bigger strip is the negative one."]
      explain: "2 × (−3) = −6, and −6 and 1 multiply to −6 and add to −5. 2x² − 6x + x − 3 = 2x(x − 3) + 1(x − 3) = (2x + 1)(x − 3)."
  - check:
      type: answer
      q: "Review: factorise $x^2 - 49$."
      answer: "(x - 7)(x + 7)"
      form: factorised
      feedback:
        - ["(x - 7)(x - 7)", "That makes x² − 14x + 49. The two strips need to cancel."]
      explain: "−7 and 7 multiply to −49 and add to 0: the strips cancel."
```

### Both positive

### Another positive

### A negative middle

### A negative end

### Review

A difference of two squares, from Special products.

## Make: back to the frame

```step
stage: make
insight: "Coming back to the frame: factorising the area gives two lengths, and sharing out the common factor gives the sides a saw could cut."
tasks:
  - hint: ["Every term has a 4 in it. Take that out first.", "Then find two numbers that multiply to 6 and add to 5."]
    check:
      type: answer
      q: "Factorise the frame's area, $4x^2 + 20x + 24$, fully."
      answer: "4(x + 2)(x + 3)"
      form: factorised
      feedback:
        - ["4(x + 4)(x + 6)", "4 and 6 multiply to 24 and add to 10. After the 4 is out, the numbers must multiply to 6 and add to 5."]
        - ["(x + 2)(x + 3)", "That's the right brackets but the 4 is missing: it's one quarter of the area."]
      explain: "4(x² + 5x + 6) = 4(x + 2)(x + 3): 2 and 3 multiply to 6 and add to 5."
  - hint: ["Share the 4 between the brackets: 2 × 2.", "Put x = 2 into both sides."]
    check:
      type: reasoning
      paper: true
      q: "The photo is 6 cm by 4 cm and the border is $x$ cm all round, so the frame's sides are $6 + 2x$ and $4 + 2x$. Show that $4(x + 2)(x + 3)$ gives those sides, then work out the frame's area when the border is $x = 2$ cm."
      steps:
        - ["$4(x + 2)(x + 3) = (2x + 4)(2x + 6)$", "share the 4 as 2 × 2 between the brackets"]
        - ["$2x + 4 = 4 + 2x$ and $2x + 6 = 6 + 2x$", "the photo's 4 and 6 with a border on each side"]
        - ["$(4 + 4)(6 + 4) = 8 \\times 10 = 80$ cm²", "put x = 2 into each side"]
        - ["$4 \\times 4 + 20 \\times 2 + 24 = 16 + 40 + 24 = 80$ cm²", "check with the area expression"]
      answer: "80"
      answerLabel: "Frame area (cm²)"
      feedback:
        - ["40", "That's only the 20x part. The area is the two sides multiplied: 8 × 10."]
        - ["48", "That's the area when x = 1. The border is 2 cm here."]
      criteria:
        - "I shared the 4 between the two brackets."
        - "I put x = 2 into the sides and into the area, and got the same answer."
        - "My sides are 8 cm and 10 cm: bigger than the photo's 4 and 6."
      explain: "(2 × 2 + 4)(2 × 2 + 6) = 8 × 10 = 80, and 16 + 40 + 24 = 80."
```

### The frame's lengths

Back to the frame shop. Take out the common factor first.

### Check at x = 2

Work this out on paper first, then type your answer.

**Also used in**

- **Borders.** A photo with an even border all round, or a lawn with a path: the whole area is two brackets, and factorising gets the sides back.
- **Solving.** A frame area that has to be exactly 1000 cm² gives $(30 + 2x)(20 + 2x) = 1000$: solving a quadratic starts with factorising.
- **Next lessons.** Completing the square, then solving quadratics.
