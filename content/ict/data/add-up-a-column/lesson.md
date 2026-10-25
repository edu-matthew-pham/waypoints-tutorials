---
order: 4
unit: summing
title: Add up a column
summary: "A function is a ready-made formula with a name. SUM adds up the numbers in a range of cells, and a range such as B2:B8 means every cell from B2 down to B8. The colon says 'all the cells from here to there'; a comma only lists the cells you name. SUM works its answer out again when any cell in the range changes."
language: maths
hook: "A weather station records the rainfall every day. At the end of the week someone has to add up all seven numbers. A sheet can do it, but only if you tell it which cells."
---
Here is a week of rainfall from a school weather station, in millimetres. The total is in B9. It uses **SUM**, a function that adds up a range of cells.

| | A | B |
|---|---|---|
| **1** | Day | Rainfall (mm) |
| **2** | Monday | {{w1[1]}} |
| **3** | Tuesday | {{w1[2]}} |
| **…** | … | … |
| **8** | Sunday | {{w1[7]}} |
| **9** | Total | `=SUM(B2:B8)` |

## Predict: what is the new total?

```step
stage: predict
insight: "Committing to what the total shows after one reading changes tests the move: SUM works its answer out again from the whole range."
check:
  type: predict
  q: "The total in B9 is {{sum(w1)}}. Thursday's rainfall in B5 was recorded as {{w1[4]}}, but the gauge was found to have been blocked and the right amount is {{fix}}. You change B5 to {{fix}}. What does B9 show?"
  options: ["{{sum(w1)}}", "{{sum(w1) - w1[4] + fix}}", "{{fix}}", "{{sum(w1) - fix}}"]
  actual: "{{sum(w1) - w1[4] + fix}}. SUM adds up every cell from B2 to B8 again whenever one of them changes: {{sum(w1)}} + {{fix - w1[4]}} = {{sum(w1) - w1[4] + fix}}."
```

## Try: change a reading

```step
stage: run
insight: "Changing B5 and reading B9 settles the prediction: the total follows every cell in its range."
try: { playground: board, starter: "sheet.yml#run", height: 400 }
hint: ["Click B5, type {{fix}} and press Enter.", "Click B9 and read the bar. It shows the SUM formula."]
check: { type: board, text: "Change Thursday's rainfall in B5 to {{fix}}. What does the Total in B9 show?", when: "c_B5 = {{fix}} and c_B9 = {{sum(w1) - w1[4] + fix}}", explain: "B9 shows {{sum(w1) - w1[4] + fix}}. The formula =SUM(B2:B8) adds up B2 to B8 again whenever one of them changes." }
```

Was your guess right? You did not change the formula in B9. You changed one number in its range, and the total followed.

## Worked example: write a SUM

```step
stage: investigate
insight: "Naming the range with a colon models the move. Sam lists two cells with a comma, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does B2:B8 mean in =SUM(B2:B8)?"
      options: ["Every cell from B2 down to B8", "Only B2 and B8", "B2 take away B8", "B2 divided by B8"]
      answer: 0
      feedback: [null, "That would be B2,B8 with a comma. The colon names every cell between them too.", "There is no operation in a range. It is a block of cells.", "There is no operation in a range. It is a block of cells."]
      explain: "A range names a block of cells by its two ends. B2:B8 is B2, B3, B4, and so on down to B8."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's total shows {{w1[1] + w1[7]}}, but the week had much more rain. Click the line where Sam first goes wrong."
      answer: 2
      fault: logic
      misconception: comma-not-colon
      explain: "Line 2: =SUM(B2,B8) adds only the two cells named, B2 and B8: {{w1[1]}} + {{w1[7]}} = {{w1[1] + w1[7]}}. A colon, =SUM(B2:B8), adds every cell between them."
  - check:
      type: question
      q: "Sam's other formula is =SUM(B1:B8), and B1 holds the heading Rainfall (mm). What does it show?"
      options: ["The same total as =SUM(B2:B8)", "An error", "The total plus 1", "0"]
      answer: 0
      feedback: [null, "SUM leaves out words in a range rather than stopping, so there is no error.", "A heading does not count as a number.", "The numbers below the heading are still added."]
      explain: "SUM only adds numbers. Words in the range are left out, so the heading does no harm."
```

### Writing =SUM(B2:B8)

```worked
\texttt{=SUM(} \ldots \texttt{)} :: Start with =, then the name of the function and a bracket.
\texttt{B2:B8} :: The range: from the first cell to the last, with a colon between them.
{{w1[1]}} + {{w1[2]}} + {{w1[3]}} + {{w1[4]}} + {{w1[5]}} + {{w1[6]}} + {{w1[7]}} = {{sum(w1)}} :: SUM adds up the numbers in B2 to B8.
\texttt{B5} \text{ becomes } {{fix}} \to {{sum(w1) - w1[4] + fix}} :: Change a cell in the range and the total works itself out again.
```

Now: what does the colon do?

### Find the mistake

### A heading in the range

## Vary: change the range

