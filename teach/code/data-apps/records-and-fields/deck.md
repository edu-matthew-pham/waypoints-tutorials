---
marp: true
theme: default
html: true
---

# Records and fields

Data apps · Tables and records

<!-- Speaker note: Students read fields of records: ClickedItem.title for a Now playing line, LoopItem.length inside For each row to total the lengths (an accumulator), and a variable holding a whole row to find the longest song (a running maximum). The Check traces the total and finds Nib resetting it inside the loop. Make it yours: the average with count(), and the shortest song. About 60 minutes (Try 5 min · Build 1–3 30 min · Check 10 min · Make it yours 15 min). -->

---

## Today

- I can read one field of a row with a dot, such as ClickedItem.title or LoopItem.length.
- I can add up a field of every row with For each row and a running total.
- I can find the row with the biggest value by keeping the best one so far.

<!-- Speaker note: Before class: These are the first named algorithms of the course: the **accumulator** (running total) and the **running maximum** (best so far). Name them as algorithm ideas, not App Builder features: they come back in Python and spreadsheets. A variable can hold one whole row: Set variable longest to item(Songs, 1), then longest.title. While the app runs, the sidebar shows it as { title: ..., artist: ..., length: ... }. A sub-event with no condition always runs; put it after the loop to show the result. Teacher: Before Build 2 (whole class): add up 3, 5, 4, 2 aloud, saying the running total after each. That's the loop. Teacher: Build 3: one student reads the lengths aloud, another holds up the longest so far and swaps it when a longer one comes. Teacher: Check: trace the total in a table on the board: row, length, total after. -->

---

## Why it matters

> A music app tells you the playlist's total time and its longest track. Somewhere, a loop goes through every song and keeps a running total.

<!-- Speaker note: A table is a list of **records**. Today you'll read the fields of one record: - `ClickedItem.title` is the title of the row that was clicked. - `item(Songs, 2).artist` is the artist of row 2. - Inside **For each row in table**, `LoopItem` is the row this time round, so `LoopItem.length` is that song's length. Then you'll use two common patterns: a **running total** (add each song's length) and a **best so far** (keep the longest song seen). ![The playlist app with a table of four songs, a Now playing line, and buttons Total length and Longest song with their answers beside them.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A music app says your playlist is 14 minutes long, and shows its longest song. How might it work those out?**

- What would you do, one song at a time, to get the total?
- How would you keep track of the longest so far?

<!-- Speaker note: A running total and a best so far: two patterns that come back in every language. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Click a song, then the two buttons. On the left, *total* and *longest* show their values now.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-2#step-2)

<!-- Speaker note: 1. Add an event: **An item in SongTable is clicked**. 2. Add the action **NowText**, **Set NowText text to** `"Now playing: " & ClickedItem.title & " by " & ClickedItem.artist` 3. Run it and click a few songs. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Say the running total <span style="font-size:.6em;color:#64748b">(3 min)</span>

Read the lengths 3, 5, 4, 2 aloud. After each, the class says the total so far: 3, 8, 12, 14. Then do it again, holding up the longest so far.

<!-- Speaker note: Where does the total start, and when? That's the slip Nib makes in the Check. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-3#step-3)

<!-- Speaker note: The variable *total* is made for you. 1. Add an event: **TotalButton is clicked** → **Set variable total to** `0`. 2. Give it a **sub-event** (the event's ⋯ menu, **Add a sub-event**). Its condition: **Tables**, **For each row in table** *Songs*. Its action: **Add** `LoopItem.length` **to variable** *total*. 3. Add a second sub-event below it, with **no condition** and the action **Set TotalText text to** `"Total: " & total & " min"`. It runs after the loop has finished. 4. Run it. Check the answer by adding up the lengths yourself. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-4#step-4)

<!-- Speaker note: A variable can hold a whole row. *longest* will hold the longest song found so far. 1. Add an event: **LongestButton is clicked** → **Set variable longest to** `item(Songs, 1)` (the first song is the best so far, to begin with). 2. Add a sub-event: **For each row in table** *Songs*, and a second condition **Compare** `LoopItem.length` **>** `longest.length`. Its action: **Set variable longest to** `LoopItem`. 3. Add a sub-event with no condition: **Set LongestText text to** `"Longest: " & longest.title` 4. Run it. Then add a song longer than all the others, and try again. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Trace the total

**Songs has lengths 3, 5, 4, 2 in that order. Halfway through the Total length event, after the second row, what is total?**

- 3
- 5
- 8
- 14

* Answer: 8

<!-- Speaker note: total starts at 0. Row 1 adds 3 (total 3), row 2 adds 5 (total 8). Rows 3 and 4 bring it to 14. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's Total length always shows the last song's length. Click the line where Nib goes wrong.**

```
 1  Nib's event: when TotalButton is clicked.
 2  Its sub-event: For each row in table Songs.
 3  The sub-event's first action: Set variable total to 0.
 4  Its second action: Add LoopItem.length to variable total.
 5  After the loop, Nib shows total. With lengths 3, 5, 4, 2 it says 2.
```

* Answer: line 3

<!-- Speaker note: Line 3: Set total to 0 sits inside the For each row sub-event, so it runs once per row and wipes the total each time round. Starting the total belongs on the parent event, before the loop. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: average and shortest



- **The average:** `count(Songs)` is how many rows there are. Change TotalText's text to also show `round(total / count(Songs))`, such as `"Total: " & total & " min, average " & r
- **The shortest song:** There's a *Shortest song* button, a *ShortestText* and a variable *shortest*. Build it like the longest song. Which one thing changes?

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/records-and-fields/?full=step-6#step-6)

<!-- Speaker note: What this step is for: The average reuses the total with count(), and the shortest song flips one comparison in the running-maximum pattern, so both test the patterns rather than the steps. For students who need more support: Build the total together, saying each step aloud; pairs do the longest song. For early finishers: Show how many songs are longer than 3 minutes (a count with a condition). The hard part, on purpose: Where each part sits: start the total on the parent event, add inside the loop, show it in a sub-event after the loop. The order of sub-events matters, and the actions of an event run before its sub-events. When students get stuck: The total is only the last song's length. Ask: Where does total go back to 0? Fix: Set total to 0 on the parent event, not inside the For each row sub-event. / TotalText shows 0. Ask: Does the sub-event that sets the text come after the loop? Fix: Put the no-condition sub-event below the For each row sub-event. / Longest shows nothing or an error about a field. Ask: What does longest hold before the loop starts? Fix: Start it with Set variable longest to item(Songs, 1), so longest.length exists. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A table Scores has a field points. Write the three parts of an event that adds up every row's points into a variable sum.**

* Set sum to 0 on the event; a sub-event For each row in table Scores that adds LoopItem.points to sum; then a sub-event after it that shows sum.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Saving between visits. -->
