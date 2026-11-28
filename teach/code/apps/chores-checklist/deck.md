---
marp: true
theme: default
html: true
---

# A chores checklist

App Builder apps · Apps that respond

<!-- Speaker note: Students make a checklist of jobs as tick boxes (Toggles with the Tick box look, which switch themselves), then build a 🌙 Dark / ☀️ Light button by hand with a true/false variable Dark. They first build a button that goes dark and stays dark, then try two separate click events (which cancel each other on one click), then fix it with one click event, a sub-event and an Else. About 60 minutes (Try 5 min · Build (five short steps) 32 min · Check 8 min · Make it yours 15 min). -->

---

## Today

- I can turn a Toggle into a tick box and use it in a list.
- I can change colours while an app runs, and keep on or off in a true/false variable.
- I can explain why two separate events with the same trigger undo each other.
- I can use a sub-event and Else so that only one of two things happens.

<!-- Speaker note: Before class: Needs App Builder 1.11 or later (the tick box look is 1.10, colours while the app runs are 1.11). The lesson's playground already has it. The jobs are Toggles. Look: Tick box changes only how they look: BedJob.on is true or false either way, and "is switched" and "is on" work the same. A Toggle can't be given a colour, so the jobs sit on a light card (a Box) that stays light in dark mode. Sub-events and Else are added from an event's ⋯ menu (Add a sub-event, Add an Else below). Select the event first by clicking it. Dark is a true/false variable: it starts at false. Conditions compare it with = (Variable Dark = false). In a formula, App Builder's if() needs a comparison too: if(Dark = true, "On", "Off"), not if(Dark, …). The emoji ☀️ and 🌙 paste fine on most laptops; if one shows an empty square, use "Light" and "Dark" instead, in the actions and in the button's text. The one idea: on one click, every event whose conditions are true runs, top to bottom. One trigger with two branches (a sub-event and an Else) means exactly one runs. Teacher: Before Build 3 (whole class, on the deck): two events, one click: what does the screen show? Most say dark. Leave it open; Build 3 is the reveal. Teacher: Build 3: ask a pair to explain what happened in order: first event, then second event, and what Dark was each time. Teacher: Check: draw the event on the board with the two branches as arrows. Only one arrow is taken per click. Teacher: After Build 5: point back to the tick boxes. Each one is the same switch, built in: it remembers on or off, and one click flips it. -->

---

## Why it matters

> A dark mode button looks like the simplest thing in an app. Making one that switches back shows how apps choose between two things to do.

