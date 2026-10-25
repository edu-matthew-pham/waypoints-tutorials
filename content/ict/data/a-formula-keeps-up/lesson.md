---
order: 1
unit: sheets
title: A formula keeps up
summary: "A spreadsheet cell has a name, such as C2 (column C, row 2). A cell that starts with = is a formula: it works out its answer from other cells by their names, and it works it out again whenever one of them changes. A number you type in as the answer does not. So you type the formula once, and the sheet keeps the answer right."
language: maths
hook: "A scientist measures a bean plant on day 1 and on day 4, then works out how much it grew. Then she finds she wrote down the day 1 height wrong. Does she have to redo every sum?"
---
A spreadsheet is a grid of **cells**. Every cell has a name made from its column letter and its row number, so the cell in column C, row 2 is **C2**. Cells can hold words, numbers or formulas.

Here is part of a Year 7 science sheet. Bean A was 3 cm tall on day 1 and 11 cm tall on day 4 (every height here is in cm). Cell D2 holds a formula that finds the growth.

| | A | B | C | D |
|---|---|---|---|---|
| **1** | Plant | Day 1 | Day 4 | Growth |
| **2** | Bean A | 3 | 11 | `=C2-B2` |

## Predict: what does D2 show?

```step
stage: predict
insight: "Committing to what D2 shows after B2 changes tests the move: a formula works its answer out again from the cells it names."
check:
  type: predict
  q: "D2 holds the formula =C2-B2, so it shows 8. The scientist finds she measured wrong on day 1 and changes B2 from 3 to 5. What does D2 show now?"
  options: ["6", "8", "=C2-B2", "16"]
  actual: "6. The formula takes whatever is in C2 and B2 now: 11 - 5 = 6. It works its answer out again every time a cell it uses changes."
```

## Try: change a cell

```step
stage: run
insight: "Changing B2 and watching D2 settles the prediction: D2 is a formula, so it follows the cells it names."
try: { playground: board, starter: "sheet.yml#run", height: 300 }
hint: ["Click the cell B2, type 5 and press Enter.", "Click D2 and look at the bar above the sheet. It shows what the cell holds."]
check: { type: board, text: "Change the Day 1 height in B2 to 5. What does the Growth in D2 show now?", when: "c_B2 = 5 and c_D2 = 6", explain: "D2 shows 6. The formula =C2-B2 uses the cells' names, not their numbers, so it works out 11 - 5 when B2 changes." }
```

Was your guess right? Click D2 again. The bar shows `=C2-B2` even though the cell shows 6. A cell shows its **result**, and the bar shows what it **holds**.

## Worked example: write a formula

```step
stage: investigate
insight: "Writing a formula with cell names models the move. Sam types the answer instead, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does the = at the start of =C2-B2 tell the spreadsheet?"
      options: ["Work this out from the cells named", "This is a word, not a number", "Make the cell bold", "Add C2 to B2"]
      answer: 0
      feedback: [null, "Words are typed without an =.", "It has nothing to do with the look of the cell.", "The - between the names is take away, not add."]
      explain: "A cell that starts with = is a formula. The spreadsheet works out the answer from the cells named and shows it."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's growth stopped being right after the day 1 height changed. Click the line where Sam first goes wrong."
      answer: 3
      fault: logic
      misconception: typed-answer-stale
      explain: "Line 3: Sam worked out 8 and typed it. It is only a number, so the sheet cannot know it came from B2 and C2. A formula =C2-B2 would have followed the change."
  - check:
      type: question
      q: "Which cell is in column D, row 3?"
      options: ["D3", "3D", "C4", "D-3"]
      answer: 0
      feedback: [null, "A cell's name is its column letter first, then its row number.", "Column D is the fourth column, and row 3 is the third row.", "There is no dash in a cell's name."]
      explain: "Column letter first, then row number: D3. The headings at the top and side of the sheet show them."
      fault: syntax
      misconception: row-before-column
```

### Writing =C2-B2

