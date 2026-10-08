---
order: 1
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
app: true
query: { code: "@square.py#triangle", view: output, autorun: 1 }
clip:
  - wait: 600
  - expect: { selector: "#status", contains: Finished }
  - expect: { selector: "#turtle-state", contains: "heading 0" }
caption: "The expected result: a triangle"
reveal: Show what the triangle should look like
hint:
  - "A square turns the turtle 90° four times. How many times does a triangle turn, and what do all the turns add up to?"
  - "Two numbers change: how many times the loop repeats, and how far the turtle turns each time."
check: { type: reflect, text: "I changed one thing, ran it, and checked the result matched what I expected." }
unlocks: [pencolor, pensize, circle]
```

Change the loop so it draws a triangle.

## Make

```step
stage: make
try: { starter: "square.py#make", height: 420 }
```

Draw a house: a square for the walls, and two lines on top that meet in a point for the roof. Then change the colours with `pencolor("red")`.

## In the real world

```step
stage: info
```

Tilers and architects plan floors and rooms with exactly this idea. Where could you use it? Try drawing a row of floor tiles, or a plan of your own bedroom, with loops.
