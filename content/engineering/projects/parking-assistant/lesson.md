---
order: 2
unit: core
optional: true
title: Parking assistant
summary: "Design a distance warning: an ultrasonic sensor and a buzzer or LED that warns sooner and harder as something gets closer, tested at each band edge."
language: maths
shape: design
hook: "Reversing cars beep faster as they get closer to a wall. Can you build one, and prove it warns at the right distances?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8518
  url: http://127.0.0.1:8518/index.html
  readySelector: "#board svg"
  layout: full
---
**Client:** a family whose car has no reversing sensor. **Context:** a model on the bench (a ruler and a box stand in for the car and the wall).

**Brief:** an ultrasonic distance sensor measures in centimetres. **Off** when the distance is over 100 cm, **beeping** (blinking) from 30 to 100 cm, **steady** under 30 cm. Kit parts only (HC-SR04 sensor, piezo buzzer or LED); USB power.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Off over 100 cm", "Criterion"]
    - ["Blinks or beeps from 30 to 100 cm", "Criterion"]
    - ["Steady under 30 cm", "Criterion"]
    - ["HC-SR04 sensor and a buzzer or LED from the kit", "Constraint"]
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
      q: "Two ideas for the beeping. A: one steady beep rate from 30 to 100 cm. B: beeping that speeds up as the car gets closer. B is nicer to use. Does the brief ask for it?"
      options: ["No: it's extra, and it still has to pass the brief's tests at 30 and 100 cm", "Yes: beeping means it has to speed up", "It doesn't matter what the brief says if the family likes it"]
      answer: 0
      feedback: [null, "The brief only says beeping from 30 to 100 cm. Speeding up is your idea, which is fine, as long as it still meets the brief.", "The family wrote the brief, so it's what you test against. Extras are fine on top."]
      explain: "Extras are welcome, but they don't replace the criteria: whatever the beep does, it still has to start at exactly 100 cm and turn steady below 30."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: one beep rate from 30 to 100 cm. Strongest on the tests: three bands with clear edges. Weakest on use: it doesn't tell you how close you're getting inside the band. Idea 2: the beep speeds up as the distance drops. Strongest on use. Weakest on testing: the edges are harder to hear when the rate keeps changing. I'll build idea 1 first, pass every test, then add idea 2 as an improvement and run the same tests again." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Three bands mean four edges to test; prototyping the bands on the board, with the knob as the distance in cm, gets the logic right before the sensor code."
try: { playground: board, starter: "board.yml#develop", height: 700 }
tasks:
  - check:
      type: question
      q: "How many test readings do you need at minimum to check every band edge (30 and 100), on both sides?"
      options: ["4: 29, 30, 100, 101", "2: 30 and 100", "3: one in each band", "1: 50"]
      answer: 0
      feedback: [null, "Each edge needs both sides.", "One per band misses the edges.", "One reading checks one band."]
      explain: "Each edge needs the reading just inside and just outside it."
  - check: { type: board, text: "Here the knob reading stands in for the distance in cm. Write the bands so all six tests pass.", when: "u = 6 and q = 6", explain: "if (cm < 30) steady; else if (cm <= 100) blink; else off." }
  - check: { type: reflect, text: "My plan has: the sensor wiring (trig, echo, 5V, GND), the buzzer or LED, the bands, and my test table with distances measured by ruler." }
```

### Band edges

### Prototype the bands

### The plan

On the real sensor, `pulseIn` measures the echo time; distance in cm ≈ time (µs) ÷ 58. Tinkercad's ultrasonic sensor lets you drag the object to set the distance.

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad: the ultrasonic sensor, a piezo buzzer (tone) or LED, and my sketch with the three bands. I dragged the object through every band." }
  - check: { type: reflect, text: "For real (if you have the kit): built and uploaded; distances checked with a ruler." }
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
      q: "Another team's results: 101 cm off, 100 cm beeping, 60 cm beeping, 30 cm steady, 29 cm steady, 10 cm steady. Which result doesn't match the brief?"
      options: ["30 cm: it should still be beeping", "101 cm: it should be beeping", "29 cm: it should be beeping", "None: they all match"]
      answer: 0
      feedback: [null, "Over 100 cm is off, so 101 cm off is right.", "Under 30 cm is steady, so 29 cm steady is right.", "Look again at exactly 30: the brief says beeping from 30 to 100."]
      explain: "Beeping runs from 30 to 100, so at exactly 30 it should still beep; steady starts below 30. Their code probably says distance <= 30 where it needs distance < 30."
  - check: { type: reflect, text: "I ran every test in my table with a ruler (29, 30, 100 and 101 cm, plus one in each band) and recorded each result, including any where the sensor was unreliable." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: 30 cm. What happened: steady instead of beeping. Cause: my code said if (distance <= 30) for steady, so 30 landed in the wrong band; I checked by printing the distance and the band. Change: if (distance < 30). Re-test: 30 cm beeps and 29 cm is steady, and I ran 100 and 101 cm again in case the change broke them." }]
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
