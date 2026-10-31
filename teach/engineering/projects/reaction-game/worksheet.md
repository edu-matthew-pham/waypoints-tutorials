---
title: "Reaction game"
subtitle: "Capstone projects · Years 8–9: sense and respond · Lesson 3"
---

# Reaction game

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Who in the class has the fastest reactions? To find out fairly, the game has to stop people guessing when the light will come on.


:::teacher-note

**In one sentence:** A Years 8–9 design project: a fair reaction timer with a random wait, a button and millis(), planned as an ordered loop with a false-start test, built in Tinkercad and optionally on hardware, tested and evaluated.

**Students should be able to say:** I can plan a program as an ordered loop. I can time an event with millis(). I can test a design for unfair or unexpected use.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Inquire: the brief


:::keep-together

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion, Constraint

- Waits a random 2 to 5 s before lighting: {{field-15}}
- Shows the reaction time in ms: {{field-15}}
- Catches a press before the light (false start): {{field-15}}
- Kit parts only: {{field-15}}
- USB power: {{field-15}}

:::


:::teacher-note

**Answer:** Waits a random 2 to 5 s before lighting → Criterion; Shows the reaction time in ms → Criterion; Catches a press before the light (false start) → Criterion; Kit parts only → Constraint; USB power → Constraint

Criteria are what you will test at the end; constraints decide what you are allowed to build with.

:::


## Develop: two ideas first


:::keep-together

### Two ways to do it

**Two ideas for the wait. A: wait with delay() for a random 2 to 5 seconds, then light the LED. B: keep checking the button while waiting, using millis(). Which can catch a false start?**

☐ B: during a delay() the sketch isn't looking at the button

☐ A: delay() is more accurate

☐ Both, as long as the wait is random

:::


:::teacher-note

**Answer:** B: during a delay() the sketch isn't looking at the button

While delay() runs, the sketch does nothing else, so it can't see an early press. A millis() loop keeps checking the button the whole time it waits.

:::


:::keep-together

### Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** One way to write it: Idea 1: B's millis() loop, with the time on the serial monitor. Strongest on false starts: it watches the button the whole time. Weakest on explaining itself without a laptop. Idea 2: the same loop with an LCD. Strongest for a lunchtime game nobody has to set up. Weakest on parts: more wiring to go wrong. I'll build idea 1 first, because catching false starts is the hard criterion, then add the LCD once every test passes.

:::


## Develop: plan before you build


:::keep-together

### The loop

**Put the game's loop() in order.**

A. `while (digitalRead(2) == LOW) { }`

B. `while (millis() - start < waitTime) { if (digitalRead(2) == HIGH) { falseStart(); return; } }`

C. `lit = millis();`

D. `digitalWrite(13, LOW);`

E. `digitalWrite(13, HIGH);`

F. `waitTime = random(2000, 5001);`

G. `Serial.println(millis() - lit);`

H. `start = millis();`

Correct order (letters): {{field-24}}

:::


:::teacher-note

**Answer:** see the program below

Wait a random time (watching for false starts), light the LED, note millis(), wait for the press, subtract, print.

```maths
waitTime = random(2000, 5001);
start = millis();
while (millis() - start < waitTime) { if (digitalRead(2) == HIGH) { falseStart(); return; } }
digitalWrite(13, HIGH);
lit = millis();
while (digitalRead(2) == LOW) { }
Serial.println(millis() - lit);
digitalWrite(13, LOW);
```

:::


:::keep-together

### Timing

**The LED lit at millis() = 41200 and the button was pressed at 41487. What is the reaction time in ms?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 287

41487 − 41200 = 287 ms.

:::


## Create: build it


**In the simulator.** 

**For real.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::wider

## Test: run your table


**Another team's results.** Before you run yours, read someone else's. Check each result against the brief, not against what looks close enough.

**Run the tests.** 

**Fix and re-test.** If everything passed first time, pick the test that came closest to failing and write about that instead.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Evaluate: against the brief


:::keep-together

### Which is evidence?

**Which is the strongest evidence that the design meets a criterion?**

☐ The code has no errors

☐ A test from the table that set the input and recorded the expected result

☐ My partner said it looks good

☐ It worked when I tried it

:::


:::teacher-note

**Answer:** A test from the table that set the input and recorded the expected result

A planned test with a recorded result is evidence; everything else is a feeling.

:::


## Exit ticket

:::keep-together

**Why can't a reaction game use a single delay() for its random wait?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Nothing is read during a delay, so a press before the light (a false start) can't be caught.

:::

