---
marp: true
theme: default
html: true
---

# Same ratio each time

Quadratics and exponentials · Exponentials

<!-- Speaker note: Students compare a table that adds with one that multiplies on a graph board, find the constant ratio, tell the two kinds of table apart, and use the doubling model to see why the last hours of a food-safety rule matter most (AC9M10A03, node 1). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: The 2-hour/4-hour rule (NSW Food Authority): under 2 hours use or refrigerate, 2 to 4 hours use but don't refrigerate, 4 hours or more throw out (food held between 5 °C and 60 °C), https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf (checked 25 October 2026). -->

---

## Today

- I can tell a table that adds from a table that multiplies.
- I can find the ratio of an exponential table.
- I can explain why doubling 4 times is not the same as doubling once.

<!-- Speaker note: Before class: Do the Run and Modify boards yourself first. Students need powers from Year 8 (2⁴ = 16) and straight-line tables from Linear relations. The one idea: an exponential table has a constant ratio between neighbours, where a linear table has a constant difference. The board puts both on one graph: they agree for the first step (100 to 200) and then split. That is the picture to come back to. All numbers in the germ model are made up: 100 germs at the start, doubling every half hour. Say so in class. Real doubling times depend on the germs and the temperature, and the food rule's cut-offs come from food-safety research, not from this model. The model only shows the shape: why 'twice as long' is not 'twice as much' when things multiply. Teacher: Paper: the try-one after the worked example and the picnic in Make are worked on paper first. Books out, and look for division (ratio), not subtraction. -->

---

## Why it matters

> Leave a sandwich out and the germs on it multiply. Why does the food rule change at 2 hours, and bin it at 4?

<!-- Speaker note: At a picnic, a sandwich sits on the table. The food safety rule goes like this: under 2 hours, eat it or put it back in the fridge. From 2 to 4 hours, eat it, but don't put it back. At 4 hours or more, throw it out ([the 2-hour/4-hour rule, NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf)). To see why the rule changes the way it does, let's pretend the germs on the sandwich double every half hour, starting from 100. That's made up: real doubling times depend on the germs and the temperature. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**After 2 hours there are 1,600 germs. The germs keep doubling every half hour. How many are there after 4 hours?**

- $6{,}400$
- $3{,}200$
- $12{,}800$
- $25{,}600$

<!-- Speaker note: What happens: 25,600. From 2 hours to 4 hours is 4 more half hours, so the count doubles 4 more times: 1,600 × 2 × 2 × 2 × 2 = 25,600. That is 16 times as many, not twice as many. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: take a show of hands. Those who chose 3,200 are adding or thinking 'twice as long, twice as many'. Don't correct it yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Ffunctions%2Fsame-ratio%2Fstep-2&code=widget%3A+graph%0Ax%3A+0%2C+8%0Ay%3A+0%2C+1600%0Agrid%3A+1%2C+400%0Aaxes%3A+Time+%28half-hours%29%2C+Germs%0Aslider+b%3A+1%2C+3%2C+1%0Aplot%3A+y+%3D+100%28b%5Ex%29%0Aplot%3A+y+%3D+100+%2B+100x%2C+dashed%0Atable%3A+0%2C+1%2C+2%2C+3%2C+4%2C+5%2C+6%2C+7%2C+8%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/functions/same-ratio/?full=step-2#step-2)

<!-- Speaker note: The solid line multiplies by $b$ every half hour. The dashed line just adds 100 every half hour. The chart runs out of room, so read the big numbers from the table. -->

<!-- Speaker note: Teacher: ask students to read the two rows of the table at 2 hours and at 4 hours, and say what the dashed row is doing. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 25,600. From 2 hours to 4 hours is 4 more half hours, so the count doubles 4 more times: 1,600 × 2 × 2 × 2 × 2 = 25,600. That is 16 times as many, not twice as many.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Multiply by what?

Here's how to tell the two kinds of table apart.

Now try one on paper like the example: $5, 15, 45, 135$. Find the ratio, then type it.

$$2,\; 6,\; 18,\; 54$$

1) $6 - 2 = 4,\; 18 - 6 = 12,\; 54 - 18 = 36$ — The differences are 4, 12, 36. They aren't the same, so it isn't linear.
2) $6 \div 2 = 3,\; 18 \div 6 = 3,\; 54 \div 18 = 3$ — Divide each value by the one before. Every time, it's 3.
3) $\text{ratio} = 3$ — A constant ratio means exponential: each value is 3 times the one before.
4) $54 \times 3 = 162$ — So the next value is 162.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 2, 6, 18, 54 and say "Is this table linear or exponential?" Line 1: write 6 - 2 = 4, 18 - 6 = 12, 54 - 18 = 36 and say "The differences are 4, 12, 36. They aren't the same, so it isn't linear." Line 2: write 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3 and say "Divide each value by the one before. Every time, it's 3." Line 3: write ratio = 3 and say "A constant ratio means exponential: each value is 3 times the one before." Line 4: write 54 × 3 = 162 and say "So the next value is 162." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Multiply by what?

**A table goes $5, 15, 45, 135$. What do you multiply by to get from each value to the next?**

