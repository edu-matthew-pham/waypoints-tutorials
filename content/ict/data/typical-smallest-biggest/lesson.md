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
| **2** | Bean A | {{heights[1]}} |
| **…** | … | … |
| **7** | Bean F | {{heights[6]}} |
| **9** | Average | `=AVERAGE(B2:B7)` |
| **10** | Shortest | `=MIN(B2:B7)` |
| **11** | Tallest | `=MAX(B2:B7)` |

## Predict: what is the new average?

```step
stage: predict
insight: "Committing to what the average shows after one height changes tests the move: AVERAGE works out total divided by count again."
check:
  type: predict
  q: "The six heights add up to {{sum(heights)}} cm, so the average in B9 is {{avg(heights)}}. Bean D in B5 is re-measured and found to be {{bumped[4]}} cm, not {{heights[4]}}. What does B9 show now?"
  options: ["{{avg(heights)}}", "{{avg(bumped)}}", "{{heights[4]}}", "{{bumped[4]}}"]
  actual: "{{avg(bumped)}}. The total goes up by {{bumped[4] - heights[4]}}, to {{sum(bumped)}}, and {{sum(bumped)}} ÷ 6 = {{avg(bumped)}}. The average moves up by {{avg(bumped) - avg(heights)}}, not by {{bumped[4] - heights[4]}}, because the six plants share the change."
```

## Try: change a height

```step
stage: run
insight: "Changing B5 and reading all three summary cells settles the prediction and shows what MIN and MAX do."
try: { playground: board, starter: "sheet.yml#run", height: 440 }
hint: ["Click B5, type {{bumped[4]}} and press Enter.", "Look at the Average, Shortest and Tallest. Which of them moved?"]
check: { type: board, text: "Change Bean D's height in B5 to {{bumped[4]}}. What does the Average in B9 show?", when: "c_B5 = {{bumped[4]}} and c_B9 = {{avg(bumped)}}", explain: "B9 shows {{avg(bumped)}}. The new total is {{sum(bumped)}} and {{sum(bumped)}} ÷ 6 = {{avg(bumped)}}. The Tallest in B11 now shows {{max(bumped)}}, but the Shortest did not move." }
```

Was your guess right? The Tallest moved by all {{max(bumped) - max(heights)}} cm, the Average by {{avg(bumped) - avg(heights)}} cm, and the Shortest not at all. Three different summaries, three different jobs.

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
      explain: "AVERAGE is the total divided by how many numbers there are: {{sum(heights)}} ÷ 6 = {{avg(heights)}}."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's average height is {{round((sum(heights) - heights[5]) / 6, 1)}}, but every plant that was measured is taller than {{round((sum(heights) - heights[5]) / 6, 1)}}. Click the line where Sam first goes wrong."
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
      explain: "Biggest minus smallest is the spread: {{max(heights)}} − {{min(heights)}} = {{max(heights) - min(heights)}} cm."
```

### Three summaries

```worked
\texttt{=AVERAGE(B2:B7)} :: Add the heights: {{heights[1]}} + {{heights[2]}} + {{heights[3]}} + {{heights[4]}} + {{heights[5]}} + {{heights[6]}} = {{sum(heights)}}. Divide by 6, because there are 6 numbers.
{{sum(heights)}} \div 6 = {{avg(heights)}} :: The average height is {{avg(heights)}} cm.
\texttt{=MIN(B2:B7)} = {{min(heights)}}, \; \texttt{=MAX(B2:B7)} = {{max(heights)}} :: The shortest and the tallest.
{{max(heights)}} - {{min(heights)}} = {{max(heights) - min(heights)}} :: The spread is the gap between the biggest and smallest.
\texttt{B5} \text{ becomes } {{bumped[4]}} \to {{sum(bumped)}} \div 6 = {{avg(bumped)}} :: Change one height and the summaries work themselves out again.
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
      q: "The heights are {{heights[1]}}, {{heights[2]}}, {{heights[3]}}, {{heights[4]}}, {{heights[5]}} and {{heights[6]}}. What does =MAX(B2:B7)-MIN(B2:B7) show?"
      answer: {{max(heights) - min(heights)}}
      explain: "The tallest is {{max(heights)}} and the shortest is {{min(heights)}}, so the spread is {{max(heights) - min(heights)}}."
  - check:
      type: number
      q: "Bean E in B6 is re-measured and found to be {{shorterE[5]}}. The other heights are {{shorterE[1]}}, {{shorterE[2]}}, {{shorterE[3]}}, {{shorterE[4]}} and {{shorterE[6]}}. B9 holds =ROUND(AVERAGE(B2:B7),1) (the 1 means one decimal place). What does it show?"
      answer: {{round(avg(shorterE), 1)}}
      explain: "The total is {{sum(shorterE)}} and {{sum(shorterE)}} ÷ 6 is about {{round(avg(shorterE), 3)}}, which ROUND shows as {{round(avg(shorterE), 1)}}."
  - check:
      type: question
      q: "A student types a height as {{heights[4] * 10}} instead of {{heights[4]}}. Which cell would show the slip most clearly?"
      options: ["The tallest, which would show {{heights[4] * 10}}", "The shortest, which would not change", "The average, which would look the same", "None of them"]
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
    check: { type: board, text: "Write formulas in B9, B10 and B11 for the average, shortest and tallest height.", when: "f_B9 = 1 and f_B10 = 1 and f_B11 = 1 and c_B9 = {{avg(heights)}} and c_B10 = {{min(heights)}} and c_B11 = {{max(heights)}}", explain: "B9 holds =AVERAGE(B2:B7), B10 holds =MIN(B2:B7) and B11 holds =MAX(B2:B7): {{avg(heights)}}, {{min(heights)}} and {{max(heights)}}." }
  - starter: "sheet.yml#practise-gap"
    hint: ["Bean E was not measured, so leave B6 empty. Then type =AVERAGE(B2:B7) in B9."]
    check: { type: board, text: "Bean E was not measured. Leave its cell empty and write the average of the other five in B9.", when: "f_B9 = 1 and c_B9 = {{(sum(heights) - heights[5]) / 5}}", explain: "B9 holds =AVERAGE(B2:B7), which is {{sum(heights) - heights[5]}} ÷ 5 = {{(sum(heights) - heights[5]) / 5}}. The empty cell is skipped, so only the five measured plants count." }
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

```context
data:
  heights: [8.5, 10, 9.5, 12, 11, 9]
  bumped: [8.5, 10, 9.5, 18, 11, 9]
  shorterE: [8.5, 10, 9.5, 12, 7, 9]
assert:
  - max(bumped) == bumped[4]
  - bumped[4] > max(heights)
  - min(bumped) == min(heights)
  - min(heights) > round((sum(heights) - heights[5]) / 6, 1)
  - max(heights) == heights[4]
  - heights[4] > heights[5]
```
