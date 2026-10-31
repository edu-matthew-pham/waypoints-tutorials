---
title: "Automated sorter"
subtitle: "Capstone projects · Years 9–10: move it · Lesson 5"
---

# Automated sorter

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Recycling centres sort millions of items a day with sensors and flaps. Can yours sort a box of mixed items, and how often is it right?


:::teacher-note

**In one sentence:** A Years 9–10 design project: an automated sorter where a light sensor (or a trained model) decides and a servo flap acts, prototyped on the board, built, and measured for accuracy on a 20-item test set.

**Students should be able to say:** I can turn a sensor reading into a decision and an action. I can measure accuracy on a test set. I can explain why a design that passes its code tests may still sort badly.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Inquire: the brief


:::keep-together

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion, Constraint

- Light items (400 or more) go to bin B: {{field-15}}
- The flap moves within 0.5 s: {{field-15}}
- At least 90% accurate on 20 test items: {{field-15}}
- Kit parts only: {{field-15}}
- USB power: {{field-15}}

:::


:::teacher-note

**Answer:** Light items (400 or more) go to bin B → Criterion; The flap moves within 0.5 s → Criterion; At least 90% accurate on 20 test items → Criterion; Kit parts only → Constraint; USB power → Constraint

Criteria are what you will test at the end; constraints decide what you are allowed to build with.

:::


## Develop: two ideas first


:::keep-together

### Two ways to do it

**Two ideas for where the light sensor goes. A: on the side of the chute, in the room's light. B: in a small box over the chute, with its own LED shining down. Which is more likely to meet the 90% accuracy criterion?**

☐ B: with its own light, the reading depends on the item, not on the room

☐ Neither: the code decides, not where the sensor is

☐ A: it's simpler, so it's more accurate

:::


:::teacher-note

**Answer:** B: with its own light, the reading depends on the item, not on the room

A box with its own LED keeps the light the same for every item, so the reading changes only when the item does.

:::


:::keep-together

### Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** One way to write it: Idea 1: a flap hinged at the top of the chute, swung by the servo arm. Strongest on speed: it only moves 45°. Weakest on accuracy: a light item can bounce off it into the wrong bin. Idea 2: a tray under the chute that tips left or right. Strongest on accuracy: the item stops before it's sorted. Weakest on speed: it tips and comes back for every item, which could go past 0.5 s. I'll build idea 1 with a short divider below the flap, because speed has a number on it in the brief and the divider stops most of the bouncing.

:::


## Develop: plan before you build


:::keep-together

### Accuracy

**Your sorter puts 17 of 20 test items in the right bin. What is its accuracy, as a percentage?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 85

17 ÷ 20 = 0.85 = 85%: under the 90% the brief needs.

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

☐ It worked when I tried it

☐ A test from the table that set the input and recorded the expected result

☐ My partner said it looks good

:::


:::teacher-note

**Answer:** A test from the table that set the input and recorded the expected result

A planned test with a recorded result is evidence; everything else is a feeling.

:::


## Exit ticket

:::keep-together

**Your sorter scores 18 of 20. Does it meet a 90% criterion?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Yes: 18 ÷ 20 = 90%, exactly the criterion.

:::

