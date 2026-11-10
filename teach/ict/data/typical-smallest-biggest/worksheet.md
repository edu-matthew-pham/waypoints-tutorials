---
title: "Typical, smallest and biggest"
subtitle: "Working with data · Summing up · Lesson 5"
---

# Typical, smallest and biggest

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Six bean plants were measured on day 10. A scientist wants one number to say how tall a typical bean is. Which one, and what if one plant was not measured?


:::teacher-note

**In one sentence:** Students use AVERAGE, MIN and MAX to summarise a column of measurements, see which summary moves when one number changes, and learn that a typed 0 counts but an empty cell does not. They summarise six Year 7 bean heights, then six arm spans of their own, and repeat it in the spreadsheet app the school uses.

**Students should be able to say:** I can use AVERAGE, MIN and MAX on a column of numbers. I can say what each one tells me and which one moves when one number changes. I can leave a missing measurement empty instead of typing 0.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**The six heights add up to 60 cm, so the average in B9 is 10. Bean D in B5 is re-measured and found to be 18 cm, not 12. What does B9 show now?**

☐ 10

☐ 11

☐ 12

☐ 18

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 11. The total goes up by 6, to 66, and 66 ÷ 6 = 11. The average moves up by 1, not by 6, because the six plants share the change.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: summarise a column


:::keep-together

### Three summaries

1. $\texttt{=AVERAGE(B2:B7)}$ — Add the heights: 8.5 + 10 + 9.5 + 12 + 11 + 9 = 60. Divide by 6, because there are 6 numbers.
2. $60 \div 6 = 10$ — The average height is 10 cm.
3. $\texttt{=MIN(B2:B7)} = 8.5, \; \texttt{=MAX(B2:B7)} = 12$ — The shortest and the tallest.
4. $12 - 8.5 = 3.5$ — The spread is the gap between the biggest and smallest.
5. $\texttt{B5} \text{ becomes } 18 \to 66 \div 6 = 11$ — Change one height and the summaries work themselves out again.

Now: what does AVERAGE work out?

**What does =AVERAGE(B2:B7) work out?**

☐ The tallest minus the shortest

☐ The height that most plants have

☐ The height of the middle plant

☐ Adds the six heights and divides by six

:::


:::teacher-note

**Answer:** Adds the six heights and divides by six

AVERAGE is the total divided by how many numbers there are: 60 ÷ 6 = 10.

:::


:::keep-together

### Find the mistake

**Sam's average height is 8.2, but every plant that was measured is taller than 8.2. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has the heights of six beans in B2 to B7, measured on day 10.
 2  Bean E's pot was knocked over, so it was not measured.
 3  Sam types 0 into B6, so the cell is not empty.
 4  Sam writes =AVERAGE(B2:B7) in B9 and it shows 8.2.
 5  Every bean that was measured is taller than 8.2.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: a 0 is a real number, so the sheet counts a plant of height 0 and the average drops. An empty cell is skipped, so Bean E should have been left empty.

:::


:::keep-together

### How much taller?

**Which formula shows how much taller the tallest bean is than the shortest?**

☐ =MAX(B2:B7)+MIN(B2:B7)

☐ =MAX(B2:B7)-MIN(B2:B7)

☐ =AVERAGE(B2:B7)

☐ =MAX(B2:B7)/MIN(B2:B7)

:::


:::teacher-note

**Answer:** =MAX(B2:B7)-MIN(B2:B7)

Biggest minus smallest is the spread: 12 − 8.5 = 3.5 cm.

:::


:::typical

## Vary: change the data and the function


**The spread.** 

**Tidy the answer.** 

**Spot the slip.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Summarise three ways


:::keep-together

### Spread

**Which pair of cells would tell you how spread out the heights are?**

☐ The average and the total

☐ The average only

☐ The tallest and the shortest

☐ The count of plants

:::


:::teacher-note

**Answer:** The tallest and the shortest

The gap between the biggest and smallest tells you how spread out the numbers are.

:::


## Make: your own measurements

Change one arm span to something very different. Which of the three moves most, and which not at all?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have AVERAGE, MIN, MAX and ROUND with the same names. The average they give is the *mean*. If it looks too low, check for a typed 0 where a measurement is missing: leave the cell empty instead.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**Four heights are 6, 8, 10 and 12. What does =AVERAGE(B2:B5) show? And =MAX(B2:B5)-MIN(B2:B5)?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 9 for the average (36 ÷ 4) and 6 for the spread (12 − 6).

:::

