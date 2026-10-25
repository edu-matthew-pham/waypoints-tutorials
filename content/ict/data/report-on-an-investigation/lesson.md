---
order: 9
unit: report
title: Report on an investigation
summary: "A challenge that uses the whole course. Beans were grown in the dark, in shade and in the sun, five in each group. Use formulas and functions to summarise each group, a chart to show the comparison, and a sentence that says what the data does and does not show."
language: maths
hook: "A class grew bean plants in three places and measured every one. Now they have fifteen numbers and a question: does light matter? Turn the numbers into an answer someone else can check."
---
A class asked: **does light change how tall bean plants grow?** They grew five beans in the dark, five in shade and five in the sun, and measured each plant's height on day 10 (in cm). Here are the results.

| | A | B | C | D |
|---|---|---|---|---|
| **1** | Plant | Dark | Shade | Sun |
| **2** | 1 | {{dark[1]}} | {{shade[1]}} | {{sun[1]}} |
| **…** | … | … | … | … |
| **6** | 5 | {{dark[5]}} | {{shade[5]}} | {{sun[5]}} |

Your job is to report on it: summarise each group, chart the comparison, and say what the data shows. The last step also asks you to do the same in your own spreadsheet app.

## Predict: which group?

```step
stage: predict
insight: "Predicting before summarising separates what you expected from what the data shows."
check:
  type: predict
  q: "Before any sums: which group do you think grew tallest on average?"
  options: ["Dark", "Shade", "Sun", "They are all about the same"]
  actual: "Sun, with an average of {{avg(sun)}} cm, against {{avg(shade)}} cm for Shade and {{avg(dark)}} cm for Dark. The data agrees with the guess, but the sheet turns the guess into numbers anyone can check."
```

## Plan: what to work out

```step
stage: investigate
insight: "Choosing which summaries answer the question comes before building them."
tasks:
  - check:
      type: question
      q: "You want to compare how tall a typical bean is in each group. Which function on each column of five heights do you use?"
      options: ["AVERAGE", "SUM", "COUNT", "MIN only"]
      answer: 0
      feedback: [null, "A total would also grow with the number of plants, and it hides what a typical plant is like. The average is the typical height.", "COUNT says how many plants there are, which is five in every group.", "The shortest plant alone says very little about the group."]
      explain: "AVERAGE gives the typical height of each group, so the three groups can be compared fairly."
  - check:
      type: question
      q: "A ruler slip makes one Sun plant read {{sun[5] * 10}} cm instead of {{sun[5]}}. Which summaries would show something is wrong?"
      options: ["The tallest, and the average", "Only the shortest", "Only the count of plants", "None of them"]
      answer: 0
      feedback: [null, "The shortest would not change, so it would not show the slip.", "There would still be five plants, so the count would look right.", "A slip that far from the rest shows up in the tallest and drags the average up."]
      explain: "A slip far from the others shows in the tallest (MAX) and pulls the average. Checking the tallest and shortest is a quick check on the data."
```

### Typical height

### Catching a slip

## Summarise: one column at a time

```step
stage: practise
insight: "Writing summary formulas for one column and copying them across the other two uses SUM-style ranges, functions and copying together."
try: { playground: board, starter: "sheet.yml#summarise", height: 520 }
hint: ["In B8 type =AVERAGE(B2:B6). Then Copy B8 and Paste it into C8 and D8. The names move one column each time.", "Row 9 uses MAX, row 10 uses MIN. Row 11 counts plants taller than {{threshold}} cm with COUNTIF(B2:B6,\">10\").", "Write each row for column B, then copy it across."]
check: { type: board, text: "Summarise each group (columns B, C and D). Row 8: the average. Row 9: the tallest. Row 10: the shortest. Row 11: how many plants are taller than {{threshold}} cm.", when: "f_B8 = 1 and f_B9 = 1 and f_B10 = 1 and f_B11 = 1 and f_C8 = 1 and f_C9 = 1 and f_C10 = 1 and f_C11 = 1 and f_D8 = 1 and f_D9 = 1 and f_D10 = 1 and f_D11 = 1 and c_B8 = {{avg(dark)}} and c_B9 = {{max(dark)}} and c_B10 = {{min(dark)}} and c_B11 = {{above(dark, threshold)}} and c_C8 = {{avg(shade)}} and c_C9 = {{max(shade)}} and c_C10 = {{min(shade)}} and c_C11 = {{above(shade, threshold)}} and c_D8 = {{avg(sun)}} and c_D9 = {{max(sun)}} and c_D10 = {{min(sun)}} and c_D11 = {{above(sun, threshold)}} and n_errors = 0", explain: "Each column has an AVERAGE, a MAX, a MIN and a COUNTIF with the rule \">10\". Averages: Dark {{avg(dark)}}, Shade {{avg(shade)}}, Sun {{avg(sun)}}. Copying across moved each column letter for you." }
```

You wrote the formulas once and copied them across, and the sheet did the rest. If a measurement were corrected, which cells would change?

## Chart: show the comparison

```step
stage: make
insight: "Choosing the chart that compares three groups and naming it so a reader can use it is the move from the previous lesson applied to a result."
try: { playground: board, starter: "sheet.yml#chart", height: 700 }
hint: ["You want to compare three groups, so choose Column.", "Labels are the three group names in B1:D1. Values are the three averages in B8:D8.", "Say what is measured and the unit on the vertical axis."]
check: { type: board, text: "Chart the three group averages so a reader can compare them. Use the group names as labels (B1:D1) and the averages as values (B8:D8), with a title and both axis titles.", when: "ch_bar = 1 and ch_n = 3 and ch_sum = {{round(avg(dark)+avg(shade)+avg(sun), 2)}} and ch_title = 1 and ch_xlab = 1 and ch_ylab = 1", explain: "A column chart of three averages ({{avg(dark)}}, {{avg(shade)}} and {{avg(sun)}} cm) compares the groups. The title and axis titles say it is the average height on day 10, in cm." }
```

## Conclude: what does it show?

```step
stage: make
insight: "Writing a conclusion that matches the evidence, and no more, is the last step of a report."
check:
  type: question
  q: "Which sentence does this data support best?"
  options: ["On average, the beans grown in the sun were taller (about {{round(avg(sun), 0)}} cm) than those grown in the dark (about {{round(avg(dark), 0)}} cm).", "Sunlight makes every bean in the world grow taller.", "Light is the only thing that affects how tall beans grow.", "Beans in the dark did not grow at all."]
  answer: 0
  feedback: [null, "The data covers only these fifteen beans, so it cannot say what every bean everywhere does.", "The investigation changed light only, but it cannot say nothing else matters.", "The dark beans grew to about {{round(avg(dark), 0)}} cm, so they did grow."]
  explain: "The best sentence says what the averages show, for these plants, with numbers. It does not claim more than the data."
```

Now write your own conclusion in two sentences: what the chart shows, and one thing that would make you want to repeat the investigation.

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Reporting on real class data in Excel or Sheets uses every move in the course in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I typed a small set of results from a class investigation, wrote AVERAGE, MAX and MIN formulas and copied them across, made a chart with a title and axis titles, and wrote a sentence that says what it shows." }
```

Use results from your own class investigation if you have them, or this bean table. Check each formula by clicking it, check the chart answers the question, and keep the conclusion to what the numbers show.

```context
data:
  dark: [4, 5.5, 3, 6, 4.5]
  shade: [9, 10.5, 8, 11, 9.5]
  sun: [12, 14, 11.5, 13, 14.5]
  threshold: 10
assert:
  - avg(sun) > avg(shade)
  - avg(shade) > avg(dark)
```
