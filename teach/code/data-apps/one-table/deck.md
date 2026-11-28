---
marp: true
theme: default
html: true
---

# One table instead

Data apps · Tables and records

<!-- Speaker note: Students rebuild the playlist as a table: Songs, with the fields title, artist and length (a number field), made in App Builder's sidebar spreadsheet. A Table object shows it; Add a row takes one value per field; clicking a row removes it with Remove row ClickedIndex. The Check traces row numbers after a removal and asks why a table can't split a song. About 60 minutes (Try 5 min · Build 1–4 30 min · Check 8 min · Make it yours 15 min). -->

---

## Today

- I can make a table with fields of the right type, and add rows to it.
- I can show a table with a Table object and add a row from what the user types.
- I can explain why a table keeps each record's details together.

<!-- Speaker note: Before class: Tables are an App Builder Level 4 feature; these lessons open App Builder at Level 4. A table is a list of records: each row is one record, each column a field. Field types matter: length is a number so it can be added up (next lesson) and sorted by size (lesson 5). int(LengthInput.text) turns the typed text into a number; a number field also accepts text that is a number. Removing a row renumbers the rows below it, as a list does. Teacher: Before Build 1 (whole class): draw the two lists from last lesson, then redraw them as one table. What's the same, what's better? Teacher: Build 1: checkpoint: everyone's Songs table has three fields and length shows 123 (number). Teacher: Check: act it out: three students hold cards for three rows; remove the middle one, and the third steps up. -->

---

## Why it matters

> Spreadsheets, school timetables and music libraries all keep data the same way: one row for each thing, a column for each detail.

<!-- Speaker note: Last lesson, a song's title and artist were linked only by sitting at the same place in two lists. Today they live **together** in one **table**: - Each **row** is one song: a **record**. - Each **column** is a **field**: *title*, *artist*, *length*. Every row has the same fields. - A field holds **text** or a **number**. *length* is a number, so you can add lengths up or sort by them later. Removing a song now removes its whole row, so nothing can get out of step. ![A playlist app: boxes for title, artist and minutes, an Add song button, and a table with columns title, artist and length.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Think of a spreadsheet, a timetable or a scoreboard. How is each thing's information kept together?**

- What is a row? What is a column?
- Why might a column need to hold numbers, not text?

<!-- Speaker note: One row per thing (a record), one column per detail (a field). Numbers can be added up and sorted by size. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then click a song in the table to remove it. On the left, under *Tables*, the rows the app has now show under the table.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-2#step-2)

<!-- Speaker note: 1. On the left, under **Tables**, type *Songs* and press **+**. A new table has one field, *name*. 2. Click **name** at the top of its column, choose **Rename**, and call it *title*. 3. Press **+** at the end of the field names to add a field. Call it *artist*. Add one more called *length*. 4. Click **length**, and choose **Number**: lengths are numbers, not text. 5. Press **+ Row** and type a song: title, artist, minutes. Press Tab to move along. Add a second song. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-3#step-3)

<!-- Speaker note: On the **Design** tab, click the empty table on the screen (*SongTable*). In **Properties**, set **Shows table** to *Songs*. Your two songs appear, one row each. **Columns to show** lets you hide a field, but keep all three for now. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-4#step-4)

<!-- Speaker note: 1. Add an event: **AddButton is clicked**. 2. Add the action **Tables**, **Add a row to table**, table *Songs*. There's one box for each field. 3. Fill them in: *title* `TitleInput.text`, *artist* `ArtistInput.text`, *length* `int(LengthInput.text)`. 4. Run it and add a song. Watch it arrive at the bottom of the table. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-5#step-5](https://tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-5#step-5)

<!-- Speaker note: 1. Add an event: **SongTable**, **An item in SongTable is clicked**. **ClickedIndex** is the number of the clicked row. 2. Add the action **Tables**, **Remove row … from table**: row `ClickedIndex`, table *Songs*. 3. Run it and remove the middle song. One action, and the whole song is gone. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which song is row 2?

**Songs has three rows: Blue Sky, Arc, Cove. Row 2 is removed. What is item(Songs, 2).title now?**

- Cove
- Blue Sky
- Nothing: row 2 is empty now
- Arc

* Answer: Cove

<!-- Speaker note: The rows below the removed one move up, so Cove is row 2 now. item(Songs, 2) is the whole row, and .title is one field of it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Can they get out of step?

**In the table, can removing a song leave the wrong artist beside a title, as in the two lists?**

- Yes, the table sorts the artists by itself
- No: each row holds its own title and artist, so they move together
- Yes, if you remove from the title column only
- Only if length is a number

* Answer: No: each row holds its own title and artist, so they move together

<!-- Speaker note: A row is one record. Removing a row removes all its fields at once, so a title can't lose its artist. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the table <span style="font-size:.6em;color:#64748b">(4 min)</span>

Three students each hold a card for one song (title, artist, length). Remove the middle song: the third student steps up and becomes row 2.

<!-- Speaker note: The whole card moves: a title can't leave its artist behind. Rows renumber, as list items do. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: a genre field



- **Add a genre:** This screen has a new *Genre* box. 1. Add a field *genre* to Songs (the **+** after the field names). It's text. 2. Open the AddButton event's **Add a row** act
- **Test it with someone:** Ask someone to add three songs without any help from you. Watch where they pause. Labels, an example in a box, or a message after adding are all good fixes.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/one-table/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Adding a field shows how a table grows: one new column, and Add a row gets one more box, instead of a whole new list to keep in step. For students who need more support: Make the table together on the projector; pairs build the events. For early finishers: Use Columns to show to hide length on the screen. Does the table still keep it? The hard part, on purpose: Making the table: rename the first field, add fields, change length to Number. The sidebar is narrow; the field's own menu (click its name) does rename, type and delete. When students get stuck: The Table object says Choose a table in Properties. Ask: Which table does SongTable show? Fix: Click SongTable on the Design tab and set Shows table to Songs. / Add a row shows a box for name, not title. Ask: Did the first field get renamed? Fix: Click the field's name in the sidebar, Rename, and call it title; the action's boxes follow. / A message says length holds numbers. Ask: What was typed in the Minutes box? Fix: Type a number such as 4, or use int(LengthInput.text). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A table Books has the fields title, author and pages. What does one row hold, and what does item(Books, 3).author give?**

* One row holds one book's title, author and pages. item(Books, 3).author is the author of the third book.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Records and fields: read one field of a row, add up a column, find the longest song. -->
