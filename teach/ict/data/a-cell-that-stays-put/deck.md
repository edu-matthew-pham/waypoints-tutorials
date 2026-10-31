---
marp: true
theme: default
html: true
---

# A cell that stays put

Working with data · Cells and formulas

<!-- Speaker note: Students find that copying a formula moves every cell name, including one that should stay put, and fix a shared cell with $. They work out weights from mass and g on a Year 7 science sheet, change g once to move from Earth to the Moon, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 10 min · Make and own app 10 min). -->

---

## Today

- I can say which cell in a formula should stay put when it is copied.
- I can fix a cell name with $ and fill the formula down.
- I can change one shared cell and see every answer follow.

<!-- Speaker note: Before class: Do the Try board yourself: paste C2 into C3 and read the formula in the bar. The one idea: a copy moves every name, so a name that has to stay (a shared value such as g, a rate, a price) gets a $ in front of its column letter and row number. Spreadsheet people call this an absolute reference; students need the idea 'fix it with $'. Science link: weight (N) = mass (kg) × g, with g about 10 N/kg on Earth (a round value used in school science) and about 1.6 N/kg on the Moon. Use your class's values if they differ. The page's sheet has no formula that needs $ typed for you: students type the $ themselves. In Excel and Sheets, F4 on a selected name toggles the $ signs; the sheet on the page just uses typing. Teacher: Try: ask what B8 holds and why the answer is 0, not an error. Teacher: Worked example: ask which part of =B2*$B$7 moves when pasted down and which part stays. Teacher: Own app: walk round. Common slips: $ only on one half of the name, or g typed inside the formula. -->

---

## Why it matters

> Weight is mass times g. A sheet works out four weights on Earth. A teacher says: now do the Moon, where g is a lot smaller. Must she change every formula?

<!-- Speaker note: Weight is a force: **weight (N) = mass (kg) × g**. On Earth, g is about 10 newtons for every kilogram. The sheet below keeps g in its own cell, B7, so it is written once. C2 works out the weight of the backpack from its mass in B2 and g in B7. | | A | B | C | |---|---|---|---| | **1** | Object | Mass (kg) | Weight (N) | | **2** | Backpack | 5 | `=B2*B7` | | **3** | Bike | 12 | | | **7** | g (N per kg) | 10 | | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A student writes the g value, 10, inside every weight formula. Another keeps g in one cell and fixes it with $. The teacher asks for the Moon's weights. Who finishes first, and who is more likely to be right?**

- How many changes does each student make?
- What if they miss one formula?

<!-- Speaker note: One change against one per row. A missed formula gives a row that is still on Earth's g and looks fine, which is the dangerous part. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**C2 holds =B2*B7, which is 5 × 10 = 50. You copy C2 and paste it into C3, one row down. B3 holds 12. What does C3 show?**

- 120
- 0
- An error
- 50

<!-- Speaker note: What happens: 0. The pasted formula is =B3*B8. Both names moved down a row, so it multiplies the bike's mass by B8, which is empty. An empty cell counts as 0. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 120 expect the paste to move only the mass. Ask which cell the bike's weight would use for g. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Which name should stay? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Write =B2*B7 on the board with B2 as the mass and B7 as g. Ask students which of the two names should move when the formula goes down a row and which should stay.

<!-- Speaker note: B2 moves (each row has its own mass). B7 stays. This is the whole idea. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fa-cell-that-stays-put%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Object%0Acell+B1%3A+Mass+%28kg%29%0Acell+C1%3A+Weight+%28N%29%0Acell+A2%3A+Backpack%0Acell+B2%3A+5%0Acell+C2%3A+%3DB2*B7%0Acell+A3%3A+Bike%0Acell+B3%3A+12%0Acell+A4%3A+Dog%0Acell+B4%3A+20%0Acell+A5%3A+Student%0Acell+B5%3A+50%0Acell+A7%3A+g+%28N+per+kg%29%0Acell+B7%3A+10%0Atable%3A+A1%3AC5%0Atools%3A+fill%0Aedit%3A+C3%0Arows%3A+12%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/a-cell-that-stays-put/?full=step-2#step-2)

<!-- Speaker note: The bike does not weigh nothing. The paste moved **both** names, but only the mass (B2 to B3) should have moved. The g cell should stay put. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 0. The pasted formula is =B3*B8. Both names moved down a row, so it multiplies the bike's mass by B8, which is empty. An empty cell counts as 0.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Fixing B7

Now: what does the $ do?

$$\texttt{C2: =B2*\$B\$7}$$

1) $\texttt{C3} \to \texttt{=B3*\$B\$7}$ — Pasted one row down, B2 moves to B3 and \texttt{\$B\$7} stays.
2) $\texttt{C3} = 12 \times 10 = 120$ — The bike's weight, using the same g.
3) $\texttt{B7} \text{ becomes } 1.6 \to 12 \times 1.6 = 19.2$ — Change g once and every weight follows.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write C2: =B2*\$B\$7 and say "B2 can move with the row, but \7 is fixed: it stays on B7." Line 1: write C3 =B3*\$B\$7 and say "Pasted one row down, B2 moves to B3 and \7 stays." Line 2: write C3 = 12 × 10 = 120 and say "The bike's weight, using the same g." Line 3: write B7 becomes 1.6 12 × 1.6 = 19.2 and say "Change g once and every weight follows." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Fixing B7

**What does the $ in $B$7 do?**

- Makes the cell bold
- Keeps the name B7 from moving when the formula is copied
- Makes the answer a price in dollars
- Adds 7 to B

