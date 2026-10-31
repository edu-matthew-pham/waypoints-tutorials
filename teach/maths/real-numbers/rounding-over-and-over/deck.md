---
marp: true
theme: default
html: true
---

# Rounding over and over

Irrational numbers and index laws · Year 10: approximation

<!-- Speaker note: Students use a rounded rate (5% for 4.6%) in a savings balance year after year, see that the gap grows faster than the first year's $4 because the error is multiplied in each year, and learn to keep exact factors and round once at the end (AC9M10N01, node 3). About 40 minutes (Predict and Run 8 min · Investigate 12 min · Modify 10 min · Practise and Make 10 min). -->

---

## Today

- I can work out a balance after several years with powers.
- I can find the gap between an exact and a rounded calculation.
- I can explain why the gap grows faster than a fixed amount a year.

<!-- Speaker note: Before class: Do the Run step yourself first. Students need powers on a calculator, and the lesson before (Chop or round?). The one idea: using a rounded value again and again multiplies its error, so the gap grows faster than steadily. The common mistake is adding the first year's gap (Jin's working). The rates and balances are made up: $1000 at 4.6% a year, planned as 5%. Real savings rates are on banks' own sites and change, so none is quoted. No real figures, so no sources. Teacher: Paper: the try-one after the worked example and the 20 year gap in Make are worked on paper first. Books out, and look for both balances at the same number of years. -->

---

## Why it matters

> Say your savings grow at 4.6% a year, and round that to 5% in your head. You'll be nearly right. For a while.

<!-- Speaker note: A saver puts $1000 in an account and leaves it. Each year the bank adds 4.6% of the balance, so the balance is multiplied by 1.046 every year. (The 4.6% is made up; real rates are on the banks' own sites.) She doesn't like working with 1.046, so she plans with 1.05, which is close. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**After 1 year the plan with 5% is $4 higher than the real balance. After 10 years, how much higher is it?**

- $4
- $40
- $400
- $61

<!-- Speaker note: What happens: $61. The real balance is $1000 × 1.046¹⁰ = $1567.89 and the plan is $1000 × 1.05¹⁰ = $1628.89, a gap of $61. It's more than $40 because the extra each year earns extra too. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. $40 comes from adding the first year's gap every year. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* $61. The real balance is $1000 × 1.046¹⁰ = $1567.89 and the plan is $1000 × 1.05¹⁰ = $1628.89, a gap of $61. It's more than $40 because the extra each year earns extra too.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/maths/real-numbers/rounding-over-and-over/?full=step-2#step-2](https://tutorials.learningwaypoints.com/maths/real-numbers/rounding-over-and-over/?full=step-2#step-2)

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: have students enter 1.046^10 and 1.05^10 themselves, and read the gap aloud. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## The gap after 5 years

Here's how the two balances drift. Notice that the gap isn't the same each year.

Now try one on paper: the gap after 5 years, the same way. Then type it.

$$1000 \times 1.046 = 1046$$

1) $1000 \times 1.05 = 1050$ — Plan after 1 year. The gap is $4.
2) $1000 \times 1.046^5 = 1252.16$ — Real, 5 years.
3) $1000 \times 1.05^5 = 1276.28$ — Plan, 5 years. The gap is $24.12.
4) $1000 \times 1.046^{10} = 1567.89$ — Real, 10 years.
5) $1000 \times 1.05^{10} = 1628.89$ — Plan, 10 years. The gap is $61.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 1000 × 1.046 = 1046 and say "Real balance after 1 year." Line 1: write 1000 × 1.05 = 1050 and say "Plan after 1 year. The gap is $4." Line 2: write 1000 × 1.046^5 = 1252.16 and say "Real, 5 years." Line 3: write 1000 × 1.05^5 = 1276.28 and say "Plan, 5 years. The gap is $24.12." Line 4: write 1000 × 1.046^10 = 1567.89 and say "Real, 10 years." Line 5: write 1000 × 1.05^10 = 1628.89 and say "Plan, 10 years. The gap is $61." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The gap after 5 years

**Work out the gap after 5 years: $1000 \times 1.05^5$ take away $1000 \times 1.046^5$. Round each balance to the nearest cent first.**

* Answer: 24.12

