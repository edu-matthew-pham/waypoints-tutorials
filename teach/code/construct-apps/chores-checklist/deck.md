---
marp: true
theme: default
html: true
---

# A chores checklist

Construct apps · Apps that respond

<!-- Speaker note: Students build a checklist of jobs where each box is a Button whose text is ⬜ or ✅. They first build a tick that stays on, then try two separate On clicked events (which cancel each other on one click), then fix it with one On clicked event, a sub-event and an Else. About 60 minutes (Predict 3 min · Build it 30 min · Investigate 10 min · Modify 10 min · Make 7 min). -->

---

## Today

- I can make a button change its own text when it's clicked.
- I can explain why two separate events with the same trigger undo each other.
- I can use a sub-event and Else so that only one of two things happens.

<!-- Speaker note: Before class: The box characters ⬜ and ✅ are emoji. On most laptops they paste fine into a Button's Text property; if a laptop shows empty squares, use [ ] and [x] instead, and change the conditions to match. Keyboard shortcuts in the event sheet: S adds a sub-event, X adds an Else, B adds a blank sub-event (no condition). Select the event first. These steps were written fresh for this site and have not yet been checked click by click in the current editor. Run through them once before class; Construct updates itself, so a menu name may differ slightly. A Button's Type property can be Checkbox, which ticks and unticks by itself (On checked, On unchecked). Mention it, but the lesson builds the toggle by hand so the logic is visible. The one idea: on one click, every event whose conditions are true runs, top to bottom. One trigger with two branches (a sub-event and an Else) means exactly one runs. Teacher: Build it: at step 10, ask a pair to explain what happened in order: first event, then second event. -->

---

## Why it matters

> A tick box looks like the simplest thing on a screen. Making one that turns on and off shows how apps choose between two things to do.

<!-- Speaker note: Today's prototype is a list of jobs, each with a box beside it. Click the box and it shows a tick. Click again and the tick goes. A Construct **Button** can be the box: its text is just an empty-box character, ⬜, and an event changes it to a tick, ✅. ![The chores checklist: a title "My jobs today" and three jobs, each with a box beside it. Two are ticked.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A light switch, a mute button, a like button: what do they all have in common, and how does each one know what to do when you press it?**

- What does the button need to check before it does anything?
- What are the two things it could do?

<!-- Speaker note: Each is a toggle: one press, then one of two outcomes depending on what it is now. In Construct that's one event with a sub-event and an Else. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The box shows ⬜. These two events are the only ones on the sheet. You click the box once. What does it show?**

- ⬜, as if nothing happened
- An error message
- It flickers between them forever
- ✅

<!-- Speaker note: What happens: It still shows ⬜. On one click both events run, top to bottom. The first changes ⬜ to ✅, then the second sees ✅ and changes it straight back. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: most choose ✅. Leave it open; step 10 is the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fconstruct-apps%2Fchores-checklist%2Fstep-2&code=widget%3A+appscreen%0Aapp%3A+chores%0Aflat%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/construct-apps/chores-checklist/?full=step-2#step-2)

<!-- Speaker note: This is the version from the prediction. Watch the event sheet: which rows light up on one click? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It still shows ⬜. On one click both events run, top to bottom. The first changes ⬜ to ✅, then the second sees ✅ and changes it straight back.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct-apps/chores-checklist/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/construct-apps/chores-checklist/?full=step-3#step-3)

<!-- Speaker note: **Make the screen** 1. Start a **New project** called *Chores checklist*. 2. Insert a **Text** object at the top with the text *My jobs today*. 3. Choose three jobs. Insert a **Text** object for each one, in a column, such as *Make my bed*. 4. Insert a **Button** beside the first job. Set its Text to ⬜ (copy it from here) and its Name to *BedBox*. Make it a small square. 5. Add a button beside each other job the same way, with names that match, such as *FeedBox* and *HomeworkBox*. **A tick that stays on** 6. In the event sheet, add **BedBox**, **On clicked**. Add the action **BedBox**, **Set text**, and type `"✅"`. 7. Preview and click the box. It ticks. Click again: it stays ticked. **Try two events (and watch them cancel)** 8. Add a condition to that event: right-click it, **Add another condition**, **BedBox**, **Compare text**, and type ⬜. 9. Add a second event the same way, but checking for ✅ and setting the text to ⬜. 10. Preview and click. Nothing seems to happen. That's your prediction. **One event, two branches** 11. Delete both events. Add one event: **BedBox**, **On clicked**, with no other condition and no action. 12. Select it and press **S** to add a **sub-event**. Give the sub-event the condition **BedBox**, **Compare text**, ⬜ and the action **Set text** to ✅. 13. Select the sub-event and press **X** to add an **Else** below it. Give the Else the action **Set text** to ⬜. 14. Preview. Click to tick, click again to untick. Then do the same for the other boxes. Your event should look like this: | When (condition) | Do (actions) | |---|---| | BedBox: on clicked | | | ↳ BedBox: text is "⬜" | BedBox: set text to "✅" | | ↳ Else | BedBox: set text to "⬜" | Students should be able to say: I built the checklist. With two separate events the box didn't change. With one event, a sub-event and an Else, it ticks and unticks. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Trace a click

