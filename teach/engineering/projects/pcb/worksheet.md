---
title: "Design a PCB"
subtitle: "Capstone projects · Stretch: make it permanent · Lesson 8"
---

# Design a PCB

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Every device you own has a printed circuit board. Designing one is how a prototype becomes a product.


:::teacher-note

**In one sentence:** A stretch project: design a PCB for a working project in KiCad or EasyEDA (schematic, footprints, layout, design rule check, Gerber files), optionally ordered and assembled.

**Students should be able to say:** I can draw a schematic from a working circuit. I can lay out and check a board. I can prepare a design for manufacture.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Inquire: the brief


:::keep-together

**Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?**

Groups: Criterion, Constraint

- The schematic matches the working circuit: {{field-15}}
- No design rule check errors: {{field-15}}
- Gerber files exported: {{field-15}}
- At most 5 × 5 cm, or Uno-shield size: {{field-15}}
- Free tools only: KiCad or EasyEDA: {{field-15}}

:::


:::teacher-note

**Answer:** The schematic matches the working circuit → Criterion; No design rule check errors → Criterion; Gerber files exported → Criterion; At most 5 × 5 cm, or Uno-shield size → Constraint; Free tools only: KiCad or EasyEDA → Constraint

Criteria are what you will test at the end; constraints decide what you are allowed to build with.

:::


## Develop: two ideas first


:::keep-together

### Two ways to do it

**Two layouts for a 5 × 5 cm board. A: motor connectors on one edge, sensor connectors on the opposite edge, the driver chip in the middle. B: every connector along the front edge. What does B make harder?**

☐ The schematic: it would have to change

☐ Nothing: one edge is always neater

☐ Routing: every trace has to reach the same edge, so they crowd together and the wide motor traces may not fit

:::


:::teacher-note

**Answer:** Routing: every trace has to reach the same edge, so they crowd together and the wide motor traces may not fit

Bringing every trace to one edge crowds them together, and the 1 mm motor traces are the hardest to fit, so the design rule check gets harder to pass.

:::


:::keep-together

### Your own two ideas

**Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** One way to write it: Idea 1: motor connectors on the left, sensors on the right, the driver chip in the middle. Strongest on routing: the wide motor traces run short and straight. Weakest on the robot's wiring: cables come off both sides. Idea 2: every connector along the front edge. Strongest on tidy cables. Weakest on the design rule check: the traces crowd together and the motor ones may not fit at 1 mm. I'll lay out idea 1, because the design rule check is in the brief and messy cables aren't.

:::


## Develop: plan before you build


:::keep-together

### The steps

**Put the PCB design steps in order.**

A. `Place the parts on the board outline.`

B. `Route the tracks.`

C. `Give every part a footprint that matches the real part.`

D. `Export the Gerber files.`

E. `Run the design rule check and fix every error.`

F. `Draw the schematic from the working circuit.`

Correct order (letters): {{field-24}}

:::


:::teacher-note

**Answer:** see the program below

Schematic first, then footprints, then layout and routing, then the checks, then the files.

```maths
Draw the schematic from the working circuit.
Give every part a footprint that matches the real part.
Place the parts on the board outline.
Route the tracks.
Run the design rule check and fix every error.
Export the Gerber files.
```

:::


:::keep-together

### Design rule check

**What does the design rule check (DRC) catch?**

☐ Mistakes in the code

☐ Tracks or pads too close together, too thin, or not connected as the schematic says

☐ The cost of the board

☐ Whether the circuit does what the brief needs

:::


:::teacher-note

**Answer:** Tracks or pads too close together, too thin, or not connected as the schematic says

It checks the layout can be made and matches the schematic, not that the design is a good one.

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

☐ My partner said it looks good

☐ A test from the table that set the input and recorded the expected result

:::


:::teacher-note

**Answer:** A test from the table that set the input and recorded the expected result

A planned test with a recorded result is evidence; everything else is a feeling.

:::


## Exit ticket

:::keep-together

**Name two things a design rule check catches, and one it can't.**

{{lines-3}}

:::


:::teacher-note

**Answer:** It catches tracks too close or too thin and unconnected nets; it can't tell whether the circuit meets the brief.

:::

