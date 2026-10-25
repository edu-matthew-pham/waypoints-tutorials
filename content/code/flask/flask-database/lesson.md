---
order: 7
unit: database
optional: true
title: Keep the club in a database
summary: "Move the club's members from a CSV file into a SQLite database, so the app asks for exactly the rows it needs."
language: python
hook: "A file is read from the top every time. A database finds the rows you ask for."
---
This lesson swaps the CSV file for a **database**, using the SQL from the SQL course (lessons 1 to 8 first, please). The app looks almost the same. Only three functions change: one opens the database, one reads the members with a `SELECT`, and one adds a member with an `INSERT`.

The database is a file called `club.db`. It stays between Runs and reloads, like `members.csv` did. Open the **Files** tab to see it (it is not text, so it shows as a file you cannot read).

One new detail: `group` is a reserved word in SQL, so the column is called `team`.

## Predict

```step
stage: predict
code: club.py#predict
check:
  type: predict
  q: "What does it print?"
  options:
    - "2"
    - "1"
    - "Ada, Sam"
    - "An error, because the table was never saved"
  actual: "2. Each INSERT adds a row, and COUNT(*) counts them. The database here lives in memory, so it starts empty every time."
```

## Run

```step
stage: run
code: club.py#run
try: { playground: python, starter: "club.py#run", height: 560 }
check: { type: reflect, text: "I joined, pressed Run again (and reloaded the page), and the member was still there." }
```

Join a few members, then press **Run** and reload. They are still there, now stored in `club.db`.

| Part | What it does |
|---|---|
| `sqlite3.connect("club.db")` | Opens the database file, making it the first time |
| `CREATE TABLE IF NOT EXISTS` | Makes the table once, and does nothing after that |
| `SELECT name, team FROM members` | Reads the rows the page needs |
| `INSERT ... VALUES (?, ?)` | Adds a member. The two values go in separately |
| `conn.commit()` | Saves the change into the file |

## Investigate

```step
stage: investigate
code: club.py#run
insight: "A database does the finding and the saving. The app asks in SQL, passes values with ?, and commits changes so they last."
tasks:
  - check:
      type: question
      q: "A member joins but is gone after Run. The INSERT line is there. What is missing?"
      options:
        - "conn.commit(), which saves the change into the file"
        - "A semicolon after the SQL"
        - "conn.open()"
        - "A second INSERT"
      answer: 0
      feedback:
        - null
        - "Python does not need one, and the INSERT ran fine."
        - "There is no such call. connect() already opened it."
        - "More rows would not save the first."
      explain: "An INSERT changes the database in memory. commit() writes it into club.db."
  - check:
      type: question
      q: "Why is the name passed as (name, team) after the query, not joined into it?"
      options:
        - "So what a person types is always a value and can never change the SQL"
        - "Because Python cannot join text"
        - "To make the query shorter"
      answer: 0
      explain: "A name like Robert'); DROP TABLE members;-- is just a name when it is passed separately."
```

### The missing line

What makes a change last?

### Passing the values

Where does the typed text end up?

## Modify

```step
stage: modify
try: { playground: python, starter: "club.py#modify", height: 560 }
hint:
  - "The order is in the SELECT in load_members."
  - "Add DESC after ORDER BY id."
check: { type: code, text: "Show the newest member first.", rules: { contains: ["ORDER BY id DESC"] } }
smaller:
  check:
    type: question
    q: "Which query gives the newest member first, if ids go up as members join?"
    options:
      - "SELECT name, team FROM members ORDER BY id DESC"
      - "SELECT name, team FROM members ORDER BY id"
      - "SELECT name, team FROM members LIMIT 1"
    answer: 0
    feedback:
      - null
      - "That is oldest first."
      - "That gives one row, and not the newest."
    explain: "The biggest id joined last, and DESC puts the biggest first."
```

Change `load_members` so the newest member is at the top of the list.

## Make

```step
stage: make
try: { playground: python, starter: "club.py#make", height: 560 }
hint:
  - "Open the database, run SELECT COUNT(*) FROM members, and return the number as text."
  - "conn.execute(\"SELECT COUNT(*) FROM members\").fetchone()[0] gives the number."
check: { type: code, text: "Add a /count page that shows how many members the club has, using COUNT(*).", rules: { contains: ["/count", "COUNT(*)"] } }
```

Add a page at `/count` that says how many members the club has. Let the database do the counting.

```teacher
summary: "Students move the club app from a CSV file to a SQLite database file: CREATE TABLE IF NOT EXISTS, SELECT to read, INSERT with ? and commit to save."
time: 40
timing: "Predict and Run 10 min · Investigate 8 min · Modify and Make 20 min"
goals:
  - I can keep an app's data in a SQLite database file.
  - I can read rows with SELECT and add a row with INSERT and ?.
  - I can say why commit is needed.
before: |
  This is an optional extension. Students should have done SQL lessons 1 to 8 (SELECT, WHERE, INSERT) and Keep the sign-ups. `club.db` is a real SQLite file kept in the browser with the course's other files, so it survives Run and a reload. It cannot be read in the Files tab. `group` is a reserved word in SQL, hence the column `team`. The Make step asks the database to count, which is the point: SQL finds, Python shows.
running:
  - "Predict: it is the memory database, so the answer is the same every run."
  - "Run: join twice, press Run, reload. The members are still there."
  - "Investigate: take the commit line out and show that the member disappears. Ask why."
  - "Make: students reuse the db() helper. A function that opens, runs and closes is the pattern."
stuck:
  - see: "A member vanishes after Run."
    ask: Is there a commit after the INSERT?
    fix: Add conn.commit() before conn.close().
  - see: "sqlite3.OperationalError about a missing column"
    ask: What is the column called in the table?
    fix: The column is team, not group. group is reserved in SQL.
  - see: "The table already exists with the old columns."
    ask: Did you change the CREATE TABLE after the first Run?
    fix: Delete club.db in the Files tab and run again.
stretch: Add a WHERE so a group page shows only one group's members.
support: Give load_members and ask for the INSERT.
leads: "Next: back to the Flask course, or on to the APIs lessons."
exit:
  q: "Why does a web app use a database instead of reading a file?"
  a: "The database finds and changes just the rows needed, can be asked questions in SQL, and keeps working as the data grows."
explain: |
  `sqlite3.connect("club.db")` opens a database file. `conn.execute(sql, values)` runs SQL, with `?` marking each value. `fetchall()` returns the rows. `conn.commit()` saves changes into the file.
solutions:
  step-4: club.py#sol-modify
  step-5: club.py#sol-make
struggle: "Remembering the order: open, run, commit, close. Write it as a four-line recipe on the board."
class:
  activities:
    - at: end
      title: Spot the SQL
      minutes: 4
      do: |
        Students colour the SQL inside the Python and explain which function reads and which function writes.
```

```code club.py#predict
import sqlite3

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE members (name TEXT)")
conn.execute("INSERT INTO members VALUES ('Ada')")
conn.execute("INSERT INTO members VALUES ('Sam')")
print(conn.execute("SELECT COUNT(*) FROM members").fetchone()[0])
```

```code club.py#run
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

```code club.py#modify
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

```code club.py#sol-modify
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

```code club.py#make
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


# Add a /count page here: it shows how many members the club has.


app.run()
```

```code club.py#sol-make
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
