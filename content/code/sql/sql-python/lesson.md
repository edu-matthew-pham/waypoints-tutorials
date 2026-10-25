---
order: 11
unit: python
moveId: sql-python
title: Ask the database from Python
summary: Run a SQL query from a Python program, loop over the rows it returns, and pass values in safely with ?.
language: python
hook: "Every app that saves anything has a program in the middle: it asks the database, then does something with the answer."
---
Until now you typed SQL straight into the database. An app does it from a program. Python's `sqlite3` module talks to the same SQLite you have been using.

The first lines of every program here set up the music library for you. Copy them as they are. The part to read is the loop at the bottom.

## Predict

```step
stage: predict
code: lesson.py#pop
check:
  type: predict
  q: "Four songs are pop. What will the loop print?"
  options:
    - "Four lines, each one a pair like ('Paper Planes Home', 5400)"
    - "One line: 4"
    - "Four lines with only the titles"
    - "An error, because SQL cannot be used inside Python"
  actual: "Four lines, each a pair. conn.execute gives back the rows, and each row is a (title, plays) pair, just like a row in the results table."
```

## Run

```step
stage: run
code: lesson.py#pop
try: { playground: python, starter: "lesson.py#pop", files: ["../../../../data/sql/music.sql"], height: 420 }
```

Run it and compare with your prediction.

| Part | What it does |
|---|---|
| `conn = sqlite3.connect(":memory:")` | Opens a database held in memory |
| `conn.executescript(open("music.sql").read())` | Fills it with the music library (copy this) |
| `conn.execute("SELECT ...")` | Sends a SQL query and gets the rows back |
| `for row in ...` | Goes through the rows one at a time |

## Investigate

```step
stage: investigate
code: lesson.py#parts
insight: "Each row arrives as a pair you can take apart by position. The SQL does the finding; Python does what you want with the answer."
tasks:
  - check:
      type: question
      q: "In `for row in conn.execute(\"SELECT title, plays FROM songs\")`, what is row[1]?"
      options:
        - "The plays of that song"
        - "The title of that song"
        - "The second song in the table"
        - "The number 1"
      answer: 0
      feedback:
        - null
        - "The title is the first column in the SELECT, so it is row[0]."
        - "row is one song. The number picks a column of that song."
        - "Square brackets pick a column by position."
      explain: "Positions count from 0 along the SELECT's columns: title is row[0], plays is row[1]."
  - check:
      type: question
      q: "A program asks the user for a genre and joins it into the query text with +. What can go wrong?"
      options:
        - "A genre containing a quote can break the query, or change what it does"
        - "Nothing, because + always works"
        - "The database refuses text from input()"
      answer: 0
      explain: "The typed text becomes part of the SQL. A ? placeholder passes the value separately, so it is always treated as a value and never as SQL."
```

### Take a row apart

Count along the columns.

### A safer way

Where does the user's text end up?

## Modify

```step
stage: modify
try: { playground: python, starter: "lesson.py#modify", files: ["../../../../data/sql/music.sql"], height: 420 }
hint:
  - "Change pop to rock in the query, and plays to seconds."
  - "SELECT title, seconds FROM songs WHERE genre = 'rock'"
check: { type: code, text: "Print the title and length of every rock song.", rules: { contains: ["'rock'", "seconds"] } }
smaller:
  check:
    type: question
    q: "Which query text finds the soul songs?"
    options:
      - "SELECT title FROM songs WHERE genre = 'soul'"
      - "SELECT title FROM songs WHERE genre = soul"
      - "SELECT soul FROM songs"
    answer: 0
    feedback:
      - null
      - "Text in SQL needs single quotes. The whole query is already inside double quotes in Python."
      - "soul is a value, not a column."
    explain: "Same SQL as before, written inside a Python string."
```

Change the program so it prints the title and length in seconds of every rock song.

## Make

```step
stage: make
try: { playground: python, starter: "lesson.py#make", files: ["../../../../data/sql/music.sql"], height: 460 }
hint:
  - "Ask with input(), then pass the answer in as (genre,) after the query."
  - "conn.execute(\"SELECT title FROM songs WHERE genre = ?\", (genre,))"
check: { type: code, text: "Ask for a genre and print its titles, passing the genre in with ?.", rules: { contains: ["input(", "?", "(genre,)"] } }
```

Make a tiny song finder. Ask the user for a genre, then print the title of every song in it. Pass the genre in with `?`.

```teacher
summary: Students run SQL from Python with sqlite3, loop over the rows, take a row apart by position and pass a value in with ?.
time: 30
timing: "Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min"
goals:
  - I can run a query from a Python program and loop over the rows.
  - I can take a row apart by position.
  - I can pass a typed value into a query with ?.
running:
  - "Predict: students may expect only titles. The pair shows that a row is a whole row, just like the results table."
  - "Run: the first four lines are copied, not explained. Say so, so nobody gets stuck on open().read()."
  - "Investigate: keep the placeholder idea at the level of 'text typed by a person must never become part of the SQL'."
  - "Make: the query string stays fixed and the genre goes in separately."
stuck:
  - see: "FileNotFoundError: music.sql"
    ask: Did the program load this lesson's files?
    fix: Use the Get this lesson's files button on the playground, then run again.
  - see: "A row prints with brackets and quotes."
    ask: What does row hold?
    fix: row is a pair. Print row[0] to get just the title.
  - see: "sqlite3.ProgrammingError about the number of bindings"
    ask: How many ? are in the query and how many values are passed?
    fix: "One value for each ?, in a pair of brackets with a comma, such as (genre,)."
stretch: Let the user type a genre, then print the number of songs in it with COUNT(*).
support: Give the loop and ask only for the query.
leads: "Next: a small web app that keeps its data in a database (Flask with a database)."
exit:
  q: "Why pass a typed genre with ? instead of joining it into the query with +?"
  a: "So the typed text is always a value and can never change the SQL itself."
explain: |
  `conn.execute("SQL")` sends a query and gives back the rows. Each row is a pair (a tuple) you can take apart by position. `?` in the query marks a value, passed separately as `(value,)`, so what a person types can never become SQL.
solutions:
  step-4: lesson.py#sol-modify
  step-5: lesson.py#sol-make
struggle: "Moving between the two languages. Say which one each line is written in: the quoted part is SQL, the rest is Python."
class:
  activities:
    - at: end
      title: Two languages
      minutes: 4
      do: |
        Show the loop. Students colour the SQL in one colour and the Python in another, then explain what each part sends or receives.
```

```code lesson.py#setup
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())
```

```code lesson.py#pop
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row)
```

```code lesson.py#parts
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], "has", row[1], "plays")
```

```code lesson.py#modify
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], row[1])
```

```code lesson.py#sol-modify
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, seconds FROM songs WHERE genre = 'rock'"):
    print(row[0], row[1])
```

```code lesson.py#make
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

# Ask for a genre, then print the title of each song in it.
```

```code lesson.py#sol-make
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

genre = input("Genre? ")
for row in conn.execute("SELECT title FROM songs WHERE genre = ?", (genre,)):
    print(row[0])
```
