---
title: "Keep only the rows you want"
subtitle: "SQL and databases · Ask a table · Lesson 2"
---

# Keep only the rows you want

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Fifteen songs is easy to scan. Fifteen million is not, so we ask the database to do the looking.


:::teacher-note

**In one sentence:** Students filter rows with WHERE, using text in quotes and numbers with > and <.

**Students should be able to say:** I can keep only some rows with WHERE. I can say why text needs quotes and a column name does not. I can compare a number column with &gt; or &lt;.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
SELECT title, genre
FROM songs
WHERE genre = 'pop';
```

:::keep-together

**Four of the 15 songs are pop. What will this show?**

☐ 15 rows, with pop first

☐ 4 rows, all with pop in the genre column

☐ An error, because pop is not a column

☐ 1 row, the first pop song

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 4 rows. WHERE tests every row and keeps only those where the test is true.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

:::keep-together

### Count the long songs

**Run the query. How many songs are longer than 250 seconds?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 4

:::


:::keep-together

### Quotes

**Why does WHERE genre = pop (no quotes) give an error?**

☐ pop is a reserved word

☐ WHERE only works with numbers

☐ Without quotes, pop looks like a column name, and there is no such column

☐ genre must be in capital letters

:::


:::teacher-note

**Answer:** Without quotes, pop looks like a column name, and there is no such column

Quotes make a value of text. Without them SQL thinks pop is the name of a column.

:::


:::keep-together

### Write the test

**Which query finds songs released after 2021?**

☐ SELECT title FROM songs WHERE &gt; 2021;

☐ SELECT title FROM songs WHERE year &gt; 2021;

☐ SELECT title FROM songs WHERE year = '&gt; 2021';

:::


:::teacher-note

**Answer:** SELECT title FROM songs WHERE year &gt; 2021;

A test has a column, a comparison and a value: year &gt; 2021.

:::


:::typical

## Modify

Change the query so it shows the title of every song by Kito.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title
FROM songs
WHERE artist = 'Kito';
```

:::

:::


## Make

Find a set of songs for a playlist you would make, such as short songs or ones played a lot. Choose the test, write it and run it.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT title, plays
FROM songs
WHERE plays > 5000;
```

:::


## Exit ticket

:::keep-together

**What does WHERE do, and why is 'pop' in quotes?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It keeps only the rows where the test is true. Quotes show that pop is a value, not a column.

:::

