---
title: "Keep the club in a database"
subtitle: "Web apps with Flask · A database behind the app · Lesson 7"
---

# Keep the club in a database

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A file is read from the top every time. A database finds the rows you ask for.


:::teacher-note

**In one sentence:** Students move the club app from a CSV file to a SQLite database file: CREATE TABLE IF NOT EXISTS, SELECT to read, INSERT with ? and commit to save.

**Students should be able to say:** I can keep an app's data in a SQLite database file. I can read rows with SELECT and add a row with INSERT and ?. I can say why commit is needed.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE members (name TEXT)")
conn.execute("INSERT INTO members VALUES ('Ada')")
conn.execute("INSERT INTO members VALUES ('Sam')")
print(conn.execute("SELECT COUNT(*) FROM members").fetchone()[0])
```

:::keep-together

**What does it print?**

☐ An error, because the table was never saved

☐ Ada, Sam

☐ 1

☐ 2

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 2. Each INSERT adds a row, and COUNT(*) counts them. The database here lives in memory, so it starts empty every time.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
import sqlite3
from flask import Flask, render_template_string, request, redirect

app = Flask(__name__)
PAGE = """<h1>Chess club</h1>
<h2>Members</h2>
<ul>
{% for m in members %}
  <li>{{ m["name"] }} ({{ m["team"] }})</li>
{% endfor %}
</ul>
<h2>Join the club</h2>
{% if error %}<p style="color: crimson">{{ error }}</p>{% endif %}
<form method="post" action="/join">
  <label for="name">Name</label>
  <input id="name" name="name">
  <label for="group">Group</label>
  <select id="group" name="group">
    <option>Beginners</option>
    <option>Players</option>
    <option>Champions</option>
  </select>
  <button>Join</button>
</form>"""


def db():
    conn = sqlite3.connect("club.db")
    conn.row_factory = sqlite3.Row
    conn.execute("CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY, name TEXT, team TEXT)")
    return conn


def load_members():
    conn = db()
    rows = conn.execute("SELECT name, team FROM members ORDER BY id").fetchall()
    conn.close()
    return rows


def save_member(name, team):
    conn = db()
    conn.execute("INSERT INTO members (name, team) VALUES (?, ?)", (name, team))
    conn.commit()
    conn.close()


@app.route("/")
def home():
    return render_template_string(PAGE, members=load_members())


@app.route("/join", methods=["POST"])
def join():
    name = request.form["name"].strip()
    group = request.form["group"]
    if name == "":
        return render_template_string(PAGE, members=load_members(), error="Please type your name.")
    save_member(name, group)
    return redirect("/")


app.run()
```

:::keep-together

### The missing line

**A member joins but is gone after Run. The INSERT line is there. What is missing?**

☐ A semicolon after the SQL

☐ conn.commit(), which saves the change into the file

☐ conn.open()

☐ A second INSERT

:::


:::teacher-note

**Answer:** conn.commit(), which saves the change into the file

An INSERT changes the database in memory. commit() writes it into club.db.

:::


:::keep-together

### Passing the values

**Why is the name passed as (name, team) after the query, not joined into it?**

☐ So what a person types is always a value and can never change the SQL

☐ Because Python cannot join text

☐ To make the query shorter

:::


:::teacher-note

**Answer:** So what a person types is always a value and can never change the SQL

A name like Robert'); DROP TABLE members;-- is just a name when it is passed separately.

:::


:::typical

## Modify

Change `load_members` so the newest member is at the top of the list.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import sqlite3
from flask import Flask, render_template_string, request, redirect

app = Flask(__name__)
PAGE = """<h1>Chess club</h1>
<h2>Members</h2>
<ul>
{% for m in members %}
  <li>{{ m["name"] }} ({{ m["team"] }})</li>
{% endfor %}
</ul>
<h2>Join the club</h2>
{% if error %}<p style="color: crimson">{{ error }}</p>{% endif %}
<form method="post" action="/join">
  <label for="name">Name</label>
  <input id="name" name="name">
  <label for="group">Group</label>
  <select id="group" name="group">
    <option>Beginners</option>
    <option>Players</option>
    <option>Champions</option>
  </select>
  <button>Join</button>
</form>"""


def db():
    conn = sqlite3.connect("club.db")
    conn.row_factory = sqlite3.Row
    conn.execute("CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY, name TEXT, team TEXT)")
    return conn


def load_members():
    conn = db()
    rows = conn.execute("SELECT name, team FROM members ORDER BY id DESC").fetchall()
    conn.close()
    return rows


def save_member(name, team):
    conn = db()
    conn.execute("INSERT INTO members (name, team) VALUES (?, ?)", (name, team))
    conn.commit()
    conn.close()


@app.route("/")
def home():
    return render_template_string(PAGE, members=load_members())


@app.route("/join", methods=["POST"])
def join():
    name = request.form["name"].strip()
    group = request.form["group"]
    if name == "":
        return render_template_string(PAGE, members=load_members(), error="Please type your name.")
    save_member(name, group)
    return redirect("/")


app.run()
```

:::

:::


## Make

Add a page at `/count` that says how many members the club has. Let the database do the counting.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import sqlite3
from flask import Flask, render_template_string, request, redirect

app = Flask(__name__)
PAGE = """<h1>Chess club</h1>
<h2>Members</h2>
<ul>
{% for m in members %}
  <li>{{ m["name"] }} ({{ m["team"] }})</li>
{% endfor %}
</ul>
<h2>Join the club</h2>
{% if error %}<p style="color: crimson">{{ error }}</p>{% endif %}
<form method="post" action="/join">
  <label for="name">Name</label>
  <input id="name" name="name">
  <label for="group">Group</label>
  <select id="group" name="group">
    <option>Beginners</option>
    <option>Players</option>
    <option>Champions</option>
  </select>
  <button>Join</button>
</form>"""


def db():
    conn = sqlite3.connect("club.db")
    conn.row_factory = sqlite3.Row
    conn.execute("CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY, name TEXT, team TEXT)")
    return conn


def load_members():
    conn = db()
    rows = conn.execute("SELECT name, team FROM members ORDER BY id").fetchall()
    conn.close()
    return rows


def save_member(name, team):
    conn = db()
    conn.execute("INSERT INTO members (name, team) VALUES (?, ?)", (name, team))
    conn.commit()
    conn.close()


@app.route("/")
def home():
    return render_template_string(PAGE, members=load_members())


@app.route("/join", methods=["POST"])
def join():
    name = request.form["name"].strip()
    group = request.form["group"]
    if name == "":
        return render_template_string(PAGE, members=load_members(), error="Please type your name.")
    save_member(name, group)
    return redirect("/")


@app.route("/count")
def count():
    conn = db()
    n = conn.execute("SELECT COUNT(*) FROM members").fetchone()[0]
    conn.close()
    return str(n) + " members"


app.run()
```

:::


## Exit ticket

:::keep-together

**Why does a web app use a database instead of reading a file?**

{{lines-3}}

:::


:::teacher-note

**Answer:** The database finds and changes just the rows needed, can be asked questions in SQL, and keeps working as the data grows.

:::

