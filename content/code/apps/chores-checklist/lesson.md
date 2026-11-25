---
order: 2
unit: respond
title: A chores checklist
summary: "Build a checklist where clicking a box ticks it, and clicking again unticks it. Two separate events with the same trigger both run on one click and undo each other, so the toggle is one event with a sub-event and an Else: one trigger, two branches, and only one branch runs."
language: maths
shape: build
hook: "A tick box looks like the simplest thing on a screen. Making one that turns on and off shows how apps choose between two things to do."
pacing: { keyDelayMs: 40, cursorMs: 500, afterActionMs: 300, postRollMs: 1200 }
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8752
  url: http://127.0.0.1:8752/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
explainClip:
  query: { code: "@app.json#done", tab: run, id: explain }
  caption: "One trigger, two branches"
  say: "One click, one event, and exactly one of its two branches runs."
  clip:
    - caption: { text: "One event for the click, with a sub-event and an Else.", say: "One event for the click, with a sub-event and an Else." }
    - wait: 800
    - click: { selector: ".view-run [data-ab='widget:BedBox']" }
    - caption: { text: "The box was empty, so the first branch ticks it.", say: "The box was empty, so the first branch ticks it." }
    - wait: 1000
    - click: { selector: ".view-run [data-ab='widget:BedBox']" }
    - caption: { text: "Now it's ticked, so Else runs and unticks it.", say: "Now it's ticked, so the Else runs and unticks it." }
    - wait: 1000
    - click: { selector: ".view-run [data-ab='widget:HomeworkBox']" }
    - expect: { selector: ".view-run [data-ab='widget:HomeworkBox']", contains: "✅" }
    - caption: { text: "Each click, exactly one branch runs.", say: "Each click, exactly one branch runs." }
    - wait: 1400
---
Today's prototype is a list of jobs, each with a box beside it. Click the box and it shows a tick. Click again and the tick goes.

A **Button** can be the box: its text is just an empty-box character, ⬜, and an event changes it to a tick, ✅.

![The chores checklist: a title "My jobs today" and three jobs, each with a box beside it. Two are ticked.](app.svg)

## Try the finished app

```step
stage: info
insight: "Using the working app first gives students the goal before anything is taken apart: every later step builds back towards it."
try: { playground: appbuilder, starter: "app.json#done", tab: run, level: 2, height: 600 }
check: { type: reflect, text: "I ticked and unticked each box, and saw which events lit up." }
```

This is the checklist you'll build, open on the **Run** tab. Click each box a few times: it ticks, then unticks. The event list beside the app lights up each time an event runs.

## Build 1: a tick that stays on

```step
stage: run
app: true
query: { code: "@app.json#start", level: 2, id: build-1 }
caption: "Click to tick"
clip:
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "When BedBox is clicked, set its text to a tick.", say: "When BedBox is clicked, set its text to a tick." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:BedBox']" }
  - click: { selector: "[data-ab='entry:onClicked']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:BedBox']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"✅\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - wait: 600
  - click: { selector: ".view-events .preview-col [data-ab='widget:BedBox']" }
  - expect: { selector: ".view-events .preview-col [data-ab='widget:BedBox']", contains: "✅" }
  - wait: 800
insight: "A tick that can't be undone is the first working piece, and it shows the next problem: clicking again should untick."
try: { playground: appbuilder, starter: "app.json#start", keep: build, level: 2, height: 640 }
check:
  type: code
  text: "BedBox is clicked sets BedBox's text to ✅."
  rules: { event: [["when BedBox is clicked", "Set BedBox text to \"✅\""]] }
```

The screen is made for you: a title, three jobs, and a box (a Button) called *BedBox*, *FeedBox* and *HomeworkBox* beside each one. Change the jobs to your own if you like.

1. On the **Events** tab, choose **+ Add event**, **+ Condition**, **BedBox**, **BedBox is clicked**.
2. Add the action **BedBox**, **Set BedBox text to …**, and type `"✅"` (copy it from here).
3. Click the box in the preview. It ticks. Click again: it stays ticked.

## Build 2: two events (and why they cancel)

