---
order: 35
unit: stats9
node: AC9M9ST03 n2
uses: ["AC9M9ST03 n1", "AC9M7ST02 n3"]
connection: bus-lateness
title: "Two data sets, one scale"
summary: "To compare two data sets fairly, draw them on the same scale, one above the other. Then the centre, the spread and the shape can be read side by side."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two battery brands: which lasts longer? Plot them so you can see."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8385
  url: http://127.0.0.1:8385/index.html
  readySelector: "#board"
  layout: full
---
A class tested 9 batteries of brand A and 9 of brand B and recorded how many hours each lasted (made up for the task). A fair comparison puts both on one scale. Have a guess which brand has the wider spread of results, and we'll come back to it at the end.

## Predict: which display compares fairly

```step
stage: "predict"
insight: "Choosing a display for two sets shows whether students use one shared scale or two separate graphs."
check: {"type": "predict", "q": "You want to compare the battery lives of two brands. Which display is fairest?", "options": ["Two dot plots on the same scale, one above the other", "Two dot plots, each with its own scale", "Two pie charts"], "actual": "Two dot plots on the same scale. With a shared scale you can see at once which is higher and which is more spread out."}
```

## Run: match the spreads

```step
stage: "run"
insight: "Adding the extreme values to brand A makes its range equal to brand B's, so the two plots now have the same width."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Brand B's results run from 5 to 15 hours. Add dots to brand A (click the line) until brand A has the same range.", "when": "r = R", "explain": "Adding a 5 and a 15 to A gives it a range of 10, the same as B's."}
```

## Investigate: compare fairly

```step
stage: "investigate"
insight: "Same scale lets you compare centre and spread by eye; separate scales hide the difference, and two data sets with the same median can still differ in spread."
tasks:
  - {"check": {"type": "question", "q": "Why must two plots being compared use the same scale?", "options": ["So the same distance means the same number on both", "So they look neat", "So they are the same colour", "So both have the same number of dots"], "answer": 0, "feedback": [null, "Neatness is not the point.", "Colour isn't relevant.", "The counts can differ."], "explain": "With the same scale, a gap or a spread of the same length means the same amount on both."}, "smaller": {"check": {"type": "question", "q": "If one plot goes 0 to 20 and the other 0 to 100, can you compare their spreads by eye?", "options": ["No: the same distance means different numbers", "Yes"], "answer": 0, "feedback": [null, "The widths are not comparable."], "explain": "The scales differ, so the widths mislead."}}}
  - {"check": {"type": "number", "q": "Brand B's results run from 5 to 15 hours. What is its range?", "answer": 10, "tolerance": 0, "explain": "15 − 5 = 10."}}
  - {"check": {"type": "bug", "code": "working.txt#nina", "text": "Nina compares the brands. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "compare-different-scales", "explain": "Line 2: the two plots use different scales, so the same width shows different spreads. Redraw both on one scale before comparing."}}
```

### Why share a scale

```worked
A:\ 8\text{ to }12,\ \text{range }4 :: Read the lowest and highest.
B:\ 5\text{ to }15,\ \text{range }10 :: Same scale, so it is clearly wider.
\text{both medians} = 10 :: The centres agree, the spreads do not.
```

### Range of B

### Find the mistake

## Modify: change the sets

```step
stage: "modify"
insight: "Changing brand A to be higher or more spread out shows how each feature appears on a shared scale."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Add dots to brand A until its mean is higher than brand B's mean.", "when": "m > M", "explain": "Adding a 16 to A raises its mean to about 10.6, above B's 10.56."}}
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Make brand A wider than brand B: give A a range bigger than B's.", "when": "r > R", "explain": "Adding a 0 makes A's range 12, more than B's 10."}}
  - {"type": "question", "q": "Two classes' test marks are drawn as back-to-back stem plots with the same stems. What does that give you?", "options": ["A fair comparison of centre and spread", "Nothing: they are separate", "A pie chart", "A scatter plot"], "answer": 0, "feedback": [null, "Back-to-back stems share the same scale.", "It is a plot of one number.", "It is not a scatter plot."], "explain": "Back-to-back stem plots share their stems, so you can compare the two sets side by side."}
```

### Higher mean

### Wider spread

### Back to back

## Practise: ranges and medians

```step
stage: "practise"
insight: "Finding range and median for two sets and comparing, and a review of shape."
tasks:
  - {"check": {"type": "number", "q": "Set A: 12, 14, 15, 17, 18. Set B: 9, 13, 15, 18, 24. What is B's range minus A's range?", "answer": 9, "tolerance": 0, "explain": "B: 24 − 9 = 15. A: 18 − 12 = 6. 15 − 6 = 9."}}
  - {"check": {"type": "number", "q": "What is the median of set B (9, 13, 15, 18, 24)?", "answer": 15, "tolerance": 0, "explain": "The middle (3rd) value."}}
  - {"check": {"type": "question", "q": "Review: the mean is 30 and the median 24. What shape is it likely?", "options": ["Skewed right", "Skewed left", "Symmetric", "Uniform"], "answer": 0, "feedback": [null, "The mean would be below the median.", "They would be equal.", "Not flat."], "explain": "Mean above median means a tail to the right."}}
```

### Range difference

### Median

### Review

## Make: how much wider

```step
stage: "make"
insight: "Returning to the batteries: put a number on how much more spread one brand has, on paper."
check: {"type": "reasoning", "paper": true, "q": "Brand A lasted 8 to 12 hours and brand B 5 to 15 hours. How many hours wider is B's range than A's? (The numbers are made up for the task.)", "steps": [["A: $12 - 8 = 4$", "range of A"], ["B: $15 - 5 = 10$", "range of B"], ["$10 - 4 = 6$", "difference"]], "answer": "6", "answerLabel": "Hours wider", "tolerance": 0, "feedback": [["10", "That is B's range, not the difference."], ["4", "That is A's range."]], "criteria": ["I found both ranges.", "I subtracted.", "I put both on the same scale to check."], "explain": "B's range is 6 hours wider: less predictable, even though the medians are the same."}
```

Which brand would you rather buy if you want to know how long it will last?

**Also used in**

- **Sport.** Comparing two teams' scores on the same scale shows who is more consistent.
- **Weather.** Two cities' monthly rainfall plotted together show which is steadier.
- **Next lesson.** Judging by centre, spread, shape and outliers.
