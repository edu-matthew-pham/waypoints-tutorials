---
marp: true
theme: default
html: true
---

# Add a row

SQL and databases · More than one table

<!-- Speaker note: Students add rows with INSERT INTO, match values to columns, meet NULL, and check the change with SELECT. About 25 minutes (Predict and Run 9 min · Investigate 6 min · Modify and Make 10 min). -->

---

## Today

- I can add a row to a table with INSERT INTO ... VALUES.
- I can match the values to the columns, in order.
- I can check a change with a SELECT afterwards.

<!-- Speaker note: Teacher: Reset undoes every change, so students can experiment freely. -->

---

## Why it matters

> Until now you only looked. A real app also has to save: a new song, a new order, a new sign-up.

<!-- Speaker note: Everything so far read data. `INSERT INTO` **adds** a row. The queries in this lesson have two parts: the change, then a `SELECT` so you can see what it did. The change is kept while you work in the playground. **Reset** puts the table back as it started. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
INSERT INTO songs
VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);

SELECT COUNT(*) FROM songs;
```

**The songs table has 15 rows. What will the last line show?**

- An error, because the table is already full
- 15
- 16
- 1

<!-- Speaker note: What happens: 16. The INSERT adds one row to the table, and COUNT(*) counts it with the others. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: most students get this. The point is that a query can now change the table. -->

<style scoped>pre, marp-pre { font-size: 0.61em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 16. The INSERT adds one row to the table, and COUNT(*) counts it with the others.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-insert/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-insert/?full=step-2#step-2)

<!-- Speaker note: Run it, then run it again without pressing Reset. Read the message. | Part | What it does | |---|---| | `INSERT INTO songs` | Says which table gets the new row | | `VALUES (...)` | The new row, one value for each column, in the table's column order | | `SELECT COUNT(*)` | Not part of the change: it checks the result | The second run fails because id 16 is already used. A key is never repeated. -->

<!-- Speaker note: Teacher: the second run fails, which is the lesson on keys: an id belongs to one row. Ask why a table would refuse a repeat. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
INSERT INTO songs (id, title, artist)
VALUES (16, 'Compass', 'Kito');

SELECT id, title, year FROM songs WHERE id = 16;
```

<!-- Speaker note: What this step is for: The values must line up with the columns. Name only some columns and the rest are left empty (NULL). -->

<!-- Speaker note: Teacher: NULL is a new idea. Ask students what a missing year should show. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Look at the empty columns

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
INSERT INTO songs (id, title, artist)
VALUES (16, 'Compass', 'Kito');

SELECT id, title, year FROM songs WHERE id = 16;
```

</div>
<div>

**Run the query. What does the year column hold for the new row?**

- An empty piece of text
- 2024
- 0
- NULL, which means no value

* Answer: NULL, which means no value

</div>
</div>

<!-- Speaker note: Columns you leave out are NULL: not zero, not empty text, just no value. -->

<style scoped>section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which line works?

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
INSERT INTO songs (id, title, artist)
VALUES (16, 'Compass', 'Kito');

SELECT id, title, year FROM songs WHERE id = 16;
```

</div>
<div>

**Which line adds a song with title 'Dawn' and artist 'Kito', and nothing else?**

- INSERT INTO songs (title, artist) VALUES ('Dawn', 'Kito');
- INSERT INTO songs VALUES ('Dawn', 'Kito');
- INSERT songs (title, artist) ('Dawn', 'Kito');

* Answer: INSERT INTO songs (title, artist) VALUES ('Dawn', 'Kito');

</div>
</div>

<!-- Speaker note: Name the columns in brackets, then give the values in the same order. -->

<style scoped>section { font-size: 23px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the song so it is by Mira Vale instead of Kito.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-insert/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change the artist and the genre, and keep the id. / The artist is 'Mira Vale' and the genre is 'pop'. For students who need more support: Give the INSERT with one value blank for each task. For early finishers: Add a song with a column list that leaves plays out. What does plays hold? The hard part, on purpose: Keeping values in column order. Write the column names above the values. When students get stuck: UNIQUE constraint failed Ask: Has this id been used already? Fix: Choose an id that is not in the table, or press Reset and run once. / table songs has 7 columns but 3 values were supplied Ask: How many columns does the table have? Fix: Give a value for every column, or name the columns you are filling. / Text without quotes. Ask: Which values are text? Fix: Text values go in single quotes. Numbers do not. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Add two songs of your own, with ids 16 and 17, then run it. The last line shows the new rows.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-insert/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Use ids 16 and 17, because the table already has 1 to 15. / Two INSERT lines, or one INSERT with two sets of values. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Sign-up sheet <span style="font-size:.6em;color:#64748b">(4 min)</span>

Students invent a new table for a club sign-up (name, year level, favourite game) and write the INSERT for the person next to them.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What goes in the brackets after VALUES?**

* One value for each column, in the table's column order, with text in single quotes.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: change and remove rows with UPDATE and DELETE, and why WHERE matters. -->
