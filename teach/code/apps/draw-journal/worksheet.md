---
title: "Draw how you showed it"
subtitle: "App Builder apps · Pictures from the user · Lesson 6"
---

# Draw how you showed it

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Some things are easier to draw than to say. Apps let you draw, take photos and record sounds; each makes a picture or sound the app can keep and show somewhere else.


:::teacher-note

**In one sentence:** Students add drawing to the values journal: a Drawing object on Describe (cleared when the screen starts), Drawing.picture kept in a variable when Add is clicked, and an Image on the Journal screen that shows it with Set picture to the one in. They find out that action order matters (Nib clears the page before keeping it) and that one variable keeps only the latest drawing, which sets up tables in Data apps.

**Students should be able to say:** I can add a Drawing and clear it when a screen starts. I can keep what the user drew in a variable with Drawing.picture. I can show a picture the app made in an Image. I can explain why one variable keeps only the latest drawing.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

Pick a value, type what you did, then draw it in the box with the mouse (or your finger). Click **Add to my journal**. The drawing shows on the Journal screen.

Watch **LastDrawing** under the variables on the left. When you click Add, it changes from `""` to something like `media:7f3a09c2`: that's the app's name for the picture it kept.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: order and what's kept


:::keep-together

### Nib's slip

**Nib's Journal shows the error "There is no picture yet", even though Nib drew something. Click the line where Nib first goes wrong.**

```
 1  AddButton is clicked: Add the entry to the end of list Journal.
 2  Then Clear Drawing, so the next entry starts with a clean page.
 3  Then Set variable LastDrawing to Drawing.picture.
 4  Then Go to screen Journal, which shows the picture in LastDrawing.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Clear Drawing runs before Drawing.picture is read, so the page is empty when Add keeps it. Actions run in order, top to bottom: keep the picture first (or clear it when the screen starts, as in Build 1).

:::


:::keep-together

### Two entries

**You add a Kindness entry with a heart drawing, then a Courage entry with a star. What does the Journal screen show?**

☐ Only the Courage entry, with the star

☐ Both entries in the list, and only the star drawing

☐ Both entries in the list, and the heart drawing

☐ Both entries in the list, and both drawings

:::


:::teacher-note

**Answer:** Both entries in the list, and only the star drawing

The list keeps every entry, but LastDrawing is one variable: the star replaces the heart. Keeping a drawing with every entry needs somewhere that holds many, such as a table (the Data apps course does this next).

:::


:::typical

## Make it yours: Clear and Undo


**A Clear button.** Add a Button *ClearButton* (text *Clear*) under the drawing, moving Add down a little, and an event: **ClearButton is clicked** → **Clear Drawing**.

**An Undo button.** Add *UndoButton* (text *Undo*) beside it: **UndoButton is clicked** → **Undo the last line on Drawing**.

Want more? **Set pen colour** on Describe's start, with a different colour for each value (an If on Chosen).

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**A Clear button:**

```maths
{"version":1,"name":"Values journal (drawings)","features":{"level":3},"variables":[{"name":"Chosen","value":""},{"name":"LastDrawing","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Kindness\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Courage\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Honesty\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Respect\""},{"type":"goToScreen","screen":"describe"}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":530,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]},{"name":"Drawing","kind":"drawing","instanceVars":[],"instances":[{"id":"dd1","x":229,"y":184,"w":342,"h":280,"text":"","visible":true,"vars":{},"color":"#222222","pen":4,"background":""}]},{"name":"ClearButton","kind":"button","instanceVars":[],"instances":[{"id":"dc1","x":229,"y":472,"w":165,"h":44,"text":"Clear","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""},{"type":"clearDrawing","target":"Drawing"}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"setVar","var":"LastDrawing","value":"Drawing.picture"},{"type":"goToScreen","screen":"journal"}],"children":[]},{"id":"dc2","else":false,"conds":[{"type":"onClicked","target":"ClearButton"}],"actions":[{"type":"clearDrawing","target":"Drawing"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":210,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"LastImage","kind":"image","instanceVars":[],"instances":[{"id":"jl1","x":335,"y":335,"w":130,"h":130,"text":"","visible":true,"vars":{},"image":"star"}]},{"name":"AnotherButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"},{"type":"setImageFrom","target":"LastImage","value":"LastDrawing"}],"children":[]},{"id":"jj2","else":false,"conds":[{"type":"onClicked","target":"AnotherButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}],"device":"web"}
```

**An Undo button:**

```maths
{"version":1,"name":"Values journal (drawings)","features":{"level":3},"variables":[{"name":"Chosen","value":""},{"name":"LastDrawing","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Kindness\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Courage\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Honesty\""},{"type":"goToScreen","screen":"describe"}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"setVar","var":"Chosen","value":"\"Respect\""},{"type":"goToScreen","screen":"describe"}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":530,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]},{"name":"Drawing","kind":"drawing","instanceVars":[],"instances":[{"id":"dd1","x":229,"y":184,"w":342,"h":280,"text":"","visible":true,"vars":{},"color":"#222222","pen":4,"background":""}]},{"name":"ClearButton","kind":"button","instanceVars":[],"instances":[{"id":"dc1","x":229,"y":472,"w":165,"h":44,"text":"Clear","visible":true,"vars":{}}]},{"name":"UndoButton","kind":"button","instanceVars":[],"instances":[{"id":"du1","x":406,"y":472,"w":165,"h":44,"text":"Undo","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""},{"type":"clearDrawing","target":"Drawing"}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"setVar","var":"LastDrawing","value":"Drawing.picture"},{"type":"goToScreen","screen":"journal"}],"children":[]},{"id":"dc2","else":false,"conds":[{"type":"onClicked","target":"ClearButton"}],"actions":[{"type":"clearDrawing","target":"Drawing"}],"children":[]},{"id":"du2","else":false,"conds":[{"type":"onClicked","target":"UndoButton"}],"actions":[{"type":"undoDrawing","target":"Drawing"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":210,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"LastImage","kind":"image","instanceVars":[],"instances":[{"id":"jl1","x":335,"y":335,"w":130,"h":130,"text":"","visible":true,"vars":{},"image":"star"}]},{"name":"AnotherButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"},{"type":"setImageFrom","target":"LastImage","value":"LastDrawing"}],"children":[]},{"id":"jj2","else":false,"conds":[{"type":"onClicked","target":"AnotherButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**Your app keeps a photo when a Take photo button is clicked, then clears the photo for next time. Which should come first, and why?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Keep the photo first (set the variable to Photo.picture), then clear. Actions run top to bottom; clearing first would keep an empty picture.

:::

