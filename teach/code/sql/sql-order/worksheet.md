---
title: "Put the rows in order"
subtitle: "SQL and databases · Ask a table · Lesson 3"
---

# Put the rows in order

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every top ten list is the same question: sort everything, then keep the first ten.


:::teacher-note

**In one sentence:** Students sort with ORDER BY, reverse with DESC, keep the top rows with LIMIT, and combine it with WHERE.

**Students should be able to say:** I can sort rows with ORDER BY and reverse with DESC. I can keep only the first few rows with LIMIT. I can combine WHERE, ORDER BY and LIMIT in the right order.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
SELECT title, plays
FROM songs
ORDER BY plays DESC
LIMIT 3;
```

:::keep-together

**What will this query show?**

☐ The first 3 songs in the table

☐ All 15 songs, sorted by plays

☐ The 3 songs played least, the least played first

☐ The 3 songs played most, the most played first

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** The 3 most played songs. DESC sorts from biggest to smallest, and LIMIT 3 keeps the first three.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT title, year
FROM songs
ORDER BY year
LIMIT 3;
```

:::keep-together

### Which comes first?

**Without DESC, which song comes first when sorted by seconds?**

☐ The longest song

☐ The shortest song

☐ The first song in the table

:::


:::teacher-note

**Answer:** The shortest song

ORDER BY goes from smallest to biggest unless you add DESC.

:::


:::keep-together

### Newest song

**You want the single newest song. What do you need?**

☐ ORDER BY year DESC LIMIT 1

☐ LIMIT 1 ORDER BY year DESC

☐ ORDER BY year LIMIT 1

:::


:::teacher-note

**Answer:** ORDER BY year DESC LIMIT 1

Sort newest first with DESC, then keep one row.

:::


:::typical

## Modify

Change the query so it shows the title and length of the longest song.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title, seconds
FROM songs
ORDER BY seconds DESC
LIMIT 1;
```

:::

:::


## Make

Make a top list of your own, such as the three most played rock songs. Use `WHERE`, `ORDER BY` and `LIMIT` together.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title, plays
FROM songs
WHERE genre = 'rock'
ORDER BY plays DESC
LIMIT 3;
```

:::


## Exit ticket

:::keep-together

**What is the order of the parts of a query so far?**

{{lines-3}}

:::


:::teacher-note

**Answer:** SELECT, FROM, WHERE, ORDER BY, LIMIT.

:::

