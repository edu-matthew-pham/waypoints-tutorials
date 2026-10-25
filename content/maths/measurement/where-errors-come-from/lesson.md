---
order: 43
unit: error10
node: AC9M10M04 n1
uses: [AC9M9M04 n1, AC9M9M04 n2]
assumes: [AC9M9M04 n1]
connection: part-tolerance
title: Where errors come from
summary: "A measurement error comes from the instrument, the method or the person. An error that pushes every reading the same way (systematic) is different from one that goes both ways (random), and averaging only fixes the second."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two inspectors measure the same bolt hole with the same calipers and write down different numbers. Whose is right?"
---
Two inspectors measure the same bolt hole with the same pair of calipers. Inspector A writes 20.04 mm and inspector B writes 20.11 mm. Where could the 0.07 mm have come from? Have a guess, and we'll come back to it at the end. (The readings are made up for the task.)

<figure class="situation" role="img" aria-label="The same bolt hole measured twice. Inspector A's calipers read 20.04 millimetres. Inspector B's read 20.11 millimetres. A question mark sits between them, asking where the 0.07 millimetre gap comes from."><svg viewBox="0 0 380 150" width="380" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="190" cy="62" r="30" stroke-width="2" fill="#378ADD" fill-opacity="0.15"/><text x="190" y="67" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">hole</text><rect x="14" y="40" width="96" height="44" rx="6" stroke-width="1.6"/><text x="62" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">Inspector A</text><text x="62" y="78" text-anchor="middle" fill="currentColor" stroke="none">20.04 mm</text><rect x="270" y="40" width="96" height="44" rx="6" stroke-width="1.6"/><text x="318" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">Inspector B</text><text x="318" y="78" text-anchor="middle" fill="currentColor" stroke="none">20.11 mm</text><path d="M110 62 h50 M270 62 h-50" stroke-width="1.4" stroke-dasharray="4 3"/><text x="190" y="122" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">0.07 mm from where?</text></svg></figure>

## Predict: whose calipers

```step
stage: predict
insight: "Naming the source of a calipers fault shows who treats every error as the person's slip, and who looks at the instrument and the method too."
check:
  type: predict
  q: "Inspector B's calipers show 0.05 mm even when the jaws are shut, so every reading from them is 0.05 mm too big. Which source of error is that?"
  options:
    - "The instrument"
    - "The person measuring"
    - "The method"
    - "None: it is just rounding"
  actual: "The instrument. The fault is in the calipers themselves, and it pushes every reading the same way. A person or a method can cause errors too, but this one would still be there if someone else did the measuring."
```

## Run: three places an error hides

```step
stage: run
insight: "An error comes from the instrument (the tool is off), the method (the way the measuring is set up) or the person (a slip in reading or recording). Naming which one tells you what to fix."
check:
  type: sort
  q: "Where does each error come from?"
  options: ["Instrument", "Method", "Person"]
  items:
    - ["A cloth tape that has stretched", "Instrument"]
    - ["Measuring across a slant instead of straight across the hole", "Method"]
    - ["Reading 20.14 as 20.11", "Person"]
    - ["A scale that shows 3 g with nothing on it", "Instrument"]
    - ["Measuring a hot metal bar that shrinks as it cools", "Method"]
    - ["Looking at the scale from the side so the line seems to move", "Person"]
  explain: "The instrument is the tool, the method is how the measuring is set up, and the person is the reading and recording. Fixing each needs a different step: a better tool, a better set-up, or a second pair of eyes."
```

Sort the six, then check each one: what would you change to get rid of it?

## Investigate: close together, or right?

