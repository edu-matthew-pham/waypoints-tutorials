---
order: 54
unit: boxplots10
node: AC9M10ST02 n3
uses: [AC9M10ST02 n2]
assumes: [AC9M10ST02 n2]
connection: bus-lateness
title: Comparing with boxplots
summary: "Two boxplots on one scale can be compared by centre, spread, shape and outliers. The route with the lower median isn't always the more reliable one."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two buses get you to school. Which one would you trust?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8447
  url: http://127.0.0.1:8447/index.html
  readySelector: "#board"
  layout: full
explainPicture: { ref: data.yml#pic, caption: "Route 1 has the lower median (4) but a wider box (IQR 4) and an outlier at 15. Route 2 has a median of 5 and a narrower box (IQR 2)." }
---
Two routes, Route 1 and Route 2, both get you to school. Each was timed over the same 11 school days, and here is how many minutes late each bus was (made up for the task). Route 1: 0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 15. Route 2: 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7. Here, a reliable bus is one whose lateness is about the same each day, so you can plan around it. Have a guess which route is more reliable, and we'll check.

<figure class="situation" role="img" aria-label="Two boxplots on one number line from 0 to 16 minutes late. Route 1 has a box from 2 to 6, a median bar at 4, a whisker from 0 to 8 and a cross at 15. Route 2 has a box from 4 to 6, a median bar at 5 and a whisker from 3 to 7. A question mark asks which route is more reliable."><svg viewBox="0 0 420 200" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="12"><line x1="30" y1="160" x2="390" y2="160" stroke-width="1.5"/><g stroke-width="1.2"><line x1="40" y1="156" x2="40" y2="164"/><line x1="106" y1="156" x2="106" y2="164"/><line x1="172" y1="156" x2="172" y2="164"/><line x1="238" y1="156" x2="238" y2="164"/><line x1="304" y1="156" x2="304" y2="164"/><line x1="370" y1="156" x2="370" y2="164"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="180">0</text><text x="106" y="180">3</text><text x="172" y="180">6</text><text x="238" y="180">9</text><text x="304" y="180">12</text><text x="370" y="180">15</text><text x="210" y="196" font-size="11" opacity="0.8">minutes late</text></g><g stroke="#2f6fb3" stroke-width="2.4"><line x1="40" y1="120" x2="84" y2="120"/><line x1="172" y1="120" x2="216" y2="120"/><line x1="40" y1="110" x2="40" y2="130"/><line x1="216" y1="110" x2="216" y2="130"/><rect x="84" y="104" width="88" height="32" fill="#2f6fb3" fill-opacity="0.18"/><line x1="128" y1="104" x2="128" y2="136" stroke="currentColor" stroke-width="4"/><line x1="365" y1="115" x2="375" y2="125"/><line x1="375" y1="115" x2="365" y2="125"/></g><g stroke="#c2570a" stroke-width="2.4"><line x1="106" y1="60" x2="128" y2="60"/><line x1="172" y1="60" x2="194" y2="60"/><line x1="106" y1="50" x2="106" y2="70"/><line x1="194" y1="50" x2="194" y2="70"/><rect x="128" y="44" width="44" height="32" fill="#c2570a" fill-opacity="0.18"/><line x1="150" y1="44" x2="150" y2="76" stroke="currentColor" stroke-width="4"/></g><g fill="currentColor" stroke="none"><text x="40" y="98">Route 1</text><text x="40" y="38">Route 2</text><text x="300" y="82" font-size="26">?</text></g></svg></figure>

## Predict: which is more reliable

```step
stage: predict
insight: "Choosing the more reliable route shows who compares only the medians and who also looks at the spread."
check:
  type: predict
  q: "Route 1's median is 4 minutes late and Route 2's is 5. The boxplots are above. Which route is more reliable, meaning its lateness is about the same each day?"
  options:
    - "Route 1: its median is lower"
    - "Route 2: its box and whiskers are shorter"
    - "They are equally reliable"
  actual: "Route 2. Its box (IQR 2) is half as long as Route 1's (IQR 4), its whiskers are shorter, and it has no outlier. Route 1 is usually a minute earlier, but one day it was 15 minutes late."
```

## Run: make Route 1 as steady as Route 2

```step
stage: run
insight: "Reliability shows up as the box's length and the whiskers, not just the median: to make a route steadier you have to bring its days closer together."
try: { playground: board, starter: "data.yml#run", height: 640 }
check: { type: board, text: "Edit Route 1's values in the Values box (keep at least nine values) until its box is no longer than Route 2's, then press Use these values. What had to change?", when: "n >= 9 and q_iqr <= Q_IQR", explain: "The days had to come closer together: the very late days (8 and 15) had to move in. The median didn't need to change at all." }
```

Route 1 is the lower box on the board, and Route 2 is the upper one. Under them you can read the five numbers of each.

## Investigate: centre, spread, shape and outliers

```step
stage: investigate
insight: "To compare two boxplots, compare the centres (the median bars), the spreads (the box lengths and whiskers), the shapes and the outliers, then say what that means in the situation. A lower median alone doesn't make a route better."
tasks:
  - hint: ["Interquartile range = upper quartile take away lower quartile, for each.", "Walk: 21 − 16. Bus: 24 − 15."]
    check:
      type: reasoning
      paper: true
      q: "Two ways to get to school have these five numbers for the journey in minutes (made up). Walk: 14, 16, 18, 21, 25. Bus: 10, 15, 19, 24, 38. How many minutes wider is the bus's middle half than the walk's?"
      steps:
        - ["walk: $21 - 16 = 5$", "the interquartile range of the walk"]
        - ["bus: $24 - 15 = 9$", "the interquartile range of the bus"]
        - ["$9 - 5 = 4$", "how much wider the bus's middle half is"]
      answer: "4"
      answerLabel: "Minutes wider"
      tolerance: 0.01
      feedback:
        - ["17", "That compares the whole ranges (28 and 11). The question is about the middle half, so use the quartiles."]
        - ["9", "That is the bus's IQR on its own. Take the walk's IQR away from it."]
      criteria:
        - "I used the quartiles of each."
        - "I found each interquartile range."
        - "I subtracted to compare them."
      explain: "Walk IQR 21 − 16 = 5; bus IQR 24 − 15 = 9; the bus's middle half is 9 − 5 = 4 minutes wider. The walk is the steadier trip, though the bus's median (19) is only 1 minute above the walk's (18)."
  - check:
      type: question
      q: "Route 1 has a median of 4 minutes and an IQR of 4; Route 2 has a median of 5 and an IQR of 2. Which statement does the boxplot support best?"
      options:
        - "Route 1 is usually a bit earlier, but its lateness varies more, so Route 2 is steadier"
        - "Route 1 is better in every way, because its median is lower"
        - "Route 2 is better in every way, because its median is higher"
        - "The routes are the same, because the medians are close"
      answer: 0
      feedback:
        - null
        - "A lower median is one fact. The longer box and the outlier say Route 1 varies more."
        - "A higher median means Route 2 is typically later, not better."
        - "Close medians don't make the spread the same."
      explain: "Compare both: the medians differ by 1 minute, but Route 1's middle half is twice as spread out and it has a very late day."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam compares the two routes. Click the line where the reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: compare-centre-only
      explain: "Line 3: the medians compare the typical day on each route, not how much each route varies from day to day. The boxes and whiskers show the spread, and Route 1's is twice as long."
  - check:
      type: question
      q: "Route 1 has one very late day, 15 minutes, drawn as a cross. Which part of Route 1's boxplot does that day change least?"
      options:
        - "The box and the median bar"
        - "The upper whisker"
        - "The highest value"
        - "The range"
      answer: 0
      feedback:
        - null
        - "The whisker stops at 8 because 15 is an outlier, so it is only affected through the cross."
        - "The highest value is 15, which is the outlier."
        - "The range is 15 − 0 and depends on the 15."
      explain: "The box and the median bar depend on the middle values. One very late day changes the highest value and the range, and shows up as a cross, but the quartiles and median stay the same."
```

### Comparing two journeys

```worked
\text{medians: } 4 \text{ and } 5 :: Route 1 is typically a minute earlier. This compares the centres.
\text{IQR: } 6 - 2 = 4 \text{ and } 6 - 4 = 2 :: Route 1's middle half is twice as spread out. This compares the spreads.
\text{whiskers: } 0 \text{ to } 8 \text{ and } 3 \text{ to } 7 :: Route 1's days range further.
\text{outlier: } 15 :: Route 1 has one very late day, and Route 2 has none.
\text{So Route 2 is steadier.} :: Say what it means: you can plan around Route 2 more easily.
```

Now try one on paper: two ways to get to school with the five numbers walk 14, 16, 18, 21, 25 and bus 10, 15, 19, 24, 38 minutes. Find how many minutes wider the bus's middle half is than the walk's.

### Both medians and spreads

### Find the mistake

### An outlier's effect

## Modify: change a route

```step
stage: modify
insight: "Changing Route 1's days shows which features of the comparison move and which stay put."
try: { playground: board, starter: "data.yml#modify", height: 640 }
tasks:
  - hint: ["Change the 15 to 7 in the Values box, then read the new box.", "The upper half is 4, 5, 6, 7, 8."]
    check:
      type: number
      q: "Change Route 1's 15 to 7 and press Use these values. What is Route 1's interquartile range now?"
      answer: 4
      tolerance: 0
      explain: "The sorted values are 0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8. The quartiles are still 2 and 6, so the IQR is 4. The outlier has gone, but the box didn't move."
  - check:
      type: question
      q: "Edge case: two routes have the same median and the same interquartile range, but one has a longer upper whisker. What can you say?"
      options:
        - "Their typical days and middle halves match, but the longer-whisker route has some days that are further out"
        - "The routes are exactly the same"
        - "The longer-whisker route has a higher median"
        - "The shorter-whisker route has more outliers"
      answer: 0
      feedback:
        - null
        - "The medians and boxes match, but the whiskers differ, so the days aren't all alike."
        - "The medians were said to be the same."
        - "Outliers aren't decided by whisker length like that."
      explain: "The box and median describe the middle half. The whiskers show how far the rest of the days reach, and that can differ."
  - check:
      type: question
      q: "Edge case: the two boxes overlap a lot (Route 1 from 2 to 6, Route 2 from 4 to 6). Which claim is NOT supported?"
      options:
        - "Route 1 is later than Route 2 on every day"
        - "Route 1's lateness varies more than Route 2's"
        - "Route 2's median is 1 minute above Route 1's"
        - "Route 1 has one outlier and Route 2 has none"
      answer: 0
      feedback:
        - null
        - "That is supported: Route 1's box is longer than Route 2's."
        - "That is supported: the medians are 4 and 5."
        - "That is supported: only Route 1 has a cross."
      explain: "The boxes overlap, so some Route 1 days are earlier than some Route 2 days. A boxplot can show how the days are spread out, not that one route is later on every single day."
```

### A smaller late day

### Equal middle, different whiskers

### Overlap

## Practise: comparing spreads

```step
stage: practise
insight: "Using quartiles to compare spreads, and a review of the interquartile range."
tasks:
  - hint: ["Upper quartile take away lower quartile, for each set.", "Set A: 17 − 9."]
    check: { type: number, q: "Set A has quartiles 9 and 17. Set B has quartiles 12 and 16. How many times as long is A's box as B's?", answer: 2, tolerance: 0, explain: "A's IQR is 17 − 9 = 8 and B's is 16 − 12 = 4, so A's box is 8 ÷ 4 = 2 times as long." }
    smaller:
      check: { type: number, q: "Set A has quartiles 9 and 17. How long is its box?", answer: 8, tolerance: 0, explain: "The box runs from the lower quartile to the upper quartile: 17 − 9 = 8." }
  - hint: ["Find each set's IQR, then compare.", "IQR of X: 15 − 5. IQR of Y: 14 − 8."]
    check: { type: number, q: "Class X's test scores have quartiles 5 and 15. Class Y's have quartiles 8 and 14. By how many marks is X's interquartile range bigger than Y's?", answer: 4, tolerance: 0, explain: "X: 15 − 5 = 10. Y: 14 − 8 = 6. The difference is 10 − 6 = 4 marks." }
  - hint: ["Which two of the five numbers are the quartiles?", "22 − 12."]
    check: { type: number, q: "Review: a boxplot's five numbers are 6, 12, 15, 22 and 30. What is the interquartile range?", answer: 10, tolerance: 0, explain: "The quartiles are 12 and 22, so the IQR is 22 − 12 = 10." }
```

### Box lengths

### Which class varies more

### Review

## Make: which bus would you trust?

```step
stage: make
insight: "Back to the two buses: work out how much steadier Route 2 is, then say which you'd trust and why."
tasks:
  - hint: ["Each route's interquartile range from its quartiles.", "6 − 2 and 6 − 4."]
    check:
      type: reasoning
      paper: true
      q: "Route 1's quartiles are 2 and 6 minutes. Route 2's are 4 and 6. By how many minutes is Route 1's middle half wider than Route 2's?"
      steps:
        - ["Route 1: $6 - 2 = 4$", "its interquartile range"]
        - ["Route 2: $6 - 4 = 2$", "its interquartile range"]
        - ["$4 - 2 = 2$", "how much wider Route 1's middle half is"]
      answer: "2"
      answerLabel: "Minutes wider"
      tolerance: 0.01
      feedback:
        - ["1", "That is the difference of the medians, 5 − 4."]
        - ["15", "That is Route 1's highest value, an outlier."]
      criteria:
        - "I found each route's interquartile range."
        - "I subtracted to compare them."
        - "I could say what this means for a student catching the bus."
      explain: "Route 1's IQR is 4 and Route 2's is 2, so Route 1's middle half is 2 minutes wider. It's twice as spread out: you can plan around Route 2 more easily."
  - check:
      type: question
      q: "Which statement would you tell a friend about the two routes?"
      options:
        - "Route 1 is usually about a minute earlier, but it varies twice as much and had one day 15 minutes late. Route 2 is steadier."
        - "Route 1 is better because its median is lower."
        - "Route 2 is better because its median is higher."
        - "The routes are the same."
      answer: 0
      feedback:
        - null
        - "That uses only the medians. The spread matters for reliability."
        - "A higher median means later on a typical day, not better."
        - "The medians and boxes both differ."
      explain: "It uses the centre, the spread and the outlier. Which route you pick depends on whether you'd rather save a minute on a typical day or avoid the very late days."
```

### The spread difference

Work this out on paper first, then type your answer.

### Telling a friend

The routes and their days are made up for the task. Your class could time two real routes for a few weeks and compare them the same way.

**Also used in**

- **Test marks.** Two classes' marks compared side by side show which class varies more.
- **Sport and health.** Times for two training plans can be compared by median and spread.
- **Next.** Scatterplots: two measurements of each person, drawn as dots.
