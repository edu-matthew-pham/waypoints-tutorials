---
title: "Tidy up the journal"
subtitle: "App Builder apps · Tidy up · Lesson 10"
---

# Tidy up the journal

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Real apps get changed for years. When the same few actions are copied in five places, a change means five edits, and missing one is a bug. Tidying them into one place is called refactoring.


:::teacher-note

**In one sentence:** Students refactor the values journal: they change how it's built without changing what it does. Four near-identical button events become one function, Pick(value), that each button calls with its own value; then a Home event written on two screens becomes one All screens event. A journey run before and after is the test that nothing changed. They hand in by sharing a link.

**Students should be able to say:** I can spot repetition in my events and say what's the same and what's different. I can make a function with a parameter and call it from several events. I can use one All screens event in place of the same event on several screens. I can check that a change didn't break anything by running the same test before and after.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Run it and write it down

This is the finished values journal, open on the **Run** tab. Do this journey and write down what you see at the end:

1. On Choose, click **Courage**.
2. Type *I asked a question in class* and click **Add to my journal**.
3. On the Journal screen, write down the entry and the count exactly as they appear.

You'll do the same journey at the end. If anything is different then, the tidy-up changed what the app does.

## Spot the repetition

Open the **Choose** screen, then the **Events** tab, and read the four button events side by side.

:::keep-together

**Open the Choose screen's Events tab. The four value buttons each have an event. What is different between them?**

☐ The variable each one sets

☐ Only the value they set Chosen to

☐ The screen each one goes to next

☐ Nothing: all four are the same

:::


:::teacher-note

**Answer:** Only the value they set Chosen to

All four set Chosen and go to Describe. Only the value changes. The same part becomes the function's actions; the part that changes becomes its parameter.

:::


:::typical

## Tidy 1: one function, Pick

1. In the sidebar, under **Functions**, click **+ Function** and name it *Pick*.
2. Click **+ Parameter** and call it *value*. Inside the function, *value* is whatever the call gives it.
3. Add the function's actions: **Variables**, **Set variable Chosen to** `value` (no quote marks: it's the parameter's name, not the word "value"), then **Screen**, **Go to screen** Describe.
4. Open the **Choose** screen's events. In **KindnessButton is clicked**, delete both actions and add **Functions**, **Call Pick** with value `"Kindness"`.
5. Do the same for the other three buttons, each with its own value.
6. Run it and click each button. Does each one still go to Describe with the right question?

Now, if every value should also play a sound, that's one change in Pick, not four.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Values journal (tidy)","features":{"level":4},"variables":[{"name":"Chosen","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Kindness\""}}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Courage\""}}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Honesty\""}}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Respect\""}}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":184,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"goToScreen","screen":"journal"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":360,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"AnotherButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"}],"children":[]},{"id":"jj2","else":false,"conds":[{"type":"onClicked","target":"AnotherButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}],"device":"web","functions":[{"id":"fpick","name":"Pick","params":["value"],"events":[{"id":"fp1","else":false,"conds":[],"actions":[{"type":"setVar","var":"Chosen","value":"value"},{"type":"goToScreen","screen":"describe"}],"children":[]}]}]}
```

:::

:::


## Find Nib's slip


:::keep-together

**After Nib's tidy-up, clicking a value does nothing you can see. Click the line where Nib first goes wrong.**

```
 1  Nib makes a function, Pick(value).
 2  Pick's only action is Set variable Chosen to value.
 3  Each value button's event is now just Call Pick with its value, such as "Courage".
 4  Nib runs the app and clicks Courage. The app stays on the Choose screen.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Pick only sets Chosen. The old events also went to Describe, and that action didn't make it into the function, so the app quietly stays on Choose. A refactor must keep everything the old events did.

:::


:::typical

## Tidy 2: one Home event for every screen


**Add Home the old way.** The Describe screen has no way back. Add one the way you know:

1. Open the **Describe** screen and add a **Button** called *HomeButton*, with the text *Home*.
2. On Describe's Events tab: **HomeButton is clicked** → **Go to screen** Choose.

