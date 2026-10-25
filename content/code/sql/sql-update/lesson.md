---
order: 8
unit: tables
moveId: sql-update
title: Change and remove rows
summary: Fix rows with UPDATE, remove them with DELETE, and always say which rows with WHERE.
language: sql
hook: "One missing WHERE line, and every row in the table changes. Databases do exactly what you ask."
---
`UPDATE` changes values in rows that already exist. `DELETE` removes rows. Both act on **every row** unless you say which with `WHERE`.

## Predict

```step
stage: predict
code: lesson.sql#all
check:
  type: predict
  q: "This change has no WHERE line. What will the last line show?"
  options:
    - "15, because every song now has 0 plays"
    - "1, because only one song was changed"
    - "0, because no song has 0 plays"
    - "An error, because UPDATE needs a WHERE"
  actual: "15. Without WHERE, UPDATE changes every row, so all 15 songs have 0 plays."
```

## Run

```step
stage: run
code: lesson.sql#all
try: { playground: sql, db: music, starter: "lesson.sql#all", height: 460 }
```

Run it, then press **Reset** to put the songs back.

| Part | What it does |
|---|---|
| `UPDATE songs` | Says which table to change |
| `SET plays = 0` | The new value for a column |
| `WHERE` | Not here, which is why every row changed |

## Investigate

```step
stage: investigate
code: lesson.sql#delete
insight: "UPDATE and DELETE both work on the rows that pass WHERE, and on all rows if there is no WHERE. The SELECT after is how you check."
tasks:
  - check:
      type: number
      q: "Run the query. How many songs are left after the folk songs are deleted?"
      answer: 13
  - check:
      type: question
      q: "Which line adds 100 plays to the song with id 3?"
      options:
        - "UPDATE songs SET plays = plays + 100 WHERE id = 3;"
        - "UPDATE songs SET plays = 100 WHERE id = 3;"
        - "UPDATE songs SET plays = plays + 100;"
      answer: 0
      feedback:
        - null
        - "That sets the plays to exactly 100, not 100 more."
        - "There is no WHERE, so every song gets 100 more plays."
      explain: "plays + 100 uses the old value, and WHERE id = 3 picks one row."
```

### Delete the folk songs

Check the count after.

### Add 100 plays

Which rows change?

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Change the column to year, the value to 2018 and the id to 6."
  - "UPDATE songs SET year = 2018 WHERE id = 6;"
check: { type: code, text: "Fix song 6 so its year is 2018, then show its title and year.", rules: { contains: ["UPDATE songs", "WHERE id = 6"], columns: ["title", "year"], rows: 1 } }
smaller:
  check:
    type: question
    q: "Which line sets the genre of song 9 to 'country'?"
    options:
      - "UPDATE songs SET genre = 'country' WHERE id = 9;"
      - "UPDATE songs SET genre = 'country';"
      - "UPDATE genre = 'country' WHERE id = 9;"
    answer: 0
    feedback:
      - null
      - "No WHERE: every song becomes country."
      - "SET needs a table named first, and SET itself."
    explain: "UPDATE the table, SET the column, WHERE picks the row."
```

Song 6 is really from 2018. Change the query so it fixes that and shows the result.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "The songs to remove are the ones with fewer than 2000 plays."
  - "DELETE FROM songs WHERE plays < 2000;"
check: { type: code, text: "Delete the songs with fewer than 2000 plays, then show the songs left.", rules: { contains: ["DELETE FROM songs", "WHERE"], rows: 13 } }
```

Remove the songs that have been played fewer than 2000 times, then show the songs that are left.

```teacher
summary: Students change rows with UPDATE and remove rows with DELETE, and learn that WHERE decides which rows.
time: 25
timing: "Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min"
goals:
  - I can change a value with UPDATE ... SET ... WHERE.
  - I can remove rows with DELETE FROM ... WHERE.
  - I can say what happens when WHERE is left out.
running:
  - "Predict: ask students to vote before running. The no-WHERE slip is the key idea of the lesson."
  - "Run: after the 15, press Reset so students see the table come back. In a real database there is no Reset, so people test with SELECT before they UPDATE or DELETE."
  - "Investigate: plays + 100 uses the old value. Ask what plays = 100 would do instead."
  - "Tip to share: write the WHERE as a SELECT first, check the rows, then change SELECT * to DELETE."
stuck:
  - see: "Every row changed."
    ask: Does your query have a WHERE line?
    fix: Press Reset, add the WHERE line, and run again.
  - see: "Nothing changed."
    ask: Does any row pass your WHERE test?
    fix: Check the id or spelling against the table.
  - see: "syntax error near DELETE"
    ask: Is FROM in the DELETE line?
    fix: It is DELETE FROM table.
stretch: Raise the plays of every pop song by 10% with plays * 1.1, then look at the results.
support: Give the UPDATE with the WHERE line missing and ask students to complete it.
leads: "Next lesson: designing a table, with keys that make each row unique."
exit:
  q: "What happens if you write DELETE FROM songs; with no WHERE?"
  a: "Every row in the table is removed. WHERE chooses which rows."
explain: |
  `UPDATE table SET column = value WHERE test` changes the rows that pass the test. `DELETE FROM table WHERE test` removes them. With no `WHERE`, they act on every row. Check the rows with a `SELECT` first.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Remembering WHERE. Teach the habit: write it as a SELECT first, then change the first word."
class:
  activities:
    - at: end
      title: Select first
      minutes: 4
      do: |
        Pairs write a DELETE for a rule (songs older than 2018). They write the matching SELECT first and agree on the rows before they change the word.
```

```code lesson.sql#all
UPDATE songs
SET plays = 0;

SELECT COUNT(*) FROM songs WHERE plays = 0;
```

```code lesson.sql#delete
DELETE FROM songs
WHERE genre = 'folk';

SELECT COUNT(*) FROM songs;
```

```code lesson.sql#modify
UPDATE songs
SET plays = 0
WHERE id = 1;

SELECT title, plays FROM songs WHERE id = 1;
```

```code lesson.sql#sol-modify
UPDATE songs
SET year = 2018
WHERE id = 6;

SELECT title, year FROM songs WHERE id = 6;
```

```code lesson.sql#make
-- Delete the songs with fewer than 2000 plays here.


SELECT title FROM songs;
```

```code lesson.sql#sol-make
DELETE FROM songs
WHERE plays < 2000;

SELECT title FROM songs;
```
