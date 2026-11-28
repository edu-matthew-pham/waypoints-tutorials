---
marp: true
theme: default
html: true
---

# A practice tracker

Construct apps · Apps that respond

<!-- Speaker note: Students build a practice tracker in Construct 3: a text input, a Save button and a total. A global variable holds the total, the button's On clicked event adds to it, and a Set text action shows it. The first build leaves out Set text on purpose, so students see the variable change while the screen doesn't. About 60 minutes (Predict 3 min · Build it 30 min · Investigate 10 min · Modify 7 min · Make 10 min). -->

---

## Today

- I can lay out a screen in Construct with text, a text box and a button.
- I can make a button change a number the app remembers.
- I can make the screen show the new number after it changes.

<!-- Speaker note: Before class: Try it first on a student laptop: open editor.construct.net and start a new project. Construct needs WebGL (graphics support in the browser); without it, the layout won't open. The free edition is enough: no sign-in, no seats. This app uses 1 to 3 events; the free edition allows 50. Construct keeps nothing for students unless they sign in, so they should save a copy to their device (or the school's storage) before closing the tab. If your school uses cloud storage, Construct's Settings can save to it. These steps were written fresh for this site and have not yet been checked click by click in the current editor. Run through them once before class; Construct updates itself, so a menu name may differ slightly. The one idea: a variable remembers a number, an event changes it, and the screen only shows the new number when an event sets the text. Step 10 is the reveal: the total changes, the screen doesn't. If students type words instead of a number, int() gives 0, so nothing is added. That's a good question for later (checking input), not this lesson. Teacher: Build it: stop the class at step 10. Ask: is Minutes 45? How would we know? What did we never tell the screen to do? -->

---

## Why it matters

> Apps that track things, like steps, screen time or practice, all do the same small job underneath: remember a number, change it when you do something, and show it.

