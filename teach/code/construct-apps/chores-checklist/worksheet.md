---
title: "A chores checklist"
subtitle: "Construct apps · Apps that respond · Lesson 2"
---

# A chores checklist

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A tick box looks like the simplest thing on a screen. Making one that turns on and off shows how apps choose between two things to do.


:::teacher-note

**In one sentence:** Students build a checklist of jobs where each box is a Button whose text is ⬜ or ✅. They first build a tick that stays on, then try two separate On clicked events (which cancel each other on one click), then fix it with one On clicked event, a sub-event and an Else.

**Students should be able to say:** I can make a button change its own text when it's clicked. I can explain why two separate events with the same trigger undo each other. I can use a sub-event and Else so that only one of two things happens.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

| When (condition) | Do (actions) |
|---|---|
| BedBox: on clicked · BedBox: text is "⬜" | BedBox: set text to "✅" |
| BedBox: on clicked · BedBox: text is "✅" | BedBox: set text to "⬜" |

:::keep-together

**The box shows ⬜. These two events are the only ones on the sheet. You click the box once. What does it show?**

☐ ⬜, as if nothing happened

☐ An error message

☐ It flickers between them forever

☐ ✅

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** It still shows ⬜. On one click both events run, top to bottom. The first changes ⬜ to ✅, then the second sees ✅ and changes it straight back.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Which branch runs?


:::keep-together

### Trace a click

**With the sub-event and Else, the box shows ✅. You click it once. What happens?**

☐ Neither runs, because ✅ isn't ⬜

☐ The Else runs, so it shows ⬜

☐ Both run, so it shows ⬜ then ✅

☐ The sub-event runs, so it stays ✅

:::


:::teacher-note

**Answer:** The Else runs, so it shows ⬜

The click triggers the event once. Its sub-event checks for ⬜, which is false, so the Else runs instead and sets the text to ⬜. Exactly one branch runs per click.

:::


:::keep-together

### Find Nib's mistake

**Nib's box won't untick properly. Click the line where Nib first goes wrong.**

```
 1  Nib wants the box to tick on one click and untick on the next.
 2  Nib adds an event: BedBox on clicked, and text is "⬜", set text to "✅".
 3  Nib adds a second event: BedBox on clicked, and text is "✅", set text to "⬜".
 4  Nib clicks the box, and it still shows ⬜.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: a second separate On clicked event also runs on the same click, straight after the first, and undoes it. The fix is one On clicked event with a sub-event and an Else.

:::


:::keep-together

### Why build it?

**A Button's Type can be set to Checkbox, which ticks and unticks by itself. Why build it with events here?**

☐ Events make the app run faster

☐ You can see how it works and use it for other things

☐ Checkbox buttons don't work in the free edition

☐ Checkbox buttons can't be clicked twice

:::


:::teacher-note

**Answer:** You can see how it works and use it for other things

The built-in checkbox hides the logic. Building it with a sub-event and Else shows how a toggle works, and the same pattern works for anything: showing and hiding, colours, sounds.

:::


:::typical

## Count what's done


**Where does it go?.** 

**Build it.** Add a global variable *Done* and a Text object called *DoneText*. In each box's ⬜ branch add 1 to Done; in each Else subtract 1. Then set DoneText to `"Done: " & Done & " of 3"` in both branches.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: a checklist for someone

Make a checklist for someone you know: a packing list, a morning routine, or jobs for a club. Use their words for each job. Add a **Reset** button that unticks everything and sets Done to 0.

Then watch them use it without helping. What did they expect to happen that didn't?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**A light switch app has two events: On clicked and light is off → turn on; On clicked and light is on → turn off. What happens when you click, and how do you fix it?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Both run on one click, so it turns on then straight off. Fix: one On clicked event with a sub-event (light is off → turn on) and an Else (turn off).

:::

