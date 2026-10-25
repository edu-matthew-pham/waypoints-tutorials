---
order: 6
unit: models10
node: AC9M10A04 n2
uses: [AC9M10A03 n1, AC9M10A03 n3]   # a constant ratio; y = a(bˣ) read from a graph
assumes: [AC9M10A03 n4]   # same base both sides, for the doubling time in Make
connection: compound-savings
title: Writing the model
summary: "A rate of r% a year multiplies by 1 + r/100 each year. Write A = a(bⁿ) with the starting amount a and the growth or decay factor b, then use it to answer a question in dollars."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A savings account says '5% interest a year'. What does 5% a year really do to $1,000?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8387
  url: http://127.0.0.1:8387/index.html
  readySelector: "#sl-r"
  layout: full
explainPicture: { ref: savings.yml#explain-pic, caption: "Both start at $1,000 and gain $50 in the first year. The solid curve earns 5% on the new balance each year; the dashed line adds the same $50 every year." }
explainClip:
  query: { code: "@savings.yml#explain", fresh: 1, id: explain }
  caption: "A rate each year multiplies, not adds"
  say: "A rate each year multiplies, not adds."
  clip:
    - caption: { text: "The dashed line adds the same dollars every year.", say: "The dashed line adds the same dollars every year." }
    - wait: 600
    - click: Make r bigger
    - wait: 600
    - caption: { text: "The solid curve earns on what it has already earned.", say: "The solid curve earns on what it has already earned." }
    - wait: 600
    - caption: { text: "A higher rate pulls the curve away faster.", say: "A higher rate pulls the curve away faster." }
    - wait: 1200
---
You put $1,000 in a savings account. The account adds interest once a year, and the next year's interest is worked out on the new balance. The rate is made up for this lesson: real rates change, and accounts have fees and tax.

## Predict: after two years

```step
stage: predict
insight: "Committing to the balance after two years shows who adds $50 twice (1,100) and who sees that the second year's 5% is worked out on 1,050."
check:
  type: predict
  q: "After 1 year, $1,000 at 5% a year is worth $1,050. How much is it worth after 2 years?"
  options:
    - "$1{,}100$"
    - "$1{,}102.50$"
    - "$1{,}050$"
    - "$1{,}125$"
  actual: "$1,102.50. The second year's interest is 5% of 1,050, which is 52.50, not 50. So the balance is 1,050 × 1.05 = 1,102.50. Adding 50 twice would give 1,100."
```

<figure class="situation" role="img" aria-label="Three bars of a savings balance: 1,000 at the start, 1,050 after 1 year and a question mark after 2 years. An arrow from the first bar to the second is labelled 5%."><svg viewBox="0 0 480 220" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="190" x2="470" y2="190"/><rect x="40" y="80" width="60" height="110" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="170" y="74" width="60" height="116" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><path d="M104 70 Q135 40 166 66" stroke="#0F6E56"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="70" y="74">1,000</text><text x="200" y="68">1,050</text><text x="135" y="40">5%</text><text x="70" y="208">start</text><text x="200" y="208">1 year</text><text x="330" y="140" font-size="28">?</text><text x="330" y="208">2 years</text></g></svg></figure>

The bars show the balance for the first year. Make a guess before you check.

## Run: a rate each year

```step
stage: run
insight: "A rate of r% a year multiplies the balance by 1 + r/100 each year, so it earns on what it has already earned. The dashed line earns the same dollars every year."
try: { playground: board, starter: "savings.yml#run", height: 640 }
check: { type: board, text: "Set $r$ to 5, so the account pays 5% a year. Read the table after 2 years and after 10 years. Does the 2-year value match your prediction?", when: "r = 5" }
```

The solid curve multiplies the balance by $1 + r/100$ each year. The dashed line adds the same dollars every year. The chart runs out of room, so read the big numbers from the table.

## Investigate: the growth factor

```step
stage: investigate
insight: "5% a year is a factor of 1.05, not 0.05: the old balance stays, and 5% of it is added. A decay of 8% a year is a factor of 0.92. Maya multiplies by the rate alone."
tasks:
  - check:
      type: answer
      q: "An account grows by $6\\%$ a year. What do you multiply the balance by each year?"
      answer: "1.06"
      feedback:
        - ["0.06", "0.06 is 6% on its own. You keep the whole balance and add 6% of it: 1 + 0.06."]
        - ["6", "6 would multiply the balance by 6. 6% is 0.06 of the balance."]
      explain: "The whole balance stays (1) and 6% of it is added (0.06): 1.06."
  - check:
      type: bug
      code: "working.txt#maya"
      text: "Maya writes the model for $1,000 at 5% a year. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: growth-factor-is-rate
      explain: "Line 2: multiplying by 0.05 keeps only 5% of the balance. To grow by 5% you keep all of it and add 5% more: multiply by 1.05."
  - check:
      type: question
      q: "A car loses $8\\%$ of its value each year. What do you multiply its value by each year?"
      options: ["0.92", "0.08", "1.08", "8"]
      answer: 0
      feedback: [null, "0.08 keeps only 8% of the value. A car keeps 92%.", "1.08 would make the value grow by 8%.", "8 multiplies the value by 8."]
      explain: "It keeps 100% − 8% = 92% of its value: 0.92."
```

### Rate to factor

Here's how to write the model from the words.

```worked
\$2000 \text{ at } 3\% \text{ a year} :: Write the balance after n years.
a = 2000 :: The starting amount.
b = 1 + 0.03 = 1.03 :: Keep the balance and add 3% of it.
A = 2000(1.03^n) :: Starting amount times the factor, n times.
A = 2000(1.03^5) :: After 5 years.
A = 2318.55 :: Rounded to the cent. Always put the unit: dollars.
```

Now try one on paper: $500$ at $4\%$ a year. Find the balance after 2 years, in dollars.

### Find the mistake

Read Maya's working. What does 5% a year do to the balance?

### A falling value

Think about what is kept.

## Modify: change the rate

```step
stage: modify
insight: "One change at a time: a longer wait, a falling value and a rate of 0."
try: { playground: board, starter: "savings.yml#vary", height: 640 }
tasks:
  - hint: ["Set $r$ to 7. Look down the table for the first value over 2,000.", "Year 10 gives 1,967; try year 11."]
    check: { type: answer, q: "Set $r$ to 7. In which year does the balance first pass $2,000$? (The table has some years; work out the ones in between.)", answer: "11", feedback: [["10", "At year 10 the balance is 1,967, just under 2,000. Try the next year."], ["20", "20 is the end of the table, not the first year over 2,000. Look at years 9 to 12."]], explain: "1,000 × 1.07¹⁰ = 1,967 and 1,000 × 1.07¹¹ = 2,105, so year 11 is the first." }
  - hint: ["The factor for losing 15% is 0.85.", "$20000 \\times 0.85 \\times 0.85$."]
    check: { type: answer, q: "A car worth $20,000$ loses 15% of its value each year. What is it worth after 2 years, in dollars?", answer: "14450", feedback: [["14000", "That takes off 15% of 20,000 twice. Each year takes 15% of the new value: multiply by 0.85 twice."], ["17000", "That's the value after 1 year. Multiply by 0.85 again."]], explain: "20,000 × 0.85 = 17,000 and 17,000 × 0.85 = 14,450." }
  - hint: "Set $r$ to 0 and look at the table."
    check:
      type: question
      q: "Edge case: set $r$ to 0. The account pays 0% a year. What is the growth factor, and what happens to the balance?"
      options: ["The factor is 1 and the balance stays at $1,000", "The factor is 0 and the balance is $0", "The factor is 0 and the balance stays at $1,000"]
      answer: 0
      feedback: [null, "A factor of 0 would wipe out the balance. 0% adds nothing: 1 + 0 = 1.", "The factor is 1 + 0 = 1, not 0."]
      explain: "1 + 0/100 = 1, and multiplying by 1 changes nothing."
```

### Waiting for 2,000

### A car

### A rate of 0

## Practise: write the model

```step
stage: practise
insight: "Turning a rate into a factor, writing and using A = a(bⁿ), and (review) solving with the same base."
tasks:
  - check:
      type: answer
      q: "An account grows by $9\\%$ a year. What is the growth factor?"
      answer: "1.09"
      feedback:
        - ["0.09", "0.09 is 9% on its own. Keep the whole balance and add 9%: 1 + 0.09."]
      explain: "1 + 0.09 = 1.09."
    smaller:
      check: { type: number, q: "Just the decimal: what is $9\\%$ as a decimal?", answer: 0.09, explain: "9% = 9 ÷ 100 = 0.09. Now add it to 1." }
  - check:
      type: answer
      q: "$200$ is invested at $10\\%$ a year. What is the balance after 2 years, in dollars?"
      answer: "242"
      feedback:
        - ["240", "That adds 10% of 200 twice. The second year's 10% is of the new balance: 200 × 1.1 × 1.1."]
      explain: "200 × 1.1 = 220 and 220 × 1.1 = 242."
  - check:
      type: answer
      q: "A model is $A = 3000(1.02^n)$. What is the starting amount, in dollars?"
      answer: "3000"
      feedback:
        - ["1.02", "1.02 is the growth factor. The starting amount is the number in front, where n = 0."]
      explain: "At n = 0 the power is 1, so A = 3000."
  - check:
      type: number
      q: "Review: solve $3^x = 81$. What is $x$?"
      answer: 4
      explain: "81 = 3⁴, so x = 4."
```

### The growth factor

### Two years

### The starting amount

### Review

From the last unit: solving with the same base.

## Make: back to the savings

```step
stage: make
insight: "Coming back to the savings: the compounding balance beats the same dollars added each year, and the gap grows."
tasks:
  - hint: ["Simple interest adds $50 each year for 10 years.", "Compound: $1000 \\times 1.05^{10}$."]
    check:
      type: reasoning
      paper: true
      q: "$1,000$ at 5% a year for 10 years. The dashed line adds $50 every year. By how many dollars does the compounding balance beat it? Round to the cent."
      steps:
        - ["$1000 \\times 1.05^{10} = 1628.89$", "the compounding balance"]
        - ["$1000 + 50 \\times 10 = 1500$", "the same dollars each year"]
        - ["$1628.89 - 1500 = 128.89$", "how much more"]
      answer: "128.89"
      answerLabel: "Dollars more"
      tolerance: 0.01
      feedback:
        - ["1628.89", "That's the compounding balance. Subtract the 1,500."]
        - ["500", "That's the 50 a year added up: 1,500 − 1,000. Compare the two final balances."]
      criteria:
        - "I worked out both balances."
        - "I used 1.05, not 0.05, as the factor."
        - "I subtracted in the right order and gave dollars."
      explain: "1,628.89 − 1,500 = 128.89. The extra comes from earning interest on interest."
  - check:
      type: question
      q: "A friend says: 'The model A = 1000(1.05ⁿ) says my money grows forever.' What would you say?"
      options: ["It's a model with made-up rates: real rates change, and there are fees and tax", "It's exactly right: rates never change", "It's wrong because the balance can't grow", "It's wrong because n must be 0"]
      answer: 0
      feedback: [null, "Rates change, and accounts have fees and tax. The model assumes one fixed rate.", "The balance does grow in the model.", "n is the number of years and can be any number of years."]
      explain: "The model holds one rate for every year. Real accounts change the rate and may charge fees and tax."
```

### Compound against simple

Back to the savings. Work this out on paper first, then type your answer.

### How much to trust it

The rate and the $1,000$ are made up. The shape is the point: a rate each year multiplies, so the last years add the most.

Sources: the $1,000$ and the 5% a year are made up for this lesson and are not an offer. Your class can check real figures with a savings calculator, such as [MoneySmart's compound interest calculator](https://moneysmart.gov.au/saving/compound-interest-calculator) (ASIC); it also shows the effect of fees and tax.

**Also used in**

- **Money.** Loans grow the same way when interest is added to what is owed.
- **Science.** A population growing 3% a year, or a drug leaving the body at 12% an hour, uses the same model.
- **Next lesson.** Two models at once: when does one overtake the other?
