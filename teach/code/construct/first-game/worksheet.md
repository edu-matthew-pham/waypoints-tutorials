---
title: "A first game in Construct"
subtitle: "Construct games · Start here · Lesson 1"
---

# A first game in Construct

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Game engines like Construct let you make a working game in an hour, because the engine does the hard, repeated work. Your job is to say what should happen, and when.


:::teacher-note

**In one sentence:** Students build Spell Caster with Construct 3's guided tour or its written Beginner's guide (the same game either way), then sort what the game does into behaviours (the engine moves the object every moment) and events (a condition, then actions). They change one event, find where damage is set, and make a change of their own.

**Students should be able to say:** I can build a small game in Construct by following a tutorial. I can say whether a behaviour or an event makes something happen in a game. I can find the event that sets a rule and change it.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Spell Caster's event sheet has ten events. Not one of them mentions the arrow keys. When you play the game, what will the arrow keys do?**

☐ Move the goblins

☐ Move the player only after you add an event for each key

☐ Move the player

☐ Nothing, because no event uses them

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** They move the player. The Player object has the 8 Direction behaviour, so the engine moves it with the arrow keys every moment. No event is needed.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Behaviour or event?


:::keep-together

### Sort them

**What makes each of these happen in Spell Caster: a behaviour, or an event?**

Groups: A behaviour, An event

- The player moves with the arrow keys: {{field-15}}
- A spell flies forward after it appears: {{field-15}}
- A goblin walks across the screen: {{field-15}}
- The player turns to face the mouse: {{field-15}}
- A spell appears when you click: {{field-15}}
- A new goblin arrives every 3 seconds: {{field-15}}

:::


:::teacher-note

**Answer:** The player moves with the arrow keys → A behaviour; A spell flies forward after it appears → A behaviour; A goblin walks across the screen → A behaviour; The player turns to face the mouse → An event; A spell appears when you click → An event; A new goblin arrives every 3 seconds → An event

:::


:::keep-together

### Green arrows

**Some events have a green arrow beside the condition, such as "On left button clicked". "Every tick" doesn't have one. What's the difference?**

☐ A green arrow: once, at the moment. Every tick: over and over

☐ Green arrow events run first, before the rest

☐ Green arrow events run only once in the whole game

☐ No difference: the arrow is just decoration

:::


:::teacher-note

**Answer:** A green arrow: once, at the moment. Every tick: over and over

The green arrow marks a trigger: it fires once at the moment, such as each click. Every tick runs on every frame, about 60 times a second, which is why the player keeps turning to follow the mouse.

:::


:::keep-together

### Find Nib's mistake

**Nib's player drifts forward on its own. Click the line where Nib first goes wrong.**

```
 1  Nib wants the player to move with the arrow keys.
 2  Nib gives the Player object the 8 Direction behaviour.
 3  Nib also adds an event: Every tick, move the Player forward 5 pixels.
 4  Nib plays the game, and the player drifts forward on its own, even with no key pressed.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: the 8 Direction behaviour already moves the player with the arrow keys. Nib added an event that also moves it, every tick, whether a key is pressed or not. Delete that event.

:::


:::typical

## Change one thing


**Predict the change.** 

**Try it.** To change a number in an event, double-click it on the event sheet, type the new value, and press **Enter**. Then press **Preview** to play.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: stronger spells


**Find the right event.** 

**Make it yours.** Ideas for your own change: make the player faster (click the Player, then find the 8 Direction behaviour's speed in the Properties panel), give goblins more health, or score more points per goblin.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::wider

## Wider: which goblins lose health?

Construct calls this **picking**. Events pick the objects their conditions are true for, and the actions only touch those.

:::keep-together

**Five goblins are on the screen. A spell hits one of them. The event runs: Goblin, subtract 1 from health. How many goblins lose health?**

☐ Only the goblin the spell hit

☐ All five goblins

☐ None, because the action doesn't say which goblin

☐ The goblin closest to the player

:::


:::teacher-note

**Answer:** Only the goblin the spell hit

"On collision with Goblin" picks only the goblin that was hit. The actions underneath then apply only to that one. This is called picking.

:::

:::


## Exit ticket

:::keep-together

**In Spell Caster, a spell flies forward after you click. What makes it appear, and what makes it fly?**

{{lines-3}}

:::


:::teacher-note

**Answer:** An event makes it appear (on left button clicked, spawn a Spell). Its Bullet behaviour makes it fly.

:::

