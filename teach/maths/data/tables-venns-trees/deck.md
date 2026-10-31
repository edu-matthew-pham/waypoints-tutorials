---
marp: true
theme: default
html: true
---

# Tables, Venns and trees

Data and chance · Year 10: conditional chance

<!-- Speaker note: Students fill in a two-way table for 1000 people from stated rates, read the chance of the condition given a positive test inside the Positive column, and see the same four counts as a Venn diagram and a tree. The context is a made-up screening test for a rare condition (AC9M10P01, node 2). About 50 minutes (Predict and Run 10 min · Investigate 18 min · Modify 8 min · Practise and Make 14 min). Sources: Made up for this lesson: the 1000 people, the condition, the test and its rates, the phone-case scanner and the sport counts. A real test's rates come from its maker and a doctor looks them up., https://tutorials.learningwaypoints.com/maths/data/tables-venns-trees/ (checked 25 October 2026). -->

---

## Today

- I can build a two-way table from rates by starting with a group of people.
- I can read a chance given a group off a table, a Venn diagram or a tree.
- I can say why a test that is usually right can be wrong most of the time it says positive.

<!-- Speaker note: Before class: Do the Run board and the tree yourself first. Students need the last lesson (given). The one idea: start from a group of 1000, turn each rate into a count, and read the chance inside the group the "given" picks. The tree shows the same four counts: each first branch is the share of 1000, each second branch is the share of its own group (that is the conditional chance on the branch), and the numbers at the leaves are the counts. Multiplying along a branch is shown by the branch labels and the counts agreeing, not taught as a rule here. Every rate is made up: 2 in 100 have the condition, 9 in 10 of them test positive, 1 in 20 of the others do. They are chosen so 1000 people give whole counts (18, 2, 49, 931). Say clearly that real test rates come from the maker and a doctor looks them up; no real condition is named on purpose. The surprising answer (about 1 in 4) is the point. It depends on how rare the condition is. Do the Modify board to see it move: with fewer false alarms the chance rises to 0.56; with none it is 1. Teacher: Paper: the scanner is worked first as the example. The second test and the Make table are worked on paper first. Look for the table and the group named in the first line. -->

---

## Why it matters

> A screening test comes back positive. Does that mean the person has the condition?

<!-- Speaker note: Doctors use screening tests on people who feel well. In this lesson, a test is made up for a rare condition. Every rate is made up: a real test's rates come from the people who make it, and a doctor looks them up. Of every 1000 people, 20 have the condition. The test is positive for 9 in 10 of the people who have it, and, wrongly, for 1 in 20 of those who don't. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**1000 people take the test. Someone is told they tested positive. About how likely is it that this person really has the condition?**

- About 9 in 10
- About 1 in 4
- About 1 in 2
- About 1 in 20

<!-- Speaker note: What happens: About 1 in 4. Of the 1000 people, 18 who have the condition test positive, and so do 49 of the 980 who don't. That is 67 positives, and 18 of them have the condition: 18/67 = 0.27. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands. Most students choose 'about 9 in 10'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Ftables-venns-trees%2Fstep-2&code=widget%3A+venn%0Alabels%3A+Condition%2C+Positive%0Acounts%3A+2%2C+18%2C+49%2C+931%0Agiven%3A+b%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/tables-venns-trees/?full=step-2#step-2)

<!-- Speaker note: The table has the same four numbers as the diagram. Look down the Positive column: 18 and 49. Together they are the 67 who tested positive. -->

<!-- Speaker note: Teacher: ask students to say the group out loud: the positives, not the 1000. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* About 1 in 4. Of the 1000 people, 18 who have the condition test positive, and so do 49 of the 980 who don't. That is 67 positives, and 18 of them have the condition: 18/67 = 0.27.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Fill in the table

**The test is positive for 18 people who have the condition and for 49 who don't. Out of the 1000 people, how many test positive?**

* Answer: 67

<!-- Speaker note: 18 + 49 = 67 people test positive. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Given a positive test

A table, a Venn diagram and a tree all show the same four counts. Here is how to read the chance off a table.

Now try one on paper first, with the example beside you. This test is also made up. Then type your answer.

$$\text{A scanner checks 1000 phone cases (made up). 40 are faulty.}$$

1) $36 \text{ faulty cases are flagged; } 48 \text{ of the } 960 \text{ good cases are flagged too}$ — Fill in the table from the rates: the flagged column holds 36 and 48.
2) $36 + 48 = 84 \text{ cases are flagged}$ — "Given a flag" picks this group.
3) $P(\text{faulty} \mid \text{flagged}) = \tfrac{36}{84} = \tfrac{3}{7}$ — The faulty cases inside the group, over the group.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write A scanner checks 1000 phone cases (made up). 40 are faulty. and say "Start from a group and sort it by the two things: faulty or not, flagged or not." Line 1: write 36 faulty cases are flagged; 48 of the 960 good cases are flagged too and say "Fill in the table from the rates: the flagged column holds 36 and 48." Line 2: write 36 + 48 = 84 cases are flagged and say ""Given a flag" picks this group." Line 3: write P(faulty flagged) = 36 ÷ 84 = 3 ÷ 7 and say "The faulty cases inside the group, over the group." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 19px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Given a positive test

