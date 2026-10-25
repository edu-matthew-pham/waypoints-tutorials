---
order: 3
unit: ask
moveId: sql-order
title: Put the rows in order
summary: Sort with ORDER BY, reverse with DESC, and keep the top few with LIMIT.
language: sql
hook: "Every top ten list is the same question: sort everything, then keep the first ten."
---
A table has no fixed order. `ORDER BY` sorts the rows, and `LIMIT` keeps only the first few. Together they make a top list.

## Predict

```step
stage: predict
code: lesson.sql#top
check:
  type: predict
  q: "What will this query show?"
  options:
    - "The 3 songs played most, the most played first"
    - "The first 3 songs in the table"
    - "The 3 songs played least, the least played first"
    - "All 15 songs, sorted by plays"
  actual: "The 3 most played songs. DESC sorts from biggest to smallest, and LIMIT 3 keeps the first three."
```

## Run

```step
stage: run
code: lesson.sql#top
try: { playground: sql, db: music, starter: "lesson.sql#top", height: 460 }
```

Run it, then delete `DESC` and run it again to see what changes.

| Part | What it does |
|---|---|
| `ORDER BY plays` | Sorts the rows by the plays column, smallest first |
| `DESC` | Reverses the order: biggest first |
| `LIMIT 3` | Keeps only the first three rows |

## Investigate

```step
stage: investigate
code: lesson.sql#oldest
insight: "Rows come back in the order you ask for, and LIMIT counts from the top of that order."
tasks:
  - check:
      type: question
      q: "Without DESC, which song comes first when sorted by seconds?"
      options:
        - "The shortest song"
        - "The longest song"
        - "The first song in the table"
      answer: 0
      explain: "ORDER BY goes from smallest to biggest unless you add DESC."
  - check:
      type: question
      q: "You want the single newest song. What do you need?"
      options:
        - "ORDER BY year DESC LIMIT 1"
        - "ORDER BY year LIMIT 1"
        - "LIMIT 1 ORDER BY year DESC"
      answer: 0
      feedback:
        - null
        - "That gives the oldest song, because the order runs smallest to biggest."
        - "ORDER BY comes before LIMIT."
      explain: "Sort newest first with DESC, then keep one row."
```

### Which comes first?

Smallest first is the default.

### Newest song

Order first, then limit.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "The longest song is the biggest value in seconds."
  - "ORDER BY seconds DESC LIMIT 1."
check: { type: code, text: "Show the title and length of the longest song.", rules: { contains: ["ORDER BY seconds DESC", "LIMIT 1"], rows: 1 } }
smaller:
  check:
    type: question
    q: "Which query shows the shortest song?"
    options:
      - "SELECT title FROM songs ORDER BY seconds LIMIT 1;"
      - "SELECT title FROM songs ORDER BY seconds DESC LIMIT 1;"
      - "SELECT title FROM songs LIMIT 1 ORDER BY seconds;"
    answer: 0
    feedback:
      - null
      - "DESC puts the biggest first, so this is the longest."
      - "ORDER BY comes before LIMIT."
    explain: "Smallest first is the default, so no DESC is needed."
```

Change the query so it shows the title and length of the longest song.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Combine WHERE, ORDER BY and LIMIT in that order."
  - "WHERE comes first, then ORDER BY, then LIMIT."
check: { type: code, text: "Make a top list that uses WHERE, ORDER BY and LIMIT.", rules: { contains: ["WHERE", "ORDER BY", "LIMIT"] } }
```

Make a top list of your own, such as the three most played rock songs. Use `WHERE`, `ORDER BY` and `LIMIT` together.

```teacher
summary: Students sort with ORDER BY, reverse with DESC, keep the top rows with LIMIT, and combine it with WHERE.
time: 25
timing: "Predict and Run 8 min · Investigate 6 min · Modify and Make 11 min"
goals:
  - I can sort rows with ORDER BY and reverse with DESC.
  - I can keep only the first few rows with LIMIT.
  - I can combine WHERE, ORDER BY and LIMIT in the right order.
running:
  - "Predict: the 'first 3 in the table' option shows students who think the table has a built-in order."
  - "Run: delete DESC and run again so the order flips."
  - "Make: the clause order is fixed. Read the query aloud: which rows, in what order, how many."
stuck:
  - see: "syntax error near ORDER"
    ask: Which comes first, WHERE or ORDER BY?
    fix: The order is SELECT, FROM, WHERE, ORDER BY, LIMIT.
  - see: "The wrong end of the list."
    ask: Does the order go smallest first or biggest first?
    fix: Add DESC for biggest first.
stretch: Sort by two columns, such as genre and then plays DESC.
support: Give the query with ORDER BY done and ask only for LIMIT.
leads: "Next lesson: count and add up rows to one answer."
exit:
  q: "What is the order of the parts of a query so far?"
  a: "SELECT, FROM, WHERE, ORDER BY, LIMIT."
explain: |
  `ORDER BY column` sorts rows smallest first. `DESC` flips it. `LIMIT n` keeps the first n rows after sorting. The parts always come in this order: SELECT, FROM, WHERE, ORDER BY, LIMIT.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "The fixed order of the parts. Read the query aloud as a sentence."
class:
  activities:
    - at: end
      title: Top three
      minutes: 4
      do: |
        Pairs invent a top-three question about the songs, swap, and write the query for each other's question.
```

```code lesson.sql#top
SELECT title, plays
FROM songs
ORDER BY plays DESC
LIMIT 3;
```

```code lesson.sql#oldest
SELECT title, year
FROM songs
ORDER BY year
LIMIT 3;
```

```code lesson.sql#modify
SELECT title, seconds
FROM songs
ORDER BY seconds
LIMIT 1;
```

```code lesson.sql#sol-modify
SELECT title, seconds
FROM songs
ORDER BY seconds DESC
LIMIT 1;
```

```code lesson.sql#make
-- A top list: WHERE, then ORDER BY, then LIMIT.
SELECT title, plays
FROM songs
```

```code lesson.sql#sol-make
SELECT title, plays
FROM songs
WHERE genre = 'rock'
ORDER BY plays DESC
LIMIT 3;
```
