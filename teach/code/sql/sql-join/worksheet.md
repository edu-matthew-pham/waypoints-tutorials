---
title: "Join two tables"
subtitle: "SQL and databases · More than one table · Lesson 6"
---

# Join two tables

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A song knows its artist's name. It does not know where the artist is from. That lives in a different table.


:::teacher-note

**In one sentence:** Students combine two tables with JOIN ... ON and then filter or group the joined rows.

**Students should be able to say:** I can say why data is split into separate tables. I can join two tables with ON, matching a column they share. I can name a column with its table, such as songs.title.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

Open **Tables in this database** first to see both tables.

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name;
```

:::keep-together

**There are 15 songs, and every artist is in the artists table. What will this show?**

☐ An error, because the columns are in two tables

☐ 75 rows: every song with every artist

☐ 15 rows: each song with its artist's country

☐ 5 rows: one for each artist

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 15 rows. For each song, JOIN finds the artists row where the names match, and puts the two together.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name
WHERE artists.country = 'Australia';
```

:::keep-together

### Count the Australian songs

**Run the query. How many songs are by artists from Australia?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 4

:::


:::keep-together

### Read the matching rule

**What does ON songs.artist = artists.name do?**

☐ Sorts the songs by artist

☐ Pairs each song with the artist row whose name matches

☐ Copies the artist table into the songs table

☐ Keeps only songs with a country

:::


:::teacher-note

**Answer:** Pairs each song with the artist row whose name matches

ON is the matching rule. Each song is paired with the artist row where the two names are equal.

:::


:::typical

## Modify

Change the query so it shows each song's title and its artist's country.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name;
```

:::

:::


## Make

Find out how many songs the library has from each country. Join the tables, then group.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
SELECT artists.country, COUNT(*)
FROM songs
JOIN artists ON songs.artist = artists.name
GROUP BY artists.country;
```

:::


## Exit ticket

:::keep-together

**Why keep artists in their own table instead of a country column in songs?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A country is stored once for each artist, so a mistake is fixed in one place and nothing is repeated.

:::

