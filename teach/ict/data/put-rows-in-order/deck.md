---
marp: true
theme: default
html: true
---

# Put the rows in order

Working with data · Show the data

<!-- Speaker note: Students sort a table by one column and filter it to the rows that match a rule, learning that sorting moves whole rows, filtering only hides, and both work on the whole table. They answer questions about eight animals from Year 7 classification, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 10 min · Worked example 10 min · Vary 7 min · Practise 10 min · Make and own app 8 min). -->

---

## Today

- I can sort a table by one column, low to high or high to low.
- I can filter a table to the rows that match a rule.
- I can say what happens to the rows that do not match, and why a whole table is selected.

<!-- Speaker note: Before class: Do the Try board yourself: sort by D, high to low, then read across a row. The one idea: sorting reorders whole rows by one column; filtering hides the rows that do not match. Neither changes the data. Students do not need the Data menu names yet. The sheet on the page always sorts the whole table below its heading row, as a real app does when the whole table is selected. The mistake in Sam's story is what happens in a real app when only one column is selected. Filtering here is 'show rows where a column is, is not, is more than or is less than a value'. In Excel and Sheets, filters are drop-down menus on the heading row; the idea is the same. Be careful with sorting a table that has formulas in it: a formula that uses another row (such as =B3-B2) can give a different answer after a sort. The sheet moves a formula with its row, so a formula that uses its own row keeps working. That is worth saying out loud in a real app. Teacher: Try: ask what the Tortoise's group and mass are after the sort. Teacher: Worked example: ask what Sam would see if only the lifespans moved, and why that is worse than a mistake you can see. Teacher: Own app: walk round. Common slips: only one column selected, and a header row sorted into the data. -->

---

## Why it matters

> A table lists eight animals in the order someone wrote them down. Which lives longest? Which are birds? You could read the whole table, or you could ask the sheet.

<!-- Speaker note: This table of animals is in the order it was typed in, not in any helpful order. Mass is in kg and lifespan is a rough figure in years. Below the table are controls to **sort** it and to **filter** it. | | A | B | C | D | |---|---|---|---|---| | **1** | Animal | Group | Mass (kg) | Lifespan (years) | | **2** | Mouse | Mammal | 0.02 | 2 | | **3** | Eagle | Bird | 5 | 25 | | **4** | Goldfish | Fish | 0.1 | 10 | | **…** | … | … | … | … | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A student wants to know which bird lives longest. Should they sort first or filter first? Does the order matter?**

- What does each step show on its own?
- What would the table look like after doing them in the other order?

<!-- Speaker note: For this question the order does not change the result, because a filter hides rows and a sort orders whatever is there. It matters for readability: filter first so there are fewer rows to read. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You sort the whole table by the Lifespan column, from high to low. Which animal is in row 2, just under the headings?**

- Tortoise
- Eagle
- Elephant
- Mouse

<!-- Speaker note: What happens: Tortoise. It has the longest lifespan, 80 years, so high to low puts its row first. The whole row moves, so the Tortoise keeps its own group and mass. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose Elephant think 'longest' means 'biggest'. Ask which column was sorted. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Order yourselves <span style="font-size:.6em;color:#64748b">(3 min)</span>

Ask five students to hold up a card with their own birthday month number. Sort them from low to high without separating anyone from their card.

