---
title: "Rounding over and over"
subtitle: "Irrational numbers and index laws · Year 10: approximation · Lesson 17"
---

# Rounding over and over

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Say your savings grow at 4.6% a year, and round that to 5% in your head. You'll be nearly right. For a while.


:::teacher-note

**In one sentence:** Students use a rounded rate (5% for 4.6%) in a savings balance year after year, see that the gap grows faster than the first year's $4 because the error is multiplied in each year, and learn to keep exact factors and round once at the end (AC9M10N01, node 3).

**Students should be able to say:** I can work out a balance after several years with powers. I can find the gap between an exact and a rounded calculation. I can explain why the gap grows faster than a fixed amount a year.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="Two bars after year 1 side by side. The real balance bar is 1046 dollars and the plan bar is 1050 dollars, 4 dollars higher. Two bars after year 10 are marked with question marks and the gap between them is a question mark."><svg viewBox="0 0 400 220" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><text x="40" y="22" fill="currentColor" stroke="none">After 1 year</text><rect x="40" y="36" width="200" height="22" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="248" y="52" fill="currentColor" stroke="none">real $1046</text><rect x="40" y="66" width="204" height="22" fill="#1D9E75" fill-opacity="0.12" stroke="#0F6E56" stroke-dasharray="5 4"/><text x="252" y="82" fill="currentColor" stroke="none">plan $1050</text><text x="40" y="132" fill="currentColor" stroke="none">After 10 years</text><rect x="40" y="146" width="200" height="22" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="248" y="162" fill="currentColor" stroke="none">real $?</text><rect x="40" y="176" width="200" height="22" fill="#1D9E75" fill-opacity="0.12" stroke="#0F6E56" stroke-dasharray="5 4"/><text x="248" y="192" fill="currentColor" stroke="none">plan $?, gap ?</text></svg></figure>

It's only $4 after the first year. Does it stay that small?

:::keep-together

**After 1 year the plan with 5% is $4 higher than the real balance. After 10 years, how much higher is it?**

☐ $4

☐ $40

☐ $400

☐ $61

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** $61. The real balance is $1000 × 1.046¹⁰ = $1567.89 and the plan is $1000 × 1.05¹⁰ = $1628.89, a gap of $61. It's more than $40 because the extra each year earns extra too.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Why the gap grows


:::keep-together

### The gap after 5 years

Here's how the two balances drift. Notice that the gap isn't the same each year.

1. $1000 \times 1.046 = 1046$ — Real balance after 1 year.
2. $1000 \times 1.05 = 1050$ — Plan after 1 year. The gap is $4.
3. $1000 \times 1.046^5 = 1252.16$ — Real, 5 years.
4. $1000 \times 1.05^5 = 1276.28$ — Plan, 5 years. The gap is $24.12.
5. $1000 \times 1.046^{10} = 1567.89$ — Real, 10 years.
6. $1000 \times 1.05^{10} = 1628.89$ — Plan, 10 years. The gap is $61.

Now try one on paper: the gap after 5 years, the same way. Then type it.

**Work out the gap after 5 years: $1000 \times 1.05^5$ take away $1000 \times 1.046^5$. Round each balance to the nearest cent first.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 24.12

1000 × 1.05⁵ = 1276.28 and 1000 × 1.046⁵ = 1252.16, so the gap is 24.12.

:::


:::keep-together

### Find the mistake

**Jin works out the gap after 10 years from the first year's gap. Click the line where her working goes wrong.**

```
 1  A saver starts with $1000. The real rate is 4.6% a year, but she plans with 5%.
 2  After 1 year: $1050 against $1046, so the plan is $4 too high.
 3  The gap grows by $4 each year, so after 10 years it is 10 × 4 = $40.
 4  So her plan is only $40 too high after 10 years.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: the balance is multiplied by the factor each year, not added to. The first year's gap isn't repeated 10 times: the extra each year earns extra too. The gap after 10 years is $61, not $40.

:::


:::keep-together

### Why does it grow?

**Why is the gap after 10 years more than ten times the gap after 1 year?**

☐ The extra money from the higher rate also earns the higher rate

☐ Rounding always doubles errors

☐ The gap isn't more: it's $40

☐ The bank makes mistakes

:::


:::teacher-note

**Answer:** The extra money from the higher rate also earns the higher rate

With the higher rate each year's balance is bigger, so the next year's extra is bigger too. Differences grow by the same repeated multiplying as the balances.

:::


:::typical

## Change the rate


**Round down.** 

**How far below.** 

**A long time.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Balances and gaps


:::keep-together

### The exact balance

**$2000 grows at 3.2% a year. What is the balance after 5 years, to the nearest cent? Use $2000 \times 1.032^5$.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2341.15

2000 × 1.032⁵ = 2341.15.

:::


:::keep-together

### With the rounded rate

**Someone rounds the rate to 3%. What does $2000 \times 1.03^5$ give, to the nearest cent?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 2318.55

2000 × 1.03⁵ = 2318.55.

:::


:::keep-together

### The gap

**How many dollars is the rounded answer away from the exact one, to the nearest cent?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 22.6

2341.15 − 2318.55 = 22.60. This time the rounded rate gives a balance that is too low.

:::


:::keep-together

### Review

**Review: a till chops every price to the cent. Compared with rounding, which describes it?**

☐ Its errors all go the same way, so they add up

☐ It only affects the cent

☐ Its errors go both ways and cancel

☐ It is always exactly right

:::


:::teacher-note

**Answer:** Its errors all go the same way, so they add up

Chopping only ever goes down, so its errors add up.

:::


## Make: back to the savings


**The 20 year gap.** Back to the saver. Work this out on paper first, then type your answer.

**How to keep it close.** The rates and balances are made up. Real savings rates are on the banks' own pages and change often.

**Also used in**

- **Loans and savings.** Compound interest is the same repeated multiplying, so a rounded rate drifts the same way.
- **Next lessons.** Exponential relations, where repeated multiplying is the whole idea.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Does the gap between 1.05^n and 1.046^n times $1000 grow by the same amount each year? Why?**

{{lines-3}}

:::


:::teacher-note

**Answer:** No. Each year's extra also earns, so the gap grows faster each year.

:::

