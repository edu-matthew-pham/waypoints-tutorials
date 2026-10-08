---
title: Drawing with a turtle
summary: Predict, run and change short Python programs that draw shapes.
language: python
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground" 8123
  url: http://127.0.0.1:8123/index.html
  ready: Python code
  layout: full
pacing:
  keyDelayMs: 30
hook: "Loops are how a program draws 100 tiles, sends 100 emails or reads 100 sensors without 100 lines of code."
teachers: |
  **Where it leads:** tessellations and logo design, generative art, any task with repetition.

  **Class ideas:** design a floor tile and repeat it; recreate a simple logo from code; compare how many lines the same shape takes with and without a loop.

  **Watch for:** students who type `forward(100)` four times and see no reason to change; ask them to draw a 50-sided shape. Turning angle is often confused with the inside angle.

  **Unlocks:** movement commands after Run, the loop snippets after Investigate, pen and circle after Modify.
---
A turtle walks across the screen, leaving a line behind. Your program tells it where to go.

## Predict

```step
stage: predict
code: square.py#square
reveal: true
app: true
clip:
  - caption: The turtle starts in the middle, facing right.
  - type:
      into: Python code
      text: "@square.py#square"
  - click: Run
  - expect: { selector: "#status", contains: Finished }
  - expect: { selector: "#turtle-state", contains: "heading 0" }
```

Read the code. What shape will the turtle draw? Where will it finish?

## Run

```step
stage: run
code: square.py#square
try: { starter: "square.py#square", height: 420 }
check: { type: reflect, text: "I can explain what forward(100) and right(90) do to the turtle." }
unlocks: [forward, backward, right, left]
```

Run the program and compare it with your prediction.

## Investigate

```step
stage: investigate
code: square.py#loop
app: true
clip:
  - type:
      into: Python code
      text: "@square.py#loop"
  - click: Run
  - expect: { selector: "#status", contains: Finished }
check:
  type: question
  q: "How many times does the loop repeat?"
  options: ["2 times", "4 times", "90 times", "100 times"]
  answer: 1
  explain: "Right: range(4) repeats the indented lines 4 times, once for each side."
unlocks: [for-loop, square-loop]
```

The same square, in fewer lines. Which part repeats? What does `range(4)` control?

Next lesson: give a name to the size, then give the whole square a name.

## Modify

```step
stage: modify
try: { starter: "square.py#modify", height: 420 }
check: { type: reflect, text: "I changed one thing, ran it, and checked the result matched what I expected." }
unlocks: [pencolor, pensize, circle]
```

Change the loop to draw a triangle. Hint: the turtle turns by an exterior angle.

## Make

```step
stage: make
try: { starter: "square.py#make", height: 420 }
```

Design your own shape or pattern. Try `color`-style commands such as `pencolor("red")`.

## Use it

```step
stage: make
try: { starter: "square.py#use", height: 420 }
```

A row of tiles is just a loop inside a loop. The starter draws one tile. Wrap it in a loop that draws five, using `penup()`, `forward(120)` and `pendown()` to move to the next position.
