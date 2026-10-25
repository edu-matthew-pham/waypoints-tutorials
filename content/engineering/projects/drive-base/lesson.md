---
order: 4
unit: advanced
optional: true
title: Two-motor drive base
summary: "Design a small robot base that follows a line or avoids obstacles: two motors through a driver, a battery chosen against the brief, gearing and a chassis, tested on a course."
language: maths
shape: design
hook: "Every robot competition starts with the same question: can it drive where you want, for long enough, without falling apart?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8519
  url: http://127.0.0.1:8519/index.html
  readySelector: "#board svg"
  layout: full
---
**Client:** the STEM club, for a line-following or obstacle course. **Context:** a 2 m course on the floor.

**Brief:** complete the course **in under 60 s**, **without leaving the line (or touching an obstacle) more than once**, and **run for 30 minutes** on one battery. Two DC gear motors through a **motor driver**, a battery of **6 to 9 V** weighing **at most 150 g**, a chassis that fits in **20 × 20 cm**.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Completes the course in under 60 s", "Criterion"]
    - ["Leaves the line at most once", "Criterion"]
    - ["Runs for 30 minutes on one battery", "Criterion"]
    - ["Two DC gear motors and a motor driver", "Constraint"]
    - ["Battery 6–9 V, at most 150 g", "Constraint"]
    - ["Chassis fits in 20 × 20 cm", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two ideas for following the line. A: two line sensors, one each side of the line, correcting only when one of them sees it. B: one sensor that follows the edge of the line, turning back and forth. Which is more likely to meet the under-60 s criterion?"
      options: ["A: it can drive straight most of the time", "B: one sensor is quicker to read", "Neither: the motors decide the speed"]
      answer: 0
      feedback: [null, "Reading the sensor is quick either way. Following one edge means turning all the time, so it covers more ground.", "The motors set the top speed, but a robot that's zig-zagging can't use it."]
      explain: "With a sensor each side, the robot drives straight until it drifts. Following one edge means swinging back and forth the whole way round."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: two sensors and a 9 V battery (about 45 g). Strongest on weight. Weakest on the 30-minute run: small 9 V batteries run down fast with two motors. Idea 2: two sensors and four AA cells, 6 V (about 95 g). Strongest on battery life. Weakest on weight, but still under 150 g. I'll build idea 2, because the battery test is the criterion I'm least sure of, and it still fits the weight limit." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Choosing the battery against the brief and planning the turn signals before building connects Power and motors to a real design."
try: { playground: board, starter: "board.yml#battery", height: 560 }
tasks:
  - check: { type: board, text: "The two motors and the board draw about 900 mA together. Choose a battery that meets the brief (30 minutes using 80%, 6–9 V, 150 g at most).", when: "p = 1 and u = 80", explain: "4 × AA alkaline (107 min, 100 g) or the 2200 mAh LiPo (147 min, 120 g, and the LiPo safety lesson first). The PP3 and the 1000 mAh LiPo run out too soon; 4 × NiMH is under 6 V; 6 × NiMH is too heavy." }
  - check:
      type: question
      q: "The line drifts left under the robot. To steer back, the robot should…"
      options: ["Slow the left motor (or reverse it) and keep the right one going", "Speed up both motors", "Slow the right motor", "Stop both"]
      answer: 0
      feedback: [null, "That keeps the same heading.", "That turns it right, away from the line.", "Then it never gets back."]
      explain: "Turning towards the line: the inside wheel slows."
  - check: { type: reflect, text: "My plan has: the driver wiring (IN1–IN4, two ENA pins, shared ground), the battery chosen above, the sensor and its position, the chassis sketch with sizes, and the course tests." }
```

### The battery

### Steering

### The plan

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad (or the robotics simulator): the two motors on an L293D, the sensors and the sketch. It turns the right way for each sensor reading." }
  - check: { type: reflect, text: "For real (if you have the kit): chassis built (cut or 3D printed), motors, driver and battery mounted, sketch uploaded." }
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
      q: "Another team's robot ran the course in 52 s, 58 s and 64 s, left the line once in each run, and its battery lasted 35 minutes. Which criterion doesn't it meet?"
      options: ["Under 60 s: the third run took 64 s", "Leaving the line: it did that every run", "The battery: 35 minutes is too close", "None: the average time is under 60 s"]
      answer: 0
      feedback: [null, "The brief allows leaving the line once. Once a run is fine.", "35 minutes is more than the 30 the brief asks for.", "The average is 58 s, but one run took 64. The brief is about each run, so the slow one counts."]
      explain: "52 and 58 pass, but 64 doesn't, so it doesn't reliably finish under 60 s. Leaving the line once a run is allowed, and 35 minutes beats 30. Next to test: why one run was slower."
  - check: { type: reflect, text: "I ran the course at least three times, timing each run and counting how often it left the line, and ran a battery test (or calculated it from a measured current)." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: run 3. What happened: it took 64 s and slowed down on the last corner. Cause: the batteries were getting low; I checked by timing a run on fresh ones, 53 s. Change: fresh AAs at the start of each test session, and a note in my evaluation that time depends on charge. Re-test: three runs on fresh batteries, 51, 54 and 55 s." }]
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
