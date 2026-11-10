---
marp: true
theme: default
html: true
---

# Add up a column

Working with data · Summing up

<!-- Speaker note: Students learn that SUM adds up a range of cells, that a colon in a range means every cell from one end to the other, and that the total follows when any cell in the range changes. They total a week of weather-station rainfall, then two weeks, then a week of their own numbers, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 10 min · Make and own app 10 min). -->

---

## Today

- I can write a SUM formula for a range of cells.
- I can say what the colon in B2:B8 means.
- I can explain why a SUM follows when a cell in its range changes.

<!-- Speaker note: Before class: Do the Try board yourself: change B5 and click B9 to read the formula. The one idea: SUM is a named formula that works on a range, and a range is a block of cells named by its two ends. Students do not need to know other functions yet. The sheet on the page ignores words in a range (as Excel and Sheets do), so a heading in the range does no harm. A word typed where a number is expected (a typed 'five') is not added, which is a good thing to notice with students. Real tools: Excel and Sheets have an AutoSum button (Σ) that guesses the range. Encourage students to check the range it picks, and to treat it as a first guess. Teacher: Try: ask which cell they changed and which cell moved. Teacher: Worked example: say the range aloud (from B2 down to B8) and ask what a comma would mean. Teacher: Own app: walk round. Common slips: forgetting the =, or a range that stops a row short. -->

---

## Why it matters

> A weather station records the rainfall every day. At the end of the week someone has to add up all seven numbers. A sheet can do it, but only if you tell it which cells.

<!-- Speaker note: Here is a week of rainfall from a school weather station, in millimetres. The total is in B9. It uses **SUM**, a function that adds up a range of cells. | | A | B | |---|---|---| | **1** | Day | Rainfall (mm) | | **2** | Monday | 0 | | **3** | Tuesday | 12 | | **…** | … | … | | **8** | Sunday | 3 | | **9** | Total | `=SUM(B2:B8)` | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Two students total a week of rainfall. One types =SUM(B2:B8). The other types =B2+B3+B4+B5+B6+B7+B8. Both get 46. Whose formula is better when the weather station records a second week?**

- How long is each formula for 30 days?
- What if a day's reading is added in a new row?

<!-- Speaker note: Both are right today. SUM is shorter, easier to check, and makes it easy to read the range. For a longer period the long one is slow and easy to get wrong. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The total in B9 is 46. Thursday's rainfall in B5 was recorded as 0, but the gauge was found to have been blocked and the right amount is 6. You change B5 to 6. What does B9 show?**

- 6
- 40
- 46
- 52

<!-- Speaker note: What happens: 52. SUM adds up every cell from B2 to B8 again whenever one of them changes: 46 + 6 = 52. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 46 think SUM remembers the old total. Ask when the sheet does the adding. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Add by hand first <span style="font-size:.6em;color:#64748b">(3 min)</span>

Write the seven rainfall numbers on the board and have students add them in their heads or on paper. Then reveal =SUM(B2:B8) and 46.

<!-- Speaker note: 46. The formula does the same adding, but again whenever a number changes. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fadd-up-a-column%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Day%0Acell+B1%3A+Rainfall+%28mm%29%0Acell+A2%3A+Monday%0Acell+B2%3A+0%0Acell+A3%3A+Tuesday%0Acell+B3%3A+12%0Acell+A4%3A+Wednesday%0Acell+B4%3A+4%0Acell+A5%3A+Thursday%0Acell+B5%3A+0%0Acell+A6%3A+Friday%0Acell+B6%3A+7%0Acell+A7%3A+Saturday%0Acell+B7%3A+20%0Acell+A8%3A+Sunday%0Acell+B8%3A+3%0Acell+A9%3A+Total%0Acell+B9%3A+%3DSUM%28B2%3AB8%29%0Aedit%3A+B2%3AB8%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/add-up-a-column/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? You did not change the formula in B9. You changed one number in its range, and the total followed. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 52. SUM adds up every cell from B2 to B8 again whenever one of them changes: 46 + 6 = 52.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Writing =SUM(B2:B8)

Now: what does the colon do?

$$\texttt{=SUM(} \ldots \texttt{)}$$

1) $\texttt{B2:B8}$ — The range: from the first cell to the last, with a colon between them.
2) $0 + 12 + 4 + 0 + 7 + 20 + 3 = 46$ — SUM adds up the numbers in B2 to B8.
3) $\texttt{B5} \text{ becomes } 6 \to 52$ — Change a cell in the range and the total works itself out again.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write =SUM( ) and say "Start with =, then the name of the function and a bracket." Line 1: write B2:B8 and say "The range: from the first cell to the last, with a colon between them." Line 2: write 0 + 12 + 4 + 0 + 7 + 20 + 3 = 46 and say "SUM adds up the numbers in B2 to B8." Line 3: write B5 becomes 6 52 and say "Change a cell in the range and the total works itself out again." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Writing =SUM(B2:B8)

**What does B2:B8 mean in =SUM(B2:B8)?**

- Every cell from B2 down to B8
- B2 divided by B8
- B2 take away B8
- Only B2 and B8

* Answer: Every cell from B2 down to B8

