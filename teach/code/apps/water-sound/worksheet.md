---
title: "Goal reached: sound and video"
subtitle: "App Builder apps · Keep track · Lesson 4"
---

# Goal reached: sound and video

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Apps cheer you on: a chime when a timer ends, a sound when you finish a level. The hard part isn't the sound, it's making it play once, at the right moment.


:::teacher-note

**In one sentence:** Students add a cheer to the water tracker: a Sound object and Play Cheer in an event about the goal. Because that event has no trigger, it runs every tick, so Play restarts the sound 60 times a second and they hear clicks or nothing. Trigger once while true fixes it: once each time the goal becomes reached. Then a Video object with NASA's The Water Cycle, and Reset stops the cheer.

**Students should be able to say:** I can add a sound and play it from an event. I can explain why an event with no trigger runs every tick while its condition is true. I can use Trigger once while true to make something happen once at the right moment. I can add a video from a link and say where it came from.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

Add glasses until you reach 8. The cheer plays **once**. Click **Reset** and do it again: it cheers again.

The video under it is NASA's *The Water Cycle*, one water molecule's journey from the ocean and back. Press play on it whenever you like.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Why does it sound like that?

Think back to the water tracker lesson: which events run every tick?

:::keep-together

**At 8 glasses you hear clicks, or nothing, not a cheer. Why?**

☐ Its event runs every tick, so Play keeps restarting it

☐ The sound waits until the app is stopped

☐ The Win jingle is too short to hear

☐ Play only works in a button's event

:::


:::teacher-note

**Answer:** Its event runs every tick, so Play keeps restarting it

Variable Glasses = Goal isn't a trigger like 'is clicked'. It's checked every tick, and while it's true its actions run every tick. Play starts the sound from the beginning, so it never gets past the start.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: Reset and Nib


:::keep-together

### More clicks at 8

**You reach 8, hear the cheer, then click Add a glass three more times (the cap keeps it at 8). How many more cheers?**

☐ None: Glasses = Goal stayed true the whole time

☐ None: Trigger once only works once ever

☐ Three: one for each click

☐ One: the next click starts it again

:::


:::teacher-note

**Answer:** None: Glasses = Goal stayed true the whole time

Glasses stays at 8, so Glasses = Goal stays true and Trigger once waits. Only after it's false (Reset) can it cheer again.

:::


:::keep-together

### Nib's cheer

**Nib's app cheers on every glass, not just at the goal. Click the line where Nib goes wrong.**

```
 1  AddButton is clicked, and Glasses < Goal: Add 1 to variable Glasses.
 2  In the same event: Play Cheer, so it cheers when the goal is reached.
 3  Glasses = Goal: Set Message text to "Goal reached!"
 4  Nib adds 3 glasses and hears 3 cheers.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Play Cheer is in the Add button's event, so it runs on every click that adds a glass. It belongs in an event about the goal (Glasses = Goal, once while true), or in a sub-event that checks Glasses = Goal after adding.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}


:::typical

## Make it yours: Reset stops the cheer

If someone clicks Reset while the cheer is playing, stop it: in **ResetButton is clicked**, add **Cheer**, **Stop Cheer**.

More ideas: a **Pop** sound on every glass (that one *should* play every click), your own sound with **+ Upload sound**, or hide the cheer's player: untick **Show a player** in Cheer's properties. It still plays from events and takes no space; its credit shows under the app.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Water tracker (sound and video)","features":{"level":2},"variables":[{"name":"Glasses","value":0},{"name":"Goal","value":8}],"screens":[{"id":"main","name":"Water","objects":[{"name":"GlassText","kind":"text","instanceVars":[],"instances":[{"id":"w1","x":229,"y":40,"w":342,"h":36,"text":"Glasses: 0 of 8","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"w2","x":229,"y":100,"w":342,"h":52,"text":"Add a glass","visible":true,"vars":{}}]},{"name":"ResetButton","kind":"button","instanceVars":[],"instances":[{"id":"w3","x":229,"y":170,"w":342,"h":46,"text":"Reset","visible":true,"vars":{}}]},{"name":"Message","kind":"text","instanceVars":[],"instances":[{"id":"m1","x":229,"y":240,"w":342,"h":32,"text":"","visible":true,"vars":{}}]},{"name":"BarBack","kind":"shape","instanceVars":[],"instances":[{"id":"m2","x":229,"y":290,"w":300,"h":24,"text":"","visible":true,"vars":{},"color":"#d5dae3"}]},{"name":"BarFill","kind":"shape","instanceVars":[],"instances":[{"id":"m3","x":229,"y":290,"w":300,"h":24,"text":"","visible":true,"vars":{},"color":"#2f8fdd"}]},{"name":"Cheer","kind":"sound","instanceVars":[],"instances":[{"id":"ws1","x":229,"y":330,"w":342,"h":52,"text":"","visible":true,"vars":{},"sound":"win"}]},{"name":"WaterVideo","kind":"video","instanceVars":[],"instances":[{"id":"wv1","x":229,"y":392,"w":342,"h":192,"text":"","visible":true,"vars":{},"link":"https://svs.gsfc.nasa.gov/vis/a010000/a010500/a010501/water_cycle_appletv_1280x720.webmhd.webm"}]}],"events":[{"id":"w1","else":false,"conds":[{"type":"everyTick"}],"actions":[{"type":"setText","target":"GlassText","value":"\"Glasses: \" & Glasses & \" of \" & Goal"},{"type":"setSize","target":"BarFill","prop":"w","value":"Glasses / Goal * 300"}],"children":[]},{"id":"w2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[],"children":[{"id":"w2a","else":false,"conds":[{"type":"compareVar","var":"Glasses","op":"<","value":"Goal"}],"actions":[{"type":"addTo","value":"1","var":"Glasses"}],"children":[]}]},{"id":"w3","else":false,"conds":[{"type":"onClicked","target":"ResetButton"}],"actions":[{"type":"setVar","var":"Glasses","value":"0"},{"type":"stopSound","target":"Cheer"}],"children":[]},{"id":"w4","else":false,"conds":[{"type":"compareVar","var":"Glasses","op":"=","value":"Goal"}],"actions":[{"type":"setText","target":"Message","value":"\"Goal reached!\""}],"children":[]},{"id":"w5","else":true,"conds":[],"actions":[{"type":"setText","target":"Message","value":"\"Keep going\""}],"children":[]},{"id":"ws2","else":false,"conds":[{"type":"compareVar","var":"Glasses","op":"=","value":"Goal"},{"type":"triggerOnce"}],"actions":[{"type":"playSound","target":"Cheer"}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**A quiz app checks every tick whether Score = 10 and shows a pop-up. The pop-up keeps flashing. What's happening, and what's the fix?**

{{lines-3}}

:::


:::teacher-note

**Answer:** The Score = 10 event runs every tick while it's true, so the pop-up is shown again and again. Add Trigger once while true so it shows once when Score reaches 10.

:::