```step
stage: investigate
insight: "Readings that agree with each other can all be wrong in the same way. An error that pushes every reading the same direction (systematic) is not fixed by repeating or averaging; a scatter that goes both ways (random) is."
tasks:
  - hint: ["Take the table's length by laser away from the tape's reading.", "1.60 − 1.52."]
    check:
      type: reasoning
      paper: true
      q: "A cloth tape reads 1.52 m for a table that a laser says is 1.60 m. By how much is the tape out? (m)"
      steps:
        - ["$1.60 - 1.52$", "compare with the trusted value"]
        - ["$= 0.08$", "work it out"]
        - ["every reading is low, so the error is systematic, from the instrument", "same direction every time, and it comes from the tape"]
      answer: "0.08"
      answerLabel: "Tape is out by (m)"
      tolerance: 0.001
      feedback:
        - ["0.8", "Check the decimal places: 1.60 − 1.52 is eight hundredths."]
        - ["1.52", "That is the tape's reading. The question asks how far out it is."]
      criteria:
        - "I compared the tape with the laser."
        - "I said the error is systematic and named the instrument."
      explain: "1.60 − 1.52 = 0.08 m. Every reading is low by about that much, so it is a systematic error from the tape."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev's group measures a table six times and wants to know if their tape is accurate. Click the line where the reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: agree-means-accurate
      explain: "Line 4: the readings agree with each other, but they are all about 0.08 m below the laser's 1.60 m. They are close together and still wrong in the same way, so the tape (or the way it was used) has a systematic error."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia's group finds all their masses read 3 g too high. Click the line where the group blames the wrong thing."
      answer: 3
      fault: logic
      misconception: all-human-error
      explain: "Line 3: the scale reads 3 g with nothing on it, so the error is in the instrument. Being more careful will not help; zeroing the scale will."
  - check:
      type: question
      q: "A group measures a pencil ten times and the readings scatter: some a little high, some a little low. What does averaging the ten do?"
      options:
        - "It reduces the error, because the highs and lows partly cancel"
        - "It removes the error, because the average is exact"
        - "It does nothing, because every reading is wrong"
        - "It makes the error bigger"
      answer: 0
      feedback:
        - null
        - "The average is closer, not exact: the highs and lows only partly cancel."
        - "The readings are scattered both ways, so averaging helps. It would not help if all ten were high."
        - "Averaging scattered readings brings the answer nearer the middle."
      explain: "A random error goes both ways, so the average is better than one reading. A systematic error goes one way and survives the average."
```

### Systematic or random

A **systematic** error pushes every reading the same way (the stretched tape, the scale that is not zeroed). A **random** error goes high or low from reading to reading.

```worked
1.60 - 1.52 = 0.08 :: Compare each reading with a trusted value. They are all about 0.08 m low.
\text{all low, by about the same} \Rightarrow \text{systematic} :: Same direction, same size.
\text{averaging will not fix it} :: The average is low by 0.08 too.
\text{tape stretched?} \to \text{instrument} :: Name where it comes from.
\text{test the guess with a different tape} :: A fix that checks the diagnosis.
```

Now try one on paper: a tape reads 1.52 m for a table that a laser says is 1.60 m. Work out by how much the tape is out, then say what kind of error it is and where it comes from.

### Find the mistake

Dev says "the readings are close together, so the tape must be accurate". Which line says it?

### Blame

Mia's group wrote "human error". Is that where the 3 g comes from?

### Averaging

## Modify: a different table

```step
stage: modify
insight: "Changing the readings changes the kind of error: scattered readings point to a random error, and one cause can have more than one source."
tasks:
  - hint: ["Add the six readings, then divide by six.", "1.48 + 1.57 + 1.52 + 1.60 + 1.45 + 1.55 = 9.17."]
    check: { type: number, q: "Another group measures the same table and gets $1.48$, $1.57$, $1.52$, $1.60$, $1.45$ and $1.55$ m. What is their mean? (m, 2 decimal places)", answer: 1.53, tolerance: 0.005, explain: "9.17 ÷ 6 = 1.528, about 1.53 m." }
  - hint: ["Do the readings all sit on one side of the laser's 1.60 m?", "Some are above the mean and some below."]
    check:
      type: question
      q: "The six readings are spread both ways around 1.53 m. What kind of error is mostly in them?"
      options:
        - "Random: the readings go high and low"
        - "Systematic: they are all wrong the same way"
        - "None: a tape never has an error"
        - "Instrument only, because the tape is cloth"
      answer: 0
      feedback:
        - null
        - "Systematic would put them all on one side of the true value."
        - "Every tape has some error; the question is what kind."
        - "The scatter comes from placing and reading the tape differently each time."
      explain: "The readings go both ways, so the error is mainly random. Placing the tape and reading it a little differently each time makes that happen."
  - hint: ["Could the stopwatch and the finger be at fault at once?", "Look for a source of each part."]
    check:
      type: question
      q: "Edge case: a timer's stopwatch runs slightly fast, and the timer is also slow to press stop. Can one result have more than one source of error?"
      options:
        - "Yes: the stopwatch is an instrument error and the slow press is a person error"
        - "No: an error has exactly one source"
        - "Yes, but only if the method is also wrong"
        - "No: the two errors cancel"
      answer: 0
      feedback:
        - null
        - "A result can be out for several reasons at once; name each one."
        - "Two sources are enough. The method need not be wrong too."
        - "A fast watch makes the time bigger and a slow press makes it bigger too. They don't cancel."
      explain: "Errors add up from every source. Name each source separately, so you know what to fix."
```

