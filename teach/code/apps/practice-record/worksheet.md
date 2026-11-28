---
title: "Record your practice"
subtitle: "App Builder apps · Pictures from the user · Lesson 8"
---

# Record your practice

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Musicians record themselves because you hear things on a recording you miss while playing. Voice notes, language apps and podcasts all start with the same three parts: record, keep, play back.


:::teacher-note

**In one sentence:** Students add a recorder to the practice tracker: a Recorder (microphone allowed), a hidden Sound that gets the recording in Mic finishes a recording and is then shown, and a line with the recording's length. Nib sets the Sound from Mic.sound when the screen starts, before anything is recorded, so it never plays. Make it yours plays the recording as soon as it's ready.

**Students should be able to say:** I can add a Recorder and use the recording it makes. I can use something the user makes in the event that runs when it's ready. I can play a recording back with a Sound and show how long it was.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

1. Click **●** and allow the microphone when the browser asks. Play, hum or clap for a few seconds, then click **■**.
2. A player appears with your recording, and the app says how long it was. Press **▶**.
3. Drag the two handles under the recorder to trim the start and end, then play it again.

No microphone, or it's blocked here? Click **🎵 Choose** on the recorder and pick a sound file from your computer: the app treats it just like a recording.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: when does the recording exist?


:::keep-together

### Nib's playback

**Nib's Playback never plays the recording, even after recording. Click the line where Nib first goes wrong.**

```
 1  Nib adds a Recorder, Mic, and a Sound, Playback, and allows the microphone.
 2  On start of screen: Set Playback sound to the one named Mic.sound, and Show Playback.
 3  Nib runs the app, clicks ● and records 5 seconds, then clicks ■.
 4  Nib presses ▶ on Playback. Nothing plays.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: On start of screen runs once, when the app starts, before anything has been recorded. Mic.sound is empty then, and nothing sets Playback again. Use the recording in Mic finishes a recording, when it exists.

:::


:::keep-together

### Trimming

**You record 10 seconds, then drag the handles to keep only seconds 2 to 5. What changes?**

☐ Mic.length changes to 3

☐ Nothing until a Set action runs

☐ It cuts the recording to 3 seconds

☐ Only which part of it plays

:::


:::teacher-note

**Answer:** Only which part of it plays

Trimming only changes which part plays; the whole recording is kept, so you can drag the handles back out and hear it all again.

:::


:::typical

## Make it yours: play it straight away

Play the recording back automatically: add **Playback**, **Play Playback** at the end of **Mic finishes a recording**.

More ideas: add the recording's length to the minutes practised, or a message when a recording is under 3 seconds ("Try a longer one").

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Practice tracker (recording)","features":{"level":3},"variables":[{"name":"Minutes","value":0}],"screens":[{"id":"main","name":"Tracker","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"t1","x":229,"y":40,"w":342,"h":36,"text":"Practice tracker","visible":true,"vars":{}}]},{"name":"MinutesInput","kind":"input","instanceVars":[],"instances":[{"id":"t2","x":229,"y":100,"w":200,"h":42,"text":"","visible":true,"vars":{}}]},{"name":"SaveButton","kind":"button","instanceVars":[],"instances":[{"id":"t3","x":441,"y":98,"w":130,"h":46,"text":"Save","visible":true,"vars":{}}]},{"name":"TotalText","kind":"text","instanceVars":[],"instances":[{"id":"t4","x":229,"y":170,"w":342,"h":32,"text":"You've practised 0 minutes","visible":true,"vars":{}}]},{"name":"Mic","kind":"recorder","instanceVars":[],"instances":[{"id":"mic1","x":229,"y":230,"w":342,"h":104,"text":"","visible":true,"vars":{}}]},{"name":"Playback","kind":"sound","instanceVars":[],"instances":[{"id":"pb1","x":229,"y":350,"w":342,"h":52,"text":"","visible":false,"vars":{},"sound":"calm"}]},{"name":"LengthText","kind":"text","instanceVars":[],"instances":[{"id":"lt1","x":229,"y":412,"w":342,"h":30,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"p1","else":false,"conds":[{"type":"onClicked","target":"SaveButton"}],"actions":[{"type":"addTo","value":"int(MinutesInput.text)","var":"Minutes"},{"type":"setText","target":"TotalText","value":"\"You've practised \" & Minutes & \" minutes\""}],"children":[]},{"id":"rec1","else":false,"conds":[{"type":"onRecorded","target":"Mic"}],"actions":[{"type":"setSoundNamed","target":"Playback","name":"Mic.sound"},{"type":"setVisible","target":"Playback","visible":"show"},{"type":"setText","target":"LengthText","value":"\"Recorded \" & round(Mic.length) & \" seconds\""},{"type":"playSound","target":"Playback"}],"children":[]}]}],"device":"web","allowMic":true}
```

:::

:::


## Exit ticket

:::keep-together

**A language app records you saying a word, then plays it back next to the teacher's version. Where does it set up your recording to play, and why there?**

{{lines-3}}

:::


:::teacher-note

**Answer:** In the event that runs when recording finishes, because the recording doesn't exist before then.

:::

