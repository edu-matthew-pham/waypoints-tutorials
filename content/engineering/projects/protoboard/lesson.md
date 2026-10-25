---
order: 7
unit: boards
optional: true
title: Off the breadboard
summary: "Move a finished breadboard project onto soldered protoboard so it survives being carried around: plan the layout, solder safely, and test it against the same table as before."
language: maths
shape: design
hook: "A breadboard circuit falls apart in a school bag. How do you make it permanent?"
---
**Client:** you, for any project you have already built. **Context:** the project has to survive a school bag.

**Brief:** the same circuit on **protoboard** (or stripboard), **working the same tests as the breadboard version**, **no loose wires**, and **fits on a 5 × 7 cm board**. Soldering only with the teacher's safety briefing, in the soldering area.

## Inquire: the brief

```step
stage: predict
insight: "Separating what the design must do (criteria) from the limits it works within (constraints) is the first move of any design brief."
check:
  type: sort
  q: "Sort each line of the brief: a criterion (what it must do, which you can test) or a constraint (a limit you must work within)?"
  options: ["Criterion", "Constraint"]
  items:
    - ["Passes the same tests as the breadboard version", "Criterion"]
    - ["No loose wires", "Criterion"]
    - ["Fits on a 5 × 7 cm board", "Constraint"]
    - ["Soldering only after the safety briefing, in the soldering area", "Constraint"]
  explain: "Criteria are what you will test at the end; constraints decide what you are allowed to build with."
```

## Develop: two ideas first

```step
stage: investigate
insight: "Comparing two concepts against the brief's criteria before planning one gives the range of ideas the Develop stage asks for (MYP Design B), and makes the choice something a student can defend."
tasks:
  - check:
      type: question
      q: "Two ideas. A: stripboard, where copper strips join each row and you cut them where they shouldn't. B: perfboard, where every pad is separate and you join them with wire links. Which is more likely to pass the shake test first time, and what's the catch?"
      options: ["A: fewer wire links to work loose, but one missed cut joins things that shouldn't be", "B: more wires make it stronger", "No difference: solder holds either way"]
      answer: 0
      feedback: [null, "Every extra link is another two joints that can crack when the bag gets thrown about.", "Solder holds if every joint is good, but more joints means more chances for a bad one."]
      explain: "Stripboard needs fewer joints, so there's less to shake loose, but every track cut has to be right. Check them with a meter before you power it."
  - check:
      type: reasoning
      q: "Now two ideas of your own. For each one, say which criterion in the brief it's strongest on and which it's weakest on. Then say which you'll build, and why."
      placeholder: "Idea 1: … strongest on … weakest on … Idea 2: … I'll build … because …"
      models: [{ title: "One way to write it", text: "Idea 1: stripboard with the parts in the same order as on the breadboard. Strongest on fitting 5 × 7 cm, because the layout is already worked out. Weakest on mistakes: track cuts are easy to miss. Idea 2: perfboard with the parts packed closer. Strongest on size. Weakest on loose wires: lots of short links to solder. I'll build idea 1 and check every cut with a meter before I power it, because a missed cut is easier to find than a cracked joint." }]
      criteria: ["Each idea is a different way of doing it, not the same idea with one thing changed.", "For each one I named a criterion from the brief it's strong on and one it's weak on.", "My choice says which criterion decided it."]
```

### Two ways to do it

Before you plan one design, look at two. Most design choices are a trade: one idea is better on one criterion and worse on another, and the brief tells you which matters more.

### Your own two ideas

Make them really different, not the same idea with one part changed. A quick sketch of each in your book helps.

## Develop: plan before you build

```step
stage: investigate
insight: "Planning the layout on paper (or in Tinkercad) before the iron is hot is what makes protoboard work: holes can't be moved later."
tasks:
  - check:
      type: question
      q: "On stripboard the copper strips join every hole in a row. An LED's two legs must go in the same row, but must not be joined. What do you do?"
      options: ["Cut the strip between the legs", "Solder them together", "Use a bigger resistor", "Put the LED the other way round"]
      answer: 0
      feedback: [null, "That shorts the LED out.", "The resistor doesn't break the strip.", "Both legs are still joined."]
      explain: "A track cut breaks the strip so the legs are in separate pieces, as on a breadboard."
  - check:
      type: sort
      q: "Soldering: safe or unsafe?"
      options: ["Safe", "Unsafe"]
      items:
        - ["Iron back in its stand whenever you put it down", "Safe"]
        - ["Fume extractor on, face out of the smoke", "Safe"]
        - ["Testing whether the iron is hot with a finger", "Unsafe"]
        - ["Cutting component legs with the board pointing at a classmate", "Unsafe"]
        - ["Washing hands after soldering", "Safe"]
      explain: "The iron is around 350 °C; the fumes and offcuts are hazards too."
  - check: { type: reflect, text: "My layout is drawn on a grid of the board's holes, with every part, wire and track cut marked, and it matches my circuit diagram." }
```

### Track cuts

### Soldering safety

### The layout

## Create: build it

```step
stage: make
insight: "Building in the simulator first catches wiring and code slips cheaply; the real build then tests the design against the world."
tasks:
  - check: { type: reflect, text: "Layout checked against the circuit diagram by a partner before soldering." }
  - check: { type: reflect, text: "Soldered, with each joint shiny and cone-shaped; checked for bridges between neighbouring holes." }
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
      q: "Another team's protoboard passed all six of their breadboard tests. After the shake test, test 4 failed, and one header pin wobbles. What should they do next?"
      options: ["Re-solder that pin, then shake it again and run all six tests", "Nothing: it passed the tests before the shake", "Start again on a breadboard"]
      answer: 0
      feedback: [null, "The brief is about surviving a school bag, so passing before the shake isn't enough.", "The circuit works, so the breadboard has already done its job. It's one joint."]
      explain: "A wobbly pin is a bad joint. Re-solder it, then repeat the shake test and all six tests, because the brief says it has to work after the bag, not before."
  - check: { type: reflect, text: "I ran the same test table as the breadboard version and recorded each result, plus a shake test (gently shaken, then re-tested)." }
  - check:
      type: reasoning
      q: "Pick one test that failed. Write what happened, what caused it, what you changed, and what the test showed when you ran it again."
      placeholder: "Test: … What happened: … Cause: … Change: … Re-test: …"
      models: [{ title: "One way to write it", text: "Test: the shake test, then test 4 (the button). What happened: the button stopped working. Cause: one of its legs had a dull, lumpy joint that moved when I pressed it; I checked by pressing gently and watching. Change: re-heated it with fresh solder until it was shiny and smooth. Re-test: shook it again and ran all six tests; they all passed." }]
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
