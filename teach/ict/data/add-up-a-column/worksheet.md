---
title: "Add up a column"
subtitle: "Working with data · Summing up · Lesson 4"
---

# Add up a column

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A weather station records the rainfall every day. At the end of the week someone has to add up all seven numbers. A sheet can do it, but only if you tell it which cells.


:::teacher-note

**In one sentence:** Students learn that SUM adds up a range of cells, that a colon in a range means every cell from one end to the other, and that the total follows when any cell in the range changes. They total a week of weather-station rainfall, then two weeks, then a week of their own numbers, and repeat it in the spreadsheet app the school uses.

**Students should be able to say:** I can write a SUM formula for a range of cells. I can say what the colon in B2:B8 means. I can explain why a SUM follows when a cell in its range changes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**The total in B9 is 46. Thursday's rainfall in B5 was recorded as 0, but the gauge was found to have been blocked and the right amount is 6. You change B5 to 6. What does B9 show?**

☐ 6

☐ 40

☐ 46

☐ 52

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 52. SUM adds up every cell from B2 to B8 again whenever one of them changes: 46 + 6 = 52.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: write a SUM


:::keep-together

### Writing =SUM(B2:B8)

1. $\texttt{=SUM(} \ldots \texttt{)}$ — Start with =, then the name of the function and a bracket.
2. $\texttt{B2:B8}$ — The range: from the first cell to the last, with a colon between them.
3. $0 + 12 + 4 + 0 + 7 + 20 + 3 = 46$ — SUM adds up the numbers in B2 to B8.
4. $\texttt{B5} \text{ becomes } 6 \to 52$ — Change a cell in the range and the total works itself out again.

Now: what does the colon do?

**What does B2:B8 mean in =SUM(B2:B8)?**

☐ Every cell from B2 down to B8

☐ B2 divided by B8

☐ B2 take away B8

☐ Only B2 and B8

:::


:::teacher-note

**Answer:** Every cell from B2 down to B8

A range names a block of cells by its two ends. B2:B8 is B2, B3, B4, and so on down to B8.

:::


:::keep-together

### Find the mistake

**Sam's total shows 3, but the week had much more rain. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has a week of rainfall in B2 to B8, Monday to Sunday.
 2  Sam types =SUM(B2,B8) into B9, to add up the week.
 3  B9 shows 3.
 4  The week had lots of rain, so 3 cannot be the total.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: =SUM(B2,B8) adds only the two cells named, B2 and B8: 0 + 3 = 3. A colon, =SUM(B2:B8), adds every cell between them.

:::


:::keep-together

### A heading in the range

**Sam's other formula is =SUM(B1:B8), and B1 holds the heading Rainfall (mm). What does it show?**

☐ The same total as =SUM(B2:B8)

☐ The total plus 1

☐ 0

☐ An error

:::


:::teacher-note

**Answer:** The same total as =SUM(B2:B8)

SUM only adds numbers. Words in the range are left out, so the heading does no harm.

:::


:::typical

## Vary: change the range


**A shorter range.** 

**Choose the formula.** 

**Copy it across.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Total the weeks


:::keep-together

### What does it add up to?

**B9 holds =SUM(B2:B8) and shows 46. You change Sunday's rainfall in B8 from 3 to 10. What does B9 show now?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 53

Sunday went up by 7, so the total goes up by 7: 46 + 7 = 53.

:::


## Make: your own week

Change one of your days. Does the total follow?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have SUM. You can type the range or drag across the cells with the mouse after the bracket. There is also an AutoSum button (a Greek capital sigma, Σ) that writes a SUM for the cells above or to the left of the selected cell. If your total looks too small, check the range has the first and last cells you meant.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**B2 to B6 hold 2, 4, 6, 8 and 10. What does =SUM(B2:B6) show?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 30.

:::

