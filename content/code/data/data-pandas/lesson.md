---
order: 3
unit: read
introduces: [pandas]
recipes: [import-module, dotted-call]
title: The same job in pandas
summary: "Do the last two lessons again with pandas: read the CSV into a table, then take an average, a maximum and a filtered table in one line each."
language: python
hook: "The last lesson took a loop to find an average. A data scientist writes it in one line."
---
You have counted, totalled and filtered by hand with loops. **pandas** is the tool people use for exactly those jobs. It reads a CSV into a **table** (a *DataFrame*), keeps numbers as numbers, and gives each job a name: `.mean()` for the average, `.max()` for the biggest, `len(...)` for how many rows.

`import pandas as pd` loads it, and `pd.read_csv("music.csv")` reads the file. Copy those two lines for now: you will use them every time.

## Predict

```step
stage: predict
code: lesson.py#predict
check:
  type: predict
  q: "The file has 49 songs. What does the last line print?"
  options:
    - "About 3.9: the average length of all the songs"
    - "The length of the first song"
    - "A list of all 49 lengths"
    - "An error, because the lengths were text in the file"
  actual: "About 3.9. songs[\"minutes\"] is the whole minutes column, and .mean() averages it. pandas read the numbers as numbers, so there is no float() step."
```

`songs["minutes"]` is one column of the table. What does `.mean()` do to it?

## Run

```step
stage: run
code: lesson.py#run
try: { playground: python, starter: "lesson.py#run", files: [../sets/music.csv], height: 520 }
check: { type: reflect, text: "I can say which line keeps only the pop songs, and which lines do the average and the biggest." }
unlocks: [read-a-csv-with-pandas, filter-a-table]
```

Run it (pandas takes a few seconds to load the first time) and read the output next to the loops you wrote last lesson.

| Line | What it does | The loop it replaces |
|---|---|---|
| `pd.read_csv("music.csv")` | Reads the file into a table | `open`, `csv.DictReader` and `list` |
| `songs["minutes"].mean()` | Average of a column | Adding in a loop, then dividing |
| `songs["minutes"].max()` | Biggest in a column | Keeping the longest so far |
| `songs[songs["genre"] == "pop"]` | Only the rows where the test is true | A loop with an `if` |

## Investigate

