---
title: "Creature scores"
subtitle: "App Builder apps · Tidy up · Lesson 11"
---

# Creature scores

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A shop works out a price with tax, a game works out damage, a fitness app works out a score. Each is one calculation used in many places, written once and asked for by name.


:::teacher-note

**In one sentence:** Students meet functions that give back a value. BarWidth(stat) replaces the same width calculation written three times, then Overall(power, speed, defence) gives back one score shown for the clicked creature. Nib's Overall works the answer out into a variable and never gives it back. Make it yours adds Rank(score), with an If inside the function.

**Students should be able to say:** I can make a function that gives back a value with Set return value. I can use a function in a value box, like BarWidth(Creature.power). I can say which value goes into which parameter when a function has several. I can explain why a function that only sets a variable doesn't give anything back.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Try the finished app

Click each creature. The bars and the **Overall** score at the bottom change. Which creature has the highest score?

## Spot the repetition

Look at the last three actions of **Creature is clicked**: *Set PowerBar width to* … and the two after it.

:::keep-together

**Open the Events tab. The three bar actions each set a width. What is different between them?**

☐ The number they divide by

☐ Only the stat: power, speed or defence

☐ Nothing: all three are the same

☐ The number they times by

:::


:::teacher-note

**Answer:** Only the stat: power, speed or defence

All three work out stat / 100 * 200. Only the stat changes, so it becomes the parameter, and the calculation goes in the function once.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## What does it give back?


:::keep-together

**Zip's speed is 95. What does BarWidth(Creature.speed) give back when Zip is clicked?**

☐ 47.5

☐ 95

☐ 190

☐ 200

:::


:::teacher-note

**Answer:** 190

For this call, stat is 95: 95 / 100 * 200 = 190. The next call gives stat a different value.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Check: Nib's Overall


:::keep-together

### Nib's slip

**Clicking a creature shows the problem "Overall doesn't give a value back yet". Click the line where Nib goes wrong.**

