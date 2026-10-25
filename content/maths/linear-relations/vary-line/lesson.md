---
order: 24
unit: vary9
node: AC9M9A06 n1
uses: [AC9M9A03 n1]
assumes: [AC9M9A03 n1]
connection: plans-cross
title: Change a and b in a line
summary: "In y = ax + b, a sets how steep the line is and b sets where it starts. Change one and watch what moves."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two phone plans, same shape of rule. What does each number in the rule actually control?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8371
  url: http://127.0.0.1:8371/index.html
  readySelector: "#board"
  layout: full
---
A rule like $y = ax + b$ has two numbers you can change. Knowing which does what lets you shape a line to fit a situation.

## Predict: which number does what

```step
stage: predict
insight: "Committing to which number moves the starting height and which changes the steepness exposes the mix-up before the board settles it."
check:
  type: predict
  q: "A phone plan costs $y = 3x + 7$ dollars for $x$ gigabytes. If the monthly fee goes from 7 to 12 dollars (the rule becomes $y = 3x + 12$), what happens to the graph?"
  options:
    - "The whole line moves up 5, and stays just as steep"
    - "The line gets steeper"
    - "The line gets flatter"
    - "The line moves right 5"
  actual: "The whole line moves up 5 and keeps the same steepness. The fee is the number added on at the start, so it sets where the line begins on the y-axis."
```

A plan from a made-up phone company: a monthly fee plus a price for each gigabyte. This is a made-up plan, to show the rule.

## Run: move the sliders

```step
stage: run
insight: "Changing b slides the line up or down; changing a tilts it about the point where it crosses the y-axis."
try: { playground: board, starter: "line.yml#run", height: 560 }
check: { type: board, text: "Set $a$ to $3$ and $b$ to $7$. Then change only $b$ and watch. What moves?", when: "a = 3 and b = 7" }
```

## Investigate: what each number does

```step
stage: investigate
insight: "b is where the line crosses the y-axis (the fee when x is 0); a is how much y rises for each 1 across (the price per gigabyte)."
tasks:
  - check:
      type: number
      q: "For $y = 3x + 7$, what is $y$ when $x = 0$ (no gigabytes used)?"
      answer: 7
      explain: "3 × 0 + 7 = 7 dollars: the monthly fee, where the line starts."
    smaller:
      check: { type: "number", q: "What is $3 \\times 0$?", answer: 0, explain: "3 × 0 = 0." }
  - check:
      type: question
      q: "In $y = 3x + 7$, what does the $3$ tell you about the graph?"
      options: ["y rises by 3 for every 1 across: the steepness", "The line crosses the y-axis at 3", "The line crosses the x-axis at 3", "y is always 3"]
      answer: 0
      feedback: [null, "The line crosses the y-axis at 7, the other number.", "That is a different point.", "y changes as x changes."]
      explain: "The number multiplying x is the gradient: how much y goes up for each 1 across."
  - check:
      type: bug
      code: "working.txt#jo"
      text: "Jo describes what happens when a changes. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: a-changes-start-b-changes-slope
      explain: "Line 3: it is b, not a, that moves where the line starts. Changing a tilts the line."
```

### What b does

```worked
y = 3x + 7 :: The rule: price per gigabyte 3, fee 7.
x = 0 \Rightarrow y = 7 :: Where the line starts.
x = 1 \Rightarrow y = 10 :: 3 more for each gigabyte.
y = 3x + 12 :: Raise b by 5.
x = 0 \Rightarrow y = 12 :: The start moves up 5, every point moves up 5.
y = 5x + 7 :: Raise a by 2 instead.
x = 0 \Rightarrow y = 7 :: The start stays; the line is steeper.
```

### What a does

### Find the mistake

Read Jo's working. Which line mixes the two numbers up?

## Modify: shape the line

