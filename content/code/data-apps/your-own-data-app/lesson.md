---
order: 7
unit: challenge
title: "Challenge: your own data app"
summary: "Plan, build and test a data app of your own for a real user: a reading log, sport stats, a collection, a practice log. It keeps records in a table that's remembered between visits, and helps the user find what they need with search, a filter, a sort or a total."
language: maths
shape: build
hook: "Most useful apps are a table underneath: a reading log, a team's scores, a shop's stock. Now you can build one that someone will actually use."
---
Build a **data app** for a real person: someone you can ask, such as a classmate, a family member or a club. It keeps records in a table and helps them find something out.

Your app needs:

- **a table** with fields that suit the records (text or number),
- a way to **add** records, and to show them with a Table object,
- **Remember between visits**, so the records are still there next time,
- at least one way to **find** something: search, a filter, a sort, a total or a best-so-far.

Some ideas: a reading log (title, author, pages), a training log (date, activity, minutes), sport scores (player, team, points), a collection (item, type, year), a practice log (piece, minutes). Keep made-up or your own records: no one else's personal details. If you have time at the end, a **Sound** or **Video** object can add to it (see the cards on the Reference page).

## Plan: which tool for which job?

```step
stage: investigate
insight: "Matching jobs to the course's tools is the planning move, and checks each idea is understood by what it's for."
check:
  type: sort
  q: "A reading log might need each of these. Which tool does each one need?"
  options: ["A table field", "Sort", "For each and a condition", "Remember between visits"]
  items:
    - ["Store how many pages each book has", "A table field", "A number field, so pages can be added up and compared."]
    - ["Show the books in title order", "Sort", "Sort by the title field: whole rows move together."]
    - ["Show only the books by one author", "For each and a condition", "Go through every row and copy the ones that match into a results table."]
    - ["Still have the books there tomorrow", "Remember between visits", "The table is kept in this browser between visits."]
```

## Milestone 1: plan the table on paper

```step
stage: make
insight: "Designing the fields and their types first is the decision the whole build rests on, and is easiest to change on paper."
check: { type: reflect, text: "I have a plan: who it's for and what it helps them find out, the table's fields with text or number for each, three example records, and a sketch of the screen." }
```

On paper or in a document:

1. **Who and why:** *This app helps (person) to (find out something).*
2. **The table:** its name, then each field and its type. Write three example records as rows.
3. **The screen:** boxes for typing, buttons, and the Table object.
4. **Finding:** which search, filter, sort or total will the user need?

Show the plan to the person it's for: are those the right fields?

## Milestone 2: add and show

```step
stage: make
insight: "Getting records in and on screen first gives a working app to test before the finding features are added."
check: { type: reflect, text: "I can add a record and see it in the Table object, and every field holds the right kind of value." }
```

Build in [App Builder](https://tools.learningwaypoints.com/app-builder/?level=4) (it keeps your project in this browser; **Save** keeps a copy as a file to hand in or carry to another computer; **Share** gives a link you can send your teacher). Make the table, the boxes, an Add button and a Table object. Try it after every event.

Already have your records in a spreadsheet? Copy the rows and paste them into the table's first cell, or use **Paste rows** under the table. The columns go into the fields in order, and a first row of field names is skipped.

## Milestone 3: remember and find

```step
stage: make
insight: "Remembering the table and one way to find something are what make it a data app rather than a form."
try: { playground: appbuilder, starter: "app.json#start", level: 4, height: 640 }
check:
  type: code
  text: "My app has a table that's remembered, and a For each row loop that finds or works something out."
  rules: { contains: ["(remembered)"], event: [["For each row in table"]] }
```

Tick **💾** on your table, and test both a first visit and a return visit. Then build at least one way to find something. You can build here, or paste in your project: open it, **Save**, then **Open…** the file here.

## Milestone 4: test with a real user

```step
stage: make
insight: "Watching the user without helping is the evidence for the next change, not the builder's own opinion."
check: { type: reflect, text: "The person my app is for used it while I watched without helping. I wrote down where they paused, what they tried, and what they said." }
```

Give them a task, such as *add three books and find the longest one*. Don't explain or point. Write down where they paused, what didn't do what they expected, and what they'd change.

## Milestone 5: improve one thing

```step
stage: make
insight: "One change based on the test closes the loop: plan, build, test, improve."
check: { type: reflect, text: "I changed one thing because of what I saw, and I can explain what I saw, what I changed, and how I'd check it worked." }
```

Fix the most important problem from the test. Then write three lines: what you saw, what you changed, and how you'd check it with the next user.
