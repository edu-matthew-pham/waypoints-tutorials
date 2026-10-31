---
marp: true
theme: default
html: true
---

# Judging the model

Quadratics and exponentials · Year 10: models and relations

<!-- Speaker note: Students interpret a model's result in words, test it against a measurement, name what it assumes and say how far to trust it. The context is bacteria in food left out, using a made-up doubling time (AC9M10A04, node 3). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: The 2-hour/4-hour rule (NSW Food Authority): food left between 5 °C and 60 °C: under 2 hours use or refrigerate; 2 to 4 hours use but do not refrigerate; 4 hours or more throw out, https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf (checked 25 October 2026); Made up for this lesson: the 100 cells, the doubling times, the 1,000,000-cell dish, the lab count, the plant, the yeast and the car., https://tutorials.learningwaypoints.com/maths/functions/judging-the-model/ (checked 25 October 2026). -->

---

## Today

- I can say what a modelled result means in the situation.
- I can check a model against a real measurement and change it if it is off.
- I can name an assumption the model makes and say where the model stops being reliable.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need the exponential model from Writing the model. The one idea: a model is built on assumptions and checked on a range. Judging it means interpreting the result, testing it on a real measurement, naming the assumption that fails and reporting how far to trust it. Every number is made up: the 100 cells, the 20 and 30 minute doubling times, the 1,000,000-cell dish, the lab count of 6,400, the pond plant, the yeast and the car. Real doubling times depend on the bacteria and the temperature. The one real figure is the NSW Food Authority 2-hour/4-hour rule (food between 5 °C and 60 °C: under 2 hours use or refrigerate, 2 to 4 hours use but do not refrigerate, 4 hours or more throw out). The rule is a safety margin, not the output of this model: make sure no one leaves thinking the model proves that 4 hours is the limit. Hidden: the doubling time is the same however many cells there are. That is the assumption that fails first. Teacher: Paper: the yeast try-one and the Make comparison are worked on paper first. Look for the hour before and the hour after the limit. -->

---

## Why it matters

> A food-safety rule says to throw out food left out for 4 hours. Can a doubling model say anything about that number?

<!-- Speaker note: Food that is left out between 5 °C and 60 °C is safe for under 2 hours, can be used but not refrigerated for 2 to 4 hours, and has to be thrown out after 4 hours ([NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf), checked 25 October 2026). Bacteria are one reason. In this lesson a dish starts with 100 cells that double every 20 minutes. Both numbers are made up: real doubling times depend on the bacteria and the temperature. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The dish has 100 cells. They double every 20 minutes. About how many times as many cells are there after 4 hours as after 2 hours?**

- $64$ times
- $2$ times
- $4$ times
- $4096$ times

<!-- Speaker note: What happens: 64 times. 2 hours is 6 doublings and 4 hours is 12. The last 2 hours add 6 more doublings, so the count is multiplied by 2⁶ = 64. After 2 hours there are 6,400 cells and after 4 hours there are 409,600. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 2 or 4 added hours; those who chose 4096 forgot the first two hours were already done. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fjudging-the-model%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+8%0Ay%3A+0%2C+1000000%0Agrid%3A+1%2C+200000%0Aaxes%3A+Time+%28hours%29%2C+Cells%0Aslider+d%3A+10%2C+60%2C+40%2C+5%0Aplot%3A+y+%3D+100%282%5E%2860x%2Fd%29%29%0Aplot%3A+y+%3D+1000000%2C+dashed%0Atable%3A+0%2C+1%2C+2%2C+3%2C+4%2C+5%2C+6%2C+7%2C+8%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/judging-the-model/?full=step-2#step-2)

<!-- Speaker note: The curve is $N = 100 \times 2^{60x \div d}$, with $x$ in hours and $d$ the doubling time in minutes. The dashed line is the most a small dish could hold: 1,000,000 cells (made up). -->

<!-- Speaker note: Teacher: ask students to find where the curve passes the dashed line, then ask what happens to the curve after that. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 64 times. 2 hours is 6 doublings and 4 hours is 12. The last 2 hours add 6 more doublings, so the count is multiplied by 2⁶ = 64. After 2 hours there are 6,400 cells and after 4 hours there are 409,600.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Judging a model

Here is how to judge a model, step by step.

Now try the yeast on paper first. The assumption in the question is the same: the colony keeps growing by 1.4 times an hour.

$$A = 2(1.5^w)$$

1) $w = 10 \Rightarrow A = 2(1.5^{10}) = 115.3$ — Say what the number means: 115 square metres, more than the whole pond.
2) $w = 8 \Rightarrow A = 51.3 and w = 9 \Rightarrow A = 76.9$ — Find where it passes 60. The first whole week over the pond is week 9.
3) $\text{Assumption: the plant grows by 1.5 times each week for ever}$ — A real plant slows when it runs out of room.
4) $\text{Trust it up to about week 8}$ — Report the answer with its limit.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write A = 2(1.5^w) and say "A pond plant covers A square metres after w weeks (made up). The pond is 60 square metres. Judge the model." Line 1: write w = 10 A = 2(1.5^10) = 115.3 and say "Say what the number means: 115 square metres, more than the whole pond." Line 2: write w = 8 A = 51.3 and w = 9 A = 76.9 and say "Find where it passes 60. The first whole week over the pond is week 9." Line 3: write Assumption: the plant grows by 1.5 times each week for ever and say "A real plant slows when it runs out of room." Line 4: write Trust it up to about week 8 and say "Report the answer with its limit." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 18px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Judging a model

