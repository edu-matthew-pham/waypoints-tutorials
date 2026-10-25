---
order: 5
unit: summing
title: Typical, smallest and biggest
summary: "AVERAGE adds up the numbers in a range and divides by how many there are, to give a typical value. MIN and MAX give the smallest and the biggest, and together they show how spread out the numbers are. A cell left empty is skipped, but a 0 you type is a real number and pulls the average down. ROUND tidies how many decimal places show."
language: maths
hook: "Six bean plants were measured on day 10. A scientist wants one number to say how tall a typical bean is. Which one, and what if one plant was not measured?"
---
Six beans were measured on day 10, in cm. Under the heights, three functions work out a summary: **AVERAGE** (a typical height), **MIN** (the shortest) and **MAX** (the tallest).

| | A | B |
|---|---|---|
| **1** | Plant | Height (cm) |
| **2** | Bean A | 8.5 |
| **…** | … | … |
| **7** | Bean F | 9 |
| **9** | Average | `=AVERAGE(B2:B7)` |
| **10** | Shortest | `=MIN(B2:B7)` |
| **11** | Tallest | `=MAX(B2:B7)` |

## Predict: what is the new average?

```step
stage: predict
insight: "Committing to what the average shows after one height changes tests the move: AVERAGE works out total divided by count again."
check:
  type: predict
  q: "The six heights add up to 60 cm, so the average in B9 is 10. Bean D in B5 is re-measured and found to be 18 cm, not 12. What does B9 show now?"
  options: ["10", "11", "12", "18"]
  actual: "11. The total goes up by 6, to 66, and 66 ÷ 6 = 11. The average moves up by 1, not by 6, because the six plants share the change."
```

## Try: change a height

```step
stage: run
insight: "Changing B5 and reading all three summary cells settles the prediction and shows what MIN and MAX do."
try: { playground: board, starter: "sheet.yml#run", height: 440 }
hint: ["Click B5, type 18 and press Enter.", "Look at the Average, Shortest and Tallest. Which of them moved?"]
check: { type: board, text: "Change Bean D's height in B5 to 18. What does the Average in B9 show?", when: "c_B5 = 18 and c_B9 = 11", explain: "B9 shows 11. The new total is 66 and 66 ÷ 6 = 11. The Tallest in B11 now shows 18, but the Shortest did not move." }
```

Was your guess right? The Tallest moved by all 6 cm, the Average by 1 cm, and the Shortest not at all. Three different summaries, three different jobs.

## Worked example: summarise a column

```step
stage: investigate
insight: "Using each function for its job models the move. Sam types 0 for a plant that was not measured, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does =AVERAGE(B2:B7) work out?"
      options: ["Adds the six heights and divides by six", "The height of the middle plant", "The height that most plants have", "The tallest minus the shortest"]
      answer: 0
      feedback: [null, "That is a different kind of typical value, the median. AVERAGE adds up and divides.", "That is the mode. AVERAGE adds up and divides.", "That is the spread, which MAX and MIN together give."]
      explain: "AVERAGE is the total divided by how many numbers there are: 60 ÷ 6 = 10."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's average height is 8.2, but every plant that was measured is taller than 8. Click the line where Sam first goes wrong."
      answer: 3
      fault: logic
      misconception: zero-for-missing
      explain: "Line 3: a 0 is a real number, so the sheet counts a plant of height 0 and the average drops. An empty cell is skipped, so Bean E should have been left empty."
  - check:
      type: question
      q: "Which formula shows how much taller the tallest bean is than the shortest?"
      options: ["=MAX(B2:B7)-MIN(B2:B7)", "=MAX(B2:B7)+MIN(B2:B7)", "=AVERAGE(B2:B7)", "=MAX(B2:B7)/MIN(B2:B7)"]
      answer: 0
      feedback: [null, "That adds them. Taking away gives the distance between them.", "That is the typical height, not the gap.", "That says how many times as tall, not how much taller."]
      explain: "Biggest minus smallest is the spread: 12 − 8.5 = 3.5 cm."
```

### Three summaries

```worked
\texttt{=AVERAGE(B2:B7)} :: Add the heights: 8.5 + 10 + 9.5 + 12 + 11 + 9 = 60. Divide by 6, because there are 6 numbers.
60 \div 6 = 10 :: The average height is 10 cm.
\texttt{=MIN(B2:B7)} = 8.5, \; \texttt{=MAX(B2:B7)} = 12 :: The shortest and the tallest.
12 - 8.5 = 3.5 :: The spread is the gap between the biggest and smallest.
\texttt{B5} \text{ becomes } 18 \to 66 \div 6 = 11 :: Change one height and the summaries work themselves out again.
```

Now: what does AVERAGE work out?

### Find the mistake

### How much taller?

## Vary: change the data and the function

