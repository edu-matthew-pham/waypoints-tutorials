---
order: 5
unit: characters
title: Creature stats
summary: "Build a viewer for three made-up creatures: click one and its name, stats and special ability appear, with bars for each stat. One Image object has three copies, each with its own object variables, and one click event shows whichever copy you clicked."
language: maths
hook: "Games, shops and sports apps all show cards of things with stats. Behind them, one design is copied many times, and each copy keeps its own values."
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8755
  url: http://127.0.0.1:8755/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
explainClip:
  query: { code: "@app.json#done", tab: run, id: explain }
  caption: "One event, three creatures"
  say: "Clicking a creature picks that copy, so its values are the ones shown."
  clip:
    - caption: { text: "One Image object, three copies. Each copy has its own values.", say: "One Image object, three copies. Each copy has its own values." }
    - wait: 600
    - click: { selector: ".view-run [data-ab='widget:Creature'][data-id='k0']" }
    - caption: { text: "Click Blaze: the event reads Blaze's power, speed and defence.", say: "Click Blaze. The event reads Blaze's power, speed and defence." }
    - wait: 1000
    - click: { selector: ".view-run [data-ab='widget:Creature'][data-id='k1']" }
    - expect: { selector: ".view-run [data-ab='widget:NameText']", contains: "Tide" }
    - caption: { text: "Same event, a different copy: now it reads Tide's values.", say: "Same event, a different copy. Now it reads Tide's values." }
    - wait: 1400
---
Today's prototype shows three made-up creatures: Blaze, Tide and Zip. Click one, and its name, stats and special ability appear below.

You could make three separate Images, each with its own events. Instead you'll use **one** Image object with three copies. **Object variables** belong to the object, but each copy keeps its own values: Blaze's power and Tide's power are different numbers.

