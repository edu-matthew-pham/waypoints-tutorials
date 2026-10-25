---
order: 6
unit: summing
title: Count and decide
summary: "IF lets a cell decide: =IF(test, answer if true, answer if not). A test compares cells with signs such as >=, and words in an answer go inside quote marks. COUNTIF counts how many cells in a range match a rule, such as >=10 or \"Tall\". Together they turn a column of numbers into sorted-out groups and counts that follow when the numbers change."
language: maths
hook: "A scientist wants to know how many beans are 'tall'. She could look down the column and count. What if the sheet could decide for each plant, and count for her?"
---
Eight beans were measured on day 10 (in cm). This scientist calls a bean **Tall** if it is {{cut[1]}} cm or more, and **Short** if not. Column C decides with **IF**, and B11 counts the Tall ones with **COUNTIF**.

| | A | B | C |
|---|---|---|---|
| **1** | Plant | Height (cm) | Size |
| **2** | Bean A | {{h[1]}} | Short |
| **3** | Bean B | {{h[2]}} | Tall |
| **…** | … | … | … |
| **11** | Tall plants | {{above(h, cut[1]-0.001)}} | |

C2 holds this formula, and each cell below has the same kind. B11 holds the COUNTIF:

```text
C2:   =IF(B2>={{cut[1]}},"Tall","Short")
B11:  =COUNTIF(C2:C9,"Tall")
```

## Predict: what happens to the count?

```step
stage: predict
insight: "Committing to what the count shows after one height changes tests the move: IF and COUNTIF both work again from the new number."
check:
  type: predict
  q: "{{above(h, cut[1]-0.001)}} beans are Tall, so B11 shows {{above(h, cut[1]-0.001)}}. Bean A in B2 is {{h[1]}}, so C2 shows Short. B2 is changed to {{cut[1]+0.5}}. What does B11 show?"
  options: ["{{above(h, cut[1]-0.001)}}", "{{above(h, cut[1]-0.001)+1}}", "{{cut[1]+0.5}}", "Tall"]
  actual: "{{above(h, cut[1]-0.001)+1}}. C2's IF now sees {{cut[1]+0.5}}, which is {{cut[1]}} or more, so C2 shows Tall. COUNTIF counts one more Tall plant."
```

## Try: change a height

```step
stage: run
insight: "Changing B2 and watching C2 and B11 settles the prediction: IF decides again, then COUNTIF counts again."
try: { playground: board, starter: "sheet.yml#run", height: 460 }
hint: ["Click B2, type {{cut[1]+0.5}} and press Enter.", "Watch C2 change, then B11."]
check: { type: board, text: "Change Bean A's height in B2 to {{cut[1]+0.5}}. What does the count of Tall plants in B11 show?", when: "c_B2 = {{cut[1]+0.5}} and c_B11 = {{above(h, cut[1]-0.001)+1}}", explain: "B11 shows {{above(h, cut[1]-0.001)+1}}. C2 now says Tall, so COUNTIF finds {{above(h, cut[1]-0.001)+1}} Tall plants instead of {{above(h, cut[1]-0.001)}}." }
```

Was your guess right? Bean B is exactly {{h[2]}} cm and is already Tall, because the test is `>=`, which means 'greater than or equal to'.

## Worked example: decide, then count

```step
stage: investigate
insight: "Writing the test and the two answers models the move. Sam leaves the quote marks off the words, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does =IF(B2>={{cut[1]}},\"Tall\",\"Short\") show when B2 holds {{h[4]}}?"
      options: ["Tall", "Short", "{{h[4]}}", "TRUE"]
      answer: 0
      feedback: [null, "Short is the answer for a number under {{cut[1]}}.", "The IF shows one of its two answers, not the cell it tests.", "The test works out true here, but the IF shows its answer for true, which is Tall."]
      explain: "The test B2>={{cut[1]}} is true for {{h[4]}}, so IF shows its first answer, Tall."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's C2 shows #NAME? instead of Tall or Short. Click the line where Sam first goes wrong."
      answer: 2
      fault: syntax
      misconception: words-need-quotes
      explain: "Line 2: Tall and Short are words, so they need quote marks. Without them, the sheet thinks Tall is the name of something and shows #NAME?."
  - check:
      type: question
      q: "What does =COUNTIF(B2:B9,\">={{cut[1]}}\") count?"
      options: ["How many cells from B2 to B9 hold {{cut[1]}} or more", "The sum of the numbers that are {{cut[1]}} or more", "The biggest number in B2 to B9", "How many cells are in B2 to B9"]
      answer: 0
      feedback: [null, "COUNTIF counts the cells. SUM would add the numbers.", "That would be MAX.", "That would count every cell, whatever it holds. COUNTIF counts only those that match."]
      explain: "COUNTIF counts the cells in the range that match the rule in quotes."
```

