---
title: "Judging the model"
subtitle: "Quadratics and exponentials · Year 10: models and relations · Lesson 9"
---

# Judging the model

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A food-safety rule says to throw out food left out for 4 hours. Can a doubling model say anything about that number?


:::teacher-note

**In one sentence:** Students interpret a model's result in words, test it against a measurement, name what it assumes and say how far to trust it. The context is bacteria in food left out, using a made-up doubling time (AC9M10A04, node 3).

**Students should be able to say:** I can say what a modelled result means in the situation. I can check a model against a real measurement and change it if it is off. I can name an assumption the model makes and say where the model stops being reliable.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="A time line with three marks: the start with 100 cells, 2 hours with a question mark and 4 hours with a question mark. A label under the line reads: doubles every 20 minutes."><svg viewBox="0 0 480 150" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="30" y1="80" x2="450" y2="80"/><g stroke-width="2"><line x1="40" y1="68" x2="40" y2="92"/><line x1="240" y1="68" x2="240" y2="92"/><line x1="440" y1="68" x2="440" y2="92"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="58">100 cells</text><text x="240" y="58" font-size="22">?</text><text x="440" y="58" font-size="22">?</text><text x="40" y="112">start</text><text x="240" y="112">2 hours</text><text x="440" y="112">4 hours</text><text x="240" y="140">doubles every 20 minutes</text></g></svg></figure>

The first mark is the start. Make a guess before you check.

:::keep-together

**The dish has 100 cells. They double every 20 minutes. About how many times as many cells are there after 4 hours as after 2 hours?**

☐ $64$ times

☐ $2$ times

☐ $4$ times

☐ $4096$ times

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 64 times. 2 hours is 6 doublings and 4 hours is 12. The last 2 hours add 6 more doublings, so the count is multiplied by 2⁶ = 64. After 2 hours there are 6,400 cells and after 4 hours there are 409,600.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## How far to trust it


:::keep-together

### Judging a model

Here is how to judge a model, step by step.

1. $A = 2(1.5^w)$ — A pond plant covers A square metres after w weeks (made up). The pond is 60 square metres. Judge the model.
2. $w = 10 \Rightarrow A = 2(1.5^{10}) = 115.3$ — Say what the number means: 115 square metres, more than the whole pond.
3. $w = 8 \Rightarrow A = 51.3 and w = 9 \Rightarrow A = 76.9$ — Find where it passes 60. The first whole week over the pond is week 9.
4. $\text{Assumption: the plant grows by 1.5 times each week for ever}$ — A real plant slows when it runs out of room.
5. $\text{Trust it up to about week 8}$ — Report the answer with its limit.

Now try the yeast on paper first. The assumption in the question is the same: the colony keeps growing by 1.4 times an hour.

**A yeast model says the colony covers $A = 50(1.4^h)$ square millimetres after $h$ hours. The dish only has $3{,}000$ square millimetres of room (made up). Work out $A$ for whole hours. What is the first hour when the model gives more than the dish can hold?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** $50 \times 1.4^{12} = 2834.7$ (hour 12 is still inside the dish); $50 \times 1.4^{13} = 3968.6$ (hour 13 is over 3,000); The model can be trusted up to about hour 12 (after that it describes room that isn't there)

At hour 12 the area is 2,834.7, under 3,000. At hour 13 it is 3,968.6, over. So hour 13 is the first, and the model should not be trusted past about hour 12.

:::


:::keep-together

### Find the mistake

**Sam tests the dish model against a lab count of 6,400 cells at 3 hours. Click the line where the reasoning goes wrong.**

```
 1  The model N = 100 x 2^(3t) says the bacteria double every 20 minutes.
 2  A lab counted 6,400 cells at 3 hours, so I tried a 30-minute doubling time.
 3  That gives 100 x 2^6 = 6,400, which matches the lab exactly.
 4  So the model with 30 minutes is true for any time I like.
 5  At 24 hours it says 100 x 2^48 = 28,147,497,671,065,600 cells, so that is what a tray left out all day holds.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 4

Line 4: matching one measurement at 3 hours shows the model works near 3 hours. It doesn't show that the doubling carries on for any time. By line 5 it predicts more cells than could fit on a tray.

:::


:::keep-together

### What the model leaves out

**The model says the count doubles every 20 minutes, however many cells there are. Which real-life fact does that assumption ignore?**

☐ Bacteria are alive

☐ The count starts at 100

☐ Food and room run out, so the growth slows

☐ Time is measured in hours

:::


:::teacher-note

**Answer:** Food and room run out, so the growth slows

The model keeps doubling for ever. In real life the food and the room run out, so the doubling slows and stops.

:::


:::typical

## Fit it, then test it


**Fitting the lab.** 

**When it fills.** 

**Before the start.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Report the answer


:::keep-together

### Model against listing

**A model says a car is worth $V = 20000(0.85^n)$ dollars after $n$ years. A listing shows one 3 years old at $\$13{,}000$. By how many dollars is the model's value lower than the listing? Give the answer in dollars.**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 717.5

20,000 × 0.85³ = 12,282.50, and 13,000 − 12,282.50 = 717.50.

:::


:::keep-together

### How far out

**The same car model gives about $\$153$ for a car 30 years old. What is the best comment?**

☐ It is wrong because the value can't go below $20,000$

☐ It is wrong because 30 is not a whole number

☐ Far outside the ages it was checked on, so don't trust it: a car that old could be worth much more or much less

☐ It is exact, because the model fitted at 3 years

:::


:::teacher-note

**Answer:** Far outside the ages it was checked on, so don't trust it: a car that old could be worth much more or much less

The model was only checked near 3 years. At 30 years it is guessing, and a very old car can be a collector's item or scrap.

:::


:::keep-together

### Review

**Review: solve $4^x = 64$. What is $x$?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 3

64 = 4³, so x = 3.

:::


## Make: report the answer


**Compare two hours with four.** Back to the dish. Work this out on paper first, then type your answer.

**The report.** A report has three parts: what the number means, what the model assumes, and how far out you trust it.

Sources: the 100 cells, the doubling times and the dish limit of 1,000,000 cells are made up for this lesson. The 2-hour and 4-hour rule is from the [NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf) (checked 25 October 2026). The car, plant and yeast numbers are made up too.

**Also used in**

- **Science.** A population model for a lake or a culture is judged the same way: fit it to a count, then ask when the food or room runs out.
- **Money.** A savings or loan model assumes a fixed rate. If the rate changes, the model is no longer the account.
- **Last lesson.** Where two models meet: the crossing is only worth trusting while both models are.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A model for a colony says 200 × 1.5ʰ cells after h hours. A dish holds 10,000 cells. In which whole hour does the model first pass the dish, and what should you say about hours after it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 200 × 1.5¹⁰ = 11,533 and 200 × 1.5⁹ = 7,689, so hour 10. After it the model is not reliable, because the dish is full.

:::

