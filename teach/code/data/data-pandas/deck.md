---
marp: true
theme: default
html: true
---

# The same job in pandas

Data detective · Reading data

<!-- Speaker note: Students redo the CSV jobs with pandas: read_csv into a table, .mean() and .max() on a column, len for rows, and a test inside square brackets to filter. About 30 minutes (Predict and Run 10 min · Investigate 8 min · Modify and Make 12 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can read a CSV into a pandas table.
- I can take the average or biggest of a column in one line.
- I can keep only the rows that pass a test.

---

## Why it matters

> The last lesson took a loop to find an average. A data scientist writes it in one line.

<!-- Speaker note: You have counted, totalled and filtered by hand with loops. **pandas** is the tool people use for exactly those jobs. It reads a CSV into a **table** (a *DataFrame*), keeps numbers as numbers, and gives each job a name: `.mean()` for the average, `.max()` for the biggest, `len(...)` for how many rows. `import pandas as pd` loads it, and `pd.read_csv("music.csv")` reads the file. Copy those two lines for now: you will use them every time. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```python
import pandas as pd

songs = pd.read_csv("music.csv")

print(round(songs["minutes"].mean(), 1))
```

**The file has 49 songs. What does the last line print?**

- A list of all 49 lengths
- An error, because the lengths were text in the file
- About 3.9: the average length of all the songs
- The length of the first song

<!-- Speaker note: What happens: About 3.9. songs["minutes"] is the whole minutes column, and .mean() averages it. pandas read the numbers as numbers, so there is no float() step. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the error option catches students who remember float(). pandas reads numbers as numbers. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 3.9. songs["minutes"] is the whole minutes column, and .mean() averages it. pandas read the numbers as numbers, so there is no float() step.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data/data-pandas/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data/data-pandas/?full=step-2#step-2)

<!-- Speaker note: Run it (pandas takes a few seconds to load the first time) and read the output next to the loops you wrote last lesson. | Line | What it does | The loop it replaces | |---|---|---| | `pd.read_csv("music.csv")` | Reads the file into a table | `open`, `csv.DictReader` and `list` | | `songs["minutes"].mean()` | Average of a column | Adding in a loop, then dividing | | `songs["minutes"].max()` | Biggest in a column | Keeping the longest so far | | `songs[songs["genre"] == "pop"]` | Only the rows where the test is true | A loop with an `if` | Students should be able to say: I can say which line keeps only the pop songs, and which lines do the average and the biggest. -->

<!-- Speaker note: Teacher: put last lesson's loop beside each pandas line. The point is that pandas is the same job with a name. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```python
import pandas as pd

songs = pd.read_csv("music.csv")

rock = songs[songs["genre"] == "rock"]
print(len(rock))
print(rock["title"])
```

<!-- Speaker note: What this step is for: A column is a whole list of values you can summarise in one step, and a test inside the square brackets keeps only the rows that pass it. -->

<!-- Speaker note: Teacher: read the filter from the inside out. The test makes True and False for every row. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the rock songs

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import pandas as pd

songs = pd.read_csv("music.csv")

rock = songs[songs["genre"] == "rock"]
print(len(rock))
print(rock["title"])
```

</div>
<div>

**Run the code. How many rock songs are there?**

* Answer: 10

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the filter

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import pandas as pd

songs = pd.read_csv("music.csv")

rock = songs[songs["genre"] == "rock"]
print(len(rock))
print(rock["title"])
```

</div>
<div>

**What does `songs[songs["genre"] == "rock"]` give?**

- A smaller table with only the rock rows
- The first rock song
- True or False
- The word rock

* Answer: A smaller table with only the rock rows

</div>
</div>

<!-- Speaker note: Inside the brackets the test is True or False for each row, and the outer brackets keep the True rows. It is the loop and if from last lesson, in one line. -->

<style scoped>section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the program so the last line is about rock songs instead of pop.

[Open this step](https://tutorials.learningwaypoints.com/code/data/data-pandas/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change the word in the test, and the name the output uses. / Use "rock" in place of "pop". For students who need more support: Give the whole program with the genre blank for students to fill in. For early finishers: Print the average length of every genre with songs.groupby("genre")["minutes"].mean(). The hard part, on purpose: Reading a filter in one line. Say it aloud: the songs where the genre is pop. When students get stuck: KeyError: 'minute' Ask: What is the column called in the file? Fix: Column names must match the first line of the CSV exactly, and the same capitals. / A table printed instead of a number. Ask: Did you pick a column before .mean()? Fix: songs["minutes"].mean() picks the column first. / The filter test uses a single =. Ask: Is this a test or an assignment? Fix: A test needs ==. A single = stores a value. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find out how many songs are from before 1990, and how long the longest of them is.

[Open this step](https://tutorials.learningwaypoints.com/code/data/data-pandas/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Filter the table with a test on the year column, then use len and .max(). / old = songs[songs["year"] < 1990] -->

<!-- Speaker note: Teacher: the test uses a number, so no quotes round 1990. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Loop or line <span style="font-size:.6em;color:#64748b">(4 min)</span>

Show one pandas line. Pairs write the loop it replaces, then swap and check each other's.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What does songs[songs["year"] &lt; 1990] do?**

* It keeps only the rows where the year is below 1990, and gives them back as a smaller table.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lessons: a chart and cleaning by hand, then the dashboard, where pandas sits behind an app. -->
