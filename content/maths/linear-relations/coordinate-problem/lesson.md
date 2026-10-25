---
order: 17
unit: lines9
node: AC9M9A03 n5
uses: [AC9M9A03 n1, AC9M9A03 n2, AC9M9A03 n3, AC9M9A03 n4]
assumes: [AC9M9A03 n1, AC9M9A03 n2, AC9M9A03 n3, AC9M9A03 n4]
connection: crow-flies
title: Gradient, distance and midpoint together
summary: "A real plan can need all three: is a point on a path, how long is the path, and where is its middle? Then judge whether a straight-line answer fits the real walk."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A park plan has a gate, a pond and a straight path between them. Is the bench on the path, how long is it, and where should the bin go?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8364
  url: http://127.0.0.1:8364/index.html
  readySelector: "#board"
  layout: full
---
You now have three tools for two points: the gradient, the distance and the midpoint. Real problems ask for them together.

## Predict: on the path?

```step
stage: predict
insight: "Committing on whether a bench sits on a straight path shows who trusts the look of the plan and who compares gradients."
check:
  type: predict
  q: "On a park plan in metres, a straight path runs from the gate G (2, 1) to the pond P (6, 9). A bench is at (3, 3). Is the bench on the path?"
  options:
    - "Yes, it's on the path"
    - "No, it's to the left of the path"
    - "No, it's to the right of the path"
    - "You can't tell without measuring"
  actual: "Yes. The path goes up 8 for 4 across: gradient 2. From the gate to the bench is 2 up for 1 across: also gradient 2. Same gradient from the same point, so the bench is on the path."
```

<figure class="situation" role="img" aria-label="A park plan on a grid. A straight path runs from the gate at 2, 1 to the pond at 6, 9. A bench is marked at 3, 3, close to the path."><svg viewBox="0 0 260 260" width="260" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><g stroke-opacity="0.2"><path d="M20 240 H240 M20 200 H240 M20 160 H240 M20 120 H240 M20 80 H240 M20 40 H240 M20 40 V240 M60 40 V240 M100 40 V240 M140 40 V240 M180 40 V240 M220 40 V240"/></g><path d="M20 240 H245 M20 240 V35" stroke-width="1.5"/><path d="M60 220 L140 60" stroke-width="3"/><circle cx="60" cy="220" r="5" fill="currentColor"/><circle cx="140" cy="60" r="5" fill="currentColor"/><rect x="76" y="176" width="10" height="10" fill="currentColor"/><text x="68" y="236" fill="currentColor" stroke="none">gate (2, 1)</text><text x="148" y="56" fill="currentColor" stroke="none">pond (6, 9)</text><text x="92" y="184" fill="currentColor" stroke="none">bench (3, 3)</text></svg></figure>

The bench looks close. Is it exactly on the path?

## Run: find the points on the path

```step
stage: run
insight: "Dragging a point and watching its gradient from the gate shows that points on the path all have the same gradient as the path."
try: { playground: board, starter: "plan.yml#run", height: 560 }
check: { type: board, text: "Drag $T$ to any point on the path, away from the gate. What do you notice about the dashed sides? Was your prediction right?", when: "v = 2 * h and h > 0" }
```

Drag $T$ along the path. The dashed triangle starts at the gate $G$.

## Investigate: three tools, one plan

