---
title: "A cell that stays put"
subtitle: "Working with data · Cells and formulas · Lesson 3"
---

# A cell that stays put

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Weight is mass times g. A sheet works out four weights on Earth. A teacher says: now do the Moon, where g is a lot smaller. Must she change every formula?


:::teacher-note

**In one sentence:** Students find that copying a formula moves every cell name, including one that should stay put, and fix a shared cell with $. They work out weights from mass and g on a Year 7 science sheet, change g once to move from Earth to the Moon, and repeat it in the spreadsheet app the school uses.

**Students should be able to say:** I can say which cell in a formula should stay put when it is copied. I can fix a cell name with $ and fill the formula down. I can change one shared cell and see every answer follow.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**C2 holds =B2*B7, which is 5 × 10 = 50. You copy C2 and paste it into C3, one row down. B3 holds 12. What does C3 show?**

☐ 120

☐ 0

☐ An error

☐ 50

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 0. The pasted formula is =B3*B8. Both names moved down a row, so it multiplies the bike's mass by B8, which is empty. An empty cell counts as 0.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: fix the cell


:::keep-together

### Fixing B7

1. $\texttt{C2: =B2*\$B\$7}$ — B2 can move with the row, but \texttt{\$B\$7} is fixed: it stays on B7.
2. $\texttt{C3} \to \texttt{=B3*\$B\$7}$ — Pasted one row down, B2 moves to B3 and \texttt{\$B\$7} stays.
3. $\texttt{C3} = 12 \times 10 = 120$ — The bike's weight, using the same g.
4. $\texttt{B7} \text{ becomes } 1.6 \to 12 \times 1.6 = 19.2$ — Change g once and every weight follows.

Now: what does the $ do?

**What does the $ in $B$7 do?**

☐ Makes the cell bold

☐ Keeps the name B7 from moving when the formula is copied

☐ Makes the answer a price in dollars

☐ Adds 7 to B

:::


:::teacher-note

**Answer:** Keeps the name B7 from moving when the formula is copied

A $ in front of a column letter or a row number fixes it. $B$7 fixes both, so the name stays on B7 wherever the formula is copied.

:::


:::keep-together

### Find the line

**Sam's weights show 0 for everything but the backpack. Click the line where Sam should have done something different.**

```
 1  Sam's sheet has the mass of four objects in B2 to B5, and g (10) in B7.
 2  Sam types =B2*B7 into C2, and it shows 50 for the backpack.
 3  Sam fills C2 down to C5.
 4  C3, C4 and C5 all show 0, though the bike, dog and student have mass.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Sam wrote =B2*B7, but the formula was going to be copied down. B7 should be $B$7 so that it stays put. Filling down was fine.

:::


:::keep-together

### Typed inside

**Sam types =B2*10 in C2 and fills down, with g typed inside each formula. What goes wrong when Sam wants to try the Moon's g?**

☐ The sheet shows an error

☐ Every formula has to be rewritten

☐ Nothing, the formulas follow

☐ Only C2 has to be rewritten

:::


:::teacher-note

**Answer:** Every formula has to be rewritten

The 10 sits inside each formula, so each would have to be changed. A g in its own cell, fixed with $, is changed once.

:::


:::typical

## Vary: change what is fixed


**Change g.** 

**Paste across and down.** 

**Choose the formula.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Weigh the objects


:::keep-together

### Which cell?

**g is in B7 and a weight formula in C2 is filled down to C5. You want to change g. Which cell do you edit?**

☐ C2 to C5

☐ B7 only

☐ B2 to B5

☐ All of them

:::


:::teacher-note

**Answer:** B7 only

g is in one cell, B7. The formulas all use it, so changing it changes every weight.

:::


## Make: Earth and Moon

Change the g for the Moon. Which column follows, and which does not?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all use the dollar sign. You can type the $ yourself, or while the cursor is on a cell name in a formula, press F4 (Fn and F4 on some laptops) to put the $ signs in. Press it again to cycle through the ways of fixing the name. If a weight shows 0, click it and check the cell for g did not move.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**C2 holds =B2*$B$7. You paste it into C6. What does C6 hold?**

{{lines-3}}

:::


:::teacher-note

**Answer:** =B6*$B$7. B2 moves down four rows to B6, and $B$7 stays put.

:::