Now look at the Journal screen's events too. **AnotherButton is clicked** → **Go to screen** Choose. That's the same job, written out a second time.

**Tidy them into one.** 1. On the Journal screen, rename *AnotherButton* to *HomeButton*. Keep its text as *Add another*: the name is for the events, the text is for the user.
2. Click **All screens** in the sidebar and add one event: **HomeButton is clicked** → **Go to screen** Choose.
3. Delete the Home events on Describe and on Journal. The All screens event does both jobs now.
4. Open the **Map** tab. The arrows back to Choose now come from one event.

An All screens event runs on every screen. On a screen with no HomeButton, such as Choose, it just never happens.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**Add Home the old way:**

```maths
{"version":1,"name":"Values journal (tidy)","features":{"level":4},"variables":[{"name":"Chosen","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Kindness\""}}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Courage\""}}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Honesty\""}}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Respect\""}}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":184,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]},{"name":"HomeButton","kind":"button","instanceVars":[],"instances":[{"id":"dh1","x":229,"y":490,"w":342,"h":48,"text":"Home","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"goToScreen","screen":"journal"}],"children":[]},{"id":"dh2","else":false,"conds":[{"type":"onClicked","target":"HomeButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":360,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"AnotherButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"}],"children":[]},{"id":"jj2","else":false,"conds":[{"type":"onClicked","target":"AnotherButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}],"device":"web","functions":[{"id":"fpick","name":"Pick","params":["value"],"events":[{"id":"fp1","else":false,"conds":[],"actions":[{"type":"setVar","var":"Chosen","value":"value"},{"type":"goToScreen","screen":"describe"}],"children":[]}]}]}
```

**Tidy them into one:**