```step
stage: investigate
insight: "The gradient says whether a point is on the path, the distance says how long it is, and the midpoint says where its middle is. Each answer only fits the straight line."
tasks:
  - check:
      type: number
      q: "What is the gradient of the path from $G(2, 1)$ to $P(6, 9)$?"
      answer: 2
      explain: "Rise 9 − 1 = 8, run 6 − 2 = 4. 8 ÷ 4 = 2."
    smaller:
      check: { type: "number", q: "How far up does the path go from $G(2, 1)$ to $P(6, 9)$?", answer: 8, explain: "9 − 1 = 8." }
  - check:
      type: number
      q: "How long is the straight path from $G(2, 1)$ to $P(6, 9)$, in metres to 1 decimal place?"
      answer: 8.9
      tolerance: 0.05
      explain: "Across 4, up 8: 16 + 64 = 80. √80 ≈ 8.9 m."
  - check:
      type: question
      q: "A bin goes halfway along the path. Where is it?"
      options: ["$(4, 5)$", "$(8, 10)$", "$(4, 8)$", "$(2, 4)$"]
      answer: 0
      feedback: [null, "That adds without halving.", "Halve the y-coordinates too: (1 + 9) ÷ 2 = 5.", "That's the step from G to P, halved: add it to G."]
      explain: "(2 + 6) ÷ 2 = 4 and (1 + 9) ÷ 2 = 5."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia checks whether a post at $(5, 6)$ is on the path from $G(2, 1)$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: gradient-coordinates-not-differences
      explain: "Line 3: she divided the post's own coordinates, 6 ÷ 5. The gradient from G uses the differences: (6 − 1) ÷ (5 − 2) = 5/3, which isn't 2, so the post is not on the path."
```

### Is it on the path?

Here's checking a point against a line, using the gradient.

```worked
A(1, 2),\; B(7, 10),\; T(4, 6) :: Is T on the line from A to B?
m_{AB} = \frac{10 - 2}{7 - 1} = \frac{8}{6} = \frac{4}{3} :: The gradient of the whole line.
m_{AT} = \frac{6 - 2}{4 - 1} = \frac{4}{3} :: The gradient from A to T.
\frac{4}{3} = \frac{4}{3} :: Same gradient from the same point A.
\text{T is on the line AB} :: Yes.
```

Now try one on paper: the line from $(0, 1)$ to $(6, 4)$. Find its gradient, then type it. (Then check whether $(4, 3)$ is on it.)

### How long?

### The bin

### Find the mistake

Read Mia's working. Which line divides the wrong numbers?

## Modify: place things on the plan

```step
stage: modify
insight: "Placing a point from a rule, and then asking whether the straight-line answer is the real walking distance."
try: { playground: board, starter: "plan.yml#vary", height: 560 }
tasks:
  - hint: ["Average the coordinates of G and P.", "(2 + 6) ÷ 2 and (1 + 9) ÷ 2."]
    check: { type: board, text: "Drag $M$ to the midpoint of the path.", when: "x(M) = 4 and y(M) = 5" }
  - hint: ["Gradient 2 means up 2 for each 1 across.", "3 across is how far up?"]
    check: { type: board, text: "Drag $T$ so it's on the path, 3 across from the gate (and so 6 up).", when: "h = 3 and v = 6" }
  - hint: ["The straight line is the shortest way between two points.", "A real path that bends is longer."]
    check: { type: question, q: "The real walkway bends round the pond. Is the straight-line distance GP bigger or smaller than the real walk?", options: ["Smaller: a straight line is the shortest way", "Bigger: it cuts across", "The same: it's a distance either way"], answer: 0, feedback: [null, "A straight line can't be longer than a bent route between the same points.", "A bend makes the walk longer."], explain: "The straight line is the shortest route between two points, so the real walk is at least as long." }
```

### The midpoint

### On the path

### Real or straight

## Practise: mixed problems

