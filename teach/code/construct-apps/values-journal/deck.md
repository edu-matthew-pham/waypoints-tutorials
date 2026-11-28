---
marp: true
theme: default
html: true
---

# A values journal

Construct apps · Screens and lists

<!-- Speaker note: Students build a three-screen journal: choose a value, describe what they did, and see every entry in a list. A global variable (Chosen) carries the choice between layouts, an Array (Journal) stores entries with Push, and screen 3 rebuilds a List from the array with Repeat and loopindex in a separate event from Clear. About 75 minutes (Predict 3 min · Build it 40 min · Investigate 12 min · Modify 5 min · Make 15 min). -->

---

## Today

- I can make an app with more than one screen and buttons that move between them.
- I can use a global variable to carry a choice from one screen to the next.
- I can store entries in an array and show them in a list.

<!-- Speaker note: Before class: The values are examples. Use your school's own values if it has them, or let students choose four that matter to them. Entries are personal: students keep the app on their own device and nothing is collected or shared. Keep any class discussion on made-up entries. Check before class: the Array's Global property. If the array isn't kept between layouts, entries pushed on screen 2 won't be there on screen 3. Step 4 tells students to make sure Global is ticked; confirm the property name in the current editor. When a layout is added, Construct usually offers to add an event sheet too. If a student has extra or missing sheets, click an empty part of each layout and set its Event sheet property. Step 12 and 13 must be two separate events. If Clear sits in the same event as the Repeat, it runs on every repeat and only the last entry is left (the Investigate bug). The journal forgets everything when the preview closes. That's fine for a prototype; saving between sessions (Local Storage) is a stretch. These steps were written fresh for this site and have not yet been checked click by click in the current editor. Run through them once before class. Teacher: Build it: checkpoint after step 10: does screen 2 show the chosen value? Fix that before arrays. -->

---

## Why it matters

> Almost every app has more than one screen: sign in, choose, confirm, see your list. Something has to remember what you did on the screen before.