**With the sub-event and Else, the box shows ✅. You click it once. What happens?**

- Neither runs, because ✅ isn't ⬜
- The Else runs, so it shows ⬜
- Both run, so it shows ⬜ then ✅
- The sub-event runs, so it stays ✅

* Answer: The Else runs, so it shows ⬜

<!-- Speaker note: The click triggers the event once. Its sub-event checks for ⬜, which is false, so the Else runs instead and sets the text to ⬜. Exactly one branch runs per click. -->

<!-- Speaker note: Teacher: draw the event on the board with the two branches as arrows. Only one arrow is taken per click. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's box won't untick properly. Click the line where Nib first goes wrong.**

```
 1  Nib wants the box to tick on one click and untick on the next.
 2  Nib adds an event: BedBox on clicked, and text is "⬜", set text to "✅".
 3  Nib adds a second event: BedBox on clicked, and text is "✅", set text to "⬜".
 4  Nib clicks the box, and it still shows ⬜.
```

* Answer: line 3

<!-- Speaker note: Line 3: a second separate On clicked event also runs on the same click, straight after the first, and undoes it. The fix is one On clicked event with a sub-event and an Else. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why build it?

**A Button's Type can be set to Checkbox, which ticks and unticks by itself. Why build it with events here?**

- Events make the app run faster
- You can see how it works and use it for other things
- Checkbox buttons don't work in the free edition
- Checkbox buttons can't be clicked twice

* Answer: You can see how it works and use it for other things

<!-- Speaker note: The built-in checkbox hides the logic. Building it with a sub-event and Else shows how a toggle works, and the same pattern works for anything: showing and hiding, colours, sounds. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the event sheet <span style="font-size:.6em;color:#64748b">(5 min)</span>

Two students stand up as the two flat events, each with a card: "If ⬜, make it ✅" and "If ✅, make it ⬜". Hold up ⬜ and say "click". They act in order. The class watches the box end where it started. Then redo it with one student as the event and two as the branches, where only one may act.

<!-- Speaker note: Every matching event runs on one click, in order. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Count what's done



- **Where does it go?:** 
- **Build it:** Add a global variable *Done* and a Text object called *DoneText*. In each box's ⬜ branch add 1 to Done; in each Else subtract 1. Then set DoneText to `"Done: " 

<!-- Speaker note: What this step is for: Counting jobs done brings back last lesson's variable and Set text inside the two branches, so the review needs both moves together. For students who need more support: Give pairs the finished event as a picture (the table at the end of Build it) to copy, then ask them to explain each row. For early finishers: Show "All done!" when Done equals the number of jobs. Which event checks it, and when? The hard part, on purpose: Building the version that doesn't work on purpose (steps 8 to 10) feels like wasted effort, and some students skip it. It's the point of the lesson: they need to see two flat events cancel before the sub-event makes sense. When students get stuck: The box doesn't tick at all. Ask: What does the Compare text condition check for? Fix: It must be exactly the same character as the button's text. Copy and paste ⬜ from the button's Text property. / S or X does nothing. Ask: Is the event selected (highlighted)? Fix: Click the event's condition first, then press the key. / Done goes up when unticking. Ask: Which branch has the add 1? Fix: Add 1 belongs in the ⬜ branch (it's becoming ticked); subtract 1 in the Else. -->

<!-- Speaker note: Teacher: this is the review step. Ask which branch means 'just finished a job'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a checklist for someone

Make a checklist for someone you know: a packing list, a morning routine, or jobs for a club. Use their words for each job. Add a **Reset** button that unticks everything and sets Done to 0.

Then watch them use it without helping. What did they expect to happen that didn't?

<!-- Speaker note: What this step is for: Building for a real person moves the prototype from a lesson exercise to design: the user's words, the user's jobs, then watching them use it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A light switch app has two events: On clicked and light is off → turn on; On clicked and light is on → turn off. What happens when you click, and how do you fix it?**

* Both run on one click, so it turns on then straight off. Fix: one On clicked event with a sub-event (light is off → turn on) and an Else (turn off).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Water tracker, which keeps a display up to date every tick and checks a goal. -->
