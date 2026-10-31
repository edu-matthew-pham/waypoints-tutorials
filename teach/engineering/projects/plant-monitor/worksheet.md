---
title: "Smart plant monitor"
subtitle: "Capstone projects · Years 8–9: sense and respond · Lesson 1"
---

# Smart plant monitor

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The garden club loses plants every holiday. Can a microcontroller tell them which pot is dry before it is too late?


:::teacher-note

**In one sentence:** A Years 8–9 design project: a plant monitor with a soil sensor, an alarm at a threshold and a display, planned with a test table, prototyped on the board, built in Tinkercad and optionally on hardware, tested and evaluated against the brief.

**Students should be able to say:** I can turn a brief into criteria and constraints. I can plan and run tests that check a threshold. I can evaluate my design against each criterion with evidence.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Inquire: the brief


:::keep-together

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion, Constraint

- Blinks the LED at a reading of 300 or below: {{field-15}}
- Stays off above 300: {{field-15}}
- Shows the current reading: {{field-15}}
- Only parts from the kit: {{field-15}}
- Runs on 4 × AA or USB: {{field-15}}
- Fits in a pencil-case-sized box: {{field-15}}

:::


:::teacher-note

**Answer:** Blinks the LED at a reading of 300 or below → Criterion; Stays off above 300 → Criterion; Shows the current reading → Criterion; Only parts from the kit → Constraint; Runs on 4 × AA or USB → Constraint; Fits in a pencil-case-sized box → Constraint

Criteria are what you will test at the end; constraints decide what you are allowed to build with.

:::


## Develop: two ideas first


:::keep-together

### Two ways to do it

**Two ideas for showing the reading. A: an LCD on the box. B: the serial monitor, when someone plugs a laptop in. The club checks the plants twice a week, with no laptop. Which fits the brief and the client better?**

☐ B: the serial monitor shows more numbers

☐ A: nobody plugs a laptop in to check the plants

☐ Neither: the blinking LED is enough

:::


:::teacher-note

**Answer:** A: nobody plugs a laptop in to check the plants

The brief allows either, but the client checks without a computer, so a reading on the box is the one they'll actually see.

:::


:::keep-together

### Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** One way to write it: Idea 1: an LCD and the LED in a pencil case, on 4 × AA. Strongest on being checked without a computer. Weakest on the batteries: the LCD's backlight drains AAs in days. Idea 2: the LED only, with the reading on the serial monitor when someone plugs in. Strongest on battery life. Weakest on showing the reading, which the brief asks for. I'll build idea 1 with the backlight on only while a button is held, because it meets every criterion and the button fixes the battery.

:::


## Develop: plan before you build


:::keep-together

### The test table

**Which test table checks the threshold best?**

☐ 150 blink, 800 off

☐ 0 blink, 1023 off

☐ 0 blink, 299 blink, 300 blink, 301 off, 1023 off

☐ 300 blink only

:::


:::teacher-note

**Answer:** 0 blink, 299 blink, 300 blink, 301 off, 1023 off

Both sides of the threshold, the threshold itself, and the ends.

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

☐ It worked when I tried it

☐ The code has no errors

☐ A test from the table that set the input and recorded the expected result

☐ My partner said it looks good

:::


:::teacher-note

**Answer:** A test from the table that set the input and recorded the expected result

A planned test with a recorded result is evidence; everything else is a feeling.

:::


## Exit ticket

:::keep-together

**Name one criterion of your monitor and the test that shows whether it is met.**

{{lines-3}}

:::


:::teacher-note

**Answer:** For example: blinks at 300 or below; test at readings 299, 300 and 301.

:::

