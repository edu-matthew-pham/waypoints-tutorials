---
order: 37
unit: stats9
node: AC9M9ST04 n1
uses: ["AC9M9ST03 n1", "AC9M7ST01 n1"]
title: "The right graph for the data"
summary: "Each kind of data has a display that suits it: bars for categories, pies for parts of a whole, lines for change over time, histograms for measurements and scatter plots for two numbers."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Favourite fruit, daily temperature, heights of students: do they all want the same graph?"
---
The school canteen wants a graph for the newsletter. The data could be favourite fruit (categories), temperature through the day (change over time), or students' heights (measurements). The right display depends on what kind of data it is and what you want to show. Have a guess which display suits the share of canteen sales by food type, and we'll come back to it at the end.

## Predict: parts of a whole

```step
stage: "predict"
insight: "Choosing a display for the share of sales shows whether students pick a line (time) or a pie or bar (parts of a whole)."
check: {"type": "predict", "q": "Which display best shows what share of canteen sales each food type makes up?", "options": ["A pie chart or a bar chart", "A line graph", "A scatter plot"], "actual": "A pie chart (or bar chart). The parts add up to a whole, so a pie shows the share well; bars let you compare sizes."}
```

## Run: change over time

```step
stage: "run"
insight: "Data that changes in order, like temperature through the day, suits a line graph, which joins neighbouring points."
check: {"type": "question", "q": "The canteen records the number of students in the queue every 10 minutes through lunch. Which display shows how it changes?", "options": ["A line graph", "A pie chart", "A bar chart of the colours", "A stem-and-leaf plot only"], "answer": 0, "feedback": [null, "A pie shows parts of a whole, not change over time.", "Colours do not come into it.", "A stem plot ignores the order."], "explain": "A line graph: the points are in order of time, and the line shows the trend."}
```

## Investigate: match the display

```step
stage: "investigate"
insight: "Categories suit bars, parts of a whole suit pies, change over time suits lines, measurements suit histograms and two linked numbers suit a scatter plot; using the wrong one hides or misleads."
tasks:
  - {"check": {"type": "question", "q": "Favourite fruit of 30 students (apple, banana, orange). Which display suits categories?", "options": ["A bar chart", "A line graph", "A scatter plot", "A histogram of the heights"], "answer": 0, "feedback": [null, "The categories have no order, so joining them with a line is wrong.", "A scatter plot needs two numbers.", "A histogram is for measurements."], "explain": "A bar chart, with a separate bar for each category."}, "smaller": {"check": {"type": "question", "q": "Are apple, banana and orange numbers or categories?", "options": ["Categories", "Numbers"], "answer": 0, "feedback": [null, "They are names, not measurements."], "explain": "Categories (names)."}}}
  - {"check": {"type": "question", "q": "The heights (in cm) of 120 students. Which display suits measurements spread over a range?", "options": ["A histogram", "A pie chart", "A line graph over time", "A bar chart of names"], "answer": 0, "feedback": [null, "Heights do not make up parts of a whole.", "They are not in time order.", "Heights are numbers, not names."], "explain": "A histogram groups the measurements into equal-width intervals and shows the shape."}}
  - {"check": {"type": "bug", "code": "working.txt#sia", "text": "Sia graphs the favourite fruits. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "line-for-categories", "explain": "Line 2: fruits are categories with no order, so a line joining them suggests a trend that is not there. Use a bar chart."}}
```

### Categories

```worked
\text{categories} \to \text{bar chart} :: Names with counts.
\text{parts of a whole} \to \text{pie or bar} :: Shares that add to 100%.
\text{change over time} \to \text{line};\ \text{measurements} \to \text{histogram} :: Order and shape.
```

### Measurements

### Find the mistake

## Modify: choose for new data

```step
stage: "modify"
insight: "Choosing a display for new situations."
tasks:
  - {"check": {"type": "question", "q": "Hours of study and test marks for 25 students. Which display shows whether more study goes with higher marks?", "options": ["A scatter plot", "A pie chart", "A bar chart of the students' names", "A line graph over time"], "answer": 0, "feedback": [null, "A pie shows parts of one total.", "Names are not the point.", "The data are not in time order."], "explain": "A scatter plot plots each student as a point (study, mark)."}}
  - {"check": {"type": "question", "q": "Rainfall each month for a year. Which is a good display?", "options": ["A column graph or a line graph by month", "A pie chart", "A scatter of the first letter", "A stem-and-leaf plot only"], "answer": 0, "feedback": [null, "The months are not parts of one whole share.", "Irrelevant.", "It ignores the order of months."], "explain": "Months are in time order, so a line or column graph works."}}
  - {"check": {"type": "question", "q": "A pie chart is best when...", "options": ["There are a few parts that add to a whole", "There are 20 categories", "The data change over time", "You have two numbers for each person"], "answer": 0, "feedback": [null, "Too many slices are unreadable.", "That is a line graph.", "That is a scatter plot."], "explain": "A few slices of a whole."}}
```

### Study and marks

### Monthly rain

### When a pie works

## Practise: match more data

```step
stage: "practise"
insight: "Matching displays and a pie-chart calculation, with a review of comparing sets."
tasks:
  - {"check": {"type": "question", "q": "The number of students in each year level (7 to 10). Best display?", "options": ["A bar chart", "A line graph over time", "A scatter plot", "A pie of ages"], "answer": 0, "feedback": [null, "The year levels are not time in the sense of a trend.", "A scatter needs two numbers each.", "A pie of ages is a different data set."], "explain": "Four categories with counts: a bar chart."}}
  - {"check": {"type": "number", "q": "Out of 60 students, 15 walk. What angle would the walking slice of a pie chart have (degrees)?", "answer": 90, "tolerance": 0, "explain": "15 ÷ 60 × 360 = 90."}}
  - {"check": {"type": "number", "q": "Review: set A has range 6 and set B has range 15. How much wider is B?", "answer": 9, "tolerance": 0, "explain": "15 − 6 = 9."}}
```

### Year levels

### Pie angle

### Review

## Make: the fruit graph

```step
stage: "make"
insight: "Returning to the opening: build the pie chart numbers for favourite fruit, on paper."
check: {"type": "reasoning", "paper": true, "q": "30 students chose a favourite fruit: 12 apple, 9 banana, 6 orange and 3 other. What angle should the apple slice of a pie chart have? (The numbers are made up for the task.)", "steps": [["Fraction: $12 \\div 30 = 0.4$", "apples out of all"], ["Angle: $0.4 \\times 360 = 144$", "a full circle is 360°"]], "answer": "144", "answerLabel": "Angle (degrees)", "tolerance": 0, "feedback": [["12", "That is the count. Make it a share of 360°."], ["40", "That is the percentage."]], "criteria": ["I found the share first.", "I scaled it to 360°.", "I chose a display that suits the data."], "explain": "144°. A bar chart would also work; you can compare bars more easily than slices, a pie shows the share of the whole."}
```

Check: the four slices should add to 360°.

**Also used in**

- **Science.** A line graph of temperature against time; a scatter plot of force against stretch.
- **News.** Budgets are shown as pies or bars, populations over time as lines.
- **Next lesson.** Choosing a display for a particular audience and purpose.
