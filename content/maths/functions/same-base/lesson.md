---
order: 4
unit: exponentials
node: AC9M10A03 n4
uses: [AC9M8N02 n1]
assumes: [AC9M9A01 n1, AC9M9A01 n2]   # negative powers and the index laws (Year 9)
connection: food-left-out
title: Same base both sides
summary: "To solve an equation with x in the power, write both sides as powers of the same base. Then the bases match, so the indices must match: 2ˣ = 2⁶ means x = 6."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Doubling sneaks up on you. How long until the sandwich crosses the line?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8393
  url: http://127.0.0.1:8393/index.html
  readySelector: "#sl-t"
  layout: full
explainPicture: { ref: graph.yml#explain-pic, caption: "$2^x = 64$: the curve $y = 2^x$ meets the line $y = 64$ at $x = 6$." }
explainClip:
  query: { code: "@graph.yml#explain", fresh: 1, id: explain }
  caption: "Where the curve meets the line is the answer"
  say: "Where the curve meets the line is the answer."
  clip:
    - caption: { text: "y = 2ˣ is the curve. y = t is the target line.", say: "The curve is two to the x, and the line is the target." }
    - wait: 600
    - click: Make t bigger
    - wait: 600
    - caption: { text: "t = 64: they meet at x = 6.", say: "With the target at sixty-four, they meet at x equals six." }
    - wait: 1200
---
Back to the sandwich from the first lesson. It starts with 100 germs, and they double every half hour. Say it's time to worry once there are 6,400 germs. (Both numbers are made up, like the doubling. The real rule comes from food-safety research: [the 2-hour/4-hour rule, NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf).)

How long does it take to get there?

## Predict: how many doublings?

```step
stage: predict
insight: "Committing to how many doublings take 1 to 64 shows who divides by the base (x = 32), who subtracts (62) and who swaps base and power (8, from 8² = 64)."
check:
  type: predict
  q: "A number starts at 1 and doubles $x$ times to reach 64, so $2^x = 64$. What is $x$?"
  options:
    - "$x = 6$"
    - "$x = 32$"
    - "$x = 8$"
    - "$x = 62$"
  actual: "x = 6. Doubling from 1: 2, 4, 8, 16, 32, 64. That is 6 doublings, and 2⁶ = 64. Dividing 64 by 2 (32) or taking 2 away (62) doesn't count the doublings."
```

<figure class="situation" role="img" aria-label="A row of boxes: 1, 2, 4, 8, then dots, then 64. An arrow marked times 2 joins each box to the next. Underneath, a line from the first box to the last is marked: how many doublings?"><svg viewBox="0 0 480 150" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="15"><g stroke="#0F6E56" fill="#1D9E75" fill-opacity="0.25"><rect x="10" y="30" width="50" height="40" rx="4"/><rect x="100" y="30" width="50" height="40" rx="4"/><rect x="190" y="30" width="50" height="40" rx="4"/><rect x="280" y="30" width="50" height="40" rx="4"/><rect x="420" y="30" width="50" height="40" rx="4"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="35" y="56">1</text><text x="125" y="56">2</text><text x="215" y="56">4</text><text x="305" y="56">8</text><text x="395" y="56" font-size="22">…</text><text x="445" y="56">64</text><text x="80" y="24" font-size="12">×2</text><text x="170" y="24" font-size="12">×2</text><text x="260" y="24" font-size="12">×2</text><text x="240" y="130">? doublings</text></g><g><line x1="62" y1="50" x2="98" y2="50"/><line x1="152" y1="50" x2="188" y2="50"/><line x1="242" y1="50" x2="278" y2="50"/><line x1="35" y1="92" x2="445" y2="92"/><line x1="35" y1="84" x2="35" y2="100"/><line x1="445" y1="84" x2="445" y2="100"/></g></svg></figure>

Each arrow doubles the number before it. Make a guess before you check.

## Run: where the curve meets the line

```step
stage: run
insight: "Solving 2^x = t is finding where the curve y = 2^x meets the line y = t: the x of the meeting point is the number of doublings."
try: { playground: board, starter: "graph.yml#run", height: 640 }
check: { type: board, text: "Set $t$ to 64. Where do the curve and the line meet? Was your prediction right?", when: "t = 64" }
```

The curve is $y = 2^x$ and the line is $y = t$. Slide $t$ and read the $x$ where they meet. Try a $t$ that isn't a power of 2, like 24: the answer isn't a whole number.

## Investigate: same base

```step
stage: investigate
insight: "When both sides can be written as powers of the same base, the indices must match. The base is not multiplying x, so you can't divide by it: Eli divides 81 by 3."
tasks:
  - check:
      type: answer
      q: "Solve $4^x = 32$. Write both sides as powers of 2."
      answer: "2.5"
      feedback:
        - ["8", "8 is 32 ÷ 4. But 4 isn't multiplying x: 4^x means 4 multiplied x times."]
        - ["5", "2⁵ = 32, but the base here is 4, not 2. Write 4 as 2² first."]
      explain: "4 = 2², so 4^x = (2²)^x = 2^(2x). And 32 = 2⁵. So 2x = 5 and x = 2.5. Check: 4² = 16 and 4³ = 64, and 32 is between them."
  - check:
      type: bug
      code: "working.txt#eli"
      text: "Eli solves $3^x = 81$. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: exp-divide-by-base
      explain: "Line 2: in 3^x the 3 isn't multiplying x, so dividing by 3 doesn't undo anything. Write 81 as a power of 3: 81 = 3⁴, so 3^x = 3⁴ and x = 4. (3²⁷ would be a huge number.)"
  - check:
      type: question
      q: "To solve $25^x = 125$, you write both sides as powers of which number?"
      options: ["$5$, because $25 = 5^2$ and $125 = 5^3$", "$25$, because 25 is in the equation", "$125$, because it's the biggest", "No number works"]
      answer: 0
      feedback: [null, "125 isn't a whole number power of 25. Look for a smaller number that makes both.", "25 isn't a whole number power of 125. Look for a smaller number that makes both.", "Both are powers of 5: 5² and 5³."]
      explain: "25 = 5² and 125 = 5³, so (5²)^x = 5³, 5^(2x) = 5³, 2x = 3 and x = 1.5."
```

### Same base

Here's how to solve one when the two sides aren't powers of each other.

```worked
8^x = 32 :: Solve for x. Neither side is a power of the other, but both are powers of 2.
8 = 2^3,\; 32 = 2^5 :: Write each side with the same base, 2.
(2^3)^x = 2^5 :: Put them in the equation.
2^{3x} = 2^5 :: A power of a power: multiply the indices.
3x = 5 :: The bases match, so the indices must match.
x = \tfrac{5}{3} :: Divide both sides by 3.
8^1 = 8 \text{ and } 8^2 = 64 :: Check it's sensible: 32 is between 8 and 64, so x should be between 1 and 2. 5/3 is about 1.67. ✓
```

Now try one on paper like the example: $4^x = 32$. Write both sides as powers of 2, then type $x$.

### Find the mistake

Read Eli's working. Is the 3 multiplying $x$?

### Which base?

## Modify: tricky cases

```step
stage: modify
insight: "One change at a time: a bigger base read on the board, x = 0, a negative x for a fraction, and a base that isn't the same as either side."
try: { playground: board, starter: "graph.yml#vary", height: 640 }
tasks:
  - hint: ["Set $b$ to 3 and $t$ to 243. Read where the curve meets the line.", "Or count: 3, 9, 27, 81, 243."]
    check: { type: answer, q: "Solve $3^x = 243$. Check it on the board.", answer: "5", feedback: [["81", "81 is 3⁴. Count one more: 3⁵ = 243."], ["80", "That's 243 ÷ 3. The 3 isn't multiplying x: count the 3s that multiply to make 243."]], explain: "3, 9, 27, 81, 243: five 3s, so x = 5." }
  - hint: "What power of 7 gives 1?"
    check: { type: answer, q: "Edge case: solve $7^x = 1$.", answer: "0", feedback: [["1", "7¹ = 7, not 1. Any number to the power 0 is 1."], ["7", "7 is 7¹. For 1 you need a power that makes it 1."]], explain: "x = 0, because any number to the power 0 is 1." }
  - hint: ["$\\tfrac{1}{25}$ is smaller than 1, so the power is negative.", "$5^{-2} = \\tfrac{1}{5^2}$."]
    check: { type: answer, q: "Edge case: solve $5^x = \\tfrac{1}{25}$.", answer: "-2", feedback: [["2", "5² = 25, not 1/25. A fraction like 1/25 needs a negative power: 5⁻² = 1/5² = 1/25."], ["25", "25 is what 5² makes. 1/25 needs a negative index."]], explain: "1/25 = 1/5² = 5⁻², so x = −2." }
  - hint: ["Write 9 as a power of 3, and 27 as a power of 3.", "$9^x = (3^2)^x = 3^{2x}$ and $27 = 3^3$."]
    check: { type: answer, q: "Solve $9^x = 27$.", answer: "1.5", feedback: [["3", "9³ = 729, not 27. Write both as powers of 3: 3^(2x) = 3³."], ["18", "18 is 27 − 9. The indices must match, not the numbers."]], explain: "9^x = 3^(2x) and 27 = 3³, so 2x = 3 and x = 1.5." }
```

### Count the 3s

Set the board, then read where the curve meets the line.

### Power zero

### A fraction

### Rewrite both

## Practise: solve it

```step
stage: practise
insight: "Same-base equations, one that needs both sides rewritten, one with a number in front, and (review) the base read from two points."
tasks:
  - check:
      type: answer
      q: "Solve $2^x = 128$."
      answer: "7"
      feedback:
        - ["64", "64 is 128 ÷ 2. The 2 isn't multiplying x: count the doublings, 2, 4, 8, ..."]
        - ["6", "2⁶ = 64. One more doubling reaches 128."]
      explain: "128 = 2⁷, so x = 7."
  - check:
      type: answer
      q: "Solve $4^x = 128$. Write both sides as powers of 2."
      answer: "3.5"
      feedback:
        - ["7", "2⁷ = 128, but the base here is 4. Write 4 as 2² first."]
        - ["32", "128 ÷ 4 = 32, but x isn't being multiplied by 4."]
      explain: "4 = 2², so 4^x = 2^(2x) and 128 = 2⁷. So 2x = 7 and x = 3.5."
    smaller:
      check: { type: "number", q: "Just the rewrite: $4 = 2^{?}$. What is the power?", answer: 2, explain: "2 × 2 = 4, so 4 = 2²." }
  - check:
      type: answer
      q: "Solve $5(2^x) = 80$."
      answer: "4"
      feedback:
        - ["8", "80 ÷ 5 = 16, and then 2^x = 16. You can't divide by 2 again: count the doublings to 16."]
        - ["16", "16 is what 2^x has to equal. Now find x."]
      explain: "Divide both sides by 5: 2^x = 16. And 16 = 2⁴, so x = 4."
  - check:
      type: answer
      q: "Review: a graph goes through $(0, 5)$ and $(1, 10)$. What is $b$ in $y = a(b^x)$?"
      answer: "2"
      feedback:
        - ["5", "5 is a, where it starts. b is what you multiply by: 10 ÷ 5."]
      explain: "b = 10 ÷ 5 = 2. a = 5, so y = 5(2^x)."
```

### Count the doublings

### Rewrite 4

### A number in front

### Review

Reading $b$, from the last lesson.

## Make: back to the sandwich

```step
stage: make
insight: "Coming back to the sandwich: the germ count is 100(2^x), and solving it for the target gives the time. The same method answers a different target."
tasks:
  - hint: ["The count is 100 × 2^x after x half-hours.", "Divide both sides by 100 first."]
    check:
      type: reasoning
      paper: true
      q: "The sandwich starts with 100 germs and they double every half hour. After how many hours are there 6,400 germs? (All made-up numbers.)"
      steps:
        - ["$100(2^x) = 6400$", "x is the number of half-hours"]
        - ["$2^x = 64$", "divide both sides by 100"]
        - ["$2^x = 2^6$, so $x = 6$", "64 = 2⁶: the bases match, so the indices match"]
        - ["$6 \\times \\tfrac{1}{2} = 3$ hours", "each x is half an hour"]
      picks:
        - step: 2
          q: "Why divide both sides by 100 before doing anything else?"
          options: ["The 100 multiplies the power, so dividing leaves 2^x on its own", "To make the numbers smaller", "Because 100 is the base"]
          answer: 0
          feedback: [null, "It makes them smaller, but that's not the reason. We need 2^x alone to compare bases.", "The base is 2, the number with x in its power. 100 is the starting count."]
      answer: "3"
      answerLabel: "Time (hours)"
      feedback:
        - ["6", "6 is the number of half-hours. The question asks for hours: each half-hour is 0.5 of an hour."]
        - ["32", "That's 64 ÷ 2. The 2 isn't multiplying x."]
      criteria:
        - "I divided by 100 first to get 2^x on its own."
        - "I wrote 64 as a power of 2 and matched the indices."
        - "I changed half-hours to hours at the end."
      explain: "2^x = 64 = 2⁶, so x = 6 half-hours, which is 3 hours."
  - check:
      type: answer
      q: "The same sandwich: after how many hours would there be 25,600 germs?"
      answer: "4"
      feedback:
        - ["8", "8 is the number of half-hours. How many hours is that?"]
      explain: "100(2^x) = 25,600 gives 2^x = 256 = 2⁸, so x = 8 half-hours: 4 hours. That's the 4-hour mark from the first lesson."
```

### Time to 6,400

Back to the sandwich. Work this out on paper first, then type your answer.

### Time to 25,600

Sources: the 2-hour/4-hour rule is from [NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf). The 100 germs, the doubling every half hour and 6,400 as the worry point are made up for this lesson.

**Also used in**

- **Doubling money.** How long until savings double, if they grow by the same share each year? The unknown is in the power.
- **Cells and yeast.** A population that doubles on a schedule can be solved the same way for when it reaches a size.
- **Next lessons.** Choosing between a straight-line model and an exponential one, and writing the model from the situation.
