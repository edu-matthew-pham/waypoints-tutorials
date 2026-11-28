---
order: 9
unit: simulation
optional: true
title: Build around a simulation
summary: "An Embed shows a ready-made pendulum simulation, made as one web page. The page sends its period and length; the app sends it gravity. Students build the app around it with events: show the period when the page sends it, change gravity with planet buttons, and record readings in a table to answer a science question. The simulation is a component with inputs and outputs, the way real apps use parts other people made."
language: maths
shape: build
hook: "Someone has already made a pendulum simulation. Your job is the app around it: buttons that change it, and a table that records what it does."
pacing: { keyDelayMs: 40, cursorMs: 500, afterActionMs: 300, postRollMs: 1200 }
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-appbuilder" 8769
  url: http://127.0.0.1:8769/index.html
  readySelector: "[data-ab='tab:design']"
  layout: full
---
An **Embed** shows a web page inside your app. Here the page is a pendulum simulation, made as one web file. You don't change the page: you build the app around it.

The page and your events talk by **messages**, each a name and one value:

- The pendulum **sends** *period* (how many seconds one swing takes) and *length*. In your events, **Sim sends period** runs each time it does, and `Sim.period` is the latest value.
- It **listens for** *gravity*. **Send gravity = … to Sim** changes the pull on the pendulum.

The names are listed in the Embed's Properties, under **Sends** and **Listens for**. The page only ever gets values, never your events, and your app only gets values from it.

## Try the finished app

```step
stage: info
insight: "Using the finished lab first shows the two directions of messages before any are built: values come out of the simulation, and gravity goes in."
try: { playground: appbuilder, starter: "app.json#try", tab: run, level: 4, height: 680 }
check: { type: reflect, text: "I changed the length, clicked Moon, recorded a reading, and saw the period change in the app as well as in the simulation." }
```

This is the app you'll build, open on the **Run** tab. Drag **Length** in the simulation and watch *Period* on the right change. Click **Moon**, then **Record reading**: a row goes into the table.

## Build 1: show the period

```step
stage: run
app: true
query: { code: "@app.json#start", level: 4, id: build-1 }
caption: "When the simulation sends a value"
clip:
  - click: { selector: "[data-ab='tab:events']" }
  - caption: { text: "When Sim sends period: a trigger, like a click.", say: "When Sim sends period. It's a trigger, like a click." }
  - click: { selector: ".view-events [data-ab='add-event']" }
  - click: { selector: ".view-events .ev.sel [data-ab='add-condition']" }
  - click: { selector: "[data-ab='group:object:Sim']" }
  - click: { selector: "[data-ab='entry:onEmbedSends']" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - caption: { text: "Sim.period is the value it sent.", say: "Sim dot period is the value it sent." }
  - click: { selector: ".view-events .ev.sel [data-ab='add-action']" }
  - click: { selector: "[data-ab='group:object:PeriodText']" }
  - click: { selector: "[data-ab='entry:setText']" }
  - type: { selector: "dialog[open] [data-ab='param:value']", text: "\"Period: \" & Sim.period & \" s\"" }
  - click: { selector: "dialog[open] [data-ab='done']" }
  - expect: { selector: ".view-events event-sheet", contains: "Sim.period" }
  - wait: 900
insight: "A message from the page is a trigger with a value, so it's handled exactly like a click: an event, then actions that use the value."
try: { playground: appbuilder, starter: "app.json#start", keep: build, level: 4, height: 680 }
check:
  type: code
  text: "When Sim sends period, PeriodText shows the period."
  rules: { event: [["when Sim sends period", "Set PeriodText text to", "Sim.period"]] }
```

1. Add an event: **Sim sends period**. It's in Sim's group, with *period* already chosen.
2. Its action: **Set PeriodText text to** `"Period: " & Sim.period & " s"`
3. Run it and drag **Length**.

## Build 2: change gravity

```step
stage: run
insight: "Sending gravity in, and keeping a copy in a variable, shows that the app decides the inputs and the simulation does the physics."
try: { playground: appbuilder, starter: "app.json#sol-step-2", keep: build, level: 4, height: 680 }
check:
  type: code
  text: "Clicking a planet sets Gravity to its g, sends gravity to Sim and shows it in GravityText."
  rules: { event: [["when Planet is clicked", "Set variable Gravity to Planet.g", "Send gravity = Gravity to Sim", "Set GravityText text to"]] }
```

The three planet buttons are copies of one object, *Planet*, and each copy has its own *g* (look at its Properties).

1. Add an event: **Planet is clicked**.
2. **Set variable Gravity to** `Planet.g`
3. **Send gravity = Gravity to Sim** (in Sim's group).
4. **Set GravityText text to** `"Gravity: " & Gravity & " m/s²"`

Run it. Does the pendulum swing faster or slower on the Moon?

## Build 3: record a reading

```step
stage: run
insight: "Recording Sim.length and Sim.period into a table turns a live simulation into data the student can compare, which is the point of the lab."
try: { playground: appbuilder, starter: "app.json#sol-step-3", keep: build, level: 4, height: 680 }
check:
  type: code
  text: "Record adds a row to Readings with the length, gravity and period."
  rules: { event: [["when Record is clicked", "Add a row to table Readings", "length = Sim.length", "gravity = Gravity", "period = Sim.period"]] }
```

Add an event: **Record is clicked** → **Add a row to table Readings**, with *length* `Sim.length`, *gravity* `Gravity` and *period* `Sim.period`.

## Check: what gets through?

```step
stage: investigate
insight: "Asking what happens to a name the Embed doesn't list shows that the app only accepts the messages it was told to expect."
check:
  type: question
  q: "The pendulum page also sends a message called angle. Sim's Sends box says only period, length. What happens when angle arrives?"
  options: ["Nothing: the app ignores it", "Sim sends period runs", "The app shows an error", "Sim.angle now holds it"]
  answer: 0
  feedback: [null, "That event only runs for period.", "Messages the app doesn't expect are dropped quietly.", "Only names in Sends become values like Sim.period."]
  explain: "The Embed only lets through the names in its Sends box, and only one plain value each: a number, some text, true or false. To use angle, add it to Sends; then there's a Sim sends angle event and a Sim.angle value."
```

## Use your lab

```step
stage: info
insight: "Collecting readings on two planets answers the question with the app the student built, so the data has a purpose."
try: { playground: appbuilder, starter: "app.json#built", keep: build, tab: run, level: 4, height: 680 }
check: { type: reflect, text: "I recorded at least four readings and can say what makes the period longer, and what doesn't change it." }
```

Record two lengths on Earth, then the same two lengths on the Moon. Look at your table:

- What makes the period **longer**?
- If you could change the bob's weight, would it change the period? (The simulation doesn't let you, because it wouldn't.)

## Make it yours: start again

```step
stage: modify
insight: "Adding Clear reuses a table action from earlier lessons on data that came from the simulation."
try: { playground: appbuilder, starter: "app.json#mine", keep: build, level: 4, height: 680 }
tasks:
  - check:
      type: code
      text: "Clear empties the Readings table."
      rules: { event: [["when ClearButton is clicked", "Clear table Readings"]] }
  - check: { type: reflect, text: "I added another idea of my own, such as a Jupiter button (g = 24.8) or a count of readings." }
```

### Clear the readings

There's a **Clear** button. Make it clear the *Readings* table.

### One more idea

Add a **Jupiter** button: duplicate a Planet and set its *g* to 24.8. Or show how many readings there are with `count(Readings)`.
