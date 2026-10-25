---
order: 2
unit: exponentials
node: AC9M10A03 n2
uses: [AC9M8A04 n2]   # where a line crosses the y-axis
connection: cooling-tea
title: Exponential graphs
summary: "The graph of y = a(bˣ) crosses the y-axis at a, grows when b is more than 1, decays when b is between 0 and 1, and never reaches the line y = 0 when it decays."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Pour a cup of tea and leave it on the bench. Will it ever get colder than the room?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8391
  url: http://127.0.0.1:8391/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: graph.yml#explain-pic, caption: "$y = 80(0.5^x)$ starts at 80 and halves each step. It gets closer to $y = 0$ but never reaches it." }
explainClip:
  query: { code: "@graph.yml#explain", fresh: 1, id: explain }
  caption: "b above 1 grows, b below 1 decays"
  say: "A base above one grows, and a base below one decays."
  clip:
    - caption: { text: "b = 2: the graph doubles each step and climbs.", say: "With b equal to two, the graph doubles each step and climbs." }
    - wait: 800
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - wait: 600
    - caption: { text: "b = 0.5: it halves each step and falls towards 0.", say: "With b equal to one half, it halves each step and falls towards zero." }
    - caption: { text: "It never reaches the x-axis.", say: "It never reaches the x axis." }
    - wait: 1200
---
A cup of tea starts at 90 °C in a room at 20 °C. It cools quickly at first and then more slowly. The readings in this lesson are made up. In class you can take your own with a thermometer, every couple of minutes, and see how close they are.

Will the tea ever get colder than the room?

## Predict: the next ten minutes

```step
stage: predict
insight: "Committing to what the tea does in the second ten minutes shows who expects a steady fall (35 °C again, as a straight line would give) and who sees the cooling slow as the tea nears the room."
check:
  type: predict
  q: "The tea starts at 90 °C. After 10 minutes it is 55 °C, a fall of 35 °C. What does it do in the next 10 minutes?"
  options:
    - "It falls by less than 35 °C"
    - "It falls by 35 °C again, to 20 °C"
    - "It falls by more than 35 °C"
    - "It stays at 55 °C"
  actual: "It falls by less than 35 °C. The hotter the tea is above the room, the faster it loses heat, so the cooling slows as the gap closes. With these made-up readings the gap to the room halves every 10 minutes: 35 °C, then 17.5 °C. So at 20 minutes the tea is 20 + 17.5 = 37.5 °C, a fall of 17.5 °C."
```

<figure class="situation" role="img" aria-label="A graph of tea temperature against time. The tea is 90 degrees at 0 minutes and 55 degrees at 10 minutes. A dashed line marks the room at 20 degrees. At 20 minutes there is a question mark."><svg viewBox="0 0 420 240" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="60" y1="200" x2="400" y2="200"/><line x1="60" y1="200" x2="60" y2="20"/><line x1="60" y1="168" x2="390" y2="168" stroke-dasharray="6 4"/><line x1="260" y1="200" x2="260" y2="60" stroke-dasharray="3 5"/><circle cx="60" cy="56" r="5" fill="#1D9E75" stroke="#0F6E56"/><circle cx="160" cy="112" r="5" fill="#1D9E75" stroke="#0F6E56"/><g fill="currentColor" stroke="none"><text x="72" y="52">90 °C</text><text x="172" y="108">55 °C</text><text x="300" y="160">room: 20 °C</text><text x="252" y="92" font-size="26">?</text><text x="56" y="218" text-anchor="middle">0</text><text x="160" y="218" text-anchor="middle">10</text><text x="260" y="218" text-anchor="middle">20</text><text x="360" y="218" text-anchor="middle">30 min</text><text x="64" y="16">°C</text></g></svg></figure>

The two dots are the first two readings. Make a guess about the next one before you check.

## Run: the shape of y = a(bˣ)

```step
stage: run
insight: "Changing b turns the graph from growth to decay; changing a only moves where it starts. The decay graph keeps falling and the table never reaches 0."
try: { playground: board, starter: "graph.yml#run", height: 660 }
check: { type: board, text: "Set $b$ to 0.5, so the value halves every step. That's how the gap between the tea and the room behaves. Was your prediction right?", when: "b = 0.5" }
```

The board draws $y = a(b^x)$. $a$ is where it starts, and $b$ is what you multiply by each time $x$ goes up by 1. Change them and watch the graph and the table.

## Investigate: reading the graph

