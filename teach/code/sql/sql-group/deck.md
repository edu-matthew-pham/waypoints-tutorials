---
marp: true
theme: default
html: true
---

# One answer for each group

SQL and databases · Summarise

<!-- Speaker note: Students use GROUP BY to get a summary for each value of a column, and sort the groups. About 30 minutes (Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min). -->

---

## Today

- I can use GROUP BY to get one answer for each group.
- I can show the group name beside its summary.
- I can sort groups with ORDER BY.

---

## Why it matters

> How many songs in each genre? You could run five queries, or ask once.

<!-- Speaker note: `COUNT(*)` gave one answer for the whole table. `GROUP BY` sorts the rows into piles, one pile for each value in a column, and gives one answer for **each pile**. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Piles of cards <span style="font-size:.6em;color:#64748b">(4 min)</span>

Give pairs printed song cards. They sort them into genre piles and count each pile, then run the query to check.

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT genre, COUNT(*)
FROM songs
GROUP BY genre;
```

**There are five different genres. What will this show?**

- 1 row with the number 15
- 15 rows, one for each song
- 5 rows, all with the number 1
- 5 rows: each genre with its number of songs

<!-- Speaker note: What happens: 5 rows. The songs are put in a pile for each genre, and COUNT(*) counts each pile. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: draw five piles on the board and sort a few song cards into them before anyone runs it. -->

<style scoped>pre, marp-pre { font-size: 0.81em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 5 rows. The songs are put in a pile for each genre, and COUNT(*) counts each pile.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-group/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-group/?full=step-2#step-2)

<!-- Speaker note: Run it and add up the counts in your head. They should come to 15. | Part | What it does | |---|---| | `SELECT genre, COUNT(*)` | Shows the group's name and its count | | `GROUP BY genre` | Makes one pile for each genre | -->

<!-- Speaker note: Teacher: the counts add to 15, which shows no song is lost or counted twice. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT artist, AVG(seconds)
FROM songs
GROUP BY artist;
```

<!-- Speaker note: What this step is for: The column you group by is the one to show beside the summary. WHERE filters rows before the piles are made. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the piles

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT artist, AVG(seconds)
FROM songs
GROUP BY artist;
```

</div>
<div>

**Run the query. How many different artists are in the table?**

* Answer: 5

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Total for each artist

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT artist, AVG(seconds)
FROM songs
GROUP BY artist;
```

</div>
<div>

**You want the total plays for each artist. Which query?**

- SELECT SUM(plays) FROM songs GROUP BY plays;
- SELECT artist, SUM(plays) FROM songs GROUP BY artist;
- SELECT artist, SUM(plays) FROM songs;

* Answer: SELECT artist, SUM(plays) FROM songs GROUP BY artist;

</div>
</div>

<!-- Speaker note: Show the artist, add up the plays, and group by the artist. -->

<style scoped>section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows the total plays for each genre.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-group/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change COUNT(*) to SUM(plays). / SELECT genre, SUM(plays) FROM songs GROUP BY genre; For students who need more support: Give the query with GROUP BY filled in and ask for the summary. For early finishers: Add WHERE year >= 2020 and see how the counts change. The hard part, on purpose: Seeing why the count is for a pile, not the table. Sort cards into piles by hand first. When students get stuck: Only one row, with an odd genre. Ask: Is there a GROUP BY? Fix: Add GROUP BY and the column you want a row for. / GROUP BY comes before WHERE and gives an error. Ask: What is the order of the parts? Fix: SELECT, FROM, WHERE, GROUP BY, ORDER BY, LIMIT. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find out which artist has the most songs in the library. Group, count, sort and keep the top one.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-group/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Group by artist or year, then ORDER BY the summary. / Add ORDER BY COUNT(*) DESC after GROUP BY. -->

<!-- Speaker note: Teacher: ORDER BY can use the summary, as in ORDER BY COUNT(*) DESC. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What does GROUP BY genre do?**

* It makes one pile for each genre, so a summary such as COUNT(*) gives one answer for each genre.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: a second table, and joining the two. -->
