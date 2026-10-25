---
order: 58
unit: twoway10
node: [AC9M10ST04 n1, AC9M10ST04 n2]
uses: ["AC9M8P02 n1", "AC9M7N06 n3"]
connection: survey-two-way
title: "Row or column percentages"
summary: "Counts mislead when groups are different sizes. Turn each row (or column) into a percentage of its own total, then compare, and say which group each percentage is of."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "More bus and car students play sport than riders do. So are bus and car students more sporty?"
---
A school (made up) asked 200 Year 10 students how they get to school and whether they play a sport. The answers went into a **two-way table**. Look at the counts and make a guess before any working.

## Predict: counts or chances

```step
stage: predict
insight: "Choosing who is most likely to play sport from raw counts shows whether students compare groups by how many, or by what fraction of each group."
check:
  type: predict
  q: "Which group is most likely to play sport: students who ride, walk, or come by bus or car?"
  options:
    - "Bus or car, because the most of them play sport (40)"
    - "Walk, because 33 of 60 is more than half"
    - "Ride, because 30 of the 40 riders play sport"
    - "They are all the same"
  actual: "Riders. 30 of 40 is 75%, walkers are 55% and bus or car students are 40%. The bus and car group has the most players only because it is the biggest group."
```

<figure class="situation" role="img" aria-label="A table of 200 Year 10 students (made up). Rows: ride, walk, bus or car. Columns: plays sport, does not, total. Ride 30, 10, 40. Walk 33, 27, 60. Bus or car 40, 60, 100. A question beside it asks who is most likely to play sport."><svg viewBox="0 0 600 170" width="600" style="max-width:100%;height:auto" font-family="inherit"><g fill="none" stroke="currentColor"><line x1="20" y1="20" x2="20" y2="148"/><line x1="140" y1="20" x2="140" y2="148"/><line x1="230" y1="20" x2="230" y2="148"/><line x1="320" y1="20" x2="320" y2="148"/><line x1="410" y1="20" x2="410" y2="148"/><line x1="20" y1="20" x2="410" y2="20"/><line x1="20" y1="52" x2="410" y2="52"/><line x1="20" y1="84" x2="410" y2="84"/><line x1="20" y1="116" x2="410" y2="116"/><line x1="20" y1="148" x2="410" y2="148"/></g><g fill="currentColor" stroke="none" font-size="13" text-anchor="middle"><text x="185.0" y="41" font-weight="bold">Plays sport</text><text x="275.0" y="41" font-weight="bold">Does not</text><text x="365.0" y="41" font-weight="bold">Total</text><text x="80.0" y="73" font-weight="bold">Ride</text><text x="185.0" y="73">30</text><text x="275.0" y="73">10</text><text x="365.0" y="73">40</text><text x="80.0" y="105" font-weight="bold">Walk</text><text x="185.0" y="105">33</text><text x="275.0" y="105">27</text><text x="365.0" y="105">60</text><text x="80.0" y="137" font-weight="bold">Bus or car</text><text x="185.0" y="137">40</text><text x="275.0" y="137">60</text><text x="365.0" y="137">100</text></g><g fill="currentColor" stroke="none"><text x="430" y="104" font-size="13">Who is most likely</text><text x="430" y="122" font-size="13">to play sport?</text><text x="430" y="150" font-size="24">?</text></g></svg></figure>

Make a guess before you check.

## Run: reading the table

```step
stage: run
insight: "Reading a row and its total is the first move: the total of the row is the size of the group, and it is the number a percentage is taken of."
check:
  type: number
  q: "How many walkers are in the survey in all? (Read the Total column.)"
  answer: 60
  tolerance: 0
  feedback:
    - [33, "That is the walkers who play sport. The total counts the walkers who play sport and those who do not."]
  explain: "33 play sport and 27 do not, so there are 60 walkers in all."
```

Each row is one group of students: 30 + 10 = 40 riders, 33 + 27 = 60 walkers, 40 + 60 = 100 bus or car. The three groups are different sizes, which is why the counts alone can't answer the question.

## Investigate: a percentage of its own group

