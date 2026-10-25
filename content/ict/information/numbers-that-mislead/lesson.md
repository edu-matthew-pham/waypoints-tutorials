---
order: 6
unit: mislead
title: Numbers and charts that mislead
summary: "A chart can use true numbers and still give the wrong idea. Three ways to check: where does the vertical axis start (a column chart that does not start at zero makes small differences look big)? Do the parts of a pie add up to one whole? How many people or things were counted (a tiny sample can say almost anything)? Read the numbers, not just the shape."
language: science
shape: 5e
hook: "A made-up newsletter says 'Fruit sales soar!' and shows a column three times taller than the other. The numbers are true. Is the headline?"
---
In [Choose a chart](../../data/choose-a-chart/) you picked the chart that answers a question. Here the chart has been chosen for you, by someone who wants you to see something. The numbers can all be true and the picture can still mislead.

Three things to check:

- **The axis.** Where does the vertical axis start? A column chart whose axis starts above zero cuts off the bottom of every column, so a small difference looks huge.
- **The whole.** A pie chart shows parts of **one whole**. If the parts add to more than 100%, or are not parts of the same thing, it is the wrong chart.
- **How many.** How many people or things were counted? "75% of people loved it" means little if only four were asked.

The canteen, the newsletter and the numbers are made up.

## Engage: how big is the rise?

```step
stage: predict
insight: "Committing to a size before reading the numbers tests the move: the shape of a chart is not the size of the change."
check:
  type: predict
  q: "The newsletter's chart shows the Term 2 column about three times as tall as Term 1. About how much more fruit was sold each day in Term 2?"
  options: ["About three times as much", "About twice as much", "A little more", "I can't tell without the numbers"]
  actual: "A little more: 55 pieces a day instead of 52, about 6% more. The axis starts at 50, so the columns show only the top 2 and 5 pieces. 'I can't tell without the numbers' was a strong answer: the shape alone could not tell you."
```

## Explore: fix the axis

```step
stage: run
insight: "Starting the axis at zero settles the prediction: the columns are almost the same height."
try: { playground: board, starter: "sheet.yml#run", height: 700 }
hint: ["Find the box Vertical axis starts at, under the chart settings.", "Type 0 in it, and watch the columns."]
smaller:
  check: { type: question, q: "Look at the chart before changing anything. What number is at the very bottom of its vertical axis?", options: ["50", "0", "52", "55"], answer: 0, feedback: [null, "Read the lowest number on the axis.", "52 is Term 1's value, not where the axis starts.", "55 is Term 2's value."], explain: "The axis starts at 50, so each column shows only the part above 50: 2 and 5, not 52 and 55." }
check: { type: board, text: "Make the column chart start its vertical axis at zero, so the columns show the real difference.", when: "ch_bar = 1 and ch_zero = 1 and ch_n = 2", explain: "From zero, the columns are 52 and 55 high: almost the same. The rise is real but small, so 'soar' is too strong." }
```

Was your guess right? Read the numbers on the axis before you read the shape. A column chart compares amounts by height, so its axis should start at zero.

## Explain: three checks

```step
stage: investigate
insight: "Naming the three checks on new charts, then a mistake planted after them, explains the move."
tasks:
  - check:
      type: question
      q: "A pie chart of 'What students do at lunch' has slices for sport 60%, reading 30% and talking 50%. What is wrong?"
      options: ["The parts add to 140%, so they are not parts of one whole: students could pick more than one", "Nothing: the biggest slice is sport", "Pie charts can't show percentages", "There should be more colours"]
      answer: 0
      feedback: [null, "Add the slices. A pie must add to 100%.", "Pie charts often show percentages, if they add to 100%.", "Colour is not the problem. Add the numbers."]
      explain: "A pie shows parts of one whole, adding to 100%. When people can choose more than one thing, a column chart of each choice fits better."
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai's poster says something the survey cannot show. Click the line where Kai first goes wrong."
      answer: 3
      fault: logic
      misconception: shape-not-numbers
      explain: "Line 3: Kai wrote that most students in the school love the new menu, from a survey of four friends. Four people can't speak for a whole school, and friends may think alike. 75% of 4 is 3 people."
```

