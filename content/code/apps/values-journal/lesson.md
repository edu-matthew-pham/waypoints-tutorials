---
order: 5
unit: screens
title: A values journal
summary: "Build a journal app with three screens: pick a value you showed today, say what you did, then see every entry in a list. A variable carries your choice from one screen to the next, a list variable keeps the entries, and a List object shows them."
language: maths
shape: build
hook: "Almost every app has more than one screen: sign in, choose, confirm, see your list. Something has to remember what you did on the screen before."
pacing: { keyDelayMs: 40, cursorMs: 500, afterActionMs: 300, postRollMs: 1200 }
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8754
  url: http://127.0.0.1:8754/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
explainClip:
  query: { code: "@app.json#done", tab: run, id: explain }
  caption: "The choice travels with you"
  say: "A variable belongs to the whole app, so the next screen can read it."
  clip:
    - caption: { text: "Screen 1: the event sets Chosen, then goes to screen 2.", say: "On screen one, the event sets Chosen, then goes to screen two." }
    - wait: 600
    - click: { selector: ".view-run [data-ab='widget:CourageButton']" }
    - caption: { text: "Screen 2 reads Chosen, so it knows you picked Courage.", say: "Screen two reads Chosen, so it knows you picked Courage." }
    - wait: 900
    - type: { selector: ".view-run [data-ab='widget:NoteInput'] input", text: "I asked a question in class" }
    - click: { selector: ".view-run [data-ab='widget:AddButton']" }
    - expect: { selector: ".view-run [data-ab='widget:List']", contains: "COURAGE: I asked a question in class" }
    - caption: { text: "Screen 3's List shows the Journal list: one row per entry.", say: "Screen three's List shows the Journal list, one row per entry." }
    - wait: 1500
---
Today's prototype has three screens. Each screen has its own objects and its own events.

