---
title: "A formula keeps up"
subtitle: "Working with data · Cells and formulas · Lesson 1"
---

# A formula keeps up

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A scientist measures a bean plant on day 1 and on day 4, then works out how much it grew. Then she finds she wrote down the day 1 height wrong. Does she have to redo every sum?


:::teacher-note

**In one sentence:** Students learn that a spreadsheet cell has a name, that a cell starting with = is a formula that works its answer out from other cells by name, and that it works it out again when those cells change. They write growth formulas for a Year 7 bean-plant sheet and repeat the idea in the spreadsheet app the school uses.

**Students should be able to say:** I can name a cell by its column letter and row number. I can write a formula that starts with = and uses cell names. I can explain why a formula keeps up when a cell changes and a typed answer does not.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**D2 holds the formula =C2-B2, so it shows 8. The scientist finds she measured wrong on day 1 and changes B2 from 3 to 5. What does D2 show now?**

☐ 6

☐ 16

☐ =C2-B2

☐ 8

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 6. The formula takes whatever is in C2 and B2 now: 11 - 5 = 6. It works its answer out again every time a cell it uses changes.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: write a formula


:::keep-together

### Writing =C2-B2

1. $\texttt{=C2-B2}$ — Start with =, so the spreadsheet knows this is a formula.
2. $\texttt{C2} \to 11$ — Use the name of the cell that holds Day 4, not the number 11.
3. $\texttt{B2} \to 3$ — Use the name of the cell that holds Day 1, not the number 3.
4. $\texttt{C2-B2} = 11 - 3 = 8$ — The spreadsheet looks up what the names hold, works out the sum and shows 8.
5. $\texttt{B2} \text{ becomes } 5 \to 11 - 5 = 6$ — Change a cell and the formula works its answer out again.

Now: what does the = do?

**What does the = at the start of =C2-B2 tell the spreadsheet?**

☐ Make the cell bold

☐ Work this out from the cells named

☐ This is a word, not a number

☐ Add C2 to B2

:::


:::teacher-note

**Answer:** Work this out from the cells named

A cell that starts with = is a formula. The spreadsheet works out the answer from the cells named and shows it.

:::


:::keep-together

### Find the mistake

**Sam's growth stopped being right after the day 1 height changed. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has Bean A's Day 1 height (3) in B2 and Day 4 height (11) in C2.
 2  Sam wants D2 to show how much the bean grew.
 3  Sam types 8 into D2, because 11 - 3 is 8.
 4  Later Sam finds the Day 1 height was 5, and changes B2 to 5.
 5  D2 still shows 8, but the bean grew 6.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: Sam worked out 8 and typed it. It is only a number, so the sheet cannot know it came from B2 and C2. A formula =C2-B2 would have followed the change.

:::


:::keep-together

### Cell names

**Which cell is in column D, row 3?**

☐ 3D

☐ D3

☐ D-3

☐ C4

:::


:::teacher-note

**Answer:** D3

Column letter first, then row number: D3. The headings at the top and side of the sheet show them.

:::


:::typical

## Vary: change the cells, change the formula


**Change a cell.** 

**A different operation.** 

**Add the heights.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Write the formulas


:::keep-together

### Which keeps up?

**Which of these cells will keep giving the right growth if the Day 1 height changes?**

☐ Both do

☐ A cell holding 8

☐ Neither does

☐ A cell holding =C2-B2

:::


:::teacher-note

**Answer:** A cell holding =C2-B2

Only the formula uses the cells' names, so it works its answer out again when they change.

:::


## Make: your own sheet

Change one of your Day 1 heights. Does the growth follow?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and other spreadsheet apps all use the same cell names and start formulas with =. If your formula shows as words instead of a number, check that you typed the = at the start.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**B2 holds 4, C2 holds 9 and D2 holds =C2-B2. You change B2 to 6. What does D2 show?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 3. The formula works out 9 - 6 again.

:::

