---
order: 3
unit: core
optional: true
title: Reaction game
summary: "Design a reaction timer: an LED lights after a random wait, the player presses a button, and the game shows their time in milliseconds, fairly."
language: maths
shape: design
hook: "Who in the class has the fastest reactions? To find out fairly, the game has to stop people guessing when the light will come on."
---
**Client:** the class, for a lunchtime competition. **Context:** two players take turns.

**Brief:** after a **random wait of 2 to 5 seconds** an LED lights; the player presses a button; the game shows the **reaction time in ms**. Pressing **before** the light is a false start and must be caught. Kit parts only; USB power; it must explain itself on the serial monitor or an LCD.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Waits a random 2 to 5 s before lighting", "Criterion"]
    - ["Shows the reaction time in ms", "Criterion"]
    - ["Catches a press before the light (false start)", "Criterion"]
    - ["Kit parts only", "Constraint"]
    - ["USB power", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two ideas for the wait. A: wait with delay() for a random 2 to 5 seconds, then light the LED. B: keep checking the button while waiting, using millis(). Which can catch a false start?"
      options: ["B: during a delay() the sketch isn't looking at the button", "A: delay() is more accurate", "Both, as long as the wait is random"]
      answer: 0
      feedback: [null, "delay() is accurate, but nothing else happens while it runs, so an early press goes unseen.", "The randomness isn't the problem. The sketch has to be watching the button during the wait."]
      explain: "While delay() runs, the sketch does nothing else, so it can't see an early press. A millis() loop keeps checking the button the whole time it waits."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: B's millis() loop, with the time on the serial monitor. Strongest on false starts: it watches the button the whole time. Weakest on explaining itself without a laptop. Idea 2: the same loop with an LCD. Strongest for a lunchtime game nobody has to set up. Weakest on parts: more wiring to go wrong. I'll build idea 1 first, because catching false starts is the hard criterion, then add the LCD once every test passes." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Putting the game loop in order and tracing its timing plans the logic; the false-start check is the part most designs forget."
tasks:
  - check:
      type: parsons
      code: "game.ino#loop"
      text: "Put the game's loop() in order."
      explain: "Wait a random time (watching for false starts), light the LED, note millis(), wait for the press, subtract, print."
  - check:
      type: number
      q: "The LED lit at millis() = 41200 and the button was pressed at 41487. What is the reaction time in ms?"
      answer: 287
      explain: "41487 − 41200 = 287 ms."
  - check: { type: reflect, text: "My plan has: the button (with a pull-down or INPUT_PULLUP) and LED wiring, the loop in order, and a test table including a deliberate false start." }
```

### The loop

### Timing

### The plan

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad: a button on pin 2, an LED on pin 13, and my sketch using random() and millis(). I played it and saw my time on the serial monitor." }
  - check: { type: reflect, text: "For real (if you have the kit): built, uploaded and played by at least three people." }
```

### In the simulator

### For real

## Test: run your table

```step
stage: modify
insight: "Judging another team's results against the brief first, then running the test table written in Develop and writing up one failure, is the evidence for the evaluation."
tasks:
  - check:
      type: question
      q: "Another team's game: ten rounds with waits from 2.1 to 4.9 s and times of 190 to 320 ms; three deliberate false starts, two caught and one shown as a time of 0 ms. Which criterion fails?"
      options: ["False starts: the one shown as 0 ms wasn't caught", "The waits: 4.9 s is too close to 5", "None: two out of three false starts is most of them"]
      answer: 0
      feedback: [null, "4.9 s is inside 2 to 5 seconds, so the waits are fine.", "The brief says a false start must be caught, so every one counts."]
      explain: "A time of 0 ms means the early press counted as a go. The brief says false starts must be caught, so one miss fails it. Next: when in the wait did that press happen?"
  - check: { type: reflect, text: "I ran my tests: ten normal rounds (all times shown, all waits between 2 and 5 s), and three deliberate false starts (each one caught), and recorded the results." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: false start 3. What happened: it showed 0 ms instead of \"Too soon!\". Cause: I only checked for an early press once, at the start of the wait, so a press near the end slipped through; I checked by pressing late on purpose. Change: check the button on every pass of the waiting loop. Re-test: ten more false starts at different times, all caught, and the ten normal rounds still fine." }]
      criteria: ["I named the test, not just \"it didn't work\".", "My cause is something I checked, not a guess I left there.", "I ran the same test again and wrote what it showed."]
```

### Another team's results

Before you run yours, read someone else's. Check each result against the brief, not against what looks close enough.

### Run the tests

### Fix and re-test

If everything passed first time, pick the test that came closest to failing and write about that instead.

## Evaluate: against the brief

```step
stage: practise
insight: "Judging the design criterion by criterion, with evidence from the tests, is what separates an evaluation from a description."
tasks:
  - check:
      type: question
      q: "Which is the strongest evidence that the design meets a criterion?"
      options: ["A test from the table that set the input and recorded the expected result", "It worked when I tried it", "My partner said it looks good", "The code has no errors"]
      answer: 0
      feedback: [null, "Which input did you try, and was it the one the criterion is about?", "Opinions aren't measurements.", "Code with no errors can still do the wrong thing."]
      explain: "A planned test with a recorded result is evidence; everything else is a feeling."
  - check: { type: reflect, text: "I wrote my evaluation: for each criterion, met or not, with the test that shows it; one improvement I would make and why; and who else could use it." }
```

### Which is evidence?

### Write it up