* Answer: Keeps the name B7 from moving when the formula is copied

<!-- Speaker note: A $ in front of a column letter or a row number fixes it. $B$7 fixes both, so the name stays on B7 wherever the formula is copied. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the line

**Sam's weights show 0 for everything but the backpack. Click the line where Sam should have done something different.**

```
 1  Sam's sheet has the mass of four objects in B2 to B5, and g (10) in B7.
 2  Sam types =B2*B7 into C2, and it shows 50 for the backpack.
 3  Sam fills C2 down to C5.
 4  C3, C4 and C5 all show 0, though the bike, dog and student have mass.
```

* Answer: line 2

<!-- Speaker note: Line 2: Sam wrote =B2*B7, but the formula was going to be copied down. B7 should be $B$7 so that it stays put. Filling down was fine. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Typed inside

**Sam types =B2*10 in C2 and fills down, with g typed inside each formula. What goes wrong when Sam wants to try the Moon's g?**

- The sheet shows an error
- Every formula has to be rewritten
- Nothing, the formulas follow
- Only C2 has to be rewritten

* Answer: Every formula has to be rewritten

<!-- Speaker note: The 10 sits inside each formula, so each would have to be changed. A g in its own cell, fixed with $, is changed once. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What does the $ do?

**Which formula in C2 can be filled down so every row uses g from B7?**

- =B2*$B$7
- =B2*B7
- =B2*B$7 typed as B7
- =B2*7

* Answer: =B2*$B$7

<!-- Speaker note: $B$7 stays on B7 as the formula moves down. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change what is fixed



- **Change g:** 
- **Paste across and down:** 
- **Choose the formula:** 

<!-- Speaker note: What this step is for: Each task changes the shared cell, then where the formula is pasted, then which of four written forms is right. For students who need more support: A card: Copying moves every name. Put $ in front of the letter and the number of the cell that must stay: $B$7. For early finishers: Add a third column for Mars, where g is about 3.7 N per kg. What do you change, and what stays the same? The hard part, on purpose: Seeing why a copy goes wrong. Students think the formula is broken, not that every name moved. Have them click the 0 cell and read which cell it used for g. When students get stuck: A student writes =B2*B7 and fills down (Sam's mistake) and gets zeros. Ask: Click C3. Which cell does it use for g? Fix: Put $ in front of the B and the 7 in the first formula, then fill down again. / A student types =B2*10, so g is inside every formula. Ask: How many formulas would you change to try the Moon? Fix: Put g in its own cell and use $B$7 in the formula. / A student writes =B2*$B7 or =B2*B$7 (half fixed). Ask: When you fill down, which part of B7 still moves? Fix: Fix both: $B$7 stays on B7 wherever it is pasted. / A student changes B7 and nothing changes. Ask: Does the weight cell hold a formula or a typed number? Fix: Replace typed numbers with the formula and fill down. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Weigh the objects

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fa-cell-that-stays-put%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Object%0Acell+B1%3A+Mass+%28kg%29%0Acell+C1%3A+Weight+%28N%29%0Acell+A2%3A+Backpack%0Acell+B2%3A+5%0Acell+A3%3A+Bike%0Acell+B3%3A+12%0Acell+A4%3A+Dog%0Acell+B4%3A+20%0Acell+A5%3A+Student%0Acell+B5%3A+50%0Acell+A7%3A+g+%28N+per+kg%29%0Acell+B7%3A+10%0Atable%3A+A1%3AC5%0Atools%3A+fill%0Aedit%3A+C2%3AC5%2C+B7%0Arows%3A+12%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/a-cell-that-stays-put/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing a formula that fixes the shared cell, filling it down, then changing the one cell that holds g. -->

<!-- Speaker note: Teacher: students who forget the $ get 0 below the first row. Ask them to click C3 and say which cell it used for g. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which cell?

**g is in B7 and a weight formula in C2 is filled down to C5. You want to change g. Which cell do you edit?**

- C2 to C5
- B7 only
- B2 to B5
- All of them

* Answer: B7 only

<!-- Speaker note: g is in one cell, B7. The formulas all use it, so changing it changes every weight. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Earth and Moon

Change the g for the Moon. Which column follows, and which does not?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/a-cell-that-stays-put/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Building two weight columns from two shared cells has students fix a different cell in each and use the move on their own data. Hints, in order: In C2 write =B2*$B$7 and fill down. In D2 write the same kind of formula that uses $B$8, then fill down. / Type your own masses for the four objects in B2 to B5. Any numbers will do. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What else is shared? <span style="font-size:.6em;color:#64748b">(4 min)</span>

A shared number might be g, a price, an exchange rate or a class size. Think of one from another subject where a sheet would keep it in its own cell.

<!-- Speaker note: Take a few: a tax or GST rate, the cost per kilowatt-hour, a scale in a map, a conversion factor. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all use the dollar sign. You can type the $ yourself, or while the cursor is on a cell name in a formula, press F4 (Fn and F4 on some laptops) to put the $ signs in. Press it again to cycle through the ways of fixing the name. If a weight shows 0, click it and check the cell for g did not move.

<!-- Speaker note: What this step is for: Fixing a cell in Excel or Sheets shows the same idea in the real tool, with its own shortcut. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**C2 holds =B2*$B$7. You paste it into C6. What does C6 hold?**

* =B6*$B$7. B2 moves down four rows to B6, and $B$7 stays put.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: Add up a column (SUM and ranges). Science: Year 7 and 8 forces and weight use the same formula. Mass and weight are different things (kg and N), so the sheet keeps them in separate columns. -->
