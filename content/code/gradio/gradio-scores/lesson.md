---
order: 5
unit: quiz
optional: true
recipes: [pandas]
title: A quiz with a scoreboard
summary: "Save every quiz score in a SQLite database, and show the top scores in a table that is still there after the app restarts."
language: python
hook: "A quiz is more fun when it remembers who got what."
---
Optional, and it uses the SQL course (lessons 1 to 8 first). It also uses pandas, from Data detective lesson 3: `pd.DataFrame(...)` turns rows into a table the app can show. Last lesson the quiz marked your answers and forgot you. Now each score is saved in a database file, `scores.db`, and a **scoreboard** table shows the best five. The database is the memory: the app asks it in SQL and shows the answer.

## Predict

```step
stage: predict
code: quiz.py#predict
check:
  type: predict
  q: "What does it print?"
  options:
    - "Sam, then Ada, on separate lines"
    - "Ada, then Sam"
    - "Sam, Ada and Zoe"
    - "Zoe, then Ada"
  actual: "Sam, then Ada. ORDER BY score DESC puts the highest score first, and LIMIT 2 keeps the first two rows."
```

## Run

```step
stage: run
code: quiz.py#run
try: { playground: python, starter: "quiz.py#run", height: 640 }
check: { type: reflect, text: "I played twice with different names, restarted the app with Run, and the scoreboard still had both." }
```

Play the quiz as yourself, then as a friend. Press **Run** again: the scoreboard is still there, because it is stored in `scores.db`.

| Part | What it does |
|---|---|
| `db()` | Opens `scores.db` and makes the table the first time |
| `INSERT INTO scores ... VALUES (?, ?)` | Saves one attempt |
| `ORDER BY score DESC, id LIMIT 5` | The five best, with ties going to whoever played first |
| `pd.DataFrame(rows, columns=[...])` | Turns the rows into a table the app can show |

## Investigate

```step
stage: investigate
code: quiz.py#run
insight: "The function saves, then asks the database for the answer it shows. Keeping the data in a database file means it outlasts the app."
tasks:
  - check:
      type: question
      q: "Two players both score 3. Why does `, id` come after `score DESC`?"
      options:
        - "It puts the player who finished first above the other"
        - "It makes the scores bigger"
        - "It removes one of the two players"
        - "It is needed for LIMIT to work"
      answer: 0
      feedback:
        - null
        - "It only decides the order of rows that tie."
        - "Both rows stay."
        - "LIMIT works without it."
      explain: "id goes up as each score is saved, so for equal scores the smaller id (the earlier attempt) comes first."
  - check:
      type: question
      q: "What would happen to the scoreboard if the scores were kept in a list inside the program instead?"
      options:
        - "It would be empty again every time the app started"
        - "Nothing, lists are saved automatically"
        - "It would show more scores"
      answer: 0
      explain: "A list lives in memory while the program runs. A database file lives on until you delete it."
```

### Ties

Two players with the same score.

### Why a database?

Where does a list live?

## Modify

```step
stage: modify
try: { playground: python, starter: "quiz.py#modify", height: 640 }
hint:
  - "Look at the LIMIT in top_scores."
  - "Change LIMIT 5 to LIMIT 3."
check: { type: code, text: "Show only the top three scores.", rules: { contains: ["LIMIT 3"] } }
smaller:
  check:
    type: question
    q: "Which change makes the scoreboard show the best two scores?"
    options:
      - "LIMIT 2"
      - "ORDER BY 2"
      - "WHERE score = 2"
    answer: 0
    feedback:
      - null
      - "ORDER BY sorts. It does not count rows."
      - "That keeps only the players who scored exactly 2."
    explain: "LIMIT keeps the first rows of the sorted result."
```

Change the scoreboard so it shows only the top three scores.

## Make

```step
stage: make
try: { playground: python, starter: "quiz.py#make", height: 640 }
hint:
  - "You want one row for each player, with their best score."
  - "SELECT name, MAX(score) FROM scores GROUP BY name ORDER BY MAX(score) DESC LIMIT 5"
check: { type: code, text: "Show each player once, with their best score.", rules: { contains: ["GROUP BY name", "MAX(score)"] } }
```

Right now one player can fill the scoreboard by playing again and again. Change the query so each player appears once, with their best score.

