---
title: "A water tracker"
subtitle: "Construct apps · Keep track · Lesson 3"
---

# A water tracker

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Most apps show the same numbers in several places. Keeping them all up to date by hand in every button gets messy fast; there's a simpler way.


:::teacher-note

**In one sentence:** Students build a water tracker with two global variables (Glasses, Goal), an Every tick event that keeps the display up to date, Add and Reset buttons, and a cap. The cap is first built the way beginners often write it (Add 1 left on the On clicked event, the check in a sub-event), so it fails at the goal; students find why and move the action into the sub-event. The Make step adds a goal message with Else and a progress bar.

**Students should be able to say:** I can use Every tick to keep what's on screen up to date. I can say which actions a sub-event's condition controls. I can make a progress bar from a number.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict

| When (condition) | Do (actions) |
|---|---|
| Every tick | GlassText: set text to "Glasses: " & Glasses & " of " & Goal |
| AddButton: on clicked | System: add 1 to Glasses |

:::keep-together

**The Add button's event only adds 1 to Glasses. It has no Set text. You click Add. Does the count on the screen change?**

☐ Only after the next click

☐ No, the screen stays at 0

☐ Only after you press Reset

☐ Yes, straight away

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Yes. The Every tick event sets the text again about 60 times a second, so as soon as Glasses changes, the screen shows it.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Did the cap work?


:::keep-together

### What did you see?

**You built the cap as in step 7 and clicked Add 12 times, with a goal of 8. What did the screen say?**

☐ Glasses: 0 of 8

☐ Glasses: 12 of 8

☐ Glasses: 8 of 8

☐ Glasses: 7 of 8

:::


:::teacher-note

**Answer:** Glasses: 12 of 8

It went past the goal. The Add 1 action sits on the On clicked event, so it runs on every click. The sub-event's condition only controls actions inside the sub-event, and there are none.

:::


:::keep-together

### Find the slip

**This is the cap you built. Click the line that lets the count pass the goal.**

```
 1  Event: AddButton on clicked.
 2     Action on that event: System, add 1 to Glasses.
 3     Sub-event below it: System, Glasses < Goal.
 4     The sub-event has no actions.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: the action is on the parent event, so it runs on every click. The sub-event's condition below it only controls actions inside the sub-event. Move Add 1 into the sub-event.

:::


:::keep-together

### When does it run?

**Another event: Glasses = Goal → set Message to "Goal reached!". It has no green arrow. When does it run?**

☐ Only when the app starts

☐ Once, the moment Glasses reaches Goal

☐ Every tick, while Glasses equals Goal

☐ Only when you click Add

:::


:::teacher-note

**Answer:** Every tick, while Glasses equals Goal

Conditions without a green arrow are checked every tick. While Glasses equals Goal, the action runs about 60 times a second. That's fine for setting the same text; it would be a problem for adding to a score.

:::


:::typical

## Fix the cap

Drag the **Add 1** action from the On clicked event down onto the sub-event, so it sits beside the Compare variable condition. Then preview and click Add 12 times again.

| When (condition) | Do (actions) |
|---|---|
| AddButton: on clicked | |
| ↳ System: Glasses < Goal | System: add 1 to Glasses |

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Make: a message and a progress bar


**Work out the width.** 

**Build it.** - **Message:** insert a Text called *Message*. Add an event **System**, **Compare variable**, Glasses **=** Goal, with the action **Message**, **Set text** *Goal reached!*. Press **X** to add an Else that sets it to *Keep going*.
- **Progress bar:** insert a **Sprite** called *BarFill*: draw a blue rectangle and make it 400 wide. Insert a grey one called *BarBack* the same size, right-click it and choose to send it to the back, and put it behind BarFill. In the Every tick event add **BarFill**, **Set width**: `Glasses / Goal * 400`

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What goes wrong if you put "add 1 to Glasses" in the Every tick event?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It adds 1 about 60 times a second, so the count shoots up. Every tick is for keeping the display in step, not for changing the count.

:::

