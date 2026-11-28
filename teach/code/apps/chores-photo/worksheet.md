---
title: "Show it's done: photos"
subtitle: "App Builder apps · Pictures from the user · Lesson 7"
---

# Show it's done: photos

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Apps ask for proof all the time: a photo of the parcel at the door, the receipt, the finished job. The app has to know which job each photo belongs to.


:::teacher-note

**In one sentence:** Students give the chores checklist a photo per chore. A Photo object (camera allowed, or Choose a photo), a variable ForChore set when a chore's tick box is switched on, and one event, A photo is taken with Camera, whose sub-events check ForChore and show the photo beside the right chore. Nib's photo event skips the check, so every photo lands beside the bed.

**Students should be able to say:** I can add a Photo and use the picture it takes or the one the user chooses. I can use a variable to remember something between two events. I can check that variable in sub-events, so one event does the right thing for each case.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

1. Tick **Make my bed**.
2. Click **🖼 Choose a photo** and pick any photo on your computer, or tap the camera to start it and press the round button.
3. The photo appears beside *Make my bed*. Now tick another chore and add another photo.

No camera, or your school blocks it? **Choose a photo** works everywhere.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: which chore gets it?


:::keep-together

### Tick, untick, photo

**You tick Do my homework, then untick it, then choose a photo. Where does the photo go?**

☐ Nowhere: nothing is ticked

☐ Beside Do my homework

☐ Beside every chore

☐ Beside Make my bed

:::


:::teacher-note

**Answer:** Beside Do my homework

Unticking doesn't change ForChore, so it still says "Homework" and the photo goes there. (Make it yours fixes that.)

:::


:::keep-together

### Nib's photos

**Every photo Nib adds appears beside Make my bed, whichever chore was ticked. Click the line where Nib goes wrong.**

