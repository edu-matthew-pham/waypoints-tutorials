---
order: 1
unit: start
title: A first game in Construct
summary: "Build Spell Caster, a small top-down game, with Construct 3's own guided tour (or its written Beginner's guide), then work out what makes each part happen. A behaviour is something the engine does for an object every moment, such as moving it with the arrow keys or flying it forward. An event is a row that says when something happens and what to do then, such as spawning a spell when the mouse is clicked."
language: maths
hook: "Game engines like Construct let you make a working game in an hour, because the engine does the hard, repeated work. Your job is to say what should happen, and when."
---
**Construct 3** is a game engine that runs in your browser. People use it to make games, and also to try out ideas for apps and websites before anyone builds them for real.

In Construct you don't write code line by line. You do two things:

- You give an object a **behaviour**, and the engine looks after it for you every moment. The *8 Direction* behaviour moves an object with the arrow keys. The *Bullet* behaviour flies it forward.
- You write **events** on an **event sheet**. Each event is a row: on the left, *when* something happens (the condition); on the right, *what to do* then (the actions).

Here are three of the events from the game you'll build, Spell Caster:

| When (condition) | Do (actions) |
|---|---|
| Every tick | Player: set angle toward the mouse |
| Mouse: on left button clicked | Player: spawn a Spell |
| Spell: on collision with Goblin | Goblin: subtract 1 from health · Spell: destroy |

## Predict: do the arrow keys work?

```step
stage: predict
insight: "Committing to an answer before building sets up the lesson's move: something can move with no event that mentions it, because a behaviour does the work."
check:
  type: predict
  q: "Spell Caster's event sheet has ten events. Not one of them mentions the arrow keys. When you play the game, what will the arrow keys do?"
  options: ["Move the player", "Nothing, because no event uses them", "Move the player only after you add an event for each key", "Move the goblins"]
  actual: "They move the player. The Player object has the 8 Direction behaviour, so the engine moves it with the arrow keys every moment. No event is needed."
```

## Build it: Spell Caster

```step
stage: run
insight: "Building the real game in Construct settles the prediction: students see the player move with no event for it."
check: { type: reflect, text: "I built Spell Caster in Construct, played it, and checked what the arrow keys do." }
```

