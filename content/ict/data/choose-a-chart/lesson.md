---
order: 8
unit: showing
title: Choose a chart
summary: "A chart should answer a question. A column chart compares amounts in separate groups, a line chart shows how something changes over time, a scatter chart shows whether two measurements go together, and a pie chart shows parts of one whole. A reader also needs a title and axis titles that say what is measured and in what units."
language: maths
hook: "Anyone can click 'chart' and get a picture. A good scientist asks first: what do I want the reader to see?"
---
A chart is made from a table. In a spreadsheet you pick the cells that hold the **labels** (what each point is) and the **values** (the numbers), then choose a **type**. Here the board lets you type the two ranges and choose the type.

The table below holds a cup of water cooling down, measured every minute. The labels are in A2:A7 and the values in B2:B7.

| | A | B |
|---|---|---|
| **1** | Minute | Temperature (°C) |
| **2** | 0 | 80 |
| **3** | 1 | 71 |
| **…** | … | … |
| **7** | 5 | 49 |

## Predict: which chart?

```step
stage: predict
insight: "Committing to a chart type for a question tests the move: the question decides the chart."
check:
  type: predict
  q: "You want to show how the water's temperature changes as the minutes go by. Which chart shows it best?"
  options: ["A line chart", "A pie chart", "A column chart with one column", "No chart is any use"]
  actual: "A line chart. The points follow each other in time, and a line joins them so the eye sees the water cooling and how fast. A pie chart is for parts of a whole, which temperatures are not."
```

## Try: make a line chart

```step
stage: run
insight: "Choosing the line type and the ranges and reading the picture settles the prediction."
try: { playground: board, starter: "sheet.yml#run", height: 700 }
hint: ["Under 'Chart type' choose Line. In Labels type A2:A7 and in Values type B2:B7.", "Add a chart title and the two axis titles, with units."]
check: { type: board, text: "Make a line chart of the temperature (values B2:B7) against the minute (labels A2:A7). Give it a title and both axis titles.", when: "ch_line = 1 and ch_n = 6 and ch_sum = 375 and ch_title = 1 and ch_xlab = 1 and ch_ylab = 1", explain: "A line chart of six points, titled and with both axes named, shows the water cooling and how quickly it slows down." }
```

Was your guess right? The line falls quickly at first and then flattens. Try changing the type to Column or Pie. Which still shows the cooling, and which hides it?

## Worked example: the question picks the chart

```step
stage: investigate
insight: "Matching the question to the chart type models the move. Sam draws a pie of the temperatures, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "A class counted how many beans were in each of four size groups. Which chart compares the four counts best?"
      options: ["A column chart", "A line chart", "A scatter chart", "A pie chart of one number"]
      answer: 0
      feedback: [null, "A line suggests the groups follow each other in time or order, which sizes of groups do not.", "A scatter chart needs two numbers for every point, not a count for each group.", "A pie shows parts of a whole. Four counts can be a pie, but comparing them is easier with columns."]
      explain: "Separate groups with a number each are compared with a column chart: the height of a column is the size of the count."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's chart does not show the water cooling. Click the line where Sam first goes wrong."
      answer: 2
      fault: logic
      misconception: pie-for-change
      explain: "Line 2: a pie chart shows parts of one whole, and six temperatures are not parts of anything. The slices look nearly the same and the cooling disappears. A line chart was the right choice."
  - check:
      type: question
      q: "Sam's column chart of the animals' lifespans has no title and no axis titles. What is the reader missing?"
      options: ["What the columns measure, and in what units", "How tall the columns should be", "Which colour to use", "The cell names"]
      answer: 0
      feedback: [null, "The height comes from the data. The reader needs to know what it means.", "Colour is a choice. The reader needs words.", "Readers of a chart do not need cell names, they need to know what was measured."]
      explain: "A title says what the chart is about and the axis titles say what each axis measures, with units such as years or °C."
```

### Four charts

```worked
\text{Column chart} :: Compares amounts in separate groups, such as the lifespan of each animal.
\text{Line chart} :: Shows change over time, joined up so you see the trend.
\text{Scatter chart} :: Each dot is one thing with two measurements, such as a person's arm span and height. It shows whether the two go together.
\text{Pie chart} :: Shows how one whole is shared, so the parts must add up to something.
\text{Title and axis titles} :: Say what is measured and in what units, so a reader needs nothing else.
```

Now: which chart compares groups?

### Find the mistake

### What is missing?

## Vary: change the question