<!-- Speaker note: The cards move with the students, as whole rows do. That is the point of sorting by one column. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fput-rows-in-order%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Animal%0Acell+B1%3A+Group%0Acell+C1%3A+Mass+%28kg%29%0Acell+D1%3A+Lifespan+%28years%29%0Acell+A2%3A+Mouse%0Acell+B2%3A+Mammal%0Acell+C2%3A+0.02%0Acell+D2%3A+2%0Acell+A3%3A+Eagle%0Acell+B3%3A+Bird%0Acell+C3%3A+5%0Acell+D3%3A+25%0Acell+A4%3A+Goldfish%0Acell+B4%3A+Fish%0Acell+C4%3A+0.1%0Acell+D4%3A+10%0Acell+A5%3A+Cat%0Acell+B5%3A+Mammal%0Acell+C5%3A+4%0Acell+D5%3A+15%0Acell+A6%3A+Frog%0Acell+B6%3A+Amphibian%0Acell+C6%3A+0.03%0Acell+D6%3A+8%0Acell+A7%3A+Tortoise%0Acell+B7%3A+Reptile%0Acell+C7%3A+50%0Acell+D7%3A+80%0Acell+A8%3A+Elephant%0Acell+B8%3A+Mammal%0Acell+C8%3A+5000%0Acell+D8%3A+60%0Acell+A9%3A+Penguin%0Acell+B9%3A+Bird%0Acell+C9%3A+20%0Acell+D9%3A+20%0Atable%3A+A1%3AD9%0Atools%3A+sort+filter%0Aedit%3A+none%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/put-rows-in-order/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Read across the Tortoise's row: it still says Reptile and 50 kg. Sorting moved the **whole row**, not just the lifespans. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Tortoise. It has the longest lifespan, 80 years, so high to low puts its row first. The whole row moves, so the Tortoise keeps its own group and mass.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Sort and filter

Now: what happens to the rows?

$$\text{Sort by Lifespan, high to low}$$

1) $\text{Tortoise: Reptile, 50, 80} \text{ moves to row 2}$ — The whole row moves, so each animal keeps its own numbers.
2) $\text{Filter: Group is Bird}$ — The sheet hides every row that does not match.
3) $\text{Showing 2 of 8 rows}$ — Eagle and Penguin are shown. The other six are only hidden.
4) $\text{Show all}$ — The hidden rows come back. Nothing was lost.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write Sort by Lifespan, high to low and say "The sheet puts the rows in order of the lifespan column, biggest first." Line 1: write Tortoise: Reptile, 50, 80 moves to row 2 and say "The whole row moves, so each animal keeps its own numbers." Line 2: write Filter: Group is Bird and say "The sheet hides every row that does not match." Line 3: write Showing 2 of 8 rows and say "Eagle and Penguin are shown. The other six are only hidden." Line 4: write Show all and say "The hidden rows come back. Nothing was lost." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Sort and filter

**What does sorting the table by Lifespan do to the rows?**

- Changes the lifespans to be in order
- Deletes the rows that are out of order
- Moves whole rows so each animal keeps its own numbers
- Moves only the lifespans

* Answer: Moves whole rows so each animal keeps its own numbers

<!-- Speaker note: Sorting reorders whole rows by one column. Each row keeps its own cells. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**After Sam's sort, the Tortoise shows a lifespan of 2 years. Click the line where Sam first goes wrong.**

```
 1  Sam's table has the animals in column A, their groups in B, their masses in C and their lifespans in D.
 2  Sam selects only the lifespan numbers, D2 to D9.
 3  Sam sorts the selection from high to low.
 4  The Tortoise's row now says Reptile, 50 kg and 2 years.
```

* Answer: line 2

<!-- Speaker note: Line 2: Sam selected only the lifespan numbers. Only that column was sorted, so the animals stayed where they were and each got a different lifespan. Sorting needs the whole table selected. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hidden, not deleted

**You filter the table to show only the Birds. What has happened to the other rows?**

- They move to the bottom
- They are deleted
- Their cells are cleared
- They are hidden, not deleted

* Answer: They are hidden, not deleted

<!-- Speaker note: A filter hides the rows that do not match. The data is all still there, and Show all brings every row back. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Sort or filter?

**You want to see only the animals that live more than 20 years. Which do you use?**

- Filter
- Sort
- Both
- Neither

* Answer: Filter

<!-- Speaker note: A filter hides the rows that do not match the rule. A sort would only change the order. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the question



- **Heaviest first:** 
- **Longer than 20:** 
- **Filter, then sort:** 

