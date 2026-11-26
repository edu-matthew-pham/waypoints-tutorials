---
order: 7
unit: media
title: "Show it's done: photos"
summary: "Give the chores checklist a photo for each chore: tick a chore, then take a photo or choose one, and it appears beside that chore. A variable remembers which chore was ticked, and the photo event checks it."
language: maths
shape: build
hook: "Apps ask for proof all the time: a photo of the parcel at the door, the receipt, the finished job. The app has to know which job each photo belongs to."
pacing: { keyDelayMs: 40, cursorMs: 500, afterActionMs: 300, postRollMs: 1200 }
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8767
  url: http://127.0.0.1:8767/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
---
The chores checklist from earlier ticks a box when you click it. Today each chore also gets a **photo** to show it's done: the made bed, the dog's bowl, the finished homework.

- A **Photo** object takes a photo with the camera, or lets the user **Choose a photo** from the computer.
- When a photo is taken (or chosen), the event **A photo is taken with Camera** runs, and `Camera.picture` is the photo.
- The app has to know **which chore** the photo is for. A variable remembers the chore you ticked last.

Photos of things, not people. They stay in this browser: nothing is sent anywhere.

## Try the finished app

```step
stage: info
insight: "Ticking a chore and then adding a photo, in that order, shows the two moments the app has to join together before building it."
try: { playground: appbuilder, starter: "app.json#try", tab: run, level: 3, height: 680 }
check: { type: reflect, text: "I ticked a chore, added a photo, and saw it appear beside that chore. Then I did it for a second chore." }
```

1. Tick **Make my bed**.
2. Click **🖼 Choose a photo** and pick any photo on your computer, or tap the camera to start it and press the round button.
3. The photo appears beside *Make my bed*. Now tick another chore and add another photo.

No camera, or your school blocks it? **Choose a photo** works everywhere.

## Build 1: a Photo object

```step
stage: run
app: true
query: { code: "@app.json#start", level: 3, id: chores-photo-1 }
caption: "A Photo object"
clip:
  - caption: { text: "+ Add object, Photo. Rename it Camera.", say: "Add a Photo object, and rename it Camera." }
  - click: { selector: "[data-ab='add-object']" }
  - click: { selector: "[data-ab='kind:photo']" }
  - click: { selector: ".side [data-ab='object-menu']" }
  - click: { selector: "[data-ab='menu:rename']" }
  - type: { selector: ".side input.rename", text: "Camera" }
  - press: Enter
  - caption: { text: "Under the chores: x 250, y 320.", say: "Put it under the chores." }
  - type: { selector: "[data-ab='prop:x']", text: "250" }
  - press: Tab
  - type: { selector: "[data-ab='prop:y']", text: "320" }
  - press: Tab
  - caption: { text: "Allow camera: off unless you tick it. Choose a photo works either way.", say: "Allow camera is off unless you tick it. Choose a photo works either way." }
  - click: { selector: "[data-ab='allow-camera']" }
  - wait: 1500
insight: "A Photo is an object like any other, but the camera stays off unless the app allows it and the user agrees, because a camera is private."
try: { playground: appbuilder, starter: "app.json#start", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "A Photo object called Camera."
  rules: { contains: ["object Camera (photo)"] }
```

1. **+ Add object**, **Photo**. Rename it *Camera* and put it under the chores (x 250, y 320).
2. In its **Properties**, tick **Allow camera in this app**. The browser will ask too.
3. Run it: tap the Photo to start the camera, or click **Choose a photo**.

We've made room beside each chore for its photo: *BedPic*, *FeedPic* and *HomeworkPic*. They're hidden until they have a photo.

## Build 2: remember which chore

```step
stage: run
insight: "The tick and the photo are two separate events, so a variable carries the chore from the first to the second, as Chosen carried the value between screens in the journal."
try: { playground: appbuilder, starter: "app.json#sol-step-2", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "A variable ForChore, set to \"Bed\", \"Feed\" or \"Homework\" when that chore is ticked."
  rules: { contains: ["variable ForChore ="], event: [["BedBox text = \"⬜\"", "Set variable ForChore to \"Bed\""], ["FeedBox text = \"⬜\"", "Set variable ForChore to \"Feed\""], ["HomeworkBox text = \"⬜\"", "Set variable ForChore to \"Homework\""]] }
```

1. Add a variable *ForChore*. Leave it empty.
2. In **BedBox is clicked**, find the sub-event that ticks it (*BedBox text = "⬜"*) and add **Set variable** ForChore to `"Bed"`
3. Do the same for FeedBox (`"Feed"`) and HomeworkBox (`"Homework"`).
4. Run it and tick a chore. Watch *ForChore* on the left.

Why only when ticking, not unticking? A photo shows a chore is *done*.

## Build 3: put the photo beside its chore

