---
title: "Whole lists of numbers with numpy"
subtitle: "Data detective · Reading data · Lesson 8"
---

# Whole lists of numbers with numpy

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** To change every number in a list, you would write a loop. With numpy you write one line.


:::teacher-note

**In one sentence:** An optional extension after pandas: students make a numpy array from a list, multiply or average it in one line, and use a test inside square brackets to keep some numbers.

**Students should be able to say:** I can turn a list of numbers into a numpy array. I can do a sum on every number at once. I can keep only the numbers that pass a test.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

`lengths * 60` has an array on the left. What does it do to each number?

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print(lengths * 60)
```

:::keep-together

**The list holds six song lengths in minutes. What does the last line print?**

☐ Each length times 60, so the lengths in seconds

☐ The same six numbers, repeated 60 times

☐ One number: the sum of all the lengths, times 60

☐ An error, because you cannot multiply a list

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Each length times 60. An array does the sum on every number at once, so 3.5 becomes 210.0 seconds, 4.2 becomes 252.0, and so on. A plain Python list would repeat itself 60 times instead.

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

long_songs = lengths[lengths > 4]
print(len(long_songs))
print(long_songs)
```

:::keep-together

### Count the long songs

**Run the code. How many songs are longer than 4 minutes?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 3

:::


:::keep-together

### Read the filter

**What does `lengths > 4` give on its own?**

☐ One True or False for each number

☐ The number 4

☐ A single True or False

☐ Only the numbers bigger than 4

:::


:::teacher-note

**Answer:** One True or False for each number

The test is asked of every number, so you get a True or False for each one. Inside square brackets, the True ones are kept.

:::


:::typical

## Modify

Change the program so it prints the average length in seconds as well as minutes.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print("Average:", round(lengths.mean(), 2), "minutes")
print("Average:", round((lengths * 60).mean()), "seconds")
print("Longest:", lengths.max(), "minutes")
```

:::

:::


## Make

Find out how many songs are shorter than 4 minutes, and the average length of just those songs.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

short = lengths[lengths < 4]
print(len(short), "songs under 4 minutes")
print("Average:", round(short.mean(), 1), "minutes")
```

:::


## Exit ticket

:::keep-together

**What does lengths[lengths &lt; 4] do?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It keeps only the numbers that are less than 4, and gives them back as a smaller array.

:::

