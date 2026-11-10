---
marp: true
theme: default
html: true
---

# Copy a formula

Working with data · Cells and formulas

<!-- Speaker note: Students learn that copying a formula moves its cell names with it, so one formula can be copied or filled down a whole column and each row works on its own cells. They fill a growth column for five Year 7 beans, add a growth per day column, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 8 min · Make and own app 12 min). -->

---

## Today

- I can copy a formula to another cell and say what happens to its cell names.
- I can fill a formula down a column so each row uses its own cells.
- I can tell a copied formula from the same text typed in every row.

<!-- Speaker note: Before class: Do the Try board yourself: copy D2, paste it into D3 and click D3 to read its formula. The one idea: a formula's cell names are places relative to the cell it is in ('one to the left'), so when it is copied they move with it. Spreadsheet people call this a relative reference; students only need the idea that a copy moves its names. The sheet on the page has Copy, Paste and Fill down buttons, and Ctrl+C and Ctrl+V work on a selected cell. The real tools work the same way. In Excel and Sheets, Ctrl+D fills down a selection, and the small square at the corner of a selected cell can be dragged down (or double-clicked in Excel and Sheets to fill as far as the data goes). The next lesson, A cell that stays put, shows what to do when a copy must not move one of the names. Teacher: Try: ask which row D3's formula uses, and whose bean that is. Teacher: Worked example: say the rule aloud (the cell one to the left take away the cell two to the left) and ask where it points in row 5. Teacher: Own app: walk round. The common slips are pasting into the wrong cell and dragging the fill handle too far. -->

---

## Why it matters

> The scientist measured thirty bean plants. She wrote the growth formula for the first one. Does she have to type it thirty times?

<!-- Speaker note: In the last lesson you wrote a growth formula for one bean. Here are five beans, all measured the same way (every height is in cm). Only D2 has a formula so far. | | A | B | C | D | |---|---|---|---|---| | **1** | Plant | Day 1 | Day 4 | Growth | | **2** | Bean A | 3 | 11 | `=C2-B2` | | **3** | Bean B | 2 | 11 | | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A class measured thirty beans. One student typed 30 formulas. Another typed one and filled down. They find the measurements for one bean were wrong. Who has more to fix?**

- What does each student change when one measurement is wrong?
- What if the class adds another ten beans?

<!-- Speaker note: Both fix the one measurement and the formula follows. The difference is writing and checking: filling down is quicker and gives the same rule on every row. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**D2 holds =C2-B2. You copy D2 and paste it into D3, one row down. What does D3 hold?**

- =C3-B3
- 8
- =C2-B2
- =C4-B4

<!-- Speaker note: What happens: =C3-B3. The paste moves one row down, so every row number in the formula goes up by one. D3 then works out 11 - 2 = 9, Bean B's own growth. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose =C2-B2 think a copy is exact. Ask what D3 would then show, and whose growth that is. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Point at the cells <span style="font-size:.6em;color:#64748b">(3 min)</span>

Draw D2 with =C2-B2 on the board. Ask students to point (in the air) to the cells it uses, one left and two left. Move to D3 and ask which cells it would use.

<!-- Speaker note: One left and two left again, which are C3 and B3. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fcopy-a-formula%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Day+1%0Acell+C1%3A+Day+4%0Acell+D1%3A+Growth%0Acell+A2%3A+Bean+A%0Acell+B2%3A+3%0Acell+C2%3A+11%0Acell+D2%3A+%3DC2-B2%0Acell+A3%3A+Bean+B%0Acell+B3%3A+2%0Acell+C3%3A+11%0Atable%3A+A1%3AD3%0Atools%3A+fill%0Aedit%3A+D3%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/copy-a-formula/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Click D3 and read the bar: `=C3-B3`. The pasted formula is not the same text as D2's. It is the same **rule**. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* =C3-B3. The paste moves one row down, so every row number in the formula goes up by one. D3 then works out 11 - 2 = 9, Bean B's own growth.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Where does the name go?

Now: which cell does D5 use?

$$\texttt{D2: =C2-B2}$$

