---
order: 5
title: Functions that give answers
summary: Return a value, combine functions, and use them inside loops.
language: python
hook: "Calculators, maps and games are full of functions that take something in and give an answer back."
teachers: |
  **Where it leads:** reusable calculations, building programs out of small tested pieces, and later modules. This is the second visit to functions: students already know how to write a function with parameters, so the focus is on `return` and on functions working together.

  **Class ideas:** a class "toolbox" of unit conversions; a street where each student's house function has a different design; compare `print` and `return`.

  **Watch for:** `print` used where `return` is needed (the value shows up but cannot be reused); code written after a `return` that never runs; forgetting to use the returned value.

  **Scaffolding fades:** the Make step gives a blank file and a hint, with no starter functions. This is where you see whether the idea of a function has stuck.

  **Checkpoint:** the Make step has a code check that looks for a function defined, called, and used in a loop.
---
You can write functions that draw. Now you will write functions that **give an answer back**, and combine several functions to build something bigger.

## Predict

```step
stage: predict
code: returns.py#returns
```

`metres(5)` gives back a number. What do you think `forward(metres(5))` does? How far will the turtle move, and how far does the second `forward` take it?

## Run

```step
stage: run
code: returns.py#returns
try: { starter: "returns.py#returns", height: 420 }
check: { type: reflect, text: "I can explain how metres(5) becomes a number that forward uses." }
```

Run it and compare it with your prediction. Try `metres(10)`.

## Investigate

```step
stage: investigate
code: returns.py#print
try: { starter: "returns.py#print", height: 420 }
check:
  type: question
  q: "What does the word return do in metres?"
  options: ["It draws the shape again", "It gives the answer back to the code that called the function", "It stops the program", "It prints the answer"]
  answer: 1
  explain: "return hands the value back, so forward(metres(5)) can use it. print only shows a value; it does not give it back."
```

`print(metres(5))` shows the answer under the drawing. Change `scale` and watch both the printed value and the drawing change.

## Modify

```step
stage: modify
try: { starter: "returns.py#modify", height: 460 }
hint:
  - "Your function should work out the answer and give it back with return, not print it."
  - "Call your function inside print(...), for example with this room's width and depth."
check: { type: reflect, text: "I wrote a function that returns a value, and I used the value." }
```

`room` draws a room using `metres`. Functions are working together here: `room` calls `metres`. Write `def area(width, depth)` that **returns** the area, and print the area of this room.

## Make a street

```step
stage: make
try: { starter: "returns.py#make", height: 460 }
hint:
  - "Write a function that draws one house, with a size parameter. Then repeat it."
  - "A loop calls your function five times. A new size for each house can come from the loop variable."
check:
  type: code
  text: "Write a function for a house, call it in a loop, and run it."
  rules: { defs: 1, calls: 1, loops: 1 }
```

Draw a **street of five houses**. This time there is no starter: write the function yourself, then use a loop to repeat it.

## Vary a street of houses

```step
stage: modify
try: { starter: "returns.py#street", height: 460 }
```

This is a finished street. Make the houses all the same size, then make them shrink along the street. Add a sixth house, or change the gap between them.
