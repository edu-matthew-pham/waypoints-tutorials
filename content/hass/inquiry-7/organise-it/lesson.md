---
order: 6
unit: finding
title: Organise what you found
node: [AC9HE7S02 n3, AC9HC7S02 n3]
summary: "Notes are easier to use when they are organised to fit the question. Numbers over days fit a table or a graph. Views from different people fit a table with a column for each group. Put like with like and name the columns."
language: science
shape: primer
hook: "You have five numbers, one for each day. In a paragraph, which day was busiest? In a table?"
---
After you keep what answers your question, **organise it** so you can see the answer. The shape depends on what you have: numbers over time suit a table or a graph. Views from different groups suit a table with a column for each.

Everything here is made up.

## Think first

```step
stage: predict
insight: "Committing to a format shows that the shape of the notes matters before we see them."
check:
  type: predict
  q: "You have the daily number of students buying from the Parkside tuckshop for five days. What is the clearest way to keep them?"
  options: ["A table with a row for each day", "A paragraph in the order you found them", "A list of the most surprising ones", "A photo of the page"]
  actual: "A table with a row for each day. You can see every day side by side and spot the biggest quickly."
```

## Try: match the shape to the information

```step
stage: run
insight: "Matching shows each kind of information has a shape that suits it."
check:
  type: match
  q: "Which way of organising suits each?"
  pairs:
    - ["Student numbers each day of the week", "A table with a row for each day, or a bar graph"]
    - ["What the council, shop owners and parents each say about Mill Road", "A table with a column for each group"]
    - ["The Kilby River level each year since 2000", "A line graph over time"]
    - ["Four kinds of source and what each is good for", "A table with a row for each source"]
```

Was your guess right? The shape follows the question and the kind of information.

## The idea: put like with like

```step
stage: investigate
insight: "Seeing Nib's paragraph fail, then fixing it, shows that organised notes make an answer visible."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the line where Nib's plan goes wrong."
      answer: 2
      fault: logic
      misconception: notes-in-order-found
      explain: "Line 2: keeping notes in the order found, as sentences, hides the pattern. Put like with like in a table so the busiest day shows."
    smaller:
      check: { type: question, q: "Which makes the busiest day easier to see: five sentences or a table of five numbers?", options: ["A table", "Sentences"], answer: 0, explain: "A table puts the numbers side by side." }
  - check:
      type: question
      q: "Which is the best set of column headings for a table of what three groups say about Mill Road?"
      options: ["Group | What they say | Where I found it", "Page 1 | Page 2 | Page 3", "Interesting | Boring | Other", "Monday | Tuesday | Wednesday"]
      answer: 0
      feedback: [null, "Pages are about where you found it, not what it says.", "That sorts by how you feel.", "Days do not fit this information."]
      explain: "Headings name the groups and what you need to compare."
```

### Find Nib's mistake

### Choose the headings

## Vary: a different kind of information

```step
stage: modify
insight: "The same move gives a different shape for different information."
tasks:
  - check:
      type: question
      q: "You collect the water level of the Kilby River for each year since 2000. Which suits best?"
      options: ["A line graph with years along the bottom", "A paragraph", "A pie chart", "A list ordered by surprise"]
      answer: 0
      feedback: [null, "A paragraph hides the trend.", "A pie shows parts of a whole, not change over time.", "That hides the order."]
      explain: "Change over time is clearest on a line graph."
  - check:
      type: question
      q: "You have notes from two sources on Mill Road, one from the council and one from the news. Which headings let you compare them?"
      options: ["Source | What it says | Same or different?", "Interesting | Boring", "A | B | C", "Date found"]
      answer: 0
      feedback: [null, "That does not help you compare.", "These name nothing.", "Only one heading."]
      explain: "Comparing needs a column for each thing you compare."
```

### Change over time

### Compare two sources

## Check: before you move on

```step
stage: practise
insight: "A last sort on a new case before moving on."
check:
  type: sort
  q: "Which way of organising suits each set of notes?"
  options: ["Table", "Graph over time"]
  items:
    - ["Five shop owners and what each said", "Table", "Words from different people."]
    - ["Daily visitors to the Hartley Museum for a year", "Graph over time", "A number that changes over time."]
    - ["Three sources and who runs each", "Table", "Facts to compare side by side."]
    - ["Rainfall each month in Wattle Flat", "Graph over time", "Changes over months."]
```

## In each subject

| | Often organised as |
|---|---|
| **Economics** | tables and graphs of prices, costs and numbers (digital tools) |
| **Civics** | tables comparing sources and views |
| **Geography** | tables, graphs and maps (Geography's own course covers representing data in more depth) |
| **History** | timelines and source tables (History's course) |

```step
stage: info
check: { type: reflect, text: "I can organise my notes in a shape that fits my question and name the columns." }
```

## Make: your own

```step
stage: make
insight: "Organising your own notes makes the move your own."
check: { type: reflect, text: "In my own book or a spreadsheet I organised the notes I kept for my question in a table or graph, named the columns, and said why that shape fits. A partner read it and agreed." }
```

Do it in your own document or spreadsheet. Your partner or teacher reads it.

## Typical: a spreadsheet

```step
stage: make
tier: typical
insight: "A digital tool makes the table and graph quick to change."
check: { type: reflect, text: "I typed my table into a spreadsheet, made a chart from it, and said what it shows." }
```

## Wider: a second shape

```step
stage: make
tier: wider
insight: "Trying a second shape shows which shows the answer more clearly."
check: { type: reflect, text: "I organised the same notes a second way and said which showed my answer more clearly." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