Open Construct at [editor.construct.net](https://editor.construct.net). It runs in the browser: nothing to install, and you don't need to sign in.

Choose one way to build the same game:

- **The guided tour.** When Construct opens, choose **Take a guided tour**. It points to each thing to click, one step at a time. Best if this is your first time.
- **The Beginner's guide.** The [Beginner's guide to Construct 3](https://www.construct.net/en/tutorials/beginners-guide-to-construct-3-1) is the same game as a written tutorial. Good if you'd rather read, want to go back over a step, or missed a lesson.

When you're done, press **Preview** (the play button) and play. Shoot some goblins. Try the arrow keys.

Before you close the tab, save a copy of your project to your computer. You'll use it again later in this lesson.

Was your guess right? Nothing on the event sheet mentions the arrow keys, and the player still moves. That's the 8 Direction behaviour.

## Investigate: behaviour or event?

```step
stage: investigate
insight: "Sorting each thing the game does into behaviour or event is the move itself; the trigger question and Nib's mistake test it from two other sides."
tasks:
  - check:
      type: sort
      q: "What makes each of these happen in Spell Caster: a behaviour, or an event?"
      options: ["A behaviour", "An event"]
      items:
        - ["The player moves with the arrow keys", "A behaviour", "The 8 Direction behaviour moves it. No event mentions the keys."]
        - ["A spell flies forward after it appears", "A behaviour", "The Bullet behaviour moves it forward every moment."]
        - ["A goblin walks across the screen", "A behaviour", "Goblins have a Bullet behaviour too, which is why an event can change their speed."]
        - ["The player turns to face the mouse", "An event", "Every tick: set the player's angle toward the mouse."]
        - ["A spell appears when you click", "An event", "On left button clicked: spawn a Spell."]
        - ["A new goblin arrives every 3 seconds", "An event", "Every 3 seconds: create a Goblin."]
  - check:
      type: question
      q: "Some events have a green arrow beside the condition, such as \"On left button clicked\". \"Every tick\" doesn't have one. What's the difference?"
      options: ["A green arrow: once, at the moment. Every tick: over and over", "Green arrow events run first, before the rest", "Green arrow events run only once in the whole game", "No difference: the arrow is just decoration"]
      answer: 0
      feedback: [null, "Order on the sheet doesn't come from the arrow. Construct checks events from top to bottom.", "It runs every time the moment happens: every click spawns a spell.", "Try clicking once, then holding the button down. How many spells?"]
      explain: "The green arrow marks a trigger: it fires once at the moment, such as each click. Every tick runs on every frame, about 60 times a second, which is why the player keeps turning to follow the mouse."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib's player drifts forward on its own. Click the line where Nib first goes wrong."
      answer: 3
      fault: logic
      misconception: move-needs-event
      explain: "Line 3: the 8 Direction behaviour already moves the player with the arrow keys. Nib added an event that also moves it, every tick, whether a key is pressed or not. Delete that event."
```

### Sort them

### Green arrows

### Find Nib's mistake

## Modify: change one thing

```step
stage: modify
insight: "Changing one event and predicting first shows that events are where the game's rules live, and that a small change has a clear effect."
tasks:
  - check:
      type: question
      q: "Event 8 says: Every 3 seconds, create a Goblin. You change the 3 to 1. What will happen?"
      options: ["Goblins arrive three times as often", "Goblins move three times as fast", "Nothing, because goblins have a behaviour", "Only one goblin ever appears"]
      answer: 0
      feedback: [null, "Their speed is set by GoblinSpeed and the Bullet behaviour, not by this event.", "The behaviour moves goblins. This event is what makes new ones.", "Every 1 second keeps going: one more goblin each second."]
      explain: "The event makes a new goblin each time the timer comes round. Once a second instead of once every 3 seconds means three times as many."
  - check: { type: reflect, text: "In my Spell Caster project, I changed the 3 to 1 in the Every 3 seconds event, played the game, and checked my prediction. Then I changed it back." }
```

### Predict the change

### Try it

To change a number in an event, double-click it on the event sheet, type the new value, and press **Enter**. Then press **Preview** to play.

## Make: stronger spells

```step
stage: make
insight: "Finding the event and action to change, then making the change, has students use the move on their own: rules live in events, movement in behaviours."
tasks:
  - check:
      type: question
      q: "You want each spell to do 2 damage instead of 1. Which part of Spell Caster do you change?"
      options: ["The Spell on collision with Goblin event", "The Spell object's Bullet behaviour", "The Every tick event at the top", "The event that checks Goblin health ≤ 0"]
      answer: 0
      feedback: [null, "The Bullet behaviour moves the spell. It doesn't know about damage.", "Every tick turns the player and updates the score text.", "That event checks if a goblin is out of health. It doesn't take any away."]
      explain: "Damage happens when a spell hits a goblin, so it's in that event's actions: Goblin, subtract 1 from health. Change the 1 to 2."
  - check: { type: reflect, text: "I made spells do 2 damage, then made one more change of my own to the game, and I can say whether I changed a behaviour or an event." }
```

### Find the right event

### Make it yours

Ideas for your own change: make the player faster (click the Player, then find the 8 Direction behaviour's speed in the Properties panel), give goblins more health, or score more points per goblin.

## Wider: which goblins lose health?

```step
stage: practise
tier: wider
insight: "A first look at picking, which is Construct's own big idea: an action applies only to the objects the condition picked."
check:
  type: question
  q: "Five goblins are on the screen. A spell hits one of them. The event runs: Goblin, subtract 1 from health. How many goblins lose health?"
  options: ["Only the goblin the spell hit", "All five goblins", "None, because the action doesn't say which goblin", "The goblin closest to the player"]
  answer: 0
  feedback: [null, "Try it: shoot one goblin and watch the others. Do they all go down?", "The condition picked the goblin for you.", "Distance doesn't matter here. Which goblin did the spell touch?"]
  explain: "\"On collision with Goblin\" picks only the goblin that was hit. The actions underneath then apply only to that one. This is called picking."
```

Construct calls this **picking**. Events pick the objects their conditions are true for, and the actions only touch those.
