---
title: "Ask the database from Python"
subtitle: "SQL and databases · SQL from Python · Lesson 11"
---

# Ask the database from Python

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every app that saves anything has a program in the middle: it asks the database, then does something with the answer.


:::teacher-note

**In one sentence:** Students run SQL from Python with sqlite3, loop over the rows, take a row apart by position and pass a value in with ?.

**Students should be able to say:** I can run a query from a Python program and loop over the rows. I can take a row apart by position. I can pass a typed value into a query with ?.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row)
```

:::keep-together

**Four songs are pop. What will the loop print?**

☐ An error, because SQL cannot be used inside Python

☐ Four lines, each one a pair like ('Paper Planes Home', 5400)

☐ One line: 4

☐ Four lines with only the titles

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Four lines, each a pair. conn.execute gives back the rows, and each row is a (title, plays) pair, just like a row in the results table.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], "has", row[1], "plays")
```

:::keep-together

### Take a row apart

**In `for row in conn.execute("SELECT title, plays FROM songs")`, what is row[1]?**

☐ The plays of that song

☐ The number 1

☐ The title of that song

☐ The second song in the table

:::


:::teacher-note

**Answer:** The plays of that song

Positions count from 0 along the SELECT's columns: title is row[0], plays is row[1].

:::


:::keep-together

### A safer way

**A program asks the user for a genre and joins it into the query text with +. What can go wrong?**

☐ The database refuses text from input()

☐ A genre containing a quote can break the query, or change what it does

☐ Nothing, because + always works

:::


:::teacher-note

**Answer:** A genre containing a quote can break the query, or change what it does

The typed text becomes part of the SQL. A ? placeholder passes the value separately, so it is always treated as a value and never as SQL.

:::


:::typical

## Modify

Change the program so it prints the title and length in seconds of every rock song.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, seconds FROM songs WHERE genre = 'rock'"):
    print(row[0], row[1])
```

:::

:::


## Make

Make a tiny song finder. Ask the user for a genre, then print the title of every song in it. Pass the genre in with `?`.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

genre = input("Genre? ")
for row in conn.execute("SELECT title FROM songs WHERE genre = ?", (genre,)):
    print(row[0])
```

:::


## Exit ticket

:::keep-together

**Why pass a typed genre with ? instead of joining it into the query with +?**

{{lines-3}}

:::


:::teacher-note

**Answer:** So the typed text is always a value and can never change the SQL itself.

:::

