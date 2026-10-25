---
order: 7
unit: tables
moveId: sql-insert
title: Add a row
summary: Put a new row into a table with INSERT INTO, then check it with SELECT.
language: sql
hook: "Until now you only looked. A real app also has to save: a new song, a new order, a new sign-up."
---
Everything so far read data. `INSERT INTO` **adds** a row. The queries in this lesson have two parts: the change, then a `SELECT` so you can see what it did.

The change is kept while you work in the playground. **Reset** puts the table back as it started.

## Predict

```step
stage: predict
code: lesson.sql#insert
check:
  type: predict
  q: "The songs table has 15 rows. What will the last line show?"
  options:
    - "16"
    - "15"
    - "1"
    - "An error, because the table is already full"
  actual: "16. The INSERT adds one row to the table, and COUNT(*) counts it with the others."
```

## Run

```step
stage: run
code: lesson.sql#insert
try: { playground: sql, db: music, starter: "lesson.sql#insert", height: 460 }
```

Run it, then run it again without pressing Reset. Read the message.

| Part | What it does |
|---|---|
| `INSERT INTO songs` | Says which table gets the new row |
| `VALUES (...)` | The new row, one value for each column, in the table's column order |
| `SELECT COUNT(*)` | Not part of the change: it checks the result |

The second run fails because id 16 is already used. A key is never repeated.

## Investigate

```step
stage: investigate
code: lesson.sql#partial
insight: "The values must line up with the columns. Name only some columns and the rest are left empty (NULL)."
tasks:
  - check:
      type: question
      q: "Run the query. What does the year column hold for the new row?"
      options:
        - "NULL, which means no value"
        - "0"
        - "2024"
        - "An empty piece of text"
      answer: 0
      feedback:
        - null
        - "SQL never fills in a 0 for you."
        - "Only the columns you named got a value."
        - "Text would need quotes. This column has nothing at all."
      explain: "Columns you leave out are NULL: not zero, not empty text, just no value."
  - check:
      type: question
      q: "Which line adds a song with title 'Dawn' and artist 'Kito', and nothing else?"
      options:
        - "INSERT INTO songs (title, artist) VALUES ('Dawn', 'Kito');"
        - "INSERT INTO songs VALUES ('Dawn', 'Kito');"
        - "INSERT songs (title, artist) ('Dawn', 'Kito');"
      answer: 0
      feedback:
        - null
        - "Without a column list, SQL expects a value for every column."
        - "INSERT INTO and VALUES are both needed."
      explain: "Name the columns in brackets, then give the values in the same order."
```

### Look at the empty columns

Not every column was given a value.

### Which line works?

The values and columns must match.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Change the artist and the genre, and keep the id."
  - "The artist is 'Mira Vale' and the genre is 'pop'."
check: { type: code, text: "Add a song by Mira Vale with id 16, then show it.", rules: { contains: ["INSERT INTO songs", "'Mira Vale'"], columns: ["title", "artist"], rows: 1 } }
smaller:
  check:
    type: question
    q: "The songs table has the columns id, title, artist, genre, year, seconds, plays. Which VALUES fits the table in that order?"
    options:
      - "(16, 'Sparks', 'Mira Vale', 'pop', 2024, 190, 0)"
      - "('Sparks', 16, 'Mira Vale', 'pop', 2024, 190, 0)"
      - "(16, 'Sparks', 'Mira Vale')"
    answer: 0
    feedback:
      - null
      - "The first value goes in the first column, id."
      - "Without a column list you need a value for every column."
    explain: "One value for each column, in the table's order."
```

Change the song so it is by Mira Vale instead of Kito.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Use ids 16 and 17, because the table already has 1 to 15."
  - "Two INSERT lines, or one INSERT with two sets of values."
check: { type: code, text: "Add two songs of your own with ids 16 and 17.", rules: { contains: ["INSERT INTO songs"], rows: 2 } }
```

Add two songs of your own, with ids 16 and 17, then run it. The last line shows the new rows.

```teacher
summary: Students add rows with INSERT INTO, match values to columns, meet NULL, and check the change with SELECT.
time: 25
timing: "Predict and Run 9 min · Investigate 6 min · Modify and Make 10 min"
goals:
  - I can add a row to a table with INSERT INTO ... VALUES.
  - I can match the values to the columns, in order.
  - I can check a change with a SELECT afterwards.
running:
  - "Predict: most students get this. The point is that a query can now change the table."
  - "Run: the second run fails, which is the lesson on keys: an id belongs to one row. Ask why a table would refuse a repeat."
  - "Investigate: NULL is a new idea. Ask students what a missing year should show."
  - "Reset undoes every change, so students can experiment freely."
stuck:
  - see: "UNIQUE constraint failed"
    ask: Has this id been used already?
    fix: Choose an id that is not in the table, or press Reset and run once.
  - see: "table songs has 7 columns but 3 values were supplied"
    ask: How many columns does the table have?
    fix: Give a value for every column, or name the columns you are filling.
  - see: "Text without quotes."
    ask: Which values are text?
    fix: Text values go in single quotes. Numbers do not.
stretch: Add a song with a column list that leaves plays out. What does plays hold?
support: Give the INSERT with one value blank for each task.
leads: "Next lesson: change and remove rows with UPDATE and DELETE, and why WHERE matters."
exit:
  q: "What goes in the brackets after VALUES?"
  a: "One value for each column, in the table's column order, with text in single quotes."
explain: |
  `INSERT INTO table VALUES (...)` adds one row. Give a value for every column in order, or name the columns first: `INSERT INTO table (a, b) VALUES (...)`. Columns you leave out are NULL. Follow a change with a `SELECT` to check it.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Keeping values in column order. Write the column names above the values."
class:
  activities:
    - at: end
      title: Sign-up sheet
      minutes: 4
      do: |
        Students invent a new table for a club sign-up (name, year level, favourite game) and write the INSERT for the person next to them.
```

```code lesson.sql#insert
INSERT INTO songs
VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);

SELECT COUNT(*) FROM songs;
```

```code lesson.sql#partial
INSERT INTO songs (id, title, artist)
VALUES (16, 'Compass', 'Kito');

SELECT id, title, year FROM songs WHERE id = 16;
```

```code lesson.sql#modify
INSERT INTO songs
VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);

SELECT title, artist FROM songs WHERE id = 16;
```

```code lesson.sql#sol-modify
INSERT INTO songs
VALUES (16, 'Compass', 'Mira Vale', 'pop', 2024, 199, 0);

SELECT title, artist FROM songs WHERE id = 16;
```

```code lesson.sql#make
-- Add songs 16 and 17 here.


SELECT id, title FROM songs WHERE id > 15;
```

```code lesson.sql#sol-make
INSERT INTO songs VALUES (16, 'Compass', 'Kito', 'electronic', 2024, 199, 0);
INSERT INTO songs VALUES (17, 'Sparks', 'Mira Vale', 'pop', 2024, 190, 0);

SELECT id, title FROM songs WHERE id > 15;
```