```step
stage: modify
insight: "Choosing a and b to hit a target shows each number is a separate control."
tasks:
  - hint: ["Which number sets where the line starts?", "Set b equal to the start value."]
    check: { type: number, q: "A plan charges a $10 fee and $3 a gigabyte. Which value of $b$ in $y = 3x + b$ matches?", answer: 10, explain: "The fee is where the line starts, so b = 10." }
  - hint: ["The line goes up by a for each 1 across.", "Go from 14 to 22 in 2 steps."]
    check: { type: number, q: "A line starts at 10 when x = 0 and reaches 22 when x = 2. What is $a$?", answer: 6, explain: "(22 − 10) ÷ 2 = 6." }
  - hint: ["Compare the two rules at x = 0.", "Compare the two rules at x = 4."]
    check: { type: question, q: "Plan A is $y = 3x + 7$. Plan B is $y = 5x + 1$. Which is cheaper for 1 gigabyte, and which for 10?", options: ["B is cheaper for 1 gigabyte, A is cheaper for 10", "A at both", "B at both", "They are always equal"], answer: 0, feedback: [null, "At 10 GB, A costs 37 and B costs 51.", "At 1 GB, A costs 10 and B costs 6.", "They only meet once."], explain: "At 1 GB: A = 10, B = 6, so B is cheaper. At 10 GB: A = 37, B = 51, so A is cheaper." }
```

### The fee

### The price per gigabyte

### Which is cheaper

## Practise: read the rule

```step
stage: practise
insight: "Reading a and b straight from the rule."
tasks:
  - check:
      type: number
      q: "For $y = 4x + 9$, where does the line cross the y-axis?"
      answer: 9
      explain: "x = 0 gives y = 9."
  - check:
      type: number
      q: "For $y = 4x + 9$, by how much does y rise for each 1 across?"
      answer: 4
      explain: "The number multiplying x is 4."
    smaller:
      check: { type: "number", q: "What is $4 \\times 1$?", answer: 4, explain: "4 × 1 = 4." }
  - check:
      type: number
      q: "Review: solve $5x - 3 = 12$."
      answer: 3
      explain: "5x = 15, so x = 3."
```

### Starting point

### Steepness

### Review

## Make: design a plan

```step
stage: make
insight: "Returning to the phone plans: choose a and b so one plan beats another past a given point."
tasks:
  - hint: ["Plan A costs 3x + 7. Plan B costs 5x + 1.", "Set them equal: 3x + 7 = 5x + 1."]
    check:
      type: reasoning
      paper: true
      q: "Plan A is $y = 3x + 7$ and plan B is $y = 5x + 1$. At how many gigabytes do they cost the same?"
      steps:
        - ["$3x + 7 = 5x + 1$", "set the two costs equal"]
        - ["$6 = 2x$", "collect the x terms on one side and the numbers on the other"]
        - ["$x = 3$", "divide by 2"]
      answer: "3"
      answerLabel: "Gigabytes"
      tolerance: 0.001
      feedback:
        - ["6", "That's 2x. Divide by 2."]
      criteria:
        - "I set the two costs equal."
        - "I collected like terms before dividing."
        - "I checked my answer in both rules."
      explain: "At 3 GB: A = 16 and B = 16."
  - check:
      type: question
      q: "Which plan is cheaper for a heavy user?"
      options: ["Plan A: its price per gigabyte is lower", "Plan B: its fee is lower", "They stay equal", "Neither"]
      answer: 0
      feedback: [null, "B's low fee only helps light users.", "They only meet at 3 GB.", "Compare after 3 GB."]
      explain: "After 3 GB, B grows faster (5 per GB against 3), so A is cheaper."
```

### Same cost

### The heavy user

These plans are made up for the task.

**Also used in**

- **Subscriptions.** A fee plus a price per use is the same shape for gyms, taxis and streaming.
- **Science.** A starting reading plus a steady rate of change, such as a temperature that rises steadily.
- **Next lesson.** Changing the numbers in a quadratic rule.
