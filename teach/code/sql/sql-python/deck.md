---
marp: true
theme: default
html: true
---

# Ask the database from Python

SQL and databases · SQL from Python

<!-- Speaker note: Students run SQL from Python with sqlite3, loop over the rows, take a row apart by position and pass a value in with ?. About 30 minutes (Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can run a query from a Python program and loop over the rows.
- I can take a row apart by position.
- I can pass a typed value into a query with ?.

---

## Why it matters

> Every app that saves anything has a program in the middle: it asks the database, then does something with the answer.

<!-- Speaker note: Until now you typed SQL straight into the database. An app does it from a program. Python's `sqlite3` module talks to the same SQLite you have been using. The first lines of every program here set up the music library for you. Copy them as they are. The part to read is the loop at the bottom. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row)
```

**Four songs are pop. What will the loop print?**

- An error, because SQL cannot be used inside Python
- Four lines, each one a pair like ('Paper Planes Home', 5400)
- One line: 4
- Four lines with only the titles

<!-- Speaker note: What happens: Four lines, each a pair. conn.execute gives back the rows, and each row is a (title, plays) pair, just like a row in the results table. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students may expect only titles. The pair shows that a row is a whole row, just like the results table. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Four lines, each a pair. conn.execute gives back the rows, and each row is a (title, plays) pair, just like a row in the results table.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-python/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-python/?full=step-2#step-2)

<!-- Speaker note: Run it and compare with your prediction. | Part | What it does | |---|---| | `conn = sqlite3.connect(":memory:")` | Opens a database held in memory | | `conn.executescript(open("music.sql").read())` | Fills it with the music library (copy this) | | `conn.execute("SELECT ...")` | Sends a SQL query and gets the rows back | | `for row in ...` | Goes through the rows one at a time | -->

<!-- Speaker note: Teacher: the first four lines are copied, not explained. Say so, so nobody gets stuck on open().read(). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], "has", row[1], "plays")
```

<!-- Speaker note: What this step is for: Each row arrives as a pair you can take apart by position. The SQL does the finding; Python does what you want with the answer. -->

<!-- Speaker note: Teacher: keep the placeholder idea at the level of 'text typed by a person must never become part of the SQL'. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Take a row apart

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], "has", row[1], "plays")
```

</div>
<div>

**In `for row in conn.execute("SELECT title, plays FROM songs")`, what is row[1]?**

- The plays of that song
- The number 1
- The title of that song
- The second song in the table

* Answer: The plays of that song

</div>
</div>

<!-- Speaker note: Positions count from 0 along the SELECT's columns: title is row[0], plays is row[1]. -->

<style scoped>section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A safer way

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.executescript(open("music.sql").read())

for row in conn.execute("SELECT title, plays FROM songs WHERE genre = 'pop'"):
    print(row[0], "has", row[1], "plays")
```

</div>
<div>

**A program asks the user for a genre and joins it into the query text with +. What can go wrong?**

- The database refuses text from input()
- A genre containing a quote can break the query, or change what it does
- Nothing, because + always works

* Answer: A genre containing a quote can break the query, or change what it does

</div>
</div>

<!-- Speaker note: The typed text becomes part of the SQL. A ? placeholder passes the value separately, so it is always treated as a value and never as SQL. -->

<style scoped>section { font-size: 21px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the program so it prints the title and length in seconds of every rock song.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-python/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change pop to rock in the query, and plays to seconds. / SELECT title, seconds FROM songs WHERE genre = 'rock' For students who need more support: Give the loop and ask only for the query. For early finishers: Let the user type a genre, then print the number of songs in it with COUNT(*). The hard part, on purpose: Moving between the two languages. Say which one each line is written in: the quoted part is SQL, the rest is Python. When students get stuck: FileNotFoundError: music.sql Ask: Did the program load this lesson's files? Fix: Use the Get this lesson's files button on the playground, then run again. / A row prints with brackets and quotes. Ask: What does row hold? Fix: row is a pair. Print row[0] to get just the title. / sqlite3.ProgrammingError about the number of bindings Ask: How many ? are in the query and how many values are passed? Fix: One value for each ?, in a pair of brackets with a comma, such as (genre,). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Make a tiny song finder. Ask the user for a genre, then print the title of every song in it. Pass the genre in with `?`.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-python/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Ask with input(), then pass the answer in as (genre,) after the query. / conn.execute("SELECT title FROM songs WHERE genre = ?", (genre,)) -->

<!-- Speaker note: Teacher: the query string stays fixed and the genre goes in separately. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Two languages <span style="font-size:.6em;color:#64748b">(4 min)</span>

Show the loop. Students colour the SQL in one colour and the Python in another, then explain what each part sends or receives.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why pass a typed genre with ? instead of joining it into the query with +?**

* So the typed text is always a value and can never change the SQL itself.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: a small web app that keeps its data in a database (Flask with a database). -->
