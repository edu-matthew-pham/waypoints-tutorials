---
title: Variables, functions and your own tools
summary: Name a value, name a whole shape, turn it into a button, then collect related functions in a module.
language: python
modules: [shapes]
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground" 8123
  url: http://127.0.0.1:8123/index.html
  ready: Python code
  layout: full
pacing:
  keyDelayMs: 30
hook: "Every app you use is built from small named functions that other code calls. You are about to write some."
teachers: |
  **Where it leads:** reusable code, libraries and imports in any language, the idea that you can use a tool without knowing how it is built.

  **Class ideas:** a class library of shape functions where each student contributes one; a garden or town drawn from functions; swap modules and use a classmate's.

  **Watch for:** `def` seen as the thing that draws (it only describes); parameters confused with variables; moving code into a module without the import line.

  **Abstraction:** Save as button is the first layer (reuse an idea without rewriting it). A module is the second (related functions grouped in one file). Not every function needs a module.

  **Unlocks:** variable, def, Save as button and + module are all earned in order; the ready-made shapes module unlocks at the end.
---
You can already repeat steps with a loop. Now you will give names to things, so one idea can be reused.

## Predict

```step
stage: predict
code: shapes_demo.py#variable
```

`size` is a variable. What will this draw? What single change would make the square twice as big?

## Run

```step
stage: run
code: shapes_demo.py#variable
try: { starter: "shapes_demo.py#variable", height: 420 }
check: { type: reflect, text: "I changed size once and the whole square changed." }
unlocks: [variable]
```

Run it, then change `size = 100` to another number and run it again.

## Investigate

```step
stage: investigate
code: shapes_demo.py#function
try: { starter: "shapes_demo.py#function", height: 420 }
check:
  type: question
  q: "What does the last line, square(100), do?"
  options: ["It defines the function", "It runs the function with size 100", "It draws a circle", "Nothing"]
  answer: 1
  explain: "def only describes the steps. The call square(100) is what runs them."
unlocks: [def-function]
```

`def square(size):` gives the loop a name. The name in brackets is a **parameter**: a value the caller provides. Try `square(50)` and then call it twice.

## Modify

```step
stage: modify
try: { starter: "shapes_demo.py#write", height: 420 }
check: { type: reflect, text: "I wrote my own function with a def and called it." }
unlocks: [save-as-button]
```

Write `def triangle(size):` yourself, following the pattern of `square`, then call it. A triangle turns by 120 degrees.

## Make a button

```step
stage: make
try: { starter: "shapes_demo.py#write", height: 420 }
check: { type: reflect, text: "I saved a function as a button and used it again." }
unlocks: [my-module]
```

You have unlocked **Save selection as button**. Open **Snippets**, put the cursor inside one of your functions, and click it. Your function is now a tool under **My tools**. A button is the first layer of abstraction: you use the idea without rewriting it.

## Make a module

```step
stage: make
try: { starter: "shapes_demo.py#module", height: 420 }
check: { type: reflect, text: "I put related functions in a module and imported one into my program." }
unlocks: [shapes.square, shapes.triangle, shapes.polygon]
```

A **module** is a file of related functions that other programs can `import`. Click **+ module**, name it, and move your shape functions into it. Give each a `"""docstring"""` and they appear as buttons. Clicking one adds the `from ... import ...` line for you.

Not every function needs a module. A module is for a group of functions that belong together. The ready-made **Module: shapes** under Snippets shows how one looks: click **Show how it works**.

## In the real world

```step
stage: info
```

A function that draws a room is how a floor plan starts. Try `room(width, depth)` and place rooms with `goto`, then represent the layout of your own house. Using a variable like `scale = 20` turns metres into pixels, so one change resizes the whole plan.