```teacher
summary: "Students save quiz scores to a SQLite file and show the top scores in a table: INSERT with ?, ORDER BY and LIMIT for the scoreboard, then GROUP BY for each player's best."
time: 35
timing: "Predict and Run 10 min · Investigate 7 min · Modify and Make 18 min"
goals:
  - I can save an app's results in a database.
  - I can show the best results with ORDER BY and LIMIT.
  - I can show each player's best score with GROUP BY and MAX.
before: |
  Optional extension for students who have done SQL lessons 1 to 8 and the Gradio quiz. `scores.db` is a real SQLite file kept in the browser with the course's files, so the scoreboard survives Run and a reload. The scoreboard table is a pandas DataFrame built from the rows, as in Data detective. The Make step is the GROUP BY idea from SQL lesson 5, now inside an app.
running:
  - "Predict: ask for the order before anyone runs it. The wrong options mix up ascending order and the LIMIT."
  - "Run: pairs play as each other and watch the table fill. Press Run again to show the scores survive."
  - "Make: let students find the cheating problem first (play five times as the same name), then fix it."
stuck:
  - see: "The scoreboard is empty."
    ask: Have you pressed Submit with a name typed?
    fix: A row is only saved when the quiz is submitted.
  - see: "A column error from the database."
    ask: What are the columns called in the scores table?
    fix: They are name, score and id.
  - see: "The old scores are in the way."
    ask: Which file holds the scores?
    fix: Delete scores.db in the Files tab and run again.
stretch: Add a column for the time of the attempt using datetime('now').
support: Give the SELECT and ask for the change to the LIMIT.
leads: "Next: on to machine learning, or back to the Flask course for a web version."
exit:
  q: "Why does the quiz save scores in a database instead of a list?"
  a: "A list disappears when the program stops. A database file keeps the scores between runs."
explain: |
  `INSERT INTO scores (name, score) VALUES (?, ?)` saves an attempt and `commit()` keeps it. `ORDER BY score DESC LIMIT 5` finds the five best. `GROUP BY name` with `MAX(score)` gives each player's best.
solutions:
  step-4: quiz.py#sol-modify
  step-5: quiz.py#sol-make
struggle: "Seeing which part is SQL and which is Python. Colour the SQL strings in one colour."
class:
  activities:
    - at: end
      title: Beat the board
      minutes: 5
      do: |
        Pairs play for the top score. Then they try to cheat the board by replaying, and fix the query so it cannot be filled by one player.
```

```code quiz.py#predict
import sqlite3

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE scores (name TEXT, score INTEGER)")
conn.execute("INSERT INTO scores VALUES ('Ada', 2)")
conn.execute("INSERT INTO scores VALUES ('Sam', 3)")
conn.execute("INSERT INTO scores VALUES ('Zoe', 1)")

for row in conn.execute("SELECT name FROM scores ORDER BY score DESC LIMIT 2"):
    print(row[0])
```

```code quiz.py#run
import sqlite3
import gradio as gr
import pandas as pd

questions = [
    {"q": "Which planet is closest to the Sun?", "choices": ["Venus", "Mercury", "Mars"], "answer": "Mercury"},
    {"q": "How many legs does a spider have?", "choices": ["6", "8", "10"], "answer": "8"},
    {"q": "What is 7 x 8?", "choices": ["54", "56", "64"], "answer": "56"},
]


def db():
    conn = sqlite3.connect("scores.db")
    conn.execute("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")
    return conn


def top_scores():
    conn = db()
    rows = conn.execute("SELECT name, score FROM scores ORDER BY score DESC, id LIMIT 5").fetchall()
    conn.close()
    return pd.DataFrame(rows, columns=["Name", "Score"])


def mark(name, a1, a2, a3):
    answers = [a1, a2, a3]
    score = 0
    for i in range(len(questions)):
        if answers[i] == questions[i]["answer"]:
            score = score + 1
    conn = db()
    conn.execute("INSERT INTO scores (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()
    return str(score) + " out of " + str(len(questions)), top_scores()


inputs = [gr.Textbox(label="Your name")]
for q in questions:
    inputs.append(gr.Radio(q["choices"], label=q["q"]))

gr.Interface(
    fn=mark,
    inputs=inputs,
    outputs=[gr.Textbox(label="Score"), gr.Dataframe(label="Top scores")],
    title="Quick quiz with a scoreboard",
).launch()
```

```code quiz.py#modify
import sqlite3
import gradio as gr
import pandas as pd

questions = [
    {"q": "Which planet is closest to the Sun?", "choices": ["Venus", "Mercury", "Mars"], "answer": "Mercury"},
    {"q": "How many legs does a spider have?", "choices": ["6", "8", "10"], "answer": "8"},
    {"q": "What is 7 x 8?", "choices": ["54", "56", "64"], "answer": "56"},
]


def db():
    conn = sqlite3.connect("scores.db")
    conn.execute("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")
    return conn


def top_scores():
    conn = db()
    rows = conn.execute("SELECT name, score FROM scores ORDER BY score DESC, id LIMIT 5").fetchall()
    conn.close()
    return pd.DataFrame(rows, columns=["Name", "Score"])


def mark(name, a1, a2, a3):
    answers = [a1, a2, a3]
    score = 0
    for i in range(len(questions)):
        if answers[i] == questions[i]["answer"]:
            score = score + 1
    conn = db()
    conn.execute("INSERT INTO scores (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()
    return str(score) + " out of " + str(len(questions)), top_scores()


inputs = [gr.Textbox(label="Your name")]
for q in questions:
    inputs.append(gr.Radio(q["choices"], label=q["q"]))

gr.Interface(
    fn=mark,
    inputs=inputs,
    outputs=[gr.Textbox(label="Score"), gr.Dataframe(label="Top scores")],
    title="Quick quiz with a scoreboard",
).launch()
```

