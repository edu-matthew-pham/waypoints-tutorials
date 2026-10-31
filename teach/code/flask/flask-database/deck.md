---
marp: true
theme: default
html: true
---

# Keep the club in a database

Web apps with Flask · A database behind the app

<!-- Speaker note: Students move the club app from a CSV file to a SQLite database file: CREATE TABLE IF NOT EXISTS, SELECT to read, INSERT with ? and commit to save. About 40 minutes (Predict and Run 10 min · Investigate 8 min · Modify and Make 20 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can keep an app's data in a SQLite database file.
- I can read rows with SELECT and add a row with INSERT and ?.
- I can say why commit is needed.

<!-- Speaker note: Before class: This is an optional extension. Students should have done SQL lessons 1 to 8 (SELECT, WHERE, INSERT) and Keep the sign-ups. `club.db` is a real SQLite file kept in the browser with the course's other files, so it survives Run and a reload. It cannot be read in the Files tab. `group` is a reserved word in SQL, hence the column `team`. The Make step asks the database to count, which is the point: SQL finds, Python shows. -->

---

## Why it matters

> A file is read from the top every time. A database finds the rows you ask for.

<!-- Speaker note: This lesson swaps the CSV file for a **database**, using the SQL from the SQL course (lessons 1 to 8 first, please). The app looks almost the same. Only three functions change: one opens the database, one reads the members with a `SELECT`, and one adds a member with an `INSERT`. The database is a file called `club.db`. It stays between Runs and reloads, like `members.csv` did. Open the **Files** tab to see it (it is not text, so it shows as a file you cannot read). One new detail: `group` is a reserved word in SQL, so the column is called `team`. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE members (name TEXT)")
conn.execute("INSERT INTO members VALUES ('Ada')")
conn.execute("INSERT INTO members VALUES ('Sam')")
print(conn.execute("SELECT COUNT(*) FROM members").fetchone()[0])
```

**What does it print?**

- An error, because the table was never saved
- Ada, Sam
- 1
- 2

<!-- Speaker note: What happens: 2. Each INSERT adds a row, and COUNT(*) counts them. The database here lives in memory, so it starts empty every time. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: it is the memory database, so the answer is the same every run. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 2. Each INSERT adds a row, and COUNT(*) counts them. The database here lives in memory, so it starts empty every time.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/flask/flask-database/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/flask/flask-database/?full=step-2#step-2)

<!-- Speaker note: Join a few members, then press **Run** and reload. They are still there, now stored in `club.db`. | Part | What it does | |---|---| | `sqlite3.connect("club.db")` | Opens the database file, making it the first time | | `CREATE TABLE IF NOT EXISTS` | Makes the table once, and does nothing after that | | `SELECT name, team FROM members` | Reads the rows the page needs | | `INSERT ... VALUES (?, ?)` | Adds a member. The two values go in separately | | `conn.commit()` | Saves the change into the file | Students should be able to say: I joined, pressed Run again (and reloaded the page), and the member was still there. -->

<!-- Speaker note: Teacher: join twice, press Run, reload. The members are still there. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

_The program is 64 lines long: open it in the tutorial and read it together._

[Open this step](https://tutorials.learningwaypoints.com/code/flask/flask-database/?full=step-3#step-3)

<!-- Speaker note: What this step is for: A database does the finding and the saving. The app asks in SQL, passes values with ?, and commits changes so they last. -->

<!-- Speaker note: Teacher: take the commit line out and show that the member disappears. Ask why. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The missing line

**A member joins but is gone after Run. The INSERT line is there. What is missing?**

- A semicolon after the SQL
- conn.commit(), which saves the change into the file
- conn.open()
- A second INSERT

* Answer: conn.commit(), which saves the change into the file

<!-- Speaker note: An INSERT changes the database in memory. commit() writes it into club.db. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Passing the values

**Why is the name passed as (name, team) after the query, not joined into it?**

- So what a person types is always a value and can never change the SQL
- Because Python cannot join text
- To make the query shorter

* Answer: So what a person types is always a value and can never change the SQL

<!-- Speaker note: A name like Robert'); DROP TABLE members;-- is just a name when it is passed separately. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change `load_members` so the newest member is at the top of the list.

[Open this step](https://tutorials.learningwaypoints.com/code/flask/flask-database/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: The order is in the SELECT in load_members. / Add DESC after ORDER BY id. For students who need more support: Give load_members and ask for the INSERT. For early finishers: Add a WHERE so a group page shows only one group's members. The hard part, on purpose: Remembering the order: open, run, commit, close. Write it as a four-line recipe on the board. When students get stuck: A member vanishes after Run. Ask: Is there a commit after the INSERT? Fix: Add conn.commit() before conn.close(). / sqlite3.OperationalError about a missing column Ask: What is the column called in the table? Fix: The column is team, not group. group is reserved in SQL. / The table already exists with the old columns. Ask: Did you change the CREATE TABLE after the first Run? Fix: Delete club.db in the Files tab and run again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Add a page at `/count` that says how many members the club has. Let the database do the counting.

[Open this step](https://tutorials.learningwaypoints.com/code/flask/flask-database/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Open the database, run SELECT COUNT(*) FROM members, and return the number as text. / conn.execute("SELECT COUNT(*) FROM members").fetchone()[0] gives the number. -->

<!-- Speaker note: Teacher: students reuse the db() helper. A function that opens, runs and closes is the pattern. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Spot the SQL <span style="font-size:.6em;color:#64748b">(4 min)</span>

Students colour the SQL inside the Python and explain which function reads and which function writes.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why does a web app use a database instead of reading a file?**

* The database finds and changes just the rows needed, can be asked questions in SQL, and keeps working as the data grows.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: back to the Flask course, or on to the APIs lessons. -->