### IF and COUNTIF

```worked
\texttt{=IF(} \text{test} \texttt{,} \text{if true} \texttt{,} \text{if not} \texttt{)} :: IF has three parts, separated by commas.
\texttt{B2>={{cut[1]}}} :: The test: is the height {{cut[1]}} or more? (\texttt{>=} means greater than or equal to.)
\texttt{"Tall"} \texttt{ , } \texttt{"Short"} :: The two answers. Words go inside quote marks.
\texttt{=COUNTIF(C2:C9,"Tall")} :: Look at C2 to C9 and count the cells that say Tall.
\texttt{B2} \text{ becomes } {{cut[1]+0.5}} \to \text{Tall, count} = {{above(h, cut[1]-0.001)+1}} :: Change a height and the decision and the count both follow.
```

Now: what does IF show?

### Find the mistake

### Count the cells

## Vary: change the test

```step
stage: modify
insight: "Each task changes the rule: a number test, a test on the boundary, then words for the answers."
tasks:
  - check:
      type: number
      q: "The heights are {{h[1]}}, {{h[2]}}, {{h[3]}}, {{h[4]}}, {{h[5]}}, {{h[6]}}, {{h[7]}} and {{h[8]}}. What does =COUNTIF(B2:B9,\">={{cut[1]}}\") show?"
      answer: {{above(h, cut[1]-0.001)}}
      explain: "The cells with {{cut[1]}} or more are {{h[2]}}, {{h[4]}}, {{h[5]}} and {{h[7]}}: {{above(h, cut[1]-0.001)}}."
  - check:
      type: question
      q: "B2 holds exactly {{cut[1]}}. What does =IF(B2>{{cut[1]}},\"Tall\",\"Short\") show?"
      options: ["Short", "Tall", "{{cut[1]}}", "An error"]
      answer: 0
      feedback: [null, "{{cut[1]}} is not more than {{cut[1]}}, so the test is false. Only >= includes 10.", "IF shows one of its two answers, not the cell.", "The formula is written correctly, so there is no error."]
      explain: ">  means more than, so {{cut[1]}} is not enough. >= means more than or equal, and would have given Tall."
  - check:
      type: question
      q: "You want C2 to say Healthy if the height in B2 is more than 8, and Check if not. Which formula do you write?"
      options: ["=IF(B2>8,\"Healthy\",\"Check\")", "=IF(B2>8,Healthy,Check)", "=IF(B2<8,\"Healthy\",\"Check\")", "=IF B2>8 \"Healthy\" \"Check\""]
      answer: 0
      feedback: [null, "The words need quote marks, or the sheet shows #NAME?.", "< means less than, which would give Healthy to the short ones.", "IF needs brackets and commas between its three parts."]
      explain: "Test first (B2>8), then the answer if true, then the answer if not, with words in quote marks."
```

### Count the tall ones

### The boundary

### Choose the formula

## Practise: decide and count

