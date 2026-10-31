---
marp: true
theme: default
html: true
---

# Independent or not?

Data and chance · Year 10: conditional chance

<!-- Speaker note: Students decide whether two events are independent by comparing the chance of one given the other with its chance on its own, from two-way tables of made-up survey counts. They see that counts mislead and rates decide, and that events that can't happen together are not independent (AC9M10P01, node 3). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: Made up for this lesson: the 100-student walking and sport survey, the rain and late-bus days, the chess and choir counts and the 120-student survey., https://tutorials.learningwaypoints.com/maths/data/independent-or-not/ (checked 25 October 2026). -->

---

## Today

- I can compare P(A | B) with P(A) to decide whether two events are independent.
- I can explain in words what independent means.
- I can say why counts can mislead and rates are compared.

<!-- Speaker note: Before class: Do the Run and Modify boards yourself first. Students need the last two lessons (given; tables, Venns and trees). The one idea: A and B are independent when P(A | B) = P(A), so knowing B tells you nothing about A. The board gives both numbers when you choose A with the given group set: c is the chance inside the group and p is the chance out of everyone. Independence is judged on these two rates. In plain words: "knowing one doesn't change the chance of the other". Independence is a matter of the numbers in the survey. It is not a statement about cause, and a small sample can make independent events look different. The last Make question keeps that careful. Every number is made up: the 100-student survey, the rain and late-bus days, the chess and choir survey, the new 120-student survey. Teacher: Paper: the chess survey and the Make survey are worked on paper first. Look for the group named first. -->

---

## Why it matters

> Does how a student gets to school have anything to do with whether they play a sport?

<!-- Speaker note: A class survey asks every student two things: do you walk to school, and do you play a sport? In this lesson a survey of 100 students gave the counts. The numbers are made up. If walking made no difference to playing sport, the two events would be called independent. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**In the survey, 60 of the 100 students play a sport. 30 students walk to school, and 18 of those walkers play a sport. Does knowing a student walks change the chance they play a sport?**

- Yes: walkers are less likely to play a sport
- Yes: walkers are more likely to play a sport
- No: walkers are no more or less likely to play a sport

<!-- Speaker note: What happens: No. Among all 100 students the chance of sport is 60/100 = 0.6. Among the 30 walkers it is 18/30 = 0.6. They are the same. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Many students choose 'more likely'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Findependent-or-not%2Fstep-2&code=widget%3A+venn%0Alabels%3A+Walk%2C+Sport%0Acounts%3A+12%2C+18%2C+42%2C+28%0Agiven%3A+a%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/independent-or-not/?full=step-2#step-2)

<!-- Speaker note: The board gives two numbers when you choose Sport. One is the chance of sport among the walkers. The other is out of all 100 students. -->

<!-- Speaker note: Teacher: ask students to say the two rates out loud before they compare. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. Among all 100 students the chance of sport is 60/100 = 0.6. Among the 30 walkers it is 18/30 = 0.6. They are the same.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Given the choir

Here is a full comparison, with a worked example.

Now try the chess survey on paper first, with the example beside you. Then type your answer.

$$\text{100 school days (made up): rain on 20, a late bus on 25, both on 10}$$

1) $P(\text{late}) = \tfrac{25}{100} = 0.25$ — Out of all the days.
2) $P(\text{late} \mid \text{rain}) = \tfrac{10}{20} = 0.5$ — Look only at the 20 rainy days.
3) $0.5 \ne 0.25$ — The chance changes when you know it rained.
4) $\text{Not independent: a late bus depends on rain}$ — Say the answer in words.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 100 school days (made up): rain on 20, a late bus on 25, both on 10 and say "Compare the chance of a late bus on its own with the chance given rain." Line 1: write P(late) = 25 ÷ 100 = 0.25 and say "Out of all the days." Line 2: write P(late rain) = 10 ÷ 20 = 0.5 and say "Look only at the 20 rainy days." Line 3: write 0.5 0.25 and say "The chance changes when you know it rained." Line 4: write Not independent: a late bus depends on rain and say "Say the answer in words." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Given the choir

**In a different survey of 80 students (made up), 24 play chess, 20 are in the choir and 8 do both. What is the chance a student plays chess, given that they are in the choir? Give a decimal to 2 places.**

* Answer: The group is the 20 choir members (given the choir); 8 of them also play chess (the count inside the group); $8 \div 20 = 0.40$ (the part over the group)

<!-- Speaker note: 8 of the 20 choir members play chess: 0.40. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Do the chances differ

