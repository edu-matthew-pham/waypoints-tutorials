---
order: 6
unit: lines
node: AC9M8A04 n1
uses: [AC9M7A05 n3, AC9M7N07 n2]   # plotting a line from its rule; negative m gives negative outputs
assumes: [AC9M8A02]   # its Prior Knowledge; only graphing a line from a rule is used, taught in Plotting a rule (7A05 n3). Equations with x on both sides and inequalities are class work
title: What m does to a line
summary: In y = mx + c, the number in front of x sets how steep the line is and which way it goes.
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Ramps, roofs, ski runs and phone bills all have a steepness: how much more for each step along. In a rule like y = 3x + 1, one number decides it."
connection: road-gradient   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8135
  url: http://127.0.0.1:8135/index.html
  readySelector: "#sl-m"
  layout: full
explainPicture: { ref: graph.yml#explain-pic, caption: "$y = 3x + 1$: one step right, up 3. That 3 is $m$." }
explainClip:
  query: { code: "@graph.yml#explain", fresh: 1, id: explain }
  caption: "m is how far the line goes up for each step right"
  say: "m is how far the line goes up for each step to the right."
  clip:
    - caption: { text: "Here m = 1: one step right, up 1.", say: "Here m is one: one step right, and up one." }
    - wait: 400
    - caption: { text: "A bigger m: up 2 for each step, so the line is steeper.", say: "Make m bigger: up two for each step, so the line is steeper." }
    - click: Make m bigger
    - wait: 400
    - caption: { text: "m = 3: up 3. The line still crosses the y-axis at 1.", say: "m is three: up three, and it still crosses the y axis at one." }
    - click: Make m bigger
    - wait: 400
    - caption: { text: "m = 0: no steps up, so the line is flat.", say: "When m is zero, there are no steps up, so the line is flat." }
    - click: Make m smaller
    - click: Make m smaller
    - click: Make m smaller
    - wait: 400
    - caption: { text: "A negative m goes down: m = −2 is down 2 for each step right.", say: "A negative m goes down: m of negative two is down two each step." }
    - click: Make m smaller
    - click: Make m smaller
    - expect: { selector: "#legend", contains: "y = −2x + 1" }
    - wait: 1200
---
A rule such as $y = 3x + 1$ gives a **straight line**: work out $y$ for each value of $x$, plot the points, and join them. Every rule of the form $y = mx + c$ gives a straight line. $m$ is the number in front of $x$, and $c$ is the number on its own. Keep $c$ at 1 for now, and watch what $m$ does.

## Predict: a bigger m

```step
stage: predict
insight: "Committing to how the line will change before touching the slider makes the board a test of their idea about m, not a demonstration."
check:
  type: predict
  q: "The line $y = x + 1$ has $m = 1$. If $m$ becomes 3, so the rule is $y = 3x + 1$, what happens to the line?"
  options:
    - "It gets steeper, and still crosses the $y$-axis at 1"
    - "It moves up by 2, and is just as steep"
    - "It gets less steep"
    - "It moves 2 to the right"
  actual: "It gets steeper. When x = 0, y is still 1 (3 × 0 + 1 = 1), so the line still crosses the y-axis at 1, but now y goes up 3 for each step right instead of 1."
```

<figure class="situation" role="img" aria-label="Small axes with the line y = x + 1 drawn, crossing the y-axis at 1. A second line through the same point, y = 3x + 1, is a question mark: where does it go?"><svg viewBox="0 0 300 180" width="300" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M60 160 V10 M60 150 H230"/><text x="48" y="154" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="48" y="126" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="225" y="170" text-anchor="end" fill="currentColor" stroke="none">x</text><text x="68" y="18" fill="currentColor" stroke="none">y</text><path d="M60 122 L172 10" stroke="#185FA5" stroke-width="3"/><text x="178" y="24" fill="currentColor" stroke="none">y = x + 1</text><circle cx="60" cy="122" r="4" fill="currentColor"/><text x="150" y="120" fill="currentColor" stroke="none">y = 3x + 1: where does it go? ?</text></svg></figure>

$$y = x + 1 \quad\longrightarrow\quad y = 3x + 1$$

Think about two points on each line: where $x = 0$, and where $x = 1$. Which one moves?

## Run: change m

```step
stage: run
insight: "Moving m while c stays fixed shows the line turning about the point (0, 1): m changes the steepness, not where the line crosses the y-axis."
try: { playground: board, starter: "graph.yml#run", height: 640 }
check: { type: board, text: "Set $m$ to 3. Was your prediction right?", when: "m = 3" }
```

Change $m$ with the slider, or the − and + buttons. Watch three things: the line, the table, and the orange step, which shows how far the line goes up for one step to the right.

## Investigate: reading m

```step
stage: investigate
insight: "m is how far y goes up for each step of 1 to the right. The table and the step both show it, and it is the same all along the line."
tasks:
  - picture: { ref: graph.yml#explain-pic, caption: "$y = 3x + 1$: from $x = 1$ to $x = 2$, $y$ goes from 4 to 7: up 3." }
    check:
      type: answer
      q: "In $y = 5x + 1$, how far does the line go up for each step of 1 to the right?"
      answer: "5"
      feedback:
        - ["1", "1 is c, the number on its own: it is where the line crosses the y-axis. Look at the number in front of x."]
        - ["6", "6 is the value of y when x = 1. How much did y go up from x = 0 to x = 1?"]
      explain: "5. Each step right adds one more lot of 5 to 5x, so y goes up by 5 each time."
  - check:
      type: bug
      code: "working.txt#lee"
      text: "Lee decides which line is steeper. Click the line where his reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: m-c-swap
      explain: "Line 4: 4 and 1 are where the lines cross the y-axis, not how steep they are. Steepness is the number in front of x: 3 is more than 2, so y = 3x + 1 is steeper."
  - check:
      type: answer
      q: "On the line $y = 3x + 1$, how far does $y$ go up from $x = 5$ to $x = 6$?"
      answer: "3"
      feedback:
        - ["16", "16 is the value of y when x = 5. Work out y at x = 6 too, then find the difference."]
        - ["19", "19 is the value of y when x = 6. How much bigger is it than y at x = 5?"]
      explain: "At x = 5, y = 16; at x = 6, y = 19. Up 3, the same as from x = 0 to x = 1: m is the same all along the line."
```

### Up for each step right

Here is how to read $m$ from a rule, by working out $y$ one step at a time.

```worked
y = 3x + 1 :: How far does this line go up for each step right? Start with the rule.
x = 0: \; y = 3(0) + 1 = 1 :: Work out $y$ where $x$ is 0.
x = 1: \; y = 3(1) + 1 = 4 :: One step right: $x$ goes from 0 to 1.
4 - 1 = 3 :: $y$ went up by 3.
x = 2: \; y = 3(2) + 1 = 7, \; 7 - 4 = 3 :: Another step right: up 3 again.
m = 3 :: Each step right adds one more lot of 3, so $y$ goes up by $m$, the number in front of $x$.
```

### Find the mistake

Read Lee's working one line at a time. Which line compares the wrong thing?

### Further along

Does the line go up by the same amount everywhere, or only near the start?

## Modify: change m on purpose

```step
stage: modify
insight: "Changing one thing at a time shows the whole rule: a bigger m is steeper, m = 0 is flat, a negative m goes down, and m need not be a whole number."
try: { playground: board, starter: "graph.yml#through-9", height: 560 }
tasks:
  - starter: "graph.yml#through-9"
    hint: ["The line starts at (0, 1). How far up is 9 from 1?", "That rise happens over 2 steps right. How far up for each step?"]
    check: { type: board, text: "Set $m$ so the line passes through $T(2, 9)$.", when: "T on y = mx + 1", explain: "m = 4: from (0, 1), up 4 and up 4 again reaches (2, 9)." }
  - starter: "graph.yml#flat"
    hint: "T is at the same height as where the line starts. How far up for each step right?"
    check: { type: board, text: "Set $m$ so the line passes through $T(3, 1)$.", when: "T on y = mx + 1", explain: "m = 0: y = 0x + 1 = 1 for every x, so the line is flat." }
  - starter: "graph.yml#down"
    hint: ["T is below where the line starts. Which way must the line go?", "From 1 down to −3 is down 4, over 2 steps right."]
    check: { type: board, text: "Set $m$ so the line passes through $T(2, -3)$.", when: "T on y = mx + 1", explain: "m = −2: y goes down 2 for each step right. A negative m makes the line go down." }
  - starter: "graph.yml#half"
    hint: "From (0, 1) to T is up 2 over 4 steps right. How far up for one step?"
    check: { type: board, text: "Set $m$ so the line passes through $T(4, 3)$.", when: "T on y = mx + 1", explain: "m = 0.5: up half a square for each step right, so up 2 over 4 steps." }
```

### Steeper

Each task puts a point $T$ on the board. Find the $m$ that takes the line through $T(2, 9)$. Change only $m$.

### Flat

Now take the line through $T(3, 1)$. What does the line do?

### Down

$T(2, -3)$ is below the start of the line. Which way must it go?

### Less than 1

Take the line through $T(4, 3)$. The slider now moves in halves.

## Practise: read the line

```step
stage: practise
insight: "Reading m from a rule, from a description and from a point are the same skill; the review question keeps substitution from the Equations unit fresh."
tasks:
  - check:
      type: answer
      q: "What is $m$ in $y = 4x - 2$?"
      answer: "4"
      feedback:
        - ["-2", "−2 is c, the number on its own: it is where the line crosses the y-axis. m is the number in front of x."]
      explain: "m = 4: the line goes up 4 for each step right."
  - check:
      type: question
      q: "Which line goes down from left to right?"
      options: ["$y = 3x - 2$", "$y = -2x + 5$", "$y = 0x + 4$"]
      answer: 1
      explain: "Only a negative m makes a line go down: y = −2x + 5 goes down 2 for each step right. The −2 in y = 3x − 2 is c, so that line still goes up 3 for each step; y = 0x + 4 is flat."
  - check:
      type: answer
      q: "The line $y = mx + 1$ passes through $(3, 7)$. What is $m$?"
      answer: "2"
      feedback:
        - ["7", "7 is y at x = 3. The line starts at 1 when x = 0: how far does it go up over the 3 steps?"]
        - ["6", "6 is how far it goes up over 3 steps. How far for each step?"]
      explain: "From (0, 1) to (3, 7) is up 6 over 3 steps right, so up 2 for each step: m = 2."
    smaller:
      check: { type: "number", q: "The line starts at $(0, 1)$ and reaches $(3, 7)$. How far does it go up altogether?", answer: 6, explain: "From 1 up to 7 is 6. That's over 3 steps right." }
  - check:
      type: answer
      q: "Review: work out $y$ when $x = 4$ in $y = 3x - 5$."
      answer: "7"
      feedback:
        - ["29", "It looks like 3x became 34. 3x means 3 × x, so it is 3 × 4 = 12."]
        - ["12", "That is 3 × 4. Now take away 5."]
      explain: "3 × 4 − 5 = 12 − 5 = 7."
```

### From the rule

### Which way?

### From a point

### Review

## Make: your own line

```step
stage: make
insight: "Choosing m first and then finding a point on that line reverses the lesson: from the number to the picture."
try: { playground: board, starter: "graph.yml#make", height: 560 }
hint: ["Pick a value of m first, say m = 2.", "Start at (0, 1) and count: 1 right, 2 up. Drag P to that point, or count further along."]
check: { type: board, text: "Choose any $m$, then drag $P$ onto your line, to the right of the $y$-axis.", when: "P on y = mx + 1 and x(P) > 0", explain: "P is on your line: its coordinates make y = mx + 1 true." }
```

Choose your own steepness with the slider. Then use counting (1 right, $m$ up) to find a point on your line and drag $P$ there. Try a negative $m$ too.

Stretch: without the board, give a point on $y = 3x + 1$ where $x = 10$.

## Make: how steep is the hill, on paper

```step
stage: make
insight: "A road sign's percentage is m written as up per 100 along: rise divided by run, and a bigger m is steeper."
hint: ["How far up for each 1 m along? Divide the rise by the run.", "A percentage is the climb in every 100 m along, so multiply the answer by 100."]
check:
  type: reasoning
  paper: true
  q: "Hill A climbs 6 m while you travel 75 m along the flat. A sign on Hill B says 10%. On paper, work out Hill A's gradient as a percentage, then say which hill is steeper."
  steps:
    - ["$m = \\text{rise} \\div \\text{run} = 6 \\div 75$", "m is how far up for each step along"]
    - ["$6 \\div 75 = 0.08$, up 0.08 m for each metre along, so 8 m up in 100 m: 8%", "a percentage is the climb in 100 m along"]
    - ["Hill B is 10%, which is bigger than 8%, so Hill B is steeper", "a bigger m is a steeper line"]
  picks:
    - step: 1
      q: "How do you find m from a climb of 6 m over 75 m along?"
      options:
        - "Divide the rise by the run: 6 ÷ 75"
        - "Divide the run by the rise: 75 ÷ 6"
        - "Take the rise from the run: 75 − 6"
      answer: 0
      feedback: [null, "75 ÷ 6 is how far along for each metre up, the upside-down of m.", "Gradient compares the two distances. Subtracting does not say how steep it is."]
  answer: "8"
  tolerance: 0
  feedback:
    - ["0.08", "That is the gradient as a decimal. A sign shows a percentage: how far up in 100 m along."]
    - ["12.5", "That is 75 ÷ 6, upside down. Divide the rise by the run."]
  criteria:
    - "I divided the rise by the run."
    - "I changed the decimal into a percentage by finding the climb in 100 m."
    - "I compared 8% and 10% and said which is steeper."
  explain: "6 ÷ 75 = 0.08, which is 8 m up in every 100 m: 8%. Hill B at 10% is steeper."
```

Do this one in your book, not on the screen. The hill is made up for the task, and a real sign gives the steepest part of the road. Divide, change it to a percentage, and compare.

**Also used in**

- **Roads and ramps.** A sign of 8% says the same thing as a line with $m = 0.08$.
- **Roofs.** A roof pitch is the rise for each step along, so a steeper roof has a bigger $m$.
- **Skiing and cycling.** Runs and hill climbs are rated by how much they go up for each distance along.