```step
stage: investigate
insight: "a is where the graph crosses the y-axis; b above 1 grows and b between 0 and 1 decays. A decay graph never reaches 0, however long it runs. Kim thinks repeated halving gets to 0."
tasks:
  - check:
      type: answer
      q: "Where does $y = 3(2^x)$ cross the $y$-axis? Give the value of $y$."
      answer: "3"
      feedback:
        - ["2", "2 is b, what you multiply by. The graph crosses the y-axis where x = 0: put 0 in."]
        - ["6", "6 is y when x = 1. The y-axis is where x = 0."]
      explain: "3. When x = 0, 2 to the power 0 is 1, so y = 3 × 1 = 3. That's a."
  - check:
      type: bug
      code: "working.txt#kim"
      text: "Kim sketches $y = 4(0.5^x)$. Click the line where her reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: exp-reaches-zero
      explain: "Line 4: halving never gets to 0. 4, 2, 1, 0.5, 0.25, 0.125... there is always half left. The graph gets closer and closer to the x-axis but never touches it."
  - check:
      type: question
      q: "Which of these is a decay graph?"
      options: ["$y = 5(1.2^x)$", "$y = 5(0.8^x)$", "$y = 0.8(5^x)$"]
      answer: 1
      feedback: ["1.2 is more than 1, so each step multiplies by more than 1. It grows.", null, "0.8 is a, where it starts. The base is 5, more than 1, so it grows."]
      explain: "y = 5(0.8^x) multiplies by 0.8 each step, so it gets smaller: decay. The base, the number with the x in its power, decides."
```

### Where it starts

Here is a decay graph worked out.

```worked
y = 80(0.5^x) :: What does this graph do?
x = 0:\; y = 80(0.5^0) = 80 :: Put 0 in. Any number to the power 0 is 1, so y is just a. It crosses the y-axis at 80.
b = 0.5 < 1 :: The base is less than 1: each step multiplies by a half, so the graph decays.
80,\; 40,\; 20,\; 10,\; 5,\; 2.5 :: Keep halving for x = 0, 1, 2, 3, 4, 5.
y > 0 \text{ always} :: Halving never gives 0, so y never touches the x-axis.
y = 0 :: The graph gets closer and closer to y = 0 but never reaches it. A line it gets close to like this is called an asymptote.
```

Now try one on paper like the example: $y = 3(2^x)$. Where does it cross the $y$-axis, and does it grow or decay? Then type the $y$-axis value.

### Find the mistake

Read Kim's working. Does repeated halving ever reach 0?

### Growth or decay

Look at the number with the $x$ in its power.

## Modify: change a and b

```step
stage: modify
insight: "One change at a time: match two points with a and b, make a decay graph, set b to 1, then step back to a negative x."
try: { playground: board, starter: "graph.yml#vary", height: 620 }
tasks:
  - starter: "graph.yml#through-5-10"
    hint: ["The graph crosses the y-axis at $P$. Which slider sets that?", "From $P$ to $Q$ the value doubles."]
    check: { type: board, text: "Make the graph pass through $P(0, 5)$ and $Q(1, 10)$.", when: "a = 5 and b = 2", explain: "a = 5 (where it starts) and b = 2 (10 is 2 times 5)." }
  - starter: "graph.yml#decay"
    hint: ["Where does it cross the y-axis?", "From 3 to 1.5, what do you multiply by?"]
    check: { type: board, text: "Make a decay graph through $P(0, 3)$ and $Q(1, 1.5)$.", when: "a = 3 and b = 0.5", explain: "a = 3, and b = 0.5 because 1.5 is half of 3. The graph falls." }
  - hint: "Set $b$ to 1 and look at the table."
    check:
      type: question
      q: "Edge case: set $b$ to 1. What does the graph look like?"
      options: ["A flat line at height $a$: it doesn't grow or decay", "A curve that grows slowly", "A curve that decays slowly"]
      answer: 0
      feedback: [null, "Multiplying by 1 changes nothing, so it can't grow.", "Multiplying by 1 changes nothing, so it can't decay."]
      explain: "Multiplying by 1 each step leaves the value where it is: a flat line at a."
  - hint: ["Going one step back divides by $b$.", "At $x = 0$, $y = 4$. At $x = -1$, divide by 2."]
    check: { type: answer, q: "Edge case: the graph $y = 4(2^x)$ goes backwards too. What is $y$ when $x = -1$?", answer: "2", feedback: [["8", "8 is y when x = 1. Going to x = −1 is one step back, so divide by 2."], ["-4", "A negative x doesn't make y negative. One step back from 4 divides by 2."]], explain: "One step back divides by 2: 4 ÷ 2 = 2. (2⁻¹ = 1/2, so 4 × 1/2 = 2.)" }
```

### Two points, growth

Each of the first two tasks gives you two points. Set $a$ and $b$ so the graph passes through both.

### Two points, decay

### A base of 1

### Going backwards

## Practise: read the rule