**In that survey the chance a student plays chess is $\frac{24}{80} = 0.3$, and the chance given the choir is $0.4$. What does that say?**

- Independent: both chances are small
- Independent: 8 students do both
- It cannot be said, because the survey is only one sample
- Not independent: knowing a student is in the choir changes the chance they play chess

* Answer: Not independent: knowing a student is in the choir changes the chance they play chess

<!-- Speaker note: 0.4 is not equal to 0.3, so the choir changes the chance of chess in this survey. The events are dependent. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Aiden decides whether walking to school and playing a sport are independent in the 100-student survey. Click the line where he goes wrong.**

```
 1  I want to know whether walking to school changes playing sport.
 2  18 walkers play sport, and 42 students who do not walk play sport.
 3  18 and 42 are not equal, so walking makes a difference to sport.
 4  So the two events are dependent.
```

* Answer: line 3

<!-- Speaker note: Line 3: there are many more students who do not walk (70) than walkers (30), so of course more of them play sport. He needs to compare rates: 18/30 = 0.6 and 42/70 = 0.6, which are equal. The events look independent. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Independent and not



- **Rates equal:** 
- **A late bus:** 
- **Events that cannot happen together:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/independent-or-not/?full=step-4#step-4)

<!-- Speaker note: What this step is for: The same board shows both outcomes: equal chances for independent events, different chances for dependent ones. At the edge, two events that can't both happen are not independent. Hints, in order: Choose Walk and Sport and Sport only: that is everyone who plays a sport. / c is the chance given walking, p is the chance on its own. / Now the days are sorted by rain and a late bus. The board is given rain. Choose Late. For students who need more support: A table with the rows and columns already totalled, and a sentence frame: 'Of the ___ who ___, ___ also ___. That is ___ out of ___.' For early finishers: Check the same table another way: multiply P(walk) by P(sport) and compare with P(walk and sport). Does it agree with comparing P(sport | walk) with P(sport)? The hard part, on purpose: Comparing counts (18 against 42). Ask: 'How many walkers are there, and how many students who don't walk?' When students get stuck: A student says the events are dependent because the counts differ. Ask: How many walkers are there? How many non-walkers? Is 18 out of 30 the same as 42 out of 70? Fix: Divide each count by its group before comparing. / A student says events that cannot happen together are independent. Ask: If you know a student walks, what do you know about whether they take the bus? Fix: Knowing one rules out the other, so the chance changes to 0. / A student says the events are independent because the two chances are close. Ask: How close is close enough? With 100 students, what could a different sample give? Fix: Say the two chances and what they show in this survey. Don't claim equal if they are not. -->

<!-- Speaker note: Teacher: for the last board, ask 'can a student both walk and take the bus on the same trip?' -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Equal rates

**Of 100 students, 70 play a sport. If playing sport is independent of walking to school, how many of the 40 walkers play a sport?**

* Answer: 28

<!-- Speaker note: The share is 70/100 = 0.7, so 40 × 0.7 = 28 walkers. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading a claim

**In a table of 100 days, the chance of a late bus is 0.25 and the chance of a late bus, given rain, is 0.5. Which sentence is right?**

- Rain makes the bus late, so we know rain causes it
- A late bus is more likely on rainy days, so the events are not independent
- The events are independent because 0.25 and 0.5 are both under 1
- The events are independent because rain is not a cause

* Answer: A late bus is more likely on rainy days, so the events are not independent

<!-- Speaker note: 0.5 is not equal to 0.25, so a late bus depends on rain in these days. The table shows they go together, not why. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A review

**Review: a bus was late on 6 of 40 school days (made up). What is the relative frequency of a late bus? Give a decimal.**

* Answer: 0.15

<!-- Speaker note: 6 ÷ 40 = 0.15. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the survey



- **The new survey:** Work this out on paper first, then type your answer.
- **A careful sentence:** Sources: the survey counts, the rain and late-bus days and the chess and choir counts are made up for this lesson. **Also used in** - **Bus lateness.** A term's

<!-- Speaker note: What this step is for: Returning to the opening: a new survey, one chance to find, and a careful sentence. A careful sentence says what the numbers show in this survey and does not claim more. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Of 100 students, 50 play basketball. Of the 20 students who are left-handed, 10 play basketball. Are playing basketball and being left-handed independent in this survey?**

* Yes: 10/20 = 0.5 and 50/100 = 0.5, the same.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10P01 node 3. Where it leads: simulating a conditional chance (next lesson), and 'A careful claim' in Statistics, where the same care is used for 'may be linked' against 'causes'. -->