```step
stage: modify
insight: "Each task changes the function used, the data in it, or the way the answer is shown."
tasks:
  - check:
      type: number
      q: "The heights are 8.5, 10, 9.5, 12, 11 and 9. What does =MAX(B2:B7)-MIN(B2:B7) show?"
      answer: 3.5
      explain: "The tallest is 12 and the shortest is 8.5, so the spread is 3.5."
  - check:
      type: number
      q: "Bean E in B6 is re-measured and found to be 7. The other heights are 8.5, 10, 9.5, 12 and 9. B9 holds =ROUND(AVERAGE(B2:B7),1) (the 1 means one decimal place). What does it show?"
      answer: 9.3
      explain: "The total is 56 and 56 ÷ 6 = 9.333…, which ROUND shows as 9.3."
  - check:
      type: question
      q: "A student types a height as 120 instead of 12.0. Which cell would show the slip most clearly?"
      options: ["The tallest, which would show 120", "The shortest, which would not change", "The average, which would look the same", "None of them"]
      answer: 0
      feedback: [null, "The shortest would not change, which is why it would not help.", "The average would jump a long way, but you may not notice that alone. The tallest shows the slip itself.", "A slip that far from the others shows in MAX straight away."]
      explain: "A typing slip is usually far from the other numbers, so MAX or MIN shows it. Checking the biggest and smallest is a quick way to catch a slip."
```

### The spread

### Tidy the answer

### Spot the slip

## Practise: summarise three ways

```step
stage: practise
insight: "Writing the three summary formulas, and handling a plant that was not measured."
try: { playground: board, starter: "sheet.yml#practise", height: 440 }
tasks:
  - check:
      type: question
      q: "Which pair of cells would tell you how spread out the heights are?"
      options: ["The tallest and the shortest", "The average and the total", "The average only", "The count of plants"]
      answer: 0
      feedback: [null, "Those say what is typical and how much there is, not how spread out.", "The average says nothing about how far the heights spread.", "A count says how many, not how far apart."]
      explain: "The gap between the biggest and smallest tells you how spread out the numbers are."
  - starter: "sheet.yml#practise"
    hint: ["In B9 type =AVERAGE(B2:B7). Then do B10 with MIN and B11 with MAX.", "A range from B2 to B7 covers all six plants."]
    check: { type: board, text: "Write formulas in B9, B10 and B11 for the average, shortest and tallest height.", when: "f_B9 = 1 and f_B10 = 1 and f_B11 = 1 and c_B9 = 10 and c_B10 = 8.5 and c_B11 = 12", explain: "B9 holds =AVERAGE(B2:B7), B10 holds =MIN(B2:B7) and B11 holds =MAX(B2:B7): 10, 8.5 and 12." }
  - starter: "sheet.yml#practise-gap"
    hint: ["Bean E was not measured, so leave B6 empty. Then type =AVERAGE(B2:B7) in B9."]
    check: { type: board, text: "Bean E was not measured. Leave its cell empty and write the average of the other five in B9.", when: "f_B9 = 1 and c_B9 = 9.8", explain: "B9 holds =AVERAGE(B2:B7), which is 49 ÷ 5 = 9.8. The empty cell is skipped, so only the five measured plants count." }
```

### Spread

### Three formulas

### A plant missing

## Make: your own measurements

```step
stage: make
insight: "Measuring six people's arm spans and summarising them has students use AVERAGE, MIN and MAX on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 440 }
hint: ["Type six arm spans in cm (any numbers will do, such as 150 or 162) in B2 to B7.", "Write AVERAGE, MIN and MAX formulas in B9, B10 and B11 over B2:B7."]
check: { type: board, text: "Type six different arm spans in B2 to B7. Write formulas in B9, B10 and B11 for the average, shortest and tallest.", when: "f_B9 = 1 and f_B10 = 1 and f_B11 = 1 and n_errors = 0 and c_B11 > c_B10 and c_B9 * 6 = c_B2 + c_B3 + c_B4 + c_B5 + c_B6 + c_B7 and c_B10 <= c_B2 and c_B10 <= c_B3 and c_B10 <= c_B4 and c_B10 <= c_B5 and c_B10 <= c_B6 and c_B10 <= c_B7 and c_B11 >= c_B2 and c_B11 >= c_B3 and c_B11 >= c_B4 and c_B11 >= c_B5 and c_B11 >= c_B6 and c_B11 >= c_B7", explain: "B9 holds =AVERAGE(B2:B7), B10 holds =MIN(B2:B7) and B11 holds =MAX(B2:B7). Change a number and all three can change." }
```

Change one arm span to something very different. Which of the three moves most, and which not at all?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Summarising a column in Excel or Sheets shows the same three functions in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I typed six measurements and wrote AVERAGE, MIN and MAX formulas over them. I changed one number and saw which summaries changed." }
```

Excel, Google Sheets and Numbers all have AVERAGE, MIN, MAX and ROUND with the same names. The average they give is the *mean*. If it looks too low, check for a typed 0 where a measurement is missing: leave the cell empty instead.
