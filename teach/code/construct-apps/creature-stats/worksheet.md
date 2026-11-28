---
title: "Creature stats"
subtitle: "Construct apps · One object · Lesson 5"
---

# Creature stats

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Character select screens, product pages and contact lists all work the same way: one design, many copies, each with its own details.


:::teacher-note

**In one sentence:** Students build a character viewer: one Creature sprite with three animation frames, three copies (instances) each with its own instance variables, and one Mouse on object clicked event that shows the clicked creature's name, stats as text and bars, and ability. They predict and test that clicking picks one copy, find Nib's mistake (expecting an action to fade every creature), add a fourth creature without changing the event sheet, then design their own set.

**Students should be able to say:** I can make several characters from one sprite, each with its own values. I can explain the difference between an object type, an instance and an instance variable. I can use one click event that works for whichever character is clicked.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Three copies of the Creature sprite have the instance variable name: Emberfox, Tidecrab and Mossbear. The event is: Mouse on object clicked (Creature) → set NameText to Creature.name. You click the Tidecrab. What does NameText show?**

☐ All three names

☐ Tidecrab

☐ Creature.name

☐ Emberfox, the first copy

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Tidecrab. On object clicked picks the copy you clicked, so for the rest of that event Creature.name means that copy's name.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## One event, many creatures


:::keep-together

### Which ones fade?

**You add one more action to the click event: Creature, set opacity to 40 (faded). You click the Mossbear. Which creatures fade?**

☐ Only the Mossbear

☐ None, because opacity needs Every tick

☐ All three

☐ The two you didn't click

:::


:::teacher-note

**Answer:** Only the Mossbear

On object clicked picks the copy you clicked. Every Creature action in that event applies to the picked copy only.

:::


:::keep-together

### Find Nib's mistake

**Nib wanted the other two creatures to fade. Click the line where Nib's thinking goes wrong.**

```
 1  Nib wants the two creatures you didn't click to fade, so the clicked one stands out.
 2  Nib uses the event: Mouse on object clicked, Creature.
 3  Nib adds the action: Creature, set opacity to 40, so the other creatures fade.
 4  Nib clicks the Tidecrab, and only the Tidecrab fades.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: in this event the click has picked the Tidecrab, so Creature, set opacity only fades the Tidecrab. To fade the others, you'd first set every creature faded in an event that doesn't pick, then set the clicked one back.

:::


:::keep-together

### Why instance variables?

**Why use instance variables here, not global variables?**

☐ Global variables can't hold text

☐ Global variables reset on every click

☐ Each creature needs its own values; a global holds one

☐ Instance variables are quicker to type

:::


:::teacher-note

**Answer:** Each creature needs its own values; a global holds one

A global variable holds one value for the whole app. Each creature needs its own power, speed and so on, so they're instance variables: same names, different values in each copy.

:::


:::typical

## A fourth creature


**Predict the change.** 

**Try it.** Add a fourth frame in the animation editor, paste a fourth copy of the sprite, set its Initial frame to 3, and fill in its instance variables. Then preview and click it.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: your own character cards

Choose your own set: made-up creatures, pets, robots, plants or anything with at least three characters. Give each one at least three stats and a weakness as well as an ability. Make the numbers fair: be ready to say why the strongest one isn't the best at everything.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A game has 10 coins, each a copy of Coin with an instance variable value. The player touches one coin. The event adds Coin.value to Score. Whose value is added?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Only the touched coin's: the collision picked that copy, so Coin.value means its value.

:::

