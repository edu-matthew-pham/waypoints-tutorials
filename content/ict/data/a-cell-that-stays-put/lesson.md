---
order: 3
unit: sheets
title: A cell that stays put
summary: "Copying a formula moves every cell name in it, which goes wrong when the formula needs one shared cell, such as g in a weight formula. A dollar sign fixes a name: $B$7 stays on B7 wherever the formula is copied. Putting a shared number in its own cell, then fixing it with $, means you change it once and every answer follows."
language: maths
hook: "Weight is mass times g. A sheet works out four weights on Earth. A teacher says: now do the Moon, where g is a lot smaller. Must she change every formula?"
---
Weight is a force: **weight (N) = mass (kg) × g**. On Earth, g is about {{gE}} newtons for every kilogram. The sheet below keeps g in its own cell, B7, so it is written once. C2 works out the weight of the backpack from its mass in B2 and g in B7.

| | A | B | C |
|---|---|---|---|
| **1** | Object | Mass (kg) | Weight (N) |
| **2** | Backpack | {{m[1]}} | `=B2*B7` |
| **3** | Bike | {{m[2]}} | |
| **7** | g (N per kg) | {{gE}} | |

## Predict: what lands in C3?

```step
stage: predict
insight: "Committing to what a pasted formula shows tests the move: every name moves, including the one that should not."
check:
  type: predict
  q: "C2 holds =B2*B7, which is {{m[1]}} × {{gE}} = {{m[1]*gE}}. You copy C2 and paste it into C3, one row down. B3 holds {{m[2]}}. What does C3 show?"
  options: ["{{m[2]*gE}}", "0", "{{m[1]*gE}}", "An error"]
  actual: "0. The pasted formula is =B3*B8. Both names moved down a row, so it multiplies the bike's mass by B8, which is empty. An empty cell counts as 0."
```

## Try: paste and look

```step
stage: run
insight: "Pasting C2 into C3 and reading the bar shows which name moved and which one should have stayed."
try: { playground: board, starter: "sheet.yml#run", height: 420 }
hint: ["Click C2, then Copy. Click C3, then Paste.", "Click C3 and read the bar. Which cell does it multiply the mass by?"]
check: { type: board, text: "Copy C2 and paste it into C3. What does the Weight in C3 show?", when: "f_C3 = 1 and c_C3 = 0", explain: "C3 shows 0. The pasted formula is =B3*B8. B7 was meant to stay put, but the paste moved it down to B8, which is empty." }
```

The bike does not weigh nothing. The paste moved **both** names, but only the mass (B2 to B3) should have moved. The g cell should stay put.

## Worked example: fix the cell

```step
stage: investigate
insight: "Putting dollar signs on the shared cell models the move. Sam writes the shared cell without them, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does the $ in $B$7 do?"
      options: ["Keeps the name B7 from moving when the formula is copied", "Makes the answer a price in dollars", "Adds 7 to B", "Makes the cell bold"]
      answer: 0
      feedback: [null, "In a formula the $ has nothing to do with money.", "It is part of the name, not an operation.", "It has nothing to do with the look of the cell."]
      explain: "A $ in front of a column letter or a row number fixes it. $B$7 fixes both, so the name stays on B7 wherever the formula is copied."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's weights show 0 for everything but the backpack. Click the line where Sam should have done something different."
      answer: 2
      fault: logic
      misconception: fixed-cell-moves
      explain: "Line 2: Sam wrote =B2*B7, but the formula was going to be copied down. B7 should be $B$7 so that it stays put. Filling down was fine."
  - check:
      type: question
      q: "Sam types =B2*{{gE}} in C2 and fills down, with g typed inside each formula. What goes wrong when Sam wants to try the Moon's g?"
      options: ["Every formula has to be rewritten", "Nothing, the formulas follow", "The sheet shows an error", "Only C2 has to be rewritten"]
      answer: 0
      feedback: [null, "A formula only follows a cell it names. The {{gE}} is typed inside, so it is just a number.", "The sheet works fine, but it is stuck with {{gE}}.", "Every row has its own 10 inside its formula."]
      explain: "The {{gE}} sits inside each formula, so each would have to be changed. A g in its own cell, fixed with $, is changed once."
```

### Fixing B7

```worked
\texttt{C2: =B2*\$B\$7} :: B2 can move with the row, but \texttt{\$B\$7} is fixed: it stays on B7.
\texttt{C3} \to \texttt{=B3*\$B\$7} :: Pasted one row down, B2 moves to B3 and \texttt{\$B\$7} stays.
\texttt{C3} = {{m[2]}} \times {{gE}} = {{m[2]*gE}} :: The bike's weight, using the same g.
\texttt{B7} \text{ becomes } {{gM}} \to {{m[2]}} \times {{gM}} = {{m[2]*gM}} :: Change g once and every weight follows.
```

Now: what does the $ do?

### Find the line

### Typed inside

## Vary: change what is fixed

