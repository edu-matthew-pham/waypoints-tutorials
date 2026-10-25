---
order: 5
unit: advanced
optional: true
title: Automated sorter
summary: "Design a machine that sorts objects into two bins by what a sensor sees: a light sensor (or a trained model) decides, a servo flap acts, and accuracy is measured on a test set."
language: maths
shape: design
hook: "Recycling centres sort millions of items a day with sensors and flaps. Can yours sort a box of mixed items, and how often is it right?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8520
  url: http://127.0.0.1:8520/index.html
  readySelector: "#board svg"
  layout: full
---
**Client:** the school's recycling team. **Context:** light and dark items (or paper and plastic) slide down a chute past a sensor.

**Brief:** a light sensor reads each item; **light items (reading 400 or more) go to bin B, dark items to bin A**; a servo flap moves within **0.5 s**; the sorter must be **at least 90% accurate on a test set of 20 items**. Kit parts only; USB power.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Light items (400 or more) go to bin B", "Criterion"]
    - ["The flap moves within 0.5 s", "Criterion"]
    - ["At least 90% accurate on 20 test items", "Criterion"]
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
      q: "Two ideas for where the light sensor goes. A: on the side of the chute, in the room's light. B: in a small box over the chute, with its own LED shining down. Which is more likely to meet the 90% accuracy criterion?"
      options: ["B: with its own light, the reading depends on the item, not on the room", "A: it's simpler, so it's more accurate", "Neither: the code decides, not where the sensor is"]
      answer: 0
      feedback: [null, "The room's light changes through the day, so the same item can read differently in the morning and the afternoon.", "The code only sees the number. If the room's light changes that number, the code sorts the item wrong."]
      explain: "A box with its own LED keeps the light the same for every item, so the reading changes only when the item does."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: a flap hinged at the top of the chute, swung by the servo arm. Strongest on speed: it only moves 45°. Weakest on accuracy: a light item can bounce off it into the wrong bin. Idea 2: a tray under the chute that tips left or right. Strongest on accuracy: the item stops before it's sorted. Weakest on speed: it tips and comes back for every item, which could go past 0.5 s. I'll build idea 1 with a short divider below the flap, because speed has a number on it in the brief and the divider stops most of the bouncing." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Prototyping the decision against threshold tests, then planning a separate accuracy test with real items, separates \"the code is right\" from \"the machine sorts well\"."
try: { playground: board, starter: "board.yml#develop", height: 700 }
tasks:
  - check: { type: board, text: "Here the LED stands in for the flap (on = bin B). Write the decision so all four tests pass.", when: "u = 4 and q = 4", explain: "if (level >= 400) flap to B (LED on), else A (off)." }
  - check:
      type: number
      q: "Your sorter puts 17 of 20 test items in the right bin. What is its accuracy, as a percentage?"
      answer: 85
      explain: "17 ÷ 20 = 0.85 = 85%: under the 90% the brief needs."
  - check: { type: reflect, text: "My plan has: the light sensor and servo wiring (the servo's power from 5V or its own supply), the flap angles for each bin, and a labelled test set of 20 items." }
```

### Prototype the decision

### Accuracy

### The plan

Stretch route: replace the light sensor with the Teachable Machine classifier from Code › micro:bit and the computer, sending its label to the board over serial.

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad: a light sensor on A0, a micro servo on pin 9 (Servo library), and my sketch. The flap moves to the right side as I change the light." }
  - check: { type: reflect, text: "For real (if you have the kit): the sensor and servo mounted on a chute (cardboard or printed), sketch uploaded." }
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
      q: "Another team's sorter put 18 of 20 items in the right bin, the flap took 0.6 s, and both wrong items were shiny plastic. Which criteria does it meet?"
      options: ["90% accuracy, but not the 0.5 s one", "Both: 0.6 s is close enough", "Neither", "The 0.5 s one, but not 90% accuracy"]
      answer: 0
      feedback: [null, "The brief says within 0.5 s, so 0.6 s doesn't meet it, however close.", "18 of 20 is 90%, which meets the accuracy criterion.", "It's the other way round: 18 ÷ 20 = 90% passes, and 0.6 s is over 0.5 s."]
      explain: "18 ÷ 20 = 90%, so accuracy just passes, but 0.6 s is over 0.5 s. And both misses being shiny plastic says what to test next: the sensor's reading on shiny things, not the code."
  - check: { type: reflect, text: "I ran my 20-item test set, recorded which bin each item went to and which it should have, worked out the accuracy, and timed the flap." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: items 7 and 15, both shiny. What happened: they went to bin B but should have gone to A. Cause: the shiny plastic reflected the LED back, so it read over 400 even though it's dark; I checked by reading the number for each one. Change: tilted the sensor box so the reflection goes past the sensor. Re-test: all 20 again, 19 right, and both shiny ones now in A." }]
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
