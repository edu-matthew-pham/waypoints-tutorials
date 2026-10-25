---
order: 22
unit: quad9
node: AC9M9A05 n1
uses: [AC9M9A04 n1]
assumes: [AC9M9A04 n1]
connection: stopping-distance
title: Linear or quadratic?
summary: "A straight line has equal first differences and a quadratic has equal second differences. Real data fits neither exactly, so you pick the better model and say why."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Why does 60 km/h take so much longer to stop than 50 km/h, when it is only 10 km/h faster?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8369
  url: http://127.0.0.1:8369/index.html
  readySelector: "#board"
  layout: full
---
Real measurements are never perfectly straight or perfectly curved. Choosing a model means asking which pattern fits better, and where it stops working.

## Predict: stopping at 60

```step
stage: predict
insight: "Committing to a stopping distance at 60 km/h from the pattern in the first three speeds shows who keeps adding the same amount and who allows the amount to grow."
check:
  type: predict
  q: "Transport for NSW gives typical stopping distances on a reasonable road: about 19 m at 30 km/h, 27 m at 40 km/h and 37 m at 50 km/h. Following the pattern, what is the stopping distance at 60 km/h?"
  options:
    - "46 m"
    - "47 m"
    - "49 m"
    - "56 m"
  actual: "About 56 m, the published figure. A steady 9 m more for each 10 km/h would give 46 m. Even the extra growing by 2 each time would give 49 m. The real distance grows faster than both."
```

The figures are from the [Transport for NSW speeding page](https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding), checked 25 October 2026. They are typical values on a reasonable road surface: the surface, the tyres and the driver all change them.

<figure class="situation" role="img" aria-label="A bar chart with four bars for 30, 40, 50 and 60 kilometres per hour showing stopping distances of 19, 27, 37 and a question mark metres."><svg viewBox="0 0 300 170" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M30 140 H290" stroke-width="1.5"/><rect x="45" y="104" width="36" height="36" fill="#888780" fill-opacity="0.35" stroke="currentColor"/><rect x="100" y="87" width="36" height="53" fill="#888780" fill-opacity="0.35" stroke="currentColor"/><rect x="155" y="66" width="36" height="74" fill="#888780" fill-opacity="0.35" stroke="currentColor"/><rect x="210" y="30" width="36" height="110" stroke="currentColor" stroke-dasharray="5 4"/><text x="49" y="158" fill="currentColor" stroke="none">30</text><text x="104" y="158" fill="currentColor" stroke="none">40</text><text x="159" y="158" fill="currentColor" stroke="none">50</text><text x="214" y="158" fill="currentColor" stroke="none">60</text><text x="52" y="98" fill="currentColor" stroke="none">19</text><text x="107" y="81" fill="currentColor" stroke="none">27</text><text x="162" y="60" fill="currentColor" stroke="none">37</text><text x="220" y="24" fill="currentColor" stroke="none" font-size="18">?</text></svg></figure>

The bars are drawn to scale for the first three speeds. How tall is the last one?

## Run: fit a line

```step
stage: run
insight: "A line that fits the first three points exactly falls short at the fourth: the real data is curving upward away from the line."
try: { playground: board, starter: "stop.yml#run", height: 560 }
check: { type: board, text: "Set $m$ and $c$ so the line goes through the first three points. Where does the fourth point sit? Was your prediction right?", when: "m = 9 and c = -8" }
```

On the board, $x$ is the speed in tens of km/h ($x = 3$ is 30 km/h) and $y$ is the stopping distance in metres. The dots are the published figures.

## Investigate: differences

