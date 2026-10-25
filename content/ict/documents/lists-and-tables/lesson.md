---
order: 3
unit: structure
title: Lists and tables
summary: "A bulleted list is for items where the order does not matter, a numbered list is for steps or ranks where it does, and a table is for items that each have several facts so a reader can compare them down a column. A table's header row names the columns, and the app can then tell the header from the data."
language: maths
hook: "A report gives each condition and its height as three sentences. A reader wants to compare them. What would make that quick?"
---
Words in a paragraph are good for explaining. Facts often fit better in a **list** or a **table**. Which one depends on what the reader needs to do.

- A **bulleted list** is for items with no order, such as the equipment you need.
- A **numbered list** is for steps that happen in order, or things in a ranking.
- A **table** is for items that each have several facts, so the reader can compare down a column.

## Predict: which list?

```step
stage: predict
insight: "Committing to a list type tests the move: the numbers carry the order."
check:
  type: predict
  q: "A method has four steps that must be done in this order: plant, water, wait, measure. Which list should it use?"
  options: ["A numbered list", "A bulleted list", "A table", "Plain paragraphs"]
  actual: "A numbered list. The numbers show the order, and a reader can say 'I am on step 3'."
```

## Try: turn lines into a list

```step
stage: run
insight: "Choosing Numbered list for the steps and watching the numbers appear settles the prediction."
try: { playground: board, starter: "page.yml#run", height: 560 }
hint: ["Click the first step, open the Style list and choose Numbered list.", "Do the same for the other steps."]
check: { type: board, text: "Make the four steps a numbered list.", when: "n_number = 4 and n_bullet = 0", explain: "Each step has the Numbered list style, so the app numbers them 1 to 4. If you move a step, the numbers fix themselves." }
```

Was your guess right? You did not type the numbers. The style counts them, so moving a step renumbers the rest.

## Worked example: list or table

```step
stage: investigate
insight: "Matching the shape of the facts to a list or a table models the move. Ravi uses bullets for steps, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "Three beans each have a colour and a height. A reader wants to compare the heights. What fits best?"
      options: ["A table with a column for height", "A bulleted list of sentences", "One long paragraph", "A numbered list"]
      answer: 0
      feedback: [null, "The heights are buried in the sentences, so the reader has to hunt for them.", "That is the hardest to compare.", "The beans are not in an order."]
      explain: "Each bean has several facts, so a table lines the heights up in a column."
  - check:
      type: bug
      code: "working.txt#ravi"
      text: "Ravi's classmates cannot tell which step comes first. Click the line where Ravi first goes wrong."
      answer: 2
      fault: logic
      misconception: order-needs-numbers
      explain: "Line 2: the steps have an order, but Ravi used bullets. Bullets say 'these are all here', not 'do this first'. A numbered list shows the order."
  - check:
      type: question
      q: "What does the header row of a table do?"
      options: ["Names what each column holds", "Adds up the numbers below", "Makes the table bigger", "Sorts the rows"]
      answer: 0
      feedback: [null, "A table in a document does not calculate. That is what a spreadsheet does.", "It does not change the size.", "Sorting is a separate job."]
      explain: "The header row names the columns, and the app can tell the header from the data (for a screen reader, too)."
```

### Choosing the shape

```worked
\text{Steps in order} :: Use a numbered list. The numbers show the order.
\text{Items with no order} :: Use a bulleted list, such as the equipment you need.
\text{Items with several facts} :: Use a table, so a reader can compare down a column.
\text{Name the columns} :: Make the first row a header row, so each column is named.
```

Now: which fits three beans with a colour and a height?

### Find the mistake

### What is a header row?

## Vary: choose the shape

```step
stage: modify
insight: "Each task changes the facts: a bulleted list, a table and the size of a table."
tasks:
  - check:
      type: question
      q: "You list what the experiment needs: beans, pots, soil and a ruler. Which fits best?"
      options: ["A bulleted list", "A numbered list", "A table", "A heading"]
      answer: 0
      feedback: [null, "The items have no order, so numbers would suggest one.", "Each item has only one fact, so a table is more than you need.", "A heading names a part, not a set of items."]
      explain: "No order, one fact each: a bulleted list."
  - check:
      type: question
      q: "Four animals each have a name, a lifespan and a diet. Which fits best?"
      options: ["A table with three columns", "A bulleted list", "A numbered list", "Four paragraphs"]
      answer: 0
      feedback: [null, "Each bullet would have to hold three facts, which is hard to compare.", "The animals have no order.", "Paragraphs make comparing the hardest."]
      explain: "Each animal has three facts, so a table with a column for each fact lets a reader compare."
  - check:
      type: number
      q: "A table has a header row and four rows of data. How many rows does it have altogether?"
      answer: 5
      explain: "One header row and four rows of data make 5 rows."
```

### A bulleted list

### Three facts each

### How many rows?

## Practise: use the right shape

```step
stage: practise
insight: "Turning a table of numbers into one with a header, then a list into steps."
try: { playground: board, starter: "page.yml#practise", height: 560 }
tasks:
  - starter: "page.yml#practise"
    hint: ["The table has no header row. Look for the button below the controls.", "Press First row is a header. The first row should become bold and shaded."]
    check: { type: board, text: "Give the table a header row.", when: "table_header = 1 and n_table = 1", explain: "The first row is a header row, so the app knows Condition and Height name the columns." }
  - starter: "page.yml#practise-steps"
    hint: ["Click each step in turn and change its style.", "These steps happen in order, so choose Numbered list."]
    check: { type: board, text: "The method steps are in bullets. Change them so the order shows.", when: "n_number = 3 and n_bullet = 0", explain: "The steps are numbered, so a reader can say which step they are on." }
```

### The header row

### Show the order

## Make: your own list and table

```step
stage: make
insight: "Choosing a list for the equipment, a numbered list for the steps and a header for the table has students use the move on their own report."
try: { playground: board, starter: "page.yml#make", height: 620 }
hint: ["Change the three equipment lines to Bullet list and the three steps to Numbered list.", "Press First row is a header for the table."]
check: { type: board, text: "Make the equipment a bulleted list, the steps a numbered list and give the table a header row.", when: "n_bullet >= 3 and n_number >= 3 and table_header = 1", explain: "Equipment has no order so it is bulleted. The steps are numbered. The table's first row is a header." }
```

Edit a line of the list. Does it keep its bullet or number?

## In your own app

```step
stage: make
tier: typical
insight: "Making a list and a table in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my word processor I made a numbered list and a bulleted list using the list buttons, and a table with a header row (I made the first row bold, or used the Header row option) from a small set of facts." }
```

Bulleted and numbered lists are buttons near the styles list in every word processor. Tables are under Insert. Most apps have a Header row option in the table's settings, and it is what screen readers use to read column names.