```step
stage: run
app: true
query: { code: "@app.json#flat", tab: run, level: 2, id: build-2 }
caption: "Both events run"
clip:
  - caption: { text: "Two events: tick if empty, untick if ticked. Click once…", say: "Two events. Tick if it's empty, untick if it's ticked. Click once." }
  - click: { selector: ".view-run [data-ab='widget:BedBox']" }
  - expect: { selector: ".view-run [data-ab='widget:BedBox']", contains: "⬜" }
  - caption: { text: "Both ran, top to bottom: tick, then straight back.", say: "Both ran, top to bottom. Tick, then straight back." }
  - wait: 900
insight: "Building the obvious fix and watching it fail is the lesson's surprise: on one click, every event whose conditions are true runs."
try: { playground: appbuilder, starter: "app.json#sol-step-2", keep: build, level: 2, height: 640 }
check:
  type: code
  text: "Two separate events for BedBox: one checks for ⬜ and ticks, one checks for ✅ and unticks."
  rules: { event: [["when BedBox is clicked and when BedBox text = \"⬜\"", "Set BedBox text to \"✅\""], ["when BedBox is clicked and when BedBox text = \"✅\"", "Set BedBox text to \"⬜\""]] }
```

1. Click the event to select it, choose **+ Condition**, **BedBox**, **BedBox text … …**, and type `"⬜"`.
2. Add a second event the same way, but checking for `"✅"` and setting the text to `"⬜"`.
3. Click the box in the preview. Nothing seems to happen. Watch the events beside the preview: both light up on the one click. The first ticks the box, then the second sees the tick and takes it away.

## Build 3: a sub-event

```step
stage: run
app: true
query: { code: "@app.json#click-only", level: 2, id: build-3 }
caption: "Tick it only if it's empty"
clip:
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "One click event, nothing in it yet. It needs two branches.", say: "One click event, with nothing in it yet. It needs two branches." }
  - wait: 800
  - caption: { text: "Select the event, then ⋯, Add a sub-event.", say: "Select the event, then the three dots, then Add a sub-event." }
  - click: { selector: ".view-events .ev-acts >> nth=0" }
  - click: { selector: ".view-events .ev.sel [data-ab='event-menu']" }
  - click: { selector: "[data-ab='menu:add-a-sub-event']" }
  - caption: { text: "The sub-event checks the text: BedBox text = \"⬜\".", say: "The sub-event checks the text. Is the box empty?" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:BedBox']" }
  - click: { selector: "[data-ab='entry:compareText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"⬜\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:BedBox']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"✅\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "✅" }
  - wait: 800
insight: "A sub-event runs only when its own condition is true, inside the one click event."
try: { playground: appbuilder, starter: "app.json#sol-step-3", keep: build, level: 2, height: 640 }
check:
  type: code
  text: "One BedBox click event with a sub-event: if the text is ⬜, set it to ✅. The two flat events are gone."
  rules: { event: [["when BedBox is clicked > when BedBox text = \"⬜\"", "Set BedBox text to \"✅\""]], lacks: ["when BedBox is clicked and when BedBox text"] }
```

1. Delete both events: click each, then **⋯**, **Delete this event**.
2. Add one event: **BedBox is clicked**, with no other condition and no action.
3. With it selected, choose **⋯**, **Add a sub-event**.
4. Give the sub-event the condition **BedBox text … …** `"⬜"` and the action **Set BedBox text to** `"✅"`.

## Build 4: an Else

