---
order: 4
title: Functions with parameters
summary: Make one function draw many different shapes, and keep your best ones as buttons.
language: python
hook: "One well-made function can do the work of a hundred copied lines: sending a message, drawing a tile, converting a unit."
teachers: |
  **Where it leads:** return values, functions calling functions, and your own modules. This lesson is where fluency starts: students write several functions and call them many times.

  **Class ideas:** a pattern gallery where each student chooses `sides` and `copies`; a floor plan built from room calls; compare function designs and talk about what makes one easy to reuse.

  **Watch for:** parameters confused with variables (a parameter is filled in by each call); arguments passed in the wrong order; functions that only work for one value.

  **Abstraction:** Save as button is the first layer: use an idea without rewriting it. It unlocks late in this lesson so students have written a few functions first.

  **Unlocks:** `save-as-button` after the pattern challenge.
---
Last lesson `square()` always drew the same size. A **parameter** lets each call say what it needs.

## Predict

```step
stage: predict
code: params.py#nested
```

`size` is a parameter. What will this draw? Where do the three squares share a corner, and why?

## Run

```step
stage: run
code: params.py#nested
try: { starter: "params.py#nested", height: 440 }
check: { type: reflect, text: "I can explain how square(50) and square(150) draw different squares from the same def." }
```

Run it and compare it with your prediction. Then call `square` with other sizes.

## Investigate

```step
stage: investigate
code: params.py#polygon
try: { starter: "params.py#polygon", height: 440 }
check:
  type: question
  q: "In polygon(6, 80), what does 6 do?"
  options: ["It is the size of each side", "It is the number of sides", "It is the angle in degrees", "It repeats the function 6 times"]
  answer: 1
  explain: "Arguments go to the parameters in order: 6 goes to sides and 80 goes to size."
```

`polygon(sides, size)` has two parameters. The angle is calculated from `sides`, just like in the variables lesson. Which call draws the biggest shape?

## Modify

```step
stage: modify
try: { starter: "params.py#polygon", height: 440 }
hint:
  - "A new parameter goes in the brackets of the def, and a new value goes in every call."
  - "Inside the function, `pencolor(...)` takes the value of your new parameter."
check: { type: reflect, text: "I added a parameter to a function and updated every call." }
```

Add a third parameter, `colour`, so each call can choose its own pen colour: `polygon(3, 80, "red")`.

## Make

```step
stage: make
try: { starter: "params.py#make", height: 440 }
hint:
  - "Use a loop to repeat. Inside it, call polygon, then turn a little."
  - "To go round once in total, each turn is 360 divided by the number of copies."
check: { type: reflect, text: "I wrote a function that calls another function inside a loop." }
unlocks: [save-as-button]
```

Write `def pattern(sides, copies):` that draws `copies` polygons, turning a little between them so they fan out around a point.

## Keep it as a button

```step
stage: make
try: { starter: "params.py#make", height: 440 }
check: { type: reflect, text: "I saved a function as a button and used it again." }
```

You have unlocked **Save selection as button**. Open **Snippets**, put the cursor inside one of your functions, and click it. It appears under **My tools**. A button is the first layer of abstraction: you can use the idea again without rewriting it.

## In the real world

```step
stage: modify
try: { starter: "params.py#rooms", height: 460 }
```

A floor plan is `room(width, depth)` called many times. Run it. Move the kitchen, add a bathroom, then change `scale` and see the whole plan resize.
