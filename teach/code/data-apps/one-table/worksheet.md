---
title: "One table instead"
subtitle: "Data apps · Tables and records · Lesson 2"
---

# One table instead

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Spreadsheets, school timetables and music libraries all keep data the same way: one row for each thing, a column for each detail.


:::teacher-note

**In one sentence:** Students rebuild the playlist as a table: Songs, with the fields title, artist and length (a number field), made in App Builder's sidebar spreadsheet. A Table object shows it; Add a row takes one value per field; clicking a row removes it with Remove row ClickedIndex. The Check traces row numbers after a removal and asks why a table can't split a song.

**Students should be able to say:** I can make a table with fields of the right type, and add rows to it. I can show a table with a Table object and add a row from what the user types. I can explain why a table keeps each record's details together.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then click a song in the table to remove it. On the left, under *Tables*, the rows the app has now show under the table.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: rows and fields


:::keep-together

### Which song is row 2?

**Songs has three rows: Blue Sky, Arc, Cove. Row 2 is removed. What is item(Songs, 2).title now?**

☐ Cove

☐ Blue Sky

☐ Nothing: row 2 is empty now

☐ Arc

:::


:::teacher-note

**Answer:** Cove

The rows below the removed one move up, so Cove is row 2 now. item(Songs, 2) is the whole row, and .title is one field of it.

:::


:::keep-together

### Can they get out of step?

**In the table, can removing a song leave the wrong artist beside a title, as in the two lists?**

☐ Yes, the table sorts the artists by itself

☐ No: each row holds its own title and artist, so they move together

☐ Yes, if you remove from the title column only

☐ Only if length is a number

:::


:::teacher-note

**Answer:** No: each row holds its own title and artist, so they move together

A row is one record. Removing a row removes all its fields at once, so a title can't lose its artist.

:::


:::typical

## Make it yours: a genre field


**Add a genre.** This screen has a new *Genre* box.

1. Add a field *genre* to Songs (the **+** after the field names). It's text.
2. Open the AddButton event's **Add a row** action. It has a new box for *genre*: fill it with `GenreInput.text`.

Compare that with last lesson's third list: one new field, and nothing else to keep in step.

**Test it with someone.** Ask someone to add three songs without any help from you. Watch where they pause. Labels, an example in a box, or a message after adding are all good fixes.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Add a genre:**

```maths
{"version":1,"name":"Playlist table","device":"web","features":{"level":4},"variables":[{"name":"Songs","table":{"fields":[{"name":"title","type":"text"},{"name":"artist","type":"text"},{"name":"length","type":"number"},{"name":"genre","type":"text"}]},"value":[{"title":"Blue Sky","artist":"Kai","length":3,"genre":""},{"title":"Arc","artist":"Mo","length":5,"genre":""}]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My playlist","visible":true,"vars":{}}]},{"name":"TitleLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":64,"w":60,"h":36,"text":"Title","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":84,"y":60,"w":170,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":268,"y":64,"w":60,"h":36,"text":"Artist","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":328,"y":60,"w":150,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"LengthLabel","kind":"text","instanceVars":[],"instances":[{"id":"l3","x":492,"y":64,"w":70,"h":36,"text":"Minutes","visible":true,"vars":{}}]},{"name":"LengthInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":566,"y":60,"w":70,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"GenreLabel","kind":"text","instanceVars":[],"instances":[{"id":"l4","x":24,"y":108,"w":60,"h":36,"text":"Genre","visible":true,"vars":{}}]},{"name":"GenreInput","kind":"input","instanceVars":[],"instances":[{"id":"i4","x":84,"y":104,"w":170,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":650,"y":58,"w":130,"h":46,"text":"Add song","visible":true,"vars":{}}]},{"name":"SongTable","kind":"table","instanceVars":[],"instances":[{"id":"T1","x":24,"y":160,"w":560,"h":280,"text":"","visible":true,"vars":{},"source":"Songs","columns":""}]},{"name":"Hint","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":24,"y":450,"w":560,"h":30,"text":"Click a song to remove it.","visible":true,"vars":{}}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"tableAdd","table":"Songs","values":{"title":"TitleInput.text","artist":"ArtistInput.text","length":"int(LengthInput.text)","genre":"GenreInput.text"}}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onItemClicked","target":"SongTable"}],"actions":[{"type":"tableRemove","table":"Songs","index":"ClickedIndex"}],"children":[]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**A table Books has the fields title, author and pages. What does one row hold, and what does item(Books, 3).author give?**

{{lines-3}}

:::


:::teacher-note

**Answer:** One row holds one book's title, author and pages. item(Books, 3).author is the author of the third book.

:::