```step
stage: investigate
code: lesson.py#investigate
insight: "A column is a whole list of values you can summarise in one step, and a test inside the square brackets keeps only the rows that pass it."
tasks:
  - check:
      type: number
      q: "Run the code. How many rock songs are there?"
      answer: 10
  - check:
      type: question
      q: "What does `songs[songs[\"genre\"] == \"rock\"]` give?"
      options:
        - "A smaller table with only the rock rows"
        - "True or False"
        - "The word rock"
        - "The first rock song"
      answer: 0
      feedback:
        - null
        - "The test inside is True or False for every row. The outer brackets keep the rows where it is True."
        - "That is only the value being compared with."
        - "It keeps every rock row, not just the first."
      explain: "Inside the brackets the test is True or False for each row, and the outer brackets keep the True rows. It is the loop and if from last lesson, in one line."
```

### Count the rock songs

`len(table)` is the number of rows.

### Read the filter

Inside out: the test first, then the keep.

## Modify

```step
stage: modify
try: { playground: python, starter: "lesson.py#modify", files: [../sets/music.csv], height: 520 }
hint:
  - "Change the word in the test, and the name the output uses."
  - "Use \"rock\" in place of \"pop\"."
check: { type: code, text: "Show the number of rock songs and their average length.", rules: { contains: ["\"rock\"", ".mean()"] } }
smaller:
  check:
    type: question
    q: "Which line gives the average length of the rock songs, if rock holds only the rock rows?"
    options:
      - "rock[\"minutes\"].mean()"
      - "rock.mean(\"minutes\")"
      - "mean(rock)"
    answer: 0
    feedback:
      - null
      - "The column goes in square brackets first, then .mean() after it."
      - "mean is a method of a column, so it follows the column with a dot."
    explain: "Pick the column, then ask it for its average: table[\"column\"].mean()."
```

Change the program so the last line is about rock songs instead of pop.

## Make

```step
stage: make
try: { playground: python, starter: "lesson.py#make", files: [../sets/music.csv], height: 520 }
hint:
  - "Filter the table with a test on the year column, then use len and .max()."
  - "old = songs[songs[\"year\"] < 1990]"
check: { type: code, text: "Print how many songs are from before 1990 and the length of the longest one.", rules: { contains: ["songs[", "len(", ".max()"] } }
```

Find out how many songs are from before 1990, and how long the longest of them is.

```teacher
summary: "Students redo the CSV jobs with pandas: read_csv into a table, .mean() and .max() on a column, len for rows, and a test inside square brackets to filter."
time: 30
timing: "Predict and Run 10 min · Investigate 8 min · Modify and Make 12 min"
goals:
  - I can read a CSV into a pandas table.
  - I can take the average or biggest of a column in one line.
  - I can keep only the rows that pass a test.
running:
  - "Predict: the error option catches students who remember float(). pandas reads numbers as numbers."
  - "Run: put last lesson's loop beside each pandas line. The point is that pandas is the same job with a name."
  - "Investigate: read the filter from the inside out. The test makes True and False for every row."
  - "Make: the test uses a number, so no quotes round 1990."
stuck:
  - see: "KeyError: 'minute'"
    ask: What is the column called in the file?
    fix: Column names must match the first line of the CSV exactly, and the same capitals.
  - see: "A table printed instead of a number."
    ask: Did you pick a column before .mean()?
    fix: songs["minutes"].mean() picks the column first.
  - see: "The filter test uses a single =."
    ask: Is this a test or an assignment?
    fix: A test needs ==. A single = stores a value.
stretch: Print the average length of every genre with songs.groupby("genre")["minutes"].mean().
support: Give the whole program with the genre blank for students to fill in.
leads: "Next lessons: a chart and cleaning by hand, then the dashboard, where pandas sits behind an app."
exit:
  q: "What does songs[songs[\"year\"] < 1990] do?"
  a: "It keeps only the rows where the year is below 1990, and gives them back as a smaller table."
explain: |
  `pd.read_csv("file.csv")` reads a CSV into a table. `table["column"]` is one column, and `.mean()`, `.max()` and `.min()` summarise it. `len(table)` is the number of rows. `table[test]` keeps the rows where the test is True.
solutions:
  step-4: lesson.py#sol-modify
  step-5: lesson.py#sol-make
struggle: "Reading a filter in one line. Say it aloud: the songs where the genre is pop."
class:
  activities:
    - at: end
      title: Loop or line
      minutes: 4
      do: |
        Show one pandas line. Pairs write the loop it replaces, then swap and check each other's.
```

```code lesson.py#predict
import pandas as pd

songs = pd.read_csv("music.csv")

print(round(songs["minutes"].mean(), 1))
```

```code lesson.py#run
import pandas as pd

songs = pd.read_csv("music.csv")

print(songs.head())
print(len(songs), "songs")
print("Average length:", round(songs["minutes"].mean(), 1), "minutes")
print("Longest:", songs["minutes"].max(), "minutes")

pop = songs[songs["genre"] == "pop"]
print(len(pop), "pop songs, average", round(pop["minutes"].mean(), 1), "minutes")
```

```code lesson.py#investigate
import pandas as pd

songs = pd.read_csv("music.csv")

rock = songs[songs["genre"] == "rock"]
print(len(rock))
print(rock["title"])
```

```code lesson.py#modify
import pandas as pd

songs = pd.read_csv("music.csv")

print(songs.head())
print(len(songs), "songs")
print("Average length:", round(songs["minutes"].mean(), 1), "minutes")
print("Longest:", songs["minutes"].max(), "minutes")

pop = songs[songs["genre"] == "pop"]
print(len(pop), "pop songs, average", round(pop["minutes"].mean(), 1), "minutes")
```

```code lesson.py#sol-modify
import pandas as pd

songs = pd.read_csv("music.csv")

print(songs.head())
print(len(songs), "songs")
print("Average length:", round(songs["minutes"].mean(), 1), "minutes")
print("Longest:", songs["minutes"].max(), "minutes")

pop = songs[songs["genre"] == "rock"]
print(len(pop), "pop songs, average", round(pop["minutes"].mean(), 1), "minutes")
```

```code lesson.py#make
import pandas as pd

songs = pd.read_csv("music.csv")

# Songs before 1990: how many are there, and how long is the longest?
```

```code lesson.py#sol-make
import pandas as pd

songs = pd.read_csv("music.csv")

old = songs[songs["year"] < 1990]
print(len(old), "songs before 1990")
print("Longest:", old["minutes"].max(), "minutes")
```
