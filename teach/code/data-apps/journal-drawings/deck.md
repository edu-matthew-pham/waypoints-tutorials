---
marp: true
theme: default
html: true
---

# A journal with drawings

Data apps · Saving between visits

<!-- Speaker note: Students give every values-journal entry its own drawing: a table Entries with a picture field, an Add a row action, a Table object on the Journal screen and a row click that shows ClickedItem.drawing big. They remember the table between visits, delete the old list and variable, and hand in a .zip made by Save with what the app kept. About 50 minutes (Try 5 min · Build 1 8 min · Build 2 7 min · Build 3 12 min · Build 4 8 min · Check 5 min · Hand in 5 min). -->

---

## Today

- I can make a table with a picture field.
- I can add a row that keeps a value, some words and a drawing together.
- I can show a clicked row's own picture with ClickedItem.
- I can hand in an app with what it kept, and say why a Share link doesn't include it.

<!-- Speaker note: Before class: This lesson continues App Builder apps › Draw how you showed it, which ends with "only the latest drawing is kept". Students who didn't do it can still follow: the first step uses the finished app, and the starting app is the journal with one drawing. A picture field holds the name the app gave a drawing (such as media:7f3a09c2); the table shows it as a thumbnail. The drawings themselves are kept in this browser, beside the remembered rows. Forget saved data removes both. The code checks can't see a field's type, so they can't tell whether drawing was set to Picture. A text field also shows thumbnails for drawings, so nothing breaks either way, but the 🖼 is the right habit: when students type rows into the sidebar, a picture field gives them a picture picker. Handing in: a Share link carries the app, not what it kept while running, so the teacher sees an empty journal. Save asks whether to include what the app kept; yes gives one .zip (the app, the rows and the drawings) that Open brings back. Drawings, not photos, so there are no faces in what's handed in. Teacher: Try it: ask what changes when you click a different row. (Only the big picture: each row has its own.) Teacher: Build 3: checkpoint: two entries, two different thumbnails, each click shows its own. Teacher: Build 4: before deleting the old list, ask what still uses it. (Nothing, once Build 3 is done.) Teacher: Hand in: show where the Save box asks about what the app kept. -->

---

## Why it matters

> A photo app keeps every photo with its date and place, not just the latest one. A table with a picture field does the same: one row per entry, and the picture is part of the row.

<!-- Speaker note: In App Builder apps, the values journal learnt to keep a drawing, but only the latest one: draw a heart, then a star, and the heart is gone. One variable holds one thing. Today every entry keeps its own drawing, in a **table**: | value | note | drawing | |---|---|---| | Courage | asked a question in class | (a picture) | | Kindness | helped a friend | (a picture) | A **picture field** holds a picture in each row, just as a text field holds text. The table shows it as a small thumbnail. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Your phone keeps every photo you take, with its date. How is that different from a frame that shows only the latest one?**

- Where does each photo's date live?

<!-- Speaker note: Each photo is a row: the picture and its date travel together. Today the journal does the same with a picture field. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

Add two entries with different drawings. On the Journal screen, click each row: its drawing shows big underneath. Then press **↻ Restart**: the entries are still there.

If you didn't do *Draw how you showed it* in App Builder apps, this is the same values journal: Choose a value, Describe it (with a drawing), see your Journal.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-2#step-2)

<!-- Speaker note: 1. On the left, under **Tables**, type *Entries* and click **+**. 2. Click the field *name*, choose **Rename**, and call it *value*. 3. Click **+** beside the fields to add *note*, then *drawing*. 4. Click *drawing* and choose **Picture**. It shows 🖼 instead of abc. No rows yet: the app will add them. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-3#step-3)

<!-- Speaker note: 1. Open the **Describe** screen's events. In **AddButton is clicked**, add an action before *Go to screen*: **Tables**, **Add a row to** Entries. 2. Fill in its fields: value `Chosen`, note `NoteInput.text`, drawing `Drawing.picture` 3. Run it and add an entry. Watch Entries on the left: a row appears, with a thumbnail. The old list and LastDrawing still work for now. You'll tidy them away once the table does their job. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-4#step-4)

