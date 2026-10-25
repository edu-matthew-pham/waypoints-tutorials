---
order: 12
unit: fractions
node: AC9M7N06 n1
assumes: [AC9M5N05 n1]
uses: [AC9M7N04 n1, AC9M7N02 n3]   # equivalent fractions; the LCM (HCF and LCM)
title: Adding and subtracting fractions
summary: "Parts can be counted together only when they are the same size. Cut both fractions into the same parts first: 1/3 + 1/4 = 4/12 + 3/12 = 7/12. The lowest common multiple of the bottoms is the smallest choice."
language: maths
voice: { name: af_heart, speed: 1.1 }
connection: timber-cuts   # data/connections/maths.yml
hook: "A recipe needs 1/2 of a cup of milk and 1/5 of a cup of cream. How much is that altogether? You cannot tell until the parts are the same size."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8269
  url: http://127.0.0.1:8269/index.html
  readySelector: "#sl-k"
  layout: full
explainPicture: { ref: bars.yml#explain-pic, caption: "Cut into twelfths, $\\tfrac{1}{3} = \\tfrac{4}{12}$ and $\\tfrac{1}{4} = \\tfrac{3}{12}$: together 7 twelfths." }
explainClip:
  query: { code: "@bars.yml#explain", fresh: 1, id: explain }
  caption: "The same size parts"
  say: "Thirds and quarters cannot be counted together."
  clip:
    - caption: { text: "9 parts: thirds split, quarters do not.", say: "Nine parts: the quarters do not split evenly." }
    - wait: 1200
    - caption: { text: "12 parts: both split. 12 is the LCM of 3 and 4.", say: "Twelve parts: both split. Twelve is the lowest common multiple." }
    - click: Make k bigger
    - click: Make k bigger
    - click: Make k bigger
    - expect: { selector: "#gsum", contains: "4/12 + 3/12 = 7/12" }
    - wait: 600
    - caption: { text: "4 twelfths + 3 twelfths = 7 twelfths.", say: "Four twelfths and three twelfths make seven twelfths." }
    - wait: 1400
---
You can add 2 apples and 3 apples, but 2 apples and 3 pears do not make 5 of anything. Fractions are the same: $\tfrac{2}{7} + \tfrac{3}{7} = \tfrac{5}{7}$ (sevenths and sevenths), but thirds and quarters are different sizes.

To add or subtract fractions with different bottoms, cut both into the **same parts** first, using equivalent fractions. The new bottom is a **common denominator**: a common multiple of the two bottoms, and the lowest common multiple is the smallest.

## Predict: a third and a quarter

<figure class="situation" role="img" aria-label="Two bars of the same length. The first is cut into 3 equal parts with 1 shaded, one third. The second is cut into 4 equal parts with 1 shaded, one quarter. A third bar underneath, for the sum of the two, is marked with a question mark."><svg viewBox="0 0 400 190" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><g stroke="#185FA5"><rect x="50" y="15" width="100" height="30" fill="#378ADD" fill-opacity="0.45"/><rect x="150" y="15" width="100" height="30"/><rect x="250" y="15" width="100" height="30"/></g><g stroke="#0F6E56"><rect x="50" y="65" width="75" height="30" fill="#1D9E75" fill-opacity="0.45"/><rect x="125" y="65" width="75" height="30"/><rect x="200" y="65" width="75" height="30"/><rect x="275" y="65" width="75" height="30"/></g><rect x="50" y="125" width="300" height="30" stroke-dasharray="5 4"/><text x="40" y="35" text-anchor="end" fill="currentColor" stroke="none">1/3</text><text x="40" y="85" text-anchor="end" fill="currentColor" stroke="none">1/4</text><text x="200" y="145" text-anchor="middle" fill="currentColor" stroke="none">1/3 + 1/4 = ?</text><text x="200" y="182" text-anchor="middle" fill="currentColor" stroke="none">how much of the whole bar is shaded together?</text></svg></figure>

```step
stage: predict
insight: "Committing to a sum for 1/3 + 1/4 shows whether they add the tops and the bottoms (2/7), which the bars then contradict."
check:
  type: predict
  q: "What is $\\tfrac{1}{3} + \\tfrac{1}{4}$?"
  options: ["$\\tfrac{7}{12}$", "$\\tfrac{2}{7}$", "$\\tfrac{2}{12}$", "$\\tfrac{1}{7}$"]
  actual: "7/12: 1/3 = 4/12 and 1/4 = 3/12, and 4 + 3 = 7 twelfths. 2/7 is less than 1/3 on its own, so it cannot be the sum."
```

Is the answer more or less than $\tfrac{1}{3}$ on its own?

## Run: cut them the same

```step
stage: run
insight: "Changing the number of parts until both bars split evenly shows that a common multiple of 3 and 4 makes the parts countable."
try: { playground: board, starter: "bars.yml#run", height: 600 }
check: { type: board, text: "Change $k$, the number of parts in each whole, until both fractions split evenly. Then read the sum. Was your prediction right?", when: "e = 1", explain: "12 works (and 24): both are multiples of 3 and 4. 12 is the lowest." }
```

The board says when a bar does not split evenly into $k$ parts.

## Investigate: common denominators

```step
stage: investigate
insight: "A common denominator makes the parts the same size; Ella adds tops and bottoms as if the parts already matched. Mixed numerals and decimals follow the same rule: line up like with like."
tasks:
  - check:
      type: answer
      q: "Work out $\\tfrac{2}{5} + \\tfrac{1}{3}$. Give your answer in simplest form."
      answer: "11/15"
      form: simplest
      feedback:
        - ["3/8", "That adds the tops and the bottoms. Cut both into fifteenths first."]
        - ["3/15", "Change the tops too: 2/5 = 6/15 and 1/3 = 5/15."]
      explain: "2/5 = 6/15 and 1/3 = 5/15, so 6/15 + 5/15 = 11/15."
  - check:
      type: bug
      code: "working.txt#ella"
      text: "Ella adds $\\tfrac{1}{2} + \\tfrac{1}{3}$. Click the line where her method goes wrong."
      answer: 2
      fault: logic
      misconception: fraction-add-across
      explain: "Line 2: halves and thirds are different sizes, so they cannot be counted together. 1/2 = 3/6 and 1/3 = 2/6: 5/6. (2/5 is less than 1/2 on its own.)"
  - check:
      type: answer
      q: "Work out $3.45 + 2.7$."
      answer: "6.15"
      feedback:
        - ["3.72", "The 7 is 7 tenths, not 7 hundredths. Line up the decimal points: 2.70."]
        - ["6.42", "That lines up the last digits. Line up the decimal points instead: 2.7 = 2.70."]
      explain: "Line up the points: 3.45 + 2.70 = 6.15. Tenths with tenths, like fractions with the same bottom."
```

### Same parts, then count

Here is the method, then a mixed numeral and a decimal.

```worked
\tfrac{1}{3} + \tfrac{1}{4} = \tfrac{4}{12} + \tfrac{3}{12} :: The LCM of 3 and 4 is 12: write both in twelfths.
= \tfrac{7}{12} :: Same parts: add the tops, keep the bottom.
2\tfrac{1}{2} - \tfrac{3}{4} = \tfrac{10}{4} - \tfrac{3}{4} = \tfrac{7}{4} = 1\tfrac{3}{4} :: A mixed numeral: write it as quarters first.
3.45 + 2.70 = 6.15 :: Decimals: line up the points (the same parts: tenths, hundredths).
```

Now try one: $\tfrac{2}{5} + \tfrac{1}{3}$.

### Find the mistake

Read Ella's working. Could the answer be less than $\tfrac{1}{2}$?

### Decimals

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: subtracting on the board with the lowest common denominator, subtracting without the board, a mixed numeral answer, then the case where one denominator is a multiple of the other."
try: { playground: board, starter: "bars.yml#subtract", height: 600 }
tasks:
  - starter: "bars.yml#subtract"
    hint: "24 works. Is there a smaller number that 4 and 6 both divide?"
    check: { type: board, text: "Find $\\tfrac{3}{4} - \\tfrac{1}{6}$ with the lowest common denominator.", when: "e = 1 and l = 1", explain: "12: 3/4 = 9/12 and 1/6 = 2/12, so 9/12 − 2/12 = 7/12." }
  - check:
      type: answer
      q: "Work out $\\tfrac{5}{6} - \\tfrac{1}{4}$ in simplest form."
      answer: "7/12"
      form: simplest
      feedback:
        - ["4/2", "Subtracting the tops and the bottoms does not work for different parts."]
        - ["14/24", "Equal, but it simplifies: 12 is a smaller common denominator."]
      explain: "5/6 = 10/12 and 1/4 = 3/12, so 7/12."
  - check:
      type: answer
      q: "Work out $1\\tfrac{1}{2} + \\tfrac{2}{3}$."
      answer: "2 1/6"
      form: simplest
      feedback:
        - ["1 3/5", "Adding tops and bottoms does not work. Write both in sixths."]
      explain: "1 1/2 = 9/6 and 2/3 = 4/6, so 13/6 = 2 1/6."
  - check:
      type: question
      q: "Edge case: what is the lowest common denominator for $\\tfrac{1}{4} + \\tfrac{3}{8}$?"
      options: ["8, since 8 is already a multiple of 4", "32 = 4 × 8", "12 = 4 + 8", "4"]
      answer: 0
      feedback: [null, "32 works, but 8 is lower: 4 divides 8.", "12 is not a multiple of 8.", "Eighths do not split into quarters."]
      explain: "4 divides 8, so only the 1/4 changes: 2/8 + 3/8 = 5/8."
```

### Subtract

Each task changes one thing.

### Without the board

### A mixed numeral

### One already fits

## Practise: add and subtract

```step
stage: practise
insight: "Fractions, a mixed numeral and decimals in context, mixed; adding across is the planted slip; the review keeps the LCM fresh."
tasks:
  - check:
      type: answer
      q: "Work out $\\tfrac{3}{4} + \\tfrac{1}{6}$ in simplest form."
      answer: "11/12"
      form: simplest
      feedback:
        - ["4/10", "That adds the tops and the bottoms."]
      explain: "9/12 + 2/12 = 11/12."
  - check:
      type: answer
      q: "Work out $3\\tfrac{1}{3} - 1\\tfrac{1}{2}$."
      answer: "1 5/6"
      form: simplest
      feedback:
        - ["2", "The wholes give 2, but 1/3 − 1/2 is less than zero. Write both as sixths: 20/6 − 9/6."]
      explain: "3 1/3 = 20/6 and 1 1/2 = 9/6, so 11/6 = 1 5/6."
    smaller:
      check: { type: "number", q: "How many sixths are there in $3\\tfrac{1}{3}$?", answer: 20, explain: "3 wholes are 18 sixths and a third is 2 sixths: 20 sixths. Now do the same for $1\\tfrac{1}{2}$." }
  - check:
      type: answer
      q: "A plank is 2.4 m long. 0.65 m is cut off. How long is the rest, in metres?"
      answer: "1.75"
      feedback:
        - ["2.35", "The 65 is hundredths. Line up the points: 2.40 − 0.65."]
      explain: "2.40 − 0.65 = 1.75 m."
  - check:
      type: answer
      q: "Review: find the LCM of 6 and 10."
      answer: "30"
      feedback:
        - ["60", "6 × 10 counts the shared 2 twice."]
      explain: "6 = 2 × 3 and 10 = 2 × 5: LCM = 2 × 3 × 5 = 30."
```

### Add

### Mixed numerals

### Decimals in context

### Review: LCM

## Make: a sum of one

```step
stage: make
insight: "Choosing two different fractions that add to exactly 1, and showing it with a common denominator, works the method backwards."
try: { playground: board, starter: "bars.yml#make", height: 680 }
hint: ["Try 1/2 and something else, or 1/3 and something else.", "Choose k so both bars split, then count the parts."]
check: { type: board, text: "Make two fractions with different bottoms that add to exactly 1.", when: "o = 1 and r = 1 and (b - d)^2 > 0 and e = 1 and a > 0 and c > 0 and a < b and c < d", explain: "For example 1/2 + 2/4, 1/3 + 4/6 or 1/4 + 6/8. Neither bottom a multiple of the other: 2/4 + 3/6 (6/12 + 6/12)." }
```

Then find a pair where neither bottom is a multiple of the other.

## Make: a board on paper

```step
stage: make
insight: "Lining up the places before taking away is the move that fails when students subtract 85 from 24; the paper task makes them set it out and choose why."
hint: ["Write 2.4 as 2.40 so the places line up.", "Take away both pieces: add them first, or subtract one at a time."]
check:
  type: reasoning
  paper: true
  q: "A shelf kit needs two pieces cut from one 2.4 m board: one 0.85 m long and one 1.25 m long. How much of the board is left, in metres?"
  steps:
    - ["Write the lengths with the same places: $2.40$, $0.85$, $1.25$", "tenths with tenths and hundredths with hundredths, like fractions with the same bottom"]
    - ["$0.85 + 1.25 = 2.10$", "the two pieces together"]
    - ["$2.40 - 2.10 = 0.30$", "take the pieces away from the board"]
    - ["$0.3$ m is left", "check: 2.10 + 0.30 = 2.40, the whole board"]
  picks:
    - step: 1
      q: "Why write 2.4 as 2.40 before you take anything away?"
      options:
        - "So the places line up: hundredths sit under hundredths"
        - "So the answer has two decimal places"
        - "Because 2.4 is a different number from 2.40"
      answer: 0
      feedback: [null, "The places are the reason. The answer's length does not matter.", "They are the same number. Only the places are written differently."]
  answer: "0.3"
  feedback:
    - ["1.55", "That takes away only the 0.85 piece. The 1.25 piece comes off the board too."]
  criteria:
    - "I wrote every length to hundredths so the points lined up."
    - "I took away both pieces, not just one."
    - "I checked: the pieces and the offcut add back to 2.4 m."
  explain: "0.85 + 1.25 = 2.10, and 2.40 − 2.10 = 0.30. About 0.3 m (30 cm) is left. The saw takes a few millimetres from each cut, so in a real shed the offcut is a little shorter."
```

Do this one in your book, not on the screen. The lengths are made up for the task, but the question is real: someone cutting shelves has to know whether the board is long enough. Write the lengths with the points lined up, take both pieces away, and type the length left.

**Also used in**

- **Building.** Decking, skirting boards and fence rails are cut from stock lengths, and the offcut tells you whether one more piece fits.
- **Cooking.** Recipes add and take away fractions of a cup, and the pieces have to be the same size first.
- **Money.** Receipts and bank balances add and subtract in dollars and cents, tenths and hundredths.