```step
stage: investigate
insight: "Equal first differences mean a line, equal second differences a quadratic. The real distances (19, 27, 37, 56) have first differences 8, 10, 19, which aren't equal, and second differences 2 and 9, which aren't equal either, so neither is exact."
tasks:
  - check:
      type: number
      q: "The stopping distances at 30, 40, 50 and 60 km/h are $19, 27, 37, 56$ m. What is the first difference between 50 and 60 km/h?"
      answer: 19
      explain: "56 − 37 = 19 m."
    smaller:
      check: { type: "number", q: "What is $56 - 37$?", answer: 19, explain: "56 − 37 = 19." }
  - check:
      type: question
      q: "The first differences are $8, 10, 19$. What does that say about a straight-line model?"
      options: ["A line doesn't fit: the distance goes up by more for each extra 10 km/h", "A line fits well: the distance always goes up", "A line fits exactly: the differences are all even or odd", "You can't tell from three differences"]
      answer: 0
      feedback: [null, "Going up isn't enough: a line goes up by the same amount each time.", "The differences are 8, 10, 19: not equal, and parity doesn't matter.", "Three differences are enough to see they aren't equal."]
      explain: "A line needs equal first differences. These grow, so the data curves upward."
  - check:
      type: question
      q: "The distance a car travels while the driver reacts grows in step with speed. The braking distance grows with the square of the speed. What shape is the total stopping distance?"
      options: ["Curved upward: a mix of a straight part and a squared part", "A straight line", "A curve that bends downward", "A flat line"]
      answer: 0
      feedback: [null, "The squared part makes it curve.", "A squared term curves upward, not downward.", "The distance changes with speed."]
      explain: "Reaction distance is linear and braking distance is quadratic, so the total curves upward."
  - check:
      type: bug
      code: "working.txt#pat"
      text: "Pat estimates the distance at 60 km/h from the first two figures. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: assume-linear-from-one-step
      explain: "Line 3: one step doesn't set the pattern. The next differences are 10 and 19, not 8, so the estimate of 43 m is far too low."
```

### The jump to 60

To choose a model, look at the differences. Equal first differences mean a line. Equal second differences mean a quadratic.

```worked
\text{Table A: } 2, 5, 8, 11 :: Four values at equal steps.
\text{first differences: } 3, 3, 3 :: Equal, so linear.
\text{Table B: } 1, 4, 9, 16 :: Another table.
\text{first differences: } 3, 5, 7 :: Not equal.
\text{second differences: } 2, 2 :: Equal, so quadratic.
\text{real data } 19, 27, 37, 56 :: Neither is exactly equal.
\text{choose the better model and say why} :: And say where it stops working.
```

Work out the differences of $19, 27, 37, 56$ on paper, then answer.

### A straight line?

### Why it curves

### Find the mistake

Read Pat's working. Which line assumes the pattern?

## Modify: change the speed

```step
stage: modify
insight: "Using the figures for new speeds shows that the gap grows and that a model has limits: it can give an impossible answer outside the data."
tasks:
  - hint: ["Use the published figures for 50 and 60 km/h.", "56 − 37."]
    check: { type: number, q: "A council cuts a speed limit from 60 to 50 km/h. How many metres shorter is the typical stopping distance?", answer: 19, explain: "56 − 37 = 19 m. A 10 km/h cut saves a lot more at the high end." }
  - hint: ["A line through the last two points goes up 19 per 10 km/h.", "The data is curving upward."]
    check: { type: question, q: "A line through the last two points (50 and 60 km/h) predicts 75 m at 70 km/h. Is that likely to be a safe estimate?", options: ["No: the real distance probably grows faster, so it would be an underestimate", "Yes: a line is always safe", "Yes: the data is already linear", "No: it's an overestimate"], answer: 0, feedback: [null, "The data curves upward, so a line falls short further out.", "The first differences keep growing.", "The data is curving upward, so the line falls below it."], explain: "The first differences have been growing, so the next one is likely bigger than 19. The line would underestimate." }
  - hint: ["At 0 km/h the car is already stopped.", "What does the line y = 9x − 8 give at x = 0?"]
    check: { type: question, q: "Edge case: the line $y = 9x - 8$ gives $-8$ at $x = 0$ (0 km/h). What does that tell you?", options: ["The line isn't a good model near 0: a stopped car needs 0 m", "A stopped car needs −8 m to stop", "The line is exact", "The speed can be negative"], answer: 0, feedback: [null, "A distance can't be negative.", "An impossible answer shows the model has limits.", "Speed isn't negative here."], explain: "A model fitted to speeds from 30 to 60 km/h is only reliable in that range." }
```

### Cutting the limit

### Going further

