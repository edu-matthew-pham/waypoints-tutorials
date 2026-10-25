---
order: 4
unit: summarise
moveId: sql-count
title: Count and add up
summary: Turn many rows into one answer with COUNT, SUM, AVG and MAX.
language: sql
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-sql" 8193
  url: http://127.0.0.1:8193/index.html
  ready: SQL query
  layout: full
pacing:
  keyDelayMs: 40
explainClip:
  query: { db: music, zoom: 1.6 }
  caption: "COUNT counts rows instead of listing them."
  clip:
    - caption: "How many rock songs?"
    - type: { into: "SQL query", text: "SELECT COUNT(*) FROM songs WHERE genre = 'rock';" }
    - click: "Run ▶"
    - wait: 700
    - expect: { selector: "#result", contains: "3" }
    - caption: "One number comes back, not a list."
    - wait: 1800
hook: "How many songs, how many plays, how long on average: the database can answer without showing you a single song."
---
So far a query gave back rows from the table. A **summary function** turns many rows into **one** value: `COUNT(*)` counts rows, `SUM(plays)` adds a column up, `AVG` averages it and `MAX` finds the biggest.

## Predict

```step
stage: predict
code: lesson.sql#count
check:
  type: predict
  q: "Four songs are pop. What will this query show?"
  options:
    - "One row with the number 4"
    - "Four rows, one for each pop song"
    - "One row with the first pop song"
    - "An error, because COUNT needs a column name"
  actual: "One row with the number 4. COUNT(*) counts the rows that pass WHERE, and the answer is a single value."
```

## Run

```step
stage: run
code: lesson.sql#count
try: { playground: sql, db: music, starter: "lesson.sql#count", height: 460 }
```

Run it, then take off the `WHERE` line and run it again.

| Part | What it does |
|---|---|
| `COUNT(*)` | Counts rows. The star means "whole rows" |
| `WHERE genre = 'pop'` | Filters first, so only pop rows are counted |

## Investigate

```step
stage: investigate
code: lesson.sql#sum
insight: "A summary function squashes the rows that pass WHERE into one value. WHERE decides which rows go in."
tasks:
  - check:
      type: number
      q: "Run the query. How many plays do the rock songs have in total?"
      answer: 7900
  - check:
      type: question
      q: "Which query gives the length of the longest song?"
      options:
        - "SELECT MAX(seconds) FROM songs;"
        - "SELECT seconds FROM songs MAX;"
        - "SELECT COUNT(seconds) FROM songs;"
      answer: 0
      feedback:
        - null
        - "The function wraps the column, inside SELECT."
        - "COUNT says how many rows there are, not the biggest value."
      explain: "MAX(column) gives the biggest value in the column."
```

### Add them up

SUM works on the rows that pass WHERE.

### Pick the function

Each function answers a different question.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Keep COUNT(*) and change the test in WHERE."
  - "You want WHERE artist = 'Kito'."
check: { type: code, text: "Count the songs by Kito.", rules: { contains: ["COUNT(*)", "WHERE artist = 'Kito'"], rows: 1 } }
smaller:
  check:
    type: question
    q: "Which query counts the songs from 2022?"
    options:
      - "SELECT COUNT(*) FROM songs WHERE year = 2022;"
      - "SELECT year FROM songs COUNT(*);"
      - "SELECT COUNT(2022) FROM songs;"
    answer: 0
    feedback:
      - null
      - "COUNT goes after SELECT."
      - "Filtering is WHERE's job. COUNT counts what is left."
    explain: "Filter with WHERE, then count with COUNT(*)."
```

Change the query so it counts the songs by Kito.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Pick one of SUM, AVG or MAX, and one column."
  - "SELECT AVG(seconds) FROM songs WHERE genre = 'folk';"
check: { type: code, text: "Write a query that uses SUM, AVG or MAX and gives one row.", rules: { rows: 1 } }
```

Ask the library a question that has one number as its answer, such as the average length of a pop song. Use `SUM`, `AVG` or `MAX`.

```teacher
summary: Students summarise many rows into one value with COUNT, SUM, AVG and MAX, filtered by WHERE.
time: 25
timing: "Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min"
goals:
  - I can count rows with COUNT(*).
  - I can add up, average or find the biggest value in a column.
  - I can use WHERE to choose which rows are summarised.
running:
  - "Predict: the four-rows option is the main slip, expecting a list. Ask how many values a count can be."
  - "Run: take off WHERE and run again so students see 15."
  - "Investigate: MAX, SUM and COUNT answer different questions. Read each aloud as a question."
stuck:
  - see: "A column name and COUNT(*) together give an odd result."
    ask: Is the answer one value or a list?
    fix: Summaries give one row. Mixing in a plain column needs GROUP BY, which is the next lesson.
  - see: "COUNT(*) shows 15 when it should show fewer."
    ask: Did the WHERE line stay?
    fix: Add the WHERE line back before the semicolon.
stretch: Show the count and the average length in one query.
support: Give the whole query with the function name missing.
leads: "Next lesson: one count for each genre at once, with GROUP BY."
exit:
  q: "What is the difference between SELECT title and SELECT COUNT(*)?"
  a: "SELECT title gives one row for each song. COUNT(*) gives one row with how many rows there are."
explain: |
  `COUNT(*)`, `SUM(col)`, `AVG(col)`, `MIN(col)` and `MAX(col)` turn many rows into one value. WHERE filters first, so the summary covers only the rows that pass.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Expecting a list back. Ask how many values a count can be."
class:
  activities:
    - at: end
      title: Guess the number
      minutes: 3
      do: |
        Pairs guess a summary (the average length of a rock song), then run it. Who was closest?
```

```code lesson.sql#count
SELECT COUNT(*)
FROM songs
WHERE genre = 'pop';
```

```code lesson.sql#sum
SELECT SUM(plays)
FROM songs
WHERE genre = 'rock';
```

```code lesson.sql#modify
SELECT COUNT(*)
FROM songs
WHERE genre = 'pop';
```

```code lesson.sql#sol-modify
SELECT COUNT(*)
FROM songs
WHERE artist = 'Kito';
```

```code lesson.sql#make
-- One number as the answer: SUM, AVG or MAX.
SELECT
FROM songs;
```

```code lesson.sql#sol-make
SELECT AVG(seconds)
FROM songs
WHERE genre = 'pop';
```