<!-- Speaker note: 1. Open the **Journal** screen. Click the **List** and delete it. 2. **+ Add object**, **Table**. Rename it *EntriesTable*, put it where the list was (x 229, y 110, width 342, height 210), and set **Shows** to Entries. 3. In **On start of screen**, change the Count to `"Entries: " & count(Entries)` and delete *Set LastImage picture to the one in LastDrawing*. 4. Add an event: **EntriesTable**, **An item in EntriesTable is clicked** → **LastImage**, **Set LastImage picture to the one in** `ClickedItem.drawing` 5. Run it, add two entries, and click each row. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-5#step-5](https://tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-5#step-5)

<!-- Speaker note: 1. Click the **💾** beside *Entries*, as in [Saving between visits](../saving/). The entries and their drawings are kept in this browser. 2. On Describe, in **AddButton is clicked**, delete the action that adds to the list Journal and the one that sets LastDrawing. 3. Delete the list *Journal* and the variable *LastDrawing* in the sidebar. Nothing uses them now. 4. Run it, add an entry, then **↻ Restart**. Is it still there? Does each row still show its own drawing? The drawings are kept in this browser, like the rows. **Forget saved data** removes both. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Nib's slip

**Whichever row Nib clicks, the big picture is always the newest drawing. Click the line where Nib goes wrong.**

```
 1  Add is clicked: add a row to Entries with value Chosen, note NoteInput.text, drawing Drawing.picture.
 2  Add also still sets LastDrawing to Drawing.picture.
 3  An item in EntriesTable is clicked: Set LastImage picture to the one in LastDrawing.
 4  Nib clicks the first row, then the second. Both show the same drawing: the newest.
```

* Answer: line 3

<!-- Speaker note: Line 3: LastDrawing is one variable, holding the drawing from the last Add. The clicked row's own drawing is ClickedItem.drawing. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Sharing

**Kai finishes the journal, adds five entries with drawings, and sends the teacher a Share link. What does the teacher see?**

- An error, because the app has drawings
- Kai's five drawings, without the app
- The journal app, with none of Kai's entries
- The journal app with Kai's five entries

* Answer: The journal app, with none of Kai's entries

<!-- Speaker note: A Share link carries the app, not what it kept while running: those entries are in Kai's browser. To hand in the entries too, Save and include what the app kept: one file (.zip) with the app, the rows and the drawings. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## What does the link carry? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Two students swap Share links of their finished journals and open them. Whose entries do they see?

<!-- Speaker note: None: the link carries the app, the entries stay in the browser that made them. Save with what the app kept hands in everything. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Hand it in

1. Add two or three entries with drawings, if you haven't.
2. Click **Save** at the top and choose **Save to this computer…**. When it asks, choose to **include what the app kept**. You get one file, a `.zip`, with the app, the rows and the drawings inside.
3. Hand in the file the way your class usually does. Your teacher opens it with **Open** in App Builder.

If your teacher only wants to try the app, **Share** gives a link instead, without your entries.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/journal-drawings/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Saving with what the app kept puts the app, the rows and the drawings into one file the teacher can open. For students who need more support: Do Build 1 together on the board. Pairs do Builds 2 to 4, one driving, one reading the steps. For early finishers: Add a Remove button: when a row is clicked, remember its index, and Remove deletes that row (as in One table instead). What happens to its drawing? The hard part, on purpose: Build 3 changes three things on one screen (the Table, the count, the row click). Students who skip the count change see 'Entries: 0' forever; students who keep the old LastDrawing action see the newest drawing on every row. Point them back to step 3 of Build 3. When students get stuck: Every row shows the same big picture. Ask: Which variable does your row click read? Fix: Use ClickedItem.drawing, the clicked row's own drawing, not LastDrawing. / The Journal says Entries: 0 though the table has rows. Ask: What does the count count? Fix: Change count(Journal) to count(Entries) in On start of screen. / The table is empty on the Journal screen. Ask: What does the Table show? Look at Shows in Properties. Fix: Set Shows to Entries. / After Restart the entries are gone. Ask: Is the 💾 beside Entries lit? Fix: Click it, as in Saving between visits. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A plant log keeps a photo of each plant every week. Why a table with a picture field, not a list of names and a separate list of photos?**

* One row keeps the name, the date and the photo together, so they can't get out of step when a row is added or removed. Two lists have to be kept matching by hand.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Search, filter and sort, on the playlist. Students could search their journal by value with the same For each. -->
