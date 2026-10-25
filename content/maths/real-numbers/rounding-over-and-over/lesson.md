---
order: 17
unit: approx10
node: AC9M10N01 n3
uses: [AC9M10N01 n1, AC9M10N01 n2]
assumes: [AC9M8N01 n1]
connection: compound-savings
title: Rounding over and over
summary: "Use a slightly wrong rate once and you're a little out. Use it year after year and the error is multiplied each time, so the gap isn't $4 a year: it's $4, then more, then more."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Say your savings grow at 4.6% a year, and round that to 5% in your head. You'll be nearly right. For a while."
---
A saver puts $1000 in an account and leaves it. Each year the bank adds 4.6% of the balance, so the balance is multiplied by 1.046 every year. (The 4.6% is made up; real rates are on the banks' own sites.) She doesn't like working with 1.046, so she plans with 1.05, which is close.

## Predict: ten years on

```step
stage: predict
insight: "Committing to a ten-year gap shows who thinks a $4 error stays $4 a year (adding), and who expects it to be multiplied along with the balance."
check:
  type: predict
  q: "After 1 year the plan with 5% is $4 higher than the real balance. After 10 years, how much higher is it?"
  options:
    - "$61"
    - "$4"
    - "$40"
    - "$400"
  actual: "$61. The real balance is $1000 × 1.046¹⁰ = $1567.89 and the plan is $1000 × 1.05¹⁰ = $1628.89, a gap of $61. It's more than $40 because the extra each year earns extra too."
```

<figure class="situation" role="img" aria-label="Two bars after year 1 side by side. The real balance bar is 1046 dollars and the plan bar is 1050 dollars, 4 dollars higher. Two bars after year 10 are marked with question marks and the gap between them is a question mark."><svg viewBox="0 0 400 220" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><text x="40" y="22" fill="currentColor" stroke="none">After 1 year</text><rect x="40" y="36" width="200" height="22" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="248" y="52" fill="currentColor" stroke="none">real $1046</text><rect x="40" y="66" width="204" height="22" fill="#1D9E75" fill-opacity="0.12" stroke="#0F6E56" stroke-dasharray="5 4"/><text x="252" y="82" fill="currentColor" stroke="none">plan $1050</text><text x="40" y="132" fill="currentColor" stroke="none">After 10 years</text><rect x="40" y="146" width="200" height="22" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="248" y="162" fill="currentColor" stroke="none">real $?</text><rect x="40" y="176" width="200" height="22" fill="#1D9E75" fill-opacity="0.12" stroke="#0F6E56" stroke-dasharray="5 4"/><text x="248" y="192" fill="currentColor" stroke="none">plan $?, gap ?</text></svg></figure>

It's only $4 after the first year. Does it stay that small?

## Run: both balances on a calculator

```step
stage: run
insight: "The balance after ten years is the starting amount times the yearly factor ten times, so the factor is a power."
tasks:
  - check: { type: number, q: "Use a calculator: $1000 \\times 1.046^{10}$, the real balance after 10 years. Give it to the nearest cent.", answer: 1567.89, tolerance: 0.01, explain: "1000 × 1.046¹⁰ = 1567.89." }
  - check: { type: number, q: "Now the plan: $1000 \\times 1.05^{10}$. What is the gap between the two? Was your prediction right?", answer: 61, tolerance: 0.02, explain: "1000 × 1.05¹⁰ = 1628.89, and 1628.89 − 1567.89 = 61." }
```

### The real balance

### The plan, and the gap

Each year the balance is multiplied by the factor again, so ten years is the factor to the power 10.

## Investigate: why the gap grows

```step
stage: investigate
insight: "The yearly factor is used again and again, so a small difference between two factors is multiplied in as well. Jin adds the first year's gap ten times."
tasks:
  - check:
      type: number
      q: "Work out the gap after 5 years: $1000 \\times 1.05^5$ take away $1000 \\times 1.046^5$. Round each balance to the nearest cent first."
      answer: 24.12
      tolerance: 0.02
      explain: "1000 × 1.05⁵ = 1276.28 and 1000 × 1.046⁵ = 1252.16, so the gap is 24.12."
  - check:
      type: bug
      code: "working.txt#jin"
      text: "Jin works out the gap after 10 years from the first year's gap. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: power-times
      explain: "Line 3: the balance is multiplied by the factor each year, not added to. The first year's gap isn't repeated 10 times: the extra each year earns extra too. The gap after 10 years is $61, not $40."
  - check:
      type: question
      q: "Why is the gap after 10 years more than ten times the gap after 1 year?"
      options: ["The extra money from the higher rate also earns the higher rate", "The bank makes mistakes", "Rounding always doubles errors", "The gap isn't more: it's $40"]
      answer: 0
      feedback: [null, "The bank's sums aren't wrong: the two rates are just different.", "Rounding doesn't double errors. Repeated multiplying grows them.", "The gap is $61, which is more than 10 × $4."]
      explain: "With the higher rate each year's balance is bigger, so the next year's extra is bigger too. Differences grow by the same repeated multiplying as the balances."
```

### The gap after 5 years

Here's how the two balances drift. Notice that the gap isn't the same each year.

```worked
1000 \times 1.046 = 1046 :: Real balance after 1 year.
1000 \times 1.05 = 1050 :: Plan after 1 year. The gap is $4.
1000 \times 1.046^5 = 1252.16 :: Real, 5 years.
1000 \times 1.05^5 = 1276.28 :: Plan, 5 years. The gap is $24.12.
1000 \times 1.046^{10} = 1567.89 :: Real, 10 years.
1000 \times 1.05^{10} = 1628.89 :: Plan, 10 years. The gap is $61.
```

Now try one on paper: the gap after 5 years, the same way. Then type it.

### Find the mistake

Read Jin's working. Is the balance added to or multiplied?

### Why does it grow?

## Modify: change the rate

```step
stage: modify
insight: "Changing the rounded rate shows the gap again grows with the years, can go the other way, and gets large over a long time."
tasks:
  - hint: ["Round 4.6% down to 4%, so the factor is 1.04.", "Use $1000 \\times 1.04^{10}$."]
    check: { type: number, q: "Round the rate down to 4%. What does the plan say the balance is after 10 years?", answer: 1480.24, tolerance: 0.01, explain: "1000 × 1.04¹⁰ = 1480.24." }
    smaller:
      check: { type: "number", q: "Just the yearly factor: with a rate of 4%, what do you multiply the balance by each year? Type it as a decimal.", answer: 1.04, explain: "4% more is 100% + 4% = 104%, so × 1.04." }
  - hint: ["The real balance after 10 years is $1567.89.", "Subtract the plan from it."]
    check: { type: number, q: "How many dollars is that plan below the real balance after 10 years?", answer: 87.65, tolerance: 0.02, explain: "1567.89 − 1480.24 = 87.65. Rounding down gives a gap in the other direction, and it's bigger because 4% is further from 4.6% than 5% is." }
  - hint: ["Use 30 years for both rates, 1.05 and 1.046.", "Then subtract."]
    check: { type: number, q: "Edge case: the saver plans with 5% again, but for 30 years. What is the gap now, to the nearest dollar?", answer: 468, tolerance: 1, explain: "1000 × 1.05³⁰ = 4321.94 and 1000 × 1.046³⁰ = 3854.34, so the gap is 467.60, about $468. Three times as long, more than seven times the gap." }
```

### Round down

### How far below

### A long time

## Practise: balances and gaps

```step
stage: practise
insight: "Working out a balance exactly and with a rounded rate, then the gap between them; the review keeps chopping and rounding separate."
tasks:
  - check:
      type: number
      q: "$2000 grows at 3.2% a year. What is the balance after 5 years, to the nearest cent? Use $2000 \\times 1.032^5$."
      answer: 2341.15
      tolerance: 0.01
      explain: "2000 × 1.032⁵ = 2341.15."
  - check:
      type: number
      q: "Someone rounds the rate to 3%. What does $2000 \\times 1.03^5$ give, to the nearest cent?"
      answer: 2318.55
      tolerance: 0.01
      explain: "2000 × 1.03⁵ = 2318.55."
  - check:
      type: number
      q: "How many dollars is the rounded answer away from the exact one, to the nearest cent?"
      answer: 22.6
      tolerance: 0.02
      explain: "2341.15 − 2318.55 = 22.60. This time the rounded rate gives a balance that is too low."
  - check:
      type: question
      q: "Review: a till chops every price to the cent. Compared with rounding, which describes it?"
      options: ["Its errors all go the same way, so they add up", "Its errors go both ways and cancel", "It is always exactly right", "It only affects the cent"]
      answer: 0
      feedback: [null, "That describes rounding.", "A chopped price is lower than the exact one.", "Over many sales it adds up to dollars."]
      explain: "Chopping only ever goes down, so its errors add up."
```

### The exact balance

### With the rounded rate

### The gap

### Review

Chop or round, from the last lesson.

## Make: back to the savings

```step
stage: make
insight: "Coming back to the saver: the gap after 20 years is about $195, far more than 20 times the $4 of year one."
tasks:
  - hint: ["Exact: $1000 \\times 1.046^{20}$.", "Plan: $1000 \\times 1.05^{20}$."]
    check:
      type: reasoning
      paper: true
      q: "A saver plans with 5% when the real rate is 4.6% (both made up). Work out her plan and the real balance on $1000 after 20 years, and how far out she is. Then say how that compares with 20 times the first year's $4."
      steps:
        - ["Real: $1000 \\times 1.046^{20} = \\$2458.29$", "the factor, 20 times"]
        - ["Plan: $1000 \\times 1.05^{20} = \\$2653.30$", "the same, with the rounded rate"]
        - ["Gap: $2653.30 - 2458.29 = \\$195.01$", "plan minus real"]
        - ["$20 \\times 4 = 80$, so the gap is more than twice that", "the first year's gap isn't repeated, it's multiplied in"]
      answer: "195"
      answerLabel: "Gap after 20 years ($)"
      tolerance: 0.5
      feedback:
        - ["80", "That's 20 × $4, which is what you'd get by adding the first year's gap each year."]
        - ["2653.3", "That's the plan's balance. The question asks for the gap."]
      criteria:
        - "I worked out both balances with the same number of years."
        - "I subtracted to find the gap."
        - "I compared the gap with 20 × $4 and saw it is much bigger."
      explain: "The plan says $2653.30, the real balance is $2458.29, so she is $195 out: more than twice 20 × $4."
  - check:
      type: question
      q: "What should the saver do to keep her plan close to the real balance?"
      options: ["Keep the full rate, 1.046, and round only the final balance", "Round the rate to 1 decimal place first", "Round the rate down to be safe", "Use 1 instead, because it's the simplest"]
      answer: 0
      feedback: [null, "1.0 is further from 1.046 than 1.05 is: the gap would be bigger.", "Rounding down is just a different error that also grows.", "A factor of 1 means no growth at all."]
      explain: "Keep the exact factor all the way through and round once, at the end."
```

### The 20 year gap

Back to the saver. Work this out on paper first, then type your answer.

### How to keep it close

The rates and balances are made up. Real savings rates are on the banks' own pages and change often.

**Also used in**

- **Loans and savings.** Compound interest is the same repeated multiplying, so a rounded rate drifts the same way.
- **Next lessons.** Exponential relations, where repeated multiplying is the whole idea.
