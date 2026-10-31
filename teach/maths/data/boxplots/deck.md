---
marp: true
theme: default
html: true
---

# Boxplots

Data and chance · Year 10: boxplots

<!-- Speaker note: Students draw and read a boxplot from the five numbers: the box is the middle half, the bar is the median, the whiskers reach the furthest values inside the 1.5 × IQR fences, and values beyond them are outliers (AC9M10ST02, node 2). About 45 minutes (Predict and Run 8 min · Investigate 14 min · Modify 10 min · Practise and Make 13 min). -->

---

## Today

- I can say what each part of a boxplot shows.
- I can find the fences and say whether a value is an outlier.
- I can read how late a normal day is from the box.

<!-- Speaker note: Before class: Students need the five numbers from the previous lesson. This is a hinge lesson: students who misread the median bar or read box width as how many values there are can't compare distributions in the next lesson. The board draws a boxplot with the median-of-halves quartiles from the previous lesson. With `outliers: on` the whiskers stop at the last value inside the fences (upper quartile + 1.5 × IQR and lower quartile − 1.5 × IQR) and a cross marks each outlier; a value exactly on a fence is not an outlier. The 1.5 rule is a convention that the lesson states, not something students derive; it is a fine moment to say that other rules exist. The bus, its minutes late and the second route are made up for the task. The library entry (bus-lateness) suggests the class records two real routes for a few weeks and checks the comparison holds; that is a good real-data follow-up. Teacher: Paper: the fence try-one and the Make are worked on paper first. -->

---

## Why it matters

> You catch Route 1 to school, and it's late sometimes. How late is it on a normal day?

<!-- Speaker note: The Route 1 bus app gives the minutes the bus was late on each of the last 11 school days: 0, 1, 2, 2, 3, 4, 4, 5, 6, 8 and 15 (made up for the task). One bad day looks bad, but you want to know about the normal days. A boxplot shows the middle half of the days as a box, with a bar at the median. Have a guess where the box would start and end, and we'll check. <figure class="situation" role="img" aria-label="A dot plot of Route 1's lateness on 11 days, on a number line from 0 to 16 minutes. The dots are at 0, 1, 2, 2, 3, 4, 4, 5, 6, 8 and 15. A question mark and a dashed bracket above the dots ask where the box of a boxplot would start and end."><svg viewBox="0 0 420 150" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="12"><line x1="30" y1="110" x2="390" y2="110" stroke-width="1.5"/><g stroke-width="1.2"><line x1="40" y1="106" x2="40" y2="114"/><line x1="106" y1="106" x2="106" y2="114"/><line x1="172" y1="106" x2="172" y2="114"/><line x1="238" y1="106" x2="238" y2="114"/><line x1="304" y1="106" x2="304" y2="114"/><line x1="370" y1="106" x2="370" y2="114"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="130">0</text><text x="106" y="130">3</text><text x="172" y="130">6</text><text x="238" y="130">9</text><text x="304" y="130">12</text><text x="370" y="130">15</text><text x="210" y="146" font-size="11" opacity="0.8">minutes late</text></g><g fill="#D85A30" stroke="none"><circle cx="40" cy="100" r="5"/><circle cx="62" cy="100" r="5"/><circle cx="84" cy="100" r="5"/><circle cx="84" cy="88" r="5"/><circle cx="106" cy="100" r="5"/><circle cx="128" cy="100" r="5"/><circle cx="128" cy="88" r="5"/><circle cx="150" cy="100" r="5"/><circle cx="172" cy="100" r="5"/><circle cx="216" cy="100" r="5"/><circle cx="370" cy="100" r="5"/></g><text x="210" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><path d="M80 66 v-12 h260 v12" stroke-width="1.6" stroke-dasharray="5 4"/></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A boxplot's box covers the middle half of the days. Where would the box start and end for Route 1?**

- From 3 to 5
- From 1 to 8
- From 2 to 6
- From 0 to 15, all the days

<!-- Speaker note: What happens: From 2 to 6. The lower quartile is 2 and the upper quartile is 6, so half the days fall in the box. The median bar sits at 4. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. Hold the picture up and ask where half the days sit. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Fboxplots%2Fstep-2&code=widget%3A+data%0Avalues%3A+0%2C+1%2C+2%2C+2%2C+3%2C+4%2C+4%2C+5%2C+6%2C+8%2C+15%0Arange%3A+0%2C+20%0Astep%3A+1%0Aedit%3A+on%0Aview%3A+box%0Adots%3A+on%0Aoutliers%3A+on%0Alabel%3A+Minutes+late%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/boxplots/?full=step-2#step-2)

<!-- Speaker note: The box runs from the lower quartile to the upper quartile, the thick bar is the median, and the whiskers reach the lowest and highest values that aren't outliers. A cross marks an outlier. -->

<!-- Speaker note: Teacher: ask which number will change before anyone edits the 15. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* From 2 to 6. The lower quartile is 2 and the upper quartile is 6, so half the days fall in the box. The median bar sits at 4.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Reading the fences

Now try one on paper: a bus's lateness has five numbers 1, 3, 4, 8 and 20 minutes. Work out the upper fence and decide whether the 20 is an outlier.

$$0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 15$$