```step
stage: modify
insight: "Each task changes the range: a shorter one, a different list of cells, then the same SUM copied to a new column."
tasks:
  - check:
      type: number
      q: "B2 to B8 hold {{w1[1]}}, {{w1[2]}}, {{w1[3]}}, {{w1[4]}}, {{w1[5]}}, {{w1[6]}} and {{w1[7]}}. What does =SUM(B3:B6) show?"
      answer: {{w1[2] + w1[3] + w1[4] + w1[5]}}
      explain: "B3 to B6 hold {{w1[2]}}, {{w1[3]}}, {{w1[4]}} and {{w1[5]}}, which add to {{w1[2] + w1[3] + w1[4] + w1[5]}}."
  - check:
      type: question
      q: "You want the total for Tuesday to Friday only, which are B3 to B6. Which formula do you write?"
      options: ["=SUM(B3:B6)", "=SUM(B3,B6)", "=SUM(B2:B6)", "=B3+B6"]
      answer: 0
      feedback: [null, "The comma lists only B3 and B6. The colon would take the cells between.", "That also adds Monday in B2.", "That adds only the two cells, not the ones between."]
      explain: "B3:B6 starts at Tuesday and ends at Friday, and SUM adds all four."
  - check:
      type: question
      q: "A second week's rainfall is in column C, in C2 to C8. You copy B9 =SUM(B2:B8) into C9. What does C9 hold?"
      options: ["=SUM(C2:C8)", "=SUM(B2:B8)", "=SUM(C3:C9)", "=SUM(B2:C8)"]
      answer: 0
      feedback: [null, "That is the text of B9. A paste moves the names, so the column letters change.", "Moving one column right changes the letters, not the row numbers.", "Both letters move one column right, not just one of them."]
      explain: "Pasted one column right, B becomes C at both ends of the range, so it totals the second week."
```

### A shorter range

### Choose the formula

### Copy it across

## Practise: total the weeks

```step
stage: practise
insight: "Writing a SUM over a column, copying it to a second column, and then one SUM over a block of both."
try: { playground: board, starter: "sheet.yml#practise", height: 420 }
tasks:
  - check:
      type: number
      q: "B9 holds =SUM(B2:B8) and shows {{sum(w1)}}. You change Sunday's rainfall in B8 from {{w1[7]}} to {{newsun}}. What does B9 show now?"
      answer: {{sum(w1) - w1[7] + newsun}}
      explain: "Sunday went up by {{newsun - w1[7]}}, so the total goes up by {{newsun - w1[7]}}: {{sum(w1)}} + {{newsun - w1[7]}} = {{sum(w1) - w1[7] + newsun}}."
  - starter: "sheet.yml#practise"
    hint: ["Click B9 and type =SUM(B2:B8), then press Enter.", "Both weeks are in the sheet: Week 1 is in column B and Week 2 in column C."]
    check: { type: board, text: "Write a formula in B9 that adds up Week 1's rainfall. Then write one in C9 for Week 2.", when: "f_B9 = 1 and f_C9 = 1 and c_B9 = {{sum(w1)}} and c_C9 = {{sum(w2)}}", explain: "B9 holds =SUM(B2:B8), which is {{sum(w1)}}, and C9 holds =SUM(C2:C8), which is {{sum(w2)}}. You can copy B9 across to C9." }
  - starter: "sheet.yml#practise"
    hint: ["A range can be a block: B2:C8 starts at B2 and ends at C8, and holds both weeks.", "Click B11 and type =SUM(B2:C8)."]
    check: { type: board, text: "Write one formula in B11 that adds up both weeks at once.", when: "f_B11 = 1 and c_B11 = {{sum(w1) + sum(w2)}}", explain: "B11 holds =SUM(B2:C8). A range can be a block of cells: it covers B2 down to C8, which is both weeks. {{sum(w1)}} + {{sum(w2)}} = {{sum(w1) + sum(w2)}}." }
```

### What does it add up to?

### Total each week

### Both weeks at once

## Make: your own week

```step
stage: make
insight: "Recording a week of your own numbers and totalling them has students use SUM on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 400 }
hint: ["Type how many minutes you read each day (any numbers will do) in B2 to B8.", "In B9 write =SUM(B2:B8)."]
check: { type: board, text: "Type the minutes you read on each of the seven days. Write a formula in B9 that adds them up.", when: "f_B9 = 1 and n_errors = 0 and c_B9 > 0 and c_B9 = c_B2 + c_B3 + c_B4 + c_B5 + c_B6 + c_B7 + c_B8", explain: "B9 holds =SUM(B2:B8), the total of the seven days. If you change any day, the total follows." }
```

Change one of your days. Does the total follow?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Adding up a column in Excel or Sheets shows the same function in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I typed a week of numbers, wrote =SUM( with the range of the seven cells in a total cell, and changed a number to see the total follow." }
```

Excel, Google Sheets and Numbers all have SUM. You can type the range or drag across the cells with the mouse after the bracket. There is also an AutoSum button (a Greek capital sigma, Σ) that writes a SUM for the cells above or to the left of the selected cell. If your total looks too small, check the range has the first and last cells you meant.

```context
data:
  w1: [0, 12, 4, 0, 7, 20, 3]
  w2: [5, 0, 0, 9, 14, 2, 1]
  quiz: [2, 4, 6, 8, 10]
  fix: 6
  newsun: 10
assert:
  - fix > 0
  - w1[4] < fix
  - newsun != w1[7]
  - w1[1] + w1[7] < sum(w1)
```
