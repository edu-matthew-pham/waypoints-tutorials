---
marp: true
theme: default
html: true
---

# Putting it back, or not

Data and chance · Year 9: chance

<!-- Speaker note: When something drawn is put back the choices stay the same; when it is not, they shrink. Listing the outcomes both ways shows what changes. About 40 minutes (Predict and Run 8 min · Investigate 10 min · Modify 10 min · Practise and Make 12 min). -->

---

## Today

- I can say whether a draw is with or without put-back.
- I can list and count the outcomes both ways.
- I can explain why the second choice shrinks.

<!-- Speaker note: Before class: Students need the last lesson. The one idea: without put-back the second choice has one fewer outcome. The board's grid shows the empty diagonal. Probabilities are found by counting equally likely outcomes; multiplying along branches is Year 10. Class sizes here are made up. -->

---

## Why it matters

> Two names come out of a hat for the class jobs. Can the same name come out twice?

<!-- Speaker note: Two names are drawn from a hat for two class jobs. If the first name goes back in, the same name could be drawn again. If it stays out, it cannot. Have a guess how much that changes the chance that both jobs go to people from your table of 5 (25 names in the hat, made up for the task), and we'll come back to it at the end. <figure class="situation" role="img" aria-label="A hat of names; one name is drawn and set aside"><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><text x="20" y="40" fill="currentColor" stroke="none">Hat of names</text><rect x="20" y="55" width="110" height="50" rx="8" stroke-width="2"/><text x="150" y="85" fill="currentColor" stroke="none">→ first name drawn: Ana</text><text x="150" y="110" fill="currentColor" stroke="none">stays out? or goes back?</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Two names are drawn from Ana, Ben, Cai and Dee for two different jobs, and the first name is NOT put back. How many outcomes (first job, second job) are there?**

- 8
- 12
- 16

<!-- Speaker note: What happens: 12. The first job can go to any of 4 people, then the second to any of the 3 left: 4 × 3 = 12. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Fwith-and-without-replacement%2Fstep-2&code=widget%3A+events%0Afirst%3A+Ana%2C+Ben%2C+Cai%2C+Dee%0Asecond%3A+Ana%2C+Ben%2C+Cai%2C+Dee%0Anames%3A+First+job%2C+Second+job%0Aview%3A+both%0Areplace%3A+off%0Atarget%3A+a+%3D+Ana+or+b+%3D+Ana%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/with-and-without-replacement/?full=step-2#step-2)

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 12. The first job can go to any of 4 people, then the second to any of the 3 left: 4 × 3 = 12.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Count the draws

$$\text{4 names, first not put back}$$

1) $4 \times 3 = 12 \text{ outcomes}$ — 4 choices, then 3 left.
2) $P(\text{Ana first, then Ben}) = \tfrac{1}{12}$ — One of the 12 equally likely outcomes.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 4 names, first not put back and say "A draw with no put-back." Line 1: write 4 × 3 = 12 outcomes and say "4 choices, then 3 left." Line 2: write P(Ana first, then Ben) = 1 ÷ 12 and say "One of the 12 equally likely outcomes." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the draws

**5 names are in a hat and two are drawn for two jobs, with nothing put back. How many outcomes are there?**

* Answer: 20

<!-- Speaker note: 5 choices for the first job, 4 for the second: 5 × 4 = 20. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Both jobs the same

**Two names are drawn from Ana, Ben, Cai and Dee, and the first is not put back. What is the number of outcomes where Ana gets both jobs?**

- 0
- 1
- 3
- 4

* Answer: 0

<!-- Speaker note: None: once Ana is out of the hat she cannot be drawn again. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Priya finds how many outcomes there are when 2 of 5 names are drawn for two jobs, with nothing put back. Click the line where she goes wrong.**

```
 1  5 names are in the hat and two are drawn for two jobs.
 2  The first name is not put back, but there are still 5 names for the second job, so 5 × 5 = 25.
 3  So there are 25 outcomes.
```

* Answer: line 2

<!-- Speaker note: Line 2: the first name is not put back, so the second job has only 4 names to choose from. 5 × 4 = 20, not 5 × 5. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Back in or out



- **Same name twice:** 
- **Ben second:** 
- **Which has more:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/with-and-without-replacement/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Setting the same draw with and without put-back side by side shows the count and the chance both change. For students who need more support: A printed copy of the situation and a blank table to fill in. For early finishers: Three names drawn in a row with no put-back from 6: how many outcomes? The hard part, on purpose: Keeping 4 choices for the second draw. Ask: if Ana is out of the hat, who is left? When students get stuck: A student writes 5 × 5 for two names drawn from 5. Ask: If Ana is out, can she be drawn again? Fix: The second job has 4 names left: 5 × 4. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Ordered prizes

**8 people are in a group and 2 of them get a prize each, in order, with no repeat. How many ordered outcomes are there?**

* Answer: 56

<!-- Speaker note: 8 × 7 = 56. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Both from your table

**8 people are in a group. 3 are from your table. How many ordered outcomes have both prize winners from your table?**

* Answer: 6

<!-- Speaker note: 3 × 2 = 6 (the first from the 3, the second from the 2 left). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: 30 students, 18 play netball, 10 play hockey, 4 play both. How many play neither?**

* Answer: 6

<!-- Speaker note: 14 + 4 + 6 = 24 play something, so 30 − 24 = 6. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the hat

Compare with putting the name back: would the chance of both from your table go up or down?

**Also used in**

- **Card games.** Cards are dealt and not put back, so each card changes what is left.
- **Quality checks.** A tester pulls two items from a box without putting them back, and the chance of a faulty second depends on the first.
- **Next lesson.** Giving every outcome a probability and checking they add to 1.

<!-- Speaker note: What this step is for: Returning to the opening: the chance both names come from your table, found by counting outcomes on paper. -->

<!-- Speaker note: Teacher: the working is done on paper first. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**4 names, two drawn with no put-back. How many outcomes?**

* 12.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M9P01 node 2. Where it leads: probabilities for every outcome (next). -->
