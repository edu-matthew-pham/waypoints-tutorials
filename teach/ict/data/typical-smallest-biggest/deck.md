---
marp: true
theme: default
html: true
---

# Typical, smallest and biggest

Working with data · Summing up

<!-- Speaker note: Students use AVERAGE, MIN and MAX to summarise a column of measurements, see which summary moves when one number changes, and learn that a typed 0 counts but an empty cell does not. They summarise six Year 7 bean heights, then six arm spans of their own, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 10 min · Make and own app 10 min). -->

---

## Today

- I can use AVERAGE, MIN and MAX on a column of numbers.
- I can say what each one tells me and which one moves when one number changes.
- I can leave a missing measurement empty instead of typing 0.

<!-- Speaker note: Before class: Do the Try board yourself: change B5 and watch which of the three summaries moves. The one idea: a summary is a formula that works on a whole range, and different summaries answer different questions. AVERAGE says what is typical, MIN and MAX say how far the numbers reach. The AVERAGE here is the mean (total ÷ count). It is not the median or the mode. If a class has met those, ask which would not be pulled around by one very tall bean. The missing-measurement idea matters in real data: an empty cell is skipped by AVERAGE, MIN and MAX, but a typed 0 is a real value. The sheet on the page does the same as Excel and Sheets here. ROUND(x, 1) shows one decimal place. It changes the value held, not just the display; for display-only rounding, real tools have a number format, which is outside this course's core. Teacher: Try: ask which summary moved by a lot, a little or not at all, and why. Teacher: Worked example: ask which function they would use to catch a typing slip. Teacher: Own app: walk round. Common slips: a range that misses a row, or typing 0 for a missing value. -->

---

## Why it matters

> Six bean plants were measured on day 10. A scientist wants one number to say how tall a typical bean is. Which one, and what if one plant was not measured?

<!-- Speaker note: Six beans were measured on day 10, in cm. Under the heights, three functions work out a summary: **AVERAGE** (a typical height), **MIN** (the shortest) and **MAX** (the tallest). | | A | B | |---|---|---| | **1** | Plant | Height (cm) | | **2** | Bean A | 8.5 | | **…** | … | … | | **7** | Bean F | 9 | | **9** | Average | `=AVERAGE(B2:B7)` | | **10** | Shortest | `=MIN(B2:B7)` | | **11** | Tallest | `=MAX(B2:B7)` | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A farmer asks how tall your beans are. You could say the average, or the tallest. When would each answer be misleading?**

- What if one bean is much taller than the others?
- What if one bean did not grow?

<!-- Speaker note: Each summary hides something. The average is pulled by an extreme plant, and the tallest says nothing about the rest. Reporting two or three together (typical and spread) is more honest. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The six heights add up to 60 cm, so the average in B9 is 10. Bean D in B5 is re-measured and found to be 18 cm, not 12. What does B9 show now?**

- 10
- 11
- 12
- 18

<!-- Speaker note: What happens: 11. The total goes up by 6, to 66, and 66 ÷ 6 = 11. The average moves up by 1, not by 6, because the six plants share the change. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 12 think the average is the last number changed. Ask what the six plants share. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Guess the typical <span style="font-size:.6em;color:#64748b">(3 min)</span>

Show the six heights on the board (8.5, 10, 9.5, 12, 11, 9). Ask students to write down their guess for the typical height before any formula, then reveal 10.

<!-- Speaker note: Close guesses show students already have the idea. AVERAGE is the sheet's way of doing it every time. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Ftypical-smallest-biggest%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Height+%28cm%29%0Acell+A2%3A+Bean+A%0Acell+B2%3A+8.5%0Acell+A3%3A+Bean+B%0Acell+B3%3A+10%0Acell+A4%3A+Bean+C%0Acell+B4%3A+9.5%0Acell+A5%3A+Bean+D%0Acell+B5%3A+12%0Acell+A6%3A+Bean+E%0Acell+B6%3A+11%0Acell+A7%3A+Bean+F%0Acell+B7%3A+9%0Acell+A9%3A+Average%0Acell+B9%3A+%3DAVERAGE%28B2%3AB7%29%0Acell+A10%3A+Shortest%0Acell+B10%3A+%3DMIN%28B2%3AB7%29%0Acell+A11%3A+Tallest%0Acell+B11%3A+%3DMAX%28B2%3AB7%29%0Aedit%3A+B2%3AB7%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/typical-smallest-biggest/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? The Tallest moved by all 6 cm, the Average by 1 cm, and the Shortest not at all. Three different summaries, three different jobs. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 11. The total goes up by 6, to 66, and 66 ÷ 6 = 11. The average moves up by 1, not by 6, because the six plants share the change.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Three summaries

Now: what does AVERAGE work out?

$$\texttt{=AVERAGE(B2:B7)}$$

1) $60 \div 6 = 10$ — The average height is 10 cm.
2) $\texttt{=MIN(B2:B7)} = 8.5, \; \texttt{=MAX(B2:B7)} = 12$ — The shortest and the tallest.
3) $12 - 8.5 = 3.5$ — The spread is the gap between the biggest and smallest.
4) $\texttt{B5} \text{ becomes } 18 \to 66 \div 6 = 11$ — Change one height and the summaries work themselves out again.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write =AVERAGE(B2:B7) and say "Add the heights: 8.5 + 10 + 9.5 + 12 + 11 + 9 = 60. Divide by 6, because there are 6 numbers." Line 1: write 60 ÷ 6 = 10 and say "The average height is 10 cm." Line 2: write =MIN(B2:B7) = 8.5, =MAX(B2:B7) = 12 and say "The shortest and the tallest." Line 3: write 12 - 8.5 = 3.5 and say "The spread is the gap between the biggest and smallest." Line 4: write B5 becomes 18 66 ÷ 6 = 11 and say "Change one height and the summaries work themselves out again." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Three summaries

