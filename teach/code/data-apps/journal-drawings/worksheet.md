---
title: "A journal with drawings"
subtitle: "Data apps · Saving between visits · Lesson 5"
---

# A journal with drawings

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A photo app keeps every photo with its date and place, not just the latest one. A table with a picture field does the same: one row per entry, and the picture is part of the row.


:::teacher-note

**In one sentence:** Students give every values-journal entry its own drawing: a table Entries with a picture field, an Add a row action, a Table object on the Journal screen and a row click that shows ClickedItem.drawing big. They remember the table between visits, delete the old list and variable, and hand in a .zip made by Save with what the app kept.

**Students should be able to say:** I can make a table with a picture field. I can add a row that keeps a value, some words and a drawing together. I can show a clicked row's own picture with ClickedItem. I can hand in an app with what it kept, and say why a Share link doesn't include it.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

Add two entries with different drawings. On the Journal screen, click each row: its drawing shows big underneath. Then press **↻ Restart**: the entries are still there.

If you didn't do *Draw how you showed it* in App Builder apps, this is the same values journal: Choose a value, Describe it (with a drawing), see your Journal.

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

## Check: Nib and handing it in


:::keep-together

### Nib's slip

**Whichever row Nib clicks, the big picture is always the newest drawing. Click the line where Nib goes wrong.**

```
 1  Add is clicked: add a row to Entries with value Chosen, note NoteInput.text, drawing Drawing.picture.
 2  Add also still sets LastDrawing to Drawing.picture.
 3  An item in EntriesTable is clicked: Set LastImage picture to the one in LastDrawing.
 4  Nib clicks the first row, then the second. Both show the same drawing: the newest.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: LastDrawing is one variable, holding the drawing from the last Add. The clicked row's own drawing is ClickedItem.drawing.

:::


:::keep-together

### Sharing

**Kai finishes the journal, adds five entries with drawings, and sends the teacher a Share link. What does the teacher see?**

☐ An error, because the app has drawings

☐ Kai's five drawings, without the app

☐ The journal app, with none of Kai's entries

☐ The journal app with Kai's five entries

:::


:::teacher-note

**Answer:** The journal app, with none of Kai's entries

A Share link carries the app, not what it kept while running: those entries are in Kai's browser. To hand in the entries too, Save and include what the app kept: one file (.zip) with the app, the rows and the drawings.

:::


:::typical

## Hand it in

1. Add two or three entries with drawings, if you haven't.
2. Click **Save** at the top and choose **Save to this computer…**. When it asks, choose to **include what the app kept**. You get one file, a `.zip`, with the app, the rows and the drawings inside.
3. Hand in the file the way your class usually does. Your teacher opens it with **Open** in App Builder.

If your teacher only wants to try the app, **Share** gives a link instead, without your entries.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**A plant log keeps a photo of each plant every week. Why a table with a picture field, not a list of names and a separate list of photos?**

{{lines-3}}

:::


:::teacher-note

**Answer:** One row keeps the name, the date and the photo together, so they can't get out of step when a row is added or removed. Two lists have to be kept matching by hand.

:::

