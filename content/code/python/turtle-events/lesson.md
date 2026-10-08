---
order: 9
title: Events
summary: Make a program wait, then react when something happens.
language: python
hook: "Every app you use is waiting: for a tap, a key or a timer. Code runs when an event happens, not from top to bottom."
teachers: |
  **Where it leads:** the next lesson, where students build buttons from scratch. Turtle has no buttons, so they find out what a button really is.

  **Class ideas:** a stamp painting the class designs together; steering a turtle through a maze drawn on paper; a timer-based animation.

  **Watch for:** `onscreenclick(stamp())` with brackets (that calls the function now, instead of handing it over); the picture needing a click before the keys work; forgetting `mainloop()`, so the program ends before anything can happen.

  **Callbacks:** a function passed in by name and run later is a callback. This is the idea under every user interface, so it is worth naming.

  **Stop button:** a program waiting for events never finishes by itself. Students end it with Stop.

  **Unlocks:** nothing new; the events commands are in the playground reference.
---
Until now your program ran from the top to the bottom and stopped. Programs with a user interface do not work like that. They **wait**, and run a function when something happens. That function is called a **callback**.

In these examples, click the picture once before using the keyboard, and press **Stop** when you are done.

## Predict

```step
stage: predict
code: events.py#stamp
check:
  type: predict
  q: "What happens when you click on the picture?"
  options: ["Nothing: the program has already finished", "An orange dot appears where you click", "The turtle draws a square", "The turtle returns to the centre"]
  actual: "An orange dot appears at the spot you clicked. Each click runs the stamp function with the position of the click."
```

`onscreenclick(stamp)` hands the function over by **name**. The program then waits in `mainloop()`, and each click runs `stamp` with the place you clicked.

## Run

```step
stage: run
code: events.py#stamp
try: { starter: "events.py#stamp", height: 440 }
check: { type: reflect, text: "I can explain why the program keeps running after the last line, and what happens on each click." }
```

Run it, click around the picture, then press **Stop** and compare with your prediction.

## Investigate

```step
stage: investigate
code: events.py#keys
insight: "An event handler is a function the system calls for you. You can say which event runs which function, and bugs come from handing it over wrongly."
tasks:
  - check:
      type: match
      q: "Match each line with what it does."
      pairs:
        - ["onscreenclick(stamp)", "runs stamp each time the picture is clicked"]
        - ["onkey(go_up, \"Up\")", "runs go_up each time the Up arrow is pressed"]
        - ["ontimer(step, 50)", "runs step once, after 50 milliseconds"]
        - ["mainloop()", "keeps the program waiting for events"]
  - check:
      type: number
      q: "The program above is running. You press the Up arrow 5 times. How many times does go_up run?"
      answer: 5
      explain: "The handler runs once for every press: it is called for you each time the event happens."
  - check:
      type: bug
      code: events.py#bug
      text: "This program should stamp a dot where you click, but it stops with an error. Click the wrong line."
      answer: 7
      explain: "stamp() with brackets runs the function straight away, before any click. Handing it over needs the name only: onscreenclick(stamp)."
```

Look at how the keys work: each `onkey` pairs a function with a key.

### Match the lines

Say what each event line does.

### Count the presses

Work out how often a handler runs.

### Spot the bug

Here is a version where something is wrong.

## Modify

```step
stage: modify
insight: "Because the handler is a normal function, you can change what an event does by changing the function, without touching the event line."
try: { starter: "events.py#modify", height: 440 }
tasks:
  - hint: "The dot size is the first number in dot( ), and the colour is the word in quotes."
    check: { type: reflect, text: "I changed the dot and clicked to see the result." }
  - hint:
      - "A square is four sides: a loop that moves forward and turns right 90."
      - "Put the loop inside stamp, after the goto."
    check: { type: code, text: "Draw a square inside the click function.", rules: { defs: 1, loops: 1, uses: [onscreenclick] } }
```

### Restyle the stamp

Change the size and colour of the dot.

### Stamp a square

Make each click stamp a square.

## Make

```step
stage: make
try: { starter: "events.py#make", height: 440 }
hint:
  - "Write three small functions, one for each key, then connect each with onkey."
  - "Left turns left 30 degrees: `left(30)`. Right turns right 30."
check: { type: code, text: "Steer with three keys.", rules: { defs: 3, uses: [onkey, mainloop] } }
```

Steer the turtle with the keys: **Up** moves forward 20, **Left** turns left 30 degrees, **Right** turns right 30 degrees.

## Count the clicks

```step
stage: modify
try: { starter: "events.py#counter", height: 440 }
```

Games and apps keep a **score** that changes when events happen. This program keeps `score` in a variable and shows it each time you click. Make it count by 5 instead of 1, then make a key (`r`) that resets it to zero. Then add a timer: use `ontimer` to add a point every second.