<!-- Speaker note: A **prototype** is an early version of an app that you can click through and test, before anyone spends weeks building the real thing. In this course you'll build prototypes with **Construct 3**, a tool that runs in your browser. A Construct app has two halves: - The **layout** is the screen: the text, boxes and buttons the user sees. - The **event sheet** is what makes it work. Each **event** is a row: on the left, *when* something happens; on the right, *what to do* then. Today's app remembers your practice total in a **global variable**: a named box that holds a number for the whole app. ![The practice tracker: a title, a box to type minutes, a Save button, and a line saying "You've practised 45 minutes".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Think of an app that counts something for you (steps, screen time, a streak). What does it have to remember, and when does the number on the screen change?**

- What happens the moment you do the thing it counts?
- Does the number on screen change before, at the same time, or after?

<!-- Speaker note: Every tracker remembers a number (a variable), changes it when something happens (an event), and shows it (setting the text). Today's prototype does all three. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The total starts at 0, and the screen says "You've practised 0 minutes". The only event is: Save on clicked → add 15 to Minutes. You click Save three times. What does the screen say now?**

- Nothing: the text disappears
- You've practised 0 minutes
- You've practised 45 minutes
- You've practised 15 minutes

<!-- Speaker note: What happens: It still says 0 minutes. Minutes is now 45, but nothing told the text to change. The screen only shows a new total when an event sets the text. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: most say 45. Leave it open until step 10. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Does the total change? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Show the one-event table. Hands up for each option after three clicks. Don't settle it: step 10 of the build is the reveal.

<!-- Speaker note: Most say 45. Minutes is 45; the screen still says 0. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fconstruct-apps%2Fpractice-tracker%2Fstep-2&code=widget%3A+appscreen%0Aapp%3A+tracker%0Asettext%3A+off%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/construct-apps/practice-tracker/?full=step-2#step-2)

<!-- Speaker note: This is the version from the prediction. The event sheet beside it lights up each time an event runs, and the line under the app shows the variable's real value. You'll build the version that works. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* It still says 0 minutes. Minutes is now 45, but nothing told the text to change. The screen only shows a new total when an event sets the text.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct-apps/practice-tracker/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/construct-apps/practice-tracker/?full=step-3#step-3)

<!-- Speaker note: Open Construct at [editor.construct.net](https://editor.construct.net). It runs in the browser and you don't need to sign in. **Make the screen** 1. Choose **New project**, call it *Practice tracker* and choose **Create**. 2. Double-click the layout to insert a **Text** object. In the **Properties** panel on the left, set its Text to *Practice tracker* and make it bigger. Drag it to the top. 3. Insert a **Text Input** below it. This is the box the user types in. 4. Insert a **Button** beside it. Set its Text to *Save*, and set its **Name** to *SaveButton*. 5. Insert one more **Text** below. Set its Text to *You've practised 0 minutes* and its Name to *TotalText*. Give objects names that say what they are. You'll pick them from a list in the event sheet, and *Text3* won't tell you which one it is. **Make it work** 6. Open **Event sheet 1** from the Project panel on the right. 7. Right-click the sheet and choose **Add global variable**. Name it *Minutes*, type Number, starting value 0. 8. Choose **Add event**, then **SaveButton**, then **On clicked**. 9. Choose **Add action**, then **System**, then **Add to**. Pick *Minutes* and type 15. 10. Press the **Preview** button (the play arrow) and click Save a few times. Does the screen change? **Show the total** 11. Add a second action to the same event: **TotalText**, then **Set text**. Type exactly: `"You've practised " & Minutes & " minutes"` 12. Preview again and click Save. Now it changes. 13. Last, use what the user typed. Change the 15 in the Add to action to `int(TextInput.Text)`. Preview, type a number and click Save. Save a copy of your project to your computer before you close the tab. Students should be able to say: I built the practice tracker. With only the add action, the screen stayed at 0. With Set text added, it showed my total. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the text

**Minutes is 45. The Set text action says "You've practised " &amp; Minutes &amp; " minutes". What does the screen show?**

- You've practised &amp; 45 &amp; minutes
- You've practised 45 minutes
- 45
- You've practised Minutes minutes

* Answer: You've practised 45 minutes

<!-- Speaker note: Words in quote marks are shown as they are. Minutes, outside the quotes, is replaced by its value. The & signs join the pieces into one line. -->

<!-- Speaker note: Teacher: read the Set text expression aloud together, piece by piece. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why int()?

**Why does the add action use int(TextInput.Text) and not just TextInput.Text?**

- int() checks that the box isn't empty
- int() rounds the number to the nearest 10
- A typed box holds text; int() makes it a number
- Construct needs int() before any action

* Answer: A typed box holds text; int() makes it a number

<!-- Speaker note: A Text Input always holds text, even when you type 20. int() turns the text "20" into the number 20, so it can be added to Minutes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib's screen never changes from 0 minutes. Click the line that explains why.**

```
 1  Nib adds a global variable, Minutes, starting at 0.
 2  Nib adds an event: On start of layout, set TotalText to "You've practised " & Minutes & " minutes".
 3  Nib adds an event: SaveButton on clicked, add int(TextInput.Text) to Minutes.
 4  Nib types 20, clicks Save, and the screen still says 0 minutes.
```

* Answer: line 2

<!-- Speaker note: Line 2: On start of layout runs once, when the app opens. After that nothing sets the text again, so it keeps saying 0. Nib needs a Set text action in the Save event too. -->

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

## A Reset button



- **Choose the actions:** 
- **Build it:** Insert a **Button** with the text *Reset* and name it *ResetButton*. In the event sheet, add **ResetButton**, **On clicked**, then the two actions. To set a var

<!-- Speaker note: What this step is for: A Reset button needs both moves again: change the variable, then set the text. Choosing both is the check that the move has stuck. For students who need more support: Pairs: one reads the step, one clicks, then swap for the event sheet half. For early finishers: Make the total read in hours and minutes once it's over 60 (hint: floor(Minutes / 60) and Minutes % 60). The hard part, on purpose: Finding things in Construct the first time: the Properties panel, the Project panel, and where Add event and Add action are. Expect the first 10 minutes to be slow. Naming objects (SaveButton, TotalText) pays off as soon as students open the event sheet. When students get stuck: Nothing happens when Save is clicked. Ask: Which object did you pick in Add event? Fix: Check it's the button's On clicked, and that the button is the one named SaveButton. Also check the layout's Event sheet property says Event sheet 1. / The text shows the words Minutes or & on the screen. Ask: Which parts are inside the quote marks? Fix: Only the words to show go in quotes. Minutes and the & signs go outside them. / Typing a number adds 0. Ask: What does the add action use? Fix: It should be int(TextInput.Text), with the Text Input's name if it was renamed. -->

<!-- Speaker note: Teacher: before they build Reset, ask what would go wrong with only one of the two actions. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: count the sessions

Add a second global variable, *Sessions*, that goes up by 1 each time you click Save. Show it in a new Text object, such as *Sessions: 3*. Make Reset clear it too.

Then show your tracker to someone. Ask them to use it without help. What did they try that you didn't expect?

<!-- Speaker note: What this step is for: A second variable and a second Set text show that each number the app remembers needs its own variable, changed and shown by events. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A variable called Score goes from 3 to 4 when a button is clicked, but the screen still says 3. What's missing?**

* A Set text action in the button's event, so the screen shows the new score.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Chores checklist, which makes a tick that turns on and off with sub-events and Else. Students who go on to the games course meet events and variables again, in a game. -->
