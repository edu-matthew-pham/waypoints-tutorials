---
order: 2
title: Variables and operations
summary: Give a number a name, then calculate with it.
language: python
hook: "Games keep score, maps keep scale and apps keep your settings. All of them store a value under a name and calculate with it."
teachers: |
  **Where it leads:** parameters (the next lesson), scores and counters, scale in design and mapping.

  **Class ideas:** a shape generator where the class compares `sides` values; a spiral gallery; scale drawings of the classroom.

  **Watch for:** `=` read as "equals" instead of "store"; `size = size + 5` looking wrong to students used to algebra; `/` giving a decimal (72.0).

  **Unlocks:** the `variable` and `print` snippets after Run.
---
In the last lesson the numbers were typed straight into each command. Here you give a number a **name**, so you can change it in one place and calculate with it.

## Predict

```step
stage: predict
code: variables.py#polygon
```

`angle = 360 / sides` stores the result of a calculation. What will the turtle draw? How many sides, and why does `right(angle)` turn by that amount?

## Run

```step
stage: run
code: variables.py#polygon
try: { starter: "variables.py#polygon", height: 420 }
check: { type: reflect, text: "I can explain what sides, size and angle store, and where angle comes from." }
unlocks: [variable, print]
```

Run it and compare it with your prediction.

## Investigate

```step
stage: investigate
code: variables.py#print
try: { starter: "variables.py#print", height: 420 }
check:
  type: question
  q: "If sides = 6, what is angle?"
  options: ["45", "60", "72", "90"]
  answer: 1
  explain: "360 / 6 = 60. The turtle turns 60 degrees at each corner, six times, and makes one full turn of 360."
```

`print(angle)` shows a value under the drawing. Change `sides` and watch what `angle` becomes. Why does it always add up to a full turn?

## Modify

```step
stage: modify
try: { starter: "variables.py#modify", height: 420 }
hint:
  - "You should only need to change one number. Which variable controls the number of sides?"
check: { type: reflect, text: "I changed one variable and the whole shape updated." }
```

Draw a hexagon, then a 12-sided shape. Compare this with changing every `forward` and `right` by hand.

## Make

```step
stage: make
try: { starter: "variables.py#make", height: 420 }
hint:
  - "The line should get longer every time round the loop. What can change `size` inside the loop?"
  - "A variable can be updated using its own value: the new `size` is the old `size` plus something."
```

Draw a **square spiral**: each time round the loop, the line should be a little longer than the last.

## In the real world

```step
stage: modify
try: { starter: "variables.py#plan", height: 420 }
```

Plans and maps store a **scale**: how many pixels are one metre. This program draws a 6 m by 4 m room. Change the room to 8 m by 5 m, then change `scale` and notice the whole plan resizes. Then add a second room beside it.
