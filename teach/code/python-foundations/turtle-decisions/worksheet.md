---
title: "If and else"
subtitle: "Python Foundations with Turtle · Choices and lists · Lesson 7"
---

# If and else

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A thermostat asks one question, over and over: is it too cold?


:::teacher-note

**In one sentence:** Students make a program choose between two paths with if and else, reading a condition that is true or false.

**Students should be able to say:** I can write an if / else that chooses between two actions. I can work out whether a condition is true for a given value. I can say that only one of the two paths runs on each pass.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

![A flowchart of the loop. i counts 0 to 5. Each time, the check asks: is i less than 3? If True, the pen turns red. If False, the pen turns blue. Either way the turtle goes forward 60 and turns 60, then the next i comes back to the check.](https://tutorials.learningwaypoints.com/_pictures/diagrams/code/python-foundations/turtle-decisions/step-1.svg?v=3296abeaa9a58671)

*The same program as a flowchart*

:::

`i` is the counter from the spiral, and the new line, `if i < 3:`, asks a question about it on every pass. What do you think the turtle will draw?

```python
from turtle import *

pensize(6)
for i in range(6):
    if i < 3:
        pencolor("red")
    else:
        pencolor("blue")
    forward(60)
    right(60)
```

:::keep-together

**What will the turtle draw?**

☐ A hexagon with the sides taking turns, red then blue

☐ A hexagon: three red sides, then three blue

☐ A hexagon with every side red, then every side blue (twelve lines)

☐ A blue hexagon, because else runs last and covers the red

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Three red sides, then three blue. On each pass the program asks one question, i &lt; 3, and runs only one of the two paths. i is 0, 1, 2 for the first three passes (red) and 3, 4, 5 for the last three (blue).

:::


## Run

Run the program in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Investigate


```python
from turtle import *

pensize(6)
for i in range(6):
    if i < 3:
        pencolor("red")
    else:
        pencolor("blue")
    forward(60)
    right(60)
```

:::keep-together

### Trace the passes

**Fill in the gaps for each pass: is i &lt; 3, and which colour does the program pick?**

{{rows 1}}

| i | i < 3 | colour |
|---|---|---|
| 0 | True | red |
| 2 |   |   |
| 3 |   |   |
| 5 |   |   |

:::


:::teacher-note

**Answer:** True, red, False, blue, False, blue

The condition is true for 0, 1 and 2, so the if path runs and the pen is red. From 3 on it is false, so the else path runs and the pen is blue.

:::


:::keep-together

### Spot the bug

**This should colour only the fourth side red, but the program will not even start. Click the wrong line.**

```
 1  from turtle import *
 2  
 3  pensize(6)
 4  for i in range(6):
 5      if i = 3:
 6          pencolor("red")
 7      else:
 8          pencolor("blue")
 9      forward(60)
10      right(60)
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 5

A single = stores a value. To ask whether two things are equal, the condition needs two: i == 3.

:::


:::keep-together

### True or false

**A condition works out to a value, like a sum does. What does 5 &lt; 3 work out to?**

☐ 5

☐ 3

☐ False

☐ True

:::


:::teacher-note

**Answer:** False

5 &lt; 3 is a question, and the answer is False. Every condition works out to True or False, and if runs its lines only when it is True.

:::


:::typical

## Modify

Change the condition so **four** sides are red and two are blue. Run it to check.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
from turtle import *

pensize(6)
for i in range(6):
    if i < 4:
        pencolor("red")
    else:
        pencolor("blue")
    forward(60)
    right(60)
```

:::

:::


## Mix it up

Now the decision reads a value that grows, like the spiral's `size`. Work it out on paper before you check.

```python
from turtle import *

size = 10
pensize(5)
for i in range(12):
    # Choose the colour here: red while size is small, blue once it is big.
    forward(size)
    right(90)
    size = size + 10
```

:::keep-together

**size starts at 10 and grows by 20 every pass. A line is red while size &lt; 50, otherwise blue. How many of the first six lines are red?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2

size is 10, 30, 50, 70, 90, 110. Only 10 and 30 are less than 50, so two lines are red.

:::


## Make

The spiral grows by 10 every pass. Make it **red while the lines are short and blue once they are long**. Then try a different cut-off, or a third colour of your own once you have seen `elif` next lesson.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible solution.** Other correct programs are fine; check that the program runs and does what the task asks.

```python
from turtle import *

size = 10
pensize(5)
for i in range(12):
    if size < 60:
        pencolor("red")
    else:
        pencolor("blue")
    forward(size)
    right(90)
    size = size + 10
```

:::


:::wider

## Change a fridge thermometer

A fridge should stay at 5 degrees or less. This thermometer draws the reading as a bar, red when the fridge is too warm. Try readings of 3 and 8. Then make the bar green when the fridge is fine, and change the rule so it turns red above 4 instead. It's the same rule as the micro:bit fridge alarm, drawn instead of flashed.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**A loop colours pass i red if i &lt; 2, else blue. For range(5), how many passes are blue?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Three. The red passes are i = 0 and 1, so 2, 3 and 4 are blue.

:::

