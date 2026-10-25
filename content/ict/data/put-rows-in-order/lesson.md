---
order: 7
unit: showing
title: Put the rows in order
summary: "Sorting puts the rows of a table in order by one column, and moves whole rows so every row keeps its own numbers. Filtering hides the rows that do not match a rule, without deleting them, so you can look at just the ones you want. Both work on the whole table, headings included, and neither changes the data itself."
language: maths
hook: "A table lists eight animals in the order someone wrote them down. Which lives longest? Which are birds? You could read the whole table, or you could ask the sheet."
---
This table of animals is in the order it was typed in, not in any helpful order. Mass is in kg and lifespan is a rough figure in years. Below the table are controls to **sort** it and to **filter** it.

| | A | B | C | D |
|---|---|---|---|---|
| **1** | Animal | Group | Mass (kg) | Lifespan (years) |
| **2** | Mouse | Mammal | 0.02 | 2 |
| **3** | Eagle | Bird | 5 | 25 |
| **4** | Goldfish | Fish | 0.1 | 10 |
| **…** | … | … | … | … |

## Predict: who comes first?

```step
stage: predict
insight: "Committing to which row comes first tests the move: sorting orders whole rows by one column."
check:
  type: predict
  q: "You sort the whole table by the Lifespan column, from high to low. Which animal is in row 2, just under the headings?"
  options: ["Mouse", "Tortoise", "Elephant", "Eagle"]
  actual: "Tortoise. It has the longest lifespan, 80 years, so high to low puts its row first. The whole row moves, so the Tortoise keeps its own group and mass."
```

## Try: sort the table

```step
stage: run
insight: "Sorting by Lifespan and reading the rows settles the prediction and shows whole rows moving together."
try: { playground: board, starter: "sheet.yml#run", height: 560 }
hint: ["Choose D in 'Sort by', then High to low in 'Order', then click Sort.", "Read across the Tortoise's row. Is its mass still 50?"]
check: { type: board, text: "Sort the table so the animal that lives longest is at the top.", when: "down_D = 1 and c_D2 = 80", explain: "The Tortoise (80 years) is now in row 2. The whole row moved together, so it still has its own group and mass." }
```

Was your guess right? Read across the Tortoise's row: it still says Reptile and 50 kg. Sorting moved the **whole row**, not just the lifespans.

## Worked example: sort, then filter

```step
stage: investigate
insight: "Selecting the whole table to sort models the move. Sam sorts one column on its own, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "What does sorting the table by Lifespan do to the rows?"
      options: ["Moves whole rows so each animal keeps its own numbers", "Moves only the lifespans", "Deletes the rows that are out of order", "Changes the lifespans to be in order"]
      answer: 0
      feedback: [null, "If only one column moved, each animal would end up with someone else's lifespan.", "Sorting never deletes anything. It only changes the order.", "The numbers do not change. The rows are rearranged."]
      explain: "Sorting reorders whole rows by one column. Each row keeps its own cells."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "After Sam's sort, the Tortoise shows a lifespan of 2 years. Click the line where Sam first goes wrong."
      answer: 2
      fault: logic
      misconception: sort-one-column
      explain: "Line 2: Sam selected only the lifespan numbers. Only that column was sorted, so the animals stayed where they were and each got a different lifespan. Sorting needs the whole table selected."
  - check:
      type: question
      q: "You filter the table to show only the Birds. What has happened to the other rows?"
      options: ["They are hidden, not deleted", "They are deleted", "They move to the bottom", "Their cells are cleared"]
      answer: 0
      feedback: [null, "A filter never deletes. Show all brings them back.", "That would be a sort. A filter hides the rows.", "Nothing in them changes."]
      explain: "A filter hides the rows that do not match. The data is all still there, and Show all brings every row back."
```

### Sort and filter

```worked
\text{Sort by Lifespan, high to low} :: The sheet puts the rows in order of the lifespan column, biggest first.
\text{Tortoise: Reptile, 50, 80} \text{ moves to row 2} :: The whole row moves, so each animal keeps its own numbers.
\text{Filter: Group is Bird} :: The sheet hides every row that does not match.
\text{Showing 2 of 8 rows} :: Eagle and Penguin are shown. The other six are only hidden.
\text{Show all} :: The hidden rows come back. Nothing was lost.
```

Now: what happens to the rows?

### Find the mistake

### Hidden, not deleted

## Vary: change the question

