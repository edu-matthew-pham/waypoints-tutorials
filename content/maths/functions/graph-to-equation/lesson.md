---
order: 3
unit: exponentials
node: AC9M10A03 n3
uses: [AC9M8A04 n2]   # reading where a line crosses the y-axis
connection: cooling-tea
title: From graph to equation
summary: "In y = a(bˣ), a is the value where the graph crosses the y-axis, and b is the ratio between neighbours. Read both off a graph or a table, and read the shape back out of the rule."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two cups of tea, two graphs. Which cup cools faster, and could you tell from the rule alone?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8392
  url: http://127.0.0.1:8392/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: graph.yml#explain-pic, caption: "Cup B's gap: 50, 40, 32. The start is $a = 50$, and $b = 40 \\div 50 = 0.8$, so $y = 50(0.8^x)$." }
explainClip:
  query: { code: "@graph.yml#explain", fresh: 1, id: explain }
  caption: "Match the curve: a is the start, b is the ratio"
  say: "Match the curve: a is the start, and b is the ratio."
  clip:
    - caption: { text: "The dashed curve is cup B. It starts at 50.", say: "The dashed curve is cup B, and it starts at fifty." }
    - click: Make a bigger
    - wait: 500
    - caption: { text: "a = 50: the curves start together.", say: "With a equal to fifty, the curves start together." }
    - click: Make b bigger
    - wait: 800
    - caption: { text: "b is what you multiply by: 40 ÷ 50 = 0.8.", say: "And b is what you multiply by. Forty over fifty is point eight." }
    - wait: 1200
---
Your class timed two cups of tea, 70 °C in a 20 °C room, and graphed the gap between each cup and the room every 10 minutes. Cup A is an ordinary mug and cup B is an insulated flask. Both gaps start at 50 °C. The readings here are made up. Your own will be different, but the same ideas apply.

Both graphs decay, and both follow a rule of the form $y = a(b^x)$. What are $a$ and $b$ for each cup?

## Predict: cup B's rule

```step
stage: predict
insight: "Committing to a rule for two points shows who reads b as the next value (50(40^x)), who uses the second value as the start (40(0.8^x)), and who swaps a and b."
check:
  type: predict
  q: "Cup B's gap shrinks by the same share every 10 minutes. Its graph passes through $(0, 50)$ and $(1, 40)$. Which rule fits?"
  options:
    - "$y = 50(0.8^x)$"
    - "$y = 40(0.8^x)$"
    - "$y = 50(40^x)$"
    - "$y = 0.8(50^x)$"
  actual: "y = 50(0.8^x). The graph crosses the y-axis at (0, 50), so a = 50. To get from 50 to 40, multiply by 40 ÷ 50 = 0.8, so b = 0.8. At x = 1 that gives 50 × 0.8 = 40. ✓"
```

<figure class="situation" role="img" aria-label="A graph of the gap between cup B and the room against time in 10-minute steps. The gap is 50 degrees at 0 and 40 degrees at 1 step. A dashed curve carries on downwards with a question mark."><svg viewBox="0 0 420 240" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="60" y1="200" x2="400" y2="200"/><line x1="60" y1="200" x2="60" y2="20"/><path d="M130 72 C180 98 250 124 380 146" stroke-dasharray="6 4"/><circle cx="60" cy="40" r="5" fill="#1D9E75" stroke="#0F6E56"/><circle cx="130" cy="72" r="5" fill="#1D9E75" stroke="#0F6E56"/><g fill="currentColor" stroke="none"><text x="72" y="36">(0, 50)</text><text x="142" y="68">(1, 40)</text><text x="320" y="132" font-size="26">?</text><text x="60" y="218" text-anchor="middle">0</text><text x="130" y="218" text-anchor="middle">1</text><text x="200" y="218" text-anchor="middle">2</text><text x="270" y="218" text-anchor="middle">3</text><text x="340" y="218" text-anchor="middle">4 steps</text><text x="64" y="16">gap (°C)</text></g></svg></figure>

