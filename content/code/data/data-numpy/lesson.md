---
order: 8
unit: read
optional: true
introduces: [numpy]
recipes: [import-module, dotted-call]
title: Whole lists of numbers with numpy
summary: "Turn a list of song lengths into a numpy array, then do sums on every number at once: times 60, an average, and a test that keeps only the long songs."
language: python
hook: "To change every number in a list, you would write a loop. With numpy you write one line."
---
A Python list can hold numbers, but it cannot do sums on them all at once. **numpy** (said "num-pie") is the tool behind pandas, and it gives you the **array**: a list of numbers you can add up, multiply and test in one step.

`import numpy as np` loads it, and `np.array([...])` turns a list into an array. Copy those for now: you will use them every time.

## Predict

```step
stage: predict
code: lesson.py#predict
check:
  type: predict
  q: "The list holds six song lengths in minutes. What does the last line print?"
  options:
    - "Each length times 60, so the lengths in seconds"
    - "One number: the sum of all the lengths, times 60"
    - "The same six numbers, repeated 60 times"
    - "An error, because you cannot multiply a list"
  actual: "Each length times 60. An array does the sum on every number at once, so 3.5 becomes 210.0 seconds, 4.2 becomes 252.0, and so on. A plain Python list would repeat itself 60 times instead."
```

`lengths * 60` has an array on the left. What does it do to each number?

## Run

```step
stage: run
code: lesson.py#run
try: { playground: python, starter: "lesson.py#run", height: 520 }
check: { type: reflect, text: "I can say which line gives the average, and which line keeps only the songs longer than 4 minutes." }
```

Run it (numpy takes a few seconds to load the first time) and read each line of output.

| Line | What it does | The loop it replaces |
|---|---|---|
| `lengths * 60` | Times 60 on every number | A loop that builds a new list |
| `lengths.mean()` | The average | Adding in a loop, then dividing |
| `lengths.max()` | The biggest | Keeping the largest so far |
| `lengths > 4` | True or False for every number | A loop with an `if` |
| `lengths[lengths > 4]` | Only the numbers where the test is True | A loop that keeps some |

## Investigate

```step
stage: investigate
code: lesson.py#investigate
insight: "A test on an array gives True or False for every number, and putting that test inside square brackets keeps only the numbers where it is True."
tasks:
  - check:
      type: number
      q: "Run the code. How many songs are longer than 4 minutes?"
      answer: 3
  - check:
      type: question
      q: "What does `lengths > 4` give on its own?"
      options:
        - "One True or False for each number"
        - "Only the numbers bigger than 4"
        - "A single True or False"
        - "The number 4"
      answer: 0
      feedback:
        - null
        - "That is what you get when the test goes inside square brackets. On its own the test only says True or False."
        - "There is one answer for each number in the array, not one for the whole thing."
        - "4 is only what each number is compared with."
      explain: "The test is asked of every number, so you get a True or False for each one. Inside square brackets, the True ones are kept."
```

### Count the long songs

`len(array)` is how many numbers are in it.

### Read the filter

Inside out: the test first, then the keep.

## Modify

```step
stage: modify
try: { playground: python, starter: "lesson.py#modify", height: 520 }
hint:
  - "Times every length by 60 first, then take the mean."
  - "(lengths * 60).mean()"
check: { type: code, text: "Show the average length in seconds.", rules: { contains: ["*60", ".mean()"] } }
smaller:
  check:
    type: question
    q: "Which line gives the average length in seconds?"
    options:
      - "(lengths * 60).mean()"
      - "lengths.mean * 60()"
      - "mean(60)"
    answer: 0
    feedback:
      - null
      - "The brackets after mean come right after the word: .mean()."
      - "mean is asked of the array, so it follows the array with a dot."
    explain: "Do the times-60 sum on the whole array in brackets, then ask for its average with .mean()."
```

Change the program so it prints the average length in seconds as well as minutes.