```step
stage: practise
insight: "Reading the starting value, growth or decay, and the asymptote from the rule, with a review of the ratio from the last lesson."
tasks:
  - check:
      type: answer
      q: "Where does $y = 7(3^x)$ cross the $y$-axis? Give the value of $y$."
      answer: "7"
      feedback:
        - ["3", "3 is b. Put x = 0 in: 3 to the power 0 is 1."]
        - ["21", "21 is y when x = 1. The y-axis is where x = 0."]
      explain: "7. At x = 0, 3⁰ = 1 and y = 7 × 1 = 7."
  - check:
      type: question
      q: "Is $y = 100(0.9^x)$ growth or decay?"
      options: ["Decay: 0.9 is less than 1", "Growth: 100 is a big number", "Growth: 0.9 is positive"]
      answer: 0
      feedback: [null, "100 is a, where it starts. The base decides: 0.9.", "Positive isn't enough. Multiplying by 0.9 makes the value smaller each step."]
      explain: "The base 0.9 is between 0 and 1, so each step makes y smaller: decay."
  - check:
      type: answer
      q: "The graph of $y = 6(0.5^x)$ gets closer and closer to a horizontal line but never reaches it. What is $y$ on that line?"
      answer: "0"
      feedback:
        - ["6", "6 is where the graph starts (a). It falls from there."]
        - ["0.5", "0.5 is b. The line is where y ends up as the halving goes on and on."]
      explain: "0. Halving 6, 3, 1.5, 0.75... gets closer and closer to 0 and never reaches it. The line y = 0 is the asymptote."
    smaller:
      check:
        type: question
        q: "Keep halving: 6, 3, 1.5, 0.75, ... Will you ever get exactly 0?"
        options: ["Yes, after enough halvings", "No: there's always half left"]
        answer: 1
        feedback: ["Try it: each half is still more than 0, however small.", null]
        explain: "Half of something that isn't 0 is never 0. The numbers get tiny but stay above 0."
  - check:
      type: answer
      q: "Review: the table goes $7, 14, 28, 56$. What do you multiply by each time?"
      answer: "2"
      feedback:
        - ["7", "7 is how far it goes up from 7 to 14. The ratio is 14 ÷ 7."]
      explain: "14 ÷ 7 = 2 and 28 ÷ 14 = 2. Each value is 2 times the one before."
```

### Start

### Growth or decay

### Never reaches

### Review

The ratio, from the last lesson.

## Make: back to the tea

```step
stage: make
insight: "Coming back to the cup: the gap to the room decays and never reaches 0, so the tea never goes below the room."
try: { playground: board, starter: "graph.yml#tea", height: 600 }
tasks:
  - hint: ["The gap starts at 70 °C and halves every 10 minutes.", "30 minutes is three halvings."]
    check:
      type: reasoning
      paper: true
      q: "The tea is 90 °C in a 20 °C room. The gap between them starts at 70 °C and halves every 10 minutes (made-up readings). What is the tea's temperature after 30 minutes?"
      steps:
        - ["$70 \\div 2 = 35$ after 10 minutes", "the gap halves"]
        - ["$35 \\div 2 = 17.5$ after 20 minutes, then $17.5 \\div 2 = 8.75$ after 30", "halve twice more"]
        - ["$20 + 8.75 = 28.75$ °C", "the tea is the room plus the gap"]
      answer: "28.75"
      answerLabel: "Tea temperature (°C)"
      feedback:
        - ["8.75", "That's the gap. The tea is the room (20 °C) plus the gap."]
        - ["0", "The gap shrinks but doesn't reach 0, and the tea is still above the room."]
      criteria:
        - "I halved the gap three times."
        - "I added the room temperature back on."
        - "My tea is still warmer than the room."
      explain: "The gap: 70, 35, 17.5, 8.75. The tea is 20 + 8.75 = 28.75 °C."
  - check:
      type: question
      q: "Back to the question: will the tea ever get colder than the room?"
      options: ["No: the gap keeps halving but never reaches 0, so the tea stays above the room", "Yes, after about 70 minutes, when the gap has gone", "Yes, once the gap reaches 0 it keeps going down"]
      answer: 0
      feedback: [null, "Halving 70 never lands on 0, so the gap never goes. Check the dashed line on the board.", "The gap never reaches 0, so there's no time when the tea has gone below the room."]
      explain: "The gap is a decay graph, and a decay graph never reaches 0. The tea gets closer to 20 °C, and the dashed line on the board is its asymptote."
```

### Tea after 30 minutes

Back to the cup. Work this out on paper first, then type your answer.

### Colder than the room?

Move $b$ on the board. A flask that keeps the heat in has a $b$ close to 0.9. Does the tea ever go below the dashed line?

**Also used in**

- **Hot food.** A pie out of the oven cools towards the kitchen's temperature the same way.
- **Money.** A car that loses the same share of its value each year decays too, and its graph never quite reaches zero dollars.
- **Next lessons.** Reading the rule $y = a(b^x)$ from a graph, and solving for when it reaches a number.
