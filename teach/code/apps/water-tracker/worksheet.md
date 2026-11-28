---
title: "A water tracker"
subtitle: "App Builder apps · Keep track · Lesson 3"
---

# A water tracker

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Most apps show the same numbers in several places. Keeping them all up to date by hand in every button gets messy fast; there's a simpler way.


:::teacher-note

**In one sentence:** Students build a water tracker with two variables (Glasses, Goal), an Every tick event that keeps the display up to date, Add and Reset buttons, and a cap. The cap is first built the way beginners often write it (Add 1 left on the AddButton event, the check in a sub-event), so it fails at the goal; students find why and move the action into the sub-event. The Make step adds a goal message with Else and a progress bar.

**Students should be able to say:** I can use Every tick to keep what's on screen up to date. I can say which actions a sub-event's condition controls. I can make a progress bar from a number.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the finished app you'll build, open on the **Run** tab. Under it, the Every tick row keeps flashing: it runs all the time, not just when you click.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: did the cap work?


:::keep-together

### What did you see?

**You built the cap as in Build 2 and clicked Add 12 times, with a goal of 8. What did the screen say?**

☐ Glasses: 0 of 8

☐ Glasses: 12 of 8

☐ Glasses: 8 of 8

☐ Glasses: 7 of 8

:::


:::teacher-note

**Answer:** Glasses: 12 of 8

It went past the goal. The Add 1 action sits on the AddButton event, so it runs on every click. The sub-event's condition only controls actions inside the sub-event, and there are none.

:::


:::keep-together

### Find the slip

**This is the cap you built. Click the line that lets the count pass the goal.**

```
 1  Event: when AddButton is clicked.
 2     Action on that event: add 1 to variable Glasses.
 3     Sub-event below it: Variable Glasses < Goal.
 4     The sub-event has no actions.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: the action is on the parent event, so it runs on every click. The sub-event's condition below it only controls actions inside the sub-event. Move Add 1 into the sub-event.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}


:::typical

## Make it yours: a message and a progress bar


**Work out the width.** 

**Build it.** - **Message:** add a Text and rename it *Message*. Add an event **Variables**, **Variable … … …**: Glasses **=** Goal, with the action **Set Message text to** *Goal reached!*. From the event's **⋯** menu, choose **Add an Else below**, and give the Else the action that sets it to *Keep going*.
- **Progress bar:** add a **Box** and rename it *BarBack*: grey, 300 wide. Then add another Box, *BarFill*, in blue, the same size and in the same place (set X and Y in Properties). The one added later sits on top. In the Every tick event add **BarFill**, **Set BarFill width to …**: `Glasses / Goal * 300`

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Build it:**

```maths
{"version":1,"name":"Water tracker","features":{"level":2},"variables":[{"name":"Glasses","value":0},{"name":"Goal","value":8}],"screens":[{"id":"main","name":"Water","objects":[{"name":"GlassText","kind":"text","instanceVars":[],"instances":[{"id":"w1","x":229,"y":40,"w":342,"h":36,"text":"Glasses: 0 of 8","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"w2","x":229,"y":100,"w":342,"h":52,"text":"Add a glass","visible":true,"vars":{}}]},{"name":"ResetButton","kind":"button","instanceVars":[],"instances":[{"id":"w3","x":229,"y":170,"w":342,"h":46,"text":"Reset","visible":true,"vars":{}}]},{"name":"Message","kind":"text","instanceVars":[],"instances":[{"id":"m1","x":229,"y":240,"w":342,"h":32,"text":"","visible":true,"vars":{}}]},{"name":"BarBack","kind":"shape","instanceVars":[],"instances":[{"id":"m2","x":229,"y":290,"w":300,"h":24,"text":"","visible":true,"vars":{},"color":"#d5dae3"}]},{"name":"BarFill","kind":"shape","instanceVars":[],"instances":[{"id":"m3","x":229,"y":290,"w":300,"h":24,"text":"","visible":true,"vars":{},"color":"#2f8fdd"}]}],"events":[{"id":"w1","else":false,"conds":[{"type":"everyTick"}],"actions":[{"type":"setText","target":"GlassText","value":"\"Glasses: \" & Glasses & \" of \" & Goal"},{"type":"setSize","target":"BarFill","prop":"w","value":"Glasses / Goal * 300"}],"children":[]},{"id":"w2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[],"children":[{"id":"w2a","else":false,"conds":[{"type":"compareVar","var":"Glasses","op":"<","value":"Goal"}],"actions":[{"type":"addTo","value":"1","var":"Glasses"}],"children":[]}]},{"id":"w3","else":false,"conds":[{"type":"onClicked","target":"ResetButton"}],"actions":[{"type":"setVar","var":"Glasses","value":"0"}],"children":[]},{"id":"w4","else":false,"conds":[{"type":"compareVar","var":"Glasses","op":"=","value":"Goal"}],"actions":[{"type":"setText","target":"Message","value":"\"Goal reached!\""}],"children":[]},{"id":"w5","else":true,"conds":[],"actions":[{"type":"setText","target":"Message","value":"\"Keep going\""}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**What goes wrong if you put "add 1 to Glasses" in the Every tick event?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It adds 1 about 60 times a second, so the count shoots up. Every tick is for keeping the display in step, not for changing the count.

:::

