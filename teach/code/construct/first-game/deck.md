---
marp: true
theme: default
html: true
---

# A first game in Construct

Construct games · Start here

<!-- Speaker note: Students build Spell Caster with Construct 3's guided tour or its written Beginner's guide (the same game either way), then sort what the game does into behaviours (the engine moves the object every moment) and events (a condition, then actions). They change one event, find where damage is set, and make a change of their own. About 60 minutes (Predict 3 min · Build it 25–30 min · Investigate 10 min · Modify 7 min · Make 10 min). -->

---

## Today

- I can build a small game in Construct by following a tutorial.
- I can say whether a behaviour or an event makes something happen in a game.
- I can find the event that sets a rule and change it.

<!-- Speaker note: Before class: Try it first on a student laptop: open editor.construct.net and choose Take a guided tour. Construct needs WebGL (graphics support in the browser). Without it the editor loads but warns that it can't open any layout views, and nothing can be built. Locked-down or old laptops are the usual cause; try another browser or an updated one. The free edition is enough: no sign-in, no seats. Spell Caster uses 10 events, and the free edition allows 50. Students should save a copy of their project to their device before closing the tab (Construct keeps nothing for them unless they sign in), so a second lesson can carry on from it. Two routes, one game: the guided tour, inside the editor, points at each thing to click; the Beginner's guide on construct.net is the written version. Students who were away, or who want to go back over a step, can use the guide. Construct updates itself, so a step may look slightly different from the guide's screenshots. The one idea: a behaviour is something the engine does for an object every moment; an event says when something happens and what to do then. Picking (the wider step) is the next big idea and gets its own lesson later; here it's only a first look. The Beginner's guide is by Scirra (Construct's makers), licensed CC BY 4.0. This lesson links to it and does not copy it. Teacher: Build it: circulate during the first event. Ask which side is when and which side is what to do. -->

---

## Why it matters

> Game engines like Construct let you make a working game in an hour, because the engine does the hard, repeated work. Your job is to say what should happen, and when.

<!-- Speaker note: **Construct 3** is a game engine that runs in your browser. People use it to make games, and also to try out ideas for apps and websites before anyone builds them for real. In Construct you don't write code line by line. You do two things: - You give an object a **behaviour**, and the engine looks after it for you every moment. The *8 Direction* behaviour moves an object with the arrow keys. The *Bullet* behaviour flies it forward. - You write **events** on an **event sheet**. Each event is a row: on the left, *when* something happens (the condition); on the right, *what to do* then (the actions). Here are three of the events from the game you'll build, Spell Caster: | When (condition) | Do (actions) | |---|---| | Every tick | Player: set angle toward the mouse | | Mouse: on left button clicked | Player: spawn a Spell | | Spell: on collision with Goblin | Goblin: subtract 1 from health · Spell: destroy | -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You played Spell Caster. Which parts of it do you think were the most work to make, and which did the engine do for you?**

- Which things in the game never stop happening?
- Which things only happen at a certain moment?

<!-- Speaker note: The engine does the repeated, every-moment work (behaviours). The maker writes the rules of the game (events). Most of the work in a Construct game is deciding the rules. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Spell Caster's event sheet has ten events. Not one of them mentions the arrow keys. When you play the game, what will the arrow keys do?**

- Move the goblins
- Move the player only after you add an event for each key
- Move the player
- Nothing, because no event uses them

<!-- Speaker note: What happens: They move the player. The Player object has the 8 Direction behaviour, so the engine moves it with the arrow keys every moment. No event is needed. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: most students say nothing happens because no event uses the keys. Leave it open until they play. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Do the arrow keys work? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Show the three events from the top of the lesson. Tell the class no event mentions the arrow keys. Hands up: will the arrow keys move the player? Leave the answer open until they've built and played it.

<!-- Speaker note: Most will say no. Playing it is the reveal. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* They move the player. The Player object has the 8 Direction behaviour, so the engine moves it with the arrow keys every moment. No event is needed.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct/first-game/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/construct/first-game/?full=step-2#step-2)

