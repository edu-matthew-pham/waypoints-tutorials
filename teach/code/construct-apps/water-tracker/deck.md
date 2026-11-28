---
marp: true
theme: default
html: true
---

# A water tracker

Construct apps · Keep track

<!-- Speaker note: Students build a water tracker with two global variables (Glasses, Goal), an Every tick event that keeps the display up to date, Add and Reset buttons, and a cap. The cap is first built the way beginners often write it (Add 1 left on the On clicked event, the check in a sub-event), so it fails at the goal; students find why and move the action into the sub-event. The Make step adds a goal message with Else and a progress bar. About 60 minutes (Predict 3 min · Build it 20 min · Investigate 12 min · Modify 5 min · Make 20 min). -->

---

## Today

- I can use Every tick to keep what's on screen up to date.
- I can say which actions a sub-event's condition controls.
- I can make a progress bar from a number.

<!-- Speaker note: Before class: The cap in step 7 is wrong on purpose: Add 1 stays on the parent On clicked event, so it runs on every click and the sub-event's condition (Glasses < Goal) controls nothing. The Investigate step finds it; the Modify step fixes it by dragging the action into the sub-event. Every tick runs about 60 times a second. Setting text there is fine. Adding to a variable there is not (it would add 60 a second), which is why the exit question asks about it. These steps were written fresh for this site and have not yet been checked click by click in the current editor. Run through them once before class; Construct updates itself, so a menu name may differ slightly. Pick any goal and thing to track if water doesn't suit your class (pages read, laps, minutes outside). The app is about counting towards a goal, not health advice. Teacher: Build it: everyone clicks 12 times at step 9 before anyone explains. -->

---

## Why it matters

> Most apps show the same numbers in several places. Keeping them all up to date by hand in every button gets messy fast; there's a simpler way.

<!-- Speaker note: In the practice tracker, the Save event changed the total *and* set the text. That works with one button, but with three or four buttons you'd need a Set text in every one, and it's easy to miss one. This time you'll use **Every tick**. Construct checks the event sheet over and over, about 60 times a second. An Every tick event runs on each of those checks, so it can keep the screen in step with the variables, whatever changed them. ![The water tracker: "Glasses: 5 of 8", a progress bar five-eighths full, Add a glass and Reset buttons, and the message "Keep going".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A screen shows the same number in three places: a count, a bar and a message. How could you make sure all three always agree?**

- What if a new button changes the number? What would you have to remember?
- Is there a way to update them without remembering?

<!-- Speaker note: Setting the display in every event is easy to forget. An Every tick event keeps everything in step with the variables, whatever changed them. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The Add button's event only adds 1 to Glasses. It has no Set text. You click Add. Does the count on the screen change?**

- Only after the next click
- No, the screen stays at 0
- Only after you press Reset
- Yes, straight away

<!-- Speaker note: What happens: Yes. The Every tick event sets the text again about 60 times a second, so as soon as Glasses changes, the screen shows it. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: compare with lesson 1, where the screen didn't change without Set text. What's different now? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fconstruct-apps%2Fwater-tracker%2Fstep-2&code=widget%3A+appscreen%0Aapp%3A+water%0Acap%3A+right%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/construct-apps/water-tracker/?full=step-2#step-2)

<!-- Speaker note: This is the finished app you'll build. The Every tick row keeps flashing: it runs all the time, not just when you click. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Yes. The Every tick event sets the text again about 60 times a second, so as soon as Glasses changes, the screen shows it.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct-apps/water-tracker/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/construct-apps/water-tracker/?full=step-3#step-3)

<!-- Speaker note: **Make the screen** 1. Start a **New project** called *Water tracker*. 2. Insert a **Text** object called *GlassText* with the text *Glasses: 0 of 8*. 3. Insert a **Button** called *AddButton* with the text *Add a glass*, and another called *ResetButton* with the text *Reset*. **Variables and the display** 4. In the event sheet, add two global variables: *Glasses* (starting at 0) and *Goal* (starting at 8). 5. Add an event: **System**, **Every tick**. Add the action **GlassText**, **Set text**: `"Glasses: " & Glasses & " of " & Goal` **The buttons** 6. Add an event: **AddButton**, **On clicked**. Add the action **System**, **Add to**, Glasses, 1. 7. Now a cap, so it stops at the goal. Select the AddButton event and press **S** to add a sub-event. Give it the condition **System**, **Compare variable**: Glasses **<** Goal. Leave the Add 1 action where it is, on the On clicked event. 8. Add an event: **ResetButton**, **On clicked**, with the action **System**, **Set value**, Glasses, 0. 9. Preview. Click Add 12 times. What does the screen say? Then click Reset. Keep this version: you'll find out what happened in the next step. Students should be able to say: I built the water tracker as set out, and I clicked Add 12 times to see what happens at the goal. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What did you see?