```
 1  Nib makes a function, Overall(power, speed, defence).
 2  Inside it: Set variable Score to round((power + speed + defence) / 3).
 3  Creature is clicked: Set OverallText text to "Overall: " & Overall(Creature.power, Creature.speed, Creature.defence).
 4  Nib runs it and clicks Blaze.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Nib puts the answer in a variable, so Overall works it out and then keeps it. Only Set return value hands it back to the place that asked.

:::


:::keep-together

### Blaze's score

**Blaze has power 80, speed 60 and defence 30. What does Overall give back?**

☐ 56

☐ 57

☐ 60

☐ 170

:::


:::teacher-note

**Answer:** 57

(80 + 60 + 30) / 3 = 56.67, and round gives 57.

:::


:::typical

## Make it yours: a rank

Make a function *Rank(score)* that gives back a word for a score, such as *Strong* for 60 or more and *Still training* below that:

1. **+ Function** *Rank*, parameter *score*.
2. In its event, a condition: **Compare** `score` **≥** `60`, then **Set return value to** `"Strong"`.
3. From the event's **⋯** menu, **Add an Else below**, with **Set return value to** `"Still training"`.
4. Show it beside the score: add `& " (" & Rank(Overall(Creature.power, Creature.speed, Creature.defence)) & ")"` to the end of the OverallText value.

`Rank(Overall(…))` asks Overall first, then hands its answer straight to Rank.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::teacher-note

**One possible answer.** Other correct answers are fine; check that each one does what the task asks.

```maths
{"version":1,"name":"Creature stats (scores)","features":{"level":4},"variables":[],"screens":[{"id":"main","name":"Creatures","objects":[{"name":"Title","kind":"text","instanceVars":[],"instances":[{"id":"t0","x":229,"y":20,"w":342,"h":34,"text":"Click a creature","visible":true,"vars":{}}]},{"name":"Creature","kind":"image","instanceVars":[{"name":"name","value":""},{"name":"power","value":0},{"name":"speed","value":0},{"name":"defence","value":0},{"name":"ability","value":""}],"instances":[{"id":"k0","x":235,"y":70,"w":100,"h":100,"text":"Blaze","visible":true,"vars":{"name":"Blaze","power":80,"speed":60,"defence":30,"ability":"Fire breath"},"image":"star"},{"id":"k1","x":350,"y":70,"w":100,"h":100,"text":"Tide","visible":true,"vars":{"name":"Tide","power":50,"speed":40,"defence":90,"ability":"Water shield"},"image":"water"},{"id":"k2","x":465,"y":70,"w":100,"h":100,"text":"Zip","visible":true,"vars":{"name":"Zip","power":30,"speed":95,"defence":40,"ability":"Super dash"},"image":"music"}]},{"name":"NameText","kind":"text","instanceVars":[],"instances":[{"id":"k10","x":229,"y":200,"w":342,"h":34,"text":"","visible":true,"vars":{}}]},{"name":"PowerText","kind":"text","instanceVars":[],"instances":[{"id":"k11","x":229,"y":246,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"SpeedText","kind":"text","instanceVars":[],"instances":[{"id":"k12","x":229,"y":282,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"DefenceText","kind":"text","instanceVars":[],"instances":[{"id":"k13","x":229,"y":318,"w":120,"h":26,"text":"","visible":true,"vars":{}}]},{"name":"PowerBar","kind":"shape","instanceVars":[],"instances":[{"id":"PowerBar","x":355,"y":250,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#e5484d"}]},{"name":"SpeedBar","kind":"shape","instanceVars":[],"instances":[{"id":"SpeedBar","x":355,"y":286,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#2f8fdd"}]},{"name":"DefenceBar","kind":"shape","instanceVars":[],"instances":[{"id":"DefenceBar","x":355,"y":322,"w":0,"h":18,"text":"","visible":true,"vars":{},"color":"#2fa36b"}]},{"name":"AbilityText","kind":"text","instanceVars":[],"instances":[{"id":"k14","x":229,"y":362,"w":342,"h":30,"text":"","visible":true,"vars":{}}]},{"name":"OverallText","kind":"text","instanceVars":[],"instances":[{"id":"ov1","x":229,"y":400,"w":342,"h":30,"text":"","visible":true,"vars":{}}]}],"events":[{"id":"k","else":false,"conds":[{"type":"onClicked","target":"Creature"}],"actions":[{"type":"setText","target":"NameText","value":"Creature.name"},{"type":"setText","target":"PowerText","value":"\"Power: \" & Creature.power"},{"type":"setText","target":"SpeedText","value":"\"Speed: \" & Creature.speed"},{"type":"setText","target":"DefenceText","value":"\"Defence: \" & Creature.defence"},{"type":"setText","target":"AbilityText","value":"\"Special: \" & Creature.ability"},{"type":"setSize","target":"PowerBar","prop":"w","value":"BarWidth(Creature.power)"},{"type":"setSize","target":"SpeedBar","prop":"w","value":"BarWidth(Creature.speed)"},{"type":"setSize","target":"DefenceBar","prop":"w","value":"BarWidth(Creature.defence)"},{"type":"setText","target":"OverallText","value":"\"Overall: \" & Overall(Creature.power, Creature.speed, Creature.defence) & \" (\" & Rank(Overall(Creature.power, Creature.speed, Creature.defence)) & \")\""}],"children":[]}]}],"device":"web","functions":[{"id":"fbar","name":"BarWidth","params":["stat"],"events":[{"id":"fbare","else":false,"conds":[],"actions":[{"type":"setReturn","value":"stat / 100 * 200"}],"children":[]}]},{"id":"fall","name":"Overall","params":["power","speed","defence"],"events":[{"id":"falle","else":false,"conds":[],"actions":[{"type":"setReturn","value":"round((power + speed + defence) / 3)"}],"children":[]}]},{"id":"frank","name":"Rank","params":["score"],"events":[{"id":"fr1","else":false,"conds":[{"type":"compareValues","left":"score","op":"≥","right":"60"}],"actions":[{"type":"setReturn","value":"\"Strong\""}],"children":[]},{"id":"fr2","else":true,"conds":[],"actions":[{"type":"setReturn","value":"\"Still training\""}],"children":[]}]}]}
```

:::

:::


## Exit ticket

:::keep-together

**A canteen app works out price × quantity for every item on an order. What function would you make, what would it give back, and how would you use it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Total(price, qty) gives back price * qty. Each item's line uses Total(item price, item quantity) in a value box, and the order total adds them up.

:::