### Zero speed

## Practise: choose the model

```step
stage: practise
insight: "Using first and second differences to decide, and saying when neither fits exactly."
tasks:
  - check:
      type: number
      q: "A table gives $y = 2, 5, 10, 17$ for $x = 1, 2, 3, 4$. What is the second difference?"
      answer: 2
      explain: "First differences 3, 5, 7. Second differences 2, 2."
  - check:
      type: question
      q: "A table gives $y = 4, 9, 14, 19$. Which model fits?"
      options: ["Linear: the first differences are all 5", "Quadratic: the second differences are 5", "Neither", "Exponential"]
      answer: 0
      feedback: [null, "The first differences are equal, so a line fits.", "A line fits exactly.", "The values go up by the same amount, not the same factor."]
      explain: "9 − 4 = 5, 14 − 9 = 5, 19 − 14 = 5: equal first differences."
    smaller:
      check: { type: "number", q: "What is $9 - 4$?", answer: 5, explain: "9 − 4 = 5." }
  - check:
      type: question
      q: "A table gives $y = 3, 4, 7, 13$ for $x = 1, 2, 3, 4$. Which is the best description?"
      options: ["Curving upward: neither exact, but a curve fits better than a line", "A perfect line", "A perfect quadratic", "No pattern at all"]
      answer: 0
      feedback: [null, "The first differences are 1, 3, 6: not equal.", "The second differences are 2 and 3: not equal.", "The values grow faster and faster: a curve describes that better than a line."]
      explain: "First differences 1, 3, 6 and second differences 2, 3: not exact, but clearly curving upward."
  - check:
      type: number
      q: "Review: solve $x^2 - 5x + 4 = 0$. What is the larger solution?"
      answer: 4
      explain: "(x − 1)(x − 4) = 0, so x = 1 or x = 4."
```

### Second difference

### A line?

### Neither exact

### Review

From the last unit: solving by factorising.

## Make: the speed limit

```step
stage: make
insight: "Returning to the stopping distances: measure how far a straight-line model is out and say why that matters for a speed limit."
tasks:
  - hint: ["The line y = 9x − 8 at x = 6 is 46.", "The published figure is 56."]
    check:
      type: reasoning
      paper: true
      q: "A line through the first three figures predicts 46 m at 60 km/h. The published figure is 56 m. By how many metres does the line under-estimate?"
      steps:
        - ["$9 \\times 6 - 8 = 46$", "what the line says at x = 6"]
        - ["$56 - 46 = 10$", "the real figure minus the line"]
        - ["10 m", "the line under-estimates by 10 m"]
      answer: "10"
      answerLabel: "Under-estimate (m)"
      tolerance: 0.001
      feedback:
        - ["46", "That's the line's prediction. Subtract it from 56."]
        - ["56", "That's the real figure. Find how far the line misses it."]
      criteria:
        - "I worked out what the line says before comparing."
        - "I subtracted in the right order (real minus line)."
        - "I gave the answer in metres."
      explain: "56 − 46 = 10 m. The line is 10 m short at 60 km/h."
  - check:
      type: question
      q: "Why does this matter for choosing a speed limit?"
      options: ["A line would under-estimate how far cars need to stop at higher speeds", "A line would over-estimate how far cars need to stop", "The model makes no difference", "Faster cars always stop sooner"]
      answer: 0
      feedback: [null, "The line falls below the real figure at 60 km/h.", "The gap is 10 m at 60 km/h.", "Using a model that's too low could put a stop line or a crossing in the wrong place."]
      explain: "At higher speeds, the real distance is more than the line says, so a line would make roads look safer than they are."
```

### How far out?

Back to the stopping distances. Work it out on paper first, then type your answer.

### Why it matters

The stopping distances are typical values on a reasonable road surface from [Transport for NSW](https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding). Real distances depend on the road, tyres and driver.

**Also used in**

- **Road safety.** Speed limits near schools and crossings are set knowing that stopping distance grows faster than speed.
- **Science.** Many real measurements are almost a straight line over a short range and curve outside it.
- **Next lesson.** Using the model to answer a question and saying where the answer stops being reliable.