```step
stage: modify
insight: "Each task changes the shared cell, then where the formula is pasted, then which of four written forms is right."
tasks:
  - check:
      type: number
      q: "C2 holds =B2*$B$7. B2 holds {{m[1]}} and B7 holds {{gE}}. You change B7 to {{gM}} (the Moon). What does C2 show?"
      answer: {{m[1]*gM}}
      explain: "C2 works out {{m[1]}} × {{gM}} = {{m[1]*gM}}."
  - check:
      type: question
      q: "C2 holds =B2*$B$7. You copy it into D3 (one column right, one row down). What does D3 hold?"
      options: ["=C3*$B$7", "=C3*$B$8", "=B3*$B$7", "=C3*C8"]
      answer: 0
      feedback: [null, "The $ keeps both the column and the row of B7 fixed, so it does not move to B8.", "B2 moves one column right to C2, and one row down to C3.", "The fixed cell stays $B$7 wherever it is pasted."]
      explain: "B2 moves one column right and one row down, so it becomes C3. $B$7 does not move."
  - check:
      type: question
      q: "You will fill the formula for the weight of the object in row 2 down to row 5, with g in B7. Which do you write in C2?"
      options: ["=B2*$B$7", "=B2*B7", "=B2*{{gE}}", "=B2*$B7"]
      answer: 0
      feedback: [null, "Filled down, B7 becomes B8, B9 and B10, which are empty.", "That works until g changes, and then every formula has to be rewritten.", "The $ is only in front of the column. The row number would still move down."]
      explain: "$B$7 fixes both the column and the row, and B2 is left free to move down the rows."
```

### Change g

### Paste across and down

### Choose the formula

## Practise: weigh the objects

```step
stage: practise
insight: "Writing a formula that fixes the shared cell, filling it down, then changing the one cell that holds g."
try: { playground: board, starter: "sheet.yml#practise", height: 420 }
tasks:
  - check:
      type: question
      q: "g is in B7 and a weight formula in C2 is filled down to C5. You want to change g. Which cell do you edit?"
      options: ["B7 only", "C2 to C5", "B2 to B5", "All of them"]
      answer: 0
      feedback: [null, "Those hold formulas that follow B7. You do not need to touch them.", "Those are the masses of the objects, which do not change.", "Only the cell that holds g has to change."]
      explain: "g is in one cell, B7. The formulas all use it, so changing it changes every weight."
  - starter: "sheet.yml#practise"
    hint: ["In C2 type =B2*$B$7, then use Fill down to fill C3 to C5.", "If a weight shows 0, click the cell and read the formula. Which cell does it use for g?"]
    check: { type: board, text: "Write a weight formula in C2 that fixes g in B7, and fill it down to C5.", when: "f_C2 = 1 and f_C3 = 1 and f_C4 = 1 and f_C5 = 1 and c_C2 = {{m[1]*gE}} and c_C3 = {{m[2]*gE}} and c_C4 = {{m[3]*gE}} and c_C5 = {{m[4]*gE}}", explain: "C2 holds =B2*$B$7 and the cells below hold =B3*$B$7, =B4*$B$7 and =B5*$B$7. Each uses its own mass and the one fixed g." }
  - starter: "sheet.yml#practise-filled"
    hint: ["Click B7 and type {{gM}}, then press Enter."]
    check: { type: board, text: "The weights are filled in. Change g to {{gM}}, the Moon's, and read the new weights.", when: "c_B7 = {{gM}} and c_C2 = {{m[1]*gM}} and c_C5 = {{m[4]*gM}}", explain: "You changed one cell, B7, and all four weights followed: the backpack is {{m[1]*gM}} N and the student {{m[4]*gM}} N." }
```

### Which cell?

### Write and fill

### Visit the Moon

## Make: Earth and Moon

```step
stage: make
insight: "Building two weight columns from two shared cells has students fix a different cell in each and use the move on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 440 }
hint: ["In C2 write =B2*$B$7 and fill down. In D2 write the same kind of formula that uses $B$8, then fill down.", "Type your own masses for the four objects in B2 to B5. Any numbers will do."]
check: { type: board, text: "Type four masses. Write a weight formula for Earth in C2 (using g in B7) and one for the Moon in D2 (using g in B8). Fill each down to row 5.", when: "f_C2 = 1 and f_C3 = 1 and f_C4 = 1 and f_C5 = 1 and f_D2 = 1 and f_D3 = 1 and f_D4 = 1 and f_D5 = 1 and n_errors = 0 and c_C2 = c_B2 * c_B7 and c_C5 = c_B5 * c_B7 and c_D2 = c_B2 * c_B8 and c_D5 = c_B5 * c_B8", explain: "Each Earth weight multiplies its mass by $B$7 and each Moon weight multiplies it by $B$8. Change either g and its whole column follows." }
```

Change the g for the Moon. Which column follows, and which does not?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Fixing a cell in Excel or Sheets shows the same idea in the real tool, with its own shortcut."
check: { type: reflect, text: "In the spreadsheet app my school uses, I put g in its own cell, wrote a weight formula that fixes it with $, and filled it down. Then I changed g and saw every weight change." }
```

Excel, Google Sheets and Numbers all use the dollar sign. You can type the $ yourself, or while the cursor is on a cell name in a formula, press F4 (Fn and F4 on some laptops) to put the $ signs in. Press it again to cycle through the ways of fixing the name. If a weight shows 0, click it and check the cell for g did not move.

```context
data:
  m: [5, 12, 20, 50]
  gE: 10
  gM: 1.6
  gMars: 3.7
assert:
  - gM < gE
  - gM > 0
  - gMars > gM
  - gMars < gE
  - m[1] != m[2]
  - m[1] > 0
```
