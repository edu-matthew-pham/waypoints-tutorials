---
marp: true
theme: default
html: true
---

# Five numbers

Data and chance · Year 10: boxplots

<!-- Speaker note: Students find the five-number summary (lowest, lower quartile, median, upper quartile, highest) by the median-of-halves method, say what each number means, and see why reports quote the middle half rather than the extremes (AC9M10ST02, node 1). About 45 minutes (Predict and Run 9 min · Investigate 14 min · Modify 10 min · Practise and Make 12 min). Sources: Median house prices explained (Westpac): medians are used for house prices because a few unusually high or low prices can skew the average, https://www.westpac.com.au/personal-banking/home-loans/median-house-prices-explained/ (checked 22 October 2026). -->

---

## Today

- I can find the five numbers of a data set.
- I can say what each of the five numbers tells you.
- I can find the interquartile range.

<!-- Speaker note: Before class: Students need the median (Year 7) and a feel for skewed data and outliers (Year 9). The ethics of data (AC9M10ST01 node 3) isn't a lesson here; it is taught in class, as the previous two lessons lead into it. This is a hinge lesson: a wrong quartile gives a wrongly drawn boxplot in the next lesson, so check every student can find the median of a half before moving on. The method here is the median of each half. With an odd number of values the middle value is left out of both halves; with an even number it is not a value at all, so nothing is left out. Different books use different conventions, and a spreadsheet's quartile function can give slightly different answers (it may interpolate), so tell students the rule this site uses before they check a result against a calculator or spreadsheet. The Year 10 curriculum's wider tier asks students to compare conventions; that is a good extension here. The suburb's sales, the canteen waiting times and the test values are made up for the task. The Westpac page is for the idea that reports use medians for house prices because a few very high or low prices skew the average. Teacher: Paper: the nine-value try-one and the Make are worked on paper first. Walk the room and check each student finds the median first. -->

---

## Why it matters

> Property reports quote the middle of the market, not the very top. How do you find it?

