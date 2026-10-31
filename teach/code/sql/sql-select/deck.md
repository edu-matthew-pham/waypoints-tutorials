---
marp: true
theme: default
html: true
---

# Look inside a table

SQL and databases · Ask a table

<!-- Speaker note: Students meet tables, rows and columns, and write SELECT with named columns and with a star. About 25 minutes (Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min). -->

---

## Today

- I can say what a table, a row and a column are.
- I can choose columns with SELECT and name the table with FROM.
- I can use * to get every column.

---

## Why it matters

> A music app knows thousands of songs. Asking it for just the titles takes one line.

<!-- Speaker note: A **database** stores information in **tables**, like a spreadsheet with strict rules. **SQL** is the language you use to ask a table a question. The question comes back as a new table. Each table has **columns** (the kinds of thing stored, such as `title`) and **rows** (one song each). This course uses a small music library. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT title, artist
FROM songs;
```

**The songs table has 15 songs. What will this query show?**

- 15 rows with every column
- 2 rows with all the columns
- 1 row with the title and artist
- 15 rows with two columns: title and artist

<!-- Speaker note: What happens: 15 rows with two columns. SELECT picks the columns, and with no filter every row comes back. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the wrong options mix up rows and columns. Ask how many columns the answer has before anyone runs it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 15 rows with two columns. SELECT picks the columns, and with no filter every row comes back.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-select/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-select/?full=step-2#step-2)

<!-- Speaker note: Run it and open **Tables in this database** to see every column in `songs`. | Part | What it does | |---|---| | `SELECT title, artist` | Picks two columns, separated by a comma | | `FROM songs` | Says which table to read | | `;` | Ends the query | -->

<!-- Speaker note: Teacher: open the table list so students see the real column names before they type any. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT *
FROM songs;
```

<!-- Speaker note: What this step is for: SELECT names the columns you want. A star means all of them. The rows stay the same either way. -->

<!-- Speaker note: Teacher: the star is shorthand, and the row count does not change. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the columns

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT *
FROM songs;
```

</div>
<div>

**Run the query. How many columns does the table have?**

* Answer: 7

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Pick the right query

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT *
FROM songs;
```

</div>
<div>

**You want only the year of every song. Which query does that?**

- SELECT year FROM songs;
- FROM songs SELECT year;
- SELECT FROM songs year;
- SELECT songs FROM year;

* Answer: SELECT year FROM songs;

</div>
</div>

<!-- Speaker note: SELECT, then the column, then FROM and the table. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows each song's title and genre, and nothing else.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-select/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: The columns you want go after SELECT, separated by commas. / You want title, then genre. For students who need more support: Give the query with one column filled in and ask for the second. For early finishers: Show the columns in a different order and see that the table follows. The hard part, on purpose: Putting SELECT, the columns and FROM in order. Say the query aloud: select these, from that table. When students get stuck: no such column Ask: Does that word appear in the table list? Fix: Copy the column name exactly as it is shown. / A comma after the last column. Ask: What comes after the last column name? Fix: Commas go between columns. FROM comes straight after the last one. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Write your own query for a playlist card. Choose three columns that make a good card and run it.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-select/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Pick three columns you would put on a playlist card. / SELECT column, column, column FROM songs; -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Name that column <span style="font-size:.6em;color:#64748b">(3 min)</span>

One student names a detail of a song. Everyone else says which column holds it.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is the difference between a row and a column in the songs table?**

* A row is one song with all its details. A column is one kind of detail, such as title, for every song.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: show only the rows that match, such as one genre. -->
