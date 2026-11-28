---
marp: true
theme: default
html: true
---

# Build around a simulation

Data apps · Build around a simulation

<!-- Speaker note: Optional extension: an Embed shows a ready-made pendulum simulation (one web page, pendulum.html in this folder). The page sends period and length; the app sends gravity. Students build the app around it: Sim sends period shows the period (Build 1), planet buttons send gravity (Build 2), Record adds a row to Readings (Build 3). The Check shows that only the names in Sends get through. Then students use the lab to answer a science question and add a Clear button. About 45 minutes (Try 5 min · Builds 1–3 20 min · Check 3 min · Use your lab 10 min · Make it yours 7 min). -->

---

## Today

- I can use a value an embedded simulation sends, with an event and its value.
- I can send a value to an embedded simulation from an event.
- I can record a simulation's results in a table and use them to answer a question.

<!-- Speaker note: Before class: Needs App Builder 1.13 (the Embed object and its messages, Level 4). The simulation is a single web page; the app never changes it. The page runs in a safe box: it can't see the rest of the app or anything saved in the browser, and the app only takes the message names listed in Sends, each with one plain value. The page is the same one as App Builder's Pendulum lab sample. You can make your own for another topic: in an Embed's Properties, fill in Sends and Listens for, then Copy a prompt for an AI chat gives a prompt that asks for a page using those names. Paste the page it gives back with + Paste HTML. Use only an AI chat your school allows; check the page works before a class uses it. The physics: a simple pendulum's period is 2π√(L/g), so it grows with length and shrinks with gravity, and doesn't depend on the bob's mass (for small swings). The page works the period out from that formula, so readings are exact; a real pendulum's would vary. Teacher: Before Build 1 (whole class): open Sim's Properties. What does the simulation tell the app? What can the app tell it? Teacher: Use your lab: collect a few rows from the class on the board and look for the pattern together. -->

---

## Why it matters

> Someone has already made a pendulum simulation. Your job is the app around it: buttons that change it, and a table that records what it does.

<!-- Speaker note: An **Embed** shows a web page inside your app. Here the page is a pendulum simulation, made as one web file. You don't change the page: you build the app around it. The page and your events talk by **messages**, each a name and one value: - The pendulum **sends** *period* (how many seconds one swing takes) and *length*. In your events, **Sim sends period** runs each time it does, and `Sim.period` is the latest value. - It **listens for** *gravity*. **Send gravity = … to Sim** changes the pull on the pendulum. The names are listed in the Embed's Properties, under **Sends** and **Listens for**. The page only ever gets values, never your events, and your app only gets values from it. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Someone has made a pendulum simulation. What would you need to know to build an app around it?**

- What could the simulation tell your app?
- What could your app tell the simulation?

<!-- Speaker note: Its inputs and outputs: the names in Sends and Listens for. The app never needs to look inside the page. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Drag **Length** in the simulation and watch *Period* on the right change. Click **Moon**, then **Record reading**: a row goes into the table.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-2#step-2)

<!-- Speaker note: 1. Add an event: **Sim sends period**. It's in Sim's group, with *period* already chosen. 2. Its action: **Set PeriodText text to** `"Period: " & Sim.period & " s"` 3. Run it and drag **Length**. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-3#step-3)

<!-- Speaker note: The three planet buttons are copies of one object, *Planet*, and each copy has its own *g* (look at its Properties). 1. Add an event: **Planet is clicked**. 2. **Set variable Gravity to** `Planet.g` 3. **Send gravity = Gravity to Sim** (in Sim's group). 4. **Set GravityText text to** `"Gravity: " & Gravity & " m/s²"` Run it. Does the pendulum swing faster or slower on the Moon? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-4#step-4)

<!-- Speaker note: Add an event: **Record is clicked** → **Add a row to table Readings**, with *length* `Sim.length`, *gravity* `Gravity` and *period* `Sim.period`. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Check: what gets through?

**The pendulum page also sends a message called angle. Sim's Sends box says only period, length. What happens when angle arrives?**

- Sim sends period runs
- Nothing: the app ignores it
- Sim.angle now holds it
- The app shows an error

* Answer: Nothing: the app ignores it

<!-- Speaker note: The Embed only lets through the names in its Sends box, and only one plain value each: a number, some text, true or false. To use angle, add it to Sends; then there's a Sim sends angle event and a Sim.angle value. What this step is for: Asking what happens to a name the Embed doesn't list shows that the app only accepts the messages it was told to expect. -->

---

## Use your lab

Record two lengths on Earth, then the same two lengths on the Moon. Look at your table:

- What makes the period **longer**?
- If you could change the bob's weight, would it change the period? (The simulation doesn't let you, because it wouldn't.)

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: start again



- **Clear the readings:** There's a **Clear** button. Make it clear the *Readings* table.
- **One more idea:** Add a **Jupiter** button: duplicate a Planet and set its *g* to 24.8. Or show how many readings there are with `count(Readings)`.

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/simulation/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Adding Clear reuses a table action from earlier lessons on data that came from the simulation. For students who need more support: Build 1 together with the clip; pairs do Builds 2 and 3. For early finishers: Add a Sim sends length event that shows the length too. Why does the page send both, when the app could work out the period itself? The hard part, on purpose: Seeing the simulation as a part with inputs and outputs: point at the Sends and Listens for boxes in Sim's Properties before Build 1. When students get stuck: Sim sends period isn't in the list. Ask: Which group are you looking in? Fix: It's in Sim's group (the object), not System. Sim must list period under Sends in its Properties. / An error says Sim hasn't sent period yet. Ask: When did the page last send a value? Fix: Run the app and wait a moment, or drag Length: the page sends its values when it starts and whenever they change. / Clicking Moon changes the text but not the swing. Ask: Is there a Send gravity action, and what does it send? Fix: Add Send gravity = Gravity to Sim after setting the variable. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What changes the period? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Collect readings from a few pairs on the board: length, gravity, period. What makes the period longer? What doesn't change it?

<!-- Speaker note: Longer string, longer period; less gravity, longer period. The bob's mass doesn't matter (for small swings). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A climate simulation page sends temperature and listens for co2. Name the event and the action you would use in App Builder.**

* The event Sim sends temperature (with Sim.temperature as the value), and the action Send co2 = … to Sim.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Science: Year 10 physics on forces and motion. Code: the web pathway's DOM course, where pages send and receive messages in the same way. -->
