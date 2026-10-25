---
order: 5
unit: summarise
moveId: sql-group
title: One answer for each group
summary: Use GROUP BY to count or add up for each genre, artist or year at once.
language: sql
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-sql" 8194
  url: http://127.0.0.1:8194/index.html
  ready: SQL query
  layout: full
pacing:
  keyDelayMs: 40
explainClip:
  query: { db: music, zoom: 1.6 }
  caption: "GROUP BY makes one row for each group."
  clip:
    - caption: "Songs in each genre."
    - type: { into: "SQL query", text: "SELECT genre, COUNT(*) AS songs FROM songs GROUP BY genre;" }
    - click: "Run ▶"
    - wait: 700
    - expect: { selector: "#result", contains: "electronic" }
    - caption: "Each genre appears once, with its own count."
    - wait: 1800
hook: "How many songs in each genre? You could run five queries, or ask once."
---
`COUNT(*)` gave one answer for the whole table. `GROUP BY` sorts the rows into piles, one pile for each value in a column, and gives one answer for **each pile**.

## Predict

```step
stage: predict
code: lesson.sql#genres
check:
  type: predict
  q: "There are five different genres. What will this show?"
  options:
    - "5 rows: each genre with its number of songs"
    - "1 row with the number 15"
    - "15 rows, one for each song"
    - "5 rows, all with the number 1"
  actual: "5 rows. The songs are put in a pile for each genre, and COUNT(*) counts each pile."
```

## Run

```step
stage: run
code: lesson.sql#genres
try: { playground: sql, db: music, starter: "lesson.sql#genres", height: 460 }
```

Run it and add up the counts in your head. They should come to 15.

| Part | What it does |
|---|---|
| `SELECT genre, COUNT(*)` | Shows the group's name and its count |
| `GROUP BY genre` | Makes one pile for each genre |

## Investigate

```step
stage: investigate
code: lesson.sql#avg
insight: "The column you group by is the one to show beside the summary. WHERE filters rows before the piles are made."
tasks:
  - check:
      type: number
      q: "Run the query. How many different artists are in the table?"
      answer: 5
  - check:
      type: question
      q: "You want the total plays for each artist. Which query?"
      options:
        - "SELECT artist, SUM(plays) FROM songs GROUP BY artist;"
        - "SELECT artist, SUM(plays) FROM songs;"
        - "SELECT SUM(plays) FROM songs GROUP BY plays;"
      answer: 0
      feedback:
        - null
        - "Without GROUP BY there is only one pile, so the artist beside it means nothing."
        - "That makes a pile for each number of plays, not for each artist."
      explain: "Show the artist, add up the plays, and group by the artist."
```

### Count the piles

One row for each pile.

### Total for each artist

Group by the column you want a row for.

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Change COUNT(*) to SUM(plays)."
  - "SELECT genre, SUM(plays) FROM songs GROUP BY genre;"
check: { type: code, text: "Show the total plays for each genre.", rules: { contains: ["SUM(plays)", "GROUP BY genre"], rows: 5 } }
smaller:
  check:
    type: question
    q: "Which query gives the average length for each genre?"
    options:
      - "SELECT genre, AVG(seconds) FROM songs GROUP BY genre;"
      - "SELECT genre, AVG(seconds) FROM songs;"
      - "SELECT AVG(genre) FROM songs GROUP BY seconds;"
    answer: 0
    feedback:
      - null
      - "Without GROUP BY, the whole table is one pile."
      - "Group by the thing you want a row for, and average the number."
    explain: "Show the genre, average the seconds, group by genre."
```

Change the query so it shows the total plays for each genre.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Group by artist or year, then ORDER BY the summary."
  - "Add ORDER BY COUNT(*) DESC after GROUP BY."
check: { type: code, text: "Write a grouped query that is sorted with ORDER BY.", rules: { contains: ["GROUP BY", "ORDER BY"] } }
```

Find out which artist has the most songs in the library. Group, count, sort and keep the top one.

```teacher
summary: Students use GROUP BY to get a summary for each value of a column, and sort the groups.
time: 30
timing: "Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min"
goals:
  - I can use GROUP BY to get one answer for each group.
  - I can show the group name beside its summary.
  - I can sort groups with ORDER BY.
running:
  - "Predict: draw five piles on the board and sort a few song cards into them before anyone runs it."
  - "Run: the counts add to 15, which shows no song is lost or counted twice."
  - "Make: ORDER BY can use the summary, as in ORDER BY COUNT(*) DESC."
stuck:
  - see: "Only one row, with an odd genre."
    ask: Is there a GROUP BY?
    fix: Add GROUP BY and the column you want a row for.
  - see: "GROUP BY comes before WHERE and gives an error."
    ask: What is the order of the parts?
    fix: SELECT, FROM, WHERE, GROUP BY, ORDER BY, LIMIT.
stretch: Add WHERE year >= 2020 and see how the counts change.
support: Give the query with GROUP BY filled in and ask for the summary.
leads: "Next lesson: a second table, and joining the two."
exit:
  q: "What does GROUP BY genre do?"
  a: "It makes one pile for each genre, so a summary such as COUNT(*) gives one answer for each genre."
explain: |
  `GROUP BY column` makes a pile for each value of the column and gives each pile one summary row. Show the grouped column beside the summary. The order of the parts is SELECT, FROM, WHERE, GROUP BY, ORDER BY, LIMIT.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Seeing why the count is for a pile, not the table. Sort cards into piles by hand first."
class:
  activities:
    - at: start
      title: Piles of cards
      minutes: 4
      do: |
        Give pairs printed song cards. They sort them into genre piles and count each pile, then run the query to check.
```

```code lesson.sql#genres
SELECT genre, COUNT(*)
FROM songs
GROUP BY genre;
```

```code lesson.sql#avg
SELECT artist, AVG(seconds)
FROM songs
GROUP BY artist;
```

```code lesson.sql#modify
SELECT genre, COUNT(*)
FROM songs
GROUP BY genre;
```

```code lesson.sql#sol-modify
SELECT genre, SUM(plays)
FROM songs
GROUP BY genre;
```

```code lesson.sql#make
-- Which artist has the most songs? Group, count, sort, keep one.
SELECT artist, COUNT(*)
FROM songs
```

```code lesson.sql#sol-make
SELECT artist, COUNT(*)
FROM songs
GROUP BY artist
ORDER BY COUNT(*) DESC
LIMIT 1;
```