```worked
\texttt{=C2-B2} :: Start with =, so the spreadsheet knows this is a formula.
\texttt{C2} \to 11 :: Use the name of the cell that holds Day 4, not the number 11.
\texttt{B2} \to 3 :: Use the name of the cell that holds Day 1, not the number 3.
\texttt{C2-B2} = 11 - 3 = 8 :: The spreadsheet looks up what the names hold, works out the sum and shows 8.
\texttt{B2} \text{ becomes } 5 \to 11 - 5 = 6 :: Change a cell and the formula works its answer out again.
```

Now: what does the = do?

### Find the mistake

### Cell names

## Vary: change the cells, change the formula

```step
stage: modify
insight: "Each task changes a cell or the operation: a new Day 4 height, a different operation, then choosing the formula for a new job."
tasks:
  - check:
      type: number
      q: "B2 holds 3, C2 holds 11 and D2 holds =C2-B2. You change C2 to 15. What does D2 show?"
      answer: 12
      explain: "The formula works out 15 - 3 = 12."
  - check:
      type: number
      q: "B2 holds 3 and C2 holds 4. A cell holds =B2*C2 (the * means times). What does it show?"
      answer: 12
      explain: "The * means multiply: 3 × 4 = 12."
  - check:
      type: question
      q: "You want the cell E2 to show the two heights added together, B2 and C2. Which do you type in E2?"
      options: ["=B2+C2", "B2+C2", "=14", "+B2C2"]
      answer: 0
      feedback: [null, "Without the = at the start, the sheet shows the words B2+C2.", "That is a typed number. It would not follow a change in B2 or C2.", "A formula starts with =, and needs a + between the two names."]
      explain: "=B2+C2: start with =, then the two names with a + between them."
```

### Change a cell

### A different operation

### Add the heights

## Practise: write the formulas

```step
stage: practise
insight: "Writing two formulas on a sheet, and telling a formula from a typed answer."
try: { playground: board, starter: "sheet.yml#practise", height: 340 }
tasks:
  - check:
      type: question
      q: "Which of these cells will keep giving the right growth if the Day 1 height changes?"
      options: ["A cell holding =C2-B2", "A cell holding 8", "Both do", "Neither does"]
      answer: 0
      feedback: [null, "A typed 8 is only a number. It stays 8 whatever else changes.", "Only one of them uses the cells' names.", "A formula using the names does follow the change."]
      explain: "Only the formula uses the cells' names, so it works its answer out again when they change."
  - starter: "sheet.yml#practise"
    hint: ["D2 already has a formula. Look at it in the bar, and write the same kind for D3 and D4.", "For Bean B the formula is =C3-B3. Check the row number matches the plant."]
    check: { type: board, text: "Write a formula in D3 for Bean B's growth, and one in D4 for Bean C's growth. Do not type the answers.", when: "f_D3 = 1 and f_D4 = 1 and c_D3 = 9 and c_D4 = 6", explain: "D3 holds =C3-B3, which is 11 - 2 = 9, and D4 holds =C4-B4, which is 10 - 4 = 6. Each formula uses the cells in its own row." }
```

### Which keeps up?

### Bean B and Bean C

## Make: your own sheet

```step
stage: make
insight: "Building a small sheet with its own measurements and formulas has students use the move on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 340 }
hint: ["Type a Day 1 height in B2 and a Day 4 height in C2, then do the same for Beans B and C. Any numbers will do.", "In D2 type =C2-B2, then write the same kind of formula in D3 and D4, using that row's cells."]
check: { type: board, text: "Fill in your own Day 1 and Day 4 heights for the three beans, and write a growth formula in D2, D3 and D4.", when: "f_D2 = 1 and f_D3 = 1 and f_D4 = 1 and n_errors = 0 and c_D2 = c_C2 - c_B2 and c_D3 = c_C3 - c_B3 and c_D4 = c_C4 - c_B4", explain: "Each growth cell holds a formula that takes its own row's Day 1 height from its Day 4 height. If you change any height, the growth follows." }
```

Change one of your Day 1 heights. Does the growth follow?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Doing the same in Excel or Sheets shows that the idea is the same in every spreadsheet, and gets students used to the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses (Excel, Google Sheets or similar), I typed the same table, with a formula in D2 that uses the cell names and starts with =. Then I changed B2 and saw D2 change by itself." }
```

Excel, Google Sheets and other spreadsheet apps all use the same cell names and start formulas with =. If your formula shows as words instead of a number, check that you typed the = at the start.
