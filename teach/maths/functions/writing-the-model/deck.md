---
marp: true
theme: default
html: true
---

# Writing the model

Quadratics and exponentials · Year 10: models and relations

<!-- Speaker note: Students turn a rate a year into a growth or decay factor, write A = a(bⁿ), and use it to answer a question in dollars (AC9M10A04, node 2). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: MoneySmart compound interest calculator (ASIC): a real calculator to check the model's figures, with fees and tax, https://moneysmart.gov.au/saving/compound-interest-calculator (checked 25 October 2026); Made up for this lesson: the $1,000 and the 5% a year are not an offer from a bank., https://tutorials.learningwaypoints.com/maths/functions/writing-the-model/ (checked 25 October 2026). -->

---

## Today

- I can turn a percentage rate into a growth or decay factor.
- I can write a model with a starting amount and a factor.
- I can use the model to find a value and say what it means in dollars.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need the ratio idea from lesson 1 and y = a(bˣ) from lesson 3. The one idea: a rate a year is a factor, 1 + r for growth and 1 − r for decay. The model then reads A = a(bⁿ): a is the starting amount, b the factor, n the number of years. The rates and the $1,000 are made up and are not an offer. Real accounts change the rate and may charge fees and tax; the model assumes one fixed rate. The sources line points at ASIC's MoneySmart calculator for real figures: check the page before class. Rounding: keep the exact power in the calculator and round to the cent at the end. Teacher: Paper: the try-one after the worked example and the compound against simple task in Make are worked on paper first. Look for 1.04, not 0.04, in the working. -->

---

## Why it matters

> A savings account says '5% interest a year'. What does 5% a year really do to $1,000?

<!-- Speaker note: You put $1,000 in a savings account. The account adds interest once a year, and the next year's interest is worked out on the new balance. The rate is made up for this lesson: real rates change, and accounts have fees and tax. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**After 1 year, $1,000 at 5% a year is worth $1,050. How much is it worth after 2 years?**

- $1{,}050$
- $1{,}102.50$
- $1{,}100$
- $1{,}125$

<!-- Speaker note: What happens: $1,102.50. The second year's interest is 5% of 1,050, which is 52.50, not 50. So the balance is 1,050 × 1.05 = 1,102.50. Adding 50 twice would give 1,100. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 1,100 added $50 twice. Don't correct it yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fwriting-the-model%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+20%0Ay%3A+0%2C+3000%0Agrid%3A+5%2C+500%0Aaxes%3A+Time+%28years%29%2C+Balance+%28%24%29%0Aslider+r%3A+0%2C+10%2C+3%2C+1%0Aplot%3A+y+%3D+1000%28%281+%2B+r%2F100%29%5Ex%29%0Aplot%3A+y+%3D+1000+%2B+10rx%2C+dashed%0Atable%3A+0%2C+1%2C+2%2C+5%2C+10%2C+15%2C+20%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/writing-the-model/?full=step-2#step-2)

<!-- Speaker note: The solid curve multiplies the balance by $1 + r/100$ each year. The dashed line adds the same dollars every year. The chart runs out of room, so read the big numbers from the table. -->

<!-- Speaker note: Teacher: ask students to compare the two curves after 10 and 20 years, and say what the dashed line is leaving out. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* $1,102.50. The second year's interest is 5% of 1,050, which is 52.50, not 50. So the balance is 1,050 × 1.05 = 1,102.50. Adding 50 twice would give 1,100.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Rate to factor

Here's how to write the model from the words.

Now try one on paper: $500$ at $4\%$ a year. Find the balance after 2 years, in dollars.

$$\$2000 \text{ at } 3\% \text{ a year}$$

1) $a = 2000$ — The starting amount.
2) $b = 1 + 0.03 = 1.03$ — Keep the balance and add 3% of it.
3) $A = 2000(1.03^n)$ — Starting amount times the factor, n times.
4) $A = 2000(1.03^5)$ — After 5 years.
5) $A = 2318.55$ — Rounded to the cent. Always put the unit: dollars.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write \$2000 at 3\% a year and say "Write the balance after n years." Line 1: write a = 2000 and say "The starting amount." Line 2: write b = 1 + 0.03 = 1.03 and say "Keep the balance and add 3% of it." Line 3: write A = 2000(1.03^n) and say "Starting amount times the factor, n times." Line 4: write A = 2000(1.03^5) and say "After 5 years." Line 5: write A = 2318.55 and say "Rounded to the cent. Always put the unit: dollars." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Rate to factor