```step
stage: practise
insight: "Writing an IF column and a COUNTIF, and counting the other way round."
try: { playground: board, starter: "sheet.yml#practise", height: 460 }
tasks:
  - check:
      type: question
      q: "Every bean has a Tall or Short answer in column C, and B11 counts the Tall ones. Bean F in B7 grows from {{h[6]}} to {{cut[1]+0.5}}. What happens to the count in B11?"
      options: ["It goes up by one", "It stays the same", "It goes down by one", "It becomes {{cut[1]+0.5}}"]
      answer: 0
      feedback: [null, "Bean F was Short at {{h[6]}} and is Tall at {{cut[1]+0.5}}, so the count changes.", "A bean that gets taller can only become Tall, not leave the group.", "B11 counts plants. It does not copy a height."]
      explain: "Bean F becomes Tall, so there is one more Tall plant to count."
  - starter: "sheet.yml#practise"
    hint: ["In C2 type =IF(B2>={{cut[1]}},\"Tall\",\"Short\") and fill it down to C9.", "B11 already counts the Tall plants, so it shows {{above(h, cut[1]-0.001)}} when your IF column is right."]
    check: { type: board, text: "Write an IF formula in C2 that says Tall for {{cut[1]}} or more and Short if not. Fill it down to C9.", when: "f_C2 = 1 and f_C3 = 1 and f_C4 = 1 and f_C5 = 1 and f_C6 = 1 and f_C7 = 1 and f_C8 = 1 and f_C9 = 1 and c_B11 = {{above(h, cut[1]-0.001)}}", explain: "Each C cell holds an IF such as =IF(B5>={{cut[1]}},\"Tall\",\"Short\"). B11 counts {{above(h, cut[1]-0.001)}} Tall plants." }
  - starter: "sheet.yml#practise-filled"
    hint: ["Click B12 and type a COUNTIF on the heights in B2:B9. The rule goes in quotes, such as \"<{{low[1]}}\"."]
    check: { type: board, text: "The sizes are filled in. In B12, count how many plants are shorter than {{low[1]}} cm.", when: "f_B12 = 1 and c_B12 = {{count(h)-above(h, low[1]-0.001)}}", explain: "B12 holds =COUNTIF(B2:B9,\"<{{low[1]}}\"): the heights {{h[1]}} and {{h[8]}} are under {{low[1]}}, so the count is {{count(h)-above(h, low[1]-0.001)}}." }
```

### What happens to the count?

### Write the IF

### Count the other way

## Make: a quiz result

```step
stage: make
insight: "Building a pass or retry column and two counts for a quiz of their own has students use IF and COUNTIF on their own data."
try: { playground: board, starter: "sheet.yml#make", height: 460 }
hint: ["Type eight quiz scores out of 10 in B2 to B9, some under 5 and some 5 or more.", "In C2 write =IF(B2>=5,\"Pass\",\"Retry\") and fill down. Then COUNTIF in B11 for Pass and B12 for Retry."]
check: { type: board, text: "Type eight quiz scores, some under 5 and some 5 or more. Write an IF in C2 (5 or more is Pass, otherwise Retry) and fill it down. Count the Pass cells in B11 and the Retry cells in B12.", when: "f_C2 = 1 and f_C9 = 1 and f_B11 = 1 and f_B12 = 1 and n_errors = 0 and c_B11 > 0 and c_B12 > 0 and c_B11 + c_B12 = 8", explain: "Column C decides with IF, B11 holds =COUNTIF(C2:C9,\"Pass\") and B12 holds =COUNTIF(C2:C9,\"Retry\"). Together they count all eight scores." }
```

Change one score from under 5 to over 5. Which two cells move?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Using IF and COUNTIF in Excel or Sheets shows the same two functions in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I wrote an IF that shows two different words depending on a number, filled it down, and counted one of the words with COUNTIF." }
```

Excel, Google Sheets and Numbers all have IF and COUNTIF with the same parts. Words go in quote marks and so does a rule such as ">={{cut[1]}}". Capital letters in the words do not matter to COUNTIF. If a cell shows #NAME?, check the quote marks first.

```context
# h: the eight heights on day 10. cut: where Tall starts. low: a second, lower rule (Practise).
# cut and low are one-item lists so a swapped dataset moves them with the heights.
data:
  h: [8.5, 10, 9.5, 12, 11, 9, 13.5, 7]
  cut: [10]
  low: [9]
assert:
  - h[1] < cut[1]
  - h[2] == cut[1]
  - h[4] >= cut[1]
  - h[6] == low[1]
  - h[6] < cut[1]
  - h[8] < low[1]
  - low[1] < cut[1]
  - count(h) == 8
  - above(h, cut[1]-0.001) > 0
  - above(h, cut[1]-0.001) < 8
```