Each step is 10 minutes. The two dots are the first two readings. Make a guess for the rule before you try it.

## Run: cover the curve

```step
stage: run
insight: "Sliding a and b until the solid curve covers the dashed one shows that a is the value at x = 0 and b is the ratio between neighbours."
try: { playground: board, starter: "graph.yml#run", height: 660 }
check: { type: board, text: "Set $a$ and $b$ so the solid curve covers the dashed one. Was your prediction right?", when: "a = 50 and b > 0.75 and b < 0.85" }
```

The dashed curve is cup B's gap. Slide $a$ and $b$ until the solid curve sits on top of it. The table has a row for each curve, so you can read the numbers too.

## Investigate: a and b

```step
stage: investigate
insight: "a is the value at x = 0 and b is the ratio of one value to the one before. Tom reads b as the next value in the table instead of the ratio."
tasks:
  - check:
      type: answer
      q: "A graph goes through $(0, 2)$, $(1, 10)$ and $(2, 50)$. Write its rule in the form $y = a(b^x)$."
      answer: "2(5^x)"
      feedback:
        - ["2(10^x)", "10 is the value at x = 1, not what you multiply by. b is 10 ÷ 2."]
        - ["5(2^x)", "a and b are swapped. a is where it starts (2) and b is what you multiply by (5)."]
      explain: "a = 2 (the value at x = 0) and b = 10 ÷ 2 = 5. Check: 50 ÷ 10 = 5 too. So y = 2(5^x)."
  - check:
      type: bug
      code: "working.txt#tom"
      text: "Tom writes the rule for a graph through $(0, 5)$, $(1, 15)$ and $(2, 45)$. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: exp-base-is-y
      explain: "Line 3: b isn't the next number in the table. It's what you multiply by: 15 ÷ 5 = 3. The rule is y = 5(3^x). Check: x = 2 gives 5 × 9 = 45."
  - check:
      type: question
      q: "A graph starts at 40 and halves every step. Which rule is it?"
      options: ["$y = 40(0.5^x)$", "$y = 0.5(40^x)$", "$y = 40 - 0.5x$", "$y = 40(2^x)$"]
      answer: 0
      feedback: [null, "a and b are swapped: it starts at 40, and 0.5 is what you multiply by.", "That takes 0.5 away each step, so it's a straight line. Halving is multiplying by 0.5.", "Multiplying by 2 doubles. Halving is multiplying by 0.5."]
      explain: "It starts at 40 (a = 40) and multiplies by 0.5 each step (b = 0.5): y = 40(0.5^x)."
```

### Read a and b

Here's cup B's table turned into a rule.

```worked
(0,\,50),\; (1,\,40),\; (2,\,32) :: Cup B's gap, as points on the graph. What is the rule y = a(b^x)?
a = 50 :: a is where the graph crosses the y-axis: the value at x = 0.
b = 40 \div 50 = 0.8 :: b is what you multiply by. Divide a value by the one before.
32 \div 40 = 0.8 :: Check with the next pair. The same ratio again, so it's exponential.
y = 50(0.8^x) :: Put a and b into y = a(b^x).
x = 3:\; 50(0.8^3) = 25.6 :: Check the rule on the next step: 0.8 × 32 = 25.6. ✓
```

Now try one on paper like the example: $(0, 2)$, $(1, 10)$, $(2, 50)$. Write the rule, then type it.

Going the other way is quicker. From $y = 50(0.8^x)$ you can see without drawing it that the graph starts at 50, decays (0.8 is less than 1), and gets close to $y = 0$ without reaching it.

### Find the mistake

Read Tom's working. What is $b$?