**A yeast model says the colony covers $A = 50(1.4^h)$ square millimetres after $h$ hours. The dish only has $3{,}000$ square millimetres of room (made up). Work out $A$ for whole hours. What is the first hour when the model gives more than the dish can hold?**

* Answer: $50 \times 1.4^{12} = 2834.7$ (hour 12 is still inside the dish); $50 \times 1.4^{13} = 3968.6$ (hour 13 is over 3,000); The model can be trusted up to about hour 12 (after that it describes room that isn't there)

<!-- Speaker note: At hour 12 the area is 2,834.7, under 3,000. At hour 13 it is 3,968.6, over. So hour 13 is the first, and the model should not be trusted past about hour 12. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam tests the dish model against a lab count of 6,400 cells at 3 hours. Click the line where the reasoning goes wrong.**

```
 1  The model N = 100 x 2^(3t) says the bacteria double every 20 minutes.
 2  A lab counted 6,400 cells at 3 hours, so I tried a 30-minute doubling time.
 3  That gives 100 x 2^6 = 6,400, which matches the lab exactly.
 4  So the model with 30 minutes is true for any time I like.
 5  At 24 hours it says 100 x 2^48 = 28,147,497,671,065,600 cells, so that is what a tray left out all day holds.
```

* Answer: line 4

<!-- Speaker note: Line 4: matching one measurement at 3 hours shows the model works near 3 hours. It doesn't show that the doubling carries on for any time. By line 5 it predicts more cells than could fit on a tray. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What the model leaves out

**The model says the count doubles every 20 minutes, however many cells there are. Which real-life fact does that assumption ignore?**

- Bacteria are alive
- The count starts at 100
- Food and room run out, so the growth slows
- Time is measured in hours

* Answer: Food and room run out, so the growth slows

<!-- Speaker note: The model keeps doubling for ever. In real life the food and the room run out, so the doubling slows and stops. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Fit it, then test it



- **Fitting the lab:** 
- **When it fills:** 
- **Before the start:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/judging-the-model/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Judging a model can mean changing it. Try the doubling time that fits the lab count, then ask where the new model fails, including at the edges. Hints, in order: The lab counted $6{,}400$ cells at 3 hours from 100. That is $64$ times as many. / $64 = 2^6$, so there were 6 doublings in 3 hours. / Keep d at 30. Look down the table for the first whole hour over the dashed line, 1,000,000. / Put x = −1 into the model with d = 20: the power is 60 × (−1) ÷ 20. For students who need more support: A table with columns for hour, model count and dish limit. Fill in the hours and tick the ones where the model count is under the limit. For early finishers: Sketch what a more realistic curve would do: grow like the model at first, then flatten near the dish limit. Which part of the curve is the model good for? The hard part, on purpose: Treating a model that fits one measurement as true everywhere. Ask 'where did we check it, and what about further out?' When students get stuck: A student says the model is right because it matched the lab at 3 hours. Ask: What would it say at 24 hours, and could a tray hold that? Fix: Compute the model for a much later time. A model matching one point says it works near that point. / A student says the model is 'wrong' because it stops fitting at 8 hours. Ask: Was it wrong at 3 hours? Fix: A model can be useful inside a range. Report the answer with the range it was checked on. / A student blames the arithmetic when the model and the lab disagree. Ask: Is the calculation right? Then which assumption is off? Fix: Check the sum, then change the assumption, here the doubling time. -->

<!-- Speaker note: Teacher: before the edge case ask 'what time is x = −1?'. The model was built for after the start. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Model against listing

**A model says a car is worth $V = 20000(0.85^n)$ dollars after $n$ years. A listing shows one 3 years old at $\$13{,}000$. By how many dollars is the model's value lower than the listing? Give the answer in dollars.**

* Answer: 717.5

<!-- Speaker note: 20,000 × 0.85³ = 12,282.50, and 13,000 − 12,282.50 = 717.50. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## How far out

**The same car model gives about $\$153$ for a car 30 years old. What is the best comment?**

- It is wrong because the value can't go below $20,000$
- It is wrong because 30 is not a whole number
- Far outside the ages it was checked on, so don't trust it: a car that old could be worth much more or much less
- It is exact, because the model fitted at 3 years

* Answer: Far outside the ages it was checked on, so don't trust it: a car that old could be worth much more or much less

<!-- Speaker note: The model was only checked near 3 years. At 30 years it is guessing, and a very old car can be a collector's item or scrap. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: solve $4^x = 64$. What is $x$?**

* Answer: 3

<!-- Speaker note: 64 = 4³, so x = 3. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: report the answer



- **Compare two hours with four:** Back to the dish. Work this out on paper first, then type your answer.
- **The report:** A report has three parts: what the number means, what the model assumes, and how far out you trust it. Sources: the 100 cells, the doubling times and the dish l

<!-- Speaker note: What this step is for: Back to the dish: give the answer and say how far to trust it. The report has three parts: the result in words, an assumption, and the range. Hints, in order: With d = 30, the count at 2 hours is 100 × 2⁴ and at 4 hours is 100 × 2⁸. / Divide the 4-hour count by the 2-hour count. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A model for a colony says 200 × 1.5ʰ cells after h hours. A dish holds 10,000 cells. In which whole hour does the model first pass the dish, and what should you say about hours after it?**

* 200 × 1.5¹⁰ = 11,533 and 200 × 1.5⁹ = 7,689, so hour 10. After it the model is not reliable, because the dish is full.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Make a conjecture, exploring a function family with a graphing tool before trusting it. Where it leads in class: a full modelling task with a report on assumptions, methods and findings. -->
