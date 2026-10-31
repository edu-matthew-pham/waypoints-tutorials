---
marp: true
theme: default
html: true
---

# A formula keeps up

Working with data · Cells and formulas

<!-- Speaker note: Students learn that a spreadsheet cell has a name, that a cell starting with = is a formula that works its answer out from other cells by name, and that it works it out again when those cells change. They write growth formulas for a Year 7 bean-plant sheet and repeat the idea in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 8 min · Make and own app 12 min). -->

---

## Today

- I can name a cell by its column letter and row number.
- I can write a formula that starts with = and uses cell names.
- I can explain why a formula keeps up when a cell changes and a typed answer does not.

<!-- Speaker note: Before class: Do the Try board yourself: change B2, then click D2 and read the bar above the sheet. The one idea: a formula uses cells' names, not their numbers, so the answer follows the cells. A number typed in as the answer does not. The sheet on the page is a small teaching model with only what every spreadsheet shares: names, numbers, text, formulas that start with =, and the operators + - * /. It is not Excel or Sheets, and nothing here depends on either. The last step asks students to do the same in the app your school uses. It works the same in Excel (desktop or web), Google Sheets and Numbers. Where they differ: Enter moves down in all of them, and Google Sheets or Excel may offer a pop-up of function names as students type; they can ignore it for now. Years 6–8: the data is a plant-growth table like one in Year 7 science. Use your own class data if you have it, and have students type their own measurements in the last step. Teacher: Try: ask why D2 changed when B2 was the cell they typed in. Teacher: Worked example: ask which part of =C2-B2 is the = and which part is the names. Say the formula aloud: take B2 from C2. Teacher: Own app: walk round. The common slip is a missing =, which shows the formula as words. -->

---

## Why it matters

> A scientist measures a bean plant on day 1 and on day 4, then works out how much it grew. Then she finds she wrote down the day 1 height wrong. Does she have to redo every sum?

<!-- Speaker note: A spreadsheet is a grid of **cells**. Every cell has a name made from its column letter and its row number, so the cell in column C, row 2 is **C2**. Cells can hold words, numbers or formulas. Here is part of a Year 7 science sheet. Bean A was 3 cm tall on day 1 and 11 cm tall on day 4 (every height here is in cm). Cell D2 holds a formula that finds the growth. | | A | B | C | D | |---|---|---|---|---| | **1** | Plant | Day 1 | Day 4 | Growth | | **2** | Bean A | 3 | 11 | `=C2-B2` | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You work out the growth on a calculator and type 8 in the sheet. Your friend types a formula. Whose sheet is better, and when would you find out?**

- What happens to each sheet if you find the Day 1 height was wrong?
- Which is quicker if there are 30 plants?

<!-- Speaker note: The typed answer is fine until something changes, and then it is silently wrong. The formula follows. The rule students should leave with: if the answer comes from other cells, make it a formula. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**D2 holds the formula =C2-B2, so it shows 8. The scientist finds she measured wrong on day 1 and changes B2 from 3 to 5. What does D2 show now?**

- 6
- 16
- =C2-B2
- 8

<!-- Speaker note: What happens: 6. The formula takes whatever is in C2 and B2 now: 11 - 5 = 6. It works its answer out again every time a cell it uses changes. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 8 think D2 only shows what it showed before. Ask what 'formula' might mean. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change one number <span style="font-size:.6em;color:#64748b">(3 min)</span>

Write 3 and 11 on the board, with D2 = C2 − B2 = 8. Change the 3 to a 5. Ask the class what D2 shows now, then compare it with what a sheet that only remembered 8 would show.

<!-- Speaker note: 6, not 8. The point is that the formula works the answer out again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fa-formula-keeps-up%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Day+1%0Acell+C1%3A+Day+4%0Acell+D1%3A+Growth%0Acell+A2%3A+Bean+A%0Acell+B2%3A+3%0Acell+C2%3A+11%0Acell+D2%3A+%3DC2-B2%0Aedit%3A+B2%3AC2%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/a-formula-keeps-up/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Click D2 again. The bar shows `=C2-B2` even though the cell shows 6. A cell shows its **result**, and the bar shows what it **holds**. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 6. The formula takes whatever is in C2 and B2 now: 11 - 5 = 6. It works its answer out again every time a cell it uses changes.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Writing =C2-B2

Now: what does the = do?

$$\texttt{=C2-B2}$$

1) $\texttt{C2} \to 11$ — Use the name of the cell that holds Day 4, not the number 11.
2) $\texttt{B2} \to 3$ — Use the name of the cell that holds Day 1, not the number 3.
3) $\texttt{C2-B2} = 11 - 3 = 8$ — The spreadsheet looks up what the names hold, works out the sum and shows 8.
4) $\texttt{B2} \text{ becomes } 5 \to 11 - 5 = 6$ — Change a cell and the formula works its answer out again.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write =C2-B2 and say "Start with =, so the spreadsheet knows this is a formula." Line 1: write C2 11 and say "Use the name of the cell that holds Day 4, not the number 11." Line 2: write B2 3 and say "Use the name of the cell that holds Day 1, not the number 3." Line 3: write C2-B2 = 11 - 3 = 8 and say "The spreadsheet looks up what the names hold, works out the sum and shows 8." Line 4: write B2 becomes 5 11 - 5 = 6 and say "Change a cell and the formula works its answer out again." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Writing =C2-B2

