---
order: 5
unit: models10
node: AC9M10A04 n1
uses: [AC9M10A03 n1, AC9M9A05 n1]   # a constant ratio; choosing a line or a quadratic by differences (Year 9)
connection: car-value
title: Which model?
summary: "Look at a table and decide: equal differences mean a line, equal second differences mean a quadratic, an equal ratio means an exponential. Then say which pattern you found."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Used cars get cheaper every year. How cheap, by how old?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8386
  url: http://127.0.0.1:8386/index.html
  readySelector: "#sl-m"
  layout: full
explainPicture: { ref: model.yml#explain-pic, caption: "The dots are the prices. The dashed line drops the same dollars each year and misses them. The solid curve takes 20% off each year and passes through all five." }
explainClip:
  query: { code: "@model.yml#explain", fresh: 1, id: explain }
  caption: "Two models, one set of prices"
  say: "Two models, one set of prices."
  clip:
    - caption: { text: "The dots are the prices. The dashed line takes off the same dollars each year.", say: "The dots are the prices. The dashed line takes off the same dollars every year." }
    - wait: 600
    - click: Make b smaller
    - wait: 600
    - caption: { text: "The solid curve takes off the same share each year.", say: "The solid curve takes off the same share each year." }
    - wait: 600
    - caption: { text: "Only one of them goes through every dot.", say: "Only one of them goes through every dot." }
    - wait: 1200
---
A dealer lists the same model of car at different ages. The prices below are made up for this lesson. Real prices also depend on kilometres and condition.

| Age (years) | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Price ($) | 30,000 | 24,000 | 19,200 | 15,360 |

## Predict: the 4-year-old car

```step
stage: predict
insight: "Committing to the next price shows who repeats the last drop in dollars (11,520) and who sees the price falling by the same share each year (12,288)."
check:
  type: predict
  q: "The same model is for sale at 0, 1, 2 and 3 years old for the prices above. What would you expect a 4-year-old one to cost?"
  options:
    - "$12{,}288"
    - "$11{,}520"
    - "$12{,}000"
    - "$9{,}000"
  actual: "12,288. The drops are 6,000, then 4,800, then 3,840: they get smaller. Each price is 0.8 times the one before (24,000 ÷ 30,000 = 0.8, 19,200 ÷ 24,000 = 0.8), so 15,360 × 0.8 = 12,288. Taking off 3,840 again would give 11,520, which is a line's answer."
```

<figure class="situation" role="img" aria-label="Four bars of car price: 30,000 at new, 24,000 at 1 year, 19,200 at 2 years and 15,360 at 3 years. Each bar is lower than the one before. After a gap, a question mark marks the price at 4 years."><svg viewBox="0 0 480 220" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="190" x2="470" y2="190"/><rect x="20" y="30" width="40" height="160" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="90" y="62" width="40" height="128" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="160" y="87" width="40" height="103" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="230" y="108" width="40" height="82" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="24">30,000</text><text x="110" y="56">24,000</text><text x="180" y="81">19,200</text><text x="250" y="102">15,360</text><text x="40" y="208">new</text><text x="110" y="208">1 yr</text><text x="180" y="208">2 yr</text><text x="250" y="208">3 yr</text><text x="330" y="150" font-size="28">?</text><text x="330" y="208">4 yr</text></g></svg></figure>

The bars show the prices from new to 3 years old. Make a guess before you check.

## Run: line or curve

```step
stage: run
insight: "A straight-line model drops the same dollars every year; an exponential model drops the same share every year. Only one of them goes through all the dots."
try: { playground: board, starter: "model.yml#run", height: 640 }
check: { type: board, text: "The dots are the prices. Set $b$ to 0.8 so the solid curve passes through them. Read the table at 4 years. Does it match your prediction?", when: "b = 0.8" }
```

The solid curve multiplies the price by $b$ each year. The dashed line takes the same dollars off each year, set by $m$. Try to get the dashed line through all five dots too.

## Investigate: differences or ratios

```step
stage: investigate
insight: "Three tests sort a table: equal first differences (a line), equal second differences (a quadratic) and an equal ratio (an exponential). Dev sees the price falling and calls it a line without testing."
tasks:
  - check:
      type: answer
      q: "Look at $64, 48, 36, 27$. What do you multiply by to get from each value to the next?"
      answer: "0.75"
      feedback:
        - ["-16", "That's 48 − 64, how far it falls. The ratio is what you multiply by: 48 ÷ 64."]
        - ["0.25", "That's the share it drops by. Multiply by 0.75 to keep the other 75%."]
      explain: "48 ÷ 64 = 0.75, 36 ÷ 48 = 0.75 and 27 ÷ 36 = 0.75. Each value is 0.75 times the one before."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev looks at the car prices. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: decay-means-linear
      explain: "Line 2: falling every year doesn't make a table linear. A line drops the same dollars each time. These drops are 6,000, 4,800 and 3,840, so they aren't the same. The ratio is 0.8 every time, so it's exponential, and the table was right."
  - check:
      type: question
      q: "Which table is exponential?"
      options: ["$100, 90, 80, 70$", "$100, 90, 81, 72.9$", "$100, 90, 70, 40$"]
      answer: 1
      feedback: ["That takes off 10 every time. It's linear.", null, "The drops are 10, 20, 30: the second differences are equal (10), so it's a quadratic."]
      explain: "100, 90, 81, 72.9: each value is 0.9 times the one before."
```

### Multiply by what?

There are three tests, and you try them in order.

```worked
10,\; 12,\; 14.4,\; 17.28 :: Which model fits this table?
2,\; 2.4,\; 2.88 :: First differences. They aren't equal, so it isn't a line.
0.4,\; 0.48 :: Second differences. They aren't equal either, so it isn't a quadratic.
12 \div 10,\; 14.4 \div 12,\; 17.28 \div 14.4 :: Ratios.
1.2,\; 1.2,\; 1.2 :: The same every time.
\text{exponential, ratio } 1.2 :: Equal ratios mean exponential. Each value is 1.2 times the one before.
```

Now try one on paper: $64, 48, 36, 27$. Find the ratio, then type it.

### Find the mistake

Read Dev's working. Which line decides without testing?

### Which table?

Look for the same ratio.

## Modify: change the car

```step
stage: modify
insight: "A model can be tested against more data. A line can run below zero where the price can't, while an exponential falls but never reaches it."
try: { playground: board, starter: "model.yml#vary", height: 640 }
tasks:
  - hint: ["Set $b$ to 0.7 and read the table at 2 years ($x = 2$).", "$30000 \\times 0.7 \\times 0.7$."]
    check: { type: answer, q: "A different car loses 30% of its price each year, so $b = 0.7$. Starting from $30,000$, what is its price at 2 years?", answer: "14700", feedback: [["21000", "That's the price after 1 year. Multiply by 0.7 again."], ["12000", "That takes 30% off twice from the start in dollars. Multiply by 0.7 twice instead."]], explain: "30,000 × 0.7 = 21,000, and 21,000 × 0.7 = 14,700." }
  - hint: ["Put 7 into the dashed line's rule.", "$30000 - 4800 \\times 7$."]
    check: { type: answer, q: "The dashed line is $y = 30000 - 4800x$. What does it give at 7 years?", answer: "-3600", feedback: [["3600", "30,000 − 33,600 is below zero. Keep the minus sign."], ["26400", "That's 30,000 − 3,600. The rule takes off 4,800 for each year, so 7 years takes off 33,600."]], explain: "4,800 × 7 = 33,600, and 30,000 − 33,600 = −3,600." }
  - hint: "Slide $b$ to 1 and watch the table."
    check:
      type: question
      q: "Edge case: set $b$ to 1. What are the difference and the ratio between neighbouring prices?"
      options: ["The difference is 0 and the ratio is 1: the price never changes", "The difference is 1 and the ratio is 0", "The price drops to 0"]
      answer: 0
      feedback: [null, "Swapped: nothing is taken off, and multiplying by 1 changes nothing.", "A ratio of 1 keeps the price at 30,000."]
      explain: "Multiplying by 1 changes nothing, so the table is flat. It is both a line (difference 0) and an exponential (ratio 1)."
```

### Another car

Each task changes the board or the rule. Answer from the table.

### Below zero

### A ratio of 1

## Practise: choose the model

```step
stage: practise
insight: "Testing a table for a line, a quadratic and an exponential in order, and (review) solving an equation with x in the power."
tasks:
  - check:
      type: question
      q: "A table gives $6, 9, 13.5, 20.25$. Which model fits?"
      options: ["Exponential: each value is 1.5 times the one before", "Linear: the differences are equal", "Quadratic: the second differences are equal", "None of them"]
      answer: 0
      feedback: [null, "The differences are 3, 4.5, 6.75: not equal.", "The first differences are 3, 4.5, 6.75 and the second differences are 1.5, 2.25: not equal.", "The ratio is 1.5 every time."]
      explain: "9 ÷ 6 = 1.5, 13.5 ÷ 9 = 1.5 and 20.25 ÷ 13.5 = 1.5."
    smaller:
      check: { type: number, q: "Just one step: how many times bigger is 9 than 6?", answer: 1.5, explain: "9 ÷ 6 = 1.5. Check it against 13.5 ÷ 9." }
  - check:
      type: question
      q: "A table gives $3, 7, 13, 21$. Which model fits?"
      options: ["Quadratic: the second differences are both 2", "Linear: the differences are equal", "Exponential: the ratios are equal", "None of them"]
      answer: 0
      feedback: [null, "The differences are 4, 6, 8: not equal.", "The ratios are 2.33, 1.86 and 1.62: not equal.", "The second differences are 2 and 2, so a quadratic fits exactly."]
      explain: "First differences 4, 6, 8. Second differences 2, 2."
  - check:
      type: question
      q: "A table gives $50, 45, 40, 35$. Which model fits?"
      options: ["Linear: it takes off 5 every time", "Exponential: it falls every time", "Quadratic: it falls every time", "None of them"]
      answer: 0
      feedback: [null, "Falling isn't enough. The ratios are 0.9, 0.89, 0.875: not equal.", "The second differences are 0: the first differences are already equal.", "A line fits exactly."]
      explain: "The differences are −5, −5, −5. Equal differences mean a line."
  - check:
      type: number
      q: "Review: solve $2^x = 32$. What is $x$?"
      answer: 5
      explain: "32 = 2⁵, so the bases match and x = 5."
```

### A multiplying table

### A second difference

### A falling line

### Review

From the last unit: solving with the same base.

## Make: back to the car

```step
stage: make
insight: "Coming back to the car: the line through the first two prices misses the 4-year-old car by thousands, which is why checking the pattern matters."
tasks:
  - hint: ["A line through the first two prices drops 6,000 each year.", "The exponential model gives 12,288 at 4 years."]
    check:
      type: reasoning
      paper: true
      q: "A line through the first two prices ($30,000$ and $24,000$) drops $6,000$ each year. The exponential model says a 4-year-old car costs $12,288$. How many dollars lower is the line's price at 4 years?"
      steps:
        - ["$30000 - 6000 \\times 4 = 6000$", "what the line says at 4 years"]
        - ["$12288 - 6000 = 6288$", "the exponential price minus the line's price"]
        - ["$6288", "the line's price is $6,288 lower"]
      answer: "6288"
      answerLabel: "Dollars lower"
      tolerance: 0.5
      feedback:
        - ["6000", "That's the line's price at 4 years. Subtract it from 12,288."]
        - ["12288", "That's the exponential price. Find how far the line's price is below it."]
      criteria:
        - "I worked out the line's price at 4 years first."
        - "I subtracted in the right order."
        - "I gave the answer in dollars."
      explain: "The line says 6,000 and the exponential model says 12,288. The difference is 6,288."
  - check:
      type: question
      q: "A buyer fits a model to five prices from a dealer's site. What else would you want to check before trusting it for every car of that model?"
      options: ["The kilometres and condition: the model only uses age, and they also change a price", "Nothing: a model that fits five prices is exact", "That the table only has whole numbers", "That the graph goes through (0, 0)"]
      answer: 0
      feedback: [null, "A model that fits some prices isn't exact. Other things change the price too.", "Whole numbers aren't the point; the pattern is.", "A price is not 0 when the car is new."]
      explain: "The model uses only age. Kilometres and condition also change a price, so test it against more listings."
```

### How far out?

Back to the car. Work it out on paper first, then type your answer.

### What else changes the price?

The prices here are made up, and so is the 20% a year. Real listings differ in kilometres and condition. Your class can pick a model on a car-sales site, write down the prices at five ages and test them in the same three ways.

Sources: all prices and the 20% a year are made up for this lesson.

**Also used in**

- **Money.** Phones, laptops and bikes lose value by a share each year, not by the same dollars.
- **Science.** A table of measurements can be tested the same way: equal differences, equal second differences or an equal ratio.
- **Next lesson.** Writing the rule for an exponential, then using it to answer a question in dollars.