**What does =AVERAGE(B2:B7) work out?**

- The tallest minus the shortest
- The height that most plants have
- The height of the middle plant
- Adds the six heights and divides by six

* Answer: Adds the six heights and divides by six

<!-- Speaker note: AVERAGE is the total divided by how many numbers there are: 60 ÷ 6 = 10. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's average height is 8.2, but every plant that was measured is taller than 8.2. Click the line where Sam first goes wrong.**

```
 1  Sam's sheet has the heights of six beans in B2 to B7, measured on day 10.
 2  Bean E's pot was knocked over, so it was not measured.
 3  Sam types 0 into B6, so the cell is not empty.
 4  Sam writes =AVERAGE(B2:B7) in B9 and it shows 8.2.
 5  Every bean that was measured is taller than 8.2.
```

* Answer: line 3

<!-- Speaker note: Line 3: a 0 is a real number, so the sheet counts a plant of height 0 and the average drops. An empty cell is skipped, so Bean E should have been left empty. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How much taller?

**Which formula shows how much taller the tallest bean is than the shortest?**

- =MAX(B2:B7)+MIN(B2:B7)
- =MAX(B2:B7)-MIN(B2:B7)
- =AVERAGE(B2:B7)
- =MAX(B2:B7)/MIN(B2:B7)

* Answer: =MAX(B2:B7)-MIN(B2:B7)

<!-- Speaker note: Biggest minus smallest is the spread: 12 − 8.5 = 3.5 cm. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which function?

**Which function shows the smallest number in B2:B7?**

- MIN
- MAX
- AVERAGE
- SUM

* Answer: MIN

<!-- Speaker note: MIN is the smallest and MAX the biggest. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the data and the function



- **The spread:** 
- **Tidy the answer:** 
- **Spot the slip:** 

<!-- Speaker note: What this step is for: Each task changes the function used, the data in it, or the way the answer is shown. For students who need more support: A card: AVERAGE is the typical value, MIN is the smallest, MAX is the biggest. An empty cell is skipped; a 0 counts. For early finishers: Which would you trust more to tell a farmer how tall these beans are: the average or the tallest? What would make you change your mind? The hard part, on purpose: Choosing what to summarise. Students can all type =AVERAGE, but knowing what the average does and does not tell them takes time. Ask 'does the average tell you if one bean is very different from the rest?' When students get stuck: A student types 0 for a missing measurement (Sam's mistake). Ask: Does the sheet treat 0 and an empty cell the same? Fix: Delete the 0. An empty cell is skipped by AVERAGE. / A student writes =AVERAGE(B2:B6), a row short. Ask: Which plant is in B7? Is it in your range? Fix: Extend the range to B7. / A student writes =MAX(B2,B7) and gets the larger of two cells only. Ask: Does a comma cover the cells in between? Fix: Use a colon: =MAX(B2:B7). / A student swaps MIN and MAX. Ask: Which of your two answers should be bigger? Fix: MIN is the smallest, MAX the biggest. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Summarise three ways

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Ftypical-smallest-biggest%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Height+%28cm%29%0Acell+A2%3A+Bean+A%0Acell+B2%3A+8.5%0Acell+A3%3A+Bean+B%0Acell+B3%3A+10%0Acell+A4%3A+Bean+C%0Acell+B4%3A+9.5%0Acell+A5%3A+Bean+D%0Acell+B5%3A+12%0Acell+A6%3A+Bean+E%0Acell+B6%3A+11%0Acell+A7%3A+Bean+F%0Acell+B7%3A+9%0Acell+A9%3A+Average%0Acell+A10%3A+Shortest%0Acell+A11%3A+Tallest%0Aedit%3A+B9%3AB11%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/typical-smallest-biggest/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing the three summary formulas, and handling a plant that was not measured. -->

<!-- Speaker note: Teacher: ask what the average of five is if the sixth is left empty, and what it would be with a 0. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Spread

**Which pair of cells would tell you how spread out the heights are?**

- The average and the total
- The average only
- The tallest and the shortest
- The count of plants

* Answer: The tallest and the shortest

<!-- Speaker note: The gap between the biggest and smallest tells you how spread out the numbers are. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: your own measurements

Change one arm span to something very different. Which of the three moves most, and which not at all?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/typical-smallest-biggest/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Measuring six people's arm spans and summarising them has students use AVERAGE, MIN and MAX on their own data. Hints, in order: Type six arm spans in cm (any numbers will do, such as 150 or 162) in B2 to B7. / Write AVERAGE, MIN and MAX formulas in B9, B10 and B11 over B2:B7. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Missing or zero? <span style="font-size:.6em;color:#64748b">(4 min)</span>

A plant pot was knocked over so Bean E has no measurement. Should the cell be empty or 0? What does each do to the average?

<!-- Speaker note: Empty: the average is of the five that were measured. 0: a plant of 0 cm is counted, which is a lie. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have AVERAGE, MIN, MAX and ROUND with the same names. The average they give is the *mean*. If it looks too low, check for a typed 0 where a measurement is missing: leave the cell empty instead.

<!-- Speaker note: What this step is for: Summarising a column in Excel or Sheets shows the same three functions in the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Four heights are 6, 8, 10 and 12. What does =AVERAGE(B2:B5) show? And =MAX(B2:B5)-MIN(B2:B5)?**

* 9 for the average (36 ÷ 4) and 6 for the spread (12 − 6).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: Count and decide (COUNTIF and IF). Science: investigations often report an average of repeated measurements. Mathematics: the average here is the mean; Year 6–8 statistics also teaches median and mode. -->
