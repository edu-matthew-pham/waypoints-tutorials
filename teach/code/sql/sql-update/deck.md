---
marp: true
theme: default
html: true
---

# Change and remove rows

SQL and databases · More than one table

<!-- Speaker note: Students change rows with UPDATE and remove rows with DELETE, and learn that WHERE decides which rows. About 25 minutes (Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min). -->

---

## Today

- I can change a value with UPDATE ... SET ... WHERE.
- I can remove rows with DELETE FROM ... WHERE.
- I can say what happens when WHERE is left out.

<!-- Speaker note: Teacher: Tip to share: write the WHERE as a SELECT first, check the rows, then change SELECT * to DELETE. -->

---

## Why it matters

> One missing WHERE line, and every row in the table changes. Databases do exactly what you ask.

<!-- Speaker note: `UPDATE` changes values in rows that already exist. `DELETE` removes rows. Both act on **every row** unless you say which with `WHERE`. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
UPDATE songs
SET plays = 0;

SELECT COUNT(*) FROM songs WHERE plays = 0;
```

**This change has no WHERE line. What will the last line show?**

- An error, because UPDATE needs a WHERE
- 15, because every song now has 0 plays
- 1, because only one song was changed
- 0, because no song has 0 plays

<!-- Speaker note: What happens: 15. Without WHERE, UPDATE changes every row, so all 15 songs have 0 plays. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask students to vote before running. The no-WHERE slip is the key idea of the lesson. -->

<style scoped>pre, marp-pre { font-size: 0.61em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 15. Without WHERE, UPDATE changes every row, so all 15 songs have 0 plays.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-update/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-update/?full=step-2#step-2)

<!-- Speaker note: Run it, then press **Reset** to put the songs back. | Part | What it does | |---|---| | `UPDATE songs` | Says which table to change | | `SET plays = 0` | The new value for a column | | `WHERE` | Not here, which is why every row changed | -->

<!-- Speaker note: Teacher: after the 15, press Reset so students see the table come back. In a real database there is no Reset, so people test with SELECT before they UPDATE or DELETE. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
DELETE FROM songs
WHERE genre = 'folk';

SELECT COUNT(*) FROM songs;
```

<!-- Speaker note: What this step is for: UPDATE and DELETE both work on the rows that pass WHERE, and on all rows if there is no WHERE. The SELECT after is how you check. -->

<!-- Speaker note: Teacher: plays + 100 uses the old value. Ask what plays = 100 would do instead. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Delete the folk songs

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
DELETE FROM songs
WHERE genre = 'folk';

SELECT COUNT(*) FROM songs;
```

</div>
<div>

**Run the query. How many songs are left after the folk songs are deleted?**

* Answer: 13

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Add 100 plays

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
DELETE FROM songs
WHERE genre = 'folk';

SELECT COUNT(*) FROM songs;
```

</div>
<div>

**Which line adds 100 plays to the song with id 3?**

- UPDATE songs SET plays = 100 WHERE id = 3;
- UPDATE songs SET plays = plays + 100;
- UPDATE songs SET plays = plays + 100 WHERE id = 3;

* Answer: UPDATE songs SET plays = plays + 100 WHERE id = 3;

</div>
</div>

<!-- Speaker note: plays + 100 uses the old value, and WHERE id = 3 picks one row. -->

<style scoped>section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Song 6 is really from 2018. Change the query so it fixes that and shows the result.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-update/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change the column to year, the value to 2018 and the id to 6. / UPDATE songs SET year = 2018 WHERE id = 6; For students who need more support: Give the UPDATE with the WHERE line missing and ask students to complete it. For early finishers: Raise the plays of every pop song by 10% with plays * 1.1, then look at the results. The hard part, on purpose: Remembering WHERE. Teach the habit: write it as a SELECT first, then change the first word. When students get stuck: Every row changed. Ask: Does your query have a WHERE line? Fix: Press Reset, add the WHERE line, and run again. / Nothing changed. Ask: Does any row pass your WHERE test? Fix: Check the id or spelling against the table. / syntax error near DELETE Ask: Is FROM in the DELETE line? Fix: It is DELETE FROM table. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Remove the songs that have been played fewer than 2000 times, then show the songs that are left.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-update/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: The songs to remove are the ones with fewer than 2000 plays. / DELETE FROM songs WHERE plays < 2000; -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Select first <span style="font-size:.6em;color:#64748b">(4 min)</span>

Pairs write a DELETE for a rule (songs older than 2018). They write the matching SELECT first and agree on the rows before they change the word.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What happens if you write DELETE FROM songs; with no WHERE?**

* Every row in the table is removed. WHERE chooses which rows.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: designing a table, with keys that make each row unique. -->
