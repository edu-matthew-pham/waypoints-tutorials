---
title: "Look inside a table"
subtitle: "SQL and databases · Ask a table · Lesson 1"
---

# Look inside a table

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A music app knows thousands of songs. Asking it for just the titles takes one line.


:::teacher-note

**In one sentence:** Students meet tables, rows and columns, and write SELECT with named columns and with a star.

**Students should be able to say:** I can say what a table, a row and a column are. I can choose columns with SELECT and name the table with FROM. I can use * to get every column.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

`SELECT` chooses columns. `FROM` says which table.

```sql
SELECT title, artist
FROM songs;
```

:::keep-together

**The songs table has 15 songs. What will this query show?**

☐ 15 rows with every column

☐ 2 rows with all the columns

☐ 1 row with the title and artist

☐ 15 rows with two columns: title and artist

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 15 rows with two columns. SELECT picks the columns, and with no filter every row comes back.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT *
FROM songs;
```

:::keep-together

### Count the columns

**Run the query. How many columns does the table have?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7

:::


:::keep-together

### Pick the right query

**You want only the year of every song. Which query does that?**

☐ SELECT year FROM songs;

☐ FROM songs SELECT year;

☐ SELECT FROM songs year;

☐ SELECT songs FROM year;

:::


:::teacher-note

**Answer:** SELECT year FROM songs;

SELECT, then the column, then FROM and the table.

:::


:::typical

## Modify

Change the query so it shows each song's title and genre, and nothing else.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title, genre
FROM songs;
```

:::

:::


## Make

Write your own query for a playlist card. Choose three columns that make a good card and run it.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title, artist, year
FROM songs;
```

:::


## Exit ticket

:::keep-together

**What is the difference between a row and a column in the songs table?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A row is one song with all its details. A column is one kind of detail, such as title, for every song.

:::

