---
order: 2
unit: sheets
title: Copy a formula
summary: "When you copy a formula to another cell, its cell names move with it. Copy =C2-B2 from D2 down one row and it becomes =C3-B3, because the formula really means 'the cell one to the left, take away the cell two to the left'. So you write one formula, then copy or fill it down the column, and every row works on its own cells."
language: maths
hook: "The scientist measured thirty bean plants. She wrote the growth formula for the first one. Does she have to type it thirty times?"
---
In the last lesson you wrote a growth formula for one bean. Here are five beans, all measured the same way (every height is in cm). Only D2 has a formula so far.

| | A | B | C | D |
|---|---|---|---|---|
| **1** | Plant | Day 1 | Day 4 | Growth |
| **2** | Bean A | {{day1[1]}} | {{day4[1]}} | `=C2-B2` |
| **3** | Bean B | {{day1[2]}} | {{day4[2]}} | |

## Predict: what lands in D3?

```step
stage: predict
insight: "Committing to what a pasted formula holds tests the move: its cell names shift by as much as the paste does."
check:
  type: predict
  q: "D2 holds =C2-B2. You copy D2 and paste it into D3, one row down. What does D3 hold?"
  options: ["=C2-B2", "=C3-B3", "=C4-B4", "{{day4[1]-day1[1]}}"]
  actual: "=C3-B3. The paste moves one row down, so every row number in the formula goes up by one. D3 then works out {{day4[2]}} - {{day1[2]}} = {{day4[2]-day1[2]}}, Bean B's own growth."
```

## Try: copy and paste

```step
stage: run
insight: "Pasting D2 into D3 and reading the bar settles the prediction: the names moved down a row, so D3 uses Bean B's cells."
try: { playground: board, starter: "sheet.yml#run", height: 420 }
hint: ["Click D2, then the Copy button. Click D3, then the Paste button.", "Click D3 and look at the bar above the sheet. It shows what the cell holds."]
check: { type: board, text: "Copy D2 and paste it into D3. What does the Growth in D3 show?", when: "f_D3 = 1 and c_D3 = {{day4[2]-day1[2]}}", explain: "D3 shows {{day4[2]-day1[2]}}. The pasted formula is =C3-B3, so it works on Bean B's row, not Bean A's." }
```

Was your guess right? Click D3 and read the bar: `=C3-B3`. The pasted formula is not the same text as D2's. It is the same **rule**.

## Worked example: one rule, every row

```step
stage: investigate
insight: "Reading the formula as a rule about places models the move. Sam types the same text in every row, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "D2 holds =C2-B2. You paste it into D5. What does D5 hold?"
      options: ["=C5-B5", "=C2-B2", "=C3-B3", "=D5-C5"]
      answer: 0
      feedback: [null, "That is the text of D2, but a paste moves the names. D5 is three rows further down than D2.", "That would be D3. D5 is three rows below D2, so each row number goes up by three.", "The formula's cells stay to the left of the cell it is in: one to the left, and two to the left."]
      explain: "D5 is three rows below D2, so each row number goes up by three: =C5-B5."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's growth column shows {{day4[1]-day1[1]}} for every bean, but Bean C only grew {{day4[3]-day1[3]}}. Click the line where Sam first goes wrong."
      answer: 3
      fault: logic
      misconception: same-formula-every-row
      explain: "Line 3: Sam typed =C2-B2 again for D3. Typing the same text keeps it on row 2. Copying D2 into D3 would have moved the names to row 3."
  - check:
      type: question
      q: "The formula in D2 is =C2-B2. Which words describe what it does, whichever row it is in?"
      options: ["Take the cell two to the left away from the cell one to the left", "Take B2 away from C2, always", "Take 3 away from 11", "Take the cell above away from the cell below"]
      answer: 0
      feedback: [null, "Those cells are only right for row 2. A copy in row 3 uses row 3's cells.", "Those are the numbers in row 2 at the moment. A formula uses cells, not the numbers in them.", "The cells are in the same row, to the left."]
      explain: "Copying keeps the pattern: the cells one and two to the left, in the same row."
```

### Where does the name go?

```worked
\texttt{D2: =C2-B2} :: C2 is one cell to the left of D2, and B2 is two cells to the left.
\texttt{D3} \to \texttt{=C3-B3} :: Pasted one row down, the same pattern points at C3 and B3.
\texttt{D4} \to \texttt{=C4-B4} :: One more row down, one more row number.
\texttt{D6} \to \texttt{=C6-B6} :: The pattern is the same in every row, so D6 uses row 6.
\texttt{D6} = {{day4[5]}} - {{day1[5]}} = {{day4[5]-day1[5]}} \text{ (Bean E's own heights)} :: Each row works out its own bean's growth.
```

Now: which cell does D5 use?

### Find the mistake

### One rule

## Vary: change the paste

