---
order: 6
unit: media
title: Draw how you showed it
summary: "Add a drawing to the values journal: a Drawing object on the Describe screen, its picture kept in a variable when you click Add, and an Image on the Journal screen that shows it. Find out why the order of two actions matters, and what the journal still can't do."
language: maths
shape: build
hook: "Some things are easier to draw than to say. Apps let you draw, take photos and record sounds; each makes a picture or sound the app can keep and show somewhere else."
pacing: { keyDelayMs: 40, cursorMs: 500, afterActionMs: 300, postRollMs: 1200 }
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8763
  url: http://127.0.0.1:8763/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
---
The values journal from the last lesson keeps what you wrote. Today it also keeps a drawing of what you did.

1. **Describe:** a space to draw in, under the typing box.
2. **Journal:** the drawing you just made, under the list.

A drawing is something the app *makes* while it runs, like a photo or a recording. The app keeps it as a picture, and a variable can hold it, just as a variable holds a number or some text.

## Try the finished app

```step
stage: info
insight: "Using the finished app first shows where the drawing is made, where it's kept and where it's shown, before any of it is built."
try: { playground: appbuilder, starter: "app.json#try", tab: run, level: 3, height: 680 }
check: { type: reflect, text: "I added an entry with a drawing and saw it on the Journal screen. I watched LastDrawing change on the left when I clicked Add." }
```

Pick a value, type what you did, then draw it in the box with the mouse (or your finger). Click **Add to my journal**. The drawing shows on the Journal screen.

Watch **LastDrawing** under the variables on the left. When you click Add, it changes from `""` to something like `media:7f3a09c2`: that's the app's name for the picture it kept.

## Build 1: a space to draw

```step
stage: run
app: true
query: { code: "@app.json#start", level: 3, id: draw-1 }
caption: "A Drawing object"
clip:
  - click: { selector: "[data-ab='screen:Describe']" }
  - caption: { text: "On the Describe screen: + Add object, Drawing.", say: "On the Describe screen, add an object. Drawing." }
  - click: { selector: "[data-ab='add-object']" }
  - click: { selector: "[data-ab='kind:drawing']" }
  - caption: { text: "It's called Drawing1. Rename it Drawing.", say: "It's called Drawing one. Rename it Drawing." }
  - click: { selector: ".side [data-ab='object-menu']" }
  - click: { selector: "[data-ab='menu:rename']" }
  - type: { selector: ".side input.rename", text: "Drawing" }
  - press: Enter
  - caption: { text: "Place it under the typing box: x 229, y 184, width 342, height 280.", say: "Place it under the typing box, in Properties." }
  - type: { selector: "[data-ab='prop:x']", text: "229" }
  - press: Tab
  - type: { selector: "[data-ab='prop:y']", text: "184" }
  - press: Tab
  - type: { selector: "[data-ab='prop:w']", text: "342" }
  - press: Tab
  - type: { selector: "[data-ab='prop:h']", text: "280" }
  - press: Tab
  - caption: { text: "Each visit should start with a clean page: On start of screen, Clear Drawing.", say: "Each visit should start with a clean page. On start of screen, Clear Drawing." }
  - click: { selector: "[data-ab='tab:events']" }
  - click: { selector: ".view-events [data-ab='item:onStart']" }
  - press: Escape
  - click: { selector: ".view-events [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:Drawing']" }
  - click: { selector: "[data-ab='entry:clearDrawing']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Clear" }
  - wait: 1200
insight: "A Drawing is an object like a button, but what it holds is made by the user while the app runs."
try: { playground: appbuilder, starter: "app.json#start", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "The Describe screen has a Drawing, and it's cleared each time the screen starts."
  rules: { contains: ["object Drawing (drawing)"], event: [["when On start of screen", "Clear Drawing"]] }
```

1. Open the **Describe** screen. We've moved *Add to my journal* down to make room.
2. Click **+ Add object**, then **Drawing**. It's called *Drawing1*: rename it *Drawing* (double-click its name in the sidebar, or its **⋯** menu, **Rename**).
3. In **Properties**, place it under the typing box: x 229, y 184, width 342, height 280 (or drag it there).
4. On the **Events** tab, add an action to **On start of screen**: **Drawing**, **Clear Drawing**.
5. Run it from Choose and draw something. Go back to Choose and pick again: the page is clean.

## Build 2: keep the drawing

```step
stage: run
insight: "Drawing.picture turns what's on the page into a picture the app keeps, and a variable carries it to the next screen, as Chosen carries the value."
try: { playground: appbuilder, starter: "app.json#sol-step-2", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "A variable LastDrawing, and Add sets it to Drawing.picture (and still adds the entry and goes to Journal)."
  rules: { contains: ["variable LastDrawing ="], event: [["when AddButton is clicked", "Set variable LastDrawing to Drawing.picture", "to the end of list Journal", "Go to screen Journal"]] }
```

1. In the sidebar, under the variables, add a variable called *LastDrawing*. Leave its starting value empty.
2. On the Describe screen, add an action to **AddButton is clicked**: **Variables**, **Set variable** LastDrawing to `Drawing.picture`
3. Run it, draw, and click Add. Watch LastDrawing change on the left.

`Drawing.picture` is the drawing as a picture. The app keeps it and gives it a name such as `media:7f3a09c2`, so the variable holds that name, not all the dots of the drawing.

