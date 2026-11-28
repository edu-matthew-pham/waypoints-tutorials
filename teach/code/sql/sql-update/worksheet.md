---
title: "Change and remove rows"
subtitle: "SQL and databases · More than one table · Lesson 8"
---

# Change and remove rows

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** One missing WHERE line, and every row in the table changes. Databases do exactly what you ask.


:::teacher-note

**In one sentence:** Students change rows with UPDATE and remove rows with DELETE, and learn that WHERE decides which rows.

**Students should be able to say:** I can change a value with UPDATE ... SET ... WHERE. I can remove rows with DELETE FROM ... WHERE. I can say what happens when WHERE is left out.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
UPDATE songs
SET plays = 0;

SELECT COUNT(*) FROM songs WHERE plays = 0;
```

:::keep-together

**This change has no WHERE line. What will the last line show?**

☐ An error, because UPDATE needs a WHERE

☐ 15, because every song now has 0 plays

☐ 1, because only one song was changed

☐ 0, because no song has 0 plays

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 15. Without WHERE, UPDATE changes every row, so all 15 songs have 0 plays.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
DELETE FROM songs
WHERE genre = 'folk';

SELECT COUNT(*) FROM songs;
```

:::keep-together

### Delete the folk songs

**Run the query. How many songs are left after the folk songs are deleted?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 13

:::


:::keep-together

### Add 100 plays

**Which line adds 100 plays to the song with id 3?**

☐ UPDATE songs SET plays = 100 WHERE id = 3;

☐ UPDATE songs SET plays = plays + 100;

☐ UPDATE songs SET plays = plays + 100 WHERE id = 3;

:::


:::teacher-note

**Answer:** UPDATE songs SET plays = plays + 100 WHERE id = 3;

plays + 100 uses the old value, and WHERE id = 3 picks one row.

:::


:::typical

## Modify

Song 6 is really from 2018. Change the query so it fixes that and shows the result.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
UPDATE songs
SET year = 2018
WHERE id = 6;

SELECT title, year FROM songs WHERE id = 6;
```

:::

:::


## Make

Remove the songs that have been played fewer than 2000 times, then show the songs that are left.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
DELETE FROM songs
WHERE plays < 2000;

SELECT title FROM songs;
```

:::


## Exit ticket

:::keep-together

**What happens if you write DELETE FROM songs; with no WHERE?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Every row in the table is removed. WHERE chooses which rows.

:::