## Make

```step
stage: make
try: { playground: python, starter: "lesson.py#make", height: 520 }
hint:
  - "Make a short array with a test on lengths, then use len and .mean()."
  - "short = lengths[lengths < 4]"
check: { type: code, text: "Print how many songs are under 4 minutes and their average length.", rules: { contains: ["<4", "len(", ".mean()"] } }
```

Find out how many songs are shorter than 4 minutes, and the average length of just those songs.

```teacher
summary: "An optional extension after pandas: students make a numpy array from a list, multiply or average it in one line, and use a test inside square brackets to keep some numbers."
time: 25
timing: "Predict and Run 8 min · Investigate 7 min · Modify and Make 10 min"
goals:
  - I can turn a list of numbers into a numpy array.
  - I can do a sum on every number at once.
  - I can keep only the numbers that pass a test.
running:
  - "Predict: the repeated-list option catches students who know that list * 60 repeats a list. An array does the sum instead."
  - "Run: show the table's loop column to remind them of the loops from earlier lessons."
  - "Investigate: read the filter from the inside out. The test makes True and False for every number."
  - "Make: the test uses a number, so no quotes round 4."
stuck:
  - see: "NameError: name 'np' is not defined"
    ask: Did you import numpy first?
    fix: The first line is import numpy as np.
  - see: "The mean looks like a very long decimal."
    ask: Did you round it?
    fix: round(short.mean(), 1) gives one decimal place.
  - see: "Nothing is filtered, or all numbers print."
    ask: Is the test inside the square brackets?
    fix: lengths[lengths < 4] keeps rows; lengths < 4 alone only gives True and False.
stretch: Print the lengths in seconds as whole numbers with np.round(lengths * 60).
support: Give the whole program with the 4 blank for students to fill in.
leads: "Pandas uses numpy underneath, so the same square-bracket test you used on a table works on an array too."
exit:
  q: "What does lengths[lengths < 4] do?"
  a: "It keeps only the numbers that are less than 4, and gives them back as a smaller array."
explain: |
  `np.array([...])` turns a list into an array. A sum such as `lengths * 60` works on every number at once. `.mean()`, `.max()` and `.min()` summarise it. A test such as `lengths > 4` gives True or False for each number, and `lengths[test]` keeps the numbers where it is True.
solutions:
  step-4: lesson.py#sol-modify
  step-5: lesson.py#sol-make
struggle: "Reading a filter in one line. Say it aloud: the lengths where the length is over 4."
class:
  activities:
    - at: end
      title: Loop or line
      minutes: 4
      do: |
        Show one numpy line. Pairs write the loop it replaces, then swap and check each other's.
```

```code lesson.py#predict
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print(lengths * 60)
```

```code lesson.py#run
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print("Lengths:", lengths)
print("In seconds:", lengths * 60)
print("Average:", round(lengths.mean(), 2), "minutes")
print("Longest:", lengths.max(), "minutes")

print(lengths > 4)
long_songs = lengths[lengths > 4]
print(long_songs)
```

```code lesson.py#investigate
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

long_songs = lengths[lengths > 4]
print(len(long_songs))
print(long_songs)
```

```code lesson.py#modify
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print("Average:", round(lengths.mean(), 2), "minutes")
print("Longest:", lengths.max(), "minutes")
```

```code lesson.py#sol-modify
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

print("Average:", round(lengths.mean(), 2), "minutes")
print("Average:", round((lengths * 60).mean()), "seconds")
print("Longest:", lengths.max(), "minutes")
```

```code lesson.py#make
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

# Songs under 4 minutes: how many, and what is their average?
```

```code lesson.py#sol-make
import numpy as np

lengths = np.array([3.5, 4.2, 2.8, 5.1, 3.9, 4.4])

short = lengths[lengths < 4]
print(len(short), "songs under 4 minutes")
print("Average:", round(short.mean(), 1), "minutes")
```