<!-- Speaker note: A range names a block of cells by its two ends. B2:B8 is B2, B3, B4, and so on down to B8. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's total shows 3, but the week had much more rain. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has a week of rainfall in B2 to B8, Monday to Sunday.
 2  Sam types =SUM(B2,B8) into B9, to add up the week.
 3  B9 shows 3.
 4  The week had lots of rain, so 3 cannot be the total.
```

* Answer: line 2

<!-- Speaker note: Line 2: =SUM(B2,B8) adds only the two cells named, B2 and B8: 0 + 3 = 3. A colon, =SUM(B2:B8), adds every cell between them. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A heading in the range

**Sam's other formula is =SUM(B1:B8), and B1 holds the heading Rainfall (mm). What does it show?**

- The same total as =SUM(B2:B8)
- The total plus 1
- 0
- An error

* Answer: The same total as =SUM(B2:B8)

<!-- Speaker note: SUM only adds numbers. Words in the range are left out, so the heading does no harm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Comma or colon?

**Which formula adds up B2, B3, B4, B5 and B6?**

- =SUM(B2:B6)
- =SUM(B2,B6)
- =SUM(B2;B6)
- =B2:B6

* Answer: =SUM(B2:B6)

<!-- Speaker note: The colon names the block B2 to B6. The comma names only B2 and B6. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the range



- **A shorter range:** 
- **Choose the formula:** 
- **Copy it across:** 

<!-- Speaker note: What this step is for: Each task changes the range: a shorter one, a different list of cells, then the same SUM copied to a new column. For students who need more support: A card: =SUM(first cell:last cell). The colon means every cell from the first to the last. For early finishers: Make a cell that shows what share of the week's rain fell on Saturday. Which formula do you need, and which parts of it would have to stay put if you copied it down? The hard part, on purpose: Telling a comma from a colon. =SUM(B2,B8) looks reasonable and shows a number, so nothing says it is wrong. Ask students to add up the cells by hand and compare. When students get stuck: A student writes =SUM(B2,B8) (Sam's mistake) and gets a small total. Ask: Which cells did the formula add? Add them yourself. Fix: Use a colon: =SUM(B2:B8) adds every cell from B2 to B8. / A student's total is too small because the range stops at B7. Ask: Which day is in B8? Is it in your range? Fix: Extend the range to the last day. / A student types the total as a number. Ask: Change a day. Does the total follow? Fix: Replace the number with =SUM(B2:B8). / A student's total shows a formula as words. Ask: How does the sheet know it is a formula? Fix: Start with =. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Total the weeks

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fadd-up-a-column%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Day%0Acell+B1%3A+Week+1+%28mm%29%0Acell+C1%3A+Week+2+%28mm%29%0Acell+A2%3A+Monday%0Acell+B2%3A+0%0Acell+C2%3A+5%0Acell+A3%3A+Tuesday%0Acell+B3%3A+12%0Acell+C3%3A+0%0Acell+A4%3A+Wednesday%0Acell+B4%3A+4%0Acell+C4%3A+0%0Acell+A5%3A+Thursday%0Acell+B5%3A+0%0Acell+C5%3A+9%0Acell+A6%3A+Friday%0Acell+B6%3A+7%0Acell+C6%3A+14%0Acell+A7%3A+Saturday%0Acell+B7%3A+20%0Acell+C7%3A+2%0Acell+A8%3A+Sunday%0Acell+B8%3A+3%0Acell+C8%3A+1%0Acell+A9%3A+Total%0Acell+A11%3A+Both+weeks%0Aedit%3A+B9%3AC9%2C+B11%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/add-up-a-column/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing a SUM over a column, copying it to a second column, and then one SUM over a block of both. -->

<!-- Speaker note: Teacher: ask what block B2:C8 holds, and why one SUM can cover two columns. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What does it add up to?

**B9 holds =SUM(B2:B8) and shows 46. You change Sunday's rainfall in B8 from 3 to 10. What does B9 show now?**

* Answer: 53

<!-- Speaker note: Sunday went up by 7, so the total goes up by 7: 46 + 7 = 53. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: your own week

Change one of your days. Does the total follow?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/add-up-a-column/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Recording a week of your own numbers and totalling them has students use SUM on their own data. Hints, in order: Type how many minutes you read each day (any numbers will do) in B2 to B8. / In B9 write =SUM(B2:B8). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What else could SUM add up? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Think of other numbers in your subjects that get added up: steps in a week, cost of a camp, points in a game. What would the range be?

<!-- Speaker note: Take a few examples and ask what the first and last cells would be. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have SUM. You can type the range or drag across the cells with the mouse after the bracket. There is also an AutoSum button (a Greek capital sigma, Σ) that writes a SUM for the cells above or to the left of the selected cell. If your total looks too small, check the range has the first and last cells you meant.

<!-- Speaker note: What this step is for: Adding up a column in Excel or Sheets shows the same function in the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**B2 to B6 hold 2, 4, 6, 8 and 10. What does =SUM(B2:B6) show?**

* 30.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: Typical, smallest and biggest (AVERAGE, MIN and MAX). Science and geography: rainfall, water use, mass and distance are all totalled this way. Use your own class data if you have it. -->