```step
stage: modify
insight: "Each task changes the question: two measurements, parts of a whole, then a misleading axis."
tasks:
  - check:
      type: question
      q: "You measured the arm span and the height of eight people. You want to see whether people with longer arm spans are also taller. Which chart do you use?"
      options: ["A scatter chart", "A pie chart", "A line chart over time", "A column chart of arm spans only"]
      answer: 0
      feedback: [null, "A pie shows parts of one whole, and a person's arm span is not part of their height.", "Nothing here changes over time, so a line has nothing to follow.", "That ignores the heights, which are the second measurement."]
      explain: "A scatter chart puts each person at one dot, arm span along and height up. A pattern in the dots shows whether the two go together."
  - check:
      type: number
      q: "A pie chart shows how 20 hours are spent. One slice is 5 hours. What percentage of the pie is that slice?"
      answer: 25
      explain: "5 out of 20 is a quarter, which is 25%."
  - check:
      type: question
      q: "A column chart's vertical axis starts at 50 instead of 0, so a column of 52 looks twice as tall as a column of 51. What does that do?"
      options: ["Makes a small difference look big", "Makes a big difference look small", "Nothing, the numbers are the same", "Makes the chart a line chart"]
      answer: 0
      feedback: [null, "It is the other way round: a cut-off axis exaggerates small differences.", "The numbers are the same, but the picture is not, and readers go by the picture.", "The type of chart does not change when the axis does."]
      explain: "A column's height should show its size, so the axis for columns should start at 0. Starting higher exaggerates small differences."
```

### Do they go together?

### What share?

### A cut-off axis

## Practise: build two charts

```step
stage: practise
insight: "Building a column chart and then a scatter chart, each with a title and axis titles."
try: { playground: board, starter: "sheet.yml#practise", height: 700 }
tasks:
  - check:
      type: question
      q: "What should the vertical axis title of a chart of the water's temperature say?"
      options: ["Temperature (°C)", "Temperature", "B2:B7", "Chart 1"]
      answer: 0
      feedback: [null, "It is better with the unit, so the reader knows whether it is °C or °F.", "Cell names mean nothing to a reader.", "That says nothing about what is measured."]
      explain: "Say what is measured and the unit: Temperature (°C)."
  - starter: "sheet.yml#practise"
    hint: ["Choose Column. Labels: A2:A9 (the animals). Values: D2:D9 (the lifespans).", "Add a title, a horizontal axis title and a vertical axis title with the unit."]
    check: { type: board, text: "Make a column chart of the animals' lifespans, with a title and both axis titles.", when: "ch_bar = 1 and ch_n = 8 and ch_sum = 220 and ch_title = 1 and ch_xlab = 1 and ch_ylab = 1", explain: "The chart has eight columns, one per animal, with the lifespan in years up the side, a title, and both axes named." }
  - starter: "sheet.yml#practise-scatter"
    hint: ["Choose Scatter. For a scatter chart, Labels holds the numbers for the horizontal axis: B2:B9 (arm span). Values holds the heights: C2:C9.", "Name both axes, with cm."]
    check: { type: board, text: "Make a scatter chart with arm span along the bottom (B2:B9) and height up the side (C2:C9). Give it a title and both axis titles.", when: "ch_scatter = 1 and ch_n = 8 and ch_sum = 1335 and ch_title = 1 and ch_xlab = 1 and ch_ylab = 1", explain: "Each dot is one person, with arm span along and height up. The dots rise in a line, so people with longer arm spans are taller." }
```

### Axis title

### Column chart

### Scatter chart

## Make: share a day

```step
stage: make
insight: "Choosing the right chart for a question about parts of a whole and building it is the move on a new question."
try: { playground: board, starter: "sheet.yml#make", height: 700 }
hint: ["Type how many hours you spend on each activity in B2 to B7. They should add up to 24.", "Which chart shows how one whole (a day) is shared? Choose it, then give it labels, values and a title."]
check: { type: board, text: "Type how you spend your 24 hours (in B2 to B7, adding up to 24). Choose the chart that shows how a whole is shared and give it a title.", when: "ch_pie = 1 and ch_n = 6 and ch_sum = 24 and ch_title = 1", explain: "A pie chart of the six activities shows how one day is shared out, and the parts add up to 24 hours." }
```

Look at your pie. Would a column chart show the same thing as clearly? What does each make easy to see?

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Making a chart in Excel or Sheets shows the same choices in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I selected a table of numbers, inserted a chart of the right type for my question, and gave it a title and axis titles with units." }
```

Excel, Google Sheets and Numbers all make charts the same way: select the cells, choose Insert and then Chart, and the app offers a type. It often suggests one, and the suggestion is only a guess. Check it answers your question, then add a title and axis titles. Leave out 3D effects: they make the sizes harder to read.
