---
marp: true
theme: default
html: true
---

# Given

Data and chance · Year 10: conditional chance

<!-- Speaker note: Students read 'given', 'if … then' and 'knowing that' as pointing at a smaller group, and find the chance inside it. They see that P(rain | cloudy) and P(cloudy | rain) use different groups. The context is 100 made-up spring days sorted by rain and cloudy mornings (AC9M10P01, node 1). About 45 minutes (Predict and Run 10 min · Investigate 15 min · Modify 8 min · Practise and Make 12 min). Sources: Interpreting BOM forecasts (FarmPoint, Tasmanian Government): chance of rain is the likelihood of more than the minimum measurable rainfall (0.2 mm), https://farmpoint.tas.gov.au/news/interpreting-bom-forecasts (checked 22 October 2026); Made up for this lesson: the 100 days with their rain and cloudy-morning counts, and the bike, scooter, netball and sport counts., https://tutorials.learningwaypoints.com/maths/data/given/ (checked 25 October 2026). -->

---

## Today

- I can say which event is given and which is asked about.
- I can find a chance inside the group the 'given' picks.
- I can say why P(A | B) and P(B | A) are usually different.

<!-- Speaker note: Before class: Do the Run board yourself first. Students need and / or from a Venn diagram (Year 9) and a two-way table. The one idea: "given" shrinks the whole to one group. Everything else is a count inside that group. The Venn board fades the days outside the group and says "of the g in the group, h are chosen". The notation P(A | B) is introduced here as a way of writing the words; it is not a formula. The language forms to put side by side: "given", "if … then", "knowing that", "of the". 'Of' is the odd one out: "of the cloudy mornings, how many had rain" is the same as "given a cloudy morning". Every count is made up: the 100 days, the cloudy mornings, the bike, scooter, sport and netball counts. The one real fact is what a forecast chance of rain means (more than the gauge's smallest measurable rainfall, 0.2 mm), from FarmPoint. This matters for the opening: the 0.4 here is a count from the town's days, not a forecast. Teacher: Paper: the sport try-one and the forecast Make are worked on paper first. Look for the group named in the first line. -->

---

## Why it matters

> The sky is grey this morning. Should that change what you say about the chance of rain this afternoon?

<!-- Speaker note: A forecast chance of rain is the likelihood of more than the smallest rainfall a gauge can measure, 0.2 mm ([Interpreting BOM forecasts, FarmPoint](https://farmpoint.tas.gov.au/news/interpreting-bom-forecasts), checked 22 October 2026). A forecaster also knows things about the morning. This lesson uses 100 spring days in a town. The numbers are made up. Every day is sorted by two questions: did it rain, and was the morning cloudy? -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Look at the picture. Rain fell on 40 of the 100 days and 50 mornings were cloudy; 30 days had both. Which is bigger: the chance of rain, given a cloudy morning, or the chance of a cloudy morning, given rain?**

- Rain given cloudy is bigger
- They are equal, because both use the same 30 days
- Cloudy given rain is bigger

<!-- Speaker note: What happens: Cloudy given rain is bigger. Given rain, look at the 40 rainy days: 30 of them had a cloudy morning, which is 30/40 = 0.75. Given a cloudy morning, look at the 50 cloudy days: 30 of them had rain, 30/50 = 0.6. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Many choose 'equal' because the 30 days appear in both. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Fgiven%2Fstep-2&code=widget%3A+venn%0Alabels%3A+Rain%2C+Cloudy%0Acounts%3A+10%2C+30%2C+20%2C+40%0Agiven%3A+b%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/given/?full=step-2#step-2)

<!-- Speaker note: The words after "given" say what you know. Everything that does not fit is left out, so the whole is no longer the 100 days. It is the 50 cloudy ones. -->

<!-- Speaker note: Teacher: ask students to say the group out loud before they read the board. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Cloudy given rain is bigger. Given rain, look at the 40 rainy days: 30 of them had a cloudy morning, which is 30/40 = 0.75. Given a cloudy morning, look at the 50 cloudy days: 30 of them had rain, 30/50 = 0.6.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Two ways to say it

In this lesson $P(\text{rain} \mid \text{cloudy})$ is read "the chance of rain, given a cloudy morning". Words such as "given", "if", "knowing that" and "of the" all do the same job: they point at the group you look in.

Now try one on paper first, with the example beside you. In a different survey (made up), 50 students were asked about two sports. Then type your answer.

$$P(\text{bike} \mid \text{scooter})$$

1) $10 \text{ of the } 16 \text{ scooter owners also own a bike}$ — Count the students with both, but only inside that group.
2) $P(\text{bike} \mid \text{scooter}) = \tfrac{10}{16} = \tfrac{5}{8}$ — The part over the group.
3) $P(\text{scooter} \mid \text{bike}) = \tfrac{10}{24} = \tfrac{5}{12}$ — Swap the words and the group changes to the 24 bike owners, so the answer changes.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write P(bike scooter) and say "In a survey of 40 students (made up), 24 own a bike, 16 own a scooter and 10 own both. Read "given scooter": the scooter owners are the group." Line 1: write 10 of the 16 scooter owners also own a bike and say "Count the students with both, but only inside that group." Line 2: write P(bike scooter) = 10 ÷ 16 = 5 ÷ 8 and say "The part over the group." Line 3: write P(scooter bike) = 10 ÷ 24 = 5 ÷ 12 and say "Swap the words and the group changes to the 24 bike owners, so the answer changes." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 17px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two ways to say it

