---
order: 2
unit: ask
moveId: sql-where
title: Keep only the rows you want
summary: Filter rows with WHERE, using = for text and > or < for numbers.
language: sql
hook: "Fifteen songs is easy to scan. Fifteen million is not, so we ask the database to do the looking."
---
Last lesson every row came back. Most questions need only some rows: the pop songs, the long ones, the new ones. `WHERE` keeps the rows that pass a test.

## Predict

```step
stage: predict
code: lesson.sql#pop
check:
  type: predict
  q: "Four of the 15 songs are pop. What will this show?"
  options:
    - "4 rows, all with pop in the genre column"
    - "15 rows, with pop first"
    - "1 row, the first pop song"
    - "An error, because pop is not a column"
  actual: "4 rows. WHERE tests every row and keeps only those where the test is true."
```

## Run

```step
stage: run
code: lesson.sql#pop
try: { playground: sql, db: music, starter: "lesson.sql#pop", height: 460 }
```

Run it and compare with your prediction.

| Part | What it does |
|---|---|
| `WHERE genre = 'pop'` | Keeps only rows where the genre column is pop |
| `'pop'` | Text goes in single quotes, like a value |
| `genre` | No quotes: this is a column name |

## Investigate

```step
stage: investigate
code: lesson.sql#long
insight: "WHERE is a test applied to each row. Text values go in quotes, numbers do not, and the columns you show can differ from the column you test."
tasks:
  - check:
      type: number
      q: "Run the query. How many songs are longer than 250 seconds?"
      answer: 4
  - check:
      type: question
      q: "Why does WHERE genre = pop (no quotes) give an error?"
      options:
        - "Without quotes, pop looks like a column name, and there is no such column"
        - "pop is a reserved word"
        - "WHERE only works with numbers"
        - "genre must be in capital letters"
      answer: 0
      explain: "Quotes make a value of text. Without them SQL thinks pop is the name of a column."
  - check:
      type: question
      q: "Which query finds songs released after 2021?"
      options:
        - "SELECT title FROM songs WHERE year > 2021;"
        - "SELECT title FROM songs WHERE year = '> 2021';"
        - "SELECT title FROM songs WHERE > 2021;"
      answer: 0
      feedback:
        - null
        - "The comparison is part of the test, not text."
        - "The test needs a column on the left."
      explain: "A test has a column, a comparison and a value: year > 2021."
```

### Count the long songs

The test works on numbers too.

### Quotes

What do quotes tell SQL?

### Write the test

A test has three parts.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Change the column you test and the value in quotes."
  - "You want WHERE artist = 'Kito'."
check: { type: code, text: "Show the title of every song by Kito.", rules: { contains: ["WHERE artist = 'Kito'"], columns: ["title"], rows: 3 } }
smaller:
  check:
    type: question
    q: "Which test keeps only the soul songs?"
    options:
      - "WHERE genre = 'soul'"
      - "WHERE genre = soul"
      - "WHERE soul = genre"
    answer: 0
    feedback:
      - null
      - "Text needs quotes."
      - "The column goes on the left."
    explain: "Column, equals sign, then the text in quotes."
```

Change the query so it shows the title of every song by Kito.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Pick a column to test: year, seconds or plays work well with > or <."
  - "SELECT title, plays FROM songs WHERE plays > 5000;"
check: { type: code, text: "Write a query with your own WHERE test that finds at least one song.", rules: { contains: ["WHERE"] } }
```

Find a set of songs for a playlist you would make, such as short songs or ones played a lot. Choose the test, write it and run it.

```teacher
summary: Students filter rows with WHERE, using text in quotes and numbers with > and <.
time: 25
timing: "Predict and Run 8 min · Investigate 8 min · Modify and Make 9 min"
goals:
  - I can keep only some rows with WHERE.
  - I can say why text needs quotes and a column name does not.
  - I can compare a number column with > or <.
running:
  - "Predict: the error option catches students who think pop must be a column."
  - "Run: change the genre and run again, then ask what happens with a genre that does not exist (no rows, no error)."
  - "Investigate: the quotes question is the main idea. Ask what SQL does with a word that has no quotes."
stuck:
  - see: "no such column: pop"
    ask: Is pop a column, or a value in a column?
    fix: Put single quotes round the text value.
  - see: "No rows come back."
    ask: How is the genre spelled in the table?
    fix: Match the spelling in the data. Text must match letter for letter.
stretch: Combine two tests (next lesson uses AND) or try year >= 2022.
support: Give the WHERE line with the value missing.
leads: "Next lesson: put the rows in order and show only the top few."
exit:
  q: "What does WHERE do, and why is 'pop' in quotes?"
  a: "It keeps only the rows where the test is true. Quotes show that pop is a value, not a column."
explain: |
  `WHERE` tests each row and keeps the rows where the test is true. A test is a column, a comparison (`=`, `>`, `<`) and a value. Text values go in single quotes. Numbers do not.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Quotes. Ask: is this word a column or a value? Columns have no quotes; text values do."
class:
  activities:
    - at: end
      title: Human filter
      minutes: 3
      do: |
        Read out WHERE tests (such as year > 2020). Students stand if the song on their card passes the test.
```

```code lesson.sql#pop
SELECT title, genre
FROM songs
WHERE genre = 'pop';
```

```code lesson.sql#long
SELECT title, seconds
FROM songs
WHERE seconds > 250;
```

```code lesson.sql#modify
SELECT title
FROM songs
WHERE artist = 'The Dunes';
```

```code lesson.sql#sol-modify
SELECT title
FROM songs
WHERE artist = 'Kito';
```

```code lesson.sql#make
-- Your own test: year, seconds or plays work well with > or <.
SELECT title
FROM songs
WHERE
```

```code lesson.sql#sol-make
SELECT title, plays
FROM songs
WHERE plays > 5000;
```
