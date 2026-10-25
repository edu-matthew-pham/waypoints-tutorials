---
order: 33
unit: stats9
node: AC9M9ST02 n2
uses: ["AC9M9ST01 n2", "AC9M8ST03 n1"]
connection: cut-axis
title: "Graphs that make a point"
summary: "A graph's axis, scale and window can make a small difference look huge. Read the numbers, check where the axis starts, and redraw from zero."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "An ad shows its battery lasting more than twice as long as the rival's. Does it?"
---
An advertisement shows a bar chart of battery life: brand X is 100 hours and brand Y is 94 hours (made up for the task). The bar for X looks about two and a half times the height of the bar for Y. Have a guess how much longer brand X really lasts, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A bar chart. Brand X has a tall bar and brand Y a short one, with the vertical axis starting at 90 hours. X is 100 hours and Y is 94 hours."><svg viewBox="0 0 360 170" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="60" y1="20" x2="60" y2="140" stroke-width="1.5"/><line x1="60" y1="140" x2="330" y2="140" stroke-width="1.5"/><rect x="100" y="20" width="60" height="120" fill="#888780" fill-opacity="0.35" stroke-width="2"/><rect x="220" y="92" width="60" height="48" fill="#888780" fill-opacity="0.15" stroke-width="2"/><text x="108" y="157" fill="currentColor" stroke="none">Brand X</text><text x="228" y="157" fill="currentColor" stroke="none">Brand Y</text><text x="12" y="24" fill="currentColor" stroke="none">100 h</text><text x="20" y="144" fill="currentColor" stroke="none">90 h</text><text x="118" y="14" fill="currentColor" stroke="none">100 h</text><text x="238" y="86" fill="currentColor" stroke="none">94 h</text></svg></figure>

## Predict: how much longer

```step
stage: "predict"
insight: "Estimating from the picture shows whether students trust the bar heights (2.5 times) or the labels (6% longer)."
check: {"type": "predict", "q": "The chart shows X as about 2.5 times the height of Y. The labels say 100 hours and 94 hours. How much longer does X really last?", "options": ["About 6% longer", "About 2.5 times as long", "About 150% longer"], "actual": "About 6% longer. 100 ÷ 94 is about 1.06. The bars look different because the axis starts at 90, not 0."}
```

## Run: height ratio

```step
stage: "run"
insight: "With the axis starting at 90 hours the bars show only the part above 90, so their heights are in the ratio 10 to 4."
check: {"type": "number", "q": "The axis starts at 90 hours. Measured from 90, X is 10 hours tall and Y is 4 hours tall. How many times as tall does X look? (a decimal)", "answer": 2.5, "tolerance": 0.01, "explain": "10 ÷ 4 = 2.5."}
```

## Investigate: read the axis

```step
stage: "investigate"
insight: "A bar chart is only fair if its axis starts at zero; a cut axis exaggerates the difference, and the labels tell the truth."
tasks:
  - {"check": {"type": "question", "q": "What is wrong with the chart?", "options": ["The vertical axis starts at 90 hours, not 0", "The bars are the wrong colour", "There are only two bars", "The labels are too small"], "answer": 0, "feedback": [null, "Colour doesn't change the numbers.", "Two bars can be fine.", "The labels are the honest part."], "explain": "A bar's length should be in proportion to its value, which needs the axis to start at 0."}, "smaller": {"check": {"type": "question", "q": "Where does this chart's vertical axis start?", "options": ["At 90 hours", "At 0 hours"], "answer": 0, "feedback": [null, "Zero would show the true proportions."], "explain": "At 90 hours, not zero."}}}
  - {"check": {"type": "number", "q": "If the axis started at 0 and X were 100 mm tall, how tall (mm) would Y be?", "answer": 94, "tolerance": 0, "explain": "94 mm: the bars would be in the ratio 100 to 94."}}
  - {"check": {"type": "bug", "code": "working.txt#pia", "text": "Pia reads the chart. Click the line where she goes wrong.", "answer": 3, "fault": "logic", "misconception": "truncated-axis-ratio", "explain": "Line 3: the bars show only the parts above 90, so their heights are in the ratio 10 : 4. The real values are 100 and 94, a difference of 6%."}}
```