### The pie

### Find Kai's mistake

## Elaborate: how many were asked?

```step
stage: modify
insight: "Each task changes the number counted, so students decide when a result can say something about everyone."
tasks:
  - check:
      type: sort
      q: "Which survey could tell you most about what all the students in a school of 600 think?"
      options: ["Tells you a lot", "Tells you very little"]
      items:
        - ["200 students chosen from every year level", "Tells you a lot", "Many students, from every part of the school."]
        - ["5 students from one class", "Tells you very little", "Too few, and all from one class."]
        - ["The 30 students in the chess club", "Tells you very little", "One group may think alike."]
        - ["Every student, in a form at roll call", "Tells you a lot", "Everyone was asked."]
  - check:
      type: question
      q: "A made-up advert says 9 out of 10 kids prefer FizzPop. What would you want to know first?"
      options: ["How many kids were asked, and who asked them", "What colour the can is", "Whether 9 is a big number", "Nothing: 9 out of 10 is clear"]
      answer: 0
      feedback: [null, "Colour says nothing about the survey.", "9 out of 10 could be 9 out of 10 kids, or 900 out of 1000.", "The advert wants a sale. How the number was found matters."]
      explain: "9 out of 10 might mean 10 kids asked by FizzPop. How many, and who asked, decide how much the number can tell you."
```

### Who was asked

### 9 out of 10

## Practise: is it a big change?

```step
stage: practise
insight: "Fixing a second cut-off axis on new data repeats the habit."
try: { playground: board, starter: "sheet.yml#practise", height: 700 }
hint: ["Read the numbers in the sheet first. How much do they change?", "Set Vertical axis starts at to 0."]
check: { type: board, text: "The chart makes walking to school look like it swings up and down. Make the axis start at zero.", when: "ch_bar = 1 and ch_zero = 1 and ch_n = 3", explain: "From zero, 120, 118 and 121 are almost the same. Walking to school hardly changed." }
```

## Elaborate: in your spreadsheet app

```step
stage: make
tier: typical
insight: "Setting the axis start in the school's own app shows the same setting exists everywhere."
check: { type: reflect, text: "In the spreadsheet app my school uses, I made a column chart of two close numbers, set the vertical axis to start above zero, then set it back to zero, and said how the picture changed." }
```

In Excel: double-click the vertical axis, then under Axis Options set Bounds, Minimum. In Google Sheets: Chart editor, Customise, Vertical axis, Min. Other apps have the same setting under the axis options.

## Elaborate: when not starting at zero is fair

```step
stage: make
tier: wider
insight: "A line chart of temperatures adds a context: an axis above zero can be fair when the change itself is what matters."
check:
  type: question
  q: "A line chart shows a fever going from 37.0 °C to 39.0 °C, with its axis starting at 36. Is that misleading?"
  options: ["Not here: a line shows change, and 2 degrees is a big change for a body, so zooming in helps", "Yes: every axis must start at zero", "Yes: 39 is not much bigger than 37", "It is a pie chart, so it can't be"]
  answer: 0
  feedback: [null, "Columns compare amounts by height, so they need zero. A line shows change, and zooming in can be fair when the axis is labelled.", "From zero, a dangerous fever would look like nothing. The question decides the axis.", "It is a line chart."]
  explain: "Column charts compare amounts by height, so they start at zero. A line chart shows change, and starting near the data is fair when the labels are clear and the change matters."
```

## Evaluate: numbers first

```step
stage: info
check: { type: reflect, text: "Before I believe a chart, I read the numbers on its axis, check that a pie is one whole, and ask how many were counted." }
```

Next time a chart makes something look dramatic, which of the three checks will you try first?