```code quiz.py#sol-modify
import sqlite3
import gradio as gr
import pandas as pd

questions = [
    {"q": "Which planet is closest to the Sun?", "choices": ["Venus", "Mercury", "Mars"], "answer": "Mercury"},
    {"q": "How many legs does a spider have?", "choices": ["6", "8", "10"], "answer": "8"},
    {"q": "What is 7 x 8?", "choices": ["54", "56", "64"], "answer": "56"},
]


def db():
    conn = sqlite3.connect("scores.db")
    conn.execute("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")
    return conn


def top_scores():
    conn = db()
    rows = conn.execute("SELECT name, score FROM scores ORDER BY score DESC, id LIMIT 3").fetchall()
    conn.close()
    return pd.DataFrame(rows, columns=["Name", "Score"])


def mark(name, a1, a2, a3):
    answers = [a1, a2, a3]
    score = 0
    for i in range(len(questions)):
        if answers[i] == questions[i]["answer"]:
            score = score + 1
    conn = db()
    conn.execute("INSERT INTO scores (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()
    return str(score) + " out of " + str(len(questions)), top_scores()


inputs = [gr.Textbox(label="Your name")]
for q in questions:
    inputs.append(gr.Radio(q["choices"], label=q["q"]))

gr.Interface(
    fn=mark,
    inputs=inputs,
    outputs=[gr.Textbox(label="Score"), gr.Dataframe(label="Top scores")],
    title="Quick quiz with a scoreboard",
).launch()
```

```code quiz.py#make
import sqlite3
import gradio as gr
import pandas as pd

questions = [
    {"q": "Which planet is closest to the Sun?", "choices": ["Venus", "Mercury", "Mars"], "answer": "Mercury"},
    {"q": "How many legs does a spider have?", "choices": ["6", "8", "10"], "answer": "8"},
    {"q": "What is 7 x 8?", "choices": ["54", "56", "64"], "answer": "56"},
]


def db():
    conn = sqlite3.connect("scores.db")
    conn.execute("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")
    return conn


def top_scores():
    conn = db()
    rows = conn.execute("SELECT name, score FROM scores ORDER BY score DESC, id LIMIT 5").fetchall()
    conn.close()
    return pd.DataFrame(rows, columns=["Name", "Score"])


def mark(name, a1, a2, a3):
    answers = [a1, a2, a3]
    score = 0
    for i in range(len(questions)):
        if answers[i] == questions[i]["answer"]:
            score = score + 1
    conn = db()
    conn.execute("INSERT INTO scores (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()
    return str(score) + " out of " + str(len(questions)), top_scores()


inputs = [gr.Textbox(label="Your name")]
for q in questions:
    inputs.append(gr.Radio(q["choices"], label=q["q"]))

gr.Interface(
    fn=mark,
    inputs=inputs,
    outputs=[gr.Textbox(label="Score"), gr.Dataframe(label="Top scores")],
    title="Quick quiz with a scoreboard",
).launch()
```

```code quiz.py#sol-make
import sqlite3
import gradio as gr
import pandas as pd

questions = [
    {"q": "Which planet is closest to the Sun?", "choices": ["Venus", "Mercury", "Mars"], "answer": "Mercury"},
    {"q": "How many legs does a spider have?", "choices": ["6", "8", "10"], "answer": "8"},
    {"q": "What is 7 x 8?", "choices": ["54", "56", "64"], "answer": "56"},
]


def db():
    conn = sqlite3.connect("scores.db")
    conn.execute("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)")
    return conn


def top_scores():
    conn = db()
    rows = conn.execute("SELECT name, MAX(score) FROM scores GROUP BY name ORDER BY MAX(score) DESC LIMIT 5").fetchall()
    conn.close()
    return pd.DataFrame(rows, columns=["Name", "Score"])


def mark(name, a1, a2, a3):
    answers = [a1, a2, a3]
    score = 0
    for i in range(len(questions)):
        if answers[i] == questions[i]["answer"]:
            score = score + 1
    conn = db()
    conn.execute("INSERT INTO scores (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()
    return str(score) + " out of " + str(len(questions)), top_scores()


inputs = [gr.Textbox(label="Your name")]
for q in questions:
    inputs.append(gr.Radio(q["choices"], label=q["q"]))

gr.Interface(
    fn=mark,
    inputs=inputs,
    outputs=[gr.Textbox(label="Score"), gr.Dataframe(label="Top scores")],
    title="Quick quiz with a scoreboard",
).launch()
```