```maths
{"version":1,"name":"Values journal (tidy)","features":{"level":4},"variables":[{"name":"Chosen","value":""},{"name":"Journal","value":[]}],"screens":[{"id":"choose","name":"Choose","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"j1","x":229,"y":30,"w":342,"h":36,"text":"Values journal","visible":true,"vars":{}}]},{"name":"Prompt","kind":"text","instanceVars":[],"instances":[{"id":"j2","x":229,"y":74,"w":342,"h":40,"text":"Which value did you show today?","visible":true,"vars":{}}]},{"name":"KindnessPicture","kind":"image","instanceVars":[],"instances":[{"id":"v0p","x":263,"y":140,"w":100,"h":100,"text":"Kindness","visible":true,"vars":{},"image":"heart"}]},{"name":"KindnessButton","kind":"button","instanceVars":[],"instances":[{"id":"v0b","x":229,"y":250,"w":165,"h":46,"text":"Kindness","visible":true,"vars":{}}]},{"name":"CouragePicture","kind":"image","instanceVars":[],"instances":[{"id":"v1p","x":440,"y":140,"w":100,"h":100,"text":"Courage","visible":true,"vars":{},"image":"star"}]},{"name":"CourageButton","kind":"button","instanceVars":[],"instances":[{"id":"v1b","x":406,"y":250,"w":165,"h":46,"text":"Courage","visible":true,"vars":{}}]},{"name":"HonestyPicture","kind":"image","instanceVars":[],"instances":[{"id":"v2p","x":263,"y":340,"w":100,"h":100,"text":"Honesty","visible":true,"vars":{},"image":"tick"}]},{"name":"HonestyButton","kind":"button","instanceVars":[],"instances":[{"id":"v2b","x":229,"y":450,"w":165,"h":46,"text":"Honesty","visible":true,"vars":{}}]},{"name":"RespectPicture","kind":"image","instanceVars":[],"instances":[{"id":"v3p","x":440,"y":340,"w":100,"h":100,"text":"Respect","visible":true,"vars":{},"image":"smile"}]},{"name":"RespectButton","kind":"button","instanceVars":[],"instances":[{"id":"v3b","x":406,"y":450,"w":165,"h":46,"text":"Respect","visible":true,"vars":{}}]}],"events":[{"id":"jv0","else":false,"conds":[{"type":"onClicked","target":"KindnessButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Kindness\""}}],"children":[]},{"id":"jv1","else":false,"conds":[{"type":"onClicked","target":"CourageButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Courage\""}}],"children":[]},{"id":"jv2","else":false,"conds":[{"type":"onClicked","target":"HonestyButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Honesty\""}}],"children":[]},{"id":"jv3","else":false,"conds":[{"type":"onClicked","target":"RespectButton"}],"actions":[{"type":"callFunction","fn":"Pick","args":{"value":"\"Respect\""}}],"children":[]}]},{"id":"describe","name":"Describe","objects":[{"name":"Question","kind":"text","instanceVars":[],"instances":[{"id":"j3","x":229,"y":40,"w":342,"h":64,"text":"","visible":true,"vars":{}}]},{"name":"NoteInput","kind":"input","instanceVars":[],"instances":[{"id":"j4","x":229,"y":120,"w":342,"h":46,"text":"","visible":true,"vars":{}}]},{"name":"AddButton","kind":"button","instanceVars":[],"instances":[{"id":"j5","x":229,"y":184,"w":342,"h":48,"text":"Add to my journal","visible":true,"vars":{}}]},{"name":"HomeButton","kind":"button","instanceVars":[],"instances":[{"id":"dh1","x":229,"y":490,"w":342,"h":48,"text":"Home","visible":true,"vars":{}}]}],"events":[{"id":"jd1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Question","value":"\"What did you do to show \" & Chosen & \"?\""}],"children":[]},{"id":"jd2","else":false,"conds":[{"type":"onClicked","target":"AddButton"}],"actions":[{"type":"listAdd","value":"uppercase(Chosen) & \": \" & NoteInput.text","list":"Journal"},{"type":"goToScreen","screen":"journal"}],"children":[]}]},{"id":"journal","name":"Journal","objects":[{"name":"Heading","kind":"text","instanceVars":[],"instances":[{"id":"j6","x":229,"y":30,"w":342,"h":36,"text":"My values in action","visible":true,"vars":{}}]},{"name":"Count","kind":"text","instanceVars":[],"instances":[{"id":"j7","x":229,"y":72,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"List","kind":"list","instanceVars":[],"instances":[{"id":"j8","x":229,"y":110,"w":342,"h":360,"text":"","visible":true,"vars":{},"source":"Journal"}]},{"name":"HomeButton","kind":"button","instanceVars":[],"instances":[{"id":"j9","x":229,"y":490,"w":342,"h":48,"text":"Add another","visible":true,"vars":{}}]}],"events":[{"id":"jj1","else":false,"conds":[{"type":"onStart"}],"actions":[{"type":"setText","target":"Count","value":"\"Entries: \" & count(Journal)"}],"children":[]}]}],"device":"web","functions":[{"id":"fpick","name":"Pick","params":["value"],"events":[{"id":"fp1","else":false,"conds":[],"actions":[{"type":"setVar","var":"Chosen","value":"value"},{"type":"goToScreen","screen":"describe"}],"children":[]}]}],"allScreens":{"events":[{"id":"ah1","else":false,"conds":[{"type":"onClicked","target":"HomeButton"}],"actions":[{"type":"goToScreen","screen":"choose"}],"children":[]}]}}
```

:::

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}


:::typical

## Hand it in

1. Click **Share** at the top of App Builder and copy the link.
2. Send it to your teacher the way your class usually hands work in. The link opens your app ready to run, with **Open a copy in App Builder** if they want to look inside.

If your teacher would rather have a file, **Save** at the top, then **Save to this computer…**, keeps a copy to upload instead.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**A quiz app has five answer buttons. Each one's event adds 1 to Score, plays a sound and goes to the next question. How could you tidy it, and how would you know you hadn't broken it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Make one function, such as Answer(), with those three actions, and have each button call it. Then play the same quiz before and after and check the score, sound and next question are the same.

:::

