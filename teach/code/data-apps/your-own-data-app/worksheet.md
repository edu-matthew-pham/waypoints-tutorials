---
title: "Challenge: your own data app"
subtitle: "Data apps · Final challenge: your own data app · Lesson 7"
---

# Challenge: your own data app

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Most useful apps are a table underneath: a reading log, a team's scores, a shop's stock. Now you can build one that someone will actually use.


:::teacher-note

**In one sentence:** The course challenge: students plan, build and test a data app for a real person in five milestones (plan the table, add and show, remember and find, test with a user, improve one thing). A sort at the start matches jobs to the course's tools. Milestone 3 has an automatic check: a remembered table and a For each row loop.

**Students should be able to say:** I can design a table, choosing fields and their types for a real user's records. I can build a data app that remembers its records and helps the user find something in them. I can test my app with a real person and improve it from what I saw.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Plan: which tool for which job?


:::keep-together

**A reading log might need each of these. Which tool does each one need?**

Groups: A table field, Sort, For each and a condition, Remember between visits

- Store how many pages each book has: {{field-15}}
- Show the books in title order: {{field-15}}
- Show only the books by one author: {{field-15}}
- Still have the books there tomorrow: {{field-15}}

:::


:::teacher-note

**Answer:** Store how many pages each book has → A table field; Show the books in title order → Sort; Show only the books by one author → For each and a condition; Still have the books there tomorrow → Remember between visits

:::


## Make: Milestone 1: plan the table on paper

On paper or in a document:

1. **Who and why:** *This app helps (person) to (find out something).*
2. **The table:** its name, then each field and its type. Write three example records as rows.
3. **The screen:** boxes for typing, buttons, and the Table object.
4. **Finding:** which search, filter, sort or total will the user need?

Show the plan to the person it's for: are those the right fields?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Make: Milestone 2: add and show

Build in [App Builder](https://tools.learningwaypoints.com/app-builder/?level=4) (it keeps your project in this browser; **Save** keeps a copy as a file, or in your OneDrive or Google Drive if your school allows it, to hand in or carry to another computer; **Share** gives a link you can send your teacher). Make the table, the boxes, an Add button and a Table object. Try it after every event.

Already have your records in a spreadsheet? Copy the rows and paste them into the table's first cell, or use **Paste rows** under the table. The columns go into the fields in order, and a first row of field names is skipped.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Make: Milestone 3: remember and find

Tick **💾** on your table, and test both a first visit and a return visit. Then build at least one way to find something. You can build here, or paste in your project: open it, **Save**, then **Open…** the file here.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Reading log","device":"web","features":{"level":4},"variables":[{"name":"Books","table":{"fields":[{"name":"title","type":"text"},{"name":"author","type":"text"},{"name":"pages","type":"number"}]},"value":[{"title":"Holes","author":"Louis Sachar","pages":233},{"title":"The Hobbit","author":"J. R. R. Tolkien","pages":310}],"remember":true},{"name":"Found","table":{"fields":[{"name":"title","type":"text"},{"name":"author","type":"text"},{"name":"pages","type":"number"}]},"value":[]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My reading log","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":24,"y":64,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AuthorInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":236,"y":64,"w":180,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"PagesInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":428,"y":64,"w":80,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":520,"y":62,"w":130,"h":46,"text":"Add book","visible":true,"vars":{}}]},{"name":"BookTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":120,"w":420,"h":300,"text":"","visible":true,"vars":{},"source":"Books","columns":""}]},{"name":"LongButton","kind":"button","instanceVars":[],"instances":[{"id":"b2","x":460,"y":120,"w":200,"h":46,"text":"Books over 300 pages","visible":true,"vars":{}}]},{"name":"FoundTable","kind":"table","instanceVars":[],"instances":[{"id":"T2","x":460,"y":176,"w":320,"h":244,"text":"","visible":true,"vars":{},"source":"Found","columns":""}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Books","values":{"title":"TitleInput.text","author":"AuthorInput.text","pages":"int(PagesInput.text)"}},{"type":"tableSort","table":"Books","field":"title","dir":"up"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onClicked","target":"LongButton"}],"actions":[{"type":"tableClear","table":"Found"}],"children":[{"id":"e2a","else":false,"conds":[{"type":"forEachRow","table":"Books"},{"type":"compareValues","left":"LoopItem.pages","op":">","right":"300"}],"actions":[{"type":"tableAdd","table":"Found","values":{"title":"LoopItem.title","author":"LoopItem.author","pages":"LoopItem.pages"}}],"children":[]}]}]}]}
```

:::


## Make: Milestone 4: test with a real user

Give them a task, such as *add three books and find the longest one*. Don't explain or point. Write down where they paused, what didn't do what they expected, and what they'd change.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Make: Milestone 5: improve one thing

Fix the most important problem from the test. Then write three lines: what you saw, what you changed, and how you'd check it with the next user.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What did your user try that you didn't expect, and what did you change because of it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Any specific answer tied to what they watched, not a general opinion.

:::