* Answer: 3

<!-- Speaker note: 15 ÷ 5 = 3, 45 ÷ 15 = 3 and 135 ÷ 45 = 3. Each value is 3 times the one before. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Priya tests the table $3, 6, 12, 24$. Click the line where her working goes wrong.**

```
 1  Is the table 3, 6, 12, 24 exponential?
 2  Exponential means it goes up by the same amount each step, so I'll check the differences.
 3  6 − 3 = 3, 12 − 6 = 6, 24 − 12 = 12. The differences aren't the same.
 4  So the table isn't exponential.
```

* Answer: line 2

<!-- Speaker note: Line 2: exponential doesn't mean 'goes up by the same amount'. That's a linear table. Exponential means multiplying by the same number: 6 ÷ 3 = 2, 12 ÷ 6 = 2 and 24 ÷ 12 = 2, so this table is exponential. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which table?

**Which of these tables is exponential?**

- $2, 4, 8, 14$
- $2, 6, 18, 54$
- $2, 5, 8, 11$

* Answer: $2, 6, 18, 54$

<!-- Speaker note: 2, 6, 18, 54 multiplies by 3 every time: 6 ÷ 2, 18 ÷ 6 and 54 ÷ 18 are all 3. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the ratio



- **Triple:** Each task changes $b$. Set the board, then answer.
- **A ratio below 1:** 
- **A ratio of 1:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/functions/same-ratio/?full=step-4#step-4)

<!-- Speaker note: What this step is for: One change at a time: a bigger ratio, a ratio below 1 (the numbers fall), and a ratio of exactly 1 (nothing changes). Hints, in order: Set $b$ to 3. / The count at 2 hours is the table value at $x = 4$. / Set $b$ to 0.5. Is each value still a fixed multiple of the one before? / Set $b$ to 1 and look at the table. For students who need more support: A table with an extra row for each step: '+?' on one row and '×?' on the next. Fill both for 2, 4, 8, 16 and for 2, 4, 6, 8 so the contrast is visible. For early finishers: Find a ratio that makes the germs reach 10,000 after 3 half-hours from 100. Is it a whole number? Then: can an exponential table ever be the same as a linear one? (Only with ratio 1.) The hard part, on purpose: Checking differences instead of ratios. Ask 'what do I do to this number to get the next one?', adding or multiplying, before any dividing. When students get stuck: A student checks the differences to see if a table is exponential (Priya's mistake). Ask: What do you do to 3 to get 6, and to 6 to get 12: add or multiply? Fix: Write ÷ under each arrow: 6 ÷ 3, 12 ÷ 6, 24 ÷ 12. Differences test a line; ratios test an exponential. / A student says 4 hours is only twice as bad as 2 hours. Ask: How many half-hours is 2 hours? And 4 hours? How many extra doublings is that? Fix: Count the doublings: 4 for the first 2 hours, 4 more for the next 2. Four more doublings is × 16. / A student thinks a falling table (80, 40, 20, 10) can't be exponential. Ask: What do you multiply 80 by to get 40? Fix: Multiply by 0.5 each time. A ratio below 1 is still a constant ratio. -->

<!-- Speaker note: Teacher: before the ratio of 1, ask what multiplying by 1 does. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Next value

**The table goes $6, 18, 54, 162$. What comes next?**

* Answer: 486

<!-- Speaker note: 18 ÷ 6 = 3, so each value is 3 times the one before: 162 × 3 = 486. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Decay

**The table goes $80, 40, 20, 10$. What do you multiply by each time?**

* Answer: 0.5

<!-- Speaker note: 40 ÷ 80 = 0.5, and 20 ÷ 40 = 0.5. Each value is half the one before. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which one?

**Which table is exponential?**

- $5, 10, 15, 25$
- $5, 11, 17, 23$
- $5, 10, 20, 40$

* Answer: $5, 10, 20, 40$

<!-- Speaker note: 5, 10, 20, 40 multiplies by 2 every time. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: the line $y = 3x + 2$. How much does $y$ go up each time $x$ goes up by 1?**

* Answer: 3

<!-- Speaker note: m = 3: a line adds the same amount each step. That's the difference between a line and an exponential. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the sandwich



- **4 hours against 2:** Back to the picnic. Work this out on paper first, then type your answer.
- **Twice as risky?:** The rule's numbers come from food scientists, and the model here is made up. But the shape is the point: with multiplying, the last hours add far more than the 

<!-- Speaker note: What this step is for: Coming back to the picnic: the doubling model says 4 hours is 16 times as many germs as 2 hours, not twice as many. Hints, in order: 2 hours is 4 half-hours; 4 hours is 8 half-hours. / Start from 100 and double that many times. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A table goes 3, 12, 48, 192. Is it linear or exponential? What is the next value?**

* Exponential: each value is 4 times the one before. The next value is 768.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: the graph of an exponential (y-intercept, growth or decay, the line it never reaches), then reading the rule y = a(bˣ) from a graph, then solving equations where x is the power. Where it leads in class: compound interest and depreciation (the same percentage each year), and half-life in science. -->
