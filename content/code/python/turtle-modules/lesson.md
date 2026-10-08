---
order: 8
title: Modules
summary: Keep related functions together in a file you can import, like a toolbox.
language: python
modules: [shapes]
hook: "Every Python program you will ever use imports other people's modules. Now you will build your own."
teachers: |
  **Where it leads:** libraries, packages and sharing code between programs and people. Not every function needs a module; a module is for a group of functions that belong together.

  **Class ideas:** each student builds a module for a theme (houses, trees, stars) and a classmate imports it; a class "town" made of everyone's modules.

  **Watch for:** the module file not being named the same as the import; forgetting the import line; putting the drawing calls inside the module so they run on import.

  **Abstraction:** a button is the first layer (reuse an idea). A module is the second: related functions collected in a file other programs can import.

  **Prerequisite:** students should already be comfortable writing functions with parameters.

  **Unlocks:** the ready-made shapes buttons after Investigate; the `+ module` tab after Run.
---
You have written several functions. A **module** is a file that holds related functions, so any program can import them.

## Predict

```step
stage: predict
code: modules.py#use
```

This program never defines `square` or `triangle`. What does it draw? Where do you think they come from?

## Run

```step
stage: run
code: modules.py#use
try: { starter: "modules.py#use", height: 420 }
check: { type: reflect, text: "I ran a program that imports functions from a module." }
unlocks: [my-module]
```

Run it. The line `from shapes import square, triangle` brings two ready-made functions into your program.

## Investigate: one bug, two copies

```step
stage: investigate
insight: "Copied code multiplies the work of fixing it; one shared module is fixed once."
tasks:
  - check:
      type: bug
      code: modules.py#copies
      text: "A square should turn 90 degrees. Click a line with the bug."
      answer: [8, 20]
      explain: "right(80) is wrong in both programs, because each has its own copy."
  - check:
      type: question
      q: "You fix the bug in program_a.py. What happens to program_b.py?"
      options: ["It is fixed too", "It still has the bug, so you fix it separately", "It stops working", "Python warns you"]
      answer: 1
      explain: "Each file has its own copy of wall, so each copy needs fixing. If both programs imported wall from one module, you would fix it once."
```

Two programs both need `wall`, so each has its own copy. This is the problem a module solves.

### Find the bug

A square should turn 90 degrees.

### Count the fixes

You fix one copy. What about the other?

## Investigate: where does it come from?

```step
stage: investigate
code: modules.py#use
try: { starter: "modules.py#use", height: 420 }
check:
  type: question
  q: "Where is square defined?"
  options: ["In this program", "In shapes.py, which this program imports", "Inside the turtle module", "Nowhere"]
  answer: 1
  explain: "The def lives in shapes.py. The import line makes it available here."
unlocks: [shapes.square, shapes.triangle, shapes.polygon]
```

Open **Snippets**, find **Module: shapes** and click **Show how it works**. Compare it with the functions you have written.

## Modify

```step
stage: modify
try: { starter: "modules.py#move", height: 460 }
hint:
  - "Click + module, give it a name, then cut the three functions and paste them there."
  - "Your program needs a line at the top: from yourname import house"
check: { type: reflect, text: "I moved my functions into a module and imported them." }
```

These three functions are all in one file. Click **+ module**, move them into it, and import `house` back into `main.py`. The program should draw the same house.

## Make

```step
stage: make
try: { starter: "modules.py#make", height: 460 }
hint:
  - "Pick a theme for your module, such as trees, stars or buildings."
  - "Keep drawing calls in main.py. The module should only contain functions."
```

Create a module of your own with at least three related functions. Import it and use it to draw a small scene.

## Extend a street

```step
stage: modify
try: { starter: "modules.py#street", height: 440 }
```

A street is a few buildings repeated, and each building comes from a module. Run it. Add a roof colour, a taller house, or a gap in the street. You are changing the plan without rewriting any of the shapes.
