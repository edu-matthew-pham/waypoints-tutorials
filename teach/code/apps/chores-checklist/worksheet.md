---
title: "A chores checklist"
subtitle: "App Builder apps · Apps that respond · Lesson 2"
---

# A chores checklist

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A dark mode button looks like the simplest thing in an app. Making one that switches back shows how apps choose between two things to do.


:::teacher-note

**In one sentence:** Students make a checklist of jobs as tick boxes (Toggles with the Tick box look, which switch themselves), then build a 🌙 Dark / ☀️ Light button by hand with a true/false variable Dark. They first build a button that goes dark and stays dark, then try two separate click events (which cancel each other on one click), then fix it with one click event, a sub-event and an Else.

**Students should be able to say:** I can turn a Toggle into a tick box and use it in a list. I can change colours while an app runs, and keep on or off in a true/false variable. I can explain why two separate events with the same trigger undo each other. I can use a sub-event and Else so that only one of two things happens.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the checklist you'll build, open on the **Run** tab. Tick and untick the jobs. Click **🌙 Dark** a few times: dark, then light, then dark. The event list beside the app lights up each time an event runs.

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

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: which branch runs?


:::keep-together

### Trace a click

**With the sub-event and Else, the screen is dark, so Dark is true. You click ModeButton once. What happens?**

☐ Both run, so it goes light then dark

☐ The Else runs, so it goes light

☐ Neither runs, as Dark isn't false

☐ The sub-event runs, so it stays dark

:::


:::teacher-note

**Answer:** The Else runs, so it goes light

The click triggers the event once. Its sub-event checks Dark = false, which is false, so the Else runs instead and sets everything back to light. Exactly one branch runs per click.

:::


:::keep-together

### Find Nib's mistake

**Nib's dark mode button doesn't seem to do anything. Click the line where Nib first goes wrong.**

```
 1  Nib wants the button to go dark on one click and light on the next.
 2  Nib adds an event: ModeButton is clicked, and Variable Dark = false: set Dark to true and go dark.
 3  Nib adds a second event: ModeButton is clicked, and Variable Dark = true: set Dark to false and go light.
 4  Nib clicks the button, and the screen stays light.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: a second separate click event also runs on the same click, straight after the first, and undoes it. The fix is one click event with a sub-event and an Else.

:::


:::typical

## Make it yours: count what's done


**Count what's done.** Add a variable *Done* (starting at 0) and a Text called *DoneText* on the card, under the jobs. A tick box has its own trigger, **BedJob is switched**, and its own condition, **BedJob is on**. Use the same shape you just built: one event **BedJob is switched**, a sub-event **BedJob is on** that adds 1 to Done, and an Else that subtracts 1. In both branches, set DoneText to `"Done: " & Done & " of 3"`. Then do the same for the other jobs.

**A checklist for someone.** Make a checklist for someone you know: a packing list, a morning routine, or jobs for a club. Use their words for each job. Add a **Reset** button that unticks every job (**Turn BedJob off**) and sets Done to 0. Then watch them use it without helping. What did they expect to happen that didn't?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Count what's done:**

```maths
{"version":1,"name":"Chores checklist","features":{"level":2},"variables":[{"name":"Dark","value":false},{"name":"Done","value":0}],"screens":[{"id":"main","name":"Chores","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"title","x":229,"y":40,"w":342,"h":36,"text":"My jobs today","visible":true,"vars":{}}]},{"name":"Card","kind":"shape","instanceVars":[],"instances":[{"id":"card","x":213,"y":96,"w":374,"h":204,"text":"","visible":true,"vars":{},"color":"#f1f4f9"}]},{"name":"BedJob","kind":"toggle","instanceVars":[],"instances":[{"id":"bedjob","x":229,"y":108,"w":326,"h":40,"text":"Make my bed","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"FeedJob","kind":"toggle","instanceVars":[],"instances":[{"id":"feedjob","x":229,"y":160,"w":326,"h":40,"text":"Feed the dog","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"HomeworkJob","kind":"toggle","instanceVars":[],"instances":[{"id":"homeworkjob","x":229,"y":212,"w":326,"h":40,"text":"Do my homework","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"DoneText","kind":"text","instanceVars":[],"instances":[{"id":"donetext","x":229,"y":256,"w":326,"h":32,"text":"Done: 0 of 3","visible":true,"vars":{}}]},{"name":"ModeButton","kind":"button","instanceVars":[],"instances":[{"id":"modebutton","x":229,"y":312,"w":160,"h":46,"text":"🌙 Dark","visible":true,"vars":{}}]}],"events":[{"id":"m1","else":false,"conds":[{"type":"onClicked","target":"ModeButton"}],"actions":[],"children":[{"id":"m1a","else":false,"conds":[{"type":"compareVar","var":"Dark","op":"=","value":"false"}],"actions":[{"type":"setVar","var":"Dark","value":"true"},{"type":"setBackground","value":"\"#1c2333\""},{"type":"setColour","target":"Title","value":"\"white\""},{"type":"setText","target":"ModeButton","value":"\"☀️ Light\""}],"children":[]},{"id":"m1e","else":true,"conds":[],"actions":[{"type":"setVar","var":"Dark","value":"false"},{"type":"setBackground","value":"\"white\""},{"type":"setColour","target":"Title","value":"\"black\""},{"type":"setText","target":"ModeButton","value":"\"🌙 Dark\""}],"children":[]}]},{"id":"BedJob","else":false,"conds":[{"type":"onToggled","target":"BedJob"}],"actions":[],"children":[{"id":"BedJoba","else":false,"conds":[{"type":"isOn","target":"BedJob","state":"on"}],"actions":[{"type":"addTo","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]},{"id":"BedJobe","else":true,"conds":[],"actions":[{"type":"subtractFrom","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]}]},{"id":"FeedJob","else":false,"conds":[{"type":"onToggled","target":"FeedJob"}],"actions":[],"children":[{"id":"FeedJoba","else":false,"conds":[{"type":"isOn","target":"FeedJob","state":"on"}],"actions":[{"type":"addTo","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]},{"id":"FeedJobe","else":true,"conds":[],"actions":[{"type":"subtractFrom","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]}]},{"id":"HomeworkJob","else":false,"conds":[{"type":"onToggled","target":"HomeworkJob"}],"actions":[],"children":[{"id":"HomeworkJoba","else":false,"conds":[{"type":"isOn","target":"HomeworkJob","state":"on"}],"actions":[{"type":"addTo","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]},{"id":"HomeworkJobe","else":true,"conds":[],"actions":[{"type":"subtractFrom","var":"Done","value":"1"},{"type":"setText","target":"DoneText","value":"\"Done: \" & Done & \" of 3\""}],"children":[]}]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**A mute button app has two events: Mute clicked and Muted = false → set Muted to true; clicked and Muted = true → set Muted to false. What happens when you click, and how do you fix it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Both run on one click, so it mutes then straight away unmutes. Fix: one click event with a sub-event (Muted = false → mute) and an Else (unmute).

:::