```step
stage: run
app: true
query: { code: "@app.json#sol-step-3", level: 3, id: chores-photo-3 }
caption: "A photo event that checks which chore"
clip:
  - caption: { text: "A new event: A photo is taken with Camera.", say: "A new event. A photo is taken with Camera." }
  - click: { selector: "[data-ab='tab:events']" }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:Camera']" }
  - click: { selector: "[data-ab='entry:onPhotoTaken']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - caption: { text: "A sub-event for each chore. First: ForChore = \"Bed\".", say: "A sub-event for each chore. First, ForChore equals Bed." }
  - click: { selector: ".view-events .ev.sel [data-ab='event-menu']" }
  - click: { selector: "[data-ab='menu:add-a-sub-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:Variables']" }
  - click: { selector: "[data-ab='entry:compareVar']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"Bed\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - caption: { text: "Then BedPic shows the photo: Set picture to the one in Camera.picture, and Show.", say: "Then BedPic shows the photo, and appears." }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:BedPic']" }
  - click: { selector: "[data-ab='entry:setImageFrom']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "Camera.picture" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:BedPic']" }
  - click: { selector: "[data-ab='entry:setVisible']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Camera.picture" }
  - caption: { text: "Then the same for Feed and Homework.", say: "Then the same for Feed and Homework." }
  - wait: 1200
insight: "One photo event serves all three chores; its sub-events check ForChore, so only the matching chore's picture changes."
try: { playground: appbuilder, starter: "app.json#sol-step-3", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "When a photo is taken, the chore ForChore names shows it: BedPic for \"Bed\", FeedPic for \"Feed\", HomeworkPic for \"Homework\"."
  rules: { event: [["A photo is taken with Camera", "ForChore = \"Bed\"", "Set BedPic picture to the one in Camera.picture", "Show BedPic"], ["A photo is taken with Camera", "ForChore = \"Feed\"", "Set FeedPic picture to the one in Camera.picture", "Show FeedPic"], ["A photo is taken with Camera", "ForChore = \"Homework\"", "Set HomeworkPic picture to the one in Camera.picture", "Show HomeworkPic"]] }
```

1. Add an event: **Camera**, **A photo is taken with Camera**.
2. From its **⋯** menu, **Add a sub-event**: **Variables**, **Variable** ForChore **=** `"Bed"`, with two actions:
   - **BedPic**, **Set BedPic picture to the one in** `Camera.picture`
   - **BedPic**, **Show BedPic**
3. Add two more sub-events under the photo event, the same way, for `"Feed"` (FeedPic) and `"Homework"` (HomeworkPic).
4. Run it: tick a chore, add a photo, then another chore and another photo.

## Check: which chore gets it?

```step
stage: investigate
insight: "Tracing ForChore through a tick, an untick and a photo shows that a variable keeps its value until something sets it again."
tasks:
  - check:
      type: question
      q: "You tick Do my homework, then untick it, then choose a photo. Where does the photo go?"
      options: ["Beside Do my homework", "Nowhere: nothing is ticked", "Beside Make my bed", "Beside every chore"]
      answer: 0
      feedback: [null, "Unticking doesn't change ForChore. What does it still say?", "Bed is the first sub-event, but does ForChore = \"Bed\"?", "Only the sub-event that matches ForChore runs its actions."]
      explain: "Unticking doesn't change ForChore, so it still says \"Homework\" and the photo goes there. (Make it yours fixes that.)"
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Every photo Nib adds appears beside Make my bed, whichever chore was ticked. Click the line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: missing-which-check
      explain: "Line 3: Nib's photo event sets BedPic every time, without checking ForChore. The sub-events with ForChore = \"Bed\", \"Feed\" and \"Homework\" are what send each photo to its own chore."
```

### Tick, untick, photo

Watch *ForChore* on the left as you try it.

### Nib's photos

Nib set ForChore when ticking, just like you.

## Make it yours: untick hides the photo

```step
stage: modify
insight: "Hiding the photo in the untick branch keeps what the app shows true to what's done."
try: { playground: appbuilder, starter: "app.json#done", keep: build, level: 3, height: 680 }
check:
  type: code
  text: "Unticking a chore hides its photo."
  rules: { event: [["BedBox is clicked > else", "Hide BedPic"], ["FeedBox is clicked > else", "Hide FeedPic"], ["HomeworkBox is clicked > else", "Hide HomeworkPic"]] }
```

When a chore is unticked, its photo should go too. In each box's **Else** branch (the one that sets it back to ⬜), add **Hide BedPic** (or FeedPic, HomeworkPic). A new photo shows it again.

More ideas: a **Take a photo** button of your own (untick *Show a take-photo button* on the Photo, then **Take a photo with Camera** in your button's event, with what comes next in that same event), or set ForChore back to `""` when unticking, so a photo with nothing ticked goes nowhere.