![The creature viewer: three creatures in a row, and below them Tide's name, its power, speed and defence as bars, and its special ability.](app.svg)

## Predict: whose name shows?

```step
stage: predict
insight: "Predicting which name appears sets up the move: clicking a copy picks it, so the event reads that copy's object variables."
check:
  type: predict
  q: "Three copies of the Creature image have the object variable name: Blaze, Tide and Zip. The event is: Creature is clicked → Set NameText text to Creature.name. You click Tide. What does NameText show?"
  options: ["Tide", "Blaze, the first copy", "All three names", "Creature.name"]
  actual: "Tide. Creature is clicked picks the copy you clicked, so for the rest of that event Creature.name means that copy's name."
```

## Try the finished app

```step
stage: run
insight: "Clicking each creature in the finished viewer shows the move before it's built: one event, a different result for each copy."
try: { playground: appbuilder, starter: "app.json#done", tab: run, level: 3, height: 640 }
check: { type: reflect, text: "I clicked each creature in turn. One event showed all three." }
```

This is the finished app you'll build, open on the **Run** tab. The event list under the app has only one event.

## Watch first: read the clicked copy

```step
stage: info
app: true
query: { code: "@app.json#walk-start", level: 3, id: walkthrough }
caption: "Creature.name means the clicked copy"
clip:
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "One event: Creature is clicked.", say: "One event. Creature is clicked." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:Creature']" }
  - click: { selector: "[data-ab='entry:onClicked']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - caption: { text: "Set NameText's text to Creature.name: the name of the copy that was clicked.", say: "Set NameText's text to Creature dot name. That's the name of the copy that was clicked." }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:NameText']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "Creature.name" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Creature.name" }
  - click: { selector: ".view-events .preview-col [data-ab='widget:Creature'][data-id='k2']" }
  - caption: { text: "Click Zip in the preview: NameText shows Zip.", say: "Click Zip in the preview. NameText shows Zip." }
  - wait: 1500
```

The clip shows steps 6 and 7 below.

## Build it: the creature viewer

```step
stage: run
insight: "Filling in object variables, then one click event, makes picking visible: the same event shows different stats for each creature."
try: { playground: appbuilder, starter: "app.json#start", level: 3, height: 640 }
tasks:
  - check:
      type: code
      text: "Creature has the object variables name, power, speed, defence and ability."
      rules: { contains: ["object variable Creature.name =", "object variable Creature.power =", "object variable Creature.speed =", "object variable Creature.defence =", "object variable Creature.ability ="] }
  - check:
      type: code
      text: "Creature is clicked shows the clicked copy's name, power, speed, defence and ability."
      rules: { event: [["when Creature is clicked", "Set NameText text to Creature.name", "Set PowerText text to", "& Creature.power", "Set SpeedText text to", "& Creature.speed", "Set DefenceText text to", "& Creature.defence", "Set AbilityText text to", "& Creature.ability"]] }
  - check:
      type: code
      text: "The same event sets each bar's width from the stat."
      rules: { event: [["when Creature is clicked", "Set PowerBar width to Creature.power", "Set SpeedBar width to Creature.speed", "Set DefenceBar width to Creature.defence"]] }
```

The screen is made for you: three copies of one Image called *Creature*, Texts for the stats, and three Boxes for the bars (*PowerBar*, *SpeedBar*, *DefenceBar*). Click any copy: the sidebar says *Creature*, with *3 copies*.

### Object variables

1. Click a creature. In Properties, under **Object variables**, add *name* and *ability* (start them empty), then *power*, *speed* and *defence* (start them at 0).
2. Click each creature in turn and fill in its own values: Blaze, Tide and Zip, numbers from 0 to 100, and an ability each. Make up the numbers, but be ready to say why each creature has them.

### Show the clicked creature

3. On the Events tab: **Creature is clicked**.
4. Add **Set NameText text to** `Creature.name`
5. Add **Set PowerText text to** `"Power: " & Creature.power`, and the same for speed and defence.
6. Add **Set AbilityText text to** `"Special: " & Creature.ability`
7. Click each creature in the preview.

### Bars

8. A full bar is 200 wide. Add **PowerBar**, **Set PowerBar width to** `Creature.power / 100 * 200`, and the same for the other two bars.

## Investigate: one event, many creatures

```step
stage: investigate
insight: "The hide question and Nib's mistake test picking from the other side: an action in a picking event touches only the picked copy, not every copy."
tasks:
  - check:
      type: question
      q: "You add one more action to the click event: Hide Creature. You click Zip. Which creatures disappear?"
      options: ["Only Zip", "All three", "The two you didn't click", "None, because Hide needs Every tick"]
      answer: 0
      feedback: [null, "The click picked one copy. Actions in this event only touch that one.", "Nothing in the event picks the others.", "Hide works in any event."]
      explain: "Creature is clicked picks the copy you clicked. Every Creature action in that event applies to the picked copy only."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib wanted the other two creatures to hide. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: action-hits-all
      explain: "Line 3: in this event the click has picked Tide, so Hide Creature only hides Tide. To hide the others you'd hide every creature in an event that doesn't pick, then show the clicked one."
  - check:
      type: question
      q: "Why use object variables here, not variables in the sidebar?"
      options: ["Each creature needs its own values", "Sidebar variables can't hold text", "Object variables are quicker to type", "Sidebar variables reset on every click"]
      answer: 0
      feedback: [null, "Sidebar variables can hold text.", "Typing speed isn't it.", "They keep their value until an event changes it."]
      explain: "A sidebar variable holds one value for the whole app. Each creature needs its own power, speed and so on, so they're object variables: same names, different values in each copy."
```

### Which ones hide?

### Find Nib's mistake

### Why object variables?

## Modify: a fourth creature

```step
stage: modify
insight: "Adding a creature without touching the events shows the payoff of object variables and picking: the event already works for any copy."
try: { playground: appbuilder, starter: "app.json#done", level: 3, height: 640 }
tasks:
  - check:
      type: question
      q: "You add a fourth copy of Creature with its own values. What do you change on the Events tab?"
      options: ["Nothing", "Add a new click event for it", "Add a fourth Set text for its name", "Change Creature to Creature4"]
      answer: 0
      feedback: [null, "The existing event already works for any copy of Creature.", "Creature.name reads the clicked copy, whichever it is.", "It's another copy of the same object."]
      explain: "The click event picks whichever copy is clicked and reads that copy's variables, so a new copy works straight away."
  - check:
      type: code
      text: "Four copies of Creature, and still one click event."
      rules: { contains: ["copies 4"], event: [["when Creature is clicked", "Set NameText text to Creature.name"]] }
```

### Predict the change

### Try it

Click a creature, then choose **⋯**, **Duplicate** in the sidebar to make a fourth copy. Move it into the row, choose its picture, and fill in its object variables. Then run it and click it.

## Make: your own character cards

```step
stage: make
check: { type: reflect, text: "I made my own viewer: at least three characters (copies of one Image), at least three stats shown as bars, and an ability and a weakness for each. I can explain why each one has its numbers." }
insight: "A viewer of their own choosing uses the whole pattern (one object, object variables, a picking click event) in a new context."
try: { playground: appbuilder, starter: "app.json#done", level: 3, height: 640 }
```

Choose your own set: made-up creatures, pets, robots, plants or anything with at least three characters. Upload your own pictures if you like. Give each one at least three stats and a weakness as well as an ability. Make the numbers fair: be ready to say why the strongest one isn't the best at everything.