1) $\texttt{D3} \to \texttt{=C3-B3}$ — Pasted one row down, the same pattern points at C3 and B3.
2) $\texttt{D4} \to \texttt{=C4-B4}$ — One more row down, one more row number.
3) $\texttt{D6} \to \texttt{=C6-B6}$ — The pattern is the same in every row, so D6 uses row 6.
4) $\texttt{D6} = 9 - 3 = 6 \text{ (Bean E's own heights)}$ — Each row works out its own bean's growth.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write D2: =C2-B2 and say "C2 is one cell to the left of D2, and B2 is two cells to the left." Line 1: write D3 =C3-B3 and say "Pasted one row down, the same pattern points at C3 and B3." Line 2: write D4 =C4-B4 and say "One more row down, one more row number." Line 3: write D6 =C6-B6 and say "The pattern is the same in every row, so D6 uses row 6." Line 4: write D6 = 9 - 3 = 6 (Bean E's own heights) and say "Each row works out its own bean's growth." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where does the name go?

**D2 holds =C2-B2. You paste it into D5. What does D5 hold?**

- =D5-C5
- =C2-B2
- =C3-B3
- =C5-B5

* Answer: =C5-B5

<!-- Speaker note: D5 is three rows below D2, so each row number goes up by three: =C5-B5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's growth column shows 8 for every bean, but Bean C only grew 6. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has five beans in rows 2 to 6, with the Day 1 height in column B and the Day 4 height in column C.
 2  Sam types =C2-B2 into D2, and it shows 8 for Bean A.
 3  For D3, Sam types =C2-B2 again, because it is the same sum.
 4  Sam types =C2-B2 into D4, D5 and D6 as well.
 5  Every growth shows 8, but Bean C only grew 6.
```

* Answer: line 3

<!-- Speaker note: Line 3: Sam typed =C2-B2 again for D3. Typing the same text keeps it on row 2. Copying D2 into D3 would have moved the names to row 3. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## One rule

**The formula in D2 is =C2-B2. Which words describe what it does, whichever row it is in?**

- Take the cell two to the left away from the cell one to the left
- Take 3 away from 11
- Take B2 away from C2, always
- Take the cell above away from the cell below

* Answer: Take the cell two to the left away from the cell one to the left

<!-- Speaker note: Copying keeps the pattern: the cells one and two to the left, in the same row. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What does D4 hold?

**D2 holds =C2-B2. You paste it into D4. What does D4 hold?**

- =C4-B4
- =C2-B2
- =C3-B3
- =D4-C4

* Answer: =C4-B4

<!-- Speaker note: D4 is two rows below D2, so each row number goes up by two. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the paste



- **Paste further down:** 
- **Paste across:** 
- **The quick way:** 

<!-- Speaker note: What this step is for: Each task changes where the formula is pasted: further down, one column across, then a quicker way to fill a column. For students who need more support: A card: A copied formula moves its cell names by as much as the copy moves. D2 to D3 is one row down, so every row number goes up by one. For early finishers: Write one formula in F2 that shows whether Bean A grew more than Bean B (is D2 minus D3 positive?). What happens to it if you paste it into F3? The hard part, on purpose: Believing a copy is the same text. Students expect =C2-B2 to appear in D3, and the Predict shows the other answer. Have them click D3 and read the bar before you explain. When students get stuck: A student types =C2-B2 into every row (Sam's mistake) and every growth is 8. Ask: Click D4 and read the formula. Which bean's row does it use? Fix: Copy D2 and paste it into D4, or select D2 and fill down. The names move for you. / A student copies the number 8 across instead of the formula. Ask: Click the pasted cell. Does the bar show a formula or a number? Fix: Copy the cell that holds the formula =C2-B2, not a typed number. / A student pastes the formula and the answer is wrong because the formula was pasted into the wrong column. Ask: Which two cells does it use now? Are they the Day 1 and Day 4 cells? Fix: Paste into the Growth column, so the formula has Day 4 one to the left and Day 1 two to the left. / A student fills too far down and gets a 0 or an error in an empty row. Ask: Which rows have a bean in them? Fix: Fill only as far as the last plant. The empty rows are not wrong, just not needed. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Fill the column

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fcopy-a-formula%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Day+1%0Acell+C1%3A+Day+4%0Acell+D1%3A+Growth%0Acell+A2%3A+Bean+A%0Acell+B2%3A+3%0Acell+C2%3A+11%0Acell+D2%3A+%3DC2-B2%0Acell+A3%3A+Bean+B%0Acell+B3%3A+2%0Acell+C3%3A+11%0Acell+A4%3A+Bean+C%0Acell+B4%3A+4%0Acell+C4%3A+10%0Acell+A5%3A+Bean+D%0Acell+B5%3A+5%0Acell+C5%3A+13%0Acell+A6%3A+Bean+E%0Acell+B6%3A+3%0Acell+C6%3A+9%0Atable%3A+A1%3AD6%0Atools%3A+fill%0Aedit%3A+B2%3AC6%2C+D3%3AD6%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/copy-a-formula/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Filling a whole column from one formula, and telling a copied rule from five typed copies. -->

<!-- Speaker note: Teacher: ask who finds Fill down quickest and why it is less likely to slip than typing. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which cells change?

**D2 to D6 each hold a growth formula made by filling down. You change Bean D's Day 1 height in B5. Which cells change?**

- All of D2 to D6
- Only D5
- Only B5
- None of them

* Answer: Only D5

<!-- Speaker note: D5's formula uses B5 and C5. The other rows use their own cells, so only D5 changes. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: your own sheet

Change one of your Day 1 heights. Which two answers follow?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/copy-a-formula/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Writing one formula and filling it down twice, once for growth and once for growth per day, has students use the move on their own data. Hints, in order: Type any Day 1 and Day 4 heights for the five beans. Then write =C2-B2 in D2 and fill down. / For the last column, write =D2/3 in E2 (growth divided by the 3 days between measurements) and fill down. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Why not type it each time? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Three rows or three hundred? Talk with a partner: when is typing each formula still a good idea?

<!-- Speaker note: Hardly ever, but a good reason is a one-off formula that is different from its neighbours. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all copy formulas this way. To fill down, select the cell and the cells below it, then press Ctrl+D (Cmd+D on a Mac) or drag the small square at the corner of the cell downwards. To copy and paste, use Ctrl+C and Ctrl+V. Click a pasted cell to check its formula used its own row.

<!-- Speaker note: What this step is for: Copying a formula down in Excel or Sheets shows the same rule at work in the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**D2 holds =C2-B2. You paste it into D8. What does D8 hold?**

* =C8-B8. D8 is six rows below D2, so each row number goes up by six.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: A cell that stays put (keeping one cell fixed while a formula is copied). Years 6–8: the beans can be any measurements from a science investigation. Digital Technologies › Data representation covers how numbers are stored; this course is about using them. -->
