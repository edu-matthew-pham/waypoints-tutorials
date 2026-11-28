---
marp: true
theme: default
html: true
---

# Challenge: your own data app

Data apps · Final challenge: your own data app

<!-- Speaker note: The course challenge: students plan, build and test a data app for a real person in five milestones (plan the table, add and show, remember and find, test with a user, improve one thing). A sort at the start matches jobs to the course's tools. Milestone 3 has an automatic check: a remembered table and a For each row loop. About 180 minutes (About three lessons: plan and add/show (lesson 1), remember and find (lesson 2), test with a user and improve (lesson 3).). -->

---

## Today

- I can design a table, choosing fields and their types for a real user's records.
- I can build a data app that remembers its records and helps the user find something in them.
- I can test my app with a real person and improve it from what I saw.

<!-- Speaker note: Before class: The user is a real person the student can ask: a classmate, family member, club or younger student. Records stay made up or the student's own: no one else's personal details (names, contacts, health, grades). A reading log or training log of their own is ideal. Remembered data stays in the browser it was added in. Students hand in the project with Save; if the teacher should see real records, students add them as starting rows in the sidebar before saving. Suggested checkpoints: see each table plan (fields and types) before building; see Milestone 2 working; collect the three-line write-up from Milestone 5. Teacher: Milestone 1: approve each table plan in a minute: fields, types, three example rows. Teacher: Milestone 3: try both visits (Restart, Forget saved data) before testing with a user. Teacher: Milestone 4: testers come from another table and haven't seen the app built. -->

---

## Why it matters

> Most useful apps are a table underneath: a reading log, a team's scores, a shop's stock. Now you can build one that someone will actually use.

<!-- Speaker note: Build a **data app** for a real person: someone you can ask, such as a classmate, a family member or a club. It keeps records in a table and helps them find something out. Your app needs: - **a table** with fields that suit the records (text or number), - a way to **add** records, and to show them with a Table object, - **Remember between visits**, so the records are still there next time, - at least one way to **find** something: search, a filter, a sort, a total or a best-so-far. Some ideas: a reading log (title, author, pages), a training log (date, activity, minutes), sport scores (player, team, points), a collection (item, type, year), a practice log (piece, minutes). Keep made-up or your own records: no one else's personal details. If you have time at the end, a **Sound** or **Video** object can add to it (see the cards on the Reference page). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Who do you know who keeps track of something: books read, training, scores, a collection? What do they want to find out from it?**

- What would each record need?
- What question would they ask the app?

<!-- Speaker note: The question the user wants answered decides the fields and the search, filter, sort or total. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Plan: which tool for which job?

**A reading log might need each of these. Which tool does each one need?**

Groups: A table field · Sort · For each and a condition · Remember between visits

Store how many pages each book has · Show the books in title order · Show only the books by one author · Still have the books there tomorrow

* Answer: Store how many pages each book has → A table field; Show the books in title order → Sort; Show only the books by one author → For each and a condition; Still have the books there tomorrow → Remember between visits

<!-- Speaker note: What this step is for: Matching jobs to the course's tools is the planning move, and checks each idea is understood by what it's for. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 1: plan the table on paper

On paper or in a document:

1. **Who and why:** *This app helps (person) to (find out something).*
2. **The table:** its name, then each field and its type. Write three example records as rows.
3. **The screen:** boxes for typing, buttons, and the Table object.
4. **Finding:** which search, filter, sort or total will the user need?

Show the plan to the person it's for: are those the right fields?

<!-- Speaker note: What this step is for: Designing the fields and their types first is the decision the whole build rests on, and is easiest to change on paper. For students who need more support: Offer a starter plan: a reading log with title, author and pages, a Books over 300 pages filter, and a total of pages read. For early finishers: Add a second table linked by a shared value (lesson 7), such as Authors and Books. The hard part, on purpose: Choosing fields. Students want too many; three or four is plenty. The three example rows in Milestone 1 show whether the fields work before anything is built. When students get stuck: A student can't choose an idea. Ask: What do you or someone you know keep track of? Fix: Start from one of the listed ideas and change it for that person. / The table has many fields. Ask: Which fields will the user actually search, sort or add up? Fix: Keep those and a name or title; the rest go on a 'later' list. / The search or filter finds nothing. Ask: Does the test compare the right field, and is the field the right type? Fix: Reuse the pattern from lesson 5: clear results, For each row, test, add a row. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 26px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Three example rows <span style="font-size:.6em;color:#64748b">(5 min)</span>

Before building, students write their table's fields with a type each, and three example records as rows. A partner checks: does every row fit? Is anything a number that should be added up or sorted?

<!-- Speaker note: Fields are easiest to change on paper. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 2: add and show

Build in [App Builder](https://tools.learningwaypoints.com/app-builder/?level=4) (it keeps your project in this browser; **Save** keeps a copy as a file, or in your OneDrive or Google Drive if your school allows it, to hand in or carry to another computer; **Share** gives a link you can send your teacher). Make the table, the boxes, an Add button and a Table object. Try it after every event.

Already have your records in a spreadsheet? Copy the rows and paste them into the table's first cell, or use **Paste rows** under the table. The columns go into the fields in order, and a first row of field names is skipped.

<!-- Speaker note: What this step is for: Getting records in and on screen first gives a working app to test before the finding features are added. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 3: remember and find

Tick **💾** on your table, and test both a first visit and a return visit. Then build at least one way to find something. You can build here, or paste in your project: open it, **Save**, then **Open…** the file here.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/your-own-data-app/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Remembering the table and one way to find something are what make it a data app rather than a form. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 4: test with a real user

Give them a task, such as *add three books and find the longest one*. Don't explain or point. Write down where they paused, what didn't do what they expected, and what they'd change.

<!-- Speaker note: What this step is for: Watching the user without helping is the evidence for the next change, not the builder's own opinion. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Milestone 5: improve one thing

Fix the most important problem from the test. Then write three lines: what you saw, what you changed, and how you'd check it with the next user.

<!-- Speaker note: What this step is for: One change based on the test closes the loop: plan, build, test, improve. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What did your user try that you didn't expect, and what did you change because of it?**

* Any specific answer tied to what they watched, not a general opinion.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Students can go on to the optional linked tables lesson, then to SQL (databases) or Python's data courses. -->
