---
marp: true
theme: default
html: true
---

# Whole lists of numbers with numpy

Data detective · Reading data

<!-- Speaker note: An optional extension after pandas: students make a numpy array from a list, multiply or average it in one line, and use a test inside square brackets to keep some numbers. About 25 minutes (Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min). The Run, Modify and Make slides have the live playground in them; the tutorial link under it is the backup. -->

---

## Today

- I can turn a list of numbers into a numpy array.
- I can do a sum on every number at once.
- I can keep only the numbers that pass a test.

---

## Why it matters

> To change every number in a list, you would write a loop. With numpy you write one line.

<!-- Speaker note: A Python list can hold numbers, but it cannot do sums on them all at once. **numpy** (said "num-pie") is the tool behind pandas, and it gives you the **array**: a list of numbers you can add up, multiply and test in one step. `import numpy as np` loads it, and `np.array([...])` turns a list into an array. Copy those for now: you will use them every time. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print(lengths * 60)
```

**The list holds six song lengths in minutes. What does the last line print?**

- Each length times 60, so the lengths in seconds
- The same six numbers, repeated 60 times
- One number: the sum of all the lengths, times 60
- An error, because you cannot multiply a list

<!-- Speaker note: What happens: Each length times 60. An array does the sum on every number at once, so 3.5 becomes 210.0 seconds, 4.2 becomes 252.0, and so on. A plain Python list would repeat itself 60 times instead. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the repeated-list option catches students who know that list * 60 repeats a list. An array does the sum instead. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Each length times 60. An array does the sum on every number at once, so 3.5 becomes 210.0 seconds, 4.2 becomes 252.0, and so on. A plain Python list would repeat itself 60 times instead.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data/data-numpy/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data/data-numpy/?full=step-2#step-2)

<!-- Speaker note: Run it (numpy takes a few seconds to load the first time) and read each line of output. | Line | What it does | The loop it replaces | |---|---|---| | `lengths * 60` | Times 60 on every number | A loop that builds a new list | | `lengths.mean()` | The average | Adding in a loop, then dividing | | `lengths.max()` | The biggest | Keeping the largest so far | | `lengths > 4` | True or False for every number | A loop with an `if` | | `lengths[lengths > 4]` | Only the numbers where the test is True | A loop that keeps some | Students should be able to say: I can say which line gives the average, and which line keeps only the songs longer than 4 minutes. -->

<!-- Speaker note: Teacher: show the table's loop column to remind them of the loops from earlier lessons. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

long_songs = lengths[lengths > 4]
print(len(long_songs))
print(long_songs)
```

<!-- Speaker note: What this step is for: A test on an array gives True or False for every number, and putting that test inside square brackets keeps only the numbers where it is True. -->

<!-- Speaker note: Teacher: read the filter from the inside out. The test makes True and False for every number. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the long songs

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

long_songs = lengths[lengths > 4]
print(len(long_songs))
print(long_songs)
```

</div>
<div>

**Run the code. How many songs are longer than 4 minutes?**

* Answer: 3

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the filter

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```python
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

long_songs = lengths[lengths > 4]
print(len(long_songs))
print(long_songs)
```

</div>
<div>

**What does `lengths > 4` give on its own?**

- One True or False for each number
- The number 4
- A single True or False
- Only the numbers bigger than 4

* Answer: One True or False for each number

</div>
</div>

<!-- Speaker note: The test is asked of every number, so you get a True or False for each one. Inside square brackets, the True ones are kept. -->

<style scoped>section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the program so it prints the average length in seconds as well as minutes.

[Open this step](https://tutorials.learningwaypoints.com/code/data/data-numpy/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Times every length by 60 first, then take the mean. / (lengths * 60).mean() For students who need more support: Give the whole program with the 4 blank for students to fill in. For early finishers: Print the lengths in seconds as whole numbers with np.round(lengths * 60). The hard part, on purpose: Reading a filter in one line. Say it aloud: the lengths where the length is over 4. When students get stuck: NameError: name 'np' is not defined Ask: Did you import numpy first? Fix: The first line is import numpy as np. / The mean looks like a very long decimal. Ask: Did you round it? Fix: round(short.mean(), 1) gives one decimal place. / Nothing is filtered, or all numbers print. Ask: Is the test inside the square brackets? Fix: lengths[lengths < 4] keeps rows; lengths < 4 alone only gives True and False. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find out how many songs are shorter than 4 minutes, and the average length of just those songs.

[Open this step](https://tutorials.learningwaypoints.com/code/data/data-numpy/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Make a short array with a test on lengths, then use len and .mean(). / short = lengths[lengths < 4] -->

<!-- Speaker note: Teacher: the test uses a number, so no quotes round 4. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Loop or line <span style="font-size:.6em;color:#64748b">(4 min)</span>

Show one numpy line. Pairs write the loop it replaces, then swap and check each other's.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What does lengths[lengths &lt; 4] do?**

* It keeps only the numbers that are less than 4, and gives them back as a smaller array.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Pandas uses numpy underneath, so the same square-bracket test you used on a table works on an array too. -->