<!-- Speaker note: Property reports give the median price, because a few very high sales drag the mean up ([Westpac explains why](https://www.westpac.com.au/personal-banking/home-loans/median-house-prices-explained/)). A good report also says where the middle half of the sales sit. Eleven houses in one suburb sold last month for these prices, in thousands of dollars, in order: 480, 495, 510, 520, 545, 560, 590, 610, 640, 720 and 1450 (made up for the task). The median is the sixth price, 560. Have a guess where the lower quartile falls, a quarter of the way up, and we'll check at the end of the lesson. <figure class="situation" role="img" aria-label="Eleven sale prices in order from lowest to highest as eleven dots in a row, with the sixth dot marked as the median at 560. A question mark sits over the lower half: where is the lower quartile?"><svg viewBox="0 0 440 150" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="12"><line x1="20" y1="90" x2="420" y2="90" stroke-width="1.5"/><g fill="#D85A30" stroke="none"><circle cx="40" cy="90" r="6"/><circle cx="76" cy="90" r="6"/><circle cx="112" cy="90" r="6"/><circle cx="148" cy="90" r="6"/><circle cx="184" cy="90" r="6"/><circle cx="220" cy="90" r="6"/><circle cx="256" cy="90" r="6"/><circle cx="292" cy="90" r="6"/><circle cx="328" cy="90" r="6"/><circle cx="364" cy="90" r="6"/><circle cx="400" cy="90" r="6"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="116">480</text><text x="76" y="116">495</text><text x="112" y="116">510</text><text x="148" y="116">520</text><text x="184" y="116">545</text><text x="220" y="116">560</text><text x="256" y="116">590</text><text x="292" y="116">610</text><text x="328" y="116">640</text><text x="364" y="116">720</text><text x="400" y="116">1450</text></g><line x1="220" y1="52" x2="220" y2="108" stroke-width="2.4"/><text x="220" y="44" text-anchor="middle" fill="currentColor" stroke="none">median</text><text x="112" y="40" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><text x="220" y="142" text-anchor="middle" fill="currentColor" stroke="none" font-size="11" opacity="0.8">sale price (thousands of dollars), in order, not to scale</text></svg></figure> -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The lower quartile has a quarter of the sales at or below it. Which of these prices is the lower quartile of the eleven sales?**

- 495
- 510
- 520
- 545

<!-- Speaker note: What happens: 510. It is the middle of the five lowest prices (480, 495, 510, 520, 545), so about a quarter of the sales sit at or below it. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: show of hands before the check. Don't reveal the method; the Investigate does that. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fmaths%2Fdata%2Ffive-numbers%2Fstep-2&code=widget%3A+data%0Avalues%3A+480%2C+495%2C+510%2C+520%2C+545%2C+560%2C+590%2C+610%2C+640%2C+720%2C+1450%0Arange%3A+400%2C+1500%0Astep%3A+10%0Aedit%3A+on%0Aview%3A+box%0Adots%3A+on%0Alabel%3A+Sale+price+%28thousands+of+dollars%29%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/maths/data/five-numbers/?full=step-2#step-2)

<!-- Speaker note: The board draws the sales as dots, with a box from the lower quartile to the upper quartile and a bar at the median. Under it you can read the five numbers. -->

<!-- Speaker note: Teacher: ask which numbers the highest sale changed before anyone presses the button. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 510. It is the middle of the five lowest prices (480, 495, 510, 520, 545), so about a quarter of the sales sit at or below it.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Five numbers

Now try one on paper: nine waiting times in order, 2, 5, 6, 8, 9, 11, 14, 15 and 20. With nine values the median is the fifth one, and it is left out when you split into halves.

$$3, 4, 4, 6, 7, 9, 10, 12, 13, 21$$

1) $\text{lowest } 3,\ \text{highest } 21$ — The two ends.
2) $\tfrac{7 + 9}{2} = 8$ — Ten values: the median is halfway between the 5th and 6th.
3) $Q_1 = 4$ — The lower half is 3, 4, 4, 6, 7. Its median is 4.
4) $Q_3 = 12$ — The upper half is 9, 10, 12, 13, 21. Its median is 12.
5) $12 - 4 = 8$ — The interquartile range is the length of the middle half.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write 3, 4, 4, 6, 7, 9, 10, 12, 13, 21 and say "Ten waiting times in order (made up)." Line 1: write lowest 3,highest 21 and say "The two ends." Line 2: write 7 + 9 ÷ 2 = 8 and say "Ten values: the median is halfway between the 5th and 6th." Line 3: write Q_1 = 4 and say "The lower half is 3, 4, 4, 6, 7. Its median is 4." Line 4: write Q_3 = 12 and say "The upper half is 9, 10, 12, 13, 21. Its median is 12." Line 5: write 12 - 4 = 8 and say "The interquartile range is the length of the middle half." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Five numbers

**Nine students' waiting times at the canteen, in minutes and in order, are 2, 5, 6, 8, 9, 11, 14, 15 and 20 (made up). What is the interquartile range?**

* Answer: median $= 9$ (the 5th of 9) (the middle value splits the data in two); lower half $2, 5, 6, 8$ gives $Q_1 = 5.5$; upper half $11, 14, 15, 20$ gives $Q_3 = 14.5$ (the middle value is left out of both halves); $14.5 - 5.5 = 9$ (the interquartile range is $Q_3 - Q_1$)

<!-- Speaker note: Median 9; lower half 2, 5, 6, 8 has median (5 + 6) ÷ 2 = 5.5; upper half 11, 14, 15, 20 has median (14 + 15) ÷ 2 = 14.5. The IQR is 14.5 − 5.5 = 9. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Lower quartile

**Eight values in order are 4, 6, 9, 11, 14, 18, 21 and 25. What is the lower quartile?**

* Answer: 7.5

<!-- Speaker note: Eight values split into two halves of four. The lower half is 4, 6, 9, 11 and its median is (6 + 9) ÷ 2 = 7.5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Mia finds the lower quartile of nine waiting times. Click the line where the working goes wrong.**

```
 1  The nine times in order are 3, 4, 6, 7, 12, 13, 15, 16, 20, and the median is the fifth one, 12.
 2  The lowest time is 3.
 3  The lower quartile is halfway between the lowest time and the median.
 4  (3 + 12) ÷ 2 = 7.5, so the lower quartile is 7.5.
```

