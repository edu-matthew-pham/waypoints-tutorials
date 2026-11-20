---
title: "Design your own table"
subtitle: "SQL and databases · More than one table · Lesson 9"
---

# Design your own table

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every table you have used was designed by someone. Now you design one.


:::teacher-note

**In one sentence:** Students create a table, choose a type for each column, give it a primary key and fill it with INSERT.

**Students should be able to say:** I can create a table with CREATE TABLE. I can choose INTEGER or TEXT for a column. I can say what a primary key is for.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

:::keep-together

**What will the last line show?**

☐ Three rows, one for each column

☐ An empty table with three column names

☐ An error, because the table does not exist yet

☐ One row with three columns: id, name and owner

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** One row with three columns. CREATE TABLE makes the table, INSERT adds a row, and SELECT shows it.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

:::keep-together

### Pick the type

**A table of songs needs a column for how many plays each song has. Which type?**

☐ PRIMARY KEY

☐ INTEGER

☐ TEXT

:::


:::teacher-note

**Answer:** INTEGER

Plays is a whole number, so INTEGER. TEXT would not add up.

:::


:::keep-together

### Why a key?

**Why does every table get an id column as its primary key?**

☐ SQL cannot store text without it

☐ Two people can share a name, but an id belongs to one row only

☐ It makes the table run faster for every query

:::


:::teacher-note

**Answer:** Two people can share a name, but an id belongs to one row only

Names repeat, but an id is never repeated, so it is a safe way to point at exactly one row.

:::


:::typical

## Modify

Add a fourth column called `description`, and fill it in for the playlist.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT,
  description TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam', 'Songs for a long drive');

SELECT * FROM playlists;
```

:::

:::


## Make

Design a table called `gigs` for concerts. Give it a key, a place and a ticket price, add two rows, and show them.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```sql
CREATE TABLE gigs (
  id INTEGER PRIMARY KEY,
  place TEXT,
  price INTEGER
);

INSERT INTO gigs VALUES (1, 'Town Hall', 35);
INSERT INTO gigs VALUES (2, 'The Barn', 20);

SELECT * FROM gigs;
```

:::


## Exit ticket

:::keep-together

**What is a primary key?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A column whose value is different in every row, so each row can be found and pointed at.

:::

