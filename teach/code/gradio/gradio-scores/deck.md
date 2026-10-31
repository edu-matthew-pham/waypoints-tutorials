---
marp: true
theme: default
html: true
---

# A quiz with a scoreboard

Apps with Gradio · A quiz app

<!-- Speaker note: Students save quiz scores to a SQLite file and show the top scores in a table: INSERT with ?, ORDER BY and LIMIT for the scoreboard, then GROUP BY for each player's best. About 35 minutes (Predict and Run 10 min · Investigate 7 min · Modify and Make 18 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can save an app's results in a database.
- I can show the best results with ORDER BY and LIMIT.
- I can show each player's best score with GROUP BY and MAX.

<!-- Speaker note: Before class: Optional extension for students who have done SQL lessons 1 to 8 and the Gradio quiz. `scores.db` is a real SQLite file kept in the browser with the course's files, so the scoreboard survives Run and a reload. The scoreboard table is a pandas DataFrame built from the rows, as in Data detective. The Make step is the GROUP BY idea from SQL lesson 5, now inside an app. -->

---

## Why it matters

> A quiz is more fun when it remembers who got what.

<!-- Speaker note: Optional, and it uses the SQL course (lessons 1 to 8 first). It also uses pandas, from Data detective lesson 3: `pd.DataFrame(...)` turns rows into a table the app can show. Last lesson the quiz marked your answers and forgot you. Now each score is saved in a database file, `scores.db`, and a **scoreboard** table shows the best five. The database is the memory: the app asks it in SQL and shows the answer. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

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

**What does it print?**

- Sam, then Ada, on separate lines
- Sam, Ada and Zoe
- Ada, then Sam
- Zoe, then Ada

<!-- Speaker note: What happens: Sam, then Ada. ORDER BY score DESC puts the highest score first, and LIMIT 2 keeps the first two rows. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask for the order before anyone runs it. The wrong options mix up ascending order and the LIMIT. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Sam, then Ada. ORDER BY score DESC puts the highest score first, and LIMIT 2 keeps the first two rows.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/gradio/gradio-scores/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/gradio/gradio-scores/?full=step-2#step-2)

<!-- Speaker note: Play the quiz as yourself, then as a friend. Press **Run** again: the scoreboard is still there, because it is stored in `scores.db`. | Part | What it does | |---|---| | `db()` | Opens `scores.db` and makes the table the first time | | `INSERT INTO scores ... VALUES (?, ?)` | Saves one attempt | | `ORDER BY score DESC, id LIMIT 5` | The five best, with ties going to whoever played first | | `pd.DataFrame(rows, columns=[...])` | Turns the rows into a table the app can show | Students should be able to say: I played twice with different names, restarted the app with Run, and the scoreboard still had both. -->

<!-- Speaker note: Teacher: pairs play as each other and watch the table fill. Press Run again to show the scores survive. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

_The program is 48 lines long: open it in the tutorial and read it together._

[Open this step](https://tutorials.learningwaypoints.com/code/gradio/gradio-scores/?full=step-3#step-3)

<!-- Speaker note: What this step is for: The function saves, then asks the database for the answer it shows. Keeping the data in a database file means it outlasts the app. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Ties

**Two players both score 3. Why does `, id` come after `score DESC`?**

- It is needed for LIMIT to work
- It puts the player who finished first above the other
- It makes the scores bigger
- It removes one of the two players

* Answer: It puts the player who finished first above the other

<!-- Speaker note: id goes up as each score is saved, so for equal scores the smaller id (the earlier attempt) comes first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why a database?

**What would happen to the scoreboard if the scores were kept in a list inside the program instead?**

- It would be empty again every time the app started
- Nothing, lists are saved automatically
- It would show more scores

* Answer: It would be empty again every time the app started

<!-- Speaker note: A list lives in memory while the program runs. A database file lives on until you delete it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the scoreboard so it shows only the top three scores.

[Open this step](https://tutorials.learningwaypoints.com/code/gradio/gradio-scores/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Look at the LIMIT in top_scores. / Change LIMIT 5 to LIMIT 3. For students who need more support: Give the SELECT and ask for the change to the LIMIT. For early finishers: Add a column for the time of the attempt using datetime('now'). The hard part, on purpose: Seeing which part is SQL and which is Python. Colour the SQL strings in one colour. When students get stuck: The scoreboard is empty. Ask: Have you pressed Submit with a name typed? Fix: A row is only saved when the quiz is submitted. / A column error from the database. Ask: What are the columns called in the scores table? Fix: They are name, score and id. / The old scores are in the way. Ask: Which file holds the scores? Fix: Delete scores.db in the Files tab and run again. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Right now one player can fill the scoreboard by playing again and again. Change the query so each player appears once, with their best score.

[Open this step](https://tutorials.learningwaypoints.com/code/gradio/gradio-scores/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: You want one row for each player, with their best score. / SELECT name, MAX(score) FROM scores GROUP BY name ORDER BY MAX(score) DESC LIMIT 5 -->

<!-- Speaker note: Teacher: let students find the cheating problem first (play five times as the same name), then fix it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Beat the board <span style="font-size:.6em;color:#64748b">(5 min)</span>

Pairs play for the top score. Then they try to cheat the board by replaying, and fix the query so it cannot be filled by one player.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why does the quiz save scores in a database instead of a list?**

* A list disappears when the program stops. A database file keeps the scores between runs.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: on to machine learning, or back to the Flask course for a web version. -->