```step
stage: modify
insight: "Each task changes where the formula is pasted: further down, one column across, then a quicker way to fill a column."
tasks:
  - check:
      type: number
      q: "E2 holds =B2*10. You copy E2 into E5. B5 holds {{day1[4]}}. What does E5 show?"
      answer: {{day1[4] * 10}}
      explain: "E5 holds =B5*10, which is {{day1[4]}} × 10 = {{day1[4] * 10}}."
  - check:
      type: question
      q: "D2 holds =B2+C2. You copy D2 and paste it one column to the right, into E2. What does E2 hold?"
      options: ["=C2+D2", "=B2+C2", "=B3+C3", "=C3+D3"]
      answer: 0
      feedback: [null, "That is the text of D2. Pasted one column right, the column letters move on too.", "Moving right changes the letters, not the row number.", "Moving right changes the letters, not the row number. The row stays 2."]
      explain: "One column right, so each column letter moves one along: B becomes C and C becomes D."
  - check:
      type: question
      q: "D2 holds a growth formula. What is the quickest way to get growth formulas into D3 to D6 that are all right?"
      options: ["Select D2 and fill down", "Type each one by hand", "Type the answers", "Copy the number in D2"]
      answer: 0
      feedback: [null, "That works, but it is slow and easy to slip on a row number. Filling down does it in one go.", "Typed answers do not follow when a measurement changes.", "That pastes a number, not a formula."]
      explain: "Fill down copies the formula into the cells below it, moving the names row by row. Excel and Sheets call it fill down or the fill handle."
```

### Paste further down

### Paste across

### The quick way

## Practise: fill the column

```step
stage: practise
insight: "Filling a whole column from one formula, and telling a copied rule from five typed copies."
try: { playground: board, starter: "sheet.yml#practise", height: 420 }
tasks:
  - check:
      type: question
      q: "D2 to D6 each hold a growth formula made by filling down. You change Bean D's Day 1 height in B5. Which cells change?"
      options: ["Only D5", "All of D2 to D6", "None of them", "Only B5"]
      answer: 0
      feedback: [null, "Each formula uses only the cells in its own row.", "The formulas work their answers out again when a cell they use changes.", "B5 changes because you typed in it. D5's formula uses B5, so it changes too."]
      explain: "D5's formula uses B5 and C5. The other rows use their own cells, so only D5 changes."
  - starter: "sheet.yml#practise"
    hint: ["Click D2, then choose Fill down. It copies the formula into the cells below.", "You can also copy D2 and paste it into each of D3 to D6 one at a time."]
    check: { type: board, text: "Use the formula in D2 to fill D3 to D6 with growth formulas for the other four beans.", when: "f_D3 = 1 and f_D4 = 1 and f_D5 = 1 and f_D6 = 1 and c_D3 = {{day4[2]-day1[2]}} and c_D4 = {{day4[3]-day1[3]}} and c_D5 = {{day4[4]-day1[4]}} and c_D6 = {{day4[5]-day1[5]}}", explain: "Each cell from D3 to D6 holds its own row's formula, such as =C5-B5 in D5. Filling down moved the names for you." }
```

### Which cells change?

### Fill the column

## Make: your own sheet

```step
stage: make
insight: "Writing one formula and filling it down twice, once for growth and once for growth per day, has students use the move on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 420 }
hint: ["Type any Day 1 and Day 4 heights for the five beans. Then write =C2-B2 in D2 and fill down.", "For the last column, write =D2/3 in E2 (growth divided by the 3 days between measurements) and fill down."]
check: { type: board, text: "Fill in your own heights for five beans. Write a growth formula in D2 and fill it down to D6. Then write a growth per day formula in E2 (growth ÷ 3) and fill it down to E6.", when: "f_D2 = 1 and f_D3 = 1 and f_D4 = 1 and f_D5 = 1 and f_D6 = 1 and f_E2 = 1 and f_E3 = 1 and f_E4 = 1 and f_E5 = 1 and f_E6 = 1 and n_errors = 0 and c_D2 = c_C2 - c_B2 and c_D6 = c_C6 - c_B6 and c_E2 * 3 = c_D2 and c_E6 * 3 = c_D6", explain: "Each growth cell uses its own row's heights, and each growth per day cell divides its own row's growth by 3. If you change a height, that row's two answers follow." }
```

Change one of your Day 1 heights. Which two answers follow?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Copying a formula down in Excel or Sheets shows the same rule at work in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I typed the five beans, wrote a formula in D2, and copied it down to D6 (by copy and paste, or by filling down). I clicked a pasted cell and saw that its formula used its own row." }
```

Excel, Google Sheets and Numbers all copy formulas this way. To fill down, select the cell and the cells below it, then press Ctrl+D (Cmd+D on a Mac) or drag the small square at the corner of the cell downwards. To copy and paste, use Ctrl+C and Ctrl+V. Click a pasted cell to check its formula used its own row.

```context
data:
  day1: [3, 2, 4, 5, 3]
  day4: [11, 11, 10, 13, 9]
assert:
  - day4[1] - day1[1] != day4[3] - day1[3]
  - day4[1] - day1[1] != day4[2] - day1[2]
```