<!-- Speaker note: What this step is for: Each task changes the column, the rule or the order, then combines a filter with a sort. For students who need more support: A card: Sort reorders whole rows by one column. Filter hides the rows that do not match. Select the whole table first. For early finishers: How would you find the three heaviest birds if there were many more rows? Which tool do you use first, sort or filter, and does the order matter? The hard part, on purpose: Believing a sort only moves the column you clicked in. In real apps, selecting just one column can sort only that column. Let students read across a row after a sort to check the row still makes sense. When students get stuck: A student sorts only one column (Sam's mistake) and the rows no longer make sense. Ask: Read across one row. Does it still describe one animal? Fix: Undo, then select the whole table, headings included, and sort again. / A student sorts by the wrong column. Ask: Which column holds the thing you are ordering by? Fix: Choose that column in 'Sort by'. / A student thinks filtering deleted rows. Ask: What does the note 'Showing 2 of 8 rows' tell you? Fix: Choose Show all. The rows come back. / A student's filter shows no rows. Ask: Does the word you typed match the cells, including spelling? Fix: Check the spelling, or choose a number rule such as is more than. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Ask the table

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fput-rows-in-order%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Animal%0Acell+B1%3A+Group%0Acell+C1%3A+Mass+%28kg%29%0Acell+D1%3A+Lifespan+%28years%29%0Acell+A2%3A+Mouse%0Acell+B2%3A+Mammal%0Acell+C2%3A+0.02%0Acell+D2%3A+2%0Acell+A3%3A+Eagle%0Acell+B3%3A+Bird%0Acell+C3%3A+5%0Acell+D3%3A+25%0Acell+A4%3A+Goldfish%0Acell+B4%3A+Fish%0Acell+C4%3A+0.1%0Acell+D4%3A+10%0Acell+A5%3A+Cat%0Acell+B5%3A+Mammal%0Acell+C5%3A+4%0Acell+D5%3A+15%0Acell+A6%3A+Frog%0Acell+B6%3A+Amphibian%0Acell+C6%3A+0.03%0Acell+D6%3A+8%0Acell+A7%3A+Tortoise%0Acell+B7%3A+Reptile%0Acell+C7%3A+50%0Acell+D7%3A+80%0Acell+A8%3A+Elephant%0Acell+B8%3A+Mammal%0Acell+C8%3A+5000%0Acell+D8%3A+60%0Acell+A9%3A+Penguin%0Acell+B9%3A+Bird%0Acell+C9%3A+20%0Acell+D9%3A+20%0Atable%3A+A1%3AD9%0Atools%3A+sort+filter%0Aedit%3A+none%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/put-rows-in-order/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Using sort, then filter, then both together to answer a question about the table. -->

<!-- Speaker note: Teacher: ask how many rows are shown, and where the others went. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where are the rows?

**You filter to show only Birds and the sheet says Showing 2 of 8 rows. Where are the other six rows?**

- Deleted
- Copied into a new sheet
- Moved to the bottom
- Still in the sheet, hidden

* Answer: Still in the sheet, hidden

<!-- Speaker note: Filtering only hides rows. Choose Show all and all eight are back. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: answer a question

Which bird is at the top? Write down the answer in your own words, and say which two steps found it.

[Open this step](https://tutorials.learningwaypoints.com/ict/data/put-rows-in-order/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Using a filter and a sort together to answer a question the student reads off the table is the move on their own question. Hints, in order: Filter the Group column for Bird. Then sort by Lifespan from high to low. Read the top row. / Two birds are shown, so the one at the top lives longest. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## A question for the data <span style="font-size:.6em;color:#64748b">(4 min)</span>

What other questions could the animal table answer with a sort or a filter? Which would need both?

<!-- Speaker note: Examples: the lightest reptile, the longest-lived mammal, the animals over 10 kg. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all sort and filter. Select the whole table, headings included, and find Sort and Filter under the Data menu. If the headings end up sorted with the data, tick the option that says your data has a header row. Hidden rows are not deleted: clear the filter to see them again.

<!-- Speaker note: What this step is for: Sorting and filtering in Excel or Sheets shows the same two moves in the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**You sort the animals by Mass from low to high. Which animal is in row 2? And if you then filter to Birds, how many rows can you see?**

* The Mouse (0.02 kg) is in row 2 after the sort. Filtering to Birds shows 2 rows, the Eagle and the Penguin.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: Choose a chart (column, line, scatter and pie). Science: classification (Year 7). Data check: lifespans and masses are rough figures for teaching. Use your own class data if you have it. -->
