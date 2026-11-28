---
marp: true
theme: default
html: true
---

# A practice tracker

App Builder apps · Apps that respond

<!-- Speaker note: Students build a practice tracker in App Builder: a text input, a Save button and a total. A variable holds the total, the button's On clicked event adds to it, and a Set text action shows it. The build adds Set text last, so students see the variable change while the screen doesn't, then fix it. About 60 minutes (Try 5 min · Build (three short steps) 35 min · Check 5 min · Make it yours 15 min). -->

---

## Today

- I can lay out a screen in App Builder with text, a text box and a button.
- I can make a button change a number the app remembers.
- I can make the screen show the new number after it changes.

<!-- Speaker note: Before class: App Builder runs inside the lesson page: nothing to install, no sign-in, no event limit. Each step keeps its own work in the browser, so a student who comes back carries on; **Start again** (press it twice) resets that step. Work is per browser and device: on a shared computer, use **Save** to keep a copy as a file (**Open** brings it back), or **Share** for a link to the working app. The steps below have tick boxes that tick by themselves when the student's events match (the page reads the app as plain text). They say what to build, not how the screen looks, so layouts can differ. The one idea: a variable remembers a number, an event changes it, and the screen only shows the new number when an event sets the text. Build 2 is the reveal: the total changes, the screen doesn't. If students type words instead of a number, int() gives 0, so nothing is added. That's a good question for later (checking input), not this lesson. Teacher: Before the build (whole class, on the deck): does the total on screen change if the event only adds to Minutes? Most say yes. Leave it open until Build 2, where the screen doesn't change. Teacher: Build 2: stop the class at the last step. Ask: is Minutes 45? How would we know? What did we never tell the screen to do? Teacher: Check: read the Set text expression aloud together, piece by piece. -->

---

## Why it matters

> Apps that track things, like steps, screen time or practice, all do the same small job underneath: remember a number, change it when you do something, and show it.

