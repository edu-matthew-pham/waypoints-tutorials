---
title: "The same job in pandas"
subtitle: "Data detective · Reading data · Lesson 3"
---

# The same job in pandas

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The last lesson took a loop to find an average. A data scientist writes it in one line.


:::teacher-note

**In one sentence:** Students redo the CSV jobs with pandas: read_csv into a table, .mean() and .max() on a column, len for rows, and a test inside square brackets to filter.

**Students should be able to say:** I can read a CSV into a pandas table. I can take the average or biggest of a column in one line. I can keep only the rows that pass a test.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

`songs["minutes"]` is one column of the table. What does `.mean()` do to it?

```python
import pandas as pd

songs = pd.read_csv("music.csv")

print(round(songs["minutes"].mean(), 1))
```

:::keep-together

**The file has 49 songs. What does the last line print?**

☐ A list of all 49 lengths

☐ An error, because the lengths were text in the file

☐ About 3.9: the average length of all the songs

☐ The length of the first song

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** About 3.9. songs["minutes"] is the whole minutes column, and .mean() averages it. pandas read the numbers as numbers, so there is no float() step.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
import pandas as pd

songs = pd.read_csv("music.csv")

rock = songs[songs["genre"] == "rock"]
print(len(rock))
print(rock["title"])
```

:::keep-together

### Count the rock songs

**Run the code. How many rock songs are there?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 10

:::


:::keep-together

### Read the filter

**What does `songs[songs["genre"] == "rock"]` give?**

☐ A smaller table with only the rock rows

☐ The first rock song

☐ True or False

☐ The word rock

:::


:::teacher-note

**Answer:** A smaller table with only the rock rows

Inside the brackets the test is True or False for each row, and the outer brackets keep the True rows. It is the loop and if from last lesson, in one line.

:::


:::typical

## Modify

Change the program so the last line is about rock songs instead of pop.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import pandas as pd

songs = pd.read_csv("music.csv")

print(songs.head())
print(len(songs), "songs")
print("Average length:", round(songs["minutes"].mean(), 1), "minutes")
print("Longest:", songs["minutes"].max(), "minutes")

pop = songs[songs["genre"] == "rock"]
print(len(pop), "pop songs, average", round(pop["minutes"].mean(), 1), "minutes")
```

:::

:::


## Make

Find out how many songs are from before 1990, and how long the longest of them is.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import pandas as pd

songs = pd.read_csv("music.csv")

old = songs[songs["year"] < 1990]
print(len(old), "songs before 1990")
print("Longest:", old["minutes"].max(), "minutes")
```

:::


## Exit ticket

:::keep-together

**What does songs[songs["year"] &lt; 1990] do?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It keeps only the rows where the year is below 1990, and gives them back as a smaller table.

:::