<!-- Speaker note: Open Construct at [editor.construct.net](https://editor.construct.net). It runs in the browser: nothing to install, and you don't need to sign in. Choose one way to build the same game: - **The guided tour.** When Construct opens, choose **Take a guided tour**. It points to each thing to click, one step at a time. Best if this is your first time. - **The Beginner's guide.** The [Beginner's guide to Construct 3](https://www.construct.net/en/tutorials/beginners-guide-to-construct-3-1) is the same game as a written tutorial. Good if you'd rather read, want to go back over a step, or missed a lesson. When you're done, press **Preview** (the play button) and play. Shoot some goblins. Try the arrow keys. Before you close the tab, save a copy of your project to your computer. You'll use it again later in this lesson. Was your guess right? Nothing on the event sheet mentions the arrow keys, and the player still moves. That's the 8 Direction behaviour. When you've finished, your event sheet should look like this. Each yellow line is a comment saying what the event below it is for. Check yours against it, top to bottom. Keep it open: you'll use it in the next steps. ![Spell Caster's event sheet, events 1 to 6: two global numbers, GoblinSpeed and Score, then On start of layout, Every tick, Mouse on left button clicked, Spell on collision with Goblin, Goblin health 0 or less, and Goblin is outside layout. Conditions are on the left, actions on the right.](event-sheet-1.png) ![Spell Caster's event sheet, events 7 to 10: for each Goblin within 200 pixels of the player, rotate toward the player; every 3 seconds, create a Goblin; Goblin on collision with Player, destroy the player and show Game Over; on Space pressed when there is no player, reset and restart.](event-sheet-2.png) *Spell Caster is the demo game from Scirra's Beginner's guide to Construct 3 (CC BY 4.0). Screenshots of the finished event sheet in Construct 3.* Students should be able to say: I built Spell Caster in Construct, played it, and checked what the arrow keys do. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Sort them

**What makes each of these happen in Spell Caster: a behaviour, or an event?**

Groups: A behaviour · An event

The player moves with the arrow keys · A spell flies forward after it appears · A goblin walks across the screen · The player turns to face the mouse · A spell appears when you click · A new goblin arrives every 3 seconds

* Answer: The player moves with the arrow keys → A behaviour; A spell flies forward after it appears → A behaviour; A goblin walks across the screen → A behaviour; The player turns to face the mouse → An event; A spell appears when you click → An event; A new goblin arrives every 3 seconds → An event

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: for each sorted item, ask where in Construct you'd look to change it: the object's behaviours, or the event sheet. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Green arrows

**Some events have a green arrow beside the condition, such as "On left button clicked". "Every tick" doesn't have one. What's the difference?**

- A green arrow: once, at the moment. Every tick: over and over
- Green arrow events run first, before the rest
- Green arrow events run only once in the whole game
- No difference: the arrow is just decoration

* Answer: A green arrow: once, at the moment. Every tick: over and over

<!-- Speaker note: The green arrow marks a trigger: it fires once at the moment, such as each click. Every tick runs on every frame, about 60 times a second, which is why the player keeps turning to follow the mouse. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's player drifts forward on its own. Click the line where Nib first goes wrong.**

```
 1  Nib wants the player to move with the arrow keys.
 2  Nib gives the Player object the 8 Direction behaviour.
 3  Nib also adds an event: Every tick, move the Player forward 5 pixels.
 4  Nib plays the game, and the player drifts forward on its own, even with no key pressed.
```

* Answer: line 3

<!-- Speaker note: Line 3: the 8 Direction behaviour already moves the player with the arrow keys. Nib added an event that also moves it, every tick, whether a key is pressed or not. Delete that event. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Where would you look? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Show Spell Caster running. Point at one thing happening (the player turning, a goblin walking, a spell appearing). Students point to where they'd look to change it: the object's behaviours, or the event sheet.

<!-- Speaker note: Behaviours: every moment, done by the engine. Events: a moment or every tick, written by you. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Change one thing



- **Predict the change:** 
- **Try it:** To change a number in an event, double-click it on the event sheet, type the new value, and press **Enter**. Then press **Preview** to play.

<!-- Speaker note: What this step is for: Changing one event and predicting first shows that events are where the game's rules live, and that a small change has a clear effect. For students who need more support: Pair students for the build: one reads the step, one clicks, swapping each event. For early finishers: Make a goblin that's harder to beat (more health) and worth more points, without adding a new event. Which existing events and properties do you change? The hard part, on purpose: The build takes most of the lesson, and fast builders click through the tour without reading what each step is for. Stop the class once the first event is added and ask what the left side and the right side of the row each mean. When students get stuck: The editor says it failed to initialise WebGL. Ask: Which browser are you using? Fix: Try an up-to-date Chrome or Edge, or another laptop. If none work, pair the student with someone whose laptop does. / A student lost their place in the guided tour. Ask: What's the last thing you added? Fix: Open the Beginner's guide and find that step. It's the same game, so they can carry on from there. / A student thinks an event is needed for every movement. Ask: Which object moves, and what behaviours does it have? Fix: Click the object and look at Behaviors in the Properties panel. The behaviour is doing the moving. / A student can't find where to change damage. Ask: At what moment does a goblin get hurt? Fix: When a spell hits it, so look for the event with Spell on collision with Goblin. -->

<!-- Speaker note: Teacher: insist on a prediction before they change the 3. Then ask them to change it back. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happens if…

**You delete the Every tick event. What stops working?**

- The player stops turning toward the mouse, and the score text stops updating
- The player stops moving
- Goblins stop arriving
- Nothing

* Answer: The player stops turning toward the mouse, and the score text stops updating

<!-- Speaker note: Every tick set the player's angle and the status text. Movement is the 8 Direction behaviour, and goblins arrive from the Every 3 seconds event. Ask on mini whiteboards or by show of hands before the reveal. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: stronger spells



- **Find the right event:** 
- **Make it yours:** Ideas for your own change: make the player faster (click the Player, then find the 8 Direction behaviour's speed in the Properties panel), give goblins more hea

<!-- Speaker note: What this step is for: Finding the event and action to change, then making the change, has students use the move on their own: rules live in events, movement in behaviours. -->

<!-- Speaker note: Teacher: ask each student to name their own change as a behaviour change or an event change. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Wider: which goblins lose health?

**Five goblins are on the screen. A spell hits one of them. The event runs: Goblin, subtract 1 from health. How many goblins lose health?**

- Only the goblin the spell hit
- All five goblins
- None, because the action doesn't say which goblin
- The goblin closest to the player

* Answer: Only the goblin the spell hit

<!-- Speaker note: "On collision with Goblin" picks only the goblin that was hit. The actions underneath then apply only to that one. This is called picking. What this step is for: A first look at picking, which is Construct's own big idea: an action applies only to the objects the condition picked. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**In Spell Caster, a spell flies forward after you click. What makes it appear, and what makes it fly?**

* An event makes it appear (on left button clicked, spawn a Spell). Its Bullet behaviour makes it fly.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Construct games (planned): Objects and layouts, then Behaviours, which is the home of the idea planted here. Students who did App Builder apps already know events, variables, sub-events and picking. For students who did MakeCode Arcade: Arcade moves sprites with velocity blocks and a controller block, where Construct uses behaviours. Same job, different tool. -->
