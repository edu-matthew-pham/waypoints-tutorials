---
title: "Count and add up"
subtitle: "SQL and databases · Summarise · Lesson 4"
---

# Count and add up

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** How many songs, how many plays, how long on average: the database can answer without showing you a single song.


:::teacher-note

**In one sentence:** Students summarise many rows into one value with COUNT, SUM, AVG and MAX, filtered by WHERE.

**Students should be able to say:** I can count rows with COUNT(*). I can add up, average or find the biggest value in a column. I can use WHERE to choose which rows are summarised.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
SELECT COUNT(*)
FROM songs
WHERE genre = 'pop';
```

:::keep-together

**Four songs are pop. What will this query show?**

☐ One row with the number 4

☐ Four rows, one for each pop song

☐ An error, because COUNT needs a column name

☐ One row with the first pop song

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** One row with the number 4. COUNT(*) counts the rows that pass WHERE, and the answer is a single value.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT SUM(plays)
FROM songs
WHERE genre = 'rock';
```

:::keep-together

### Add them up

**Run the query. How many plays do the rock songs have in total?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 7900

:::


:::keep-together

### Pick the function

**Which query gives the length of the longest song?**

☐ SELECT MAX(seconds) FROM songs;

☐ SELECT COUNT(seconds) FROM songs;

☐ SELECT seconds FROM songs MAX;

:::


:::teacher-note

**Answer:** SELECT MAX(seconds) FROM songs;

MAX(column) gives the biggest value in the column.

:::


:::typical

## Modify

Change the query so it counts the songs by Kito.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT COUNT(*)
FROM songs
WHERE artist = 'Kito';
```

:::

:::


## Make

Ask the library a question that has one number as its answer, such as the average length of a pop song. Use `SUM`, `AVG` or `MAX`.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT AVG(seconds)
FROM songs
WHERE genre = 'pop';
```

:::


## Exit ticket

:::keep-together

**What is the difference between SELECT title and SELECT COUNT(*)?**

{{lines-3}}

:::


:::teacher-note

**Answer:** SELECT title gives one row for each song. COUNT(*) gives one row with how many rows there are.

:::