```step
stage: run
app: true
query: { code: "@app.json#sol-step-4", level: 2, id: build-4 }
caption: "Otherwise, untick it"
clip:
  - click: { selector: "[data-ab='tab:events']" }
  - click: { selector: ".view-events [data-ab='item:compareText'] >> nth=0" }
  - click: { selector: "dialog[open] [data-ab='cancel']" }
  - caption: { text: "Then ⋯, Add an Else below: it sets the text back to ⬜.", say: "Then the three dots, Add an Else below. It sets the empty box back." }
  - click: { selector: ".view-events .ev.sel [data-ab='event-menu']" }
  - click: { selector: "[data-ab='menu:add-an-else-below']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:BedBox']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"⬜\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Else" }
  - caption: { text: "One trigger, two branches: only one runs on each click.", say: "One trigger, two branches. Only one runs on each click." }
  - wait: 900
insight: "One trigger with a sub-event and an Else: exactly one branch runs on each click."
try: { playground: appbuilder, starter: "app.json#sol-step-4", keep: build, level: 2, height: 640 }
check:
  type: code
  text: "Each box has one click event with a sub-event (text = ⬜, tick it) and an Else (untick it), and the two flat events are gone."
  rules: { event: [["when BedBox is clicked > when BedBox text = \"⬜\"", "Set BedBox text to \"✅\""], ["when BedBox is clicked > else", "Set BedBox text to \"⬜\""], ["when FeedBox is clicked > when FeedBox text = \"⬜\"", "Set FeedBox text to \"✅\""], ["when FeedBox is clicked > else", "Set FeedBox text to \"⬜\""], ["when HomeworkBox is clicked > when HomeworkBox text = \"⬜\"", "Set HomeworkBox text to \"✅\""], ["when HomeworkBox is clicked > else", "Set HomeworkBox text to \"⬜\""]], lacks: ["when BedBox is clicked and when BedBox text"] }
```

1. With the sub-event selected, choose **⋯**, **Add an Else below**.
2. Give the Else the action **Set BedBox text to** `"⬜"`.
3. Click to tick, click again to untick. Then do the same for the other boxes.

Your event should look like this:

| When (condition) | Do (actions) |
|---|---|
| ⚡ BedBox is clicked | |
| ↳ BedBox text = "⬜" | Set BedBox text to "✅" |
| ↳ Else | Set BedBox text to "⬜" |

## Check: which branch runs?

```step
stage: investigate
insight: "Tracing which branch runs, and finding Nib's two flat events, both test the move: one trigger, then exactly one of the two branches."
tasks:
  - check:
      type: question
      q: "With the sub-event and Else, the box shows ✅. You click it once. What happens?"
      options: ["The Else runs, so it shows ⬜", "The sub-event runs, so it stays ✅", "Both run, so it shows ⬜ then ✅", "Neither runs, because ✅ isn't ⬜"]
      answer: 0
      feedback: [null, "The sub-event only runs if the text is ⬜. It isn't.", "Else only runs when the condition above it was false. Only one of them can run.", "When the sub-event's condition is false, that's exactly when Else runs."]
      explain: "The click triggers the event once. Its sub-event checks for ⬜, which is false, so the Else runs instead and sets the text to ⬜. Exactly one branch runs per click."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib's box won't untick properly. Click the line where Nib first goes wrong."
      answer: 3
      fault: logic
      misconception: flat-events-cancel
      explain: "Line 3: a second separate click event also runs on the same click, straight after the first, and undoes it. The fix is one click event with a sub-event and an Else."
```

### Trace a click

### Find Nib's mistake

## Make it yours: count what's done

```step
stage: modify
insight: "Counting jobs done brings back last lesson's variable and Set text inside the two branches, then a checklist for a real person moves it to design."
try: { playground: appbuilder, starter: "app.json#sol-step-5", keep: build, level: 2, height: 640 }
tasks:
  - check:
      type: code
      text: "Done goes up in each ⬜ branch and down in each Else, and DoneText shows it."
      rules: { contains: ["variable Done = 0"], event: [["when BedBox is clicked > when BedBox text = \"⬜\"", "Add 1 to variable Done", "Set DoneText text to"], ["when BedBox is clicked > else", "Subtract 1 from variable Done", "Set DoneText text to"], ["when FeedBox is clicked > when FeedBox text = \"⬜\"", "Add 1 to variable Done"], ["when HomeworkBox is clicked > else", "Subtract 1 from variable Done"]] }
  - check: { type: reflect, text: "I made a checklist for a real person (their jobs, their words), and they used it without my help." }
```

### Count what's done

Add a variable *Done* and a Text called *DoneText*. A job is done when it gets a tick, so add 1 to Done in each ⬜ branch, and subtract 1 in each Else. Then set DoneText to `"Done: " & Done & " of 3"` in both branches.

### A checklist for someone

Make a checklist for someone you know: a packing list, a morning routine, or jobs for a club. Use their words for each job. Add a **Reset** button that unticks everything and sets Done to 0. Then watch them use it without helping. What did they expect to happen that didn't?