1. **Choose:** buttons for four values, such as Kindness, Courage, Honesty and Respect (or your school's own values).
2. **Describe:** "What did you do to show Courage?", a box to type in, and an *Add to my journal* button.
3. **Journal:** a list of every entry so far, and a button to add another.

![Three screens side by side: four value buttons; a question with a typing box and an Add button; and a list of entries such as "COURAGE: I asked a question in class".](app.svg)

## Try the finished app

```step
stage: info
insight: "Using the finished three-screen app first gives a target for the long build and shows the variable carrying the choice."
try: { playground: appbuilder, starter: "app.json#try", tab: run, level: 3, height: 640 }
check: { type: reflect, text: "I added two entries with different values, and watched Chosen and Journal change on the left." }
```

This is the finished app you'll build, open on the **Run** tab. On the left, beside *Chosen* and *Journal*, you can see their values now.

## Build 1: choose a value

```step
stage: run
app: true
query: { code: "@app.json#start", level: 3, id: build-1 }
caption: "Remember the choice"
clip:
  - caption: { text: "A variable for the choice, Chosen, starting empty.", say: "A variable for the choice. Chosen, starting empty." }
  - type: { selector: "[data-ab='new-variable-name']", text: "Chosen" }
  - type: { selector: "[data-ab='new-variable-value']", text: "" }
  - press: Enter
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "When CourageButton is clicked, set Chosen to \"Courage\".", say: "When CourageButton is clicked, set Chosen to Courage." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:CourageButton']" }
  - click: { selector: "[data-ab='entry:onClicked']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:Variables']" }
  - click: { selector: "[data-ab='entry:setVar']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"Courage\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Chosen" }
  - caption: { text: "Then a second action: Go to screen Describe.", say: "Then a second action. Go to screen Describe." }
  - wait: 900
insight: "A variable in the sidebar belongs to the whole app, so the choice made here can be read on the next screen."
try: { playground: appbuilder, starter: "app.json#start", keep: build, level: 3, height: 640 }
check:
  type: code
  text: "A variable Chosen, and each value button sets it and goes to the Describe screen."
  rules: { contains: ["variable Chosen ="], event: [["when KindnessButton is clicked", "Set variable Chosen to \"Kindness\"", "Go to screen Describe"], ["when CourageButton is clicked", "Set variable Chosen to \"Courage\"", "Go to screen Describe"], ["when HonestyButton is clicked", "Set variable Chosen to \"Honesty\"", "Go to screen Describe"], ["when RespectButton is clicked", "Set variable Chosen to \"Respect\"", "Go to screen Describe"]] }
```

The three screens are made for you: **Choose**, **Describe** and **Journal**. Click a screen's name in the sidebar to open it.

1. In the sidebar, add a variable *Chosen* with an empty starting value (delete the 0).
2. On the **Choose** screen's Events tab: **KindnessButton is clicked** → **Variables**, **Set variable Chosen to** `"Kindness"`, then **Screen**, **Go to screen** Describe.
3. Do the same for each value button.

## Build 2: the next screen reads it

```step
stage: run
app: true
query: { code: "@app.json#sol-step-2", level: 3, id: build-2 }
caption: "On start of screen"
clip:
  - click: { selector: "[data-ab='screen:Describe']" }
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "On the Describe screen: On start of screen, set the question.", say: "On the Describe screen. On start of screen, set the question." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:Screen']" }
  - click: { selector: "[data-ab='entry:onStart']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:Question']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"What did you do to show \" & Chosen & \"?\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Chosen" }
  - caption: { text: "Chosen still holds the value from screen 1.", say: "Chosen still holds the value from screen one." }
  - wait: 900
insight: "Seeing the chosen value appear on the next screen shows a whole-app variable keeps its value across screens."
try: { playground: appbuilder, starter: "app.json#sol-step-2", keep: build, level: 3, height: 640 }
check:
  type: code
  text: "On start of the Describe screen, the question shows Chosen."
  rules: { event: [["when On start of screen", "Set Question text to", "& Chosen &"]] }
```

1. Open the **Describe** screen. Add an event: **Screen**, **On start of screen** → **Question**, **Set Question text to** `"What did you do to show " & Chosen & "?"`
2. Open the Choose screen, then Run, and click a value. Does the question name it?

## Build 3: keep the entries

```step
stage: run
app: true
query: { code: "@app.json#walk-start", level: 3, id: build-3 }
caption: "Add to the end of a list"
clip:
  - caption: { text: "A list variable keeps many entries. Name it Journal.", say: "A list variable keeps many entries. Name it Journal." }
  - type: { selector: "[data-ab='new-list-name']", text: "Journal" }
  - press: Enter
  - click: { selector: "[data-ab='screen:Describe']" }
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "On the Describe screen: AddButton is clicked.", say: "On the Describe screen, a new event. AddButton is clicked." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:AddButton']" }
  - click: { selector: "[data-ab='entry:onClicked']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - caption: { text: "Lists, Add … to the end of list: the value and what was typed.", say: "Its action is in Lists. Add to the end of list, with what was typed." }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:Lists']" }
  - click: { selector: "[data-ab='entry:listAdd']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "uppercase(Chosen) & \": \" & NoteInput.text" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Journal" }
  - caption: { text: "Each click adds one entry at the end. Next: go to the Journal screen.", say: "Each click adds one entry at the end. Next, go to the Journal screen." }
  - wait: 900
insight: "A list variable keeps every entry, and a List object shows it, one row per entry."
try: { playground: appbuilder, starter: "app.json#sol-step-3", keep: build, level: 3, height: 640 }
check:
  type: code
  text: "A list Journal; AddButton adds an entry to it and goes to the Journal screen; the List shows Journal."
  rules: { contains: ["list Journal =", "object List (list) text \"\" shows Journal"], event: [["when AddButton is clicked", "to the end of list Journal", "Go to screen Journal"]] }
```

1. In the sidebar, under the variables, add a list called *Journal*.
2. On the Describe screen, add an event: **AddButton is clicked**.
3. Add the action **Lists**, **Add … to the end of list**, list Journal, value `uppercase(Chosen) & ": " & NoteInput.text`
4. Add a second action: **Go to screen** Journal.
5. Open the **Journal** screen, click the **List** object, and in Properties set **Shows** to Journal.

## Build 4: back to the start

```step
stage: run
insight: "Closing the loop between screens makes it a whole app a user can move through."
try: { playground: appbuilder, starter: "app.json#sol-step-4", keep: build, level: 3, height: 640 }
check:
  type: code
  text: "Add another goes back to the Choose screen."
  rules: { event: [["when AnotherButton is clicked", "Go to screen Choose"]] }
```

1. On the Journal screen: **AnotherButton is clicked** → **Go to screen** Choose.
2. Open the Choose screen, then Run, and add three entries.

## Check: lists and loops

```step
stage: investigate
insight: "Tracing LoopIndex and finding Nib's Clear check how a list holds entries, using the whole-app variables the move depends on."
tasks:
  - check:
      type: question
      q: "Journal has 3 entries. An event For each item in list Journal runs once per item. What is LoopIndex each time?"
      options: ["1, then 2, then 3", "0, then 1, then 2", "3 each time", "1, then 2, then 3, then 4"]
      answer: 0
      feedback: [null, "Some languages count from 0. App Builder counts items from 1, so the first is item(Journal, 1).", "LoopIndex goes up by one each time round.", "That would be four times round, but there are three items."]
      explain: "For each runs once per item, and LoopIndex counts 1, 2, 3. LoopItem is that item, the same as item(Journal, LoopIndex)."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib's journal only ever shows the latest entry. Click the line where Nib first goes wrong."
      answer: 2
      fault: logic
      misconception: list-clear-before-add
      explain: "Line 2: Clear list Journal runs on every click, just before the new entry is added, so the list only ever holds one entry. Adding to the end is enough: the list keeps the old entries."
```

### Count with LoopIndex

### Find Nib's mistake

## Make it yours: count, then test the flow

```step
stage: modify
insight: "Showing the count reuses the list itself with count(), then watching a user move through three screens is the design half of a prototype."
try: { playground: appbuilder, starter: "app.json#built", keep: build, level: 3, height: 640 }
tasks:
  - check:
      type: code
      text: "When the Journal screen starts, Count shows how many entries there are."
      rules: { event: [["when On start of screen", "Set Count text to", "count(Journal)"]] }
  - check: { type: reflect, text: "Someone used my journal without help. I wrote down one place they got stuck, and I changed the app to fix it." }
```

### Count the entries

The Journal screen has an empty Text called *Count*. Add an event: **On start of screen** → **Set Count text to** `"Entries: " & count(Journal)`. The list grows by one each time you add an entry, so `count(Journal)` is how many there are.

### Test the flow

Change the values to your school's own, or to four that matter to you. Then ask someone to add an entry without any help from you. Write down one place they paused or got stuck, and change the app so the next person doesn't.