**In a survey of 50 students (made up), 30 play basketball, 20 play volleyball and 8 play both. What is the chance a student plays volleyball, given that they play basketball? Give a decimal to 2 places.**

* Answer: Given basketball: the group is the 30 basketball players (the given event picks the group); 8 of those 30 also play volleyball (count the 'both' students inside the group); $8 \div 30 = 0.27$ (the part over the group)

<!-- Speaker note: The group is the 30 basketball players, and 8 of them also play volleyball: 8 ÷ 30 = 0.27. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Ravi finds the chance of a cloudy morning, given that it rained. Click the line where he goes wrong.**

```
 1  The question: what is the chance of a cloudy morning, given that it rained?
 2  The days with both rain and a cloudy morning: 30.
 3  "Given" means I look at the cloudy mornings, which is 50 days.
 4  30 ÷ 50 = 0.6.
 5  So the chance of a cloudy morning, given rain, is 0.6.
```

* Answer: line 3

<!-- Speaker note: Line 3: the thing given is rain, so he should look at the 40 days with rain, not the 50 cloudy mornings. 30 ÷ 40 = 0.75. He answered the question for the other direction. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading the sentence

**'The chance a student plays sport, knowing that they walk to school.' Which group do you look inside?**

- The students who walk to school
- The students who play sport
- The students who do both
- All the students

* Answer: The students who walk to school

<!-- Speaker note: 'Knowing that they walk' is the given part, so you look at the walkers and ask how many of them play sport. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change what is given



- **Clear morning:** 
- **Given rain:** 
- **Nothing to look at:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/given/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing the given group changes the whole and so the chance. At the edge, a given group with nothing in it leaves no chance to work out. Hints, in order: The board is given 'not cloudy', the clear mornings. Choose the Rain parts. / Only the Rain only part is inside the clear mornings. / The group is the 40 rainy days. Choose the Cloudy parts. For students who need more support: A printed Venn diagram and table. The student shades the given group first and crosses out the rest. For early finishers: A test can give a result called 'positive' for people who do and do not have a condition. Say in words what 'the chance of a positive test, given the person has the condition' and 'the chance of having the condition, given a positive test' mean. Which one would you want a doctor to tell you? The hard part, on purpose: Dividing by all the days instead of the group. Ask: 'Given what? Which days are left once you know that?' When students get stuck: A student divides by 100 whatever the question says. Ask: Once you know it was cloudy, which days are still possible? Fix: Cross out the days that do not fit the given, then count what is left. / A student says P(rain | cloudy) and P(cloudy | rain) are the same because the same 30 days are in both. Ask: What is the group in each? How big is each group? Fix: Same top, different bottom: 30/50 and 30/40. / A student reads 'given' as 'and' and answers 0.3. Ask: Is that out of all the days or only the cloudy ones? Fix: 'And' keeps the whole at 100. 'Given' shrinks the whole to the group. -->

<!-- Speaker note: Teacher: before the empty board, ask 'if no day had rain, which days would you look at?' -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Clear mornings

**Of the 100 days, 40 had a clear morning and, of those, 8 had rain (made up). What is the chance of rain, given a clear morning? Give a decimal.**

* Answer: 0.2

<!-- Speaker note: 8 ÷ 40 = 0.2. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hockey given netball

**In a class of 30, 18 play netball, 12 play hockey and 6 play both (made up). What is P(hockey | netball), as a decimal?**

* Answer: 0.33

<!-- Speaker note: Given netball, the group is 18 students and 6 also play hockey: 6 ÷ 18 = 0.33. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A review

**Review: use the 100 spring days (10 rain only, 30 both, 20 cloudy only, 40 neither). What is P(rain or cloudy)? Give a decimal.**

* Answer: 0.6

<!-- Speaker note: 10 + 30 + 20 = 60 of 100 days had rain or a cloudy morning: 0.6. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the forecast



- **The forecast:** Work this out on paper first, then type your answer.
- **What the table says:** Sources: the meaning of "chance of rain" is from [FarmPoint](https://farmpoint.tas.gov.au/news/interpreting-bom-forecasts) (checked 22 October 2026). The 100 da

<!-- Speaker note: What this step is for: Returning to the opening: a cloudy morning lets you say something more exact than the chance of rain on any day. A good report names the given group and compares the two chances. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Of 60 students, 24 play football and 9 play football and tennis. What is the chance a football player plays tennis? What is the chance a tennis player plays football if 18 play tennis?**

* 9/24 = 0.375, then 9/18 = 0.5. The group changes, so the answer changes.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10P01 node 1. Where it leads: reading conditional chances from tables, Venn diagrams and trees (next lesson), and deciding whether two events are independent. -->
