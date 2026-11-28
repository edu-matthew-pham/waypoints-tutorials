---
marp: true
theme: default
html: true
---

# A water tracker

App Builder apps · Keep track

<!-- Speaker note: Students build a water tracker with two variables (Glasses, Goal), an Every tick event that keeps the display up to date, Add and Reset buttons, and a cap. The cap is first built the way beginners often write it (Add 1 left on the AddButton event, the check in a sub-event), so it fails at the goal; students find why and move the action into the sub-event. The Make step adds a goal message with Else and a progress bar. About 60 minutes (Try 5 min · Build 1–3 20 min · Check 8 min · Build 4 5 min · Make it yours 20 min). -->

---

## Today

- I can use Every tick to keep what's on screen up to date.
- I can say which actions a sub-event's condition controls.
- I can make a progress bar from a number.

<!-- Speaker note: Before class: The cap in Build 2 is wrong on purpose: Add 1 stays on the parent AddButton event, so it runs on every click and the sub-event's condition (Glasses < Goal) controls nothing. The Investigate step finds it; the Modify step fixes it by deleting the action and adding it again inside the sub-event (App Builder has no drag between events; the ⋯ menu and + Action do it). Every tick runs about 60 times a second. Setting text there is fine. Adding to a variable there is not (it would add 60 a second), which is why the exit question asks about it. The Build step's tick boxes accept the slip on purpose (they check the cap as built); Build 4's tick only comes once Add 1 is inside the sub-event. Pick any goal and thing to track if water doesn't suit your class (pages read, laps, minutes outside). The app is about counting towards a goal, not health advice. Teacher: Before Build 2 (whole class, on the deck): the Add event only adds 1, with no Set text. Does the count change? Compare with lesson 1. Teacher: Build 3: everyone clicks 12 times before anyone explains. Teacher: Check: draw the event and its sub-event on the board; circle which actions belong to which. -->

---

## Why it matters

> Most apps show the same numbers in several places. Keeping them all up to date by hand in every button gets messy fast; there's a simpler way.

<!-- Speaker note: In the practice tracker, the Save event changed the total *and* set the text. That works with one button, but with three or four buttons you'd need a Set text in every one, and it's easy to miss one. This time you'll use **Every tick**. App Builder checks the events over and over, about 60 times a second. An Every tick event runs on each of those checks, so it can keep the screen in step with the variables, whatever changed them. ![The water tracker: "Glasses: 5 of 8", a progress bar five-eighths full, Add a glass and Reset buttons, and the message "Keep going".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A screen shows the same number in three places: a count, a bar and a message. How could you make sure all three always agree?**

- What if a new button changes the number? What would you have to remember?
- Is there a way to update them without remembering?

<!-- Speaker note: Setting the display in every event is easy to forget. An Every tick event keeps everything in step with the variables, whatever changed them. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the finished app you'll build, open on the **Run** tab. Under it, the Every tick row keeps flashing: it runs all the time, not just when you click.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-2#step-2)

<!-- Speaker note: The screen is made for you: GlassText, AddButton and ResetButton. 1. Under **Variables** on the left, add *Glasses* starting at 0, and *Goal* starting at 8. 2. On the **Events** tab, choose **+ Add event**, **+ Condition**, **System**, **Every tick**. 3. Add the action **GlassText**, **Set GlassText text to …**: `"Glasses: " & Glasses & " of " & Goal` -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-3#step-3)

<!-- Speaker note: 1. Add an event: **AddButton**, **AddButton is clicked**. Add the action **Variables**, **Add … to variable**: 1 to Glasses. Click Add in the preview: the count changes, because Every tick sets the text. 2. Now a cap, so it stops at the goal. Click the AddButton event, then its **⋯** button, and choose **Add a sub-event**. Give the sub-event the condition **Variables**, **Variable … … …**: Glasses **<** Goal. Leave the Add 1 action where it is, on the AddButton event. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-4#step-4)

<!-- Speaker note: 1. Add an event: **ResetButton is clicked**, with the action **Set variable … to …**: Glasses to 0. 2. In the preview, click Add 12 times. What does the screen say? Then click Reset. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What did you see?

**You built the cap as in Build 2 and clicked Add 12 times, with a goal of 8. What did the screen say?**

- Glasses: 0 of 8
- Glasses: 12 of 8
- Glasses: 8 of 8
- Glasses: 7 of 8

* Answer: Glasses: 12 of 8

<!-- Speaker note: It went past the goal. The Add 1 action sits on the AddButton event, so it runs on every click. The sub-event's condition only controls actions inside the sub-event, and there are none. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the slip

**This is the cap you built. Click the line that lets the count pass the goal.**

```
 1  Event: when AddButton is clicked.
 2     Action on that event: add 1 to variable Glasses.
 3     Sub-event below it: Variable Glasses < Goal.
 4     The sub-event has no actions.
```

* Answer: line 2

<!-- Speaker note: Line 2: the action is on the parent event, so it runs on every click. The sub-event's condition below it only controls actions inside the sub-event. Move Add 1 into the sub-event. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Which actions does the condition control? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Draw the AddButton event with its sub-event as two boxes, one inside the other. Ask students to place the Add 1 action where step 7 put it. Ask: when the condition Glasses < Goal is false, which box is skipped? Is the action in it?

<!-- Speaker note: A sub-event's condition only controls what's inside the sub-event. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-6#step-6](https://tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-6#step-6)

<!-- Speaker note: Move **Add 1** into the sub-event: click the action on the AddButton event and choose **Delete**, then click the sub-event, choose **+ Action** and add it there. Then click Add 12 times in the preview again. | When (condition) | Do (actions) | |---|---| | ⚡ AddButton is clicked | | | ↳ Variable Glasses < Goal | Add 1 to variable Glasses | -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: a message and a progress bar



- **Work out the width:** 
- **Build it:** - **Message:** add a Text and rename it *Message*. Add an event **Variables**, **Variable … … …**: Glasses **=** Goal, with the action **Set Message text to** *

[Open this step](https://tutorials.learningwaypoints.com/code/apps/water-tracker/?full=step-7#step-7)

<!-- Speaker note: What this step is for: The message and progress bar use the every-tick idea twice, plus an Else from last lesson, so the move is used in a new place. For students who need more support: Give the finished Every tick event as a table and have students check theirs row by row. For early finishers: Let the user set their own goal with a text input and a Set goal button (int() from lesson 1). The hard part, on purpose: The deliberate slip in Build 2 can feel like a trick. Say up front that the build includes one mistake beginners often make, and the class will find it together. When students get stuck: The count shows the word Glasses or the & signs. Ask: Which parts are inside the quote marks? Fix: Only the words to show go in quotes; the variables and & go outside. / The bar doesn't move. Ask: Which event sets its width, and is it on BarFill? Fix: The Set BarFill width action goes in the Every tick event. / After the fix, Add does nothing. Ask: Where is the Add 1 action now? Fix: It should be inside the sub-event, beside Glasses < Goal, not deleted. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What goes wrong if you put "add 1 to Glasses" in the Every tick event?**

* It adds 1 about 60 times a second, so the count shoots up. Every tick is for keeping the display in step, not for changing the count.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Values journal, with three screens, a choice that carries between them, and a list. -->
