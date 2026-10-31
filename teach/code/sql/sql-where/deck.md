---
marp: true
theme: default
html: true
---

# Keep only the rows you want

SQL and databases · Ask a table

<!-- Speaker note: Students filter rows with WHERE, using text in quotes and numbers with > and <. About 25 minutes (Predict and Run 8 min · Investigate 8 min · Modify and Make 9 min). -->

---

## Today

- I can keep only some rows with WHERE.
- I can say why text needs quotes and a column name does not.
- I can compare a number column with &gt; or &lt;.

---

## Why it matters

> Fifteen songs is easy to scan. Fifteen million is not, so we ask the database to do the looking.

<!-- Speaker note: Last lesson every row came back. Most questions need only some rows: the pop songs, the long ones, the new ones. `WHERE` keeps the rows that pass a test. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT title, genre
FROM songs
WHERE genre = 'pop';
```

**Four of the 15 songs are pop. What will this show?**

- 15 rows, with pop first
- 4 rows, all with pop in the genre column
- An error, because pop is not a column
- 1 row, the first pop song

<!-- Speaker note: What happens: 4 rows. WHERE tests every row and keeps only those where the test is true. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the error option catches students who think pop must be a column. -->

<style scoped>pre, marp-pre { font-size: 0.81em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 4 rows. WHERE tests every row and keeps only those where the test is true.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-where/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-where/?full=step-2#step-2)

<!-- Speaker note: Run it and compare with your prediction. | Part | What it does | |---|---| | `WHERE genre = 'pop'` | Keeps only rows where the genre column is pop | | `'pop'` | Text goes in single quotes, like a value | | `genre` | No quotes: this is a column name | -->

<!-- Speaker note: Teacher: change the genre and run again, then ask what happens with a genre that does not exist (no rows, no error). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

<!-- Speaker note: What this step is for: WHERE is a test applied to each row. Text values go in quotes, numbers do not, and the columns you show can differ from the column you test. -->

<!-- Speaker note: Teacher: the quotes question is the main idea. Ask what SQL does with a word that has no quotes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the long songs

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

</div>
<div>

**Run the query. How many songs are longer than 250 seconds?**

* Answer: 4

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Quotes

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

</div>
<div>

**Why does WHERE genre = pop (no quotes) give an error?**

- pop is a reserved word
- WHERE only works with numbers
- Without quotes, pop looks like a column name, and there is no such column
- genre must be in capital letters

* Answer: Without quotes, pop looks like a column name, and there is no such column

</div>
</div>

<!-- Speaker note: Quotes make a value of text. Without them SQL thinks pop is the name of a column. -->

<style scoped>section { font-size: 22px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Write the test

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

</div>
<div>

**Which query finds songs released after 2021?**

- SELECT title FROM songs WHERE &gt; 2021;
- SELECT title FROM songs WHERE year &gt; 2021;
- SELECT title FROM songs WHERE year = '&gt; 2021';

* Answer: SELECT title FROM songs WHERE year &gt; 2021;

</div>
</div>

<!-- Speaker note: A test has a column, a comparison and a value: year > 2021. -->

<style scoped>section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows the title of every song by Kito.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-where/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change the column you test and the value in quotes. / You want WHERE artist = 'Kito'. For students who need more support: Give the WHERE line with the value missing. For early finishers: Combine two tests (next lesson uses AND) or try year >= 2022. The hard part, on purpose: Quotes. Ask: is this word a column or a value? Columns have no quotes; text values do. When students get stuck: no such column: pop Ask: Is pop a column, or a value in a column? Fix: Put single quotes round the text value. / No rows come back. Ask: How is the genre spelled in the table? Fix: Match the spelling in the data. Text must match letter for letter. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find a set of songs for a playlist you would make, such as short songs or ones played a lot. Choose the test, write it and run it.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-where/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Pick a column to test: year, seconds or plays work well with > or <. / SELECT title, plays FROM songs WHERE plays > 5000; -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Human filter <span style="font-size:.6em;color:#64748b">(3 min)</span>

Read out WHERE tests (such as year > 2020). Students stand if the song on their card passes the test.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What does WHERE do, and why is 'pop' in quotes?**

* It keeps only the rows where the test is true. Quotes show that pop is a value, not a column.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: put the rows in order and show only the top few. -->
