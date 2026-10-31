---
title: "Link tables with keys"
subtitle: "SQL and databases · More than one table · Lesson 10"
---

# Link tables with keys

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A review says 'Great chorus'. Which song? The review stores a number, and the number points at one row.


:::teacher-note

**In one sentence:** Students link two tables with a foreign key, join on it, and see why tables link by id rather than by name.

**Students should be able to say:** I can say what a foreign key is. I can join two tables on a key. I can say why a table stores an id instead of a title.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
SELECT songs.title, reviews.stars
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

:::keep-together

**The reviews table has 10 rows, and every song_id matches a song. What will this show?**

☐ 10 rows: each review with its song's title

☐ 15 rows, one for each song

☐ 7 rows, one for each reviewed song

☐ An error, because reviews has no title column

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 10 rows. Each review is paired with the song whose id equals its song_id.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
WHERE songs.title = 'Glass Hearts';
```

:::keep-together

### Find an average

**Run the query. What is the average rating of the song Glass Hearts?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 4.5

:::


:::keep-together

### Changing a title

**A song's title is corrected in the songs table. What happens to its reviews?**

☐ Nothing breaks: they point at the song's id, which did not change

☐ They all have to be edited to match

☐ They are deleted

:::


:::teacher-note

**Answer:** Nothing breaks: they point at the song's id, which did not change

The link is the id, and the id stays the same. That is why tables link by key.

:::


:::typical

## Modify

Change the query so it shows each song title with the review's comment.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT songs.title, reviews.comment
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

:::

:::


## Make

Find the average rating of each reviewed song, with the best first.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
GROUP BY songs.title
ORDER BY AVG(reviews.stars) DESC;
```

:::


## Exit ticket

:::keep-together

**Why does reviews store song_id instead of the song's title?**

{{lines-3}}

:::


:::teacher-note

**Answer:** An id is never repeated or changed, so each review points at exactly one song and a title can be fixed in one place.

:::

