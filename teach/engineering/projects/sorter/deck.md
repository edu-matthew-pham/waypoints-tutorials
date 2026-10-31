---
marp: true
theme: default
html: true
---

# Automated sorter

Capstone projects · Years 9–10: move it

<!-- Speaker note: A Years 9–10 design project: an automated sorter where a light sensor (or a trained model) decides and a servo flap acts, prototyped on the board, built, and measured for accuracy on a 20-item test set. About 250 minutes (About 4 to 6 lessons (around 250 minutes). Inquire part lesson · Develop 1 · Create 2–3 · Test and evaluate 1). -->

---

## Today

- I can turn a sensor reading into a decision and an action.
- I can measure accuracy on a test set.
- I can explain why a design that passes its code tests may still sort badly.

<!-- Speaker note: Before class: Real light readings depend on room light and how the item passes the sensor; a shade or an LED lighting the item helps. The Servo library is a recipe until the class has met libraries. Links: Code › Train a recycling sorter (Pattern Trainer) for the stretch route. If you assess with MYP Design, the steps line up with the criteria: - **A Inquiring and analysing:** the brief, its criteria and constraints, and research into parts (Inquire). - **B Developing ideas:** a design specification, the circuit and code plan, and the test table written before building (Develop). - **C Creating the solution:** building it (in the simulator, then for real), following the plan and justifying changes (Create). - **D Evaluating:** testing against the specification, recording failures, improvements and impact (Test, Evaluate). Otherwise, use the same four headings as a simple rubric: each step's reflect checks are the evidence list. Teacher: Develop: the code tests and the accuracy test answer different questions; ask which is which. Teacher: Test: someone else chooses the 20 items. -->

---

## Why it matters

> Recycling centres sort millions of items a day with sensors and flaps. Can yours sort a box of mixed items, and how often is it right?

<!-- Speaker note: **Client:** the school's recycling team. **Context:** light and dark items (or paper and plastic) slide down a chute past a sensor. **Brief:** a light sensor reads each item; **light items (reading 400 or more) go to bin B, dark items to bin A**; a servo flap moves within **0.5 s**; the sorter must be **at least 90% accurate on a test set of 20 items**. Kit parts only; USB power. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Inquire: the brief

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion · Constraint

Light items (400 or more) go to bin B · The flap moves within 0.5 s · At least 90% accurate on 20 test items · Kit parts only · USB power

* Answer: Light items (400 or more) go to bin B → Criterion; The flap moves within 0.5 s → Criterion; At least 90% accurate on 20 test items → Criterion; Kit parts only → Constraint; USB power → Constraint

<!-- Speaker note: Criteria are what you will test at the end; constraints decide what you are allowed to build with. What this step is for: Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two ways to do it

**Two ideas for where the light sensor goes. A: on the side of the chute, in the room's light. B: in a small box over the chute, with its own LED shining down. Which is more likely to meet the 90% accuracy criterion?**

- B: with its own light, the reading depends on the item, not on the room
- Neither: the code decides, not where the sensor is
- A: it's simpler, so it's more accurate

* Answer: B: with its own light, the reading depends on the item, not on the room

<!-- Speaker note: A box with its own LED keeps the light the same for every item, so the reading changes only when the item does. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

* Answer: One way to write it: Idea 1: a flap hinged at the top of the chute, swung by the servo arm. Strongest on speed: it only moves 45°. Weakest on accuracy: a light item can bounce off it into the wrong bin. Idea 2: a tray under the chute that tips left or right. Strongest on accuracy: the item stops before it's sorted. Weakest on speed: it tips and comes back for every item, which could go past 0.5 s. I'll build idea 1 with a short divider below the flap, because speed has a number on it in the brief and the divider stops most of the bouncing.

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 22px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Develop: plan before you build

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fengineering%2Fprojects%2Fsorter%2Fstep-3&code=widget%3A+arduino%0Aled%3A+13%0Aknob%3A+A0%0Alevel%3A+50%0Atest%3A+100%2C+off%0Atest%3A+399%2C+off%0Atest%3A+400%2C+on%0Atest%3A+900%2C+on%0Acode%3A+int+level+%3D+0%3B%0Acode%3A%0Acode%3A+void+setup%28%29+%7B%0Acode%3A+pinMode%2813%2C+OUTPUT%29%3B%0Acode%3A+%7D%0Acode%3A%0Acode%3A+void+loop%28%29+%7B%0Acode%3A+level+%3D+analogRead%28A0%29%3B%0Acode%3A+%2F%2F+flap+to+bin+B+%28LED+on%29+or+bin+A+%28LED+off%29%0Acode%3A+delay%28100%29%3B%0Acode%3A+%7D%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/engineering/projects/sorter/?full=step-3#step-3)

<!-- Speaker note: What this step is for: Prototyping the decision against threshold tests, then planning a separate accuracy test with real items, separates "the code is right" from "the machine sorts well". -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Accuracy

**Your sorter puts 17 of 20 test items in the right bin. What is its accuracy, as a percentage?**

* Answer: 85

<!-- Speaker note: 17 ÷ 20 = 0.85 = 85%: under the 90% the brief needs. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Create: build it



- **In the simulator:** 
- **For real:** 

<!-- Speaker note: What this step is for: Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world. For students who need more support: A servo recipe card and a results table for the 20 items. For early finishers: The trained-model route: compare its accuracy with the light sensor's on the same 20 items. The hard part, on purpose: Students treat 100% on their own five items as proof. Hold the 20-item test set back until Test. When students get stuck: Accuracy is poor. Ask: What do the misses have in common? Fix: Calibrate the threshold with real items, or shield the sensor from room light. -->

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
- It worked when I tried it
- A test from the table that set the input and recorded the expected result
- My partner said it looks good

* Answer: A test from the table that set the input and recorded the expected result

<!-- Speaker note: A planned test with a recorded result is evidence; everything else is a feeling. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Your sorter scores 18 of 20. Does it meet a 90% criterion?**

* Yes: 18 ÷ 20 = 90%, exactly the criterion.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Other Years 9–10 projects: Two-motor drive base, Lift. -->
