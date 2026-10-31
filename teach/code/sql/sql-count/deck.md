---
marp: true
theme: default
html: true
---

# Count and add up

SQL and databases · Summarise

<!-- Speaker note: Students summarise many rows into one value with COUNT, SUM, AVG and MAX, filtered by WHERE. About 25 minutes (Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min). -->

---

## Today

- I can count rows with COUNT(*).
- I can add up, average or find the biggest value in a column.
- I can use WHERE to choose which rows are summarised.

---

## Why it matters

> How many songs, how many plays, how long on average: the database can answer without showing you a single song.

<!-- Speaker note: So far a query gave back rows from the table. A **summary function** turns many rows into **one** value: `COUNT(*)` counts rows, `SUM(plays)` adds a column up, `AVG` averages it and `MAX` finds the biggest. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT COUNT(*)
FROM songs
WHERE genre = 'pop';
```

**Four songs are pop. What will this query show?**

- One row with the number 4
- Four rows, one for each pop song
- An error, because COUNT needs a column name
- One row with the first pop song

<!-- Speaker note: What happens: One row with the number 4. COUNT(*) counts the rows that pass WHERE, and the answer is a single value. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the four-rows option is the main slip, expecting a list. Ask how many values a count can be. -->

<style scoped>pre, marp-pre { font-size: 0.81em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* One row with the number 4. COUNT(*) counts the rows that pass WHERE, and the answer is a single value.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-count/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-count/?full=step-2#step-2)

<!-- Speaker note: Run it, then take off the `WHERE` line and run it again. | Part | What it does | |---|---| | `COUNT(*)` | Counts rows. The star means "whole rows" | | `WHERE genre = 'pop'` | Filters first, so only pop rows are counted | -->

<!-- Speaker note: Teacher: take off WHERE and run again so students see 15. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT SUM(plays)
FROM songs
WHERE genre = 'rock';
```

<!-- Speaker note: What this step is for: A summary function squashes the rows that pass WHERE into one value. WHERE decides which rows go in. -->

<!-- Speaker note: Teacher: MAX, SUM and COUNT answer different questions. Read each aloud as a question. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Add them up

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT SUM(plays)
FROM songs
WHERE genre = 'rock';
```

</div>
<div>

**Run the query. How many plays do the rock songs have in total?**

* Answer: 7900

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Pick the function

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT SUM(plays)
FROM songs
WHERE genre = 'rock';
```

</div>
<div>

**Which query gives the length of the longest song?**

- SELECT MAX(seconds) FROM songs;
- SELECT COUNT(seconds) FROM songs;
- SELECT seconds FROM songs MAX;

* Answer: SELECT MAX(seconds) FROM songs;

</div>
</div>

<!-- Speaker note: MAX(column) gives the biggest value in the column. -->

<style scoped>section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it counts the songs by Kito.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-count/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Keep COUNT(*) and change the test in WHERE. / You want WHERE artist = 'Kito'. For students who need more support: Give the whole query with the function name missing. For early finishers: Show the count and the average length in one query. The hard part, on purpose: Expecting a list back. Ask how many values a count can be. When students get stuck: A column name and COUNT(*) together give an odd result. Ask: Is the answer one value or a list? Fix: Summaries give one row. Mixing in a plain column needs GROUP BY, which is the next lesson. / COUNT(*) shows 15 when it should show fewer. Ask: Did the WHERE line stay? Fix: Add the WHERE line back before the semicolon. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Ask the library a question that has one number as its answer, such as the average length of a pop song. Use `SUM`, `AVG` or `MAX`.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-count/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Pick one of SUM, AVG or MAX, and one column. / SELECT AVG(seconds) FROM songs WHERE genre = 'folk'; -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Guess the number <span style="font-size:.6em;color:#64748b">(3 min)</span>

Pairs guess a summary (the average length of a rock song), then run it. Who was closest?

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is the difference between SELECT title and SELECT COUNT(*)?**

* SELECT title gives one row for each song. COUNT(*) gives one row with how many rows there are.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: one count for each genre at once, with GROUP BY. -->
