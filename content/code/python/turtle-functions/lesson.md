---
order: 3
title: Functions
summary: Give a group of commands a name, then use that name again and again.
language: python
hook: "Every app is built from small named functions that other code calls. You are about to write your first."
teachers: |
  **Where it leads:** parameters (the next lesson), then your own toolbox of functions and modules. Later lessons return to functions with harder uses, which is where mastery comes from. This lesson only builds the idea.

  **Class ideas:** each student writes one shape function and the class combines them into a picture; compare how long it takes to change three copies versus one function.

  **Watch for:** `def` seen as the thing that draws (it only describes the steps); forgetting to call the function; the indented body.

  **Checkpoint:** a student who can define and call a function understands the concept. Fluent, repeated use is checked in the next lesson, not here.

  **Unlocks:** the `def (function)` snippet after Investigate.
---
You already know how to repeat steps with a loop. Now you will give a whole shape a **name**.

## Predict

```step
stage: predict
code: functions.py#copies
```

This program draws three squares by repeating the same code. What does it draw? Count how many times the number `100` appears.

## Run

```step
stage: run
code: functions.py#copies
try: { starter: "functions.py#copies", height: 440 }
check: { type: reflect, text: "I changed the same number in several places to resize all three squares." }
```

Run it. Then make all three squares half as big. Notice how many places you had to change.

## Investigate

```step
stage: investigate
code: functions.py#def
try: { starter: "functions.py#def", height: 440 }
check:
  type: question
  q: "To make all three squares half as big now, how many numbers change?"
  options: ["1", "3", "6", "12"]
  answer: 0
  explain: "Only the numbers inside def square(): change. The three calls are just the name square(), so they never need editing."
unlocks: [def-function]
```

`def square():` gives the loop a name. The steps only run when the name is **called**: `square()`. Try changing a `100` inside the `def`.

## Modify

```step
stage: modify
try: { starter: "functions.py#modify", height: 440 }
hint:
  - "Copy the pattern of `square`: the word `def`, a name, brackets, a colon, then the indented steps."
  - "A triangle has 3 sides. The turn at each corner is not 90."
check: { type: reflect, text: "I wrote my own function with a def and called it." }
```

Write `def triangle():` following the pattern of `square`, then call it.

## Make

```step
stage: make
try: { starter: "functions.py#make", height: 440 }
hint:
  - "Start with a shape you can already draw with a loop, then put `def name():` above it."
check:
  type: code
  text: "Write your function and call it three times."
  rules: { defs: 1, calls: 3 }
```

Write a function that draws any shape you like (a rectangle, a hexagon, a star), then call it three times in a row.

## Extend the house plan

```step
stage: modify
try: { starter: "functions.py#house", height: 440 }
```

A house plan is a few small named pieces: `wall()` and `roof()`. Run it. Then add a `door()` function and call it. Notice that you never edit `wall` or `roof` to do it.