<!-- Speaker note: Today's prototype is a list of jobs to tick off, and a button that switches the screen between light and dark. The ticking is built in: a **Toggle** can look like a tick box. The light and dark button you build yourself, and it needs the lesson's one big idea. ![The chores checklist twice: light, with a "🌙 Dark" button, and dark, with a "☀️ Light" button. Two jobs are ticked.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A light switch, a mute button, a dark mode button: what do they all have in common, and how does each one know what to do when you press it?**

- What does the button need to check before it does anything?
- What are the two things it could do?

<!-- Speaker note: Each is a toggle: one press, then one of two outcomes depending on what it is now. In App Builder that's one event with a sub-event and an Else. The tick boxes in Build 1 are App Builder's built-in toggle; the dark mode button is the same idea built by hand. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the checklist you'll build, open on the **Run** tab. Tick and untick the jobs. Click **🌙 Dark** a few times: dark, then light, then dark. The event list beside the app lights up each time an event runs.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-2#step-2)

<!-- Speaker note: The screen is made for you: a title, three jobs on a light card, and a button called *ModeButton*. Each job is a **Toggle**, an on/off switch. (You can change the jobs to your own at the end.) 1. Click *Make my bed* to select it. In **Properties**, set **Look** to **Tick box**. 2. Do the same for the other two jobs. 3. Run it and tick a job, then untick it. You didn't write an event: a Toggle switches itself. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-3#step-3)

<!-- Speaker note: The app has a variable, *Dark*, made for you on the left. It starts at `false`: the screen isn't dark yet. A variable that is only ever `true` or `false` is a **true/false** variable. 1. On the **Events** tab, choose **+ Add event**, **+ Condition**, **ModeButton**, **ModeButton is clicked**. 2. Add four actions: - **Variables**, **Set variable Dark to** `true` - **Screen**, **Set screen background to** `"#1c2333"` (a dark blue) - **Title**, **Set Title colour to** `"white"` - **ModeButton**, **Set ModeButton text to** `"☀️ Light"` (copy it from here) 3. Click the button in the preview. It goes dark. Click again: it stays dark. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-4#step-4)

<!-- Speaker note: 1. Click the event to select it, choose **+ Condition**, **Variables**, **Variable … …**, and type `false`. Now it only goes dark when Dark is false. 2. Add a second event: **ModeButton is clicked**, and **Variable Dark =** `true`. Give it the opposite actions: Dark to `false`, background `"white"`, Title colour `"black"`, text `"🌙 Dark"`. 3. Click the button in the preview. Nothing seems to happen. Watch the events beside the preview: both light up on the one click. The first goes dark and sets Dark to true, then the second sees Dark is true and goes straight back. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-5#step-5](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-5#step-5)

<!-- Speaker note: 1. Delete both events: click each, then **⋯**, **Delete this event**. 2. Add one event: **ModeButton is clicked**, with no other condition and no action. 3. With it selected, choose **⋯**, **Add a sub-event**. 4. Give the sub-event the condition **Variable Dark =** `false` and the four dark actions from Build 2. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-6#step-6](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-6#step-6)

<!-- Speaker note: 1. With the sub-event selected, choose **⋯**, **Add an Else below**. 2. Give the Else the four light actions: Dark to `false`, background `"white"`, Title colour `"black"`, text `"🌙 Dark"`. 3. Click to go dark, click again to go light. Your event should look like this: | When (condition) | Do (actions) | |---|---| | ⚡ ModeButton is clicked | | | ↳ Variable Dark = false | Set Dark to true, background "#1c2333", Title colour "white", ModeButton text "☀️ Light" | | ↳ Else | Set Dark to false, background "white", Title colour "black", ModeButton text "🌙 Dark" | You've built a switch by hand: it remembers whether it's on (*Dark*), and one click runs one of two branches. A Toggle with the **Tick box** look is App Builder's built-in version of the same thing: `BedJob.on` is true or false, like Dark. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Trace a click

**With the sub-event and Else, the screen is dark, so Dark is true. You click ModeButton once. What happens?**

- Both run, so it goes light then dark
- The Else runs, so it goes light
- Neither runs, as Dark isn't false
- The sub-event runs, so it stays dark

* Answer: The Else runs, so it goes light

<!-- Speaker note: The click triggers the event once. Its sub-event checks Dark = false, which is false, so the Else runs instead and sets everything back to light. Exactly one branch runs per click. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's dark mode button doesn't seem to do anything. Click the line where Nib first goes wrong.**

```
 1  Nib wants the button to go dark on one click and light on the next.
 2  Nib adds an event: ModeButton is clicked, and Variable Dark = false: set Dark to true and go dark.
 3  Nib adds a second event: ModeButton is clicked, and Variable Dark = true: set Dark to false and go light.
 4  Nib clicks the button, and the screen stays light.
```

* Answer: line 3

<!-- Speaker note: Line 3: a second separate click event also runs on the same click, straight after the first, and undoes it. The fix is one click event with a sub-event and an Else. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the events <span style="font-size:.6em;color:#64748b">(5 min)</span>

Two students stand up as the two flat events, each with a card: "If light, go dark" and "If dark, go light". Turn the room lights on and say "click". They act in order: lights off, then straight back on. The class watches the room end where it started. Then redo it with one student as the event and two as the branches, where only one may act.

<!-- Speaker note: Every matching event runs on one click, in order. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: count what's done



- **Count what's done:** Add a variable *Done* (starting at 0) and a Text called *DoneText* on the card, under the jobs. A tick box has its own trigger, **BedJob is switched**, and its 
- **A checklist for someone:** Make a checklist for someone you know: a packing list, a morning routine, or jobs for a club. Use their words for each job. Add a **Reset** button that unticks 

[Open this step](https://tutorials.learningwaypoints.com/code/apps/chores-checklist/?full=step-8#step-8)

<!-- Speaker note: What this step is for: Counting jobs done uses the same shape again with the tick boxes' own trigger, is switched, and condition, is on; then a checklist for a real person moves it to design. For students who need more support: Give pairs the finished event (the table at the end of Build 5) to copy, then ask them to explain each row. For early finishers: Show "All done!" when Done is 3: set DoneText to if(Done = 3, "All done!", "Done: " & Done & " of 3"). Or swap ModeButton for a Toggle with the Switch look, and use ModeButton is switched with ModeButton is on. The hard part, on purpose: Building the version that doesn't work on purpose (Build 3) feels like wasted effort, and Build 4 asks students to delete it and type the actions again. That's the point: they need to see two flat events cancel before the sub-event makes sense. Pairs can share the typing. When students get stuck: The screen doesn't go dark at all. Ask: What does the condition check, and what does Dark start at? Fix: Dark starts at false, so the dark branch checks Variable Dark = false. Type false with no quote marks. / The colour action is missing for a job. Ask: What kind of object is the job? Fix: Toggles can't be coloured; that's why the jobs sit on a light card. Set colours only on Texts, Boxes and Buttons. / There's no Add a sub-event in the menu. Ask: Which level is the app on? Fix: Sub-events need level 2 or more. In a lesson the level is set for you; if the menu lacks it, tell your teacher. / Done goes up when unticking. Ask: Which branch has the add 1? Fix: Add 1 belongs in the BedJob is on branch (it's just been ticked); subtract 1 in the Else. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A mute button app has two events: Mute clicked and Muted = false → set Muted to true; clicked and Muted = true → set Muted to false. What happens when you click, and how do you fix it?**

* Both run on one click, so it mutes then straight away unmutes. Fix: one click event with a sub-event (Muted = false → mute) and an Else (unmute).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Water tracker, which keeps a display up to date every tick and checks a goal. -->
