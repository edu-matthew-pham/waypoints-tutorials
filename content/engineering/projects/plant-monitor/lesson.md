---
order: 1
unit: core
optional: true
title: Smart plant monitor
summary: "Design a monitor that warns when a pot plant needs water: a soil moisture sensor, an alarm, and a display of the reading, tested at its threshold."
language: maths
shape: design
hook: "The garden club loses plants every holiday. Can a microcontroller tell them which pot is dry before it is too late?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8517
  url: http://127.0.0.1:8517/index.html
  readySelector: "#board svg"
  layout: full
---
**Client:** the school garden club. **Context:** pot plants in a classroom, checked twice a week.

**Brief:** a soil moisture sensor on A0 reads low when the soil is dry. The monitor must **blink an LED when the reading is 300 or below**, stay **off** otherwise, and **show the reading** (LCD or serial monitor). It must use **only parts from the kit** (or Tinkercad's parts), run on **4 × AA or USB**, and fit in a box **no bigger than a pencil case**.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Blinks the LED at a reading of 300 or below", "Criterion"]
    - ["Stays off above 300", "Criterion"]
    - ["Shows the current reading", "Criterion"]
    - ["Only parts from the kit", "Constraint"]
    - ["Runs on 4 × AA or USB", "Constraint"]
    - ["Fits in a pencil-case-sized box", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two ideas for showing the reading. A: an LCD on the box. B: the serial monitor, when someone plugs a laptop in. The club checks the plants twice a week, with no laptop. Which fits the brief and the client better?"
      options: ["A: nobody plugs a laptop in to check the plants", "B: the serial monitor shows more numbers", "Neither: the blinking LED is enough"]
      answer: 0
      feedback: [null, "More numbers don't help if nobody sees them. The club checks with no laptop.", "The brief asks for the reading as well as the warning."]
      explain: "The brief allows either, but the client checks without a computer, so a reading on the box is the one they'll actually see."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: an LCD and the LED in a pencil case, on 4 × AA. Strongest on being checked without a computer. Weakest on the batteries: the LCD's backlight drains AAs in days. Idea 2: the LED only, with the reading on the serial monitor when someone plugs in. Strongest on battery life. Weakest on showing the reading, which the brief asks for. I'll build idea 1 with the backlight on only while a button is held, because it meets every criterion and the button fixes the battery." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Writing the test table and prototyping the decision on the board before wiring anything turns the criteria into something checkable."
try: { playground: board, starter: "board.yml#develop", height: 700 }
tasks:
  - check:
      type: question
      q: "Which test table checks the threshold best?"
      options: ["0 blink, 299 blink, 300 blink, 301 off, 1023 off", "0 blink, 1023 off", "150 blink, 800 off", "300 blink only"]
      answer: 0
      feedback: [null, "Nothing near 300.", "Nothing near 300.", "One case can't show both behaviours."]
      explain: "Both sides of the threshold, the threshold itself, and the ends."
  - check: { type: board, text: "Prototype the decision: write the sketch so all five tests pass.", when: "u = 5 and q = 5", explain: "if (level <= 300) blink, else off: the logic is ready before any wiring." }
  - check: { type: reflect, text: "My design plan has: a parts list, a circuit diagram (sensor on A0, LED and resistor on pin 13, display), and my test table." }
```

### The test table

### Prototype the logic

### The plan

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "In Tinkercad: the soil moisture sensor on A0, the LED on pin 13, the 16 × 2 LCD (or the serial monitor), and my sketch. It runs." }
  - check: { type: reflect, text: "For real (if you have the kit): built on a breadboard, uploaded, and the sensor tested in dry and wet soil." }
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
      q: "Another team's results: dry soil 180, blinking; wet soil 640, off; a reading of 300, off; 299, blinking. Which result doesn't match the brief?"
      options: ["300: the brief says blink at 300 or below", "299: it shouldn't blink yet", "Wet soil: it should blink", "None: they all match"]
      answer: 0
      feedback: [null, "299 is below 300, so blinking is right.", "Wet soil reads high, so it should be off.", "Look again at exactly 300."]
      explain: "The brief says blink at 300 or below, so 300 should blink. Their code probably says level < 300 where it needs level <= 300."
  - check: { type: reflect, text: "I ran every test in my table on the built monitor (dry soil, wet soil, and readings near 300 using a knob or a damp cloth) and recorded each result." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: a reading of exactly 300 (a damp cloth on the sensor). What happened: the LED stayed off. Cause: if (level < 300) leaves 300 out; I checked by printing the reading. Change: if (level <= 300). Re-test: 300 and 299 blink, 301 is off, and the dry and wet pots are still right." }]
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
