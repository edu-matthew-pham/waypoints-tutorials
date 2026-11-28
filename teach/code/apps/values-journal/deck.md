---
marp: true
theme: default
html: true
---

# A values journal

App Builder apps · Screens and lists

<!-- Speaker note: Students build a three-screen journal: choose a value, describe what they did, and see every entry in a list. A whole-app variable (Chosen) carries the choice between screens, a list variable (Journal) stores entries with Add to the end of list, and a List object on screen 3 shows the list. About 75 minutes (Try 5 min · Build 1–4 35 min · Check 8 min · Make it yours 20 min). -->

---

## Today

- I can make an app with more than one screen and buttons that move between them.
- I can use a whole-app variable to carry a choice from one screen to the next.
- I can store entries in a list and show them with a List object.

<!-- Speaker note: Before class: The values are examples. Use your school's own values if it has them, or let students choose four that matter to them. Entries are personal: the app keeps them in the browser on the student's own device and nothing is collected or shared. Keep any class discussion on made-up entries. Each screen has its own events. The Events tab's heading names the screen; switch screens by clicking a screen's name in the sidebar. Run starts on the screen you were editing. To test the whole flow, open the Choose screen first. The List object shows a list variable by itself (its Shows property), so no loop is needed to fill it. Loops (For each, LoopIndex) come up in the Check step, and for real in the next lesson. The journal forgets entries when the project is restarted. That's fine for a prototype. Teacher: Before Build 2 (whole class, on the deck): will screen 2 know which value was clicked on screen 1? Ask what 'whole app' might mean. Teacher: Build 2: checkpoint: does screen 2 show the chosen value? Fix that before lists. Teacher: Check: write LoopIndex 1, 2, 3 under three entries on the board, and point to item(Journal, 1), item(Journal, 2), item(Journal, 3). -->

---

## Why it matters

> Almost every app has more than one screen: sign in, choose, confirm, see your list. Something has to remember what you did on the screen before.

<!-- Speaker note: Today's prototype has three screens. Each screen has its own objects and its own events. 1. **Choose:** buttons for four values, such as Kindness, Courage, Honesty and Respect (or your school's own values). 2. **Describe:** "What did you do to show Courage?", a box to type in, and an *Add to my journal* button. 3. **Journal:** a list of every entry so far, and a button to add another. ![Three screens side by side: four value buttons; a question with a typing box and an Add button; and a list of entries such as "COURAGE: I asked a question in class".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Think of an app you use with several screens, such as ordering food. What does each screen need to know from the screen before?**

- What would go wrong if the next screen forgot it?
- Where might the app keep it?

<!-- Speaker note: Something has to outlast the screen change. In App Builder that's a variable in the sidebar (one value) or a list variable (many). Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the finished app you'll build, open on the **Run** tab. On the left, beside *Chosen* and *Journal*, you can see their values now.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-2#step-2)

<!-- Speaker note: The three screens are made for you: **Choose**, **Describe** and **Journal**. Click a screen's name in the sidebar to open it. 1. In the sidebar, add a variable *Chosen* with an empty starting value (delete the 0). 2. On the **Choose** screen's Events tab: **KindnessButton is clicked** → **Variables**, **Set variable Chosen to** `"Kindness"`, then **Screen**, **Go to screen** Describe. 3. Do the same for each value button. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Sketch the flow first <span style="font-size:.6em;color:#64748b">(5 min)</span>

Before building, students draw the three screens as boxes on paper and an arrow for every button that moves between them. Label each arrow with the event that causes it.

<!-- Speaker note: One screen per box, one Go to screen per arrow. The sketch is the plan the events follow. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-3#step-3)

<!-- Speaker note: 1. Open the **Describe** screen. Add an event: **Screen**, **On start of screen** → **Question**, **Set Question text to** `"What did you do to show " & Chosen & "?"` 2. Open the Choose screen, then Run, and click a value. Does the question name it? -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-4#step-4)

<!-- Speaker note: 1. In the sidebar, under the variables, add a list called *Journal*. 2. On the Describe screen, add an event: **AddButton is clicked**. 3. Add the action **Lists**, **Add … to the end of list**, list Journal, value `uppercase(Chosen) & ": " & NoteInput.text` 4. Add a second action: **Go to screen** Journal. 5. Open the **Journal** screen, click the **List** object, and in Properties set **Shows** to Journal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-5#step-5](https://tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-5#step-5)

<!-- Speaker note: 1. On the Journal screen: **AnotherButton is clicked** → **Go to screen** Choose. 2. Open the Choose screen, then Run, and add three entries. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count with LoopIndex

**Journal has 3 entries. An event For each item in list Journal runs once per item. What is LoopIndex each time?**

- 1, then 2, then 3
- 3 each time
- 0, then 1, then 2
- 1, then 2, then 3, then 4

* Answer: 1, then 2, then 3

<!-- Speaker note: For each runs once per item, and LoopIndex counts 1, 2, 3. LoopItem is that item, the same as item(Journal, LoopIndex). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's journal only ever shows the latest entry. Click the line where Nib first goes wrong.**

```
 1  Nib wants the Journal screen to show every entry.
 2  Nib's AddButton event starts with the action Clear list Journal.
 3  Then it adds uppercase(Chosen) & ": " & NoteInput.text to the end of list Journal.
 4  Nib adds three entries, and the list only shows the last one.
```

* Answer: line 2

<!-- Speaker note: Line 2: Clear list Journal runs on every click, just before the new entry is added, so the list only ever holds one entry. Adding to the end is enough: the list keeps the old entries. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: count, then test the flow



- **Count the entries:** The Journal screen has an empty Text called *Count*. Add an event: **On start of screen** → **Set Count text to** `"Entries: " & count(Journal)`. The list grows
- **Test the flow:** Change the values to your school's own, or to four that matter to you. Then ask someone to add an entry without any help from you. Write down one place they pau

[Open this step](https://tutorials.learningwaypoints.com/code/apps/values-journal/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Showing the count reuses the list itself with count(), then watching a user move through three screens is the design half of a prototype. For students who need more support: Build screens 1 and 2 as a class first, then let students build screen 3 in pairs. For early finishers: Show only the Courage entries: on the Journal screen, use For each item in list Journal with a condition on LoopItem, and add matching ones to a second list. The hard part, on purpose: This is the longest build in the course, and the most common failure is adding events on the wrong screen. The Events tab shows the events of the screen open in the sidebar; check its heading before anyone debugs further. When students get stuck: A screen's buttons do nothing. Ask: Which screen were the events added to? Fix: Look at the Events tab's heading. Move the event by rebuilding it on the right screen. / Screen 3's list is empty. Ask: What does the List's Shows property say, and does the Add run before Go to screen? Fix: Set Shows to Journal, and keep Add to the end of list above Go to screen in AddButton's event. / The question says 'What did you do to show ?' Ask: Did you run from the Choose screen? Fix: Open the Choose screen, then Run, so a value is chosen first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A shopping app has a Cart screen and a Pay screen. The Cart screen sets a variable Total to 25. How can the Pay screen show $25?**

* Make Total a whole-app variable (in the sidebar); it keeps its value when the app goes to the Pay screen, so the Pay screen can set its text from it.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Creature stats, where one object has many copies, each with its own values. -->
