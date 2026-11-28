---
marp: true
theme: default
html: true
---

# Creature stats

App Builder apps · One object

<!-- Speaker note: Students build a character viewer: one Creature Image with three copies, each with its own object variables, and one Creature is clicked event that shows the clicked creature's name, stats as text and bars, and ability. They predict and test that clicking picks one copy, find Nib's mistake (expecting Hide to hide every creature), add a fourth creature without changing the events, then design their own set. About 75 minutes (Try 5 min · Build 1–3 35 min · Check 8 min · Make it yours 25 min). -->

---

## Today

- I can make several characters from one Image, each with its own values.
- I can explain the difference between an object, its copies and its object variables.
- I can use one click event that works for whichever character is clicked.

<!-- Speaker note: Before class: The creatures are made up (Blaze, Tide, Zip). Students' own sets in Make should be made up or everyday things too; steer away from real people. Built-in pictures are fine; students can upload their own drawings on an Image. Object variables are added once (they belong to the object) but filled in per copy: click a copy, then set its values in Properties. Vocabulary (for teachers, and for students who ask): the object is like a class in other languages, each copy is an instance, and object variables are its properties. Picking is the big idea: a condition picks the copies it's true for, and actions in that event apply only to those. App Builder picks like Construct, so this carries over to the games course. The code checks read the object variables' names, not each copy's values, so Build 1 (each creature has its own values) is worth checking by eye. Teacher: Before Build 2 (whole class, on the deck): one click event, three creatures. Click Tide: whose name shows? Ask how the app could know which creature you mean. Teacher: Build 1: check that every creature has its own values before anyone builds the event. Teacher: Check: act it out: three students are creatures, one clicks; only the clicked one obeys the next instruction. -->

---

## Why it matters

> Games, shops and sports apps all show cards of things with stats. Behind them, one design is copied many times, and each copy keeps its own values.

<!-- Speaker note: Today's prototype shows three made-up creatures: Blaze, Tide and Zip. Click one, and its name, stats and special ability appear below. You could make three separate Images, each with its own events. Instead you'll use **one** Image object with three copies. **Object variables** belong to the object, but each copy keeps its own values: Blaze's power and Tide's power are different numbers. ![The creature viewer: three creatures in a row, and below them Tide's name, its power, speed and defence as bars, and its special ability.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A game's character select screen has 20 characters. Did someone write 20 separate click events? How else could it work?**

- What's the same about every character card?
- What's different about each one?

<!-- Speaker note: One design (an object), many copies, each with its own details (object variables). One event that reads whichever copy was clicked. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the finished app you'll build, open on the **Run** tab. The event list under the app has only one event.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-2#step-2)

<!-- Speaker note: The screen is made for you: three copies of one Image called *Creature*, Texts for the stats, and three Boxes for the bars (*PowerBar*, *SpeedBar*, *DefenceBar*). Click any copy: the sidebar says *Creature*, with *3 copies*. 1. Click a creature. In Properties, under **Object variables**, add *name* and *ability* (start them empty), then *power*, *speed* and *defence* (start them at 0). 2. Click each creature in turn and fill in its own values: Blaze, Tide and Zip, numbers from 0 to 100, and an ability each. Make up the numbers, but be ready to say why each creature has them. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-3#step-3)

<!-- Speaker note: 1. On the Events tab: **Creature is clicked**. 2. Add **Set NameText text to** `Creature.name` 3. Add **Set PowerText text to** `"Power: " & Creature.power`, and the same for speed and defence. 4. Add **Set AbilityText text to** `"Special: " & Creature.ability` 5. Click each creature in the preview. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-4#step-4)

<!-- Speaker note: A full bar is 200 wide. In the same event, add **PowerBar**, **Set PowerBar width to** `Creature.power / 100 * 200`, and the same for the other two bars. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which ones hide?

**You add one more action to the click event: Hide Creature. You click Zip. Which creatures disappear?**

- All three
- The two you didn't click
- Only Zip
- None, because Hide needs Every tick

* Answer: Only Zip

<!-- Speaker note: Creature is clicked picks the copy you clicked. Every Creature action in that event applies to the picked copy only. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib wanted the other two creatures to hide. Click the line where Nib's thinking goes wrong.**

```
 1  Nib wants the two creatures you didn't click to hide, so the clicked one stands out.
 2  Nib uses the event: Creature is clicked.
 3  Nib adds the action: Hide Creature, so the other creatures disappear.
 4  Nib clicks Tide, and only Tide disappears.
```

* Answer: line 3

<!-- Speaker note: Line 3: in this event the click has picked Tide, so Hide Creature only hides Tide. To hide the others you'd hide every creature in an event that doesn't pick, then show the clicked one. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the creatures <span style="font-size:.6em;color:#64748b">(5 min)</span>

Three students stand at the front, each holding a card with a name and three stats. You "click" one by pointing. Read out the event's actions ("Creature: hold up your power card", "Creature: sit down"). Only the picked student acts.

<!-- Speaker note: Creature is clicked picks one copy; the event's actions apply to it alone. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: a fourth creature, then your own set



- **A fourth creature:** Click a creature, then choose **⋯**, **Duplicate** in the sidebar to make a fourth copy. Move it into the row, choose its picture, and fill in its object variab
- **Your own set:** Choose your own set: made-up creatures, pets, robots, plants or anything with at least three characters. Upload your own pictures if you like. Give each one at 

[Open this step](https://tutorials.learningwaypoints.com/code/apps/creature-stats/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Adding a creature without touching the events shows the payoff of object variables and picking; a set of their own uses the whole pattern in a new context. For students who need more support: Give pairs the object variable values filled in (open the Try it app), so they can spend the time on the event. For early finishers: A comparison mode: click two creatures and show their stats side by side (hint: remember the first one's values in sidebar variables). The hard part, on purpose: Filling in object variables for each copy: students set the values on one creature and assume the others have them. Each copy must be clicked and filled in separately. When students get stuck: Every creature shows the same stats. Ask: Did you fill in the values on each creature separately? Fix: Click each copy on the Design tab and set its own object variables in Properties. / Creature.power shows an error: there's no object called Creature. Ask: Is the event on the screen that has the creatures? Fix: Check the Events tab's heading names the creatures' screen. / A bar is far too long or too short. Ask: What should 100 power give? Fix: Creature.power / 100 * 200: 100 power is the full 200 width. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**An app has 10 coins, each a copy of Coin with an object variable value. The player clicks one coin. The event adds Coin.value to Score. Whose value is added?**

* Only the clicked coin's: the click picked that copy, so Coin.value means its value.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Tidy up the journal (a function and an All screens event), then the challenge, a prototype of their own for a real user. In the games course, picking and copies come back with many enemies on screen. -->