```step
stage: modify
insight: "Each task changes the column, the rule or the order, then combines a filter with a sort."
tasks:
  - check:
      type: question
      q: "You want the heaviest animal first. Which sort do you choose?"
      options: ["By Mass (kg), high to low", "By Mass (kg), low to high", "By Animal, A to Z", "By Lifespan, high to low"]
      answer: 0
      feedback: [null, "That puts the lightest first.", "That puts them in alphabet order, which says nothing about mass.", "That puts the longest-lived first, which is a different question."]
      explain: "High to low on the Mass column puts the biggest mass in row 2."
  - check:
      type: number
      q: "The lifespans are 2, 25, 10, 15, 8, 80, 60 and 20. You filter to show only the animals whose Lifespan is more than 20. How many rows are shown?"
      answer: 3
      explain: "The lifespans more than 20 are 25, 80 and 60, so three rows are shown."
  - check:
      type: question
      q: "You filter to show only the Mammals, then sort by Mass from high to low. Which animal is at the top of the rows you can see?"
      options: ["Elephant", "Mouse", "Tortoise", "Eagle"]
      answer: 0
      feedback: [null, "The mouse is the lightest mammal, so it would be last.", "The Tortoise is a Reptile, so the filter hides it.", "The Eagle is a Bird, so the filter hides it."]
      explain: "Only the mammals are shown (Mouse, Cat and Elephant). High to low on Mass puts the Elephant first."
```

### Heaviest first

### Longer than 20

### Filter, then sort

## Practise: ask the table

```step
stage: practise
insight: "Using sort, then filter, then both together to answer a question about the table."
try: { playground: board, starter: "sheet.yml#run", height: 560 }
tasks:
  - check:
      type: question
      q: "You filter to show only Birds and the sheet says Showing 2 of 8 rows. Where are the other six rows?"
      options: ["Still in the sheet, hidden", "Deleted", "Moved to the bottom", "Copied into a new sheet"]
      answer: 0
      feedback: [null, "A filter never deletes rows.", "That would be sorting. A filter hides them.", "A filter does not copy anything."]
      explain: "Filtering only hides rows. Choose Show all and all eight are back."
  - starter: "sheet.yml#run"
    hint: ["Choose C in 'Sort by' and Low to high in 'Order', then click Sort."]
    check: { type: board, text: "Sort the table so the lightest animal is at the top.", when: "up_C = 1 and c_C2 = 0.02", explain: "The Mouse (0.02 kg) is in row 2. Low to high on the Mass column puts the smallest first." }
  - starter: "sheet.yml#run"
    hint: ["In 'Show rows where' choose B, then 'is', then type Mammal and click Filter."]
    check: { type: board, text: "Show only the mammals.", when: "filter_on = 1 and filter_col = 1 and n_shown = 3", explain: "Three rows are shown: the Mouse, the Cat and the Elephant. The other five rows are hidden, not deleted." }
  - starter: "sheet.yml#run"
    hint: ["First filter the Group column for Mammal. Then sort by Mass, High to low."]
    check: { type: board, text: "Show only the mammals, with the heaviest at the top.", when: "filter_on = 1 and filter_col = 1 and n_shown = 3 and down_C = 1", explain: "The filter shows the three mammals, and the sort puts the Elephant (5000 kg) first." }
```

### Where are the rows?

### Lightest first

### Only the mammals

### Mammals, heaviest first

## Make: answer a question

```step
stage: make
insight: "Using a filter and a sort together to answer a question the student reads off the table is the move on their own question."
try: { playground: board, starter: "sheet.yml#run", height: 560 }
hint: ["Filter the Group column for Bird. Then sort by Lifespan from high to low. Read the top row.", "Two birds are shown, so the one at the top lives longest."]
check: { type: board, text: "Which bird lives longest? Show only the birds, with the longest-lived at the top.", when: "filter_on = 1 and filter_col = 1 and n_shown = 2 and down_D = 1", explain: "The two birds are shown with the Eagle (25 years) above the Penguin (20 years). A filter and a sort together answered the question." }
```

Which bird is at the top? Write down the answer in your own words, and say which two steps found it.

## In your own spreadsheet app

```step
stage: make
tier: typical
insight: "Sorting and filtering in Excel or Sheets shows the same two moves in the real tool."
check: { type: reflect, text: "In the spreadsheet app my school uses, I typed the animal table, selected all of it, sorted by lifespan, and then filtered to show only the birds. I checked that whole rows moved together." }
```

Excel, Google Sheets and Numbers all sort and filter. Select the whole table, headings included, and find Sort and Filter under the Data menu. If the headings end up sorted with the data, tick the option that says your data has a header row. Hidden rows are not deleted: clear the filter to see them again.