```
 1  BedJob is switched, and BedJob is on: Set variable ForChore to "Bed" (the same for Feed and Homework).
 2  A photo is taken with Camera: this event runs for every photo.
 3  In it: Set BedPic picture to the one in Camera.picture, then Show BedPic.
 4  Nib ticks Feed the dog and chooses a photo.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: Nib's photo event sets BedPic every time, without checking ForChore. The sub-events with ForChore = "Bed", "Feed" and "Homework" are what send each photo to its own chore.

:::


:::typical

## Make it yours: untick hides the photo

When a chore is unticked, its photo should go too. Select each *is on* sub-event, choose **⋯**, **Add an Else below** (it runs when the chore is unticked), and give it **Hide BedPic** (or FeedPic, HomeworkPic). A new photo shows it again.

More ideas: a **Take a photo** button of your own (untick *Show a take-photo button* on the Photo, then **Take a photo with Camera** in your button's event, with what comes next in that same event), or set ForChore back to `""` when unticking, so a photo with nothing ticked goes nowhere.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Daily chores (photos)","features":{"level":3},"variables":[{"name":"ForChore","value":""}],"screens":[{"id":"main","name":"Chores","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"title","x":229,"y":40,"w":342,"h":36,"text":"My jobs today","visible":true,"vars":{}}]},{"name":"Card","kind":"shape","instanceVars":[],"instances":[{"id":"card","x":213,"y":96,"w":374,"h":168,"text":"","visible":true,"vars":{},"color":"#f1f4f9"}]},{"name":"BedJob","kind":"toggle","instanceVars":[],"instances":[{"id":"bedjob","x":229,"y":108,"w":250,"h":40,"text":"Make my bed","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"BedPic","kind":"image","instanceVars":[],"instances":[{"id":"bedp1","x":525,"y":106,"w":44,"h":44,"text":"","visible":false,"vars":{},"image":""}]},{"name":"FeedJob","kind":"toggle","instanceVars":[],"instances":[{"id":"feedjob","x":229,"y":160,"w":250,"h":40,"text":"Feed the dog","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"FeedPic","kind":"image","instanceVars":[],"instances":[{"id":"feedp1","x":525,"y":158,"w":44,"h":44,"text":"","visible":false,"vars":{},"image":""}]},{"name":"HomeworkJob","kind":"toggle","instanceVars":[],"instances":[{"id":"homeworkjob","x":229,"y":212,"w":250,"h":40,"text":"Do my homework","visible":true,"vars":{},"on":false,"look":"tick"}]},{"name":"HomeworkPic","kind":"image","instanceVars":[],"instances":[{"id":"homeworkp1","x":525,"y":210,"w":44,"h":44,"text":"","visible":false,"vars":{},"image":""}]},{"name":"ModeButton","kind":"button","instanceVars":[],"instances":[{"id":"modebutton","x":229,"y":312,"w":160,"h":46,"text":"🌙 Dark","visible":true,"vars":{}}]},{"name":"Camera","kind":"photo","instanceVars":[],"instances":[{"id":"cam1","x":229,"y":372,"w":293,"h":220,"text":"","visible":true,"vars":{},"shutter":true}]}],"events":[{"id":"m1","else":false,"conds":[{"type":"onClicked","target":"ModeButton"}],"actions":[],"children":[{"id":"m1a","else":false,"conds":[{"type":"compareVar","var":"Dark","op":"=","value":"false"}],"actions":[{"type":"setVar","var":"Dark","value":"true"},{"type":"setBackground","value":"\"#1c2333\""},{"type":"setColour","target":"Title","value":"\"white\""},{"type":"setText","target":"ModeButton","value":"\"☀️ Light\""}],"children":[]},{"id":"m1e","else":true,"conds":[],"actions":[{"type":"setVar","var":"Dark","value":"false"},{"type":"setBackground","value":"\"white\""},{"type":"setColour","target":"Title","value":"\"black\""},{"type":"setText","target":"ModeButton","value":"\"🌙 Dark\""}],"children":[]}]},{"id":"BedJob","else":false,"conds":[{"type":"onToggled","target":"BedJob"}],"actions":[],"children":[{"id":"BedJoba","else":false,"conds":[{"type":"isOn","target":"BedJob","state":"on"}],"actions":[{"type":"setVar","var":"ForChore","value":"\"Bed\""}],"children":[]},{"id":"BedJobe","else":true,"conds":[],"actions":[{"type":"setVisible","target":"BedPic","visible":"hide"}],"children":[]}]},{"id":"FeedJob","else":false,"conds":[{"type":"onToggled","target":"FeedJob"}],"actions":[],"children":[{"id":"FeedJoba","else":false,"conds":[{"type":"isOn","target":"FeedJob","state":"on"}],"actions":[{"type":"setVar","var":"ForChore","value":"\"Feed\""}],"children":[]},{"id":"FeedJobe","else":true,"conds":[],"actions":[{"type":"setVisible","target":"FeedPic","visible":"hide"}],"children":[]}]},{"id":"HomeworkJob","else":false,"conds":[{"type":"onToggled","target":"HomeworkJob"}],"actions":[],"children":[{"id":"HomeworkJoba","else":false,"conds":[{"type":"isOn","target":"HomeworkJob","state":"on"}],"actions":[{"type":"setVar","var":"ForChore","value":"\"Homework\""}],"children":[]},{"id":"HomeworkJobe","else":true,"conds":[],"actions":[{"type":"setVisible","target":"HomeworkPic","visible":"hide"}],"children":[]}]},{"id":"phe","else":false,"conds":[{"type":"onPhotoTaken","target":"Camera"}],"actions":[],"children":[{"id":"ph0","else":false,"conds":[{"type":"compareVar","var":"ForChore","op":"=","value":"\"Bed\""}],"actions":[{"type":"setImageFrom","target":"BedPic","value":"Camera.picture"},{"type":"setVisible","target":"BedPic","visible":"show"}],"children":[]},{"id":"ph1","else":false,"conds":[{"type":"compareVar","var":"ForChore","op":"=","value":"\"Feed\""}],"actions":[{"type":"setImageFrom","target":"FeedPic","value":"Camera.picture"},{"type":"setVisible","target":"FeedPic","visible":"show"}],"children":[]},{"id":"ph2","else":false,"conds":[{"type":"compareVar","var":"ForChore","op":"=","value":"\"Homework\""}],"actions":[{"type":"setImageFrom","target":"HomeworkPic","value":"Camera.picture"},{"type":"setVisible","target":"HomeworkPic","visible":"show"}],"children":[]}]}]}],"device":"web","allowCamera":true}
```

:::

:::


## Exit ticket

:::keep-together

**A parcel app takes a photo for whichever parcel was tapped last. What does the app need to remember, and where does it check it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A variable with the tapped parcel (set when it's tapped), checked in the photo event's sub-events so the photo goes with the right parcel.

:::

