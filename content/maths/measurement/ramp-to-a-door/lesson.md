---
order: 27
unit: trig9
node: AC9M9M03 n4
uses: [AC9M9M03 n1, AC9M9M03 n2, AC9M8M06 n2]
assumes: [AC9M9M03 n2, AC9M9M03 n3]
connection: ramp-1-in-14
title: Ramp to a door
summary: "A real problem needs more than one tool. Draw the triangle, say which parts you know, and choose between a scale, Pythagoras and trigonometry for each part."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The front door is 0.45 m above the path. How long does the ramp need to be?"
---
Wheelchair ramps up to 9 m long can be at most 1 in 14: 1 m up for every 14 m along the ground ([Queensland Health](https://www.health.qld.gov.au/__data/assets/pdf_file/0029/1477208/Ramps-to-the-house-and-slopes-in-the-garden-slides.pdf)). A door is 0.45 m above the path (made up for the task). How far from the door does the ramp have to start, how long is the ramp surface, and what angle is it? Have a guess how long it needs to run along the ground, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A ramp rises 0.45 metres to a door. The ground run, the ramp surface and the angle are all marked with question marks."><svg viewBox="0 0 360 150" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="125" x2="350" y2="125" stroke-width="1.5"/><path d="M30 125 L300 95 L300 125 Z" stroke-width="2.5" fill="#888780" fill-opacity="0.2"/><rect x="300" y="40" width="40" height="85" stroke-width="1.5"/><text x="150" y="142" fill="currentColor" stroke="none">run ?</text><text x="130" y="100" fill="currentColor" stroke="none">ramp ?</text><text x="306" y="115" fill="currentColor" stroke="none">0.45 m</text><text x="70" y="120" fill="currentColor" stroke="none">?°</text></svg></figure>

## Predict: how long along the ground

```step
stage: predict
insight: "Finding the run for 1 in 14 and a 0.45 m rise shows whether students multiply the rise by 14 or confuse the run with the ramp's length."
check:
  type: predict
  q: "The ramp must rise 0.45 m at a gradient of 1 in 14. How far along the ground does it run?"
  options:
    - "6.3 m"
    - "0.03 m"
    - "14 m"
    - "4.5 m"
  actual: "6.3 m. For every 1 m up it goes 14 m along, so 0.45 m up goes 0.45 × 14 = 6.3 m along."
```

## Run: choose the tool

```step
stage: run
insight: "Each part of the problem names its own tool: the gradient fixes the run, Pythagoras gives the ramp's length, and an inverse ratio gives the angle."
check: { type: number, q: "How long is the run along the ground for a 0.45 m rise at 1 in 14? (metres)", answer: 6.3, tolerance: 0.01, explain: "0.45 × 14 = 6.3 m." }
```

Think about the triangle: the rise and run are the two shorter sides and the ramp surface is the hypotenuse.

## Investigate: three parts, three tools

```step
stage: investigate
insight: "Pythagoras gives a third side from two; the angle comes from an inverse ratio of two sides; the gradient is itself a ratio of rise to run."
tasks:
  - check:
      type: number
      q: "Rise $0.45$ m, run $6.3$ m. How long is the ramp surface, to 2 decimal places?"
      answer: 6.32
      tolerance: 0.02
      explain: "√(0.45² + 6.3²) = √39.8925 = 6.316, about 6.32 m."
    smaller:
      check: { type: "number", q: "What is $0.45^2 + 6.3^2$? (2 decimal places)", answer: 39.89, tolerance: 0.02, explain: "0.2025 + 39.69 = 39.8925." }
  - check:
      type: question
      q: "Which tool gives the angle of the ramp from the rise and the run?"
      options: ["tan⁻¹(rise ÷ run)", "Pythagoras", "The scale factor", "Adding the rise and run"]
      answer: 0
      feedback: [null, "Pythagoras gives the ramp's length, not an angle.", "The scale factor compares similar shapes.", "Adding doesn't give an angle."]
      explain: "Rise is opposite and run is adjacent, so the angle is tan⁻¹(0.45 ÷ 6.3)."
  - check:
      type: bug
      code: "working.txt#ali"
      text: "Ali finds the ramp's angle. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: ratio-is-angle
      explain: "Line 2: 1 in 14 is a ratio (rise ÷ run). The angle is tan⁻¹(1 ÷ 14) = 4.1°, not 14°."
```

### Three parts

```worked
\text{run} = 0.45 \times 14 = 6.3 :: The gradient: 14 along for every 1 up.
\text{ramp} = \sqrt{0.45^2 + 6.3^2} \approx 6.32 :: Pythagoras: the ramp is the hypotenuse.
\theta = \tan^{-1}\left(\dfrac{0.45}{6.3}\right) = 4.1° :: Rise is opposite, run is adjacent.
```

### Which tool

### Find the mistake

Read Ali's working. Which line turns the gradient into an angle wrongly?

## Modify: change the door

```step
stage: modify
insight: "Changing the rise reruns the same three tools and tests whether the ramp limits still apply."
tasks:
  - hint: ["Rise × 14.", "0.3 × 14."]
    check: { type: number, q: "A different door is $0.3$ m above the path. How long is the run for a 1 in 14 ramp? (metres)", answer: 4.2, tolerance: 0.01, explain: "0.3 × 14 = 4.2 m." }
  - hint: ["The run is 6.3 m.", "Is the ramp surface longer than the run?"]
    check: { type: question, q: "A student finds the ramp surface is $6.1$ m for a $6.3$ m run. What is wrong?", options: ["The hypotenuse can't be shorter than a shorter side", "Nothing", "The run is too long", "The ramp is too steep"], answer: 0, feedback: [null, "The ramp surface is the hypotenuse, so it must be the longest side.", "The run is a leg, and legs can be long.", "Steepness isn't the issue here."], explain: "The hypotenuse is always longer than either shorter side. 6.1 < 6.3 means a mistake." }
  - hint: ["0.9 × 14.", "The limit applies up to 9 m."]
    check: { type: question, q: "A door is $0.9$ m up, so a 1 in 14 ramp needs a run of $12.6$ m. Is the 1 in 14 rule enough?", options: ["No: that rule is for ramps up to 9 m, so a longer ramp needs the standard's other rules", "Yes: 1 in 14 always works", "Yes: it is shorter than 14", "No: a 0.9 m door needs stairs"], answer: 0, feedback: [null, "The limit given is for ramps up to 9 m long.", "The length of the ramp, not the number 14, is the issue.", "The standard allows longer ramps with other rules."], explain: "The 1 in 14 figure is for ramps up to 9 m. Longer ramps are covered by other rules, such as flatter slopes and landings: check the standard." }
```

### A lower door

### Longer than the run

### Too tall

## Practise: choose the tool

```step
stage: practise
insight: "Choosing between the gradient, Pythagoras and trigonometry."
tasks:
  - check:
      type: number
      q: "A ramp rises $0.5$ m at 1 in 14. How long is the run? (metres)"
      answer: 7
      explain: "0.5 × 14 = 7."
  - check:
      type: question
      q: "You know the rise and the run and want the ramp's length. Which tool?"
      options: ["Pythagoras", "tan⁻¹", "A scale factor", "Gradient 1 in 14"]
      answer: 0
      feedback: [null, "tan⁻¹ gives an angle.", "A scale factor needs a similar shape.", "That gives the run from the rise."]
      explain: "Two shorter sides give the hypotenuse by Pythagoras."
    smaller:
      check: { type: "question", q: "Is the ramp surface a shorter side or the hypotenuse?", options: ["The hypotenuse", "A shorter side", "Neither", "Both"], answer: 0, explain: "It is across from the right angle." }
  - check:
      type: number
      q: "Review: tan⁻¹ of 1 is what angle?"
      answer: 45
      tolerance: 0.5
      explain: "tan 45° = 1."
```

### The run

### The tool

### Review

## Make: the whole ramp

```step
stage: make
insight: "Returning to the door: all three parts, written up, with a note on what the ramp's maker also needs to check."
tasks:
  - hint: ["Gradient, then Pythagoras, then the angle.", "tan⁻¹(0.45 ÷ 6.3)."]
    check:
      type: reasoning
      paper: true
      q: "The door is 0.45 m above the path and the ramp is 1 in 14. What angle does the ramp make with the ground? (1 decimal place. The door height is made up for the task.)"
      steps:
        - ["run $= 0.45 \\times 14 = 6.3$", "use the gradient"]
        - ["$\\tan\\theta = 0.45 \\div 6.3 = 0.0714$", "rise over run"]
        - ["$\\theta = \\tan^{-1}(0.0714) = 4.1°$", "use the inverse key"]
      answer: "4.1"
      answerLabel: "Angle (degrees)"
      tolerance: 0.1
      feedback:
        - ["14", "1 in 14 is a ratio, not an angle."]
        - ["6.3", "That is the run. Find the angle."]
      criteria:
        - "I used the run from the gradient."
        - "I named rise as opposite and run as adjacent."
        - "I used the inverse key."
      explain: "tan⁻¹(0.0714) = 4.1°, the same as for any 1 in 14 ramp."
  - check:
      type: question
      q: "What else must a ramp's designer check that this triangle doesn't show?"
      options: ["Landings, handrails and the rules for longer or shorter ramps", "Only the angle", "Only the length", "Nothing: the triangle is the whole design"]
      answer: 0
      feedback: [null, "There's more than the angle.", "There's more than the length.", "A triangle is just the shape of the slope."]
      explain: "The standard also covers landings, handrails and other gradients: the triangle only gives the slope."
```

### The angle

### What the triangle misses

**Also used in**

- **Building and surveying.** Roofs, stairs, drains and roads all have a slope, a length and an angle.
- **Physics.** A slope turns a push into a part along it.
- **Next lesson.** What stays and what changes when a shape is enlarged.
