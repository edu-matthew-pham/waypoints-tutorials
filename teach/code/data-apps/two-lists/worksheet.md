---
title: "Two lists that must agree"
subtitle: "Data apps · Lists that must agree · Lesson 1"
---

# Two lists that must agree

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A music app knows who sang every song. Underneath, something has to keep each title and its artist together.


:::teacher-note

**In one sentence:** Students build a playlist kept in two parallel lists, Titles and Artists, where a song's title and artist sit at the same place in each. Add puts a value on the end of both lists; clicking a title removes ClickedIndex from both. The Check shows what happens when only one list changes: every later song gets the wrong artist. This is the problem the next lesson's table solves.

**Students should be able to say:** I can keep two lists in step by changing both in the same event. I can explain why a title and its artist must be at the same place in each list. I can predict what goes wrong when only one list changes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the app you'll build, open on the **Run** tab. Add a song, then click a title to remove that song. On the left, beside *Titles* and *Artists*, you can see how many items each list has now.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: when the lists disagree


:::keep-together

### What happens to Cove?

**Titles is Blue Sky, Arc, Cove. Artists is Kai, Mo, Lu. An event removes item 2 from Titles only. Who does the app now say sang Cove?**

☐ Mo

☐ Kai

☐ Nobody: the app shows an error

☐ Lu

:::


:::teacher-note

**Answer:** Mo

Cove moves up to place 2 in Titles, but Artists didn't change, so place 2 there is still Mo. Every song after the removed one now has the wrong artist.

:::


:::keep-together

### Find Nib's mistake

**After Nib removes a song, the artists are wrong for every song below it. Click the line where Nib first goes wrong.**

```
 1  Nib's event: when an item in TitleList is clicked.
 2  Its action: Remove item ClickedIndex from list Titles.
 3  Nib runs the app and clicks Arc to remove it.
 4  Now the app says Cove was sung by Mo.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Nib only removes the item from Titles. Artists keeps the old item, so every artist below it is now one place out. Both lists must lose the same place.

:::


:::typical

## Make it yours: a third list


**Add a Lengths list.** This screen now has a *Minutes* box and a third List object, *LengthList*.

1. Add a list called *Lengths* (left side, under Lists), and set *LengthList* to show it (click it, then **Shows** in Properties).
2. In the AddButton event, add `int(LengthInput.text)` to the end of *Lengths*. `int(...)` turns the typed text into a number.
3. In the title-clicked event, remove item `ClickedIndex` from *Lengths* too.

**What about sorting?.** Imagine a button that sorts *Titles* from A to Z. Write one sentence: what would happen to the artists and lengths? Keep it for the next lesson, which keeps each song's details together in one place.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Add a Lengths list:**

```maths
{"version":1,"name":"Two lists","device":"web","features":{"level":3},"variables":[{"name":"Titles","value":["Blue Sky","Arc","Cove"]},{"name":"Artists","value":["Kai","Mo","Lu"]},{"name":"Lengths","value":[3,5,4]}],"screens":[{"id":"home","name":"Home","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"h1","x":24,"y":16,"w":500,"h":40,"text":"My playlist","visible":true,"vars":{}}]},{"name":"TitleLabel","kind":"text","instanceVars":[],"instances":[{"id":"l1","x":24,"y":70,"w":90,"h":36,"text":"Title","visible":true,"vars":{}}]},{"name":"TitleInput","kind":"input","instanceVars":[],"instances":[{"id":"i1","x":110,"y":66,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"ArtistLabel","kind":"text","instanceVars":[],"instances":[{"id":"l2","x":330,"y":70,"w":90,"h":36,"text":"Artist","visible":true,"vars":{}}]},{"name":"ArtistInput","kind":"input","instanceVars":[],"instances":[{"id":"i2","x":410,"y":66,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"LengthLabel","kind":"text","instanceVars":[],"instances":[{"id":"l3","x":24,"y":116,"w":90,"h":36,"text":"Minutes","visible":true,"vars":{}}]},{"name":"LengthInput","kind":"input","instanceVars":[],"instances":[{"id":"i3","x":110,"y":112,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"b1","x":630,"y":64,"w":140,"h":46,"text":"Add song","visible":true,"vars":{}}]},{"name":"Hint","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":24,"y":160,"w":600,"h":30,"text":"Click a title to remove that song.","visible":true,"vars":{}}]},{"name":"TitleList","kind":"list","instanceVars":[],"instances":[{"id":"L1","x":24,"y":200,"w":240,"h":260,"text":"","visible":true,"vars":{},"source":"Titles"}]},{"name":"ArtistList","kind":"list","instanceVars":[],"instances":[{"id":"L2","x":280,"y":200,"w":240,"h":260,"text":"","visible":true,"vars":{},"source":"Artists"}]},{"name":"LengthList","kind":"list","instanceVars":[],"instances":[{"id":"L3","x":536,"y":200,"w":240,"h":260,"text":"","visible":true,"vars":{},"source":"Lengths"}]}],"events":[{"id":"e1","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","list":"Titles","value":"TitleInput.text"},{"type":"listAdd","list":"Artists","value":"ArtistInput.text"},{"type":"listAdd","list":"Lengths","value":"int(LengthInput.text)"}],"children":[]},{"id":"e2","else":false,"conds":[{"type":"onItemClicked","target":"TitleList"}],"actions":[{"type":"listRemoveAt","list":"Titles","index":"ClickedIndex"},{"type":"listRemoveAt","list":"Artists","index":"ClickedIndex"},{"type":"listRemoveAt","list":"Lengths","index":"ClickedIndex"}],"children":[]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**Two lists: Names (Ana, Ben, Cy) and Scores (7, 4, 9). Ben is removed from Names only. What score does the app now show for Cy?**

{{lines-3}}

:::


:::teacher-note

**Answer:** 4: Cy moved up to place 2 in Names, and place 2 in Scores is still Ben's 4.

:::

