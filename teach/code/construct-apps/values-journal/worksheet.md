---
title: "A values journal"
subtitle: "Construct apps · Screens and lists · Lesson 4"
---

# A values journal

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Almost every app has more than one screen: sign in, choose, confirm, see your list. Something has to remember what you did on the screen before.


:::teacher-note

**In one sentence:** Students build a three-screen journal: choose a value, describe what they did, and see every entry in a list. A global variable (Chosen) carries the choice between layouts, an Array (Journal) stores entries with Push, and screen 3 rebuilds a List from the array with Repeat and loopindex in a separate event from Clear.

**Students should be able to say:** I can make an app with more than one screen and buttons that move between them. I can use a global variable to carry a choice from one screen to the next. I can store entries in an array and show them in a list.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**On screen 1 you click Courage. Its event sets the global variable Chosen to "Courage", then goes to screen 2. Screen 2's On start of layout sets its question to "What did you do to show " &amp; Chosen &amp; "?". What does the question say?**

☐ What did you do to show Courage?

☐ Nothing: screen 2 can't see screen 1's variables

☐ What did you do to show Chosen?

☐ What did you do to show ?

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** It says Courage. A global variable belongs to the whole app, not one screen, so it keeps its value when the app goes to another layout.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Lists and loops


:::keep-together

### Count with loopindex

**The journal has 3 entries, so Journal.Width is 3. The Repeat runs 3 times. What is loopindex each time?**

☐ 1, then 2, then 3

☐ 0, then 1, then 2, then 3

☐ 3 each time

☐ 0, then 1, then 2

:::


:::teacher-note

**Answer:** 0, then 1, then 2

loopindex starts at 0 and goes up by 1 each time round, so 3 repeats give 0, 1, 2. The first entry is Journal.At(0), so each repeat adds the next entry to the list.

:::


:::keep-together

### Find Nib's mistake

**Nib's journal only ever shows the latest entry. Click the line where Nib first goes wrong.**

```
 1  Nib wants screen 3 to show every journal entry.
 2  Nib makes one event: On start of layout and Repeat Journal.Width times, then List clear.
 3  In the same event Nib adds a second action: List add item Journal.At(loopindex).
 4  Nib adds three entries, and the list only shows the last one.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Clear is in the same event as the Repeat, so it runs on every repeat. Each time round the list is cleared, then one entry is added, so only the last one is left. Clear belongs in its own On start of layout event.

:::


:::keep-together

### Why global?

**What if Chosen were an instance variable on a button in screen 1, not a global variable?**

☐ It would show every value at once

☐ Screen 2 would read it faster

☐ Screen 2 couldn't read it

☐ It would work the same way

:::


:::teacher-note

**Answer:** Screen 2 couldn't read it

When the app goes to Layout 2, screen 1's objects (and their variables) aren't there. A global variable belongs to the whole app, so every screen can read it.

:::


:::typical

## Count the entries


**Choose the expression.** 

**Build it.** Add a **Text** to Layout 3 and set it in the first On start of layout event: `"You've added " & Journal.Width & " moments"`

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: test the flow

Ask someone to add two entries without any help from you. Watch where they pause or click the wrong thing. Then change one thing: a clearer button name, a *Back* button on screen 2, or an empty-box check before saving.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A shopping app has a Cart screen and a Pay screen. The Cart screen sets a variable Total to 25. How can the Pay screen show $25?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Make Total a global variable; it keeps its value when the app goes to the Pay layout, so the Pay screen can set its text from it.

:::