## Build 3: show it on the Journal

```step
stage: run
app: true
query: { code: "@app.json#sol-step-3", level: 3, id: draw-3 }
caption: "Show a picture the app made"
clip:
  - click: { selector: "[data-ab='screen:Journal']" }
  - caption: { text: "On the Journal screen: + Add object, Image, under the list.", say: "On the Journal screen, add an Image, under the list." }
  - click: { selector: "[data-ab='add-object']" }
  - click: { selector: "[data-ab='kind:image']" }
  - caption: { text: "Rename it LastImage, and place it under the list.", say: "Rename it LastImage, and place it under the list." }
  - click: { selector: ".side [data-ab='object-menu']" }
  - click: { selector: "[data-ab='menu:rename']" }
  - type: { selector: ".side input.rename", text: "LastImage" }
  - press: Enter
  - type: { selector: "[data-ab='prop:x']", text: "335" }
  - press: Tab
  - type: { selector: "[data-ab='prop:y']", text: "335" }
  - press: Tab
  - type: { selector: "[data-ab='prop:w']", text: "130" }
  - press: Tab
  - type: { selector: "[data-ab='prop:h']", text: "130" }
  - press: Tab
  - caption: { text: "On start of screen: Set LastImage picture to the one in LastDrawing.", say: "On start of screen, set LastImage's picture to the one in LastDrawing." }
  - click: { selector: "[data-ab='tab:events']" }
  - click: { selector: ".view-events [data-ab='item:onStart']" }
  - press: Escape
  - click: { selector: ".view-events [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:LastImage']" }
  - click: { selector: "[data-ab='entry:setImageFrom']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "LastDrawing" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "LastDrawing" }
  - wait: 1200
insight: "\"Set picture to the one in\" works out the picture while the app runs, so it can show something the user made, not just a picture chosen in Design."
try: { playground: appbuilder, starter: "app.json#sol-step-3", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "The Journal screen has an Image called LastImage, and when the screen starts it shows the picture in LastDrawing."
  rules: { contains: ["object LastImage (image)"], event: [["when On start of screen", "Set LastImage picture to the one in LastDrawing"]] }
```

1. Open the **Journal** screen. We've made the list shorter to make room.
2. **+ Add object**, **Image**. Rename it *LastImage*, and place it under the list: x 335, y 335, width 130, height 130.
3. On the **Events** tab, add an action to **On start of screen**: **LastImage**, **Set LastImage picture to the one in**, value `LastDrawing`
4. Run it from Choose: pick, type, draw, Add. Your drawing is on the Journal.

There are two "set picture" actions. *Set picture to* picks one of the app's pictures while you design it. *Set picture to the one in* works it out while the app runs, from a variable or `Drawing.picture`.

## Check: order and what's kept

```step
stage: investigate
insight: "Tracing when the picture is read, and what the variable holds after two entries, shows why action order matters and what a single variable can't do."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib's Journal shows the error \"There is no picture yet\", even though Nib drew something. Click the line where Nib first goes wrong."
      answer: 2
      fault: logic
      misconception: read-after-clear
      explain: "Line 2: Clear Drawing runs before Drawing.picture is read, so the page is empty when Add keeps it. Actions run in order, top to bottom: keep the picture first (or clear it when the screen starts, as in Build 1)."
  - check:
      type: question
      q: "You add a Kindness entry with a heart drawing, then a Courage entry with a star. What does the Journal screen show?"
      options: ["Both entries in the list, and only the star drawing", "Both entries in the list, and both drawings", "Only the Courage entry, with the star", "Both entries in the list, and the heart drawing"]
      answer: 0
      feedback: [null, "LastDrawing is one variable: what happens to the heart when you set it to the star?", "The Journal list keeps every entry.", "Setting LastDrawing again replaces what it held."]
      explain: "The list keeps every entry, but LastDrawing is one variable: the star replaces the heart. Keeping a drawing with every entry needs somewhere that holds many, such as a table (the Data apps course does this next)."
```

### Nib's slip

Nib wanted each entry to start with a clean page, so Nib put Clear in the Add event.

### Two entries

The journal keeps every entry you write. Does it keep every drawing?

## Make it yours: Clear and Undo

```step
stage: modify
insight: "Clear and Undo are ordinary button events with Drawing actions, so a user can fix a drawing without starting the entry again."
try: { playground: appbuilder, starter: "app.json#done", keep: build, level: 3, height: 680 }
tasks:
  - check:
      type: code
      text: "A ClearButton on Describe clears the Drawing."
      rules: { contains: ["object ClearButton (button)"], event: [["when ClearButton is clicked", "Clear Drawing"]] }
  - check:
      type: code
      text: "An UndoButton on Describe takes back the last line."
      rules: { contains: ["object UndoButton (button)"], event: [["when UndoButton is clicked", "Undo the last line on Drawing"]] }
```

### A Clear button

Add a Button *ClearButton* (text *Clear*) under the drawing, moving Add down a little, and an event: **ClearButton is clicked** → **Clear Drawing**.

### An Undo button

Add *UndoButton* (text *Undo*) beside it: **UndoButton is clicked** → **Undo the last line on Drawing**.

Want more? **Set pen colour** on Describe's start, with a different colour for each value (an If on Chosen).
