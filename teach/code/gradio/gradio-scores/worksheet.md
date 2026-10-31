---
title: "A quiz with a scoreboard"
subtitle: "Apps with Gradio · A quiz app · Lesson 5"
---

# A quiz with a scoreboard

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A quiz is more fun when it remembers who got what.


:::teacher-note

**In one sentence:** Students save quiz scores to a SQLite file and show the top scores in a table: INSERT with ?, ORDER BY and LIMIT for the scoreboard, then GROUP BY for each player's best.

**Students should be able to say:** I can save an app's results in a database. I can show the best results with ORDER BY and LIMIT. I can show each player's best score with GROUP BY and MAX.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


```python
import sqlite3

conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE scores (name TEXT, score INTEGER)")
conn.execute("INSERT INTO scores VALUES ('Ada', 2)")
conn.execute("INSERT INTO scores VALUES ('Sam', 3)")
conn.execute("INSERT INTO scores VALUES ('Zoe', 1)")

for row in conn.execute("SELECT name FROM scores ORDER BY score DESC LIMIT 2"):
    print(row[0])
```

:::keep-together

**What does it print?**

☐ Sam, then Ada, on separate lines

☐ Sam, Ada and Zoe

☐ Ada, then Sam

☐ Zoe, then Ada

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Sam, then Ada. ORDER BY score DESC puts the highest score first, and LIMIT 2 keeps the first two rows.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
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

:::keep-together

### Ties

**Two players both score 3. Why does `, id` come after `score DESC`?**

☐ It is needed for LIMIT to work

☐ It puts the player who finished first above the other

☐ It makes the scores bigger

☐ It removes one of the two players

:::


:::teacher-note

**Answer:** It puts the player who finished first above the other

id goes up as each score is saved, so for equal scores the smaller id (the earlier attempt) comes first.

:::


:::keep-together

### Why a database?

**What would happen to the scoreboard if the scores were kept in a list inside the program instead?**

☐ It would be empty again every time the app started

☐ Nothing, lists are saved automatically

☐ It would show more scores

:::


:::teacher-note

**Answer:** It would be empty again every time the app started

A list lives in memory while the program runs. A database file lives on until you delete it.

:::


:::typical

## Modify

Change the scoreboard so it shows only the top three scores.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
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

:::

:::


## Make

Right now one player can fill the scoreboard by playing again and again. Change the query so each player appears once, with their best score.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
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

:::


## Exit ticket

:::keep-together

**Why does the quiz save scores in a database instead of a list?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A list disappears when the program stops. A database file keeps the scores between runs.

:::

