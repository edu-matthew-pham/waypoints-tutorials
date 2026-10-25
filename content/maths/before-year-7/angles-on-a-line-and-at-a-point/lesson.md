---
title: "Angles on a line and at a point"
summary: "Angles on a straight line add to 180 degrees, and angles round a point add to 360 degrees. You can find a missing angle by taking the angles you know from the total."
language: maths
shape: primer
unit: unknowns
order: 11
node: [AC9M6M04 n1, AC9M6M04 n2]
hook: "Two angles sit side by side on a straight line. One is 70 degrees. How big is the other?"
---
A straight line is half a turn, which is $180°$. A full turn is $360°$. So **angles on a straight line** add to 180° and **angles round a point** add to 360°.

## Think first

```step
stage: predict
insight: "Students mix up the totals, or give 90 for a line. A line is half a turn (180) and a full turn is 360."
check:
  type: predict
  q: "Two angles are next to each other on a straight line. One is 70°. How big is the other?"
  options: ["110°","20°","290°","70°"]
  actual: "110°. Angles on a straight line add to 180°, and 180 - 70 = 110."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Picking two angles side by side on a line shows that they add to 180."
try: { playground: board, starter: "boards.yml#line", height: 460 }
check: { type: board, text: "Pick two angles that sit side by side on a straight line. The board will say so.", when: "r = 5" }
hint: ["Angles a and b are side by side, above the line.","Click two angles. The board names them when they are on a straight line."]
```

Turn the crossing line with the slider. Pick two angles next to each other on the same straight line, for example $a$ and $b$.

## The idea

```step
stage: investigate
insight: "A straight line is 180 and a full turn is 360. The missing angle is the total take away the angles you know."
tasks:
  - insight: "A straight line is 180."
    check:
      type: answer
      q: "Two angles on a straight line are 125° and ?°. What is the missing angle?"
      answer: "55"
      feedback:
        - ["305","That is 360 - 55. A straight line is 180, not 360."]
        - ["65","125 + 65 = 190. Take 125 from 180."]
      explain: "180 - 125 = 55."
  - insight: "A full turn is 360."
    check:
      type: answer
      q: "Angles around a point are 90°, 120°, 100° and ?°. What is the missing angle?"
      answer: "50"
      feedback:
        - ["310","90 + 120 + 100 = 310. That is the total of the three. Take it from 360."]
        - ["70","That uses 180. Round a point is 360."]
      explain: "90 + 120 + 100 = 310, and 360 - 310 = 50."
  - insight: "A full turn is 360."
    check:
      type: question
      q: "How big is a full turn?"
      options: ["360°","180°","90°","100°"]
      answer: 0
      feedback: [null,"That is half a turn.","That is a quarter turn.","A full turn is 360, not 100."]
      explain: "A full turn is 360°. Half a turn is 180° and a quarter turn is 90°."
```

**Angles on a straight line** add to $180°$. **Angles round a point** add to $360°$. To find a missing angle, add up the ones you know and take the total from 180 or 360.

### On a line

### Round a point

### A full turn

## Check

```step
stage: practise
insight: "Finding missing angles in new examples."
tasks:
  - check:
      type: answer
      q: "On a straight line, 40° and ?° sit side by side. What is the missing angle?"
      answer: "140"
      feedback:
        - ["320","That uses 360. A straight line is 180."]
        - ["50","That uses 90. A straight line is 180."]
      explain: "180 - 40 = 140."
  - check:
      type: answer
      q: "Angles round a point are 150°, 150° and ?°. What is the missing angle?"
      answer: "60"
      feedback:
        - ["30","150 + 150 = 300, and the total is 360, not 330."]
        - ["210","That is 360 - 150. There are two 150s."]
      explain: "150 + 150 = 300, and 360 - 300 = 60."
```

### On a line

### Round a point

## Apply

```step
stage: make
insight: "Explaining why a full turn is 360."
check:
  type: reasoning
  q: "Explain how you could find an unknown angle round a point when you know the others."
  placeholder: "I add up … then …"
  models:
    - title: "Take away"
      text: "I add up the angles I know. I know all the angles round a point add to 360°, so I take my total away from 360. What is left is the missing angle."
  criteria:
    - "I said angles round a point add to 360."
    - "I said I add the known angles and take them from the total."
```

```teacher
summary: "Students use 180 for a straight line and 360 round a point to find missing angles."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say how many degrees are on a straight line."
  - "I can say how many degrees are round a point."
  - "I can find a missing angle."
before: |
  The one idea: a straight line is 180 and a full turn is 360. The common mistake is mixing the two totals. The Think first question meets it.
  
  The board is the parallel line board from the Year 7 lessons *Angles at parallel lines*. Here the lines are only a straight line to read angles from, and the angle sizes are hidden so they can pick pairs.
  
  A paper circle folded in half and quarters shows the turns.

  Not yet tried with a class.
running:
  - "Think first: ask students to turn on the spot through half a turn and a full turn."
  - "Try: ask which angles together make a straight line."
  - "Apply: look for the total taken away."
struggle: "Students may forget the total. Show a clock face: a half turn is 6 hours and a full turn is 12."
stuck:
  - see: "A student says the missing angle is 20° for 70° on a line."
    ask: "What do angles on a line add to?"
    fix: "180, so 180 - 70 = 110."
  - see: "A student says all angles add to 180."
    ask: "Round a point, how far do you turn?"
    fix: "A full turn, 360."
exit:
  q: "Angles on a line are 100° and ?°. What is ?, and what do angles round a point add to?"
  a: "80°, and 360°."
leads: |
  Leads into Year 7 Angles: *Angles at parallel lines* and *Unknown angles*.
```