```step
stage: practise
insight: "Choosing the right tool for each question on a plan: gradient, distance or midpoint."
tasks:
  - check:
      type: number
      q: "A path goes from $(1, 2)$ to $(5, 10)$. What is the $y$-coordinate of its midpoint?"
      answer: 6
      explain: "(2 + 10) ÷ 2 = 6."
  - check:
      type: number
      q: "A path goes from $(0, 0)$ to $(6, 8)$. A second path goes at right angles to it. What is the gradient of the second path as a decimal?"
      answer: -0.75
      tolerance: 0.001
      explain: "The first gradient is 8/6 = 4/3. Turn it upside down and change the sign: −3/4 = −0.75."
    smaller:
      check: { type: "number", q: "What is the gradient of the path from $(0, 0)$ to $(6, 8)$, as a fraction $\\frac{8}{6}$ simplified? Type it as a decimal to 2 places.", answer: 1.33, tolerance: 0.01, explain: "8 ÷ 6 = 1.33…" }
  - check:
      type: question
      q: "Is $(5, 7)$ on the line from $(1, 1)$ to $(9, 13)$?"
      options: ["Yes: both gradients are 1.5", "No: its gradient from (1, 1) is 2", "No: it's the wrong distance", "You can't tell"]
      answer: 0
      feedback: [null, "From (1, 1) to (5, 7): 6 up for 4 across is 1.5, the same as the line.", "Distance isn't what decides it.", "You can: compare the gradients."]
      explain: "Line: 12 ÷ 8 = 1.5. From (1, 1) to (5, 7): 6 ÷ 4 = 1.5. Same gradient, so yes."
  - check:
      type: question
      q: "Review: which of these is perpendicular to a line of gradient $\\frac{2}{3}$?"
      options: ["$-\\frac{3}{2}$", "$\\frac{3}{2}$", "$-\\frac{2}{3}$", "$\\frac{2}{3}$"]
      answer: 0
      feedback: [null, "That's upside down but the sign hasn't changed.", "That changes the sign but not the fraction.", "That's parallel."]
      explain: "Upside down and change the sign: −3/2."
```

### A midpoint

### At right angles

### On the line?

### Review

From earlier in the unit: perpendicular gradients.

## Make: the park plan

```step
stage: make
insight: "Returning to the park plan: check a new point against the path, then judge whether a sprinkler reaches the gate."
tasks:
  - hint: ["Work out the gradient from the gate to the lamp.", "Compare it with the path's gradient."]
    check:
      type: reasoning
      paper: true
      q: "A lamp is at $(5, 7)$. Is it on the path from $G(2, 1)$ to $P(6, 9)$? Find the gradient from the gate to the lamp, and type it."
      steps:
        - ["$m_{GL} = \\frac{7 - 1}{5 - 2}$", "rise and run from the gate to the lamp"]
        - ["$= \\frac{6}{3} = 2$", "the gradient from the gate to the lamp"]
        - ["$m_{GP} = 2$", "the path has the same gradient, so the lamp is on it"]
      answer: "2"
      answerLabel: "Gradient from the gate to the lamp"
      tolerance: 0.001
      feedback:
        - ["7/5", "That divides the lamp's own coordinates. Use the differences from the gate."]
        - ["1.4", "That divides the lamp's own coordinates. Use the differences from the gate."]
      criteria:
        - "I used differences from the gate, not the lamp's own coordinates."
        - "I compared my answer with the path's gradient."
        - "I said whether the lamp is on the path."
      explain: "6 ÷ 3 = 2, the same as the path, so the lamp is on the path."
  - check:
      type: question
      q: "A sprinkler at the bin (the midpoint $(4, 5)$) reaches 5 m. Does it reach the gate $G(2, 1)$? (Use the distance between them.)"
      options: ["Yes: the gate is about 4.5 m away", "No: the gate is about 8.9 m away", "No: the gate is exactly 5 m away", "Yes: it's the same height"]
      answer: 0
      feedback: [null, "8.9 m is the whole path. The bin is halfway, so half that.", "Across 2, up 4: 4 + 16 = 20, and √20 ≈ 4.5, not 5.", "Height alone doesn't decide it: use the distance."]
      explain: "Across 2, up 4: 4 + 16 = 20 and √20 ≈ 4.5 m. That's less than 5 m, so the sprinkler reaches the gate. On the real ground, a hedge or a hill could still be in the way."
```

### The lamp

Back to the park. Work it out on paper first, then type your answer.

### The sprinkler

The plan, the lamp and the sprinkler here are made up for the task.

**Also used in**

- **Planning and surveying.** Plans are drawn on grids so that lengths, middles and slopes can be calculated before building.
- **Next unit.** Quadratic relationships: curved graphs, and how to tell them from straight lines.