```step
stage: investigate
insight: "Dividing by the group's own total (the row) answers 'how likely is someone in this group'. Dividing by the grand total or by the wrong total answers a different question."
tasks:
  - hint: ["Divide by the walkers, not by everyone.", "33 ÷ 60, then × 100."]
    check:
      type: number
      q: "What percentage of the walkers play sport?"
      answer: 55
      tolerance: 0.05
      feedback:
        - [16.5, "That divides by all 200 students. The question is about the walkers, so divide by the 60 walkers."]
      explain: "33 ÷ 60 = 0.55, which is 55%. Out of the walkers, 55% play sport."
    smaller:
      check:
        type: number
        q: "Of 60 walkers, 33 play sport. What is 33 ÷ 60 as a decimal?"
        answer: 0.55
        tolerance: 0.005
        explain: "33 ÷ 60 = 0.55. Multiply by 100 to make it a percentage."
  - check:
      type: bug
      code: "working.txt#dev"
      text: "Dev works out the percentage of walkers who play sport. Click the line where he goes wrong."
      answer: 3
      fault: logic
      misconception: percent-of-grand-total
      explain: "Line 3: Dev divides by all 200 students. The walkers are a group of 60, so he should work out 33 out of 60. His 16.5% is the share of all students who both walk and play sport."
  - check:
      type: question
      q: "Riders: 30 of 40 play sport. Bus or car: 40 of 100. Which comparison is fair?"
      options: ["75% of riders against 40% of bus or car students, because each is a percentage of its own group", "30 against 40, because the more the better", "30 against 100, because 100 is the biggest total", "Riders can't be compared with bus or car students"]
      answer: 0
      feedback: [null, "Counts depend on how big each group is. The bus or car group is two and a half times as big as the riders.", "That mixes a count with a group total.", "They can be compared, once each is a percentage of its own group."]
      explain: "Groups of different sizes are compared by percentages of their own totals. 75% of riders play sport and 40% of bus or car students."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia wants the percentage of riders who play sport. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: wrong-way-percentage
      explain: "Line 3: Mia divides by 103, everyone who plays sport. That gives the share of players who ride, a different question. For the percentage of riders who play sport, divide by the 40 riders."
```

### One row's percentage

Here is how to work out a row percentage.

```worked
\text{Pick the group, a row} :: The question says walkers, so use the Walk row.
\text{The row total is the whole group} :: 33 + 27 = 60 walkers.
\frac{33}{60} = 0.55 :: Count in the cell divided by the row total.
0.55 \times 100 = 55\% :: Turn it into a percentage and say it: 55% of walkers play sport.
```

### Find the mistake

Read Dev's working. What is the percentage actually of?

### A fair comparison

### Which way?

Read Mia's working. Which total should she have divided by?

## Modify: other cells, other directions

```step
stage: modify
insight: "Filling a missing cell from the totals, taking a row percentage for the other column, and a column percentage shows the two directions answer different questions."
tasks:
  - check:
      type: number
      q: "A different survey (made up): there are 80 students who take part in a club. 52 of them are in Year 10. In the club, how many are not in Year 10? (Fill the missing cell: row total minus the cell.)"
      answer: 28
      tolerance: 0
      feedback:
        - [52, "That is the Year 10 cell. The missing cell is the rest of the row total."]
      explain: "80 − 52 = 28 are not in Year 10."
  - check:
      type: number
      q: "In the bus-or-car row, 60 of the 100 students do not play sport. What percentage of bus or car students do not play sport?"
      answer: 60
      tolerance: 0
      feedback:
        - [40, "That is the percentage who do play sport. The question asks about those who do not."]
      explain: "60 ÷ 100 = 0.6, so 60%. Row percentages add to 100%: 40% play sport and 60% do not."
  - check:
      type: number
      q: "Now go down a column. Of the 103 students who play sport, 30 ride. What percentage of the players ride? (1 decimal place)"
      answer: 29.1
      tolerance: 0.05
      feedback:
        - [75, "That is the percentage of riders who play sport. This question divides by the 103 players."]
      explain: "30 ÷ 103 = 0.291, so about 29.1%. It says 'of the players, 29.1% ride', a different thing from 'of the riders, 75% play'."
  - check:
      type: question
      q: "Edge case: a group has only 4 students, and 3 of them play sport (75%). Is that as strong a sign as the 75% of the 40 riders?"
      options: ["No: with only 4 students, one student changes the percentage a lot, so be careful about reading much into it", "Yes: 75% is 75%", "Yes: the smaller the group the better", "No: percentages can't be used on small groups"]
      answer: 0
      feedback: [null, "The percentage is the same, but 4 students is a very small group. One more student who did not play sport would drop it to 60%.", "A small group varies a lot, so it tells you less.", "You can work the percentage out. Just be careful how much you read into it."]
      explain: "A percentage from a very small group can swing with one student. 30 of 40 is much firmer evidence than 3 of 4."
```

