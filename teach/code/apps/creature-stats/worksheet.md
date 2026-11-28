---
title: "Creature stats"
subtitle: "App Builder apps · One object · Lesson 9"
---

# Creature stats

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Games, shops and sports apps all show cards of things with stats. Behind them, one design is copied many times, and each copy keeps its own values.


:::teacher-note

**In one sentence:** Students build a character viewer: one Creature Image with three copies, each with its own object variables, and one Creature is clicked event that shows the clicked creature's name, stats as text and bars, and ability. They predict and test that clicking picks one copy, find Nib's mistake (expecting Hide to hide every creature), add a fourth creature without changing the events, then design their own set.

**Students should be able to say:** I can make several characters from one Image, each with its own values. I can explain the difference between an object, its copies and its object variables. I can use one click event that works for whichever character is clicked.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

This is the finished app you'll build, open on the **Run** tab. The event list under the app has only one event.

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: one event, many creatures


:::keep-together

### Which ones hide?

**You add one more action to the click event: Hide Creature. You click Zip. Which creatures disappear?**

☐ All three

☐ The two you didn't click

☐ Only Zip

☐ None, because Hide needs Every tick

:::


:::teacher-note

**Answer:** Only Zip

Creature is clicked picks the copy you clicked. Every Creature action in that event applies to the picked copy only.

:::


:::keep-together

### Find Nib's mistake

**Nib wanted the other two creatures to hide. Click the line where Nib's thinking goes wrong.**

```
 1  Nib wants the two creatures you didn't click to hide, so the clicked one stands out.
 2  Nib uses the event: Creature is clicked.
 3  Nib adds the action: Hide Creature, so the other creatures disappear.
 4  Nib clicks Tide, and only Tide disappears.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: in this event the click has picked Tide, so Hide Creature only hides Tide. To hide the others you'd hide every creature in an event that doesn't pick, then show the clicked one.

:::


:::typical

## Make it yours: a fourth creature, then your own set


**A fourth creature.** Click a creature, then choose **⋯**, **Duplicate** in the sidebar to make a fourth copy. Move it into the row, choose its picture, and fill in its object variables. Then run it and click it. What did you change on the Events tab? Nothing: the click event already works for any copy.

**Your own set.** Choose your own set: made-up creatures, pets, robots, plants or anything with at least three characters. Upload your own pictures if you like. Give each one at least three stats and a weakness as well as an ability. Make the numbers fair: be ready to say why the strongest one isn't the best at everything.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

**A fourth creature:**

```maths
{"version":1,"name":"Creature stats","features":{"level":3},"variables":[],"screens":[{"id":"main","name":"Creatures","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"t0","x":229,"y":20,"w":342,"h":34,"text":"Click a creature","visible":true,"vars":{}}]},{"name":"Creature","kind":"image","instanceVars":[{"name":"name","value":""},{"name":"power","value":0},{"name":"speed","value":0},{"name":"defence","value":0},{"name":"ability","value":""}],"instances":[{"id":"k0","x":235,"y":70,"w":100,"h":100,"text":"Blaze","visible":true,"vars":{"name":"Blaze","power":80,"speed":60,"defence":30,"ability":"Fire breath"},"image":"star"},{"id":"k1","x":350,"y":70,"w":100,"h":100,"text":"Tide","visible":true,"vars":{"name":"Tide","power":50,"speed":40,"defence":90,"ability":"Water shield"},"image":"water"},{"id":"k2","x":465,"y":70,"w":100,"h":100,"text":"Zip","visible":true,"vars":{"name":"Zip","power":30,"speed":95,"defence":40,"ability":"Super dash"},"image":"music"},{"id":"k3","x":580,"y":70,"w":100,"h":100,"text":"Moss","visible":true,"vars":{"name":"Moss","power":60,"speed":20,"defence":70,"ability":"Root grip"},"image":"smile"}]},{"name":"NameText","kind":"text","instanceVars":[],"instances":[{"id":"k10","x":229,"y":200,"w":342,"h":34,"text":"","visible":true,"vars":{}}]},{"name":"PowerText","kind":"text","instanceVars":[],"instances":[{"id":"k11","x":229,"y":246,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"SpeedText","kind":"text","instanceVars":[],"instances":[{"id":"k12","x":229,"y":282,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"DefenceText","kind":"text","instanceVars":[],"instances":[{"id":"k13","x":229,"y":318,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"PowerBar","kind":"shape","instanceVars":[],"instances":[{"id":"PowerBar","x":355,"y":250,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#e5484d"}]},{"name":"SpeedBar","kind":"shape","instanceVars":[],"instances":[{"id":"SpeedBar","x":355,"y":286,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#2f8fdd"}]},{"name":"DefenceBar","kind":"shape","instanceVars":[],"instances":[{"id":"DefenceBar","x":355,"y":322,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#2fa36b"}]},{"name":"AbilityText","kind":"text","instanceVars":[],"instances":[{"id":"k14","x":229,"y":362,"w":342,"h":30,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"k","else":false,"conds":[{"type":"onClicked","target":"Creature"}],"actions":[{"type":"setText","target":"NameText","value":"Creature.name"},{"type":"setText","target":"PowerText","value":"\"Power: \" & Creature.power"},{"type":"setText","target":"SpeedText","value":"\"Speed: \" & Creature.speed"},{"type":"setText","target":"DefenceText","value":"\"Defence: \" & Creature.defence"},{"type":"setText","target":"AbilityText","value":"\"Special: \" & Creature.ability"},{"type":"setSize","target":"PowerBar","prop":"w","value":"Creature.power / 100 * 200"},{"type":"setSize","target":"SpeedBar","prop":"w","value":"Creature.speed / 100 * 200"},{"type":"setSize","target":"DefenceBar","prop":"w","value":"Creature.defence / 100 * 200"}],"children":[]}]}],"device":"web"}
```

:::

:::


## Exit ticket

:::keep-together

**An app has 10 coins, each a copy of Coin with an object variable value. The player clicks one coin. The event adds Coin.value to Score. Whose value is added?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Only the clicked coin's: the click picked that copy, so Coin.value means its value.

:::

