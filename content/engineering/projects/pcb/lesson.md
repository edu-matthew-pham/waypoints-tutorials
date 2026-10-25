---
order: 8
unit: boards
optional: true
title: Design a PCB
summary: "Design a printed circuit board for a project: draw the schematic, lay out the board, run the design rule check, and prepare the files a manufacturer needs."
language: maths
shape: design
hook: "Every device you own has a printed circuit board. Designing one is how a prototype becomes a product."
---
**Client:** you, for a project with a working breadboard version (a driver-and-sensor shield for the drive base is a good first board). **Context:** the board may be ordered for the class, or kept as a design.

**Brief:** a **schematic** that matches the working circuit, a **board layout** at most **5 × 5 cm** (or Uno-shield size), **no errors in the design rule check**, and **manufacturing files** (Gerbers) exported. Free tools only (KiCad or EasyEDA).

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["The schematic matches the working circuit", "Criterion"]
    - ["No design rule check errors", "Criterion"]
    - ["Gerber files exported", "Criterion"]
    - ["At most 5 × 5 cm, or Uno-shield size", "Constraint"]
    - ["Free tools only: KiCad or EasyEDA", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two layouts for a 5 × 5 cm board. A: motor connectors on one edge, sensor connectors on the opposite edge, the driver chip in the middle. B: every connector along the front edge. What does B make harder?"
      options: ["Routing: every trace has to reach the same edge, so they crowd together and the wide motor traces may not fit", "Nothing: one edge is always neater", "The schematic: it would have to change"]
      answer: 0
      feedback: [null, "One edge is neater for cables, but on the board itself everything has to squeeze into the same space.", "The schematic is the circuit. Moving connectors on the board doesn't change it."]
      explain: "Bringing every trace to one edge crowds them together, and the 1 mm motor traces are the hardest to fit, so the design rule check gets harder to pass."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: motor connectors on the left, sensors on the right, the driver chip in the middle. Strongest on routing: the wide motor traces run short and straight. Weakest on the robot's wiring: cables come off both sides. Idea 2: every connector along the front edge. Strongest on tidy cables. Weakest on the design rule check: the traces crowd together and the motor ones may not fit at 1 mm. I'll lay out idea 1, because the design rule check is in the brief and messy cables aren't." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Ordering the steps of PCB design, and knowing what the design rule check catches, plans the work before the tool is learned."
tasks:
  - check:
      type: parsons
      code: "steps.txt#pcb"
      text: "Put the PCB design steps in order."
      explain: "Schematic first, then footprints, then layout and routing, then the checks, then the files."
  - check:
      type: question
      q: "What does the design rule check (DRC) catch?"
      options: ["Tracks or pads too close together, too thin, or not connected as the schematic says", "Mistakes in the code", "Whether the circuit does what the brief needs", "The cost of the board"]
      answer: 0
      feedback: [null, "The board has no code.", "That is what testing the built board shows.", "That comes from the manufacturer's quote."]
      explain: "It checks the layout can be made and matches the schematic, not that the design is a good one."
  - check: { type: reflect, text: "My schematic is drawn in KiCad or EasyEDA from my working breadboard circuit, and a partner has checked it against the breadboard." }
```

### The steps

### Design rule check

### The schematic

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "Every part has a footprint that matches the real part I will use (checked against its datasheet or the actual part)." }
  - check: { type: reflect, text: "The board is laid out and routed, within the size limit, with mounting holes if it needs them." }
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
      q: "Another team's design rule check shows 0 errors and 2 warnings (silkscreen over a pad), and their board is 5.2 × 4.8 cm. Which criterion fails?"
      options: ["The size: 5.2 cm is over the 5 cm limit", "The design rule check: warnings count as errors", "None: it all passes"]
      answer: 0
      feedback: [null, "Warnings are worth fixing, but the brief asks for no errors, and there are none.", "Check the size against the brief again."]
      explain: "No errors meets the design rule criterion, but 5.2 cm is over 5 cm, so the size fails. The warnings are still worth tidying before ordering."
  - check: { type: reflect, text: "I ran the design rule check until it showed no errors, and recorded each error I fixed. If the board was made, I assembled it and ran my project's test table on it." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: the design rule check. What happened: 3 errors, all clearance between the motor trace and a header pad. Cause: I'd routed the 1 mm motor trace between two header pins, where only a thin trace fits. Change: took it round the end of the header. Re-test: 0 errors, and the board grew from 4.6 to 4.9 cm, still inside 5 cm." }]
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