**An account grows by $6\%$ a year. What do you multiply the balance by each year?**

* Answer: 1.06

<!-- Speaker note: The whole balance stays (1) and 6% of it is added (0.06): 1.06. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Maya writes the model for $1,000 at 5% a year. Click the line where her working goes wrong.**

```
 1  An account pays 5% a year. I start with $1,000. What is the model?
 2  5% is 0.05, so each year the balance is multiplied by 0.05.
 3  So A = 1000 x 0.05^n, where n is the number of years.
 4  After 1 year that gives 1000 x 0.05 = 50.
 5  Fifty dollars is less than I started with, but that can't be right. Maybe I rounded.
```

* Answer: line 2

<!-- Speaker note: Line 2: multiplying by 0.05 keeps only 5% of the balance. To grow by 5% you keep all of it and add 5% more: multiply by 1.05. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A falling value

**A car loses $8\%$ of its value each year. What do you multiply its value by each year?**

- 0.08
- 0.92
- 1.08
- 8

* Answer: 0.92

<!-- Speaker note: It keeps 100% − 8% = 92% of its value: 0.92. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the rate



- **Waiting for 2,000:** 
- **A car:** 
- **A rate of 0:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/writing-the-model/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: a longer wait, a falling value and a rate of 0. Hints, in order: Set $r$ to 7. Look down the table for the first value over 2,000. / Year 10 gives 1,967; try year 11. / The factor for losing 15% is 0.85. / $20000 \times 0.85 \times 0.85$. / Set $r$ to 0 and look at the table. For students who need more support: A table with an extra row: 'what stays' and 'what is added'. Fill it for 5%, 10% and 20% before writing the factor. For early finishers: How long to double at 7% a year? Try the table, then write 1.07ⁿ = 2 and see why the same-base trick doesn't work for it. Rule of 72: 72 ÷ 7 is about 10. How close is that? The hard part, on purpose: Using the rate on its own as the factor (0.05 for 5% growth). Say 'what stays, and what is added?': 100% stays, plus 5%. When students get stuck: A student uses 0.05 as the factor (Maya's mistake). Ask: If you multiply 1,000 by 0.05, do you have more or less than before? Fix: A bigger balance means a factor above 1. Write 1 + 0.05 and say what each part is: the balance you keep and the interest you add. / A student works 2 years as 1,000 + 50 + 50. Ask: Is the second year's 5% of 1,000 or of the new balance? Fix: Work year 2 as 1,050 × 1.05. Interest is paid on the interest. / A student writes the decay factor as 0.08 for losing 8%. Ask: What share of the value is kept? Fix: It keeps 92%: 0.92. Factor = 1 − rate for a decay. -->

<!-- Speaker note: Teacher: before the rate of 0, ask what 1 + 0 is. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The growth factor

**An account grows by $9\%$ a year. What is the growth factor?**

* Answer: 1.09

<!-- Speaker note: 1 + 0.09 = 1.09. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two years

**$200$ is invested at $10\%$ a year. What is the balance after 2 years, in dollars?**

* Answer: 242

<!-- Speaker note: 200 × 1.1 = 220 and 220 × 1.1 = 242. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The starting amount

**A model is $A = 3000(1.02^n)$. What is the starting amount, in dollars?**

* Answer: 3000

<!-- Speaker note: At n = 0 the power is 1, so A = 3000. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: solve $3^x = 81$. What is $x$?**

* Answer: 4

<!-- Speaker note: 81 = 3⁴, so x = 4. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the savings



- **Compound against simple:** Back to the savings. Work this out on paper first, then type your answer.
- **How much to trust it:** The rate and the $1,000$ are made up. The shape is the point: a rate each year multiplies, so the last years add the most. Sources: the $1,000$ and the 5% a yea

<!-- Speaker note: What this step is for: Coming back to the savings: the compounding balance beats the same dollars added each year, and the gap grows. Hints, in order: Simple interest adds $50 each year for 10 years. / Compound: $1000 \times 1.05^{10}$. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A phone loses 20% of its value each year and costs 900 new. Write the model and find its value after 3 years.**

* A = 900(0.8ⁿ). After 3 years: 900 × 0.8³ = 460.80 dollars.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: two models at once, such as a steady saver and a compounding one, and finding where they meet. Where it leads in class: loans, depreciation and population models. -->
