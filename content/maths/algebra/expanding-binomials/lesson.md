---
order: 15
unit: binomials
node: AC9M9A02 n1
uses: [AC9M8A01 n1]
assumes: [AC9M9A01 n1, AC9M9A01 n2, AC9M9A01 n3]   # only x × x = x², from Year 8 index laws; the Year 9 index laws come in Irrational numbers and index laws
connection: garden-extend
title: Two brackets
summary: "(x + 4)(x + 3) is the area of a rectangle x + 4 wide and x + 3 tall. Cut it into four pieces, x², 3x, 4x and 12, and add them: x² + 7x + 12."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Make a garden bed longer and wider at the same time, and the new area comes in pieces. How many pieces, and how big?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8340
  url: http://127.0.0.1:8340/index.html
  readySelector: "#sl-p"
  layout: full
explainPicture: { ref: binomial.yml#explain-pic, caption: "$(x + 4)(x + 3)$: one $x^2$, $4x$ and $3x$, and 12 ones make $x^2 + 7x + 12$." }
explainClip:
  query: { code: "@binomial.yml#explain", fresh: 1, id: explain }
  caption: "Two brackets make four pieces"
  say: "Two brackets make a rectangle, and the rectangle has four pieces."
  clip:
    - caption: { text: "(x + 2)(x + 3): x + 2 across, x + 3 down.", say: "x plus two across, and x plus three down." }
    - wait: 600
    - caption: { text: "Four pieces: x², 2x, 3x and 6. Together: x² + 5x + 6.", say: "Four pieces: x squared, two x, three x, and six." }
    - wait: 900
    - caption: { text: "Make the 2 a −1: the strip and the corner turn negative.", say: "Make the two a minus one. That strip and the corner turn negative." }
    - click: Make p smaller
    - click: Make p smaller
    - click: Make p smaller
    - expect: { selector: "#tsum", contains: "x² + 2x − 3" }
    - wait: 1400
---
In Year 8 you expanded one bracket: $3(x + 2) = 3x + 6$. Now both things being multiplied are brackets, and a picture shows what happens.

## Predict: the bigger garden

```step
stage: predict
insight: "Committing to an area for the bigger bed before building it shows who multiplies only the firsts and the lasts (x² + 12) and who sees the two strips."
check:
  type: predict
  q: "The garden bed becomes $x + 4$ metres long and $x + 3$ metres wide. Which expression is its area?"
  options:
    - "$x^2 + 7x + 12$"
    - "$x^2 + 12$"
    - "$x^2 + 7x + 7$"
    - "$2x + 7$"
  actual: "x² + 7x + 12. The new bed is four pieces: the x by x square, a 4 by x strip, a 3 by x strip and the old 4 by 3 corner, which is 12. x² + 12 leaves out the two strips."
```

Your school's veggie garden is a 4 m by 3 m bed. The garden club wants it bigger: $x$ metres longer and $x$ metres wider. They haven't decided what $x$ is yet.

<figure class="situation" role="img" aria-label="The old 4 by 3 garden bed in one corner. The bed is made x metres longer and x metres wider, so the new bed is x plus 4 long and x plus 3 wide. The new parts are dashed."><svg viewBox="0 0 420 300" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="210" y="150" width="160" height="120" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1"/><text x="290" y="215" text-anchor="middle" fill="currentColor" stroke="none">old bed</text><rect x="60" y="40" width="310" height="230" stroke-width="1.2" stroke-dasharray="6 4"/><text x="135" y="30" text-anchor="middle" fill="currentColor" stroke="none">x</text><text x="290" y="30" text-anchor="middle" fill="currentColor" stroke="none">4 m</text><text x="390" y="100" fill="currentColor" stroke="none">x</text><text x="390" y="215" fill="currentColor" stroke="none">3 m</text><text x="135" y="100" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

What's the area of the whole new bed? Make a guess before you build it.

## Run: build the rectangle

```step
stage: run
insight: "Building (x + p)(x + q) as a rectangle and counting the pieces shows four parts: x², the two strips, and the corner."
try: { playground: board, starter: "binomial.yml#run", height: 600 }
check: { type: board, text: "Set the board to $(x + 4)(x + 3)$ and count the pieces. Was your prediction right?", when: "p = 4 and q = 3" }
```

$p$ is the number in the first bracket and $q$ the number in the second. The board draws the rectangle and counts what's inside.

## Investigate: four pieces

```step
stage: investigate
insight: "Each term in the first bracket multiplies each term in the second: four products, then collect the two x terms. Ali multiplies only the firsts and the lasts."
tasks:
  - check:
      type: answer
      q: "Expand $(x + 5)(x + 2)$. Type $x^2$ as x^2."
      answer: "x^2 + 7x + 10"
      form: expanded
      feedback:
        - ["x^2 + 10", "That's only the first pieces and the last. The two strips are 2x and 5x."]
        - ["x^2 + 7x + 7", "The corner is 5 × 2, not 5 + 2."]
        - ["2x + 7", "x times x is x², not 2x."]
      explain: "x × x = x², x × 2 = 2x, 5 × x = 5x, 5 × 2 = 10. Collect: x² + 7x + 10."
  - check:
      type: bug
      code: "working.txt#ali"
      text: "Ali expands $(x + 3)(x + 2)$. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: binomial-two-terms
      explain: "Line 4: Ali left out the two strips, 2x and 3x. Every term in one bracket multiplies every term in the other: x² + 2x + 3x + 6 = x² + 5x + 6."
  - check:
      type: answer
      q: "Expand $(x + 4)(x - 3)$."
      answer: "x^2 + x - 12"
      form: expanded
      feedback:
        - ["x^2 + x + 12", "4 × (−3) is −12."]
        - ["x^2 + 7x - 12", "One strip is +4x and the other is −3x: together, +x."]
        - ["x^2 - 12", "The strips are 4x and −3x. They don't cancel: together they're x."]
      explain: "x² − 3x + 4x − 12 = x² + x − 12."
```

### Four pieces

Here's the garden bed worked out, piece by piece.

```worked
(x + 4)(x + 3) :: The rectangle: x + 4 across, x + 3 down.
x \times x = x^2 :: The big square.
x \times 3 = 3x :: One strip.
4 \times x = 4x :: The other strip.
4 \times 3 = 12 :: The corner: the old bed.
x^2 + 3x + 4x + 12 = x^2 + 7x + 12 :: Collect the two strips.
```

Now try one on paper, piece by piece like the example: $(x + 5)(x + 2)$. Then type your answer.

### Find the mistake

Read Ali's working. How many pieces should there be?

### A negative

The second bracket takes 3 away. On the board, a negative strip is red. Which pieces turn negative?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a negative in one bracket, then both, then the same number with opposite signs (the strips cancel), then a bracket squared."
try: { playground: board, starter: "binomial.yml#vary", height: 620 }
tasks:
  - hint: "Set p to −2 and q to 5. Which strip is red?"
    check: { type: answer, q: "Expand $(x - 2)(x + 5)$. Build it on the board to check.", answer: "x^2 + 3x - 10", form: expanded, feedback: [["x^2 + 3x + 10", "−2 × 5 is −10."], ["x^2 - 3x - 10", "The strips are −2x and +5x: together, +3x."]], explain: "x² + 5x − 2x − 10 = x² + 3x − 10." }
  - hint: ["Both p and q are negative.", "The corner is −3 × −4: a negative times a negative."]
    check: { type: answer, q: "Expand $(x - 3)(x - 4)$.", answer: "x^2 - 7x + 12", form: expanded, feedback: [["x^2 - 7x - 12", "−3 × (−4) is +12."], ["x^2 + 7x + 12", "Both strips are negative: −3x and −4x."]], explain: "x² − 4x − 3x + 12 = x² − 7x + 12." }
    smaller:
      check: { type: "number", q: "Just the corner: what's $-3 \\times (-4)$?", answer: 12, explain: "A negative times a negative is positive: +12." }
  - hint: "Set p to 6 and q to −6. What happens to the two strips?"
    check: { type: answer, q: "Expand $(x + 6)(x - 6)$.", answer: "x^2 - 36", form: expanded, feedback: [["x^2 + 36", "6 × (−6) is −36."], ["x^2 + 12x - 36", "The strips are +6x and −6x. They cancel."]], explain: "x² − 6x + 6x − 36 = x² − 36. The strips cancel." }
  - hint: ["$(x + 3)^2$ means $(x + 3)(x + 3)$.", "Set p and q both to 3: two strips of 3x."]
    check: { type: answer, q: "Edge case: expand $(x + 3)^2$.", answer: "x^2 + 6x + 9", form: expanded, feedback: [["x^2 + 9", "That leaves out the two strips. (x + 3)² is (x + 3)(x + 3): four pieces."], ["x^2 + 3x + 9", "There are two strips of 3x: 6x."]], explain: "(x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9." }
```

### A negative in one bracket

Each task changes one thing. Set the board, then type the expansion.

### Both negative

### Strips that cancel

### A bracket squared

## Practise: expand and collect

```step
stage: practise
insight: "Expanding with each sign combination, mixed; the review keeps one bracket fresh."
tasks:
  - check:
      type: answer
      q: "Expand $(x + 7)(x + 1)$."
      answer: "x^2 + 8x + 7"
      form: expanded
      feedback:
        - ["x^2 + 7", "The two strips are x and 7x."]
      explain: "x² + x + 7x + 7 = x² + 8x + 7."
  - check:
      type: answer
      q: "Expand $(x - 5)(x + 2)$."
      answer: "x^2 - 3x - 10"
      form: expanded
      feedback:
        - ["x^2 + 3x - 10", "The strips are +2x and −5x: together, −3x."]
        - ["x^2 - 3x + 10", "−5 × 2 is −10."]
      explain: "x² + 2x − 5x − 10 = x² − 3x − 10."
  - check:
      type: answer
      q: "Expand $(x - 6)(x - 2)$."
      answer: "x^2 - 8x + 12"
      form: expanded
      feedback:
        - ["x^2 - 8x - 12", "−6 × (−2) is +12."]
      explain: "x² − 2x − 6x + 12 = x² − 8x + 12."
    smaller:
      check: { type: "answer", q: "Just the two strips: what's $-6x$ and $-2x$ together?", answer: "-8x", explain: "Both strips are negative: −6x − 2x = −8x." }
  - check:
      type: answer
      q: "Review: expand $3(2x - 4)$."
      answer: "6x - 12"
      form: expanded
      feedback:
        - ["6x - 4", "The 3 multiplies the 4 as well."]
      explain: "3 × 2x = 6x and 3 × (−4) = −12."
```

### Both positive

### One negative

### Both negative

### Review

One bracket, from Year 8.

## Make: back to the garden

```step
stage: make
insight: "Coming back to the opening bed: the expansion is the area for any x, and putting a number in shows how much of the new bed is new."
tasks:
  - hint: ["The bed is (x + 4) by (x + 3).", "Four pieces: x², 3x, 4x and 12."]
    check:
      type: answer
      q: "Write the area of the new garden bed, $(x + 4)(x + 3)$, expanded."
      answer: "x^2 + 7x + 12"
      form: expanded
      feedback:
        - ["x^2 + 12", "That's the big square and the old bed. Add the two strips."]
      explain: "x² + 3x + 4x + 12 = x² + 7x + 12."
  - hint: ["Put x = 2 into x² + 7x + 12.", "4 + 14 + 12."]
    check:
      type: reasoning
      paper: true
      q: "The club picks $x = 2$. How many square metres is the new bed, and how much of that is new garden?"
      steps:
        - ["$2^2 + 7 \\times 2 + 12 = 4 + 14 + 12 = 30$ m²", "put x = 2 into the expansion"]
        - ["$6 \\times 5 = 30$ m²", "check: the bed is 6 m by 5 m"]
        - ["$30 - 12 = 18$ m² of new garden", "the old bed was 4 × 3 = 12"]
      answer: "18"
      answerLabel: "New garden (m²)"
      feedback:
        - ["30", "That's the whole bed. Take away the old 12 m²."]
        - ["4", "That's only the big square. The strips are new garden too."]
      criteria:
        - "I found the whole area two ways: the expansion, and 6 × 5."
        - "I took away the old bed."
        - "My new garden is more than the old bed's 12 m²."
      explain: "30 − 12 = 18 m² of new garden: more than the whole old bed."
```

### The new area

Back to the garden club. Sketch the bed with its four pieces on paper first.

### Pick a size

**Also used in**

- **Mental maths.** $47 \times 53$ is $(50 - 3)(50 + 3)$: the strips cancel, so it's $2500 - 9 = 2491$.
- **Frames and borders.** A photo with a border of even width all round: the framed area is two brackets.
- **Next lessons.** Spotting the pattern so you can skip the rectangle, then running it backwards to factorise.
