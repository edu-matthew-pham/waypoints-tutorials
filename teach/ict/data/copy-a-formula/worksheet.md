---
title: "Copy a formula"
subtitle: "Working with data · Cells and formulas · Lesson 2"
---

# Copy a formula

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The scientist measured thirty bean plants. She wrote the growth formula for the first one. Does she have to type it thirty times?


:::teacher-note

**In one sentence:** Students learn that copying a formula moves its cell names with it, so one formula can be copied or filled down a whole column and each row works on its own cells. They fill a growth column for five Year 7 beans, add a growth per day column, and repeat it in the spreadsheet app the school uses.

**Students should be able to say:** I can copy a formula to another cell and say what happens to its cell names. I can fill a formula down a column so each row uses its own cells. I can tell a copied formula from the same text typed in every row.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**D2 holds =C2-B2. You copy D2 and paste it into D3, one row down. What does D3 hold?**

☐ =C3-B3

☐ 8

☐ =C2-B2

☐ =C4-B4

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** =C3-B3. The paste moves one row down, so every row number in the formula goes up by one. D3 then works out 11 - 2 = 9, Bean B's own growth.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: one rule, every row


:::keep-together

### Where does the name go?

1. $\texttt{D2: =C2-B2}$ — C2 is one cell to the left of D2, and B2 is two cells to the left.
2. $\texttt{D3} \to \texttt{=C3-B3}$ — Pasted one row down, the same pattern points at C3 and B3.
3. $\texttt{D4} \to \texttt{=C4-B4}$ — One more row down, one more row number.
4. $\texttt{D6} \to \texttt{=C6-B6}$ — The pattern is the same in every row, so D6 uses row 6.
5. $\texttt{D6} = 9 - 3 = 6 \text{ (Bean E's own heights)}$ — Each row works out its own bean's growth.

Now: which cell does D5 use?

**D2 holds =C2-B2. You paste it into D5. What does D5 hold?**

☐ =D5-C5

☐ =C2-B2

☐ =C3-B3

☐ =C5-B5

:::


:::teacher-note

**Answer:** =C5-B5

D5 is three rows below D2, so each row number goes up by three: =C5-B5.

:::


:::keep-together

### Find the mistake

**Sam's growth column shows 8 for every bean, but Bean C only grew 6. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has five beans in rows 2 to 6, with the Day 1 height in column B and the Day 4 height in column C.
 2  Sam types =C2-B2 into D2, and it shows 8 for Bean A.
 3  For D3, Sam types =C2-B2 again, because it is the same sum.
 4  Sam types =C2-B2 into D4, D5 and D6 as well.
 5  Every growth shows 8, but Bean C only grew 6.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: Sam typed =C2-B2 again for D3. Typing the same text keeps it on row 2. Copying D2 into D3 would have moved the names to row 3.

:::


:::keep-together

### One rule

**The formula in D2 is =C2-B2. Which words describe what it does, whichever row it is in?**

☐ Take the cell two to the left away from the cell one to the left

☐ Take 3 away from 11

☐ Take B2 away from C2, always

☐ Take the cell above away from the cell below

:::


:::teacher-note

**Answer:** Take the cell two to the left away from the cell one to the left

Copying keeps the pattern: the cells one and two to the left, in the same row.

:::


:::typical

## Vary: change the paste


**Paste further down.** 

**Paste across.** 

**The quick way.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Fill the column


:::keep-together

### Which cells change?

**D2 to D6 each hold a growth formula made by filling down. You change Bean D's Day 1 height in B5. Which cells change?**

☐ All of D2 to D6

☐ Only D5

☐ Only B5

☐ None of them

:::


:::teacher-note

**Answer:** Only D5

D5's formula uses B5 and C5. The other rows use their own cells, so only D5 changes.

:::


## Make: your own sheet

Change one of your Day 1 heights. Which two answers follow?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all copy formulas this way. To fill down, select the cell and the cells below it, then press Ctrl+D (Cmd+D on a Mac) or drag the small square at the corner of the cell downwards. To copy and paste, use Ctrl+C and Ctrl+V. Click a pasted cell to check its formula used its own row.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**D2 holds =C2-B2. You paste it into D8. What does D8 hold?**

{{lines-3}}

:::


:::teacher-note

**Answer:** =C8-B8. D8 is six rows below D2, so each row number goes up by six.

:::

