---
title: "Simulating compound events"
subtitle: "Data and chance · Chance · Lesson 14"
---

# Simulating compound events

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** In a board game you roll two dice every turn. Which total should you hope for, and how sure can you be? Rolling by hand would take all lesson; a simulation takes a second.


:::teacher-note

**In one sentence:** Students simulate two dice and two coins, record results in a frequency table, and compare relative frequencies with probabilities from the sample space (AC9M8P03, nodes 1 and 2).

**Students should be able to say:** I can run a simulation of two events and record the results in a frequency table. I can find a relative frequency and compare it with the probability. I can explain why more trials give a better estimate.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

<figure class="situation" role="img" aria-label="Two dice with question marks are rolled and added. A row of boxes shows the possible totals from 2 to 12, and the question is which total comes up most often."><svg viewBox="0 0 360 160" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="15" width="44" height="44" rx="8" stroke-width="2"/><text x="42" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="80" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">+</text><rect x="96" y="15" width="44" height="44" rx="8" stroke-width="2"/><text x="118" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="160" y="45" text-anchor="start" fill="currentColor" stroke="none">= total</text><rect x="20" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="34" y="105" text-anchor="middle" fill="currentColor" stroke="none">2</text><rect x="50" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="64" y="105" text-anchor="middle" fill="currentColor" stroke="none">3</text><rect x="80" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="94" y="105" text-anchor="middle" fill="currentColor" stroke="none">4</text><rect x="110" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="124" y="105" text-anchor="middle" fill="currentColor" stroke="none">5</text><rect x="140" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="154" y="105" text-anchor="middle" fill="currentColor" stroke="none">6</text><rect x="170" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="184" y="105" text-anchor="middle" fill="currentColor" stroke="none">7</text><rect x="200" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="214" y="105" text-anchor="middle" fill="currentColor" stroke="none">8</text><rect x="230" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="244" y="105" text-anchor="middle" fill="currentColor" stroke="none">9</text><rect x="260" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="274" y="105" text-anchor="middle" fill="currentColor" stroke="none">10</text><rect x="290" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="304" y="105" text-anchor="middle" fill="currentColor" stroke="none">11</text><rect x="320" y="85" width="28" height="30" rx="4" stroke-width="1"/><text x="334" y="105" text-anchor="middle" fill="currentColor" stroke="none">12</text><text x="185" y="145" text-anchor="middle" fill="currentColor" stroke="none">Which total comes up most?</text></svg></figure>

:::keep-together

**Two dice are rolled 100 times and the totals recorded. Which total will probably come up most often?**

☐ They will all come up about the same

☐ 7

☐ 12

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 7. More pairs make 7 (six of the 36) than any other total; 2 and 12 have just one pair each.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Reading a simulation


:::keep-together

### Relative frequency

Here is the routine.

1. $\text{Event: total of 9};\ P = \tfrac{4}{36} \approx 0.11$ — Predict from the grid first.
2. $\text{Run } 500 \text{ trials: } 9 \text{ came up } 58 \text{ times}$ — Simulate and record.
3. $58 \div 500 = 0.116$ — Relative frequency.
4. $0.116 \approx 0.11$ — Close: more trials would make it closer still.

**In 200 simulated rolls of two dice, a total of 7 came up 31 times. What is its relative frequency?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 0.155

31 ÷ 200 = 0.155, close to 1/6 ≈ 0.167.

:::


:::keep-together

### Find the mistake

**Ella runs a short simulation. Click the line where her conclusion goes wrong.**

```
 1  Ella uses an app to roll two dice 20 times.
 2  A sum of 12 never comes up in her 20 rolls.
 3  So the probability of a sum of 12 is 0.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: in 20 rolls, a 1-in-36 event more often than not doesn't happen at all. P(12) = 1/36 from the grid; a short run can't show it is impossible.

:::


:::keep-together

### Two dice in a spreadsheet

**In a spreadsheet, A2 and B2 each hold =RANDBETWEEN(1,6), one dice each. Which formula in C2 simulates the total of two dice?**

☐ =A2*B2

☐ =RANDBETWEEN(1,12)

☐ =A2+B2

☐ =RANDBETWEEN(2,12)

:::


:::teacher-note

**Answer:** =A2+B2

Add the two dice. One random number from 2 to 12 would make every total equally likely, which two dice don't.

:::


:::typical

## More trials, other events


**1000 trials.** 

**At least one head.** 

**A and not A.** 

**Expected count.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Simulations


:::keep-together

### A frequency table

**A simulation of two coins recorded these 20 trials: HT, HH, TT, TH, HH, HT, TT, HH, TH, HT, TT, HH, HT, TH, TT, HH, HT, TH, TT, HH. Fill in the frequency table.**

{{rows 1}}

| outcome | HH | HT | TH | TT |
|---|---|---|---|---|
| count |   |   |   |   |

:::


:::teacher-note

**Answer:** 6, 5, 4, 5

Tally each outcome: 6 + 5 + 4 + 5 = 20 trials. The relative frequency of HH is 6 ÷ 20 = 0.3, near P(HH) = 0.25.

:::


:::keep-together

### Which estimate

**Two classes simulate a total of 7 on two dice. Class A: 9 times in 40 trials. Class B: 170 times in 1000. Which estimate is more reliable?**

☐ Class A: its relative frequency (0.225) is bigger

☐ Class B

☐ They are equally good

☐ Neither: simulations don't work

:::


:::teacher-note

**Answer:** Class B

More trials: 0.17 from 1000 trials is far steadier than 0.225 from 40.

:::


:::keep-together

### Close enough

**A simulated relative frequency is 0.31 and the probability from the sample space is 1/3. What should you say?**

☐ They agree well enough

☐ The simulation is broken

☐ The probability is wrong

☐ The probability is really 0.31

:::


:::teacher-note

**Answer:** They agree well enough

They are close: the difference is chance. Relative frequency varies, and settles near the probability as the trials grow.

:::


:::keep-together

### Review: or

**Review: 30 students, 18 play netball, 10 play hockey, 4 play both. What is P(netball or hockey)?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 24/30

18 + 10 − 4 = 24, so 24/30 = 4/5.

:::


## Make: your own simulation

Describe your result in a sentence: the event, its probability, the relative frequency after your trials, and whether they agree.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Make: on paper

Do this one in your book or on paper, one step per line, before you type the number.

**Also used in**

- **Sport.** A striker who scores 4 in 5 might score all five in a shootout about a third of the time. Simulate it, then check.
- **Games.** Designers simulate thousands of plays instead of playing them.
- **Class work.** Choose an event on two dice, predict its probability, then test it.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A simulation gives a total of 8 on two dice 68 times in 500 trials. Find the relative frequency and compare it with the probability.**

{{lines-3}}

:::


:::teacher-note

**Answer:** 68 ÷ 500 = 0.136. P(8) = 5/36 ≈ 0.139: very close.

:::

