---
marp: true
theme: default
html: true
---

# Tidy up the journal

App Builder apps · Tidy up

<!-- Speaker note: Students refactor the values journal: they change how it's built without changing what it does. Four near-identical button events become one function, Pick(value), that each button calls with its own value; then a Home event written on two screens becomes one All screens event. A journey run before and after is the test that nothing changed. They hand in by sharing a link. About 50 minutes (Run it 5 min · Spot 5 min · Tidy 1 15 min · Nib 5 min · Tidy 2 12 min · Same journey 5 min · Hand in 3 min). -->

---

## Today

- I can spot repetition in my events and say what's the same and what's different.
- I can make a function with a parameter and call it from several events.
- I can use one All screens event in place of the same event on several screens.
- I can check that a change didn't break anything by running the same test before and after.

<!-- Speaker note: Before class: This lesson starts from the finished values journal, so students who did that lesson will recognise it. Students who missed it can still do this one: the first step has them use the app before changing it. Refactoring is a real skill in any app or language: spot repetition, pull it into one place, then run the same test again. The point to land is the last part. A refactor that changes what the app does is a bug, however tidy it looks. Functions and All screens are Level 4. Each step opens App Builder at Level 4, so both show in the sidebar. Inside Pick, `value` is a plain name (no quote marks). The call gives it a value: `Call Pick with value = "Courage"` (quote marks, because there it's text). An All screens event runs on every screen, matched by object name. On Choose there's no HomeButton, so the event never happens there. Renaming AnotherButton to HomeButton keeps its text ("Add another"): the name is what events use, the text is what the user sees. Hand-in: Share puts the whole app inside the link (nothing is uploaded), and the link opens a play-only page with "Open a copy in App Builder". Save gives a file instead (a .json, or a .zip when the app has its own pictures or sounds). Teacher: Spot the repetition (whole class, on the deck): put the four events side by side. Circle what's the same, underline what's different. Teacher: Tidy 1: checkpoint: does each button still go to Describe with the right question? Fix that before Tidy 2. Teacher: Tidy 2: ask what would happen if we added a fourth screen with a HomeButton. (Nothing to add: the All screens event already covers it.) Teacher: Same journey: pairs swap and do each other's journey, comparing with the notes from the start. -->

---

## Why it matters

> Real apps get changed for years. When the same few actions are copied in five places, a change means five edits, and missing one is a bug. Tidying them into one place is called refactoring.

<!-- Speaker note: The values journal from an earlier lesson works. Inside, though, some of it is written out more than once. Today you'll **refactor** it: change how it's built without changing what it does. 1. **Spot the repetition:** jobs written out almost the same way in more than one place. 2. **Pull it into one place:** a function, or an event on All screens. 3. **Check nothing changed:** run the same journey before and after, and get the same result. ![The values journal's three screens: four value buttons; a question with a typing box and an Add button; and a list of entries such as "COURAGE: I asked a question in class".](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Imagine your app has the same three actions copied into ten button events, and now every button should also play a sound. What could go wrong?**

- How many edits is that?
- What happens if you miss one?

<!-- Speaker note: Ten edits, and one missed is a bug nobody notices straight away. Writing the job once means one change, in one place. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Run it and write it down

This is the finished values journal, open on the **Run** tab. Do this journey and write down what you see at the end:

1. On Choose, click **Courage**.
2. Type *I asked a question in class* and click **Add to my journal**.
3. On the Journal screen, write down the entry and the count exactly as they appear.

You'll do the same journey at the end. If anything is different then, the tidy-up changed what the app does.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Spot the repetition

**Open the Choose screen's Events tab. The four value buttons each have an event. What is different between them?**

- The variable each one sets
- Only the value they set Chosen to
- The screen each one goes to next
- Nothing: all four are the same

* Answer: Only the value they set Chosen to

<!-- Speaker note: All four set Chosen and go to Describe. Only the value changes. The same part becomes the function's actions; the part that changes becomes its parameter. What this step is for: Naming what's the same and what's different in the four events is what tells you the function's actions (the same part) and its parameter (the different part). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Same and different <span style="font-size:.6em;color:#64748b">(5 min)</span>

Put the four Choose events side by side on the board. Students circle what's the same in all four and underline what's different.

<!-- Speaker note: Circled: Set variable Chosen, Go to screen Describe. Underlined: the value. Circled becomes the function's actions, underlined becomes its parameter. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Tidy 1: one function, Pick

1. In the sidebar, under **Functions**, click **+ Function** and name it *Pick*.
2. Click **+ Parameter** and call it *value*. Inside the function, *value* is whatever the call gives it.
3. Add the function's actions: **Variables**, **Set variable Chosen to** `value` (no quote marks: it's the parameter's name, not the word "value"), then **Screen**, **Go to screen** Describe.
4. Open the **Choose** screen's events. In **KindnessButton is clicked**, delete both actions and add **Functions**, **Call Pick** with value `"Kindness"`.
5. Do the same for the other three buttons, each with its own value.
6. Run it and click each button. Does each one still go to Describe with the right question?

Now, if every value should also play a sound, that's one change in Pick, not four.

[Open this step](https://tutorials.learningwaypoints.com/code/apps/tidy-up-journal/?full=step-3#step-3)

<!-- Speaker note: What this step is for: The same actions go in the function once; the one thing that changed becomes a parameter the call fills in. For students who need more support: Do Tidy 1 together for Kindness on the board, then let pairs do the other three buttons. For early finishers: Make the Describe screen's AddButton event shorter with a second function, SaveEntry(text), that adds the entry and goes to the Journal screen. Is it worth it for one event? (A function earns its place when it's used more than once, or when its name makes the event easier to read.) The hard part, on purpose: The hard part is the parameter. Students often type "value" with quote marks inside Pick, which sets Chosen to the word value. Ask what Chosen shows on the left when they Run; a parameter is a plain name, like a variable. When students get stuck: Clicking a value does nothing. Ask: What did the old events do that Pick doesn't? Fix: Add Go to screen Describe to Pick, after Set variable Chosen to value. / The question says 'What did you do to show value?' Ask: In Pick, is value inside quote marks? Fix: Remove the quote marks: Set variable Chosen to value, with value as a plain name. / Home works on Describe but not on Journal. Ask: What is the Journal screen's button called now? Fix: Rename AnotherButton to HomeButton; the All screens event looks for that name. / The check for Tidy 2 doesn't tick, but Home works. Ask: Are the old Home events still on Describe or Journal? Fix: Delete them: the All screens event does the job on both screens. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 16px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's slip

**After Nib's tidy-up, clicking a value does nothing you can see. Click the line where Nib first goes wrong.**

```
 1  Nib makes a function, Pick(value).
 2  Pick's only action is Set variable Chosen to value.
 3  Each value button's event is now just Call Pick with its value, such as "Courage".
 4  Nib runs the app and clicks Courage. The app stays on the Choose screen.
```

* Answer: line 2

<!-- Speaker note: Line 2: Pick only sets Chosen. The old events also went to Describe, and that action didn't make it into the function, so the app quietly stays on Choose. A refactor must keep everything the old events did. What this step is for: Finding the action Nib left out shows that a refactor has to carry over everything the old events did, not just the part that changed. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Tidy 2: one Home event for every screen



- **Add Home the old way:** The Describe screen has no way back. Add one the way you know: 1. Open the **Describe** screen and add a **Button** called *HomeButton*, with the text *Home*. 2
- **Tidy them into one:** 1. On the Journal screen, rename *AnotherButton* to *HomeButton*. Keep its text as *Add another*: the name is for the events, the text is for the user. 2. Click

[Open this step](https://tutorials.learningwaypoints.com/code/apps/tidy-up-journal/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing the same Home event on two screens first makes the repetition real; one All screens event then replaces both, and any new screen with a HomeButton gets it for free. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/apps/tidy-up-journal/?full=step-6#step-6](https://tutorials.learningwaypoints.com/code/apps/tidy-up-journal/?full=step-6#step-6)

<!-- Speaker note: Open the **Choose** screen, then **Run**, and do the same journey as at the start: **Courage**, *I asked a question in class*, **Add to my journal**. Compare the Journal screen with what you wrote down. If something is different, the tidy-up changed what the app does. Find the event or function you changed and compare it with the old one. Students should be able to say: I did the same journey as at the start and got exactly the same entry and count. I also checked that Home on Describe and Add another on Journal both go back to Choose. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Hand it in

1. Click **Share** at the top of App Builder and copy the link.
2. Send it to your teacher the way your class usually hands work in. The link opens your app ready to run, with **Open a copy in App Builder** if they want to look inside.

If your teacher would rather have a file, **Save** at the top, then **Save to this computer…**, keeps a copy to upload instead.

[Open this step](https://tutorials.learningwaypoints.com/code/apps/tidy-up-journal/?full=step-7#step-7)

<!-- Speaker note: What this step is for: Sharing the working app lets the teacher run it, not just read about it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A quiz app has five answer buttons. Each one's event adds 1 to Score, plays a sound and goes to the next question. How could you tidy it, and how would you know you hadn't broken it?**

* Make one function, such as Answer(), with those three actions, and have each button call it. Then play the same quiz before and after and check the score, sound and next question are the same.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Creature scores, functions that give back a value. Then the challenge: encourage a tidy-up pass before they test with a real user. -->