* Answer: line 3

<!-- Speaker note: Line 3: the lower quartile is the median of the lower half of the values, not the point halfway between the lowest value and the median. The lower half is 3, 4, 6, 7 and its median is 5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What a quartile says

**The suburb's five numbers are 480, 510, 560, 640 and 1450 (thousands of dollars). What does the 510 tell you?**

- Half of the sales were for $510 000 or less
- The cheapest sale was $510 000
- The average sale was $510 000
- About a quarter of the sales were for $510 000 or less

* Answer: About a quarter of the sales were for $510 000 or less

<!-- Speaker note: The lower quartile has a quarter of the data at or below it, and the upper quartile has a quarter above it. Between them lies the middle half. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change the data



- **An even higher sale:** 
- **An even number of values:** 
- **Only four values:** 

[Open this step](https://tutorials.learningwaypoints.com/maths/data/five-numbers/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Changing the data shows which of the five numbers an extreme value moves and how an even count changes the quartiles. Hints, in order: With 12 values the median is halfway between the 6th and 7th. / Put 600 between 590 and 610 in the order. / Four values split into two halves of two. / Each half's median is halfway between its two values. For students who need more support: Write the values on strips of paper, fold the ordered strip in half, then fold each half again. The folds are the quartiles. For early finishers: Compare this method with a spreadsheet's quartile function on the eleven prices. Do they agree? Why might they not? The hard part, on purpose: Where to split: whether the median is in a half, and what to do with an even count. Ask: how many values are in each half, and is the middle one left out? When students get stuck: A student gives the lower quartile as halfway between the lowest value and the median. Ask: Is the lower quartile a distance, or the middle value of a group? Fix: It is the median of the lower half of the ordered values: a value (or a halfway point between two values) from the data, not a point halfway along a line. / A student leaves the median in both halves for an odd count and gets 8 not 9. Ask: How many values are in each half? Is any value counted twice? Fix: With nine values, take the 5th out as the median; the halves are the first four and the last four. / A student says the interquartile range is the highest minus the lowest. Ask: Which values does the box (the middle half) go between? Fix: That is the range. The interquartile range is the upper quartile take away the lower quartile. -->

<!-- Speaker note: Teacher: the even count (twelve values) is the edge case. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Upper quartile

**Seven values in order are 3, 6, 7, 10, 12, 15 and 18. What is the upper quartile?**

* Answer: 15

<!-- Speaker note: The median is 10 (the 4th). The upper half is 12, 15, 18 and its median is 15. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Interquartile range

**Eight values in order are 2, 5, 7, 9, 12, 14, 20 and 26. What is the interquartile range?**

* Answer: 11

<!-- Speaker note: Lower half 2, 5, 7, 9 has median 6. Upper half 12, 14, 20, 26 has median 17. The IQR is 17 − 6 = 11. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review

**Review: what is the mean of the eleven sale prices (480, 495, 510, 520, 545, 560, 590, 610, 640, 720, 1450)? (nearest thousand dollars)**

* Answer: 647

<!-- Speaker note: The prices add to 7120 and 7120 ÷ 11 is about 647. That is higher than the upper quartile, 640, because the one very high sale drags the mean up. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the middle half of the market



- **The middle half:** Work this out on paper first, then type your answer.
- **Why the quartiles:** The suburb and its sales are made up for the task. **Also used in** - **Waiting times and wages.** Reports of waiting times, incomes and house prices quote the 

<!-- Speaker note: What this step is for: Back to the suburb: how wide is the range where the middle half of the sales sit, and why quote it instead of the highest and lowest. Hints, in order: Median of the lower five, median of the upper five. / 640 − 510. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Seven values in order are 4, 7, 9, 12, 15, 18 and 22. What are the lower and upper quartiles?**

* Median 12. Lower half 4, 7, 9 gives 7. Upper half 15, 18, 22 gives 18.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Continues AC9M10ST02 (node 1; a hinge). Where it leads: boxplots (next), which draw the five numbers as one picture, and then comparing distributions. -->