**You built the cap as in step 7 and clicked Add 12 times, with a goal of 8. What did the screen say?**

- Glasses: 0 of 8
- Glasses: 12 of 8
- Glasses: 8 of 8
- Glasses: 7 of 8

* Answer: Glasses: 12 of 8

<!-- Speaker note: It went past the goal. The Add 1 action sits on the On clicked event, so it runs on every click. The sub-event's condition only controls actions inside the sub-event, and there are none. -->

<!-- Speaker note: Teacher: draw the event and its sub-event on the board; circle which actions belong to which. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the slip

**This is the cap you built. Click the line that lets the count pass the goal.**

```
 1  Event: AddButton on clicked.
 2     Action on that event: System, add 1 to Glasses.
 3     Sub-event below it: System, Glasses < Goal.
 4     The sub-event has no actions.
```

* Answer: line 2

<!-- Speaker note: Line 2: the action is on the parent event, so it runs on every click. The sub-event's condition below it only controls actions inside the sub-event. Move Add 1 into the sub-event. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## When does it run?

**Another event: Glasses = Goal → set Message to "Goal reached!". It has no green arrow. When does it run?**

- Only when the app starts
- Once, the moment Glasses reaches Goal
- Every tick, while Glasses equals Goal
- Only when you click Add

* Answer: Every tick, while Glasses equals Goal

<!-- Speaker note: Conditions without a green arrow are checked every tick. While Glasses equals Goal, the action runs about 60 times a second. That's fine for setting the same text; it would be a problem for adding to a score. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Which actions does the condition control? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Draw the AddButton event with its sub-event as two boxes, one inside the other. Ask students to place the Add 1 action where step 7 put it. Ask: when the condition Glasses < Goal is false, which box is skipped? Is the action in it?

<!-- Speaker note: A sub-event's condition only controls what's inside the sub-event. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Fix the cap

Drag the **Add 1** action from the On clicked event down onto the sub-event, so it sits beside the Compare variable condition. Then preview and click Add 12 times again.

| When (condition) | Do (actions) |
|---|---|
| AddButton: on clicked | |
| ↳ System: Glasses < Goal | System: add 1 to Glasses |

<!-- Speaker note: What this step is for: Moving the action into the sub-event is the fix, and testing at the goal confirms students now know which actions a condition controls. For students who need more support: Give the finished Every tick event as a table and have students check theirs row by row. For early finishers: Let the user set their own goal with a Text Input and a Set goal button (int() from lesson 1). The hard part, on purpose: The deliberate slip in step 7 can feel like a trick. Say up front that the build includes one mistake beginners often make, and the class will find it together. When students get stuck: The count shows the word Glasses or the & signs. Ask: Which parts are inside the quote marks? Fix: Only the words to show go in quotes; the variables and & go outside. / The bar doesn't move. Ask: Which event sets its width, and does it use the right sprite? Fix: The Set width action goes in the Every tick event, on BarFill. / After the fix, Add does nothing. Ask: Where is the Add 1 action now? Fix: It should be inside the sub-event, beside Glasses < Goal, not deleted. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a message and a progress bar



- **Work out the width:** 
- **Build it:** - **Message:** insert a Text called *Message*. Add an event **System**, **Compare variable**, Glasses **=** Goal, with the action **Message**, **Set text** *Goa

<!-- Speaker note: What this step is for: The message and progress bar use the every-tick idea twice, plus an Else from last lesson, so the move is used in a new place. -->

<!-- Speaker note: Teacher: work out one bar width together before students build it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What goes wrong if you put "add 1 to Glasses" in the Every tick event?**

* It adds 1 about 60 times a second, so the count shoots up. Every tick is for keeping the display in step, not for changing the count.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Values journal, with three screens, a choice that carries between them, and a list. -->