1) $\text{lowest } 0,\ Q_1 = 2,\ \text{median } 4,\ Q_3 = 6,\ \text{highest } 15$ — The five numbers.
2) $6 - 2 = 4$ — The box's length, the interquartile range.
3) $6 + 1.5 \times 4 = 12$ — The upper fence: values beyond it are outliers.
4) $15 > 12$ — So 15 is an outlier. It is drawn as a cross.
5) $\text{upper whisker to } 8$ — The whisker stops at the highest value inside the fence.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 15 and say "Route 1's eleven days, in order." Line 1: write lowest 0,Q_1 = 2,median 4,Q_3 = 6,highest 15 and say "The five numbers." Line 2: write 6 - 2 = 4 and say "The box's length, the interquartile range." Line 3: write 6 + 1.5 × 4 = 12 and say "The upper fence: values beyond it are outliers." Line 4: write 15 > 12 and say "So 15 is an outlier. It is drawn as a cross." Line 5: write upper whisker to 8 and say "The whisker stops at the highest value inside the fence." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading the fences

**A bus's lateness has five numbers 1, 3, 4, 8 and 20 (minutes, made up). What is the upper fence, and is 20 an outlier?**

* Answer: $8 - 3 = 5$ (the interquartile range, upper quartile take away lower quartile); $1.5 \times 5 = 7.5$ (the distance allowed beyond the box); $8 + 7.5 = 15.5$ (the upper fence); $20 &gt; 15.5$, so 20 is an outlier (it is beyond the fence)

<!-- Speaker note: IQR = 8 − 3 = 5, and 1.5 × 5 = 7.5, so the upper fence is 8 + 7.5 = 15.5. The 20 is beyond it, so it is an outlier. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Box ends

**A boxplot's five numbers are 2, 5, 8, 13 and 21. Which two numbers are the ends of the box?**

- 5 and 13
- 2 and 21
- 5 and 8
- 8 and 13

* Answer: 5 and 13

<!-- Speaker note: The box runs from the lower quartile (5) to the upper quartile (13), with the median bar at 8. The whiskers reach to 2 and 21 if neither is an outlier. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Dev compares two bus routes' boxplots. Click the line where the reading goes wrong.**

```
 1  Route 1's box runs from 2 to 6 minutes late.
 2  Route 2's box runs from 4 to 6 minutes late, so it is narrower.
 3  A narrower box means fewer buses ran on Route 2.
 4  So Route 1 is the busier route.
```

* Answer: line 3

<!-- Speaker note: Line 3: the width of a box is how far apart the quartiles are, so it shows the spread of the middle half. Each box holds half of that route's days, whatever its width. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The median bar

**The median bar in a boxplot sits close to the left end of the box (the quartiles are 3 and 12 and the median is 5). What does this tell you?**

- The data has no outliers
- The mean equals the median
- The values between 3 and 5 are bunched closer together than the values between 5 and 12
- More days are on the left than on the right

* Answer: The values between 3 and 5 are bunched closer together than the values between 5 and 12

<!-- Speaker note: A quarter of the days lie on each side of the median. If the median is near the left end, that quarter is squeezed into a small range, while the other quarter is spread out more. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the data



- **A smaller late day:** 
- **All the same:** 
- **Exactly on the fence:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/boxplots/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Moving a value or flattening the data shows when a whisker grows to meet a value, and what happens when every value is the same. Hints, in order: Every value is 5, so the lowest, the quartiles, the median and the highest are all 5. / 5 − 5. / A value exactly on the fence isn't beyond it. / The upper fence is 12. For students who need more support: Mark the five numbers on a number line on paper first, draw the box between the quartiles, then add the median bar and whiskers. For early finishers: Make up five values that give an IQR of zero but a range of 10. Draw the boxplot. The hard part, on purpose: Reading the box as how many values there are, or the whiskers as the box. Ask: what fraction of the days is inside the box, whatever its length? When students get stuck: A student says the box is where most of the values are, so a wider box has more values. Ask: How many of the 11 days are inside the box, and would that change if the box were wider? Fix: About half of the days are in the box whatever its width. A wider box means the middle half is more spread out. / A student draws the whisker to the outlier. Ask: Is that value beyond the fence? Fix: If it is, mark it with a cross and stop the whisker at the highest value inside the fence. / A student uses 1.5 × the median for the fence. Ask: What does the fence measure from, and what is it a multiple of? Fix: It measures from the box's end, a distance of 1.5 times the IQR. -->

<!-- Speaker note: Teacher: all-the-same and the value on the fence are the edge cases. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Box length

**A boxplot's five numbers are 4, 9, 13, 20 and 31. What is the interquartile range?**

* Answer: 11

<!-- Speaker note: The quartiles are 9 and 20, so the IQR is 20 − 9 = 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Upper fence

**For those five numbers (4, 9, 13, 20, 31), what is the upper fence?**

* Answer: 36.5

<!-- Speaker note: 20 + 1.5 × 11 = 20 + 16.5 = 36.5. The highest value, 31, is inside it, so it isn't an outlier. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: nine values in order are 3, 5, 8, 10, 12, 14, 17, 19 and 25. What is the lower quartile?**

* Answer: 6.5

<!-- Speaker note: The median is 12. The lower half is 3, 5, 8, 10 and its median is (5 + 8) ÷ 2 = 6.5. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: how late is a normal day?



- **The outlier:** Work this out on paper first, then type your answer.
- **A normal day:** The bus and its days are made up for the task. **Also used in** - **Waiting times.** Hospitals, call centres and train operators report how long people wait wit

<!-- Speaker note: What this step is for: Back to Route 1: decide whether the 15-minute day is an outlier and say how late a normal day is. Hints, in order: Quartiles first: lower five 0, 1, 2, 2, 3 and upper five 4, 5, 6, 8, 15. / Q3 + 1.5 × IQR. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A boxplot's five numbers are 5, 8, 12, 20 and 41. What is the upper fence, and is 41 an outlier?**

* IQR = 12; fence = 20 + 18 = 38; 41 is beyond it, so it's an outlier.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10ST02 (node 2; a hinge). Where it leads: comparing distributions with boxplots (next), where two routes sit one above the other. -->
