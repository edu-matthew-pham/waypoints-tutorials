---
order: 6
unit: advanced
optional: true
title: Lift
assumes: [weight, energy-transfer]
summary: "Design a motor-driven lift that raises a load to a height within a time: choose a gear ratio against the brief, drive the motor through a driver, and compare the measured result with the prediction."
language: maths
shape: design
hook: "The winch lesson worked on paper. Does a real motor, real gears and real friction agree with the numbers?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8521
  url: http://127.0.0.1:8521/index.html
  readySelector: "#board svg"
  layout: full
---
**Client:** a theatre group that needs a small prop to rise on cue. **Context:** a model lift on the bench.

**Brief:** lift a **450 g** load **1 m** in **15 s or less**, stop at the top (a limit switch or a timed stop), and lower it again. The motor turns at **120 rpm** and lifts **200 g** with no gears; the drum winds **0.1 m** a turn. Kit gears (8, 16, 24, 40 teeth), a motor driver, its own battery.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Lifts 450 g by 1 m", "Criterion"]
    - ["Takes 15 s or less", "Criterion"]
    - ["Stops at the top and can lower again", "Criterion"]
    - ["Motor 120 rpm, 200 g with no gears", "Constraint"]
    - ["Gears from the kit: 8, 16, 24, 40", "Constraint"]
    - ["A motor driver and its own battery", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two gear pairs meet the brief on paper: 8 → 24 lifts up to 600 g in 15 s, and 16 → 40 lifts up to 500 g in 12.5 s. What's the catch with 8 → 24?"
      options: ["It takes exactly 15 s, so any slowing at all fails the time", "It can't lift 450 g", "It turns the drum the wrong way"]
      answer: 0
      feedback: [null, "600 g is more than 450 g, so it can lift it. The problem is the time.", "Direction comes from the motor driver, not the gear pair."]
      explain: "15 s is the limit, and a real lift slows a little with a load and with losses, so 8 → 24 has no time to spare. 16 → 40 has 2.5 s spare, though less extra force."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: 16 → 40 with a timed stop at 12.5 s. Strongest on time: 2.5 s spare. Weakest on stopping at the top: if the lift slows down, the timed stop leaves it short. Idea 2: 16 → 40 with a limit switch at the top. Strongest on stopping in the right place whatever the speed. Weakest on parts: one more switch to mount and wire. I'll build idea 2, because stopping at the top is in the brief and a timed stop only works if nothing changes." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Choosing the gear pair on the board makes the prediction; the real build then tests the model (no friction) against the world."
try: { playground: board, starter: "board.yml#develop", height: 600 }
tasks:
  - check: { type: board, text: "Choose a gear pair that meets the brief, and lift with it.", when: "p = 1 and l = 1", explain: "8 → 24 (600 g, 15 s) or 16 → 40 (500 g, 12.5 s). With real friction, the one with more margin is safer." }
  - check:
      type: question
      q: "Real gears lose about 10% of the force at each mesh. Which pair has more margin on strength?"
      options: ["8 → 24: 600 g against 450 g", "16 → 40: 500 g against 450 g", "They are the same", "Neither: friction doesn't matter"]
      answer: 0
      feedback: [null, "500 × 0.9 = 450: no margin at all.", "Work out each one × 0.9.", "It decides whether the real lift stalls."]
      explain: "600 × 0.9 = 540 g, still over 450. 16 → 40 drops to exactly 450 with no margin."
  - check: { type: reflect, text: "My plan has: the gear pair and why, the driver wiring (direction for up and down, ENA), how it stops at the top, and a test table with predicted and measured times." }
```

### Choose the gears

### Margin

### The plan

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad: the motor through an L293D with a button for up and one for down. The sketch drives it both ways." }
  - check: { type: reflect, text: "For real (if you have the kit): the gears mounted (LEGO, Meccano or printed), the drum and string, the motor and driver, and a limit switch or timed stop." }
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
      q: "Another team's lift took 13.1, 13.4, 13.0, 14.8 and 13.2 s, and stalled at the start of the fourth lift until someone helped it. What should they test next?"
      options: ["Starting with the full load, to see if it stalls again", "Nothing: every time is under 15 s", "The stop at the top"]
      answer: 0
      feedback: [null, "A lift that needs a helping hand hasn't met the brief, even if the times look fine.", "The stop wasn't the problem. Something happened at the start."]
      explain: "A stall at the start means the gearing had barely enough force for that lift, and the slow 14.8 s was the same lift. Test starting under full load until they know why."
  - check: { type: reflect, text: "I lifted the load five times, timed each lift, and recorded the predicted time beside the measured one, plus any stalls." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: lift 4. What happened: it stalled at the start, then went when I helped it. Cause: the string had wound on in a lump, which makes the drum bigger and needs more force; I checked by winding it neatly and lifting again, no stall. Change: a guide so the string winds on in one layer. Re-test: five more lifts, no stalls, 13.0 to 13.5 s." }]
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
      q: "Your lift takes 17 s; the model predicted 15 s. What is the best explanation to give in your evaluation?"
      options: ["The model ignores friction and the motor slowing under load; measure and say how much", "The stopwatch was wrong", "The gears are broken", "The brief was unfair"]
      answer: 0
      feedback: [null, "Possible once; five lifts make it unlikely.", "Then it wouldn't lift at all.", "The brief is the brief: explain the gap."]
      explain: "Real motors slow under load, and every mesh loses a little: the model's 15 s is a best case."
  - check: { type: reflect, text: "I wrote my evaluation: for each criterion, met or not, with the test that shows it; one improvement I would make and why; and who else could use it." }
```

### Which is evidence?

### Write it up