### Missing cell

### The other column

### Down a column

### A small group

## Practise: fair comparisons

```step
stage: practise
insight: "Row percentages from counts, picking the group with the highest rate, and (review) a percentage of an amount."
tasks:
  - check:
      type: number
      q: "In the survey, what percentage of the bus or car students play sport?"
      answer: 40
      tolerance: 0
      explain: "40 ÷ 100 = 0.4, which is 40%."
  - check:
      type: question
      q: "Which group has the highest percentage playing sport: ride (30 of 40), walk (33 of 60) or bus or car (40 of 100)?"
      options: ["Ride, 75%", "Walk, 55%", "Bus or car, 40%", "Bus or car, because 40 is the most players"]
      answer: 0
      feedback: [null, "Walk is 55%, which is less than 75%.", "Bus or car is the lowest rate, 40%.", "40 players is the biggest count, not the biggest percentage of a group."]
      explain: "30 ÷ 40 = 75%, 33 ÷ 60 = 55%, 40 ÷ 100 = 40%. Riders have the highest percentage."
  - check:
      type: number
      q: "Review: a club has $80$ members and $45\\%$ are in Year 10. How many members is that?"
      answer: 36
      tolerance: 0
      explain: "45% of 80 = 0.45 × 80 = 36."
```

### Bus or car

### Highest rate

### Review

From earlier years: a percentage of an amount.

## Make: your own comparison

```step
stage: make
insight: "Writing a sentence that names its group, with the right percentage, shows they can report a row percentage and compare two groups fairly."
tasks:
  - hint: ["Subtract the two percentages.", "75 − 55."]
    check:
      type: reasoning
      paper: true
      q: "In the school survey, $75\\%$ of riders play sport and $55\\%$ of walkers play sport. By how many percentage points is the riders' percentage higher?"
      steps:
        - ["$30 \\div 40 = 0.75$", "the riders' row percentage"]
        - ["$33 \\div 60 = 0.55$", "the walkers' row percentage"]
        - ["$75 - 55 = 20$", "the difference, in percentage points"]
      answer: "20"
      answerLabel: "Percentage points higher"
      tolerance: 0
      feedback:
        - ["3", "That is the difference in the counts, 33 − 30. Compare the percentages instead."]
        - ["27", "Check the subtraction: 75 − 55."]
      criteria:
        - "I used a row percentage for each group."
        - "I subtracted the two percentages."
        - "I said what each percentage is of."
      explain: "75% − 55% = 20 percentage points. 75% of riders play sport and 55% of walkers do."
  - check:
      type: question
      q: "Which sentence reports the table correctly?"
      options: ["75% of the students who ride play sport, and 55% of the students who walk do", "75% of the students play sport", "75% of the sport players ride", "Riders play more sport than anyone, so riding makes you sporty"]
      answer: 0
      feedback: [null, "75% is the percentage of riders. It is not the percentage of all students.", "That reverses the direction. 75% is the percentage of riders who play, not of players who ride.", "The table shows a link. It can't show that riding is the reason."]
      explain: "A row percentage names its group: 'of the students who ride'. It says what the table shows and no more."
```

### How many points higher

Work this out on paper first, then type your answer.

### The sentence

All the figures in this lesson are made up: the school, the 200 students and their travel and sport.

**Also used in**

- **News and surveys.** 'Women are twice as likely...' claims are about a percentage of each group; always ask 'percentage of what?'.
- **Health.** Rates in a two-way table, such as vaccinated or not against caught the illness or not, are compared by row percentages.
- **Next lesson.** A careful claim: what the table lets you say about a link, and what it doesn't.