### Spot the trick

```worked
\tfrac{10}{4} = 2.5 :: Bar heights with the axis starting at 90.
\tfrac{100}{94} \approx 1.06 :: The real ratio.
\tfrac{100 - 94}{94} \approx 6\% :: X lasts about 6% longer.
```

### Redraw

### Find the mistake

## Modify: other tricks

```step
stage: "modify"
insight: "Other ways displays steer a conclusion."
tasks:
  - {"check": {"type": "question", "q": "A line graph of a stock over 3 days zooms in so a 1% change fills the whole graph. What is the trick?", "options": ["The window and scale exaggerate a small change", "The line is straight", "There is no label", "It uses lines"], "answer": 0, "feedback": [null, "The line shape isn't the issue.", "Labels are not the issue.", "Lines are fine for change over time."], "explain": "Zooming in on a tiny range makes small changes look dramatic."}}
  - {"check": {"type": "question", "q": "A pie chart shows 4 slices which add up to 120%. What does that show?", "options": ["The chart is wrong or misleading", "Nothing: pies can add to 120%", "It is correct", "The slices are too small"], "answer": 0, "feedback": [null, "Parts of a whole add to 100%.", "The slices must add to 100%.", "Size isn't the point."], "explain": "Parts of a whole add to 100%, so 120% means a mistake or a trick."}}
  - {"check": {"type": "question", "q": "A report only shows the three months when sales rose. What is the trick?", "options": ["Choosing the time window that suits the story", "Using months", "Showing sales", "Using a table"], "answer": 0, "feedback": [null, "Months are fine.", "Sales are fine.", "A table is fine."], "explain": "Selecting only favourable data supports a story that the whole record doesn't."}}
```

### Zoomed in

### Slices over 100%

### Cherry-picked months

## Practise: bars from a cut axis

```step
stage: "practise"
insight: "Working out what cut-axis bars really show, and a review of averages."
tasks:
  - {"check": {"type": "number", "q": "Two bars have axis starting at 50. Values 80 and 60. How many times taller does the first bar look?", "answer": 3, "tolerance": 0.01, "explain": "(80 − 50) ÷ (60 − 50) = 30 ÷ 10 = 3."}, "hint": ["Measure each bar from 50.", "Subtract 50 from each."]}
  - {"check": {"type": "number", "q": "The real values are 80 and 60. How many percent bigger is 80 than 60? (1 decimal)", "answer": 33.3, "tolerance": 0.1, "explain": "20 ÷ 60 = 0.333."}}
  - {"check": {"type": "number", "q": "Review: five values are 12, 15, 9, 14 and 10. What is the mean?", "answer": 12, "tolerance": 0, "explain": "60 ÷ 5 = 12."}}
```

### Cut axis

### True difference

### Review

## Make: back to the ad

```step
stage: "make"
insight: "Returning to the ad: the true difference, written up, on paper."
check: {"type": "reasoning", "paper": true, "q": "Brand X lasts 100 hours and brand Y lasts 94 hours. How many percent longer does X last than Y? (1 decimal place) (The numbers are made up for the task.)", "steps": [["Difference: $100 - 94 = 6$", "subtract"], ["Percent of Y: $6 \\div 94 \\times 100 = 6.4$", "over the smaller value"]], "answer": "6.4", "answerLabel": "Percent longer", "tolerance": 0.1, "feedback": [["2.5", "That is the height ratio on the cut axis."], ["6", "That is the difference in hours."]], "criteria": ["I found the difference.", "I divided by the smaller value.", "I could redraw it fairly."], "explain": "About 6.4% longer. An honest chart starts the axis at 0, where the bars would be almost the same height."}
```

Redraw the chart with the axis from 0 and compare the two bars.

**Also used in**

- **News and politics.** Charts of unemployment or temperature often cut the axis to make changes look large.
- **Advertising.** Comparisons with a "tiny" competitor use the same trick.
- **Next lesson.** Describing the shape of a distribution.
