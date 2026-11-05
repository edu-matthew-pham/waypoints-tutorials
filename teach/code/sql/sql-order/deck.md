---
marp: true
theme: default
html: true
---

# Put the rows in order

SQL and databases · Ask a table

<!-- Speaker note: Students sort with ORDER BY, reverse with DESC, keep the top rows with LIMIT, and combine it with WHERE. About 25 minutes (Predict and Run 8 min · Investigate 6 min · Modify and Make 11 min). -->

---

## Today

- I can sort rows with ORDER BY and reverse with DESC.
- I can keep only the first few rows with LIMIT.
- I can combine WHERE, ORDER BY and LIMIT in the right order.

---

## Why it matters

> Every top ten list is the same question: sort everything, then keep the first ten.

<!-- Speaker note: A table has no fixed order. `ORDER BY` sorts the rows, and `LIMIT` keeps only the first few. Together they make a top list. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT title, plays
FROM songs
ORDER BY plays DESC
LIMIT 3;
```

**What will this query show?**

- The first 3 songs in the table
- All 15 songs, sorted by plays
- The 3 songs played least, the least played first
- The 3 songs played most, the most played first

<!-- Speaker note: What happens: The 3 most played songs. DESC sorts from biggest to smallest, and LIMIT 3 keeps the first three. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the 'first 3 in the table' option shows students who think the table has a built-in order. -->

<style scoped>pre, marp-pre { font-size: 0.61em; line-height: 1.25; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* The 3 most played songs. DESC sorts from biggest to smallest, and LIMIT 3 keeps the first three.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-order/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-order/?full=step-2#step-2)

<!-- Speaker note: Run it, then delete `DESC` and run it again to see what changes. | Part | What it does | |---|---| | `ORDER BY plays` | Sorts the rows by the plays column, smallest first | | `DESC` | Reverses the order: biggest first | | `LIMIT 3` | Keeps only the first three rows | -->

<!-- Speaker note: Teacher: delete DESC and run again so the order flips. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT title, year
FROM songs
ORDER BY year
LIMIT 3;
```

<!-- Speaker note: What this step is for: Rows come back in the order you ask for, and LIMIT counts from the top of that order. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which comes first?

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT title, year
FROM songs
ORDER BY year
LIMIT 3;
```

</div>
<div>

**Without DESC, which song comes first when sorted by seconds?**

- The longest song
- The shortest song
- The first song in the table

* Answer: The shortest song

</div>
</div>

<!-- Speaker note: ORDER BY goes from smallest to biggest unless you add DESC. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Newest song

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT title, year
FROM songs
ORDER BY year
LIMIT 3;
```

</div>
<div>

**You want the single newest song. What do you need?**

- ORDER BY year DESC LIMIT 1
- LIMIT 1 ORDER BY year DESC
- ORDER BY year LIMIT 1

* Answer: ORDER BY year DESC LIMIT 1

</div>
</div>

<!-- Speaker note: Sort newest first with DESC, then keep one row. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows the title and length of the longest song.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-order/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: The longest song is the biggest value in seconds. / ORDER BY seconds DESC LIMIT 1. For students who need more support: Give the query with ORDER BY done and ask only for LIMIT. For early finishers: Sort by two columns, such as genre and then plays DESC. The hard part, on purpose: The fixed order of the parts. Read the query aloud as a sentence. When students get stuck: syntax error near ORDER Ask: Which comes first, WHERE or ORDER BY? Fix: The order is SELECT, FROM, WHERE, ORDER BY, LIMIT. / The wrong end of the list. Ask: Does the order go smallest first or biggest first? Fix: Add DESC for biggest first. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Make a top list of your own, such as the three most played rock songs. Use `WHERE`, `ORDER BY` and `LIMIT` together.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-order/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Combine WHERE, ORDER BY and LIMIT in that order. / WHERE comes first, then ORDER BY, then LIMIT. -->

<!-- Speaker note: Teacher: the clause order is fixed. Read the query aloud: which rows, in what order, how many. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Top three <span style="font-size:.6em;color:#64748b">(4 min)</span>

Pairs invent a top-three question about the songs, swap, and write the query for each other's question.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is the order of the parts of a query so far?**

* SELECT, FROM, WHERE, ORDER BY, LIMIT.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: count and add up rows to one answer. -->
