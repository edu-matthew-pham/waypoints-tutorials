---
order: 53
unit: boxplots10
node: AC9M10ST02 n2
uses: [AC9M10ST02 n1]
assumes: [AC9M10ST02 n1]
connection: bus-lateness
title: Boxplots
summary: "A boxplot draws the five numbers as one picture: the box is the middle half, the bar is the median, and the whiskers reach the lowest and highest values that aren't outliers."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You catch Route 1 to school, and it's late sometimes. How late is it on a normal day?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8446
  url: http://127.0.0.1:8446/index.html
  readySelector: "#board"
  layout: full
explainPicture: { ref: data.yml#pic, caption: "Route 1: lowest 0, lower quartile 2, median 4, upper quartile 6, highest 15. The 15 is an outlier, so the upper whisker stops at 8." }
---
The Route 1 bus app gives the minutes the bus was late on each of the last 11 school days: 0, 1, 2, 2, 3, 4, 4, 5, 6, 8 and 15 (made up for the task). One bad day looks bad, but you want to know about the normal days. A boxplot shows the middle half of the days as a box, with a bar at the median. Have a guess where the box would start and end, and we'll check.

<figure class="situation" role="img" aria-label="A dot plot of Route 1's lateness on 11 days, on a number line from 0 to 16 minutes. The dots are at 0, 1, 2, 2, 3, 4, 4, 5, 6, 8 and 15. A question mark and a dashed bracket above the dots ask where the box of a boxplot would start and end."><svg viewBox="0 0 420 150" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="12"><line x1="30" y1="110" x2="390" y2="110" stroke-width="1.5"/><g stroke-width="1.2"><line x1="40" y1="106" x2="40" y2="114"/><line x1="106" y1="106" x2="106" y2="114"/><line x1="172" y1="106" x2="172" y2="114"/><line x1="238" y1="106" x2="238" y2="114"/><line x1="304" y1="106" x2="304" y2="114"/><line x1="370" y1="106" x2="370" y2="114"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="130">0</text><text x="106" y="130">3</text><text x="172" y="130">6</text><text x="238" y="130">9</text><text x="304" y="130">12</text><text x="370" y="130">15</text><text x="210" y="146" font-size="11" opacity="0.8">minutes late</text></g><g fill="#D85A30" stroke="none"><circle cx="40" cy="100" r="5"/><circle cx="62" cy="100" r="5"/><circle cx="84" cy="100" r="5"/><circle cx="84" cy="88" r="5"/><circle cx="106" cy="100" r="5"/><circle cx="128" cy="100" r="5"/><circle cx="128" cy="88" r="5"/><circle cx="150" cy="100" r="5"/><circle cx="172" cy="100" r="5"/><circle cx="216" cy="100" r="5"/><circle cx="370" cy="100" r="5"/></g><text x="210" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text><path d="M80 66 v-12 h260 v12" stroke-width="1.6" stroke-dasharray="5 4"/></svg></figure>

## Predict: where the box goes

```step
stage: predict
insight: "Choosing where the box starts and ends shows who treats the box as the whole data set and who sees it as the middle half."
check:
  type: predict
  q: "A boxplot's box covers the middle half of the days. Where would the box start and end for Route 1?"
  options:
    - "From 0 to 15, all the days"
    - "From 1 to 8"
    - "From 2 to 6"
    - "From 3 to 5"
  actual: "From 2 to 6. The lower quartile is 2 and the upper quartile is 6, so half the days fall in the box. The median bar sits at 4."
```

## Run: take out the very late day

```step
stage: run
insight: "The cross marks a value so far from the box that it counts as an outlier. Bring the value back towards the rest and it joins the whisker."
try: { playground: board, starter: "data.yml#run", height: 600 }
check: { type: board, text: "The 15 shows as a cross, not part of the whisker. Change the 15 to 9 in the Values box and press Use these values. What happens to the cross?", when: "q_out = 0 and h = 9", explain: "With a 9 instead of the 15 there is no cross: 9 is inside the fence, which is 6 + 1.5 × 4 = 12, so the whisker reaches it." }
```

The box runs from the lower quartile to the upper quartile, the thick bar is the median, and the whiskers reach the lowest and highest values that aren't outliers. A cross marks an outlier.

## Investigate: reading and drawing a boxplot

```step
stage: investigate
insight: "The box is the middle half of the data and its length is the interquartile range; the whiskers reach the furthest values inside the fences; a value beyond a fence is an outlier. The width of the box says how spread out the middle half is, not how many values there are."
tasks:
  - hint: ["Find the IQR first, then 1.5 times it.", "Upper fence = upper quartile + 1.5 × IQR."]
    check:
      type: reasoning
      paper: true
      q: "A bus's lateness has five numbers 1, 3, 4, 8 and 20 (minutes, made up). What is the upper fence, and is 20 an outlier?"
      steps:
        - ["$8 - 3 = 5$", "the interquartile range, upper quartile take away lower quartile"]
        - ["$1.5 \\times 5 = 7.5$", "the distance allowed beyond the box"]
        - ["$8 + 7.5 = 15.5$", "the upper fence"]
        - ["$20 > 15.5$, so 20 is an outlier", "it is beyond the fence"]
      answer: "15.5"
      answerLabel: "Upper fence (minutes)"
      tolerance: 0.01
      feedback:
        - ["12.5", "That is the upper quartile plus the IQR. The rule is 1.5 times the IQR."]
        - ["20", "That is the highest value. The fence is the upper quartile plus 1.5 times the IQR."]
      criteria:
        - "I found the interquartile range."
        - "I found 1.5 times the IQR and added it to the upper quartile."
        - "I compared the highest value with the fence."
      explain: "IQR = 8 − 3 = 5, and 1.5 × 5 = 7.5, so the upper fence is 8 + 7.5 = 15.5. The 20 is beyond it, so it is an outlier."
  - hint: ["The box is the middle half of the data.", "Which two of the five numbers mark the middle half?"]
    check:
      type: question
      q: "A boxplot's five numbers are 2, 5, 8, 13 and 21. Which two numbers are the ends of the box?"
      options:
        - "5 and 13"
        - "2 and 21"
        - "5 and 8"
        - "8 and 13"
      answer: 0
      feedback:
        - null
        - "Those are the lowest and highest values, the ends of the whiskers (if there are no outliers)."
        - "The 8 is the median, the bar inside the box. The box runs from 5 to 13."
        - "The 8 is the median. The box also goes down to the lower quartile, 5."
      explain: "The box runs from the lower quartile (5) to the upper quartile (13), with the median bar at 8. The whiskers reach to 2 and 21 if neither is an outlier."
    smaller:
      check:
        type: question
        q: "The box starts at the lower quartile. Where does it end?"
        options:
          - "At the upper quartile"
          - "At the highest value"
          - "At the median"
        answer: 0
        feedback:
          - null
          - "The highest value is the end of the upper whisker, outside the box."
          - "The median is the bar inside the box."
        explain: "The box covers the middle half, from the lower quartile to the upper quartile."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev compares two bus routes' boxplots. Click the line where the reading goes wrong."
      answer: 3
      fault: logic
      misconception: box-width-is-count
      explain: "Line 3: the width of a box is how far apart the quartiles are, so it shows the spread of the middle half. Each box holds half of that route's days, whatever its width."
  - check:
      type: question
      q: "The median bar in a boxplot sits close to the left end of the box (the quartiles are 3 and 12 and the median is 5). What does this tell you?"
      options:
        - "The values between 3 and 5 are bunched closer together than the values between 5 and 12"
        - "More days are on the left than on the right"
        - "The data has no outliers"
        - "The mean equals the median"
      answer: 0
      feedback:
        - null
        - "A quarter of the days is on each side of the median bar, whatever its position."
        - "Outliers show as crosses outside the whiskers, not through the median's position."
        - "A median near one end hints that the mean and median differ, not that they match."
      explain: "A quarter of the days lie on each side of the median. If the median is near the left end, that quarter is squeezed into a small range, while the other quarter is spread out more."
```

### Reading the fences

```worked
0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 15 :: Route 1's eleven days, in order.
\text{lowest } 0,\ Q_1 = 2,\ \text{median } 4,\ Q_3 = 6,\ \text{highest } 15 :: The five numbers.
6 - 2 = 4 :: The box's length, the interquartile range.
6 + 1.5 \times 4 = 12 :: The upper fence: values beyond it are outliers.
15 > 12 :: So 15 is an outlier. It is drawn as a cross.
\text{upper whisker to } 8 :: The whisker stops at the highest value inside the fence.
```

Now try one on paper: a bus's lateness has five numbers 1, 3, 4, 8 and 20 minutes. Work out the upper fence and decide whether the 20 is an outlier.

### Box ends

### Find the mistake

Route 2's lateness on the same 11 days (made up) is 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 and 7, so its quartiles are 4 and 6.

### The median bar

## Modify: change the data

```step
stage: modify
insight: "Moving a value or flattening the data shows when a whisker grows to meet a value, and what happens when every value is the same."
try: { playground: board, starter: "data.yml#modify", height: 600 }
tasks:
  - check: { type: board, text: "Change the 15 to 11 in the Values box and press Use these values. Does the cross stay?", when: "q_out = 0 and h = 11", explain: "No: the upper fence is still 6 + 1.5 × 4 = 12, and 11 is inside it, so the whisker reaches 11. The cross is gone." }
  - hint: ["Every value is 5, so the lowest, the quartiles, the median and the highest are all 5.", "5 − 5."]
    check: { type: number, q: "Edge case: type 5, 5, 5, 5, 5, 5, 5 into the Values box. What is the interquartile range?", answer: 0, tolerance: 0, explain: "Every number in the five-number summary is 5, so the box has no length. The boxplot is a single bar." }
  - hint: ["A value exactly on the fence isn't beyond it.", "The upper fence is 12."]
    check:
      type: question
      q: "Edge case: Route 1 has a day that is exactly 12 minutes late. The upper fence is 12. Is that day an outlier?"
      options:
        - "No: an outlier is beyond the fence, and 12 is on it"
        - "Yes: 12 is far above the median"
        - "Yes: every value on a fence is an outlier"
        - "No: no value is ever an outlier"
      answer: 0
      feedback:
        - null
        - "The rule is about the fence, not about how far above the median it is."
        - "The rule is 'beyond the fence', so a value on the fence stays in the whisker."
        - "Values beyond the fences are outliers."
      explain: "The rule says a value is an outlier when it is more than 1.5 × IQR beyond the box. At exactly 12 it is not more than that, so the whisker reaches 12."
```

### A smaller late day

### All the same

### Exactly on the fence

## Practise: reading and fences

```step
stage: practise
insight: "Reading the box's length, the fence and the outlier decision from five numbers, with a review of the lower quartile."
tasks:
  - hint: ["Upper quartile take away lower quartile.", "31 is the highest value, not the upper quartile."]
    check: { type: number, q: "A boxplot's five numbers are 4, 9, 13, 20 and 31. What is the interquartile range?", answer: 11, tolerance: 0, explain: "The quartiles are 9 and 20, so the IQR is 20 − 9 = 11." }
  - hint: ["1.5 × the IQR, added to the upper quartile.", "1.5 × 11 = 16.5."]
    check: { type: number, q: "For those five numbers (4, 9, 13, 20, 31), what is the upper fence?", answer: 36.5, tolerance: 0.01, explain: "20 + 1.5 × 11 = 20 + 16.5 = 36.5. The highest value, 31, is inside it, so it isn't an outlier." }
  - hint: ["Nine values: leave the median out of both halves.", "The lower half is the first four values."]
    check: { type: number, q: "Review: nine values in order are 3, 5, 8, 10, 12, 14, 17, 19 and 25. What is the lower quartile?", answer: 6.5, tolerance: 0.01, explain: "The median is 12. The lower half is 3, 5, 8, 10 and its median is (5 + 8) ÷ 2 = 6.5." }
```

### Box length

### Upper fence

### Review

## Make: how late is a normal day?

```step
stage: make
insight: "Back to Route 1: decide whether the 15-minute day is an outlier and say how late a normal day is."
tasks:
  - hint: ["Quartiles first: lower five 0, 1, 2, 2, 3 and upper five 4, 5, 6, 8, 15.", "Q3 + 1.5 × IQR."]
    check:
      type: reasoning
      paper: true
      q: "Route 1's 11 lateness values are 0, 1, 2, 2, 3, 4, 4, 5, 6, 8 and 15 minutes. Find the upper fence and decide whether 15 is an outlier."
      steps:
        - ["median $= 4$; lower half $0, 1, 2, 2, 3$ gives $Q_1 = 2$; upper half $4, 5, 6, 8, 15$ gives $Q_3 = 6$", "the quartiles"]
        - ["$6 - 2 = 4$", "the interquartile range"]
        - ["$6 + 1.5 \\times 4 = 12$", "the upper fence"]
        - ["$15 > 12$, so 15 is an outlier", "beyond the fence"]
      answer: "12"
      answerLabel: "Upper fence (minutes)"
      tolerance: 0.01
      feedback:
        - ["10", "That is the upper quartile plus the IQR. The rule uses 1.5 times the IQR."]
        - ["15", "That is the highest value. The fence is the upper quartile plus 1.5 times the IQR."]
      criteria:
        - "I found both quartiles."
        - "I used 1.5 times the interquartile range."
        - "I compared 15 with the fence and said what it means."
      explain: "The quartiles are 2 and 6, the IQR is 4, and the upper fence is 6 + 1.5 × 4 = 12. The 15-minute day is beyond it, so it's an outlier: a one-off bad day, not what the bus is usually like."
  - check:
      type: question
      q: "What is the best description of a normal day on Route 1?"
      options:
        - "Between about 2 and 6 minutes late, with the middle at 4 minutes"
        - "15 minutes late"
        - "Between 0 and 15 minutes late, with the middle at 7.5"
        - "On time"
      answer: 0
      feedback:
        - null
        - "That was the one outlier."
        - "That is the whole range, including the outlier, and 7.5 is the middle of the range, not the median."
        - "Only the first day was on time."
      explain: "The box is the middle half of the days, 2 to 6 minutes late, and the median is 4. The 15 is a one-off."
```

### The outlier

Work this out on paper first, then type your answer.

### A normal day

The bus and its days are made up for the task.

**Also used in**

- **Waiting times.** Hospitals, call centres and train operators report how long people wait with boxes and medians.
- **Sport.** Race times and scores for a season are often shown as boxplots.
- **Next lesson.** Comparing with boxplots: two routes, side by side.