**A different screening test (made up). Of 1000 people, 50 have the condition. The test is positive for 45 of those 50 and, wrongly, for 38 of the 950 others. Given a positive test, what is the chance the person has the condition? Give a decimal to 2 places.**

* Answer: All the positives: $45 + 38 = 83$ (the group the 'given' picks); Positives with the condition: $45$ (the count you want inside the group); $45 \div 83 = 0.54$ (the part over the group)

<!-- Speaker note: 83 people test positive, 45 of them have the condition: 45 ÷ 83 = 0.54. About 1 in 2. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Maya finds the chance a person has the condition, given a positive test. Click the line where she goes wrong.**

```
 1  The test says positive. I want the chance the person has the condition.
 2  Of the 20 people who have it, 18 test positive. That is 9 in 10.
 3  So the chance of having the condition, given a positive test, is 9 in 10 = 0.9.
 4  That means a positive result is right nine times out of ten.
```

* Answer: line 3

<!-- Speaker note: Line 3: 9 in 10 is the chance of a positive test, given the condition. She needs the chance of the condition, given a positive test, and the positives include 49 people without it: 18 out of 67. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the test



- **The tree:** 
- **A better test:** 
- **No false alarms:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/tables-venns-trees/?full=step-4#step-4)

<!-- Speaker note: What this step is for: A tree shows the same four counts as the table, with each branch's chance on it. Changing the test changes the false alarms and so the chance given a positive. At the edge, with no false alarms, every positive is real. Hints, in order: Click the two outcomes with a Positive test. / Positive on the Yes branch is 18 people. Positive on the No branch is 49. / Choose the two positive outcomes on the tree to find the number of positives, then divide the condition's positives by it. / The No branch has no Positive leaf, so the tree drops it. For students who need more support: A blank table with the row and column totals already filled in (20, 980, 67, 933). The student fills the four inside cells. For early finishers: Find the chance of having the condition, given a negative test. What does a negative result tell you? Then ask what would happen to the chance given a positive if the condition were twice as common. The hard part, on purpose: Taking 'right 9 times in 10' as the chance given a positive. Ask: 'Of all the people who tested positive, who are they?' When students get stuck: A student answers 0.9 for the chance of the condition given a positive. Ask: Which of the 1000 people tested positive? Are they all people with the condition? Fix: Count all the positives, 18 + 49, and use that as the group. / A student divides by 1000. Ask: Once you know the test was positive, which people are still possible? Fix: Cross out everyone who tested negative. The 67 left are the whole. / A student gets 49 false alarms by taking 1 in 20 of 1000. Ask: Who can be wrongly positive: people with the condition or without it? Fix: Only the 980 without the condition: 980 ÷ 20 = 49. -->

<!-- Speaker note: Teacher: ask for a prediction before each board: will the chance go up or down? -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Given a positive

**Of 1000 people (made up), 100 have a condition. The test is positive for 90 of them and wrongly for 90 of the 900 others. Given a positive test, what is the chance the person has the condition? Give a decimal.**

* Answer: 0.5

<!-- Speaker note: 180 people test positive and 90 have the condition: 90 ÷ 180 = 0.5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Given the condition

**Using the lesson's counts (18 have the condition and test positive, 2 have it and test negative, 49 don't have it and test positive, 931 don't and test negative), what is the chance of a positive test, given the person has the condition? Give a decimal.**

* Answer: 0.9

<!-- Speaker note: The group is the 20 people with the condition and 18 test positive: 18 ÷ 20 = 0.9. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A review

**Review: of 100 people, 55 play sport, 30 play music and 10 play both. How many play neither?**

* Answer: 25

<!-- Speaker note: 55 + 30 − 10 = 75 play something, so 100 − 75 = 25 play neither. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: back to the positive test



- **The table:** Work this out on paper first, then type your answer.
- **What to tell a friend:** Sources: every rate and count in this lesson is made up (the condition, the test, the scanner and the sport counts). A real test's rates come from the people wh

<!-- Speaker note: What this step is for: Returning to the opening: fill in a table for 1000 people from the rates, then say what a positive result means. A good answer gives the number and puts it in words with the group. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A test is positive for 8 of the 10 people who have a condition and for 5 of the 90 who don't. Given a positive test, what is the chance a person has it?**

* 8 out of 13 positives, 8/13 = 0.62.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10P01 node 2. Where it leads: deciding whether two events are independent, and simulating a conditional chance (the lessons after this one). -->
