---
title: "Add a row"
subtitle: "SQL and databases · More than one table · Lesson 7"
---

# Add a row

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Until now you only looked. A real app also has to save: a new song, a new order, a new sign-up.


:::teacher-note

**In one sentence:** Students add rows with INSERT INTO, match values to columns, meet NULL, and check the change with SELECT.

**Students should be able to say:** I can add a row to a table with INSERT INTO ... VALUES. I can match the values to the columns, in order. I can check a change with a SELECT afterwards.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
INSERT INTO songs
VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);

SELECT COUNT(*) FROM songs;
```

:::keep-together

**The songs table has 15 rows. What will the last line show?**

☐ An error, because the table is already full

☐ 15

☐ 16

☐ 1

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 16. The INSERT adds one row to the table, and COUNT(*) counts it with the others.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
INSERT INTO songs (id, title, artist)
VALUES (16, 'Compass', 'Kito');

SELECT id, title, year FROM songs WHERE id = 16;
```

:::keep-together

### Look at the empty columns

**Run the query. What does the year column hold for the new row?**

☐ An empty piece of text

☐ 2024

☐ 0

☐ NULL, which means no value

:::


:::teacher-note

**Answer:** NULL, which means no value

Columns you leave out are NULL: not zero, not empty text, just no value.

:::


:::keep-together

### Which line works?

**Which line adds a song with title 'Dawn' and artist 'Kito', and nothing else?**

☐ INSERT INTO songs (title, artist) VALUES ('Dawn', 'Kito');

☐ INSERT INTO songs VALUES ('Dawn', 'Kito');

☐ INSERT songs (title, artist) ('Dawn', 'Kito');

:::


:::teacher-note

**Answer:** INSERT INTO songs (title, artist) VALUES ('Dawn', 'Kito');

Name the columns in brackets, then give the values in the same order.

:::


:::typical

## Modify

Change the song so it is by Mira Vale instead of Kito.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
INSERT INTO songs
VALUES (16, 'Compass', 'Mira Vale', 'pop', 2024, 199, 0);

SELECT title, artist FROM songs WHERE id = 16;
```

:::

:::


## Make

Add two songs of your own, with ids 16 and 17, then run it. The last line shows the new rows.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
INSERT INTO songs VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);
INSERT INTO songs VALUES (17, 'Sparks', 'Mira Vale', 'pop', 2024, 190, 0);

SELECT id, title FROM songs WHERE id > 15;
```

:::


## Exit ticket

:::keep-together

**What goes in the brackets after VALUES?**

{{lines-3}}

:::


:::teacher-note

**Answer:** One value for each column, in the table's column order, with text in single quotes.

:::