**What does the = at the start of =C2-B2 tell the spreadsheet?**

- Make the cell bold
- Work this out from the cells named
- This is a word, not a number
- Add C2 to B2

* Answer: Work this out from the cells named

<!-- Speaker note: A cell that starts with = is a formula. The spreadsheet works out the answer from the cells named and shows it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's growth stopped being right after the day 1 height changed. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has Bean A's Day 1 height (3) in B2 and Day 4 height (11) in C2.
 2  Sam wants D2 to show how much the bean grew.
 3  Sam types 8 into D2, because 11 - 3 is 8.
 4  Later Sam finds the Day 1 height was 5, and changes B2 to 5.
 5  D2 still shows 8, but the bean grew 6.
```

* Answer: line 3

<!-- Speaker note: Line 3: Sam worked out 8 and typed it. It is only a number, so the sheet cannot know it came from B2 and C2. A formula =C2-B2 would have followed the change. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Cell names

**Which cell is in column D, row 3?**

- 3D
- D3
- D-3
- C4

* Answer: D3

<!-- Speaker note: Column letter first, then row number: D3. The headings at the top and side of the sheet show them. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Formula or typed number?

**A sheet has the total of five test marks in G2. The marks are in B2 to F2. A student edits B2. Which G2 stays right?**

- A formula that adds B2 to F2
- A typed total
- Either one
- Neither

* Answer: A formula that adds B2 to F2

<!-- Speaker note: Only the formula follows the change in B2. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the cells, change the formula



- **Change a cell:** 
- **A different operation:** 
- **Add the heights:** 

<!-- Speaker note: What this step is for: Each task changes a cell or the operation: a new Day 4 height, a different operation, then choosing the formula for a new job. For students who need more support: A card: A cell's name is its column letter then its row number. Start a formula with =. Use cell names, not the numbers in them. For early finishers: Write one formula in E2 that shows how many times taller Bean A is on day 4 than on day 1. Which operator do you need? What if B2 were empty? The hard part, on purpose: Typing the answer instead of the formula. A student who types 8 in D2 gets a correct-looking sheet, so nothing tells them it is wrong until a cell changes. Have them change B2 and watch. When students get stuck: A student types the answer into D2 (Sam's mistake). Ask: Change B2. What happens to D2? Which cell would know about the change? Fix: Delete it and type =C2-B2: use the names so the sheet can follow. / A student writes C2-B2 without the = and sees the words C2-B2. Ask: How does the sheet know this is a sum and not a word? Fix: Start every formula with =. / A student writes the cell name the wrong way round (2C, 3D). Ask: Look at the headings. What comes first, the letter or the number? Fix: Column letter first, then row number: D3. / A student's formula shows an error such as #NAME? or #REF!. Ask: Read the message under the sheet. What does it say went wrong? Fix: Check the names are real cells and the spelling is right. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Write the formulas

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fa-formula-keeps-up%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Day+1%0Acell+C1%3A+Day+4%0Acell+D1%3A+Growth%0Acell+A2%3A+Bean+A%0Acell+B2%3A+3%0Acell+C2%3A+11%0Acell+D2%3A+%3DC2-B2%0Acell+A3%3A+Bean+B%0Acell+B3%3A+2%0Acell+C3%3A+11%0Acell+A4%3A+Bean+C%0Acell+B4%3A+4%0Acell+C4%3A+10%0Aedit%3A+D3%3AD4%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/a-formula-keeps-up/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing two formulas on a sheet, and telling a formula from a typed answer. -->

<!-- Speaker note: Teacher: students often write =C3-B3 for D4 by copying. Ask which row Bean C is in. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which keeps up?

**Which of these cells will keep giving the right growth if the Day 1 height changes?**

- Both do
- A cell holding 8
- Neither does
- A cell holding =C2-B2

* Answer: A cell holding =C2-B2

<!-- Speaker note: Only the formula uses the cells' names, so it works its answer out again when they change. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: your own sheet

Change one of your Day 1 heights. Does the growth follow?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/a-formula-keeps-up/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Building a small sheet with its own measurements and formulas has students use the move on their own data. Hints, in order: Type a Day 1 height in B2 and a Day 4 height in C2, then do the same for Beans B and C. Any numbers will do. / In D2 type =C2-B2, then write the same kind of formula in D3 and D4, using that row's cells. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Which cells should be formulas? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Look at your sheet. Which cells did you type, and which hold formulas? Why?

<!-- Speaker note: Measurements are typed (they are the data). Anything worked out from them is a formula. Take a few examples. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and other spreadsheet apps all use the same cell names and start formulas with =. If your formula shows as words instead of a number, check that you typed the = at the start.

<!-- Speaker note: What this step is for: Doing the same in Excel or Sheets shows that the idea is the same in every spreadsheet, and gets students used to the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**B2 holds 4, C2 holds 9 and D2 holds =C2-B2. You change B2 to 6. What does D2 show?**

* 3. The formula works out 9 - 6 again.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: functions that work on a whole column (SUM and AVERAGE). Years 6–8: the same sheet can record real measurements from a science investigation. Digital Technologies › Data representation covers how data is stored; this course is about using it. -->
