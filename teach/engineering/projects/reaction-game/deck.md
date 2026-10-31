---
marp: true
theme: default
html: true
---

# Reaction game

Capstone projects · Years 8–9: sense and respond

<!-- Speaker note: A Years 8–9 design project: a fair reaction timer with a random wait, a button and millis(), planned as an ordered loop with a false-start test, built in Tinkercad and optionally on hardware, tested and evaluated. About 150 minutes (About 3 lessons (around 150 minutes). Inquire part lesson · Develop 1 · Create 1 · Test and evaluate 1). -->

---

## Today

- I can plan a program as an ordered loop.
- I can time an event with millis().
- I can test a design for unfair or unexpected use.

<!-- Speaker note: Before class: random(2000, 5001) and millis() are new: give them as a recipe card. A first version with delay() for the wait cannot catch false starts; that limitation is a good Evaluate point and a reason for the millis() version. If you assess with MYP Design, the steps line up with the criteria: - **A Inquiring and analysing:** the brief, its criteria and constraints, and research into parts (Inquire). - **B Developing ideas:** a design specification, the circuit and code plan, and the test table written before building (Develop). - **C Creating the solution:** building it (in the simulator, then for real), following the plan and justifying changes (Create). - **D Evaluating:** testing against the specification, recording failures, improvements and impact (Test, Evaluate). Otherwise, use the same four headings as a simple rubric: each step's reflect checks are the evidence list. Teacher: Develop: ask how the game could know about a press during the wait. Teacher: Test: the class tries to cheat it. -->

---

## Why it matters

> Who in the class has the fastest reactions? To find out fairly, the game has to stop people guessing when the light will come on.

<!-- Speaker note: **Client:** the class, for a lunchtime competition. **Context:** two players take turns. **Brief:** after a **random wait of 2 to 5 seconds** an LED lights; the player presses a button; the game shows the **reaction time in ms**. Pressing **before** the light is a false start and must be caught. Kit parts only; USB power; it must explain itself on the serial monitor or an LCD. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Inquire: the brief

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion · Constraint

Waits a random 2 to 5 s before lighting · Shows the reaction time in ms · Catches a press before the light (false start) · Kit parts only · USB power

* Answer: Waits a random 2 to 5 s before lighting → Criterion; Shows the reaction time in ms → Criterion; Catches a press before the light (false start) → Criterion; Kit parts only → Constraint; USB power → Constraint

<!-- Speaker note: Criteria are what you will test at the end; constraints decide what you are allowed to build with. What this step is for: Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two ways to do it

**Two ideas for the wait. A: wait with delay() for a random 2 to 5 seconds, then light the LED. B: keep checking the button while waiting, using millis(). Which can catch a false start?**

- B: during a delay() the sketch isn't looking at the button
- A: delay() is more accurate
- Both, as long as the wait is random

* Answer: B: during a delay() the sketch isn't looking at the button

<!-- Speaker note: While delay() runs, the sketch does nothing else, so it can't see an early press. A millis() loop keeps checking the button the whole time it waits. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

* Answer: One way to write it: Idea 1: B's millis() loop, with the time on the serial monitor. Strongest on false starts: it watches the button the whole time. Weakest on explaining itself without a laptop. Idea 2: the same loop with an LCD. Strongest for a lunchtime game nobody has to set up. Weakest on parts: more wiring to go wrong. I'll build idea 1 first, because catching false starts is the hard criterion, then add the LCD once every test passes.

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The loop

**Put the game's loop() in order.**

```maths
while (digitalRead(2) == LOW) { }
while (millis() - start < waitTime) { if (digitalRead(2) == HIGH) { falseStart(); return; } }
lit = millis();
digitalWrite(13, LOW);
digitalWrite(13, HIGH);
waitTime = random(2000, 5001);
Serial.println(millis() - lit);
start = millis();
```

<!-- Speaker note: Wait a random time (watching for false starts), light the LED, note millis(), wait for the press, subtract, print. Correct order: waitTime = random(2000, 5001); start = millis(); while (millis() - start < waitTime) { if (digitalRead(2) == HIGH) { falseStart(); return; } } digitalWrite(13, HIGH); lit = millis(); while (digitalRead(2) == LOW) { } Serial.println(millis() - lit); digitalWrite(13, LOW); -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Timing

**The LED lit at millis() = 41200 and the button was pressed at 41487. What is the reaction time in ms?**

* Answer: 287

<!-- Speaker note: 41487 − 41200 = 287 ms. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Create: build it



- **In the simulator:** 
- **For real:** 

<!-- Speaker note: What this step is for: Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world. For students who need more support: A recipe card for random and millis, and the loop with the false-start check given. For early finishers: Keep the best time of the session, and show a two-player result. The hard part, on purpose: The false start is the hard part: it needs the button checked during the wait, not delay(). Let students meet the problem with delay() first. When students get stuck: False starts are never caught. Ask: Is the button read while the game is waiting? Fix: Wait in a loop that checks millis() and the button, not one long delay(). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Test: run your table



- **Another team's results:** Before you run yours, read someone else's. Check each result against the brief, not against what looks close enough.
- **Run the tests:** 
- **Fix and re-test:** If everything passed first time, pick the test that came closest to failing and write about that instead.

<!-- Speaker note: What this step is for: Judging another team's results against the brief first, then running the test table written in Develop and writing up one failure, is the evidence for the evaluation. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which is evidence?

**Which is the strongest evidence that the design meets a criterion?**

- The code has no errors
- A test from the table that set the input and recorded the expected result
- My partner said it looks good
- It worked when I tried it

* Answer: A test from the table that set the input and recorded the expected result

<!-- Speaker note: A planned test with a recorded result is evidence; everything else is a feeling. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why can't a reaction game use a single delay() for its random wait?**

* Nothing is read during a delay, so a press before the light (a false start) can't be caught.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Other Years 8–9 projects: Smart plant monitor, Parking assistant. -->
