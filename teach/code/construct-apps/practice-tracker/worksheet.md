---
title: "A practice tracker"
subtitle: "Construct apps · Apps that respond · Lesson 1"
---

# A practice tracker

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Apps that track things, like steps, screen time or practice, all do the same small job underneath: remember a number, change it when you do something, and show it.


:::teacher-note

**In one sentence:** Students build a practice tracker in Construct 3: a text input, a Save button and a total. A global variable holds the total, the button's On clicked event adds to it, and a Set text action shows it. The first build leaves out Set text on purpose, so students see the variable change while the screen doesn't.

**Students should be able to say:** I can lay out a screen in Construct with text, a text box and a button. I can make a button change a number the app remembers. I can make the screen show the new number after it changes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

| When (condition) | Do (actions) |
|---|---|
| Save: on clicked | System: add 15 to Minutes |

:::keep-together

**The total starts at 0, and the screen says "You've practised 0 minutes". The only event is: Save on clicked → add 15 to Minutes. You click Save three times. What does the screen say now?**

☐ Nothing: the text disappears

☐ You've practised 0 minutes

☐ You've practised 45 minutes

☐ You've practised 15 minutes

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** It still says 0 minutes. Minutes is now 45, but nothing told the text to change. The screen only shows a new total when an event sets the text.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## How the text is made


:::keep-together

### Read the text

**Minutes is 45. The Set text action says "You've practised " &amp; Minutes &amp; " minutes". What does the screen show?**

☐ You've practised &amp; 45 &amp; minutes

☐ You've practised 45 minutes

☐ 45

☐ You've practised Minutes minutes

:::


:::teacher-note

**Answer:** You've practised 45 minutes

Words in quote marks are shown as they are. Minutes, outside the quotes, is replaced by its value. The &amp; signs join the pieces into one line.

:::


:::keep-together

### Why int()?

**Why does the add action use int(TextInput.Text) and not just TextInput.Text?**

☐ int() checks that the box isn't empty

☐ int() rounds the number to the nearest 10

☐ A typed box holds text; int() makes it a number

☐ Construct needs int() before any action

:::


:::teacher-note

**Answer:** A typed box holds text; int() makes it a number

A Text Input always holds text, even when you type 20. int() turns the text "20" into the number 20, so it can be added to Minutes.

:::


:::keep-together

### Find Nib's mistake

**Nib's screen never changes from 0 minutes. Click the line that explains why.**

```
 1  Nib adds a global variable, Minutes, starting at 0.
 2  Nib adds an event: On start of layout, set TotalText to "You've practised " & Minutes & " minutes".
 3  Nib adds an event: SaveButton on clicked, add int(TextInput.Text) to Minutes.
 4  Nib types 20, clicks Save, and the screen still says 0 minutes.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: On start of layout runs once, when the app opens. After that nothing sets the text again, so it keeps saying 0. Nib needs a Set text action in the Save event too.

:::


:::typical

## A Reset button


**Choose the actions.** 

**Build it.** Insert a **Button** with the text *Reset* and name it *ResetButton*. In the event sheet, add **ResetButton**, **On clicked**, then the two actions. To set a variable, use **System**, then **Set value**.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: count the sessions

Add a second global variable, *Sessions*, that goes up by 1 each time you click Save. Show it in a new Text object, such as *Sessions: 3*. Make Reset clear it too.

Then show your tracker to someone. Ask them to use it without help. What did they try that you didn't expect?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A variable called Score goes from 3 to 4 when a button is clicked, but the screen still says 3. What's missing?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A Set text action in the button's event, so the screen shows the new score.

:::