### Which rule?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: match a growth curve on the board, read a decay rule from two points, find a when the graph isn't given at x = 0, and a ratio of 1."
try: { playground: board, starter: "graph.yml#grow", height: 640 }
tasks:
  - hint: ["The dashed curve starts at 8.", "Slide $b$ until the curves match: 12 ÷ 8 = 1.5."]
    check: { type: board, text: "The dashed curve is a growth curve. Slide $a$ and $b$ to cover it.", when: "a = 8 and b > 1.45 and b < 1.55", explain: "a = 8 (where it starts) and b = 1.5 (12 ÷ 8). This one grows because b is more than 1." }
  - hint: "From 4 to 2, what do you multiply by?"
    check: { type: answer, q: "A graph goes through $(0, 4)$ and $(1, 2)$. Write its rule.", answer: "4(0.5^x)", feedback: [["4(2^x)", "From 4 to 2 the value gets smaller, so b is less than 1: 2 ÷ 4 = 0.5."], ["2(4^x)", "a and b are swapped. a is the value at x = 0."]], explain: "a = 4 and b = 2 ÷ 4 = 0.5, so y = 4(0.5^x). It decays." }
  - hint: ["Find b first: how many times bigger is 18 than 6?", "Then go one step back from $(1, 6)$ to get $a$."]
    check: { type: answer, q: "Edge case: a graph goes through $(1, 6)$ and $(2, 18)$, but you aren't told where it crosses the $y$-axis. Write its rule.", answer: "2(3^x)", feedback: [["6(3^x)", "6 is the value at x = 1, not x = 0. One step back divides by 3: a = 6 ÷ 3 = 2."], ["18(3^x)", "18 is the value at x = 2. a is the value at x = 0."]], explain: "b = 18 ÷ 6 = 3. One step back from (1, 6) is 6 ÷ 3 = 2, so a = 2: y = 2(3^x). Check: x = 2 gives 2 × 9 = 18. ✓" }
    smaller:
      check: { type: number, q: "Just the ratio: how many times bigger is 18 than 6?", answer: 3, explain: "18 ÷ 6 = 3. That's b. Then go one step back from (1, 6) to find a." }
  - hint: "If nothing changes from 10 to 10, what do you multiply by?"
    check:
      type: question
      q: "Edge case: a graph goes through $(0, 10)$ and $(1, 10)$. Which rule fits?"
      options: ["$y = 10(1^x)$: a flat line", "$y = 10(0^x)$", "$y = 1(10^x)$"]
      answer: 0
      feedback: [null, "Multiplying by 0 would make the next value 0, not 10.", "That starts at 1, not 10, and multiplies by 10 each step."]
      explain: "10 to 10 means multiplying by 1, so b = 1 and a = 10: y = 10(1^x), a flat line at 10."
```

### Cover a growth curve

### A decay rule

### No point at x = 0

### A ratio of 1

## Practise: write and read rules

```step
stage: practise
insight: "Writing a rule from two points, reading a rule without drawing it, and (review) the asymptote from the last lesson."
tasks:
  - check:
      type: answer
      q: "A graph goes through $(0, 7)$ and $(1, 21)$. Write its rule in the form $y = a(b^x)$."
      answer: "7(3^x)"
      feedback:
        - ["21(3^x)", "21 is the value at x = 1. a is the value at x = 0."]
        - ["3(7^x)", "a and b are swapped. a is where it starts (7)."]
      explain: "a = 7 and b = 21 ÷ 7 = 3, so y = 7(3^x)."
  - check:
      type: question
      q: "What does $y = 12(0.75^x)$ tell you without drawing it?"
      options: ["It starts at 12 and decays towards 0", "It starts at 0.75 and grows", "It starts at 12 and grows", "It starts at 12 and falls below 0"]
      answer: 0
      feedback: [null, "0.75 is b, not where it starts. a = 12 is the start.", "0.75 is less than 1, so each step makes it smaller.", "A decay graph gets close to 0 but never goes below it."]
      explain: "a = 12 is the start, and b = 0.75 is between 0 and 1, so it decays. It gets close to the line y = 0."
  - check:
      type: answer
      q: "A graph goes through $(0, 80)$ and $(1, 20)$. Write its rule."
      answer: "80(0.25^x)"
      feedback:
        - ["80(4^x)", "20 is a quarter of 80, so b = 20 ÷ 80 = 0.25. It decays."]
      explain: "a = 80 and b = 20 ÷ 80 = 0.25, so y = 80(0.25^x)."
  - check:
      type: answer
      q: "Review: the graph of $y = 5(0.8^x)$ gets close to a horizontal line but never reaches it. What is $y$ on that line?"
      answer: "0"
      feedback:
        - ["5", "5 is where the graph starts. It falls from there."]
      explain: "0. A decay graph keeps getting closer to y = 0 and never reaches it."
