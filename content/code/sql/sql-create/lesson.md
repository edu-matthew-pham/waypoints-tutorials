---
order: 9
unit: tables
moveId: sql-create
title: Design your own table
summary: Make a table with CREATE TABLE, choose a type for each column, and give every row a key.
language: sql
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-sql" 8198
  url: http://127.0.0.1:8198/index.html
  ready: SQL query
  layout: full
pacing:
  keyDelayMs: 40
explainClip:
  query: { db: music, zoom: 1.6 }
  caption: "CREATE TABLE makes a new, empty table."
  clip:
    - caption: "A table of pets with a key."
    - type: { into: "SQL query", text: "CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT);" }
    - click: "Run ▶"
    - wait: 700
    - caption: "Add a pet."
    - type: { into: "SQL query", text: "INSERT INTO pets (name) VALUES ('Biscuit');" }
    - click: "Run ▶"
    - wait: 700
    - caption: "Read it back."
    - type: { into: "SQL query", text: "SELECT * FROM pets;" }
    - click: "Run ▶"
    - wait: 700
    - expect: { selector: "#result", contains: "Biscuit" }
    - caption: "The table now holds the row."
    - wait: 1800
hook: "Every table you have used was designed by someone. Now you design one."
---
A table starts as a list of columns. For each one you choose a **name** and a **type**: `INTEGER` for whole numbers, `TEXT` for text. One column is the **primary key**: its value is different in every row, so a row can always be found by it.

## Predict

```step
stage: predict
code: lesson.sql#create
check:
  type: predict
  q: "What will the last line show?"
  options:
    - "One row with three columns: id, name and owner"
    - "An empty table with three column names"
    - "Three rows, one for each column"
    - "An error, because the table does not exist yet"
  actual: "One row with three columns. CREATE TABLE makes the table, INSERT adds a row, and SELECT shows it."
```

## Run

```step
stage: run
code: lesson.sql#create
try: { playground: sql, db: music, starter: "lesson.sql#create", height: 460 }
```

Run it and open **Tables in this database**. Then run it again and read the message.

| Part | What it does |
|---|---|
| `CREATE TABLE playlists (...)` | Makes a new table with these columns |
| `name TEXT` | A column called name that holds text |
| `id INTEGER PRIMARY KEY` | A whole-number column that is different in every row |

The second run fails because the table is already made. Reset starts again.

## Investigate

```step
stage: investigate
code: lesson.sql#create
insight: "A column's type says what it holds, and the primary key makes each row unique so it can be found and linked to."
tasks:
  - check:
      type: question
      q: "A table of songs needs a column for how many plays each song has. Which type?"
      options:
        - "INTEGER"
        - "TEXT"
        - "PRIMARY KEY"
      answer: 0
      feedback:
        - null
        - "Plays is a number you might add up, so keep it as a number."
        - "PRIMARY KEY is a rule about a column, not a type."
      explain: "Plays is a whole number, so INTEGER. TEXT would not add up."
  - check:
      type: question
      q: "Why does every table get an id column as its primary key?"
      options:
        - "Two people can share a name, but an id belongs to one row only"
        - "SQL cannot store text without it"
        - "It makes the table run faster for every query"
      answer: 0
      explain: "Names repeat, but an id is never repeated, so it is a safe way to point at exactly one row."
```

### Pick the type

Numbers you add up are numbers.

### Why a key?

What goes wrong if two rows look the same?

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Add description TEXT to the columns, then give the INSERT a fourth value."
  - "The new row needs four values in the same order as the columns."
check: { type: code, text: "Add a description column to the playlists table and fill it in.", rules: { contains: ["description TEXT", "PRIMARY KEY"], columns: ["id", "name", "owner", "description"], rows: 1 } }
smaller:
  check:
    type: question
    q: "The table is (id INTEGER PRIMARY KEY, name TEXT, owner TEXT). Which row fits it?"
    options:
      - "(1, 'Road trip', 'Sam')"
      - "('Road trip', 1, 'Sam')"
      - "(1, 'Road trip')"
    answer: 0
    feedback:
      - null
      - "The first value goes in the first column, id."
      - "There is a value missing for owner."
    explain: "One value for each column, in column order."
```

Add a fourth column called `description`, and fill it in for the playlist.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Name the columns first: id as the key, then a place and a price."
  - "CREATE TABLE gigs (id INTEGER PRIMARY KEY, place TEXT, price INTEGER);"
check: { type: code, text: "Create a table called gigs with a primary key, add two rows and show them.", rules: { contains: ["CREATE TABLE gigs", "PRIMARY KEY"], rows: 2 } }
```

Design a table called `gigs` for concerts. Give it a key, a place and a ticket price, add two rows, and show them.

```teacher
summary: Students create a table, choose a type for each column, give it a primary key and fill it with INSERT.
time: 25
timing: "Predict and Run 8 min · Investigate 6 min · Modify and Make 11 min"
goals:
  - I can create a table with CREATE TABLE.
  - I can choose INTEGER or TEXT for a column.
  - I can say what a primary key is for.
running:
  - "Predict: the empty-table option is a good one. A table with no rows still has its columns."
  - "Run: the second run fails. Ask what the database is protecting."
  - "Investigate: ask students for a column that could not be a key (name, year level) and why."
  - "Make: let students choose their own columns before they type. A good table is one you could fill from a real list."
stuck:
  - see: "table playlists already exists"
    ask: Did you run the CREATE line twice?
    fix: Press Reset and run once.
  - see: "A syntax error near a bracket."
    ask: Is there a comma between each column, and none after the last?
    fix: Commas separate columns. The last column has none.
  - see: "A mismatch of values and columns."
    ask: How many columns does the table have?
    fix: Give one value for each column.
stretch: Add a second table of your own and join it to the first.
support: Give the CREATE TABLE and ask students to write the INSERT.
leads: "Next lesson: link two tables with a key, so a review knows which song it is about."
exit:
  q: "What is a primary key?"
  a: "A column whose value is different in every row, so each row can be found and pointed at."
explain: |
  `CREATE TABLE name (column TYPE, ...)` makes a table. `INTEGER` holds whole numbers and `TEXT` holds text. A `PRIMARY KEY` column is different in every row. Add rows with `INSERT INTO`.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Choosing columns. Start from a real list on paper and ask what one row is."
class:
  activities:
    - at: start
      title: Design on paper
      minutes: 5
      do: |
        Pairs sketch a table for a lost-property box: the columns, a type for each, and one example row. Swap and check that each row would have its own id.
```

```code lesson.sql#create
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

```code lesson.sql#modify
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

```code lesson.sql#sol-modify
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT,
  description TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam', 'Songs for a long drive');

SELECT * FROM playlists;
```

```code lesson.sql#make
-- Create the gigs table, add two rows, then show them.


SELECT * FROM gigs;
```

```code lesson.sql#sol-make
CREATE TABLE gigs (
  id INTEGER PRIMARY KEY,
  place TEXT,
  price INTEGER
);

INSERT INTO gigs VALUES (1, 'Town Hall', 35);
INSERT INTO gigs VALUES (2, 'The Barn', 20);

SELECT * FROM gigs;
```