### The mean

### Which kind

### Two sources

## Practise: name the source

```step
stage: practise
insight: "Placing an error with the instrument, the method or the person, and telling systematic from random."
tasks:
  - hint: ["Is the tool at fault, the set-up, or the reading?"]
    check:
      type: question
      q: "A group measures how long a ball takes to fall by starting the stopwatch when they let go and stopping it when they hear it land, from the top of a tall building. What is the main source of error?"
      options:
        - "The method: sound takes time to travel, so the time is too long"
        - "The instrument: the stopwatch is broken"
        - "The person: they are not careful"
        - "None: the time is exact"
      answer: 0
      feedback:
        - null
        - "Nothing says the stopwatch is wrong."
        - "Even a very careful person gets a too-long time this way."
        - "A reading is never exact."
      explain: "Waiting for the sound adds a delay to every drop, a systematic error from the method. Watching the ball land instead would remove it."
  - hint: ["All the same direction means systematic."]
    check:
      type: question
      q: "Five readings of a length are $12.3$, $12.1$, $12.4$, $12.2$ and $12.0$ cm; the true length is $11.0$ cm. Which kind of error is the main one?"
      options:
        - "Systematic: every reading is too big"
        - "Random: the readings differ"
        - "None: the readings are close together"
        - "Both are equal"
      answer: 0
      feedback:
        - null
        - "The readings differ by 0.1 to 0.2 cm, but all of them are 1 cm or more too big. The bigger problem is that they are all too big."
        - "Close together is not the same as right."
        - "The one-way push is much larger than the scatter."
      explain: "All five are over the true value by 1 to 1.4 cm, so the main error is systematic. The 0.4 cm scatter is the smaller, random part."
  - hint: ["Absolute error first, then divide."]
    check: { type: number, q: "Review: a length of $80$ cm is measured with an error of $2$ cm. What is the percentage error? (%)", answer: 2.5, tolerance: 0.01, explain: "2 ÷ 80 = 0.025, × 100 = 2.5%." }
    smaller:
      check: { type: "number", q: "What is $2 \\div 80$?", answer: 0.025, tolerance: 0.0005, explain: "2 ÷ 80 = 0.025." }
```

### A falling ball

### Which direction

### Review

## Make: the two inspectors

```step
stage: make
insight: "Back to the inspectors: B's calipers read 0.05 mm too high, so B's corrected reading is 0.05 mm smaller, and what is left over comes from somewhere else."
tasks:
  - hint: ["The calipers read 0.05 mm too high every time.", "Take the 0.05 mm away from B's reading."]
    check:
      type: reasoning
      paper: true
      q: "Inspector B's calipers show 0.05 mm when shut and B reads 20.11 mm. What would B's reading be with that fault taken out? (mm)"
      steps:
        - ["the fault pushes every reading up by $0.05$", "a systematic error from the instrument"]
        - ["$20.11 - 0.05$", "take it away"]
        - ["$= 20.06$", "work it out"]
      answer: "20.06"
      answerLabel: "Corrected reading (mm)"
      tolerance: 0.001
      feedback:
        - ["20.16", "The calipers read too high, so subtract the fault, not add it."]
        - ["0.07", "That is the gap between the inspectors. The question asks for B's corrected reading."]
      criteria:
        - "I named the fault as an instrument error that pushes every reading one way."
        - "I took the fault away from B's reading."
      explain: "20.11 − 0.05 = 20.06 mm, which is now only 0.02 mm from A's 20.04."
  - check:
      type: question
      q: "That leaves 0.02 mm between A (20.04) and B (20.06). Which could still explain it?"
      options:
        - "A slightly different place or squeeze on the hole (method), or a small difference in reading the scale (person)"
        - "Nothing: it must be the calipers again"
        - "Nothing: measurements from two people must be identical"
        - "Only rounding"
      answer: 0
      feedback:
        - null
        - "We already took the calipers' fault out."
        - "Two people always differ a little: that is the random part of an error."
        - "Rounding is one small part of it, but the place and the squeeze matter too."
      explain: "What is left is a small random difference, from where and how hard each person measured and how they read the scale."
```

### The corrected reading

Work this one out on paper first, then type your answer.

### What is left

The inspectors' readings are made up for the task.

**Also used in**

- **Science.** A practical's results are only as good as how they were measured: name the source of an error in a report.
- **Sport.** A stopwatch pressed late by hand is a person error; a gate that senses the swimmer is a different method.
- **Next lesson.** One error, one result: how much a calculated answer moves when a measurement is out.