<!-- Speaker note: A **prototype** is an early version of an app that you can click through and test, before anyone spends weeks building the real thing. In this course you'll build prototypes with **App Builder**, which runs right here on the page. An App Builder app has two halves: - The **design** is the screen: the text, boxes and buttons the user sees. - The **events** are what make it work. Each **event** is a row: on the left, *when* something happens; on the right, *what to do* then. Today's app remembers your practice total in a **variable**: a named box that holds a number for the whole app. ![The practice tracker: a title, a box to type minutes, a Save button, and a line saying "You've practised 45 minutes".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Think of an app that counts something for you (steps, screen time, a streak). What does it have to remember, and when does the number on the screen change?**

- What happens the moment you do the thing it counts?
- Does the number on screen change before, at the same time, or after?

<!-- Speaker note: Every tracker remembers a number (a variable), changes it when something happens (an event), and shows it (setting the text). Today's prototype does all three. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Type some minutes and click **Save** a few times. On the left, beside *Minutes*, you can see its value now, next to the value it started at.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-2#step-2)

<!-- Speaker note: 1. On the **Design** tab, choose **+ Add object**, then **Text**. In **Properties**, change its text to *Practice tracker*. 2. Add a **Text input**: the box the user types in. 3. Add a **Button** and set its text to *Save*. 4. Add one more **Text** below. Set its text to *You've practised 0 minutes*. 5. Name the things your events will use, for what they are: select the button, click **⋯** beside it, choose **Rename** and call it *SaveButton*. Rename the text input *MinutesInput* and the last text *TotalText*. The title is never used by an event, so it can keep its name. Drag things where you want them, or use the arrow keys (Alt and the arrows change the size). Your work carries on into the next steps. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Does the total change? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Show the one-event table. Hands up for each option after three clicks. Don't settle it: step 10 of the build is the reveal.

<!-- Speaker note: Most say 45. Minutes is 45; the screen still says 0. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-3#step-3)

<!-- Speaker note: 1. Under **Variables** on the left, type *Minutes* in the New variable box, keep its starting value 0, and press **Enter**. 2. Open the **Events** tab and choose **+ Add event**. 3. Choose **+ Condition**, then **SaveButton**, then **SaveButton is clicked**. 4. Choose **+ Action**, then **Variables**, then **Add … to variable**. Type 15, check it says Minutes, and choose **Done**. 5. Click **Save** in the preview a few times. Does the screen change? It doesn't. On the left, beside *Minutes*, its value now goes up, but nothing has told the text to change. The screen only shows something new when an event sets the text. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-4#step-4](https://tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-4#step-4)

<!-- Speaker note: 1. Click the event, choose **+ Action**, then **TotalText**, then **Set TotalText text to …**. Type exactly: `"You've practised " & Minutes & " minutes"` 2. Click Save in the preview. Now it changes. 3. Use what the user typed: click the **Add 15** action and change 15 to `int(MinutesInput.text)`. A text input holds text, even when you type 20; `int()` turns it into a number. Your work is kept in this browser. **Save** at the top, then **Save to this computer…**, keeps a copy as a file if you want one. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the text

**Minutes is 45. The Set text action says "You've practised " &amp; Minutes &amp; " minutes". What does the screen show?**

- You've practised 45 minutes
- You've practised &amp; 45 &amp; minutes
- You've practised Minutes minutes
- 45

* Answer: You've practised 45 minutes

<!-- Speaker note: Words in quote marks are shown as they are. Minutes, outside the quotes, is replaced by its value. The & signs join the pieces into one line. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's screen never changes from 0 minutes. Click the line that explains why.**

```
 1  Nib adds a variable, Minutes, starting at 0.
 2  Nib adds an event: On start of screen, set TotalText text to "You've practised " & Minutes & " minutes".
 3  Nib adds an event: when SaveButton is clicked, add int(MinutesInput.text) to variable Minutes.
 4  Nib types 20, clicks Save, and the screen still says 0 minutes.
```

* Answer: line 2

<!-- Speaker note: Line 2: On start of screen runs once, when the app opens. After that nothing sets the text again, so it keeps saying 0. Nib needs a Set text action in the Save event too. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the text

**Minutes is 20. The text is set to "Total: " &amp; Minutes. What shows?**

- Total: 20
- Total: Minutes
- Total: &amp; 20
- 20

* Answer: Total: 20

<!-- Speaker note: Quoted words are shown as they are; Minutes is replaced by its value; & joins them. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: Reset and sessions



- **A Reset button:** Carry on with your tracker. Add a **Button** with the text *Reset* and rename it *ResetButton*. Its event needs two actions: **Set variable Minutes to 0**, then
- **Count the sessions:** Add a second variable, *Sessions*, that goes up by 1 each time you click Save. Show it in a new Text, such as *Sessions: 3*. Make Reset clear it too. Then show 

[Open this step](https://tutorials.learningwaypoints.com/code/apps/practice-tracker/?full=step-6#step-6)

<!-- Speaker note: What this step is for: A Reset button and a second counter need both moves again: change a variable, then set the text. Doing them without steps is the check that the move has stuck. For students who need more support: Pairs: one reads the step, one clicks, then swap for the Events half. For early finishers: Make the total read in hours and minutes once it's over 60 (hint: floor(Minutes / 60) and Minutes % 60). The hard part, on purpose: Finding things the first time: Properties on the right, renaming from the ⋯ menu on the left, and + Condition and + Action on the Events tab. Expect the first 10 minutes to be slow. Naming objects (SaveButton, TotalText) pays off as soon as students open the Events tab. When students get stuck: Nothing happens when Save is clicked. Ask: Which object did you pick for the condition? Fix: Check the condition says SaveButton is clicked, and that the button is the one named SaveButton. / The text shows the words Minutes or & on the screen. Ask: Which parts are inside the quote marks? Fix: Only the words to show go in quotes. Minutes and the & signs go outside them. / Typing a number adds 0. Ask: What does the add action use? Fix: It should be int(MinutesInput.text), with the text input's own name if it was called something else. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A variable called Score goes from 3 to 4 when a button is clicked, but the screen still says 3. What's missing?**

* A Set text action in the button's event, so the screen shows the new score.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Chores checklist, which makes a tick that turns on and off with sub-events and Else. Students who go on to Construct games meet the same events and variables again, in a game. -->
