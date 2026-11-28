---
title: "A practice tracker"
subtitle: "App Builder apps · Apps that respond · Lesson 1"
---

# A practice tracker

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Apps that track things, like steps, screen time or practice, all do the same small job underneath: remember a number, change it when you do something, and show it.


:::teacher-note

**In one sentence:** Students build a practice tracker in App Builder: a text input, a Save button and a total. A variable holds the total, the button's On clicked event adds to it, and a Set text action shows it. The build adds Set text last, so students see the variable change while the screen doesn't, then fix it.

**Students should be able to say:** I can lay out a screen in App Builder with text, a text box and a button. I can make a button change a number the app remembers. I can make the screen show the new number after it changes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Type some minutes and click **Save** a few times. On the left, beside *Minutes*, you can see its value now, next to the value it started at.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: how the text is made


:::keep-together

### Read the text

**Minutes is 45. The Set text action says "You've practised " &amp; Minutes &amp; " minutes". What does the screen show?**

☐ You've practised 45 minutes

☐ You've practised &amp; 45 &amp; minutes

☐ You've practised Minutes minutes

☐ 45

:::


:::teacher-note

**Answer:** You've practised 45 minutes

Words in quote marks are shown as they are. Minutes, outside the quotes, is replaced by its value. The &amp; signs join the pieces into one line.

:::


:::keep-together

### Find Nib's mistake

**Nib's screen never changes from 0 minutes. Click the line that explains why.**

```
 1  Nib adds a variable, Minutes, starting at 0.
 2  Nib adds an event: On start of screen, set TotalText text to "You've practised " & Minutes & " minutes".
 3  Nib adds an event: when SaveButton is clicked, add int(MinutesInput.text) to variable Minutes.
 4  Nib types 20, clicks Save, and the screen still says 0 minutes.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: On start of screen runs once, when the app opens. After that nothing sets the text again, so it keeps saying 0. Nib needs a Set text action in the Save event too.

:::


:::typical

## Make it yours: Reset and sessions


**A Reset button.** Carry on with your tracker. Add a **Button** with the text *Reset* and rename it *ResetButton*. Its event needs two actions: **Set variable Minutes to 0**, then set TotalText's text again (or the screen keeps the old total).

**Count the sessions.** Add a second variable, *Sessions*, that goes up by 1 each time you click Save. Show it in a new Text, such as *Sessions: 3*. Make Reset clear it too.

Then show your tracker to someone. Ask them to use it without help. What did they try that you didn't expect?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**A Reset button:**

```maths
{"version":1,"name":"Practice tracker","features":{"level":2},"variables":[{"name":"Minutes","value":0}],"screens":[{"id":"main","name":"Tracker","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":229,"y":40,"w":342,"h":36,"text":"Practice tracker","visible":true,"vars":{}}]},{"name":"MinutesInput","kind":"input","instanceVars":[],"instances":[{"id":"t2","x":229,"y":100,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SaveButton","kind":"button","instanceVars":[],"instances":[{"id":"t3","x":441,"y":98,"w":130,"h":46,"text":"Save","visible":true,"vars":{}}]},{"name":"TotalText","kind":"text","instanceVars":[],"instances":[{"id":"t4","x":229,"y":170,"w":342,"h":32,"text":"You've practised 0 minutes","visible":true,"vars":{}}]},{"name":"ResetButton","kind":"button","instanceVars":[],"instances":[{"id":"r1","x":441,"y":218,"w":130,"h":46,"text":"Reset","visible":true,"vars":{}}]}],"events":[{"id":"p1","else":false,"conds":[{"type":"onClicked","target":"SaveButton"}],"actions":[{"type":"addTo","value":"int(MinutesInput.text)","var":"Minutes"},{"type":"setText","target":"TotalText","value":"\"You've practised \" & Minutes & \" minutes\""}],"children":[]},{"id":"p2","else":false,"conds":[{"type":"onClicked","target":"ResetButton"}],"actions":[{"type":"setVar","var":"Minutes","value":"0"},{"type":"setText","target":"TotalText","value":"\"You've practised \" & Minutes & \" minutes\""}],"children":[]}]}],"device":"web"}
```

**Count the sessions:**

```maths
{"version":1,"name":"Practice tracker","features":{"level":2},"variables":[{"name":"Minutes","value":0},{"name":"Sessions","value":0}],"screens":[{"id":"main","name":"Tracker","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":229,"y":40,"w":342,"h":36,"text":"Practice tracker","visible":true,"vars":{}}]},{"name":"MinutesInput","kind":"input","instanceVars":[],"instances":[{"id":"t2","x":229,"y":100,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SaveButton","kind":"button","instanceVars":[],"instances":[{"id":"t3","x":441,"y":98,"w":130,"h":46,"text":"Save","visible":true,"vars":{}}]},{"name":"TotalText","kind":"text","instanceVars":[],"instances":[{"id":"t4","x":229,"y":170,"w":342,"h":32,"text":"You've practised 0 minutes","visible":true,"vars":{}}]},{"name":"ResetButton","kind":"button","instanceVars":[],"instances":[{"id":"r1","x":441,"y":218,"w":130,"h":46,"text":"Reset","visible":true,"vars":{}}]},{"name":"SessionsText","kind":"text","instanceVars":[],"instances":[{"id":"q1","x":229,"y":220,"w":342,"h":32,"text":"Sessions: 0","visible":true,"vars":{}}]}],"events":[{"id":"p1","else":false,"conds":[{"type":"onClicked","target":"SaveButton"}],"actions":[{"type":"addTo","value":"int(MinutesInput.text)","var":"Minutes"},{"type":"setText","target":"TotalText","value":"\"You've practised \" & Minutes & \" minutes\""},{"type":"addTo","value":"1","var":"Sessions"},{"type":"setText","target":"SessionsText","value":"\"Sessions: \" & Sessions"}],"children":[]},{"id":"p2","else":false,"conds":[{"type":"onClicked","target":"ResetButton"}],"actions":[{"type":"setVar","var":"Minutes","value":"0"},{"type":"setText","target":"TotalText","value":"\"You've practised \" & Minutes & \" minutes\""},{"type":"setVar","var":"Sessions","value":"0"},{"type":"setText","target":"SessionsText","value":"\"Sessions: \" & Sessions"}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**A variable called Score goes from 3 to 4 when a button is clicked, but the screen still says 3. What's missing?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A Set text action in the button's event, so the screen shows the new score.

:::