<!-- Speaker note: 1000 × 1.05⁵ = 1276.28 and 1000 × 1.046⁵ = 1252.16, so the gap is 24.12. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Jin works out the gap after 10 years from the first year's gap. Click the line where her working goes wrong.**

```
 1  A saver starts with $1000. The real rate is 4.6% a year, but she plans with 5%.
 2  After 1 year: $1050 against $1046, so the plan is $4 too high.
 3  The gap grows by $4 each year, so after 10 years it is 10 × 4 = $40.
 4  So her plan is only $40 too high after 10 years.
```

* Answer: line 3

<!-- Speaker note: Line 3: the balance is multiplied by the factor each year, not added to. The first year's gap isn't repeated 10 times: the extra each year earns extra too. The gap after 10 years is $61, not $40. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why does it grow?

**Why is the gap after 10 years more than ten times the gap after 1 year?**

- The extra money from the higher rate also earns the higher rate
- Rounding always doubles errors
- The gap isn't more: it's $40
- The bank makes mistakes

* Answer: The extra money from the higher rate also earns the higher rate

<!-- Speaker note: With the higher rate each year's balance is bigger, so the next year's extra is bigger too. Differences grow by the same repeated multiplying as the balances. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the rate



- **Round down:** 
- **How far below:** 
- **A long time:** 

<!-- Speaker note: What this step is for: Changing the rounded rate shows the gap again grows with the years, can go the other way, and gets large over a long time. Hints, in order: Round 4.6% down to 4%, so the factor is 1.04. / Use $1000 \times 1.04^{10}$. / The real balance after 10 years is $1567.89. / Subtract the plan from it. / Use 30 years for both rates, 1.05 and 1.046. / Then subtract. For students who need more support: A table with years 1 to 5 for both factors, filled in a row at a time, so the gap column can be seen growing. For early finishers: How many years until the plan with 5% is double the real balance's gap after 10 years? Estimate, then check on a calculator. The hard part, on purpose: Expecting the first year's error to be repeated, not multiplied. Ask: does the extra each year earn anything? When students get stuck: A student says the gap after 10 years is $40. Ask: Work out both balances after 2 years. Is the gap $8? Fix: $8.38: the first year's extra $4 also earns interest, so the gap grows faster than $4 a year. / A student rounds 1.046 to 1.0 to keep it simple. Ask: What does multiplying by 1 do to the balance? Fix: Nothing: no growth at all. Keep 1.046 and round the final answer once. -->

<!-- Speaker note: Teacher: before the 30 year edge case, ask whether the gap will be about three times as big or more. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The exact balance

**$2000 grows at 3.2% a year. What is the balance after 5 years, to the nearest cent? Use $2000 \times 1.032^5$.**

* Answer: 2341.15

<!-- Speaker note: 2000 × 1.032⁵ = 2341.15. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## With the rounded rate

**Someone rounds the rate to 3%. What does $2000 \times 1.03^5$ give, to the nearest cent?**

* Answer: 2318.55

<!-- Speaker note: 2000 × 1.03⁵ = 2318.55. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The gap

**How many dollars is the rounded answer away from the exact one, to the nearest cent?**

* Answer: 22.6

<!-- Speaker note: 2341.15 − 2318.55 = 22.60. This time the rounded rate gives a balance that is too low. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: a till chops every price to the cent. Compared with rounding, which describes it?**

- Its errors all go the same way, so they add up
- It only affects the cent
- Its errors go both ways and cancel
- It is always exactly right

* Answer: Its errors all go the same way, so they add up

<!-- Speaker note: Chopping only ever goes down, so its errors add up. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the savings



- **The 20 year gap:** Back to the saver. Work this out on paper first, then type your answer.
- **How to keep it close:** The rates and balances are made up. Real savings rates are on the banks' own pages and change often. **Also used in** - **Loans and savings.** Compound interest

<!-- Speaker note: What this step is for: Coming back to the saver: the gap after 20 years is about $195, far more than 20 times the $4 of year one. Hints, in order: Exact: $1000 \times 1.046^{20}$. / Plan: $1000 \times 1.05^{20}$. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Does the gap between 1.05^n and 1.046^n times $1000 grow by the same amount each year? Why?**

* No. Each year's extra also earns, so the gap grows faster each year.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10N01 (node 3). Where it leads: exponential relations (the same repeated multiplying), and modelling growth and decay. -->
