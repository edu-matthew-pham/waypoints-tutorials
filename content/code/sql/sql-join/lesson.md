---
order: 6
unit: tables
moveId: sql-join
title: Join two tables
summary: Combine rows from two tables with JOIN ... ON, matching a column they share.
language: sql
hook: "A song knows its artist's name. It does not know where the artist is from. That lives in a different table."
---
Real databases keep each kind of thing in its own table, so a fact is stored once. The music library now has two tables: `songs` and `artists`. The artist's name is in both. A **JOIN** lines up each song with its artist by matching that name.

## Predict

```step
stage: predict
code: lesson.sql#join
check:
  type: predict
  q: "There are 15 songs, and every artist is in the artists table. What will this show?"
  options:
    - "15 rows: each song with its artist's country"
    - "5 rows: one for each artist"
    - "75 rows: every song with every artist"
    - "An error, because the columns are in two tables"
  actual: "15 rows. For each song, JOIN finds the artists row where the names match, and puts the two together."
```

Open **Tables in this database** first to see both tables.

## Run

```step
stage: run
code: lesson.sql#join
try: { playground: sql, db: music, starter: "lesson.sql#join", height: 460 }
```

Run it and compare with your prediction.

| Part | What it does |
|---|---|
| `songs.title` | The title column of the songs table: table name, a dot, column name |
| `FROM songs JOIN artists` | Brings the two tables together |
| `ON songs.artist = artists.name` | Says which columns must match for a song and an artist to be paired |

## Investigate

```step
stage: investigate
code: lesson.sql#where
insight: "ON says which rows belong together. Without it, every song would be paired with every artist."
tasks:
  - check:
      type: number
      q: "Run the query. How many songs are by artists from Australia?"
      answer: 4
  - check:
      type: question
      q: "What does ON songs.artist = artists.name do?"
      options:
        - "Pairs each song with the artist row whose name matches"
        - "Copies the artist table into the songs table"
        - "Sorts the songs by artist"
        - "Keeps only songs with a country"
      answer: 0
      explain: "ON is the matching rule. Each song is paired with the artist row where the two names are equal."
```

### Count the Australian songs

A join can be filtered with WHERE like any other query.

### Read the matching rule

Say it aloud: a song and an artist go together when...

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Change artists.formed to the column you want."
  - "The column is artists.country."
check: { type: code, text: "Show each song's title and its artist's country.", rules: { contains: ["JOIN artists", "ON songs.artist = artists.name"], columns: ["title", "country"], rows: 15 } }
smaller:
  check:
    type: question
    q: "Which column from the artists table would show where an artist is from?"
    options:
      - "artists.country"
      - "songs.country"
      - "artists.title"
    answer: 0
    feedback:
      - null
      - "The songs table has no country column."
      - "Title belongs to the songs table."
    explain: "Write the table the column lives in, a dot, then the column."
```

Change the query so it shows each song's title and its artist's country.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Join, then GROUP BY the country."
  - "SELECT artists.country, COUNT(*) FROM songs JOIN artists ON songs.artist = artists.name GROUP BY artists.country;"
check: { type: code, text: "Count the songs from each country using JOIN and GROUP BY.", rules: { contains: ["JOIN", "GROUP BY"], rows: 5 } }
```

Find out how many songs the library has from each country. Join the tables, then group.

```teacher
summary: Students combine two tables with JOIN ... ON and then filter or group the joined rows.
time: 30
timing: "Predict and Run 9 min · Investigate 7 min · Modify and Make 14 min"
goals:
  - I can say why data is split into separate tables.
  - I can join two tables with ON, matching a column they share.
  - I can name a column with its table, such as songs.title.
running:
  - "Predict: the 75 rows option is the idea that sinks a join with no ON. Do not reveal why yet; it comes back in the stuck list."
  - "Run: show both tables on the table list first. Ask which column is the same in both."
  - "Investigate: students read ON aloud as a sentence."
  - "Make: the pattern is join first, then GROUP BY or WHERE like any query."
stuck:
  - see: "ambiguous column name"
    ask: Which table does that column belong to?
    fix: Put the table name and a dot in front of it.
  - see: "Far too many rows."
    ask: Does the join have an ON line?
    fix: Add ON so each song is only paired with its own artist.
  - see: "A song is missing from the result."
    ask: Does its artist appear in the artists table, spelled the same?
    fix: A join only keeps rows that match. Check the spelling in both tables.
stretch: Show each song with the artist's formed year, newest bands first.
support: Give the whole JOIN line and ask students to choose the columns.
leads: "Next lesson: change the data itself with INSERT, UPDATE and DELETE."
exit:
  q: "Why keep artists in their own table instead of a country column in songs?"
  a: "A country is stored once for each artist, so a mistake is fixed in one place and nothing is repeated."
explain: |
  A `JOIN` pairs rows from two tables. `ON` says which columns must match. A column is written `table.column` so SQL knows which table it means. After the join the result is an ordinary table: you can filter it with `WHERE`, group it with `GROUP BY` and sort it.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Picturing what the join does. Use two paper lists and draw lines between the matching rows."
class:
  activities:
    - at: start
      title: Match the lists
      minutes: 5
      do: |
        Give pairs a printed list of songs and a list of artists. They draw a line from each song to its artist's country, then run the join to check.
```

```code lesson.sql#join
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name;
```

```code lesson.sql#where
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name
WHERE artists.country = 'Australia';
```

```code lesson.sql#modify
SELECT songs.title, artists.formed
FROM songs
JOIN artists ON songs.artist = artists.name;
```

```code lesson.sql#sol-modify
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name;
```

```code lesson.sql#make
-- How many songs from each country? Join, then group.
SELECT artists.country, COUNT(*)
FROM songs
```

```code lesson.sql#sol-make
SELECT artists.country, COUNT(*)
FROM songs
JOIN artists ON songs.artist = artists.name
GROUP BY artists.country;
```