<!-- Speaker note: Today's prototype has three screens. In Construct each screen is a **layout**, with its own event sheet. 1. **Choose:** buttons for four values, such as Kindness, Courage, Curiosity and Teamwork (or your school's own values). 2. **Describe:** "What did you do to show Courage?", a box to type in, and an *Add to my journal* button. 3. **Journal:** a list of every entry so far, and a button to add another. ![Three screens side by side: four value buttons; a question with a typing box and an Add button; and a list of entries such as "COURAGE: I asked a question in class".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Think of an app you use with several screens, such as ordering food. What does each screen need to know from the screen before?**

- What would go wrong if the next screen forgot it?
- Where might the app keep it?

<!-- Speaker note: Something has to outlast the screen change. In Construct that's a global variable (one value) or a global array (a list). Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**On screen 1 you click Courage. Its event sets the global variable Chosen to "Courage", then goes to screen 2. Screen 2's On start of layout sets its question to "What did you do to show " &amp; Chosen &amp; "?". What does the question say?**

- What did you do to show Courage?
- Nothing: screen 2 can't see screen 1's variables
- What did you do to show Chosen?
- What did you do to show ?

<!-- Speaker note: What happens: It says Courage. A global variable belongs to the whole app, not one screen, so it keeps its value when the app goes to another layout. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask what 'global' might mean before the reveal. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fconstruct-apps%2Fvalues-journal%2Fstep-2&code=widget%3A+appscreen%0Aapp%3A+journal%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/construct-apps/values-journal/?full=step-2#step-2)

<!-- Speaker note: This is the finished app you'll build. Each screen shows its own event sheet. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It says Courage. A global variable belongs to the whole app, not one screen, so it keeps its value when the app goes to another layout.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Sketch the flow first <span style="font-size:.6em;color:#64748b">(5 min)</span>

Before building, students draw the three screens as boxes on paper and an arrow for every button that moves between them. Label each arrow with the event that causes it.

<!-- Speaker note: One layout per box, one Go to layout per arrow. The sketch is the plan the event sheets follow. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct-apps/values-journal/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/construct-apps/values-journal/?full=step-3#step-3)

<!-- Speaker note: **Screen 1: choose** 1. Start a **New project** called *Values journal*. 2. On Layout 1, insert a title **Text**, *Values journal*, and a line below it, *Which value did you show today?* 3. Insert four **Buttons**, one per value, named *KindnessButton*, *CourageButton* and so on, with the value as each one's text. 4. Insert an **Array** object (it has no picture on the screen). In its Properties set Width to 0, Height 1, Depth 1, name it *Journal*, and make sure **Global** is ticked, so it carries on to the other screens. **Screen 2: describe** 5. In the Project panel, right-click **Layouts** and add a layout. If Construct offers to make an event sheet for it, say yes. 6. On Layout 2, insert a **Text** called *Question*, a **Text Input** (make it wide), and a **Button** called *AddButton* with the text *Add to my journal*. **Screen 3: the journal** 7. Add Layout 3 the same way. Insert a title **Text**, *My values in action*, a **List** object (make it tall), and a **Button** called *AnotherButton* with the text *Add another*. Each layout must use its own event sheet: click an empty part of the layout and check its **Event sheet** property. If a screen's events never seem to run, this is the first thing to check. **Events** 8. In Event sheet 1, add a global variable *Chosen*, type String (text), starting empty. 9. Still in Event sheet 1: **KindnessButton**, **On clicked** → **System**, **Set value**, Chosen to `"Kindness"`, then **System**, **Go to layout**, Layout 2. Do the same for each value button. 10. In Event sheet 2: **System**, **On start of layout** → **Question**, **Set text**: `"What did you do to show " & Chosen & "?"` 11. Also in Event sheet 2: **AddButton**, **On clicked** → **Journal**, **Push**, back, X axis, value `uppercase(Chosen) & ": " & TextInput.Text`, then **Go to layout**, Layout 3. 12. In Event sheet 3: **System**, **On start of layout** → **List**, **Clear**. 13. Add a *separate* event in Event sheet 3: **System**, **On start of layout**, then right-click it, **Add another condition**, **System**, **Repeat**, `Journal.Width` times. Action: **List**, **Add item**, `Journal.At(loopindex)`. 14. **AnotherButton**, **On clicked** → **Go to layout**, Layout 1. 15. Preview from Layout 1 and add three entries. Students should be able to say: My journal works: I choose a value, describe it, and see it in the list, and new entries are added below the old ones. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count with loopindex

**The journal has 3 entries, so Journal.Width is 3. The Repeat runs 3 times. What is loopindex each time?**

- 1, then 2, then 3
- 0, then 1, then 2, then 3
- 3 each time
- 0, then 1, then 2

* Answer: 0, then 1, then 2

<!-- Speaker note: loopindex starts at 0 and goes up by 1 each time round, so 3 repeats give 0, 1, 2. The first entry is Journal.At(0), so each repeat adds the next entry to the list. -->

<!-- Speaker note: Teacher: write loopindex 0, 1, 2 under three entries on the board, and point to At(0), At(1), At(2). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's journal only ever shows the latest entry. Click the line where Nib first goes wrong.**

```
 1  Nib wants screen 3 to show every journal entry.
 2  Nib makes one event: On start of layout and Repeat Journal.Width times, then List clear.
 3  In the same event Nib adds a second action: List add item Journal.At(loopindex).
 4  Nib adds three entries, and the list only shows the last one.
```

* Answer: line 2

<!-- Speaker note: Line 2: Clear is in the same event as the Repeat, so it runs on every repeat. Each time round the list is cleared, then one entry is added, so only the last one is left. Clear belongs in its own On start of layout event. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why global?

**What if Chosen were an instance variable on a button in screen 1, not a global variable?**

- It would show every value at once
- Screen 2 would read it faster
- Screen 2 couldn't read it
- It would work the same way

* Answer: Screen 2 couldn't read it

<!-- Speaker note: When the app goes to Layout 2, screen 1's objects (and their variables) aren't there. A global variable belongs to the whole app, so every screen can read it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Count the entries



- **Choose the expression:** 
- **Build it:** Add a **Text** to Layout 3 and set it in the first On start of layout event: `"You've added " & Journal.Width & " moments"`

<!-- Speaker note: What this step is for: Showing the count reuses the array's Width, an existing value, rather than a new variable, which checks students know what the array holds. For students who need more support: Build screens 1 and 2 as a class first, then let students build screen 3 in pairs. For early finishers: Save the journal between sessions with the Local Storage object (Array AsJSON and Load), or show the newest entry first. The hard part, on purpose: This is the longest build in the course, and the most common failure is a layout using the wrong event sheet, so nothing on that screen happens. Check each layout's Event sheet property before anyone debugs further. When students get stuck: A screen's buttons do nothing. Ask: Which event sheet does this layout use? Fix: Click empty space on the layout and set its Event sheet property to the sheet with its events. / Screen 3's list is empty. Ask: Is the Journal array Global, and does the Push run before Go to layout? Fix: Tick Global on the array, and keep Push above Go to layout in AddButton's event. / Only the last entry shows. Ask: Are Clear and Add item in the same event? Fix: Move Clear into its own On start of layout event above the Repeat event. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: test the flow

Ask someone to add two entries without any help from you. Watch where they pause or click the wrong thing. Then change one thing: a clearer button name, a *Back* button on screen 2, or an empty-box check before saving.

<!-- Speaker note: What this step is for: Watching a user move through three screens is the design half of a prototype: the flow that made sense to the builder isn't always clear to someone else. -->

<!-- Speaker note: Teacher: pair students from different tables, so the tester hasn't seen the app built. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A shopping app has a Cart screen and a Pay screen. The Cart screen sets a variable Total to 25. How can the Pay screen show $25?**

* Make Total a global variable; it keeps its value when the app goes to the Pay layout, so the Pay screen can set its text from it.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Creature stats, where one object has many copies, each with its own values. -->
