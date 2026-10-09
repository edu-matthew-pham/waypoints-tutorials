---
order: 6
title: Functions with parameters
summary: Make one function draw many different shapes, and keep your best ones as tools.
language: python
hook: "One well-made function can do the work of a hundred copied lines: sending a message, drawing a tile, converting a unit."
teachers: |
  **Where it leads:** return values, functions calling functions, and your own modules. This lesson is where fluency starts: students write several functions and call them many times.

  **Class ideas:** a pattern gallery where each student chooses `sides` and `copies`; a floor plan built from room calls; compare function designs and talk about what makes one easy to reuse.

  **Watch for:** parameters confused with variables (a parameter is filled in by each call); arguments passed in the wrong order; functions that only work for one value.

  **Abstraction:** saving to My tools is the first layer: use an idea without rewriting it. A tool is copied and pasted, so each paste is a copy; the Modules lesson uses that as its reason for modules. It unlocks late in this lesson so students have written a few functions first.

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
insight: "A parameter lets one function make many results: each call passes arguments in order, and the function calculates from them."
tasks:
  - check:
      type: trace
      text: "Fill in what each call passes to polygon(sides, size), and the angle it calculates."
      table: |
        | call | sides | size | angle |
        | polygon(3, 80) | 3 | 80 | [120] |
        | polygon(4, 80) | 4 | 80 | [90] |
        | polygon(6, 80) | [6] | [80] | [60] |
      explain: "Arguments go to the parameters in order, and angle = 360 / sides inside the function."
  - check:
      type: match
      q: "Match each piece with its role."
      pairs:
        - ["sides in def polygon(sides, size):", "a parameter: filled in by each call"]
        - ["6 in polygon(6, 80)", "an argument: the value for sides"]
        - ["angle = 360 / sides", "calculated inside the function"]
        - ["polygon(4, 80)", "a call: runs the function with these values"]
      explain: "Parameters are the names in the def. Arguments are the values you pass when you call it."
```

`polygon(sides, size)` has two parameters. The angle is calculated from `sides`, just like in the variables lesson.

### Trace three calls

What does each call pass in, and what does the function work out?

### Name the parts

Parameters and arguments sound alike. Match them up.

## Modify

```step
stage: modify
insight: "Extending a function means changing its definition and every call; it shows why parameters are a contract between the def and its callers."
try: { starter: "params.py#polygon", height: 440 }
tasks:
  - hint: "Add a line like polygon(8, 50) at the bottom."
    check: { type: code, text: "Add a fourth call to polygon and run it.", rules: { calls: 4 } }
  - hint:
      - "A new parameter goes in the brackets of the def, and a new value goes in every call."
      - "Inside the function, `pencolor(...)` takes the value of your new parameter."
    check: { type: code, text: "Give polygon a third parameter for the pen colour.", rules: { params: 3, uses: [pencolor] } }
```

### Draw one more shape

Call `polygon` with sides and size of your choice.

### Add a colour parameter

Change `polygon` so each call can choose its own pen colour, like `polygon(3, 80, "red")`.

## Make

```step
stage: make
try: { starter: "params.py#make", height: 440 }
hint:
  - "Use a loop to repeat. Inside it, call polygon, then turn a little."
  - "To go round once in total, each turn is 360 divided by the number of copies."
check:
  type: code
  text: "Write pattern(sides, copies) and run it."
  rules: { defs: 2, calls: 1 }
unlocks: [save-as-button]
```

Write `def pattern(sides, copies):` that draws `copies` polygons, turning a little between them so they fan out around a point.

## Keep it as a button

```step
stage: make
try: { starter: "params.py#make", height: 440 }
check: { type: reflect, text: "I saved a function to My tools and used it again." }
```

You have unlocked **Save selection to My tools**. Open **Reference**, put the cursor inside one of your functions, and click it. It appears under **My tools**, ready to copy into any program. A saved tool is the first layer of abstraction: you can use the idea again without rewriting it.

## Rearrange a floor plan

```step
stage: modify
try: { starter: "params.py#rooms", height: 460 }
```

A floor plan is `room(width, depth)` called many times. Run it. Move the kitchen, add a bathroom, then change `scale` and see the whole plan resize.
