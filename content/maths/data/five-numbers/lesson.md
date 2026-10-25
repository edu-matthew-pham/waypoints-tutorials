---
order: 52
unit: boxplots10
node: AC9M10ST02 n1
uses: [AC9M7ST01 n2, AC9M9ST03 n1]
assumes: [AC9M7ST01 n2, AC9M9ST03 n1, AC9M10ST01 n3]
connection: median-house-price
title: Five numbers
summary: "The lowest, lower quartile, median, upper quartile and highest values split a data set into four equal groups and say where the middle half sits."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Property reports quote the middle of the market, not the very top. How do you find it?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8445
  url: http://127.0.0.1:8445/index.html
  readySelector: "#board"
  layout: full
explainPicture: { ref: data.yml#pic, caption: "Eleven sales in order: lowest 480, lower quartile 510, median 560, upper quartile 640, highest 1450 (thousands of dollars)." }
---
Property reports give the median price, because a few very high sales drag the mean up ([Westpac explains why](https://www.westpac.com.au/personal-banking/home-loans/median-house-prices-explained/)). A good report also says where the middle half of the sales sit. Eleven houses in one suburb sold last month for these prices, in thousands of dollars, in order: 480, 495, 510, 520, 545, 560, 590, 610, 640, 720 and 1450 (made up for the task). The median is the sixth price, 560. Have a guess where the lower quartile falls, a quarter of the way up, and we'll check at the end of the lesson.

<figure class="situation" role="img" aria-label="Eleven sale prices in order from lowest to highest as eleven dots in a row, with the sixth dot marked as the median at 560. A question mark sits over the lower half: where is the lower quartile?"><svg viewBox="0 0 440 150" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="12"><line x1="20" y1="90" x2="420" y2="90" stroke-width="1.5"/><g fill="#D85A30" stroke="none"><circle cx="40" cy="90" r="6"/><circle cx="76" cy="90" r="6"/><circle cx="112" cy="90" r="6"/><circle cx="148" cy="90" r="6"/><circle cx="184" cy="90" r="6"/><circle cx="220" cy="90" r="6"/><circle cx="256" cy="90" r="6"/><circle cx="292" cy="90" r="6"/><circle cx="328" cy="90" r="6"/><circle cx="364" cy="90" r="6"/><circle cx="400" cy="90" r="6"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="116">480</text><text x="76" y="116">495</text><text x="112" y="116">510</text><text x="148" y="116">520</text><text x="184" y="116">545</text><text x="220" y="116">560</text><text x="256" y="116">590</text><text x="292" y="116">610</text><text x="328" y="116">640</text><text x="364" y="116">720</text><text x="400" y="116">1450</text></g><line x1="220" y1="52" x2="220" y2="108" stroke-width="2.4"/><text x="220" y="44" text-anchor="middle" fill="currentColor" stroke="none">median</text><text x="112" y="40" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><text x="220" y="142" text-anchor="middle" fill="currentColor" stroke="none" font-size="11" opacity="0.8">sale price (thousands of dollars), in order, not to scale</text></svg></figure>

## Predict: a quarter of the way up

```step
stage: predict
insight: "Choosing the price a quarter of the way up shows who has a feel for splitting the ordered values into four equal groups before any method is taught."
check:
  type: predict
  q: "The lower quartile has a quarter of the sales at or below it. Which of these prices is the lower quartile of the eleven sales?"
  options:
    - "495"
    - "510"
    - "520"
    - "545"
  actual: "510. It is the middle of the five lowest prices (480, 495, 510, 520, 545), so about a quarter of the sales sit at or below it."
```

## Run: take away the high sale

```step
stage: run
insight: "Taking out the one very high sale changes the highest value and hardly moves the median and quartiles, which is why reports quote them."
try: { playground: board, starter: "data.yml#run", height: 600 }
check: { type: board, text: "Take 1450 out of the Values box and press Use these values. Which of the five numbers moved a lot, and which hardly moved?", when: "h = 720", explain: "The highest went from 1450 to 720 and the median and quartiles barely moved: the quartiles are 510 and 610, and the median is 552.5. The extreme value stretches the ends but not the middle." }
```

The board draws the sales as dots, with a box from the lower quartile to the upper quartile and a bar at the median. Under it you can read the five numbers.

## Investigate: finding the five numbers

```step
stage: investigate
insight: "The median splits the ordered values in half and each quartile is the median of one half. When the number of values is odd, the middle value is left out of both halves."
tasks:
  - hint: ["Find the median first. With 9 values it is the 5th.", "Leave the median out when you split into halves."]
    check:
      type: reasoning
      paper: true
      q: "Nine students' waiting times at the canteen, in minutes and in order, are 2, 5, 6, 8, 9, 11, 14, 15 and 20 (made up). What is the interquartile range?"
      steps:
        - ["median $= 9$ (the 5th of 9)", "the middle value splits the data in two"]
        - ["lower half $2, 5, 6, 8$ gives $Q_1 = 5.5$; upper half $11, 14, 15, 20$ gives $Q_3 = 14.5$", "the middle value is left out of both halves"]
        - ["$14.5 - 5.5 = 9$", "the interquartile range is $Q_3 - Q_1$"]
      answer: "9"
      answerLabel: "Interquartile range (minutes)"
      tolerance: 0.01
      feedback:
        - ["8", "That leaves the median (9) in both halves. With 9 values the middle one is left out of both."]
        - ["18", "That is the range, 20 − 2. The interquartile range is the length of the middle half."]
      criteria:
        - "I found the median first."
        - "I split the values into two halves."
        - "I found the median of each half."
      explain: "Median 9; lower half 2, 5, 6, 8 has median (5 + 6) ÷ 2 = 5.5; upper half 11, 14, 15, 20 has median (14 + 15) ÷ 2 = 14.5. The IQR is 14.5 − 5.5 = 9."
  - hint: ["Split the eight ordered values into two halves of four.", "The lower half is 4, 6, 9, 11."]
    check:
      type: number
      q: "Eight values in order are 4, 6, 9, 11, 14, 18, 21 and 25. What is the lower quartile?"
      answer: 7.5
      tolerance: 0.01
      explain: "Eight values split into two halves of four. The lower half is 4, 6, 9, 11 and its median is (6 + 9) ÷ 2 = 7.5."
    smaller:
      check:
        type: number
        q: "The lower half of the eight values is 4, 6, 9 and 11. What is its median?"
        answer: 7.5
        tolerance: 0.01
        explain: "Four values: the median is halfway between the middle two, (6 + 9) ÷ 2 = 7.5."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia finds the lower quartile of nine waiting times. Click the line where the working goes wrong."
      answer: 3
      fault: logic
      misconception: quartile-halfway-to-extreme
      explain: "Line 3: the lower quartile is the median of the lower half of the values, not the point halfway between the lowest value and the median. The lower half is 3, 4, 6, 7 and its median is 5."
  - check:
      type: question
      q: "The suburb's five numbers are 480, 510, 560, 640 and 1450 (thousands of dollars). What does the 510 tell you?"
      options:
        - "About a quarter of the sales were for $510 000 or less"
        - "Half of the sales were for $510 000 or less"
        - "The average sale was $510 000"
        - "The cheapest sale was $510 000"
      answer: 0
      feedback:
        - null
        - "That is the median, 560."
        - "That would be the mean, and the mean here is about 647."
        - "The cheapest is the lowest value, 480."
      explain: "The lower quartile has a quarter of the data at or below it, and the upper quartile has a quarter above it. Between them lies the middle half."
```

### Five numbers

```worked
3, 4, 4, 6, 7, 9, 10, 12, 13, 21 :: Ten waiting times in order (made up).
\text{lowest } 3,\ \text{highest } 21 :: The two ends.
\tfrac{7 + 9}{2} = 8 :: Ten values: the median is halfway between the 5th and 6th.
Q_1 = 4 :: The lower half is 3, 4, 4, 6, 7. Its median is 4.
Q_3 = 12 :: The upper half is 9, 10, 12, 13, 21. Its median is 12.
12 - 4 = 8 :: The interquartile range is the length of the middle half.
```

Now try one on paper: nine waiting times in order, 2, 5, 6, 8, 9, 11, 14, 15 and 20. With nine values the median is the fifth one, and it is left out when you split into halves.

### Lower quartile

### Find the mistake

### What a quartile says

## Modify: change the data

```step
stage: modify
insight: "Changing the data shows which of the five numbers an extreme value moves and how an even count changes the quartiles."
try: { playground: board, starter: "data.yml#modify", height: 600 }
tasks:
  - check:
      type: question
      q: "Change 1450 to 2400 in the Values box and press Use these values. Which of the five numbers change?"
      options:
        - "Only the highest"
        - "The highest and the upper quartile"
        - "All five"
        - "None of them"
      answer: 0
      feedback:
        - null
        - "The upper quartile is the median of the upper half, which is 590, 610, 640, 720, 2400, and that is still 640."
        - "The middle values don't move when only the highest moves."
        - "The highest value is one of the five numbers, and it changed."
      explain: "The highest value changes. The median and quartiles stay at 560, 510 and 640, because the order of the other values hasn't changed."
  - hint: ["With 12 values the median is halfway between the 6th and 7th.", "Put 600 between 590 and 610 in the order."]
    check:
      type: number
      q: "Edge case: a twelfth sale of 600 is added to the original eleven (1450 back in). What is the median now? (thousands of dollars)"
      answer: 575
      tolerance: 0.01
      explain: "Twelve values: the median is halfway between the 6th (560) and the 7th (590): (560 + 590) ÷ 2 = 575. The lower quartile is 515 and the upper quartile is 625."
  - hint: ["Four values split into two halves of two.", "Each half's median is halfway between its two values."]
    check:
      type: number
      q: "Only four sales are left: 480, 510, 640 and 720. What is the lower quartile? (thousands of dollars)"
      answer: 495
      tolerance: 0.01
      explain: "The lower half is 480 and 510, and its median is (480 + 510) ÷ 2 = 495. The upper quartile is (640 + 720) ÷ 2 = 680."
```

### An even higher sale

### An even number of values

### Only four values

## Practise: quartiles and the spread of the middle half

```step
stage: practise
insight: "Finding quartiles and the interquartile range from ordered values, with a review of the mean."
tasks:
  - hint: ["Seven values: the median is the 4th, and the halves are the first three and last three.", "The upper half is the 5th, 6th and 7th values."]
    check: { type: number, q: "Seven values in order are 3, 6, 7, 10, 12, 15 and 18. What is the upper quartile?", answer: 15, tolerance: 0.01, explain: "The median is 10 (the 4th). The upper half is 12, 15, 18 and its median is 15." }
  - hint: ["Quartile 3 take away quartile 1.", "Median of each half first."]
    check: { type: number, q: "Eight values in order are 2, 5, 7, 9, 12, 14, 20 and 26. What is the interquartile range?", answer: 11, tolerance: 0.01, explain: "Lower half 2, 5, 7, 9 has median 6. Upper half 12, 14, 20, 26 has median 17. The IQR is 17 − 6 = 11." }
  - hint: ["Add all eleven prices, then divide by 11.", "The prices add to 7120."]
    check: { type: number, q: "Review: what is the mean of the eleven sale prices (480, 495, 510, 520, 545, 560, 590, 610, 640, 720, 1450)? (nearest thousand dollars)", answer: 647, tolerance: 0.6, explain: "The prices add to 7120 and 7120 ÷ 11 is about 647. That is higher than the upper quartile, 640, because the one very high sale drags the mean up." }
```

### Upper quartile

### Interquartile range

### Review

## Make: the middle half of the market

```step
stage: make
insight: "Back to the suburb: how wide is the range where the middle half of the sales sit, and why quote it instead of the highest and lowest."
tasks:
  - hint: ["Median of the lower five, median of the upper five.", "640 − 510."]
    check:
      type: reasoning
      paper: true
      q: "The report says the middle half of last month's sales were spread over a range of how many thousand dollars? Use the eleven prices."
      steps:
        - ["median $= 560$ (the 6th of 11)", "the middle price is left out of both halves"]
        - ["lower half $480, 495, 510, 520, 545$ gives $Q_1 = 510$; upper half $590, 610, 640, 720, 1450$ gives $Q_3 = 640$", "the median of each half of five"]
        - ["$640 - 510 = 130$", "the interquartile range"]
      answer: "130"
      answerLabel: "Width of the middle half (thousands of dollars)"
      tolerance: 0.01
      feedback:
        - ["970", "That is the whole range, 1450 − 480. The one very high sale stretches it, and it says nothing about the middle."]
        - ["80", "That is the upper quartile take away the median (640 − 560). The middle half runs from the lower quartile to the upper quartile."]
      criteria:
        - "I found the lower and upper quartiles."
        - "I took the lower quartile from the upper quartile."
        - "I could say why this beats the whole range."
      explain: "The quartiles are 510 and 640, so the middle half of the sales spread over 640 − 510 = 130, about $130 000. The whole range, 970, is stretched by the one very high sale."
  - check:
      type: question
      q: "Why does the report quote the quartiles rather than the lowest and highest prices?"
      options:
        - "The quartiles describe where most sales are, and one very high sale doesn't stretch them"
        - "The lowest and highest prices are always wrong"
        - "Quartiles are bigger numbers"
        - "The highest price doesn't count as a sale"
      answer: 0
      feedback:
        - null
        - "They are real sales, they just tell you about the extremes."
        - "Quartiles aren't bigger, they are in the middle."
        - "It is a real sale. It just isn't typical."
      explain: "The highest and lowest are single sales at the extremes. The quartiles show where the typical sales sit."
```

### The middle half

Work this out on paper first, then type your answer.

### Why the quartiles

The suburb and its sales are made up for the task.

**Also used in**

- **Waiting times and wages.** Reports of waiting times, incomes and house prices quote the median and quartiles for the same reason.
- **Exams.** A school might report the lower quartile, the median and the upper quartile of a test's marks.
- **Next lesson.** Boxplots: drawing the five numbers as one picture.
