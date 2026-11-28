---
title: "A values journal"
subtitle: "App Builder apps · Screens and lists · Lesson 5"
---

# A values journal

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Almost every app has more than one screen: sign in, choose, confirm, see your list. Something has to remember what you did on the screen before.


:::teacher-note

**In one sentence:** Students build a three-screen journal: choose a value, describe what they did, and see every entry in a list. A whole-app variable (Chosen) carries the choice between screens, a list variable (Journal) stores entries with Add to the end of list, and a List object on screen 3 shows the list.

**Students should be able to say:** I can make an app with more than one screen and buttons that move between them. I can use a whole-app variable to carry a choice from one screen to the next. I can store entries in a list and show them with a List object.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the finished app you'll build, open on the **Run** tab. On the left, beside *Chosen* and *Journal*, you can see their values now.

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

## Check: lists and loops


:::keep-together

### Count with LoopIndex

**Journal has 3 entries. An event For each item in list Journal runs once per item. What is LoopIndex each time?**

☐ 1, then 2, then 3

☐ 3 each time

☐ 0, then 1, then 2

☐ 1, then 2, then 3, then 4

:::


:::teacher-note

**Answer:** 1, then 2, then 3

For each runs once per item, and LoopIndex counts 1, 2, 3. LoopItem is that item, the same as item(Journal, LoopIndex).

:::


:::keep-together

### Find Nib's mistake

**Nib's journal only ever shows the latest entry. Click the line where Nib first goes wrong.**

```
 1  Nib wants the Journal screen to show every entry.
 2  Nib's AddButton event starts with the action Clear list Journal.
 3  Then it adds uppercase(Chosen) & ": " & NoteInput.text to the end of list Journal.
 4  Nib adds three entries, and the list only shows the last one.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Clear list Journal runs on every click, just before the new entry is added, so the list only ever holds one entry. Adding to the end is enough: the list keeps the old entries.

:::


:::typical

## Make it yours: count, then test the flow


**Count the entries.** The Journal screen has an empty Text called *Count*. Add an event: **On start of screen** → **Set Count text to** `"Entries: " & count(Journal)`. The list grows by one each time you add an entry, so `count(Journal)` is how many there are.

**Test the flow.** Change the values to your school's own, or to four that matter to you. Then ask someone to add an entry without any help from you. Write down one place they paused or got stuck, and change the app so the next person doesn't.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Count the entries:**

```maths
{"version":1,"name":"Values journal","features":{"level":3},"variables":[{"name":"Chosen","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Kindness\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Courage\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Honesty\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Respect\""},{"type":"goToScreen","screen":"describe"}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":184,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"goToScreen","screen":"journal"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":360,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"AnotherButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"}],"children":[]},{"id":"jj2","else":false,"conds":[{"type":"onClicked","target":"AnotherButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**A shopping app has a Cart screen and a Pay screen. The Cart screen sets a variable Total to 25. How can the Pay screen show $25?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Make Total a whole-app variable (in the sidebar); it keeps its value when the app goes to the Pay screen, so the Pay screen can set its text from it.

:::

