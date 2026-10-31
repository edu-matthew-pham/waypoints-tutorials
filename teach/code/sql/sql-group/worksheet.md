---
title: "One answer for each group"
subtitle: "SQL and databases · Summarise · Lesson 5"
---

# One answer for each group

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** How many songs in each genre? You could run five queries, or ask once.


:::teacher-note

**In one sentence:** Students use GROUP BY to get a summary for each value of a column, and sort the groups.

**Students should be able to say:** I can use GROUP BY to get one answer for each group. I can show the group name beside its summary. I can sort groups with ORDER BY.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
SELECT genre, COUNT(*)
FROM songs
GROUP BY genre;
```

:::keep-together

**There are five different genres. What will this show?**

☐ 1 row with the number 15

☐ 15 rows, one for each song

☐ 5 rows, all with the number 1

☐ 5 rows: each genre with its number of songs

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 5 rows. The songs are put in a pile for each genre, and COUNT(*) counts each pile.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT artist, AVG(seconds)
FROM songs
GROUP BY artist;
```

:::keep-together

### Count the piles

**Run the query. How many different artists are in the table?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 5

:::


:::keep-together

### Total for each artist

**You want the total plays for each artist. Which query?**

☐ SELECT SUM(plays) FROM songs GROUP BY plays;

☐ SELECT artist, SUM(plays) FROM songs GROUP BY artist;

☐ SELECT artist, SUM(plays) FROM songs;

:::


:::teacher-note

**Answer:** SELECT artist, SUM(plays) FROM songs GROUP BY artist;

Show the artist, add up the plays, and group by the artist.

:::


:::typical

## Modify

Change the query so it shows the total plays for each genre.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT genre, SUM(plays)
FROM songs
GROUP BY genre;
```

:::

:::


## Make

Find out which artist has the most songs in the library. Group, count, sort and keep the top one.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT artist, COUNT(*)
FROM songs
GROUP BY artist
ORDER BY COUNT(*) DESC
LIMIT 1;
```

:::


## Exit ticket

:::keep-together

**What does GROUP BY genre do?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It makes one pile for each genre, so a summary such as COUNT(*) gives one answer for each genre.

:::