```

### Two points

### Reading a rule

### A quarter

### Review

The asymptote, from the last lesson.

## Make: back to the two cups

```step
stage: make
insight: "Coming back to the two cups: the base b is the share of the gap left each step, so the smaller b cools faster, and the rule gives the gap at any time."
tasks:
  - hint: ["Cup A halves, so its $b$ is 0.5. Cup B keeps 0.8 of the gap.", "30 minutes is 3 steps."]
    check:
      type: reasoning
      paper: true
      q: "Cup A's gap starts at 50 °C and halves every 10 minutes. Cup B's gap starts at 50 °C and is 0.8 times the one before every 10 minutes (made-up readings). Write each rule, then work out cup B's gap after 30 minutes."
      steps:
        - ["Cup A: $y = 50(0.5^x)$", "starts at 50, multiplies by 0.5"]
        - ["Cup B: $y = 50(0.8^x)$", "starts at 50, multiplies by 0.8"]
        - ["$x = 3$: $50 \\times 0.8^3 = 50 \\times 0.512 = 25.6$ °C", "30 minutes is 3 steps"]
      picks:
        - step: 2
          q: "Which cup cools faster?"
          options: ["Cup A: 0.5 is smaller than 0.8, so more of the gap goes each step", "Cup B: 0.8 is bigger, so it loses more", "They cool the same: they start at the same gap"]
          answer: 0
          feedback: [null, "Cup B keeps 0.8 of its gap each step, and cup A keeps only 0.5. The smaller b keeps less.", "The same start doesn't make the same shrinking. Compare b: 0.5 and 0.8."]
      answer: "25.6"
      answerLabel: "Cup B's gap after 30 minutes (°C)"
      feedback:
        - ["40", "That's the gap after one step (10 minutes). 30 minutes is 3 steps: multiply by 0.8 three times."]
        - ["120", "50 × 0.8 × 3 multiplies by 3, not by 0.8 three times."]
      criteria:
        - "I wrote both rules from the starting gap and the ratio."
        - "I multiplied by 0.8 three times, not by 3."
        - "My cup B gap is still more than cup A's."
      explain: "0.8³ = 0.512, and 50 × 0.512 = 25.6 °C. Cup B's flask keeps more of its gap."
  - check:
      type: answer
      q: "Cup A's gap after 30 minutes? Use your rule $y = 50(0.5^x)$."
      answer: "6.25"
      feedback:
        - ["25", "That's the gap after one step. 30 minutes is 3 steps: 50 → 25 → 12.5 → 6.25."]
      explain: "0.5³ = 0.125 and 50 × 0.125 = 6.25 °C. Cup A's gap is about a quarter of cup B's."
```

### Cup B after 30 minutes

Back to the two cups. Work this out on paper first, then type your answer.

### Cup A after 30 minutes

**Also used in**

- **Cooling.** Any hot thing in a cool room, a pie or a pan or a drink, has a gap that shrinks the same way. The ratio is different for each.
- **Money.** A savings account that grows by the same percentage each year is $y = a(b^x)$ with $b$ a bit more than 1.
- **Next lessons.** Solving for when the gap reaches a number, which means finding $x$ when it's in the power.
