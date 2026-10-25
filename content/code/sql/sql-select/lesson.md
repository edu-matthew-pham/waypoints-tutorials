---
order: 1
unit: ask
moveId: sql-select
title: Look inside a table
summary: Read data from a table with SELECT, choosing the columns you want.
language: sql
hook: "A music app knows thousands of songs. Asking it for just the titles takes one line."
---
A **database** stores information in **tables**, like a spreadsheet with strict rules. **SQL** is the language you use to ask a table a question. The question comes back as a new table.

Each table has **columns** (the kinds of thing stored, such as `title`) and **rows** (one song each). This course uses a small music library.

## Predict

```step
stage: predict
code: lesson.sql#two
check:
  type: predict
  q: "The songs table has 15 songs. What will this query show?"
  options:
    - "15 rows with two columns: title and artist"
    - "2 rows with all the columns"
    - "15 rows with every column"
    - "1 row with the title and artist"
  actual: "15 rows with two columns. SELECT picks the columns, and with no filter every row comes back."
```

`SELECT` chooses columns. `FROM` says which table.

## Run

```step
stage: run
code: lesson.sql#two
try: { playground: sql, db: music, starter: "lesson.sql#two", height: 460 }
```

Run it and open **Tables in this database** to see every column in `songs`.

| Part | What it does |
|---|---|
| `SELECT title, artist` | Picks two columns, separated by a comma |
| `FROM songs` | Says which table to read |
| `;` | Ends the query |

## Investigate

```step
stage: investigate
code: lesson.sql#star
insight: "SELECT names the columns you want. A star means all of them. The rows stay the same either way."
tasks:
  - check:
      type: number
      q: "Run the query. How many columns does the table have?"
      answer: 7
  - check:
      type: question
      q: "You want only the year of every song. Which query does that?"
      options:
        - "SELECT year FROM songs;"
        - "SELECT songs FROM year;"
        - "FROM songs SELECT year;"
        - "SELECT FROM songs year;"
      answer: 0
      feedback:
        - null
        - "The column comes after SELECT and the table after FROM."
        - "SELECT comes first, then FROM."
        - "Name the column straight after SELECT."
      explain: "SELECT, then the column, then FROM and the table."
```

### Count the columns

`*` means every column.

### Pick the right query

The order of the words matters.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "The columns you want go after SELECT, separated by commas."
  - "You want title, then genre."
check: { type: code, text: "Show only the title and genre of every song.", rules: { contains: ["SELECT title, genre", "FROM songs"], columns: ["title", "genre"], rows: 15 } }
smaller:
  check:
    type: question
    q: "Which query shows only title and plays?"
    options:
      - "SELECT title, plays FROM songs;"
      - "SELECT title plays FROM songs;"
      - "SELECT * FROM songs;"
    answer: 0
    feedback:
      - null
      - "Columns are separated by commas."
      - "A star gives every column, not just two."
    explain: "List the columns after SELECT with commas between them."
```

Change the query so it shows each song's title and genre, and nothing else.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Pick three columns you would put on a playlist card."
  - "SELECT column, column, column FROM songs;"
check: { type: code, text: "Write a query that shows exactly three columns from songs.", rules: { contains: ["FROM songs"] } }
```

Write your own query for a playlist card. Choose three columns that make a good card and run it.

```teacher
summary: Students meet tables, rows and columns, and write SELECT with named columns and with a star.
time: 25
timing: "Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min"
goals:
  - I can say what a table, a row and a column are.
  - I can choose columns with SELECT and name the table with FROM.
  - I can use * to get every column.
running:
  - "Predict: the wrong options mix up rows and columns. Ask how many columns the answer has before anyone runs it."
  - "Run: open the table list so students see the real column names before they type any."
  - "Investigate: the star is shorthand, and the row count does not change."
stuck:
  - see: "no such column"
    ask: Does that word appear in the table list?
    fix: Copy the column name exactly as it is shown.
  - see: "A comma after the last column."
    ask: What comes after the last column name?
    fix: Commas go between columns. FROM comes straight after the last one.
stretch: Show the columns in a different order and see that the table follows.
support: Give the query with one column filled in and ask for the second.
leads: "Next lesson: show only the rows that match, such as one genre."
exit:
  q: "What is the difference between a row and a column in the songs table?"
  a: "A row is one song with all its details. A column is one kind of detail, such as title, for every song."
explain: |
  A table has columns (title, artist, year...) and rows (one per song). `SELECT` picks columns and `FROM` names the table. `SELECT *` means every column. Without a filter every row comes back.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Putting SELECT, the columns and FROM in order. Say the query aloud: select these, from that table."
class:
  activities:
    - at: end
      title: Name that column
      minutes: 3
      do: |
        One student names a detail of a song. Everyone else says which column holds it.
```

```code lesson.sql#two
SELECT title, artist
FROM songs;
```

```code lesson.sql#star
SELECT *
FROM songs;
```

```code lesson.sql#modify
SELECT title, artist
FROM songs;
```

```code lesson.sql#sol-modify
SELECT title, genre
FROM songs;
```

```code lesson.sql#make
-- Choose three columns for a playlist card.
SELECT
FROM songs;
```

```code lesson.sql#sol-make
SELECT title, artist, year
FROM songs;
```
