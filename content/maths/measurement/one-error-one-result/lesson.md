---
order: 44
unit: error10
node: AC9M10M04 n2
uses: [AC9M9M04 n1, AC9M9M04 n2]
assumes: [AC9M9M04 n1, AC9M9M04 n2]
connection: carpet-error
title: One error, one result
summary: "When a measurement can be out, so can every result worked out from it. Use the lowest and highest values of each measurement to find the lowest and highest the result could be, and see how much bigger the result's error is."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A room is 4.0 m by 3.0 m, to the nearest 10 cm. How much carpet do you order?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8410
  url: http://127.0.0.1:8410/index.html
  readySelector: "#sl-l"
  layout: full
explainPicture: { ref: formula.yml#pic, caption: "$l = 4.0$ and $w = 3.0$ to the nearest 0.1 m: the area could be anywhere from 11.6525 m² to 12.3525 m²." }
explainClip:
  query: { code: "@formula.yml#explain", fresh: 1, id: explain }
  caption: "A reading can be out, so the area can be out"
  say: "A length is only a reading, so the area has a lowest and highest too."
  clip:
    - caption: { text: "A room 3.5 m by 2.5 m, each to the nearest 0.1 m.", say: "A room 3.5 metres by 2.5, each to the nearest tenth." }
    - wait: 600
    - caption: { text: "Each length could be 0.05 m smaller or bigger.", say: "Each length could be five centimetres smaller or bigger." }
    - wait: 600
    - caption: { text: "So the area could be as low as the first number and as high as the second.", say: "So the area has a lowest and a highest possible value." }
    - click: Make l bigger
    - wait: 800
    - expect: { selector: ".rulework", contains: "A = 3.6 × 2.5 = 9" }
    - wait: 1000
---
A carpet shop sells by the square metre. You measure a room with a tape marked every 10 cm and get 4.0 m by 3.0 m. How much carpet should you order so that you are sure to have enough? Have a guess, and we'll come back to it at the end. (The room is made up for the task.)

<figure class="situation" role="img" aria-label="A rectangular room drawn from above, labelled 4.0 metres along the top and 3.0 metres down the side, each to the nearest 10 centimetres. Inside is a question mark: how many square metres of carpet."><svg viewBox="0 0 380 190" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="40" width="240" height="120" stroke-width="2.4" fill="#D85A30" fill-opacity="0.15"/><text x="180" y="28" text-anchor="middle" fill="currentColor" stroke="none">4.0 m (nearest 10 cm)</text><text x="312" y="105" fill="currentColor" stroke="none">3.0 m</text><text x="180" y="108" text-anchor="middle" fill="currentColor" stroke="none" font-size="30">? m²</text><text x="180" y="182" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" opacity="0.8">of carpet to be sure it covers the floor</text></svg></figure>

## Predict: the most it could be

```step
stage: predict
insight: "Choosing the largest the area could be shows who takes the result's error to be the same as a length's error, and who sees that both lengths push the area up at once."
check:
  type: predict
  q: "Each length is 'to the nearest 10 cm', so each could be 5 cm (0.05 m) bigger. What is the largest the floor's area could really be?"
  options:
    - "About 12.35 m²"
    - "About 12.05 m²"
    - "About 12.6 m²"
    - "Exactly 12 m²"
  actual: "About 12.35 m². Both lengths could be 5 cm bigger at the same time: 4.05 × 3.05 = 12.3525 m². The area is out by about 0.35 m², not 0.05."
```

## Run: lowest and highest

```step
stage: run
insight: "Each measurement has a lowest and a highest it could be. The lowest result comes from every measurement at its lowest, and the highest from every measurement at its highest."
try: { playground: board, starter: "formula.yml#run", height: 560 }
check: { type: board, text: "Set $l = 4.0$ and $w = 3.0$ and read the highest the area could be. Was your prediction right?", when: "l = 4 and w = 3" }
```

Each slider is a reading to the nearest 0.1 m, so the board shows what it could really be, 0.05 m either way, in brackets. Under the working it shows the lowest and highest the area could be.

## Investigate: why the area is out by more

```step
stage: investigate
insight: "The result's error is bigger than each measurement's error, because both measurements push it, and each one is multiplied by the other length. Noor treats the area's error as one length's error."
tasks:
  - hint: ["Use the highest length and the highest width.", "8.05 × 5.05, then take away 8.0 × 5.0 = 40."]
    check:
      type: reasoning
      paper: true
      q: "A courtyard is measured as 8.0 m by 5.0 m, each to the nearest 0.1 m. How far above the measured area could the real area be, at most? (m²)"
      steps:
        - ["$8.0 + 0.05 = 8.05$ and $5.0 + 0.05 = 5.05$", "the highest each length could be"]
        - ["$8.05 \\times 5.05 = 40.6525$", "the highest the area could be"]
        - ["$40.6525 - 40 = 0.6525$", "take away the measured area, $8.0 \\times 5.0 = 40$"]
      answer: "0.65"
      answerLabel: "Area could be above by (m²)"
      tolerance: 0.005
      feedback:
        - ["0.05", "That is how far one length could be out. Both lengths are out at once, and the area multiplies them."]
        - ["40.65", "That is the highest area. The question asks how far above the measured 40 it is."]
      criteria:
        - "I used the highest of each length."
        - "I multiplied to get the highest area."
        - "I took away the measured area."
      explain: "8.05 × 5.05 = 40.6525 and 40.6525 − 40 = 0.6525, about 0.65 m²: more than ten times the 0.05 m each length could be out by."
  - hint: ["Use the lowest length and the lowest width.", "3.95 × 2.95."]
    check:
      type: number
      q: "The lengths are $4.0$ m and $3.0$ m, each to the nearest $0.1$ m. What is the lowest the area could be? (m², 2 decimal places)"
      answer: 11.65
      tolerance: 0.006
      explain: "3.95 × 2.95 = 11.6525, about 11.65 m²."
  - hint: ["Highest area take away measured area.", "12.3525 − 12."]
    check:
      type: number
      q: "The measured area is $4.0 \\times 3.0 = 12$ m². How much bigger than that could the area be, at most? (m², 2 decimal places)"
      answer: 0.35
      tolerance: 0.005
      explain: "4.05 × 3.05 = 12.3525, and 12.3525 − 12 = 0.3525, about 0.35 m²."
  - check:
      type: bug
      code: "working.txt#noor"
      text: "Noor works out how much carpet to order. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: result-error-same-as-input
      explain: "Line 4: each length can be 0.05 m out, but the area is length times width, and both are out at once. The area could be out by about 0.35 m², not 0.05 m²."
  - check:
      type: question
      q: "The area could be out by about 0.35 m², much more than the 0.05 m each length could be out by. Why?"
      options:
        - "Both lengths are out, and each error is multiplied by the other length: about 4 × 0.05 + 3 × 0.05"
        - "The tape is worse at measuring areas"
        - "The error is always multiplied by 7 for any room"
        - "Because the area is in square metres"
      answer: 0
      feedback:
        - null
        - "Nothing changed about the tape. The same two readings give the area."
        - "7 is 4 + 3 for this room. A different room gives a different number."
        - "Square metres are just the unit. The reason is in the multiplication."
      explain: "A strip 4 m long and 0.05 m wide plus a strip 3 m long and 0.05 m wide is about 0.2 + 0.15 = 0.35 m² of extra floor."
```

### Highest and lowest

```worked
l: 3.95 \text{ to } 4.05,\; w: 2.95 \text{ to } 3.05 :: Each reading is out by up to 0.05 m, so write its lowest and highest.
\text{lowest } A = 3.95 \times 2.95 = 11.6525 :: Both at their lowest.
\text{highest } A = 4.05 \times 3.05 = 12.3525 :: Both at their highest.
12.3525 - 12 = 0.3525 :: How far above the measured 12 m² the area could be.
```

Now try one on paper after the worked example: a courtyard 8.0 m by 5.0 m, each to the nearest 0.1 m. Work out the highest the area could be, then how far above the measured area that is.

### Lowest

### How much bigger

### Find the mistake

Read Noor's working. How far out is the area, compared with a length?

### Why bigger


## Modify: other measurements

```step
stage: modify
insight: "Changing the formula or the accuracy changes the result's error: a perimeter adds the lengths' errors, and a coarser tape makes the area's error much bigger."
try: { playground: board, starter: "formula.yml#perim", height: 560 }
tasks:
  - hint: ["The perimeter is 2l + 2w. Each of the four sides could be 0.05 m out.", "Four sides, each 0.05 m."]
    check: { type: number, q: "For the perimeter $P = 2l + 2w$ with $l = 3.5$ and $w = 2.5$, each to the nearest $0.1$ m, how far could the perimeter be out, at most? (m)", answer: 0.2, tolerance: 0.005, explain: "Four sides, each up to 0.05 m too long: 4 × 0.05 = 0.2 m. The board shows the highest 12.2 m and lowest 11.8 m." }
    smaller:
      check: { type: "number", q: "The perimeter adds up four sides. If each side could be $0.05$ m too long, how far out could the total be? (m)", answer: 0.2, tolerance: 0.005, explain: "4 × 0.05 = 0.2." }
  - hint: ["Nearest centimetre means 0.005 m either way.", "4.005 × 3.005."]
    check: { type: number, q: "The same room is measured to the nearest $1$ cm and again reads $4.00$ m by $3.00$ m. What is the highest the area could be? (m², 3 decimal places)", answer: 12.036, tolerance: 0.002, explain: "Each length could be 0.005 m bigger: 4.005 × 3.005 = 12.036025. The error is now only about 0.036 m²." }
    smaller:
      check: { type: "number", q: "To the nearest $0.01$ m, a reading of $4.00$ could really be as high as what? (m)", answer: 4.005, tolerance: 0.0005, explain: "Half of 0.01 is 0.005: 4.00 + 0.005 = 4.005." }
  - hint: ["Nearest whole metre means 0.5 m either way.", "4.5 × 3.5."]
    check: { type: number, q: "Edge case: the room is measured to the nearest whole metre as $4$ m by $3$ m. What is the highest the area could be? (m²)", answer: 15.75, tolerance: 0.01, explain: "Each length could be 0.5 m bigger: 4.5 × 3.5 = 15.75 m², more than a quarter bigger than the 12 m² you measured." }
```

### A fence

### A finer tape

### A coarse tape

## Practise: lowest and highest

```step
stage: practise
insight: "Finding the lowest and highest result from the lowest and highest measurements, for rectangles and for sums, and giving the result's error as a percentage."
tasks:
  - hint: ["Highest length times highest width.", "6.05 × 2.05."]
    check: { type: number, q: "A rectangle is measured as $6.0$ m by $2.0$ m, each to the nearest $0.1$ m. What is the highest its area could be? (m², 2 decimal places)", answer: 12.4, tolerance: 0.01, explain: "6.05 × 2.05 = 12.4025, about 12.40 m²." }
    smaller:
      check: { type: "number", q: "A length of $6.0$ m to the nearest $0.1$ m could really be as long as what? (m)", answer: 6.05, tolerance: 0.001, explain: "6.0 + 0.05 = 6.05." }
  - hint: ["Lowest length times lowest width.", "0.295 × 0.295."]
    check: { type: number, q: "A square tile is measured as $0.30$ m by $0.30$ m, each to the nearest $0.01$ m. What is the lowest its area could be? (m², 4 decimal places)", answer: 0.087, tolerance: 0.0005, explain: "Each side could be 0.295 m: 0.295 × 0.295 = 0.087025, about 0.0870 m²." }
    smaller:
      check: { type: "number", q: "A reading of $0.30$ m to the nearest $0.01$ m could really be as short as what? (m)", answer: 0.295, tolerance: 0.0005, explain: "0.30 − 0.005 = 0.295." }
  - hint: ["Out by ÷ measured value, times 100.", "0.35 ÷ 12."]
    check: { type: number, q: "Review: the room's area is $12$ m² and could be out by $0.35$ m². What is the percentage error? (%, 1 decimal place)", answer: 2.9, tolerance: 0.05, explain: "0.35 ÷ 12 = 0.0292, × 100 = 2.9%. Each length had a percentage error of about 1.3% and 1.7%: the area's percentage error is close to their sum." }
```

### A rectangle

### A tile

### Review

## Make: the carpet order

```step
stage: make
insight: "Back to the carpet: to be sure it covers the floor you order for the highest the area could be, which is more than the measured area."
tasks:
  - hint: ["Use the highest length and width.", "4.05 × 3.05 = 12.3525."]
    check:
      type: reasoning
      paper: true
      q: "The room is 4.0 m by 3.0 m, each to the nearest 10 cm. Carpet is sold in whole square metres. How many square metres should you order so you are sure to have enough? (m²)"
      steps:
        - ["$4.0 + 0.05 = 4.05$ and $3.0 + 0.05 = 3.05$", "the highest each length could be"]
        - ["$4.05 \\times 3.05 = 12.3525$", "the highest the area could be"]
        - ["round up to $13$", "sold in whole square metres, and 12 would be short"]
      answer: "13"
      answerLabel: "Square metres to order"
      tolerance: 0.001
      feedback:
        - ["12", "That is the measured area. The room could be bigger, and 12 might be short."]
        - ["12.35", "Carpet is sold in whole square metres: round up."]
        - ["12.05", "That adds one length's error to the area. Both lengths are out at once."]
      criteria:
        - "I used the highest of each length."
        - "I found the highest the area could be."
        - "I rounded up, because 12 might be short."
      explain: "4.05 × 3.05 = 12.3525, so order 13 m² to be sure."
  - check:
      type: question
      q: "What else would make you order more carpet than 13 m²?"
      options:
        - "Offcuts from cutting round the edges and doorways, which the bounds don't include"
        - "A shop with a larger pile of carpet"
        - "Measuring to the nearest metre, which gives the same bounds"
        - "Nothing: the highest area is always enough"
      answer: 0
      feedback:
        - null
        - "The shop's stock doesn't change what the room needs."
        - "Measuring to the nearest metre makes the bounds much wider."
        - "The bounds cover the measuring, not the cutting."
      explain: "The bounds cover how well you measured. Cutting waste is a separate allowance you add."
```

### The order

Work this out on paper first, then type your answer.

### Beyond the measuring

The room and its measurements are made up for the task.

**Also used in**

- **Building.** Ordering paint, tiles or turf: the error in the area is bigger than the error in a length.
- **Science.** A density worked out from a mass and a volume carries both measurements' errors.
- **Next lesson.** Errors that build up: many small errors in a long job, and several multiplications in a row.
